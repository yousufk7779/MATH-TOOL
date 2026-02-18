
export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }

export const chapterContents: Record<string, ChapterContent> = {
  "ch1": {
    "id": "ch1",
    "number": 1,
    "title": "Real Numbers - Overview",
    "introduction": "",
    "definitions": [],
    "keyPoints": [
      "Real numbers constitute the foundation of mathematics. Every number that can be plotted on a number line is a real number. This chapter revisits the number system and delves deeper into the properties of integers and irrational numbers.",
      "We focus on two main topics:",
      "The Fundamental Theorem of Arithmetic: Understanding composite numbers as products of primes. This has applications in finding HCF and LCM.",
      "Revisiting Irrational Numbers: Proving irrationality of numbers like √2, √3, and 5 - √3 using the method of contradiction.",
      "Natural Numbers (N): Counting numbers starting from 1. {1, 2, 3, ...}",
      "Whole Numbers (W): Natural numbers including zero. {0, 1, 2, 3, ...}",
      "Integers (Z): Set of positive and negative counting numbers including zero. {..., -3, -2, -1, 0, 1, 2, 3, ...}",
      "Real Numbers (R): The set of all rational and irrational numbers.",
      "Rational Numbers (Q): Numbers that can be written in the form pq, where p and q are integers and q ≠ 0. Their decimal expansion is either terminating or non-terminating recurring.",
      "Irrational Numbers: Numbers that cannot be written in the form pq (e.g., √2, √3, π). Their decimal expansions are non-terminating and non-recurring.",
      "Prime Numbers: Numbers greater than 1 that have exactly two factors: 1 and the number itself (e.g., 2, 3, 5, 7, 11). 2 is the only even prime number.",
      "Composite Numbers: Numbers greater than 1 that have more than two factors (e.g., 4, 6, 8, 9, 10). Note: 1 is neither prime nor composite.",
      "Co-prime Numbers: Two numbers whose HCF is 1. They do not necessarily have to be prime themselves (e.g., 8 and 15).",
      "The Fundamental Theorem of Arithmetic:",
      "Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.",
      "Example: 12 = 2 × 2 × 3 = 2² × 3.",
      "HCF (Highest Common Factor):",
      "Product of the smallest power of each common prime factor in the numbers. It represents the largest number that divides all the given numbers.",
      "LCM (Least Common Multiple):",
      "Product of the greatest power of each prime factor, involved in the numbers. It represents the smallest number divisible by all the given numbers.",
      "Relationship between HCF and LCM:",
      "For any two positive integers a and b:",
      "Note: This formula is valid ONLY for two numbers, not for three or more.",
      "Theorem on Rationality:",
      "Let p be a prime number. If p divides a² (where a is a positive integer), then p divides a.",
      "This theorem is the basis for proving that √2, √3, etc., are irrational.",
      "Properties of Irrational Numbers:"
    ],
    "formulas": [],
    "crux": [],
    "exercises": [],
    "examples": [],
    "mcqs": [],
    "summary": [],
    "theorems": []
  },
  "ch": {
    "id": "ch",
    "number": null,
    "title": "Chapter ",
    "introduction": "",
    "definitions": [],
    "keyPoints": [],
    "formulas": [],
    "crux": [],
    "exercises": [],
    "examples": [],
    "mcqs": [],
    "summary": [],
    "theorems": []
  }
};

export function getChapterContent(id: string): ChapterContent | undefined {
  return chapterContents[id];
}
