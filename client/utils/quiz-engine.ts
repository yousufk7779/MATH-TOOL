
import { chapterList } from "@/data/chapterRegistry";
import { ContentService, MCQ } from "@/services/ContentService";

export interface QuizQuestion extends MCQ {
    chapterId: string;
    chapterTitle: string;
}

export const generateQuizAsync = async (questionCount: number = 10): Promise<QuizQuestion[]> => {
    const allMcqs: QuizQuestion[] = [];

    // Strategy: Load MCQs from ALL chapters. It should be fast enough.
    // Use Promise.all

    const chapters = chapterList;

    await Promise.all(chapters.map(async (chapter) => {
        try {
            const mcqs = await ContentService.getMCQs(chapter.id);
            if (mcqs && mcqs.length > 0) {
                mcqs.forEach(m => {
                    allMcqs.push({
                        ...m,
                        chapterId: chapter.id,
                        chapterTitle: chapter.name
                    });
                });
            }
        } catch (e) {
            console.warn(`Failed to load MCQs for ${chapter.id}`);
        }
    }));

    // Shuffle array using Fisher-Yates algorithm
    for (let i = allMcqs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allMcqs[i], allMcqs[j]] = [allMcqs[j], allMcqs[i]];
    }

    // Return requested number of questions
    return allMcqs.slice(0, questionCount);
};

// Deprecated sync version to prevent build errors if used elsewhere, 
// though we should switch to Async everywhere.
export const generateQuiz = (questionCount: number = 10): QuizQuestion[] => {
    return [];
};
