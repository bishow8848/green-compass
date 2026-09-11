import type { BlogContent } from "./build";
import { planningA } from "./planning-a";
import { planningB } from "./planning-b";
import { planningC } from "./planning-c";
import { planningD } from "./planning-d";
import { planningE } from "./planning-e";
import { planningF } from "./planning-f";
import { planningG } from "./planning-g";
import { everestA } from "./everest-a";
import { everestB } from "./everest-b";
import { everestC } from "./everest-c";
import { everestD } from "./everest-d";
import { everestE } from "./everest-e";
import { annapurnaA } from "./annapurna-a";
import { annapurnaB } from "./annapurna-b";
import { annapurnaC } from "./annapurna-c";
import { annapurnaD } from "./annapurna-d";
import { annapurnaE } from "./annapurna-e";
import { langtangA } from "./langtang-a";
import { langtangB } from "./langtang-b";
import { langtangC } from "./langtang-c";
import { manasluA } from "./manaslu-a";
import { manasluB } from "./manaslu-b";
import { manasluC } from "./manaslu-c";
import { eastA } from "./east-a";
import { eastB } from "./east-b";
import { eastC } from "./east-c";
import { climbingA } from "./climbing-a";
import { climbingB } from "./climbing-b";
import { climbingC } from "./climbing-c";
import { climbingD } from "./climbing-d";
import { toursA } from "./tours-a";
import { toursB } from "./tours-b";
import { toursC } from "./tours-c";
import { toursD } from "./tours-d";
import { activitiesA } from "./activities-a";
import { activitiesB } from "./activities-b";
import { activitiesC } from "./activities-c";

/** Every article on the site, in no particular order — `date` drives ordering. */
export const ALL_POSTS: BlogContent[] = [
  ...planningA,
  ...planningB,
  ...planningC,
  ...planningD,
  ...planningE,
  ...planningF,
  ...planningG,
  ...everestA,
  ...everestB,
  ...everestC,
  ...everestD,
  ...everestE,
  ...annapurnaA,
  ...annapurnaB,
  ...annapurnaC,
  ...annapurnaD,
  ...annapurnaE,
  ...langtangA,
  ...langtangB,
  ...langtangC,
  ...manasluA,
  ...manasluB,
  ...manasluC,
  ...eastA,
  ...eastB,
  ...eastC,
  ...climbingA,
  ...climbingB,
  ...climbingC,
  ...climbingD,
  ...toursA,
  ...toursB,
  ...toursC,
  ...toursD,
  ...activitiesA,
  ...activitiesB,
  ...activitiesC,
];
