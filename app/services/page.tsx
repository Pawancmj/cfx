"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
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
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "hover:border-blue-500/30",
    activeBorder: "border-blue-500/50",
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    description: "Advanced investigation and recovery of digital evidence for legal needs.",
    extendedDescription: "We provide comprehensive forensic imaging, malware analysis, and eDiscovery. Our certified experts ensure the chain of custody is maintained to provide court-admissible evidence.",
    features: ["Data Recovery", "Malware Analysis", "eDiscovery", "Incident Response"],
    icon: Search,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "hover:border-purple-500/30",
    activeBorder: "border-purple-500/50",
  },
  {
    id: "bpo",
    title: "BPO Solutions",
    description: "Streamline operations with dedicated teams.",
    extendedDescription: "Reduce operational overhead while maintaining high standards. We offer dedicated support teams, virtual assistants, and data entry specialists tailored for tech industries.",
    features: ["24/7 Support", "Data Processing", "Virtual Assistants", "IT Helpdesk"],
    icon: Headphones,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "hover:border-cyan-500/30",
    activeBorder: "border-cyan-500/50",
  },
  {
    id: "cyber-audit",
    title: "Cyber Audits",
    description: "Comprehensive vulnerability assessments and penetration testing.",
    extendedDescription: "Stay ahead of threats with regular security posture reviews. We simulate real-world attacks to find vulnerabilities before malicious actors do, providing detailed remediation reports.",
    features: ["Penetration Testing", "Compliance Audits", "Source Code Review", "Social Engineering"],
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/30",
    activeBorder: "border-emerald-500/50",
  },
  {
    id: "mobile",
    title: "Mobile Solutions",
    description: "Engaging native and cross-platform mobile experiences for iOS and Android.",
    extendedDescription: "We craft seamless fluid applications using React Native and Flutter. Get to market faster with a single codebase without sacrificing the native iOS or Android feel.",
    features: ["React Native", "Flutter", "App Store Optimization", "Offline Support"],
    icon: Smartphone,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "hover:border-orange-500/30",
    activeBorder: "border-orange-500/50",
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Transform raw data into intelligence.",
    extendedDescription: "Harness the power of your data. We build custom dashboards, implement predictive modeling, and design data pipelines to help you make data-driven decisions.",
    features: ["Predictive Modeling", "Custom Dashboards", "Data Pipelines", "Machine Learning"],
    icon: Database,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "hover:border-pink-500/30",
    activeBorder: "border-pink-500/50",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your goals, auditing current tech, and mapping the tailored solution.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "Crafting intuitive UX/UI and planning highly scalable, secure global server architecture.",
  },
  {
    step: "03",
    title: "Development & Auditing",
    desc: "Writing clean code while simultaneously conducting rigorous security checks.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    desc: "Launching the product with ongoing 24/7 monitoring and performance optimizations.",
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

  // Motion value starts at 0
  const motionValue = useMotionValue(0);

  // Spring adds a smooth settling effect rather than a hard stop
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

  useEffect(() => {
    // Subscribe to the spring value changing and use standard React state
    const unsubscribe = springValue.on("change", (latest) => {
      const hasDecimal = value % 1 !== 0;
      setDisplay(
        hasDecimal
          ? latest.toFixed(1) + suffix
          : Math.round(latest).toString() + suffix,
      );
    });
    return unsubscribe;
  }, [springValue, suffix, value]);

  return (
    <span ref={ref} className="font-extrabold">
      {display}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 h-[400px] w-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-base font-bold uppercase tracking-widest text-blue-500 mb-4">Capabilities</h2>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-lg leading-8 text-zinc-400">
            Comprehensive digital solutions designed to propel your business
            forward. From robust development to impenetrable security,
            we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* 1. Animated Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Uptime Guaranteed",
              value: 99.9,
              suffix: "%",
              desc: "Reliable infrastructure",
            },
            {
              title: "Successful Projects",
              value: 50,
              suffix: "+",
              desc: "Delivered on time",
            },
            {
              title: "Security Monitoring",
              value: 24,
              suffix: "/7",
              desc: "Active threat protection",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 mb-2">
                {/* The 24/7 is not really a standard number counter, but we can treat 24 as the counter */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {stat.title}
              </h3>
              <p className="text-zinc-500 text-sm">{stat.desc}</p>
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
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            Core <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-lg leading-8 text-zinc-400">
            Specialized digital capabilities tailored to protect, scale, and
            innovate your enterprise infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 items-start">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative overflow-hidden flex flex-col rounded-2xl bg-zinc-900/50 border backdrop-blur-sm transition-all duration-500 min-h-[340px]",
                  "border-white/5 hover:-translate-y-1 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-zinc-900/50",
                  service.borderColor
                )}
              >
                {/* Default Visible Card content (Icon, Title, Short Desc) */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-8">
                  <div className={cn("p-4 w-fit rounded-xl mb-6", service.bgColor)}>
                    <Icon className={cn("w-6 h-6 sm:w-8 sm:h-8", service.color)} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Decorative element to balance the bottom of the card */}
                  <div className="mt-auto flex items-center text-sm font-semibold text-zinc-500 tracking-wide uppercase pt-4 border-t border-white/5">
                    Hover to explore
                    <ArrowRight className="w-4 h-4 ml-2 opacity-50 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Details Content (Extended Desc, Features) */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 h-full pointer-events-none group-hover:pointer-events-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow">
                    {service.extendedDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className={cn(
                          "px-2 py-1 text-xs font-semibold bg-white/5 text-zinc-300 rounded-md border transition-colors",
                          service.borderColor
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

        {/* 3. Tech Stack Marquee (Edge-to-Edge) */}
      </div>

      <div className="w-full mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            Technologies We <span className="text-blue-500">Command</span>
          </h2>
          <p className="text-lg leading-8 text-zinc-400">
            Leveraging industry-leading tools and frameworks to build, scale,
            and secure your digital infrastructure.
          </p>
        </motion.div>

        <div className="relative py-12 border-y border-white/5 bg-zinc-900/20 overflow-hidden flex w-full">
          <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex whitespace-nowrap items-center gap-12 px-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {/* Duplicate the sets for infinite seamless scroll */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {/* Frontend App Dev  */}
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-blue-400 transition-colors duration-300">
                  <Code className="w-5 h-5" /> React & Next.js
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-blue-400 transition-colors duration-300">
                  <Smartphone className="w-5 h-5" /> React Native
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-blue-400 transition-colors duration-300">
                  <Monitor className="w-5 h-5" /> Tailwind CSS
                </div>

                {/* Backend / Server */}
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-emerald-400 transition-colors duration-300">
                  <Server className="w-5 h-5" /> Node.js / Express
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-emerald-400 transition-colors duration-300">
                  <Cloud className="w-5 h-5" /> AWS Architecture
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-emerald-400 transition-colors duration-300">
                  <Database className="w-5 h-5" /> PostgreSQL & MongoDB
                </div>

                {/* Security / Forensics */}
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-purple-400 transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5" /> Kali Linux
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-purple-400 transition-colors duration-300">
                  <Search className="w-5 h-5" /> Wireshark
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-purple-400 transition-colors duration-300">
                  <Lock className="w-5 h-5" /> Burp Suite
                </div>

                {/* Data / Analytics */}
                <div className="flex items-center gap-2 text-zinc-500 font-semibold text-lg hover:text-orange-400 transition-colors duration-300">
                  <Database className="w-5 h-5" /> Python & Pandas
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* 4. How We Work (Process Timeline) */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              How We <span className="text-blue-500">Work</span>
            </h2>
            <p className="text-lg leading-8 text-zinc-400">
              A systematic approach to delivering robust digital solutions with
              impenetrable security built-in from day one.
            </p>
          </motion.div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Icon / Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-950 text-blue-500 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10 relative">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/60 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors duration-300">
                      {step.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
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
          transition={{ duration: 0.8 }}
          className="mb-20 rounded-3xl bg-zinc-900/40 border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 pointer-events-none"></div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 relative z-10">
            Ready to secure your digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              future?
            </span>
          </h2>
          <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto relative z-10">
            Let&apos;s discuss how our tailored solutions can accelerate your
            growth and protect your assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/audit"
              className="rounded-full bg-white/10 border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Request Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
