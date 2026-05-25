import { ChapterContent } from "../types";

const ex61Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6CAB; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6CAB; padding-left: 15px; margin-top: 15px; background: rgba(255, 108, 171, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6CAB; font-weight: 700; }
    .step-label { color: #FF80AB; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Which of the following numbers are not perfect cubes?</div>
      <div class="q-subtext">(i) 216</div>
      <div class="q-subtext">(ii) 128</div>
      <div class="q-subtext">(iii) 1000</div>
      <div class="q-subtext">(iv) 100</div>
      <div class="q-subtext">(v) 46656</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 216:</span> Prime factorisation is 2 × 2 × 2 × 3 × 3 × 3.</div>
        <div class="sol-step">Here, factors 2 and 3 can be grouped in triples.</div>
        <div class="sol-step">So, 216 is a <span class="ans-highlight">perfect cube</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) 128:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 2.</div>
        <div class="sol-step">One factor 2 is left without a triple.</div>
        <div class="sol-step">So, 128 is <span class="ans-highlight">not a perfect cube</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii) 1000:</span> Prime factorisation is 2 × 2 × 2 × 5 × 5 × 5.</div>
        <div class="sol-step">Here, factors 2 and 5 can be grouped in triples.</div>
        <div class="sol-step">So, 1000 is a <span class="ans-highlight">perfect cube</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv) 100:</span> Prime factorisation is 2 × 2 × 5 × 5.</div>
        <div class="sol-step">None of the factors can be grouped in triples.</div>
        <div class="sol-step">So, 100 is <span class="ans-highlight">not a perfect cube</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(v) 46656:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3 × 3 × 3 × 3.</div>
        <div class="sol-step">All factors can be grouped in triples.</div>
        <div class="sol-step">So, 46656 is a <span class="ans-highlight">perfect cube</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Find the smallest number by which each of the following numbers must be multiplied to obtain a perfect cube.</div>
      <div class="q-subtext">(i) 243</div>
      <div class="q-subtext">(ii) 256</div>
      <div class="q-subtext">(iii) 72</div>
      <div class="q-subtext">(iv) 675</div>
      <div class="q-subtext">(v) 100</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 243:</span> Prime factorisation is 3 × 3 × 3 × 3 × 3.</div>
        <div class="sol-step">We need one more 3 to make a perfect cube.</div>
        <div class="sol-step">Smallest number to be multiplied is <span class="ans-highlight">3</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) 256:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2.</div>
        <div class="sol-step">We need one more 2 to make a perfect cube.</div>
        <div class="sol-step">Smallest number to be multiplied is <span class="ans-highlight">2</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii) 72:</span> Prime factorisation is 2 × 2 × 2 × 3 × 3.</div>
        <div class="sol-step">We need one more 3 to make a perfect cube.</div>
        <div class="sol-step">Smallest number to be multiplied is <span class="ans-highlight">3</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv) 675:</span> Prime factorisation is 3 × 3 × 3 × 5 × 5.</div>
        <div class="sol-step">We need one more 5 to make a perfect cube.</div>
        <div class="sol-step">Smallest number to be multiplied is <span class="ans-highlight">5</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(v) 100:</span> Prime factorisation is 2 × 2 × 5 × 5.</div>
        <div class="sol-step">We need one more 2 and one more 5 to make a perfect cube.</div>
        <div class="sol-step">Smallest number to be multiplied is 2 × 5 = <span class="ans-highlight">10</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the smallest number by which each of the following numbers must be divided to obtain a perfect cube.</div>
      <div class="q-subtext">(i) 81</div>
      <div class="q-subtext">(ii) 128</div>
      <div class="q-subtext">(iii) 135</div>
      <div class="q-subtext">(iv) 192</div>
      <div class="q-subtext">(v) 704</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 81:</span> Prime factorisation is 3 × 3 × 3 × 3.</div>
        <div class="sol-step">The factor 3 is left without a triple.</div>
        <div class="sol-step">Smallest number to divide by is <span class="ans-highlight">3</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) 128:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 2.</div>
        <div class="sol-step">The factor 2 is left without a triple.</div>
        <div class="sol-step">Smallest number to divide by is <span class="ans-highlight">2</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iii) 135:</span> Prime factorisation is 3 × 3 × 3 × 5.</div>
        <div class="sol-step">The factor 5 is left without a triple.</div>
        <div class="sol-step">Smallest number to divide by is <span class="ans-highlight">5</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(iv) 192:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 3.</div>
        <div class="sol-step">The factor 3 is left without a triple.</div>
        <div class="sol-step">Smallest number to divide by is <span class="ans-highlight">3</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(v) 704:</span> Prime factorisation is 2 × 2 × 2 × 2 × 2 × 2 × 11.</div>
        <div class="sol-step">The factor 11 is left without a triple.</div>
        <div class="sol-step">Smallest number to divide by is <span class="ans-highlight">11</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Imtiyaz makes a cuboid of plasticine of sides 5 cm, 2cm, 5 cm. How many such cuboids will he need to form a cube?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume of cuboid = Length × Breadth × Height.</div>
        <div class="sol-step">Volume = 5 cm × 2 cm × 5 cm = 50 cm³.</div>
        <div class="sol-step">Prime factors of volume = 5 × 2 × 5.</div>
        <div class="sol-step">To make it a perfect cube, we need factors in triples.</div>
        <div class="sol-step">We need one more 5 and two more 2s.</div>
        <div class="sol-step">Number of cuboids needed = 5 × 2 × 2 = <span class="ans-highlight">20</span>.</div>
      </div>
    </div>
  </div>
`;

const ex62Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FF6CAB; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FF6CAB; padding-left: 15px; margin-top: 15px; background: rgba(255, 108, 171, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FF6CAB; font-weight: 700; }
    .step-label { color: #FF80AB; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the cube root of each of the following numbers by prime factorisation method.</div>
      <div class="q-subtext">(i) 64</div>
      <div class="q-subtext">(ii) 512</div>
      <div class="q-subtext">(iii) 10648</div>
      <div class="q-subtext">(iv) 27000</div>
      <div class="q-subtext">(v) 15625</div>
      <div class="q-subtext">(vi) 13824</div>
      <div class="q-subtext">(vii) 110592</div>
      <div class="q-subtext">(viii) 46656</div>
      <div class="q-subtext">(ix) 175616</div>
      <div class="q-subtext">(x) 91125</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i) 64:</span> 64 = 2 × 2 × 2 × 2 × 2 × 2. So, ∛64 = 2 × 2 = <span class="ans-highlight">4</span>.</div>
        <div class="sol-step"><span class="step-label">(ii) 512:</span> 512 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2. So, ∛512 = 2 × 2 × 2 = <span class="ans-highlight">8</span>.</div>
        <div class="sol-step"><span class="step-label">(iii) 10648:</span> 10648 = 2 × 2 × 2 × 11 × 11 × 11. So, ∛10648 = 2 × 11 = <span class="ans-highlight">22</span>.</div>
        <div class="sol-step"><span class="step-label">(iv) 27000:</span> 27000 = 3 × 3 × 3 × 10 × 10 × 10. So, ∛27000 = 3 × 10 = <span class="ans-highlight">30</span>.</div>
        <div class="sol-step"><span class="step-label">(v) 15625:</span> 15625 = 5 × 5 × 5 × 5 × 5 × 5. So, ∛15625 = 5 × 5 = <span class="ans-highlight">25</span>.</div>
        <div class="sol-step"><span class="step-label">(vi) 13824:</span> 13824 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3. So, ∛13824 = 2 × 2 × 2 × 3 = <span class="ans-highlight">24</span>.</div>
        <div class="sol-step"><span class="step-label">(vii) 110592:</span> 110592 = 2¹² × 3³. So, ∛110592 = 2⁴ × 3 = 16 × 3 = <span class="ans-highlight">48</span>.</div>
        <div class="sol-step"><span class="step-label">(viii) 46656:</span> 46656 = 2⁶ × 3⁶. So, ∛46656 = 2² × 3² = 4 × 9 = <span class="ans-highlight">36</span>.</div>
        <div class="sol-step"><span class="step-label">(ix) 175616:</span> 175616 = 2⁹ × 7³. So, ∛175616 = 2³ × 7 = 8 × 7 = <span class="ans-highlight">56</span>.</div>
        <div class="sol-step"><span class="step-label">(x) 91125:</span> 91125 = 3⁶ × 5³. So, ∛91125 = 3² × 5 = 9 × 5 = <span class="ans-highlight">45</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. State true or false.</div>
      <div class="q-subtext">(i) Cube of any odd number is even.</div>
      <div class="q-subtext">(ii) A perfect cube does not end with two zeros.</div>
      <div class="q-subtext">(iii) If square of a number ends with 5, then its cube ends with 25.</div>
      <div class="q-subtext">(iv) There is no perfect cube which ends with 8.</div>
      <div class="q-subtext">(v) The cube of a two digit number may be a three digit number.</div>
      <div class="q-subtext">(vi) The cube of a two digit number may have seven or more digits.</div>
      <div class="q-subtext">(vii) The cube of a single digit number may be a single digit number.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> <span class="ans-highlight">False</span>. Example: 3³ = 27 (odd).</div>
        <div class="sol-step"><span class="step-label">(ii)</span> <span class="ans-highlight">True</span>. A perfect cube ending in zeros will have them in multiples of 3.</div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class="ans-highlight">False</span>. Example: 15² = 225, but 15³ = 3375 (does not end in 25).</div>
        <div class="sol-step"><span class="step-label">(iv)</span> <span class="ans-highlight">False</span>. Example: 2³ = 8, 12³ = 1728.</div>
        <div class="sol-step"><span class="step-label">(v)</span> <span class="ans-highlight">False</span>. Smallest two digit number is 10, and 10³ = 1000 (four digits).</div>
        <div class="sol-step"><span class="step-label">(vi)</span> <span class="ans-highlight">False</span>. Largest two digit number is 99, and 99³ = 970299 (six digits).</div>
        <div class="sol-step"><span class="step-label">(vii)</span> <span class="ans-highlight">True</span>. Example: 1³ = 1, 2³ = 8.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. You are told that 1,331 is a perfect cube. Can you guess without factorisation what is its cube root? Similarly, guess the cube roots of 4913, 12167, 32768.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">For 1331:</span></div>
        <div class="sol-step">Split the number into two groups from right: 1 and 331.</div>
        <div class="sol-step">331 ends in 1, so the unit digit of cube root is 1.</div>
        <div class="sol-step">The other group is 1. 1³ = 1. So tens digit is 1.</div>
        <div class="sol-step">Cube root is <span class="ans-highlight">11</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">For 4913:</span></div>
        <div class="sol-step">Split the number into two groups: 4 and 913.</div>
        <div class="sol-step">913 ends in 3, so unit digit of cube root is 7 (since 7³ = 343).</div>
        <div class="sol-step">The other group is 4. We know 1³ < 4 < 2³. Tens digit is 1.</div>
        <div class="sol-step">Cube root is <span class="ans-highlight">17</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">For 12167:</span></div>
        <div class="sol-step">Split into two groups: 12 and 167.</div>
        <div class="sol-step">167 ends in 7, so unit digit is 3 (since 3³ = 27).</div>
        <div class="sol-step">The other group is 12. We know 2³ < 12 < 3³. Tens digit is 2.</div>
        <div class="sol-step">Cube root is <span class="ans-highlight">23</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">For 32768:</span></div>
        <div class="sol-step">Split into two groups: 32 and 768.</div>
        <div class="sol-step">768 ends in 8, so unit digit is 2 (since 2³ = 8).</div>
        <div class="sol-step">The other group is 32. We know 3³ < 32 < 4³. Tens digit is 3.</div>
        <div class="sol-step">Cube root is <span class="ans-highlight">32</span>.</div>
      </div>
    </div>
  </div>
`;

export const c8Math6: ChapterContent = {
  id: "c8-math-6",
  number: 6,
  title: "Cubes and Cube Roots",
  introduction:
    "In this chapter, we will learn about perfect cubes and the concept of cube roots. We will explore methods to find them, including prime factorisation and estimation.",
  mcqs: [
    {
      id: "m1",
      question: "Which of the following is a perfect cube?",
      options: ["100", "125", "150", "200"],
      correctAnswer: "125",
    },
    {
      id: "m2",
      question: "The cube of an odd number is always:",
      options: ["Even", "Odd", "Prime", "Zero"],
      correctAnswer: "Odd",
    },
    {
      id: "m3",
      question: "The cube root of 64 is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "4",
    },
    {
      id: "m4",
      question: "If a number ends with 2, its cube will end with:",
      options: ["2", "4", "6", "8"],
      correctAnswer: "8",
    },
    {
      id: "m5",
      question: "Which of the following numbers is not a perfect cube?",
      options: ["216", "343", "512", "600"],
      correctAnswer: "600",
    },
    {
      id: "m6",
      question: "The cube of 10 is:",
      options: ["100", "1000", "10000", "10"],
      correctAnswer: "1000",
    },
    {
      id: "m7",
      question: "Find the cube root of 27:",
      options: ["3", "9", "2", "6"],
      correctAnswer: "3",
    },
    {
      id: "m8",
      question:
        "If a perfect cube ends in 0, how many zeroes must it end with at minimum?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "3",
    },
    {
      id: "m9",
      question: "What is the cube of 5?",
      options: ["25", "75", "100", "125"],
      correctAnswer: "125",
    },
    {
      id: "m10",
      question: "The unit digit of the cube of 7 is:",
      options: ["1", "3", "7", "9"],
      correctAnswer: "3",
    },
  ],
  summary: [
    "Numbers obtained when a number is multiplied by itself three times are called cube numbers.",
    "The cube of an even number is always even, and the cube of an odd number is always odd.",
    "If a number ends in digits 1, 4, 5, 6 or 9, its cube also ends in the same digit.",
    "A perfect cube ending in 0 must have zeroes in multiples of 3.",
  ],
  exercises: [
    { id: "ex6-1", name: "Exercise 6.1", questions: [] },
    { id: "ex6-2", name: "Exercise 6.2", questions: [] },
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
        color: #FF6CAB;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .prop-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        overflow: hidden;
      }

      .prop-table th, .prop-table td {
        padding: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #FF80AB;
        font-weight: 700;
      }

      .highlight { color: #FF80AB; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }

      .formula-badge {
        background: rgba(255, 108, 171, 0.2);
        border: 1px dashed #FF6CAB;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #FF80AB;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          A number is called a <strong>Perfect Cube</strong> if it can be expressed as the product of a number by itself three times. For example, 8 is a perfect cube because 8 = 2 × 2 × 2. Finding the cube root is the inverse operation of cubing a number.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Key Concepts & Properties</div>
        <table class="prop-table">
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><strong>Perfect Cubes</strong></td>
            <td>
              Numbers like 1, 8, 27, 64, 125 are perfect cubes. They are obtained by multiplying an integer by itself three times.
            </td>
          </tr>
          <tr>
            <td><strong>Units Digit</strong></td>
            <td>
              If a number ends in <span class="highlight">2</span>, its cube ends in <span class="highlight">8</span> (and vice versa).<br/>
              If a number ends in <span class="highlight">3</span>, its cube ends in <span class="highlight">7</span> (and vice versa).
            </td>
          </tr>
          <tr>
            <td><strong>Cube Root Notation</strong></td>
            <td>
              The symbol for cube root is:
              <div class="formula-badge">∛</div>
              Example: ∛125 = 5.
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex6-1": ex61Content,
    "ex6-2": ex62Content,
  },
};
