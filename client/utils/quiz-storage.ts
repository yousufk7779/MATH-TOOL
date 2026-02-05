import AsyncStorage from '@react-native-async-storage/async-storage';

export interface QuizResult {
    id: string;
    score: number;
    totalQuestions: number;
    percentage: number;
    date: number; // Timestamp
}

const QUIZ_HISTORY_KEY = '@jiguu_quiz_history';

export const getQuizHistory = async (): Promise<QuizResult[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(QUIZ_HISTORY_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Failed to fetch quiz history', e);
        return [];
    }
};

export const saveQuizResult = async (score: number, totalQuestions: number): Promise<QuizResult> => {
    try {
        const history = await getQuizHistory();

        const newResult: QuizResult = {
            id: Date.now().toString(),
            score,
            totalQuestions,
            percentage: Math.round((score / totalQuestions) * 100),
            date: Date.now(),
        };

        // Add to top of list
        const newHistory = [newResult, ...history];

        // Optional: Limit history size (e.g., last 50 attempts)
        if (newHistory.length > 50) {
            newHistory.length = 50;
        }

        await AsyncStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(newHistory));
        return newResult;
    } catch (e) {
        console.error('Failed to save quiz result', e);
        throw e;
    }
};
