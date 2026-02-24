"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <div id="hero" className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 sm:pt-40 lg:pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20 transition duration-300">
                            Transforming Ideas into Digital Reality{" "}
                            <Link href="/services" className="font-semibold text-blue-400">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Explore Portfolio <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                        Secure Your Vision, <br className="hidden sm:block" />
                        <span className="text-blue-500">Unlock Potential.</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-300 max-w-2xl mx-auto">
                        Cyberforenx specializes in <span className="text-white">Full Stack Development</span>, <span className="text-white">Advanced Data Analytics</span>, and Digital Forensic investigations, architecting resilient digital ecosystems for the modern enterprise.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className={cn(
                                "rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:scale-105"
                            )}
                        >
                            Work With Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                        >
                            View Work <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Icons / Features */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-zinc-400/80">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-white">Global Reach</h3>
                        <p className="text-sm">Serving clients worldwide with 24/7 support.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-white">Custom Dev</h3>
                        <p className="text-sm">Tailored software solutions for unique needs.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                        <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                            <Database className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-white">Data Insights</h3>
                        <p className="text-sm">Turning data into actionable business intelligence.</p>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-zinc-500 flex justify-center items-start p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-2 bg-zinc-500 rounded-full"
                    />
                </div>
            </motion.div>

        </div>
    );
}
