import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Database, Cpu, Search, Briefcase } from "lucide-react";
import { caseStudiesCategories } from "@/app/constants/navigation";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = await params;

    // Reconstruct the intended URL from slug array. Default to empty array if undefined.
    const safeSlug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug : (resolvedParams.slug ? [resolvedParams.slug as unknown as string] : []);
    const fullPath = `/case-studies/${safeSlug.join("/")}`;

    // Find the current case study details
    let currentStudy = null;
    let currentCategory = null;

    for (const category of caseStudiesCategories) {
        const found = category.links.find(link => link.href === fullPath);
        if (found) {
            currentStudy = found;
            currentCategory = category;
            break;
        }
    }

    const title = currentStudy?.name || "Strategic Industry Engagement";
    const categoryName = currentCategory?.title || "Case Studies";
    const titleLower = title.toLowerCase();

    // Dynamic graphic selection based on keywords in title
    let graphicSrc = "/hero_analytics.png";
    let themeColorClass = "text-primary";
    let bgGradientClass = "bg-primary/5 border-primary/20";
    let blurColorClass = "bg-primary/20";
    let Icon = Briefcase;
    let badgeText = "Business Strategy";

    if (titleLower.includes("cyber") || titleLower.includes("security") || titleLower.includes("risk")) {
        graphicSrc = "/hero_cybersecurity.png";
        themeColorClass = "text-emerald-400";
        bgGradientClass = "bg-emerald-500/5 border-emerald-500/20";
        blurColorClass = "bg-emerald-500/10";
        Icon = ShieldCheck;
        badgeText = "Security Implementation";
    } else if (titleLower.includes("data") || titleLower.includes("financial") || titleLower.includes("tax")) {
        graphicSrc = "/hero_analytics.png";
        themeColorClass = "text-blue-400";
        bgGradientClass = "bg-blue-500/5 border-blue-500/20";
        blurColorClass = "bg-blue-500/10";
        Icon = Database;
        badgeText = "Data Intelligence";
    } else if (titleLower.includes("forensic") || titleLower.includes("government") || titleLower.includes("evidence")) {
        graphicSrc = "/hero_forensics.png";
        themeColorClass = "text-rose-400";
        bgGradientClass = "bg-rose-500/5 border-rose-500/20";
        blurColorClass = "bg-rose-500/10";
        Icon = Search;
        badgeText = "Investigation & Compliance";
    } else if (titleLower.includes("platform") || titleLower.includes("web") || titleLower.includes("e-commerce") || titleLower.includes("digital experience")) {
        graphicSrc = "/hero_web_app.png";
        themeColorClass = "text-purple-400";
        bgGradientClass = "bg-purple-500/5 border-purple-500/20";
        blurColorClass = "bg-purple-500/10";
        Icon = Cpu;
        badgeText = "Digital Transformation";
    } else if (titleLower.includes("bpo") || titleLower.includes("process") || titleLower.includes("support")) {
        graphicSrc = "/hero_bpo.png";
        themeColorClass = "text-cyan-400";
        bgGradientClass = "bg-cyan-500/5 border-cyan-500/20";
        blurColorClass = "bg-cyan-500/10";
        Icon = Briefcase;
        badgeText = "Operational Excellence";
    }

    // Pseudo-random layout direction based on string length remainder
    const isReversedLayout = title.length % 2 === 0;

    return (
        <main className="min-h-screen bg-[#020508] relative overflow-hidden pt-32 pb-24">
            {/* Global dynamic blur element */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${blurColorClass} blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50`}></div>
            <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${blurColorClass} blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-30`}></div>

            {/* Header section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-20">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-zinc-300 mb-8">
                        <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                        <ChevronRight className="w-3 h-3 text-zinc-500" />
                        <span className={themeColorClass}>{categoryName}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-glow tracking-tight mb-8 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-10 leading-relaxed font-medium">
                        Discover how Cyberforenx implements leading-edge strategies to solve complex challenges, ensuring operational integrity and digital resilience in {title.toLowerCase()}.
                    </p>
                </div>
            </div>

            {/* Content & Graphics Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col ${isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center mb-16`}>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className={`absolute -inset-4 ${bgGradientClass} blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                        <div className="relative glass-card rounded-2xl p-6 border border-white/10 overflow-hidden bg-black/40">
                            <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden border border-white/5">
                                <Image
                                    src={graphicSrc}
                                    alt={title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020508]/80 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-black/50 border border-white/10 backdrop-blur-md ${themeColorClass}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Focus Area</div>
                                            <div className="text-sm font-bold text-white tracking-wide">{badgeText}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Details Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-8 h-[2px] bg-primary"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Project Overview</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">Architecting the Exact Solution for Operational Bottlenecks.</h2>
                        <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                            Our implementation team worked rigorously to dissect the specific requirements of
                            this engagement. By establishing a deep understanding of operational bottlenecks,
                            compliance requirements, and scalability needs, we architected a solution perfectly
                            tailored to long-term success.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "Enhanced Operational Security",
                                "Seamless Regulatory Compliance",
                                "Scalable Infrastructure Design",
                                "24/7 Monitored Workflows"
                            ].map((item, i) => (
                                <div key={i} className={`flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:${bgGradientClass} transition-colors group/feat`}>
                                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 text-zinc-500 group-hover/feat:${themeColorClass} transition-colors`} />
                                    <span className="text-sm text-zinc-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className={`inline-flex items-center gap-3 group w-fit`}>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bgGradientClass} ${themeColorClass}  border`}>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">Discuss Your Requirements</span>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
