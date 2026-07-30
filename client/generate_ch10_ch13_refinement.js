const fs = require('fs');
const path = require('path');

function frac(num, den) {
  return `<div class="frac"><span class="num">${num}</span><span class="den">${den}</span></div>`;
}

// ==========================================
// CHAPTER 10: ALGEBRAIC EXPRESSIONS
// ==========================================
const c7Math10Content = `import { ChapterContent } from "../types";

export const c7Math10: ChapterContent = {
  id: "c7-math-10",
  number: 10,
  title: "Algebraic Expressions",
  isHtmlView: true,
  introduction:
    "Algebraic expressions are formed from variables and constants. We use operations like addition, subtraction, multiplication, and division to combine them and solve real-world problems.",
  definitions: [
    {
      term: "Variable",
      description: "A symbol (like x, y, z) that can take various numerical values.",
    },
    {
      term: "Constant",
      description: "A symbol that has a fixed numerical value (like 5, -3, 10).",
    },
    {
      term: "Term",
      description: "A part of an algebraic expression separated by '+' or '-' signs.",
    },
    {
      term: "Coefficient",
      description: "The numerical factor attached to a variable term.",
    },
    {
      term: "Like Terms",
      description: "Terms having the same algebraic factors (e.g., 3x and 7x).",
    },
  ],
  keyPoints: [
    "Algebraic expressions are formed using variables and constants.",
    "Terms are added or subtracted to form an expression.",
    "Only like terms can be added or subtracted together.",
    "Monomials have 1 term, Binomials have 2 terms, Trinomials have 3 terms.",
  ],
  formulas: [
    { name: "Addition of Like Terms", formula: "ax + bx = (a + b)x" },
    { name: "Subtraction of Like Terms", formula: "ax - bx = (a - b)x" },
  ],
  crux: [],
  exercises: [
    { id: "ex10-1", name: "Exercise 10.1", questions: [] },
    { id: "ex10-2", name: "Exercise 10.2", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #66BB6A; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(102, 187, 106, 0.05); border-left: 4px solid #66BB6A; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #66BB6A; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Algebraic Expressions</div>
            <p class="content-text">In this chapter, we learn how variables and constants combine using arithmetic operations to form expressions, identify terms, coefficients, like/unlike terms, add and subtract expressions, and evaluate their values.</p>
            <div class="point-box">
                <div class="point-item">Terms & Factors: Expressions consist of terms, and terms are products of factors.</div>
                <div class="point-item">Like Terms: Only like terms can be combined through addition or subtraction.</div>
                <div class="point-item">Evaluation: Substitute given numerical values for variables to find the final value.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex10-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #81C784; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; background: #161625; }
            th, td { border: 1px solid rgba(102, 187, 106, 0.3); padding: 8px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(102, 187, 106, 0.15); color: #81C784; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Get the algebraic expressions in the following cases using variables, constants and arithmetic operations:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) Subtraction of z from y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">y - z</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) One-half of the sum of numbers x and y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of x and y = (x + y)</div>
                    <div class="sol-step">One-half of sum = ${frac('x + y', 2)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac('x + y', 2)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) The number z multiplied by itself</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">z × z = z²</div>
                    <div class="sol-step"><span class="ans-highlight">= z²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) One-fourth of the product of numbers p and q</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of p and q = pq</div>
                    <div class="sol-step">One-fourth of product = ${frac('pq', 4)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac('pq', 4)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) Numbers x and y both squared and added</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Square of x = x², Square of y = y²</div>
                    <div class="sol-step"><span class="ans-highlight">= x² + y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) Number 5 added to three times the product of numbers m and n</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of m and n = mn</div>
                    <div class="sol-step">Three times product = 3mn</div>
                    <div class="sol-step"><span class="ans-highlight">= 3mn + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vii) Product of numbers y and z subtracted from 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of y and z = yz</div>
                    <div class="sol-step"><span class="ans-highlight">= 10 - yz</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(viii) Sum of numbers a and b subtracted from their product</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product = ab, Sum = (a + b)</div>
                    <div class="sol-step"><span class="ans-highlight">= ab - (a + b)</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. (i) Identify the terms and their factors in the following expressions using tree diagrams:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(a) x - 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
                            <text x="100" y="25" fill="#64B5F6" font-size="14" font-weight="bold" text-anchor="middle">x - 3</text>
                            <line x1="100" y1="30" x2="60" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="100" y1="30" x2="140" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <text x="60" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="140" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">-3</text>
                        </svg>
                    </div>
                    <div class="sol-step">Terms: x, -3</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: x; -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(b) 1 + x + x²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="260" height="110" viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg">
                            <text x="130" y="25" fill="#64B5F6" font-size="14" font-weight="bold" text-anchor="middle">1 + x + x²</text>
                            <line x1="130" y1="30" x2="50" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="130" y1="30" x2="130" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="130" y1="30" x2="210" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <text x="50" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">1</text>
                            <text x="130" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="210" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x² (x, x)</text>
                        </svg>
                    </div>
                    <div class="sol-step">Terms: 1, x, x²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 1; x; x, x</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Identify numerical coefficients of terms (other than constants) in the following expressions:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Expression</th><th>Term (with variable)</th><th>Numerical Coefficient</th></tr>
                        <tr><td>5 - 3t²</td><td>-3t²</td><td>-3</td></tr>
                        <tr><td>1 + t + t² + t³</td><td>t, t², t³</td><td>1, 1, 1</td></tr>
                        <tr><td>x + 2xy + 3y</td><td>x, 2xy, 3y</td><td>1, 2, 3</td></tr>
                        <tr><td>100m + 1000n</td><td>100m, 1000n</td><td>100, 1000</td></tr>
                        <tr><td>-p²q² + 7pq</td><td>-p²q², 7pq</td><td>-1, 7</td></tr>
                    </table>
                </div>
            </div>
        </div>
    \`,
    "ex10-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. If m = 2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) m - 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 2 - 2 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) 3m - 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) 9 - 5m</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 9 - 5(2) = 9 - 10 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 3m² - 2m - 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2)² - 2(2) - 7</div>
                    <div class="sol-step">= 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    {
      id: "c7m10-mcq-1",
      question: "Which of the following is a monomial?",
      options: ["x + y", "5x²", "a + b + c", "2x - 3"],
      correctAnswer: "b",
      explanation: "A monomial consists of exactly one single term (5x²)."
    },
    {
      id: "c7m10-mcq-2",
      question: "What is the numerical coefficient of term -7xy?",
      options: ["7", "-7", "x", "y"],
      correctAnswer: "b",
      explanation: "The numerical factor attached to the variable product xy is -7."
    },
    {
      id: "c7m10-mcq-3",
      question: "Which pair represents like terms?",
      options: ["3x and 3y", "5x and 7x", "2x and 2x²", "4xy and 4x"],
      correctAnswer: "b",
      explanation: "Like terms have the exact same algebraic variable factors (5x and 7x)."
    },
    {
      id: "c7m10-mcq-4",
      question: "Find the value of expression 2x + 3 when x = 4:",
      options: ["9", "11", "14", "8"],
      correctAnswer: "b",
      explanation: "Substitute x = 4: 2(4) + 3 = 8 + 3 = 11."
    },
    {
      id: "c7m10-mcq-5",
      question: "Sum of 3x and 5x is equal to:",
      options: ["8x²", "8x", "15x", "2x"],
      correctAnswer: "b",
      explanation: "Adding coefficients of like terms: (3 + 5)x = 8x."
    },
    {
      id: "c7m10-mcq-6",
      question: "Subtract 3a from 8a:",
      options: ["11a", "5a", "-5a", "24a"],
      correctAnswer: "b",
      explanation: "8a - 3a = (8 - 3)a = 5a."
    },
    {
      id: "c7m10-mcq-7",
      question: "An expression containing two terms is called a:",
      options: ["Monomial", "Binomial", "Trinomial", "Polynomial"],
      correctAnswer: "b",
      explanation: "An algebraic expression with 2 terms is called a binomial."
    },
    {
      id: "c7m10-mcq-8",
      question: "If a = 2 and b = 3, what is the value of a² + b²?",
      options: ["5", "10", "13", "25"],
      correctAnswer: "c",
      explanation: "2² + 3² = 4 + 9 = 13."
    },
    {
      id: "c7m10-mcq-9",
      question: "Degree of constant term like 5 is:",
      options: ["0", "1", "2", "Undefined"],
      correctAnswer: "a",
      explanation: "A non-zero constant term has a degree of 0 because 5 = 5x⁰."
    },
    {
      id: "c7m10-mcq-10",
      question: "What is the algebraic expression for '5 added to y'?",
      options: ["5y", "y - 5", "y + 5", "5/y"],
      correctAnswer: "c",
      explanation: "'5 added to y' is written as y + 5."
    }
  ]
};
`;

// ==========================================
// CHAPTER 11: EXPONENTS AND POWERS
// ==========================================
const c7Math11Content = `import { ChapterContent } from "../types";

export const c7Math11: ChapterContent = {
  id: "c7-math-11",
  number: 11,
  title: "Exponents and Powers",
  isHtmlView: true,
  introduction:
    "Exponents and powers allow us to express very large or very small numbers in a compact and readable way. They follow specific mathematical laws that simplify calculations.",
  definitions: [
    {
      term: "Base",
      description: "The number that is repeatedly multiplied by itself.",
    },
    {
      term: "Exponent / Power",
      description: "The number of times the base is multiplied by itself.",
    },
    {
      term: "Standard Form / Scientific Notation",
      description: "Expressing a number as a product of a number between 1.0 and 10.0 and a power of 10.",
    },
  ],
  keyPoints: [
    "aᵐ × aⁿ = aᵐ⁺ⁿ (Product law for same base).",
    "aᵐ ÷ aⁿ = aᵐ⁻ⁿ (Quotient law for same base).",
    "(aᵐ)ⁿ = aᵐⁿ (Power of a power law).",
    "a⁰ = 1 for any non-zero number a.",
  ],
  formulas: [
    { name: "Product Law", formula: "a^m \\\\times a^n = a^{m+n}" },
    { name: "Quotient Law", formula: "a^m \\\\div a^n = a^{m-n}" },
    { name: "Zero Exponent", formula: "a^0 = 1" },
  ],
  crux: [],
  exercises: [
    { id: "ex11-1", name: "Exercise 11.1", questions: [] },
    { id: "ex11-2", name: "Exercise 11.2", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #8E24AA; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(142, 36, 170, 0.05); border-left: 4px solid #8E24AA; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #8E24AA; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Exponents and Powers</div>
            <p class="content-text">In this chapter, we master exponential notation, laws of exponents, expanding expressions, and representing large numbers in standard scientific form.</p>
            <div class="point-box">
                <div class="point-item">Laws of Exponents: Simplify multiplication and division of powers.</div>
                <div class="point-item">Zero Power: Any non-zero base raised to power 0 equals 1.</div>
                <div class="point-item">Standard Form: Write large numbers as m × 10ⁿ where 1 ≤ m < 10.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex11-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #8E24AA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #8E24AA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #BA68C8; font-weight: bold; }
            .sol-body b, .subpart-title { color: #8E24AA; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 2⁶</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 9³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 × 9 × 9</div>
                    <div class="sol-step"><span class="ans-highlight">= 729</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 11²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 11 × 11</div>
                    <div class="sol-step"><span class="ans-highlight">= 121</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 5⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 625</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Express the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 6 × 6 × 6 × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) t × t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= t²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) b × b × b × b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= b⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 5 × 5 × 7 × 7 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5² × 7³</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex11-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #8E24AA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #8E24AA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #BA68C8; font-weight: bold; }
            .sol-body b, .subpart-title { color: #8E24AA; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Using laws of exponents, simplify and write answer in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 3² × 3⁴ × 3⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ × aⁿ = aᵐ⁺ⁿ:</div>
                    <div class="sol-step">= 3²⁺⁴⁺⁸</div>
                    <div class="sol-step"><span class="ans-highlight">= 3¹⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 6¹⁵ ÷ 6¹⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ ÷ aⁿ = aᵐ⁻ⁿ:</div>
                    <div class="sol-step">= 6¹⁵⁻¹⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) (7²)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law (aᵐ)ⁿ = aᵐⁿ:</div>
                    <div class="sol-step">= 7²ˣ³</div>
                    <div class="sol-step"><span class="ans-highlight">= 7⁶</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    {
      id: "c7m11-mcq-1",
      question: "What is the value of 2³?",
      options: ["6", "8", "9", "5"],
      correctAnswer: "b",
      explanation: "2³ = 2 × 2 × 2 = 8."
    },
    {
      id: "c7m11-mcq-2",
      question: "What is the value of any non-zero number raised to power 0 (a⁰)?",
      options: ["0", "a", "1", "10"],
      correctAnswer: "c",
      explanation: "By law of exponents, any non-zero number raised to power 0 equals 1."
    },
    {
      id: "c7m11-mcq-3",
      question: "Simplify: 5³ × 5⁴",
      options: ["5¹²", "5⁷", "25⁷", "5¹"],
      correctAnswer: "b",
      explanation: "Using product law aᵐ × aⁿ = aᵐ⁺ⁿ: 5³⁺⁴ = 5⁷."
    },
    {
      id: "c7m11-mcq-4",
      question: "Simplify: 7⁸ ÷ 7⁵",
      options: ["7³", "7¹³", "7⁴⁰", "1³"],
      correctAnswer: "a",
      explanation: "Using quotient law aᵐ ÷ aⁿ = aᵐ⁻ⁿ: 7⁸⁻⁵ = 7³."
    },
    {
      id: "c7m11-mcq-5",
      question: "Express 10000 in exponential base 10 form:",
      options: ["10²", "10³", "10⁴", "10⁵"],
      correctAnswer: "c",
      explanation: "10000 has 4 zeros, so it is 10⁴."
    },
    {
      id: "c7m11-mcq-6",
      question: "What is (-1)⁴ equal to?",
      options: ["-1", "1", "-4", "4"],
      correctAnswer: "b",
      explanation: "A negative number raised to an even power yields positive 1."
    },
    {
      id: "c7m11-mcq-7",
      question: "What is (-1)⁵ equal to?",
      options: ["-1", "1", "-5", "5"],
      correctAnswer: "a",
      explanation: "A negative number raised to an odd power yields -1."
    },
    {
      id: "c7m11-mcq-8",
      question: "Simplify: (2³)²",
      options: ["2⁵", "2⁶", "2⁹", "4⁶"],
      correctAnswer: "b",
      explanation: "Using power law (aᵐ)ⁿ = aᵐⁿ: 2³ˣ² = 2⁶."
    },
    {
      id: "c7m11-mcq-9",
      question: "Write 59000 in standard form:",
      options: ["59 × 10³", "5.9 × 10⁴", "0.59 × 10⁵", "5.9 × 10³"],
      correctAnswer: "b",
      explanation: "In standard scientific form, 59000 = 5.9 × 10⁴."
    },
    {
      id: "c7m11-mcq-10",
      question: "Which of the following is greater: 2³ or 3²?",
      options: ["2³", "3²", "Both are equal", "Cannot be determined"],
      correctAnswer: "b",
      explanation: "2³ = 8 and 3² = 9, so 3² is greater."
    }
  ]
};
`;

// ==========================================
// CHAPTER 12: SYMMETRY
// ==========================================
const c7Math12Content = `import { ChapterContent } from "../types";

export const c7Math12: ChapterContent = {
  id: "c7-math-12",
  number: 12,
  title: "Symmetry",
  isHtmlView: true,
  introduction:
    "Symmetry is a balanced and proportionate similarity that is found in nature and man-made structures. In geometry, we study line symmetry and rotational symmetry.",
  definitions: [
    {
      term: "Line Symmetry",
      description: "A figure has line symmetry if a line can be drawn dividing it into two identical matching halves.",
    },
    {
      term: "Rotational Symmetry",
      description: "A figure has rotational symmetry if it looks identical after a rotation of less than 360°.",
    },
    {
      term: "Order of Rotational Symmetry",
      description: "The number of positions in which a figure looks exactly the same during one complete 360° turn.",
    },
  ],
  keyPoints: [
    "A regular polygon with n sides has n lines of symmetry.",
    "A circle has infinitely many lines of symmetry.",
    "Order of rotational symmetry of a square is 4 (angle of rotation = 90°).",
    "Order of rotational symmetry of an equilateral triangle is 3 (angle of rotation = 120°).",
  ],
  formulas: [
    { name: "Angle of Rotation", formula: "\\\\text{Angle of Rotation} = \\\\frac{360^\\\\circ}{\\\\text{Order of Symmetry}}" },
  ],
  crux: [],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #00ACC1; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(0, 172, 193, 0.05); border-left: 4px solid #00ACC1; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #00ACC1; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Symmetry</div>
            <p class="content-text">Explore line symmetry, lines of symmetry in regular polygons, rotational symmetry, center of rotation, angle of rotation, and order of rotational symmetry.</p>
            <div class="point-box">
                <div class="point-item">Line Symmetry: Mirror reflection symmetry across a central axis line.</div>
                <div class="point-item">Rotational Symmetry: Matching shape orientation upon rotation around a fixed center point.</div>
                <div class="point-item">Regular Polygons: n-sided regular polygon has n lines of symmetry and rotational order n.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex12-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00ACC1; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00ACC1; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #4DD0E1; font-weight: bold; }
            .sol-body b, .subpart-title { color: #00ACC1; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. State the number of lines of symmetry for the following figures:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                            <!-- Equilateral Triangle -->
                            <polygon points="50,15 15,95 85,95" fill="rgba(66,165,245,0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="50" y1="15" x2="50" y2="95" stroke="#64B5F6" stroke-dasharray="3"/>
                            <text x="50" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Equilateral △</text>

                            <!-- Square -->
                            <rect x="120" y="20" width="70" height="70" fill="rgba(66,165,245,0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="155" y1="20" x2="155" y2="90" stroke="#64B5F6" stroke-dasharray="3"/>
                            <line x1="120" y1="55" x2="190" y2="55" stroke="#64B5F6" stroke-dasharray="3"/>
                            <text x="155" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Square</text>

                            <!-- Rectangle -->
                            <rect x="220" y="30" width="70" height="50" fill="rgba(66,165,245,0.2)" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="255" y1="30" x2="255" y2="80" stroke="#64B5F6" stroke-dasharray="3"/>
                            <line x1="220" y1="55" x2="290" y2="55" stroke="#64B5F6" stroke-dasharray="3"/>
                            <text x="255" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Rectangle</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(a) An Equilateral Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">3 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(b) An Isosceles Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">1 line of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(c) A Scalene Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">0 lines of symmetry (No symmetry)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(d) A Square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">4 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(e) A Rectangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">2 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(f) A Circle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Infinitely many lines of symmetry</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex12-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00ACC1; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00ACC1; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #4DD0E1; font-weight: bold; }
            .sol-body b, .subpart-title { color: #00ACC1; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Give the order of rotational symmetry for each figure:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#00ACC1;">(a) Square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = 90°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(b) Equilateral Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = 120°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(c) Regular Hexagon</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = 60°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 6</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    {
      id: "c7m12-mcq-1",
      question: "How many lines of symmetry does a square have?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "d",
      explanation: "A square has 4 lines of symmetry (2 diagonal + 2 mid-point perpendicular bisectors)."
    },
    {
      id: "c7m12-mcq-2",
      question: "How many lines of symmetry does a circle have?",
      options: ["1", "2", "4", "Infinitely many"],
      correctAnswer: "d",
      explanation: "Any line passing through the center of a circle is a line of symmetry."
    },
    {
      id: "c7m12-mcq-3",
      question: "What is the order of rotational symmetry of a square?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "d",
      explanation: "A square matches its original shape 4 times during one 360° turn."
    },
    {
      id: "c7m12-mcq-4",
      question: "What is the angle of rotation for an equilateral triangle?",
      options: ["60°", "90°", "120°", "180°"],
      correctAnswer: "c",
      explanation: "Angle of rotation = 360° / 3 = 120°."
    },
    {
      id: "c7m12-mcq-5",
      question: "How many lines of symmetry does a scalene triangle have?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "a",
      explanation: "A scalene triangle has all unequal sides and 0 lines of symmetry."
    },
    {
      id: "c7m12-mcq-6",
      question: "How many lines of symmetry does an isosceles triangle have?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "b",
      explanation: "An isosceles triangle has 1 line of symmetry along its altitude."
    },
    {
      id: "c7m12-mcq-7",
      question: "What is the order of rotational symmetry of a rectangle?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "b",
      explanation: "A rectangle looks identical twice (at 180° and 360°) during a full turn."
    },
    {
      id: "c7m12-mcq-8",
      question: "Which letter of the English alphabet has both horizontal and vertical line symmetry?",
      options: ["A", "B", "H", "C"],
      correctAnswer: "c",
      explanation: "The letter 'H' has both horizontal and vertical lines of symmetry."
    },
    {
      id: "c7m12-mcq-9",
      question: "What is the angle of rotation for a regular pentagon?",
      options: ["60°", "72°", "90°", "108°"],
      correctAnswer: "b",
      explanation: "Angle of rotation = 360° / 5 = 72°."
    },
    {
      id: "c7m12-mcq-10",
      question: "A figure having rotational symmetry of order 1 means:",
      options: ["High symmetry", "No rotational symmetry", "Rotates every 90°", "Is a circle"],
      correctAnswer: "b",
      explanation: "Order 1 means it only matches itself after a full 360° rotation (no non-trivial rotational symmetry)."
    }
  ]
};
`;

// ==========================================
// CHAPTER 13: VISUALISING SOLID SHAPES
// ==========================================
const c7Math13Content = `import { ChapterContent } from "../types";

export const c7Math13: ChapterContent = {
  id: "c7-math-13",
  number: 13,
  title: "Visualising Solid Shapes",
  isHtmlView: true,
  introduction:
    "In this chapter, we explore how to represent three-dimensional (3D) objects on a two-dimensional (2D) surface using nets, cross-sections, and shadows.",
  definitions: [
    {
      term: "Solid Shape (3D)",
      description: "A three-dimensional object that occupies space (e.g., cube, cuboid, sphere, cylinder, cone).",
    },
    {
      term: "Net",
      description: "A 2D flat layout pattern that can be folded to form a 3D solid shape.",
    },
    {
      term: "Faces, Edges, Vertices",
      description: "Faces are flat surfaces, Edges are line segments where faces meet, and Vertices are corner points.",
    },
  ],
  keyPoints: [
    "Cube: 6 square faces, 12 edges, 8 vertices.",
    "Cuboid: 6 rectangular faces, 12 edges, 8 vertices.",
    "Cylinder: 2 circular flat faces, 1 curved surface, 2 curved edges, 0 vertices.",
    "Cone: 1 circular base, 1 curved surface, 1 vertex.",
    "Sphere: 1 continuous curved surface, 0 edges, 0 vertices.",
  ],
  formulas: [
    { name: "Euler's Formula (for polyhedrons)", formula: "F + V - E = 2" },
  ],
  crux: [],
  exercises: [
    { id: "ex13-1", name: "Exercise 13.1", questions: [] },
    { id: "ex13-2", name: "Exercise 13.2", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF7043; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 112, 67, 0.05); border-left: 4px solid #FF7043; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF7043; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Visualising Solid Shapes</div>
            <p class="content-text">Learn to identify 3D solids, count their faces, edges, and vertices, analyze 2D nets for building 3D solids, and visualize cross-sections and shadows.</p>
            <div class="point-box">
                <div class="point-item">Polyhedron Properties: Faces (F), Vertices (V), and Edges (E).</div>
                <div class="point-item">Nets: 2D patterns that fold up to form 3D shapes.</div>
                <div class="point-item">Euler's Formula: F + V - E = 2 for any convex polyhedron.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex13-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Identify the 3D solid shapes shown below and state their number of faces, edges and vertices:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="320" height="130" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
                            <!-- Cube -->
                            <g id="cube">
                                <rect x="20" y="40" width="50" height="50" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="35" y="25" width="50" height="50" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="20" y1="40" x2="35" y2="25" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="70" y1="40" x2="85" y2="25" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="20" y1="90" x2="35" y2="75" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="70" y1="90" x2="85" y2="75" stroke="#42A5F5" stroke-width="2"/>
                                <text x="52" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Cube</text>
                            </g>

                            <!-- Cylinder -->
                            <g id="cylinder">
                                <ellipse cx="160" cy="35" rx="30" ry="12" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <ellipse cx="160" cy="85" rx="30" ry="12" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="130" y1="35" x2="130" y2="85" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="190" y1="35" x2="190" y2="85" stroke="#42A5F5" stroke-width="2"/>
                                <text x="160" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Cylinder</text>
                            </g>

                            <!-- Cone -->
                            <g id="cone">
                                <ellipse cx="260" cy="85" rx="30" ry="12" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="230" y1="85" x2="260" y2="25" stroke="#42A5F5" stroke-width="2"/>
                                <line x1="290" y1="85" x2="260" y2="25" stroke="#42A5F5" stroke-width="2"/>
                                <text x="260" y="115" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">Cone</text>
                            </g>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(i) Cube</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Faces (F) = 6 square faces</div>
                    <div class="sol-step">Edges (E) = 12 edges</div>
                    <div class="sol-step">Vertices (V) = 8 vertices</div>
                    <div class="sol-step"><span class="ans-highlight">F = 6, E = 12, V = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(ii) Cylinder</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Flat circular faces = 2</div>
                    <div class="sol-step">Curved surface = 1</div>
                    <div class="sol-step">Edges = 2 curved edges</div>
                    <div class="sol-step"><span class="ans-highlight">Faces = 3, Edges = 2, Vertices = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(iii) Cone</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Flat circular base = 1</div>
                    <div class="sol-step">Curved surface = 1</div>
                    <div class="sol-step"><span class="ans-highlight">Faces = 2, Edges = 1, Vertices = 1</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex13-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Verify Euler's Formula F + V - E = 2 for a cube:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">For a cube: Faces (F) = 6, Vertices (V) = 8, Edges (E) = 12</div>
                    <div class="sol-step">LHS = F + V - E = 6 + 8 - 12</div>
                    <div class="sol-step">= 14 - 12 = 2</div>
                    <div class="sol-step">RHS = 2</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS. Euler's formula is verified!</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    {
      id: "c7m13-mcq-1",
      question: "How many faces does a cube have?",
      options: ["4", "6", "8", "12"],
      correctAnswer: "b",
      explanation: "A cube has 6 identical square faces."
    },
    {
      id: "c7m13-mcq-2",
      question: "How many vertices does a cuboid have?",
      options: ["6", "8", "10", "12"],
      correctAnswer: "b",
      explanation: "A cuboid has 8 corner vertices."
    },
    {
      id: "c7m13-mcq-3",
      question: "How many edges does a cube have?",
      options: ["6", "8", "12", "16"],
      correctAnswer: "c",
      explanation: "A cube has 12 straight line edges."
    },
    {
      id: "c7m13-mcq-4",
      question: "Which of the following is Euler's formula for polyhedra?",
      options: ["F + V - E = 2", "F - V + E = 2", "F + E - V = 2", "F + V + E = 2"],
      correctAnswer: "a",
      explanation: "Euler's formula states that Faces + Vertices - Edges = 2."
    },
    {
      id: "c7m13-mcq-5",
      question: "How many vertices does a sphere have?",
      options: ["0", "1", "2", "Infinitely many"],
      correctAnswer: "a",
      explanation: "A sphere is completely smooth and rounded with 0 vertices."
    },
    {
      id: "c7m13-mcq-6",
      question: "How many vertices does a cone have?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "b",
      explanation: "A cone has 1 top apex vertex."
    },
    {
      id: "c7m13-mcq-7",
      question: "What shape is formed by the cross-section of a cylinder cut vertically?",
      options: ["Circle", "Rectangle", "Triangle", "Square"],
      correctAnswer: "b",
      explanation: "Cutting a cylinder vertically produces a rectangular cross-section."
    },
    {
      id: "c7m13-mcq-8",
      question: "What shape is formed by the cross-section of a cylinder cut horizontally?",
      options: ["Circle", "Rectangle", "Triangle", "Oval"],
      correctAnswer: "a",
      explanation: "Cutting a cylinder horizontally parallel to its base yields a circle."
    },
    {
      id: "c7m13-mcq-9",
      question: "A net is a:",
      options: ["3D solid shape", "2D layout pattern that folds into 3D shape", "Curved surface", "Line of symmetry"],
      correctAnswer: "b",
      explanation: "A net is a 2D flat skeleton pattern that can be folded to make a 3D solid."
    },
    {
      id: "c7m13-mcq-10",
      question: "If a solid shape has 5 faces and 6 vertices, how many edges does it have?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "c",
      explanation: "Using F + V - E = 2 ➔ 5 + 6 - E = 2 ➔ 11 - E = 2 ➔ E = 9 edges."
    }
  ]
};
`;

// Save all 4 files
const contentDir = path.join(__dirname, 'data', 'content');

fs.writeFileSync(path.join(contentDir, 'c7-math-10.ts'), c7Math10Content, 'utf-8');
console.log("Successfully refined c7-math-10.ts!");

fs.writeFileSync(path.join(contentDir, 'c7-math-11.ts'), c7Math11Content, 'utf-8');
console.log("Successfully refined c7-math-11.ts!");

fs.writeFileSync(path.join(contentDir, 'c7-math-12.ts'), c7Math12Content, 'utf-8');
console.log("Successfully refined c7-math-12.ts!");

fs.writeFileSync(path.join(contentDir, 'c7-math-13.ts'), c7Math13Content, 'utf-8');
console.log("Successfully refined c7-math-13.ts!");
