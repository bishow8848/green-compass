"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

const subscribe = () => () => undefined;
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Starts a little inside the viewport so the movement is seen, not missed. */
export const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -40px 0px" } as const;

/**
 * Open from page load until shortly after hydration. A Suspense boundary that
 * bails out to client rendering (anything reading `useSearchParams` on a
 * static page) swaps its server-rendered fallback for a client render during
 * this window — those elements were on screen a moment ago, so they are
 * treated like server HTML rather than hidden and re-animated.
 */
let bootWindowOpen = true;

export function closeBootWindow(afterMs: number) {
  window.setTimeout(() => {
    bootWindowOpen = false;
  }, afterMs);
}

/**
 * Decides how a scroll-revealed element should start.
 *
 * The server never renders anything hidden. Content that arrives in the HTML
 * is painted as-is, so it is visible without JavaScript, counts toward LCP the
 * moment it paints, and reads normally to crawlers. Only once the page has
 * hydrated does an element that sits *below* the viewport get tucked away
 * ("armed") so it can animate in when scrolled to. Anything already on screen
 * is left exactly as the server painted it.
 *
 * Elements created by a client-side navigation were never in any HTML, so they
 * simply start hidden and animate in — which is what gives each new page its
 * entrance.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  // True on the server and while hydrating its HTML; false for a fresh client mount.
  const hydrating = useSyncExternalStore(subscribe, () => false, () => true);
  const [fromServer] = useState(() => hydrating || bootWindowOpen);
  const [armed, setArmed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!fromServer) return;
    const el = ref.current;
    if (!el) return;
    // display:none (and collapsed) elements report a zero rect, so they stay
    // visible — an observer never fires for them and they would stay hidden.
    if (el.getBoundingClientRect().top >= window.innerHeight) setArmed(true);
  }, [fromServer]);

  return {
    ref,
    initial: fromServer ? (false as const) : "hidden",
    animate: armed ? "hidden" : undefined,
    whileInView: "visible",
    viewport: REVEAL_VIEWPORT,
  };
}
