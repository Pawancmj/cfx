"use client";

import { motion } from "framer-motion";

export default function IndustriesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-5xl font-extrabold text-white mb-4">Industries</h1>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-widest">
                    Work in Progress
                </div>
                <p className="mt-6 text-zinc-400 max-w-lg mx-auto">
                    We are defining specialized solutions for various sectors. This page is currently building.
                </p>
            </motion.div>
        </main>
    );
}
