/**
 * Full 29-day itinerary for Makalu Base Camp with Sherpani Col and Mera Peak
 * Climbing, from the operator's 2026 day sheet: Swiss Base Camp and Baruntse
 * Base Camp added, the separate training day at Makalu Base Camp and the rest
 * day in the Hongu dropped, and both reserve days held at Khare.
 *
 * Applied by scripts/replace-itinerary.mts.
 */
import { p } from "../itinerary-content/types";

export type FullDay = {
  title: string;
  /** Shown as "Elevation:" under the day, and plotted on the altitude profile. */
  elevation: string;
  accommodation: string;
  /** Short note shown on the altitude profile. */
  placeDescription: string;
  html: string;
};

export type ItineraryReplacement = {
  slug: string;
  days: FullDay[];
  /** Exact text swaps inside the trek's inclusions HTML that describe the old route. */
  inclusions?: { from: string; to: string }[];
};

export const MAKALU_SHERPANI_MERA: ItineraryReplacement = {
  slug: "makalu-base-camp-with-sherpani-col-and-mera-peak-climbing",
  inclusions: [
    {
      from: "Tented camps at Sherpani Col base camp (5,700 m), between the cols at 6,100 m, in the Hongu, and at Mera high camp (5,800 m).",
      to: "Tented camps at Swiss Base Camp (5,150 m), Sherpani Col Base Camp (5,700 m), the West Col (6,143 m), Baruntse Base Camp (5,300 m), Seto Pokhari (5,035 m), Kongme Dingma (4,850 m) and Mera High Camp (5,800 m).",
    },
    {
      from: "A technical training and assessment day at Makalu base camp before the cols.",
      to: "Technical training and assessment at Makalu Base Camp before the cols, and a refresher on the training day at Khare before Mera Peak.",
    },
    {
      from: "A reserve day held for the cols and a reserve day held for the Mera summit.",
      to: "Two reserve days at Khare, held for weather on the cols or the Mera summit.",
    },
  ],
  days: [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the gateway to every climbing region in the country.",
      html: p(
        `You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>. Once you are through immigration and customs, our representative meets you in the arrivals area and drives you to your hotel. The distance is short, but depending on traffic the transfer takes anything from twenty minutes to an hour.`,
        `Nothing else is scheduled today. After a long-haul flight the most useful things you can do are rest, drink plenty of water and eat something simple. This is a month-long expedition, and starting it tired or dehydrated costs you later.`,
        `Before you sleep, unpack and lay out your climbing and camping equipment. Tomorrow it is inspected item by item, and Kathmandu is the last place where anything missing, worn out or the wrong size can be bought or hired. Keep your passport and insurance details to hand as well, as they are needed for the permits.`,
        `In the evening your expedition leader calls at the hotel to introduce themselves, answer your first questions and set the plan for tomorrow. Overnight in Kathmandu.`,
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Expedition Briefing and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      html: p(
        `A full working day in <strong>Kathmandu (1,400 m)</strong>, and one of the most important of the trip. Your leader takes the twenty-nine-day plan apart stage by stage: the week-long approach up the Barun valley, the acclimatisation day at Makalu Base Camp, the four committed days across the <strong>Sherpani Col</strong> and the <strong>West Col</strong>, the walk down the empty Hongu valley, the Mera Peak climb, and the two reserve days at Khare. For each stage you hear where the group camps, what the weather usually does, and where the group can still turn back.`,
        `Then comes the <strong>equipment inspection</strong>, item by item: double boots, crampons, harness, ascender, belay and abseil device, screwgate karabiners, slings, down jacket and trousers, mitts and gloves, goggles, a headlamp with spare batteries, and a sleeping bag rated to around -30°C. Anything missing or unsuitable is bought or hired here today.`,
        `There are no shops above Tashigaon, so packing is done with care: what goes in your day pack, what goes in the porter bag, and what stays at the hotel until you return. Porter bags are weighed against the agreed limit.`,
        `The rest of the day is yours. Overnight in Kathmandu.`,
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing, Permits and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the permits are formally issued.",
      html: p(
        `The formal side of an expedition. With your leader, the team attends the <strong>ministry briefing</strong>, where the expedition is registered, the climbing permit is issued, the rules for the peak and the national park are explained, and the garbage deposit is lodged. It is a short meeting, but every expedition in Nepal goes through it.`,
        `While the paperwork is done, the expedition cargo is packed. Food, fuel, tents, the kitchen and the group climbing equipment (fixed and main ropes, snow bars, ice screws and anchors) are weighed, sealed into barrels and dispatched east to <strong>Tumlingtar</strong>. There porters and pack animals take over and carry it up the Barun. Everything the group uses until it reaches the lodges at Khare travels with that load.`,
        `The afternoon is free, and it is worth using well. It is your last afternoon of hot showers, restaurants and the thick air of 1,400 m until you fly back to Kathmandu on day 28. A gentle walk to <strong>Swayambhunath</strong> or <strong>Boudhanath</strong> fills it without tiring you, and an early night is the best preparation for tomorrow's flight. Overnight in Kathmandu.`,
      ),
    },
    {
      title: "Fly to Tumlingtar (405 m) and Drive to Num (1,560 m)",
      elevation: "1,560 m",
      accommodation: "Num",
      placeDescription: "A hill village on a ridge above the Arun river, at the road head for the Barun valley.",
      html: p(
        `An early transfer to the domestic terminal for the flight east to <strong>Tumlingtar (405 m)</strong>, about forty-five minutes in the air. On a clear morning the Himalaya lines the windows on the left side of the plane, with Everest, Lhotse, Makalu and Chamlang among the peaks.`,
        `Tumlingtar sits on a broad terrace above the <strong>Arun river</strong>. It is hot, green and subtropical, the lowest point of the whole trip, and more than 6,000 m below the summit of Mera Peak you will stand on less than three weeks from now.`,
        `From the airport a jeep road climbs north for four to five hours through rice terraces, banana, bamboo and cardamom, passing through <strong>Khandbari</strong>, the district headquarters. The road is rough and in places spectacular, gaining more than 1,100 m on its way to the ridge tops.`,
        `<strong>Num (1,560 m)</strong> sits on a ridge crest with the Arun gorge falling away on both sides. It is the end of the road: from tomorrow everything moves on foot. The crew meets you here and divides the loads for the walk. About 45 minutes' flying and 4 to 5 hours by jeep. Overnight at Num.`,
      ),
    },
    {
      title: "Trek from Num (1,560 m) to Seduwa (1,540 m)",
      elevation: "1,540 m",
      accommodation: "Seduwa",
      placeDescription: "A village of Rai and Sherpa farms on the western side of the Arun gorge.",
      html: p(
        `A demanding first day on foot, and a good introduction to eastern Nepal, which is steep, deep and hot. The trail drops off the Num ridge on stone steps through terraced fields and small farms to the <strong>Arun river</strong>, which it crosses on a long suspension bridge below 800 m. That is a descent of nearly 800 m, and it tests knees from the first hour.`,
        `Then the trail climbs straight back up the far side, through villages, millet terraces, bamboo and cardamom gardens. The heat and humidity surprise most people on the way to a glaciated pass. Start early, carry plenty of water, and take the climb at a steady pace rather than a fast one.`,
        `The day ends at <strong>Seduwa (1,540 m)</strong>, just 20 m lower than it began, after losing and regaining around 800 m. Seduwa is the entrance to the <strong>Makalu Barun National Park</strong>, and the park permits are checked at the office here.`,
        `In the evening the guide goes through tomorrow's walk and checks how everyone handled the first day. Around 5 to 6 hours. Overnight at Seduwa.`,
      ),
    },
    {
      title: "Trek from Seduwa (1,540 m) to Tashigaon (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Tashigaon",
      placeDescription: "The last permanent village in the Barun valley, a Sherpa settlement among terraced fields.",
      html: p(
        `A shorter and gentler day, climbing steadily north through farmland and patches of forest, past scattered hamlets, millet and maize terraces and grazing buffalo. The gain is only around 560 m.`,
        `The country here is nothing like the Khumbu. This is hill Nepal, with the mountains still hidden behind the ridges, and the trail runs through working farmland rather than along a trekking route. You walk past people threshing grain and carrying fodder, and children on their way to school.`,
        `The short stage is deliberate. After yesterday's big descent and climb it gives your legs a day to settle before the long climbs that start tomorrow.`,
        `<strong>Tashigaon (2,100 m)</strong> is the last permanent village in the valley, and the last place to buy anything at all: biscuits, batteries, a spare lighter. From here the expedition camps. The sleeping tents, mess tent and kitchen tent go up for the first time, and the cook crew takes over every meal until Khare. Around 4 to 5 hours. Overnight in tents at Tashigaon.`,
      ),
    },
    {
      title: "Trek from Tashigaon (2,100 m) to Khongma Danda (3,500 m)",
      elevation: "3,500 m",
      accommodation: "Khongma Danda",
      placeDescription: "A ridge-top camp in rhododendron forest, the first high ground of the approach.",
      html: p(
        `The hardest day of the approach: around <strong>1,400 m of ascent</strong> on a steep trail of roots and stone steps through dense rhododendron, oak and bamboo forest hung with moss, with almost no flat ground anywhere.`,
        `The forest is beautiful and tiring in equal measure. In spring the rhododendrons are in flower for the whole climb; in autumn the forest is cool, green and quiet. Lunch is taken on the trail, and the cook crew keeps hot drinks coming.`,
        `This is also the biggest single jump in sleeping height on the approach, so pace matters more than speed. Walk slowly enough to talk, drink often, and let the guide set the rhythm.`,
        `<strong>Khongma Danda (3,500 m)</strong> is a small clearing on the ridge crest. It is the first camp with a mountain view and the first properly cold night, so expect frost on the tent in the morning. A mild headache or a poor appetite is normal at this stage. Tell your guide about it tonight rather than keeping it to yourself: everyone is checked every evening from here on. Six to seven hours. Overnight at Khongma Danda.`,
      ),
    },
    {
      title: "Cross the Shipton La (4,220 m) and Trek to Dobato (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Dobato",
      placeDescription: "A high camp beyond the Shipton La, on the ridge above the Barun valley.",
      html: p(
        `Out of the forest and onto the high ridge. The trail climbs over open ground of rock and grass to the <strong>Shipton La (4,220 m)</strong>, named for the British mountaineer and explorer Eric Shipton, who travelled through this country in the early 1950s. It is the first time the group goes above 4,000 m.`,
        `From the pass the mountains finally show themselves: <strong>Chamlang</strong> to the north-west, the deep trench of the Barun valley opening below, and on a clear morning the summit of <strong>Makalu</strong> itself.`,
        `Beyond the pass the trail drops past the dark tarn of <strong>Kalo Pokhari</strong>, then climbs again to the lower <strong>Keke La (4,170 m)</strong> before a rough descent along the ridge. In early spring and late autumn snow can lie on this section, and the crew breaks trail where needed.`,
        `<strong>Dobato (3,800 m)</strong> is a camp on open ground, with the forest approach behind you and the Barun ahead. Climbing to 4,220 m and sleeping 400 m lower is exactly the kind of day that builds acclimatisation. Six to seven hours. Overnight at Dobato.`,
      ),
    },
    {
      title: "Trek from Dobato (3,800 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "A grazing meadow on the floor of the Barun valley, beneath waterfalls and hanging glaciers.",
      html: p(
        `A steep descent off the ridge into the <strong>Barun valley</strong> itself, dropping through fir, birch and rhododendron to the river, then turning north up the valley floor.`,
        `The Barun is one of the great valleys of Nepal, and very few people ever see it. Walls rise two thousand metres on both sides, waterfalls pour off hanging glaciers, and the forest is old and undisturbed. This is protected habitat for red panda, musk deer and snow leopard, and the national park was created largely to keep it that way. Walk quietly and you may see Himalayan monal or a troop of langur monkeys in the trees.`,
        `The trail along the valley floor is rough in places, crossing side streams and boulder fields, but the gradient is easy after the last two days.`,
        `<strong>Yangle Kharka (3,600 m)</strong> is a grazing meadow beside the river. The day ends 200 m lower than it began, and that is useful: after crossing 4,220 m yesterday, a night lower down lets the body catch up before the steady climb to base camp. Around 5 to 6 hours. Overnight at Yangle Kharka.`,
      ),
    },
    {
      title: "Trek from Yangle Kharka (3,600 m) to Langmale Kharka (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Langmale Kharka",
      placeDescription: "A summer grazing camp high in the Barun, above the treeline below the glacier.",
      html: p(
        `North up the valley floor, climbing steadily as the walls close in and the forest thins. The trail passes summer grazing settlements: stone huts used by herders for a few months of the year and empty the rest of the time.`,
        `Above the last trees the Barun turns to rock, moraine and grass, and its scale becomes obvious. The south face of <strong>Chamlang</strong> rises on one side, the Barun glacier lies ahead, and a row of snow peaks lines the valley walls. Makalu is still hidden behind a shoulder of the valley, which makes tomorrow's first view all the bigger.`,
        `The day gains around 800 m to finish above 4,400 m. That is a big step, so the pace is easy, the start is early, and there are plenty of stops. Expect the air to feel noticeably thin by the afternoon.`,
        `<strong>Langmale Kharka (4,410 m)</strong> is the last grazing camp in the valley. Nights from here on are well below freezing, so keep your water bottle and batteries inside your sleeping bag. Around 5 hours. Overnight at Langmale Kharka.`,
      ),
    },
    {
      title: "Trek from Langmale Kharka (4,410 m) to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp on the moraine of the Barun glacier, beneath the south-east face of Makalu.",
      html: p(
        `The last day of the approach. The trail climbs onto the moraine of the <strong>Barun glacier</strong> and follows it north over rough, bouldery ground as the valley narrows towards its head, passing the high pastures of Shershon on the way.`,
        `Then Makalu appears, all of it at once from base to summit: a pyramid of rock and ice rising four thousand metres above the head of the valley. It is one of the great first sights in the Himalaya, and it stops most people where they stand.`,
        `<strong>Makalu Base Camp (4,870 m)</strong> sits on the moraine directly below the south-east face. After seven days on foot from Num, the expedition has reached the mountain. The camp is arranged for a two-night stay: tents pitched on the flattest ground, the mess tent set up out of the wind, and the climbing equipment unpacked for tomorrow's training.`,
        `The gain is a modest 460 m, so there is time in the afternoon to rest, drink and simply look. Around 5 hours. Overnight at Makalu Base Camp.`,
      ),
    },
    {
      title: "Acclimatisation Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The base camp beneath the south-east face of Makalu, where the group acclimatises and trains for the cols.",
      html: p(
        `A day at the foot of the fifth-highest mountain on earth, with two jobs to do: acclimatise, and get ready for the cols.`,
        `The morning walk heads north up the moraine of the <strong>Barun glacier</strong> towards Makalu's advance base camp, gaining 400 to 500 m before returning to camp. It is straightforward walking on rough ground, it puts the whole south-east face directly above you, and climbing high before sleeping low again is the best preparation for the days above 5,000 m that start tomorrow.`,
        `The afternoon is a <strong>technical skills session</strong> on the ice near camp: crampon technique, moving as a roped team, ascending fixed rope on a jumar with a pack, and abseiling on a loaded rope. The abseil gets the most practice, because in four days you descend around 100 m of fixed rope off the West Col, with a glacier below you and no other way down.`,
        `Your guide is assessing as much as teaching. Anyone who is not ready for the cols is told today. Turning back from here means walking out down the Barun, which is a long way but an entirely safe one. In the evening the guide runs through the four days ahead: the camps, the fixed ropes, the abseil and the point of no return. Overnight at Makalu Base Camp.`,
      ),
    },
    {
      title: "Trek from Makalu Base Camp (4,870 m) to Swiss Base Camp (5,150 m)",
      elevation: "5,150 m",
      accommodation: "Swiss Base Camp",
      placeDescription: "A high camp on the moraine west of Makalu Base Camp, the first night above 5,000 m.",
      html: p(
        `The first day of the col section. The group leaves the main Makalu trail and heads west from base camp, over rough lateral moraine and boulder fields towards the glacier that leads up to the Sherpani Col, climbing gradually to <strong>Swiss Base Camp (5,150 m)</strong>.`,
        `The height gain is only around 280 m, and that is deliberate. This is the first night above 5,000 m, and a short day gives the body time to adjust before the bigger step tomorrow. The going is slow on loose rock, moraine ridges and the occasional patch of bare ice, so the guide keeps the pace steady and the group together.`,
        `As you climb, Makalu dominates the view behind you, and the snow peaks around the head of the Barun close in ahead. The country here is purely glacial: no grass, no shelter and no trail beyond the line the crew picks through the moraine.`,
        `The afternoon is for rest and preparation. Harnesses and crampons are fitted again, and if conditions allow there is a short refresher on the ice near camp. The climbing Sherpas start carrying rope and hardware up towards the col. Around 4 to 5 hours. Overnight at Swiss Base Camp.`,
      ),
    },
    {
      title: "Trek from Swiss Base Camp (5,150 m) to Sherpani Col Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Sherpani Col Base Camp",
      placeDescription: "A tented camp at 5,700 m on the glacier below the Sherpani Col, the last point before the crossing.",
      html: p(
        `A steady climb of around 550 m, first over moraine and then onto the glacier, to the camp beneath the col. The last part is on the ice, roped together and in crampons. Around 5 to 6 hours.`,
        `<strong>Sherpani Col Base Camp (5,700 m)</strong> is a bleak, exposed camp on rock and snow with the col directly above. It is also the <strong>decision point</strong> of the whole expedition, the last place the group can turn round without committing to the crossing. Your guide weighs the forecast, the condition of the slope and the condition of every member before deciding whether to go on.`,
        `The afternoon is preparation. Harnesses, crampons and descenders are checked one last time, the order of crossing is set, and loads are redistributed so that nobody carries more than they need on the steep ground. The climbing Sherpas go up to <strong>fix rope on the col</strong>, so that it is in place before the group arrives.`,
        `Dinner is early and so is bed. Tomorrow starts at three or four in the morning, and it is the longest and highest day of the traverse. Overnight at Sherpani Col Base Camp.`,
      ),
    },
    {
      title: "Trek from Sherpani Col Base Camp (5,700 m) to West Col (6,143 m)",
      elevation: "6,143 m",
      accommodation: "West Col Camp",
      placeDescription: "A glacier camp at the West Col, 6,143 m, after the crossing of the Sherpani Col: the highest night of the expedition.",
      html: p(
        `The biggest day of the traverse. The group is moving by four in the morning, roped and in crampons. The route climbs the glacier, then a steepening slope of snow and rock on fixed rope, to the <strong>Sherpani Col (6,180 m)</strong>, usually arriving as the sun reaches the crest.`,
        `The view from the col rewards the whole approach: <strong>Makalu</strong> immediately behind, <strong>Baruntse</strong> and <strong>Chamlang</strong> ahead across the glacier, and Everest and Lhotse showing beyond them.`,
        `From the col a roped descent leads down onto the high glacier plateau beneath Baruntse, a wide basin of snow a little above 6,000 m. The group crosses it westward on a rope, at a slow and even pace, while the Sherpas lead and probe for crevasses. Camp goes up at the <strong>West Col (6,143 m)</strong>, ready for the descent into the Hongu tomorrow.`,
        `This is the <strong>highest camp of the expedition</strong>, it is bitterly cold, and the -30°C sleeping bag earns its weight tonight. From here the group is fully committed: there is no way back over the Sherpani Col with a laden crew. Eat and drink as much as you can manage, even if you have no appetite. Eight to ten hours. Overnight at West Col Camp.`,
      ),
    },
    {
      title: "Trek from West Col (6,143 m) to Baruntse Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition camp for Baruntse in the upper Hongu valley, below the West Col.",
      html: p(
        `The technical crux of the traverse. After a cold start, the group gathers at the edge of the <strong>West Col (6,143 m)</strong>, where the ground simply stops: the western side drops away steeply onto the Hongu glacier.`,
        `The Sherpas have the fixed ropes in place, and the crossing is made by <strong>abseiling around 100 m in stages</strong>. Every rucksack and every crew load is lowered separately, so nobody descends under weight. Your guide controls each stage, clipping each member from one anchor to the next, and everything practised at Makalu Base Camp is used here. It is slow, cold and completely absorbing, and a full group takes most of the morning.`,
        `Below the abseil the route crosses the Hongu glacier, still roped because of crevasses, then descends moraine to <strong>Baruntse Base Camp (5,300 m)</strong> in the upper <strong>Hongu valley</strong>. This is where expeditions to Baruntse (7,129 m) set up, and the mountain towers over the camp.`,
        `The committed section is behind you, and tonight is the first night below 5,500 m since Swiss Base Camp. Most people find the drop of more than 800 m makes an immediate difference to sleep and appetite. Eight to ten hours. Overnight at Baruntse Base Camp.`,
      ),
    },
    {
      title: "Trek from Baruntse Base Camp (5,300 m) to Seto Pokhari (5,035 m)",
      elevation: "5,035 m",
      accommodation: "Seto Pokhari",
      placeDescription: "A camp beside a glacial lake on the floor of the upper Hongu valley.",
      html: p(
        `After the cols, a shorter day downhill, losing around 270 m as the route heads south down the <strong>Hongu valley</strong> on moraine and coarse grass. There is no trail in any developed sense: the route is a line the crew knows, marked here and there by a cairn.`,
        `The Hongu is one of the emptiest valleys in Nepal. There are no villages, no lodges and no permanent inhabitants, and usually no other party anywhere in sight. <strong>Baruntse</strong> stands at the head of the valley behind you, Chamlang walls in the eastern side, and the eastern flank of Mera rises ahead to the west.`,
        `<strong>Seto Pokhari (5,035 m)</strong>, the "white lake", is a glacial lake on the valley floor, and camp goes up on its shore. Looking back up the valley, the West Col shows as a notch high on the skyline, and it is hard to believe you came down it yesterday.`,
        `With no separate rest day in the Hongu, this short stage does that job. The group arrives by early afternoon, with time to dry out tents and clothing, sort equipment after the cols and sleep. Around 4 to 5 hours. Overnight at Seto Pokhari.`,
      ),
    },
    {
      title: "Trek from Seto Pokhari (5,035 m) to Kongme Dingma (4,850 m)",
      elevation: "4,850 m",
      accommodation: "Kongme Dingma",
      placeDescription: "A tented camp on the floor of the Hongu, below the eastern flank of Mera.",
      html: p(
        `Further south down the Hongu, then bearing west towards the foot of Mera, on moraine and grass that lose height gently as the valley widens around you.`,
        `This is the easiest walking day since Tashigaon. After two weeks of altitude and glaciated ground, most people spend it noticing small things: lichen on the boulders, birds overhead, the first green grass in days. Your body notices too. At under 5,000 m, sleep comes more easily and appetite returns.`,
        `The day is also a chance to recover fully before the third and final valley crossing of the trip. The guide checks feet, hands and equipment, as several days of cold and fixed rope show up here in blisters, cracked fingertips and worn crampon straps.`,
        `<strong>Kongme Dingma (4,850 m)</strong> sits directly below the eastern flank of Mera, with the snow slope up to the Mera La rising above camp. Tonight harnesses and crampons are packed ready for the morning. Around 5 hours. Overnight at Kongme Dingma.`,
      ),
    },
    {
      title: "Trek from Kongme Dingma (4,850 m) to Khare (5,045 m) via the Mera La (5,415 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, and the first building since Tashigaon.",
      html: p(
        `A climb of around 565 m out of the Hongu to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hongu and the Hinku. The lower slopes are rock and moraine. Higher up the route moves onto the glacier, roped together and in crampons, for the last pull to the col.`,
        `From the Mera La the route of the climb is in full view: the long glacier rising towards Mera's summit, which the group will stand on in three days. To the east, back across the Hongu, the cols you crossed sit high on the skyline.`,
        `The descent west into the <strong>Hinku valley</strong>, the third valley of the trip, leads down the glacier and moraine to <strong>Khare (5,045 m)</strong>. After thirteen nights in tents, a stone lodge with a stove in the dining room and a menu on the wall is a genuine surprise, and most groups remember it.`,
        `There is a bed, hot food, and usually phone signal for the first time since the lower Barun, so this is the evening to send word home. Six to seven hours. Overnight at Khare.`,
      ),
    },
    {
      title: "Training and Rest Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The climbing base of the Hinku, where the group prepares for the Mera summit.",
      html: p(
        `A rest day with a short piece of work in it. The morning is a <strong>refresher session</strong> on the snow and ice above Khare: spacing in a rope team, crampon technique on steeper snow, and the ascender technique for the fixed rope on Mera's summit step. After the cols this is a formality rather than a lesson, but it is the time to fix any equipment problem before it matters.`,
        `The rest of the day is genuine rest in a bed, with hot food, and plenty of both. Eat and drink more than feels necessary: summit day burns an enormous amount of energy, and it starts in less than forty-eight hours.`,
        `In the afternoon you pack for high camp, taking only what is needed for one night up and the summit. Everything else stays at Khare.`,
        `Your guide reviews the condition of each member and the weather forecast, and confirms the summit plan and timings. After two cols above 6,000 m, most people are in the best physical shape of their trip and fully acclimatised. Overnight at Khare.`,
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Mera High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Mera High Camp",
      placeDescription: "A tented camp on a rock shelf above the Mera La, at the edge of the glacier facing Makalu.",
      html: p(
        `Crampons go on within an hour of leaving Khare. The route climbs back up the glacier past the <strong>Mera La</strong> and on to a rock shelf at <strong>Mera High Camp (5,800 m)</strong>, a gain of around 755 m. Four to five hours at an easy pace.`,
        `The camp faces east, straight at <strong>Makalu</strong>. Ten days ago you stood beneath it on the other side of the range. Seeing it from here, with the Sherpani Col somewhere on the skyline in between, is the moment the traverse comes together as a single journey. On a clear evening the view runs east as far as <strong>Kanchenjunga</strong>.`,
        `While the group settles in, the climbing Sherpas go up to <strong>fix the summit step</strong>, so the rope is in place before tomorrow morning.`,
        `Dinner is at four, eaten in a down jacket, and everyone is in their sleeping bag by six. Lay out everything for the morning before you sleep: boots inside the bag, water bottles filled with hot water, headlamp in a pocket. The wake-up call comes around one in the morning. Overnight at Mera High Camp.`,
      ),
    },
    {
      title: "Summit Mera Peak (6,476 m) and Descend to Khare (5,045 m)",
      elevation: "6,476 m",
      accommodation: "Khare",
      placeDescription: "The 6,476 m summit of Mera, the highest trekking peak in Nepal.",
      html: p(
        `Tea at one, roped and moving by two. Above camp the glacier is a broad slope of <strong>25 to 30 degrees</strong>, climbed in the dark and the cold. It is never steep and never technical, but it goes on for a long time. Your guide sets a turnaround time before the start, and keeps to it.`,
        `The sun arrives at around 6,100 m, and with it the warmth returns to hands and feet. Above lies the only real obstacle of the climb: a <strong>short step of 40 to 45 degrees</strong> below the summit, fixed the day before and climbed on a jumar.`,
        `From the <strong>summit (6,476 m)</strong> you can see <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong>, five of the six highest mountains on earth, with Baruntse and Chamlang standing over the Hongu, the valley you walked down a few days ago.`,
        `Then the whole way down: back to high camp to collect the tents and equipment, and on down the glacier to <strong>Khare</strong>. In total around 676 m up and more than 1,400 m down. It is the longest day since the cols, and the bed at Khare has rarely felt better. Nine to twelve hours. Overnight at Khare.`,
      ),
    },
    {
      title: "Reserve Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The first reserve day held at Khare, for the Mera summit or delays on the cols.",
      html: p(
        `The first of two reserve days held at Khare. They are part of the plan, not padding. High camp is exposed, the summit slope is at the mercy of the wind, and after everything this expedition has asked of you, losing Mera to one bad morning would be a poor way to finish.`,
        `If the summit was turned back yesterday, the group climbs back to high camp today and makes a second attempt tomorrow, on day 24, descending to Khare the same day.`,
        `The reserve days also cover the whole traverse, not only Mera. A day held at Sherpani Col Base Camp by wind, a slow crossing of the West Col or a storm in the Hongu pushes every later stage back by a day. These two days absorb that delay without touching the flight home.`,
        `If everything has gone to plan, today is a real rest at Khare: sleep, wash, dry out equipment and eat well. Anyone with energy to spare can take a short walk up the moraine above the lodges for a last look at the Mera glacier and the peaks on the far side of the Hinku. Overnight at Khare.`,
      ),
    },
    {
      title: "Reserve Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The second reserve day held at Khare, for a second summit attempt or weather.",
      html: p(
        `The second reserve day. If yesterday was spent climbing back to high camp, today is the second summit attempt: the same early start, the same slope and the same summit step, followed by the descent to <strong>Khare</strong> in the afternoon.`,
        `If it is not needed for the summit, your guide decides with the group how best to use it. Usually the group starts the walk out a day early and breaks the long descent to Lukla into shorter, easier stages. That brings the group to Lukla with a spare day in hand for the flight to Kathmandu, which is often delayed by cloud and wind. A spare day at that end of the trip is worth far more than one at Khare.`,
        `Either way, the climbing is now over. Ropes, harnesses and ice hardware are packed away, crew loads are reorganised for the walk out, and the expedition becomes a descent through the Hinku forests towards the Zatrwa La and Lukla.`,
        `Overnight at Khare, or lower down the Hinku valley if the group has started the descent.`,
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "The riverside lodges in the forested floor of the Hinku valley.",
      html: p(
        `A long descent, and an easy one, losing around 1,445 m down the Hinku valley. Below Khare the moraine opens into the wide bowl at <strong>Thagnak</strong>, and the trail then follows the <strong>Hinku Khola</strong> steadily downstream.`,
        `Somewhere below Thagnak the air thickens noticeably. The first juniper appears, then birch and rhododendron, and legs that have worked above 5,000 m for two weeks start to behave normally again. Most people find they are walking faster than at any time since the first week, without trying.`,
        `The valley here is narrow and steep-sided, with the peaks of the Hinku standing above the forest and Mera receding behind you. There are teahouses along the trail, so lunch and hot drinks are easy to come by.`,
        `By <strong>Kothe (3,600 m)</strong> you are among trees again, with the river loud outside the lodge. After two weeks of thin air, the first night at this height brings the deepest sleep of the trip for most people. Around 6 to 7 hours. Overnight at Kothe.`,
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "The high yak pasture below the Zatrwa La, on the last crossing of the trip.",
      html: p(
        `The last climb of the traverse, regaining around 700 m from the valley floor towards the Zatrwa La. The trail leaves the river and works up through forest of rhododendron and fir, steep in places, before breaking out onto open hillside.`,
        `It is a day that feels harder than its numbers. The summit is behind you and your body has decided the trip is over, but it is not quite: the Zatrwa La is still between you and Lukla. Take it slowly and keep drinking.`,
        `The forest along this stretch is some of the finest in the Hinku, and in spring the rhododendrons are in full flower. Look back regularly: the Hinku valley opens up behind you, with the long line of the walk out from Khare laid out below.`,
        `<strong>Thuli Kharka (4,300 m)</strong>, the "big pasture", is a cluster of lodges on open grazing ground. It gives a last evening looking east over the Hinku towards the Mera La and, far beyond it, Makalu. Around 5 to 6 hours. Overnight at Thuli Kharka.`,
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, and the end of a traverse that began on a rice terrace at 400 m.",
      html: p(
        `An early start for the last pass. Two to three hours over rough, rocky ground lead to the <strong>Zatrwa La (4,610 m)</strong>, which after two glaciated cols above 6,100 m is a walk. Prayer flags mark the notch, and there is a final look east over the Hinku before the descent.`,
        `Then comes a very long way down: around 1,770 m through boulder fields, rhododendron forest and farmland to <strong>Chutanga</strong>, and on to Lukla. The upper section is steep and can be icy in the early morning, so take it carefully. Trekking poles and patience make a big difference to tired knees.`,
        `<strong>Lukla (2,840 m)</strong> ends a journey that began on a rice terrace at 405 m in eastern Nepal and crossed three valleys, two glaciated cols and a 6,476 m summit. Very few people have made it.`,
        `The evening is the end-of-trip dinner with your guide, the climbing Sherpas, the cook crew and the porters, and it is the point at which tips are given. Seven to eight hours. Overnight at Lukla.`,
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's vibrant capital and the final stop before departure.",
      html: p(
        `Lukla flights leave early, before the valley wind builds. It is about thirty-five minutes to <strong>Kathmandu (1,400 m)</strong>. In peak season, when flights operate from <strong>Manthali</strong> in Ramechhap instead, you land there and continue to Kathmandu by road.`,
        `Delays are routine rather than exceptional, and they can last a full day when cloud sits in the Lukla valley. That is why no international departure is scheduled for today, and why any spare day saved earlier in the trip is so valuable here. If Lukla closes for longer, a helicopter seat can usually be arranged at your own cost.`,
        `Back in Kathmandu, the afternoon is free for a long hot shower, a proper meal and a walk around Thamel, where the noise and traffic come as a shock after a month in the mountains. Any equipment hired in Kathmandu is returned to the shop this afternoon.`,
        `Your <strong>summit certificate</strong> for Mera Peak is presented in the evening. Overnight in Kathmandu.`,
      ),
    },
    {
      title: "Departure from Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: "Nepal's main international airport and the final departure point for your journey.",
      html: p(
        `The expedition ends today. If your flight leaves later in the day, there is time for a last morning in Kathmandu: the stupa at Boudhanath, the temples and courtyards of Patan Durbar Square, or a slow breakfast on a rooftop terrace.`,
        `Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before your departure. Keep your summit certificate somewhere flat in your hand luggage.`,
        `If you have time before you leave, let us know how the trip went. Your feedback on the guides, the crew, the camps and the route helps us look after the next group crossing the cols.`,
        `Safe travels. Very few people have crossed the Sherpani Col and the West Col, and fewer still have done it with Makalu Base Camp at one end and the summit of Mera Peak at the other. Baruntse, whose base camp you slept at in the Hongu, is the climb our returning members ask about most often.`,
      ),
    },
  ],
};
