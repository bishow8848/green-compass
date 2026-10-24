"use client";

import { useMemo } from "react";
import { stagger, type MotionStyle } from "framer-motion";
import * as m from "framer-motion/m";
import { DISTANCE, DURATION, EASE_OUT, STAGGER, hiddenOffset, type RevealFrom } from "./presets";
import { useReveal } from "./useReveal";

/** Tags a reveal can render as, so wrappers never change the document outline. */
export type MotionTag =
  | "div" | "main" | "section" | "article" | "aside" | "header" | "footer" | "nav"
  | "ul" | "ol" | "li" | "span" | "p" | "h1" | "h2" | "h3" | "h4"
  | "figure" | "blockquote" | "form" | "dl" | "label";

// Motion's own handlers for these names take different arguments.
type PassthroughProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "style"
> & { style?: React.CSSProperties };

function itemVariants(from: RevealFrom, distance: number, duration: number, delay: number) {
  return {
    // Arming an off-screen element must not be seen, so it does not animate.
    hidden: { opacity: 0, ...hiddenOffset(from, distance), transition: { duration: 0 } },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      transition: { duration, delay, ease: EASE_OUT },
    },
  };
}

interface RevealProps extends PassthroughProps {
  as?: MotionTag;
  /** Direction the element arrives from. */
  from?: RevealFrom;
  /** Seconds to wait after entering the viewport. */
  delay?: number;
  duration?: number;
  /** Travel distance in px. */
  distance?: number;
}

/** Fades and slides its content in the first time it is scrolled into view. */
export function Reveal({
  as = "div",
  from = "bottom",
  delay = 0,
  duration = DURATION.base,
  distance = DISTANCE,
  style,
  children,
  ...rest
}: RevealProps) {
  const reveal = useReveal<HTMLDivElement>();
  const variants = useMemo(
    () => itemVariants(from, distance, duration, delay),
    [from, distance, duration, delay]
  );
  const Tag = m[as] as typeof m.div;

  return (
    <Tag data-reveal="" variants={variants} style={style as MotionStyle} {...rest} {...reveal}>
      {children}
    </Tag>
  );
}

interface StaggerProps extends PassthroughProps {
  as?: MotionTag;
  /** Seconds between one child and the next. */
  gap?: number;
  /** Seconds before the first child starts. */
  delay?: number;
}

/**
 * Reveals its `StaggerItem` children one after another when the group scrolls
 * into view. Meant for groups that fit on screen together — a heading stack, a
 * row of stats. For long grids, give each card its own `Reveal` so lower rows
 * wait until they are actually scrolled to.
 */
export function Stagger({ as = "div", gap = STAGGER, delay = 0, style, children, ...rest }: StaggerProps) {
  const reveal = useReveal<HTMLDivElement>();
  const variants = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { delayChildren: stagger(gap, { startDelay: delay }) } },
    }),
    [gap, delay]
  );
  const Tag = m[as] as typeof m.div;

  return (
    <Tag variants={variants} style={style as MotionStyle} {...rest} {...reveal}>
      {children}
    </Tag>
  );
}

interface StaggerItemProps extends PassthroughProps {
  as?: MotionTag;
  from?: RevealFrom;
  duration?: number;
  distance?: number;
}

/** One step of a `Stagger`. Its timing comes from the parent group. */
export function StaggerItem({
  as = "div",
  from = "bottom",
  duration = DURATION.base,
  distance = DISTANCE,
  style,
  children,
  ...rest
}: StaggerItemProps) {
  const variants = useMemo(
    () => itemVariants(from, distance, duration, 0),
    [from, distance, duration]
  );
  const Tag = m[as] as typeof m.div;

  return (
    <Tag data-reveal="" variants={variants} style={style as MotionStyle} {...rest}>
      {children}
    </Tag>
  );
}
