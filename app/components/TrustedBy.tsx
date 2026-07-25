"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Client {
  name: string;
  logo?: string;
}

const row1: Client[] = [
  { name: "NTRO" },
  { name: "DHL" },
  { name: "BSE" },
  { name: "TCS", logo: "tcs-logo-1.svg" },
  { name: "Neev Realty", logo: "neev-realty.webp" },
  { name: "Cygnet One" },
  { name: "Trantor Inc" },
  { name: "InterviewPrepEdu", logo: "prepedu.webp" },
  { name: "Yellowish Publication", logo: "yellowish.webp" },
  { name: "Teppich Art", logo: "teppich.webp" },
];

const row2: Client[] = [
  { name: "Delhi Police", logo: "delhi-police.webp" },
  { name: "Income Tax", logo: "income-tax.webp" },
  { name: "TDS Delhi", logo: "tds.webp" },
  { name: "Secure Node", logo: "securen.webp" },
  { name: "AKD Services" },
  { name: "Snorkel AI" },
  { name: "Micro1" },
  { name: "Azal International", logo: "azal-international.webp" },
  { name: "Ciel Technologies" },
  { name: "A Business Studio" },
];

function ClientLogo({ client }: { client: Client }) {
  const [imgError, setImgError] = useState(false);

  if (!client.logo || imgError) {
    return (
      <span className="select-none whitespace-nowrap text-base sm:text-lg font-medium tracking-wider text-white/80">
        {client.name}
      </span>
    );
  }

  const isSvg = client.logo.endsWith(".svg");
  const src = `/images/clients/${client.logo}`;

  return (
    <Image
      src={src}
      alt={`${client.name} logo`}
      width={200}
      height={64}
      onError={() => setImgError(true)}
      className="object-contain h-full w-auto brightness-110 contrast-[1.2] transition-all duration-[400ms] group/marquee:hover:brightness-125 group/marquee:hover:scale-[1.08] group/marquee:hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
      style={{ height: "100%", width: "auto" }}
      sizes="200px"
      unoptimized={isSvg}
      draggable={false}
    />
  );
}

function MarqueeRow({
  clients,
  direction,
  speed,
}: {
  clients: Client[];
  direction: "left" | "right";
  speed: number;
}) {
  const items = [...clients, ...clients];
  const isRight = direction === "right";

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div
        className={`flex items-center gap-[60px] md:gap-20 lg:gap-[100px] w-max marquee-track ${isRight ? "marquee-right" : "marquee-left"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="shrink-0 group/marquee flex items-center justify-center h-[110px]"
          >
            <div className="flex items-center justify-center h-12 md:h-[56px] lg:h-16 w-auto">
              <ClientLogo client={client} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function TrustedBy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 section-bg-gradient overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />
      <style>{`
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        @keyframes marquee-left {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-right { animation-name: marquee-right; }
        .marquee-left { animation-name: marquee-left; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      <div className="page-container relative z-10">
        <motion.div
          custom={0}
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">TRUSTED BY</span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-[1.15] mb-6 max-w-3xl"
        >
          Trusted by Organizations Across <span className="text-gradient">Multiple Industries</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed text-zinc-400 font-medium max-w-2xl mb-20"
        >
          From startups to enterprise organizations and government institutions, CyberForenX has partnered with clients across technology, education, logistics, finance, security, and professional services.
        </motion.p>
      </div>

      {prefersReducedMotion ? (
        <div className="page-container space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {row1.map((client) => (
              <div key={client.name} className="flex items-center justify-center h-[110px]">
                <div className="flex items-center justify-center h-12 md:h-[56px] lg:h-16 w-auto">
                  <ClientLogo client={client} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {row2.map((client) => (
              <div key={client.name} className="flex items-center justify-center h-[110px]">
                <div className="flex items-center justify-center h-12 md:h-[56px] lg:h-16 w-auto">
                  <ClientLogo client={client} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <MarqueeRow clients={row1} direction="right" speed={28} />
          <MarqueeRow clients={row2} direction="left" speed={34} />
        </>
      )}
    </section>
  );
}
