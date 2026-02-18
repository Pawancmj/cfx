import Link from "next/link";
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

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
                            Securing your digital future with cutting-edge web & app development, digital forensics, and BPO solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/services" },
                                { label: "Case Studies & Contact", href: "/case-studies" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Services</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Web & App Development",
                                "Digital Forensics",
                                "BPO/BPS",
                                "Cybersecurity"
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#"
                                        className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="flex flex-col gap-6 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span className="text-zinc-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span className="text-zinc-400">info@cyberforenx.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                                <span className="text-zinc-400 leading-relaxed">
                                    123 Security Blvd, Suite 100, Tech City, TX 78701
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        &copy; 2026 Cyberforenx. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-zinc-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
