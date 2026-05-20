"use client";

// import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Tag, ChevronRight, ChevronDown, User, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import CTA from '@/app/components/CTA';
import { resourcesData } from '@/app/constants/resourceData';
import Image from 'next/image';
// Helper to format slugs into readable titles
function formatSlug(slug: string) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// export default function ResourceDynamicPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
//     const [slug, setSlug] = useState<string>("");
//     const [category, setCategory] = useState<string>("");

export default function ResourceDynamicPage({
    params,
}: {
    params: { category: string; slug: string };
}) {

    const { slug, category } = params;
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // useEffect(() => {
    //     params.then(p => {
    //         setSlug(p.slug);
    //         setCategory(p.category);
    //     });
    // }, [params]);

    // if (!slug) return <div className="min-h-screen section-bg-dark"></div>;

    const blog = resourcesData[slug];
    const title = blog ? blog.title : formatSlug(slug);
    const categoryTitle = formatSlug(category);
    
    // Logic to find real related blogs
    const relatedBlogs = Object.values(resourcesData)
        .filter(b => b.slug !== slug && (b.category === category || b.category === 'blogs'))
        .slice(0, 3);
    
    const heroImage = blog ? blog.coverImage : (slug.includes('ai') || slug.includes('automation')
        ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600'
        : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600');

    return (
        <main className="flex min-h-screen flex-col section-bg-dark text-foreground font-sans selection:bg-primary/20 selection:text-primary relative scroll-smooth">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Ambient background effects */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[200px] rounded-full pointer-events-none opacity-30"></div>

            {/* Header Area */}
            <div className="pt-28 sm:pt-40 pb-16 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 text-zinc-600" />
                            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                            <ChevronRight className="w-3 h-3 text-zinc-600" />
                            <span className="text-primary/80">{categoryTitle}</span>
                        </div>

                        {/* Back Button */}
                        <Link
                            href="/resources"
                            className="group flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all mb-10"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            </div>
                            Back to Insights
                        </Link>

                        {/* Title & Meta */}
                        <div className="max-w-5xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
                            >
                                <BookOpen className="w-3.5 h-3.5" /> {categoryTitle}
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.05] font-display text-glow-subtle">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-between gap-8 pt-6 border-t border-white/5 text-sm font-medium text-zinc-400">
                                <div className="flex flex-wrap items-center gap-8">
                                    <div className="flex items-center gap-3 group translate-z-0">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden">
                                            <User className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Author</span>
                                            <span className="text-white group-hover:text-primary transition-colors">CyberForenX Labs</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Duration</span>
                                        <div className="flex items-center gap-2 text-zinc-200">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span>{blog ? blog.readTime : '8 min read'}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Date</span>
                                        <span className="text-zinc-200">{blog ? blog.date : 'April 14, 2026'}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white active:scale-95">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="container mx-auto px-6 lg:px-8 pb-32 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left Article Area */}
                    <div className="lg:w-[65%]">
                        {/* Hero Image - Smaller and Magazine Style */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-4xl h-[240px] sm:h-[320px] lg:h-[350px] mb-16 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0a0f14] group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent z-10 pointer-events-none opacity-60"></div>
                            {/* <img
                                src={heroImage}
                                alt={`${title} banner`}
                                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            /> */}

                            <Image
    src={heroImage}
    alt={`${title} banner`}
    fill
    priority
    sizes="(max-width: 768px) 100vw, 1200px"
    className="absolute inset-0 object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
/>
                        </motion.div>

                        {/* Article Intro */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 relative"
                        >
                             <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full"></div>
                             <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 font-medium leading-relaxed italic opacity-90">
                                {blog ? blog.intro : `Developing advanced strategies for ${title} requires a deep understanding of current trends and technological shifts.`}
                             </p>
                        </motion.div>

                        {/* Content Sections */}
                        <div className="space-y-20">
                            {blog && blog.sections.map((section, idx) => (
                                <motion.section
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    id={`section-${idx + 1}`}
                                    className="scroll-mt-32 group"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Number Badge */}
                                        <div className="hidden sm:flex flex-col items-center gap-2 pt-1 font-display">
                                            <span className="text-[10px] font-black text-primary tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Idx</span>
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight group-hover:text-primary/90 transition-colors">
                                                {section.title}
                                            </h2>
                                            <div className="text-base sm:text-lg text-zinc-400 leading-relaxed space-y-4 font-medium">
                                                <p>{section.content}</p>
                                            </div>
                                            {section.image && (
                                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-1">
                                                    {/* <img src={section.image} alt={section.title} className="w-full h-auto rounded-xl object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" /> */}
                                                 <Image
    src={section.image}
    alt={section.title}
    width={1200}
    height={700}
    sizes="100vw"
    className="w-full h-auto rounded-xl object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
/>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.section>
                            ))}
                        </div>
                        
                        {/* FAQs Section */}
                        {blog && blog.faqs && blog.faqs.length > 0 && (
                            <motion.div 
                                id="faqs" 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-24 pt-16 border-t border-white/10 scroll-mt-32"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Tag className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-glow-subtle">Common Queries</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    {blog.faqs.map((faq, idx) => (
                                        <details key={idx} className="group glass-card rounded-2xl border-white/5 hover:border-white/10 transition-all [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8 font-bold text-white text-base sm:text-lg tracking-tight select-none">
                                                <span>{faq.question}</span>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0 ml-4">
                                                    <ChevronDown className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform duration-500" />
                                                </div>
                                            </summary>
                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-zinc-400 leading-relaxed text-base sm:text-lg font-medium border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:w-[35%]">
                        <div className="sticky top-32 space-y-10">
                            
                            {/* Table of Contents - Glassmorphism */}
                            <div className="relative group/card">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-[2rem] blur opacity-50 group-hover/card:opacity-100 transition duration-1000"></div>
                                <div className="relative bg-[#0a0f14]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
                                    <h4 className="text-xs font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        Exploration Guide
                                    </h4>
                                    <nav className="flex flex-col gap-4">
                                        {blog && blog.sections.slice(0, 10).map((section, idx) => {
                                            const sectionName = section.title.includes('. ') ? section.title.split('. ')[1] : section.title;
                                            return (
                                                <a 
                                                    key={idx} 
                                                    href={`#section-${idx + 1}`} 
                                                    className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-all py-1 border-l-2 border-transparent hover:border-primary pl-4 -ml-4"
                                                >
                                                    <span className="text-[10px] font-bold text-zinc-700 group-hover:text-primary transition-colors">
                                                        {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="text-sm font-bold tracking-tight line-clamp-1 group-hover:translate-x-1 transition-transform">
                                                        {sectionName}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                        {blog && blog.faqs && blog.faqs.length > 0 && (
                                            <a 
                                                href="#faqs" 
                                                className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-all py-1 border-l-2 border-transparent hover:border-primary pl-4 -ml-4 mt-2"
                                            >
                                                <span className="text-[10px] font-bold text-zinc-700 group-hover:text-primary transition-colors">
                                                    {String(blog.sections.length + 1).padStart(2, '0')}
                                                </span>
                                                <span className="text-sm font-bold tracking-tight line-clamp-1 group-hover:translate-x-1 transition-transform">
                                                    Frequently Asked Questions
                                                </span>
                                            </a>
                                        )}
                                    </nav>
                                </div>
                            </div>
                            {/* Related Resources - REAL DATA FIX */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8">
                                <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.3em]">Related to {categoryTitle}</h4>
                                <div className="flex flex-col gap-6">
                                    {relatedBlogs.map((item) => (
                                        <Link 
                                            key={item.slug} 
                                            href={`/resources/${item.category}/${item.slug}`} 
                                            className="group flex flex-col gap-2 relative border border-transparent transition-all"
                                        >
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Insight</span>
                                            <h5 className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                                                {item.title}
                                            </h5>
                                        </Link>
                                    ))}
                                    {relatedBlogs.length === 0 && (
                                        <p className="text-xs text-zinc-500 italic">No other insights found in this category yet.</p>
                                    )}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <Link 
                                        href={`/resources?filter=${encodeURIComponent(categoryTitle)}`} 
                                        className="text-[10px] font-black text-primary hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-2 group/all"
                                    >
                                        View all {categoryTitle} <ChevronRight className="w-3 h-3 group-hover/all:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Share & Social */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8">
                                <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.3em] text-center lg:text-left">Distribute Insight</h4>
                                <div className="grid grid-cols-4 gap-4">
                                    <button className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-[#1877F2]/10 group-hover:border-[#1877F2]/50 group-hover:text-[#1877F2] transition-all">
                                            <Facebook className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <button className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-[#1DA1F2]/10 group-hover:border-[#1DA1F2]/50 group-hover:text-[#1DA1F2] transition-all">
                                            <Twitter className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <button className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-[#0A66C2]/10 group-hover:border-[#0A66C2]/50 group-hover:text-[#0A66C2] transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <button className="flex flex-col items-center gap-2 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-primary/10 group-hover:border-primary/50 group-hover:text-primary transition-all">
                                            <LinkIcon className="w-5 h-5" />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Author Card */}
                            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[2rem] p-8 overflow-hidden relative group">
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h4 className="text-[10px] font-black text-primary mb-4 uppercase tracking-[0.3em]">Verified Source</h4>
                                <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-6">
                                    Our multidisciplinary elite forensics unit curate these insights to maintain digital integrity across the enterprise landscape.
                                </p>
                                <button className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                                    Learn our methodology <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 border-t border-white/5">
                <CTA />
            </div>
        </main>
    );
}
