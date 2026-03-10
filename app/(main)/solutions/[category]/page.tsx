import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity, ArrowUpRight } from "lucide-react";
import { solutionsData } from "@/app/data/solutionsData";
import { MotionDiv } from "@/app/components/Motion";
import TestimonialStack from "@/app/components/TestimonialStack";
import TechCategories from "@/app/components/TechCategories";

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

export default async function SolutionCategoryPage({ params }: PageProps) {
    const resolvedParams = await params;
    const categoryData = solutionsData[resolvedParams.category];

    if (!categoryData) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Under Construction</h1>
                <p className="text-zinc-400 max-w-lg mb-8">We are actively building the detailed Hub page for this solution. Please check back later or contact us directly.</p>
                <Link href="/solutions" className="btn-primary">View All Solutions</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen relative overflow-hidden text-zinc-100 section-bg-dark pt-28 sm:pt-40 pb-32">
            {/* Global Ambient Glows - Static for Performance */}
            <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

            <div
                className="absolute right-[10%] top-[-10%] -z-10 h-[800px] w-[800px] bg-primary/20 blur-[160px] rounded-full opacity-40"
            />
            <div
                className="absolute left-[5%] top-[20%] -z-10 h-[600px] w-[600px] bg-secondary/20 blur-[140px] rounded-full opacity-30"
            />
            <div
                className="absolute left-[40%] bottom-[-20%] -z-10 h-[700px] w-[700px] bg-purple-500/10 blur-[150px] rounded-full opacity-20"
            />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">

                {/* Full Height Hero Section */}
                <div className="w-full min-h-[calc(100vh-8rem)] flex items-center mb-0 pb-20 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                        {/* Left Side: Text Content */}
                        <MotionDiv
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-left lg:col-span-7"
                        >
                            <MotionDiv
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Enterprise Solution Hub</span>
                            </MotionDiv>

                            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl mb-8 leading-[1.2] lg:leading-[1.1]">
                                {categoryData.title.split(" ").slice(0, -1).join(" ")}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary italic drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">{categoryData.title.split(" ").slice(-1)}</span>
                            </h1>
                            <p className="text-xl leading-relaxed text-zinc-400 max-w-2xl font-medium mb-10">
                                {categoryData.overview}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 relative z-10">
                                <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                                    Architect Your Solution <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </MotionDiv>

                        {/* Right Side: 3D Visual */}
                        {categoryData.heroImage ? (
                            <MotionDiv
                                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="relative hidden lg:flex items-center justify-end lg:col-span-5"
                            >
                                {/* Performance-optimized image container */}
                                <div
                                    className="relative w-full aspect-square max-w-[550px] ml-auto animate-float will-change-transform"
                                    style={{
                                        WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
                                        maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)'
                                    }}
                                >
                                    <Image
                                        src={categoryData.heroImage}
                                        alt={`${categoryData.title} concept visual`}
                                        fill
                                        className="object-contain drop-shadow-[0_0_50px_rgba(0,242,255,0.2)]"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 550px"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 rounded-full"></div>
                                </div>
                            </MotionDiv>
                        ) : (
                            <div className="hidden lg:block relative w-full aspect-square max-w-[550px] justify-end">
                                {/* Placeholder */}
                            </div>
                        )}
                    </div>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr] relative mb-32 z-20 pt-10">
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
                                    href={`/solutions/${categoryData.slug}/${sub.slug}`}
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
                                        Explore Solution <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </Link>
                            </MotionDiv>
                        );
                    })}
                </div>



                {/* Why Choose Us (The Advantage) */}
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
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Domain Authority</h2>
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
                    <div className="mb-32 relative">
                        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
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

                        <TechCategories technologies={categoryData.technologies} />
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


                {/* Testimonial Section */}
                {categoryData.testimonials && (
                    <TestimonialStack testimonials={categoryData.testimonials} />
                )}

                {/* Global CTA */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-16 sm:p-20 rounded-[3rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10 mt-32"
                >
                    <div className="absolute inset-0 bg-dots opacity-20"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-secondary/10"></div>

                    <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 uppercase tracking-tighter italic relative z-10 text-glow">Find Your Solution</h2>
                    <p className="text-zinc-300 mb-12 max-w-2xl mx-auto font-medium uppercase tracking-[0.2em] text-xs relative z-10 leading-relaxed">
                        Connect with our domain experts to architect a scalable, zero-trust solution tailored directly to your ecosystem&apos;s needs.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 relative z-10">
                        Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </MotionDiv>

            </div>
        </main >
    );
}
