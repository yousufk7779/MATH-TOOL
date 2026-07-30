import { ChapterContent } from "../types";

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
    { name: "Angle of Rotation", formula: "\\text{Angle of Rotation} = \\frac{360^\\circ}{\\text{Order of Symmetry}}" },
  ],
  crux: [],
  exercises: [
    { id: "ex12-1", name: "Exercise 12.1", questions: [] },
    { id: "ex12-2", name: "Exercise 12.2", questions: [] },
    { id: "ex12-3", name: "Exercise 12.3", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #26C6DA; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(38, 198, 218, 0.05); border-left: 4px solid #26C6DA; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #26C6DA; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
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
    `,
  htmlExercises: {
    "ex12-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title { color: #26C6DA; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #80DEEA; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #26C6DA; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Copy the figures with punched holes and find the axes of symmetry for the following (a to l):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#26C6DA;">(a) Square with 2 holes on left & right</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A vertical line passing through the center folds the square into matching halves.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) Square with 2 holes near top-right corner</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Folding along the diagonal reflects the two holes onto each other.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Diagonal)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) Square with 2 holes on right side</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A horizontal line passing through the center reflects top hole to bottom hole.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry (Horizontal)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(d) Square with 4 holes on opposite sides</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Horizontal axis folds top pair onto bottom pair.</div>
                    <div class="sol-step"><span class="ans-highlight">1 axis of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(e) Square with 4 corner holes</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 diagonal lines + 2 perpendicular bisectors.</div>
                    <div class="sol-step"><span class="ans-highlight">4 axes of symmetry</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. State the number of lines of symmetry for the following figures:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#26C6DA;">(a) An equilateral triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 lines along medians/altitudes.</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) An isosceles triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1 line along median to unequal side.</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 line of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) A scalene triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">No matching sides.</div>
                    <div class="sol-step"><span class="ans-highlight">= 0 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(d) A square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 diagonals + 2 mid-point bisectors.</div>
                    <div class="sol-step"><span class="ans-highlight">= 4 lines of symmetry</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(e) A rectangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 mid-point perpendicular lines.</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 lines of symmetry</span></div>
                </div>
            </div>
        </div>
    `,
    "ex12-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title { color: #26C6DA; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #80DEEA; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Give the order of rotational symmetry for each figure:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#26C6DA;">(a) Square</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num" style="border-bottom-color:#80DEEA;">360°</span><span class="den">4</span></div> = 90°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(b) Equilateral Triangle</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num" style="border-bottom-color:#80DEEA;">360°</span><span class="den">3</span></div> = 120°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(c) Regular Hexagon</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Angle of rotation = <div class="frac"><span class="num" style="border-bottom-color:#80DEEA;">360°</span><span class="den">6</span></div> = 60°</div>
                    <div class="sol-step"><span class="ans-highlight">Order of rotational symmetry = 6</span></div>
                </div>
            </div>
        </div>
    `,
    "ex12-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #26C6DA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #26C6DA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title { color: #26C6DA; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #80DEEA; padding: 0 2px; display: block; }
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#26C6DA;">(i) 45°</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Order = <div class="frac"><span class="num" style="border-bottom-color:#80DEEA;">360°</span><span class="den">45°</span></div> = 8</div>
                    <div class="sol-step">Since 360° is completely divisible by 45°:</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, we can have rotational symmetry of order 8.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#26C6DA;">(ii) 17°</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">360° ÷ 17° = 21.17 (Not a whole number)</div>
                    <div class="sol-step">Since 360° is not divisible by 17°:</div>
                    <div class="sol-step"><span class="ans-highlight">No, we cannot have rotational symmetry of order more than 1.</span></div>
                </div>
            </div>
        </div>
    `,
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
