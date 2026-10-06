import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { cn } from "../../lib/utils";
import resume from "../../assets/documents/Mohiminul_Islam_SWE_3Y.pdf";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "relative flex w-full max-w-3xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300",
          scrolled
            ? "border-white/10 bg-neutral-950/70 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
        aria-label="Main"
      >
        <a href="#home" className="flex items-center gap-2 pl-2 font-mono text-sm font-medium text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-[11px] font-bold text-neutral-950">
            MA
          </span>
          <span className="hidden sm:inline">ahad.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === link.id ? "text-white" : "text-neutral-400 hover:text-white"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resume}
            download="Mohiminul_Islam_Ahad_CV.pdf"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 sm:inline-flex"
          >
            <FiDownload className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-white/10 bg-neutral-950/95 p-3 backdrop-blur-xl md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base",
                    active === link.id ? "bg-white/[0.06] text-white" : "text-neutral-400"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resume}
                download="Mohiminul_Islam_Ahad_CV.pdf"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 font-medium text-neutral-950"
              >
                <FiDownload className="h-4 w-4" /> Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
