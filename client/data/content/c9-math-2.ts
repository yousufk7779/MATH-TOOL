import { ChapterContent } from "../types";

export const c9Math2: ChapterContent = {
  id: "c9-math-2",
  number: 2,
  title: "Polynomials",
  introduction: "In this chapter, we study a particular type of algebraic expression called a polynomial and the terminology related to it. We also explore the Remainder Theorem, Factor Theorem, and their use in the factorisation of polynomials.",
  definitions: [
    { term: "Polynomial", description: "An expression where the powers of variables are only whole numbers (0, 1, 2...)." },
    { term: "Degree", description: "The highest power of the variable in a polynomial." },
    { term: "Zero of a Polynomial", description: "A value that makes the polynomial equal to zero when substituted." }
  ],
  keyPoints: [
    "A polynomial of degree one is called a linear polynomial.",
    "A polynomial of degree two is called a quadratic polynomial.",
    "A polynomial of degree three is called a cubic polynomial.",
    "A non-zero constant polynomial has no zero.",
    "Every real number is a zero of the zero polynomial."
  ],
  formulas: [
    { name: "Identity I", formula: "(x + y)² = x² + 2xy + y²" },
    { name: "Identity II", formula: "(x - y)² = x² - 2xy + y²" },
    { name: "Identity III", formula: "x² - y² = (x + y)(x - y)" },
    { name: "Identity IV", formula: "(x + a)(x + b) = x² + (a + b)x + ab" }
  ],
  crux: [
    "Remainder Theorem: If p(x) is divided by (x - a), the remainder is p(a).",
    "Factor Theorem: (x - a) is a factor of p(x) if p(a) = 0.",
    "Splitting the middle term is a key method for factorising quadratic polynomials."
  ],
  exercises: [
    { id: "ex2-1", name: "Exercise 2.1", questions: [] },
    { id: "ex2-2", name: "Exercise 2.2", questions: [] },
    { id: "ex2-3", name: "Exercise 2.3", questions: [] },
    { id: "ex2-4", name: "Exercise 2.4", questions: [] },
    { id: "ex2-5", name: "Exercise 2.5", questions: [] }
  ],
  examples: [],
  theorems: [],
  mcqs: [
    {
      id: "m1",
      question: "Which of the following is a polynomial?",
      options: ["x² + 2x + 1", "√x + 3", "x + 1/x", "x^(3/2) + 1"],
      correctAnswer: "A"
    },
    {
      id: "m2",
      question: "The degree of the polynomial 4x⁴ + 0x³ + 0x⁵ + 5x + 7 is:",
      options: ["4", "5", "3", "7"],
      correctAnswer: "A"
    },
    {
      id: "m3",
      question: "The zero of the polynomial p(x) = 2x + 5 is:",
      options: ["2/5", "5/2", "-5/2", "-2/5"],
      correctAnswer: "C"
    },
    {
      id: "m4",
      question: "The value of the polynomial 5x - 4x² + 3 at x = -1 is:",
      options: ["-6", "-3", "2", "-1"],
      correctAnswer: "A"
    },
    {
      id: "m5",
      question: "If x + 1 is a factor of x² - k, then the value of k is:",
      options: ["1", "-1", "2", "0"],
      correctAnswer: "A"
    },
    {
      id: "m6",
      question: "The factorisation of x² - 9 is:",
      options: ["(x-3)²", "(x+3)(x-3)", "(x+9)(x-9)", "(x+3)²"],
      correctAnswer: "B"
    },
    {
      id: "m7",
      question: "The degree of a non-zero constant polynomial is:",
      options: ["0", "1", "Not defined", "Any natural number"],
      correctAnswer: "A"
    },
    {
      id: "m8",
      question: "The coefficient of x² in 2 + x² + x is:",
      options: ["0", "1", "2", "-1"],
      correctAnswer: "B"
    },
    {
      id: "m9",
      question: "A polynomial with one term is called a:",
      options: ["Binomial", "Trinomial", "Monomial", "None of these"],
      correctAnswer: "C"
    },
    {
      id: "m10",
      question: "The value of 102² using identity is:",
      options: ["10404", "10204", "10402", "10004"],
      correctAnswer: "A"
    }
  ],
  summary: [
    "A polynomial is an algebraic expression where the powers of variables are whole numbers.",
    "Polynomials are classified as Monomials, Binomials, or Trinomials based on the number of terms.",
    "The Remainder Theorem and Factor Theorem are used to find remainders and check for factors easily."
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '\\\\(', right: '\\\\)', display: false},
                {left: '\\\\[', right: '\\\\]', display: true},
                {left: '$', right: '$', display: false}
            ]
        });
    });
</script>

<div class="main-wrapper">

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">You have already studied algebraic expressions like addition, subtraction, multiplication, and division. In this chapter, we focus on a special type of algebraic expression called <strong>Polynomials</strong>.</div>
    </div>

    <div class="content-box">
        <div class="section-title">2. Basic Concepts</div>
        <div class="step"><strong>Polynomial:</strong> An algebraic expression in which the power of the variable is always a whole number (0, 1, 2, 3...).</div>
        <div class="step"><strong>Types of Polynomials (by terms):</strong>
            <ul>
                <li><strong>Monomial:</strong> Has only 1 term. (e.g., 5x)</li>
                <li><strong>Binomial:</strong> Has 2 terms. (e.g., x + 2)</li>
                <li><strong>Trinomial:</strong> Has 3 terms. (e.g., x² + 3x + 1)</li>
            </ul>
        </div>
        <div class="step"><strong>Degree:</strong> The highest power of the variable in a polynomial.
            <ul>
                <li><strong>Linear:</strong> Degree is 1. (e.g., x + 5)</li>
                <li><strong>Quadratic:</strong> Degree is 2. (e.g., x² + 2)</li>
                <li><strong>Cubic:</strong> Degree is 3. (e.g., x³ + x - 1)</li>
            </ul>
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Important Theorems</div>
        <div class="sub-header">Remainder Theorem:</div>
        <div class="step">When a polynomial p(x) is divided by (x - a), the remainder is simply the value of <strong>p(a)</strong>.</div>
        
        <div class="sub-header">Factor Theorem:</div>
        <div class="step">If the value of <strong>p(a) = 0</strong>, then (x - a) is a <strong>factor</strong> of the polynomial p(x).</div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Algebraic Identities</div>
        <div class="formula-box">
            1. \\((x + y)^2 = x^2 + 2xy + y^2\\)<br>
            2. \\((x - y)^2 = x^2 - 2xy + y^2\\)<br>
            3. \\(x^2 - y^2 = (x + y)(x - y)\\)<br>
            4. \\((x + a)(x + b) = x^2 + (a + b)x + ab\\)<br>
            5. \\((x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx\\)
        </div>
    </div>

</div>
`,
  htmlExercises: {
    "ex2-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Which of the following expressions are polynomials in one variable and which are not? State reasons for your answer.</div>
        <div class="solution">
          <span class="subpart">(i)</span> 4x² - 3x + 7 : It is a polynomial in one variable 'x' because the powers of x are whole numbers.<br/><br/>
          <span class="subpart">(ii)</span> y² + √2 : It is a polynomial in one variable 'y'.<br/><br/>
          <span class="subpart">(iii)</span> 3√t + t√2 : It is not a polynomial because the power of 't' in 3√t is 1/2, which is not a whole number.<br/><br/>
          <span class="subpart">(iv)</span> y + 2/y : It is not a polynomial because the power of 'y' in 2/y is -1, which is not a whole number.<br/><br/>
          <span class="subpart">(v)</span> x¹⁰ + y³ + t⁵⁰ : It is a polynomial but not in one variable; it is in three variables x, y, and t.
        </div>

        <div class="question">Q2. Write the coefficients of x² in each of the following:</div>
        <div class="solution">
          <span class="subpart">(i)</span> 2 + x² + x : The coefficient of x² is 1.<br/><br/>
          <span class="subpart">(ii)</span> 2 - x² + x³ : The coefficient of x² is -1.<br/><br/>
          <span class="subpart">(iii)</span> (π/2)x² + x : The coefficient of x² is π/2.<br/><br/>
          <span class="subpart">(iv)</span> √2x - 1 : The coefficient of x² is 0 (as x² term is missing).
        </div>

        <div class="question">Q3. Give one example each of a binomial of degree 35, and of a monomial of degree 100.</div>
        <div class="solution">
          <span class="subpart">Binomial of degree 35:</span> x³⁵ - 1<br/><br/>
          <span class="subpart">Monomial of degree 100:</span> 2y¹⁰⁰
        </div>

        <div class="question">Q4. Write the degree of each of the following polynomials:</div>
        <div class="solution">
          <span class="subpart">(i)</span> 5x³ + 4x² + 7x : Degree is 3.<br/><br/>
          <span class="subpart">(ii)</span> 4 - y² : Degree is 2.<br/><br/>
          <span class="subpart">(iii)</span> 5t - √7 : Degree is 1.<br/><br/>
          <span class="subpart">(iv)</span> 3 : Degree is 0 (Constant polynomial).
        </div>

        <div class="question">Q5. Classify the following as linear, quadratic and cubic polynomials:</div>
        <div class="solution">
          <span class="subpart">(i)</span> x² + x : Quadratic<br/><br/>
          <span class="subpart">(ii)</span> x - x³ : Cubic<br/><br/>
          <span class="subpart">(iii)</span> y + y² + 4 : Quadratic<br/><br/>
          <span class="subpart">(iv)</span> 1 + x : Linear<br/><br/>
          <span class="subpart">(v)</span> 3t : Linear<br/><br/>
          <span class="subpart">(vi)</span> r² : Quadratic<br/><br/>
          <span class="subpart">(vii)</span> 7x³ : Cubic
        </div>
      </div>
`,
    "ex2-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Find the value of the polynomial 5x - 4x² + 3 at:</div>
        <div class="solution">
          <span class="subpart">(i) x = 0 :</span><br/>
          5(0) - 4(0)² + 3 = 3<br/><br/>
          <span class="subpart">(ii) x = -1 :</span><br/>
          5(-1) - 4(-1)² + 3<br/>
          = -5 - 4 + 3<br/>
          = -6<br/><br/>
          <span class="subpart">(iii) x = 2 :</span><br/>
          5(2) - 4(2)² + 3<br/>
          = 10 - 16 + 3<br/>
          = -3
        </div>

        <div class="question">Q2. Find p(0), p(1) and p(2) for each of the following polynomials:</div>
        <div class="solution">
          <span class="subpart">(i) p(y) = y² - y + 1 :</span><br/>
          p(0) = 0² - 0 + 1 = 1<br/>
          p(1) = 1² - 1 + 1 = 1<br/>
          p(2) = 2² - 2 + 1 = 3<br/><br/>
          <span class="subpart">(ii) p(t) = 2 + t + 2t² - t³ :</span><br/>
          p(0) = 2<br/>
          p(1) = 2 + 1 + 2(1)² - 1³ = 4<br/>
          p(2) = 2 + 2 + 2(2)² - 2³ = 4<br/><br/>
          <span class="subpart">(iii) p(x) = x³ :</span><br/>
          p(0) = 0<br/>
          p(1) = 1<br/>
          p(2) = 8<br/><br/>
          <span class="subpart">(iv) p(x) = (x - 1)(x + 1) :</span><br/>
          p(0) = (0-1)(0+1) = -1<br/>
          p(1) = (1-1)(1+1) = 0<br/>
          p(2) = (2-1)(2+1) = 3
        </div>

        <div class="question">Q3. Verify whether the following are zeros of the polynomial, indicated against them:</div>
        <div class="solution">
          <span class="subpart">(i) p(x) = 3x + 1, x = -1/3 :</span><br/>
          p(-1/3) = 3(-1/3) + 1 = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(ii) p(x) = 5x - π, x = 4/5 :</span><br/>
          p(4/5) = 5(4/5) - π = 4 - π<br/>
          No.<br/><br/>
          <span class="subpart">(iii) p(x) = x² - 1, x = 1, -1 :</span><br/>
          p(1) = 1² - 1 = 0<br/>
          p(-1) = (-1)² - 1 = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(iv) p(x) = (x + 1)(x - 2), x = -1, 2 :</span><br/>
          p(-1) = (-1+1)(-1-2) = 0<br/>
          p(2) = (2+1)(2-2) = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(v) p(x) = x², x = 0 :</span><br/>
          p(0) = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(vi) p(x) = lx + m, x = -m/l :</span><br/>
          p(-m/l) = l(-m/l) + m = -m + m = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(vii) p(x) = 3x² - 1, x = -1/√3, 2/√3 :</span><br/>
          p(-1/√3) = 3(-1/√3)² - 1 = 0 (Yes)<br/>
          p(2/√3) = 3(2/√3)² - 1 = 3(4/3) - 1 = 3 (No).<br/><br/>
          <span class="subpart">(viii) p(x) = 2x + 1, x = 1/2 :</span><br/>
          p(1/2) = 2(1/2) + 1 = 2<br/>
          No.
        </div>

        <div class="question">Q4. Find the zero of the polynomial in each of the following cases:</div>
        <div class="solution">
          <span class="subpart">(i) p(x) = x + 5 :</span><br/>
          x + 5 = 0 ⇒ x = -5<br/><br/>
          <span class="subpart">(ii) p(x) = x - 5 :</span><br/>
          x - 5 = 0 ⇒ x = 5<br/><br/>
          <span class="subpart">(iii) p(x) = 2x + 5 :</span><br/>
          2x + 5 = 0 ⇒ x = -5/2<br/><br/>
          <span class="subpart">(iv) p(x) = 3x - 2 :</span><br/>
          3x - 2 = 0 ⇒ x = 2/3<br/><br/>
          <span class="subpart">(v) p(x) = 3x :</span><br/>
          3x = 0 ⇒ x = 0<br/><br/>
          <span class="subpart">(vi) p(x) = ax, a ≠ 0 :</span><br/>
          ax = 0 ⇒ x = 0<br/><br/>
          <span class="subpart">(vii) p(x) = cx + d :</span><br/>
          cx + d = 0 ⇒ x = -d/c
        </div>
      </div>
`,
    "ex2-3": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Find the remainder when x³ + 3x² + 3x + 1 is divided by:</div>
        <div class="solution">
          Let p(x) = x³ + 3x² + 3x + 1<br/><br/>
          <span class="subpart">(i) x + 1 :</span><br/>
          p(-1) = (-1)³ + 3(-1)² + 3(-1) + 1<br/>
          = -1 + 3 - 3 + 1 = 0<br/>
          Remainder = 0.<br/><br/>
          <span class="subpart">(ii) x - 1/2 :</span><br/>
          p(1/2) = (1/2)³ + 3(1/2)² + 3(1/2) + 1<br/>
          = 1/8 + 3/4 + 3/2 + 1 = 27/8<br/>
          Remainder = 27/8.<br/><br/>
          <span class="subpart">(iii) x :</span><br/>
          p(0) = 0³ + 3(0)² + 3(0) + 1 = 1<br/>
          Remainder = 1.<br/><br/>
          <span class="subpart">(iv) x + π :</span><br/>
          p(-π) = (-π)³ + 3(-π)² + 3(-π) + 1<br/>
          = -π³ + 3π² - 3π + 1<br/>
          Remainder = -π³ + 3π² - 3π + 1.<br/><br/>
          <span class="subpart">(v) 5 + 2x :</span><br/>
          2x = -5 ⇒ x = -5/2<br/>
          p(-5/2) = (-5/2)³ + 3(-5/2)² + 3(-5/2) + 1<br/>
          = -125/8 + 75/4 - 15/2 + 1 = -27/8<br/>
          Remainder = -27/8.
        </div>

        <div class="question">Q2. Find the remainder when x³ - ax² + 6x - a is divided by x - a.</div>
        <div class="solution">
          Let p(x) = x³ - ax² + 6x - a<br/><br/>
          Remainder = p(a)<br/>
          = (a)³ - a(a)² + 6(a) - a<br/>
          = a³ - a³ + 6a - a<br/>
          = 5a.<br/>
          The remainder is 5a.
        </div>

        <div class="question">Q3. Check whether 7 + 3x is a factor of 3x³ + 7x.</div>
        <div class="solution">
          7 + 3x = 0 ⇒ 3x = -7 ⇒ x = -7/3<br/><br/>
          Let p(x) = 3x³ + 7x<br/>
          p(-7/3) = 3(-7/3)³ + 7(-7/3)<br/>
          = 3(-343/27) - 49/3<br/>
          = -343/9 - 147/9<br/>
          = -490/9<br/>
          Since p(-7/3) ≠ 0, 7 + 3x is not a factor of 3x³ + 7x.
        </div>
      </div>
`,
    "ex2-4": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Determine which of the following polynomials has (x + 1) a factor:</div>
        <div class="solution">
          Let p(x) be the given polynomials. (x + 1) is a factor if p(-1) = 0.<br/><br/>
          <span class="subpart">(i) x³ + x² + x + 1 :</span><br/>
          p(-1) = (-1)³ + (-1)² + (-1) + 1<br/>
          = -1 + 1 - 1 + 1 = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(ii) x⁴ + x³ + x² + x + 1 :</span><br/>
          p(-1) = (-1)⁴ + (-1)³ + (-1)² + (-1) + 1<br/>
          = 1 - 1 + 1 - 1 + 1 = 1<br/>
          No.<br/><br/>
          <span class="subpart">(iii) x⁴ + 3x³ + 3x² + x + 1 :</span><br/>
          p(-1) = (-1)⁴ + 3(-1)³ + 3(-1)² + (-1) + 1<br/>
          = 1 - 3 + 3 - 1 + 1 = 1<br/>
          No.<br/><br/>
          <span class="subpart">(iv) x³ - x² - (2 + √2)x + √2 :</span><br/>
          p(-1) = (-1)³ - (-1)² - (2 + √2)(-1) + √2<br/>
          = -1 - 1 + 2 + √2 + √2 = 2√2<br/>
          No.
        </div>

        <div class="question">Q2. Use the Factor Theorem to determine whether g(x) is a factor of p(x) in each of the following cases:</div>
        <div class="solution">
          <span class="subpart">(i) p(x) = 2x³ + x² - 2x - 1, g(x) = x + 1 :</span><br/>
          p(-1) = 2(-1)³ + (-1)² - 2(-1) - 1<br/>
          = -2 + 1 + 2 - 1 = 0<br/>
          Yes.<br/><br/>
          <span class="subpart">(ii) p(x) = x³ + 3x² + 3x + 1, g(x) = x + 2 :</span><br/>
          p(-2) = (-2)³ + 3(-2)² + 3(-2) + 1<br/>
          = -8 + 12 - 6 + 1 = -1<br/>
          No.<br/><br/>
          <span class="subpart">(iii) p(x) = x³ - 4x² + x + 6, g(x) = x - 3 :</span><br/>
          p(3) = (3)³ - 4(3)² + 3 + 6<br/>
          = 27 - 36 + 3 + 6 = 0<br/>
          Yes.
        </div>

        <div class="question">Q3. Find the value of k, if x - 1 is a factor of p(x) in each of the following cases:</div>
        <div class="solution">
          If x - 1 is a factor, then p(1) = 0.<br/><br/>
          <span class="subpart">(i) p(x) = x² + x + k :</span><br/>
          1² + 1 + k = 0 ⇒ k = -2<br/><br/>
          <span class="subpart">(ii) p(x) = 2x² + kx + √2 :</span><br/>
          2(1)² + k(1) + √2 = 0 ⇒ k = -(2 + √2)<br/><br/>
          <span class="subpart">(iii) p(x) = kx² - √2x + 1 :</span><br/>
          k(1)² - √2(1) + 1 = 0 ⇒ k = √2 - 1<br/><br/>
          <span class="subpart">(iv) p(x) = kx² - 3x + k :</span><br/>
          k(1)² - 3(1) + k = 0 ⇒ 2k = 3 ⇒ k = 3/2
        </div>

        <div class="question">Q4. Factorise:</div>
        <div class="solution">
          <span class="subpart">(i) 12x² - 7x + 1 :</span><br/>
          12x² - 4x - 3x + 1<br/>
          = 4x(3x - 1) - 1(3x - 1)<br/>
          = (4x - 1)(3x - 1)<br/><br/>
          <span class="subpart">(ii) 2x² + 7x + 3 :</span><br/>
          2x² + 6x + x + 3<br/>
          = 2x(x + 3) + 1(x + 3)<br/>
          = (2x + 1)(x + 3)<br/><br/>
          <span class="subpart">(iii) 6x² + 5x - 6 :</span><br/>
          6x² + 9x - 4x - 6<br/>
          = 3x(2x + 3) - 2(2x + 3)<br/>
          = (3x - 2)(2x + 3)<br/><br/>
          <span class="subpart">(iv) 3x² - x - 4 :</span><br/>
          3x² - 4x + 3x - 4<br/>
          = x(3x - 4) + 1(3x - 4)<br/>
          = (x + 1)(3x - 4)
        </div>

        <div class="question">Q5. Factorise:</div>
        <div class="solution">
          <span class="subpart">(i) x³ - 2x² - x + 2 :</span><br/>
          p(1) = 0. (x-1) is a factor.<br/>
          x³ - x² - x² + x - 2x + 2<br/>
          = x²(x-1) - x(x-1) - 2(x-1)<br/>
          = (x-1)(x² - x - 2)<br/>
          = (x-1)(x-2)(x+1)<br/><br/>
          <span class="subpart">(ii) x³ - 3x² - 9x - 5 :</span><br/>
          p(-1) = 0. (x+1) is a factor.<br/>
          (x+1)(x² - 4x - 5)<br/>
          = (x+1)(x-5)(x+1)<br/><br/>
          <span class="subpart">(iii) x³ + 13x² + 32x + 20 :</span><br/>
          p(-1) = 0. (x+1) is a factor.<br/>
          (x+1)(x² + 12x + 20)<br/>
          = (x+1)(x+2)(x+10)<br/><br/>
          <span class="subpart">(iv) 2y³ + y² - 2y - 1 :</span><br/>
          p(1) = 0. (y-1) is a factor.<br/>
          (y-1)(2y² + 3y + 1)<br/>
          = (y-1)(2y+1)(y+1)
        </div>
      </div>
`,
    "ex2-5": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4081; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4081; padding-left: 15px; margin-top: 15px; background: rgba(255, 64, 129, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4081 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4081 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 64, 129, 0.05) !important; border-left: 4px solid #FF4081 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4081 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4081 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4081 !important; font-weight: 700; }
        strong { color: #FF4081 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4081; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 64, 129, 0.05); color: #FF4081; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Use suitable identities to find the following products:</div>
        <div class="solution">
          <span class="subpart">(i) (x + 4)(x + 10) :</span><br/>
          x² + (4 + 10)x + 40<br/>
          = x² + 14x + 40<br/><br/>
          <span class="subpart">(ii) (x + 8)(x - 10) :</span><br/>
          x² + (8 - 10)x - 80<br/>
          = x² - 2x - 80<br/><br/>
          <span class="subpart">(iii) (3x + 4)(3x - 5) :</span><br/>
          (3x)² + (4 - 5)(3x) - 20<br/>
          = 9x² - 3x - 20<br/><br/>
          <span class="subpart">(iv) (y² + 3/2)(y² - 3/2) :</span><br/>
          (y²)² - (3/2)²<br/>
          = y⁴ - 9/4<br/><br/>
          <span class="subpart">(v) (3 - 2x)(3 + 2x) :</span><br/>
          3² - (2x)²<br/>
          = 9 - 4x²
        </div>

        <div class="question">Q2. Evaluate the following products without multiplying directly:</div>
        <div class="solution">
          <span class="subpart">(i) 103 × 107 :</span><br/>
          (100 + 3)(100 + 7)<br/>
          = 100² + (3 + 7)100 + 21<br/>
          = 10000 + 1000 + 21<br/>
          = 11021<br/><br/>
          <span class="subpart">(ii) 95 × 96 :</span><br/>
          (100 - 5)(100 - 4)<br/>
          = 100² - (5 + 4)100 + 20<br/>
          = 10000 - 900 + 20<br/>
          = 9120<br/><br/>
          <span class="subpart">(iii) 104 × 96 :</span><br/>
          (100 + 4)(100 - 4)<br/>
          = 100² - 4²<br/>
          = 10000 - 16<br/>
          = 9984
        </div>

        <div class="question">Q3. Factorise the following using appropriate identities:</div>
        <div class="solution">
          <span class="subpart">(i) 9x² + 6xy + y² :</span><br/>
          (3x)² + 2(3x)(y) + y²<br/>
          = (3x + y)²<br/><br/>
          <span class="subpart">(ii) 4y² - 4y + 1 :</span><br/>
          (2y)² - 2(2y)(1) + 1²<br/>
          = (2y - 1)²<br/><br/>
          <span class="subpart">(iii) x² - y²/100 :</span><br/>
          x² - (y/10)²<br/>
          = (x + y/10)(x - y/10)
        </div>

        <div class="question">Q4. Expand each of the following, using suitable identities:</div>
        <div class="solution">
          <span class="subpart">(i) (x + 2y + 4z)² :</span><br/>
          x² + 4y² + 16z² + 4xy + 16yz + 8zx<br/><br/>
          <span class="subpart">(ii) (2x - y + z)² :</span><br/>
          4x² + y² + z² - 4xy - 2yz + 4zx<br/><br/>
          <span class="subpart">(iii) (-2x + 3y + 2z)² :</span><br/>
          4x² + 9y² + 4z² - 12xy + 12yz - 8zx<br/><br/>
          <span class="subpart">(iv) (3a - 7b - c)² :</span><br/>
          9a² + 49b² + c² - 42ab + 14bc - 6ac<br/><br/>
          <span class="subpart">(v) (-2x + 5y - 3z)² :</span><br/>
          4x² + 25y² + 9z² - 20xy - 30yz + 12zx<br/><br/>
          <span class="subpart">(vi) [1/4 a - 1/2 b + 1]² :</span><br/>
          1/16 a² + 1/4 b² + 1 - 1/4 ab - b + 1/2 a
        </div>

        <div class="question">Q5. Factorise:</div>
        <div class="solution">
          <span class="subpart">(i) 4x² + 9y² + 16z² + 12xy - 24yz - 16xz :</span><br/>
          (2x + 3y - 4z)²<br/><br/>
          <span class="subpart">(ii) 2x² + y² + 8z² - 2√2xy + 4√2yz - 8xz :</span><br/>
          (-√2x + y + 2√2z)²
        </div>

        <div class="question">Q6. Write the following cubes in expanded form:</div>
        <div class="solution">
          <span class="subpart">(i) (2x + 1)³ :</span><br/>
          8x³ + 1 + 6x(2x + 1)<br/>
          = 8x³ + 12x² + 6x + 1<br/><br/>
          <span class="subpart">(ii) (2a - 3b)³ :</span><br/>
          8a³ - 27b³ - 18ab(2a - 3b)<br/>
          = 8a³ - 27b³ - 36a²b + 54ab²<br/><br/>
          <span class="subpart">(iii) (3/2 x + 1)³ :</span><br/>
          27/8 x³ + 1 + 27/4 x² + 9/2 x<br/><br/>
          <span class="subpart">(iv) (x - 2/3 y)³ :</span><br/>
          x³ - 8/27 y³ - 2x²y + 4/3 xy²
        </div>

        <div class="question">Q7. Evaluate the following using suitable identities:</div>
        <div class="solution">
          <span class="subpart">(i) 99³ :</span><br/>
          (100 - 1)³<br/>
          = 100³ - 1³ - 3(100)(1)(100-1)<br/>
          = 1000000 - 1 - 29700<br/>
          = 970299<br/><br/>
          <span class="subpart">(ii) 102³ :</span><br/>
          (100 + 2)³<br/>
          = 100³ + 2³ + 3(100)(2)(100+2)<br/>
          = 1000000 + 8 + 61200<br/>
          = 1061208<br/><br/>
          <span class="subpart">(iii) 998³ :</span><br/>
          (1000 - 2)³<br/>
          = 1000³ - 2³ - 3(1000)(2)(1000-2)<br/>
          = 1000000000 - 8 - 5988000<br/>
          = 994011992
        </div>

        <div class="question">Q8. Factorise each of the following:</div>
        <div class="solution">
          <span class="subpart">(i) 8a³ + b³ + 12a²b + 6ab² :</span><br/>
          (2a + b)³<br/><br/>
          <span class="subpart">(ii) 8a³ - b³ - 12a²b + 6ab² :</span><br/>
          (2a - b)³<br/><br/>
          <span class="subpart">(iii) 27 - 125a³ - 135a + 225a² :</span><br/>
          (3 - 5a)³<br/><br/>
          <span class="subpart">(iv) 64a³ - 27b³ - 144a²b + 108ab² :</span><br/>
          (4a - 3b)³<br/><br/>
          <span class="subpart">(v) 27p³ - 1/216 - 9/2 p² + 1/4 p :</span><br/>
          (3p - 1/6)³
        </div>

        <div class="question">Q9. Verify:</div>
        <div class="solution">
          <span class="subpart">(i) x³ + y³ = (x + y)(x² - xy + y²) :</span><br/>
          RHS = x(x² - xy + y²) + y(x² - xy + y²)<br/>
          = x³ - x²y + xy² + yx² - xy² + y³<br/>
          = x³ + y³.<br/><br/>
          <span class="subpart">(ii) x³ - y³ = (x - y)(x² + xy + y²) :</span><br/>
          RHS = x(x² + xy + y²) - y(x² + xy + y²)<br/>
          = x³ + x²y + xy² - yx² - xy² - y³<br/>
          = x³ - y³.
        </div>

        <div class="question">Q10. Factorise each of the following:</div>
        <div class="solution">
          <span class="subpart">(i) 27y³ + 125z³ :</span><br/>
          (3y)³ + (5z)³<br/>
          = (3y + 5z)(9y² - 15yz + 25z²)<br/><br/>
          <span class="subpart">(ii) 64m³ - 343n³ :</span><br/>
          (4m)³ - (7n)³<br/>
          = (4m - 7n)(16m² + 28mn + 49n²)
        </div>

        <div class="question">Q11. Factorise: 27x³ + y³ + z³ - 9xyz</div>
        <div class="solution">
          Using x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)<br/><br/>
          (3x)³ + y³ + z³ - 3(3x)(y)(z)<br/>
          = (3x + y + z)(9x² + y² + z² - 3xy - yz - 3xz)
        </div>

        <div class="question">Q12. Verify that x³ + y³ + z³ - 3xyz = 1/2 (x + y + z) [(x - y)² + (y - z)² + (z - x)²]</div>
        <div class="solution">
          RHS = 1/2 (x + y + z) [x² - 2xy + y² + y² - 2yz + z² + z² - 2zx + x²]<br/>
          = 1/2 (x + y + z) [2x² + 2y² + 2z² - 2xy - 2yz - 2zx]<br/>
          = (x + y + z)(x² + y² + z² - xy - yz - zx) = LHS.
        </div>

        <div class="question">Q13. If x + y + z = 0, show that x³ + y³ + z³ = 3xyz.</div>
        <div class="solution">
          We know x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)<br/><br/>
          If x + y + z = 0, then:<br/>
          x³ + y³ + z³ - 3xyz = 0 × (x² + y² + z² - xy - yz - zx) = 0<br/>
          ⇒ x³ + y³ + z³ = 3xyz.
        </div>

        <div class="question">Q14. Without actually calculating the cubes, find the value of each of the following:</div>
        <div class="solution">
          <span class="subpart">(i) (-12)³ + (7)³ + (5)³ :</span><br/>
          Here -12 + 7 + 5 = 0.<br/>
          Using identity, value = 3(-12)(7)(5) = -1260.<br/><br/>
          <span class="subpart">(ii) (28)³ + (-15)³ + (-13)³ :</span><br/>
          Here 28 - 15 - 13 = 0.<br/>
          Using identity, value = 3(28)(-15)(-13) = 16380.
        </div>

        <div class="question">Q15. Give possible expressions for the length and breadth of each of the following rectangles, in which their areas are given:</div>
        <div class="solution">
          <span class="subpart">(i) Area: 25a² - 35a + 12 :</span><br/>
          25a² - 20a - 15a + 12<br/>
          = 5a(5a - 4) - 3(5a - 4)<br/>
          = (5a - 3)(5a - 4)<br/>
          Length = 5a - 3, Breadth = 5a - 4 (or vice-versa).<br/><br/>
          <span class="subpart">(ii) Area: 35y² + 13y - 12 :</span><br/>
          35y² + 28y - 15y - 12<br/>
          = 7y(5y + 4) - 3(5y + 4)<br/>
          = (7y - 3)(5y + 4)<br/>
          Length = 5y + 4, Breadth = 7y - 3.
        </div>

        <div class="question">Q16. What are the possible expressions for the dimensions of the cuboids whose volumes are given below?</div>
        <div class="solution">
          <span class="subpart">(i) Volume: 3x² - 12x :</span><br/>
          3x(x - 4)<br/>
          Dimensions: 3, x, (x - 4).<br/><br/>
          <span class="subpart">(ii) Volume: 12ky² + 8ky - 20k :</span><br/>
          4k(3y² + 2y - 5)<br/>
          = 4k(3y² + 5y - 3y - 5)<br/>
          = 4k[y(3y+5)-1(3y+5)]<br/>
          = 4k(y-1)(3y+5)<br/>
          Dimensions: 4k, (y-1), (3y+5).
        </div>
      </div>
`,
  }
};
