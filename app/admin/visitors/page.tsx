import { CalendarDays, Eye, Users } from "lucide-react";
import { ACTIVE_WINDOW_MS, activeVisitors, nepalDays, visitorSummary } from "@/lib/visitors";
import { ActiveVisitors } from "./active-visitors";

const RANGE_LABELS: Record<number, string> = {
  1: "Today",
  7: "Last 7 days",
  14: "Last 14 days",
  28: "Last 28 days",
};

// Days are YYYY-MM-DD strings, which parse as midnight UTC.
const shortDay = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
const longDay = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });

export default async function AdminVisitorsPage() {
  const [summary, active] = await Promise.all([visitorSummary(), activeVisitors()]);
  const days = nepalDays(28);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Visitors</h1>
        <p className="mt-1 text-sm text-slate-500">
          Who is on the site right now, and how many people visited recently. Days run on Nepal time.
        </p>
      </div>

      <ActiveVisitors initial={active} windowMinutes={ACTIVE_WINDOW_MS / 60_000} />

      {summary ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.ranges.map((range) => {
            const first = shortDay.format(new Date(days[range.days - 1]));
            const last = shortDay.format(new Date(days[0]));
            return (
              <div key={range.days} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{RANGE_LABELS[range.days]}</p>
                    <p className="text-xs text-slate-400">{range.days === 1 ? last : `${first} – ${last}`}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-2 text-teal-600">
                    {range.days === 1 ? <CalendarDays className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                  </div>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-900">{range.visitors.toLocaleString()}</p>
                <p className="text-sm text-slate-500">{range.visitors === 1 ? "visitor" : "visitors"}</p>
                <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <Eye className="h-3.5 w-3.5" />
                  {range.pageViews.toLocaleString()} page {range.pageViews === 1 ? "view" : "views"}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          Visitor counts can&apos;t be loaded right now. Try again in a minute.
        </div>
      )}

      <div className="space-y-1 text-xs text-slate-400">
        <p>
          A visitor is one browser, counted once however many pages it opens or days it comes back within a
          range. Admins, search-engine bots and the admin panel aren&apos;t counted.
        </p>
        {summary?.countingSince && (
          <p>
            Counting began on {longDay.format(new Date(summary.countingSince))}, so the longer ranges only cover
            the days since.
          </p>
        )}
      </div>
    </div>
  );
}
