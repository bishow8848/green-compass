"use client";

import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  Clock,
  Mountain,
  Star,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import { MobileFilterSheet } from "@/components/filters/MobileFilterSheet";

interface TrekCard {
  id: string;
  title: string;
  slug: string;
  heroImage: string | null;
  difficulty: string;
  duration: number;
  price: number;
  region: string | null;
  avgRating: number | null;
}

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

const difficultyStyles: Record<string, { badge: string; dot: string }> = {
  easy: { badge: "bg-[#EEF3E8] text-[#4C6B45]", dot: "bg-[#6B8E5F]" },
  moderate: { badge: "bg-[#FBF0DE] text-[#9A6A1F]", dot: "bg-[#DB8A3A]" },
  challenging: { badge: "bg-[#FBE7DD] text-[#A24E2E]", dot: "bg-[#C25B36]" },
  difficult: { badge: "bg-[#F8DEDE] text-[#9C3939]", dot: "bg-[#B23F3F]" },
  extreme: { badge: "bg-[#EBE1F2] text-[#6B4C8A]", dot: "bg-[#7E5AA3]" },
};

// Extracted to module level to avoid React "Components created during render" error
function FilterSection({
  title,
  isActive,
  children,
}: {
  title: string;
  filterKey: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="group" open={isActive}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-1 marker:content-none [&::-webkit-details-marker]:hidden">
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-text-muted group-open:text-secondary">
          {title}
        </h3>
        <ChevronDown className="h-4 w-4 text-text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-primary" />
      </summary>
      <div className="mt-3 space-y-1 pb-1">{children}</div>
    </details>
  );
}

// Filter values are either a closed range ("1000-1499") or open-ended ("2000+").
// The open-ended form has no "-", so splitting on it yielded NaN for both bounds
// and every comparison came back false — "$2,000+" and "17+ Days" silently
// matched nothing to exclude and showed the full, unfiltered list.
function parseRangeValue(value: string): { min: number; max: number } {
  if (value.endsWith("+")) {
    const min = Number(value.slice(0, -1));
    return { min: Number.isFinite(min) ? min : 0, max: Infinity };
  }
  const [min, max] = value.split("-").map(Number);
  return {
    min: Number.isFinite(min) ? min : 0,
    max: Number.isFinite(max) ? max : Infinity,
  };
}

type FilterKey = "region" | "difficulty" | "duration" | "price" | "rating";
type SelectedFilters = Record<FilterKey, string>;

// Pinned Apply / Clear-all buttons, used at the bottom of both the desktop
// sidebar (fixed footer) and the mobile sheet (end of the scroll content).
function FilterActions({
  onApply,
  onClear,
}: {
  onApply: () => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <button
        type="button"
        onClick={onApply}
        className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-dark"
      >
        Apply Filter
      </button>
      <button
        type="button"
        onClick={onClear}
        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-semibold text-text-muted transition hover:bg-surface-alt hover:text-foreground"
      >
        <X className="h-3 w-3" /> Clear all filters
      </button>
    </div>
  );
}

// Shared filter panel used by both the mobile sheet and the desktop sidebar.
// Options are toggled locally and only applied to the URL when "Apply Filter"
// is clicked, so selecting filters never triggers a slow page navigation.
function FilterControls({
  treks,
  regions,
  difficulties,
  durations,
  priceRanges,
  ratingOptions,
  selected,
  onToggle,
  onApply,
  onClear,
  hideActions = false,
}: {
  treks: TrekCard[];
  regions: FilterOption[];
  difficulties: FilterOption[];
  durations: FilterOption[];
  priceRanges: FilterOption[];
  ratingOptions: FilterOption[];
  selected: SelectedFilters;
  onToggle: (key: FilterKey, value: string) => void;
  onApply: () => void;
  onClear: () => void;
  /** When true the Apply/Clear footer is omitted (desktop sidebar pins it separately). */
  hideActions?: boolean;
}) {
  return (
    <div className="divide-y divide-border">
      <div className="py-4">
        <FilterSection title="Region" filterKey="region" isActive={!!selected.region}>
          <button
            type="button"
            onClick={() => onToggle("region", "")}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${!selected.region ? "bg-primary text-white font-medium" : "text-text hover:bg-surface-alt"}`}
          >
            <span>All Regions</span>
            <span className={`text-xs ${!selected.region ? "text-white/70" : "text-text-muted"}`}>{treks.length}</span>
          </button>
          {regions.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => onToggle("region", r.value)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${selected.region === r.value ? "bg-primary text-white font-medium" : "text-text hover:bg-surface-alt"}`}
            >
              <span>{r.label}</span>
              <span className={`text-xs ${selected.region === r.value ? "text-white/70" : "text-text-muted"}`}>{r.count}</span>
            </button>
          ))}
        </FilterSection>
      </div>

      <div className="py-4">
        <FilterSection title="Difficulty" filterKey="difficulty" isActive={!!selected.difficulty}>
          {difficulties.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => onToggle("difficulty", d.value)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${selected.difficulty === d.value ? "bg-primary/10 text-primary font-medium" : "text-text hover:bg-surface-alt"}`}
            >
              <span className="flex items-center gap-2">
                <span className={`inline-block h-2 w-2 rounded-full ${difficultyStyles[d.value]?.dot ?? "bg-secondary-light"}`} />
                {d.label}
              </span>
              <span className="text-xs text-text-muted">{d.count}</span>
            </button>
          ))}
        </FilterSection>
      </div>

      <div className="py-4">
        <FilterSection title="Duration" filterKey="duration" isActive={!!selected.duration}>
          {durations.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => onToggle("duration", d.value)}
              className={`flex w-full items-center rounded-xl px-3 py-2 text-sm transition ${selected.duration === d.value ? "bg-primary text-white font-medium" : "text-text hover:bg-surface-alt"}`}
            >
              {d.label}
            </button>
          ))}
        </FilterSection>
      </div>

      <div className="py-4">
        <FilterSection title="Price Range" filterKey="price" isActive={!!selected.price}>
          {priceRanges.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => onToggle("price", p.value)}
              className={`flex w-full items-center rounded-xl px-3 py-2 text-sm transition ${selected.price === p.value ? "bg-primary text-white font-medium" : "text-text hover:bg-surface-alt"}`}
            >
              {p.label}
            </button>
          ))}
        </FilterSection>
      </div>

      <div className="py-4">
        <FilterSection title="Review Rating" filterKey="rating" isActive={!!selected.rating}>
          {ratingOptions.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => onToggle("rating", r.value)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${selected.rating === r.value ? "bg-primary/10 text-primary font-medium" : "text-text hover:bg-surface-alt"}`}
            >
              <span className="flex items-center gap-1">
                {Array.from({ length: Number(r.value) }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-xs">{r.label}</span>
            </button>
          ))}
        </FilterSection>
      </div>

      {!hideActions && <FilterActions onApply={onApply} onClear={onClear} />}
    </div>
  );
}

function CategoryView({
  catSlug,
  treks,
  regions,
  difficulties,
  durations,
  priceRanges,
  ratingOptions,
  params,
}: {
  catSlug: string;
  treks: TrekCard[];
  regions: FilterOption[];
  difficulties: FilterOption[];
  durations: FilterOption[];
  priceRanges: FilterOption[];
  ratingOptions: FilterOption[];
  params: Record<string, string | undefined>;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const region = params.region;
  const difficulty = params.difficulty;
  const duration = params.duration;
  const price = params.price;
  const rating = params.rating;
  const q = params.q;

  const router = useRouter();

  // Locally selected filters. These are only applied to the URL once "Apply
  // Filter" is clicked, so choosing options no longer triggers a slow page
  // navigation on every selection.
  const [selected, setSelected] = useState<SelectedFilters>({
    region: region ?? "",
    difficulty: difficulty ?? "",
    duration: duration ?? "",
    price: price ?? "",
    rating: rating ?? "",
  });

  // Reset the pending selection whenever the applied (URL) filters change —
  // e.g. after "Apply Filter", after removing a chip, or on back/forward.
  // This is the React-recommended pattern for adjusting state when props
  // change (guarded render-time setState), avoiding an effect entirely.
  const [prevFilters, setPrevFilters] = useState({
    region: region ?? "",
    difficulty: difficulty ?? "",
    duration: duration ?? "",
    price: price ?? "",
    rating: rating ?? "",
  });

  if (
    prevFilters.region !== (region ?? "") ||
    prevFilters.difficulty !== (difficulty ?? "") ||
    prevFilters.duration !== (duration ?? "") ||
    prevFilters.price !== (price ?? "") ||
    prevFilters.rating !== (rating ?? "")
  ) {
    setPrevFilters({
      region: region ?? "",
      difficulty: difficulty ?? "",
      duration: duration ?? "",
      price: price ?? "",
      rating: rating ?? "",
    });
    setSelected({
      region: region ?? "",
      difficulty: difficulty ?? "",
      duration: duration ?? "",
      price: price ?? "",
      rating: rating ?? "",
    });
  }

  const toggleFilter = (key: FilterKey, value: string) => {
    setSelected((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  const applyFilters = () => {
    const urlParams = new URLSearchParams();
    for (const [key, value] of Object.entries(selected)) {
      if (value) urlParams.set(key, value);
    }
    if (q) urlParams.set("q", q);
    const qs = urlParams.toString();
    router.replace(`/${catSlug}${qs ? `?${qs}` : ""}`);
  };

  const clearAllFilters = () => {
    setSelected({ region: "", difficulty: "", duration: "", price: "", rating: "" });
    router.replace(`/${catSlug}${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  };

  const buildFilterUrl = (key: string, value: string) => {
    const params = new URLSearchParams();
    const current: Record<string, string | undefined> = {
      region,
      difficulty,
      duration,
      price,
      rating,
      q,
    };
    for (const [k, v] of Object.entries(current)) {
      if (v && k !== key) params.set(k, v);
    }
    if (value) params.set(key, value);
    const qs = params.toString();
    return `/${catSlug}${qs ? `?${qs}` : ""}`;
  };

  const clearUrl = `/${catSlug}`;
  const hasActiveFilters = !!(
    region ||
    difficulty ||
    duration ||
    price ||
    rating
  );

  const activeChips: { key: string; label: string }[] = [];
  if (region) activeChips.push({ key: "region", label: region.charAt(0).toUpperCase() + region.slice(1) });
  if (difficulty) activeChips.push({ key: "difficulty", label: difficulty.charAt(0).toUpperCase() + difficulty.slice(1) });
  if (duration) activeChips.push({ key: "duration", label: durations.find((d) => d.value === duration)?.label ?? duration });
  if (price) activeChips.push({ key: "price", label: priceRanges.find((p) => p.value === price)?.label ?? price });
  if (rating) activeChips.push({ key: "rating", label: ratingOptions.find((r) => r.value === rating)?.label ?? `${rating}★ & up` });

  const queryText = (searchQuery || q || "").trim().toLowerCase();
  const filtered = treks.filter((t) => {
    if (region && t.region !== region) return false;
    if (difficulty && t.difficulty !== difficulty) return false;
    if (duration) {
      const { min, max } = parseRangeValue(duration);
      if (t.duration < min || t.duration > max) return false;
    }
    if (price) {
      const { min, max } = parseRangeValue(price);
      if (t.price < min || t.price > max) return false;
    }
    if (rating) {
      const minRating = Number(rating);
      if (t.avgRating === null || t.avgRating < minRating) return false;
    }
    if (
      queryText &&
      !(t.title.toLowerCase().includes(queryText) || t.difficulty.toLowerCase().includes(queryText))
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      {/* Search bar */}
      <div className="mt-6 mx-auto max-w-md relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search treks..."
          className="w-full rounded-full border border-border bg-surface py-3 pl-12 pr-5 text-sm text-foreground placeholder:text-text-muted shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
        />
      </div>

      {/* Result count */}
      <p className="mt-5 mb-5 text-sm text-text-muted">
        Showing{" "}
        <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "trek" : "treks"}
        {(searchQuery || q) && (
          <span className="text-text-muted">
            {" "}for &ldquo;{searchQuery || q}&rdquo;
          </span>
        )}
      </p>

      {/* Active filter chips */}
      {hasActiveFilters && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-text-muted">Filtering by:</span>
          {activeChips.map((chip) => (
            <Link
              key={chip.key}
              href={buildFilterUrl(chip.key, "")}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/20"
            >
              {chip.label}
              <X className="h-3 w-3" />
            </Link>
          ))}
          <Link href={clearUrl} className="text-xs font-medium text-text-muted underline decoration-dotted underline-offset-2 hover:text-foreground">
            Clear all
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* ===== FILTER SIDEBAR ===== */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-24 space-y-5">
            {/* Mobile filter sheet (trigger + portal overlay) */}
            <MobileFilterSheet resultsCount={filtered.length}>
              {({ close }) => (
                <FilterControls
                  treks={treks}
                  regions={regions}
                  difficulties={difficulties}
                  durations={durations}
                  priceRanges={priceRanges}
                  ratingOptions={ratingOptions}
                  selected={selected}
                  onToggle={toggleFilter}
                  onApply={() => {
                    applyFilters();
                    close();
                  }}
                  onClear={clearAllFilters}
                />
              )}
            </MobileFilterSheet>

            {/* Desktop static sidebar */}
            <div className="hidden lg:block">
              <div className="flex max-h-[calc(100vh-9rem)] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                <div className="flex shrink-0 items-center gap-2 border-b border-border px-5 py-4">
                  <SlidersHorizontal className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-bold uppercase tracking-wide text-secondary">Filters</h2>
                </div>

                {/* Only the filter sections scroll — header and actions stay pinned */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5">
                  <FilterControls
                    treks={treks}
                    regions={regions}
                    difficulties={difficulties}
                    durations={durations}
                    priceRanges={priceRanges}
                    ratingOptions={ratingOptions}
                    selected={selected}
                    onToggle={toggleFilter}
                    onApply={applyFilters}
                    onClear={clearAllFilters}
                    hideActions
                  />
                </div>

                <div className="shrink-0 border-t border-border px-5">
                  <FilterActions onApply={applyFilters} onClear={clearAllFilters} />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ===== TREK GRID ===== */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-14 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt">
                <Mountain className="h-6 w-6 text-text-muted" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {searchQuery || q ? "No treks match your search" : "No treks found"}
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                {searchQuery || q
                  ? "Try a different search term."
                  : "Try widening your filters."}
              </p>
              {(searchQuery || q) && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((trek) => {
                const rating = trek.avgRating;
                return (
                  <Link
                    key={trek.id}
                    href={`/${catSlug}/${trek.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.25)]"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {trek.heroImage ? (
                        <img
                          src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_600,q_auto,f_auto/${trek.heroImage}`}
                          alt={trek.title}
                          width={600}
                          height={450}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-surface">
                          <Mountain className="h-12 w-12 text-text-muted" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {rating !== null && (
                        <div className="absolute bottom-3 left-3 z-10 text-lg font-bold text-amber-400 drop-shadow-lg">
                          {"★".repeat(Math.round(rating))}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          {trek.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                        {trek.title}
                      </h3>
                      <div className="mt-auto pt-6 flex items-end justify-between">
                        <div className="flex flex-col gap-1 text-xs text-text-muted font-medium">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {trek.duration} Days
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">From</span>
                          <span className="text-xl font-black text-foreground">${trek.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function CategoryViewWithParams(props: {
  catSlug: string;
  treks: TrekCard[];
  regions: FilterOption[];
  difficulties: FilterOption[];
  durations: FilterOption[];
  priceRanges: FilterOption[];
  ratingOptions: FilterOption[];
}) {
  const searchParams = useSearchParams();
  const params = {
    region: searchParams.get("region") ?? undefined,
    difficulty: searchParams.get("difficulty") ?? undefined,
    duration: searchParams.get("duration") ?? undefined,
    price: searchParams.get("price") ?? undefined,
    rating: searchParams.get("rating") ?? undefined,
    q: searchParams.get("q") ?? undefined,
  };
  return <CategoryView {...props} params={params} />;
}

export function CategoryClient(props: {
  catSlug: string;
  treks: TrekCard[];
  regions: FilterOption[];
  difficulties: FilterOption[];
  durations: FilterOption[];
  priceRanges: FilterOption[];
  ratingOptions: FilterOption[];
}) {
  return (
    <Suspense fallback={<CategoryView {...props} params={{}} />}>
      <CategoryViewWithParams {...props} />
    </Suspense>
  );
}
