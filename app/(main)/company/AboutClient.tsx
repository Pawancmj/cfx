"use client";

import { motion } from "framer-motion";
import { Eye, Target, Users, ShieldCheck, Lightbulb, Trophy, Sparkles, Rocket, Zap, Globe } from "lucide-react";
import CTA from "@/app/components/CTA";

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

export default function AboutClient() {
    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[160px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Hero Section: Who We Are */}
                <div className="text-center max-w-5xl mx-auto mb-24">
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
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Global Identity</span>
                        </motion.div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-10 leading-[1.2] sm:leading-[1.1]">
                            Pioneering the Future of <br />
                            <span className="text-gradient italic text-glow">Digital Intelligence</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium">
                            Cyberforenx Systems is a global catalyst for digital transformation. We bridge the gap between complex technological challenges and elegant, secure solutions for the modern enterprise.
                        </p>
                    </motion.div>
                </div>

                {/* Vision & Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="group relative p-8 sm:p-12 rounded-3xl glass-card hover:bg-white/10 hover:border-primary/40"
                    >
                        <div className="absolute top-10 right-10 p-0 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Eye className="w-24 h-24 text-primary" />
                        </div>
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                            <Eye className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Vision</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed font-medium italic group-hover:text-zinc-200 transition-colors">
                            To be the world&apos;s most trusted partner in digital forensics and strategic technology, empowering every organization to navigate the digital landscape with absolute certainty and security.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="group relative p-8 sm:p-12 rounded-3xl glass-card hover:bg-white/10 hover:border-secondary/40"
                    >
                        <div className="absolute top-10 right-10 p-0 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-24 h-24 text-secondary" />
                        </div>
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 mb-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(112,0,255,0.2)]">
                            <Target className="h-8 w-8 text-secondary" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Mission</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed font-medium italic group-hover:text-zinc-200 transition-colors">
                            Our mission is to architect resilient digital ecosystems through precise forensic analysis, innovative software engineering, and strategic business process optimization that drives measurable growth.
                        </p>
                    </motion.div>
                </div>

                {/* What We Believe In (Core Values) */}
                <div className="relative p-12 lg:p-20 rounded-[3rem] section-bg-alt border border-white/5 overflow-hidden shadow-2xl mb-24">
                    <div className="absolute inset-0 bg-dots opacity-10"></div>
                    <div className="absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"></div>

                    <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Our Values</h2>
                        <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">The Beliefs That Drive Us</h3>
                        <p className="text-zinc-400 text-lg font-medium tracking-wide leading-relaxed">
                            Our culture is anchored in a set of core beliefs that guide every decision we make and every project we undertake.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass-card p-10 hover:bg-white/10 transition-all group border-white/5"
                            >
                                <v.icon className="h-7 w-7 text-primary mb-8 group-hover:scale-125 transition-transform" />
                                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">{v.title}</h4>
                                <p className="text-zinc-400 text-xs leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Culture Section --- */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <Rocket className="w-4 h-4" /> Inside Cyberforenx
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                            Our Culture
                        </h3>
                        <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
                            We foster an environment of continuous learning, relentless innovation, and uncompromising integrity in everything we do.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="glass-card p-12 min-h-[400px] border-primary/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h4 className="text-3xl font-bold text-white mb-6 relative z-10">Driven by Excellence</h4>
                            <p className="text-zinc-400 leading-relaxed relative z-10">Our engineers, analysts, and strategists are united by a single mission: to build the most resilient and advanced digital ecosystems in the world. We don't settle for "good enough" - we aim for flawless execution.</p>
                        </div>
                        <div className="glass-card p-12 min-h-[400px] border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h4 className="text-3xl font-bold text-white mb-6 relative z-10">Work Without Borders</h4>
                            <p className="text-zinc-400 leading-relaxed relative z-10">With a globally distributed team spanning over 25 countries, we embrace diverse perspectives and asynchronous collaboration. We hire the best talent, regardless of geography, providing flexibility and trust.</p>
                        </div>
                    </div>
                </div>

                {/* --- Leadership Section --- */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <Users className="w-4 h-4" /> Our Team
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                            Leadership
                        </h3>
                        <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl">
                            Meet the visionaries behind Cyberforenx. Our leadership team brings decades of global experience in cybersecurity, enterprise software, and digital transformation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="glass-card p-8 text-center group hover:border-primary/50 transition-colors">
                                <div className="w-32 h-32 mx-auto bg-white/5 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors" />
                                <h4 className="text-xl font-bold text-white mb-1">Executive {i}</h4>
                                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Board Member</p>
                                <p className="text-sm text-zinc-400">Guiding strategic initiatives and ensuring operational excellence across all global sectors.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What We Do Section */}
                <div className="mb-32 mt-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between mb-20 gap-10">
                        <div className="max-w-3xl">
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Expertise</h2>
                            <h3 className="text-4xl font-extrabold text-white leading-tight uppercase tracking-tight text-glow">Delivering Impact Through Strategic Innovation</h3>
                        </div>
                        <p className="text-zinc-400 max-w-xl text-lg font-medium leading-relaxed">
                            We don&apos;t just build software or solve crimes; we create the technological backbone that allows our clients to lead their industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Digital Forensic Investigations",
                                desc: "Uncovering truth in the digital realm with military-grade precision and legal compliance.",
                                icon: ShieldCheck,
                                accent: "text-primary"
                            },
                            {
                                title: "Enterprise Software Engineering",
                                desc: "Building scalable, high-performance applications that redefine user experience and operational efficiency.",
                                icon: Zap,
                                accent: "text-secondary"
                            },
                            {
                                title: "Strategic BPO & Consulting",
                                desc: "Optimizing business processes with intelligent support systems and data-driven strategic advisory.",
                                icon: Globe,
                                accent: "text-accent"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="glass-card p-10 hover:-translate-y-2 group"
                            >
                                <div className="p-4 rounded-xl bg-white/5 w-fit mb-8 group-hover:bg-white/10 transition-colors">
                                    <item.icon className={`h-8 w-8 ${item.accent}`} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h4>
                                <p className="text-zinc-400 leading-relaxed text-base font-medium group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>

            <div className="relative z-10 border-t border-white/5 bg-[#05080a]/50 backdrop-blur-xl pt-16 mt-12 pb-16">
                <CTA />
            </div>
        </main>
    );
}
