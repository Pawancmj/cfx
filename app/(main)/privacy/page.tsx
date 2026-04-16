import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="relative min-h-screen pt-32 pb-20 section-bg-dark text-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
            <div className="absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]"></div>
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Content Column */}
                    <div className="lg:col-span-7">
                        <div className="glass-card p-8 sm:p-12 rounded-[3rem] border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                    <Shield className="w-4 h-4" /> Legal Framework
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-white mb-8 tracking-tight leading-[1.15]">
                                    Privacy <br /> <span className="text-gradient inline-block text-[calc(1em-3px)]">Policy</span>
                                </h1>
                                
                                <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-medium leading-relaxed">
                                    <div className="flex items-center gap-2 text-sm text-primary/60 font-bold uppercase tracking-widest mb-4">
                                        <CheckCircle2 className="w-4 h-4" /> Last updated: March 25, 2026
                                    </div>
                                    
                                    <p className="text-lg text-zinc-300">
                                        At CyberForenX & Associates, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or use our services.
                                    </p>

                                    <div className="space-y-6">
                                        <section>
                                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
                                                <span className="text-primary/40">01.</span> Information We Collect
                                            </h2>
                                            <p>We collect information that you provide directly to us, such as when you submit a contact form, apply for a job, or subscribe to our newsletter. This includes identifiers like name and email address.</p>
                                        </section>

                                        <section>
                                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
                                                <span className="text-primary/40">02.</span> How We Use Data
                                            </h2>
                                            <p>We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. Your data is never sold to third parties.</p>
                                        </section>

                                        <section>
                                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 flex items-center gap-3">
                                                <span className="text-primary/40">03.</span> Security Measures
                                            </h2>
                                            <p>We implement military-grade encryption and industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 group">
                        <div className="relative h-[400px] sm:h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/illustrations/privacy-legal.webp"
                                alt="Privacy and Security Illustration"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                        
                        <div className="mt-8 p-8 glass-card rounded-3xl border-primary/20 text-center">
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Secure Connection</h4>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-tight">SSL Encrypted & GDPR Compliant Infrastructure</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
