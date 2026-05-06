import { ChapterContent } from "../types";

export const c9Math3: ChapterContent = {
  id: "c9-math-3",
  number: 3,
  title: "Linear Equations in Two Variables",
  introduction: "In this chapter, we extend our knowledge of linear equations to two variables. We will learn how to write them in standard form, find their solutions, and represent them on a graph.",
  definitions: [
    { term: "Linear Equation", description: "An equation which can be put in the form ax + by + c = 0, where a, b and c are real numbers." },
    { term: "Solution", description: "A pair of values for x and y that satisfy the equation." },
    { term: "Graph", description: "The visual representation of a linear equation on a Cartesian plane." }
  ],
  keyPoints: [
    "A linear equation in two variables has infinitely many solutions.",
    "The graph of every linear equation in two variables is a straight line.",
    "x = 0 is the equation of the y-axis and y = 0 is the equation of the x-axis."
  ],
  formulas: [
    { name: "Standard Form", formula: "ax + by + c = 0" }
  ],
  crux: [
    "To find a solution, pick a value for x and calculate the corresponding value for y.",
    "Every point on the line is a solution of the equation."
  ],
  exercises: [
    { id: "ex3-1", name: "Exercise 3.1", questions: [] },
    { id: "ex3-2", name: "Exercise 3.2", questions: [] },
    { id: "ex3-3", name: "Exercise 3.3", questions: [] },
    { id: "ex3-4", name: "Exercise 3.4", questions: [] }
  ],
  examples: [],
  theorems: [],
  mcqs: [
    {
      id: "m1",
      question: "The standard form of a linear equation in two variables is:",
      options: ["ax + b = 0", "ax² + bx + c = 0", "ax + by + c = 0", "ax + b = y²"],
      correctAnswer: "C"
    },
    {
      id: "m2",
      question: "How many solutions does a linear equation in two variables have?",
      options: ["Unique solution", "Two solutions", "Infinitely many", "No solution"],
      correctAnswer: "C"
    },
    {
      id: "m3",
      question: "The graph of the equation x = 5 is a line parallel to:",
      options: ["x-axis", "y-axis", "Origin", "None of these"],
      correctAnswer: "B"
    },
    {
      id: "m4",
      question: "The point (0, 3) lies on which line?",
      options: ["x-axis", "y-axis", "Origin", "Quadrant II"],
      correctAnswer: "B"
    },
    {
      id: "m5",
      question: "If (2, 0) is a solution of 2x + 3y = k, then k is:",
      options: ["2", "4", "0", "5"],
      correctAnswer: "B"
    },
    {
      id: "m6",
      question: "The equation y = mx represents a line passing through:",
      options: ["x-axis", "y-axis", "Origin", "None of these"],
      correctAnswer: "C"
    },
    {
      id: "m7",
      question: "Any point on the x-axis is of the form:",
      options: ["(x, y)", "(0, y)", "(x, 0)", "(x, x)"],
      correctAnswer: "C"
    },
    {
      id: "m8",
      question: "Any point on the line y = x is of the form:",
      options: ["(a, a)", "(0, a)", "(a, 0)", "(a, -a)"],
      correctAnswer: "A"
    },
    {
      id: "m9",
      question: "Equation of the x-axis is:",
      options: ["x = 0", "y = 0", "x + y = 0", "x = y"],
      correctAnswer: "B"
    },
    {
      id: "m10",
      question: "The graph of a linear equation is always a:",
      options: ["Circle", "Curve", "Straight line", "Point"],
      correctAnswer: "C"
    }
  ],
  summary: [
    "A linear equation in two variables is written as ax + by + c = 0.",
    "It always has infinitely many solutions and its graph is a straight line.",
    "The coordinates of every point on the line satisfy the equation."
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
        border: 1px solid rgba(171, 71, 188, 0.2) !important; 
        border-radius: 12px; 
        padding: 20px; 
        margin-bottom: 20px; 
    }

    .section-title { 
        color: #AA00FF !important; 
        font-weight: 600; 
        font-size: 1.3em; 
        margin-bottom: 15px; 
        border-bottom: 1px solid rgba(255,255,255,0.1); 
        padding-bottom: 8px; 
        font-family: 'Nunito', sans-serif !important;
    }

    .sub-header { 
        color: #AA00FF !important; 
        font-weight: 600; 
        margin-top: 15px; 
        margin-bottom: 8px; 
        font-size: 1.1em; 
    }

    .formula-box { 
        background: rgba(170, 0, 255, 0.1) !important; 
        border-left: 4px solid #AA00FF !important; 
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
        color: #AA00FF !important; 
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
        <div class="step">In earlier classes, you studied linear equations in one variable (like x + 2 = 5). In this chapter, we will learn about equations with <strong>two variables</strong> (like x + y = 10).</div>
    </div>

    <div class="content-box">
        <div class="section-title">2. Basic Concepts</div>
        <div class="step"><strong>Linear Equation:</strong> An equation that can be written as <strong>ax + by + c = 0</strong>, where a, b, and c are numbers and at least one of a or b is not zero.</div>
        <div class="step"><strong>Solutions:</strong> A linear equation in two variables always has <strong>infinitely many solutions</strong>. Each solution is written as a pair of numbers (x, y).</div>
        <div class="step"><strong>Graph:</strong> When we plot all the solutions of a linear equation on a graph paper, we always get a <strong>Straight Line</strong>.</div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Graphing Equations</div>
        <div class="step">To draw the graph of a linear equation:
            <ul>
                <li>Find at least two solutions (pairs of x and y).</li>
                <li>Plot these points on the graph paper.</li>
                <li>Join them with a straight line.</li>
            </ul>
        </div>
        <div class="formula-box">
            Equation of x-axis: <strong>y = 0</strong><br>
            Equation of y-axis: <strong>x = 0</strong>
        </div>
    </div>

</div>`,
  htmlExercises: {
    "ex3-1": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #AB47BC; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement.</div>
        <div class="solution">
          Let the cost of a notebook be x.<br/><br/>
          Let the cost of a pen be y.<br/><br/>
          According to the question:<br/>
          x = 2y<br/><br/>
          In standard form:<br/>
          x - 2y = 0
        </div>

        <div class="question">Q2. Express the following linear equations in the form ax + by + c = 0 and indicate the values of a, b and c in each case:</div>
        <div class="solution">
          <span class="subpart">(i) 2x + 3y = 9.355... :</span><br/>
          2x + 3y - 9.355... = 0<br/>
          a = 2, b = 3, c = -9.355...<br/><br/>
          
          <span class="subpart">(ii) x - y/5 - 10 = 0 :</span><br/>
          x - (1/5)y - 10 = 0<br/>
          a = 1, b = -1/5, c = -10<br/><br/>
          
          <span class="subpart">(iii) -2x + 3y = 6 :</span><br/>
          -2x + 3y - 6 = 0<br/>
          a = -2, b = 3, c = -6<br/><br/>
          
          <span class="subpart">(iv) x = 3y :</span><br/>
          x - 3y + 0 = 0<br/>
          a = 1, b = -3, c = 0<br/><br/>
          
          <span class="subpart">(v) 2x = -5y :</span><br/>
          2x + 5y + 0 = 0<br/>
          a = 2, b = 5, c = 0<br/><br/>
          
          <span class="subpart">(vi) 3x + 2 = 0 :</span><br/>
          3x + 0y + 2 = 0<br/>
          a = 3, b = 0, c = 2<br/><br/>
          
          <span class="subpart">(vii) y - 2 = 0 :</span><br/>
          0x + 1y - 2 = 0<br/>
          a = 0, b = 1, c = -2<br/><br/>
          
          <span class="subpart">(viii) 5 = 2x :</span><br/>
          -2x + 0y + 5 = 0 (or 2x + 0y - 5 = 0)<br/>
          a = -2, b = 0, c = 5
        </div>
      </div>
    `,
    "ex3-2": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #AB47BC; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. Which one of the following options is true, and why?<br/> y = 3x + 5 has:</div>
        <div class="solution">
          Option (iii) Infinitely many solutions is true.<br/><br/>
          <span class="subpart">Reason:</span><br/>
          Because for every value of x, there is a corresponding value of y and vice-versa.
        </div>

        <div class="question">Q2. Write four solutions for each of the following equations:</div>
        <div class="solution">
          <span class="subpart">(i) 2x + y = 7 :</span><br/>
          1. If x = 0, 2(0) + y = 7 ⇒ y = 7. Solution: (0, 7)<br/>
          2. If x = 1, 2(1) + y = 7 ⇒ y = 5. Solution: (1, 5)<br/>
          3. If x = 2, 2(2) + y = 7 ⇒ y = 3. Solution: (2, 3)<br/>
          4. If x = 3, 2(3) + y = 7 ⇒ y = 1. Solution: (3, 1)<br/><br/>
          
          <span class="subpart">(ii) πx + y = 9 :</span><br/>
          1. If x = 0, y = 9. Solution: (0, 9)<br/>
          2. If x = 1, π + y = 9 ⇒ y = 9 - π. Solution: (1, 9-π)<br/>
          3. If y = 0, πx = 9 ⇒ x = 9/π. Solution: (9/π, 0)<br/>
          4. If x = -1, -π + y = 9 ⇒ y = 9 + π. Solution: (-1, 9+π)<br/><br/>
          
          <span class="subpart">(iii) x = 4y :</span><br/>
          1. If y = 0, x = 0. Solution: (0, 0)<br/>
          2. If y = 1, x = 4. Solution: (4, 1)<br/>
          3. If y = 2, x = 8. Solution: (8, 2)<br/>
          4. If y = 3, x = 12. Solution: (12, 3)
        </div>

        <div class="question">Q3. Check which of the following are solutions of the equation x - 2y = 4 and which are not:</div>
        <div class="solution">
          <span class="subpart">(i) (0, 2) :</span><br/>
          LHS = 0 - 2(2) = -4 ≠ 4 (RHS).<br/>
          Not a solution.<br/><br/>
          
          <span class="subpart">(ii) (2, 0) :</span><br/>
          LHS = 2 - 2(0) = 2 ≠ 4.<br/>
          Not a solution.<br/><br/>
          
          <span class="subpart">(iii) (4, 0) :</span><br/>
          LHS = 4 - 2(0) = 4 = RHS.<br/>
          Is a solution.<br/><br/>
          
          <span class="subpart">(iv) (√2, 4√2) :</span><br/>
          LHS = √2 - 2(4√2) = √2 - 8√2 = -7√2 ≠ 4.<br/>
          Not a solution.<br/><br/>
          
          <span class="subpart">(v) (1, 1) :</span><br/>
          LHS = 1 - 2(1) = -1 ≠ 4.<br/>
          Not a solution.
        </div>

        <div class="question">Q4. Find the value of k, if x = 2, y = 1 is a solution of the equation 2x + 3y = k.</div>
        <div class="solution">
          Put x = 2 and y = 1 in the equation:<br/><br/>
          2(2) + 3(1) = k<br/>
          4 + 3 = k<br/>
          k = 7
        </div>
      </div>
    `,
    "ex3-3": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #AB47BC; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. Draw the graph of each of the following linear equations in two variables:</div>
        <div class="solution">
          <span class="subpart">(i) x + y = 4 :</span><br/>
          Points: (0, 4) and (4, 0).<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="150" height="150" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="130" x2="140" y2="130" stroke="white" stroke-width="1" />
              <line x1="20" y1="10" x2="20" y2="140" stroke="white" stroke-width="1" />
              <line x1="20" y1="10" x2="130" y2="130" stroke="#AB47BC" stroke-width="2" />
            </svg>
          </div><br/>
          
          <span class="subpart">(ii) x - y = 2 :</span><br/>
          Points: (2, 0) and (0, -2).<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="150" height="150" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="75" x2="140" y2="75" stroke="white" stroke-width="1" />
              <line x1="75" y1="10" x2="75" y2="140" stroke="white" stroke-width="1" />
              <line x1="75" y1="130" x2="130" y2="75" stroke="#AB47BC" stroke-width="2" />
            </svg>
          </div><br/>
          
          <span class="subpart">(iii) y = 3x :</span><br/>
          Points: (0, 0) and (1, 3).<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="150" height="150" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="75" x2="140" y2="75" stroke="white" stroke-width="1" />
              <line x1="75" y1="10" x2="75" y2="140" stroke="white" stroke-width="1" />
              <line x1="75" y1="75" x2="110" y2="15" stroke="#AB47BC" stroke-width="2" />
            </svg>
          </div><br/>
          
          <span class="subpart">(iv) 3 = 2x + y :</span><br/>
          Points: (0, 3) and (1.5, 0).<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="150" height="150" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="130" x2="140" y2="130" stroke="white" stroke-width="1" />
              <line x1="20" y1="10" x2="20" y2="140" stroke="white" stroke-width="1" />
              <line x1="20" y1="40" x2="80" y2="130" stroke="#AB47BC" stroke-width="2" />
            </svg>
          </div>
        </div>

        <div class="question">Q2. Give the equations of two lines passing through (2, 14). How many more such lines are there, and why?</div>
        <div class="solution">
          Line 1: x + y = 16 (Since 2 + 14 = 16)<br/>
          Line 2: 7x - y = 0 (Since 7(2) - 14 = 0)<br/><br/>
          There are <strong>infinitely many</strong> such lines because through a single point, an infinite number of lines can be drawn.
        </div>

        <div class="question">Q3. If the point (3, 4) lies on the graph of the equation 3y = ax + 7, find the value of a.</div>
        <div class="solution">
          Since (3, 4) lies on the line, it must satisfy the equation:<br/><br/>
          3(4) = a(3) + 7<br/>
          12 = 3a + 7<br/>
          3a = 12 - 7<br/>
          3a = 5<br/>
          a = 5/3
        </div>

        <div class="question">Q4. The taxi fare in a city is Rs 8 for the first km and Rs 5 for subsequent distance. Taking distance as x and fare as y, write the equation.</div>
        <div class="solution">
          Distance = x km<br/>
          Total Fare = y<br/><br/>
          For the first km, fare = 8<br/>
          For remaining (x - 1) km, fare = 5(x - 1)<br/><br/>
          Total Fare y = 8 + 5(x - 1)<br/>
          y = 8 + 5x - 5<br/>
          y = 5x + 3<br/><br/>
          Standard form: 5x - y + 3 = 0<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="150" height="150" style="background:#1E1E2E; border-radius:8px;">
              <line x1="20" y1="130" x2="140" y2="130" stroke="white" stroke-width="1" />
              <line x1="30" y1="10" x2="30" y2="140" stroke="white" stroke-width="1" />
              <line x1="30" y1="100" x2="60" y2="10" stroke="#AB47BC" stroke-width="2" />
              <text x="65" y="30" fill="#AB47BC" font-size="10">y=5x+3</text>
            </svg>
          </div>
        </div>

        <div class="question">Q5. From the choices given below, choose the equation whose graph is given in Fig 3.6:</div>
        <div class="solution">
          <span class="subpart">For Fig 3.6:</span><br/>
          Points on the graph are (-1, 1), (0, 0), and (1, -1).<br/>
          Only the equation <strong>x + y = 0</strong> satisfies all these points.<br/>
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="120" height="120" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="60" x2="110" y2="60" stroke="white" stroke-width="1" />
              <line x1="60" y1="10" x2="60" y2="110" stroke="white" stroke-width="1" />
              <line x1="20" y1="20" x2="100" y2="100" stroke="#AB47BC" stroke-width="2" />
              <text x="80" y="30" fill="white" font-size="8">Fig 3.6</text>
            </svg>
          </div><br/>
          <span class="subpart">For Fig 3.7:</span><br/>
          Points on the graph are (-1, 3), (0, 2), and (2, 0).<br/>
          Only the equation <strong>y = -x + 2</strong> satisfies all these points.
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="120" height="120" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="80" x2="110" y2="80" stroke="white" stroke-width="1" />
              <line x1="40" y1="10" x2="40" y2="110" stroke="white" stroke-width="1" />
              <line x1="20" y1="20" x2="80" y2="80" stroke="#AB47BC" stroke-width="2" />
              <text x="80" y="30" fill="white" font-size="8">Fig 3.7</text>
            </svg>
          </div>
        </div>

        <div class="question">Q6. If the work done by a body on application of a constant force is directly proportional to the distance travelled, express this as an equation with force = 5 units and draw the graph.</div>
        <div class="solution">
          Let distance be x and work done be y.<br/>
          Constant force = 5 units.<br/>
          Equation: <strong>y = 5x</strong><br/><br/>
          If x = 2, y = 10.<br/>
          If x = 0, y = 0.<br/><br/>
          <div style="display:flex; justify-content:center; margin:20px 0;">
            <svg width="200" height="200" style="background:#1E1E2E; border-radius:12px;">
              <line x1="20" y1="180" x2="180" y2="180" stroke="white" stroke-width="2" />
              <line x1="20" y1="20" x2="20" y2="180" stroke="white" stroke-width="2" />
              <line x1="20" y1="180" x2="160" y2="40" stroke="#AB47BC" stroke-width="3" />
              <text x="165" y="45" fill="#AB47BC" font-size="12">y=5x</text>
              <text x="100" y="195" fill="white" font-size="10">Distance (x)</text>
              <text x="5" y="100" fill="white" font-size="10" transform="rotate(-90 5,100)">Work (y)</text>
            </svg>
          </div>
        </div>

        <div class="question">Q7. Yamini and Fatima, two students of Class IX, together contributed Rs 100 towards the Prime Minister’s Relief Fund. Write a linear equation and draw the graph.</div>
        <div class="solution">
          Let Yamini's contribution be Rs x.<br/>
          Let Fatima's contribution be Rs y.<br/><br/>
          Equation: <strong>x + y = 100</strong><br/><br/>
          Points: (0, 100) and (100, 0).<br/><br/>
          <div style="display:flex; justify-content:center; margin:20px 0;">
            <svg width="200" height="200" style="background:#1E1E2E; border-radius:12px;">
              <line x1="20" y1="180" x2="180" y2="180" stroke="white" stroke-width="2" />
              <line x1="20" y1="20" x2="20" y2="180" stroke="white" stroke-width="2" />
              <line x1="20" y1="40" x2="160" y2="180" stroke="#AB47BC" stroke-width="3" />
              <text x="140" y="50" fill="#AB47BC" font-size="12">x+y=100</text>
            </svg>
          </div>
        </div>

        <div class="question">Q8. In countries like USA and Canada, temperature is measured in Fahrenheit, whereas in countries like India, it is in Celsius. Linear equation: F = (9/5)C + 32</div>
        <div class="solution">
          <span class="subpart">(i) Draw the graph using C for x-axis and F for y-axis.</span><br/>
          Points: (0, 32) and (-40, -40).<br/><br/>
          <span class="subpart">(ii) If temperature is 30degC, what is Fahrenheit?</span><br/>
          F = (9/5)30 + 32 = 54 + 32 = 86degF.<br/><br/>
          <span class="subpart">(iii) If temperature is 95degF, what is Celsius?</span><br/>
          95 = (9/5)C + 32<br/>
          63 = (9/5)C ⇒ C = 35degC.<br/><br/>
          <span class="subpart">(iv) If temperature is 0degC, F = 32degF; If F = 0degF, C = -17.8degC.</span><br/><br/>
          <span class="subpart">(v) Is there a temperature which is same in both?</span><br/>
          Yes, at <strong>-40deg</strong> (both are -40).<br/>
          <div style="display:flex; justify-content:center; margin:15px 0;">
            <svg width="200" height="150" style="background:#1E1E2E; border-radius:12px;">
              <line x1="10" y1="100" x2="190" y2="100" stroke="white" stroke-width="1" />
              <line x1="100" y1="10" x2="100" y2="140" stroke="white" stroke-width="1" />
              <line x1="20" y1="130" x2="180" y2="20" stroke="#AB47BC" stroke-width="2" />
              <text x="140" y="115" fill="white" font-size="10">Celsius (C)</text>
              <text x="75" y="30" fill="white" font-size="10" transform="rotate(-90 75,30)">Fahrenheit (F)</text>
            </svg>
          </div>
        </div>
      </div>
    `,
    "ex3-4": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .question { color: #AB47BC; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. Give the geometric representation of y = 3 as an equation:</div>
        <div class="solution">
          <span class="subpart">(i) In one variable :</span><br/>
          It is a point on the number line at distance 3 from zero.<br/>
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="200" height="40" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="20" x2="190" y2="20" stroke="white" stroke-width="1" />
              <circle cx="100" cy="20" r="3" fill="white" />
              <circle cx="160" cy="20" r="4" fill="#AB47BC" />
              <text x="95" y="35" fill="white" font-size="10">0</text>
              <text x="155" y="35" fill="#AB47BC" font-size="10">3</text>
            </svg>
          </div><br/>
          <span class="subpart">(ii) In two variables :</span><br/>
          Written as 0x + y = 3.<br/>
          It is a straight line parallel to the x-axis, passing through (0, 3).<br/>
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="120" height="120" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="90" x2="110" y2="90" stroke="white" stroke-width="1" />
              <line x1="60" y1="10" x2="60" y2="110" stroke="white" stroke-width="1" />
              <line x1="10" y1="40" x2="110" y2="40" stroke="#AB47BC" stroke-width="2" />
              <text x="65" y="35" fill="#AB47BC" font-size="10">y=3</text>
            </svg>
          </div>
        </div>

        <div class="question">Q2. Give the geometric representation of 2x + 9 = 0 as an equation:</div>
        <div class="solution">
          2x + 9 = 0 ⇒ 2x = -9 ⇒ x = -4.5<br/><br/>
          <span class="subpart">(i) In one variable :</span><br/>
          It is a point on the number line at -4.5.<br/>
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="200" height="40" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="20" x2="190" y2="20" stroke="white" stroke-width="1" />
              <circle cx="100" cy="20" r="3" fill="white" />
              <circle cx="40" cy="20" r="4" fill="#AB47BC" />
              <text x="95" y="35" fill="white" font-size="10">0</text>
              <text x="30" y="35" fill="#AB47BC" font-size="10">-4.5</text>
            </svg>
          </div><br/>
          <span class="subpart">(ii) In two variables :</span><br/>
          Written as 2x + 0y + 9 = 0.<br/>
          It is a straight line parallel to the y-axis, passing through (-4.5, 0).<br/>
          <div style="display:flex; justify-content:center; margin:10px 0;">
            <svg width="120" height="120" style="background:#1E1E2E; border-radius:8px;">
              <line x1="10" y1="60" x2="110" y2="60" stroke="white" stroke-width="1" />
              <line x1="90" y1="10" x2="90" y2="110" stroke="white" stroke-width="1" />
              <line x1="30" y1="10" x2="30" y2="110" stroke="#AB47BC" stroke-width="2" />
              <text x="5" y="30" fill="#AB47BC" font-size="10" transform="rotate(-90 5,30)">x=-4.5</text>
            </svg>
          </div>
        </div>
      </div>
    `,
  }
};
