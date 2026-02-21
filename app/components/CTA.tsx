"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTA() {
    return (
        <section className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl lg:max-w-lg"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Elevate Your Security and Digital Presence?
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-zinc-300">
                            Securing your digital future with cutting-edge web & app development, digital forensics, and BPO solutions.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <Link
                                href="/consultation"
                                className={cn(
                                    "rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-400"
                                )}
                            >
                                Get a Free Consultation
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 py-3.5"
                            >
                                See Our Work <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20 -z-10"></div>
                        <div className="bg-zinc-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                            <ul className="space-y-4 text-zinc-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span>Proven track record of success</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span>Agile development methodology</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                    <span>Dedicated support & maintenance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span>Focus on secure & scalable code</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div
                className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </section>
    );
}
