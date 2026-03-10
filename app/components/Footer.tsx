import Link from "next/link";
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="bg-primary p-2 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-transform group-hover:scale-110">
                                <ShieldCheck className="w-6 h-6 text-background" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-glow">Cyberforenx</span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed text-sm font-medium">
                            Empowering enterprise growth through strategic digital transformation, advanced forensics, and high-performance technical solutions.
                        </p>
                        <div className="flex gap-5">
                            {[
                                { Icon: Twitter, href: "https://x.com/Cyber_ForenX" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/cyberforenx-associate/?viewAsMember=true" },
                                { Icon: Instagram, href: "https://www.instagram.com/cyberforenx/" }
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full glass-card border-white/10 text-zinc-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-xl"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Ecosystem */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-[0.4em] text-xs mb-8 border-l-4 border-primary pl-4">Ecosystem</h3>
                        <ul className="flex flex-col gap-5">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/services" },
                                { label: "Solutions", href: "/solutions" },
                                { label: "Case Studies", href: "/case-studies" },
                                { label: "Resources", href: "/resources" },
                                { label: "Company", href: "/company" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-primary transition-all flex items-center gap-3 group text-xs font-bold uppercase tracking-[0.2em]"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Expertise */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-[0.4em] text-xs mb-8 border-l-4 border-primary pl-4">Expertise</h3>
                        <ul className="flex flex-col gap-5">
                            {[
                                "Digital Transformation",
                                "Strategic Consulting",
                                "Enterprise Security",
                                "Forensic Analysis",
                                "Cloud Infrastructure"
                            ].map((service) => (
                                <li key={service} className="text-zinc-400 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] group cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,242,255,0.6)] group-hover:scale-150 transition-transform" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-[0.4em] text-xs mb-8 border-l-4 border-primary pl-4">Connect</h3>
                        <ul className="flex flex-col gap-8 text-sm">
                            <li className="flex items-start gap-5 group">
                                <div className="p-3 rounded-2xl glass-card border-white/10 group-hover:border-primary/40 transition-all duration-300 shadow-xl group-hover:bg-primary/5">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="pt-1">
                                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-[0.2em] mb-2">Corporate Hotline</p>
                                    <a href="tel:+919990751991" className="text-zinc-200 font-bold uppercase tracking-[0.1em] text-xs transition-colors group-hover:text-white">+91 9990751991</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="p-3 rounded-2xl glass-card border-white/10 group-hover:border-primary/40 transition-all duration-300 shadow-xl group-hover:bg-primary/5">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="pt-1">
                                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-[0.2em] mb-2">Inquiries</p>
                                    <a href="mailto:contact@cyberforenx.in" className="text-zinc-200 font-bold uppercase tracking-[0.1em] text-xs transition-colors group-hover:text-white">contact@cyberforenx.in</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em]">
                        &copy; 2026 CYBERFORENX SYSTEMS. <span className="text-primary/40">ARCHITECTING THE FUTURE.</span>
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
                        <Link href="#" className="hover:text-primary transition-colors hover:tracking-[0.3em]">Privacy Framework</Link>
                        <Link href="#" className="hover:text-primary transition-colors hover:tracking-[0.3em]">Terms of Engagement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

