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
            .point-item::before { content: '•'; color: #D81B60; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 9: Perimeter and Area Overview</h2>
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
            .question { background: rgba(216, 27, 96, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #D81B60; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. The length and breadth of a rectangular piece of land are 500 m and 300 m respectively. Find <br/>(i) its area <br/>(ii) the cost of the land, if 1 m² of the land costs ₹ 10,000.</div>
            <div class="solution">
                <div class="sol-step">=> Length (l) = 500 m, Breadth (b) = 300 m</div>
                <div class="sol-step">=> Area = l &times; b = 500 &times; 300 = 1,50,000 m²</div>
                <div class="sol-step">=> Cost = 1,50,000 &times; 10,000 = ₹ 1,50,00,00,000</div>
                <div class="sol-step">Result: <span class="ans-highlight">Area: 1,50,000 m², Cost: ₹ 1.5 Billion</span></div>
            </div>

            <div class="question">2. Find the area of a square park whose perimeter is 320 m.</div>
            <div class="solution">
                <div class="sol-step">=> Perimeter = 320 m</div>
                <div class="sol-step">=> 4 &times; Side = 320 => Side = 80 m</div>
                <div class="sol-step">=> Area = Side &times; Side = 80 &times; 80 = 6400 m²</div>
                <div class="sol-step">Result: <span class="ans-highlight">6400 m²</span></div>
            </div>

            <div class="question">5. The area of a square park is the same as of a rectangular park. If the side of the square park is 60 m and the length of the rectangular park is 90 m, find the breadth of the rectangular park.</div>
            <div class="solution">
                <div class="sol-step">=> Side of square = 60 m. Area = 60 &times; 60 = 3600 m²</div>
                <div class="sol-step">=> Area of rectangle = Area of square = 3600 m²</div>
                <div class="sol-step">=> Length &times; Breadth = 3600</div>
                <div class="sol-step">=> 90 &times; Breadth = 3600</div>
                <div class="sol-step">=> Breadth = 3600 / 90 = 40 m</div>
                <div class="sol-step">Result: <span class="ans-highlight">40 m</span></div>
            </div>

            <div class="question">8. A door of length 2 m and breadth 1 m is fitted in a wall. The length of the wall is 4.5 m and the breadth is 3.6 m. Find the cost of white washing the wall, if the rate of white washing the wall is ₹ 20 per m².</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                        <rect x="20" y="20" width="160" height="110" fill="#2E2E3E" stroke="#D81B60" stroke-width="2" />
                        <rect x="90" y="80" width="20" height="50" fill="#121212" stroke="#fff" />
                        <text x="70" y="15" fill="#fff" font-size="12">Wall (4.5m x 3.6m)</text>
                        <text x="90" y="75" fill="#fff" font-size="10">Door</text>
                    </svg>
                </div>
                <div class="sol-step">=> Area of Wall = 4.5 &times; 3.6 = 16.2 m²</div>
                <div class="sol-step">=> Area of Door = 2 &times; 1 = 2 m²</div>
                <div class="sol-step">=> Area to be whitewashed = 16.2 - 2 = 14.2 m²</div>
                <div class="sol-step">=> Cost = 14.2 &times; 20 = ₹ 284</div>
                <div class="sol-step">Result: <span class="ans-highlight">₹ 284</span></div>
            </div>
        </div>
        `,
        "ex9-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(216, 27, 96, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #D81B60; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 10px 0; text-align: center; border: 1px solid rgba(216, 27, 96, 0.2); }
        </style>
        <div class="container">
            <div class="question">1. Find the area of each of the following parallelograms:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) Base = 7 cm, Height = 4 cm:</b></div>
                <div class="diagram-container">
                    <svg width="120" height="80" viewBox="0 0 120 80">
                        <path d="M 30 20 L 110 20 L 90 60 L 10 60 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                        <line x1="30" y1="20" x2="30" y2="60" stroke="#fff" stroke-dasharray="4" />
                        <text x="50" y="75" fill="#fff" font-size="10">7 cm</text>
                        <text x="15" y="45" fill="#fff" font-size="10">4 cm</text>
                    </svg>
                </div>
                <div class="sol-step">=> Area = Base &times; Height = 7 &times; 4 = 28 cm²</div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(b) Base = 5 cm, Height = 3 cm:</b></div>
                <div class="sol-step">=> Area = 5 &times; 3 = 15 cm²</div>
            </div>

            <div class="question">2. Find the area of each of the following triangles:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) Base = 4 cm, Height = 3 cm:</b></div>
                <div class="diagram-container">
                    <svg width="100" height="80" viewBox="0 0 100 80">
                        <path d="M 50 10 L 90 70 L 10 70 Z" fill="none" stroke="#D81B60" stroke-width="2" />
                        <line x1="50" y1="10" x2="50" y2="70" stroke="#fff" stroke-dasharray="4" />
                        <text x="40" y="78" fill="#fff" font-size="10">4 cm</text>
                        <text x="55" y="45" fill="#fff" font-size="10">3 cm</text>
                    </svg>
                </div>
                <div class="sol-step">=> Area = 1/2 &times; 4 &times; 3 = 6 cm²</div>
            </div>

            <div class="question">5. PQRS is a parallelogram. QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm. Find: (a) Area (b) QN, if PS = 8 cm.</div>
            <div class="solution">
                <div class="sol-step"><b>(a) Area of parallelogram PQRS:</b></div>
                <div class="sol-step">=> Base (SR) = 12 cm, Height (QM) = 7.6 cm</div>
                <div class="sol-step">=> Area = SR &times; QM = 12 &times; 7.6 = 91.2 cm²</div>
                <div class="sol-step"><b>(b) Find QN:</b></div>
                <div class="sol-step">=> Area = Base (PS) &times; Height (QN) = 91.2</div>
                <div class="sol-step">=> 8 &times; QN = 91.2 => QN = 11.4 cm</div>
                <div class="sol-step">Result: <span class="ans-highlight">(a) 91.2 cm², (b) 11.4 cm</span></div>
            </div>

            <div class="question">7. Triangle ABC is right angled at A. AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, find the area of Triangle ABC. Also find the length of AD.</div>
            <div class="solution">
                <div class="sol-step"><b>Area of Triangle ABC:</b></div>
                <div class="sol-step">=> Since angle A is 90°, AB and AC can be base and height.</div>
                <div class="sol-step">=> Area = 1/2 &times; 5 &times; 12 = 30 cm²</div>
                <div class="sol-step"><b>Length of AD:</b></div>
                <div class="sol-step">=> Area = 1/2 &times; Base (BC) &times; Height (AD) = 30</div>
                <div class="sol-step">=> 1/2 &times; 13 &times; AD = 30</div>
                <div class="sol-step">=> AD = 60 / 13 &approx; 4.6 cm</div>
                <div class="sol-step">Result: <span class="ans-highlight">Area: 30 cm², AD &approx; 4.6 cm</span></div>
            </div>
        </div>
        `,
        "ex9-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(216, 27, 96, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #D81B60; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. Find the circumference of the circles with the following radius: (Take π = 22/7) <br/>(a) 14 cm (b) 28 mm (c) 21 cm</div>
            <div class="solution">
                <div class="sol-step"><b>(a) 14 cm:</b> C = 2 &times; (22/7) &times; 14 = 2 &times; 22 &times; 2 = <span class="ans-highlight">88 cm</span></div>
                <div class="sol-step"><b>(b) 28 mm:</b> C = 2 &times; (22/7) &times; 28 = 2 &times; 22 &times; 4 = <span class="ans-highlight">176 mm</span></div>
                <div class="sol-step"><b>(c) 21 cm:</b> C = 2 &times; (22/7) &times; 21 = 2 &times; 22 &times; 3 = <span class="ans-highlight">132 cm</span></div>
            </div>

            <div class="question">2. Find the area of the following circles; given that: <br/>(a) radius = 14 mm (b) diameter = 49 m (c) radius = 5 cm</div>
            <div class="solution">
                <div class="sol-step"><b>(a) r = 14 mm:</b> Area = (22/7) &times; 14 &times; 14 = 22 &times; 2 &times; 14 = <span class="ans-highlight">616 mm²</span></div>
                <div class="sol-step"><b>(b) d = 49 m (r = 24.5 m):</b> Area = (22/7) &times; 24.5 &times; 24.5 = 22 &times; 3.5 &times; 24.5 = <span class="ans-highlight">1886.5 m²</span></div>
                <div class="sol-step"><b>(c) r = 5 cm:</b> Area = 3.14 &times; 5 &times; 5 = <span class="ans-highlight">78.5 cm²</span></div>
            </div>

            <div class="question">5. From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take π = 3.14)</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#D81B60" fill-opacity="0.2" stroke="#D81B60" stroke-width="2" />
                        <circle cx="50" cy="50" r="30" fill="#121212" stroke="#fff" stroke-dasharray="4" />
                        <text x="35" y="45" fill="#fff" font-size="8">3cm</text>
                        <text x="55" y="15" fill="#D81B60" font-size="8">4cm</text>
                    </svg>
                </div>
                <div class="sol-step">=> Outer radius (R) = 4 cm, Inner radius (r) = 3 cm</div>
                <div class="sol-step">=> Remaining Area = π(R² - r²) = 3.14 &times; (4² - 3²)</div>
                <div class="sol-step">=> 3.14 &times; (16 - 9) = 3.14 &times; 7 = 21.98 cm²</div>
                <div class="sol-step">Result: <span class="ans-highlight">21.98 cm²</span></div>
            </div>

            <div class="question">7. Find the perimeter of the adjoining figure, which is a semicircle including its diameter (d = 10 cm).</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="120" height="80" viewBox="0 0 120 80">
                        <path d="M 10 50 A 50 50 0 0 1 110 50 L 10 50" fill="none" stroke="#D81B60" stroke-width="2" />
                        <text x="45" y="70" fill="#fff" font-size="10">10 cm</text>
                    </svg>
                </div>
                <div class="sol-step">=> Perimeter = (πd / 2) + d</div>
                <div class="sol-step">=> (3.14 &times; 10 / 2) + 10</div>
                <div class="sol-step">=> 15.7 + 10 = 25.7 cm</div>
                <div class="sol-step">Result: <span class="ans-highlight">25.7 cm</span></div>
            </div>

            <div class="question">10. From a circular card sheet of radius 14 cm, two circles of radius 3.5 cm and a rectangle of length 3 cm and breadth 1 cm are removed. Find the area of the remaining sheet. (Take π = 22/7)</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#D81B60" stroke-width="2" />
                        <circle cx="35" cy="40" r="10" fill="#121212" stroke="#fff" />
                        <circle cx="65" cy="40" r="10" fill="#121212" stroke="#fff" />
                        <rect x="40" y="65" width="20" height="10" fill="#121212" stroke="#fff" />
                    </svg>
                </div>
                <div class="sol-step">=> Area of sheet = (22/7) &times; 14 &times; 14 = 616 cm²</div>
                <div class="sol-step">=> Area of 2 small circles = 2 &times; (22/7) &times; 3.5 &times; 3.5 = 77 cm²</div>
                <div class="sol-step">=> Area of rectangle = 3 &times; 1 = 3 cm²</div>
                <div class="sol-step">=> Remaining Area = 616 - (77 + 3) = 616 - 80 = 536 cm²</div>
                <div class="sol-step">Result: <span class="ans-highlight">536 cm²</span></div>
            </div>

            <div class="question">13. A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the area of this path? (Take π = 3.14)</div>
            <div class="solution">
                <div class="sol-step">=> Inner diameter = 66 m => Inner radius (r) = 33 m</div>
                <div class="sol-step">=> Path width = 4 m => Outer radius (R) = 33 + 4 = 37 m</div>
                <div class="sol-step">=> Area of path = π(R² - r²) = 3.14 &times; (37² - 33²)</div>
                <div class="sol-step">=> 3.14 &times; (1369 - 1089) = 3.14 &times; 280 = 879.2 m²</div>
                <div class="sol-step">Result: <span class="ans-highlight">879.2 m²</span></div>
            </div>

            <div class="question">16. How many times a wheel of radius 28 cm must rotate to go 352 m? (Take π = 22/7)</div>
            <div class="solution">
                <div class="sol-step">=> Circumference of wheel = 2 &times; (22/7) &times; 28 = 176 cm = 1.76 m</div>
                <div class="sol-step">=> Total Distance = 352 m</div>
                <div class="sol-step">=> Number of rotations = Total Distance / Circumference</div>
                <div class="sol-step">=> 352 / 1.76 = 200</div>
                <div class="sol-step">Result: <span class="ans-highlight">200 rotations</span></div>
            </div>
        </div>
        `,
        "ex9-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(216, 27, 96, 0.1); color: #F8BBD0; padding: 12px; border-radius: 8px; border-left: 6px solid #D81B60; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #D81B60; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(216, 27, 96, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. A garden is 90 m long and 75 m broad. A path 5 m wide is to be built outside and around it. Find the area of the path. Also find the area of the garden in hectare.</div>
            <div class="solution">
                <div class="sol-step">=> Length of garden (l) = 90 m, Breadth (b) = 75 m</div>
                <div class="sol-step">=> Area of garden = 90 &times; 75 = 6750 m²</div>
                <div class="sol-step">=> In hectares: 6750 / 10000 = <span class="ans-highlight">0.675 hectare</span></div>
                <div class="sol-step">=> Outer Length = 90 + 5 + 5 = 100 m</div>
                <div class="sol-step">=> Outer Breadth = 75 + 5 + 5 = 85 m</div>
                <div class="sol-step">=> Outer Area = 100 &times; 85 = 8500 m²</div>
                <div class="sol-step">=> Area of path = Outer Area - Garden Area = 8500 - 6750 = 1750 m²</div>
                <div class="sol-step">Result: <span class="ans-highlight">1750 m²</span></div>
            </div>

            <div class="question">6. Two cross roads, each of width 10 m, cut at right angles through the centre of a rectangular park of length 700 m and breadth 300 m and parallel to its sides. Find the area of the roads. Also find the area of the park excluding cross roads. Give the answer in hectares.</div>
            <div class="solution">
                <div class="diagram-container">
                    <svg width="200" height="100" viewBox="0 0 200 100">
                        <rect x="10" y="10" width="180" height="80" fill="none" stroke="#D81B60" stroke-width="2" />
                        <rect x="90" y="10" width="20" height="80" fill="#D81B60" fill-opacity="0.3" />
                        <rect x="10" y="40" width="180" height="20" fill="#D81B60" fill-opacity="0.3" />
                    </svg>
                </div>
                <div class="sol-step">=> Area of Road 1 = 700 &times; 10 = 7000 m²</div>
                <div class="sol-step">=> Area of Road 2 = 300 &times; 10 = 3000 m²</div>
                <div class="sol-step">=> Common Area (Center Square) = 10 &times; 10 = 100 m²</div>
                <div class="sol-step">=> Total Road Area = 7000 + 3000 - 100 = 9900 m² = <span class="ans-highlight">0.99 hectare</span></div>
                <div class="sol-step">=> Total Park Area = 700 &times; 300 = 2,10,000 m² = 21 hectares</div>
                <div class="sol-step">=> Area excluding roads = 21 - 0.99 = <span class="ans-highlight">20.01 hectares</span></div>
            </div>

            <div class="question">10. In the following figures, find the area of the shaded portions: <br/>(i) Rect ABCD (18x10), E on AB (AE=10, EB=8), F on AD (AF=6, FD=4). <br/>(ii) Square PQRS (20x20), T on PS (PT=10, TS=10), U on SR (SU=10, UR=10).</div>
            <div class="solution">
                <div class="sol-step"><b>(i) Triangle EFC:</b></div>
                <div class="sol-step">=> Area of Rect = 18 &times; 10 = 180</div>
                <div class="sol-step">=> Area AFE = 1/2 &times; 10 &times; 6 = 30</div>
                <div class="sol-step">=> Area EBC = 1/2 &times; 8 &times; 10 = 40</div>
                <div class="sol-step">=> Area FDC = 1/2 &times; 18 &times; 4 = 36</div>
                <div class="sol-step">=> Shaded Area = 180 - (30 + 40 + 36) = <span class="ans-highlight">74 cm²</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Triangle TQU:</b></div>
                <div class="sol-step">=> Area of Square = 20 &times; 20 = 400</div>
                <div class="sol-step">=> Area PTQ = 1/2 &times; 20 &times; 10 = 100</div>
                <div class="sol-step">=> Area QUR = 1/2 &times; 10 &times; 20 = 100</div>
                <div class="sol-step">=> Area TSU = 1/2 &times; 10 &times; 10 = 50</div>
                <div class="sol-step">=> Shaded Area = 400 - (100 + 100 + 50) = <span class="ans-highlight">150 cm²</span></div>
            </div>

            <div class="question">11. Find the area of the quadrilateral ABCD. AC = 22 cm, BM = 3 cm, DN = 3 cm. BM ⊥ AC, DN ⊥ AC.</div>
            <div class="solution">
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
                <div class="sol-step">=> Area of Quadrilateral = Area(ABC) + Area(ADC)</div>
                <div class="sol-step">=> (1/2 &times; AC &times; BM) + (1/2 &times; AC &times; DN)</div>
                <div class="sol-step">=> 1/2 &times; 22 &times; (3 + 3) = 11 &times; 6 = 66 cm²</div>
                <div class="sol-step">Result: <span class="ans-highlight">66 cm²</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Area of a parallelogram is:", options: ["Base × Height", "1/2 × B × H", "Side²", "Length × Breadth"], correctAnswer: "A" },
        { id: "m2", question: "Area of a triangle is:", options: ["Base × Height", "1/2 × B × H", "2 × B × H", "B + H"], correctAnswer: "B" },
        { id: "m3", question: "Circumference of a circle is:", options: ["πr²", "2πr", "πd", "Both B and C"], correctAnswer: "D" },
        { id: "m4", question: "Area of a circle is:", options: ["πr²", "2πr", "πd", "πr"], correctAnswer: "A" },
        { id: "m5", question: "1 m² is equal to:", options: ["100 cm²", "1000 cm²", "10,000 cm²", "1,000,000 cm²"], correctAnswer: "C" },
        { id: "m6", question: "Perimeter of a square with side 5 cm is:", options: ["20 cm", "25 cm", "10 cm", "15 cm"], correctAnswer: "A" },
        { id: "m7", question: "If radius is 7 cm, circumference is (π=22/7):", options: ["44 cm", "154 cm", "22 cm", "11 cm"], correctAnswer: "A" },
        { id: "m8", question: "If radius is 7 cm, area is:", options: ["44 cm²", "154 cm²", "77 cm²", "14 cm²"], correctAnswer: "B" },
        { id: "m9", question: "A triangle with base 10 and height 5 has area:", options: ["50", "25", "15", "10"], correctAnswer: "B" },
        { id: "m10", question: "The distance around a circle is called:", options: ["Area", "Diameter", "Circumference", "Volume"], correctAnswer: "C" }
    ],
    summary: []
};
