import { ChapterContent } from "../types";

export const c9Math5: ChapterContent = {
  id: "c9-math-5",
  number: 5,
  title: "Lines and Angles",
  introduction: "In this chapter, we will study the properties of the angles formed when two lines intersect each other, and also the properties of the angles formed when a line intersects two or more parallel lines at distinct points.",
  definitions: [
    { term: "Line Segment", description: "A part of a line with two end points." },
    { term: "Ray", description: "A part of a line with one end point." },
    { term: "Collinear points", description: "Three or more points lying on the same line." },
    { term: "Angle", description: "Formed when two rays originate from the same end point." }
  ],
  keyPoints: [
    "An acute angle measures between 0° and 90°.",
    "A right angle is exactly 90°.",
    "An obtuse angle is greater than 90° but less than 180°.",
    "A straight angle is exactly 180°.",
    "A reflex angle is greater than 180° but less than 360°."
  ],
  formulas: [],
  crux: [
    "If a ray stands on a line, then the sum of two adjacent angles so formed is 180° (Linear Pair Axiom).",
    "If two lines intersect each other, then the vertically opposite angles are equal."
  ],
  exercises: [
    { id: "ex5-1", name: "Exercise 5.1", questions: [] },
    { id: "ex5-2", name: "Exercise 5.2", questions: [] },
    { id: "ex5-3", name: "Exercise 5.3", questions: [] }
  ],
  examples: [],
  mcqs: [
    {
      id: "m1",
      question: "The measure of an angle which is four times its supplement is:",
      options: ["36°", "144°", "120°", "100°"],
      correctAnswer: "B"
    },
    {
      id: "m2",
      question: "If two interior angles on the same side of a transversal intersecting two parallel lines are in the ratio 2:3, then the greater of the two angles is:",
      options: ["72°", "108°", "54°", "120°"],
      correctAnswer: "B"
    },
    {
      id: "m3",
      question: "An angle is 20° less than its complement. The angle is:",
      options: ["35°", "55°", "45°", "25°"],
      correctAnswer: "A"
    },
    {
      id: "m4",
      question: "If one angle of a linear pair is acute, then the other angle is:",
      options: ["Acute", "Obtuse", "Right", "Reflex"],
      correctAnswer: "B"
    },
    {
      id: "m5",
      question: "The sum of all angles around a point is:",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: "D"
    },
    {
      id: "m6",
      question: "The complement of 52° is:",
      options: ["38°", "48°", "128°", "148°"],
      correctAnswer: "A"
    },
    {
      id: "m7",
      question: "If two parallel lines are intersected by a transversal, then the bisectors of any two corresponding angles are:",
      options: ["Perpendicular", "Parallel", "Intersecting", "None of these"],
      correctAnswer: "B"
    },
    {
      id: "m8",
      question: "Angles of a triangle are in the ratio 2:4:3. The smallest angle of the triangle is:",
      options: ["60°", "40°", "80°", "20°"],
      correctAnswer: "B"
    },
    {
      id: "m9",
      question: "An exterior angle of a triangle is 105° and its two interior opposite angles are equal. Each of these equal angles is:",
      options: ["37.5°", "52.5°", "72.5°", "75°"],
      correctAnswer: "B"
    },
    {
      id: "m10",
      question: "If two lines intersect, the vertically opposite angles are always:",
      options: ["Supplementary", "Complementary", "Equal", "Unequal"],
      correctAnswer: "C"
    }
  ],
  summary: [
    "Adjacent angles with a common arm and non-common arms forming a line are called linear pairs.",
    "Parallel lines never intersect and the distance between them remains constant.",
    "The sum of angles of a triangle is 180°."
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFD54F; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFD54F; padding-left: 15px; margin-top: 15px; background: rgba(255, 213, 79, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFD54F !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFD54F !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 213, 79, 0.05) !important; border-left: 4px solid #FFD54F !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFD54F !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFD54F !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFD54F !important; font-weight: 700; }
        strong { color: #FFD54F !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFD54F; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
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
        <p class="step">Lines which cross each other at a point are <strong>intersecting lines</strong>. Lines which never meet, even if extended indefinitely, are <strong>parallel lines</strong>.</p>
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
        
        .question { color: #FFD54F; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFD54F; padding-left: 15px; margin-top: 15px; background: rgba(255, 213, 79, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFD54F !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFD54F !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 213, 79, 0.05) !important; border-left: 4px solid #FFD54F !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFD54F !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFD54F !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFD54F !important; font-weight: 700; }
        strong { color: #FFD54F !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFD54F; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
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
          Given: &ang;AOC + &ang;BOE = 70&deg; and &ang;BOD = 40&deg;.<br/>
          Since AB and CD intersect at O, &ang;AOC = &ang;BOD (Vertically opposite angles).<br/>
          &there4; &ang;AOC = 40&deg;.<br/>
          Now, 40&deg; + &ang;BOE = 70&deg; &rArr; <strong>&ang;BOE = 30&deg;</strong>.<br/>
          Also, &ang;AOC + &ang;COE + &ang;BOE = 180&deg; (Angles on a straight line AB).<br/>
          70&deg; + &ang;COE = 180&deg; &rArr; &ang;COE = 110&deg;.<br/>
          Reflex &ang;COE = 360&deg; - 110&deg; = <strong>250&deg;</strong>.
        </div>

        <div class="question">2. In Fig. 5.24, lines XY and MN intersect at O. If &ang;POY = 90&deg; and a : b = 2 : 3, find c.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="50" y1="30" x2="150" y2="130" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="100" y2="20" stroke="white" stroke-width="2" />
          <text x="15" y="105" fill="white" font-size="12">X</text>
          <text x="185" y="105" fill="white" font-size="12">Y</text>
          <text x="40" y="30" fill="white" font-size="12">M</text>
          <text x="150" y="145" fill="white" font-size="12">N</text>
          <text x="95" y="15" fill="white" font-size="12">P</text>
          <text x="95" y="115" fill="white" font-size="12">O</text>
          <text x="90" y="60" fill="#66BB6A" font-size="12">a</text>
          <text x="70" y="90" fill="#66BB6A" font-size="12">b</text>
          <text x="90" y="140" fill="#66BB6A" font-size="12">c</text>
        </svg>
        <div class="solution">
          Given: &ang;POY = 90&deg;. So, &ang;POX = 180&deg; - 90&deg; = 90&deg;.<br/>
          &ang;POX = a + b = 90&deg;.<br/>
          Let a = 2x and b = 3x.<br/>
          2x + 3x = 90&deg; &rArr; 5x = 90&deg; &rArr; x = 18&deg;.<br/>
          b = 3 &times; 18&deg; = 54&deg;.<br/>
          Since MN is a line, b + c = 180&deg; (Linear pair).<br/>
          54&deg; + c = 180&deg; &rArr; <strong>c = 126&deg;</strong>.
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
          At point Q: &ang;PQS + &ang;PQR = 180&deg; (Linear pair) --- (1)<br/>
          At point R: &ang;PRT + &ang;PRQ = 180&deg; (Linear pair) --- (2)<br/>
          From (1) and (2): &ang;PQS + &ang;PQR = &ang;PRT + &ang;PRQ.<br/>
          Since &ang;PQR = &ang;PRQ (Given),<br/>
          <strong>&ang;PQS = &ang;PRT</strong>. Hence proved.
        </div>

        <div class="question">4. In Fig. 5.26, if x + y = w + z, then prove that AOB is a line.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <line x1="40" y1="120" x2="160" y2="30" stroke="white" stroke-width="2" />
          <line x1="50" y1="40" x2="150" y2="130" stroke="white" stroke-width="2" />
          <text x="35" y="130" fill="white" font-size="12">A</text>
          <text x="165" y="25" fill="white" font-size="12">B</text>
          <text x="45" y="35" fill="white" font-size="12">C</text>
          <text x="155" y="140" fill="white" font-size="12">D</text>
          <text x="110" y="90" fill="white" font-size="12">O</text>
          <text x="80" y="55" fill="#66BB6A" font-size="12">x</text>
          <text x="70" y="80" fill="#66BB6A" font-size="12">y</text>
          <text x="110" y="105" fill="#66BB6A" font-size="12">z</text>
          <text x="120" y="85" fill="#66BB6A" font-size="12">w</text>
        </svg>
        <div class="solution">
          We know that sum of all angles around a point is 360&deg;.<br/>
          &there4; x + y + z + w = 360&deg;.<br/>
          Given: x + y = w + z.<br/>
          So, (x + y) + (x + y) = 360&deg; &rArr; 2(x + y) = 360&deg;.<br/>
          x + y = 180&deg;.<br/>
          Since the sum of adjacent angles x and y is 180&deg;, <strong>AOB is a straight line</strong>.
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
          Since OR &perp; PQ, &ang;ROQ = 90&deg; and &ang;ROP = 90&deg;.<br/>
          &ang;QOS = &ang;ROQ + &ang;ROS = 90&deg; + &ang;ROS --- (1)<br/>
          &ang;POS = &ang;ROP - &ang;ROS = 90&deg; - &ang;ROS --- (2)<br/>
          Subtracting (2) from (1):<br/>
          &ang;QOS - &ang;POS = (90&deg; + &ang;ROS) - (90&deg; - &ang;ROS)<br/>
          &ang;QOS - &ang;POS = 2 &ang;ROS<br/>
          <strong>&ang;ROS = 1/2 (&ang;QOS - &ang;POS)</strong>. Hence proved.
        </div>

        <div class="question">6. It is given that &ang;XYZ = 64&deg; and XY is produced to point P. Draw a figure from the given information. If ray YQ bisects &ang;ZYP, find &ang;XYQ and reflex &ang;QYP.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="160" y2="40" stroke="white" stroke-width="2" />
          <line x1="100" y1="100" x2="40" y2="40" stroke="white" stroke-width="2" />
          <text x="15" y="115" fill="white" font-size="12">P</text>
          <text x="95" y="115" fill="white" font-size="12">Y</text>
          <text x="185" y="115" fill="white" font-size="12">X</text>
          <text x="165" y="35" fill="white" font-size="12">Z</text>
          <text x="35" y="35" fill="white" font-size="12">Q</text>
          <text x="140" y="90" fill="#66BB6A" font-size="12">64&deg;</text>
        </svg>
        <div class="solution">
          First, draw a line XY and produce it to P. Draw &ang;XYZ = 64&deg;. Bisect &ang;ZYP with ray YQ.<br/>
          &ang;XYZ + &ang;ZYP = 180&deg; (Linear pair).<br/>
          64&deg; + &ang;ZYP = 180&deg; &rArr; &ang;ZYP = 116&deg;.<br/>
          Since YQ bisects &ang;ZYP, &ang;ZYQ = &ang;QYP = 116&deg;/2 = 58&deg;.<br/>
          &ang;XYQ = &ang;XYZ + &ang;ZYQ = 64&deg; + 58&deg; = <strong>122&deg;</strong>.<br/>
          Reflex &ang;QYP = 360&deg; - 58&deg; = <strong>302&deg;</strong>.
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
        
        .question { color: #FFD54F; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFD54F; padding-left: 15px; margin-top: 15px; background: rgba(255, 213, 79, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFD54F !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFD54F !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 213, 79, 0.05) !important; border-left: 4px solid #FFD54F !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFD54F !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFD54F !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFD54F !important; font-weight: 700; }
        strong { color: #FFD54F !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFD54F; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="container">
        <div class="question">1. In Fig. 5.38, find the values of x and y and then show that AB || CD.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="40" x2="180" y2="40" stroke="white" stroke-width="2" />
          <line x1="20" y1="90" x2="180" y2="90" stroke="white" stroke-width="2" />
          <line x1="60" y1="10" x2="140" y2="110" stroke="white" stroke-width="2" />
          <text x="25" y="35" fill="white" font-size="12">A</text><text x="170" y="35" fill="white" font-size="12">B</text>
          <text x="25" y="105" fill="white" font-size="12">C</text><text x="170" y="105" fill="white" font-size="12">D</text>
          <text x="80" y="25" fill="#66BB6A" font-size="12">50&deg;</text>
          <text x="95" y="55" fill="#66BB6A" font-size="12">x</text>
          <text x="105" y="85" fill="#66BB6A" font-size="12">y</text>
          <text x="135" y="105" fill="#66BB6A" font-size="12">130&deg;</text>
        </svg>
        <div class="solution">
          On the transversal line: 50&deg; + x = 180&deg; (Linear pair) &rArr; <strong>x = 130&deg;</strong>.<br/>
          Also, y = 130&deg; (Vertically opposite angles) &rArr; <strong>y = 130&deg;</strong>.<br/>
          Since x = y = 130&deg; and they are alternate interior angles,<br/>
          <strong>AB || CD</strong>.
        </div>

        <div class="question">2. In Fig. 5.39, if AB || CD, CD || EF and y : z = 3 : 7, find x.</div>
        <svg viewBox="0 0 200 150" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="20" y1="75" x2="180" y2="75" stroke="white" stroke-width="2" />
          <line x1="20" y1="120" x2="180" y2="120" stroke="white" stroke-width="2" />
          <line x1="140" y1="10" x2="60" y2="140" stroke="white" stroke-width="2" />
          <text x="25" y="25" fill="white" font-size="12">A</text><text x="170" y="25" fill="white" font-size="12">B</text>
          <text x="25" y="70" fill="white" font-size="12">C</text><text x="170" y="70" fill="white" font-size="12">D</text>
          <text x="25" y="115" fill="white" font-size="12">E</text><text x="170" y="115" fill="white" font-size="12">F</text>
          <text x="110" y="45" fill="#66BB6A" font-size="12">x</text>
          <text x="85" y="90" fill="#66BB6A" font-size="12">y</text>
          <text x="75" y="115" fill="#66BB6A" font-size="12">z</text>
        </svg>
        <div class="solution">
          Given: AB || CD and CD || EF, so AB || EF.<br/>
          Thus, x = z (Alternate interior angles).<br/>
          Also, x + y = 180&deg; (Co-interior angles) &rArr; z + y = 180&deg;.<br/>
          Ratio y : z = 3 : 7. Let y = 3k and z = 7k.<br/>
          3k + 7k = 180&deg; &rArr; 10k = 180&deg; &rArr; k = 18&deg;.<br/>
          z = 7 &times; 18&deg; = 126&deg;.<br/>
          &there4; <strong>x = 126&deg;</strong>.
        </div>

        <div class="question">3. In Fig. 5.40, if AB || CD, EF &perp; CD and &ang;GED = 126&deg;, find &ang;AGE, &ang;GEF and &ang;FGE.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="20" y1="90" x2="180" y2="90" stroke="white" stroke-width="2" />
          <line x1="120" y1="30" x2="80" y2="90" stroke="white" stroke-width="2" />
          <line x1="120" y1="90" x2="120" y2="30" stroke="white" stroke-width="2" />
          <text x="25" y="25" fill="white" font-size="12">A</text><text x="175" y="25" fill="white" font-size="12">B</text>
          <text x="25" y="105" fill="white" font-size="12">C</text><text x="175" y="105" fill="white" font-size="12">D</text>
          <text x="115" y="25" fill="white" font-size="12">F</text><text x="115" y="105" fill="white" font-size="12">E</text>
          <text x="75" y="105" fill="white" font-size="12">G</text>
          <rect x="120" y="80" width="10" height="10" fill="none" stroke="white" stroke-width="1" />
        </svg>
        <div class="solution">
          Given: &ang;GED = 126&deg;.<br/>
          1. &ang;AGE = &ang;GED (Alternate interior angles) &rArr; <strong>&ang;AGE = 126&deg;</strong>.<br/>
          2. &ang;GEF = &ang;GED - &ang;FED = 126&deg; - 90&deg; = <strong>36&deg;</strong>.<br/>
          3. &ang;FGE + &ang;AGE = 180&deg; (Linear pair) &rArr; &ang;FGE = 180&deg; - 126&deg; = <strong>54&deg;</strong>.
        </div>

        <div class="question">4. In Fig. 5.41, if PQ || ST, &ang;PQR = 110&deg; and &ang;RST = 130&deg;, find &ang;QRS.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="40" x2="80" y2="40" stroke="white" stroke-width="2" />
          <line x1="120" y1="20" x2="180" y2="20" stroke="white" stroke-width="2" />
          <line x1="80" y1="40" x2="100" y2="90" stroke="white" stroke-width="2" />
          <line x1="100" y1="90" x2="120" y2="20" stroke="white" stroke-width="2" />
          <text x="25" y="35" fill="white" font-size="12">P</text><text x="75" y="35" fill="white" font-size="12">Q</text>
          <text x="125" y="15" fill="white" font-size="12">S</text><text x="175" y="15" fill="white" font-size="12">T</text>
          <text x="95" y="105" fill="white" font-size="12">R</text>
        </svg>
        <div class="solution">
          Draw a line EF || ST through R. Then EF || PQ.<br/>
          &ang;PQR + &ang;QRE = 180&deg; (Co-interior angles) &rArr; 110&deg; + &ang;QRE = 180&deg; &rArr; &ang;QRE = 70&deg;.<br/>
          &ang;RST + &ang;SRF = 180&deg; (Co-interior angles) &rArr; 130&deg; + &ang;SRF = 180&deg; &rArr; &ang;SRF = 50&deg;.<br/>
          Since ERF is a straight line, &ang;QRE + &ang;QRS + &ang;SRF = 180&deg;.<br/>
          70&deg; + &ang;QRS + 50&deg; = 180&deg; &rArr; <strong>&ang;QRS = 60&deg;</strong>.
        </div>

        <div class="question">5. In Fig. 5.42, if AB || CD, &ang;APQ = 50&deg; and &ang;PRD = 127&deg;, find x and y.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="30" x2="60" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="30" x2="140" y2="100" stroke="white" stroke-width="2" />
          <text x="25" y="25" fill="white" font-size="12">A</text><text x="175" y="25" fill="white" font-size="12">B</text>
          <text x="25" y="115" fill="white" font-size="12">C</text><text x="175" y="115" fill="white" font-size="12">D</text>
          <text x="95" y="25" fill="white" font-size="12">P</text><text x="55" y="115" fill="white" font-size="12">Q</text><text x="135" y="115" fill="white" font-size="12">R</text>
          <text x="85" y="45" fill="#66BB6A" font-size="12">50&deg;</text>
          <text x="75" y="85" fill="#66BB6A" font-size="12">x</text>
          <text x="100" y="55" fill="#66BB6A" font-size="12">y</text>
          <text x="145" y="90" fill="#66BB6A" font-size="12">127&deg;</text>
        </svg>
        <div class="solution">
          Given: AB || CD.<br/>
          1. x = &ang;APQ (Alternate interior angles) &rArr; <strong>x = 50&deg;</strong>.<br/>
          2. &ang;APR = &ang;PRD (Alternate interior angles).<br/>
          50&deg; + y = 127&deg; &rArr; <strong>y = 77&deg;</strong>.
        </div>

        <div class="question">6. An incident ray AB strikes the mirror PQ at B, moves along BC and strikes RS at C. Prove AB || CD.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="30" x2="180" y2="30" stroke="white" stroke-width="2" stroke-dasharray="4,2" />
          <line x1="20" y1="90" x2="180" y2="90" stroke="white" stroke-width="2" stroke-dasharray="4,2" />
          <path d="M 40 60 L 80 30 L 120 90 L 160 60" stroke="#66BB6A" stroke-width="2" fill="none" />
          <text x="20" y="25" fill="white" font-size="12">P</text><text x="180" y="25" fill="white" font-size="12">Q</text>
          <text x="20" y="105" fill="white" font-size="12">R</text><text x="180" y="105" fill="white" font-size="12">S</text>
          <text x="35" y="65" fill="white" font-size="12">A</text><text x="80" y="25" fill="white" font-size="12">B</text>
          <text x="120" y="105" fill="white" font-size="12">C</text><text x="165" y="65" fill="white" font-size="12">D</text>
        </svg>
        <div class="solution">
          Draw normals to the mirrors at B and C. Let them be BM and CN.<br/>
          Since mirrors are parallel, normals are also parallel (BM || CN).<br/>
          By law of reflection: &ang;i = &ang;r. Let &ang;1=&ang;2 and &ang;3=&ang;4.<br/>
          Since BM || CN, &ang;2 = &ang;3 (Alternate interior angles).<br/>
          Thus, 2 &ang;2 = 2 &ang;3 &rArr; &ang;ABC = &ang;BCD.<br/>
          Since alternate interior angles are equal, <strong>AB || CD</strong>.
        </div>
      </div>
`,
    "ex5-3": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFD54F; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFD54F; padding-left: 15px; margin-top: 15px; background: rgba(255, 213, 79, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFD54F !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFD54F !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 213, 79, 0.05) !important; border-left: 4px solid #FFD54F !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFD54F !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFD54F !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFD54F !important; font-weight: 700; }
        strong { color: #FFD54F !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFD54F; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
      </style>
<div class="container">
        <div class="question">1. In Fig. 5.49, sides QP and RQ of ∆ PQR are produced to points S and T respectively. If &ang;SPR = 135&deg; and &ang;PQT = 110&deg;, find &ang;PRQ.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="50" y1="100" x2="150" y2="100" stroke="white" stroke-width="2" />
          <line x1="150" y1="100" x2="80" y2="30" stroke="white" stroke-width="2" />
          <line x1="80" y1="30" x2="80" y2="120" stroke="white" stroke-width="2" />
          <line x1="50" y1="100" x2="20" y2="100" stroke="white" stroke-width="2" />
          <text x="85" y="45" fill="white" font-size="12">P</text><text x="75" y="105" fill="white" font-size="12">Q</text><text x="155" y="105" fill="white" font-size="12">R</text>
          <text x="85" y="25" fill="white" font-size="12">S</text><text x="15" y="105" fill="white" font-size="12">T</text>
        </svg>
        <div class="solution">
          &ang;QPR + &ang;SPR = 180&deg; (Linear pair) &rArr; &ang;QPR = 180&deg; - 135&deg; = 45&deg;.<br/>
          &ang;PQT + &ang;PQR = 180&deg; (Linear pair) &rArr; &ang;PQR = 180&deg; - 110&deg; = 70&deg;.<br/>
          In ∆ PQR: &ang;QPR + &ang;PQR + &ang;PRQ = 180&deg;.<br/>
          45&deg; + 70&deg; + &ang;PRQ = 180&deg; &rArr; <strong>&ang;PRQ = 65&deg;</strong>.
        </div>

        <div class="question">2. In Fig. 5.50, &ang;X = 62&deg;, &ang;XYZ = 54&deg;. If YO and ZO are bisectors of &ang;XYZ and &ang;XZY respectively of ∆ XYZ, find &ang;OZY and &ang;YOZ.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="100" y1="20" x2="40" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="20" x2="160" y2="100" stroke="white" stroke-width="2" />
          <line x1="40" y1="100" x2="160" y2="100" stroke="white" stroke-width="2" />
          <line x1="40" y1="100" x2="100" y2="70" stroke="white" stroke-width="2" />
          <line x1="160" y1="100" x2="100" y2="70" stroke="white" stroke-width="2" />
          <text x="95" y="15" fill="white" font-size="12">X</text><text x="35" y="115" fill="white" font-size="12">Y</text><text x="160" y="115" fill="white" font-size="12">Z</text><text x="95" y="65" fill="white" font-size="12">O</text>
        </svg>
        <div class="solution">
          In ∆ XYZ: &ang;X + &ang;XYZ + &ang;XZY = 180&deg;.<br/>
          62&deg; + 54&deg; + &ang;XZY = 180&deg; &rArr; &ang;XZY = 64&deg;.<br/>
          Since YO bisects &ang;XYZ, &ang;OYZ = 54&deg;/2 = 27&deg;.<br/>
          Since ZO bisects &ang;XZY, <strong>&ang;OZY = 64&deg;/2 = 32&deg;</strong>.<br/>
          In ∆ OYZ: &ang;OYZ + &ang;OZY + &ang;YOZ = 180&deg;.<br/>
          27&deg; + 32&deg; + &ang;YOZ = 180&deg; &rArr; <strong>&ang;YOZ = 121&deg;</strong>.
        </div>

        <div class="question">3. In Fig. 5.51, if AB || DE, &ang;BAC = 35&deg; and &ang;CDE = 53&deg;, find &ang;DCE.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="30" x2="100" y2="30" stroke="white" stroke-width="2" />
          <line x1="50" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="30" x2="50" y2="100" stroke="white" stroke-width="2" />
          <text x="25" y="25" fill="white" font-size="12">A</text><text x="105" y="35" fill="white" font-size="12">B</text>
          <text x="45" y="115" fill="white" font-size="12">D</text><text x="175" y="115" fill="white" font-size="12">E</text>
          <text x="70" y="65" fill="white" font-size="12">C</text>
        </svg>
        <div class="solution">
          Given: AB || DE.<br/>
          &ang;CED = &ang;BAC (Alternate interior angles) &rArr; &ang;CED = 35&deg;.<br/>
          In ∆ CDE: &ang;DCE + &ang;CDE + &ang;CED = 180&deg;.<br/>
          &ang;DCE + 53&deg; + 35&deg; = 180&deg; &rArr; <strong>&ang;DCE = 92&deg;</strong>.
        </div>

        <div class="question">4. In Fig. 5.52, if lines PQ and RS intersect at point T, find &ang;SQT.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="40" y1="20" x2="160" y2="100" stroke="white" stroke-width="2" />
          <line x1="40" y1="100" x2="160" y2="20" stroke="white" stroke-width="2" />
          <line x1="40" y1="20" x2="40" y2="100" stroke="white" stroke-width="2" />
          <line x1="160" y1="20" x2="160" y2="100" stroke="white" stroke-width="2" />
          <text x="35" y="15" fill="white" font-size="12">P</text><text x="165" y="15" fill="white" font-size="12">S</text>
          <text x="35" y="115" fill="white" font-size="12">R</text><text x="165" y="115" fill="white" font-size="12">Q</text>
          <text x="105" y="65" fill="white" font-size="12">T</text>
        </svg>
        <div class="solution">
          In ∆ PRT: &ang;P + &ang;R + &ang;PTR = 180&deg;.<br/>
          95&deg; + 40&deg; + &ang;PTR = 180&deg; &rArr; &ang;PTR = 45&deg;.<br/>
          &ang;STQ = &ang;PTR = 45&deg; (Vertically opposite angles).<br/>
          In ∆ TSQ: &ang;STQ + &ang;S + &ang;SQT = 180&deg;.<br/>
          45&deg; + 75&deg; + &ang;SQT = 180&deg; &rArr; <strong>&ang;SQT = 60&deg;</strong>.
        </div>

        <div class="question">5. In Fig. 5.53, if PQ &perp; PS, PQ || SR, find x and y.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="40" y1="30" x2="140" y2="30" stroke="white" stroke-width="2" />
          <line x1="40" y1="30" x2="40" y2="90" stroke="white" stroke-width="2" />
          <line x1="40" y1="90" x2="160" y2="90" stroke="white" stroke-width="2" />
          <line x1="140" y1="30" x2="100" y2="90" stroke="white" stroke-width="2" />
          <line x1="140" y1="30" x2="40" y2="90" stroke="white" stroke-width="2" />
          <text x="35" y="25" fill="white" font-size="12">P</text><text x="145" y="25" fill="white" font-size="12">Q</text>
          <text x="35" y="105" fill="white" font-size="12">S</text><text x="95" y="105" fill="white" font-size="12">R</text>
          <text x="165" y="105" fill="white" font-size="12">T</text>
        </svg>
        <div class="solution">
          &ang;QRT = &ang;PQR (Alternate interior angles).<br/>
          65&deg; = x + 28&deg; &rArr; <strong>x = 37&deg;</strong>.<br/>
          In ∆ PQS: &ang;P + x + y = 180&deg;.<br/>
          90&deg; + 37&deg; + y = 180&deg; &rArr; <strong>y = 53&deg;</strong>.
        </div>

        <div class="question">6. Prove &ang;QTR = 1/2 &ang;QPR.</div>
        <svg viewBox="0 0 200 120" class="ex-img">
          <line x1="20" y1="100" x2="180" y2="100" stroke="white" stroke-width="2" />
          <line x1="140" y1="100" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="60" y1="100" x2="180" y2="30" stroke="white" stroke-width="2" />
          <line x1="140" y1="100" x2="80" y2="30" stroke="white" stroke-width="2" />
          <line x1="60" y1="100" x2="80" y2="30" stroke="white" stroke-width="2" />
          <text x="75" y="25" fill="white" font-size="12">P</text><text x="55" y="115" fill="white" font-size="12">Q</text><text x="135" y="115" fill="white" font-size="12">R</text><text x="175" y="115" fill="white" font-size="12">S</text><text x="185" y="25" fill="white" font-size="12">T</text>
        </svg>
        <div class="solution">
          In ∆ PQR: Exterior &ang;PRS = &ang;PQR + &ang;QPR --- (1)<br/>
          In ∆ TQR: Exterior &ang;TRS = &ang;TQR + &ang;QTR --- (2)<br/>
          Since QT and RT are bisectors: &ang;PQR = 2 &ang;TQR and &ang;PRS = 2 &ang;TRS.<br/>
          From (1): 2 &ang;TRS = 2 &ang;TQR + &ang;QPR<br/>
          &ang;TRS = &ang;TQR + 1/2 &ang;QPR<br/>
          From (2): &ang;TRS = &ang;TQR + &ang;QTR<br/>
          So, &ang;TQR + &ang;QTR = &ang;TQR + 1/2 &ang;QPR &rArr; <strong>&ang;QTR = 1/2 &ang;QPR</strong>.
        </div>
      </div>
`
  }
};
