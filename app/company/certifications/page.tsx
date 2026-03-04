"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";
import CTA from "../../components/CTA";

const certifications = [
    {
        name: "ISO 27001",
        description: "Information Security Management System. Ensures the highest standards in protecting sensitive data and mitigating cyber threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "ISO 9001",
        description: "Quality Management System. Demonstrates our commitment to consistent quality, customer satisfaction, and continuous improvement.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "ISO 20000-1",
        description: "IT Service Management System. Validates our excellence in IT service delivery, support, and operational efficiency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "CMMI Level 3 / 5",
        description: "Capability Maturity Model Integration. Demonstrated high maturity in software development and service delivery processes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "SOC 2 Type II",
        description: "Service Organization Control. Stringent independent audits verifying our security, availability, and processing integrity.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "ISO 17025",
        description: "Testing and Calibration Laboratories. Proven competence, impartiality, and consistent operation in laboratory results.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
    }
];

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
                        Our Certifications
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
                        Our commitment to global security standards. CyberForenX & Associates maintains the highest level of industry compliance to protect your enterprise assets and ensure quality execution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card overflow-hidden group hover:border-primary/50 border border-white/5 transition-all flex flex-col"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="object-cover w-full h-full group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                                <div className="absolute bottom-5 left-6 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-colors">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-widest uppercase">{cert.name}</h3>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <CTA />
        </main>
    );
}
