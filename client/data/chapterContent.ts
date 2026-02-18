
export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }

export const chapterContents: Record<string, ChapterContent> = {};

export function getChapterContent(id: string): ChapterContent | undefined {
  return chapterContents[id];
}
