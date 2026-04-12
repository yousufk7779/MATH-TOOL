import { ChapterContent } from "../chapterContent";
import easyMcqsCh11 from "../easy_mcqs_ch11.json";

export const mathCh11: ChapterContent = {
    id: "ch11",
    number: 11,
    title: "Areas Related to Circles",
    introduction: "In this chapter, we explore the measurement of planar figures related to circles, including sectors and segments, using algebraic and geometric principles.",
    definitions: [
        { term: "Sector", description: "The region between two radii and the corresponding arc of a circle." },
        { term: "Segment", description: "The region between a chord and the corresponding arc of a circle." }
    ],
    keyPoints: [
        "Area of a circle = πr²",
        "Circumference of a circle = 2πr",
        "Area of a sector of angle θ = (θ/360) × πr²",
        "Length of an arc of a sector of angle θ = (θ/360) × 2πr"
    ],
    formulas: [
        { name: "Area of Sector", formula: "(θ/360) × πr²" },
        { name: "Area of Segment", formula: "Area of Sector - Area of Triangle" }
    ],
    crux: [
        "Always identify the radius and the angle subtended at the center.",
        "For segments, area of the triangle can often be found using (1/2)r² sin θ."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 11.1", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: easyMcqsCh11 as any, // Integrated easy MCQs

    summary: [
        "We learned to calculate area and perimeter of circles and their parts.",
        "Applied these concepts to solve real-world problems like clock hands and brooch designs."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas Related to Circles - Overview</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
        body { font-family: 'Noto Sans', sans-serif !important; margin: 0; padding: 15px; background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; }
        .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #AB47BC; padding-bottom: 10px; font-family: 'Nunito', sans-serif; }
        .logo { color: #AB47BC; font-size: 24px; font-weight: normal; }
        .chapter-title { text-align: center; color: #fff; font-size: 20px; font-weight: normal; margin: 10px 0; font-family: 'Noto Sans', sans-serif; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; }
        .section-title { color: #AB47BC !important; font-weight: normal; font-size: 1.2em; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding-bottom: 5px; }
        .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; padding: 10px; margin: 10px 0; font-family: 'Nunito', sans-serif; color: #fff !important; }
        .step { margin-bottom: 8px; font-size: 1.1em; color: #ccc !important; line-height: 1.5; }
        img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border-radius: 6px; padding: 5px; background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); }
        @media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
        * { font-family: 'Noto Sans', sans-serif !important; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">We are familiar with the area and circumference of a circle. In this chapter, we explore areas of two special parts of a circular region: Sector and Segment.</div>
        <img src="intro_visual.svg" alt="Sector and Segment Visual">
    </div>

    <div class="content-box">
        <div class="section-title">2. Sector of a Circle</div>
        <div class="step">The portion (or part) of the circular region enclosed by two radii and the corresponding arc is called a sector of the circle.</div>
        <div class="formula-box">
            Area of Sector = (θ/360) × πr²<br>
            Length of Arc = (θ/360) × 2πr
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Segment of a Circle</div>
        <div class="step">The portion (or part) of the circular region enclosed between a chord and the corresponding arc is called a segment of the circle.</div>
        <div class="formula-box">
            Area of Segment = Area of Corresponding Sector - Area of Corresponding Triangle
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Key Values</div>
        <div class="formula-box">
            π ≈ 22/7 or 3.14<br>
            Area of Circle = πr²<br>
            Circumference = 2πr
        </div>
    </div>
</body>
</html>`,
    htmlExercises: {
        examples: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas Related to Circles - Examples</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
        body { font-family: 'Noto Sans', sans-serif !important; margin: 0; padding: 15px; background: transparent !important; color: #fff !important; text-align: justify !important; width: 100%; overflow-x: hidden; padding-bottom: 150px !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 8px; padding: 15px; margin-bottom: 20px; display: flow-root; }
        .question { color: #AB47BC !important; font-weight: normal; margin-bottom: 15px; font-size: 1.1em; line-height: 1.6; }
        .solution-header { color: #AB47BC !important; font-weight: normal; margin-bottom: 8px; font-size: 1em; }
        .step { margin-bottom: 8px; font-size: 1em; color: #ccc !important; line-height: 1.6; }
        .final-answer { color: #AB47BC !important; font-weight: normal; margin-top: 15px; font-size: 1.1em; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; }
        img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 260px; height: auto; border-radius: 6px; padding: 5px; background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); }
        @media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
        * { font-family: 'Noto Sans', sans-serif !important; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">Example 1. Find the area of the sector of a circle with radius 4 cm and of angle 30°. Also, find the area of the corresponding major sector (Use π = 3.14).</div>
        <img src="example_1.svg" alt="Sector Area Example">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 4 cm. Angle θ = 30°.</div>
        <div class="step">Area of Sector = (θ/360) × πr²</div>
        <div class="step">= (30/360) × 3.14 × 16</div>
        <div class="step">= (1/12) × 3.14 × 16</div>
        <div class="step">= 4.19 cm².</div>
        <div class="step">Major Sector Area = Area Circle - Area Minor Sector</div>
        <div class="step">= 3.14 × 16 - 4.19</div>
        <div class="step">= 50.24 - 4.19 = 46.05 cm².</div>
        <div class="final-answer">Sector Area: 4.19 cm²; Major Sector Area: 46.05 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. Find the area of the segment AYB shown in Fig., if radius of the circle is 21 cm and ∠AOB = 120°. (Use π = 22/7)</div>
        <img src="example_2.svg" alt="Segment Area Example">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 21 cm. Angle θ = 120°.</div>
        <div class="step">Area of Sector OAYB = (120/360) × (22/7) × 21 × 21</div>
        <div class="step">= (1/3) × 22 × 3 × 21 = 462 cm².</div>
        <div class="step">Area of Triangle OAB: Draw OM ⊥ AB. In right ΔOMA, ∠AOM = 60°.</div>
        <div class="step">OM = 21 cos 60° = 21/2. AM = 21 sin 60° = 21√3 / 2.</div>
        <div class="step">Base AB = 2AM = 21√3.</div>
        <div class="step">Area ΔOAB = (1/2) × 21√3 × (21/2) = (441√3 / 4) cm².</div>
        <div class="step">Area of Segment = 462 - (441√3 / 4) cm².</div>
        <div class="step">Using √3 ≈ 1.73, Area = 462 - 190.95 = 271.05 cm².</div>
        <div class="final-answer">Area of Segment = 271.05 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. Find the area of the shaded region in Fig., where ABCD is a square of side 14 cm and APD and BPC are semicircles.</div>
        <img src="example_3.svg" alt="Semicircles in Square">
        <div class="solution-header">Solution:</div>
        <div class="step">Side of square = 14 cm. Radius of semicircle = 14/2 = 7 cm.</div>
        <div class="step">Area of Square = 14 × 14 = 196 cm².</div>
        <div class="step">Area of 2 Semicircles = 2 × (1/2)πr² = πr².</div>
        <div class="step">= (22/7) × 7 × 7 = 154 cm².</div>
        <div class="step">Area of Shaded = Area Square - Area 2 Semicircles = 196 - 154 = 42 cm².</div>
        <div class="final-answer">Shaded Area = 42 cm².</div>
    </div>
</body>
</html>`,
        exercise1: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas Related to Circles - Exercise 11.1</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
        body { font-family: 'Noto Sans', sans-serif !important; margin: 0; padding: 15px; background: transparent !important; color: #fff !important; text-align: justify !important; width: 100%; overflow-x: hidden; padding-bottom: 150px !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 8px; padding: 15px; margin-bottom: 25px; display: flow-root; }
        .question { color: #AB47BC !important; font-weight: normal; margin-bottom: 15px; font-size: 1.1em; line-height: 1.6; }
        .solution-header { color: #AB47BC !important; font-weight: normal; margin-bottom: 8px; font-size: 1em; }
        .step { margin-bottom: 8px; font-size: 1em; color: #ccc !important; line-height: 1.6; }
        .final-answer { color: #AB47BC !important; font-weight: normal; margin-top: 15px; font-size: 1.1em; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; }
        img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 260px; height: auto; border-radius: 6px; padding: 5px; background: transparent !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); }
        @media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
        * { font-family: 'Noto Sans', sans-serif !important; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60°.</div>
        <img src="ex11_1_q1.svg" alt="Sector Area Calculation">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 6 cm. Angle θ = 60°.</div>
        <div class="step">Area of sector = (θ/360) × πr²</div>
        <div class="step">= (60/360) × (22/7) × 6 × 6 = 132/7 cm².</div>
        <div class="final-answer">Area = 132/7 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the area of a quadrant of a circle whose circumference is 22 cm.</div>
        <img src="ex11_1_q2.svg" alt="Quadrant Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Circumference = 2πr = 22 cm.</div>
        <div class="step">2 × (22/7) × r = 22 => r = 3.5 cm.</div>
        <div class="step">Quadrant Area = (1/4) × πr² = (1/4) × (22/7) × 3.5 × 3.5 = 77/8 cm².</div>
        <div class="final-answer">Area = 77/8 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">3. The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.</div>
        <img src="ex11_1_q3.svg" alt="Clock Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 14 cm. Angle in 5 mins = (360/60) × 5 = 30°.</div>
        <div class="step">Area = (30/360) × (22/7) × 14 × 14 = 154/3 cm².</div>
        <div class="final-answer">Area = 154/3 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding: (i) minor segment (ii) major sector. (Use π = 3.14)</div>
        <img src="ex11_1_q4.svg" alt="Chord 90 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 10 cm. θ = 90°.</div>
        <div class="step">(i) Minor Sector Area = (1/4) × 3.14 × 100 = 78.5 cm². Triangle Area = (1/2) × 10 × 10 = 50 cm².</div>
        <div class="step">Minor Segment Area = 78.5 - 50 = 28.5 cm².</div>
        <div class="step">(ii) Major Sector Area = 314 - 78.5 = 235.5 cm².</div>
        <div class="final-answer">Minor Segment: 28.5 cm²; Major Sector: 235.5 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">5. In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find (i) arc length (ii) sector area (iii) segment area.</div>
        <img src="ex11_1_q5.svg" alt="Circle 60 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 21 cm. θ = 60°.</div>
        <div class="step">(i) Arc length = (60/360) × 2 × (22/7) × 21 = 22 cm.</div>
        <div class="step">(ii) Sector area = (60/360) × (22/7) × 21 × 21 = 231 cm².</div>
        <div class="step">(iii) Segment area = Sector - Triangle = 231 - (√3/4)(21)² = (231 - 190.95) cm².</div>
        <div class="final-answer">Arc: 22 cm; Sector: 231 cm²; Segment: 441√3 / 4 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">6. A chord radius 15 cm subtends 60° at centre. Find areas of minor and major segments. (Use π = 3.14, √3 = 1.73)</div>
        <img src="ex11_1_q6.svg" alt="Chord 60 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 15 cm, θ = 60°. Sector Area = 117.75 cm². Triangle Area = 97.31 cm².</div>
        <div class="step">Minor Segment = 117.75 - 97.31 = 20.44 cm². Major = 706.5 - 20.44 = 686.06 cm².</div>
        <div class="final-answer">Minor: 20.44 cm²; Major: 686.06 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A chord radius 12 cm subtends 120° at centre. Find area of segment. (Use π = 3.14, √3 = 1.73)</div>
        <img src="ex11_1_q7.svg" alt="Chord 120 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">Sector Area = 150.72 cm². Triangle Area = 144 × sin 60° × cos 60° = 62.28 cm².</div>
        <div class="step">Segment Area = 150.72 - 62.28 = 88.44 cm².</div>
        <div class="final-answer">Area = 88.44 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">8. A horse is tied to a corner of a 15m square field by a 5m rope. Find (i) grazing area (ii) increase if rope was 10m.</div>
        <img src="ex11_1_q8.svg" alt="Horse Grazing">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Area = (1/4) × 3.14 × 25 = 19.625 m².</div>
        <div class="step">(ii) New Area (10m rope) = 78.5 m². Increase = 78.5 - 19.625 = 58.875 m².</div>
        <div class="final-answer">Grazing Area: 19.625 m²; Increase: 58.875 m².</div>
    </div>

    <div class="content-box">
        <div class="question">9. A brooch (d=35mm) uses 5 diameters. Find (i) wire length (ii) area of each sector.</div>
        <img src="ex11_1_q9.svg" alt="Brooch Design">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Length = πd + 5d = 110 + 175 = 285 mm.</div>
        <div class="step">(ii) 10 sectors. Each Sector Area = (1/10) × (22/7) × (35/2) × (35/2) = 96.25 mm².</div>
        <div class="final-answer">Length: 285 mm; Area: 96.25 mm².</div>
    </div>

    <div class="content-box">
        <div class="question">10. Umbrella with 8 ribs (r=45cm). Area between two consecutive ribs.</div>
        <img src="ex11_1_q10.svg" alt="Umbrella Ribs">
        <div class="solution-header">Solution:</div>
        <div class="step">θ = 45°. Area = (45/360) × (22/7) × 45² = 22275/28 cm².</div>
        <div class="final-answer">Area = 22275/28 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">11. Two car wipers (r=25cm, θ=115°). Total swept area.</div>
        <img src="ex11_1_q11.svg" alt="Wipers Problem">
        <div class="solution-header">Solution:</div>
        <div class="step">Total Area = 2 × (115/360) × (22/7) × 25² = 158125/126 cm².</div>
        <div class="final-answer">Area = 158125/126 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">12. Lighthouse red light (r=16.5km, θ=80°). Warning area.</div>
        <img src="ex11_1_q12.svg" alt="Lighthouse Sector">
        <div class="solution-header">Solution:</div>
        <div class="step">Area = (80/360) × 3.14 × (16.5)² = 189.97 km².</div>
        <div class="final-answer">Area = 189.97 km².</div>
    </div>

    <div class="content-box">
        <div class="question">13. Table cover with 6 designs (r=28cm). Cost at ₹ 0.35/cm². (Use √3=1.7)</div>
        <img src="ex11_1_q13.svg" alt="Round Table Design">
        <div class="solution-header">Solution:</div>
        <div class="step">One sector = 410.67. Triangle = 333.2. Design area = 77.47.</div>
        <div class="step">Total area = 6 × 77.47 = 464.82 cm². Cost = 464.82 × 0.35 = 162.68.</div>
        <div class="final-answer">Cost ≈ ₹ 162.68.</div>
    </div>

    <div class="content-box">
        <div class="question">14. Area of sector with angle p and radius R.</div>
        <img src="ex11_1_q14.svg" alt="Formula Check">
        <div class="solution-header">Solution:</div>
        <div class="step">(p/360°) × πR² = (p/720°) × 2πR².</div>
        <div class="final-answer">Option (D).</div>
    </div>
</body>
</html>`
    }
};
