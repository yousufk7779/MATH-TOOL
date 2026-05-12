
export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number?: string; name?: string; question?: string; questions?: string; solution: string[]; answer?: string; image?: string; shortBoardPattern?: boolean; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; answer?: string; explanation?: string; }
export interface Example { id: string; number: string; name?: string; question?: string; questions?: string; solution: string[]; answer?: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions?: Definition[]; keyPoints?: string[]; formulas?: Formula[]; crux?: string[]; exercises: Exercise[]; examples?: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary?: string[]; isHtmlView?: boolean; htmlOverview?: string; htmlExercises?: Record<string, string>; htmlMcqs?: string; }
