import type { NewTrek } from "./types";
import { apiHimalTrek } from "./api-himal";
import { badimalikaTrek } from "./badimalika";
import { churenHimalTrek } from "./churen-himal";
import { ebcHelicopterReturnTrek } from "./ebc-helicopter-return";
import { dhaulagiriCircuitTrek } from "./dhaulagiri-circuit";
import { ebcGokyoChoLaTrek } from "./ebc-gokyo-cho-la";
import { guerrillaTrek } from "./guerrilla";
import { narPhuValleyTrek } from "./nar-phu-valley";
import { pikeyPeakTrek } from "./pikey-peak";
import { raraLakeTrek } from "./rara-lake";
import { jomsomDolpoTrek } from "./jomsom-dolpo";
import { larkePassTrek } from "./larke-pass";
import { lowerManasluTrek } from "./lower-manaslu";
import { panchPokhariTrek } from "./panch-pokhari";
import { ramaroshanTrek } from "./ramaroshan";
import { redPandaTrailTrek } from "./red-panda-trail";
import { rupinaLaTrek } from "./rupina-la";
import { saribungPassTrek } from "./saribung-pass";
import { serangGompaTrek } from "./serang-gompa";
import { sherpaniColTrek } from "./sherpani-col";
import { sheyPhoksundoTrek } from "./shey-phoksundo";
import { tashiLapchaTrek } from "./tashi-lapcha";
import { teriLaTrek } from "./teri-la";
import { tilmanPassTrek } from "./tilman-pass";
import { tshoRolpaTrek } from "./tsho-rolpa";

/**
 * Every trek defined here is created by scripts/create-new-treks.mts. A slug
 * that already exists in the database is skipped, so the list can be re-run
 * safely and new treks appended to it over time.
 */
export const ALL_NEW_TREKS: NewTrek[] = [
  apiHimalTrek,
  badimalikaTrek,
  churenHimalTrek,
  dhaulagiriCircuitTrek,
  ebcHelicopterReturnTrek,
  ebcGokyoChoLaTrek,
  narPhuValleyTrek,
  pikeyPeakTrek,
  raraLakeTrek,
  guerrillaTrek,
  jomsomDolpoTrek,
  larkePassTrek,
  lowerManasluTrek,
  panchPokhariTrek,
  ramaroshanTrek,
  redPandaTrailTrek,
  rupinaLaTrek,
  saribungPassTrek,
  serangGompaTrek,
  sherpaniColTrek,
  sheyPhoksundoTrek,
  tashiLapchaTrek,
  teriLaTrek,
  tilmanPassTrek,
  tshoRolpaTrek,
];
