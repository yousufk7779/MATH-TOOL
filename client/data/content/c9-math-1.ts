import { ChapterContent } from "../types";

export const c9Math1: ChapterContent = {
  id: "c9-math-1",
  number: 1,
  title: "Number Systems",
  introduction: "In your earlier classes, you have learnt about the number line and how to represent various types of numbers on it. In this chapter, we will explore rational numbers, irrational numbers, and their decimal expansions.",
  definitions: [
    { term: "Rational Number", description: "A number which can be written in the form p/q, where p and q are integers and q ≠ 0." },
    { term: "Irrational Number", description: "A number which cannot be written in the form p/q, where p and q are integers and q ≠ 0." }
  ],
  keyPoints: [
    "Every rational number is a real number.",
    "Every irrational number is a real number.",
    "The sum or difference of a rational number and an irrational number is irrational.",
    "The product or quotient of a non-zero rational number with an irrational number is irrational."
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] },
    { id: "ex1-2", name: "Exercise 1.2", questions: [] },
    { id: "ex1-3", name: "Exercise 1.3", questions: [] },
    { id: "ex1-4", name: "Exercise 1.4", questions: [] },
    { id: "ex1-5", name: "Exercise 1.5", questions: [] },
    { id: "ex1-6", name: "Exercise 1.6", questions: [] }
  ],
  examples: [],
  mcqs: [
    {
      id: "c9-m1-q1",
      question: "Which of the following is an irrational number?",
      options: ["√4", "√9", "√7", "0.25"],
      correctAnswer: "√7"
    },
    {
      id: "c9-m1-q2",
      question: "The decimal expansion of a rational number is either ________ or ________.",
      options: ["terminating, non-repeating", "terminating, repeating", "non-terminating, non-repeating", "None of these"],
      correctAnswer: "terminating, repeating"
    },
    {
      id: "c9-m1-q3",
      question: "Every whole number is a natural number.",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      id: "c9-m1-q4",
      question: "The product of any two irrational numbers is:",
      options: ["Always irrational", "Always rational", "Always an integer", "Sometimes rational, sometimes irrational"],
      correctAnswer: "Sometimes rational, sometimes irrational"
    },
    {
      id: "c9-m1-q5",
      question: "The value of 125^(1/3) is:",
      options: ["5", "25", "1", "15"],
      correctAnswer: "5"
    },
    {
        id: "c9-m1-q6",
        question: "Is zero a rational number?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        id: "c9-m1-q7",
        question: "The decimal expansion of √2 is:",
        options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None of these"],
        correctAnswer: "Non-terminating non-repeating"
    },
    {
        id: "c9-m1-q8",
        question: "Between two rational numbers, there are ________ rational numbers.",
        options: ["One", "Finite", "Infinitely many", "Zero"],
        correctAnswer: "Infinitely many"
    },
    {
        id: "c9-m1-q9",
        question: "π (Pi) is an ________ number.",
        options: ["Rational", "Irrational", "Integer", "Whole"],
        correctAnswer: "Irrational"
    },
    {
        id: "c9-m1-q10",
        question: "The rationalised form of 1/√2 is:",
        options: ["√2", "√2/2", "2", "1/2"],
        correctAnswer: "√2/2"
    }
  ],
  summary: [
    "A number is rational if its decimal expansion is terminating or non-terminating recurring.",
    "A number is irrational if its decimal expansion is non-terminating non-recurring.",
    "All rational and irrational numbers together make up the collection of real numbers."
  ],
  isHtmlView: true,
  htmlOverview: `<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Noto Sans', sans-serif !important; }

    .main-wrapper {
        padding: 15px;
        width: 100%;
        color: #fff !important;
        font-size: 18px !important;
        background: transparent !important;
    }

    .content-box { 
        background: rgba(255,255,255,0.03) !important; 
        border: 1px solid rgba(255, 183, 77, 0.2) !important; 
        border-radius: 12px; 
        padding: 20px; 
        margin-bottom: 20px; 
    }

    .section-title { 
        color: #FF9800 !important; 
        font-weight: 600; 
        font-size: 1.3em; 
        margin-bottom: 15px; 
        border-bottom: 1px solid rgba(255,255,255,0.1); 
        padding-bottom: 8px; 
        font-family: 'Nunito', sans-serif !important;
    }

    .sub-header { 
        color: #FF9800 !important; 
        font-weight: 600; 
        margin-top: 15px; 
        margin-bottom: 8px; 
        font-size: 1.1em; 
    }

    .formula-box { 
        background: rgba(255, 152, 0, 0.1) !important; 
        border-left: 4px solid #FF9800 !important; 
        padding: 15px; 
        margin: 15px 0; 
        border-radius: 0 8px 8px 0;
        font-family: 'Nunito', sans-serif !important; 
    }

    .step { 
        margin-bottom: 12px; 
        font-size: 1em; 
        color: #e0e0e0 !important; 
        line-height: 1.6; 
        text-align: justify;
    }

    strong { 
        color: #FF9800 !important; 
        font-weight: 600;
    }
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
        <div class="step">In our daily lives, we use various types of numbers. A <strong>Number System</strong> is a consistent way of representing these values. In this chapter, we explore the collection of <strong>Real Numbers</strong>, which includes everything from simple counting numbers to complex square roots.</div>
    </div>

    <div class="content-box">
        <div class="section-title">2. Classification of Numbers</div>
        <div class="step"><strong>Natural Numbers (N):</strong> The counting numbers starting from 1, 2, 3 and so on. They are represented by the set \\(N = \\{1, 2, 3, \\dots\\}\\).</div>
        
        <div class="step"><strong>Whole Numbers (W):</strong> The collection of natural numbers along with zero. They are represented by \\(W = \\{0, 1, 2, 3, \\dots\\}\\).</div>
        
        <div class="step"><strong>Integers (Z):</strong> The collection of all whole numbers and the negatives of natural numbers. It is denoted by \\(Z = \\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}\\).</div>
        
        <div class="step"><strong>Rational Numbers (Q):</strong> A number is called rational if it can be written in the form \\(\\frac{p}{q}\\), where \\(p\\) and \\(q\\) are integers and \\(q \\neq 0\\).</div>
        
        <div class="step"><strong>Irrational Numbers:</strong> A number is called irrational if it <strong>cannot</strong> be written in the form \\(\\frac{p}{q}\\). Examples include \\(\\sqrt{2}, \\sqrt{3}, \\sqrt{5}\\), and \\(\\pi\\).</div>
        
        <div class="step"><strong>Real Numbers (R):</strong> The collection of all rational and irrational numbers together forms the set of real numbers. Every real number is represented by a unique point on the number line.</div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Decimal Expansions</div>
        <div class="sub-header">For Rational Numbers:</div>
        <div class="step">The decimal expansion is either <strong>Terminating</strong> (e.g., \\(0.5, 0.125\\)) or <strong>Non-terminating Recurring</strong> (e.g., \\(0.333\\dots, 0.142857\\dots\\)).</div>
        
        <div class="sub-header">For Irrational Numbers:</div>
        <div class="step">The decimal expansion is <strong>Non-terminating Non-recurring</strong> (e.g., \\(\\pi \\approx 3.14159\\dots\\)).</div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Key Operations & Formulas</div>
        <div class="sub-header">Rationalisation</div>
        <div class="step">To rationalize the denominator of \\(\\frac{1}{\\sqrt{a}+b}\\), we multiply and divide it by its conjugate \\(\\sqrt{a}-b\\).</div>
        
        <div class="sub-header">Laws of Exponents</div>
        <div class="formula-box">
            1. \\(a^p \\cdot a^q = a^{p+q}\\)<br>
            2. \\((a^p)^q = a^{pq}\\)<br>
            3. \\(\\frac{a^p}{a^q} = a^{p-q}\\)<br>
            4. \\(a^p \\cdot b^p = (ab)^p\\)
        </div>
    </div>

</div>`,
  htmlExercises: {
    "ex1-1": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #FF9800; margin-top: 15px; font-weight: 500; }
        .fraction { display: inline-block; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 0 3px; line-height: 1; padding: 6px 0; }
        .fraction > span { display: block; padding: 0 2px; }
        .fraction .numerator { border-bottom: 1px solid white; }
      </style>
      <div class="container">
        <div class="question">Q1. Is zero a rational number? Can you write it in the form <span class="fraction"><span class="numerator">p</span><span>q</span></span>, where p and q are integers and q ≠ 0?</div>
        <div class="solution">
          Yes, zero is a rational number.<br/>
          We can write it as <span class="fraction"><span class="numerator">0</span><span>1</span></span>, <span class="fraction"><span class="numerator">0</span><span>2</span></span>, <span class="fraction"><span class="numerator">0</span><span>3</span></span> etc.<br/>
          Here, p = 0 and q is any non-zero integer.
        </div>

        <div class="question">Q2. Find six rational numbers between 3 and 4.</div>
        <div class="solution">
          To find 6 numbers, multiply and divide by (6+1) = 7.<br/>
          3 = <span class="fraction"><span class="numerator">3 × 7</span><span>7</span></span> = <span class="fraction"><span class="numerator">21</span><span>7</span></span><br/>
          4 = <span class="fraction"><span class="numerator">4 × 7</span><span>7</span></span> = <span class="fraction"><span class="numerator">28</span><span>7</span></span><br/>
          Six rational numbers are: <span class="fraction"><span class="numerator">22</span><span>7</span></span>, <span class="fraction"><span class="numerator">23</span><span>7</span></span>, <span class="fraction"><span class="numerator">24</span><span>7</span></span>, <span class="fraction"><span class="numerator">25</span><span>7</span></span>, <span class="fraction"><span class="numerator">26</span><span>7</span></span>, <span class="fraction"><span class="numerator">27</span><span>7</span></span>.
        </div>

        <div class="question">Q3. Find five rational numbers between <span class="fraction"><span class="numerator">3</span><span>5</span></span> and <span class="fraction"><span class="numerator">4</span><span>5</span></span>.</div>
        <div class="solution">
          To find 5 numbers, multiply and divide by (5+1) = 6.<br/>
          <span class="fraction"><span class="numerator">3</span><span>5</span></span> = <span class="fraction"><span class="numerator">3 × 6</span><span>5 × 6</span></span> = <span class="fraction"><span class="numerator">18</span><span>30</span></span><br/>
          <span class="fraction"><span class="numerator">4</span><span>5</span></span> = <span class="fraction"><span class="numerator">4 × 6</span><span>5 × 6</span></span> = <span class="fraction"><span class="numerator">24</span><span>30</span></span><br/>
          Five rational numbers are: <span class="fraction"><span class="numerator">19</span><span>30</span></span>, <span class="fraction"><span class="numerator">20</span><span>30</span></span>, <span class="fraction"><span class="numerator">21</span><span>30</span></span>, <span class="fraction"><span class="numerator">22</span><span>30</span></span>, <span class="fraction"><span class="numerator">23</span><span>30</span></span>.
        </div>

        <div class="question">Q4. State whether the following statements are true or false. Give reasons for your answers.</div>
        
        <div class="subpart">(i) Every natural number is a whole number.</div>
        <div class="solution">True, because whole numbers (0, 1, 2, ...) include all natural numbers (1, 2, 3, ...).</div>

        <div class="subpart">(ii) Every integer is a whole number.</div>
        <div class="solution">False, because integers like -1, -2 are not whole numbers.</div>

        <div class="subpart">(iii) Every rational number is a whole number.</div>
        <div class="solution">False, because rational numbers like <span class="fraction"><span class="numerator">1</span><span>2</span></span> are not whole numbers.</div>
      </div>
    `,
    "ex1-2": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #FF9800; margin-top: 15px; font-weight: 500; }
        .svg-container { display: flex; justify-content: center; margin: 25px 0; width: 100%; }
      </style>
      <div class="container">
        <div class="question">Q1. State whether the following statements are true or false. Justify your answers.</div>
        
        <div class="subpart">(i) Every irrational number is a real number.</div>
        <div class="solution">True, as real numbers consist of both rational and irrational numbers.</div>

        <div class="subpart">(ii) Every point on the number line is of the form √m, where m is a natural number.</div>
        <div class="solution">False, because negative numbers cannot be expressed as the square root of any natural number.</div>

        <div class="subpart">(iii) Every real number is an irrational number.</div>
        <div class="solution">False, because 2 is a real number but it is rational.</div>

        <div class="question">Q2. Are the square roots of all positive integers irrational? If not, give an example.</div>
        <div class="solution">
          No, square roots of all positive integers are not irrational.<br/>
          Example: √4 = 2, which is a rational number.
        </div>

        <div class="question">Q3. Show how √5 can be represented on the number line.</div>
        <div class="solution">
          1. Take OA = 2 units on number line.<br/>
          2. Draw AB ⊥ OA such that AB = 1 unit.<br/>
          3. Join OB. OB = √(2² + 1²) = √5.<br/>
          4. Draw arc with center O and radius OB to get point P.<br/>
          <div class="svg-container">
            <svg width="280" height="150" style="background: #1E1E2E; border-radius: 12px; padding: 10px;">
              <line x1="20" y1="90" x2="260" y2="90" stroke="white" stroke-width="2" />
              <text x="40" y="125" fill="white" font-size="13">0 (O)</text>
              <text x="140" y="125" fill="white" font-size="13">2 (A)</text>
              <line x1="50" y1="80" x2="50" y2="100" stroke="white" />
              <line x1="150" y1="80" x2="150" y2="100" stroke="white" />
              <line x1="150" y1="90" x2="150" y2="30" stroke="#FFB74D" stroke-width="3" />
              <text x="155" y="55" fill="#FFB74D" font-size="13">1 (B)</text>
              <line x1="50" y1="90" x2="150" y2="30" stroke="#FFB74D" stroke-width="2" stroke-dasharray="5" />
              <text x="85" y="55" fill="#FFB74D" font-size="14" font-weight="bold">√5</text>
              <path d="M 150 30 A 116 116 0 0 1 165 90" stroke="#FFB74D" fill="none" stroke-dasharray="5" />
              <text x="168" y="125" fill="#FFB74D" font-size="15" font-weight="bold">P</text>
            </svg>
          </div>
        </div>
      </div>
    `,
    "ex1-3": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #FF9800; margin-top: 15px; font-weight: 500; }
        .fraction { display: inline-block; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 0 3px; line-height: 1; padding: 6px 0; }
        .fraction > span { display: block; padding: 0 2px; }
        .fraction .numerator { border-bottom: 1px solid white; }
        .overline { text-decoration: overline; }
      </style>
      <div class="container">
        <div class="question">Q1. Write the following in decimal form and say what kind of decimal expansion each has:</div>
        <div class="solution">
          (i) <span class="fraction"><span class="numerator">36</span><span>100</span></span> = 0.36 (Terminating)<br/>
          (ii) <span class="fraction"><span class="numerator">1</span><span>11</span></span> = 0.<span class="overline">09</span> (Non-terminating repeating)<br/>
          (iii) 4 <span class="fraction"><span class="numerator">1</span><span>8</span></span> = 4.125 (Terminating)<br/>
          (iv) <span class="fraction"><span class="numerator">3</span><span>13</span></span> = 0.<span class="overline">230769</span> (Non-terminating repeating)<br/>
          (v) <span class="fraction"><span class="numerator">2</span><span>11</span></span> = 0.<span class="overline">18</span> (Non-terminating repeating)<br/>
          (vi) <span class="fraction"><span class="numerator">329</span><span>400</span></span> = 0.8225 (Terminating)
        </div>

        <div class="question">Q2. You know that <span class="fraction"><span class="numerator">1</span><span>7</span></span> = 0.<span class="overline">142857</span>. Can you predict the decimal expansions of <span class="fraction"><span class="numerator">2</span><span>7</span></span>, <span class="fraction"><span class="numerator">3</span><span>7</span></span>, <span class="fraction"><span class="numerator">4</span><span>7</span></span>, <span class="fraction"><span class="numerator">5</span><span>7</span></span>, <span class="fraction"><span class="numerator">6</span><span>7</span></span> without doing long division?</div>
        <div class="solution">
          Yes, by multiplying the decimal of <span class="fraction"><span class="numerator">1</span><span>7</span></span>.<br/>
          <span class="fraction"><span class="numerator">2</span><span>7</span></span> = 2 × 0.<span class="overline">142857</span> = 0.<span class="overline">285714</span><br/>
          <span class="fraction"><span class="numerator">3</span><span>7</span></span> = 3 × 0.<span class="overline">142857</span> = 0.<span class="overline">428571</span><br/>
          <span class="fraction"><span class="numerator">4</span><span>7</span></span> = 4 × 0.<span class="overline">142857</span> = 0.<span class="overline">571428</span><br/>
          <span class="fraction"><span class="numerator">5</span><span>7</span></span> = 5 × 0.<span class="overline">142857</span> = 0.<span class="overline">714285</span><br/>
          <span class="fraction"><span class="numerator">6</span><span>7</span></span> = 6 × 0.<span class="overline">142857</span> = 0.<span class="overline">857142</span>
        </div>

        <div class="question">Q3. Express the following in the form <span class="fraction"><span class="numerator">p</span><span>q</span></span>, where p and q are integers and q ≠ 0:</div>
        <div class="subpart">(i) 0.<span class="overline">6</span></div>
        <div class="solution">x = 0.666... ⇒ 10x = 6.666... ⇒ 9x = 6 ⇒ x = <span class="fraction"><span class="numerator">6</span><span>9</span></span> = <span class="fraction"><span class="numerator">2</span><span>3</span></span></div>
        <div class="subpart">(ii) 0.4<span class="overline">7</span></div>
        <div class="solution">x = 0.4777... ⇒ 10x = 4.777... ⇒ 100x = 47.777... ⇒ 90x = 43 ⇒ x = <span class="fraction"><span class="numerator">43</span><span>90</span></span></div>
        <div class="subpart">(iii) 0.<span class="overline">001</span></div>
        <div class="solution">x = 0.001001... ⇒ 1000x = 1.001... ⇒ 999x = 1 ⇒ x = <span class="fraction"><span class="numerator">1</span><span>999</span></span></div>

        <div class="question">Q4. Express 0.99999... in the form <span class="fraction"><span class="numerator">p</span><span>q</span></span>. Are you surprised by your answer?</div>
        <div class="solution">Let x = 0.999... ⇒ 10x = 9.999... ⇒ 9x = 9 ⇒ x = 1. The answer 1 makes sense because 0.999... is infinitely close to 1.</div>

        <div class="question">Q5. What can the maximum number of digits be in the repeating block of digits in the decimal expansion of <span class="fraction"><span class="numerator">1</span><span>17</span></span>?</div>
        <div class="solution">The maximum number of digits is 17 - 1 = 16. Performing the division, we get 0.<span class="overline">0588235294117647</span>.</div>

        <div class="question">Q6. Look at several examples of rational numbers in the form <span class="fraction"><span class="numerator">p</span><span>q</span></span> (q ≠ 0), where q must satisfy a property for terminating expansion.</div>
        <div class="solution">The prime factorisation of q must have only powers of 2 or 5 or both (i.e., q = 2<sup>n</sup>5<sup>m</sup>).</div>

        <div class="question">Q7. Write three numbers whose decimal expansions are non-terminating non-recurring.</div>
        <div class="solution">
          (i) 0.01001000100001...<br/>
          (ii) 0.202002000200002...<br/>
          (iii) 0.12112111211112...
        </div>

        <div class="question">Q8. Find three different irrational numbers between the rational numbers <span class="fraction"><span class="numerator">5</span><span>7</span></span> and <span class="fraction"><span class="numerator">9</span><span>11</span></span>.</div>
        <div class="solution">
          <span class="fraction"><span class="numerator">5</span><span>7</span></span> = 0.714285... and <span class="fraction"><span class="numerator">9</span><span>11</span></span> = 0.818181...<br/>
          Three irrational numbers are:<br/>
          (i) 0.730730073000...<br/>
          (ii) 0.750750075000...<br/>
          (iii) 0.790790079000...
        </div>

        <div class="question">Q9. Classify the following numbers as rational or irrational:</div>
        <div class="solution">
          (i) √23 : Irrational<br/>
          (ii) √225 = 15 : Rational<br/>
          (iii) 0.3796 : Rational<br/>
          (iv) 7.478478... : Rational<br/>
          (v) 1.101001000100001... : Irrational
        </div>
      </div>
    `,
    "ex1-4": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .overline { text-decoration: overline; }
      </style>
      <div class="container">
        <div class="question">Q1. Visualise 3.765 on the number line, using successive magnification.</div>
        <div class="solution">
          1. 3.765 lies between 3 and 4.<br/>
          2. Divide [3, 4] into 10 parts. 3.765 lies between 3.7 and 3.8.<br/>
          3. Divide [3.7, 3.8] into 10 parts. 3.765 lies between 3.76 and 3.77.<br/>
          4. Divide [3.76, 3.77] into 10 parts. Mark 3.765.
        </div>

        <div class="question">Q2. Visualise 4.<span class="overline">26</span> on the number line, up to 4 decimal places.</div>
        <div class="solution">
          1. 4.2626 lies between 4 and 5.<br/>
          2. Divide [4, 5] into 10 parts. 4.2626 lies between 4.2 and 4.3.<br/>
          3. Divide [4.2, 4.3] into 10 parts. 4.2626 lies between 4.26 and 4.27.<br/>
          4. Divide [4.26, 4.27] into 10 parts. 4.2626 lies between 4.262 and 4.263.<br/>
          5. Divide [4.262, 4.263] into 10 parts. Mark 4.2626.
        </div>
      </div>
    `,
    "ex1-5": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #FF9800; margin-top: 15px; font-weight: 500; }
        .fraction { display: inline-block; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 0 3px; line-height: 1; padding: 6px 0; }
        .fraction > span { display: block; padding: 0 2px; }
        .fraction .numerator { border-bottom: 1px solid white; }
        .svg-container { display: flex; justify: center; margin: 25px 0; width: 100%; }
      </style>
      <div class="container">
        <div class="question">Q1. Classify the following numbers as rational or irrational:</div>
        <div class="solution">
          (i) 2 - √5 : Irrational<br/>
          (ii) (3 + √23) - √23 = 3 : Rational<br/>
          (iii) <span class="fraction"><span class="numerator">2√7</span><span>7√7</span></span> = <span class="fraction"><span class="numerator">2</span><span>7</span></span> : Rational<br/>
          (iv) <span class="fraction"><span class="numerator">1</span><span>√2</span></span> : Irrational<br/>
          (v) 2π : Irrational
        </div>

        <div class="question">Q2. Simplify each of the following expressions:</div>
        <div class="subpart">(i) (3 + √3)(2 + √2)</div>
        <div class="solution">3(2 + √2) + √3(2 + √2) = 6 + 3√2 + 2√3 + √6</div>

        <div class="subpart">(ii) (3 + √3)(3 - √3)</div>
        <div class="solution">3<sup>2</sup> - (√3)<sup>2</sup> = 9 - 3 = 6</div>

        <div class="subpart">(iii) (√5 + √2)<sup>2</sup></div>
        <div class="solution">(√5)<sup>2</sup> + 2(√5)(√2) + (√2)<sup>2</sup> = 5 + 2√10 + 2 = 7 + 2√10</div>

        <div class="subpart">(iv) (√5 - √2)(√5 + √2)</div>
        <div class="solution">(√5)<sup>2</sup> - (√2)<sup>2</sup> = 5 - 2 = 3</div>

        <div class="question">Q3. Recall, π is defined as ratio of circumference (c) to diameter (d). π = <span class="fraction"><span class="numerator">c</span><span>d</span></span>. This contradicts that π is irrational. Resolve this.</div>
        <div class="solution">There is no contradiction. When we measure length with a scale, we only get an approximate rational value. Thus, either c or d can be irrational, making π irrational.</div>

        <div class="question">Q4. Represent √9.3 on the number line.</div>
        <div class="solution">
          1. Draw AB = 9.3 units. Extend BC = 1 unit.<br/>
          2. Find midpoint O of AC. Draw semicircle with center O and radius OA.<br/>
          3. Draw BD ⊥ AC at B. BD = √9.3.<br/>
          4. Draw arc with center B and radius BD to get point P on number line.<br/>
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
        <div class="subpart">(i) <span class="fraction"><span class="numerator">1</span><span>√7</span></span></div>
        <div class="solution"><span class="fraction"><span class="numerator">1 × √7</span><span>√7 × √7</span></span> = <span class="fraction"><span class="numerator">√7</span><span>7</span></span></div>

        <div class="subpart">(ii) <span class="fraction"><span class="numerator">1</span><span>√7 - √6</span></span></div>
        <div class="solution"><span class="fraction"><span class="numerator">√7 + √6</span><span>(√7 - √6)(√7 + √6)</span></span> = <span class="fraction"><span class="numerator">√7 + √6</span><span>7 - 6</span></span> = √7 + √6</div>

        <div class="subpart">(iii) <span class="fraction"><span class="numerator">1</span><span>√5 + √2</span></span></div>
        <div class="solution"><span class="fraction"><span class="numerator">√5 - √2</span><span>5 - 2</span></span> = <span class="fraction"><span class="numerator">√5 - √2</span><span>3</span></span></div>

        <div class="subpart">(iv) <span class="fraction"><span class="numerator">1</span><span>√7 - 2</span></span></div>
        <div class="solution"><span class="fraction"><span class="numerator">√7 + 2</span><span>7 - 4</span></span> = <span class="fraction"><span class="numerator">√7 + 2</span><span>3</span></span></div>
      </div>
    `,
    "ex1-6": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #FFB74D; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #FF9800; margin-top: 15px; font-weight: 500; }
        .fraction { display: inline-block; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 0 3px; line-height: 1; padding: 6px 0; }
        .fraction > span { display: block; padding: 0 2px; }
        .fraction .numerator { border-bottom: 1px solid white; }
        sup { font-size: 0.6em; vertical-align: 0.8em; margin-left: 2px; display: inline-block; }
      </style>
      <div class="container">
        <div class="question">Q1. Find:</div>
        <div class="solution">
          (i) 64<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup> = (8<sup>2</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup> = 8<br/>
          (ii) 32<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>5</span></span></sup> = (2<sup>5</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>5</span></span></sup> = 2<br/>
          (iii) 125<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>3</span></span></sup> = (5<sup>3</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>3</span></span></sup> = 5
        </div>

        <div class="question">Q2. Find:</div>
        <div class="solution">
          (i) 9<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">3</span><span>2</span></span></sup> = (3<sup>2</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">3</span><span>2</span></span></sup> = 3<sup>3</sup> = 27<br/>
          (ii) 32<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">2</span><span>5</span></span></sup> = (2<sup>5</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">2</span><span>5</span></span></sup> = 2<sup>2</sup> = 4<br/>
          (iii) 16<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">3</span><span>4</span></span></sup> = (2<sup>4</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">3</span><span>4</span></span></sup> = 2<sup>3</sup> = 8<br/>
          (iv) 125<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">-1</span><span>3</span></span></sup> = (5<sup>3</sup>)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">-1</span><span>3</span></span></sup> = 5<sup>-1</sup> = <span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>5</span></span>
        </div>

        <div class="question">Q3. Simplify:</div>
        <div class="solution">
          (i) 2<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">2</span><span>3</span></span></sup> × 2<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>5</span></span></sup> = 2<sup>(<span class="fraction" style="padding:0; margin:0;"><span class="numerator">2</span><span>3</span></span> + <span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>5</span></span>)</sup> = 2<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">13</span><span>15</span></span></sup><br/>
          (ii) (<span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>3<sup>3</sup></span></span>)<sup>7</sup> = 1/3<sup>21</sup> = 3<sup>-21</sup><br/>
          (iii) <span class="fraction" style="font-size: 1.1em; vertical-align: middle;">
            <span class="numerator" style="padding: 10px 0; white-space: nowrap;">11<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup></span>
            <span style="padding: 10px 0; white-space: nowrap;">11<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>4</span></span></sup></span>
          </span> = 11<sup>(<span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span> - <span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>4</span></span>)</sup> = 11<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>4</span></span></sup><br/>
          (iv) 7<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup> × 8<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup> = (7 × 8)<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup> = 56<sup><span class="fraction" style="padding:0; margin:0;"><span class="numerator">1</span><span>2</span></span></sup>
        </div>
      </div>
    `
  }
};
