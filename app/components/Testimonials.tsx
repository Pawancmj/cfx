"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [scrollRange, setScrollRange] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [gap, setGap] = useState(40);

    // Measure the container's inner width (minus padding) and calculate card width
    useEffect(() => {
        const updateDimensions = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const styles = getComputedStyle(container);
                const paddingLeft = parseFloat(styles.paddingLeft) || 0;
                const paddingRight = parseFloat(styles.paddingRight) || 0;
                const innerWidth = container.clientWidth - paddingLeft - paddingRight;

                // Dynamic visibility based on width
                let cardsVisible = 3;
                let gap = 40; // Desktop default

                if (window.innerWidth < 640) {
                    cardsVisible = 1;
                    gap = 16;
                } else if (window.innerWidth < 1024) {
                    cardsVisible = 2;
                    gap = 24;
                }

                const calculatedCardWidth = (innerWidth - gap * (cardsVisible - 1)) / cardsVisible;
                setGap(gap);
                setCardWidth(calculatedCardWidth);
            }
        };

        updateDimensions();
        setTimeout(updateDimensions, 150);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Recalculate scroll range whenever cardWidth changes
    useEffect(() => {
        const recalc = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const styles = getComputedStyle(container);
                const paddingLeft = parseFloat(styles.paddingLeft) || 0;
                const paddingRight = parseFloat(styles.paddingRight) || 0;
                const innerWidth = container.clientWidth - paddingLeft - paddingRight;
                const totalContentWidth = cardWidth * testimonials.length + gap * (testimonials.length - 1);
                const maxScroll = Math.max(0, totalContentWidth - innerWidth);
                setScrollRange(maxScroll);
            }
        };
        // Wait a frame for card widths to apply in DOM
        requestAnimationFrame(recalc);
    }, [cardWidth]);

    // Clamp x value within bounds
    const clampX = useCallback((val: number) => {
        return Math.max(-scrollRange, Math.min(0, val));
    }, [scrollRange]);

    // Snap to the nearest card
    const snapToNearest = useCallback(() => {
        const step = cardWidth + gap;
        const index = Math.round(x.get() / -step);
        const newX = clampX(-(index * step));
        animate(x, newX, { type: "spring", stiffness: 300, damping: 35 });
    }, [cardWidth, gap, x, clampX]);

    const wheelSnapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Handle mouse wheel on the testimonial section — scroll cards horizontally
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const currentX = x.get();
            const delta = e.deltaY || e.deltaX;

            const atStart = currentX >= 0 && delta < 0;
            const atEnd = currentX <= -scrollRange && delta > 0;

            if (atStart || atEnd) {
                return;
            }

            e.preventDefault();
            const newX = clampX(currentX - delta);
            animate(x, newX, { type: "spring", stiffness: 300, damping: 40 });

            // Debounced snap after scrolling stops
            if (wheelSnapTimeoutRef.current) clearTimeout(wheelSnapTimeoutRef.current);
            wheelSnapTimeoutRef.current = setTimeout(snapToNearest, 150);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            container.removeEventListener("wheel", handleWheel);
            if (wheelSnapTimeoutRef.current) clearTimeout(wheelSnapTimeoutRef.current);
        };
    }, [scrollRange, x, clampX, snapToNearest]);

    return (
        <section className="relative py-24 section-bg-gradient overflow-hidden border-t border-white/5">
            <div className="flex flex-col justify-center">
                <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 bg-primary/5 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full mb-16 shrink-0">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Success Stories</h2>
                        <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                            Trusted by Innovative Companies
                        </h3>
                    </div>
                </div>

                <div ref={scrollContainerRef} className="container mx-auto px-6 lg:px-8 w-full overflow-hidden">
                    <motion.div
                        className="flex w-max pb-4 cursor-grab active:cursor-grabbing"
                        style={{ x, gap: `${gap}px` }}
                        drag="x"
                        dragConstraints={{ left: -scrollRange, right: 0 }}
                        dragElastic={0.05}
                        dragMomentum={false}
                        onDragEnd={snapToNearest}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                                className="shrink-0 flex flex-col relative glass-card p-6 sm:p-10 hover:bg-white/10 hover:border-primary/40 group transition-all select-none"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none" />

                                <div className="flex gap-1.5 text-primary mb-6 relative pointer-events-none">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                                    ))}
                                </div>
                                <blockquote className="text-zinc-400 leading-relaxed relative z-10 text-base font-medium italic mb-8 group-hover:text-zinc-300 transition-colors flex-grow pointer-events-none">
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

