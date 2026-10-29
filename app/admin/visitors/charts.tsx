"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * The Visitors page's charts, drawn as plain SVG and HTML. Colours are the
 * validated categorical slots, assigned per category in a fixed order so a
 * category keeps its colour whatever the range; "other" and the previous
 * period take the de-emphasis grey.
 */
export const SERIES = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"] as const;
export const OTHER = "#94a3b8";
const PREVIOUS_BAR = "#cbd5e1";
/** Hairline grid, the baseline, tick labels, the crosshair. */
const GRID = "#eef2f6";
const BASELINE = "#cbd5e1";
const TICK = "#94a3b8";
/** The sequential blue ramp, light to dark, for the heatmap; the first is "none". */
const RAMP = ["#f1f5f9", "#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95"];

export const formatCount = (n: number) => n.toLocaleString("en-US");

export function ChartCard({
  title,
  subtitle,
  icon: Icon,
  action,
  className = "",
  fill = false,
  children,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  action?: React.ReactNode;
  className?: string;
  /** Let the body grow to the card's full height, for a chart that sizes itself to it. */
  fill?: boolean;
  children: React.ReactNode;
}) {
  return (
    // min-w-0: a grid cell must be free to shrink below a chart drawn for a wider screen.
    <section className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${fill ? "flex flex-col" : ""} ${className}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="rounded-xl bg-teal-50 p-2 text-teal-600">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <div>
            <h2 className="text-sm font-bold text-slate-900">{title}</h2>
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {action}
      </div>
      {fill ? <div className="flex min-h-0 flex-1 flex-col">{children}</div> : children}
    </section>
  );
}

/** A row of pill buttons, one of them chosen. */
export function Pills<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: Array<{ value: T; label: React.ReactNode; title?: string }>;
  value: T;
  onChange: (value: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="inline-flex rounded-xl bg-slate-100 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          title={option.title}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
            option.value === value ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

/** A legend key: a small rounded rect for bars and slices, a short stroke for lines. */
function Key({ color, line = false }: { color: string; line?: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 ${line ? "h-0.5 w-3.5 rounded-full" : "h-2.5 w-2.5 rounded-sm"}`}
      style={{ backgroundColor: color }}
    />
  );
}

/** The size of an element, kept up to date. */
function useSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height })
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return [ref, size] as const;
}

/** Steps of 1, 2 or 5 x 10^n that put about four gridlines over `max`; whole numbers for counts. */
function ticksFor(max: number, whole: boolean): number[] {
  const rough = Math.max(max, whole ? 1 : 0.1) / 4;
  const power = 10 ** Math.floor(Math.log10(rough));
  const found = [1, 2, 5, 10].map((n) => n * power).find((n) => n >= rough) ?? 10 * power;
  const step = whole ? Math.max(1, found) : found;
  const ticks = [0];
  while (ticks[ticks.length - 1] < max - 1e-9) ticks.push(Number((ticks[ticks.length - 1] + step).toFixed(6)));
  return ticks.length > 1 ? ticks : [0, step];
}

/** A column with a 4px rounded data end and a square foot on the baseline. */
function columnPath(x: number, y: number, width: number, height: number) {
  const r = Math.min(4, width / 2, height);
  return `M${x},${y + height}V${y + r}Q${x},${y} ${x + r},${y}H${x + width - r}Q${x + width},${y} ${x + width},${y + r}V${y + height}Z`;
}

export interface TrendProps {
  /** One value per period; null where it can't be worked out (a rate with no visits). */
  current: Array<number | null>;
  previous: Array<number | null>;
  labels: string[];
  titles: string[];
  previousTitles: string[];
  names: [current: string, previous: string];
  mode: "area" | "bars";
  kind: "count" | "ratio" | "percent";
  format: (n: number) => string;
}

/**
 * The period's trend against the one before it: an area (or columns) in the
 * accent, the previous period as a grey line (or columns) behind it. A
 * crosshair snaps to the nearest period, and the readout lists both values.
 */
export function TrendChart({ current, previous, labels, titles, previousTitles, names, mode, kind, format }: TrendProps) {
  const gradient = useId();
  // Drawn to fill whatever room its card has, so it lines up with the live panel beside it.
  const [ref, { width, height }] = useSize<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);
  const margin = { top: 12, right: 8, bottom: 28, left: 44 };
  const plotWidth = Math.max(0, width - margin.left - margin.right);
  const plotHeight = height - margin.top - margin.bottom;
  const values = [...current, ...previous].filter((v): v is number => v !== null);
  const ticks = kind === "percent" ? [0, 0.25, 0.5, 0.75, 1] : ticksFor(Math.max(0, ...values), kind === "count");
  const top = ticks[ticks.length - 1] || 1;
  const n = current.length;
  const band = n ? plotWidth / n : 0;
  const x = (i: number) => margin.left + band * (i + 0.5);
  const y = (v: number) => margin.top + plotHeight - (Math.min(v, top) / top) * plotHeight;
  const labelEvery = Math.max(1, Math.ceil(48 / Math.max(band, 1)));
  const tick = (v: number) => (kind === "percent" ? `${Math.round(v * 100)}%` : v >= 1000 ? `${v / 1000}K` : String(v));

  /** Line segments through the non-null points; a null breaks the line. */
  const segments = (series: Array<number | null>) => {
    const runs: Array<Array<[number, number]>> = [[]];
    series.forEach((v, i) => (v === null ? runs.push([]) : runs[runs.length - 1].push([x(i), y(v)])));
    return runs.filter((run) => run.length > 0);
  };
  const linePath = (run: Array<[number, number]>) => run.map(([px, py], i) => `${i ? "L" : "M"}${px},${py}`).join("");
  const lastIndex = current.reduce<number>((last, v, i) => (v === null ? last : i), -1);
  const bar = Math.max(2, Math.min(18, (band * 0.7 - 2) / 2));
  const shown = active ?? (mode === "area" ? lastIndex : null);

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex flex-wrap gap-4 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <Key color={SERIES[0]} line={mode === "area"} />
          {names[0]}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Key color={mode === "area" ? OTHER : PREVIOUS_BAR} line={mode === "area"} />
          {names[1]}
        </span>
      </div>
      {/* The SVG sits absolutely inside, so the box's size comes from the layout and never from the drawing. */}
      <div ref={ref} className="relative min-h-[280px] flex-1 select-none" onPointerLeave={() => setActive(null)}>
        {width > 0 && height > 0 && (
          <svg className="absolute inset-0" width={width} height={height} role="img" aria-label={`${names[0]} against ${names[1].toLowerCase()}, ${n} periods`}>
            <defs>
              <linearGradient id={gradient} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={SERIES[0]} stopOpacity={0.18} />
                <stop offset="100%" stopColor={SERIES[0]} stopOpacity={0} />
              </linearGradient>
            </defs>
            {ticks.map((t) => (
              <g key={t}>
                <line x1={margin.left} x2={width - margin.right} y1={y(t)} y2={y(t)} stroke={t === 0 ? BASELINE : GRID} />
                <text x={margin.left - 10} y={y(t)} dy="0.32em" textAnchor="end" fontSize={11} fill={TICK} className="tabular-nums">
                  {tick(t)}
                </text>
              </g>
            ))}

            {mode === "area" ? (
              <>
                {segments(current).map((run, r) =>
                  run.length > 1 ? (
                    <path
                      key={`fill${r}`}
                      d={`${linePath(run)}L${run[run.length - 1][0]},${y(0)}L${run[0][0]},${y(0)}Z`}
                      fill={`url(#${gradient})`}
                    />
                  ) : null
                )}
                {segments(previous).map((run, r) => (
                  <path key={`prev${r}`} d={linePath(run)} fill="none" stroke={OTHER} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                ))}
                {segments(current).map((run, r) => (
                  <path key={`line${r}`} d={linePath(run)} fill="none" stroke={SERIES[0]} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                ))}
                {active !== null && (
                  <line x1={x(active)} x2={x(active)} y1={margin.top} y2={y(0)} stroke={BASELINE} />
                )}
                {shown !== null && shown >= 0 && (
                  <>
                    {previous[shown] != null && active !== null && (
                      <circle cx={x(shown)} cy={y(previous[shown]!)} r={4} fill={OTHER} stroke="#ffffff" strokeWidth={2} />
                    )}
                    {current[shown] != null && (
                      <circle cx={x(shown)} cy={y(current[shown]!)} r={4.5} fill={SERIES[0]} stroke="#ffffff" strokeWidth={2} />
                    )}
                  </>
                )}
              </>
            ) : (
              current.map((v, i) => {
                const before = previous[i];
                const left = x(i) - bar - 1;
                return (
                  <g key={i} opacity={active === null || active === i ? 1 : 0.45}>
                    {before != null && before > 0 && (
                      <path d={columnPath(left, y(before), bar, y(0) - y(before))} fill={PREVIOUS_BAR} />
                    )}
                    {v != null && v > 0 && <path d={columnPath(left + bar + 2, y(v), bar, y(0) - y(v))} fill={SERIES[0]} />}
                  </g>
                );
              })
            )}

            {labels.map((label, i) =>
              i % labelEvery === 0 ? (
                <text key={i} x={x(i)} y={height - 8} textAnchor="middle" fontSize={11} fill={active === i ? "#334155" : TICK}>
                  {label}
                </text>
              ) : null
            )}

            {/* Each period's whole band is its hover and focus target. */}
            {labels.map((_, i) => (
              <rect
                key={i}
                x={margin.left + band * i}
                y={margin.top}
                width={band}
                height={plotHeight}
                fill="transparent"
                tabIndex={0}
                role="img"
                aria-label={`${titles[i]}: ${current[i] === null ? "none" : format(current[i]!)}; ${previousTitles[i]}: ${
                  previous[i] == null ? "none" : format(previous[i]!)
                }`}
                className="outline-none"
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              />
            ))}
          </svg>
        )}

        {active !== null && (
          <div
            className="pointer-events-none absolute top-1 z-10 min-w-44 rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 text-xs shadow-xl backdrop-blur"
            style={{ left: Math.min(Math.max(x(active) - 88, 0), Math.max(width - 184, 0)) }}
          >
            <p className="mb-1.5 font-medium text-slate-500">{titles[active]}</p>
            <p className="flex items-center gap-2">
              <Key color={SERIES[0]} line />
              <span className="text-sm font-bold text-slate-900">{current[active] === null ? "—" : format(current[active]!)}</span>
            </p>
            <p className="mt-1 flex items-center gap-2 text-slate-500">
              <Key color={OTHER} line />
              <span className="font-semibold text-slate-700">{previous[active] == null ? "—" : format(previous[active]!)}</span>
              {previousTitles[active]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export interface Slice {
  key: string;
  label: string;
  count: number;
  color: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Part of a whole as a ring, slices in their fixed order from the top. The
 * legend beside it lists every value and share, so nothing rests on colour;
 * hovering a slice or its legend row puts that slice's numbers in the middle.
 */
export function DonutChart({ slices, unit, empty }: { slices: Slice[]; unit: string; empty: string }) {
  const [active, setActive] = useState<string | null>(null);
  const total = slices.reduce((sum, slice) => sum + slice.count, 0);
  const size = 176;
  const outer = 84;
  const inner = 58;
  const centre = size / 2;
  const shown = slices.find((slice) => slice.key === active);

  if (total === 0) return <Empty text={empty} />;

  // Each slice starts where the one before it ended, the first at the top.
  const arcs = slices
    .filter((slice) => slice.count > 0)
    .reduce<Array<{ slice: Slice; start: number; end: number }>>((list, slice) => {
      const start = list.at(-1)?.end ?? -Math.PI / 2;
      return [...list, { slice, start, end: start + (slice.count / total) * 2 * Math.PI }];
    }, []);
  const point = (radius: number, a: number) => `${centre + radius * Math.cos(a)},${centre + radius * Math.sin(a)}`;
  const arcPath = (start: number, end: number) => {
    const large = end - start > Math.PI ? 1 : 0;
    return `M${point(outer, start)}A${outer},${outer} 0 ${large} 1 ${point(outer, end)}L${point(inner, end)}A${inner},${inner} 0 ${large} 0 ${point(inner, start)}Z`;
  };

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <svg width={size} height={size} className="shrink-0" role="img" aria-label={slices.map((s) => `${s.label} ${s.count}`).join(", ")}>
        {arcs.map(({ slice, start, end }) => (
          <g key={slice.key} onPointerEnter={() => setActive(slice.key)} onPointerLeave={() => setActive(null)}>
            {arcs.length === 1 ? (
              // One slice is the whole ring: an arc can't start and end at the same point.
              <circle cx={centre} cy={centre} r={(outer + inner) / 2} fill="none" stroke={slice.color} strokeWidth={outer - inner} />
            ) : (
              // The white stroke is the 2px surface gap between slices.
              <path d={arcPath(start, end)} fill={slice.color} stroke="#ffffff" strokeWidth={2} strokeLinejoin="round" />
            )}
          </g>
        ))}
        {active && (
          // Dims the other slices while one is hovered.
          <path
            d={arcs.filter((arc) => arc.slice.key !== active).map((arc) => arcPath(arc.start, arc.end)).join("")}
            fill="#ffffff"
            opacity={0.6}
            pointerEvents="none"
          />
        )}
        <text x={centre} y={centre - 2} textAnchor="middle" fontSize={24} fontWeight={700} fill="#0f172a">
          {shown ? `${Math.round((shown.count / total) * 100)}%` : formatCount(total)}
        </text>
        <text x={centre} y={centre + 18} textAnchor="middle" fontSize={11} fill="#64748b">
          {shown ? shown.label : unit}
        </text>
      </svg>
      <ul className="w-full min-w-0 flex-1 space-y-0.5 text-sm">
        {slices.map((slice) => (
          <li
            key={slice.key}
            tabIndex={0}
            onPointerEnter={() => setActive(slice.key)}
            onPointerLeave={() => setActive(null)}
            onFocus={() => setActive(slice.key)}
            onBlur={() => setActive(null)}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 ${
              active === slice.key ? "bg-slate-50" : ""
            }`}
          >
            <Key color={slice.color} />
            {slice.icon && <slice.icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />}
            <span className="min-w-0 flex-1 truncate text-slate-700">{slice.label}</span>
            <span className="font-semibold tabular-nums text-slate-900">{formatCount(slice.count)}</span>
            <span className="w-10 text-right text-xs tabular-nums text-slate-400">{Math.round((slice.count / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface Row {
  key: string;
  label: string;
  count: number;
  href?: string;
  /** Shown before the label: a flag, say. */
  prefix?: string;
  /** Folded-together rest, in the de-emphasis grey. */
  other?: boolean;
}

/**
 * A ranked list, each row's bar showing its share of the top row, with the
 * value and its share of `total` at the end.
 */
export function BarRows({ rows, total, heading, unit, empty }: { rows: Row[]; total: number; heading: string; unit: string; empty: string }) {
  const max = Math.max(0, ...rows.map((row) => row.count));
  if (max === 0) return <Empty text={empty} />;

  return (
    <div>
      <div className="mb-1.5 flex justify-between px-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        <span>{heading}</span>
        <span>{unit}</span>
      </div>
      <ul className="space-y-1">
        {rows.map((row) => (
          <li key={row.key} className="group relative flex h-9 items-center gap-3 overflow-hidden rounded-lg px-2.5">
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 rounded-lg transition-[width] duration-500"
              style={{
                width: `${Math.max((row.count / max) * 100, 1.5)}%`,
                backgroundColor: row.other ? "rgba(148,163,184,0.18)" : "rgba(42,120,214,0.11)",
              }}
            />
            <span className="relative flex min-w-0 flex-1 items-center gap-2 text-sm text-slate-700">
              {row.prefix && <span aria-hidden className="text-base leading-none">{row.prefix}</span>}
              {row.href ? (
                <a href={row.href} target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-center gap-1 hover:text-teal-700">
                  <span className="truncate">{row.label}</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ) : (
                <span className="truncate">{row.label}</span>
              )}
            </span>
            <span className="relative text-sm font-semibold tabular-nums text-slate-900">{formatCount(row.count)}</span>
            <span className="relative w-10 text-right text-xs tabular-nums text-slate-400">
              {total > 0 ? `${Math.round((row.count / total) * 100)}%` : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two parts of a whole as one bar: a pie of two slices says less than this. */
export function SplitBar({ parts, empty }: { parts: Array<{ key: string; label: string; count: number }>; empty: string }) {
  const total = parts.reduce((sum, part) => sum + part.count, 0);
  if (total === 0) return <Empty text={empty} />;

  return (
    <div className="py-4">
      <div className="flex h-4 gap-0.5 overflow-hidden rounded-full">
        {parts.map((part, i) =>
          part.count > 0 ? (
            <div key={part.key} style={{ width: `${(part.count / total) * 100}%`, backgroundColor: SERIES[i] }} />
          ) : null
        )}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {parts.map((part, i) => (
          <div key={part.key} className="rounded-xl border border-slate-100 p-4">
            <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Key color={SERIES[i]} />
              {part.label}
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{Math.round((part.count / total) * 100)}%</p>
            <p className="text-xs text-slate-500">{formatCount(part.count)} visits</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEKDAY_NAMES = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
const hourLabel = (hour: number) => `${String(hour).padStart(2, "0")}:00`;

/**
 * Page views by weekday and hour, darker where busier, with the busiest slot
 * named outright and the hovered one read out below the grid.
 */
export function Heatmap({ cells }: { cells: number[][] }) {
  const [active, setActive] = useState<[number, number] | null>(null);
  const max = Math.max(0, ...cells.flat());
  if (max === 0) return <Empty text="No page views in this range yet." />;

  const step = (value: number) => (value === 0 ? 0 : Math.max(1, Math.ceil((value / max) * (RAMP.length - 1))));
  let peak: [number, number] = [0, 0];
  for (const [d, row] of cells.entries()) {
    for (const [h, value] of row.entries()) if (value > cells[peak[0]][peak[1]]) peak = [d, h];
  }
  const readout = active ?? peak;

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="grid min-w-[560px] gap-[3px]" style={{ gridTemplateColumns: "36px repeat(24, minmax(0, 1fr))" }}>
          <span />
          {Array.from({ length: 24 }, (_, h) => (
            <span key={h} className="text-center text-[10px] text-slate-400">
              {h % 3 === 0 ? String(h).padStart(2, "0") : ""}
            </span>
          ))}
          {cells.map((row, d) => (
            <div key={d} className="contents">
              <span className="self-center text-[11px] font-medium text-slate-500">{WEEKDAYS[d]}</span>
              {row.map((value, h) => (
                <span
                  key={h}
                  role="img"
                  aria-label={`${WEEKDAY_NAMES[d]} ${hourLabel(h)}: ${value} page views`}
                  title={`${WEEKDAYS[d]} ${hourLabel(h)} · ${formatCount(value)} page views`}
                  onPointerEnter={() => setActive([d, h])}
                  onPointerLeave={() => setActive(null)}
                  className={`h-6 rounded-[4px] transition-transform hover:scale-110 ${
                    active?.[0] === d && active[1] === h ? "ring-2 ring-slate-900/70 ring-offset-1" : ""
                  }`}
                  style={{ backgroundColor: RAMP[step(value)] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <p className="text-slate-600">
          {active ? (
            <>
              <span className="font-semibold text-slate-900">
                {WEEKDAYS[readout[0]]} {hourLabel(readout[1])}
              </span>{" "}
              · {formatCount(cells[readout[0]][readout[1]])} page views
            </>
          ) : (
            <>
              Busiest: <span className="font-semibold text-slate-900">{WEEKDAY_NAMES[peak[0]]} around {hourLabel(peak[1])}</span>
            </>
          )}
        </p>
        <div className="flex items-center gap-1.5 text-slate-400">
          Fewer
          {RAMP.slice(1).map((color) => (
            <span key={color} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: color }} />
          ))}
          More
        </div>
      </div>
    </div>
  );
}

/** Page views per minute, oldest first; the last bar is the minute still under way. */
export function MinuteBars({ values }: { values: number[] }) {
  const max = Math.max(1, ...values);
  return (
    <div>
      <div className="flex h-16 items-end gap-[2px]" role="img" aria-label={`Page views per minute: ${values.join(", ")}`}>
        {values.map((value, i) => (
          <span
            key={i}
            title={`${values.length - 1 - i === 0 ? "This minute" : `${values.length - 1 - i} min ago`} · ${value} page views`}
            className="flex-1 rounded-t-[3px] transition-[height] duration-500"
            style={{
              height: value ? `${Math.max((value / max) * 100, 6)}%` : "2px",
              backgroundColor: value ? SERIES[0] : "#e2e8f0",
              opacity: i === values.length - 1 ? 0.55 : 1,
            }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
        <span>{values.length} min ago</span>
        <span>now</span>
      </div>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 text-center">
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
}
