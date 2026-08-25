"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

/** A trek entry that can appear inside the mega menu. */
export interface MegaMenuTrek {
  id: string;
  title: string;
  slug: string;
  region?: string | null;
}

/** A region tab plus its treks, rendered inside a mega menu. */
export interface MegaMenuGroup {
  region: string;
  treks: MegaMenuTrek[];
}

interface HeaderMegaMenuProps {
  /** Nav label of the parent item, e.g. "Treks". */
  label: string;
  /** Category href, e.g. "/treks". Used to build trek links. */
  href: string;
  /** Region groups — shown as tabs on the left pane. */
  groups: MegaMenuGroup[];
  /** Whether the dropdown is currently open. */
  isOpen: boolean;
  /** Currently active region tab (name). */
  activeRegion: string | null;
  /** Called when the user hovers/focuses a region tab. */
  onRegionChange: (region: string) => void;
  /** Called when the user clicks a link to navigate (closes the menu). */
  onNavigate: () => void;
  /** Called when Escape is pressed inside the menu (closes + returns focus). */
  onEscape: () => void;
  /** Current pathname, for active-state styling. */
  pathname: string;
  /** Hover handlers forwarded from the header (keep the menu open). */
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  /** Horizontal placement (px, relative to the header root). */
  left: number;
  /** Panel width (px). */
  width: number;
}

/**
 * Full-width "mega menu" dropdown shown beneath the header on hover.
 * Left pane lists every region as a tab; hovering a region swaps the right
 * pane to show that region's treks (in the spirit of magicalnepal.com).
 * The panel is absolutely positioned below the sticky header, so it spans
 * the full container width without overflowing the viewport.
 */
export function HeaderMegaMenu({
  label,
  href,
  groups,
  isOpen,
  activeRegion,
  onRegionChange,
  onNavigate,
  onEscape,
  pathname,
  onMouseEnter,
  onMouseLeave,
  left,
  width,
}: HeaderMegaMenuProps) {
  // Fall back to the first region whenever the active one isn't available.
  const activeGroup = groups.find((g) => g.region === activeRegion) ?? groups[0] ?? null;
  // The menu's height follows the regions column. We measure that column and
  // cap the trek list to the remaining space, so a region with many treks
  // scrolls internally instead of growing the menu taller than the regions.
  const leftPaneRef = useRef<HTMLDivElement | null>(null);
  const [leftPaneHeight, setLeftPaneHeight] = useState(0);

  useEffect(() => {
    const el = leftPaneRef.current;
    if (!el) return;
    const measure = () => setLeftPaneHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [groups.length]);

  // ~36px of fixed chrome on the right (the region title header).
  const listMaxHeight = leftPaneHeight > 0 ? Math.max(140, Math.round(leftPaneHeight - 36)) : 200;

  return (
    <div
      data-mega-panel="true"
      role="menu"
      aria-label={`${label} submenu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onMouseEnter}
      style={{ left, width }}
      className={`absolute top-full z-40 transition-all duration-200 ease-out ${
        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
      }`}
    >
      {/* Flush against the header (no top border / gap) — the header's own
          bottom border acts as the divider. */}
      <div className="overflow-hidden rounded-b-2xl border border-t-0 border-border bg-surface shadow-lg shadow-black/10">
        <div className="flex">
            {/* ── Left pane: region tabs (drives the menu height) ── */}
            <div
              ref={leftPaneRef}
              className="flex w-52 shrink-0 self-start flex-col border-r border-border bg-surface-alt/70 max-h-[calc(100vh-130px)]"
            >
              <div className="shrink-0 px-4 pb-1.5 pt-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Regions</p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
                {groups.map((group) => {
                  const isRegionActive = activeGroup?.region === group.region;
                  return (
                    <button
                      key={group.region}
                      type="button"
                      role="menuitem"
                      aria-current={isRegionActive ? "true" : undefined}
                      onMouseEnter={() => onRegionChange(group.region)}
                      onFocus={() => onRegionChange(group.region)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          onEscape();
                        }
                        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                          e.preventDefault();
                          const tabs = Array.from(
                            e.currentTarget.parentElement?.querySelectorAll<HTMLElement>("[data-region-tab]") ?? []
                          );
                          const i = tabs.indexOf(e.currentTarget);
                          const next = tabs[i + (e.key === "ArrowDown" ? 1 : -1)];
                          next?.focus();
                        }
                        if (e.key === "ArrowRight") {
                          e.preventDefault();
                          e.currentTarget
                            .closest("[data-mega-panel]")
                            ?.querySelector<HTMLElement>("[data-trek-link]")
                            ?.focus();
                        }
                      }}
                      className={`relative flex items-center justify-between gap-2 px-4 py-2.5 text-left text-[13.5px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset ${
                        isRegionActive
                          ? "bg-surface text-primary"
                          : "text-text-muted hover:bg-surface-alt hover:text-foreground"
                      }`}
                      data-region-tab="true"
                    >
                      <span
                        className={`absolute inset-y-1.5 left-0 w-1 rounded-r-full bg-primary transition-opacity duration-150 ${
                          isRegionActive ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 truncate">{group.region}</span>
                      <span
                        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                          isRegionActive ? "bg-primary/10 text-primary" : "bg-slate-200/70 text-text-muted"
                        }`}
                      >
                        {group.treks.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="shrink-0 border-t border-border/80 px-3 py-2.5">
                <Link
                  href={href}
                  role="menuitem"
                  onClick={onNavigate}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-2 py-2 text-[12.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  View all {label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── Right pane: treks for the active region ── */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="h-1 w-4 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                  {activeGroup ? `${activeGroup.region} Treks` : label}
                </p>
                {activeGroup && (
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                    {activeGroup.treks.length} treks
                  </span>
                )}
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3"
                style={{ maxHeight: listMaxHeight }}
              >
              {activeGroup ? (
                <div className="space-y-0.5">
                    {activeGroup.treks.map((trek) => {
                      const trekHref = `/${href.replace(/^\//, "")}/${trek.slug}`;
                      const isTrekActive = pathname === trekHref;
                      return (
                        <Link
                          key={trek.id}
                          href={trekHref}
                          role="menuitem"
                          data-trek-link="true"
                          onClick={onNavigate}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              onEscape();
                            }
                            if (e.key === "ArrowLeft") {
                              e.preventDefault();
                              e.currentTarget
                                .closest("[data-mega-panel]")
                                ?.querySelector<HTMLElement>("[data-region-tab]")
                                ?.focus();
                            }
                            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                              e.preventDefault();
                              const links = Array.from(
                                e.currentTarget
                                  .closest("[data-mega-panel]")
                                  ?.querySelectorAll<HTMLElement>("[data-trek-link]") ?? []
                              );
                              const i = links.indexOf(e.currentTarget);
                              const next = links[i + (e.key === "ArrowDown" ? 1 : -1)];
                              next?.focus();
                            }
                          }}
                          className={`group/trek relative flex items-center gap-2 rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                            isTrekActive ? "bg-primary/10" : ""
                          }`}
                        >
                          <span
                            className={`absolute left-0 w-1 rounded-r-full bg-primary transition-all duration-300 group-hover/trek:h-1/3 ${
                              isTrekActive ? "h-1/2" : "h-0"
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`min-w-0 truncate text-sm transition-all duration-300 group-hover/trek:translate-x-0.5 group-hover/trek:font-medium group-hover/trek:text-foreground ${
                              isTrekActive ? "font-semibold text-foreground" : "font-medium text-text-muted"
                            }`}
                          >
                            {trek.title}
                          </span>
                          <ArrowRight
                            className="ml-auto h-3.5 w-3.5 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover/trek:translate-x-0 group-hover/trek:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      );
                    })}
                </div>
              ) : (
                <p className="px-1 text-sm text-text-muted">No treks available yet.</p>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
