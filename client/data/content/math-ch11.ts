import { ChapterContent } from "../types";

export const mathCh11: ChapterContent = {
  id: "ch11",
  number: 11,
  title: "Areas Related to Circles",
  isHtmlView: true,
  introduction:
    "In this chapter, we study planar geometric regions associated with circles, specifically Sector Area = (θ/360°) × πr², Arc Length = (θ/360°) × 2πr, and Segment Area = Area of Sector - Area of Triangle.",
  definitions: [
    { term: "Sector of a Circle", description: "The region bounded by two radii and the arc intercepted between them." },
    { term: "Segment of a Circle", description: "The region bounded by a chord and the arc subtended by it." },
    { term: "Quadrant", description: "A sector of a circle with central angle θ = 90° (one-fourth of the circle area)." }
  ],
  keyPoints: [
    "Area of a Circle = πr²",
    "Circumference of a Circle = 2πr",
    "Area of Sector of angle θ = (θ / 360°) × πr²",
    "Length of Arc of angle θ = (θ / 360°) × 2πr",
    "Area of Segment = Area of Sector - Area of Corresponding Triangle = (θ/360°) × πr² - 1/2 r² sin θ."
  ],
  formulas: [
    { name: "Sector Area Formula", formula: "A = \frac{\theta}{360^\circ} \times \pi r^2" },
    { name: "Arc Length Formula", formula: "l = \frac{\theta}{360^\circ} \times 2 \pi r" },
    { name: "Segment Area Formula", formula: "A_{\text{segment}} = \frac{\theta}{360^\circ} \pi r^2 - \frac{1}{2} r^2 \sin \theta" }
  ],
  crux: [],
  exercises: [
    { id: "ex11-1", name: "Exercise 11.1", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF4081; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 64, 129, 0.05); border-left: 4px solid #FF4081; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF4081; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Areas Related to Circles</div>
            <p class="content-text">Calculate sector areas, segment areas, arc lengths, and practical region areas like clock minute hand sweeps and field grazing areas.</p>
            <div class="point-box">
                <div class="point-item">Sector Area: (θ/360°) × πr²</div>
                <div class="point-item">Arc Length: (θ/360°) × 2πr</div>
                <div class="point-item">Segment Area: Sector Area - Triangle Area</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex11-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80AB; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF4081; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60&deg;:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="160" height="140" viewBox="0 0 160 140">
                            <circle cx="80" cy="70" r="50" fill="rgba(255,64,129,0.1)" stroke="#FF4081" stroke-width="2"/>
                            <!-- Sector wedge -->
                            <path d="M 80,70 L 130,70 A 50,50 0 0,0 105,27 Z" fill="rgba(255,64,129,0.4)" stroke="#FF4081" stroke-width="2"/>
                            <text x="80" y="65" fill="#fff" font-size="10">O</text>
                            <text x="95" y="60" fill="#FF80AB" font-size="10">60&deg;</text>
                            <text x="100" y="85" fill="#FF80AB" font-size="10">r = 6 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius r = 6 cm &nbsp;,&nbsp; Sector angle &theta; = 60&deg;</div>
                    <div class="sol-step">Area of Sector = <div class="frac"><span class="num">&theta;</span><span class="den">360&deg;</span></div> &times; &pi;r&sup2;</div>
                    <div class="sol-step">= <div class="frac"><span class="num">60&deg;</span><span class="den">360&deg;</span></div> &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 6 &times; 6</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">6</span></div> &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 36</div>
                    <div class="sol-step">= <div class="frac"><span class="num">22 &times; 6</span><span class="den">7</span></div> = <div class="frac"><span class="num">132</span><span class="den">7</span></div> cm&sup2;</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Sector = <div class="frac"><span class="num">132</span><span class="den">7</span></div> cm&sup2;</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of a quadrant of a circle whose circumference is 22 cm:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 2&pi;r = 22 cm</div>
                    <div class="sol-step">2 &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; r = 22 &rArr; r = <div class="frac"><span class="num">7</span><span class="den">2</span></div> cm</div>
                    <div class="sol-step">Area of Quadrant = <div class="frac"><span class="num">1</span><span class="den">4</span></div> &pi;r&sup2;</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; (<div class="frac"><span class="num">7</span><span class="den">2</span></div>)&sup2;</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">49</span><span class="den">4</span></div> = <div class="frac"><span class="num">77</span><span class="den">8</span></div> cm&sup2;</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Quadrant = <div class="frac"><span class="num">77</span><span class="den">8</span></div> cm&sup2;</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In 60 minutes, minute hand rotates 360&deg;.</div>
                    <div class="sol-step">In 5 minutes, angle &theta; = <div class="frac"><span class="num">360&deg;</span><span class="den">60</span></div> &times; 5 = 30&deg;</div>
                    <div class="sol-step">Radius r = 14 cm</div>
                    <div class="sol-step">Area Swept = <div class="frac"><span class="num">30&deg;</span><span class="den">360&deg;</span></div> &times; <div class="frac"><span class="num">22</span><span class="den">7</span></div> &times; 14 &times; 14</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">12</span></div> &times; 22 &times; 2 &times; 14 = <div class="frac"><span class="num">154</span><span class="den">3</span></div> cm&sup2;</div>
                    <div class="sol-step"><span class="ans-highlight">Area swept = <div class="frac"><span class="num">154</span><span class="den">3</span></div> cm&sup2;</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m11-mcq-1", question: "Area of a sector of angle p (in degrees) of a circle with radius R is:", options: ["(p/180) × 2πR", "(p/180) × πR²", "(p/360) × 2πR", "(p/720) × 2πR²"], correctAnswer: "d", explanation: "(p/720) × 2πR² simplify into (p/360) × πR²." },
    { id: "c10m11-mcq-2", question: "If the sum of circumferences of two circles with radii R1 and R2 equals circumference of radius R, then:", options: ["R1 + R2 = R", "R1 + R2 > R", "R1 + R2 < R", "None of these"], correctAnswer: "a", explanation: "2πR1 + 2πR2 = 2πR ➔ R1 + R2 = R." },
    { id: "c10m11-mcq-3", question: "If the ratio of areas of two circles is 4 : 9, then the ratio of their circumferences is:", options: ["2 : 3", "4 : 9", "3 : 2", "16 : 81"], correctAnswer: "a", explanation: "Ratio of circumferences = √(Area ratio) = √(4/9) = 2/3 = 2 : 3." },
    { id: "c10m11-mcq-4", question: "The area of a circle that can be inscribed in a square of side 6 cm is:", options: ["36π cm²", "18π cm²", "12π cm²", "9π cm²"], correctAnswer: "d", explanation: "Diameter = 6 cm ➔ r = 3 cm. Area = π r² = π(3)² = 9π cm²." },
    { id: "c10m11-mcq-5", question: "If area of a circle is 154 cm², then its perimeter (circumference) is:", options: ["11 cm", "22 cm", "44 cm", "55 cm"], correctAnswer: "c", explanation: "22/7 × r² = 154 ➔ r² = 49 ➔ r = 7 cm. Perimeter = 2 × 22/7 × 7 = 44 cm." },
    { id: "c10m11-mcq-6", question: "Angle subtended at centre by arc of length equal to radius is 1 radian (~57.3°). The area of sector of radius r and arc length l is:", options: ["1/2 lr", "lr", "1/4 lr", "2lr"], correctAnswer: "a", explanation: "Area of sector = (l / 2πr) × πr² = 1/2 lr." },
    { id: "c10m11-mcq-7", question: "If perimeter and area of a circle are numerically equal, then radius of the circle is:", options: ["2 units", "π units", "4 units", "7 units"], correctAnswer: "a", explanation: "2πr = πr² ➔ r = 2 units." },
    { id: "c10m11-mcq-8", question: "The area of the largest triangle that can be inscribed in a semi-circle of radius r is:", options: ["r²", "1/2 r²", "2r²", "√2 r²"], correctAnswer: "a", explanation: "Base = 2r, Height = r. Area = 1/2 × 2r × r = r²." },
    { id: "c10m11-mcq-9", question: "If a wire is bent into the shape of a square, area enclosed is 81 cm². If bent into a circle, area enclosed is:", options: ["103 cm²", "108 cm²", "113.14 cm²", "120 cm²"], correctAnswer: "c", explanation: "Side = 9 cm ➔ Perimeter = 36 cm = 2πr ➔ r = 18/π. Area = π(18/π)² = 324/π ≈ 103.09 cm²." },
    { id: "c10m11-mcq-10", question: "The area of a sector of angle 90° of a circle of radius 4 cm is:", options: ["4π cm²", "2π cm²", "8π cm²", "16π cm²"], correctAnswer: "a", explanation: "Area = (90/360) × π(4)² = 1/4 × 16π = 4π cm²." }
  ]
};
