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
  Lock,
  Sparkles,
  Cpu,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "web-app",
    title: "Web & App Development",
    description: "Custom, scalable, and secure applications tailored to your business needs.",
    extendedDescription: "From high-performance React/Next.js platforms to complex backend architectures, we build software that scales globally. Our focus is on clean code, responsive design, and uncompromised security.",
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
    description: "Advanced investigation and recovery of digital evidence for legal needs.",
    extendedDescription: "We provide comprehensive forensic imaging, malware analysis, and eDiscovery. Our certified experts ensure the chain of custody is maintained to provide court-admissible evidence.",
    features: ["Data Recovery", "Malware Analysis", "eDiscovery", "Incident Response"],
    icon: Search,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "hover:border-secondary/40",
    activeBorder: "border-secondary/50",
  },
  {
    id: "bpo",
    title: "BPO Solutions",
    description: "Streamline operations with dedicated teams.",
    extendedDescription: "Reduce operational overhead while maintaining high standards. We offer dedicated support teams, virtual assistants, and data entry specialists tailored for tech industries.",
    features: ["24/7 Support", "Data Processing", "Virtual Assistants", "IT Helpdesk"],
    icon: Headphones,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "hover:border-accent/40",
    activeBorder: "border-accent/50",
  },
  {
    id: "cyber-audit",
    title: "Cyber Audits",
    description: "Comprehensive vulnerability assessments and penetration testing.",
    extendedDescription: "Stay ahead of threats with regular security posture reviews. We simulate real-world attacks to find vulnerabilities before malicious actors do, providing detailed remediation reports.",
    features: ["Penetration Testing", "Compliance Audits", "Source Code Review", "Social Engineering"],
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/40",
    activeBorder: "border-primary/50",
  },
  {
    id: "mobile",
    title: "Mobile Solutions",
    description: "Engaging native and cross-platform mobile experiences for iOS and Android.",
    extendedDescription: "We craft seamless fluid applications using React Native and Flutter. Get to market faster with a single codebase without sacrificing the native iOS or Android feel.",
    features: ["React Native", "Flutter", "App Store Optimization", "Offline Support"],
    icon: Smartphone,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "hover:border-secondary/40",
    activeBorder: "border-secondary/50",
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Transform raw data into intelligence.",
    extendedDescription: "Harness the power of your data. We build custom dashboards, implement predictive modeling, and design data pipelines to help you make data-driven decisions.",
    features: ["Predictive Modeling", "Custom Dashboards", "Data Pipelines", "Machine Learning"],
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "hover:border-accent/40",
    activeBorder: "border-accent/50",
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

// --- 1. Animated Counter Component ---
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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen section-bg-dark pt-28 sm:pt-40 pb-32 overflow-hidden text-zinc-100">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute left-1/4 top-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[160px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] bg-secondary/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Global Capabilities</span>
          </motion.div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.2] sm:leading-[1.1]">
            Uncompromising <br />
            <span className="text-gradient italic text-glow">Service Models</span>
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto font-medium">
            Comprehensive digital solutions designed to propel your business forward. From internal software systems to global enterprise security architecture.
          </p>
        </motion.div>

        {/* 1. Animated Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Uptime Guaranteed",
              value: 99.9,
              suffix: "%",
              desc: "Enterprise Infrastructure",
            },
            {
              title: "Successful Projects",
              value: 50,
              suffix: "+",
              desc: "Global Delivery",
            },
            {
              title: "Security Monitoring",
              value: 24,
              suffix: "/7",
              desc: "Active Threat Protection",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-8 sm:p-10 text-center group border-white/5"
            >
              <div className="text-4xl sm:text-6xl font-black text-primary mb-6 text-glow group-hover:scale-110 transition-transform">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-4 border-t border-white/10 pt-8 w-full">
                {stat.title}
              </h3>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 items-start">
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
                  "group relative overflow-hidden flex flex-col rounded-3xl glass-card transition-all duration-500 min-h-[380px] border-white/5",
                  "hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/10"
                )}
              >
                {/* Default Visible Card content */}
                <div className="absolute inset-0 p-8 flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-12">
                  <div className={cn("p-4 w-fit rounded-2xl mb-8", "bg-white/5 group-hover:bg-primary/10 transition-colors shadow-inner")}>
                    <Icon className={cn("w-8 h-8", service.color)} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed font-medium text-base">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center text-xs font-bold text-primary tracking-[0.3em] uppercase pt-8 border-t border-white/5">
                    Explore Details
                    <ArrowRight className="w-5 h-5 ml-3 opacity-50 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Hover Details Content */}
                <div className="absolute inset-0 p-8 flex flex-col opacity-0 translate-y-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 h-full pointer-events-none group-hover:pointer-events-auto bg-primary/5 backdrop-blur-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className={cn("w-6 h-6", service.color)} />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider text-glow">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow font-medium italic">
                    {service.extendedDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className={cn(
                          "px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/5 text-primary rounded-lg border border-primary/20 transition-all hover:bg-primary/10"
                        )}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tech Marquee Section */}
      <div className="w-full mb-48 section-bg-alt py-32 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-white mb-8 uppercase tracking-tight text-glow">
            Technologies We <br /> <span className="text-gradient italic">Command</span>
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
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-3xl mx-auto"
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
          className="mb-32 rounded-[3.5rem] section-bg-gradient p-16 sm:p-24 text-center relative overflow-hidden shadow-2xl border border-white/10 group"
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
            <span className="text-gradient italic text-glow">digital future?</span>
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
              href="/industries"
              className="glass-card border border-white/20 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl"
            >
              Strategic Industries
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

