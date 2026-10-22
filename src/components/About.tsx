"use client";

import Image from "next/image";
import { asset, bio, highlights, intro, profile } from "@/lib/data";
import { highlightIcons } from "./Icons";
import { Reveal, SectionHeading } from "./Reveal";

function ageFrom(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - y;
  if (now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) age--;
  return age;
}

export function About() {
  const facts = [
    { label: "Birthday", value: profile.birthDisplay },
    { label: "Age", value: String(ageFrom(profile.birthDate)) },
    { label: "City", value: profile.city },
    { label: "Degree", value: profile.degree },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Freelance", value: profile.freelance },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="Bridging communication, serving with discipline." intro={intro} />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal className="relative">
            <div className="surface sticky top-28 overflow-hidden rounded-3xl p-2">
              <Image
                src={asset(profile.portrait)}
                alt="Pascal Jonathan seated, wearing a navy outfit"
                width={1080}
                height={1620}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="aspect-[4/5] h-auto w-full rounded-[1.25rem] object-cover object-top"
              />
            </div>
          </Reveal>

          <div>
            {bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-muted mb-5 text-base leading-relaxed sm:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <dl className="surface mt-8 grid gap-x-8 gap-y-4 rounded-3xl p-6 sm:grid-cols-2 sm:p-8">
                {facts.map((f) => (
                  <div key={f.label} className="min-w-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
                      {f.label}
                    </dt>
                    <dd className="mt-1 break-words font-medium" suppressHydrationWarning>
                      {f.href ? (
                        <a href={f.href} className="underline-offset-4 hover:underline">
                          {f.value}
                        </a>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon];
            return (
              <li key={h.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <div className="surface group h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-gold-500/50">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/12 text-gold-600 ring-1 ring-gold-500/30 dark:text-gold-400">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{h.title}</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed">{h.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
