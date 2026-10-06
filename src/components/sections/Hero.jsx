import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { MovingBorderLink } from "../ui/MovingBorder";
import { profile, stats } from "../../data/portfolio";
import photo from "../../assets/images/profile/ahad.jpg";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden pb-20 pt-32"
    >
      {/* Grid background with radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_40%,transparent_100%)]" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#67e8f9" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.role} at Techzu
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="mb-4 font-mono text-sm text-neutral-400">
              Hi, I'm {profile.name}
            </motion.p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              <TextGenerateEffect words="Full-stack engineer building *ERP* *systems* and the business software teams run on." />
            </h1>

            <motion.p {...fadeUp(0.9)} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              3+ years shipping React, Node.js and PostgreSQL applications. I currently own the Sales,
              Purchase and Approval Workflow modules of a SaaS ERP modeled on SAP Business One.
            </motion.p>

            <motion.div {...fadeUp(1.1)} className="mt-10 flex flex-wrap items-center gap-4">
              <MovingBorderLink href="#work" duration={3500}>
                View my work <FiArrowUpRight className="h-4 w-4" />
              </MovingBorderLink>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full px-6 text-sm font-medium text-neutral-300 transition hover:text-white"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div {...fadeUp(1.2)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="h-4 w-4" /> {profile.location}
              </span>
              <span className="flex items-center gap-1">
                {[
                  { href: profile.github, Icon: FiGithub, label: "GitHub" },
                  { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
                  { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 via-transparent to-violet-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 p-2">
              <img
                src={photo}
                alt={profile.name}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
                fetchpriority="high"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 backdrop-blur-md">
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-300">Currently</p>
                <p className="mt-1 text-sm text-white">Sales · Purchase · Approval Workflows</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          {...fadeUp(1.4)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 p-5 md:p-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs leading-snug text-neutral-500 md:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
