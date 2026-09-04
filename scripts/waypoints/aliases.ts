/**
 * Spelling variants used across the itineraries, mapped to one canonical name.
 *
 * The same village is spelled several ways between treks — Amjilosa/Amjilasa,
 * Khambachen/Kambachen, Tarkeghyang/Tarke Ghyang — and a geocoder treats each
 * as a different place. Resolving through this table means one coordinate per
 * real place rather than one per spelling.
 */
export const ALIASES: Record<string, string> = {
  "amjilasa": "Amjilosa",
  "kambachen": "Khambachen",
  "gotlang": "Gatlang",
  "kutumsang": "Khutumsang",
  "tarke ghyang": "Tarkeghyang",
  "tortong": "Tortang",
  "jhupal": "Juphal",
  "bedding": "Beding",
  "syabru besi": "Syabrubesi",
  "shin gompa": "Sing Gompa",
  "sing gompa/chandanbari": "Sing Gompa",
  "tokyu gaon": "Tokyu",
  "langtang village": "Langtang",
  "melamchi pul bazar": "Melamchi",
  "trishuli bazar": "Trishuli",
  "diktel bazar": "Diktel",
  "nangi village": "Nangi",
  "borang village": "Borang",
  "chalish village": "Chalish",
  "chakhewa village": "Chakhewa",
  "swanta village": "Swanta",
  "tal village": "Tal",
  "chumsa khola valley": "Chumsa Khola",
  "phoksundo lake": "Ringmo",
  "phoksundo khola": "Chhepka",
  "sing gompa": "Sing Gompa",
};

/** District to search within, per trek region, so a repeated name lands right. */
export const REGION_HINT: Record<string, string> = {
  "Everest Region": "Solukhumbu",
  "Annapurna Region": "Kaski",
  "Langtang Region": "Rasuwa",
  "Manaslu Region": "Gorkha",
  "Mustang Region": "Mustang",
  "Dolpo Region": "Dolpa",
  "Kanchenjunga Region": "Taplejung",
  "Makalu Region": "Sankhuwasabha",
  "Remote Region": "",
};
