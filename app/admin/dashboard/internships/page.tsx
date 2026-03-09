"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Download, Search } from "lucide-react";

interface InternshipApp {
    id: number;
    name: string;
    email: string;
    phone: string;
    university: string;
    degree: string;
    linkedin_url: string;
    resume_url: string;
    role: string;
    created_at: string;
}

export default function InternshipsPage() {
    const [internships, setInternships] = useState<InternshipApp[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/admin");
                const json = await res.json();
                if (json.success) {
                    setInternships(json.data.internships);
                } else {
                    setError(json.error || "Failed to fetch data.");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching data.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Internship Applications</h1>
                    <p className="text-zinc-500 text-sm mt-1">Review candidate profiles and resumes</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3 w-full md:w-auto">
                    <Search className="w-5 h-5 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search candidates..."
                        className="bg-transparent border-none outline-none text-white text-sm w-full md:w-48 placeholder:text-zinc-600 focus:ring-0"
                    />
                </div>
            </header>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Loading Database...</p>
                </div>
            ) : error ? (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 rounded-2xl text-center">
                    <p className="font-bold">{error}</p>
                    <p className="text-xs mt-2 opacity-80">Please check your database connection or try again.</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-[2rem] border-white/5 overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 uppercase text-[10px] tracking-widest text-zinc-500 border-b border-white/10">
                                    <th className="p-6 font-bold">Applicant</th>
                                    <th className="p-6 font-bold">Role Applied</th>
                                    <th className="p-6 font-bold">Education Details</th>
                                    <th className="p-6 font-bold text-right">Resume File</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {internships.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-10 text-center text-zinc-500 italic">No internship applications found.</td>
                                    </tr>
                                ) : internships.map((app) => (
                                    <tr key={app.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-6">
                                            <p className="font-bold text-white group-hover:text-primary transition-colors">{app.name}</p>
                                            <div className="flex flex-col gap-1 mt-2 text-xs text-zinc-400">
                                                <a href={`mailto:${app.email}`} className="hover:text-white transition-colors">E: {app.email}</a>
                                                <span>P: {app.phone}</span>
                                                {app.linkedin_url && (
                                                    <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-1">
                                                        LinkedIn Profile
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-wider">
                                                {app.role}
                                            </span>
                                            <p className="text-[10px] text-zinc-500 font-mono mt-3 flex items-center gap-1 uppercase group-hover:text-zinc-400 transition-colors">
                                                <Calendar className="w-3 h-3" /> {formatDate(app.created_at)}
                                            </p>
                                        </td>
                                        <td className="p-6">
                                            <p className="text-sm text-white font-medium mb-1">{app.university}</p>
                                            <p className="text-xs text-zinc-500">{app.degree}</p>
                                        </td>
                                        <td className="p-6 text-right">
                                            <a
                                                href={app.resume_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 hover:text-primary hover:border-primary/50 border border-white/5 text-white text-xs font-bold uppercase tracking-widest transition-all"
                                            >
                                                <Download className="w-4 h-4" /> View PDF
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
