import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiGithub, FiKey } from "react-icons/fi";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { TechIcon } from "../ui/TechIcon";
import { cn } from "../../lib/utils";
import { erp, projects } from "../../data/portfolio";

function FlowRow({ label, steps, delayBase = 0 }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500">{label}</p>
      <div className="flex flex-wrap items-center gap-y-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delayBase + i * 0.12 }}
              className="whitespace-nowrap rounded-lg border border-white/10 bg-neutral-950/80 px-3 py-1.5 text-xs text-neutral-200 sm:text-sm"
            >
              {step}
            </motion.span>
            {i < steps.length - 1 && (
              <span className="relative mx-1.5 block h-px w-5 overflow-hidden bg-white/10 sm:w-8">
                <motion.span
                  className="absolute inset-y-0 w-3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: "linear" }}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedErp() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                Featured · Techzu
              </span>
              <span className="text-xs text-neutral-500">{erp.status}</span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">{erp.title}</h3>
            <p className="mt-4 leading-relaxed text-neutral-400">{erp.description}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {erp.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-neutral-300">
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/[0.08] bg-neutral-950/60 p-5 sm:p-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="ml-3 font-mono text-xs text-neutral-500">document-flow.ts</span>
            </div>
            <FlowRow label="Sales" steps={erp.salesFlow} />
            <FlowRow label="Purchase" steps={erp.purchaseFlow} delayBase={0.4} />
            <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.06] p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-violet-300">Approval engine</p>
              <p className="mt-1.5 text-sm text-neutral-300">
                Rule-based approvers → staged approvals → full audit history on every document.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {erp.stack.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-xs text-neutral-300">
                  <TechIcon name={t} className="h-3.5 w-3.5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, large }) {
  const { title, category, image, description, stack, link, repo, demo } = project;
  const primary = link || repo;

  return (
    <SpotlightCard className="flex h-full flex-col">
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        className="group/img relative block overflow-hidden border-b border-white/[0.08]"
        aria-label={`Open ${title}`}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            className={cn(
              "w-full object-cover object-top transition duration-700 group-hover/img:scale-[1.04]",
              large ? "aspect-[16/10]" : "aspect-[16/10]"
            )}
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.2),transparent_50%)]">
            <div className="flex gap-4">
              {stack.slice(0, 4).map((t) => (
                <span key={t} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/70">
                  <TechIcon name={t} className="h-6 w-6" />
                </span>
              ))}
            </div>
          </div>
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950/80 text-white opacity-0 backdrop-blur transition group-hover/img:opacity-100">
          <FiArrowUpRight className="h-4 w-4" />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">{category}</p>
        <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-neutral-400">
              {t}
            </span>
          ))}
        </div>

        {demo && (
          <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-neutral-500">
            <FiKey className="h-3 w-3 shrink-0" /> Demo: {demo}
          </p>
        )}

        <div className="mt-5 flex items-center gap-4 text-sm">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white hover:text-cyan-300">
              Live site <FiArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white">
              <FiGithub className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

const filters = ["All", "Full Stack", "Frontend"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && (filter === "All" || p.category === filter));

  return (
    <section id="work" className="section-shell">
      <SectionHeading
        eyebrow="03 — Selected Work"
        title="Systems in production."
        description="ERP, inventory, booking and government platforms, built with the teams that run on them."
      />

      <FeaturedErp />

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <ProjectCard project={p} large />
          </Reveal>
        ))}
      </div>

      <div className="mt-24 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-tight text-white">More projects</h3>
          <p className="mt-2 text-neutral-400">Client work and earlier builds.</p>
        </Reveal>
        <div className="flex gap-1 rounded-full border border-white/10 bg-neutral-900/50 p-1" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                filter === f ? "text-neutral-950" : "text-neutral-400 hover:text-white"
              )}
            >
              {filter === f && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 -z-0 rounded-full bg-white" transition={{ type: "spring", bounce: 0.2, duration: 0.45 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {rest.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
