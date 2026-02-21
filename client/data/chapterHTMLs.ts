
export interface HTMLChapterContent {
    overview: any;
    examples: any;
    mcqs?: any;
    theorems?: any;
    exercises: {
        id: string;
        name: string;
        file: any;
    }[];
}

export const ChapterHTMLs: Record<string, HTMLChapterContent> = {};
