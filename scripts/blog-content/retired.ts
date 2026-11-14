/**
 * Trip guides that have been folded into the product page they describe.
 *
 * A "<Trip>: The Complete Guide" article covered the same route, cost and
 * inclusions as the trip's own page, under the same name, and Google ranked the
 * article instead of the page that can be booked. Each one listed here is kept
 * in the files and in the database as a draft, and its URL redirects
 * permanently to the product page on the right (scripts/retire-packages-and-guides.mts).
 *
 *   - `[[post:<retired>|text]]` renders as a link to the product page
 *   - a retired guide is never published, never listed under a product's
 *     "Trekking Guides & Articles" and never offered as further reading
 *
 * To bring one back, delete its line, publish it in the admin and remove its
 * redirect.
 */
export const RETIRED_GUIDES: Record<string, string> = {
  "everest-base-camp-trek-complete-guide": "everest-base-camp-trek",
  "gokyo-lakes-trek-guide": "gokyo-lake-trek",  // "Gokyo Lakes Trek" -> "Gokyo Lake Trek"
  "annapurna-base-camp-trek-complete-guide": "annapurna-base-camp-trek",
  "annapurna-circuit-trek-complete-guide": "annapurna-circuit-trek",
  "mardi-himal-trek-complete-guide": "mardi-himal-trek",
  "langtang-valley-trek-complete-guide": "langtang-valley-trek",
  "manaslu-circuit-trek-complete-guide": "manaslu-circuit-trek",
  "dhaulagiri-circuit-trek-guide": "dhaulagiri-circuit-trek",
  "churen-himal-base-camp-trek-guide": "churen-himal-base-camp-trek",
  "ganesh-himal-trek-guide": "ganesh-himal-trek",
  "khori-himal-trek-guide": "khori-himal-trek",
  "guerrilla-trek-guide": "guerrilla-trek",
  "lamjung-himal-trek-guide": "lamjung-himal-trek",
  "helambu-trek-guide": "helambu-trek",
  "badimalika-trek-guide": "badimalika-trek",
  "humla-limi-valley-trek-guide": "humla-limi-valley-trek",
  "jomsom-dolpo-trek-guide": "jomsom-dolpo-trek",  // "Jomsom to Dolpo Trek" -> "Jomsom Dolpo Trek"
  "ramaroshan-lakes-trek-guide": "ramaroshan-lakes-trek",
  "serang-gompa-trek-guide": "serang-gompa-trek",
  "kanchenjunga-north-base-camp-trek-guide": "kanchenjunga-north-base-camp-trek",
  "kanchenjunga-south-base-camp-trek-guide": "kanchenjunga-south-base-camp-trek",
  "langtang-ganja-la-pass-trek-guide": "langtang-ganja-la-pass-trek",
  "tsho-rolpa-trek-guide": "tsho-rolpa-trek",
  "lower-manaslu-trek-guide": "lower-manaslu-trek",
  "lower-mustang-trek-guide": "lower-mustang-trek",
  "rupina-la-pass-trek-guide": "rupina-la-pass-trek",
  "tilman-pass-trek-guide": "tilman-pass-trek",
  "sherpani-col-passes-trek-guide": "sherpani-col-passes-trek",
  "saribung-pass-trek-guide": "saribung-pass-trek",
  "teri-la-pass-trek-guide": "teri-la-pass-trek",
  "best-of-nepal-tour-guide": "best-of-nepal-tour",
  "kathmandu-pokhara-tour-guide": "kathmandu-pokhara-tour",
  "buddhist-pilgrimage-tour-nepal-guide": "buddhist-pilgrimage-tour-nepal",  // "Buddhist Pilgrimage Tour in Nepal" -> "Buddhist Pilgrimage Tour in Nepal – 6 Days"
  "hindu-pilgrimage-tour-guide": "hindu-pilgrimage-tour",  // "Hindu Pilgrimage Tour in Nepal" -> "Hindu Pilgrimage Tour"
  "sirubari-village-tour-guide": "sirubari-village-tour",
  "ghalegaun-ghanpokhara-village-tour-guide": "ghalegaun-ghanpokhara-village-tour",
  "himalayan-village-tour-guide": "himalayan-village-tour",
  "bungmati-khokana-village-tour-guide": "bungmati-khokana-village-tour",  // "Bungamati & Khokana Village Tour" -> "Bungmati Khokana Village Tour – 1 Day"
  "pharping-dakshinkali-tour-guide": "pharping-dakshinkali-tour",  // "Pharping & Dakshinkali Tour" -> "Pharping Dakshinkali Tour – 1 Day"
  "chandragiri-cable-car-tour-guide": "chandragiri-cable-car-tour",  // "Chandragiri Cable Car Tour" -> "Chandragiri Cable Car Tour – 1 Day"
  "dhulikhel-namobuddha-hike-guide": "dhulikhel-namobuddha-hike",
  "secret-food-tour-in-kathmandu-guide": "secret-food-tour-in-kathmandu",  // "Secret Food Tour in Kathmandu" -> "Secret Food Tour in Kathmandu – 1 Day"
  "langtang-helicopter-tour-guide": "langtang-helicopter-tour-from-kathmandu",  // "Langtang Helicopter Tour from Kathmandu" -> "Langtang Helicopter Tour from Kathmandu – 1 Day"
  "muktinath-damodar-kunda-helicopter-tour-guide": "muktinath-damodar-kunda-helicopter-tour",  // "Muktinath & Damodar Kunda Helicopter Tour" -> "Muktinath Damodar Kunda Helicopter Tour – 1 Day"
  "ultra-light-flight-in-pokhara-guide": "ultra-light-flight-in-pokhara",  // "Ultralight Flight in Pokhara" -> "Ultra Light Flight in Pokhara Nepal – 1 Day"
  "five-himalayan-viewpoints-tour-guide": "five-himalayan-viewpoints-tour-from-pokhara",
  "trishuli-river-rafting-2-days-guide": "trishuli-river-rafting-2-days",  // "Trishuli River Rafting, 2 Days" -> "Trishuli River Rafting – 1 Night 2 Days"
  "seti-river-rafting-in-pokhara-guide": "seti-river-rafting-in-pokhara",  // "Seti River Rafting in Pokhara" -> "Seti River Rafting in Pokhara – 1 Day"
  "atv-adventure-tour-in-pokhara-guide": "atv-adventure-tour-in-pokhara",  // "ATV Adventure Tour in Pokhara" -> "ATV Adventure Tour in Pokhara – 1 Day"
  "bungee-jump-in-bhote-koshi-guide": "bungee-jump-in-bhote-koshi",
  "rafting-in-bhote-koshi-river-guide": "rafting-in-bhote-koshi-river",  // "Rafting the Bhote Koshi" -> "Rafting in Bhote Koshi River"
  "rafting-in-marsyangdi-river-guide": "rafting-in-marsyangdi-river",  // "Rafting the Marsyangdi" -> "Rafting in Marsyangdi River"
  "parahawking-in-pokhara-guide": "parahawking-in-pokhara",
  "pokhara-helicopter-sightseeing-tour-guide": "pokhara-helicopter-sightseeing-tour",
  "chulu-west-peak-climbing-guide": "chulu-west-peak-climbing",
  "chulu-east-peak-climbing-guide": "chulu-east-peak-climbing",
  "chulu-far-east-climbing-guide": "chulu-far-east-climbing",
  "pisang-peak-climbing-guide": "pisang-peak-climbing",
  "dhampus-peak-climbing-guide": "dhampus-peak-climbing",
  "singu-chuli-peak-climbing-guide": "singu-chuli-peak-climbing",
  "tukuche-peak-expedition-guide": "tukuche-peak-expedition",
  "tilicho-peak-expedition-guide": "tilicho-peak-expedition",
  "pokalde-peak-climbing-guide": "pokalde-peak-climbing",
  "kyajo-ri-peak-climbing-guide": "kyajo-ri-peak-climbing",
  "kwangde-peak-climbing-guide": "kwangde-peak-climbing",
  "phari-lapcha-peak-climbing-guide": "phari-lapcha-peak-climbing",
  "nirekha-peak-climbing-guide": "nirekha-peak-climbing",
  "kusum-kanguru-peak-climbing-guide": "kusum-kanguru-peak-climbing",
  "cholatse-expedition-guide": "cholatse-expedition",
  "thamserku-expedition-guide": "thamserku-expedition",
  "naya-kanga-peak-climbing-guide": "naya-kanga-peak-climbing",
  "paldor-peak-climbing-guide": "paldor-peak-climbing",
  "langshisha-ri-expedition-guide": "langshisha-ri-expedition",
  "jugal-himal-gyalzen-peak-climbing-guide": "jugal-himal-gyalzen-peak-climbing",  // "Gyalzen Peak & the Jugal Himal" -> "Jugal Himal Gyalzen Peak Climbing"
  "pachermo-peak-climbing-guide": "pachermo-peak-climbing",
  "bokta-peak-climbing-guide": "bokta-peak-climbing",
  "dorje-lakpa-expedition-guide": "dorje-lakpa-expedition",
  "langtang-lirung-expedition-guide": "langtang-lirung-expedition",
  "samdo-peak-climbing-guide": "samdo-peak-climbing",
  "larkya-peak-climbing-guide": "larkya-peak-climbing",
  "abi-peak-climbing-guide": "abi-peak-climbing",
  "saribung-peak-climbing-guide": "saribung-peak-climbing",
  "lhotse-expedition-guide": "lhotse-expedition",
  "makalu-expedition-guide": "makalu-expedition",
  "annapurna-expedition-guide": "annapurna-expedition",  // "Annapurna I Expedition" -> "Annapurna Expedition"
  "baruntse-expedition-guide": "baruntse-expedition",
  "himlung-himal-expedition-guide": "himlung-himal-expedition",
  "pumori-expedition-guide": "pumori-expedition",
  "chamlang-expedition-guide": "chamlang-expedition",
  "gangapurna-expedition-guide": "gangapurna-expedition",
  "annapurna-south-expedition-guide": "annapurna-south-expedition",
  "kang-guru-expedition-guide": "kang-guru-expedition",
  "putha-hiunchuli-expedition-guide": "putha-hiunchuli-expedition",
  "api-himal-expedition-guide": "api-himal-expedition",
  "kanjirowa-expedition-guide": "kanjirowa-expedition",
};
