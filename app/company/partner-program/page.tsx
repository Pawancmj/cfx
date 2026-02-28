"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Handshake } from "lucide-react";
import Link from "next/link";
import CTA from "../../components/CTA";

export default function PartnerProgramPage() {
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
                        <Handshake className="w-4 h-4" /> Global Alliance
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                        Partner Program
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        Scale your business by integrating with Cyberforenx's elite ecosystem. We empower agencies, consultancies, and technology providers with cutting-edge tools and dedicated support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { title: "Technology Partners", desc: "Integrate our proprietary AI and cybersecurity tools into your existing tech stack to offer superior solutions to your clients." },
                        { title: "Consulting Partners", desc: "Expand your advisory services by leveraging our domain expertise and execution capabilities for enterprise digital transformation." },
                        { title: "Referral Partners", desc: "Introduce your network to our premium services and benefit from an industry-leading revenue sharing model." }
                    ].map((tier) => (
                        <div key={tier.title} className="glass-card p-10 group hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{tier.title}</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">{tier.desc}</p>
                            <button className="mt-8 text-xs font-bold uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </main>
    );
}
