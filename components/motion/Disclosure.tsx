"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useAnimationControls } from "framer-motion";
import * as m from "framer-motion/m";
import { EASE_OUT } from "./presets";

/**
 * A native <details> whose content slides open and closed.
 *
 * Every panel stays in the HTML (for search engines, and so it still opens
 * without JavaScript); once hydrated the toggle is taken over so the height
 * can animate. The `open` attribute is only removed after the closing
 * animation, since <details> hides its content the instant it goes.
 *
 * Open state is mirrored to `data-state="open" | "closed"`, so the summary can
 * style itself with `group-data-[state=open]:` from a server component, or
 * take `summary` as a function of the open state from a client one.
 */
export function Disclosure({
  defaultOpen = false,
  summary,
  summaryClassName,
  className,
  style,
  children,
}: {
  defaultOpen?: boolean;
  summary: React.ReactNode | ((open: boolean) => React.ReactNode);
  summaryClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const [openAttr, setOpenAttr] = useState(defaultOpen);
  const controls = useAnimationControls();
  const toggled = useRef(false);

  // Layout effect: the collapsed size must be set before the newly opened
  // <details> is painted, or the full panel flashes for a frame.
  useLayoutEffect(() => {
    if (!toggled.current) return;
    let cancelled = false;
    if (expanded) {
      controls.set({ height: 0, opacity: 0 });
      controls.start({ height: "auto", opacity: 1, transition: { duration: 0.35, ease: EASE_OUT } });
    } else {
      controls
        .start({ height: 0, opacity: 0, transition: { duration: 0.25, ease: EASE_OUT } })
        .then(() => {
          if (!cancelled) setOpenAttr(false);
        });
    }
    return () => {
      cancelled = true;
    };
  }, [expanded, controls]);

  return (
    <details className={className} style={style} open={openAttr} data-state={expanded ? "open" : "closed"}>
      <summary
        onClick={(e) => {
          e.preventDefault();
          toggled.current = true;
          if (!expanded) setOpenAttr(true);
          setExpanded(!expanded);
        }}
        className={summaryClassName}
      >
        {typeof summary === "function" ? summary(expanded) : summary}
      </summary>
      <m.div animate={controls} style={{ overflow: "hidden" }}>
        {children}
      </m.div>
    </details>
  );
}
