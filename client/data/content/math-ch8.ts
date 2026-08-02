import { ChapterContent } from "../types";

export const mathCh8: ChapterContent = {
  id: "ch8",
  number: 8,
  title: "Introduction to Trigonometry",
  isHtmlView: true,
  introduction:
    "Trigonometry is the branch of mathematics dealing with relations of the sides and angles of triangles. In Class 10, we study Trigonometric Ratios (sin, cos, tan, cosec, sec, cot) for acute angles in a right-angled triangle and fundamental Trigonometric Identities.",
  definitions: [
    { term: "Trigonometric Ratios", description: "Ratios of sides of a right-angled triangle with respect to its acute angles: sin θ = Perpendicular/Hypotenuse, cos θ = Base/Hypotenuse, tan θ = Perpendicular/Base." },
    { term: "Reciprocal Ratios", description: "cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ." },
    { term: "Trigonometric Identities", description: "Equations involving trigonometric ratios of an angle that hold true for all values of the angle." }
  ],
  keyPoints: [
    "Fundamental Trigonometric Identities:",
    "1. sin² A + cos² A = 1",
    "2. 1 + tan² A = sec² A",
    "3. 1 + cot² A = cosec² A",
    "Trigonometric values at standard angles (0°, 30°, 45°, 60°, 90°):",
    "sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, tan 45° = 1."
  ],
  formulas: [
    { name: "Pythagorean Identity 1", formula: "\sin^2 A + \cos^2 A = 1" },
    { name: "Pythagorean Identity 2", formula: "1 + \tan^2 A = \sec^2 A" },
    { name: "Pythagorean Identity 3", formula: "1 + \cot^2 A = \csc^2 A" }
  ],
  crux: [],
  exercises: [
    { id: "ex8-1", name: "Exercise 8.1", questions: [] },
    { id: "ex8-2", name: "Exercise 8.2", questions: [] },
    { id: "ex8-3", name: "Exercise 8.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #E91E63; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(233, 30, 99, 0.05); border-left: 4px solid #E91E63; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #E91E63; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Introduction to Trigonometry</div>
            <p class="content-text">Master right-triangle ratio definitions (sin, cos, tan, cosec, sec, cot), standard angle evaluation table, and algebraic trigonometric identity proofs.</p>
            <div class="point-box">
                <div class="point-item">Ratios: sin θ = P/H, cos θ = B/H, tan θ = P/B.</div>
                <div class="point-item">Values: Memorize standard values at 0°, 30°, 45°, 60°, 90°.</div>
                <div class="point-item">Identities: sin² A + cos² A = 1, 1 + tan² A = sec² A, 1 + cot² A = cosec² A.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex8-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #E91E63; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #E91E63; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #E91E63; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #E91E63; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. In &Delta;ABC, right-angled at B, AB = 24 cm, BC = 7 cm. Determine:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="180" height="130" viewBox="0 0 180 130">
                            <!-- Right Triangle ABC -->
                            <polygon points="30,20 30,110 150,110" fill="rgba(233,30,99,0.1)" stroke="#E91E63" stroke-width="2"/>
                            <rect x="30" y="98" width="12" height="12" fill="none" stroke="#E91E63" stroke-width="1.5"/>
                            <text x="25" y="15" fill="#fff" font-size="12" font-weight="bold">A</text>
                            <text x="15" y="120" fill="#fff" font-size="12" font-weight="bold">B</text>
                            <text x="155" y="120" fill="#fff" font-size="12" font-weight="bold">C</text>
                            <text x="10" y="65" fill="#F48FB1" font-size="10">24 cm</text>
                            <text x="85" y="125" fill="#F48FB1" font-size="10">7 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Pythagoras Theorem in &Delta;ABC:</div>
                    <div class="sol-step">AC&sup2; = AB&sup2; + BC&sup2;</div>
                    <div class="sol-step">AC&sup2; = (24)&sup2; + (7)&sup2; = 576 + 49 = 625</div>
                    <div class="sol-step">AC = &radic;625 = 25 cm</div>

                    <!-- Q1 (i) -->
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#E91E63;">(i) sin A, cos A</b></div>
                    <div class="sol-step">For angle A: Perpendicular = BC = 7 cm, Base = AB = 24 cm, Hypotenuse = AC = 25 cm.</div>
                    <div class="sol-step">sin A = <div class="frac"><span class="num">BC</span><span class="den">AC</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">25</span></div></span></div>
                    <div class="sol-step">cos A = <div class="frac"><span class="num">AB</span><span class="den">AC</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">24</span><span class="den">25</span></div></span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#E91E63;">(ii) sin C, cos C</b></div>
                    <div class="sol-step">For angle C: Perpendicular = AB = 24 cm, Base = BC = 7 cm, Hypotenuse = AC = 25 cm.</div>
                    <div class="sol-step">sin C = <div class="frac"><span class="num">AB</span><span class="den">AC</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">24</span><span class="den">25</span></div></span></div>
                    <div class="sol-step">cos C = <div class="frac"><span class="num">BC</span><span class="den">AC</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">25</span></div></span></div>
                </div>
            </div>
        </div>
    `,
    "ex8-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #E91E63; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #E91E63; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #E91E63; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Evaluate the following:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#E91E63;">(i) sin 60&deg; cos 30&deg; + sin 30&deg; cos 60&deg;</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">sin 60&deg; = <div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div> &nbsp;,&nbsp; cos 30&deg; = <div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div></div>
                    <div class="sol-step">sin 30&deg; = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;,&nbsp; cos 60&deg; = <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                    <div class="sol-step">Expression = (<div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div>) &times; (<div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div>) + (<div class="frac"><span class="num">1</span><span class="den">2</span></div>) &times; (<div class="frac"><span class="num">1</span><span class="den">2</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3</span><span class="den">4</span></div> + <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">4</span><span class="den">4</span></div> = 1</div>
                    <div class="sol-step"><span class="ans-highlight">Value = 1</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#E91E63;">(ii) 2 tan&sup2; 45&deg; + cos&sup2; 30&deg; - sin&sup2; 60&deg;</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">tan 45&deg; = 1 &nbsp;,&nbsp; cos 30&deg; = <div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div> &nbsp;,&nbsp; sin 60&deg; = <div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div></div>
                    <div class="sol-step">= 2(1)&sup2; + (<div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div>)&sup2; - (<div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div>)&sup2; = 2 + <div class="frac"><span class="num">3</span><span class="den">4</span></div> - <div class="frac"><span class="num">3</span><span class="den">4</span></div> = 2</div>
                    <div class="sol-step"><span class="ans-highlight">Value = 2</span></div>
                </div>
            </div>
        </div>
    `,
    "ex8-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #E91E63; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #E91E63; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #E91E63; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Choose the correct option. Justify your choice:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#E91E63;">(i) 9 sec&sup2; A - 9 tan&sup2; A =</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Taking common factor 9:</div>
                    <div class="sol-step">= 9 (sec&sup2; A - tan&sup2; A)</div>
                    <div class="sol-step">We know the identity: 1 + tan&sup2; A = sec&sup2; A &rArr; sec&sup2; A - tan&sup2; A = 1</div>
                    <div class="sol-step">= 9 (1) = 9</div>
                    <div class="sol-step"><span class="ans-highlight">Value = 9 (Option B)</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m8-mcq-1", question: "The value of 9 sec² A - 9 tan² A is:", options: ["1", "9", "8", "0"], correctAnswer: "b", explanation: "9(sec² A - tan² A) = 9(1) = 9." },
    { id: "c10m8-mcq-2", question: "The value of (1 + tan θ + sec θ)(1 + cot θ - cosec θ) is:", options: ["0", "1", "2", "-1"], correctAnswer: "c", explanation: "Converting all to sin and cos and expanding yields 2." },
    { id: "c10m8-mcq-3", question: "(sec A + tan A)(1 - sin A) is equal to:", options: ["sec A", "sin A", "cosec A", "cos A"], correctAnswer: "d", explanation: "(1 + sin A)/cos A × (1 - sin A) = (1 - sin² A)/cos A = cos² A / cos A = cos A." },
    { id: "c10m8-mcq-4", question: "The value of (1 + tan² A) / (1 + cot² A) is:", options: ["sec² A", "-1", "cot² A", "tan² A"], correctAnswer: "d", explanation: "sec² A / cosec² A = (1/cos² A) / (1/sin² A) = sin² A / cos² A = tan² A." },
    { id: "c10m8-mcq-5", question: "If sin A = 3/4, then cos A is:", options: ["4/3", "√7/4", "3/√7", "√7/3"], correctAnswer: "b", explanation: "cos A = √(1 - sin² A) = √(1 - 9/16) = √(7/16) = √7/4." },
    { id: "c10m8-mcq-6", question: "If 4 tan A = 3, then (4 sin A - cos A) / (4 sin A + cos A) is:", options: ["2/3", "1/3", "1/2", "3/4"], correctAnswer: "c", explanation: "Divide numerator and denominator by cos A: (4 tan A - 1)/(4 tan A + 1) = (3 - 1)/(3 + 1) = 2/4 = 1/2." },
    { id: "c10m8-mcq-7", question: "The value of sin 60° cos 30° + sin 30° cos 60° is:", options: ["0", "1", "2", "√3"], correctAnswer: "b", explanation: "sin(60° + 30°) = sin 90° = 1." },
    { id: "c10m8-mcq-8", question: "If tan A = √3, then sec A is:", options: ["2", "1/2", "1/√3", "2/√3"], correctAnswer: "a", explanation: "tan A = √3 ➔ A = 60°. sec 60° = 2." },
    { id: "c10m8-mcq-9", question: "If sin θ + cos θ = √2 cos θ, then tan θ is:", options: ["√2 - 1", "√2 + 1", "1", "√2"], correctAnswer: "a", explanation: "Divide by cos θ: tan θ + 1 = √2 ➔ tan θ = √2 - 1." },
    { id: "c10m8-mcq-10", question: "If cos A = 1/2, then the value of 2 sec A / (1 + tan² A) is:", options: ["1", "2", "1/2", "√3"], correctAnswer: "a", explanation: "A = 60°. 2(2) / (1 + 3) = 4/4 = 1." }
  ]
};
