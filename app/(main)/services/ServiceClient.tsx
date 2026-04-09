"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import {
  Code,
  ShieldCheck,
  Headphones,
  Smartphone,
  Search,
  Database,
  ArrowRight,
  Monitor,
  Server,
  Cloud,
  Sparkles,
  Cpu,
  Zap,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "../../../lib/utils";

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
    bgImage: "/images/services/realistic_web_dev.png",
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
    bgImage: "/images/services/realistic_forensics.png",
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
    bgImage: "/images/services/realistic_bpo.png",
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
    bgImage: "/images/services/realistic_cybersecurity.png",
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
    bgImage: "/images/services/realistic_analytics.png",
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
    bgImage: "/images/services/realistic_marketing.png",
  },
];

const Lightbulb = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.7.9 1.2 1.7 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
);

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your goals, auditing current tech, and mapping the tailored solution.",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "Crafting intuitive UX/UI and planning highly scalable, secure global server architecture.",
    icon: Cpu
  },
  {
    step: "03",
    title: "Development & Auditing",
    desc: "Writing clean code while simultaneously conducting rigorous security checks.",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Support",
    desc: "Launching the product with ongoing 24/7 monitoring and performance optimizations.",
    icon: Zap
  },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0" + suffix);

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useMotionValueEvent(springValue, "change", (latest) => {
    const hasDecimal = value % 1 !== 0;
    setDisplay(
      hasDecimal
        ? latest.toFixed(1) + suffix
        : Math.round(latest).toString() + suffix
    );
  });

  return (
    <span ref={ref} className="font-extrabold">
      {display}
    </span>
  );
}

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 font-sans">
      <section className="relative isolate min-h-screen pt-24 sm:pt-32 pb-10 overflow-hidden section-bg-dark flex items-center border-b border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute left-1/4 top-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[160px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Global Capabilities</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.2] lg:leading-[1.1]"
        >
          Uncompromising <br className="hidden sm:block" />
          <span className="text-gradient italic text-glow inline-block pr-6">Service Models</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mb-12 font-medium flex-wrap flex items-center justify-center gap-2"
        >
          Comprehensive digital solutions designed to propel your business forward. From internal software systems to global enterprise security architecture.
        </motion.p>

        {/* 1. Animated Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-8"
        >
          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-glow transition-all">
              <AnimatedCounter value={99.9} suffix="%" />
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Uptime Guaranteed</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-glow transition-all">
              <AnimatedCounter value={50} suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Successful Projects</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
          <div className="text-center group">
            <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-glow transition-all">
              <AnimatedCounter value={24} suffix="/7" />
            </div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mt-2 group-hover:text-primary transition-colors">Security Monitoring</div>
          </div>
        </motion.div>
      </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-16">

        {/* 2. Expandable Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Expertise</h2>
          <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">Core Capabilities</h3>
          <p className="text-zinc-400 text-lg font-medium tracking-wide leading-relaxed">
            Specialized digital capabilities tailored to protect, scale, and innovate your enterprise infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 items-start">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={cn(
                  "group relative overflow-hidden flex flex-col rounded-3xl glass-card transition-all duration-500 min-h-[320px] border-white/5",
                  "lg:hover:-translate-y-3 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:hover:bg-white/10"
                )}
              >
                {/* Background Image */}
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

                {/* Default Visible Card content */}
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

                {/* Hover Details Content - Only visible on desktop/large screens */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end opacity-0 translate-y-12 transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 h-full pointer-events-none lg:group-hover:pointer-events-auto hidden lg:flex">
                  
                  {/* Gradual blur mask matching gradient */}
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tech Marquee Section */}
      <div className="w-full mb-10 section-bg-alt py-8 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-white mb-8 uppercase tracking-tight text-glow">
            Technologies We <br /> <span className="text-gradient italic inline-block pr-6">Command</span>
          </h2>
          <p className="text-zinc-400 text-xl font-medium tracking-wide">
            Leveraging industry-leading tools and frameworks to build, scale, and secure your digital infrastructure.
          </p>
        </motion.div>

        <div className="relative py-12 flex w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center gap-12 sm:gap-24 px-6 sm:px-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 sm:gap-24 items-center">
                <div className="flex items-center gap-3 sm:gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-2 sm:p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  React & Next.js
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Smartphone className="w-5 h-5 text-secondary" />
                  </div>
                  React Native
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Monitor className="w-5 h-5 text-accent" />
                  </div>
                  Tailwind CSS
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  Node.js / Express
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Cloud className="w-5 h-5 text-secondary" />
                  </div>
                  AWS Cloud
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm hover:text-white transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  Enterprise Security
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 max-w-3xl mx-auto"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary/60 mb-6">Process</h2>
            <h3 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight text-glow">How We Deliver</h3>
            <p className="text-zinc-400 text-lg font-medium leading-relaxed tracking-wide">
              A systematic approach to delivering robust digital solutions with impenetrable security built-in from day one.
            </p>
          </motion.div>

          <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/5">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-zinc-950 text-primary font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 relative group-hover:scale-110 group-hover:border-primary/40 transition-all">
                  {step.step}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] glass-card hover:bg-white/10 transition-all duration-500 border-white/5 group-hover:border-primary/20"
                >
                  <div className="inline-flex p-3 rounded-xl bg-white/5 mb-6 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed font-medium italic text-base group-hover:text-zinc-300 transition-colors">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 rounded-[3.5rem] section-bg-gradient p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-white/10 group"
        >
          <div className="absolute inset-0 bg-dots opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50"></div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-primary blur-[120px] rounded-full"
          ></motion.div>

          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-10 relative z-10 leading-tight">
            Ready to secure your <br />
            <span className="text-gradient italic text-glow inline-block pr-6">digital future?</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-16 max-w-2xl mx-auto relative z-10 font-medium tracking-wide leading-relaxed">
            Let&apos;s discuss how our tailored solutions can accelerate your growth and protect your enterprise assets globally.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="bg-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-zinc-950 hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)] rounded-xl"
            >
              Initiate Project
            </Link>
            <Link
              href="/solutions"
              className="glass-card border border-white/20 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl"
            >
              Strategic Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
