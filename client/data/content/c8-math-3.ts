import { ChapterContent } from "../types";

export const c8Math3: ChapterContent = {
  id: "c8-math-3",
  number: 3,
  title: "Understanding Quadrilaterals",
  introduction:
    "In this chapter, we explore the properties of polygons, especially quadrilaterals like parallelograms, rhombuses, rectangles, and squares.",
  definitions: [
    {
      term: "Polygon",
      description: "A simple closed curve made up of only line segments.",
    },
    {
      term: "Regular Polygon",
      description: "A polygon which is both equiangular and equilateral.",
    },
    { term: "Quadrilateral", description: "A polygon with four sides." },
  ],
  keyPoints: [
    "Sum of interior angles of a quadrilateral is 360°.",
    "Sum of exterior angles of any polygon is 360°.",
    "A parallelogram is a quadrilateral with opposite sides parallel.",
    "Diagonals of a rhombus are perpendicular bisectors of each other.",
  ],
  formulas: [
    { name: "Angle Sum Property", formula: "(n - 2) × 180°" },
    { name: "Sum of Exterior Angles", formula: "360°" },
  ],
  crux: [],
  exercises: [
    { id: "ex3-1", name: "Exercise 3.1", questions: [] },
    { id: "ex3-2", name: "Exercise 3.2", questions: [] },
    { id: "ex3-3", name: "Exercise 3.3", questions: [] },
    { id: "ex3-4", name: "Exercise 3.4", questions: [] },
  ],
  examples: [],
  mcqs: [
    {
      id: "c8-m3-q1",
      question: "The sum of all interior angles of a quadrilateral is:",
      options: ["180°", "360°", "540°", "90°"],
      correctAnswer: "360°",
    },
    {
      id: "c8-m3-q2",
      question: "Which of these is a regular quadrilateral?",
      options: ["Rectangle", "Rhombus", "Square", "Parallelogram"],
      correctAnswer: "Square",
    },
    {
      id: "c8-m3-q3",
      question: "The sum of exterior angles of any polygon is:",
      options: ["180°", "270°", "360°", "Depends on sides"],
      correctAnswer: "360°",
    },
    {
      id: "c8-m3-q4",
      question: "A quadrilateral with all sides equal and all angles 90° is a:",
      options: ["Rectangle", "Rhombus", "Square", "Trapezium"],
      correctAnswer: "Square",
    },
    {
      id: "c8-m3-q5",
      question: "In a parallelogram, opposite angles are:",
      options: ["Equal", "Supplementary", "90°", "Unequal"],
      correctAnswer: "Equal",
    },
    {
      id: "c8-m3-q6",
      question: "Diagonals of which quadrilateral bisect each other at 90°?",
      options: ["Rectangle", "Rhombus", "Parallelogram", "Trapezium"],
      correctAnswer: "Rhombus",
    },
    {
      id: "c8-m3-q7",
      question: "How many sides does a pentagon have?",
      options: ["4", "5", "6", "3"],
      correctAnswer: "5",
    },
    {
      id: "c8-m3-q8",
      question: "A quadrilateral with exactly one pair of parallel sides is a:",
      options: ["Parallelogram", "Kite", "Trapezium", "Rhombus"],
      correctAnswer: "Trapezium",
    },
    {
      id: "c8-m3-q9",
      question: "Minimum interior angle of a regular polygon is:",
      options: ["45°", "60°", "90°", "120°"],
      correctAnswer: "60°",
    },
    {
      id: "c8-m3-q10",
      question: "Maximum exterior angle of a regular polygon is:",
      options: ["90°", "120°", "180°", "360°"],
      correctAnswer: "120°",
    },
  ],
  summary: [
    "Quadrilaterals are 4-sided polygons.",
    "Properties of diagonals are key to identifying special quadrilaterals.",
    "Angle sum properties help in finding unknown angles.",
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
        background: linear-gradient(90deg, #AB47BC, #AB47BC);
        padding: 25px;
        border-radius: 15px;
        margin-bottom: 25px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(171, 71, 188, 0.3);
      }

      .hero-title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 5px;
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
        color: #AB47BC;
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
        color: #FFB74D;
        font-weight: 700;
      }

      .fig-box {
        background: white;
        padding: 5px;
        border-radius: 8px;
        display: inline-block;
        margin-bottom: 5px;
      }

      .highlight { color: #CE93D8; font-weight: 600; }
      
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
          In geometry, a <strong>Quadrilateral</strong> is a closed polygon with four sides, four vertices, and four angles. In this chapter, we explore different types of quadrilaterals like parallelograms, rhombuses, rectangles, squares, and kites, and understand their unique properties and angle relationships.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Properties of Quadrilaterals</div>
        <table class="prop-table">
          <tr>
            <th>Type</th>
            <th>Properties</th>
          </tr>
          <tr>
            <td>
              <div class="fig-box">
                <svg width="60" height="40">
                  <polygon points="10,35 50,35 60,5 20,5" fill="none" stroke="#1a1a2e" stroke-width="2"/>
                </svg>
              </div><br/>
              <strong>Parallelogram</strong>
            </td>
            <td>
              • Opposite sides equal.<br/>
              • Opposite angles equal.<br/>
              • Diagonals bisect.
            </td>
          </tr>
          <tr>
            <td>
              <div class="fig-box">
                <svg width="60" height="40">
                  <polygon points="20,35 50,35 40,5 10,5" fill="none" stroke="#1a1a2e" stroke-width="2"/>
                </svg>
              </div><br/>
              <strong>Rhombus</strong>
            </td>
            <td>
              • All sides equal.<br/>
              • Diagonals at <span class="highlight">90°</span>.
            </td>
          </tr>
          <tr>
            <td>
              <div class="fig-box">
                <svg width="60" height="40">
                  <rect x="10" y="10" width="40" height="20" fill="none" stroke="#1a1a2e" stroke-width="2"/>
                </svg>
              </div><br/>
              <strong>Rectangle</strong>
            </td>
            <td>
              • Each angle <span class="highlight">90°</span>.<br/>
              • Diagonals equal.
            </td>
          </tr>
          <tr>
            <td>
              <div class="fig-box">
                <svg width="60" height="40">
                  <rect x="15" y="5" width="30" height="30" fill="none" stroke="#1a1a2e" stroke-width="2"/>
                </svg>
              </div><br/>
              <strong>Square</strong>
            </td>
            <td>All properties of above three.</td>
          </tr>
          <tr>
            <td>
              <div class="fig-box">
                <svg width="60" height="40">
                  <polygon points="30,5 50,20 30,35 10,20" fill="none" stroke="#1a1a2e" stroke-width="2"/>
                </svg>
              </div><br/>
              <strong>Kite</strong>
            </td>
            <td>Diagonals perpendicular.</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex3-1": `
      <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
        .q-text { color: #AB47BC; font-weight: 600; margin-bottom: 12px; }
        .sol-box { border-left: 3px solid #AB47BC; padding-left: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
        .ans { color: #00e676; font-weight: bold; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .fig-center { display: flex; justify-content: center; width: 100%; margin: 15px 0; }
        .fig-row { display: flex; flex-wrap: wrap; gap: 15px; background: white; padding: 15px; border-radius: 12px; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .fig-item { text-align: center; color: #333; font-size: 11px; font-weight: 700; }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
      <div class="ex-container">
        <div class="q-card">
          <div class="q-text">1. Given here are some figures. Classify each of them on the basis of the following:</div>
          <div class="fig-center">
            <div class="fig-row">
              <div class="fig-item"><svg width="45" height="45"><polygon points="5,40 40,40 22,22 40,5 5,5" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(1)</div>
              <div class="fig-item"><svg width="45" height="45"><polygon points="22,5 40,22 22,40 5,22" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(2)</div>
              <div class="fig-item"><svg width="45" height="45"><circle cx="22" cy="22" r="16" fill="none" stroke="#000000" stroke-width="1.8"/><circle cx="22" cy="22" r="10" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(3)</div>
              <div class="fig-item"><svg width="45" height="45"><polygon points="22,2 28,18 42,18 31,28 35,42 22,32 9,42 13,28 2,18 16,18" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(4)</div>
              <div class="fig-item"><svg width="45" height="45"><path d="M8,22 A12,12 0 1,1 32,22 A12,12 0 1,1 8,22 M18,22 A12,12 0 1,1 42,22 A12,12 0 1,1 18,22" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(5)</div>
              <div class="fig-item"><svg width="45" height="45"><rect x="18" y="5" width="10" height="35" rx="5" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(6)</div>
              <div class="fig-item"><svg width="45" height="45"><path d="M10,10 Q35,10 35,35 L10,35 Z" fill="none" stroke="#000000" stroke-width="1.8"/></svg><br/>(7)</div>
              <div class="fig-item"><svg width="45" height="45"><circle cx="22" cy="10" r="6" stroke="#000000" stroke-width="1.8" fill="none"/><line x1="22" y1="16" x2="22" y2="29" stroke="#000000" stroke-width="1.8"/><circle cx="22" cy="35" r="6" stroke="#000000" stroke-width="1.8" fill="none"/></svg><br/>(8)</div>
            </div>
          </div>
          <div class="sol-box">
            (a) Simple curve: <span class="ans">1, 2, 5, 6, 7</span><br/>
            (b) Simple closed curve: <span class="ans">1, 2, 5, 6, 7</span><br/>
            (c) Polygon: <span class="ans">1, 2</span><br/>
            (d) Convex polygon: <span class="ans">2</span><br/>
            (e) Concave polygon: <span class="ans">1</span>
          </div>
        </div>
        <div class="q-card">
          <div class="q-text">2. What is a regular polygon? State the name of a regular polygon of:</div>
          <div class="sol-box">
            A polygon which is both equilateral and equiangular is a regular polygon.<br/>
            (i) 3 sides: <span class="ans">Equilateral Triangle</span><br/>
            (ii) 4 sides: <span class="ans">Square</span><br/>
            (iii) 6 sides: <span class="ans">Regular Hexagon</span>
          </div>
        </div>
      </div>
    `,
    "ex3-2": `
      <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Outfit', sans-serif; }
        .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; backdrop-filter: blur(5px); }
        .q-text { color: #AB47BC; font-weight: 600; margin-bottom: 15px; text-align: justify; }
        .sol-box { border-left: 4px solid #AB47BC; padding: 15px; margin-top: 20px; background: rgba(171, 71, 188, 0.08); border-radius: 0 12px 12px 0; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .fig-container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 20px 0; }
        .math-svg { background: white; padding: 15px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
        .step-label { color: #BA68C8; font-weight: 600; margin-right: 5px; }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
      <div class="ex-container">
        <div class="q-card">
          <div class="q-text">1. Find x in the following figures.</div>
          <div class="fig-container">
            <div class="math-svg">
              <svg width="180" height="160" viewBox="0 0 180 160">
                <polygon points="50,120 150,120 100,40" fill="none" stroke="#000000" stroke-width="2"/>
                <line x1="50" y1="120" x2="20" y2="150" stroke="#000000" stroke-width="1.5"/>
                <line x1="150" y1="120" x2="185" y2="120" stroke="#000000" stroke-width="1.5"/>
                <line x1="100" y1="40" x2="80" y2="10" stroke="#000000" stroke-width="1.5"/>
                <text x="5" y="150" fill="#000000" font-size="12" font-weight="bold">125°</text>
                <text x="160" y="115" fill="#000000" font-size="12" font-weight="bold">x°</text>
                <text x="65" y="25" fill="#000000" font-size="12" font-weight="bold">125°</text>
                <text x="90" y="155" fill="#000000" font-size="14" font-weight="bold">(a)</text>
              </svg>
            </div>
            <div class="math-svg">
              <svg width="200" height="160" viewBox="0 0 200 160">
                <polygon points="60,130 140,130 140,70 100,30 40,60" fill="none" stroke="#000000" stroke-width="2"/>
                <line x1="60" y1="130" x2="30" y2="155" stroke="#000000" stroke-width="1.5"/>
                <line x1="140" y1="130" x2="175" y2="130" stroke="#000000" stroke-width="1.5"/>
                <line x1="140" y1="70" x2="140" y2="40" stroke="#000000" stroke-width="1.5"/>
                <line x1="100" y1="30" x2="115" y2="5" stroke="#000000" stroke-width="1.5"/>
                <line x1="40" y1="60" x2="15" y2="40" stroke="#000000" stroke-width="1.5"/>
                <rect x="53" y="123" width="7" height="7" fill="none" stroke="#AB47BC" stroke-width="1"/>
                <rect x="133" y="123" width="7" height="7" fill="none" stroke="#AB47BC" stroke-width="1"/>
                <text x="35" y="150" fill="#000000" font-size="11" font-weight="bold">x</text>
                <text x="145" y="60" fill="#000000" font-size="11" font-weight="bold">60°</text>
                <text x="15" y="35" fill="#000000" font-size="11" font-weight="bold">70°</text>
                <text x="100" y="155" fill="#000000" font-size="14" font-weight="bold">(b)</text>
              </svg>
            </div>
          </div>
          <div class="sol-box">
            <span class="step-label">(a)</span> Sum of exterior angles = 360°<br/>
            125° + 125° + x = 360°<br/>
            250° + x = 360° ⟹ <span class="ans-highlight">x = 110°</span><br/><br/>
            <span class="step-label">(b)</span> Sum of exterior angles = 360°<br/>
            The exterior angles are 90°, 60°, 90°, 70°, and x.<br/>
            90° + 60° + 90° + 70° + x = 360°<br/>
            310° + x = 360° ⟹ <span class="ans-highlight">x = 50°</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">2. Find the measure of each exterior angle of a regular polygon of (i) 9 sides (ii) 15 sides</div>
          <div class="sol-box">
            Each exterior angle = 360° / n<br/>
            <span class="step-label">(i)</span> 360° / 9 = <span class="ans-highlight">40°</span><br/>
            <span class="step-label">(ii)</span> 360° / 15 = <span class="ans-highlight">24°</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">3. How many sides does a regular polygon have if the measure of an exterior angle is 24°?</div>
          <div class="sol-box">
            Number of sides = 360° / exterior angle<br/>
            n = 360° / 24° = <span class="ans-highlight">15 sides</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">4. How many sides does a regular polygon have if each of its interior angles is 165°?</div>
          <div class="sol-box">
            Exterior angle = 180° - interior angle = 180° - 165° = 15°<br/>
            Number of sides = 360° / 15° = <span class="ans-highlight">24 sides</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">5. (a) Is it possible to have a regular polygon with measure of each exterior angle as 22°? (b) Can it be an interior angle of a regular polygon? Why?</div>
          <div class="sol-box">
            <span class="step-label">(a)</span> No, because 22 is not a divisor of 360.<br/>
            <span class="step-label">(b)</span> No, because if interior angle is 22°, exterior angle = 180° - 22° = 158°, which is not a divisor of 360.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">6. (a) What is the minimum interior angle possible for a regular polygon? Why? (b) What is the maximum exterior angle possible for a regular polygon?</div>
          <div class="sol-box">
            <span class="step-label">(a)</span> The regular polygon with the least number of sides is an equilateral triangle (3 sides). Its interior angle is 180°/3 = <span class="ans-highlight">60°</span>. This is the minimum possible interior angle.<br/>
            <span class="step-label">(b)</span> Maximum exterior angle = 180° - minimum interior angle = 180° - 60° = <span class="ans-highlight">120°</span>.
          </div>
        </div>
      </div>
    `,
    "ex3-3": `
      <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Outfit', sans-serif; }
        .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; }
        .q-text { color: #AB47BC; font-weight: 600; margin-bottom: 15px; text-align: justify; }
        .sol-box { border-left: 4px solid #AB47BC; padding: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.08); border-radius: 0 12px 12px 0; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .math-svg { background: white; padding: 10px; border-radius: 10px; margin: 15px 0; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
        .sub-q { color: #CE93D8; font-weight: 600; margin-top: 10px; display: block; }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
      <div class="ex-container">
        <div class="q-card">
          <div class="q-text">1. Given a parallelogram ABCD. Complete each statement along with the definition or property used.</div>
          <div style="text-align:center;">
            <div class="math-svg">
              <svg width="160" height="100" viewBox="0 0 160 100">
                <polygon points="30,80 110,80 130,30 50,30" fill="none" stroke="#000000" stroke-width="2"/>
                <line x1="30" y1="80" x2="130" y2="30" stroke="#999" stroke-dasharray="4"/>
                <line x1="110" y1="80" x2="50" y2="30" stroke="#999" stroke-dasharray="4"/>
                <text x="15" y="85" font-size="12" font-weight="bold">A</text><text x="115" y="85" font-size="12" font-weight="bold">B</text>
                <text x="135" y="30" font-size="12" font-weight="bold">C</text><text x="35" y="30" font-size="12" font-weight="bold">D</text>
                <text x="75" y="58" font-size="12" font-weight="bold" fill="#AB47BC">O</text>
              </svg>
            </div>
          </div>
          <div class="sol-box">
            (i) AD = <span class="ans-highlight">BC</span> (Opposite sides of a parallelogram are equal)<br/>
            (ii) ∠DCB = <span class="ans-highlight">∠DAB</span> (Opposite angles of a parallelogram are equal)<br/>
            (iii) OC = <span class="ans-highlight">OA</span> (Diagonals of a parallelogram bisect each other)<br/>
            (iv) m∠DAB + m∠CDA = <span class="ans-highlight">180°</span> (Adjacent angles in a parallelogram are supplementary)
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">2. Consider the following parallelograms. Find the values of the unknowns x, y, z.</div>
          <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center;">
             <div class="math-svg">
               <svg width="140" height="100">
                 <polygon points="30,70 110,70 125,30 45,30" fill="none" stroke="#000000" stroke-width="1.8"/>
                 <text x="100" y="65" font-size="11" fill="#000000">100°</text>
                 <text x="35" y="65" font-size="12" fill="#AB47BC" font-weight="bold">z</text>
                 <text x="110" y="38" font-size="12" fill="#AB47BC" font-weight="bold">x</text>
                 <text x="45" y="42" font-size="12" fill="#AB47BC" font-weight="bold">y</text>
                 <text x="70" y="90" font-size="12" fill="#AB47BC" font-weight="bold">(i)</text>
               </svg>
             </div>
             <div class="math-svg">
               <svg width="160" height="100">
                 <polygon points="30,70 110,70 125,30 45,30" fill="none" stroke="#000000" stroke-width="1.8"/>
                 <line x1="125" y1="30" x2="155" y2="30" stroke="#000000" stroke-width="1.5"/>
                 <text x="35" y="65" font-size="11" fill="#000000">50°</text>
                 <text x="105" y="65" font-size="12" fill="#AB47BC" font-weight="bold">y</text>
                 <text x="50" y="42" font-size="12" fill="#AB47BC" font-weight="bold">x</text>
                 <text x="135" y="25" font-size="12" fill="#AB47BC" font-weight="bold">z</text>
                 <text x="80" y="90" font-size="12" fill="#AB47BC" font-weight="bold">(ii)</text>
               </svg>
             </div>
             <div class="math-svg">
               <svg width="140" height="120">
                 <polygon points="70,10 110,60 70,110 30,60" fill="none" stroke="#000000" stroke-width="1.8"/>
                 <line x1="30" y1="60" x2="110" y2="60" stroke="#444" stroke-dasharray="3"/>
                 <line x1="70" y1="10" x2="70" y2="110" stroke="#444" stroke-dasharray="3"/>
                 <rect x="70" y="52" width="8" height="8" fill="none" stroke="#AB47BC" stroke-width="1.2"/>
                 <text x="72" y="48" font-size="12" fill="#AB47BC" font-weight="bold">x</text>
                 <text x="85" y="58" font-size="11" fill="#000000">30°</text>
                 <text x="55" y="50" font-size="12" fill="#AB47BC" font-weight="bold">y</text>
                 <text x="75" y="95" font-size="12" fill="#AB47BC" font-weight="bold">z</text>
                 <text x="70" y="118" font-size="11" fill="#AB47BC" font-weight="bold">(iii)</text>
               </svg>
             </div>
             <div class="math-svg">
               <svg width="150" height="100">
                 <polygon points="30,70 110,70 125,30 45,30" fill="none" stroke="#000000" stroke-width="1.8"/>
                 <line x1="110" y1="70" x2="140" y2="70" stroke="#000000" stroke-width="1.5"/>
                 <text x="105" y="45" font-size="11" fill="#000000">80°</text>
                 <text x="35" y="65" font-size="12" fill="#AB47BC" font-weight="bold">x</text>
                 <text x="55" y="42" font-size="12" fill="#AB47BC" font-weight="bold">y</text>
                 <text x="120" y="65" font-size="12" fill="#AB47BC" font-weight="bold">z</text>
                 <text x="80" y="90" font-size="11" fill="#AB47BC" font-weight="bold">(iv)</text>
               </svg>
             </div>
             <div class="math-svg">
               <svg width="140" height="100">
                 <polygon points="30,75 110,75 125,35 45,35" fill="none" stroke="#000000" stroke-width="1.8"/>
                 <line x1="45" y1="35" x2="110" y2="75" stroke="#444" stroke-dasharray="3"/>
                 <text x="95" y="70" font-size="10" fill="#000000">112°</text>
                 <text x="80" y="45" font-size="12" fill="#AB47BC" font-weight="bold">x</text>
                 <text x="55" y="48" font-size="12" fill="#AB47BC" font-weight="bold">y</text>
                 <text x="105" y="45" font-size="11" fill="#000000">40°</text>
                 <text x="45" y="68" font-size="12" fill="#AB47BC" font-weight="bold">z</text>
                 <text x="75" y="92" font-size="11" fill="#AB47BC" font-weight="bold">(v)</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            <span class="step-label">(i)</span> y = 100° (Opposite angles); x = 180° - 100° = <span class="ans-highlight">80°</span> (Adjacent angles); z = x = <span class="ans-highlight">80°</span> (Corresponding angles).<br/>
            <span class="step-label">(ii)</span> x + 50° = 180° ⟹ <span class="ans-highlight">x = 130°</span> (Adjacent angles); y = x = <span class="ans-highlight">130°</span> (Opposite angles); z = x = <span class="ans-highlight">130°</span> (Corresponding angles).<br/>
            <span class="step-label">(iii)</span> <span class="ans-highlight">x = 90°</span> (Diagonals are perpendicular); y = 180° - (90° + 30°) = <span class="ans-highlight">60°</span> (Angle sum property); z = y = <span class="ans-highlight">60°</span> (Alternate interior angles).<br/>
            <span class="step-label">(iv)</span> y = 80° (Opposite angles); x + 80° = 180° ⟹ <span class="ans-highlight">x = 100°</span> (Adjacent angles); z = 80° (Corresponding angles).<br/>
            <span class="step-label">(v)</span> <span class="ans-highlight">y = 112°</span> (Opposite angles); x = 180° - (112° + 40°) = <span class="ans-highlight">28°</span> (Angle sum property); z = x = <span class="ans-highlight">28°</span> (Alternate interior angles).
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">3. Can a quadrilateral ABCD be a parallelogram if (i) ∠D + ∠B = 180°? (ii) AB = DC = 8 cm, AD = 4 cm and BC = 4.4 cm? (iii) ∠A = 70° and ∠C = 65°?</div>
          <div class="sol-box">
            (i) <span class="ans-highlight">Can be</span>, but not necessarily (it would be a rectangle or square).<br/>
            (ii) <span class="ans-highlight">No</span>, opposite sides AD and BC must be equal (4 ≠ 4.4).<br/>
            (iii) <span class="ans-highlight">No</span>, opposite angles ∠A and ∠C must be equal (70 ≠ 65).
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">4. Draw a rough figure of a quadrilateral that is not a parallelogram but has exactly two opposite angles of equal measure.</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="140" height="100" viewBox="0 0 140 100">
                 <polygon points="70,10 110,50 70,90 40,50" fill="none" stroke="#000000" stroke-width="2"/>
                 <text x="35" y="55" font-size="10" font-weight="bold">110°</text>
                 <text x="112" y="55" font-size="10" font-weight="bold">110°</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            A <span class="ans-highlight">Kite</span> is a quadrilateral that is not a parallelogram but has exactly one pair of opposite angles of equal measure. In the figure, the angles between unequal sides are equal.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">5. The measures of two adjacent angles of a parallelogram are in the ratio 3:2. Find the measure of each of the angles of the parallelogram.</div>
          <div class="sol-box">
            Let the angles be 3x and 2x.<br/>
            3x + 2x = 180° ⟹ 5x = 180° ⟹ x = 36°.<br/>
            Angles: 3(36) = <span class="ans-highlight">108°</span> and 2(36) = <span class="ans-highlight">72°</span>.<br/>
            The four angles are 108°, 72°, 108°, and 72°.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">6. Two adjacent angles of a parallelogram have equal measure. Find the measure of each of the angles of the parallelogram.</div>
          <div class="sol-box">
            Let each adjacent angle be x.<br/>
            x + x = 180° (Adjacent angles are supplementary)<br/>
            2x = 180° ⟹ <span class="ans-highlight">x = 90°</span>.<br/>
            Since each adjacent angle is 90°, all angles of the parallelogram are 90°. (It is a rectangle).
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">7. The adjacent figure HOPE is a parallelogram. Find the angle measures x, y and z. State the properties you use to find them.</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="160" height="110" viewBox="0 0 160 110">
                 <polygon points="30,80 120,80 145,30 55,30" fill="none" stroke="#000000" stroke-width="2"/>
                 <line x1="30" y1="80" x2="145" y2="30" stroke="#999" stroke-dasharray="3"/>
                 <line x1="120" y1="80" x2="150" y2="80" stroke="#000000" stroke-width="1.5"/>
                 <text x="15" y="85" font-size="11" font-weight="bold">H</text>
                 <text x="120" y="88" font-size="11" font-weight="bold">O</text>
                 <text x="148" y="32" font-size="11" font-weight="bold">P</text>
                 <text x="50" y="25" font-size="11" font-weight="bold">E</text>
                 <text x="128" y="78" font-size="9">70°</text>
                 <text x="55" y="48" font-size="11">x</text>
                 <text x="120" y="45" font-size="11">y</text>
                 <text x="55" y="75" font-size="9">40°</text>
                 <text x="35" y="65" font-size="11">z</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            ∠HOP + 70° = 180° (Linear pair) ⟹ ∠HOP = 110°.<br/>
            <span class="ans-highlight">x = 110°</span> (Opposite angles of a parallelogram are equal).<br/>
            <span class="ans-highlight">y = 40°</span> (Alternate interior angles, HE || OP).<br/>
            In ∆HOP, z + 40° + 110° = 180° (Angle sum property) ⟹ z + 150° = 180° ⟹ <span class="ans-highlight">z = 30°</span>.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">8. The following figures GUNS and RUNS are parallelograms. Find x and y. (Lengths are in cm)</div>
          <div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center;">
            <div class="math-svg">
              <svg width="140" height="80">
                <polygon points="20,60 110,60 110,20 20,20" fill="none" stroke="#000000" stroke-width="1.5"/>
                <text x="60" y="68" font-size="10">26</text><text x="60" y="15" font-size="10">3y - 1</text>
                <text x="5" y="45" font-size="10">3x</text><text x="115" y="45" font-size="10">18</text>
                <text x="60" y="78" font-size="11" font-weight="bold">(i) GUNS</text>
              </svg>
            </div>
            <div class="math-svg">
              <svg width="140" height="80">
                <polygon points="20,60 110,60 110,20 20,20" fill="none" stroke="#000000" stroke-width="1.5"/>
                <line x1="20" y1="60" x2="110" y2="20" stroke="#999" stroke-dasharray="3"/>
                <line x1="110" y1="60" x2="20" y2="20" stroke="#999" stroke-dasharray="3"/>
                <text x="40" y="45" font-size="9">16</text><text x="80" y="45" font-size="9">x+y</text>
                <text x="60" y="35" font-size="9">y+7</text><text x="60" y="55" font-size="9">20</text>
                <text x="60" y="78" font-size="11" font-weight="bold">(ii) RUNS</text>
              </svg>
            </div>
          </div>
          <div class="sol-box">
            <span class="step-label">(i)</span> GS = UN ⟹ 3x = 18 ⟹ <span class="ans-highlight">x = 6</span>; GU = SN ⟹ 3y - 1 = 26 ⟹ 3y = 27 ⟹ <span class="ans-highlight">y = 9</span>.<br/>
            <span class="step-label">(ii)</span> Diagonals bisect: y + 7 = 20 ⟹ <span class="ans-highlight">y = 13</span>; x + y = 16 ⟹ x + 13 = 16 ⟹ <span class="ans-highlight">x = 3</span>.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">9. In the figure, both RISK and CLUE are parallelograms. Find the value of x.</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="220" height="110" viewBox="0 0 220 110">
                 <!-- RISK (Leans Left) -->
                 <polygon points="50,25 20,85 100,85 130,25" fill="none" stroke="#000000" stroke-width="1.5"/>
                 <!-- CLUE (Leans Right) -->
                 <polygon points="90,25 120,85 200,85 170,25" fill="none" stroke="#000000" stroke-width="1.5"/>
                 <!-- Angle Values -->
                 <text x="55" y="40" font-size="9" font-weight="bold">120°</text>
                 <text x="172" y="80" font-size="9" font-weight="bold">70°</text>
                 <!-- x label -->
                 <text x="108" y="52" font-size="11" fill="#AB47BC" font-weight="bold">x</text>
                 <!-- Vertex labels -->
                 <text x="45" y="20" font-size="10" font-weight="bold">K</text>
                 <text x="15" y="98" font-size="10" font-weight="bold">R</text>
                 <text x="95" y="98" font-size="10" font-weight="bold">I</text>
                 <text x="125" y="20" font-size="10" font-weight="bold">S</text>
                 <text x="85" y="20" font-size="10" font-weight="bold">E</text>
                 <text x="115" y="98" font-size="10" font-weight="bold">C</text>
                 <text x="202" y="98" font-size="10" font-weight="bold">L</text>
                 <text x="165" y="20" font-size="10" font-weight="bold">U</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            In parallelogram RISK, ∠K = 120° ⟹ ∠S = 180° - 120° = 60° (Adjacent angles).<br/>
            In parallelogram CLUE, ∠L = 70° ⟹ ∠E = 70° (Opposite angles).<br/>
            In the small triangle formed by the intersection, x + 60° + 70° = 180° (Angle sum property) ⟹ x + 130° = 180° ⟹ <span class="ans-highlight">x = 50°</span>.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">10. Explain how this figure is a trapezium. Which of its two sides are parallel? (Fig 3.26)</div>
          <div style="text-align:center;">
            <div class="math-svg">
              <svg width="140" height="100">
                <polygon points="30,80 120,80 100,30 50,30" fill="none" stroke="#000000" stroke-width="2"/>
                <text x="100" y="75" font-size="10">80°</text><text x="85" y="45" font-size="10">100°</text>
                <text x="125" y="85" font-size="12">L</text><text x="20" y="85" font-size="12">K</text>
                <text x="105" y="25" font-size="12">M</text><text x="40" y="25" font-size="12">N</text>
              </svg>
            </div>
          </div>
          <div class="sol-box">
            ∠L + ∠M = 80° + 100° = 180°. Since interior angles on the same side of transversal ML are supplementary, sides <span class="ans-highlight">NM || KL</span>. A quadrilateral with one pair of parallel sides is a trapezium.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">11. Find m∠C in Fig 3.27 if AB || DC.</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="140" height="90">
                 <polygon points="30,70 120,70 100,20 40,20" fill="none" stroke="#000000" stroke-width="2"/>
                 <text x="100" y="65" font-size="10">120°</text>
                 <text x="125" y="75" font-size="12">B</text><text x="20" y="75" font-size="12">A</text>
                 <text x="105" y="18" font-size="12">C</text><text x="35" y="18" font-size="12">D</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            Since AB || DC, ∠B + ∠C = 180° (Adjacent angles are supplementary).<br/>
            120° + ∠C = 180° ⟹ <span class="ans-highlight">∠C = 60°</span>.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">12. Find the measures of ∠P and ∠S if SP || RQ in Fig 3.28. (If you find m∠R, is there more than one method to find m∠P?)</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="120" height="110">
                 <polygon points="30,90 90,90 90,20 30,50" fill="none" stroke="#000000" stroke-width="2"/>
                 <rect x="82" y="82" width="8" height="8" fill="none" stroke="#AB47BC" stroke-width="1.5"/>
                 <text x="80" y="65" font-size="10">130°</text>
                 <text x="95" y="95" font-size="12">Q</text><text x="20" y="95" font-size="12">P</text>
                 <text x="95" y="20" font-size="12">R</text><text x="20" y="50" font-size="12">S</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            Since SP || RQ, ∠S + ∠R = 180° and ∠P + ∠Q = 180°.<br/>
            ∠R = 90° (Given) ⟹ ∠S + 90° = 180° ⟹ <span class="ans-highlight">∠S = 90°</span>.<br/>
            ∠Q = 130° (Given) ⟹ ∠P + 130° = 180° ⟹ <span class="ans-highlight">∠P = 50°</span>.<br/>
            Yes, there is another method. After finding ∠S and ∠R, we can use the Angle Sum Property of a quadrilateral: ∠P + ∠Q + ∠R + ∠S = 360°.
          </div>
        </div>
      </div>
    `,
    "ex3-4": `
      <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
        .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Outfit', sans-serif; }
        .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; margin-bottom: 30px; }
        .q-text { color: #AB47BC; font-weight: 600; margin-bottom: 15px; text-align: justify; }
        .sol-box { border-left: 4px solid #AB47BC; padding: 15px; margin-top: 15px; background: rgba(171, 71, 188, 0.08); border-radius: 0 12px 12px 0; }
        .ans-highlight { color: #AB47BC; font-weight: 700; }
        .math-svg { background: white; padding: 15px; border-radius: 12px; margin: 15px 0; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
          .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
      <div class="ex-container">
        <div class="q-card">
          <div class="q-text">1. State whether True or False.</div>
          <div class="sol-box">
            (a) All rectangles are squares: <span class="ans-highlight">False</span><br/>
            (b) All rhombuses are parallelograms: <span class="ans-highlight">True</span><br/>
            (c) All squares are rhombuses and also rectangles: <span class="ans-highlight">True</span><br/>
            (d) All squares are not parallelograms: <span class="ans-highlight">False</span><br/>
            (e) All kites are rhombuses: <span class="ans-highlight">False</span><br/>
            (f) All rhombuses are kites: <span class="ans-highlight">True</span><br/>
            (g) All parallelograms are trapeziums: <span class="ans-highlight">True</span><br/>
            (h) All squares are trapeziums: <span class="ans-highlight">True</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">2. Identify all the quadrilaterals that have (a) four sides of equal length (b) four right angles.</div>
          <div class="sol-box">
            (a) <span class="ans-highlight">Rhombus and Square</span><br/>
            (b) <span class="ans-highlight">Rectangle and Square</span>
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">3. Explain how a square is (i) a quadrilateral (ii) a parallelogram (iii) a rhombus (iv) a rectangle.</div>
          <div class="sol-box">
            (i) It has four sides.<br/>
            (ii) Its opposite sides are parallel.<br/>
            (iii) It is a parallelogram with four equal sides.<br/>
            (iv) It is a parallelogram with four right angles.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">4. Name the quadrilaterals whose diagonals (i) bisect each other (ii) are perpendicular bisectors of each other (iii) are equal.</div>
          <div class="sol-box">
            (i) Parallelogram, Rhombus, Rectangle, and Square.<br/>
            (ii) Rhombus and Square.<br/>
            (iii) Rectangle and Square.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">5. Explain why a rectangle is a convex quadrilateral.</div>
          <div class="sol-box">
            A rectangle is a convex quadrilateral because both its diagonals lie entirely in the interior of the quadrilateral.
          </div>
        </div>

        <div class="q-card">
          <div class="q-text">6. ABC is a right-angled triangle and O is the mid point of the side opposite to the right angle. Explain why O is equidistant from A, B and C. (The dotted lines are drawn additionally to help you).</div>
          <div style="text-align:center;">
             <div class="math-svg">
               <svg width="140" height="100" viewBox="0 0 140 100">
                 <polygon points="20,80 120,80 120,20" fill="none" stroke="#000000" stroke-width="2"/>
                 <line x1="20" y1="80" x2="120" y2="20" stroke="#000000" stroke-width="2"/>
                 <line x1="20" y1="80" x2="20" y2="20" stroke="#999" stroke-dasharray="3"/>
                 <line x1="20" y1="20" x2="120" y2="20" stroke="#999" stroke-dasharray="3"/>
                 <circle cx="70" cy="50" r="3" fill="#AB47BC"/>
                 <text x="10" y="85" font-size="12" font-weight="bold">B</text>
                 <text x="125" y="85" font-size="12" font-weight="bold">C</text>
                 <text x="125" y="20" font-size="12" font-weight="bold">A</text>
                 <text x="10" y="20" font-size="12" fill="#999">D</text>
                 <text x="75" y="48" font-size="12" font-weight="bold" fill="#AB47BC">O</text>
               </svg>
             </div>
          </div>
          <div class="sol-box">
            By drawing the dotted lines, we complete the rectangle ABCD. In a rectangle, diagonals are equal and bisect each other. Thus, AC = BD and O is the midpoint of both. Therefore, <span class="ans-highlight">OA = OB = OC = OD</span>. This proves O is equidistant from A, B and C.
          </div>
        </div>
      </div>
    `,
  },
};
