"use client";

import { motion } from "framer-motion";
import { Landmark, HeartPulse, ShoppingCart, Factory, Globe, Zap, BookOpen, Network, Truck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const industries = [
    {
        title: "Banking & Finance",
        description: "Secure fintech solutions and core banking transformations with mission-critical reliability.",
        icon: Landmark,
        color: "text-primary",
        bg: "bg-primary/10",
        shadow: "rgba(0,242,255,0.2)",
    },
    {
        title: "Healthcare",
        description: "Digital health platforms and patient data security compliant with global standards.",
        icon: HeartPulse,
        color: "text-secondary",
        bg: "bg-secondary/10",
        shadow: "rgba(112,0,255,0.2)",
    },
    {
        title: "E-commerce",
        description: "High-performance shopping experiences with seamless payment integrations and scalability.",
        icon: ShoppingCart,
        color: "text-accent",
        bg: "bg-accent/10",
        shadow: "rgba(0,255,204,0.2)",
    },
    {
        title: "Manufacturing",
        description: "Smart factory solutions and IoT integrations for operational excellence and predictive maintenance.",
        icon: Factory,
        color: "text-primary",
        bg: "bg-primary/10",
        shadow: "rgba(0,242,255,0.2)",
    },
    {
        title: "Logistics",
        description: "Intelligent tracking, fleet management, and automated supply chain operations for global scale.",
        icon: Truck,
        color: "text-secondary",
        bg: "bg-secondary/10",
        shadow: "rgba(112,0,255,0.2)",
    },
    {
        title: "Technology & SaaS",
        description: "Accelerating innovation for tech startups and enterprises with robust product engineering.",
        icon: Globe,
        color: "text-accent",
        bg: "bg-accent/10",
        shadow: "rgba(0,255,204,0.2)",
    },
    {
        title: "Energy & Utilities",
        description: "Smart grid software, resource management, and critical infrastructure cybersecurity.",
        icon: Zap,
        color: "text-primary",
        bg: "bg-primary/10",
        shadow: "rgba(0,242,255,0.2)",
    },
    {
        title: "Government & Legal",
        description: "Secure, compliant, and transparent digital infrastructure for government agencies and legal institutions.",
        icon: BookOpen,
        color: "text-secondary",
        bg: "bg-secondary/10",
        shadow: "rgba(112,0,255,0.2)",
    },
    {
        title: "Telecommunications",
        description: "High-availability network solutions and scalable communication frameworks for modern telcos.",
        icon: Network,
        color: "text-accent",
        bg: "bg-accent/10",
        shadow: "rgba(0,255,204,0.2)",
    }
];

export default function IndustriesPage() {
    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-24 overflow-hidden text-zinc-100">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[160px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Global Reach</span>
                        </motion.div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.2] sm:leading-[1.1]">
                            Industries We <br />
                            <span className="text-gradient italic text-glow">Empower</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium">
                            We deliver specialized digital solutions tailored to the unique challenges and opportunities of diverse global sectors.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative glass-card p-8 rounded-[2rem] hover:bg-white/10 border-white/5 transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className={cn(
                                "mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-primary/10",
                                `group-hover:shadow-[0_0_20px_${industry.shadow}]`
                            )}>
                                <industry.icon className={cn("h-8 w-8 transition-colors", industry.color)} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors uppercase tracking-tight text-glow break-words">
                                {industry.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-medium italic text-base group-hover:text-zinc-200 transition-colors">
                                {industry.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs font-black text-primary/60 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">Strategy Active</span>
                                <div className="p-2 rounded-full border border-white/10 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-black transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-16 sm:p-24 rounded-[3.5rem] section-bg-gradient text-center relative overflow-hidden shadow-2xl border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-dots opacity-20"></div>
                    <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Globe className="w-96 h-96 text-white" />
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-8 text-white uppercase tracking-tighter italic relative z-10 text-glow">Custom Domains?</h2>
                    <p className="text-zinc-300 mb-12 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs relative z-10 leading-relaxed">
                        Our experts architect custom solutions for every complex sector. Let&apos;s discuss your specific mission requirements.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 relative z-10">
                        Consult Our Experts <Globe className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}

