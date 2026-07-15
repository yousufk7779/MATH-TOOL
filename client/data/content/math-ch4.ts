import { ChapterContent } from "../types";

export const mathCh4: ChapterContent = {
  id: "ch4",
  number: 4,
  title: "Quadratic Equations",
  introduction: "A quadratic equation is a second-degree polynomial equation in a single variable x, typically written in the standard form ax² + bx + c = 0.",
  definitions: [
  {
    "term": "Roots",
    "description": "The values of x that satisfy the equation."
  },
  {
    "term": "Discriminant (D)",
    "description": "Evaluated as b² - 4ac, which determines the nature of the roots."
  }
],
  keyPoints: [
  "Solved using methods like factorization, completing the square, or the quadratic formula x = (-b ± √D) / 2a."
],
  formulas: [],
  crux: [
  "If D > 0, roots are real and distinct.",
  "If D = 0, roots are real and equal.",
  "If D < 0, there are no real roots."
],
  summary: [
  "Quadratic equations naturally model situations involving gravity, area, and parabolic trajectories.",
  "The discriminant is the fastest tool to check root validity.",
  "Carefully read and understand every problem statement before jumping into the solution.",
  "A strong grasp of the core concepts is the key to solving complex problems easily.",
  "Make a habit of practicing the solved examples to get familiar with standard solution formats."
],
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 4.1", questions: [] },
    { id: "exercise2", name: "Exercise 4.2", questions: [] },
    { id: "exercise3", name: "Exercise 4.3", questions: [] }
  ],
  mcqs: [
  {
    "id": "mcq1",
    "question": "<span style=\"font-weight: normal;\">The standard form of a quadratic equation is:</span>",
    "options": [
      "(A) ax² + bx + c = 0, a ≠ 0",
      "(B) ax + b = 0",
      "(C) ax³ + bx² + c = 0",
      "(D) None of these"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq2",
    "question": "<span style=\"font-weight: normal;\">The degree of a quadratic equation is:</span>",
    "options": [
      "(A) 1",
      "(B) 2",
      "(C) 3",
      "(D) 4"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq3",
    "question": "<span style=\"font-weight: normal;\">For a quadratic equation ax² + bx + c = 0, the discriminant D is:</span>",
    "options": [
      "(A) b² - 4ac",
      "(B) b² + 4ac",
      "(C) b - 4ac",
      "(D) b² - ac"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq4",
    "question": "<span style=\"font-weight: normal;\">If b² - 4ac > 0, then the roots of the quadratic equation are:</span>",
    "options": [
      "(A) Real and distinct",
      "(B) Real and equal",
      "(C) No real roots",
      "(D) Imaginary"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq5",
    "question": "<span style=\"font-weight: normal;\">If b² - 4ac = 0, then the roots of the quadratic equation are:</span>",
    "options": [
      "(A) Real and distinct",
      "(B) Real and equal",
      "(C) No real roots",
      "(D) None of these"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq6",
    "question": "<span style=\"font-weight: normal;\">If b² - 4ac < 0, then the roots of the quadratic equation are:</span>",
    "options": [
      "(A) Real and distinct",
      "(B) Real and equal",
      "(C) No real roots",
      "(D) Real roots"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq7",
    "question": "<span style=\"font-weight: normal;\">A quadratic equation can have at most how many real roots?</span>",
    "options": [
      "(A) 1",
      "(B) 2",
      "(C) 3",
      "(D) 4"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq8",
    "question": "<span style=\"font-weight: normal;\">Is x = 1 a root of the equation x² - 2x + 1 = 0?</span>",
    "options": [
      "(A) Yes",
      "(B) No",
      "(C) Cannot say",
      "(D) Root is 0"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq9",
    "question": "<span style=\"font-weight: normal;\">The quadratic formula to find roots is:</span>",
    "options": [
      "(A) x = (-b ± √D) / 2a",
      "(B) x = (b ± √D) / 2a",
      "(C) x = (-b ± √(b² + 4ac)) / 2a",
      "(D) x = (-b ± b) / 2a"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq10",
    "question": "<span style=\"font-weight: normal;\">The roots of x² - 9 = 0 are:</span>",
    "options": [
      "(A) 3, -3",
      "(B) 3, 3",
      "(C) -3, -3",
      "(D) 9, -9"
    ],
    "correctAnswer": "A"
  }
],
  isHtmlView: true,
  htmlExercises: {
    examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quadratic Equations - Examples</title>
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
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            display: inline-block;
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

        .solution-header {
            color: #6C63FF;
            font-weight: 700;
            font-size: 1.1em;
            margin-bottom: 5px;
            margin-top: 10px;
        }

        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #42A5F5 !important; }
  strong[style*="color: #ff6b6b"] { color: #42A5F5 !important; }
</style>
</head>

<body>
<!-- Example 1 -->
    <div class="content-box">
        <div class="question">Example 1. Represent the following situations mathematically:</div>

        <div class="sub-question">(i) John and Jivanti together have 45 marbles. Both of them lost 5 marbles each, and
            the product of the number of marbles they now have is 124. We would like to find out how many marbles they
            had to start with.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let the number of marbles John had be x.</div>
        <div class="step">Then the number of marbles Jivanti had = 45 - x.</div>
        <div class="step">After losing 5 marbles:</div>
        <div class="step">Number of marbles left with John = x - 5</div>
        <div class="step">Number of marbles left with Jivanti = (45 - x) - 5 = 40 - x</div>
        <div class="step">Product of their marbles = 124</div>
        <div class="step">(x - 5)(40 - x) = 124</div>
        <div class="step">40x - x² - 200 + 5x = 124</div>
        <div class="step">-x² + 45x - 200 = 124</div>
        <div class="step">-x² + 45x - 324 = 0</div>
        <div class="step">Multiply by -1:</div>
        <div class="final-answer">x² - 45x + 324 = 0</div>

        <div class="sub-question">(ii) A cottage industry produces a certain number of toys in a day. The cost of
            production of each toy (in rupees) was found to be 55 minus the number of toys produced in a day. On a
            particular day, the total cost of production was ₹ 750. We would like to find out the number of toys
            produced on that day.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let the number of toys produced be x.</div>
        <div class="step">Cost of production of each toy = 55 - x</div>
        <div class="step">Total cost of production = x(55 - x)</div>
        <div class="step">Given total cost = 750</div>
        <div class="step">x(55 - x) = 750</div>
        <div class="step">55x - x² = 750</div>
        <div class="step">-x² + 55x - 750 = 0</div>
        <div class="step">Multiply by -1:</div>
        <div class="final-answer">x² - 55x + 750 = 0</div>
    </div>

    <!-- Example 2 -->
    <div class="content-box">
        <div class="question">Example 2. Check whether the following are quadratic equations:</div>

        <div class="sub-question">(i) (x - 2)² + 1 = 2x - 3</div>
        <div class="solution-header">Solution:</div>
        <div class="step">LHS = (x - 2)² + 1 = x² - 4x + 4 + 1 = x² - 4x + 5</div>
        <div class="step">Given equation: x² - 4x + 5 = 2x - 3</div>
        <div class="step">x² - 4x - 2x + 5 + 3 = 0</div>
        <div class="step">x² - 6x + 8 = 0</div>
        <div class="step">It is of the form ax² + bx + c = 0.</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(ii) x(x + 1) + 8 = (x + 2)(x - 2)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">LHS = x² + x + 8</div>
        <div class="step">RHS = x² - 4</div>
        <div class="step">x² + x + 8 = x² - 4</div>
        <div class="step">x + 12 = 0</div>
        <div class="step">It is a linear equation (degree 1).</div>
        <div class="final-answer">No, it is not a quadratic equation.</div>

        <div class="sub-question">(iii) x(2x + 3) = x² + 1</div>
        <div class="solution-header">Solution:</div>
        <div class="step">LHS = 2x² + 3x</div>
        <div class="step">2x² + 3x = x² + 1</div>
        <div class="step">x² + 3x - 1 = 0</div>
        <div class="step">It is of the form ax² + bx + c = 0.</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(iv) (x + 2)³ = x³ - 4</div>
        <div class="solution-header">Solution:</div>
        <div class="step">LHS = x³ + 6x² + 12x + 8</div>
        <div class="step">x³ + 6x² + 12x + 8 = x³ - 4</div>
        <div class="step">6x² + 12x + 12 = 0</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>
    </div>

    <!-- Example 3 -->
    <div class="content-box">
        <div class="question">Example 3. Find the roots of the equation 2x² - 5x + 3 = 0, by factorisation.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Find two numbers whose product is 2 × 3 = 6 and sum is -5.</div>
        <div class="step">Numbers are -2 and -3.</div>
        <div class="step">2x² - 2x - 3x + 3 = 0</div>
        <div class="step">2x(x - 1) - 3(x - 1) = 0</div>
        <div class="step">(2x - 3)(x - 1) = 0</div>
        <div class="step">2x - 3 = 0 or x - 1 = 0</div>
        <div class="step">x = \\(\\frac{3}{2}\\) or x = 1</div>
        <div class="final-answer">Roots are \\(\\frac{3}{2}\\), 1.</div>
    </div>

    <!-- Example 4 -->
    <div class="content-box">
        <div class="question">Example 4. Find the roots of the quadratic equation 6x² - x - 2 = 0.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Product = 6 × (-2) = -12. Sum = -1.</div>
        <div class="step">Numbers are -4 and 3.</div>
        <div class="step">6x² - 4x + 3x - 2 = 0</div>
        <div class="step">2x(3x - 2) + 1(3x - 2) = 0</div>
        <div class="step">(3x - 2)(2x + 1) = 0</div>
        <div class="step">3x - 2 = 0 ⇒ x = \\(\\frac{2}{3}\\)</div>
        <div class="step">2x + 1 = 0 ⇒ x = \\(\\frac{-1}{2}\\)</div>
        <div class="final-answer">Roots are \\(\\frac{2}{3}\\), \\(\\frac{-1}{2}\\).</div>
    </div>

    <!-- Example 5 -->
    <div class="content-box">
        <div class="question">Example 5. Find the roots of the quadratic equation 3x² - 2√6x + 2 = 0.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">3x² - 2√6x + 2 = 0</div>
        <div class="step">Note that 3x² = (√3x)² and 2 = (√2)²</div>
        <div class="step">Middle term -2√6x = -2(√3x)(√2)</div>
        <div class="step">So, (√3x)² - 2(√3x)(√2) + (√2)² = 0</div>
        <div class="step">(√3x - √2)² = 0</div>
        <div class="step">√3x - √2 = 0</div>
        <div class="step">√3x = √2</div>
        <div class="step">x = \\(\\frac{√2}{√3}\\)</div>
        <div class="step">Rationalising the denominator:</div>
        <div class="step">x = \\(\\frac{√6}{3}\\)</div>
        <div class="final-answer">Roots are \\(\\frac{√6}{3}\\), \\(\\frac{√6}{3}\\).</div>
    </div>

    <!-- Example 6 -->
    <div class="content-box">
        <div class="question">Example 6. Find the dimensions of the prayer hall whose carpet area is 300 m² and length
            is one metre more than twice its breadth.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Area = 300 m²</div>
        <div class="step">Length = 2 × Breadth + 1</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let breadth = x meters.</div>
        <div class="step">Length = 2x + 1 meters.</div>
        <div class="step">Area = x(2x + 1) = 300</div>
        <div class="step">2x² + x - 300 = 0</div>
        <div class="step">Using quadratic formula: a = 2, b = 1, c = -300</div>
        <div class="step">x = \\(\\frac{-1 ± √(1² - 4(2)(-300))}{2(2)}\\)</div>
        <div class="step">x = \\(\\frac{-1 ± √(1 + 2400)}{4}\\)</div>
        <div class="step">x = \\(\\frac{-1 ± √2401}{4}\\)</div>
        <div class="step">x = \\(\\frac{-1 ± 49}{4}\\)</div>
        <div class="step">Case 1: x = \\(\\frac{48}{4}\\) = 12</div>
        <div class="step">Case 2: x = \\(\\frac{-50}{4}\\) (Negative, ignore)</div>
        <div class="step">Breadth = 12 m.</div>
        <div class="step">Length = 2(12) + 1 = 25 m.</div>
        <div class="final-answer">Breadth = 12 m, Length = 25 m.</div>
    </div>

    <!-- Example 8 -->
    <div class="content-box">
        <div class="question">Example 8. A pole has to be erected at a point on the boundary of a circular park of
            diameter 13 metres in such a way that the differences of its distances from two diametrically opposite fixed
            gates A and B on the boundary is 7 metres. Is it possible to do so? If yes, at what distances from the two
            gates should the pole be erected?</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let P be the position of the pole.</div>
        <div class="step">Let distance from gate B, PB = x meters.</div>
        <div class="step">Then distance from gate A, PA = x + 7 meters (Difference is 7).</div>
        <div class="step">AB is diameter = 13 m.</div>
        <div class="step">∠APB = 90° (Angle in a semicircle is a right angle).</div>
        <div class="step">Using Pythagoras theorem in ΔAPB:</div>
        <div class="step">PA² + PB² = AB²</div>
        <div class="step">(x + 7)² + x² = 13²</div>
        <div class="step">x² + 14x + 49 + x² = 169</div>
        <div class="step">2x² + 14x - 120 = 0</div>
        <div class="step">Divide by 2: x² + 7x - 60 = 0</div>
        <div class="step">Discriminant D = b² - 4ac = 7² - 4(1)(-60)</div>
        <div class="step">D = 49 + 240 = 289 > 0</div>
        <div class="step">Since D > 0, real roots exist. Thus, it is possible.</div>
        <div class="step">x = \\(\\frac{-7 ± √289}{2}\\)</div>
        <div class="step">x = \\(\\frac{-7 ± 17}{2}\\)</div>
        <div class="step">x = \\(\\frac{10}{2}\\) = 5 or x = \\(\\frac{-24}{2}\\) = -12</div>
        <div class="step">Since distance cannot be negative, x = 5.</div>
        <div class="step">PB = 5 m, PA = 5 + 7 = 12 m.</div>
        <div class="final-answer">Distances are 5 m and 12 m.</div>
    </div>

</body>

</html>`,
    exercise1: `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quadratic Equations - Exercise 4.1</title>
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
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            display: inline-block;
        }

        .solution-header {
            color: #6C63FF;
            font-weight: 700;
            font-size: 1.1em;
            margin-bottom: 5px;
            margin-top: 10px;
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

        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #42A5F5 !important; }
  strong[style*="color: #ff6b6b"] { color: #42A5F5 !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">1. Check whether the following are quadratic equations:</div>

        <div class="sub-question">(i) (x + 1)² = 2(x – 3)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand LHS: (x + 1)² = x² + 2x + 1</div>
        <div class="step">Expand RHS: 2(x - 3) = 2x - 6</div>
        <div class="step">Equating both sides:</div>
        <div class="step">x² + 2x + 1 = 2x - 6</div>
        <div class="step">Bring all terms to LHS:</div>
        <div class="step">x² + 2x - 2x + 1 + 6 = 0</div>
        <div class="step">x² + 7 = 0</div>
        <div class="step">It is of the form ax² + bx + c = 0 (where b = 0).</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(ii) x² – 2x = (–2) (3 – x)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Simplify RHS: (-2)(3 - x) = -6 + 2x</div>
        <div class="step">Equation becomes:</div>
        <div class="step">x² - 2x = -6 + 2x</div>
        <div class="step">x² - 2x - 2x + 6 = 0</div>
        <div class="step">x² - 4x + 6 = 0</div>
        <div class="step">It is of the form ax² + bx + c = 0.</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(iii) (x – 2)(x + 1) = (x – 1)(x + 3)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand LHS: x(x + 1) - 2(x + 1)</div>
        <div class="step">= x² + x - 2x - 2</div>
        <div class="step">= x² - x - 2</div>
        <div class="step">Expand RHS: x(x + 3) - 1(x + 3)</div>
        <div class="step">= x² + 3x - x - 3</div>
        <div class="step">= x² + 2x - 3</div>
        <div class="step">Equating LHS and RHS:</div>
        <div class="step">x² - x - 2 = x² + 2x - 3</div>
        <div class="step">Subtract x² from both sides:</div>
        <div class="step">-x - 2 = 2x - 3</div>
        <div class="step">-x - 2x - 2 + 3 = 0</div>
        <div class="step">-3x + 1 = 0</div>
        <div class="step">Degree is 1.</div>
        <div class="final-answer">No, it is not a quadratic equation.</div>

        <div class="sub-question">(iv) (x – 3)(2x + 1) = x(x + 5)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand LHS: x(2x + 1) - 3(2x + 1)</div>
        <div class="step">= 2x² + x - 6x - 3</div>
        <div class="step">= 2x² - 5x - 3</div>
        <div class="step">Expand RHS: x² + 5x</div>
        <div class="step">Equating both sides:</div>
        <div class="step">2x² - 5x - 3 = x² + 5x</div>
        <div class="step">2x² - x² - 5x - 5x - 3 = 0</div>
        <div class="step">x² - 10x - 3 = 0</div>
        <div class="step">It is of the form ax² + bx + c = 0.</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(v) (2x – 1)(x – 3) = (x + 5)(x – 1)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand LHS: 2x(x - 3) - 1(x - 3)</div>
        <div class="step">= 2x² - 6x - x + 3</div>
        <div class="step">= 2x² - 7x + 3</div>
        <div class="step">Expand RHS: x(x - 1) + 5(x - 1)</div>
        <div class="step">= x² - x + 5x - 5</div>
        <div class="step">= x² + 4x - 5</div>
        <div class="step">Equating LHS and RHS:</div>
        <div class="step">2x² - 7x + 3 = x² + 4x - 5</div>
        <div class="step">2x² - x² - 7x - 4x + 3 + 5 = 0</div>
        <div class="step">x² - 11x + 8 = 0</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>

        <div class="sub-question">(vi) x² + 3x + 1 = (x – 2)²</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand RHS: (x - 2)² = x² - 4x + 4</div>
        <div class="step">Equation: x² + 3x + 1 = x² - 4x + 4</div>
        <div class="step">Cancel x² from both sides:</div>
        <div class="step">3x + 1 = -4x + 4</div>
        <div class="step">3x + 4x + 1 - 4 = 0</div>
        <div class="step">7x - 3 = 0</div>
        <div class="step">Degree is 1.</div>
        <div class="final-answer">No, it is not a quadratic equation.</div>

        <div class="sub-question">(vii) (x + 2)³ = 2x(x² – 1)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Using identity (a + b)³ = a³ + b³ + 3ab(a + b)</div>
        <div class="step">LHS = x³ + 8 + 3(x)(2)(x + 2)</div>
        <div class="step">= x³ + 8 + 6x(x + 2)</div>
        <div class="step">= x³ + 6x² + 12x + 8</div>
        <div class="step">RHS = 2x(x² - 1) = 2x³ - 2x</div>
        <div class="step">Equating LHS and RHS:</div>
        <div class="step">x³ + 6x² + 12x + 8 = 2x³ - 2x</div>
        <div class="step">Rearranging terms:</div>
        <div class="step">2x³ - x³ - 2x - 12x - 6x² - 8 = 0</div>
        <div class="step">x³ - 6x² - 14x - 8 = 0</div>
        <div class="step">Degree is 3.</div>
        <div class="final-answer">No, it is not a quadratic equation.</div>

        <div class="sub-question">(viii) x³ – 4x² – x + 1 = (x – 2)³</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Expand RHS using (a - b)³ = a³ - b³ - 3ab(a - b)</div>
        <div class="step">RHS = x³ - 8 - 3(x)(2)(x - 2)</div>
        <div class="step">= x³ - 8 - 6x(x - 2)</div>
        <div class="step">= x³ - 6x² + 12x - 8</div>
        <div class="step">Equation: x³ - 4x² - x + 1 = x³ - 6x² + 12x - 8</div>
        <div class="step">Cancel x³ from both sides:</div>
        <div class="step">-4x² - x + 1 = -6x² + 12x - 8</div>
        <div class="step">Bring RHS terms to LHS:</div>
        <div class="step">6x² - 4x² - x - 12x + 1 + 8 = 0</div>
        <div class="step">2x² - 13x + 9 = 0</div>
        <div class="final-answer">Yes, it is a quadratic equation.</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="question">2. Represent the following situations in the form of quadratic equations:</div>

        <div class="sub-question">(i) The area of a rectangular plot is 528 m². The length of the plot (in metres) is
            one more than twice its breadth. We need to find the length and breadth of the plot.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Area of plot = 528 m²</div>
        <div class="step">Length is 1 more than twice breadth.</div>
        <div class="solution-header">To Find:</div>
        <div class="step">Quadratic equation satisfying the condition.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let breadth of the plot = x meters</div>
        <div class="step">Then, Length = 2x + 1 meters</div>
        <div class="step">Area = Length × Breadth</div>
        <div class="step">528 = (2x + 1)(x)</div>
        <div class="step">528 = 2x² + x</div>
        <div class="step">Rearranging terms:</div>
        <div class="final-answer">2x² + x - 528 = 0</div>

        <div class="sub-question">(ii) The product of two consecutive positive integers is 306. We need to find the
            integers.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Product of two consecutive positive integers = 306</div>
        <div class="solution-header">To Find:</div>
        <div class="step">Quadratic representation.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let the first integer be x</div>
        <div class="step">Then the next consecutive integer is x + 1</div>
        <div class="step">Product = x(x + 1)</div>
        <div class="step">According to question:</div>
        <div class="step">x(x + 1) = 306</div>
        <div class="step">x² + x = 306</div>
        <div class="final-answer">x² + x - 306 = 0</div>

        <div class="sub-question">(iii) Rohan’s mother is 26 years older than him. The product of their ages (in years)
            3 years from now will be 360. We would like to find Rohan’s present age.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Mother is 26 years older than Rohan.</div>
        <div class="step">Product of ages 3 years hence = 360.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let Rohan's present age = x years</div>
        <div class="step">Mother's present age = (x + 26) years</div>
        <div class="step">After 3 years:</div>
        <div class="step">Rohan's age = x + 3</div>
        <div class="step">Mother's age = (x + 26) + 3 = x + 29</div>
        <div class="step">Product = (x + 3)(x + 29)</div>
        <div class="step">According to condition:</div>
        <div class="step">(x + 3)(x + 29) = 360</div>
        <div class="step">x(x + 29) + 3(x + 29) = 360</div>
        <div class="step">x² + 29x + 3x + 87 = 360</div>
        <div class="step">x² + 32x + 87 - 360 = 0</div>
        <div class="final-answer">x² + 32x - 273 = 0</div>

        <div class="sub-question">(iv) A train travels a distance of 480 km at a uniform speed. If the speed had been 8
            \\(\\frac{km}{h}\\) less, then it would have taken 3 hours more to cover the same distance. We need to find the speed of
            the train.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Distance = 480 km</div>
        <div class="step">If speed is 8 \\(\\frac{km}{h}\\) less, time increases by 3 hours.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let uniform speed of train = x \\(\\frac{km}{h}\\)</div>
        <div class="step">Time taken (t₁) = \\(\\frac{Distance}{Speed}\\) = \\(\\frac{480}{x}\\) hours</div>
        <div class="step">New speed = (x - 8) \\(\\frac{km}{h}\\)</div>
        <div class="step">New Time (t₂) = \\(\\frac{480}{x - 8}\\) hours</div>
        <div class="step">Difference in time is 3 hours:</div>
        <div class="step">t₂ - t₁ = 3</div>
        <div class="step">\\(\\frac{480}{x -
                    8}\\) - \\(\\frac{480}{x}\\) = 3</div>
        <div class="step">Take 480 common:</div>
        <div class="step">480 [\\(\\frac{1}{x -
                    8}\\) - \\(\\frac{1}{x}\\)] = 3</div>
        <div class="step">Simplify bracket terms:</div>
        <div class="step">480 [\\(\\frac{x - (x - 8)}{x(x - 8)}\\)] = 3</div>
        <div class="step">480 [\\(\\frac{8}{x² -
                    8x}\\)] = 3</div>
        <div class="step">Divide both sides by 3:</div>
        <div class="step">160 [\\(\\frac{8}{x² -
                    8x}\\)] = 1</div>
        <div class="step">1280 = x² - 8x</div>
        <div class="step">Rearranging terms:</div>
        <div class="final-answer">x² - 8x - 1280 = 0</div>
    </div>



</body></html>`,
    exercise2: `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quadratic Equations - Exercise 4.2</title>
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
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            display: inline-block;
        }

        .solution-header {
            color: #6C63FF;
            font-weight: 700;
            font-size: 1.1em;
            margin-bottom: 5px;
            margin-top: 10px;
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

        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #42A5F5 !important; }
  strong[style*="color: #ff6b6b"] { color: #42A5F5 !important; }
</style>
</head>

<body>
<div class="content-box">
        <div class="question">1. Find the roots of the following quadratic equations by factorisation:</div>

        <div class="sub-question">(i) x² – 3x – 10 = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Split the middle term -3x as -5x + 2x:</div>
        <div class="step">x² - 5x + 2x - 10 = 0</div>
        <div class="step">Take common factors:</div>
        <div class="step">x(x - 5) + 2(x - 5) = 0</div>
        <div class="step">(x - 5)(x + 2) = 0</div>
        <div class="step">Either x - 5 = 0 or x + 2 = 0</div>
        <div class="final-answer">Roots are 5 and -2.</div>

        <div class="sub-question">(ii) 2x² + x – 6 = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Split the middle term x as 4x - 3x:</div>
        <div class="step">2x² + 4x - 3x - 6 = 0</div>
        <div class="step">2x(x + 2) - 3(x + 2) = 0</div>
        <div class="step">(2x - 3)(x + 2) = 0</div>
        <div class="step">Either 2x - 3 = 0 or x + 2 = 0</div>
        <div class="step">2x = 3 ⇒ x = \\(\\frac{3}{2}\\)</div>
        <div class="step">x = -2</div>
        <div class="final-answer">Roots are \\(\\frac{3}{2}\\) and -2.</div>

        <div class="sub-question">(iii) √2x² + 7x + 5√2 = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Split the middle term 7x as 2x + 5x:</div>
        <div class="step">√2x² + 2x + 5x + 5√2 = 0</div>
        <div class="step">√2x(x + √2) + 5(x + √2) = 0</div>
        <div class="step">(√2x + 5)(x + √2) = 0</div>
        <div class="step">Either √2x + 5 = 0 or x + √2 = 0</div>
        <div class="step">√2x = -5 ⇒ x = \\(\\frac{-5}{√2}\\)</div>
        <div class="step">x = -√2</div>
        <div class="final-answer">Roots are \\(\\frac{-5}{√2}\\) and -√2.</div>

        <div class="sub-question">(iv) 2x² – x + \\(\\frac{1}{8}\\) = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Multiply entire equation by 8 to remove fraction:</div>
        <div class="step">16x² - 8x + 1 = 0</div>
        <div class="step">Split middle term -8x as -4x - 4x:</div>
        <div class="step">16x² - 4x - 4x + 1 = 0</div>
        <div class="step">4x(4x - 1) - 1(4x - 1) = 0</div>
        <div class="step">(4x - 1)(4x - 1) = 0</div>
        <div class="step">(4x - 1)² = 0</div>
        <div class="step">4x = 1 ⇒ x = \\(\\frac{1}{4}\\)</div>
        <div class="final-answer">Roots are \\(\\frac{1}{4}\\), \\(\\frac{1}{4}\\).</div>

        <div class="sub-question">(v) 100x² – 20x + 1 = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Split middle term -20x as -10x - 10x:</div>
        <div class="step">100x² - 10x - 10x + 1 = 0</div>
        <div class="step">10x(10x - 1) - 1(10x - 1) = 0</div>
        <div class="step">(10x - 1)(10x - 1) = 0</div>
        <div class="step">(10x - 1)² = 0</div>
        <div class="step">10x = 1 ⇒ x = \\(\\frac{1}{10}\\)</div>
        <div class="final-answer">Roots are \\(\\frac{1}{10}\\), \\(\\frac{1}{10}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">3. Find two numbers whose sum is 27 and product is 182.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Sum of numbers = 27</div>
        <div class="step">Product of numbers = 182</div>
        <div class="solution-header">To Find:</div>
        <div class="step">The two numbers.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let first number = x</div>
        <div class="step">Then second number = 27 - x</div>
        <div class="step">Checking product condition:</div>
        <div class="step">x(27 - x) = 182</div>
        <div class="step">27x - x² = 182</div>
        <div class="step">Rearranging to form ax² + bx + c = 0:</div>
        <div class="step">x² - 27x + 182 = 0</div>
        <div class="step">Split middle term -27x as -13x - 14x:</div>
        <div class="step">x² - 13x - 14x + 182 = 0</div>
        <div class="step">x(x - 13) - 14(x - 13) = 0</div>
        <div class="step">(x - 13)(x - 14) = 0</div>
        <div class="step">x = 13 or x = 14</div>
        <div class="step">If x = 13, second number is 14.</div>
        <div class="step">If x = 14, second number is 13.</div>
        <div class="final-answer">Numbers are 13 and 14.</div>
    </div>

    <div class="content-box">
        <div class="question">4. Find two consecutive positive integers, sum of whose squares is 365.</div>
        <div class="solution-header">Given:</div>
        <div class="step">Integers are consecutive positive integers.</div>
        <div class="step">Sum of squares = 365.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let integers be x and x + 1</div>
        <div class="step">x² + (x + 1)² = 365</div>
        <div class="step">x² + (x² + 2x + 1) = 365</div>
        <div class="step">2x² + 2x + 1 - 365 = 0</div>
        <div class="step">2x² + 2x - 364 = 0</div>
        <div class="step">Divide by 2:</div>
        <div class="step">x² + x - 182 = 0</div>
        <div class="step">Split middle term x as 14x - 13x:</div>
        <div class="step">x² + 14x - 13x - 182 = 0</div>
        <div class="step">x(x + 14) - 13(x + 14) = 0</div>
        <div class="step">(x + 14)(x - 13) = 0</div>
        <div class="step">x = -14 or x = 13</div>
        <div class="step">Since integers are positive, x = 13.</div>
        <div class="step">Next integer = 13 + 1 = 14.</div>
        <div class="final-answer">Integers are 13 and 14.</div>
    </div>

    <div class="content-box">
        <div class="question">5. The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13
            cm, find the other two sides.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNTAgMjYwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI2MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gNTAgNTAgTCA1MCAyMDAgTCAyMDAgMjAwIFoiIGZpbGw9IiNmZmY5YzQiIHN0cm9rZT0iI2ZmZjljNCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSA1MCAxODAgTCA3MCAxODAgTCA3MCAyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZjljNCIvPjx0ZXh0IHg9IjEyNSIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmY5YzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhc2UgPSB4IGNtPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZjljNCIgdGV4dC1hbmNob3I9ImVuZCI+QWx0ID0geCAtIDc8L3RleHQ+PHRleHQgeD0iMTM1IiB5PSIxMTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZjljNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SHlwb3RlbnVzZSA9IDEzIGNtPC90ZXh0PgoKCgo8L3N2Zz4=" alt="Triangle Altitude">
        <div class="solution-header">Given:</div>
        <div class="step">Hypotenuse = 13 cm</div>
        <div class="step">Altitude = Base - 7 cm</div>
        <div class="solution-header">To Find:</div>
        <div class="step">Base and Altitude.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let Base = x cm</div>
        <div class="step">Then Altitude = (x - 7) cm</div>
        <div class="step">By Pythagoras Theorem:</div>
        <div class="step">Base² + Altitude² = Hypotenuse²</div>
        <div class="step">x² + (x - 7)² = 13²</div>
        <div class="step">x² + (x² - 14x + 49) = 169</div>
        <div class="step">2x² - 14x + 49 - 169 = 0</div>
        <div class="step">2x² - 14x - 120 = 0</div>
        <div class="step">Divide by 2:</div>
        <div class="step">x² - 7x - 60 = 0</div>
        <div class="step">Split middle term -7x as -12x + 5x:</div>
        <div class="step">x² - 12x + 5x - 60 = 0</div>
        <div class="step">x(x - 12) + 5(x - 12) = 0</div>
        <div class="step">(x - 12)(x + 5) = 0</div>
        <div class="step">x = 12 or x = -5</div>
        <div class="step">Since length cannot be negative, x = 12.</div>
        <div class="step">Base = 12 cm.</div>
        <div class="step">Altitude = 12 - 7 = 5 cm.</div>
        <div class="final-answer">Sides are 12 cm and 5 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A cottage industry produces a certain number of pottery articles in a day... the cost
            of production of each article (in rupees) was 3 more than twice the number of articles produced... total
            cost of production was ₹ 90... find the number of articles produced and the cost of each article.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let number of articles produced = x</div>
        <div class="step">Cost of each article = 2x + 3</div>
        <div class="step">Total cost = (Number of articles) × (Cost per article)</div>
        <div class="step">x(2x + 3) = 90</div>
        <div class="step">2x² + 3x - 90 = 0</div>
        <div class="step">Split middle term 3x as 15x - 12x:</div>
        <div class="step">2x² - 12x + 15x - 90 = 0</div>
        <div class="step">2x(x - 6) + 15(x - 6) = 0</div>
        <div class="step">(2x + 15)(x - 6) = 0</div>
        <div class="step">x = 6 or x = \\(\\frac{-15}{2}\\)</div>
        <div class="step">Number of articles cannot be \\(\\frac{fractional}{negative}\\), so x = 6.</div>
        <div class="step">Cost per article = 2(6) + 3 = 15.</div>
        <div class="final-answer">Number of articles = 6, Cost per article = ₹ 15.</div>
    </div>



</body></html>`,
    exercise3: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quadratic Equations - Exercise 4.3</title>
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
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            display: inline-block;
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

        .solution-header {
            color: #6C63FF;
            font-weight: 700;
            font-size: 1.1em;
            margin-bottom: 5px;
            margin-top: 10px;
        }

        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #42A5F5 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #42A5F5 !important; }
  strong[style*="color: #ff6b6b"] { color: #42A5F5 !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">1. Find the nature of the roots of the following quadratic equations. If the real roots
            exist, find them:</div>

        <div class="sub-question">(i) 2x² – 3x + 5 = 0</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Determining coefficients: a = 2, b = -3, c = 5</div>
        <div class="step">Discriminant D = b² - 4ac</div>
        <div class="step">D = (-3)² - 4(2)(5)</div>
        <div class="step">D = 9 - 40</div>
        <div class="step">D = -31</div>
        <div class="step">Since D < 0, no real roots exist.</div>
                <div class="final-answer">No real roots.</div>

                <div class="sub-question">(ii) 3x² – 4√3x + 4 = 0</div>
                <div class="solution-header">Solution:</div>
                <div class="step">Determining coefficients: a = 3, b = -4√3, c = 4</div>
                <div class="step">Discriminant D = b² - 4ac</div>
                <div class="step">D = (-4√3)² - 4(3)(4)</div>
                <div class="step">D = 16(3) - 48</div>
                <div class="step">D = 48 - 48 = 0</div>
                <div class="step">Since D = 0, two equal, real roots exist.</div>
                <div class="step">Roots are given by x = \\(\\frac{-b}{2a}\\)</div>
                <div class="step">x = \\(\\frac{-(-4√3)}{2(3)}\\)</div>
                <div class="step">x = \\(\\frac{4√3}{6}\\)</div>
                <div class="step">Simplifying: x = \\(\\frac{2√3}{3}\\)</div>
                <div class="final-answer">Roots are \\(\\frac{2√3}{3}\\), \\(\\frac{2√3}{3}\\).</div>

                <div class="sub-question">(iii) 2x² – 6x + 3 = 0</div>
                <div class="solution-header">Solution:</div>
                <div class="step">Determining coefficients: a = 2, b = -6, c = 3</div>
                <div class="step">Discriminant D = b² - 4ac</div>
                <div class="step">D = (-6)² - 4(2)(3)</div>
                <div class="step">D = 36 - 24 = 12</div>
                <div class="step">Since D > 0, two distinct real roots exist.</div>
                <div class="step">Roots x = \\(\\frac{-b ± √D}{2a}\\)</div>
                <div class="step">x = \\(\\frac{-(-6) ± √12}{2(2)}\\)</div>
                <div class="step">x = \\(\\frac{6 ± 2√3}{4}\\)</div>
                <div class="step">Divide numerator and denominator by 2:</div>
                <div class="step">x = \\(\\frac{3 ± √3}{2}\\)</div>
                <div class="final-answer">Roots are \\(\\frac{3 + √3}{2}\\) and \\(\\frac{3 -
                            √3}{2}\\).</div>
        </div>

        <!-- Question 2 -->
        <div class="content-box">
            <div class="question">2. Find the values of k for each of the following quadratic equations, so that they
                have two equal roots.</div>

            <div class="sub-question">(i) 2x² + kx + 3 = 0</div>
            <div class="solution-header">Solution:</div>
            <div class="step">For equal roots, Discriminant D must be 0.</div>
            <div class="step">b² - 4ac = 0</div>
            <div class="step">Here, a = 2, b = k, c = 3</div>
            <div class="step">k² - 4(2)(3) = 0</div>
            <div class="step">k² - 24 = 0</div>
            <div class="step">k² = 24</div>
            <div class="step">k = ±√24</div>
            <div class="step">k = ±2√6</div>
            <div class="final-answer">k = ±2√6</div>

            <div class="sub-question">(ii) kx(x – 2) + 6 = 0</div>
            <div class="solution-header">Solution:</div>
            <div class="step">Simplifying the equation: kx² - 2kx + 6 = 0</div>
            <div class="step">For equal roots, D = 0</div>
            <div class="step">Here a = k, b = -2k, c = 6</div>
            <div class="step">(-2k)² - 4(k)(6) = 0</div>
            <div class="step">4k² - 24k = 0</div>
            <div class="step">Take 4k common: 4k(k - 6) = 0</div>
            <div class="step">Either 4k = 0 ⇒ k = 0</div>
            <div class="step">Or k - 6 = 0 ⇒ k = 6</div>
            <div class="step">However, if k = 0, the equation becomes 6 = 0 which is false and not quadratic.</div>
            <div class="step">Therefore, k ≠ 0.</div>
            <div class="final-answer">k = 6</div>
        </div>

        <!-- Question 3 -->
        <div class="content-box">
            <div class="question">3. Is it possible to design a rectangular mango grove whose length is twice its
                breadth, and the area is 800 m²? If so, find its length and breadth.</div>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNTAgMjYwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI2MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjQwIiB5PSI4MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNlMGY3ZmEiIHN0cm9rZT0iZ3JlZW4iIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE2MCIgeT0iMjI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImdyZWVuIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MZW5ndGggPSAyeDwvdGV4dD48dGV4dCB4PSIyOTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJncmVlbiIgdGV4dC1hbmNob3I9InN0YXJ0Ij5CID0geDwvdGV4dD48dGV4dCB4PSIxNjAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJncmVlbiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXJlYSA9IDgwMCBtwrI8L3RleHQ+PHRleHQgeD0iMTYwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJncmVlbiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFuZ28gR3JvdmU8L3RleHQ+CgoKCjwvc3ZnPg==" alt="Mango Grove">
            <div class="solution-header">Given:</div>
            <div class="step">Length (l) = 2 × Breadth (b)</div>
            <div class="step">Area = 800 m²</div>
            <div class="solution-header">To Find:</div>
            <div class="step">Possibility of design, and dimensions if possible.</div>
            <div class="solution-header">Solution:</div>
            <div class="step">Let breadth = x meters.</div>
            <div class="step">Then length = 2x meters.</div>
            <div class="step">Area = Length × Breadth</div>
            <div class="step">2x × x = 800</div>
            <div class="step">2x² = 800</div>
            <div class="step">Divide by 2: x² = 400</div>
            <div class="step">x = ±√400 = ±20</div>
            <div class="step">Since breadth cannot be negative, x = 20.</div>
            <div class="step">Breadth = 20 m.</div>
            <div class="step">Length = 2(20) = 40 m.</div>
            <div class="step">Since real positive values exist, design is possible.</div>
            <div class="final-answer">Length = 40 m, Breadth = 20 m.</div>
        </div>

        <!-- Question 4 -->
        <div class="content-box">
            <div class="question">4. Is the following situation possible? If so, determine their present ages. The sum
                of the ages of two friends is 20 years. Four years ago, the product of their ages in years was 48.</div>
            <div class="solution-header">Solution:</div>
            <div class="step">Let age of first friend = x years.</div>
            <div class="step">Then age of second friend = (20 - x) years.</div>
            <div class="step">Four years ago:</div>
            <div class="step">Age of first friend = x - 4</div>
            <div class="step">Age of second friend = (20 - x) - 4 = 16 - x</div>
            <div class="step">Product of ages = 48</div>
            <div class="step">(x - 4)(16 - x) = 48</div>
            <div class="step">16x - x² - 64 + 4x = 48</div>
            <div class="step">-x² + 20x - 64 = 48</div>
            <div class="step">-x² + 20x - 112 = 0</div>
            <div class="step">Multiply by -1: x² - 20x + 112 = 0</div>
            <div class="step">Check Discriminant D = b² - 4ac</div>
            <div class="step">D = (-20)² - 4(1)(112)</div>
            <div class="step">D = 400 - 448 = -48</div>
            <div class="step">Since D < 0, equation has no real roots.</div>
                    <div class="final-answer">This situation is not possible.</div>
            </div>

            <!-- Question 5 -->
            <div class="content-box">
                <div class="question">5. Is it possible to design a rectangular park of perimeter 80 m and area 400 m²?
                    If so, find its length and breadth.</div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNTAgMjYwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI2MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjYwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNlMWJlZTciIHN0cm9rZT0icHVycGxlIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxMzUiIHk9IjIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJwdXJwbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxlbmd0aCA9IHg8L3RleHQ+PHRleHQgeD0iMjIwIiB5PSIxNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0icHVycGxlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPkJyZWFkdGggPSA0MC14PC90ZXh0Pjx0ZXh0IHg9IjEzNSIgeT0iMTQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InB1cnBsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXJlYSA9IDQwMCBtwrI8L3RleHQ+PHRleHQgeD0iMTM1IiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJwdXJwbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBlcmltZXRlciA9IDgwIG08L3RleHQ+CgoKCjwvc3ZnPg==" alt="Rectangular Park">
                <div class="solution-header">Solution:</div>
                <div class="step">Let length = l and breadth = b.</div>
                <div class="step">Perimeter = 2(l + b) = 80</div>
                <div class="step">l + b = 40 ⇒ b = 40 - l</div>
                <div class="step">Area = l × b = 400</div>
                <div class="step">l(40 - l) = 400</div>
                <div class="step">40l - l² = 400</div>
                <div class="step">l² - 40l + 400 = 0</div>
                <div class="step">Check Discriminant D = b² - 4ac</div>
                <div class="step">D = (-40)² - 4(1)(400)</div>
                <div class="step">D = 1600 - 1600 = 0</div>
                <div class="step">Since D = 0, equal real roots exist.</div>
                <div class="step">l = \\(\\frac{-b}{2a}\\) = \\(\\frac{40}{2}\\) = 20</div>
                <div class="step">Length = 20 m.</div>
                <div class="step">Breadth = 40 - 20 = 20 m.</div>
                <div class="final-answer">Yes, possible. Length = 20 m, Breadth = 20 m.</div>
            </div>

</body>

</html>`
  }
};
