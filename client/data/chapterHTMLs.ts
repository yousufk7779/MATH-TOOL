
export interface HTMLChapterContent {
    overview: any;
    examples: any;
    mcqs?: any; // Marked optional as not all chapters might have it or user didn't strict-list it, but I see files for it.
    theorems?: any; // For Ch6 and others if any
    exercises: {
        id: string;
        name: string;
        file: any;
    }[];
}

export const ChapterHTMLs: Record<string, HTMLChapterContent> = {
    "ch1-real-numbers": {
        overview: require('../assets/chapter1/overview.html'),
        examples: require('../assets/chapter1/examples.html'),
        mcqs: require('../assets/chapter1/mcqs.html'),
        exercises: [
            { id: "ex1.1", name: "Exercise 1.1", file: require('../assets/chapter1/exercise1.html') },
            { id: "ex1.2", name: "Exercise 1.2", file: require('../assets/chapter1/exercise2.html') }
        ]
    },
    "ch2-polynomials": {
        overview: require('../assets/chapter2/overview.html'),
        examples: require('../assets/chapter2/examples.html'),
        mcqs: require('../assets/chapter2/mcqs.html'),
        exercises: [
            { id: "ex2.1", name: "Exercise 2.1", file: require('../assets/chapter2/exercise1.html') },
            { id: "ex2.2", name: "Exercise 2.2", file: require('../assets/chapter2/exercise2.html') }
        ]
    },
    "ch3-linear-equations": {
        overview: require('../assets/chapter3/overview.html'),
        examples: require('../assets/chapter3/examples.html'),
        mcqs: require('../assets/chapter3/mcqs.html'),
        exercises: [
            { id: "ex3.1", name: "Exercise 3.1", file: require('../assets/chapter3/exercise1.html') },
            { id: "ex3.2", name: "Exercise 3.2", file: require('../assets/chapter3/exercise2.html') },
            { id: "ex3.3", name: "Exercise 3.3", file: require('../assets/chapter3/exercise3.html') }
        ]
    },
    "ch4-quadratic-equations": {
        overview: require('../assets/chapter4/overview.html'),
        examples: require('../assets/chapter4/examples.html'),
        mcqs: require('../assets/chapter4/mcqs.html'),
        exercises: [
            { id: "ex4.1", name: "Exercise 4.1", file: require('../assets/chapter4/exercise1.html') },
            { id: "ex4.2", name: "Exercise 4.2", file: require('../assets/chapter4/exercise2.html') },
            { id: "ex4.3", name: "Exercise 4.3", file: require('../assets/chapter4/exercise3.html') }
        ]
    },
    "ch5-arithmetic-progressions": {
        overview: require('../assets/chapter5/overview.html'),
        examples: require('../assets/chapter5/examples.html'),
        mcqs: require('../assets/chapter5/mcqs.html'),
        exercises: [
            { id: "ex5.1", name: "Exercise 5.1", file: require('../assets/chapter5/exercise1.html') },
            { id: "ex5.2", name: "Exercise 5.2", file: require('../assets/chapter5/exercise2.html') },
            { id: "ex5.3", name: "Exercise 5.3", file: require('../assets/chapter5/exercise3.html') }
        ]
    },
    "ch6-triangles": {
        overview: require('../assets/chapter6/overview.html'),
        examples: require('../assets/chapter6/examples.html'),
        mcqs: require('../assets/chapter6/mcqs.html'),
        theorems: require('../assets/chapter6/theorems.html'),
        exercises: [
            { id: "ex6.1", name: "Exercise 6.1", file: require('../assets/chapter6/exercise1.html') },
            { id: "ex6.2", name: "Exercise 6.2", file: require('../assets/chapter6/exercise2.html') },
            { id: "ex6.3", name: "Exercise 6.3", file: require('../assets/chapter6/exercise3.html') }
        ]
    },
    "ch7-coordinate-geometry": {
        overview: require('../assets/chapter7/overview.html'),
        examples: require('../assets/chapter7/examples.html'),
        mcqs: require('../assets/chapter7/mcqs.html'),
        exercises: [
            { id: "ex7.1", name: "Exercise 7.1", file: require('../assets/chapter7/exercise1.html') },
            { id: "ex7.2", name: "Exercise 7.2", file: require('../assets/chapter7/exercise2.html') }
        ]
    },
    "ch8-trigonometry": {
        overview: require('../assets/chapter8/overview.html'),
        examples: require('../assets/chapter8/examples.html'),
        mcqs: require('../assets/chapter8/mcqs.html'),
        exercises: [
            { id: "ex8.1", name: "Exercise 8.1", file: require('../assets/chapter8/exercise1.html') },
            { id: "ex8.2", name: "Exercise 8.2", file: require('../assets/chapter8/exercise2.html') },
            { id: "ex8.3", name: "Exercise 8.3", file: require('../assets/chapter8/exercise3.html') }
        ]
    },
    "ch9-applications-trigonometry": {
        overview: require('../assets/chapter9/overview.html'),
        examples: require('../assets/chapter9/examples.html'),
        mcqs: require('../assets/chapter9/mcqs.html'),
        exercises: [
            { id: "ex9.1", name: "Exercise 9.1", file: require('../assets/chapter9/exercise1.html') }
        ]
    },
    "ch10-circles": {
        overview: require('../assets/chapter10/overview.html'),
        examples: require('../assets/chapter10/examples.html'),
        mcqs: require('../assets/chapter10/mcqs.html'),
        exercises: [
            { id: "ex10.1", name: "Exercise 10.1", file: require('../assets/chapter10/exercise1.html') },
            { id: "ex10.2", name: "Exercise 10.2", file: require('../assets/chapter10/exercise2.html') }
        ]
    },
};
