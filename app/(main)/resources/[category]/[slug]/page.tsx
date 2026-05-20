"use client";

import { use, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { motion, useScroll, useSpring } from "framer-motion";

import {
    ArrowLeft,
    BookOpen,
    Clock,
    Tag,
    ChevronRight,
    ChevronDown,
    User,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Link as LinkIcon,
} from "lucide-react";

import { resourcesData } from "@/app/constants/resourceData";

// ✅ Lazy loaded CTA
const CTA = dynamic(() => import("@/app/components/CTA"), {
    ssr: true,
});

// ✅ Safe slug formatter
function formatSlug(slug?: string) {
    if (!slug) return "";

    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default function ResourceDynamicPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    // ✅ Next.js 16 fix
    const { slug, category } = use(params);

    // ✅ Optimized scroll animation
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 35,
        restDelta: 0.001,
    });

    // ✅ Memoized blog lookup
    const blog = useMemo(() => {
        return resourcesData[slug];
    }, [slug]);

    // ✅ Memoized titles
    const title = useMemo(() => {
        return blog ? blog.title : formatSlug(slug);
    }, [blog, slug]);

    const categoryTitle = useMemo(() => {
        return formatSlug(category);
    }, [category]);

    // ✅ Memoized related blogs
    const relatedBlogs = useMemo(() => {
        return Object.values(resourcesData)
            .filter(
                (b) =>
                    b.slug !== slug &&
                    (b.category === category || b.category === "blogs")
            )
            .slice(0, 3);
    }, [slug, category]);

    // ✅ Optimized image URLs
    const heroImage = useMemo(() => {
        if (blog?.coverImage) return blog.coverImage;

        return slug.includes("ai") || slug.includes("automation")
            ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=70&w=1200"
            : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=70&w=1200";
    }, [blog, slug]);

    return (
        <main className="flex min-h-screen flex-col section-bg-dark text-foreground font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
            {/* ✅ Reading Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* ✅ Optimized Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-30" />

            <div className="fixed bottom-0 left-0 w-[350px] h-[350px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none opacity-20" />

            {/* HEADER */}
            <div className="pt-28 sm:pt-40 pb-16 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* ✅ Keep hero animation only */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
                            <Link
                                href="/"
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </Link>

                            <ChevronRight className="w-3 h-3 text-zinc-600" />

                            <Link
                                href="/resources"
                                className="hover:text-primary transition-colors"
                            >
                                Resources
                            </Link>

                            <ChevronRight className="w-3 h-3 text-zinc-600" />

                            <span className="text-primary/80">
                                {categoryTitle}
                            </span>
                        </div>

                        {/* Back */}
                        <Link
                            href="/resources"
                            className="group flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all mb-10"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            </div>

                            Back to Insights
                        </Link>

                        {/* TITLE */}
                        <div className="max-w-5xl">
                            <div className="flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
                                <BookOpen className="w-3.5 h-3.5" />

                                {categoryTitle}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.05] font-display text-glow-subtle">
                                {title}
                            </h1>

                            {/* META */}
                            <div className="flex flex-wrap items-center justify-between gap-8 pt-6 border-t border-white/5 text-sm font-medium text-zinc-400">
                                <div className="flex flex-wrap items-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden">
                                            <User className="w-5 h-5 text-primary" />
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                                                Author
                                            </span>

                                            <span className="text-white">
                                                CyberForenX Labs
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                                            Duration
                                        </span>

                                        <div className="flex items-center gap-2 text-zinc-200">
                                            <Clock className="w-4 h-4 text-primary" />

                                            <span>
                                                {blog?.readTime ??
                                                    "8 min read"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                                            Date
                                        </span>

                                        <span className="text-zinc-200">
                                            {blog?.date ??
                                                "April 14, 2026"}
                                        </span>
                                    </div>
                                </div>

                                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white active:scale-95">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* MAIN */}
            <div className="container mx-auto px-6 lg:px-8 pb-32 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* LEFT */}
                    <div className="lg:w-[65%]">
                        {/* HERO IMAGE */}
                        <div className="relative w-full max-w-4xl h-[240px] sm:h-[320px] lg:h-[350px] mb-16 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0a0f14] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent z-10 pointer-events-none opacity-60" />

                            <Image
                                src={heroImage}
                                alt={`${title} banner`}
                                fill
                                priority
                                quality={75}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                className="absolute inset-0 object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>

                        {/* INTRO */}
                        <div className="mb-16 relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />

                            <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 font-medium leading-relaxed italic opacity-90">
                                {blog?.intro ??
                                    `Developing advanced strategies for ${title} requires a deep understanding of current trends and technological shifts.`}
                            </p>
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-20">
                            {blog?.sections?.map((section, idx) => (
                                <section
                                    key={idx}
                                    id={`section-${idx + 1}`}
                                    className="scroll-mt-32 group"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Number */}
                                        <div className="hidden sm:flex flex-col items-center gap-2 pt-1 font-display">
                                            <span className="text-[10px] font-black text-primary tracking-widest uppercase opacity-40">
                                                Idx
                                            </span>

                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">
                                                {String(idx + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1">
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight transition-colors">
                                                {section.title}
                                            </h2>

                                            <div className="text-base sm:text-lg text-zinc-400 leading-relaxed space-y-4 font-medium">
                                                <p>{section.content}</p>
                                            </div>

                                            {/* SECTION IMAGE */}
                                            {section.image && (
                                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-1">
                                                    <Image
                                                        src={section.image}
                                                        alt={section.title}
                                                        width={1200}
                                                        height={700}
                                                        loading="lazy"
                                                        quality={70}
                                                        sizes="(max-width:768px) 100vw, 900px"
                                                        className="w-full h-auto rounded-xl object-cover grayscale-[0.1] transition-all duration-500 hover:grayscale-0"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* FAQ */}
                        {/* {blog?.faqs?.length > 0 && ( */}
                            
                            {(blog?.faqs?.length ?? 0) > 0 && (
                            <div
                                id="faqs"
                                className="mt-24 pt-16 border-t border-white/10 scroll-mt-32"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Tag className="w-6 h-6 text-primary" />
                                    </div>

                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-glow-subtle">
                                        Common Queries
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {/* {blog.faqs.map((faq, idx) => ( */}
{(blog?.faqs ?? []).map((faq, idx) => (
                                        <details
                                            key={idx}
                                            className="group glass-card rounded-2xl border-white/5 hover:border-white/10 transition-all [&_summary::-webkit-details-marker]:hidden"
                                        >
                                            <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8 font-bold text-white text-base sm:text-lg tracking-tight select-none">
                                                <span>{faq.question}</span>

                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                                    <ChevronDown className="w-5 h-5 text-zinc-500 group-open:-rotate-180 transition-transform duration-300" />
                                                </div>
                                            </summary>

                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-zinc-400 leading-relaxed text-base sm:text-lg font-medium border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* SIDEBAR */}
                    <aside className="lg:w-[35%]">
                        <div className="sticky top-32 space-y-10">
                            {/* TOC */}
                            <div className="relative">
                                <div className="relative bg-[#0a0f14]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
                                    <h4 className="text-xs font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                                        Exploration Guide
                                    </h4>

                                    <nav className="flex flex-col gap-4">
                                        {blog?.sections
                                            ?.slice(0, 10)
                                            .map((section, idx) => {
                                                const sectionName =
                                                    section.title.includes(
                                                        ". "
                                                    )
                                                        ? section.title.split(
                                                              ". "
                                                          )[1]
                                                        : section.title;

                                                return (
                                                    <a
                                                        key={idx}
                                                        href={`#section-${
                                                            idx + 1
                                                        }`}
                                                        className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-all py-1 border-l-2 border-transparent hover:border-primary pl-4 -ml-4"
                                                    >
                                                        <span className="text-[10px] font-bold text-zinc-700 group-hover:text-primary transition-colors">
                                                            {String(
                                                                idx + 1
                                                            ).padStart(2, "0")}
                                                        </span>

                                                        <span className="text-sm font-bold tracking-tight line-clamp-1 group-hover:translate-x-1 transition-transform">
                                                            {sectionName}
                                                        </span>
                                                    </a>
                                                );
                                            })}
                                    </nav>
                                </div>
                            </div>

                            {/* RELATED */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8">
                                <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.3em]">
                                    Related to {categoryTitle}
                                </h4>

                                <div className="flex flex-col gap-6">
                                    {relatedBlogs.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/resources/${item.category}/${item.slug}`}
                                            className="group flex flex-col gap-2 relative border border-transparent transition-all"
                                        >
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                                Insight
                                            </span>

                                            <h5 className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                                                {item.title}
                                            </h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8">
                                <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.3em] text-center lg:text-left">
                                    Distribute Insight
                                </h4>

                                <div className="grid grid-cols-4 gap-4">
                                    {[Facebook, Twitter, Linkedin, LinkIcon].map(
                                        (Icon, idx) => (
                                            <button
                                                key={idx}
                                                className="flex flex-col items-center gap-2 group"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 border-t border-white/5">
                <CTA />
            </div>
        </main>
    );
}