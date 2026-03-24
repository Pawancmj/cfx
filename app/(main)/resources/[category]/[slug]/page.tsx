import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, User } from 'lucide-react';
import CTA from '@/app/components/CTA';
import ShareButton from '@/app/components/ShareButton';

// Helper to format slugs into readable titles
function formatSlug(slug: string) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

type Props = {
    params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const title = formatSlug(resolvedParams.slug);

    return {
        title: `${title} | Cyberforenx Resources`,
        description: `Read more about ${title} and discover enterprise insights in our ${formatSlug(resolvedParams.category)} section.`,
    };
}

export default async function ResourceDynamicPage({ params }: Props) {
    const resolvedParams = await params;
    const { category, slug } = resolvedParams;
    const title = formatSlug(slug);
    const categoryTitle = formatSlug(category);
    
    const heroImage = slug.includes('ai') || slug.includes('automation')
        ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600'
        : slug.includes('cloud') || slug.includes('migration')
            ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600'
            : slug.includes('fintech') || slug.includes('upi') || slug.includes('payment')
                ? 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600'
                : slug.includes('cyber') || slug.includes('security') || slug.includes('trust')
                    ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600'
                    : slug.includes('data') || slug.includes('analytics')
                        ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600'
                        : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';

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
                        <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                        <ChevronRight className="w-3 h-3 text-zinc-600" />
                        <span className="text-primary">{categoryTitle}</span>
                    </div>

                    <Link
                        href="/resources"
                        className="flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Resources
                    </Link>

                    {/* Badge */}
                    <div className="flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <BookOpen className="w-4 h-4" /> {categoryTitle}
                    </div>

                    {/* Title & Meta */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15] text-glow font-display">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-zinc-400">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary/60" />
                                    <span>CyberForenX Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary/60" />
                                    <span>{category === 'news' ? '3 min read' : category === 'blogs' ? '8 min read' : '5 min read'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-primary/60" />
                                    <span>Enterprise {categoryTitle}</span>
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
                        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[400px] mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f14]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-[#05080a]/60 to-transparent z-10 pointer-events-none"></div>
                            <img
                                src={heroImage}
                                alt={`${title} banner`}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                            />
                        </div>

                        <article className="prose prose-invert prose-p:text-zinc-400 prose-p:leading-loose prose-p:text-base sm:prose-p:text-lg prose-p:font-medium prose-headings:text-white prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-white max-w-none">
                            
                            <p className="text-xl sm:text-2xl text-zinc-300 font-medium mb-12 border-l-4 border-primary pl-6 py-2 bg-white/5 rounded-r-xl">
                                This is a comprehensive overview of <strong className="text-white">{title}</strong>. Cyberforenx provides industry-leading solutions and deep insights to empower your enterprise ecosystem.
                            </p>

                            <h2 id="section-1" className="scroll-mt-36 text-2xl sm:text-3xl border-b border-white/10 pb-4 mb-6">Navigating the Modern {categoryTitle} Landscape</h2>
                            <p className="mb-10">
                                In today's rapidly evolving digital perimeter, organizations must maintain rigorous standards across all operational nodes. Understanding how to leverage specialized knowledge from our <i className="text-zinc-300">{categoryTitle}</i> archives is critical to sustaining a competitive edge and ensuring strict compliance.
                            </p>

                            {category === 'blogs' && (
                                <div id="section-2" className="scroll-mt-36 mt-12 mb-10 bg-[#0a0f14] p-8 sm:p-10 rounded-3xl border border-white/5 shadow-lg">
                                    <h3 className="text-2xl font-semibold mb-4 text-white mt-0">Strategic Insights</h3>
                                    <p className="text-zinc-400 mb-8">
                                        As digital transformation accelerates across India, businesses must stay ahead of the curve. Whether it's the <strong>UPI revolution</strong> or <strong>Zero Trust security</strong>, our deep-dive analysis provides the clarity needed for executive decision-making.
                                    </p>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                                            alt="Fintech and Digital Transformation"
                                            loading="lazy"
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 m-0"
                                        />
                                    </div>
                                </div>
                            )}

                            {category === 'articles' && (
                                <div id="section-2" className="scroll-mt-36 mt-12 mb-10">
                                    <h3 className="text-2xl font-semibold mb-4 text-white">Methodology & Performance</h3>
                                    <p className="mb-8">
                                        Our research deconstructs the mechanisms driving {title}. In a landscape governed by the <strong>DPDP Act</strong> and rapid technological shifts, we provide actionable data points that form the bedrock of resilient enterprise infrastructure.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0a0f14]">
                                            <img
                                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400"
                                                alt="Cloud Infrastructure"
                                                loading="lazy"
                                                className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-700 m-0"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0a0f14]">
                                            <img
                                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                                                alt="Data Analytics"
                                                loading="lazy"
                                                className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-700 m-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="my-12 glass-card p-6 sm:p-8 border-l-primary border-l-4">
                                <h3 className="text-white text-xl font-bold mb-6 mt-0">Key Takeaways</h3>
                                <ul className="space-y-4 text-zinc-400 m-0 p-0 list-none">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-primary mt-1">●</span>
                                        <span>Strategic implementation and integration protocols specific to {title}.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-primary mt-1">●</span>
                                        <span>Minimizing risk vectors while optimizing asset utilization in dynamic environments.</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-primary mt-1">●</span>
                                        <span>Deploying verifiable frameworks for long-term scalability and audit readiness.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="section-3" className="scroll-mt-36 text-2xl sm:text-3xl border-b border-white/10 pb-4 mb-6">Execution and Strategy</h2>
                            <p>
                                Continuous monitoring, robust architectural design, and proactive threat mitigation are no longer optional. Our methodologies are built upon years of forensic analysis and enterprise transformation. Read further into our resources to equip your team with actionable intelligence.
                            </p>

                        </article>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-[32%] contents lg:block lg:order-2">
                        <div className="sticky top-32 space-y-8 contents lg:block">
                            
                            {/* Table of Contents */}
                            <div className="glass-card rounded-2xl p-6 order-1 lg:order-none">
                                <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-[0.2em] border-b border-white/10 pb-3">Table of Contents</h4>
                                <nav className="flex flex-col gap-3">
                                    <a href="#section-1" className="text-zinc-400 hover:text-primary text-sm font-medium transition-colors flex items-start gap-3 group">
                                        <span className="text-zinc-600 group-hover:text-primary mt-px text-xs font-bold">01</span>
                                        <span>Landscape Setup</span>
                                    </a>
                                    {(category === 'blogs' || category === 'articles') && (
                                        <a href="#section-2" className="text-zinc-400 hover:text-primary text-sm font-medium transition-colors flex items-start gap-3 group">
                                            <span className="text-zinc-600 group-hover:text-primary mt-px text-xs font-bold">02</span>
                                            <span>{category === 'blogs' ? 'Strategic Insights' : 'Methodology'}</span>
                                        </a>
                                    )}
                                    <a href="#section-3" className="text-zinc-400 hover:text-primary text-sm font-medium transition-colors flex items-start gap-3 group">
                                        <span className="text-zinc-600 group-hover:text-primary mt-px text-xs font-bold">{(category === 'blogs' || category === 'articles') ? '03' : '02'}</span>
                                        <span>Execution Strategy</span>
                                    </a>
                                </nav>
                            </div>

                            {/* Related Resources */}
                            <div className="glass-card rounded-2xl p-6 order-3 lg:order-none">
                                <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-[0.2em] border-b border-white/10 pb-3">Related to {categoryTitle}</h4>
                                <div className="flex flex-col gap-5">
                                    {[1, 2, 3].map((item) => (
                                        <Link key={item} href={`/resources/${category}`} className="group flex flex-col gap-2 relative border border-transparent p-3 -mx-3 rounded-xl hover:bg-white/5 hover:border-white/10 transition-colors">
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Insight {item}</span>
                                            <h5 className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                                Exploring adjacent strategies for {categoryTitle.toLowerCase()} implementations.
                                            </h5>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-5 pt-4 border-t border-white/10">
                                    <Link href="/resources" className="text-xs font-bold text-primary hover:text-white transition-colors inline-flex items-center gap-2 uppercase tracking-widest">
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

