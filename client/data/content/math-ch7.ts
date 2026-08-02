import { ChapterContent } from "../types";

export const mathCh7: ChapterContent = {
  id: "ch7",
  number: 7,
  title: "Coordinate Geometry",
  isHtmlView: true,
  introduction:
    "Coordinate Geometry connects algebra with geometry using a Cartesian plane. We study the Distance Formula to find distance between two points and the Section Formula to find coordinates of a point dividing a line segment in a given ratio.",
  definitions: [
    { term: "Cartesian Plane", description: "A 2D plane defined by a horizontal X-axis and a vertical Y-axis intersecting at the Origin (0,0)." },
    { term: "Distance Formula", description: "Distance between P(x₁, y₁) and Q(x₂, y₂) is √[(x₂ - x₁)² + (y₂ - y₁)²]." },
    { term: "Section Formula", description: "Point P dividing line segment joining A(x₁, y₁) and B(x₂, y₂) in ratio m₁ : m₂ has coordinates ((m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂))." }
  ],
  keyPoints: [
    "Distance of a point P(x, y) from the origin (0, 0) is √(x² + y²).",
    "Mid-point of a line segment joining A(x₁, y₁) and B(x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2).",
    "Three points A, B, C are collinear if AB + BC = AC or area of triangle formed by them is 0."
  ],
  formulas: [
    { name: "Distance Formula", formula: "d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" },
    { name: "Section Formula", formula: "P(x, y) = \left( \frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \right)" },
    { name: "Mid-point Formula", formula: "M(x, y) = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)" }
  ],
  crux: [],
  exercises: [
    { id: "ex7-1", name: "Exercise 7.1", questions: [] },
    { id: "ex7-2", name: "Exercise 7.2", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #00BCD4; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(0, 188, 212, 0.05); border-left: 4px solid #00BCD4; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #00BCD4; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Coordinate Geometry</div>
            <p class="content-text">Calculate distances between points, determine collinearity, and find section division points on a 2D Cartesian plane using Distance and Section formulas.</p>
            <div class="point-box">
                <div class="point-item">Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]</div>
                <div class="point-item">Section Formula: P = ((m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂))</div>
                <div class="point-item">Mid-point Formula: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex7-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00BCD4; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00BCD4; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #00BCD4; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the distance between the following pairs of points:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#00BCD4;">(i) (2, 3), (4, 1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">x₁ = 2, y₁ = 3 &nbsp;;&nbsp; x₂ = 4, y₂ = 1</div>
                    <div class="sol-step">d = &radic;[(4 - 2)&sup2; + (1 - 3)&sup2;]</div>
                    <div class="sol-step">d = &radic;[(2)&sup2; + (-2)&sup2;] = &radic;[4 + 4] = &radic;8</div>
                    <div class="sol-step"><span class="ans-highlight">Distance = 2&radic;2 units</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00BCD4;">(ii) (-5, 7), (-1, 3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">x₁ = -5, y₁ = 7 &nbsp;;&nbsp; x₂ = -1, y₂ = 3</div>
                    <div class="sol-step">d = &radic;[(-1 - (-5))&sup2; + (3 - 7)&sup2;]</div>
                    <div class="sol-step">d = &radic;[(4)&sup2; + (-4)&sup2;] = &radic;[16 + 16] = &radic;32</div>
                    <div class="sol-step"><span class="ans-highlight">Distance = 4&radic;2 units</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#00BCD4;">(iii) (a, b), (-a, -b)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">d = &radic;[(-a - a)&sup2; + (-b - b)&sup2;]</div>
                    <div class="sol-step">d = &radic;[(-2a)&sup2; + (-2b)&sup2;] = &radic;[4a&sup2; + 4b&sup2;]</div>
                    <div class="sol-step"><span class="ans-highlight">Distance = 2&radic;(a&sup2; + b&sup2;) units</span></div>
                </div>
            </div>
        </div>
    `,
    "ex7-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #00BCD4; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #00BCD4; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #80DEEA; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #00BCD4; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #80DEEA; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the ratio 2 : 3:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">x₁ = -1, y₁ = 7 &nbsp;;&nbsp; x₂ = 4, y₂ = -3 &nbsp;;&nbsp; m₁ = 2, m₂ = 3</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">m₁x₂ + m₂x₁</span><span class="den">m₁ + m₂</span></div> = <div class="frac"><span class="num">2(4) + 3(-1)</span><span class="den">2 + 3</span></div> = <div class="frac"><span class="num">8 - 3</span><span class="den">5</span></div> = <div class="frac"><span class="num">5</span><span class="den">5</span></div> = 1</div>
                    <div class="sol-step">y = <div class="frac"><span class="num">m₁y₂ + m₂y₁</span><span class="den">m₁ + m₂</span></div> = <div class="frac"><span class="num">2(-3) + 3(7)</span><span class="den">2 + 3</span></div> = <div class="frac"><span class="num">-6 + 21</span><span class="den">5</span></div> = <div class="frac"><span class="num">15</span><span class="den">5</span></div> = 3</div>
                    <div class="sol-step"><span class="ans-highlight">Coordinates of point = (1, 3)</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m7-mcq-1", question: "The distance of point P(2, 3) from the x-axis is:", options: ["2", "3", "1", "5"], correctAnswer: "b", explanation: "Distance from x-axis is equal to the absolute value of the y-coordinate ➔ |3| = 3." },
    { id: "c10m7-mcq-2", question: "The distance between points A(0, 6) and B(0, -2) is:", options: ["6", "8", "4", "2"], correctAnswer: "b", explanation: "d = √[(0-0)² + (-2-6)²] = √(-8)² = 8." },
    { id: "c10m7-mcq-3", question: "The distance of point P(-6, 8) from the origin is:", options: ["8", "2√7", "10", "6"], correctAnswer: "c", explanation: "d = √[(-6)² + (8)²] = √(36 + 64) = √100 = 10." },
    { id: "c10m7-mcq-4", question: "If the mid-point of segment joining A(x, 0) and B(0, y) is (2, 3), then x and y are:", options: ["x = 4, y = 6", "x = 2, y = 3", "x = 6, y = 4", "x = 3, y = 2"], correctAnswer: "a", explanation: "x/2 = 2 ➔ x = 4, y/2 = 3 ➔ y = 6." },
    { id: "c10m7-mcq-5", question: "The ratio in which the y-axis divides the line segment joining (5, -6) and (-1, -4) is:", options: ["1 : 5", "5 : 1", "2 : 3", "3 : 2"], correctAnswer: "b", explanation: "On y-axis x = 0. By section formula: 0 = (-1k + 5)/(k + 1) ➔ k = 5 ➔ Ratio is 5 : 1." },
    { id: "c10m7-mcq-6", question: "The perimeter of a triangle with vertices (0, 4), (0, 0) and (3, 0) is:", options: ["5", "12", "11", "7 + √5"], correctAnswer: "b", explanation: "Side lengths = 4, 3, 5. Perimeter = 4 + 3 + 5 = 12." },
    { id: "c10m7-mcq-7", question: "If points (1, 2), (0, 0) and (a, b) are collinear, then:", options: ["a = b", "a = 2b", "2a = b", "a + b = 0"], correctAnswer: "c", explanation: "Slope = 2/1 = b/a ➔ b = 2a." },
    { id: "c10m7-mcq-8", question: "The point which lies on the perpendicular bisector of line segment joining A(-2, -5) and B(2, 5) is:", options: ["(0, 0)", " (0, 2)", "(2, 0)", "(-2, 0)"], correctAnswer: "a", explanation: "Midpoint is ((-2+2)/2, (-5+5)/2) = (0, 0)." },
    { id: "c10m7-mcq-9", question: "The coordinates of fourth vertex D of parallelogram ABCD with A(-2,3), B(6,7), C(8,3) are:", options: ["(0, -1)", "(0, 1)", "(1, 0)", "(-1, 0)"], correctAnswer: "a", explanation: "Midpoints of AC and BD coincide ➔ (-2+8)/2 = (6+x)/2 ➔ x = 0 ; (3+3)/2 = (7+y)/2 ➔ y = -1. D(0, -1)." },
    { id: "c10m7-mcq-10", question: "The distance between (a, b) and (-a, -b) is:", options: ["2√(a² + b²)", "√(a² + b²)", "2a + 2b", "a + b"], correctAnswer: "a", explanation: "d = √[(-a - a)² + (-b - b)²] = √(4a² + 4b²) = 2√(a² + b²)." }
  ]
};
