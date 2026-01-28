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
      { name: "Theorem 1.2", formula: "If p divides a², then p divides a (p is prime)" },
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
            number: "Q.1(i)",
            question: "Express 140 as a product of its prime factors.",
            solution: [
              "140 ÷ 2 = 70",
              "70 ÷ 2 = 35",
              "35 ÷ 5 = 7",
              "7 ÷ 7 = 1",
            ],
            answer: "140 = 2² × 5 × 7",
          },
          {
            id: "q1.1.2",
            number: "Q.1(ii)",
            question: "Express 156 as a product of its prime factors.",
            solution: [
              "156 ÷ 2 = 78",
              "78 ÷ 2 = 39",
              "39 ÷ 3 = 13",
              "13 ÷ 13 = 1",
            ],
            answer: "156 = 2² × 3 × 13",
          },
          {
            id: "q1.1.3",
            number: "Q.1(iii)",
            question: "Express 3825 as a product of its prime factors.",
            solution: [
              "3825 ÷ 3 = 1275",
              "1275 ÷ 3 = 425",
              "425 ÷ 5 = 85",
              "85 ÷ 5 = 17",
              "17 ÷ 17 = 1",
            ],
            answer: "3825 = 3² × 5² × 17",
          },
          {
            id: "q1.1.4",
            number: "Q.1(iv)",
            question: "Express 5005 as a product of its prime factors.",
            solution: [
              "5005 ÷ 5 = 1001",
              "1001 ÷ 7 = 143",
              "143 ÷ 11 = 13",
              "13 ÷ 13 = 1",
            ],
            answer: "5005 = 5 × 7 × 11 × 13",
          },
          {
            id: "q1.1.5",
            number: "Q.1(v)",
            question: "Express 7429 as a product of its prime factors.",
            solution: [
              "7429 ÷ 17 = 437",
              "437 ÷ 19 = 23",
              "23 ÷ 23 = 1",
            ],
            answer: "7429 = 17 × 19 × 23",
          },
          {
            id: "q1.1.6",
            number: "Q.2",
            question: "Find the LCM and HCF of 26 and 91.",
            solution: [
              "26 = 2 × 13",
              "91 = 7 × 13",
              "HCF = 13 (common prime factor)",
              "LCM = 2 × 7 × 13 = 182",
            ],
            answer: "HCF = 13, LCM = 182",
          },
          {
            id: "q1.1.7",
            number: "Q.3",
            question: "Find the LCM and HCF of 12, 15 and 21.",
            solution: [
              "12 = 2² × 3",
              "15 = 3 × 5",
              "21 = 3 × 7",
              "HCF = 3 (common factor with smallest power)",
              "LCM = 2² × 3 × 5 × 7 = 420",
            ],
            answer: "HCF = 3, LCM = 420",
          },
          {
            id: "q1.1.8",
            number: "Q.4",
            question: "Find the LCM and HCF of 6 and 20 and verify HCF × LCM = Product of numbers.",
            solution: [
              "6 = 2 × 3",
              "20 = 2² × 5",
              "HCF = 2",
              "LCM = 2² × 3 × 5 = 60",
              "Verification: HCF × LCM = 2 × 60 = 120",
              "Product of numbers = 6 × 20 = 120",
            ],
            answer: "HCF = 2, LCM = 60. Verified: 2 × 60 = 6 × 20 = 120",
          },
        ],
      },
      {
        id: "ex1.2",
        name: "Exercise 1.2",
        questions: [
          {
            id: "q1.2.1",
            number: "Q.1",
            question: "Prove that √2 is irrational.",
            solution: [
              "Let √2 be rational, so √2 = p/q where p and q are co-prime.",
              "Squaring: 2 = p²/q², so p² = 2q²",
              "This means p² is even, so p is even (let p = 2m)",
              "Substituting: 4m² = 2q², so q² = 2m²",
              "This means q² is even, so q is even",
              "But both p and q being even contradicts that they are co-prime.",
            ],
            answer: "Hence, √2 is irrational (proved by contradiction).",
          },
          {
            id: "q1.2.2",
            number: "Q.2",
            question: "Prove that √3 is irrational.",
            solution: [
              "Let √3 be rational, so √3 = p/q where p and q are co-prime.",
              "Squaring: 3 = p²/q², so p² = 3q²",
              "This means 3 divides p², so 3 divides p (let p = 3m)",
              "Substituting: 9m² = 3q², so q² = 3m²",
              "This means 3 divides q², so 3 divides q",
              "Both p and q being divisible by 3 contradicts co-primality.",
            ],
            answer: "Hence, √3 is irrational (proved by contradiction).",
          },
          {
            id: "q1.2.3",
            number: "Q.3",
            question: "Prove that √5 is irrational.",
            solution: [
              "Let √5 be rational, so √5 = p/q where p and q are co-prime.",
              "Squaring: 5 = p²/q², so p² = 5q²",
              "This means 5 divides p², so 5 divides p (let p = 5m)",
              "Substituting: 25m² = 5q², so q² = 5m²",
              "This means 5 divides q², so 5 divides q",
              "Both being divisible by 5 contradicts co-primality.",
            ],
            answer: "Hence, √5 is irrational (proved by contradiction).",
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
          "Since 5 is not a factor of 4ⁿ, it cannot be divisible by 10.",
        ],
        answer: "No, 4ⁿ cannot end with digit 0 for any natural number n.",
      },
      {
        id: "ex2",
        number: "Example 2",
        question: "Find the LCM and HCF of 6 and 20 by the prime factorisation method.",
        solution: [
          "Prime factorisation:",
          "6 = 2¹ × 3¹",
          "20 = 2² × 5¹",
          "HCF(6, 20) = 2¹ = 2 (Only 2 is common)",
          "LCM(6, 20) = 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60 (Greatest powers)",
        ],
        answer: "HCF = 2, LCM = 60",
      },
      {
        id: "ex3",
        number: "Example 3",
        question: "Find the HCF of 96 and 404 by the prime factorisation method. Hence, find their LCM.",
        solution: [
          "Prime factorisation:",
          "96 = 2⁵ × 3",
          "404 = 2² × 101",
          "HCF(96, 404) = 2² = 4 (Common factor: 2²)",
          "Using: HCF × LCM = Product of numbers",
          "LCM = (96 × 404) / 4 = 38784 / 4 = 9696",
        ],
        answer: "HCF = 4, LCM = 9696",
      },
      {
        id: "ex4",
        number: "Example 4",
        question: "Find the HCF and LCM of 6, 72 and 120, using the prime factorisation method.",
        solution: [
          "Prime factorisation:",
          "6 = 2 × 3",
          "72 = 2³ × 3²",
          "120 = 2³ × 3 × 5",
          "Common factors: 2 and 3",
          "HCF(6, 72, 120) = 2¹ × 3¹ = 6 (Smallest powers: 2¹, 3¹)",
          "LCM(6, 72, 120) = 2³ × 3² × 5¹ = 8 × 9 × 5 = 360 (Greatest powers)",
        ],
        answer: "HCF = 6, LCM = 360",
      },
      {
        id: "ex5",
        number: "Example 5",
        question: "Prove that √3 is irrational.",
        solution: [
          "Step 1: Assume, to the contrary, that √3 is rational.",
          "Then √3 = a/b, where a and b are coprime integers, b ≠ 0.",
          "Step 2: Squaring both sides:",
          "3 = a²/b²",
          "∴ 3b² = a²",
          "This means 3 divides a².",
          "Step 3: By Theorem 1.2, if 3 divides a², then 3 divides a.",
          "So we can write a = 3c for some integer c.",
          "Step 4: Substituting a = 3c in 3b² = a²:",
          "3b² = 9c²",
          "∴ b² = 3c²",
          "This means 3 divides b², so 3 divides b.",
          "Step 5: So 3 divides both a and b.",
          "But this contradicts that a and b are coprime!",
        ],
        answer: "∴ √3 is irrational. (Hence Proved)",
      },
      {
        id: "ex6",
        number: "Example 6",
        question: "Show that 5 - √3 is irrational.",
        solution: [
          "Step 1: Assume, to the contrary, that 5 - √3 is rational.",
          "Then 5 - √3 = a/b, where a, b are coprime integers, b ≠ 0.",
          "Step 2: Rearranging:",
          "√3 = 5 - a/b = (5b - a)/b",
          "Step 3: Since a and b are integers, (5b - a)/b is rational.",
          "This means √3 is rational.",
          "Step 4: But we know √3 is irrational!",
          "This is a contradiction.",
        ],
        answer: "∴ 5 - √3 is irrational. (Hence Proved)",
      },
      {
        id: "ex7",
        number: "Example 7",
        question: "Show that 3√2 is irrational.",
        solution: [
          "Step 1: Assume, to the contrary, that 3√2 is rational.",
          "Then 3√2 = a/b, where a, b are coprime integers, b ≠ 0.",
          "Step 2: Rearranging:",
          "√2 = a/(3b)",
          "Step 3: Since a, b are integers and 3 is an integer, a/(3b) is rational.",
          "This means √2 is rational.",
          "Step 4: But we know √2 is irrational (Theorem 1.3)!",
          "This is a contradiction.",
        ],
        answer: "∴ 3√2 is irrational. (Hence Proved)",
      },
    ],
    theorems: [
      {
        id: "thm1.1",
        number: "Theorem 1.1",
        name: "Euclid's Division Lemma",
        statement: "For any positive integers a and b, there exist unique integers q and r such that: a = bq + r, where 0 ≤ r < b",
        proof: [
          "When we divide a by b, we get quotient q and remainder r.",
          "Remainder is always less than divisor (r < b).",
        ],
        example: "17 = 5 × 3 + 2 (here a=17, b=5, q=3, r=2)",
      },
      {
        id: "thm1.2",
        number: "Theorem 1.2",
        name: "Prime Factor Property",
        statement: "If p is a prime number and p divides a², then p divides a.",
        proof: [
          "Let a = p₁ × p₂ × ... × pₙ (prime factorisation)",
          "Then a² = p₁² × p₂² × ... × pₙ²",
          "If prime p divides a², then p must be one of p₁, p₂, ..., pₙ",
          "∴ p divides a.",
        ],
        example: "If 5 divides 15², then 5 divides 15 ✓",
      },
      {
        id: "thm1.3",
        number: "Theorem 1.3",
        name: "Irrationality of √2",
        statement: "√2 is irrational.",
        proof: [
          "Assume √2 is rational.",
          "√2 = a/b (in lowest form)",
          "Squaring: 2 = a²/b² → a² = 2b²",
          "So 2 divides a² → 2 divides a. Let a = 2k.",
          "Then 4k² = 2b² → b² = 2k²",
          "So 2 divides b² → 2 divides b.",
          "But then 2 divides both a and b — contradiction!",
        ],
      },
    ],
    mcqs: [
      { id: "mcq1", question: "HCF of 135 and 225 is:", options: ["15", "45", "25", "9"], correctAnswer: "b" },
      { id: "mcq2", question: "LCM of 12, 15, 21 is:", options: ["60", "420", "84", "180"], correctAnswer: "b" },
      { id: "mcq3", question: "√2 is:", options: ["Rational", "Irrational", "Natural", "Integer"], correctAnswer: "b" },
      { id: "mcq4", question: "HCF(a,b) × LCM(a,b) equals:", options: ["a + b", "a - b", "a × b", "a ÷ b"], correctAnswer: "c" },
      { id: "mcq5", question: "Product of a rational and irrational is:", options: ["Rational", "Irrational", "Integer", "Zero"], correctAnswer: "b" },
    ],
    summary: [
      "The Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes uniquely.",
      "If p is a prime and p divides a², then p divides a.",
      "√2, √3, √5 are irrational numbers (proved using contradiction).",
      "HCF = Product of smallest powers of common prime factors.",
      "LCM = Product of greatest powers of all prime factors.",
      "For any two positive integers: HCF(a, b) × LCM(a, b) = a × b.",
    ],
  },

  "ch2-polynomials": {
    id: "ch2-polynomials",
    number: 2,
    title: "Polynomials",
    introduction: "In Class IX, you studied polynomials in one variable and their degrees. In this chapter, we will explore the relationship between zeroes and coefficients of polynomials. You will learn how to find zeroes of quadratic polynomials and understand their geometrical meaning through graphs. The zeroes of a polynomial are the values of the variable for which the polynomial equals zero.",
    definitions: [
      { term: "Polynomial", description: "An algebraic expression of the form a₀ + a₁x + a₂x² + ... + aₙxⁿ, where coefficients are real numbers and n is a non-negative integer." },
      { term: "Degree of Polynomial", description: "The highest power of the variable in the polynomial. Example: 4x³ + 2x - 5 has degree 3." },
      { term: "Linear Polynomial", description: "A polynomial of degree 1. General form: ax + b, where a ≠ 0. Example: 2x - 3" },
      { term: "Quadratic Polynomial", description: "A polynomial of degree 2. General form: ax² + bx + c, where a ≠ 0. Example: x² - 5x + 6" },
      { term: "Cubic Polynomial", description: "A polynomial of degree 3. General form: ax³ + bx² + cx + d, where a ≠ 0." },
      { term: "Zero of a Polynomial", description: "A real number k is called a zero of polynomial p(x) if p(k) = 0." },
    ],
    keyPoints: [
      "A polynomial of degree n has at most n zeroes.",
      "The zeroes of a polynomial are the x-coordinates of the points where the graph intersects the x-axis.",
      "A linear polynomial has exactly one zero.",
      "A quadratic polynomial can have at most 2 zeroes (may have 2, 1, or no real zeroes).",
      "A cubic polynomial can have at most 3 zeroes.",
      "The graph of a quadratic polynomial is a parabola - opens upward if a > 0, downward if a < 0.",
      "Greek letters α (alpha), β (beta), and γ (gamma) are used to represent zeroes.",
    ],
    formulas: [
      { name: "Linear Polynomial Zero", formula: "Zero = -b/a = -(Constant term)/(Coefficient of x)" },
      { name: "Quadratic Sum of Zeroes", formula: "α + β = -b/a" },
      { name: "Quadratic Product of Zeroes", formula: "αβ = c/a" },
      { name: "Cubic Sum of Zeroes", formula: "α + β + γ = -b/a" },
      { name: "Cubic Sum of Products (pairs)", formula: "αβ + βγ + γα = c/a" },
      { name: "Cubic Product of Zeroes", formula: "αβγ = -d/a" },
      { name: "Quadratic from Zeroes", formula: "p(x) = k[x² - (α + β)x + αβ]" },
    ],
    crux: [
      "Finding Zeroes: Factorize the polynomial and set each factor equal to zero.",
      "Verification: After finding zeroes, verify using sum and product formulas.",
      "Geometrical Meaning: Zeroes are x-intercepts of the polynomial graph.",
      "Quadratic from Zeroes: Use x² - (sum)x + (product) = 0",
      "Remember: Sum = -b/a, Product = c/a (for quadratic)",
    ],
    exercises: [
      {
        id: "ex2.1",
        name: "Exercise 2.1",
        questions: [
          {
            id: "q2.1.1",
            number: "Q.1",
            question: "Find the number of zeroes of polynomial p(x) from its graph.",
            solution: [
              "The zeroes of a polynomial are the x-coordinates where the graph intersects the x-axis.",
              "Count the number of intersection points with x-axis.",
            ],
            answer: "Number of zeroes = Number of points where graph cuts x-axis",
          },
        ],
      },
      {
        id: "ex2.2",
        name: "Exercise 2.2",
        questions: [
          {
            id: "q2.2.1",
            number: "Q.1(i)",
            question: "Find the zeroes of x² - 2x - 8 and verify the relationship between zeroes and coefficients.",
            solution: [
              "x² - 2x - 8 = 0",
              "x² - 4x + 2x - 8 = 0",
              "(x - 4)(x + 2) = 0",
              "x = 4 or x = -2",
              "Sum of zeroes = 4 + (-2) = 2 = -(-2)/1 = -b/a ✓",
              "Product of zeroes = 4 × (-2) = -8 = -8/1 = c/a ✓",
            ],
            answer: "Zeroes are 4 and -2. Relationship verified.",
          },
          {
            id: "q2.2.2",
            number: "Q.1(ii)",
            question: "Find the zeroes of 4s² - 4s + 1 and verify the relationship.",
            solution: [
              "4s² - 4s + 1 = 0",
              "(2s - 1)² = 0",
              "s = 1/2 (repeated root)",
              "Sum of zeroes = 1/2 + 1/2 = 1 = -(-4)/4 = -b/a ✓",
              "Product of zeroes = 1/2 × 1/2 = 1/4 = 1/4 = c/a ✓",
            ],
            answer: "Zero is 1/2 (repeated). Relationship verified.",
          },
          {
            id: "q2.2.3",
            number: "Q.1(iii)",
            question: "Find the zeroes of 6x² - 3 - 7x and verify the relationship.",
            solution: [
              "Rearranging: 6x² - 7x - 3 = 0",
              "6x² - 9x + 2x - 3 = 0",
              "3x(2x - 3) + 1(2x - 3) = 0",
              "(3x + 1)(2x - 3) = 0",
              "x = -1/3 or x = 3/2",
              "Sum = -1/3 + 3/2 = 7/6 = -(-7)/6 = -b/a ✓",
              "Product = (-1/3)(3/2) = -1/2 = -3/6 = c/a ✓",
            ],
            answer: "Zeroes are -1/3 and 3/2. Relationship verified.",
          },
          {
            id: "q2.2.4",
            number: "Q.2",
            question: "Find a quadratic polynomial whose sum and product of zeroes are -1/4 and 1/4 respectively.",
            solution: [
              "Using formula: p(x) = k[x² - (sum)x + (product)]",
              "p(x) = k[x² - (-1/4)x + 1/4]",
              "p(x) = k[x² + x/4 + 1/4]",
              "Taking k = 4: p(x) = 4x² + x + 1",
            ],
            answer: "4x² + x + 1 (or any scalar multiple)",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex1",
        number: "Example 1",
        question: "Find the zeroes of x² + 7x + 10 and verify the relationship.",
        solution: [
          "x² + 7x + 10 = 0",
          "x² + 5x + 2x + 10 = 0",
          "(x + 5)(x + 2) = 0",
          "x = -5 or x = -2",
          "Sum of zeroes = -5 + (-2) = -7 = -7/1 = -b/a ✓",
          "Product of zeroes = (-5) × (-2) = 10 = 10/1 = c/a ✓",
        ],
        answer: "Zeroes are -5 and -2. Relationship verified.",
      },
      {
        id: "ex2",
        number: "Example 2",
        question: "Find a quadratic polynomial whose zeroes are 3 and -2.",
        solution: [
          "Sum of zeroes = 3 + (-2) = 1",
          "Product of zeroes = 3 × (-2) = -6",
          "Required polynomial: x² - (sum)x + (product)",
          "= x² - 1x + (-6)",
          "= x² - x - 6",
        ],
        answer: "x² - x - 6",
      },
      {
        id: "ex3",
        number: "Example 3",
        question: "Find the zeroes of p(x) = 2x² - 8x + 6.",
        solution: [
          "2x² - 8x + 6 = 0",
          "Dividing by 2: x² - 4x + 3 = 0",
          "x² - 3x - x + 3 = 0",
          "(x - 3)(x - 1) = 0",
          "x = 3 or x = 1",
          "Verification: Sum = 3 + 1 = 4 = -(-8)/2 = -b/a ✓",
          "Product = 3 × 1 = 3 = 6/2 = c/a ✓",
        ],
        answer: "Zeroes are 3 and 1.",
      },
    ],
    mcqs: [
      { id: "mcq1", question: "The number of zeroes of a cubic polynomial is at most:", options: ["1", "2", "3", "4"], correctAnswer: "c" },
      { id: "mcq2", question: "Sum of zeroes of x² - 5x + 6 is:", options: ["5", "-5", "6", "-6"], correctAnswer: "a" },
      { id: "mcq3", question: "Product of zeroes of 2x² - 8x + 6 is:", options: ["3", "4", "-4", "6"], correctAnswer: "a" },
      { id: "mcq4", question: "If α, β are zeroes of ax² + bx + c, then α + β equals:", options: ["-b/a", "b/a", "c/a", "-c/a"], correctAnswer: "a" },
      { id: "mcq5", question: "The graph of a quadratic polynomial is:", options: ["Line", "Parabola", "Circle", "Ellipse"], correctAnswer: "b" },
    ],
    summary: [
      "Polynomials of degrees 1, 2 and 3 are called linear, quadratic and cubic polynomials respectively.",
      "A quadratic polynomial is of the form ax² + bx + c, where a ≠ 0.",
      "Zeroes of a polynomial are x-coordinates where graph intersects x-axis.",
      "A quadratic polynomial can have at most 2 zeroes.",
      "For quadratic ax² + bx + c: Sum of zeroes = -b/a, Product of zeroes = c/a.",
    ],
  },

  "ch3-linear-equations": {
    id: "ch3-linear-equations",
    number: 3,
    title: "Pair of Linear Equations in Two Variables",
    introduction: "A linear equation in two variables represents a straight line when plotted on a graph. In this chapter, we will learn how to solve a pair of such equations using graphical and algebraic methods. These equations help us solve real-life problems involving two unknown quantities like cost-price, age, speed-distance, etc.",
    definitions: [
      { term: "Linear Equation", description: "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero." },
      { term: "Pair of Linear Equations", description: "Two linear equations in same two variables x and y." },
      { term: "Solution", description: "An ordered pair (x, y) that satisfies both equations simultaneously." },
      { term: "Consistent System", description: "A pair of equations that has at least one solution." },
      { term: "Inconsistent System", description: "A pair of equations that has no solution (parallel lines)." },
      { term: "Dependent System", description: "A pair of equations that has infinitely many solutions (coincident lines)." },
    ],
    keyPoints: [
      "A pair of linear equations can have: unique solution, no solution, or infinitely many solutions.",
      "If lines intersect → unique solution (consistent).",
      "If lines are parallel → no solution (inconsistent).",
      "If lines coincide → infinitely many solutions (dependent & consistent).",
      "Substitution method: Express one variable in terms of other, then substitute.",
      "Elimination method: Make coefficients equal, then add/subtract to eliminate one variable.",
      "Cross-multiplication is a quick formula-based method for solving.",
    ],
    formulas: [
      { name: "General Form", formula: "a₁x + b₁y + c₁ = 0, a₂x + b₂y + c₂ = 0" },
      { name: "Unique Solution (Intersecting)", formula: "a₁/a₂ ≠ b₁/b₂" },
      { name: "No Solution (Parallel)", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂" },
      { name: "Infinite Solutions (Coincident)", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      { name: "Cross-Multiplication", formula: "x/(b₁c₂ - b₂c₁) = y/(c₁a₂ - c₂a₁) = 1/(a₁b₂ - a₂b₁)" },
    ],
    crux: [
      "Step 1: First check the type of solution using ratios a₁/a₂, b₁/b₂, c₁/c₂.",
      "Step 2: Choose appropriate method - Graphical, Substitution, or Elimination.",
      "Step 3: Solve and find values of x and y.",
      "Step 4: Verify by substituting back in both original equations.",
    ],
    exercises: [
      {
        id: "ex3.1",
        name: "Exercise 3.1",
        questions: [
          {
            id: "q3.1.1",
            number: "Q.1(i)",
            question: "10 students took part in a quiz. If girls are 4 more than boys, find the number of boys and girls.",
            solution: [
              "Let boys = x, girls = y",
              "Equation 1: x + y = 10",
              "Equation 2: y = x + 4",
              "Substituting: x + (x + 4) = 10",
              "2x + 4 = 10",
              "2x = 6, x = 3",
              "y = 3 + 4 = 7",
            ],
            answer: "Boys = 3, Girls = 7",
          },
          {
            id: "q3.1.2",
            number: "Q.2",
            question: "Check graphically whether the pair x - 2y = 0 and 3x + 4y - 20 = 0 is consistent.",
            solution: [
              "For x - 2y = 0: When x = 0, y = 0; When x = 4, y = 2",
              "For 3x + 4y = 20: When x = 0, y = 5; When x = 4, y = 2",
              "Both lines pass through point (4, 2)",
              "Since lines intersect at one point, system is consistent.",
            ],
            answer: "Consistent with unique solution (4, 2)",
          },
        ],
      },
      {
        id: "ex3.2",
        name: "Exercise 3.2",
        questions: [
          {
            id: "q3.2.1",
            number: "Q.1(i)",
            question: "Solve by substitution method: x + y = 14, x - y = 4",
            solution: [
              "From equation 1: x = 14 - y",
              "Substituting in equation 2: (14 - y) - y = 4",
              "14 - 2y = 4",
              "2y = 10, y = 5",
              "x = 14 - 5 = 9",
            ],
            answer: "x = 9, y = 5",
          },
          {
            id: "q3.2.2",
            number: "Q.2(i)",
            question: "Solve by elimination method: x + y = 5, 2x - 3y = 4",
            solution: [
              "Multiply equation 1 by 3: 3x + 3y = 15",
              "Add to equation 2: 3x + 3y + 2x - 3y = 15 + 4",
              "5x = 19, x = 19/5",
              "From equation 1: y = 5 - 19/5 = 6/5",
            ],
            answer: "x = 19/5, y = 6/5",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex1",
        number: "Example 1",
        question: "Solve graphically: x + 3y = 6 and 2x - 3y = 12",
        solution: [
          "For x + 3y = 6:",
          "When x = 0, y = 2; When x = 6, y = 0",
          "For 2x - 3y = 12:",
          "When x = 0, y = -4; When x = 6, y = 0",
          "Both lines intersect at (6, 0)",
        ],
        answer: "x = 6, y = 0",
      },
      {
        id: "ex2",
        number: "Example 2",
        question: "Solve by elimination: 3x + 4y = 10 and 2x - 2y = 2",
        solution: [
          "Equation 1: 3x + 4y = 10",
          "Equation 2: 2x - 2y = 2 → x - y = 1 → y = x - 1",
          "Substituting in Equation 1: 3x + 4(x - 1) = 10",
          "3x + 4x - 4 = 10",
          "7x = 14, x = 2",
          "y = 2 - 1 = 1",
        ],
        answer: "x = 2, y = 1",
      },
      {
        id: "ex3",
        number: "Example 3",
        question: "Check whether the pair 2x + 3y = 11 and 2x - 4y = -24 is consistent.",
        solution: [
          "a₁ = 2, b₁ = 3, c₁ = -11",
          "a₂ = 2, b₂ = -4, c₂ = 24",
          "a₁/a₂ = 2/2 = 1",
          "b₁/b₂ = 3/(-4) = -3/4",
          "Since a₁/a₂ ≠ b₁/b₂, the lines intersect.",
          "Therefore, the system has a unique solution (consistent).",
        ],
        answer: "Consistent with unique solution.",
      },
    ],
    mcqs: [
      { id: "mcq1", question: "If a₁/a₂ ≠ b₁/b₂, the system has:", options: ["No solution", "Unique solution", "Infinite solutions", "None"], correctAnswer: "b" },
      { id: "mcq2", question: "Parallel lines represent:", options: ["Unique solution", "No solution", "Infinite solutions", "All of these"], correctAnswer: "b" },
      { id: "mcq3", question: "Coincident lines have:", options: ["No solution", "One solution", "Infinite solutions", "Two solutions"], correctAnswer: "c" },
      { id: "mcq4", question: "The graphical solution is the:", options: ["Point of origin", "Point of intersection", "Y-intercept", "X-intercept"], correctAnswer: "b" },
    ],
    summary: [
      "A pair of linear equations represents two straight lines on a graph.",
      "Unique solution when lines intersect (consistent).",
      "No solution when lines are parallel (inconsistent).",
      "Infinite solutions when lines coincide (dependent).",
      "Use substitution when one equation is simple.",
      "Use elimination when coefficients are easy to match.",
    ],
  },

  "ch4-quadratic-equations": {
    id: "ch4-quadratic-equations",
    number: 4,
    title: "Quadratic Equations",
    introduction: "A quadratic equation is a polynomial equation of degree 2. In this chapter, we will learn how to solve quadratic equations using different methods - factorisation, completing the square, and quadratic formula. We will also learn to determine the nature of roots using the discriminant. Quadratic equations have wide applications in real-life problems involving area, speed, age, and many more scenarios.",
    definitions: [
      { term: "Quadratic Equation", description: "An equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0." },
      { term: "Standard Form", description: "ax² + bx + c = 0 (terms arranged in descending order of degree)." },
      { term: "Roots/Zeroes", description: "Values of x that satisfy the quadratic equation." },
      { term: "Discriminant (D)", description: "The expression b² - 4ac that determines the nature of roots." },
      { term: "Factorisation", description: "Expressing the quadratic as a product of two linear factors." },
    ],
    keyPoints: [
      "A quadratic equation can have at most 2 roots.",
      "If a = 0, the equation becomes linear, not quadratic.",
      "The sum of roots = -b/a and product of roots = c/a.",
      "For real roots, the discriminant must be ≥ 0.",
      "When D > 0, roots are distinct; when D = 0, roots are equal; when D < 0, no real roots exist.",
      "Always verify answers by substituting back into the original equation.",
    ],
    formulas: [
      { name: "Standard Form", formula: "ax² + bx + c = 0 (a ≠ 0)" },
      { name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
      { name: "Discriminant", formula: "D = b² - 4ac" },
      { name: "Sum of Roots", formula: "α + β = -b/a" },
      { name: "Product of Roots", formula: "αβ = c/a" },
      { name: "(a + b)²", formula: "a² + 2ab + b²" },
      { name: "(a - b)²", formula: "a² - 2ab + b²" },
    ],
    crux: [
      "Step 1: Convert any given equation to standard form ax² + bx + c = 0.",
      "Step 2: Choose method - Factorisation (when factors are easy) or Quadratic Formula (general cases).",
      "Step 3: Check discriminant to know nature of roots before solving.",
      "Step 4: In word problems, reject negative/invalid values based on context.",
      "Step 5: Always verify your answer by substitution.",
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
              "Equation: x² + 2x + 1 = 2x - 6",
              "x² + 2x + 1 - 2x + 6 = 0",
              "x² + 7 = 0",
              "This is of form ax² + bx + c = 0 with a = 1, b = 0, c = 7",
            ],
            answer: "Yes, it is a quadratic equation.",
          },
          {
            id: "q4.1.2",
            number: "Q.1(ii)",
            question: "Check whether x² - 2x = (-2)(3 - x) is a quadratic equation.",
            solution: [
              "RHS = (-2)(3 - x) = -6 + 2x",
              "Equation: x² - 2x = -6 + 2x",
              "x² - 2x - 2x + 6 = 0",
              "x² - 4x + 6 = 0",
              "Here a = 1, b = -4, c = 6 and a ≠ 0",
            ],
            answer: "Yes, it is a quadratic equation.",
          },
        ],
      },
      {
        id: "ex4.2",
        name: "Exercise 4.2",
        questions: [
          {
            id: "q4.2.1",
            number: "Q.1(i)",
            question: "Solve by factorisation: x² - 3x - 10 = 0",
            solution: [
              "x² - 5x + 2x - 10 = 0",
              "x(x - 5) + 2(x - 5) = 0",
              "(x + 2)(x - 5) = 0",
              "x = -2 or x = 5",
            ],
            answer: "x = -2 or x = 5",
          },
          {
            id: "q4.2.2",
            number: "Q.1(ii)",
            question: "Solve by factorisation: 2x² + x - 6 = 0",
            solution: [
              "2x² + 4x - 3x - 6 = 0",
              "2x(x + 2) - 3(x + 2) = 0",
              "(2x - 3)(x + 2) = 0",
              "x = 3/2 or x = -2",
            ],
            answer: "x = 3/2 or x = -2",
          },
        ],
      },
      {
        id: "ex4.3",
        name: "Exercise 4.3",
        questions: [
          {
            id: "q4.3.1",
            number: "Q.1",
            question: "Find the nature of roots of 2x² - 3x + 5 = 0.",
            solution: [
              "a = 2, b = -3, c = 5",
              "D = b² - 4ac = (-3)² - 4(2)(5)",
              "D = 9 - 40 = -31",
              "Since D < 0, no real roots exist.",
            ],
            answer: "No real roots (D < 0)",
          },
          {
            id: "q4.3.2",
            number: "Q.2",
            question: "Find the nature of roots of 3x² - 4√3x + 4 = 0.",
            solution: [
              "a = 3, b = -4√3, c = 4",
              "D = b² - 4ac = (-4√3)² - 4(3)(4)",
              "D = 48 - 48 = 0",
              "Since D = 0, roots are real and equal.",
            ],
            answer: "Real and equal roots (D = 0)",
          },
        ],
      },
    ],
    examples: [
      {
        id: "ex1",
        number: "Example 1",
        question: "Solve x² + 5x + 6 = 0 by factorisation.",
        solution: [
          "x² + 5x + 6 = 0",
          "We need factors of 6 that add up to 5: 2 and 3",
          "x² + 2x + 3x + 6 = 0",
          "x(x + 2) + 3(x + 2) = 0",
          "(x + 3)(x + 2) = 0",
          "x = -3 or x = -2",
        ],
        answer: "x = -3 or x = -2",
      },
      {
        id: "ex2",
        number: "Example 2",
        question: "Solve 2x² - 5x + 3 = 0 using quadratic formula.",
        solution: [
          "Here a = 2, b = -5, c = 3",
          "D = b² - 4ac = 25 - 24 = 1",
          "x = (-b ± √D) / 2a",
          "x = (5 ± √1) / 4",
          "x = (5 + 1)/4 = 6/4 = 3/2",
          "x = (5 - 1)/4 = 4/4 = 1",
        ],
        answer: "x = 3/2 or x = 1",
      },
      {
        id: "ex3",
        number: "Example 3",
        question: "Find the nature of roots of x² - 4x + 5 = 0.",
        solution: [
          "a = 1, b = -4, c = 5",
          "D = b² - 4ac = 16 - 20 = -4",
          "Since D < 0, no real roots exist.",
          "The roots are imaginary/complex.",
        ],
        answer: "No real roots (imaginary roots)",
      },
      {
        id: "ex4",
        number: "Example 4",
        question: "Find two consecutive positive integers whose sum of squares is 365.",
        solution: [
          "Let the integers be x and x + 1",
          "x² + (x + 1)² = 365",
          "x² + x² + 2x + 1 = 365",
          "2x² + 2x + 1 = 365",
          "2x² + 2x - 364 = 0",
          "x² + x - 182 = 0",
          "(x + 14)(x - 13) = 0",
          "x = 13 (rejecting negative value)",
        ],
        answer: "The integers are 13 and 14.",
      },
    ],
    mcqs: [
      { id: "mcq1", question: "If D > 0, the roots are:", options: ["Equal", "Distinct", "Imaginary", "None"], correctAnswer: "b" },
      { id: "mcq2", question: "If D = 0, the roots are:", options: ["Distinct", "Equal", "Imaginary", "Irrational"], correctAnswer: "b" },
      { id: "mcq3", question: "Sum of roots of ax² + bx + c = 0 is:", options: ["-b/a", "b/a", "c/a", "-c/a"], correctAnswer: "a" },
      { id: "mcq4", question: "The quadratic formula gives:", options: ["One root", "Two roots", "Three roots", "No root"], correctAnswer: "b" },
      { id: "mcq5", question: "Discriminant of x² - 4x + 4 = 0 is:", options: ["0", "8", "16", "-8"], correctAnswer: "a" },
    ],
    summary: [
      "Standard form: ax² + bx + c = 0 where a ≠ 0.",
      "Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.",
      "Discriminant D = b² - 4ac determines nature of roots.",
      "D > 0: Two distinct real roots.",
      "D = 0: Two equal real roots.",
      "D < 0: No real roots.",
      "Sum of roots = -b/a, Product of roots = c/a.",
    ],
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}

export function isChapterAvailable(chapterId: string): boolean {
  return chapterId in chapterContents;
}
