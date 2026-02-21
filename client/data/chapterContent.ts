import { ChapterHTMLs } from "./chapterHTMLs";

export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }

import { sciPhy1 } from "./content/sci-phy-1";
import { sciPhy2 } from "./content/sci-phy-2";
import { sciPhy3 } from "./content/sci-phy-3";
import { sciPhy4 } from "./content/sci-phy-4";
import { sciChem1 } from "./content/sci-chem-1";
import { sciChem2 } from "./content/sci-chem-2";
import { sciChem3 } from "./content/sci-chem-3";
import { sciChem4 } from "./content/sci-chem-4";
import { sciBio1 } from "./content/sci-bio-1";
import { sciBio2 } from "./content/sci-bio-2";
import { sciBio3 } from "./content/sci-bio-3";
import { sciBio4 } from "./content/sci-bio-4";
import { sciBio5 } from "./content/sci-bio-5";
import { sstHis1 } from "./content/sst-his-1";
import { sstHis2 } from "./content/sst-his-2";
import { sstHis3 } from "./content/sst-his-3";
import { sstHis4 } from "./content/sst-his-4";
import { sstHis5 } from "./content/sst-his-5";
import { sstGeo1 } from "./content/sst-geo-1";
import { sstGeo2 } from "./content/sst-geo-2";
import { sstGeo3 } from "./content/sst-geo-3";
import { sstGeo4 } from "./content/sst-geo-4";
import { sstGeo5 } from "./content/sst-geo-5";
import { sstGeo6 } from "./content/sst-geo-6";
import { sstGeo7 } from "./content/sst-geo-7";
import { sstCiv1 } from "./content/sst-civ-1";
import { sstCiv2 } from "./content/sst-civ-2";
import { sstCiv3 } from "./content/sst-civ-3";
import { sstCiv4 } from "./content/sst-civ-4";
import { sstCiv5 } from "./content/sst-civ-5";
import { sstEco1 } from "./content/sst-eco-1";
import { sstEco2 } from "./content/sst-eco-2";
import { sstEco3 } from "./content/sst-eco-3";
import { sstEco4 } from "./content/sst-eco-4";
import { sstEco5 } from "./content/sst-eco-5";

export const chapterContents: Record<string, ChapterContent> = {
  "sci-phy-1": sciPhy1,
  "sci-phy-2": sciPhy2,
  "sci-phy-3": sciPhy3,
  "sci-phy-4": sciPhy4,
  "sci-chem-1": sciChem1,
  "sci-chem-2": sciChem2,
  "sci-chem-3": sciChem3,
  "sci-chem-4": sciChem4,
  "sci-bio-1": sciBio1,
  "sci-bio-2": sciBio2,
  "sci-bio-3": sciBio3,
  "sci-bio-4": sciBio4,
  "sci-bio-5": sciBio5,
  "sst-his-1": sstHis1,
  "sst-his-2": sstHis2,
  "sst-his-3": sstHis3,
  "sst-his-4": sstHis4,
  "sst-his-5": sstHis5,
  "sst-geo-1": sstGeo1,
  "sst-geo-2": sstGeo2,
  "sst-geo-3": sstGeo3,
  "sst-geo-4": sstGeo4,
  "sst-geo-5": sstGeo5,
  "sst-geo-6": sstGeo6,
  "sst-geo-7": sstGeo7,
  "sst-civ-1": sstCiv1,
  "sst-civ-2": sstCiv2,
  "sst-civ-3": sstCiv3,
  "sst-civ-4": sstCiv4,
  "sst-civ-5": sstCiv5,
  "sst-eco-1": sstEco1,
  "sst-eco-2": sstEco2,
  "sst-eco-3": sstEco3,
  "sst-eco-4": sstEco4,
  "sst-eco-5": sstEco5,
};

export const isChapterAvailable = (chapterId: string): boolean => {
  return !!chapterContents[chapterId];
};

export const getChapterContent = (chapterId: string): ChapterContent | undefined => {
  return chapterContents[chapterId];
};
