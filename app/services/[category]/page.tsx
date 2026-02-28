import Link from "next/link";
import { ArrowRight, CheckCircle2, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/app/data/servicesData";
import { MotionDiv } from "@/app/components/Motion";

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
        <main className="min-h-screen relative overflow-hidden text-zinc-100 section-bg-dark pt-28 sm:pt-40 pb-32">
            {/* Global Ambient Glows */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] bg-primary/10 blur-[160px] rounded-full"></div>
            <div className="absolute left-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-24 relative">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <MotionDiv
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Enterprise Service Hub</span>
                        </MotionDiv>

                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-10 leading-[1.2] sm:leading-[1.1]">
                            {categoryData.title.split(" ").slice(0, -1).join(" ")} <br />
                            <span className="text-gradient italic text-glow">{categoryData.title.split(" ").slice(-1)}</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-zinc-400 max-w-4xl mx-auto font-medium mb-12">
                            {categoryData.overview}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
                            <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                                Consult an Expert <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </MotionDiv>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr] relative mb-32">
                    {categoryData.subcategories.map((sub, idx) => {
                        return (
                            <MotionDiv
                                key={sub.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="h-full"
                            >
                                <Link
                                    href={`/services/${categoryData.slug}/${sub.slug}`}
                                    className={`glass-card p-8 sm:p-10 hover:bg-white/10 hover:border-primary/40 group relative overflow-hidden flex flex-col h-full z-10`}
                                >
                                    <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl">
                                        <Code className="h-8 w-8 text-primary group-hover:text-background transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight relative z-10">
                                        {sub.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed font-medium italic relative z-10 group-hover:text-zinc-200 transition-colors">
                                        {sub.heroDescription}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-primary/60 group-hover:text-primary transition-colors mt-auto relative z-10">
                                        Explore Capability <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </Link>
                            </MotionDiv>
                        );
                    })}
                </div>

                {/* Why Choose Us */}
                {categoryData.whyChooseUs && (
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 sm:p-16 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden shadow-2xl border border-white/5 mb-32"
                    >
                        <div className="absolute inset-0 bg-dots opacity-20"></div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                        <div className="relative z-10">
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Why Choose Us</h2>
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-16 uppercase tracking-tighter italic text-glow">
                                The <span className="text-gradient">CyberForenX Advantage</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {categoryData.whyChooseUs?.map((item, idx) => (
                                    <div key={idx} className="glass-card p-10 hover:bg-white/10 transition-all duration-300 relative group border-white/5">
                                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl mx-auto mb-8">
                                            {iconMap[item.icon] || <CheckCircle2 className="h-8 w-8 text-primary group-hover:text-background transition-colors" />}
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-sm text-zinc-400 font-medium italic leading-relaxed group-hover:text-zinc-200 transition-colors">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionDiv>
                )}

                {/* Our Process */}
                {categoryData.process && (
                    <div className="mb-32">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <MotionDiv
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Execution Methodology</h2>
                                <h3 className="text-3xl font-extrabold text-white sm:text-6xl mb-6 leading-tight">
                                    Strategic <span className="text-gradient italic">Delivery Model</span>
                                </h3>
                            </MotionDiv>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {categoryData.process?.map((step, idx) => (
                                <MotionDiv
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className="relative group text-center p-8 sm:p-10 glass-card hover:bg-white/10 hover:border-primary/50"
                                >
                                    <div className="mb-10 relative inline-flex">
                                        <div className={`h-24 w-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500 relative z-10 shadow-2xl`}>
                                            <Activity className={`h-10 w-10 text-primary group-hover:text-background transition-colors`} />
                                        </div>
                                        <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-primary text-background flex items-center justify-center text-sm font-bold shadow-2xl z-20 group-hover:bg-white transition-colors">
                                            {step.step}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-5 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">{step.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm max-w-[240px] mx-auto group-hover:text-zinc-200 font-medium italic transition-colors">
                                        {step.desc}
                                    </p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                {categoryData.technologies && (
                    <div className="mb-32">
                        <div className="text-center md:flex md:items-center md:justify-between mb-12">
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 md:mb-0">Core Technologies</h2>
                            <div className="h-px bg-white/10 flex-grow md:ml-8"></div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {categoryData.technologies?.map((tech, idx) => (
                                <span key={idx} className="px-6 py-2 bg-white/5 text-xs sm:text-sm uppercase font-bold tracking-[0.2em] text-primary border border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Enterprise Standards & Metrics */}
                {categoryData.metrics && (
                    <div className="mb-32">
                        <MotionDiv
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10"
                        >
                            {categoryData.metrics?.map((metric, idx) => (
                                <div key={idx} className="text-center group p-6 sm:p-10 glass-card hover:bg-white/10 hover:border-primary/30">
                                    <div className="text-4xl font-extrabold text-white mb-2 tracking-tighter text-glow">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 group-hover:text-primary transition-colors">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </MotionDiv>
                    </div>
                )}

                {/* Certifications & Compliance - Skip for now to save space, or use standard inline styling */}

                {/* Global CTA */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-16 sm:p-20 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10"
                >
                    <div className="absolute inset-0 bg-dots opacity-20"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                    <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 uppercase tracking-tighter italic relative z-10 text-glow">Ready to Transform?</h2>
                    <p className="text-zinc-300 mb-12 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs relative z-10 leading-relaxed">
                        Let&apos;s discuss how our specialized {categoryData.title} teams can accelerate your enterprise objectives without compromising security.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 relative z-10">
                        Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </MotionDiv>

            </div>
        </main>
    );
}
