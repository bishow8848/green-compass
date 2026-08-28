import { p, type TrekDays } from "./types";

/** The short Manang-side itineraries: Thorong La direct, and Tilicho out-and-back. */
export const tilichoTreks: TrekDays[] = [
  {
    slug: "short-annapurna-circuit-trek",
    days: [
      {
        index: 0,
        title: "Drive from Kathmandu (1,400 m) to Chame (2,670 m)",
        html: p(
          "This condensed version of the circuit uses the road as far as it now goes, cutting out the first four days of walking that the classic itinerary spends in the lower Marsyangdi valley.",
          "We leave <strong>Kathmandu (1,400 m)</strong> early on the Prithvi Highway, turn north at Dumre and reach <strong>Besisahar (830 m)</strong>, where the sealed road ends. From there a local jeep takes over for the rough track up the Marsyangdi — narrow, cut into the gorge wall, with the river far below and waterfalls crossing the road in places.",
          "The track climbs through Jagat, Dharapani and Danakyu, gaining height steadily as the valley walls close in and the vegetation shifts from subtropical to pine. The whole journey takes nine to ten hours.",
          "<strong>Chame (2,670 m)</strong> is the administrative centre of the Manang district, with shops, a bank and small hot springs beside the river. Overnight in a lodge.",
        ),
      },
      {
        index: 1,
        title: "Trek from Chame (2,670 m) to Upper Pisang (3,300 m)",
        html: p(
          "The first walking day, and one of the most dramatic on the circuit. The trail leaves Chame through pine forest and enters a steep, narrow section where the valley walls rise almost vertically.",
          "The highlight comes near Dhukur Pokhari: the <strong>Paungda Danda</strong>, an immense curved slab of rock sweeping more than 1,500 m up from the riverbed in a single unbroken sheet. It is one of the largest rock faces in the Himalaya and dominates the whole afternoon.",
          "Beyond it the valley opens out and the landscape changes character completely — drier, browner and far more Tibetan in feel as you cross into the rain shadow.",
          "The trail climbs to <strong>Upper Pisang (3,300 m)</strong>, a medieval-looking village of stacked stone houses with an old gompa above it. It is worth the extra climb over Lower Pisang for the view across to <strong>Annapurna II</strong> and <strong>Annapurna IV</strong>. Overnight in Upper Pisang.",
        ),
      },
      {
        index: 2,
        title: "Trek from Upper Pisang (3,300 m) to Manang (3,540 m)",
        html: p(
          "There are two routes today and we take the high one — the upper trail via <strong>Ghyaru</strong> and <strong>Ngawal</strong> climbs about 400 m more than the valley floor route, but it is far better for both views and acclimatisation.",
          "The climb to Ghyaru is a steep zigzag and hard work at 3,700 m. From the top the reward is an uninterrupted panorama of the Annapurna range across the valley: <strong>Annapurna II (7,937 m)</strong>, <strong>Annapurna III</strong>, <strong>Annapurna IV</strong>, <strong>Gangapurna</strong> and <strong>Tilicho Peak</strong>, with the Marsyangdi a thin line far below. Ghyaru and Ngawal are old Tibetan settlements with flat roofs stacked with firewood and chortens at every entrance.",
          "The trail descends gradually to rejoin the main route and reaches <strong>Manang (3,540 m)</strong>, the largest village on the circuit. The <strong>Himalayan Rescue Association</strong> runs a free altitude talk here most afternoons at 3 pm — well worth attending on a fast itinerary like this one. Overnight in Manang.",
        ),
      },
      {
        index: 3,
        title: "Trek from Manang (3,540 m) through Yak Kharka (4,050 m) to Ledar (4,250 m)",
        html: p(
          "The route now commits to the pass. Because this itinerary has no dedicated acclimatisation day, today's pace matters more than usual — slow and steady is the whole strategy.",
          "The trail climbs gradually out of Manang through Tenki and up the Jarsang Khola valley, leaving the last trees behind within an hour. The landscape becomes open high pasture: juniper scrub, stone-walled corrals and the summer huts of Manang herders.",
          "We pass through <strong>Yak Kharka (4,050 m)</strong>, where most groups stop for lunch. Watch the slopes for <strong>blue sheep</strong>, which are common here in herds of twenty or more, and for Himalayan griffon vultures riding the thermals.",
          "A further gentle climb brings you to <strong>Ledar (4,250 m)</strong>, a small cluster of lodges on an exposed shelf. There are no trees at this height, the wind picks up in the afternoon and the nights are properly cold. Drink steadily and eat a full dinner. Overnight in Ledar.",
        ),
      },
      {
        index: 4,
        title: "Trek from Ledar (4,250 m) to Thorong High Camp (4,925 m)",
        html: p(
          "A short day by distance but a significant one by altitude — nearly 700 m of gain, sleeping higher than most trekkers on the classic circuit do.",
          "The trail climbs from Ledar along the side of the valley and traverses a steep, slightly exposed section above the Jarsang Khola where the path is cut into loose slope. Your guide will set the pace and pick the line.",
          "After a bridge crossing the route climbs to <strong>Thorong Phedi (4,450 m)</strong> — 'foot of the hill' — and then, rather than stopping there, continues up the steep wall behind it for a further 450 m to <strong>Thorong High Camp (4,925 m)</strong>. That last climb is short but genuinely hard at this altitude.",
          "Sleeping at High Camp makes tomorrow's pass day considerably shorter, though it is a colder and less comfortable night. Eat as much as you can manage and get into your bag early — the start is around 4:00 am. Overnight at High Camp.",
        ),
      },
      {
        index: 5,
        title: "Trek from Thorong High Camp (4,925 m) to Muktinath (3,800 m) via Thorong La Pass (5,416 m)",
        html: p(
          "The big day, and starting from High Camp takes roughly two hours off it. We set out around 4:00 am by head torch, because the wind on the pass rises sharply through the morning and is often unmanageable by midday.",
          "From High Camp the gradient is steadier than the wall below it, but the altitude does the work instead. The trail crosses a series of false summits over snow and frozen scree — each one looks like the top and is not — for three to four hours. Progress is deliberately slow; stopping to breathe is normal. Sunrise on the way up lights the Chulu peaks behind you.",
          "<strong>Thorong La (5,416 m)</strong> is marked by a cairn buried in prayer flags and a small tea shack, and at 5,416 m it is one of the highest trekking passes in the world.",
          "Then comes the descent — 1,600 m of it, long and punishing on the knees, dropping into the Kali Gandaki with the brown hills of Mustang and the wall of <strong>Dhaulagiri (8,167 m)</strong> ahead. <strong>Muktinath (3,800 m)</strong> is a major pilgrimage site with 108 water spouts and an eternal natural flame. Overnight in Muktinath.",
        ),
      },
      {
        index: 6,
        title: "Drive from Muktinath (3,800 m) to Jomsom (2,700 m), Tatopani (1,200 m), and Pokhara (822 m)",
        html: p(
          "Before leaving, most trekkers visit the <strong>Muktinath Temple</strong> complex — Mukti Kshetra to Hindus, the place of liberation; Chumig Gyatsa to Buddhists, the hundred waters. Pilgrims bathe beneath all 108 spouts in the cold morning air, and the Jwala Mai temple nearby shelters a natural gas flame burning above spring water.",
          "We then drive the length of the <strong>Kali Gandaki</strong>, the deepest gorge in the world, running between the eight-thousand-metre massifs of Dhaulagiri and Annapurna. The road passes <strong>Kagbeni (2,800 m)</strong> at the gateway to Upper Mustang, then <strong>Jomsom (2,700 m)</strong> and the apple-growing village of Marpha.",
          "The landscape transforms over the course of the day: from bare high desert, through pine forest, into subtropical green. At <strong>Tatopani (1,200 m)</strong> there are natural hot springs beside the river, and a stop there is hard to refuse after crossing a 5,416 m pass yesterday.",
          "The road follows the river down through Beni to <strong>Pokhara (822 m)</strong>, arriving in the evening. Overnight in Pokhara.",
        ),
      },
    ],
  },
];
