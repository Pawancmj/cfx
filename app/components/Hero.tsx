"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    return (
        <div id="hero" className="relative isolate min-h-screen pt-20 sm:pt-24 md:pt-28 pb-8 overflow-hidden section-bg-dark flex items-center">
            {/* Background Effects */}
            <ParticleBackground />
            <div className="absolute inset-0 -z-10 bg-grid opacity-30"></div>

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-0 w-64 h-64 md:w-80 md:h-80 bg-primary/20 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-0 w-64 h-64 md:w-80 md:h-80 bg-secondary/20 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
                    >
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Leading Digital Excellence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.1] lg:leading-[1.05]"
                    >
                        Secure Your Vision, <br className="hidden sm:block" />
                        <span className="text-gradient italic text-glow inline-block">Unlock Potential.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl mx-auto font-medium"
                    >
                        Cyberforenx specializes in <span className="text-white font-bold">Full Stack Development</span>, <span className="text-white font-bold">Advanced Data Analytics</span>, and Digital Forensic investigations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto btn-primary px-12 py-5 text-base uppercase tracking-widest group"
                        >
                            Start Your Journey <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto btn-outline px-12 py-5 text-base uppercase tracking-widest"
                        >
                            Our Expertise
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}

