import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { TechIcon, techIcons } from "../ui/TechIcon";
import { skills } from "../../data/portfolio";

const marqueeTop = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Nest.js",
  "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Sequelize",
];
const marqueeBottom = [
  "Docker", "GitHub Actions", "Nginx", "AWS S3", "Sentry", "Socket.IO",
  "Puppeteer", "Redux", "Tailwind CSS", "Jest", "Postman", "Vercel",
];

const Chip = (name) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-neutral-900/60 px-5 py-3">
    <TechIcon name={name} className="h-5 w-5" />
    <span className="whitespace-nowrap text-sm text-neutral-200">{name}</span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="The stack behind the systems."
          description="From the data-entry grid to the job queue and the deploy pipeline."
        />
      </div>

      <div className="space-y-4">
        <InfiniteMovingCards items={marqueeTop} renderItem={Chip} speed="slow" />
        <InfiniteMovingCards items={marqueeBottom} renderItem={Chip} speed="slow" direction="right" />
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-x-10 gap-y-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 0.08}>
            <h3 className="mb-4 border-b border-white/[0.08] pb-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
              {s.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3 py-1 text-sm text-neutral-300"
                >
                  {techIcons[item] && <TechIcon name={item} className="h-3.5 w-3.5" />}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
