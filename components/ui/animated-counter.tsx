"use client";

import { useGsapCounter } from "@/hooks/use-gsap";

export function AnimatedCounter({
  from = 0,
  to,
  duration,
  format,
  className,
}: {
  from?: number;
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const ref = useGsapCounter({ from, to, duration, format });
  return <span ref={ref as React.Ref<HTMLSpanElement>} className={className} />;
}
