"use client";

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  as?: "div" | "ul" | "ol" | "section" | "article";
  className?: string;
  /** Los hijos directos entran con stagger de 40ms (máximo 6). */
  stagger?: boolean;
  delay?: number;
  id?: string;
  children: ReactNode;
};

/**
 * Reveal al entrar en pantalla, una sola vez. Sólo para contenido debajo del
 * fold: el primer viewport se sirve ya visible desde el servidor.
 */
export function Reveal({
  as = "div",
  className,
  stagger = false,
  delay = 0,
  id,
  children,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return createElement(
    as,
    {
      ref,
      id,
      style,
      className: [stagger ? "reveal-group" : "reveal", className]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
}
