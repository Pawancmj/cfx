"use client";

import { motion } from "framer-motion";
import {
    Users, Briefcase, GraduationCap,
    ArrowRight, Code,
    Database, Headphones, Rocket, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

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
        const subject = `Career Application: ${roleTitle} - Cyberforenx Systems`;
        const mailtoUrl = `mailto:forsatyam2018@gmail.com?subject=${encodeURIComponent(subject)}`;
        window.location.assign(mailtoUrl);
    };

    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] bg-primary/10 blur-[160px] rounded-full"></div>
            <div className="absolute left-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Join Our Mission</span>
                        </motion.div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-10 leading-[1.2] sm:leading-[1.1]">
                            Scale Your <br />
                            <span className="text-gradient italic text-glow">Potential</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium">
                            Cyberforenx is a hub for high-performance innovation. We are looking for passionate individuals to join our global team and work on solving mission-critical technical challenges.
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
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="p-10 rounded-[2rem] glass-card text-center transition-all duration-500 border-white/5 hover:bg-white/10 hover:-translate-y-2 group"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-inner">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight text-glow">{item.title}</h3>
                            <p className="text-zinc-400 text-base leading-relaxed font-medium italic group-hover:text-zinc-200 transition-colors">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Openings Section */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-10 w-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
                        <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight text-glow">Active Opportunities</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {roles.map((role, index) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group p-8 rounded-[2rem] glass-card border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all flex flex-col justify-between overflow-hidden relative"
                            >
                                <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <role.icon className="w-40 h-40 text-primary" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <role.icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight uppercase leading-tight">{role.title}</h4>
                                            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/60">{role.department}</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 text-base leading-relaxed mb-8 font-medium italic">
                                        {role.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleApply(role.title)}
                                    className="relative z-10 inline-flex items-center gap-4 text-primary font-black text-xs tracking-[0.3em] uppercase group/btn"
                                >
                                    Apply Now
                                    <div className="p-2 rounded-full border border-primary/20 group-hover/btn:bg-primary group-hover/btn:text-black transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
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
                    className="p-16 sm:p-20 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10"
                >
                    <div className="absolute inset-0 bg-dots opacity-20"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                    <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 uppercase tracking-tighter italic relative z-10 text-glow">Join the Force</h2>
                    <p className="text-zinc-300 mb-12 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs relative z-10 leading-relaxed">
                        Ready to kickstart your career at a global technology leader? Reach out to our human resources team today.
                    </p>
                    <button
                        onClick={() => handleApply("General Application")}
                        className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 relative z-10"
                    >
                        Send Your Profile <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </motion.div>
            </div>
        </main>
    );
}

