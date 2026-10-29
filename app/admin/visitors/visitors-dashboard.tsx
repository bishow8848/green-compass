"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowDown, ArrowUp, BarChart3, CalendarClock, Compass, Download, FileText, Globe2, LineChart,
  Monitor, MonitorSmartphone, RefreshCw, Smartphone, Table2, Tablet,
} from "lucide-react";
import { CountUp } from "@/components/motion";
import type { Live, RangeDays, RangeReport, Totals, VisitorReport } from "@/lib/visitors";
import {
  BarRows, ChartCard, DonutChart, Heatmap, MinuteBars, OTHER, Pills, SERIES, SplitBar, TrendChart, formatCount,
} from "./charts";

const RANGE_LABELS: Record<RangeDays, string> = { 1: "Today", 7: "7 days", 14: "14 days", 28: "28 days" };
const DEVICE_LABELS: Record<string, string> = { desktop: "Desktop", mobile: "Mobile", tablet: "Tablet" };
const DEVICE_ICONS = { desktop: Monitor, mobile: Smartphone, tablet: Tablet };
const SOURCE_LABELS: Record<string, string> = {
  search: "Search engines",
  direct: "Direct",
  social: "Social media",
  ai: "AI assistants",
  other: "Other sites",
};
const BROWSER_LABELS: Record<string, string> = {
  chrome: "Chrome",
  safari: "Safari",
  edge: "Edge",
  firefox: "Firefox",
  samsung: "Samsung Internet",
  other: "Other",
};
const SYSTEM_LABELS: Record<string, string> = {
  android: "Android",
  ios: "iOS / iPadOS",
  windows: "Windows",
  macos: "macOS",
  linux: "Linux / ChromeOS",
  other: "Other",
};

type MetricKey = "visitors" | "visits" | "pageViews" | "pagesPerVisit" | "bounceRate";

const METRICS: Array<{
  key: MetricKey;
  label: string;
  kind: "count" | "ratio" | "percent";
  /** Whether a rise is good news. */
  rising: boolean;
  of: (t: Totals) => number | null;
  format: (n: number) => string;
}> = [
  { key: "visitors", label: "Visitors", kind: "count", rising: true, of: (t) => t.visitors, format: formatCount },
  { key: "visits", label: "Visits", kind: "count", rising: true, of: (t) => t.visits, format: formatCount },
  { key: "pageViews", label: "Page views", kind: "count", rising: true, of: (t) => t.pageViews, format: formatCount },
  {
    key: "pagesPerVisit",
    label: "Pages / visit",
    kind: "ratio",
    rising: true,
    of: (t) => (t.visits ? t.pageViews / t.visits : null),
    format: (n) => n.toFixed(1),
  },
  {
    key: "bounceRate",
    label: "Bounce rate",
    kind: "percent",
    rising: false,
    of: (t) => (t.visits ? 1 - Math.min(t.engaged, t.visits) / t.visits : null),
    format: (n) => `${Math.round(n * 100)}%`,
  },
];

// Days are YYYY-MM-DD strings, which parse as midnight UTC. Locales and zones
// are fixed so the server's render and the browser's agree.
const shortDay = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
const longDay = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });
const clock = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kathmandu" });
const regions = new Intl.DisplayNames(["en"], { type: "region" });

/** How often the live panel is fetched again while the page is in view. */
const LIVE_EVERY = 15_000;

/** A country's flag, from its two letters; a globe when unknown. */
function flag(code: string) {
  if (!/^[A-Z]{2}$/.test(code) || code === "XX") return "🌐";
  return String.fromCodePoint(...[...code].map((letter) => 0x1f1a5 + letter.charCodeAt(0)));
}

/** Who is on the site now, fetched again every LIVE_EVERY while the page is in view. */
function useLive(initial: Live | null) {
  const [live, setLive] = useState(initial);
  useEffect(() => {
    const refresh = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const response = await fetch("/api/visitors/live", { cache: "no-store" });
        if (response.ok) setLive(((await response.json()) as { live: Live | null }).live);
      } catch {
        // Offline for a moment: the last reading stays up.
      }
    };
    const timer = setInterval(refresh, LIVE_EVERY);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  return live;
}

/**
 * The Visitors page: a range picker scoping everything below it, the headline
 * metrics against the previous period (each one charts itself when clicked),
 * the live panel, and breakdowns of pages, sources, places, audience and the
 * busiest times.
 */
export function VisitorsDashboard({
  report,
  initialLive,
  countryNames,
}: {
  report: VisitorReport | null;
  initialLive: Live | null;
  countryNames: Record<string, string>;
}) {
  const router = useRouter();
  const [refreshing, startRefresh] = useTransition();
  const [days, setDays] = useState<RangeDays>(1);
  const live = useLive(initialLive);
  const range = report?.ranges.find((r) => r.days === days) ?? null;
  const countryName = (code: string) =>
    code === "other" ? "Other countries" : code === "XX" ? "Unknown" : (countryNames[code] ?? regions.of(code) ?? code);

  return (
    <div className="space-y-5">
      {/* Title, live count, and the controls that scope everything below. */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Visitors</h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {live ? `${formatCount(live.active)} online now` : "Live count unavailable"}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">How people find and use the site. Days run on Nepal time.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Pills
            label="Date range"
            value={String(days) as `${RangeDays}`}
            onChange={(value) => setDays(Number(value) as RangeDays)}
            options={(Object.keys(RANGE_LABELS) as Array<`${RangeDays}`>).map((value) => ({
              value,
              label: RANGE_LABELS[Number(value) as RangeDays],
            }))}
          />
          <button
            type="button"
            onClick={() => startRefresh(() => router.refresh())}
            title={report ? `Updated ${clock.format(report.generatedAt)} Nepal time` : "Refresh"}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
            {report ? clock.format(report.generatedAt) : "Refresh"}
          </button>
          {range && (
            <button
              type="button"
              onClick={() => downloadCsv(range, countryName)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              <Download className="h-3.5 w-3.5" />
              Export CSV
            </button>
          )}
        </div>
      </div>

      {range ? (
        <RangeView key={days} range={range} live={live} countryName={countryName} />
      ) : (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          Visitor counts can&apos;t be loaded right now. Try again in a minute.
        </div>
      )}
    </div>
  );
}

function RangeView({ range, live, countryName }: { range: RangeReport; live: Live | null; countryName: (code: string) => string }) {
  const [metricKey, setMetricKey] = useState<MetricKey>("visitors");
  const [view, setView] = useState<"area" | "bars" | "table">("area");
  const metric = METRICS.find((m) => m.key === metricKey)!;
  const hourly = range.days === 1;
  const comparedWith = hourly ? "yesterday" : `previous ${range.days} days`;
  const period = hourly
    ? `Today, ${shortDay.format(new Date(range.to))}`
    : `${shortDay.format(new Date(range.from))} – ${shortDay.format(new Date(range.to))}`;

  const labels = range.series.map((p) => (hourly ? `${p.at}:00` : shortDay.format(new Date(p.at))));
  const titles = range.series.map((p) => (hourly ? `Today ${p.at}:00 – ${p.at}:59` : longDay.format(new Date(p.at))));
  const previousTitles = range.previousSeries.map((p) => (hourly ? `Yesterday ${p.at}:00` : longDay.format(new Date(p.at))));
  const current = range.series.map(metric.of);
  const previous = range.previousSeries.map(metric.of);

  return (
    <div className="space-y-5">
      {/* Headline metrics: each against the previous period, and a button that charts it. */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm lg:grid-cols-5">
        {METRICS.map((m) => {
          const now = m.of(range.current);
          const before = m.of(range.previous);
          const selected = m.key === metricKey;
          return (
            <button
              key={m.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setMetricKey(m.key)}
              className={`relative bg-white p-4 text-left transition-colors max-lg:last:col-span-2 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500 sm:p-5 ${
                selected ? "bg-gradient-to-b from-teal-50/80 to-white" : "hover:bg-slate-50"
              }`}
            >
              {selected && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-teal-500" />}
              <p className={`text-xs font-semibold uppercase tracking-wide ${selected ? "text-teal-700" : "text-slate-500"}`}>{m.label}</p>
              <p className="mt-1.5 text-2xl font-bold text-slate-900 sm:text-3xl">
                {now === null ? "—" : <CountUp value={m.format(now)} />}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <Change now={now} before={before} rising={m.rising} />
                <span className="text-[11px] text-slate-400">vs {comparedWith}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard
          fill
          className="xl:col-span-2"
          icon={hourly ? CalendarClock : LineChart}
          title={metric.label}
          subtitle={`${hourly ? "Hour by hour" : "Day by day"} · ${period} vs ${comparedWith}`}
          action={
            <Pills
              label="Chart type"
              value={view}
              onChange={setView}
              options={[
                { value: "area", label: <LineChart className="h-3.5 w-3.5" />, title: "Area chart" },
                { value: "bars", label: <BarChart3 className="h-3.5 w-3.5" />, title: "Bar chart" },
                { value: "table", label: <Table2 className="h-3.5 w-3.5" />, title: "Table" },
              ]}
            />
          }
        >
          {view === "table" ? (
            <div className="max-h-[300px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white">
                  <tr className="border-b border-slate-100 text-left text-xs text-slate-500">
                    <th className="py-2 font-medium">{hourly ? "Hour" : "Day"}</th>
                    <th className="py-2 text-right font-medium">{metric.label}</th>
                    <th className="py-2 text-right font-medium">{hourly ? "Yesterday" : "Previous period"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {titles.map((title, i) => (
                    <tr key={title}>
                      <td className="py-1.5 text-slate-700">{title}</td>
                      <td className="py-1.5 text-right font-semibold tabular-nums text-slate-900">
                        {current[i] === null ? "—" : metric.format(current[i]!)}
                      </td>
                      <td className="py-1.5 text-right tabular-nums text-slate-500">
                        {previous[i] == null ? "—" : metric.format(previous[i]!)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <TrendChart
              mode={view}
              kind={metric.kind}
              format={metric.format}
              current={current}
              previous={previous}
              labels={labels}
              titles={titles}
              previousTitles={previousTitles}
              names={[hourly ? "Today" : "This period", hourly ? "Yesterday" : "Previous period"]}
            />
          )}
        </ChartCard>

        <LivePanel live={live} countryName={countryName} />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <TabbedCard
          icon={FileText}
          title="Pages"
          tabs={{
            "Top pages": (
              <BarRows
                heading="Page"
                unit="Views"
                total={range.current.pageViews}
                empty="No page views in this range yet."
                more={{ limit: 5, title: `Top pages · ${period}`, noun: "pages" }}
                rows={range.pages.map((p) => ({ key: p.key, label: pageLabel(p.key), count: p.count, href: p.key }))}
              />
            ),
            "Entry pages": (
              <BarRows
                heading="First page of a visit"
                unit="Visits"
                total={range.current.visits}
                empty="No visits in this range yet."
                more={{ limit: 5, title: `Entry pages · ${period}`, noun: "entry pages" }}
                rows={range.entryPages.map((p) => ({ key: p.key, label: pageLabel(p.key), count: p.count, href: p.key }))}
              />
            ),
          }}
        />

        <TabbedCard
          icon={Compass}
          title="Sources"
          tabs={{
            Channels: (
              <DonutChart
                unit="visits"
                empty="No visits in this range yet."
                slices={range.sources.map((s, i) => ({
                  key: s.key,
                  label: SOURCE_LABELS[s.key],
                  count: s.count,
                  color: s.key === "other" ? OTHER : SERIES[i],
                }))}
              />
            ),
            Referrers: (
              <BarRows
                heading="Site or link that sent the visit"
                unit="Visits"
                total={range.current.visits}
                empty="No visits from other sites in this range yet."
                rows={range.referrers.map((r) => ({
                  key: r.key,
                  label: r.key,
                  count: r.count,
                  // A tagged link may name its source rather than a site.
                  href: r.key.includes(".") ? `https://${r.key}` : undefined,
                }))}
              />
            ),
          }}
        />

        <ChartCard icon={Globe2} title="Countries" subtitle="Where visits came from">
          <BarRows
            heading="Country"
            unit="Visits"
            total={range.current.visits}
            empty="No visits in this range yet."
            rows={range.countries.map((c) => ({
              key: c.key,
              label: countryName(c.key),
              prefix: c.key === "other" ? "🌍" : flag(c.key),
              count: c.count,
              other: c.key === "other",
            }))}
          />
        </ChartCard>

        <TabbedCard
          icon={MonitorSmartphone}
          title="Audience"
          tabs={{
            Devices: (
              <DonutChart
                unit="visits"
                empty="No visits in this range yet."
                slices={range.devices.map((d, i) => ({
                  key: d.key,
                  label: DEVICE_LABELS[d.key],
                  count: d.count,
                  color: SERIES[i],
                  icon: DEVICE_ICONS[d.key as keyof typeof DEVICE_ICONS],
                }))}
              />
            ),
            Browsers: (
              <DonutChart
                unit="visits"
                empty="No visits in this range yet."
                slices={range.browsers.map((b, i) => ({
                  key: b.key,
                  label: BROWSER_LABELS[b.key],
                  count: b.count,
                  color: b.key === "other" ? OTHER : SERIES[i],
                }))}
              />
            ),
            Systems: (
              <DonutChart
                unit="visits"
                empty="No visits in this range yet."
                slices={range.systems.map((s, i) => ({
                  key: s.key,
                  label: SYSTEM_LABELS[s.key],
                  count: s.count,
                  color: s.key === "other" ? OTHER : SERIES[i],
                }))}
              />
            ),
            "New vs returning": (
              <SplitBar
                empty="No visits in this range yet."
                parts={range.visitorTypes.map((t) => ({
                  key: t.key,
                  label: t.key === "new" ? "New visitors" : "Returning visitors",
                  count: t.count,
                }))}
              />
            ),
          }}
        />
      </div>

      <ChartCard
        icon={CalendarClock}
        title="Busiest times"
        subtitle={`Page views by day of the week and hour, Nepal time · last ${range.heatmap.days} days`}
      >
        <Heatmap cells={range.heatmap.cells} />
      </ChartCard>
    </div>
  );
}

/** The change since the previous period, green when it's good news and red when it isn't. */
function Change({ now, before, rising }: { now: number | null; before: number | null; rising: boolean }) {
  const quiet = "rounded-full bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500";
  if (now === null || before === null) return <span className={quiet}>—</span>;
  if (before === 0) return <span className={quiet}>{now === 0 ? "No change" : "New"}</span>;
  const change = (now - before) / before;
  if (Math.abs(change) < 0.005) return <span className={quiet}>No change</span>;
  const good = change > 0 === rising;
  const Arrow = change > 0 ? ArrowUp : ArrowDown;
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
        good ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
      }`}
    >
      <Arrow className="h-3 w-3" aria-hidden />
      <span className="sr-only">{change > 0 ? "up" : "down"}</span>
      {Math.round(Math.abs(change) * 100)}%
    </span>
  );
}

function LivePanel({ live, countryName }: { live: Live | null; countryName: (code: string) => string }) {
  return (
    <section className="relative min-w-0 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 via-white to-white p-5 shadow-sm">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Right now
        </h2>
        <span className="text-[11px] text-slate-400">Updates every 15s</span>
      </div>

      {live ? (
        <div className="relative">
          <p className="mt-3 text-6xl font-bold tracking-tight text-slate-900">{formatCount(live.active)}</p>
          <p className="text-sm text-slate-500">{live.active === 1 ? "visitor" : "visitors"} on the site in the last 5 minutes</p>

          <div className="mt-3 flex gap-3 text-xs text-slate-600">
            {live.devices.map((d) => {
              const Icon = DEVICE_ICONS[d.key as keyof typeof DEVICE_ICONS];
              return (
                <span key={d.key} className="inline-flex items-center gap-1" title={DEVICE_LABELS[d.key]}>
                  <Icon className="h-3.5 w-3.5 text-slate-400" aria-hidden />
                  <span className="sr-only">{DEVICE_LABELS[d.key]}</span>
                  {d.count}
                </span>
              );
            })}
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold text-slate-500">Page views per minute</p>
            <MinuteBars values={live.minutes} />
          </div>

          <div className="mt-5">
            <p className="mb-1.5 text-xs font-semibold text-slate-500">Being viewed</p>
            {live.pages.length ? (
              <ul className="space-y-1">
                {live.pages.map((p) => (
                  <li key={p.key} className="flex items-center justify-between gap-2 rounded-lg bg-white/70 px-2.5 py-1.5 text-sm">
                    <span className="truncate text-slate-700">{pageLabel(p.key)}</span>
                    <span className="rounded-full bg-emerald-100 px-2 text-xs font-semibold text-emerald-700">{p.count}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">Nobody is browsing right now.</p>
            )}
          </div>

          {live.countries.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {live.countries.map((c) => (
                <span key={c.key} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">
                  <span aria-hidden>{flag(c.key)}</span>
                  {countryName(c.key)}
                  <span className="font-semibold text-slate-900">{c.count}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="relative mt-6 text-sm text-slate-500">The live count can&apos;t be loaded right now.</p>
      )}
    </section>
  );
}

/** A card whose body switches between a few views of the same subject. */
function TabbedCard({
  icon,
  title,
  tabs,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tabs: Record<string, React.ReactNode>;
}) {
  const names = Object.keys(tabs);
  const [tab, setTab] = useState(names[0]);
  return (
    <ChartCard
      icon={icon}
      title={title}
      action={<Pills label={`${title} view`} value={tab} onChange={setTab} options={names.map((name) => ({ value: name, label: name }))} />}
    >
      {tabs[tab]}
    </ChartCard>
  );
}

function pageLabel(path: string) {
  return path === "/" ? "/ (home page)" : path;
}

/** The range as a spreadsheet: the trend first, then every breakdown. */
function downloadCsv(range: RangeReport, countryName: (code: string) => string) {
  const rows: Array<Array<string | number>> = [
    [range.days === 1 ? "Hour" : "Day", "Visitors", "Visits", "Page views", "Engaged visits"],
    ...range.series.map((p) => [range.days === 1 ? `${range.to} ${p.at}:00` : p.at, p.visitors, p.visits, p.pageViews, p.engaged]),
  ];
  const section = (heading: [string, string], counts: Array<{ key: string; count: number }>, name = (key: string) => key) =>
    rows.push([], heading, ...counts.map((c) => [name(c.key), c.count]));
  section(["Page", "Page views"], range.pages);
  section(["Entry page", "Visits"], range.entryPages);
  section(["Channel", "Visits"], range.sources, (key) => SOURCE_LABELS[key]);
  section(["Referring site", "Visits"], range.referrers);
  section(["Country", "Visits"], range.countries, countryName);
  section(["Device", "Visits"], range.devices, (key) => DEVICE_LABELS[key]);
  section(["Browser", "Visits"], range.browsers, (key) => BROWSER_LABELS[key]);
  section(["Operating system", "Visits"], range.systems, (key) => SYSTEM_LABELS[key]);
  section(["Visitor", "Visits"], range.visitorTypes);

  // Quoted where needed, and a leading = + - @ defused so a spreadsheet never runs it as a formula.
  const cell = (value: string | number) => {
    const text = String(value).replace(/^([=+\-@])/, "'$1");
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const csv = rows.map((row) => row.map(cell).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = `visitors-${range.from}-to-${range.to}.csv`;
  link.click();
  // Released once the browser has started the download.
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

