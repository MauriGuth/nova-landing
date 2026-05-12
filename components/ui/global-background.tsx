"use client";

import { Particles } from "@/components/ui/particles";
import { MouseParallax } from "@/components/ui/mouse-parallax";

/**
 * Page-wide decorative background — the gradient mesh, faint grid, drifting
 * particles and slow glow orbs that used to live only inside the hero. Mounted
 * once at the page root as a fixed layer so the same atmosphere persists as
 * the user scrolls through every section.
 */
export function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          backgroundSize: "400% 400%",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.22) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.18) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(16,185,129,0.09) 0%, transparent 50%)",
        }}
      />

      {/* Faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particle field (interactive, repels from cursor) — denser and a bit
          bigger than hero-only so the dots stay visible on every section */}
      <Particles
        density={140}
        minSize={1}
        maxSize={5}
        minOpacity={0.25}
        maxOpacity={0.9}
        className="absolute inset-0 h-full w-full"
      />

      {/* Drifting glow orbs with subtle mouse parallax */}
      <MouseParallax intensity={20} className="absolute inset-0">
        <div className="absolute -left-64 top-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl animate-orb-drift" />
        <div className="absolute -right-64 bottom-1/3 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl animate-orb-drift-reverse" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl animate-pulse" />
      </MouseParallax>
    </div>
  );
}
