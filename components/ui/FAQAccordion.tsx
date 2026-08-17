"use client";

import { Plus } from "lucide-react";

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
}

export function FAQAccordion({
  items,
  heading,
  description,
  id = "faq",
  className,
  contained = true,
}: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  const resolvedHeading = heading || "Frequently Asked Questions";
  const resolvedDescription = description || undefined;

  return (
    <section id={id} className={`bg-background ${className || "py-16 sm:py-20"}`}>
      <div className={contained ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : "w-full"}>
        {resolvedHeading && (
          <h2
            id={`${id}-heading`}
            className="mb-2 text-2xl font-bold"
            style={{ color: "var(--color-secondary)" }}
          >
            {resolvedHeading}
          </h2>
        )}
        {resolvedDescription && (
          <p
            className="mb-8 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {resolvedDescription}
          </p>
        )}

        <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group relative rounded-2xl border transition-colors"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-start gap-4 rounded-2xl px-4 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
              {/* Question number marker */}
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span className="group-open:hidden">{i + 1}</span>
                <span
                  className="hidden h-2.5 w-2.5 rounded-full group-open:block"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </span>

              <div className="min-w-0 flex-1 pt-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-45"
                    style={{ backgroundColor: "var(--color-surface-alt)" }}
                  >
                    <Plus
                      className="h-3.5 w-3.5"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </span>
                </div>
              </div>
            </summary>

            <div
              className="ml-14 mr-4 mb-5 border-t pt-4"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                {item.answer}
              </p>
            </div>
          </details>
        ))}
        </div>
      </div>
    </section>
  );
}
