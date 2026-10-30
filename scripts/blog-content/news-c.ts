import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 3: which trekking regions can be reached and walked, as
 * reported on the day of the Budhi Gandaki flood.
 */
export const newsC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-trekking-routes-status-october-2026",
    title: "Which Nepal Treks Are Open After the Floods? Route-by-Route Status, 11 October 2026",
    cluster: "news",
    date: "2026-10-11",
    hero: {
      image: trekImage("everest-base-camp-trek", "04-namche-bazaar-from-hotel-everest-view-trail"),
      alt: "A village on a wooded spur above a deep valley in the Everest region, with snow peaks behind under a clear sky.",
    },
    excerpt:
      "Most of Nepal's trekking regions are open this autumn, and a few cannot be reached the usual way. This is the position on 11 October 2026, the day of the Budhi Gandaki flood, region by region and with the source and date of each line: Everest, Annapurna, Manaslu, Langtang, Mustang and the rest.",
    intro: [
      { p: "On Thursday 8 October the Trekking Agencies' Association of Nepal (TAAN) issued its latest advisory on the state of the trails. It listed almost every trekking region in the country as open and safe, with road problems on the way to some of them. Three days later, before dawn on Sunday, a flash flood came down the Budhi Gandaki and took the Manaslu approach off that list." },
      { p: "This article puts the two together. The regional lines come from TAAN's advisory as reported by The Tourism Times on 9 October; the Manaslu lines come from Sunday morning's reports. <strong>We are writing at about midday Nepal Time on 11 October 2026</strong>, and we have not walked these trails this week ourselves. Each line says where it comes from and when, because in this season a status is only as good as its date." },
    ],
    sections: [
      {
        h2: "The Status Table",
        blocks: [
          {
            table: {
              head: ["Region", "Trails", "Getting there", "As of"],
              rows: [
                ["<strong>Manaslu Circuit, Tsum Valley</strong>", "Lower valley hit by a flash flood. Houses and bridges lost between Arughat and Philim; trekkers reported stranded on the circuit", "Road and trail in are broken in several places. Do not start", "11 Oct, press and officials"],
                ["<strong>Everest</strong> (Base Camp, Gokyo, Three Passes)", "Open and safe", "By air to Lukla. Not affected by the floods", "8 Oct, TAAN"],
                ["<strong>Annapurna Base Camp, Mardi Himal, Poon Hill, Sikles</strong>", "Operating as usual", "From Pokhara. Fly from Kathmandu if the highway is in doubt", "8 Oct, TAAN"],
                ["<strong>Annapurna Circuit</strong>", "Open over the Thorong La; several groups crossed in the days before the advisory, after snow was cleared", "Road open to Chame, local jeeps from Bhratang to upper Manang. TAAN advises starting from Dharapani", "8 Oct, TAAN"],
                ["<strong>Tilicho Lake</strong>", "Reopened after snow clearance", "As for the Annapurna Circuit", "8 Oct, TAAN"],
                ["<strong>Nar Phu</strong>", "Accessible. A temporary wooden bridge has been put in near Ratodanda", "From the Annapurna Circuit road at Koto", "8 Oct, TAAN"],
                ["<strong>Upper Mustang</strong>", "Accessible on foot and by vehicle", "Fly to Jomsom, or private jeep from Dana, Jomsom or Kagbeni. Road open between Muktinath and Dana", "8 Oct, TAAN"],
                ["<strong>Langtang, Kyanjin, Gosaikunda</strong>", "Trails reported safe", "Kathmandu–Syabrubesi road <strong>closed</strong> after bridges collapsed at Betrawati and Syabrubesi. Walk in through Helambu, or cross at Betrawati on foot", "8 Oct, TAAN"],
                ["<strong>Helambu</strong>", "Open and safe", "From Kathmandu by way of Sundarijal", "8 Oct, TAAN"],
                ["<strong>Ganesh Himal, Ruby Valley</strong>", "Reported unharmed", "Dhunche and Syabrubesi access closed. Of TAAN's two alternatives, Arughat was hit on Sunday, which leaves Dhadingbesi", "8 and 11 Oct"],
                ["<strong>Kanchenjunga, Makalu, Rolwaling</strong>", "Open and safe", "Unaffected", "8 Oct, TAAN"],
                ["<strong>Dhaulagiri, Dolpo, Rara, Jumla, Humla, far west</strong>", "Open and safe", "Unaffected", "8 Oct, TAAN"],
              ],
              note: "TAAN's advisory of 8 October listed Manaslu and the Tsum Valley as open and safe. That was true on the day and was overtaken on the 11th.",
            },
          },
        ],
      },
      {
        h2: "What Changed on Sunday",
        blocks: [
          { p: "From about 04:00 on Sunday 11 October a flood of water, mud and boulders came down the Budhi Gandaki from Chumnubri in northern Gorkha. The full account is in our [[post:budhi-gandaki-flood-october-2026-manaslu-trek-update|report on the flood]]. For trekking, these are the facts that matter as of midday:" },
          {
            ul: [
              "<strong>Bridges.</strong> The Assistant Chief District Officer of Gorkha, Netra Prasad Sharma, counts six lost: two road bridges, at Arughat and at Soti, and four suspension bridges further up, including Machha Khola to Kerauja and Ghatte Khola to Philim.",
              "<strong>People.</strong> No deaths had been confirmed on Sunday morning. Mr Sharma said at least ten people were out of contact. Earlier reports had named four herders on the Ungilung Khola.",
              "<strong>Trekkers.</strong> Ratopati reported at 10:25 that tourists who had reached the Manaslu Circuit were stranded after the bridges went, without giving a number. The army has airlifted six people from Jagat; the reports do not say who they were.",
              "<strong>Official position.</strong> We had seen no formal notice suspending trekking by midday. After the smaller flood at Namrung on 6 September the District Administration Office in Gorkha issued one the same day.",
            ],
          },
          { p: "Several of our own trips use this valley, among them the [[trek:manaslu-circuit-trek|Manaslu Circuit]], the [[trek:tsum-valley-trek|Tsum Valley]], the [[trek:larke-pass-trek|Larke Pass trek]] and the [[trek:lower-manaslu-trek|Lower Manaslu trek]], which finishes at Machha Khola. None of them should be started until the valley has been assessed. The same goes for any Ganesh Himal or Ruby Valley itinerary that was planning to go in through Arughat." },
        ],
      },
      {
        h2: "Annapurna: Open, With a Rough Road In",
        blocks: [
          { p: "The Annapurna region had its own bad week at the end of September. Two days of heavy rain on the 26th and 27th brought debris down the Ghatte Khola into the Marsyangdi at Chame, damming the river, submerging the road bridge and cutting upper Manang off by road. The Himalayan Times reported hundreds of tourists held up along the circuit. On the 27th an avalanche struck the base camp of Himlung Himal, in the Nar Phu area, and killed fifteen expedition staff who were preparing the mountain for the season." },
          { p: "By 8 October TAAN's advisory described a region back in use:" },
          {
            ul: [
              "<strong>The southern treks</strong> — Ghandruk and Ghorepani, Annapurna Base Camp, Mardi Himal, Sikles — were operating as usual. These start near Pokhara and were not touched by the Manang floods.",
              "<strong>The Annapurna Circuit</strong> was open over the Thorong La, with several groups across in the previous five days once snow had been cleared.",
              "<strong>The road</strong> was open as far as Chame, with local jeeps running from Bhratang to upper Manang. Kantipur reported that the Besisahar–Chame road had been reopened after repairs at 35 places and that the risk on it remained.",
              "<strong>TAAN's advice</strong> was to start walking from Dharapani, which also gives a better acclimatisation line than driving high.",
              "<strong>Tilicho Lake</strong> had reopened, and <strong>Nar Phu</strong> was accessible over a temporary wooden bridge near Ratodanda, with two groups on their way to the Kang La.",
            ],
          },
          {
            figure: {
              image: trekImage("chulu-far-east-climbing", "06-chame-bridge-annapurna-circuit"),
              alt: "A steel suspension footbridge hung with lines of prayer flags crossing a river at Chame on the Annapurna Circuit, with lodges on the far bank.",
              caption: "The footbridge at Chame on the Annapurna Circuit, in an archive photograph. Chame is where the Marsyangdi was dammed by debris at the end of September; the road beyond it is the weak link, while the walking trail has stayed in use.",
            },
          },
          { p: "The practical reading: the circuit can be walked, the road in is patched, and jeep times above Besisahar are longer and less certain than the brochures say. The route itself is described in our [[post:annapurna-circuit-trek-complete-guide|Annapurna Circuit guide]]." },
        ],
      },
      {
        h2: "Langtang and Gosaikunda: Safe Trails, Broken Road",
        blocks: [
          { p: "Langtang is the clearest case of a destination that is fine and a road that is not. The flood of 26 August came down the Bhote Koshi and the Trishuli, the valley the road to Syabrubesi follows, and took the bridges at Betrawati and Syabrubesi. The trekking valleys above are on different streams, and TAAN reports the trails to Kyanjin and Gosaikunda as safe." },
          {
            ul: [
              "<strong>The road</strong> from Kathmandu to Syabrubesi remained closed on 8 October. A Bailey bridge was being installed at Betrawati.",
              "<strong>The walking alternative</strong> is to start from Kathmandu through Sundarijal and Chisapani, cross Helambu to Gosaikunda, and descend to the Langtang valley by Thulo Syabru, returning the same way. It adds several days.",
              "<strong>The shorter alternative</strong> is to drive to Betrawati, cross a temporary wooden bridge on foot, and take a local jeep on to Dhunche or Thulo Syabru.",
            ],
          },
          {
            figure: {
              image: trekImage("gosaikunda-lake-trek", "04-gosaikunda-august"),
              alt: "A dark mountain lake in a rocky basin at Gosaikunda, under low cloud.",
              caption: "Gosaikunda, in an archive photograph. This autumn it is easier to reach on foot from Kathmandu through Helambu than by the usual road to Dhunche.",
            },
          },
          { p: "This is a region still in mourning. The August flood killed at least 1,400 people and left nearly 5,300 missing, according to UN agencies on 9 October, in Rasuwa and the districts downstream. Anyone going should expect a valley that is rebuilding and should take their lead from the people who live there. The usual route is in our [[post:langtang-valley-trek-complete-guide|Langtang guide]] and the walk-in in our [[post:helambu-trek-guide|Helambu guide]]." },
        ],
      },
      {
        h2: "Everest, Mustang and the Rest",
        blocks: [
          { p: "<strong>Everest</strong> is reached by air and sits in a different river system from every flood this season. TAAN lists it as open and safe. Its seasonal risk is the ordinary one, flights to Lukla held by weather, which is covered in our [[post:lukla-flight-delays-peak-season-backup-plans|guide to Lukla delays]]." },
          {
            figure: {
              image: trekImage("everest-view-trek", "05-lukla-airport-during-everest-base-camp-trek-0092"),
              alt: "The short sloping runway of Lukla airport with the control tower beside it and forested mountains beyond.",
              caption: "The runway at Lukla, in an archive photograph. A region you fly into is a region no road closure can cut off, which is one reason Everest has had the calmest autumn of the major trekking areas.",
            },
          },
          { p: "<strong>Upper Mustang</strong> is accessible on foot and by vehicle according to TAAN, with private jeeps running from Dana, Jomsom and Kagbeni and the road open between Muktinath and Dana. The simplest approach is a flight from Pokhara to Jomsom. A magnitude 5.3 earthquake earlier in the season damaged some houses and monasteries there; TAAN reported trails, lodges and communications working." },
          { p: "<strong>Kanchenjunga, Makalu and Rolwaling</strong> in the east, and <strong>Dhaulagiri, Dolpo, Rara, Jumla, Humla</strong> and the far west, are all listed as open and safe and are a long way from the damaged valleys." },
        ],
      },
      {
        h2: "How to Read 'Open and Safe'",
        blocks: [
          { p: "The phrase needs three questions asked of it." },
          {
            ol: [
              "<strong>Open on what date?</strong> Manaslu was open and safe on Thursday and flooded on Sunday. A status older than a few days is history, not information.",
              "<strong>The destination, or the way to it?</strong> Almost every problem this autumn has been on an access road or a valley-floor bridge, not on the high trail. Langtang is safe and hard to reach. Ask about both separately.",
              "<strong>Who says so?</strong> An association of trekking agencies reports from its members and has an interest in the season going ahead. That does not make it wrong, and its advisories have been specific and useful, but the District Administration Office is the body that closes and opens a route.",
            ],
          },
          { p: "And three things worth asking any agency, ours included, before you commit to a route this season: when their last group came off it, how they would get you out if the road closed behind you, and what happens to your booking if the route shuts before you start." },
          { p: "If your trip was Manaslu, the options are set out in [[post:manaslu-circuit-alternatives-autumn-2026|alternatives to the Manaslu Circuit]]. For the road from Kathmandu to Pokhara, see [[post:kathmandu-to-pokhara-road-status-october-2026|the Prithvi Highway status]]." },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `The Tourism Times — ${source("https://thetourismtimes.com/news/travel-leisure/nepal-trekking-routes-reopen-for-autumn-but-access-disruptions-remain", "TAAN's advisory of 8 October 2026")} and ${source("https://thetourismtimes.com/news/travel-leisure/most-trekking-destinations-safe-but-access-routes-still-disrupted-taan", "its September update")}`,
              `The Kathmandu Post — ${source("https://kathmandupost.com/gandaki-province/2026/10/11/what-we-know-so-far-about-the-damage-caused-by-budhi-gandaki-floods", "damage from the Budhi Gandaki flood")} and ${source("https://kathmandupost.com/gandaki-province/2026/09/30/flood-swollen-marsyangdi-river-cuts-off-upper-manang", "the Marsyangdi cutting off upper Manang")}`,
              `Sankalpa Khabar (Nepali) — ${source("https://www.sankalpakhabar.com/ribbon/2026/10/11/654353/", "six bridges lost, ten people out of contact")}`,
              `Ratopati (Nepali) — ${source("https://www.ratopati.com/story/598770/tourists-stranded-on-manaslu-circuit-due-to-floods-in-budhi-gandaki", "tourists stranded on the Manaslu Circuit")}`,
              `The Himalayan Times — ${source("https://thehimalayantimes.com/nepal/floods-landslides-strand-hundreds-of-tourists-in-manang", "tourists stranded in Manang in late September")}`,
              `Kantipur (Nepali) — ${source("https://ekantipur.com/gandaki-pradesh/2026/10/03/besisahar-chame-road-reopened-after-repairs-at-35-places-risk-remains-39-23.html", "Besisahar–Chame road reopened after repairs at 35 places")}`,
              `Xinhua — ${source("https://english.news.cn/asiapacific/20261001/acdb437ae5ed448387684452f978709d/c.html", "the Himlung base camp avalanche")}`,
              `UN News — ${source("https://news.un.org/en/story/2026/10/1168561", "the toll of the August flood")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Is it safe to trek in Nepal after the October 2026 flood?", answer: "In most regions, yes. The Budhi Gandaki flood of 11 October affects the Manaslu and Tsum Valley approach in Gorkha. Everest, the Annapurna treks, Mustang, Kanchenjunga, Makalu and western Nepal were listed as open and safe by the trekking agencies' association on 8 October and are in different valleys." },
      { question: "Is the Manaslu Circuit open?", answer: "Not in practice. The flood on 11 October took road and footbridges between Arughat and Philim, on the first days of the route, and trekkers were reported stranded. No formal closure notice had been seen by midday that day, but nobody should start the trek until the valley has been assessed." },
      { question: "Is the Everest Base Camp trek affected by the floods?", answer: "No. The Everest region is reached by air and lies in a different river system from the Trishuli, Marsyangdi and Budhi Gandaki. It was listed as open and safe on 8 October. Its usual seasonal issue is weather delays on flights to Lukla." },
      { question: "Is the Annapurna Circuit open?", answer: "Yes, according to the advisory of 8 October: several groups had crossed the Thorong La in the previous days after snow was cleared. The road is open to Chame, with local jeeps above Bhratang, and is slower and less certain than usual after the floods of late September. Starting the walk from Dharapani is advised." },
      { question: "Are Annapurna Base Camp, Mardi Himal and Poon Hill open?", answer: "Yes. They were reported as operating as usual on 8 October. They start near Pokhara and were not affected by the floods in Manang or on the Budhi Gandaki. Fly from Kathmandu to Pokhara if the highway is disrupted." },
      { question: "Can I trek in Langtang this autumn?", answer: "The trails to Kyanjin and Gosaikunda are reported safe, but the road from Kathmandu to Syabrubesi was still closed on 8 October after bridges collapsed in the August flood. You can walk in from Kathmandu through Helambu and Gosaikunda, or cross at Betrawati on foot and continue by local jeep." },
      { question: "Is Upper Mustang open?", answer: "Yes, it was reported accessible on foot and by vehicle on 8 October, with the road open between Muktinath and Dana and private jeeps running from Dana, Jomsom and Kagbeni. Flying from Pokhara to Jomsom is the simplest approach." },
      { question: "Is the Tsum Valley open?", answer: "No. The first reports place the source of the 11 October flood on the Syar Khola, the Tsum Valley's river, with a suspected blockage between Lokpa and Chumling on the only trail in. The way to it also uses the damaged lower Budhi Gandaki." },
      { question: "Which treks in Nepal can be reached without a long road journey?", answer: "Everest by flight to Lukla, the Pokhara treks by flight to Pokhara, and Upper Mustang by flight to Jomsom. Kanchenjunga and Makalu begin with flights to the east. These avoid the Trishuli road section that has caused most of this season's delays." },
      { question: "What does 'open and safe' mean in a trekking advisory?", answer: "That the trail and lodges were in use when the advisory was written. It does not guarantee the road to the trailhead, and it can be overtaken within days: Manaslu was listed as open on 8 October and flooded on the 11th. Always check the date and ask separately about access." },
      { question: "Who decides whether a trekking route is closed in Nepal?", answer: "The District Administration Office of the district concerned issues and lifts closure notices, sometimes alongside the conservation area office. The trekking agencies' association publishes advisories on trail conditions, which are useful but are not closure orders." },
    ],
    relatedTreks: ["everest-base-camp-trek", "annapurna-base-camp-trek", "annapurna-circuit-trek", "upper-mustang-trek", "langtang-valley-trek", "gosaikunda-lake-trek", "manaslu-circuit-trek"],
    tripsNote: "One trip from each of the main regions in the table above. Ask us for the latest on any of them before you book.",
    relatedPosts: [
      "budhi-gandaki-flood-october-2026-manaslu-trek-update",
      "manaslu-circuit-alternatives-autumn-2026",
      "kathmandu-to-pokhara-road-status-october-2026",
      "trekking-in-nepal-in-november",
      "annapurna-circuit-trek-complete-guide",
      "langtang-valley-trek-complete-guide",
    ],
    tags: ["trail news", "trekking routes", "route status", "nepal trekking", "trekking safety"],
    meta: {
      title: "Which Nepal Treks Are Open? Route Status, 11 October 2026",
      description: "Region-by-region status of Nepal's trekking routes after the Budhi Gandaki flood: Everest, Annapurna, Manaslu, Langtang and Mustang, with sources and dates.",
      keywords: "Nepal trekking routes open, is Nepal safe to trek, Nepal trek status October 2026, Manaslu Circuit closed, Annapurna Circuit open, Langtang road closed, Everest Base Camp open, TAAN advisory, Nepal flood trekking",
    },
  },
];
