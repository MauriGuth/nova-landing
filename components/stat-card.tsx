"use client";

import { useEffect, useRef, useState } from "react";
import { LineIllustration } from "./line-illustration";
import type { Stat } from "@/lib/site";

/**
 * Tarjeta de métrica: una ilustración de línea que se dibuja al entrar y un
 * número que cuenta desde 0. Con prefers-reduced-motion muestra el valor final
 * directo, sin animar. El HTML del servidor trae el valor real (lo que ven los
 * buscadores, las previsualizaciones y quien no tiene JS); recién en el cliente
 * se baja a 0 para animarlo.
 */
export function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(stat.value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setN(stat.value);
      return;
    }
    setN(0);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const dur = 1100;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(stat.value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="stat-card">
      <LineIllustration name={stat.illustration} />
      <div>
        <div className="stat-num">
          {stat.prefix}
          {n.toLocaleString("es-AR")}
          {stat.suffix}
        </div>
        <p className="stat-label mt-2">{stat.label}</p>
      </div>
    </div>
  );
}
