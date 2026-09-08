import type { Tour } from "../tours/types";
import { airAndAdrenalineActivities } from "./air-and-adrenaline";
import { birdWatchingActivities } from "./bird-watching";
import { jungleSafariActivities } from "./jungle-safari";
import { shortRaftingTrips } from "./rafting-short";

/**
 * Every activity, in region order. A slug already in the database is skipped by
 * scripts/create-activities.mts, so this list can grow and be re-run safely.
 *
 * Activities reuse the `Tour` shape: structurally an activity page is a short
 * tour, and a parallel type would have been the same fields under another name.
 */
export const ALL_ACTIVITIES: Tour[] = [
  ...shortRaftingTrips,
  ...airAndAdrenalineActivities,
  ...jungleSafariActivities,
  ...birdWatchingActivities,
];
