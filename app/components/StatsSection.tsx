"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const GROUP_SIZE = 3;

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Threats Neutralized" },
  { value: 99.9, suffix: "%", label: "Uptime Protected" },
  { value: 24, suffix: "/7", label: "SOC Monitoring" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 150, suffix: "+", label: "Global Partners" },
  { value: 200, suffix: "+", label: "Dedicated Experts" },
  { value: 10000, suffix: "+", label: "Vulnerabilities Scanned" },
  { value: 300, suffix: "+", label: "Incidents Resolved" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, running: boolean): number {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!running || hasRun.current) return;

    hasRun.current = true;
    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(eased * target);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, running]);

  return count;
}

function StatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 1400, active);
  const formatted = stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <>
      <span className="text-6xl lg:text-7xl xl:text-8xl font-extralight text-foreground tracking-tight tabular-nums leading-none whitespace-nowrap">
        {formatted}
        <span className="text-primary">{stat.suffix}</span>
      </span>
      <span className="inline-block w-7 h-0.5 bg-primary/30 mt-3 mb-2.5 rounded-full" />
      <span className="text-[11px] lg:text-xs font-semibold text-muted tracking-wider uppercase leading-snug max-w-[160px]">
        {stat.label}
      </span>
    </>
  );
}

function DesktopStats() {
  const wrapperRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const numSlides = stats.length - GROUP_SIZE;
    const scrollDistance = numSlides * 100;
    const totalPairs = stats.length - GROUP_SIZE + 1;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        start: "top top",
        end: `+=${scrollDistance}vh`,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
        scrub: 1,
      });

      gsap.to(track, {
        x: () => -(numSlides * window.innerWidth) / GROUP_SIZE,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${scrollDistance}vh`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const idx = Math.min(Math.floor(progress * totalPairs), totalPairs - 1);
            setActiveIndex((prev) => Math.max(prev, idx));
          },
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full section-bg-secondary border-y border-border/50"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 h-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center h-full flex-nowrap"
          style={{ width: `${stats.length * (100 / GROUP_SIZE)}vw` }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-shrink-0 flex items-center justify-center px-2"
              style={{ width: `${100 / GROUP_SIZE}vw` }}
            >
              <div className="flex flex-col items-center text-center select-none">
                <StatValue stat={stat} active={i <= activeIndex + GROUP_SIZE - 1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileTabletStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16 section-bg-secondary overflow-hidden border-y border-border/50"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] blur-[120px] rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center text-center select-none px-2"
            >
              <StatValue stat={stat} active={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StatsSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop ? <DesktopStats /> : <MobileTabletStats />;
}
