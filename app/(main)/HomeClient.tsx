"use client";

import { useRef, useState, useEffect, useCallback } from "react";

import { motion, useMotionValue, animate } from "framer-motion";
import {
  ShieldCheck, Users, Globe, Zap,
  ArrowUpRight, Cpu, Search,
  PenTool, Terminal, RefreshCw,
  BadgeCheck, FileCheck, Layers, Settings, FlaskConical,
  Code, Headphones, Database, Sparkles, ArrowRight, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/app/components/Hero";
import Testimonials from "@/app/components/Testimonials";
import CTA from "@/app/components/CTA";
import Partners from "@/app/components/Partners";
import { cn } from "@/lib/utils";

// --- Consolidated Home Components ---

const stats = [
  {
    label: "Security Baseline",
    value: "99.9%",
    description: "Unparalleled digital asset protection for our global partners.",
    icon: ShieldCheck,
    color: "text-blue-400",
  },
  {
    label: "Enterprise Solutions",
    value: "150+",
    description: "Custom-built platforms enabling large-scale digital growth.",
    icon: Zap,
    color: "text-cyan-400",
  },
  {
    label: "Digital Reach",
    value: "25+",
    description: "Operational presence across diverse global regions.",
    icon: Globe,
    color: "text-indigo-400",
  },
  {
    label: "Dedicated Experts",
    value: "200+",
    description: "Specialized professionals committed to technical excellence.",
    icon: Users,
    color: "text-purple-400",
  },
];

function StatsSection() {
  return (
    <section className="relative py-6 md:py-8 section-bg-alt overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group p-4 sm:p-6 glass-card hover:bg-white/10 hover:border-primary/30"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl">
                <stat.icon className={`h-8 w-8 ${stat.color} group-hover:text-background transition-colors`} />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tighter text-glow">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <p className="text-zinc-400 text-[10px] sm:text-sm leading-relaxed max-w-[220px] mx-auto font-medium italic">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management System. Ensures the highest standards in protecting sensitive data and mitigating cyber threats.",
    image: "/images/certifications/iso-27001.svg",
    color: "text-blue-400",
  },
  {
    name: "ISO 9001",
    description: "Quality Management System. Demonstrates our commitment to consistent quality, customer satisfaction, and continuous improvement.",
    image: "/images/certifications/iso-9001.svg",
    color: "text-cyan-400",
  },
  {
    name: "ISO 20000-1",
    description: "IT Service Management System. Validates our excellence in IT service delivery, support, and operational efficiency.",
    image: "/images/certifications/iso-20000-1.svg",
    color: "text-indigo-400",
  },
  {
    name: "CMMI Level 3 / 5",
    description: "Capability Maturity Model Integration. Demonstrated high maturity in software development and service delivery processes.",
    image: "/images/certifications/cmmi.svg",
    color: "text-purple-400",
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control. Stringent independent audits verifying our security, availability, and processing integrity.",
    image: "/images/certifications/soc2.svg",
    color: "text-emerald-400",
  },
  {
    name: "ISO 17025",
    description: "Testing and Calibration Laboratories. Proven competence, impartiality, and consistent operation in laboratory results.",
    image: "/images/certifications/iso-17025.svg",
    color: "text-amber-400",
  },
];

function CertificationsSection() {
  return (
    <section className="relative py-6 md:py-8 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Accreditations</h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Industry-Leading Certifications
          </h3>
          <p className="text-zinc-400 text-lg font-medium mt-6">
            Our team maintains the highest standards of compliance and security through globally recognized certifications.
          </p>
        </motion.div>

        <div className="w-full overflow-hidden relative py-10">
          <motion.div
            className="flex w-[1200%] sm:w-[800%] md:w-[600%] lg:w-[480%] items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="group flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-500 cursor-default mx-3 sm:mx-4 lg:mx-6 p-5 sm:p-6 lg:p-8 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden"
                title={cert.name}
              >
                {/* Subtle inner shadow top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={140}
                    height={140}
                    className="w-full h-full object-contain filter drop-shadow-sm opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-sm font-extrabold text-zinc-800 group-hover:text-black transition-colors uppercase tracking-[0.2em] sm:tracking-widest text-center px-2 z-10 mt-2">
                  {cert.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  },
];

function ExpertiseSection() {
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

              {/* Background abstract deeper grid/mesh */}
              <g stroke="#ffffff0a" strokeWidth="1" opacity="0.8">
                <path d="M-100,50 L600,50 M-100,75 L600,75 M-100,100 L600,100 M-100,125 L600,125 M-100,150 L600,150 M-100,175 L600,175 M-100,200 L600,200 M-100,225 L600,225 M-100,250 L600,250" />
                <path d="M50,-50 L50,350 M100,-50 L100,350 M150,-50 L150,350 M200,-50 L200,350 M250,-50 L250,350 M300,-50 L300,350 M350,-50 L350,350 M400,-50 L400,350 M450,-50 L450,350" />
              </g>

              {/* Tech Side (Left) */}
              <g transform="translate(100, 110)">
                <path d="M-40,20 L40,20 L40,-20 L-40,-20 Z" fill="url(#tech-grad)" opacity="0.35" stroke="#0ea5e9" strokeWidth="2" filter="url(#glow-bridge)">
                  <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" filter="url(#glow-bridge)" />
                <path d="M-5,-7 L6,0 L-5,7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="0" y="58" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#0ea5e9" textAnchor="middle" letterSpacing="4" filter="url(#glow-bridge)" opacity="0.9">TECHNOLOGY</text>
              </g>

              {/* Profit Side (Right) */}
              <g transform="translate(400, 110)">
                {/* Growing Bar Chart */}
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

              {/* The Bridge */}
              <g filter="url(#glow-bridge)">
                <path d="M145,110 L355,110" fill="none" stroke="#ffffff33" strokeWidth="5" />
                <path d="M145,118 L355,118" fill="none" stroke="#ffffff22" strokeWidth="2" strokeDasharray="6 6" />

                <path d="M145,110 L355,110" fill="none" stroke="url(#bridge-grad)" strokeWidth="4" strokeDasharray="210" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="210;0" dur="2s" repeatCount="indefinite" />
                </path>

                {/* Traveling Energy */}
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

              {/* Ambient Cyberspace Particles */}
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
                  {/* Default Visible Card content */}
                  <div className="absolute inset-0 p-6 flex flex-col transition-all duration-500 lg:group-hover:opacity-0 lg:group-hover:-translate-y-12">
                    <div className={cn("p-3 w-fit rounded-2xl mb-4", "bg-white/5 group-hover:bg-primary/10 transition-colors shadow-inner")}>
                      <Icon className={cn("w-8 h-8", service.color)} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-medium text-sm">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto flex items-center text-xs font-bold text-primary tracking-[0.3em] uppercase pt-8 border-t border-white/5 hover:text-white transition-colors group/link"
                    >
                      Explore Details
                      <ArrowRight className="w-5 h-5 ml-3 opacity-50 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </Link>
                  </div>

                  {/* Hover Details Content - Only visible on desktop/large screens */}
                  <div className="absolute inset-0 p-8 flex flex-col opacity-0 translate-y-12 transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 h-full pointer-events-none lg:group-hover:pointer-events-auto bg-primary/5 backdrop-blur-3xl hidden lg:flex">
                    <div className="flex items-center gap-4 mb-6">
                      <Icon className={cn("w-6 h-6", service.color)} />
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider text-glow">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow font-medium italic">
                      {service.extendedDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className={cn(
                            "px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest bg-white/5 text-primary rounded-lg border border-primary/20 transition-all hover:bg-primary/10"
                          )}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary/20 hover:bg-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border border-primary/20 transition-all group/btn active:scale-[0.98]"
                    >
                      View Category Hub
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
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
    <section className="relative py-6 md:py-8 section-bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Method</h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-6xl mb-6 leading-tight">
              The Strategic <span className="text-gradient italic pb-1 inline-block pr-6">Delivery Model</span>
            </h3>
            <p className="text-zinc-400 text-lg font-medium">
              We follow a battle-tested roadmap to ensure your project moves from vision to reality with absolute security and efficiency.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group text-center p-5 sm:p-7 glass-card hover:bg-white/10 hover:border-primary/50"
            >
              <div className="mb-5 relative inline-flex">
                <div className={`h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500 relative z-10 shadow-2xl`}>
                  <step.icon className={`h-10 w-10 text-primary group-hover:text-background transition-colors`} />
                </div>
                <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-primary text-background flex items-center justify-center text-sm font-bold shadow-2xl z-20 group-hover:bg-white transition-colors">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-5 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">
                {step.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-[240px] mx-auto group-hover:text-zinc-200 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
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
    color: "group-hover:border-secondary/50",
    iconColor: "text-secondary",
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
    color: "group-hover:border-secondary/50",
    iconColor: "text-secondary",
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
    <section className="relative py-4 md:py-6 section-bg-dark border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full mb-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-2">Latest Insights</h2>
            <h3 className="text-3xl font-extrabold text-white uppercase tracking-tight text-glow">
              Recent Articles
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 w-full">
        <div ref={scrollContainerRef} className="w-full overflow-hidden py-4 -my-4">
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
                  "lg:hover:-translate-y-3 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:hover:bg-white/10",
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
                  <h4 className={cn("text-base font-bold text-white mb-2 transition-colors leading-tight", `group-hover:${article.iconColor}`)}>
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <span className={cn("text-xs font-black tracking-widest uppercase flex items-center gap-2 transition-colors", `${article.iconColor}/60 group-hover:${article.iconColor}`)}>Read Article <ArrowUpRight className="w-3 h-3" /></span>
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
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
            aria-label="Previous article"
          >
            <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
          </button>

          <Link
            href="/resources?filter=Articles%20%2F%20Insights"
            className="mx-2 sm:mx-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-widest text-zinc-500 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-2"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-xl group/btn shrink-0"
            aria-label="Next article"
          >
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
      <RecentArticlesSection />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <Testimonials />
      <CertificationsSection />
      <Partners />
      <CTA />
    </div>
  );
}
