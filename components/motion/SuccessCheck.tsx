"use client";

import * as m from "framer-motion/m";
import { EASE_OUT } from "./presets";

/**
 * A tick that draws itself: the ring traces round, then the check strokes in.
 * Purely decorative — the page's heading carries the message — so it is fine
 * that it only appears once the page is interactive. Colour comes from
 * `currentColor`; size it with className (e.g. "h-14 w-14 text-primary").
 */
export function SuccessCheck({ className }: { className?: string }) {
  return (
    <m.svg
      viewBox="0 0 52 52"
      className={className}
      aria-hidden="true"
      initial="hidden"
      animate="visible"
    >
      <m.circle
        cx="26"
        cy="26"
        r="23"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity={0.25}
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { duration: 0.6, ease: EASE_OUT } },
        }}
      />
      <m.path
        d="M15.5 27 22.5 34 37 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { delay: 0.45, duration: 0.4, ease: EASE_OUT } },
        }}
      />
    </m.svg>
  );
}
