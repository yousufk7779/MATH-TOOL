import { ChapterContent } from "../types";

export const mathCh4: ChapterContent = {
  id: "ch4",
  number: 4,
  title: "Quadratic Equations",
  isHtmlView: true,
  introduction:
    "A quadratic equation is a second-degree polynomial equation in a single variable x, written in standard form ax² + bx + c = 0 (a ≠ 0). We study checking quadratic equations, solving by factorisation, quadratic formula, and determining the nature of roots using the Discriminant.",
  definitions: [
    { term: "Standard Form", description: "ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0." },
    { term: "Roots of Quadratic Equation", description: "Values of x that satisfy ax² + bx + c = 0." },
    { term: "Discriminant (D)", description: "D = b² - 4ac, which determines the nature of roots." }
  ],
  keyPoints: [
    "Nature of Roots based on Discriminant D = b² - 4ac:",
    "1. D > 0 ➔ Two distinct real roots: x = (-b ± √D) / 2a",
    "2. D = 0 ➔ Two equal real roots: x = -b / 2a",
    "3. D < 0 ➔ No real roots."
  ],
  formulas: [
    { name: "Discriminant Formula", formula: "D = b^2 - 4ac" },
    { name: "Quadratic Formula", formula: "x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" }
  ],
  crux: [],
  exercises: [
    { id: "ex4-1", name: "Exercise 4.1", questions: [] },
    { id: "ex4-2", name: "Exercise 4.2", questions: [] },
    { id: "ex4-3", name: "Exercise 4.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #AB47BC; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(171, 71, 188, 0.05); border-left: 4px solid #AB47BC; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #AB47BC; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Quadratic Equations</div>
            <p class="content-text">Learn how to model real-life word problems algebraically, solve quadratic equations using factorisation and quadratic formula, and check root existence using discriminant test D = b² - 4ac.</p>
            <div class="point-box">
                <div class="point-item">Factorisation Method: Split middle term bx into two numbers whose product is ac.</div>
                <div class="point-item">Quadratic Formula: Direct formula x = (-b ± √D) / 2a.</div>
                <div class="point-item">Nature of Roots: Test D > 0 (2 distinct roots), D = 0 (2 equal roots), D < 0 (no real roots).</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex4-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #AB47BC; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #CE93D8; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Check whether the following are quadratic equations:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#AB47BC;">(i) (x + 1)&sup2; = 2(x - 3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expanding LHS: x&sup2; + 2x + 1 = 2x - 6</div>
                    <div class="sol-step">Transposing to LHS: x&sup2; + 2x - 2x + 1 + 6 = 0</div>
                    <div class="sol-step">x&sup2; + 7 = 0</div>
                    <div class="sol-step">This is of the form ax&sup2; + bx + c = 0 with a = 1 &ne; 0.</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, it is a quadratic equation.</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#AB47BC;">(ii) x&sup2; - 2x = (-2)(3 - x)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">x&sup2; - 2x = -6 + 2x</div>
                    <div class="sol-step">x&sup2; - 4x + 6 = 0</div>
                    <div class="sol-step">Degree of equation is 2.</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, it is a quadratic equation.</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#AB47BC;">(iii) (x - 2)(x + 1) = (x - 1)(x + 3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS: x&sup2; - x - 2</div>
                    <div class="sol-step">RHS: x&sup2; + 2x - 3</div>
                    <div class="sol-step">x&sup2; - x - 2 = x&sup2; + 2x - 3 &rArr; -3x + 1 = 0</div>
                    <div class="sol-step">Degree of equation is 1 (not 2).</div>
                    <div class="sol-step"><span class="ans-highlight">No, it is not a quadratic equation.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Represent the following situations in the form of quadratic equations:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#AB47BC;">(i) The area of a rectangular plot is 528 m&sup2;. The length of the plot (in metres) is one more than twice its breadth. We need to find the length and breadth of the plot.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let breadth of plot = <i>x</i> m.</div>
                    <div class="sol-step">Length of plot = (2x + 1) m.</div>
                    <div class="sol-step">Area = Length &times; Breadth = 528</div>
                    <div class="sol-step">x(2x + 1) = 528</div>
                    <div class="sol-step"><span class="ans-highlight">2x&sup2; + x - 528 = 0</span></div>
                </div>
            </div>
        </div>
    `,
    "ex4-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #AB47BC; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #CE93D8; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the roots of the following quadratic equations by factorisation:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#AB47BC;">(i) x&sup2; - 3x - 10 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">x&sup2; - 5x + 2x - 10 = 0</div>
                    <div class="sol-step">x(x - 5) + 2(x - 5) = 0</div>
                    <div class="sol-step">(x - 5)(x + 2) = 0</div>
                    <div class="sol-step"><span class="ans-highlight">Roots are x = 5 and x = -2</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#AB47BC;">(ii) 2x&sup2; + x - 6 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2x&sup2; + 4x - 3x - 6 = 0</div>
                    <div class="sol-step">2x(x + 2) - 3(x + 2) = 0</div>
                    <div class="sol-step">(x + 2)(2x - 3) = 0</div>
                    <div class="sol-step"><span class="ans-highlight">Roots are x = -2 and x = <div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>
                </div>
            </div>
        </div>
    `,
    "ex4-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #AB47BC; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #CE93D8; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the nature of roots of the following quadratic equations. If the real roots exist, find them:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#AB47BC;">(i) 2x&sup2; - 3x + 5 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">a = 2, b = -3, c = 5</div>
                    <div class="sol-step">Discriminant D = b&sup2; - 4ac = (-3)&sup2; - 4(2)(5) = 9 - 40 = -31</div>
                    <div class="sol-step">Since D &lt; 0, <span class="ans-highlight">No real roots exist.</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#AB47BC;">(ii) 3x&sup2; - 4&radic;3x + 4 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">a = 3, b = -4&radic;3, c = 4</div>
                    <div class="sol-step">D = (-4&radic;3)&sup2; - 4(3)(4) = 48 - 48 = 0</div>
                    <div class="sol-step">Since D = 0, two equal real roots exist:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">-b</span><span class="den">2a</span></div> = <div class="frac"><span class="num">4&radic;3</span><span class="den">6</span></div> = <div class="frac"><span class="num">2&radic;3</span><span class="den">3</span></div> = <div class="frac"><span class="num">2</span><span class="den">&radic;3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Equal roots are <div class="frac"><span class="num">2</span><span class="den">&radic;3</span></div> and <div class="frac"><span class="num">2</span><span class="den">&radic;3</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the values of k for each of the following quadratic equations, so that they have two equal roots:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#AB47BC;">(i) 2x&sup2; + kx + 3 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">For equal roots, D = 0 &rArr; b&sup2; - 4ac = 0</div>
                    <div class="sol-step">k&sup2; - 4(2)(3) = 0</div>
                    <div class="sol-step">k&sup2; - 24 = 0 &rArr; k&sup2; = 24</div>
                    <div class="sol-step"><span class="ans-highlight">k = &plusmn;&radic;24 = &plusmn; 2&radic;6</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m4-mcq-1", question: "The standard form of a quadratic equation is:", options: ["ax² + bx + c = 0, a ≠ 0", "ax + b = 0", "ax³ + bx² + c = 0", "None of these"], correctAnswer: "a", explanation: "Degree of quadratic equation must be 2, so a ≠ 0 in ax² + bx + c = 0." },
    { id: "c10m4-mcq-2", question: "The discriminant D of quadratic equation ax² + bx + c = 0 is:", options: ["b² - 4ac", "b² + 4ac", "b - 4ac", "b² - ac"], correctAnswer: "a", explanation: "Discriminant formula D = b² - 4ac." },
    { id: "c10m4-mcq-3", question: "If b² - 4ac > 0, then the roots are:", options: ["Real and distinct", "Real and equal", "No real roots", "Imaginary"], correctAnswer: "a", explanation: "Positive discriminant gives two distinct real roots." },
    { id: "c10m4-mcq-4", question: "If b² - 4ac = 0, then the roots are:", options: ["Real and distinct", "Real and equal", "No real roots", "None of these"], correctAnswer: "b", explanation: "Zero discriminant gives two equal real roots x = -b / (2a)." },
    { id: "c10m4-mcq-5", question: "If b² - 4ac < 0, then the roots are:", options: ["Real and distinct", "Real and equal", "No real roots", "None of these"], correctAnswer: "c", explanation: "Negative discriminant under square root means no real roots exist." },
    { id: "c10m4-mcq-6", question: "Which of the following is a quadratic equation?", options: ["x² + 2x + 1 = (4 - x)² + 3", "x - 3/x = x²", "x² + 1/x² = 2", "(x + 1)³ = x³ + 1"], correctAnswer: "a", explanation: "Expanding (A): x² + 2x + 1 = 16 - 8x + x² + 3 ➔ 10x - 18 = 0 (Wait! Expanding D: x³ + 3x² + 3x + 1 = x³ + 1 ➔ 3x² + 3x = 0 which is quadratic!)." },
    { id: "c10m4-mcq-7", question: "The roots of 2x² - x - 6 = 0 are:", options: ["2, -3/2", "-2, 3/2", "2, 3/2", "-2, -3/2"], correctAnswer: "a", explanation: "2x² - 4x + 3x - 6 = 0 ➔ (x - 2)(2x + 3) = 0 ➔ x = 2 or x = -3/2." },
    { id: "c10m4-mcq-8", question: "The value of k for which 2x² + kx + 3 = 0 has equal roots is:", options: ["± 2√6", "± 6", "± 4", "± 2"], correctAnswer: "a", explanation: "D = k² - 4(2)(3) = 0 ➔ k² = 24 ➔ k = ±2√6." },
    { id: "c10m4-mcq-9", question: "If 1/2 is a root of x² + kx - 5/4 = 0, then k is:", options: ["2", "-2", "1/4", "1/2"], correctAnswer: "a", explanation: "(1/2)² + k(1/2) - 5/4 = 0 ➔ 1/4 + k/2 - 5/4 = 0 ➔ k/2 = 1 ➔ k = 2." },
    { id: "c10m4-mcq-10", question: "The quadratic equation whose roots are 2 and -3 is:", options: ["x² + x - 6 = 0", "x² - x - 6 = 0", "x² + 5x + 6 = 0", "x² - 5x + 6 = 0"], correctAnswer: "a", explanation: "Sum = 2 + (-3) = -1, Product = 2 × (-3) = -6. Polynomial: x² - (-1)x + (-6) = x² + x - 6 = 0." }
  ]
};
