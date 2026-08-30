"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Minus, Plus, Users, Calendar, Package, Tag, X } from "lucide-react";
import { getPriceForGroupSize, parseTierRange } from "@/lib/pricing";

interface PricingTier {
  groupSize: string;
  pricePerPerson: number;
}

interface Addon {
  title: string;
  description: string;
  unit: string;
  pricePerUnit: number;
}

interface AvailableDate {
  startDate: string;
  seatsLeft: number;
}

interface PricingCalculatorProps {
  trekSlug: string;
  basePrice: number;
  duration: number;
  pricingTiers: PricingTier[];
  addons?: Addon[];
  availableDates?: AvailableDate[];
  maxGroupSize?: number;
}


// Renders the tooltip into document.body via a portal, positioned from the
// trigger's bounding rect — this means it's never clipped by an ancestor's
// overflow: hidden/auto (which is what was cutting it off before).
function PortalTooltip({
  anchorRect,
  children,
}: {
  anchorRect: DOMRect;
  children: React.ReactNode;
}) {
  const width = 256; // w-64
  let left = anchorRect.left;
  // keep it on-screen horizontally
  if (left + width > window.innerWidth - 8) {
    left = window.innerWidth - width - 8;
  }
  const top = anchorRect.top - 8; // gap above the trigger

  return createPortal(
    <div
      className="fixed z-50 w-64 -translate-y-full rounded-lg border bg-white px-3 py-2 text-xs shadow-lg whitespace-normal pointer-events-none"
      style={{ left, top, borderColor: "var(--color-border)", color: "var(--color-text)" }}
    >
      {children}
      <div
        className="absolute left-3 top-full -mt-px h-2 w-2 rotate-45 border-r border-b bg-white"
        style={{ borderColor: "var(--color-border)" }}
      />
    </div>,
    document.body
  );
}

function AddonTitle({ title, description }: { title: string; description: string }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <p
        ref={ref}
        onMouseEnter={() => ref.current && setRect(ref.current.getBoundingClientRect())}
        onMouseLeave={() => setRect(null)}
        className="text-sm font-medium truncate cursor-help underline decoration-dotted underline-offset-2"
        style={{ color: "var(--color-foreground)" }}
      >
        {title}
      </p>
      {rect && <PortalTooltip anchorRect={rect}>{description}</PortalTooltip>}
    </>
  );
}

// ─── Group pricing modal ─────────────────────────────────────────────
// Matches the fix-departure "View Group Price" modal look & behavior:
// overlay + scroll-locked page, amber "From $X/person" banner, group-size
// table. It is rendered through a portal into document.body so the fixed
// overlay escapes the sticky sidebar's stacking context — otherwise the
// backdrop-blur can't reach the page content (FAQ/itinerary numbers) or the
// fixed SectionNav, leaving them sharp behind the dark overlay.
function GroupPricingModal({
  tiers,
  trekSlug,
  onClose,
}: {
  tiers: PricingTier[];
  trekSlug: string;
  onClose: () => void;
}) {
  const minPrice = Math.min(...tiers.map((t) => t.pricePerPerson));

  // Prevent the page from scrolling while the modal is open
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-2xl"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ backgroundColor: "var(--color-surface-alt)" }}
        >
          <div className="min-w-0">
            <h3 className="text-base font-bold text-slate-900">Group Price</h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs font-medium" style={{ color: "var(--color-primary)" }}>
              <Users className="h-3 w-3" />
              {tiers.length} tier{tiers.length === 1 ? "" : "s"} of group pricing
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-200/60 hover:text-slate-600"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] space-y-4 overflow-y-auto p-5">
          {/* Min price banner */}
          <div
            className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <span className="text-lg font-extrabold tracking-tight">
              From ${minPrice.toLocaleString()}/person
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
            <div
              className="grid grid-cols-[1fr_auto] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "var(--color-surface-alt)", color: "var(--color-secondary)" }}
            >
              <span>Group Size</span>
              <span className="text-right">Price / Person</span>
            </div>
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-t px-4 py-2.5 text-sm"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Users className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} />
                  {tier.groupSize} pax
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 line-through">
                    ${(Math.round(tier.pricePerPerson * 1.1)).toLocaleString()}
                  </span>
                  <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                    ${tier.pricePerPerson.toLocaleString()}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <Link
            href={`/book/${trekSlug}`}
            className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Book This Trek
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function PricingCalculator({
  trekSlug,
  basePrice,
  duration,
  pricingTiers,
  addons = [],
  availableDates = [],
  maxGroupSize: maxGroupSizeProp = 20,
}: PricingCalculatorProps) {
  const [travelers, setTravelers] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [showGroupPricing, setShowGroupPricing] = useState(false);
  const [addonQtys, setAddonQtys] = useState<number[]>(addons.map(() => 0));

  // Derive the max group size from pricing tiers so the counter always matches
  // the highest tier range, regardless of what's stored in the DB.
  const maxGroupSize = useMemo(() => {
    if (pricingTiers.length > 0) {
      const tierMax = Math.max(
        ...pricingTiers.map((t) => parseTierRange(t.groupSize).max)
      );
      return Math.max(tierMax, maxGroupSizeProp);
    }
    return maxGroupSizeProp;
  }, [pricingTiers, maxGroupSizeProp]);

  const pricePerPerson = useMemo(
    () => getPriceForGroupSize(pricingTiers, travelers, basePrice),
    [pricingTiers, travelers, basePrice]
  );

  const trekTotal = pricePerPerson * travelers;

  const addonTotals = useMemo(
    () => addons.map((a, i) => a.pricePerUnit * (addonQtys[i] || 0)),
    [addons, addonQtys]
  );

  const grandTotal = trekTotal + addonTotals.reduce((sum, t) => sum + t, 0);

  // Find the tier with the lowest price per person for the "best value" message
  const minPriceTier = useMemo(() => {
    if (pricingTiers.length === 0) return null;
    let min = pricingTiers[0];
    for (const tier of pricingTiers) {
      if (tier.pricePerPerson < min.pricePerPerson) {
        min = tier;
      }
    }
    return min;
  }, [pricingTiers]);

  const minTierMinGroup = useMemo(() => {
    if (!minPriceTier) return 0;
    return parseTierRange(minPriceTier.groupSize).min;
  }, [minPriceTier]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Min price banner — moved to the top and made the clear visual entry point */}
      {minPriceTier && (
        <div
          className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5 px-3 py-3 text-center"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <span className="flex items-center gap-1.5 text-lg font-extrabold text-white tracking-tight tabular-nums">
            <Tag className="h-4 w-4 shrink-0 self-center" fill="white" />
            From ${minPriceTier.pricePerPerson.toLocaleString()}/person
          </span>
          <span className="text-xs font-semibold text-white/90">
            for groups of {minTierMinGroup}+
          </span>
        </div>
      )}

      <div className="p-4 space-y-3">
        {/* Travelers + Start Date — merged row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Traveler count */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <Users className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} />
              Travelers
            </label>
            <div
              className="mt-1 flex items-center justify-between rounded-lg border px-2 py-1.5"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-alt)" }}
            >
              <button
                type="button"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                disabled={travelers <= 1}
                className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="text-base font-bold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                {travelers}
              </span>
              <button
                type="button"
                onClick={() => setTravelers(Math.min(maxGroupSize, travelers + 1))}
                disabled={travelers >= maxGroupSize}
                className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <Calendar className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} />
              Start Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-lg border px-2 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface-alt)",
                  color: "var(--color-foreground)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Total breakdown */}
        <div
          className="rounded-lg border p-3"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-alt)" }}
        >
          <div className="flex items-center justify-between text-sm">
            <span style={{ color: "var(--color-text)" }}>
              Trek ({travelers} &times; ${pricePerPerson})
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ${(Math.round(trekTotal * 1.1)).toLocaleString()}
              </span>
              <span className="font-semibold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                ${trekTotal.toLocaleString()}
              </span>
            </span>
          </div>
          {addonTotals.map((total, i) =>
            total > 0 ? (
              <div key={i} className="mt-1 flex items-center justify-between text-sm">
                <span style={{ color: "var(--color-text)" }}>
                  {addons[i].title} &times; {addonQtys[i]}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400 line-through tabular-nums">
                    +${(Math.round(total * 1.1)).toLocaleString()}
                  </span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                    +${total.toLocaleString()}
                  </span>
                </span>
              </div>
            ) : null
          )}
          <div className="mt-2 flex items-center justify-between border-t pt-2" style={{ borderColor: "var(--color-border)" }}>
            <span className="text-base font-bold" style={{ color: "var(--color-foreground)" }}>
              Total
            </span>
            <span className="flex items-center gap-2">
              <span className="text-sm text-slate-400 line-through tabular-nums">
                ${(Math.round(grandTotal * 1.1)).toLocaleString()}
              </span>
              <span className="text-xl font-bold tabular-nums" style={{ color: "var(--color-primary)" }}>
                ${grandTotal.toLocaleString()}
              </span>
            </span>
          </div>
        </div>

        {/* Group pricing — opens the same style modal as the fix-departure table */}
        {pricingTiers.length > 0 && (
          <button
            type="button"
            onClick={() => setShowGroupPricing(true)}
            className="flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:opacity-90"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              View Group Pricing
            </span>
            <span className="text-[10px] font-medium normal-case tracking-wide">
              From ${(minPriceTier?.pricePerPerson ?? 0).toLocaleString()}/pp
            </span>
          </button>
        )}

        {/* Add-ons — scrollable, portal tooltip so it isn't clipped by overflow-y-auto */}
        {addons.length > 0 && (
          <div>
            <label
              className="flex items-center gap-1.5 text-sm font-semibold mb-2"
              style={{ color: "var(--color-secondary)" }}
            >
              <Package className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
              Add-ons
            </label>
            <div className="space-y-1.5 max-h-[100px] overflow-y-auto pr-1">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border bg-white px-2.5 py-1.5"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex-1 min-w-0">
                    <AddonTitle title={addon.title} description={addon.description} />
                    <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                      <span className="text-slate-400 line-through">${(Math.round(addon.pricePerUnit * 1.1)).toLocaleString()}</span>
                      &nbsp;${addon.pricePerUnit}/{addon.unit}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setAddonQtys((prev) => prev.map((q, idx) => (idx === i ? Math.max(0, q - 1) : q)))
                      }
                      disabled={(addonQtys[i] || 0) <= 0}
                      className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold tabular-nums" style={{ color: "var(--color-foreground)" }}>
                      {addonQtys[i] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAddonQtys((prev) => prev.map((q, idx) => (idx === i ? q + 1 : q)))}
                      className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-slate-500 hover:bg-slate-100"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="flex items-center gap-1 shrink-0">
                    <span className="text-xs text-slate-400 line-through tabular-nums">
                      ${(Math.round(addonTotals[i] * 1.1)).toLocaleString()}
                    </span>
                    <span
                      className="w-14 text-right text-sm font-semibold tabular-nums"
                      style={{ color: "var(--color-primary)" }}
                    >
                      ${addonTotals[i].toLocaleString()}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Book button */}
        <Link
          href={`/book/${trekSlug}?travelers=${travelers}${startDate ? `&startDate=${startDate}` : ""}&addons=${encodeURIComponent(
            JSON.stringify(
              // Map BEFORE filtering: filtering first re-indexes the array, so
              // addonQtys[i] then read a different add-on's quantity — every
              // selection slid onto the wrong add-on and the booking total
              // disagreed with the "Book Now" total shown here.
              addons
                .map((a, i) => ({ title: a.title, qty: addonQtys[i] || 0, pricePerUnit: a.pricePerUnit }))
                .filter((a) => a.qty > 0)
            )
          )}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Book Now &mdash; ${grandTotal.toLocaleString()}
          <span className="text-sm text-slate-300 line-through ml-1">${(Math.round(grandTotal * 1.1)).toLocaleString()}</span>
        </Link>

        <p className="text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
          No payment required yet
        </p>
      </div>

      {showGroupPricing && pricingTiers.length > 0 && (
        <GroupPricingModal
          tiers={pricingTiers}
          trekSlug={trekSlug}
          onClose={() => setShowGroupPricing(false)}
        />
      )}
    </div>
  );
}