import type { Tour } from "./types";
import { packageTours } from "./packages";
import { adventureTours } from "./adventure";
import { kathmanduDayTours } from "./day-tours-kathmandu";
import { pokharaDayTours } from "./day-tours-pokhara";
import { helicopterTours } from "./helicopter";
import { pilgrimageTours } from "./pilgrimage";
import { villageTours } from "./village";
import { wildlifeTours } from "./wildlife";

/**
 * Every tour, in region order. A slug already in the database is skipped by
 * scripts/create-tours.mts, so this list can grow and be re-run safely.
 */
export const ALL_TOURS: Tour[] = [
  ...packageTours,
  ...wildlifeTours,
  ...helicopterTours,
  ...villageTours,
  ...pilgrimageTours,
  ...adventureTours,
  ...kathmanduDayTours,
  ...pokharaDayTours,
];
