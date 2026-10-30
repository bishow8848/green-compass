"use client";

import { useScroll, useSpring } from "framer-motion";
import * as m from "framer-motion/m";

/**
 * Reading-progress bar pinned to the top edge, for long pages (articles, trek
 * itineraries). Sits just above the sticky header (z-50) and below the mobile
 * drawer and modals.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[51] h-[3px] origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
