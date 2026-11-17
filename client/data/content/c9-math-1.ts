import { ChapterContent } from "../types";

export const c9Math1: ChapterContent = {
  id: "c9-math-1",
  number: 1,
  title: "Number Systems",
  introduction:
    "In your earlier classes, you have learnt about the number line and how to represent various types of numbers on it. In this chapter, we will explore rational numbers, irrational numbers, and their decimal expansions.",
  definitions: [
    {
      term: "Rational Number",
      description:
        "A number which can be written in the form p/q, where p and q are integers and q ≠ 0.",
    },
    {
      term: "Irrational Number",
      description:
        "A number which cannot be written in the form p/q, where p and q are integers and q ≠ 0.",
    },
  ],
  keyPoints: [
    "Every rational number is a real number.",
    "Every irrational number is a real number.",
    "The sum or difference of a rational number and an irrational number is irrational.",
    "The product or quotient of a non-zero rational number with an irrational number is irrational.",
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] },
    { id: "ex1-2", name: "Exercise 1.2", questions: [] },
    { id: "ex1-3", name: "Exercise 1.3", questions: [] },
    { id: "ex1-4", name: "Exercise 1.4", questions: [] },
    { id: "ex1-5", name: "Exercise 1.5", questions: [] },
    { id: "ex1-6", name: "Exercise 1.6", questions: [] },
  ],
  examples: [],
  mcqs: [
    {
      id: "c9-m1-q1",
      question: "Which of the following is an irrational number?",
      options: ["√4", "√9", "√7", "0.25"],
      correctAnswer: "√7",
    },
    {
      id: "c9-m1-q2",
      question:
        "The decimal expansion of a rational number is either ________ or ________.",
      options: [
        "terminating, non-repeating",
        "terminating, repeating",
        "non-terminating, non-repeating",
        "None of these",
      ],
      correctAnswer: "terminating, repeating",
    },
    {
      id: "c9-m1-q3",
      question: "Every whole number is a natural number.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: "c9-m1-q4",
      question: "The product of any two irrational numbers is:",
      options: [
        "Always irrational",
        "Always rational",
        "Always an integer",
        "Sometimes rational, sometimes irrational",
      ],
      correctAnswer: "Sometimes rational, sometimes irrational",
    },
    {
      id: "c9-m1-q5",
      question: "The value of 125^(1/3) is:",
      options: ["5", "25", "1", "15"],
      correctAnswer: "5",
    },
    {
      id: "c9-m1-q6",
      question: "Is zero a rational number?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: "c9-m1-q7",
      question: "The decimal expansion of √2 is:",
      options: [
        "Terminating",
        "Non-terminating repeating",
        "Non-terminating non-repeating",
        "None of these",
      ],
      correctAnswer: "Non-terminating non-repeating",
    },
    {
      id: "c9-m1-q8",
      question:
        "Between two rational numbers, there are ________ rational numbers.",
      options: ["One", "Finite", "Infinitely many", "Zero"],
      correctAnswer: "Infinitely many",
    },
    {
      id: "c9-m1-q9",
      question: "π (Pi) is an ________ number.",
      options: ["Rational", "Irrational", "Integer", "Whole"],
      correctAnswer: "Irrational",
    },
    {
      id: "c9-m1-q10",
      question: "The rationalised form of 1/√2 is:",
      options: ["√2", "√2/2", "2", "1/2"],
      correctAnswer: "√2/2",
    },
  ],
  summary: [
    "A number is rational if its decimal expansion is terminating or non-terminating recurring.",
    "A number is irrational if its decimal expansion is non-terminating non-recurring.",
    "All rational and irrational numbers together make up the collection of real numbers.",
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
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
        <div class="step">A <strong>Number System</strong> is an organised way of grouping numbers. In this chapter, we study <strong>Real Numbers</strong>: natural numbers, whole numbers, integers, rational numbers and irrational numbers (such as √2 and π).</div>
    </div>

    <div class="content-box">
        <div class="section-title">2. Classification of Numbers</div>
        <div class="step"><strong>Natural Numbers (N):</strong> The counting numbers starting from 1, 2, 3 and so on. They are represented by the set \\(N = \\{1, 2, 3, \\dots\\}\\). Zero is <strong>not</strong> a natural number.</div>
        
        <div class="step"><strong>Whole Numbers (W):</strong> The collection of natural numbers along with zero. They are represented by \\(W = \\{0, 1, 2, 3, \\dots\\}\\). So every natural number is a whole number.</div>
        
        <div class="step"><strong>Integers (Z):</strong> The collection of all whole numbers and the negatives of natural numbers. It is denoted by \\(Z = \\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}\\). So every whole number is an integer, but −1, −2, −3, … are not whole numbers.</div>
        
        <div class="step"><strong>Rational Numbers (Q):</strong> A number is called rational if it can be written in the form \\(\\frac{p}{q}\\), where \\(p\\) and \\(q\\) are integers and \\(q \\neq 0\\). For example, 3 = 3 ÷ 1, 0 = 0 ÷ 1 and 0.5 = 1 ÷ 2 are rational. Every integer is a rational number.</div>
        
        <div class="step"><strong>Irrational Numbers:</strong> A number is called irrational if it <strong>cannot</strong> be written in the form \\(\\frac{p}{q}\\). Examples include \\(\\sqrt{2}, \\sqrt{3}, \\sqrt{5}\\), and \\(\\pi\\). Their decimals never end and never repeat (√2 = 1.41421…). The square root of a positive integer that is not a perfect square is irrational.</div>
        
        <div class="step"><strong>Real Numbers (R):</strong> The collection of all rational and irrational numbers together forms the set of real numbers. Every real number is represented by a unique point on the number line.</div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Decimal Expansions</div>
        <div class="sub-header">For Rational Numbers:</div>
        <div class="step">The decimal expansion is either <strong>Terminating</strong> (e.g., \\(0.5, 0.125\\)) or <strong>Non-terminating Recurring</strong> (e.g., \\(0.333\\dots, 0.142857\\dots\\)). A fraction in lowest terms terminates only if its denominator has no prime factor other than 2 and 5 (e.g. 3 ÷ 8, 7 ÷ 20); otherwise it repeats (e.g. 1 ÷ 3, 1 ÷ 7).</div>
        
        <div class="sub-header">For Irrational Numbers:</div>
        <div class="step">The decimal expansion is <strong>Non-terminating Non-recurring</strong> (e.g., \\(\\pi \\approx 3.14159\\dots\\)). Example: 0.101001000100001… (the number of 0s keeps increasing).</div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Key Operations & Formulas</div>
        <div class="sub-header">Rationalisation</div>
        <div class="step">To rationalize the denominator of \\(\\frac{1}{\\sqrt{a}+b}\\), we multiply and divide it by its conjugate \\(\\sqrt{a}-b\\). This removes the root because (x + y)(x − y) = x² − y². Also, √a × √b = √(ab) and (√a)² = a.</div>
        
        <div class="sub-header">Laws of Exponents</div>
        <div class="formula-box">
            1. \\(a^p \\cdot a^q = a^{p+q}\\)<br>
            2. \\((a^p)^q = a^{pq}\\)<br>
            3. \\(\\frac{a^p}{a^q} = a^{p-q}\\)<br>
            4. \\(a^p \\cdot b^p = (ab)^p\\)
        </div>
    </div>

</div>
`,
  htmlExercises: {
    "ex1-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Is zero a rational number? Can you write it in the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span>, where p and q are integers and q ≠ 0?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          0 = <span class='frac'><span class='num'>0</span><span class='den'>1</span></span> = <span class='frac'><span class='num'>0</span><span class='den'>2</span></span> = <span class='frac'><span class='num'>0</span><span class='den'>3</span></span> = ...<br/>
          p = 0, q = 1, 2, 3, ... (integers, q ≠ 0)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Yes. 0 = <span class='frac'><span class='num'>0</span><span class='den'>1</span></span>, so zero is rational.</span></div>
        </div>

        <div class="question">Q2. Find six rational numbers between 3 and 4.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by 7 (6 + 1 = 7):<br/>
          3 = <span class='frac'><span class='num'>3</span><span class='den'>1</span></span> = <span class='frac'><span class='num'>3 × 7</span><span class='den'>1 × 7</span></span> = <span class='frac'><span class='num'>21</span><span class='den'>7</span></span><br/>
          4 = <span class='frac'><span class='num'>4</span><span class='den'>1</span></span> = <span class='frac'><span class='num'>4 × 7</span><span class='den'>1 × 7</span></span> = <span class='frac'><span class='num'>28</span><span class='den'>7</span></span><br/>
          Numbers between <span class='frac'><span class='num'>21</span><span class='den'>7</span></span> and <span class='frac'><span class='num'>28</span><span class='den'>7</span></span>:<br/>
          <span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>23</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>24</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>25</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>26</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>27</span><span class='den'>7</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>23</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>24</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>25</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>26</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>27</span><span class='den'>7</span></span></span></div>
        </div>

        <div class="question">Q3. Find five rational numbers between <span class='frac'><span class='num'>3</span><span class='den'>5</span></span> and <span class='frac'><span class='num'>4</span><span class='den'>5</span></span>.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by 6 (5 + 1 = 6):<br/>
          <span class='frac'><span class='num'>3</span><span class='den'>5</span></span> = <span class='frac'><span class='num'>3 × 6</span><span class='den'>5 × 6</span></span> = <span class='frac'><span class='num'>18</span><span class='den'>30</span></span><br/>
          <span class='frac'><span class='num'>4</span><span class='den'>5</span></span> = <span class='frac'><span class='num'>4 × 6</span><span class='den'>5 × 6</span></span> = <span class='frac'><span class='num'>24</span><span class='den'>30</span></span><br/>
          Numbers between <span class='frac'><span class='num'>18</span><span class='den'>30</span></span> and <span class='frac'><span class='num'>24</span><span class='den'>30</span></span>:<br/>
          <span class='frac'><span class='num'>19</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>20</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>21</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>22</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>23</span><span class='den'>30</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>19</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>20</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>21</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>22</span><span class='den'>30</span></span>, <span class='frac'><span class='num'>23</span><span class='den'>30</span></span></span></div>
        </div>

        <div class="question">Q4. State whether the following statements are true or false. Give reasons for your answers.</div>
        
        <div class="subpart">(i) Every natural number is a whole number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Natural numbers = 1, 2, 3, ...<br/>
          Whole numbers = 0, 1, 2, 3, ...<br/>
          Every natural number is a whole number.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">True</span></div>
        </div>

        <div class="subpart">(ii) Every integer is a whole number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Integers = ..., −2, −1, 0, 1, 2, ...<br/>
          Whole numbers = 0, 1, 2, ...<br/>
          −1, −2, ... are not whole numbers.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">False</span></div>
        </div>

        <div class="subpart">(iii) Every rational number is a whole number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> is a rational number.<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> is not a whole number.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">False</span></div>
        </div>
      </div>
`,
    "ex1-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. State whether the following statements are true or false. Justify your answers.</div>
        
        <div class="subpart">(i) Every irrational number is a real number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Real numbers = rational numbers + irrational numbers<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">True</span></div>
        </div>

        <div class="subpart">(ii) Every point on the number line is of the form √m, where m is a natural number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          −2 is a point on the number line.<br/>
          √m > 0 for every natural number m.<br/>
          −2 ≠ √m<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">False</span></div>
        </div>

        <div class="subpart">(iii) Every real number is an irrational number.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          2 is a real number.<br/>
          2 = <span class='frac'><span class='num'>2</span><span class='den'>1</span></span> is rational.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">False</span></div>
        </div>

        <div class="question">Q2. Are the square roots of all positive integers irrational? If not, give an example.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          √4 = 2 = <span class='frac'><span class='num'>2</span><span class='den'>1</span></span>, which is rational.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">No. Example: √4 = 2</span></div>
        </div>

        <div class="question">Q3. Show how √5 can be represented on the number line.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          1. Take OA = 2 units on the number line.<br/>
          2. Draw AB ⊥ OA, AB = 1 unit.<br/>
          3. Join OB.<br/>
          In right △OAB, by Pythagoras theorem:<br/>
          OB² = OA² + AB²<br/>
          OB² = 2² + 1² = 4 + 1 = 5<br/>
          OB = √5<br/>
          4. With centre O and radius OB, draw an arc cutting the number line at P.<br/>
          OP = OB = √5<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">P represents √5 on the number line.</span></div><br/>
          <div class="svg-container">
            <svg width="280" height="150" style="background: #1E1E2E; border-radius: 12px; padding: 10px;">
              <line x1="20" y1="90" x2="260" y2="90" stroke="white" stroke-width="2" />
              <text x="40" y="125" fill="white" font-size="13">0 (O)</text>
              <text x="130" y="125" fill="white" font-size="13">2 (A)</text>
              <line x1="50" y1="80" x2="50" y2="100" stroke="white" />
              <line x1="150" y1="80" x2="150" y2="100" stroke="white" />
              <line x1="150" y1="90" x2="150" y2="30" stroke="#FFB74D" stroke-width="3" />
              <text x="155" y="55" fill="#FFB74D" font-size="13">1 (B)</text>
              <line x1="50" y1="90" x2="150" y2="30" stroke="#FFB74D" stroke-width="2" stroke-dasharray="5" />
              <text x="85" y="55" fill="#FFB74D" font-size="14" font-weight="bold">√5</text>
              <path d="M 150 30 A 116 116 0 0 1 165 90" stroke="#FFB74D" fill="none" stroke-dasharray="5" />
              <text x="175" y="125" fill="#FFB74D" font-size="15" font-weight="bold">P</text>
            </svg>
          </div>
        </div>
      </div>
`,
    "ex1-3": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Write the following in decimal form and say what kind of decimal expansion each has:</div>
        <div class="solution">
          (i) <span class='frac'><span class='num'>36</span><span class='den'>100</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>36</span><span class='den'>100</span></span> = 0.36<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.36, terminating</span></div><br/>
          <br/>
          (ii) <span class='frac'><span class='num'>1</span><span class='den'>11</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>11</span></span> = 0.090909...<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.090909..., non-terminating recurring</span></div><br/>
          <br/>
          (iii) 4 <span class='frac'><span class='num'>1</span><span class='den'>8</span></span><br/>
          <strong>Solution:</strong><br/>
          4 <span class='frac'><span class='num'>1</span><span class='den'>8</span></span> = 4 + <span class='frac'><span class='num'>1</span><span class='den'>8</span></span><br/>
          = 4 + <span class='frac'><span class='num'>1 × 125</span><span class='den'>8 × 125</span></span><br/>
          = 4 + <span class='frac'><span class='num'>125</span><span class='den'>1000</span></span><br/>
          = 4 + 0.125<br/>
          = 4.125<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">4.125, terminating</span></div><br/>
          <br/>
          (iv) <span class='frac'><span class='num'>3</span><span class='den'>13</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>3</span><span class='den'>13</span></span> = 0.230769230769...<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.230769230769..., non-terminating recurring</span></div><br/>
          <br/>
          (v) <span class='frac'><span class='num'>2</span><span class='den'>11</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>2</span><span class='den'>11</span></span> = 0.181818...<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.181818..., non-terminating recurring</span></div><br/>
          <br/>
          (vi) <span class='frac'><span class='num'>329</span><span class='den'>400</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>329</span><span class='den'>400</span></span> = <span class='frac'><span class='num'>329 × 25</span><span class='den'>400 × 25</span></span><br/>
          = <span class='frac'><span class='num'>8225</span><span class='den'>10000</span></span><br/>
          = 0.8225<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.8225, terminating</span></div>
        </div>

        <div class="question">Q2. You know that <span class='frac'><span class='num'>1</span><span class='den'>7</span></span> = 0.<span class="overline">142857</span>. Can you predict the decimal expansions of <span class='frac'><span class='num'>2</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>3</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>4</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>5</span><span class='den'>7</span></span>, <span class='frac'><span class='num'>6</span><span class='den'>7</span></span> without doing long division?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>7</span></span> = 0.142857142857...<br/>
          Multiplying by 2, 3, 4, 5 and 6:<br/>
          <span class='frac'><span class='num'>2</span><span class='den'>7</span></span> = 2 × 0.142857... = 0.285714285714...<br/>
          <span class='frac'><span class='num'>3</span><span class='den'>7</span></span> = 3 × 0.142857... = 0.428571428571...<br/>
          <span class='frac'><span class='num'>4</span><span class='den'>7</span></span> = 4 × 0.142857... = 0.571428571428...<br/>
          <span class='frac'><span class='num'>5</span><span class='den'>7</span></span> = 5 × 0.142857... = 0.714285714285...<br/>
          <span class='frac'><span class='num'>6</span><span class='den'>7</span></span> = 6 × 0.142857... = 0.857142857142...<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Yes, by multiplying 0.142857... by 2, 3, 4, 5 and 6</span></div>
        </div>

        <div class="question">Q3. Express the following in the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span>, where p and q are integers and q ≠ 0:</div>
        <div class="subpart">(i) 0.<span class="overline">6</span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let x = 0.6666... ...(1)<br/>
          Multiplying both sides by 10:<br/>
          10x = 6.6666... ...(2)<br/>
          Subtracting (1) from (2):<br/>
          10x − x = 6.6666... − 0.6666...<br/>
          9x = 6<br/>
          x = <span class='frac'><span class='num'>6</span><span class='den'>9</span></span> = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>2</span><span class='den'>3</span></span></span></div>
        </div>
        <div class="subpart">(ii) 0.4<span class="overline">7</span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let x = 0.4777... ...(1)<br/>
          Multiplying (1) by 10:<br/>
          10x = 4.777... ...(2)<br/>
          Multiplying (1) by 100:<br/>
          100x = 47.777... ...(3)<br/>
          Subtracting (2) from (3):<br/>
          100x − 10x = 47.777... − 4.777...<br/>
          90x = 43<br/>
          x = <span class='frac'><span class='num'>43</span><span class='den'>90</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>43</span><span class='den'>90</span></span></span></div>
        </div>
        <div class="subpart">(iii) 0.<span class="overline">001</span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let x = 0.001001... ...(1)<br/>
          Multiplying both sides by 1000:<br/>
          1000x = 1.001001... ...(2)<br/>
          Subtracting (1) from (2):<br/>
          1000x − x = 1.001001... − 0.001001...<br/>
          999x = 1<br/>
          x = <span class='frac'><span class='num'>1</span><span class='den'>999</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>1</span><span class='den'>999</span></span></span></div>
        </div>

        <div class="question">Q4. Express 0.99999... in the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span>. Are you surprised by your answer?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let x = 0.9999... ...(1)<br/>
          Multiplying both sides by 10:<br/>
          10x = 9.9999... ...(2)<br/>
          Subtracting (1) from (2):<br/>
          10x − x = 9.9999... − 0.9999...<br/>
          9x = 9<br/>
          x = <span class='frac'><span class='num'>9</span><span class='den'>9</span></span> = 1<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">1. Yes, 0.9999... is exactly equal to 1.</span></div>
        </div>

        <div class="question">Q5. What can the maximum number of digits be in the repeating block of digits in the decimal expansion of <span class='frac'><span class='num'>1</span><span class='den'>17</span></span>?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Divisor = 17<br/>
          Possible non-zero remainders = 1, 2, ..., 16<br/>
          Maximum digits in the repeating block = 17 − 1 = 16<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>17</span></span> = 0.0588235294117647...<br/>
          Repeating block = 0588235294117647 (16 digits)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">16</span></div>
        </div>

        <div class="question">Q6. Look at several examples of rational numbers in the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span> (q ≠ 0), where q must satisfy a property for terminating expansion.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> = 0.5, q = 2<br/>
          <span class='frac'><span class='num'>3</span><span class='den'>4</span></span> = 0.75, q = 4 = 2<sup>2</sup><br/>
          <span class='frac'><span class='num'>2</span><span class='den'>5</span></span> = 0.4, q = 5<br/>
          <span class='frac'><span class='num'>7</span><span class='den'>20</span></span> = 0.35, q = 20 = 2<sup>2</sup> × 5<br/>
          Prime factors of q: only 2 and/or 5<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">q = 2<sup>n</sup> × 5<sup>m</sup> (n, m whole numbers)</span></div>
        </div>

        <div class="question">Q7. Write three numbers whose decimal expansions are non-terminating non-recurring.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Decimals that never end and never repeat:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 0.01001000100001...<br/>(ii) 0.202002000200002...<br/>(iii) 0.12112111211112...</span></div>
        </div>

        <div class="question">Q8. Find three different irrational numbers between the rational numbers <span class='frac'><span class='num'>5</span><span class='den'>7</span></span> and <span class='frac'><span class='num'>9</span><span class='den'>11</span></span>.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>5</span><span class='den'>7</span></span> = 0.714285...<br/>
          <span class='frac'><span class='num'>9</span><span class='den'>11</span></span> = 0.818181...<br/>
          Non-terminating non-recurring decimals between 0.714285... and 0.818181...:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 0.730730073000...<br/>(ii) 0.750750075000...<br/>(iii) 0.790790079000...</span></div>
        </div>

        <div class="question">Q9. Classify the following numbers as rational or irrational:</div>
        <div class="solution">
          (i) √23<br/>
          <strong>Solution:</strong><br/>
          23 is not a perfect square.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Irrational</span></div><br/>
          <br/>
          (ii) √225<br/>
          <strong>Solution:</strong><br/>
          √225 = 15 = <span class='frac'><span class='num'>15</span><span class='den'>1</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Rational</span></div><br/>
          <br/>
          (iii) 0.3796<br/>
          <strong>Solution:</strong><br/>
          0.3796 = <span class='frac'><span class='num'>3796</span><span class='den'>10000</span></span> (terminating)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Rational</span></div><br/>
          <br/>
          (iv) 7.478478...<br/>
          <strong>Solution:</strong><br/>
          7.478478... is non-terminating recurring.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Rational</span></div><br/>
          <br/>
          (v) 1.101001000100001...<br/>
          <strong>Solution:</strong><br/>
          1.101001000100001... is non-terminating non-recurring.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Irrational</span></div>
        </div>
      </div>
`,
    "ex1-4": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Visualise 3.765 on the number line, using successive magnification.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          1. 3.765 lies between 3 and 4.<br/>
          2. Divide [3, 4] into 10 parts. 3.765 lies between 3.7 and 3.8.<br/>
          3. Divide [3.7, 3.8] into 10 parts. 3.765 lies between 3.76 and 3.77.<br/>
          4. Divide [3.76, 3.77] into 10 parts. Mark 3.765.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">3.765 marked between 3.76 and 3.77</span></div>
        </div>

        <div class="question">Q2. Visualise 4.<span class="overline">26</span> on the number line, up to 4 decimal places.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          4.262626... ≈ 4.2626 (up to 4 decimal places)<br/>
          1. 4.2626 lies between 4 and 5.<br/>
          2. Divide [4, 5] into 10 parts. 4.2626 lies between 4.2 and 4.3.<br/>
          3. Divide [4.2, 4.3] into 10 parts. 4.2626 lies between 4.26 and 4.27.<br/>
          4. Divide [4.26, 4.27] into 10 parts. 4.2626 lies between 4.262 and 4.263.<br/>
          5. Divide [4.262, 4.263] into 10 parts. Mark 4.2626.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">4.2626 marked between 4.262 and 4.263</span></div>
        </div>
      </div>
`,
    "ex1-5": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Classify the following numbers as rational or irrational:</div>
        <div class="solution">
          (i) 2 - √5<br/>
          <strong>Solution:</strong><br/>
          2 is rational, √5 is irrational.<br/>
          Rational − irrational = irrational<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Irrational</span></div><br/>
          <br/>
          (ii) (3 + √23) - √23<br/>
          <strong>Solution:</strong><br/>
          (3 + √23) − √23 = 3 + √23 − √23<br/>
          = 3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Rational</span></div><br/>
          <br/>
          (iii) <span class='frac'><span class='num'>2√7</span><span class='den'>7√7</span></span><br/>
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>2√7</span><span class='den'>7√7</span></span> = <span class='frac'><span class='num'>2</span><span class='den'>7</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Rational</span></div><br/>
          <br/>
          (iv) <span class='frac'><span class='num'>1</span><span class='den'>√2</span></span><br/>
          <strong>Solution:</strong><br/>
          1 is rational, √2 is irrational.<br/>
          Non-zero rational ÷ irrational = irrational<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Irrational</span></div><br/>
          <br/>
          (v) 2π<br/>
          <strong>Solution:</strong><br/>
          2 is rational, π is irrational.<br/>
          Non-zero rational × irrational = irrational<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Irrational</span></div>
        </div>

        <div class="question">Q2. Simplify each of the following expressions:</div>
        <div class="subpart">(i) (3 + √3)(2 + √2)</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (3 + √3)(2 + √2)<br/>
          = 3(2 + √2) + √3(2 + √2)<br/>
          = 6 + 3√2 + 2√3 + √3 × √2<br/>
          = 6 + 3√2 + 2√3 + √6<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">6 + 3√2 + 2√3 + √6</span></div>
        </div>

        <div class="subpart">(ii) (3 + √3)(3 - √3)</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Using (a + b)(a − b) = a² − b²:<br/>
          (3 + √3)(3 − √3) = 3² − (√3)²<br/>
          = 9 − 3<br/>
          = 6<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">6</span></div>
        </div>

        <div class="subpart">(iii) (√5 + √2)<sup>2</sup></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Using (a + b)² = a² + 2ab + b²:<br/>
          (√5 + √2)² = (√5)² + 2(√5)(√2) + (√2)²<br/>
          = 5 + 2√10 + 2<br/>
          = 7 + 2√10<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">7 + 2√10</span></div>
        </div>

        <div class="subpart">(iv) (√5 - √2)(√5 + √2)</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Using (a − b)(a + b) = a² − b²:<br/>
          (√5 − √2)(√5 + √2) = (√5)² − (√2)²<br/>
          = 5 − 2<br/>
          = 3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">3</span></div>
        </div>

        <div class="question">Q3. Recall, π is defined as ratio of circumference (c) to diameter (d). π = <span class='frac'><span class='num'>c</span><span class='den'>d</span></span>. This contradicts that π is irrational. Resolve this.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          π = <span class='frac'><span class='num'>c</span><span class='den'>d</span></span><br/>
          Measured values of c and d are only approximate.<br/>
          Exact c and d cannot both be rational.<br/>
          <span class='frac'><span class='num'>c</span><span class='den'>d</span></span> is not a ratio of two integers.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">No contradiction. π is irrational.</span></div>
        </div>

        <div class="question">Q4. Represent √9.3 on the number line.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          1. Draw AB = 9.3 units and BC = 1 unit on a line.<br/>
          AC = 9.3 + 1 = 10.3<br/>
          2. Mark O, the midpoint of AC. Draw a semicircle with centre O and radius OA.<br/>
          OA = OD = <span class='frac'><span class='num'>10.3</span><span class='den'>2</span></span> = 5.15<br/>
          OB = AB − OA = 9.3 − 5.15 = 4.15<br/>
          3. Draw BD ⊥ AC at B, meeting the semicircle at D.<br/>
          In right △OBD, by Pythagoras theorem:<br/>
          BD² = OD² − OB²<br/>
          = (5.15)² − (4.15)²<br/>
          Using a² − b² = (a − b)(a + b):<br/>
          = (5.15 − 4.15)(5.15 + 4.15)<br/>
          = 1 × 9.3<br/>
          = 9.3<br/>
          BD = √9.3<br/>
          4. With centre B and radius BD, draw an arc cutting the number line at P.<br/>
          BP = BD = √9.3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">P represents √9.3 on the number line.</span></div><br/>
          <div class="svg-container">
            <svg width="280" height="150" style="background: #1E1E2E; border-radius: 12px; padding: 10px;">
              <line x1="20" y1="90" x2="260" y2="90" stroke="white" stroke-width="2" />
              <circle cx="120" cy="90" r="100" fill="none" stroke="white" stroke-dasharray="3" clip-path="inset(0px 0px 50px 0px)" />
              <line x1="20" y1="85" x2="20" y2="95" stroke="white" />
              <text x="15" y="120" fill="white" font-size="13">A</text>
              <line x1="220" y1="90" x2="220" y2="30" stroke="#FFB74D" stroke-width="3" />
              <text x="215" y="120" fill="white" font-size="13">B</text>
              <text x="225" y="55" fill="#FFB74D" font-size="14" font-weight="bold">√9.3 (D)</text>
              <line x1="240" y1="85" x2="240" y2="95" stroke="white" />
              <text x="235" y="120" fill="white" font-size="13">C</text>
            </svg>
          </div>
        </div>

        <div class="question">Q5. Rationalise the denominators of the following:</div>
        <div class="subpart">(i) <span class='frac'><span class='num'>1</span><span class='den'>√7</span></span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by √7:<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>√7</span></span> = <span class='frac'><span class='num'>1 × √7</span><span class='den'>√7 × √7</span></span><br/>
          = <span class='frac'><span class='num'>√7</span><span class='den'>7</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>√7</span><span class='den'>7</span></span></span></div>
        </div>

        <div class="subpart">(ii) <span class='frac'><span class='num'>1</span><span class='den'>√7 - √6</span></span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by (√7 + √6):<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>√7 − √6</span></span> = <span class='frac'><span class='num'>√7 + √6</span><span class='den'>(√7 − √6)(√7 + √6)</span></span><br/>
          = <span class='frac'><span class='num'>√7 + √6</span><span class='den'>(√7)² − (√6)²</span></span><br/>
          = <span class='frac'><span class='num'>√7 + √6</span><span class='den'>7 − 6</span></span><br/>
          = √7 + √6<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">√7 + √6</span></div>
        </div>

        <div class="subpart">(iii) <span class='frac'><span class='num'>1</span><span class='den'>√5 + √2</span></span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by (√5 − √2):<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>√5 + √2</span></span> = <span class='frac'><span class='num'>√5 − √2</span><span class='den'>(√5 + √2)(√5 − √2)</span></span><br/>
          = <span class='frac'><span class='num'>√5 − √2</span><span class='den'>(√5)² − (√2)²</span></span><br/>
          = <span class='frac'><span class='num'>√5 − √2</span><span class='den'>5 − 2</span></span><br/>
          = <span class='frac'><span class='num'>√5 − √2</span><span class='den'>3</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>√5 − √2</span><span class='den'>3</span></span></span></div>
        </div>

        <div class="subpart">(iv) <span class='frac'><span class='num'>1</span><span class='den'>√7 - 2</span></span></div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Multiplying numerator and denominator by (√7 + 2):<br/>
          <span class='frac'><span class='num'>1</span><span class='den'>√7 − 2</span></span> = <span class='frac'><span class='num'>√7 + 2</span><span class='den'>(√7 − 2)(√7 + 2)</span></span><br/>
          = <span class='frac'><span class='num'>√7 + 2</span><span class='den'>(√7)² − 2²</span></span><br/>
          = <span class='frac'><span class='num'>√7 + 2</span><span class='den'>7 − 4</span></span><br/>
          = <span class='frac'><span class='num'>√7 + 2</span><span class='den'>3</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>√7 + 2</span><span class='den'>3</span></span></span></div>
        </div>
      </div>
`,
    "ex1-6": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFB74D; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFB74D; padding-left: 15px; margin-top: 15px; background: rgba(255, 183, 77, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFB74D !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFB74D !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 183, 77, 0.05) !important; border-left: 4px solid #FFB74D !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFB74D !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFB74D !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFB74D !important; font-weight: 700; }
        strong { color: #FFB74D !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFB74D; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 183, 77, 0.05); color: #FFB74D; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Find:</div>
        <div class="solution">
          (i) 64<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span class='den'>2</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          64<sup>½</sup> = (8<sup>2</sup>)<sup>½</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 8<sup>2 × ½</sup><br/>
          = 8<sup>1</sup><br/>
          = 8<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">8</span></div><br/>
          <br/>
          (ii) 32<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span class='den'>5</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          32<sup>⅕</sup> = (2<sup>5</sup>)<sup>⅕</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 2<sup>5 × ⅕</sup><br/>
          = 2<sup>1</sup><br/>
          = 2<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">2</span></div><br/>
          <br/>
          (iii) 125<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span class='den'>3</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          125<sup>⅓</sup> = (5<sup>3</sup>)<sup>⅓</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 5<sup>3 × ⅓</sup><br/>
          = 5<sup>1</sup><br/>
          = 5<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">5</span></div>
        </div>

        <div class="question">Q2. Find:</div>
        <div class="solution">
          (i) 9<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>3</span><span class='den'>2</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          9<sup>3⁄2</sup> = (3<sup>2</sup>)<sup>3⁄2</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 3<sup>2 × 3⁄2</sup><br/>
          = 3<sup>3</sup><br/>
          = 27<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">27</span></div><br/>
          <br/>
          (ii) 32<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>2</span><span class='den'>5</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          32<sup>⅖</sup> = (2<sup>5</sup>)<sup>⅖</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 2<sup>5 × ⅖</sup><br/>
          = 2<sup>2</sup><br/>
          = 4<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">4</span></div><br/>
          <br/>
          (iii) 16<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>3</span><span>4</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          16<sup>¾</sup> = (2<sup>4</sup>)<sup>¾</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 2<sup>4 × ¾</sup><br/>
          = 2<sup>3</sup><br/>
          = 8<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">8</span></div><br/>
          <br/>
          (iv) 125<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>-1</span><span>3</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          125<sup>−⅓</sup> = (5<sup>3</sup>)<sup>−⅓</sup><br/>
          Using (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:<br/>
          = 5<sup>3 × (−⅓)</sup><br/>
          = 5<sup>−1</sup><br/>
          Using a<sup>−n</sup> = <span class='frac'><span class='num'>1</span><span class='den'>a<sup>n</sup></span></span>:<br/>
          = <span class='frac'><span class='num'>1</span><span class='den'>5</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val"><span class='frac'><span class='num'>1</span><span class='den'>5</span></span></span></div>
        </div>

        <div class="question">Q3. Simplify:</div>
        <div class="solution">
          (i) 2<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>2</span><span>3</span></span></sup> × 2<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>5</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          Using a<sup>m</sup> × a<sup>n</sup> = a<sup>m + n</sup>:<br/>
          2<sup>⅔</sup> × 2<sup>⅕</sup> = 2<sup>⅔ + ⅕</sup><br/>
          = 2<sup>10⁄15 + 3⁄15</sup><br/>
          = 2<sup>13⁄15</sup><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">2<sup>13⁄15</sup></span></div><br/>
          <br/>
          (ii) (<span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>3<sup>3</sup></span></span>)<sup>7</sup><br/>
          <strong>Solution:</strong><br/>
          Using (<span class='frac'><span class='num'>a</span><span class='den'>b</span></span>)<sup>n</sup> = <span class='frac'><span class='num'>a<sup>n</sup></span><span class='den'>b<sup>n</sup></span></span>:<br/>
          (<span class='frac'><span class='num'>1</span><span class='den'>3<sup>3</sup></span></span>)<sup>7</sup> = <span class='frac'><span class='num'>1<sup>7</sup></span><span class='den'>(3<sup>3</sup>)<sup>7</sup></span></span><br/>
          = <span class='frac'><span class='num'>1</span><span class='den'>3<sup>21</sup></span></span><br/>
          = 3<sup>−21</sup><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">3<sup>−21</sup></span></div><br/>
          <br/>
          (iii) <span class='frac' style="font-size: 1.1em; vertical-align: middle;">
            <span class='num' style="padding: 10px 0; white-space: nowrap;">11<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>2</span></span></sup></span>
            <span style="padding: 10px 0; white-space: nowrap;">11<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>4</span></span></sup></span>
          </span><br/>
          <strong>Solution:</strong><br/>
          Using <span class='frac'><span class='num'>a<sup>m</sup></span><span class='den'>a<sup>n</sup></span></span> = a<sup>m − n</sup>:<br/>
          <span class='frac'><span class='num'>11<sup>½</sup></span><span class='den'>11<sup>¼</sup></span></span> = 11<sup>½ − ¼</sup><br/>
          = 11<sup>2⁄4 − ¼</sup><br/>
          = 11<sup>¼</sup><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">11<sup>¼</sup></span></div><br/>
          <br/>
          (iv) 7<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>2</span></span></sup> × 8<sup><span class='frac' style="padding:0; margin:0;"><span class='num'>1</span><span>2</span></span></sup><br/>
          <strong>Solution:</strong><br/>
          Using a<sup>m</sup> × b<sup>m</sup> = (ab)<sup>m</sup>:<br/>
          7<sup>½</sup> × 8<sup>½</sup> = (7 × 8)<sup>½</sup><br/>
          = 56<sup>½</sup><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">56<sup>½</sup></span></div>
        </div>
      </div>
`,
  },
};
