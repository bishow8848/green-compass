import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 4: how a Himalayan river floods without rain, and the
 * habits that keep a trekker out of its way. Written after the Budhi Gandaki
 * flood of 11 October 2026.
 */
export const newsD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "flash-floods-without-rain-himalaya-trekking-safety",
    title: "Floods Without Rain: Why Himalayan Rivers Surge From a Clear Sky, and How Trekkers Stay Safe",
    cluster: "news",
    date: "2026-10-11",
    hero: {
      image: trekImage("nar-phu-valley-trek", "02-the-marsyangdi-river-at-dharapani-annapurna-circuit-nepal-pa"),
      alt: "The Marsyangdi river running pale blue over boulders through a steep wooded gorge at Dharapani.",
    },
    excerpt:
      "The Budhi Gandaki flooded on 11 October 2026 with no rain recorded upstream. Floods like it come from a slope or a glacier failing above the last village, not from the weather. This is how they happen, the signs that one is coming, and what a trekker in a Himalayan gorge should do about it.",
    intro: [
      { p: "On the morning of Sunday 11 October 2026 the Budhi Gandaki came down through northern Gorkha in a flood that took houses and bridges along the first days of the Manaslu Circuit. The Department of Hydrology and Meteorology had no record of rain in the upper catchment. The monsoon was over. People in the villages said the river had been quiet." },
      { p: "It was at least the fourth damaging flood in Nepal's central Himalaya in under seven weeks, and in each of them a river was blocked or struck by debris rather than simply rising with the rain. This article explains the kind of flood they were, because the usual instinct — check the forecast, avoid the wet season — does not protect anyone from it. The habits that do are simple and are set out below. The news itself is in our [[post:budhi-gandaki-flood-october-2026-manaslu-trek-update|report on the Budhi Gandaki flood]]." },
    ],
    sections: [
      {
        h2: "Four Events in Seven Weeks",
        blocks: [
          {
            table: {
              head: ["Date", "River", "What has been said about the trigger"],
              rows: [
                ["26 August 2026", "Bhote Koshi and Trishuli, Rasuwa", "Glacial ice and rock collapsed into the river system, in the words of UN agencies. The exact sequence is still being studied"],
                ["6 September 2026", "Therang Khola at Namrung, upper Budhi Gandaki", "Debris dammed the stream near its source and then burst, officials said"],
                ["26–27 September 2026", "Marsyangdi at Chame, Manang", "During heavy rain, debris from the Ghatte Khola side stream dammed the main river and submerged the road bridge"],
                ["11 October 2026", "Budhi Gandaki, Gorkha", "Not confirmed. A landslide dam on the Syar Khola or Ungilung Khola, or an ice avalanche above. No rain recorded"],
              ],
            },
          },
          { p: "The first of these was a catastrophe on a different scale from the others: at least 1,400 people killed and nearly 5,300 missing, according to UN agencies on 9 October. The others were far smaller. What the four have in common is the mechanism. In each, something solid — ice, rock, or the rubble of a landslide — got into a river or across it." },
        ],
      },
      {
        h2: "How a River Floods With No Rain",
        blocks: [
          { h3: "A landslide dams the valley" },
          { p: "Himalayan valleys are narrow and their sides are steep and young. When a slope fails into a gorge, the debris can block the river completely. Water ponds behind the blockage; below it, the river drops or stops. The dam is loose rubble, and when the water reaches its top it cuts through in minutes, releasing the whole pond at once. Some of these dams last hours, some days. The flood that follows arrives as a wall carrying the dam with it, and if the slope keeps moving the cycle can repeat. That is what residents of Lokpa described on Sunday: a river that seemed to stop and start in the dark, and water that fell and came again in at least three surges." },
          { h3: "Ice or rock falls from high above" },
          { p: "A hanging glacier or a rock face can collapse without warning, in any season, by day or night. The falling mass picks up snow, meltwater and loose sediment and becomes a fast flow of slurry and boulders that can run far down a valley. It may also do the work of a landslide and dam the river where it lands. The head of Nepal's disaster authority suggested on Sunday that an ice avalanche in the high north was one possible origin of the Budhi Gandaki flood." },
          { h3: "A glacial lake overflows or bursts" },
          { p: "Lakes held behind moraine or ice sit below many Himalayan glaciers. An avalanche landing in one can throw a wave over the dam, or the dam itself can fail. This valley has a recent example. In April 2024 ice avalanches from the Manaslu Glacier fell into Birendra Tal, the lake near Samagaun, and the overflow flooded down the Budhi Gandaki. The mountain research centre ICIMOD, which studied it, noted that the moraine dam itself was not breached." },
          {
            figure: {
              image: trekImage("manaslu-circuit-trek", "03-larkya-glacier-lake-and-himalayan-panorama-near-larke-pass-m"),
              alt: "A small glacial lake among snow-covered boulders below the Larke Pass, with high peaks behind.",
              caption: "A glacial lake near the Larke Pass at the head of the Budhi Gandaki. Lakes like this lie under most of the big glaciers, well above the last villages, which is why what happens to them is seldom seen by anyone.",
            },
          },
          { h3: "A side stream blocks the main river" },
          { p: "The smallest version is the commonest. A side stream in spate brings down more rubble than the main river can carry away, and builds its own dam across it. That is what the Ghatte Khola did to the Marsyangdi at Chame in September. It needs rain, but it does not need the main river to be high." },
          { p: "All four share the features that make them dangerous to people on a valley floor. They start out of sight. They arrive suddenly. They carry rock, not just water. And they travel: on Sunday the flood began high in Chumnubri at about 04:00 and its first surge passed Arughat, far down the valley, at about 06:30." },
        ],
      },
      {
        h2: "The Signs",
        blocks: [
          { p: "There is rarely much warning, but there is usually some, and on Sunday it was enough. People in Lokpa and Chumling heard the streams roaring at about four in the morning and left their houses before they knew what was happening." },
          {
            ul: [
              "<strong>A roar</strong> from up the valley, like a train or continuous thunder, sometimes with the ground trembling.",
              "<strong>The river going quiet or dropping</strong> when it should not. This is the most important sign and the least obvious: it means the water is being held back somewhere above you.",
              "<strong>A sudden change of colour</strong> to brown or black, or branches and debris appearing in clear water.",
              "<strong>A sudden rise</strong> with no rain to explain it.",
              "<strong>A blast of wind</strong> or a smell of wet earth coming down the valley, sometimes ahead of the water.",
              "<strong>Local people moving uphill</strong> quickly. They know their river. Go with them and ask later.",
            ],
          },
          { p: "A river that falls after a surge has not finished. Several of the residents quoted on Sunday said the water dropped and then came back without warning, and the Flood Forecasting Division was still reporting the flow rising and falling hours after the first wave." },
        ],
      },
      {
        h2: "What to Do in the First Minutes",
        blocks: [
          {
            ol: [
              "<strong>Go uphill, straight away.</strong> Up the valley side, at right angles to the river, not along the trail up or down the valley. Height above the water is what counts, and a few dozen metres of climb is worth more than a kilometre of running along the bank.",
              "<strong>Do not cross a bridge</strong> to reach the side you think is safer. Bridges are the first things to go.",
              "<strong>Leave your pack.</strong> Take what is on you. The chair of one ward said on Sunday that people could not even take their belongings out, and they are alive.",
              "<strong>Wake everyone</strong> on your way. Shout. At four in the morning most people are asleep.",
              "<strong>Stay up.</strong> Do not go back down when the water drops. Wait for daylight and for someone who knows the valley to say it is over, which may be many hours.",
              "<strong>Keep out of the riverbed afterwards.</strong> Do not go down to look, to film or to cross on what is left. A dam that failed once can form again.",
              "<strong>Then make contact:</strong> your guide's agency, the police, your family. In Nepal the emergency numbers are 100 for the police and 1234 for the Ministry of Home Affairs.",
            ],
          },
        ],
      },
      {
        h2: "Before You Sleep: Where You Stay Matters",
        blocks: [
          { p: "Most of what a trekker can do about this hazard is done at four in the afternoon, not four in the morning." },
          {
            ul: [
              "<strong>Sleep above the river, not beside it.</strong> Many gorge villages have an older part on a terrace and a newer strip on the gravel flat by the water, where the road or the trail runs. In Nepali that flat is the <em>bagar</em>, and it is in the place names: Jagat Bagar, Yaru Bagar. The houses reported lost at Jagat on Sunday were the ones on the riverbed. Given the choice, take the lodge on the terrace.",
              "<strong>Know the way uphill</strong> from your room before dark. Where is the path, and where does it start?",
              "<strong>Keep a grab bag by the bed:</strong> head torch, shoes, warm jacket, phone, passport, permits and money. Everything else can be replaced.",
              "<strong>Camp on high ground.</strong> A flat sandy bench by a river is flat and sandy because the river made it.",
              "<strong>Notice the bridges.</strong> On a day when you will cross the river several times, ask your guide which side has the villages and the way out.",
              "<strong>Tell someone your plan.</strong> An agency that knows which lodge you are in tonight can tell a rescue team where to look.",
            ],
          },
          {
            figure: {
              image: trekImage("abc-trek-nepal", "04-jhinu-danda-bridge-kadoorie-bridge-1"),
              alt: "A long suspension footbridge crossing high above a stream gully between terraced green hillsides.",
              caption: "A trail bridge in the Annapurna foothills, hung high above its stream. Height is the one reliable defence against this kind of flood, for a bridge and for a bed.",
            },
          },
        ],
      },
      {
        h2: "Alerts and Information",
        blocks: [
          { p: "Nepal's Flood Forecasting Division sends warnings by SMS to phones in the area at risk. On Sunday one went out at 06:40 telling people along the Budhi Gandaki to stay away from the river as far down as the Trishuli confluence, and another at 09:25 gave risk levels for the stretch below. The division also gives flood information by phone on 1155." },
          {
            ul: [
              "<strong>Carry a Nepali SIM</strong> and keep the phone charged and switched on at night in a valley with signal. A power bank is safety equipment.",
              "<strong>Trek with a guide</strong> in gorge country. A guide hears the warning in Nepali, knows who to ring in the next village up, and knows which lodge is on the terrace. In restricted areas such as Manaslu a guide is required anyway.",
              "<strong>Ask at each lodge</strong> what the river has been doing. Lodge owners talk to each other up and down the valley all day.",
              "<strong>Check your insurance</strong> covers natural disasters, curtailment and helicopter evacuation. Our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] explains the wording to look for.",
            ],
          },
          { p: "Signal is the limit of all this. In the upper Budhi Gandaki there are long stretches without it, and the first warning on Sunday was a sound, not a message." },
        ],
      },
      {
        h2: "Does This Mean Gorge Treks Are Unsafe?",
        blocks: [
          { p: "It means they carry a risk that cannot be forecast, which is not the same thing. On any given night in any given valley the chance of an event like Sunday's is very small. Tens of thousands of people walk these gorges every season, and the villages in them have stood for generations. But the consequences are severe, the trigger is invisible from below, and this season has shown that such events are not confined to the monsoon." },
          { p: "There is also a trend to be honest about. Speaking after the August flood, UNICEF's spokesperson James Elder said the Himalaya are warming about twice as fast as the global average and warned of returning to the same valleys after the next flood. Retreating glaciers leave behind lakes and unsupported slopes. Nobody can say that Sunday's flood was caused by warming, and its trigger is not even established yet. What can be said is that the high ground above these valleys is changing, and that planning for it is now part of trekking here." },
          { p: "For a trekker that planning is modest. Sleep high, know the way up, keep your phone on, walk with someone who knows the valley, and move the moment the river sounds wrong. For which routes are open now, see our [[post:nepal-trekking-routes-status-october-2026|route-by-route status]]." },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `The Kathmandu Post — ${source("https://kathmandupost.com/national/2026/10/11/flood-sweeps-away-seven-houses-in-gorkha", "residents' accounts of the Budhi Gandaki flood")} and ${source("https://kathmandupost.com/gandaki-province/2026/09/30/flood-swollen-marsyangdi-river-cuts-off-upper-manang", "the Marsyangdi dammed at Chame")}`,
              `OnlineKhabar English — ${source("https://english.onlinekhabar.com/devastating-flood-budhi-gandaki.html", "what triggered the flood")}`,
              `Nagarik News (Nepali) — ${source("https://nagariknews.nagariknetwork.com/social-affairs/risk-persists-as-flood-flow-in-budhigandaki-continues-to-fluctuate-chief-parajuli-96-34.html", "the three surges and the timing at Arughat")}`,
              `ICIMOD — ${source("https://www.icimod.org/cryosphere-water/insights-behind-the-unexpected-flooding-in-the-budhi-gandaki-river-gorkha-nepal/", "the 2024 Birendra Tal flood on the Budhi Gandaki")}`,
              `UN News — ${source("https://news.un.org/en/story/2026/10/1168561", "the August flood and the warming of the Himalaya")}`,
              `OnlineKhabar English — ${source("https://english.onlinekhabar.com/gorkha-administration-urges-trekkers-to-avoid-manaslu-and-larke-pass-routes.html", "the Namrung flood of 6 September")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "How can a river flood when it has not rained?", answer: "Something solid gets into it or across it. A landslide can dam a gorge and then burst, an ice or rock avalanche can fall into the valley, or a glacial lake can overflow. The water is released all at once and arrives as a surge carrying mud and boulders. None of this needs rain." },
      { question: "What caused the Budhi Gandaki flood of 11 October 2026?", answer: "It had not been established when this was written. Officials and residents suggested a landslide dam on the Syar Khola or the Ungilung Khola in Chumnubri that burst, or an ice avalanche higher up. The Department of Hydrology and Meteorology recorded no rain in the upper catchment." },
      { question: "What are the warning signs of a flash flood in the mountains?", answer: "A roar from up the valley, sometimes with the ground trembling; the river suddenly dropping or going quiet; the water turning brown or black; a rise with no rain; and local people moving uphill fast. A river that falls suddenly is a warning, not a relief." },
      { question: "What should I do if I hear a flood coming on a trek?", answer: "Go uphill immediately, up the valley side and away from the river, without stopping for your bag. Do not cross a bridge. Wake others as you go. Stay high until daylight and until local people or the authorities say it is over, because these floods often come in several surges." },
      { question: "Why is a river going quiet dangerous?", answer: "Because it usually means the flow has been blocked upstream by a landslide or debris. The water is collecting behind the blockage and will be released when it gives way. People near the Budhi Gandaki described the flow stopping and restarting before the surges on 11 October." },
      { question: "Is it safe to stay in lodges beside the river?", answer: "Lodges on the gravel flat by the water are the most exposed. Where a village has buildings both on the riverbed and on a terrace above, choose the terrace. The houses reported lost at Jagat on 11 October were those in the riverbed settlement." },
      { question: "Do flash floods only happen in the monsoon in Nepal?", answer: "No. Monsoon floods caused by rain are most common from June to September, but floods from landslide dams, avalanches and glacial lakes can happen in any month. The Budhi Gandaki flood came on 11 October, after the monsoon, with no rain recorded." },
      { question: "Does Nepal have a flood warning system?", answer: "Yes. The Flood Forecasting Division of the Department of Hydrology and Meteorology sends SMS alerts to phones in areas at risk and gives information on 1155. It warned people along the Budhi Gandaki at 06:40 on 11 October. Coverage depends on mobile signal, which is patchy in high valleys." },
      { question: "What is a glacial lake outburst flood?", answer: "A flood released from a lake held behind glacial moraine or ice, either because the dam fails or because an avalanche or landslide falls into the lake and pushes water over it. In April 2024 ice avalanches into Birendra Tal below Manaslu caused such an overflow on the Budhi Gandaki." },
      { question: "Should I avoid trekking in gorges such as the Budhi Gandaki or Marsyangdi?", answer: "The risk on any one night is very small, but it cannot be forecast and the consequences are serious. Rather than avoiding gorges altogether, reduce your exposure: sleep above the river, know the uphill route from your lodge, carry a phone with a Nepali SIM, and trek with a guide who knows the valley." },
      { question: "Does a guide make a difference in a flood?", answer: "Yes. A guide understands warnings given in Nepali, knows people in the villages upstream, knows which lodges stand on high ground, and can coordinate with an agency and rescue services. Local knowledge is what got people uphill in time on 11 October." },
    ],
    relatedTreks: ["manaslu-circuit-trek", "annapurna-circuit-trek", "langtang-valley-trek", "tsum-valley-trek", "everest-base-camp-trek"],
    tripsNote: "Treks whose first days follow a river gorge, where the habits in this article matter most.",
    relatedPosts: [
      "budhi-gandaki-flood-october-2026-manaslu-trek-update",
      "nepal-trekking-routes-status-october-2026",
      "travel-insurance-for-trekking-in-nepal",
      "guides-and-porters-in-nepal-rules-and-costs",
      "monsoon-trekking-in-nepal-where-to-go",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["trekking safety", "flash floods", "trail news", "nepal trekking", "glacial lakes"],
    meta: {
      title: "Floods Without Rain in the Himalaya: A Trekker's Safety Guide",
      description: "Why Himalayan rivers flood from a clear sky: landslide dams, ice avalanches and glacial lakes. The warning signs, and what trekkers should do.",
      keywords: "flash flood Himalaya, landslide dam outburst flood, glacial lake outburst flood Nepal, trekking safety flood, Budhi Gandaki flood cause, flood warning signs, Nepal flood alert, GLOF Nepal",
    },
  },
];
