"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

interface Testimonial {
    content: string;
    author: string;
    role: string;
    rating: number;
}

interface TestimonialStackProps {
    testimonials: Testimonial[];
}

export default function TestimonialStack({ testimonials }: TestimonialStackProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Side: Heading */}
            <div className="max-w-xl">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Success Stories</h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Real Impact <br />
                        <span className="text-gradient italic">Unleashed</span>
                    </h3>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-10">
                        See how CyberForenX is transforming enterprise operations and security for industry leaders across the globe.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary/60">
                        <div className="h-px w-12 bg-white/10"></div>
                        Click cards to cycle
                    </div>
                </motion.div>
            </div>

            {/* Right Side: Stacked Cards */}
            <div className="relative group/stack">
                <div className="relative h-[500px] sm:h-[450px] w-full perspective-1000">
                    <AnimatePresence mode="sync">
                        {testimonials.map((testimonial, idx) => {
                            // Calculate position in stack relative to currentIndex
                            const position = (idx - currentIndex + testimonials.length) % testimonials.length;
                            const isTop = position === 0;

                            // Only show top 3 cards for performance and clean look
                            if (position > 2) return null;

                            return (
                                <motion.div
                                    key={idx}
                                    style={{
                                        zIndex: isTop ? 50 : 10 - position,
                                        cursor: isTop ? "pointer" : "default",
                                    }}
                                    initial={{ opacity: 0, scale: 0.9, y: 20, x: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1 - position * 0.06,
                                        y: position * 30, // Refined vertical offset
                                        rotateX: position * -3,
                                        pointerEvents: isTop ? "auto" : "none",
                                    }}
                                    exit={{
                                        x: 600,
                                        opacity: 0,
                                        scale: 0.95,
                                        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                                    }}
                                    whileHover={isTop ? { y: -5, transition: { duration: 0.2 } } : {}}
                                    onClick={isTop ? handleNext : undefined}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Active Glow Effect */}
                                    {isTop && (
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover/stack:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                                    )}

                                    <div className={`glass-card p-10 md:p-14 h-full flex flex-col relative overflow-hidden transition-all duration-700 
                                        ${isTop
                                            ? "bg-slate-950/80 border-primary/30 shadow-[0_0_80px_rgba(0,242,255,0.08)] backdrop-blur-2xl ring-1 ring-white/10"
                                            : "bg-white/[0.01] border-white/5 opacity-30 backdrop-blur-sm"
                                        }`}
                                    >
                                        {/* Subtle internal gradient for depth */}
                                        {isTop && <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>}

                                        {/* Quote Mark */}
                                        <motion.div
                                            animate={{ opacity: isTop ? 1 : 0, scale: isTop ? 1 : 0.8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Quote className={`absolute -top-4 -right-4 w-32 h-32 -z-0 transition-colors duration-700 ${isTop ? "text-white/[0.03] rotate-12" : "text-transparent"}`} />
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            animate={{ opacity: isTop ? 1 : 0, y: isTop ? 0 : 15 }}
                                            transition={{ duration: 0.4, delay: isTop ? 0.1 : 0 }}
                                            className="h-full flex flex-col relative z-10"
                                        >
                                            <div className="flex gap-1.5 mb-10">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? "text-primary fill-primary drop-shadow-[0_0_10px_rgba(0,242,255,0.6)]" : "text-zinc-700"}`} />
                                                ))}
                                            </div>

                                            <blockquote className="text-xl md:text-2xl text-zinc-200 font-medium italic mb-12 leading-relaxed flex-grow">
                                                &quot;{testimonial.content}&quot;
                                            </blockquote>

                                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                                <div className="flex items-center gap-6">
                                                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-background font-black text-2xl shadow-[0_10px_20px_rgba(0,242,255,0.2)]">
                                                        {testimonial.author.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-bold text-white uppercase tracking-widest">{testimonial.author}</div>
                                                        <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mt-2 brightness-110">{testimonial.role}</div>
                                                    </div>
                                                </div>

                                                {isTop && (
                                                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-inner">
                                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-8 bg-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" : "w-2 bg-white/10 hover:bg-white/20"}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
