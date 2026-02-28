"use client";

import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap } from "lucide-react";
import Link from "next/link";
import CTA from "../../components/CTA";

export default function InternshipsPage() {
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
                        {[
                            { role: "Software Engineering Intern", team: "Core Development", location: "Remote", duration: "6 Months" },
                            { role: "Cyber Security Analyst Intern", team: "Threat Intelligence", location: "Hybrid", duration: "6 Months" },
                            { role: "Product Design Intern", team: "UX/UI", location: "Remote", duration: "3 Months" }
                        ].map((job) => (
                            <div key={job.role} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.role}</h3>
                                    <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
                                        <span>{job.team}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.duration}</span>
                                    </div>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CTA />
        </main>
    );
}
