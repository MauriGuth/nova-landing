"use client";

import { useEffect, useRef } from "react";
import type { Illustration } from "@/lib/site";

/** Trazos de cada motivo. Cada path lleva pathLength=1 para un dibujo normalizado. */
const PATHS: Record<Illustration, string[]> = {
  // Cama de hotel (NovaStay)
  cama: [
    "M22 36v54M22 72h76v18",
    "M50 72V58h38a10 10 0 0 1 10 10v4",
    "M30 64h12",
  ],
  // Tarjeta de fidelización con estrella (NovaPoints)
  tarjeta: [
    "M24 30h72a6 6 0 0 1 6 6v48a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6Z",
    "M60 42l4.7 9.5 10.5 1.5-7.6 7.4 1.8 10.4L60 66l-9.4 4.8 1.8-10.4-7.6-7.4 10.5-1.5Z",
    "M30 80h14",
  ],
  // Globo de chat (Jarvis por WhatsApp)
  chat: [
    "M28 26h64a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H58L42 94V80H28a8 8 0 0 1-8-8V34a8 8 0 0 1 8-8Z",
    "M36 46h48",
    "M36 60h30",
  ],
  // Tablet de punto de venta (Nova POS)
  tablet: [
    "M34 20h52a6 6 0 0 1 6 6v68a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6Z",
    "M42 40h36M42 54h36M42 68h24",
    "M52 88h16",
  ],
  // Comandera / impresora de comandas con espiral
  comandera: [
    "M34 36h52v62H34z",
    "M42 36v-8M52 36v-8M62 36v-8M72 36v-8",
    "M44 54h32M44 66h32M44 78h20",
  ],
  // Ticket con borde dentado
  ticket: [
    "M38 24v74l6-5 6 5 6-5 6 5 6-5 6 5 6-5V24z",
    "M48 44h28M48 56h28",
    "M48 68h16",
  ],
};

/**
 * Ilustración de línea continua que se dibuja al entrar en pantalla.
 * Respeta prefers-reduced-motion (aparece ya dibujada, sin transición: lo
 * resuelve el CSS de .line-draw).
 */
export function LineIllustration({
  name,
  size = 56,
  className,
}: {
  name: Illustration;
  size?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-drawn");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-drawn");
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`line-draw${className ? ` ${className}` : ""}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="var(--accent-ink)"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name].map((d, i) => (
        <path key={i} d={d} pathLength={1} />
      ))}
    </svg>
  );
}
