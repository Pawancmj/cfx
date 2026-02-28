"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";
import CTA from "../../components/CTA";

export default function CertificationsPage() {
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
                        <Award className="w-4 h-4" /> Compliance & Trust
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">
                        Certifications
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        Our commitment to global security standards. Webority Technologies maintains the highest level of industry compliance to protect your enterprise assets.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "PCI-DSS Level 1"].map((cert) => (
                        <div key={cert} className="glass-card p-10 group hover:border-primary/50 transition-colors flex items-center gap-8">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{cert}</h3>
                                <p className="text-sm text-zinc-400">Regularly audited and verified by independent third-party global organizations.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </main>
    );
}
