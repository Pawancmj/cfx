"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, ArrowUpRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const successStories = [
    {
        client: "SecureNode",
        content: "CyberForenX & Associates delivered an impenetrable security architecture that immediately mitigated our vulnerabilities. Their foresight and strategic deployment saved us from potentially catastrophic breaches.",
        author: "Chief Security Officer",
        role: "SecureNode Systems",
        image: "/images/mockups/securenode.webp",
        logo: "/images/clients/securen.webp",
        caseStudySlug: "secure-node-zero-trust",
    },
    {
        client: "FitnessTrack",
        content: "The custom mobile platform they built for us completely revolutionized how our users engage with their fitness data. Usage metrics have skyrocketed since the launch.",
        author: "Product Manager",
        role: "FitnessTrack App",
        image: "/images/mockups/fitnesstrack.webp",
        logo: "/images/clients/yellowish.webp",
        caseStudySlug: "fitness-track-mobile-platform",
    },
    {
        client: "InterviewPrepEdu",
        content: "They architected a scalable, high-performance educational platform that handles thousands of concurrent video sessions seamlessly. Truly a phenomenal engineering partner.",
        author: "Founder & CEO",
        role: "InterviewPrepEdu",
        image: "/images/mockups/interviewprepedu.webp",
        logo: "/images/clients/prepedu.webp",
        caseStudySlug: "interview-prep-edu-scaling",
    },
    {
        client: "St. Andrew's College",
        content: "Our institution's digital infrastructure was modernized with exceptional precision. The enhanced student portal is secure, intuitive, and highly reliable.",
        author: "IT Director",
        role: "St. Andrew's College",
        image: "/images/mockups/st.-andrews-college.webp",
        logo: "/images/clients/st.andrew.webp",
        caseStudySlug: "st-andrews-college-infrastructure",
    },
    {
        client: "TeppichArt",
        content: "The e-commerce experience they crafted is visually stunning and technically robust. Our online sales conversion rates doubled within the first quarter.",
        author: "Head of Digital",
        role: "TeppichArt",
        image: "/images/mockups/teppichart.webp",
        logo: "/images/clients/teppich.webp",
        caseStudySlug: "teppich-art-ecommerce",
    },
    {
        client: "Azal International",
        content: "A strategic partnership that delivered beyond expectations. Their data analytics and global web solutions have given us a massive competitive advantage.",
        author: "VP of Operations",
        role: "Azal International",
        image: "/images/mockups/azal-international.webp",
        logo: "/images/clients/azal-international.webp",
        caseStudySlug: "azal-international-analytics",
    },
    {
        client: "TDS Department",
        content: "The training program CyberForenX delivered was transformative. Our staff can now navigate SAP ERP systems with an investigative mindset and handle digital evidence independently — reducing our dependency on external consultants significantly.",
        author: "Director of Operations",
        role: "TDS (Tax Deducted at Source) Dept.",
        image: "/images/mockups/tds.webp",
        logo: "/images/clients/tds.webp",
        caseStudySlug: "financial-compliance-tax-investigation",
    },
    {
        client: "Income Tax Dept.",
        content: "Their forensic team provided exceptional support during our search and seizure operations. Evidence was acquired rapidly, legally, and with complete chain-of-custody integrity — every report stood firm under judicial scrutiny.",
        author: "Deputy Commissioner",
        role: "Income Tax Dept. (Investigation Wing)",
        image: "/images/mockups/income-tax.webp",
        logo: "/images/clients/income-tax.webp",
        caseStudySlug: "government-digital-investigation",
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextStory = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % successStories.length);
    };

    const prevStory = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(prev => !prev);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % successStories.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const activeStory = successStories[activeIndex];

    return (
        <section className="relative py-6 md:py-8 section-bg-dark overflow-hidden border-t border-white/5 shadow-inner">
            {/* Ambient Dark Theme Glowing Effect */}
            <div className="absolute right-[5%] top-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 bg-primary/5 blur-[200px] rounded-full pointer-events-none"></div>
            <div className="absolute left-[5%] bottom-[5%] -z-10 h-[600px] w-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full shrink-0">
                <div className="mx-auto max-w-3xl text-center relative mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">
                        Success Stories
                    </h2>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                        Client Reactions to Our <br className="hidden sm:block" />
                        <span className="text-gradient italic pb-1 inline-block pr-2">Transformative Solutions</span>
                    </h3>
                    <p className="text-zinc-400 text-lg font-medium mt-6">
                        See how we've helped ambitious companies worldwide secure their assets, scale their operations, and dominate their digital markets.
                    </p>
                </div>

                {/* Single, Unified Full-Bleed Background Container — fixed height to prevent layout jump */}
                <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] bg-zinc-950 border border-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] h-auto sm:h-[450px] lg:h-[500px] flex items-stretch group/banner">

                    {/* Background Texture Overlay */}
                    {/* <div className="absolute inset-0 bg-[url('/noise.webp')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div> */}
                    <div className="absolute inset-0  opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-40"></div>

                    {/* Edge-to-Edge Background Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-x-0 top-0 h-[250px] sm:inset-0 sm:h-full w-full z-0"
                        >
                            <Image
                                src={activeStory.image}
                                alt={`${activeStory.client} Mockup`}
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center right' }}
                                className="transition-transform duration-[4s] ease-out group-hover/banner:scale-105"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Left-Side Gradient Mask to allow text readability & seamless integration */}
                    <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-transparent z-10 pointer-events-none hidden sm:block"></div>

                    {/* Top-to-Bottom Gradient Mask for Mobile */}
                    <div className="absolute inset-x-0 top-[150px] h-[100px] bg-gradient-to-b from-transparent to-zinc-950 z-10 pointer-events-none sm:hidden"></div>

                    {/* Foreground Text Area - Floats directly on the darkened left gradient */}
                    <div className="w-full lg:w-[55%] p-5 sm:p-10 lg:p-12 pt-[180px] sm:pt-10 relative z-20 flex flex-col justify-center h-auto sm:h-full">

                        <Quote className="absolute top-8 left-8 lg:top-12 lg:left-12 w-16 h-16 sm:w-24 sm:h-24 text-primary/10 -rotate-12 pointer-events-none" />

                        <div className="relative flex-grow flex flex-col justify-center">
                            {/* Fixed height container for the animated content to prevent banner height jumping */}
                            <div className="relative h-[210px] sm:h-[260px] lg:h-[280px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 flex flex-col justify-center"
                                    >
                                        <div className="flex gap-1.5 mb-4 sm:mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-primary text-primary drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                                            ))}
                                        </div>

                                        <blockquote className="text-[13px] sm:text-lg font-medium text-zinc-400 leading-relaxed mb-4 sm:mb-8 lg:max-w-xl">
                                            "{activeStory.content}"
                                        </blockquote>

                                        <div className="flex flex-row items-center justify-between sm:justify-start gap-2 sm:gap-8 w-full border-t border-white/5 pt-4 sm:pt-8 mt-2">
                                            <div className="flex items-center gap-x-2 sm:gap-x-4 flex-1 sm:flex-initial overflow-hidden">
                                                <div className="bg-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg flex items-center justify-center w-[60px] sm:w-[100px] h-[36px] sm:h-[48px] shadow-lg shrink-0">
                                                    <Image
                                                        src={activeStory.logo}
                                                        alt={`${activeStory.client} logo`}
                                                        width={80}
                                                        height={32}
                                                        style={{ objectFit: 'contain' }}
                                                        className="max-h-5 sm:max-h-8 w-auto"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center flex-1 sm:flex-initial overflow-hidden min-w-0 pr-2 sm:pr-0">
                                                    <div className="font-bold text-white uppercase tracking-[0.1em] text-[9px] sm:text-xs truncate w-full">{activeStory.client}</div>
                                                    <div className="text-[7.5px] sm:text-[10px] text-primary uppercase tracking-[0.2em] font-bold mt-0.5 sm:mt-1 truncate w-full">{activeStory.author}</div>
                                                </div>
                                            </div>

                                            {activeStory.caseStudySlug && (
                                                <Link
                                                    href={`/case-studies/case-studies/${activeStory.caseStudySlug}`}
                                                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 bg-primary/10 border border-primary/20 hover:bg-primary hover:text-black text-primary rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all group/csbtn shrink-0"
                                                >
                                                    <span className="hidden min-[380px]:inline">Case Study</span>
                                                    <span className="inline min-[380px]:hidden">View</span>
                                                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/csbtn:translate-x-0.5 group-hover/csbtn:-translate-y-0.5" />
                                                </Link>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Controls placed directly at bottom left of banner */}
                        <div className="mt-4 sm:mt-8 flex items-center gap-6 border-y border-transparent relative z-30">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={toggleAutoPlay}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5"
                                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                                >
                                    {isAutoPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                                </button>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 flex-grow max-w-[200px]">
                                {successStories.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setIsAutoPlaying(false); setActiveIndex(i); }}
                                        className={cn(
                                            "h-1.5 sm:h-2 rounded-full transition-all duration-500 flex-1",
                                            i === activeIndex
                                                ? "bg-primary shadow-[0_0_10px_rgba(0,242,255,0.7)]"
                                                : "bg-white/10 hover:bg-white/30"
                                        )}
                                        aria-label={`Go to client ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Navigation Arrows below banner — matches article scroll layout */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6">
                    <button
                        onClick={prevStory}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
                        aria-label="Previous story"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                    </button>

                    <Link
                        href="/case-studies"
                        className="mx-2 sm:mx-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-zinc-500 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-2"
                    >
                        View All <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <button
                        onClick={nextStory}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
                        aria-label="Next story"
                    >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
