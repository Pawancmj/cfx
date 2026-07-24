"use client";

import { useRef, useState, useEffect, useCallback } from "react";

import { motion, useMotionValue, animate } from "framer-motion";
import {
  ArrowUpRight, Search,
  PenTool, Terminal, RefreshCw,
  ArrowRight, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/app/components/Hero";
import StatsSection from "@/app/components/StatsSection";
import ServicesSection from "@/app/components/ServicesSection";
import { ProcessTimeline } from "@/app/components/ProcessTimeline";
import { MotionDiv } from "@/app/components/Motion";
import CTABanner from "@/app/components/CTABanner";
import TrustedBy from "@/app/components/TrustedBy";
import Partners from "@/app/components/Partners";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discover & Audit",
    description: "We deep-dive into your current ecosystem to identify bottlenecks and security vulnerabilities.",
    icon: Search,
  },
  {
    title: "Strategic Blueprint",
    description: "Our architects design a bespoke digital strategy aligned with your enterprise-level goals.",
    icon: PenTool,
  },
  {
    title: "Agile Implementation",
    description: "Developing and deploying secure, high-performance solutions with precision and speed.",
    icon: Terminal,
  },
  {
    title: "Managed Evolution",
    description: "Continuous 24/7 technical oversight and adaptive upgrades to ensure enduring excellence.",
    icon: RefreshCw,
  },
];

function ProcessSection() {
  return (
    <ProcessTimeline
      steps={steps}
      header={
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Method</h2>
          <h3 className="text-3xl font-extralight tracking-tight text-white sm:text-5xl leading-[1.1]">
            The Strategic <span className="text-gradient pb-1 inline-block pr-6">Delivery Model</span>
          </h3>
          <p className="text-zinc-400 text-lg font-medium mt-6">
            We follow a battle-tested roadmap to ensure your project moves from vision to reality with absolute security and efficiency.
          </p>
        </MotionDiv>
      }
    />
  );
}

const articles = [
  {
    title: "Understanding Digital Evidence & Chain of Custody",
    excerpt: "Explore critical insights regarding understanding digital evidence & chain of custody for strategic business advantage.",
    date: "Mar 20, 2026",
    readTime: "5 min read",
    color: "group-hover:border-primary/50",
    iconColor: "text-primary",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/understanding-digital-evidence"
  },
  {
    title: "Web Security Best Practices for Business Platforms",
    excerpt: "Explore critical insights regarding web security best practices for business platforms for strategic business advantage.",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    color: "group-hover:border-accent/50",
    iconColor: "text-accent",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/web-security-best-practices"
  },
  {
    title: "Data-Driven Decision Making for Enterprises",
    excerpt: "Explore critical insights regarding data-driven decision making for enterprises for strategic business advantage.",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    color: "group-hover:border-accent/50",
    iconColor: "text-accent",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/data-driven-decision-making"
  },
  {
    title: "Why Organizations Need Continuous Cyber Risk Assessment",
    excerpt: "Explore critical insights regarding why organizations need continuous cyber risk assessment for strategic business advantage.",
    date: "Mar 12, 2026",
    readTime: "7 min read",
    color: "group-hover:border-primary/50",
    iconColor: "text-primary",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/continuous-cyber-risk-assessment"
  },
  {
    title: "Modern Business Process Automation Strategies",
    excerpt: "Explore critical insights regarding modern business process automation strategies for strategic business advantage.",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    color: "group-hover:border-accent/50",
    iconColor: "text-accent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/modern-bpa-strategies"
  },
  {
    title: "Digital Compliance & Regulatory Intelligence Explained",
    excerpt: "Explore critical insights regarding digital compliance & regulatory intelligence explained for strategic business advantage.",
    date: "Mar 05, 2026",
    readTime: "8 min read",
    color: "group-hover:border-accent/50",
    iconColor: "text-accent",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=450",
    href: "/resources/articles/digital-compliance-explained"
  }
];

function RecentArticlesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [scrollRange, setScrollRange] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const updateDimensions = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const styles = getComputedStyle(container);
        const paddingLeft = parseFloat(styles.paddingLeft) || 0;
        const paddingRight = parseFloat(styles.paddingRight) || 0;
        const innerWidth = container.clientWidth - paddingLeft - paddingRight;

        let cardsVisible = 4;
        let currentGap = 24;

        if (window.innerWidth < 768) {
          cardsVisible = 1;
          currentGap = 16;
        } else if (window.innerWidth < 1024) {
          cardsVisible = 2;
          currentGap = 24;
        }

        const calculatedCardWidth = (innerWidth - currentGap * (cardsVisible - 1)) / cardsVisible;
        setGap(currentGap);
        setCardWidth(calculatedCardWidth);
      }
    };

    updateDimensions();
    setTimeout(updateDimensions, 150);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const recalc = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const styles = getComputedStyle(container);
        const paddingLeft = parseFloat(styles.paddingLeft) || 0;
        const paddingRight = parseFloat(styles.paddingRight) || 0;
        const innerWidth = container.clientWidth - paddingLeft - paddingRight;
        const totalContentWidth = cardWidth * articles.length + gap * (articles.length - 1);
        const maxScroll = Math.max(0, totalContentWidth - innerWidth);
        setScrollRange(maxScroll);
      }
    };
    requestAnimationFrame(recalc);
  }, [cardWidth, gap]);

  const clampX = useCallback((val: number) => {
    return Math.max(-scrollRange, Math.min(0, val));
  }, [scrollRange]);

  const snapToNearest = useCallback(() => {
    const step = cardWidth + gap;
    if (step <= 0) return;
    const index = Math.round(x.get() / -step);
    const newX = clampX(-(index * step));
    animate(x, newX, { type: "tween", ease: "easeInOut", duration: 0.3 });
  }, [cardWidth, gap, x, clampX]);

  const handlePrev = () => {
    const step = cardWidth + gap;
    if (step <= 0) return;
    const index = Math.round(x.get() / -step);
    const newX = clampX(-(index - 1) * step);
    const currentX = x.get();
    // Only animate if the target is different
    if (Math.abs(newX - currentX) > 1) {
      animate(x, newX, { type: "tween", ease: "easeInOut", duration: 0.3 });
    }
  };

  const handleNext = () => {
    const step = cardWidth + gap;
    if (step <= 0) return;
    const index = Math.round(x.get() / -step);
    const newX = clampX(-(index + 1) * step);
    const currentX = x.get();
    // Only animate if the target is different
    if (Math.abs(newX - currentX) > 1) {
      animate(x, newX, { type: "tween", ease: "easeInOut", duration: 0.3 });
    }
  };

  // Mouse wheel scroll removed — cards scroll only via buttons or mouse drag

  return (
    <section className="relative py-14 md:py-20 section-bg-dark border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-2">Latest Insights</h2>
            <h3 className="text-3xl font-extralight text-white uppercase tracking-tight">
              Recent Articles
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 w-full">
        <div ref={scrollContainerRef} className="w-full overflow-hidden py-8 -my-8">
          <motion.div
            className="flex w-max cursor-grab active:cursor-grabbing items-stretch"
            style={{ x, gap: `${gap}px` }}
            drag="x"
            dragConstraints={{ left: -scrollRange, right: 0 }}
            dragElastic={0.05}
            dragMomentum={false}
            onDragEnd={snapToNearest}
          >
            {articles.map((article, i) => (
              <Link
                key={article.title}
                href={article.href}
                style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                className={cn(
                  "shrink-0 group relative overflow-hidden flex flex-col justify-between glass-card transition-all cursor-pointer border-white/5 rounded-3xl select-none",
                  "lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]",
                  article.color
                )}
              >
                <div className="relative h-28 w-full overflow-hidden shrink-0 pointer-events-none">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-3 flex flex-col flex-grow pointer-events-none">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-xl font-light text-white mb-2 tracking-tight">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <span className={cn("text-xs font-black tracking-widest uppercase flex items-center gap-2", `${article.iconColor}/60`)}>Read Article <ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full mt-8 shrink-0">
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
            aria-label="Previous article"
          >
            <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>

          <Link
            href="/resources?filter=Articles%20%2F%20Insights"
            className="mx-2 sm:mx-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-zinc-500 hover:text-white/70 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
            aria-label="Next article"
          >
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <CTABanner />
      <TrustedBy />
      <RecentArticlesSection />
      <Partners />
    </div>
  );
}
