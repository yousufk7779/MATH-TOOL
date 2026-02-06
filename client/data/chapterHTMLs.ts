
export interface HTMLChapterContent {
    overview: any;
    examples: any;
    mcqs: any;
    exercises: {
        id: string;
        name: string;
        file: any;
    }[];
}

export const ChapterHTMLs: Record<string, HTMLChapterContent> = {
    "ch5-arithmetic-progressions": {
        overview: require('../assets/Chapter - 5/Overview_Chapter_5.html'),
        examples: require('../assets/Chapter - 5/Chapter_5_Examples.html'),
        mcqs: require('../assets/Chapter - 5/MCQs_Chapter_5.html'),
        exercises: [
            { id: "ex5.1", name: "Exercise 5.1", file: require('../assets/Chapter - 5/Exercise_5.1_Sol.html') },
            { id: "ex5.2", name: "Exercise 5.2", file: require('../assets/Chapter - 5/Exercise_5.2_Sol.html') },
            { id: "ex5.3", name: "Exercise 5.3", file: require('../assets/Chapter - 5/Exercise_5.3_Sol.html') },
        ]
    },
};
