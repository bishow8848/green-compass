import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * Trail news, part 6: the post-monsoon cyclone of late October 2026.
 *
 * Deliberately short: a traveller in Nepal this week needs the forecast, the
 * districts affected, what it does to treks and flights, and what to do. The
 * long-form background lives in the linked guides instead.
 */
export const newsF: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "cyclone-arnab-in-nepal-2026-forecast-impacts-travel-advice",
    title:
      "Cyclone Arnab in Nepal: Expected Impacts, Weather Forecast, Safety Precautions, and Travel Risks (2026)",
    cluster: "news",
    date: "2026-10-28",
    hero: {
      image: trekImage("langtang-valley-trek", "06-beautiful-cloud-formation-gosainkunda-trail"),
      alt: "A tall bank of cloud building over the ridge above the Gosainkunda trail in Langtang National Park, with the path crossing a green slope below.",
    },
    excerpt:
      "Cyclone Arnab brings two to three days of heavy rain to eastern and central Nepal from 28 October 2026, with snow on the passes. What it means for treks, flights and roads — and what travellers should do this week.",
    intro: [
      {
        p: "<strong>Cyclone Arnab in Nepal</strong> is a rain event, not a wind event. The storm has weakened over India; what reaches Nepal from Wednesday 28 to Saturday 31 October 2026 is its moisture, forecast to fall as 100–200 mm of rain across the east and centre, and as heavy snow above roughly 3,500 metres. On ground already soaked by October's floods, that is enough to close roads, cancel flights and make high trails unsafe.",
      },
      {
        p: "This is a short, practical briefing for travellers. Figures are forecasts from the Department of Hydrology and Meteorology (DHM) and will change; the advice will not. <strong>Last updated: 28 October 2026, 09:00 Nepal Time.</strong>",
      },
    ],
    sections: [
      {
        h2: "What Is Cyclone Arnab, and What Does It Mean for Nepal?",
        blocks: [
          {
            p: "Arnab formed over the Bay of Bengal, crossed eastern India and is now a weakening low. Nepal is landlocked, but moist air pushed against the Himalaya has to rise, cool and fall as rain. October is the second peak of the Bay of Bengal cyclone season, so this is a familiar pattern — usually one or two such systems interrupt the clearest trekking month of the year.",
          },
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Nepal window</strong>", "28–31 October 2026, showers into 1 November"],
                ["<strong>Rain</strong>", "100–200 mm east and centre; over 250 mm on south-facing slopes; 60–120 mm in Kathmandu"],
                ["<strong>Snow line</strong>", "About 3,500 m in the east, 4,000–4,500 m in the centre and west"],
                ["<strong>Biggest risks</strong>", "Landslides, flash floods, closed highways, cancelled flights"],
                ["<strong>Least affected</strong>", "Mustang, Dolpo and the far west"],
              ],
              note: "Forecast as of 28 October 2026. A track shift of 100 km moves the heaviest rain to different districts.",
            },
          },
        ],
      },
      {
        h2: "Nepal Weather Forecast, October 2026: The Four-Day Timeline",
        blocks: [
          {
            table: {
              head: ["Day", "What to expect"],
              rows: [
                ["Wed 28 Oct", "Rain starts in the far east; Kathmandu cloudy and humid by afternoon"],
                ["Thu 29 Oct", "Heaviest rain in Koshi, Madhesh and Bagmati; thunderstorms and hail"],
                ["Fri 30 Oct", "Rain band moves west into Gandaki and Lumbini; heavy snow on the passes"],
                ["Sat 31 Oct", "System weakens; scattered showers, clearing from the east"],
              ],
            },
          },
          {
            p: "DHM uses a four-colour warning scale — green, yellow, orange, red. Expect orange in the eastern hills and Terai, with short red periods in Koshi and eastern Madhesh. Check the bulletin each morning rather than relying on yesterday's forecast.",
          },
        ],
      },
      {
        h2: "Which Provinces and Districts Could Be Affected?",
        blocks: [
          {
            ul: [
              "<strong>Koshi and Madhesh</strong> — the worst of it. Flooding in the Koshi, Kamala and Bagmati plains; landslides in Taplejung, Sankhuwasabha, Dhankuta and Ilam; snow at Lukla and above.",
              "<strong>Bagmati</strong> — landslides on the Araniko and BP highways; the Bagmati and Manohara spilling at low crossings; snow on the Laurebina and Ganja La.",
              "<strong>Gandaki</strong> — saturated ground in Gorkha, Rasuwa and Myagdi from October's floods; rising Budhi Gandaki, Marsyangdi and Seti.",
              "<strong>Lumbini, Karnali, Sudurpashchim</strong> — less rain, but the Karnali Highway and steep side valleys still slide.",
              "<strong>Kathmandu Valley</strong> — local flooding at Balkhu, Jadibuti and the ring-road underpasses; delays rather than danger.",
            ],
          },
          {
            figure: {
              image: trekImage("tsum-valley-trek", "05-budi-gandaki-river"),
              alt: "The Budhi Gandaki running wide and grey between steep forested banks in the Tsum Valley, with boulders along the waterline.",
              caption:
                "The Budhi Gandaki in the Tsum Valley. Rivers keep rising for a day after the rain upstream stops, so lowland districts can flood after the hills have cleared. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Nepal Trekking Weather Warning: Treks, Expeditions, Flights and Roads",
        blocks: [
          {
            table: {
              head: ["Route", "What to expect", "Advice"],
              rows: [
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "Snow above Namche; Lukla flights disrupted", "Add two buffer days before your flight home; don't push to Gorak Shep in cloud"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "Snow on the Thorong La; pass may close for a day or two", "Wait at Manang or Thorong Phedi; cross only with a guide and clear visibility"],
                ["[[trek:langtang-valley-trek|Langtang]] and [[trek:gosaikunda-lake-trek|Gosaikunda]]", "Snow on the Laurebina; landslides on the Syabrubesi road", "Expect the pass to be out for a day or two"],
                ["[[trek:mardi-himal-trek|Mardi Himal]] and Khopra", "Rain, cloud, snow on the ridge", "The sensible short option: low, flexible, easy to abandon"],
                ["Mustang, Dolpo and the far west", "Much less rain, cold nights", "The best bet this week if flights and roads hold"],
              ],
            },
          },
          {
            p: "Expeditions above 5,000 m should stop moving while it snows: a metre of dense new snow is the classic setup for the season's biggest avalanches, and the day after clearing is more dangerous than the storm itself.",
          },
          {
            p: "The Department of Immigration has also suspended new restricted-area permits for high-hill and Himalayan areas over these three days — see [[post:nepal-suspends-high-altitude-trekking-permits-snowstorm-avalanche-warning|the permit suspension notice]].",
          },
          {
            p: "Domestic flights run on visual rules, so cloud stops them. Expect disruption at Lukla, Phaplu, Jomsom, Pokhara, Bharatpur and the eastern airports, worst on Thursday and Friday. Helicopters can sometimes fly below the cloud, but seats are scarce and expensive. On the roads, the Prithvi, Araniko, BP, Koshi and Karnali highways all have slip zones that react to the first 50 mm. The current state of the main road is in our [[post:kathmandu-to-pokhara-road-status-october-2026|Kathmandu–Pokhara update]].",
          },
          {
            figure: {
              image: trekImage("everest-view-trek", "05-lukla-airport-during-everest-base-camp-trek-0092"),
              alt: "The short sloping runway at Lukla with its terminal buildings and a hillside village rising behind it.",
              caption:
                "Lukla's runway climbs into the hillside and is unusable in low cloud. When the weather closes in, the whole Khumbu schedule stops with it. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Travel Advice for This Week: What to Do, and What Not To",
        blocks: [
          {
            ul: [
              "<strong>Build in buffer days.</strong> If your international flight is within three days of a trek ending above 3,500 m, you do not have enough slack.",
              "<strong>Don't cross passes in cloud.</strong> Turn back an hour below the top. The mountain will still be there next year; the rescue will not be quick.",
              "<strong>Never sleep on a gravel fan or a river bend.</strong> Lodges at the mouth of a side valley are the first to go in a debris flow.",
              "<strong>Don't drive hill roads at night.</strong> Most landslide deaths on Nepali roads happen to vehicles that hit a slip in the dark.",
              "<strong>Stay put when flights cancel.</strong> Waiting in a lodge with food and a fire beats walking out on a trail being rained on.",
              "<strong>Carry a satellite messenger</strong> on anything above 3,500 m — mobile coverage ends where the emergency begins.",
              "<strong>Keep cash, a power bank and paper contacts.</strong> Cards and ATMs fail when the network does.",
            ],
          },
          {
            p: "If you are in a city, avoid riverside walks and low crossings during the heaviest rain, reconfirm every transfer 24 hours ahead, and change your plans rather than your route. If the water rises near you, go uphill at right angles to the valley, at least 30 metres above the riverbed, and do not go back for luggage. Our [[post:flash-floods-without-rain-himalaya-trekking-safety|guide to Himalayan flash floods]] explains why a stream can surge with no rain overhead.",
          },
          {
            figure: {
              image: trekImage("pisang-peak-climbing", "01-manang-in-snow"),
              alt: "Flat-roofed houses in Pisang in Manang district under fresh snow, with pale mountain slopes rising behind the village.",
              caption:
                "Pisang in Manang under fresh snow. Cyclone snow is wet and heavy, which is what brings roofs down and loads avalanche slopes. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Protecting Paddy: A Short Note for Farmers",
        blocks: [
          {
            ul: [
              "<strong>Already cut:</strong> stack it under a tarpaulin with a ridge on top, raised off the ground; dry to below 14 percent moisture before storing.",
              "<strong>Still standing:</strong> open the field drains now; harvest early if the crop is within a week of ripe; don't fertilise or spray before heavy rain.",
              "<strong>After the water:</strong> drain within 24–48 hours, photograph the damage for insurance, and check terrace walls before walking animals back on them.",
            ],
          },
          {
            figure: {
              image: trekImage("khopra-danda-trek", "05-ghandruk-terrace-farming"),
              alt: "Terraced fields around Ghandruk held up by dry-stone walls, with roofs of the village below and forested hills behind.",
              caption:
                "Terraced farming at Ghandruk. In the hills the risk to a crop is also the wall that holds the field up. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "After Arnab Weakens: What Travellers Should Expect",
        blocks: [
          {
            p: "The rain stops before the danger does. Landslides peak 24 to 72 hours later, when the water table is highest, and rivers keep rising downstream for a day or two. Roads reopen in order of importance — valley highways first, rural roads last — and flights resume the morning after the cloud lifts, with a backlog that takes two or three days to clear.",
          },
          {
            p: "Trail and bridge assessments come from the district authorities and TAAN, not from social media. If you are booked in the first week of November, ask your agency for a written status update and be ready to switch routes. Clear skies usually follow the storm, with the best views of the season and the worst avalanche conditions of it.",
          },
        ],
      },
      {
        h2: "Where to Check Official Weather Updates and Emergency Contacts",
        blocks: [
          {
            table: {
              head: ["Source", "Use"],
              rows: [
                ["DHM — dhm.gov.np", "Forecasts and colour-coded warnings"],
                ["Flood Forecasting Division — hydrology.gov.np", "River levels and flood alerts"],
                ["NDRRMA — ndrrma.gov.np", "Incident reports and district alerts"],
                ["TAAN — taan.org.np", "Trek route status"],
                ["Home Ministry hotline 1234", "National disaster emergency"],
                ["Police 100 / Ambulance 102", "Rescue and medical help"],
              ],
            },
          },
          {
            p: "Save your embassy and insurer's assistance number too: helicopter evacuation needs authorisation, and that call is easier before the storm than during it.",
          },
        ],
      },
      {
        h2: "Insurance and Bookings",
        blocks: [
          {
            p: "A named cyclone counts as a known event, so cancellation cover bought after the storm was named is usually excluded. Check the natural-catastrophe wording, your altitude limit and whether helicopter evacuation is included. Airlines usually rebook rather than refund; keep every boarding pass and cancellation slip. Our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] covers what a trekking policy should include.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Cyclone Arnab going to hit Nepal directly?",
        answer:
          "No. The wind is spent over India. Nepal gets the remnant moisture: two to three days of heavy rain and high-mountain snow between 28 and 31 October 2026. The rain, on saturated ground, is the danger.",
      },
      {
        question: "Is it safe to trek during Cyclone Arnab?",
        answer:
          "Not on exposed high routes during the worst of it. Short, low treks near Pokhara are manageable with care. Passes above 4,000 m, the Annapurna Sanctuary and the eastern hills should wait a day or two. If you are already out, stay in a lodge rather than pushing on.",
      },
      {
        question: "Will flights to Lukla be cancelled?",
        answer:
          "Very likely on Thursday 29 and Friday 30 October, possibly Saturday. Lukla operates under visual flight rules and cannot be used in low cloud. Build two or three buffer days into your return.",
      },
      {
        question: "Which treks are worst affected?",
        answer:
          "Kanchenjunga, Everest and Khumbu, Langtang and Gosaikunda, the Annapurna Circuit and Sanctuary, and the Manaslu Circuit, where the lower valley is still damaged from the 11 October flood. Mustang, Dolpo and the far west should get much less rain.",
      },
      {
        question: "Should I postpone my trek?",
        answer:
          "If it starts before 1 November and involves a pass above 4,000 m, postponing three or four days is sensible. For a short low-altitude trek, travel with buffer days. Ask your agency for a written assessment.",
      },
      {
        question: "How long will the effects last?",
        answer:
          "Rain from 28 to 31 October, showers into 1 November. Landslides remain likely for 24–72 hours after it stops, rivers keep rising downstream for a day or two, and roads and trails can take a week to assess and repair.",
      },
      {
        question: "What are the emergency numbers in Nepal?",
        answer:
          "Police 100, ambulance 102, fire 101, and the Home Ministry disaster hotline 1234. Keep your embassy and insurer's assistance line as well — helicopter evacuation needs their authorisation.",
      },
      {
        question: "How do I protect my paddy crop?",
        answer:
          "Move cut paddy under cover and raise it off the ground; open field drains before the rain; harvest early if the crop is close to ripe. After the water goes down, drain within 24–48 hours and dry grain below 14 percent moisture before storing.",
      },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "langtang-valley-trek",
      "gosaikunda-lake-trek",
      "mardi-himal-trek",
    ],
    tripsNote:
      "Routes affected this week, and the low alternatives that stay open when the passes close. Ask us for the current status before booking.",
    relatedPosts: [
      "nepal-trekking-routes-status-october-2026",
      "kathmandu-to-pokhara-road-status-october-2026",
      "flash-floods-without-rain-himalaya-trekking-safety",
      "travel-insurance-for-trekking-in-nepal",
    ],
    tags: [
      "cyclone arnab",
      "nepal weather",
      "travel advisory",
      "trekking safety",
      "october 2026",
      "landslides",
      "flights",
    ],
    meta: {
      title: "Cyclone Arnab in Nepal 2026: Forecast, Impacts & Travel Advice",
      description:
        "Cyclone Arnab in Nepal: 28–31 October 2026 forecast, districts at risk, trek, flight and road advice, safety tips and emergency contacts for travellers.",
      keywords:
        "Cyclone Arnab in Nepal, Nepal weather forecast October 2026, cyclone impact on Nepal, Nepal trekking weather warning, heavy snowfall in Nepal, Nepal travel advisory, Nepal flood warning, trekking in Nepal October",
    },
  },
];
