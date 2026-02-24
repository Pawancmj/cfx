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
    color: "text-blue-500",
  },
  {
    label: "Enterprise Solutions",
    value: "150+",
    description: "Custom-built platforms enabling large-scale digital growth.",
    icon: Zap,
    color: "text-cyan-500",
  },
  {
    label: "Digital Reach",
    value: "25+",
    description: "Operational presence across diverse global regions.",
    icon: Globe,
    color: "text-indigo-500",
  },
  {
    label: "Dedicated Experts",
    value: "200+",
    description: "Specialized professionals committed to technical excellence.",
    icon: Users,
    color: "text-blue-400",
  },
];

function StatsSection() {
  return (
    <section className="bg-zinc-950 py-24 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 mb-6 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-blue-400 transition-colors">
                {stat.label}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 bg-blue-600/5 blur-[120px] rounded-full"></div>
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
    <section className="bg-zinc-950 py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Core Capabilities</h2>
              <h3 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                Bridging the Gap Between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-6xl">Technology & Profitability</span>
              </h3>
            </motion.div>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group border-b border-zinc-800 pb-2 mb-2"
          >
            Explore Our Full Suite <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all group"
            >
              <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 border border-white/5 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all">
                <item.icon className={`h-7 w-7 ${index === 0 ? "text-blue-500" : index === 1 ? "text-cyan-500" : "text-indigo-500"}`} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-zinc-800/50 text-[10px] uppercase font-bold tracking-widest text-zinc-500 border border-white/5">
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
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Strategic Blueprint",
    description: "Our architects design a bespoke digital strategy aligned with your enterprise-level goals.",
    icon: PenTool,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Agile Implementation",
    description: "Developing and deploying secure, high-performance solutions with precision and speed.",
    icon: Terminal,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Managed Evolution",
    description: "Continuous 24/7 technical oversight and adaptive upgrades to ensure enduring excellence.",
    icon: RefreshCw,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

function ProcessSection() {
  return (
    <section className="bg-zinc-950 py-32 relative overflow-hidden">
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-white/5 hidden lg:block -z-10"></div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Our Method</h2>
            <h3 className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
              The Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Delivery Model</span>
            </h3>
            <p className="text-zinc-400 text-lg">
              We follow a battle-tested roadmap to ensure your project moves from vision to reality with absolute security and efficiency.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group text-center"
            >
              <div className="mb-8 relative inline-flex">
                <div className={`h-20 w-20 rounded-3xl ${step.bg} border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 relative z-10`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500 z-20">
                  0{index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-zinc-500 leading-relaxed text-sm max-w-[240px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
