/**
 * Regions inside the "Tours" category.
 *
 * The source list arrived as fifteen loose groupings with a lot of overlap —
 * "Nepal Day Tours" and "Day Tours from Kathmandu" shared half their entries,
 * three separate hiking lists repeated the same Nagarkot and Sarangkot walks,
 * and two of the groups held only a couple of tours each. They are merged here
 * into eight regions, and every tour appears exactly once.
 */
export type TourRegion = {
  name: string;
  slug: string;
  /** Groups from the source list that were folded into this region. */
  merged: string[];
};

export const TOUR_REGIONS: TourRegion[] = [
  {
    name: "Nepal Tour Packages",
    slug: "nepal-tour-packages",
    merged: ["Nepal Tour Packages", "Multiple Day Tours", "Jeep Tours in Nepal"],
  },
  {
    name: "Nepal Day Tours",
    slug: "nepal-day-tours",
    merged: ["Nepal Day Tours", "Day Tours from Kathmandu"],
  },
  {
    name: "Nepal Hiking Tours",
    slug: "nepal-hiking-tours",
    merged: ["Nepal Hiking Tours", "Day Hikes from Kathmandu", "Day Hikes and Tours from Pokhara"],
  },
  {
    name: "Pilgrimage Tours",
    slug: "pilgrimage-tours",
    merged: ["Pilgrimage Tours"],
  },
  {
    name: "Nepal Village Tours",
    slug: "nepal-village-tours",
    merged: ["Nepal Village Tours"],
  },
  {
    name: "Adventure Activities",
    slug: "adventure-activities",
    merged: ["Adventure Activities in Pokhara", "Rafting in Nepal"],
  },
  {
    name: "Wildlife Tours",
    slug: "wildlife-tours",
    merged: ["Wildlife Tours"],
  },
  {
    name: "Helicopter Tours & Flights",
    slug: "helicopter-tours",
    merged: ["Helicopter Tour in Nepal", "Helicopter Flights in Nepal"],
  },
];
