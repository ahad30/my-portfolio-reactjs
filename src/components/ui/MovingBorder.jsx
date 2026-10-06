import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "../../lib/utils";

// Aceternity UI — Moving Border button (renders an <a> so it works for links/downloads)
export function MovingBorderLink({
  borderRadius = "9999px",
  children,
  className,
  containerClassName,
  duration = 3000,
  ...props
}) {
  return (
    <a
      className={cn(
        "relative inline-flex h-12 overflow-hidden bg-transparent p-px text-sm",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div className="h-16 w-16 bg-[radial-gradient(#22d3ee_40%,transparent_60%)] opacity-90" />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center gap-2 border border-neutral-800 bg-neutral-950/90 px-6 font-medium text-white antialiased backdrop-blur-xl transition-colors hover:bg-neutral-900/90",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </a>
  );
}

const MovingBorder = ({ children, duration = 3000, rx, ry }) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}>
        {children}
      </motion.div>
    </>
  );
};
