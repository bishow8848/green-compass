import type { Climb } from "./types";
import { nayaKangaPeakClimbing, paldorPeakClimbing, yalaPeakClimbing } from "./langtang-peaks";
import {
  islandPeakClimbing,
  islandPeakFromChhukung,
  islandPeakHelicopterReturn,
  lobucheEastPeakClimbing,
  pokaldePeakClimbing,
} from "./khumbu-island";
import { meraPeakAmphuLapcha, meraPeakClimbing, shortMeraPeakClimbing } from "./mera";
import {
  cholatseExpedition,
  kusumKanguruPeakClimbing,
  kwangdePeakClimbing,
  kyajoRiPeakClimbing,
  nirekhaPeakClimbing,
  phariLapchaPeakClimbing,
  thamserkuExpedition,
} from "./khumbu-technical";
import {
  amaDablamExpedition,
  amaDablamHelicopterReturn,
  shortAmaDablamExpedition,
} from "./ama-dablam";
import {
  everestAndLhotseExpedition,
  everestExpedition,
  lhotseExpedition,
  pumoriExpedition,
} from "./everest-lhotse";
import {
  annapurnaExpedition,
  annapurnaSouthExpedition,
  chuluEastPeakClimbing,
  gangapurnaExpedition,
  chuluFarEastClimbing,
  chuluWestPeakClimbing,
  pisangPeakClimbing,
  singuChuliPeakClimbing,
  tharpuChuliAndSinguChuli,
  tilichoPeakExpedition,
} from "./annapurna";
import { abiPeakClimbing, saribungPeakClimbing } from "./mustang";
import { apiHimalExpedition, boktaPeakClimbing, kanjirowaExpedition } from "./remote";
import {
  dhampusPeakClimbing,
  puthaHiunchuliExpedition,
  tukuchePeakExpedition,
} from "./dhaulagiri";
import {
  pachermoAndKyajoRi,
  pachermoPeakClimbing,
  yalungRiAndPachermo,
} from "./rolwaling";
import {
  dorjeLakpaExpedition,
  jugalHimalGyalzenPeak,
  langshishaRiExpedition,
  langtangLirungExpedition,
} from "./langtang";
import {
  himlungHimalExpedition,
  kangGuruExpedition,
  larkyaPeakClimbing,
  manasluExpedition,
  samdoPeakClimbing,
} from "./manaslu";
import {
  baruntseExpedition,
  baruntseWithMeraPeak,
  chamlangExpedition,
  makaluExpedition,
  makaluSherpaniColMeraPeak,
} from "./makalu";
import {
  amaDablamAndIslandPeak,
  islandMeraWithGokyoEbc,
  lobucheAndIslandPeak,
  meraAndIslandPeak,
  meraIslandAndLobuche,
  pokaldeIslandAndLobuche,
  threePeaksIslandLobucheKyajoRi,
} from "./khumbu-combos";

/**
 * Every climb, in region order. A slug already in the database is skipped by
 * scripts/create-climbing.mts, so this list can grow and be re-run safely.
 */
export const ALL_CLIMBS: Climb[] = [
  islandPeakClimbing,
  islandPeakFromChhukung,
  islandPeakHelicopterReturn,
  lobucheEastPeakClimbing,
  pokaldePeakClimbing,
  meraPeakClimbing,
  shortMeraPeakClimbing,
  meraPeakAmphuLapcha,
  kyajoRiPeakClimbing,
  kwangdePeakClimbing,
  phariLapchaPeakClimbing,
  nirekhaPeakClimbing,
  kusumKanguruPeakClimbing,
  cholatseExpedition,
  thamserkuExpedition,
  amaDablamExpedition,
  shortAmaDablamExpedition,
  amaDablamHelicopterReturn,
  everestExpedition,
  lhotseExpedition,
  everestAndLhotseExpedition,
  pumoriExpedition,
  lobucheAndIslandPeak,
  meraAndIslandPeak,
  pokaldeIslandAndLobuche,
  threePeaksIslandLobucheKyajoRi,
  meraIslandAndLobuche,
  islandMeraWithGokyoEbc,
  amaDablamAndIslandPeak,
  baruntseExpedition,
  baruntseWithMeraPeak,
  makaluExpedition,
  chamlangExpedition,
  makaluSherpaniColMeraPeak,
  chuluWestPeakClimbing,
  chuluEastPeakClimbing,
  chuluFarEastClimbing,
  pisangPeakClimbing,
  singuChuliPeakClimbing,
  tharpuChuliAndSinguChuli,
  tilichoPeakExpedition,
  gangapurnaExpedition,
  annapurnaExpedition,
  annapurnaSouthExpedition,
  manasluExpedition,
  samdoPeakClimbing,
  larkyaPeakClimbing,
  himlungHimalExpedition,
  kangGuruExpedition,
  langshishaRiExpedition,
  langtangLirungExpedition,
  dorjeLakpaExpedition,
  jugalHimalGyalzenPeak,
  pachermoPeakClimbing,
  yalungRiAndPachermo,
  pachermoAndKyajoRi,
  dhampusPeakClimbing,
  tukuchePeakExpedition,
  puthaHiunchuliExpedition,
  saribungPeakClimbing,
  abiPeakClimbing,
  kanjirowaExpedition,
  apiHimalExpedition,
  boktaPeakClimbing,
  yalaPeakClimbing,
  nayaKangaPeakClimbing,
  paldorPeakClimbing,
];
