import { ChapterHTMLs } from "./chapterHTMLs";

export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }

export const chapterContents: Record<string, ChapterContent> = {
  "ch1-real-numbers": {
    id: "ch1-real-numbers",
    number: 1,
    title: "Real Numbers",
    introduction: "We begin our study of numbers by revisiting the system of Real Numbers. Real numbers include all the rational numbers (like 1/2, 0, -5) and irrational numbers (like √2, π) that we can represent on a number line. In this chapter, we will deepen our understanding of these numbers through two important properties: the Fundamental Theorem of Arithmetic and the concept of Irrationality.",
    definitions: [{ "term": "Algorithm", "description": "A series of well-defined steps which gives a procedure for solving a type of problem." }, { "term": "Lemma", "description": "A proven statement used for proving another statement." }, { "term": "Prime Number", "description": "A number greater than 1 with exactly two factors: 1 and itself." }, { "term": "Composite Number", "description": "A number that has more than two factors." }, { "term": "Co-prime Numbers", "description": "Two numbers whose HCF is 1." }, { "term": "Rational Number", "description": "Any number that can be expressed in the form p/q, where p and q are integers and q ≠ 0." }, { "term": "Irrational Number", "description": "A number that cannot be expressed in the form p/q, where p and q are integers and q ≠ 0 (e.g., √2, π)." }],
    keyPoints: ["Every composite number can be written as a product of primes, and this decomposition is unique.", "Irrational numbers are those which cannot be written in the form p/q.", "If a number has a decimal expansion that is non-terminating and non-recurring, it is irrational.", "HCF is the product of the smallest power of each common prime factor.", "LCM is the product of the greatest power of each prime factor."],
    formulas: [{ "name": "Formula", "formula": "HCF(a, b) × LCM(a, b) = a × b" }, { "name": "Formula", "formula": "If a prime p divides a², then p divides a." }],
    crux: ["This chapter explores the world of real numbers, focusing on integers, rational numbers, and irrational numbers. The core idea is to understand the fundamental building blocks of numbers through prime factorization and to rigorously prove why numbers like √2 and √3 cannot be expressed as simple fractions.", "Two main pillars of this chapter are:", "The Fundamental Theorem of Arithmetic: Any composite number can be uniquely broken down into prime factors.", "Revisiting Irrational Numbers: Using contradiction to prove a number is irrational."],
    summary: ["In this chapter, we learned that every composite number can be expressed as a product of primes in a unique way. We used this property to find the LCM and HCF of integers. We also proved that numbers like √2, √3 are irrational by assuming the opposite and finding a contradiction (that common factors exist where they shouldn't). Finally, we saw that the sum or product of a rational and irrational number is always irrational."],
    exercises: [{ "id": "ex1.1", "name": "Exercise 1", "questions": [{ "id": "ch1-real-numbers_ex1_q1", "number": "1(i)", "question": "Express each number as a product of its prime factors:\n(i) 140", "solution": ["Prime factorization of 140:", "140 = 2 × 70", "= 2 × 2 × 35", "= 2 × 2 × 5 × 7"], "answer": "140 = 2² × 5 × 7" }, { "id": "ch1-real-numbers_ex1_q2", "number": "1(ii)", "question": "Express each number as a product of its prime factors:\n(ii) 156", "solution": ["Prime factorization of 156:", "156 = 2 × 78", "= 2 × 2 × 39", "= 2 × 2 × 3 × 13"], "answer": "156 = 2² × 3 × 13" }, { "id": "ch1-real-numbers_ex1_q3", "number": "1(iii)", "question": "Express each number as a product of its prime factors:\n(iii) 3825", "solution": ["Prime factorization of 3825:", "3825 = 3 × 1275", "= 3 × 3 × 425", "= 3 × 3 × 5 × 85", "= 3 × 3 × 5 × 5 × 17"], "answer": "3825 = 3² × 5² × 17" }, { "id": "ch1-real-numbers_ex1_q4", "number": "1(iv)", "question": "Express each number as a product of its prime factors:\n(iv) 5005", "solution": ["Prime factorization of 5005:", "5005 = 5 × 1001", "= 5 × 7 × 143", "= 5 × 7 × 11 × 13"], "answer": "5005 = 5 × 7 × 11 × 13" }, { "id": "ch1-real-numbers_ex1_q5", "number": "1(v)", "question": "Express each number as a product of its prime factors:\n(v) 7429", "solution": ["Prime factorization of 7429:", "7429 = 17 × 437", "= 17 × 19 × 23"], "answer": "7429 = 17 × 19 × 23" }, { "id": "ch1-real-numbers_ex1_q6", "number": "2(i)", "question": "Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF = product of the two numbers.\n(i) 26 and 91", "solution": ["Prime factorization:", "26 = 2 × 13", "91 = 7 × 13", "HCF = Product of smallest power of each common prime factor = 13", "LCM = Product of greatest power of each prime factor = 2 × 7 × 13 = 182", "LHS = LCM × HCF = 182 × 13 = 2366", "RHS = Product = 26 × 91 = 2366"], "answer": "LHS = RHS. Hence Verified." }, { "id": "ch1-real-numbers_ex1_q7", "number": "2(ii)", "question": "Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF = product of the two numbers.\n(ii) 510 and 92", "solution": ["510 = 2 × 3 × 5 × 17", "92 = 2 × 2 × 23 = 2² × 23", "HCF = 2", "LCM = 2² × 3 × 5 × 17 × 23 = 23460", "LHS = LCM × HCF = 23460 × 2 = 46920", "RHS = Product = 510 × 92 = 46920"], "answer": "LHS = RHS. Hence Verified." }, { "id": "ch1-real-numbers_ex1_q8", "number": "2(iii)", "question": "Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF = product of the two numbers.\n(iii) 336 and 54", "solution": ["336 = 2 × 2 × 2 × 2 × 3 × 7 = 2⁴ × 3 × 7", "54 = 2 × 3 × 3 × 3 = 2 × 3³", "HCF = 2 × 3 = 6", "LCM = 2⁴ × 3³ × 7 = 3024", "LHS = LCM × HCF = 3024 × 6 = 18144", "RHS = Product = 336 × 54 = 18144"], "answer": "LHS = RHS. Hence Verified." }, { "id": "ch1-real-numbers_ex1_q9", "number": "3(i)", "question": "Find the LCM and HCF of the following integers by applying the prime factorisation method.\n(i) 12, 15 and 21", "solution": ["12 = 2 × 2 × 3 = 2² × 3", "15 = 3 × 5", "21 = 3 × 7", "HCF = 3 (Common factor)", "LCM = 2² × 3 × 5 × 7 = 420"], "answer": "HCF = 3, LCM = 420" }, { "id": "ch1-real-numbers_ex1_q10", "number": "3(ii)", "question": "Find the LCM and HCF of the following integers by applying the prime factorisation method.\n(ii) 17, 23 and 29", "solution": ["17, 23, and 29 are prime numbers.", "17 = 1 × 17", "23 = 1 × 23", "29 = 1 × 29", "HCF = 1", "LCM = 17 × 23 × 29 = 11339"], "answer": "HCF = 1, LCM = 11339" }, { "id": "ch1-real-numbers_ex1_q11", "number": "3(iii)", "question": "Find the LCM and HCF of the following integers by applying the prime factorisation method.\n(iii) 8, 9 and 25", "solution": ["8 = 2 × 2 × 2 = 2³", "9 = 3 × 3 = 3²", "25 = 5 × 5 = 5²", "No common prime factor.", "HCF = 1", "LCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800"], "answer": "HCF = 1, LCM = 1800" }, { "id": "ch1-real-numbers_ex1_q12", "number": "4", "question": "Given that HCF (306, 657) = 9, find LCM (306, 657).", "solution": ["HCF (306, 657) = 9", "First number (a) = 306", "Second number (b) = 657", "LCM (306, 657)", "LCM × 9 = 306 × 657", "LCM = 306 × 6579", "LCM = 34 × 657", "LCM = 22338"], "answer": "LCM (306, 657) = 22338" }, { "id": "ch1-real-numbers_ex1_q13", "number": "5", "question": "Check whether 6ⁿ can end with the digit 0 for any natural number n.", "solution": ["If a number ends with digit 0, it must be divisible by 10.", "This means it must be divisible by both 2 and 5.", "The prime factors of 6ⁿ are 2 and 3.", "For the number to end with 0, it must contain the prime factor 5.", "However, 5 is not present in the prime factorization of 6ⁿ.", "By the Fundamental Theorem of Arithmetic, the uniqueness of prime factorization guarantees that there are no other primes in the factorization of 6ⁿ."], "answer": "Therefore, there is no natural number n for which 6ⁿ ends with the digit 0." }, { "id": "ch1-real-numbers_ex1_q14", "number": "6", "question": "Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.", "solution": ["A composite number is a number that has factors other than 1 and itself.", "Part 1: 7 × 11 × 13 + 13", "Taking 13 common:", "= 13 × (7 × 11 + 1)", "= 13 × (77 + 1)", "= 13 × 78", "Since this expression has 13 and 78 as factors, it is a composite number.", "Part 2: 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5", "Taking 5 common:", "= 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1)", "= 5 × (1008 + 1)", "= 5 × 1009", "Since this expression has 5 and 1009 as factors, it is a composite number."], "answer": "Hence, both expressions represent composite numbers." }, { "id": "ch1-real-numbers_ex1_q15", "number": "7", "question": "There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time, and go in the same direction. After how many minutes will they meet again at the starting point?", "solution": ["Time taken by Sonia = 18 minutes", "Time taken by Ravi = 12 minutes", "Time when they meet again at the starting point.", "They will meet again at the starting point after a time that is a common multiple of both 18 and 12.", "Specifically, we need to find the Least Common Multiple (LCM) of 18 and 12.", "Prime factorization:", "18 = 2 × 3 × 3 = 2 × 3²", "12 = 2 × 2 × 3 = 2² × 3", "LCM(18, 12) = 2² × 3²", "= 4 × 9", "= 36"], "answer": "Therefore, Sonia and Ravi will meet again at the starting point after 36 minutes." }] }, { "id": "ex1.2", "name": "Exercise 2", "questions": [{ "id": "ch1-real-numbers_ex2_q1", "number": "1", "question": "Prove that √5 is irrational.", "solution": ["Assume to the contrary that √5 is rational.", "So, we can find co-prime integers a and b (where b ≠ 0) such that:", "√5 = ab", "Squaring both sides and rearranging: 5b² = a² ... (Equation 1)", "This means 5 divides a².", "Therefore, 5 divides a (by Theorem 1.3).", "So, we can write a = 5c for some integer c.", "Substituting a = 5c in Equation 1:", "5b² = (5c)² ⇒ 5b² = 25c²", "Dividing by 5: b² = 5c²", "This implies 5 divides b², so 5 divides b.", "Conclusion: a and b have at least 5 as a common factor.", "But this contradicts the fact that a and b have no common factor other than 1 (they are co-prime).", "This contradiction arose because of our incorrect assumption."], "answer": "Hence, √5 is irrational." }, { "id": "ch1-real-numbers_ex2_q2", "number": "2", "question": "Prove that 3 + 2√5 is irrational.", "solution": ["Assume that 3 + 2√5 is rational.", "Then we can find co-prime integers a and b (b ≠ 0) such that:", "3 + 2√5 = ab", "Rearranging to isolate √5:", "2√5 = ab - 3", "2√5 = a - 3bb", "Since a and b are integers, a - 3b2b is a rational number.", "This implies that √5 is also rational.", "But we know that √5 is irrational.", "This contradiction implies our assumption was wrong."], "answer": "Hence, 3 + 2√5 is irrational." }, { "id": "ch1-real-numbers_ex2_q3", "number": "3(1)", "question": "Prove that the following are irrationals:\n(1) ", "solution": ["Assume 1√2 is rational.", "So, 1√2 = ab, where a, b are co-prime integers.", "Taking reciprocal on both sides:", "√2 = ba", "Since a and b are integers, ba is rational.", "This implies √2 is rational, which contradicts the fact that √2 is irrational."], "answer": "Hence, 1√2 is irrational." }, { "id": "ch1-real-numbers_ex2_q4", "number": "3(ii)", "question": "Prove that the following are irrationals:\n(ii) 7√5", "solution": ["Assume 7√5 is rational.", "So, 7√5 = ab, where a, b are integers.", "Rearranging to isolate √5:", "√5 = a7b", "Since a and b are integers, the RHS is rational.", "But this contradicts the fact that √5 is irrational."], "answer": "Hence, 7√5 is irrational." }, { "id": "ch1-real-numbers_ex2_q5", "number": "3(iii)", "question": "Prove that the following are irrationals:\n(iii) 6 + √2", "solution": ["Assume 6 + √2 is rational.", "So, 6 + √2 = ab.", "Rearranging terms:", "√2 = ab - 6", "Since a, b are integers, the RHS is rational.", "But √2 is irrational. This is a contradiction."], "answer": "Hence, 6 + √2 is irrational." }] }],
    examples: [{ "id": "ch1-real-numbers_eg1", "number": "Example 1", "question": ". Check whether 4ⁿ can end with the digit 0 for any natural number n.", "solution": ["For any number to end with the digit 0, it must be divisible by 10.", "This implies that its prime factorization must include the prime numbers 2 and 5.", "The prime factorization of 4ⁿ contains only the prime 2.", "There is no factor 5 in it.", "The Fundamental Theorem of Arithmetic guarantees the uniqueness of this factorization.", "So, there is no natural number n for which 4ⁿ ends with the digit 0."], "answer": "Hence, 4ⁿ cannot end with digit 0." }, { "id": "ch1-real-numbers_eg2", "number": "Example 2", "question": ". Find the LCM and HCF of 6 and 20 by the prime factorisation method.", "solution": ["Prime factorization:", "6 = 2 × 3", "20 = 2 × 2 × 5 = 2² × 5", "To find HCF:", "The common prime factor is 2.", "The smallest power of the common factor 2 is 2¹.", "To find LCM:", "The prime factors involved are 2, 3, and 5.", "The greatest power of each prime factor involved:", "2² (for 2), 3¹ (for 3), 5¹ (for 5)."], "answer": "HCF(6, 20) = 2, LCM(6, 20) = 60" }, { "id": "ch1-real-numbers_eg3", "number": "Example 3", "question": ". Find the HCF of 96 and 404 by the prime factorisation method. Hence, find their LCM.", "solution": ["Prime factorization:", "96 = 2 × 2 × 2 × 2 × 2 × 3 = 2⁵ × 3", "404 = 2 × 2 × 101 = 2² × 101", "The common prime factor is 2. The smallest power is 2².", "HCF(96, 404) = 2² = 4", "We know the relationship:", "LCM × 4 = 96 × 404", "LCM = 96 × 4044", "LCM = 24 × 404", "LCM = 9696"], "answer": "HCF = 4, LCM = 9696" }, { "id": "ch1-real-numbers_eg4", "number": "Example 4", "question": ". Find the HCF and LCM of 6, 72 and 120, using the prime factorisation method.", "solution": ["Prime factorization:", "6 = 2 × 3", "72 = 2³ × 3²", "120 = 2³ × 3 × 5", "HCF: Common factors are 2 and 3. Smallest powers are 2¹ and 3¹.", "LCM: Greatest powers are 2³, 3² and 5¹."], "answer": "HCF = 6, LCM = 360" }, { "id": "ch1-real-numbers_eg5", "number": "Example 5", "question": ". Prove that √3 is irrational.", "solution": ["Let us assume, to the contrary, that √3 is rational.", "Therefore, we can find integers a and b (b ≠ 0) such that:", "√3 = ab", "Assume a and b are co-prime.", "Squaring both sides:", "3b² = a²", "Therefore, 3 divides a².", "So, 3 divides a.", "Let a = 3c for some integer c.", "substituting a = 3c, we get:", "3b² = (3c)² = 9c²", "b² = 3c²", "This means 3 divides b², and so 3 divides b.", "Thus, a and b have at least 3 as a common factor.", "But this contradicts the fact that a and b are co-prime.", "This contradiction arises because of our incorrect assumption that √3 is rational."], "answer": "Hence, √3 is irrational." }, { "id": "ch1-real-numbers_eg6", "number": "Example 6", "question": ". Show that 5 - √3 is irrational.", "solution": ["Let us assume that 5 - √3 is rational.", "So we can write:", "5 - √3 = ab (where a, b are co-prime integers, b ≠ 0)", "Rearranging to isolate √3:", "5 - ab = √3", "√3 = 5b - ab", "Since a and b are integers, the RHS 5b - ab is rational.", "This implies √3 is rational.", "But this contradicts the fact that √3 is irrational."], "answer": "Hence, 5 - √3 is irrational." }, { "id": "ch1-real-numbers_eg7", "number": "Example 7", "question": ". Show that 3√2 is irrational.", "solution": ["Let us assume that 3√2 is rational.", "So we can find co-prime integers a and b (b ≠ 0) such that:", "3√2 = ab", "Rearranging:", "√2 = a3b", "Since 3, a, and b are integers, a3b is rational.", "This implies √2 is rational.", "But this contradicts the fact that √2 is irrational."], "answer": "Hence, 3√2 is irrational." }],
    mcqs: [{ "id": "ch1-real-numbers_mcq1", "question": "The HCF of 96 and 404 is:", "options": ["4", "2", "8", "12"], "correctAnswer": "a" }, { "id": "ch1-real-numbers_mcq2", "question": "If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:", "options": ["xy", "xy²", "x³y³", "x²y²"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq3", "question": "The LCM of the smallest two-digit composite number and the smallest composite number is:", "options": ["12", "20", "4", "44"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq4", "question": "For any two positive integers a and b, HCF(a, b) × LCM(a, b) =", "options": ["a + b", "a - b", "a × b", "a / b"], "correctAnswer": "c" }, { "id": "ch1-real-numbers_mcq5", "question": "√2 is:", "options": ["A rational number", "An irrational number", "A natural number", "A whole number"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq6", "question": "7 × 11 × 13 + 13 is:", "options": ["A prime number", "A composite number", "An irrational number", "None of these"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq7", "question": "The HCF of two co-prime numbers is:", "options": ["0", "1", "The smaller number", "The larger number"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq8", "question": "If p is a prime number, then √p is:", "options": ["Rational", "Irrational", "Natural number", "Composite number"], "correctAnswer": "b" }, { "id": "ch1-real-numbers_mcq9", "question": "The product of a non-zero rational and an irrational number is:", "options": ["Always irrational", "Always rational", "Rational or irrational", "One"], "correctAnswer": "a" }, { "id": "ch1-real-numbers_mcq10", "question": "The LCM of 12, 15 and 21 is:", "options": ["60", "84", "420", "180"], "correctAnswer": "c" }],
    theorems: [],
  },
  "ch2-polynomials": {
    id: "ch2-polynomials",
    number: 2,
    title: "Polynomials",
    introduction: "We encounter polynomials in various fields of mathematics and science to model real-world phenomena. In this chapter, we explore the geometrical meaning of zeroes of a polynomial and the relationship between zeroes and coefficients. This forms the foundation for algebra and calculus.",
    definitions: [{ "term": "Polynomial", "description": "An algebraic expression with variables having non-negative integer exponents." }, { "term": "Degree", "description": "The highest power of the variable in the polynomial." }, { "term": "Linear Polynomial", "description": "A polynomial of degree 1 (e.g., 2x - 3)." }, { "term": "Quadratic Polynomial", "description": "A polynomial of degree 2 (e.g., x² + 5x + 6)." }, { "term": "Cubic Polynomial", "description": "A polynomial of degree 3." }, { "term": "Zero of a Polynomial", "description": "A real number k is a zero of p(x) if p(k) = 0. Geometrically, it is the x-intercept." }],
    keyPoints: ["A polynomial of degree n can have at most n zeroes.", "The graph of a linear polynomial (degree 1) is a straight line.", "The graph of a quadratic polynomial (degree 2) is a parabola opening upwards (a > 0) or downwards (a < 0).", "A quadratic polynomial can intersect the X-axis at at most 2 points."],
    formulas: [{ "name": "Formula", "formula": "ax² + bx + c (where a ≠ 0)" }, { "name": "Formula", "formula": "Sum of zeroes (α + β) = -b / a" }, { "name": "Formula", "formula": "Product of zeroes (αβ) = c / a" }, { "name": "Formula", "formula": "k [ x² - (Sum)x + (Product) ]" }, { "name": "Formula", "formula": "k [ x² - (α+β)x + αβ ]" }],
    crux: ["The core essence of this chapter lies in understanding two things:", "Geometrical Meaning: Zeroes of a polynomial p(x) are simply the x-coordinates where the graph of y = p(x) crosses the X-axis.", "Algebraic Relationship: There is a direct link between the sum and product of zeroes and the coefficients of the polynomial."],
    summary: ["In this chapter, we learned that the zeroes of a polynomial are the points where its graph cuts the x-axis. We established that a quadratic polynomial has at most 2 zeroes. Most importantly, we derived the relationship between the zeroes (roots) and the coefficients, allowing us to build polynomials if we know their roots, or check the validity of roots without plugging them in directly."],
    exercises: [{ "id": "ex2.1", "name": "Exercise 1", "questions": [{ "id": "ch2-polynomials_ex1_q1", "number": "1(i)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(i) Graph 1", "solution": ["The graph is parallel to the x-axis and does not intersect it at any point."], "answer": "Number of zeroes = 0", "image": "graph_ex2_1_q1_a" }, { "id": "ch2-polynomials_ex1_q2", "number": "1(ii)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(ii) Graph 2", "solution": ["The graph intersects the x-axis at exactly 1 point."], "answer": "Number of zeroes = 1", "image": "graph_ex2_1_q1_b" }, { "id": "ch2-polynomials_ex1_q3", "number": "1(iii)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(iii) Graph 3", "solution": ["The graph intersects the x-axis at 3 distinct points."], "answer": "Number of zeroes = 3", "image": "graph_ex2_1_q1_c" }, { "id": "ch2-polynomials_ex1_q4", "number": "1(iv)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(iv) Graph 4", "solution": ["The graph intersects the x-axis at 2 distinct points."], "answer": "Number of zeroes = 2", "image": "graph_ex2_1_q1_d" }, { "id": "ch2-polynomials_ex1_q5", "number": "1(v)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(v) Graph 5", "solution": ["The graph intersects the x-axis at 4 distinct points."], "answer": "Number of zeroes = 4", "image": "graph_ex2_1_q1_e" }, { "id": "ch2-polynomials_ex1_q6", "number": "1(vi)", "question": "The graphs of y = p(x) are given in Fig. 2.10 below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.\n(vi) Graph 6", "solution": ["The graph intersects (touches) the x-axis at 3 points."], "answer": "Number of zeroes = 3", "image": "graph_ex2_1_q1_f" }] }, { "id": "ex2.2", "name": "Exercise 2", "questions": [{ "id": "ch2-polynomials_ex2_q1", "number": "1(i)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(i) x² - 2x - 8", "solution": ["Split middle term -2x as -4x + 2x:", "x² - 4x + 2x - 8 = 0", "x(x - 4) + 2(x - 4) = 0", "(x - 4)(x + 2) = 0", "So, x = 4 or x = -2", "Here a=1, b=-2, c=-8", "Sum: 4 + (-2) = 2. Formula: -b/a = -(-2)/1 = 2. (Verified)", "Product: 4 × (-2) = -8. Formula: c/a = -8/1 = -8. (Verified)"], "answer": "Zeroes are 4 and -2." }, { "id": "ch2-polynomials_ex2_q2", "number": "1(ii)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(ii) 4s² - 4s + 1", "solution": ["Split -4s as -2s - 2s:", "4s² - 2s - 2s + 1 = 0", "2s(2s - 1) - 1(2s - 1) = 0", "(2s - 1)(2s - 1) = 0", "Here a=4, b=-4, c=1", "Sum: 1/2 + 1/2 = 1. Formula: -b/a = -(-4)/4 = 1. (Verified)", "Product: 1/2 × 1/2 = 1/4. Formula: c/a = 1/4. (Verified)"], "answer": "Zeroes are 1/2 and 1/2." }, { "id": "ch2-polynomials_ex2_q3", "number": "1(iii)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(iii) 6x² - 3 - 7x", "solution": ["Rearrange: 6x² - 7x - 3 = 0", "Split -7x as -9x + 2x:", "6x² - 9x + 2x - 3 = 0", "3x(2x - 3) + 1(2x - 3) = 0", "(2x - 3)(3x + 1) = 0", "Here a=6, b=-7, c=-3", "Sum: 3/2 + (-1/3) = 7/6. Formula: -b/a = -(-7)/6 = 7/6. (Verified)", "Product: 3/2 × (-1/3) = -3/6 = -1/2. Formula: c/a = -3/6 = -1/2. (Verified)"], "answer": "Zeroes are 3/2 and -1/3." }, { "id": "ch2-polynomials_ex2_q4", "number": "1(iv)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(iv) 4u² + 8u", "solution": ["Take 4u common:", "4u(u + 2) = 0", "4u = 0 ⇒ u = 0", "u + 2 = 0 ⇒ u = -2", "Here a=4, b=8, c=0", "Sum: 0 + (-2) = -2. Formula: -b/a = -8/4 = -2. (Verified)", "Product: 0 × (-2) = 0. Formula: c/a = 0/4 = 0. (Verified)"], "answer": "Zeroes are 0 and -2." }, { "id": "ch2-polynomials_ex2_q5", "number": "1(v)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(v) t² - 15", "solution": ["Use a² - b² = (a-b)(a+b):", "t² - (√15)² = 0", "(t - √15)(t + √15) = 0", "Here a=1, b=0, c=-15", "Sum: √15 - √15 = 0. Formula: -b/a = 0. (Verified)", "Product: √15 × (-√15) = -15. Formula: c/a = -15/1 = -15. (Verified)"], "answer": "Zeroes are √15 and -√15." }, { "id": "ch2-polynomials_ex2_q6", "number": "1(vi)", "question": "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.\n(vi) 3x² - x - 4", "solution": ["Split -x as -4x + 3x:", "3x² - 4x + 3x - 4 = 0", "x(3x - 4) + 1(3x - 4) = 0", "(3x - 4)(x + 1) = 0", "Here a=3, b=-1, c=-4", "Sum: 4/3 + (-1) = 1/3. Formula: -b/a = -(-1)/3 = 1/3. (Verified)", "Product: 4/3 × (-1) = -4/3. Formula: c/a = -4/3. (Verified)"], "answer": "Zeroes are 4/3 and -1." }, { "id": "ch2-polynomials_ex2_q7", "number": "2(i)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(i) 1/4, -1", "solution": ["Sum = 1/4, Product = -1", "Polynomial = k[x² - (1/4)x + (-1)]", "For k=4: 4(x² - x/4 - 1)"], "answer": "4x² - x - 4" }, { "id": "ch2-polynomials_ex2_q8", "number": "2(ii)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(ii) √2, 1/3", "solution": ["Sum = √2, Product = 1/3", "Polynomial = k[x² - √2x + 1/3]", "For k=3: 3(x² - √2x + 1/3)"], "answer": "3x² - 3√2x + 1" }, { "id": "ch2-polynomials_ex2_q9", "number": "2(iii)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(iii) 0, √5", "solution": ["Sum = 0, Product = √5", "Polynomial = x² - (0)x + √5"], "answer": "x² + √5" }, { "id": "ch2-polynomials_ex2_q10", "number": "2(iv)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(iv) 1, 1", "solution": ["Sum = 1, Product = 1", "Polynomial = x² - 1x + 1"], "answer": "x² - x + 1" }, { "id": "ch2-polynomials_ex2_q11", "number": "2(v)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(v) -1/4, 1/4", "solution": ["Sum = -1/4, Product = 1/4", "Polynomial = k[x² - (-1/4)x + 1/4]", "For k=4: 4(x² + x/4 + 1/4)"], "answer": "4x² + x + 1" }, { "id": "ch2-polynomials_ex2_q12", "number": "2(vi)", "question": "Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.\n(vi) 4, 1", "solution": ["Sum = 4, Product = 1", "Polynomial = x² - 4x + 1"], "answer": "x² - 4x + 1" }] }],
    examples: [{ "id": "ch2-polynomials_eg1", "number": "Example 1", "question": ". Look at the graphs in the figure given below. Each is the graph of y = p(x), where p(x) is a polynomial. For each of the graphs, find the number of zeroes of p(x).", "solution": ["(i) The graph does not intersect the x-axis.", "Number of zeroes = 0", "(ii) The graph intersects the x-axis at exactly 1 point.", "Number of zeroes = 1", "(iii) The graph intersects the x-axis at 3 points.", "Number of zeroes = 3", "(iv) The graph intersects the x-axis at 2 points.", "Number of zeroes = 2", "(v) The graph intersects the x-axis at 4 points.", "Number of zeroes = 4", "(vi) The graph intersects the x-axis at 3 points.", "Number of zeroes = 3"], "answer": "Refer to Solution" }, { "id": "ch2-polynomials_eg2", "number": "Example 2", "question": ". Find the zeroes of the quadratic polynomial x² + 7x + 10, and verify the relationship between the zeroes and the coefficients.", "solution": ["Let p(x) = x² + 7x + 10", "To find zeroes, put p(x) = 0", "By splitting the middle term:", "x² + 2x + 5x + 10 = 0", "x(x + 2) + 5(x + 2) = 0", "(x + 2)(x + 5) = 0", "x + 2 = 0 OR x + 5 = 0", "x = -2 OR x = -5", "Comparing with ax² + bx + c: a = 1, b = 7, c = 10", "Sum of zeroes:", "α + β = -2 + (-5) = -7", "Matches.", "Product of zeroes:", "α × β = (-2) × (-5) = 10", "Matches."], "answer": "Zeroes are α = -2 and β = -5." }, { "id": "ch2-polynomials_eg3", "number": "Example 3", "question": ". Find the zeroes of the polynomial x² - 3 and verify the relationship between the zeroes and the coefficients.", "solution": ["Let p(x) = x² - 3", "To find zeroes, put p(x) = 0", "x² - 3 = 0", "x² - (√3)² = 0", "(x - √3)(x + √3) = 0", "x - √3 = 0 OR x + √3 = 0", "x = √3 OR x = -√3", "Comparing with ax² + bx + c: a = 1, b = 0 (no x term), c = -3", "Sum of zeroes:", "α + β = √3 + (-√3) = 0", "Product of zeroes:", "α × β = √3 × (-√3) = -3"], "answer": "Zeroes are α = √3 and β = -√3." }, { "id": "ch2-polynomials_eg4", "number": "Example 4", "question": ". Find a quadratic polynomial, the sum and product of whose zeroes are -3 and 2, respectively.", "solution": ["Given:", "Sum of zeroes (S) = -3", "Product of zeroes (P) = 2", "A quadratic polynomial is given by:", "p(x) = k[x² - (-3)x + 2]", "p(x) = k[x² + 3x + 2]", "For k = 1, the polynomial is:"], "answer": "x² + 3x + 2" }, { "id": "ch2-polynomials_eg5", "number": "Example 5", "question": ". Verify that 3, -1, -⅓ are the zeroes of the cubic polynomial p(x) = 3x³ - 5x² - 11x - 3, and then verify the relationship between the zeroes and the coefficients.", "solution": ["Given polynomial: p(x) = 3x³ - 5x² - 11x - 3", "Checking 3:", "p(3) = 3(3)³ - 5(3)² - 11(3) - 3", "= 3(27) - 5(9) - 33 - 3", "= 81 - 45 - 36", "= 81 - 81 = 0", "Checking -1:", "p(-1) = 3(-1)³ - 5(-1)² - 11(-1) - 3", "= -3 - 5 + 11 - 3", "= -11 + 11 = 0", "Checking -1/3:", "p(-1/3) = 3(-1/3)³ - 5(-1/3)² - 11(-1/3) - 3", "= 3(-1/27) - 5(1/9) + 11/3 - 3", "= -1/9 - 5/9 + 33/9 - 27/9", "= (-1 - 5 + 33 - 27) / 9", "= 0 / 9 = 0", "Comparing with ax³ + bx² + cx + d:", "a = 3, b = -5, c = -11, d = -3", "Let α = 3, β = -1, γ = -1/3", "1. Sum of zeroes (α + β + γ):", "3 + (-1) + (-1/3) = 2 - 1/3 = 53", "2. Sum of product of zeroes taken two at a time (αβ + βγ + γα):", "(3)(-1) + (-1)(-1/3) + (-1/3)(3)", "= -3 + 1/3 - 1", "= -4 + 1/3 = -113", "3. Product of zeroes (αβγ):", "(3) × (-1) × (-1/3) = 1"], "answer": "Thus, 3, -1, and -1/3 are indeed zeroes of p(x)." }],
    mcqs: [{ "id": "ch2-polynomials_mcq1", "question": "The zeroes of the quadratic polynomial x² + 99x + 127 are:", "options": ["both positive", "both negative", "one positive and one negative", "both equal"], "correctAnswer": "b" }, { "id": "ch2-polynomials_mcq2", "question": "If α and β are the zeroes of the polynomial x² - 4x + 1, then the value of 1/α + 1/β is:", "options": ["1", "2", "4", "-4"], "correctAnswer": "c" }, { "id": "ch2-polynomials_mcq3", "question": "If one zero of the polynomial (k-1)x² + kx + 1 is -3, then the value of k is:", "options": ["43", "-43", "23", "-23"], "correctAnswer": "a" }, { "id": "ch2-polynomials_mcq4", "question": "A quadratic polynomial whose zeroes are -3 and 4 is:", "options": ["Option A", "Option B", "Option C", "Option D"], "correctAnswer": "c" }, { "id": "ch2-polynomials_mcq5", "question": "The number of polynomials having zeroes as -2 and 5 is:", "options": ["1", "2", "3", "more than 3"], "correctAnswer": "d" }, { "id": "ch2-polynomials_mcq6", "question": "If the zeroes of the quadratic polynomial x² + (a+1)x + b are 2 and -3, then:", "options": ["a = -7, b = -1", "a = 5, b = -1", "a = 2, b = -6", "a = 0, b = -6"], "correctAnswer": "d" }, { "id": "ch2-polynomials_mcq7", "question": "The zeroes of the quadratic polynomial x² - 3 are:", "options": ["3, 3", "-√3, -√3", "√3, -√3", "3, -3"], "correctAnswer": "c" }, { "id": "ch2-polynomials_mcq8", "question": "If α and β are the zeroes of the polynomial 2x² + 5x + k such that α² + β² + αβ = 21/4, then k is:", "options": ["3", "-3", "-2", "2"], "correctAnswer": "d" }, { "id": "ch2-polynomials_mcq9", "question": "If the sum of the zeroes of the polynomial p(x) = (k² - 14)x² - 2x - 12 is 1, then k is:", "options": ["± 4", "± 2", "± 3", "± 5"], "correctAnswer": "a" }, { "id": "ch2-polynomials_mcq10", "question": "If α and β are zeroes of x² - p(x + 1) - c, then (α + 1)(β + 1) =", "options": ["c - 1", "1 - c", "c", "1 + c"], "correctAnswer": "b" }],
    theorems: [],
  },
  "ch3-linear-equations": {
    id: "ch3-linear-equations",
    number: 3,
    title: "Pair of Linear Equations in Two Variables",
    introduction: "A pair of linear equations in two variables x and y represents two straight lines in a 2D plane. We can solve them to find if they intersect at a point (unique solution), are parallel (no solution), or coincident (infinitely many solutions).",
    definitions: [
      { term: "Linear Equation", description: "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a² + b² ≠ 0." },
      { term: "Consistent Pair", description: "A pair of linear equations that has at least one solution." },
      { term: "Inconsistent Pair", description: "A pair of linear equations that has no solution." },
      { term: "Dependent Pair", description: "A pair of linear equations that has infinitely many solutions (often coincident lines)." }
    ],
    keyPoints: [
      "The graph of a linear equation in two variables is a straight line.",
      "A pair of linear equations can be solved graphically or algebraically.",
      "Algebraic methods include Substitution, Elimination, and Cross-Multiplication.",
      "The nature of solutions depends on the ratio of coefficients."
    ],
    formulas: [
      { name: "Standard Form", formula: "a₁x + b₁y + c₁ = 0; a₂x + b₂y + c₂ = 0" },
      { name: "Intersecting (Unique Solution)", formula: "a₁/a₂ ≠ b₁/b₂" },
      { name: "Parallel (No Solution)", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂" },
      { name: "Coincident (Infinite Solutions)", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂" }
    ],
    crux: [
      "The core concept is understanding whether two lines intersect, are parallel, or overlap based on their equations.",
      "If a₁/a₂ ≠ b₁/b₂, the lines intersect (1 solution).",
      "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel (0 solutions).",
      "If a₁/a₂ = b₁/b₂ = c₁/c₂, the lines coincide (infinite solutions)."
    ],
    summary: [
      "In this chapter, we explored the graphical and algebraic representations of pairs of linear equations.",
      "We learned to determine the consistency of a system by comparing coefficient ratios.",
      "We mastered the Substitution and Elimination methods for solving systems of equations.",
      "We applied these methods to solve diverse word problems involving numbers, ages, fractions, and geometry."
    ],
    exercises: [
      {
        id: "ex3.1",
        name: "Exercise 3.1",
        questions: [
          {
            id: "ch3-linear-ex1_q1",
            number: "1(i)",
            question: "10 students of Class X took part in a Mathematics quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls who took part in the quiz.",
            solution: [
              "Let number of girls = x",
              "Let number of boys = y",
              "According to the first condition: x + y = 10 ... (1)",
              "According to the second condition: x = y + 4 => x - y = 4 ... (2)",
              "From graph of (1) and (2), lines intersect at (7, 3)."
            ],
            answer: "Number of Girls = 7, Number of Boys = 3"
          },
          {
            id: "ch3-linear-ex1_q2",
            number: "1(ii)",
            question: "5 pencils and 7 pens together cost ₹ 50, whereas 7 pencils and 5 pens together cost ₹ 46. Find the cost of one pencil and that of one pen.",
            solution: [
              "Let the cost of 1 pencil = ₹ x",
              "Let the cost of 1 pen = ₹ y",
              "5x + 7y = 50 ... (1)",
              "7x + 5y = 46 ... (2)",
              "Plotting the lines, they intersect at (3, 5)."
            ],
            answer: "Cost of Pencil = ₹ 3, Cost of Pen = ₹ 5"
          },
          {
            id: "ch3-linear-ex1_q3",
            number: "2(i)",
            question: "On comparing the ratios, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident:\n(i) 5x – 4y + 8 = 0; 7x + 6y – 9 = 0",
            solution: [
              "a₁ = 5, b₁ = -4, c₁ = 8",
              "a₂ = 7, b₂ = 6, c₂ = -9",
              "a₁/a₂ = 5/7",
              "b₁/b₂ = -4/6 = -2/3",
              "Since a₁/a₂ ≠ b₁/b₂, the lines intersect at a single point."
            ],
            answer: "Intersect at a single point"
          },
          {
            id: "ch3-linear-ex1_q4",
            number: "2(ii)",
            question: "On comparing the ratios, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident:\n(ii) 9x + 3y + 12 = 0; 18x + 6y + 24 = 0",
            solution: [
              "a₁/a₂ = 9/18 = 1/2",
              "b₁/b₂ = 3/6 = 1/2",
              "c₁/c₂ = 12/24 = 1/2",
              "Since a₁/a₂ = b₁/b₂ = c₁/c₂, the lines are coincident."
            ],
            answer: "Coincident Lines"
          },
          {
            id: "ch3-linear-ex1_q5",
            number: "2(iii)",
            question: "On comparing the ratios, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident:\n(iii) 6x – 3y + 10 = 0; 2x – y + 9 = 0",
            solution: [
              "a₁/a₂ = 6/2 = 3",
              "b₁/b₂ = -3/-1 = 3",
              "c₁/c₂ = 10/9",
              "Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel."
            ],
            answer: "Parallel Lines"
          },
          {
            id: "ch3-linear-ex1_q6",
            number: "3(i)",
            question: "On comparing the ratios, find out whether the following pair of linear equations are consistent or inconsistent.\n(i) 3x + 2y = 5 ; 2x – 3y = 7",
            solution: [
              "a₁/a₂ = 3/2",
              "b₁/b₂ = 2/-3",
              "Since a₁/a₂ ≠ b₁/b₂, they are consistent."
            ],
            answer: "Consistent"
          },
          {
            id: "ch3-linear-ex1_q7",
            number: "3(ii)",
            question: "On comparing the ratios, find out whether the following pair of linear equations are consistent or inconsistent.\n(ii) 2x – 3y = 8 ; 4x – 6y = 9",
            solution: [
              "a₁/a₂ = 2/4 = 1/2",
              "b₁/b₂ = -3/-6 = 1/2",
              "c₁/c₂ = 8/9",
              "Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, they are inconsistent."
            ],
            answer: "Inconsistent"
          },
          {
            id: "ch3-linear-ex1_q8",
            number: "3(iii)",
            question: "On comparing the ratios, find out whether the following pair of linear equations are consistent or inconsistent.\n(iii) 3/2x + 5/3y = 7 ; 9x – 10y = 14",
            solution: [
              "a₁/a₂ = (3/2)/9 = 1/6",
              "b₁/b₂ = (5/3)/(-10) = -1/6",
              "Since 1/6 ≠ -1/6, they are consistent."
            ],
            answer: "Consistent",
            image: "Ex_3.1_Q4(iii)"
          },
          {
            id: "ch3-linear-ex1_q9",
            number: "7",
            question: "Draw the graphs of the equations x – y + 1 = 0 and 3x + 2y – 12 = 0. Determine the coordinates of the vertices of the triangle formed by these lines and the x-axis.",
            solution: [
              "Line 1: x - y = -1. Cuts x-axis at (-1, 0). intersects Line 2 at (2, 3).",
              "Line 2: 3x + 2y = 12. Cuts x-axis at (4, 0). intersects Line 1 at (2, 3).",
              "Vertices are the intersection point (2,3) and the x-intercepts (-1,0) and (4,0)."
            ],
            answer: "Vertices: (2, 3), (-1, 0) and (4, 0)",
            image: "Ex_3.1_Q7"
          }
        ]
      },
      {
        id: "ex3.2",
        name: "Exercise 3.2",
        questions: [
          {
            id: "ch3-linear-ex2_q1",
            number: "1(i)",
            question: "Solve by substitution: x + y = 14 ; x – y = 4",
            solution: [
              "From (2): x = 4 + y",
              "Substitute in (1): (4 + y) + y = 14",
              "2y = 10 => y = 5",
              "x = 4 + 5 = 9"
            ],
            answer: "x = 9, y = 5"
          },
          {
            id: "ch3-linear-ex2_q2",
            number: "1(ii)",
            question: "Solve by substitution: s – t = 3 ; s/3 + t/2 = 6",
            solution: [
              "From (1): s = 3 + t",
              "Substitute in (2): (3+t)/3 + t/2 = 6",
              "Multiply by 6: 2(3+t) + 3t = 36",
              "6 + 2t + 3t = 36",
              "5t = 30 => t = 6",
              "s = 3 + 6 = 9"
            ],
            answer: "s = 9, t = 6"
          },
          {
            id: "ch3-linear-ex2_q3",
            number: "1(iv)",
            question: "Solve by substitution: 0.2x + 0.3y = 1.3 ; 0.4x + 0.5y = 2.3",
            solution: [
              "Multiply by 10: 2x + 3y = 13; 4x + 5y = 23",
              "From (1): x = (13-3y)/2",
              "Substitute in (2): 4((13-3y)/2) + 5y = 23",
              "2(13-3y) + 5y = 23 => 26 - 6y + 5y = 23 => -y = -3 => y = 3",
              "x = (13-9)/2 = 2"
            ],
            answer: "x = 2, y = 3"
          },
          {
            id: "ch3-linear-ex2_q4",
            number: "1(v)",
            question: "Solve by substitution: √2x + √3y = 0 ; √3x – √8y = 0",
            solution: [
              "From (1): x = -√3y/√2",
              "Substitute in (2): √3(-√3y/√2) - √8y = 0",
              "-3y/√2 - 2√2y = 0",
              "y(-3/√2 - 2√2) = 0",
              "Since the bracket is non-zero, y must be 0.",
              "x = 0"
            ],
            answer: "x = 0, y = 0"
          },
          {
            id: "ch3-linear-ex2_q5",
            number: "2",
            question: "Solve 2x + 3y = 11 and 2x – 4y = – 24 and hence find the value of ‘m’ for which y = mx + 3.",
            solution: [
              "Subtract equations: (2x + 3y) - (2x - 4y) = 11 - (-24)",
              "7y = 35 => y = 5",
              "2x + 15 = 11 => 2x = -4 => x = -2",
              "y = mx + 3 => 5 = m(-2) + 3",
              "2 = -2m => m = -1"
            ],
            answer: "m = -1"
          },
          {
            id: "ch3-linear-ex2_q6",
            number: "4(i)",
            question: "Check consistency and solve graphically if consistent: x + y = 5, 2x + 2y = 10",
            solution: ["a₁/a₂ = 1/2, b₁/b₂ = 1/2, c₁/c₂ = 5/10 = 1/2", "Since ratios are equal, lines are coincident."],
            answer: "Consistent (Infinitely many solutions)"
          },
          {
            id: "ch3-linear-ex2_q7",
            number: "4(ii)",
            question: "Check consistency: x – y = 8, 3x – 3y = 16",
            solution: ["a₁/a₂ = 1/3, b₁/b₂ = 1/3, c₁/c₂ = 8/16 = 1/2", "Parallel lines."],
            answer: "Inconsistent"
          },
          {
            id: "ch3-linear-ex2_q8",
            number: "4(iii)",
            question: "Check consistency and solve: 2x + y – 6 = 0, 4x – 2y – 4 = 0",
            solution: [
              "a₁/a₂ = 2/4 = 1/2, b₁/b₂ = 1/-2",
              "Unequal ratios, so unique solution.",
              "Intersect at (2, 2)."
            ],
            answer: "Consistent. Solution: (2, 2)"
          },
          {
            id: "ch3-linear-ex2_q9",
            number: "4(iv)",
            question: "Check consistency: 2x – 2y – 2 = 0, 4x – 4y – 5 = 0",
            solution: [
              "a₁/a₂ = 1/2, b₁/b₂ = 1/2, c₁/c₂ = 2/5",
              "Parallel lines."
            ],
            answer: "Inconsistent"
          }
        ]
      },
      {
        id: "ex3.3",
        name: "Exercise 3.3",
        questions: [
          {
            id: "ch3-linear-ex3_q1",
            number: "1(i)",
            question: "Solve by elimination: x + y = 5 and 2x – 3y = 4",
            solution: ["Multiply (1) by 3: 3x + 3y = 15", "Add to (2): 2x - 3y + 3x + 3y = 4 + 15 => 5x = 19 => x = 19/5", "x + y = 5 => 19/5 + y = 25/5 => y = 6/5"],
            answer: "x = 19/5, y = 6/5"
          },
          {
            id: "ch3-linear-ex3_q2",
            number: "1(ii)",
            question: "Solve by elimination: 3x + 4y = 10 and 2x – 2y = 2",
            solution: ["Eq 2 simplified: x - y = 1 => x = y + 1", "3(y+1) + 4y = 10 => 3y + 3 + 4y = 10 => 7y = 7 => y = 1", "x = 2"],
            answer: "x = 2, y = 1"
          },
          {
            id: "ch3-linear-ex3_q3",
            number: "1(iii)",
            question: "Solve by elimination: 3x – 5y – 4 = 0 and 9x = 2y + 7",
            solution: ["3x - 5y = 4 (1); 9x - 2y = 7 (2)", "Multiply (1) by 3: 9x - 15y = 12", "Subtract from (2): (9x-2y) - (9x-15y) = 7-12", "13y = -5 => y = -5/13", "3x = 4 + 5(-5/13) => 3x = 4 - 25/13 => 3x = 27/13 => x = 9/13"],
            answer: "x = 9/13, y = -5/13"
          },
          {
            id: "ch3-linear-ex3_q4",
            number: "1(iv)",
            question: "Solve: x/2 + 2y/3 = -1 and x - y/3 = 3",
            solution: ["Eq 1 (*6): 3x + 4y = -6", "Eq 2 (*3): 3x - y = 9", "Subtract: (3x + 4y) - (3x - y) = -6 - 9 => 5y = -15 => y = -3", "3x - (-3) = 9 => 3x = 6 => x = 2"],
            answer: "x = 2, y = -3"
          },
          {
            id: "ch3-linear-ex3_q5",
            number: "2(i)",
            question: "If we add 1 to the numerator and subtract 1 from the denominator, a fraction reduces to 1. It becomes 1/2 if we only add 1 to the denominator. What is the fraction?",
            solution: ["(x+1)/(y-1) = 1 => x - y = -2", "x/(y+1) = 1/2 => 2x - y = 1", "Subtracting: (2x-y)-(x-y) = 1 - (-2) => x = 3", "3 - y = -2 => y = 5"],
            answer: "Fraction is 3/5"
          },
          {
            id: "ch3-linear-ex3_q6",
            number: "2(ii)",
            question: "Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. How old are Nuri and Sonu?",
            solution: ["x - 5 = 3(y - 5) => x - 3y = -10", "x + 10 = 2(y + 10) => x - 2y = 10", "Subtracting: -y = -20 => y = 20", "x = 10 + 2(20) = 50"],
            answer: "Nuri: 50 yrs, Sonu: 20 yrs"
          },
          {
            id: "ch3-linear-ex3_q7",
            number: "2(iii)",
            question: "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.",
            solution: ["x + y = 9", "9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => 8x = y", "x + 8x = 9 => 9x = 9 => x = 1, y = 8"],
            answer: "Number is 18"
          },
          {
            id: "ch3-linear-ex3_q8",
            number: "2(iv)",
            question: "Meena went to bank to withdraw ₹ 2000. She received ₹ 50 and ₹ 100 notes only. If she got 25 notes in all, find how many notes of ₹ 50 and ₹ 100 she received.",
            solution: ["x + y = 25", "50x + 100y = 2000 => x + 2y = 40", "Subtracting: y = 15", "x = 10"],
            answer: "10 notes of ₹50, 15 notes of ₹100"
          },
          {
            id: "ch3-linear-ex3_q9",
            number: "2(v)",
            question: "A lending library has a fixed charge for the first three days and an additional charge for each day thereafter. Saritha paid ₹ 27 for 7 days, Susy paid ₹ 21 for 5 days. Find the fixed charge and charge per extra day.",
            solution: ["Let fixed (x) and daily (y).", "Saritha (7 days = 3 fixed + 4 extra): x + 4y = 27", "Susy (5 days = 3 fixed + 2 extra): x + 2y = 21", "Subtracting: 2y = 6 => y = 3", "x + 6 = 21 => x = 15"],
            answer: "Fixed charge: ₹ 15, Extra charge per day: ₹ 3"
          }
        ]
      }
    ],
    examples: [
      {
        id: "ch3-linear-eg1",
        number: "Example 1",
        question: "Check graphically whether x + 3y = 6 and 2x - 3y = 12 is consistent. If so, solve them graphically.",
        solution: ["Plotting x + 3y = 6 points (0,2), (6,0)", "Plotting 2x - 3y = 12 points (0,-4), (6,0)", "The lines intersect at (6, 0)."],
        answer: "Consistent. Solution: x = 6, y = 0",
        image: "Example 1"
      },
      {
        id: "ch3-linear-eg2",
        number: "Example 2",
        question: "Half the perimeter of a rectangular garden is 36 m. If the length is 4 m more than its width, find the dimensions.",
        solution: ["L + W = 36", "L = W + 4", "Substitute L: (W+4) + W = 36 => 2W = 32 => W = 16", "L = 20"],
        answer: "Length = 20 m, Width = 16 m"
      },
      {
        id: "ch3-linear-eg3",
        number: "Example 3",
        question: "Solve by substitution: 7x - 15y = 2 and x + 2y = 3",
        solution: ["From (2): x = 3 - 2y", "Substitute in (1): 7(3-2y) - 15y = 2", "21 - 14y - 15y = 2", "-29y = -19 => y = 19/29", "x = 3 - 2(19/29) = (87-38)/29 = 49/29"],
        answer: "x = 49/29, y = 19/29"
      }
    ],
    mcqs: [
      {
        id: "ch3-linear_mcq1",
        question: "The pair of equations x = a and y = b graphically represents lines which are:",
        options: ["parallel", "intersecting at (b, a)", "coincident", "intersecting at (a, b)"],
        correctAnswer: "d"
      },
      {
        id: "ch3-linear_mcq2",
        question: "For what value of k, do the equations 3x - y + 8 = 0 and 6x - ky = -16 represent coincident lines?",
        options: ["1/2", "-1/2", "2", "-2"],
        correctAnswer: "c"
      },
      {
        id: "ch3-linear_mcq3",
        question: "If the lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then the value of k is:",
        options: ["-5/4", "2/5", "15/4", "3/2"],
        correctAnswer: "c"
      },
      {
        id: "ch3-linear_mcq4",
        question: "The value of c for which the pair of equations cx - y = 2 and 6x - 2y = 3 will have infinitely many solutions is:",
        options: ["3", "-3", "-12", "no value"],
        correctAnswer: "d"
      },
      {
        id: "ch3-linear_mcq5",
        question: "One equation of a pair of dependent linear equations is -5x + 7y = 2. The second equation can be:",
        options: ["10x + 14y + 4 = 0", "-10x - 14y + 4 = 0", "-10x + 14y + 4 = 0", "10x - 14y = -4"],
        correctAnswer: "d"
      },
      {
        id: "ch3-linear_mcq6",
        question: "A pair of linear equations which has a unique solution x = 2, y = -3 is:",
        options: ["x + y = -1; 2x - 3y = -5", "2x + 5y = -11; 4x + 10y = -22", "2x - y = 1; 3x + 2y = 0", "x - 4y - 14 = 0; 5x - y - 13 = 0"],
        correctAnswer: "d"
      },
      {
        id: "ch3-linear_mcq7",
        question: "If x = a, y = b is the solution of the equations x - y = 2 and x + y = 4, then the values of a and b are:",
        options: ["3 and 5", "5 and 3", "3 and 1", "-1 and -3"],
        correctAnswer: "c"
      },
      {
        id: "ch3-linear_mcq8",
        question: "Aruna has only ₹ 1 and ₹ 2 coins with her. If total coins are 50 and amount is ₹ 75, then number of ₹ 1 and ₹ 2 coins are:",
        options: ["35 and 15", "35 and 20", "15 and 35", "25 and 25"],
        correctAnswer: "d"
      },
      {
        id: "ch3-linear_mcq9",
        question: "The father's age is six times his son's age. Four years hence, the age of the father will be four times his son's age. The present ages (in years) are:",
        options: ["4 and 24", "5 and 30", "6 and 36", "3 and 24"],
        correctAnswer: "c"
      },
      {
        id: "ch3-linear_mcq10",
        question: "Graphically, the pair of equations 6x - 3y + 10 = 0 and 2x - y + 9 = 0 represents two lines which are:",
        options: ["intersecting at exactly one point", "intersecting at exactly two points", "coincident", "parallel"],
        correctAnswer: "d"
      }
    ],
    theorems: []
  },
};

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chapterContents[chapterId];
}
export function isChapterAvailable(chapterId: string): boolean {
  return (chapterId in chapterContents);
}
