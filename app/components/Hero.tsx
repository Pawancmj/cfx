"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
    ssr: false,
});

export default function Hero() {
    return (
        <div id="hero" className="relative isolate min-h-screen pt-20 sm:pt-24 md:pt-28 pb-8 overflow-hidden section-bg-dark flex items-center">
            {/* Background Effects */}
            <ParticleBackground />
            <div className="absolute inset-0 -z-10 bg-grid opacity-30"></div>

            {/* Ambient Blobs — soft, atmospheric */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-0 w-64 h-64 md:w-80 md:h-80 bg-primary/10 blur-[100px] md:blur-[140px] rounded-full -z-10 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, -50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-0 w-64 h-64 md:w-80 md:h-80 bg-secondary/10 blur-[100px] md:blur-[140px] rounded-full -z-10 pointer-events-none"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-6"
                    >
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Leading Digital Excellence</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.15]"
                    >
                        Secure Your Digital Future,{" "}
                        <br className="hidden sm:block" />
                        <span className="text-gradient inline-block text-[calc(1em-3px)]">Empower Innovation.</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-8 sm:mt-10 text-lg sm:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto"
                    >
                        CyberForenX & Associates delivers advanced cybersecurity, digital forensics, software development, and technology consulting solutions designed to help businesses grow securely and efficiently.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto btn-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider group"
                        >
                            Book a Consultation <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto btn-outline px-8 py-3.5 text-sm font-semibold uppercase tracking-wider"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}
