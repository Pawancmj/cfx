"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Users } from "lucide-react";

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

export default function StatsSection() {
  return (
    <section className="relative py-6 md:py-8 section-bg-alt overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group p-4 sm:p-6 glass-card hover:bg-white/10 hover:border-primary/30"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl">
                <stat.icon className={`h-8 w-8 ${stat.color} group-hover:text-background transition-colors`} />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tighter text-glow">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <p className="text-zinc-400 text-[10px] sm:text-sm leading-relaxed max-w-[220px] mx-auto font-medium italic">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
