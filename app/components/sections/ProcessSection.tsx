"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Terminal, RefreshCw } from "lucide-react";

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

export default function ProcessSection() {
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
    </section>
  );
}
