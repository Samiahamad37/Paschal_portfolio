import { education, experience, resumeIntro } from "@/lib/data";
import { CapIcon, ShieldIcon } from "./Icons";
import { Reveal, SectionHeading } from "./Reveal";

type Item = { title: string; place: string; period: string };

function Timeline({ heading, items, icon: Icon }: { heading: string; items: Item[]; icon: typeof CapIcon }) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/12 text-gold-600 ring-1 ring-gold-500/30 dark:text-gold-400">
            <Icon className="h-5 w-5" />
          </span>
          {heading}
        </h3>
      </Reveal>
      <ol className="relative ml-5 border-l border-line">
        {items.map((it, i) => (
          <li key={it.title} className="relative pb-8 pl-8 last:pb-0">
            <span
              aria-hidden
              className="bg-accent absolute top-6 -left-[7px] h-3.5 w-3.5 rounded-full ring-4 ring-[var(--bg)]"
            />
            <Reveal delay={i * 0.08}>
              <div className="surface rounded-2xl p-5 transition hover:border-gold-500/50 sm:p-6">
                {it.period && (
                  <span className="mb-3 inline-block rounded-full bg-gold-500/12 px-3 py-1 text-xs font-semibold text-gold-700 dark:text-gold-300">
                    {it.period}
                  </span>
                )}
                <h4 className="text-lg font-semibold leading-snug">{it.title}</h4>
                {it.place && <p className="text-muted mt-1 text-sm">{it.place}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Resume" title="Education & experience" intro={resumeIntro} />
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <Timeline heading="Education" items={education} icon={CapIcon} />
          <Timeline heading="Professional Experience" items={experience} icon={ShieldIcon} />
        </div>
      </div>
    </section>
  );
}
