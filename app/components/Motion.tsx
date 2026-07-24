"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionArticle = motion.article;
export const MotionSection = motion.section;

/** Reusable card reveal with the exact animation config from "How We Deliver" */
export function RevealCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
