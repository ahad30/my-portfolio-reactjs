import { motion } from "framer-motion";

// Fade/slide content in once when it scrolls into view
export const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Comp>
  );
};

export const SectionHeading = ({ eyebrow, title, description }) => (
  <Reveal className="mb-14 max-w-2xl md:mb-20">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className="heading-gradient text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">{description}</p>
    )}
  </Reveal>
);
