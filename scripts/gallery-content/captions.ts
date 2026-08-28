/**
 * Rewritten gallery captions.
 *
 * The previous captions were a short label plus a photographer/licence credit
 * ("… Photo: Someone, CC BY-SA 4.0."). These replace them with a caption that
 * describes what the picture actually shows. The credits stripped out of the
 * old captions are preserved in ./PHOTO-CREDITS.md.
 *
 * Keyed by TrekGalleryImage id. The apply script refuses to write unless the
 * caption still in the database is the old credit-bearing one.
 */
export type CaptionFix = { id: string; caption: string };

export const CAPTION_FIXES: CaptionFix[] = [
  // ── ama-yangri-trek ────────────────────────────────────────────────────────
  { id: "cmtcdgdyb0000hcfj9f1wjltl", caption: "The Sherpa settlement of Tarkeghyang, the largest village in the Helambu valley and the overnight stop below Ama Yangri." },
  { id: "cmtcdgdyb0001hcfj4ac4za02", caption: "The trail through Langtang National Park, whose forests and grazing land the Ama Yangri route shares." },
  { id: "cmtcdgdyb0002hcfjgtqg95dw", caption: "The descent from Surya Kunda, with teahouses and terraced hillsides scattered across the slopes below." },
  { id: "cmtcdgdyb0003hcfjtzo3gggo", caption: "The Helambu ridges rising clear of a sea of cloud — the view that makes the pre-dawn start worthwhile." },
  { id: "cmtcdgdyb0004hcfjjytsm68i", caption: "A river valley on the approach to Ama Yangri, where the trail leaves the Helambu villages behind." },
  { id: "cmtcdgdyb0005hcfjgwqruua3", caption: "The open hillside below the Ama Yangri summit ridge, grazed in summer and dusted with snow in winter." },

  // ── annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara ───────────
  { id: "cmtcdgegn0006hcfjvac6jrw1", caption: "The Annapurna range seen from Mardi Himal Base Camp, with the wall of peaks filling the skyline." },
  { id: "cmtcdgegn0007hcfjrtagsrix", caption: "Teahouses at Annapurna Base Camp, standing on glacial moraine inside the sanctuary." },
  { id: "cmtcdgegn0008hcfj6v6xky7x", caption: "Annapurna Base Camp ringed by peaks — the amphitheatre of ice and rock that closes the sanctuary." },
  { id: "cmtcdgegn0009hcfjzoc6ltcj", caption: "First light striking the peaks from Mardi Himal, the reason trekkers climb to High Camp before dawn." },
  { id: "cmtcdgegn000ahcfjb1b7zvmg", caption: "The suspension bridge at Jhinu Danda, crossing the Modi Khola on the way down from the sanctuary." },
  { id: "cmtcdgegn000bhcfj53muaprh", caption: "A teahouse at Jhinu Danda, the village known for the hot springs a short walk below the trail." },

  // ── annapurna-circuit-trek ────────────────────────────────────────────────
  { id: "cmtcdgez1000chcfj55tq1udk", caption: "A panorama of Tilicho Lake, one of the highest lakes in the world at 4,919 m." },
  { id: "cmtcdgez1000dhcfjv0wj489h", caption: "The Muktinath valley looking back toward Thorong La, the 5,416 m pass that crosses the circuit." },
  { id: "cmtcdgez1000ehcfjdivi17r7", caption: "Tilicho Lake above Manang, its meltwater held back by the moraine of the Tilicho glacier." },
  { id: "cmtcdgez1000fhcfjl99m6wns", caption: "Tilicho Lake set in a bowl of bare rock, with no vegetation at this altitude to soften the shoreline." },
  { id: "cmtcdgez1000ghcfj886ej69k", caption: "The shore of Tilicho Lake seen from Tilicho Base Camp, the staging point for the day hike up." },
  { id: "cmtcdgez1000hhcfjn2rmud0l", caption: "The entrance to the Muktinath valley, a pilgrimage site sacred to both Hindus and Buddhists." },

  // ── annapurna-circuit-with-tilicho-lake-trek ──────────────────────────────
  { id: "cmtcdgghu000uhcfj169tb88w", caption: "Tilicho Lake above Manang, the high point of the detour that this itinerary adds to the circuit." },
  { id: "cmtcdgghu000vhcfj3wi48tg3", caption: "The Annapurna range between Ledar and Thorong Phedi, on the final approach to the pass." },
  { id: "cmtcdgghu000whcfjc44bdhze", caption: "The Muktinath valley with Thorong La behind it, seen after the long descent off the pass." },
  { id: "cmtcdgghu000xhcfjox3nwjqw", caption: "A full panorama of Tilicho Lake, frozen for much of the year at 4,919 m." },
  { id: "cmtcdgghu000yhcfj92b2lh6t", caption: "The turquoise water of Tilicho Lake, coloured by rock flour ground down by the glacier above." },
  { id: "cmtcdgghu000zhcfjc8ye1v83", caption: "Muktinath village at the head of its valley, where the circuit rejoins the Kali Gandaki." },

  // ── everest-base-camp-trek ────────────────────────────────────────────────
  { id: "cmtcdgfh9000ihcfj9i8joncv", caption: "Tengboche monastery seen from Phortse on the way to Pheriche, perched on its ridge above the Imja valley." },
  { id: "cmtcdgfh9000jhcfjj6dmpr6r", caption: "Everest from the Hotel Everest View trail above Namche Bazaar — the first clear sight of the mountain." },
  { id: "cmtcdgfh9000khcfje1awlkwp", caption: "Namche Bazaar from above, the horseshoe of Sherpa lodges and shops built into a natural bowl at 3,440 m." },
  { id: "cmtcdgfh9000lhcfj57ntlzek", caption: "Tents and glacial moraine at Everest Base Camp, at the foot of the Khumbu Icefall." },
  { id: "cmtcdgfh9000mhcfj445l9upb", caption: "Everest, Lhotse and Nuptse from Kala Patthar at 5,545 m, the classic viewpoint of the trek." },
  { id: "cmtcdgfh9000nhcfjeb2a3o0d", caption: "The Everest range above Tengboche after dark, with the summits still catching the last light." },

  // ── everest-three-pass-trek ───────────────────────────────────────────────
  { id: "cmtcdgfzh000ohcfj8a7vhbjj", caption: "Everest from the trail above Namche Bazaar, seen on the acclimatisation day before the passes." },
  { id: "cmtcdgfzh000phcfj7lts4i18", caption: "Everest and Lhotse from Kala Patthar, reached on the Everest Base Camp leg of the three-pass loop." },
  { id: "cmtcdgfzi000qhcfjtic32u9t", caption: "Everest, Lhotse and Nuptse lined up along the head of the Khumbu valley, seen from Kala Patthar." },
  { id: "cmtcdgfzi000rhcfja8aadew0", caption: "The glacier below Gokyo, crossed on the Ngozumpa traverse between Cho La and Renjo La." },
  { id: "cmtcdgfzi000shcfjhao1jyzn", caption: "Gokyo Lake, the third and largest of the Gokyo lakes, held between the Ngozumpa glacier and the valley wall." },
  { id: "cmtcdgfzi000thcfjohjl7yro", caption: "Namche Bazaar spread across its hillside, the trading hub where the three-pass circuit begins and ends." },

  // ── everest-view-trek ─────────────────────────────────────────────────────
  { id: "cmtcdgh000010hcfjzsuqr5i5", caption: "Kangtega at sunset from Namche Bazaar, its summit ridge turning gold as the light drops." },
  { id: "cmtcdgh000011hcfjkl696dyr", caption: "The trail between Khumjung and Syangboche near the Hotel Everest View, with Everest on the skyline." },
  { id: "cmtcdgh000012hcfjarps3v7i", caption: "A close view of Everest from Kala Patthar at 5,644 m, the summit pyramid clear above the Khumbu." },
  { id: "cmtcdgh000013hcfjli61kqel", caption: "The first sight of Lukla from the old Jiri approach, the gateway village to the Khumbu." },
  { id: "cmtcdgh000014hcfj205zc8kf", caption: "Lukla airport and its short sloping runway, where almost every Everest trek starts." },
  { id: "cmtcdgh000015hcfj7fdynd8y", caption: "Khumjung village seen from the hillside below Ama Dablam, its green roofs set against the valley." },

  // ── ganesh-himal-trek ─────────────────────────────────────────────────────
  { id: "cmtcdghi40016hcfjzrvu8sv1", caption: "The Trishuli River, followed by the road on the drive out to the Ganesh Himal trailhead." },
  { id: "cmtcdghi40017hcfjq5io7grv", caption: "The Khatauti Khola joining the Trishuli River in Dhading, low country the route crosses before climbing." },
  { id: "cmtcdghi40018hcfjjilkielc", caption: "Muralibhanjyang in Dhading, a ridge-top settlement on the approach to the Ganesh Himal foothills." },
  { id: "cmtcdghi40019hcfjxrafx2vw", caption: "Syabrubesi, the roadhead village on the Bhote Koshi where the walking begins." },
  { id: "cmtcdghi4001ahcfjlznt2sn1", caption: "The trail between Syabrubesi and the Langtang valley, shared with the Ganesh Himal route." },
  { id: "cmtcdghi4001bhcfj2ofdpyz6", caption: "The Ganesh Himal range from the air, the wall of peaks the trek circles beneath." },

  // ── gokyo-lake-trek ───────────────────────────────────────────────────────
  { id: "cmtcdgi0b001chcfjsdngmirw", caption: "The glacier below Gokyo, its surface broken into rubble-covered ice ridges." },
  { id: "cmtcdgi0b001dhcfjnfcq87h0", caption: "Gokyo Lake in its basin of bare rock, the goal of the trek at 4,700 m." },
  { id: "cmtcdgi0b001ehcfj4rs3iugb", caption: "The mountain cirque above Luza and Machhermo, an overnight stop on the climb toward Gokyo." },
  { id: "cmtcdgi0b001fhcfjpmqsxjhz", caption: "Namche Bazaar from above, the acclimatisation stop every Gokyo trek passes through." },
  { id: "cmtcdgi0b001ghcfjq6uyjb6i", caption: "Trekkers on the trail into Namche Bazaar, two days above Lukla." },
  { id: "cmtcdgi0b001hhcfjtb6iidce", caption: "The Ngozumpa glacier, the longest in Nepal, running along the eastern edge of the Gokyo valley." },

  // ── gosaikunda-lake-trek ──────────────────────────────────────────────────
  { id: "cmtcdgiib001ihcfj6ai7z8ma", caption: "The view from Dhunche, the district headquarters where the walk up to Gosaikunda starts." },
  { id: "cmtcdgiib001jhcfjxxkcpwor", caption: "Emerald green hillsides on the climb to Gosaikunda, before the trail rises above the treeline." },
  { id: "cmtcdgiib001khcfjy5zh0tix", caption: "Weathered chortens at Sing Gompa, the monastery settlement on the route to the lakes." },
  { id: "cmtcdgiib001lhcfjb674h75e", caption: "Gosaikunda in August, when the monsoon fills the lake and draws thousands of Hindu pilgrims." },
  { id: "cmtcdgiib001mhcfjosvnbc6w", caption: "The trail through Langtang National Park, which the Gosaikunda route crosses on its way to the lakes." },
  { id: "cmtcdgiib001nhcfjlmc8oxas", caption: "The descent from Surya Kunda toward the teahouses and terraced slopes of the lower valley." },

  // ── helambu-trek ──────────────────────────────────────────────────────────
  { id: "cmtcdgj0d001ohcfjlts7k7dn", caption: "Tarkeghyang, the Sherpa village at the heart of Helambu and the trek's main overnight stop." },
  { id: "cmtcdgj0d001phcfjpcd3e17y", caption: "The Kaal Bhairav temple at Chisapani, the first night's halt on the ridge above Kathmandu." },
  { id: "cmtcdgj0d001qhcfjiv1go3uv", caption: "Chisapani, where the trail leaves Shivapuri National Park and the Himalaya first comes into view." },
  { id: "cmtcdgj0d001rhcfjnmf83y6d", caption: "Stone houses on the Langtang trail, in the national park the Helambu circuit borders." },
  { id: "cmtcdgj0d001shcfjdaylks6d", caption: "The path down from Surya Kunda, dropping through forest toward the Helambu villages." },
  { id: "cmtcdgj0d001thcfji8ffectm", caption: "The river valley below Ama Yangri, the peak that rises above Tarkeghyang." },

  // ── humla-limi-valley-trek ────────────────────────────────────────────────
  { id: "cmtcdgjil001uhcfj6u8thycq", caption: "Simikot, the remote airstrip town in Humla where this trek begins and ends." },
  { id: "cmtcdgjil001vhcfjngapd6hi", caption: "Bageshwori Temple in Nepalgunj, the lowland city where trekkers connect to the Simikot flight." },
  { id: "cmtcdgjil001whcfjl6uoyg7q", caption: "The Bageshwori Temple complex in Nepalgunj, one of the main Hindu shrines of the western Terai." },
  { id: "cmtcdgjil001xhcfjb1inzdfa", caption: "The Karnali, Nepal's longest river, whose gorge the trail follows out of Simikot." },
  { id: "cmtcdgjil001yhcfj6y7wazih", caption: "The high, dry landscape of the Limi Valley, close to the Tibetan border and rarely visited." },

  // ── jomsom-muktinath-trek ─────────────────────────────────────────────────
  { id: "cmtcdgk0s0020hcfjwdepki1r", caption: "The trail between Jomsom and Muktinath, climbing out of the windswept Kali Gandaki valley." },
  { id: "cmtcdgk0s0021hcfjdqmza3fb", caption: "The road linking Kagbeni and Muktinath, cut across bare hillsides above the river." },
  { id: "cmtcdgk0s0022hcfjxzpwtz59", caption: "The entrance to Muktinath, the pilgrimage site at 3,760 m that gives the trek its name." },
  { id: "cmtcdgk0s0023hcfjmo86rvhg", caption: "Ice and running water in the Muktinath valley, fed by the 108 spouts at the temple." },
  { id: "cmtcdgk0s0024hcfjs53tyc7a", caption: "Cultivated fields at Kagbeni, a green break in the dry Kali Gandaki gorge." },
  { id: "cmtcdgk0s0025hcfjqq9r73yu", caption: "A panorama of the Dhaulagiri range, seen across the deepest gorge on earth." },

  // ── jomsom-muktinath-trek-from-pokhara ────────────────────────────────────
  { id: "cmtcdgkj20026hcfjf0mc7ilk", caption: "The route from Jomsom up to Muktinath, following the Kali Gandaki toward the pilgrimage town." },
  { id: "cmtcdgkj20027hcfjx51fxit1", caption: "The Kagbeni–Muktinath road, the link between the medieval village and the temple complex." },
  { id: "cmtcdgkj20028hcfj61yfgkl8", caption: "The gateway into Muktinath, where Hindu and Buddhist pilgrims arrive together." },
  { id: "cmtcdgkj20029hcfjujqes0bh", caption: "Meltwater and ice in the Muktinath valley, above 3,700 m." },
  { id: "cmtcdgkj2002ahcfjs8h37cvp", caption: "Farming at Kagbeni, irrigated fields set against the barren walls of the gorge." },
  { id: "cmtcdgkj2002bhcfjr1vi62as", caption: "The Dhaulagiri Himal in panorama, dominating the western side of the valley." },

  // ── kanchenjunga-circuit-trek ─────────────────────────────────────────────
  { id: "cmtcdgl16002chcfjd1dd1obx", caption: "The Kanchenjunga range on the horizon, the massif this circuit walks all the way around." },
  { id: "cmtcdgl16002dhcfj43sh9w16", caption: "Sunrise over Taplejung, the hill town where the long approach to Kanchenjunga starts." },
  { id: "cmtcdgl16002ehcfjqg6n799s", caption: "The terraced hills around Taplejung, farmed right up to the ridgelines." },
  { id: "cmtcdgl16002fhcfjurh575i9", caption: "The mountain panorama from Ramche, high on the southern side of the circuit." },
  { id: "cmtcdgl16002ghcfjdce6cssa", caption: "The view out from Ramche, the last settlement before the southern base camp at Oktang." },
  { id: "cmtcdgl16002hhcfjz4n61tnv", caption: "Bhadrapur in the eastern Terai, the airport town trekkers fly into for Kanchenjunga." },

  // ── kanchenjunga-north-base-camp-trek ─────────────────────────────────────
  { id: "cmtcdgljf002ihcfjqtm3fb0w", caption: "The terraced hillsides of Taplejung, where the drive ends and the walking begins." },
  { id: "cmtcdgljf002jhcfjpti605pt", caption: "Kangchenjunga from Pangpema at 5,143 m, the north base camp and high point of the trek." },
  { id: "cmtcdgljf002khcfjpum7ocqw", caption: "Bhadrapur, the Terai gateway for flights to and from the Kanchenjunga region." },
  { id: "cmtcdgljf002mhcfj012o3eld", caption: "Kangchenjunga in the early morning, the world's third-highest mountain at 8,586 m." },
  { id: "cmtcdgljf002nhcfjesyfeom0", caption: "The Kanchenjunga massif and its neighbouring summits along the Nepal–Sikkim border." },

  // ── kanchenjunga-south-base-camp-trek ─────────────────────────────────────
  { id: "cmtcdgm1n002ohcfjgjxxhv3a", caption: "Dawn over Taplejung, the trailhead town for the southern approach to Kanchenjunga." },
  { id: "cmtcdgm1n002phcfjg514n5gd", caption: "Bhadrapur in the Terai plains, the first and last stop on a Kanchenjunga itinerary." },
  { id: "cmtcdgm1n002qhcfjdqdww477", caption: "Sagarmatha Chowk in Bhadrapur, in the far south-eastern corner of Nepal." },
  { id: "cmtcdgm1n002shcfjyotn0co1", caption: "Kangchenjunga catching the early morning light, seen from the south." },
  { id: "cmtcdgm1n002thcfj1x4in7db", caption: "The line of peaks along the Kanchenjunga massif, the wall the south base camp sits beneath." },

  // ── khopra-danda-trek ─────────────────────────────────────────────────────
  { id: "cmtcdgmmh002uhcfjastebxjg", caption: "The uphill trail to Ghorepani with Poon Hill on the left, the junction the Khopra route leaves behind." },
  { id: "cmtcdgmmh002vhcfjgmjh57lz", caption: "Sunrise from Poon Hill at 3,210 m, looking across to Dhaulagiri and the Annapurnas." },
  { id: "cmtcdgmmh002whcfj6eqvshyz", caption: "The full Himalayan panorama from Poon Hill, taking in Dhaulagiri, Annapurna South and Machhapuchhre." },
  { id: "cmtcdgmmh002xhcfjts7kj1qa", caption: "The mountain skyline from Ghandruk, a large Gurung village on the lower Annapurna trails." },
  { id: "cmtcdgmmh002yhcfjb7w776m2", caption: "Terrace farming above Ghandruk, cut into the hillside in steps." },
  { id: "cmtcdgmmh002zhcfjber1yzrw", caption: "The rhododendron forest near Tadapani, thick and mossy at around 2,600 m." },

  // ── khopra-danda-trek-from-pokhara ────────────────────────────────────────
  { id: "cmtcdgn4l0030hcfjtngjxbj6", caption: "The Ghorepani–Poon Hill trail, the well-trodden start of the shorter Khopra itinerary." },
  { id: "cmtcdgn4l0031hcfjdjqvb303", caption: "A teahouse on the Tadapani–Ghandruk section, typical of the lodges along this route." },
  { id: "cmtcdgn4l0032hcfjkkyzoxy5", caption: "Lodge terraces between Tadapani and Ghandruk, looking out over the valley." },
  { id: "cmtcdgn4l0033hcfjjcmx8u1l", caption: "Sunrise from Poon Hill, the reason for the dark early-morning climb from Ghorepani." },
  { id: "cmtcdgn4l0034hcfj9fo28u3s", caption: "The Himalayan skyline from the Poon Hill viewpoint, spanning Dhaulagiri to Machhapuchhre." },
  { id: "cmtcdgn4l0035hcfjd4wmp2i4", caption: "Forest around Tadapani, where the trail runs through dense rhododendron." },

  // ── khori-himal-trek ──────────────────────────────────────────────────────
  { id: "cmtcdgnmk0036hcfj7e8wl67y", caption: "Sunrise at Sikles, one of the largest Gurung villages in Nepal and a stop on the Khori Himal route." },
  { id: "cmtcdgnmk0037hcfjfixiausr", caption: "Lamjung Kailas seen from Kori, the ridge-top viewpoint the trek is named for." },
  { id: "cmtcdgnmk0038hcfjd7ih8x0u", caption: "Ngadi Bazar, a roadside settlement in the Marsyangdi valley below the trailhead." },
  { id: "cmtcdgnmk0039hcfjim12xi9j", caption: "The suspension bridge between Ghermu and Syange, spanning the Marsyangdi." },
  { id: "cmtcdgnmk003ahcfjyxghzex6", caption: "The Annapurna range on the skyline from Pokhara, the city where the trek starts." },
  { id: "cmtcdgnml003bhcfj7xtnrzux", caption: "The road journey between Kathmandu and Pokhara, the first leg of the itinerary." },

  // ── khori-himal-trek-from-pokhara ─────────────────────────────────────────
  { id: "cmtcdgo4r003chcfj9p46m1ui", caption: "Sikles village, its slate-roofed houses stacked up the hillside beneath the Annapurnas." },
  { id: "cmtcdgo4r003dhcfjalhgxcqk", caption: "Lamjung Kailas from Kori, the peak that dominates the view from the ridge." },
  { id: "cmtcdgo4r003ehcfj904yb0fl", caption: "Ngadi Bazar in the Marsyangdi valley, on the drive toward the trailhead." },
  { id: "cmtcdgo4r003fhcfjwz3h7snk", caption: "The Ghermu–Syange bridge, one of the long suspension crossings on the Marsyangdi." },
  { id: "cmtcdgo4r003ghcfjorfp2cw9", caption: "The Annapurna Himalaya from Pokhara, visible across the lake on a clear morning." },
  { id: "cmtcdgo4r003hhcfjqflr6qim", caption: "The bus road between Kathmandu and Pokhara, following the Trishuli much of the way." },

  // ── lamjung-himal-trek ────────────────────────────────────────────────────
  { id: "cmtcdgon7003ihcfjshigd1b4", caption: "The suspension bridge from Ghermu to Syange, high above the Marsyangdi river." },
  { id: "cmtcdgon7003jhcfjjx3v2icz", caption: "The Annapurna range from Pokhara, the staging city for the Lamjung Himal trek." },
  { id: "cmtcdgon7003khcfj6mcbspxi", caption: "The Kathmandu–Pokhara road, the long drive that opens the itinerary." },
  { id: "cmtcdgon7003lhcfjoxnvg2gy", caption: "Annapurna IV and Lamjung Himal above Pokhara, seen from near the domestic airport." },
  { id: "cmtcdgon7003mhcfjleysg0k5", caption: "Annapurna Base Camp enclosed by peaks, on the neighbouring sanctuary trail." },
  { id: "cmtcdgon7003nhcfj8hj3277y", caption: "The river at Shera, in the foothills the Lamjung Himal trail follows." },

  // ── langtang-ganja-la-pass-trek ───────────────────────────────────────────
  { id: "cmtcdgp5c003ohcfjvqfoycbm", caption: "The Kyanjin valley in Langtang National Park, the base for the Ganja La crossing." },
  { id: "cmtcdgp5c003phcfjlmx5d6kw", caption: "The trail from Syabrubesi into the Langtang valley, climbing beside the river." },
  { id: "cmtcdgp5c003qhcfjvdufw01o", caption: "Teahouses on the way to Syabrubesi, the roadhead where the Langtang trek begins." },
  { id: "cmtcdgp5d003rhcfj4njv7xx3", caption: "Prayer flags on the approach to Kyanjin Gompa, the monastery at the head of the valley." },
  { id: "cmtcdgp5d003shcfjl2eh7f7b", caption: "The bridge below Kyanjin Ri, the acclimatisation climb before crossing Ganja La." },
  { id: "cmtcdgp5d003thcfj97mhd7wc", caption: "Tarkeghyang in Helambu, where the trail comes down after the pass." },

  // ── langtang-gosaikunda-lake-trek ─────────────────────────────────────────
  { id: "cmtcdgpne003uhcfja7veluya", caption: "The Kyanjin valley in Langtang, the turning point before the trek heads for Gosaikunda." },
  { id: "cmtcdgpne003vhcfjq1kwkofb", caption: "Prayer flags and monastery buildings at Kyanjin Gompa, at 3,870 m." },
  { id: "cmtcdgpne003whcfjz3hfidav", caption: "The panorama from Kyanjin Ri, looking back down the length of the Langtang valley." },
  { id: "cmtcdgpne003xhcfj9tsa48zx", caption: "Gosaikunda in August, at the height of the Janai Purnima pilgrimage season." },
  { id: "cmtcdgpne003yhcfjezydcmzv", caption: "The trail up to Gosaikunda, climbing over bare rock above the treeline." },
  { id: "cmtcdgpne003zhcfjubds96ms", caption: "A local woman on the Langtang trail, in a valley rebuilt after the 2015 earthquake." },

  // ── langtang-valley-trek ──────────────────────────────────────────────────
  { id: "cmtcdgq5q0040hcfj0pcuf4ms", caption: "Stone houses in the Kyanjin valley, at the top of the Langtang trek." },
  { id: "cmtcdgq5q0041hcfjp3pzgc2g", caption: "The trail through the upper Langtang valley, with the peaks closing in on both sides." },
  { id: "cmtcdgq5q0042hcfjj37rk168", caption: "The view from Kyanjin Ri at 4,773 m, the standard acclimatisation climb from Kyanjin Gompa." },
  { id: "cmtcdgq5q0043hcfj2x26i3xy", caption: "A Langtang resident on the valley trail, part of the community that rebuilt after 2015." },
  { id: "cmtcdgq5q0044hcfj7rflzv3x", caption: "Daily life along the Langtang trekking route, between the lodges and the fields." },
  { id: "cmtcdgq5q0045hcfjj1hrs2af", caption: "Cloud building over the Gosaikunda trail, the extension many trekkers add to Langtang." },

  // ── lower-dolpo-trek ──────────────────────────────────────────────────────
  { id: "cmtcdgqnu0046hcfjfka4aztz", caption: "Phoksundo Lake in Shey Phoksundo National Park, whose turquoise water has no fish or vegetation." },
  { id: "cmtcdgqnv0048hcfjh89jz4ie", caption: "A chorten in the Dho Tarap valley, marking the Buddhist settlements of Lower Dolpo." },
  { id: "cmtcdgqnv0049hcfjn4995ekz", caption: "The Dho Tarap valley at 4,040 m, one of the highest permanently inhabited valleys in the world." },
  { id: "cmtcdgqnv004ahcfjex6xia79", caption: "Ringmo village on the shore of Phoksundo Lake, built in traditional Tibetan style." },
  { id: "cmtcdgqnv004bhcfj5gekw0uo", caption: "Bageshwori Temple in Nepalgunj, where Dolpo trekkers connect to the mountain flights." },

  // ── lower-mustang-trek ────────────────────────────────────────────────────
  { id: "cmtcdgr5x004chcfjkfvqywvq", caption: "The health post at Jomsom, the administrative centre of Mustang at 2,700 m." },
  { id: "cmtcdgr5x004dhcfjtp5rtlzc", caption: "The entrance to the Muktinath valley, the northern limit of the Lower Mustang trek." },
  { id: "cmtcdgr5x004ehcfjb3d0l257", caption: "Ice and spring water at Muktinath, where 108 spouts feed the temple courtyard." },
  { id: "cmtcdgr5x004fhcfjyfux80d4", caption: "Marpha from the air, its flat-roofed white houses set among apple orchards." },
  { id: "cmtcdgr5x004ghcfj9g3cy4nk", caption: "The Kali Gandaki valley at Marpha, the village known across Nepal for its apple brandy." },
  { id: "cmtcdgr5x004hhcfjqacle6sn", caption: "Fields at Kagbeni, irrigated from the river at the entrance to Upper Mustang." },

  // ── lower-mustang-trek-from-pokhara ───────────────────────────────────────
  { id: "cmtcdgroa004ihcfj5p904xl7", caption: "The bus stand at Jomsom, where the road and the trekking route meet." },
  { id: "cmtcdgroa004jhcfjzaqc5bzb", caption: "The way into the Muktinath valley, above the treeline in the rain shadow of the Annapurnas." },
  { id: "cmtcdgroa004khcfjbuhcrod0", caption: "Frozen and flowing water at Muktinath, sacred to Hindu and Buddhist pilgrims alike." },
  { id: "cmtcdgroa004lhcfj2k4jm62b", caption: "Marpha seen from above, a compact whitewashed village in the Kali Gandaki." },
  { id: "cmtcdgroa004mhcfj50o4qt9b", caption: "The Kali Gandaki running past Marpha, between Dhaulagiri and Nilgiri." },
  { id: "cmtcdgroa004nhcfj71yq0og8", caption: "Green fields at Kagbeni against the bare walls of the gorge." },

  // ── mardi-himal-trek ──────────────────────────────────────────────────────
  { id: "cmtcdgs6e004ohcfjtmaekucx", caption: "Golden hour at Badal Danda, on the ridge climb toward Mardi Himal High Camp." },
  { id: "cmtcdgs6e004phcfjkcqfa1nx", caption: "Sunrise from the Mardi Himal ridge, with Machhapuchhre catching the first light." },
  { id: "cmtcdgs6e004qhcfjdfk9ijsy", caption: "The Annapurna range from Pokhara, the view that opens the trip." },
  { id: "cmtcdgs6e004rhcfjdksjqfvp", caption: "The drive from Kathmandu to Pokhara, following the river valleys west." },
  { id: "cmtcdgs6e004shcfj2w84n1m0", caption: "Sunrise on the Annapurnas from Pokhara, seen across the rooftops." },
  { id: "cmtcdgs6e004thcfj0onu876b", caption: "Phewa Lake at Pokhara, where the trek begins and ends." },

  // ── mardi-himal-trek-from-pokhara ─────────────────────────────────────────
  { id: "cmtcdgsox004uhcfj98ujp2iq", caption: "Mardi Himal from High Camp at 3,580 m, the last lodge before the base camp push." },
  { id: "cmtcdgsox004vhcfjyi86z36f", caption: "Dawn light on the peaks from the Mardi ridge." },
  { id: "cmtcdgsox004whcfjbdwv5lr4", caption: "Annapurna glimpsed through the forest on the lower part of the Mardi trail." },
  { id: "cmtcdgsox004xhcfj9idy0pby", caption: "Machhapuchhre seen from Forest Camp, where the trail runs through dense rhododendron." },
  { id: "cmtcdgsox004yhcfjpeezfoa4", caption: "The Annapurna Himalaya from Pokhara, the starting point of this short itinerary." },
  { id: "cmtcdgsox004zhcfj5u3o3l5d", caption: "The Kathmandu–Pokhara road journey, the transfer at either end of the trek." },

  // ── mohare-danda-trek ─────────────────────────────────────────────────────
  { id: "cmtcdgt7c0050hcfjymcv24tv", caption: "The Ghorepani and Poon Hill trail, which the Mohare Danda route parallels on quieter paths." },
  { id: "cmtcdgt7c0051hcfjpzz92qe9", caption: "Dhaulagiri from Ghorepani, the 8,167 m peak that dominates the western skyline." },
  { id: "cmtcdgt7c0052hcfjmkpa0vop", caption: "The Ghorepani–Ghandruk trail, running through forest between the two villages." },
  { id: "cmtcdgt7c0053hcfjbwv96j50", caption: "Stone houses at Ghandruk, the Gurung village below the Annapurna south face." },
  { id: "cmtcdgt7c0054hcfj3wm95r48", caption: "The entrance gate at Ghorepani, at 2,870 m on the ridge." },
  { id: "cmtcdgt7c0055hcfjg4jy9ep7", caption: "The Banthanti–Tadapani section, a shaded forest walk between lodges." },

  // ── mohare-danda-trek-from-pokhara ────────────────────────────────────────
  { id: "cmtcdgtpn0056hcfj9qjy73qg", caption: "The Ghorepani and Poon Hill trail, close to the community-run Mohare Danda route." },
  { id: "cmtcdgtpn0057hcfjwka7igr4", caption: "Annapurna I, Annapurna South and Hiunchuli from the Ghorepani ridge." },
  { id: "cmtcdgtpn0058hcfjpiicm629", caption: "The forest path between Ghorepani and Ghandruk." },
  { id: "cmtcdgtpn0059hcfj72xd2htd", caption: "Ghandruk village, with its stone houses and views of Annapurna South." },
  { id: "cmtcdgtpn005ahcfjo09zntpw", caption: "The gateway into Ghorepani, the busiest village on the Poon Hill circuit." },
  { id: "cmtcdgtpn005bhcfjvnm6zxq1", caption: "The trail from Banthanti to Tadapani, through moss-hung rhododendron forest." },

  // ── mundum-trek ───────────────────────────────────────────────────────────
  { id: "cmtcdgu8n005chcfj9m5bf5q6", caption: "The view from Tyamke Peak at 3,010 m, on the Khotang–Bhojpur border ridge." },
  { id: "cmtcdgu8n005dhcfjbq28aqcw", caption: "Mayun Danda seen from Chakhewa Bhanjyang, a ridge crossing on the Mundum trail." },
  { id: "cmtcdgu8n005ehcfj4tyh5br3", caption: "The Bhote Koshi valley, cut deep into the eastern hills." },
  { id: "cmtcdgu8n005fhcfjsgb3426h", caption: "A high pass panorama, the kind of open ridge walking the Mundum route offers." },
  { id: "cmtcdgu8n005ghcfjyliz4c0k", caption: "The trail between Chisapani and Sundarijal, on the approach to the eastern hills." },
  { id: "cmtcdgu8n005hhcfjul8eavhc", caption: "Tyamke Peak on the Khotang–Bhojpur ridge, the high point of the Mundum trek." },

  // ── poonhill-trek ─────────────────────────────────────────────────────────
  { id: "cmtcdguqw005ihcfjqhzlqut5", caption: "The Ghorepani and Poon Hill trail, the most popular short trek in the Annapurna region." },
  { id: "cmtcdguqw005jhcfjs28bt7jy", caption: "Annapurna I, Annapurna South and Hiunchuli from Ghorepani." },
  { id: "cmtcdguqw005khcfj9a9fi2fk", caption: "Sunrise from Poon Hill at 3,210 m, the centrepiece of the trek." },
  { id: "cmtcdguqw005lhcfjpn77siv4", caption: "The forest trail near Ghandruk, on the descent from the ridge." },
  { id: "cmtcdguqw005mhcfjl0rurya5", caption: "Ghandruk, a large Gurung village of stone houses and slate roofs." },
  { id: "cmtcdguqw005nhcfj9n9jh27a", caption: "The Banthanti–Tadapani forest, thick with rhododendron that flowers in spring." },

  // ── poonhill-trek-from-pokhara ────────────────────────────────────────────
  { id: "cmtcdgvah005ohcfjmimce2fj", caption: "The trail to Ghorepani and Poon Hill, reached directly from Pokhara on this short itinerary." },
  { id: "cmtcdgvah005phcfjsqgq2ac3", caption: "Annapurna I and Annapurna South from the Ghorepani ridge at first light." },
  { id: "cmtcdgvah005qhcfjdc0eu1yh", caption: "A teahouse between Tadapani and Ghandruk, looking out across the valley." },
  { id: "cmtcdgvah005rhcfj4d1g5885", caption: "Sunrise over the Annapurnas from Poon Hill." },
  { id: "cmtcdgvah005shcfj4vomxxv2", caption: "The Himalayan panorama from the Poon Hill tower, spanning Dhaulagiri to Machhapuchhre." },
  { id: "cmtcdgvah005thcfj3cm2cn6i", caption: "The wooded trail into Ghandruk on the way down." },

  // ── rolwaling-valley-trek ─────────────────────────────────────────────────
  { id: "cmtcdgvsn005uhcfju37jjtjz", caption: "Gaurishankar at 7,134 m, the sacred peak that dominates the Rolwaling valley." },
  { id: "cmtcdgvsn005vhcfjynpuv4jg", caption: "The snow-covered summit of Gaurishankar, held sacred as the seat of Shiva and Parvati." },
  { id: "cmtcdgvsn005whcfjnbmiiqus", caption: "Namche Bazaar, reached after crossing the Tashi Lapcha pass out of Rolwaling." },
  { id: "cmtcdgvsn005xhcfjf5i5vs9l", caption: "The trail into Namche Bazaar, where the Rolwaling crossing meets the Khumbu trails." },
  { id: "cmtcdgvsn005yhcfjw81xlruf", caption: "Tsho Rolpa and Pachermo peak, the glacial lake at the head of the Rolwaling valley." },
  { id: "cmtcdgvsn005zhcfj1t7e11bb", caption: "Thame, the Sherpa village below Tashi Lapcha on the Khumbu side." },

  // ── ruby-valley-circuit-trek ──────────────────────────────────────────────
  { id: "cmtcdgwar0061hcfjmtdahs9c", caption: "The Langtang Khola in Rasuwa, the river system the Ruby Valley circuit borders." },
  { id: "cmtcdgwar0062hcfj5j73ab1c", caption: "The Langtang Khola below Gosaikunda, in the hills east of the Ruby Valley." },
  { id: "cmtcdgwar0063hcfj1ubssjyw", caption: "Pangsang La, the high pass between the Ganesh and Langtang ranges at around 3,850 m." },
  { id: "cmtcdgwar0064hcfj53n6gpwo", caption: "A Tamang woman and her child outside their house in Gatlang, a village of the circuit." },
  { id: "cmtcdgwar0065hcfj73od10xl", caption: "Gatlang village, its stone houses set on terraced slopes below Langtang." },

  // ── short-annapurna-circuit-trek ──────────────────────────────────────────
  { id: "cmtcdgwsz0066hcfjrq5umr27", caption: "The Annapurna range between Ledar and Thorong Phedi, on the last stage before the pass." },
  { id: "cmtcdgwsz0067hcfjl1mylkti", caption: "The Muktinath valley looking back at Thorong La, after the descent from 5,416 m." },
  { id: "cmtcdgwsz0068hcfjwcmzku84", caption: "Prayer flags at Thorong La above the Muktinath valley, marking the top of the pass." },
  { id: "cmtcdgwsz0069hcfjexo23ci5", caption: "The crossing of Thorong La from the Manang side, the highest point of the circuit." },
  { id: "cmtcdgwsz006ahcfjn2ojy47q", caption: "High Camp above Manang, the last shelter before the pre-dawn start for the pass." },
  { id: "cmtcdgwsz006bhcfjhqjsy8lt", caption: "Upper Pisang on the Annapurna Circuit, with the range rising behind the village." },

  // ── short-tilicho-lake-trek ───────────────────────────────────────────────
  { id: "cmtcdgxaz006chcfjng5txmxn", caption: "Tilicho Lake above Manang, in its basin of bare rock and moraine." },
  { id: "cmtcdgxaz006dhcfj004bf027", caption: "A panorama of Tilicho Lake, roughly 4 km long and frozen much of the year." },
  { id: "cmtcdgxaz006ehcfjihwnsc1d", caption: "The turquoise shore of Tilicho Lake, seen from the base camp trail." },
  { id: "cmtcdgxaz006fhcfjnr9bclgs", caption: "A mountain ride through the Manang valley, where horses still carry loads on the upper trails." },
  { id: "cmtcdgxaz006ghcfju6hop8cb", caption: "A panorama of the Annapurna massif, the wall the Tilicho trail runs beneath." },
  { id: "cmtcdgxaz006hhcfjb0gchs6e", caption: "A health camp in the Manang valley, one of the mobile clinics serving remote settlements." },

  // ── tamang-heritage-trek ──────────────────────────────────────────────────
  { id: "cmtcdgxsz006ihcfjgdz9pobn", caption: "Stone houses in the Kyanjin valley, in the Langtang region the Tamang Heritage trail shares." },
  { id: "cmtcdgxsz006jhcfj1z5fd1zp", caption: "The trail through the Langtang valley, which this route can be combined with." },
  { id: "cmtcdgxsz006khcfjnt8k9fiz", caption: "Gatlang village seen from Nagthali, a Tamang settlement of stone houses and water mills." },
  { id: "cmtcdgxsz006lhcfjlqlw52w0", caption: "Stone houses between Syabrubesi and Langtang, on the road to the trailhead." },
  { id: "cmtcdgxsz006mhcfj3q2mhrfz", caption: "The way in to Syabrubesi, where the Tamang Heritage circuit starts and finishes." },
  { id: "cmtcdgxsz006nhcfja5rrbiqu", caption: "Prayer flags near Kyanjin Gompa, the Buddhist monastery at the top of the Langtang valley." },

  // ── tilicho-lake-trek ─────────────────────────────────────────────────────
  { id: "cmtcdgyb6006ohcfjdo4xc3de", caption: "The turquoise water of Tilicho Lake above Manang, at 4,919 m." },
  { id: "cmtcdgyb6006phcfjpotaxnw6", caption: "Tilicho Lake in its rock basin, with no vegetation at this height." },
  { id: "cmtcdgyb6006qhcfjg7kbzjqm", caption: "The lakeshore seen from Tilicho Base Camp, the launching point for the day walk up." },
  { id: "cmtcdgyb6006rhcfjs1i3fwp4", caption: "The hill country between Kathmandu and Besisahar, crossed on the drive to the trailhead." },
  { id: "cmtcdgyb6006shcfjqpalem53", caption: "Horses on the upper Manang trails, still the main way to move loads here." },
  { id: "cmtcdgyb6006thcfjlaouxja2", caption: "The Annapurna massif in panorama, seen from the Tilicho approach." },

  // ── upper-dolpo-trek ──────────────────────────────────────────────────────
  { id: "cmtcdgyt0006uhcfj17mpf7w6", caption: "Phoksundo Lake in Shey Phoksundo National Park, Nepal's deepest lake at 145 m." },
  { id: "cmtcdgyt0006vhcfj4wd987od", caption: "The Phoksundo Khola near Chhepka, on the walk in through the lower gorge." },
  { id: "cmtcdgyt0006whcfjjdix8ilf", caption: "Dho Tarap beside the Tarap Khola, a Tibetan-influenced settlement at 4,040 m." },
  { id: "cmtcdgyt0006xhcfjzc9aa7b9", caption: "A chorten in the Dho Tarap valley, one of many Buddhist markers along the trail." },
  { id: "cmtcdgyt0006yhcfjywgcbxk1", caption: "The broad, treeless Dho Tarap valley, grazed by yaks through the short summer." },
  { id: "cmtcdgyt0006zhcfjpi28cyi9", caption: "Phoksundo Lake in Shey Phoksundo National Park, ringed by cliffs and pine." },

  // ── upper-mustang-trek ────────────────────────────────────────────────────
  { id: "cmtcdgzb00070hcfj4apyyr4k", caption: "The bus stand at Jomsom, where the permit-controlled Upper Mustang route begins." },
  { id: "cmtcdgzb00071hcfjes8fexzb", caption: "The health post at Jomsom, the last full service town before Lo Manthang." },
  { id: "cmtcdgzb00072hcfjbbpaqlh3", caption: "Chhoser in Upper Mustang, known for its cliff caves cut into the rock face." },
  { id: "cmtcdgzb00073hcfjxekkvu11", caption: "The eroded cliffs at Chhoser, honeycombed with man-made caves north of Lo Manthang." },
  { id: "cmtcdgzb00074hcfjtqckfpqy", caption: "Lo Manthang, the walled capital of the former Kingdom of Lo at 3,840 m." },
  { id: "cmtcdgzb00075hcfj589b3ua4", caption: "Kagbeni, the checkpoint village at the gateway to restricted Upper Mustang." },

  // ── upper-mustang-trek-from-pokhara ───────────────────────────────────────
  { id: "cmtcdgzt30076hcfjty1csaiu", caption: "Choprang Gompa at Lo Manthang, one of the monasteries inside the walled city." },
  { id: "cmtcdgzt30077hcfjt8w006v4", caption: "The bus stand at Jomsom, the road and air hub for Mustang." },
  { id: "cmtcdgzt30078hcfj6gr974kf", caption: "Jomsom in the Kali Gandaki valley, at 2,700 m between Dhaulagiri and Nilgiri." },
  { id: "cmtcdgzt30079hcfjlqtbtyb0", caption: "The cave cliffs at Chhoser, dug into the rock over centuries." },
  { id: "cmtcdgzt3007ahcfjrhxh7zu3", caption: "Lo Manthang behind its walls, the historic capital of Upper Mustang." },
  { id: "cmtcdgzt3007bhcfjogsfvwcu", caption: "Irrigated fields at Kagbeni, the last village before the restricted zone." },

  // ── non-CC credits (public domain / GFDL) that carried the same suffix ─────
  { id: "cmtcdgjil001zhcfj2b23qy3e", caption: "The Karnali running through Humla, fed by snowmelt off the Tibetan plateau." },
  { id: "cmtcdgljf002lhcfjc798cujl", caption: "Kangchenjunga from the air, the world's third-highest mountain at 8,586 m." },
  { id: "cmtcdgm1n002rhcfjwd7p7m7i", caption: "The Kangchenjunga massif from the air, its summits straddling the Nepal–Sikkim border." },
  { id: "cmtcdgqnv0047hcfjpkru31jc", caption: "Phoksundo Lake in Dolpo, coloured an intense turquoise by suspended glacial silt." },
  { id: "cmtcdgwar0060hcfjc04f93ai", caption: "The hill road at the Kathmandu–Dhading border, on the drive out to the trailhead." },
];
