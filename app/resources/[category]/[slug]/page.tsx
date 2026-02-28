import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Tag } from 'lucide-react';
import CTA from '@/app/components/CTA';

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

    return (
        <main className="flex min-h-screen flex-col pt-32 pb-16">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-zinc-600">Resources</span>
                    <span>/</span>
                    <span className="text-primary">{categoryTitle}</span>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>

                {/* Header Section */}
                <div className="max-w-4xl mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <BookOpen className="w-4 h-4" /> {categoryTitle}
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        {title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{category === 'news' ? '3 min read' : category === 'blogs' ? '8 min read' : '5 min read'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-primary" />
                            <span>Enterprise {categoryTitle}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] mb-16 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-in fade-in duration-1000 bg-[#0a0f14]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-[#05080a]/60 to-transparent z-10"></div>
                    <img
                        src={
                            category === 'blogs'
                                ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600&h=900' // Cyber/Tech
                                : category === 'news'
                                    ? 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600&h=900' // Global/Network
                                    : category === 'articles'
                                        ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600&h=900' // Data/Globe
                                        : 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600&h=900' // Matrix/Code
                        }
                        alt={`${title} banner`}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                    />
                </div>

                {/* Dynamic Content Section */}
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16 mb-24 animate-in fade-in duration-1000 delay-300">
                    {/* Main Content */}
                    <div className="lg:w-2/3 prose prose-invert prose-p:text-zinc-400 prose-p:leading-loose prose-headings:text-white prose-a:text-primary hover:prose-a:text-white">
                        <p className="text-xl text-zinc-300 mb-10 border-l-4 border-primary pl-6 py-2 bg-white/5 rounded-r-xl">
                            This is a comprehensive overview of <strong className="text-white">{title}</strong>. Cyberforenx provides industry-leading solutions and deep insights to empower your enterprise ecosystem.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">Navigating the Modern {categoryTitle} Landscape</h2>
                        <p>
                            In today's rapidly evolving digital perimeter, organizations must maintain rigorous standards across all operational nodes. Understanding how to leverage specialized knowledge from our <i className="text-zinc-300">{categoryTitle}</i> archives is critical to sustaining a competitive edge and ensuring strict compliance.
                        </p>

                        {category === 'blogs' && (
                            <div className="mt-12 bg-[#0a0f14] p-8 rounded-3xl border border-white/5 shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-white mt-0">Industry Perspectives</h3>
                                <p className="text-zinc-400 mb-8">
                                    Our analysts dive deep into the microservices and macroeconomic trends dictating modern security postures. As <span className="text-zinc-300">{title}</span> becomes a focal point for C-suite discussions, integrating these insights natively into your workflow remains paramount.
                                </p>
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                                        alt="Analytics dashboard showing cyber trends"
                                        loading="lazy"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 m-0"
                                    />
                                </div>
                            </div>
                        )}

                        {category === 'articles' && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Research & Methodology</h3>
                                <p className="mb-8">
                                    Backed by extensive field research, this article deconstructs the mechanisms driving {title}. We evaluate real-world scenarios to extract actionable data points that form the bedrock of resilient enterprise infrastructure.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0a0f14]">
                                        <img
                                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=400"
                                            alt="Hardware Code execution"
                                            loading="lazy"
                                            className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-700 m-0"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0a0f14]">
                                        <img
                                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=400"
                                            alt="Secure Server Racks"
                                            loading="lazy"
                                            className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-700 m-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="my-12 glass-card p-8 border-l-primary border-l-4">
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

                        <h2>Execution and Strategy</h2>
                        <p>
                            Continuous monitoring, robust architectural design, and proactive threat mitigation are no longer optional. Our methodologies are built upon years of forensic analysis and enterprise transformation. Read further into our resources to equip your team with actionable intelligence.
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="glass-card p-8 rounded-3xl border border-white/10 sticky top-32">
                            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/10 pb-4">
                                Related to {categoryTitle}
                            </h4>
                            <div className="flex flex-col gap-6">
                                {[1, 2, 3].map((item) => (
                                    <Link key={item} href={`/resources/${category}`} className="group flex flex-col gap-2">
                                        <span className="text-xs text-primary font-bold uppercase tracking-wider">Insight {item}</span>
                                        <h5 className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                            Exploring adjacent strategies for {categoryTitle.toLowerCase()} implementations.
                                        </h5>
                                    </Link>
                                ))}
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
