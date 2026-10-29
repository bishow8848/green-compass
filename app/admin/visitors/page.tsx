import { liveVisitors, visitorReport } from "@/lib/visitors";
import { VisitorsDashboard } from "./visitors-dashboard";

const longDay = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });
const regions = new Intl.DisplayNames(["en"], { type: "region" });

export default async function AdminVisitorsPage() {
  const [report, live] = await Promise.all([visitorReport(), liveVisitors()]);

  // Named here, once, so the browser's copy of the page can't name a country differently.
  const countryNames: Record<string, string> = {};
  const codes = [...(report?.ranges.flatMap((range) => range.countries) ?? []), ...(live?.countries ?? [])];
  for (const { key } of codes) {
    if (/^[A-Z]{2}$/.test(key) && key !== "XX") countryNames[key] = regions.of(key) ?? key;
  }

  return (
    <div className="space-y-6">
      <VisitorsDashboard report={report} initialLive={live} countryNames={countryNames} />

      <div className="space-y-1.5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-400">
        <p>
          <span className="font-semibold text-slate-500">Visitors</span> are browsers, each counted once however many
          pages it opens or days it comes back within a range. A <span className="font-semibold text-slate-500">visit</span>{" "}
          starts with the first page someone opens after 30 minutes away; the{" "}
          <span className="font-semibold text-slate-500">bounce rate</span> is the share of visits that saw only one page.
          Admins, search-engine bots and the admin panel aren&apos;t counted.
        </p>
        {report?.countingSince && (
          <p>
            Counting began on {longDay.format(new Date(report.countingSince))}, so the longer ranges and their
            comparisons only cover the days since.
          </p>
        )}
      </div>
    </div>
  );
}
