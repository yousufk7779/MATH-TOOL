import { ChapterContent } from "../types";

export const c7Math9: ChapterContent = {
    id: "c7-math-9",
    number: 9,
    title: "Perimeter and Area",
    isHtmlView: true,
    introduction: "Perimeter is the distance around a closed figure, while area is the region occupied by it. In this chapter, we learn how to calculate these for squares, rectangles, parallelograms, triangles, and circles.",
    definitions: [
        { term: "Perimeter", definition: "The total length of the boundary of a closed figure." },
        { term: "Area", definition: "The measure of the region inside a closed figure." },
        { term: "Circumference", definition: "The perimeter of a circle." }
    ],
    keyPoints: [
        "Area of a parallelogram = base × height.",
        "Area of a triangle = 1/2 × base × height.",
        "Circumference of a circle = 2πr (where r is the radius).",
        "Area of a circle = πr².",
        "1 cm² = 100 mm²; 1 m² = 10,000 cm²."
    ],
    formulas: [
        { name: "Area of Parallelogram", formula: "Base × Height" },
        { name: "Area of Triangle", formula: "1/2 × Base × Height" },
        { name: "Circumference of Circle", formula: "2πr" },
        { name: "Area of Circle", formula: "πr²" }
    ],
    crux: [],
    exercises: [
         { id: "ex9-1", name: "Exercise 9.1", questions: [] },
        { id: "ex9-2", name: "Exercise 9.2", questions: [] },
        { id: "ex9-3", name: "Exercise 9.3", questions: [] },
        { id: "ex9-4", name: "Exercise 9.4", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #D81B60; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(216, 27, 96, 0.05); border-left: 4px solid #D81B60; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #D81B60; font-weight: bold; margin-right: 12px; font-size: 1.3em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Master the formulas for calculating boundaries and regions of various geometric shapes.</p>
            <div class="point-box">
                <div class="point-item">Squares and Rectangles are just the beginning.</div>
                <div class="point-item">Circles use the constant π (22/7 or 3.14).</div>
                <div class="point-item">Triangles are exactly half of a parallelogram with the same base and height.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex9-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; background: rgba(216, 27, 96, 0.1); border-left: 6px solid #D81B60; border-bottom: 1px solid rgba(216, 27, 96, 0.2); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; background: #1E1E2E; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: justify; display: flex; align-items: flex-start; }
            .step-marker { color: #D81B60; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .ans-highlight { color: #D81B60; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. The length and breadth of a rectangular piece of land are 500 m and 300 m respectively. Find <br/>(i) its area <br/>(ii) the cost of the land, if 1 m² of the land costs ₹ 10,000.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Length (l) = 500 m, Breadth (b) = 300 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = l &times; b = 500 &times; 300 = 1,50,000 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 1,50,000 &times; 10,000 = ₹ 1,50,00,00,000</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Area: 1,50,000 m², Cost: ₹ 1.5 Billion</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Find the area of a square park whose perimeter is 320 m.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = 320 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> 4 &times; Side = 320 => Side = 80 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Side &times; Side = 80 &times; 80 = 6400 m²</div>
                    <div class="sol-step">Result: <span class="ans-highlight">6400 m²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Find the breadth of a rectangular plot of land, if its area is 440 m² and the length is 22 m. Also find its perimeter.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Area = 440 m², Length = 22 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Length &times; Breadth => 440 = 22 &times; Breadth</div>
                    <div class="sol-step"><span class="step-marker">=></span> Breadth = 440 / 22 = 20 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = 2(Length + Breadth) = 2(22 + 20) = 2 &times; 42 = 84 m</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Breadth: 20 m, Perimeter: 84 m</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. The perimeter of a rectangular sheet is 100 cm. If the length is 35 cm, find its breadth. Also find the area.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = 100 cm, Length = 35 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2(Length + Breadth) = 100 => 35 + Breadth = 50</div>
                    <div class="sol-step"><span class="step-marker">=></span> Breadth = 50 - 35 = 15 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Length &times; Breadth = 35 &times; 15 = 525 cm²</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Breadth: 15 cm, Area: 525 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. The area of a square park is the same as of a rectangular park. If the side of the square park is 60 m and the length of the rectangular park is 90 m, find the breadth of the rectangular park.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Side of square = 60 m. Area = 60 &times; 60 = 3600 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of rectangle = Area of square = 3600 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Length &times; Breadth = 3600</div>
                    <div class="sol-step"><span class="step-marker">=></span> Breadth = 3600 / 90 = 40 m</div>
                    <div class="sol-step">Result: <span class="ans-highlight">40 m</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. A wire is in the shape of a rectangle. Its length is 40 cm and breadth is 22 cm. If the same wire is rebent in the shape of a square, what will be the measure of each side. Also find which shape encloses more area?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Length = 40 cm, Breadth = 22 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter of rectangle = 2(40 + 22) = 124 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter of square = 124 cm => 4 &times; Side = 124 => Side = 31 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of rectangle = 40 &times; 22 = 880 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of square = 31 &times; 31 = 961 cm²</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Side of square: 31 cm. Square encloses more area (961 cm² > 880 cm²).</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. The perimeter of a rectangle is 130 cm. If the breadth of the rectangle is 30 cm, find its length. Also find the area of the rectangle.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = 130 cm, Breadth = 30 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2(Length + 30) = 130 => Length + 30 = 65</div>
                    <div class="sol-step"><span class="step-marker">=></span> Length = 65 - 30 = 35 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Length &times; Breadth = 35 &times; 30 = 1050 cm²</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Length: 35 cm, Area: 1050 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. A door of length 2 m and breadth 1 m is fitted in a wall. The length of the wall is 4.5 m and the breadth is 3.6 m. Find the cost of white washing the wall, if the rate of white washing the wall is ₹ 20 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <rect x="20" y="20" width="160" height="110" fill="#2E2E3E" stroke="#D81B60" stroke-width="2" />
                            <rect x="90" y="80" width="20" height="50" fill="#121212" stroke="#fff" />
                            <text x="70" y="15" fill="#fff" font-size="12">Wall (4.5m x 3.6m)</text>
                            <text x="90" y="75" fill="#fff" font-size="10">Door</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Wall = 4.5 &times; 3.6 = 16.2 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Door = 2 &times; 1 = 2 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area to be whitewashed = 16.2 - 2 = 14.2 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 14.2 &times; 20 = ₹ 284</div>
                    <div class="sol-step">Result: <span class="ans-highlight">₹ 284</span></div>
                </div>
            </div>
        </div>
        `,
        "ex9-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; background: rgba(216, 27, 96, 0.1); border-left: 6px solid #D81B60; border-bottom: 1px solid rgba(216, 27, 96, 0.2); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; background: #1E1E2E; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: justify; display: flex; align-items: flex-start; }
            .step-marker { color: #D81B60; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .ans-highlight { color: #D81B60; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 10px 0; text-align: center; border: 1px solid rgba(216, 27, 96, 0.2); }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Find the area of each of the following parallelograms:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>(a) Base = 7 cm, Height = 4 cm:</b></div>
                    <div class="diagram-container">
                        <svg width="150" height="80" viewBox="0 0 150 80">
                            <!-- (a) 7x4 - Proportional -->
                            <path d="M 20 60 L 120 60 L 140 20 L 40 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="40" y1="20" x2="40" y2="60" stroke="#fff" stroke-dasharray="4" />
                            <rect x="40" y="50" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="60" y="75" fill="#fff" font-size="10">7 cm</text>
                            <text x="25" y="45" fill="#fff" font-size="10">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Base &times; Height = 7 &times; 4 = <span class="ans-highlight">28 cm²</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(b) Base = 5 cm, Height = 3 cm:</b></div>
                    <div class="diagram-container">
                        <svg width="150" height="80" viewBox="0 0 150 80">
                            <!-- (b) 5x3 -->
                            <path d="M 30 60 L 105 60 L 125 20 L 50 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="50" y1="20" x2="50" y2="60" stroke="#fff" stroke-dasharray="4" />
                            <rect x="50" y="50" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="60" y="75" fill="#fff" font-size="10">5 cm</text>
                            <text x="35" y="45" fill="#fff" font-size="10">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = 5 &times; 3 = 15 cm²</div>

                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <!-- (c) 2.5 x 3.5 - Leaning Right as per NCERT -->
                            <path d="M 30 80 L 80 80 L 100 10 L 50 10 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="50" y1="10" x2="50" y2="80" stroke="#fff" stroke-dasharray="4" />
                            <rect x="50" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="45" y="95" fill="#fff" font-size="10">2.5 cm</text>
                            <text x="30" y="45" fill="#fff" font-size="10">3.5 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(c) Base = 2.5 cm, Height = 3.5 cm:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = 2.5 &times; 3.5 = 8.75 cm²</div>

                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <!-- (d) 5 x 4.8 - Height to slanted side -->
                            <path d="M 40 20 L 140 20 L 110 80 L 10 80 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="110" y1="80" x2="135" y2="30" stroke="#fff" stroke-dasharray="4" />
                            <text x="45" y="95" fill="#fff" font-size="10">5 cm</text>
                            <text x="125" y="65" fill="#fff" font-size="10">4.8 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(d) Base = 5 cm, Height = 4.8 cm:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = 5 &times; 4.8 = 24 cm²</div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(e) Base = 2 cm, Height = 4.4 cm:</b></div>
                    <div class="diagram-container">
                        <svg width="150" height="120" viewBox="0 0 150 120">
                            <!-- (e) 2 x 4.4 - Base as slanted side as per NCERT -->
                            <path d="M 40 90 L 120 90 L 100 20 L 20 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="100" y1="20" x2="55" y2="35" stroke="#fff" stroke-dasharray="4" />
                            <text x="15" y="60" fill="#fff" font-size="10">2 cm</text>
                            <text x="75" y="30" fill="#fff" font-size="10">4.4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = 2 &times; 4.4 = 8.8 cm²</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Find the area of each of the following triangles:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>(a) Base = 4 cm, Height = 3 cm:</b></div>
                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <!-- (a) Triangle 4x3 - Oblique -->
                            <path d="M 30 80 L 110 80 L 50 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="#fff" stroke-dasharray="4" />
                            <rect x="50" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="60" y="95" fill="#fff" font-size="10">4 cm</text>
                            <text x="55" y="55" fill="#fff" font-size="10">3 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 4 &times; 3 = 6 cm²</div>

                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <!-- (b) Triangle 5 x 3.2 - Proportional oblique -->
                            <path d="M 30 80 L 130 80 L 60 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="60" y1="20" x2="60" y2="80" stroke="#fff" stroke-dasharray="4" />
                            <rect x="60" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="70" y="95" fill="#fff" font-size="10">5 cm</text>
                            <text x="65" y="55" fill="#fff" font-size="10">3.2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(b) Base = 5 cm, Height = 3.2 cm:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 3.2 = 8 cm²</div>

                    <div class="diagram-container">
                        <svg width="120" height="100" viewBox="0 0 120 100">
                            <!-- (c) Triangle 3 x 4 - Right angle -->
                            <path d="M 30 80 L 90 80 L 30 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="30" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="50" y="95" fill="#fff" font-size="10">3 cm</text>
                            <text x="15" y="55" fill="#fff" font-size="10">4 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(c) Base = 3 cm, Height = 4 cm:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 4 = 6 cm²</div>

                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <!-- (d) Triangle 3 x 2 - Obtuse external height -->
                            <path d="M 60 80 L 120 80 L 30 40 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="30" y1="40" x2="30" y2="80" stroke="#fff" stroke-dasharray="4" />
                            <line x1="30" y1="80" x2="60" y2="80" stroke="#fff" stroke-dasharray="4" />
                            <rect x="30" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <text x="80" y="95" fill="#fff" font-size="10">3 cm</text>
                            <text x="15" y="65" fill="#fff" font-size="10">2 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>(d) Base = 3 cm, Height = 2 cm:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 3 &times; 2 = 3 cm²</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Find the missing values for Parallelograms: <br/>(a) Base=20cm, Area=246cm² <br/>(b) Height=15cm, Area=154.5cm² <br/>(c) Height=8.4cm, Area=48.72cm² <br/>(d) Base=15.6cm, Area=16.38cm²</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Formula: <b>Area = Base &times; Height</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> (a) Height = 246 / 20 = <span class="ans-highlight">12.3 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Base = 154.5 / 15 = <span class="ans-highlight">10.3 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Base = 48.72 / 8.4 = <span class="ans-highlight">5.8 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Height = 16.38 / 15.6 = <span class="ans-highlight">1.05 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Find the missing values for Triangles: <br/>(a) Base=15cm, Area=87cm² <br/>(b) Height=31.4mm, Area=1256mm² <br/>(c) Base=22cm, Area=170.5cm²</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Formula: <b>Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base &times; Height</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> (a) Height = (87 &times; 2) / 15 = <span class="ans-highlight">11.6 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Base = (1256 &times; 2) / 31.4 = <span class="ans-highlight">80 mm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Height = (170.5 &times; 2) / 22 = <span class="ans-highlight">15.5 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. PQRS is a parallelogram. QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm. Find: (a) Area (b) QN, if PS = 8 cm.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- PQRS - SR is bottom, PS is left -->
                            <path d="M 40 100 L 160 100 L 140 20 L 20 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <!-- QM perp to SR -->
                            <line x1="140" y1="20" x2="140" y2="100" stroke="#fff" stroke-dasharray="4" />
                            <!-- QN perp to PS (M at bottom, N on PS) -->
                            <line x1="140" y1="20" x2="27" y2="48" stroke="#fff" stroke-dasharray="4" />
                            <text x="30" y="115" fill="#fff" font-size="10">S</text><text x="165" y="115" fill="#fff" font-size="10">R</text>
                            <text x="145" y="15" fill="#fff" font-size="10">Q</text><text x="10" y="15" fill="#fff" font-size="10">P</text>
                            <text x="145" y="65" fill="#fff" font-size="9">QM</text><text x="75" y="30" fill="#fff" font-size="9">QN</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(a) Area of parallelogram PQRS:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Base (SR) = 12 cm, Height (QM) = 7.6 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = SR &times; QM = 12 &times; 7.6 = 91.2 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(b) Find QN:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Base (PS) &times; Height (QN) = 91.2</div>
                    <div class="sol-step"><span class="step-marker">=></span> 8 &times; QN = 91.2 => QN = 11.4 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">(a) 91.2 cm², (b) 11.4 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. DL and BM are the heights on sides AB and AD respectively of parallelogram ABCD. If the area of the parallelogram is 1470 cm², AB = 35 cm and AD = 49 cm, find the length of BM and DL.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- ABCD - AB is bottom, AD is left -->
                            <path d="M 40 100 L 160 100 L 180 20 L 60 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <!-- DL perp to AB -->
                            <line x1="60" y1="20" x2="60" y2="100" stroke="#fff" stroke-dasharray="4" />
                            <!-- BM perp to AD -->
                            <line x1="160" y1="100" x2="48" y2="68" stroke="#fff" stroke-dasharray="4" />
                            <text x="30" y="115" fill="#fff" font-size="10">A</text><text x="165" y="115" fill="#fff" font-size="10">B</text>
                            <text x="185" y="15" fill="#fff" font-size="10">C</text><text x="50" y="15" fill="#fff" font-size="10">D</text>
                            <text x="65" y="65" fill="#fff" font-size="9">DL</text><text x="100" y="80" fill="#fff" font-size="9">BM</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = 1470 cm², Base (AB) = 35 cm, Base (AD) = 49 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = AB &times; DL => 1470 = 35 &times; DL</div>
                    <div class="sol-step"><span class="step-marker">=></span> DL = 1470 / 35 = <span class="ans-highlight">42 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = AD &times; BM => 1470 = 49 &times; BM</div>
                    <div class="sol-step"><span class="step-marker">=></span> BM = 1470 / 49 = <span class="ans-highlight">30 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">DL = 42 cm, BM = 30 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. Triangle ABC is right angled at A. AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, find the area of Triangle ABC. Also find the length of AD.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- Triangle ABC right angled at A (60,80) -->
                            <path d="M 60 80 L 160 80 L 60 30 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="60" y="70" width="10" height="10" fill="none" stroke="#fff" stroke-width="0.5" />
                            <!-- Altitude AD perp to BC (y=0.5x, perp slope -2) -->
                            <line x1="60" y1="80" x2="100" y2="50" stroke="#fff" stroke-dasharray="4" />
                            <text x="50" y="90" fill="#fff" font-size="10">A</text><text x="165" y="90" fill="#fff" font-size="10">C</text>
                            <text x="50" y="25" fill="#fff" font-size="10">B</text><text x="105" y="45" fill="#fff" font-size="10">D</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>Area of Triangle ABC:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Since angle A is 90°, AB and AC can be base and height.</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 5 &times; 12 = 30 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>Length of AD:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base (BC) &times; Height (AD) = 30</div>
                    <div class="sol-step"><span class="step-marker">=></span> <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 13 &times; AD = 30</div>
                    <div class="sol-step"><span class="step-marker">=></span> AD = <div class="frac"><span class="num">60</span><span class="den">13</span></div> &approx; 4.6 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Area: 30 cm², AD &approx; 4.6 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Triangle ABC is isosceles with AB = AC = 7.5 cm and BC = 9 cm. The height AD from A to BC, is 6 cm. Find the area of Triangle ABC. What will be the height from C to AB i.e., CE?</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- A at top, BC at bottom -->
                            <path d="M 40 100 L 160 100 L 100 20 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <!-- AD perp to BC -->
                            <line x1="100" y1="20" x2="100" y2="100" stroke="#fff" stroke-dasharray="4" />
                            <!-- CE perp to AB -->
                            <line x1="160" y1="100" x2="83" y2="42" stroke="#fff" stroke-dasharray="4" />
                            <text x="95" y="15" fill="#fff" font-size="10">A</text>
                            <text x="30" y="115" fill="#fff" font-size="10">B</text><text x="165" y="115" fill="#fff" font-size="10">C</text>
                            <text x="105" y="95" fill="#fff" font-size="10">D</text><text x="70" y="45" fill="#fff" font-size="10">E</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>Area of Triangle ABC:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Base (BC) = 9 cm, Height (AD) = 6 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 9 &times; 6 = <span class="ans-highlight">27 cm²</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>Length of height CE:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; Base (AB) &times; Height (CE) = 27</div>
                    <div class="sol-step"><span class="step-marker">=></span> <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 7.5 &times; CE = 27</div>
                    <div class="sol-step"><span class="step-marker">=></span> CE = (27 &times; 2) / 7.5 = 54 / 7.5 = <span class="ans-highlight">7.2 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Area: 27 cm², CE: 7.2 cm</span></div>
                </div>
            </div>
        </div>
        `,
        "ex9-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; background: rgba(216, 27, 96, 0.1); border-left: 6px solid #D81B60; border-bottom: 1px solid rgba(216, 27, 96, 0.2); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; background: #1E1E2E; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: justify; display: flex; align-items: flex-start; }
            .step-marker { color: #D81B60; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .ans-highlight { color: #D81B60; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Find the circumference of the circles with the following radius: (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>) <br/>(a) 14 cm (b) 28 mm (c) 21 cm</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>(a) 14 cm:</b> C = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14 = 2 &times; 22 &times; 2 = <span class="ans-highlight">88 cm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(b) 28 mm:</b> C = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 28 = 2 &times; 22 &times; 4 = <span class="ans-highlight">176 mm</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(c) 21 cm:</b> C = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 21 = 2 &times; 22 &times; 3 = <span class="ans-highlight">132 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Find the area of the following circles; given that: <br/>(a) radius = 14 mm (b) diameter = 49 m (c) radius = 5 cm</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>(a) r = 14 mm:</b> Area = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14 &times; 14 = 22 &times; 2 &times; 14 = <span class="ans-highlight">616 mm²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(b) d = 49 m (r = 24.5 m):</b> Area = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 24.5 &times; 24.5 = 22 &times; 3.5 &times; 24.5 = <span class="ans-highlight">1886.5 m²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> <b>(c) r = 5 cm:</b> Area = 3.14 &times; 5 &times; 5 = <span class="ans-highlight">78.5 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. If the circumference of a circular sheet is 154 m, find its radius. Also find the area of the sheet. (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Circumference (C) = 154 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2πr = 154 => 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; r = 154</div>
                    <div class="sol-step"><span class="step-marker">=></span> r = (154 &times; 7) / 44 = 24.5 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = πr² = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 24.5 &times; 24.5 = 1886.5 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Radius: 24.5 m, Area: 1886.5 m²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. A gardener wants to fence a circular garden of diameter 21m. Find the length of the rope he needs to purchase, if he makes 2 rounds of fence. Also find the costs of the rope, if it cost ₹ 4 per meter. (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Diameter = 21 m => Radius (r) = 10.5 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Circumference = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 10.5 = 66 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Rope for 2 rounds = 66 &times; 2 = 132 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 132 &times; 4 = ₹ 528</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Rope: 132 m, Cost: ₹ 528</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="#D81B60" fill-opacity="0.2" stroke="#D81B60" stroke-width="2" />
                            <circle cx="50" cy="50" r="30" fill="#121212" stroke="#fff" stroke-dasharray="4" />
                            <text x="35" y="45" fill="#fff" font-size="8">3cm</text>
                            <text x="55" y="15" fill="#D81B60" font-size="8">4cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer radius (R) = 4 cm, Inner radius (r) = 3 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Remaining Area = π(R² - r²) = 3.14 &times; (4² - 3²)</div>
                    <div class="sol-step"><span class="step-marker">=></span> 3.14 &times; (16 - 9) = 3.14 &times; 7 = 21.98 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">21.98 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Sara wants to put a lace on the edge of a circular table cover of diameter 1.5 m. Find the length of the lace required and also find its cost if one meter of the lace costs ₹ 15. (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Diameter = 1.5 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Circumference = πd = 3.14 &times; 1.5 = 4.71 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 4.71 &times; 15 = ₹ 70.65</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Lace length: 4.71 m, Cost: ₹ 70.65</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. Find the perimeter of the adjoining figure, which is a semicircle including its diameter (d = 10 cm).</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="120" height="80" viewBox="0 0 120 80">
                            <path d="M 10 50 A 50 50 0 0 1 110 50 L 10 50" fill="none" stroke="#D81B60" stroke-width="2" />
                            <text x="45" y="70" fill="#fff" font-size="10">10 cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = (<div class="frac"><span class="num">πd</span><span class="den">2</span></div>) + d</div>
                    <div class="sol-step"><span class="step-marker">=></span> (<div class="frac"><span class="num">3.14 &times; 10</span><span class="den">2</span></div>) + 10</div>
                    <div class="sol-step"><span class="step-marker">=></span> 15.7 + 10 = 25.7 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">25.7 cm</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Find the cost of polishing a circular table-top of diameter 1.6 m, if the rate of polishing is ₹ 15/m². (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Diameter = 1.6 m => Radius (r) = 0.8 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = πr² = 3.14 &times; 0.8 &times; 0.8 = 2.0096 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 2.0096 &times; 15 = ₹ 30.144</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">₹ 30.144</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Atul took a wire of length 44 cm and bent it into the shape of a circle. Find the radius of that circle. Also find its area. If the same wire is bent into the shape of a square, what will be the length of each of its sides? Which figure encloses more area, the circle or the square? (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <b>For Circle:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Circumference = 44 cm => 2πr = 44 => r = 7 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = πr² = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 7 &times; 7 = 154 cm²</div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <b>For Square:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter = 44 cm => 4 &times; Side = 44 => Side = 11 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = Side &times; Side = 11 &times; 11 = 121 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Circle encloses more area (154 cm² > 121 cm²).</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. From a circular card sheet of radius 14 cm, two circles of radius 3.5 cm and a rectangle of length 3 cm and breadth 1 cm are removed. Find the area of the remaining sheet. (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="35" cy="40" r="10" fill="#121212" stroke="#fff" />
                            <circle cx="65" cy="40" r="10" fill="#121212" stroke="#fff" />
                            <rect x="40" y="65" width="20" height="10" fill="#121212" stroke="#fff" />
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of sheet = (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 14 &times; 14 = 616 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of 2 small circles = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 3.5 &times; 3.5 = 77 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of rectangle = 3 &times; 1 = 3 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Remaining Area = 616 - (77 + 3) = 616 - 80 = 536 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">536 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">11. A circle of radius 2 cm is cut out from a square piece of an aluminium sheet of side 6 cm. What is the area of the left over aluminium sheet? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Side of square = 6 cm. Area = 6 &times; 6 = 36 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Radius of circle = 2 cm. Area = 3.14 &times; 2 &times; 2 = 12.56 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Left over area = 36 - 12.56 = 23.44 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">23.44 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">12. The circumference of a circle is 31.4 cm. Find the radius and the area of the circle? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Circumference = 31.4 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2πr = 31.4 => 2 &times; 3.14 &times; r = 31.4</div>
                    <div class="sol-step"><span class="step-marker">=></span> r = 5 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area = πr² = 3.14 &times; 5 &times; 5 = 78.5 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Radius: 5 cm, Area: 78.5 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">13. A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the area of this path? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Inner diameter = 66 m => Inner radius (r) = 33 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Path width = 4 m => Outer radius (R) = 33 + 4 = 37 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of path = π(R² - r²) = 3.14 &times; (37² - 33²)</div>
                    <div class="sol-step"><span class="step-marker">=></span> 3.14 &times; (1369 - 1089) = 3.14 &times; 280 = 879.2 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">879.2 m²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">14. A circular flower garden has an area of 314 m². A sprinkler at the centre of the garden can cover an area that has a radius of 12 m. Will the sprinkler water the entire garden? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Area of garden = 314 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> πr² = 314 => 3.14 &times; r² = 314 => r² = 100 => r = 10 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Sprinkler radius = 12 m. Since 12 > 10, it covers the entire garden.</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">Yes, it will water the entire garden.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">15. Find the circumference of the inner and the outer circles, shown in the adjoining figure (Outer radius = 19 m, Path width = 10 m). (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="50" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="60" cy="60" r="25" fill="none" stroke="#D81B60" stroke-dasharray="4" />
                            <line x1="60" y1="60" x2="110" y2="60" stroke="#fff" />
                            <text x="75" y="55" fill="#fff" font-size="8">19m</text>
                            <text x="65" y="75" fill="#fff" font-size="8">Inner r=9m</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer radius (R) = 19 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Circumference = 2πR = 2 &times; 3.14 &times; 19 = <span class="ans-highlight">119.32 m</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> Inner radius (r) = 19 - 10 = 9 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Circumference = 2πr = 2 &times; 3.14 &times; 9 = <span class="ans-highlight">56.52 m</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">16. How many times a wheel of radius 28 cm must rotate to go 352 m? (Take π = <div class="frac"><span class="num">22</span><span class="den">7</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Circumference of wheel = 2 &times; (<div class="frac"><span class="num">22</span><span class="den">7</span></div>) &times; 28 = 176 cm = 1.76 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Total Distance = 352 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Number of rotations = Total Distance / Circumference</div>
                    <div class="sol-step"><span class="step-marker">=></span> 352 / 1.76 = 200</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">200 rotations</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">17. The minute hand of a circular clock is 15 cm long. How far does the tip of the minute hand move in 1 hour? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Length of minute hand (radius) = 15 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Distance in 1 hour = Circumference of circle</div>
                    <div class="sol-step"><span class="step-marker">=></span> Distance = 2πr = 2 &times; 3.14 &times; 15 = 94.2 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">94.2 cm</span></div>
                </div>
            </div>
        </div>
        `,
        "ex9-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #D81B60; font-weight: bold; background: rgba(216, 27, 96, 0.1); border-left: 6px solid #D81B60; border-bottom: 1px solid rgba(216, 27, 96, 0.2); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; background: #1E1E2E; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: justify; display: flex; align-items: flex-start; }
            .step-marker { color: #D81B60; font-weight: bold; margin-right: 10px; flex-shrink: 0; }
            .ans-highlight { color: #D81B60; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. A garden is 90 m long and 75 m broad. A path 5 m wide is to be built outside and around it. Find the area of the path. Also find the area of the garden in hectare.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <rect x="30" y="30" width="140" height="60" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="20" y="20" width="160" height="80" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="4" />
                            <text x="70" y="65" fill="#fff" font-size="10">Garden (90x75)</text>
                            <text x="10" y="15" fill="#D81B60" font-size="9">Path 5m</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Length of garden (l) = 90 m, Breadth (b) = 75 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of garden = 90 &times; 75 = 6750 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> In hectares: <div class="frac"><span class="num">6750</span><span class="den">10000</span></div> = <span class="ans-highlight">0.675 hectare</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Length = 90 + 5 + 5 = 100 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Breadth = 75 + 5 + 5 = 85 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Area = 100 &times; 85 = 8500 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of path = Outer Area - Garden Area = 8500 - 6750 = 1750 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">1750 m²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. A 3 m wide path runs outside and around a rectangular park of length 125 m and breadth 65 m. Find the area of the path.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <rect x="40" y="35" width="120" height="50" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="34" y="29" width="132" height="62" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="2" />
                            <text x="65" y="65" fill="#fff" font-size="10">Park (125x65)</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Length = 125 m, Inner Breadth = 65 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Area = 125 &times; 65 = 8125 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Length = 125 + 6 = 131 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Breadth = 65 + 6 = 71 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Area = 131 &times; 71 = 9301 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Path Area = 9301 - 8125 = 1176 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">1176 m²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. A picture is painted on a cardboard 8 cm long and 5 cm wide such that there is a margin of 1.5 cm along each of its sides. Find the total area of the margin.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="150" height="100" viewBox="0 0 150 100">
                            <rect x="25" y="20" width="100" height="60" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <rect x="40" y="35" width="70" height="30" fill="#121212" stroke="#fff" />
                            <text x="50" y="55" fill="#fff" font-size="10">Picture</text>
                            <text x="45" y="15" fill="#D81B60" font-size="9">Cardboard (8x5)</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Cardboard Area = 8 &times; 5 = 40 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Length = 8 - 3 = 5 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Breadth = 5 - 3 = 2 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Area = 5 &times; 2 = 10 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Margin Area = 40 - 10 = 30 cm²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result: <span class="ans-highlight">30 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. A verandah of width 2.25 m is constructed all along outside a room which is 5.5 m long and 4 m wide. Find: <br/>(i) the area of the verandah. <br/>(ii) the cost of cementing the floor of the verandah at the rate of ₹ 200 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <rect x="50" y="40" width="100" height="40" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="30" y="20" width="140" height="80" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-dasharray="4" />
                            <text x="75" y="65" fill="#fff" font-size="10">Room</text>
                            <text x="70" y="15" fill="#D81B60" font-size="9">Verandah 2.25m</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Room Area = 5.5 &times; 4 = 22 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Length = 5.5 + 4.5 = 10 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Breadth = 4 + 4.5 = 8.5 m</div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Area = 10 &times; 8.5 = 85 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Verandah Area = 85 - 22 = 63 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 63 &times; 200 = ₹ 12600</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Area: 63 m², Cost: ₹ 12600</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. A path 1 m wide is built along the border and inside a square garden of side 30 m. Find: <br/>(i) the area of the path <br/>(ii) the cost of planting grass in the remaining portion of the garden at the rate of ₹ 40 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <rect x="10" y="10" width="100" height="100" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <rect x="20" y="20" width="80" height="80" fill="#121212" stroke="#fff" stroke-dasharray="4" />
                            <text x="35" y="65" fill="#fff" font-size="10">Garden</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Outer Side = 30 m. Area = 900 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Inner Side = 30 - 2 = 28 m. Area = 28 &times; 28 = 784 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Path Area = 900 - 784 = 116 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost of grass = 784 &times; 40 = ₹ 31360</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Path: 116 m², Cost: ₹ 31360</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Two cross roads, each of width 10 m, cut at right angles through the centre of a rectangular park of length 700 m and breadth 300 m and parallel to its sides. Find the area of the roads. Also find the area of the park excluding cross roads. Give the answer in hectares.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="100" viewBox="0 0 200 100">
                            <rect x="10" y="10" width="180" height="80" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="90" y="10" width="20" height="80" fill="#D81B60" fill-opacity="0.3" />
                            <rect x="10" y="40" width="180" height="20" fill="#D81B60" fill-opacity="0.3" />
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Road 1 = 700 &times; 10 = 7000 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Road 2 = 300 &times; 10 = 3000 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Common Area (Center Square) = 10 &times; 10 = 100 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Total Road Area = 7000 + 3000 - 100 = 9900 m² = <span class="ans-highlight">0.99 hectare</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> Total Park Area = 700 &times; 300 = 2,10,000 m² = 21 hectares</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area excluding roads = 21 - 0.99 = <span class="ans-highlight">20.01 hectares</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. Through a rectangular field of length 90 m and breadth 60 m, two roads are constructed parallel to the sides and cut each other at right angles through the centre. If the width of each road is 3 m, find: <br/>(i) the area covered by the roads. <br/>(ii) the cost of constructing the roads at the rate of ₹ 110 per m².</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <rect x="20" y="20" width="160" height="80" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="97" y="20" width="6" height="80" fill="#D81B60" fill-opacity="0.3" />
                            <rect x="20" y="57" width="160" height="6" fill="#D81B60" fill-opacity="0.3" />
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Road 1 = 90 &times; 3 = 270 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Road 2 = 60 &times; 3 = 180 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Common Area = 3 &times; 3 = 9 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Total Road Area = 270 + 180 - 9 = 441 m²</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cost = 441 &times; 110 = ₹ 48510</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Area: 441 m², Cost: ₹ 48510</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Pragya wrapped a cord around a circular pipe of radius 4 cm and cut off the length required. Then she wrapped it around a square box of side 4 cm. Did she have any cord left? (Take π = 3.14)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="100" viewBox="0 0 200 100">
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#D81B60" stroke-width="2" />
                            <rect x="120" y="20" width="60" height="60" fill="none" stroke="#D81B60" stroke-width="2" />
                            <text x="35" y="95" fill="#fff" font-size="9">r=4cm</text>
                            <text x="130" y="95" fill="#fff" font-size="9">side=4cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Length of cord = Circumference of pipe = 2 &times; 3.14 &times; 4 = 25.12 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Perimeter of square box = 4 &times; 4 = 16 cm</div>
                    <div class="sol-step"><span class="step-marker">=></span> Cord left = 25.12 - 16 = 9.12 cm</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Yes, 9.12 cm of cord is left.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. The adjoining figure represents a rectangular lawn with a circular flower bed in the middle. Find: <br/>(i) the area of the whole land (ii) the area of the flower bed (iii) the area of the lawn excluding the flower bed (iv) the circumference of the flower bed. (Radius = 2m, Land = 10m x 5m)</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="180" height="100" viewBox="0 0 180 100">
                            <rect x="20" y="20" width="140" height="60" fill="none" stroke="#D81B60" stroke-width="2" />
                            <circle cx="90" cy="50" r="20" fill="#D81B60" fill-opacity="0.3" stroke="#fff" />
                            <text x="65" y="15" fill="#fff" font-size="10">10m x 5m</text>
                            <text x="85" y="53" fill="#fff" font-size="8">r=2m</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) Whole Land Area = 10 &times; 5 = <span class="ans-highlight">50 m²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) Flower Bed Area = 3.14 &times; 2 &times; 2 = <span class="ans-highlight">12.56 m²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) Lawn excluding bed = 50 - 12.56 = <span class="ans-highlight">37.44 m²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) Circumference = 2 &times; 3.14 &times; 2 = <span class="ans-highlight">12.56 m</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. In the following figures, find the area of the shaded portions: <br/>(i) Rect ABCD (18x10), E on AB (AE=10, EB=8), F on AD (AF=6, FD=4). <br/>(ii) Square PQRS (20x20), T on PS (PT=10, TS=10), U on SR (SU=10, UR=10).</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- (i) Rectangle with shaded portion -->
                            <rect x="10" y="10" width="180" height="100" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <!-- Unshaded triangles -->
                            <path d="M 110 10 L 10 10 L 10 70 Z" fill="#121212" stroke="#fff" /> <!-- AFE -->
                            <path d="M 110 10 L 190 10 L 190 110 Z" fill="#121212" stroke="#fff" /> <!-- EBC -->
                            <path d="M 10 70 L 10 110 L 190 110 Z" fill="#121212" stroke="#fff" /> <!-- FDC -->
                            <text x="100" y="65" fill="#fff" font-size="10">Shaded (i)</text>
                        </svg>
                    </div>
                    <div class="sol-step"><b>(i) Shaded Area:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Rect = 18 &times; 10 = 180</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area AFE = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 6 = 30</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area EBC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 8 &times; 10 = 40</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area FDC = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 18 &times; 4 = 36</div>
                    <div class="sol-step"><span class="step-marker">=></span> Shaded Area = 180 - (30 + 40 + 36) = <span class="ans-highlight">74 cm²</span></div>
                    
                    <div class="diagram-container">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <!-- (ii) Square with shaded portion -->
                            <rect x="10" y="10" width="100" height="100" fill="#D81B60" fill-opacity="0.1" stroke="#D81B60" stroke-width="2" />
                            <!-- Unshaded triangles -->
                            <path d="M 10 10 L 110 10 L 10 60 Z" fill="#121212" stroke="#fff" /> <!-- PTQ -->
                            <path d="M 110 10 L 110 110 L 60 110 Z" fill="#121212" stroke="#fff" /> <!-- QUR -->
                            <path d="M 10 60 L 10 110 L 60 110 Z" fill="#121212" stroke="#fff" /> <!-- TSU -->
                            <text x="45" y="75" fill="#fff" font-size="10">Shaded (ii)</text>
                        </svg>
                    </div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Shaded Area:</b></div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Square = 20 &times; 20 = 400</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area PTQ = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 20 &times; 10 = 100</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area QUR = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 20 = 100</div>
                    <div class="sol-step"><span class="step-marker">=></span> Area TSU = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 10 &times; 10 = 50</div>
                    <div class="sol-step"><span class="step-marker">=></span> Shaded Area = 400 - (100 + 100 + 50) = <span class="ans-highlight">150 cm²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">11. Find the area of the quadrilateral ABCD. AC = 22 cm, BM = 3 cm, DN = 3 cm. BM ⊥ AC, DN ⊥ AC.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <path d="M 20 75 L 100 20 L 180 75 L 100 130 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                            <line x1="20" y1="75" x2="180" y2="75" stroke="#fff" />
                            <line x1="100" y1="20" x2="100" y2="75" stroke="#fff" stroke-dasharray="4" />
                            <line x1="100" y1="75" x2="100" y2="130" stroke="#fff" stroke-dasharray="4" />
                            <text x="90" y="70" fill="#fff" font-size="10">AC=22</text>
                            <text x="105" y="45" fill="#fff" font-size="10">3cm</text>
                            <text x="105" y="105" fill="#fff" font-size="10">3cm</text>
                        </svg>
                    </div>
                    <div class="sol-step"><span class="step-marker">=></span> Area of Quadrilateral = Area(ABC) + Area(ADC)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AC &times; BM) + (<div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; AC &times; DN)</div>
                    <div class="sol-step"><span class="step-marker">=></span> <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 22 &times; (3 + 3) = 11 &times; 6 = 66 cm²</div>
                    <div class="sol-step">Result: <span class="ans-highlight">66 cm²</span></div>
                </div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "<span style='color: #D81B60'>Area of a parallelogram is:</span>", options: ["Base × Height", "1/2 × B × H", "Side²", "Length × Breadth"], correctAnswer: "A" },
        { id: "m2", question: "<span style='color: #D81B60'>Area of a triangle is:</span>", options: ["Base × Height", "1/2 × B × H", "2 × B × H", "B + H"], correctAnswer: "B" },
        { id: "m3", question: "<span style='color: #D81B60'>Circumference of a circle is:</span>", options: ["πr²", "2πr", "πd", "Both B and C"], correctAnswer: "D" },
        { id: "m4", question: "<span style='color: #D81B60'>Area of a circle is:</span>", options: ["πr²", "2πr", "πd", "πr"], correctAnswer: "A" },
        { id: "m5", question: "<span style='color: #D81B60'>1 m² is equal to:</span>", options: ["100 cm²", "1000 cm²", "10,000 cm²", "1,000,000 cm²"], correctAnswer: "C" },
        { id: "m6", question: "<span style='color: #D81B60'>Perimeter of a square with side 5 cm is:</span>", options: ["20 cm", "25 cm", "10 cm", "15 cm"], correctAnswer: "A" },
        { id: "m7", question: "<span style='color: #D81B60'>If radius is 7 cm, circumference is (π=22/7):</span>", options: ["44 cm", "154 cm", "22 cm", "11 cm"], correctAnswer: "A" },
        { id: "m8", question: "<span style='color: #D81B60'>If radius is 7 cm, area is:</span>", options: ["44 cm²", "154 cm²", "77 cm²", "14 cm²"], correctAnswer: "B" },
        { id: "m9", question: "<span style='color: #D81B60'>A triangle with base 10 and height 5 has area:</span>", options: ["50", "25", "15", "10"], correctAnswer: "B" },
        { id: "m10", question: "<span style='color: #D81B60'>The distance around a circle is called:</span>", options: ["Area", "Diameter", "Circumference", "Volume"], correctAnswer: "C" }
    ],
    summary: []
};
