import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right" | "up" | "down";
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = false,
  direction = "left",
  fade = true,
  fadeAmount = 10,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);

  const items = React.Children.toArray(children);
  const isVertical = direction === "up" || direction === "down";

  const animationName = isVertical
    ? direction === "up"
      ? "scroll-y"
      : "scroll-y-reverse"
    : direction === "left"
      ? "scroll"
      : "scroll-reverse";

  return (
    <>
      <style>
        {`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes scroll-y {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scroll-y-reverse {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .marquee-scroller {
          display: flex;
          animation: ${animationName} ${duration}s linear infinite;
        }
        .marquee-scroller.paused {
          animation-play-state: paused;
        }
        `}
      </style>
      <div
        className={cn(
          "overflow-hidden",
          fade &&
            (isVertical
              ? `[mask-image:linear-gradient(to_bottom,transparent,black_${fadeAmount}%,black_${100 - fadeAmount}%,transparent)]`
              : `[mask-image:linear-gradient(to_right,transparent,black_${fadeAmount}%,black_${100 - fadeAmount}%,transparent)]`),
          className
        )}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        <div
          className={cn(
            "marquee-scroller",
            isPaused && "paused",
            isVertical && "flex-col"
          )}
        >
          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              {item}
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
