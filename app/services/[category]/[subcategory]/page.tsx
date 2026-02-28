import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code, Shield, Zap, Smartphone, Layout, Database, Search, FileText, ShieldCheck, Target, Lock, Activity } from "lucide-react";
import { servicesData } from "@/app/data/servicesData";

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
            <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Under Construction</h1>
                <p className="text-zinc-400 max-w-lg mb-8">We are actively building the deep-dive page for {resolvedParams.subcategory}. Please check back later or contact us directly.</p>
                <Link href={`/${categoryData ? `services/${categoryData.slug}` : 'services'}`} className="btn-primary">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
                {/* Abstract Backgrounds */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link
                        href={`/services/${categoryData.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to {categoryData.title}
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl">
                        {detailData.title}
                    </h1>
                    <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
                        {detailData.heroDescription}
                    </p>

                    <div className="mt-10">
                        <Link href="/contact" className="btn-primary inline-flex">
                            Consult an Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Features Grid */}
                        <div>
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">Key Capabilities</h2>
                            <div className="grid gap-6">
                                {detailData.features.map((feature, idx) => (
                                    <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="p-3 bg-white/5 rounded-xl text-primary shrink-0">
                                            {iconMap[feature.icon] || <CheckCircle2 className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-zinc-400 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div>
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">Why Choose Us</h2>
                            <div className="glass-card p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-center section-bg-dark relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
                                <ul className="space-y-6 relative z-10">
                                    {detailData.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-lg font-medium text-zinc-200">
                                            <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
