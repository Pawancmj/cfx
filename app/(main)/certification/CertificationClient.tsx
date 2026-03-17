"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle, Award, Shield } from "lucide-react";
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

export default function CertificationClient() {
    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[160px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-5xl mx-auto mb-20">
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
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Global Compliance</span>
                        </motion.div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-10 leading-[1.2] sm:leading-[1.1]">
                            Uncompromising <br />
                            <span className="text-gradient italic text-glow inline-block pr-6">Security Standards</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium">
                            Cyberforenx maintains elite-level international certifications to ensure every project aligns with the world&apos;s most stringent data protection and quality benchmarks.
                        </p>
                    </motion.div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative mb-32">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-white/5 border border-white/10 pt-56 sm:pt-48 hover:border-primary/50 transition-all duration-500 shadow-xl cursor-default"
                        >
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-40 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05080a] via-[#05080a]/90 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-90" />

                            <div className="relative p-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                                <div className="absolute -top-12 left-6 w-14 h-14 bg-[#05080a]/80 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-500 shadow-lg">
                                    <cert.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-xl font-extrabold text-white tracking-widest uppercase mb-3 text-glow mt-1">
                                    {cert.name}
                                </h4>
                                <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed border-l-2 border-primary/20 pl-4 group-hover:border-primary/80 group-hover:text-zinc-200 transition-colors duration-300">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="relative z-10 border-t border-white/5 bg-[#05080a]/50 backdrop-blur-xl pt-16 mt-12 pb-16">
                    <CTA />
                </div>
            </div>
        </main>
    );
}
