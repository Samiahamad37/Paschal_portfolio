"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const EVENT = "themechange";

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => true;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
