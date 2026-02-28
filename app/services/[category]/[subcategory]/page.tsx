import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity } from "lucide-react";
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
            <section className="relative pt-40 pb-32 border-b border-white/5 overflow-hidden section-bg-dark">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
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

                        <div className="max-w-4xl relative">
                            {/* Decorative line */}
                            <div className="absolute -left-8 top-2 bottom-2 w-1 bg-gradient-to-b from-primary to-transparent rounded-full hidden md:block"></div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                                <span className="text-gradient italic text-glow">{detailData.title}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium mb-12 italic">
                                {detailData.heroDescription}
                            </p>

                            <div className="flex flex-wrap gap-6 items-center">
                                <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                                    Consult an Expert
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.4em] px-4">
                                    Enterprise Grade Solutions
                                </span>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Features Grid (Left Column - 7/12) */}
                        <div className="lg:col-span-7">
                            <MotionDiv
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center gap-4 mb-12"
                            >
                                <div className="w-12 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em]">Core Capabilities</h2>
                            </MotionDiv>

                            <div className="grid gap-6 relative">
                                {/* Connecting line for UI flair */}
                                <div className="absolute left-[39px] top-10 bottom-10 w-px bg-white/5 hidden md:block"></div>

                                {detailData.features.map((feature, idx) => (
                                    <MotionDiv
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="group relative glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start overflow-hidden hover:bg-white/10 hover:-translate-y-1"
                                    >
                                        {/* Hover Gradient Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl shrink-0 z-10">
                                            {iconMap[feature.icon] || <CheckCircle2 className="h-8 w-8 text-primary group-hover:text-background transition-colors" />}
                                        </div>
                                        <div className="relative z-10 pt-1">
                                            <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{feature.desc}</p>
                                        </div>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>

                        {/* Benefits List (Right Column - 5/12) */}
                        <div className="lg:col-span-5">
                            <MotionDiv
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="sticky top-32"
                            >
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-1.5 bg-secondary rounded-full shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
                                    <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.4em]">Business Outcomes</h2>
                                </div>

                                <div className="glass-card p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col justify-center section-bg-gradient relative overflow-hidden shadow-2xl hover:border-secondary/30 transition-all">
                                    <div className="absolute inset-0 bg-dots opacity-20"></div>

                                    <h3 className="text-3xl font-extrabold text-white mb-10 relative z-10 leading-tight uppercase tracking-tighter italic text-glow">
                                        Why Choose <span className="text-gradient">Us?</span>
                                    </h3>

                                    <ul className="space-y-8 relative z-10">
                                        {detailData.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-5 text-base font-medium text-zinc-300 group/item">
                                                <div className="mt-1 p-1.5 rounded-full bg-secondary/10 text-secondary group-hover/item:bg-secondary group-hover/item:text-background transition-colors border border-secondary/20 group-hover/item:border-secondary">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="leading-relaxed group-hover/item:text-white transition-colors">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </MotionDiv>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
