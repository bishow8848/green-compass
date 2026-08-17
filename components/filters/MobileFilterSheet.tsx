"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, X } from "lucide-react";

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
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 text-left transition hover:border-primary/40 lg:hidden"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filters
        </span>
        <span className="text-sm text-text-muted">{resultsCount} results</span>
      </button>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 flex flex-col transition-opacity duration-200 ${
              open
                ? "visible opacity-100"
                : "invisible opacity-0 pointer-events-none"
            }`}
            style={{ zIndex: 999999 }}
          >
            {/* Backdrop */}
            <button
              aria-label="Close filters"
              onClick={() => setOpen(false)}
              className="absolute inset-0 z-0 cursor-pointer bg-black/50 backdrop-blur-[2px]"
            />

            {/* Panel */}
            <div
              className={`relative z-10 mt-auto flex max-h-[85dvh] flex-col overflow-hidden rounded-t-2xl bg-surface shadow-2xl transition-transform duration-300 ease-out ${
                open ? "translate-y-0" : "translate-y-8"
              }`}
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
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
