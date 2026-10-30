"use client";

import { useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { closeBootWindow } from "./useReveal";

/**
 * Site-wide Framer Motion setup.
 *
 * `LazyMotion` + the `m` components ship the animation engine once instead of
 * bundling it into every `motion.*` element; `strict` turns an accidental
 * `motion.*` import into an error so the saving can't quietly regress. The
 * features are loaded synchronously on purpose: reveals decide during
 * hydration whether to arm themselves, and that needs the engine present.
 *
 * `reducedMotion="user"` honours the visitor's OS setting — movement is
 * dropped, opacity changes are kept.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Runs once the shell has hydrated; see closeBootWindow.
  useEffect(() => closeBootWindow(1500), []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
