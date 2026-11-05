import { describe, expect, it } from "vitest";
import {
  plainExclusions,
  plainMetaDescription,
  plainOverview,
  plainQuestion,
  plainSections,
} from "../../scripts/package-variants/plain-text";
import { cityIntro, completeIntro, completeNote, type DayRow } from "../../scripts/package-variants/plan";

const lukla: DayRow = {
  dayNumber: 1,
  title: "Fly from Kathmandu (1,400 m) to Lukla (2,860 m) and Trek to Phakding",
  description: "",
  elevation: null,
  accommodation: null,
  placeDescription: null,
};
const ctx = {
  name: "Everest Base Camp Trek",
  noun: "trek" as const,
  category: "treks",
  base: "everest-base-camp-trek",
  start: "Kathmandu",
  end: "Kathmandu",
  cityDays: 12,
  completeDays: 14,
  core: [lukla],
};

// Text exactly as the first apply wrote it to the live pages.
const OLD_CITY_INTRO =
  '<p><strong>Everest Base Camp Trek, city to city: 12 days, Kathmandu to Kathmandu.</strong> This version of the trek starts and finishes in Kathmandu: the return flights between Kathmandu and Lukla, your licensed guide, the permits and the teahouse nights on the trail are included, while airport pickup and drop-off and your hotel nights in Kathmandu before and after the trek — which you may already have arranged — are not. Flying into Nepal and want those taken care of too? The <a href="/treks/everest-base-camp-trek-package">14-day complete package</a> adds them, from arrival to departure.</p>';
const OLD_COMPLETE_INTRO =
  '<p><strong>The complete Everest Base Camp Trek package covers the whole trip, from landing at Tribhuvan International Airport to your flight home: 14 days, 12 of them on the trek itself.</strong> We meet you at the airport and arrange your hotel nights in Kathmandu, then run the trek with a licensed guide and every permit and booking made in advance — one booking and one point of contact from arrival to departure.</p>' +
  "<p>The Everest Base Camp Trek follows the Khumbu trail.</p>" +
  '<p>Already in Kathmandu, or arranging your own hotel? The <a href="/treks/everest-base-camp-trek">12-day city-to-city Everest Base Camp Trek</a> is the same trek, Kathmandu to Kathmandu, without the arrival, departure and hotel nights.</p>';
const OLD_PAIR_NOTE =
  '<p><strong>Complete package: 9 days, arrival to departure.</strong> Airport pickup and drop-off, your hotel nights in Kathmandu and Pokhara, and the journey between Kathmandu and Pokhara are included. Only want the trek? The <a href="/treks/mardi-himal-trek">5-day city-to-city version</a> runs Pokhara to Pokhara.</p>';

describe("plainOverview", () => {
  it("turns the old city-to-city opening into what the planner now writes", () => {
    expect(plainOverview(OLD_CITY_INTRO + "<p>Rest.</p>")).toBe(cityIntro(ctx) + "<p>Rest.</p>");
    expect(cityIntro(ctx)).not.toMatch(/complete package|<a /);
  });

  it("turns the old complete-package opening into what the planner now writes", () => {
    expect(plainOverview(OLD_COMPLETE_INTRO)).toBe(completeIntro({ ...ctx, name: "Everest Base Camp Trek Package" }, "<p>The Everest Base Camp Trek follows the Khumbu trail.</p>"));
    expect(plainOverview(OLD_COMPLETE_INTRO)).not.toMatch(/city-to-city|<a /);
  });

  it("turns a pair's old note into what the planner now writes", () => {
    const pairCtx = { ...ctx, start: "Pokhara", end: "Pokhara", cityDays: 5, completeDays: 9 };
    expect(plainOverview(OLD_PAIR_NOTE)).toBe(completeNote(pairCtx));
  });

  it("leaves plain text and everything else alone", () => {
    const plain = cityIntro(ctx) + "<p>Other text with a <a href=\"/blog/x\">link</a>.</p>";
    expect(plainOverview(plain)).toBe(plain);
  });
});

describe("the rest of the page", () => {
  it("rewords or drops the FAQs that pointed at the other version", () => {
    expect(plainQuestion("Can I book the complete package instead?")).toBeNull();
    expect(plainQuestion("Is there a version without hotels and airport transfers?")).toBeNull();
    expect(plainQuestion("Where does the city-to-city Mardi Himal Trek start and finish?")).toBe("Where does the Mardi Himal Trek start and finish?");
    expect(plainQuestion("What is not included in the city-to-city Mardi Himal Trek?")).toBe("What is not included in the Mardi Himal Trek?");
    expect(plainQuestion("What does the complete Mardi Himal Trek package include?")).toBe("What does the Mardi Himal Trek Package include?");
    expect(plainQuestion("How hard is the trek?")).toBe("How hard is the trek?");
  });

  it("plainly words the airport exclusion and the package description", () => {
    expect(plainExclusions("<ul><li>Airport pickup and drop-off — both included in the 14-day complete package.</li></ul>")).toBe(
      "<ul><li>Airport pickup and drop-off in Kathmandu.</li></ul>"
    );
    expect(plainMetaDescription("Mardi Himal Trek complete package: 9 days from arrival")).toBe("Mardi Himal Trek Package: 9 days from arrival");
  });

  it("drops the planning pointer and the covers section's link", () => {
    const sections = JSON.stringify([
      { id: "custom-1", data: { heading: "Trip Highlights", content: "<ul><li>x</li></ul>" } },
      {
        id: "custom-package-covers",
        data: {
          heading: "What the Complete Package Covers",
          content: '<ul><li>Hotels</li></ul><p>Only the trek? The <a href="/treks/x">city-to-city X</a> is the same 5 days without the arrival, departure and hotel nights.</p>',
        },
      },
      { id: "custom-package-planning", data: { heading: "Planning the Trek", content: "<p>…</p>" } },
    ]);
    const order = JSON.stringify(["overview", "custom-1", "custom-package-covers", "custom-package-planning", "itinerary"]);
    const out = plainSections(sections, order);
    expect(JSON.parse(out.customSections!)).toEqual([
      { id: "custom-1", data: { heading: "Trip Highlights", content: "<ul><li>x</li></ul>" } },
      { id: "custom-package-covers", data: { heading: "What the Package Covers", content: "<ul><li>Hotels</li></ul>" } },
    ]);
    expect(JSON.parse(out.sectionOrder!)).toEqual(["overview", "custom-1", "custom-package-covers", "itinerary"]);
    // Already plain: unchanged.
    expect(plainSections(out.customSections, out.sectionOrder)).toEqual(out);
  });
});
