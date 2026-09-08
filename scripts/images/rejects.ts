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
  /\bkids?\b|\bchild\b|\bchildren\b|\bschool\b/i,
  // Posed photographs of identifiable adults, which Commons files under the
  // village they were taken in: "Tamang woman with her child in front of their
  // house in Gatlang village" is a portrait, not a picture of Gatlang.
  /\bwoman with\b|\bman with\b|\bportrait of\b/i,
  // Aircraft-spotter photographs. The 9N- prefix is the Nepali civil register,
  // and these are pictures of an aeroplane rather than of anywhere.
  /\b9N-[A-Z]{3}\b/,
  // A half-built monastery is not the monastery.
  /under construction|construction of/i,
  // Nothing locatable — the caption would say nothing.
  /somewhere between|unknown place|unidentified/i,
  // A non-Latin filename becomes an unreadable caption.
  /[^\u0000-\u007F]/,
  // Filenames written in another language leak into the caption untranslated.
  /\b(dans|avec|sur la|del rio)\b/i,
  // Journal plates and expedition book pages. "Papers relating to the Himalaya
  // and Mount Everest in Proceedings of the Royal Geographical Society of
  // London, Vol. I (1857)" scores well on every filter above — it names the
  // mountain — and is a page of text.
  /proceedings of|royal geographical|geographical journal|\bvol\.? [ivx]+\b|\bplate\b|frontispiece|lithograph/i,
  // The Tibetan side. Everest and Cho Oyu are climbed from both, but a trip
  // sold out of Kathmandu never stands on the northern approach, and the
  // Commons categories for the peaks are full of Rongbuk. "Tibetan" is left
  // alone deliberately — the refugee camp in Pokhara is a real tour stop.
  /rongbuk|qomolangma|\btibet\b|\bxizang\b/i,
  // The Indian and Sikkimese viewpoints onto Kangchenjunga. Same massif, seen
  // across a border no trip sold out of Kathmandu crosses.
  /darjeeling|sikkim|gangtok|pelling|yuksom|dzongu|tiger hill|senchal|kalimpong/i,
  // Type specimens from the natural-history donations. "Hydraena (s.str.)
  // bihamata Champion, 1920" arrives filed under a conservation area and is a
  // photograph of a beetle on a pin.
  /\bhydraena\b|\(s\.str\.\)|\bsp\. nov\b|\bholotype\b/i,
  // Dutch press-agency photography (Anefo / Nationaal Archief). Every file
  // carries a Bestanddeelnr, and the subject is a departure lounge or a team
  // line-up rather than the mountain the expedition was going to.
  /bestanddeelnr|schiphol/i,
  // Right word, wrong subject: a guru is a Sikh teacher as well as a Nepali peak.
  /guru nanak|amritsar|\bsikh\b/i,
  // Aid projects and sports grounds that happen to name a village on the route.
  /health camp|health care project|\bstadium\b|\bdugout\b|subsidary pitch/i,
  // A named individual on a summit is a photograph of that person.
  /\bmarocain\b|\bsur le\b/i,
  // The filename becomes the caption verbatim, so clickbait and typos in one
  // put clickbait and typos under the photograph.
  /mystical allure|enchanting|nestled amidst|\bbue sky\b|insatiable beauty/i,
  // "From peripheri of monaaslu mountain" is a real photograph of Manaslu, and
  // the filename is the caption, so the typos would go under the picture.
  /peripheri|monaaslu/i,
  /\bcannabis\b|\bmarijuana\b/i,
  // Instrumentation and infrastructure rather than scenery.
  /flood alert|early warning|monitoring station|view of a home|bridge traffic/i,
  // Interpretive signage at a park gate is a photograph of a sign.
  /information board|interpretation board|welcome board/i,
  // Elephant-back safaris and tourist elephant bathing. We do not sell either
  // and Nepal is phasing them out, so a page that shows one contradicts the
  // copy printed beside it.
  /elephant (safari|ride|riding|bath|bathing|back)|riding an elephant|elephant with tourist/i,
  // Whitewater and bungee photographs from other countries. Commons files them
  // under the activity, and the activity is the same everywhere, so "Rafters on
  // Firth River, Ivvavik National Park, YT" scores as a Nepali rafting shot.
  /ivvavik|yukon|firth river|woodstock|\bqueenstown\b|kawarau|zambezi|colorado river/i,
  // Lowland towns that share a name, a district or an airport with a climb but
  // sit hundreds of kilometres from any of them.
  /bhadrapur|shuklagandaki|bhujikot|jholujnge|tunitar|secretary kerry/i,
  // Geograph is a survey of the British Isles and nothing else. Thame in
  // Oxfordshire shares its name with Thame in the Khumbu, which is how a
  // churchyard outbuilding and the Spread Eagle Hotel reached a Nepal climb.
  /geograph\.org\.uk/i,
  // Disaster and military news photography. Commons files a lot of it under the
  // villages it was shot in, so "Relief material being dropped by an Indian Air
  // Force Mi-17 ... at village Philim of Gorkha District" scores as a photo of
  // Philim, which is on the Tsum Valley walk in.
  /indian air force|\bIAF\b|relief material|\bearthquake\b|\bMi-17\b|rescue operation/i,
  // Museum specimens. "Nile crocodile skeleton" reached a Tsum Valley gallery
  // because Nile is also a village in upper Tsum.
  /\bskeletons?\b|\bfossil\b|taxidermy|\bcarcass\b|sch[aä]edel|\bsch\u00e4del\b|\bskull\b/i,
  // Species records filed under the river or district they were caught in.
  // "Fishtail" is safe — the word boundary keeps Machhapuchhre out of this.
  /\bfish\b|\bfishes\b|\bspecimen\b/i,
  // Another misspelling that would be printed under the picture as the caption.
  /\bmanslu\b/i,
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
  // --- climbing ---
  // Sandakphu, Singalila and Phalut are on the Indian side of the Kangchenjunga
  // watershed. They are the subject of the Red Panda Trail and of nothing else,
  // so the exclusion is per-climb rather than global.
  "chamlang-expedition": /sandakphu|singalila|phalut|drukair|kanch|kangch/i,
  "makalu-expedition": /sandakphu|singalila|phalut/i,
  "makalu-base-camp-with-sherpani-col-and-mera-peak-climbing": /sandakphu|singalila|phalut/i,
  // Ramche above Ghunsa is not the Ramche in Rasuwa, and Rampur is in the Terai.
  "bokta-peak-climbing": /sandakphu|singalila|phalut|langtang|rampur/i,
  // "Everest Base Camp South" matches on the word South and puts the wrong
  // range on an Annapurna page.
  "annapurna-south-expedition": /everest|khumbu|lhotse/i,
  "manaslu-expedition": /everest|khumbu|lhotse|nuptse|ama dablam/i,
  // The Chulus and Pisang Peak are climbed from Manang, on the near side of the
  // Thorong La. Jomsom and Mustang are over the pass and down the other valley.
  "chulu-east-peak-climbing": /jomsom|mustang|muktinath/i,
  "chulu-west-peak-climbing": /jomsom|mustang|muktinath/i,
  "chulu-far-east-climbing": /jomsom|mustang|muktinath/i,
  "pisang-peak-climbing": /jomsom|mustang|muktinath/i,
  // Khare on the Mera approach is not the Khare in Dolakha.
  "mera-peak-climbing": /dolakha/i,
  "short-mera-peak-climbing": /dolakha/i,
  "baruntse-expedition": /dolakha/i,
  "baruntse-expedition-with-mera-peak-climbing": /dolakha/i,
  // Putha Hiunchuli is the western end of the Dhaulagiri Himal, walked in from
  // Juphal. Ghorepani, Poon Hill and Jomsom look at the same massif from the
  // Kali Gandaki, three valleys east of anywhere this expedition goes.
  "putha-hiunchuli-expedition": /ghorepani|poon\s?hill|jomsom|jomson|larjung|lupra|annapurna|tilicho|miristi|ghara/i,
  // Makalu is photographed far more often from the Indian border ridge and from
  // the Khumbu than from its own Barun approach, and those frames outscore the
  // valley the trek actually walks.
  "makalu-base-camp-trek": /sandakphu|singalila|phalut|kanch|kangch|gokyo|chhukung|everest-panorama|island peak|\bmera\b|amphu/i,
  // The Tsum Valley is a side valley off the Budhi Gandaki: the trek shares the
  // walk in with the Manaslu Circuit as far as Jagat, then turns north and never
  // reaches Samagaun, Birendra Lake or the Larkya La. Conservation-area scenery
  // is fair; a caption naming a pass the trek does not cross is not.
  "tsum-valley-trek": /larke|larkya|birendra|\bsama\b|samagaun|samdo|bhimthang|bimthang/i,
  // --- products added to fill the ranking gaps ---
  // The Lumbini park is full of car parks, canal boats and passing cyclists.
  "lumbini-tour": /tuk tuk|cycling from|wooden door|bandeira|new delhi|\bstation\b|\bbus\b|tampo/i,
  // Dharapani on this trek is in Manang; the Commons Dharapani is in Gorkha.
  "nar-phu-valley-trek": /gorkha/i,
  // Named individuals photographed on a trip, not the place itself.
  "rara-lake-trek": /sunil giri/i,
  "naya-kanga-peak-climbing": /shova kumari/i,
  // Phaplu airstrip is how you leave, not what you came for.
  "pikey-peak-trek": /airport|airstrip|summit air/i,
  // --- the Activities category ---
  // Two Godavaris, two Bee-eater parks, two Phulchowkis' worth of confusion:
  // each of these products sits next to a sibling with the same subject.
  "bird-watching-in-chitwan-national-park": /bardia|bardiya/i,
  "bird-watching-in-pokhara-lakes": /phulcho[kw]i|kathmandu/i,
  "bird-watching-in-kathmandu-valley": /kailali|api nampa|ghusa|bardia|bardiya/i,
  "2-night-3-days-bardia-tour": /chitwan/i,
  "1-night-2-days-chitwan-trip": /bardia|bardiya/i,
  "koshi-tappu-wildlife-reserve-tour": /biratnagar|airport|reserve office|pioneer|chintamani/i,
  "rafting-in-marsyangdi-river": /buss?es|\broad\b/i,
  "rafting-in-kali-gandaki-river": /karnali|\broad\b|muktinath|poon\s?hill|ghorepani|jomson?m?|from aircraft/i,
};

export function rejected(file: string, slug: string): boolean {
  if (REJECT.some((re) => re.test(file))) return true;
  const bySlug = REJECT_BY_SLUG[slug];
  return bySlug ? bySlug.test(file) : false;
}
