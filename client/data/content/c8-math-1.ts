import { ChapterContent } from "../types";

export const c8Math1: ChapterContent = {
  id: "c8-math-1",
  number: 1,
  title: "Rational Numbers",
  introduction: "In this chapter, we will explore the properties of rational numbers, including closure, commutativity, and associativity under various operations.",
  definitions: [
    { term: "Rational Number", description: "A number that can be expressed in the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span>, where p and q are integers and q ≠ 0." },
    { term: "Additive Identity", description: "Zero (0) is the additive identity for rational numbers." },
    { term: "Multiplicative Identity", description: "One (1) is the multiplicative identity for rational numbers." }
  ],
  keyPoints: [
    "Rational numbers are closed under addition, subtraction, and multiplication.",
    "Addition and multiplication are commutative and associative for rational numbers.",
    "The reciprocal of a non-zero rational number is its multiplicative inverse."
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] }
  ],
  examples: [],
  mcqs: [
    {
      id: "c8-m1-q1",
      question: "Which number is the multiplicative identity for rational numbers?",
      options: ["0", "1", "-1", "2"],
      correctAnswer: "1"
    },
    {
      id: "c8-m1-q2",
      question: "Which number is the additive identity for rational numbers?",
      options: ["1", "-1", "0", "None"],
      correctAnswer: "0"
    },
    {
      id: "c8-m1-q3",
      question: "What is the reciprocal of 1?",
      options: ["0", "1", "-1", "Not defined"],
      correctAnswer: "1"
    },
    {
      id: "c8-m1-q4",
      question: "What is the reciprocal of -1?",
      options: ["1", "0", "-1", "Not defined"],
      correctAnswer: "-1"
    },
    {
      id: "c8-m1-q5",
      question: "The reciprocal of 0 is:",
      options: ["0", "1", "Not defined", "-1"],
      correctAnswer: "Not defined"
    },
    {
      id: "c8-m1-q6",
      question: "The product of a rational number and its reciprocal is:",
      options: ["0", "1", "-1", "Depends on the number"],
      correctAnswer: "1"
    },
    {
      id: "c8-m1-q7",
      question: "Is zero (0) a rational number?",
      options: ["Yes", "No", "Sometimes", "Only if it's positive"],
      correctAnswer: "Yes"
    },
    {
      id: "c8-m1-q8",
      question: "How many rational numbers are there between any two rational numbers?",
      options: ["Only one", "Ten", "Countless", "Zero"],
      correctAnswer: "Countless"
    },
    {
      id: "c8-m1-q9",
      question: "The property a(b + c) = ab + ac is called:",
      options: ["Commutative", "Associative", "Distributive", "Closure"],
      correctAnswer: "Distributive"
    },
    {
      id: "c8-m1-q10",
      question: "The sum of a rational number and its additive inverse is:",
      options: ["1", "0", "-1", "The number itself"],
      correctAnswer: "0"
    }
  ],
  summary: [
    "Rational numbers are numbers of the form <span class='frac'><span class='num'>p</span><span class='den'>q</span></span> where q ≠ 0.",
    "0 is the additive identity and 1 is the multiplicative identity.",
    "Reciprocal of <span class='frac'><span class='num'>a</span><span class='den'>b</span></span> is <span class='frac'><span class='num'>b</span><span class='den'>a</span></span> if a ≠ 0."
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

      .hero-card {
        background: linear-gradient(90deg, #FF8C00, #F44336);
        padding: 25px;
        border-radius: 15px;
        margin-bottom: 25px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
      }

      .hero-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
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
        color: #FFB74D;
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
        color: #FF8C00;
        font-size: 20px;
        line-height: 1;
      }

      .highlight {
        color: #FFD54F;
        font-weight: 600;
      }

      .formula-chip {
        background: rgba(255, 140, 0, 0.15);
        padding: 8px 15px;
        border-radius: 8px;
        border: 1px dashed #FF8C00;
        display: inline-block;
        margin-top: 10px;
        font-family: 'Courier New', Courier, monospace;
        color: #FFD54F;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">

      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text" style="line-height: 1.6; font-size: 16px; color: #e0e0e0; text-align: justify;">
          Numbers are the foundation of mathematics. <strong>Rational Numbers</strong> are those numbers that can be expressed as a ratio of two integers. In this chapter, we dive deep into their properties like closure, commutativity, and associativity, which help us simplify complex calculations and understand the number system better.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Important Points</div>
        
        <div class="point-item">
          <span class="bullet">1.</span>
          <span>Rational numbers are <span class="highlight">closed</span> under addition, subtraction, and multiplication.</span>
        </div>

        <div class="point-item">
          <span class="bullet">2.</span>
          <span>Addition and multiplication are <span class="highlight">commutative</span> and <span class="highlight">associative</span> for rational numbers.</span>
        </div>

        <div class="point-item">
          <span class="bullet">3.</span>
          <span>The rational number <span class="highlight">0</span> is the <span class="highlight">additive identity</span> for rational numbers.</span>
        </div>

        <div class="point-item">
          <span class="bullet">4.</span>
          <span>The rational number <span class="highlight">1</span> is the <span class="highlight">multiplicative identity</span> for rational numbers.</span>
        </div>

        <div class="point-item">
          <span class="bullet">5.</span>
          <span><span class="highlight">Distributivity:</span> For all rational numbers a, b and c,<br/>
            <div class="formula-chip">a(b + c) = ab + ac</div> and 
            <div class="formula-chip">a(b - c) = ab - ac</div>
          </span>
        </div>

        <div class="point-item">
          <span class="bullet">6.</span>
          <span>Between any two given rational numbers there are <span class="highlight">countless</span> (infinite) rational numbers.</span>
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        
        .ex-container {
          padding: 15px;
          color: #e0e0e0;
          font-family: 'Inter', sans-serif !important;
          background: transparent;
        }

        .q-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 140, 0, 0.2);
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .q-text {
          color: #FFB74D;
          font-weight: 600;
          margin-bottom: 12px;
          }

        .sol-box {
          border-left: 3px solid #FF8C00;
          padding-left: 15px;
          margin-top: 10px;
        }

        .sol-line {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 8px;
        }

        .fraction {
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          margin: 0 4px;
        }

        .numerator {
          display: block;
          border-bottom: 1px solid #fff;
          padding: 0 2px;
        }

        .denominator {
          display: block;
          padding: 0 2px;
        }

        .property-name {
          color: #81C784;
          font-weight: 600;
          background: rgba(129, 199, 132, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .ans-tag {
          color: #FF8C00;
          font-weight: bold;
          margin-right: 8px;
        }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

      <div class="ex-container">
        <!-- Question 1 -->
        <div class="q-card">
          <div class="q-text">Q1. Name the property under multiplication used in each of the following:</div>
          
          <div class="sol-box">
            <div class="sol-line">
              (i) <span class="fraction"><span class="numerator">-4</span><span class="denominator">5</span></span> × 1 = 1 × <span class="fraction"><span class="numerator">-4</span><span class="denominator">5</span></span> = <span class="fraction"><span class="numerator">-4</span><span class="denominator">5</span></span>
              <br/>
              <span class="ans-tag">Ans:</span> <span class="property-name">Multiplicative Identity</span> (1 is the identity).
            </div>
            
            <div class="sol-line" style="margin-top: 15px;">
              (ii) <span class="fraction"><span class="numerator">-13</span><span class="denominator">17</span></span> × <span class="fraction"><span class="numerator">-2</span><span class="denominator">7</span></span> = <span class="fraction"><span class="numerator">-2</span><span class="denominator">7</span></span> × <span class="fraction"><span class="numerator">-13</span><span class="denominator">17</span></span>
              <br/>
              <span class="ans-tag">Ans:</span> <span class="property-name">Commutative Property</span> (a × b = b × a).
            </div>

            <div class="sol-line" style="margin-top: 15px;">
              (iii) <span class="fraction"><span class="numerator">-19</span><span class="denominator">29</span></span> × <span class="fraction"><span class="numerator">29</span><span class="denominator">-19</span></span> = 1
              <br/>
              <span class="ans-tag">Ans:</span> <span class="property-name">Multiplicative Inverse</span> (Product is 1).
            </div>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="q-card">
          <div class="q-text">Q2. Tell what property allows you to compute <span class="fraction"><span class="numerator">1</span><span class="denominator">3</span></span> × (6 × <span class="fraction"><span class="numerator">4</span><span class="denominator">3</span></span>) as (<span class="fraction"><span class="numerator">1</span><span class="denominator">3</span></span> × 6) × <span class="fraction"><span class="numerator">4</span><span class="denominator">3</span></span>.</div>
          <div class="sol-box">
            <div class="sol-line">
              <span class="ans-tag">Ans:</span> <span class="property-name">Associative Property</span> [a × (b × c) = (a × b) × c].
            </div>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="q-card">
          <div class="q-text">Q3. The product of two rational numbers is always a ________.</div>
          <div class="sol-box">
            <div class="sol-line">
              <span class="ans-tag">Ans:</span> <span class="property-name">Rational Number</span> (This is the Closure Property).
            </div>
          </div>
        </div>

      </div>
    `
  }
};
