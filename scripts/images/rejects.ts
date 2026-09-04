/**
 * Candidates that pass the search filters but must not reach a page.
 *
 * The refine-weak `must` regexes only check that a filename names something on
 * the route. That still lets through photographs of the right *word* in the
 * wrong place — a Bardia rhino filed under a Chitwan tour, the Siuri Damodar
 * temple in West Bengal matching "Damodar Kunda" — and museum cases, ticket
 * counters and portraits of children, which name the place correctly but are
 * not what a customer is buying.
 */

/** Rejected on every trek and tour. */
export const REJECT: RegExp[] = [
  // Specimens and signage, not scenery.
  /natural history museum|\bNHM\b|\bmuseum\b/i,
  /entrance fee|fee counter|ticket counter|price list|notice board/i,
  // Infrastructure, not scenery.
  /hydroelectric|power station|power plant|substation/i,
  // People who share a name with a place — a Gurung musician photographed in
  // Helsinki is not a Gurung village.
  /nepathya|helsinki|\bconcert\b|\blive at\b/i,
  // Photographs of identifiable children.
  /\bkids?\b|\bchildren\b|\bschool\b/i,
  // Nothing locatable — the caption would say nothing.
  /somewhere between|unknown place|unidentified/i,
  // A non-Latin filename becomes an unreadable caption.
  /[^\u0000-\u007F]/,
  // Filenames written in another language leak into the caption untranslated.
  /\b(dans|avec|sur la|del rio)\b/i,
];

/** Rejected only for the tour named — right subject, wrong location. */
export const REJECT_BY_SLUG: Record<string, RegExp> = {
  // Both parks hold rhinos and deer; a Bardia photo must not sell Chitwan.
  "chitwan-national-park-tour-3-days": /bardiya|bardia/i,
  "chitwan-national-park-tour-4-days": /bardiya|bardia/i,
  // Rafting the Seti is not rafting the Trishuli.
  "seti-river-rafting-in-pokhara": /trishuli|trisuli/i,
  // Sirubari is a Gurung village in Syangja — Thabang is in Rolpa.
  "sirubari-village-tour": /thabang|rolpa|newarni/i,
  // "Siuri Damodar Temple" is in West Bengal, not the Damodar Kunda.
  "muktinath-damodar-kunda-helicopter-tour": /siuri/i,
  "secret-food-tour-in-kathmandu": /kolkata|india\b/i,
  // A mountain flight sells the view from the aircraft, not the trekking trail.
  "everest-mountain-flight": /sagamartha|gokyo\s*ri/i,
  // Ghandruk is on the Annapurna trail, not these village tours; its filename
  // mentions Ghalegaun only in passing.
  "ghalegaun-ghanpokhara-village-tour": /ghandruk|ghandurk/i,
  "himalayan-village-tour": /ghandruk|ghandurk|jhinu/i,
  "nepal-cultural-tour": /ghandruk|ghandurk/i,
  // The Last Resort bungee is on the Bhote Koshi, a different trip entirely;
  // Bindyabasini is a Pokhara temple with nothing to do with a bungee jump.
  "bungee-jumping-in-pokhara": /last resort|bhote|bindyabasini/i,
};

export function rejected(file: string, slug: string): boolean {
  if (REJECT.some((re) => re.test(file))) return true;
  const bySlug = REJECT_BY_SLUG[slug];
  return bySlug ? bySlug.test(file) : false;
}
