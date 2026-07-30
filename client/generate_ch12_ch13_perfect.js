const fs = require('fs');
const path = require('path');

function makeFrac(num, den, color = "#fff") {
  return `<div class="frac"><span class="num" style="border-bottom-color:${color};">${num}</span><span class="den">${den}</span></div>`;
}

// ============================================================================
// CHAPTER 12: SYMMETRY
// ============================================================================
const c7Math12Perfect = `import { ChapterContent } from "../types";

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
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #4DD0E1; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Copy the figures with punched holes and find the axes of symmetry for the following (a to l):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#00ACC1;">(a) Square with 2 holes on left & right</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A vertical line passing through the center folds the square into matching halves.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(b) Square with 2 holes near top-right corner</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Folding along the diagonal reflects the two holes onto each other.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Diagonal)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(c) Square with 2 holes on right side</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A horizontal line passing through the center reflects top hole to bottom hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Horizontal)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(d) Square with 4 holes on opposite sides</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Horizontal axis folds top pair onto bottom pair.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(e) Square with 4 corner holes</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 diagonal lines + 2 perpendicular bisectors.</div>
                    <div class="sol-step"><span class="ans-highlight">4 axes of symmetry</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. State the number of lines of symmetry for the following figures:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#00ACC1;">(a) An equilateral triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 lines along medians/altitudes.</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(b) An isosceles triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1 line along median to unequal side.</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 line of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(c) A scalene triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">No matching sides.</div>
                    <div class="sol-step"><span class="ans-highlight">= 0 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(d) A square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 diagonals + 2 mid-point bisectors.</div>
                    <div class="sol-step"><span class="ans-highlight">= 4 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(e) A rectangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 mid-point perpendicular lines.</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 lines of symmetry</span></div>
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
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #4DD0E1; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Give the order of rotational symmetry for each figure:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#00ACC1;">(a) Square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = ${makeFrac('360°','4','#4DD0E1')} = 90°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(b) Equilateral Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = ${makeFrac('360°','3','#4DD0E1')} = 120°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(c) Regular Hexagon</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = ${makeFrac('360°','6','#4DD0E1')} = 60°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 6</span></div>
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
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #4DD0E1; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Name any two figures that have both line symmetry and rotational symmetry:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. <span class="ans-highlight">Equilateral Triangle</span> (3 lines of symmetry, rotational order 3)</div>
                    <div class="sol-step">2. <span class="ans-highlight">Circle</span> (Infinite lines of symmetry, infinite rotational order)</div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Can we have a rotational symmetry of order more than 1 whose angle of rotation is:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#00ACC1;">(i) 45°</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Order = ${makeFrac('360°','45°','#4DD0E1')} = 8</div>
                    <div class="sol-step">Since 360° is completely divisible by 45°:</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, we can have rotational symmetry of order 8.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#00ACC1;">(ii) 17°</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">360° ÷ 17° = 21.17 (Not a whole number)</div>
                    <div class="sol-step">Since 360° is not divisible by 17°:</div>
                    <div class="sol-step"><span class="ans-highlight">No, we cannot have rotational symmetry of order more than 1.</span></div>
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

// ============================================================================
// CHAPTER 13: VISUALISING SOLID SHAPES
// ============================================================================
const c7Math13Perfect = `import { ChapterContent } from "../types";

export const c7Math13: ChapterContent = {
  id: "c7-math-13",
  number: 13,
  title: "Visualising Solid Shapes",
  isHtmlView: true,
  introduction:
    "In this chapter, we explore how to represent three-dimensional (3D) objects on a two-dimensional (2D) surface using nets, cross-sections, and shadows.",
  definitions: [
    { term: "Solid Shape (3D)", description: "A three-dimensional object that occupies space (e.g., cube, cuboid, sphere, cylinder, cone)." },
    { term: "Net", description: "A 2D flat layout pattern that can be folded to form a 3D solid shape." },
    { term: "Faces, Edges, Vertices", description: "Faces are flat surfaces, Edges are line segments where faces meet, and Vertices are corner points." },
  ],
  keyPoints: [
    "Cube: 6 square faces, 12 edges, 8 vertices.",
    "Cuboid: 6 rectangular faces, 12 edges, 8 vertices.",
    "Cylinder: 2 circular flat faces, 1 curved surface, 2 curved edges, 0 vertices.",
    "Cone: 1 circular base, 1 curved surface, 1 vertex.",
    "Sphere: 1 continuous curved surface, 0 edges, 0 vertices.",
  ],
  formulas: [
    { name: "Euler's Formula (for polyhedrons)", formula: "F + V - E = 2" },
  ],
  crux: [],
  exercises: [
    { id: "ex13-1", name: "Exercise 13.1", questions: [] },
    { id: "ex13-2", name: "Exercise 13.2", questions: [] },
    { id: "ex13-3", name: "Exercise 13.3", questions: [] },
    { id: "ex13-4", name: "Exercise 13.4", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF7043; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 112, 67, 0.05); border-left: 4px solid #FF7043; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF7043; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Visualising Solid Shapes</div>
            <p class="content-text">Learn to identify 3D solids, count their faces, edges, and vertices, analyze 2D nets for building 3D solids, draw isometric and oblique sketches, and visualize cross-sections and shadows.</p>
            <div class="point-box">
                <div class="point-item">Polyhedron Properties: Faces (F), Vertices (V), and Edges (E).</div>
                <div class="point-item">Nets & Sketches: 2D patterns folding into 3D shapes, oblique and isometric drawings.</div>
                <div class="point-item">Cross-Sections & Shadows: Vertical/horizontal slices and 2D shadow projections under overhead lamps.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex13-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Identify the 3D solid shapes shown below and state their number of faces, edges and vertices:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF7043;">(i) Cube</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Faces (F) = 6 square faces</div>
                    <div class="sol-step">Edges (E) = 12 edges</div>
                    <div class="sol-step">Vertices (V) = 8 vertices</div>
                    <div class="sol-step"><span class="ans-highlight">F = 6, E = 12, V = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(ii) Cylinder</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Flat circular faces = 2</div>
                    <div class="sol-step">Curved surface = 1</div>
                    <div class="sol-step">Edges = 2 curved edges</div>
                    <div class="sol-step"><span class="ans-highlight">Faces = 3, Edges = 2, Vertices = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(iii) Cone</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Flat circular base = 1</div>
                    <div class="sol-step">Curved surface = 1</div>
                    <div class="sol-step"><span class="ans-highlight">Faces = 2, Edges = 1, Vertices = 1</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex13-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Verify Euler's Formula F + V - E = 2 for a cube:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">For a cube: Faces (F) = 6, Vertices (V) = 8, Edges (E) = 12</div>
                    <div class="sol-step">LHS = F + V - E = 6 + 8 - 12</div>
                    <div class="sol-step">= 14 - 12 = 2</div>
                    <div class="sol-step">RHS = 2</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS. Euler's formula is verified!</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex13-3": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. What cross-sections do you get when you give a (i) vertical cut (ii) horizontal cut to the following solids?</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF7043;">(a) A brick</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Rectangle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(b) A round apple</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Circle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(c) A die</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Square</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Square</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(d) A circular pipe</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(e) An ice cream cone</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Triangle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Circle</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex13-4": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF7043; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF7043; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF8A65; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FF7043; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A bulb is kept burning just right above the following solids. Name the shape of shadows:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF7043;">(i) A ball</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Circle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(ii) A cylindrical pipe</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(iii) A book</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Rectangle</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Identify 3-D objects matching each given shadow:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF7043;">(i) A circle shadow</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Cricket ball, Water bottle cap, Disc, Globe</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(ii) A square shadow</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Die, Chalk box, Rubik's cube</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(iii) A triangle shadow</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Birthday cap, Cone, Triangular Pyramid</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(iv) A rectangle shadow</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Book, Keyboard, Mobile phone, Brick</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Examine if the following are true statements:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF7043;">(i) The cube can cast a shadow in the shape of a rectangle.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">True</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(ii) The cube can cast a shadow in the shape of a hexagon.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">False</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    { id: "c7m13-mcq-1", question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correctAnswer: "b", explanation: "A cube has 6 identical square faces." },
    { id: "c7m13-mcq-2", question: "How many vertices does a cuboid have?", options: ["6", "8", "10", "12"], correctAnswer: "b", explanation: "A cuboid has 8 corner vertices." },
    { id: "c7m13-mcq-3", question: "How many edges does a cube have?", options: ["6", "8", "12", "16"], correctAnswer: "c", explanation: "A cube has 12 straight line edges." },
    { id: "c7m13-mcq-4", question: "Which of the following is Euler's formula for polyhedra?", options: ["F + V - E = 2", "F - V + E = 2", "F + E - V = 2", "F + V + E = 2"], correctAnswer: "a", explanation: "Euler's formula states that Faces + Vertices - Edges = 2." },
    { id: "c7m13-mcq-5", question: "How many vertices does a sphere have?", options: ["0", "1", "2", "Infinitely many"], correctAnswer: "a", explanation: "A sphere is completely smooth and rounded with 0 vertices." },
    { id: "c7m13-mcq-6", question: "How many vertices does a cone have?", options: ["0", "1", "2", "3"], correctAnswer: "b", explanation: "A cone has 1 top apex vertex." },
    { id: "c7m13-mcq-7", question: "What shape is formed by the cross-section of a cylinder cut vertically?", options: ["Circle", "Rectangle", "Triangle", "Square"], correctAnswer: "b", explanation: "Cutting a cylinder vertically produces a rectangular cross-section." },
    { id: "c7m13-mcq-8", question: "What shape is formed by the cross-section of a cylinder cut horizontally?", options: ["Circle", "Rectangle", "Triangle", "Oval"], correctAnswer: "a", explanation: "Cutting a cylinder horizontally parallel to its base yields a circle." },
    { id: "c7m13-mcq-9", question: "A net is a:", options: ["3D solid shape", "2D layout pattern that folds into 3D shape", "Curved surface", "Line of symmetry"], correctAnswer: "b", explanation: "A net is a 2D flat skeleton pattern that can be folded to make a 3D solid." },
    { id: "c7m13-mcq-10", question: "If a solid shape has 5 faces and 6 vertices, how many edges does it have?", options: ["7", "8", "9", "10"], correctAnswer: "c", explanation: "Using F + V - E = 2 ➔ 5 + 6 - E = 2 ➔ 11 - E = 2 ➔ E = 9 edges." }
  ]
};
`;

const contentDir = path.join(__dirname, 'data', 'content');
fs.writeFileSync(path.join(contentDir, 'c7-math-12.ts'), c7Math12Perfect, 'utf-8');
console.log("Updated c7-math-12.ts with separate lines for subparts and Solution:- !");

fs.writeFileSync(path.join(contentDir, 'c7-math-13.ts'), c7Math13Perfect, 'utf-8');
console.log("Updated c7-math-13.ts with separate lines for subparts and Solution:- !");
