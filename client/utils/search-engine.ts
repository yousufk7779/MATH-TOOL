
import { chapterContents } from "@/data/chapterContent";
import { class10Chapters } from "@/data/chapters";
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

    // Index basic chapter info from chapters.ts (metadata)
    class10Chapters.forEach((chapter) => {
        searchIndex.push({
            id: chapter.id,
            type: "chapter",
            title: `${chapter.number}. ${chapter.name}`,
            subtitle: "Browse chapter content",
            keywords: `${chapter.name} chapter content`,
            navigationParams: {
                screen: "Solution",
                params: { chapterId: chapter.id, chapterName: chapter.name, section: "overview" },
            },
        });
    });

    // dynamic content from chapterContent.ts
    Object.values(chapterContents).forEach((chapter) => {
        // 4. Index Exercises and other sections
        if (chapter.exercises) {
            chapter.exercises.forEach((exercise) => {
                searchIndex.push({
                    id: `${chapter.id}-${exercise.id}`,
                    type: "exercise",
                    title: exercise.name,
                    subtitle: `${chapter.title} - ${exercise.name}`,
                    keywords: `${exercise.name} ${chapter.title}`,
                    navigationParams: {
                        screen: "Solution",
                        params: {
                            chapterId: chapter.id,
                            chapterName: chapter.title,
                            section: "exercises",
                            exerciseId: exercise.id,
                        },
                    },
                });
            });
        }

        // Can index other sections similarly (Examples, Theorems, etc.)
    });

    // 8. Index PYQs (Still works because pyqData handles its own data)
    Object.values(chapterPYQs).forEach((chapterPYQ) => {
        const chapter = class10Chapters.find(c => c.id === chapterPYQ.chapterId);
        if (!chapter) return; // Should optimize by using chapterContents, but PYQ has incomplete coverage maybe?

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
