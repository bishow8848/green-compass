import { p, type TrekDays } from "./types";

/** Khumbu — Everest Base Camp and the shorter Everest View itinerary. */
export const everestTreks: TrekDays[] = [
  {
    slug: "everest-base-camp-trek",
    days: [
      {
        index: 0,
        title: "Arrival in Kathmandu (1,400 m)",
        html: p(
          "You land at Tribhuvan International Airport in <strong>Kathmandu (1,400 m)</strong> and are met in the arrivals hall by our representative, who drives you to your hotel in Thamel — the lane-and-courtyard district that has been the launching point for Everest expeditions since the 1950s.",
          "Your guide joins you later for the trip briefing. The <strong>Everest Base Camp trek</strong> demands more of you than most Nepal itineraries, so we go through it carefully: the flight into Lukla, the two built-in acclimatisation days at Namche and Dingboche, the daily height gains, and the symptoms of altitude sickness everyone in the group should be able to recognise. Your guide checks your kit thoroughly — a proper down jacket, a four-season sleeping bag and sturdy broken-in boots are not optional above 4,000 m.",
          "Anything missing can be bought or hired in Thamel within a few minutes' walk. The rest of the day is free to rest or explore. Overnight in Kathmandu.",
        ),
      },
      {
        index: 1,
        title: "Fly from Kathmandu (1,400 m) to Lukla (2,860 m) and Trek to Phakding (2,651 m)",
        html: p(
          "A very early transfer to the airport for the flight into the Khumbu. Depending on the season you will fly from Kathmandu or from Ramechhap, a four-hour pre-dawn drive east. The flight itself is short — around 30 minutes — and unforgettable, running along the flank of the Himalaya with peak after peak on the left-hand side.",
          "Landing at <strong>Lukla (2,860 m)</strong> is famous for good reason: the runway is 527 m long, slopes uphill at a gradient of about 12%, and ends at a stone wall. Once down, you meet your porters over tea while the loads are sorted, then start walking.",
          "The first day is deliberately gentle, and it goes downhill. The trail follows the Dudh Koshi — the 'milk river', named for its glacial colour — through Chheplung and Ghat, past mani walls, prayer wheels and the first of many suspension bridges strung with faded flags. You reach <strong>Phakding (2,651 m)</strong> in the early afternoon, having lost 200 m, which is exactly what you want on day one. Overnight in a teahouse.",
        ),
      },
      {
        index: 2,
        title: "Trek from Phakding (2,651 m) to Namche Bazaar (3,440 m)",
        html: p(
          "A serious day. The trail follows the Dudh Koshi upstream through pine forest, crossing and recrossing the river on high suspension bridges. At Monjo you register at the entrance to <strong>Sagarmatha National Park</strong>, the UNESCO World Heritage site that protects the whole Everest region.",
          "Beyond Jorsalle the valley narrows and the route crosses the <strong>Hillary Bridge</strong>, the highest and longest on the trail, hung far above the confluence of the Dudh Koshi and the Bhote Koshi. From the far side begins the climb everyone remembers: roughly 600 m of relentless switchbacks up through pine forest to Namche. Around halfway there is a clearing where, on a clear morning, you get your first sight of <strong>Mount Everest (8,849 m)</strong> in the distance behind the Nuptse ridge.",
          "<strong>Namche Bazaar (3,440 m)</strong> sits in a natural horseshoe amphitheatre and is the commercial heart of Sherpa country — bakeries, gear shops, cafés and a Saturday market. Overnight in Namche.",
        ),
      },
      {
        index: 3,
        title: "Acclimatization Day in Namche Bazaar (3,440 m)",
        html: p(
          "A rest day, but not a lazy one. The rule of acclimatisation is climb high, sleep low, so we spend the morning gaining height and come back down to sleep at Namche.",
          "The standard excursion climbs to the <strong>Everest View Hotel (3,880 m)</strong> above the village, one of the highest-placed hotels in the world, where the terrace looks straight out at <strong>Everest</strong>, <strong>Lhotse</strong> and the extraordinary spire of <strong>Ama Dablam (6,812 m)</strong>. From there we walk on to the Sherpa villages of <strong>Khumjung</strong> and Khunde, where the monastery is said to hold a yeti scalp and the school was founded by Sir Edmund Hillary in 1961.",
          "Back in Namche in the afternoon, it is worth visiting the Sherpa Culture Museum and the Sagarmatha National Park visitor centre. Drink steadily throughout the day, eat well, and let your body do its work. Overnight in Namche Bazaar.",
        ),
      },
      {
        index: 4,
        title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,956 m)",
        html: p(
          "One of the most scenic walking days on the whole route. The trail leaves Namche and contours high along the valley wall with an almost continuous view of Everest, Lhotse, Nuptse and Ama Dablam ahead — this is the stretch that appears in most photographs of the trek.",
          "At Kyangjuma the path drops steeply to the Dudh Koshi at <strong>Phunki Thanga (3,250 m)</strong>, where water-driven prayer wheels turn in the river. Then comes the climb: around 700 m of steady ascent through rhododendron and birch to the ridge at Tengboche. It is a long pull and it comes in the afternoon, so pace it.",
          "<strong>Tengboche (3,956 m)</strong> is the spiritual centre of the Khumbu. Its monastery, rebuilt after a fire in 1989, sits on a saddle with Ama Dablam framed behind it, and visitors are welcome at the late-afternoon prayer ceremony — monks, horns and chanting, with the mountain going pink outside. Overnight in Tengboche.",
        ),
      },
      {
        index: 5,
        title: "Trek from Tengboche (3,956 m) to Dingboche (4,380 m)",
        html: p(
          "Step out at dawn for sunrise on Ama Dablam from the monastery lawn — from this angle it is arguably the most beautiful mountain in Nepal.",
          "The trail descends through rhododendron forest to Deboche, crosses the Imja Khola on a bridge slung high above a gorge, and climbs to <strong>Pangboche (3,930 m)</strong>, the oldest Sherpa settlement in the valley. Its monastery is worth the short detour off the main path. Above Pangboche the vegetation gives out almost entirely and the landscape turns to high alpine — dwarf juniper, scrub and rock.",
          "The route continues up the Imja valley to Shomare and then climbs to <strong>Dingboche (4,380 m)</strong>, a summer settlement of stone-walled potato and barley fields at the junction of the Imja and Khumbu valleys. Above 4,000 m the air is noticeably thin, nights are cold, and the peaks — Ama Dablam, Lhotse, Island Peak, Taboche — feel very close. Overnight in Dingboche.",
        ),
      },
      {
        index: 6,
        title: "Acclimatization Day in Dingboche (4,380 m)",
        html: p(
          "The second and more important acclimatisation day. At this altitude the body needs time to build red blood cells, and this rest day is a major reason well-run itineraries get people to base camp successfully.",
          "Again we climb high and sleep low. The usual walk ascends the ridge of <strong>Nangkartshang Peak</strong> above the village, gaining 400 to 600 m over two or three hours. It is steep and it will feel harder than the numbers suggest, but the reward from the top is a genuinely enormous panorama: <strong>Makalu (8,485 m)</strong> — the world's fifth-highest mountain — appears to the east, along with Lhotse, Island Peak, Ama Dablam from a new angle, and the ice wall of Cho Polu.",
          "We descend to Dingboche for a long lunch and an easy afternoon. Rest, hydrate, and let your guide check how everyone is feeling. Overnight in Dingboche.",
        ),
      },
      {
        index: 7,
        title: "Trek from Dingboche (4,380 m) to Lobuche (4,938 m)",
        html: p(
          "The landscape turns austere today. The trail climbs gradually out of Dingboche onto a broad shoulder and traverses to <strong>Thukla (4,620 m)</strong> at the foot of the Khumbu Glacier's terminal moraine, where we stop for tea before the steepest section of the day.",
          "The climb up the moraine to <strong>Thukla Pass (4,830 m)</strong> is short but hard at this altitude. At the top is the <strong>memorial ground</strong> — dozens of stone cairns and plaques commemorating climbers who died on Everest, including Scott Fischer and Babu Chiri Sherpa. It is a sobering, quiet place with prayer flags snapping in the wind, and most groups spend a while there.",
          "Beyond the pass the trail follows the lateral moraine of the Khumbu Glacier, with <strong>Nuptse</strong> rising as an immense wall to the right, to reach <strong>Lobuche (4,938 m)</strong> — a handful of cold, basic lodges in a bleak spot. Nights here are hard; sleep may be broken. Overnight in Lobuche.",
        ),
      },
      {
        index: 8,
        title: "Trek from Lobuche (4,938 m) to Gorakshep (5,160 m) and Hike to Kala Patthar (5,545 m)",
        html: p(
          "A demanding day at serious altitude. The morning's walk follows the Khumbu Glacier's moraine — uneven, rocky and slow going, with several short climbs — for two to three hours to <strong>Gorakshep (5,160 m)</strong>, the last settlement on the route and the highest place you will sleep.",
          "After lunch and a rest we climb <strong>Kala Patthar (5,545 m)</strong>, the brown hill above Gorakshep. It is a steep 400 m ascent on loose rock and it will be the hardest hour of the trek — at this height you may be taking three breaths per step near the top. It is entirely worth it.",
          "Kala Patthar gives the best view of <strong>Mount Everest (8,849 m)</strong> anywhere in Nepal. From base camp itself the summit is hidden behind the west shoulder; from here the whole south-west face stands clear, with Nuptse, Changtse, Pumori and the Khumbu Icefall spread below. Late afternoon light on the summit is the classic shot. We descend to Gorakshep for the night.",
        ),
      },
      {
        index: 9,
        title: "Morning Hike from Gorakshep (5,160 m) to Everest Base Camp (5,364 m) and Trek to Pheriche (4,371 m)",
        html: p(
          "The day you have come for. After an early breakfast we set out across the Khumbu Glacier toward <strong>Everest Base Camp (5,364 m)</strong>, a two to three hour walk over rock, rubble and ice that undulates far more than the map suggests.",
          "Base camp itself is a sprawl of moraine at the foot of the <strong>Khumbu Icefall</strong> — a frozen cataract of house-sized séracs tumbling from the Western Cwm, and the most dangerous section of the standard route up Everest. In the spring climbing season the site is a small city of yellow and orange tents; outside it, the place is bare rock, prayer flags and enormous silence. You will not see the summit from here, but standing at the foot of that icefall is its own kind of arrival.",
          "We retrace our steps to Gorakshep for lunch, then begin the descent — down past Lobuche and Thukla to <strong>Pheriche (4,371 m)</strong>. Nearly 1,000 m of descent makes for immediate relief in your breathing and a far better night's sleep. Overnight in Pheriche.",
        ),
      },
      {
        index: 10,
        title: "Trek from Pheriche (4,371 m) to Namche Bazaar (3,440 m)",
        html: p(
          "A long but genuinely enjoyable day, walking back into thicker air with the pressure of the high altitude behind you. The trail descends the Imja valley past Pangboche and Deboche, and every hour brings back a little more oxygen, warmth and vegetation.",
          "Juniper scrub gives way to rhododendron and birch, and by the time you climb briefly back up to <strong>Tengboche</strong> the forest is properly around you again. It is worth pausing at the monastery for a last look at Ama Dablam before the trail drops steeply to Phunki Thanga and the river.",
          "The final section climbs out of the gorge and contours the high traverse back to <strong>Namche Bazaar (3,440 m)</strong>. After a week above 4,000 m, Namche feels almost like a city — hot showers, bakeries, and a beer if you want one. Overnight in Namche.",
        ),
      },
      {
        index: 11,
        title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,860 m)",
        html: p(
          "The last day of walking. From Namche the trail drops steeply down the switchbacks you climbed on day three, losing 600 m to the Hillary Bridge over the Dudh Koshi. Going down is faster but harder on the knees — poles help.",
          "From the bridge the route follows the river through Jorsalle and Monjo, where you check out of Sagarmatha National Park, and on through Phakding. The valley is green and warm again, full of pine and rhododendron, and there are more villages, mani walls and prayer wheels than the high country has shown you for a week.",
          "A final undulating stretch — with a sting of a climb near the end — brings you into <strong>Lukla (2,860 m)</strong>. Tonight is the celebration dinner with your guide and porters, traditionally the point where the whole crew relaxes properly. Overnight in Lukla.",
        ),
      },
      {
        index: 12,
        title: "Fly from Lukla (2,860 m) to Kathmandu (1,400 m)",
        html: p(
          "An early flight out of Lukla, since mountain weather closes the airstrip most afternoons. Departures are scheduled at first light, and the take-off — accelerating downhill toward a cliff edge — is as memorable as the arrival was.",
          "The flight back to <strong>Kathmandu (1,400 m)</strong> (or Ramechhap plus a road transfer, depending on the season) takes around 30 minutes, with the Himalaya lined up along the northern horizon one last time.",
          "One honest note: Lukla flights are weather-dependent and cancellations do happen, sometimes for more than a day. This is why we recommend keeping at least one buffer day before your international flight, and why helicopter transfers are worth considering as a backup. Once in Kathmandu you transfer to your hotel and the afternoon is free — a hot shower and a proper meal go a long way after two weeks in the mountains. Overnight in Kathmandu.",
        ),
      },
      {
        index: 13,
        title: "Final Departure from Kathmandu (1,400 m)",
        html: p(
          "Your last day in Nepal. If your flight is in the afternoon or evening, there is time to see something of the Kathmandu Valley — <strong>Boudhanath Stupa</strong>, the centre of the city's Tibetan Buddhist community and closely tied to the Sherpa culture you have just spent two weeks among, is the most fitting choice. <strong>Pashupatinath</strong> and <strong>Swayambhunath</strong> are both nearby.",
          "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport about three hours before departure.",
          "You have walked to the foot of the highest mountain on Earth, stood on Kala Patthar at 5,545 m, crossed the Hillary Bridge, and slept in Sherpa villages that have hosted climbers for seventy years. If the Khumbu has left you wanting more, the Gokyo Lakes, the Three Passes and the Everest View trek all cover this region differently, and our team is happy to help you plan the next one. Safe travels.",
        ),
      },
    ],
  },

  {
    slug: "everest-view-trek",
    days: [
      {
        index: 0,
        title: "Arrival in Kathmandu (1,400 m)",
        html: p(
          "You arrive at Tribhuvan International Airport in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you and drives you to your hotel in Thamel, the historic trekkers' quarter in the heart of the old city.",
          "Your guide joins you for the pre-trek briefing. The <strong>Everest View trek</strong> is designed for trekkers who want the Khumbu — the flight to Lukla, the Sherpa villages, the mountain panorama — without the two-week commitment or the extreme altitude of the full base camp route. We walk through the plan, which tops out at 3,880 m rather than 5,545 m, and check your gear. Warm layers are still essential; Namche is cold at night in any season.",
          "Because the itinerary is short, everything hinges on the Lukla flight, and your guide will explain how we handle weather delays. The rest of the day is free to rest or wander Thamel. Overnight in Kathmandu.",
        ),
      },
      {
        index: 1,
        title: "Fly from Kathmandu (1,400 m) to Lukla (2,860 m) and Trek to Phakding (2,651 m)",
        html: p(
          "A pre-dawn transfer to the airport for the mountain flight. Depending on the season you fly from Kathmandu itself or from Ramechhap after an early road transfer. Either way the flight takes about 30 minutes and runs parallel to the Himalaya, with an unbroken line of snow peaks out of the left windows.",
          "The landing at <strong>Lukla (2,860 m)</strong> is one of aviation's more celebrated moments — a 527 m runway built on a 12% uphill slope, with a mountainside at the far end and a drop at the near one. You will remember it.",
          "After tea while the porters sort loads, the walking begins, and pleasingly it goes downhill. The trail follows the <strong>Dudh Koshi</strong> through Chheplung and Ghat, past long mani walls carved with Tibetan script, spinning prayer wheels and suspension bridges hung with prayer flags. <strong>Phakding (2,651 m)</strong> is reached in the early afternoon. Overnight in a riverside teahouse.",
        ),
      },
      {
        index: 2,
        title: "Trek from Phakding (2,651 m) to Namche Bazaar (3,440 m)",
        html: p(
          "The hardest day of this itinerary. The trail follows the Dudh Koshi upstream through pine and rhododendron forest, crossing the river repeatedly on high suspension bridges. At Monjo you register at the entrance to <strong>Sagarmatha National Park</strong>, the UNESCO World Heritage site covering the entire Everest region.",
          "Past Jorsalle the valley narrows and you cross the <strong>Hillary Bridge</strong>, strung dizzyingly high above the meeting of the Dudh Koshi and Bhote Koshi rivers. From the far side the trail climbs — around 600 m of switchbacks through forest, the steepest sustained ascent of the trek. Take it slowly; this is where altitude starts to be felt. Roughly halfway up, a clearing offers the first distant view of <strong>Mount Everest (8,849 m)</strong> peering over the Nuptse ridge.",
          "<strong>Namche Bazaar (3,440 m)</strong> occupies a natural horseshoe bowl and is the trading hub of the Sherpa homeland, with bakeries, cafés, gear shops and a lively Saturday market. Overnight in Namche.",
        ),
      },
      {
        index: 3,
        title: "Acclimatization in Namche Bazaar (3,440 m) and Hike to Everest View Hotel (3,880 m)",
        html: p(
          "The highlight of the trek, and the day the itinerary is named for. After breakfast we climb the steep trail out of Namche toward the Syangboche plateau and on to the <strong>Everest View Hotel (3,880 m)</strong> — at one time recognised as the highest-placed hotel in the world.",
          "The terrace is the point. From a table with a cup of tea you look directly at <strong>Mount Everest (8,849 m)</strong>, <strong>Lhotse (8,516 m)</strong>, <strong>Nuptse</strong>, <strong>Thamserku</strong> and the astonishing fluted spire of <strong>Ama Dablam (6,812 m)</strong>. Mornings are clearest, so we aim to be there before the cloud builds.",
          "From the hotel we walk on to the Sherpa villages of <strong>Khumjung</strong> and Khunde, sitting beneath the sacred peak of Khumbila. Khumjung's monastery is said to house a yeti scalp, and its school was founded by Sir Edmund Hillary in 1961 as the first in the Khumbu. We return to Namche in the afternoon — climbing high and sleeping low is good acclimatisation practice. Overnight in Namche Bazaar.",
        ),
      },
      {
        index: 4,
        title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,860 m)",
        html: p(
          "A long descent to close the loop. From Namche the trail drops steeply down the switchbacks you climbed on day three, losing around 600 m to the <strong>Hillary Bridge</strong>. Going down is quicker but harder on the knees, and trekking poles earn their place here.",
          "From the bridge the route follows the Dudh Koshi downstream through Jorsalle and Monjo, where you check out of Sagarmatha National Park, and continues through Phakding. The air thickens, the temperature climbs, and the forest closes in green around the trail again — a marked contrast to the thin, bright air of Namche.",
          "The last stretch undulates, with one final climb before <strong>Lukla (2,860 m)</strong>. It is a big day on the legs, but it puts you at the airstrip in good time for tomorrow's flight. Tonight is the farewell dinner with your guide and porters. Overnight in Lukla.",
        ),
      },
      {
        index: 5,
        title: "Fly from Lukla (2,860 m) to Kathmandu (1,400 m)",
        html: p(
          "An early departure, because Lukla's weather window is a morning one and the airstrip routinely closes by midday. Flights are scheduled at first light and the take-off — running downhill toward the edge of the shelf — is every bit as memorable as the landing was.",
          "The 30-minute flight returns you to <strong>Kathmandu (1,400 m)</strong>, or to Ramechhap with a road transfer, depending on the season. On a clear morning the Himalaya line the northern horizon for the whole flight.",
          "Lukla flights depend entirely on weather and delays of a day or more are not unusual, which is why we always advise a buffer day before an international connection. Once back in Kathmandu you transfer to your hotel with the afternoon free for a shower, a good meal and some shopping in Thamel. Overnight in Kathmandu.",
        ),
      },
      {
        index: 6,
        title: "Departure from Kathmandu (1,400 m)",
        html: p(
          "Your final day in Nepal. If your flight leaves later in the day there is time to visit the Kathmandu Valley's monuments — <strong>Boudhanath Stupa</strong> is the natural choice after a week in Sherpa country, since it is the heart of the city's Tibetan Buddhist community, and <strong>Pashupatinath</strong> and <strong>Swayambhunath</strong> are both a short drive away.",
          "Our representative will collect you from your hotel and drive you to Tribhuvan International Airport approximately three hours before your scheduled departure.",
          "In under a week the <strong>Everest View trek</strong> has taken you into the heart of the Khumbu — the Lukla flight, the Hillary Bridge, Namche Bazaar, the Sherpa villages of Khumjung and Khunde, and a terrace at 3,880 m looking straight at Everest, Lhotse and Ama Dablam. If you want to go deeper next time, Everest Base Camp, the Gokyo Lakes and the Three Passes all start from the same trail. Safe travels.",
        ),
      },
    ],
  },
];
