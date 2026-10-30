import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * Trail news: events that change whether a route can be walked.
 *
 * Unlike the guides, these are written on the day from press and official
 * reports, so every figure is attributed and the article says what time it
 * was written. The photographs are archive pictures of the same places and
 * are captioned as such.
 */
export const source = (href: string, label: string) => `<a href="${href}">${label}</a>`;

export const newsA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "budhi-gandaki-flood-october-2026-manaslu-trek-update",
    title: "Budhi Gandaki Flood, 11 October 2026: What Happened and What It Means for Manaslu Treks",
    cluster: "news",
    date: "2026-10-11",
    hero: {
      image: trekImage("manaslu-circuit-trek", "05-budhi-gandaki-yaru-bagar-to-jagat-gorkha-district-manaslu-tr"),
      alt: "The wide gravel bed of the Budhi Gandaki between Yaru Bagar and Jagat in Gorkha, with gorge walls rising on both sides, photographed before the flood.",
    },
    excerpt:
      "A flash flood came down the Budhi Gandaki in northern Gorkha before dawn on Sunday 11 October 2026, sweeping away houses and bridges along the first days of the Manaslu Circuit and the way into the Tsum Valley. This is what is confirmed so far, what is not, and what trekkers should do now.",
    intro: [
      { p: "Before dawn on Sunday 11 October 2026 (25 Asoj 2083), a flood of water, black mud and boulders came down the Budhi Gandaki river in northern Gorkha. It swept away houses, market buildings and bridges in the villages that trekkers know as the first days of the Manaslu Circuit — Sirdibas, Salleri, Jagat, Machha Khola, Soti Khola — and carried on down to Arughat, where part of the road bridge between Gorkha and Dhading went as well." },
      { p: "<strong>This is a developing situation.</strong> We are writing at about 11:00 Nepal Time on the day itself. Everything below comes from statements by Nepali officials and from this morning's reports in the Nepali press, which are named and linked at the end. Where the accounts disagree, we say so. The numbers will change during the day, so read this as a picture of what was known at that hour and check the official channels before you act on it." },
      { p: "<strong>Update, 12:00.</strong> The Assistant Chief District Officer of Gorkha, Netra Prasad Sharma, now counts six bridges lost — the road bridges at Arughat and Soti and four suspension bridges — and says at least ten people are out of contact. Ratopati reports that tourists who had reached the Manaslu Circuit are stranded, without giving a number. The Flood Forecasting Division has rated the riverbank as very high risk down to Benighat and high at Mugling. See also [[post:nepal-trekking-routes-status-october-2026|which treks are open]] and [[post:kathmandu-to-pokhara-road-status-october-2026|the Kathmandu–Pokhara road]]." },
    ],
    sections: [
      {
        h2: "The Situation at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>When</strong>", "From about 04:00 on Sunday 11 October 2026, in at least three surges through the morning"],
                ["<strong>Where</strong>", "The Budhi Gandaki valley in Gorkha district: Chumnubri, Dharche and Arughat rural municipalities"],
                ["<strong>Cause</strong>", "Not confirmed. A landslide or ice avalanche is thought to have blocked a tributary in Chumnubri Ward 6, which then burst. No rain was recorded upstream"],
                ["<strong>Houses</strong>", "More than 35 swept away, according to local officials. Counts are still coming in and differ between sources"],
                ["<strong>Bridges</strong>", "At least four reported lost by officials, including one span of the Arughat road bridge, with more reported locally"],
                ["<strong>People</strong>", "No deaths confirmed as of Sunday morning. Four herders are out of contact on the Ungilung Khola"],
                ["<strong>Rescue</strong>", "Nepali Army, Nepal Police and Armed Police Force deployed; six people airlifted from Jagat"],
                ["<strong>Trekking</strong>", "The lower Manaslu Circuit and the way into the Tsum Valley are inside the damaged zone. We have seen no formal route notice yet"],
                ["<strong>Emergency</strong>", "Ministry of Home Affairs hotline <strong>1234</strong>; Nepal Police <strong>100</strong>"],
              ],
              note: "As reported by about 11:00 Nepal Time on 11 October 2026.",
            },
          },
          {
            figure: {
              image: trekImage("manaslu-circuit-trek", "04-yaru-bagar-to-jagat-gorkha-district-manaslu-trek-nepal-39995"),
              alt: "Trekkers on a steel walkway bolted to a cliff above the gravel bed of the Budhi Gandaki between Yaru Bagar and Jagat.",
              caption: "The trail between Yaru Bagar and Jagat, where the path runs on a steel walkway just above the riverbed. An archive photograph, taken before the flood — this is the stretch of valley the water came down on Sunday.",
            },
          },
        ],
      },
      {
        h2: "What Happened, Hour by Hour",
        blocks: [
          { p: "The times below are the ones given by officials and reporters this morning. They are approximate, and they are all Nepal Time." },
          {
            table: {
              head: ["Time", "What was reported"],
              rows: [
                ["About 04:00", "People in Lokpa and Chumling, in Chumnubri Ward 6, heard a roar from the Syar and Ungilung streams and left their houses. Tourists staying in local lodges went uphill with them, residents told the Kathmandu Post"],
                ["About 04:30", "The flood reached the riverside settlements further down in Chumnubri. Electricity went off and river crossings were lost, according to Nagarik News"],
                ["About 06:30", "The first surge reached Arughat, according to the Flood Forecasting Division of the Department of Hydrology and Meteorology"],
                ["06:40", "An SMS alert went to phones along the river: a large flood was coming from Chumnubri Ward 6, and people should stay away from the river as far down as Trishuli Dobhan and keep to high ground"],
                ["About 07:30", "The flood was at Soti, where the Chief District Officer said it took the bridge and several sheds"],
                ["About 07:50", "A second, larger surge passed Arughat and went over the danger level. A third followed after it had dropped"],
                ["By about 09:30", "The Nepali Army reported that six people had been lifted out of the Jagat area by helicopter"],
              ],
            },
          },
          { p: "The detail that residents kept returning to is that the river did not simply rise. It fell, then came again. A man in Lokpa told the Kathmandu Post that the sound suggested the flow was stopping and restarting, that it was too dark to see what was happening upstream, and that it had not rained. A resident of Jagat told OnlineKhabar that the water dropped for a while and then surged back without warning, and that people there had climbed the hillside and could only watch." },
          { p: "At mid-morning Binod Parajuli, who heads the Flood Forecasting Division, said the flow was still rising and falling and that the risk had not passed. He asked people to stay out of riverside houses and off the roads of the Budhi Gandaki corridor until there was clearer information, at least until Sunday evening." },
        ],
      },
      {
        h2: "What Caused It",
        blocks: [
          { p: "Nobody has established this yet. It was dark, the source is above the last villages, and the first accounts were gathered by telephone. Several explanations were circulating by late morning:" },
          {
            ul: [
              "<strong>A landslide dam on the Syar Khola.</strong> Local reports carried by the Kathmandu Post say a slide may have blocked the Syar Khola between Lokpa and Chumling, in Chumnubri Ward 6, and that the flood came when the blockage gave way.",
              "<strong>A blockage on the Ungilung Khola.</strong> The same paper reports a second possibility, a landslide near the Ungilung Khola in Chumchet, the stream on which the herders' sheds were lost.",
              "<strong>A dry landslide near Chhekampar.</strong> The chief administrative officer of Chumnubri Rural Municipality, Narayan Prasad Sapkota, said residents reported a dry landslide overnight and that he suspected the dam it formed had been breached.",
              "<strong>An ice avalanche.</strong> Dr Dharmaraj Upreti, who heads the National Disaster Risk Reduction and Management Authority (NDRRMA), said early information from residents suggested an ice avalanche in the high north had sent snow, mud and debris into the river. He stressed that it came from phone calls and was not confirmed.",
              "<strong>A landslide above Sirdibas.</strong> The Chief District Officer of Gorkha, Dharmendra Kumar Mishra, said the administration had received early reports of one.",
            ],
          },
          { p: "What the accounts share matters more than where they differ. There was <strong>no rain</strong>: the Department of Hydrology and Meteorology has no record of rainfall in the upper catchment. The water came in pulses, which is what a temporary dam that fails does. And the source is placed in Ward 6, on the <strong>Syar Khola</strong> side — the river of the Tsum Valley, which joins the Budhi Gandaki just below Lokpa. Mr Parajuli said the cause might be clear by Sunday evening." },
          {
            figure: {
              image: trekImage("tsum-valley-trek", "00-tsumvalleygorkha"),
              alt: "Stone houses with slate roofs among fields in the Tsum Valley, Gorkha, with cloud on the hillsides behind.",
              caption: "Fields and stone houses in the Tsum Valley, in an archive photograph. The Syar Khola drains this valley, and the first reports place the source of Sunday's flood on that side of the watershed.",
            },
          },
        ],
      },
      {
        h2: "Damage Reported So Far",
        blocks: [
          { p: "Reading the reports beside a trekking map, every place named lies on the walk-in to Manaslu or the Tsum Valley. From the top of the valley down:" },
          {
            table: {
              head: ["Place", "Where it is on the trek", "Reported on Sunday morning"],
              rows: [
                ["Ungilung Khola, Chumchet", "Tsum Valley side, Chumnubri Ward 6", "Four herders' sheds and about 15 yaks and naks swept away; the four people looking after them are out of contact (National News Agency, RSS)"],
                ["Nyak, Ghatte Khola, Sirdibas", "Above Jagat, on the stage to Deng", "Houses swept away or filled with mud, a primary school building lost at Ghatte Khola, and the suspension bridge at Nyakchet gone"],
                ["Salleri and Jagat", "Jagat is the restricted-area checkpoint", "Salleri bazaar reported washed away and the riverside part of Jagat badly damaged. The construction camp of the 341 MW Budhi Gandaki hydropower project at Salleri was lost"],
                ["Dobhan and Yaru Bagar", "Between Machha Khola and Jagat", "Bailey bridges reported lost, by the vice-chair of Dharche Rural Municipality and in local press"],
                ["Machha Khola", "The usual end of the drive from Kathmandu", "Suspension bridge to Kerauja swept away; water in houses and temporary buildings in the lower part of the bazaar"],
                ["Soti Khola", "The older trailhead", "The motorable bridge linking Arughat Wards 2 and 3 swept away"],
                ["Arughat", "Gateway town on the road in", "One span of the road bridge between Gorkha and Dhading lost; river above danger level; riverside bazaar evacuated; an energy company's site damaged and its 18 staff moved to safety"],
              ],
            },
          },
          { h3: "How many houses" },
          { p: "The figures do not agree yet, and that is normal on the first morning. The Chief District Officer's early count was five to seven houses in the riverbed settlement at Jagat, with a few more downstream. The chair of Chumnubri Ward 3, Ram Kumar Gurung, put it at more than ten across Salleri, Paiyu and Jagat Bagar. By mid-morning local officials, including the chair of the rural municipality, Nima Lama, were speaking of <strong>more than 35 houses</strong> in Salleri, Bagar, Ghatte Khola and other places, while saying that the full extent was not known." },
          { h3: "People" },
          { p: "As of Sunday morning <strong>no deaths had been confirmed</strong>, according to both the Chief District Officer and the NDRRMA. The four people out of contact were staying in sheds on the bank of the Ungilung Khola to look after livestock; one outlet puts the number at five. Because the roar gave some warning and people ran, the villages along the main river appear to have emptied before the water arrived. That is the hopeful reading, and it has not been verified house by house." },
          {
            figure: {
              image: trekImage("tsum-valley-trek", "05-budi-gandaki-river"),
              alt: "The Budhi Gandaki flowing grey between wooded banks under a heavy overcast sky.",
              caption: "The Budhi Gandaki on an ordinary overcast day, inside its banks. An archive photograph, taken before the flood.",
            },
          },
        ],
      },
      {
        h2: "Rescue and the Warnings Downstream",
        blocks: [
          { p: "The Home Minister, Sudan Gurung, who was himself elected from Gorkha, said helicopters and security personnel had been sent for rescue, relief and evacuation, and asked people in Sirdibas, Jagat, Salleri, Khorlabesi, Machha Khola, Soti, Arkhet and Arughat to move to safer ground at once. The Nepali Army sent a reconnaissance team by helicopter from Kathmandu and local units on foot with rescue equipment. The NDRRMA said that early in the morning conditions did not allow the helicopter to land; by about 09:30 the army reported six people airlifted from Jagat. The reports do not say who they were." },
          { p: "Anyone who needs emergency help has been asked to call the Ministry of Home Affairs on <strong>1234</strong>." },
          { h3: "Below Arughat" },
          { p: "The Budhi Gandaki joins the Trishuli at Benighat, and the alert follows the water. The authorities asked people in Gorkha, Dhading, Tanahun and Chitwan to keep away from the banks as far as the Trishuli confluence and on towards Malekhu and Mugling, not to go down to watch or film the river, and not to collect the timber it is carrying. Mr Parajuli said that, so far, no major effect had been seen downstream of Arughat." },
          { p: "For travellers this matters because the main Kathmandu–Pokhara road follows the Trishuli below Benighat. Nepali outlets also carried separate reports on Sunday morning of a closure on the Kathmandu–Mugling section. If you are travelling by road today, check with the traffic police on <strong>103</strong> before you set out." },
        ],
      },
      {
        h2: "What This Means for the Manaslu Circuit and the Tsum Valley",
        blocks: [
          { p: "The road and the trail into Manaslu both follow this river. A normal trip drives from Kathmandu through Arughat and Soti Khola to Machha Khola, walks up the gorge through Khorlabesi, Tatopani, Dobhan and Yaru Bagar to the checkpoint at Jagat, and continues through Salleri, Sirdibas and Philim. Just beyond, near Lokpa, the Tsum Valley trail turns off to the north-east and the Manaslu trail carries on to Deng. Those are the place names in this morning's damage reports." },
          {
            ul: [
              "<strong>The way in is broken in several places.</strong> With a span of the Arughat bridge gone, the Soti bridge gone, and suspension and bailey bridges lost between Machha Khola and Philim, nobody should plan on reaching the trailhead or walking the lower gorge until it has been inspected.",
              "<strong>There is no formal trekking notice yet that we have seen.</strong> After the flood at Namrung on 6 September, the District Administration Office in Gorkha suspended trekking on the Manaslu and Larke Pass routes the same day. As of 11:00 today we had not seen an equivalent notice. Do not read that as permission: the administration has spent the morning on rescue.",
              "<strong>The upper valley is upstream of the flood.</strong> Deng, Namrung, Lho, Samagaun and Samdo lie on the main Budhi Gandaki above the point where the Syar Khola joins it. None of the reports we have read names damage there. That is an absence of reports, not a confirmation, and those villages are now cut off from the road by the gorge below them.",
              "<strong>The Tsum Valley is the side the flood came from.</strong> The suspected blockage is between Lokpa and Chumling, which is the only trail in and out. The state of that trail is unknown.",
              "<strong>Do not assume September's timetable.</strong> After the Namrung flood, reports at the time said walkers were moving again within days over temporary crossings. Sunday's damage is spread along a much longer stretch of valley and includes road bridges.",
            ],
          },
          { p: "For the route as it normally is, see our [[post:manaslu-circuit-trek-complete-guide|complete Manaslu Circuit guide]] and the [[post:tsum-valley-trek-guide|Tsum Valley guide]]. Both describe a trail that, as of today, is not the trail on the ground." },
        ],
      },
      {
        h2: "If You Are on the Trail or About to Start",
        blocks: [
          { p: "Instructions from the police, the army and local officials on the spot come before anything written here. With that said:" },
          { h3: "In the lower gorge, Soti Khola to Philim" },
          { p: "Stay high and stay away from the river. The flow was still rising and falling at mid-morning, and a river that drops suddenly after a surge is a warning, not an all-clear. Do not use improvised crossings, do not walk down the valley on your own initiative, and do not go to the bank to look. Tell your guide's agency where you are, and call 1234 if you need help." },
          { h3: "In the Tsum Valley" },
          { p: "Stay in a village above the river and wait. The way out passes the place where the blockage is thought to have formed, and nobody yet knows what state it is in. Your guide and the local police post are the people to listen to." },
          { h3: "In the upper valley, Namrung to Samdo" },
          { p: "You are above the flood, and the way back down is the damaged gorge. The other way out is the one the circuit takes anyway: over the Larke La to Bimthang and down to Dharapani in the Marsyangdi valley, which does not use the Budhi Gandaki at all. Whether to cross is a decision for your guide, made on the weather, your acclimatisation and whatever the authorities instruct — our [[post:larke-la-pass-crossing-guide|Larke La guide]] describes what the day involves. What you should not do is start walking down." },
          { h3: "Due to start in the next few days" },
          { p: "Do not travel to Arughat, Soti Khola or Machha Khola. The authorities have asked people to keep off the corridor road, the bridges on it are down, and the valley needs every bed and every helicopter seat for the people who live there." },
          { h3: "Booked for later this season" },
          { p: "Wait for the assessment before you decide anything. Read your insurance policy for what it says about natural disasters, curtailment and helicopter evacuation — our guide to [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking]] explains what to look for. Manaslu and Tsum are restricted areas whose permits are issued for fixed dates through an agency, so a change of plan goes through the agency too; the process is in our [[post:restricted-area-trekking-permits-in-nepal|restricted-area permit guide]]. If you are booked with us on any trip that uses this valley, write to us and we will go through the options with you." },
        ],
      },
      {
        h2: "Alternatives If Your Manaslu Trek Cannot Go",
        blocks: [
          { p: "None of the routes below uses the Budhi Gandaki valley. They are listed by how close they come to what Manaslu offers, and each is covered properly in [[post:manaslu-circuit-alternatives-autumn-2026|alternatives to the Manaslu Circuit]]." },
          {
            table: {
              head: ["Trip", "What it shares with Manaslu", "Getting there"],
              rows: [
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit trek]]", "A full circuit over a high pass, the 5,416 m Thorong La, with lodges throughout", "Road to Besisahar and on to Chame, patched after floods in late September. No restricted-area permit"],
                ["[[trek:nar-phu-valley-trek|Nar Phu Valley trek]]", "A restricted area of Tibetan villages with very few other trekkers", "Off the Annapurna Circuit road at Koto. Restricted-area permit through an agency"],
                ["[[trek:upper-mustang-trek|Upper Mustang trek]]", "Tibetan Buddhist culture behind a permit line", "By way of Pokhara and Jomsom"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]]", "Big mountain walls close at hand, on a shorter walk", "From Pokhara"],
                ["[[trek:mardi-himal-trek|Mardi Himal trek]]", "A quiet ridge route for those with a week", "From Pokhara"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp trek]]", "High-altitude trekking among Tibetan-influenced villages", "Flight to Lukla"],
              ],
            },
          },
          { p: "Two cautions. These regions have had their own damage this autumn: the trekking agencies' association reported all of them open on 8 October, but the road into Manang was cut at the end of September and is slower than usual. And road journeys from Kathmandu towards Pokhara and Besisahar run beside the Trishuli for part of the way, which is under a riverbank alert today. Check the road before you leave, or fly to Pokhara. How the two circuits compare in ordinary times is covered in [[post:manaslu-vs-annapurna-circuit|Manaslu or the Annapurna Circuit]], and the Annapurna route itself in the [[post:annapurna-circuit-trek-complete-guide|Annapurna Circuit guide]]." },
        ],
      },
      {
        h2: "Four Floods in Seven Weeks",
        blocks: [
          { p: "This is at least the fourth damaging flood in Nepal's central Himalaya since late August. On 26 August the Bhote Koshi came down from the border at Rasuwagadhi into the Trishuli in the worst disaster the country has seen in years: at least 1,400 people killed and nearly 5,300 missing, according to UN agencies on 9 October. On 6 September the Therang Khola took two bridges and two micro-hydropower plants at Namrung, higher up this same valley; officials said then that debris had dammed the stream near its source before bursting. At the end of September debris from a side stream dammed the Marsyangdi at Chame and cut upper Manang off by road. On Sunday the Home Minister called the Budhi Gandaki flood another devastating one for the country, and the vice-chair of Chumnubri, Laxmi Gurung, compared it with the Bhote Koshi." },
          { p: "The lesson for anyone walking in a Himalayan gorge is uncomfortable but worth stating plainly. A flood of this kind does not need rain, and the end of the monsoon does not end the risk. It comes from a slope or a glacier failing somewhere above the last village, often at night. What saved lives on Sunday was the oldest warning there is: people heard the river change and went uphill without waiting to find out why. If a river beside you goes quiet, drops suddenly or turns dark with mud, do the same. How these floods happen and how to stay out of their way is in [[post:flash-floods-without-rain-himalaya-trekking-safety|floods without rain]]." },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          { p: "Written from the following reports, all published on Sunday 11 October 2026. We have not been able to verify any of it on the ground." },
          {
            ul: [
              `The Kathmandu Post — ${source("https://kathmandupost.com/gandaki-province/2026/10/11/what-we-know-so-far-about-the-damage-caused-by-budhi-gandaki-floods", "What we know so far about the damage caused by Budhi Gandaki floods")} and ${source("https://kathmandupost.com/national/2026/10/11/flood-sweeps-away-seven-houses-in-gorkha", "Flood sweeps away houses, bridges in Gorkha")}`,
              `OnlineKhabar English — ${source("https://english.onlinekhabar.com/budhi-gandaki-flash-flood.html", "more than 35 houses swept away")}, ${source("https://english.onlinekhabar.com/devastating-flood-budhi-gandaki.html", "what triggered the flood")}, ${source("https://english.onlinekhabar.com/missing-flood-gorkha.html", "four missing and 15 yaks swept away")} and ${source("https://english.onlinekhabar.com/army-budhi-gandaki-flood-helicopter.html", "the army's deployment")}`,
              `Nagarik News (Nepali) — ${source("https://nagariknews.nagariknetwork.com/social-affairs/risk-persists-as-flood-flow-in-budhigandaki-continues-to-fluctuate-chief-parajuli-96-34.html", "the Flood Forecasting Division on the three surges")}`,
              `Ratopati (Nepali) — ${source("https://www.ratopati.com/story/598744/floods-erupt-as-landslide-blocks-budhi-gandaki", "running report from Gorkha")}`,
              `Annapurna Post (Nepali) — ${source("https://annapurnapost.com/story/509349/", "six people rescued from Jagat")}`,
              `Khabarhub English — ${source("https://english.khabarhub.com/2026/11/571528/", "helicopters deployed for rescue")}`,
              `ANI, carried by The Tribune — ${source("https://www.tribuneindia.com/news/world/flood-sweeps-several-houses-in-nepals-gorkha-warning-issued-along-budhi-gandaki-river-settlements", "the SMS alert and the Chief District Officer's first statement")}`,
              `MadaniBeat (Nepali) — ${source("https://www.madanibeat.com/2026/10/11/125915/", "the NDRRMA briefing on Arughat")}`,
            ],
          },
          { p: "For the current position, go to the National Disaster Risk Reduction and Management Authority, the Flood Forecasting Division of the Department of Hydrology and Meteorology, and the District Administration Office, Gorkha." },
        ],
      },
    ],
    faqs: [
      { question: "What happened on the Budhi Gandaki on 11 October 2026?", answer: "A flash flood of water, mud and boulders came down the Budhi Gandaki river in northern Gorkha from about 04:00 Nepal Time, in at least three surges. It swept away houses and bridges from Chumnubri down to Arughat. As of Sunday morning no deaths had been confirmed and four herders were out of contact." },
      { question: "What caused the Budhi Gandaki flood?", answer: "It has not been established. Officials and residents have suggested a landslide that dammed the Syar Khola or the Ungilung Khola in Chumnubri Ward 6 and then burst, or an ice avalanche higher up. The Department of Hydrology and Meteorology recorded no rain in the upper catchment, so rainfall is not thought to be the cause." },
      { question: "Were any trekkers or tourists hurt in the flood?", answer: "None of the reports we read on Sunday morning mentions an injured tourist. Residents told the Kathmandu Post that tourists staying in local lodges fled uphill with them at about 04:00. No deaths had been confirmed among anyone by Sunday morning, and the four people out of contact are local herders." },
      { question: "Is the Manaslu Circuit closed after the flood?", answer: "As of 11:00 Nepal Time on 11 October we had not seen a formal notice from the District Administration Office in Gorkha. In practice the way in is broken: bridges are down at Arughat, Soti, Machha Khola and Nyak, and the authorities have asked people to keep off the corridor road. Do not start the trek until the route has been assessed." },
      { question: "Is the Tsum Valley affected?", answer: "Yes. The first reports place the source of the flood on the Syar Khola, the river of the Tsum Valley, with a suspected blockage between Lokpa and Chumling. That is the only trail in and out, and its condition is not yet known." },
      { question: "Are Samagaun, Samdo and the Larke La affected?", answer: "They are upstream of the point where the flood entered the Budhi Gandaki, and none of the reports we have read names damage there. But the gorge below them is damaged, so the road cannot currently be reached by walking back down. The Larke La leads out to the Marsyangdi valley without using the Budhi Gandaki." },
      { question: "Which bridges were lost in the flood?", answer: "Officials reported one span of the road bridge at Arughat between Gorkha and Dhading, the motorable bridge at Soti, the suspension bridge from Machha Khola to Kerauja, and the suspension bridge at Nyakchet near Sirdibas and Philim. Bailey bridges at Dobhan and Yaru Khola were also reported lost." },
      { question: "Can I still drive to Arughat, Soti Khola or Machha Khola?", answer: "You should not try. A span of the Arughat bridge and the bridge at Soti are gone, and the Flood Forecasting Division asked people on Sunday not to use the Budhi Gandaki corridor roads until clearer information is issued." },
      { question: "Is the Kathmandu to Pokhara road affected?", answer: "The road follows the Trishuli below Benighat, where the Budhi Gandaki joins it, and people have been told to stay off the riverbanks along that stretch. The Flood Forecasting Division said on Sunday morning that no major effect had been seen downstream of Arughat. Check with the traffic police on 103 before travelling." },
      { question: "Does the flood affect Annapurna or Everest treks?", answer: "No. The flood is confined to the Budhi Gandaki and the river it flows into. The Annapurna and Everest regions are in different river systems and their trails are not touched by it. Road travel towards Pokhara should be checked on the day because of the alert along the Trishuli." },
      { question: "Who should I call in an emergency in the flood area?", answer: "The Ministry of Home Affairs asked anyone needing emergency help to call its hotline on 1234. Nepal Police can be reached on 100. If you are trekking with an agency, tell it where you are as soon as you have a signal." },
      { question: "When will the Manaslu Circuit reopen?", answer: "Nobody can say yet. After the smaller flood at Namrung on 6 September, reports said walkers were moving again within days over temporary crossings. Sunday's damage covers a much longer stretch of the valley and includes road bridges, so wait for the District Administration Office in Gorkha rather than assuming a date." },
      { question: "Will travel insurance cover a trek cancelled by the flood?", answer: "It depends on the policy and on when you bought it. Many policies cover cancellation or curtailment caused by a natural disaster if the policy was in place before the event, and some exclude it. Read the wording on natural disasters, curtailment and helicopter evacuation, and ask the insurer in writing." },
    ],
    relatedTreks: ["manaslu-circuit-trek", "tsum-valley-trek", "tsum-valley-and-manaslu-circuit-trek", "larke-pass-trek", "lower-manaslu-trek"],
    tripsNote: "The trips that use the Budhi Gandaki valley. Check the state of the route with us before booking any of them.",
    relatedPosts: [
      "nepal-trekking-routes-status-october-2026",
      "manaslu-circuit-alternatives-autumn-2026",
      "kathmandu-to-pokhara-road-status-october-2026",
      "flash-floods-without-rain-himalaya-trekking-safety",
      "manaslu-circuit-trek-complete-guide",
      "travel-insurance-for-trekking-in-nepal",
    ],
    tags: ["trail news", "manaslu circuit", "tsum valley", "manaslu region", "trekking safety"],
    meta: {
      title: "Budhi Gandaki Flood 11 Oct 2026: Damage & Manaslu Trek Update",
      description: "A flash flood hit the Budhi Gandaki in Gorkha on 11 October 2026. What is confirmed, the damage on the Manaslu and Tsum route, and what trekkers should do.",
      keywords: "Budhi Gandaki flood, Budhi Gandaki flood October 2026, Gorkha flood, Manaslu Circuit flood, Manaslu trek closed, Tsum Valley flood, Arughat bridge, Chumnubri flood, Manaslu trek update",
    },
  },
];
