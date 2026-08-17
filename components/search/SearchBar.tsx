"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";

interface Trek {
  title: string;
  slug: string;
  region: string | null;
  difficulty: string;
  duration: number;
  category?: { slug: string } | null;
}

export function SearchBar({ treks = [] }: { treks?: Trek[] }) {
  const router = useRouter();
  const [availableTreks, setAvailableTreks] = useState(treks);
  const [hasRequestedTreks, setHasRequestedTreks] = useState(treks.length > 0);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return availableTreks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.region?.toLowerCase() ?? "").includes(q)
    ).slice(0, 8);
  }, [query, availableTreks]);

  async function loadTreks() {
    if (hasRequestedTreks) return;
    setHasRequestedTreks(true);
    try {
      const response = await fetch("/api/trek/list-all");
      if (!response.ok) return;
      const data = await response.json();
      if (Array.isArray(data)) setAvailableTreks(data);
    } catch {
      // Normal search still works even when autocomplete is unavailable.
    }
  }

  function goToProduct(trek: Trek) {
    const categorySlug = trek.category?.slug || "treks";
    router.push(`/${categorySlug}/${trek.slug}`);
  }

  function handleSearch(val: string) {
    if (!val.trim()) return;
    router.push(`/search?q=${encodeURIComponent(val.trim())}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        goToProduct(suggestions[selectedIndex]);
      } else {
        handleSearch(query);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      setFocused(false);
    }
  }

  return (
    <div className="relative w-full" onMouseLeave={() => setSelectedIndex(-1)}>
      <div className="flex w-full items-center gap-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-lg shadow-black/20 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:shadow-primary/10">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onFocus={() => {
            setFocused(true);
            void loadTreks();
          }}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Where do you want to go?"
          className="flex-1 border-none bg-transparent px-4 py-3 text-sm placeholder:text-sm sm:px-5 sm:py-4 sm:text-base sm:placeholder:text-base text-foreground placeholder-text-muted outline-none"
        />
        <button
          type="button"
          onClick={() => handleSearch(query)}
          className="mr-1 flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-dark sm:mr-1.5 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Explore Now</span>
        </button>
      </div>

      {focused && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-[999] mt-1 overflow-hidden rounded-xl border border-border bg-surface shadow-xl sm:mt-2 sm:rounded-2xl">
          {suggestions.map((trek, i) => {
            const q = query.toLowerCase();
            const matchIdx = trek.title.toLowerCase().indexOf(q);
            const before = matchIdx > 0 ? trek.title.slice(0, matchIdx) : "";
            const match =
              matchIdx >= 0
                ? trek.title.slice(matchIdx, matchIdx + q.length)
                : "";
            const after =
              matchIdx >= 0 ? trek.title.slice(matchIdx + q.length) : trek.title;

            return (
              <button
                key={trek.slug}
                type="button"
                onMouseDown={() => goToProduct(trek)}
                className={`flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors sm:gap-3 sm:px-4 sm:py-3 ${
                  i === selectedIndex ? "bg-primary/10" : "hover:bg-surface-alt"
                }`}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground sm:text-sm">
                    {before}
                    <span className="bg-primary/20 font-semibold text-primary">
                      {match}
                    </span>
                    {after}
                  </p>
                  <p className="mt-px text-[11px] text-text-muted sm:text-xs">
                    {(trek.region || "Nepal")} · {trek.duration} days · {trek.difficulty}
                  </p>
                </div>
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-text-muted sm:block" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
