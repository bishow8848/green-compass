/**
 * Photographs uploaded for the blog itself rather than for a product page.
 *
 * Article images are normally validated against the hero and gallery images of
 * the live catalogue, which keeps every figure pointing at a file that exists.
 * A festival series needs pictures no product owns — a bamboo swing, a bowl of
 * jamara, the Navadurga dancers — so those are uploaded to their own Cloudinary
 * folder and listed here, and apply-blog-content.mts accepts them as valid IDs.
 *
 * Every entry is credited in scripts/gallery-content/PHOTO-CREDITS.md under
 * the heading named beside it.
 */
const dashain = (name: string) => `mardi-treks/blog-dashain/blog-dashain-${name}`;

/** "Dashain blog series" — Wikimedia Commons, CC BY / CC BY-SA / public domain. */
export const DASHAIN = {
  swingSunset: dashain("00-dashain-swing"),
  swingKites: dashain("01-soaring-high-in-dashain"),
  jamara: dashain("02-jamara1"),
  tikaRice: dashain("03-aakshta"),
  tikaTray: dashain("04-sweets-and-fruits-with-dashain-jamara"),
  altar: dashain("05-dashain-ritual"),
  paintingHouse: dashain("06-preparing-house-for-dashain-festival"),
  carryingMud: dashain("07-women-carrying-mud-to-paint-home-for-the-dashain-festival"),
  kot1856: dashain("08-dashain-1856"),
  navadurgaDance: dashain("09-nava-durga-dance"),
  mahakaliMask: dashain("10-goddess-mahakali-nava-durga"),
  selRoti: dashain("11-sel-roti-nepal"),
  thali: dashain("12-traditional-nepali-thali"),
  goatsMustang: dashain("13-flush-of-goat-mustang-02"),
  goatsBridge: dashain("14-abc-goats-crossing-a-suspension-footbridge-on-the-approach-t"),
  gorkhaDurbar: dashain("15-gorkha-durbar-view"),
  cableCar: dashain("16-manakamana-cable-car-01"),
  manakamana: dashain("17-manakamana-temple-mankamana-gorkha-nepal-rajesh-dhungana-3"),
  taleju: dashain("18-05-taleju-temple"),
  asanBazaar: dashain("19-asan-bazaar-in-kathmandu-nepal-24342552331"),
  hanumanDhokaNight: dashain("20-night-scene-of-hanuman-dhoka"),
  bindhyabasini: dashain("21-bindhyabasini-temple-9048739188"),
  durgaIdol: dashain("22-goddess-durga-fighting-mahishasura-the-buffalo-demon-hindu-m"),
  cableCarClouds: dashain("23-manakamana-cable-car-gorkha"),
  goatsTrail: dashain("24-flock-of-goats"),
  navadurgaTemple: dashain("25-nawa-durga-temple-bhaktapur-nepal-rajesh-dhungana-1"),
} as const;

const festivals = (name: string) => `mardi-treks/blog-festivals/blog-festivals-${name}`;

/**
 * "Tihar, Chhath and autumn 2026 blog series" — Wikimedia Commons, CC BY /
 * CC BY-SA. Each was looked at before it was captioned; the alt text in the
 * articles describes what the photograph actually shows.
 */
export const FESTIVALS = {
  lightingLamps: festivals("00-sister-lighting-traditional-lamp-during-tihar-festival"),
  kathmanduTiharNight: festivals("01-kathmandu-tihar-swayambhu"),
  kukurTiharGarland: festivals("02-kukur-tihar-where-we-worship-dogs"),
  kukurTiharResting: festivals("03-dog-in-kathmandu-after-kukur-puja"),
  cowWorship: festivals("04-the-cow-worship"),
  bhaiTikaTray: festivals("05-sapta-rangi-tika-for-bhai-tika"),
  bhaiTikaCeremony: festivals("06-bhaitika-02"),
  rangoliChalk: festivals("07-tihar-traditional-rangoli-in-janakpur-nepal-2016-10-30"),
  rangoliColoured: festivals("08-the-colourful-rangoli"),
  traditionalDress: festivals("09-saving-culture"),
  marigoldStall: festivals("10-flower-shop-in-naxal"),
  deusiDance: festivals("11-kirat-welfare-trust-deusi-bhailo-2079-bs-5"),
  crow: festivals("12-large-billed-crow-wild-crow-hiledole-height-tarkeshwor-munic"),
  chhathJanakpurDusk: festivals("13-chhath-festival-at-gangasagar-janakpur-20221031"),
  chhathArghya: festivals("14-celebrating-chhath-in-kataiya-saptari-by-giving-argha-to-sun"),
  chhathPrasad: festivals("15-chhath-puja-prasad"),
  janakiMandir: festivals("16-janaki-temple-janakpur-dhanusha-nepal-rajesh-dhungana-32"),
  maniRimduCourtyard: festivals("17-mani-rimdu-festival-tengboche-monastery-nepal-01"),
  maniRimduCymbals: festivals("18-mani-rimdu-festival-tengboche-monastery-nepal-02"),
  harvestTerai: festivals("19-life-in-terai-nepal-01"),
  luklaTwinOtter: festivals("20-lukla-airport-dhc-6-twin-otter-yeti-airlines-nepal"),
  sevenColourTika: festivals("21-hindu-festival-of-tihar-08"),
  kukurTiharCollar: festivals("22-kukur-tihar-2"),
} as const;

/**
 * A photograph a product page already carries — its hero or one from its
 * gallery — by product slug and the file's own name.
 */
export const trekImage = (slug: string, name: string) => `mardi-treks/${slug}/${slug}-${name}`;

/** Every blog-only image ID, for the validator. */
export const BLOG_IMAGES: string[] = [...Object.values(DASHAIN), ...Object.values(FESTIVALS)];
