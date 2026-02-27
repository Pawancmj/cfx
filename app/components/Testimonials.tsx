"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";


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
];

export default function Testimonials() {
    return (
        <section className="relative py-24 section-bg-gradient overflow-hidden border-t border-white/5">
            <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Success Stories</h2>
                    <p className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl text-glow leading-tight">
                        Trusted by Innovative Companies
                    </p>
                </div>
                <div className="mx-auto mt-20 flow-root max-w-2xl sm:mt-24 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="relative glass-card p-10 hover:bg-white/10 hover:border-primary/40 group"
                            >
                                {/* Decorative Quote Mark */}
                                <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-colors" />

                                <div className="flex gap-1.5 text-primary mb-10 relative">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                                    ))}
                                </div>
                                <blockquote className="text-zinc-400 leading-relaxed relative z-10 text-lg font-medium italic mb-12 group-hover:text-zinc-200 transition-colors">
                                    &quot;{testimonial.content}&quot;
                                </blockquote>
                                <div className="flex items-center gap-x-6 border-t border-white/10 pt-10">
                                    <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-background font-bold text-xl shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white uppercase tracking-[0.1em] text-sm">{testimonial.author}</div>
                                        <div className="text-xs text-primary uppercase tracking-[0.2em] font-bold mt-2">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

