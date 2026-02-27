"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTA() {
    return (
        <section className="relative isolate overflow-hidden section-bg-alt py-24 border-t border-white/5">
            <div className="absolute inset-0 bg-dots opacity-20"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl lg:max-w-lg border-l-4 border-primary pl-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Sparkles className="w-3 h-3 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Limited Availability</span>
                        </motion.div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.2] sm:leading-[1.1]">
                            Ready to Elevate Your <br />
                            <span className="text-gradient italic text-glow">Digital Presence?</span>
                        </h2>
                        <p className="mt-8 text-lg leading-relaxed text-zinc-400 font-medium">
                            Securing your digital future with cutting-edge web & app development, digital forensics, and BPO solutions.
                        </p>
                        <div className="mt-14 flex flex-col sm:flex-row items-center gap-8">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto btn-primary px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base"
                            >
                                Free Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto btn-outline px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base group"
                            >
                                Our Services <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass-card p-10 shadow-2xl hover:border-primary/40 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -z-10"></div>
                            <h3 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-10 border-b border-white/10 pb-5">Why Cyberforenx?</h3>
                            <ul className="space-y-10">
                                {[
                                    { color: "bg-primary", text: "Enterprise-grade security standards" },
                                    { color: "bg-primary/60", text: "Global delivery & 24/7 technical support" },
                                    { color: "bg-primary/40", text: "Agile, scalable, and resilient architecture" },
                                    { color: "bg-primary/20", text: "Data-driven strategic consulting" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-8 text-white font-bold text-sm uppercase tracking-[0.1em] group/li">
                                        <div className={`w-4 h-4 rounded-full ${item.color} shadow-[0_0_10px_rgba(0,242,255,0.3)] group-hover/li:scale-125 transition-transform`}></div>
                                        <span className="group-hover/li:text-primary transition-colors">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

