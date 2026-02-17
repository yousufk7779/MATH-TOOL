
export interface ExerciseInfo {
    id: string;
    title: string;
    htmlSource: any; // Result of require()
}

export interface ChapterInfo {
    id: string;
    name: string;
    path: string;
    exercises: ExerciseInfo[];
}

export const chapterList: ChapterInfo[] = [
    {
        id: 'ch1',
        name: 'Chapter 1: Real Numbers',
        path: 'chapter1',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter1/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter1/examples.html') },
            { id: 'ex1.1', title: 'Exercise 1.1', htmlSource: require('../assets/chapter1/exercise1.html') },
            { id: 'ex1.2', title: 'Exercise 1.2', htmlSource: require('../assets/chapter1/exercise2.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter1/mcqs.html') }
        ]
    },
    {
        id: 'ch2',
        name: 'Chapter 2: Polynomials',
        path: 'chapter2',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter2/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter2/examples.html') },
            { id: 'ex2.1', title: 'Exercise 2.1', htmlSource: require('../assets/chapter2/exercise1.html') },
            { id: 'ex2.2', title: 'Exercise 2.2', htmlSource: require('../assets/chapter2/exercise2.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter2/mcqs.html') }
        ]
    },
    {
        id: 'ch3',
        name: 'Chapter 3: Linear Equations',
        path: 'chapter3',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter3/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter3/examples.html') },
            { id: 'ex3.1', title: 'Exercise 3.1', htmlSource: require('../assets/chapter3/exercise1.html') },
            { id: 'ex3.2', title: 'Exercise 3.2', htmlSource: require('../assets/chapter3/exercise2.html') },
            { id: 'ex3.3', title: 'Exercise 3.3', htmlSource: require('../assets/chapter3/exercise3.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter3/mcqs.html') }
        ]
    },
    {
        id: 'ch4',
        name: 'Chapter 4: Quadratic Equations',
        path: 'chapter4',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter4/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter4/examples.html') },
            { id: 'ex4.1', title: 'Exercise 4.1', htmlSource: require('../assets/chapter4/exercise1.html') },
            { id: 'ex4.2', title: 'Exercise 4.2', htmlSource: require('../assets/chapter4/exercise2.html') },
            { id: 'ex4.3', title: 'Exercise 4.3', htmlSource: require('../assets/chapter4/exercise3.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter4/mcqs.html') }
        ]
    },
    {
        id: 'ch5',
        name: 'Chapter 5: Arithmetic Progressions',
        path: 'chapter5',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter5/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter5/examples.html') },
            { id: 'ex5.1', title: 'Exercise 5.1', htmlSource: require('../assets/chapter5/exercise1.html') },
            { id: 'ex5.2', title: 'Exercise 5.2', htmlSource: require('../assets/chapter5/exercise2.html') },
            { id: 'ex5.3', title: 'Exercise 5.3', htmlSource: require('../assets/chapter5/exercise3.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter5/mcqs.html') }
        ]
    },
    {
        id: 'ch6',
        name: 'Chapter 6: Triangles',
        path: 'chapter6',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter6/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter6/examples.html') },
            { id: 'ex6.1', title: 'Exercise 6.1', htmlSource: require('../assets/chapter6/exercise1.html') },
            { id: 'ex6.2', title: 'Exercise 6.2', htmlSource: require('../assets/chapter6/exercise2.html') },
            { id: 'ex6.3', title: 'Exercise 6.3', htmlSource: require('../assets/chapter6/exercise3.html') },
            { id: 'theorems', title: 'Theorems', htmlSource: require('../assets/chapter6/theorems.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter6/mcqs.html') }
        ]
    },
    {
        id: 'ch7',
        name: 'Chapter 7: Coordinate Geometry',
        path: 'chapter7',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter7/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter7/examples.html') },
            { id: 'ex7.1', title: 'Exercise 7.1', htmlSource: require('../assets/chapter7/exercise1.html') },
            { id: 'ex7.2', title: 'Exercise 7.2', htmlSource: require('../assets/chapter7/exercise2.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter7/mcqs.html') }
        ]
    },
    {
        id: 'ch8',
        name: 'Chapter 8: Introduction to Trigonometry',
        path: 'chapter8',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter8/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter8/examples.html') },
            { id: 'ex8.1', title: 'Exercise 8.1', htmlSource: require('../assets/chapter8/exercise1.html') },
            { id: 'ex8.2', title: 'Exercise 8.2', htmlSource: require('../assets/chapter8/exercise2.html') },
            { id: 'ex8.3', title: 'Exercise 8.3', htmlSource: require('../assets/chapter8/exercise3.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter8/mcqs.html') }
        ]
    },
    {
        id: 'ch9',
        name: 'Chapter 9: Some Applications of Trigonometry',
        path: 'chapter9',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter9/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter9/examples.html') },
            { id: 'ex9.1', title: 'Exercise 9.1', htmlSource: require('../assets/chapter9/exercise1.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter9/mcqs.html') }
        ]
    },
    {
        id: 'ch10',
        name: 'Chapter 10: Circles',
        path: 'chapter10',
        exercises: [
            { id: 'overview', title: 'Overview', htmlSource: require('../assets/chapter10/overview.html') },
            { id: 'eg', title: 'Examples', htmlSource: require('../assets/chapter10/examples.html') },
            { id: 'ex10.1', title: 'Exercise 10.1', htmlSource: require('../assets/chapter10/exercise1.html') },
            { id: 'ex10.2', title: 'Exercise 10.2', htmlSource: require('../assets/chapter10/exercise2.html') },
            { id: 'theorems', title: 'Theorems', htmlSource: require('../assets/chapter10/theorems.html') },
            { id: 'mcqs', title: 'MCQs', htmlSource: require('../assets/chapter10/mcqs.html') }
        ]
    },
];
