import { ChapterContent } from "../types";

export const c8Math2: ChapterContent = {
  id: "c8-math-2",
  number: 2,
  title: "Linear Equations in One Variable",
  introduction: "In this chapter, we will learn how to solve equations where the highest power of the variable is 1 and only one variable is used.",
  definitions: [
    { term: "Equation", description: "A statement of equality involving variables." },
    { term: "Linear Equation", description: "An equation where the highest power of the variable is 1." },
    { term: "Solution", description: "The value of the variable that makes the equation true." }
  ],
  keyPoints: [
    "An algebraic equation is an equality involving variables.",
    "The highest power of the variable in a linear equation is 1.",
    "Variables can be transposed from one side to another (sign changes).",
    "Linear equations are used to solve real-life problems like ages, perimeters, etc."
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex2-1", name: "Exercise 2.1", questions: [] },
    { id: "ex2-2", name: "Exercise 2.2", questions: [] }
  ],
  examples: [],
  mcqs: [
    {
      id: "c8-m2-q1",
      question: "In a linear equation, the highest power of the variable is:",
      options: ["0", "1", "2", "3"],
      correctAnswer: "1"
    },
    {
      id: "c8-m2-q2",
      question: "If x + 5 = 10, then the value of x is:",
      options: ["5", "10", "15", "-5"],
      correctAnswer: "5"
    },
    {
      id: "c8-m2-q3",
      question: "Transposing a positive term to the other side makes it:",
      options: ["Positive", "Negative", "Zero", "Multiply"],
      correctAnswer: "Negative"
    },
    {
      id: "c8-m2-q4",
      question: "Solution of 2x = 10 is:",
      options: ["2", "20", "5", "8"],
      correctAnswer: "5"
    },
    {
      id: "c8-m2-q5",
      question: "If <span class='frac'><span class='num'>x</span><span class='den'>3</span></span> = 4, then x equals:",
      options: ["7", "1", "12", "<span class='frac'><span class='num'>4</span><span class='den'>3</span></span>"],
      correctAnswer: "12"
    },
    {
      id: "c8-m2-q6",
      question: "How many variables are in 'Linear Equation in One Variable'?",
      options: ["Two", "One", "Three", "Zero"],
      correctAnswer: "One"
    },
    {
      id: "c8-m2-q7",
      question: "Is 2x + 5 = 9 a linear equation?",
      options: ["Yes", "No"],
      correctAnswer: "Yes"
    },
    {
      id: "c8-m2-q8",
      question: "If 3x - 1 = 8, then x is:",
      options: ["3", "2", "9", "7"],
      correctAnswer: "3"
    },
    {
      id: "c8-m2-q9",
      question: "Solution of x - 7 = -2 is:",
      options: ["9", "-9", "5", "-5"],
      correctAnswer: "5"
    },
    {
      id: "c8-m2-q10",
      question: "Which of these is NOT a linear equation?",
      options: ["x + 1 = 0", "y = 2", "x² + 1 = 0", "z - 5 = 4"],
      correctAnswer: "x² + 1 = 0"
    }
  ],
  summary: [
    "Linear equations have degree 1.",
    "Solving involves transposing terms and isolating the variable.",
    "Always check your result by substituting the value back into the original equation."
  ],
  isHtmlView: true,
  htmlOverview: `
    <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
      
      .premium-container {
        padding: 20px;
        color: #ffffff;
        font-family: 'Outfit', sans-serif !important;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .section-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        backdrop-filter: blur(10px);
      }

      .section-header {
        color: #D81B60;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .point-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 15px;
        line-height: 1.6;
        font-size: 16px;
      }

      .bullet {
        color: #D81B60;
        font-size: 20px;
        line-height: 1;
      }

      .highlight {
        color: #D81B60;
        font-weight: 600;
      }

      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">

      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          An equation is a mathematical statement that shows two expressions are equal. When an equation has only one variable and its highest power is 1, it is called a <strong>Linear Equation in One Variable</strong>. This chapter teaches us how to find the value of that unknown variable using simple transposition techniques.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Quick Overview</div>
        
        <div class="point-item">
          <span class="bullet">1.</span>
          <span>An algebraic equation is an <span class="highlight">equality</span> involving variables. One side must equal the other.</span>
        </div>

        <div class="point-item">
          <span class="bullet">2.</span>
          <span>In these equations, the highest power of the variable is <span class="highlight">1</span>. They only use one variable (e.g., x or y).</span>
        </div>

        <div class="point-item">
          <span class="bullet">3.</span>
          <span>Equations can have linear expressions on <span class="highlight">both sides</span> (e.g., 2x + 1 = x - 5).</span>
        </div>

        <div class="point-item">
          <span class="bullet">4.</span>
          <span>Just like numbers, <span class="highlight">variables</span> can also be transposed from one side to the other.</span>
        </div>

        <div class="point-item">
          <span class="bullet">5.</span>
          <span>Sometimes equations need to be <span class="highlight">simplified</span> or brought to a linear form before solving.</span>
        </div>

        <div class="point-item">
          <span class="bullet">6.</span>
          <span>Linear equations are very useful in solving real-world problems involving <span class="highlight">ages, perimeters, currency,</span> and more.</span>
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif !important; background: transparent; }
        .q-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(216, 27, 96, 0.2); border-radius: 12px; padding: 18px; margin-bottom: 20px; }
        .q-text { color: #D81B60; font-weight: 600; margin-bottom: 12px; }
        .sol-box { border-left: 3px solid #D81B60; padding-left: 15px; margin-top: 10px; }
        .sol-line { font-size: 16px; margin-bottom: 8px; }
        .ans-tag { color: #D81B60; font-weight: bold; margin-right: 8px; }
        .fraction { display: inline-block; vertical-align: middle; text-align: center; margin: 0 4px; }
        .numerator { display: block; border-bottom: 1px solid #fff; padding: 0 2px; }
        .denominator { display: block; padding: 0 2px; }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

      <div class="ex-container">
        <div class="q-card"><div class="q-text">1. Solve: 3x = 2x + 18</div><div class="sol-box"><div class="sol-line">3x - 2x = 18 ⟹ <span class="ans-tag">x = 18</span></div></div></div>
        <div class="q-card"><div class="q-text">2. Solve: 5t - 3 = 3t - 5</div><div class="sol-box"><div class="sol-line">5t - 3t = -5 + 3 ⟹ 2t = -2 ⟹ <span class="ans-tag">t = -1</span></div></div></div>
        <div class="q-card"><div class="q-text">3. Solve: 5x + 9 = 5 + 3x</div><div class="sol-box"><div class="sol-line">5x - 3x = 5 - 9 ⟹ 2x = -4 ⟹ <span class="ans-tag">x = -2</span></div></div></div>
        <div class="q-card"><div class="q-text">4. Solve: 4z + 3 = 6 + 2z</div><div class="sol-box"><div class="sol-line">4z - 2z = 6 - 3 ⟹ 2z = 3 ⟹ <span class="ans-tag">z = <span class='frac'><span class='num'>3</span><span class='den'>2</span></span></span></div></div></div>
        <div class="q-card"><div class="q-text">5. Solve: 2x - 1 = 14 - x</div><div class="sol-box"><div class="sol-line">2x + x = 14 + 1 ⟹ 3x = 15 ⟹ <span class="ans-tag">x = 5</span></div></div></div>
        <div class="q-card"><div class="q-text">6. Solve: 8x + 4 = 3(x - 1) + 7</div><div class="sol-box"><div class="sol-line">8x + 4 = 3x - 3 + 7 ⟹ 8x - 3x = 4 - 4 ⟹ <span class="ans-tag">x = 0</span></div></div></div>
        <div class="q-card"><div class="q-text">7. Solve: x = <span class='frac'><span class='num'>4</span><span class='den'>5</span></span>(x + 10)</div><div class="sol-box"><div class="sol-line">5x = 4x + 40 ⟹ <span class="ans-tag">x = 40</span></div></div></div>
        <div class="q-card"><div class="q-text">8. Solve: <span class='frac'><span class='num'>2x</span><span class='den'>3</span></span> + 1 = <span class='frac'><span class='num'>7x</span><span class='den'>15</span></span> + 3</div><div class="sol-box"><div class="sol-line">(10x - 7x)/15 = 2 ⟹ 3x = 30 ⟹ <span class="ans-tag">x = 10</span></div></div></div>
        <div class="q-card"><div class="q-text">9. Solve: 2y + <span class='frac'><span class='num'>5</span><span class='den'>3</span></span> = <span class='frac'><span class='num'>26</span><span class='den'>3</span></span> - y</div><div class="sol-box"><div class="sol-line">3y = <span class='frac'><span class='num'>21</span><span class='den'>3</span></span> ⟹ 3y = 7 ⟹ <span class="ans-tag">y = <span class='frac'><span class='num'>7</span><span class='den'>3</span></span></span></div></div></div>
        <div class="q-card"><div class="q-text">10. Solve: 3m = 5m - <span class='frac'><span class='num'>8</span><span class='den'>5</span></span></div><div class="sol-box"><div class="sol-line"><span class='frac'><span class='num'>8</span><span class='den'>5</span></span> = 2m ⟹ <span class="ans-tag">m = <span class='frac'><span class='num'>4</span><span class='den'>5</span></span></span></div></div></div>
      </div>
    `,
    "ex2-2": `
      <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif !important; background: transparent; }
        .q-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(216, 27, 96, 0.2); border-radius: 12px; padding: 18px; margin-bottom: 20px; }
        .q-text { color: #D81B60; font-weight: 600; margin-bottom: 12px; }
        .sol-box { border-left: 3px solid #D81B60; padding-left: 15px; margin-top: 10px; }
        .sol-line { font-size: 16px; margin-bottom: 8px; }
        .ans-tag { color: #D81B60; font-weight: bold; margin-right: 8px; }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

      <div class="ex-container">
        <div class="q-card"><div class="q-text">1. Solve: <span class='frac'><span class='num'>x</span><span class='den'>2</span></span> - <span class='frac'><span class='num'>1</span><span class='den'>5</span></span> = <span class='frac'><span class='num'>x</span><span class='den'>3</span></span> + <span class='frac'><span class='num'>1</span><span class='den'>4</span></span></div><div class="sol-box"><div class="sol-line">(3x - 2x)/6 = (5 + 4)/20 ⟹ <span class='frac'><span class='num'>x</span><span class='den'>6</span></span> = <span class='frac'><span class='num'>9</span><span class='den'>20</span></span> ⟹ <span class="ans-tag">x = 2.7</span></div></div></div>
        <div class="q-card"><div class="q-text">2. Solve: <span class='frac'><span class='num'>n</span><span class='den'>2</span></span> - <span class='frac'><span class='num'>3n</span><span class='den'>4</span></span> + <span class='frac'><span class='num'>5n</span><span class='den'>6</span></span> = 21</div><div class="sol-box"><div class="sol-line">(6n - 9n + 10n)/12 = 21 ⟹ <span class='frac'><span class='num'>7n</span><span class='den'>12</span></span> = 21 ⟹ <span class="ans-tag">n = 36</span></div></div></div>
        <div class="q-card"><div class="q-text">3. Solve: x + 7 - <span class='frac'><span class='num'>8x</span><span class='den'>3</span></span> = <span class='frac'><span class='num'>17</span><span class='den'>6</span></span> - <span class='frac'><span class='num'>5x</span><span class='den'>2</span></span></div><div class="sol-box"><div class="sol-line">x - <span class='frac'><span class='num'>8x</span><span class='den'>3</span></span> + <span class='frac'><span class='num'>5x</span><span class='den'>2</span></span> = <span class='frac'><span class='num'>17</span><span class='den'>6</span></span> - 7 ⟹ <span class='frac'><span class='num'>5x</span><span class='den'>6</span></span> = -<span class='frac'><span class='num'>25</span><span class='den'>6</span></span> ⟹ <span class="ans-tag">x = -5</span></div></div></div>
        <div class="q-card"><div class="q-text">4. Solve: (x - 5)/3 = (x - 3)/5</div><div class="sol-box"><div class="sol-line">5(x - 5) = 3(x - 3) ⟹ 2x = 16 ⟹ <span class="ans-tag">x = 8</span></div></div></div>
        <div class="q-card"><div class="q-text">5. Solve: (3t - 2)/4 - (2t + 3)/3 = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> - t</div><div class="sol-box"><div class="sol-line">(t - 18)/12 = (2 - 3t)/3 ⟹ t - 18 = 8 - 12t ⟹ <span class="ans-tag">t = 2</span></div></div></div>
        <div class="q-card"><div class="q-text">6. Solve: m - (m - 1)/2 = 1 - (m - 2)/3</div><div class="sol-box"><div class="sol-line">(m + 1)/2 = (5 - m)/3 ⟹ 3m + 3 = 10 - 2m ⟹ <span class="ans-tag">m = <span class='frac'><span class='num'>7</span><span class='den'>5</span></span></span></div></div></div>
      </div>
    `
  }
};
