/**
 * Publication states of a blog post, and the clock they are scheduled on.
 *
 * A post is `draft`, `scheduled` or `published`. Every public query filters on
 * `published`, so a scheduled post is invisible until the publish job
 * (lib/blog-publisher.ts) flips it. `publishedDate` carries the go-live moment:
 * the planned one while the post is scheduled, the real one afterwards.
 *
 * Schedules are entered and shown in Nepal Time whatever the browser's own
 * zone is — the business runs on it, and an editor travelling abroad should
 * not publish at a different hour because their laptop changed zone.
 *
 * Pure functions only: this file is shared by the admin form (client), the
 * server actions and the content scripts.
 */

export const BLOG_STATUSES = ["draft", "scheduled", "published"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

export function isBlogStatus(value: unknown): value is BlogStatus {
  return typeof value === "string" && (BLOG_STATUSES as readonly string[]).includes(value);
}

/** Nepal Time is UTC+5:45 all year; there is no daylight saving to account for. */
export const NEPAL_UTC_OFFSET_MINUTES = 5 * 60 + 45;
export const NEPAL_TIME_ZONE = "Asia/Kathmandu";

/**
 * Schedules snap to quarter hours, the grid the publish job is triggered on,
 * so a post never waits for the next tick after its time has passed.
 */
export const SCHEDULE_STEP_MINUTES = 15;

/** Hour of the day, Nepal Time, that a post scheduled by date alone goes live. */
export const DEFAULT_PUBLISH_TIME = "09:00";

const LOCAL_RE = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::\d{2}(?:\.\d+)?)?$/;

/**
 * A Nepal wall-clock time, as `<input type="datetime-local">` writes it
 * ("2026-10-10T09:00"), to the instant it names. Null when it is not a real
 * date and time.
 */
export function nepalLocalToUtc(local: string | null | undefined): Date | null {
  const match = LOCAL_RE.exec((local ?? "").trim());
  if (!match) return null;
  const [year, month, day, hour, minute] = match.slice(1).map(Number);
  const wallClock = Date.UTC(year, month - 1, day, hour, minute);
  // Date.UTC rolls an impossible date over (31 February -> 3 March) instead of
  // rejecting it; reading the parts back catches that.
  const check = new Date(wallClock);
  if (
    check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day || check.getUTCHours() !== hour || check.getUTCMinutes() !== minute
  ) {
    return null;
  }
  return new Date(wallClock - NEPAL_UTC_OFFSET_MINUTES * 60_000);
}

/** An instant as Nepal wall-clock time, in the `datetime-local` format. */
export function utcToNepalLocal(date: Date | string): string {
  const shifted = new Date(new Date(date).getTime() + NEPAL_UTC_OFFSET_MINUTES * 60_000);
  return shifted.toISOString().slice(0, 16);
}

/** The go-live instant for a calendar date in Nepal, at the default hour. */
export function nepalDateToPublishAt(date: string, time: string = DEFAULT_PUBLISH_TIME): Date | null {
  return nepalLocalToUtc(`${date}T${time}`);
}

/** "Sat, 10 Oct 2026, 9:00 am" — always Nepal Time, wherever it is rendered. */
export function formatNepalDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: NEPAL_TIME_ZONE,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
}

export type Publication = {
  status: BlogStatus;
  /** Set only when the stored date has to change. */
  publishedDate?: Date;
};

/**
 * What to store when an editor saves a post with a requested status.
 *
 * - Scheduling for a time still ahead stores that time and waits for it.
 * - Scheduling for a time that has already passed leaves nothing to wait for,
 *   so the post is published now.
 * - Publishing stamps the moment it happens — but only on the way in. Saving a
 *   post that is already live keeps its date, so an edit never re-dates it.
 * - A draft keeps whatever date it had.
 */
export function resolvePublication({
  requested,
  publishAt,
  previousStatus,
  now = new Date(),
}: {
  requested: unknown;
  /** The chosen go-live time; only read when `requested` is "scheduled". */
  publishAt?: Date | null;
  /** Status currently stored; absent for a post being created. */
  previousStatus?: string | null;
  now?: Date;
}): Publication {
  const status: BlogStatus = isBlogStatus(requested) ? requested : "draft";

  if (status === "scheduled" && publishAt && publishAt.getTime() > now.getTime()) {
    return { status: "scheduled", publishedDate: publishAt };
  }
  if (status === "draft") return { status };
  // Publishing, or a schedule whose time has passed — which includes a post
  // the publish job put live while the editor still had the form open.
  return previousStatus === "published"
    ? { status: "published" }
    : { status: "published", publishedDate: now };
}
