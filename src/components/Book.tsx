import Image from "next/image";
import { asset, book } from "@/lib/data";
import { BookIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Book() {
  return (
    <section id="book" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="surface relative overflow-hidden rounded-[2rem] p-6 sm:p-10 md:p-14">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-glow/15 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
              <div className="mx-auto w-48 rotate-[-3deg] sm:w-56 md:w-64">
                <div className="overflow-hidden rounded-lg shadow-2xl shadow-black/40 ring-1 ring-black/10">
                  <Image
                    src={asset(book.cover)}
                    alt={`Cover of the book ${book.title} by ${book.author}`}
                    width={680}
                    height={1080}
                    sizes="256px"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">
                  <BookIcon className="h-4 w-4" /> Featured book
                </p>
                <h2 className="font-display text-3xl font-semibold italic leading-tight sm:text-5xl">
                  “{book.title}”
                </h2>
                <p className="text-muted mt-4 text-lg">
                  by <span className="font-semibold text-[var(--fg)]">{book.author}</span>
                </p>
                <a
                  href="#contact"
                  className="bg-accent mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-[#14161c] transition hover:brightness-105"
                >
                  Ask about the book
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
