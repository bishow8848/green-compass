import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 3: trekking through the festival — the general picture,
 * then the two regions most visitors are choosing between.
 */
export const dashainC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-during-dashain",
    title: "Trekking in Nepal During Dashain: What Actually Changes",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.goatsBridge,
      alt: "A herd of goats crossing a suspension footbridge on the Annapurna Base Camp trail near Landruk.",
    },
    excerpt:
      "Dashain falls in the best trekking month of the year, and on the trail itself very little changes: lodges are open and the weather is at its finest. What changes is everything around the trek — permits, transport, staff and who else is walking. A region-by-region guide.",
    intro: [
      { p: "Every October we are asked the same thing: can we still trek during Dashain? The answer is yes, without qualification. Teahouses do not close for the festival, the trails are in their best condition of the year, and in the high valleys of the Khumbu and Mustang the festival is somebody else's holiday." },
      { p: "What Dashain does is squeeze the edges of a trek. The permit office is shut, the jeep driver wants to be home, your guide is giving up the most important family day of his year, and half of Kathmandu's twenty-somethings have had the same idea as you about Poon Hill. All of it is manageable, and all of it needs doing before the festival rather than during it." },
    ],
    sections: [
      {
        h2: "What Changes and What Does Not",
        blocks: [
          {
            table: {
              head: ["Stays the same", "Changes"],
              rows: [
                ["Lodges are open on all main routes", "Restricted-area permits cannot be issued while offices are closed"],
                ["Weather: the most stable of the year", "Buses and jeeps to trailheads are scarce around the tika day"],
                ["Trail conditions: dry, clear, well-trodden", "Guides and porters are harder to find at short notice"],
                ["Lukla and Pokhara flights operate", "Flights sell out earlier and at the top fare"],
                ["Park gates and checkposts are staffed", "Popular short treks fill with Nepali holidaymakers"],
                ["Rescue and helicopter services run", "Banks are closed; cash must be carried in"],
              ],
            },
          },
          { p: "The left-hand column is the trek. The right-hand column is the week before it. The festival dates are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
        ],
      },
      {
        h2: "Region by Region",
        blocks: [
          {
            table: {
              head: ["Region", "How much Dashain is felt", "What to know"],
              rows: [
                ["Everest (Khumbu)", "Hardly at all above Lukla", "Sherpa villages are Buddhist. October crowds are the issue, not the festival — see [[post:everest-base-camp-trek-during-dashain|Everest Base Camp during Dashain]]"],
                ["Annapurna foothills", "Strongly", "Gurung and Magar villages celebrate; swings at every settlement; short treks very busy — see [[post:annapurna-treks-during-dashain|Annapurna treks during Dashain]]"],
                ["Langtang", "Lightly in the upper valley, more below", "Tamang villages mark it modestly. The road to Syabrubesi is the difficulty on the tika day — [[trek:langtang-valley-trek|Langtang Valley trek]]"],
                ["Manaslu and Tsum", "In the lower valley only", "The permit is the constraint: it must be issued before the holiday — [[trek:manaslu-circuit-trek|Manaslu Circuit]]"],
                ["Upper Mustang", "Not at all in Lo", "Same permit constraint. Herds of goats come down the Kali Gandaki for the festival — [[trek:upper-mustang-trek|Upper Mustang trek]]"],
                ["Mid-hills and village treks", "Completely", "The best place to see the festival itself — [[trek:mohare-danda-trek|Mohare Danda]], [[trek:tamang-heritage-trek|Tamang Heritage Trail]]"],
                ["Far west and remote routes", "Strongly in Hindu districts", "Flights and jeeps to remote airstrips are disrupted; build in spare days — [[trek:rara-lake-trek|Rara Lake]]"],
              ],
            },
          },
        ],
      },
      {
        h2: "Lodges and Food on the Trail",
        blocks: [
          { p: "Teahouses stay open because October pays for the rest of their year. In Hindu villages the family running your lodge will be celebrating around you: expect a goat in the yard on the eighth day, a tika offered at breakfast on the tenth, and possibly goat curry on the menu where it normally is not. Some lodges run short-handed because hired kitchen staff have gone home." },
          { p: "Nothing about the food or the rooms changes otherwise — [[post:teahouse-trekking-in-nepal-explained|teahouse trekking explained]] and [[post:food-on-the-trail-in-nepal|food on the trail]] describe the normal arrangement. One caution: festival meat is often kept without refrigeration for days. Above the roadhead we suggest staying with dal bhat." },
        ],
      },
      {
        h2: "The Domestic Holiday Rush",
        blocks: [
          { p: "The change that surprises visitors most has nothing to do with ritual. Dashain is the longest holiday of the Nepali year, and a growing number of young Nepalis spend the days after the tika trekking. They go where a week is enough: [[trek:mardi-himal-trek|Mardi Himal]], [[trek:poonhill-trek|Poon Hill]], [[trek:annapurna-base-camp-trek|Annapurna Base Camp]], [[trek:langtang-valley-trek|Langtang]], [[trek:gosaikunda-lake-trek|Gosaikunda]] and Tilicho Lake." },
          { p: "From the day after the tika until the full moon, lodges on these routes can be full by mid-afternoon, dining rooms are loud and cheerful, and beds at the small high stops — Mardi's High Camp, Machhapuchhre Base Camp — run out. It is good company and a poor time to turn up without a booking. If quiet matters, pick a route from our guide to [[post:off-the-beaten-path-treks-in-nepal|off-the-beaten-path treks]], or see [[post:short-treks-for-the-dashain-holiday|short treks for the Dashain holiday]] for which of the popular ones cope best." },
        ],
      },
      {
        h2: "Getting to the Trailhead",
        blocks: [
          { p: "Flights to Lukla, Pokhara and Jomsom run through the festival. Road transport is the weak point. In the days before Phulpati the highways out of Kathmandu are jammed with people going home; on the tika day and the day before, drivers are at home themselves; and in the days after, the jam reverses." },
          {
            ul: [
              "<strong>Start before Phulpati or from the day after the tika.</strong> Avoid a road transfer on the tika day itself.",
              "<strong>Book the vehicle, not just the trek.</strong> A private jeep arranged in advance will run when shared jeeps and buses do not.",
              "<strong>Fly where you can.</strong> Kathmandu to Pokhara takes twenty-five minutes by air and can take ten hours by road in festival traffic.",
              "<strong>For Lukla, allow for the drive.</strong> Peak-season flights leave from Manthali, four to five hours from Kathmandu, on a road that is one of the main routes east.",
            ],
          },
          { p: "The details, route by route, are in [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]] and our [[post:domestic-flights-in-nepal-for-trekkers|domestic flights guide]]." },
        ],
      },
      {
        h2: "Guides, Porters and Permits",
        blocks: [
          { p: "Most guides and porters come from families that celebrate Dashain, and being on a mountain on the tika day means missing the one gathering of the year. Many do it anyway — October is when the work is. They should be confirmed early, paid a festival bonus, and where the itinerary allows, given the tika day as a rest day in a village. See [[post:guides-and-porters-at-dashain|guides and porters at Dashain]]." },
          { p: "Permits divide in two. Those sold at a gate — Sagarmatha at Monjo, Langtang at Dhunche — are unaffected. Those issued by an office in Kathmandu are not available while it is closed, and for restricted areas that office also needs your passport, in Nepal, on a working day. [[post:trekking-permits-during-dashain|Trekking permits during Dashain]] has the timetable." },
        ],
      },
      {
        h2: "Weather and Conditions",
        blocks: [
          { p: "A Dashain in mid or late October brings the classic autumn pattern: clear mornings, some cloud building in the afternoon, cold nights above 3,500 m and frost above 4,000 m. Passes such as the Thorong La and Larkya La are normally snow-free. A Dashain in late September can still see monsoon cloud, rain in the afternoons and leeches below 2,500 m." },
          { p: "Pack for the altitude rather than the festival — our [[post:nepal-trekking-packing-list|trekking packing list]] applies unchanged — and read [[post:altitude-sickness-in-nepal-prevention-and-treatment|the altitude guide]] if you are going above 3,000 m. A crowded trail tempts people to push on to the next village for a bed; do not let a full lodge rewrite your acclimatisation plan." },
        ],
      },
      {
        h2: "Three Ways to Fit a Trek Around the Tika",
        blocks: [
          {
            table: {
              head: ["Approach", "How it works", "Best for"],
              rows: [
                ["Be high on the tika day", "Start four to six days before the tika, so the festival's peak passes while you are deep in the mountains", "Everest, Manaslu, Annapurna Circuit — long treks through Buddhist country"],
                ["Tika first, then trek", "Spend the festival in the valley or a village and start walking the day after", "Short Annapurna treks, Langtang; anyone who wants to see the festival"],
                ["Trek through a celebrating village", "Plan the tika day as a rest day in a Gurung or Magar village on the route", "Poon Hill via Ghandruk, Mohare Danda, the lower Manaslu valley"],
              ],
            },
          },
          { p: "Whichever you choose, the paperwork happens before Phulpati. Our guide to [[post:first-time-trekking-in-nepal-what-to-know|first-time trekking in Nepal]] covers the rest of the preparation." },
        ],
      },
    ],
    faqs: [
      { question: "Can you trek in Nepal during Dashain?", answer: "Yes. Lodges are open on all the main routes and October is the best trekking month of the year. Arrange permits, staff and transport before the festival begins, and avoid road transfers on the tika day." },
      { question: "Are teahouses open during Dashain?", answer: "Yes. It is peak season and lodges depend on it. In Hindu villages the family may be celebrating, and some lodges run with fewer staff on the tika day, but rooms and meals are available as usual." },
      { question: "Are trekking trails crowded during Dashain?", answer: "The short, accessible routes are — Poon Hill, Mardi Himal, Annapurna Base Camp, Langtang and Gosaikunda — mainly with Nepali trekkers in the days after the tika. Longer and more remote routes are no busier than in any other October week." },
      { question: "Will my guide work during Dashain?", answer: "Yes, if booked ahead. Guides and porters work through Dashain every year, at real personal cost, and a festival bonus is customary. Last-minute staff are much harder to find than at other times." },
      { question: "Can I get a trekking permit during Dashain?", answer: "National park permits sold at park gates, yes. Permits issued by government offices in Kathmandu, including all restricted-area permits, no — not during the holiday block. Arrange them before Phulpati." },
      { question: "Do Lukla flights run during Dashain?", answer: "Yes. In the peak season they depart from Manthali in Ramechhap rather than Kathmandu, and the night drive there shares a main highway with festival traffic, so allow extra time or travel the day before." },
      { question: "Which trek is best during Dashain?", answer: "For an undisturbed trek, the Everest region, where the festival is barely observed. To see Dashain on the trail, the Annapurna foothills. For solitude, a less-known route such as Khopra Danda or Mohare Danda." },
      { question: "Is trekking more expensive during Dashain?", answer: "Lodge and meal prices are the same as the rest of the peak season. Expect to pay more for transport to the trailhead, the top fare on domestic flights, and a festival bonus for your guide and porters." },
    ],
    relatedTreks: [
      "langtang-valley-trek",
      "annapurna-base-camp-trek",
      "everest-base-camp-trek",
      "mohare-danda-trek",
      "manaslu-circuit-trek",
      "tamang-heritage-trek",
    ],
    tripsNote: "Treks that run through the festival — from the busy classics to the quieter village ridges.",
    relatedPosts: [
      "everest-base-camp-trek-during-dashain",
      "annapurna-treks-during-dashain",
      "trekking-permits-during-dashain",
      "guides-and-porters-at-dashain",
      "short-treks-for-the-dashain-holiday",
      "best-time-to-visit-nepal-trekking-seasons",
    ],
    tags: ["Dashain", "Trekking", "Trip Planning", "October Trekking"],
    meta: {
      title: "Trekking in Nepal During Dashain: What Changes",
      description: "Can you trek during Dashain? Lodges, crowds, permits, guides and transport, region by region — and three ways to fit a trek around the tika.",
      keywords: "trekking during Dashain, Nepal trekking October, Dashain trek, teahouses open Dashain, trekking Nepal festival season, Dashain holiday trekking",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-trek-during-dashain",
    title: "Everest Base Camp Trek During Dashain: Flights, Lodges and Crowds",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-04-namche-bazaar-from-hotel-everest-view-trail",
      alt: "Namche Bazaar seen from the trail above the town on the Everest Base Camp route.",
    },
    excerpt:
      "The Khumbu is Sherpa country and Dashain passes it by, so the Everest Base Camp trek runs as normal through the festival. The pressure is at the edges: the night drive to the Lukla flight, full lodges in the busiest month, and a crew who are missing the holiday. Here is how to plan it.",
    intro: [
      { p: "Of all Nepal's major treks, Everest Base Camp is the one Dashain disturbs least. From Lukla upward the villages are Sherpa and Buddhist. There is no tika in Namche, no swing in Dingboche, and the lodge at Gorakshep serves the same dal bhat on the tenth day of Dashain as on any other." },
      { p: "What makes a Dashain departure harder is that it is also an October departure, and in a year like 2026, when the festival falls in the third week of the month, the two peaks coincide. This guide covers what that means and how to plan around it. For the trek itself see our [[post:everest-base-camp-trek-complete-guide|complete Everest Base Camp guide]]." },
    ],
    sections: [
      {
        h2: "Does Dashain Reach the Khumbu?",
        blocks: [
          { p: "Lightly. The Sherpa calendar is built around Losar in late winter, Dumje in early summer and Mani Rimdu in autumn. Dashain is a national holiday that government staff at the park office take and almost nobody else does." },
          { p: "You will notice it in two places. Lower down, around Lukla and Phakding, some lodge staff and many porters are Rai, Tamang and Magar people from the valleys to the south, and they do celebrate — a porter with a tika on the tenth day is a common sight. And in your own crew: unless your guide is Sherpa, he is spending the festival away from home." },
        ],
      },
      {
        h2: "Flights to Lukla During Dashain",
        blocks: [
          { p: "The flights operate as scheduled through the festival, weather permitting. In the peak months they leave from <strong>Manthali airport in Ramechhap</strong>, not from Kathmandu, and that is where Dashain makes itself felt." },
          {
            ul: [
              "<strong>The drive.</strong> Manthali is four to five hours from Kathmandu, normally driven from about 1 am to meet the first flights. The road is one of the main routes to the eastern hills, and in the days before Phulpati it carries a large share of the people leaving the capital. Leave earlier than usual, or drive the previous afternoon and sleep in Manthali.",
              "<strong>Seats.</strong> October flights are the first thing in Nepal to sell out. Book when you book the trek.",
              "<strong>Weather buffers.</strong> Lukla closes in cloud and wind at any time of year. Keep at least one spare day at the end of the trek, and two if an international flight is waiting.",
              "<strong>Helicopter.</strong> A shared or chartered helicopter flies from Kathmandu itself and skips the road — see the [[trek:kathmandu-to-lukla-helicopter-flight|Kathmandu to Lukla helicopter flight]].",
            ],
          },
          { p: "Everything about the flight, including what happens when it is cancelled, is in our [[post:lukla-flight-guide|Lukla flight guide]]." },
          {
            figure: {
              image: "mardi-treks/kathmandu-to-lukla-helicopter-flight/kathmandu-to-lukla-helicopter-flight-05-lukla-airport",
              alt: "The short sloping runway of Lukla airport, the start of the Everest Base Camp trek.",
              caption: "Lukla airport. Flights run through Dashain; it is the drive to the departure airport at Manthali that needs extra time.",
            },
          },
        ],
      },
      {
        h2: "How Busy Is the Trail?",
        blocks: [
          { p: "October is the busiest month on the route in any year, and Dashain does not add much to it — unlike the Annapurna foothills, the Khumbu is too far and too expensive for most Nepali holiday trekkers. The crowding is international and it is concentrated at a few points." },
          {
            table: {
              head: ["Stop", "Altitude", "Pressure on beds in October"],
              rows: [
                ["Phakding and Monjo", "2,610 – 2,835 m", "Low: many lodges"],
                ["Namche Bazaar", "3,440 m", "Moderate: a large village, but everyone spends two nights"],
                ["Tengboche", "3,860 m", "High: a handful of lodges, and far more during Mani Rimdu"],
                ["Dingboche", "4,410 m", "Moderate to high: two-night acclimatisation stop"],
                ["Lobuche", "4,940 m", "High: few lodges, shared rooms common"],
                ["Gorakshep", "5,164 m", "Very high: the last lodges before base camp"],
              ],
            },
          },
          { p: "A guided trek books rooms ahead, which in October is most of the reason to have one. Independent trekkers arriving at Lobuche or Gorakshep after two in the afternoon may be offered the dining-room floor. Our [[post:best-time-for-everest-base-camp-trek|best time for Everest Base Camp]] guide compares October with the quieter weeks either side." },
        ],
      },
      {
        h2: "A 2026 Timeline That Works",
        blocks: [
          { p: "With the tika on Wednesday 21 October 2026, this schedule puts the paperwork before the holiday, the flight before the worst of the traffic, and the festival's peak at a point on the trail where it makes no difference." },
          {
            table: {
              head: ["Date (2026)", "Stage"],
              rows: [
                ["Wed 14 Oct", "Arrive Kathmandu. Cash, gear check, briefing"],
                ["Thu 15 Oct", "Spare day in the valley — [[trek:kathmandu-day-tour|Kathmandu day tour]]; night drive to Manthali"],
                ["Fri 16 Oct", "Fly to Lukla (2,840 m), walk to Phakding"],
                ["Sat 17 Oct", "Phulpati. Phakding to Namche Bazaar (3,440 m)"],
                ["Sun 18 Oct", "Acclimatisation day in Namche — see our [[post:namche-bazaar-acclimatisation-guide|Namche guide]]"],
                ["Mon 19 – Tue 20 Oct", "Namche to Tengboche, then Dingboche (4,410 m)"],
                ["Wed 21 Oct", "The tika. Acclimatisation day at Dingboche — a rest day for the crew as well"],
                ["Thu 22 – Fri 23 Oct", "Lobuche, then Gorakshep and Everest Base Camp (5,364 m)"],
                ["Sat 24 Oct", "Kala Patthar at dawn; descend to Pheriche"],
                ["Sun 25 – Tue 27 Oct", "Descend to Lukla, passing Tengboche around the full moon"],
                ["Wed 28 Oct", "Fly out; drive back to Kathmandu"],
                ["Thu 29 Oct", "Weather buffer"],
              ],
            },
          },
          { p: "The descent in this plan passes Tengboche close to the late-October full moon, when the monastery holds <strong>Mani Rimdu</strong>, its festival of masked dances. For 2026 the public days are widely listed as 26 to 28 October; the dates are set by the monastery, so confirm them before booking. With one extra night at Tengboche on the way down it is the best cultural addition the route offers. See [[post:tengboche-monastery-and-sherpa-culture|Tengboche monastery and Sherpa culture]]. The standard stages are in our [[post:everest-base-camp-trek-itinerary-day-by-day|day-by-day itinerary]]." },
        ],
      },
      {
        h2: "Permits: The One Thing That Is Easier",
        blocks: [
          { p: "The Everest region needs no permit from a Kathmandu office. The local municipality fee is paid on arrival at Lukla and the Sagarmatha National Park entry ticket at the gate in Monjo, and both counters are staffed through the festival. This makes Everest Base Camp the safest major trek to start during the holiday block — there is no paperwork that depends on an office being open. The full list is in [[post:nepal-trekking-permits-explained|Nepal trekking permits explained]]." },
        ],
      },
      {
        h2: "Your Crew at Dashain",
        blocks: [
          { p: "For a guide or porter from a Hindu family, being at 4,400 m on the tenth day means missing the tika from his parents. A good itinerary acknowledges it: a rest day on the tika where the acclimatisation schedule allows one, a call home from wherever there is signal, and a festival bonus on top of the usual tip. Many guides carry a small packet of tika powder and will mark the day at breakfast with the group — join in." },
          { p: "What fair treatment looks like, and what it costs, is in [[post:guides-and-porters-at-dashain|guides and porters at Dashain]]." },
        ],
      },
      {
        h2: "If Flights or Lodges Are Full",
        blocks: [
          {
            ul: [
              "<strong>[[trek:everest-view-trek|Everest View trek]]</strong> — a week to Namche and the Hotel Everest View, below the altitude where beds run short.",
              "<strong>[[trek:gokyo-lake-trek|Gokyo Lakes]]</strong> — the neighbouring valley, with a fraction of the traffic and a view from Gokyo Ri that many prefer.",
              "<strong>[[trek:pikey-peak-trek|Pikey Peak]]</strong> — reached by road, no Lukla flight, with Everest on the horizon and almost no one on the trail.",
              "<strong>[[trek:everest-base-camp-trek-with-helicopter-return|Base camp with a helicopter return]]</strong> — walk in, fly out, and avoid the Lukla queue on the way back.",
              "<strong>[[trek:everest-base-camp-helicopter-tour|Everest Base Camp helicopter tour]]</strong> — a morning from Kathmandu, for visitors who are in Nepal for the festival rather than the trek.",
            ],
          },
          { p: "Our guide to [[post:short-everest-treks-without-base-camp|short Everest treks]] compares the first three." },
        ],
      },
    ],
    faqs: [
      { question: "Is the Everest Base Camp trek open during Dashain?", answer: "Yes. All lodges are open and the trail operates normally. The Sherpa communities of the Khumbu are Buddhist and do not celebrate Dashain, so the festival has little effect above Lukla." },
      { question: "Do flights to Lukla operate during Dashain?", answer: "Yes, daily, weather permitting. In peak season they depart from Manthali in Ramechhap, four to five hours by road from Kathmandu. Festival traffic can lengthen that drive in the days before Phulpati." },
      { question: "Is Everest Base Camp crowded during Dashain?", answer: "It is crowded in October whatever the date of the festival. When Dashain falls in mid or late October, as in 2026, it coincides with the busiest weeks. Lodges at Lobuche and Gorakshep fill first." },
      { question: "Do I need to get permits before Dashain for Everest?", answer: "No. The municipality fee is paid at Lukla and the national park ticket at Monjo, and both are available during the festival. This is one advantage of the Everest region over restricted-area treks." },
      { question: "Will there be Dashain celebrations on the trek?", answer: "Very few. You may see porters and lodge staff from lower valleys wearing tika on the tenth day, and your own crew may mark it at breakfast. The public festival is in Kathmandu and the middle hills, not the Khumbu." },
      { question: "What is the weather like at Everest Base Camp in October?", answer: "Clear and cold. Days at Namche reach about 12°C; nights at Gorakshep fall to around minus 10 to minus 15°C. Mornings are usually cloudless, with some cloud rising up the valley in the afternoon." },
      { question: "Can I see Mani Rimdu on a Dashain trek?", answer: "Sometimes. Mani Rimdu at Tengboche falls around the full moon in late October or November, on dates set by the monastery. In years when it follows Dashain closely, a trek that starts just before the tika can pass Tengboche for it on the way down." },
      { question: "Should I tip more during Dashain?", answer: "A festival bonus for guides and porters who work through Dashain is customary and appreciated — typically a few extra days' wages on top of the normal tip at the end of the trek." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-view-trek",
      "gokyo-lake-trek",
      "everest-base-camp-trek-with-helicopter-return",
      "pikey-peak-trek",
      "kathmandu-to-lukla-helicopter-flight",
    ],
    tripsNote: "The base camp trek and the alternatives when October flights or lodges are full.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "lukla-flight-guide",
      "best-time-for-everest-base-camp-trek",
      "trekking-in-nepal-during-dashain",
      "tengboche-monastery-and-sherpa-culture",
      "guides-and-porters-at-dashain",
    ],
    tags: ["Dashain", "Everest", "Everest Base Camp", "Trekking", "October Trekking"],
    meta: {
      title: "Everest Base Camp Trek During Dashain: What to Expect",
      description: "Trekking to Everest Base Camp during Dashain: Lukla flights from Manthali, October crowds, permits, a 2026 timeline around the tika, and alternatives.",
      keywords: "Everest Base Camp Dashain, EBC trek October, Lukla flights Dashain, Everest trek festival season, EBC trek 2026 October, Mani Rimdu Dashain",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-treks-during-dashain",
    title: "Annapurna Treks During Dashain: ABC, Poon Hill and Mardi Himal",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-00-landscape-view-of-poon-hill",
      alt: "The Annapurna and Dhaulagiri ranges seen from Poon Hill above Ghorepani.",
    },
    excerpt:
      "The Annapurna foothills are where a trekker meets Dashain head-on: Gurung villages with swings at every corner, lodge owners handing out tika, and trails full of Nepalis on holiday. A route-by-route guide to Poon Hill, Annapurna Base Camp, Mardi Himal and the quieter ridges.",
    intro: [
      { p: "If the Everest region ignores Dashain, the Annapurna region embraces it. The villages on the way to Poon Hill and Annapurna Base Camp are Gurung and Magar, communities that keep the festival with enthusiasm, and Pokhara, the gateway to all of them, is the favourite holiday destination of half the country." },
      { p: "The result is the most festive trekking in Nepal and, on the short routes, the most crowded. This guide covers what to expect on each trek and how to find space. General advice is in [[post:trekking-in-nepal-during-dashain|trekking in Nepal during Dashain]]." },
    ],
    sections: [
      {
        h2: "Dashain in the Annapurna Foothills",
        blocks: [
          { p: "Walk through Ghandruk, Ulleri, Dhampus or Landruk in the first week of the festival and you will see it being prepared: houses freshly coated in red and white clay, a goat tethered by the door, and on the nearest flat ground a bamboo <em>linge ping</em> with a queue of children. Men home on leave from the army and from work abroad sit in the sun. On the tenth day the lodge owner is quite likely to put a tika on you at breakfast." },
          { p: "It is the best scenery for the festival anywhere on a trekking route, and it comes with the Annapurna range behind it. See [[post:dashain-swings-and-kites|Dashain swings and kites]] for what you are looking at." },
          {
            figure: {
              image: DASHAIN.carryingMud,
              alt: "Women carrying baskets of clay through pine forest to repaint their houses before Dashain.",
              caption: "Carrying clay to repaint the house before the festival. In the first week of Dashain every hill village is being cleaned and coloured.",
            },
          },
        ],
      },
      {
        h2: "Route by Route",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "At Dashain", "Our advice"],
              rows: [
                ["[[trek:poonhill-trek|Poon Hill]]", "3 – 5", "Very busy after the tika; Ghorepani's lodges fill and the dawn viewpoint is crowded", "Go before the tika, or add Ghandruk and take the quieter return"],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "4 – 6", "The favourite of Nepali holiday trekkers; High Camp has few beds", "Book lodges ahead and start before Phulpati if you can"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "7 – 10", "Busy; beds at Deurali, Machhapuchhre Base Camp and base camp are limited", "A guided booking matters most here"],
                ["[[trek:khopra-danda-trek|Khopra Danda]]", "6 – 8", "Quiet; community lodges with space", "The best alternative to Poon Hill for the view"],
                ["[[trek:mohare-danda-trek|Mohare Danda]]", "4 – 6", "Quiet; passes through villages that celebrate fully", "The best trek for seeing Dashain itself"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "12 – 16", "Normal October traffic; Manang is Buddhist and unaffected", "Start before the holiday so the road to the trailhead is passable"],
                ["[[trek:jomsom-muktinath-trek|Jomsom and Muktinath]]", "5 – 8", "Hindu pilgrims add to trekkers at Muktinath; Jomsom flights full", "Book the flight early or drive in"],
              ],
            },
          },
          { p: "If you are choosing between the first three, [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|Mardi Himal vs Poon Hill vs Annapurna Base Camp]] compares them in detail." },
        ],
      },
      {
        h2: "When the Trails Fill",
        blocks: [
          { p: "The rush has a clear shape. The days before the tika are relatively quiet, because Nepali families are at home preparing. On the tika day itself the trails are close to empty. From the next morning until the full moon, groups of friends and colleagues who have done their family duty head for the hills, and Pokhara's jeep stands are busy from dawn." },
          {
            table: {
              head: ["Period", "2026 dates", "Trail traffic on short Annapurna treks"],
              rows: [
                ["Before Phulpati", "Up to 16 October", "Normal October: busy with international trekkers"],
                ["Phulpati to the tika", "17 – 21 October", "Quieter than usual; a good window"],
                ["After the tika", "22 – 26 October", "The busiest days of the year"],
                ["After the full moon", "From 27 October", "Back to normal October levels"],
              ],
            },
          },
          { p: "The practical conclusion: on a short trek, walk <em>during</em> the main festival days rather than after them, and reserve the rooms." },
        ],
      },
      {
        h2: "Getting to Pokhara and the Trailheads",
        blocks: [
          { p: "Pokhara is twenty-five minutes from Kathmandu by air and six to eight hours by road on a normal day. In festival traffic the road can take ten or more. Fly if you can, and book early — see [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]]." },
          { p: "From Pokhara the trailheads are one to three hours away by jeep: Nayapul and Ulleri for Poon Hill, Kimche or Ghandruk for Annapurna Base Camp, Kande or Sidhing for Mardi Himal. Shared jeeps thin out on the tika day and the day before. A private jeep booked with the trek is the reliable answer, and starting from Pokhara rather than Kathmandu saves a day either way — our [[trek:poonhill-trek-from-pokhara|Poon Hill]], [[trek:mardi-himal-trek-from-pokhara|Mardi Himal]] and [[trek:annapurna-base-camp-trek-from-pokhara|Annapurna Base Camp]] treks are all offered from Pokhara." },
        ],
      },
      {
        h2: "Permits for the Annapurna Region",
        blocks: [
          { p: "Every trek here needs the Annapurna Conservation Area permit. Buy it <strong>before</strong> the holiday: the permit counters in Kathmandu and Pokhara keep reduced hours or close on the main days, and the fee is doubled if you are found without one at a checkpost inside the area. A registered agency arranges it with your booking. The rules are in our [[post:annapurna-region-permits-acap-guide|Annapurna permits guide]], and the festival timetable in [[post:trekking-permits-during-dashain|permits during Dashain]]." },
          {
            figure: {
              image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-00-annapurna-base-camp-perspective",
              alt: "The amphitheatre of peaks around Annapurna Base Camp at 4,130 m.",
              caption: "Annapurna Base Camp. The lodges here and at Machhapuchhre Base Camp have limited beds, which is what makes a booking matter in the days after the tika.",
            },
          },
        ],
      },
      {
        h2: "A Dashain Week from Pokhara",
        blocks: [
          { p: "This pairs the festival with a short trek, using the quiet window before the rush. Dates are for 2026." },
          {
            table: {
              head: ["Date", "Plan"],
              rows: [
                ["Fri 16 Oct", "Fly Kathmandu to Pokhara; permits already in hand"],
                ["Sat 17 Oct", "Phulpati. Jeep to the trailhead and walk to Ulleri or Ghandruk"],
                ["Sun 18 – Mon 19 Oct", "To Ghorepani; Poon Hill at dawn"],
                ["Tue 20 Oct", "Maha Navami. Walk to Ghandruk through rhododendron forest"],
                ["Wed 21 Oct", "The tika, in Ghandruk — a rest day with the lodge family and the village swing"],
                ["Thu 22 Oct", "Walk out against the incoming tide; jeep to Pokhara"],
                ["Fri 23 Oct", "Pokhara: the lake, the Peace Pagoda — [[trek:pokhara-day-tour|Pokhara day tour]]"],
              ],
            },
          },
          { p: "The same shape works for Mardi Himal. For what to do in the town, see [[post:pokhara-during-dashain|Pokhara during Dashain]], and for the routes in general, [[post:short-treks-from-pokhara|short treks from Pokhara]]." },
        ],
      },
      {
        h2: "Quieter Alternatives",
        blocks: [
          { p: "If full lodges are not your idea of a holiday, three options keep the Annapurna views and lose the crowd. <strong>Khopra Danda</strong> and <strong>Mohare Danda</strong> are community-lodge ridges west of Poon Hill, each with a panorama that includes Dhaulagiri. And a <strong>village stay</strong> — [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] in Lamjung or [[trek:sirubari-village-tour|Sirubari]] in Syangja — puts you in a Gurung household for the tika itself, with a short walk each day and no altitude at all. See our guides to [[post:khopra-danda-trek-guide|Khopra Danda]] and [[post:mohare-danda-community-trek-guide|Mohare Danda]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is Annapurna Base Camp open during Dashain?", answer: "Yes. All lodges on the route are open. It is busy, particularly in the days after the tika, and beds at Deurali, Machhapuchhre Base Camp and Annapurna Base Camp are limited, so booking ahead matters." },
      { question: "Is Poon Hill crowded during Dashain?", answer: "In the days after the tika, very. It is the most popular short trek for Nepalis on holiday. The days from Phulpati to the tika are noticeably quieter." },
      { question: "Why is Mardi Himal so busy at Dashain?", answer: "It is short, close to Pokhara, reaches a dramatic viewpoint in three days and has become the favourite holiday trek for young Nepalis. High Camp has few lodges, so they fill early in the afternoon." },
      { question: "Do villages on the Annapurna trails celebrate Dashain?", answer: "Yes. The Gurung and Magar villages of the foothills — Ghandruk, Ulleri, Dhampus, Landruk — celebrate with swings, feasts and tika. Further north, Manang and upper Mustang are Buddhist and largely do not." },
      { question: "Can I get an ACAP permit during Dashain?", answer: "The permit counters keep reduced hours or close on the main festival days. Get the permit before Phulpati, or have an agency arrange it. Buying it at a checkpost inside the conservation area costs double." },
      { question: "How do I get from Pokhara to the trailhead on tika day?", answer: "With a private jeep booked in advance. Shared jeeps and local buses are scarce on the tika day and the day before. Many trekkers plan to be already on the trail that day." },
      { question: "Which Annapurna trek is quietest during Dashain?", answer: "Khopra Danda and Mohare Danda, both community-lodge routes west of Poon Hill. They have the same mountain views and a small fraction of the trekkers." },
      { question: "Is the weather good in the Annapurna region during Dashain?", answer: "In a mid or late October Dashain, yes: clear mornings, mild days in the foothills, and frost only above about 3,500 m. In a late September Dashain, expect some afternoon rain and leeches on the lower forest trails." },
    ],
    relatedTreks: [
      "poonhill-trek-from-pokhara",
      "mardi-himal-trek-from-pokhara",
      "annapurna-base-camp-trek-from-pokhara",
      "mohare-danda-trek",
      "khopra-danda-trek",
      "ghalegaun-ghanpokhara-village-tour",
    ],
    tripsNote: "Annapurna treks from Pokhara, with two quieter ridges and a village stay for the festival days.",
    relatedPosts: [
      "trekking-in-nepal-during-dashain",
      "pokhara-during-dashain",
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "annapurna-region-permits-acap-guide",
      "short-treks-for-the-dashain-holiday",
      "short-treks-from-pokhara",
    ],
    tags: ["Dashain", "Annapurna", "Trekking", "Poon Hill", "Mardi Himal"],
    meta: {
      title: "Annapurna Treks During Dashain: ABC, Poon Hill, Mardi",
      description: "Poon Hill, Annapurna Base Camp and Mardi Himal during Dashain: when the trails fill, permits, transport from Pokhara, and quieter alternatives.",
      keywords: "Annapurna trek Dashain, Poon Hill Dashain, Mardi Himal Dashain, ABC trek October, Annapurna Base Camp festival season, Pokhara trekking Dashain",
    },
  },
];
