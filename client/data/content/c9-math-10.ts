import { ChapterContent } from "../types";

export const c9Math10: ChapterContent = {
    id: "c9-math-10",
    number: 10,
    title: "Surface Areas and Volumes",
    introduction: "In this chapter, we explore the measurement of surface areas and volumes of various three-dimensional shapes like cuboids, cubes, cylinders, cones, and spheres. These calculations are vital for understanding space and materials in the world around us.",
    definitions: [
        { term: "Surface Area", definition: "The total area that the surface of a three-dimensional object occupies." },
        { term: "Volume", definition: "The amount of space occupied by a three-dimensional object, often measured in cubic units." },
        { term: "Lateral Surface Area", definition: "The area of all the sides of an object, excluding its top and base." }
    ],
    keyPoints: [
        "Capacity is the volume of a substance that a container can hold.",
        "1 m³ = 1000 litres; 1 litre = 1000 cm³.",
        "The curved surface area of a cylinder excludes its two circular ends.",
        "The total surface area includes all faces of the object."
    ],
    formulas: [
        { name: "Cuboid TSA", formula: "2(lb + bh + hl)" },
        { name: "Cube TSA", formula: "6a²" },
        { name: "Cylinder CSA", formula: "2πrh" },
        { name: "Cone CSA", formula: "πrl" },
        { name: "Sphere Surface Area", formula: "4πr²" },
        { name: "Volume of Cylinder", formula: "πr²h" },
        { name: "Volume of Sphere", formula: "(4/3)πr³" }
    ],
    crux: [
        "Check that all dimensions are in the same units before calculating.",
        "For 'open top' boxes, subtract the top area (l × b) from the total surface area.",
        "Remember that the volume of a cone is 1/3 that of a cylinder with the same base and height."
    ],
    exercises: [
        { id: "ex10.1", name: "Exercise 10.1", questions: [] },
        { id: "ex10.2", name: "Exercise 10.2", questions: [] },
        { id: "ex10.3", name: "Exercise 10.3", questions: [] },
        { id: "ex10.4", name: "Exercise 10.4", questions: [] },
        { id: "ex10.5", name: "Exercise 10.5", questions: [] },
        { id: "ex10.6", name: "Exercise 10.6", questions: [] },
        { id: "ex10.7", name: "Exercise 10.7", questions: [] },
        { id: "ex10.8", name: "Exercise 10.8", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
        {
            id: "m1",
            question: "The lateral surface area of a cube is 256 cm². The volume of the cube is:",
            options: ["64 cm³", "216 cm³", "256 cm³", "512 cm³"],
            correctAnswer: "D"
        },
        {
            id: "m2",
            question: "If the radius of a cylinder is doubled and the height is halved, its curved surface area will:",
            options: ["Be halved", "Be doubled", "Remain same", "Be four times"],
            correctAnswer: "C"
        },
        {
            id: "m3",
            question: "The total surface area of a cone whose radius is r/2 and slant height 2l is:",
            options: ["2πr(l + r)", "πr(l + r/4)", "πr(l + r)", "πr(l + r/2)"],
            correctAnswer: "B"
        },
        {
            id: "m4",
            question: "A hemispherical bowl is made of steel 0.25 cm thick. The inner radius is 5 cm. The outer curved surface area is:",
            options: ["173.25 cm²", "183.25 cm²", "273.25 cm²", "None of these"],
            correctAnswer: "A"
        },
        {
            id: "m5",
            question: "The volume of a sphere of radius 2r is:",
            options: ["(4/3)πr³", "32/3 πr³", "8/3 πr³", "4/3 π(2r)³"],
            correctAnswer: "B"
        },
        {
            id: "m6",
            question: "If the base radius and height of a cylinder are 7 cm and 10 cm respectively, its volume is:",
            options: ["1540 cm³", "154 cm³", "1450 cm³", "770 cm³"],
            correctAnswer: "A"
        },
        {
            id: "m7",
            question: "The ratio of surface areas of two spheres is 4:9. The ratio of their volumes is:",
            options: ["2:3", "4:9", "8:27", "16:81"],
            correctAnswer: "C"
        },
        {
            id: "m8",
            question: "The edge of a cube is 10 cm. Its total surface area is:",
            options: ["400 cm²", "600 cm²", "1000 cm²", "100 cm²"],
            correctAnswer: "B"
        },
        {
            id: "m9",
            question: "The radius of a sphere whose surface area is 154 cm² is:",
            options: ["7 cm", "3.5 cm", "14 cm", "10.5 cm"],
            correctAnswer: "B"
        },
        {
            id: "m10",
            question: "The capacity of a cuboidal tank of dimensions 6m × 5m × 4.5m in litres is:",
            options: ["135000 L", "13500 L", "1350 L", "135 L"],
            correctAnswer: "A"
        }
    ],
    summary: [
        "Mastered the surface area and volume of cuboids, cubes, cylinders, cones, and spheres.",
        "Understood the conversion between cubic meters, cubic centimeters, and litres.",
        "Solved complex problems involving thickness, cost estimation, and ratios."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 100px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        .formula-box { background: rgba(67, 160, 71, 0.1) !important; border-left: 4px solid #43A047 !important; padding: 10px; margin: 10px 0; color: #fff !important; }
        .section-title { color: #43A047 !important; font-size: 1.3em; border-bottom: 1px solid rgba(67, 160, 71, 0.2); padding-bottom: 5px; margin-bottom: 15px; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 10px; }
        b { color: #43A047 !important; font-weight: normal; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Chapter Overview: Surface Areas and Volumes</div>
        <div class="step">In this chapter, we study the <b>Surface Areas</b> and <b>Volumes</b> of various 3D shapes. These concepts are used in constructing buildings, designing containers, and manufacturing goods.</div>
        
        <div class="step"><b>1. Cuboid and Cube:</b></div>
        <div class="formula-box">
            <b>Cuboid:</b><br/>
            Surface Area = 2(lb + bh + hl)<br/>
            Volume = l × b × h
        </div>
        <div class="formula-box">
            <b>Cube:</b><br/>
            Surface Area = 6a²<br/>
            Volume = a³
        </div>

        <div class="step"><b>2. Cylinder:</b></div>
        <div class="formula-box">
            Curved Surface Area = 2πrh<br/>
            Total Surface Area = 2πr(r + h)<br/>
            Volume = πr²h
        </div>

        <div class="step"><b>3. Cone:</b></div>
        <div class="formula-box">
            Curved Surface Area = πrl (where l = √(r² + h²))<br/>
            Total Surface Area = πr(l + r)<br/>
            Volume = (1/3)πr²h
        </div>

        <div class="step"><b>4. Sphere and Hemisphere:</b></div>
        <div class="formula-box">
            <b>Sphere:</b> Area = 4πr², Volume = (4/3)πr³<br/>
            <b>Hemisphere:</b> CSA = 2πr², TSA = 3πr², Volume = (2/3)πr³
        </div>
    </div>
</body>
</html>`,
    htmlExercises: {
        "ex10.1": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        .formula { color: #43A047 !important; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Shape Guide: Cuboid</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M40 40 L160 40 L160 100 L40 100 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L70 20 L190 20 L160 40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M190 20 L190 80 L160 100" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="white" font-size="10" text-anchor="middle">Length (l)</text>
            <text x="25" y="75" fill="white" font-size="10" text-anchor="middle" transform="rotate(-90, 25, 75)">Height (h)</text>
            <text x="180" y="55" fill="white" font-size="10" text-anchor="middle" transform="rotate(35, 180, 55)">Breadth (b)</text>
        </svg>
    </div>
    <div class="content-box">
        <div class="question">1. A plastic box 1.5 m long, 1.25 m wide and 65 cm deep is to be made. It is to be open at the top. Ignoring the thickness of the plastic sheet, determine:<br/>(i) The area of the sheet required for making the box.<br/>(ii) The cost of sheet for it, if a sheet measuring 1 m² costs Rs 20.</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M40 40 L160 40 L160 100 L40 100 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M160 40 L190 20 L190 80 L160 100" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L70 20 L190 20" fill="none" stroke="white" stroke-width="1.5"/>
            <text x="100" y="35" fill="#43A047" font-size="10" text-anchor="middle">OPEN TOP BOX</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Given: l = 1.5 m, b = 1.25 m, h = 65 cm = 0.65 m.</div>
        <div class="step">(i) Area of the sheet required = Surface area of 5 faces (since it's open at the top).</div>
        <div class="step">Area = 2h(l + b) + lb</div>
        <div class="step">Area = 2(0.65)(1.5 + 1.25) + (1.5 × 1.25)</div>
        <div class="step">Area = 1.3(2.75) + 1.875 = 3.575 + 1.875 = 5.45 m².</div>
        <div class="step">(ii) Cost of the sheet = Area × Rate = 5.45 × Rs 20 = Rs 109.</div>
        <div class="final-answer">Area = 5.45 m², Cost = Rs 109.</div>
    </div>

    <div class="content-box">
        <div class="question">2. The length, breadth and height of a room are 5 m, 4 m and 3 m respectively. Find the cost of white washing the walls of the room and the ceiling at the rate of Rs 7.50 per m².</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="40" width="120" height="60" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L70 20 L190 20 L160 40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M190 20 L190 80 L160 100" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="15" fill="#43A047" font-size="9" text-anchor="middle">CEILING + 4 WALLS</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Given: l = 5 m, b = 4 m, h = 3 m.</div>
        <div class="step">Area to be white washed = Area of 4 walls + Area of ceiling.</div>
        <div class="step">Area = 2h(l + b) + lb = 2(3)(5 + 4) + (5 × 4)</div>
        <div class="step">Area = 6(9) + 20 = 54 + 20 = 74 m².</div>
        <div class="step">Cost = Area × Rate = 74 × Rs 7.50 = Rs 555.</div>
        <div class="final-answer">Total Cost = Rs 555.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The floor of a rectangular hall has a perimeter 250 m...</div>
        <svg viewBox="0 0 200 100" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="60" width="120" height="30" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M40 60 L70 40 L190 40 L160 60" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="80" fill="#43A047" font-size="10" text-anchor="middle">RECTANGULAR HALL FLOOR</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Given: Perimeter = 2(l + b) = 250 m.</div>
        <div class="step">Total Cost = Rs 15000, Rate = Rs 10/m².</div>
        <div class="step">Area of 4 walls = Total Cost / Rate = 15000 / 10 = 1500 m².</div>
        <div class="step">We know, Area of 4 walls = 2h(l + b) = Perimeter × h.</div>
        <div class="step">1500 = 250 × h ⇒ h = 1500 / 250 = 6 m.</div>
        <div class="final-answer">Height of the hall = 6 m.</div>
    </div>

    <div class="content-box">
        <div class="question">4. The paint in a certain container is sufficient to paint an area equal to 9.375 m²...</div>
        <svg viewBox="0 0 200 100" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <rect x="70" y="40" width="60" height="30" fill="rgba(67, 160, 71, 0.2)" stroke="#66BB6A" stroke-width="1.5"/>
            <path d="M70 40 L85 25 L145 25 L130 40" fill="rgba(67, 160, 71, 0.2)" stroke="#66BB6A" stroke-width="1.5"/>
            <path d="M145 25 L145 55 L130 70" fill="rgba(67, 160, 71, 0.2)" stroke="#66BB6A" stroke-width="1.5"/>
            <text x="100" y="90" fill="#43A047" font-size="10" text-anchor="middle">CERAMIC BRICK</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Surface area of one brick = 2(lb + bh + hl)</div>
        <div class="step">= 2(22.5 × 10 + 10 × 7.5 + 7.5 × 22.5)</div>
        <div class="step">= 2(225 + 75 + 168.75) = 2(468.75) = 937.5 cm².</div>
        <div class="step">Total paint area = 9.375 m² = 9.375 × 10000 = 93750 cm².</div>
        <div class="step">Number of bricks = Total Area / Area of 1 brick = 93750 / 937.5 = 100.</div>
        <div class="final-answer">Number of bricks = 100.</div>
    </div>

    <div class="content-box">
        <div class="question">5. A cubical box has each edge 10 cm and another cuboidal box...</div>
        <svg viewBox="0 0 240 100" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <rect x="20" y="40" width="40" height="40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M20 40 L35 25 L75 25 L60 40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M75 25 L75 65 L60 80" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <rect x="120" y="50" width="70" height="30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M120 50 L135 35 L205 35 L190 50" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M205 35 L205 65 L190 80" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="45" y="95" fill="white" font-size="10" text-anchor="middle">CUBE</text>
            <text x="160" y="95" fill="white" font-size="10" text-anchor="middle">CUBOID</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Cube: a = 10 cm. Cuboid: l = 12.5 cm, b = 10 cm, h = 8 cm.</div>
        <div class="step">(i) LSA of cube = 4a² = 4(10)² = 400 cm².</div>
        <div class="step">LSA of cuboid = 2h(l + b) = 2(8)(12.5 + 10) = 16(22.5) = 360 cm².</div>
        <div class="step">Difference = 400 - 360 = 40 cm². Cube is greater.</div>
        <div class="step">(ii) TSA of cube = 6a² = 6(10)² = 600 cm².</div>
        <div class="step">TSA of cuboid = 2(lb + bh + hl) = 2(125 + 80 + 100) = 2(305) = 610 cm².</div>
        <div class="step">Difference = 610 - 600 = 10 cm². Cube is smaller.</div>
        <div class="final-answer">(i) Cube LSA is greater by 40 cm². (ii) Cube TSA is smaller by 10 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">6. A small indoor greenhouse (herbarium)...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="40" width="100" height="50" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L60 20 L160 20 L140 40" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M160 20 L160 70 L140 90" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">GLASS HERBARIUM</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">l = 30 cm, b = 25 cm, h = 25 cm.</div>
        <div class="step">(i) Area of glass = Total Surface Area = 2(lb + bh + hl)</div>
        <div class="step">= 2(30 × 25 + 25 × 25 + 25 × 30) = 2(750 + 625 + 750) = 2(2125) = 4250 cm².</div>
        <div class="step">(ii) Length of tape = Sum of all 12 edges = 4(l + b + h)</div>
        <div class="step">= 4(30 + 25 + 25) = 4(80) = 320 cm.</div>
        <div class="final-answer">Area = 4250 cm², Tape = 320 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">7. Shanti Sweets Stall was placing an order for making cardboard boxes...</div>
        <div class="solution-header">Solution:</div>
        <svg viewBox="0 0 200 100" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="40" width="60" height="40" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L60 25 L120 25 L100 40" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M120 25 L120 65 L100 80" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="80" y="95" fill="#43A047" font-size="10" text-anchor="middle">SWEET BOX MODEL</text>
        </svg>
        <div class="step">TSA of bigger box = 2(500 + 100 + 125) = 2(725) = 1450 cm².</div>
        <div class="step">TSA of smaller box = 2(180 + 60 + 75) = 2(315) = 630 cm².</div>
        <div class="step">Total area for one of each = 1450 + 630 = 2080 cm².</div>
        <div class="step">Extra for overlaps = 5% of 2080 = 104 cm².</div>
        <div class="step">Area for 1 set = 2080 + 104 = 2184 cm².</div>
        <div class="step">Area for 250 sets = 2184 × 250 = 546000 cm².</div>
        <div class="step">Cost = (546000 / 1000) × Rs 4 = 546 × 4 = Rs 2184.</div>
        <div class="final-answer">Total Cost = Rs 2184.</div>
    </div>

    <div class="content-box">
        <div class="question">8. Parveen wanted to make a temporary shelter for her car...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="40" width="120" height="60" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L70 20 L190 20 L160 40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M190 20 L190 80 L160 100" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="15" fill="#43A047" font-size="10" text-anchor="middle">CAR SHELTER (5 FACES)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Shelter height h = 2.5 m, l = 4 m, b = 3 m.</div>
        <div class="step">Area required = Area of 4 walls + Area of top.</div>
        <div class="step">Area = 2h(l + b) + lb = 2(2.5)(4 + 3) + (4 × 3)</div>
        <div class="step">Area = 5(7) + 12 = 35 + 12 = 47 m².</div>
        <div class="final-answer">Tarpaulin required = 47 m².</div>
    </div>
</body>
</html>`,
        "ex10.2": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        img { filter: brightness(0) invert(1); max-width: 100%; height: auto; display: block; margin: 10px auto; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. The curved surface area of a right circular cylinder of height 14 cm is 88 cm². Find the diameter of the base of the cylinder.</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M65 30 L65 90 A 35 10 0 0 0 135 90 L135 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">CYLINDER (CSA = 88 cm²)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Height h = 14 cm, CSA = 88 cm².</div>
        <div class="step">CSA of cylinder = 2πrh.</div>
        <div class="step">88 = 2 × (22/7) × r × 14</div>
        <div class="step">88 = 88r ⇒ r = 1 cm.</div>
        <div class="step">Diameter = 2r = 2 cm.</div>
        <div class="final-answer">Diameter = 2 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">2. It is required to make a closed cylindrical tank...</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 30 L65 90 A 35 10 0 0 0 135 90 L135 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="90" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">CLOSED CYLINDER (TSA)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 1 m, d = 140 cm ⇒ r = 70 cm = 0.7 m.</div>
        <div class="step">Sheet required = Total Surface Area = 2πr(r + h).</div>
        <div class="step">Area = 2 × (22/7) × 0.7 × (0.7 + 1) = 4.4 × 1.7 = 7.48 m².</div>
        <div class="final-answer">Sheet required = 7.48 m².</div>
    </div>

    <div class="content-box">
        <div class="question">3. A metal pipe is 77 cm long. The inner diameter of a cross section is 4 cm, the outer diameter being 4.4 cm (see Fig. 10.11). Find its<br/>(i) inner curved surface area,<br/>(ii) outer curved surface area,<br/>(iii) total surface area.</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="20" rx="30" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="20" rx="20" ry="6" fill="rgba(0, 0, 0, 0.2)" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="70" y1="20" x2="70" y2="100" stroke="white" stroke-width="1.5"/>
            <line x1="130" y1="20" x2="130" y2="100" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="100" rx="30" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">HOLLOW METAL PIPE</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 77 cm, r₁ (inner) = 2 cm, r₂ (outer) = 2.2 cm.</div>
        <div class="step">(i) Inner CSA = 2πr₁h = 2 × (22/7) × 2 × 77 = 968 cm².</div>
        <div class="step">(ii) Outer CSA = 2πr₂h = 2 × (22/7) × 2.2 × 77 = 1064.8 cm².</div>
        <div class="step">(iii) TSA = Inner CSA + Outer CSA + 2 × (Area of circular ends).</div>
        <div class="step">Area of ends = 2 × π(r₂² - r₁²) = 2 × (22/7) × (2.2² - 2²) = 5.28 cm².</div>
        <div class="step">TSA = 968 + 1064.8 + 5.28 = 2038.08 cm².</div>
        <div class="final-answer">TSA = 2038.08 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. The diameter of a roller is 84 cm and its length is 120 cm...</div>
        <div class="solution-header">Solution:</div>
        <svg viewBox="0 0 200 100" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="60" cy="50" rx="15" ry="35" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="140" cy="50" rx="15" ry="35" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M60 15 L140 15 L140 85 L60 85 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="55" fill="#43A047" font-size="10" text-anchor="middle">ROAD ROLLER</text>
        </svg>
        <div class="step">d = 84 cm ⇒ r = 42 cm = 0.42 m. L = h = 120 cm = 1.2 m.</div>
        <div class="step">Area in 1 revolution = CSA = 2πrh = 2 × (22/7) × 0.42 × 1.2 = 3.168 m².</div>
        <div class="step">Total area = 500 × 3.168 = 1584 m².</div>
        <div class="final-answer">Area = 1584 m².</div>
    </div>

    <div class="content-box">
        <div class="question">5. A cylindrical pillar is 50 cm in diameter and 3.5 m in height. Find the cost of painting the curved surface...</div>
        <svg viewBox="0 0 200 120" style="width: 120px; height: auto; margin: 10px auto; display: block;">
            <path d="M70 20 L70 100 A 30 8 0 0 0 130 100 L130 20" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="20" rx="30" ry="8" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">PILLAR CSA</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 50 cm ⇒ r = 0.25 m. h = 3.5 m.</div>
        <div class="step">CSA = 2πrh = 2 × (22/7) × 0.25 × 3.5 = 5.5 m².</div>
        <div class="step">Cost = 5.5 × Rs 12.50 = Rs 68.75.</div>
        <div class="final-answer">Cost = Rs 68.75.</div>
    </div>

    <div class="content-box">
        <div class="question">6. Curved surface area of a right circular cylinder is 4.4 m²...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M65 30 L65 90 A 35 10 0 0 0 135 90 L135 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">CYLINDER MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">CSA = 4.4 m², r = 0.7 m.</div>
        <div class="step">CSA = 2πrh ⇒ 4.4 = 2 × (22/7) × 0.7 × h</div>
        <div class="step">4.4 = 4.4h ⇒ h = 1 m.</div>
        <div class="final-answer">Height = 1 m.</div>
    </div>

    <div class="content-box">
        <div class="question">7. The inner diameter of a circular well is 3.5 m. It is 10 m deep. Find...</div>
        <svg viewBox="0 0 200 140" style="width: 120px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="20" rx="35" ry="8" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <path d="M65 20 L65 120 A 35 8 0 0 0 135 120 L135 20" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">WATER WELL (10m DEEP)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 3.5 m ⇒ r = 1.75 m. h = 10 m.</div>
        <div class="step">(i) CSA = 2πrh = 2 × (22/7) × 1.75 × 10 = 110 m².</div>
        <div class="step">(ii) Cost = 110 × Rs 40 = Rs 4400.</div>
        <div class="final-answer">CSA = 110 m², Cost = Rs 4400.</div>
    </div>

    <div class="content-box">
        <div class="question">8. In a hot water heating system, there is a cylindrical pipe of length 28 m and diameter 5 cm. Find the total radiating surface in the system.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 28 m, d = 5 cm ⇒ r = 2.5 cm = 0.025 m.</div>
        <div class="step">Radiating surface = CSA = 2πrh.</div>
        <div class="step">Area = 2 × (22/7) × 0.025 × 28 = 4.4 m².</div>
        <div class="final-answer">Surface = 4.4 m².</div>
    </div>

    <div class="content-box">
        <div class="question">9. Find (i) the lateral or curved surface area of a closed cylindrical petrol storage tank that is 4.2 m in diameter and 4.5 m high.<br/>(ii) how much steel was actually used, if 1/12 of the steel actually used was wasted in making the tank.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 4.2 m ⇒ r = 2.1 m, h = 4.5 m.</div>
        <div class="step">(i) CSA = 2πrh = 2 × (22/7) × 2.1 × 4.5 = 59.4 m².</div>
        <div class="step">(ii) TSA = 2πr(r + h) = 2 × (22/7) × 2.1 × (2.1 + 4.5) = 13.2 × 6.6 = 87.12 m².</div>
        <div class="step">Let total steel be S. S - (1/12)S = TSA ⇒ (11/12)S = 87.12.</div>
        <div class="step">S = (87.12 × 12) / 11 = 95.04 m².</div>
        <div class="final-answer">Steel Used = 95.04 m².</div>
    </div>

    <div class="content-box">
        <div class="question">10. In Fig. 10.12, you see the frame of a lampshade. It is to be covered with a decorative cloth. The frame has a base diameter of 20 cm and height of 30 cm. A margin of 2.5 cm is to be given for folding it over the top and bottom of the frame. Find how much cloth is required for covering the lampshade.</div>
        <svg viewBox="0 0 200 150" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="60" y="30" width="80" height="90" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="30" rx="40" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="120" rx="40" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <line x1="60" y1="60" x2="140" y2="60" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="60" y1="90" x2="140" y2="90" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="145" fill="#43A047" font-size="10" text-anchor="middle">LAMPSHADE FRAME</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 20 cm ⇒ r = 10 cm, h = 30 cm.</div>
        <div class="step">New height with margins = 30 + 2.5 + 2.5 = 35 cm.</div>
        <div class="step">Cloth area = CSA = 2πrh = 2 × (22/7) × 10 × 35 = 2200 cm².</div>
        <div class="final-answer">Cloth = 2200 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">11. The students of a Vidyalaya were asked to participate in a competition for making and decorating penholders in the shape of a cylinder with a base, using cardboard. Each penholder was to be of radius 3 cm and height 10.5 cm. The Vidyalaya was to supply the competitors with cardboard. If there were 35 competitors, how much cardboard was required to be bought for the competition?</div>
        <div class="solution-header">Solution:</div>
        <div class="step">r = 3 cm, h = 10.5 cm.</div>
        <div class="step">Area of 1 penholder = CSA + Area of base = 2πrh + πr² = πr(2h + r).</div>
        <div class="step">Area = (22/7) × 3 × (2 × 10.5 + 3) = (22/7) × 3 × 24 = 1584 / 7 cm².</div>
        <div class="step">Total for 35 competitors = (1584 / 7) × 35 = 7920 cm².</div>
        <div class="final-answer">Cardboard = 7920 cm².</div>
    </div>
</body>
</html>`,
        "ex10.3": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Shape Guide: Cone</div>
        <svg viewBox="0 0 200 140" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="40" ry="12" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M60 110 L100 20 L140 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <line x1="100" y1="110" x2="100" y2="20" stroke="white" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="100" y1="110" x2="140" y2="110" stroke="white" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="120" y="125" fill="white" font-size="10" text-anchor="middle">radius (r)</text>
            <text x="90" y="65" fill="white" font-size="10" text-anchor="middle">height (h)</text>
            <text x="135" y="65" fill="white" font-size="10" text-anchor="middle">slant (l)</text>
        </svg>
    </div>
    <div class="content-box">
        <div class="question">1. Diameter of the base of a cone is 10.5 cm and its slant height is 10 cm. Find its curved surface area.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 10.5 cm ⇒ r = 5.25 cm, l = 10 cm.</div>
        <div class="step">CSA of cone = πrl = (22/7) × 5.25 × 10 = 165 cm².</div>
        <div class="final-answer">CSA = 165 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the total surface area of a cone, if its slant height is 21 m and diameter of its base is 24 m.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">l = 21 m, d = 24 m ⇒ r = 12 m.</div>
        <div class="step">TSA of cone = πr(l + r) = (22/7) × 12 × (21 + 12)</div>
        <div class="step">= (22/7) × 12 × 33 = 1244.57 m².</div>
        <div class="final-answer">TSA = 1244.57 m².</div>
    </div>

    <div class="content-box">
        <div class="question">3. Curved surface area of a cone is 308 cm² and its slant height is 14 cm. Find (i) radius...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 110 L100 20 L135 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">CONE (CSA = 308 cm²)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">CSA = 308, l = 14.</div>
        <div class="step">(i) πrl = 308 ⇒ (22/7) × r × 14 = 308 ⇒ 44r = 308 ⇒ r = 7 cm.</div>
        <div class="step">(ii) TSA = πr(l + r) = (22/7) × 7 × (14 + 7) = 22 × 21 = 462 cm².</div>
        <div class="final-answer">Radius = 7 cm, TSA = 462 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. A conical tent is 10 m high and the radius of its base is 24 m. Find...</div>
        <svg viewBox="0 0 200 140" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 110 L100 20 L140 110 Z" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="110" rx="40" ry="10" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">CONICAL TENT MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 10 m, r = 24 m.</div>
        <div class="step">(i) l = √(r² + h²) = √(24² + 10²) = √676 = 26 m.</div>
        <div class="step">(ii) Area of canvas = πrl = (22/7) × 24 × 26 = 13728/7 m².</div>
        <div class="step">Cost = (13728 / 7) × Rs 70 = Rs 1,37,280.</div>
        <div class="final-answer">Slant Height = 26 m, Cost = Rs 1,37,280.</div>
    </div>

    <div class="content-box">
        <div class="question">5. What length of tarpaulin 3 m wide will be required...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <rect x="20" y="30" width="80" height="40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="60" y="85" fill="white" font-size="9" text-anchor="middle">TARPAULIN ROLL</text>
            <path d="M140 80 L180 80 L160 20 Z" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="160" cy="80" rx="20" ry="6" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="160" y="95" fill="white" font-size="9" text-anchor="middle">CONICAL TENT</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 8 m, r = 6 m ⇒ l = √(8² + 6²) = 10 m.</div>
        <div class="step">CSA = πrl = 3.14 × 6 × 10 = 188.4 m².</div>
        <div class="step">Width of tarpaulin = 3 m.</div>
        <div class="step">Length = CSA / Width = 188.4 / 3 = 62.8 m.</div>
        <div class="step">Extra length = 20 cm = 0.2 m.</div>
        <div class="step">Total length = 62.8 + 0.2 = 63 m.</div>
        <div class="final-answer">Length = 63 m.</div>
    </div>

    <div class="content-box">
        <div class="question">6. The slant height and base diameter of a conical tomb are 25 m and 14 m respectively. Find the cost of white-washing...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 110 L100 20 L140 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="110" rx="40" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">CONICAL TOMB</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">l = 25 m, d = 14 m ⇒ r = 7 m.</div>
        <div class="step">CSA = πrl = (22/7) × 7 × 25 = 550 m².</div>
        <div class="step">Cost = (550 / 100) × Rs 210 = 5.5 × 210 = Rs 1155.</div>
        <div class="final-answer">Cost = Rs 1155.</div>
    </div>

    <div class="content-box">
        <div class="question">7. A joker’s cap is in the form of a right circular cone...</div>
        <div class="solution-header">Solution:</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="100" rx="40" ry="12" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M60 100 L100 20 L140 100 Z" fill="rgba(67, 160, 71, 0.2)" stroke="#43A047" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">JOKER CAP</text>
        </svg>
        <div class="step">r = 7 cm, h = 24 cm ⇒ l = √(24² + 7²) = 25 cm.</div>
        <div class="step">Area for 1 cap = CSA = πrl = (22/7) × 7 × 25 = 550 cm².</div>
        <div class="step">Area for 10 caps = 550 × 10 = 5500 cm².</div>
        <div class="final-answer">Area = 5500 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">8. A bus stop is barricaded... 50 hollow cones...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="50" cy="100" rx="15" ry="5" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <path d="M35 100 L50 40 L65 100 Z" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <ellipse cx="100" cy="100" rx="15" ry="5" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <path d="M85 100 L100 40 L115 100 Z" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <ellipse cx="150" cy="100" rx="15" ry="5" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <path d="M135 100 L150 40 L165 100 Z" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">50 HOLLOW CONES</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 40 cm ⇒ r = 0.2 m. h = 1 m.</div>
        <div class="step">l = √(h² + r²) = √(1² + 0.2²) = √1.04 = 1.02 m.</div>
        <div class="step">CSA of 1 cone = πrl = 3.14 × 0.2 × 1.02 = 0.64056 m².</div>
        <div class="step">Total CSA for 50 cones = 50 × 0.64056 = 32.028 m².</div>
        <div class="step">Cost = 32.028 × Rs 12 = Rs 384.336 ≈ Rs 384.34.</div>
        <div class="final-answer">Total Cost = Rs 384.34.</div>
    </div>
</body>
</html>`,
        "ex10.4": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Shape Guide: Sphere</div>
        <svg viewBox="0 0 200 140" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="70" r="50" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="70" rx="50" ry="15" fill="none" stroke="white" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="100" y1="70" x2="150" y2="70" stroke="#43A047" stroke-width="2"/>
            <text x="125" y="65" fill="white" font-size="10" text-anchor="middle">radius (r)</text>
            <text x="100" y="130" fill="#43A047" font-size="12" text-anchor="middle">SPHERE MODEL</text>
        </svg>
    </div>
    <div class="content-box">
        <div class="question">1. Find the surface area of a sphere of radius...</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="60" rx="40" ry="10" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">SPHERE (Area = 4πr²)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) r = 10.5. Area = 4πr² = 4 × (22/7) × 10.5² = 1386 cm².</div>
        <div class="step">(ii) r = 5.6. Area = 4 × (22/7) × 5.6² = 394.24 cm².</div>
        <div class="step">(iii) r = 14. Area = 4 × (22/7) × 14² = 2464 cm².</div>
        <div class="final-answer">(i) 1386 cm², (ii) 394.24 cm², (iii) 2464 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the surface area of a sphere of diameter...</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <line x1="60" y1="60" x2="140" y2="60" stroke="#43A047" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">DIAMETER = 2r</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) d = 14 ⇒ r = 7. Area = 4πr² = 4 × (22/7) × 7² = 616 cm².</div>
        <div class="step">(ii) d = 21 ⇒ r = 10.5. Area = 4 × (22/7) × 10.5² = 1386 cm².</div>
        <div class="step">(iii) d = 3.5 ⇒ r = 1.75. Area = 4 × (22/7) × 1.75² = 38.5 m².</div>
        <div class="final-answer">(i) 616 cm², (ii) 1386 cm², (iii) 38.5 m².</div>
    </div>

    <div class="content-box">
        <div class="question">3. Find the total surface area of a hemisphere...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 60 A 40 40 0 0 0 140 60 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="60" rx="40" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">HEMISPHERE (TSA = 3πr²)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">r = 10 cm.</div>
        <div class="step">TSA of hemisphere = 3πr² = 3 × 3.14 × 10² = 942 cm².</div>
        <div class="final-answer">TSA = 942 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. The radius of a spherical balloon increases from 7 cm to 14 cm...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <circle cx="60" cy="60" r="25" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="60" y="100" fill="white" font-size="9" text-anchor="middle">BALLOON 1 (r=7)</text>
            <circle cx="160" cy="60" r="45" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="160" y="115" fill="white" font-size="9" text-anchor="middle">BALLOON 2 (r=14)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">r₁ = 7 cm, r₂ = 14 cm.</div>
        <div class="step">Ratio = (4πr₁²) / (4πr₂²) = (r₁ / r₂)² = (7 / 14)² = (1/2)² = 1:4.</div>
        <div class="final-answer">Ratio = 1:4.</div>
    </div>

    <div class="content-box">
        <div class="question">5. A hemispherical bowl made of brass has inner diameter 10.5 cm...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 40 A 40 40 0 0 0 140 40 Z" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="40" rx="40" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="100" fill="#43A047" font-size="10" text-anchor="middle">BRASS BOWL (CSA)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 10.5 cm ⇒ r = 5.25 cm.</div>
        <div class="step">Inner CSA = 2πr² = 2 × (22/7) × 5.25² = 173.25 cm².</div>
        <div class="step">Cost = (173.25 / 100) × Rs 16 = Rs 27.72.</div>
        <div class="final-answer">Cost = Rs 27.72.</div>
    </div>

    <div class="content-box">
        <div class="question">6. Find the radius of a sphere whose surface area is 154 cm².</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Surface Area = 154 cm².</div>
        <div class="step">4πr² = 154 ⇒ 4 × (22/7) × r² = 154</div>
        <div class="step">r² = (154 × 7) / 88 = 12.25 ⇒ r = 3.5 cm.</div>
        <div class="final-answer">Radius = 3.5 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">7. The diameter of the moon is approximately one fourth of the diameter of the earth...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <circle cx="60" cy="60" r="15" fill="rgba(255, 255, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="60" y="100" fill="white" font-size="9" text-anchor="middle">MOON</text>
            <circle cx="160" cy="60" r="45" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="160" y="115" fill="white" font-size="9" text-anchor="middle">EARTH</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Let earth diameter be d. Then moon diameter is d/4.</div>
        <div class="step">Let radii be R and R/4.</div>
        <div class="step">Ratio of surface areas = (4π(R/4)²) / (4πR²) = (1/4)² = 1:16.</div>
        <div class="final-answer">Ratio = 1:16.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A hemispherical bowl is made of steel, 0.25 cm thick...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M55 40 A 45 45 0 0 0 145 40 Z" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M60 40 A 40 40 0 0 0 140 40 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1"/>
            <ellipse cx="100" cy="40" rx="45" ry="12" fill="none" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="10" text-anchor="middle">THICK STEEL BOWL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Inner radius r = 5 cm, Thickness = 0.25 cm.</div>
        <div class="step">Outer radius R = 5 + 0.25 = 5.25 cm.</div>
        <div class="step">Outer CSA = 2πR² = 2 × (22/7) × 5.25² = 173.25 cm².</div>
        <div class="final-answer">Outer CSA = 173.25 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">9. A right circular cylinder just encloses a sphere of radius r (see Fig. 10.22). Find<br/>(i) surface area of the sphere,<br/>(ii) curved surface area of the cylinder,<br/>(iii) ratio of the areas obtained in (i) and (ii).</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1.5"/>
            <rect x="60" y="20" width="80" height="80" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="20" rx="40" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="100" rx="40" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">SPHERE ENCLOSED IN CYLINDER</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Surface area of sphere = 4πr².</div>
        <div class="step">(ii) Cylinder radius = r, Height h = 2r.</div>
        <div class="step">CSA of cylinder = 2πrh = 2πr(2r) = 4πr².</div>
        <div class="step">(iii) Ratio = 4πr² : 4πr² = 1:1.</div>
        <div class="final-answer">Ratio = 1:1.</div>
    </div>
</body>
</html>`,
        "ex10.5": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. A matchbox measures 4 cm × 2.5 cm × 1.5 cm. What will be the volume...</div>
        <svg viewBox="0 0 200 100" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="50" y="40" width="80" height="30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M50 40 L65 25 L145 25 L130 40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M145 25 L145 55 L130 70" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="90" fill="#43A047" font-size="10" text-anchor="middle">MATCHBOX MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Volume of 1 box = l × b × h = 4 × 2.5 × 1.5 = 15 cm³.</div>
        <div class="step">Volume of packet (12 boxes) = 15 × 12 = 180 cm³.</div>
        <div class="final-answer">Volume = 180 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">2. A cuboidal water tank is 6 m long, 5 m wide and 4.5 m deep...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="40" width="100" height="60" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <path d="M40 40 L60 20 L160 20 L140 40" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M160 20 L160 80 L140 100" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">CUBOIDAL WATER TANK</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">l = 6 m, b = 5 m, h = 4.5 m.</div>
        <div class="step">Volume = 6 × 5 × 4.5 = 135 m³.</div>
        <div class="step">Capacity = 135 × 1000 = 1,35,000 litres.</div>
        <div class="final-answer">Capacity = 1,35,000 litres.</div>
    </div>

    <div class="content-box">
        <div class="question">3. A cuboidal vessel is 10 m long and 8 m wide. How high must it be made...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="50" y="60" width="100" height="40" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M50 60 L70 40 L170 40 L150 60" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M170 40 L170 80 L150 100" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="30" fill="#43A047" font-size="10" text-anchor="middle">CUBOIDAL VESSEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">l = 10 m, b = 8 m, Volume = 380 m³.</div>
        <div class="step">V = l × b × h ⇒ 380 = 10 × 8 × h</div>
        <div class="step">380 = 80h ⇒ h = 4.75 m.</div>
        <div class="final-answer">Height = 4.75 m.</div>
    </div>

    <div class="content-box">
        <div class="question">4. Find the cost of digging a cuboidal pit...</div>
        <div class="solution-header">Solution:</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="20" width="120" height="40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M40 60 L60 80 L180 80 L160 60" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1.5"/>
            <path d="M180 80 L180 40 L160 20" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="95" fill="#43A047" font-size="11" text-anchor="middle">EXCAVATION PIT MODEL</text>
        </svg>
        <div class="step">l = 8 m, b = 6 m, h = 3 m.</div>
        <div class="step">Volume = 8 × 6 × 3 = 144 m³.</div>
        <div class="step">Cost = 144 × Rs 30 = Rs 4320.</div>
        <div class="final-answer">Cost = Rs 4320.</div>
    </div>

    <div class="content-box">
        <div class="question">5. The capacity of a cuboidal tank is 50000 litres of water. Find the breadth...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="60" y="30" width="80" height="70" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <path d="M60 30 L80 15 L160 15 L140 30" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M160 15 L160 85 L140 100" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="115" fill="#43A047" font-size="10" text-anchor="middle">50,000L WATER TANK</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Capacity = 50000 L = 50 m³. l = 2.5 m, h = 10 m.</div>
        <div class="step">V = l × b × h ⇒ 50 = 2.5 × b × 10</div>
        <div class="step">50 = 25b ⇒ b = 2 m.</div>
        <div class="final-answer">Breadth = 2 m.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A village, having a population of 4000, requires 150 litres of water per head per day. It has a tank measuring 20 m × 15 m × 6 m. For how many days will the water of this tank last?</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Daily water requirement = 4000 × 150 = 6,00,000 L = 600 m³.</div>
        <div class="step">Tank volume = 20 × 15 × 6 = 1800 m³.</div>
        <div class="step">Number of days = Total Volume / Daily Requirement = 1800 / 600 = 3 days.</div>
        <div class="final-answer">Days = 3 days.</div>
    </div>

    <div class="content-box">
        <div class="question">7. A godown measures 40 m × 25 m × 10 m...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <rect x="40" y="30" width="120" height="70" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M40 30 L60 15 L180 15 L160 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M180 15 L180 85 L160 100" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <rect x="50" y="75" width="15" height="15" fill="#43A047" stroke="white" stroke-width="0.5"/>
            <text x="110" y="115" fill="#43A047" font-size="10" text-anchor="middle">GODOWN & CRATES MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Godown Volume = 40 × 25 × 10 = 10000 m³.</div>
        <div class="step">Crate Volume = 1.5 × 1.25 × 0.5 = 0.9375 m³.</div>
        <div class="step">Number of crates = 10000 / 0.9375 = 10666.66.</div>
        <div class="step">Max full crates = 10666.</div>
        <div class="final-answer">Number of crates = 10666.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A solid cube of side 12 cm is cut into eight cubes of equal volume...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <rect x="20" y="30" width="60" height="60" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M20 30 L40 10 L100 10 L80 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M100 10 L100 70 L80 90" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M110 60 L130 60" stroke="#43A047" stroke-width="3" marker-end="url(#arrow)"/>
            <rect x="150" y="60" width="30" height="30" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <rect x="190" y="60" width="30" height="30" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <text x="60" y="110" fill="white" font-size="10" text-anchor="middle">BIG CUBE</text>
            <text x="185" y="110" fill="white" font-size="10" text-anchor="middle">8 SMALL CUBES</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Volume of big cube = 12³ = 1728 cm³.</div>
        <div class="step">Volume of 1 small cube = 1728 / 8 = 216 cm³.</div>
        <div class="step">Side of new cube a = ³√216 = 6 cm.</div>
        <div class="step">Ratio of surface areas = (6 × 12²) / (6 × 6²) = 144 / 36 = 4:1.</div>
        <div class="final-answer">Side = 6 cm, Ratio = 4:1.</div>
    </div>

    <div class="content-box">
        <div class="question">9. A river 3 m deep and 40 m wide is flowing...</div>
        <svg viewBox="0 0 200 100" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M20 40 Q 60 30 100 40 Q 140 50 180 40 L 180 80 Q 140 90 100 80 Q 60 70 20 80 Z" fill="rgba(64, 196, 255, 0.3)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="25" fill="#43A047" font-size="11" text-anchor="middle">RIVER WATER FLOW</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Speed = 2 km/h = 2000 m/h = (2000/60) m/min = (100/3) m/min.</div>
        <div class="step">Water in 1 min = Volume of water of length (100/3) m.</div>
        <div class="step">Volume = l × b × h = (100/3) × 40 × 3 = 4000 m³.</div>
        <div class="final-answer">Volume = 4000 m³.</div>
    </div>
</body>
</html>`,
        "ex10.6": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Shape Guide: Cylinder</div>
        <svg viewBox="0 0 200 140" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="40" ry="12" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="110" rx="40" ry="12" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <line x1="60" y1="30" x2="60" y2="110" stroke="white" stroke-width="1.5"/>
            <line x1="140" y1="30" x2="140" y2="110" stroke="white" stroke-width="1.5"/>
            <line x1="100" y1="110" x2="140" y2="110" stroke="white" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="120" y="125" fill="white" font-size="11" text-anchor="middle">radius (r)</text>
            <text x="155" y="75" fill="white" font-size="11" text-anchor="middle">height (h)</text>
        </svg>
    </div>
    <div class="content-box">
        <div class="question">1. The circumference of the base of a cylindrical vessel is 132 cm and its height...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="40" ry="12" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M60 30 L60 90 A 40 12 0 0 0 140 90 L140 30" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">CYLINDRICAL VESSEL MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Circumference = 2πr = 132 cm.</div>
        <div class="step">2 × (22/7) × r = 132 ⇒ r = (132 × 7) / 44 = 21 cm.</div>
        <div class="step">Height h = 25 cm.</div>
        <div class="step">Volume = πr²h = (22/7) × 21 × 21 × 25 = 34650 cm³.</div>
        <div class="step">Capacity = 34650 / 1000 = 34.65 litres.</div>
        <div class="final-answer">Capacity = 34.65 litres.</div>
    </div>

    <div class="content-box">
        <div class="question">2. The inner diameter of a cylindrical wooden pipe is 24 cm and its outer diameter is 28 cm. The length of the pipe is 35 cm. Find the mass of the pipe, if 1 cm³ of wood has a mass of 0.6 g.</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="20" rx="30" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="20" rx="20" ry="6" fill="rgba(0, 0, 0, 0.3)" stroke="#43A047" stroke-width="1.5"/>
            <line x1="70" y1="20" x2="70" y2="100" stroke="white" stroke-width="1.5"/>
            <line x1="130" y1="20" x2="130" y2="100" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="100" rx="30" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="10" text-anchor="middle">CYLINDRICAL WOODEN PIPE</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Inner radius r = 12 cm, Outer radius R = 14 cm. h = 35 cm.</div>
        <div class="step">Volume of wood = π(R² - r²)h = (22/7) × (14² - 12²) × 35</div>
        <div class="step">= 22 × (196 - 144) × 5 = 110 × 52 = 5720 cm³.</div>
        <div class="step">Mass = 5720 × 0.6 = 3432 g = 3.432 kg.</div>
        <div class="final-answer">Mass = 3.432 kg.</div>
    </div>

    <div class="content-box">
        <div class="question">3. A soft drink is available in two packs...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <rect x="20" y="40" width="50" height="60" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M20 40 L35 25 L85 25 L70 40" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M85 25 L85 85 L70 100" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="160" cy="30" rx="25" ry="8" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M135 30 L135 90 A 25 8 0 0 0 185 90 L185 30" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="50" y="115" fill="white" font-size="10" text-anchor="middle">TIN CAN</text>
            <text x="160" y="115" fill="white" font-size="10" text-anchor="middle">CYLINDER PACK</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Tin can volume = l × b × h = 5 × 4 × 15 = 300 cm³.</div>
        <div class="step">(ii) Cylinder: r = 3.5 cm, h = 10 cm. Volume = πr²h = (22/7) × 3.5 × 3.5 × 10 = 385 cm³.</div>
        <div class="step">Difference = 385 - 300 = 85 cm³.</div>
        <div class="final-answer">Cylindrical container by 85 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">4. If the lateral surface of a cylinder is 94.2 cm² and its height is 5 cm...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M65 30 L65 90 A 35 10 0 0 0 135 90 L135 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">CYLINDER (CSA = 94.2 cm²)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">LSA = 94.2 cm², h = 5 cm.</div>
        <div class="step">(i) 2πrh = 94.2 ⇒ 2 × 3.14 × r × 5 = 94.2</div>
        <div class="step">31.4r = 94.2 ⇒ r = 3 cm.</div>
        <div class="step">(ii) Volume = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 141.3 cm³.</div>
        <div class="final-answer">Radius = 3 cm, Volume = 141.3 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">5. It costs Rs 2200 to paint the inner curved surface...</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <path d="M65 20 L65 100 A 35 8 0 0 0 135 100 L135 20" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="20" rx="35" ry="8" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">VESSEL (HEIGHT 10m)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 10 m, Total cost = Rs 2200, Rate = Rs 20/m².</div>
        <div class="step">(i) Inner CSA = Total Cost / Rate = 2200 / 20 = 110 m².</div>
        <div class="step">(ii) 2πrh = 110 ⇒ 2 × (22/7) × r × 10 = 110</div>
        <div class="step">r = (110 × 7) / 440 = 1.75 m.</div>
        <div class="step">(iii) Volume = πr²h = (22/7) × 1.75² × 10 = 96.25 m³.</div>
        <div class="step">Capacity = 96.25 kilolitres.</div>
        <div class="final-answer">CSA = 110 m², Radius = 1.75 m, Capacity = 96.25 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">6. The capacity of a closed cylindrical vessel...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 30 L65 90 A 35 10 0 0 0 135 90 L135 30" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="90" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">CLOSED CYLINDRICAL VESSEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 1 m, Capacity = 15.4 L = 0.0154 m³.</div>
        <div class="step">πr²h = 0.0154 ⇒ (22/7) × r² × 1 = 0.0154</div>
        <div class="step">r² = (0.0154 × 7) / 22 = 0.0049 ⇒ r = 0.07 m.</div>
        <div class="step">Sheet needed = TSA = 2πr(r + h) = 2 × (22/7) × 0.07 × (1.07) = 0.4708 m².</div>
        <div class="final-answer">Sheet = 0.4708 m².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A lead pencil consists of a cylinder of wood with a solid cylinder of graphite filled in the interior. The diameter of the pencil is 7 mm and the diameter of the graphite is 1 mm. If the length of the pencil is 14 cm, find the volume of the wood and that of the graphite.</div>
        <svg viewBox="0 0 240 100" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <rect x="20" y="40" width="180" height="20" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <rect x="20" y="48" width="180" height="4" fill="#43A047" stroke="#43A047" stroke-width="1.5"/>
            <text x="110" y="35" fill="white" font-size="11" text-anchor="middle">WOODEN PENCIL</text>
            <text x="110" y="65" fill="#43A047" font-size="11" text-anchor="middle">GRAPHITE CORE</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">L = 14 cm. Graphite: r = 0.5 mm = 0.05 cm.</div>
        <div class="step">Vol of graphite = πr²L = (22/7) × 0.05² × 14 = 44 × 0.0025 = 0.11 cm³.</div>
        <div class="step">Pencil: R = 3.5 mm = 0.35 cm.</div>
        <div class="step">Vol of wood = π(R² - r²)L = (22/7) × (0.35² - 0.05²) × 14</div>
        <div class="step">= 44 × (0.1225 - 0.0025) = 44 × 0.12 = 5.28 cm³.</div>
        <div class="final-answer">Wood = 5.28 cm³, Graphite = 0.11 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A patient in a hospital is given soup daily in a cylindrical bowl of diameter 7 cm. If the bowl is filled with soup to a height of 4 cm, how much soup the hospital has to prepare daily to serve 250 patients?</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="35" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M65 30 L65 100 A 35 10 0 0 0 135 100 L135 30" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="70" rx="35" ry="10" fill="rgba(67, 160, 71, 0.3)" stroke="#43A047" stroke-width="1.5"/>
            <text x="145" y="75" fill="#43A047" font-size="11">SOUP</text>
            <text x="100" y="115" fill="white" font-size="10" text-anchor="middle">CYLINDRICAL BOWL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">r = 3.5 cm, h = 4 cm.</div>
        <div class="step">Vol of 1 bowl = πr²h = (22/7) × 3.5² × 4 = 154 cm³.</div>
        <div class="step">Vol for 250 patients = 154 × 250 = 38500 cm³ = 38.5 litres.</div>
        <div class="final-answer">Total Soup = 38.5 litres.</div>
    </div>
</body>
</html>`,
        "ex10.7": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. Find the volume of the right circular cone...</div>
        <svg viewBox="0 0 200 140" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 110 L100 20 L135 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="11" text-anchor="middle">CONE VOLUME = 1/3πr²h</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) r = 6, h = 7. Volume = (1/3)πr²h = (1/3) × (22/7) × 6 × 6 × 7 = 264 cm³.</div>
        <div class="step">(ii) r = 3.5, h = 12. Volume = (1/3) × (22/7) × 3.5 × 3.5 × 12 = 154 cm³.</div>
        <div class="final-answer">(i) 264 cm³, (ii) 154 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the capacity in litres of a conical vessel...</div>
        <svg viewBox="0 0 200 140" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 40 A 40 10 0 0 0 140 40 L 100 120 Z" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="40" rx="40" ry="10" fill="rgba(64, 196, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="25" fill="#43A047" font-size="11" text-anchor="middle">CONICAL VESSEL MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) r = 7, l = 25. h = √(l² - r²) = √(25² - 7²) = 24 cm.</div>
        <div class="step">Vol = (1/3)πr²h = (1/3) × (22/7) × 7 × 7 × 24 = 1232 cm³ = 1.232 L.</div>
        <div class="step">(ii) h = 12, l = 13. r = √(13² - 12²) = 5 cm.</div>
        <div class="step">Vol = (1/3) × (22/7) × 5 × 5 × 12 = 2200 / 7 cm³ = 11/35 L.</div>
        <div class="final-answer">(i) 1.232 L, (ii) 11/35 L.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The height of a cone is 15 cm. If its volume is 1570 cm³...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 110 L100 20 L135 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <line x1="100" y1="20" x2="100" y2="110" stroke="#43A047" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">h = 15 cm, V = 1570 cm³</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 15 cm, Volume = 1570 cm³.</div>
        <div class="step">(1/3)πr²h = 1570 ⇒ (1/3) × 3.14 × r² × 15 = 1570</div>
        <div class="step">15.7r² = 1570 ⇒ r² = 100 ⇒ r = 10 cm.</div>
        <div class="final-answer">Radius = 10 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">4. If the volume of a right circular cone of height 9 cm is 48π cm³...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 110 L100 20 L135 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="10" text-anchor="middle">Vol = 48π cm³, h = 9 cm</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">h = 9 cm, Vol = 48π cm³.</div>
        <div class="step">(1/3)πr²(9) = 48π ⇒ 3πr² = 48π</div>
        <div class="step">r² = 16 ⇒ r = 4 cm. Diameter = 8 cm.</div>
        <div class="final-answer">Diameter = 8 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">5. A conical pit of top diameter 3.5 m is 12 m deep. What is its capacity in kilolitres?</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="30" rx="40" ry="12" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M60 30 L100 120 L140 30 Z" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="white" font-size="11" text-anchor="middle">CONICAL PIT MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 3.5 m ⇒ r = 1.75 m. h = 12 m.</div>
        <div class="step">Vol = (1/3)πr²h = (1/3) × (22/7) × 1.75 × 1.75 × 12 = 38.5 m³.</div>
        <div class="step">Since 1 m³ = 1 kL, Capacity = 38.5 kL.</div>
        <div class="final-answer">Capacity = 38.5 kL.</div>
    </div>

    <div class="content-box">
        <div class="question">6. The volume of a right circular cone is 9856 cm³...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="35" ry="10" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <path d="M65 110 L100 20 L135 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="135" fill="#43A047" font-size="11" text-anchor="middle">CONE (Vol = 9856 cm³)</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Vol = 9856, d = 28 ⇒ r = 14 cm.</div>
        <div class="step">(i) (1/3) × (22/7) × 14 × 14 × h = 9856 ⇒ h = (9856 × 3) / 616 = 48 cm.</div>
        <div class="step">(ii) l = √(48² + 14²) = √(2304 + 196) = √2500 = 50 cm.</div>
        <div class="step">(iii) CSA = πrl = (22/7) × 14 × 50 = 2200 cm².</div>
        <div class="final-answer">Height = 48 cm, Slant Height = 50 cm, CSA = 2200 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A right triangle ABC with sides 5 cm, 12 cm and 13 cm is revolved about the side 12 cm. Find the volume of the solid so obtained.</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M100 20 L100 110 L140 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <ellipse cx="100" cy="110" rx="40" ry="10" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M60 110 L100 20 L140 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="115" y="65" fill="white" font-size="11">12 cm</text>
            <text x="120" y="125" fill="white" font-size="11">5 cm</text>
            <text x="100" y="10" fill="#43A047" font-size="10" text-anchor="middle">REVOLUTION MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Revolution about 12 cm side means h = 12 cm and r = 5 cm.</div>
        <div class="step">Vol = (1/3)πr²h = (1/3)π(5)²(12) = 100π cm³.</div>
        <div class="final-answer">Volume = 100π cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">8. If the triangle ABC in the Question 7 above is revolved about the side 5 cm...</div>
        <svg viewBox="0 0 200 140" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <ellipse cx="100" cy="110" rx="60" ry="15" fill="rgba(255, 214, 0, 0.05)" stroke="white" stroke-width="1.5"/>
            <path d="M40 110 L100 40 L160 110 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="110" y="75" fill="white" font-size="11">5 cm</text>
            <text x="120" y="125" fill="white" font-size="11">12 cm</text>
            <text x="100" y="30" fill="#43A047" font-size="10" text-anchor="middle">REVOLUTION MODEL 2</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Revolution about 5 cm side means h = 5 cm and r = 12 cm.</div>
        <div class="step">Vol = (1/3)π(12)²(5) = 240π cm³.</div>
        <div class="step">Ratio = 100π / 240π = 10/24 = 5:12.</div>
        <div class="final-answer">Volume = 240π cm³, Ratio = 5:12.</div>
    </div>

    <div class="content-box">
        <div class="question">9. A heap of wheat is in the form of a cone whose diameter is 10.5 m and height is 3 m. Find its volume. The heap is to be covered by canvas to protect it from rain. Find the area of the canvas required.</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M40 100 Q100 0 160 100 Z" fill="rgba(67, 160, 71, 0.3)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="100" rx="60" ry="15" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1"/>
            <text x="100" y="60" fill="white" font-size="12" text-anchor="middle" style="text-shadow: 1px 1px 2px black;">WHEAT HEAP</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 10.5 m ⇒ r = 5.25 m, h = 3 m.</div>
        <div class="step">Vol = (1/3)πr²h = (1/3) × (22/7) × 5.25 × 5.25 × 3 = 86.625 m³.</div>
        <div class="step">l = √(3² + 5.25²) = √36.5625 = 6.05 m approx.</div>
        <div class="step">Canvas Area = πrl = (22/7) × 5.25 × 6.05 = 99.825 m².</div>
        <div class="final-answer">Volume = 86.625 m³, Area = 99.825 m².</div>
    </div>
</body>
</html>`,
        "ex10.8": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(67, 160, 71, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #66BB6A !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #43A047 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #43A047 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(67, 160, 71, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(67, 160, 71, 0.2); color: #43A047; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Shape Guide: Sphere & Hemisphere</div>
        <svg viewBox="0 0 200 140" style="width: 200px; height: auto; margin: 10px auto; display: block;">
            <g transform="translate(-40, 0)">
                <circle cx="80" cy="70" r="40" fill="none" stroke="white" stroke-width="1.5"/>
                <ellipse cx="80" cy="70" rx="40" ry="10" fill="none" stroke="white" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="80" y="125" fill="white" font-size="10" text-anchor="middle">Sphere</text>
            </g>
            <g transform="translate(60, 0)">
                <path d="M40 70 A 40 40 0 0 0 120 70 Z" fill="none" stroke="white" stroke-width="1.5"/>
                <ellipse cx="80" cy="70" rx="40" ry="10" fill="none" stroke="white" stroke-width="1.5"/>
                <text x="80" y="125" fill="white" font-size="10" text-anchor="middle">Hemisphere</text>
            </g>
        </svg>
    </div>
    <div class="content-box">
        <div class="question">1. Find the volume of a sphere whose radius is...</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="60" rx="40" ry="10" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">SPHERE VOLUME = 4/3πr³</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) r = 7. Vol = (4/3)πr³ = (4/3) × (22/7) × 7³ = 1437.33 cm³.</div>
        <div class="step">(ii) r = 0.63. Vol = (4/3) × (22/7) × 0.63³ = 1.05 m³ approx.</div>
        <div class="final-answer">(i) 1437.33 cm³, (ii) 1.05 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the amount of water displaced...</div>
        <svg viewBox="0 0 200 120" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <line x1="60" y1="60" x2="140" y2="60" stroke="#43A047" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">DISPLACED WATER VOLUME</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) d = 28 ⇒ r = 14 cm. Vol = (4/3) × (22/7) × 14³ = 11498.67 cm³.</div>
        <div class="step">(ii) d = 0.21 ⇒ r = 0.105 m. Vol = (4/3) × (22/7) × 0.105³ = 0.004851 m³.</div>
        <div class="final-answer">(i) 11498.67 cm³, (ii) 0.004851 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The diameter of a metallic ball is 4.2 cm...</div>
        <div class="solution-header">Solution:</div>
        <svg viewBox="0 0 200 120" style="width: 140px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="60" r="40" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="60" rx="40" ry="10" fill="none" stroke="white" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="100" y="115" fill="#43A047" font-size="11" text-anchor="middle">METALLIC BALL MODEL</text>
        </svg>
        <div class="step">r = 2.1 cm. Vol = (4/3)πr³ = (4/3) × (22/7) × r³ = 38.808 cm³.</div>
        <div class="step">Mass = 38.808 × 8.9 = 345.39 g approx.</div>
        <div class="final-answer">Mass = 345.39 g.</div>
    </div>

    <div class="content-box">
        <div class="question">4. The diameter of the moon is approximately one-fourth...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <circle cx="60" cy="60" r="15" fill="rgba(255, 255, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="60" y="100" fill="white" font-size="10" text-anchor="middle">MOON</text>
            <circle cx="160" cy="60" r="45" fill="rgba(64, 196, 255, 0.2)" stroke="white" stroke-width="1.5"/>
            <text x="160" y="115" fill="white" font-size="10" text-anchor="middle">EARTH</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Let Earth radius be R, Moon radius be R/4.</div>
        <div class="step">Ratio = [(4/3)π(R/4)³] / [(4/3)πR³] = (1/4)³ = 1/64.</div>
        <div class="final-answer">Fraction = 1/64.</div>
    </div>

    <div class="content-box">
        <div class="question">5. How many litres of milk can a hemispherical bowl of diameter 10.5 cm hold?</div>
        <svg viewBox="0 0 200 100" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <path d="M60 40 A 40 40 0 0 0 140 40 Z" fill="rgba(255, 255, 255, 0.1)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="40" rx="40" ry="10" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="85" fill="#43A047" font-size="11" text-anchor="middle">MILK BOWL MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">r = 5.25 cm. Vol = (2/3)πr³ = (2/3) × (22/7) × 5.25³ = 303.1875 cm³.</div>
        <div class="step">Capacity = 303.1875 / 1000 = 0.303 litres approx.</div>
        <div class="final-answer">Capacity = 0.303 litres.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A hemispherical tank is made up of an iron sheet 1 cm thick...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M55 40 A 45 45 0 0 0 145 40 Z" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="2"/>
            <path d="M60 40 A 40 40 0 0 0 140 40 Z" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <ellipse cx="100" cy="40" rx="45" ry="12" fill="none" stroke="white" stroke-width="1.5"/>
            <text x="100" y="110" fill="#43A047" font-size="11" text-anchor="middle">HEMISPHERICAL IRON TANK</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">Inner radius r = 1 m, Outer radius R = 1.01 m.</div>
        <div class="step">Vol of iron = (2/3)π(R³ - r³) = (2/3) × (22/7) × (1.01³ - 1³)</div>
        <div class="step">= (44/21) × (1.030301 - 1) = 0.06348 m³ approx.</div>
        <div class="final-answer">Volume = 0.06348 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">7. Find the volume of a sphere whose surface area is 154 cm².</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Surface Area = 4πr² = 154 ⇒ r = 3.5 cm.</div>
        <div class="step">Volume = (4/3)πr³ = (4/3) × (22/7) × 3.5³ = 179.67 cm³.</div>
        <div class="final-answer">Volume = 179.67 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A dome of a building is in the form of a hemisphere...</div>
        <svg viewBox="0 0 200 120" style="width: 180px; height: auto; margin: 10px auto; display: block;">
            <path d="M50 100 A 50 50 0 0 1 150 100 Z" fill="rgba(255, 255, 255, 0.05)" stroke="white" stroke-width="2"/>
            <ellipse cx="100" cy="100" rx="50" ry="12" fill="rgba(67, 160, 71, 0.1)" stroke="white" stroke-width="1.5"/>
            <text x="100" y="130" fill="#43A047" font-size="12" text-anchor="middle">BUILDING DOME MODEL</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Area = Total Cost / Rate = 498.96 / 2 = 249.48 m².</div>
        <div class="step">(ii) 2πr² = 249.48 ⇒ r² = (249.48 × 7) / 44 = 39.69 ⇒ r = 6.3 m.</div>
        <div class="step">Volume = (2/3)πr³ = (2/3) × (22/7) × 6.3³ = 523.9 m³ approx.</div>
        <div class="final-answer">Area = 249.48 m², Volume = 523.9 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">9. Twenty seven solid iron spheres... form a sphere...</div>
        <svg viewBox="0 0 240 120" style="width: 220px; height: auto; margin: 10px auto; display: block;">
            <circle cx="40" cy="50" r="10" fill="rgba(67, 160, 71, 0.3)" stroke="white" stroke-width="0.5"/>
            <circle cx="65" cy="50" r="10" fill="rgba(67, 160, 71, 0.3)" stroke="white" stroke-width="0.5"/>
            <circle cx="90" cy="50" r="10" fill="rgba(67, 160, 71, 0.3)" stroke="white" stroke-width="0.5"/>
            <text x="65" y="80" fill="white" font-size="10" text-anchor="middle">27 SMALL SPHERES (r)</text>
            <path d="M110 50 L140 50" stroke="#43A047" stroke-width="3" marker-end="url(#arrow)"/>
            <circle cx="180" cy="50" r="30" fill="rgba(255, 214, 0, 0.4)" stroke="white" stroke-width="1.5"/>
            <text x="180" y="95" fill="white" font-size="10" text-anchor="middle">NEW SPHERE (r')</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Vol of 27 spheres = 27 × (4/3)πr³ = (4/3)πr'³</div>
        <div class="step">r'³ = 27r³ ⇒ r' = 3r.</div>
        <div class="step">(ii) S = 4πr², S' = 4πr'² = 4π(3r)² = 36πr².</div>
        <div class="step">Ratio S/S' = 4πr² / 36πr² = 1/9 = 1:9.</div>
        <div class="final-answer">Radius r' = 3r, Ratio = 1:9.</div>
    </div>

    <div class="content-box">
        <div class="question">10. A capsule of medicine is in the shape of a sphere of diameter 3.5 mm. How much medicine (in mm³) is needed to fill this capsule?</div>
        <svg viewBox="0 0 200 100" style="width: 160px; height: auto; margin: 10px auto; display: block;">
            <circle cx="100" cy="50" r="30" fill="rgba(67, 160, 71, 0.2)" stroke="white" stroke-width="1.5"/>
            <ellipse cx="100" cy="50" rx="30" ry="8" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="95" fill="white" font-size="12" text-anchor="middle">MEDICINE CAPSULE</text>
        </svg>
        <div class="solution-header">Solution:</div>
        <div class="step">d = 3.5 mm ⇒ r = 1.75 mm.</div>
        <div class="step">Vol = (4/3)πr³ = (4/3) × (22/7) × 1.75³ = 22.46 mm³ approx.</div>
        <div class="final-answer">Medicine = 22.46 mm³.</div>
    </div>
</body>
</html>`
    }
};
