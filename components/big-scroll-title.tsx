"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  /** Hacia dónde se desplaza el título a medida que baja el scroll. */
  direction?: "left" | "right";
  /** Contorno en vez de relleno sólido. */
  ghost?: boolean;
  id?: string;
};

/**
 * Título gigante que se desplaza horizontalmente según el scroll.
 *
 * Es un <h2> real (lo lee el lector de pantalla). El wrap recorta el desborde,
 * así el movimiento nunca genera scroll horizontal de la página. Con
 * prefers-reduced-motion queda quieto: no se aplica la transformación.
 */
export function BigScrollTitle({ children, direction = "left", ghost = false, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const from = direction === "left" ? "10%" : "-10%";
  const to = direction === "left" ? "-16%" : "16%";
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} id={id} className="big-title-wrap scroll-mt-28">
      <motion.h2
        className={`big-title${ghost ? " big-title--ghost" : ""}`}
        style={reduce ? undefined : { x }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
