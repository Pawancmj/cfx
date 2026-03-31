import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, ChevronRight, ChevronDown, FileText } from "lucide-react";
import { caseStudiesList } from "@/app/data/caseStudiesData";
import { caseStudiesCategories } from "@/app/constants/navigation";
import CTA from "@/app/components/CTA";
import ShareButton from "@/app/components/ShareButton";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

function getReadTime(study: typeof caseStudiesList[0]): string {
    let totalWords = 0;
    for (const section of study.contentSections) {
        for (const para of section.paragraphs) {
            totalWords += para.split(/\s+/).length;
        }
    }
    if (study.faqs) {
        for (const faq of study.faqs) {
            totalWords += faq.question.split(/\s+/).length;
            totalWords += faq.answer.split(/\s+/).length;
        }
    }
    const minutes = Math.max(1, Math.ceil(totalWords / 200));
    return `${minutes} min read`;
}

export default async function CaseStudyArticlePage({ params }: PageProps) {
    const resolvedParams = await params;
    const safeSlug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug : (resolvedParams.slug ? [resolvedParams.slug as unknown as string] : []);
    
    const categorySlug = safeSlug[0];
    const subcategorySlug = safeSlug[1];

    const detailData = caseStudiesList.find((c) => c.slug[0] === categorySlug && c.slug[1] === subcategorySlug);
    
    const categoryNavData = caseStudiesCategories.find(c => c.title.toLowerCase() === categorySlug || c.title === "Latest");
    const categoryTitle = categoryNavData?.title || "Latest";
    
    const relatedStudies = caseStudiesList.filter((c) => c.title !== detailData?.title).slice(0, 3);
    const readTime = detailData ? getReadTime(detailData) : "";

    if (!detailData) {
        return (
            <main className="min-h-screen section-bg-dark pt-32 pb-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tighter text-glow">Under Construction</h1>
                <p className="text-zinc-400 max-w-lg mb-8 font-medium">We are actively building the deep-dive article for {subcategorySlug || categorySlug}.</p>
                <Link href="/case-studies" className="btn-primary inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm">Back to Hub</Link>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col section-bg-dark text-foreground font-sans selection:bg-primary/20 selection:text-primary relative">
            {/* Ambient background effects */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[200px] rounded-full pointer-events-none opacity-30"></div>

            {/* Header Area */}
            <div className="pt-28 sm:pt-36 pb-10 relative z-10 border-b border-white/5">
                <div className="container mx-auto px-6 lg:px-8">
                    
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-6 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-zinc-600" />
                        <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                        <ChevronRight className="w-3 h-3 text-zinc-600" />
                        <span className="text-primary">{categoryTitle}</span>
                    </div>

                    <Link
                        href="/case-studies"
                        className="flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Library
                    </Link>

                    {/* Badge */}
                    <div className="flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <FileText className="w-4 h-4" /> Case Study
                    </div>

                    {/* Title & Meta */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15] text-glow font-display">
                            {detailData.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-zinc-400">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary/60" />
                                    <span>{detailData.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary/60" />
                                    <span>{detailData.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                    <span>{readTime}</span>
                                </div>
                            </div>
                            <ShareButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Container */}
            <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
                
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Main Content Area */}
                    <div className="lg:w-[68%] order-2 lg:order-1">
                        {/* Hero Image - Inside main content column */}
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#080c10]">
                            <Image
                                src={detailData.heroImage}
                                alt={detailData.title}
                                fill
                                className="object-cover opacity-90"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent z-10 pointer-events-none"></div>
                        </div>

                        <article>
                            
                            {detailData.contentSections.map((section, idx) => (
                                <section key={idx} id={section.id} className="scroll-mt-36 mb-14">
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight font-display border-b border-white/10 pb-4">
                                        {section.heading}
                                    </h2>
                                    {section.paragraphs.map((para, pIdx) => (
                                        <p key={pIdx} className="text-zinc-400 leading-relaxed mb-4 text-base sm:text-lg font-medium">
                                            {para}
                                        </p>
                                    ))}
                                </section>
                            ))}

                        </article>

                        {/* FAQs Section */}
                        {detailData.faqs && detailData.faqs.length > 0 && (
                            <div id="faqs" className="mt-16 pt-10 border-t border-white/10 scroll-mt-36">
                                <h3 className="text-2xl font-extrabold text-white mb-8 font-display tracking-tight">Frequently Asked Questions</h3>
                                
                                <div className="space-y-4">
                                    {detailData.faqs.map((faq, idx) => (
                                        <details key={idx} className="group glass-card rounded-xl [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between p-5 sm:p-6 font-semibold text-white text-sm sm:text-base">
                                                <span>{faq.question}</span>
                                                <ChevronDown className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                                            </summary>
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-zinc-400 leading-relaxed text-sm sm:text-base font-medium">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-[32%] contents lg:block lg:order-2">
                        <div className="sticky top-32 space-y-8 contents lg:block">
                            
                            {/* Table of Contents */}
                            <div className="glass-card rounded-2xl p-6 order-1 lg:order-none">
                                <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-[0.2em] border-b border-white/10 pb-3">Table of Contents</h4>
                                <nav className="flex flex-col gap-3">
                                    {detailData.contentSections.map((section, idx) => (
                                        <a 
                                            key={idx} 
                                            href={`#${section.id}`}
                                            className="text-zinc-400 hover:text-primary text-sm font-medium transition-colors flex items-start gap-3 group"
                                        >
                                            <span className="text-zinc-600 group-hover:text-primary mt-px text-xs font-bold">{String(idx + 1).padStart(2, '0')}</span>
                                            <span>{section.heading}</span>
                                        </a>
                                    ))}
                                    {detailData.faqs && detailData.faqs.length > 0 && (
                                        <a 
                                            href="#faqs"
                                            className="text-zinc-400 hover:text-primary text-sm font-medium transition-colors flex items-start gap-3 group mt-1"
                                        >
                                            <span className="text-zinc-600 group-hover:text-primary mt-px text-xs font-bold">{String(detailData.contentSections.length + 1).padStart(2, '0')}</span>
                                            <span>FAQs</span>
                                        </a>
                                    )}
                                </nav>
                            </div>

                            {/* Related Case Studies */}
                            <div className="glass-card rounded-2xl p-6 order-3 lg:order-none">
                                <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-[0.2em] border-b border-white/10 pb-3">Other Case Studies</h4>
                                <div className="flex flex-col gap-5">
                                    {relatedStudies.map((study, idx) => (
                                        <Link 
                                            key={idx} 
                                            href={`/case-studies/${study.slug[0]}/${study.slug[1]}`} 
                                            className="group flex gap-4 items-start"
                                        >
                                            <div className="w-14 h-14 rounded-lg bg-white/5 overflow-hidden shrink-0 relative border border-white/10">
                                                <Image 
                                                    src={study.heroImage} 
                                                    alt={study.title} 
                                                    fill 
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors line-clamp-2 leading-tight mb-1.5">
                                                    {study.title}
                                                </h5>
                                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{study.date}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-5 pt-4 border-t border-white/10">
                                    <Link href="/case-studies" className="text-xs font-bold text-primary hover:text-white transition-colors inline-flex items-center gap-2 uppercase tracking-widest">
                                        View all <ChevronRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <CTA />
        </main>
    );
}
