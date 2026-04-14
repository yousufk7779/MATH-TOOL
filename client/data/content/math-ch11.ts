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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNTAuMCBBIDEwMCAxMDAgMCAwIDEgMjM2LjYwMjU0MDM3ODQ0Mzg1IDk5Ljk5OTk5OTk5OTk5OTk2IFoiIGZpbGw9IiNlMGY3ZmEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMTAwLjAwMDAwMDAwMDAwMDAzIDIzNi42MDI1NDAzNzg0NDM4OCBBIDEwMCAxMDAgMCAwIDEgNjMuMzk3NDU5NjIxNTU2MTQgOTkuOTk5OTk5OTk5OTk5OTkgTCAxMDAuMDAwMDAwMDAwMDAwMDMgMjM2LjYwMjU0MDM3ODQ0Mzg4IFoiIGZpbGw9IiNmZmNjYmMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE4MCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWN0b3I8L3RleHQ+PHRleHQgeD0iOTAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2VnbWVudDwvdGV4dD48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMiIGZpbGw9ImJsYWNrIi8+PHRleHQgeD0iMTQwIiB5PSIxNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPk88L3RleHQ+PC9zdmc+" alt="Sector and Segment Visual">
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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEyMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNDAuMCBBIDExMCAxMTAgMCAwIDEgMjA1LjAgNTQuNzM3MjA1NTgzNzExNzU2IFoiIGZpbGw9InBpbmsiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSI0MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTQwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0Y208L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NSBtaW48L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgeD0iMjA1IiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg==" alt="Sector Area Example">
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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjUwIiB5Mj0iMTUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSIyNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjE1MCIgeDI9IjE1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAxNTAgMjUwIEEgMTAwIDEwMCAwIDAgMCAyNTAgMTUwIEwgMTUwIDI1MCBaIiBmaWxsPSJvcmFuZ2UiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjE3MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MMKwPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMGNtPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWdtZW50PC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYWpvciBTZWN0b3I8L3RleHQ+PC9zdmc+" alt="Segment Area Example">
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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDE1MCAxNTAgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IFoiIGZpbGw9ImxpZ2h0Y3lhbiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IEwgMjAwLjAgNjMuMzk3NDU5NjIxNTU2MTQgWiIgZmlsbD0iY3lhbiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTgwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjYwwrA8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIxY208L3RleHQ+PC9zdmc+" alt="Semicircles in Square">
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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDE1MCAxNTAgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IFoiIGZpbGw9ImxpZ2h0Z3JlZW4iIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE4MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42MMKwPC90ZXh0Pjx0ZXh0IHg9IjIxMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42Y208L3RleHQ+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSIzIiBmaWxsPSJibGFjayIvPjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BcmVhIG9mIFNlY3Rvcj88L3RleHQ+PC9zdmc+" alt="Sector Area Calculation">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 6 cm. Angle θ = 60°.</div>
        <div class="step">Area of sector = (θ/360) × πr²</div>
        <div class="step">= (60/360) × (22/7) × 6 × 6 = 132/7 cm².</div>
        <div class="final-answer">Area = 132/7 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the area of a quadrant of a circle whose circumference is 22 cm.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNTAuMCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IFoiIGZpbGw9ImxpZ2h0Ymx1ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTgwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjkwwrA8L3RleHQ+PHRleHQgeD0iMTYwIiB5PSIyNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNpcmN1bWZlcmVuY2UgPSAyMmNtPC90ZXh0Pjwvc3ZnPg==" alt="Quadrant Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Circumference = 2πr = 22 cm.</div>
        <div class="step">2 × (22/7) × r = 22 => r = 3.5 cm.</div>
        <div class="step">Quadrant Area = (1/4) × πr² = (1/4) × (22/7) × 3.5 × 3.5 = 77/8 cm².</div>
        <div class="final-answer">Area = 77/8 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">3. The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEyMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNDAuMCBBIDExMCAxMTAgMCAwIDEgMjA1LjAgNTQuNzM3MjA1NTgzNzExNzU2IFoiIGZpbGw9InBpbmsiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSI0MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTQwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0Y208L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NSBtaW48L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgeD0iMjA1IiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg==" alt="Clock Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 14 cm. Angle in 5 mins = (360/60) × 5 = 30°.</div>
        <div class="step">Area = (30/360) × (22/7) × 14 × 14 = 154/3 cm².</div>
        <div class="final-answer">Area = 154/3 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding: (i) minor segment (ii) major sector. (Use π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjUwIiB5Mj0iMTUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSIyNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjE1MCIgeDI9IjE1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAxNTAgMjUwIEEgMTAwIDEwMCAwIDAgMCAyNTAgMTUwIEwgMTUwIDI1MCBaIiBmaWxsPSJvcmFuZ2UiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjE3MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MMKwPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMGNtPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWdtZW50PC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYWpvciBTZWN0b3I8L3RleHQ+PC9zdmc+" alt="Chord 90 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 10 cm. θ = 90°.</div>
        <div class="step">(i) Minor Sector Area = (1/4) × 3.14 × 100 = 78.5 cm². Triangle Area = (1/2) × 10 × 10 = 50 cm².</div>
        <div class="step">Minor Segment Area = 78.5 - 50 = 28.5 cm².</div>
        <div class="step">(ii) Major Sector Area = 314 - 78.5 = 235.5 cm².</div>
        <div class="final-answer">Minor Segment: 28.5 cm²; Major Sector: 235.5 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">5. In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find (i) arc length (ii) sector area (iii) segment area.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDE1MCAxNTAgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IFoiIGZpbGw9ImxpZ2h0Y3lhbiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IEwgMjAwLjAgNjMuMzk3NDU5NjIxNTU2MTQgWiIgZmlsbD0iY3lhbiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTgwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjYwwrA8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIxY208L3RleHQ+PC9zdmc+" alt="Circle 60 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 21 cm. θ = 60°.</div>
        <div class="step">(i) Arc length = (60/360) × 2 × (22/7) × 21 = 22 cm.</div>
        <div class="step">(ii) Sector area = (60/360) × (22/7) × 21 × 21 = 231 cm².</div>
        <div class="step">(iii) Segment area = Sector - Triangle = 231 - (√3/4)(21)² = (231 - 190.95) cm².</div>
        <div class="final-answer">Arc: 22 cm; Sector: 231 cm²; Segment: 441√3 / 4 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">6. A chord radius 15 cm subtends 60° at centre. Find areas of minor and major segments. (Use π = 3.14, √3 = 1.73)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjM2LjYwMjU0MDM3ODQ0Mzg1IiB5Mj0iOTkuOTk5OTk5OTk5OTk5OTYiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjE1MCIgeTE9IjE1MCIgeDI9IjIzNi42MDI1NDAzNzg0NDM4OCIgeTI9IjIwMC4wIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIyMzYuNjAyNTQwMzc4NDQzODUiIHkxPSI5OS45OTk5OTk5OTk5OTk5NiIgeDI9IjIzNi42MDI1NDAzNzg0NDM4OCIgeTI9IjIwMC4wIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDIzNi42MDI1NDAzNzg0NDM4NSA5OS45OTk5OTk5OTk5OTk5NiBBIDEwMCAxMDAgMCAwIDEgMjM2LjYwMjU0MDM3ODQ0Mzg4IDIwMC4wIEwgMjM2LjYwMjU0MDM3ODQ0Mzg1IDk5Ljk5OTk5OTk5OTk5OTk2IFoiIGZpbGw9ImdyYXkiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjI0MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNWNtPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42MMKwPC90ZXh0Pjwvc3ZnPg==" alt="Chord 60 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 15 cm, θ = 60°. Sector Area = 117.75 cm². Triangle Area = 97.31 cm².</div>
        <div class="step">Minor Segment = 117.75 - 97.31 = 20.44 cm². Major = 706.5 - 20.44 = 686.06 cm².</div>
        <div class="final-answer">Minor: 20.44 cm²; Major: 686.06 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A chord radius 12 cm subtends 120° at centre. Find area of segment. (Use π = 3.14, √3 = 1.73)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNjMuMzk3NDU5NjIxNTU2MTQiIHkxPSI5OS45OTk5OTk5OTk5OTk5OSIgeDI9IjIzNi42MDI1NDAzNzg0NDM4NSIgeTI9Ijk5Ljk5OTk5OTk5OTk5OTk2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDYzLjM5NzQ1OTYyMTU1NjE0IDk5Ljk5OTk5OTk5OTk5OTk5IEEgMTAwIDEwMCAwIDAgMCAyMzYuNjAyNTQwMzc4NDQzODUgOTkuOTk5OTk5OTk5OTk5OTYgTCA2My4zOTc0NTk2MjE1NTYxNCA5OS45OTk5OTk5OTk5OTk5OSBaIiBmaWxsPSJwdXJwbGUiIG9wYWNpdHk9IjAuMyIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSI2My4zOTc0NTk2MjE1NTYxNCIgeTI9Ijk5Ljk5OTk5OTk5OTk5OTk5IiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIyMzYuNjAyNTQwMzc4NDQzODUiIHkyPSI5OS45OTk5OTk5OTk5OTk5NiIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIxNTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTIwwrA8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyY208L3RleHQ+PC9zdmc+" alt="Chord 120 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">Sector Area = 150.72 cm². Triangle Area = 144 × sin 60° × cos 60° = 62.28 cm².</div>
        <div class="step">Segment Area = 150.72 - 62.28 = 88.44 cm².</div>
        <div class="final-answer">Area = 88.44 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">8. A horse is tied to a corner of a 15m square field by a 5m rope. Find (i) grazing area (ii) increase if rope was 10m.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJsaWdodGdyZWVuIiBzdHJva2U9ImdyZWVuIi8+PHBhdGggZD0iTSAyMCAyMCBMIDIwIDEwMCBBIDgwIDgwIDAgMCAwIDEwMCAyMCBaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJibGFjayIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iMzAiIHI9IjUiIGZpbGw9ImJyb3duIi8+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HcmF6aW5nIEFyZWE8L3RleHQ+PHRleHQgeD0iMTIwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdyYXNzIEZpZWxkPC90ZXh0Pjwvc3ZnPg==" alt="Horse Grazing">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Area = (1/4) × 3.14 × 25 = 19.625 m².</div>
        <div class="step">(ii) New Area (10m rope) = 78.5 m². Increase = 78.5 - 19.625 = 58.875 m².</div>
        <div class="final-answer">Grazing Area: 19.625 m²; Increase: 58.875 m².</div>
    </div>

    <div class="content-box">
        <div class="question">9. A brooch (d=35mm) uses 5 diameters. Find (i) wire length (ii) area of each sector.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMjUwLjAiIHkxPSIxNTAuMCIgeDI9IjUwLjAiIHkyPSIxNTAuMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjIzMC45MDE2OTk0Mzc0OTQ3NiIgeTE9IjIwOC43Nzg1MjUyMjkyNDczMiIgeDI9IjY5LjA5ODMwMDU2MjUwNTI2IiB5Mj0iOTEuMjIxNDc0NzcwNzUyNjgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxODAuOTAxNjk5NDM3NDk0NzYiIHkxPSIyNDUuMTA1NjUxNjI5NTE1MzYiIHgyPSIxMTkuMDk4MzAwNTYyNTA1MjYiIHkyPSI1NC44OTQzNDgzNzA0ODQ2NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjExOS4wOTgzMDA1NjI1MDUyNyIgeTE9IjI0NS4xMDU2NTE2Mjk1MTUzNiIgeDI9IjE4MC45MDE2OTk0Mzc0OTQ3MyIgeTI9IjU0Ljg5NDM0ODM3MDQ4NDYzNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjY5LjA5ODMwMDU2MjUwNTI3IiB5MT0iMjA4Ljc3ODUyNTIyOTI0NzMyIiB4Mj0iMjMwLjkwMTY5OTQzNzQ5NDczIiB5Mj0iOTEuMjIxNDc0NzcwNzUyNjgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMCBTZWN0b3JzPC90ZXh0Pjx0ZXh0IHg9IjE1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPmQgPSAzNW1tPC90ZXh0Pjwvc3ZnPg==" alt="Brooch Design">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) Length = πd + 5d = 110 + 175 = 285 mm.</div>
        <div class="step">(ii) 10 sectors. Each Sector Area = (1/10) × (22/7) × (35/2) × (35/2) = 96.25 mm².</div>
        <div class="final-answer">Length: 285 mm; Area: 96.25 mm².</div>
    </div>

    <div class="content-box">
        <div class="question">10. Umbrella with 8 ribs (r=45cm). Area between two consecutive ribs.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMjUwLjAiIHkxPSIxNTAuMCIgeDI9IjUwLjAiIHkyPSIxNTAuMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjIyMC43MTA2NzgxMTg2NTQ3NiIgeTE9IjIyMC43MTA2NzgxMTg2NTQ3NiIgeDI9Ijc5LjI4OTMyMTg4MTM0NTI0IiB5Mj0iNzkuMjg5MzIxODgxMzQ1MjQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAuMCIgeTE9IjI1MC4wIiB4Mj0iMTUwLjAiIHkyPSI1MC4wIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNzkuMjg5MzIxODgxMzQ1MjYiIHkxPSIyMjAuNzEwNjc4MTE4NjU0NzYiIHgyPSIyMjAuNzEwNjc4MTE4NjU0NzYiIHkyPSI3OS4yODkzMjE4ODEzNDUyNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTUwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjggUmliczwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yID0gNDVjbTwvdGV4dD48L3N2Zz4=" alt="Umbrella Ribs">
        <div class="solution-header">Solution:</div>
        <div class="step">θ = 45°. Area = (45/360) × (22/7) × 45² = 22275/28 cm².</div>
        <div class="final-answer">Area = 22275/28 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">11. Two car wipers (r=25cm, θ=115°). Total swept area.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDEwMCAyMDAgTCAzOC43MTY0NDQ1NTA0ODE3NiAxNDguNTc2OTkxMjI1MDc2ODUgQSA4MCA4MCAwIDAgMSAxNzIuNTA0NjIyOTYyOTMyIDE2Ni4xOTA1MzkwNjA3NDQwNyBaIiBmaWxsPSJsaWdodGJsdWUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMjIwIDIwMCBMIDE0Ny40OTUzNzcwMzcwNjggMTY2LjE5MDUzOTA2MDc0NDA3IEEgODAgODAgMCAwIDEgMjgxLjI4MzU1NTQ0OTUxODI1IDE0OC41NzY5OTEyMjUwNzY4MiBaIiBmaWxsPSJsaWdodGJsdWUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE2MCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ud28gV2lwZXJzPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMTXCsDwvdGV4dD48dGV4dCB4PSIyMjAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTE1wrA8L3RleHQ+PC9zdmc+" alt="Wipers Problem">
        <div class="solution-header">Solution:</div>
        <div class="step">Total Area = 2 × (115/360) × (22/7) × 25² = 158125/126 cm².</div>
        <div class="final-answer">Area = 158125/126 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">12. Lighthouse red light (r=16.5km, θ=80°). Warning area.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2UwZjdmYSIvPjxwYXRoIGQ9Ik0gMTUwIDI1MCBMIDU4LjA3NDY2NjgyNTcyMjY0NSAxNzIuODY1NDg2ODM3NjE1MyBBIDEyMCAxMjAgMCAwIDEgMjEwLjAgMTQ2LjA3Njk1MTU0NTg2NzM2IFoiIGZpbGw9InJlZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDE1MCAyNTAgTCA1OC4wNzQ2NjY4MjU3MjI2NDUgMTcyLjg2NTQ4NjgzNzYxNTMgQSAxMjAgMTIwIDAgMCAxIDIxMC4wIDE0Ni4wNzY5NTE1NDU4NjczNiBaIiBmaWxsPSJyZWQiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjE0MCIgeT0iMjQwIiB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGZpbGw9ImdyYXkiLz48dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODDCsCBTZWN0b3I8L3RleHQ+PC9zdmc+" alt="Lighthouse Sector">
        <div class="solution-header">Solution:</div>
        <div class="step">Area = (80/360) × 3.14 × (16.5)² = 189.97 km².</div>
        <div class="final-answer">Area = 189.97 km².</div>
    </div>

    <div class="content-box">
        <div class="question">13. Table cover with 6 designs (r=28cm). Cost at ₹ 0.35/cm². (Use √3=1.7)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDI1MC4wIDE1MC4wIEEgMTAwIDEwMCAwIDAgMSAyMDAuMCAyMzYuNjAyNTQwMzc4NDQzODUgTCAyNTAuMCAxNTAuMCBaIiBmaWxsPSJicm93biIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDIwMC4wIDIzNi42MDI1NDAzNzg0NDM4NSBBIDEwMCAxMDAgMCAwIDEgMTAwLjAwMDAwMDAwMDAwMDAzIDIzNi42MDI1NDAzNzg0NDM4OCBMIDIwMC4wIDIzNi42MDI1NDAzNzg0NDM4NSBaIiBmaWxsPSJicm93biIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDEwMC4wMDAwMDAwMDAwMDAwMyAyMzYuNjAyNTQwMzc4NDQzODggQSAxMDAgMTAwIDAgMCAxIDUwLjAgMTUwLjAgTCAxMDAuMDAwMDAwMDAwMDAwMDMgMjM2LjYwMjU0MDM3ODQ0Mzg4IFoiIGZpbGw9ImJyb3duIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gNTAuMCAxNTAuMCBBIDEwMCAxMDAgMCAwIDEgOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgTCA1MC4wIDE1MC4wIFoiIGZpbGw9ImJyb3duIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgQSAxMDAgMTAwIDAgMCAxIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEwgOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgWiIgZmlsbD0iYnJvd24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IEwgMjAwLjAgNjMuMzk3NDU5NjIxNTU2MTQgWiIgZmlsbD0iYnJvd24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyNTAuMCwxNTAuMCAyMDAuMCwyMzYuNjAyNTQwMzc4NDQzODUgMTAwLjAwMDAwMDAwMDAwMDAzLDIzNi42MDI1NDAzNzg0NDM4OCA1MC4wLDE1MC4wIDk5Ljk5OTk5OTk5OTk5OTk2LDYzLjM5NzQ1OTYyMTU1NjE1IDIwMC4wLDYzLjM5NzQ1OTYyMTU1NjE0IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIi8+PHRleHQgeD0iMTUwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRlc2lnbiBBcmVhczwvdGV4dD48L3N2Zz4=" alt="Round Table Design">
        <div class="solution-header">Solution:</div>
        <div class="step">One sector = 410.67. Triangle = 333.2. Design area = 77.47.</div>
        <div class="step">Total area = 6 × 77.47 = 464.82 cm². Cost = 464.82 × 0.35 = 162.68.</div>
        <div class="final-answer">Cost ≈ ₹ 162.68.</div>
    </div>

    <div class="content-box">
        <div class="question">14. Area of sector with angle p and radius R.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ij48cGF0aCBkPSJNIDE1MCAxNTAgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IFoiIGZpbGw9ImxpZ2h0Z3JleSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTUwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFuZ2xlIHAsIFJhZGl1cyBSPC90ZXh0Pjwvc3ZnPg==" alt="Formula Check">
        <div class="solution-header">Solution:</div>
        <div class="step">(p/360°) × πR² = (p/720°) × 2πR².</div>
        <div class="final-answer">Option (D).</div>
    </div>
</body>
</html>`
    }
};
