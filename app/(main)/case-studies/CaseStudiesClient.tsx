"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Lock, Activity, Globe, Zap, ChevronRight } from "lucide-react";
import { caseStudiesCategories } from "../../constants/navigation";
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

export default function CaseStudiesClient() {
    const searchParams = useSearchParams();
    const filterParam = searchParams.get("filter");

    const [sectorIndex, setSectorIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState(() => {
        if (filterParam && caseStudiesCategories.some(c => c.title === filterParam)) {
            return filterParam;
        }
        return caseStudiesCategories[0].title;
    });
    const [visibleCount, setVisibleCount] = useState(6);

    // Reset visible count when category changes
    useEffect(() => {
        setVisibleCount(6);
    }, [activeFilter]);

    // Handle filter query parameter
    useEffect(() => {
        if (filterParam && caseStudiesCategories.some(c => c.title === filterParam)) {
            setActiveFilter(filterParam);
            const el = document.getElementById("portfolio");
            if (el) {
                // Add a small delay to ensure rendering has completed
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
            }
        }
    }, [filterParam]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSectorIndex((prev) => (prev + 1) % SECTORS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const activeCategoryData = caseStudiesCategories.find(c => c.title === activeFilter) || caseStudiesCategories[0];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">

            {/* HERO SECTION */}
            <section className="relative isolate min-h-screen pt-24 sm:pt-32 pb-10 overflow-hidden bg-black flex items-center border-b border-white/5">
                {/* Premium Aurora Glow Background */}
                <div className="absolute inset-0 -z-20 overflow-hidden">
                    {/* Core background color to prevent pure black */}
                    <div className="absolute inset-0 bg-[#020617]" />
                    
                    {/* Moving Aurora Orbs */}
                    <motion.div
                        animate={{
                            x: ["-10%", "10%", "-10%"],
                            y: ["-10%", "10%", "-10%"],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-500/15 rounded-full blur-[140px] mix-blend-screen"
                    />
                    
                    <motion.div
                        animate={{
                            x: ["10%", "-10%", "10%"],
                            y: ["10%", "-10%", "10%"],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen"
                    />
                    
                    <motion.div
                        animate={{
                            x: ["-5%", "5%", "-5%"],
                            y: ["5%", "-5%", "5%"],
                            scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[40%] w-[40vw] h-[40vw] bg-indigo-500/15 rounded-full blur-[130px] mix-blend-screen"
                    />

                    {/* Diagonal Scanning Light Beam */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            x: ["-100%", "200%"],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent rotate-45 transform-gpu"
                    />
                </div>

                {/* Grid Overlay for Cyber Feel */}
                <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] mix-blend-overlay"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
                    >
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Proven Results</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight mb-8 leading-[1.15]"
                    >
                        Case Studies For <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2 min-w-[300px] sm:min-w-[500px] h-[1.2em]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={sectorIndex}
                                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 w-max text-gradient whitespace-nowrap text-[calc(1em-3px)]"
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
                        Real-world success stories secured by <span className="text-white font-bold">CyberForenX & Associates</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-8"
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
                        <Link href="#portfolio" className="btn-primary inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm group">
                            Explore Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>



            {/* 2. INTERACTIVE SELECTOR */}
            <section id="portfolio" className="py-12 relative section-bg-dark border-b border-white/5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Library</h2>
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tighter italic text-glow inline-block pr-6">Case Studies</h3>
                        </div>
                        <p className="text-zinc-400 font-medium max-w-md">
                            Select a category below to explore precision-engineered solutions designed explicitly for enterprise challenges.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {caseStudiesCategories.map((cat) => (
                            <button
                                key={cat.title}
                                onClick={() => setActiveFilter(cat.title)}
                                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all border ${activeFilter === cat.title
                                    ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(0,242,255,0.3)] scale-105"
                                    : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Grid of Results */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/50 border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-2xl backdrop-blur-md"
                        >
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                                <Zap className="w-8 h-8 text-primary" />
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter italic text-glow">{activeCategoryData.title}</h3>
                            </div>

                            {activeFilter === "Clients" ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {[
                                        { name: "InterviewPrep Edu", image: "/images/clients/prepedu.webp" },
                                        { name: "Securenode", image: "/images/clients/securen.webp" },
                                        { name: "Azal International", image: "/images/clients/azal-international.webp" },
                                        { name: "Delhi Police", image: "/images/clients/delhi-police.webp" },
                                        { name: "Income Tax", image: "/images/clients/income-tax.webp" },
                                        { name: "Neev Realty", image: "/images/clients/neev-realty.webp" },
                                        { name: "TDS", image: "/images/clients/tds.webp" },
                                        { name: "Teppich", image: "/images/clients/teppich.webp" },
                                        { name: "Yellowish", image: "/images/clients/yellowish.webp" }
                                    ].map((client, idx) => (
                                        <motion.div
                                            key={client.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                                            className="group flex flex-col items-center justify-between p-6 sm:p-8 bg-white/95 backdrop-blur-xl rounded-2xl hover:bg-white transition-all border border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] h-full relative overflow-hidden cursor-default min-h-[160px]"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pointer-events-none">
                                                <div className="h-24 sm:h-28 w-full flex items-center justify-center mb-4 transition-all duration-500 pointer-events-auto">
                                                    <img
                                                        src={client.image}
                                                        alt={`${client.name} logo`}
                                                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                                                    />
                                                </div>
                                                <h4 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] text-center group-hover:text-zinc-950 transition-colors duration-500 mt-auto">
                                                    {client.name}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {activeCategoryData.links.slice(0, visibleCount).map((link, idx) => {
                                            // Determine image and description based on name/index since our nav data is basic
                                            const images = [
                                                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                                                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                                                "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
                                                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
                                                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                                                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                                            ];
                                            const cardImage = link.cardImage || link.image || images[idx % images.length];
                                            const cardBadge = activeFilter === "Latest" ? "Recent Win" : "Case Study";

                                            return (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                                                    className="group flex flex-col sm:flex-row gap-6 items-stretch glass-card rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all border-white/5 hover:border-white/10 h-full p-0"
                                                >
                                                    <div className="relative w-full sm:w-2/5 min-h-[200px] overflow-hidden shrink-0 bg-[#080c10]">
                                                        {/* Blurred background to fill aspect ratio mismatch */}
                                                        <img
                                                            src={cardImage}
                                                            alt=""
                                                            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125"
                                                            aria-hidden="true"
                                                        />
                                                        {/* Sharp contained foreground image */}
                                                        <img
                                                            src={cardImage}
                                                            alt={link.name}
                                                            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 z-10"
                                                        />
                                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                                        <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 z-20">
                                                            <Globe className="w-5 h-5 text-primary" />
                                                        </div>
                                                    </div>

                                                    <div className="flex-grow p-6 sm:p-8 flex flex-col justify-center">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 block text-primary">{cardBadge}</span>
                                                        <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                                                            {link.name}
                                                        </h4>
                                                        <p className="text-zinc-400 leading-relaxed font-medium mb-6 text-sm">
                                                            Expert implementation of {link.name.toLowerCase()} ensuring security and scalability for global operations.
                                                        </p>
                                                        <Link
                                                            href={link.href}
                                                            className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors"
                                                        >
                                                            Read Case Study <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {visibleCount < activeCategoryData.links.length && (
                                        <div className="mt-12 flex justify-center">
                                            <button
                                                onClick={() => setVisibleCount(prev => prev + 6)}
                                                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-zinc-300 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all hover:text-white"
                                            >
                                                Show More <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>



            {/* 4. global CTA */}
            <section className="py-10 section-bg-dark relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 sm:p-12 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10 mt-10"
                    >
                        <div className="absolute inset-0 bg-dots opacity-20"></div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 uppercase tracking-tighter italic relative z-10 text-glow inline-block pr-6">Find Your Solution</h2>
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
