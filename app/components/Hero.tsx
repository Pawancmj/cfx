"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Code,
  Shield,
  Fingerprint,
  Tags,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import {
  DevWorkspace,
  ForensicsScan,
  CyberSOC,
  DataAnnotation,
  MarketingGrowth,
  TrainingAcademy,
} from "./HeroBackgrounds";
import TechBackground from "./TechBackground";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface Slide {
  id: string;
  badge: string;
  headline: string;
  text: string;
  primaryCta: { label: string; href: string; icon: React.ComponentType<{ className?: string }> };
  secondaryCta: { label: string; href: string };
  bgType: "static" | "animated";
  bgImage?: string;
  AnimatedBg?: React.ComponentType<{ active: boolean }>;
}

const slides: Slide[] = [
  {
    id: "custom-software",
    badge: "Custom Software Development",
    headline: "Build Enterprise-Grade Software",
    text: "From custom web applications to AI-driven analytics, we engineer secure, scalable solutions that drive revenue, efficiency, and competitive advantage.",
    primaryCta: { label: "Start Your Project", href: "/contact", icon: Code },
    secondaryCta: { label: "See Our Work", href: "/case-studies" },
    bgType: "animated",
    AnimatedBg: DevWorkspace,
  },
  {
    id: "forensics",
    badge: "Digital Forensics & Investigation",
    headline: "Uncover the Truth Hidden in Data",
    text: "Our forensic experts extract, preserve, and analyze digital evidence with court-admissible precision for litigation, incident response, and regulatory compliance.",
    primaryCta: { label: "Explore Forensics", href: "/services/digital-forensics", icon: Fingerprint },
    secondaryCta: { label: "View All Services", href: "/services" },
    bgType: "animated",
    AnimatedBg: ForensicsScan,
  },
  {
    id: "cybersecurity",
    badge: "Cybersecurity Solutions",
    headline: "Fortify Your Digital Perimeter",
    text: "Proactive threat hunting, penetration testing, and 24/7 SOC monitoring to keep your infrastructure secure against evolving cyber threats.",
    primaryCta: { label: "Audit My Security", href: "/contact", icon: Shield },
    secondaryCta: { label: "Learn More", href: "/services/cybersecurity" },
    bgType: "animated",
    AnimatedBg: CyberSOC,
  },
  {
    id: "data-annotation",
    badge: "Intelligent Data Annotation",
    headline: "Power AI With Precision Data",
    text: "High-precision data labeling and annotation services powering AI/ML models with accurate, scalable training datasets for computer vision and NLP.",
    primaryCta: { label: "Annotate With Us", href: "/services/data-annotation", icon: Tags },
    secondaryCta: { label: "Explore Capabilities", href: "/services" },
    bgType: "animated",
    AnimatedBg: DataAnnotation,
  },
  {
    id: "digital-marketing",
    badge: "Digital Marketing Solutions",
    headline: "Dominate Your Market With Data",
    text: "Data-driven marketing strategies spanning SEO, paid media, and content to maximize ROI and accelerate your digital growth trajectory.",
    primaryCta: { label: "Grow Your Reach", href: "/services/digital-marketing", icon: TrendingUp },
    secondaryCta: { label: "View Case Studies", href: "/case-studies" },
    bgType: "animated",
    AnimatedBg: MarketingGrowth,
  },
  {
    id: "training",
    badge: "Training & Internship Programs",
    headline: "Shape the Next Generation of Experts",
    text: "Hands-on training and internship programs bridging the gap between academic knowledge and industry-ready expertise in tech and cybersecurity.",
    primaryCta: { label: "Join Our Program", href: "/services/training", icon: GraduationCap },
    secondaryCta: { label: "Learn More", href: "/services" },
    bgType: "animated",
    AnimatedBg: TrainingAcademy,
  },
];

function WordBlock({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay, duration: 0.6, ease: easeOut }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function SlideContent({ slide, reduced }: { slide: Slide; reduced: boolean }) {
  const words = slide.headline.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.35, ease: easeOut }}
    >
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reduced ? 0 : 0.1, ease: easeOut }}
        className="flex items-center gap-3 mb-10 sm:mb-14"
      >
        <span className="inline-block w-10 h-px bg-primary/40" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
          {slide.badge}
        </span>
      </motion.div>

      <h1 className="text-hero text-foreground">
        {words.map((word, i) => (
          <span key={i}>
            <WordBlock word={word} delay={reduced ? 0 : i * 0.1 + 0.25} />
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>

      <motion.p
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 0.55, duration: 0.7, ease: easeOut }}
        className="mt-8 sm:mt-10 text-body max-w-2xl leading-relaxed"
      >
        {slide.text}
      </motion.p>

      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 0.8, duration: 0.5, ease: easeOut }}
        className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start gap-5"
      >
        <Link href={slide.primaryCta.href} className="btn-primary group">
          <slide.primaryCta.icon className="w-5 h-5" />
          <span>{slide.primaryCta.label}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link href={slide.secondaryCta.href} className="btn-secondary group">
          {slide.secondaryCta.label}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const slide = slides[current];

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % slides.length);
      }, 6000);
    }
  }, [paused, clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = useCallback(
    (i: number) => {
      setCurrent(i);
      startTimer();
    },
    [startTimer]
  );

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    startTimer();
  }, [startTimer]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    startTimer();
  }, [startTimer]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart === null) return;
      const diff = e.changedTouches[0].clientX - touchStart;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goPrev();
        else goNext();
      }
      setTouchStart(null);
    },
    [touchStart, goPrev, goNext]
  );

  return (
    <section
      id="hero"
      className="relative isolate min-h-[90vh] flex items-center overflow-hidden bg-background group"
      onMouseEnter={() => setPaused(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setPaused(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ParticleBackground />

      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full animate-gradient-1"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(109,40,217,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full animate-gradient-2"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(167,139,250,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.035] bg-dots" />

      <div className="absolute inset-0 -z-5">
        {slides.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: reduced ? 1 : i === current ? 1.03 : 1 }}
              transition={{ duration: reduced ? 0 : i === current ? 6 : 0, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              {s.AnimatedBg ? (
                <s.AnimatedBg active={i === current && !reduced} />
              ) : null}
              <div className="absolute inset-0 bg-black/70" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <TechBackground mouseX={mouseX} mouseY={mouseY} reduced={!!reduced} />

      <div className="page-container relative z-10 w-full py-20 sm:py-32">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <SlideContent key={slide.id} slide={slide} reduced={!!reduced} />
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation controls — fixed position, never shifts */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-10 z-20 flex items-center gap-3 sm:gap-4">
        <button
          onClick={goPrev}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={goNext}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
        <span className="text-xs font-bold text-zinc-500 tracking-widest select-none">
          {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll indicator — hidden on mobile to avoid overlap */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: easeOut }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
          Scroll
        </span>
        <motion.div
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
