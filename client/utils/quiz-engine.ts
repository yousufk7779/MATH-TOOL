import easyMathsMcqs from "../data/easy_mcqs_maths.json";
import easyScienceMcqs from "../data/easy_mcqs_science.json";
import easyScienceC9Mcqs from "../data/easy_mcqs_science_c9.json";
import easyScienceC7Mcqs from "../data/easy_mcqs_science_c7.json";

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    chapterId: string;
    chapterTitle: string;
    subject?: string;
}

const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const generateQuizAsync = async (questionCount: number = 10, subject: string = "Mathematics", className: string = "Class 10"): Promise<QuizQuestion[]> => {
    if (className === "Class 7") {
        if (subject === "Science") {
            const scienceMcqs = easyScienceC7Mcqs as QuizQuestion[];
            return shuffleArray(scienceMcqs).slice(0, questionCount);
        }
        return [];
    }

    if (className === "Class 9") {
        if (subject === "Science") {
            const scienceMcqs = easyScienceC9Mcqs as QuizQuestion[];
            const physics = scienceMcqs.filter(q => q.subject === "physics");
            const chemistry = scienceMcqs.filter(q => q.subject === "chemistry");
            const life = scienceMcqs.filter(q => q.subject === "life");

            // Pick 3 from each category (total 9) to ensure balance in C9
            const p3 = shuffleArray(physics).slice(0, 3);
            const c3 = shuffleArray(chemistry).slice(0, 3);
            const l3 = shuffleArray(life).slice(0, 3);

            const selectedIds = new Set([...p3, ...c3, ...l3].map(q => q.id));
            const remaining = scienceMcqs.filter(q => !selectedIds.has(q.id));
            
            // Pick remaining 1 randomly to make it 10
            const r1 = shuffleArray(remaining).slice(0, questionCount - selectedIds.size);
            
            const finalSet = [...p3, ...c3, ...l3, ...r1];
            return shuffleArray(finalSet);
        }
        // Fallback for Maths C9 if ever needed
        return [];
    }

    if (subject === "Mathematics") {
        return shuffleArray(easyMathsMcqs as QuizQuestion[]).slice(0, questionCount);
    }

    if (subject === "Science") {
        const scienceMcqs = easyScienceMcqs as QuizQuestion[];
        const physics = scienceMcqs.filter(q => q.subject === "physics");
        const chemistry = scienceMcqs.filter(q => q.subject === "chemistry");
        const life = scienceMcqs.filter(q => q.subject === "life");

        // Pick 2 from each category
        const p2 = shuffleArray(physics).slice(0, 2);
        const c2 = shuffleArray(chemistry).slice(0, 2);
        const l2 = shuffleArray(life).slice(0, 2);

        const selectedIds = new Set([...p2, ...c2, ...l2].map(q => q.id));
        const remaining = scienceMcqs.filter(q => !selectedIds.has(q.id));
        
        // Pick remaining 4 randomly
        const r4 = shuffleArray(remaining).slice(0, questionCount - selectedIds.size);
        
        const finalSet = [...p2, ...c2, ...l2, ...r4];
        return shuffleArray(finalSet);
    }

    return [];
};

export const generateQuiz = (questionCount: number = 10): QuizQuestion[] => {
    return [];
};

