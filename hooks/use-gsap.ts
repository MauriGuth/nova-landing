"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Animate a numeric counter from `from` to `to` when the element enters the viewport.
 * Accepts a `format` function so we can render "99.9%", "3+", etc.
 */
export function useGsapCounter({
  from = 0,
  to,
  duration = 1.6,
  format = (n: number) => String(Math.round(n)),
}: {
  from?: number;
  to: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const state = { v: from };
      el.textContent = format(from);

      const animate = () =>
        gsap.to(state, {
          v: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = format(state.v);
          },
        });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate();
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope: ref }
  );

  return ref;
}
