"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingText({
  words,
  interval = 2600,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, words.length]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <span aria-hidden className="invisible whitespace-nowrap">
        {widest}
      </span>
      <span
        className="absolute inset-0"
        // Extend clip area 0.35em below so descenders (g, p, y) aren't cut off
        style={{ clipPath: "inset(-0.05em 0 -0.35em 0)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: "85%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-85%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block whitespace-nowrap gradient-text-animated"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
