"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-shadow sm:px-5 ${
          scrolled ? "shadow-lg shadow-black/10" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="bg-accent grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-[#14161c]">
            PJ
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Pascal Jonathan</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active === n.id ? "text-[var(--fg)]" : "text-muted hover:text-[var(--fg)]"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gold-500/15 ring-1 ring-gold-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === n.id ? "true" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      active === n.id ? "bg-gold-500/15 text-[var(--fg)]" : "text-muted"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
