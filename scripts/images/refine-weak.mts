/**
 * Targeted second pass for the treks Commons serves badly.
 *
 * District-level categories (Lamjung District, Solukhumbu District) pull in
 * village portraits, lizards and photos from entirely different trails. For
 * these routes the fix is a narrow search on the peaks and places the trek
 * actually visits, plus a hard requirement that a candidate names one of them.
 *
 *   npx tsx scripts/images/refine-weak.mts <out.json> [--slugs=<file>]
 *
 * --slugs limits the run to the slugs listed in that file, one per line, so a
 * re-run for a new batch does not re-search everything already done.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const OUT = process.argv[2] ?? "/tmp/refined.json";
const SLUG_FILE = process.argv.find((a) => a.startsWith("--slugs="))?.slice(8);
const ONLY = SLUG_FILE
  ? new Set(readFileSync(SLUG_FILE, "utf8").split("\n").map((l) => l.trim()).filter(Boolean))
  : null;
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "MardiTreks-ContentBot/1.0 (trek site image sourcing)";

/** Search terms, and the words a filename must contain to be accepted. */
const TARGETS: Record<string, { terms: string[]; must: RegExp }> = {
  "lamjung-himal-trek": {
    terms: ["Lamjung Himal", "Rambrong Danda", "Ghanpokhara Lamjung", "Tangting Nepal", "Lamjung Himal peak", "Annapurna II Lamjung"],
    must: /lamjung|rambrong|ghanpokhara|tangting|annapurna\s*(ii|iv)|baglungpani/i,
  },
  "khori-himal-trek": {
    terms: ["Sikles Nepal", "Kori Danda", "Sikles village Nepal", "Madi valley Nepal", "Annapurna II Sikles"],
    must: /sikles|kori|khori|annapurna\s*(ii|iv)|madi|lamjung\s*himal/i,
  },
  "khori-himal-trek-from-pokhara": {
    terms: ["Sikles Nepal", "Kori Danda", "Sikles village Nepal", "Madi valley Nepal", "Annapurna II Sikles"],
    must: /sikles|kori|khori|annapurna\s*(ii|iv)|madi|lamjung\s*himal/i,
  },
  "mundum-trek": {
    terms: ["Khotang Nepal", "Bhojpur Nepal", "Silchung Khotang", "Tyamke Danda", "Salpa Bhanjyang", "Halesi Mahadev"],
    must: /khotang|bhojpur|silchung|tyamke|salpa|halesi|mundum|diktel|dhotre|maiyung/i,
  },
  "humla-limi-valley-trek": {
    terms: ["Limi Valley", "Simikot Humla", "Halji monastery", "Humla Karnali", "Til Limi", "Nara La Humla"],
    must: /limi|simikot|humla|halji|karnali|hilsa|kermi|yalbang|nara\s*la|til\b/i,
  },
  "kanchenjunga-north-base-camp-trek": {
    terms: ["Pangpema", "Ghunsa Nepal", "Jannu Kumbhakarna", "Kangchenjunga north face", "Khambachen", "Kangchenjunga glacier"],
    must: /pangpema|ghunsa|jannu|kumbhakarna|kangchenjunga|kanchenjunga|khambachen|lhonak|amjilosa|gyabla/i,
  },
  "kanchenjunga-south-base-camp-trek": {
    terms: ["Yalung Glacier", "Oktang Kangchenjunga", "Tseram Nepal", "Kangchenjunga south face", "Ramche Kangchenjunga", "Yamphudin"],
    must: /yalung|oktang|tseram|cheram|kangchenjunga|kanchenjunga|ramche|yamphudin|taplejung/i,
  },
  "helambu-trek": {
    terms: ["Helambu Nepal", "Tarkeghyang", "Sermathang", "Melamchi valley Nepal", "Chisapani Nepal trek", "Tharepati"],
    must: /helambu|tarkeghyang|tarke\s*ghyang|sermathang|melamchi|tharepati|chisapani|khutumsang|kutumsang|shivapuri/i,
  },

  // --- remote-region treks added later ---
  "dhaulagiri-circuit-trek": {
    terms: ["Dhaulagiri", "French Pass Nepal", "Hidden Valley Dhaulagiri", "Dhaulagiri base camp", "Myagdi Khola", "Marpha Nepal", "Tukuche Nepal"],
    must: /dhaulagiri|french\s*pass|hidden\s*valley|myagdi|marpha|tukuche|dhampus\s*pass|glacier\s*camp|kali\s*gandaki/i,
  },
  "churen-himal-base-camp-trek": {
    terms: ["Churen Himal", "Dhorpatan", "Gurja Himal", "Putha Hiunchuli", "Dhaulagiri range", "Dhorpatan hunting reserve"],
    must: /churen|dhorpatan|gurja|putha|dhaulagiri|myagdi|jaljala|baglung/i,
  },
  "guerrilla-trek": {
    terms: ["Dhorpatan", "Rolpa Nepal", "Rukum Nepal", "Thabang Rolpa", "Jaljala Rolpa", "Dhorpatan hunting reserve"],
    must: /dhorpatan|rolpa|rukum|thabang|jaljala|sulichaur|maikot|pelma|myagdi/i,
  },
  "larke-pass-trek": {
    terms: ["Larkya La", "Samagaun", "Manaslu", "Bimthang", "Samdo Nepal", "Namrung Nepal"],
    must: /larkya|larke|samagaun|sama\s*gaun|manaslu|bimthang|samdo|namrung|\blho\b|dharapani|jagat\s*nepal|philim|\bdeng\b|budhi\s*gandaki/i,
  },
  "lower-manaslu-trek": {
    terms: ["Barpak", "Laprak", "Gorkha Nepal mountain", "Manaslu Gorkha", "Gumda Gorkha"],
    must: /barpak|laprak|gorkha|manaslu|gumda|machha\s*khola|singla|himalchuli|himal\s*chuli/i,
  },
  "rupina-la-pass-trek": {
    terms: ["Rupina La", "Barpak", "Laprak", "Manaslu Gorkha", "Budhi Gandaki"],
    must: /rupina|barpak|laprak|manaslu|nyak|philim|budhi\s*gandaki|gorkha|himalchuli/i,
  },
  "serang-gompa-trek": {
    terms: ["Serang Gompa", "Bihi Nepal", "Prok Manaslu", "Nubri valley", "Budhi Gandaki Manaslu"],
    must: /serang|\bbihi\b|\bprok\b|nubri|manaslu|budhi\s*gandaki|philim|\bdeng\b|jagat\s*nepal/i,
  },
  "tsho-rolpa-trek": {
    terms: ["Tsho Rolpa", "Rolwaling", "Beding Nepal", "Gaurishankar", "Simigaon", "Rolwaling valley"],
    must: /tsho\s*rolpa|cho\s*rolpa|rolwaling|beding|bedding|simigaon|gaurishankar|dongang|trakarding/i,
  },
  "tashi-lapcha-pass-trek": {
    terms: ["Tashi Lapcha", "Tashi Laptse", "Rolwaling", "Beding Nepal", "Thame Nepal", "Tsho Rolpa"],
    must: /tashi\s*lap|tashi\s*lab|rolwaling|beding|bedding|thame|tsho\s*rolpa|simigaon|drolambau|gaurishankar/i,
  },
  "tilman-pass-trek": {
    terms: ["Langshisa Kharka", "Kyanjin Gompa", "Langtang valley", "Jugal Himal", "Dorje Lakpa", "Langtang Lirung"],
    must: /langshisa|kyanjin|langtang|jugal|dorje\s*lakpa|panch\s*pokhari|syabru|tilman|ganchenpo/i,
  },
  "panch-pokhari-trek": {
    terms: ["Panch Pokhari Sindhupalchok", "Jugal Himal", "Sindhupalchok mountain", "Melamchi valley Nepal", "Dorje Lakpa"],
    must: /panch\s*pokhari|panchpokhari|jugal|sindhupalchok|sindhupalchowk|melamchi|tempathang|dorje\s*lakpa/i,
  },
  "sherpani-col-passes-trek": {
    terms: ["Makalu base camp", "Barun valley", "Amphu Labtsa", "Baruntse", "Makalu Nepal", "Makalu Barun"],
    must: /sherpani|makalu|barun|amphu|baruntse|hongu|chamlang|yangle|langmale|seduwa|tashigaon|\bnum\b|khongma/i,
  },
  "shey-phoksundo-lake-trek": {
    terms: ["Phoksundo Lake", "Ringmo Dolpa", "Shey Phoksundo National Park", "Dolpa Nepal", "Juphal Dolpa"],
    must: /phoksundo|ringmo|dolpa|dolpo|juphal|dunai|chhepka|suli\s*gad|kanjiroba/i,
  },
  "jomsom-dolpo-trek": {
    terms: ["Dolpo", "Phoksundo Lake", "Dho Tarap", "Charka Bhot", "Jomsom Nepal", "Kagbeni"],
    must: /dolpo|dolpa|phoksundo|tarap|charka|jomsom|kagbeni|numa\s*la|baga\s*la|juphal|ringmo|kali\s*gandaki/i,
  },
  "saribung-pass-trek": {
    terms: ["Lo Manthang", "Upper Mustang", "Damodar Kunda", "Nar Phu valley", "Yara Mustang", "Chhoser Mustang"],
    must: /lo\s*manthang|mustang|damodar|nar\s*phu|phu\s*gaon|\byara\b|tange|ghami|charang|chele|kagbeni|saribung|chhoser|dhakmar/i,
  },
  "teri-la-pass-trek": {
    terms: ["Lo Manthang", "Upper Mustang", "Nar Phu valley", "Tange Mustang", "Nar village Nepal", "Ghami Mustang"],
    must: /lo\s*manthang|mustang|nar\s*phu|phu\s*gaon|nar\s*gaon|tange|\byara\b|ghami|charang|chele|kagbeni|teri\s*la|chhoser|dhakmar/i,
  },
  "api-himal-base-camp-trek": {
    terms: ["Api Himal", "Api Nampa Conservation Area", "Darchula Nepal", "Nampa peak Nepal", "Api Himal base camp"],
    must: /\bapi\b|api\s*himal|api\s*nampa|nampa|darchula|chamaliya|byas\s*rural|sudurpaschim|sudurpashchim/i,
  },
  "badimalika-trek": {
    terms: ["Badimalika", "Bajura Nepal", "Saipal Himal", "Martadi Bajura", "Badimalika temple"],
    must: /badimalika|badi\s*malika|bajura|saipal|martadi|kolti|budhiganga/i,
  },
  "ramaroshan-lakes-trek": {
    terms: ["Ramaroshan", "Achham Nepal", "Mangalsen Achham", "Ramaroshan lake Achham", "Sanfebagar"],
    must: /ramaroshan|rama\s*roshan|achham|accham|mangalsen|sanfebagar|budhiganga/i,
  },
  "red-panda-trail-trek": {
    terms: ["Ilam Nepal", "Panchthar Nepal", "Ilam tea garden", "Kanyam Ilam", "Singalila Nepal", "Antu Danda Ilam"],
    must: /\bilam\b|panchthar|red\s*panda|kanyam|singalila|maimajhuwa|chyangthapu|antu|mai\s*pokhari/i,
  },

  // ─────────────────── Tours category ───────────────────
  // Kathmandu valley sites are far better covered on Commons than the remote
  // trekking regions, so these mostly need narrowing rather than widening.
  "kathmandu-valley-tour": {
    terms: ["Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square", "Boudhanath", "Swayambhunath", "Nagarkot Nepal"],
    must: /durbar\s*square|boudha|bouddha|swayambhu|bhaktapur|patan|nagarkot|changunarayan|pashupatinath|nyatapola|kathmandu/i,
  },
  "glimpse-of-nepal-tour": {
    terms: ["Kathmandu Durbar Square", "Bhaktapur Nepal", "Nagarkot Nepal", "Dhulikhel", "Panauti Nepal", "Boudhanath"],
    must: /durbar\s*square|bhaktapur|nagarkot|dhulikhel|panauti|boudha|bouddha|swayambhu|changunarayan|kathmandu/i,
  },
  "kathmandu-pokhara-tour": {
    terms: ["Phewa Lake Pokhara", "Sarangkot", "Kathmandu Durbar Square", "Bhaktapur Nepal", "Nagarkot Nepal", "World Peace Pagoda Pokhara"],
    must: /phewa|pokhara|sarangkot|durbar\s*square|bhaktapur|nagarkot|boudha|peace\s*pagoda|kathmandu|annapurna|machhapuchhre|machapuchare/i,
  },
  "best-of-nepal-tour": {
    terms: ["Phewa Lake Pokhara", "Chitwan National Park", "Lumbini Maya Devi", "Bhaktapur Nepal", "Boudhanath", "Nagarkot Nepal"],
    must: /phewa|pokhara|chitwan|lumbini|maya\s*devi|bhaktapur|boudha|nagarkot|durbar\s*square|sarangkot|rhino/i,
  },
  "nepal-cultural-tour": {
    terms: ["Patan Durbar Square", "Bhaktapur pottery square", "Bandipur Nepal", "Newar craft Nepal", "Khokana", "Ghalegaun"],
    must: /patan|bhaktapur|bandipur|khokana|bungamati|ghale\s*gaun|ghalegaun|durbar\s*square|pottery|thangka|newar/i,
  },
  "kathmandu-day-tour": {
    terms: ["Kathmandu Durbar Square", "Swayambhunath", "Boudhanath", "Pashupatinath", "Kumari Ghar Kathmandu"],
    must: /durbar\s*square|swayambhu|boudha|bouddha|pashupatinath|kumari|kasthamandap|kathmandu/i,
  },
  "seven-world-heritage-kathmandu-day-tour": {
    terms: ["Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square", "Changunarayan", "Swayambhunath", "Boudhanath", "Pashupatinath"],
    must: /durbar\s*square|swayambhu|boudha|bouddha|pashupatinath|changunarayan|bhaktapur|patan|nyatapola/i,
  },
  "bhaktapur-day-tour": {
    terms: ["Bhaktapur Durbar Square", "Nyatapola temple", "Bhaktapur pottery square", "Changunarayan", "Bhaktapur Golden Gate"],
    must: /bhaktapur|nyatapola|changunarayan|pottery|taumadhi|dattatreya|golden\s*gate/i,
  },
  "patan-day-tour": {
    terms: ["Patan Durbar Square", "Krishna Mandir Patan", "Golden Temple Patan", "Patan Museum", "Lalitpur Nepal"],
    must: /patan|lalitpur|krishna\s*mandir|hiranya|golden\s*temple|mahabouddha|kumbeshwar/i,
  },
  "chandragiri-cable-car-tour": {
    terms: ["Chandragiri Nepal", "Chandragiri cable car", "Chandragiri hills Kathmandu", "Bhaleshwor Mahadev"],
    must: /chandragiri|bhaleshwor|bhaleshwar|thankot/i,
  },
  "pharping-dakshinkali-tour": {
    terms: ["Pharping Nepal", "Dakshinkali temple", "Asura cave Pharping", "Vajrayogini Pharping", "Sekh Narayan"],
    must: /pharping|dakshinkali|dakshin\s*kali|asura|vajrayogini|sekh\s*narayan/i,
  },
  "secret-food-tour-in-kathmandu": {
    terms: ["Ason Kathmandu", "Indra Chowk Kathmandu", "Newari food", "momo Nepal", "Kathmandu market street"],
    must: /\bason\b|indra\s*chowk|newari|newar|momo|samay\s*baji|chatamari|bazaar\s*kathmandu|kathmandu\s*market/i,
  },
  "bungmati-khokana-village-tour": {
    terms: ["Bungamati", "Khokana Nepal", "Rato Machhendranath", "Newar village Kathmandu"],
    must: /bungamati|bungmati|khokana|machhendranath|machindranath|rudrayani/i,
  },
  "everest-mountain-flight": {
    terms: ["Mount Everest aerial", "Everest from plane", "Himalaya from aircraft Nepal", "Lhotse Nuptse", "Cho Oyu"],
    must: /everest|lhotse|nuptse|cho\s*oyu|makalu|himalaya|gaurishankar|langtang/i,
  },
  "pokhara-day-tour": {
    terms: ["Phewa Lake", "World Peace Pagoda Pokhara", "Devi's Fall Pokhara", "Gupteshwor cave", "Tal Barahi temple"],
    must: /phewa|pokhara|peace\s*pagoda|devi.?s\s*fall|gupteshwor|tal\s*barahi|begnas|sarangkot/i,
  },
  "pokhara-day-tour-with-sarangkot-sunrise": {
    terms: ["Sarangkot sunrise", "Sarangkot Annapurna", "Phewa Lake sunrise", "Annapurna from Pokhara", "Machhapuchhre Pokhara"],
    must: /sarangkot|phewa|pokhara|annapurna|machhapuchhre|machapuchare|dhaulagiri|sunrise/i,
  },
  "five-himalayan-viewpoints-tour-from-pokhara": {
    terms: ["Sarangkot", "Begnas Lake", "Pumdikot", "World Peace Pagoda Pokhara", "Kahun Danda Pokhara"],
    must: /sarangkot|begnas|pumdikot|peace\s*pagoda|kahun|phewa|pokhara|annapurna/i,
  },
  "hindu-pilgrimage-tour": {
    terms: ["Pashupatinath", "Janaki Mandir Janakpur", "Muktinath temple", "Barahakshetra", "Devghat Nepal"],
    must: /pashupatinath|janakpur|janaki|muktinath|barahakshetra|devghat|budhanilkantha|guhyeshwari|dakshinkali/i,
  },
  "buddhist-pilgrimage-tour-nepal": {
    terms: ["Lumbini Maya Devi temple", "Ashoka pillar Lumbini", "Tilaurakot Kapilvastu", "Boudhanath", "Namobuddha", "Swayambhunath"],
    must: /lumbini|maya\s*devi|ashok|tilaurakot|kapilvastu|namobuddha|namo\s*buddha|boudha|bouddha|swayambhu|ramagrama/i,
  },
  "muktinath-pilgrimage-tour": {
    terms: ["Muktinath temple", "Jomsom Nepal", "Kagbeni", "Kali Gandaki", "Muktinath 108 taps"],
    must: /muktinath|jomsom|kagbeni|kali\s*gandaki|jharkot|marpha|mustang/i,
  },
  "gosainkunda-holy-tour": {
    terms: ["Gosaikunda", "Gosainkunda lake", "Dhunche Rasuwa", "Chandanbari Sing Gompa", "Langtang National Park"],
    must: /gosaikunda|gosainkunda|dhunche|chandanbari|sing\s*gompa|lauribina|langtang|rasuwa/i,
  },
  "ghalegaun-ghanpokhara-village-tour": {
    terms: ["Ghalegaun", "Ghale Gaun Lamjung", "Ghanpokhara", "Lamjung Nepal village", "Besisahar"],
    must: /ghale\s*gaun|ghalegaun|ghanpokhara|lamjung|besisahar|gurung|marsyangdi/i,
  },
  "himalayan-village-tour": {
    terms: ["Bandipur Nepal", "Ghalegaun", "Sirubari village", "Newar village Nepal", "Gurung village Nepal"],
    must: /bandipur|ghale\s*gaun|ghalegaun|sirubari|syangja|lamjung|gurung|magar|newar/i,
  },
  "sirubari-village-tour": {
    terms: ["Sirubari village Nepal", "Syangja Nepal", "Magar village Nepal", "Sirubari homestay"],
    must: /sirubari|syangja|magar|andhikhola|walling/i,
  },
  "paragliding-in-pokhara": {
    terms: ["paragliding Pokhara", "Sarangkot paragliding", "paraglider Phewa Lake", "paragliding Nepal"],
    must: /paraglid|sarangkot|phewa|pokhara/i,
  },
  "zipline-in-pokhara-zip-flyer": {
    terms: ["zipline Pokhara", "Sarangkot Nepal", "zip flyer Nepal", "Pokhara valley view"],
    must: /zip\s*line|zipline|zip\s*flyer|sarangkot|pokhara|hyangja/i,
  },
  "bungee-jumping-in-pokhara": {
    terms: ["Hemja Nepal", "Seti river gorge Nepal", "Pokhara valley Nepal", "Annapurna from Pokhara", "bungy jumping Nepal", "Seti Gandaki Pokhara"],
    must: /bungee|bungy|hemja|pokhara|seti/i,
  },
  "ultra-light-flight-in-pokhara": {
    terms: ["ultralight Pokhara", "microlight Nepal", "Pokhara aerial view", "Phewa Lake aerial"],
    must: /ultralight|ultra\s*light|microlight|pokhara|phewa|sarangkot|annapurna/i,
  },
  "atv-adventure-tour-in-pokhara": {
    terms: ["Pokhara valley Nepal", "Seti river Pokhara", "Hemja Nepal", "Pokhara countryside"],
    must: /pokhara|seti|hemja|sarangkot|annapurna|machhapuchhre/i,
  },
  "seti-river-rafting-in-pokhara": {
    terms: ["Seti river Nepal", "rafting Nepal", "Seti gorge Pokhara", "river rafting Pokhara"],
    must: /seti|rafting|raft|pokhara|river/i,
  },
  "trishuli-river-rafting-1-day": {
    terms: ["Trishuli river", "rafting Trishuli Nepal", "Trishuli gorge", "Charaudi Nepal"],
    must: /trishuli|trisuli|rafting|raft|charaudi|kurintar|prithvi\s*highway/i,
  },
  "trishuli-river-rafting-2-days": {
    terms: ["Trishuli river", "rafting Nepal camping", "Trishuli gorge", "river beach Nepal"],
    must: /trishuli|trisuli|rafting|raft|charaudi|kurintar/i,
  },
  "chitwan-national-park-tour-3-days": {
    terms: ["Chitwan National Park", "one horned rhinoceros Chitwan", "Rapti river Chitwan", "Tharu village Chitwan", "Chitwan jungle"],
    must: /chitwan|rapti|rhino|tharu|sauraha|gharial|terai/i,
  },
  "chitwan-national-park-tour-4-days": {
    terms: ["Chitwan National Park", "rhinoceros Nepal", "Chitwan elephant", "Bis Hazari Tal", "Chitwan grassland"],
    must: /chitwan|rapti|rhino|tharu|sauraha|gharial|bis\s*hazari|terai/i,
  },
  "bardia-national-park-tour-4-days": {
    terms: ["Bardia National Park", "Bardiya Nepal tiger", "Karnali river Nepal", "Bardia jungle"],
    must: /bardia|bardiya|karnali|tiger|babai|thakurdwara/i,
  },
  "bardia-jungle-safari-tour-5-days": {
    terms: ["Bardia National Park", "Bardiya tiger Nepal", "Karnali river", "Babai valley Nepal"],
    must: /bardia|bardiya|karnali|tiger|babai|thakurdwara/i,
  },
  "annapurna-base-camp-helicopter-tour": {
    terms: ["Annapurna Base Camp", "Annapurna Sanctuary", "Machhapuchhre", "Annapurna South"],
    must: /annapurna|machhapuchhre|machapuchare|hiunchuli|sanctuary|modi\s*khola/i,
  },
  "everest-base-camp-helicopter-tour": {
    terms: ["Kala Patthar", "Everest Base Camp", "Khumbu glacier", "Everest View Hotel", "Mount Everest"],
    must: /kala\s*patthar|everest|khumbu|gorak|lhotse|nuptse|pumori|syangboche|namche/i,
  },
  "langtang-helicopter-tour-from-kathmandu": {
    terms: ["Kyanjin Gompa", "Langtang valley", "Langtang Lirung", "Langtang National Park"],
    must: /kyanjin|langtang|lirung|ganchenpo|rasuwa/i,
  },
  "muktinath-helicopter-tour-from-pokhara": {
    terms: ["Muktinath temple", "Muktinath Nepal", "Kali Gandaki gorge", "Jomsom Mustang"],
    must: /muktinath|jomsom|kagbeni|kali\s*gandaki|mustang|jharkot|nilgiri/i,
  },
  "muktinath-damodar-kunda-helicopter-tour": {
    terms: ["Damodar Kunda", "Muktinath temple", "Damodar Himal", "Upper Mustang Nepal"],
    must: /damodar|muktinath|mustang|jomsom|kagbeni|kali\s*gandaki/i,
  },
  "lukla-to-kathmandu-helicopter-flight": {
    terms: ["Lukla airport", "Tenzing Hillary Airport", "Lukla Nepal", "Dudh Koshi valley"],
    must: /lukla|tenzing|hillary\s*airport|dudh\s*koshi|khumbu|phakding/i,
  },
  "kathmandu-to-lukla-helicopter-flight": {
    terms: ["Lukla airport", "Tenzing Hillary Airport", "Lukla Nepal", "Khumbu valley"],
    must: /lukla|tenzing|hillary\s*airport|dudh\s*koshi|khumbu|phakding/i,
  },
  "gorakshep-to-kathmandu-helicopter-flight": {
    terms: ["Gorakshep", "Everest Base Camp", "Khumbu glacier", "Kala Patthar"],
    must: /gorak|everest|khumbu|kala\s*patthar|pumori|lobuche|pheriche/i,
  },
  "gorakshep-to-lukla-helicopter-flight": {
    terms: ["Gorakshep", "Khumbu glacier", "Lobuche Nepal", "Everest Base Camp"],
    must: /gorak|everest|khumbu|kala\s*patthar|lobuche|pheriche|lukla/i,
  },
  "kalapatthar-to-kathmandu-helicopter-flight": {
    terms: ["Kala Patthar", "Everest from Kala Patthar", "Khumbu glacier", "Pumori"],
    must: /kala\s*patthar|everest|khumbu|gorak|pumori|nuptse|lhotse/i,
  },
  "namche-to-kathmandu-helicopter-flight": {
    terms: ["Namche Bazaar", "Namche Nepal", "Khumbu Namche", "Kongde Ri"],
    must: /namche|khumbu|kongde|thamserku|syangboche|dudh\s*koshi/i,
  },
};

const REJECT =
  /\b(map|karte|diagram|chart|logo|flag|coat of arms|seal|stamp|banner|icon|graph|scan|document|poster|sign|book|cover|page \d+|reconnaissance|portrait|screenshot|locator|sketch|drawing|painting|engraving|coin|plaque|lizard|insect|butterfly|bird of|kid|child|boy|girl|man |woman |people|festival|wedding|dance|food|momo|bus |motorbike|motor bridge|airport terminal)\b/i;
/** Digitised books: "Round Kangchenjunga; a narrative ... (1903) (14773328102).jpg" */
const ARCHIVE = /\((1[6-9]\d{2}|19[0-5]\d)\)|narrative|\bvol\.?\s*\d|\bplate\b|archive\.org/i;
/** Astronaut photography, and views taken from the Indian side of the range. */
const OFF_ROUTE = /\b(?:ISS\d|STS\d)|\b(astronaut|satellite|aerial)\b|from space|\b(sikkim|darjeeling|sandakphu|sandakpur|india|tibet|china)\b/i;
const PEOPLE = /\b(kid|catkid|gurungkid|old man|celebrating|selfie|group photo)\b/i;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function api(params: Record<string, string>): Promise<any> {
  const qs = new URLSearchParams({ format: "json", ...params });
  for (let a = 0; a < 6; a++) {
    const r = await fetch(`${API}?${qs}`, { headers: { "User-Agent": UA } });
    const text = await r.text();
    if (text.startsWith("You are making too many requests")) { await sleep(4000 * (a + 1)); continue; }
    try { return JSON.parse(text); } catch { await sleep(2000 * (a + 1)); }
  }
  throw new Error("commons api gave up");
}

async function search(term: string) {
  const s = await api({
    action: "query", list: "search", srsearch: `${term} filetype:bitmap`,
    srnamespace: "6", srlimit: "30",
  });
  const titles: string[] = (s?.query?.search ?? []).map((x: any) => x.title);
  if (!titles.length) return [];
  const out: any[] = [];
  for (let i = 0; i < titles.length; i += 40) {
    const info = await api({
      action: "query", titles: titles.slice(i, i + 40).join("|"),
      prop: "imageinfo", iiprop: "url|size|mime|extmetadata",
    });
    for (const pg of Object.values<any>(info?.query?.pages ?? {})) {
      const ii = pg.imageinfo?.[0];
      if (!ii) continue;
      if (!/^image\/(jpeg|png|webp)$/.test(ii.mime ?? "")) continue;
      if (ii.width < 1400 || ii.height < 800) continue;
      if (ii.width / ii.height < 1.25) continue;
      const name = String(pg.title).replace(/^File:/, "");
      if (REJECT.test(name) || PEOPLE.test(name)) continue;
      const strip = (v: any) => (v?.value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      out.push({
        file: name, width: ii.width, height: ii.height, url: ii.url,
        descriptionUrl: ii.descriptionurl,
        licence: strip(ii.extmetadata?.LicenseShortName),
        artist: strip(ii.extmetadata?.Artist).slice(0, 140),
      });
    }
    await sleep(600);
  }
  return out;
}

async function main() {
  const found: Record<string, any[]> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
  for (const [slug, cfg] of Object.entries(TARGETS)) {
    if (ONLY && !ONLY.has(slug)) continue;
    if (found[slug]?.length >= 7) { console.log(`${slug} — already have ${found[slug].length}`); continue; }
    const seen = new Set<string>();
    const keep: any[] = [];
    for (const term of cfg.terms) {
      let res: any[] = [];
      try { res = await search(term); } catch (e: any) { console.log(`   ! ${term}: ${e.message}`); }
      for (const r of res) {
        if (seen.has(r.file)) continue;
        seen.add(r.file);
        // The filename must actually name something on this trek.
        if (!cfg.must.test(r.file)) continue;
        keep.push(r);
      }
      await sleep(400);
    }
    keep.sort((a, b) => b.width - a.width);
    found[slug] = keep;
    console.log(`${slug.padEnd(46)} ${keep.length} on-route candidates`);
    keep.slice(0, 10).forEach((k) => console.log(`      ${k.file}`));
    writeFileSync(OUT, JSON.stringify(found, null, 1));
  }
  const short = Object.entries(found).filter(([, v]) => v.length < 7);
  console.log(`\nStill short of 7: ${short.map(([k, v]) => `${k}(${v.length})`).join(", ") || "none"}`);
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
