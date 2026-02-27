"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Users, Globe, Zap,
  ArrowUpRight, Cpu, Search,
  PenTool, Terminal, RefreshCw
} from "lucide-react";
import Link from "next/link";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

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
    <section className="relative py-24 section-bg-alt overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group p-6 sm:p-10 glass-card hover:bg-white/10 hover:border-primary/30"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl">
                <stat.icon className={`h-8 w-8 ${stat.color} group-hover:text-background transition-colors`} />
              </div>
              <div className="text-4xl font-extrabold text-white mb-2 tracking-tighter text-glow">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-5 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[220px] mx-auto font-medium italic">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const expertise = [
  {
    title: "Full Stack Development",
    description: "Architecting robust end-to-end web applications using modern stacks (React, Next.js, Node.js) with scalable cloud infrastructure.",
    icon: Cpu,
    tags: ["Web 3.0", "Cloud Native"],
  },
  {
    title: "Advanced Data Analytics",
    description: "Transforming raw data into actionable business intelligence through predictive modeling and specialized visualization.",
    icon: Zap,
    tags: ["BI Intelligence", "Big Data"],
  },
  {
    title: "Digital Forensics",
    description: "Specialized cyber investigation and data recovery services with military-grade precision and legal compliance.",
    icon: ShieldCheck,
    tags: ["Cyber Ops", "Investigation"],
  },
];

function ExpertiseSection() {
  return (
    <section className="relative py-24 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10"
        >
          <div className="max-w-2xl border-l-4 border-primary pl-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Core Capabilities</h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-6xl leading-tight">
              Bridging the Gap Between <br />
              <span className="text-gradient italic">Technology & Profitability</span>
            </h3>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-all group font-bold uppercase tracking-[0.2em] text-xs glass-card px-6 py-3 border-white/5"
          >
            Explore Full Suite <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-primary" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-10 hover:bg-white/10 hover:border-primary/40 group relative"
            >
              <div className="mb-12 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl">
                <item.icon className="h-8 w-8 text-primary group-hover:text-background transition-colors" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed mb-8 text-base group-hover:text-zinc-300 transition-colors">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-xs uppercase font-bold tracking-[0.2em] text-primary border border-primary/20 group-hover:border-primary/50 transition-colors rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
    <section className="relative py-24 section-bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Our Method</h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-6xl mb-6 leading-tight">
              The Strategic <span className="text-gradient italic">Delivery Model</span>
            </h3>
            <p className="text-zinc-400 text-lg font-medium">
              We follow a battle-tested roadmap to ensure your project moves from vision to reality with absolute security and efficiency.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group text-center p-8 sm:p-10 glass-card hover:bg-white/10 hover:border-primary/50"
            >
              <div className="mb-10 relative inline-flex">
                <div className={`h-24 w-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500 relative z-10 shadow-2xl`}>
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


// --- Main Page Component ---

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
