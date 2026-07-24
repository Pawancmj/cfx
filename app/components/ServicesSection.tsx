"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import {
  Code, Fingerprint, ShieldCheck, Tags, TrendingUp, GraduationCap, Users,
  ArrowRight, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored enterprise applications built with modern architectures to accelerate digital transformation and drive business growth.",
    icon: Code,
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics & Investigation",
    description: "Comprehensive digital evidence extraction, analysis, and expert testimony for litigation, incident response, and regulatory compliance.",
    icon: Fingerprint,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Military-grade security assessments, penetration testing, and managed defense to protect your critical digital assets.",
    icon: ShieldCheck,
  },
  {
    id: "data-annotation",
    title: "Intelligent Data Annotation",
    description: "High-precision data labeling and annotation services powering AI/ML models with accurate, scalable training datasets.",
    icon: Tags,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Solutions",
    description: "Data-driven marketing strategies spanning SEO, paid media, and content to maximize ROI and dominate your market share.",
    icon: TrendingUp,
  },
  {
    id: "training",
    title: "Training & Internship Programs",
    description: "Hands-on training and internship programs bridging the gap between academic knowledge and industry-ready expertise.",
    icon: GraduationCap,
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition & Staffing",
    description: "Strategic talent sourcing and staffing solutions connecting organizations with top-tier technology and cybersecurity professionals.",
    icon: Users,
  },
];

export default function ServicesSection() {
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

        let cardsVisible = 3;
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
    <section className="relative py-14 md:py-20 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary mb-4">
            OUR SERVICES
          </h2>
          <h3 className="text-display text-white leading-[1.08] mb-6">
            Comprehensive Technology & Security Solutions
          </h3>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed">
            CyberForenX provides end-to-end technology, cybersecurity, digital forensics, AI, marketing, training, and staffing solutions for modern businesses.
          </p>
        </motion.div>

        <div className="w-full">
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
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                    className={cn(
                      "shrink-0 group relative overflow-hidden flex flex-col rounded-2xl pt-8 min-h-[380px] select-none",
                      "glass-card border border-white/10 transition-all duration-300",
                      "hover:-translate-y-[6px] hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    )}
                  >
                    <div className="mb-6 px-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-light text-white mb-3 tracking-tight px-8">
                      {service.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-sm flex-grow px-8">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.id}`}
                      className="group/footer relative mt-8 pt-6 pb-8 border-t border-white/5 cursor-pointer block overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/5 scale-x-0 group-hover/footer:scale-x-100 transition-transform duration-[400ms] ease-out origin-left" />
                      <span className="absolute inset-0 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-[400ms] ease-out shadow-[0_0_25px_rgba(109,40,217,0.12)]" />
                      <span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover/footer:text-white transition-colors duration-300 px-8">
                        <span className="transition-all duration-300 group-hover/footer:text-[0.925rem]">View More</span>
                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/footer:translate-x-2 group-hover/footer:text-primary group-hover/footer:scale-110" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
            aria-label="Previous service"
          >
            <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 group/btn shrink-0"
            aria-label="Next service"
          >
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
