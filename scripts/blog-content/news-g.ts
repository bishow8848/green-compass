import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 7: the Department of Immigration notice of 27 October 2026.
 *
 * The notice is narrow and specific — no new restricted-area permits for
 * high-hill and Himalayan areas from 29 to 31 October, and a request that
 * trekkers already there stay put. The article says exactly that, and does not
 * turn it into a country-wide closure.
 */
export const newsG: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-suspends-high-altitude-trekking-permits-snowstorm-avalanche-warning",
    title:
      "Nepal Suspends High-Altitude Trekking Permits as Snowstorm and Avalanche Warning Issued for 29–31 October 2026",
    cluster: "news",
    date: "2026-10-28",
    hero: {
      image: trekImage("pisang-peak-climbing", "01-manang-in-snow"),
      alt: "Flat-roofed houses in Pisang in Manang district under fresh snow, with pale mountain slopes rising behind the village.",
    },
    excerpt:
      "Nepal's Department of Immigration has stopped issuing new restricted-area permits for high-hill and Himalayan trekking from 29 to 31 October 2026, citing heavy snowfall, snowstorms and avalanche risk. What the notice says, which routes it affects, and what to do if you are already on the trail.",
    intro: [
      {
        p: "Nepal has issued an urgent warning for its high mountains. A notice from the <strong>Department of Immigration</strong> dated 27 October 2026, citing the National Disaster Risk Reduction and Management Authority (NDRRMA), warns of <strong>heavy snowfall, snowstorms and avalanches</strong> in high-hill and Himalayan areas from <strong>Thursday 29 to Saturday 31 October 2026</strong> (Kartik 12–14, 2083).",
      },
      {
        p: "The notice asks tourists not to trek in the affected areas during those three days, tells anyone already there to stay in a safe place, and suspends the issue of <strong>new restricted-area permits</strong> for high-hill and Himalayan regions with immediate effect. It is a targeted warning, not a closure of every trail in Nepal — but for anyone with a pass crossing or a high camp in their itinerary this week, it is decisive.",
      },
    ],
    sections: [
      {
        h2: "What the Government Notice Actually Says",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Issued by</strong>", "Department of Immigration, Government of Nepal"],
                ["<strong>Date of notice</strong>", "27 October 2026"],
                ["<strong>Basis</strong>", "Warning from the National Disaster Risk Reduction and Management Authority"],
                ["<strong>Risk period</strong>", "29–31 October 2026 (Kartik 12–14, 2083)"],
                ["<strong>Hazards</strong>", "Heavy snowfall, snowstorms, avalanche risk"],
                ["<strong>Areas</strong>", "High-hill and Himalayan regions"],
                ["<strong>Advice to tourists</strong>", "Do not trek in vulnerable high-hill and Himalayan areas; those already there should remain in safe locations"],
                ["<strong>Permits</strong>", "No new restricted-area permits for high-hill and Himalayan regions during the period"],
                ["<strong>Who must act</strong>", "Agencies, guides, porters, trekkers and other stakeholders"],
              ],
              note: "Summary of the Department of Immigration notice dated 27 October 2026. The Nepali original is the authoritative text.",
            },
          },
          {
            p: "Two details matter most. The first is the wording: tourists are <em>requested</em> not to trek in the vulnerable areas, and those already there are asked to stay in a safe place. The second is the permit rule: it applies to <strong>new restricted-area permits</strong> for high-hill and Himalayan regions. It does not cancel permits already issued, and it does not close every trekking route in the country. Both points are widely misreported, in both directions.",
          },
          {
            p: "The warning follows the same weather system described in our [[post:cyclone-arnab-in-nepal-2026-forecast-impacts-travel-advice|Cyclone Arnab briefing]]: a moist remnant pushing against the Himalaya, with the snow line forecast to drop to around 3,500 metres in the east and 4,000–4,500 metres in the centre. Wet snow of that depth is what turns a pass crossing into an avalanche problem.",
          },
        ],
      },
      {
        h2: "Which Treks and Regions Are Affected?",
        blocks: [
          {
            p: "The notice covers high-hill and Himalayan areas generally, so the practical question is elevation rather than a list of names. Routes that go above the new snow line and cross exposed ground are the ones to reconsider this week.",
          },
          {
            ul: [
              "<strong>Everest and Khumbu</strong> — the trail above Namche, the Cho La and Renjo La, Kala Patthar and Everest Base Camp. Expect deep snow, whiteouts and disrupted Lukla flights. See the [[trek:everest-base-camp-trek|Everest Base Camp trek]].",
              "<strong>Annapurna</strong> — the Thorong La on the [[trek:annapurna-circuit-trek|Annapurna Circuit]] and the upper Annapurna Sanctuary. The pass can close for a day or more.",
              "<strong>Manaslu</strong> — the Larke La and the upper valley, on ground still damaged by the 11 October flood. See the [[trek:manaslu-circuit-trek|Manaslu Circuit]].",
              "<strong>Langtang and Gosaikunda</strong> — the Laurebina and Ganja La, with snow and poor visibility on the high sections. See the [[trek:langtang-valley-trek|Langtang Valley trek]].",
              "<strong>Kanchenjunga, Makalu, Dolpo and other remote high routes</strong> — less traffic, longer rescue times, and the same forecast.",
            ],
          },
          {
            p: "Lower routes are a different case. A short walk near Pokhara or in the Kathmandu Valley does not reach the warning's high-hill zone, but it can still be affected by heavy rain, slippery trails, landslides and road closures. Check the local forecast and ask your guide about the specific trail rather than assuming a low trek is automatically safe.",
          },
          {
            figure: {
              image: trekImage("manaslu-circuit-trek", "03-larkya-glacier-lake-and-himalayan-panorama-near-larke-pass-m"),
              alt: "A glacial lake and a wide Himalayan panorama on the approach to the Larke La on the Manaslu Circuit, with snow-streaked slopes above.",
              caption:
                "The approach to the Larke La on the Manaslu Circuit. Passes like this are where the warning bites: new snow, wind-loaded slopes and no quick way out. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "If You Already Have a Trek Booked",
        blocks: [
          {
            ol: [
              "<strong>Call your agency today.</strong> Ask whether your route enters the high-hill zone between 29 and 31 October, and ask for the answer in writing.",
              "<strong>Move the departure, not the mountain.</strong> A three- or four-day shift usually costs less than a helicopter evacuation, and the first week of November is still good trekking weather in most years.",
              "<strong>Check whether your permit is affected.</strong> New restricted-area permits will not be issued in the period. If yours is already issued, that does not make it safe to walk into a warned area — ask the agency and the relevant office.",
              "<strong>Ask about a lower alternative.</strong> Mardi Himal, Khopra, the Kathmandu Valley and the Chitwan and Pokhara areas stay below the snow line. Our [[post:nepal-trekking-routes-status-october-2026|route-by-route status page]] is updated as routes reopen.",
              "<strong>Do not travel to the trailhead “to decide”.</strong> Decisions made at altitude, in bad weather, with money already spent, are the ones people regret.",
            ],
          },
        ],
      },
      {
        h2: "If You Are Already on the Trail",
        blocks: [
          {
            ul: [
              "Stay in a solid lodge or camp and follow your guide and local authorities. Do not push for the next village to keep the itinerary.",
              "Do not cross a high pass, an exposed ridge or a loaded slope while the snow is falling or the cloud is down.",
              "Keep warm, dry and fed, and ration phone battery; charge when power is available.",
              "Tell your agency, your embassy contact and your family where you are and what your plan is.",
              "Keep medicines, water, snacks and a head torch within reach, and know the quickest way to a lower village.",
              "Watch for altitude sickness and hypothermia. In a snowstorm, cold injury becomes the more immediate danger.",
            ],
          },
          {
            p: "<strong>One exception to “stay put”.</strong> If your lodge or camp is itself threatened — by an avalanche runout, a landslide or a rising stream — staying put is not safe. Move to a safer place on local advice, and tell your group and agency where you have gone.",
          },
          {
            figure: {
              image: trekImage("everest-base-camp-trek", "04-namche-bazaar-from-hotel-everest-view-trail"),
              alt: "Namche Bazaar built in a bowl in the Khumbu hills, seen from the trail above the town with snow-streaked peaks behind.",
              caption:
                "Namche Bazaar, where most Khumbu trekkers wait out bad weather. Sitting a day here is cheap; pushing up to Gorak Shep in a whiteout is not. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Why Snowstorms and Avalanches Are the Real Danger",
        blocks: [
          {
            ul: [
              "<strong>Snow hides the trail.</strong> A route that was obvious yesterday can be invisible under 30 cm of new snow, and a wrong step on a moraine or a traverse is hard to recover from.",
              "<strong>Wind loads the slopes.</strong> Snow blown onto lee slopes can double the load in hours. The danger is highest during the storm and in the day or two after it clears.",
              "<strong>Rescue is slower.</strong> Helicopters cannot fly in cloud, and a grounded helicopter turns a two-hour evacuation into a two-day carry.",
              "<strong>Cold compounds everything.</strong> Wet clothing, a lost glove and a stalled group are how hypothermia starts, long before anyone is buried.",
            ],
          },
        ],
      },
      {
        h2: "When Can You Start Again?",
        blocks: [
          {
            p: "The notice names 29–31 October as the risk period, but the end of a warning is not a green light. Snow has to settle, slopes have to stabilise, trails have to be checked and bridges have to be inspected. Before restarting, confirm three things: an official update from DHM or the district authorities, a route assessment from your agency or TAAN, and a guide who has seen the ground or spoken to someone who has. Do not restart a trek because the calendar changed.",
          },
          {
            figure: {
              image: trekImage("annapurna-circuit-trek", "01-muktinath-valley-view-of-thorong-la-pass-mountains-nepal"),
              alt: "The dry brown Muktinath valley with a snow-capped massif rising behind it on the Thorong La side of the Annapurna Circuit.",
              caption:
                "The Thorong La side of the Annapurna Circuit. A pass that is straightforward in dry October weather becomes a different proposition under a metre of new snow. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Official Updates and Who to Contact",
        blocks: [
          {
            table: {
              head: ["Source", "Use"],
              rows: [
                ["Department of Immigration — idd.gov.np", "Permit notices and restricted-area rules"],
                ["DHM — dhm.gov.np", "Forecasts and colour-coded weather warnings"],
                ["NDRRMA — ndrrma.gov.np", "Disaster alerts and district information"],
                ["TAAN — taan.org.np", "Trek route status and agency advisories"],
                ["Home Ministry hotline 1234", "National disaster emergency"],
                ["Police 100 / Ambulance 102", "Rescue and medical help"],
              ],
            },
          },
          {
            p: "Your trekking agency, your insurer's assistance line and your embassy should be on the same list. In a mountain emergency, the call that authorises a helicopter is usually the insurer's, not the police's.",
          },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `Department of Immigration, Government of Nepal — notice dated 27 October 2026 (Nepali original)`,
              `The Himalayan Times — ${source("https://thehimalayantimes.com/nepal/nepal-suspends-restricted-area-trekking-permits-amid-snowstorm-avalanche-risk", "Nepal suspends restricted-area trekking permits amid snowstorm and avalanche risk")}`,
              `Onlinekhabar — ${source("https://english.onlinekhabar.com/nepal-suspends-trekking-permit.html", "Nepal suspends trekking permits")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is trekking banned in Nepal from 29 to 31 October 2026?",
        answer:
          "No. The Department of Immigration notice requests that tourists do not trek in vulnerable high-hill and Himalayan areas during those three days, and tells those already there to stay in safe locations. It is a targeted warning for high-altitude areas, not a country-wide ban.",
      },
      {
        question: "Are all trekking permits suspended?",
        answer:
          "No. The suspension applies to new restricted-area permits for high-hill and Himalayan regions during 29–31 October 2026. Permits already issued are not cancelled by the notice, but holding one does not make it safe to enter an area under a weather warning.",
      },
      {
        question: "I already have a restricted-area permit. Can I still trek?",
        answer:
          "Do not assume it. Ask your agency and the relevant government office whether your route is in the warned zone, and follow the weather advice. The permit allows you to be there in normal conditions; it does not override a safety warning.",
      },
      {
        question: "Which areas does the warning cover?",
        answer:
          "High-hill and Himalayan regions generally — including the Everest, Annapurna, Manaslu, Langtang and Kanchenjunga areas and other routes that go above the new snow line. Lower walks near Pokhara and Kathmandu are not the target of the notice, but they can still be affected by rain, landslides and road closures.",
      },
      {
        question: "Is the Everest Base Camp trek cancelled?",
        answer:
          "The trek is not formally cancelled, but the high sections above Namche are exactly what the warning is about. Expect deep snow, whiteouts and disrupted Lukla flights. If your itinerary puts you at Gorak Shep or Kala Patthar between 29 and 31 October, postpone it.",
      },
      {
        question: "Are short treks near Pokhara safe during the warning?",
        answer:
          "They are outside the high-hill zone, but not automatically safe. Heavy rain means slippery trails, landslides and road disruption. Check the local forecast, ask your guide about the specific route, and avoid exposed ground in bad weather.",
      },
      {
        question: "What should I do if I am already at altitude?",
        answer:
          "Stay in a solid lodge or camp, keep warm and dry, and follow your guide and local authorities. Do not cross a pass or a loaded slope in the storm. If your shelter is threatened by an avalanche, landslide or rising water, move to safety on local advice.",
      },
      {
        question: "When will high-altitude trekking resume?",
        answer:
          "Not automatically on 1 November. Wait for an official update, a route assessment from TAAN or the district authorities, and a guide's judgement on the ground. Snow, avalanche danger and damaged trails can outlast the warning by several days.",
      },
      {
        question: "Will my insurance cover a postponed trek?",
        answer:
          "It depends on the policy and when you bought it. A named storm or a government warning may count as a known event, which can exclude cancellation cover bought afterwards. Check the natural-catastrophe and delay wording, and keep written confirmation from your agency.",
      },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "manaslu-circuit-trek",
      "langtang-valley-trek",
      "mardi-himal-trek",
    ],
    tripsNote:
      "High routes covered by the warning, and the lower alternatives we can run this week. Contact us before you travel.",
    relatedPosts: [
      "cyclone-arnab-in-nepal-2026-forecast-impacts-travel-advice",
      "nepal-trekking-routes-status-october-2026",
      "travel-insurance-for-trekking-in-nepal",
      "kathmandu-to-pokhara-road-status-october-2026",
    ],
    tags: [
      "nepal travel advisory",
      "snowstorm",
      "avalanche warning",
      "trekking permits",
      "october 2026",
      "trekking safety",
    ],
    meta: {
      title: "Nepal Snowstorm Warning: High-Altitude Trekking Permits Suspended",
      description:
        "Nepal has suspended new high-altitude trekking permits for 29–31 October 2026 amid heavy snowfall, snowstorm and avalanche warnings. What it means for trekkers.",
      keywords:
        "Nepal snowstorm warning, Nepal trekking permit suspension, avalanche warning Nepal October 2026, heavy snowfall in Nepal, Nepal travel advisory, restricted area trekking permits, Everest Base Camp weather, trekking safety Nepal",
    },
  },
];
