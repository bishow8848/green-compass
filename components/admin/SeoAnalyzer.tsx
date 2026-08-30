"use client";

import { useEffect, useMemo, useState } from "react";
import {
  analyzeSeo,
  DESCRIPTION_MAX,
  TITLE_MAX,
  type SeoCheck,
  type SeoCheckGroup,
  type SeoCheckStatus,
} from "@/lib/seo-analysis";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

interface SeoAnalyzerProps {
  /** Rich text HTML being edited */
  html: string;
  title?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  onFocusKeywordChange?: (keyword: string) => void;
  /** URL path shown in the search preview, e.g. "/blog" */
  urlPrefix?: string;
  minWords?: number;
  /** The page template renders the title as <h1> (true for blog, treks and pages) */
  titleRendersH1?: boolean;
  defaultOpen?: boolean;
  /** Shown when the focus keyword cannot be persisted for this content type */
  focusKeywordHint?: string;
}

const GROUP_LABELS: Record<SeoCheckGroup, string> = {
  keyword: "Focus keyword",
  meta: "Search appearance",
  content: "Content & structure",
  readability: "Readability",
};

const STATUS_STYLES: Record<SeoCheckStatus, { dot: string; text: string; ring: string; label: string }> = {
  good: { dot: "bg-emerald-500", text: "text-emerald-700", ring: "stroke-emerald-500", label: "Good" },
  warn: { dot: "bg-amber-500", text: "text-amber-700", ring: "stroke-amber-500", label: "Needs work" },
  bad: { dot: "bg-rose-500", text: "text-rose-700", ring: "stroke-rose-500", label: "Poor" },
};

/** Debounce so analysis doesn't run on every keystroke of a long article. */
function useDebounced<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function ScoreRing({ score, status }: { score: number; status: SeoCheckStatus }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(100, Math.max(0, score)) / 100);
  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
        <circle cx="22" cy="22" r={radius} className="fill-none stroke-slate-200" strokeWidth="4" />
        <circle
          cx="22"
          cy="22"
          r={radius}
          className={`fill-none transition-all duration-500 ${STATUS_STYLES[status].ring}`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700">
        {score}
      </span>
    </div>
  );
}

function StatChip({ label, value, tone = "slate" }: { label: string; value: string | number; tone?: "slate" | "rose" }) {
  return (
    <div
      className={`rounded-lg px-2.5 py-1.5 text-center ${
        tone === "rose" ? "bg-rose-50 text-rose-700" : "bg-slate-50 text-slate-600"
      }`}
    >
      <div className="text-sm font-bold leading-none">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide opacity-70">{label}</div>
    </div>
  );
}

function CheckRow({ check }: { check: SeoCheck }) {
  const style = STATUS_STYLES[check.status];
  return (
    <li className="flex items-start gap-2 py-1.5">
      <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${style.dot}`}>
        {check.status === "good" ? (
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        ) : check.status === "warn" ? (
          <AlertTriangle className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        ) : (
          <X className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        )}
      </span>
      <span className="text-xs leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-800">{check.label}:</span> {check.message}
      </span>
    </li>
  );
}

/** Google-style search result preview. */
function SerpPreview({ title, description, urlPrefix, slug }: { title: string; description: string; urlPrefix: string; slug: string }) {
  const path = `${urlPrefix.replace(/\/$/, "")}/${slug || "your-slug"}`.replace(/\/{2,}/g, "/");
  const clip = (value: string, max: number) => (value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Google preview</p>
      <p className="truncate text-xs text-slate-500">greencompasstreks.com{path}</p>
      <p className="mt-0.5 text-[15px] leading-snug text-[#1a0dab]">
        {clip(title || "Your SEO title appears here", TITLE_MAX + 10)}
      </p>
      <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
        {clip(description || "Your meta description appears here — write 120–160 characters that make someone click.", DESCRIPTION_MAX + 10)}
      </p>
    </div>
  );
}

export function SeoAnalyzer({
  html,
  title = "",
  slug = "",
  metaTitle = "",
  metaDescription = "",
  focusKeyword = "",
  onFocusKeywordChange,
  urlPrefix = "/",
  minWords = 300,
  titleRendersH1 = true,
  defaultOpen = true,
  focusKeywordHint,
}: SeoAnalyzerProps) {
  const [open, setOpen] = useState(defaultOpen);
  const debouncedHtml = useDebounced(html);
  const debouncedKeyword = useDebounced(focusKeyword);
  const debouncedMetaTitle = useDebounced(metaTitle);
  const debouncedMetaDescription = useDebounced(metaDescription);
  const debouncedTitle = useDebounced(title);
  const debouncedSlug = useDebounced(slug);

  const report = useMemo(
    () =>
      analyzeSeo({
        html: debouncedHtml,
        title: debouncedTitle,
        slug: debouncedSlug,
        metaTitle: debouncedMetaTitle,
        metaDescription: debouncedMetaDescription,
        focusKeyword: debouncedKeyword,
        minWords,
        titleRendersH1,
      }),
    [debouncedHtml, debouncedTitle, debouncedSlug, debouncedMetaTitle, debouncedMetaDescription, debouncedKeyword, minWords, titleRendersH1]
  );

  const { stats, checks, score, grade } = report;
  const problems = checks.filter((check) => check.status !== "good").length;
  const groups: SeoCheckGroup[] = ["keyword", "meta", "content", "readability"];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header — always visible, so the score follows you while writing */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <ScoreRing score={score} status={grade} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5 text-slate-400" />
            <h3 className="text-sm font-bold text-slate-900">SEO analysis</h3>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              grade === "good" ? "bg-emerald-100 text-emerald-700"
              : grade === "warn" ? "bg-amber-100 text-amber-700"
              : "bg-rose-100 text-rose-700"
            }`}>
              {STATUS_STYLES[grade].label}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs text-slate-400">
            {stats.words} words · {stats.readingMinutes} min read ·{" "}
            {problems === 0 ? "all checks pass" : `${problems} improvement${problems > 1 ? "s" : ""} suggested`}
          </p>
        </div>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="space-y-4 border-t border-slate-100 px-4 py-4">
          {/* Focus keyword */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">Focus keyword</label>
            <input
              type="text"
              value={focusKeyword}
              onChange={(event) => onFocusKeywordChange?.(event.target.value)}
              readOnly={!onFocusKeywordChange}
              placeholder="e.g. mardi himal trek"
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />
            {focusKeywordHint && <p className="mt-1 text-[11px] text-slate-400">{focusKeywordHint}</p>}
          </div>

          <SerpPreview
            title={metaTitle || title}
            description={metaDescription}
            urlPrefix={urlPrefix}
            slug={slug}
          />

          {/* Live content stats */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            <StatChip label="Words" value={stats.words} />
            <StatChip label="Read" value={`${stats.readingMinutes}m`} />
            <StatChip label="H2 / H3" value={`${stats.h2}/${stats.h3}`} />
            <StatChip label="Density" value={`${stats.keywordDensity}%`} />
            <StatChip label="Links" value={`${stats.internalLinks}/${stats.externalLinks}`} />
            <StatChip
              label="No alt"
              value={stats.imagesMissingAlt}
              tone={stats.imagesMissingAlt > 0 ? "rose" : "slate"}
            />
          </div>

          {/* Checks */}
          <div className="space-y-3">
            {groups.map((group) => {
              const groupChecks = checks.filter((check) => check.group === group);
              if (groupChecks.length === 0) return null;
              return (
                <div key={group}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {GROUP_LABELS[group]}
                  </p>
                  <ul className="mt-1 divide-y divide-slate-50">
                    {groupChecks.map((check) => (
                      <CheckRow key={check.id} check={check} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
