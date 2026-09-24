"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Search, MapPin, ArrowRight, FileText } from "lucide-react";

interface Trek {
  title: string;
  slug: string;
  region: string | null;
  difficulty: string;
  duration: number;
  category?: { slug: string } | null;
}

interface BlogPost {
  slug: string;
  title: string;
  tags: string[];
}

interface Suggestion {
  kind: "trek" | "blog";
  key: string;
  title: string;
  href: string;
  meta: string;
}

interface SearchBarProps {
  treks?: Trek[];
  /** Only suggest this author's articles (packages are always all shown). */
  authorSlug?: string;
  placeholder?: string;
}

const MAX_PER_GROUP = 5;

export function SearchBar({ treks = [], authorSlug, placeholder }: SearchBarProps) {
  const router = useRouter();
  const [availableTreks, setAvailableTreks] = useState(treks);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [hasRequested, setHasRequested] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const barRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number; width: number; maxHeight: number } | null>(null);

  // Packages first, then articles; keyboard navigation walks this flat list.
  const suggestions = useMemo<Suggestion[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // In each group, title matches rank above region/tag-only matches.
    const treksInTitle = availableTreks.filter((t) => t.title.toLowerCase().includes(q));
    const treksInRegion = availableTreks.filter(
      (t) => !t.title.toLowerCase().includes(q) && (t.region?.toLowerCase() ?? "").includes(q)
    );
    const trekMatches = [...treksInTitle, ...treksInRegion]
      .slice(0, MAX_PER_GROUP)
      .map((t): Suggestion => ({
        kind: "trek",
        key: `trek:${t.slug}`,
        title: t.title,
        href: `/${t.category?.slug || "treks"}/${t.slug}`,
        meta: `${t.region || "Nepal"} · ${t.duration} days · ${t.difficulty}`,
      }));

    const inTitle = posts.filter((p) => p.title.toLowerCase().includes(q));
    const inTags = posts.filter(
      (p) => !p.title.toLowerCase().includes(q) && p.tags.some((t) => t.toLowerCase().includes(q))
    );
    const postMatches = [...inTitle, ...inTags].slice(0, MAX_PER_GROUP).map((p): Suggestion => ({
      kind: "blog",
      key: `blog:${p.slug}`,
      title: p.title,
      href: `/blog/${p.slug}`,
      meta: p.tags.slice(0, 3).join(" · ") || "Article",
    }));

    return [...trekMatches, ...postMatches];
  }, [query, availableTreks, posts]);

  const showNoResults = hasRequested && query.trim().length > 1 && suggestions.length === 0;
  const open = focused && (suggestions.length > 0 || showNoResults);

  // The dropdown is portalled to <body> so hero sections with overflow-hidden
  // can't clip it. It is position: fixed and re-measured every frame while
  // open, so it stays glued to the input through scrolling, the header's
  // shrink animation and hero transforms. z-40 keeps it under the sticky
  // header (z-50) instead of drawing over the nav.
  useLayoutEffect(() => {
    if (!open) return;
    let frame = 0;
    const update = () => {
      const rect = barRef.current?.getBoundingClientRect();
      if (rect) {
        const next = {
          top: rect.bottom,
          left: rect.left,
          width: rect.width,
          maxHeight: Math.max(160, Math.min(448, window.innerHeight - rect.bottom - 16)),
        };
        setPosition((prev) =>
          prev &&
          prev.top === next.top &&
          prev.left === next.left &&
          prev.width === next.width &&
          prev.maxHeight === next.maxHeight
            ? prev
            : next
        );
      }
      frame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frame);
  }, [open]);

  async function loadData() {
    if (hasRequested) return;
    setHasRequested(true);
    const fetchList = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return Array.isArray(data) ? data : null;
      } catch {
        // Normal search still works even when autocomplete is unavailable.
        return null;
      }
    };
    const [trekList, postList] = await Promise.all([
      treks.length > 0 ? Promise.resolve(null) : fetchList("/api/trek/list-all"),
      fetchList(`/api/blog/list-all${authorSlug ? `?author=${encodeURIComponent(authorSlug)}` : ""}`),
    ]);
    if (trekList) setAvailableTreks(trekList);
    if (postList) setPosts(postList);
  }

  function handleSearch(val: string) {
    if (!val.trim()) return;
    // The /search page lists packages; when only articles match, open the best one.
    if (suggestions.length > 0 && suggestions.every((s) => s.kind === "blog")) {
      router.push(suggestions[0].href);
      return;
    }
    router.push(`/search?q=${encodeURIComponent(val.trim())}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        router.push(suggestions[selectedIndex].href);
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

  const q = query.trim().toLowerCase();

  const dropdown = open && position && (
    <div
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        width: position.width,
        maxHeight: position.maxHeight,
      }}
      className="z-40 overflow-y-auto rounded-b-2xl rounded-t-lg border border-border bg-surface shadow-xl"
      onMouseLeave={() => setSelectedIndex(-1)}
    >
      {showNoResults ? (
        <p className="px-4 py-3 text-sm text-text-muted">No packages or articles found for &ldquo;{query.trim()}&rdquo;</p>
      ) : (
        suggestions.map((item, i) => {
          const matchIdx = item.title.toLowerCase().indexOf(q);
          const before = matchIdx > 0 ? item.title.slice(0, matchIdx) : "";
          const match = matchIdx >= 0 ? item.title.slice(matchIdx, matchIdx + q.length) : "";
          const after = matchIdx >= 0 ? item.title.slice(matchIdx + q.length) : item.title;
          const Icon = item.kind === "blog" ? FileText : MapPin;
          const startsGroup = i === 0 || suggestions[i - 1].kind !== item.kind;

          return (
            <div key={item.key}>
              {startsGroup && (
                <p
                  className={`bg-surface-alt px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-text-muted sm:px-4 ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  {item.kind === "blog" ? "Articles" : "Packages"}
                </p>
              )}
              <button
                type="button"
                onMouseDown={() => router.push(item.href)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors sm:gap-3 sm:px-4 sm:py-3 ${
                  i === selectedIndex ? "bg-primary/10" : ""
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground sm:text-sm">
                    {before}
                    <span className="bg-primary/20 font-semibold text-primary">{match}</span>
                    {after}
                  </p>
                  <p className="mt-px truncate text-[11px] text-text-muted sm:text-xs">{item.meta}</p>
                </div>
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-text-muted sm:block" />
              </button>
            </div>
          );
        })
      )}
    </div>
  );

  return (
    <div ref={barRef} className="relative w-full">
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
            void loadData();
          }}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder ?? "Where do you want to go?"}
          aria-label="Search packages and articles"
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

      {dropdown && createPortal(dropdown, document.body)}
    </div>
  );
}
