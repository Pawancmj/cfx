"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";
import CTA from "@/app/components/CTA";

export default function CulturePage() {
    return (
        <main className="flex min-h-screen flex-col pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-8">
                <Link
                    href="/company"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Company
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <Rocket className="w-4 h-4" /> Inside Cyberforenx
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                        Our Culture
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        We foster an environment of continuous learning, relentless innovation, and uncompromising integrity in everything we do.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="glass-card p-12 min-h-[400px] border-primary/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Driven by Excellence</h2>
                        <p className="text-zinc-400 leading-relaxed relative z-10">Our engineers, analysts, and strategists are united by a single mission: to build the most resilient and advanced digital ecosystems in the world. We don't settle for "good enough" - we aim for flawless execution.</p>
                    </div>
                    <div className="glass-card p-12 min-h-[400px] border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Work Without Borders</h2>
                        <p className="text-zinc-400 leading-relaxed relative z-10">With a globally distributed team spanning over 25 countries, we embrace diverse perspectives and asynchronous collaboration. We hire the best talent, regardless of geography, providing flexibility and trust.</p>
                    </div>
                </div>
            </div>
            <CTA />
        </main>
    );
}
