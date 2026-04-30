import { ChapterHTMLs } from "./chapterHTMLs";

export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; isHtmlView?: boolean; htmlOverview?: string; htmlExercises?: Record<string, string>; htmlMcqs?: string; }

import { mathCh1 } from "./content/math-ch1";
import { mathCh2 } from "./content/math-ch2";
import { mathCh3 } from "./content/math-ch3";
import { mathCh4 } from "./content/math-ch4";
import { mathCh5 } from "./content/math-ch5";
import { mathCh6 } from "./content/math-ch6";
import { mathCh7 } from "./content/math-ch7";
import { mathCh8 } from "./content/math-ch8";
import { mathCh9 } from "./content/math-ch9";
import { mathCh10 } from "./content/math-ch10";
import { mathCh11 } from "./content/math-ch11";
import { mathCh12 } from "./content/math-ch12";
import { mathCh13 } from "./content/math-ch13";
import { mathCh14 } from "./content/math-ch14";
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
import { engPro1 } from "./content/eng-pro-1";
import { engPro2 } from "./content/eng-pro-2";
import { engPro3 } from "./content/eng-pro-3";
import { engPro4 } from "./content/eng-pro-4";
import { engPro5 } from "./content/eng-pro-5";
import { engPro6 } from "./content/eng-pro-6";
import { engPoe1 } from "./content/eng-poe-1";
import { engPoe2 } from "./content/eng-poe-2";
import { engPoe3 } from "./content/eng-poe-3";
import { engPoe4 } from "./content/eng-poe-4";
import { engPoe5 } from "./content/eng-poe-5";
import { engPoe6 } from "./content/eng-poe-6";
import { engSto1 } from "./content/eng-sto-1";
import { engSto2 } from "./content/eng-sto-2";
import { engSto3 } from "./content/eng-sto-3";
import { engSto4 } from "./content/eng-sto-4";
import { engSto5 } from "./content/eng-sto-5";
import { engSto6 } from "./content/eng-sto-6";
import { engGra1 } from "./content/eng-gra-1";
import { engGra2 } from "./content/eng-gra-2";
import { engGra3 } from "./content/eng-gra-3";
import { engGra4 } from "./content/eng-gra-4";
import { engGra5 } from "./content/eng-gra-5";
import { c9SciPhy1 } from "./content/c9-sci-phy-1";
import { c9SciPhy2 } from "./content/c9-sci-phy-2";
import { c9SciPhy3 } from "./content/c9-sci-phy-3";
import { c9SciPhy4 } from "./content/c9-sci-phy-4";
import { c9SciPhy5 } from "./content/c9-sci-phy-5";
import { c9SciPhy6 } from "./content/c9-sci-phy-6";
import { c9SciChem1 } from "./content/c9-sci-chem-1";
import { c9SciChem2 } from "./content/c9-sci-chem-2";
import { c9SciChem3 } from "./content/c9-sci-chem-3";
import { c9SciChem4 } from "./content/c9-sci-chem-4";
import { c9SciBio1 } from "./content/c9-sci-bio-1";
import { c9SciBio2 } from "./content/c9-sci-bio-2";
import { c9SciBio3 } from "./content/c9-sci-bio-3";
import { c9SciBio4 } from "./content/c9-sci-bio-4";
import { c7Sci1 } from "./content/c7-sci-1";

export const chapterContents: Record<string, ChapterContent> = {
  "ch1": mathCh1,
  "ch2": mathCh2,
  "ch3": mathCh3,
  "ch4": mathCh4,
  "ch5": mathCh5,
  "ch6": mathCh6,
  "ch7": mathCh7,
  "ch8": mathCh8,
  "ch9": mathCh9,
  "ch10": mathCh10,
  "ch11": mathCh11,
  "ch12": mathCh12,
  "ch13": mathCh13,
  "ch14": mathCh14,
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
  "eng-pro-1": engPro1,
  "eng-pro-2": engPro2,
  "eng-pro-3": engPro3,
  "eng-pro-4": engPro4,
  "eng-pro-5": engPro5,
  "eng-pro-6": engPro6,
  "eng-poe-1": engPoe1,
  "eng-poe-2": engPoe2,
  "eng-poe-3": engPoe3,
  "eng-poe-4": engPoe4,
  "eng-poe-5": engPoe5,
  "eng-poe-6": engPoe6,
  "eng-sto-1": engSto1,
  "eng-sto-2": engSto2,
  "eng-sto-3": engSto3,
  "eng-sto-4": engSto4,
  "eng-sto-5": engSto5,
  "eng-sto-6": engSto6,
  "eng-gra-1": engGra1,
  "eng-gra-2": engGra2,
  "eng-gra-3": engGra3,
  "eng-gra-4": engGra4,
  "eng-gra-5": engGra5,
  "c9-sci-phy-1": c9SciPhy1,
  "c9-sci-phy-2": c9SciPhy2,
  "c9-sci-phy-3": c9SciPhy3,
  "c9-sci-phy-4": c9SciPhy4,
  "c9-sci-phy-5": c9SciPhy5,
  "c9-sci-phy-6": c9SciPhy6,
  "c9-sci-chem-1": c9SciChem1,
  "c9-sci-chem-2": c9SciChem2,
  "c9-sci-chem-3": c9SciChem3,
  "c9-sci-chem-4": c9SciChem4,
  "c9-sci-bio-1": c9SciBio1,
  "c9-sci-bio-2": c9SciBio2,
  "c9-sci-bio-3": c9SciBio3,
  "c9-sci-bio-4": c9SciBio4,
  "c7-sci-1": c7Sci1,
};

const createEmptyContent = (id: string, num: number, title: string): ChapterContent => ({
  id,
  number: num,
  title,
  introduction: "",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [],
  examples: [],
  mcqs: [],
  summary: []
});

const emptyChapters: string[] = [];
[9, 8, 7].forEach(c => {
  for (let i = 1; i <= 14; i++) {
    emptyChapters.push(`c${c}-math-${i}`);
  }
  for (let i = 1; i <= 3; i++) {
    emptyChapters.push(`c${c}-sci-phy-${i}`);
    emptyChapters.push(`c${c}-sci-chem-${i}`);
    emptyChapters.push(`c${c}-sci-bio-${i}`);
  }
});

emptyChapters.forEach(id => {
  if (!chapterContents[id]) {
    const num = parseInt(id.split("-").pop() || "1");
    chapterContents[id] = createEmptyContent(id, num, `Chapter ${num}`);
  }
});


export const isChapterAvailable = (chapterId: string): boolean => {
  return !!chapterContents[chapterId];
};

export const getChapterContent = (chapterId: string): ChapterContent | undefined => {
  return chapterContents[chapterId];
};
