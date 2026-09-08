/**
 * Waypoints shared between climbs.
 *
 * Fourteen of the Khumbu itineraries walk the same trail as far as Dingboche,
 * and six of the Manang ones share the Annapurna Circuit to Manang. Keeping
 * those points in one place means the map lines up when a visitor compares two
 * climbs side by side, instead of Namche sitting fifty metres apart on each.
 *
 * Village, lodge and lake positions come from OpenStreetMap. Base camps,
 * high camps and summits are taken from the published survey heights and the
 * standard camp locations; where a camp has no mapped node it is placed on the
 * route line between two verified points and marked "approx" below.
 */

// ── Khumbu ──
export const LUKLA = { lng: 86.7292, lat: 27.6869 };
export const PHAKDING = { lng: 86.7128, lat: 27.7436 };
export const MONJO = { lng: 86.7222, lat: 27.7761 };
export const NAMCHE = { lng: 86.7139, lat: 27.8047 };
export const KHUMJUNG = { lng: 86.7231, lat: 27.8194 };
export const TENGBOCHE = { lng: 86.7644, lat: 27.8361 };
export const PANGBOCHE = { lng: 86.7942, lat: 27.8556 };
export const DINGBOCHE = { lng: 86.8319, lat: 27.8917 };
export const CHHUKUNG = { lng: 86.8792, lat: 27.9006 };
export const LOBUCHE_VILLAGE = { lng: 86.8097, lat: 27.9494 };
export const GORAK_SHEP = { lng: 86.8283, lat: 27.9808 };
export const EVEREST_BC = { lng: 86.8528, lat: 28.0026 };
export const KALA_PATTHAR = { lng: 86.8289, lat: 27.9953 };
export const DZONGLA = { lng: 86.7906, lat: 27.9425 };
export const THUKLA = { lng: 86.8081, lat: 27.9225 };
export const GOKYO = { lng: 86.6947, lat: 27.9541 };
export const MACHHERMO = { lng: 86.6961, lat: 27.9153 };
export const DOLE = { lng: 86.6883, lat: 27.8714 };
export const THAME = { lng: 86.6297, lat: 27.8461 };
export const MARULUNG = { lng: 86.6119, lat: 27.8672 }; // approx
export const CHO_LA = { lng: 86.7503, lat: 27.9450 };
export const RENJO_LA = { lng: 86.6519, lat: 27.9569 };

// Khumbu climbing peaks and their camps
export const ISLAND_BC = { lng: 86.9214, lat: 27.9111 };
export const ISLAND_HIGH_CAMP = { lng: 86.9308, lat: 27.9169 }; // approx
export const ISLAND_PEAK = { lng: 86.9383, lat: 27.9219 };
export const LOBUCHE_BC = { lng: 86.8156, lat: 27.9411 };
export const LOBUCHE_HIGH_CAMP = { lng: 86.8206, lat: 27.9367 }; // approx
export const LOBUCHE_EAST = { lng: 86.8256, lat: 27.9325 };
export const POKALDE_BC = { lng: 86.8231, lat: 27.9153 }; // Kongma La side, approx
export const POKALDE_PEAK = { lng: 86.8378, lat: 27.9192 };
export const KONGMA_LA = { lng: 86.8347, lat: 27.9269 };
export const KYAJO_RI_BC = { lng: 86.6692, lat: 27.8592 }; // approx
export const KYAJO_RI = { lng: 86.6592, lat: 27.8703 };
export const KWANGDE_BC = { lng: 86.6486, lat: 27.8072 }; // approx
export const KWANGDE_RI = { lng: 86.6353, lat: 27.7972 };
export const PHARI_LAPCHA_BC = { lng: 86.6839, lat: 27.9042 }; // approx
export const PHARI_LAPCHA = { lng: 86.6694, lat: 27.9128 };
export const NIREKHA_BC = { lng: 86.7350, lat: 27.9436 }; // approx
export const NIREKHA_PEAK = { lng: 86.7439, lat: 27.9364 };
export const CHOLATSE_BC = { lng: 86.7658, lat: 27.9219 }; // approx
export const CHOLATSE = { lng: 86.7583, lat: 27.9200 };
export const KUSUM_KANGURU_BC = { lng: 86.7581, lat: 27.7392 }; // approx
export const KUSUM_KANGURU = { lng: 86.7639, lat: 27.7208 };
export const THAMSERKU_BC = { lng: 86.7639, lat: 27.8014 }; // approx
export const THAMSERKU = { lng: 86.7797, lat: 27.7933 };
export const AMA_DABLAM_BC = { lng: 86.8464, lat: 27.8722 };
export const AMA_DABLAM_C1 = { lng: 86.8556, lat: 27.8686 }; // approx
export const AMA_DABLAM_C2 = { lng: 86.8608, lat: 27.8656 }; // approx
export const AMA_DABLAM = { lng: 86.8611, lat: 27.8617 };
export const PUMORI_BC = { lng: 86.8181, lat: 27.9928 }; // approx
export const PUMORI = { lng: 86.8250, lat: 28.0069 };
export const LHOTSE = { lng: 86.9331, lat: 27.9617 };
export const EVEREST = { lng: 86.9250, lat: 27.9881 };
export const CAMP_TWO_KHUMBU = { lng: 86.9022, lat: 27.9739 }; // Western Cwm, approx
export const SOUTH_COL = { lng: 86.9294, lat: 27.9744 };

// ── Hinku / Mera ──
export const CHUTANGA = { lng: 86.7392, lat: 27.6667 }; // approx
export const ZATRWA_LA = { lng: 86.7708, lat: 27.6597 };
export const THULI_KHARKA = { lng: 86.7847, lat: 27.6608 }; // approx
export const KOTHE = { lng: 86.8125, lat: 27.6553 };
export const THAGNAK = { lng: 86.8347, lat: 27.7014 };
export const KHARE = { lng: 86.8503, lat: 27.7317 };
export const MERA_LA = { lng: 86.8767, lat: 27.7147 };
export const MERA_HIGH_CAMP = { lng: 86.8747, lat: 27.7128 }; // approx
export const MERA_PEAK = { lng: 86.8722, lat: 27.7075 };
export const SETO_POKHARI = { lng: 86.9075, lat: 27.7739 }; // approx
export const KONGME_DINGMA = { lng: 86.8894, lat: 27.7431 }; // approx
export const AMPHU_LAPCHA_BC = { lng: 86.9075, lat: 27.8425 }; // approx
export const AMPHU_LAPCHA = { lng: 86.9050, lat: 27.8639 };
export const PAIYA = { lng: 86.6875, lat: 27.6178 }; // approx
export const PANGKOMA = { lng: 86.6753, lat: 27.5814 }; // approx

// ── Makalu-Barun ──
export const TUMLINGTAR = { lng: 87.1939, lat: 27.3153 };
export const NUM = { lng: 87.2703, lat: 27.5364 };
export const SEDUWA = { lng: 87.2508, lat: 27.5717 };
export const TASHIGAON = { lng: 87.2233, lat: 27.6058 };
export const KHONGMA_DANDA = { lng: 87.1889, lat: 27.6433 }; // approx
export const DOBATO = { lng: 87.1550, lat: 27.6864 }; // approx
export const YANGLE_KHARKA = { lng: 87.1147, lat: 27.7519 }; // approx
export const LANGMALE_KHARKA = { lng: 87.0961, lat: 27.8003 }; // approx
export const MAKALU_BC = { lng: 87.0894, lat: 27.8478 };
export const MAKALU = { lng: 87.0889, lat: 27.8897 };
export const SHERPANI_COL_BC = { lng: 87.0453, lat: 27.8489 }; // approx
export const SHERPANI_COL = { lng: 87.0331, lat: 27.8461 };
export const WEST_COL = { lng: 87.0022, lat: 27.8339 };
export const BARUNTSE_BC = { lng: 86.9464, lat: 27.8347 };
export const BARUNTSE = { lng: 86.9803, lat: 27.8722 };
export const CHAMLANG_BC = { lng: 86.9714, lat: 27.7908 }; // approx
export const CHAMLANG = { lng: 86.9800, lat: 27.7761 };
export const PANCH_POKHARI_HONGU = { lng: 86.9394, lat: 27.8078 }; // approx

// ── Annapurna / Manang ──
export const BESISAHAR = { lng: 84.3789, lat: 28.2317 };
export const DHARAPANI = { lng: 84.3428, lat: 28.5225 };
export const CHAME = { lng: 84.2378, lat: 28.5497 };
export const PISANG = { lng: 84.1533, lat: 28.6114 };
export const PISANG_BC = { lng: 84.1650, lat: 28.6244 }; // approx
export const PISANG_HIGH_CAMP = { lng: 84.1697, lat: 28.6303 }; // approx
export const PISANG_PEAK = { lng: 84.1719, lat: 28.6353 };
export const HUMDE = { lng: 84.0847, lat: 28.6408 };
export const NGAWAL = { lng: 84.1058, lat: 28.6467 };
export const MANANG = { lng: 84.0169, lat: 28.6669 };
export const YAK_KHARKA = { lng: 83.9903, lat: 28.7181 };
export const THORONG_PHEDI = { lng: 83.9414, lat: 28.7739 };
export const THORONG_LA = { lng: 83.9317, lat: 28.7936 };
export const MUKTINATH = { lng: 83.8717, lat: 28.8172 };
export const JOMSOM = { lng: 83.7228, lat: 28.7808 };
export const CHULU_WEST_BC = { lng: 84.0644, lat: 28.6947 }; // approx
export const CHULU_WEST_HIGH_CAMP = { lng: 84.0678, lat: 28.7000 }; // approx
export const CHULU_WEST = { lng: 84.0700, lat: 28.7061 };
export const CHULU_EAST_BC = { lng: 84.1097, lat: 28.6836 }; // approx
export const CHULU_EAST_HIGH_CAMP = { lng: 84.1147, lat: 28.6889 }; // approx
export const CHULU_EAST = { lng: 84.1178, lat: 28.6944 };
export const CHULU_FAR_EAST_BC = { lng: 84.1264, lat: 28.6683 }; // approx
export const CHULU_FAR_EAST = { lng: 84.1339, lat: 28.6811 };
export const TILICHO_BC = { lng: 83.9236, lat: 28.6839 };
export const TILICHO_LAKE = { lng: 83.8778, lat: 28.6889 };
export const TILICHO_PEAK = { lng: 83.8483, lat: 28.6939 };
export const KHANGSAR = { lng: 83.9622, lat: 28.6653 };
export const GANGAPURNA = { lng: 83.9636, lat: 28.6047 };
export const ANNAPURNA_I = { lng: 83.8203, lat: 28.5961 };
export const ANNAPURNA_NORTH_BC = { lng: 83.8778, lat: 28.6431 }; // approx
export const ANNAPURNA_SOUTH = { lng: 83.8083, lat: 28.5175 };

// ── Annapurna Sanctuary ──
export const NAYAPUL = { lng: 83.6903, lat: 28.3128 };
export const GHANDRUK = { lng: 83.8103, lat: 28.3775 };
export const CHOMRONG = { lng: 83.8181, lat: 28.4114 };
export const BAMBOO = { lng: 83.8397, lat: 28.4519 };
export const DEURALI_ABC = { lng: 83.8686, lat: 28.4936 };
export const MBC = { lng: 83.8811, lat: 28.5122 };
export const ANNAPURNA_BC = { lng: 83.8783, lat: 28.5306 };
export const THARPU_CHULI_BC = { lng: 83.8850, lat: 28.5308 }; // approx
export const THARPU_CHULI = { lng: 83.8778, lat: 28.5411 };
export const SINGU_CHULI = { lng: 83.8617, lat: 28.5497 };

// ── Manaslu ──
export const SOTI_KHOLA = { lng: 84.8797, lat: 28.2494 };
export const MACHHA_KHOLA = { lng: 84.9008, lat: 28.3292 };
export const JAGAT = { lng: 84.8900, lat: 28.4589 };
export const DENG = { lng: 84.8503, lat: 28.5150 };
export const NAMRUNG = { lng: 84.8078, lat: 28.5442 };
export const LHO = { lng: 84.7364, lat: 28.5814 };
export const SAMAGAON = { lng: 84.6272, lat: 28.6081 };
export const SAMDO = { lng: 84.6300, lat: 28.6597 };
export const DHARAMSALA = { lng: 84.5697, lat: 28.6558 };
export const LARKYA_LA = { lng: 84.5222, lat: 28.6708 };
export const BIMTHANG = { lng: 84.4633, lat: 28.6597 };
export const MANASLU_BC = { lng: 84.5933, lat: 28.5761 };
export const MANASLU = { lng: 84.5597, lat: 28.5497 };
export const SAMDO_PEAK = { lng: 84.6194, lat: 28.6864 };
export const LARKYA_PEAK = { lng: 84.5372, lat: 28.6889 };
export const KOTO = { lng: 84.2583, lat: 28.5417 };
export const MEDA = { lng: 84.2739, lat: 28.6389 }; // approx
export const PHU = { lng: 84.2933, lat: 28.7431 };
export const NAR = { lng: 84.2381, lat: 28.6653 };
export const HIMLUNG_BC = { lng: 84.3517, lat: 28.7625 }; // approx
export const HIMLUNG = { lng: 84.3939, lat: 28.7822 };
export const KANG_GURU_BC = { lng: 84.3306, lat: 28.6969 }; // approx
export const KANG_GURU = { lng: 84.3417, lat: 28.6858 };

// ── Langtang / Jugal ──
export const SYABRUBESI = { lng: 85.3392, lat: 28.1622 };
export const LAMA_HOTEL = { lng: 85.4306, lat: 28.1936 };
export const LANGTANG_VILLAGE = { lng: 85.5169, lat: 28.2117 };
export const KYANJIN_GOMPA = { lng: 85.5619, lat: 28.2114 };
export const LANGSHISHA_KHARKA = { lng: 85.6656, lat: 28.2214 };
export const LANGTANG_LIRUNG = { lng: 85.5169, lat: 28.2558 };
export const LANGTANG_LIRUNG_BC = { lng: 85.5322, lat: 28.2314 }; // approx
export const LANGSHISHA_RI = { lng: 85.7192, lat: 28.2447 };
export const LANGSHISHA_RI_BC = { lng: 85.6944, lat: 28.2300 }; // approx
export const DORJE_LAKPA = { lng: 85.7000, lat: 28.1889 };
export const DORJE_LAKPA_BC = { lng: 85.6800, lat: 28.2039 }; // approx
export const CHAUTARA = { lng: 85.7178, lat: 27.7756 };
export const PANCH_POKHARI = { lng: 85.7194, lat: 28.0031 };
export const GYALZEN_PEAK = { lng: 85.7472, lat: 28.0489 };
export const GYALZEN_BC = { lng: 85.7369, lat: 28.0269 }; // approx

// ── Rolwaling ──
export const CHARIKOT = { lng: 86.0450, lat: 27.6706 };
export const GONGAR = { lng: 86.2997, lat: 27.7031 }; // approx
export const SIMIGAON = { lng: 86.3364, lat: 27.7264 };
export const DONGANG = { lng: 86.3628, lat: 27.8028 }; // approx
export const BEDING = { lng: 86.3844, lat: 27.8794 };
export const NA_GAON = { lng: 86.4197, lat: 27.8894 };
export const YALUNG_RI_BC = { lng: 86.4306, lat: 27.9006 }; // approx
export const YALUNG_RI = { lng: 86.4406, lat: 27.9086 };
export const TSHO_ROLPA = { lng: 86.4711, lat: 27.8608 };
export const TASHI_LAPCHA_BC = { lng: 86.5019, lat: 27.8664 }; // approx
export const TASHI_LAPCHA = { lng: 86.5233, lat: 27.8617 };
export const PACHERMO_BC = { lng: 86.5147, lat: 27.8697 }; // approx
export const PACHERMO = { lng: 86.5072, lat: 27.8783 };

// ── Dhaulagiri / Hidden Valley ──
export const MARPHA = { lng: 83.6889, lat: 28.7539 };
export const YAK_KHARKA_DHAMPUS = { lng: 83.6528, lat: 28.7311 }; // approx
export const DHAMPUS_BC = { lng: 83.6300, lat: 28.7392 }; // approx
export const DHAMPUS_PEAK = { lng: 83.6122, lat: 28.7503 };
export const HIDDEN_VALLEY = { lng: 83.5906, lat: 28.7128 };
export const DHAMPUS_PASS = { lng: 83.6083, lat: 28.7292 };
export const TUKUCHE_BC = { lng: 83.6208, lat: 28.7419 }; // approx
export const TUKUCHE_PEAK = { lng: 83.5928, lat: 28.7414 };
export const JUPHAL = { lng: 82.8194, lat: 28.9300 };
export const DUNAI = { lng: 82.9192, lat: 28.9331 };
export const DHORPATAN = { lng: 83.0700, lat: 28.5119 };
export const PUTHA_BC = { lng: 83.1417, lat: 28.7256 }; // approx
export const PUTHA_HIUNCHULI = { lng: 83.1447, lat: 28.7481 };

// ── Mustang / Damodar ──
export const KAGBENI = { lng: 83.7843, lat: 28.8378 };
export const CHELE = { lng: 83.8270, lat: 28.9311 };
export const GHAMI = { lng: 83.8730, lat: 29.0631 };
export const CHARANG = { lng: 83.9139, lat: 29.0842 };
export const LO_MANTHANG = { lng: 83.9569, lat: 29.1836 };
export const YARA = { lng: 83.9744, lat: 29.0431 };
export const LURI_GOMPA = { lng: 83.9903, lat: 29.0356 };
export const GHUNA_KHARKA = { lng: 84.0189, lat: 29.0058 }; // approx
export const DAMODAR_KUNDA = { lng: 84.0656, lat: 28.9836 };
export const SARIBUNG_BC = { lng: 84.0533, lat: 28.9375 }; // approx
export const SARIBUNG_HIGH_CAMP = { lng: 84.0592, lat: 28.9269 }; // approx
export const SARIBUNG_PEAK = { lng: 84.0669, lat: 28.9186 };
export const SARIBUNG_LA = { lng: 84.0561, lat: 28.9108 };
export const ABI_BC = { lng: 84.0264, lat: 28.9522 }; // approx
export const ABI_HIGH_CAMP = { lng: 84.0322, lat: 28.9569 }; // approx
export const ABI_PEAK = { lng: 84.0378, lat: 28.9614 };
export const NAGORU = { lng: 84.2694, lat: 28.7089 }; // approx
export const KYANG = { lng: 84.2861, lat: 28.7222 }; // approx

// ── Dolpo, Far West and Kanchenjunga ──
export const RINGMO = { lng: 82.9436, lat: 29.1925 };
export const PHOKSUNDO_LAKE = { lng: 82.9433, lat: 29.2081 };
export const KANJIROWA_BC = { lng: 82.75, lat: 29.0667 }; // approx
export const KANJIROWA = { lng: 82.7167, lat: 29.1 };
export const SIMIKOT = { lng: 81.8167, lat: 29.9667 };
export const API_BC = { lng: 80.95, lat: 30.0 }; // approx
export const API_HIMAL = { lng: 80.9333, lat: 30.0167 };
export const GOKULESHWAR = { lng: 80.75, lat: 29.75 }; // approx
export const TAPLEJUNG = { lng: 87.6667, lat: 27.35 };
export const YAMPHUDIN = { lng: 87.85, lat: 27.4667 };
export const TSERAM = { lng: 87.8833, lat: 27.5667 }; // approx
export const RAMCHE = { lng: 87.9, lat: 27.6333 }; // approx
export const BOKTA_BC = { lng: 87.9333, lat: 27.65 }; // approx
export const BOKTA_PEAK = { lng: 87.95, lat: 27.6667 };

// ── Road and air gateways used by the western and eastern approaches ──
export const NEPALGUNJ = { lng: 81.6167, lat: 28.05 };
export const JUMLA = { lng: 82.1833, lat: 29.2833 };
export const BENI = { lng: 83.5667, lat: 28.35 };
export const DARBANG = { lng: 83.2167, lat: 28.4333 };
export const LUMSUM = { lng: 83.15, lat: 28.5 }; // approx
export const BHADRAPUR = { lng: 88.0833, lat: 26.5667 };
export const ILAM = { lng: 87.9167, lat: 26.9167 };
export const DHANGADHI = { lng: 80.5833, lat: 28.7 };
export const ATTARIYA = { lng: 80.55, lat: 28.8 };
export const BARABISE = { lng: 85.8833, lat: 27.7833 };
export const BHOTANG = { lng: 85.75, lat: 27.8667 }; // approx
export const SHIVALAYA = { lng: 86.3, lat: 27.6 };
export const BHANDAR = { lng: 86.3667, lat: 27.55 }; // approx

// ── Langtang and Ganesh Himal trekking peaks, added with the second batch ──
export const THULO_SYABRU = { lng: 85.3607, lat: 28.143 };
export const GATLANG = { lng: 85.2684, lat: 28.1628 };
export const SOMDANG = { lng: 85.1995, lat: 28.19 };
export const TIPLING = { lng: 85.1066, lat: 28.1802 };
export const YALA_BC = { lng: 85.5808, lat: 28.2417 }; // approx
export const YALA_PEAK = { lng: 85.5861, lat: 28.2478 };
export const NAYA_KANGA_BC = { lng: 85.5461, lat: 28.1889 }; // approx
export const NAYA_KANGA_HIGH_CAMP = { lng: 85.5433, lat: 28.1817 }; // approx
export const NAYA_KANGA = { lng: 85.5397, lat: 28.1758 };
export const PALDOR_BC = { lng: 85.1806, lat: 28.2153 }; // approx
export const PALDOR_HIGH_CAMP = { lng: 85.1739, lat: 28.2244 }; // approx
export const PALDOR_PEAK = { lng: 85.1697, lat: 28.2331 };

// ── Lobuche West, the technical twin of Lobuche East ──
export const LOBUCHE_WEST = { lng: 86.8081, lat: 27.9553 };
export const LOBUCHE_WEST_HIGH_CAMP = { lng: 86.8131, lat: 27.9481 }; // approx

// ── The Kanchenjunga north approach from Taplejung ──
export const CHIRWA = { lng: 87.7856, lat: 27.4711 };
export const SEKATHUM = { lng: 87.8339, lat: 27.5322 };
export const AMJILOSA = { lng: 87.8608, lat: 27.5794 };
export const GYABLA = { lng: 87.8919, lat: 27.6114 };
export const GHUNSA = { lng: 87.9364, lat: 27.6608 };
export const KHAMBACHEN = { lng: 87.9695, lat: 27.7039 };
export const LHONAK = { lng: 88.0356, lat: 27.7901 };
export const PANGPEMA = { lng: 88.0817, lat: 27.8306 };
export const KANCHENJUNGA_BC = { lng: 88.0781, lat: 27.8236 }; // Pangpema, the north base camp
export const KANCHENJUNGA = { lng: 88.1475, lat: 27.7025 };

// ── The Dhaulagiri approach from Darbang and the exit over French Pass ──
export const MURI = { lng: 83.3448, lat: 28.5157 };
export const BOGHARA = { lng: 83.3806, lat: 28.5624 };
export const DOBANG = { lng: 83.3925, lat: 28.6289 };
export const ITALIAN_BC = { lng: 83.4376, lat: 28.6925 };
export const DHAULAGIRI_GLACIER_CAMP = { lng: 83.4694, lat: 28.7211 }; // approx
export const DHAULAGIRI_BC = { lng: 83.4995, lat: 28.7472 };
export const DHAULAGIRI = { lng: 83.4933, lat: 28.6983 };
export const FRENCH_PASS = { lng: 83.5347, lat: 28.7369 };
export const YAK_KHARKA_DHAULAGIRI = { lng: 83.6314, lat: 28.7461 }; // approx
