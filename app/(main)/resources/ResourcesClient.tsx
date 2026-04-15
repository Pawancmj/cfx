"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Globe, ChevronRight } from "lucide-react";
import { resourceCategories } from "../../constants/navigation";
import { resourcesData } from "../../constants/resourceData";
import { cn } from "../../../lib/utils";

function ResourcesContent() {
    const searchParams = useSearchParams();
    const filterParam = searchParams.get("filter");

    const [activeFilter, setActiveFilter] = useState(() => {
        if (filterParam && resourceCategories.some(c => c.title === filterParam)) {
            return filterParam;
        }
        return resourceCategories[0].title;
    });
    const [visibleCount, setVisibleCount] = useState(6);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubscribed(true);
        setEmail("");
        
        // Reset message after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
    };

    // Reset visible count when category changes
    useEffect(() => {
        setVisibleCount(6);
    }, [activeFilter]);

    // Handle filter query parameter
    useEffect(() => {
        if (filterParam && resourceCategories.some(c => c.title === filterParam)) {
            setActiveFilter(filterParam);
            const el = document.getElementById("resources-grid");
            if (el) {
                // Add a small delay to ensure rendering has completed
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
            }
        }
    }, [filterParam]);

    const activeCategoryData = resourceCategories.find(c => c.title === activeFilter) || resourceCategories[0];

    return (
        <main className="relative min-h-screen section-bg-dark text-zinc-100 font-sans selection:bg-primary/30">
            {/* HERO SECTION */}
            <section className="relative isolate min-h-screen pt-28 sm:pt-40 pb-20 overflow-hidden bg-black flex items-center border-b border-white/5">
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

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
                        >
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Industry Insights</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight text-white flex flex-col items-center mb-8 leading-[1.15]">
                                Knowledge <br /> <span className="text-gradient inline-block text-[calc(1em-3px)]">Resources</span>
                            </h1>
                            <p className="text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto font-medium">
                                Insights, guides, and tools crafted by our industry experts to help you navigate complex technological landscapes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-12"
                        >
                            <Link href="#resources-grid" className="btn-primary inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm group">
                                Explore Library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE SELECTOR */}
            <section id="resources-grid" className="py-12 relative section-bg-dark border-b border-white/5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Library</h2>
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tighter italic text-glow inline-block pr-6">Insight Hub</h3>
                        </div>
                        <p className="text-zinc-400 font-medium max-w-md">
                            Select a category below to explore our deeply researched insights, news, and critical updates.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {resourceCategories.map((cat) => (
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
                                <BookOpen className="w-8 h-8 text-primary" />
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter italic text-glow">{activeCategoryData.title}</h3>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {activeCategoryData.links.slice(0, visibleCount).map((link, idx) => {
                                    // Image mapping logic
                                    const slug = link.href.split('/').pop() || "";
                                    const blogEntry = resourcesData[slug];
                                    
                                    const images = [
                                        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
                                        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
                                        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                    ];
                                    
                                    const cardImage = blogEntry ? blogEntry.coverImage : images[idx % images.length];
                                    const cardBadge = activeFilter === "Latest" ? "Recent Insight" : activeFilter === "News & Updates" ? "Announcements" : "Resource";

                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                                            className="group flex flex-col sm:flex-row gap-6 items-stretch glass-card rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all border-white/5 hover:border-white/10 h-full p-0"
                                        >
                                            <div className="relative w-full sm:w-2/5 min-h-[200px] overflow-hidden shrink-0">
                                                <img 
                                                    src={cardImage} 
                                                    alt={link.name} 
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                                <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 z-10">
                                                    <Globe className="w-5 h-5 text-primary" />
                                                </div>
                                            </div>

                                            <div className="flex-grow p-6 sm:p-8 flex flex-col justify-center">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 block text-primary">{cardBadge}</span>
                                                <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                                                    {link.name}
                                                </h4>
                                                <p className="text-zinc-400 leading-relaxed font-medium mb-6 text-sm">
                                                    Explore critical insights regarding {link.name.toLowerCase()} for strategic business advantage.
                                                </p>
                                                <Link 
                                                    href={link.href}
                                                    className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors"
                                                >
                                                    Read More <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 relative overflow-hidden section-bg-dark">
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass-card p-10 sm:p-16 rounded-[3rem] text-center border border-white/10 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
                        
                        <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 uppercase tracking-tighter italic relative z-10 text-glow inline-block">Stay Informed</h3>
                        <p className="text-zinc-300 font-medium mb-12 relative z-10 max-w-2xl mx-auto tracking-[0.1em]">Subscribe to receive our latest insights, comprehensive guides, and critical vulnerability alerts straight to your inbox.</p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-grow bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <button 
                                type="submit"
                                disabled={isSubmitting || isSubscribed}
                                className={cn(
                                    "px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100",
                                    isSubscribed ? "bg-green-500 text-white" : "bg-primary text-background hover:bg-primary/80"
                                )}
                            >
                                {isSubmitting ? "Processing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
                            </button>
                        </form>
                        {isSubscribed && (
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-primary text-[10px] font-bold uppercase tracking-widest mt-4"
                            >
                                Thank you! You've been added to our intelligence feed.
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default function ResourcesClient() {
    return (
        <Suspense fallback={<div className="min-h-screen section-bg-dark" />}>
            <ResourcesContent />
        </Suspense>
    );
}
