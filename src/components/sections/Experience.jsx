import { Timeline } from "../ui/Timeline";
import { SectionHeading } from "../ui/Reveal";
import { experience } from "../../data/portfolio";

export default function Experience() {
  const data = experience.map((job) => ({
    title: (
      <div>
        <p className="font-mono text-xs text-neutral-500">{job.period}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {job.company}
        </h3>
        {job.current && (
          <span className="mt-3 inline-block rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
            Current
          </span>
        )}
      </div>
    ),
    content: (
      <div className="rounded-2xl border border-white/[0.08] bg-neutral-900/40 p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-lg font-medium text-white">{job.role}</h4>
          <span className="text-sm text-neutral-500">{job.mode}</span>
        </div>
        <ul className="mt-5 space-y-3">
          {job.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-400 md:text-base">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {job.stack.map((t) => (
            <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-xs text-neutral-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Three years, four teams."
        description="From frontend agency work to owning core modules of a SaaS ERP."
      />
      <Timeline data={data} />
    </section>
  );
}
