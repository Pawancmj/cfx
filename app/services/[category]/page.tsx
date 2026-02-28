import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity } from "lucide-react";
import { servicesData } from "@/app/data/servicesData";

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Search: <Search className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Lock: <Lock className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />,
};

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export default async function ServiceCategoryPage({ params }: PageProps) {
    const resolvedParams = await params;
    const categoryData = servicesData[resolvedParams.category];

    if (!categoryData) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Under Construction</h1>
                <p className="text-zinc-400 max-w-lg mb-8">We are actively building the detailed Hub page for this service. Please check back later or contact us directly.</p>
                <Link href="/services" className="btn-primary">View All Services</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[150px] mix-blend-screen pointer-events-none"></div>
                    <h1 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4 relative z-10">
                        Service Hub
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 relative z-10">
                        {categoryData.title}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto relative z-10">
                        {categoryData.overview}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-10 relative z-10">
                        <Link href="/contact" className="btn-primary">
                            Consult an Expert
                        </Link>
                        <Link href={`/services`} className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
                            View All Services
                        </Link>
                    </div>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {categoryData.subcategories.map((sub, idx) => {
                        return (
                            <Link
                                key={sub.slug}
                                href={`/services/${categoryData.slug}/${sub.slug}`}
                                className={`glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden flex flex-col h-full`}
                            >
                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none"></div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {sub.title}
                                </h3>
                                <p className="text-sm text-zinc-400 mb-8 flex-grow">
                                    {sub.heroDescription}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest mt-auto">
                                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Why Choose Us */}
                {categoryData.whyChooseUs && (
                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">The CyberForenX Advantage</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {categoryData.whyChooseUs.map((item, idx) => (
                                <div key={idx} className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
                                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 relative z-10">
                                        {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6" />}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h4>
                                    <p className="text-zinc-400 relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Our Process */}
                {categoryData.process && (
                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Our Process</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">How We Deliver Excellence</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"></div>

                            {categoryData.process.map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-full glass-card border flex flex-col items-center justify-center mb-6 border-white/10 group-hover:border-primary/50 transition-colors bg-background relative">
                                        <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/20 transition-colors blur-md opacity-0 group-hover:opacity-100"></div>
                                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-1 relative z-10">STEP</span>
                                        <span className="text-2xl font-bold text-white relative z-10">{step.step}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-zinc-400 px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                {categoryData.technologies && (
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Core Technologies</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {categoryData.technologies.map((tech, idx) => (
                                <div key={idx} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium hover:border-primary/50 hover:text-white transition-all duration-300">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Enterprise Standards & Metrics */}
                {categoryData.metrics && (
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Enterprise Infrastructure Standards</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
                            {categoryData.metrics.map((metric, idx) => (
                                <div key={idx} className="glass-card p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
                                    <div className="text-3xl md:text-5xl font-black text-primary mb-2 relative z-10">{metric.value}</div>
                                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest relative z-10">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Certifications & Compliance */}
                {categoryData.certifications && (
                    <div className="mt-20 border-t border-white/5 pt-20">
                        <div className="text-center mb-10">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">Certifications & Compliance</h2>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {categoryData.certifications.map((cert, idx) => (
                                <div key={idx} className="text-lg md:text-xl font-black text-white tracking-wider flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Global CTA */}
                <div className="mt-32 mb-16 relative rounded-[3rem] overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-screen pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                    <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000"></div>
                    <div className="relative z-10 p-12 md:p-20 text-center glass-card border border-white/10 section-bg-dark backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to transform your operations?</h2>
                        <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10">Let&apos;s discuss how our specialized {categoryData.title} teams can accelerate your business objectives.</p>
                        <Link href="/contact" className="btn-primary inline-flex scale-110 hover:scale-[1.15] transition-transform">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
