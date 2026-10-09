import { describe, expect, it } from "vitest";
import {
  formatNepalDateTime,
  nepalDateToPublishAt,
  nepalLocalToUtc,
  resolvePublication,
  utcToNepalLocal,
} from "@/lib/blog-schedule";

describe("Nepal Time conversion", () => {
  it("reads a wall-clock time as UTC+5:45", () => {
    expect(nepalLocalToUtc("2026-10-10T09:00")?.toISOString()).toBe("2026-10-10T03:15:00.000Z");
  });

  it("crosses midnight backwards for the early hours", () => {
    expect(nepalLocalToUtc("2026-11-01T02:30")?.toISOString()).toBe("2026-10-31T20:45:00.000Z");
  });

  it("round-trips", () => {
    for (const local of ["2026-10-10T09:00", "2026-12-31T23:45", "2027-01-01T00:00"]) {
      expect(utcToNepalLocal(nepalLocalToUtc(local)!)).toBe(local);
    }
  });

  it("rejects what is not a real date and time", () => {
    for (const bad of ["", "tomorrow", "2026-10-10", "2026-02-31T09:00", "2026-10-10T24:00", null, undefined]) {
      expect(nepalLocalToUtc(bad)).toBeNull();
    }
  });

  it("puts a date on the default 09:00 slot", () => {
    expect(nepalDateToPublishAt("2026-11-08")?.toISOString()).toBe("2026-11-08T03:15:00.000Z");
  });

  it("formats in Nepal Time regardless of the host zone", () => {
    expect(formatNepalDateTime("2026-10-10T03:15:00.000Z")).toMatch(/Sat,? 10 Oct 2026,? 9:00\s?am/i);
  });
});

describe("resolvePublication", () => {
  const now = new Date("2026-10-09T10:00:00.000Z");
  const later = new Date("2026-10-10T03:15:00.000Z");
  const earlier = new Date("2026-10-08T03:15:00.000Z");

  it("holds a post scheduled for a time still ahead", () => {
    expect(resolvePublication({ requested: "scheduled", publishAt: later, now }))
      .toEqual({ status: "scheduled", publishedDate: later });
  });

  it("publishes at once when the scheduled time has passed or is missing", () => {
    expect(resolvePublication({ requested: "scheduled", publishAt: earlier, now }))
      .toEqual({ status: "published", publishedDate: now });
    expect(resolvePublication({ requested: "scheduled", publishAt: null, now }))
      .toEqual({ status: "published", publishedDate: now });
  });

  it("stamps the moment a post is published", () => {
    for (const previousStatus of [undefined, "draft", "scheduled"]) {
      expect(resolvePublication({ requested: "published", previousStatus, now }))
        .toEqual({ status: "published", publishedDate: now });
    }
  });

  it("never re-dates a post that is already live", () => {
    expect(resolvePublication({ requested: "published", previousStatus: "published", now }))
      .toEqual({ status: "published" });
    // The publish job put it live while the editor still had the form open.
    expect(resolvePublication({ requested: "scheduled", publishAt: earlier, previousStatus: "published", now }))
      .toEqual({ status: "published" });
  });

  it("can pull a live post back to wait for a later time", () => {
    expect(resolvePublication({ requested: "scheduled", publishAt: later, previousStatus: "published", now }))
      .toEqual({ status: "scheduled", publishedDate: later });
  });

  it("keeps a draft's date and treats an unknown status as a draft", () => {
    expect(resolvePublication({ requested: "draft", previousStatus: "published", now })).toEqual({ status: "draft" });
    expect(resolvePublication({ requested: "live", now })).toEqual({ status: "draft" });
    expect(resolvePublication({ requested: null, now })).toEqual({ status: "draft" });
  });
});
