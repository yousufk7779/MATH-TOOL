import { chapterContents, ChapterContent } from "@/data/chapterContent";
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
        };
    };
    score?: number;
}

let searchIndex: SearchResult[] = [];

export const buildSearchIndex = () => {
    if (searchIndex.length > 0) return;

    Object.values(chapterContents).forEach((chapter) => {
        // 1. Index Chapter
        searchIndex.push({
            id: chapter.id,
            type: "chapter",
            title: `Chapter ${chapter.number}: ${chapter.title}`,
            subtitle: chapter.introduction.substring(0, 60) + "...",
            keywords: `${chapter.title} chapter ${chapter.number} introduction`,
            navigationParams: {
                screen: "Solution",
                params: { chapterId: chapter.id, chapterName: chapter.title, section: "overview" },
            },
        });

        // 2. Index Formulas
        chapter.formulas.forEach((formula, idx) => {
            searchIndex.push({
                id: `${chapter.id}-formula-${idx}`,
                type: "formula",
                title: formula.name,
                subtitle: `Formula in ${chapter.title}`,
                keywords: `${formula.name} formula equation ${chapter.title}`,
                navigationParams: {
                    screen: "Solution",
                    params: { chapterId: chapter.id, chapterName: chapter.title, section: "overview" },
                }
            })
        });

        // 3. Index Definitions
        chapter.definitions.forEach((def, idx) => {
            searchIndex.push({
                id: `${chapter.id}-def-${idx}`,
                type: "definition",
                title: def.term,
                subtitle: def.description.substring(0, 60),
                keywords: `${def.term} definition meaning ${chapter.title}`,
                navigationParams: {
                    screen: "Solution",
                    params: { chapterId: chapter.id, chapterName: chapter.title, section: "overview" },
                }
            })
        });


        // 4. Index Exercises
        chapter.exercises.forEach((exercise) => {
            searchIndex.push({
                id: exercise.id,
                type: "exercise",
                title: exercise.name,
                subtitle: `Practice questions from ${chapter.title}`,
                keywords: `${exercise.name} questions practice ${chapter.title}`,
                navigationParams: {
                    screen: "Solution",
                    params: {
                        chapterId: chapter.id,
                        chapterName: chapter.title,
                        section: "exercises",
                        exerciseId: exercise.id
                    },
                },
            });

            // 5. Index Questions
            exercise.questions.forEach((question) => {
                searchIndex.push({
                    id: question.id,
                    type: "question",
                    title: `${exercise.name} - ${question.number}`,
                    subtitle: question.question.substring(0, 60) + "...",
                    keywords: `${question.number} ${exercise.name} question ${question.question} ${chapter.title}`,
                    navigationParams: {
                        screen: "Solution",
                        params: {
                            chapterId: chapter.id,
                            chapterName: chapter.title,
                            section: "exercises",
                            exerciseId: exercise.id,
                            questionId: question.id
                        },
                    },
                });
            });
        });

        // 6. Index Examples (NEW)
        chapter.examples?.forEach((example) => {
            searchIndex.push({
                id: example.id,
                type: "question", // Treating like question but navigating to examples view
                title: `Example ${example.number}: ${chapter.title}`,
                subtitle: example.question.substring(0, 60) + "...",
                keywords: `${example.number} example ${chapter.title} ${example.question}`,
                navigationParams: {
                    screen: "Solution",
                    params: {
                        chapterId: chapter.id,
                        chapterName: chapter.title,
                        section: "exercises",
                        // @ts-ignore
                        view: "examples",
                        questionId: example.id
                    }
                }
            });
        });

        // 7. Index Theorems
        if (chapter.theorems) {
            chapter.theorems.forEach(theorem => {
                searchIndex.push({
                    id: theorem.id,
                    type: "theorem",
                    title: `${theorem.number}: ${theorem.name}`,
                    subtitle: theorem.statement.substring(0, 60),
                    keywords: `${theorem.number} ${theorem.name} theorem proof ${chapter.title}`,
                    navigationParams: {
                        screen: "Solution",
                        params: {
                            chapterId: chapter.id,
                            chapterName: chapter.title,
                            section: "exercises",
                            // @ts-ignore
                            view: "theorems",
                            questionId: theorem.id
                        }
                    }
                })
            })
        }
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
