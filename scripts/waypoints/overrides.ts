/**
 * Hand-checked coordinates that take priority over the geocoders.
 *
 * Every entry here is one the automated passes got wrong or could not place,
 * verified individually against OpenStreetMap. Keyed by the lower-cased place
 * name exactly as it appears in the itinerary's accommodation field.
 */
export const OVERRIDES: Record<string, { lng: number; lat: number; note: string }> = {
  // Nominatim matched "Rajababu Bedding House", a shop in Kathmandu.
  "bedding": { lng: 86.3755, lat: 27.9028, note: "Beding, Rolwaling — OSM hamlet" },
  // There is a Khanigaun in Dang; the Upper Dolpo one is in Kaike, Dolpa.
  "khanigaun": { lng: 83.0244, lat: 28.8982, note: "Khanigaon, Kaike, Dolpa — OSM village" },
};
