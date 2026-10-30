import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const recordVisit = vi.hoisted(() => vi.fn());
vi.mock("@/lib/visitors", async (actual) => ({ ...(await actual<typeof import("@/lib/visitors")>()), recordVisit }));

import { POST } from "@/app/api/visitors/route";

const SITE = "https://greencompasstreks.com";
const CHROME = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";
const ID = "a".repeat(32);

/** A visit's first page, as the tracker reports it. */
function landing(body: Record<string, unknown>, userAgent = CHROME) {
  return new NextRequest(`${SITE}/api/visitors`, {
    method: "POST",
    headers: { origin: SITE, "user-agent": userAgent, "content-type": "application/json", "x-vercel-ip-country": "NP" },
    body: JSON.stringify({ id: ID, kind: "view", path: "/", device: "desktop", visitStart: true, referrer: "", campaign: "", ...body }),
  });
}

const visit = () => recordVisit.mock.calls[0][1].visit;

describe("where the collector says a visit came from", () => {
  beforeEach(() => recordVisit.mockReset());

  it("credits a ChatGPT link by its tag when the browser sends no referrer", async () => {
    await POST(landing({ campaign: "chatgpt.com" }));
    expect(visit()).toMatchObject({ source: "ai", referrer: "chatgpt.com" });
  });

  it("goes by the tag over the referrer", async () => {
    await POST(landing({ referrer: "l.facebook.com", campaign: "newsletter" }));
    expect(visit()).toMatchObject({ source: "other", referrer: "newsletter" });
  });

  it("names the referring site without www. or m.", async () => {
    await POST(landing({ referrer: "m.facebook.com" }));
    expect(visit()).toMatchObject({ source: "social", referrer: "facebook.com" });
  });

  it("counts a visit with neither as direct", async () => {
    await POST(landing({}));
    expect(visit()).toMatchObject({ source: "direct", referrer: "" });
  });

  it("ignores a tag that isn't a name or a host", async () => {
    await POST(landing({ referrer: "www.google.com", campaign: "<script>" }));
    expect(visit()).toMatchObject({ source: "search", referrer: "google.com" });
  });

  it("leaves out browsers that say they are a tool, not a person", async () => {
    const inspector = `${CHROME} (compatible; Google-InspectionTool/1.0;)`;
    await POST(landing({}, inspector));
    await POST(landing({}, "Mozilla/5.0 (X11; Linux x86_64) HeadlessChrome/141.0.0.0 Safari/537.36"));
    expect(recordVisit).not.toHaveBeenCalled();
  });
});
