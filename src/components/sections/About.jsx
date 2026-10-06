import { FiDatabase, FiGitMerge, FiLayers, FiServer } from "react-icons/fi";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { profile } from "../../data/portfolio";

const pillars = [
  {
    Icon: FiGitMerge,
    title: "Business workflows, end to end",
    body: "Quotation to invoice, PO to AP invoice, multi-level approvals with audit history. I model how a business actually operates, then build it.",
    className: "md:col-span-2",
  },
  {
    Icon: FiDatabase,
    title: "Data that holds up",
    body: "Relational PostgreSQL schemas for transactional data, document linking across modules, and MongoDB/MySQL where they fit.",
  },
  {
    Icon: FiLayers,
    title: "Interfaces for power users",
    body: "Dense ERP forms and data grids designed for fast, accurate data entry.",
  },
  {
    Icon: FiServer,
    title: "Production-minded",
    body: "Docker, GitHub Actions CI/CD, Nginx, Redis and BullMQ queues, Sentry monitoring, and staging / UAT / production environments.",
    className: "md:col-span-2",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="01 — About" title="Software for the way businesses run." />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-neutral-300">{profile.summary}</p>
          <p className="mt-6 leading-relaxed text-neutral-400">
            Before ERP, I built warehouse, turf booking, hotel booking and government grievance systems
            across agencies and in-house teams. That range taught me to ship on deadlines and to keep
            production systems healthy long after launch.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map(({ Icon, title, body, className }, i) => (
            <Reveal key={title} delay={i * 0.08} className={className}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
