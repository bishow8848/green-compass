/**
 * Shared motion vocabulary. Every animated component reads its easing, timing
 * and springs from here so the site moves as one system rather than as a
 * collection of one-off effects.
 */

/** Entrances: fast out of the gate, long gentle settle. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
/** Exits and anything leaving the screen. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.6,
  slow: 0.9,
} as const;

/** Menus, toggles, taps — anything that answers a pointer. */
export const SPRING_SNAPPY = { type: "spring", stiffness: 420, damping: 34, mass: 0.9 } as const;
/** Panels and sheets that travel further. */
export const SPRING_SOFT = { type: "spring", stiffness: 260, damping: 30 } as const;

/** Gap between siblings in a staggered group, in seconds. */
export const STAGGER = 0.08;

/** How far an element travels on its way in, in px. */
export const DISTANCE = 24;

/**
 * Where a revealed element starts from. "scale" is a gentle settle, "pop" a
 * bigger one for small badges and dots. "draw" and "grow" stretch the element
 * out from its transform origin, along Y (spines) and X (bars, rules).
 */
export type RevealFrom = "bottom" | "top" | "left" | "right" | "scale" | "pop" | "draw" | "grow" | "none";

/** The resting-hidden offset for each direction. */
export function hiddenOffset(from: RevealFrom, distance: number) {
  switch (from) {
    case "bottom":
      return { y: distance };
    case "top":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    case "scale":
      return { scale: 0.94 };
    case "pop":
      return { scale: 0.5 };
    case "draw":
      return { scaleY: 0 };
    case "grow":
      return { scaleX: 0 };
    case "none":
      return {};
  }
}
