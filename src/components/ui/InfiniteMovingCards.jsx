import { cn } from "../../lib/utils";

// Aceternity UI — Infinite Moving Cards (marquee). Items are duplicated in markup
// so the loop is seamless without DOM cloning.
export const InfiniteMovingCards = ({
  items,
  renderItem,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const duration = { fast: "20s", normal: "40s", slow: "80s" }[speed];

  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
      style={{
        "--animation-duration": duration,
        "--animation-direction": direction === "left" ? "forwards" : "reverse",
      }}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-4 py-2",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li key={idx} aria-hidden={idx >= items.length}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
