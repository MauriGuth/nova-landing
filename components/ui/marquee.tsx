"use client";

import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee — duplicates its children twice and animates
 * a single translate. Pauses on hover. Use for tech-stack badges, trust logos,
 * value-prop strips.
 */
export function Marquee({
  children,
  speed = 28,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex w-full overflow-hidden ${className}`}
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="flex shrink-0 animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
