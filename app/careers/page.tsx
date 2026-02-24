"use client";

import { motion } from "framer-motion";
import {
    Users, Briefcase, GraduationCap,
    ArrowRight, Code,
    Database, Headphones, Rocket
} from "lucide-react";

const roles = [
    {
        title: "Full Stack Development (Intern)",
        department: "Engineering",
        description: "Master modern web architectures using Next.js, Node.js, and Cloud infrastructures.",
        icon: Code,
    },
    {
        title: "App Development (Intern)",
        department: "Engineering",
        description: "Build high-performance mobile experiences with React Native and native integrations.",
        icon: Rocket,
    },
    {
        title: "Data Analytics (Intern)",
        department: "Intelligence",
        description: "Learn to derive actionable business insights from big data using advanced BI tools.",
        icon: Database,
    },
    {
        title: "BPO / BPS Operations (Intern)",
        department: "Business Services",
        description: "Understand global service delivery models and business process optimization.",
        icon: Headphones,
    },
];

export default function CareersPage() {
    const handleApply = (roleTitle: string) => {
        const subject = `Career Application: ${roleTitle} - Cyberforenx`;
        const mailtoUrl = `mailto:forsatyam2018@gmail.com?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <main className="relative min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
            {/* ... Background effects remain the same ... */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Careers</h2>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                            Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Potential</span>
                        </h1>
                        <p className="text-lg leading-8 text-zinc-400">
                            Cyberforenx is a hub for innovation. We are looking for passionate interns to join our global team and work on solving mission-critical technical challenges.
                        </p>
                    </motion.div>
                </div>

                {/* Culture Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { title: "Nurturing Talent", desc: "Direct mentorship from industry veterans in forensics and engineering.", icon: GraduationCap },
                        { title: "MNC Culture", desc: "Exposure to global delivery models and enterprise-level standards.", icon: Users },
                        { title: "Real Impact", desc: "Work on live projects that secure and empower global enterprises.", icon: Briefcase },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 text-center"
                        >
                            <item.icon className="h-10 w-10 text-blue-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Openings Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-blue-600 pl-6 uppercase tracking-tight">Active Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {roles.map((role, index) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group p-8 rounded-[2rem] bg-zinc-900/50 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                                            <role.icon className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">{role.title}</h4>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{role.department}</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                        {role.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleApply(role.title)}
                                    className="inline-flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors text-left"
                                >
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600 to-cyan-600 text-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter italic">Join the Force</h2>
                    <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                        Ready to kickstart your career at a global IT leader? Click the button below to start your journey.
                    </p>
                    <button
                        onClick={() => handleApply("General Internship")}
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105"
                    >
                        Send Your Application <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </main>
    );
}
