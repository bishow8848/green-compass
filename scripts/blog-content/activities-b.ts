import type { BlogContent } from "./build";

export const activitiesB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "jungle-safari-in-nepal-guide",
    title: "Jungle Safari in Nepal: Every Park Compared",
    cluster: "activities",
    date: "2027-01-20",
    hero: {
      image: "mardi-treks/bardia-national-park-tour-4-days/bardia-national-park-tour-4-days-06-tiger-bardiya",
      alt: "A Bengal tiger in Bardia National Park, western Nepal.",
    },
    excerpt:
      "Nepal's Terai parks hold one-horned rhino, Bengal tiger, wild elephant and over 500 bird species. Chitwan, Bardia and Koshi Tappu compared on wildlife, access, crowds and cost, with the ethics of elephant tourism addressed directly.",
    intro: [
      { p: "Almost everyone who comes to Nepal comes for the mountains, and a good proportion leave without realising the country has subtropical jungle holding rhino, tiger and wild elephant at 150 m above sea level. The Terai lowlands along the Indian border carry some of the best-protected grassland and sal forest habitat in South Asia, and visiting is straightforward." },
      { p: "Three destinations matter: <strong>Chitwan</strong> for convenience and guaranteed rhino, <strong>Bardia</strong> for tigers and wildness, and <strong>Koshi Tappu</strong> for birds and wild water buffalo. Here is how they compare." },
    ],
    sections: [
      {
        h2: "The Three Compared",
        blocks: [
          {
            table: {
              head: ["", "[[trek:chitwan-national-park-tour-3-days|Chitwan]]", "[[trek:bardia-national-park-tour-4-days|Bardia]]", "[[trek:koshi-tappu-wildlife-reserve-tour|Koshi Tappu]]"],
              rows: [
                ["Size", "952 km²", "968 km²", "175 km²"],
                ["Getting there", "4–5 hrs by road from Kathmandu", "Flight to Nepalgunj plus 2–3 hrs", "Flight to Biratnagar plus 1–2 hrs"],
                ["Rhino", "Over 600 — sightings routine", "Present, reintroduced, fewer", "Absent"],
                ["Tiger", "Around 125, sightings uncommon", "Around 125, materially better odds", "Absent"],
                ["Wild elephant", "Occasional", "Resident herds", "Occasional crossings"],
                ["Wild water buffalo (arna)", "Absent", "Absent", "The last wild population in Nepal"],
                ["Birds", "Over 500 species", "Over 400 species", "Over 500 species — the best birding in Nepal"],
                ["River dolphin", "Absent", "Gangetic dolphins in the Karnali", "Occasional in the Sapta Koshi"],
                ["Visitors", "Nepal's busiest park", "A small fraction of Chitwan", "Very few"],
                ["Days needed", "3", "4–5", "2–3"],
                ["Best for", "A reliable first safari on a circuit", "Serious wildlife watching", "Birds and wetland"],
              ],
            },
          },
        ],
      },
      {
        h2: "Chitwan: The Convenient Choice",
        blocks: [
          { p: "Nepal's first national park, a UNESCO site since 1984, and the place where the greater one-horned rhino recovered from around 100 animals to over 600. It sits on the Kathmandu–Pokhara corridor, which makes it the easiest wildlife stop in the country to add to a trip." },
          {
            ul: [
              "<strong>Rhino sightings are close to routine</strong>, often several in a three-day visit.",
              "<strong>Activities:</strong> jeep safari, dawn canoe on the Rapti, guided jungle walk with armed naturalists, birdwatching, the elephant breeding centre, and Tharu cultural programmes.",
              "<strong>The dawn canoe</strong> is the single best activity — silent, excellent for crocodiles and waterbirds, and frequently with rhino on the bank.",
              "<strong>Tigers are present and uncommon.</strong> Around 125 in dense habitat; a sighting is luck.",
              "<strong>Crowding</strong> is real at good sightings in peak season, with several jeeps at once.",
            ],
          },
          { p: "Three days is the practical minimum. See our [[post:chitwan-national-park-guide|Chitwan guide]] for the detail, and our itineraries at [[trek:chitwan-national-park-tour-3-days|three days]], [[trek:chitwan-national-park-tour-4-days|four days]] or [[trek:1-night-2-days-chitwan-trip|a short two-day trip]]." },
        ],
      },
      {
        h2: "Bardia: The Wildlife Choice",
        blocks: [
          { p: "Further west, harder to reach, and the better park. Bardia receives a small fraction of Chitwan's visitors and holds a growing tiger population, resident wild elephant herds, and Gangetic river dolphins in the Karnali." },
          {
            ul: [
              "<strong>Tiger odds are materially better</strong>, with most sightings coming from patient riverbank or hide watching rather than driving.",
              "<strong>Wild elephant herds</strong> move through the park and across the Indian border, including very large bulls.",
              "<strong>Gangetic dolphins</strong> in the Karnali — one of very few places in Nepal to see them.",
              "<strong>No crowding.</strong> A sighting here is yours.",
              "<strong>Access:</strong> a flight to Nepalgunj then two to three hours by road. This is what keeps the visitor numbers down.",
              "<strong>Four days minimum</strong>, five better — the park is large and rewards patience.",
            ],
          },
          { p: "See our [[post:bardia-national-park-guide|Bardia guide]], and itineraries at [[trek:bardia-national-park-tour-4-days|four days]] or [[trek:bardia-jungle-safari-tour-5-days|five days]]." },
        ],
      },
      {
        h2: "Koshi Tappu: The Bird Choice",
        blocks: [
          { p: "A 175 km² wetland reserve on the Sapta Koshi floodplain in eastern Nepal, designated a Ramsar site and completely different in character from the forest parks. It is a mosaic of river channels, oxbow lakes, marsh and grassland, and it is the best birding destination in Nepal." },
          {
            ul: [
              "<strong>Over 500 bird species</strong> recorded, including large numbers of migratory waterfowl in winter — storks, ibises, ducks, waders, and the endangered Bengal florican in the grasslands.",
              "<strong>Wild water buffalo (arna)</strong> — Koshi Tappu protects the last wild population in Nepal, a few hundred animals, and the reserve exists largely for them.",
              "<strong>Gangetic dolphin</strong> occasionally in the river channels.",
              "<strong>Activities:</strong> boat trips, walking in the grasslands, and long hours with binoculars. It is not a jeep-safari park.",
              "<strong>Season:</strong> November to March is the window, with peak migratory numbers in the middle of winter.",
            ],
          },
          { p: "It suits birdwatchers specifically. [[trek:koshi-tappu-wildlife-reserve-tour|Our Koshi Tappu tour]] runs three days, and our [[post:bird-watching-in-nepal-guide|bird watching guide]] covers the country's birding more broadly." },
        ],
      },
      {
        h2: "The Elephant Question",
        blocks: [
          { p: "Nepal's Terai parks were for decades associated with elephant-back safaris, and this has changed for good reason. Making an elephant rideable requires training methods widely regarded as cruel, and the practice is in decline across the region." },
          {
            ul: [
              "<strong>We do not offer elephant riding</strong> at any park, and we will not arrange it on request.",
              "<strong>Jeep safaris and canoe or boat trips see as much or more</strong>, and from a vehicle wildlife is less disturbed than by an approaching elephant.",
              "<strong>So-called ethical elephant bathing</strong> experiences generally still involve captive, trained animals. We do not include them.",
              "<strong>Breeding centres</strong> are observation rather than participation, though the chaining practices at them are themselves a legitimate subject of criticism.",
              "<strong>Wild elephants</strong> exist in both Chitwan and especially Bardia, and a wild herd is a completely different experience from a captive animal.",
            ],
          },
          { p: "This is one of the clearer cases where the responsible option is also the better one — a dawn canoe on the Rapti or a riverbank sit in Bardia delivers more than an elephant ride, and leaves nothing behind. Our [[post:responsible-trekking-in-nepal|responsible travel guide]] covers the wider principles." },
        ],
      },
      {
        h2: "When to Go and What to Bring",
        blocks: [
          {
            table: {
              head: ["Season", "Conditions", "Wildlife viewing"],
              rows: [
                ["October – December", "Warm days, cool nights, grass being cut", "Good, improving through the season"],
                ["January – March", "Cool, dry, short grass", "The best window across all three parks"],
                ["April – June", "Very hot, often above 40 °C", "Best tiger odds at waterholes; hard on visitors"],
                ["July – September", "Monsoon, flooding, tall grass", "Poor — Bardia and Koshi Tappu largely inaccessible"],
              ],
            },
          },
          {
            ul: [
              "<strong>Binoculars.</strong> Essential, particularly in Bardia and Koshi Tappu. Bring your own rather than hoping to borrow.",
              "<strong>Neutral clothing</strong> — greens, browns, greys. Long sleeves and trousers for mosquitoes.",
              "<strong>Insect repellent</strong>, a sun hat, and a long camera lens if you are photographing.",
              "<strong>Malaria:</strong> low but present risk in the Terai. Take current medical advice.",
              "<strong>Patience.</strong> The difference between a good and a poor safari is usually willingness to sit still rather than drive around.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Which national park in Nepal is best for wildlife?", answer: "Bardia, for better tiger odds, resident wild elephant herds, Gangetic dolphins and far fewer visitors. Chitwan is better for convenience and near-guaranteed rhino sightings, and Koshi Tappu is the best for birds and holds Nepal's last wild water buffalo." },
      { question: "Where can I see a tiger in Nepal?", answer: "Bardia gives materially better odds than Chitwan, with most sightings coming from patient riverbank or hide watching rather than driving around. Both parks hold around 125 tigers; Bardia's are in a larger area with fewer visitors and more predictable water access." },
      { question: "Do you offer elephant rides?", answer: "No, at any park. The training methods used to make elephants rideable are widely regarded as cruel, and we do not offer or arrange elephant-back safaris or elephant bathing experiences. Jeep safaris and canoe trips see as much or more wildlife." },
      { question: "When is the best time for a jungle safari in Nepal?", answer: "January to March across all three parks — cool, dry, with the grass cut short which transforms visibility. October to December is also good. April to June gives the best tiger odds at waterholes but temperatures above 40 °C, and the monsoon floods Bardia and Koshi Tappu." },
      { question: "How many days do I need?", answer: "Three at Chitwan, four or five at Bardia, and two or three at Koshi Tappu. Chitwan is the one that fits comfortably into a shorter stop because it sits on the Kathmandu–Pokhara corridor; Bardia requires a flight and rewards more time." },
      { question: "What is Koshi Tappu?", answer: "A 175 km² Ramsar-listed wetland reserve on the Sapta Koshi floodplain in eastern Nepal, and the best birding destination in the country with over 500 species. It also protects Nepal's last wild water buffalo population. It is a boat and walking reserve rather than a jeep-safari park." },
      { question: "Will I definitely see a rhino?", answer: "In Chitwan, very likely — the park holds over 600 greater one-horned rhino and sightings are close to routine over a three-day visit, often several. Bardia has a smaller reintroduced population, so sightings there are less certain." },
      { question: "Is it safe to walk in the jungle?", answer: "Guided walks are run with two armed naturalists and thousands of visitors do them each season without incident. Rhino and wild elephant cause more injuries than tigers. The safety procedure is to follow your naturalist's instructions exactly, including climbing a tree if told to." },
    ],
    relatedTreks: [
      "chitwan-national-park-tour-3-days",
      "bardia-national-park-tour-4-days",
      "koshi-tappu-wildlife-reserve-tour",
      "bardia-jungle-safari-tour-5-days",
      "bird-watching-in-chitwan-national-park",
    ],
    tripsNote: "Every wildlife park we operate in, from a two-day Chitwan stop to a five-day Bardia safari.",
    relatedPosts: [
      "chitwan-national-park-guide",
      "bardia-national-park-guide",
      "bird-watching-in-nepal-guide",
      "nepal-cultural-tour-itineraries",
    ],
    tags: ["jungle safari", "wildlife", "chitwan", "bardia", "koshi tappu"],
    meta: {
      title: "Jungle Safari in Nepal: Every Park Compared",
      description: "Chitwan, Bardia and Koshi Tappu compared on wildlife, access, crowds and cost — plus the elephant riding question, the best months, and what to bring.",
      keywords: "jungle safari Nepal, Chitwan vs Bardia, Koshi Tappu, Nepal wildlife parks, elephant riding ethics",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "bird-watching-in-nepal-guide",
    title: "Bird Watching in Nepal: 880 Species in One Small Country",
    cluster: "activities",
    date: "2027-01-23",
    hero: {
      image: "mardi-treks/bird-watching-in-chitwan-national-park/bird-watching-in-chitwan-national-park-00-a-panoramic-view-of-rapti-river-at-chitwan-national-park-2",
      alt: "The Rapti river in Chitwan National Park, prime birding habitat, Nepal.",
    },
    excerpt:
      "Nepal holds around 880 bird species in an area the size of England, because it runs from 60 m to 8,848 m. The best sites by habitat, what to see where, when to go, and how to plan a birding trip.",
    intro: [
      { p: "Nepal has roughly <strong>880 recorded bird species</strong> — about 8% of the world's total — in a country smaller than England. The reason is altitude: the land rises from 60 m in the Terai to 8,848 m at the summit of Everest within 200 km, stacking subtropical jungle, broadleaf forest, conifer, alpine scrub and high-altitude desert one above another." },
      { p: "For birdwatchers that makes Nepal one of the best-value destinations in Asia, and it is extraordinarily under-visited for the purpose. Here are the sites that matter." },
    ],
    sections: [
      {
        h2: "The Best Sites by Habitat",
        blocks: [
          {
            table: {
              head: ["Site", "Habitat", "Species", "Highlights"],
              rows: [
                ["[[trek:koshi-tappu-wildlife-reserve-tour|Koshi Tappu]]", "Wetland, floodplain, grassland", "Over 500", "Migratory waterfowl, storks, ibises, Bengal florican. Nepal's best."],
                ["[[trek:bird-watching-in-chitwan-national-park|Chitwan]]", "Sal forest, grassland, oxbow lakes", "Over 500", "Great hornbill, paradise flycatcher, Bengal florican, fish eagles"],
                ["[[trek:bird-watching-in-kathmandu-valley|Phulchowki and Godavari]]", "Mid-hill broadleaf forest", "Over 300", "Spiny babbler (endemic), laughingthrushes, sunbirds, cutias"],
                ["[[trek:bird-watching-in-pokhara-lakes|Pokhara lakes]]", "Lake, marsh, foothill forest", "Over 400 in the valley", "Waterfowl on Phewa and Begnas, raptors, kingfishers"],
                ["[[trek:red-panda-trail-trek|Ilam and the Singalila ridge]]", "Eastern cloud forest", "Very high", "The richest forest bird diversity in Nepal — eastern specialities"],
                ["[[trek:rara-lake-trek|Rara Lake]]", "High lake, conifer forest", "Over 200", "Migratory waterfowl, coots, grebes, teal, Himalayan species"],
                ["[[trek:bardia-national-park-tour-4-days|Bardia]]", "Sal forest, riverine grassland", "Over 400", "Sarus crane, Bengal florican, white-rumped vulture"],
                ["[[trek:langtang-valley-trek|Langtang]] and [[trek:everest-base-camp-trek|Khumbu]]", "Alpine and subalpine", "Fewer but specialised", "Himalayan monal, blood pheasant, snow pigeon, choughs, lammergeier"],
              ],
            },
          },
        ],
      },
      {
        h2: "The Birds to Look For",
        blocks: [
          { h3: "The endemic and the near-endemic" },
          { p: "Nepal has one true endemic: the <strong>spiny babbler</strong> (<em>Turdoides nipalensis</em>), a skulking brown bird of dense scrub found nowhere else on earth, most reliably seen at Phulchowki and in the mid-hills around the Kathmandu Valley. Finding one is a genuine tick and requires patience in thick cover." },
          { h3: "The Himalayan pheasants" },
          { p: "<strong>Himalayan monal</strong> — the national bird, <em>danphe</em> — is an iridescent copper, green and blue pheasant found above the treeline from about 3,000 m, commonly seen on the Langtang, Annapurna and Khumbu trails. <strong>Blood pheasant</strong>, <strong>satyr tragopan</strong>, <strong>koklass</strong> and <strong>cheer pheasant</strong> complete a set that is one of the great attractions of Himalayan birding." },
          { h3: "The vultures" },
          { p: "South Asia's vulture populations collapsed by over 95% from the 1990s because of diclofenac, a veterinary drug fatal to birds feeding on treated carcasses. Nepal banned it and established <strong>vulture safe zones</strong> and community-run feeding sites, and populations of <strong>white-rumped</strong>, <strong>slender-billed</strong> and <strong>Egyptian vulture</strong> are recovering. The <strong>lammergeier</strong> or bearded vulture, with a three-metre wingspan, is a regular sight over high trails." },
          { h3: "The wetland birds" },
          { p: "Koshi Tappu in winter holds large numbers of migratory waterfowl on the Sapta Koshi floodplain, along with <strong>black-necked</strong> and <strong>woolly-necked stork</strong>, ibises, and the endangered <strong>Bengal florican</strong> in the grasslands. It is the single richest site in the country." },
        ],
      },
      {
        h2: "When to Go",
        blocks: [
          {
            table: {
              head: ["Season", "What is happening", "Where to be"],
              rows: [
                ["November – February", "Peak migratory waterfowl; resident species concentrated at water", "Koshi Tappu, Chitwan, Bardia, the Pokhara lakes"],
                ["March – April", "Breeding season, birds in full song and plumage; forest at its best", "Phulchowki, Ilam, mid-hill forest, the trekking trails"],
                ["May", "Breeding continues; high-altitude species accessible as snow retreats", "Langtang, Khumbu, Annapurna"],
                ["June – September", "Monsoon — difficult, though some high-altitude breeding is accessible", "Rain-shadow regions only"],
                ["October", "Autumn passage; excellent all-round conditions", "Everywhere"],
              ],
            },
          },
          { p: "The two peak windows are <strong>November to February</strong> for wetland and lowland birding, and <strong>March to April</strong> for forest species in song and breeding plumage. A trip combining Koshi Tappu or Chitwan in winter with a mid-hill forest site gives the widest species list." },
        ],
      },
      {
        h2: "Planning a Birding Trip",
        blocks: [
          {
            ul: [
              "<strong>Take a specialist guide.</strong> Nepal has excellent bird guides, and the difference between a general naturalist and a birder who knows the calls is enormous — often 60 species in a morning rather than 20. Tell us at the enquiry stage so we assign the right guide.",
              "<strong>Bring your own binoculars</strong> — 8x42 or 10x42 — and a field guide. Grimmett, Inskipp and Inskipp's <em>Birds of Nepal</em> is the standard.",
              "<strong>Plan around habitats rather than destinations.</strong> A trip that takes in a lowland wetland, a mid-hill forest and an alpine trail will out-list a trip that does one habitat thoroughly.",
              "<strong>Early mornings.</strong> Almost everything happens in the first three hours of light, and a birding day realistically starts at 5.30 a.m.",
              "<strong>Combine with a trek.</strong> The walk in to Langtang, the Khumbu forest below Namche, and the Ilam cloud forest are all superb, and a trekking itinerary can be paced for birding on request.",
              "<strong>Allow for weather.</strong> Mist in the eastern hills is common and it closes down forest birding for hours.",
            ],
          },
          { p: "Our dedicated birding trips run at [[trek:bird-watching-in-chitwan-national-park|Chitwan]], [[trek:bird-watching-in-kathmandu-valley|the Kathmandu Valley]] and [[trek:bird-watching-in-pokhara-lakes|the Pokhara lakes]], and [[trek:koshi-tappu-wildlife-reserve-tour|the Koshi Tappu tour]] is the one to build a trip around if birds are the priority." },
        ],
      },
    ],
    faqs: [
      { question: "How many bird species are there in Nepal?", answer: "Around 880 recorded species — roughly 8% of the world's total — in a country smaller than England. The reason is altitude: the land rises from 60 m in the Terai to 8,848 m within 200 km, stacking subtropical, temperate and alpine habitats one above another." },
      { question: "Where is the best birdwatching in Nepal?", answer: "Koshi Tappu Wildlife Reserve on the Sapta Koshi floodplain in eastern Nepal, with over 500 species and large numbers of migratory waterfowl in winter. Chitwan is the best forest and grassland site, Phulchowki the best mid-hill forest, and Ilam has the richest forest diversity." },
      { question: "What is Nepal's only endemic bird?", answer: "The spiny babbler, a skulking brown bird of dense scrub found nowhere else on earth. It is most reliably seen at Phulchowki and in the mid-hills around the Kathmandu Valley, and finding one takes patience in thick cover." },
      { question: "When is the best time for birding in Nepal?", answer: "November to February for wetland and lowland birding, when migratory waterfowl numbers peak, and March to April for forest species in full song and breeding plumage. A trip combining a winter wetland with a spring forest site would need two visits; October is the best all-round compromise." },
      { question: "Can I see the Himalayan monal?", answer: "Yes, and fairly readily — the national bird is an iridescent pheasant found above about 3,000 m and commonly seen on the Langtang, Annapurna and Khumbu trails, particularly in the early morning near the treeline. Blood pheasant and satyr tragopan are the harder relatives." },
      { question: "Do I need a specialist bird guide?", answer: "It makes an enormous difference — often 60 species in a morning rather than 20, because a birder who knows the calls finds what a general naturalist walks past. Tell us at the enquiry stage and we will assign a specialist rather than a general guide." },
      { question: "Are vultures recovering in Nepal?", answer: "Yes. South Asian vulture populations collapsed by over 95% from the 1990s because of the veterinary drug diclofenac. Nepal banned it and established vulture safe zones with community feeding sites, and white-rumped, slender-billed and Egyptian vulture numbers are recovering." },
      { question: "Can I combine birding with a trek?", answer: "Very well. The walk in to Langtang, the Khumbu forest below Namche, the Ilam cloud forest on the Red Panda Trail, and the Annapurna foothill forests are all excellent. A trekking itinerary can be paced with early starts and a bird-focused guide on request." },
    ],
    relatedTreks: [
      "koshi-tappu-wildlife-reserve-tour",
      "bird-watching-in-chitwan-national-park",
      "bird-watching-in-kathmandu-valley",
      "bird-watching-in-pokhara-lakes",
      "red-panda-trail-trek",
    ],
    tripsNote: "Dedicated birding trips and the wildlife reserves with the richest species lists.",
    relatedPosts: [
      "jungle-safari-in-nepal-guide",
      "chitwan-national-park-guide",
      "red-panda-trail-trek-guide",
      "rara-lake-trek-guide",
    ],
    tags: ["bird watching", "wildlife", "koshi tappu", "spiny babbler", "himalayan monal"],
    meta: {
      title: "Bird Watching in Nepal: 880 Species in One Small Country",
      description: "Nepal's birding explained — the best sites by habitat from Koshi Tappu to the Khumbu, the spiny babbler and Himalayan pheasants, vulture recovery, and when to go.",
      keywords: "bird watching Nepal, Koshi Tappu birding, spiny babbler, Himalayan monal, Nepal bird species",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mountain-flights-in-nepal-guide",
    title: "Mountain Flights in Nepal: An Hour Alongside the Himalaya",
    cluster: "activities",
    date: "2027-01-27",
    hero: {
      image: "mardi-treks/everest-base-camp-helicopter-tour/everest-base-camp-helicopter-tour-05-panorama-khumbu-glacier-tobuche",
      alt: "A panorama of the Khumbu glacier and Tobuche from the air, Nepal.",
    },
    excerpt:
      "A one-hour fixed-wing flight along the Himalaya from Kathmandu or Pokhara, with a window seat for every passenger and a turn in the cockpit. The cheapest way to see Everest at close range, and what to expect.",
    intro: [
      { p: "A mountain flight is the least expensive way to see the high Himalaya properly. A fixed-wing aircraft takes off from Kathmandu or Pokhara, climbs to cruising altitude, flies east or west along the range for half an hour, turns and comes back — an hour door to door with eight of the world's fourteen eight-thousanders visible on a clear morning." },
      { p: "Every passenger gets a window seat because the aircraft are configured for it, and crews rotate passengers to the cockpit for a forward view. It is not a substitute for a trek, and it is a remarkably good hour." },
    ],
    sections: [
      {
        h2: "The Two Flights",
        blocks: [
          {
            table: {
              head: ["", "[[trek:everest-mountain-flight|Everest mountain flight]]", "[[trek:mountain-flight-from-pokhara|Pokhara mountain flight]]"],
              rows: [
                ["Departs", "Kathmandu", "Pokhara"],
                ["Duration", "About 1 hour", "About 1 hour"],
                ["Range flown", "East along the Khumbu and Rolwaling", "The Annapurna and Dhaulagiri massifs"],
                ["Main peaks", "Everest, Lhotse, Makalu, Cho Oyu, Gaurishankar, Ama Dablam", "Annapurna I–IV, Dhaulagiri, Machhapuchhre, Manaslu, Nilgiri"],
                ["Departure time", "6.30–7.30 a.m.", "6.30–8.00 a.m."],
                ["Window seats", "Every passenger", "Every passenger"],
                ["Cockpit visit", "Usually, rotated", "Usually, rotated"],
                ["Best season", "October to March", "October to April"],
              ],
            },
          },
          { p: "The Everest flight is the more famous; the Pokhara flight brings you closer to the peaks, because Annapurna and Dhaulagiri sit only 30 km from the city. If you are in Pokhara with a clear morning, that is the better hour." },
        ],
      },
      {
        h2: "What You Actually See",
        blocks: [
          { p: "The flight cruises at around 25,000 to 27,000 feet — roughly 7,600 to 8,200 m — which puts you level with the summits rather than looking up at them. On the Everest flight, going east from Kathmandu:" },
          {
            ul: [
              "<strong>Gaurishankar (7,134 m)</strong> and the Rolwaling peaks first, with Tsho Rolpa visible below.",
              "<strong>Melungtse</strong> across the Tibetan border.",
              "<strong>Cho Oyu (8,188 m)</strong>, the sixth highest.",
              "<strong>Everest (8,848 m)</strong>, usually with its summit plume, alongside <strong>Lhotse (8,516 m)</strong> and <strong>Nuptse</strong>.",
              "<strong>Ama Dablam</strong>, unmistakable, and the Khumbu glacier below.",
              "<strong>Makalu (8,485 m)</strong>, the fifth highest, as the aircraft turns.",
              "<strong>On a very clear day, Kanchenjunga</strong> far to the east.",
            ],
          },
          { p: "The cabin crew name the peaks as they pass and bring passengers forward to the cockpit two at a time. It is worth moving around the cabin — the view changes substantially between the outbound and return legs, because the aircraft flies the range in both directions with the mountains on alternate sides." },
        ],
      },
      {
        h2: "Mountain Flight, Helicopter Tour, or Trek?",
        blocks: [
          {
            table: {
              head: ["", "Mountain flight", "[[trek:everest-base-camp-helicopter-tour|Helicopter tour]]", "[[trek:everest-base-camp-trek|Trek]]"],
              rows: [
                ["Duration", "1 hour", "4–5 hours", "14 days"],
                ["Cost", "Lowest", "High", "Moderate"],
                ["Altitude experienced", "None — pressurised cabin", "5,300–5,545 m landing", "Up to 5,545 m on foot"],
                ["You touch the ground", "No", "Yes", "Yes"],
                ["Physical demand", "None", "Minimal", "Substantial"],
                ["What you get", "The scale of the whole range", "Standing at a viewpoint in a morning", "The valley, the culture, the achievement"],
                ["Who it suits", "Anyone, including young children and the elderly", "Limited time or mobility", "Anyone with two weeks and fitness"],
              ],
            },
          },
          { p: "They are not really alternatives. The mountain flight is an hour that costs little and shows you the scale of the Himalaya in a way nothing on the ground does; many trekkers take one as well. Our [[post:helicopter-tours-in-nepal-guide|helicopter tours guide]] covers the middle option and [[post:short-everest-treks-without-base-camp|the short Everest treks guide]] the ground-based alternatives." },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Go early.</strong> Flights operate in the first hours of daylight because haze and cloud build through the morning. A 6.30 a.m. departure means a 5.30 hotel pickup.",
              "<strong>Season.</strong> October to March from Kathmandu and October to April from Pokhara, with the clearest air from November to February. Flights are suspended or unreliable in the monsoon.",
              "<strong>Cancellation.</strong> Poor visibility cancels flights, and rebooking is to the next clear morning. Do not schedule one for your departure day.",
              "<strong>Seating.</strong> Every seat is a window seat on these aircraft, and on most operators the seats are unassigned — board early if you want a particular side, though the aircraft flies the range in both directions so both sides get a view.",
              "<strong>Photography.</strong> Shoot through the window with the lens close to the glass to reduce reflection, turn off image stabilisation if your lens hunts, and use a fast shutter speed. A polarising filter is counterproductive through aircraft windows.",
              "<strong>Motion sickness.</strong> Unlikely, but the aircraft banks steadily along the range. Take something if you are prone.",
              "<strong>Children and older passengers.</strong> Entirely fine — the cabin is pressurised and there is no altitude exposure at all, which is the key difference from a helicopter landing.",
            ],
          },
          { p: "A final recommendation: if you are spending days in Kathmandu waiting for a Lukla flight, a mountain flight is a genuinely good use of a clear morning — and a preview of the valley you are about to walk into. See our [[post:lukla-flight-guide|Lukla flight guide]] for the context." },
        ],
      },
    ],
    faqs: [
      { question: "What is a mountain flight in Nepal?", answer: "A one-hour fixed-wing scenic flight from Kathmandu or Pokhara that climbs to cruising altitude, flies along the Himalaya for about half an hour, turns and returns. Every passenger gets a window seat and the crew usually rotate passengers to the cockpit for a forward view." },
      { question: "Can you see Everest from a mountain flight?", answer: "Yes, clearly, on the Kathmandu flight — along with Lhotse, Nuptse, Cho Oyu, Makalu, Ama Dablam and Gaurishankar on a clear morning, and sometimes Kanchenjunga far to the east. The aircraft cruises at around 25,000 to 27,000 feet, which puts you level with the summits." },
      { question: "Is the Kathmandu or Pokhara flight better?", answer: "The Kathmandu flight shows Everest and the 8,000 m peaks of the east; the Pokhara flight brings you closer to the mountains, because Annapurna and Dhaulagiri are only 30 km from the city. If you are in Pokhara with a clear morning, that is the better hour." },
      { question: "What time do mountain flights depart?", answer: "Between about 6.30 and 8 a.m., with hotel pickup an hour earlier. Flights operate in the first hours of daylight because haze and cloud build through the morning, and by mid-morning visibility along the range is usually gone." },
      { question: "When is the best season?", answer: "October to March from Kathmandu and October to April from Pokhara, with the clearest air from November to February. Flights are unreliable or suspended during the monsoon, when the range is under cloud for weeks." },
      { question: "Is a mountain flight suitable for children or elderly passengers?", answer: "Entirely — the cabin is pressurised and there is no altitude exposure at all, which is the key difference from a helicopter landing at 5,500 m. It is the only way to see the high Himalaya with no physical demand whatsoever." },
      { question: "How should I photograph from the aircraft?", answer: "Hold the lens close to the glass to cut reflections, use a fast shutter speed, and skip the polarising filter — it interacts badly with aircraft windows. Move around the cabin if you can; the aircraft flies the range in both directions, so the view changes between legs." },
      { question: "Is it worth it if I am also trekking?", answer: "Many trekkers take one as well, and it is a genuinely good use of a clear morning while waiting for a Lukla flight. The flight gives you the scale of the whole range in an hour; the trek gives you one valley at walking pace. They complement rather than compete." },
    ],
    relatedTreks: [
      "everest-mountain-flight",
      "mountain-flight-from-pokhara",
      "everest-base-camp-helicopter-tour",
      "pokhara-helicopter-sightseeing-tour",
      "ultra-light-flight-in-pokhara",
    ],
    tripsNote: "Scenic flights from Kathmandu and Pokhara, plus the helicopter alternatives.",
    relatedPosts: [
      "helicopter-tours-in-nepal-guide",
      "short-everest-treks-without-base-camp",
      "lukla-flight-guide",
      "pokhara-travel-guide",
    ],
    tags: ["mountain flight", "scenic flight", "everest", "pokhara", "kathmandu"],
    meta: {
      title: "Mountain Flights in Nepal: An Hour Alongside the Himalaya",
      description: "Nepal's mountain flights from Kathmandu and Pokhara — what you see, how they compare with helicopter tours and trekking, the best season, and photography tips.",
      keywords: "mountain flight Nepal, Everest scenic flight, Pokhara mountain flight, Everest from plane, Himalaya flight",
    },
  },
];
