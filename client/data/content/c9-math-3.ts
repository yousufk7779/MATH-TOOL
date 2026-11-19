import { ChapterContent } from "../types";

export const c9Math3: ChapterContent = {
  id: "c9-math-3",
  number: 3,
  title: "Linear Equations in Two Variables",
  introduction:
    "In this chapter, we extend our knowledge of linear equations to two variables. We will learn how to write them in standard form, find their solutions, and represent them on a graph.",
  definitions: [
    {
      term: "Linear Equation",
      description:
        "An equation which can be put in the form ax + by + c = 0, where a, b and c are real numbers.",
    },
    {
      term: "Solution",
      description: "A pair of values for x and y that satisfy the equation.",
    },
    {
      term: "Graph",
      description:
        "The visual representation of a linear equation on a Cartesian plane.",
    },
  ],
  keyPoints: [
    "A linear equation in two variables has infinitely many solutions.",
    "The graph of every linear equation in two variables is a straight line.",
    "x = 0 is the equation of the y-axis and y = 0 is the equation of the x-axis.",
  ],
  formulas: [{ name: "Standard Form", formula: "ax + by + c = 0" }],
  crux: [
    "To find a solution, pick a value for x and calculate the corresponding value for y.",
    "Every point on the line is a solution of the equation.",
  ],
  exercises: [
    { id: "ex3-1", name: "Ex 3.1", questions: [] },
    { id: "ex3-2", name: "Ex 3.2", questions: [] },
  ],
  examples: [],
  theorems: [],
  mcqs: [
    {
      id: "m1",
      question: "The standard form of a linear equation in two variables is:",
      options: [
        "ax + b = 0",
        "ax² + bx + c = 0",
        "ax + by + c = 0",
        "ax + b = y²",
      ],
      correctAnswer: "C",
    },
    {
      id: "m2",
      question:
        "How many solutions does a linear equation in two variables have?",
      options: [
        "Unique solution",
        "Two solutions",
        "Infinitely many",
        "No solution",
      ],
      correctAnswer: "C",
    },
    {
      id: "m3",
      question: "The graph of the equation x = 5 is a line parallel to:",
      options: ["x-axis", "y-axis", "Origin", "None of these"],
      correctAnswer: "B",
    },
    {
      id: "m4",
      question: "The point (0, 3) lies on which line?",
      options: ["x-axis", "y-axis", "Origin", "Quadrant II"],
      correctAnswer: "B",
    },
    {
      id: "m5",
      question: "If (2, 0) is a solution of 2x + 3y = k, then k is:",
      options: ["2", "4", "0", "5"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question: "The equation y = mx represents a line passing through:",
      options: ["x-axis", "y-axis", "Origin", "None of these"],
      correctAnswer: "C",
    },
    {
      id: "m7",
      question: "Any point on the x-axis is of the form:",
      options: ["(x, y)", "(0, y)", "(x, 0)", "(x, x)"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "Any point on the line y = x is of the form:",
      options: ["(a, a)", "(0, a)", "(a, 0)", "(a, −a)"],
      correctAnswer: "A",
    },
    {
      id: "m9",
      question: "Equation of the x-axis is:",
      options: ["x = 0", "y = 0", "x + y = 0", "x = y"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question: "The graph of a linear equation is always a:",
      options: ["Circle", "Curve", "Straight line", "Point"],
      correctAnswer: "C",
    },
  ],
  summary: [
    "A linear equation in two variables is written as ax + by + c = 0.",
    "It always has infinitely many solutions and its graph is a straight line.",
    "The coordinates of every point on the line satisfy the equation.",
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #AB47BC; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #AB47BC; padding-left: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #AB47BC !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #AB47BC !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(171, 71, 188, 0.05) !important; border-left: 4px solid #AB47BC !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #AB47BC !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #AB47BC !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #AB47BC !important; font-weight: 700; }
        strong { color: #AB47BC !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(171, 71, 188, 0.05); color: #AB47BC; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>

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

</div>
`,
  htmlExercises: {
    "ex3-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #AB47BC; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #AB47BC; padding-left: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #AB47BC !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #AB47BC !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(171, 71, 188, 0.05) !important; border-left: 4px solid #AB47BC !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #AB47BC !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #AB47BC !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #AB47BC !important; font-weight: 700; }
        strong { color: #AB47BC !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(171, 71, 188, 0.05); color: #AB47BC; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the cost of a notebook = ₹x<br/>
          Let the cost of a pen = ₹y<br/>
          According to the question:<br/>
          x = 2y<br/>
          x − 2y = 0<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">x − 2y = 0</span></div>
        </div>

        <div class="question">Q2. Express the following linear equations in the form ax + by + c = 0 and indicate the values of a, b and c in each case:</div>
        <div class="solution">
          <span class="subpart">(i) 2x + 3y = 9.355... :</span><br/>
          <strong>Solution:</strong><br/>
          2x + 3y = 9.355...<br/>
          2x + 3y − 9.355... = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 2, b = 3, c = −9.355...</span></div><br/>
          <br/>
          <span class="subpart">(ii) x - y/5 - 10 = 0 :</span><br/>
          <strong>Solution:</strong><br/>
          x − <span class='frac'><span class='num'>y</span><span class='den'>5</span></span> − 10 = 0<br/>
          x − <span class='frac'><span class='num'>1</span><span class='den'>5</span></span>y − 10 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 1, b = −<span class='frac'><span class='num'>1</span><span class='den'>5</span></span>, c = −10</span></div><br/>
          <br/>
          <span class="subpart">(iii) -2x + 3y = 6 :</span><br/>
          <strong>Solution:</strong><br/>
          −2x + 3y = 6<br/>
          −2x + 3y − 6 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = −2, b = 3, c = −6</span></div><br/>
          <br/>
          <span class="subpart">(iv) x = 3y :</span><br/>
          <strong>Solution:</strong><br/>
          x = 3y<br/>
          x − 3y = 0<br/>
          x − 3y + 0 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 1, b = −3, c = 0</span></div><br/>
          <br/>
          <span class="subpart">(v) 2x = -5y :</span><br/>
          <strong>Solution:</strong><br/>
          2x = −5y<br/>
          2x + 5y = 0<br/>
          2x + 5y + 0 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 2, b = 5, c = 0</span></div><br/>
          <br/>
          <span class="subpart">(vi) 3x + 2 = 0 :</span><br/>
          <strong>Solution:</strong><br/>
          3x + 2 = 0<br/>
          3x + 0y + 2 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 3, b = 0, c = 2</span></div><br/>
          <br/>
          <span class="subpart">(vii) y - 2 = 0 :</span><br/>
          <strong>Solution:</strong><br/>
          y − 2 = 0<br/>
          0x + 1y − 2 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = 0, b = 1, c = −2</span></div><br/>
          <br/>
          <span class="subpart">(viii) 5 = 2x :</span><br/>
          <strong>Solution:</strong><br/>
          5 = 2x<br/>
          5 − 2x = 0<br/>
          −2x + 0y + 5 = 0<br/>
          Comparing with ax + by + c = 0:<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">a = −2, b = 0, c = 5 (or a = 2, b = 0, c = −5)</span></div>
        </div>
      </div>
`,
    "ex3-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #AB47BC; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #AB47BC; padding-left: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #AB47BC !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #AB47BC !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(171, 71, 188, 0.05) !important; border-left: 4px solid #AB47BC !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #AB47BC !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #AB47BC !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #AB47BC !important; font-weight: 700; }
        strong { color: #AB47BC !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(171, 71, 188, 0.05); color: #AB47BC; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">Q1. Which one of the following options is true, and why?<br/> y = 3x + 5 has:</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          y = 3x + 5<br/>
          Putting x = 0: y = 3(0) + 5 = 5<br/>
          Putting x = 1: y = 3(1) + 5 = 8<br/>
          Putting x = 2: y = 3(2) + 5 = 11<br/>
          <span class="subpart">Reason:</span> Every value of x gives a value of y.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(iii) Infinitely many solutions</span></div>
        </div>

        <div class="question">Q2. Write four solutions for each of the following equations:</div>
        <div class="solution">
          <span class="subpart">(i) 2x + y = 7 :</span><br/>
          <strong>Solution:</strong><br/>
          2x + y = 7<br/>
          y = 7 − 2x<br/>
          Putting x = 0: y = 7 − 2(0) = 7<br/>
          Putting x = 1: y = 7 − 2(1) = 5<br/>
          Putting x = 2: y = 7 − 2(2) = 3<br/>
          Putting x = 3: y = 7 − 2(3) = 1<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(0, 7), (1, 5), (2, 3), (3, 1)</span></div><br/>
          <br/>
          <span class="subpart">(ii) πx + y = 9 :</span><br/>
          <strong>Solution:</strong><br/>
          πx + y = 9<br/>
          y = 9 − πx<br/>
          Putting x = 0: y = 9 − π(0) = 9<br/>
          Putting x = 1: y = 9 − π(1) = 9 − π<br/>
          Putting y = 0: πx = 9 ⇒ x = <span class='frac'><span class='num'>9</span><span class='den'>π</span></span><br/>
          Putting x = −1: y = 9 − π(−1) = 9 + π<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(0, 9), (1, 9 − π), (<span class='frac'><span class='num'>9</span><span class='den'>π</span></span>, 0), (−1, 9 + π)</span></div><br/>
          <br/>
          <span class="subpart">(iii) x = 4y :</span><br/>
          <strong>Solution:</strong><br/>
          x = 4y<br/>
          Putting y = 0: x = 4(0) = 0<br/>
          Putting y = 1: x = 4(1) = 4<br/>
          Putting y = 2: x = 4(2) = 8<br/>
          Putting y = 3: x = 4(3) = 12<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(0, 0), (4, 1), (8, 2), (12, 3)</span></div>
        </div>

        <div class="question">Q3. Check which of the following are solutions of the equation x - 2y = 4 and which are not:</div>
        <div class="solution">
          <span class="subpart">(i) (0, 2) :</span><br/>
          <strong>Solution:</strong><br/>
          Putting x = 0, y = 2 in x − 2y = 4:<br/>
          LHS = 0 − 2(2)<br/>
          = −4<br/>
          RHS = 4<br/>
          LHS ≠ RHS<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(0, 2) is not a solution</span></div><br/>
          <br/>
          <span class="subpart">(ii) (2, 0) :</span><br/>
          <strong>Solution:</strong><br/>
          Putting x = 2, y = 0 in x − 2y = 4:<br/>
          LHS = 2 − 2(0)<br/>
          = 2<br/>
          RHS = 4<br/>
          LHS ≠ RHS<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(2, 0) is not a solution</span></div><br/>
          <br/>
          <span class="subpart">(iii) (4, 0) :</span><br/>
          <strong>Solution:</strong><br/>
          Putting x = 4, y = 0 in x − 2y = 4:<br/>
          LHS = 4 − 2(0)<br/>
          = 4<br/>
          RHS = 4<br/>
          LHS = RHS<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(4, 0) is a solution</span></div><br/>
          <br/>
          <span class="subpart">(iv) (√2, 4√2) :</span><br/>
          <strong>Solution:</strong><br/>
          Putting x = √2, y = 4√2 in x − 2y = 4:<br/>
          LHS = √2 − 2(4√2)<br/>
          = √2 − 8√2<br/>
          = −7√2<br/>
          RHS = 4<br/>
          LHS ≠ RHS<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(√2, 4√2) is not a solution</span></div><br/>
          <br/>
          <span class="subpart">(v) (1, 1) :</span><br/>
          <strong>Solution:</strong><br/>
          Putting x = 1, y = 1 in x − 2y = 4:<br/>
          LHS = 1 − 2(1)<br/>
          = −1<br/>
          RHS = 4<br/>
          LHS ≠ RHS<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(1, 1) is not a solution</span></div>
        </div>

        <div class="question">Q4. Find the value of k, if x = 2, y = 1 is a solution of the equation 2x + 3y = k.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          2x + 3y = k<br/>
          Putting x = 2, y = 1:<br/>
          2(2) + 3(1) = k<br/>
          4 + 3 = k<br/>
          k = 7<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">k = 7</span></div>
        </div>
      </div>
`,
  },
};
