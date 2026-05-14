import { ChapterContent } from "../types";

export const c9Math9: ChapterContent = {
  id: "c9-math-9",
  number: 9,
  title: "Heron's Formula",
  isHtmlView: true,
  introduction: "Heron's formula is used to calculate the area of a triangle when the lengths of all three sides are known. Unlike the standard formula (1/2 × base × height), Heron's formula does not require the height of the triangle, making it extremely useful for any triangle with given side lengths.",
  exercises: [
    { id: "ex9-1", name: "Exercise 9.1", questions: [] },
    { id: "ex9-2", name: "Exercise 9.2", questions: [] }
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
        <svg viewBox="0 -10 240 190" class="ex-img">
          <path d="M120,20 L40,160 L200,160 Z" fill="rgba(0,198,255,0.1)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="75" y="100" fill="white" font-size="14">SCHOOL</text>
          <text x="80" y="125" fill="white" font-size="14">AHEAD</text>
          <text x="115" y="175" fill="white">a</text>
          <text x="70" y="90" fill="white" transform="rotate(-60 70 90)">a</text>
          <text x="170" y="90" fill="white" transform="rotate(60 170 90)">a</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Sides are a, a, a. Semi-perimeter s = (a+a+a)/2 = 3a/2.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area = &radic;[s(s-a)(s-a)(s-a)] = &radic;[ (3a/2)(a/2)(a/2)(a/2) ] = &radic;[3a&sup4;/16] = <span class="highlight">(&radic;3/4)a&sup2;</span>.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Given Perimeter = 180 cm &rArr; 3a = 180 &rArr; a = 60 cm.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Area = (&radic;3/4) &times; 60&sup2; = (&radic;3/4) &times; 3600 = 900&radic;3 cm&sup2;.</div>
        </div>

        <div class="question">2. Triangular side walls of a flyover have sides 122m, 22m and 120m. Rent is Rs 5000 per m&sup2; per year. Company hired it for 3 months. Find total rent.</div>
        <svg viewBox="0 -10 240 130" class="ex-img">
          <path d="M20,100 L220,100 L220,80 C180,40 60,40 20,80 Z" fill="#2A2A3C" stroke="white" stroke-width="2"/>
          <path d="M20,100 L140,100 L140,55 Z" fill="rgba(0,198,255,0.3)" stroke="#00C6FF" stroke-width="2"/>
          <text x="70" y="115" fill="white" font-size="12">120m</text>
          <text x="145" y="80" fill="white" font-size="12">22m</text>
          <text x="40" y="70" fill="white" font-size="12">122m</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> a=122, b=22, c=120. s = (122+22+120)/2 = 264/2 = 132m.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area = &radic;[132(132-122)(132-22)(132-120)] = &radic;[132 &times; 10 &times; 110 &times; 12].</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &radic;[12 &times; 11 &times; 10 &times; 11 &times; 10 &times; 12] = 12 &times; 11 &times; 10 = 1320 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Rent for 1 year = 1320 &times; 5000 = 66,00,000.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Rent for 3 months = 66,00,000 &times; (3/12) = <span class="highlight">Rs 16,50,000</span>.</div>
        </div>

        <div class="question">3. There is a slide in a park. One side wall is painted with message "KEEP THE PARK GREEN AND CLEAN". Sides are 15m, 11m and 6m. Find area.</div>
        <svg viewBox="0 -10 240 110" class="ex-img">
          <path d="M20,80 L220,80 L180,20 Z" fill="rgba(0,198,255,0.2)" stroke="#00C6FF" stroke-width="2.5"/>
          <text x="120" y="95" fill="white" font-size="12">15 m</text>
          <text x="205" y="55" fill="white" font-size="12">6 m</text>
          <text x="80" y="45" fill="white" font-size="12">11 m</text>
          <text x="55" y="60" font-size="10" fill="#00C6FF">KEEP THE PARK GREEN AND CLEAN</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> a=15, b=11, c=6. s = (15+11+6)/2 = 32/2 = 16m.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area = &radic;[16(16-15)(16-11)(16-6)] = &radic;[16 &times; 1 &times; 5 &times; 10].</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &radic;[160 &times; 5] = &radic;[800] = <span class="highlight">20&radic;2 m&sup2;</span>.</div>
        </div>

        <div class="question">4. Find the area of a triangle two sides of which are 18cm and 10cm and the perimeter is 42cm.</div>
        <svg viewBox="0 -10 240 150" class="ex-img">
          <path d="M40,120 L200,120 L130,30 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <text x="110" y="140" fill="white">14 cm</text>
          <text x="175" y="75" fill="white">10 cm</text>
          <text x="50" y="75" fill="white">18 cm</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> a=18, b=10. c = Perimeter - (a+b) = 42 - 28 = 14cm.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> s = 42/2 = 21cm.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area = &radic;[21(21-18)(21-10)(21-14)] = &radic;[21 &times; 3 &times; 11 &times; 7].</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> &radic;[21 &times; 21 &times; 11] = <span class="highlight">21&radic;11 cm&sup2;</span>.</div>
        </div>

        <div class="question">5. Sides of a triangle are in the ratio of 12 : 17 : 25 and its perimeter is 540cm. Find its area.</div>
        <svg viewBox="0 -10 240 150" class="ex-img">
          <path d="M30,120 L210,120 L160,30 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <text x="110" y="135" fill="white">250 cm</text>
          <text x="190" y="80" fill="white">170 cm</text>
          <text x="60" y="80" fill="white">120 cm</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Let sides be 12x, 17x, 25x. 12x + 17x + 25x = 540 &rArr; 54x = 540 &rArr; x = 10.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Sides: a=120, b=170, c=250. s = 540/2 = 270cm.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area = &radic;[270(150)(100)(20)] = &radic;[270 &times; 150 &times; 2000].</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> &radic;[81000000] = <span class="highlight">9000 cm&sup2;</span>.</div>
        </div>

        <div class="question">6. An isosceles triangle has perimeter 30 cm and each of the equal sides is 12 cm. Find the area of the triangle.</div>
        <svg viewBox="0 -10 240 150" class="ex-img">
          <path d="M60,120 L180,120 L120,30 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <text x="110" y="135" fill="white">6 cm</text>
          <text x="150" y="80" fill="white">12 cm</text>
          <text x="70" y="80" fill="white">12 cm</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> a=12, b=12. c = 30 - 24 = 6cm. s = 30/2 = 15cm.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area = &radic;[15(15-12)(15-12)(15-6)] = &radic;[15 &times; 3 &times; 3 &times; 9].</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> &radic;[15 &times; 81] = <span class="highlight">9&radic;15 cm&sup2;</span>.</div>
        </div>
      </div>
`,
    "ex9-2": `
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
        <div class="question">1. A park in the shape of a quadrilateral ABCD has &ang;C = 90&deg;, AB=9m, BC=12m, CD=5m, AD=8m. Area?</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <path d="M50,150 L170,150 L170,100 L70,30 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <line x1="170" y1="150" x2="70" y2="30" stroke="white" stroke-width="1" stroke-dasharray="4"/>
          <text x="60" y="25" fill="white">A</text>
          <text x="40" y="155" fill="white">B</text>
          <text x="175" y="155" fill="white">C</text>
          <text x="175" y="100" fill="white">D</text>
          <text x="110" y="165" fill="white">12m</text>
          <text x="180" y="125" fill="white">5m</text>
          <text x="110" y="100" fill="white" transform="rotate(-50 110 100)">13m</text>
          <text x="100" y="60" fill="white">8m</text>
          <text x="60" y="100" fill="white">9m</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Join BD. In right &Delta;BCD, BD = &radic;[12&sup2; + 5&sup2;] = &radic;169 = 13m.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area &Delta;BCD = 1/2 &times; 12 &times; 5 = 30 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> For &Delta;ABD, sides are 9, 8, 13. s = (9+8+13)/2 = 15m.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Area &Delta;ABD = &radic;[15(15-9)(15-8)(15-13)] = &radic;[15 &times; 6 &times; 7 &times; 2] = &radic;1260 &approx; 35.5 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Total Area = 30 + 35.5 = <span class="highlight">65.5 m&sup2;</span>.</div>
        </div>

        <div class="question">2. Find area of quadrilateral ABCD: AB=3cm, BC=4cm, CD=4cm, DA=5cm, AC=5cm.</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <path d="M60,150 L140,150 L180,80 L100,20 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <line x1="60" y1="150" x2="180" y2="80" stroke="white" stroke-width="1" stroke-dasharray="4"/>
          <text x="50" y="155" fill="white">A</text>
          <text x="145" y="155" fill="white">B</text>
          <text x="185" y="80" fill="white">C</text>
          <text x="95" y="15" fill="white">D</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> &Delta;ABC sides: 3, 4, 5. Since 3&sup2;+4&sup2;=5&sup2;, it is a right triangle. Area = 1/2 &times; 3 &times; 4 = 6 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> &Delta;ADC sides: 5, 4, 5. s = (5+4+5)/2 = 7cm.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area &Delta;ADC = &radic;[7(7-5)(7-4)(7-5)] = &radic;[7 &times; 2 &times; 3 &times; 2] = &radic;84 &approx; 9.17 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Total Area = 6 + 9.17 = <span class="highlight">15.17 cm&sup2;</span>.</div>
        </div>

        <div class="question">3. Radha made an aeroplane with coloured paper. Find the total area.</div>
        <svg viewBox="0 -10 240 250" class="ex-img">
          <path d="M120,20 L105,70 L135,70 Z" fill="#00C6FF" stroke="white" stroke-width="1.5"/>
          <rect x="105" y="70" width="30" height="100" fill="#42A5F5" stroke="white" stroke-width="1"/>
          <path d="M105,80 L30,120 L105,120 Z M135,80 L210,120 L135,120 Z" fill="#90CAF9" stroke="white" stroke-width="1"/>
          <path d="M105,170 L95,190 L145,190 L135,170 Z" fill="#1E88E5" stroke="white" stroke-width="1"/>
          <text x="112" y="55" fill="white" font-size="10">I</text>
          <text x="115" y="125" fill="white" font-size="12">II</text>
          <text x="115" y="185" fill="white" font-size="10">III</text>
          <text x="60" y="105" fill="white" font-size="10">IV</text>
          <text x="170" y="105" fill="white" font-size="10">V</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Part I:</span> Isosceles triangle (5, 5, 1). s=5.5. Area = &radic;[5.5(0.5)(0.5)(4.5)] &approx; 2.49 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Part II:</span> Rectangle (6.5 &times; 1). Area = 6.5 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Part III:</span> Trapezium (sides 1, 1, 1, 2). Area = 3 &times; (&radic;3/4) &approx; 1.3 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Part IV & V:</span> Right triangles (1.5 &times; 6). Area = 2 &times; (1/2 &times; 1.5 &times; 6) = 9 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Total:</span> 2.49 + 6.5 + 1.3 + 9 = <span class="highlight">19.29 cm&sup2;</span>.</div>
        </div>

        <div class="question">4. Triangle and parallelogram have same base 28cm and same area. Triangle sides: 26, 28, 30. Height of parallelogram?</div>
        <svg viewBox="0 -10 240 150" class="ex-img">
          <rect x="40" y="80" width="160" height="50" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <path d="M40,80 L100,20 L200,80" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="4"/>
          <text x="110" y="145" fill="white">28 cm</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Triangle s = (26+28+30)/2 = 42cm.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area &Delta; = &radic;[42(16)(14)(12)] = &radic;[336 &times; 336] = 336 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area Parallelogram = Base &times; Height &rArr; 336 = 28 &times; h.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> h = 336/28 = <span class="highlight">12 cm</span>.</div>
        </div>

        <div class="question">5. Rhombus field, 18 cows. Each side 30m, longer diagonal 48m. Area for each cow?</div>
        <svg viewBox="0 -10 240 190" class="ex-img">
          <path d="M120,20 L40,90 L120,160 L200,90 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <line x1="40" y1="90" x2="200" y2="90" stroke="white" stroke-width="1" stroke-dasharray="4"/>
          <text x="110" y="85" fill="white">48m</text>
          <text x="60" y="50" fill="white">30m</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Rhombus divided into 2 triangles (30, 30, 48). s = (30+30+48)/2 = 54m.</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Area &Delta; = &radic;[54(24)(24)(6)] = 24 &times; &radic;[324] = 24 &times; 18 = 432 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Total Area = 2 &times; 432 = 864 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Area per cow = 864/18 = <span class="highlight">48 m&sup2;</span>.</div>
        </div>

        <div class="question">7. Kite, square diagonal 32cm, isosceles triangle base 8cm sides 6cm. Find area of each shade.</div>
        <svg viewBox="0 -10 240 250" class="ex-img">
          <rect x="60" y="40" width="120" height="120" transform="rotate(45 120 100)" fill="rgba(0,198,255,0.2)" stroke="white" stroke-width="2"/>
          <line x1="120" y1="15" x2="120" y2="185" stroke="white" stroke-dasharray="4"/>
          <line x1="35" y1="100" x2="205" y2="100" stroke="white" stroke-dasharray="4"/>
          <path d="M100,185 L140,185 L120,220 Z" fill="#0072FF" stroke="white" stroke-width="1.5"/>
          <text x="115" y="75" fill="white">I</text>
          <text x="115" y="140" fill="white">II</text>
          <text x="115" y="205" fill="white">III</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Shade I & II:</span> Area of square = 1/2 &times; d&sup2; = 1/2 &times; 32 &times; 32 = 512 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Shade I:</span> 256 cm&sup2;. <span class="highlight">Shade II:</span> 256 cm&sup2;.</div>
          <div class="sol-step"><span class="highlight">Shade III:</span> Triangle (6, 6, 8). s = 10. Area = &radic;[10(4)(4)(2)] = 8&radic;5 &approx; <span class="highlight">17.89 cm&sup2;</span>.</div>
        </div>

        <div class="question">9. Trapezium field, parallel sides 25m, 10m, non-parallel 14m, 13m. Area?</div>
        <svg viewBox="0 -10 240 150" class="ex-img">
          <path d="M40,120 L200,120 L140,40 L60,40 Z" fill="none" stroke="#00C6FF" stroke-width="2"/>
          <text x="110" y="135" fill="white">25m</text>
          <text x="90" y="35" fill="white">10m</text>
          <text x="175" y="80" fill="white">13m</text>
          <text x="40" y="80" fill="white">14m</text>
        </svg>
        <div class="solution">
          <div class="sol-step"><span class="highlight">Step 1:</span> Divide into a parallelogram (10, 13) and a triangle (sides 13, 14, and 25-10=15).</div>
          <div class="sol-step"><span class="highlight">Step 2:</span> Triangle s = (13+14+15)/2 = 21m.</div>
          <div class="sol-step"><span class="highlight">Step 3:</span> Area &Delta; = &radic;[21(8)(7)(6)] = 84 m&sup2;.</div>
          <div class="sol-step"><span class="highlight">Step 4:</span> Height h of triangle = Area &times; 2 / base = 84 &times; 2 / 15 = 11.2m.</div>
          <div class="sol-step"><span class="highlight">Step 5:</span> Area Trapezium = 1/2 &times; (Sum of parallel sides) &times; h = 1/2 &times; (10 + 25) &times; 11.2 = 35 &times; 5.6 = <span class="highlight">196 m&sup2;</span>.</div>
        </div>
      </div>
`
  },
  mcqs: [
    { id: "m1", question: "Heron's Formula for area of a triangle is:", options: ["1/2 × b × h", "√[s(s-a)(s-b)(s-c)]", "a + b + c", "None of these"], correctAnswer: "B" },
    { id: "m2", question: "If the perimeter of an equilateral triangle is 60cm, then its side is:", options: ["10cm", "20cm", "30cm", "60cm"], correctAnswer: "B" },
    { id: "m3", question: "Semi-perimeter 's' is equal to:", options: ["a + b + c", "(a+b+c)/2", "(a+b+c)/3", "2(a+b+c)"], correctAnswer: "B" },
    { id: "m4", question: "Area of an equilateral triangle with side 'a' is:", options: ["(√3/4)a²", "(√3/2)a²", "a²/4", "√3a²"], correctAnswer: "A" },
    { id: "m5", question: "If sides of a triangle are 3cm, 4cm, 5cm, its area is:", options: ["6 cm²", "12 cm²", "15 cm²", "20 cm²"], correctAnswer: "A" },
    { id: "m6", question: "Heron's formula is particularly useful when:", options: ["Height is given", "All three sides are given", "Base is given", "Angle is given"], correctAnswer: "B" },
    { id: "m7", question: "If semi-perimeter is 15 and sides are 10, 10, 10, then area is:", options: ["√[15×5×5×5]", "15√5", "25√15", "None"], correctAnswer: "A" },
    { id: "m8", question: "The unit of area in Heron's formula will be:", options: ["cm", "cm²", "cm³", "Any of these"], correctAnswer: "B" },
    { id: "m9", question: "If a=b=c, then s-a is:", options: ["a/2", "s/3", "0", "a"], correctAnswer: "A" },
    { id: "m10", question: "A quadrilateral can be divided into _____ triangles to find its area using Heron's formula.", options: ["Two", "Three", "Four", "One"], correctAnswer: "A" }
  ]
};
