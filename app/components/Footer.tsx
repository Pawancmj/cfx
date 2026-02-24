import Link from "next/link";
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Cyberforenx</span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Empowering enterprise growth through strategic digital transformation, advanced forensics, and high-performance technical solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Ecosystem */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Ecosystem</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Industries", href: "/industries" },
                                { label: "Careers", href: "/careers" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm font-medium"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Expertise */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Expertise</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Digital Transformation",
                                "Strategic Consulting",
                                "Enterprise Security",
                                "Forensic Analysis",
                                "Cloud Infrastructure"
                            ].map((service) => (
                                <li key={service} className="text-zinc-400 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                    {service}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <ArrowRight className="w-4 h-4 text-blue-500" />
                                <Link href="/careers" className="hover:text-blue-400 transition-colors">Join Our Team (Internships)</Link>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm">
                                <ArrowRight className="w-4 h-4 text-blue-500" />
                                <span>Available 24/7 for Global Support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Global Headquarters */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Connect</h3>
                        <ul className="flex flex-col gap-6 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                    <Phone className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter mb-1">Corporate Hotline</p>
                                    <span className="text-zinc-300 font-medium">+1 (555) 123-4567</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter mb-1">Inquiries</p>
                                    <span className="text-zinc-300 font-medium">solutions@cyberforenx.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-500 text-[12px] font-medium tracking-wide">
                        &copy; 2026 CYBERFORENX SYSTEMS. ARCHITECTING THE FUTURE.
                    </p>
                    <div className="flex gap-8 text-[12px] font-bold text-zinc-500 uppercase tracking-tighter">
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Framework</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Engagement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
