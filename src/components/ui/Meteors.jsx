import { useMemo } from "react";
import { cn } from "../../lib/utils";

// Aceternity UI — Meteors
export const Meteors = ({ number = 20, className }) => {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, () => ({
        left: Math.floor(Math.random() * 800 - 400),
        delay: Math.random() * 0.6 + 0.2,
        duration: Math.floor(Math.random() * 8 + 2),
      })),
    [number]
  );

  return meteors.map((m, idx) => (
    <span
      key={idx}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10]",
        "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
        className
      )}
      style={{
        top: 0,
        left: m.left + "px",
        animationDelay: m.delay + "s",
        animationDuration: m.duration + "s",
      }}
    />
  ));
};
