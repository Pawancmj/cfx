import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity } from "lucide-react";
import { servicesData } from "@/app/data/servicesData";
import { MotionDiv } from "@/app/components/Motion";

interface PageProps {
    params: Promise<{
        category: string;
        subcategory: string;
    }>;
}

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

export default async function ServiceDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const categoryData = servicesData[resolvedParams.category];
    const detailData = categoryData?.subcategories.find(s => s.slug === resolvedParams.subcategory);

    if (!categoryData || !detailData) {
        return (
            <main className="min-h-screen section-bg-dark pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-tighter italic text-glow">Under Construction</h1>
                <p className="text-zinc-400 max-w-lg mb-8 font-medium italic">We are actively building the deep-dive page for {resolvedParams.subcategory}. Please check back later or contact us directly.</p>
                <Link href={`/${categoryData ? `services/${categoryData.slug}` : 'services'}`} className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group">Back to Services</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen relative overflow-hidden text-zinc-100 section-bg-dark">
            {/* Global Ambient Glows */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
            <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center border-b border-white/5 overflow-hidden section-bg-dark pt-24">
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link
                            href={`/services/${categoryData.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 hover:text-primary transition-colors mb-10 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return to {categoryData.title}
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 relative">
                                {/* Decorative line */}
                                <div className="absolute -left-8 top-2 bottom-2 w-1 bg-gradient-to-b from-primary to-transparent rounded-full hidden md:block"></div>

                                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                                    <span className="text-gradient italic text-glow">{detailData.heroTitle || detailData.title}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium mb-12 italic">
                                    {detailData.heroDescription}
                                </p>

                                <div className="flex flex-wrap gap-6 items-center">
                                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                                        {detailData.slug === 'custom-web-application-development' ? 'Get Quote' : 'Consult an Expert'}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.4em] px-4">
                                        Enterprise Grade Solutions
                                    </span>
                                </div>
                            </div>
                            {detailData.heroImage && (
                                <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none">
                                    <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl flex items-center justify-center p-2 bg-zinc-900/50 aspect-video lg:aspect-[4/3]">
                                        <div className="w-full h-full relative rounded-2xl overflow-hidden bg-zinc-950">
                                            <Image 
                                                src={detailData.heroImage} 
                                                alt={detailData.title}
                                                fill
                                                className="object-cover opacity-80 mix-blend-lighten"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Details Section */}
            {detailData.details && (
                <section className="py-24 md:py-32 relative z-10 border-b border-white/5">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl hover:border-primary/30 transition-all duration-500 group"
                        >
                            {/* Animated Background Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen"></div>
                            <div className="absolute inset-0 bg-dots opacity-30"></div>

                            {/* Glowing Top & Bottom Edges */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70"></div>

                            <p className="text-2xl md:text-4xl text-white leading-relaxed font-semibold relative z-10 tracking-tight italic">
                                {detailData.details}
                            </p>
                        </MotionDiv>
                    </div>
                </section>
            )}

            {/* Features */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Expertise</h2>
                        <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">Core Capabilities</h3>
                        <p className="text-zinc-400 text-lg font-medium tracking-wide leading-relaxed">Specialized capabilities tailored to deliver exceptional results for your enterprise.</p>
                    </MotionDiv>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {detailData.features.map((feature, idx) => (
                            <MotionDiv
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col gap-6 items-start overflow-hidden hover:bg-white/10 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl shrink-0 z-10">
                                    {iconMap[feature.icon] || <Code className="h-8 w-8 text-primary group-hover:text-background transition-colors" />}
                                </div>
                                <div className="relative z-10 pt-1">
                                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{feature.desc}</p>
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {detailData.process && (
                <section className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-zinc-950/50">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="mb-24">
                            <MotionDiv
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center mb-20 max-w-3xl mx-auto"
                            >
                                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Process</h2>
                                <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">How We Deliver</h3>
                                <p className="text-zinc-400 text-lg font-medium leading-relaxed tracking-wide">A systematic approach to delivering robust solutions with security built-in from day one.</p>
                            </MotionDiv>

                            <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/5">
                                {detailData.process.map((step, index) => {
                                    // Extract just the number from the step string, defaulting to index + 1 if no number
                                    const stepNum = step.step.replace(/\D/g, '') || `0${index + 1}`;
                                    const formattedNum = stepNum.length === 1 ? `0${stepNum}` : stepNum;

                                    return (
                                        <div
                                            key={index}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                        >
                                            {/* Center Node */}
                                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-zinc-950 text-primary font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 relative group-hover:scale-110 group-hover:border-primary/40 transition-all">
                                                {formattedNum}
                                            </div>

                                            {/* Content Card */}
                                            <MotionDiv
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40, y: 20 }}
                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] glass-card hover:bg-white/10 transition-all duration-500 border-white/5 group-hover:border-primary/20 flex flex-col items-start"
                                            >
                                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 uppercase">
                                                    {step.title}
                                                </h3>
                                                <p className="text-zinc-400 leading-relaxed font-medium italic text-base group-hover:text-zinc-300 transition-colors">
                                                    {step.desc}
                                                </p>
                                            </MotionDiv>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Portfolio Section */}
            {detailData.portfolio && (
                <section className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-zinc-950/50">
                    <div className="container mx-auto px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center mb-20 max-w-3xl mx-auto"
                        >
                            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Case Studies</h2>
                            <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">Proven Results</h3>
                            <p className="text-zinc-400 text-lg font-medium tracking-wide leading-relaxed">Real outcomes delivered with our cybersecurity DNA built into every solution.</p>
                        </MotionDiv>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {detailData.portfolio.map((item, idx) => (
                                <MotionDiv
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-10 rounded-3xl bg-zinc-950 border border-white/10 hover:border-primary/40 transition-all duration-500 group overflow-hidden relative shadow-2xl flex flex-col justify-between min-h-[220px]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <h3 className="text-xl font-bold text-white mb-10 relative z-10 tracking-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-6 relative z-10 mt-auto">
                                        {item.metrics.map((metric, mIdx) => (
                                            <div key={mIdx}>
                                                <div className="text-3xl font-black text-primary text-glow drop-shadow-[0_0_15px_rgba(0,242,255,0.6)] mb-2 tracking-tighter">
                                                    {metric.value}
                                                </div>
                                                <div className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-24 md:py-32 relative z-10 border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-16 sm:p-24 rounded-[3.5rem] section-bg-gradient text-center relative overflow-hidden group shadow-2xl border border-white/10"
                    >
                        <div className="absolute inset-0 bg-dots opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50"></div>

                        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-10 relative z-10 leading-tight">
                            Ready to secure your <br />
                            <span className="text-gradient italic text-glow">digital future?</span>
                        </h2>
                        <p className="text-xl text-zinc-300 mb-16 max-w-2xl mx-auto relative z-10 font-medium tracking-wide leading-relaxed">
                            Let&apos;s discuss how our specialized {detailData.title} teams can accelerate your enterprise objectives without compromising security.
                        </p>
                        <Link href="/contact" className="bg-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-zinc-950 hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)] rounded-xl relative z-10 inline-flex items-center gap-4">
                            {detailData.slug === 'custom-web-application-development' ? 'Get Quote' : 'Schedule Consultation'} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </MotionDiv>
                </div>
            </section>
        </main>
    );
}
