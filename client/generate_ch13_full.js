const fs = require('fs');
const path = require('path');

const c7Math13Full = `import { ChapterContent } from "../types";

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
                <div class="question-header">1. Identify the nets which can be used to make cubes (i to vi):</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF7043;">(i) 1-1-4 net:</b> Cannot be folded as a cube (2 faces overlap). <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(ii) Z-step 6-square net:</b> <span class="ans-highlight">Yes</span>, can be folded as a cube.</div>
                    <div class="sol-step"><b style="color:#FF7043;">(iii) T-step 6-square net:</b> <span class="ans-highlight">Yes</span>, can be folded as a cube.</div>
                    <div class="sol-step"><b style="color:#FF7043;">(iv) Cross 6-square net:</b> <span class="ans-highlight">Yes</span>, can be folded as a cube.</div>
                    <div class="sol-step"><b style="color:#FF7043;">(v) L-step 6-square net:</b> Cannot be folded as a cube. <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(vi) Modified cross 6-square net:</b> <span class="ans-highlight">Yes</span>, can be folded as a cube.</div>
                </div>
            </div>

            <!-- Question 2, 3, 4, 5 -->
            <div class="sol-card">
                <div class="question-header">2, 3, 4 & 5. Dice Nets & Matching Nets to Solids:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF7043;">2 (i) Fill blanks in dice net (opposite sum = 7):</b></div>
                    <div class="sol-step">Opposite of 1 is <span class="ans-highlight">6</span>, opposite of 2 is <span class="ans-highlight">5</span>, opposite of 3 is <span class="ans-highlight">4</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">3. Can 1-2-3-4-5-6 strip net be a net for a die?</b></div>
                    <div class="sol-step">Solution:- <span class="ans-highlight">No</span>, because opposite face pairs (1 & 4 = 5, 3 & 6 = 9) do not sum to 7.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">4. Complete incomplete net (3 squares) for a cube in 2 ways:</b></div>
                    <div class="sol-step">Add 3 squares to form either a T-net or a Cross-net.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">5. Match nets with appropriate solids:</b></div>
                    <div class="sol-step">• (a) Cube ➔ <span class="ans-highlight">(ii) Cross 6-square net</span></div>
                    <div class="sol-step">• (b) Cylinder ➔ <span class="ans-highlight">(iii) Rectangle with 2 circular caps</span></div>
                    <div class="sol-step">• (c) Cone ➔ <span class="ans-highlight">(iv) Sector with circle base</span></div>
                    <div class="sol-step">• (d) Pyramid ➔ <span class="ans-highlight">(i) Square base with 4 triangular flaps</span></div>
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
            <!-- Question 1 - 5 -->
            <div class="sol-card">
                <div class="question-header">1, 2, 3, 4 & 5. Isometric & Oblique Sketches of Solids:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF7043;">1. Isometric dot paper sketches:</b></div>
                    <div class="sol-step">• (i) Cuboid (6 x 3 x 3 grid): <span class="ans-highlight">Drawn with dimensions 6 units length, 3 units width, 3 units height</span></div>
                    <div class="sol-step">• (ii) T-shaped stepped solid: <span class="ans-highlight">Drawn on isometric dot sheet</span></div>
                    <div class="sol-step">• (iii) L-shaped solid: <span class="ans-highlight">Drawn on isometric dot sheet</span></div>
                    <div class="sol-step">• (iv) Staircase solid: <span class="ans-highlight">Drawn on isometric dot sheet</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">2. Cuboid of dimensions 5 cm, 3 cm, 2 cm:</b></div>
                    <div class="sol-step"><span class="ans-highlight">3 isometric sketches created using orientations: (5 x 3 x 2), (5 x 2 x 3), and (3 x 2 x 5).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">3. Three cubes of 2 cm edge placed side-by-side:</b></div>
                    <div class="sol-step">Forms a cuboid of dimensions 6 cm × 2 cm × 2 cm. <span class="ans-highlight">Oblique & Isometric sketch drawn.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">4 & 5. Oblique & Isometric Sketches:</b></div>
                    <div class="sol-step">• Cuboid (5 cm × 3 cm × 2 cm): <span class="ans-highlight">Oblique sketch drawn on squared paper; Isometric sketch drawn on dot paper.</span></div>
                    <div class="sol-step">• Cube of edge 4 cm: <span class="ans-highlight">Oblique sketch (4 × 4 × 4) and Isometric sketch (4 × 4 × 4) drawn.</span></div>
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
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Rectangle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(b) A round apple</b></div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Circle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(c) A die</b></div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Square</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Square</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(d) A circular pipe</b></div>
                    <div class="sol-step">• (i) Vertical cut: <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step">• (ii) Horizontal cut: <span class="ans-highlight">Rectangle</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF7043;">(e) An ice cream cone</b></div>
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
                    <div class="sol-step"><b style="color:#FF7043;">(i) A ball:</b> <span class="ans-highlight">Circle</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(ii) A cylindrical pipe:</b> <span class="ans-highlight">Rectangle</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(iii) A book:</b> <span class="ans-highlight">Rectangle</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Identify 3-D objects matching each given shadow:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF7043;">(i) A circle shadow:</b> <span class="ans-highlight">Ball, Water bottle cap, Disc, Globe</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(ii) A square shadow:</b> <span class="ans-highlight">Die, Chalk box, Rubik's cube</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(iii) A triangle shadow:</b> <span class="ans-highlight">Birthday cap, Cone, Triangular Pyramid</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(iv) A rectangle shadow:</b> <span class="ans-highlight">Book, Keyboard, Mobile phone, Brick</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Examine if the following are true statements:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF7043;">(i) The cube can cast a shadow in the shape of a rectangle.</b> ➔ <span class="ans-highlight">True</span></div>
                    <div class="sol-step"><b style="color:#FF7043;">(ii) The cube can cast a shadow in the shape of a hexagon.</b> ➔ <span class="ans-highlight">False</span></div>
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

fs.writeFileSync(path.join(__dirname, 'data', 'content', 'c7-math-13.ts'), c7Math13Full, 'utf-8');
console.log("Successfully wrote full complete c7-math-13.ts!");
