"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

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

const animatedLabels = new Set<string>();

function useCountUp(label: string, target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(animatedLabels.has(label) ? target : 0);

  useEffect(() => {
    if (!active || animatedLabels.has(label)) return;
    animatedLabels.add(label);

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
  }, [target, duration, active, label]);

  return count;
}

function StatValue({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.label, stat.value, 1400, active);
  const formatted = stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <>
      <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-foreground tracking-tight tabular-nums leading-none whitespace-nowrap">
        {formatted}
        <span className="text-primary">{stat.suffix}</span>
      </span>
      <span className="inline-block w-7 h-0.5 bg-primary/30 mt-0.5 mb-1 md:mt-3 md:mb-2.5 rounded-full" />
      <span className="text-[11px] lg:text-xs font-semibold text-muted tracking-wider uppercase leading-snug max-w-[160px]">
        {stat.label}
      </span>
    </>
  );
}

export default function StatsSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(2);

  useEffect(() => {
    const check = () => setGroupSize(window.innerWidth >= 1024 ? 3 : 2);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("all", () => {
        const isDesktop = window.innerWidth >= 1024;
        const gs = isDesktop ? 3 : 2;
        const numSlides = stats.length - gs;
        const scrollDistance = numSlides * (isDesktop ? 100 : 30);
        const totalPairs = stats.length - gs + 1;

        const pin = ScrollTrigger.create({
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
          x: () => -(numSlides * window.innerWidth) / gs,
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

        return () => {
          pin.kill();
        };
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full section-bg-secondary border-y border-border/50 min-h-[65vh] md:min-h-screen"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-dots" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 h-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center h-full flex-nowrap w-[450vw] lg:w-[300vw]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-shrink-0 flex items-center justify-center px-1 md:px-2 w-[50vw] lg:w-[33.33vw]"
            >
              <div className="flex flex-col items-center text-center select-none">
                <StatValue stat={stat} active={i <= activeIndex + groupSize - 1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}