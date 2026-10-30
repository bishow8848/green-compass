"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, X } from "lucide-react";
import * as m from "framer-motion/m";
import { SPRING_SNAPPY, SPRING_SOFT } from "@/components/motion/presets";

export function MobileFilterSheet({
  resultsCount,
  children,
}: {
  resultsCount: number;
  children: (args: { close: () => void }) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <m.button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        whileTap={{ scale: 0.98 }}
        transition={SPRING_SNAPPY}
        className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-left transition-colors hover:border-primary/40 lg:hidden"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filters
        </span>
        <span className="text-sm text-text-muted">{resultsCount} results</span>
      </m.button>

      {mounted &&
        createPortal(
          // Stays mounted while closed so the filter controls keep their state;
          // `visibility` is dropped only after the sheet has slid away.
          <m.div
            className={`fixed inset-0 flex flex-col ${open ? "" : "pointer-events-none"}`}
            style={{ zIndex: 999999 }}
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              open: { opacity: 1, visibility: "visible", transition: { duration: 0.2 } },
              closed: { opacity: 0, transition: { duration: 0.25, delay: 0.1 }, transitionEnd: { visibility: "hidden" } },
            }}
          >
            {/* Backdrop */}
            <button
              aria-label="Close filters"
              onClick={() => setOpen(false)}
              className="absolute inset-0 z-0 cursor-pointer bg-black/50 backdrop-blur-[2px]"
            />

            {/* Panel */}
            <m.div
              className="relative z-10 mt-auto flex max-h-[85dvh] flex-col overflow-hidden rounded-t-2xl bg-surface shadow-2xl"
              variants={{
                open: { y: 0, transition: SPRING_SOFT },
                closed: { y: "100%", transition: { duration: 0.28, ease: [0.65, 0, 0.35, 1] } },
              }}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-border bg-surface px-5 py-4">
                <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-muted">
                    {resultsCount} results
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-full bg-surface-alt p-2 text-text-muted transition hover:bg-border hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-8 pt-2">
                {children({ close: () => setOpen(false) })}
              </div>
            </m.div>
          </m.div>,
          document.body
        )}
    </>
  );
}
