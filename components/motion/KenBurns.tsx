"use client";

import * as m from "framer-motion/m";
import { EASE_OUT } from "./presets";

const ZOOMS = {
  /** Settles from slightly close to rest — the default hero entrance. */
  out: { from: 1.08, to: 1, duration: 2.4 },
  /** A slow push in that lasts as long as anyone stays on the hero. */
  in: { from: 1, to: 1.15, duration: 20 },
} as const;

/**
 * Slow zoom for a full-bleed hero image. Only the scale moves: the image is
 * painted at full opacity from the first frame, so it still counts as the
 * page's LCP the moment it arrives. Fills its positioned parent.
 */
export function KenBurns({
  children,
  zoom = "out",
  className = "",
}: {
  children: React.ReactNode;
  zoom?: keyof typeof ZOOMS;
  className?: string;
}) {
  const { from, to, duration } = ZOOMS[zoom];
  return (
    <m.div
      className={`absolute inset-0 ${className}`}
      initial={{ scale: from }}
      animate={{ scale: to }}
      transition={{ duration, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}
