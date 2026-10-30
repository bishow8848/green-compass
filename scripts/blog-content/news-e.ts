import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 5: where to trek instead of the Manaslu Circuit while the
 * Budhi Gandaki approach is cut.
 */
export const newsE: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "manaslu-circuit-alternatives-autumn-2026",
    title: "Manaslu Circuit Alternatives for Autumn 2026: Where to Trek While the Budhi Gandaki Is Cut",
    cluster: "news",
    date: "2026-10-11",
    hero: {
      image: trekImage("annapurna-circuit-trek", "01-muktinath-valley-view-of-thorong-la-pass-mountains-nepal"),
      alt: "The dry brown Muktinath valley with a snow-capped massif rising behind it on the Thorong La side of the Annapurna Circuit.",
    },
    excerpt:
      "The flood of 11 October 2026 has cut the way into the Manaslu Circuit at the height of the season. If your trek was Manaslu, these are the routes that give you the most of what you were going for: a high pass, Tibetan villages, quiet trails. Each is listed with its length, its permit and its reported status.",
    intro: [
      { p: "The flash flood that came down the Budhi Gandaki on Sunday 11 October 2026 took road and footbridges along the first days of the Manaslu Circuit, in the busiest fortnight of the trekking year. Nobody yet knows how long the lower valley will be out of use. If you were due to walk it this autumn, the useful question now is what else gives you the same things." },
      { p: "This is our answer, written the same day. The status of each route comes from the advisory issued by the Trekking Agencies' Association of Nepal (TAAN) on 8 October, as reported by The Tourism Times; we give the date because conditions this season have changed within days. What happened on the Budhi Gandaki is in our [[post:budhi-gandaki-flood-october-2026-manaslu-trek-update|report on the flood]]." },
    ],
    sections: [
      {
        h2: "What You Are Replacing",
        blocks: [
          { p: "It helps to be clear about what drew you to Manaslu, because no single route replaces all of it." },
          {
            table: {
              head: ["What Manaslu gives you", "In detail"],
              rows: [
                ["A complete circuit", "In one valley and out another, with no backtracking"],
                ["A high pass", "The Larke La at 5,106 m, a long glacial crossing that needs no climbing skills"],
                ["Tibetan Buddhist villages", "Nubri: flat-roofed houses, mani walls, monasteries, yak pastures"],
                ["Few other trekkers", "A restricted area, far quieter than Annapurna or Everest"],
                ["Lodges all the way", "No tents or camp crew needed"],
                ["About two weeks", "15 days on our standard itinerary"],
              ],
            },
          },
          { p: "Decide which two or three of those matter most, and the choice below becomes easy." },
        ],
      },
      {
        h2: "The Shortlist",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "High point", "Permit", "Reported status, 8 Oct"],
              rows: [
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "15", "Thorong La, 5,416 m", "Conservation area permit", "Open; groups crossing the pass"],
                ["[[trek:annapurna-circuit-with-tilicho-lake-trek|Annapurna Circuit with Tilicho Lake]]", "Longer", "Thorong La, 5,416 m", "Conservation area permit", "Tilicho reopened after snow clearance"],
                ["[[trek:nar-phu-valley-trek|Nar Phu Valley]]", "14", "Kang La, 5,320 m", "Restricted area", "Accessible over a temporary bridge"],
                ["[[trek:upper-mustang-trek|Upper Mustang]]", "16", "About 3,860 m", "Restricted area", "Accessible on foot and by vehicle"],
                ["[[trek:everest-three-pass-trek|Everest Three Passes]]", "17", "Three passes above 5,300 m", "National park permit", "Everest region open and safe"],
                ["[[trek:kanchenjunga-circuit-trek|Kanchenjunga Circuit]]", "21", "Base camps to 5,143 m", "Restricted area", "Open and safe"],
              ],
              note: "Days are from Kathmandu on our standard itineraries. Status is as reported by TAAN on 8 October 2026; check again before you travel.",
            },
          },
          {
            figure: {
              image: trekImage("nar-phu-valley-trek", "03-dharapani-village"),
              alt: "A stone-paved lane between dry-stone walls in Dharapani village, with cattle walking ahead and lodges beyond.",
              caption: "Dharapani, where the way down from the Larke La meets the Annapurna Circuit. Trekkers finishing Manaslu walk out through this village, so in a sense it is the nearest open ground to the trek you had planned.",
            },
          },
        ],
      },
      {
        h2: "Annapurna Circuit: The Nearest Equivalent",
        blocks: [
          { p: "If what you wanted was a great circuit over a high pass, this is the direct substitute. It climbs the Marsyangdi valley, which is the next one west of the Budhi Gandaki, crosses the Thorong La at 5,416 metres — 300 metres higher than the Larke La — and descends to Muktinath and the Kali Gandaki. It needs no restricted-area permit and no minimum group, the lodges are better, and the stages can be adjusted to almost any schedule." },
          {
            ul: [
              "<strong>What you gain:</strong> a higher pass, more comfortable lodges, Manang's acclimatisation walks, and far more flexibility.",
              "<strong>What you lose:</strong> solitude. There is a road in both valleys, and October is its busiest month. The culture of upper Manang is Tibetan-influenced but more visited than Nubri.",
              "<strong>Status:</strong> TAAN reported several groups over the Thorong La in the five days before 8 October, after snow was cleared. The road was open to Chame, with local jeeps above Bhratang, following flood damage in late September. TAAN advises starting on foot from Dharapani.",
              "<strong>To add:</strong> the side trip to [[trek:tilicho-lake-trek|Tilicho Lake]] at 4,919 m, reported reopened.",
            ],
          },
          { p: "How the two circuits compare in a normal year is the subject of [[post:manaslu-vs-annapurna-circuit|Manaslu or the Annapurna Circuit]], and the route itself is in our [[post:annapurna-circuit-trek-complete-guide|Annapurna Circuit guide]]." },
        ],
      },
      {
        h2: "Nar Phu: The Closest in Spirit",
        blocks: [
          { p: "If it was the restricted valley and the Tibetan villages you wanted, Nar Phu is the nearest thing to Nubri that is open. It leaves the Annapurna Circuit at Koto and goes north into two stone villages, Phu and Nar, that were closed to outsiders until 2002. It then crosses the Kang La at 5,320 metres back to the main circuit near Ngawal. The rules are the same as for Manaslu: a restricted-area permit, at least two trekkers, a licensed guide and a registered agency." },
          {
            ul: [
              "<strong>What you gain:</strong> a wilder and emptier valley than Manaslu, and a pass that is higher.",
              "<strong>What you lose:</strong> comfort. Lodges are basic, stages are long, and this is a harder trek than the Manaslu Circuit.",
              "<strong>Status:</strong> accessible according to TAAN, after a temporary wooden bridge was installed near Ratodanda, with two groups heading for the Kang La at the time of the advisory.",
              "<strong>Worth knowing:</strong> this is the valley below Himlung Himal, where an avalanche at base camp on 27 September killed fifteen expedition staff. The standard trekking route does not go to that base camp, but it was a hard autumn here too.",
            ],
          },
          { p: "The route and its permit are described in our [[post:nar-phu-valley-trek-guide|Nar Phu guide]]." },
        ],
      },
      {
        h2: "Upper Mustang: The Culture Without the Pass",
        blocks: [
          { p: "If the Tibetan Buddhist world was the point and the pass was the price, Upper Mustang gives you more of the first and none of the second. It is a walk through a high desert of eroded cliffs and cave dwellings to the walled town of Lo Manthang, mostly below 4,000 metres. It lies in the rain shadow north of the Annapurna range." },
          {
            ul: [
              "<strong>What you gain:</strong> the most intact Tibetan culture in Nepal, moderate altitude, and a landscape unlike anything on Manaslu.",
              "<strong>What you lose:</strong> the big-mountain circuit and the pass. And money: the permit is USD 500 for ten days.",
              "<strong>Status:</strong> accessible on foot and by vehicle according to TAAN, with the road open between Muktinath and Dana. The simplest approach is to fly from Pokhara to Jomsom.",
            ],
          },
          {
            figure: {
              image: trekImage("upper-mustang-trek", "05-lomanthang-1"),
              alt: "Flat-roofed whitewashed houses of Lo Manthang seen past a rooftop chorten and prayer flags, with bare eroded hills behind.",
              caption: "Lo Manthang, the walled capital of Upper Mustang. If the villages of Nubri were what drew you to Manaslu, this is where that culture is at its fullest.",
            },
          },
          { p: "See our [[post:upper-mustang-trek-complete-guide|Upper Mustang guide]]." },
        ],
      },
      {
        h2: "Everest Three Passes, and Kanchenjunga",
        blocks: [
          { p: "<strong>Everest Three Passes</strong> is for those who chose Manaslu as the hard option. It is a 17-day loop over the Kongma La, Cho La and Renjo La, all above 5,300 metres, taking in Everest Base Camp and the Gokyo lakes. It is more demanding than Manaslu and much busier on the Base Camp section, though the passes themselves are quiet. The region is reached by air and has been untouched by this season's floods. See our [[post:everest-three-passes-trek-guide|Three Passes guide]]." },
          { p: "<strong>Kanchenjunga</strong> is for those with three weeks who wanted remoteness above all. The [[trek:kanchenjunga-circuit-trek|circuit]] visits both base camps of the third-highest mountain in the world, through a restricted area that sees a fraction of Manaslu's numbers. It is in the far east of the country, a flight and a long drive from Kathmandu, and was listed as open and safe. See our [[post:kanchenjunga-circuit-trek-guide|Kanchenjunga guide]]." },
        ],
      },
      {
        h2: "If You Have Less Time",
        blocks: [
          { p: "Losing Manaslu often means losing days as well, to rebooking and uncertainty. Two routes from Pokhara fit into what is left, and both were reported operating as usual." },
          {
            ul: [
              "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]] puts you in a ring of 7,000 and 8,000-metre peaks at 4,130 metres without a pass.",
              "[[trek:mardi-himal-trek|Mardi Himal]] is a quiet ridge walk to 4,500 metres under Machhapuchhre, nine days from Kathmandu.",
            ],
          },
          { p: "Neither is a substitute for a circuit, and both are a better use of a week than waiting in Kathmandu for news." },
        ],
      },
      {
        h2: "What About Langtang?",
        blocks: [
          { p: "Langtang would normally be on this list: close to Kathmandu, Tibetan-influenced, uncrowded. This year the road to Syabrubesi has been closed since the flood of 26 August took the bridges at Betrawati and Syabrubesi, and it was still closed on 8 October. The trails are reported safe, and the valley can be reached on foot through Helambu and Gosaikunda, but that turns a week's trek into a much longer one. It is a route for someone who wants that long walk in, not a quick replacement." },
        ],
      },
      {
        h2: "Switching a Booking: Permits, Dates and Insurance",
        blocks: [
          {
            ul: [
              "<strong>Permits do not transfer.</strong> A restricted-area permit is issued for one area and fixed dates. A change of route means new permits, and Nar Phu, Upper Mustang and Kanchenjunga each have their own. The process is in our [[post:restricted-area-trekking-permits-in-nepal|restricted-area permit guide]].",
              "<strong>Ask what has already been issued.</strong> If your Manaslu permit has not been applied for yet, switching is simple. If it has, ask your agency what can be recovered.",
              "<strong>Mind the holidays.</strong> The immigration office that issues restricted permits closes for the main days of Dashain and Tihar, in 2026 roughly 17 to 25 October and 8 to 11 November. A switch to another restricted area needs your passport in Kathmandu on a working day.",
              "<strong>Read your insurance.</strong> A change forced by a natural disaster may be covered as curtailment or cancellation; it depends on the wording and on when you bought the policy. See our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]].",
              "<strong>Check the altitude.</strong> The Thorong La and Kang La are higher than the Larke La. If your cover or your preparation was for 5,106 metres, check both.",
              "<strong>Fly to Pokhara</strong> for anything in Annapurna or Mustang. The state of the road is in [[post:kathmandu-to-pokhara-road-status-october-2026|our Prithvi Highway update]].",
            ],
          },
          { p: "If you are booked with us on a trip in the Manaslu region, write to us and we will work through these with you. The current state of every region is in our [[post:nepal-trekking-routes-status-october-2026|route-by-route status]]." },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `The Tourism Times — ${source("https://thetourismtimes.com/news/travel-leisure/nepal-trekking-routes-reopen-for-autumn-but-access-disruptions-remain", "TAAN's advisory of 8 October 2026")}`,
              `The Kathmandu Post — ${source("https://kathmandupost.com/gandaki-province/2026/10/11/what-we-know-so-far-about-the-damage-caused-by-budhi-gandaki-floods", "damage from the Budhi Gandaki flood")}`,
              `Xinhua — ${source("https://english.news.cn/asiapacific/20261001/acdb437ae5ed448387684452f978709d/c.html", "the Himlung base camp avalanche")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "What is the best alternative to the Manaslu Circuit?", answer: "For a circuit over a high pass, the Annapurna Circuit: it runs up the next valley west and crosses the 5,416 m Thorong La. For a restricted valley of Tibetan villages with few trekkers, Nar Phu. For Tibetan culture without a high pass, Upper Mustang." },
      { question: "Is the Annapurna Circuit open in October 2026?", answer: "Yes, according to the trekking agencies' association advisory of 8 October: several groups had crossed the Thorong La in the previous five days. The road was open to Chame after flood damage in late September, and starting the walk from Dharapani was advised. Check again before travelling." },
      { question: "Is the Annapurna Circuit harder than the Manaslu Circuit?", answer: "The pass is 300 metres higher, but the trek is generally considered a little easier: lodges are better, there are more places to rest and acclimatise, and a road gives ways out. The Manaslu Circuit is more remote and its pass day is longer." },
      { question: "Is Nar Phu similar to Manaslu?", answer: "It is the closest in character. Both are restricted areas of Tibetan Buddhist villages with few visitors, and both need a guide and at least two trekkers. Nar Phu is wilder and harder, with basic lodges and a higher pass, the 5,320 m Kang La." },
      { question: "Can I use my Manaslu permit for another trek?", answer: "No. A restricted-area permit is issued for one area and specific dates and cannot be transferred. A different route needs its own permits. Ask your agency whether your Manaslu permit had already been issued and what can be recovered." },
      { question: "Which alternative treks need a restricted-area permit?", answer: "Nar Phu, Upper Mustang and Kanchenjunga are restricted areas and need a permit through a registered agency, a licensed guide and at least two trekkers. The Annapurna Circuit, Annapurna Base Camp, Mardi Himal and the Everest treks do not." },
      { question: "Can I trek Langtang instead of Manaslu?", answer: "The trails are reported safe, but the road from Kathmandu to Syabrubesi has been closed since the flood of 26 August and was still closed on 8 October. You can walk in through Helambu and Gosaikunda, which adds several days." },
      { question: "What can I do in a week if my Manaslu trek is cancelled?", answer: "Annapurna Base Camp and Mardi Himal both start near Pokhara, need no restricted permit, and were reported operating as usual. Fly from Kathmandu to Pokhara to save a day and avoid the highway." },
      { question: "Will my insurance cover switching treks after the flood?", answer: "It depends on the policy. Some cover cancellation or curtailment caused by a natural disaster if the policy was bought before the event. Check the wording, and check that the altitude limit covers your new route, since several alternatives go higher than the Larke La." },
      { question: "When will the Manaslu Circuit reopen?", answer: "Nobody can say yet. The flood on 11 October damaged a long stretch of the lower valley and took road bridges as well as footbridges. Wait for a notice from the District Administration Office in Gorkha rather than planning around a guessed date." },
      { question: "Is the Tsum Valley an alternative to the Manaslu Circuit this autumn?", answer: "No. It is reached by the same damaged valley, and the first reports place the source of the flood on the Tsum Valley's own river, with a suspected blockage on the only trail in." },
    ],
    relatedTreks: ["annapurna-circuit-trek", "nar-phu-valley-trek", "upper-mustang-trek", "everest-three-pass-trek", "annapurna-circuit-with-tilicho-lake-trek", "kanchenjunga-circuit-trek", "annapurna-base-camp-trek", "mardi-himal-trek"],
    tripsNote: "The alternatives in this article, most like Manaslu first. Status changes quickly this season, so ask before you book.",
    relatedPosts: [
      "budhi-gandaki-flood-october-2026-manaslu-trek-update",
      "nepal-trekking-routes-status-october-2026",
      "manaslu-vs-annapurna-circuit",
      "annapurna-circuit-trek-complete-guide",
      "nar-phu-valley-trek-guide",
      "upper-mustang-trek-complete-guide",
    ],
    tags: ["manaslu circuit", "trek alternatives", "annapurna circuit", "nar phu", "trail news"],
    meta: {
      title: "Manaslu Circuit Alternatives for Autumn 2026: 6 Open Treks",
      description: "Manaslu cut by the Budhi Gandaki flood? The treks that replace it this autumn — Annapurna Circuit, Nar Phu, Upper Mustang and more — with status and permits.",
      keywords: "Manaslu Circuit alternatives, Manaslu trek cancelled, alternative to Manaslu Circuit, Annapurna Circuit vs Manaslu, Nar Phu trek, Upper Mustang trek, treks open Nepal October 2026, Manaslu flood",
    },
  },
];
