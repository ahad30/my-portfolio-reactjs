import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

// Aceternity UI — card with a radial highlight that follows the cursor
export const SpotlightCard = ({ children, className, color = "rgba(34,211,238,0.12)", ...props }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-900/40 transition-colors hover:border-white/[0.16]",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
