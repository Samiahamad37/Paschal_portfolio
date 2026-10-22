"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Reveal, SectionHeading } from "./Reveal";

const inputCls =
  "w-full rounded-xl border border-line bg-transparent px-4 py-3 text-base outline-none transition placeholder:text-[var(--muted)]/70 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim() || `Message from ${name}`;
    const message = String(data.get("message") || "").trim();
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const cards = [
    { icon: PinIcon, label: "Address", value: profile.address },
    { icon: PhoneIcon, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk."
          intro="I’d love to hear from you. Whether you have questions, feedback or just want to say hello, feel free to reach out."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="surface flex items-start gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-500/12 text-gold-600 ring-1 ring-gold-500/30 dark:text-gold-400">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block break-words font-medium hover:text-gold-600 dark:hover:text-gold-400">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#1fa855] px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-[#1a9149]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="surface rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Your name</span>
                  <input name="name" required autoComplete="name" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Your email</span>
                  <input name="email" type="email" required autoComplete="email" className={inputCls} />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium">Subject</span>
                <input name="subject" className={inputCls} />
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium">Message</span>
                <textarea name="message" required rows={6} className={`${inputCls} resize-y`} />
              </label>
              <button
                type="submit"
                className="bg-accent mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-[#14161c] transition hover:brightness-105 sm:w-auto"
              >
                Send message
              </button>
              <p className="text-muted mt-3 text-xs" role="status">
                {sent
                  ? "Your email app should open with the message ready to send."
                  : "This opens your email app with the message prefilled."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
