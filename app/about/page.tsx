"use client";

import { motion } from "framer-motion";
import { Eye, Target, Users, Zap, ShieldCheck, Globe, Trophy, TrendingUp, Lightbulb } from "lucide-react";

const values = [
    {
        title: "Integrity",
        description: "We uphold the highest standards of integrity in all of our actions, ensuring trust and transparency.",
        icon: ShieldCheck,
    },
    {
        title: "Innovation",
        description: "We constantly push boundaries to deliver cutting-edge solutions that solve complex challenges.",
        icon: Lightbulb,
    },
    {
        title: "Excellence",
        description: "We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.",
        icon: Trophy,
    },
    {
        title: "Collaboration",
        description: "We work together, across boundaries, to meet the needs of our customers and to help the company win.",
        icon: Users,
    }
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Hero Section: Who We Are */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Our Identity</h2>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-tight">
                            Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Intelligence</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto">
                            Cyberforenx Systems is a global catalyst for digital transformation. We bridge the gap between complex technological challenges and elegant, secure solutions for the modern enterprise.
                        </p>
                    </motion.div>
                </div>

                {/* Vision & Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/10 hover:border-blue-500/40 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Eye className="w-24 h-24 text-blue-500" />
                        </div>
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 mb-8 group-hover:scale-110 transition-transform">
                            <Eye className="h-8 w-8 text-blue-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            To be the world's most trusted partner in digital forensics and strategic technology, empowering every organization to navigate the digital landscape with absolute certainty and security.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/10 hover:border-cyan-500/40 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-24 h-24 text-cyan-500" />
                        </div>
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 mb-8 group-hover:scale-110 transition-transform">
                            <Target className="h-8 w-8 text-cyan-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Our mission is to architect resilient digital ecosystems through precise forensic analysis, innovative software engineering, and strategic business process optimization that drives measurable growth.
                        </p>
                    </motion.div>
                </div>

                {/* What We Do Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Expertise</h2>
                            <h3 className="text-4xl font-bold text-white leading-tight">Delivering Impact Through Strategic Innovation</h3>
                        </div>
                        <p className="text-zinc-400 max-w-md">
                            We don't just build software or solve crimes; we create the technological backbone that allows our clients to lead their industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Digital Forensic Investigations",
                                desc: "Uncovering truth in the digital realm with military-grade precision and legal compliance.",
                                icon: ShieldCheck,
                                accent: "text-blue-500"
                            },
                            {
                                title: "Enterprise Software Engineering",
                                desc: "Building scalable, high-performance applications that redefine user experience and operational efficiency.",
                                icon: Zap,
                                accent: "text-cyan-500"
                            },
                            {
                                title: "Strategic BPO & Consulting",
                                desc: "Optimizing business processes with intelligent support systems and data-driven strategic advisory.",
                                icon: Globe,
                                accent: "text-indigo-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/50 transition-colors"
                            >
                                <item.icon className={`h-8 w-8 ${item.accent} mb-6`} />
                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What We Believe In (Core Values) */}
                <div className="relative p-12 lg:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]"></div>

                    <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-400 mb-4">Our Values</h2>
                        <h3 className="text-4xl font-bold text-white mb-6">The Beliefs That Drive Us</h3>
                        <p className="text-blue-100/70">
                            Our culture is anchored in a set of core beliefs that guide every decision we make and every project we undertake.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-950/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group"
                            >
                                <v.icon className="h-6 w-6 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-3">{v.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
