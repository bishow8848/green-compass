"use client";

import { Plus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { Disclosure, Reveal } from "@/components/motion";
import { SPRING_SNAPPY } from "@/components/motion/presets";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  heading?: string | null;
  description?: string | null;
  /**
   * Unique id prefix for the section, used for the heading ID and schema.
   * This allows multiple FAQAccordion instances on the same page.
   * @default "faq"
   */
  id?: string;
  /**
   * Extra classes for the section element. When provided, replaces the default
   * vertical padding (so callers can match their page's section spacing).
   */
  className?: string;
  /**
   * When true, wraps content in a centered max-w-7xl container (matching
   * standalone homepage sections). Set to false when rendering inside an
   * already-width-constrained layout (e.g. the trek detail page) so the
   * section spans the same width as its sibling sections.
   * @default true
   */
  contained?: boolean;
  /**
   * Text scale. "lg" matches long-form article text (blog posts); the
   * default suits the compact sections of the trek detail page.
   * @default "base"
   */
  size?: "base" | "lg";
}

/** One question; the open/close mechanics live in Disclosure. */
function FAQRow({ item, index, large }: { item: FAQItem; index: number; large: boolean }) {
  return (
    <Disclosure
      defaultOpen={index === 0}
      className="group relative rounded-2xl border border-border bg-surface transition-colors data-[state=open]:border-primary/30"
      summaryClassName="flex cursor-pointer list-none items-start gap-4 rounded-2xl px-4 py-4 marker:content-none [&::-webkit-details-marker]:hidden"
      summary={(expanded) => (
        <>
          {/* Question number marker — swaps to a dot while open */}
          <span
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {expanded ? (
                <m.span
                  key="dot"
                  className="block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={SPRING_SNAPPY}
                />
              ) : (
                <m.span
                  key="number"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                >
                  {index + 1}
                </m.span>
              )}
            </AnimatePresence>
          </span>

          <div className="min-w-0 flex-1 pt-1.5">
            <div className="flex items-center justify-between gap-3">
              <span
                className={large ? "text-base font-semibold sm:text-lg" : "text-sm font-semibold"}
                style={{ color: "var(--color-foreground)" }}
              >
                {item.question}
              </span>
              <m.span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
                initial={false}
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={SPRING_SNAPPY}
              >
                <Plus
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--color-primary)" }}
                />
              </m.span>
            </div>
          </div>
        </>
      )}
    >
      <div
        className="ml-14 mr-4 mb-5 border-t pt-4"
        style={{ borderColor: "var(--color-border)" }}
      >
        <p
          className={large ? "text-base leading-relaxed sm:text-lg" : "text-sm leading-relaxed"}
          style={{ color: "var(--color-text)" }}
        >
          {item.answer}
        </p>
      </div>
    </Disclosure>
  );
}

export function FAQAccordion({
  items,
  heading,
  description,
  id = "faq",
  className,
  contained = true,
  size = "base",
}: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  const resolvedHeading = heading || "Frequently Asked Questions";
  const resolvedDescription = description || undefined;
  const large = size === "lg";

  return (
    <section id={id} className={`bg-background ${className || "py-16 sm:py-20"}`}>
      <div className={contained ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : "w-full"}>
        {resolvedHeading && (
          <Reveal
            as="h2"
            id={`${id}-heading`}
            className={large ? "mb-2 text-2xl font-bold sm:text-3xl" : "mb-2 text-2xl font-bold"}
            style={{ color: "var(--color-secondary)" }}
          >
            {resolvedHeading}
          </Reveal>
        )}
        {resolvedDescription && (
          <Reveal
            as="p"
            delay={0.06}
            className={large ? "mb-8 text-base" : "mb-8 text-sm"}
            style={{ color: "var(--color-text-muted)" }}
          >
            {resolvedDescription}
          </Reveal>
        )}

        <div className="space-y-3">
        {items.map((item, i) => (
          <Reveal key={i} delay={Math.min(i, 6) * 0.05}>
            <FAQRow item={item} index={i} large={large} />
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  );
}
