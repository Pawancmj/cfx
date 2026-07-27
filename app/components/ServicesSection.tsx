"use client";

import { motion } from "framer-motion";
import {
  Code, Fingerprint, ShieldCheck, Tags, TrendingUp, GraduationCap, Users,
  ArrowRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { homepageServices } from "@/app/data/homepageServices";
import type { HomepageService } from "@/app/data/homepageServices";

const serviceIcons: Record<string, LucideIcon> = {
  "custom-software": Code,
  "digital-forensics": Fingerprint,
  "cybersecurity": ShieldCheck,
  "data-annotation": Tags,
  "digital-marketing": TrendingUp,
  "training": GraduationCap,
  "talent-acquisition": Users,
};

export default function ServicesSection() {
  return (
    <section className="relative py-14 md:py-20 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="page-container relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {homepageServices.map((service, index) => {
            const Icon = serviceIcons[service.id] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden flex flex-col rounded-2xl pt-6 min-h-[330px] h-full select-none",
                  "glass-card border border-white/10 transition-all duration-300",
                  "hover:-translate-y-[6px] hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                )}
              >
                <div className="mb-4 px-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-light text-white mb-3 tracking-tight px-6">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm flex-grow px-6">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.id}`}
                  className="group/footer relative mt-6 pt-5 pb-6 border-t border-white/5 cursor-pointer block overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/5 scale-x-0 group-hover/footer:scale-x-100 transition-transform duration-[400ms] ease-out origin-left" />
                  <span className="absolute inset-0 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-[400ms] ease-out shadow-[0_0_25px_rgba(109,40,217,0.12)]" />
                  <span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover/footer:text-white transition-colors duration-300 px-6">
                    <span className="transition-all duration-300 group-hover/footer:text-[0.925rem]">View More</span>
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/footer:translate-x-2 group-hover/footer:text-primary group-hover/footer:scale-110" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
