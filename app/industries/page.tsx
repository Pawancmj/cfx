"use client";

import { motion } from "framer-motion";
import { Landmark, HeartPulse, ShoppingCart, Factory, Globe, Zap, BookOpen, Network, Truck } from "lucide-react";

const industries = [
    {
        title: "Banking & Finance",
        description: "Secure fintech solutions and core banking transformations with mission-critical reliability.",
        icon: Landmark,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Healthcare",
        description: "Digital health platforms and patient data security compliant with global standards.",
        icon: HeartPulse,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
    {
        title: "E-commerce",
        description: "High-performance shopping experiences with seamless payment integrations and scalability.",
        icon: ShoppingCart,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        title: "Manufacturing",
        description: "Smart factory solutions and IoT integrations for operational excellence and predictive maintenance.",
        icon: Factory,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Logistics & Supply Chain",
        description: "Intelligent tracking, fleet management, and automated supply chain operations.",
        icon: Truck,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        title: "Technology & SaaS",
        description: "Accelerating innovation for tech startups and enterprises with robust product engineering.",
        icon: Globe,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
    },
    {
        title: "Energy & Utilities",
        description: "Smart grid software, resource management, and critical infrastructure cybersecurity.",
        icon: Zap,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },

    {
        title: "Government & Legal",
        description: "Secure, compliant, and transparent digital infrastructure for government agencies and legal institutions.",
        icon: BookOpen,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
    },

    {
        title: "Telecommunications",
        description: "High-availability network solutions and scalable communication frameworks for modern telcos.",
        icon: Network,
        color: "text-fuchsia-500",
        bg: "bg-fuchsia-500/10",
    }
];

export default function IndustriesPage() {
    return (
        <main className="relative min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Our Focus</h2>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Empower</span>
                        </h1>
                        <p className="text-lg leading-8 text-zinc-400">
                            We deliver specialized digital solutions tailored to the unique challenges and opportunities of diverse sectors.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-blue-500/40 transition-all hover:-translate-y-2"
                        >
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${industry.bg} group-hover:scale-110 transition-transform duration-300`}>
                                <industry.icon className={`h-7 w-7 ${industry.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {industry.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {industry.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <span className="text-sm font-bold text-blue-500/60 uppercase tracking-widest">Work in Progress</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-cyan-600 text-center text-white"
                >
                    <h2 className="text-3xl font-bold mb-4 text-white">Don&apos;t see your industry?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Our experts can build custom solutions for any sector. Reach out to discuss your specific needs.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-colors shadow-xl">
                        Talk to an Expert <Globe className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
