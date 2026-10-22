"use client";

import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row sm:px-8">
        <p className="text-muted" suppressHydrationWarning>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="text-muted hover:text-[var(--fg)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
