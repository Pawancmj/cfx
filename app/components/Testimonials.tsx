"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        content: "Cyberforenx transformed our customer support operations. Their dedicated team integrated seamlessly, and we saw a 40% reduction in response times within the first quarter.",
        author: "Sarah Chen",
        role: "Operations Director, GlobalTech Innovations",
        image: "/avatar-1.png",
    },
    {
        content: "The level of data security and compliance Cyberforenx provides is unparalleled. We now have complete peace of mind knowing our sensitive information is handled with the utmost care.",
        author: "Mark Johnson",
        role: "Chief Security Officer, Apex Financial",
        image: "/avatar-2.png",
    },
    {
        content: "Their flexible staffing model allowed us to scale up our back-office teams during peak demand without any overhead. A true partner in efficiency!",
        author: "Maria Rodriguez",
        role: "VP of HR, Innovate Pharma",
        image: "/avatar-3.png",
    },
    {
        content: "The expertise of their incident response team was phenomenal. They minimized our downtime drastically during a critical security event, saving us millions.",
        author: "David Smith",
        role: "IT Manager, TechSolutions",
        image: "/avatar-4.png",
    },
    {
        content: "Working with Cyberforenx has been a game-changer for our compliance efforts. Their audits are thorough, and their continuous monitoring is highly actionable.",
        author: "Jessica Lee",
        role: "Compliance Officer, SecureNet",
        image: "/avatar-5.png",
    },
    {
        content: "An incredible partner for our digital transformation journey. Their backend support ensures we operate 24/7 without a single hitch or security oversight.",
        author: "Robert Williams",
        role: "CEO, NextGen Enterprises",
        image: "/avatar-6.png",
    },
];

export default function Testimonials() {
    const targetRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const motionRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const updateRange = () => {
            if (containerRef.current && motionRef.current) {
                // Add 24px (1.5rem) to ensure the last card fully fits and doesn't clip
                setScrollRange(motionRef.current.scrollWidth - containerRef.current.clientWidth + 24);
            }
        };

        updateRange();
        setTimeout(updateRange, 150); // Fallback for font load reflows
        window.addEventListener("resize", updateRange);
        return () => window.removeEventListener("resize", updateRange);
    }, []);

    // We use a spring/tween for smooth scrolling
    const xBase = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    // For drag support
    const dragX = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    // Combine scroll and drag smoothly, taking precedence from drag if actively dragging
    const x = useTransform(() => {
        // If we dragged perfectly horizontally just use that offset applied over the base
        return isDragging ? dragX.get() : xBase.get();
    });

    // When vertical scroll happens, sync our drag internal state so it doesn't jump
    useMotionValueEvent(scrollYProgress, "change", () => {
        if (!isDragging) {
            dragX.set(xBase.get());
        }
    });

    return (
        <section ref={targetRef} className="relative h-[250vh] section-bg-gradient border-t border-white/5">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 bg-primary/5 blur-[120px] rounded-full"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full mb-12 shrink-0 pointer-events-none">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Success Stories</h2>
                        <p className="text-3xl font-extrabold tracking-tight text-white mb-2 sm:text-5xl text-glow leading-tight">
                            Trusted by Innovative Companies
                        </p>
                    </div>
                </div>

                <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8 w-full overflow-hidden">
                    <motion.div
                        ref={motionRef}
                        style={{ x: isDragging ? dragX : xBase }}
                        drag="x"
                        dragConstraints={{ left: -scrollRange, right: 0 }}
                        dragElastic={0.05}
                        dragMomentum={false}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        className={`flex gap-6 w-max pb-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[calc(100vw-3rem)] md:w-[calc((min(1280px,100vw)-6rem)/3)] shrink-0 flex flex-col relative glass-card p-6 sm:p-8 hover:bg-white/10 hover:border-primary/40 group transition-all select-none"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none" />

                                <div className="flex gap-1.5 text-primary mb-6 relative pointer-events-none">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                                    ))}
                                </div>
                                <blockquote className="text-zinc-400 leading-relaxed relative z-10 text-sm font-medium italic mb-8 group-hover:text-zinc-200 transition-colors flex-grow pointer-events-none">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>
                                <div className="mt-auto flex items-center gap-x-4 border-t border-white/10 pt-6 pointer-events-none">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-primary flex items-center justify-center text-background font-bold text-lg shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="font-bold text-white uppercase tracking-[0.1em] text-xs truncate">{testimonial.author}</div>
                                        <div className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mt-1 truncate">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


