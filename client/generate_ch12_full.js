const fs = require('fs');
const path = require('path');

const c7Math12Full = `import { ChapterContent } from "../types";

export const c7Math12: ChapterContent = {
  id: "c7-math-12",
  number: 12,
  title: "Symmetry",
  isHtmlView: true,
  introduction:
    "Symmetry is a balanced and proportionate similarity that is found in nature and man-made structures. In geometry, we study line symmetry and rotational symmetry.",
  definitions: [
    { term: "Line Symmetry", description: "A figure has line symmetry if a line can be drawn dividing it into two identical matching halves." },
    { term: "Rotational Symmetry", description: "A figure has rotational symmetry if it looks identical after a rotation of less than 360°." },
    { term: "Order of Rotational Symmetry", description: "The number of positions in which a figure looks exactly the same during one complete 360° turn." },
  ],
  keyPoints: [
    "A regular polygon with n sides has n lines of symmetry.",
    "A circle has infinitely many lines of symmetry.",
    "Order of rotational symmetry of a square is 4 (angle of rotation = 90°).",
    "Order of rotational symmetry of an equilateral triangle is 3 (angle of rotation = 120°).",
  ],
  formulas: [
    { name: "Angle of Rotation", formula: "\\\\text{Angle of Rotation} = \\\\frac{360^\\\\circ}{\\\\text{Order of Symmetry}}" },
  ],
  crux: [],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] },
    { id: "ex12-3", name: "Exercise 12.3", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #00ACC1; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(0, 172, 193, 0.05); border-left: 4px solid #00ACC1; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #00ACC1; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Symmetry</div>
            <p class="content-text">Explore line symmetry, lines of symmetry in regular polygons, rotational symmetry, center of rotation, angle of rotation, and order of rotational symmetry.</p>
            <div class="point-box">
                <div class="point-item">Line Symmetry: Mirror reflection symmetry across a central axis line.</div>
                <div class="point-item">Rotational Symmetry: Matching shape orientation upon rotation around a fixed center point.</div>
                <div class="point-item">Regular Polygons: n-sided regular polygon has n lines of symmetry and rotational order n.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex12-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00ACC1; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00ACC1; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #4DD0E1; font-weight: bold; }
            .sol-body b, .subpart-title { color: #00ACC1; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Copy the figures with punched holes and find the axes of symmetry for the following (a to l):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) Square with 2 holes on left & right:</b> Vertical line of symmetry passing through center. <span class="ans-highlight">1 axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) Square with 2 holes top-right:</b> Diagonal line of symmetry. <span class="ans-highlight">1 axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Square with 2 holes on right side:</b> Horizontal line of symmetry. <span class="ans-highlight">1 axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) Square with 4 holes:</b> Horizontal line of symmetry. <span class="ans-highlight">1 axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) Square with 4 corner holes:</b> <span class="ans-highlight">4 axes of symmetry</span> (2 diagonals + 2 perpendicular bisectors)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(f) Square with center & 2 corner holes:</b> <span class="ans-highlight">1 diagonal axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(g) Isosceles triangle with 2 base holes:</b> <span class="ans-highlight">1 vertical axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(h) Triangle with 2 side holes:</b> <span class="ans-highlight">1 horizontal axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(i) Triangle with 2 top holes:</b> <span class="ans-highlight">1 vertical axis of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(j) Circle with 2 horizontal holes:</b> <span class="ans-highlight">2 axes of symmetry</span> (vertical & horizontal diameters)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(k) Circle with 4 holes:</b> <span class="ans-highlight">4 axes of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(l) Circle with 3 holes:</b> <span class="ans-highlight">1 axis of symmetry</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Given the line(s) of symmetry, find the other hole(s) (a to e):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) Square with diagonal line:</b> Other hole is symmetric across the diagonal. <span class="ans-highlight">Bottom-right position</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) Square with horizontal line:</b> Other hole is symmetric across horizontal line. <span class="ans-highlight">Top-right position</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Triangle with vertical line:</b> Other hole is symmetric across median. <span class="ans-highlight">Right side position</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) Circle with diagonal line:</b> Other hole is symmetric across diameter. <span class="ans-highlight">Bottom-left position</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) Circle with slash line:</b> Other hole is symmetric across slash. <span class="ans-highlight">Bottom-left position</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Complete each figure performing reflection in the dotted mirror line and state the name of completed figure:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) Half rectangle along vertical line:</b> <span class="ans-highlight">Square / Rectangle</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) Half triangle along vertical line:</b> <span class="ans-highlight">Triangle</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Half rhombus along diagonal:</b> <span class="ans-highlight">Rhombus</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) Semi-circle along diameter:</b> <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) Half pentagon along vertical line:</b> <span class="ans-highlight">Pentagon</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(f) Half octagon along vertical line:</b> <span class="ans-highlight">Octagon</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify multiple lines of symmetry in the following figures (a to h):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) 3-circle leaf figure:</b> <span class="ans-highlight">3 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) Double arc square figure:</b> <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Inverted arch triangle:</b> <span class="ans-highlight">3 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) Corner-cut square figure:</b> <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) 4-petal flower square:</b> <span class="ans-highlight">4 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(f) Butterfly leaf shape:</b> <span class="ans-highlight">1 line of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(g) 4-circle square design:</b> <span class="ans-highlight">4 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(h) 6-petal flower pattern:</b> <span class="ans-highlight">6 lines of symmetry</span></div>
                </div>
            </div>

            <!-- Question 7, 8, 9, 10 -->
            <div class="sol-card">
                <div class="question-header">7, 8, 9 & 10. Lines of Symmetry, English Letters & Examples:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">7 (a) Equilateral triangle:</b> <span class="ans-highlight">3 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (b) Isosceles triangle:</b> <span class="ans-highlight">1 line of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (c) Scalene triangle:</b> <span class="ans-highlight">0 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (d) Square:</b> <span class="ans-highlight">4 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (e) Rectangle:</b> <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (f) Rhombus:</b> <span class="ans-highlight">2 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (g) Parallelogram:</b> <span class="ans-highlight">0 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (h) Quadrilateral:</b> <span class="ans-highlight">0 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (i) Regular Hexagon:</b> <span class="ans-highlight">6 lines of symmetry</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (j) Circle:</b> <span class="ans-highlight">Infinite lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">8. Reflectional symmetry of English alphabet:</b></div>
                    <div class="sol-step">• Vertical mirror: <span class="ans-highlight">A, H, I, M, O, T, U, V, W, X, Y</span></div>
                    <div class="sol-step">• Horizontal mirror: <span class="ans-highlight">B, C, D, E, H, I, K, O, X</span></div>
                    <div class="sol-step">• Both mirrors: <span class="ans-highlight">H, I, O, X</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">9. 3 shapes with no line of symmetry:</b></div>
                    <div class="sol-step"><span class="ans-highlight">Scalene triangle, Parallelogram, General Quadrilateral</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">10. Other name for line of symmetry of:</b></div>
                    <div class="sol-step">• Isosceles triangle: <span class="ans-highlight">Median (or Altitude / Perpendicular bisector of base)</span></div>
                    <div class="sol-step">• Circle: <span class="ans-highlight">Diameter</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex12-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00ACC1; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00ACC1; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #4DD0E1; font-weight: bold; }
            .sol-body b, .subpart-title { color: #00ACC1; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Which of the following figures (a to f) have rotational symmetry of order more than 1?</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) Circle with 4 cross lines:</b> <span class="ans-highlight">Order = 4</span> (Yes, > 1)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) Equilateral Triangle:</b> <span class="ans-highlight">Order = 3</span> (Yes, > 1)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Asymmetric figure:</b> <span class="ans-highlight">Order = 1</span> (No)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) H-shape line:</b> <span class="ans-highlight">Order = 2</span> (Yes, > 1)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) 3-blade circle fan:</b> <span class="ans-highlight">Order = 3</span> (Yes, > 1)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(f) 4-petal windmill:</b> <span class="ans-highlight">Order = 4</span> (Yes, > 1)</div>
                    <div class="sol-step"><span class="ans-highlight">Figures (a), (b), (d), (e), (f) have rotational symmetry of order > 1.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Give the order of rotational symmetry for each figure (a to h):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(a) Rotated line segment by 180°:</b> <span class="ans-highlight">Order = 2</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(b) X-shape with 80° angle:</b> <span class="ans-highlight">Order = 2</span> (rotated by 180°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(c) Equilateral Triangle:</b> <span class="ans-highlight">Order = 3</span> (rotated by 120°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(d) 4-pinwheel shape:</b> <span class="ans-highlight">Order = 4</span> (rotated by 90°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(e) Plus cross shape:</b> <span class="ans-highlight">Order = 4</span> (rotated by 90°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(f) Regular Pentagon:</b> <span class="ans-highlight">Order = 5</span> (rotated by 72°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(g) 6-point Star:</b> <span class="ans-highlight">Order = 6</span> (rotated by 60°)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">(h) 3-legged triskelion:</b> <span class="ans-highlight">Order = 3</span> (rotated by 120°)</div>
                </div>
            </div>
        </div>
    \`,
    "ex12-3": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00ACC1; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00ACC1; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #4DD0E1; font-weight: bold; }
            .sol-body b, .subpart-title { color: #00ACC1; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; background: #161625; }
            th, td { border: 1px solid rgba(0, 172, 193, 0.3); padding: 8px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(0, 172, 193, 0.15); color: #4DD0E1; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Name any two figures that have both line symmetry and rotational symmetry:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="ans-highlight">1. Equilateral Triangle</span> (3 lines of symmetry, rotational order 3)</div>
                    <div class="sol-step"><span class="ans-highlight">2. Circle</span> (Infinite lines of symmetry, infinite rotational order)</div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Draw a rough sketch of:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">(i) A triangle with both line and rotational symmetries of order > 1:</b> <span class="ans-highlight">Equilateral Triangle</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(ii) A triangle with only line symmetry and no rotational symmetry of order > 1:</b> <span class="ans-highlight">Isosceles Triangle</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(iii) A quadrilateral with rotational symmetry of order > 1 but not line symmetry:</b> <span class="ans-highlight">Not possible</span></div>
                    <div class="sol-step"><b style="color:#00ACC1;">(iv) A quadrilateral with line symmetry but no rotational symmetry of order > 1:</b> <span class="ans-highlight">Kite or Isosceles Trapezium</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. If a figure has two or more lines of symmetry, should it have rotational symmetry of order more than 1?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="ans-highlight">Yes.</span> If a figure has two or more lines of symmetry, it will always have rotational symmetry of order greater than 1.</div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Fill in the blanks table:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Shape</th><th>Centre of Rotation</th><th>Order of Rotation</th><th>Angle of Rotation</th></tr>
                        <tr><td>Square</td><td>Intersection of diagonals</td><td>4</td><td>90°</td></tr>
                        <tr><td>Rectangle</td><td>Intersection of diagonals</td><td>2</td><td>180°</td></tr>
                        <tr><td>Rhombus</td><td>Intersection of diagonals</td><td>2</td><td>180°</td></tr>
                        <tr><td>Equilateral Triangle</td><td>Intersection of medians</td><td>3</td><td>120°</td></tr>
                        <tr><td>Regular Hexagon</td><td>Intersection of diagonals</td><td>6</td><td>60°</td></tr>
                        <tr><td>Circle</td><td>Centre of circle</td><td>Infinite</td><td>Every angle</td></tr>
                        <tr><td>Semi-circle</td><td>Mid-point of diameter</td><td>1</td><td>360°</td></tr>
                    </table>
                </div>
            </div>

            <!-- Question 5, 6, 7 -->
            <div class="sol-card">
                <div class="question-header">5, 6 & 7. Quadrilaterals & Rotation Angles:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#00ACC1;">5. Quadrilaterals with both line and rotational symmetry of order > 1:</b> <span class="ans-highlight">Square and Rectangle</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">6. Figure looks same after 60° rotation. Other angles:</b> <span class="ans-highlight">120°, 180°, 240°, 300°, 360°</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">7 (i) Can we have rotational order > 1 with angle 45°?</b> <span class="ans-highlight">Yes</span> (since 360° is divisible by 45°: order = 8)</div>
                    <div class="sol-step"><b style="color:#00ACC1;">7 (ii) Can we have rotational order > 1 with angle 17°?</b> <span class="ans-highlight">No</span> (since 360° is not divisible by 17°)</div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    { id: "c7m12-mcq-1", question: "How many lines of symmetry does a square have?", options: ["1", "2", "3", "4"], correctAnswer: "d", explanation: "A square has 4 lines of symmetry (2 diagonal + 2 mid-point perpendicular bisectors)." },
    { id: "c7m12-mcq-2", question: "How many lines of symmetry does a circle have?", options: ["1", "2", "4", "Infinitely many"], correctAnswer: "d", explanation: "Any line passing through the center of a circle is a line of symmetry." },
    { id: "c7m12-mcq-3", question: "What is the order of rotational symmetry of a square?", options: ["1", "2", "3", "4"], correctAnswer: "d", explanation: "A square matches its original shape 4 times during one 360° turn." },
    { id: "c7m12-mcq-4", question: "What is the angle of rotation for an equilateral triangle?", options: ["60°", "90°", "120°", "180°"], correctAnswer: "c", explanation: "Angle of rotation = 360° / 3 = 120°." },
    { id: "c7m12-mcq-5", question: "How many lines of symmetry does a scalene triangle have?", options: ["0", "1", "2", "3"], correctAnswer: "a", explanation: "A scalene triangle has all unequal sides and 0 lines of symmetry." },
    { id: "c7m12-mcq-6", question: "How many lines of symmetry does an isosceles triangle have?", options: ["0", "1", "2", "3"], correctAnswer: "b", explanation: "An isosceles triangle has 1 line of symmetry along its altitude." },
    { id: "c7m12-mcq-7", question: "What is the order of rotational symmetry of a rectangle?", options: ["1", "2", "3", "4"], correctAnswer: "b", explanation: "A rectangle looks identical twice (at 180° and 360°) during a full turn." },
    { id: "c7m12-mcq-8", question: "Which letter of the English alphabet has both horizontal and vertical line symmetry?", options: ["A", "B", "H", "C"], correctAnswer: "c", explanation: "The letter 'H' has both horizontal and vertical lines of symmetry." },
    { id: "c7m12-mcq-9", question: "What is the angle of rotation for a regular pentagon?", options: ["60°", "72°", "90°", "108°"], correctAnswer: "b", explanation: "Angle of rotation = 360° / 5 = 72°." },
    { id: "c7m12-mcq-10", question: "A figure having rotational symmetry of order 1 means:", options: ["High symmetry", "No rotational symmetry", "Rotates every 90°", "Is a circle"], correctAnswer: "b", explanation: "Order 1 means it only matches itself after a full 360° rotation (no non-trivial rotational symmetry)." }
  ]
};
`;

fs.writeFileSync(path.join(__dirname, 'data', 'content', 'c7-math-12.ts'), c7Math12Full, 'utf-8');
console.log("Successfully wrote full complete c7-math-12.ts!");
