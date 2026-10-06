import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Aceternity UI — Timeline with a scroll-driven beam
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => setHeight(ref.current.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-24 first:pt-0 md:first:pt-0">
            <div className="sticky top-32 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950">
                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
              </div>
              <div className="hidden md:block md:pl-20">{item.title}</div>
            </div>
            <div className="relative w-full pl-16 pr-0 md:pl-4">
              <div className="mb-4 block md:hidden">{item.title}</div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-violet-500 from-[0%] via-cyan-400 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
