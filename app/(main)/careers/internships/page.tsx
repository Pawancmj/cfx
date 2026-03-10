"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, GraduationCap, X, Send, XCircle } from "lucide-react";
import Link from "next/link";
import CTA from "@/app/components/CTA";

export default function InternshipsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [mounted, setMounted] = useState(false);
    const [vacancies, setVacancies] = useState<any[]>([]);
    const [loadingVacancies, setLoadingVacancies] = useState(true);

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const res = await fetch("/api/internships/vacancies");
                const json = await res.json();
                if (json.success) {
                    setVacancies(json.data.filter((v: any) => v.is_active));
                }
            } catch (err) {
                console.error("Failed to fetch vacancies:", err);
            } finally {
                setLoadingVacancies(false);
            }
        };
        fetchVacancies();
        setMounted(true);
    }, []);

    const handleApplyClick = (role: string) => {
        setSelectedRole(role);
        setIsModalOpen(true);
        setIsSuccess(false);
        setResumeFile(null);
        setErrorMsg("");
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");

        if (!resumeFile) {
            setErrorMsg("Please upload your resume (PDF only).");
            return;
        }

        if (resumeFile.size > 5 * 1024 * 1024) { // 5MB limit
            setErrorMsg("Resume file size must be less than 5MB.");
            return;
        }

        if (resumeFile.type !== "application/pdf") {
            setErrorMsg("Only PDF files are allowed for the resume.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append("role", selectedRole);
        formData.append("resume", resumeFile);

        try {
            const res = await fetch("/api/internships", {
                method: "POST",
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                setIsSuccess(true);
                setTimeout(() => {
                    handleCloseModal();
                }, 3000);
            } else {
                setErrorMsg(data.error || "Failed to submit application.");
            }
        } catch (error) {
            setErrorMsg("An error occurred during submission. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-8">
                <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Careers
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <GraduationCap className="w-4 h-4" /> Future Leaders
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                        Internships
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        Jumpstart your career with hands-on experience mentoring under industry veterans. Build real-world applications that impact global enterprises.
                    </p>
                </motion.div>

                <div className="glass-card p-12 mb-24 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                    <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Open Internship Tracks</h2>

                    <div className="space-y-6 relative z-10">
                        {loadingVacancies ? (
                            <div className="py-12 text-center text-zinc-500 italic">Finding available opportunities...</div>
                        ) : vacancies.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-20 text-center glass-card border-white/5 bg-white/5 rounded-[2rem]"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                    <XCircle className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">No Active Openings</h3>
                                <p className="text-zinc-500 font-medium max-w-sm mx-auto">
                                    We don't have any internship tracks open at the moment. Please check back soon or follow our social channels for updates!
                                </p>
                            </motion.div>
                        ) : (
                            vacancies.map((job) => (
                                <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                                        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                            {job.description && (
                                                <>
                                                    <span>•</span>
                                                    <span className="normal-case tracking-normal line-clamp-1">{job.description}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleApplyClick(job.title)}
                                        className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors shrink-0"
                                    >
                                        Apply
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <CTA />

            {mounted && createPortal(
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={handleCloseModal}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-lg glass-card p-8 rounded-3xl z-10 border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-6 shrink-0">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Apply Now</h3>
                                        <p className="text-primary text-sm font-medium mt-1">{selectedRole}</p>
                                    </div>
                                    <button
                                        onClick={handleCloseModal}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                                    {isSuccess ? (
                                        <div className="py-12 text-center">
                                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <GraduationCap className="w-8 h-8 text-primary" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">Application Submitted!</h4>
                                            <p className="text-zinc-400">Thank you for your interest. We will review your application and get back to you soon.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Full Name *</label>
                                                <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email Address *</label>
                                                <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="yourname@cyberforenx.in" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Phone Number *</label>
                                                <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="+91 9990751991" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">College / University *</label>
                                                <input name="university" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Stanford University" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Degree & Expected Graduation *</label>
                                                <input name="degree" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="B.S. Computer Science, May 2025" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">LinkedIn Profile</label>
                                                <input name="linkedin" type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="https://linkedin.com/in/johndoe" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Resume (PDF Only) *</label>
                                                <input
                                                    required
                                                    type="file"
                                                    accept=".pdf,application/pdf"
                                                    onChange={(e) => {
                                                        setErrorMsg("");
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            setResumeFile(e.target.files[0]);
                                                        }
                                                    }}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 file:transition-colors file:cursor-pointer"
                                                />
                                                {errorMsg && (
                                                    <p className="text-red-400 text-xs font-medium mt-1">{errorMsg}</p>
                                                )}
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                                ) : (
                                                    <>Submit Application <Send className="w-4 h-4" /></>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </main>
    );
}
