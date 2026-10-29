"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

/** How often the count is fetched again while this page is in view. */
const REFRESH_EVERY = 20_000;

/** The live "Active now" count, refreshed while the admin keeps the page in view. */
export function ActiveVisitors({ initial, windowMinutes }: { initial: number | null; windowMinutes: number }) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const refresh = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const response = await fetch("/api/visitors/active", { cache: "no-store" });
        if (response.ok) setActive(((await response.json()) as { active: number | null }).active);
      } catch {
        // Offline for a moment: the last count stays up.
      }
    };
    const timer = setInterval(refresh, REFRESH_EVERY);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return (
    <div className="flex items-center gap-5 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
      <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
        <Activity className="h-6 w-6" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="text-sm font-medium text-emerald-700">Active now</p>
        </div>
        <p className="mt-1 text-4xl font-bold text-slate-900">{active === null ? "—" : active.toLocaleString()}</p>
        <p className="text-sm text-slate-500">
          {active === null
            ? "Couldn't be counted just now"
            : `${active === 1 ? "visitor" : "visitors"} on the site in the last ${windowMinutes} minutes`}
        </p>
      </div>
    </div>
  );
}
