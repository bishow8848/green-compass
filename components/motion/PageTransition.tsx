"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAnimationControls } from "framer-motion";
import * as m from "framer-motion/m";
import { EASE_OUT } from "./presets";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Fades the page in after each client-side navigation.
 *
 * It is driven from the pathname rather than by remounting on a `key`, so the
 * layouts underneath keep their state. The first load is left alone: that HTML
 * is already painted and must not be hidden again.
 *
 * Opacity only, never a transform — a transformed ancestor becomes the
 * containing block for `position: fixed`, which would drag the trek page's
 * section nav and every modal along with it.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const controls = useAnimationControls();
  // Compared by value, not "first render", so Strict Mode's double effect
  // run in development can't fade the initial page.
  const shownPath = useRef(pathname);

  useIsomorphicLayoutEffect(() => {
    if (shownPath.current === pathname) return;
    shownPath.current = pathname;
    controls.start({ opacity: [0, 1], transition: { duration: 0.4, ease: EASE_OUT } });
  }, [pathname, controls]);

  return <m.div animate={controls}>{children}</m.div>;
}
