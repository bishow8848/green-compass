import type { BlogContent } from "./build";

export const remoteA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dhaulagiri-circuit-trek-guide",
    title: "Dhaulagiri Circuit Trek: The Complete Guide",
    cluster: "remote",
    date: "2027-02-06",
    hero: {
      image: "mardi-treks/dhaulagiri-circuit-trek/dhaulagiri-circuit-trek-00-dhaulagiri-tukuche-dhampus",
      alt: "Dhaulagiri I above the Tukuche and Dhampus skyline, Nepal Himalaya.",
    },
    excerpt:
      "The hardest of Nepal's classic routes: eighteen days around an 8,000 m peak with no teahouses above Dobang, three nights on the Chhonbardan Glacier, and two 5,000 m passes into Hidden Valley. Route, difficulty, cost, kit, and who it actually suits.",
    intro: [
      { p: "The Dhaulagiri Circuit is the only trek in Nepal that circles an 8,000 m mountain entirely on foot, and it is the one classic route where the word <em>expedition</em> is not marketing. There are no lodges above Dobang, no road to bail out to, and no phone signal for a week. Once the group climbs onto the Chhonbardan Glacier the only ways out are forward over two 5,000 m passes or back down the Myagdi valley, and both take days." },
      { p: "What you get for that commitment is the south face of <strong>Dhaulagiri I (8,167 m)</strong> — four vertical kilometres of it — from a tent pitched on the ice beneath it, and then a crossing into Hidden Valley, a closed basin at 5,050 m that almost nobody sees. The trek finishes in the apple orchards of Marpha in the Kali Gandaki, which means you walk off a glacier one day and are handed a slice of apple pie the next." },
      {
        figure: {
          image: "mardi-treks/dhaulagiri-circuit-trek/dhaulagiri-circuit-trek-01-dhaulagiri-himal",
          alt: "The snow-covered summit of Dhaulagiri in the Nepal Himalaya.",
          caption: "Dhaulagiri I, 8,167 m — the seventh-highest mountain in the world, and the one this trek walks all the way around.",
        },
      },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "18 days Kathmandu to Kathmandu, 13 of them walking"],
                ["Highest point", "French Pass, 5,360 m"],
                ["Highest night", "Hidden Valley, 5,050 m"],
                ["Difficulty", "Difficult — a full camping expedition, not a teahouse trek"],
                ["Best seasons", "April to May, October to November"],
                ["Accommodation", "Teahouses to Dobang, then tents for the rest"],
                ["Access", "Road to Darbang, out by road from Jomsom"],
                ["Permits", "ACAP and trekking registration — no restricted-area permit"],
                ["Price", "From USD 2,250 per person"],
              ],
            },
          },
          { p: "We run it as an [[trek:dhaulagiri-circuit-trek|18-day camping expedition]] from Kathmandu. If the full circuit is more than you want, the [[trek:churen-himal-base-camp-trek|Churen Himal Base Camp trek]] reaches comparable remoteness on the western end of the same massif with no glacier travel." },
        ],
      },
      {
        h2: "The Route, Stage by Stage",
        blocks: [
          { h3: "Darbang to Dobang (1,110 m to 2,520 m) — days 3 to 6" },
          { p: "Road to the Darbang roadhead via Pokhara and Beni, then four days up the Myagdi Khola through Dharapani, Muri and Boghara. This is settled middle-hill country at first — Magar villages, terraces, suspension bridges — but the valley closes in day by day and the trail gets rougher. <strong>Dobang is the last inhabited place</strong>; beyond it there are no villages, no lodges and no supplies until Marpha." },
          { h3: "Dobang to Dhaulagiri Base Camp (2,520 m to 4,750 m) — days 7 to 11" },
          { p: "The biggest single climb of the approach takes you 1,100 m to <strong>Italian Base Camp (3,660 m)</strong>, above the treeline and in full view of the mountain. A full acclimatisation day there — walking to about 4,100 m and coming back down — pays for itself over the pass a week later." },
          { p: "Then the group steps onto the ice. <strong>Glacier Camp (4,210 m)</strong> and <strong>Dhaulagiri Base Camp (4,750 m)</strong> are both pitched on the Chhonbardan Glacier's moraine and then the ice itself: loose rock, meltwater channels, and rockfall noise through the night. A second acclimatisation day at Base Camp is the one that decides whether the French Pass goes well or badly." },
          { h3: "The French Pass and Hidden Valley (5,360 m / 5,050 m) — day 12" },
          { p: "The crux. You leave camp in the dark to be on the pass before the wind gets up. The climb is long rather than steep — a sustained grind on snow and scree — and the <strong>French Pass (5,360 m)</strong> opens onto Hidden Valley, a flat, closed basin ringed by Sita Chuchura, Tukuche Peak and Thapa Peak. Camp at 5,050 m is the highest and coldest night of the trek, and the wind rarely stops." },
          {
            figure: {
              image: "mardi-treks/dhaulagiri-circuit-trek/dhaulagiri-circuit-trek-04-flickr-don-macauley-in-the-hidden-valley-sita-chuchura",
              alt: "Sita Chuchura seen from Hidden Valley on the Dhaulagiri Circuit trek in Nepal.",
              caption: "Hidden Valley at 5,050 m. A closed basin between the two passes — no drainage out, no shelter, and the highest camp of the trek.",
            },
          },
          { h3: "Dhampus Pass to Marpha (5,290 m to 2,670 m) — days 13 to 15" },
          { p: "A second pass, <strong>Dhampus (5,290 m)</strong>, known locally as Thapa Bhanjyang, and then the longest descent of the trek: roughly 1,600 m to Yak Kharka in an afternoon, on loose ground that punishes tired knees. The following day drops into the <strong>Kali Gandaki</strong> at Marpha — whitewashed Thakali village, apple orchards, a monastery above the rooftops, and the first hot shower in two weeks. An easy final walk to Jomsom, then out by road." },
        ],
      },
      {
        h2: "How Hard Is It, Really?",
        blocks: [
          { p: "This is the hardest trek we run that does not involve a rope and a summit. No technical climbing is required, but the grade comes from a combination of things that individually would be manageable and together are not:" },
          {
            ul: [
              "<strong>Thirteen consecutive walking days</strong> with no road access and no rest day that is not also an acclimatisation day.",
              "<strong>Three nights camped on a glacier</strong> at 4,210 m and 4,750 m, plus a night at 5,050 m in Hidden Valley.",
              "<strong>Two passes over 5,250 m</strong> in consecutive days, both crossed on snow with crampons and a fixed rope where needed.",
              "<strong>A 1,600 m descent</strong> off the Dhampus Pass in a single afternoon, which is where most people's legs give out.",
              "<strong>Cold.</strong> Nights at Base Camp and Hidden Valley routinely hit -15 °C and can reach -20 °C, with wind on top of that.",
            ],
          },
          { p: "You do not need mountaineering experience, but you should have completed a multi-day trek above 4,000 m before booking this one. Our [[post:nepal-trek-difficulty-grades-explained|difficulty grades guide]] explains how we score routes, and the [[post:how-to-train-for-a-nepal-trek|training plan]] covers the descent strength this route demands more than most." },
        ],
      },
      {
        h2: "Best Time to Go",
        blocks: [
          { p: "The usable windows are narrow, and narrower than on a teahouse trek because the passes hold snow and the glacier camps are genuinely cold." },
          {
            table: {
              head: ["Season", "Conditions"],
              rows: [
                ["April to May", "The stronger window. Stable weather, passes generally open, rhododendron through the forest belt on the approach. Warmer nights on the glacier."],
                ["October to November", "Clear air and the best mountain views, but colder. By mid-November Hidden Valley nights are brutal and an early snowfall can close the French Pass."],
                ["December to March", "Not run. The passes are snowbound and the glacier camps are unsurvivable without full winter equipment."],
                ["June to September", "Monsoon. The Myagdi approach is leech country, the trail is unstable, and there is nothing to see."],
              ],
            },
          },
          { p: "Build a spare day into your flights either way. If the French Pass is loaded with new snow your guide will wait at Base Camp rather than cross, and if it stays closed the group retraces the Myagdi valley — which adds three days." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          { p: "The price is driven by the support crew rather than by lodging. On a fully camped route the team — guide, assistant guide, cook, kitchen crew and porters for tents, food and group equipment — is usually larger than the trekking group itself, and every kilo of food for thirteen days is carried in from the roadhead." },
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 trekker", "USD 2,375"],
                ["2 to 4", "USD 2,350"],
                ["5 to 7", "USD 2,325"],
                ["8 to 10", "USD 2,300"],
                ["11 to 14", "USD 2,275"],
                ["15 and over", "USD 2,250"],
              ],
              note: "Prices are per person, Kathmandu to Kathmandu, and fall as the group grows because the crew and camp cost is shared.",
            },
          },
          { p: "Budget on top of that for personal kit, travel insurance that covers helicopter evacuation above 5,000 m, and tips. There is almost nothing to spend money on between Darbang and Marpha — no lodges, no shops, no charging fees — so trail extras are far lower than on a teahouse route. Our [[post:how-much-does-trekking-in-nepal-cost|cost guide]] breaks down the wider picture." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          { p: "Everything below is in the package price:" },
          {
            ul: [
              "Airport pickup and drop-off in Kathmandu.",
              "Private transport Kathmandu–Pokhara–Kathmandu, and Pokhara–Darbang and Jomsom–Pokhara.",
              "Hotel accommodation in Kathmandu and Pokhara with breakfast.",
              "Teahouse accommodation on the lower trail, and <strong>two-person tents, mess tent, toilet tent and all group camping equipment</strong> above Dobang.",
              "A cook and full kitchen crew for the camping section.",
              "Three meals a day throughout the trek.",
              "Annapurna Conservation Area Permit and trekking registration.",
              "A licensed English-speaking guide, plus an assistant guide.",
              "<strong>Crampons, ice axe and fixed rope</strong> for the French and Dhampus Pass crossings.",
              "Group trekking map, first aid kit carried by the guide, and all government taxes and service charges.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          { p: "Plan and budget for these separately:" },
          {
            ul: [
              "International flights to and from Nepal, and the Nepal entry visa fee.",
              "<strong>Travel insurance including emergency helicopter evacuation</strong> — mandatory on this route, not optional.",
              "Personal trekking equipment and clothing, including a bag rated to -15 °C or lower.",
              "Porter services, which are available at additional cost if you would rather not carry a daypack.",
              "Lunch and dinner in Kathmandu and Pokhara.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and other personal expenses.",
              "Tips for the guide, crew and drivers.",
              "Any extra accommodation or transport caused by weather, a closed pass, or anything else outside the itinerary.",
            ],
          },
          { p: "That last line matters more here than on other trips. Build the cost of two or three unplanned days into your budget before you go, and see our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] for what a policy actually needs to cover at this altitude." },
        ],
      },
      {
        h2: "Life Above Dobang: Kit, Power and Waste",
        blocks: [
          { p: "The thirteen days between the roadhead and Marpha are self-contained, and a few practicalities catch people out." },
          {
            ul: [
              "<strong>Power.</strong> Patchy NTC signal as far as Boghara, then nothing until Marpha. No mains power between Dobang and Marpha. Bring a large power bank or a small solar panel, and sleep with batteries inside your bag — cold flattens them overnight.",
              "<strong>Washing.</strong> A bowl of warm water in the morning. There are no showers between Darbang and Marpha, which is roughly ten days.",
              "<strong>Toilets.</strong> The crew pitches a toilet tent at every camp and carries all waste off the glacier.",
              "<strong>Your load.</strong> Only a daypack, seven to ten kilos. Porters carry your duffel, capped at 15 kg, along with tents, food and kitchen.",
              "<strong>Sleeping bag.</strong> Rated to -15 °C or lower, with an insulated mat. This is a requirement rather than a suggestion.",
            ],
          },
          { p: "The [[post:nepal-trekking-packing-list|packing list]] covers the general kit; add crampon-compatible boots, proper gaiters and a windproof shell layer for the pass days." },
        ],
      },
    ],
    faqs: [
      { question: "Do I need mountaineering experience for the Dhaulagiri Circuit?", answer: "No technical climbing experience is required, but this is not a first Himalayan trek. You should have completed a multi-day trek above 4,000 m before booking. The French and Dhampus passes involve walking on snow in crampons with a fixed rope in places, and your guide covers that before the crossing." },
      { question: "How long is the Dhaulagiri Circuit trek?", answer: "Eighteen days Kathmandu to Kathmandu, of which thirteen are walking days. The itinerary includes two acclimatisation days, one at Italian Base Camp at 3,660 m and one at Dhaulagiri Base Camp at 4,750 m, and neither can be dropped without significantly raising the risk on the French Pass." },
      { question: "What happens if the French Pass is closed by snow?", answer: "Your guide checks conditions from Dhaulagiri Base Camp and will wait a day rather than cross in bad weather. If the pass stays closed the group retraces the Myagdi valley to Darbang, which adds about three days. Build spare days into your flights and budget for the possibility." },
      { question: "How cold does it get on the Dhaulagiri Circuit?", answer: "Night-time temperatures at Dhaulagiri Base Camp and Hidden Valley routinely fall to -15 °C and can reach -20 °C, and wind on the passes makes it feel considerably colder. A sleeping bag rated to -15 °C or lower and an insulated mat are required rather than recommended." },
      { question: "Are there teahouses on the Dhaulagiri Circuit?", answer: "Only as far as Dobang at 2,520 m. Above that the trek is fully camped — two-person tents, a mess tent and a toilet tent, with a cook and kitchen crew travelling with the group. All of that equipment and every day's food is included in the package and carried from the roadhead." },
      { question: "Which permits do I need for the Dhaulagiri Circuit?", answer: "The Annapurna Conservation Area Permit and the standard trekking registration, both included in your package and arranged by our team. Dhaulagiri is not a restricted area, so no restricted-area permit and no minimum group size apply." },
      { question: "Is there mobile signal or a way to charge devices?", answer: "There is patchy NTC signal as far as Boghara and nothing again until Marpha. There is no mains power between Dobang and Marpha. Bring a large power bank or a small solar panel, keep batteries inside your sleeping bag overnight, and tell people at home you will be out of contact for roughly ten days." },
      { question: "Can the Dhaulagiri Circuit be shortened?", answer: "Not meaningfully. Once the group is above Dobang the only ways out are forward over the passes or back down the Myagdi valley, and both take several days. If you have less time, the Khopra Danda or Mohare Danda routes give high Dhaulagiri views on a teahouse trail in under a week." },
    ],
    relatedTreks: [
      "dhaulagiri-circuit-trek",
      "churen-himal-base-camp-trek",
      "putha-hiunchuli-expedition",
      "khopra-danda-trek",
      "jomsom-muktinath-trek",
    ],
    tripsNote: "The full circuit, plus the shorter and less committing ways to see the same mountain.",
    relatedPosts: [
      "churen-himal-base-camp-trek-guide",
      "off-the-beaten-path-treks-in-nepal",
      "nepal-trek-difficulty-grades-explained",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "khopra-danda-trek-guide",
    ],
    tags: ["Dhaulagiri", "Remote Treks", "Camping Treks", "High Passes", "Trek Guides"],
    meta: {
      title: "Dhaulagiri Circuit Trek: The Complete Guide",
      description:
        "An 18-day camping expedition around Dhaulagiri I over the French Pass (5,360 m) and Dhampus Pass. Route, difficulty, season, cost, inclusions and kit.",
      keywords:
        "dhaulagiri circuit trek, french pass, hidden valley nepal, dhampus pass, dhaulagiri base camp, camping trek nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "churen-himal-base-camp-trek-guide",
    title: "Churen Himal Base Camp Trek: The Complete Guide",
    cluster: "remote",
    date: "2027-02-10",
    hero: {
      image: "mardi-treks/churen-himal-base-camp-trek/churen-himal-base-camp-trek-00-dhorpatan-dhorpatan-hunting-reserve-sunrise",
      alt: "Sunrise over the Dhorpatan Hunting Reserve, western Nepal.",
    },
    excerpt:
      "Sixteen days through Nepal's only hunting reserve to a base camp with three 7,000 m peaks in view. A fully camped trek at the western end of the Dhaulagiri massif that most seasons sees a handful of parties. Route, cost, permits and wildlife.",
    intro: [
      { p: "Churen Himal is a 7,371 m peak that has been climbed only a handful of times, and its base camp sits three vertical kilometres below the summit on empty moraine. Getting there means sixteen days, twelve of them under canvas, across the <strong>Jaljala Pass (3,414 m)</strong> and through the <strong>Dhorpatan Hunting Reserve</strong> — the only reserve of its kind in Nepal." },
      { p: "What makes the trip worth the effort is the view from the camp: Churen Himal (7,371 m) straight above you, <strong>Gurja Himal (7,193 m)</strong> to the east and <strong>Putha Hiunchuli (7,246 m)</strong> to the north. Three seven-thousanders from one tent door, and in most seasons nobody else there to share them with." },
      {
        figure: {
          image: "mardi-treks/churen-himal-base-camp-trek/churen-himal-base-camp-trek-02-churen-himal",
          alt: "Churen Himal rising above the approach valleys in western Nepal.",
          caption: "Churen Himal, 7,371 m. The base camp at 4,500 m sits on moraine almost directly below this face.",
        },
      },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "16 days Kathmandu to Kathmandu"],
                ["Highest point", "Churen Himal Base Camp, 4,500 m"],
                ["Difficulty", "Challenging — fully camped, no glacier travel"],
                ["Best seasons", "April to May, October to November"],
                ["Accommodation", "Hotels in Kathmandu and Pokhara, tents on the trek"],
                ["Access", "Road to Darbang via Pokhara and Beni, return the same way"],
                ["Permits", "Dhorpatan Hunting Reserve entry permit and trekking registration"],
                ["Price", "From USD 2,150 per person"],
              ],
            },
          },
          { p: "We run this as a [[trek:churen-himal-base-camp-trek|16-day camping trek]]. It shares its first three walking days with the [[trek:dhaulagiri-circuit-trek|Dhaulagiri Circuit]] before turning west at Lumsum, so the two make a natural pair of choices at either end of the same massif." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Darbang to Lumsum (1,110 m to 2,240 m)" },
          { p: "Road from Kathmandu via Pokhara and Beni to the roadhead at Darbang, then two days up the Myagdi Khola through Dharapani and Muri — Magar villages, suspension bridges and terraced hillsides, with more ascent and descent than the net gain suggests. At Lumsum the route leaves the Myagdi and turns south-west on an old trading route between the two valleys." },
          { h3: "Over the Jaljala Pass into Dhorpatan (3,414 m to 2,900 m)" },
          { p: "A long, steady climb through rhododendron and then fir forest, breaking out above the treeline onto open grass. The <strong>Jaljala Pass (3,414 m)</strong> is a broad grassy saddle rather than a rocky col, and the descent beyond it opens into country that looks more Tibetan than Himalayan: a flat-bottomed valley, pine on the slopes, and stock grazing on the floor. Dhorpatan itself is the reserve settlement." },
          { h3: "Dhorpatan to Churen Himal Base Camp (2,900 m to 4,500 m)" },
          { p: "North out of the grasslands along the Uttar Ganga through pine and birch, on a herders' route that is rough in places, to <strong>Gurjaghat (3,200 m)</strong>. Then the big day: 1,300 m of climbing, leaving the trees at around 3,700 m and continuing through alpine scrub onto open moraine. There is no path in the ordinary sense for the last section — your guide picks the line." },
          { p: "A full exploration day at the base camp is what the eight days of walking were for. The morning walk climbs the moraine ridge west of camp to around <strong>4,800 m</strong> for the fuller view along the western Dhaulagiri wall and down the glacier system feeding the valley." },
          {
            figure: {
              image: "mardi-treks/churen-himal-base-camp-trek/churen-himal-base-camp-trek-04-gurja-himal",
              alt: "Gurja Himal seen from the Dhorpatan side, western Nepal.",
              caption: "Gurja Himal, 7,193 m, east of the base camp — one of three 7,000 m peaks visible from the same spot.",
            },
          },
          { h3: "The return" },
          { p: "Back down the valley to Gurjaghat and Dhorpatan, east over the Jaljala Pass again — gentler from this direction, on open grass most of the way — and down through Muri to the roadhead at Darbang. The view from the top of the pass on the way out is the last of the big mountains: Dhaulagiri, Churen and Gurja together." },
        ],
      },
      {
        h2: "Difficulty and Who It Suits",
        blocks: [
          { p: "Graded challenging. There is no glacier travel, no technical ground and no pass above 3,500 m, which makes it materially easier than the Dhaulagiri Circuit — but it is a long way from help, and that is the real grade." },
          {
            ul: [
              "<strong>Twelve walking days</strong>, most of them five to seven hours, with one 1,300 m climb to the base camp and the same in descent.",
              "<strong>Twelve nights camping</strong> with no lodges, shops or resupply anywhere on the route.",
              "<strong>Maximum 4,500 m</strong> at base camp, reached gradually, so altitude is manageable — but nights there drop to -10 °C and lower in November.",
              "<strong>No road access and no evacuation point</strong> between Darbang and the base camp. Helicopter evacuation is possible but weather-dependent.",
            ],
          },
          { p: "If you want the remoteness without the glacier nights and the two 5,000 m passes of the [[post:dhaulagiri-circuit-trek-guide|Dhaulagiri Circuit]], this is the trek that gets you there. Read our [[post:off-the-beaten-path-treks-in-nepal|guide to Nepal's quieter trails]] for how it compares with the other genuinely empty routes." },
        ],
      },
      {
        h2: "The Dhorpatan Hunting Reserve and Its Wildlife",
        blocks: [
          { p: "Dhorpatan was established in 1987 and is the only hunting reserve in Nepal. A limited number of licensed permits are issued each year for blue sheep and Himalayan tahr. For trekkers it functions as a protected area of grassland, pine forest and high pasture — and because so few people walk through it, the wildlife is unusually visible." },
          {
            ul: [
              "<strong>Blue sheep</strong> are common in the reserve and on the slopes below the base camp.",
              "<strong>Himalayan tahr, musk deer and Himalayan black bear</strong> are all present.",
              "<strong>Snow leopard</strong> live in the upper valleys, though sightings are rare.",
              "<strong>Pheasants and raptors</strong> through the forest belt are exceptional, particularly in spring.",
            ],
          },
          { p: "Carry binoculars. The open grassland approach means you can glass slopes from a long way off, which is not true on most Nepali trekking routes." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          { p: "As with any fully camped route, the price reflects the crew rather than the accommodation. A licensed guide, an assistant guide, a cook and kitchen crew, and porters for tents, food and group equipment travel with you for twelve days, and everything they carry comes in from the roadhead." },
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 trekker", "USD 2,275"],
                ["2 to 4", "USD 2,250"],
                ["5 to 7", "USD 2,225"],
                ["8 to 10", "USD 2,200"],
                ["11 to 14", "USD 2,175"],
                ["15 and over", "USD 2,150"],
              ],
              note: "Per person, Kathmandu to Kathmandu. The camp and crew cost is shared, so the per-head price drops as the group grows.",
            },
          },
          { p: "On-trail spending is close to zero — there are no lodges, shops or charging fees between Darbang and the base camp. Budget instead for personal kit, insurance with helicopter cover, and tips for a crew that is larger than the trekking group." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport pickup and drop-off in Kathmandu.",
              "Private transport Kathmandu–Pokhara–Kathmandu, and private jeep Pokhara–Darbang and back.",
              "Hotel accommodation in Kathmandu and Pokhara with breakfast.",
              "<strong>Two-person tents, mess tent, toilet tent and all group camping equipment</strong>, plus teahouse nights where available on the lower trail.",
              "A cook and kitchen crew for the full camping section.",
              "Three meals a day throughout the trek.",
              "Dhorpatan Hunting Reserve entry permit and trekking registration.",
              "A licensed English-speaking guide and an assistant guide.",
              "Group trekking map, first aid kit carried by the guide, and all government taxes, permit fees and service charges.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "<strong>Travel insurance including emergency helicopter evacuation</strong>, which is essential on a route this far from a road.",
              "Personal trekking equipment and clothing, including a bag rated to -15 °C and an insulated mat.",
              "Porter services for your personal duffel, available at additional cost.",
              "Lunch and dinner in Kathmandu and Pokhara.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for guides, drivers and support staff.",
              "Extra accommodation or transport caused by weather or anything else outside the itinerary.",
            ],
          },
          { p: "Mobile coverage is patchy at Darbang and Dhorpatan and absent in between, so expect to be out of contact for most of the trek. Tell people at home before you leave the road." },
        ],
      },
      {
        h2: "Extending the Route",
        blocks: [
          { p: "Dhorpatan is a junction as much as a destination, and two extensions are worth considering at the booking stage rather than on the trail." },
          {
            ul: [
              "<strong>West into Rukum</strong>, following the [[trek:guerrilla-trek|Guerrilla Trek]] route through the old Maoist heartland — roughly a week extra.",
              "<strong>North-east towards Putha Hiunchuli base camp</strong> and the western end of the Dhaulagiri massif, also around a week, and a natural pairing if the [[trek:putha-hiunchuli-expedition|Putha Hiunchuli expedition]] is a longer-term goal.",
            ],
          },
          { p: "Both need extra permits, food and crew planned in advance, so tell us before you book rather than after you arrive." },
        ],
      },
    ],
    faqs: [
      { question: "What is the Dhorpatan Hunting Reserve?", answer: "The only hunting reserve in Nepal, established in 1987, where a limited number of licensed permits are issued each year for blue sheep and Himalayan tahr. For trekkers it functions as a protected area of grassland, pine forest and high pasture, and the wildlife is unusually visible because so few people pass through." },
      { question: "Do I need a special permit for the Churen Himal trek?", answer: "The Dhorpatan Hunting Reserve entry permit and standard trekking registration, both included in your package. It is not a restricted area, so no minimum group size applies, but a licensed guide and a supported crew are essential in practice because there is no lodging on the route." },
      { question: "How high is Churen Himal Base Camp and how cold does it get?", answer: "Around 4,500 m. Night-time temperatures fall to -10 °C in the main seasons and lower in November, with wind coming off the glacier. There is no shelter beyond your tent, which is why a bag rated to -15 °C and an insulated mat are on the required list rather than the suggested one." },
      { question: "Will we see Churen Himal clearly from the base camp?", answer: "Yes, from the base camp and from the pastures below it. Churen at 7,371 m rises almost three kilometres above camp, with Gurja Himal at 7,193 m to the east and Putha Hiunchuli at 7,246 m to the north. Mornings are clearest; cloud usually builds by early afternoon." },
      { question: "How does this compare with the Dhaulagiri Circuit?", answer: "The Dhaulagiri Circuit crosses two 5,000 m passes and includes three nights of glacier camps, and is significantly harder. Churen Himal reaches a similar sense of remoteness with no glacier travel and a lower maximum altitude, which makes it the better option if you want the emptiness without the technical commitment." },
      { question: "What wildlife might we see on the Churen Himal trek?", answer: "Blue sheep are common in the reserve and on the slopes below base camp, and Himalayan tahr, musk deer and Himalayan black bear are all present. Snow leopard live in the upper valleys. The pheasant and raptor life through the forest belt is exceptional, particularly in spring. Bring binoculars." },
      { question: "How do we get to the trailhead?", answer: "A drive from Kathmandu to Pokhara, then a second day west through Beni to the roadhead at Darbang, the last section on a rough hill road. There is no flight option, which is one of the reasons the area stays quiet." },
      { question: "Can the Churen Himal trek be extended?", answer: "Yes. From Dhorpatan the trail continues west into Rukum on the Guerrilla Trek route, or north-east towards Putha Hiunchuli base camp at the western end of the Dhaulagiri massif. Both add roughly a week and need to be planned at the booking stage for permits, food and crew." },
    ],
    relatedTreks: [
      "churen-himal-base-camp-trek",
      "dhaulagiri-circuit-trek",
      "guerrilla-trek",
      "putha-hiunchuli-expedition",
      "khopra-danda-trek",
    ],
    tripsNote: "Western Dhaulagiri and the routes that connect to it from Dhorpatan.",
    relatedPosts: [
      "dhaulagiri-circuit-trek-guide",
      "off-the-beaten-path-treks-in-nepal",
      "guerrilla-trek-guide",
      "nepal-trekking-permits-explained",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["Churen Himal", "Dhorpatan", "Remote Treks", "Camping Treks", "Wildlife"],
    meta: {
      title: "Churen Himal Base Camp Trek: The Complete Guide",
      description:
        "A 16-day camping trek through the Dhorpatan Hunting Reserve to a base camp below three 7,000 m peaks. Route, difficulty, wildlife, permits and costs.",
      keywords:
        "churen himal base camp trek, dhorpatan hunting reserve, gurja himal, putha hiunchuli, remote trek nepal, jaljala pass",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "ganesh-himal-trek-guide",
    title: "Ganesh Himal Trek: The Complete Guide",
    cluster: "remote",
    date: "2027-02-13",
    hero: {
      image: "mardi-treks/ganesh-himal-trek/ganesh-himal-trek-00-ganesh-himal-from-deurali",
      alt: "The Ganesh Himal massif seen from Deurali, central Nepal.",
    },
    excerpt:
      "A wilderness crossing between the Langtang and Manaslu ranges, over the Singla Pass at 4,600 m, within a day's drive of Kathmandu. Thirteen days through Tamang villages and empty high country that almost no trekkers reach. Route, cost and what to expect.",
    intro: [
      { p: "The Ganesh Himal sits directly between Langtang and Manaslu, and almost nobody walks under it. The range is named after the elephant-headed god, it is visible from the rim of the Kathmandu Valley on any clear morning, and the trail that crosses beneath it sees fewer trekkers in a season than Poon Hill sees in a day." },
      { p: "The route follows old trading and grazing paths from Trishuli Bazar over the <strong>Singla Pass (4,600 m)</strong>, traverses high open country to the Pangsang saddle, then drops through the old mining settlement of Somdang to the Tamang village of Gatlang and out at Syabrubesi. There is no permanent lodging for much of it, so this is a supported camping trek — which is exactly why it has stayed empty." },
      {
        figure: {
          image: "mardi-treks/ganesh-himal-trek/ganesh-himal-trek-06-ganesh-himal-air-view",
          alt: "Ganesh Himal seen from the trail on the Ganesh Himal trek.",
          caption: "The Ganesh Himal massif. Close enough to Kathmandu to see from the valley rim, and almost untouched by trekking traffic.",
        },
      },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "13 days Kathmandu to Kathmandu"],
                ["Highest point", "Singla Pass, 4,600 m"],
                ["Difficulty", "Moderate — long days and a big pass, no technical ground"],
                ["Best seasons", "April to May, October to November"],
                ["Accommodation", "Tents on the high sections, teahouses lower down"],
                ["Access", "Road to Trishuli Bazar, out by road from Syabrubesi"],
                ["Permits", "Langtang National Park entry permit and trekking registration"],
                ["Price", "From USD 850 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:ganesh-himal-trek|13-day trek]] from Kathmandu. It finishes at Syabrubesi, the same roadhead used by the [[trek:langtang-valley-trek|Langtang Valley trek]] and the [[trek:tamang-heritage-trek|Tamang Heritage trail]], so the two combine well if you have the days." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Trishuli Bazar to Kharani Odar (1,200 m to 2,800 m)" },
          { p: "A half-day drive north-west out of the valley — stop at Kakani on a clear morning for the line of Ganesh, Langtang and Manaslu along the horizon — then three days climbing a ridge system north. The first day is as much cultural as scenic: Tamang and Brahmin-Chhetri villages, water mills, irrigation channels, terraces of rice, maize and millet worked entirely by hand, on a working trail rather than a trekking route." },
          { p: "Above 2,000 m the terraces give out and proper forest takes over — oak and rhododendron thick with moss, then increasingly pine. This is good wildlife country precisely because so few people come through: langur in the canopy, pheasants and laughingthrushes, and the Himalayan monal if you are lucky." },
          { h3: "The Singla Pass (4,600 m)" },
          { p: "The hardest day of the trek by a wide margin: an <strong>1,800 m ascent</strong> from Kharani Odar to the pass. It starts before dawn, climbs steeply through the last rhododendron, breaks out above the treeline around 3,500 m into juniper scrub and grass, and gives out to stone and scree above 4,000 m. The final approach is a slog on loose ground and the pace slows markedly with altitude. Your guide will set a deliberately conservative pace." },
          { h3: "The high traverse to Pangsang (4,600 m to 3,800 m)" },
          { p: "The best sustained mountain views of the trek. The trail follows ridgelines rather than dropping into valleys, so the panorama stays open all day — the Ganesh peaks close and dominant, <strong>Manaslu (8,163 m)</strong> west and the Langtang range east in clear weather. Blue sheep are sometimes on the slopes. A rest day at the Pangsang saddle sits on the divide between the two ranges and is one of the great viewpoints of the region." },
          {
            figure: {
              image: "mardi-treks/ganesh-himal-trek/ganesh-himal-trek-03-dhading-muralibhanjyang-02",
              alt: "Ridge country above Muralibhanjyang in Dhading, on the Ganesh Himal trek.",
              caption: "Ridge walking on the high traverse. The route stays on the crests rather than dropping into valleys, so the views stay open all day.",
            },
          },
          { h3: "Somdang to Syabrubesi (3,300 m to 1,460 m)" },
          { p: "Off the ridges into the Somdang Khola valley, where juniper and stunted rhododendron reappear after days of bare alpine ground. The area was historically <strong>mined for zinc and lead</strong>, and remnants of the old workings and access tracks are still visible — an unexpected piece of industrial history in an otherwise empty landscape. Then Gatlang, one of the most traditional Tamang villages in the region, and out to the road at Syabrubesi." },
        ],
      },
      {
        h2: "How Hard Is It?",
        blocks: [
          { p: "Graded moderate, but that grade hides an unusually demanding single day. The Singla Pass climb is 1,800 m of ascent in one push, which is more than almost any day on the Everest or Annapurna trails." },
          {
            ul: [
              "<strong>Six to eight hours</strong> on most walking days, and considerably more on the pass day.",
              "<strong>1,800 m in one ascent</strong> to the Singla Pass — the crux of the trek, and the reason an early start is non-negotiable.",
              "<strong>Several nights above 3,500 m</strong> with a rest and acclimatisation day at Pangsang built in.",
              "<strong>No lodges, shops or road access</strong> across the high section, and no reliable phone signal.",
              "<strong>Rough trail.</strong> This is a herders' and traders' route, not a maintained trekking path, and it is loose or overgrown in places.",
            ],
          },
          { p: "Weather is the main variable on the traverse — the ridge is exposed and there is no shelter between camps. Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]] is worth reading before a route that gains this much in a day." },
        ],
      },
      {
        h2: "Best Time to Go",
        blocks: [
          {
            table: {
              head: ["Season", "Conditions"],
              rows: [
                ["April to May", "Rhododendron through the forest belt, generally stable weather on the pass, and warmer nights at the high camps."],
                ["October to November", "The clearest views of Ganesh, Manaslu and Langtang from the traverse. Colder, and an early snowfall can make the Singla Pass hard work."],
                ["December to March", "Not recommended. The Singla Pass holds deep snow and the high camps are severe."],
                ["June to September", "Monsoon — leeches through the forest belt, cloud on the ridge, and nothing to see from the pass."],
              ],
            },
          },
          { p: "Because the route has no escape options across the high section, a spare day either side of the trek is sensible. If weather closes the Singla Pass the group waits rather than crosses." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          { p: "At USD 850 this is one of the best-value remote treks in Nepal — considerably cheaper than the western routes because the road access at both ends is short and the trek does not need a flight." },
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 trekker", "USD 975"],
                ["2 to 4", "USD 950"],
                ["5 to 7", "USD 925"],
                ["8 to 10", "USD 900"],
                ["11 to 14", "USD 875"],
                ["15 and over", "USD 850"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including the camp and kitchen crew for the high sections.",
            },
          },
          { p: "There is very little to spend money on once you leave Trishuli Bazar. Budget for personal kit, insurance and tips, and carry all your rupees from Kathmandu — there are no ATMs on the route. See our [[post:how-much-does-trekking-in-nepal-cost|cost guide]] for the full picture." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport pickup and drop-off in Kathmandu.",
              "Private transport Kathmandu to Trishuli Bazar and Syabrubesi back to Kathmandu.",
              "Hotel accommodation in Kathmandu with breakfast.",
              "Teahouse accommodation where available, and <strong>tented accommodation with a full camp and kitchen crew</strong> on the high sections.",
              "Three meals a day throughout the trek.",
              "Langtang National Park entry permit and trekking registration.",
              "A licensed English-speaking trekking guide.",
              "Group trekking map, first aid kit carried by the guide, and all government taxes, permit fees and service charges.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "Travel insurance including emergency helicopter evacuation.",
              "Personal trekking equipment and clothing, including a bag rated for -10 °C or lower.",
              "Porter services, available at additional cost.",
              "Lunch and dinner in Kathmandu.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for guides, drivers and support staff.",
              "Extra accommodation or transport caused by weather or anything else outside the itinerary.",
            ],
          },
          { p: "The [[post:nepal-trekking-packing-list|packing list]] covers the general kit. Add a warm bag, a proper windproof layer for the ridge traverse, and a power bank — there is no charging between Trishuli Bazar and Gatlang." },
        ],
      },
    ],
    faqs: [
      { question: "How hard is the Ganesh Himal trek?", answer: "Graded moderate, but with one unusually hard day: the climb from Kharani Odar to the Singla Pass gains 1,800 m in a single push. Most other days are six to eight hours on rough herders' trails. There is no technical ground and no glacier, but the route is remote and exposed on the high traverse." },
      { question: "Is the Ganesh Himal trek a teahouse or camping trek?", answer: "Mostly camping. There is no permanent teahouse infrastructure across the high section between Bhaisi Kharka and Somdang, so the trip is supported by a full camp and kitchen crew, with tents, meals and group equipment included. Teahouses are used on the lower sections where they exist." },
      { question: "Which permits do I need for the Ganesh Himal trek?", answer: "The Langtang National Park entry permit and standard trekking registration, both included in your package and arranged by our team. Ganesh Himal is not a restricted area, so no restricted-area permit or minimum group size applies." },
      { question: "How high is the Singla Pass?", answer: "4,600 m, and it is the high point of the trek. The climb to it is 1,800 m from Kharani Odar in a single day, so an early start is essential and your guide sets a deliberately slow pace. The views from the top take in the Ganesh Himal peaks, and in clear weather Manaslu to the west and the Langtang range to the east." },
      { question: "How remote is the Ganesh Himal trek?", answer: "Very, despite being within a day's drive of Kathmandu. There are no lodges, shops, ATMs or reliable phone signal across the high section, and you may not meet another trekking party for several days. That gap between accessibility and emptiness is the whole appeal of the route." },
      { question: "What wildlife is there on the Ganesh Himal trek?", answer: "The forest belt is excellent for birds — pheasants, laughingthrushes and Himalayan monal — and langur monkeys are common in the canopy. Blue sheep are sometimes seen on the slopes along the high traverse. The area is a corridor between the Langtang and Manaslu conservation zones, which is why the wildlife does well there." },
      { question: "When is the best time for the Ganesh Himal trek?", answer: "April to May and October to November. Spring brings rhododendron through the forest belt and more stable weather on the pass; autumn gives the clearest mountain views from the high traverse but colder nights. Winter snow closes the Singla Pass and the monsoon brings leeches and cloud." },
      { question: "Can the Ganesh Himal trek be combined with another route?", answer: "Yes. The trek finishes at Syabrubesi, which is the roadhead for both the Langtang Valley trek and the Tamang Heritage trail, so either can be added on the end without an extra drive from Kathmandu. Tell us before booking so we can plan permits and food accordingly." },
    ],
    relatedTreks: [
      "ganesh-himal-trek",
      "tamang-heritage-trek",
      "langtang-valley-trek",
      "ruby-valley-circuit-trek",
      "paldor-peak-climbing",
    ],
    tripsNote: "The Ganesh range and the Langtang-side routes that share its roadhead.",
    relatedPosts: [
      "tamang-heritage-trail-guide",
      "langtang-valley-trek-complete-guide",
      "off-the-beaten-path-treks-in-nepal",
      "ruby-valley-trek-guide",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["Ganesh Himal", "Remote Treks", "Camping Treks", "Langtang Region", "High Passes"],
    meta: {
      title: "Ganesh Himal Trek: The Complete Guide",
      description:
        "A 13-day wilderness trek over the Singla Pass (4,600 m) between Langtang and Manaslu. Route, difficulty, season, cost, permits and inclusions.",
      keywords:
        "ganesh himal trek, singla pass, pangsang pass, somdang, gatlang, remote trek nepal, camping trek kathmandu",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "khori-himal-trek-guide",
    title: "Khori Himal Trek: The Complete Guide to Kori Danda",
    cluster: "remote",
    date: "2027-02-17",
    hero: {
      image: "mardi-treks/khori-himal-trek/khori-himal-trek-00-sikles-village",
      alt: "The stone houses of Sikles village above the Madi valley, Annapurna region, Nepal.",
    },
    excerpt:
      "Four walking days from one of Nepal's largest traditional Gurung villages to an empty ridge at 3,850 m, with Annapurna II, Annapurna IV, Lamjung Himal and Machhapuchhre directly in front of you. A short, new and almost unvisited Annapurna route.",
    intro: [
      { p: "Kori Danda is a grassy ridge at 3,850 m north-east of Pokhara with an uninterrupted view of <strong>Annapurna II, Annapurna IV, Lamjung Himal and Machhapuchhre</strong>, and in most seasons you will have the sunrise entirely to yourself. It is reached in two walking days from Sikles, and the whole trip fits in ten days from Kathmandu." },
      { p: "The trailhead is the appeal in its own right. <strong>Sikles</strong> is one of the largest and most traditional Gurung villages in Nepal — slate-roofed stone houses stacked up a hillside above the Madi valley, reached by a rough road that keeps casual visitors away. The region has only recently been developed for trekking, so the lodges are small, family-run, and genuinely local." },
      {
        figure: {
          image: "mardi-treks/khori-himal-trek/khori-himal-trek-02-lamjung-kailas-from-kori",
          alt: "Lamjung Kailas seen from Kori Danda in the Annapurna region of Nepal.",
          caption: "The view from Kori Danda at 3,850 m. Two walking days from the road, and usually empty.",
        },
      },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "10 days from Kathmandu, 4 of them walking"],
                ["Highest point", "Kori Danda, 3,850 m"],
                ["Highest night", "Kori Danda, 3,850 m"],
                ["Difficulty", "Moderate — one big climbing day, no pass and no glacier"],
                ["Best seasons", "March to May, October to December"],
                ["Accommodation", "Small family-run teahouses"],
                ["Access", "Road from Pokhara to Sikles, about three hours"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
                ["Price", "From USD 625 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:khori-himal-trek|10-day trip from Kathmandu]] and a [[trek:khori-himal-trek-from-pokhara|6-day version from Pokhara]] for travellers already in the city. Both walk the same four days." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Pokhara to Sikles (822 m to 1,980 m)" },
          { p: "Around three hours north-east from Pokhara up the Madi Khola valley on a rough road, climbing through terraced farmland and small settlements with the Annapurnas appearing and disappearing behind ridges. Sikles is worth an evening: the lanes, the slate roofs, and the village going about ordinary business rather than performing for visitors." },
          { h3: "Sikles to Tasha (1,980 m to 2,700 m)" },
          { p: "The first walking day, about 720 m of climbing. A stone staircase out of the village, then terraces of millet, maize and buckwheat worked by hand, and finally into oak and rhododendron forest hung with moss. Tasha is a small cluster of lodges at the top edge of the trees." },
          { h3: "Tasha to Kori Danda (2,700 m to 3,850 m)" },
          { p: "The big day: roughly <strong>1,150 m of sustained ascent</strong> to the highest point of the trek. The rhododendron thins into dwarf scrub and juniper, then gives out entirely onto open grassy ridge. Five to six hours, and the only genuinely hard day on the route." },
          { p: "<strong>Be up before dawn.</strong> Sunrise from Kori Danda — the Annapurna wall lighting up peak by peak across an empty ridge — is the best moment of the trek, and you will almost certainly have it to yourself." },
          {
            figure: {
              image: "mardi-treks/khori-himal-trek/khori-himal-trek-01-sikles-sunrise",
              alt: "Sunrise over the mountains from Sikles, Annapurna region, Nepal.",
              caption: "Sikles at first light. The village is the trailhead and, for most people, half the reason to come.",
            },
          },
          { h3: "The descent" },
          { p: "Back down the same way — Kori to Tasha, then an easy final morning through the moss-hung forest into the terraces above Sikles, with views opening down the Madi valley as the trees thin. A jeep out to Pokhara the following day." },
        ],
      },
      {
        h2: "Difficulty and Who It Suits",
        blocks: [
          { p: "This is one of the better first Himalayan treks in Nepal, for a specific reason: it gets you close, high mountain views without a pass, a glacier, or a night above 2,700 m other than the one at Kori itself." },
          {
            ul: [
              "<strong>Four to six hours a day</strong> on most days.",
              "<strong>One hard day</strong> — Tasha to Kori, five to six hours with over 1,100 m of ascent, and the same ground in reverse the following day.",
              "<strong>Maximum 3,850 m</strong>, which is low enough that altitude sickness is uncommon, though the climb to it is quick.",
              "<strong>No technical ground</strong> at any point.",
            ],
          },
          { p: "If you are choosing between the short Annapurna routes, our comparison of [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|Mardi Himal, Poon Hill and ABC]] is the place to start — Kori Danda is the quieter alternative to all three." },
        ],
      },
      {
        h2: "Best Time to Go",
        blocks: [
          {
            table: {
              head: ["Season", "Conditions"],
              rows: [
                ["March to May", "Rhododendron in bloom through the forest between Sikles and Tasha, and warm enough on the ridge to enjoy the evening."],
                ["October to December", "The clearest air of the year and the sharpest mountain views from Kori. December is cold at the top but often perfectly clear."],
                ["January to February", "Possible, with snow likely on the ridge and very cold nights at Kori. The lodges are small and heating is limited."],
                ["June to September", "Monsoon — leeches in the forest belt and cloud on the ridge most days."],
              ],
            },
          },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          { p: "At USD 625 this is among the most affordable guided treks in the Annapurna region, largely because there is no flight, the drive is short, and the trek is only four walking days." },
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 trekker", "USD 750"],
                ["2 to 4", "USD 725"],
                ["5 to 7", "USD 700"],
                ["8 to 10", "USD 675"],
                ["11 to 14", "USD 650"],
                ["15 and over", "USD 625"],
              ],
              note: "Per person, Kathmandu to Kathmandu. The 6-day Pokhara version is priced separately.",
            },
          },
          { p: "On-trail extras — charging, snacks, drinks — run a few dollars a day. <strong>Carry all your rupees from Pokhara</strong>; there are no ATMs at Sikles or beyond, and everything on the trail is cash only." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport pickup and drop-off in Kathmandu.",
              "Tourist bus Kathmandu to Pokhara and back.",
              "Private transport Pokhara to Sikles and back.",
              "Hotel accommodation in Kathmandu and Pokhara with breakfast.",
              "Teahouse accommodation throughout the trek.",
              "Three meals a day during the trek.",
              "Annapurna Conservation Area Permit and trekking registration.",
              "A licensed English-speaking guide who knows the Sikles region.",
              "Group trekking map, first aid kit carried by the guide, and all government taxes, permit fees and service charges.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "Travel insurance including emergency helicopter evacuation.",
              "Personal trekking equipment and clothing.",
              "Porter services, available at additional cost.",
              "Lunch and dinner in Kathmandu and Pokhara.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for guides, drivers and support staff.",
              "Extra costs caused by weather or anything else outside the itinerary.",
            ],
          },
          { p: "Both hotels store anything you do not need on the trail free of charge, so you can carry only what the four walking days require." },
        ],
      },
    ],
    faqs: [
      { question: "How many hours a day do you walk on the Khori Himal trek?", answer: "Four to six hours on most days. The climb from Tasha to Kori Danda is the exception at five to six hours with over 1,100 m of ascent, and the descent the following day covers the same ground in reverse." },
      { question: "Is the Khori Himal trek suitable for beginners?", answer: "Yes, for anyone with reasonable fitness. There is no pass, no glacier and no night above 2,700 m other than at Kori itself. The climb to Kori is demanding but it is a single day, and the short overall length makes this a good introduction to Himalayan trekking." },
      { question: "How remote is the Khori Himal trek?", answer: "Very. Sikles sees a handful of trekking groups a week in season and the trail above it often sees none at all. There are no bakeries, ATMs or English menus beyond the village, which is precisely the appeal for anyone who has already walked the busier Annapurna routes." },
      { question: "Which permits do I need for Kori Danda?", answer: "The Annapurna Conservation Area Permit and trekking registration. Both are included in your package and arranged by our team from passport copies and photographs sent before departure." },
      { question: "Can I charge devices and get a phone signal on the trek?", answer: "There is patchy Ncell and NTC coverage at Sikles and almost none above it. Charging is available at Sikles and limited at Tasha, usually from solar power and for a small fee. Bring a fully charged power bank and plan on being offline for the walking days." },
      { question: "Where can I withdraw cash for the Khori Himal trek?", answer: "In Pokhara. There are no ATMs at Sikles or anywhere beyond it, so carry all the Nepalese rupees you will need for snacks, drinks, charging and tips. Everything on the trail is cash only." },
      { question: "Can the Khori Himal trek be combined with another route?", answer: "Yes. Because it is short, many trekkers pair it with a few days at Poon Hill, Mardi Himal or on the Annapurna Base Camp trail. Tell us before booking and we can build a combined itinerary and adjust the permits accordingly." },
      { question: "How large are the groups on the Khori Himal trek?", answer: "Capped at twelve trekkers and led by a licensed English-speaking guide who knows the Sikles region. Because the lodges here are small and family-run, we keep groups below the maximum on this particular route wherever possible." },
    ],
    relatedTreks: [
      "khori-himal-trek",
      "khori-himal-trek-from-pokhara",
      "mardi-himal-trek",
      "poonhill-trek",
      "lamjung-himal-trek",
    ],
    tripsNote: "Kori Danda, and the other short Annapurna ridges worth walking from Pokhara.",
    relatedPosts: [
      "short-treks-from-pokhara",
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "lamjung-himal-trek-guide",
      "off-the-beaten-path-treks-in-nepal",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["Khori Himal", "Kori Danda", "Sikles", "Annapurna Region", "Short Treks"],
    meta: {
      title: "Khori Himal Trek: The Complete Guide to Kori Danda",
      description:
        "A 10-day trek from Sikles to the Kori Danda ridge at 3,850 m, with close Annapurna views and almost no other trekkers. Route, cost, permits and season.",
      keywords:
        "khori himal trek, kori danda trek, sikles trek, annapurna short trek, gurung village trek, pokhara trekking",
    },
  },
];
