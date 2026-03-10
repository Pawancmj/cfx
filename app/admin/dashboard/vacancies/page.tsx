"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit2, MapPin, Clock, CheckCircle2, XCircle, Search, Save, X } from "lucide-react";

interface Vacancy {
    id: number;
    title: string;
    description: string;
    location: string;
    type: string;
    is_active: boolean;
    created_at: string;
}

export default function VacanciesPage() {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVacancy, setEditingVacancy] = useState<Vacancy | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        type: "Full-time",
        is_active: true
    });

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        try {
            const res = await fetch("/api/internships/vacancies");
            const json = await res.json();
            if (json.success) {
                setVacancies(json.data);
            } else {
                setError(json.error || "Failed to fetch vacancies.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred while fetching vacancies.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenModal = (vacancy: Vacancy | null = null) => {
        if (vacancy) {
            setEditingVacancy(vacancy);
            setFormData({
                title: vacancy.title,
                description: vacancy.description,
                location: vacancy.location,
                type: vacancy.type,
                is_active: vacancy.is_active
            });
        } else {
            setEditingVacancy(null);
            setFormData({
                title: "",
                description: "",
                location: "",
                type: "Full-time",
                is_active: true
            });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingVacancy(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setError("");

        try {
            const method = editingVacancy ? "PATCH" : "POST";
            const body = editingVacancy ? { ...formData, id: editingVacancy.id } : formData;

            const res = await fetch("/api/internships/vacancies", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const json = await res.json();
            if (json.success) {
                fetchVacancies();
                handleCloseModal();
            } else {
                setError(json.error || "Failed to save vacancy.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred while saving.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this vacancy?")) return;

        try {
            const res = await fetch(`/api/internships/vacancies?id=${id}`, {
                method: "DELETE"
            });
            const json = await res.json();
            if (json.success) {
                fetchVacancies();
            } else {
                setError(json.error || "Failed to delete vacancy.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred while deleting.");
        }
    };

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Internship Vacancies</h1>
                    <p className="text-zinc-500 text-sm mt-1">Manage active openings and update listings</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
                >
                    <Plus className="w-5 h-5" /> Add New Job
                </button>
            </header>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Loading Vacancies...</p>
                </div>
            ) : error ? (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 rounded-2xl text-center">
                    <p className="font-bold">{error}</p>
                    <p className="text-xs mt-2 opacity-80">Please check your database connection or try again.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vacancies.length === 0 ? (
                        <div className="col-span-full p-20 text-center glass-card rounded-[2rem] border-white/10">
                            <p className="text-zinc-500 italic">No vacancies found. Start by adding one!</p>
                        </div>
                    ) : vacancies.map((vacancy) => (
                        <motion.div
                            key={vacancy.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-6 rounded-[2rem] border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${vacancy.is_active ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {vacancy.is_active ? 'Active' : 'Hidden'}
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleOpenModal(vacancy)} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-primary transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(vacancy.id)} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-red-400 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{vacancy.title}</h3>
                            <p className="text-zinc-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                                {vacancy.description}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    {vacancy.location}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <Clock className="w-4 h-4 text-primary" />
                                    {vacancy.type}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-[#05080a] border border-white/10 rounded-[3rem] w-full max-w-2xl overflow-hidden relative shadow-2xl z-10"
                        >
                            <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                                <header className="flex justify-between items-center mb-10">
                                    <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                                        {editingVacancy ? "Edit Vacancy" : "Create New Job"}
                                    </h2>
                                    <button onClick={handleCloseModal} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                                        <X className="w-6 h-6 text-zinc-400" />
                                    </button>
                                </header>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Job Title</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                                placeholder="e.g. Frontend Intern"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Location</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-primary/50 transition-all font-medium"
                                                placeholder="e.g. Remote / Gurgaon"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Job Type</label>
                                        <div className="flex flex-wrap gap-4">
                                            {["Full-time", "Internship", "Remote", "Freelance"].map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, type: t })}
                                                    className={`px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${formData.type === t ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-zinc-500 hover:border-white/20'}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4">Job Description</label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none"
                                            placeholder="Outline the roles, responsibilities, and requirements..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, is_active: !formData.is_active })}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${formData.is_active ? 'bg-primary' : 'bg-zinc-800'}`}
                                        >
                                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.is_active ? 'translate-x-6' : ''}`} />
                                        </button>
                                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                            Visibility: {formData.is_active ? 'Visible on Website' : 'Hidden from Website'}
                                        </span>
                                    </div>

                                    <button
                                        disabled={isSaving}
                                        type="submit"
                                        className="w-full btn-primary py-5 rounded-[1.5rem] flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_20px_40px_rgba(0,242,255,0.2)]"
                                    >
                                        {isSaving ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                {editingVacancy ? "Update Listing" : "Publish Job Opening"}
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
