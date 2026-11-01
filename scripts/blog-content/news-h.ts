import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 8: Cyclone Arnab clears, 31 October 2026.
 *
 * Written the afternoon the storm's effects began to ease. The weather facts
 * are attributed to DHM and the reports of 30 October; "we are open" is the
 * company's own news. Restricted-area treks are kept separate because no date
 * for permits to resume had been announced when it was written.
 */
export const newsH: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "cyclone-arnab-over-nepal-trekking-open-november-2026",
    title: "Cyclone Arnab Has Passed: We Are Open for Trekking in Nepal This November",
    cluster: "news",
    date: "2026-10-31",
    hero: {
      image: trekImage("annapurna-base-camp-trek", "00-annapurna-base-camp-perspective"),
      alt: "The ring of snow peaks around Annapurna Base Camp in clear weather.",
    },
    excerpt:
      "The rain and snow from Cyclone Arnab are clearing across Nepal from the afternoon of 31 October 2026, and Green Compass Treks is open for trekking again: Annapurna Base Camp, Everest Base Camp, the Annapurna Circuit, Manaslu and many more. What the storm did, what the trails are like now, and how to book.",
    intro: [
      {
        p: "<strong>Written on Saturday 31 October 2026, 15:00 Nepal Time.</strong> The rain and snow that Cyclone Arnab pushed into Nepal are clearing. The Department of Hydrology and Meteorology (DHM) said on Friday that the storm's effects would weaken gradually from Saturday afternoon, and the high-mountain warning that ran from 29 to 31 October ends today.",
      },
      {
        p: "<strong>We are open for trekking.</strong> Green Compass Treks is taking bookings and running treks again: the Annapurna Base Camp, Everest Base Camp, Annapurna Circuit and Manaslu Circuit treks that most of our guests come for, and every other route we run. You can see them all on our <a href=\"/treks\">treks page</a>. This post covers what the storm did, what the trails are like now that it has passed, and what to expect if you trek with us in November.",
      },
    ],
    sections: [
      {
        h2: "Cyclone Arnab in Nepal: What Happened",
        blocks: [
          {
            p: "Cyclone Arnab formed over the Bay of Bengal and was a powerful storm in India. By the time its remnants reached Nepal, DHM said, it had weakened into a strong low-pressure system, so its effects here (rain, snowfall and wind) were relatively mild. Our [[post:cyclone-arnab-in-nepal-2026-forecast-impacts-travel-advice|forecast briefing of 28 October]] set out what was expected. This is what actually happened.",
          },
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>When</strong>", "28–31 October 2026, easing from the afternoon of Saturday 31 October (DHM)"],
                ["<strong>Rain</strong>", "Light to moderate across Koshi, Madhesh, Bagmati, Gandaki and Lumbini. Highest 24-hour total: 50.2 mm at Roshi, Kavrepalanchok, to Friday morning"],
                ["<strong>Snow</strong>", "Heavy snow in high-lying areas, including fresh snow on the higher parts of the Kanchenjunga trail"],
                ["<strong>Trekkers sheltering</strong>", "About 250 domestic and foreign tourists in settlements and hotels across the Kanchenjunga region, mainly Olangchungola, Ghunsa and Yamphudin"],
                ["<strong>Incidents</strong>", "None reported in the Kanchenjunga district as of Friday, according to Chief District Officer Umesh Kumar Dahal"],
                ["<strong>Permits</strong>", "No new restricted-area permits for high-hill and Himalayan areas from 29 to 31 October (Department of Immigration notice of 27 October)"],
              ],
              note: "Figures as reported on 30 October 2026 by The Kathmandu Post (citing DHM) and ANI. Full sources are at the end of this article.",
            },
          },
          {
            p: "The worst of the disruption was in the far east. Hundreds of trekkers waited out the snow in lodges along the Kanchenjunga trail, and groups heading for Makalu Base Camp over the Lumbasumba Pass were held in Olangchungola. Elsewhere the storm brought wet days, cloud on the passes and a pause of a few days, which is what the [[post:nepal-suspends-high-altitude-trekking-permits-snowstorm-avalanche-warning|government warning]] asked for. Trekkers who stayed in their lodges and waited did the right thing.",
          },
        ],
      },
      {
        h2: "We Are Open: What That Means",
        blocks: [
          {
            p: "Being open means three things. We are taking new bookings for November and December. Treks that paused for the storm are restarting, with guides and porters back on the trail. And departures that were already booked are going ahead, with the route checked before each group sets out. How soon a trek can start depends on where it goes:",
          },
          {
            ul: [
              "<strong>Lower treks can start straight away.</strong> Routes that stay below the fresh snow, such as Ghorepani Poon Hill and the villages around Pokhara, need little more than a dry day and a road check.",
              "<strong>High routes restart after a conditions check.</strong> For Everest Base Camp, Annapurna Base Camp and the Annapurna Circuit, our guides check snow, trail and lodge conditions with people on the ground before the group goes high. In the first days of November that may mean an extra night lower down. It does not mean the trek is cancelled.",
              "<strong>Restricted-area treks restart when permits do.</strong> Manaslu, Tsum Valley, Nar Phu, Upper Mustang, Kanchenjunga and Upper Dolpo need a restricted-area permit from the Department of Immigration, and its notice stopped new permits from 29 to 31 October. As of this afternoon we have not seen an announcement of when it will start issuing them again. We will apply for our guests' permits as soon as it does, and let you know the same day.",
            ],
          },
          {
            p: "If you are not sure which of these applies to your trek, <a href=\"/contact\">ask us</a>. We reply within 24 hours.",
          },
        ],
      },
      {
        h2: "Our Most Popular Treks This Season",
        blocks: [
          {
            p: "Most people who write to us after a storm want one of four treks. Here is how each one looks this week.",
          },
          { h3: "Annapurna Base Camp Trek" },
          {
            p: "The [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] climbs the Modi Khola gorge to a ring of peaks at 4,130 m. It needs an ACAP permit and a TIMS card, not a restricted-area permit, so the Immigration notice did not apply to it. The one section that needs care after new snow is the stretch between Deurali and Machhapuchhre Base Camp, where avalanches come off the walls of the gorge. Our guides check with the lodges at Deurali before crossing it, and wait a day if the answer is unclear.",
          },
          { h3: "Everest Base Camp Trek" },
          {
            p: "The [[trek:everest-base-camp-trek|Everest Base Camp trek]] reaches 5,364 m at base camp, and climbs higher still for the view from Kala Patthar. It doesn't need a restricted-area permit either. The first hold-up after a storm is the flight to Lukla. Planes only fly in clear visibility, and when they restart there is a backlog of passengers to clear, so keep a spare day or two at the end of your trip. Above Dingboche, expect snow on the trail and colder nights than in a normal November.",
          },
          {
            figure: {
              image: trekImage("everest-base-camp-trek", "01-kala-patthar-38-everest-lhotse-nuptse-2007-gje"),
              alt: "Everest, Lhotse and Nuptse seen from Kala Patthar under a clear sky.",
              caption:
                "Everest, Lhotse and Nuptse from Kala Patthar. The clear days after a storm give some of the sharpest views of the season. Archive photograph.",
            },
          },
          { h3: "Annapurna Circuit Trek" },
          {
            p: "The [[trek:annapurna-circuit-trek|Annapurna Circuit]] crosses the Thorong La at 5,416 m. After heavy snow the pass can stay impassable for a day or more, until a trail is broken and the lodges at Thorong Phedi and High Camp start sending groups over. We cross when they do, not before. The long climb up the valley to Manang gives the pass time to settle before you reach it.",
          },
          {
            figure: {
              image: trekImage("annapurna-circuit-trek", "00-annapurna-range-between-ledar-and-thorong-phedi"),
              alt: "The Annapurna range seen from the trail between Ledar and Thorong Phedi on the Annapurna Circuit.",
              caption:
                "The trail between Ledar and Thorong Phedi, the last stage before the Thorong La. This is where the decision to cross is made. Archive photograph.",
            },
          },
          { h3: "Manaslu Circuit Trek" },
          {
            p: "The [[trek:manaslu-circuit-trek|Manaslu Circuit]] crosses the Larke La at 5,106 m. It is a restricted area, so it has to wait until permits are issued again. The route also follows the Budhi Gandaki, where the 11 October flood swept away houses and bridges on its first days; our [[post:budhi-gandaki-flood-october-2026-manaslu-trek-update|flood update]] has the details. If you have your heart set on Manaslu this autumn, book now and we will confirm the start date once the permits and the trail are both clear. If your dates are fixed, our [[post:manaslu-circuit-alternatives-autumn-2026|Manaslu alternatives guide]] lists routes with the same feel.",
          },
          {
            figure: {
              image: trekImage("manaslu-circuit-trek", "00-samagaun-village-manaslu-circuit-03"),
              alt: "Stone houses of Samagaun village on the Manaslu Circuit beneath snow-covered mountains.",
              caption:
                "Samagaun, the main village on the upper Manaslu Circuit. The route reopens to new trekkers when restricted-area permits are issued again. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "And Many More Treks",
        blocks: [
          {
            p: "Those four are the best known, but there are plenty more. All of these are running too, and several are good choices for the first week after a storm because they stay lower or lie in the rain shadow:",
          },
          {
            ul: [
              "[[trek:mardi-himal-trek|Mardi Himal]]: a short ridge trek from Pokhara with close views of Machhapuchhre.",
              "[[trek:poonhill-trek|Ghorepani Poon Hill]]: a few days below 3,210 m, ending with the classic sunrise over Dhaulagiri and the Annapurnas.",
              "[[trek:langtang-valley-trek|Langtang Valley]]: the closest big Himalayan valley to Kathmandu, up to Kyanjin Gompa.",
              "[[trek:gokyo-lake-trek|Gokyo Lakes]]: the quieter alternative to Everest Base Camp, with turquoise lakes and the view from Gokyo Ri.",
              "[[trek:khopra-danda-trek|Khopra Danda]]: a quiet ridge trek facing Dhaulagiri, staying in community lodges.",
              "[[trek:upper-mustang-trek|Upper Mustang]]: north of the Himalaya in the rain shadow and the least affected by the storm, available once restricted-area permits are issued again.",
            ],
          },
          {
            p: "<strong>Every trek we run is on our <a href=\"/treks\">treks page</a></strong>, with full itineraries. Tours and peak climbs have their own sections on the site.",
          },
        ],
      },
      {
        h2: "What to Expect on the Trail in Early November",
        blocks: [
          {
            ul: [
              "<strong>Clear skies and sharp views.</strong> The rain has washed the dust out of the air. Kathmandu's skyline was already clearer by Friday, and the first clear days after a storm are often the best mountain views of the season.",
              "<strong>Fresh snow up high.</strong> The peaks will be whiter than usual, and so will the high trails. Gaiters, microspikes and warm gloves are worth packing for any route that goes above about 4,000 m.",
              "<strong>Avalanche danger outlasts the storm.</strong> Slopes loaded with new snow stay unstable for a day or two after the sky clears. That is why the high sections wait for a check.",
              "<strong>Cold nights.</strong> Expect nights below freezing above about 3,500 m. If your sleeping bag is light, rent a four-season bag in Kathmandu or Pokhara.",
              "<strong>Flights and roads catch up.</strong> Lukla and Jomsom flights take a few days to clear their backlog, and wet slopes can still send landslides onto roads after the rain stops. Keep a buffer day at each end of the trip.",
              "<strong>Busy lodges for a few days.</strong> Trekkers who waited out the storm are on the move again, and November is the peak of the season. Popular lodges on the Everest and Annapurna routes may be full on the first clear nights.",
            ],
          },
        ],
      },
      {
        h2: "How to Book a Trek With Us Now",
        blocks: [
          {
            ol: [
              "<strong>Pick a trek.</strong> Browse every route on our <a href=\"/treks\">treks page</a>, or tell us how many days you have and what you want to see.",
              "<strong>Send us your dates.</strong> Use the booking form on the trek page or our <a href=\"/contact\">contact page</a>.",
              "<strong>Hear back about your route.</strong> We will tell you what conditions are like on your route for your dates, and whether a permit is still pending.",
              "<strong>Check your insurance.</strong> Make sure your policy covers helicopter rescue at the height your trek reaches. Our [[post:travel-insurance-for-trekking-in-nepal|travel insurance guide]] explains what to look for.",
            ],
          },
          {
            p: "If you postponed a trek with us because of the storm, write to us with your booking details and the dates you would like now, and we will arrange the new departure with you.",
          },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `The Kathmandu Post, 30 October 2026: ${source("https://kathmandupost.com/weather/2026/10/30/cyclone-arnab-s-impact-on-nepal-to-ease-from-saturday-afternoon", "Cyclone Arnab's impact on Nepal to ease from Saturday afternoon")}`,
              `The Tribune (ANI), 30 October 2026: ${source("https://www.tribuneindia.com/news/cyclone-arnab/cyclone-arnab-induced-weather-pattern-brings-snowfall-and-rain-in-nepal", "Cyclone Arnab-induced weather pattern brings snowfall and rain in Nepal")}`,
              "Department of Immigration, Government of Nepal: notice dated 27 October 2026 (Nepali original)",
              `Department of Hydrology and Meteorology: ${source("https://www.dhm.gov.np", "dhm.gov.np")} for current forecasts`,
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Cyclone Arnab over in Nepal?",
        answer:
          "Its effects are ending. The Department of Hydrology and Meteorology said the rain, snow and wind from the storm would weaken gradually from the afternoon of Saturday 31 October 2026. Showers can linger for a day in places, so check the local forecast for the area you are heading to.",
      },
      {
        question: "Is trekking open in Nepal now?",
        answer:
          "Yes, on most routes. Treks that need only national park or conservation area permits, such as Everest Base Camp, Annapurna Base Camp, the Annapurna Circuit, Poon Hill, Mardi Himal and Langtang, can restart as conditions allow. Restricted-area treks such as Manaslu and Upper Mustang have to wait until the Department of Immigration issues permits again, and when this was written it had not announced a date.",
      },
      {
        question: "Is Green Compass Treks running treks after the storm?",
        answer:
          "Yes. We are taking bookings and running treks again, and our guides check high routes before each group goes up. Every trek we run is listed at greencompasstreks.com/treks.",
      },
      {
        question: "Can I trek to Everest Base Camp in November 2026?",
        answer:
          "Yes. Everest Base Camp does not need a restricted-area permit, and November is one of the best months for it. Expect snow above Dingboche for the first days after the storm, and keep a spare day or two for Lukla flights, which only fly in clear visibility and take a few days to clear their backlog.",
      },
      {
        question: "Is the Annapurna Base Camp trek safe after the snowfall?",
        answer:
          "Most of the route is straightforward. The section between Deurali and Machhapuchhre Base Camp is prone to avalanches after fresh snow, so our guides check with the lodges at Deurali before crossing it and wait a day if conditions are unclear.",
      },
      {
        question: "Is the Thorong La pass open?",
        answer:
          "Check on the day. After heavy snow the Thorong La can stay impassable for a day or more, until a trail is broken. Our guides cross when the lodges at Thorong Phedi and High Camp start sending groups over, not before.",
      },
      {
        question: "Can I do the Manaslu Circuit now?",
        answer:
          "Not straight away. Manaslu is a restricted area, and new permits were suspended from 29 to 31 October. You can book now and we will confirm the start date once permits are issued again and we have checked the state of the trail along the Budhi Gandaki after the 11 October flood.",
      },
      {
        question: "Which treks are least affected by the storm?",
        answer:
          "Lower routes such as Ghorepani Poon Hill, Mardi Himal and the villages around Pokhara stay below the fresh snow. Upper Mustang lies in the rain shadow north of the Himalaya and saw the least weather, but it needs a restricted-area permit.",
      },
      {
        question: "Is November still a good month to trek in Nepal?",
        answer:
          "Yes. November is one of the two best trekking months in Nepal, with settled weather, clear views and dry trails in a normal year. The first days after a storm bring fresh snow and colder nights, but also some of the clearest air of the season.",
      },
      {
        question: "I postponed my trek because of the storm. What should I do now?",
        answer:
          "Write to us with your booking details and the dates you would like now. We will tell you the conditions on your route and arrange the new departure with you.",
      },
      {
        question: "Where can I see all the treks you offer?",
        answer:
          "Every trek we run is listed on our treks page at greencompasstreks.com/treks, with full itineraries. Tours and peak climbing have their own sections on the site.",
      },
    ],
    relatedTreks: [
      "annapurna-base-camp-trek",
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "manaslu-circuit-trek",
      "mardi-himal-trek",
      "poonhill-trek",
    ],
    tripsNote: "Our most popular treks, all open for bookings now that the storm has passed.",
    relatedPosts: [
      "cyclone-arnab-in-nepal-2026-forecast-impacts-travel-advice",
      "nepal-suspends-high-altitude-trekking-permits-snowstorm-avalanche-warning",
      "best-time-to-visit-nepal-trekking-seasons",
      "travel-insurance-for-trekking-in-nepal",
    ],
    tags: [
      "cyclone arnab",
      "nepal trekking news",
      "trekking open",
      "november 2026",
      "everest base camp",
      "annapurna base camp",
    ],
    meta: {
      title: "After Cyclone Arnab: We're Open for Trekking in Nepal",
      description:
        "Cyclone Arnab's rain and snow are clearing in Nepal from 31 October 2026. We are open: Annapurna Base Camp, Everest Base Camp, Annapurna Circuit, Manaslu and more.",
      keywords:
        "Cyclone Arnab Nepal, Nepal trekking open, trekking after Cyclone Arnab, Nepal trekking November 2026, Everest Base Camp trek November, Annapurna Base Camp trek, Annapurna Circuit Thorong La, Manaslu Circuit permit",
    },
  },
];
