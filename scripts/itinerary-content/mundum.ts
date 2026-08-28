import { p, type TrekDays } from "./types";

/**
 * Mundum Trek — eastern Nepal, through Kirat/Rai country in Khotang and Bhojpur.
 *
 * Only the days whose text had drifted out of step with their titles are listed:
 * day 2 carried a Kathmandu preparation day, day 3 carried the drive to Diktel,
 * day 11 described the previous day's descent, and day 14 described the drive
 * back rather than the departure. `resequence` repairs the dayNumber gap at 6.
 */
export const mundumTreks: TrekDays[] = [
  {
    slug: "mundum-trek",
    resequence: true,
    days: [
      {
        index: 0,
        title: "Arrival in Kathmandu (1,400 m)",
        html: p(
          "Your Mundum Trek begins with arrival at Tribhuvan International Airport in <strong>Kathmandu (1,400 m)</strong>. After immigration and baggage, our representative meets you and transfers you to your hotel.",
          "Your guide runs the pre-trek briefing. The <strong>Mundum Trail</strong> is a recently developed route through the eastern hills of <strong>Khotang</strong> and <strong>Bhojpur</strong>, and it is named after the <strong>Mundum</strong> — the sacred oral scripture of the <strong>Kirat</strong> people, passed down by shamans over generations. This is Rai and Limbu country, culturally distinct from the Sherpa and Tamang regions most trekkers visit.",
          "The trek is moderate in altitude, topping out at <strong>Silchung Hill (4,200 m)</strong>, but it is long on ridge walking and the infrastructure is basic — homestays and simple lodges rather than developed teahouses.",
          "Your guide checks your equipment and confirms permits. The rest of the day is free to rest after your flight or walk around Thamel. Overnight in Kathmandu.",
        ),
      },
      {
        index: 1,
        title: "Drive from Kathmandu (1,400 m) to Diktel Bazar (1,650 m)",
        html: p(
          "A very long drive east, one of the longest road days on any Nepali trek.",
          "The route leaves Kathmandu on the <strong>BP Highway</strong> or the Prithvi and Mahendra highways, descending from the valley into the lowlands before turning east and running along the <strong>Sun Koshi</strong> river system. The journey covers several hundred kilometres and takes the best part of a day and, depending on conditions, sometimes longer.",
          "The scenery changes continuously — river gorges, terraced hillsides, roadside bazaars and long stretches of farmland — and the last few hours climb on rough, unsealed mountain road into the eastern hills.",
          "<strong>Diktel Bazar (1,650 m)</strong> is the district headquarters of <strong>Khotang</strong>, a busy hill town serving a wide rural area and the gateway to the Mundum Trail. Very few foreign visitors come through.",
          "After arriving, there is time for a short walk around the bazaar before the walking begins tomorrow. Overnight in Diktel Bazar.",
        ),
      },
      {
        index: 2,
        title: "Trek from Diktel Bazar (1,650 m) to Chakhewa Village (2,300 m)",
        html: p(
          "The first walking day, a steady climb of around 650 m out of the bazaar onto the ridge system.",
          "The trail leaves Diktel and begins climbing almost immediately through farmed hillsides. This is inhabited working country rather than wilderness, and the walking is as much cultural as scenic — terraces of millet, maize and rice cut into every usable slope, water mills, livestock, and paths busy with local people moving between villages.",
          "The settlements here are largely <strong>Rai</strong>, one of the Kirat peoples whose traditions the Mundum records. You will pass small shrines and sacred groves associated with Kirat practice, which is animist and shamanic rather than Hindu or Buddhist, though all three influences are visible.",
          "As you gain height the terraces give way to patches of oak and rhododendron forest, and the views back over the Khotang hills open up.",
          "<strong>Chakhewa Village (2,300 m)</strong> sits high on the ridge. Around 5–6 hours. Overnight in Chakhewa.",
        ),
      },
      {
        index: 9,
        title: "Trek from Hyakule (2,962 m) to Hanspokhari (2,962 m)",
        html: p(
          "A level ridge day with no net height change, but plenty of undulation along the way.",
          "Both ends of today sit at the same altitude, so the profile looks flat on paper. In practice the trail rolls persistently along the ridge, climbing and dropping across a series of tops and saddles, and the cumulative ascent is more than the numbers suggest.",
          "The walking is on open ridgeline for much of the day, through grazing land and patches of rhododendron and oak forest. Because the trail stays high, the views stay with you rather than appearing only in clearings — north to the Himalayan chain, with <strong>Makalu</strong> and the eastern peaks visible in clear weather, and south over the folded hills of Khotang and Bhojpur.",
          "This section passes seasonal herding shelters and small settlements, and the pace can be relaxed.",
          "<strong>Hanspokhari (2,962 m)</strong> takes its name from a pond on the ridge. Around 5 hours. Overnight in Hanspokhari.",
        ),
      },
      {
        index: 3,
        title: "Trek from Chakhewa Village (2,300 m) to Dhotre (2,752 m)",
        html: p(
          "A climb of around 450 m along the ridge, with the settlements thinning and forest taking over.",
          "The trail continues north from Chakhewa, following the ridge system that the Mundum Trail uses for most of its length. The farmed terraces of the lower hills become patchier as you gain height, and oak and rhododendron forest closes in around the path.",
          "This is quiet walking. The villages up here are small and widely spaced, and the trail is used mainly by herders moving livestock between grazing grounds. Langur monkeys are common in the canopy and the birdlife is excellent — this part of eastern Nepal sees very few visitors and the forest is largely undisturbed.",
          "There are clearings along the ridge where the trees open out, giving views north toward the Himalayan chain and south over the folded hills of Khotang.",
          "<strong>Dhotre (2,752 m)</strong> is a small ridge-top settlement. Around 5 hours. Overnight in Dhotre.",
        ),
      },
      {
        index: 4,
        title: "Trek from Dhotre (2,752 m) to Maiyung (3,122 m)",
        html: p(
          "A steady climb of around 370 m through rhododendron forest toward the 3,000 m mark.",
          "The trail leaves Dhotre and continues along the ridge, climbing gradually. The forest here is dominated by <strong>rhododendron</strong>, and in spring — roughly late March into April — the whole hillside flowers red and pink, which is the main reason to walk this trail in that season. In autumn the appeal is clearer air and far better mountain visibility.",
          "The walking is a mixture of shaded forest path, open ridgeline and undulating sections across minor saddles. The gradient is manageable, but you are now above 3,000 m and the pace naturally slows.",
          "There are no permanent villages on this stretch. The only structures are herders' shelters used in the summer grazing season.",
          "<strong>Maiyung (3,122 m)</strong>, also written Mayung, is a ridge camp with wide views on a clear day. Around 5 hours. Overnight in Maiyung.",
        ),
      },
      {
        index: 5,
        title: "Trek from Maiyung (3,122 m) to Rawadhap (3,426 m)",
        html: p(
          "A climb of around 300 m into the highest and most open section of the trail.",
          "The route continues north along the ridge, and the character of the walking changes as you gain height. The tall rhododendron forest becomes stunted and windblown, and increasingly the trail runs across open grassland and exposed ridgeline rather than under cover.",
          "This is where the Mundum Trail earns its reputation as a viewpoint route. On a clear morning the panorama north takes in a long stretch of the eastern Himalaya — <strong>Makalu (8,485 m)</strong>, the Everest group and, far to the east, <strong>Kanchenjunga</strong> — with layer after layer of hills falling away to the south.",
          "The exposure means weather matters here. Cloud can close in quickly in the afternoon, so the day starts early to make use of the morning clarity.",
          "<strong>Rawadhap (3,426 m)</strong> is a high camp on the ridge. Around 5 hours. Overnight in Rawadhap.",
        ),
      },
      {
        index: 6,
        title: "Trek from Rawadhap (3,426 m) to Salpa Bhanjyang (3,348 m)",
        html: p(
          "A high traverse with almost no net height change, but a good deal of climbing and descending along the ridge.",
          "The net loss of under 80 m does not reflect the day, which rolls persistently across a series of tops and saddles at around 3,300–3,500 m. The walking is on open ridgeline for most of it, with only intermittent tree cover.",
          "The views are the reason to be here, and in clear weather they are sustained all day — the eastern Himalaya to the north, and the hills of Khotang and Bhojpur spread out below.",
          "<strong>Salpa Bhanjyang (3,348 m)</strong> is a pass of real significance in this region. It sits on the historic trading and walking route between the eastern hills and the Solu-Khumbu, and nearby is <strong>Salpa Pokhari</strong>, a lake held sacred by the <strong>Kirat Rai</strong> people, who make an annual pilgrimage to it. The pass is marked with prayer flags and shrines reflecting both Kirat and Buddhist practice.",
          "Around 5 hours. Overnight at Salpa Bhanjyang.",
        ),
      },
      {
        index: 7,
        title: "Explore Silchung Hill (4,200 m) and Return to Salpa Bhanjyang (3,348 m)",
        html: p(
          "The highest point of the trek: a return hike of around 850 m to <strong>Silchung Hill (4,200 m)</strong>.",
          "You start early to make the most of the morning visibility, which on this ridge is usually far better before the cloud builds. The trail climbs steadily from the pass, leaving the last stunted trees behind and continuing over open alpine grass and rock.",
          "It is a sustained climb rather than a technical one, but 850 m at this altitude is real work, and the pace is deliberately slow.",
          "The summit is the payoff. <strong>Silchung</strong> gives an exceptional panorama of the eastern Himalaya — <strong>Everest</strong>, <strong>Lhotse</strong>, <strong>Makalu (8,485 m)</strong> and <strong>Kanchenjunga (8,586 m)</strong> can all be seen from a single point on a clear day, which is unusual anywhere in Nepal — with the hills of Khotang, Bhojpur and Solukhumbu below.",
          "You descend by the same route to the pass. Around 6–7 hours in total. Overnight at Salpa Bhanjyang.",
        ),
      },
      {
        index: 8,
        title: "Trek from Salpa Bhanjyang (3,348 m) to Hyakule (2,962 m)",
        html: p(
          "The trek turns for home, descending around 390 m off the high pass.",
          "The trail drops south-east from <strong>Salpa Bhanjyang</strong>, leaving the open alpine ridge and re-entering the treeline within a couple of hours. The change is welcome after two nights at over 3,300 m — there is shelter from the wind, the temperature rises, and the walking underfoot becomes softer.",
          "The forest here is rhododendron and oak, thick and mossy, with occasional clearings giving last views back toward Silchung and the high ridge.",
          "As you lose height there are more signs of settlement again: grazing land, herders' huts, and the first terraced fields since Chakhewa. The trail is a working path used by local people rather than a trekking route.",
          "<strong>Hyakule (2,962 m)</strong> is a small settlement on the ridge, and after the exposure of the pass camps it feels notably more sheltered.",
          "Around 5 hours. Overnight in Hyakule.",
        ),
      },
      {
        index: 10,
        title: "Trek from Hanspokhari (2,962 m) to Bhojpur (1,600 m)",
        html: p(
          "The final walking day, a long descent of around 1,360 m into Bhojpur.",
          "The trail drops steadily off the ridge, and the change over the course of the day is substantial. Cool rhododendron and oak forest gives way to mixed broadleaf, then to terraced farmland, and by the afternoon you are in warm, green, densely cultivated middle-hill country.",
          "Lower down the route passes through a succession of villages, past water mills and irrigation channels, with rice and millet on the terraces. There are more people about, and the trail becomes a busy local path.",
          "<strong>Bhojpur (1,600 m)</strong> is the district headquarters and a town with a real history of its own — it is known across Nepal for its metalwork, particularly the forging of <strong>khukuri</strong> knives, a craft still practised in workshops around the bazaar.",
          "Arriving in a town with shops and hot water after nearly two weeks on the ridge is a distinct pleasure. Around 6 hours. Overnight in Bhojpur.",
        ),
      },
      {
        index: 11,
        title: "Drive from Bhojpur (1,600 m) to Kathmandu (1,400 m)",
        html: p(
          "The long drive back west to the capital, and the last day of travel.",
          "The road descends from Bhojpur through the eastern hills toward the lowlands, on rough unsealed surface for the first hours before joining better road further down. The journey runs west along the <strong>Sun Koshi</strong> river system and then onto the highway network back toward Kathmandu.",
          "It is a long day in the vehicle — comparable to the drive out at the start of the trip — but it is a good final look at the country: river gorges, terraced hillsides, roadside bazaars and the ordinary business of rural eastern Nepal going past the window.",
          "As you approach the Kathmandu valley the road climbs over the rim and the landscape becomes progressively more built up.",
          "You arrive in <strong>Kathmandu (1,400 m)</strong> in the evening and transfer to your hotel. The evening is free — a hot shower, a good meal, and time for a farewell dinner with your guide and crew. Overnight in Kathmandu.",
        ),
      },
      {
        index: 12,
        title: "Departure from Kathmandu (1,400 m)",
        html: p(
          "The final day of the <strong>Mundum Trek</strong>.",
          "Depending on your flight schedule there may be free hours in the morning. Thamel is the obvious place for last-minute shopping — tea, pashmina, or handicrafts — and if you have half a day, <strong>Boudhanath</strong>, <strong>Swayambhunath</strong> or <strong>Patan Durbar Square</strong> are all straightforward visits.",
          "Our representative collects you from your hotel and transfers you to <strong>Tribhuvan International Airport</strong> approximately three hours before your international departure.",
          "You leave having walked one of the newest and least-visited routes in Nepal: a ridge traverse through the eastern hills of <strong>Khotang</strong> and <strong>Bhojpur</strong>, over <strong>Salpa Bhanjyang</strong> and up <strong>Silchung Hill (4,200 m)</strong>, through the villages of the <strong>Kirat Rai</strong> people whose oral scripture, the Mundum, gives the trail its name — a trek with very few other foreigners on it and a culture quite distinct from the well-known trekking regions.",
        ),
      },
    ],
  },
];
