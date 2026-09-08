/**
 * Hand-picked heroes.
 *
 * Scoring in build-plan reads filenames, so it cannot tell a wide view of a
 * durbar square from a close-up of one carved window, a paraglider in flight
 * from a selfie of two pilots, or a temple from the rubble of the same temple
 * after the 2015 earthquake. Every entry here was chosen by looking at the
 * photograph; the value is the Commons filename to promote to hero.
 */
export const HERO_OVERRIDE: Record<string, string> = {
  // Was a dark moraine wall; this is the sanctuary the flight is sold on.
  "annapurna-base-camp-helicopter-tour": "Panorama of Annapurna South and Annapurna I.jpg",
  // Was a close-up of a lattice window.
  "best-of-nepal-tour": "Boudhanath Stupa-IMG 7048.jpg",
  // Was an overgrown mound at Tilaurakot.
  "buddhist-pilgrimage-tour-nepal": "Boudhanath Buddhist stup panorama.jpg",
  // Was the Machhindranath site mid-reconstruction: rubble, a truck, a tarpaulin.
  "bungmati-khokana-village-tour": "Rudrayani Temple Khokana Lalitpur Nepal Rajesh Dhungana (1).jpg",
  // Was a small fenced shrine at Devghat.
  "hindu-pilgrimage-tour": "2023 January night aarti at Pashupatinath Temple, Kathmandu 02.jpg",
  // Was a close-up of runway markings.
  "lukla-to-kathmandu-helicopter-flight": "Panorama of Lukla Airport (Tenzing-Hillary).jpg",
  // Both Muktinath heroes were the same dull roadside building.
  "muktinath-damodar-kunda-helicopter-tour": "Damodar Himal.jpg",
  "muktinath-helicopter-tour-from-pokhara": "Holy Shree Muktinath Temple.jpg",
  // Was dark trees in cloud; this shows the town itself.
  "namche-to-kathmandu-helicopter-flight": "Namche Bazaar from above, Nepal.jpg",
  // Was a selfie of two pilots in helmets.
  "paragliding-in-pokhara": "Paragliding in Pokhara.jpg",
  // Was a hazy hillside; this is the sacred lake the pilgrimage is for.
  "gosainkunda-holy-tour": "Gosaikunda lake-Langtang National Park.jpg",
  // Was a washed-out wide shot; this is the Nyatapola itself.
  "bhaktapur-day-tour": "Nyatapola temple in the Taumadhi Square (49740557988).jpg",
  // Was a tarpaulin roof in the foreground.
  "sirubari-village-tour": "A view from syangja.jpg",
  // Was a dark pre-dawn hillside.
  "zipline-in-pokhara-zip-flyer": "Pokhara-Sarangkot-16-Machhapuchhre-Fishtail-2015-gje.jpg",

  // --- climbing ---
  // Scoring reads filenames, and a climb's own peak often loses to a village on
  // the walk in that is named in twenty photographs instead of two. Each of
  // these was picked by opening the file and checking the mountain is in it.
  // Was a beetle-heavy Api Nampa set led by an unnamed sunrise.
  "api-himal-expedition": "Mt. Api Himal and Scenic Views of Api Nampa Conservation Area, Sudurpaschim.jpg",
  // Was a 1970s press photo of the Dutch women's team at Schiphol airport.
  "chamlang-expedition": "Makalu and Chamlang.jpg",
  // Was a hillside above Taplejung; the Kangchenjunga category is mostly Indian.
  "bokta-peak-climbing": "Kangchenjunga Nepal.jpg",
  // Commons files the peak as Kongde Ri, so nothing scored against "Kwangde"
  // and Namche Bazaar took the hero on both of these.
  "kwangde-peak-climbing": "Kongde Ri.jpg",
  "kyajo-ri-peak-climbing": "Kyazo Ri.jpg",
  "pachermo-and-kyajo-ri-peak-climbing": "Machermo, Kyajo Ri, Nepal.jpg",
  // No photograph of Nirekha exists on Commons; the climb is reached from
  // Gokyo, so the valley it is approached through leads instead.
  "nirekha-peak-climbing": "Gokyo-valley-view-from-gokyo-ri-panorama.jpg",
  // Was an unnamed pass on the Barun approach.
  "makalu-expedition": "Makalu best seen at sunrise. - panoramio.jpg",
  // Was the trail into Dingboche rather than the peak being sold.
  "island-peak-climbing": "Island Peak Nepal.jpg",
  "phari-lapcha-peak-climbing": "Phari Lapcha.jpg",
  "pisang-peak-climbing": "Chorten & Pisang Peak - High route trail between Ghyaru & Ngawal (4520318149).jpg",
  // Chulu East led with a photograph captioned "Chulu West peak base camp",
  // which reads as the wrong mountain on its own page.
  "chulu-east-peak-climbing": "Chulu east peak .jpg",
  // Both of these are approached through Manang and neither peak is on Commons.
  "himlung-himal-expedition": "A Trekker and Manaslu Range seen in background from Bimthang, Manang.jpg",
  "kang-guru-expedition": "Hills & Mountains in Manang.jpg",
  // Was a generic Kyanjin valley frame; this one is the peak itself.
  "dorje-lakpa-expedition": "Dorje lakpa himal Panorama1.jpg",
  // Was the Syabrubesi roadhead, which is where the bus stops, not the climb.
  // The first replacement was a Kyanjin valley frame that already led the
  // Langtang Ganja La trek; this one is the peak at the head of the valley.
  "langshisha-ri-expedition": "Mt. Gangchempo 6387 m- Kyanjin Gompa Lantang Valley-IMG 2731.jpg",
  // Scoring led with a 5,326 m kharka viewpoint above Samdo. On an 8,163 m
  // expedition the mountain itself should front the page.
  "manaslu-expedition": "Manaslu Peak.jpg",

  // --- the reference treks, re-sourced off their hand-uploaded originals ---
  // Was a distant view from Sandakphu, on the Indian side of the border.
  "makalu-base-camp-trek": "Makalu base camp.jpg",
  // Was an Indian Air Force earthquake relief flight over Philim. Commons holds
  // exactly one photograph of the valley itself, and this is it.
  "tsum-valley-trek": "TsumValleyGorkha.jpg",

  // --- products added to fill the ranking gaps ---
  // Led with Tilaurakot, which is the second day. The birthplace itself, with
  // the pillar that identifies it, belongs at the top of the page.
  "lumbini-tour": "Maya Devi Temple and Ashoka Pillar, Lumbini, Rupandehi, Nepal.jpg",
  // Led with the Syabrubesi roadhead rather than the peak being sold.
  "yala-peak-climbing": "Yala-peak.jpg",
  // Led with a posed portrait of a woman and child in Gatlang.
  "paldor-peak-climbing": "Ganesh Himal, Nepal.jpg",
  // --- the Activities category ---
  // The obvious photograph for the activity, which scoring buried because the
  // filename names no place on the itinerary.
  "parahawking-in-pokhara": "Parahawking in Nepal.jpg",
  "cross-country-paragliding-in-pokhara": "Mountain Paragliding as a sport (Unsplash).jpg",
  "pokhara-helicopter-sightseeing-tour": "Helicopter in Mount Nilgiri.jpg",
  // Led with an owl close-up and a village house respectively; both pages sell
  // a national park, so the park should front them.
  "1-night-2-days-chitwan-trip": "Beauty of Chitwan National Park.jpg",
  "2-night-3-days-bardia-tour": "Bardia National Park near Karnali river.jpg",
  // Led with the Junbesi monastery, which is day five. The dawn panorama from
  // the ridge is the whole reason anyone books this trek.
  "pikey-peak-trek": "First Light over the Himalayas from Pikey Peak, Solukhumbu.jpg",
};
