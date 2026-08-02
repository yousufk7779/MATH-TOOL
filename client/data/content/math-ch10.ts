import { ChapterContent } from "../types";

export const mathCh10: ChapterContent = {
  id: "ch10",
  number: 10,
  title: "Circles",
  isHtmlView: true,
  introduction:
    "A tangent to a circle is a straight line that touches the circle at exactly one point. In this chapter, we study key circle theorems: the radius is perpendicular to the tangent at the point of contact, and tangents drawn from an external point to a circle are equal in length.",
  definitions: [
    { term: "Tangent to a Circle", description: "A line that intersects/touches a circle at only one single point." },
    { term: "Point of Contact", description: "The common point where the tangent line meets the circle." },
    { term: "Secant", description: "A line that intersects a circle at two distinct points." }
  ],
  keyPoints: [
    "Theorem 10.1: The tangent at any point of a circle is perpendicular to the radius through the point of contact (OP ⊥ XY).",
    "Theorem 10.2: The lengths of tangents drawn from an external point to a circle are equal (PA = PB).",
    "Concentric Circles: Circles with the same centre but different radii. A chord of larger circle touching smaller circle is bisected at point of contact."
  ],
  formulas: [
    { name: "Tangent-Radius Perpendicularity", formula: "OP \perp XY" },
    { name: "External Tangents Equality", formula: "PA = PB" }
  ],
  crux: [],
  exercises: [
    { id: "ex10-1", name: "Exercise 10.1", questions: [] },
    { id: "ex10-2", name: "Exercise 10.2", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FFB300; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 179, 0, 0.05); border-left: 4px solid #FFB300; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FFB300; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Circles</div>
            <p class="content-text">Understand tangent properties, radius-tangent perpendicularity (Theorem 10.1), equal external tangent lengths (Theorem 10.2), and concentric circle problems through vector geometry.</p>
            <div class="point-box">
                <div class="point-item">Theorem 10.1: Radius ⊥ Tangent at point of contact (OP ⊥ XY).</div>
                <div class="point-item">Theorem 10.2: Tangents from external point P are equal: PA = PB.</div>
                <div class="point-item">Pythagoras Application: OP² + PQ² = OQ² in right triangle OPQ.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex10-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FFB300; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FFB300; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FFB300; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFE082; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FFB300; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. How many tangents can a circle have?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A circle consists of infinitely many points on its boundary, and at each point a unique tangent can be drawn.</div>
                    <div class="sol-step"><span class="ans-highlight">A circle can have infinitely many tangents.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Length PQ is:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="180" height="140" viewBox="0 0 180 140">
                            <circle cx="70" cy="70" r="45" fill="rgba(255,179,0,0.1)" stroke="#FFB300" stroke-width="2"/>
                            <line x1="70" y1="70" x2="70" y2="115" stroke="#FFE082" stroke-width="1.5"/>
                            <line x1="70" y1="115" x2="165" y2="115" stroke="#FF5252" stroke-width="2"/>
                            <line x1="70" y1="70" x2="165" y2="115" stroke="#fff" stroke-width="1.5"/>
                            <circle cx="70" cy="70" r="3" fill="#fff"/>
                            <text x="70" y="60" fill="#fff" font-size="11" font-weight="bold">O</text>
                            <text x="60" y="130" fill="#FFE082" font-size="11" font-weight="bold">P (5 cm)</text>
                            <text x="170" y="125" fill="#FF5252" font-size="11" font-weight="bold">Q</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since radius OP ⊥ tangent PQ, &Delta;OPQ is a right-angled triangle at P.</div>
                    <div class="sol-step">By Pythagoras Theorem: OQ&sup2; = OP&sup2; + PQ&sup2;</div>
                    <div class="sol-step">12&sup2; = 5&sup2; + PQ&sup2;</div>
                    <div class="sol-step">144 = 25 + PQ&sup2;</div>
                    <div class="sol-step">PQ&sup2; = 144 - 25 = 119</div>
                    <div class="sol-step"><span class="ans-highlight">PQ = &radic;119 cm (Option D)</span></div>
                </div>
            </div>
        </div>
    `,
    "ex10-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FFB300; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FFB300; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FFB300; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFE082; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius r = &radic;[OQ&sup2; - Tangent&sup2;] = &radic;[25&sup2; - 24&sup2;]</div>
                    <div class="sol-step">r = &radic;[625 - 576] = &radic;49 = 7 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 7 cm (Option A)</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m10-mcq-1", question: "A tangent PQ at point P of radius 5 cm meets line through centre O at Q so OQ = 12 cm. Length PQ is:", options: ["12 cm", "13 cm", "8.5 cm", "√119 cm"], correctAnswer: "d", explanation: "PQ = √(12² - 5²) = √(144 - 25) = √119 cm." },
    { id: "c10m10-mcq-2", question: "From point Q, length of tangent is 24 cm and distance of Q from centre is 25 cm. Radius is:", options: ["7 cm", "12 cm", "15 cm", "24.5 cm"], correctAnswer: "a", explanation: "r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm." },
    { id: "c10m10-mcq-3", question: "If tangents PA and PB from point P are inclined to each other at 80°, then ∠POA is:", options: ["50°", "60°", "70°", "80°"], correctAnswer: "a", explanation: "∠APB = 80° ➔ ∠AOB = 180° - 80° = 100°. ∠POA = 100° / 2 = 50°." },
    { id: "c10m10-mcq-4", question: "If TP and TQ are two tangents to a circle with centre O so that ∠POQ = 110°, then ∠PTQ is:", options: ["60°", "70°", "80°", "90°"], correctAnswer: "b", explanation: "∠PTQ + ∠POQ = 180° ➔ ∠PTQ = 180° - 110° = 70°." },
    { id: "c10m10-mcq-5", question: "The length of tangent from point A at distance 5 cm from centre is 4 cm. Radius is:", options: ["3 cm", "5 cm", "7 cm", "3.5 cm"], correctAnswer: "a", explanation: "r = √(5² - 4²) = √(25 - 16) = √9 = 3 cm." },
    { id: "c10m10-mcq-6", question: "Two concentric circles have radii 5 cm and 3 cm. Length of chord touching smaller circle is:", options: ["8 cm", "10 cm", "12 cm", "18 cm"], correctAnswer: "a", explanation: "Half chord = √(5² - 3²) = 4 cm. Full chord = 2 × 4 = 8 cm." },
    { id: "c10m10-mcq-7", question: "Number of tangents that can be drawn from an external point to a circle is:", options: ["1", "2", "3", "Infinitely many"], correctAnswer: "b", explanation: "Exactly 2 tangents can be drawn from an external point to a circle." },
    { id: "c10m10-mcq-8", question: "The angle between a tangent to a circle and the radius through point of contact is:", options: ["45°", "60°", "90°", "180°"], correctAnswer: "c", explanation: "Theorem 10.1: Tangent is perpendicular to radius at point of contact (90°)." },
    { id: "c10m10-mcq-9", question: "If a parallelogram circumscribes a circle, then it is a:", options: ["Rectangle", "Square", "Rhombus", "Trapezium"], correctAnswer: "c", explanation: "A circumscribing parallelogram has all 4 sides equal ➔ Rhombus." },
    { id: "c10m10-mcq-10", question: "If radii of two concentric circles are 4 cm and 5 cm, length of chord touching inner circle is:", options: ["3 cm", "6 cm", "9 cm", "10 cm"], correctAnswer: "b", explanation: "Half chord = √(5² - 4²) = 3 cm. Chord = 2 × 3 = 6 cm." }
  ]
};
