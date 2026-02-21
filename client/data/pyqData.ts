import { Question } from "./chapterContent";

export interface PYQSet {
    year: string; // "2023", "2022 TS", "2021 AP"
    questions: Question[];
}

export interface ChapterPYQ {
    chapterId: string;
    sets: PYQSet[];
}

export const chapterPYQs: Record<string, ChapterPYQ> = {};

export const getChapterPYQs = (chapterId: string): PYQSet[] => {
    return chapterPYQs[chapterId]?.sets || [];
};

export const getAllPYQYears = (): string[] => {
    const years = new Set<string>();
    Object.values(chapterPYQs).forEach(chapter => {
        chapter.sets.forEach(set => years.add(set.year));
    });
    // Sort descending (2023, 2022...)
    return Array.from(years).sort().reverse();
};

export interface AggregatedQuestion {
    chapterId: string;
    question: Question;
}

export const getQuestionsForYear = (year: string, chapterIdFilter?: string): AggregatedQuestion[] => {
    const results: AggregatedQuestion[] = [];

    Object.values(chapterPYQs).forEach(chapter => {
        if (chapterIdFilter && chapter.chapterId !== chapterIdFilter) return;

        const set = chapter.sets.find(s => s.year === year);
        if (set) {
            set.questions.forEach(q => {
                results.push({
                    chapterId: chapter.chapterId,
                    question: q
                });
            });
        }
    });

    return results;
};
