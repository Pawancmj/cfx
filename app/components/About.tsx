"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const stats = [
    { name: "Projects Secured", value: "25+" },
    { name: "Clients Worldwide", value: "150+" },
    { name: "Satisfaction Rate", value: "100%" },
];

export default function About() {
    return (
        <section className="bg-zinc-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-500">Why Choose Us?</h2>
                        <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Built on Trust <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Delivered with Precision</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-zinc-300 opacity-90">
                            Our commitment to excellence and client success is reflected in every project we undertake. We leverage our highly skilled professionals who are experts in their domains, ensuring high-quality output and operational excellence.
                        </p>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Security-First Approach",
                                "Unmatched Expertise",
                                "Measurable Efficiency",
                                "Flexible & Scalable"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 group">
                                    <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <span className="text-zinc-200 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={stat.name} className="relative overflow-hidden rounded-2xl bg-zinc-900 p-8 ring-1 ring-white/10 hover:ring-blue-500/40 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <div className="w-20 h-20 bg-blue-500 rounded-full blur-[40px]"></div>
                                </div>
                                <dt className="text-sm font-medium leading-6 text-zinc-400">{stat.name}</dt>
                                <dd className="mt-2 text-4xl font-bold tracking-tight text-white">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
