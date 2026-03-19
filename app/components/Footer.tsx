"use client";

import Link from "next/link";
import { 
    ShieldCheck, Twitter, Linkedin, Instagram, 
    Phone, Mail, MapPin, ArrowUpRight, 
    Globe, Shield, Zap, Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative pt-10 pb-6 overflow-hidden bg-[#05080a]">
            {/* Olipop-inspired Vibrant Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Content Card */}
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3.5rem] p-6 md:p-10 mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
                    {/* Floating Accent Line at top of card */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div>
                                <Link href="/" className="flex items-center gap-3 group mb-8">
                                    <div className="bg-primary p-2.5 rounded-2xl shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                        <ShieldCheck className="w-7 h-7 text-black" />
                                    </div>
                                    <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                                        Cyber<span className="text-primary">forenx</span>
                                    </span>
                                </Link>
                                <p className="text-xl font-medium text-zinc-400 leading-relaxed italic max-w-md">
                                    Global Intelligence. <br />
                                    <span className="text-white not-italic font-bold">Absolute Security.</span> <br />
                                    <span className="text-accent uppercase text-xs tracking-[0.3em] font-black">Digital Guardians for the Modern Age.</span>
                                </p>
                            </div>

                            <div className="flex gap-4">
                                {[
                                    { Icon: Twitter, href: "https://x.com/Cyber_ForenX", color: "hover:bg-primary hover:text-black" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/company/cyberforenx-associate/", color: "hover:bg-secondary" },
                                    { Icon: Instagram, href: "https://www.instagram.com/cyberforenx/", color: "hover:bg-accent hover:text-black" }
                                ].map(({ Icon, href, color }, i) => (
                                    <Link
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-300 transition-all duration-500 hover:text-white hover:-translate-y-2 hover:shadow-2xl ${color}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links Group */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Ecosystem */}
                            <div className="flex flex-col gap-8">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Ecosystem</h4>
                                <ul className="flex flex-col gap-4">
                                    {['Home', 'Services', 'Solutions', 'Careers', 'Company'].map((item) => (
                                        <li key={item}>
                                            <Link 
                                                href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                                                className="text-sm font-bold text-zinc-500 hover:text-accent transition-colors tracking-widest uppercase flex items-center gap-2 group"
                                            >
                                                <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"></span>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Expertise */}
                            <div className="flex flex-col gap-8">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-secondary">Expertise</h4>
                                <ul className="flex flex-col gap-4">
                                    {['Forensics', 'Security', 'Cloud', 'Analytics', 'DevOps'].map((item) => (
                                        <li key={item} className="text-sm font-bold text-zinc-500 cursor-default hover:text-secondary transition-colors tracking-widest uppercase">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Card Inside Footer */}
                            <div className="col-span-2 md:col-span-1 flex flex-col gap-8">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Connect</h4>
                                <div className="flex flex-col gap-6">
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Direct Line</p>
                                        <a href="tel:+919990751991" className="text-sm font-bold text-white group-hover:text-accent transition-colors">+91 9990751991</a>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Official Mail</p>
                                        <a href="mailto:contact@cyberforenx.in" className="text-sm font-bold text-white group-hover:text-accent transition-colors truncate block">contact@cyberforenx.in</a>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Global HQ</p>
                                        <address className="text-xs font-bold text-zinc-400 leading-relaxed not-italic group-hover:text-white transition-colors">
                                            74A, Avni Vihar, Ghaziabad,<br />Uttar Pradesh, India
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fun Floating Icons Background Decoration */}
                    <div className="absolute bottom-[-20px] right-[10%] opacity-5 -z-10 group-hover:bg-red-500">
                         <Shield className="w-64 h-64 text-white rotate-12" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                        <span>&copy; 2026 CYBERFORENX</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                        <span className="text-primary">DESIGNED WITH PASSION</span>
                    </div>
                    
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-[10px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-accent transition-colors">Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
