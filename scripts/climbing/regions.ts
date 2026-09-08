/**
 * Regions inside the "Climbing" category.
 *
 * Treks and tours are grouped by trail or by activity. Climbing is grouped by
 * mountain: a climber picks the peak first and the approach follows from it,
 * so every region here is a massif or a group of massifs sharing one base
 * camp approach, rather than a marketing bucket.
 *
 * The names deliberately echo the trek regions (Everest Region, Annapurna
 * Region, Manaslu Region ...) so a visitor moving between the two categories
 * recognises the geography, with the two ranges that carry no trek region of
 * their own — Rolwaling and Dhaulagiri — added because their peaks cannot
 * honestly be filed anywhere else.
 */
export type ClimbRegion = {
  name: string;
  slug: string;
  /** Shown on the region landing page, under the heading. */
  description: string;
  /** The massifs and valleys this region covers. */
  covers: string[];
};

export const CLIMB_REGIONS: ClimbRegion[] = [
  {
    name: "Everest Region",
    slug: "everest-region",
    description:
      "The Khumbu and the Hinku — Nepal's densest concentration of climbable peaks, from the 6,000 m trekking summits above Chhukung to Everest, Lhotse and Ama Dablam.",
    covers: ["Khumbu", "Hinku and Hongu valleys", "Gokyo and Thame valleys"],
  },
  {
    name: "Makalu Region",
    slug: "makalu-region",
    description:
      "The Barun valley behind the Khumbu, holding the world's fifth-highest mountain along with Baruntse and Chamlang and the high cols that link them to the Hongu.",
    covers: ["Makalu-Barun", "Hongu basin", "Sherpani Col and West Col"],
  },
  {
    name: "Annapurna Region",
    slug: "annapurna-region",
    description:
      "The Manang side of the Annapurna Circuit and the Annapurna Sanctuary — the Chulu group and Pisang Peak for first-time climbers, Tilicho and the Annapurnas themselves for expeditions.",
    covers: ["Manang valley", "Annapurna Sanctuary", "Nar-Phu approach peaks"],
  },
  {
    name: "Manaslu Region",
    slug: "manaslu-region",
    description:
      "The Budhi Gandaki and the Peri Himal — Manaslu, the eighth-highest mountain on earth, with Larkya and Samdo as its acclimatisation peaks and Himlung Himal over the ridge in Nar Phu.",
    covers: ["Manaslu massif", "Larkya La", "Peri Himal and Nar Phu"],
  },
  {
    name: "Langtang Region",
    slug: "langtang-region",
    description:
      "The nearest snow peaks to Kathmandu. Langtang Lirung, Dorje Lakpa and Langshisha Ri sit within two days' drive of the city, and the Jugal Himal behind them is barely climbed at all.",
    covers: ["Langtang valley", "Jugal Himal", "Langshisha and Ganja La"],
  },
  {
    name: "Rolwaling Region",
    slug: "rolwaling-region",
    description:
      "The valley between Langtang and the Khumbu, crossed by the Tashi Lapcha. Pachermo and Yalung Ri are the classic pass-crossing climbs, on a trail that sees a fraction of the Khumbu's traffic.",
    covers: ["Rolwaling valley", "Tashi Lapcha", "Ramdung and Yalung Ri"],
  },
  {
    name: "Dhaulagiri Region",
    slug: "dhaulagiri-region",
    description:
      "The peaks above the Kali Gandaki and Hidden Valley — Dhampus and Tukuche within a week of Jomsom, and Putha Hiunchuli at the far western end of the Dhaulagiri chain.",
    covers: ["Hidden Valley", "Dhaulagiri massif", "Dolpo approach"],
  },
  {
    name: "Mustang Region",
    slug: "mustang-region",
    description:
      "The Damodar Himal on the Tibetan plateau behind Upper Mustang. Saribung and Abi are high, remote and almost entirely snow, reached only through a restricted area.",
    covers: ["Damodar Himal", "Upper Mustang", "Nar Phu exit"],
  },
  {
    name: "Remote Region",
    slug: "remote-region",
    description:
      "The peaks with no crowd and no infrastructure — Kanjirowa in Dolpo, Api on the Indian border, and Bokta at the southern edge of Kanchenjunga.",
    covers: ["Dolpo", "Far West Nepal", "Kanchenjunga"],
  },
];
