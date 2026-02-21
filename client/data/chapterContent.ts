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
import { sciChem1 } from "./content/sci-chem-1";
import { sciBio1 } from "./content/sci-bio-1";

export const chapterContents: Record<string, ChapterContent> = {
  "sci-phy-1": sciPhy1,
  "sci-phy-2": sciPhy2,
  "sci-chem-1": sciChem1,
  "sci-bio-1": sciBio1,
};

export const isChapterAvailable = (chapterId: string): boolean => {
  return !!chapterContents[chapterId];
};

export const getChapterContent = (chapterId: string): ChapterContent | undefined => {
  return chapterContents[chapterId];
};
