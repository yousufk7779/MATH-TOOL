import { Question } from "./chapterContent";

export interface PYQSet {
    year: string; // "2023", "2022 TS", "2021 AP"
    questions: Question[];
}

export interface ChapterPYQ {
    chapterId: string;
    sets: PYQSet[];
}

export const chapterPYQs: Record<string, ChapterPYQ> = {
    "ch1-real-numbers": {
        chapterId: "ch1-real-numbers",
        sets: [
            {
                year: "2023",
                questions: [
                    {
                        id: "pyq_ch1_2023_1",
                        number: "Q.1",
                        question: "Find the HCF of 60 and 100 by prime factorization method.",
                        solution: [
                            "Prime factorization of 60 = 2² × 3 × 5",
                            "Prime factorization of 100 = 2² × 5²",
                            "HCF = Product of smallest power of common factors",
                            "HCF(60, 100) = 2² × 5 = 4 × 5 = 20"
                        ],
                        answer: "HCF = 20"
                    }
                ]
            },
            {
                year: "2022 AP",
                questions: [
                    {
                        id: "pyq_ch1_2022_ap_1",
                        number: "Q.1",
                        question: "Show that 5 + √3 is irrational.",
                        solution: [
                            "Assume 5+√3 is rational.",
                            "5+√3 = a/b (a,b coprimes)",
                            "√3 = a/b - 5",
                            "√3 = (a-5b)/b",
                            "RHS is rational implies √3 is rational.",
                            "Contradiction as √3 is irrational."
                        ],
                        answer: "Irrational (Proved)"
                    }
                ]
            },
            {
                year: "2021 TS",
                questions: [
                    {
                        id: "pyq_ch1_2021_ts_1",
                        number: "Q.2",
                        question: "If LCM(x, 18) = 36 and HCF(x, 18) = 2, find x.",
                        solution: [
                            "LCM × HCF = Product of numbers",
                            "36 × 2 = x × 18",
                            "72 = 18x",
                            "x = 72/18 = 4"
                        ],
                        answer: "x = 4"
                    }
                ]
            }
        ]
    },
    "ch2-polynomials": {
        chapterId: "ch2-polynomials",
        sets: [
            {
                year: "2023",
                questions: [
                    {
                        id: "pyq_ch2_2023_1",
                        number: "Q.1",
                        question: "If a and b are zeroes of x² - x - 2, find 1/a + 1/b.",
                        solution: [
                            "a+b = 1, ab = -2",
                            "1/a + 1/b = (a+b)/ab",
                            "= 1 / (-2) = -1/2"
                        ],
                        answer: "-1/2"
                    }
                ]
            }
        ]
    }
};

export const getChapterPYQs = (chapterId: string): PYQSet[] => {
    return chapterPYQs[chapterId]?.sets || [];
};
