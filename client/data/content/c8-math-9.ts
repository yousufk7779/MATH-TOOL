import { ChapterContent } from "../types";

const ex91Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #0091EA; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #0091EA; padding-left: 15px; margin-top: 15px; background: rgba(0, 145, 234, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #0091EA; font-weight: 700; }
    .step-label { color: #40C4FF; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. The shape of the top surface of a table is a trapezium. Find its area if its parallel sides are 1 m and 1.2 m and perpendicular distance between them is 0.8 m.</div>
      <div class="fig-container">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <polygon points="50,20 150,20 180,80 20,80" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#0091EA" stroke-dasharray="4"/>
          <text x="25" y="55" fill="#0091EA" font-size="12">0.8m</text>
          <text x="100" y="15" fill="#0091EA" font-size="12" text-anchor="middle">1 m</text>
          <text x="100" y="95" fill="#0091EA" font-size="12" text-anchor="middle">1.2 m</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Parallel sides of the trapezium, a = 1 m, b = 1.2 m</div>
        <div class="sol-step">Perpendicular distance (height), h = 0.8 m</div>
        <div class="sol-step">Area of trapezium = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (a + b) × h</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (1 + 1.2) × 0.8</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 2.2 × 0.8</div>
        <div class="sol-step">= 1.1 × 0.8 = <span class="ans-highlight">0.88 m²</span></div>
        <div class="sol-step">The area of the top surface of the table is 0.88 m².</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. The area of a trapezium is 34 cm² and the length of one of the parallel sides is 10 cm and its height is 4 cm. Find the length of the other parallel side.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the length of the other parallel side be x.</div>
        <div class="sol-step">Area of trapezium = 34 cm²</div>
        <div class="sol-step">One parallel side, a = 10 cm</div>
        <div class="sol-step">Height, h = 4 cm</div>
        <div class="sol-step">Area = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (a + x) × h</div>
        <div class="sol-step">34 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (10 + x) × 4</div>
        <div class="sol-step">34 = 2 × (10 + x)</div>
        <div class="sol-step">10 + x = <span class='frac'><span class='num'>34</span><span class='den'>2</span></span> = 17</div>
        <div class="sol-step">x = 17 - 10 = <span class="ans-highlight">7 cm</span></div>
        <div class="sol-step">The length of the other parallel side is 7 cm.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Length of the fence of a trapezium shaped field ABCD is 120 m. If BC = 48 m, CD = 17 m and AD = 40 m, find the area of this field. Side AB is perpendicular to the parallel sides AD and BC.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Perimeter of trapezium ABCD = 120 m</div>
        <div class="sol-step">AB + BC + CD + AD = 120 m</div>
        <div class="sol-step">AB + 48 + 17 + 40 = 120</div>
        <div class="sol-step">AB + 105 = 120</div>
        <div class="sol-step">AB = 120 - 105 = 15 m</div>
        <div class="sol-step">Since AB is perpendicular to parallel sides AD and BC, AB is the height (h) = 15 m.</div>
        <div class="sol-step">Parallel sides are AD = 40 m and BC = 48 m.</div>
        <div class="sol-step">Area of the field = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (AD + BC) × AB</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (40 + 48) × 15</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 88 × 15 = 44 × 15</div>
        <div class="sol-step">= <span class="ans-highlight">660 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. The diagonal of a quadrilateral shaped field is 24 m and the perpendiculars dropped on it from the remaining opposite vertices are 8 m and 13 m. Find the area of the field.</div>
      <div class="fig-container">
        <svg width="200" height="120" viewBox="0 0 200 120">
          <polygon points="20,60 100,20 180,60 140,100" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="20" y1="60" x2="180" y2="60" stroke="#0091EA"/>
          <line x1="100" y1="20" x2="100" y2="60" stroke="#0091EA" stroke-dasharray="4"/>
          <line x1="140" y1="100" x2="140" y2="60" stroke="#0091EA" stroke-dasharray="4"/>
          <text x="105" y="45" fill="#0091EA" font-size="12">13m</text>
          <text x="145" y="85" fill="#0091EA" font-size="12">8m</text>
          <text x="160" y="55" fill="#0091EA" font-size="12">24m</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Diagonal (d) = 24 m</div>
        <div class="sol-step">Perpendiculars (heights) are h₁ = 13 m and h₂ = 8 m</div>
        <div class="sol-step">Area of quadrilateral = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d × (h₁ + h₂)</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 24 × (13 + 8)</div>
        <div class="sol-step">= 12 × 21</div>
        <div class="sol-step">= <span class="ans-highlight">252 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let diagonals be d₁ = 7.5 cm and d₂ = 12 cm.</div>
        <div class="sol-step">Area of rhombus = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d₁ × d₂</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 7.5 × 12</div>
        <div class="sol-step">= 7.5 × 6</div>
        <div class="sol-step">= <span class="ans-highlight">45 cm²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Find the area of a rhombus whose side is 5 cm and whose altitude is 4.8 cm. If one of its diagonals is 8 cm long, find the length of the other diagonal.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">A rhombus is also a parallelogram.</div>
        <div class="sol-step">Area = Base × Altitude = Side × Altitude</div>
        <div class="sol-step">= 5 cm × 4.8 cm = <span class="ans-highlight">24 cm²</span></div>
        <div class="sol-step">We also know, Area = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d₁ × d₂</div>
        <div class="sol-step">Given d₁ = 8 cm.</div>
        <div class="sol-step">24 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 8 × d₂</div>
        <div class="sol-step">24 = 4 × d₂</div>
        <div class="sol-step">d₂ = <span class='frac'><span class='num'>24</span><span class='den'>4</span></span> = <span class="ans-highlight">6 cm</span></div>
        <div class="sol-step">The length of the other diagonal is 6 cm.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. The floor of a building consists of 3000 tiles which are rhombus shaped and each of its diagonals are 45 cm and 30 cm in length. Find the total cost of polishing the floor, if the cost per m² is Rs 4.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Area of one tile = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d₁ × d₂</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 45 × 30 = 45 × 15 = 675 cm²</div>
        <div class="sol-step">Total area of 3000 tiles = 675 × 3000 = 20,25,000 cm²</div>
        <div class="sol-step">Convert to m² (since 1 m² = 10,000 cm²):</div>
        <div class="sol-step">Total Area = <span class='frac'><span class='num'>2025000</span><span class='den'>10000</span></span> = 202.5 m²</div>
        <div class="sol-step">Cost of polishing 1 m² = Rs 4</div>
        <div class="sol-step">Total cost = 202.5 × 4 = <span class="ans-highlight">Rs 810</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. Manish wants to buy a trapezium shaped field. Its side along the river is parallel to and twice the side along the road. If the area of this field is 10500 m² and the perpendicular distance between the two parallel sides is 100 m, find the length of the side along the river.</div>
      <div class="fig-container">
        <svg width="250" height="100" viewBox="0 0 250 100">
          <line x1="10" y1="20" x2="240" y2="20" stroke="#0091EA" stroke-width="1" stroke-dasharray="4"/>
          <line x1="10" y1="80" x2="240" y2="80" stroke="#0091EA" stroke-width="1" stroke-dasharray="4"/>
          <polygon points="60,20 180,20 200,80 40,80" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="120" y1="20" x2="120" y2="80" stroke="#0091EA" stroke-dasharray="4"/>
          <text x="125" y="55" fill="#0091EA" font-size="12">100m</text>
          <text x="120" y="15" fill="#e0e0e0" font-size="12" text-anchor="middle">Road</text>
          <text x="120" y="95" fill="#e0e0e0" font-size="12" text-anchor="middle">River</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the side along the road be x meters.</div>
        <div class="sol-step">Then, the side along the river = 2x meters.</div>
        <div class="sol-step">Height (h) = 100 m, Area = 10500 m²</div>
        <div class="sol-step">Area = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (a + b) × h</div>
        <div class="sol-step">10500 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (x + 2x) × 100</div>
        <div class="sol-step">10500 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 3x × 100</div>
        <div class="sol-step">10500 = 150x</div>
        <div class="sol-step">x = <span class='frac'><span class='num'>10500</span><span class='den'>150</span></span> = 70 m</div>
        <div class="sol-step">Length of the side along the river = 2x = 2 × 70 = <span class="ans-highlight">140 m</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. Top surface of a raised platform is in the shape of a regular octagon as shown in the figure. Find the area of the octagonal surface.</div>
      <div class="fig-container">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <polygon points="40,10 80,10 110,40 110,80 80,110 40,110 10,80 10,40" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="10" y1="40" x2="110" y2="40" stroke="#0091EA" stroke-dasharray="4"/>
          <line x1="40" y1="10" x2="40" y2="40" stroke="#0091EA" stroke-dasharray="4"/>
          <text x="25" y="30" fill="#0091EA" font-size="12">4m</text>
          <text x="60" y="55" fill="#0091EA" font-size="12">11m</text>
          <text x="115" y="65" fill="#0091EA" font-size="12">5m</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">The octagon can be divided into two identical trapeziums and one central rectangle.</div>
        <div class="sol-step">Since it's a regular octagon, all sides are equal to 5 m.</div>
        <div class="sol-step">Area of one trapezium = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (a + b) × h</div>
        <div class="sol-step">= <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (11 + 5) × 4 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 16 × 4 = 32 m²</div>
        <div class="sol-step">Area of two trapeziums = 2 × 32 = 64 m²</div>
        <div class="sol-step">Area of central rectangle = length × breadth = 11 × 5 = 55 m²</div>
        <div class="sol-step">Total area = 64 + 55 = <span class="ans-highlight">119 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">10. There is a pentagonal shaped park as shown in the figure.<br/>For finding its area Asha and Samina divided it in two different ways.<br/>Find the area of this park using both ways.</div>
      <div class="fig-container">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <polygon points="75,10 125,60 125,130 25,130 25,60" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="25" y1="130" x2="125" y2="130" stroke="#0091EA" stroke-width="2"/>
          <line x1="75" y1="10" x2="75" y2="130" stroke="#0091EA" stroke-dasharray="4"/>
          <text x="45" y="145" fill="#0091EA" font-size="12">15m</text>
          <text x="135" y="100" fill="#0091EA" font-size="12">15m</text>
          <text x="80" y="80" fill="#0091EA" font-size="12">30m</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">Asha's Method (Two Trapeziums):</span></div>
        <div class="sol-step">Asha divided the pentagon vertically into two identical trapeziums.</div>
        <div class="sol-step">Parallel sides of each trapezium = 15 m and 30 m.</div>
        <div class="sol-step">Height of each trapezium = <span class='frac'><span class='num'>15</span><span class='den'>2</span></span> = 7.5 m</div>
        <div class="sol-step">Area = 2 × [ <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (15 + 30) × 7.5 ]</div>
        <div class="sol-step">= 45 × 7.5 = <span class="ans-highlight">337.5 m²</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">Samina's Method (Square + Triangle):</span></div>
        <div class="sol-step">Samina divided it horizontally into a square and a triangle.</div>
        <div class="sol-step">Area of square = 15 × 15 = 225 m²</div>
        <div class="sol-step">Area of triangle = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × base × height</div>
        <div class="sol-step">Height of triangle = 30 - 15 = 15 m</div>
        <div class="sol-step">Area of triangle = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 15 × 15 = 112.5 m²</div>
        <div class="sol-step">Total area = 225 + 112.5 = <span class="ans-highlight">337.5 m²</span></div>
        <div class="sol-step">Both methods give the same area.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">11. Diagram of the adjacent picture frame has outer dimensions = 24 cm × 28 cm and inner dimensions 16 cm × 20 cm. Find the area of each section of the frame, if the width of each section is same.</div>
      <div class="fig-container">
        <svg width="150" height="170" viewBox="0 0 150 170">
          <rect x="10" y="10" width="130" height="150" fill="rgba(0,145,234,0.05)" stroke="#0091EA" stroke-width="2"/>
          <rect x="30" y="30" width="90" height="110" fill="#121212" stroke="#0091EA" stroke-width="2"/>
          <line x1="10" y1="10" x2="30" y2="30" stroke="#0091EA" stroke-width="2"/>
          <line x1="140" y1="10" x2="120" y2="30" stroke="#0091EA" stroke-width="2"/>
          <line x1="10" y1="160" x2="30" y2="140" stroke="#0091EA" stroke-width="2"/>
          <line x1="140" y1="160" x2="120" y2="140" stroke="#0091EA" stroke-width="2"/>
          <text x="75" y="25" fill="#0091EA" font-size="12" text-anchor="middle">16 cm</text>
          <text x="75" y="155" fill="#0091EA" font-size="12" text-anchor="middle">24 cm</text>
          <text x="25" y="85" fill="#0091EA" font-size="12" text-anchor="middle" transform="rotate(-90 25 85)">20 cm</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">The frame has 4 sections (2 horizontal and 2 vertical trapeziums).</div>
        <div class="sol-step">Width of horizontal sections = <span class='frac'><span class='num'>28 - 20</span><span class='den'>2</span></span> = <span class='frac'><span class='num'>8</span><span class='den'>2</span></span> = 4 cm</div>
        <div class="sol-step">Width of vertical sections = <span class='frac'><span class='num'>24 - 16</span><span class='den'>2</span></span> = <span class='frac'><span class='num'>8</span><span class='den'>2</span></span> = 4 cm</div>
        <div class="sol-step">Area of top/bottom sections (trapeziums):</div>
        <div class="sol-step">Parallel sides = 24 cm and 16 cm, Height = 4 cm</div>
        <div class="sol-step">Area = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (24 + 16) × 4 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 40 × 4 = <span class="ans-highlight">80 cm² each</span></div>
        <div class="sol-step">Area of left/right sections (trapeziums):</div>
        <div class="sol-step">Parallel sides = 28 cm and 20 cm, Height = 4 cm</div>
        <div class="sol-step">Area = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (28 + 20) × 4 = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × 48 × 4 = <span class="ans-highlight">96 cm² each</span></div>
      </div>
    </div>
  </div>
`;

const ex92Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #0091EA; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #0091EA; padding-left: 15px; margin-top: 15px; background: rgba(0, 145, 234, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #0091EA; font-weight: 700; }
    .step-label { color: #40C4FF; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. There are two cuboidal boxes as shown in the adjoining figure. Which box requires the lesser amount of material to make?</div>
      <div class="fig-container">
        <svg width="250" height="120" viewBox="0 0 250 120">
          <polygon points="10,60 70,60 90,40 30,40" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="10,60 10,100 70,100 70,60" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="70,100 90,80 90,40 70,60" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="40" y="115" fill="#0091EA" font-size="12" text-anchor="middle">60 cm</text>
          <text x="95" y="70" fill="#0091EA" font-size="12">40 cm</text>
          <text x="75" y="50" fill="#0091EA" font-size="12">50 cm</text>
          
          <polygon points="150,60 190,60 210,40 170,40" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="150,60 150,100 190,100 190,60" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="190,100 210,80 210,40 190,60" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="170" y="115" fill="#0091EA" font-size="12" text-anchor="middle">50 cm</text>
          <text x="215" y="70" fill="#0091EA" font-size="12">50 cm</text>
          <text x="195" y="50" fill="#0091EA" font-size="12">50 cm</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">For Box (a):</span> Length (l) = 60 cm, Breadth (b) = 40 cm, Height (h) = 50 cm</div>
        <div class="sol-step">Total Surface Area = 2(lb + bh + hl)</div>
        <div class="sol-step">= 2(60×40 + 40×50 + 50×60)</div>
        <div class="sol-step">= 2(2400 + 2000 + 3000)</div>
        <div class="sol-step">= 2(7400) = 14800 cm²</div>
        <br/>
        <div class="sol-step"><span class="step-label">For Box (b):</span> It is a cube with side (a) = 50 cm</div>
        <div class="sol-step">Total Surface Area = 6a²</div>
        <div class="sol-step">= 6(50)² = 6 × 2500 = 15000 cm²</div>
        <div class="sol-step">Since 14800 cm² < 15000 cm², <span class="ans-highlight">Box (a) requires lesser material.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. A suitcase with measures 80 cm × 48 cm × 24 cm is to be covered with a tarpaulin cloth. How many metres of tarpaulin of width 96 cm is required to cover 100 such suitcases?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Length (l) = 80 cm, Breadth (b) = 48 cm, Height (h) = 24 cm</div>
        <div class="sol-step">Total Surface Area of 1 suitcase = 2(lb + bh + hl)</div>
        <div class="sol-step">= 2(80×48 + 48×24 + 24×80)</div>
        <div class="sol-step">= 2(3840 + 1152 + 1920) = 2(6912) = 13824 cm²</div>
        <div class="sol-step">Surface Area of 100 suitcases = 100 × 13824 = 13,82,400 cm²</div>
        <div class="sol-step">Area of tarpaulin required = Area of 100 suitcases</div>
        <div class="sol-step">Length × Width = 1382400</div>
        <div class="sol-step">Length × 96 = 1382400</div>
        <div class="sol-step">Length = <span class='frac'><span class='num'>1382400</span><span class='den'>96</span></span> = 14400 cm</div>
        <div class="sol-step">Convert to metres: 14400 cm = <span class="ans-highlight">144 m</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the side of a cube whose surface area is 600 cm².</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Surface Area of a cube = 6a²</div>
        <div class="sol-step">6a² = 600</div>
        <div class="sol-step">a² = <span class='frac'><span class='num'>600</span><span class='den'>6</span></span> = 100</div>
        <div class="sol-step">a = √100 = <span class="ans-highlight">10 cm</span></div>
        <div class="sol-step">The side of the cube is 10 cm.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Reeta painted the outside of the cabinet of measure 1 m × 2 m × 1.5 m. How much surface area did she cover if she painted all except the bottom of the cabinet.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Length (l) = 2 m, Breadth (b) = 1 m, Height (h) = 1.5 m</div>
        <div class="sol-step">Area to be painted = Total Surface Area - Area of bottom</div>
        <div class="sol-step">= 2(lb + bh + hl) - lb</div>
        <div class="sol-step">= lb + 2(bh + hl)</div>
        <div class="sol-step">= (2 × 1) + 2(1×1.5 + 1.5×2)</div>
        <div class="sol-step">= 2 + 2(1.5 + 3) = 2 + 2(4.5)</div>
        <div class="sol-step">= 2 + 9 = <span class="ans-highlight">11 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Dawood is painting the walls and ceiling of a cuboidal hall with length, breadth and height of 15 m, 10 m and 7 m respectively. From each can of paint 100 m² of area is painted. How many cans of paint will she need to paint the room?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Length (l) = 15 m, Breadth (b) = 10 m, Height (h) = 7 m</div>
        <div class="sol-step">Area to be painted = Area of 4 walls + Area of ceiling</div>
        <div class="sol-step">= 2h(l + b) + lb</div>
        <div class="sol-step">= 2×7(15 + 10) + (15 × 10)</div>
        <div class="sol-step">= 14(25) + 150</div>
        <div class="sol-step">= 350 + 150 = 500 m²</div>
        <div class="sol-step">Area covered by 1 can = 100 m²</div>
        <div class="sol-step">Number of cans needed = <span class='frac'><span class='num'>500</span><span class='den'>100</span></span> = <span class="ans-highlight">5 cans</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Describe how the two figures at the right are alike and how they are different. Which box has larger lateral surface area?</div>
      <div class="fig-container">
        <svg width="200" height="120" viewBox="0 0 200 120">
          <ellipse cx="50" cy="30" rx="30" ry="10" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="20" y1="30" x2="20" y2="90" stroke="#0091EA" stroke-width="2"/>
          <line x1="80" y1="30" x2="80" y2="90" stroke="#0091EA" stroke-width="2"/>
          <path d="M 20 90 A 30 10 0 0 0 80 90" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="90" y="65" fill="#0091EA" font-size="12">7 cm</text>
          <text x="50" y="110" fill="#0091EA" font-size="12" text-anchor="middle">7 cm</text>
          
          <polygon points="130,40 170,40 190,20 150,20" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="130,40 130,80 170,80 170,40" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <polygon points="170,80 190,60 190,20 170,40" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="150" y="95" fill="#0091EA" font-size="12" text-anchor="middle">7 cm</text>
          <text x="195" y="60" fill="#0091EA" font-size="12">7 cm</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">Alike:</span> Both figures have the same height of 7 cm.</div>
        <div class="sol-step"><span class="step-label">Different:</span> One is a cylinder and the other is a cube.</div>
        <br/>
        <div class="sol-step">Lateral Surface Area of cylinder = 2πrh</div>
        <div class="sol-step">Radius (r) = <span class='frac'><span class='num'>7</span><span class='den'>2</span></span> cm, h = 7 cm</div>
        <div class="sol-step">= 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × <span class='frac'><span class='num'>7</span><span class='den'>2</span></span> × 7 = 22 × 7 = 154 cm²</div>
        <br/>
        <div class="sol-step">Lateral Surface Area of cube = 4a²</div>
        <div class="sol-step">Side (a) = 7 cm</div>
        <div class="sol-step">= 4 × 7² = 4 × 49 = 196 cm²</div>
        <div class="sol-step">Since 196 cm² > 154 cm², the <span class="ans-highlight">cube has larger lateral surface area.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. A closed cylindrical tank of radius 7 m and height 3 m is made from a sheet of metal. How much sheet of metal is required?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Radius (r) = 7 m, Height (h) = 3 m</div>
        <div class="sol-step">Metal sheet required = Total Surface Area of closed cylinder</div>
        <div class="sol-step">= 2πr(r + h)</div>
        <div class="sol-step">= 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × (7 + 3)</div>
        <div class="sol-step">= 44 × 10 = <span class="ans-highlight">440 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. The lateral surface area of a hollow cylinder is 4224 cm². It is cut along its height and formed a rectangular sheet of width 33 cm. Find the perimeter of rectangular sheet?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Lateral surface area of cylinder = Area of rectangular sheet = 4224 cm²</div>
        <div class="sol-step">Width of sheet = 33 cm</div>
        <div class="sol-step">Length × Width = Area</div>
        <div class="sol-step">Length × 33 = 4224</div>
        <div class="sol-step">Length = <span class='frac'><span class='num'>4224</span><span class='den'>33</span></span> = 128 cm</div>
        <div class="sol-step">Perimeter of sheet = 2 × (Length + Width)</div>
        <div class="sol-step">= 2 × (128 + 33) = 2 × 161 = <span class="ans-highlight">322 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. A road roller takes 750 complete revolutions to move once over to level a road. Find the area of the road if the diameter of a road roller is 84 cm and length is 1 m.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Diameter = 84 cm, so Radius (r) = 42 cm</div>
        <div class="sol-step">Length (h) = 1 m = 100 cm</div>
        <div class="sol-step">Area leveled in 1 revolution = Lateral Surface Area = 2πrh</div>
        <div class="sol-step">= 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 42 × 100</div>
        <div class="sol-step">= 44 × 6 × 100 = 26400 cm²</div>
        <div class="sol-step">Convert to m²: <span class='frac'><span class='num'>26400</span><span class='den'>10000</span></span> = 2.64 m²</div>
        <div class="sol-step">Area leveled in 750 revolutions = 750 × 2.64 = <span class="ans-highlight">1980 m²</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">10. A company packages its milk powder in cylindrical container whose base has a diameter of 14 cm and height 20 cm. Company places a label around the surface of the container. If the label is placed 2 cm from top and bottom, what is the area of the label.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Diameter = 14 cm, so Radius (r) = 7 cm</div>
        <div class="sol-step">Total height of container = 20 cm</div>
        <div class="sol-step">The label is 2 cm away from both top and bottom.</div>
        <div class="sol-step">Height of the label (h) = 20 - 2 - 2 = 16 cm</div>
        <div class="sol-step">Area of the label = Lateral Surface Area = 2πrh</div>
        <div class="sol-step">= 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 16</div>
        <div class="sol-step">= 44 × 16 = <span class="ans-highlight">704 cm²</span></div>
      </div>
    </div>
  </div>
`;

const ex93Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #0091EA; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #0091EA; padding-left: 15px; margin-top: 15px; background: rgba(0, 145, 234, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #0091EA; font-weight: 700; }
    .step-label { color: #40C4FF; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Given a cylindrical tank, in which situation will you find surface area and in which situation volume.</div>
      <div class="q-subtext">(a) To find how much it can hold.</div>
      <div class="q-subtext">(b) Number of cement bags required to plaster it.</div>
      <div class="q-subtext">(c) To find the number of smaller tanks that can be filled with water from it.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">(a) To find how much it can hold, we need its <span class="ans-highlight">Volume</span>.</div>
        <div class="sol-step">(b) To find cement bags to plaster it, we need its <span class="ans-highlight">Surface Area</span>.</div>
        <div class="sol-step">(c) To find smaller tanks to be filled, we need its <span class="ans-highlight">Volume</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Diameter of cylinder A is 7 cm, and the height is 14 cm. Diameter of cylinder B is 14 cm and height is 7 cm. Without doing any calculations can you suggest whose volume is greater? Verify it by finding the volume of both the cylinders. Check whether the cylinder with greater volume also has greater surface area?</div>
      <div class="fig-container">
        <svg width="200" height="120" viewBox="0 0 200 120">
          <!-- Cylinder A -->
          <ellipse cx="40" cy="20" rx="20" ry="6" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="20" y1="20" x2="20" y2="90" stroke="#0091EA" stroke-width="2"/>
          <line x1="60" y1="20" x2="60" y2="90" stroke="#0091EA" stroke-width="2"/>
          <path d="M 20 90 A 20 6 0 0 0 60 90" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="65" y="55" fill="#0091EA" font-size="10">14 cm</text>
          <text x="40" y="110" fill="#0091EA" font-size="10" text-anchor="middle">7 cm</text>
          <text x="40" y="120" fill="#e0e0e0" font-size="10" text-anchor="middle">A</text>
          
          <!-- Cylinder B -->
          <ellipse cx="140" cy="60" rx="40" ry="10" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <line x1="100" y1="60" x2="100" y2="90" stroke="#0091EA" stroke-width="2"/>
          <line x1="180" y1="60" x2="180" y2="90" stroke="#0091EA" stroke-width="2"/>
          <path d="M 100 90 A 40 10 0 0 0 180 90" fill="rgba(0,145,234,0.1)" stroke="#0091EA" stroke-width="2"/>
          <text x="185" y="80" fill="#0091EA" font-size="10">7 cm</text>
          <text x="140" y="110" fill="#0091EA" font-size="10" text-anchor="middle">14 cm</text>
          <text x="140" y="120" fill="#e0e0e0" font-size="10" text-anchor="middle">B</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Since radius is squared in the volume formula (πr²h), the cylinder with the larger radius (Cylinder B) will likely have the greater volume.</div>
        <br/>
        <div class="sol-step"><span class="step-label">Volume verification:</span></div>
        <div class="sol-step">Volume of A = πr²h = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × (<span class='frac'><span class='num'>7</span><span class='den'>2</span></span>)² × 14 = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × <span class='frac'><span class='num'>49</span><span class='den'>4</span></span> × 14 = 539 cm³</div>
        <div class="sol-step">Volume of B = πr²h = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7² × 7 = 22 × 49 = 1078 cm³</div>
        <div class="sol-step">Yes, Volume of B > Volume of A.</div>
        <br/>
        <div class="sol-step"><span class="step-label">Surface Area verification:</span></div>
        <div class="sol-step">TSA of A = 2πr(r + h) = 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 3.5 × (3.5 + 14) = 22 × 17.5 = 385 cm²</div>
        <div class="sol-step">TSA of B = 2πr(r + h) = 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × (7 + 7) = 44 × 14 = 616 cm²</div>
        <div class="sol-step"><span class="ans-highlight">Yes, the cylinder with greater volume also has greater surface area.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the height of a cuboid whose base area is 180 cm² and volume is 900 cm³.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume of cuboid = Base Area × Height</div>
        <div class="sol-step">900 = 180 × Height</div>
        <div class="sol-step">Height = <span class='frac'><span class='num'>900</span><span class='den'>180</span></span> = <span class="ans-highlight">5 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. A cuboid is of dimensions 60 cm × 54 cm × 30 cm. How many small cubes with side 6 cm can be placed in the given cuboid?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume of cuboid = 60 × 54 × 30 = 97200 cm³</div>
        <div class="sol-step">Volume of 1 small cube = 6³ = 216 cm³</div>
        <div class="sol-step">Number of cubes = <span class='frac'><span class='num'>Volume of cuboid</span><span class='den'>Volume of 1 cube</span></span> = <span class='frac'><span class='num'>97200</span><span class='den'>216</span></span></div>
        <div class="sol-step">= <span class="ans-highlight">450 cubes</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Find the height of the cylinder whose volume is 1.54 m³ and diameter of the base is 140 cm?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume (V) = 1.54 m³</div>
        <div class="sol-step">Diameter = 140 cm, so Radius (r) = 70 cm = 0.7 m</div>
        <div class="sol-step">Volume = πr²h</div>
        <div class="sol-step">1.54 = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 0.7 × 0.7 × h</div>
        <div class="sol-step">1.54 = 22 × 0.1 × 0.7 × h</div>
        <div class="sol-step">1.54 = 1.54 × h</div>
        <div class="sol-step">h = <span class="ans-highlight">1 m</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. A milk tank is in the form of cylinder whose radius is 1.5 m and length is 7 m. Find the quantity of milk in litres that can be stored in the tank?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Radius (r) = 1.5 m, Height (h) = 7 m</div>
        <div class="sol-step">Volume of tank = πr²h</div>
        <div class="sol-step">= <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 1.5 × 1.5 × 7</div>
        <div class="sol-step">= 22 × 2.25 = 49.5 m³</div>
        <div class="sol-step">Since 1 m³ = 1000 litres,</div>
        <div class="sol-step">Quantity of milk = 49.5 × 1000 = <span class="ans-highlight">49,500 litres</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. If each edge of a cube is doubled,</div>
      <div class="q-subtext">(i) how many times will its surface area increase?</div>
      <div class="q-subtext">(ii) how many times will its volume increase?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let original edge be 'a'. Surface Area = 6a², Volume = a³</div>
        <div class="sol-step">New edge = 2a</div>
        <div class="sol-step"><span class="step-label">(i) Surface Area:</span> New SA = 6(2a)² = 6(4a²) = 4 × (6a²)</div>
        <div class="sol-step">Surface area will increase by <span class="ans-highlight">4 times</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) Volume:</span> New Vol = (2a)³ = 8a³ = 8 × (a³)</div>
        <div class="sol-step">Volume will increase by <span class="ans-highlight">8 times</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. Water is pouring into a cubiodal reservoir at the rate of 60 litres per minute. If the volume of reservoir is 108 m³, find the number of hours it will take to fill the reservoir.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Volume of reservoir = 108 m³</div>
        <div class="sol-step">Convert to litres (1 m³ = 1000 L): 108 × 1000 = 108000 L</div>
        <div class="sol-step">Rate of pouring = 60 litres/minute</div>
        <div class="sol-step">Time taken in minutes = <span class='frac'><span class='num'>108000</span><span class='den'>60</span></span> = 1800 minutes</div>
        <div class="sol-step">Time in hours = <span class='frac'><span class='num'>1800</span><span class='den'>60</span></span> = <span class="ans-highlight">30 hours</span></div>
      </div>
    </div>
  </div>
`;

export const c8Math9: ChapterContent = {
  id: "c8-math-9",
  number: 9,
  title: "Mensuration",
  introduction: "In this chapter, we explore how to find the area of 2D shapes like parallelograms, triangles, trapeziums, and polygons. We will also learn to calculate the surface area and volume of 3D shapes like cubes, cuboids, and cylinders.",
  mcqs: [
    { id: "m1", question: "The area of a rhombus is equal to:", options: ["Base × Height", "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d1 × d2", "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × Base × Height", "Both A and B"], correctAnswer: "Both A and B" },
    { id: "m2", question: "1 m³ is equal to how many litres?", options: ["10", "100", "1000", "10000"], correctAnswer: "1000" },
    { id: "m3", question: "The total surface area of a cube of side 'a' is:", options: ["4a²", "6a²", "a³", "2a²"], correctAnswer: "6a²" },
    { id: "m4", question: "Area of a trapezium is:", options: ["<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>(a+b)h", "(a+b)h", "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>ab", "ah"], correctAnswer: "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>(a+b)h" },
    { id: "m5", question: "The lateral surface area of a cylinder is:", options: ["2πr²", "πr²h", "2πrh", "2πr(r+h)"], correctAnswer: "2πrh" },
    { id: "m6", question: "If the edge of a cube is doubled, its volume becomes:", options: ["2 times", "4 times", "8 times", "16 times"], correctAnswer: "8 times" },
    { id: "m7", question: "The volume of a cuboid is given by:", options: ["l+b+h", "lbh", "2(lb+bh+hl)", "l²+b²+h²"], correctAnswer: "lbh" },
    { id: "m8", question: "1 cm³ is equal to:", options: ["1 mL", "10 mL", "100 mL", "1 L"], correctAnswer: "1 mL" },
    { id: "m9", question: "Area of a general quadrilateral can be found by splitting it into:", options: ["Two triangles", "Two rectangles", "Two squares", "A circle"], correctAnswer: "Two triangles" },
    { id: "m10", question: "Surface area of a closed cylinder is:", options: ["2πrh", "2πr² + 2πrh", "πr²h", "πrh"], correctAnswer: "2πr² + 2πrh" }
  ],
  summary: [
    "Area of a trapezium = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>(a+b)×h, where a and b are parallel sides.",
    "Area of a rhombus = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>×d1×d2.",
    "Surface area of a cuboid = 2(lb + bh + hl) and its volume = lbh.",
    "Surface area of a cube = 6a² and its volume = a³.",
    "Surface area of a cylinder = 2πr(r+h) and its volume = πr²h.",
    "1 m³ = 1000 L, 1 L = 1000 cm³, and 1 cm³ = 1 mL."
  ],
  exercises: [
    { id: "ex9-1", name: "Exercise 9.1", questions: [] },
    { id: "ex9-2", name: "Exercise 9.2", questions: [] },
    { id: "ex9-3", name: "Exercise 9.3", questions: [] }
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
        color: #0091EA;
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
        color: #40C4FF;
        font-weight: 700;
      }

      .highlight { color: #40C4FF; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }
    </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          In this chapter, we explore how to find the area of 2D shapes like parallelograms, triangles, trapeziums, and polygons. We will also learn to calculate the surface area and volume of 3D shapes like cubes, cuboids, and cylinders.
        </div>
      </div>
      <div class="section-box">
        <div class="section-header"><span>✦</span> Important Formulas</div>
        <table class="prop-table">
          <tr>
            <th>Shape</th>
            <th>Area / Volume</th>
          </tr>
          <tr>
            <td><strong>Trapezium</strong></td>
            <td>Area = <span class="highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × (a+b) × h</span></td>
          </tr>
          <tr>
            <td><strong>Rhombus</strong></td>
            <td>Area = <span class="highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span> × d₁ × d₂</span></td>
          </tr>
          <tr>
            <td><strong>Cuboid (Volume)</strong></td>
            <td>Volume = <span class="highlight">l × b × h</span></td>
          </tr>
          <tr>
            <td><strong>Cuboid (Total SA)</strong></td>
            <td>TSA = <span class="highlight">2(lb + bh + hl)</span></td>
          </tr>
          <tr>
            <td><strong>Cylinder (Volume)</strong></td>
            <td>Volume = <span class="highlight">πr²h</span></td>
          </tr>
          <tr>
            <td><strong>Cylinder (Lateral SA)</strong></td>
            <td>LSA = <span class="highlight">2πrh</span></td>
          </tr>
          <tr>
            <td><strong>Cylinder (Total SA)</strong></td>
            <td>TSA = <span class="highlight">2πr(r+h)</span></td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex9-1": ex91Content,
    "ex9-2": ex92Content,
    "ex9-3": ex93Content
  }
};
