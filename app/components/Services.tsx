"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Cloud, Brain, Shield, Rocket, Search, Database, Lock } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Crafting secure, high-performance web applications tailored to your business needs.",
        icon: Laptop,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "App Development",
        description: "Building intuitive and cloud mobile applications for iOS and Android platforms.",
        icon: Smartphone,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Digital Forensics",
        description: "Expert analysis to uncover, investigate, and secure digital evidence from cyber threats.",
        icon: Search,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
    },
    {
        title: "BPO/BPS Solutions",
        description: "Streamlining your business processes with efficient and secure outsourcing services.",
        icon: Rocket,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Cybersecurity Consulting",
        description: "Comprehensive strategies and solutions to protect your digital assets from evolving threats.",
        icon: Shield,
        color: "text-red-500",
        bg: "bg-red-500/10",
    },
    {
        title: "Cloud Security",
        description: "Securing your cloud infrastructure and data with robust, scalable protection measures.",
        icon: Cloud,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        title: "AI & Automation",
        description: "Leveraging AI to automate security processes, enhance threat detection, and optimize operations.",
        icon: Brain,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        title: "Data Analytics & Privacy",
        description: "Protecting sensitive data and providing insights with secure, compliant analytics solutions.",
        icon: Database,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative bg-zinc-950 py-24 sm:py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-lg font-bold uppercase tracking-widest text-blue-500">Our Expertise</h2>
                        <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Service Portfolio</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-zinc-300">
                            Empowering your business with secure, scalable, and innovative digital solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10 transition-all duration-300 hover:ring-2 hover:ring-blue-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
                            >
                                {/* Hover Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.bg} group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300`}>
                                        <service.icon className={`h-7 w-7 ${service.color} group-hover:text-white transition-colors duration-300`} aria-hidden="true" />
                                    </div>
                                    <dt className="text-xl font-bold leading-7 text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {service.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                                        <p className="flex-auto">{service.description}</p>
                                    </dd>
                                </div>

                                <div className="mt-6 relative z-10">
                                    <div className="flex items-center text-sm font-semibold text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more <span className="ml-2">&rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
