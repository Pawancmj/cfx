"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Award, ShieldCheck, CheckCircle, Lock, Shield } from "lucide-react";
import Link from "next/link";
import CTA from "@/app/components/CTA";

const certifications = [
    {
        name: "ISO 27001",
        description: "Information Security Management System. Ensures the highest standards in protecting sensitive data and mitigating cyber threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        icon: Lock
    },
    {
        name: "ISO 9001",
        description: "Quality Management System. Demonstrates our commitment to consistent quality, customer satisfaction, and continuous improvement.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        icon: CheckCircle
    },
    {
        name: "ISO 20000-1",
        description: "IT Service Management System. Validates our excellence in IT service delivery, support, and operational efficiency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        icon: ShieldCheck
    },
    {
        name: "CMMI Level 3 / 5",
        description: "Capability Maturity Model Integration. Demonstrated high maturity in software development and service delivery processes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        icon: Award
    },
    {
        name: "SOC 2 Type II",
        description: "Service Organization Control. Stringent independent audits verifying our security, availability, and processing integrity.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
        icon: Shield
    },
    {
        name: "ISO 17025",
        description: "Testing and Calibration Laboratories. Proven competence, impartiality, and consistent operation in laboratory results.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        icon: CheckCircle
    }
];

export default function CertificationsPage() {
    return (
        <main className="flex min-h-screen flex-col relative overflow-hidden section-bg-dark">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse-slow" />
            <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-[150px] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-24">
                <Link
                    href="/company"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-primary transition-all mb-12 group glass-card px-5 py-2.5 hover:border-primary/50"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Company
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="border-l-4 border-primary pl-6 md:pl-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-8 shadow-[0_0_15px_rgba(0,242,255,0.15)] backdrop-blur-md">
                            <ShieldCheck className="w-4 h-4" /> Global Trust & Compliance
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tighter leading-[1.1] drop-shadow-2xl">
                            Our <span className="text-gradient italic font-display">Certifications</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
                            Uncompromising commitment to international security standards. <span className="text-white font-bold">CyberForenX & Associates</span> maintains elite-level compliance to secure your enterprise future.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 relative">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-white/5 border border-white/10 pt-56 sm:pt-48 lg:pt-56 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_-10px_rgba(0,242,255,0.3)] cursor-default"
                        >
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-40 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05080a] via-[#05080a]/90 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-90" />

                            <div className="relative p-6 lg:p-7 transform transition-transform duration-500 group-hover:-translate-y-1">
                                <div className="absolute -top-12 left-6 w-14 h-14 bg-[#05080a]/80 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                                    <cert.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-widest uppercase mb-3 text-glow mt-1">
                                    {cert.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed border-l-2 border-primary/20 pl-4 group-hover:border-primary/80 group-hover:text-zinc-200 transition-colors duration-300">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 border-t border-white/5 bg-[#05080a]/50 backdrop-blur-xl">
                <CTA />
            </div>
        </main>
    );
}
