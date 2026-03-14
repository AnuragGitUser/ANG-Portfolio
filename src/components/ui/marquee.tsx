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
    ? direction === "up" ? "marquee-scroll-y" : "marquee-scroll-y-reverse"
    : direction === "left" ? "marquee-scroll" : "marquee-scroll-reverse";

  const fadeStyle = fade
    ? {
        maskImage: isVertical
          ? `linear-gradient(to bottom, transparent, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent)`
          : `linear-gradient(to right, transparent, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent)`,
        WebkitMaskImage: isVertical
          ? `linear-gradient(to bottom, transparent, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent)`
          : `linear-gradient(to right, transparent, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent)`,
      }
    : {};

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={fadeStyle}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      {...props}
    >
      <div
        className={cn("flex", isVertical && "flex-col")}
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((item, index) => (
          <div key={`first-${index}`} className="shrink-0">
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="shrink-0" aria-hidden>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
