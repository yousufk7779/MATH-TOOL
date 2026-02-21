
export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    chapterId: string;
    chapterTitle: string;
}

export const generateQuizAsync = async (questionCount: number = 10): Promise<QuizQuestion[]> => {
    return [];
};

export const generateQuiz = (questionCount: number = 10): QuizQuestion[] => {
    return [];
};
