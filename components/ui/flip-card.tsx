"use client";

import type { ReactNode } from "react";
import { useState } from "react";

/**
 * 3D flip card — front by default, rotates 180° to reveal the back on hover.
 * On touch devices (no hover) the card toggles on tap so mobile users can
 * still see the back content.
 *
 * The container must have a defined height; pass `min-h-*` or `h-full` via
 * the `className` prop so both faces fill the same box.
 */
export function FlipCard({
  front,
  back,
  className = "",
}: {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`group relative h-full w-full [perspective:1200px] ${className}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          {front}
        </div>
        {/* Back face — pre-rotated 180° so it faces the camera when flipped */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}
