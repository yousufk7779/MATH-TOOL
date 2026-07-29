import { ChapterContent } from "../types";

export const c7Math9: ChapterContent = {
  id: "c7-math-9",
  number: 9,
  title: "Perimeter and Area",
  isHtmlView: true,
  introduction:
    "Perimeter is the total boundary length of a closed geometric shape, whereas Area measures the two-dimensional region enclosed within it. In this chapter, we learn how to calculate perimeter and area for squares, rectangles, parallelograms, triangles, circles, and combination paths.",
  definitions: [
    {
      term: "Perimeter",
      description: "The total continuous distance around the boundary of a 2D shape.",
    },
    {
      term: "Area",
      description: "The total measure of the surface or region occupied inside a closed shape.",
    },
    {
      term: "Circumference",
      description: "The boundary perimeter of a circle, calculated as 2πr or πd.",
    },
    {
      term: "Pi (π)",
      description: "The mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 22/7 or 3.14.",
    },
  ],
  keyPoints: [
    "Area of a Parallelogram = Base × Height",
    "Area of a Triangle = 1/2 × Base × Height",
    "Circumference of a Circle = 2πr = πd",
    "Area of a Circle = πr²",
    "1 m² = 10,000 cm², 1 cm² = 100 mm², 1 Hectare = 10,000 m²",
  ],
  formulas: [
    { name: "Area of Rectangle", formula: "Length × Breadth" },
    { name: "Perimeter of Rectangle", formula: "2 × (Length + Breadth)" },
    { name: "Area of Square", formula: "Side × Side" },
    { name: "Perimeter of Square", formula: "4 × Side" },
    { name: "Area of Parallelogram", formula: "Base × Height" },
    { name: "Area of Triangle", formula: "1/2 × Base × Height" },
    { name: "Circumference of Circle", formula: "2 × π × r" },
    { name: "Area of Circle", formula: "π × r²" },
  ],
  crux: [],
  exercises: [
    { id: "ex9-1", name: "Exercise 9.1", questions: [] },
    { id: "ex9-2", name: "Exercise 9.2", questions: [] },
    { id: "ex9-3", name: "Exercise 9.3", questions: [] },
    { id: "ex9-4", name: "Exercise 9.4", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #D81B60; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(216, 27, 96, 0.08); border-left: 5px solid #D81B60; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 12px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #D81B60; font-weight: bold; margin-right: 12px; font-size: 1.3em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Master perimeter and area calculations for rectangles, squares, parallelograms, triangles, circles, and shaded regions or paths.</p>
            <div class="point-box">
                <div class="point-item">Area of a parallelogram is Base &times; Height.</div>
                <div class="point-item">Area of a triangle is half the area of a corresponding parallelogram with the same base and height: <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height.</div>
                <div class="point-item">Circumference of a circle = 2&pi;r and Area of a circle = &pi;r&sup2; (where &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div> or 3.14).</div>
                <div class="point-item">To find path or margin areas, subtract inner area from outer area.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex9-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. The length and the breadth of a rectangular piece of land are 500 m and 300 m respectively. Find:<br/>(i) its area<br/>(ii) the cost of the land, if 1 m² of the land costs ₹ 10,000.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Find its area:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length (l) = 500 m, Breadth (b) = 300 m</div>
                    <div class="sol-step">Area = Length &times; Breadth</div>
                    <div class="sol-step">= 500 &times; 300</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 1,50,000 m²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) Find the cost of the land:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Cost of 1 m² land = ₹ 10,000</div>
                    <div class="sol-step">Cost of 1,50,000 m² land = 1,50,000 &times; 10,000</div>
                    <div class="sol-step"><span class="ans-highlight">Cost = ₹ 1,50,00,00,000 (₹ 150 Crore)</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of a square park whose perimeter is 320 m.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Perimeter of square park = 320 m</div>
                    <div class="sol-step">4 &times; Side = 320</div>
                    <div class="sol-step">Side = <div class="frac"><span class="num">320</span><span class="den">4</span></div> = 80 m</div>
                    <div class="sol-step">Area of square park = Side &times; Side</div>
                    <div class="sol-step">= 80 &times; 80</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 6400 m²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the breadth of a rectangular plot of land, if its area is 440 m² and the length is 22 m. Also find its perimeter.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of rectangular plot = 440 m²</div>
                    <div class="sol-step">Length = 22 m</div>
                    <div class="sol-step">Area = Length &times; Breadth</div>
                    <div class="sol-step">440 = 22 &times; Breadth</div>
                    <div class="sol-step">Breadth = <div class="frac"><span class="num">440</span><span class="den">22</span></div> = 20 m</div>
                    <div class="sol-step">Perimeter = 2 &times; (Length + Breadth)</div>
                    <div class="sol-step">= 2 &times; (22 + 20) = 2 &times; 42</div>
                    <div class="sol-step"><span class="ans-highlight">Breadth = 20 m, Perimeter = 84 m</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. The perimeter of a rectangular sheet is 100 cm. If the length is 35 cm, find its breadth. Also find the area.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Perimeter = 100 cm, Length = 35 cm</div>
                    <div class="sol-step">2 &times; (Length + Breadth) = 100</div>
                    <div class="sol-step">35 + Breadth = <div class="frac"><span class="num">100</span><span class="den">2</span></div> = 50</div>
                    <div class="sol-step">Breadth = 50 - 35 = 15 cm</div>
                    <div class="sol-step">Area = Length &times; Breadth</div>
                    <div class="sol-step">= 35 &times; 15</div>
                    <div class="sol-step"><span class="ans-highlight">Breadth = 15 cm, Area = 525 cm²</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. The area of a square park is the same as of a rectangular park. If the side of the square park is 60 m and the length of the rectangular park is 90 m, find the breadth of the rectangular park.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Side of square park = 60 m</div>
                    <div class="sol-step">Area of square park = Side &times; Side = 60 &times; 60 = 3600 m²</div>
                    <div class="sol-step">Area of rectangular park = Area of square park = 3600 m²</div>
                    <div class="sol-step">Length &times; Breadth = 3600</div>
                    <div class="sol-step">90 &times; Breadth = 3600</div>
                    <div class="sol-step">Breadth = <div class="frac"><span class="num">3600</span><span class="den">90</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Breadth of rectangular park = 40 m</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. A wire is in the shape of a rectangle. Its length is 40 cm and breadth is 22 cm. If the same wire is rebent in the shape of a square, what will be the measure of each side. Also find which shape encloses more area?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of rectangle = 40 cm, Breadth = 22 cm</div>
                    <div class="sol-step">Perimeter of rectangle = 2 &times; (Length + Breadth)</div>
                    <div class="sol-step">= 2 &times; (40 + 22) = 2 &times; 62 = 124 cm</div>
                    <div class="sol-step">Since same wire is bent into a square:</div>
                    <div class="sol-step">Perimeter of square = 124 cm</div>
                    <div class="sol-step">4 &times; Side = 124</div>
                    <div class="sol-step">Side of square = <div class="frac"><span class="num">124</span><span class="den">4</span></div> = 31 cm</div>
                    <div class="sol-step">Area of rectangle = 40 &times; 22 = 880 cm²</div>
                    <div class="sol-step">Area of square = 31 &times; 31 = 961 cm²</div>
                    <div class="sol-step">Since 961 cm² &gt; 880 cm²:</div>
                    <div class="sol-step"><span class="ans-highlight">Side of square = 31 cm. Square encloses more area.</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. The perimeter of a rectangle is 130 cm. If the breadth of the rectangle is 30 cm, find its length. Also find the area of the rectangle.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Perimeter = 130 cm, Breadth = 30 cm</div>
                    <div class="sol-step">2 &times; (Length + Breadth) = 130</div>
                    <div class="sol-step">Length + 30 = <div class="frac"><span class="num">130</span><span class="den">2</span></div> = 65</div>
                    <div class="sol-step">Length = 65 - 30 = 35 cm</div>
                    <div class="sol-step">Area of rectangle = Length &times; Breadth</div>
                    <div class="sol-step">= 35 &times; 30</div>
                    <div class="sol-step"><span class="ans-highlight">Length = 35 cm, Area = 1050 cm²</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. A door of length 2 m and breadth 1 m is fitted in a wall. The length of the wall is 4.5 m and the breadth is 3.6 m. Find the cost of white washing the wall, if the rate of white washing the wall is ₹ 20 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="20" y="20" width="200" height="120" fill="#2E2E3E" stroke="#D81B60" stroke-width="2" />
                            <rect x="110" y="80" width="30" height="60" fill="#121212" stroke="#fff" stroke-width="1.5" />
                            <text x="120" y="15" fill="#fff" font-size="12" text-anchor="middle">Wall (4.5m &times; 3.6m)</text>
                            <text x="125" y="115" fill="#fff" font-size="10" text-anchor="middle">Door (2m &times; 1m)</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of wall = 4.5 &times; 3.6 = 16.2 m²</div>
                    <div class="sol-step">Area of door = 2 &times; 1 = 2 m²</div>
                    <div class="sol-step">Area to be whitewashed = Area of wall - Area of door</div>
                    <div class="sol-step">= 16.2 - 2 = 14.2 m²</div>
                    <div class="sol-step">Cost of whitewashing 1 m² = ₹ 20</div>
                    <div class="sol-step">Total cost = 14.2 &times; 20</div>
                    <div class="sol-step"><span class="ans-highlight">Cost of whitewashing = ₹ 284</span></div>
                </div>
            </div>
        </div>
    `,
    "ex9-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the area of each of the following parallelograms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Base = 7 cm, Height = 4 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 75 L 160 75 L 185 25 L 55 25 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="55" y1="25" x2="55" y2="75" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="55" y="65" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="95" y="92" fill="#fff" font-size="12" text-anchor="middle">7 cm</text>
                            <text x="40" y="53" fill="#fff" font-size="12" text-anchor="middle">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram = Base &times; Height</div>
                    <div class="sol-step">= 7 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 28 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Base = 5 cm, Height = 3 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 75 L 140 75 L 165 25 L 65 25 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="65" y1="25" x2="65" y2="75" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="65" y="65" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="90" y="92" fill="#fff" font-size="12" text-anchor="middle">5 cm</text>
                            <text x="50" y="53" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">= 5 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 15 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Base = 2.5 cm, Height = 3.5 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 50 85 L 120 85 L 150 15 L 80 15 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="80" y1="15" x2="80" y2="85" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="80" y="75" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="85" y="102" fill="#fff" font-size="12" text-anchor="middle">2.5 cm</text>
                            <text x="60" y="53" fill="#fff" font-size="12" text-anchor="middle">3.5 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">= 2.5 &times; 3.5</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8.75 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Base = 5 cm, Height = 4.8 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 50 25 L 170 25 L 130 90 L 10 90 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="130" y1="90" x2="160" y2="35" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="60" y="105" fill="#fff" font-size="12" text-anchor="middle">5 cm</text>
                            <text x="155" y="70" fill="#fff" font-size="12" text-anchor="middle">4.8 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">= 5 &times; 4.8</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 24 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(e) Base = 2 cm, Height = 4.4 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 50 95 L 140 95 L 120 20 L 30 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="120" y1="20" x2="65" y2="38" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="20" y="60" fill="#fff" font-size="12" text-anchor="middle">2 cm</text>
                            <text x="95" y="32" fill="#fff" font-size="12" text-anchor="middle">4.4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">= 2 &times; 4.4</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8.8 cm²</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of each of the following triangles:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Base = 4 cm, Height = 3 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 85 L 160 85 L 70 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="70" y1="20" x2="70" y2="85" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="70" y="75" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="100" y="102" fill="#fff" font-size="12" text-anchor="middle">4 cm</text>
                            <text x="82" y="55" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of triangle = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 4 &times; 3</div>
                    <div class="sol-step">= 2 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 6 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Base = 5 cm, Height = 3.2 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 30 85 L 170 85 L 80 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="80" y1="20" x2="80" y2="85" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="80" y="75" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="100" y="102" fill="#fff" font-size="12" text-anchor="middle">5 cm</text>
                            <text x="95" y="55" fill="#fff" font-size="12" text-anchor="middle">3.2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 3.2</div>
                    <div class="sol-step">= 5 &times; 1.6</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 8 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Base = 3 cm, Height = 4 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 180 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 85 L 140 85 L 40 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="40" y="75" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="90" y="102" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                            <text x="25" y="55" fill="#fff" font-size="12" text-anchor="middle">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 4</div>
                    <div class="sol-step">= 3 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 6 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Base = 3 cm, Height = 2 cm</b></div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 80 85 L 160 85 L 40 35 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="40" y1="35" x2="40" y2="85" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="40" y1="85" x2="80" y2="85" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <rect x="40" y="75" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <text x="120" y="102" fill="#fff" font-size="12" text-anchor="middle">3 cm</text>
                            <text x="25" y="65" fill="#fff" font-size="12" text-anchor="middle">2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 3 cm²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the missing values for Parallelograms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Base = 20 cm, Area = 246 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">246 = 20 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">246</span><span class="den">20</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Height = 12.3 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Height = 15 cm, Area = 154.5 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">154.5 = Base &times; 15</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">154.5</span><span class="den">15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Base = 10.3 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Height = 8.4 cm, Area = 48.72 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">48.72 = Base &times; 8.4</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">48.72</span><span class="den">8.4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Base = 5.8 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Base = 15.6 cm, Area = 16.38 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = Base &times; Height</div>
                    <div class="sol-step">16.38 = 15.6 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">16.38</span><span class="den">15.6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Height = 1.05 cm</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find the missing values for Triangles:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Base = 15 cm, Area = 87 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">87 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 15 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">87 &times; 2</span><span class="den">15</span></div> = <div class="frac"><span class="num">174</span><span class="den">15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Height = 11.6 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Height = 31.4 mm, Area = 1256 mm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">1256 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; 31.4</div>
                    <div class="sol-step">Base = <div class="frac"><span class="num">1256 &times; 2</span><span class="den">31.4</span></div> = <div class="frac"><span class="num">2512</span><span class="den">31.4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Base = 80 mm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Base = 22 cm, Area = 170.5 cm²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</div>
                    <div class="sol-step">170.5 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 22 &times; Height</div>
                    <div class="sol-step">170.5 = 11 &times; Height</div>
                    <div class="sol-step">Height = <div class="frac"><span class="num">170.5</span><span class="den">11</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Height = 15.5 cm</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. PQRS is a parallelogram. QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm. Find:<br/>(a) the area of the parallelogram PQRS<br/>(b) QN, if PS = 8 cm.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 110 L 190 110 L 160 20 L 10 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="160" y1="20" x2="160" y2="110" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="160" y1="20" x2="22" y2="52" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="30" y="128" fill="#fff" font-size="12">S</text><text x="195" y="128" fill="#fff" font-size="12">R</text>
                            <text x="165" y="15" fill="#fff" font-size="12">Q</text><text x="5" y="15" fill="#fff" font-size="12">P</text>
                            <text x="165" y="70" fill="#fff" font-size="11">QM</text><text x="85" y="32" fill="#fff" font-size="11">QN</text>
                        </svg>
                    </div>
                    <div class="sol-step"><b>(a) Find area of parallelogram PQRS:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Base (SR) = 12 cm, Height (QM) = 7.6 cm</div>
                    <div class="sol-step">Area = Base &times; Height = SR &times; QM</div>
                    <div class="sol-step">= 12 &times; 7.6</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 91.2 cm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Find QN, if PS = 8 cm:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram = Base (PS) &times; Height (QN)</div>
                    <div class="sol-step">91.2 = 8 &times; QN</div>
                    <div class="sol-step">QN = <div class="frac"><span class="num">91.2</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">QN = 11.4 cm</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. DL and BM are the heights on sides AB and AD respectively of parallelogram ABCD. If the area of the parallelogram is 1470 cm², AB = 35 cm and AD = 49 cm, find the length of BM and DL.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 110 L 180 110 L 205 20 L 65 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="65" y1="20" x2="65" y2="110" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="180" y1="110" x2="52" y2="73" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="30" y="128" fill="#fff" font-size="12">A</text><text x="185" y="128" fill="#fff" font-size="12">B</text>
                            <text x="210" y="15" fill="#fff" font-size="12">C</text><text x="55" y="15" fill="#fff" font-size="12">D</text>
                            <text x="70" y="70" fill="#fff" font-size="11">DL</text><text x="110" y="85" fill="#fff" font-size="11">BM</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of parallelogram ABCD = 1470 cm²</div>
                    <div class="sol-step">Base (AB) = 35 cm, Base (AD) = 49 cm</div>
                    <div class="sol-step">Area = AB &times; DL</div>
                    <div class="sol-step">1470 = 35 &times; DL</div>
                    <div class="sol-step">DL = <div class="frac"><span class="num">1470</span><span class="den">35</span></div> = 42 cm</div>
                    <div class="sol-step">Area = AD &times; BM</div>
                    <div class="sol-step">1470 = 49 &times; BM</div>
                    <div class="sol-step">BM = <div class="frac"><span class="num">1470</span><span class="den">49</span></div> = 30 cm</div>
                    <div class="sol-step"><span class="ans-highlight">DL = 42 cm, BM = 30 cm</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Triangle ABC is right angled at A. AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, find the area of Triangle ABC. Also find the length of AD.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 130" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 60 95 L 180 95 L 60 30 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="60" y="85" width="10" height="10" fill="none" stroke="#fff" stroke-width="1" />
                            <line x1="60" y1="95" x2="105" y2="58" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="48" y="108" fill="#fff" font-size="12">A</text><text x="185" y="108" fill="#fff" font-size="12">C</text>
                            <text x="48" y="25" fill="#fff" font-size="12">B</text><text x="112" y="52" fill="#fff" font-size="12">D</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In right angled triangle ABC (at A):</div>
                    <div class="sol-step">Base (AB) = 5 cm, Height (AC) = 12 cm</div>
                    <div class="sol-step">Area of triangle ABC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AB &times; AC</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 12 = 5 &times; 6 = 30 cm²</div>
                    <div class="sol-step">Now taking BC as base (BC = 13 cm) and AD as height:</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; BC &times; AD</div>
                    <div class="sol-step">30 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 13 &times; AD</div>
                    <div class="sol-step">AD = <div class="frac"><span class="num">30 &times; 2</span><span class="den">13</span></div> = <div class="frac"><span class="num">60</span><span class="den">13</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 30 cm², AD = <div class="frac"><span class="num">60</span><span class="den">13</span></div> cm (approx 4.61 cm)</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Triangle ABC is isosceles with AB = AC = 7.5 cm and BC = 9 cm. The height AD from A to BC, is 6 cm. Find the area of Triangle ABC. What will be the height from C to AB i.e., CE?</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 40 110 L 180 110 L 110 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="110" y1="20" x2="110" y2="110" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="180" y1="110" x2="90" y2="45" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="105" y="15" fill="#fff" font-size="12">A</text>
                            <text x="30" y="125" fill="#fff" font-size="12">B</text><text x="185" y="125" fill="#fff" font-size="12">C</text>
                            <text x="112" y="105" fill="#fff" font-size="11">D</text><text x="78" y="48" fill="#fff" font-size="11">E</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Base (BC) = 9 cm, Height (AD) = 6 cm</div>
                    <div class="sol-step">Area of triangle ABC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; BC &times; AD</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 9 &times; 6 = 9 &times; 3 = 27 cm²</div>
                    <div class="sol-step">Now taking AB as base (AB = 7.5 cm) and CE as height:</div>
                    <div class="sol-step">Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AB &times; CE</div>
                    <div class="sol-step">27 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 7.5 &times; CE</div>
                    <div class="sol-step">CE = <div class="frac"><span class="num">27 &times; 2</span><span class="den">7.5</span></div> = <div class="frac"><span class="num">54</span><span class="den">7.5</span></div> = 7.2 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 27 cm², CE = 7.2 cm</span></div>
                </div>
            </div>
        </div>
    `,
    "ex9-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the circumference of the circles with the following radius: (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 14 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = 14 cm</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14</div>
                    <div class="sol-step">= 2 &times; 22 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 88 cm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) 28 mm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = 28 mm</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 28</div>
                    <div class="sol-step">= 2 &times; 22 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 176 mm</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) 21 cm</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = 21 cm</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 21</div>
                    <div class="sol-step">= 2 &times; 22 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">Circumference = 132 cm</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of the following circles; given that:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) radius = 14 mm (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = 14 mm</div>
                    <div class="sol-step">Area = &pi;r²</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14 &times; 14</div>
                    <div class="sol-step">= 22 &times; 2 &times; 14</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 616 mm²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) diameter = 49 m (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter = 49 m &rArr; Radius (r) = <div class="frac"><span class="num">49</span><span class="den">2</span></div> m</div>
                    <div class="sol-step">Area = &pi;r²</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; (<div class="frac"><span class="num">49</span><span class="den">2</span></div>) &times; (<div class="frac"><span class="num">49</span><span class="den">2</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">11 &times; 7 &times; 49</span><span class="den">2</span></div> = <div class="frac"><span class="num">3773</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Area = 1886.5 m²</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) radius = 5 cm (Take &pi; = 3.14)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius (r) = 5 cm</div>
                    <div class="sol-step">Area = &pi;r²</div>
                    <div class="sol-step">= 3.14 &times; 5 &times; 5</div>
                    <div class="sol-step">= 3.14 &times; 25</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 78.5 cm²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. If the circumference of a circular sheet is 154 m, find its radius. Also find the area of the sheet. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 154 m</div>
                    <div class="sol-step">2 &times; &pi; &times; r = 154</div>
                    <div class="sol-step">2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; r = 154</div>
                    <div class="sol-step">r = <div class="frac"><span class="num">154 &times; 7</span><span class="den">44</span></div> = <div class="frac"><span class="num">7 &times; 7</span><span class="den">2</span></div> = 24.5 m</div>
                    <div class="sol-step">Area = &pi;r²</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 24.5 &times; 24.5 = 22 &times; 3.5 &times; 24.5</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 24.5 m, Area = 1886.5 m²</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A gardener wants to fence a circular garden of diameter 21 m. Find the length of the rope he needs to purchase, if he makes 2 rounds of fence. Also find the cost of the rope, if it costs ₹ 4 per meter. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter = 21 m &rArr; Radius (r) = <div class="frac"><span class="num">21</span><span class="den">2</span></div> m</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; (<div class="frac"><span class="num">21</span><span class="den">2</span></div>) = 22 &times; 3 = 66 m</div>
                    <div class="sol-step">Length of rope for 2 rounds = 66 &times; 2 = 132 m</div>
                    <div class="sol-step">Cost of rope = 132 &times; ₹ 4</div>
                    <div class="sol-step"><span class="ans-highlight">Rope required = 132 m, Cost = ₹ 528</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 140 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="70" cy="70" r="55" fill="#D81B60" fill-opacity="0.2" stroke="#D81B60" stroke-width="2" />
                            <circle cx="70" cy="70" r="40" fill="#121212" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="70" y1="70" x2="110" y2="70" stroke="#fff" stroke-width="1.5" />
                            <line x1="70" y1="70" x2="70" y2="15" stroke="#D81B60" stroke-width="1.5" />
                            <text x="88" y="65" fill="#fff" font-size="11">3 cm</text>
                            <text x="75" y="38" fill="#D81B60" font-size="11">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Outer radius (R) = 4 cm</div>
                    <div class="sol-step">Inner radius (r) = 3 cm</div>
                    <div class="sol-step">Area of remaining sheet = Outer Area - Inner Area</div>
                    <div class="sol-step">= &pi;R² - &pi;r² = &pi;(R² - r²)</div>
                    <div class="sol-step">= 3.14 &times; (4² - 3²) = 3.14 &times; (16 - 9)</div>
                    <div class="sol-step">= 3.14 &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">Remaining Area = 21.98 cm²</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Saima wants to put a lace on the edge of a circular table cover of diameter 1.5 m. Find the length of the lace required and also find its cost if one meter of the lace costs ₹ 15. (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter = 1.5 m &rArr; Radius (r) = 0.75 m</div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; 3.14 &times; 0.75 = 4.71 m</div>
                    <div class="sol-step">Cost of 1 m lace = ₹ 15</div>
                    <div class="sol-step">Total cost of lace = 4.71 &times; 15</div>
                    <div class="sol-step"><span class="ans-highlight">Lace length = 4.71 m, Cost = ₹ 70.65</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Find the perimeter of the adjoining figure, which is a semicircle including its diameter (d = 10 cm).</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 160 100" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 15 65 A 65 65 0 0 1 145 65 L 15 65" fill="none" stroke="#D81B60" stroke-width="2" />
                            <text x="80" y="85" fill="#fff" font-size="12" text-anchor="middle">10 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter (d) = 10 cm &rArr; Radius (r) = 5 cm</div>
                    <div class="sol-step">Perimeter = Curved arc length + Diameter</div>
                    <div class="sol-step">= &pi;r + d</div>
                    <div class="sol-step">= (3.14 &times; 5) + 10</div>
                    <div class="sol-step">= 15.7 + 10</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter = 25.7 cm</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Find the cost of polishing a circular table-top of diameter 1.6 m, if the rate of polishing is ₹ 15/m². (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Diameter = 1.6 m &rArr; Radius (r) = 0.8 m</div>
                    <div class="sol-step">Area of table-top = &pi;r²</div>
                    <div class="sol-step">= 3.14 &times; 0.8 &times; 0.8 = 2.0096 m²</div>
                    <div class="sol-step">Cost of polishing 1 m² = ₹ 15</div>
                    <div class="sol-step">Total cost = 2.0096 &times; 15</div>
                    <div class="sol-step"><span class="ans-highlight">Cost of polishing = ₹ 30.144</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Shazli took a wire of length 44 cm and bent it into the shape of a circle. Find the radius of that circle. Also find its area. If the same wire is bent into the shape of a square, what will be the length of each of its sides? Which figure encloses more area, the circle or the square? (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>For Circle:</b></div>
                    <div class="sol-step">Circumference = 44 cm</div>
                    <div class="sol-step">2 &times; (&pi;) &times; r = 44</div>
                    <div class="sol-step">2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; r = 44 &rArr; r = 7 cm</div>
                    <div class="sol-step">Area of circle = &pi;r² = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 7 &times; 7 = 154 cm²</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>For Square:</b></div>
                    <div class="sol-step">Perimeter of square = 44 cm</div>
                    <div class="sol-step">4 &times; Side = 44 &rArr; Side = 11 cm</div>
                    <div class="sol-step">Area of square = 11 &times; 11 = 121 cm²</div>

                    <div class="sol-step" style="margin-top: 15px;">Comparing Areas: 154 cm² &gt; 121 cm²</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 7 cm, Circle Area = 154 cm², Square Side = 11 cm. Circle encloses more area.</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. From a circular card sheet of radius 14 cm, two circles of radius 3.5 cm and a rectangle of length 3 cm and breadth 1 cm are removed. Find the area of the remaining sheet. (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 140 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="70" cy="70" r="60" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="50" cy="55" r="12" fill="#121212" stroke="#fff" stroke-width="1.5" />
                            <circle cx="90" cy="55" r="12" fill="#121212" stroke="#fff" stroke-width="1.5" />
                            <rect x="55" y="85" width="30" height="15" fill="#121212" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of full circular sheet = &pi;R² = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14 &times; 14 = 616 cm²</div>
                    <div class="sol-step">Area of 2 small circles = 2 &times; (&pi;r²) = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 3.5 &times; 3.5 = 77 cm²</div>
                    <div class="sol-step">Area of rectangle = Length &times; Breadth = 3 &times; 1 = 3 cm²</div>
                    <div class="sol-step">Total removed area = 77 + 3 = 80 cm²</div>
                    <div class="sol-step">Remaining area = 616 - 80</div>
                    <div class="sol-step"><span class="ans-highlight">Remaining Area = 536 cm²</span></div>
                </div>
            </div>

            <!-- Question 11 -->
            <div class="sol-card">
                <div class="question-header">11. A circle of radius 2 cm is cut out from a square piece of an aluminium sheet of side 6 cm. What is the area of the left over aluminium sheet? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Side of square sheet = 6 cm</div>
                    <div class="sol-step">Area of square sheet = Side &times; Side = 6 &times; 6 = 36 cm²</div>
                    <div class="sol-step">Radius of circle = 2 cm</div>
                    <div class="sol-step">Area of circle = &pi;r² = 3.14 &times; 2 &times; 2 = 12.56 cm²</div>
                    <div class="sol-step">Left over area = Area of square - Area of circle</div>
                    <div class="sol-step">= 36 - 12.56</div>
                    <div class="sol-step"><span class="ans-highlight">Left over area = 23.44 cm²</span></div>
                </div>
            </div>

            <!-- Question 12 -->
            <div class="sol-card">
                <div class="question-header">12. The circumference of a circle is 31.4 cm. Find the radius and the area of the circle? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Circumference = 31.4 cm</div>
                    <div class="sol-step">2 &times; &pi; &times; r = 31.4</div>
                    <div class="sol-step">2 &times; 3.14 &times; r = 31.4</div>
                    <div class="sol-step">6.28 &times; r = 31.4</div>
                    <div class="sol-step">r = <div class="frac"><span class="num">31.4</span><span class="den">6.28</span></div> = 5 cm</div>
                    <div class="sol-step">Area of circle = &pi;r² = 3.14 &times; 5 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">Radius = 5 cm, Area = 78.5 cm²</span></div>
                </div>
            </div>

            <!-- Question 13 -->
            <div class="sol-card">
                <div class="question-header">13. A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the area of this path? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Inner diameter = 66 m &rArr; Inner radius (r) = 33 m</div>
                    <div class="sol-step">Width of path = 4 m</div>
                    <div class="sol-step">Outer radius (R) = 33 + 4 = 37 m</div>
                    <div class="sol-step">Area of path = Outer Area - Inner Area</div>
                    <div class="sol-step">= &pi;(R² - r²) = 3.14 &times; (37² - 33²)</div>
                    <div class="sol-step">= 3.14 &times; (1369 - 1089) = 3.14 &times; 280</div>
                    <div class="sol-step"><span class="ans-highlight">Area of path = 879.2 m²</span></div>
                </div>
            </div>

            <!-- Question 14 -->
            <div class="sol-card">
                <div class="question-header">14. A circular flower garden has an area of 314 m². A sprinkler at the centre of the garden can cover an area that has a radius of 12 m. Will the sprinkler water the entire garden? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of garden = 314 m²</div>
                    <div class="sol-step">&pi;r² = 314</div>
                    <div class="sol-step">3.14 &times; r² = 314 &rArr; r² = 100 &rArr; r = 10 m</div>
                    <div class="sol-step">Radius of garden = 10 m</div>
                    <div class="sol-step">Sprinkler coverage radius = 12 m</div>
                    <div class="sol-step">Since 12 m &gt; 10 m:</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, the sprinkler will water the entire garden.</span></div>
                </div>
            </div>

            <!-- Question 15 -->
            <div class="sol-card">
                <div class="question-header">15. Find the circumference of the inner and the outer circles, shown in the adjoining figure (Outer radius = 19 m, Path width = 10 m). (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 160 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="80" cy="80" r="65" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="80" cy="80" r="35" fill="none" stroke="#D81B60" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="80" y1="80" x2="145" y2="80" stroke="#fff" stroke-width="1.5" />
                            <text x="105" y="73" fill="#fff" font-size="11">19 m</text>
                            <text x="80" y="100" fill="#fff" font-size="11" text-anchor="middle">Inner r = 9 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>Outer Circle:</b></div>
                    <div class="sol-step">Outer radius (R) = 19 m</div>
                    <div class="sol-step">Outer Circumference = 2 &times; &pi; &times; R = 2 &times; 3.14 &times; 19 = 119.32 m</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>Inner Circle:</b></div>
                    <div class="sol-step">Inner radius (r) = 19 - 10 = 9 m</div>
                    <div class="sol-step">Inner Circumference = 2 &times; &pi; &times; r = 2 &times; 3.14 &times; 9 = 56.52 m</div>

                    <div class="sol-step"><span class="ans-highlight">Outer Circumference = 119.32 m, Inner Circumference = 56.52 m</span></div>
                </div>
            </div>

            <!-- Question 16 -->
            <div class="sol-card">
                <div class="question-header">16. How many times a wheel of radius 28 cm must rotate to go 352 m? (Take &pi; = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Radius of wheel (r) = 28 cm</div>
                    <div class="sol-step">Distance covered in 1 rotation = Circumference = 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 28 = 2 &times; 22 &times; 4 = 176 cm = 1.76 m</div>
                    <div class="sol-step">Total distance = 352 m</div>
                    <div class="sol-step">Number of rotations = <div class="frac"><span class="num">Total Distance</span><span class="den">Circumference</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">352</span><span class="den">1.76</span></div> = 200</div>
                    <div class="sol-step"><span class="ans-highlight">Number of rotations = 200</span></div>
                </div>
            </div>

            <!-- Question 17 -->
            <div class="sol-card">
                <div class="question-header">17. The minute hand of a circular clock is 15 cm long. How far does the tip of the minute hand move in 1 hour? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of minute hand (r) = 15 cm</div>
                    <div class="sol-step">In 1 hour, minute hand completes 1 full rotation.</div>
                    <div class="sol-step">Distance moved = Circumference of circle</div>
                    <div class="sol-step">= 2 &times; &pi; &times; r</div>
                    <div class="sol-step">= 2 &times; 3.14 &times; 15 = 3.14 &times; 30</div>
                    <div class="sol-step"><span class="ans-highlight">Distance moved = 94.2 cm</span></div>
                </div>
            </div>
        </div>
    `,
    "ex9-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; line-height: 1.6; text-align: justify; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .sol-body b, .subpart-title { color: #D81B60; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.4); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A garden is 90 m long and 75 m broad. A path 5 m wide is to be built outside and around it. Find the area of the path. Also find the area of the garden in hectare.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="45" y="35" width="130" height="70" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="25" y="15" width="170" height="110" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="110" y="75" fill="#fff" font-size="11" text-anchor="middle">Garden (90m &times; 75m)</text>
                            <text x="110" y="28" fill="#D81B60" font-size="10" text-anchor="middle">Outer Path 5 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>Area of Garden:</b></div>
                    <div class="sol-step">Length = 90 m, Breadth = 75 m</div>
                    <div class="sol-step">Area = 90 &times; 75 = 6750 m²</div>
                    <div class="sol-step">In hectares = <div class="frac"><span class="num">6750</span><span class="den">10000</span></div> = 0.675 hectare</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>Area of Path:</b></div>
                    <div class="sol-step">Outer Length = 90 + 5 + 5 = 100 m</div>
                    <div class="sol-step">Outer Breadth = 75 + 5 + 5 = 85 m</div>
                    <div class="sol-step">Outer Area = 100 &times; 85 = 8500 m²</div>
                    <div class="sol-step">Area of path = Outer Area - Garden Area</div>
                    <div class="sol-step">= 8500 - 6750</div>
                    <div class="sol-step"><span class="ans-highlight">Path Area = 1750 m², Garden Area = 0.675 hectare</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. A 3 m wide path runs outside and around a rectangular park of length 125 m and breadth 65 m. Find the area of the path.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="45" y="35" width="130" height="70" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="30" y="20" width="160" height="100" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="110" y="75" fill="#fff" font-size="11" text-anchor="middle">Park (125m &times; 65m)</text>
                            <text x="110" y="30" fill="#D81B60" font-size="10" text-anchor="middle">Path 3 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Inner Length = 125 m, Inner Breadth = 65 m</div>
                    <div class="sol-step">Inner Area = 125 &times; 65 = 8125 m²</div>
                    <div class="sol-step">Outer Length = 125 + 3 + 3 = 131 m</div>
                    <div class="sol-step">Outer Breadth = 65 + 3 + 3 = 71 m</div>
                    <div class="sol-step">Outer Area = 131 &times; 71 = 9301 m²</div>
                    <div class="sol-step">Area of path = Outer Area - Inner Area</div>
                    <div class="sol-step">= 9301 - 8125</div>
                    <div class="sol-step"><span class="ans-highlight">Area of path = 1176 m²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. A picture is painted on a cardboard 8 cm long and 5 cm wide such that there is a margin of 1.5 cm along each of its sides. Find the total area of the margin.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 200 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="25" y="15" width="150" height="90" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <rect x="50" y="32" width="100" height="56" fill="#121212" stroke="#fff" stroke-width="1.5" />
                            <text x="100" y="64" fill="#fff" font-size="11" text-anchor="middle">Picture</text>
                            <text x="100" y="27" fill="#D81B60" font-size="10" text-anchor="middle">Cardboard (8cm &times; 5cm)</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Outer Length of cardboard = 8 cm, Outer Breadth = 5 cm</div>
                    <div class="sol-step">Outer Area = 8 &times; 5 = 40 cm²</div>
                    <div class="sol-step">Inner Length of picture = 8 - (1.5 + 1.5) = 8 - 3 = 5 cm</div>
                    <div class="sol-step">Inner Breadth of picture = 5 - (1.5 + 1.5) = 5 - 3 = 2 cm</div>
                    <div class="sol-step">Inner Area = 5 &times; 2 = 10 cm²</div>
                    <div class="sol-step">Area of margin = Outer Area - Inner Area</div>
                    <div class="sol-step">= 40 - 10</div>
                    <div class="sol-step"><span class="ans-highlight">Area of margin = 30 cm²</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A verandah of width 2.25 m is constructed all along outside a room which is 5.5 m long and 4 m wide. Find:<br/>(i) the area of the verandah.<br/>(ii) the cost of cementing the floor of the verandah at the rate of ₹ 200 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="55" y="40" width="110" height="60" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="25" y="15" width="170" height="110" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="110" y="75" fill="#fff" font-size="11" text-anchor="middle">Room (5.5m &times; 4m)</text>
                            <text x="110" y="28" fill="#D81B60" font-size="10" text-anchor="middle">Verandah 2.25 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Inner Length = 5.5 m, Inner Breadth = 4 m</div>
                    <div class="sol-step">Area of room = 5.5 &times; 4 = 22 m²</div>
                    <div class="sol-step">Outer Length = 5.5 + 2.25 + 2.25 = 10 m</div>
                    <div class="sol-step">Outer Breadth = 4 + 2.25 + 2.25 = 8.5 m</div>
                    <div class="sol-step">Outer Area = 10 &times; 8.5 = 85 m²</div>
                    <div class="sol-step">Area of verandah = Outer Area - Room Area</div>
                    <div class="sol-step">= 85 - 22 = 63 m²</div>
                    <div class="sol-step">Cost of cementing 1 m² = ₹ 200</div>
                    <div class="sol-step">Total cost = 63 &times; 200</div>
                    <div class="sol-step"><span class="ans-highlight">Verandah Area = 63 m², Cost = ₹ 12,600</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. A path 1 m wide is built along the border and inside a square garden of side 30 m. Find:<br/>(i) the area of the path<br/>(ii) the cost of planting grass in the remaining portion of the garden at the rate of ₹ 40 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 150 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="15" y="15" width="120" height="120" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <rect x="30" y="30" width="90" height="90" fill="#121212" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="75" y="80" fill="#fff" font-size="11" text-anchor="middle">Remaining Garden</text>
                            <text x="75" y="26" fill="#D81B60" font-size="10" text-anchor="middle">1 m Path</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Outer side of square garden = 30 m</div>
                    <div class="sol-step">Outer Area = 30 &times; 30 = 900 m²</div>
                    <div class="sol-step">Inner side of garden = 30 - (1 + 1) = 28 m</div>
                    <div class="sol-step">Inner Area = 28 &times; 28 = 784 m²</div>
                    <div class="sol-step">Area of path = Outer Area - Inner Area</div>
                    <div class="sol-step">= 900 - 784 = 116 m²</div>
                    <div class="sol-step">Cost of planting grass in remaining portion = 784 &times; ₹ 40</div>
                    <div class="sol-step"><span class="ans-highlight">Path Area = 116 m², Cost of planting grass = ₹ 31,360</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Two cross roads, each of width 10 m, cut at right angles through the centre of a rectangular park of length 700 m and breadth 300 m and parallel to its sides. Find the area of the roads. Also find the area of the park excluding cross roads. Give the answer in hectares.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="15" y="15" width="210" height="90" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="110" y="15" width="20" height="90" fill="#D81B60" fill-opacity="0.4" />
                            <rect x="15" y="50" width="210" height="20" fill="#D81B60" fill-opacity="0.4" />
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of Road parallel to length = 700 &times; 10 = 7000 m²</div>
                    <div class="sol-step">Area of Road parallel to breadth = 300 &times; 10 = 3000 m²</div>
                    <div class="sol-step">Area of common center square = 10 &times; 10 = 100 m²</div>
                    <div class="sol-step">Total area of cross roads = 7000 + 3000 - 100 = 9900 m²</div>
                    <div class="sol-step">In hectares = <div class="frac"><span class="num">9900</span><span class="den">10000</span></div> = 0.99 hectare</div>
                    <div class="sol-step">Total Area of park = 700 &times; 300 = 2,10,000 m² = 21 hectares</div>
                    <div class="sol-step">Area excluding roads = 21 - 0.99 = 20.01 hectares</div>
                    <div class="sol-step"><span class="ans-highlight">Area of roads = 0.99 hectare (9900 m²), Area excluding roads = 20.01 hectares</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Through a rectangular field of length 90 m and breadth 60 m, two roads are constructed parallel to the sides and cut each other at right angles through the centre. If the width of each road is 3 m, find:<br/>(i) the area covered by the roads.<br/>(ii) the cost of constructing the roads at the rate of ₹ 110 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="20" y="20" width="200" height="100" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="112" y="20" width="16" height="100" fill="#D81B60" fill-opacity="0.4" />
                            <rect x="20" y="62" width="200" height="16" fill="#D81B60" fill-opacity="0.4" />
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of Road 1 = 90 &times; 3 = 270 m²</div>
                    <div class="sol-step">Area of Road 2 = 60 &times; 3 = 180 m²</div>
                    <div class="sol-step">Area of common center square = 3 &times; 3 = 9 m²</div>
                    <div class="sol-step">Total area covered by roads = 270 + 180 - 9 = 441 m²</div>
                    <div class="sol-step">Cost of construction = 441 &times; ₹ 110</div>
                    <div class="sol-step"><span class="ans-highlight">Road Area = 441 m², Cost of construction = ₹ 48,510</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Pragya wrapped a cord around a circular pipe of radius 4 cm and cut off the length required. Then she wrapped it around a square box of side 4 cm. Did she have any cord left? (Take &pi; = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <circle cx="65" cy="60" r="38" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="145" y="22" width="76" height="76" fill="none" stroke="#D81B60" stroke-width="2" />
                            <text x="65" y="112" fill="#fff" font-size="11" text-anchor="middle">r = 4 cm</text>
                            <text x="183" y="112" fill="#fff" font-size="11" text-anchor="middle">Side = 4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of cord wrapped around pipe = Circumference of pipe</div>
                    <div class="sol-step">= 2 &times; &pi; &times; r = 2 &times; 3.14 &times; 4 = 25.12 cm</div>
                    <div class="sol-step">Perimeter of square box = 4 &times; Side = 4 &times; 4 = 16 cm</div>
                    <div class="sol-step">Cord left = 25.12 - 16 = 9.12 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, Pragya has 9.12 cm of cord left.</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. The adjoining figure represents a rectangular lawn with a circular flower bed in the middle. Find:<br/>(i) the area of the whole land<br/>(ii) the area of the flower bed<br/>(iii) the area of the lawn excluding the flower bed<br/>(iv) the circumference of the flower bed. (Radius = 2 m, Land = 10 m &times; 5 m)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 220 120" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <rect x="25" y="20" width="170" height="80" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="110" cy="60" r="28" fill="#D81B60" fill-opacity="0.3" stroke="#fff" stroke-width="1.5" />
                            <text x="110" y="14" fill="#fff" font-size="11" text-anchor="middle">10 m &times; 5 m</text>
                            <text x="110" y="64" fill="#fff" font-size="10" text-anchor="middle">r = 2 m</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>(i) Area of whole land:</b></div>
                    <div class="sol-step">Area = 10 &times; 5 = 50 m²</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Area of flower bed:</b></div>
                    <div class="sol-step">Area = &pi;r² = 3.14 &times; 2 &times; 2 = 12.56 m²</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Area of lawn excluding flower bed:</b></div>
                    <div class="sol-step">Area = 50 - 12.56 = 37.44 m²</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Circumference of flower bed:</b></div>
                    <div class="sol-step">Circumference = 2 &times; &pi; &times; r = 2 &times; 3.14 &times; 2 = 12.56 m</div>

                    <div class="sol-step"><span class="ans-highlight">(i) 50 m², (ii) 12.56 m², (iii) 37.44 m², (iv) 12.56 m</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. In the following figures, find the area of the shaded portions:<br/>(i) Rectangle ABCD (18 cm &times; 10 cm), E on AB (AE=10 cm, EB=8 cm), F on AD (AF=6 cm, FD=4 cm).<br/>(ii) Square PQRS (20 cm &times; 20 cm), T on PS (PT=10 cm, TS=10 cm), U on SR (SU=10 cm, UR=10 cm).</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <!-- (i) Rectangle ABCD -->
                            <rect x="20" y="15" width="200" height="110" fill="#D81B60" fill-opacity="0.15" stroke="#D81B60" stroke-width="2" />
                            <path d="M 130 15 L 20 15 L 20 80 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- AFE -->
                            <path d="M 130 15 L 220 15 L 220 125 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- EBC -->
                            <path d="M 20 80 L 20 125 L 220 125 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- FDC -->
                            <text x="110" y="75" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Shaded (i)</text>
                        </svg>
                    </div>
                    <div class="sol-step"><b>(i) Shaded Area in Rectangle ABCD:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total Area of rectangle ABCD = 18 &times; 10 = 180 cm²</div>
                    <div class="sol-step">Area of &Delta;AEF = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 6 = 30 cm²</div>
                    <div class="sol-step">Area of &Delta;EBC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 8 &times; 10 = 40 cm²</div>
                    <div class="sol-step">Area of &Delta;FDC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 18 &times; 4 = 36 cm²</div>
                    <div class="sol-step">Shaded Area = Total Area - (Area AEF + Area EBC + Area FDC)</div>
                    <div class="sol-step">= 180 - (30 + 40 + 36) = 180 - 106 = 74 cm²</div>

                    <div class="diagram-container" style="margin-top: 25px;">
                        <svg viewBox="0 0 160 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <!-- (ii) Square PQRS -->
                            <rect x="15" y="15" width="130" height="130" fill="#D81B60" fill-opacity="0.15" stroke="#D81B60" stroke-width="2" />
                            <path d="M 15 15 L 145 15 L 15 80 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- PTQ -->
                            <path d="M 145 15 L 145 145 L 80 145 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- QUR -->
                            <path d="M 15 80 L 15 145 L 80 145 Z" fill="#121212" stroke="#fff" stroke-width="1.5" /> <!-- TSU -->
                            <text x="65" y="95" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Shaded (ii)</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Shaded Area in Square PQRS:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total Area of square PQRS = 20 &times; 20 = 400 cm²</div>
                    <div class="sol-step">Area of &Delta;PTQ = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 20 &times; 10 = 100 cm²</div>
                    <div class="sol-step">Area of &Delta;QUR = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 20 = 100 cm²</div>
                    <div class="sol-step">Area of &Delta;TSU = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 10 = 50 cm²</div>
                    <div class="sol-step">Shaded Area = Total Area - (Area PTQ + Area QUR + Area TSU)</div>
                    <div class="sol-step">= 400 - (100 + 100 + 50) = 400 - 250 = 150 cm²</div>

                    <div class="sol-step"><span class="ans-highlight">(i) Shaded Area = 74 cm², (ii) Shaded Area = 150 cm²</span></div>
                </div>
            </div>

            <!-- Question 11 -->
            <div class="sol-card">
                <div class="question-header">11. Find the area of the quadrilateral ABCD. AC = 22 cm, BM = 3 cm, DN = 3 cm. BM &perp; AC, DN &perp; AC.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 240 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <path d="M 25 80 L 120 20 L 215 80 L 120 140 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="25" y1="80" x2="215" y2="80" stroke="#fff" stroke-width="1.5" />
                            <line x1="120" y1="20" x2="120" y2="80" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <line x1="120" y1="80" x2="120" y2="140" stroke="#fff" stroke-dasharray="4" stroke-width="1.5" />
                            <text x="15" y="85" fill="#fff" font-size="12">A</text><text x="220" y="85" fill="#fff" font-size="12">C</text>
                            <text x="120" y="15" fill="#fff" font-size="12" text-anchor="middle">B</text><text x="120" y="155" fill="#fff" font-size="12" text-anchor="middle">D</text>
                            <text x="130" y="55" fill="#fff" font-size="11">BM = 3 cm</text>
                            <text x="130" y="115" fill="#fff" font-size="11">DN = 3 cm</text>
                            <text x="70" y="73" fill="#fff" font-size="11">AC = 22 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Area of Quadrilateral ABCD = Area(&Delta;ABC) + Area(&Delta;ADC)</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AC &times; BM) + (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AC &times; DN)</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 22 &times; 3) + (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 22 &times; 3)</div>
                    <div class="sol-step">= 33 + 33</div>
                    <div class="sol-step"><span class="ans-highlight">Area of Quadrilateral ABCD = 66 cm²</span></div>
                </div>
            </div>
        </div>
    `,
  },
  examples: [],
  mcqs: [
    {
      id: "c7g9-mcq-1",
      question: "What is the formula for the area of a parallelogram?",
      options: ["Base × Height", "1/2 × Base × Height", "Side × Side", "2 × (Base + Height)"],
      correctAnswer: "a",
      explanation: "Area of a parallelogram is calculated by multiplying its base by its perpendicular height."
    },
    {
      id: "c7g9-mcq-2",
      question: "What is the formula for the area of a triangle?",
      options: ["Base × Height", "1/2 × Base × Height", "2 × Base × Height", "Base + Height"],
      correctAnswer: "b",
      explanation: "Area of a triangle is half of the product of its base and perpendicular height."
    },
    {
      id: "c7g9-mcq-3",
      question: "The circumference of a circle with radius r is given by:",
      options: ["πr²", "2πr", "πd/2", "2πr²"],
      correctAnswer: "b",
      explanation: "Circumference of a circle equals 2 × π × r (or π × d)."
    },
    {
      id: "c7g9-mcq-4",
      question: "What is the area of a circle with radius 7 cm? (Take π = 22/7)",
      options: ["44 cm²", "154 cm²", "77 cm²", "88 cm²"],
      correctAnswer: "b",
      explanation: "Area = πr² = (22/7) × 7 × 7 = 154 cm²."
    },
    {
      id: "c7g9-mcq-5",
      question: "How many square centimeters are in 1 square meter?",
      options: ["100 cm²", "1000 cm²", "10,000 cm²", "1,00,000 cm²"],
      correctAnswer: "c",
      explanation: "Since 1 m = 100 cm, 1 m² = 100 cm × 100 cm = 10,000 cm²."
    },
    {
      id: "c7g9-mcq-6",
      question: "What is the perimeter of a square park whose side is 80 m?",
      options: ["320 m", "6400 m", "160 m", "240 m"],
      correctAnswer: "a",
      explanation: "Perimeter of square = 4 × Side = 4 × 80 = 320 m."
    },
    {
      id: "c7g9-mcq-7",
      question: "If the circumference of a circle is 154 m, what is its radius? (Take π = 22/7)",
      options: ["14 m", "24.5 m", "49 m", "35 m"],
      correctAnswer: "b",
      explanation: "2πr = 154 ⇒ r = (154 × 7) / (2 × 22) = 24.5 m."
    },
    {
      id: "c7g9-mcq-8",
      question: "What is the area of a right-angled triangle with sides 5 cm, 12 cm, and hypotenuse 13 cm?",
      options: ["30 cm²", "60 cm²", "65 cm²", "15.5 cm²"],
      correctAnswer: "a",
      explanation: "Area = 1/2 × base × height = 1/2 × 5 × 12 = 30 cm²."
    },
    {
      id: "c7g9-mcq-9",
      question: "1 Hectare is equal to:",
      options: ["1,000 m²", "10,000 m²", "100 m²", "1,00,000 m²"],
      correctAnswer: "b",
      explanation: "1 Hectare is defined as the area of a square with side 100 m, which equals 10,000 m²."
    },
    {
      id: "c7g9-mcq-10",
      question: "The distance around a circular region is known as its:",
      options: ["Area", "Diameter", "Circumference", "Radius"],
      correctAnswer: "c",
      explanation: "The perimeter or boundary length of a circle is called its circumference."
    }
  ],
  summary: [],
};
