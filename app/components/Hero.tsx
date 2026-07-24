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
  ShieldCheck,
  Search,
  Code,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import { NetworkLines, DataStream, GeometricMesh } from "./HeroBackgrounds";
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
    id: "digital-future",
    badge: "CyberForenX & Associates",
    headline: "Securing the Digital Future",
    text: "Delivering advanced cybersecurity, digital forensics, and tailored enterprise software solutions to protect and accelerate your global operations.",
    primaryCta: { label: "Connect with us", href: "/contact", icon: ShieldCheck },
    secondaryCta: { label: "Discover Services", href: "/services" },
    bgType: "animated",
    AnimatedBg: NetworkLines,
  },
  {
    id: "forensics",
    badge: "Digital Forensics",
    headline: "Uncover the Truth Hidden in Data",
    text: "Our forensic experts extract, preserve, and analyze digital evidence with court-admissible precision for litigation, incident response, and regulatory compliance.",
    primaryCta: { label: "Explore Forensics", href: "/services/digital-forensics", icon: Search },
    secondaryCta: { label: "View All Services", href: "/services" },
    bgType: "animated",
    AnimatedBg: DataStream,
  },
  {
    id: "enterprise",
    badge: "Enterprise Technology",
    headline: "Build. Scale. Dominate.",
    text: "From custom web applications to AI-driven analytics, we engineer enterprise-grade solutions that drive revenue, efficiency, and competitive advantage.",
    primaryCta: { label: "Start Your Project", href: "/contact", icon: Code },
    secondaryCta: { label: "See Our Work", href: "/case-studies" },
    bgType: "animated",
    AnimatedBg: GeometricMesh,
  },
  {
    id: "cybersecurity",
    badge: "Cybersecurity",
    headline: "Fortify Your Digital Perimeter",
    text: "Proactive threat hunting, penetration testing, and 24/7 SOC monitoring to keep your infrastructure secure against evolving cyber threats.",
    primaryCta: { label: "Audit My Security", href: "/contact", icon: Shield },
    secondaryCta: { label: "Learn More", href: "/services/cybersecurity" },
    bgType: "static",
    bgImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "global",
    badge: "Global Operations",
    headline: "Your Partner Across Time Zones",
    text: "With 24/7 support and dedicated teams across the globe, we deliver uninterrupted service and rapid response for your mission-critical operations.",
    primaryCta: { label: "Partner With Us", href: "/contact", icon: Globe },
    secondaryCta: { label: "About Us", href: "/company" },
    bgType: "static",
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
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
            {s.bgType === "static" && s.bgImage ? (
              <>
                <Image
                  src={s.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                  sizes="100vw"
                />
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ scale: i === current ? 1.05 : 1 }}
                  transition={{ duration: i === current ? 6 : 0, ease: "linear" }}
                  style={{ willChange: "transform" }}
                />
              </>
            ) : (
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
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <TechBackground mouseX={mouseX} mouseY={mouseY} reduced={!!reduced} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full py-20 sm:py-32">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <SlideContent key={slide.id} slide={slide} reduced={!!reduced} />
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
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

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              i === current
                ? "bg-primary w-8 h-2.5"
                : "bg-white/30 hover:bg-white/50 w-2.5 h-2.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
