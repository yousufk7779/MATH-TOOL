import { ChapterContent } from "../chapterContent";

export const mathCh11: ChapterContent = {
    id: "ch11",
    number: 11,
    title: "Areas Related to Circles",
    introduction: "In this chapter, we explore the measurement of planar figures related to circles, including sectors and segments, using algebraic and geometric principles.",
    definitions: [
        { term: "Sector", description: "The region between two radii and the corresponding arc of a circle." },
        { term: "Segment", description: "The region between a chord and the corresponding arc of a circle." },
        { term: "Arc", description: "A part of the circumference of a circle." }
    ],
    keyPoints: [
        "Area of a circle = πr²",
        "Circumference of a circle = 2πr",
        "Area of a sector of angle θ = (θ/360) × πr²",
        "Length of an arc of a sector of angle θ = (θ/360) × 2πr"
    ],
    formulas: [
        { name: "Area of Sector", formula: "<sup>θ</sup>&frasl;<sub>360</sub> × πr²" },
        { name: "Arc Length", formula: "<sup>θ</sup>&frasl;<sub>360</sub> × 2πr" },
        { name: "Area of Segment", formula: "Area of Sector - Area of Triangle" }
    ],
    crux: [
        "Always identify the radius and the angle subtended at the center.",
        "For segments, area of the triangle can often be found using (1/2)r² sin θ."
    ],
    exercises: [
        { id: "examples", name: "Examples", questions: [] },
        { id: "exercise1", name: "Exercise 11.1", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
		{
				"id": "mcq1",
				"question": "<span style=\"font-weight: normal;\">Area of a sector of angle p (in degrees) of a circle with radius R is:</span>",
				"options": [
						"(p/180) × 2πR",
						"(p/180) × πR²",
						"(p/360) × 2πR",
						"(p/720) × 2πR²"
				],
				"correctAnswer": "(p/720) × 2πR²"
		},
		{
				"id": "mcq2",
				"question": "<span style=\"font-weight: normal;\">If the sum of the circumferences of two circles with radii R₁ and R₂ is equal to the circumference of a circle of radius R, then:</span>",
				"options": [
						"R₁ + R₂ = R",
						"R₁ + R₂ > R",
						"R₁ + R₂ < R",
						"None of these"
				],
				"correctAnswer": "R₁ + R₂ = R"
		},
		{
				"id": "mcq3",
				"question": "<span style=\"font-weight: normal;\">If the ratio of the areas of two circles is 4:9, then the ratio of their circumferences is:</span>",
				"options": [
						"2:3",
						"4:9",
						"3:2",
						"16:81"
				],
				"correctAnswer": "2:3"
		},
		{
				"id": "mcq4",
				"question": "<span style=\"font-weight: normal;\">The area of a circle that can be inscribed in a square of side 6 cm is:</span>",
				"options": [
						"36π cm²",
						"18π cm²",
						"12π cm²",
						"9π cm²"
				],
				"correctAnswer": "9π cm²"
		},
		{
				"id": "mcq5",
				"question": "<span style=\"font-weight: normal;\">The perimeter of a sector of a circle of radius 5.2 cm is 16.4 cm. The area of the sector is:</span>",
				"options": [
						"31.2 cm²",
						"15.6 cm²",
						"16.4 cm²",
						"18.8 cm²"
				],
				"correctAnswer": "15.6 cm²"
		},
		{
				"id": "mcq6",
				"question": "<span style=\"font-weight: normal;\">If the area of a circle is 154 cm², then its perimeter is:</span>",
				"options": [
						"11 cm",
						"22 cm",
						"44 cm",
						"55 cm"
				],
				"correctAnswer": "44 cm"
		},
		{
				"id": "mcq7",
				"question": "<span style=\"font-weight: normal;\">The area of a quadrant of a circle whose circumference is 22 cm is:</span>",
				"options": [
						"3.5 cm²",
						"77/8 cm²",
						"22 cm²",
						"77/2 cm²"
				],
				"correctAnswer": "77/8 cm²"
		},
		{
				"id": "mcq8",
				"question": "<span style=\"font-weight: normal;\">Area of the largest triangle that can be inscribed in a semi-circle of radius r is:</span>",
				"options": [
						"r²",
						"1/2 r²",
						"2r²",
						"√2r²"
				],
				"correctAnswer": "r²"
		},
		{
				"id": "mcq9",
				"question": "<span style=\"font-weight: normal;\">If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:</span>",
				"options": [
						"2 units",
						"π units",
						"4 units",
						"7 units"
				],
				"correctAnswer": "2 units"
		},
		{
				"id": "mcq10",
				"question": "<span style=\"font-weight: normal;\">A cow is tied with a rope of length 14m at the corner of a rectangular field of dimensions 20m x 16m. The area of the field in which the cow can graze is:</span>",
				"options": [
						"154 m²",
						"200 m²",
						"308 m²",
						"None of these"
				],
				"correctAnswer": "154 m²"
		}
],
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

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .section-title {
            color: #D32F2F;
            font-weight: 700;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
        }

        .formula-box {
            background: #E8F5E9;
            border-left: 4px solid #4CAF50;
            padding: 10px;
            margin: 10px 0;
            font-family: 'Nunito', sans-serif;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF4081 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF4081 !important; }
  .question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF4081 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }

  .question { font-size: 0.95em !important; }
  .sub-question { font-size: 0.9em !important; }
  .step { font-size: 0.9em !important; }
  .final-answer { font-size: 0.95em !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">We are familiar with the area and circumference of a circle. In this chapter, we explore areas
            of two special parts of a circular region: Sector and Segment.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNTAuMCBBIDEwMCAxMDAgMCAwIDEgMjM2LjYwMjU0MDM3ODQ0Mzg1IDk5Ljk5OTk5OTk5OTk5OTk2IFoiIGZpbGw9IiNlMGY3ZmEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMTAwLjAwMDAwMDAwMDAwMDAzIDIzNi42MDI1NDAzNzg0NDM4OCBBIDEwMCAxMDAgMCAwIDEgNjMuMzk3NDU5NjIxNTU2MTQgOTkuOTk5OTk5OTk5OTk5OTkgTCAxMDAuMDAwMDAwMDAwMDAwMDMgMjM2LjYwMjU0MDM3ODQ0Mzg4IFoiIGZpbGw9IiNmZmNjYmMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE4MCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWN0b3I8L3RleHQ+PHRleHQgeD0iOTAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2VnbWVudDwvdGV4dD48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMiIGZpbGw9ImJsYWNrIi8+PHRleHQgeD0iMTQwIiB5PSIxNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPk88L3RleHQ+PC9zdmc+" alt="Sector and Segment Visual">
    </div>

    <div class="content-box">
        <div class="section-title">2. Sector of a Circle</div>
        <div class="step">The portion (or part) of the circular region enclosed by two radii and the corresponding arc
            is called a sector of the circle.</div>
        <div class="formula-box">
            Area of Sector = (θ/360) × πr²<br>
            Length of Arc = (θ/360) × 2πr
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Segment of a Circle</div>
        <div class="step">The portion (or part) of the circular region enclosed between a chord and the corresponding
            arc is called a segment of the circle.</div>
        <div class="formula-box">
            Area of Segment = Area of Corresponding Sector - Area of Corresponding Triangle
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Key Values</div>
        <div class="formula-box">
            π ≈ <span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span> or 3.14<br>
            Area of Circle = πr²<br>
            Circumference = 2πr
        </div>
    </div>

</body>

</html>`,
    htmlExercises: {
        exercise1: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas Related to Circles - Exercise 11.1</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #2E7D32;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 2px;
        }

        .numerator {
            border-bottom: 1px solid #333;
            display: block;
            padding: 0 2px;
        }

        .denominator {
            display: block;
            padding: 0 2px;
        }
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF4081 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF4081 !important; }
  .question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF4081 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }

  .question { font-size: 0.95em !important; }
  .sub-question { font-size: 0.9em !important; }
  .step { font-size: 0.9em !important; }
  .final-answer { font-size: 0.95em !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60°.
        </div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTUwIDE1MCBMIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgWiIgZmlsbD0ibGlnaHRncmVlbiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTgwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjYwwrA8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjZjbTwvdGV4dD48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMiIGZpbGw9ImJsYWNrIi8+PHRleHQgeD0iMTUwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFyZWEgb2YgU2VjdG9yPzwvdGV4dD48L3N2Zz4=" alt="Sector Area Calculation">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 6 cm. Angle θ = 60°.</div>
        <div class="step">Area of sector = (θ/360) × πr²</div>
        <div class="step">= (<span class="fraction"><span class="numerator">60</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 6 × 6</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 36</div>
        <div class="step">= 1 × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 6</div>
        <div class="step">= <span class="fraction"><span class="numerator">132</span><span class="denominator">7</span></span> cm².</div>
        <div class="final-answer">Area = <span class="fraction"><span class="numerator">132</span><span class="denominator">7</span></span> cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. Find the area of a quadrant of a circle whose circumference is 22 cm.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTUwIDE1MCBMIDE0OS45OTk5OTk5OTk5OTk5NyA1MC4wIEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgWiIgZmlsbD0ibGlnaHRibHVlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxODAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OTDCsDwvdGV4dD48dGV4dCB4PSIxNjAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2lyY3VtZmVyZW5jZSA9IDIyY208L3RleHQ+PC9zdmc+" alt="Quadrant Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Circumference = 2πr = 22 cm.</div>
        <div class="step">2 × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × r = 22</div>
        <div class="step">r = <span class="fraction"><span class="numerator">7</span><span class="denominator">2</span></span> = 3.5 cm.</div>
        <div class="step">Quadrant is <span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span> of a circle (θ = 90°).</div>
        <div class="step">Area = (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>)πr²</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × (<span class="fraction"><span class="numerator">7</span><span class="denominator">2</span></span>) × (<span class="fraction"><span class="numerator">7</span><span class="denominator">2</span></span>)</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × 22 × (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) × (<span class="fraction"><span class="numerator">7</span><span class="denominator">2</span></span>)</div>
        <div class="step">= <span class="fraction"><span class="numerator">77</span><span class="denominator">8</span></span> cm².</div>
        <div class="final-answer">Area = <span class="fraction"><span class="numerator">77</span><span class="denominator">8</span></span> cm².</div>
    </div>

    <div class="content-box">
        <div class="question">3. The length of the minute hand of a clock is 14 cm. Find the area swept by the minute
            hand in 5 minutes.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNDAuMCBBIDExMCAxMTAgMCAwIDEgMjA1LjAgNTQuNzM3MjA1NTgzNzExNzU2IFoiIGZpbGw9InBpbmsiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSI0MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTQwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0Y208L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NSBtaW48L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgeD0iMjA1IiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg==" alt="Clock Area">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 14 cm.</div>
        <div class="step">Angle in 60 mins = 360°. So in 5 mins = (<span class="fraction"><span class="numerator">360</span><span class="denominator">60</span></span>) × 5 = 30°.</div>
        <div class="step">Area swept = Area of sector with θ = 30°.</div>
        <div class="step">= (<span class="fraction"><span class="numerator">30</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 14 × 14</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">12</span></span>) × 22 × 2 × 14</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × 22 × 14</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">3</span></span>) × 11 × 14 = <span class="fraction"><span class="numerator">154</span><span class="denominator">3</span></span> cm².</div>
        <div class="final-answer">Area = <span class="fraction"><span class="numerator">154</span><span class="denominator">3</span></span> cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area
            of the corresponding: (i) minor segment (ii) major sector. (Use π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjUwIiB5Mj0iMTUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSIyNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjE1MCIgeDI9IjE1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAxNTAgMjUwIEEgMTAwIDEwMCAwIDAgMCAyNTAgMTUwIEwgMTUwIDI1MCBaIiBmaWxsPSJvcmFuZ2UiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjE3MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MMKwPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMGNtPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWdtZW50PC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYWpvciBTZWN0b3I8L3RleHQ+PC9zdmc+" alt="Chord 90 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 10 cm. θ = 90°.</div>
        <div class="step">(i) Area of Minor Sector = (<span class="fraction"><span class="numerator">90</span><span class="denominator">360</span></span>) × 3.14 × 100 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × 314 = 78.5 cm².</div>
        <div class="step">Area of Triangle = (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) × base × height = (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) × 10 × 10 = 50 cm².</div>
        <div class="step">Area of Minor Segment = Area Sector - Area Triangle = 78.5 - 50 = 28.5 cm².</div>
        <div class="step">(ii) Area of Major Sector = Area of Circle - Area of Minor Sector</div>
        <div class="step">= 314 - 78.5 = 235.5 cm². (Or use θ = 270°).</div>
        <div class="final-answer">Minor Segment: 28.5 cm², Major Sector: 235.5 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">5. In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find:
            (i) the length of the arc
            (ii) area of the sector formed by the arc
            (iii) area of the segment formed by the corresponding chord</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTUwIDE1MCBMIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgWiIgZmlsbD0ibGlnaHRjeWFuIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBaIiBmaWxsPSJjeWFuIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxODAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjDCsDwvdGV4dD48dGV4dCB4PSIyMTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjFjbTwvdGV4dD48L3N2Zz4=" alt="Circle 60 Degrees">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 21 cm. θ = 60°.</div>
        <div class="step">(i) Length of arc = (θ/360) × 2πr = (<span class="fraction"><span class="numerator">60</span><span class="denominator">360</span></span>) × 2 × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 21</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × 2 × 22 × 3 = 22 cm.</div>
        <div class="step">(ii) Area of sector = (θ/360) × πr² = (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 21 × 21</div>
        <div class="step">= 11 × 21 = 231 cm².</div>
        <div class="step">(iii) Area of segment = Area Sector - Area Triangle.</div>
        <div class="step">For θ=60°, triangle is equilateral. Area = (√<span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span>)r² = (√<span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span>) × 441.</div>
        <div class="step">= <span class="fraction"><span class="numerator">441√3</span><span class="denominator">4</span></span> cm².</div>
        <div class="step">Area Segment = (231 - <span class="fraction"><span class="numerator">441√3</span><span class="denominator">4</span></span>) cm².</div>
        <div class="final-answer">Length: 22 cm; Sector: 231 cm²; Segment: (231 - <span class="fraction"><span class="numerator">441√3</span><span class="denominator">4</span></span>) cm².</div>
    </div>

    <div class="content-box">
        <div class="question">6. A chord of a circle of radius 15 cm subtends an angle of 60° at the centre. Find the
            areas of the corresponding minor and major segments of the circle. (Use π = 3.14 and √3 = 1.73)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjM2LjYwMjU0MDM3ODQ0Mzg1IiB5Mj0iOTkuOTk5OTk5OTk5OTk5OTYiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjE1MCIgeTE9IjE1MCIgeDI9IjIzNi42MDI1NDAzNzg0NDM4OCIgeTI9IjIwMC4wIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIyMzYuNjAyNTQwMzc4NDQzODUiIHkxPSI5OS45OTk5OTk5OTk5OTk5NiIgeDI9IjIzNi42MDI1NDAzNzg0NDM4OCIgeTI9IjIwMC4wIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDIzNi42MDI1NDAzNzg0NDM4NSA5OS45OTk5OTk5OTk5OTk5NiBBIDEwMCAxMDAgMCAwIDEgMjM2LjYwMjU0MDM3ODQ0Mzg4IDIwMC4wIEwgMjM2LjYwMjU0MDM3ODQ0Mzg1IDk5Ljk5OTk5OTk5OTk5OTk2IFoiIGZpbGw9ImdyYXkiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjI0MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNWNtPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42MMKwPC90ZXh0Pjwvc3ZnPg==" alt="Chord 60 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 15 cm. θ = 60°.</div>
        <div class="step">Area of Minor Sector = (<span class="fraction"><span class="numerator">60</span><span class="denominator">360</span></span>) × 3.14 × 225 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × 706.5 = 117.75 cm².</div>
        <div class="step">Area of Triangle (Equilateral) = (√<span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span>) × 15² = (1.<span class="fraction"><span class="numerator">73</span><span class="denominator">4</span></span>) × 225 = 97.3125 cm².</div>
        <div class="step">Area of Minor Segment = 117.75 - 97.3125 = 20.4375 cm².</div>
        <div class="step">Area of Major Segment = Area Circle - Area Minor Segment</div>
        <div class="step">= 706.5 - 20.4375 = 686.0625 cm².</div>
        <div class="final-answer">Minor Segment: 20.4375 cm²; Major Segment: 686.0625 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A chord of a circle of radius 12 cm subtends an angle of 120° at the centre. Find the
            area of the corresponding segment of the circle. (Use π = 3.14 and √3 = 1.73)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNjMuMzk3NDU5NjIxNTU2MTQiIHkxPSI5OS45OTk5OTk5OTk5OTk5OSIgeDI9IjIzNi42MDI1NDAzNzg0NDM4NSIgeTI9Ijk5Ljk5OTk5OTk5OTk5OTk2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDYzLjM5NzQ1OTYyMTU1NjE0IDk5Ljk5OTk5OTk5OTk5OTk5IEEgMTAwIDEwMCAwIDAgMCAyMzYuNjAyNTQwMzc4NDQzODUgOTkuOTk5OTk5OTk5OTk5OTYgTCA2My4zOTc0NTk2MjE1NTYxNCA5OS45OTk5OTk5OTk5OTk5OSBaIiBmaWxsPSJwdXJwbGUiIG9wYWNpdHk9IjAuMyIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSI2My4zOTc0NTk2MjE1NTYxNCIgeTI9Ijk5Ljk5OTk5OTk5OTk5OTk5IiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIyMzYuNjAyNTQwMzc4NDQzODUiIHkyPSI5OS45OTk5OTk5OTk5OTk5NiIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIxNTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTIwwrA8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyY208L3RleHQ+PC9zdmc+" alt="Chord 120 Segments">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 12 cm. θ = 120°.</div>
        <div class="step">Area of Sector = (<span class="fraction"><span class="numerator">120</span><span class="denominator">360</span></span>) × 3.14 × 144 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">3</span></span>) × 452.16 = 150.72 cm².</div>
        <div class="step">Area of Triangle = r² sin(θ/2) cos(θ/2) = 144 sin 60° cos 60°.</div>
        <div class="step">= 144 × (√<span class="fraction"><span class="numerator">3</span><span class="denominator">2</span></span>) × (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) = 36√3 = 36 × 1.73 = 62.28 cm².</div>
        <div class="step">Area of Segment = 150.72 - 62.28 = 88.44 cm².</div>
        <div class="final-answer">Area of Segment = 88.44 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">8. A horse is tied to a peg at one corner of a square shaped grass field of side 15 m by
            means of a 5 m long rope. Find (i) the area of that part of the field in which the horse can graze. (ii) the
            increase in the grazing area if the rope were 10 m long instead of 5 m. (Use π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9ImxpZ2h0Z3JlZW4iIHN0cm9rZT0iZ3JlZW4iLz48cGF0aCBkPSJNIDIwIDIwIEwgMjAgMTAwIEEgODAgODAgMCAwIDAgMTAwIDIwIFoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIzMCIgcj0iNSIgZmlsbD0iYnJvd24iLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdyYXppbmcgQXJlYTwvdGV4dD48dGV4dCB4PSIxMjAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R3Jhc3MgRmllbGQ8L3RleHQ+PC9zdmc+" alt="Horse Grazing">
        <div class="solution-header">Solution:</div>
        <div class="step">(i) r = 5 m. θ = 90° (corner of square).</div>
        <div class="step">Area = (<span class="fraction"><span class="numerator">90</span><span class="denominator">360</span></span>) × 3.14 × 25 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × 78.5 = 19.625 m².</div>
        <div class="step">(ii) r = 10 m.</div>
        <div class="step">New Area = (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × 3.14 × 100 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span>) × 314 = 78.5 m².</div>
        <div class="step">Increase = 78.5 - 19.625 = 58.875 m².</div>
        <div class="final-answer">Area: 19.625 m²; Increase: 58.875 m².</div>
    </div>

    <div class="content-box">
        <div class="question">9. A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire
            is also used in making 5 diameters which divide the circle into 10 equal sectors. Find: (i) the total length
            of the silver wire required. (ii) the area of each sector of the brooch.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMjUwLjAiIHkxPSIxNTAuMCIgeDI9IjUwLjAiIHkyPSIxNTAuMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjIzMC45MDE2OTk0Mzc0OTQ3NiIgeTE9IjIwOC43Nzg1MjUyMjkyNDczMiIgeDI9IjY5LjA5ODMwMDU2MjUwNTI2IiB5Mj0iOTEuMjIxNDc0NzcwNzUyNjgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxODAuOTAxNjk5NDM3NDk0NzYiIHkxPSIyNDUuMTA1NjUxNjI5NTE1MzYiIHgyPSIxMTkuMDk4MzAwNTYyNTA1MjYiIHkyPSI1NC44OTQzNDgzNzA0ODQ2NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjExOS4wOTgzMDA1NjI1MDUyNyIgeTE9IjI0NS4xMDU2NTE2Mjk1MTUzNiIgeDI9IjE4MC45MDE2OTk0Mzc0OTQ3MyIgeTI9IjU0Ljg5NDM0ODM3MDQ4NDYzNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjY5LjA5ODMwMDU2MjUwNTI3IiB5MT0iMjA4Ljc3ODUyNTIyOTI0NzMyIiB4Mj0iMjMwLjkwMTY5OTQzNzQ5NDczIiB5Mj0iOTEuMjIxNDc0NzcwNzUyNjgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMCBTZWN0b3JzPC90ZXh0Pjx0ZXh0IHg9IjE1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPmQgPSAzNW1tPC90ZXh0Pjwvc3ZnPg==" alt="Brooch Design">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter d = 35 mm. r = <span class="fraction"><span class="numerator">35</span><span class="denominator">2</span></span> mm.</div>
        <div class="step">(i) Length = Circumference + 5 × Diameter.</div>
        <div class="step">= πd + 5d = (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 35 + 5 × 35 = 110 + 175 = 285 mm.</div>
        <div class="step">(ii) Each sector angle θ = <span class="fraction"><span class="numerator">360</span><span class="denominator">10</span></span> = 36°.</div>
        <div class="step">Area = (<span class="fraction"><span class="numerator">36</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × (<span class="fraction"><span class="numerator">35</span><span class="denominator">2</span></span>) × (<span class="fraction"><span class="numerator">35</span><span class="denominator">2</span></span>)</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">10</span></span>) × 11 × 5 × (<span class="fraction"><span class="numerator">35</span><span class="denominator">2</span></span>)</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) × 11 × (<span class="fraction"><span class="numerator">35</span><span class="denominator">2</span></span>) = <span class="fraction"><span class="numerator">385</span><span class="denominator">4</span></span> = 96.25 mm².</div>
        <div class="final-answer">Length: 285 mm; Area: <span class="fraction"><span class="numerator">385</span><span class="denominator">4</span></span> mm².</div>
    </div>

    <div class="content-box">
        <div class="question">10. An umbrella has 8 ribs which are equally spaced. Assuming umbrella to be a flat circle
            of radius 45 cm, find the area between the two consecutive ribs of the umbrella.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMjUwLjAiIHkxPSIxNTAuMCIgeDI9IjUwLjAiIHkyPSIxNTAuMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjIyMC43MTA2NzgxMTg2NTQ3NiIgeTE9IjIyMC43MTA2NzgxMTg2NTQ3NiIgeDI9Ijc5LjI4OTMyMTg4MTM0NTI0IiB5Mj0iNzkuMjg5MzIxODgxMzQ1MjQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAuMCIgeTE9IjI1MC4wIiB4Mj0iMTUwLjAiIHkyPSI1MC4wIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNzkuMjg5MzIxODgxMzQ1MjYiIHkxPSIyMjAuNzEwNjc4MTE4NjU0NzYiIHgyPSIyMjAuNzEwNjc4MTE4NjU0NzYiIHkyPSI3OS4yODkzMjE4ODEzNDUyNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTUwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjggUmliczwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yID0gNDVjbTwvdGV4dD48L3N2Zz4=" alt="Umbrella Ribs">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 45 cm. 8 ribs form 8 sectors.</div>
        <div class="step">Angle θ = <span class="fraction"><span class="numerator">360</span><span class="denominator">8</span></span> = 45°.</div>
        <div class="step">Area = (<span class="fraction"><span class="numerator">45</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 45 × 45</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">8</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 2025</div>
        <div class="step">= <span class="fraction"><span class="numerator">22275</span><span class="denominator">28</span></span> cm².</div>
        <div class="final-answer">Area = <span class="fraction"><span class="numerator">22275</span><span class="denominator">28</span></span> cm².</div>
    </div>

    <div class="content-box">
        <div class="question">11. A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm
            sweeping through an angle of 115°. Find the total area cleaned at each sweep of the blades.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTAwIDIwMCBMIDM4LjcxNjQ0NDU1MDQ4MTc2IDE0OC41NzY5OTEyMjUwNzY4NSBBIDgwIDgwIDAgMCAxIDE3Mi41MDQ2MjI5NjI5MzIgMTY2LjE5MDUzOTA2MDc0NDA3IFoiIGZpbGw9ImxpZ2h0Ymx1ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAyMjAgMjAwIEwgMTQ3LjQ5NTM3NzAzNzA2OCAxNjYuMTkwNTM5MDYwNzQ0MDcgQSA4MCA4MCAwIDAgMSAyODEuMjgzNTU1NDQ5NTE4MjUgMTQ4LjU3Njk5MTIyNTA3NjgyIFoiIGZpbGw9ImxpZ2h0Ymx1ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTYwIiB5PSIyNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPlR3byBXaXBlcnM8L3RleHQ+PHRleHQgeD0iMTAwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjExNcKwPC90ZXh0Pjx0ZXh0IHg9IjIyMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMTXCsDwvdGV4dD48L3N2Zz4=" alt="Wipers Problem">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 25 cm. θ = 115°. Two wipers.</div>
        <div class="step">Total Area = 2 × (<span class="fraction"><span class="numerator">115</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 25 × 25</div>
        <div class="step">= 2 × (<span class="fraction"><span class="numerator">23</span><span class="denominator">72</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 625</div>
        <div class="step">= (<span class="fraction"><span class="numerator">23</span><span class="denominator">36</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 625</div>
        <div class="step">= (23 × 11 × 625) / (18 × 7)</div>
        <div class="step">= <span class="fraction"><span class="numerator">158125</span><span class="denominator">126</span></span> cm².</div>
        <div class="final-answer">Total Area = <span class="fraction"><span class="numerator">158125</span><span class="denominator">126</span></span> cm².</div>
    </div>

    <div class="content-box">
        <div class="question">12. To warn ships for underwater rocks, a lighthouse spreads a red coloured light over a
            sector of angle 80° to a distance of 16.5 km. Find the area of the sea over which the ships are warned. (Use
            π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZTBmN2ZhIi8+PHBhdGggZD0iTSAxNTAgMjUwIEwgNTguMDc0NjY2ODI1NzIyNjQ1IDE3Mi44NjU0ODY4Mzc2MTUzIEEgMTIwIDEyMCAwIDAgMSAyMTAuMCAxNDYuMDc2OTUxNTQ1ODY3MzYgWiIgZmlsbD0icmVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMTUwIDI1MCBMIDU4LjA3NDY2NjgyNTcyMjY0NSAxNzIuODY1NDg2ODM3NjE1MyBBIDEyMCAxMjAgMCAwIDEgMjEwLjAgMTQ2LjA3Njk1MTU0NTg2NzM2IFoiIGZpbGw9InJlZCIgb3BhY2l0eT0iMC4zIi8+PHJlY3QgeD0iMTQwIiB5PSIyNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0MCIgZmlsbD0iZ3JheSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44MMKwIFNlY3RvcjwvdGV4dD48L3N2Zz4=" alt="Lighthouse Sector">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 16.5 km. θ = 80°.</div>
        <div class="step">Area = (<span class="fraction"><span class="numerator">80</span><span class="denominator">360</span></span>) × 3.14 × 16.5 × 16.5</div>
        <div class="step">= (<span class="fraction"><span class="numerator">2</span><span class="denominator">9</span></span>) × 3.14 × 272.25</div>
        <div class="step">= 189.97 km².</div>
        <div class="final-answer">Area = 189.97 km².</div>
    </div>

    <div class="content-box">
        <div class="question">13. A round table cover has six equal designs as shown in Fig. If the radius of the cover
            is 28 cm, find the cost of making the designs at the rate of ₹ 0.35 per cm². (Use √3 = 1.7)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDI1MC4wIDE1MC4wIEEgMTAwIDEwMCAwIDAgMSAyMDAuMCAyMzYuNjAyNTQwMzc4NDQzODUgTCAyNTAuMCAxNTAuMCBaIiBmaWxsPSJicm93biIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDIwMC4wIDIzNi42MDI1NDAzNzg0NDM4NSBBIDEwMCAxMDAgMCAwIDEgMTAwLjAwMDAwMDAwMDAwMDAzIDIzNi42MDI1NDAzNzg0NDM4OCBMIDIwMC4wIDIzNi42MDI1NDAzNzg0NDM4NSBaIiBmaWxsPSJicm93biIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDEwMC4wMDAwMDAwMDAwMDAwMyAyMzYuNjAyNTQwMzc4NDQzODggQSAxMDAgMTAwIDAgMCAxIDUwLjAgMTUwLjAgTCAxMDAuMDAwMDAwMDAwMDAwMDMgMjM2LjYwMjU0MDM3ODQ0Mzg4IFoiIGZpbGw9ImJyb3duIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gNTAuMCAxNTAuMCBBIDEwMCAxMDAgMCAwIDEgOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgTCA1MC4wIDE1MC4wIFoiIGZpbGw9ImJyb3duIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgQSAxMDAgMTAwIDAgMCAxIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEwgOTkuOTk5OTk5OTk5OTk5OTYgNjMuMzk3NDU5NjIxNTU2MTUgWiIgZmlsbD0iYnJvd24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBBIDEwMCAxMDAgMCAwIDEgMjUwLjAgMTQ5Ljk5OTk5OTk5OTk5OTk3IEwgMjAwLjAgNjMuMzk3NDU5NjIxNTU2MTQgWiIgZmlsbD0iYnJvd24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyNTAuMCwxNTAuMCAyMDAuMCwyMzYuNjAyNTQwMzc4NDQzODUgMTAwLjAwMDAwMDAwMDAwMDAzLDIzNi42MDI1NDAzNzg0NDM4OCA1MC4wLDE1MC4wIDk5Ljk5OTk5OTk5OTk5OTk2LDYzLjM5NzQ1OTYyMTU1NjE1IDIwMC4wLDYzLjM5NzQ1OTYyMTU1NjE0IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIi8+PHRleHQgeD0iMTUwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRlc2lnbiBBcmVhczwvdGV4dD48L3N2Zz4=" alt="Round Table Design">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 28 cm. 6 segments. Each angle = <span class="fraction"><span class="numerator">360</span><span class="denominator">6</span></span> = 60°.</div>
        <div class="step">Area of one segment = Area Sector - Area Triangle.</div>
        <div class="step">Sector Area = (<span class="fraction"><span class="numerator">60</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 28 × 28 = (<span class="fraction"><span class="numerator">1</span><span class="denominator">6</span></span>) × 22 × 4 × 28 = <span class="fraction"><span class="numerator">1232</span><span class="denominator">3</span></span> = 410.67 cm².</div>
        <div class="step">Triangle Area (Equilateral) = (√<span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span>) × 28² = (1.<span class="fraction"><span class="numerator">7</span><span class="denominator">4</span></span>) × 784 = 1.7 × 196 = 333.2 cm².</div>
        <div class="step">Area of one design = 410.67 - 333.2 = 77.47 cm².</div>
        <div class="step">Total Area = 6 × 77.47 = 464.82 cm².</div>
        <div class="step">Cost = 464.82 × 0.35 = ₹ 162.68.</div>
        <div class="final-answer">Cost = ₹ 162.68 approx.</div>
    </div>

    <div class="content-box">
        <div class="question">14. Tick the correct answer in the following: Area of a sector of angle p (in degrees) of
            a circle with radius R is:</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTUwIDE1MCBMIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgWiIgZmlsbD0ibGlnaHRncmV5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxNTAiIHk9IjI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QW5nbGUgcCwgUmFkaXVzIFI8L3RleHQ+PC9zdmc+" alt="Formula Check">
        <div class="solution-header">Solution:</div>
        <div class="step">Formula is (<span class="fraction"><span class="numerator">p</span><span class="denominator">360</span></span>) × πR².</div>
        <div class="step">Check options. (D) (<span class="fraction"><span class="numerator">p</span><span class="denominator">720</span></span>) × 2πR² = (<span class="fraction"><span class="numerator">p</span><span class="denominator">360</span></span>) × πR². This matches.</div>
        <div class="final-answer">Option (D).</div>
    </div>

</body>

</html>`,
        examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Areas Related to Circles - Examples</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Kalam', cursive;
            margin: 0;
            padding: 15px;
            background: #fff;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #6C63FF;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #6C63FF;
            font-size: 24px;
            font-weight: 800;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.5;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 2px;
        }

        .numerator {
            border-bottom: 1px solid #333;
            display: block;
            padding: 0 2px;
        }

        .denominator {
            display: block;
            padding: 0 2px;
        }

        .solution-header {
            color: #2E7D32;
            font-weight: 700;
            margin-bottom: 5px;
        }
    


img { float: right; margin-left: 20px; margin-bottom: 15px; max-width: 280px; height: auto; border: 1px solid #ddd; border-radius: 6px; padding: 5px; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
@media (max-width: 600px) { img { float: none; display: block; margin: 10px auto; max-width: 100%; } }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>

<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF4081 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF4081 !important; }
  .question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF4081 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }

  .question { font-size: 0.95em !important; }
  .sub-question { font-size: 0.9em !important; }
  .step { font-size: 0.9em !important; }
  .final-answer { font-size: 0.95em !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">Example 1. Find the area of the sector of a circle with radius 4 cm and of angle 30°.
            Also, find the area of the corresponding major sector (Use π = 3.14).</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDE1MCAxNTAgTCAxNDkuOTk5OTk5OTk5OTk5OTcgNDAuMCBBIDExMCAxMTAgMCAwIDEgMjA1LjAgNTQuNzM3MjA1NTgzNzExNzU2IFoiIGZpbGw9InBpbmsiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSI0MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTQwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0Y208L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NSBtaW48L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgeD0iMjA1IiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg==" alt="Sector Area Example">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 4 cm. θ = 30°.</div>
        <div class="step">Area of Sector = (θ/360) × πr²</div>
        <div class="step">= (<span class="fraction"><span class="numerator">30</span><span class="denominator">360</span></span>) × 3.14 × 16</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">12</span></span>) × 3.14 × 16</div>
        <div class="step">= 4.19 cm².</div>
        <div class="step">Major Sector Area = Area Circle - Area Minor Sector</div>
        <div class="step">= 3.14 × 16 - 4.19</div>
        <div class="step">= 50.24 - 4.19 = 46.05 cm².</div>
        <div class="final-answer">Sector: 4.19 cm²; Major Sector: 46.05 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. Find the area of the segment AYB shown in Fig., if radius of the circle is 21
            cm and ∠AOB = 120°. (Use π = <span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjUwIiB5Mj0iMTUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSIyNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjE1MCIgeDI9IjE1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAxNTAgMjUwIEEgMTAwIDEwMCAwIDAgMCAyNTAgMTUwIEwgMTUwIDI1MCBaIiBmaWxsPSJvcmFuZ2UiIG9wYWNpdHk9IjAuNSIvPjx0ZXh0IHg9IjE3MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MMKwPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMGNtPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaW5vciBTZWdtZW50PC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYWpvciBTZWN0b3I8L3RleHQ+PC9zdmc+" alt="Segment Area Example">
        <div class="solution-header">Solution:</div>
        <div class="step">r = 21 cm. θ = 120°.</div>
        <div class="step">Area of Sector OAYB = (<span class="fraction"><span class="numerator">120</span><span class="denominator">360</span></span>) × (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 21 × 21</div>
        <div class="step">= (<span class="fraction"><span class="numerator">1</span><span class="denominator">3</span></span>) × 22 × 3 × 21 = 462 cm².</div>
        <div class="step">Area of Triangle OAB. Draw OM perpendicular to AB.</div>
        <div class="step">In right ∆ OMA, ∠AOM = 60°.</div>
        <div class="step">OM = 21 cos 60 = <span class="fraction"><span class="numerator">21</span><span class="denominator">2</span></span>. AM = 21 sin 60 = <span class="fraction"><span class="numerator">21√3</span><span class="denominator">2</span></span>.</div>
        <div class="step">Base AB = 2AM = 21√3.</div>
        <div class="step">Area ∆ OAB = (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>) × 21√3 × (<span class="fraction"><span class="numerator">21</span><span class="denominator">2</span></span>) = (<span class="fraction"><span class="numerator">441</span><span class="denominator">4</span></span>)√3 cm².</div>
        <div class="step">Area of Segment = 462 - (<span class="fraction"><span class="numerator">441</span><span class="denominator">4</span></span>)√3 cm².</div>
        <div class="step">Using √3 = 1.73, Area = 462 - 190.95 = 271.05 cm².</div>
        <div class="final-answer">Area = 271.05 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. Find the area of the shaded region in Fig., where ABCD is a square of side 14
            cm and APD and BPC are semicircles.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTUwIDE1MCBMIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgWiIgZmlsbD0ibGlnaHRjeWFuIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDIwMC4wIDYzLjM5NzQ1OTYyMTU1NjE0IEEgMTAwIDEwMCAwIDAgMSAyNTAuMCAxNDkuOTk5OTk5OTk5OTk5OTcgTCAyMDAuMCA2My4zOTc0NTk2MjE1NTYxNCBaIiBmaWxsPSJjeWFuIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxODAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjDCsDwvdGV4dD48dGV4dCB4PSIyMTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjFjbTwvdGV4dD48L3N2Zz4=" alt="Semicircles in Square">
        <div class="solution-header">Solution:</div>
        <div class="step">Side of square = 14 cm. Radius of semicircle = <span class="fraction"><span class="numerator">14</span><span class="denominator">2</span></span> = 7 cm.</div>
        <div class="step">Area of Square = 14 × 14 = 196 cm².</div>
        <div class="step">Area of 2 Semicircles = 2 × (<span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span>)πr² = πr².</div>
        <div class="step">= (<span class="fraction"><span class="numerator">22</span><span class="denominator">7</span></span>) × 7 × 7 = 154 cm².</div>
        <div class="step">Area of Shaded = Area Square - Area 2 Semicircles.</div>
        <div class="step">= 196 - 154 = 42 cm².</div>
        <div class="final-answer">Area = 42 cm².</div>
    </div>

</body>

</html>`
    }
};
