"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileDown, Mountain, Search } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

interface PackageRow {
  id: string;
  title: string;
  subtitle: string | null;
  duration: number;
  status: string;
  heroImage: string | null;
  category: { name: string } | null;
}

const statusStyles: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  draft: "bg-amber-50 text-amber-700 border-amber-200",
  archived: "bg-slate-50 text-slate-600 border-slate-200",
};

const STATUSES = ["all", "published", "draft", "archived"] as const;

export function PdfBuilderList({ packages }: { packages: PackageRow[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("all");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of packages) {
      const name = row.category?.name || "Uncategorized";
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
    return Array.from(counts).sort(([a], [b]) => a.localeCompare(b));
  }, [packages]);

  const query = search.trim().toLowerCase();
  const shown = packages.filter(
    (row) =>
      (category === "all" || (row.category?.name || "Uncategorized") === category) &&
      (status === "all" || row.status === status) &&
      (!query || row.title.toLowerCase().includes(query) || row.subtitle?.toLowerCase().includes(query))
  );

  const chip = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
      active ? "bg-teal-50 text-teal-700 ring-1 ring-teal-300 shadow-sm" : "text-slate-500 hover:bg-slate-100"
    }`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setCategory("all")} className={chip(category === "all")}>
            All <span className="ml-1 text-[10px] opacity-60">({packages.length})</span>
          </button>
          {categories.map(([name, count]) => (
            <button key={name} type="button" onClick={() => setCategory(name)} className={chip(category === name)}>
              {name} <span className="ml-1 text-[10px] opacity-60">({count})</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as (typeof STATUSES)[number])}
            aria-label="Status"
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-600 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s === "all" ? "Any status" : s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search packages..."
              className="w-56 rounded-lg border border-slate-200 py-1.5 pr-3 pl-8 text-xs placeholder-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {shown.length === 0 ? (
          <div className="flex flex-col items-center px-5 py-16 text-center">
            <Mountain className="h-10 w-10 text-slate-300" />
            <p className="mt-3 text-sm font-medium text-slate-600">No packages found</p>
            <p className="mt-1 text-xs text-slate-400">Try a different search or filter.</p>
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {shown.map((row) => (
              <li key={row.id} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-slate-50/50">
                <div className="h-11 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {row.heroImage ? (
                    <img
                      src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_128,h_88,q_auto,f_auto/${row.heroImage}`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center">
                      <Mountain className="h-4 w-4 text-slate-300" />
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900">{row.title}</p>
                  <p className="truncate text-xs text-slate-400">
                    {[row.category?.name, row.subtitle, `${row.duration} ${row.duration === 1 ? "day" : "days"}`].filter(Boolean).join(" · ")}
                  </p>
                </div>
                {row.status !== "published" && (
                  <span className={`hidden shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize sm:inline-flex ${statusStyles[row.status] || statusStyles.archived}`}>
                    {row.status}
                  </span>
                )}
                <Link
                  href={`/admin/pdf-builder/${row.id}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
                >
                  <FileDown className="h-3.5 w-3.5" /> Customize
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-xs text-slate-400">
        {shown.length} of {packages.length} packages
      </p>
    </div>
  );
}
