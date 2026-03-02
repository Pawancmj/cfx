import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { caseStudiesCategories } from "@/app/constants/navigation";

export default function CaseStudyPage({ params }: { params: { slug: string[] } }) {
    // Reconstruct the intended URL from slug array
    const fullPath = `/case-studies/${params.slug.join("/")}`;

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

    // Default content if exact match not found
    const title = currentStudy?.name || "Targeted Case Study";
    const categoryName = currentCategory?.title || "Case Studies";

    return (
        <main className="min-h-screen bg-[#020508] relative overflow-hidden pt-32 pb-24">
            {/* Header section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-20 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary mb-6">
                    <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span>{categoryName}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-glow tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
                    {title}
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Discover how Cyberforenx implements leading-edge strategies to solve complex challenges in {title.toLowerCase()}.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                    Discuss Your Requirements
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Content mockup structure */}
            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
                <div className="glass-card p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        Our implementation team worked rigorously to dissect the specific requirements of
                        this engagement. By establishing a deep understanding of operational bottlenecks,
                        compliance requirements, and scalability needs, we architected a solution perfectly
                        tailored to long-term success.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {["Enhanced Operational Security", "Seamless Regulatory Compliance", "Scalable Infrastructure Design", "24/7 Monitored Workflows"].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-zinc-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden mt-12">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full"></div>
                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">Ready to transform your operations?</h3>
                        <p className="text-zinc-400 text-sm mb-6 relative z-10 max-w-xl">
                            Our team of experts is ready to analyze your architecture and implement the exact solutions needed for your business tier.
                        </p>
                        <Link href="/contact" className="text-primary font-bold text-sm tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 relative z-10 w-fit">
                            Schedule a Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
