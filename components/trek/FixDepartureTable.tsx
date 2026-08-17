"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Info,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  User,
  Mail,
  Phone,
  StickyNote,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────
export interface FixDepartureTrek {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  heroImage?: string | null;
  minPrice: number;
  pricingTiers: { groupSize: string; pricePerPerson: number }[];
  /** Recurring weekly days this trek runs, e.g. ["sunday","wednesday"] */
  weekdays: string[];
  /** Custom one-off start dates, ISO "YYYY-MM-DD" strings */
  customDates: string[];
}

interface Departure {
  id: string;
  trekId: string;
  trekTitle: string;
  trekSlug: string;
  categorySlug: string;
  heroImage?: string | null;
  startDate: string; // YYYY-MM-DD
  minPrice: number;
  pricingTiers: { groupSize: string; pricePerPerson: number }[];
}

/** All treks departing on the same start date (one row per date on the listing). */
interface DepartureGroup {
  startDate: string;
  departures: Departure[];
}

interface FixDepartureTableProps {
  treks: FixDepartureTrek[];
  /** Show the "Sort By Date" year/month filter. Default true. */
  showSortFilter?: boolean;
  heading?: string;
  description?: string;
}

// ─── Constants ───────────────────────────────────────────────────────
const WEEKDAY_NAMES = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

/** Rolling 4-year window for the filter: current year → current year + 3. */
function getYearRange(): number[] {
  const start = new Date().getFullYear();
  return [start, start + 1, start + 2, start + 3];
}

const MONTHS = [
  { index: 0, label: "Jan" },
  { index: 1, label: "Feb" },
  { index: 2, label: "Mar" },
  { index: 3, label: "Apr" },
  { index: 4, label: "May" },
  { index: 5, label: "Jun" },
  { index: 6, label: "Jul" },
  { index: 7, label: "Aug" },
  { index: 8, label: "Sep" },
  { index: 9, label: "Oct" },
  { index: 10, label: "Nov" },
  { index: 11, label: "Dec" },
];

// ─── Date helpers ────────────────────────────────────────────────────
function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDisplayDate(iso: string): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

/** Today's local date as an ISO "YYYY-MM-DD" string — used to hide past departures. */
function todayISOString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getWeekdayDates(
  year: number,
  month: number | null,
  weekday: string
): string[] {
  const dayIndex = WEEKDAY_NAMES.indexOf(weekday);
  if (dayIndex < 0) return [];
  const start = month != null ? new Date(year, month, 1) : new Date(year, 0, 1);
  const end = month != null ? new Date(year, month + 1, 0) : new Date(year, 11, 31);
  const dates: string[] = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    if (d.getDay() === dayIndex) dates.push(toISODate(d));
  }
  return dates;
}

function generateDepartures(
  treks: FixDepartureTrek[],
  year: number | null,
  month: number | null,
  todayISO: string,
  yearRange: number[]
): Departure[] {
  const departures: Departure[] = [];
  // Guard against the same trek + same date being listed twice (e.g. a custom
  // date that also falls on a recurring weekday).
  const seen = new Set<string>(); // `${trekId}::${startDate}`
  const years = year != null ? [year] : yearRange;

  for (const trek of treks) {
    const base = {
      trekId: trek.id,
      trekTitle: trek.title,
      trekSlug: trek.slug,
      categorySlug: trek.categorySlug,
      heroImage: trek.heroImage,
      minPrice: trek.minPrice,
      pricingTiers: trek.pricingTiers,
    };

    const pushDeparture = (startDate: string, source: string) => {
      // Skip today and past departures — only future dates are shown.
      if (startDate <= todayISO) return;
      const key = `${trek.id}::${startDate}`;
      if (seen.has(key)) return;
      seen.add(key);
      departures.push({
        ...base,
        id: `${trek.id}-${source}-${startDate}`,
        startDate,
      });
    };

    // Custom one-off dates
    for (const dateStr of trek.customDates || []) {
      const d = new Date(dateStr + "T00:00:00");
      if (isNaN(d.getTime())) continue;
      if (year != null && d.getFullYear() !== year) continue;
      if (year != null && month != null && d.getMonth() !== month) continue;
      pushDeparture(dateStr, "custom");
    }

    // Recurring weekly days
    for (const weekday of trek.weekdays || []) {
      for (const y of years) {
        const dates = getWeekdayDates(y, month, weekday);
        for (const dateStr of dates) {
          pushDeparture(dateStr, weekday);
        }
      }
    }
  }

  departures.sort((a, b) => a.startDate.localeCompare(b.startDate));
  return departures;
}

/**
 * Group departures by start date so each date appears only once, even when
 * multiple treks depart on the same day (e.g. two treks running every Monday).
 */
function groupDeparturesByDate(departures: Departure[]): DepartureGroup[] {
  const map = new Map<string, Departure[]>();
  for (const dep of departures) {
    const arr = map.get(dep.startDate) || [];
    arr.push(dep);
    map.set(dep.startDate, arr);
  }
  return Array.from(map.entries())
    .map(([startDate, deps]) => ({ startDate, departures: deps }))
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

/**
 * Default the table to the FIRST year + FIRST month (within the displayed
 * range: 2026→2029 · Jan→Dec) that actually has a departure — instead of
 * dumping every date at once.
 */
function computeDefaultSelection(
  treks: FixDepartureTrek[],
  todayISO: string,
  yearRange: number[]
): { year: number | null; month: number | null } {
  for (const year of yearRange) {
    for (const month of MONTHS.map((m) => m.index)) {
      const hasAny = treks.some((trek) => {
        if (
          (trek.customDates || []).some((c) => {
            const d = new Date(c + "T00:00:00");
            return !isNaN(d.getTime()) && c > todayISO && d.getFullYear() === year && d.getMonth() === month;
          })
        ) {
          return true;
        }
        if (
          (trek.weekdays || []).some((wd) =>
            getWeekdayDates(year, month, wd).some((dt) => dt > todayISO)
          )
        ) {
          return true;
        }
        return false;
      });
      if (hasAny) return { year, month };
    }
  }
  return { year: null, month: null };
}

function parseTierRange(label: string): { min: number; max: number } {
  const match = label.match(/(\d+)\s*-\s*(\d+)/);
  if (match) return { min: parseInt(match[1]), max: parseInt(match[2]) };
  const single = label.match(/(\d+)/);
  if (single) return { min: parseInt(single[1]), max: parseInt(single[1]) };
  return { min: 1, max: 1 };
}

/** Keep only the first occurrence of each exact (groupSize, price) tier. */
function dedupeTiers(
  tiers: { groupSize: string; pricePerPerson: number }[]
): { groupSize: string; pricePerPerson: number }[] {
  const seen = new Set<string>();
  return tiers.filter((t) => {
    const key = `${t.groupSize}::${t.pricePerPerson}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ─── Group price modal ───────────────────────────────────────────────
function PriceModal({ departures, onClose }: { departures: Departure[]; onClose: () => void }) {
  const first = departures[0];
  const minPrice = Math.min(...departures.map((d) => d.minPrice));
  const deposit = Math.round(minPrice * 0.1);

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

  return (
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
            <p className="truncate text-xs text-slate-500">
              {departures.map((d) => d.trekTitle).join(", ")}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-xs font-medium" style={{ color: "var(--color-primary)" }}>
              <Calendar className="h-3 w-3" /> {formatDisplayDate(first.startDate)}
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

          {departures.map((dep) => {
            const tiers = dedupeTiers(dep.pricingTiers);
            return (
              <div key={dep.trekId} className="space-y-2">
                <Link
                  href={`/${dep.categorySlug}/${dep.trekSlug}`}
                  className="block text-sm font-bold transition-colors hover:text-teal-600"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {dep.trekTitle}
                </Link>
                {tiers.length > 0 ? (
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
                ) : (
                  <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Group pricing is not available for this trek yet.
                  </p>
                )}
              </div>
            );
          })}

          {/* 10% deposit note */}
          <div
            className="rounded-xl border px-4 py-3 text-xs leading-relaxed"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-alt)" }}
          >
            <span className="flex items-start gap-2 text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--color-primary)" }} />
              <span>
                You should pay <strong>10%</strong> of the min price ($
                {deposit.toLocaleString()}) to confirm the trip.
              </span>
            </span>
          </div>

          {departures.length === 1 ? (
            <Link
              href={`/${first.categorySlug}/${first.trekSlug}`}
              className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              View Trek Details
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// ─── Contact modal ───────────────────────────────────────────────────
function ContactModal({ departures, onClose }: { departures: Departure[]; onClose: () => void }) {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const first = departures[0];
  const trekNames = departures.map((d) => d.trekTitle).join(", ");
  const note = `Hi\nI am interested in ${trekNames} that starts from ${formatDisplayDate(first.startDate)}\nThank You`;

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

  function validate(): Record<string, string> {
    const errors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) errors.name = "Full name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Please enter a valid email address";
    if (!phone.trim() || phone.trim().length < 6) errors.phone = "Valid phone number is required";
    if (!persons || persons < 1) errors.persons = "At least 1 person";
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted fields below.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/fix-departure-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          numberOfPersons: persons,
          trekTitle: trekNames,
          startDate: first.startDate,
          note,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        const details = err.details as Record<string, string[]> | undefined;
        if (details && Object.keys(details).length > 0) {
          const mapped: Record<string, string> = {};
          for (const [field, messages] of Object.entries(details)) {
            mapped[field] = messages[0] || "Invalid value";
          }
          setFieldErrors(mapped);
        }
        throw new Error(err.error || "Failed to send message");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message. Please try again.");
    }
  }

  const fieldClass = (field: string) =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 ${
      fieldErrors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-teal-400 focus:ring-teal-100"
    }`;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />
      <div
        className="relative z-10 my-8 w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-2xl"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ backgroundColor: "var(--color-surface-alt)" }}
        >
          <div className="min-w-0">
            <h3 className="text-base font-bold text-slate-900">Contact Us</h3>
            <p className="truncate text-xs text-slate-500">{trekNames}</p>
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

        <div className="max-h-[70vh] overflow-y-auto p-5">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle className="h-12 w-12" style={{ color: "var(--color-success)" }} />
              <h4 className="mt-4 text-lg font-bold text-slate-900">Message Sent!</h4>
              <p className="mt-1 max-w-xs text-sm text-slate-500">
                Thank you for reaching out. Our team will contact you shortly about
                this departure.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-xl px-6 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <User className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} /> Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className={fieldClass("name")}
                />
                {fieldErrors.name && <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Mail className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} /> Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={fieldClass("email")}
                />
                {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Phone className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} /> Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+977 98XXXXXXXX"
                  className={fieldClass("phone")}
                />
                {fieldErrors.phone && <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Users className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} /> Number of Persons *
                </label>
                <div
                  className="flex items-center justify-between rounded-xl border px-4 py-2"
                  style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-alt)" }}
                >
                  <button
                    type="button"
                    onClick={() => setPersons((p) => Math.max(1, p - 1))}
                    disabled={persons <= 1}
                    className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-lg font-bold text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    −
                  </button>
                  <span className="text-base font-bold tabular-nums text-slate-900">{persons}</span>
                  <button
                    type="button"
                    onClick={() => setPersons((p) => Math.min(50, p + 1))}
                    className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-lg font-bold text-slate-600 hover:bg-slate-100"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    +
                  </button>
                </div>
                {fieldErrors.persons && <p className="mt-1 text-xs text-red-500">{fieldErrors.persons}</p>}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <StickyNote className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} /> Note
                </label>
                <textarea
                  readOnly
                  rows={4}
                  value={note}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"
                />
              </div>

              {errorMsg && status === "error" && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              <p className="text-center text-xs text-slate-400">We usually reply within 24 hours.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Info tooltip (deposit hint) ─────────────────────────────────────
function DepositTooltip({ minPrice }: { minPrice: number }) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const deposit = Math.round(minPrice * 0.1);

  return (
    <span
      ref={ref}
      onMouseEnter={() => ref.current && setRect(ref.current.getBoundingClientRect())}
      onMouseLeave={() => setRect(null)}
      className="inline-flex shrink-0 cursor-help items-center rounded-full text-slate-400 transition-colors hover:text-teal-600"
    >
      <Info className="h-3.5 w-3.5" />
      {rect && (
        <span
          className="pointer-events-none fixed z-[120] w-60 -translate-y-full rounded-lg border bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 shadow-xl"
          style={{
            left: Math.min(rect.left, window.innerWidth - 248),
            top: rect.top - 8,
            borderColor: "var(--color-border)",
          }}
        >
          You should pay <strong>10%</strong> of the min price that is{" "}
          <strong>${deposit.toLocaleString()}</strong> amount to confirm the trip.
          <span
            className="absolute left-4 top-full -mt-px h-2 w-2 rotate-45 border-r border-b bg-white"
            style={{ borderColor: "var(--color-border)" }}
          />
        </span>
      )}
    </span>
  );
}

// ─── Main table ──────────────────────────────────────────────────────
export function FixDepartureTable({
  treks,
  showSortFilter = true,
  heading,
  description,
}: FixDepartureTableProps) {
  const todayISO = useMemo(() => todayISOString(), []);
  const yearRange = useMemo(() => getYearRange(), []);
  const defaultSelection = useMemo(
    () => computeDefaultSelection(treks, todayISO, yearRange),
    [treks, todayISO, yearRange]
  );
  const [selectedYear, setSelectedYear] = useState<number | null>(defaultSelection.year);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(defaultSelection.month);
  const [priceFor, setPriceFor] = useState<Departure[] | null>(null);
  const [contactFor, setContactFor] = useState<Departure[] | null>(null);

  // Months shown in the filter. For the current year only show months from the
  // current month onward (past months are irrelevant); future years show all 12.
  const visibleMonths = useMemo(() => {
    const now = new Date();
    if (selectedYear === now.getFullYear()) {
      return MONTHS.filter((m) => m.index >= now.getMonth());
    }
    return MONTHS;
  }, [selectedYear]);

  const departures = useMemo(
    () => generateDepartures(treks, selectedYear, selectedMonth, todayISO, yearRange),
    [treks, selectedYear, selectedMonth, todayISO, yearRange]
  );

  // Group by date so each date appears only once, even when multiple treks
  // depart on the same day.
  const groups = useMemo(() => groupDeparturesByDate(departures), [departures]);

  // Reset back to the first year + first month (never dump every date at once)
  const resetToDefault = () => {
    setSelectedYear(defaultSelection.year);
    setSelectedMonth(defaultSelection.month);
  };

  const toggleYear = (year: number) => {
    if (selectedYear === year) {
      // Deselect → back to the default (first year + first month)
      resetToDefault();
    } else {
      // Selecting a year should never dump every month at once: default the
      // month to the current month for the current year, and to January for
      // any future year.
      const now = new Date();
      setSelectedYear(year);
      setSelectedMonth(year === now.getFullYear() ? now.getMonth() : 0);
    }
  };

  const selectMonth = (month: number) => {
    if (selectedYear == null) return; // months require a year
    setSelectedMonth((prev) => (prev === month ? null : month));
  };

  return (
    <div className="space-y-6">
      {/* Section heading — only when explicitly provided (e.g. trek detail page) */}
      {heading && (
        <div>
          <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-secondary)" }}>
            {heading}
          </h2>
          {description && (
            <p className="mb-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {description}
            </p>
          )}
        </div>
      )}

      {/* Sort By Date filter */}
      {showSortFilter && (
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
        >
          <div
            className="px-5 py-3 text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: "var(--color-surface-alt)", color: "var(--color-secondary)" }}
          >
            Sort By Date
          </div>
          <div className="space-y-3 px-5 py-4">
            {/* Years */}
            <div className="flex flex-wrap items-center gap-2">
              {yearRange.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => toggleYear(year)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
                    selectedYear === year
                      ? "border-transparent text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-600"
                  }`}
                  style={selectedYear === year ? { backgroundColor: "var(--color-primary)" } : undefined}
                >
                  {year}
                </button>
              ))}
              {(selectedYear != null || selectedMonth != null) && (
                <button
                  type="button"
                  onClick={resetToDefault}
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-400 underline-offset-2 hover:text-teal-600 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Months — only active when a year is selected */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  selectedYear != null ? "text-slate-500" : "text-slate-300"
                }`}
              >
                Month
              </span>
              {visibleMonths.map((m) => {
                const active = selectedMonth === m.index;
                const disabled = selectedYear == null;
                return (
                  <button
                    key={m.index}
                    type="button"
                    onClick={() => selectMonth(m.index)}
                    disabled={disabled}
                    className={`rounded-full border px-3.5 py-1 text-sm transition-all ${
                      active
                        ? "border-transparent text-white"
                        : disabled
                          ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                          : "border-slate-300 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-600"
                    }`}
                    style={active ? { backgroundColor: "var(--color-primary)" } : undefined}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-400">
              {selectedYear != null
                ? selectedMonth != null
                  ? `Showing fixed departures in ${MONTHS.find((m) => m.index === selectedMonth)?.label} ${selectedYear}`
                  : `Showing all fixed departures in ${selectedYear}`
                : "Showing all fixed departures sorted by date"}
            </p>
          </div>
        </div>
      )}

      {/* Departures table */}
      {departures.length === 0 ? (
        <div
          className="rounded-2xl border px-6 py-12 text-center"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-alt)" }}
        >
          <Calendar className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-600">No fixed departures found</p>
          <p className="mt-1 text-xs text-slate-400">
            {selectedYear != null
              ? `There are no fixed departures for ${selectedYear}${selectedMonth != null ? ` · ${MONTHS.find((m) => m.index === selectedMonth)?.label}` : ""}.`
              : "Please check back later or contact us for custom dates."}
          </p>
        </div>
      ) : (
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Header row (desktop) */}
          <div
            className="hidden grid-cols-[1.4fr_0.7fr_1.1fr_1fr] items-center gap-4 px-5 py-3 sm:grid"
            style={{ backgroundColor: "var(--color-surface-alt)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Start Date</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Status</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Price</span>
            <span className="text-right text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-secondary)" }}>Contact Us</span>
          </div>

          {groups.map((group, i) => (
            <div
              key={group.startDate}
              className="border-t px-4 py-4 sm:px-5"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1.4fr_0.7fr_1.1fr_1fr] sm:gap-4">
                {/* Start Date */}
                <div className="min-w-0">
                  <div className="flex flex-col gap-0.5">
                    {group.departures.map((dep) => (
                      <Link
                        key={dep.trekId}
                        href={`/${dep.categorySlug}/${dep.trekSlug}`}
                        className="block truncate text-xs font-semibold uppercase tracking-wide transition-colors hover:text-teal-600"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {dep.trekTitle}
                      </Link>
                    ))}
                  </div>
                  <p className="mt-0.5 text-base font-bold text-slate-900 sm:text-lg">
                    {formatDisplayDate(group.startDate)}
                  </p>
                </div>

                {/* Status — green checkmark confirming it's a fix departure */}
                <div>
                  <span className="inline-flex items-center gap-1.5" title="Fix Departure">
                    <CheckCircle className="h-6 w-6" style={{ color: "#16a34a" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#16a34a" }}>
                      Confirmed
                    </span>
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPriceFor(group.departures)}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:bg-teal-50"
                    style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                  >
                    <Users className="h-3.5 w-3.5" />
                    View Group Price
                  </button>
                  <DepositTooltip minPrice={Math.min(...group.departures.map((d) => d.minPrice))} />
                </div>

                {/* Contact Us */}
                <div className="sm:text-right">
                  <button
                    type="button"
                    onClick={() => setContactFor(group.departures)}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              {/* Mobile-only separators */}
              {i < groups.length - 1 && (
                <div className="mt-3 h-px bg-slate-100 sm:hidden" />
              )}
            </div>
          ))}
        </div>
      )}

      {priceFor && <PriceModal departures={priceFor} onClose={() => setPriceFor(null)} />}
      {contactFor && <ContactModal departures={contactFor} onClose={() => setContactFor(null)} />}
    </div>
  );
}
