"use client";

import { motion } from "framer-motion";

export default function Industries() {
    return (
        <section id="industries" className="bg-zinc-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <h2 className="text-lg font-bold uppercase tracking-widest text-blue-500">Industries</h2>
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                            Work in Progress
                        </span>
                    </div>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Solutions for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Sector</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-300">
                        We are currently building specialized solutions for various industries. Stay tuned for updates!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
