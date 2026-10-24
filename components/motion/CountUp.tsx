"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";

/** "2,500+" → prefix "", number 2500, suffix "+". Null when there is no number. */
function parse(value: string) {
  const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return {
    prefix,
    suffix,
    target,
    decimals: digits.includes(".") ? digits.split(".")[1].length : 0,
    grouped: digits.includes(","),
  };
}

/**
 * Counts a stat up from zero the first time it is scrolled into view, keeping
 * whatever surrounds the number ("$", "+", "★"). The real value is what gets
 * rendered — on the server and for anyone who prefers reduced motion — and the
 * count only ever touches the text while it runs.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const parsed = parse(value);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true });
  const count = useSpring(0, { stiffness: 55, damping: 18 });

  useMotionValueEvent(count, "change", (latest) => {
    if (!ref.current || !parsed) return;
    const settled = Math.abs(latest - parsed.target) < 10 ** -parsed.decimals / 2;
    ref.current.textContent = settled
      ? value
      : parsed.prefix +
        latest.toLocaleString("en-US", {
          minimumFractionDigits: parsed.decimals,
          maximumFractionDigits: parsed.decimals,
          useGrouping: parsed.grouped,
        }) +
        parsed.suffix;
  });

  const target = parsed?.target;
  useEffect(() => {
    if (!inView || reduce || target === undefined) return;
    count.jump(0);
    count.set(target);
  }, [inView, reduce, target, count]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
