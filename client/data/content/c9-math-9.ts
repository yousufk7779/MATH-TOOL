import { ChapterContent } from "../types";

export const c9Math9: ChapterContent = {
  id: "c9-math-9",
  number: 9,
  title: "Heron's Formula",
  isHtmlView: true,
  introduction:
    "Heron's formula is used to calculate the area of a triangle when the lengths of all three sides are known. Unlike the standard formula (1/2 × base × height), Heron's formula does not require the height of the triangle, making it extremely useful for any triangle with given side lengths.",
  exercises: [
    { id: "ex9-1", name: "Ex 9.1", questions: [] },
  ],
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #00C6FF; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #00C6FF; padding-left: 15px; margin-top: 15px; background: rgba(0, 198, 255, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #00C6FF !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #00C6FF !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(0, 198, 255, 0.05) !important; border-left: 4px solid #00C6FF !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #00C6FF !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #00C6FF !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #00C6FF !important; font-weight: 700; }
        strong { color: #00C6FF !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #00C6FF; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(0, 198, 255, 0.05); color: #00C6FF; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">

      <div class="step">For a triangle with sides <span class="highlight">a, b, and c</span>:</div>
      
      <h3>1. Semi-perimeter (s):</h3>
      <div class="formula-box">s = (a + b + c) / 2</div>

      <h3>2. Heron's Formula for Area:</h3>
      <div class="formula-box">Area = &radic;[s(s - a)(s - b)(s - c)]</div>

      <h3>Applications:</h3>
      <div class="step">1. Finding the area of any triangle when height is not given.</div>
      <div class="step">2. Finding the area of quadrilaterals by dividing them into two triangles.</div>
    </div>
`,
  htmlExercises: {
    "ex9-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #00C6FF; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #00C6FF; padding-left: 15px; margin-top: 15px; background: rgba(0, 198, 255, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #00C6FF !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #00C6FF !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(0, 198, 255, 0.05) !important; border-left: 4px solid #00C6FF !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #00C6FF !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #00C6FF !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #00C6FF !important; font-weight: 700; }
        strong { color: #00C6FF !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #00C6FF; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(0, 198, 255, 0.05); color: #00C6FF; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. A traffic signal board, indicating 'SCHOOL AHEAD', is an equilateral triangle with side 'a'. Find the area of the signal board, using Heron's formula. If its perimeter is 180 cm, what will be the area?</div>
        <svg viewBox="0 0 240 190" class="ex-img">
          <path d="M40,165 L200,165 L120,26.44 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="116.5" y="187" font-size="13" fill="white">a</text>
          <text x="59.15" y="92.22" font-size="13" fill="white">a</text>
          <text x="173.85" y="92.22" font-size="13" fill="white">a</text>
          <text x="92" y="118" font-size="13" fill="white">SCHOOL</text>
          <text x="97" y="137" font-size="13" fill="white">AHEAD</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Sides: a, a, a<br/>
          s = <span class='frac'><span class='num'>a + a + a</span><span class='den'>2</span></span> = <span class='frac'><span class='num'>3a</span><span class='den'>2</span></span><br/>
          Area = √[s(s − a)(s − b)(s − c)] (Heron's formula)<br/>
          = √[<span class='frac'><span class='num'>3a</span><span class='den'>2</span></span> × <span class='frac'><span class='num'>a</span><span class='den'>2</span></span> × <span class='frac'><span class='num'>a</span><span class='den'>2</span></span> × <span class='frac'><span class='num'>a</span><span class='den'>2</span></span>] = √[<span class='frac'><span class='num'>3a⁴</span><span class='den'>16</span></span>] = <span class='frac'><span class='num'>√3</span><span class='den'>4</span></span>a²<br/>
          Perimeter = 180 cm, so 3a = 180 and a = 60 cm<br/>
          Area = <span class='frac'><span class='num'>√3</span><span class='den'>4</span></span> × 60² = <span class='frac'><span class='num'>√3</span><span class='den'>4</span></span> × 3600 = 900√3 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area = <span class='frac'><span class='num'>√3</span><span class='den'>4</span></span>a²; for perimeter 180 cm, area = 900√3 cm²</span></div>
        </div>

        <div class="question">2. Triangular side walls of a flyover have sides 122m, 22m and 120m. Rent is Rs 5000 per m&sup2; per year. Company hired it for 3 months. Find total rent.</div>
        <svg viewBox="0 0 240 100" class="ex-img">
          <path d="M15,70 L189,70 L189,38.1 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <path d="M182,70 L182,63 L189,63" fill="none" stroke="white" stroke-width="1"/>
          <text x="84.5" y="92" font-size="13" fill="white">120 m</text>
          <text x="80.87" y="42.33" font-size="13" fill="white">122 m</text>
          <text x="195" y="59.05" font-size="13" fill="white">22 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          a = 122 m, b = 22 m, c = 120 m<br/>
          s = <span class='frac'><span class='num'>122 + 22 + 120</span><span class='den'>2</span></span> = 132 m<br/>
          Area = √[132(132 − 122)(132 − 22)(132 − 120)]<br/>
          = √[132 × 10 × 110 × 12]<br/>
          = √[(11 × 12) × 10 × (11 × 10) × 12] = 11 × 12 × 10 = 1320 m²<br/>
          Rent for 1 year = 1320 × 5000 = Rs 66,00,000<br/>
          Rent for 3 months = <span class='frac'><span class='num'>3</span><span class='den'>12</span></span> × 66,00,000 = Rs 16,50,000<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Total rent = Rs 16,50,000</span></div>
        </div>

        <div class="question">3. There is a slide in a park. One side wall is painted with message "KEEP THE PARK GREEN AND CLEAN". Sides are 15m, 11m and 6m. Find area.</div>
        <svg viewBox="0 0 240 115" class="ex-img">
          <path d="M22,75 L217,75 L156.33,25.97 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="105.5" y="97" font-size="13" fill="white">15 m</text>
          <text x="67.7" y="39.52" font-size="13" fill="white">11 m</text>
          <text x="188.49" y="45.38" font-size="13" fill="white">6 m</text>
          <text x="22" y="110" font-size="10" fill="#00C6FF">KEEP THE PARK GREEN AND CLEAN</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          a = 15 m, b = 11 m, c = 6 m<br/>
          s = <span class='frac'><span class='num'>15 + 11 + 6</span><span class='den'>2</span></span> = 16 m<br/>
          Area = √[16(16 − 15)(16 − 11)(16 − 6)]<br/>
          = √[16 × 1 × 5 × 10] = √800<br/>
          = √(400 × 2) = 20√2 m²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area = 20√2 m²</span></div>
        </div>

        <div class="question">4. Find the area of a triangle two sides of which are 18cm and 10cm and the perimeter is 42cm.</div>
        <svg viewBox="0 0 240 130" class="ex-img">
          <path d="M38,105 L200,105 L143,35.35 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="101.5" y="127" font-size="13" fill="white">18 cm</text>
          <text x="58.26" y="61.01" font-size="13" fill="white">14 cm</text>
          <text x="174.54" y="66.95" font-size="13" fill="white">10 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Third side = 42 − (18 + 10) = 14 cm<br/>
          s = <span class='frac'><span class='num'>42</span><span class='den'>2</span></span> = 21 cm<br/>
          Area = √[21(21 − 18)(21 − 10)(21 − 14)]<br/>
          = √[21 × 3 × 11 × 7]<br/>
          = √[21 × 21 × 11] = 21√11 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area = 21√11 cm²</span></div>
        </div>

        <div class="question">5. Sides of a triangle are in the ratio of 12 : 17 : 25 and its perimeter is 540cm. Find its area.</div>
        <svg viewBox="0 0 240 110" class="ex-img">
          <path d="M30,85 L210,85 L99.12,33.16 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="99" y="107" font-size="13" fill="white">250 cm</text>
          <text x="25.8" y="50.48" font-size="13" fill="white">120 cm</text>
          <text x="142.83" y="52.3" font-size="13" fill="white">170 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the sides be 12x, 17x and 25x.<br/>
          12x + 17x + 25x = 540, so 54x = 540 and x = 10<br/>
          Sides: 120 cm, 170 cm, 250 cm<br/>
          s = <span class='frac'><span class='num'>540</span><span class='den'>2</span></span> = 270 cm<br/>
          Area = √[270(270 − 120)(270 − 170)(270 − 250)]<br/>
          = √[270 × 150 × 100 × 20]<br/>
          = √[9000 × 9000] = 9000 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area = 9000 cm²</span></div>
        </div>

        <div class="question">6. An isosceles triangle has perimeter 30 cm and each of the equal sides is 12 cm. Find the area of the triangle.</div>
        <svg viewBox="0 0 240 175" class="ex-img">
          <path d="M87,150 L153,150 L120,22.19 Z" fill="rgba(0,198,255,0.12)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="106" y="172" font-size="13" fill="white">6 cm</text>
          <text x="53.13" y="86.85" font-size="13" fill="white">12 cm</text>
          <text x="147.99" y="87.85" font-size="13" fill="white">12 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Third side = 30 − (12 + 12) = 6 cm<br/>
          s = <span class='frac'><span class='num'>30</span><span class='den'>2</span></span> = 15 cm<br/>
          Area = √[15(15 − 12)(15 − 12)(15 − 6)]<br/>
          = √[15 × 3 × 3 × 9]<br/>
          = √[81 × 15] = 9√15 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area = 9√15 cm²</span></div>
        </div>
      </div>
`,
  },
  mcqs: [
    {
      id: "m1",
      question: "Heron's Formula for area of a triangle is:",
      options: [
        "1/2 × b × h",
        "√[s(s-a)(s-b)(s-c)]",
        "a + b + c",
        "None of these",
      ],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question:
        "If the perimeter of an equilateral triangle is 60cm, then its side is:",
      options: ["10cm", "20cm", "30cm", "60cm"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question: "Semi-perimeter 's' is equal to:",
      options: ["a + b + c", "(a+b+c)/2", "(a+b+c)/3", "2(a+b+c)"],
      correctAnswer: "B",
    },
    {
      id: "m4",
      question: "Area of an equilateral triangle with side 'a' is:",
      options: ["(√3/4)a²", "(√3/2)a²", "a²/4", "√3a²"],
      correctAnswer: "A",
    },
    {
      id: "m5",
      question: "If sides of a triangle are 3cm, 4cm, 5cm, its area is:",
      options: ["6 cm²", "12 cm²", "15 cm²", "20 cm²"],
      correctAnswer: "A",
    },
    {
      id: "m6",
      question: "Heron's formula is particularly useful when:",
      options: [
        "Height is given",
        "All three sides are given",
        "Base is given",
        "Angle is given",
      ],
      correctAnswer: "B",
    },
    {
      id: "m7",
      question:
        "If semi-perimeter is 15 and sides are 10, 10, 10, then area is:",
      options: ["√[15×5×5×5]", "15√5", "25√15", "None"],
      correctAnswer: "A",
    },
    {
      id: "m8",
      question: "The unit of area in Heron's formula will be:",
      options: ["cm", "cm²", "cm³", "Any of these"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question: "If a=b=c, then s-a is:",
      options: ["a/2", "s/3", "0", "a"],
      correctAnswer: "A",
    },
    {
      id: "m10",
      question:
        "A quadrilateral can be divided into _____ triangles to find its area using Heron's formula.",
      options: ["Two", "Three", "Four", "One"],
      correctAnswer: "A",
    },
  ],
};
