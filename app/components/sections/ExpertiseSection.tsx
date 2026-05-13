"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Code, Search, Headphones, ShieldCheck, Database, Sparkles, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "web-app",
    title: "Web & App Development",
    slug: "web-app-development",
    description: "Build scalable, secure, and beautiful digital experiences.",
    extendedDescription: "Our engineering team specializes in crafting high-performance enterprise applications and mobile platforms tailored to your business needs.",
    features: ["React / Next.js", "Node.js / Express", "Custom UX/UI", "API Integration"],
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/40",
    activeBorder: "border-primary/50",
    bgImage: "/images/services/realistic_web_dev.webp",
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    slug: "digital-forensics",
    description: "Uncover hidden truths with precise digital evidence investigation.",
    extendedDescription: "Our certified forensic investigators utilize state-of-the-art technology to extract, analyze, and preserve electronic evidence for litigation, compliance, and incident response.",
    features: ["Data Recovery", "Malware Analysis", "eDiscovery", "Incident Response"],
    icon: Search,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "hover:border-secondary/40",
    activeBorder: "border-secondary/50",
    bgImage: "/images/services/realistic_forensics.webp",
  },
  {
    id: "bpo",
    title: "BPO / BPS Services",
    slug: "bpo",
    description: "Scale your operations with premium offshore talent.",
    extendedDescription: "We construct dedicated, college-educated teams to handle your back-office, customer success, and technical support operations seamlessly.",
    features: ["24/7 Support", "Data Processing", "Virtual Assistants", "IT Helpdesk"],
    icon: Headphones,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "hover:border-accent/40",
    activeBorder: "border-accent/50",
    bgImage: "/images/services/realistic_bpo.webp",
  },
  {
    id: "cyber-audit",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Protect your digital assets with military-grade security protocols.",
    extendedDescription: "Comprehensive threat detection, risk assessment, and incident response to keep your operations secure.",
    features: ["Penetration Testing", "Compliance Audits", "Source Code Review", "Social Engineering"],
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/40",
    activeBorder: "border-primary/50",
    bgImage: "/images/services/realistic_cybersecurity.webp",
  },
  {
    id: "analytics",
    title: "Data Analytics & Intelligence",
    slug: "analytics",
    description: "Transform raw data into actionable business intelligence.",
    extendedDescription: "Our data scientists engineer custom dashboarding and predictive models to help you make informed, revenue-generating decisions.",
    features: ["Predictive Modeling", "Custom Dashboards", "Data Pipelines", "Machine Learning"],
    icon: Database,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "hover:border-secondary/40",
    activeBorder: "border-secondary/50",
    bgImage: "/images/services/realistic_analytics.webp",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    slug: "marketing",
    description: "Data-driven marketing to dominate your market share.",
    extendedDescription: "We execute highly targeted, omnichannel marketing campaigns built on technical precision and creative excellence to drive measurable ROI.",
    features: ["SEO / SEM", "Paid Media", "Content Strategy", "Performance Ops"],
    icon: Sparkles,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "hover:border-accent/40",
    activeBorder: "border-accent/50",
    bgImage: "/images/services/realistic_marketing.webp",
  },
];

export default function ExpertiseSection() {
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
        const totalContentWidth = cardWidth * services.length + gap * (services.length - 1);
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
    if (Math.abs(newX - currentX) > 1) {
      animate(x, newX, { type: "tween", ease: "easeInOut", duration: 0.3 });
    }
  };

  return (
    <section className="relative py-6 md:py-8 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl border-l-4 border-primary pl-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Core Capabilities</h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-6xl leading-tight">
              Bridging the Gap Between <br />
              <span className="text-gradient italic pb-1 inline-block pr-4">Technology & Profitability</span>
            </h3>
          </div>

          <div className="hidden lg:block relative w-full h-[250px] group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10 brightness-90 group-hover:brightness-100 transition-all duration-700 bg-gradient-to-b from-[#050914] to-[#02040a]">
            {/* The SVG code */}
            <svg viewBox="50 30 400 190" className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105">
              <defs>
                <filter id="glow-bridge" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="tech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="profit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="bridge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              <g stroke="#ffffff0a" strokeWidth="1" opacity="0.8">
                <path d="M-100,50 L600,50 M-100,75 L600,75 M-100,100 L600,100 M-100,125 L600,125 M-100,150 L600,150 M-100,175 L600,175 M-100,200 L600,200 M-100,225 L600,225 M-100,250 L600,250" />
                <path d="M50,-50 L50,350 M100,-50 L100,350 M150,-50 L150,350 M200,-50 L200,350 M250,-50 L250,350 M300,-50 L300,350 M350,-50 L350,350 M400,-50 L400,350 M450,-50 L450,350" />
              </g>

              <g transform="translate(100, 110)">
                <path d="M-40,20 L40,20 L40,-20 L-40,-20 Z" fill="url(#tech-grad)" opacity="0.35" stroke="#0ea5e9" strokeWidth="2" filter="url(#glow-bridge)">
                  <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" filter="url(#glow-bridge)" />
                <path d="M-5,-7 L6,0 L-5,7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="0" y="58" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#0ea5e9" textAnchor="middle" letterSpacing="4" filter="url(#glow-bridge)" opacity="0.9">TECHNOLOGY</text>
              </g>

              <g transform="translate(400, 110)">
                <g filter="url(#glow-bridge)">
                  <rect x="-25" y="10" width="14" height="15" fill="url(#profit-grad)" opacity="0.8">
                    <animate attributeName="height" values="10;15;10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y" values="15;10;15" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="-3" y="-5" width="14" height="30" fill="url(#profit-grad)" opacity="0.9">
                    <animate attributeName="height" values="20;30;20" dur="2s" repeatCount="indefinite" begin="0.5s" />
                    <animate attributeName="y" values="5;-5;5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </rect>
                  <rect x="19" y="-25" width="14" height="50" fill="url(#profit-grad)">
                    <animate attributeName="height" values="35;50;35" dur="2s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="y" values="-10;-25;-10" dur="2s" repeatCount="indefinite" begin="1s" />
                  </rect>
                </g>
                <text x="0" y="58" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#10b981" textAnchor="middle" letterSpacing="4" filter="url(#glow-bridge)" opacity="0.9">PROFITABILITY</text>
              </g>

              <g filter="url(#glow-bridge)">
                <path d="M145,110 L355,110" fill="none" stroke="#ffffff33" strokeWidth="5" />
                <path d="M145,118 L355,118" fill="none" stroke="#ffffff22" strokeWidth="2" strokeDasharray="6 6" />

                <path d="M145,110 L355,110" fill="none" stroke="url(#bridge-grad)" strokeWidth="4" strokeDasharray="210" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="210;0" dur="2s" repeatCount="indefinite" />
                </path>

                <circle r="5" fill="#fff" filter="url(#glow-bridge)">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M145,110 L355,110" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="7" fill="#10b981" filter="url(#glow-bridge)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M145,110 L355,110" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#0ea5e9" filter="url(#glow-bridge)">
                  <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.5s" path="M145,110 L355,110" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </g>

              <g fill="#fff" opacity="0.5" filter="url(#glow-bridge)">
                <circle cx="250" cy="50" r="2.5"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" /></circle>
                <circle cx="320" cy="80" r="3"><animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" /></circle>
                <circle cx="180" cy="140" r="2"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" /></circle>
                <circle cx="280" cy="160" r="4" fill="#10b981"><animate attributeName="opacity" values="0;0.8;0" dur="5s" repeatCount="indefinite" /></circle>
                <circle cx="120" cy="160" r="2.5" fill="#0ea5e9"><animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" /></circle>
                <circle cx="380" cy="60" r="2"><animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" /></circle>
              </g>
            </svg>
          </div>
        </motion.div>
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
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                  className={cn(
                    "shrink-0 group relative overflow-hidden flex flex-col rounded-3xl glass-card transition-all duration-500 min-h-[320px] border-white/5 select-none",
                    "lg:hover:-translate-y-3 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:hover:bg-white/10"
                  )}
                >
                  {service.bgImage && (
                    <div className="absolute inset-0 z-0 bg-black">
                      <Image
                        src={service.bgImage}
                        alt={service.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 lg:group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 via-40% to-transparent" />
                    </div>
                  )}

                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end transition-all duration-500 lg:group-hover:opacity-0 lg:group-hover:-translate-y-12">
                    <div className="mt-auto flex flex-col pt-12">
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {service.title}
                      </h3>
                      <p className="text-zinc-300 leading-relaxed font-medium text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 flex items-center text-xs font-bold text-primary tracking-[0.3em] uppercase pt-6 border-t border-white/10 hover:text-white transition-colors group/link"
                    >
                      Explore Details
                      <ArrowRight className="w-5 h-5 ml-3 opacity-50 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </Link>
                  </div>

                  <div className="absolute inset-0 z-20 flex flex-col justify-end opacity-0 translate-y-12 transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 h-full pointer-events-none lg:group-hover:pointer-events-auto hidden lg:flex">
                    
                    <div 
                      className="absolute inset-0 pointer-events-none bg-black/10 transition-all duration-500" 
                      style={{ 
                        backdropFilter: "blur(8px)", 
                        WebkitBackdropFilter: "blur(8px)", 
                        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 40%, black 70%)", 
                        maskImage: "linear-gradient(to bottom, transparent 0%, transparent 40%, black 70%)" 
                      }} 
                    />

                    <div className="relative z-30 p-6 flex flex-col pt-12 mt-auto">
                      <div className="flex items-center gap-3 mb-4 shrink-0">
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className={cn(
                              "px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-black/40 backdrop-blur-sm text-primary rounded-lg border border-primary/20 shadow-lg"
                            )}
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-4 shrink-0 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary/20 hover:bg-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-primary/20 transition-all group/btn active:scale-[0.98] backdrop-blur-sm drop-shadow-md"
                      >
                        View Category Hub
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full mt-8 shrink-0">
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
            aria-label="Previous service"
          >
            <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
          </button>

          <Link
            href="/services"
            className="mx-2 sm:mx-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-zinc-500 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-2"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
            aria-label="Next service"
          >
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
