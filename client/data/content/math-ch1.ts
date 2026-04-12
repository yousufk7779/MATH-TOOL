import { ChapterContent } from "../chapterContent";

export const mathCh1: ChapterContent = {
    "id": "ch1",
    "number": 1,
    "title": "Real Numbers",
    "introduction": "A polynomial is an algebraic expression consisting of variables and coefficients, with non-negative exponent values. It forms the core of algebraic equations.",
    "definitions": [
        {
            "term": "Degree",
            "description": "The highest power of x in p(x)."
        },
        {
            "term": "Zero of a Polynomial",
            "description": "A real number k is a zero if p(k) = 0."
        },
        {
            "term": "Linear",
            "description": "Degree 1."
        },
        {
            "term": "Quadratic",
            "description": "Degree 2."
        },
        {
            "term": "Cubic",
            "description": "Degree 3."
        }
    ],
    "keyPoints": [
        "The geometrical meaning of zeros represents the x-intercepts of the polynomial graph.",
        "The relationship between zeros and coefficients for quadratic polynomials is fundamental."
    ],
    "formulas": [],
    "crux": [
        "A polynomial of degree n can have at most n real zeros.",
        "For a quadratic axÂ² + bx + c, Sum of zeros = -<sup>b</sup>&frasl;<sub>a</sub>, Product of zeros = <sup>c</sup>&frasl;<sub>a</sub>."
    ],
    "summary": [
        "Polynomials offer a way to model multiple outcomes algebraically and graphically.",
        "Their roots determine where the function crosses the axis.",
        "Carefully read and understand every problem statement before jumping into the solution.",
        "A strong grasp of the core concepts is the key to solving complex problems easily.",
        "Make a habit of practicing the solved examples to get familiar with standard solution formats."
    ],
    "examples": [
        {
            "id": "q1",
            "number": "1",
            "question": "<span style=\"font-weight: normal;\">Check whether 4ⁿ can end with the digit 0 for any natural number n.</span>",
            "solution": [
                "Factor Tree Diagram Placeholder",
                "<span style=\"font-weight: normal;\">Solution:</span>",
                "For any number to end with the digit 0, it must be divisible by 10.",
                "This implies that its prime factorization must include the prime numbers 2 and 5.",
                "4ⁿ = (2²)ⁿ = 2²ⁿ",
                "The prime factorization of 4ⁿ contains only the prime 2.",
                "There is no factor 5 in it.",
                "The Fundamental Theorem of Arithmetic guarantees the uniqueness of this factorization.",
                "So, there is no natural number n for which 4ⁿ ends with the digit 0.",
                "Hence, 4ⁿ cannot end with digit 0."
            ],
            "answer": "Hence, 4ⁿ cannot end with digit 0."
        },
        {
            "id": "q2",
            "number": "2",
            "question": "<span style=\"font-weight: normal;\">Find the LCM and HCF of 6 and 20 by the prime factorisation method.</span>",
            "solution": [
                "Factor Trees for 6 and 20",
                "<span style=\"font-weight: normal;\">Solution:</span>",
                "Prime factorization:",
                "6 = 2 × 3",
                "20 = 2 × 2 × 5 = 2² × 5",
                "To find HCF:",
                "The common prime factor is 2.",
                "The smallest power of the common factor 2 is 2¹.",
                "HCF(6, 20) = 2",
                "To find LCM:",
                "The prime factors involved are 2, 3, and 5.",
                "The greatest power of each prime factor involved:",
                "2² (for 2), 3¹ (for 3), 5¹ (for 5).",
                "LCM(6, 20) = 2² × 3 × 5 = 4 × 3 × 5 = 60",
                "HCF(6, 20) = 2, LCM(6, 20) = 60"
            ],
            "answer": "HCF(6, 20) = 2, LCM(6, 20) = 60"
        },
        {
            "id": "q3",
            "number": "3",
            "question": "<span style=\"font-weight: normal;\">Find the HCF of 96 and 404 by the prime factorisation method. Hence, find their<br/>LCM.</span>",
            "solution": [
                "<span style=\"font-weight: normal;\">Solution:</span>",
                "Prime factorization:",
                "96 = 2 × 2 × 2 × 2 × 2 × 3 = 2⁵ × 3",
                "404 = 2 × 2 × 101 = 2² × 101",
                "The common prime factor is 2. The smallest power is 2².",
                "HCF(96, 404) = 2² = 4",
                "<span style=\"font-weight: normal;\">Finding LCM:</span>",
                "We know the relationship:",
                "LCM × HCF = Product of the two numbers",
                "LCM × 4 = 96 × 404",
                "LCM = <sup>96 × 404</sup>&frasl;<sub>4</sub>",
                "LCM = 24 × 404",
                "LCM = 9696",
                "HCF = 4, LCM = 9696"
            ],
            "answer": "HCF = 4, LCM = 9696"
        },
        {
            "id": "q4",
            "number": "4",
            "question": "<span style=\"font-weight: normal;\">Find the HCF and LCM of 6, 72 and 120, using the prime factorisation method.</span>",
            "solution": [
                "<span style=\"font-weight: normal;\">Solution:</span>",
                "Prime factorization:",
                "6 = 2 × 3",
                "72 = 2³ × 3²",
                "120 = 2³ × 3 × 5",
                "HCF: Common factors are 2 and 3. Smallest powers are 2¹ and 3¹.",
                "HCF = 2 × 3 = 6",
                "LCM: Greatest powers are 2³, 3² and 5¹.",
                "LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360",
                "HCF = 6, LCM = 360"
            ],
            "answer": "HCF = 6, LCM = 360"
        },
        {
            "id": "q5",
            "number": "5",
            "question": "<span style=\"font-weight: normal;\">Prove that √3 is irrational.</span>",
            "solution": [
                "<span style=\"font-weight: normal;\">Proof:</span>",
                "Let us assume, to the contrary, that √3 is rational.",
                "Therefore, we can find integers a and b (b ≠ 0) such that:",
                "√3 = <sup>a</sup>&frasl;<sub>b</sub>",
                "Assume a and b are co-prime.",
                "Squaring both sides:",
                "3b² = a²",
                "Therefore, 3 divides a².",
                "Theorem 1.3: If a prime p divides a², then p divides",
                "a.",
                "So, 3 divides a.",
                "Let a = 3c for some integer c.",
                "substituting a = 3c, we get:",
                "3b² = (3c)² = 9c²",
                "b² = 3c²",
                "This means 3 divides b², and so 3 divides b.",
                "Thus, a and b have at least 3 as a common factor.",
                "But this contradicts the fact that a and b are co-prime.",
                "This contradiction arises because of our incorrect assumption that √3 is rational.",
                "Hence, √3 is irrational."
            ],
            "answer": "Hence, √3 is irrational."
        },
        {
            "id": "q6",
            "number": "6",
            "question": "<span style=\"font-weight: normal;\">Show that 5 - √3 is irrational.</span>",
            "solution": [
                "<span style=\"font-weight: normal;\">Proof:</span>",
                "Let us assume that 5 - √3 is rational.",
                "So we can write:",
                "5 - √3 = <sup>a</sup>&frasl;<sub>b</sub> (where a, b are co-prime integers, b ≠ 0)",
                "Rearranging to isolate √3:",
                "5 - <sup>a</sup>&frasl;<sub>b</sub> = √3",
                "√3 = <sup>5b - a</sup>&frasl;<sub>b</sub>",
                "Since a and b are integers, the RHS <sup>5b - a</sup>&frasl;<sub>b</sub> is",
                "rational.",
                "This implies √3 is rational.",
                "But this contradicts the fact that √3 is irrational.",
                "Hence, 5 - √3 is irrational."
            ],
            "answer": "Hence, 5 - √3 is irrational."
        },
        {
            "id": "q7",
            "number": "7",
            "question": "<span style=\"font-weight: normal;\">Show that 3√2 is irrational.</span>",
            "solution": [
                "<span style=\"font-weight: normal;\">Proof:</span>",
                "Let us assume that 3√2 is rational.",
                "So we can find co-prime integers a and b (b ≠ 0) such that:",
                "3√2 = <sup>a</sup>&frasl;<sub>b</sub>",
                "Rearranging:",
                "√2 = <sup>a</sup>&frasl;<sub>3b</sub>",
                "Since 3, a, and b are integers, <sup>a</sup>&frasl;<sub>3b</sub> is rational.",
                "This implies √2 is rational.",
                "But this contradicts the fact that √2 is irrational.",
                "Hence, 3√2 is irrational."
            ],
            "answer": "Hence, 3√2 is irrational."
        }
    ],
    "exercises": [
        {
            "id": "exercise1",
            "name": "Exercise 2.1",
            "questions": [
                {
                    "id": "q1",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Express each number as a product of its prime factors:</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">(i) 140</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization of 140:",
                        "140 = 2 × 70",
                        "= 2 × 2 × 35",
                        "= 2 × 2 × 5 × 7",
                        "140 = 2² × 5 × 7",
                        "",
                        "<span style=\"font-weight: normal;\">(ii) 156</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization of 156:",
                        "156 = 2 × 78",
                        "= 2 × 2 × 39",
                        "= 2 × 2 × 3 × 13",
                        "156 = 2² × 3 × 13",
                        "",
                        "<span style=\"font-weight: normal;\">(iii) 3825</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization of 3825:",
                        "3825 = 3 × 1275",
                        "= 3 × 3 × 425",
                        "= 3 × 3 × 5 × 85",
                        "= 3 × 3 × 5 × 5 × 17",
                        "3825 = 3² × 5² × 17",
                        "",
                        "<span style=\"font-weight: normal;\">(iv) 5005</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization of 5005:",
                        "5005 = 5 × 1001",
                        "= 5 × 7 × 143",
                        "= 5 × 7 × 11 × 13",
                        "5005 = 5 × 7 × 11 × 13",
                        "",
                        "<span style=\"font-weight: normal;\">(v) 7429</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization of 7429:",
                        "7429 = 17 × 437",
                        "= 17 × 19 × 23",
                        "7429 = 17 × 19 × 23"
                    ],
                    "answer": "140 = 2² × 5 × 7 | 156 = 2² × 3 × 13 | 3825 = 3² × 5² × 17 | 5005 = 5 × 7 × 11 × 13 | 7429 = 17 × 19 × 23"
                },
                {
                    "id": "q2",
                    "number": "2",
                    "question": "<span style=\"font-weight: normal;\">Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF =<br/>product of the two numbers.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">(i) 26 and 91</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Prime factorization:",
                        "26 = 2 × 13",
                        "91 = 7 × 13",
                        "HCF = Product of smallest power of each common prime factor = 13",
                        "LCM = Product of greatest power of each prime factor = 2 × 7 × 13 = 182",
                        "<span style=\"font-weight: normal;\">Verification:</span>",
                        "LCM × HCF = Product of the numbers",
                        "LHS = LCM × HCF = 182 × 13 = 2366",
                        "RHS = Product = 26 × 91 = 2366",
                        "LHS = RHS. Hence Verified.",
                        "",
                        "<span style=\"font-weight: normal;\">(ii) 510 and 92</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "510 = 2 × 3 × 5 × 17",
                        "92 = 2 × 2 × 23 = 2² × 23",
                        "HCF = 2",
                        "LCM = 2² × 3 × 5 × 17 × 23 = 23460",
                        "<span style=\"font-weight: normal;\">Verification:</span>",
                        "LHS = LCM × HCF = 23460 × 2 = 46920",
                        "RHS = Product = 510 × 92 = 46920",
                        "LHS = RHS. Hence Verified.",
                        "",
                        "<span style=\"font-weight: normal;\">(iii) 336 and 54</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "336 = 2 × 2 × 2 × 2 × 3 × 7 = 2⁴ × 3 × 7",
                        "54 = 2 × 3 × 3 × 3 = 2 × 3³",
                        "HCF = 2 × 3 = 6",
                        "LCM = 2⁴ × 3³ × 7 = 3024",
                        "<span style=\"font-weight: normal;\">Verification:</span>",
                        "LHS = LCM × HCF = 3024 × 6 = 18144",
                        "RHS = Product = 336 × 54 = 18144",
                        "LHS = RHS. Hence Verified."
                    ],
                    "answer": "LHS = RHS. Hence Verified. | LHS = RHS. Hence Verified. | LHS = RHS. Hence Verified."
                },
                {
                    "id": "q3",
                    "number": "3",
                    "question": "<span style=\"font-weight: normal;\">Find the LCM and HCF of the following integers by applying the prime factorisation<br/>method.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">(i) 12, 15 and 21</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "12 = 2 × 2 × 3 = 2² × 3",
                        "15 = 3 × 5",
                        "21 = 3 × 7",
                        "HCF = 3 (Common factor)",
                        "LCM = 2² × 3 × 5 × 7 = 420",
                        "HCF = 3, LCM = 420",
                        "",
                        "<span style=\"font-weight: normal;\">(ii) 17, 23 and 29</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "17, 23, and 29 are prime numbers.",
                        "17 = 1 × 17",
                        "23 = 1 × 23",
                        "29 = 1 × 29",
                        "HCF = 1",
                        "LCM = 17 × 23 × 29 = 11339",
                        "HCF = 1, LCM = 11339",
                        "",
                        "<span style=\"font-weight: normal;\">(iii) 8, 9 and 25</span>",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "8 = 2 × 2 × 2 = 2³",
                        "9 = 3 × 3 = 3²",
                        "25 = 5 × 5 = 5²",
                        "No common prime factor.",
                        "HCF = 1",
                        "LCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800",
                        "HCF = 1, LCM = 1800"
                    ],
                    "answer": "HCF = 3, LCM = 420 | HCF = 1, LCM = 11339 | HCF = 1, LCM = 1800"
                },
                {
                    "id": "q4",
                    "number": "4",
                    "question": "<span style=\"font-weight: normal;\">Given that HCF (306, 657) = 9, find LCM (306, 657).</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Given:</span>",
                        "HCF (306, 657) = 9",
                        "First number (a) = 306",
                        "Second number (b) = 657",
                        "<span style=\"font-weight: normal;\">To Find:</span>",
                        "LCM (306, 657)",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "Formula: LCM × HCF = Product of two numbers",
                        "LCM × 9 = 306 × 657",
                        "LCM = <sup>306 × 657</sup>&frasl;<sub>9</sub>",
                        "LCM = 34 × 657",
                        "LCM = 22338",
                        "LCM (306, 657) = 22338"
                    ],
                    "answer": "LCM (306, 657) = 22338"
                },
                {
                    "id": "q5",
                    "number": "5",
                    "question": "<span style=\"font-weight: normal;\">Check whether 6ⁿ can end with the digit 0 for any natural number n.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "If a number ends with digit 0, it must be divisible by 10.",
                        "This means it must be divisible by both 2 and 5.",
                        "Prime factorization of 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ",
                        "The prime factors of 6ⁿ are 2 and 3.",
                        "For the number to end with 0, it must contain the prime factor 5.",
                        "However, 5 is not present in the prime factorization of 6ⁿ.",
                        "By the Fundamental Theorem of Arithmetic, the uniqueness of prime factorization guarantees",
                        "that there are no other primes in the factorization of 6ⁿ.",
                        "Therefore, there is no natural number n for which 6ⁿ ends with the digit 0."
                    ],
                    "answer": "Therefore, there is no natural number n for which 6ⁿ ends with the digit 0."
                },
                {
                    "id": "q6",
                    "number": "6",
                    "question": "<span style=\"font-weight: normal;\">Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "A composite number is a number that has factors other than 1 and itself.",
                        "Part 1: 7 × 11 × 13 + 13",
                        "Taking 13 common:",
                        "= 13 × (7 × 11 + 1)",
                        "= 13 × (77 + 1)",
                        "= 13 × 78",
                        "Since this expression has 13 and 78 as factors, it is a composite number.",
                        "Part 2: 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5",
                        "Taking 5 common:",
                        "= 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1)",
                        "= 5 × (1008 + 1)",
                        "= 5 × 1009",
                        "Since this expression has 5 and 1009 as factors, it is a composite number.",
                        "Hence, both expressions represent composite numbers."
                    ],
                    "answer": "Hence, both expressions represent composite numbers."
                },
                {
                    "id": "q7",
                    "number": "7",
                    "question": "<span style=\"font-weight: normal;\">There is a circular path around a sports field. Sonia takes 18 minutes to drive one<br/>round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and<br/>at the same time, and go in the same direction. After how many minutes will they meet again at the starting<br/>point?</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Given:</span>",
                        "Time taken by Sonia = 18 minutes",
                        "Time taken by Ravi = 12 minutes",
                        "<span style=\"font-weight: normal;\">To Find:</span>",
                        "Time when they meet again at the starting point.",
                        "<span style=\"font-weight: normal;\">Solution:</span>",
                        "They will meet again at the starting point after a time that is a common multiple of both 18",
                        "and 12.",
                        "Specifically, we need to find the Least Common Multiple (LCM) of 18 and 12.",
                        "Prime factorization:",
                        "18 = 2 × 3 × 3 = 2 × 3²",
                        "12 = 2 × 2 × 3 = 2² × 3",
                        "LCM(18, 12) = 2² × 3²",
                        "= 4 × 9",
                        "= 36",
                        "Therefore, Sonia and Ravi will meet again at the starting point after 36 minutes."
                    ],
                    "answer": "Therefore, Sonia and Ravi will meet again at the starting point after 36 minutes."
                }
            ]
        },
        {
            "id": "exercise2",
            "name": "Exercise 2.2",
            "questions": [
                {
                    "id": "q1",
                    "number": "1",
                    "question": "<span style=\"font-weight: normal;\">Prove that √5 is irrational.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Given:</span>",
                        "Number √5.",
                        "<span style=\"font-weight: normal;\">To Prove:</span>",
                        "√5 is an irrational number.",
                        "<span style=\"font-weight: normal;\">Proof:</span>",
                        "Let us assume, to the contrary, that √5 is rational.",
                        "This means we can find integers a and b (where b ≠ 0) such that:",
                        "√5 = <sup>a</sup>&frasl;<sub>b</sub>",
                        "Suppose a and b have a common factor other than 1. Can divide by the common factor to assume a and b are co-prime.",
                        "So, a and b are co-prime.",
                        "Rearranging, we get:",
                        "√5 b = a",
                        "Squaring both sides:",
                        "5b² = a²  ... (Equation 1)",
                        "Therefore, 5 divides a².",
                        "Theorem 1.3: If a prime number p divides a², then p divides a.",
                        "So, 5 divides a.",
                        "Let a = 5c for some integer c.",
                        "Substituting a = 5c in Equation 1:",
                        "5b² = (5c)²",
                        "5b² = 25c²",
                        "Dividing both sides by 5:",
                        "b² = 5c²",
                        "This limits that 5 divides b².",
                        "So, 5 divides b (using Theorem 1.3 again).",
                        "Therefore, a and b have at least 5 as a common factor.",
                        "But this contradicts the fact that a and b have no common factor other than 1 (they are co-prime).",
                        "This contradiction has arisen because of our incorrect assumption that √5 is rational.",
                        "Hence, we conclude that √5 is irrational."
                    ],
                    "answer": "Hence, we conclude that √5 is irrational."
                },
                {
                    "id": "q2",
                    "number": "2",
                    "question": "<span style=\"font-weight: normal;\">Prove that 3 + 2√5 is irrational.</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">Given:</span>",
                        "Number 3 + 2√5.",
                        "<span style=\"font-weight: normal;\">To Prove:</span>",
                        "3 + 2√5 is irrational.",
                        "<span style=\"font-weight: normal;\">Proof:</span>",
                        "Let us assume, to the contrary, that 3 + 2√5 is rational.",
                        "That is, we can find co-prime integers a and b (b ≠ 0) such that:",
                        "3 + 2√5 = <sup>a</sup>&frasl;<sub>b</sub>",
                        "Rearranging the equation to isolate √5:",
                        "2√5 = <sup>a</sup>&frasl;<sub>b</sub> - 3",
                        "Taking LCM on RHS:",
                        "2√5 = <sup>a - 3b</sup>&frasl;<sub>b</sub>",
                        "Dividing by 2:",
                        "√5 = <sup>a - 3b</sup>&frasl;<sub>2b</sub>",
                        "Since a and b are integers, (a - 3b) and 2b are also integers.",
                        "Thus, <sup>a - 3b</sup>&frasl;<sub>2b</sub> is a rational number.",
                        "Therefore, √5 should be rational.",
                        "But this contradicts the fact that √5 is irrational.",
                        "This contradiction has arisen because of our incorrect assumption that 3 + 2√5 is rational.",
                        "Hence, we conclude that 3 + 2√5 is irrational."
                    ],
                    "answer": "Hence, we conclude that 3 + 2√5 is irrational."
                },
                {
                    "id": "q3",
                    "number": "3",
                    "question": "<span style=\"font-weight: normal;\">Prove that the following are irrationals:</span>",
                    "solution": [
                        "<span style=\"font-weight: normal;\">(i) <sup>1</sup>&frasl;<sub>√2</sub></span>",
                        "<span style=\"font-weight: normal;\">Proof:</span>",
                        "Let us assume",
                        "<sup>1</sup>&frasl;<sub>√2</sub> is rational.",
                        "Then we can find co-prime integers a and b (b ≠ 0) such that:",
                        "<sup>1</sup>&frasl;<sub>√2</sub> = <sup>a</sup>&frasl;<sub>b</sub>",
                        "Reciprocating both sides (or cross-multiplying):",
                        "√2 = <sup>b</sup>&frasl;<sub>a</sub>",
                        "Since a and b are integers, <sup>b</sup>&frasl;<sub>a</sub> is rational.",
                        "This implies √2 is rational.",
                        "But this contradicts the fact that √2 is irrational.",
                        "Hence, <sup>1</sup>&frasl;<sub>√2</sub> is irrational.",
                        "",
                        "<span style=\"font-weight: normal;\">(ii) 7√5</span>",
                        "<span style=\"font-weight: normal;\">Proof:</span>",
                        "Let us assume 7√5 is rational.",
                        "So, 7√5 = <sup>a</sup>&frasl;<sub>b</sub> (where a, b are co-prime integers, b ≠ 0).",
                        "Rearranging:",
                        "√5 = <sup>a</sup>&frasl;<sub>7b</sub>",
                        "Since a and b are integers, <sup>a</sup>&frasl;<sub>7b</sub> is rational.",
                        "This implies √5 is rational.",
                        "But this contradicts the fact that √5 is irrational.",
                        "Hence, 7√5 is irrational.",
                        "",
                        "<span style=\"font-weight: normal;\">(iii) 6 + √2</span>",
                        "<span style=\"font-weight: normal;\">Proof:</span>",
                        "Let us assume 6 + √2 is rational.",
                        "So, 6 + √2 = <sup>a</sup>&frasl;<sub>b</sub> (where a, b are co-prime integers, b ≠ 0).",
                        "Transposing 6 to the RHS:",
                        "√2 = <sup>a</sup>&frasl;<sub>b</sub> - 6",
                        "√2 = <sup>a - 6b</sup>&frasl;<sub>b</sub>",
                        "Since a and b are integers, <sup>a - 6b</sup>&frasl;<sub>b</sub> is rational.",
                        "This implies √2 is rational.",
                        "But this contradicts the fact that √2 is irrational.",
                        "Hence, 6 + √2 is irrational."
                    ],
                    "answer": "Hence, <sup>1</sup>&frasl;<sub>√2</sub> is irrational. | Hence, 7√5 is irrational. | Hence, 6 + √2 is irrational."
                }
            ]
        }
    ],
    "mcqs": [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">The HCF of 135 and 225 is:</span>",
            "options": [
                "(A) 15",
                "(B) 30",
                "(C) 45",
                "(D) 60"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">Every composite number can be expressed as a product of:</span>",
            "options": [
                "(A) Odd numbers",
                "(B) Even numbers",
                "(C) Prime numbers",
                "(D) Real numbers"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">For any two positive integers a and b, the relationship between HCF and LCM is:</span>",
            "options": [
                "(A) HCF + LCM = a × b",
                "(B) HCF - LCM = a × b",
                "(C) HCF × LCM = a × b",
                "(D) HCF / LCM = a × b"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">The number √5 is:</span>",
            "options": [
                "(A) A rational number",
                "(B) An irrational number",
                "(C) A whole number",
                "(D) A natural number"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">The prime factorization of 15 is:</span>",
            "options": [
                "(A) 2 × 7",
                "(B) 3 × 5",
                "(C) 2 × 3 × 5",
                "(D) 5 × 5"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">If a number n ends with the digit 0, then its prime factorization must contain:</span>",
            "options": [
                "(A) Both 2 and 3",
                "(B) Both 2 and 5",
                "(C) Both 3 and 5",
                "(D) Both 2 and 7"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">The sum of a rational and an irrational number is always:</span>",
            "options": [
                "(A) Rational",
                "(B) Irrational",
                "(C) Zero",
                "(D) None of these"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">Which of the following is an irrational number?</span>",
            "options": [
                "(A) 2",
                "(B) 0.5",
                "(C) √2",
                "(D) √4"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">The LCM of 12 and 15 is:</span>",
            "options": [
                "(A) 30",
                "(B) 40",
                "(C) 60",
                "(D) 90"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">The product of a non-zero rational number and an irrational number is:</span>",
            "options": [
                "(A) Always rational",
                "(B) Always irrational",
                "(C) Sometimes rational",
                "(D) Zero"
            ],
            "correctAnswer": "B"
        }
    ]
};
