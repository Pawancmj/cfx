"use client";

import { motion } from "framer-motion";
import { FileText, Download, PlayCircle, Book, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../../../lib/utils";

const resources = [
    {
        title: "Cyber Security Threat Report 2026",
        type: "Whitepaper",
        description: "An in-depth analysis of emerging digital threats and how enterprises can build resilient defense mechanisms.",
        icon: FileText,
        color: "text-primary"
    },
    {
        title: "Modernizing Legacy Systems",
        type: "Guide",
        description: "A comprehensive step-by-step framework for transitioning monoliths to cloud-native microservices.",
        icon: Book,
        color: "text-secondary"
    },
    {
        title: "Incident Response Playbook",
        type: "Template",
        description: "Downloadable templates and checklists that our forensics team uses during critical data breaches.",
        icon: Download,
        color: "text-accent"
    },
    {
        title: "The Future of BPO Operations",
        type: "Webinar",
        description: "Watch our executives discuss how AI is transforming business process outsourcing on a global scale.",
        icon: PlayCircle,
        color: "text-primary"
    }
];

export default function ResourcesPage() {
    return (
        <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[150px]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-white flex flex-col items-center sm:text-7xl mb-8 leading-[1.2]">
                            Knowledge <br /> <span className="text-gradient italic text-glow">Resources</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto font-medium">
                            Insights, guides, and tools crafted by our industry experts to help you navigate complex technological landscapes.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {resources.map((resource, i) => (
                        <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group flex flex-col sm:flex-row gap-8 items-start p-8 glass-card rounded-3xl hover:bg-white/10 transition-all border-white/5 hover:border-white/10"
                        >
                            <div className={cn("p-4 shrink-0 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors")}>
                                <resource.icon className={cn("w-8 h-8", resource.color)} />
                            </div>

                            <div className="flex-grow">
                                <span className={cn("text-xs font-black uppercase tracking-[0.3em] mb-3 block", resource.color)}>{resource.type}</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{resource.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-medium mb-6">
                                    {resource.description}
                                </p>
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors">
                                    Access Resource <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] text-center border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
                    <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tight relative z-10">Stay Informed</h3>
                    <p className="text-zinc-400 font-medium mb-8 relative z-10">Subscribe to receive our latest insights and vulnerability alerts.</p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                        <input
                            type="email"
                            placeholder="ENTER YOUR EMAIL"
                            className="flex-grow bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-primary/50 transition-colors"
                        />
                        <button className="bg-primary text-background px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-primary/80 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
