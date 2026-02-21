"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-5xl font-extrabold text-white mb-4">About Us</h1>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest">
                    Work in Progress
                </div>
                <p className="mt-6 text-zinc-400 max-w-lg mx-auto">
                    We're currently building a comprehensive look at our story and mission. Stay tuned!
                </p>
            </motion.div>
        </main>
    );
}
