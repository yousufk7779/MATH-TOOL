import { ChapterContent } from "../types";

export const c9Math5: ChapterContent = {
  id: "c9-math-5",
  number: 5,
  title: "Lines and Angles",
  introduction:
    "In this chapter, we will study the properties of the angles formed when two lines intersect each other, and also the properties of the angles formed when a line intersects two or more parallel lines at distinct points.",
  definitions: [
    {
      term: "Line Segment",
      description: "A part of a line with two end points.",
    },
    { term: "Ray", description: "A part of a line with one end point." },
    {
      term: "Collinear points",
      description: "Three or more points lying on the same line.",
    },
    {
      term: "Angle",
      description: "Formed when two rays originate from the same end point.",
    },
  ],
  keyPoints: [
    "An acute angle measures between 0° and 90°.",
    "A right angle is exactly 90°.",
    "An obtuse angle is greater than 90° but less than 180°.",
    "A straight angle is exactly 180°.",
    "A reflex angle is greater than 180° but less than 360°.",
  ],
  formulas: [],
  crux: [
    "If a ray stands on a line, then the sum of two adjacent angles so formed is 180° (Linear Pair Axiom).",
    "If two lines intersect each other, then the vertically opposite angles are equal.",
  ],
  exercises: [
    { id: "ex5-1", name: "Ex 5.1", questions: [] },
    { id: "ex5-2", name: "Ex 5.2", questions: [] },
  ],
  examples: [],
  mcqs: [
    {
      id: "m1",
      question:
        "The measure of an angle which is four times its supplement is:",
      options: ["36°", "144°", "120°", "100°"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question:
        "If two interior angles on the same side of a transversal intersecting two parallel lines are in the ratio 2:3, then the greater of the two angles is:",
      options: ["72°", "108°", "54°", "120°"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question: "An angle is 20° less than its complement. The angle is:",
      options: ["35°", "55°", "45°", "25°"],
      correctAnswer: "A",
    },
    {
      id: "m4",
      question:
        "If one angle of a linear pair is acute, then the other angle is:",
      options: ["Acute", "Obtuse", "Right", "Reflex"],
      correctAnswer: "B",
    },
    {
      id: "m5",
      question: "The sum of all angles around a point is:",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: "D",
    },
    {
      id: "m6",
      question: "The complement of 52° is:",
      options: ["38°", "48°", "128°", "148°"],
      correctAnswer: "A",
    },
    {
      id: "m7",
      question:
        "If two parallel lines are intersected by a transversal, then the bisectors of any two corresponding angles are:",
      options: ["Perpendicular", "Parallel", "Intersecting", "None of these"],
      correctAnswer: "B",
    },
    {
      id: "m8",
      question:
        "Angles of a triangle are in the ratio 2:4:3. The smallest angle of the triangle is:",
      options: ["60°", "40°", "80°", "20°"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question:
        "An exterior angle of a triangle is 105° and its two interior opposite angles are equal. Each of these equal angles is:",
      options: ["37.5°", "52.5°", "72.5°", "75°"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question:
        "If two lines intersect, the vertically opposite angles are always:",
      options: ["Supplementary", "Complementary", "Equal", "Unequal"],
      correctAnswer: "C",
    },
  ],
  summary: [
    "Adjacent angles with a common arm and non-common arms forming a line are called linear pairs.",
    "Parallel lines never intersect and the distance between them remains constant.",
    "The sum of angles of a triangle is 180°.",
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #66BB6A; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #66BB6A; padding-left: 15px; margin-top: 15px; background: rgba(102, 187, 106, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #66BB6A !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #66BB6A !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(102, 187, 106, 0.05) !important; border-left: 4px solid #66BB6A !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #66BB6A !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #66BB6A !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #66BB6A !important; font-weight: 700; }
        strong { color: #66BB6A !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #66BB6A; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(102, 187, 106, 0.05); color: #66BB6A; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="main-wrapper">
      <div class="content-box">
        <div class="section-title">1. Basic Terms</div>
        <p class="step"><strong>Line Segment:</strong> A part of a line with two end points. It is denoted by AB.</p>
        <p class="step"><strong>Ray:</strong> A part of a line with one end point. It is denoted by AB with an arrow.</p>
        <p class="step"><strong>Collinear points:</strong> If three or more points lie on the same line, they are called collinear points; otherwise they are called non-collinear points.</p>
      </div>
      <div class="content-box">
        <div class="section-title">2. Types of Angles</div>
        <ul class="step">
          <li><strong>Acute angle:</strong> 0° < &theta; < 90°</li>
          <li><strong>Right angle:</strong> &theta; = 90°</li>
          <li><strong>Obtuse angle:</strong> 90° < &theta; < 180°</li>
          <li><strong>Straight angle:</strong> &theta; = 180°</li>
          <li><strong>Reflex angle:</strong> 180° < &theta; < 360°</li>
        </ul>
      </div>
      <div class="content-box">
        <div class="section-title">3. Intersecting and Non-intersecting Lines</div>
        <p class="step">Lines which cross each other at a point are <strong>intersecting lines</strong>. Lines which never meet, even if extended indefinitely, are <strong>parallel lines</strong>. When two lines intersect, vertically opposite angles are equal and the two angles of a linear pair add up to 180°. When a transversal cuts two parallel lines, corresponding angles are equal, alternate interior angles are equal, and interior angles on the same side add up to 180°.</p>
      </div>
    </div>
`,
  htmlExercises: {
    "ex5-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #66BB6A; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #66BB6A; padding-left: 15px; margin-top: 15px; background: rgba(102, 187, 106, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #66BB6A !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #66BB6A !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(102, 187, 106, 0.05) !important; border-left: 4px solid #66BB6A !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #66BB6A !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #66BB6A !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #66BB6A !important; font-weight: 700; }
        strong { color: #66BB6A !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #66BB6A; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(102, 187, 106, 0.05); color: #66BB6A; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">1. In Fig. 5.23, lines AB and CD intersect at O. If &ang;AOC + &ang;BOE = 70&deg; and &ang;BOD = 40&deg;, find &ang;BOE and reflex &ang;COE.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="60" x2="180" y2="60" stroke="white" stroke-width="2" />
          <line x1="50" y1="20" x2="150" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="60" x2="160" y2="20" stroke="white" stroke-width="2" />
          <text x="15" y="65" fill="white" font-size="12">A</text>
          <text x="185" y="65" fill="white" font-size="12">B</text>
          <text x="40" y="20" fill="white" font-size="12">C</text>
          <text x="150" y="115" fill="white" font-size="12">D</text>
          <text x="165" y="20" fill="white" font-size="12">E</text>
          <text x="95" y="75" fill="white" font-size="12">O</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠AOC + ∠BOE = 70° and ∠BOD = 40°<br/>
          Vertically opposite angles are equal:<br/>
          ∠AOC = ∠BOD = 40°<br/>
          40° + ∠BOE = 70°<br/>
          ∠BOE = 70° − 40° = 30°<br/>
          Angles on the straight line AB add up to 180°:<br/>
          ∠AOC + ∠COE + ∠BOE = 180°<br/>
          40° + ∠COE + 30° = 180°<br/>
          ∠COE = 180° − 70° = 110°<br/>
          Reflex ∠COE = 360° − ∠COE<br/>
          = 360° − 110° = 250°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠BOE = 30°, reflex ∠COE = 250°</span></div>
        </div>

        <div class="question">2. In Fig. 5.24, lines XY and MN intersect at O. If &ang;POY = 90&deg; and a : b = 2 : 3, find c.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <line x1="20" y1="95" x2="180" y2="95" stroke="white" stroke-width="2" />
          <line x1="55.92" y1="34.32" x2="132.33" y2="139.5" stroke="white" stroke-width="2" />
          <line x1="100" y1="95" x2="100" y2="20" stroke="white" stroke-width="2" />
          <rect x="100" y="85" width="10" height="10" fill="none" stroke="white" stroke-width="1" />
          <text x="8" y="99" fill="white" font-size="12">X</text>
          <text x="184" y="99" fill="white" font-size="12">Y</text>
          <text x="43.92" y="34.32" fill="white" font-size="12">M</text>
          <text x="136.33" y="149.5" fill="white" font-size="12">N</text>
          <text x="96" y="16" fill="white" font-size="12">P</text>
          <text x="114" y="111" fill="white" font-size="12">O</text>
          <path d="M 100 73 A 22 22 0 0 0 87.07 77.2" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="86.11" y="68.57" fill="#66BB6A" font-size="12">a</text>
          <path d="M 90.6 82.06 A 16 16 0 0 0 84 95" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="72.83" y="87.2" fill="#66BB6A" font-size="12">b</text>
          <path d="M 88 95 A 12 12 0 0 0 107.05 104.71" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="85.1" y="120.38" fill="#66BB6A" font-size="12">c</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          ∠POY = 90°<br/>
          Angles on the straight line XY add up to 180°:<br/>
          ∠POX = 180° − 90° = 90°<br/>
          a + b = 90°<br/>
          a : b = 2 : 3, so let a = 2k and b = 3k<br/>
          2k + 3k = 90°<br/>
          5k = 90°<br/>
          k = 18°<br/>
          a = 2 × 18° = 36°, b = 3 × 18° = 54°<br/>
          b and c form a linear pair on line MN:<br/>
          b + c = 180°<br/>
          54° + c = 180°<br/>
          c = 180° − 54° = 126°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">c = 126°</span></div>
        </div>

        <div class="question">3. In Fig. 5.25, &ang;PQR = &ang;PRQ, then prove that &ang;PQS = &ang;PRT.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="30" x2="60" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="30" x2="140" y2="100" stroke="white" stroke-width="2" />
          <text x="95" y="25" fill="white" font-size="12">P</text>
          <text x="55" y="115" fill="white" font-size="12">Q</text>
          <text x="140" y="115" fill="white" font-size="12">R</text>
          <text x="15" y="115" fill="white" font-size="12">S</text>
          <text x="180" y="115" fill="white" font-size="12">T</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Given: ∠PQR = ∠PRQ<br/>
          Linear pair at Q:<br/>
          ∠PQS + ∠PQR = 180° ...(1)<br/>
          Linear pair at R:<br/>
          ∠PRT + ∠PRQ = 180° ...(2)<br/>
          From (1) and (2):<br/>
          ∠PQS + ∠PQR = ∠PRT + ∠PRQ<br/>
          Since ∠PQR = ∠PRQ, remove them from both sides:<br/>
          ∠PQS = ∠PRT<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠PQS = ∠PRT (Hence proved)</span></div>
        </div>

        <div class="question">4. In Fig. 5.26, if x + y = w + z, then prove that AOB is a line.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <line x1="100" y1="75" x2="20" y2="75" stroke="white" stroke-width="2" />
          <line x1="100" y1="75" x2="180" y2="75" stroke="white" stroke-width="2" />
          <line x1="100" y1="75" x2="79.48" y2="18.62" stroke="white" stroke-width="2" />
          <line x1="100" y1="75" x2="79.48" y2="131.38" stroke="white" stroke-width="2" />
          <text x="8" y="79" fill="white" font-size="12">A</text>
          <text x="184" y="79" fill="white" font-size="12">B</text>
          <text x="75.48" y="14.62" fill="white" font-size="12">C</text>
          <text x="75.48" y="145.38" fill="white" font-size="12">D</text>
          <text x="104" y="89" fill="white" font-size="12">O</text>
          <text x="76.34" y="65.23" fill="#66BB6A" font-size="12">x</text>
          <text x="109.77" y="59.34" fill="#66BB6A" font-size="12">y</text>
          <text x="109.77" y="98.66" fill="#66BB6A" font-size="12">z</text>
          <text x="76.34" y="92.77" fill="#66BB6A" font-size="12">w</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Angles around point O add up to 360°:<br/>
          x + y + z + w = 360°<br/>
          Given: x + y = w + z<br/>
          (x + y) + (x + y) = 360°<br/>
          2(x + y) = 360°<br/>
          x + y = 180°<br/>
          ∠AOC + ∠COB = 180°<br/>
          Two adjacent angles adding up to 180° form a linear pair, so OA and OB are opposite rays.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AOB is a line (Hence proved)</span></div>
        </div>

        <div class="question">5. In Fig. 5.27, POQ is a line. Ray OR is perpendicular to line PQ. OS is another ray lying between rays OP and OR. Prove that &ang;ROS = 1/2 (&ang;QOS - &ang;POS).</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="100" y2="20" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="50" y2="30" stroke="white" stroke-width="2" />
          <text x="15" y="115" fill="white" font-size="12">P</text>
          <text x="185" y="115" fill="white" font-size="12">Q</text>
          <text x="95" y="15" fill="white" font-size="12">R</text>
          <text x="45" y="25" fill="white" font-size="12">S</text>
          <text x="95" y="115" fill="white" font-size="12">O</text>
          <rect x="100" y="90" width="10" height="10" fill="none" stroke="white" stroke-width="1" />
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          OR ⊥ PQ, so ∠POR = 90° and ∠QOR = 90°<br/>
          ∠QOS = ∠QOR + ∠ROS = 90° + ∠ROS ...(1)<br/>
          ∠POS = ∠POR − ∠ROS = 90° − ∠ROS ...(2)<br/>
          Subtracting (2) from (1):<br/>
          ∠QOS − ∠POS = (90° + ∠ROS) − (90° − ∠ROS)<br/>
          ∠QOS − ∠POS = 2∠ROS<br/>
          ∠ROS = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>(∠QOS − ∠POS)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠ROS = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>(∠QOS − ∠POS) (Hence proved)</span></div>
        </div>

        <div class="question">6. It is given that &ang;XYZ = 64&deg; and XY is produced to point P. Draw a figure from the given information. If ray YQ bisects &ang;ZYP, find &ang;XYQ and reflex &ang;QYP.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="132.88" y2="32.59" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="60.26" y2="36.4" stroke="white" stroke-width="2" />
          <text x="8" y="104" fill="white" font-size="12">P</text>
          <text x="184" y="104" fill="white" font-size="12">X</text>
          <text x="96" y="116" fill="white" font-size="12">Y</text>
          <text x="134.88" y="30.59" fill="white" font-size="12">Z</text>
          <text x="50.26" y="34.4" fill="white" font-size="12">Q</text>
          <path d="M 118 100 A 18 18 0 0 0 107.89 83.82" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="121.44" y="88.1" fill="#66BB6A" font-size="12">64°</text>
          <path d="M 105.26 89.21 A 12 12 0 0 0 93.64 89.82" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <path d="M 93.64 89.82 A 12 12 0 0 0 88 100" stroke="#66BB6A" fill="none" stroke-width="1.5" />
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Figure: draw ∠XYZ = 64°, produce XY to P, and draw ray YQ bisecting ∠ZYP (see the figure).<br/>
          XY is produced to P, so XYP is a straight line.<br/>
          Linear pair:<br/>
          ∠XYZ + ∠ZYP = 180°<br/>
          64° + ∠ZYP = 180°<br/>
          ∠ZYP = 116°<br/>
          YQ bisects ∠ZYP:<br/>
          ∠ZYQ = ∠QYP = <span class='frac'><span class='num'>116°</span><span class='den'>2</span></span> = 58°<br/>
          ∠XYQ = ∠XYZ + ∠ZYQ<br/>
          = 64° + 58° = 122°<br/>
          Reflex ∠QYP = 360° − ∠QYP<br/>
          = 360° − 58° = 302°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠XYQ = 122°, reflex ∠QYP = 302°</span></div>
        </div>
      </div>
`,
    "ex5-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #66BB6A; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #66BB6A; padding-left: 15px; margin-top: 15px; background: rgba(102, 187, 106, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #66BB6A !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #66BB6A !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(102, 187, 106, 0.05) !important; border-left: 4px solid #66BB6A !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #66BB6A !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #66BB6A !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #66BB6A !important; font-weight: 700; }
        strong { color: #66BB6A !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #66BB6A; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(102, 187, 106, 0.05); color: #66BB6A; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">1. In Fig. 5.31, if AB ∥ CD, CD ∥ EF and y : z = 3 : 7, find x.</div>
        <svg viewBox="0 0 200 140" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="20" y1="70" x2="180" y2="70" stroke="white" stroke-width="2" />
          <line x1="20" y1="110" x2="180" y2="110" stroke="white" stroke-width="2" />
          <line x1="55.47" y1="10" x2="142.65" y2="130" stroke="white" stroke-width="2" />
          <text x="8" y="34" fill="white" font-size="12">A</text>
          <text x="184" y="34" fill="white" font-size="12">B</text>
          <text x="8" y="74" fill="white" font-size="12">C</text>
          <text x="184" y="74" fill="white" font-size="12">D</text>
          <text x="8" y="114" fill="white" font-size="12">E</text>
          <text x="184" y="114" fill="white" font-size="12">F</text>
          <path d="M 58 30 A 12 12 0 0 0 77.05 39.71" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="56.01" y="53.6" fill="#66BB6A" font-size="12">x</text>
          <path d="M 107.29 81.33 A 14 14 0 0 0 113.06 70" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="116.44" y="84.9" fill="#66BB6A" font-size="12">y</text>
          <path d="M 140.12 110 A 12 12 0 0 0 121.07 100.29" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="134.11" y="94.4" fill="#66BB6A" font-size="12">z</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          AB ∥ CD and CD ∥ EF<br/>
          Lines parallel to the same line are parallel to each other:<br/>
          AB ∥ EF<br/>
          y : z = 3 : 7, so let y = 3k and z = 7k<br/>
          Interior angles on the same side of the transversal (CD ∥ EF) add up to 180°:<br/>
          y + z = 180°<br/>
          3k + 7k = 180°<br/>
          10k = 180°<br/>
          k = 18°<br/>
          y = 3 × 18° = 54°<br/>
          z = 7 × 18° = 126°<br/>
          Alternate interior angles are equal (AB ∥ EF):<br/>
          x = z<br/>
          x = 126°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">x = 126°</span></div>
        </div>

        <div class="question">2. In Fig. 5.32, if AB ∥ CD, EF ⊥ CD and ∠GED = 126°, find ∠AGE, ∠GEF and ∠FGE.</div>
        <svg viewBox="0 0 200 140" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="20" y1="110" x2="180" y2="110" stroke="white" stroke-width="2" />
          <line x1="120" y1="110" x2="120" y2="30" stroke="white" stroke-width="2" />
          <line x1="61.88" y1="30" x2="120" y2="110" stroke="white" stroke-width="2" />
          <rect x="120" y="100" width="10" height="10" fill="none" stroke="white" stroke-width="1" />
          <text x="8" y="34" fill="white" font-size="12">A</text>
          <text x="57.88" y="24" fill="white" font-size="12">G</text>
          <text x="116" y="24" fill="white" font-size="12">F</text>
          <text x="184" y="34" fill="white" font-size="12">B</text>
          <text x="8" y="114" fill="white" font-size="12">C</text>
          <text x="116" y="126" fill="white" font-size="12">E</text>
          <text x="184" y="114" fill="white" font-size="12">D</text>
          <path d="M 142 110 A 22 22 0 0 0 107.07 92.2" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="99.52" y="73.2" fill="#66BB6A" font-size="12">126°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Alternate interior angles are equal (AB ∥ CD, transversal GE):<br/>
          ∠AGE = ∠GED<br/>
          ∠AGE = 126°<br/>
          EF ⊥ CD, so ∠FED = 90°<br/>
          ∠GEF = ∠GED − ∠FED<br/>
          = 126° − 90°<br/>
          = 36°<br/>
          Linear pair on line AB:<br/>
          ∠AGE + ∠FGE = 180°<br/>
          126° + ∠FGE = 180°<br/>
          ∠FGE = 180° − 126° = 54°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠AGE = 126°, ∠GEF = 36°, ∠FGE = 54°</span></div>
        </div>

        <div class="question">3. In Fig. 5.33, if PQ ∥ ST, ∠PQR = 110° and ∠RST = 130°, find ∠QRS. [Hint : Draw a line parallel to ST through point R.]</div>
        <svg viewBox="0 0 200 140" class="ex-img">
          <line x1="30" y1="44.22" x2="76.06" y2="44.22" stroke="white" stroke-width="2" />
          <line x1="157.85" y1="41.06" x2="190" y2="41.06" stroke="white" stroke-width="2" />
          <line x1="76.06" y1="44.22" x2="100" y2="110" stroke="white" stroke-width="2" />
          <line x1="100" y1="110" x2="157.85" y2="41.06" stroke="white" stroke-width="2" />
          <line x1="30" y1="110" x2="180" y2="110" stroke="white" stroke-width="2" stroke-dasharray="4" />
          <text x="18" y="48.22" fill="white" font-size="12">P</text>
          <text x="74.06" y="38.22" fill="white" font-size="12">Q</text>
          <text x="153.85" y="35.06" fill="white" font-size="12">S</text>
          <text x="184" y="35.06" fill="white" font-size="12">T</text>
          <text x="96" y="126" fill="white" font-size="12">R</text>
          <text x="18" y="114" fill="white" font-size="12">X</text>
          <text x="184" y="114" fill="white" font-size="12">Y</text>
          <path d="M 64.06 44.22 A 12 12 0 0 0 80.16 55.5" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="58.29" y="67.88" fill="#66BB6A" font-size="12">110°</text>
          <path d="M 150.14 50.25 A 12 12 0 0 0 169.85 41.06" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="166.85" y="67.58" fill="#66BB6A" font-size="12">130°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Draw a line XY through R, parallel to ST (dotted line in the figure).<br/>
          XY ∥ ST and PQ ∥ ST, so XY ∥ PQ<br/>
          Interior angles on the same side add up to 180° (PQ ∥ XY, transversal QR):<br/>
          ∠PQR + ∠QRX = 180°<br/>
          110° + ∠QRX = 180°<br/>
          ∠QRX = 70°<br/>
          Interior angles on the same side add up to 180° (ST ∥ XY, transversal SR):<br/>
          ∠RST + ∠SRY = 180°<br/>
          130° + ∠SRY = 180°<br/>
          ∠SRY = 50°<br/>
          Angles on the straight line XY add up to 180°:<br/>
          ∠QRX + ∠QRS + ∠SRY = 180°<br/>
          70° + ∠QRS + 50° = 180°<br/>
          ∠QRS = 180° − 120° = 60°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">∠QRS = 60°</span></div>
        </div>

        <div class="question">4. In Fig. 5.34, if AB ∥ CD, ∠APQ = 50° and ∠PRD = 127°, find x and y.</div>
        <svg viewBox="0 0 200 130" class="ex-img">
          <line x1="10" y1="25" x2="190" y2="25" stroke="white" stroke-width="2" />
          <line x1="10" y1="105" x2="190" y2="105" stroke="white" stroke-width="2" />
          <line x1="100" y1="25" x2="32.87" y2="105" stroke="white" stroke-width="2" />
          <line x1="100" y1="25" x2="160.28" y2="105" stroke="white" stroke-width="2" />
          <text x="0" y="21" fill="white" font-size="12">A</text>
          <text x="96" y="19" fill="white" font-size="12">P</text>
          <text x="184" y="19" fill="white" font-size="12">B</text>
          <text x="0" y="121" fill="white" font-size="12">C</text>
          <text x="28.87" y="121" fill="white" font-size="12">Q</text>
          <text x="156.28" y="121" fill="white" font-size="12">R</text>
          <text x="184" y="121" fill="white" font-size="12">D</text>
          <path d="M 86 25 A 14 14 0 0 0 91 35.72" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="59.47" y="39.47" fill="#66BB6A" font-size="12">50°</text>
          <text x="95.23" y="50.99" fill="#66BB6A" font-size="12">y</text>
          <path d="M 44.87 105 A 12 12 0 0 0 40.58 95.81" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="48.81" y="99.7" fill="#66BB6A" font-size="12">x</text>
          <path d="M 172.28 105 A 12 12 0 0 0 153.06 95.42" stroke="#66BB6A" fill="none" stroke-width="1.5" />
          <text x="169.28" y="86.48" fill="#66BB6A" font-size="12">127°</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Alternate interior angles are equal (AB ∥ CD, transversal PQ):<br/>
          x = ∠APQ<br/>
          x = 50°<br/>
          Alternate interior angles are equal (AB ∥ CD, transversal PR):<br/>
          ∠APR = ∠PRD<br/>
          ∠APR = 127°<br/>
          ∠APR = ∠APQ + ∠QPR<br/>
          127° = 50° + y<br/>
          y = 127° − 50° = 77°<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">x = 50°, y = 77°</span></div>
        </div>

        <div class="question">5. In Fig. 5.35, PQ and RS are two mirrors placed parallel to each other. An incident ray AB strikes the mirror PQ at B, the reflected ray moves along the path BC and strikes the mirror RS at C and again reflects back along CD. Prove that AB ∥ CD.</div>
        <svg viewBox="0 0 200 140" class="ex-img">
          <line x1="15" y1="25" x2="195" y2="25" stroke="white" stroke-width="2" />
          <line x1="15" y1="115" x2="195" y2="115" stroke="white" stroke-width="2" />
          <line x1="20" y1="25" x2="26" y2="19" stroke="white" stroke-width="1" />
          <line x1="36" y1="25" x2="42" y2="19" stroke="white" stroke-width="1" />
          <line x1="52" y1="25" x2="58" y2="19" stroke="white" stroke-width="1" />
          <line x1="68" y1="25" x2="74" y2="19" stroke="white" stroke-width="1" />
          <line x1="84" y1="25" x2="90" y2="19" stroke="white" stroke-width="1" />
          <line x1="100" y1="25" x2="106" y2="19" stroke="white" stroke-width="1" />
          <line x1="116" y1="25" x2="122" y2="19" stroke="white" stroke-width="1" />
          <line x1="132" y1="25" x2="138" y2="19" stroke="white" stroke-width="1" />
          <line x1="148" y1="25" x2="154" y2="19" stroke="white" stroke-width="1" />
          <line x1="164" y1="25" x2="170" y2="19" stroke="white" stroke-width="1" />
          <line x1="180" y1="25" x2="186" y2="19" stroke="white" stroke-width="1" />
          <line x1="20" y1="115" x2="26" y2="121" stroke="white" stroke-width="1" />
          <line x1="36" y1="115" x2="42" y2="121" stroke="white" stroke-width="1" />
          <line x1="52" y1="115" x2="58" y2="121" stroke="white" stroke-width="1" />
          <line x1="68" y1="115" x2="74" y2="121" stroke="white" stroke-width="1" />
          <line x1="84" y1="115" x2="90" y2="121" stroke="white" stroke-width="1" />
          <line x1="100" y1="115" x2="106" y2="121" stroke="white" stroke-width="1" />
          <line x1="116" y1="115" x2="122" y2="121" stroke="white" stroke-width="1" />
          <line x1="132" y1="115" x2="138" y2="121" stroke="white" stroke-width="1" />
          <line x1="148" y1="115" x2="154" y2="121" stroke="white" stroke-width="1" />
          <line x1="164" y1="115" x2="170" y2="121" stroke="white" stroke-width="1" />
          <line x1="180" y1="115" x2="186" y2="121" stroke="white" stroke-width="1" />
          <line x1="55.59" y1="74.15" x2="90" y2="25" stroke="white" stroke-width="2" />
          <line x1="90" y1="25" x2="153.02" y2="115" stroke="white" stroke-width="2" />
          <line x1="153.02" y1="115" x2="187.43" y2="65.85" stroke="white" stroke-width="2" />
          <line x1="90" y1="25" x2="90" y2="70" stroke="white" stroke-width="2" stroke-dasharray="4" />
          <line x1="153.02" y1="115" x2="153.02" y2="70" stroke="white" stroke-width="2" stroke-dasharray="4" />
          <text x="5" y="41" fill="white" font-size="12">P</text>
          <text x="86" y="16" fill="white" font-size="12">B</text>
          <text x="187" y="41" fill="white" font-size="12">Q</text>
          <text x="5" y="109" fill="white" font-size="12">R</text>
          <text x="149.02" y="131" fill="white" font-size="12">C</text>
          <text x="187" y="109" fill="white" font-size="12">S</text>
          <text x="43.59" y="78.15" fill="white" font-size="12">A</text>
          <text x="191.43" y="65.85" fill="white" font-size="12">D</text>
          <text x="78" y="74" fill="white" font-size="12">M</text>
          <text x="157.02" y="74" fill="white" font-size="12">N</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Draw BM ⊥ PQ and CN ⊥ RS (the normals, dotted in the figure).<br/>
          PQ ∥ RS, and lines perpendicular to parallel lines are parallel:<br/>
          BM ∥ CN<br/>
          Alternate interior angles are equal (BM ∥ CN, transversal BC):<br/>
          ∠MBC = ∠BCN ...(1)<br/>
          Angle of incidence = angle of reflection:<br/>
          ∠ABM = ∠MBC ...(2)<br/>
          ∠BCN = ∠NCD ...(3)<br/>
          From (1), (2) and (3):<br/>
          ∠ABM = ∠NCD ...(4)<br/>
          Adding (1) and (4):<br/>
          ∠ABM + ∠MBC = ∠BCN + ∠NCD<br/>
          ∠ABC = ∠BCD<br/>
          ∠ABC and ∠BCD are alternate interior angles for lines AB and CD with transversal BC, and they are equal.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">AB ∥ CD (Hence proved)</span></div>
        </div>
      </div>
`,
  },
};
