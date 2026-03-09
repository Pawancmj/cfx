"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import CTA from "@/app/components/CTA";

export default function LeadershipPage() {
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
                        <Users className="w-4 h-4" /> Our Team
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                        Leadership
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        Meet the visionaries behind Cyberforenx. Our leadership team brings decades of global experience in cybersecurity, enterprise software, and digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-8 text-center group hover:border-primary/50 transition-colors">
                            <div className="w-32 h-32 mx-auto bg-white/5 rounded-full mb-6 border border-white/10 group-hover:border-primary/50 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-1">Executive {i}</h3>
                            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Board Member</p>
                            <p className="text-sm text-zinc-400">Guiding strategic initiatives and ensuring operational excellence across all global sectors.</p>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </main>
    );
}
