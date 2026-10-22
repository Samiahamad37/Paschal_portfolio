"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
