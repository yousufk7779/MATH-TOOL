
import { chapterList } from "@/data/chapterRegistry";
import { chapterPYQs } from "@/data/pyqData";
import { JiguuColors } from "@/constants/theme";

export type SearchResultType = "chapter" | "exercise" | "question" | "theorem" | "definition" | "formula";

export interface SearchResult {
    id: string;
    type: SearchResultType;
    title: string;
    subtitle: string;
    keywords: string;
    navigationParams: {
        screen: "Solution";
        params: {
            chapterId: string;
            chapterName: string;
            section?: string; // overview, exercises, mcq
            exerciseId?: string;
            questionId?: string;
            view?: string;
        };
    };
    score?: number;
}

let searchIndex: SearchResult[] = [];

export const buildSearchIndex = () => {
    if (searchIndex.length > 0) return;

    chapterList.forEach((chapter) => {
        // 1. Index Chapter
        searchIndex.push({
            id: chapter.id,
            type: "chapter",
            title: chapter.name,
            subtitle: "Browse chapter content",
            keywords: `${chapter.name} chapter content`,
            navigationParams: {
                screen: "Solution",
                params: { chapterId: chapter.id, chapterName: chapter.name, section: "overview" },
            },
        });

        // 4. Index Exercises and other sections
        chapter.exercises.forEach((exercise) => {
            let type: SearchResultType = "exercise";
            let section = "exercises";
            let view = undefined;

            if (exercise.id === 'mcqs') {
                type = "question"; // approximation
                section = "mcqs";
            } else if (exercise.id === 'eg') {
                section = "exercises"; // It's a tab
                // view = "examples"; // Logic in SolutionScreen handles 'eg' as tab
            } else if (exercise.id === 'theorems') {
                type = "theorem";
                section = "exercises";
                // view = "theorems";
            }

            searchIndex.push({
                id: `${chapter.id}-${exercise.id}`,
                type: type,
                title: exercise.title,
                subtitle: `${chapter.name} - ${exercise.title}`,
                keywords: `${exercise.title} ${chapter.name}`,
                navigationParams: {
                    screen: "Solution",
                    params: {
                        chapterId: chapter.id,
                        chapterName: chapter.name,
                        section: section,
                        exerciseId: exercise.id,
                        view: view
                    },
                },
            });
        });
    });

    // 8. Index PYQs (Still works because pyqData handles its own data)
    Object.values(chapterPYQs).forEach((chapterPYQ) => {
        const chapter = chapterList.find(c => c.id === chapterPYQ.chapterId);
        if (!chapter) return;

        chapterPYQ.sets.forEach((set) => {
            set.questions.forEach((question) => {
                searchIndex.push({
                    id: question.id,
                    type: "question",
                    title: `${set.year} - ${question.number}`,
                    subtitle: `PYQ: ${question.question.substring(0, 60)}...`,
                    keywords: `${set.year} ${chapter.name} pyq previous year ${question.question}`,
                    navigationParams: {
                        screen: "Solution",
                        params: {
                            chapterId: chapter.id,
                            chapterName: chapter.name,
                            section: "pyq",
                            // @ts-ignore
                            year: set.year,
                            questionId: question.id
                        }
                    }
                });
            });
        });
    });

    console.log(`[SearchEngine] Indexed ${searchIndex.length} items.`);
};

export const search = (query: string): SearchResult[] => {
    if (!query || query.length < 2) return [];

    const lowerQuery = query.toLowerCase().trim();
    const queryTokens = lowerQuery.split(" ");

    // Prepare index if empty
    if (searchIndex.length === 0) buildSearchIndex();

    return searchIndex
        .map((item) => {
            let score = 0;
            const lowerTitle = item.title.toLowerCase();
            const lowerKeywords = item.keywords.toLowerCase();

            // Exact match bonus
            if (lowerTitle.includes(lowerQuery)) score += 10;
            if (lowerKeywords.includes(lowerQuery)) score += 5;

            // Token match
            queryTokens.forEach(token => {
                if (lowerTitle.includes(token)) score += 3;
                if (lowerKeywords.includes(token)) score += 1;
            });

            return { ...item, score };
        })
        .filter((item) => (item.score || 0) > 0)
        .sort((a, b) => (b.score || 0) - (a.score || 0))
        .slice(0, 10); // Limit to top 10 results
};
