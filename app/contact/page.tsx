"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Building2, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        industry: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Inquiry from ${formState.name} - ${formState.industry}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\n` +
            `Email: ${formState.email}\n` +
            `Industry: ${formState.industry}\n\n` +
            `Message:\n${formState.message}`
        );
        window.location.href = `mailto:forsatyam2018@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className="relative min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600 opacity-10 blur-[120px]"></div>
            <div className="absolute right-1/4 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-600 opacity-10 blur-[120px]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Strategic Engagement</h2>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                            Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Excellence</span>
                        </h1>
                        <p className="text-lg leading-8 text-zinc-400">
                            Partner with our global experts to drive innovation through secure, scalable, and mission-critical technology solutions tailored for enterprise success.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                        <User className="w-4 h-4 text-blue-500" /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                        <AtSign className="w-4 h-4 text-blue-500" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-blue-500" /> Industry
                                </label>
                                <select
                                    className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none"
                                    onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                                >
                                    <option value="" className="bg-zinc-900">Select your industry</option>
                                    <option value="finance" className="bg-zinc-900">Banking & Finance</option>
                                    <option value="healthcare" className="bg-zinc-900">Healthcare</option>
                                    <option value="ecommerce" className="bg-zinc-900">E-commerce</option>
                                    <option value="tech" className="bg-zinc-900">Technology & SaaS</option>
                                    <option value="other" className="bg-zinc-900">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-blue-500" /> Project Details
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project requirements..."
                                    className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-4 text-base font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <ContactInfoCard
                                icon={<Mail className="w-6 h-6 text-blue-500" />}
                                title="Email Us"
                                description="Our team is here to help."
                                value="contact@cyberforenx.com"
                                href="mailto:contact@cyberforenx.com"
                            />
                            <ContactInfoCard
                                icon={<Phone className="w-6 h-6 text-blue-500" />}
                                title="Call Us"
                                description="Mon-Fri from 9am to 6pm."
                                value="+1 (555) 000-0000"
                                href="tel:+15550000000"
                            />
                            <ContactInfoCard
                                icon={<MapPin className="w-6 h-6 text-blue-500" />}
                                title="Visit Us"
                                description="Come say hello at our office."
                                value="123 Tech Avenue, Silicon Valley, CA"
                                href="https://maps.google.com"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl">
                            <h3 className="text-lg font-bold text-white mb-4">Follow Our Progress</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
                                    { icon: <Github className="w-5 h-5" />, href: "#", name: "GitHub" },
                                    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
                                ].map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

function ContactInfoCard({ icon, title, description, value, href }: { icon: React.ReactNode, title: string, description: string, value: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 transition-all hover:-translate-y-1"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    {icon}
                </div>
                <div>
                    <h3 className="text-sm font-bold text-zinc-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{title}</h3>
                    <p className="text-zinc-300 mt-0.5">{description}</p>
                    <p className="text-white font-semibold mt-1">{value}</p>
                </div>
            </div>
        </a>
    );
}
