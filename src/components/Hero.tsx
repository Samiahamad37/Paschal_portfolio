"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { asset, profile } from "@/lib/data";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

function useTyping(words: string[], reduce: boolean | null) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (reduce) {
      const t = setTimeout(() => {
        setIndex((i) => i + 1);
        setText(words[(index + 1) % words.length]);
      }, 2600);
      return () => clearTimeout(t);
    }
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1700;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce]);

  return text;
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTyping(profile.roles, reduce);

  return (
    <section id="home" className="grain relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 md:pb-28 lg:min-h-[92vh] lg:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-teal-glow/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance &amp; collaborations
          </p>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Pascal
            <br />
            <span className="text-gradient">Jonathan</span>
          </h1>

          <p className="mt-6 text-xl font-medium sm:text-2xl" aria-live="off">
            <span className="text-muted">I&apos;m a </span>
            <span className="sr-only">{profile.roles.join(", ")}</span>
            <span aria-hidden className="text-gold-600 dark:text-gold-400">
              {typed}
              <span className="caret" />
            </span>
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold uppercase tracking-[0.18em] text-muted sm:text-base">
            <span>{profile.headline[0]}</span>
            <span aria-hidden className="text-gold-500">·</span>
            <span>{profile.headline[1]}</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-accent group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#14161c] shadow-lg shadow-gold-500/25 transition hover:brightness-105"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:border-gold-500"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none"
        >
          <div aria-hidden className="bg-accent absolute -inset-[3px] rounded-[2rem] opacity-80" />
          <div className="relative overflow-hidden rounded-[1.85rem] bg-[var(--bg-elev)]">
            <Image
              src={asset(profile.portrait)}
              alt="Portrait of Pascal Jonathan"
              width={1080}
              height={1620}
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
          </div>
          <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 sm:-left-6">
            <p className="text-xs text-muted">Based in</p>
            <p className="text-sm font-semibold">{profile.city}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
