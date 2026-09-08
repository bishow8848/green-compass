/**
 * Regions inside the "Activities" category.
 *
 * Treks are grouped by range and tours by the kind of day they make. Activities
 * are grouped by the activity itself, because that is how they are searched
 * for — nobody looks for "adventure in Nepal", they look for "rafting in Nepal"
 * or "bungee jump Nepal". Each region name is the phrase people actually type.
 *
 * Products that already live in the Tours category are deliberately not
 * repeated here. A second page for the Everest Base Camp helicopter tour would
 * compete with the one that already ranks rather than adding to it, so this
 * category carries only activities the catalogue did not already sell.
 */
export type ActivityRegion = {
  name: string;
  slug: string;
  /** Shown on the region landing page, under the heading. */
  description: string;
};

export const ACTIVITY_REGIONS: ActivityRegion[] = [
  {
    name: "Jungle Safari in Nepal",
    slug: "jungle-safari-in-nepal",
    description:
      "Rhino, tiger and wild elephant in the Terai national parks — Chitwan, Bardia and the wetland reserve at Koshi Tappu.",
  },
  {
    name: "Rafting in Nepal",
    slug: "rafting-in-nepal",
    description:
      "Nine rivers from a half-day on the Trishuli to ten days on the Karnali, graded from family water to continuous class IV.",
  },
  {
    name: "Heli Tour in Nepal",
    slug: "heli-tour-in-nepal",
    description:
      "Mountain landings and scenic charters, from a morning over the Annapurnas to base camps that take a fortnight on foot.",
  },
  {
    name: "Mountain Flight in Nepal",
    slug: "mountain-flight-in-nepal",
    description:
      "An hour along the Himalayan wall in a fixed-wing aircraft, with a window seat guaranteed and no altitude to acclimatise to.",
  },
  {
    name: "Bungee Jump in Nepal",
    slug: "bungee-jump-in-nepal",
    description:
      "Three of the highest jumps in Asia, over the Bhote Koshi gorge, the Kali Gandaki at Kushma and the Seti near Pokhara.",
  },
  {
    name: "Paragliding in Nepal",
    slug: "paragliding-in-nepal",
    description:
      "Pokhara is one of the best flying sites in the world: tandem flights over Phewa Lake, cross-country runs and flying with trained raptors.",
  },
  {
    name: "Zip Flyer in Nepal",
    slug: "zip-flyer-in-nepal",
    description:
      "The steepest and fastest zip lines on earth, dropping from ridge to valley floor at over a hundred kilometres an hour.",
  },
  {
    name: "Bird Watching in Nepal",
    slug: "bird-watching-in-nepal",
    description:
      "Over eight hundred and eighty recorded species in a country the size of England — wetland, sal forest and mid-hill cloud forest.",
  },
];
