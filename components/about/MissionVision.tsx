import { Target, Eye, Mountain, Heart, Star, Globe, Shield, Compass, Lightbulb, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Target, Eye, Mountain, Heart, Star, Globe, Shield, Compass, Lightbulb, Zap,
};

interface MissionVisionProps {
  badge?: string;
  heading?: string;
  missionLabel?: string;
  visionLabel?: string;
  mission?: {
    heading?: string;
    description?: string;
    icon?: string;
  };
  vision?: {
    heading?: string;
    description?: string;
    icon?: string;
  };
}

/** Rich-text styling for the CMS-authored body copy. */
const PROSE =
  "[&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2";

export function MissionVision({ badge, heading, missionLabel, visionLabel, mission, vision }: MissionVisionProps) {
  if (!mission?.description && !vision?.description) return null;

  const panels = [
    {
      key: "mission",
      index: "01",
      label: missionLabel || "Core Purpose",
      title: mission?.heading || "Our Mission",
      body: mission?.description,
      Icon: iconMap[mission?.icon || ""] || Target,
      accent: true,
    },
    {
      key: "vision",
      index: "02",
      label: visionLabel || "Future Outlook",
      title: vision?.heading || "Our Vision",
      body: vision?.description,
      Icon: iconMap[vision?.icon || ""] || Eye,
      accent: false,
    },
  ].filter((panel) => panel.body);

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — the hairline + label pattern used across the site */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
            {badge || "Purpose & Direction"}
          </span>
        </div>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl">
          {heading || "What Drives Us Forward"}
        </h2>

        {/* One panel split by a shared rule, rather than two floating cards */}
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-surface sm:mt-12 lg:grid-cols-2">
          {panels.map((panel, i) => (
            <div
              key={panel.key}
              className={`relative flex flex-col p-8 sm:p-10 lg:p-12 ${
                i > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""
              }`}
            >
              {/* Oversized icon, held back to a watermark */}
              <panel.Icon
                className={`pointer-events-none absolute -right-2 -top-2 h-28 w-28 ${
                  panel.accent ? "text-primary/[0.07]" : "text-secondary/[0.07]"
                }`}
                aria-hidden="true"
              />

              <span
                className={`font-display text-5xl leading-none ${
                  panel.accent ? "text-primary/25" : "text-secondary/25"
                }`}
                aria-hidden="true"
              >
                {panel.index}
              </span>

              <span
                className={`mt-6 text-[11px] font-bold uppercase tracking-[0.2em] ${
                  panel.accent ? "text-primary" : "text-secondary"
                }`}
              >
                {panel.label}
              </span>

              <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
                {panel.title}
              </h3>

              <span
                className={`mt-5 h-px w-12 ${panel.accent ? "bg-primary/40" : "bg-secondary/40"}`}
                aria-hidden="true"
              />

              <div
                className={`mt-5 text-base leading-relaxed text-text-muted sm:text-lg ${PROSE}`}
                dangerouslySetInnerHTML={{ __html: panel.body as string }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
