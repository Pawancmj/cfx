"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ContactModal } from "./ContactModal";

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="page-container py-16 md:py-24">
        <div
          className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_20px_60px_rgba(109,40,217,0.3)] hover:shadow-[0_24px_80px_rgba(109,40,217,0.4)] transition-shadow duration-700"
          style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 35%, #8B5CF6 65%, #A855F7 100%)' }}
        >
          <div className="absolute inset-0 bg-dots opacity-[0.06]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.08] blur-[160px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A855F7]/20 blur-[140px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
          <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/[0.08]" />

          <div className="relative z-10 px-8 py-12 md:px-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6">
                <motion.div
                  custom={0}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B21B6]/40 border border-white/20 backdrop-blur-sm"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Build With Confidence</span>
                </motion.div>

                <motion.h2
                  custom={1}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-[1.15]"
                >
                  Let's Build Something<br />
                  <span className="italic text-[#E9D5FF]">Secure Together.</span>
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-base sm:text-lg leading-relaxed text-white/85 font-medium max-w-xl"
                >
                  Whether you&apos;re an enterprise seeking digital transformation or a startup with a bold idea, our team of 350+ experts is ready to help you succeed.
                </motion.p>
              </div>

              <motion.div
                custom={3}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group/btn inline-flex items-center gap-3 bg-white text-[#6D28D9] px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                >
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <p className="text-white/70 text-sm font-medium max-w-xs leading-relaxed">
                  Schedule a free consultation with our strategy team. No commitment required.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
