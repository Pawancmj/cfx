"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, Zap, Server } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const caseStudies = [
    {
        title: "Global Financial Integrity",
        client: "Tier 1 Banking Institution",
        category: "Forensic Analysis",
        description: "Uncovered a massive internal fraud ring and recovered $50M+ in digital assets using advanced forensic imaging and blockchain tracing.",
        results: ["$50M+ Recovered", "Zero Downtime", "Legal Admissibility Assured"],
        icon: ShieldCheck,
        color: "text-primary",
    },
    {
        title: "Enterprise Transformation",
        client: "Pinnacle Logistics Corp",
        category: "Software Engineering",
        description: "Re-architected legacy monolithic supply chain software into a high-performance, cloud-native microservices ecosystem.",
        results: ["300% Speed Increase", "99.99% Uptime", "Automated Workflows"],
        icon: Zap,
        color: "text-secondary",
    },
    {
        title: "Secure Data Infrastructure",
        client: "National Health Network",
        category: "Cyber Audit & Cloud",
        description: "Designed and migrated critical patient data to a HIPAA-compliant, zero-trust cloud architecture after uncovering vulnerabilities.",
        results: ["Zero-Trust Implemented", "100% Compliance", "Threat Prevention"],
        icon: Server,
        color: "text-accent",
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[160px]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-white flex flex-col items-center sm:text-7xl mb-8 leading-[1.2]">
                            Case  <br /> <span className="text-gradient italic text-glow">Studies</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto font-medium">
                            Explore how we have engineered success for our partners through strategic innovation and uncompromising digital security.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group glass-card p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all border-white/5"
                        >
                            <div className={cn("p-4 w-fit rounded-2xl mb-8 bg-white/5 shadow-inner group-hover:bg-primary/10 transition-colors")}>
                                <study.icon className={cn("w-8 h-8", study.color)} />
                            </div>

                            <div className="mb-6">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-2 block">{study.client}</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                                <span className={cn("text-xs font-bold uppercase tracking-widest", study.color)}>{study.category}</span>
                            </div>

                            <p className="text-zinc-400 leading-relaxed font-medium mb-8">
                                {study.description}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                {study.results.map((result) => (
                                    <div key={result} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {result}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-16 rounded-[3rem] section-bg-gradient text-center shadow-2xl border border-white/10"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-8 uppercase italic text-glow">Be Our Next Success Story</h2>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all">
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
