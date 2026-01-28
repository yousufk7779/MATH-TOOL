export interface Definition {
  term: string;
  description: string;
}

export interface Formula {
  name: string;
  formula: string;
}

export interface Question {
  id: string;
  number: string;
  question: string;
  solution: string[];
  answer: string;
  image?: string;
}

export interface Exercise {
  id: string;
  name: string;
  questions: Question[];
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Example {
  id: string;
  number: string;
  question: string;
  solution: string[];
  answer: string;
}

export interface Theorem {
  id: string;
  number: string;
  name: string;
  statement: string;
  proof?: string[];
  example?: string;
}

export interface ChapterContent {
  id: string;
  number: number;
  title: string;
  introduction: string;
  definitions: Definition[];
  keyPoints: string[];
  formulas: Formula[];
  crux: string[];
  exercises: Exercise[];
  examples: Example[];
  theorems?: Theorem[];
  mcqs: MCQ[];
  summary: string[];
}

export const chapterContents: Record<string, ChapterContent> = {
  "ch1-real-numbers": {
    id: "ch1-real-numbers",
    number: 1,
    title: "Real Numbers",
    introduction: "In Class IX, you explored the world of real numbers and encountered irrational numbers. In this chapter, we continue our discussion on real numbers with two very important properties of positive integers - Euclid's Division Algorithm and the Fundamental Theorem of Arithmetic. We will use these concepts to find HCF and LCM of numbers, prove the irrationality of numbers like √2, √3, √5, and explore when the decimal expansion of a rational number is terminating or non-terminating repeating.",
    definitions: [
      { term: "Real Numbers", description: "The collection of all rational and irrational numbers. Denoted by R." },
      { term: "Natural Numbers", description: "Counting numbers 1, 2, 3, 4, ... Denoted by N." },
      { term: "Whole Numbers", description: "Natural numbers including 0, i.e., 0, 1, 2, 3, ... Denoted by W." },
      { term: "Integers", description: "All positive and negative whole numbers including 0. Denoted by Z." },
      { term: "Rational Numbers", description: "Numbers that can be written in the form p/q where p and q are integers and q ≠ 0. Denoted by Q." },
      { term: "Irrational Numbers", description: "Numbers that cannot be written in the form p/q. Examples: √2, √3, π." },
      { term: "Prime Numbers", description: "Numbers greater than 1 with exactly two factors - 1 and itself. Examples: 2, 3, 5, 7, 11..." },
      { term: "Composite Numbers", description: "Numbers greater than 1 with more than two factors. Examples: 4, 6, 8, 9..." },
      { term: "Co-prime Numbers", description: "Two numbers whose HCF is 1. Example: 15 and 28." },
    ],
    keyPoints: [
      "Every composite number can be expressed as a product of primes uniquely (Fundamental Theorem of Arithmetic).",
      "HCF = Product of smallest powers of common prime factors.",
      "LCM = Product of greatest powers of all prime factors.",
      "For any two positive integers a and b: HCF(a, b) × LCM(a, b) = a × b.",
      "√2, √3, √5 and √p (where p is prime) are irrational numbers.",
      "Sum or difference of a rational and an irrational number is irrational.",
      "Product or quotient of a non-zero rational and an irrational number is irrational.",
      "If a prime p divides a², then p also divides a.",
    ],
    formulas: [
      { name: "Euclid's Division Lemma", formula: "a = bq + r, where 0 ≤ r < b" },
      { name: "Fundamental Theorem", formula: "Every composite number = Product of prime factors (unique)" },
      { name: "HCF × LCM", formula: "HCF(a, b) × LCM(a, b) = a × b" },
      { name: "HCF (Prime Factorisation)", formula: "Product of smallest powers of common prime factors" },
      { name: "LCM (Prime Factorisation)", formula: "Product of greatest powers of all prime factors" },
    ],
    crux: [
      "This chapter establishes the foundation of number theory through two theorems.",
      "The Fundamental Theorem of Arithmetic ensures every composite number has a unique prime factorisation.",
      "This uniqueness is used to prove irrationality of numbers like √2, √3, √5 using proof by contradiction.",
      "For HCF, take smallest powers; for LCM, take greatest powers.",
    ],
    exercises: [
      {
        id: "ex1.1",
        name: "Exercise 1.1",
        questions: [
          {
            id: "q1.1.1",
            number: "Q.1",
            question: "Express 140 as a product of its prime factors.",
            solution: [
              "140 = 2 × 70",
              "70 = 2 × 35",
              "35 = 5 × 7",
              "7 = 7 × 1",
            ],
            answer: "140 = 2² × 5 × 7",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex1",
        number: "Example 1",
        question: "Consider the numbers 4ⁿ, where n is a natural number. Check whether there is any value of n for which 4ⁿ ends with the digit zero.",
        solution: [
          "For a number to end with digit 0, it must be divisible by 10.",
          "10 = 2 × 5",
          "Now, 4ⁿ = (2²)ⁿ = 2²ⁿ",
          "The prime factorisation of 4ⁿ contains only 2.",
          "There is no factor of 5 in 4ⁿ.",
        ],
        answer: "No, 4ⁿ cannot end with digit 0 for any natural number n.",
      },
    ],
    mcqs: [
      { id: "mcq1", question: "HCF of 135 and 225 is:", options: ["15", "45", "25", "9"], correctAnswer: "b" },
    ],
    summary: [
      "The Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes uniquely.",
      "If p is a prime and p divides a², then p divides a.",
      "√2, √3, √5 are irrational numbers (proved using contradiction).",
      "HCF(a, b) × LCM(a, b) = a × b.",
    ],
  },
  "ch2-polynomials": {
    id: "ch2-polynomials",
    number: 2,
    title: "Polynomials",
    introduction: "In Class IX, you studied polynomials in one variable and their degrees. In this chapter, we will explore the relationship between zeroes and coefficients of polynomials. You will learn how to find zeroes of quadratic polynomials and understand their geometrical meaning through graphs.",
    definitions: [
      { term: "Polynomial", description: "An algebraic expression where powers of variables are non-negative integers." },
      { term: "Degree", description: "The highest power of the variable in the polynomial." },
      { term: "Linear Polynomial", description: "A polynomial of degree 1. Form: ax + b, a ≠ 0." },
      { term: "Quadratic Polynomial", description: "A polynomial of degree 2. Form: ax² + bx + c, a ≠ 0." },
      { term: "Cubic Polynomial", description: "A polynomial of degree 3. Form: ax³ + bx² + cx + d, a ≠ 0." },
    ],
    keyPoints: [
      "A polynomial of degree n has at most n zeroes.",
      "The zeroes of a polynomial are the x-coordinates of the points where the graph intersects the x-axis.",
      "The graph of a quadratic polynomial is a parabola.",
    ],
    formulas: [
      { name: "Quadratic (ax² + bx + c)", formula: "Sum (α+β) = -b/a, Product (αβ) = c/a" },
      { name: "Cubic (ax³ + bx² + cx + d)", formula: "Sum (α+β+γ) = -b/a, Σαβ = c/a, Product (αβγ) = -d/a" },
    ],
    crux: [
      "Zeroes are x-intercepts of the graph.",
      "For quadratic: Sum = -b/a, Product = c/a.",
      "For cubic: Sum = -b/a, Sum of product taken two at a time = c/a, Product = -d/a.",
    ],
    exercises: [
      {
        id: "ex2.1",
        name: "Exercise 2.1",
        questions: [
          {
            id: "q2.1.1i",
            number: "Q.1(i)",
            question: "Find the number of zeroes from the graph (straight line parallel to x-axis).",
            solution: [
              "The graph is a straight line parallel to the x-axis.",
              "It does not intersect the x-axis at any point. [Zero = x-intercept]",
              "Since there is no intersection with x-axis, there are no zeroes.",
            ],
            answer: "Number of zeroes = 0",
            image: "graph_ex2_1_q1_a",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex1",
        number: "Example 1",
        question: "Find the zeroes of the quadratic polynomial x² + 7x + 10, and verify the relationship between the zeroes and the coefficients.",
        solution: [
          "x² + 7x + 10 = (x + 2)(x + 5)",
          "Zeroes are -2 and -5.",
          "Sum = -2 + (-5) = -7 = -7/1 = -b/a",
          "Product = (-2)(-5) = 10 = 10/1 = c/a",
        ],
        answer: "Zeroes: -2, -5. Relationships verified.",
      },
    ],
    mcqs: [
      { id: "mcq1", question: "If the graph cuts x-axis at 3 points, number of zeroes is:", options: ["1", "2", "3", "0"], correctAnswer: "c" },
    ],
    summary: [
      "Zeroes of p(x) are x-intercepts of y = p(x).",
      "Quadratic: Sum = -b/a, Product = c/a.",
    ],
  },
  "ch3-linear-equations": {
    id: "ch3-linear-equations",
    number: 3,
    title: "Pair of Linear Equations in Two Variables",
    introduction: "An equation which can be put in the form ax + by + c = 0, where a, b and c are real numbers, and a and b are not both zero, is called a linear equation in two variables x and y. A pair of linear equations in two variables x and y, can be represented and solved by the: (i) Graphical method (ii) Algebraic method.",
    definitions: [
      { term: "Linear Equation", description: "An equation of the form ax + by + c = 0 where a, b, c are real numbers and a, b are not both zero." },
      { term: "Pair of Linear Equations", description: "Two linear equations in the same two variables taken together." },
      { term: "Consistent System", description: "A system of linear equations which has at least one solution." },
      { term: "Inconsistent System", description: "A system of linear equations which has no solution." },
      { term: "Dependent System", description: "A consistent system of linear equations which has infinitely many solutions (coincident lines)." },
    ],
    keyPoints: [
      "The graph of a linear equation in two variables is a straight line.",
      "The graph of a pair of linear equations in two variables is represented by two lines.",
      "If the lines intersect at a point, then that point gives the unique solution.",
      "If the lines coincide, then there are infinitely many solutions.",
      "If the lines are parallel, then the pair of equations has no solution.",
    ],
    formulas: [
      { name: "General Form", formula: "a₁x + b₁y + c₁ = 0\na₂x + b₂y + c₂ = 0" },
      { name: "Condition for Unique Solution", formula: "a₁/a₂ ≠ b₁/b₂" },
      { name: "Condition for Infinite Solutions", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      { name: "Condition for No Solution", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂" },
    ],
    crux: [
      "For intersecting lines: Unique solution, Consistent.",
      "For coincident lines: Infinitely many solutions, Consistent (Dependent).",
      "For parallel lines: No solution, Inconsistent.",
    ],
    exercises: [
      {
        id: "ex3.1",
        name: "Exercise 3.1",
        questions: [
          {
            id: "q3.1.1",
            number: "Q.1",
            question: "Form the pair of linear equations in the following problems, and find their solutions graphically: 10 students of Class X took part in a Mathematics quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls who took part in the quiz.",
            solution: [
              "Let the number of girls be x and the number of boys be y.",
              "Total students: x + y = 10",
              "Girls are 4 more than boys: x = y + 4 → x - y = 4",
              "Adding both equations: 2x = 14 → x = 7",
              "Substituting x = 7 in first equation: 7 + y = 10 → y = 3",
            ],
            answer: "Number of girls = 7, Number of boys = 3",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex3_1",
        number: "Example 1",
        question: "Check whether the pair of equations x + 3y = 6 and 2x - 3y = 12 is consistent. If so, solve them graphically.",
        solution: [
          "a₁/a₂ = 1/2, b₁/b₂ = 3/-3 = -1",
          "Since a₁/a₂ ≠ b₁/b₂, the lines are intersecting and consistent.",
        ],
        answer: "Consistent with unique solution.",
      },
    ],
    mcqs: [
      { id: "mcq3_1", question: "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, then the lines are:", options: ["Intersecting", "Parallel", "Coincident", "None"], correctAnswer: "b" },
    ],
    summary: [
      "Graphical Method: Intersecting lines (Unique), Coincident (Infinite), Parallel (No solution).",
      "Algebraic Method: Substitution, Elimination.",
      "Condition Check: Compare a₁/a₂, b₁/b₂, c₁/c₂.",
    ],
  },
  "ch4-quadratic-equations": {
    id: "ch4-quadratic-equations",
    number: 4,
    title: "Quadratic Equations",
    introduction: "A quadratic equation in the variable x is an equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0. For example, 2x² + x – 300 = 0 is a quadratic equation. Similarly, 2x² – 3x + 1 = 0, 4x – 3x² + 2 = 0 and 1 – x² + 300 = 0 are also quadratic equations.",
    definitions: [
      { term: "Quadratic Equation", description: "An equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0." },
      { term: "Roots of Quadratic Equation", description: "A real number α is called a root of the quadratic equation ax² + bx + c = 0, if aα² + bα + c = 0." },
      { term: "Discriminant", description: "For the quadratic equation ax² + bx + c = 0, the expression b² – 4ac is called the discriminant." },
    ],
    keyPoints: [
      "Any equation of the form p(x) = 0, where p(x) is a polynomial of degree 2, is a quadratic equation.",
      "A quadratic equation ax² + bx + c = 0 has: (i) two distinct real roots, if b² – 4ac > 0; (ii) two equal real roots, if b² – 4ac = 0; (iii) no real roots, if b² – 4ac < 0.",
      "Roots of ax² + bx + c = 0 are the same as the zeroes of the quadratic polynomial ax² + bx + c.",
    ],
    formulas: [
      { name: "Standard Form", formula: "ax² + bx + c = 0, a ≠ 0" },
      { name: "Quadratic Formula", formula: "x = [-b ± √(b² - 4ac)] / 2a" },
      { name: "Discriminant", formula: "D = b² - 4ac" },
    ],
    crux: [
      "Standard Form: ax² + bx + c = 0",
      "D > 0: Two distinct real roots",
      "D = 0: Two equal real roots",
      "D < 0: No real roots",
    ],
    exercises: [
      {
        id: "ex4.1",
        name: "Exercise 4.1",
        questions: [
          {
            id: "q4.1.1",
            number: "Q.1(i)",
            question: "Check whether (x + 1)² = 2(x - 3) is a quadratic equation.",
            solution: [
              "LHS = (x + 1)² = x² + 2x + 1",
              "RHS = 2(x - 3) = 2x - 6",
              "Equation: x² + 2x + 1 = 2x - 6 → x² + 7 = 0",
              "It is of the form ax² + bx + c = 0.",
            ],
            answer: "Yes, it is a quadratic equation.",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex4_1",
        number: "Example 1",
        question: "Find the roots of the equation 2x² – 5x + 3 = 0, by factorisation.",
        solution: [
          "2x² – 5x + 3 = 0",
          "2x² – 2x – 3x + 3 = 0",
          "2x(x – 1) – 3(x – 1) = 0",
          "(x – 1)(2x – 3) = 0",
        ],
        answer: "Roots are 1 and 3/2.",
      },
    ],
    mcqs: [
      { id: "mcq4_1", question: "Which of the following is a quadratic equation?", options: ["x² + 2x + 1 = (4 - x)² + 3", "-2x² = (5 - x)(2x - 2/5)", "(k + 1)x² + 3/2x = 7 (k = -1)", "x³ - x² = (x - 1)³"], correctAnswer: "d" },
    ],
    summary: [
      "Standard form of quadratic equation: ax² + bx + c = 0 (a ≠ 0).",
      "A quadratic equation can be solved by Factorisation or Quadratic Formula.",
      "Nature of roots depends on Discriminant D = b² - 4ac.",
    ],
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}

export function isChapterAvailable(chapterId: string): boolean {
  return chapterId in chapterContents;
}
