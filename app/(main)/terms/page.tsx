import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileCheck, ShieldCheck } from "lucide-react";

export default function TermsOfService() {
    return (
        <main className="relative min-h-screen pt-32 pb-20 section-bg-dark text-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
            <div className="absolute right-1/4 bottom-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[150px]"></div>

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
                            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-8">
                                    <FileCheck className="w-4 h-4" /> Terms & Conditions
                                </div>
                                <h1 className="text-hero text-white mb-8">
                                    Terms of <br /> <span className="text-gradient-secondary inline-block text-[calc(1em-3px)]">Service</span>
                                </h1>

                                <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-medium leading-relaxed">
                                    <div className="flex items-center gap-2 text-sm text-secondary/60 font-bold uppercase tracking-widest mb-4">
                                        <ShieldCheck className="w-4 h-4" /> Last updated: March 25, 2026
                                    </div>

                                    <p className="text-lg text-zinc-300">
                                        By using CyberForenX & Associates&apos;s website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                                    </p>

                                    <div className="space-y-6">
                                        <section>
                                            <h2 className="text-heading-md text-white mb-4 flex items-center gap-3">
                                                <span className="text-secondary/40">01.</span> Use of Services
                                            </h2>
                                            <p>You agree to use our services only for lawful purposes and in accordance with these terms. Any unauthorized use of our systems or data is strictly prohibited.</p>
                                        </section>

                                        <section>
                                            <h2 className="text-heading-md text-white mb-4 flex items-center gap-3">
                                                <span className="text-secondary/40">02.</span> Intellectual Property
                                            </h2>
                                            <p>All content on this website, including text, graphics, logos, and software, is the property of CyberForenX & Associates and protected by international intellectual property laws.</p>
                                        </section>

                                        <section>
                                            <h2 className="text-heading-md text-white mb-4 flex items-center gap-3">
                                                <span className="text-secondary/40">03.</span> Liability Limitation
                                            </h2>
                                            <p>CyberForenX & Associates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our digital assets and services.</p>
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
                                alt="Terms and Service Illustration"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
                        </div>

                        <div className="mt-8 p-8 glass-card rounded-3xl border-secondary/20 text-center text-secondary/80">
                            <h4 className="text-heading-sm text-white mb-2">Legal Compliance</h4>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-tight">Standard Professional Service Agreement</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
