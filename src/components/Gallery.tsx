"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { asset, gallery } from "@/lib/data";
import { ChevronLeft, ChevronRight, CloseIcon } from "./Icons";
import { Reveal, SectionHeading } from "./Reveal";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const current = index === null ? null : gallery[index];

  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Gallery" title="Moments & milestones" />

        <ul className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {gallery.map((g, i) => (
            <li key={g.src} className="mb-3 break-inside-avoid sm:mb-4">
              <Reveal delay={(i % 4) * 0.06} y={18}>
                <button
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setIndex(i);
                  }}
                  className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-[var(--line)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  aria-label={`Open image: ${g.alt}`}
                >
                  <Image
                    src={asset(g.src)}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw"
                    className="h-auto w-full transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 transition group-hover:opacity-100"
                  />
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={asset(current.src)}
                alt={current.alt}
                width={current.w}
                height={current.h}
                sizes="90vw"
                className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-white/75">
                {index + 1} / {gallery.length}
              </p>
            </motion.div>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
