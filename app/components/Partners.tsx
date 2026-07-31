"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Partners() {
  const partners = [
    {
      name: "Amazon Web Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      bgClass: "bg-white",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      bgClass: "bg-white",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      bgClass: "bg-white",
    },
  ];

  return (
    <section className="relative py-14 md:py-20 section-bg-gradient overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none"></div>
      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4">Technology Partners</h2>
          <h3 className="text-3xl font-extralight tracking-tight text-white sm:text-5xl leading-[1.1]">
            For the Next Generation of Businesses
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
               className={`flex items-center justify-center p-6 sm:p-8 md:p-12 h-28 sm:h-36 md:h-48 w-full rounded-2xl ${partner.bgClass} shadow-[0_18px_44px_rgba(0,0,0,0.35)] ring-1 ring-primary/15 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(124,58,237,0.18)] transition-premium cursor-pointer group`}
            >
              {/* <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-32 md:w-44 object-contain group-hover:scale-105 transition-transform duration-500"
              /> */}
              <Image
    src={partner.logo}
    alt={`${partner.name} logo`}
    width={176}
    height={80}
    sizes="(max-width: 768px) 128px, 176px"
    className="w-32 md:w-44 object-contain group-hover:scale-105 transition-transform duration-500"
/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
