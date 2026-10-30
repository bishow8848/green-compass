"use client";

import * as m from "framer-motion/m";
import { EASE_OUT } from "./presets";

/**
 * Animates its content between collapsed and its natural height.
 *
 * The content stays mounted while closed — it is still in the HTML for search
 * engines and for the first paint — and is made `inert` so it cannot be tabbed
 * into or read out while hidden.
 */
export function Collapse({
  open,
  className,
  children,
}: {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <m.div
      initial={false}
      animate={open ? "open" : "closed"}
      variants={{
        open: { height: "auto", opacity: 1 },
        closed: { height: 0, opacity: 0 },
      }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      inert={!open}
      className={className}
      style={{ overflow: "hidden" }}
    >
      {children}
    </m.div>
  );
}
