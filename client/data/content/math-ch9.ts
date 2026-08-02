import { ChapterContent } from "../types";

export const mathCh9: ChapterContent = {
  id: "ch9",
  number: 9,
  title: "Some Applications of Trigonometry",
  isHtmlView: true,
  introduction:
    "Trigonometry is extensively used in real life to measure heights of tall towers, trees, buildings, and distances to celestial bodies without physical measurement, using Angles of Elevation and Angles of Depression.",
  definitions: [
    { term: "Line of Sight", description: "The line drawn from the eye of an observer to the object viewed by the observer." },
    { term: "Angle of Elevation", description: "The angle formed by the line of sight with the horizontal line when the object is ABOVE the horizontal level." },
    { term: "Angle of Depression", description: "The angle formed by the line of sight with the horizontal line when the object is BELOW the horizontal level." }
  ],
  keyPoints: [
    "Height & Distance Problem Steps:",
    "1. Draw a clear right-triangle diagram based on the question statement.",
    "2. Mark the known side (distance or height) and angle of elevation/depression.",
    "3. Use tan θ = Perpendicular/Base or sin θ = Perpendicular/Hypotenuse to solve for the unknown."
  ],
  formulas: [
    { name: "Tangent Ratio", formula: "\tan \theta = \frac{\text{Perpendicular}}{\text{Base}}" },
    { name: "Sine Ratio", formula: "\sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}}" }
  ],
  crux: [],
  exercises: [
    { id: "ex9-1", name: "Exercise 9.1", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #D81B60; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(216, 27, 96, 0.05); border-left: 4px solid #D81B60; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #D81B60; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Applications of Trigonometry</div>
            <p class="content-text">Calculate heights of towers, trees, buildings, and widths of rivers using right-triangle trigonometry and angle measurements.</p>
            <div class="point-box">
                <div class="point-item">Angle of Elevation: Eye looking UP at top of object.</div>
                <div class="point-item">Angle of Depression: Eye looking DOWN at object from top.</div>
                <div class="point-item">Ratio selection: Use tan θ for height/distance or sin θ for rope/string lengths.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex9-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #D81B60; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #D81B60; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole, if the angle made by the rope with the ground level is 30&deg;:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <!-- Vertical Pole AB -->
                            <line x1="40" y1="20" x2="40" y2="120" stroke="#D81B60" stroke-width="4"/>
                            <!-- Ground BC -->
                            <line x1="40" y1="120" x2="170" y2="120" stroke="#fff" stroke-width="2"/>
                            <!-- Rope AC -->
                            <line x1="40" y1="20" x2="170" y2="120" stroke="#FFE082" stroke-width="2.5" stroke-dasharray="4,2"/>
                            <!-- Labels -->
                            <text x="35" y="15" fill="#fff" font-size="12" font-weight="bold">A (Pole Top)</text>
                            <text x="25" y="135" fill="#fff" font-size="12" font-weight="bold">B</text>
                            <text x="175" y="135" fill="#fff" font-size="12" font-weight="bold">C (Ground)</text>
                            <text x="100" y="60" fill="#FFE082" font-size="11">Rope = 20 m</text>
                            <text x="140" y="115" fill="#F48FB1" font-size="11">30&deg;</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let AB be the height of the pole (h) and AC = 20 m be the length of the rope.</div>
                    <div class="sol-step">In right &Delta;ABC:</div>
                    <div class="sol-step">sin 30&deg; = <div class="frac"><span class="num">Perpendicular</span><span class="den">Hypotenuse</span></div> = <div class="frac"><span class="num">AB</span><span class="den">AC</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">AB</span><span class="den">20</span></div></div>
                    <div class="sol-step">AB = <div class="frac"><span class="num">20</span><span class="den">2</span></div> = 10 m</div>
                    <div class="sol-step"><span class="ans-highlight">Height of the pole = 10 m</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. A tree breaks due to storm and the bent part touches the ground making an angle 30&deg; with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the height of the tree:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let total height of tree = AB + AC, where AB is unbroken part and AC is broken bent part.</div>
                    <div class="sol-step">In right &Delta;ABC with &ang;C = 30&deg; and BC = 8 m:</div>
                    <div class="sol-step">1. tan 30&deg; = <div class="frac"><span class="num">AB</span><span class="den">BC</span></div> &rArr; <div class="frac"><span class="num">1</span><span class="den">&radic;3</span></div> = <div class="frac"><span class="num">AB</span><span class="den">8</span></div> &rArr; AB = <div class="frac"><span class="num">8</span><span class="den">&radic;3</span></div> m</div>
                    <div class="sol-step">2. cos 30&deg; = <div class="frac"><span class="num">BC</span><span class="den">AC</span></div> &rArr; <div class="frac"><span class="num">&radic;3</span><span class="den">2</span></div> = <div class="frac"><span class="num">8</span><span class="den">AC</span></div> &rArr; AC = <div class="frac"><span class="num">16</span><span class="den">&radic;3</span></div> m</div>
                    <div class="sol-step">Total Height of Tree = AB + AC = <div class="frac"><span class="num">8</span><span class="den">&radic;3</span></div> + <div class="frac"><span class="num">16</span><span class="den">&radic;3</span></div> = <div class="frac"><span class="num">24</span><span class="den">&radic;3</span></div></div>
                    <div class="sol-step">Rationalising: <div class="frac"><span class="num">24 &times; &radic;3</span><span class="den">3</span></div> = 8&radic;3 m</div>
                    <div class="sol-step"><span class="ans-highlight">Height of tree = 8&radic;3 m</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30&deg;. Find the height of the tower:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let height of tower = h m. Base distance = 30 m, Angle = 30&deg;.</div>
                    <div class="sol-step">tan 30&deg; = <div class="frac"><span class="num">h</span><span class="den">30</span></div> &rArr; <div class="frac"><span class="num">1</span><span class="den">&radic;3</span></div> = <div class="frac"><span class="num">h</span><span class="den">30</span></div></div>
                    <div class="sol-step">h = <div class="frac"><span class="num">30</span><span class="den">&radic;3</span></div> = <div class="frac"><span class="num">30 &times; &radic;3</span><span class="den">3</span></div> = 10&radic;3 m</div>
                    <div class="sol-step"><span class="ans-highlight">Height of tower = 10&radic;3 m</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m9-mcq-1", question: "The angle of elevation of top of a tower 30 m away from its foot is 30°. The height of tower is:", options: ["10√3 m", "10 m", "30√3 m", "10√2 m"], correctAnswer: "a", explanation: "tan 30° = h / 30 ➔ 1/√3 = h / 30 ➔ h = 30/√3 = 10√3 m." },
    { id: "c10m9-mcq-2", question: "A kite is flying at a height of 60 m. String inclination is 60°. Length of string is:", options: ["40√3 m", "30√3 m", "60√3 m", "120√3 m"], correctAnswer: "a", explanation: "sin 60° = 60 / L ➔ √3/2 = 60 / L ➔ L = 120/√3 = 40√3 m." },
    { id: "c10m9-mcq-3", question: "A tower is 100√3 m high. The angle of elevation of its top from a point 100 m away from foot is:", options: ["30°", "45°", "60°", "90°"], correctAnswer: "c", explanation: "tan θ = 100√3 / 100 = √3 ➔ θ = 60°." },
    { id: "c10m9-mcq-4", question: "The shadow of a tower is equal to its height. The sun's altitude is:", options: ["30°", "45°", "60°", "90°"], correctAnswer: "b", explanation: "tan θ = height / shadow = h / h = 1 ➔ θ = 45°." },
    { id: "c10m9-mcq-5", question: "If the angle of depression of an object from a 75 m high tower is 30°, its distance from tower is:", options: ["75√3 m", "75 m", "25√3 m", "50 m"], correctAnswer: "a", explanation: "tan 30° = 75 / d ➔ 1/√3 = 75 / d ➔ d = 75√3 m." },
    { id: "c10m9-mcq-6", question: "A pole 6 m high casts a shadow 2√3 m long. Sun's elevation is:", options: ["60°", "30°", "45°", "90°"], correctAnswer: "a", explanation: "tan θ = 6 / 2√3 = 3/√3 = √3 ➔ θ = 60°." },
    { id: "c10m9-mcq-7", question: "If the ratio of height of a vertical pole and length of its shadow is √3 : 1, angle of elevation is:", options: ["30°", "45°", "60°", "90°"], correctAnswer: "c", explanation: "tan θ = √3 / 1 = √3 ➔ θ = 60°." },
    { id: "c10m9-mcq-8", question: "A ladder 15 m long makes an angle of 60° with the wall. Height of point where ladder touches wall is:", options: ["15√3/2 m", "15/2 m", "15 m", "30 m"], correctAnswer: "a", explanation: "sin 60° = h / 15 ➔ √3/2 = h / 15 ➔ h = 15√3/2 m." },
    { id: "c10m9-mcq-9", question: "The line drawn from the eye of an observer to the object viewed is called:", options: ["Horizontal line", "Line of sight", "Transversal", "Parallel line"], correctAnswer: "b", explanation: "By definition, it is called the Line of Sight." },
    { id: "c10m9-mcq-10", question: "Angle formed by line of sight with horizontal line when object is below horizontal level is:", options: ["Angle of elevation", "Angle of depression", "Right angle", "Obtuse angle"], correctAnswer: "b", explanation: "Looking DOWN at an object forms the Angle of Depression." }
  ]
};
