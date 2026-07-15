import { ChapterContent } from "../types";

export const mathCh1: ChapterContent = {
  id: "ch1",
  number: 1,
  title: "Real Numbers",
  introduction: "Real numbers constitute the foundation of mathematics. Every number that can be plotted on a number line is a real number. This chapter covers properties of integers, rational, and irrational numbers.",
  definitions: [
  {
    "term": "Real Numbers (R)",
    "description": "The set of rational and irrational numbers."
  },
  {
    "term": "Prime Number",
    "description": "A number that has exactly two factors (1 and itself)."
  },
  {
    "term": "Composite Number",
    "description": "A number that has more than two factors."
  },
  {
    "term": "Rational Number",
    "description": "A number that can be written in the form p/q, where p and q are integers and q ≠ 0."
  },
  {
    "term": "Irrational Number",
    "description": "A number that cannot be written in the form p/q, where p and q are integers and q ≠ 0."
  }
],
  keyPoints: [
  "The Fundamental Theorem of Arithmetic: Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
  "Properties of irrational numbers: Proving numbers like √2, √3, and √5 are irrational."
],
  formulas: [
  {
    "name": "HCF and LCM Relation",
    "formula": "HCF(a, b) × LCM(a, b) = a × b (for any two positive integers a and b)"
  }
],
  crux: [
  "Proving absolute irrationality of a number (such as √2 or √5) using the method of contradiction.",
  "Determining HCF and LCM of numbers using unique prime factorisation (Fundamental Theorem of Arithmetic)."
],
  summary: [
  "Real numbers connect abstract algebra to tangible measurement.",
  "The relationship HCF(a, b) × LCM(a, b) = a × b holds true for any two positive integers.",
  "Carefully read and understand every problem statement before jumping into the solution.",
  "A strong grasp of the core concepts is the key to solving complex problems easily.",
  "Make a habit of practicing the solved examples to get familiar with standard solution formats."
],
  examples: [
  {
    "id": "q1",
    "number": "1",
    "question": "<span style=\"font-weight: normal;\">Check whether 4ⁿ can end with the digit 0 for any natural number n.</span>",
    "solution": [
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
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 1.1", questions: [] },
    { id: "exercise2", name: "Exercise 1.2", questions: [] }
  ],
  mcqs: [
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
],
  isHtmlView: true,
  htmlExercises: {
    examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Numbers - Examples</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
            font-size: 1.1em;
        }

        .section-title {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            color: #555;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1em;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .formula {
            background-color: #fff3e0;
            padding: 2px 5px;
            border-radius: 4px;
            color: #D32F2F;
            font-weight: 700;
            display: inline-block;
            margin: 2px 0;
            border: 1px solid #ffe0b2;
        }

        .formula-block {
            display: block;
            margin: 10px 0;
            text-align: center;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.1em;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
        }

        .numerator {
            border-bottom: 1px solid #333;
            display: block;
            padding: 0 2px;
        }

        .denominator {
            display: block;
            padding: 0 2px;
        }

        .diagram-placeholder {
            float: right;
            width: 120px;
            height: 120px;
            border: 2px dashed #bbb;
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #888;
            font-size: 11px;
            margin-left: 10px;
            text-align: center;
            font-family: 'Nunito', sans-serif;
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }

        sup {
            top: -0.5em;
        }

        sub {
            bottom: -0.25em;
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
    </style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FFB74D !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFB74D !important; }
  .question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FFB74D !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #FFB74D !important; }
  strong[style*="color: #ff6b6b"] { color: #FFB74D !important; }
</style>
</head>

<body>
<!-- Example 1 -->
    <div class="content-box">
        <div class="question">Example 1. Check whether 4ⁿ can end with the digit 0 for any natural number n.</div>

        <div class="section-title">Solution:</div>
        <div class="step">For any number to end with the digit 0, it must be divisible by 10.</div>
        <div class="step">This implies that its prime factorization must include the prime numbers 2 and 5.</div>

        <div class="step formula-block"><span class="formula">4ⁿ = (2²)ⁿ = 2²ⁿ</span></div>
        <div class="step">The prime factorization of 4ⁿ contains only the prime 2.</div>
        <div class="step">There is no factor 5 in it.</div>
        <div class="step">The Fundamental Theorem of Arithmetic guarantees the uniqueness of this factorization.</div>
        <div class="step">So, there is no natural number n for which 4ⁿ ends with the digit 0.</div>

        <div class="final-answer">Hence, 4ⁿ cannot end with digit 0.</div>
    </div>

    <!-- Example 2 -->
    <div class="content-box">
        <div class="question">Example 2. Find the LCM and HCF of 6 and 20 by the prime factorisation method.</div>

        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization:</div>
        <div class="step">6 = 2 × 3</div>
        <div class="step">20 = 2 × 2 × 5 = 2² × 5</div>

        <div class="step"><strong>To find HCF:</strong></div>
        <div class="step">The common prime factor is 2.</div>
        <div class="step">The smallest power of the common factor 2 is 2¹.</div>
        <div class="step formula-block"><span class="formula">HCF(6, 20) = 2</span></div>

        <div class="step"><strong>To find LCM:</strong></div>
        <div class="step">The prime factors involved are 2, 3, and 5.</div>
        <div class="step">The greatest power of each prime factor involved:</div>
        <div class="step">2² (for 2), 3¹ (for 3), 5¹ (for 5).</div>
        <div class="step formula-block"><span class="formula">LCM(6, 20) = 2² × 3 × 5 = 4 × 3 × 5 = 60</span></div>

        <div class="final-answer">HCF(6, 20) = 2, LCM(6, 20) = 60</div>
    </div>

    <!-- Example 3 -->
    <div class="content-box">
        <div class="question">Example 3. Find the HCF of 96 and 404 by the prime factorisation method. Hence, find their
            LCM.</div>

        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization:</div>
        <div class="step">96 = 2 × 2 × 2 × 2 × 2 × 3 = 2⁵ × 3</div>
        <div class="step">404 = 2 × 2 × 101 = 2² × 101</div>

        <div class="step">The common prime factor is 2. The smallest power is 2².</div>
        <div class="step">HCF(96, 404) = 2² = 4</div>

        <div class="section-title">Finding LCM:</div>
        <div class="step">We know the relationship:</div>
        <div class="step formula-block"><span class="formula">LCM × HCF = Product of the two numbers</span></div>
        <div class="step">LCM × 4 = 96 × 404</div>
        <div class="step">
            LCM = \\(\\frac{96 × 404}{4}\\)
        </div>
        <div class="step">LCM = 24 × 404</div>
        <div class="step">LCM = 9696</div>

        <div class="final-answer">HCF = 4, LCM = 9696</div>
    </div>

    <!-- Example 4 -->
    <div class="content-box">
        <div class="question">Example 4. Find the HCF and LCM of 6, 72 and 120, using the prime factorisation method.
        </div>

        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization:</div>
        <div class="step">6 = 2 × 3</div>
        <div class="step">72 = 2³ × 3²</div>
        <div class="step">120 = 2³ × 3 × 5</div>

        <div class="step"><strong>HCF:</strong> Common factors are 2 and 3. Smallest powers are 2¹ and 3¹.</div>
        <div class="step formula-block"><span class="formula">HCF = 2 × 3 = 6</span></div>

        <div class="step"><strong>LCM:</strong> Greatest powers are 2³, 3² and 5¹.</div>
        <div class="step formula-block"><span class="formula">LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360</span></div>

        <div class="final-answer">HCF = 6, LCM = 360</div>
    </div>

    <!-- Example 5 -->
    <div class="content-box">
        <div class="question">Example 5. Prove that √3 is irrational.</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume, to the contrary, that √3 is rational.</div>
        <div class="step">Therefore, we can find integers <i>a</i> and <i>b</i> (<i>b</i> ≠ 0) such that:</div>
        <div class="step">
            √3 = \\(\\frac{a}{b}\\)
        </div>
        <div class="step">Assume <i>a</i> and <i>b</i> are co-prime.</div>
        <div class="step">Squaring both sides:</div>
        <div class="step">3<i>b</i>² = <i>a</i>²</div>
        <div class="step">Therefore, 3 divides <i>a</i>².</div>
        <div class="step formula-block"><span class="formula">Theorem 1.3: If a prime p divides a², then p divides
                a.</span></div>
        <div class="step">So, 3 divides <i>a</i>.</div>

        <div class="step">Let <i>a</i> = 3<i>c</i> for some integer <i>c</i>.</div>
        <div class="step">substituting <i>a</i> = 3<i>c</i>, we get:</div>
        <div class="step">3<i>b</i>² = (3<i>c</i>)² = 9<i>c</i>²</div>
        <div class="step"><i>b</i>² = 3<i>c</i>²</div>
        <div class="step">This means 3 divides <i>b</i>², and so 3 divides <i>b</i>.</div>

        <div class="step">Thus, <i>a</i> and <i>b</i> have at least 3 as a common factor.</div>
        <div class="step">But this contradicts the fact that <i>a</i> and <i>b</i> are co-prime.</div>
        <div class="step">This contradiction arises because of our incorrect assumption that √3 is rational.</div>

        <div class="final-answer">Hence, √3 is irrational.</div>
    </div>

    <!-- Example 6 -->
    <div class="content-box">
        <div class="question">Example 6. Show that 5 - √3 is irrational.</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume that 5 - √3 is rational.</div>
        <div class="step">So we can write:</div>
        <div class="step">
            5 - √3 = \\(\\frac{a}{b}\\) (where <i>a, b</i> are co-prime integers, <i>b</i> ≠ 0)
        </div>
        <div class="step">Rearranging to isolate √3:</div>
        <div class="step">
            5 - \\(\\frac{a}{b}\\) = √3
        </div>
        <div class="step">
            √3 = \\(\\frac{5b - a}{b}\\)
        </div>
        <div class="step">Since <i>a</i> and <i>b</i> are integers, the RHS \\(\\frac{5b - a}{b}\\) is
            rational.</div>
        <div class="step">This implies √3 is rational.</div>
        <div class="step">But this contradicts the fact that √3 is irrational.</div>

        <div class="final-answer">Hence, 5 - √3 is irrational.</div>
    </div>

    <!-- Example 7 -->
    <div class="content-box">
        <div class="question">Example 7. Show that 3√2 is irrational.</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume that 3√2 is rational.</div>
        <div class="step">So we can find co-prime integers <i>a</i> and <i>b</i> (<i>b</i> ≠ 0) such that:</div>
        <div class="step">
            3√2 = \\(\\frac{a}{b}\\)
        </div>
        <div class="step">Rearranging:</div>
        <div class="step">
            √2 = \\(\\frac{a}{3b}\\)
        </div>
        <div class="step">Since 3, <i>a</i>, and <i>b</i> are integers, \\(\\frac{a}{3b}\\) is rational.
        </div>
        <div class="step">This implies √2 is rational.</div>
        <div class="step">But this contradicts the fact that √2 is irrational.</div>

        <div class="final-answer">Hence, 3√2 is irrational.</div>
    </div>

</body>

</html>`,
    exercise1: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Numbers - Exercise 1.1</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
            font-size: 1.1em;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 20px;
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 1.05em;
        }

        .section-title {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            color: #555;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1em;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .formula {
            background-color: #fff3e0;
            padding: 2px 5px;
            border-radius: 4px;
            color: #D32F2F;
            font-weight: 700;
            display: inline-block;
            margin: 2px 0;
            border: 1px solid #ffe0b2;
        }

        .formula-block {
            display: block;
            margin: 10px 0;
            text-align: center;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.1em;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
        }

        .numerator {
            border-bottom: 1px solid #333;
            display: block;
            padding: 0 2px;
        }

        .denominator {
            display: block;
            padding: 0 2px;
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }

        sup {
            top: -0.5em;
        }

        sub {
            bottom: -0.25em;
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
    </style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FFB74D !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFB74D !important; }
  .question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FFB74D !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #FFB74D !important; }
  strong[style*="color: #ff6b6b"] { color: #FFB74D !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">1. Express each number as a product of its prime factors:</div>

        <div class="sub-question">(i) 140</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization of 140:</div>
        <div class="step">140 = 2 × 70</div>
        <div class="step">= 2 × 2 × 35</div>
        <div class="step">= 2 × 2 × 5 × 7</div>
        <div class="final-answer">140 = 2² × 5 × 7</div>

        <div class="sub-question">(ii) 156</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization of 156:</div>
        <div class="step">156 = 2 × 78</div>
        <div class="step">= 2 × 2 × 39</div>
        <div class="step">= 2 × 2 × 3 × 13</div>
        <div class="final-answer">156 = 2² × 3 × 13</div>

        <div class="sub-question">(iii) 3825</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization of 3825:</div>
        <div class="step">3825 = 3 × 1275</div>
        <div class="step">= 3 × 3 × 425</div>
        <div class="step">= 3 × 3 × 5 × 85</div>
        <div class="step">= 3 × 3 × 5 × 5 × 17</div>
        <div class="final-answer">3825 = 3² × 5² × 17</div>

        <div class="sub-question">(iv) 5005</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization of 5005:</div>
        <div class="step">5005 = 5 × 1001</div>
        <div class="step">= 5 × 7 × 143</div>
        <div class="step">= 5 × 7 × 11 × 13</div>
        <div class="final-answer">5005 = 5 × 7 × 11 × 13</div>

        <div class="sub-question">(v) 7429</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization of 7429:</div>
        <div class="step">7429 = 17 × 437</div>
        <div class="step">= 17 × 19 × 23</div>
        <div class="final-answer">7429 = 17 × 19 × 23</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="question">2. Find the LCM and HCF of the following pairs of integers and verify that LCM × HCF =
            product of the two numbers.</div>

        <div class="sub-question">(i) 26 and 91</div>
        <div class="section-title">Solution:</div>
        <div class="step">Prime factorization:</div>
        <div class="step">26 = 2 × 13</div>
        <div class="step">91 = 7 × 13</div>
        <div class="step">HCF = Product of smallest power of each common prime factor = 13</div>
        <div class="step">LCM = Product of greatest power of each prime factor = 2 × 7 × 13 = 182</div>

        <div class="section-title">Verification:</div>
        <div class="step formula-block"><span class="formula">LCM × HCF = Product of the numbers</span></div>
        <div class="step">LHS = LCM × HCF = 182 × 13 = 2366</div>
        <div class="step">RHS = Product = 26 × 91 = 2366</div>
        <div class="final-answer">LHS = RHS. Hence Verified.</div>

        <div class="sub-question">(ii) 510 and 92</div>
        <div class="section-title">Solution:</div>
        <div class="step">510 = 2 × 3 × 5 × 17</div>
        <div class="step">92 = 2 × 2 × 23 = 2² × 23</div>
        <div class="step">HCF = 2</div>
        <div class="step">LCM = 2² × 3 × 5 × 17 × 23 = 23460</div>

        <div class="section-title">Verification:</div>
        <div class="step">LHS = LCM × HCF = 23460 × 2 = 46920</div>
        <div class="step">RHS = Product = 510 × 92 = 46920</div>
        <div class="final-answer">LHS = RHS. Hence Verified.</div>

        <div class="sub-question">(iii) 336 and 54</div>
        <div class="section-title">Solution:</div>
        <div class="step">336 = 2 × 2 × 2 × 2 × 3 × 7 = 2⁴ × 3 × 7</div>
        <div class="step">54 = 2 × 3 × 3 × 3 = 2 × 3³</div>
        <div class="step">HCF = 2 × 3 = 6</div>
        <div class="step">LCM = 2⁴ × 3³ × 7 = 3024</div>

        <div class="section-title">Verification:</div>
        <div class="step">LHS = LCM × HCF = 3024 × 6 = 18144</div>
        <div class="step">RHS = Product = 336 × 54 = 18144</div>
        <div class="final-answer">LHS = RHS. Hence Verified.</div>
    </div>

    <!-- Question 3 -->
    <div class="content-box">
        <div class="question">3. Find the LCM and HCF of the following integers by applying the prime factorisation
            method.</div>

        <div class="sub-question">(i) 12, 15 and 21</div>
        <div class="section-title">Solution:</div>
        <div class="step">12 = 2 × 2 × 3 = 2² × 3</div>
        <div class="step">15 = 3 × 5</div>
        <div class="step">21 = 3 × 7</div>
        <div class="step">HCF = 3 (Common factor)</div>
        <div class="step">LCM = 2² × 3 × 5 × 7 = 420</div>
        <div class="final-answer">HCF = 3, LCM = 420</div>

        <div class="sub-question">(ii) 17, 23 and 29</div>
        <div class="section-title">Solution:</div>
        <div class="step">17, 23, and 29 are prime numbers.</div>
        <div class="step">17 = 1 × 17</div>
        <div class="step">23 = 1 × 23</div>
        <div class="step">29 = 1 × 29</div>
        <div class="step">HCF = 1</div>
        <div class="step">LCM = 17 × 23 × 29 = 11339</div>
        <div class="final-answer">HCF = 1, LCM = 11339</div>

        <div class="sub-question">(iii) 8, 9 and 25</div>
        <div class="section-title">Solution:</div>
        <div class="step">8 = 2 × 2 × 2 = 2³</div>
        <div class="step">9 = 3 × 3 = 3²</div>
        <div class="step">25 = 5 × 5 = 5²</div>
        <div class="step">No common prime factor.</div>
        <div class="step">HCF = 1</div>
        <div class="step">LCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800</div>
        <div class="final-answer">HCF = 1, LCM = 1800</div>
    </div>

    <!-- Question 4 -->
    <div class="content-box">
        <div class="question">4. Given that HCF (306, 657) = 9, find LCM (306, 657).</div>

        <div class="section-title">Given:</div>
        <div class="step">HCF (306, 657) = 9</div>
        <div class="step">First number (a) = 306</div>
        <div class="step">Second number (b) = 657</div>

        <div class="section-title">To Find:</div>
        <div class="step">LCM (306, 657)</div>

        <div class="section-title">Solution:</div>
        <div class="step formula-block"><span class="formula">Formula: LCM × HCF = Product of two numbers</span></div>
        <div class="step">LCM × 9 = 306 × 657</div>
        <div class="step">
            LCM = \\(\\frac{306 × 657}{9}\\)
        </div>
        <div class="step">LCM = 34 × 657</div>
        <div class="step">LCM = 22338</div>
        <div class="final-answer">LCM (306, 657) = 22338</div>
    </div>

    <!-- Question 5 -->
    <div class="content-box">
        <div class="question">5. Check whether 6ⁿ can end with the digit 0 for any natural number n.</div>

        <div class="section-title">Solution:</div>
        <div class="step">If a number ends with digit 0, it must be divisible by 10.</div>
        <div class="step">This means it must be divisible by both 2 and 5.</div>

        <div class="step formula-block"><span class="formula">Prime factorization of 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ</span>
        </div>
        <div class="step">The prime factors of 6ⁿ are 2 and 3.</div>
        <div class="step">For the number to end with 0, it must contain the prime factor 5.</div>
        <div class="step">However, 5 is not present in the prime factorization of 6ⁿ.</div>
        <div class="step">By the Fundamental Theorem of Arithmetic, the uniqueness of prime factorization guarantees
            that there are no other primes in the factorization of 6ⁿ.</div>

        <div class="final-answer">Therefore, there is no natural number n for which 6ⁿ ends with the digit 0.</div>
    </div>

    <!-- Question 6 -->
    <div class="content-box">
        <div class="question">6. Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.
        </div>

        <div class="section-title">Solution:</div>
        <div class="step">A composite number is a number that has factors other than 1 and itself.</div>

        <div class="step"><strong>Part 1:</strong> 7 × 11 × 13 + 13</div>
        <div class="step">Taking 13 common:</div>
        <div class="step">= 13 × (7 × 11 + 1)</div>
        <div class="step">= 13 × (77 + 1)</div>
        <div class="step">= 13 × 78</div>
        <div class="step">Since this expression has 13 and 78 as factors, it is a composite number.</div>

        <div class="step"><strong>Part 2:</strong> 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5</div>
        <div class="step">Taking 5 common:</div>
        <div class="step">= 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1)</div>
        <div class="step">= 5 × (1008 + 1)</div>
        <div class="step">= 5 × 1009</div>
        <div class="step">Since this expression has 5 and 1009 as factors, it is a composite number.</div>

        <div class="final-answer">Hence, both expressions represent composite numbers.</div>
    </div>

    <!-- Question 7 -->
    <div class="content-box">
        <div class="question">7. There is a circular path around a sports field. Sonia takes 18 minutes to drive one
            round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and
            at the same time, and go in the same direction. After how many minutes will they meet again at the starting
            point?</div>

        <div class="section-title">Given:</div>
        <div class="step">Time taken by Sonia = 18 minutes</div>
        <div class="step">Time taken by Ravi = 12 minutes</div>

        <div class="section-title">To Find:</div>
        <div class="step">Time when they meet again at the starting point.</div>

        <div class="section-title">Solution:</div>
        <div class="step">They will meet again at the starting point after a time that is a common multiple of both 18
            and 12.</div>
        <div class="step">Specifically, we need to find the Least Common Multiple (LCM) of 18 and 12.</div>

        <div class="step">Prime factorization:</div>
        <div class="step">18 = 2 × 3 × 3 = 2 × 3²</div>
        <div class="step">12 = 2 × 2 × 3 = 2² × 3</div>

        <div class="step">LCM(18, 12) = 2² × 3²</div>
        <div class="step">= 4 × 9</div>
        <div class="step">= 36</div>

        <div class="final-answer">Therefore, Sonia and Ravi will meet again at the starting point after 36 minutes.
        </div>
    </div>

</body>

</html>`,
    exercise2: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Numbers - Exercise 1.2</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box { 
            background: #f8f9fa; 
            border: 1px solid #e9ecef; 
            border-radius: 8px; 
            padding: 15px; 
            margin-bottom: 15px; 
            display: flow-root; 
            transition: transform 0.2s ease; 
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
            font-size: 1.1em;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 20px;
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 1.05em;
        }

        .section-title {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            color: #555;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1em;
            text-decoration: underline; /* Optional for section headers, but user said "don't underline ANY question or text" - leaving plain or bold */
            text-decoration: none;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .formula {
            background-color: #fff3e0;
            padding: 2px 5px;
            border-radius: 4px;
            color: #D32F2F;
            font-weight: 700;
            display: inline-block;
            margin: 2px 0;
            border: 1px solid #ffe0b2;
        }
        
        .formula-block {
            display: block;
            margin: 10px 0;
            text-align: center;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.1em;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
        }

        .numerator {
            border-bottom: 1px solid #333;
            display: block;
            padding: 0 2px;
        }

        .denominator {
            display: block;
            padding: 0 2px;
        }

        sub, sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }
        sup { top: -0.5em; }
        sub { bottom: -0.25em; }

        img { 
            float: right; 
            margin-left: 20px; 
            margin-bottom: 15px; 
            max-width: 280px; 
            height: auto; 
            border: 1px solid #ddd; 
            border-radius: 6px; 
            padding: 5px; 
            background: white; 
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
        }
        
        @media (max-width: 600px) { 
            img { float: none; display: block; margin: 10px auto; max-width: 100%; } 
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
    </style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FFB74D !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFB74D !important; }
  .question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FFB74D !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #FFB74D !important; }
  strong[style*="color: #ff6b6b"] { color: #FFB74D !important; }
</style>
</head>
<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">1. Prove that √5 is irrational.</div>
        
        <div class="section-title">Given:</div>
        <div class="step">Number √5.</div>

        <div class="section-title">To Prove:</div>
        <div class="step">√5 is an irrational number.</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume, to the contrary, that √5 is rational.</div>
        <div class="step">This means we can find integers <i>a</i> and <i>b</i> (where <i>b</i> ≠ 0) such that:</div>
        <div class="step">
            √5 = \\(\\frac{a}{b}\\)
        </div>
        <div class="step">Suppose <i>a</i> and <i>b</i> have a common factor other than 1. Can divide by the common factor to assume <i>a</i> and <i>b</i> are co-prime.</div>
        <div class="step">So, <i>a</i> and <i>b</i> are co-prime.</div>
        <div class="step">Rearranging, we get:</div>
        <div class="step">√5 <i>b</i> = <i>a</i></div>
        <div class="step">Squaring both sides:</div>
        <div class="step">5<i>b</i>² = <i>a</i>²  ... (Equation 1)</div>
        <div class="step">Therefore, 5 divides <i>a</i>².</div>
        <div class="step formula-block"><span class="formula">Theorem 1.3: If a prime number p divides a², then p divides a.</span></div>
        <div class="step">So, 5 divides <i>a</i>.</div>
        
        <div class="step">Let <i>a</i> = 5<i>c</i> for some integer <i>c</i>.</div>
        <div class="step">Substituting <i>a</i> = 5<i>c</i> in Equation 1:</div>
        <div class="step">5<i>b</i>² = (5<i>c</i>)²</div>
        <div class="step">5<i>b</i>² = 25<i>c</i>²</div>
        <div class="step">Dividing both sides by 5:</div>
        <div class="step"><i>b</i>² = 5<i>c</i>²</div>
        <div class="step">This limits that 5 divides <i>b</i>².</div>
        <div class="step">So, 5 divides <i>b</i> (using Theorem 1.3 again).</div>
        
        <div class="step">Therefore, <i>a</i> and <i>b</i> have at least 5 as a common factor.</div>
        <div class="step">But this contradicts the fact that <i>a</i> and <i>b</i> have no common factor other than 1 (they are co-prime).</div>
        <div class="step">This contradiction has arisen because of our incorrect assumption that √5 is rational.</div>
        
        <div class="final-answer">Hence, we conclude that √5 is irrational.</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="question">2. Prove that 3 + 2√5 is irrational.</div>

        <div class="section-title">Given:</div>
        <div class="step">Number 3 + 2√5.</div>

        <div class="section-title">To Prove:</div>
        <div class="step">3 + 2√5 is irrational.</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume, to the contrary, that 3 + 2√5 is rational.</div>
        <div class="step">That is, we can find co-prime integers <i>a</i> and <i>b</i> (<i>b</i> ≠ 0) such that:</div>
        <div class="step">
            3 + 2√5 = \\(\\frac{a}{b}\\)
        </div>
        <div class="step">Rearranging the equation to isolate √5:</div>
        <div class="step">
            2√5 = \\(\\frac{a}{b}\\) - 3
        </div>
        <div class="step">Taking LCM on RHS:</div>
        <div class="step">
            2√5 = \\(\\frac{a - 3b}{b}\\)
        </div>
        <div class="step">Dividing by 2:</div>
        <div class="step">
            <span class="formula">√5 = \\(\\frac{a - 3b}{2b}\\)</span>
        </div>
        <div class="step">Since <i>a</i> and <i>b</i> are integers, (<i>a</i> - 3<i>b</i>) and 2<i>b</i> are also integers.</div>
        <div class="step">
            Thus, \\(\\frac{a - 3b}{2b}\\) is a rational number.
        </div>
        <div class="step">Therefore, √5 should be rational.</div>
        <div class="step">But this contradicts the fact that √5 is irrational.</div>
        <div class="step">This contradiction has arisen because of our incorrect assumption that 3 + 2√5 is rational.</div>

        <div class="final-answer">Hence, we conclude that 3 + 2√5 is irrational.</div>
    </div>

    <!-- Question 3 -->
    <div class="content-box">
        <div class="question">3. Prove that the following are irrationals:</div>
        
        <!-- Part (i) -->
        <div class="sub-question">(i) \\(\\frac{1}{√2}\\)</div>
        
        <div class="section-title">Proof:</div>
        <div class="step">Let us assume 
            \\(\\frac{1}{√2}\\) is rational.
        </div>
        <div class="step">Then we can find co-prime integers <i>a</i> and <i>b</i> (<i>b</i> ≠ 0) such that:</div>
        <div class="step">
            \\(\\frac{1}{√2}\\) = \\(\\frac{a}{b}\\)
        </div>
        <div class="step">Reciprocating both sides (or cross-multiplying):</div>
        <div class="step">
            √2 = \\(\\frac{b}{a}\\)
        </div>
        <div class="step">Since <i>a</i> and <i>b</i> are integers, \\(\\frac{b}{a}\\) is rational.</div>
        <div class="step">This implies √2 is rational.</div>
        <div class="step">But this contradicts the fact that √2 is irrational.</div>
        <div class="final-answer">Hence, \\(\\frac{1}{√2}\\) is irrational.</div>

        <!-- Part (ii) -->
        <div class="sub-question">(ii) 7√5</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume 7√5 is rational.</div>
        <div class="step">So, 7√5 = \\(\\frac{a}{b}\\) (where <i>a, b</i> are co-prime integers, <i>b</i> ≠ 0).</div>
        <div class="step">Rearranging:</div>
        <div class="step">
            √5 = \\(\\frac{a}{7b}\\)
        </div>
        <div class="step">Since <i>a</i> and <i>b</i> are integers, \\(\\frac{a}{7b}\\) is rational.</div>
        <div class="step">This implies √5 is rational.</div>
        <div class="step">But this contradicts the fact that √5 is irrational.</div>
        <div class="final-answer">Hence, 7√5 is irrational.</div>

        <!-- Part (iii) -->
        <div class="sub-question">(iii) 6 + √2</div>

        <div class="section-title">Proof:</div>
        <div class="step">Let us assume 6 + √2 is rational.</div>
        <div class="step">So, 6 + √2 = \\(\\frac{a}{b}\\) (where <i>a, b</i> are co-prime integers, <i>b</i> ≠ 0).</div>
        <div class="step">Transposing 6 to the RHS:</div>
        <div class="step">
            √2 = \\(\\frac{a}{b}\\) - 6
        </div>
        <div class="step">
            √2 = \\(\\frac{a - 6b}{b}\\)
        </div>
        <div class="step">Since <i>a</i> and <i>b</i> are integers, \\(\\frac{a - 6b}{b}\\) is rational.</div>
        <div class="step">This implies √2 is rational.</div>
        <div class="step">But this contradicts the fact that √2 is irrational.</div>
        <div class="final-answer">Hence, 6 + √2 is irrational.</div>
    </div>

</body>
</html>`
  }
};
