import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const ROLWALING_PERMITS =
  "Gaurishankar Conservation Area Permit and required trekking permits.";

/** Rolwaling valley out and back to the glacial lake below the Tashi Lapcha. */
export const tshoRolpaTrek: NewTrek = {
  price: 1150,
  difficulty: "moderate",
  maxAltitude: 4580,
  center: [86.35, 27.87],
  zoom: 10,
  content: {
    slug: "tsho-rolpa-trek",
    title: "Tsho Rolpa Trek",
    overview:
      "<p>The <strong>Tsho Rolpa Trek</strong> follows the Rolwaling valley — the hidden valley of Sherpa legend, wedged between the Everest region and the Tibetan border — to the largest glacial lake in Nepal. From the roadhead at Gongar the trail climbs hard to the Sherpa village of <strong>Simigaon</strong>, then turns east into a gorge of waterfalls and rhododendron forest that opens out at <strong>Beding (3,690 m)</strong>, a single street of stone houses under <strong>Gaurishankar (7,134 m)</strong>.</p><p>Above Na, the summer settlement at 4,180 m, the valley ends at <strong>Tsho Rolpa (4,580 m)</strong> — three and a half kilometres of grey-green meltwater dammed behind the moraine of the Trakarding Glacier, with the wall of the Tashi Lapcha at its head. It is one of the most closely monitored lakes in the Himalaya and one of the emptiest places within two days of Kathmandu. This is the out-and-back version of the valley, without the technical pass crossing at the top of it.</p>",
    highlights: [
      ["Tsho Rolpa (4,580 m)", "Stand on the moraine of the largest glacial lake in Nepal, 3.5 km long below the Trakarding Glacier."],
      ["The Rolwaling Valley", "Walk the 'hidden valley' of Sherpa tradition, a beyul sanctuary closed to outsiders until recent decades."],
      ["Gaurishankar (7,134 m)", "Trek beneath the twin-summited peak sacred to both Hindus and Buddhists, named for Shiva and Parvati."],
      ["Beding and Na", "Stay in a working Sherpa village and its summer yak settlement, with no road and very few visitors."],
      ["Two Days from Kathmandu", "Reach genuinely remote country without a domestic flight or a week of approach walking."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the seasons. Spring is the more colourful: the rhododendron forest between Simigaon and Beding is one of the finest in the country and flowers from late March, and the valley is busy with families moving stock up to Na. Autumn brings the clearest views of Gaurishankar and firm, dry walking on the moraine at the lake.</p><p>Winter is possible as far as Beding for well-equipped groups but Na is abandoned and the lake approach is snowbound, so most operators stop running the route from December. The monsoon is genuinely dangerous here — the approach gorge is landslide-prone, the Rolwaling Khola floods, and the road to Singati is regularly cut — so June to September is not recommended.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek with two hard days in it. The climb from the river to Simigaon gains around 800 m in one relentless push, and the walk from Na to the lake and back is a long day at 4,500 m. Everything in between is steady valley walking on a good trail, with a maximum sleeping altitude of 4,180 m at Na.</p><p>You should be able to walk five to seven hours a day for a week and manage sustained climbs on stone steps. Six weeks of hill fitness is adequate preparation. The lodges here are far simpler than on the Everest or Annapurna trails, so expect basic rooms and short menus, and be ready for a valley where the community, not an industry, provides the beds.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required for this route, comfortably above the lake at 4,580 m. Standard policies frequently stop at 3,000 m or 4,000 m, which would leave the top half of the valley uninsured, so check the altitude clause explicitly.</p><p>The policy must include <strong>emergency helicopter evacuation</strong> and medical treatment. There is no road above Gongar and no health post above Simigaon; an evacuation from Beding or Na means a helicopter, which operators dispatch only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before you start walking.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>The valley runs from subtropical forest to 4,580 m of moraine. Bring waterproof trekking boots, three base layers, a fleece, an insulated down jacket, a waterproof and windproof shell jacket and trousers, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A sleeping bag rated to <strong>-10°C</strong> is right for Na, and a liner is worth carrying because lodge bedding in Rolwaling is thin.</p><p>Also pack a 30-40 litre daypack, trekking poles for the Simigaon climb and descent, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification tablets or a filter, a personal first aid kit with blister care, a quick-dry towel, and a power bank — charging is solar, slow and available only at some lodges above Simigaon.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You stay in teahouses and homestays throughout, but Rolwaling's lodges are basic by Nepali trekking standards: plank beds, shared outside toilets, no showers above Simigaon, and heating only from the kitchen fire. Beding has several lodges and Na has a handful of seasonal ones which close outside the main months. In peak season rooms are limited, which is one reason groups on this route stay small.</p><p>Three meals a day are included. The menu is short — <em>dal bhat</em>, noodles, potatoes, eggs, Tibetan bread, soup and tea — and repeats, because everything not grown in the valley is carried in from Gongar on a porter's back. Refill your bottle at the lodges and treat it rather than buying plastic, which cannot be disposed of anywhere in the conservation area.</p>",
      },
    ],
    faqs: [
      { question: "Why is Tsho Rolpa monitored so closely?", answer: "It is one of the fastest-growing glacial lakes in Nepal, held back by a loose moraine dam. A partial drainage channel and an early warning system were installed after studies flagged the risk of a glacial lake outburst flood. Your guide will explain the works when you reach the outlet, and the walk to the lake is entirely safe." },
      { question: "What does 'beyul' mean and why does it matter here?", answer: "Rolwaling is one of the hidden valleys, or beyul, of Tibetan Buddhist tradition — sanctuaries said to have been concealed by Guru Rinpoche for times of trouble. It was settled comparatively recently and kept closed to outsiders, which is part of why it still feels different from the Khumbu one valley east." },
      { question: "Do we need a special permit?", answer: "The Gaurishankar Conservation Area Permit and the standard trekking registration, both included in your package. Rolwaling is not a restricted area for this out-and-back route, so no minimum group size applies, though a licensed guide is required." },
      { question: "How does this compare with the Tashi Lapcha Pass trek?", answer: "This trek walks to the lake and returns the same way. The Tashi Lapcha crossing continues over a 5,755 m glaciated pass into the Khumbu, which requires crampons, ropes, fixed lines and climbing-grade experience. If you want the valley without the technical mountaineering, this is the right trip." },
      { question: "How cold does it get at Na?", answer: "Night-time temperatures at 4,180 m fall to around -10°C in the main seasons and lower in late autumn. The lodges are unheated apart from the kitchen. A -10°C bag with a liner, a down jacket for the evenings, and a hot water bottle from the kitchen make the nights comfortable." },
      { question: "Is there mobile signal in the valley?", answer: "There is intermittent NTC coverage at Simigaon and occasionally at Beding, and nothing at Na or the lake. Expect to be out of contact for most of the trek and tell people at home before you leave the road." },
      { question: "How do we reach the trailhead?", answer: "A jeep from Kathmandu to Singati and on to Gongar, roughly eight to nine hours on a road that is paved for the first half and rough for the second. There is no flight option, which is part of the reason the valley stays quiet." },
      { question: "Will we see wildlife?", answer: "Himalayan tahr are common on the slopes above Beding, and musk deer, langur and Himalayan monal live in the forest below. Snow leopard are present in the upper valley and very occasionally seen from Na. The birdlife through the rhododendron forest in spring is exceptional." },
      { question: "Can we add days at the lake?", answer: "Yes. Many groups take a second night at Na to walk further along the moraine or up towards Yalung Ri base camp for the view back down the valley. Tell us when you book and we will build the extra day in rather than improvising on the trail." },
      { question: "Where can I withdraw cash?", answer: "There are no ATMs after Kathmandu. Draw all the Nepalese rupees you need before departure, in small denominations, and budget for drinks, snacks, charging, the occasional bucket of hot water, and tips for the guide and porters." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Gongar and back as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: ROLWALING_PERMITS,
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 9,
    fixedDepartureDay: "thursday",
    itineraryDescription:
      "A 12-day out-and-back trek up the Rolwaling valley to Tsho Rolpa (4,580 m), the largest glacial lake in Nepal, beneath Gaurishankar.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailhead, Kathmandu hotel nights, teahouse lodging, all trekking meals, the conservation area permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Tsho Rolpa Trek – 12 Days in the Rolwaling Valley",
      description:
        "A 12-day trek up the Rolwaling valley to Tsho Rolpa (4,580 m), the largest glacial lake in Nepal, through Simigaon, Beding and Na beneath Gaurishankar.",
      keywords:
        "Tsho Rolpa Trek, Rolwaling valley trek, Tsho Rolpa lake, Beding, Na village, Gaurishankar, glacial lake Nepal, remote trekking Nepal",
      tags: "Tsho Rolpa Trek, Rolwaling, Remote Region, Lake Trek, Nepal Trekking",
    },
  },
  days: [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "Welcome to Nepal. You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Your guide joins you for the briefing, covering the twelve-day plan, the long jeep day to the trailhead, and what to expect from Rolwaling's lodges — which are simpler than most trekkers are used to. We check your kit against the list; anything missing can be bought or hired within a few minutes' walk.",
        "The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Singati (1,000 m)",
      elevation: "1,000 m",
      accommodation: "Singati",
      placeDescription: "A bazaar town on the Tama Koshi and the last road town before the Rolwaling valley.",
      lng: 86.1639,
      lat: 27.7362,
      html: p(
        "A long drive east out of the Kathmandu valley on the Araniko Highway, then north on the road to Charikot in Dolakha district.",
        "The Araniko Highway is the road to the Tibetan border and carries the freight traffic to match, so the first two hours are slow. Beyond the turning at Khadichaur the road climbs steadily into Dolakha, and the terraced middle hills open out with the Rolwaling and Gaurishankar peaks standing on the northern skyline.",
        "The route runs through terraced middle-hill country with the Rolwaling and Gaurishankar peaks appearing on the skyline as the road climbs. Beyond Charikot the surface deteriorates and the road drops steeply into the <strong>Tama Koshi</strong> valley.",
        "<strong>Singati (1,000 m)</strong> is a busy bazaar strung along the river, supplying everything that goes up the valley beyond it. Around 7–8 hours including stops. Overnight at Singati.",
      ),
    },
    {
      title: "Drive to Gongar (1,440 m) and Trek to Simigaon (2,000 m)",
      elevation: "2,000 m",
      accommodation: "Simigaon",
      placeDescription: "A Sherpa village on a steep shelf above the Tama Koshi, with a gompa and a view of Gaurishankar.",
      lng: 86.2306,
      lat: 27.8719,
      html: p(
        "A short drive and then the hardest climb of the trek.",
        "The jeep continues up the Tama Koshi to <strong>Gongar (1,440 m)</strong>, where the road ends and the porters load up. The trail crosses the river at Chetchet on a suspension bridge and then goes straight up — around 800 m of continuous ascent on stone steps and switchbacks through subtropical forest, with the valley falling away behind you.",
        "It is a hot, hard two to three hours, and it is the price of admission to Rolwaling. Take it slowly and drink steadily.",
        "<strong>Simigaon (2,000 m)</strong> sits on a shelf at the top with a gompa above the houses, potato and barley fields, and the first clear view of <strong>Gaurishankar (7,134 m)</strong>. Around 4 hours including the drive. Overnight at Simigaon.",
      ),
    },
    {
      title: "Trek from Simigaon (2,000 m) to Dongang (2,790 m)",
      elevation: "2,790 m",
      accommodation: "Dongang",
      placeDescription: "A forest clearing beside the Rolwaling Khola with a handful of seasonal lodges.",
      lng: 86.2881,
      lat: 27.9034,
      html: p(
        "The day the valley takes over, spent almost entirely under trees.",
        "The trail turns east into the <strong>Rolwaling Khola</strong> and enters a gorge of rhododendron, oak and bamboo. In spring this is one of the great forest walks in Nepal — rhododendron in red and pink for hours at a time, with waterfalls coming off the walls on both sides.",
        "The path rolls rather than climbs, crossing side streams on log bridges and traversing sections cut into the cliff. It is narrow and occasionally exposed, and there is nobody else on it.",
        "<strong>Dongang (2,790 m)</strong> is a clearing beside the river with a couple of seasonal lodges. Around 6–7 hours. Overnight at Dongang.",
      ),
    },
    {
      title: "Trek from Dongang (2,790 m) to Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main Sherpa village of Rolwaling, a single street of stone houses beneath Gaurishankar.",
      lng: 86.3755,
      lat: 27.9028,
      html: p(
        "A steady climb out of the forest and into the high valley, gaining 900 m.",
        "The trail follows the river upstream, the trees thinning to birch and juniper and then giving out altogether. The valley opens as it climbs and the walls step back, revealing the peaks that were hidden by the gorge.",
        "<strong>Beding (3,690 m)</strong> is the main village of Rolwaling: a single line of stone houses along the river, a monastery on the slope above, and stone-walled fields of potato and barley. Around a hundred people live here in season, and many of the men are working mountaineers — this valley has produced a remarkable number of expedition climbers.",
        "<strong>Gaurishankar</strong> stands directly above the village. Around 5–6 hours. Overnight at Beding.",
      ),
    },
    {
      title: "Acclimatization Day at Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main Sherpa village of Rolwaling, a single street of stone houses beneath Gaurishankar.",
      lng: 86.3755,
      lat: 27.9028,
      html: p(
        "A day at the same altitude before pushing on to Na, and a good one to spend in the village.",
        "The acclimatisation walk climbs the slope north of Beding towards the shoulder below <strong>Chekigo</strong>, gaining three or four hundred metres for a view down the length of the valley and across at Gaurishankar's south face. Three to four hours at an easy pace, back for lunch.",
        "The afternoon is for the village itself. The <strong>gompa</strong> above the houses is several hundred years old and the caretaker will usually open it. Beding is a working settlement rather than a trekking stop, so the pace of the place is set by the fields and the animals, not by lodges.",
        "Your guide checks the group for appetite, sleep and headache tonight — Na tomorrow is another 500 m up. Overnight at Beding.",
      ),
    },
    {
      title: "Trek from Beding (3,690 m) to Na (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na",
      placeDescription: "A summer yak settlement of stone huts on a broad pasture at the head of the Rolwaling valley.",
      lng: 86.4268,
      lat: 27.8815,
      html: p(
        "A short, gentle day up the valley to the last settlement in Rolwaling.",
        "The trail follows the river through open country, past stone-walled potato fields and mani walls, with the valley floor broad and flat and the peaks standing straight up from it. This is easy walking after two hard days, and the altitude is the only reason it takes as long as it does.",
        "<strong>Na (4,180 m)</strong> is a summer settlement: forty or fifty stone huts on a flat pasture, occupied from spring to autumn while the yaks graze and the potato crop grows, and empty in winter when the families move down to Beding. A handful of the huts operate as lodges in season.",
        "The amphitheatre around the village takes in <strong>Chekigo</strong>, <strong>Yalung Ri</strong> and the peaks of the Tibetan border. Around 3 hours. Overnight at Na.",
      ),
    },
    {
      title: "Day Hike to Tsho Rolpa (4,580 m) and Return to Na (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na",
      placeDescription: "A summer yak settlement of stone huts on a broad pasture at the head of the Rolwaling valley.",
      lng: 86.4268,
      lat: 27.8815,
      html: p(
        "The day the trek is built around: out to the lake and back with only a daypack.",
        "The trail runs east up the valley floor and then climbs onto the lateral moraine of the <strong>Trakarding Glacier</strong>. It is loose underfoot in places and the last section is a steady pull, but the walking is straightforward and the group moves at an easy pace.",
        "From the crest of the moraine <strong>Tsho Rolpa (4,580 m)</strong> opens below — three and a half kilometres of grey-green meltwater with icebergs at the far end where the glacier calves into it, the largest glacial lake in Nepal. The wall at its head carries the <strong>Tashi Lapcha (5,755 m)</strong>, the pass into the Khumbu, and you can usually pick out the route.",
        "Your guide will point out the outlet channel and the early warning installation, part of the long effort to manage the flood risk from a lake dammed by loose moraine.",
        "Around 6–7 hours there and back. Overnight at Na.",
      ),
    },
    {
      title: "Trek from Na (4,180 m) to Dongang (2,790 m)",
      elevation: "2,790 m",
      accommodation: "Dongang",
      placeDescription: "A forest clearing beside the Rolwaling Khola with a handful of seasonal lodges.",
      lng: 86.2881,
      lat: 27.9034,
      html: p(
        "A long descent back down the valley, covering two days of the approach in one.",
        "The walking is easy through Beding and then steeper as the valley narrows and the trail drops back into the treeline. Losing 1,400 m in a day is hard on the knees and poles earn their place.",
        "Going down gives you the valley in reverse and it looks like a different place — Gaurishankar behind you rather than ahead, the forest closing in rather than opening out, and the air thickening with every hour.",
        "<strong>Dongang (2,790 m)</strong> in the late afternoon. Around 6–7 hours. Overnight at Dongang.",
      ),
    },
    {
      title: "Trek from Dongang (2,790 m) to Simigaon (2,000 m)",
      elevation: "2,000 m",
      accommodation: "Simigaon",
      placeDescription: "A Sherpa village on a steep shelf above the Tama Koshi, with a gompa and a view of Gaurishankar.",
      lng: 86.2306,
      lat: 27.8719,
      html: p(
        "The last full walking day, back through the rhododendron gorge to the shelf above the Tama Koshi.",
        "The trail rolls west along the river, retracing the cliff sections and log bridges. The forest is the highlight again, and in spring you walk the whole way under flowering rhododendron.",
        "<strong>Simigaon (2,000 m)</strong> arrives in the afternoon with its gompa and terraced fields, and after a week above the treeline the warmth and the greenness are welcome.",
        "This is where the porters finish and tips are given. Around 5–6 hours. Overnight at Simigaon.",
      ),
    },
    {
      title: "Trek to Gongar (1,440 m) and Drive to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start for the steep descent and the long drive home.",
        "The path drops off the shelf on the same switchbacks you climbed on day three — about an hour and a half of steady downhill to the bridge at Chetchet and the roadhead at <strong>Gongar (1,440 m)</strong>, where the jeep is waiting.",
        "The drive back down the Tama Koshi to Singati and up to Charikot is the rough section; from there the road is paved through Dolakha and along the Araniko Highway into <strong>Kathmandu (1,400 m)</strong>.",
        "Around 9 hours in total including the walk. You arrive in the evening and transfer to your hotel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Boudhanath</strong> or the old town at <strong>Bhaktapur</strong>, both an easy drive from most hotels.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Rolwaling is one of the few valleys this close to Kathmandu that still feels genuinely remote. If you want to come back and cross the head of it, the Tashi Lapcha route continues from Tsho Rolpa over the pass into the Khumbu — a serious mountaineering trek rather than a walking one. Safe travels.",
      ),
    },
  ],
};
