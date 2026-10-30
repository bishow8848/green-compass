"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import * as m from "framer-motion/m";
import { SPRING_SNAPPY } from "./presets";

const MLink = m.create(Link);

interface PressFeel {
  /** Px the element rises on hover. 0 turns the lift off. */
  lift?: number;
  /** Scale while pressed. */
  press?: number;
}

function gestures(lift: number, press: number) {
  return {
    whileHover: lift ? { y: -lift } : undefined,
    whileTap: { scale: press },
    transition: SPRING_SNAPPY,
  };
}

/**
 * A `next/link` that lifts on hover and gives under the finger. Because Motion
 * drives its transform, the element's own classes should transition colours
 * and shadows only — `transition-all` would fight the spring.
 */
export function MotionLink({
  lift = 2,
  press = 0.97,
  ...props
}: ComponentProps<typeof MLink> & PressFeel) {
  return <MLink {...gestures(lift, press)} {...props} />;
}

/** Plain anchor (external links, `tel:`, `mailto:`) with the same feel. */
export function MotionAnchor({
  lift = 2,
  press = 0.97,
  ...props
}: ComponentProps<typeof m.a> & PressFeel) {
  return <m.a {...gestures(lift, press)} {...props} />;
}

/** Button with the same feel. Disabled buttons stay still. */
export function MotionButton({
  lift = 0,
  press = 0.96,
  ...props
}: ComponentProps<typeof m.button> & PressFeel) {
  const feel = props.disabled ? {} : gestures(lift, press);
  return <m.button {...feel} {...props} />;
}
