import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

// Aceternity UI — Text Generate Effect. Words wrapped in *asterisks* get the accent gradient.
export const TextGenerateEffect = ({ words, className, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      { duration, delay: stagger(0.06) }
    );
  }, [animate, duration]);

  return (
    <motion.span ref={scope} className={cn("inline", className)}>
      {wordsArray.map((word, idx) => {
        const accent = word.startsWith("*") && word.endsWith("*");
        return (
          <motion.span
            key={word + idx}
            className={cn("opacity-0", accent && "accent-gradient")}
            style={{ filter: "blur(10px)" }}
          >
            {accent ? word.slice(1, -1) : word}{" "}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
