"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Lock, Activity, Globe, Zap } from "lucide-react";
import { solutionsCategories } from "../../constants/navigation";
import TestimonialStack from "@/app/components/TestimonialStack";

const SECTORS = ["Government", "Enterprise", "Financial", "Security", "E-Commerce"];

const ADVANTAGES = [
    {
        title: "Military-Grade Security",
        description: "Zero-trust architectures and post-quantum encryption standards.",
        icon: Lock
    },
    {
        title: "Automated Compliance",
        description: "Continuous auditing and automated reporting for global standards.",
        icon: ShieldCheck
    },
    {
        title: "AI-Driven Forensics",
        description: "Predictive threat intelligence and rapid incident response.",
        icon: Activity
    },
    {
        title: "Scalable Infrastructure",
        description: "Cloud-native capabilities designed for massive enterprise loads.",
        icon: Cpu
    }
];

export default function SolutionsPage() {
    const [sectorIndex, setSectorIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState(solutionsCategories[0].title);

    useEffect(() => {
        const interval = setInterval(() => {
            setSectorIndex((prev) => (prev + 1) % SECTORS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const activeCategoryData = solutionsCategories.find(c => c.title === activeFilter) || solutionsCategories[0];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">
            
            {/* HERO SECTION */}
            <section className="relative isolate min-h-screen pt-28 sm:pt-40 pb-16 overflow-hidden section-bg-dark flex items-center border-b border-white/5">
                <div className="absolute inset-0 -z-10 bg-grid"></div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"
                />
                
                <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
                    >
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Trusted Worldwide</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.2] lg:leading-[1.1]"
                    >
                        Solutions Engineered for <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2 min-w-[300px] sm:min-w-[500px] h-[1.2em]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={sectorIndex}
                                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 w-max text-gradient italic font-serif whitespace-nowrap pr-2 text-glow"
                                    style={{ transformOrigin: "center" }}
                                >
                                    {SECTORS[sectorIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mb-12 font-medium flex-wrap  flex items-center justify-center gap-2"
                    >
                        Digital forensics, compliance, automation — secured by <span className="text-white font-bold">CyberforneX</span>
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-14"
                    >
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-glow transition-all">100+</div>
                            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Gov Projects</div>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-glow transition-all">500+</div>
                            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Enterprises</div>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                        <div className="text-center group">
                            <div className="text-4xl sm:text-5xl font-extrabold text-primary text-glow">99.9%</div>
                            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Compliance</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="#solutions" className="btn-primary inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm group">
                            Find Your Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 1. THE CYBERFORENX ADVANTAGE */}
            <section className="py-24 section-bg-alt border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-20"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                         <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Core Pillars</h2>
                         <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 uppercase tracking-tighter italic text-glow">The Cyberforenx Advantage</h3>
                         <p className="text-zinc-400 font-medium">Why world-leading organizations trust us out-of-the-box.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ADVANTAGES.map((adv, i) => (
                            <motion.div 
                                key={adv.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 group hover:-translate-y-1 hover:border-primary/40 transition-all text-center"
                            >
                                <div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors shadow-lg">
                                    <adv.icon className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">{adv.title}</h4>
                                <p className="text-sm text-zinc-400 font-medium">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. INTERACTIVE SOLUTION SELECTOR */}
            <section id="solutions" className="py-32 relative section-bg-dark border-b border-white/5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                         <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Suite</h2>
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tighter italic text-glow">Tailored Solutions</h3>
                         </div>
                         <p className="text-zinc-400 font-medium max-w-md">
                            Select a sector below to explore precision-engineered solutions designed explicitly for your domain's challenges.
                         </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {solutionsCategories.map((cat) => (
                            <button
                                key={cat.title}
                                onClick={() => setActiveFilter(cat.title)}
                                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all border ${
                                    activeFilter === cat.title 
                                        ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(0,242,255,0.3)] scale-105" 
                                        : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Grid of Solutions */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeFilter}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/50 border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl backdrop-blur-md"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-4">
                                    <Zap className="w-8 h-8 text-primary" />
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter italic text-glow">{activeCategoryData.title}</h3>
                                </div>
                                
                                {/* Add Link to the main Category Page itself */}
                                <Link 
                                    href={`/solutions/${activeCategoryData.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 text-primary uppercase text-xs font-bold tracking-widest hover:bg-primary hover:text-black transition-colors"
                                >
                                    Explore All {activeCategoryData.title} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {activeCategoryData.links.map((link) => (
                                    <Link 
                                        href={link.href}
                                        key={link.name} 
                                        className="group flex flex-col p-6 rounded-2xl glass-card hover:border-primary/40 hover:-translate-y-1 transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                <Globe className="w-5 h-5 text-primary" />
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-glow transition-all">{link.name}</h4>
                                        <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">
                                            Deploy specialized {link.name.toLowerCase()} infrastructure within your ecosystem.
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 3. DEPLOYMENT PROCESS (TIMELINE) */}
            <section className="py-32 section-bg-alt border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-20"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-secondary mb-4">How It Works</h2>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 uppercase tracking-tighter italic text-glow">Seamless Integration Strategy</h3>
                        <p className="text-zinc-400 font-medium">
                            Our battle-tested deployment methodology ensures zero downtime and rapid capability integration for mission-critical environments.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                            {[
                                { step: "01", title: "Discovery", desc: "Deep ecosystem audit & threat modeling." },
                                { step: "02", title: "Blueprint", desc: "Custom architecture design & zero-trust mapping." },
                                { step: "03", title: "Deployment", desc: "Phased rollout with continuous validation." },
                                { step: "04", title: "Sovereignty", desc: "Full operational handover & 24/7 managed support." }
                            ].map((phase, idx) => (
                                <motion.div 
                                    key={phase.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="relative text-center group"
                                >
                                    <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center border-primary/20 group-hover:bg-primary transition-colors mb-8 relative z-10 shadow-lg">
                                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary group-hover:text-black transition-all">
                                            {phase.step}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{phase.title}</h4>
                                    <p className="text-sm font-medium text-zinc-400 max-w-[200px] mx-auto">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURED CASE STUDIES (GRID) */}
            <section className="py-32 section-bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                         <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Proven Results</h2>
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tighter italic text-glow">Featured Case Studies</h3>
                         </div>
                         <Link href="/case-studies" className="btn-outline w-max inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm group shrink-0">
                             View All Reports <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                         </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {[
                            { title: "Global Financial Infrastructure", metric: "$85M", metricLabel: "Capital Protected", tags: ["Finance", "Zero-Trust"] },
                            { title: "National Defense Network", metric: "99.9%", metricLabel: "Threat Mitigation", tags: ["Gov", "Forensics"] },
                            { title: "E-Commerce Logistics Grid", metric: "5x", metricLabel: "Faster Deployments", tags: ["Retail", "Cloud"] }
                        ].map((study, idx) => (
                            <Link href="/case-studies" key={idx} className="block group">
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="h-full flex flex-col p-8 rounded-[2rem] glass-card border-white/10 hover:border-primary/40 hover:-translate-y-2 transition-all overflow-hidden relative"
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/20 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <h4 className="text-2xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all relative z-10">
                                        {study.title}
                                    </h4>
                                    
                                    <div className="mt-auto pt-8 border-t border-white/10 relative z-10 flex items-center justify-between">
                                        <div>
                                            <div className="text-3xl font-black text-white group-hover:text-glow transition-all">{study.metric}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">{study.metricLabel}</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                
                    {/* 5. TESTIMONIALS SECTION */}
                    <TestimonialStack 
                        testimonials={[
                            {
                                content: "CyberForenX didn't just provide a tool; they architected a completely secure ecosystem for our national defense network. Unparalleled expertise.",
                                author: "Director of Defense Tech",
                                role: "Government Agency",
                                rating: 5
                            },
                            {
                                content: "Since deploying their zero-trust pipelines, our compliance posture went from a liability to our strongest asset. It runs silently but powerfully.",
                                author: "CISO",
                                role: "Global Logistics Firm",
                                rating: 5
                            },
                            {
                                content: "The ROI was evident within three weeks. The automated forensics isolated threats faster than our entire SOC team previously could.",
                                author: "VP of Engineering",
                                role: "FinTech Consortium",
                                rating: 5
                            }
                        ]}
                    />

                    {/* 6. GLOBAL CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-16 sm:p-20 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10 mt-32"
                    >
                        <div className="absolute inset-0 bg-dots opacity-20"></div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 uppercase tracking-tighter italic relative z-10 text-glow">Find Your Solution</h2>
                        <p className="text-zinc-300 mb-12 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs relative z-10 leading-relaxed">
                            Connect with our domain experts to architect a scalable, zero-trust solution tailored directly to your ecosystem's needs.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 relative z-10">
                            Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

