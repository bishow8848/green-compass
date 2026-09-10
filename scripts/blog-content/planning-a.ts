import type { BlogContent } from "./build";

export const planningA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "best-time-to-visit-nepal-trekking-seasons",
    title: "Best Time to Visit Nepal: A Month-by-Month Trekking Guide",
    cluster: "planning",
    date: "2026-01-06",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-00-landscape-view-of-poon-hill",
      alt: "Sunrise over the Annapurna range from Poon Hill, Nepal.",
    },
    excerpt:
      "Nepal has two main trekking seasons and two that are widely misunderstood. This month-by-month guide explains what the weather, views, trail traffic, and lodge conditions are actually like through the year, and which routes work in the months everyone else avoids.",
    intro: [
      { p: "Nepal is trekkable in every month of the year — but not every trail is. The country runs from 60 m in the Terai to 8,848 m at the summit of Everest, and it has both a monsoon belt and a desert-dry rain shadow behind the main Himalayan chain. Pick the right region for the month and you can walk in clear weather in February or July. Pick the wrong one and you will spend a fortnight in cloud." },
      { p: "The short answer most people are looking for: <strong>October and November</strong> give the clearest mountain views of the year, and <strong>March to early May</strong> gives warmer days, flowering forest, and slightly hazier skies. Those are the two main seasons. What follows is the longer answer, month by month, with the routes that suit each one." },
      {
        figure: {
          image: "mardi-treks/poonhill-trek/poonhill-trek-03-160315-019-view-from-poon-hill",
          alt: "Sunrise over the mountains seen from Poon Hill, Nepal.",
          caption: "Sunrise from Poon Hill in March — spring brings warmth and flowering forest, with a little more haze on the horizon than autumn.",
        },
      },
    ],
    sections: [
      {
        h2: "Nepal's Four Trekking Seasons at a Glance",
        blocks: [
          { p: "Nepal's year divides into four distinct periods, and each one changes the trail experience more than the distance or the difficulty of the route does." },
          {
            table: {
              head: ["Season", "Months", "Conditions", "Best suited to"],
              rows: [
                ["Autumn", "Late September – November", "Clearest skies, stable weather, moderate temperatures, busiest trails", "Everything — this is peak season for every region"],
                ["Winter", "December – February", "Cold nights, short days, very clear air, quiet trails, snow on high passes", "Lower and mid-altitude treks, ridge viewpoints"],
                ["Spring", "March – mid May", "Warm days, rhododendron in bloom, increasing afternoon haze, busy", "All main regions, and the climbing season for high peaks"],
                ["Monsoon", "Mid June – mid September", "Heavy rain, cloud, leeches, landslide risk, flight delays", "Rain-shadow regions only: Upper Mustang, Dolpo, upper Manang"],
              ],
            },
          },
          { p: "If your dates are fixed and fall outside autumn and spring, you do not need to cancel the trip — you need to change the region. That is the single most useful thing to understand about trekking in Nepal." },
        ],
      },
      {
        h2: "Month-by-Month Breakdown",
        blocks: [
          {
            table: {
              head: ["Month", "What it is like", "Where we would send you"],
              rows: [
                ["January", "The coldest month. Brilliantly clear mornings, nights down to -15 °C above 4,000 m, some high lodges closed", "Poon Hill, Mardi Himal, Pikey Peak, Chitwan, Kathmandu Valley"],
                ["February", "Still cold but lengthening days, excellent visibility, trails very quiet", "Mardi Himal, Langtang Valley, Everest View treks, Pikey Peak"],
                ["March", "Warming fast, rhododendron opening from 2,000 m upward, strong season begins", "Annapurna Base Camp, Everest Base Camp, Langtang, Mardi Himal"],
                ["April", "The best month of spring. Full bloom, warm walking, peak climbing season", "Everest Base Camp, Annapurna Circuit, Island Peak, Mera Peak"],
                ["May", "Hot at low altitude, afternoon cloud builds, pre-monsoon haze by late month", "High-altitude routes, Upper Mustang, expedition summits"],
                ["June", "Monsoon arrives mid-month. Humid, wet, leeches in forest", "Upper Mustang, Upper Dolpo, Rara Lake"],
                ["July", "Wettest month. Flight delays routine, landslides on hill roads", "Upper Mustang, Dolpo, Nar Phu, upper Manang"],
                ["August", "Still wet, but monsoon flowers spectacular in the rain shadow", "Upper Mustang (Tiji is earlier), Dolpo, Gosaikunda at Janai Purnima"],
                ["September", "Rain eases from mid-month; the first clear windows arrive late", "Everest and Annapurna from about 25 September, Manaslu"],
                ["October", "The most reliable month of the year. Clear, stable, busy", "Everything — Everest Base Camp, Annapurna Circuit, Manaslu, Kanchenjunga"],
                ["November", "Clearest air of all, cooling steadily, still busy early in the month", "Everest Base Camp, Annapurna Base Camp, Langtang, Three Passes"],
                ["December", "Cold, very clear, quiet, high passes may close after snowfall", "Poon Hill, Mardi Himal, Everest View, Pikey Peak, Chitwan"],
              ],
            },
          },
        ],
      },
      {
        h2: "Autumn: The Most Reliable Season",
        blocks: [
          { p: "From the last week of September until the end of November, the monsoon has washed the dust out of the air and the winter systems have not yet arrived. Mornings are usually cloudless, afternoons stay clear well into the evening, and the settled weather means flights to Lukla and Jomsom run close to schedule. For high passes — Thorong La, Larke La, Cho La, Renjo La — this is the most dependable window of the year." },
          { p: "The trade-off is company. October is the busiest month on Nepal's trails, and on the classic routes you will share lodges and viewpoints. Two things help: start the day early, and choose a route one step off the main circuit. Instead of Poon Hill in mid-October, consider [[trek:khopra-danda-trek|Khopra Danda]] or [[trek:mohare-danda-trek|Mohare Danda]], which look at the same mountains from emptier ridges." },
          { p: "Autumn is also festival season. Dashain and Tihar fall in this window, which means villages are at their liveliest and Kathmandu at its quietest — worth planning around either way." },
        ],
      },
      {
        h2: "Spring: Flowers, Warmth, and the Climbing Season",
        blocks: [
          { p: "March to mid-May is the other main season, and on some trails it is the better one. The rhododendron forest between roughly 2,000 m and 3,500 m flowers from late March into April, and on the approach to [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] and along the [[trek:mardi-himal-trek|Mardi Himal ridge]] the display is genuinely one of the sights of Nepal rather than a pleasant extra." },
          { p: "Temperatures are kinder than autumn at altitude, which matters if you sleep badly in the cold, and the longer daylight gives more margin on big days. Spring is also the climbing season: almost every expedition on Everest, Lhotse, Annapurna, and Makalu runs in April and May, when the jet stream lifts off the summits." },
          { p: "The cost is clarity. From mid-April onward, haze and afternoon cloud build over the foothills, so distant panoramas are softer than in November. If your single priority is a sharp, cloudless horizon, go in autumn; if it is warmth, colour, and a living forest, go in spring." },
          {
            figure: {
              image: "mardi-treks/mardi-himal-trek-with-annapurna-base-camp/mardi-himal-trek-with-annapurna-base-camp-05-dense-rhododendron-forests-with-background-of-machapuchare-m",
              alt: "Dense rhododendron forest below Machhapuchhre in the Annapurna region, Nepal.",
              caption: "Rhododendron forest under Machhapuchhre. The bloom moves uphill through late March and April, so a higher trail can still be in flower when a lower one has finished.",
            },
          },
        ],
      },
      {
        h2: "Winter: Cold Nights, Perfect Air, Empty Trails",
        blocks: [
          { p: "Winter is the most underrated season in Nepal. December and January deliver the most transparent air of the year, the trails are quiet enough that you will have viewpoints to yourself, and lodge prices are soft. The limits are real but manageable: nights fall well below freezing above 3,500 m, daylight is short, and heavy snowfall can close high passes for days at a time." },
          { p: "The answer is to stay below about 4,000 m and walk ridges rather than cross passes. [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek|Mardi Himal]], [[trek:pikey-peak-trek|Pikey Peak]], and the lower Langtang valley all work well in winter with a warm sleeping bag. What we would not book in January is Thorong La on the [[trek:annapurna-circuit-trek|Annapurna Circuit]] or the Everest [[trek:everest-three-pass-trek|Three Passes]] route, where a single storm can leave a group stuck on the wrong side." },
        ],
      },
      {
        h2: "Monsoon: Go North of the Himalaya",
        blocks: [
          { p: "From mid-June to mid-September, most of Nepal is wet. Trails are slippery, forest sections have leeches, mountain views come in brief gaps, road landslides are common, and domestic flights are unreliable. For the classic teahouse routes it is the one period we genuinely advise against." },
          { p: "But the main Himalayan chain blocks the monsoon. Behind it, [[trek:upper-mustang-trek|Upper Mustang]], [[trek:upper-dolpo-trek|Upper Dolpo]], [[trek:nar-phu-valley-trek|Nar Phu]], and upper Manang stay dry and walkable through the summer. These are high desert landscapes — ochre cliffs, walled Tibetan-Buddhist villages, barley fields in flood — and July is one of the most beautiful times to be there. Monsoon is also when the high meadows of [[trek:rara-lake-trek|Rara Lake]] are green and in flower." },
          { p: "One caution: reaching these regions usually means a flight to Jomsom or Juphal, and those flights are weather-dependent even in the rain shadow. Build one or two spare days into any monsoon itinerary." },
        ],
      },
      {
        h2: "How to Choose Your Month",
        blocks: [
          { p: "Work backwards from what matters most to you:" },
          {
            ul: [
              "<strong>Sharpest mountain views:</strong> late October and November.",
              "<strong>Warmth and flowers:</strong> late March and April.",
              "<strong>Solitude:</strong> December, February, and the first half of September.",
              "<strong>A high pass crossing:</strong> October, November, April, or early May.",
              "<strong>Summit a trekking peak:</strong> April–May or October–November.",
              "<strong>Travelling in July or August:</strong> Upper Mustang, Dolpo, or Nar Phu — nothing south of the divide.",
              "<strong>Lowest prices and quietest lodges:</strong> winter, outside the Christmas and New Year fortnight.",
            ],
          },
          { p: "Whatever month you land on, altitude matters more than the calendar for how cold you will be at night. Our [[post:nepal-trekking-packing-list|packing list]] breaks the layers down by elevation band rather than by season, which is the more useful way to think about it." },
        ],
      },
    ],
    faqs: [
      { question: "What is the single best month to trek in Nepal?", answer: "October. The monsoon has cleared the air, the weather is settled, temperatures are comfortable at every altitude, and every region is open. The only real drawback is how many other people have reached the same conclusion — book lodges and internal flights early for October departures." },
      { question: "Can I trek in Nepal during the monsoon?", answer: "Yes, but only in the rain-shadow regions north of the main Himalayan chain — Upper Mustang, Upper and Lower Dolpo, Nar Phu, and upper Manang. These areas stay dry and are at their most beautiful in July and August. Teahouse routes south of the divide, including Everest Base Camp and Annapurna Base Camp, are not worth it in those months." },
      { question: "Is December too cold for trekking?", answer: "Not for routes below about 4,000 m. December has superb visibility and very quiet trails. You need a sleeping bag rated to around -10 °C, a proper down jacket, and the acceptance that nights will be genuinely cold. Poon Hill, Mardi Himal, Pikey Peak, and the lower Langtang valley all work well." },
      { question: "Does it rain during the main trekking seasons?", answer: "Occasionally. Autumn usually brings one or two unsettled spells, often linked to late cyclones in the Bay of Bengal, and spring brings afternoon showers that build through April and May. Carry a waterproof shell and a pack cover in every season." },
      { question: "When is the rhododendron in bloom?", answer: "From the last week of March through April, starting around 2,000 m and moving steadily uphill. By early May the bloom has finished low down but may still be going at 3,300 m, so a higher trail can still be in flower when a lower one has dropped its petals." },
      { question: "Which months are best for climbing a trekking peak?", answer: "April to mid-May and October to November. Island Peak, Mera Peak, and Lobuche East all have their most settled conditions in those windows. Winter ascents are possible but significantly colder and windier, and permit fees are lower for a reason." },
      { question: "How far ahead should I book for October or November?", answer: "Three to six months is comfortable for teahouse routes, and earlier if your trip includes a Lukla flight or a restricted-area permit. Peak-season lodges at Gorak Shep, Annapurna Base Camp, and High Camp fill first, and restricted-area permits require paperwork that cannot be rushed." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "mardi-himal-trek",
      "annapurna-circuit-trek",
      "upper-mustang-trek",
      "langtang-valley-trek",
    ],
    tripsNote: "Routes that suit the seasons described above, all run with licensed local guides and our own lodge bookings.",
    relatedPosts: [
      "monsoon-trekking-in-nepal-where-to-go",
      "winter-trekking-in-nepal-best-routes",
      "nepal-trekking-packing-list",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["nepal trekking", "trekking seasons", "trip planning", "best time to visit"],
    meta: {
      title: "Best Time to Visit Nepal: Month-by-Month Trekking Guide",
      description: "When to trek in Nepal, month by month — autumn clarity, spring blooms, winter solitude, and the rain-shadow routes that work right through the monsoon.",
      keywords: "best time to visit Nepal, Nepal trekking seasons, trekking in Nepal by month, autumn trekking Nepal, monsoon trekking Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-trekking-permits-explained",
    title: "Nepal Trekking Permits Explained: TIMS, Park Fees, and Restricted Areas",
    cluster: "planning",
    date: "2026-01-09",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-00-enroute-to-kyanjin-gompa",
      alt: "The trail to Kyanjin Gompa in Langtang National Park, Nepal.",
    },
    excerpt:
      "Every trek in Nepal needs paperwork, and the rules differ by region. This guide explains the TIMS card, national park and conservation area fees, municipal charges, and the restricted-area permits that require an agency — with current costs and who arranges what.",
    intro: [
      { p: "Permits are the part of planning a Nepal trek that generates the most confusion and the least useful information online, partly because the rules genuinely change and partly because they differ from one valley to the next. There is no single national trekking permit. What you need depends on which protected area you enter, which municipality you pass through, and whether the region is classified as restricted." },
      { p: "This guide sets out the whole system — what each document is, roughly what it costs, where it is issued, and which parts we handle for you. Fees are revised by the Nepal Tourism Board, the Department of Immigration, and individual municipalities from time to time, so treat the figures here as a planning guide and confirm the current amount with us before you pay anything." },
    ],
    sections: [
      {
        h2: "The Three Layers of Nepali Trekking Paperwork",
        blocks: [
          { p: "Almost every trek needs documents from one or more of three layers:" },
          {
            ol: [
              "<strong>A trekker registration card (TIMS)</strong> — the Trekkers' Information Management System card, issued jointly by the Nepal Tourism Board and the Trekking Agencies' Association of Nepal. It exists so that rescuers know who is on which trail.",
              "<strong>A protected-area entry fee</strong> — a national park, conservation area, or wildlife reserve ticket for the area your route crosses.",
              "<strong>A local or restricted-area permit</strong> — either a rural municipality charge collected at the trailhead, or, in sensitive border regions, a restricted-area permit issued only to organised groups through a registered agency.",
            ],
          },
          { p: "A teahouse trek in Annapurna needs layers one and two. A trek into [[trek:upper-mustang-trek|Upper Mustang]] needs all three, and the third costs more than the rest of the trek's paperwork combined." },
        ],
      },
      {
        h2: "Protected-Area Entry Fees by Region",
        blocks: [
          { p: "These are the park and conservation area fees that cover the great majority of Nepal's trekking routes. All are per person, single entry, and payable in Nepali rupees." },
          {
            table: {
              head: ["Area", "Covers", "Typical fee for foreign nationals"],
              rows: [
                ["Annapurna Conservation Area (ACAP)", "Annapurna Base Camp, Annapurna Circuit, Mardi Himal, Poon Hill, Tilicho, Khopra, Nar Phu, Mustang", "NPR 3,000"],
                ["Sagarmatha National Park", "Everest Base Camp, Gokyo, Three Passes, Everest trekking peaks", "NPR 3,000 plus 13% VAT"],
                ["Khumbu Pasang Lhamu Rural Municipality", "The Khumbu, collected at Lukla or Monjo instead of TIMS", "NPR 2,000"],
                ["Langtang National Park", "Langtang Valley, Gosaikunda, Tamang Heritage Trail", "NPR 3,000"],
                ["Manaslu Conservation Area (MCAP)", "Manaslu Circuit, Tsum Valley", "NPR 3,000"],
                ["Makalu Barun National Park", "Makalu Base Camp, Sherpani Col", "NPR 3,000"],
                ["Kanchenjunga Conservation Area", "Kanchenjunga Circuit and base camps", "NPR 2,000"],
                ["Shey Phoksundo National Park", "Lower and Upper Dolpo, Phoksundo Lake", "NPR 3,000"],
                ["Rara National Park", "Rara Lake", "NPR 3,000"],
                ["Chitwan / Bardia National Park", "Jungle safari and wildlife tours", "NPR 2,000 per entry day"],
              ],
              note: "Indicative fees for foreign nationals. SAARC nationals pay substantially less, and children under ten are usually exempt. Confirm current rates before travel.",
            },
          },
          { p: "Note the Khumbu line. Since 2018, trekkers entering the Everest region pay a rural municipality fee collected locally rather than a TIMS card, which is why advice about Everest permits written before that date is misleading." },
        ],
      },
      {
        h2: "Restricted-Area Permits",
        blocks: [
          { p: "Several border regions are classified as restricted. Entry requires a special permit that is issued only to a group of two or more trekkers travelling with a registered Nepali agency and a licensed guide. You cannot buy one as an individual, and the fee is charged per person per day or per week." },
          {
            table: {
              head: ["Restricted region", "Permit cost (indicative, USD)", "Also requires"],
              rows: [
                ["Upper Mustang (Lo Manthang)", "500 for 10 days, then 50 per extra day", "ACAP"],
                ["Upper Dolpo", "500 for 10 days, then 50 per extra day", "Shey Phoksundo National Park fee"],
                ["Lower Dolpo", "20 per week", "Shey Phoksundo National Park fee"],
                ["Manaslu (Jagat to Dharapani)", "100 per week Sep–Nov, 75 per week Dec–Aug", "MCAP and ACAP"],
                ["Tsum Valley", "40 per week Sep–Nov, 30 per week Dec–Aug", "MCAP"],
                ["Nar Phu", "100 per week Sep–Nov, 75 per week Dec–Aug", "ACAP"],
                ["Kanchenjunga", "20 per week", "Kanchenjunga Conservation Area fee"],
                ["Humla / Limi Valley", "50 for 7 days, then 10 per extra day", "Regional conservation fee"],
              ],
            },
          },
          { p: "The group-of-two rule is the one that catches solo travellers. In practice, agencies can sometimes pair a lone trekker with another booking, or issue paperwork against a second name; ask us early rather than assuming it is impossible, because the options depend on the region and the season." },
        ],
      },
      {
        h2: "Do You Need a Guide?",
        blocks: [
          { p: "Since 1 April 2023, the Nepal Tourism Board has required trekkers in national parks and protected areas to be accompanied by a licensed guide, ending the era of fully independent teahouse trekking. Enforcement varies by region and checkpoint — the Khumbu has applied it more loosely than Annapurna or Langtang — but the rule is on the books and checkpoints can and do turn people back." },
          { p: "In restricted areas the requirement has never been optional: a licensed guide and a registered agency are conditions of the permit itself. Our [[post:guides-and-porters-in-nepal-rules-and-costs|guide and porter guide]] covers what a guide actually does for you, what the going rates are, and how the porter arrangement works." },
        ],
      },
      {
        h2: "What You Need to Provide, and What We Handle",
        blocks: [
          { p: "For a booked trip, we arrange every permit in the list above before you start walking. What we need from you is short:" },
          {
            ul: [
              "A clear colour scan of your passport photo page, valid at least six months beyond your return date.",
              "Two to four passport-sized photographs — bring spares; they get used for permits, park tickets, and climbing paperwork.",
              "Your Nepal visa details once you have arrived, or your visa-on-arrival receipt.",
              "Travel insurance details, including the policy number, altitude cover, and the insurer's 24-hour emergency number.",
              "For restricted areas, your original passport for a day while the permit is issued in Kathmandu.",
            ],
          },
          { p: "Permits for restricted regions are processed through the Department of Immigration in Kathmandu and cannot be issued on the trail or at a weekend, so they set the earliest possible start date for those treks. For Upper Mustang, Dolpo, Manaslu, or Nar Phu, plan to be in Kathmandu at least one full working day before departure." },
          { p: "Carry your permits with you at all times, in a waterproof sleeve. Checkpoints record every trekker passing through, and that register is what a rescue team works from if a group is overdue." },
        ],
      },
      {
        h2: "Common Permit Mistakes",
        blocks: [
          {
            ul: [
              "<strong>Assuming one permit covers a combined route.</strong> A trek linking Manaslu to Annapurna crosses three fee areas and needs paperwork for each.",
              "<strong>Buying a TIMS card for the Khumbu.</strong> The Everest region uses a local municipality fee instead — pay it at Lukla or Monjo.",
              "<strong>Turning up for a restricted area as a solo trekker.</strong> The permit legally requires a group of two or more with a registered agency.",
              "<strong>Underestimating extra days.</strong> Restricted-area permits are priced per day or per week; adding a rest day in Lo Manthang costs USD 50.",
              "<strong>Letting a permit expire mid-trek.</strong> The clock starts on the date you declare, not the date you walk in, so an itinerary that slips can leave you unpermitted at the last checkpoint.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Do I still need a TIMS card in 2026?", answer: "For most regions, yes — the TIMS card remains part of the paperwork and is arranged through a registered agency for organised groups. The notable exception is the Everest region, where a Khumbu Pasang Lhamu Rural Municipality fee collected at Lukla or Monjo replaced TIMS in 2018. We issue whichever applies to your route." },
      { question: "Can I get trekking permits on arrival in Nepal?", answer: "National park and conservation area fees can be paid in Kathmandu or Pokhara, or at the entry checkpoint for some areas. Restricted-area permits must be processed through the Department of Immigration in Kathmandu on a working day and require your original passport, so they need at least one day before departure." },
      { question: "How much should I budget for permits?", answer: "For a standard teahouse trek in Annapurna, Everest, or Langtang, roughly NPR 5,000 to 6,000 in total, which is included in our package prices. Restricted areas are a different order of magnitude: Upper Mustang or Upper Dolpo alone is USD 500 per person for ten days before any park fee." },
      { question: "Is trekking alone in Nepal legal?", answer: "Since April 2023 trekkers in national parks and protected areas have been required to trek with a licensed guide, so fully independent trekking is no longer permitted in those areas. Enforcement varies between regions, but checkpoints can refuse entry. In restricted areas a guide and a registered agency have always been mandatory." },
      { question: "What happens if I lose my permit on the trail?", answer: "Tell your guide immediately. Checkpoints keep their own records, and your agency holds copies of every document, so a replacement can usually be arranged — but it is far easier if you photograph all your permits before you start and keep the images offline on your phone." },
      { question: "Do children need permits?", answer: "Children under ten are generally exempt from national park and conservation area fees, and discounted or exempt from TIMS. Restricted-area permits normally apply regardless of age. Send us your family's ages when you enquire and we will confirm the exact cost." },
      { question: "Are permit fees refundable if I cancel or turn back?", answer: "No. Park fees, TIMS, and restricted-area permits are non-refundable once issued, including if weather, illness, or a flight cancellation stops the trek. This is one of several reasons to carry trip-cancellation cover alongside medical and evacuation cover." },
    ],
    relatedTreks: [
      "manaslu-circuit-trek",
      "upper-mustang-trek",
      "nar-phu-valley-trek",
      "kanchenjunga-circuit-trek",
      "upper-dolpo-trek",
    ],
    tripsNote: "Restricted-area routes where the permit can only be issued through a registered agency — we handle the entire process.",
    relatedPosts: [
      "restricted-area-trekking-permits-in-nepal",
      "guides-and-porters-in-nepal-rules-and-costs",
      "how-much-does-trekking-in-nepal-cost",
      "nepal-visa-on-arrival-guide",
    ],
    tags: ["nepal trekking permits", "TIMS card", "restricted area permit", "trip planning"],
    meta: {
      title: "Nepal Trekking Permits Explained: TIMS, Park Fees, Restricted Areas",
      description: "Which permits you need for every trekking region in Nepal, what they cost, where they are issued, and which ones require a registered agency and a licensed guide.",
      keywords: "Nepal trekking permits, TIMS card Nepal, ACAP permit, Sagarmatha National Park fee, restricted area permit Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "altitude-sickness-in-nepal-prevention-and-treatment",
    title: "Altitude Sickness in Nepal: Prevention, Symptoms, and Treatment",
    cluster: "planning",
    date: "2026-01-13",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-01-kala-patthar-38-everest-lhotse-nuptse-2007-gje",
      alt: "Everest, Lhotse and Nuptse from Kala Patthar at 5,545 m, Everest Base Camp trek, Nepal.",
    },
    excerpt:
      "Altitude sickness is the single most common reason a Nepal trek ends early — and it is almost entirely preventable with the right ascent profile. Here is how acclimatisation works, what the warning signs are, and what to do at each stage.",
    intro: [
      { p: "Fitness does not protect you from altitude sickness. Age does not predict it, and neither does previous experience — people who have been to 5,000 m without trouble can be hit on their next trip. The only reliable protections are a sensible ascent rate, enough fluid, and the discipline to act on early symptoms instead of walking through them." },
      { p: "Acute mountain sickness (AMS) is common above 3,000 m and usually mild. Its two dangerous forms, high-altitude pulmonary oedema (HAPE) and high-altitude cerebral oedema (HACE), are rare but can be fatal within hours. Every guide we send out is trained to recognise all three, but you should be able to recognise them too — you will notice your own symptoms long before anyone else does." },
      { p: "This article is general information for trip planning, not medical advice. Talk to a travel health clinic or a doctor who knows high-altitude medicine before your trek, especially if you have a heart or lung condition, are pregnant, or take regular medication." },
    ],
    sections: [
      {
        h2: "What Altitude Does to You",
        blocks: [
          { p: "Air at 5,364 m — Everest Base Camp — holds a little over half the oxygen available at sea level. Your body responds by breathing faster and deeper, raising your heart rate, producing more red blood cells, and changing your blood chemistry. Those adaptations take days, not hours. Altitude sickness is what happens when you climb faster than your physiology can follow." },
          { p: "The useful number to remember is <strong>sleeping altitude</strong>. You can walk up to a high viewpoint and come back down the same day with no ill effect — that is how acclimatisation days work. What your body reacts to is where you spend the night." },
          {
            table: {
              head: ["Altitude", "Oxygen available vs sea level", "What trekkers notice"],
              rows: [
                ["2,500 m", "About 74%", "Mild breathlessness on climbs, slightly broken sleep"],
                ["3,500 m", "About 64%", "Noticeably slower pace, poorer sleep, reduced appetite"],
                ["4,500 m", "About 57%", "Headache common, every task feels like effort"],
                ["5,400 m", "About 51%", "Short breath at rest, very poor sleep, no appetite"],
              ],
            },
          },
        ],
      },
      {
        h2: "The Acclimatisation Rules That Matter",
        blocks: [
          { p: "Every well-designed Nepal itinerary is built around a small set of rules. If a schedule you are offered breaks them, that is a reason to question the schedule." },
          {
            ol: [
              "<strong>Above 3,000 m, raise your sleeping altitude by no more than 300–500 m per night.</strong> Our Everest and Annapurna itineraries are built on this, which is why they look slower than the fastest trips on the market.",
              "<strong>Take a rest day every 3–4 days, or every 1,000 m of gain.</strong> Namche Bazaar at 3,440 m and Dingboche at 4,410 m exist in the schedule for exactly this reason.",
              "<strong>Climb high, sleep low.</strong> On a rest day, walk several hundred metres above your lodge and come back down. It is more useful than sitting still.",
              "<strong>Drink three to four litres a day.</strong> Dry air and fast breathing dehydrate you much more than the temperature suggests.",
              "<strong>Walk slowly enough to hold a conversation.</strong> If you cannot, you are going too fast for the altitude, regardless of your fitness.",
              "<strong>Avoid alcohol and sleeping pills above 3,000 m.</strong> Both suppress breathing at night, which is when acclimatisation happens.",
            ],
          },
          { p: "Our [[trek:everest-base-camp-trek|Everest Base Camp]] itinerary, for instance, holds two full acclimatisation days — one at Namche and one at Dingboche — and climbs to a viewpoint on each. That is the difference between a trip that succeeds and one that turns around at Lobuche." },
        ],
      },
      {
        h2: "Recognising the Symptoms",
        blocks: [
          { p: "AMS usually begins 6 to 12 hours after arriving at a new altitude. A headache is the cardinal symptom; the rest varies." },
          {
            table: {
              head: ["Severity", "Symptoms", "Action"],
              rows: [
                ["Mild AMS", "Headache, nausea, tiredness, poor sleep, reduced appetite, mild dizziness", "Stop ascending. Rest, hydrate, simple painkillers. If it clears, continue next day."],
                ["Moderate AMS", "Headache not relieved by painkillers, vomiting, weakness, breathlessness at rest", "Descend at least 500 m the same day. Do not go higher."],
                ["HACE (brain)", "Confusion, loss of coordination, stumbling, irrational behaviour, severe headache, drowsiness", "Immediate descent, oxygen, dexamethasone, evacuate. Life-threatening."],
                ["HAPE (lungs)", "Breathlessness at rest, wet cough, pink or frothy sputum, crackling in the chest, blue lips", "Immediate descent, oxygen, nifedipine. Life-threatening."],
              ],
            },
          },
          { p: "The single most useful field test for HACE is the heel-to-toe walk: ask the person to walk a straight line placing each heel against the toe of the other foot. A trekker who cannot do this when they could yesterday needs to go down now, at night if necessary." },
          { p: "Descent is the treatment for all of it. Drugs and oxygen buy time; losing altitude is what actually fixes the problem. A drop of 500–1,000 m usually brings dramatic improvement." },
        ],
      },
      {
        h2: "Acetazolamide and Other Medication",
        blocks: [
          { p: "Acetazolamide (Diamox) speeds acclimatisation by mildly acidifying the blood, which drives deeper breathing. A common preventive dose is 125 mg twice daily, started a day before going above 3,000 m; your own doctor should set the dose and confirm it suits you. Expect tingling in the fingers and toes, more frequent urination, and flat-tasting fizzy drinks. It is a sulfonamide, so it matters if you have a sulfa allergy." },
          { p: "Dexamethasone and nifedipine are treatment drugs for HACE and HAPE, not preventives. Our guides carry them on high-altitude trips, along with a pulse oximeter and, on climbing trips and high passes, bottled oxygen. Do not self-medicate with either and continue climbing — the drug masks the symptom while the underlying condition worsens." },
          { p: "Ibuprofen or paracetamol is fine for an altitude headache. Do not use sleeping tablets, and go easy on antihistamines for the same reason." },
        ],
      },
      {
        h2: "Evacuation and Insurance",
        blocks: [
          { p: "Above the road head there is no ambulance. Serious altitude illness means walking or riding down if the patient can move, and a helicopter if they cannot. Helicopter operators in Nepal dispatch against a guarantee of payment, which in practice means an insurance policy that explicitly covers <strong>helicopter evacuation at the maximum altitude of your route</strong>." },
          { p: "Many standard travel policies cap cover at 3,000 m, which excludes almost every trek in this catalogue. Check the altitude clause, not the marketing copy — our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] walks through exactly what to look for and the altitude each region demands." },
          {
            figure: {
              image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-06-everest-base-camp-trek-0156",
              alt: "Tents and glacial moraine at Everest Base Camp, Nepal Himalaya.",
              caption: "Everest Base Camp at 5,364 m. Every well-built itinerary to this point includes two acclimatisation days lower down the valley.",
            },
          },
        ],
      },
      {
        h2: "Which Treks Carry the Most Altitude Risk",
        blocks: [
          { p: "Risk tracks both the maximum altitude and how fast the route gets there." },
          {
            ul: [
              "<strong>Highest risk:</strong> routes crossing 5,000 m passes — the [[trek:everest-three-pass-trek|Everest Three Passes]], Thorong La on the [[trek:annapurna-circuit-trek|Annapurna Circuit]], Larke La on the [[trek:manaslu-circuit-trek|Manaslu Circuit]] — and any trekking-peak ascent.",
              "<strong>Moderate risk:</strong> [[trek:everest-base-camp-trek|Everest Base Camp]], [[trek:gokyo-lake-trek|Gokyo]], [[trek:tilicho-lake-trek|Tilicho Lake]], [[trek:makalu-base-camp-trek|Makalu Base Camp]] — high, but with gradual profiles and rest days built in.",
              "<strong>Low risk:</strong> [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] at 4,130 m, [[trek:langtang-valley-trek|Langtang Valley]], [[trek:mardi-himal-trek|Mardi Himal]] — high enough for mild AMS, low enough that descent is always quick.",
              "<strong>Minimal risk:</strong> [[trek:poonhill-trek|Poon Hill]], [[trek:pikey-peak-trek|Pikey Peak]], and the Kathmandu Valley rim, all below 4,100 m with short approaches.",
            ],
          },
          { p: "One route deserves a special warning: a helicopter tour that lands at Kala Patthar or Gorak Shep takes you from 1,400 m to above 5,300 m in under an hour. Operators keep landings short for exactly that reason. If you have a heart or lung condition, discuss a heli tour with a doctor before booking." },
        ],
      },
    ],
    faqs: [
      { question: "At what altitude does altitude sickness start?", answer: "Symptoms are uncommon below 2,500 m and become increasingly likely above 3,000 m. On Nepal's main teahouse routes, most trekkers first notice something around Namche Bazaar (3,440 m) or Manang (3,519 m) — usually a mild headache and broken sleep that settles within a day." },
      { question: "Does being fit protect me from altitude sickness?", answer: "No. Fitness helps you walk comfortably but has no bearing on how well you acclimatise. In practice very fit trekkers are sometimes at greater risk because they climb faster than the group and outpace their own adaptation." },
      { question: "Should I take Diamox on my trek?", answer: "Many trekkers do, particularly on routes with rapid altitude gain or a 5,000 m pass. It speeds acclimatisation rather than masking symptoms, which is why it is considered useful rather than risky. Discuss it with your own doctor before the trip — it is a prescription drug, and a sulfa allergy rules it out." },
      { question: "What is the first thing to do if I get a headache at altitude?", answer: "Stop ascending, drink water, eat something, and take paracetamol or ibuprofen. Tell your guide — not at dinner, but when it starts. If the headache clears overnight you can usually continue. If it does not, or if vomiting or unsteadiness appears, you descend." },
      { question: "How quickly does descending help?", answer: "Quickly. Most trekkers with moderate AMS feel substantially better after losing 500 to 1,000 m, often within a few hours. That is why our itineraries always have a lower lodge within reach, and why our guides would rather lose a day than a trek." },
      { question: "Can I still reach Everest Base Camp if I get mild AMS?", answer: "Often yes. Mild AMS at Namche or Dingboche that settles with a rest day is common and not a reason to abandon the trek. What ends a trip is pushing upward while symptoms persist — the conditions that do real harm almost always start as symptoms that were ignored." },
      { question: "Do your guides carry oxygen and a pulse oximeter?", answer: "On high-altitude treks and all climbing trips, yes — a pulse oximeter, a comprehensive first aid kit, and emergency medication, with bottled oxygen on peak climbs and high-pass crossings. Guides take twice-daily oxygen saturation readings above 4,000 m so a downward trend is caught before it becomes a problem." },
      { question: "Is a helicopter tour to Everest Base Camp risky at that altitude?", answer: "It is a rapid ascent, so landings at Kala Patthar or Gorak Shep are kept to a few minutes and breakfast stops are made lower down at Syangboche. Most people feel nothing more than light-headedness, but anyone with a heart or lung condition, or who is pregnant, should take medical advice before booking." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "manaslu-circuit-trek",
      "tilicho-lake-trek",
      "island-peak-climbing",
    ],
    tripsNote: "High-altitude routes where our itineraries build in the acclimatisation days described above.",
    relatedPosts: [
      "travel-insurance-for-trekking-in-nepal",
      "everest-base-camp-trek-altitude-profile",
      "how-to-train-for-a-nepal-trek",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["altitude sickness", "AMS", "trekking safety", "nepal trekking", "acclimatisation"],
    meta: {
      title: "Altitude Sickness in Nepal: Prevention, Symptoms and Treatment",
      description: "How acclimatisation works on Nepal's trails, the ascent rules that prevent altitude sickness, how to recognise AMS, HAPE and HACE, and what to do at each stage.",
      keywords: "altitude sickness Nepal, AMS symptoms trekking, acclimatisation Everest Base Camp, HAPE HACE, Diamox trekking",
    },
  },
];
