import { describe, expect, it } from "vitest";
import { BUS_TITLE, FLIGHT_TITLE } from "@/lib/city-addons";
import { formatSeason, nameInSentence, tripFaqs, tripLead, type TripFacts } from "@/lib/trip-summary";

const TIERS = [
  { groupSize: "1-1", pricePerPerson: 430 },
  { groupSize: "11-14", pricePerPerson: 370 },
  { groupSize: "15-100", pricePerPerson: 355 },
  { groupSize: "2-4", pricePerPerson: 415 },
  { groupSize: "5-7", pricePerPerson: 400 },
  { groupSize: "8-10", pricePerPerson: 385 },
];

const abc: TripFacts = {
  title: "Annapurna Base Camp Trek",
  duration: 5,
  subtitle: "Pokhara to Pokhara",
  categorySlug: "treks",
  difficulty: "moderate",
  bestTime: "Mar-May, Sep-Nov",
  maxAltitude: 4130,
  price: 355,
  pricingTiers: TIERS,
  addons: [
    { title: "Porter", unit: "porter", pricePerUnit: 175 },
    { title: FLIGHT_TITLE, unit: "person, one way", pricePerUnit: 115 },
    { title: BUS_TITLE, unit: "person, one way", pricePerUnit: 15 },
  ],
};

describe("nameInSentence", () => {
  it("gives a trip named for what it is an article", () => {
    expect(nameInSentence("Annapurna Base Camp Trek")).toBe("the Annapurna Base Camp Trek");
    expect(nameInSentence("Buddhist Pilgrimage Tour in Nepal – 6 Days")).toBe("Buddhist Pilgrimage Tour in Nepal");
    expect(nameInSentence("Glimpse of Nepal Tour")).toBe("the Glimpse of Nepal Tour");
  });

  it("leaves an activity or a peak without one", () => {
    expect(nameInSentence("Paragliding in Pokhara")).toBe("Paragliding in Pokhara");
    expect(nameInSentence("Island Peak Climbing")).toBe("Island Peak Climbing");
    expect(nameInSentence("Chandragiri Cable Car Tour – 1 Day")).toBe("the Chandragiri Cable Car Tour");
  });
});

describe("formatSeason", () => {
  it("spells out month ranges", () => {
    expect(formatSeason("Mar-May, Sep-Nov")).toBe("March to May and September to November");
    expect(formatSeason("Mar-May, Sept-Nov")).toBe("March to May and September to November");
    expect(formatSeason("Oct-Apr")).toBe("October to April");
    expect(formatSeason("Apr-May")).toBe("April to May");
  });

  it("keeps a part it cannot read", () => {
    expect(formatSeason("Mar-May, Sep-Nov, Aug for Janai Purnima")).toBe("March to May, September to November and Aug for Janai Purnima");
  });

  it("is null when nothing is set", () => {
    expect(formatSeason("")).toBeNull();
    expect(formatSeason(null)).toBeNull();
  });
});

describe("tripLead", () => {
  it("answers length, route, height, grade, season and price for a trek", () => {
    expect(tripLead(abc)).toBe(
      "The Annapurna Base Camp Trek is a 5-day trek that starts and ends in Pokhara, reaching 4,130 m (13,550 ft) at its highest point. " +
        "It is graded moderate, and the best time to go is March to May and September to November. " +
        "The price starts at USD 355 per person for groups of 15 or more; a solo traveller pays USD 430 and two people pay USD 415 each."
    );
  });

  it("names both cities when the trip ends somewhere else", () => {
    expect(tripLead({ ...abc, title: "Guerrilla Trek", duration: 12, subtitle: "Pokhara to Kathmandu", maxAltitude: 3600 })).toContain(
      "The Guerrilla Trek is a 12-day trek that starts in Pokhara and ends in Kathmandu, reaching 3,600 m (11,811 ft) at its highest point."
    );
  });

  it("counts a climb from arrival to departure", () => {
    const lead = tripLead({ ...abc, title: "Island Peak Climbing", duration: 18, subtitle: "Arrival to departure", categorySlug: "climbing", difficulty: "difficult", maxAltitude: 6189 });
    expect(lead).toContain("Island Peak Climbing is an 18-day climb, counted from your arrival in Kathmandu to your departure, with its highest point at 6,189 m (20,305 ft).");
    expect(lead).toContain("It is graded difficult");
  });

  it("calls an expedition an expedition", () => {
    expect(tripLead({ ...abc, title: "Everest Expedition", duration: 51, subtitle: "Arrival to departure", categorySlug: "climbing", maxAltitude: 8848.86 })).toContain(
      "The Everest Expedition is a 51-day expedition"
    );
  });

  it("describes a day trip without a height that does not matter", () => {
    const lead = tripLead({ title: "Paragliding in Pokhara", duration: 1, subtitle: null, categorySlug: "activities", difficulty: "easy", bestTime: "Oct-Apr", maxAltitude: 1600, price: 95, pricingTiers: [{ groupSize: "1-100", pricePerPerson: 95 }] });
    expect(lead).toBe("Paragliding in Pokhara is done in a single day. It is graded easy, and the best time to go is October to April. The price is USD 95 per person.");
  });

  it("says where a day trip starts when it is known", () => {
    expect(tripLead({ ...abc, title: "Annapurna Base Camp Helicopter Tour", duration: 1, categorySlug: "tours" })).toContain(
      "The Annapurna Base Camp Helicopter Tour is done in a single day, starting and ending in Pokhara, and reaches 4,130 m (13,550 ft)."
    );
  });

  it("handles a multi-day trip with no fixed start", () => {
    expect(tripLead({ ...abc, title: "Rafting in Kali Gandaki River", duration: 3, subtitle: null, categorySlug: "activities", maxAltitude: 800 })).toContain(
      "Rafting in Kali Gandaki River is a 3-day trip."
    );
  });

  it("says so once when one and two people pay the same", () => {
    const lead = tripLead({ ...abc, pricingTiers: [{ groupSize: "1-4", pricePerPerson: 500 }, { groupSize: "5-100", pricePerPerson: 450 }] });
    expect(lead).toContain("The price starts at USD 450 per person for groups of 5 or more; one or two people pay USD 500 each.");
  });

  it("falls back to the base price with no tiers", () => {
    expect(tripLead({ ...abc, pricingTiers: [], price: 1200 })).toContain("The price is USD 1,200 per person.");
  });
});

describe("tripFaqs", () => {
  it("adds the cost and the journey to Pokhara", () => {
    const [cost, pokhara] = tripFaqs(abc, [{ question: "Where does the trek start?" }]);
    expect(cost.question).toBe("How much does the Annapurna Base Camp Trek cost?");
    expect(cost.answer).toBe(
      "The Annapurna Base Camp Trek costs from USD 355 per person. The price depends on the size of your group: USD 430 for one person, " +
        "USD 415 each for 2 to 4 people, USD 400 each for 5 to 7 people, USD 385 each for 8 to 10 people, USD 370 each for 11 to 14 people and USD 355 each for groups of 15 or more. " +
        `Optional extras are priced separately: Porter (USD 175 per porter), ${FLIGHT_TITLE} (USD 115 per person, one way) and ${BUS_TITLE} (USD 15 per person, one way).`
    );
    expect(pokhara.question).toBe("How do I travel between Kathmandu and Pokhara for the Annapurna Base Camp Trek?");
    expect(pokhara.answer).toContain("starts and ends in Pokhara");
    expect(pokhara.answer).toContain("USD 115 per person, one way");
    expect(pokhara.answer).toContain("USD 15 per person, one way");
  });

  it("leaves out a question the page already answers", () => {
    expect(tripFaqs(abc, [{ question: "How much does the trek cost?" }, { question: "How do I get to Pokhara from Kathmandu?" }])).toEqual([]);
  });

  it("does not take a question about spending money for the price of the trip", () => {
    const faqs = tripFaqs({ ...abc, subtitle: "Kathmandu to Kathmandu" }, [{ question: "How much cash should I bring?" }]);
    expect(faqs.map((f) => f.question)).toEqual(["How much does the Annapurna Base Camp Trek cost?"]);
  });

  it("has no Pokhara question for a trip from Kathmandu", () => {
    const faqs = tripFaqs({ ...abc, subtitle: "Kathmandu to Kathmandu", addons: [{ title: "Porter", unit: "porter", pricePerUnit: 420 }] }, []);
    expect(faqs.map((f) => f.question)).toEqual(["How much does the Annapurna Base Camp Trek cost?"]);
  });
});
