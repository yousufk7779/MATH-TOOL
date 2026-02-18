
import { chapterContents, MCQ } from "@/data/chapterContent";
import { class10Chapters } from "@/data/chapters";

export interface QuizQuestion extends MCQ {
    chapterId: string;
    chapterTitle: string;
}

export const generateQuizAsync = async (questionCount: number = 10): Promise<QuizQuestion[]> => {
    // Synchronous generation is fine now that data is in memory
    return generateQuiz(questionCount);
};

export const generateQuiz = (questionCount: number = 10): QuizQuestion[] => {
    const allMcqs: QuizQuestion[] = [];

    // Iterate over all available chapters in the content store
    Object.values(chapterContents).forEach((chapter) => {
        if (chapter.mcqs && chapter.mcqs.length > 0) {
            chapter.mcqs.forEach((mcq) => {
                allMcqs.push({
                    ...mcq,
                    chapterId: chapter.id,
                    chapterTitle: chapter.title,
                });
            });
        }
    });

    // Shuffle array using Fisher-Yates algorithm
    for (let i = allMcqs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allMcqs[i], allMcqs[j]] = [allMcqs[j], allMcqs[i]];
    }

    // Return requested number of questions
    return allMcqs.slice(0, questionCount);
};
