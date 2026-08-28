import { p, type TrekDays } from "./types";

/**
 * The Annapurna Sanctuary family — six treks that share the Modi Khola approach
 * but reach it differently. The shared legs are deliberately written afresh for
 * each trek rather than repeated verbatim, so no two trek pages carry the same
 * paragraphs.
 */
export const annapurnaSanctuaryTreks: TrekDays[] = [
  {
    slug: "annapurna-base-camp-trek",
    days: [
      {
        index: 0,
        title: "Arrival in Kathmandu (1,400 m)",
        html: p(
          "Your trip begins when you land at Tribhuvan International Airport in <strong>Kathmandu (1,400 m)</strong>. A member of our team will be waiting in the arrivals hall with a name board and will drive you to your hotel in Thamel, the compact, walkable quarter that has been the staging post for Himalayan expeditions for more than half a century.",
          "Once you have checked in and had a chance to shower off the flight, we meet for a pre-trek briefing. Your guide runs through the day-by-day plan for the <strong>Annapurna Base Camp trek</strong>, checks your kit against the packing list, and answers questions about altitude, teahouse life, meals, and how the walking days are paced. This is the moment to sort out anything missing — Thamel's gear shops are a few minutes' walk away and stock everything from down jackets to trekking poles.",
          "The rest of the day is yours. Many trekkers use the afternoon to wander Thamel's alleys, drink coffee in a courtyard garden, or simply sleep off the journey. Overnight in Kathmandu.",
        ),
      },
      {
        index: 1,
        title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
        html: p(
          "After breakfast we leave Kathmandu and follow the Prithvi Highway west toward <strong>Pokhara (822 m)</strong>. The road traces the Trishuli and then the Marsyangdi river for much of its length, with the valley walls rising steeply on either side and the water running green and fast below. It is roughly a 200 km journey and, with traffic and stops, takes most of the day.",
          "The drive is a good introduction to middle-hill Nepal. You pass terraced hillsides stacked like contour lines, roadside towns where buses unload crates of vegetables, suspension footbridges strung across the river, and rafting groups putting in at Charaudi and Kuringhat. We break for lunch at a riverside restaurant along the way.",
          "Pokhara appears in the late afternoon, and the change is immediate: a warm, low-lying lakeside town with the Annapurna massif and the fishtail summit of Machhapuchhre standing directly above it. After checking in we walk down to <strong>Phewa Lake</strong> for the evening. Overnight in Pokhara.",
        ),
      },
      {
        index: 2,
        title: "Drive from Pokhara (822 m) to Jhinu Danda (1,780 m) and Trek to Lower Sinuwa (2,340 m)",
        html: p(
          "An early start takes us out of Pokhara by jeep on the winding road to <strong>Jhinu Danda (1,780 m)</strong>, climbing steadily through Nayapul and up the Modi Khola valley. The road is rough in places and the journey takes around three hours, but it saves a full day of walking on the lower trail.",
          "From Jhinu Danda the trekking begins. The path drops to cross the Modi Khola on a long suspension bridge, then starts the sustained stone-stair climb toward <strong>Chhomrong (2,170 m)</strong>, the last permanent Gurung village before the Sanctuary. Chhomrong sits on a shelf with a clear view up the valley, and it is worth pausing here — this is the point where the trek stops being a walk through farmland and becomes a walk into the mountains.",
          "Beyond Chhomrong the trail descends to the Chhomrong Khola, crosses it, and climbs again through bamboo and rhododendron to <strong>Lower Sinuwa (2,340 m)</strong>. Your first teahouse night is here, with the valley falling away below and Annapurna South visible when the cloud lifts.",
        ),
      },
      {
        index: 3,
        title: "Trek from Lower Sinuwa (2,340 m) to Deurali (3,230 m)",
        html: p(
          "Today the valley narrows and the walk changes character entirely. From Lower Sinuwa the trail contours through thick forest to <strong>Bamboo (2,310 m)</strong>, a cluster of lodges in a damp, green hollow where the bamboo grows dense enough to close over the path.",
          "From Bamboo the climb is steady and almost continuous, following the Modi Khola upstream through <strong>Dovan (2,600 m)</strong> and past the sacred overhang at Himalaya. The forest here is oak, rhododendron and moss, often wet underfoot, and the river runs loud in the gorge to your left. Waterfalls drop directly onto the trail in places. Watch for langur monkeys in the canopy and, higher up, for the first Himalayan tahr on the cliffs.",
          "The last section climbs above the treeline into a narrowing rock corridor before reaching <strong>Deurali (3,230 m)</strong>. At almost 900 m of ascent this is the longest climbing day so far, and the air is noticeably thinner. Drink plenty, eat well, and get an early night. Overnight in a teahouse at Deurali.",
        ),
      },
      {
        index: 4,
        title: "Trek from Deurali (3,230 m) to Annapurna Base Camp (4,130 m)",
        html: p(
          "This is the day the trek has been building toward. Leaving Deurali early, the trail climbs through the last of the gorge, crosses avalanche terrain that the guides read carefully in spring, and emerges into open, treeless country where the valley finally opens out.",
          "<strong>Machhapuchhre Base Camp (3,700 m)</strong> comes first, a handful of lodges on a grassy shelf directly beneath the unclimbed fishtail summit. We stop here for tea and to let the altitude settle. From MBC it is a further two hours of gradual climbing across moraine and alpine meadow, gaining another 430 m, with the peaks rising higher around you at every step.",
          "Then the valley opens completely and you are standing inside the <strong>Annapurna Sanctuary</strong> at <strong>Annapurna Base Camp (4,130 m)</strong> — a natural amphitheatre ringed by Annapurna I (8,091 m), Annapurna South, Hiunchuli, Gangapurna and Machhapuchhre. Sunset turns the whole rim orange, and on a clear night the glacier cracks audibly in the dark. Overnight at base camp.",
        ),
      },
      {
        index: 5,
        title: "Trek from Annapurna Base Camp (4,130 m) to Bamboo (2,310 m)",
        html: p(
          "Wake before dawn. First light on Annapurna I is the single best moment of the trek — the summit catches the sun long before the valley floor does, and the whole amphitheatre turns from grey to pink to gold over about twenty minutes. Bring gloves; it is genuinely cold until the sun reaches you.",
          "After breakfast we begin the descent, retracing the route past Machhapuchhre Base Camp and down through the gorge to Deurali. Losing altitude quickly is a relief to the lungs, but it is hard on the knees, and the stone steps are uneven — trekking poles earn their keep today.",
          "The trail continues down through Himalaya and Dovan, back into the humid, green world of the lower valley, and finishes at <strong>Bamboo (2,310 m)</strong>. It is a long day covering more than 1,800 m of descent, but the walking is straightforward and the air gets thicker and warmer with every hour. Overnight at Bamboo.",
        ),
      },
      {
        index: 6,
        title: "Trek from Bamboo (2,310 m) to Jhinu Danda (1,780 m) and Drive to Pokhara (822 m)",
        html: p(
          "The final trekking morning takes you back down the Modi Khola through Upper and Lower Sinuwa, then down the long stone staircase to the Chhomrong Khola and back up the other side — the one genuine climb left in the trek, and a reminder of how much height you have been covering all week.",
          "From Chhomrong the path descends steadily to <strong>Jhinu Danda (1,780 m)</strong>. If time allows, it is a twenty-minute walk down to the <strong>natural hot springs</strong> on the bank of the Modi Khola, where three stone pools sit right beside the river. Soaking tired legs in hot water after five days of stone steps is, for many trekkers, the highlight of the return leg.",
          "A jeep meets us at Jhinu Danda for the drive back to <strong>Pokhara (822 m)</strong>, arriving in the late afternoon. Tonight is the celebration dinner by the lake. Overnight in Pokhara.",
        ),
      },
      {
        index: 7,
        title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
        html: p(
          "There is no rush this morning. If you are up early, the sunrise view of the Annapurna range from the lakeside is worth the alarm — the same peaks you stood beneath two days ago, now seen from 3,000 m below. Some trekkers take a short boat trip on Phewa Lake or walk up to the World Peace Pagoda before breakfast.",
          "We then begin the drive back east to <strong>Kathmandu (1,400 m)</strong>, retracing the Prithvi Highway along the Marsyangdi and Trishuli rivers. It is a full day on the road with a lunch stop en route, and the valley scenery is just as good in this direction.",
          "You will arrive in Kathmandu in the late afternoon and transfer to your hotel. The evening is free — a good opportunity for last-minute shopping in Thamel, where you can find pashmina, singing bowls, Nepali tea and trekking gear. Overnight in Kathmandu.",
        ),
      },
      {
        index: 8,
        title: "Departure from Kathmandu (1,400 m)",
        html: p(
          "Today is your final day in Nepal. Depending on your flight time, you may have a free morning to explore a little more of the Kathmandu Valley — <strong>Boudhanath Stupa</strong>, <strong>Pashupatinath Temple</strong> and <strong>Swayambhunath</strong> are all within a short drive and all worth seeing if you have not already.",
          "Our representative will collect you from your hotel and drive you to Tribhuvan International Airport approximately three hours before your scheduled departure, which gives you comfortable margin for check-in and security.",
          "We hope the <strong>Annapurna Base Camp trek</strong> has given you the Himalaya at close range — a week that started in a city at 1,400 m and ended standing inside a ring of eight-thousanders. If you are already thinking about the next one, our team is happy to talk you through Everest Base Camp, the Manaslu Circuit or Upper Mustang. Safe travels, and we hope to see you back in Nepal.",
        ),
      },
    ],
  },

  {
    slug: "abc-trek-nepal",
    days: [
      {
        index: 0,
        title: "Day 1: Drive from Pokhara (822 m) to Jhinu Danda (1,780 m) and Trek to Lower Sinuwa (2,340 m)",
        html: p(
          "The <strong>ABC trek</strong> starts with a jeep transfer out of <strong>Pokhara (822 m)</strong> in the early morning. The road runs north-west through Hemja and Nayapul before turning up the Modi Khola valley, deteriorating into rough track as it climbs. Allow around three hours to <strong>Jhinu Danda (1,780 m)</strong>.",
          "Boots on, the trail immediately drops to a suspension bridge over the Modi Khola and then climbs — hard — up the stone staircase to <strong>Chhomrong (2,170 m)</strong>. This Gurung village is the gateway to the Annapurna Sanctuary and the last place with proper shops. Take the chance to look up the valley: the wall of Annapurna South fills the head of it.",
          "From Chhomrong the route drops sharply to the Chhomrong Khola, crosses on a steel bridge, and climbs back through terraced fields and bamboo stands to <strong>Lower Sinuwa (2,340 m)</strong>. It is a demanding first day with a lot of vertical in both directions, and the teahouse at Sinuwa is a welcome sight. Overnight at Lower Sinuwa.",
        ),
      },
      {
        index: 1,
        title: "Trek from Lower Sinuwa (2,340 m) to Deurali (3,230 m)",
        html: p(
          "Breakfast at Sinuwa, then into the forest. The path traverses at a fairly even grade at first, passing through <strong>Bamboo (2,310 m)</strong> where the valley closes in and the vegetation becomes genuinely jungly — thickets of bamboo, dripping moss, and the constant noise of the river below.",
          "After Bamboo the trail turns upward and stays that way. You climb through <strong>Dovan (2,600 m)</strong> and past the shrine at Himalaya, gaining height steadily along the west bank of the Modi Khola. The gorge tightens, the trees thin, and waterfalls spill across the trail. This stretch is often damp, so watch your footing on the wet stone.",
          "The final push climbs out of the treeline into a rocky defile and reaches <strong>Deurali (3,230 m)</strong>, a small group of lodges wedged into the narrowest part of the valley. You have gained nearly 900 m today and are now high enough that altitude matters — hydrate well and take it easy this evening. Overnight at Deurali.",
        ),
      },
      {
        index: 2,
        title: "Trek from Deurali (3,230 m) to Annapurna Base Camp (4,130 m)",
        html: p(
          "The big day. From Deurali the trail continues up the gorge, crossing slopes that carry avalanche risk in late winter and spring — your guide will check conditions and set the pace accordingly. The vegetation gives out entirely and the walking becomes rock, scree and snowmelt.",
          "The valley suddenly widens at <strong>Machhapuchhre Base Camp (3,700 m)</strong>, where a few lodges sit on grass directly under the fluted ice of Machhapuchhre — the sacred fishtail peak that has never been officially summited. We stop for tea and to let everyone acclimatise before the last stretch.",
          "The final two hours climb gently across moraine and meadow into the <strong>Annapurna Sanctuary</strong> itself, arriving at <strong>Annapurna Base Camp (4,130 m)</strong>. You finish standing in a glacial bowl enclosed by Annapurna I (8,091 m), Annapurna South (7,219 m), Hiunchuli, Gangapurna, Tent Peak and Machhapuchhre. There is nowhere else in Nepal where so many big peaks stand so close on every side. Overnight at base camp.",
        ),
      },
      {
        index: 3,
        title: "Trek from Annapurna Base Camp (4,130 m) to Bamboo (2,310 m)",
        html: p(
          "Set an alarm for dawn. The sunrise from base camp lights Annapurna I first, then works its way around the rim of the Sanctuary peak by peak. It is bitterly cold for the twenty minutes it takes, and completely worth it. Photograph it, then go back in for a hot breakfast.",
          "The descent begins after eating. You retrace the route across the meadow to Machhapuchhre Base Camp and then drop back into the gorge toward Deurali, losing height fast. The change is physical and immediate — breathing gets easier by the hour, and by Himalaya you are back among trees.",
          "The trail continues down through Dovan and into the humid green of the lower valley, finishing at <strong>Bamboo (2,310 m)</strong>. Today covers more than 1,800 m of descent on uneven stone steps, which is tough on knees and quads; poles help enormously. Overnight at Bamboo.",
        ),
      },
      {
        index: 4,
        title: "Trek from Bamboo (2,310 m) to Jhinu Danda (1,780 m) and Drive to Pokhara (822 m)",
        html: p(
          "The last walking day retraces the forest trail through Upper and Lower Sinuwa, then drops to the Chhomrong Khola and climbs the stone steps back up to <strong>Chhomrong (2,170 m)</strong> — a sting in the tail after four hard days, but a short one.",
          "From Chhomrong it is a steady descent to <strong>Jhinu Danda (1,780 m)</strong>. Twenty minutes further down, on the bank of the Modi Khola, are the <strong>Jhinu hot springs</strong>: stone-walled pools fed by natural thermal water, with the river running cold and loud beside them. If the schedule allows, this is the perfect way to finish the trek.",
          "A jeep collects us at Jhinu Danda for the drive back down the valley to <strong>Pokhara (822 m)</strong>, arriving late afternoon. Your <strong>ABC trek</strong> ends here, with the Annapurna range visible above the lake as a reminder of where you have just been. Overnight in Pokhara.",
        ),
      },
    ],
  },
];
