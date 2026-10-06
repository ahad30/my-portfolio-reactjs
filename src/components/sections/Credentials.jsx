import { FiArrowUpRight, FiAward, FiBookOpen } from "react-icons/fi";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { certifications, education } from "../../data/portfolio";

export default function Credentials() {
  return (
    <section id="credentials" className="section-shell pt-0 md:pt-0">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <SpotlightCard className="h-full p-7">
            <FiBookOpen className="h-6 w-6 text-cyan-300" />
            <p className="eyebrow mt-6">Education</p>
            <h3 className="mt-3 text-xl font-medium text-white">{education.degree}</h3>
            <p className="mt-2 text-neutral-400">{education.school}</p>
            <p className="mt-6 font-mono text-sm text-neutral-500">Graduated {education.year}</p>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full p-7" color="rgba(139,92,246,0.14)">
            <FiAward className="h-6 w-6 text-violet-300" />
            <p className="eyebrow mt-6 text-violet-300">Certifications & Training</p>
            <ul className="mt-4 divide-y divide-white/[0.06]">
              {certifications.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block text-white group-hover:text-violet-200">{c.title}</span>
                      <span className="text-sm text-neutral-500">{c.issuer}</span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
