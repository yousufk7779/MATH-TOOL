import { ChapterContent } from "../chapterContent";

export const mathCh12: ChapterContent = {
    id: "ch12",
    number: 12,
    title: "Surface Areas and Volumes",
    introduction: "In this chapter, we explore the properties of three-dimensional figures formed by combining basic solids. We focus on calculating their total surface areas and total volumes using established geometric principles.",
    definitions: [
        { term: "Surface Area", description: "The total area that the surface of an object occupies." },
        { term: "Volume", description: "The amount of space that a substance or object occupies." },
        { term: "Combination of Solids", description: "A new solid figure formed by joining two or more basic three-dimensional objects." }
    ],
    keyPoints: [
        "The total surface area of a combination is the sum of the curved surface areas of visible parts.",
        "The total volume of a combination is the algebraic sum of the individual volumes.",
        "When solids are joined, the surfaces that touch are no longer part of the total surface area."
    ],
    formulas: [
        { name: "Cone CSA", formula: "πrl" },
        { name: "Cylinder TSA", formula: "2πr(r + h)" },
        { name: "Sphere Volume", formula: "(4/3)πr³" },
        { name: "Hemisphere TSA", formula: "3πr²" }
    ],
    crux: [
        "Identify which surfaces are 'joined' to exclude them from surface area calculations.",
        "Always check if units are consistent (cm, m, mm) before starting calculations.",
        "For volume, simply add or subtract the individual solid volumes as per the problem description."
    ],
    exercises: [
        { id: "examples", name: "Examples", questions: [] },
        { id: "exercise1", name: "Exercise 12.1", questions: [] },
        { id: "exercise2", name: "Exercise 12.2", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
		{
				"id": "mcq1",
				"question": "<span style=\"font-weight: normal;\">A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. The volume of the solid is:</span>",
				"options": [
						"π cm³",
						"2π cm³",
						"3π cm³",
						"4π cm³"
				],
				"correctAnswer": "π cm³"
		},
		{
				"id": "mcq2",
				"question": "<span style=\"font-weight: normal;\">Combining two cubes of side 'a' end to end results in a cuboid with surface area:</span>",
				"options": [
						"12a²",
						"10a²",
						"8a²",
						"6a²"
				],
				"correctAnswer": "10a²"
		},
		{
				"id": "mcq3",
				"question": "<span style=\"font-weight: normal;\">A cylindrical pencil sharpened at one end is combination of:</span>",
				"options": [
						"a cone and a cylinder",
						"frustum of a cone and a cylinder",
						"a hemisphere and a cylinder",
						"two cylinders"
				],
				"correctAnswer": "a cone and a cylinder"
		},
		{
				"id": "mcq4",
				"question": "<span style=\"font-weight: normal;\">A surahi is the combination of:</span>",
				"options": [
						"a sphere and a cylinder",
						"a hemisphere and a cylinder",
						"two hemispheres",
						"a cylinder and a cone"
				],
				"correctAnswer": "a sphere and a cylinder"
		},
		{
				"id": "mcq5",
				"question": "<span style=\"font-weight: normal;\">A plumbline (sahul) is the combination of:</span>",
				"options": [
						"a cone and a cylinder",
						"a hemisphere and a cone",
						"frustum of a cone and a cylinder",
						"sphere and cylinder"
				],
				"correctAnswer": "a hemisphere and a cone"
		},
		{
				"id": "mcq6",
				"question": "<span style=\"font-weight: normal;\">The shape of a gilli, in the gilli-danda game, is a combination of:</span>",
				"options": [
						"two cylinders",
						"a cone and a cylinder",
						"two cones and a cylinder",
						"two cylinders and a cone"
				],
				"correctAnswer": "two cones and a cylinder"
		},
		{
				"id": "mcq7",
				"question": "<span style=\"font-weight: normal;\">A shuttle cock used for playing badminton has the shape of the combination of:</span>",
				"options": [
						"a cylinder and a sphere",
						"a sphere and a cone",
						"a cylinder and a hemisphere",
						"frustum of cone and a hemisphere"
				],
				"correctAnswer": "frustum of cone and a hemisphere"
		},
		{
				"id": "mcq8",
				"question": "<span style=\"font-weight: normal;\">A medicine capsule is in the shape of a cylinder of diameter 0.5 cm with two hemispheres stuck to each of its ends. The length of entire capsule is 2 cm. The capacity of the capsule is:</span>",
				"options": [
						"0.36 cm³",
						"0.35 cm³",
						"0.34 cm³",
						"0.33 cm³"
				],
				"correctAnswer": "0.36 cm³"
		},
		{
				"id": "mcq9",
				"question": "<span style=\"font-weight: normal;\">If two solid hemispheres of same base radius r are joined together along their bases, then curved surface area of this new solid is:</span>",
				"options": [
						"4πr²",
						"6πr²",
						"3πr²",
						"8πr²"
				],
				"correctAnswer": "4πr²"
		},
		{
				"id": "mcq10",
				"question": "<span style=\"font-weight: normal;\">Volume of a bird-bath which consists of a cylinder with a hemispherical depression at one end, with height h and radius r, is:</span>",
				"options": [
						"πr²h + (2/3)πr³",
						"πr²h - (2/3)πr³",
						"πr²h - (4/3)πr³",
						"None of these"
				],
				"correctAnswer": "πr²h - (2/3)πr³"
		}
],
    summary: [
        "Mastered the calculation of surface areas for complex combined solids.",
        "Learned to compute the volume of air or material inside combined shapes.",
        "Applied formulas to real-world objects like medicine capsules, tents, and decorative items."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surface Areas and Volumes - Overview</title>
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #AB47BC !important; }
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="step">In this chapter, we determine the surface area and volume of solid figures formed by combining
            two or more basic solids like cube, cuboid, cylinder, cone, sphere and hemisphere.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gNDAgNjAgTCA0MCAxMjAgQSAyMCA2LjY2NjY2NjY2NjY2NjY2NyAwIDAgMCA4MCAxMjAgTCA4MCA2MCBaIiBmaWxsPSIjZGRkIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48ZWxsaXBzZSBjeD0iNjAiIGN5PSI2MCIgcng9IjIwIiByeT0iNi42NjY2NjY2NjY2NjY2NjciIGZpbGw9IiNkZGQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkN5bGluZGVyPC90ZXh0PjxwYXRoIGQ9Ik0gMTUwIDQwIEwgMTMwIDEyMCBBIDIwIDYuNjY2NjY2NjY2NjY2NjY3IDAgMCAwIDE3MCAxMjAgWiIgZmlsbD0iI2ZmZTBiMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTUwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbmU8L3RleHQ+PGNpcmNsZSBjeD0iMjQwIiBjeT0iODAiIHI9IjI1IiBmaWxsPSJibGFjayIgc3Ryb2tlPSIjZTFiZWU3IiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIyNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3BoZXJlPC90ZXh0Pjwvc3ZnPg==" alt="Basic Solids">
    </div>

    <div class="content-box">
        <div class="section-title">2. Key Formulas</div>
        <div class="formula-box">
            <strong>Cuboid:</strong><br>
            SA = 2(lb + bh + hl)<br>
            Volume = lbh<br><br>
            <strong>Cube:</strong><br>
            SA = 6a²<br>
            Volume = a³<br><br>
            <strong>Cylinder:</strong><br>
            CSA = 2πrh<br>
            TSA = 2πr(r + h)<br>
            Volume = πr²h<br><br>
            <strong>Cone:</strong><br>
            CSA = πrl (where l = √(h² + r²))<br>
            TSA = πr(l + r)<br>
            Volume = (1/3)πr²h<br><br>
            <strong>Sphere:</strong><br>
            SA = 4πr²<br>
            Volume = (4/3)πr³<br><br>
            <strong>Hemisphere:</strong><br>
            CSA = 2πr²<br>
            TSA = 3πr²<br>
            Volume = (2/3)πr³
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Surface Area of Combination</div>
        <div class="step">The total surface area of a combined solid is the sum of the curved surface areas of the
            individual parts that are visible. Note that we do not add the areas of the surfaces that are joined
            together.</div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Volume of Combination</div>
        <div class="step">The volume of a combined solid is strictly the sum of the volumes of the individual solids.
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
    <title>Surface Areas and Volumes - Exercise 12.1</title>
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #AB47BC !important; }
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">1. Two cubes each of volume 64 cm³ are joined end to end. Find the surface area of the
            resulting cuboid.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gNTAgMTMwLjAgTCA4MC4wIDEwMCBMIDE0MC4wIDEwMCBMIDExMCAxMzAuMCBaIiBmaWxsPSIjZmZmOWM0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cmVjdCB4PSI1MCIgeT0iMTMwLjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAxMTAgMTMwLjAgTCAxNDAuMCAxMDAgTCAxNDAuMCAxNjAgTCAxMTAgMTkwLjAgWiIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAxMTAgMTMwLjAgTCAxNDAuMCAxMDAgTCAyMDAuMCAxMDAgTCAxNzAgMTMwLjAgWiIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHJlY3QgeD0iMTEwIiB5PSIxMzAuMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZmZmOWM0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDE3MCAxMzAuMCBMIDIwMC4wIDEwMCBMIDIwMC4wIDE2MCBMIDE3MCAxOTAuMCBaIiBmaWxsPSIjZmZmOWM0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMTAiIHk9IjIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VHdvIEN1YmVzIEpvaW5lZDwvdGV4dD48dGV4dCB4PSI4MCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40Y208L3RleHQ+PC9zdmc+" alt="Two Cubes Joined">
        <div class="solution-header">Solution:</div>
        <div class="step">Volume of cube = a³ = 64. So a = 4 cm.</div>
        <div class="step">When joined end to end, length L = 4 + 4 = 8 cm.</div>
        <div class="step">Breadth B = 4 cm. Height H = 4 cm.</div>
        <div class="step">Surface Area = 2(LB + BH + HL)</div>
        <div class="step">= 2(32 + 16 + 32)</div>
        <div class="step">= 2(80) = 160 cm².</div>
        <div class="final-answer">Surface Area = 160 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">2. A vessel is in the form of a hollow hemisphere mounted by a hollow cylinder. The
            diameter of the hemisphere is 14 cm and the total height of the vessel is 13 cm. Find the inner surface area
            of the vessel.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTAwIDE1MCBBIDUwIDUwIDAgMCAwIDIwMCAxNTAiIGZpbGw9IiNiYmRlZmIiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjxlbGxpcHNlIGN4PSIxNTAiIGN5PSIxNTAiIHJ4PSI1MCIgcnk9IjE2LjY2NjY2NjY2NjY2NjY2OCIgZmlsbD0iI2UzZjJmZCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAxMDAgMTEwIEwgMTAwIDE1MCBBIDUwIDE2LjY2NjY2NjY2NjY2NjY2OCAwIDAgMCAyMDAgMTUwIEwgMjAwIDExMCBaIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTEwIiByeD0iNTAiIHJ5PSIxNi42NjY2NjY2NjY2NjY2NjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IZW1pc3BoZXJlICsgQ3lsaW5kZXI8L3RleHQ+PGxpbmUgeDE9IjIyMCIgeTE9IjExMCIgeDI9IjIyMCIgeTI9IjIwMCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIyMzUiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTNjbTwvdGV4dD48bGluZSB4MT0iMTAwIiB5MT0iMTUwIiB4Mj0iMjAwIiB5Mj0iMTUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTY1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kPTE0Y208L3RleHQ+PC9zdmc+" alt="Vessel Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter = 14 cm => Radius r = 7 cm.</div>
        <div class="step">Total height = 13 cm.</div>
        <div class="step">Height of hemisphere portion = radius = 7 cm.</div>
        <div class="step">Height of cylinder h = 13 - 7 = 6 cm.</div>
        <div class="step">Inner Surface Area = CSA of Cylinder + CSA of Hemisphere.</div>
        <div class="step">= 2πrh + 2πr²</div>
        <div class="step">= 2πr(h + r)</div>
        <div class="step">= 2 × (22/7) × 7 × (6 + 7)</div>
        <div class="step">= 44 × 13 = 572 cm².</div>
        <div class="final-answer">Inner Surface Area = 572 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">3. A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius.
            The total height of the toy is 15.5 cm. Find the total surface area of the toy.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTEwIDE1MCBBIDQwIDQwIDAgMCAwIDE5MCAxNTAgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMTUwIDMwIEwgMTEwIDE1MCBMIDE5MCAxNTAgWiIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIvPjxsaW5lIHgxPSIyMTAiIHkxPSIzMCIgeDI9IjIxMCIgeTI9IjE5MCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIyMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTUuNWNtPC90ZXh0PjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxOTAiIHkyPSIxNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTcwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPnI9My41PC90ZXh0Pjwvc3ZnPg==" alt="Toy Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 3.5 cm. Total height = 15.5 cm.</div>
        <div class="step">Height of cone h = 15.5 - 3.5 = 12 cm.</div>
        <div class="step">Slant height l = √(h² + r²) = √(144 + 3.5²) = √(144 + 12.25) = √156.25 = 12.5 cm.</div>
        <div class="step">Total Surface Area = CSA of Cone + CSA of Hemisphere.</div>
        <div class="step">= πrl + 2πr²</div>
        <div class="step">= πr(l + 2r)</div>
        <div class="step">= (22/7) × 3.5 × (12.5 + 2×3.5)</div>
        <div class="step">= 11 × (12.5 + 7) = 11 × 19.5 = 214.5 cm².</div>
        <div class="final-answer">Total Surface Area = 214.5 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">4. A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest
            diameter the hemisphere can have? Find the surface area of the solid.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMzIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPgogIDxkZWZzPgogICAgPCEtLSBBcnJvd2hlYWQgbWFya2VycyAtLT4KICAgIDxtYXJrZXIgaWQ9ImFycm93IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjUiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDEwIDUgTCAwIDguNSB6IiBmaWxsPSJibGFjayIvPgogICAgPC9tYXJrZXI+CiAgICA8IS0tIFNwaGVyZSBSYWRpYWwgR3JhZGllbnQgZm9yIDNEIGxvb2sgLS0+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhlbWlHcmFkIiBjeD0iNTAlIiBjeT0iMzAlIiByPSI1MCUiIGZ4PSI0MCUiIGZ5PSIyMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOTBjYWY5IiBzdG9wLW9wYWNpdHk9IjAuODUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxZTg4ZTUiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBkNDdhMSIgc3RvcC1vcGFjaXR5PSIwLjk1Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KCiAgPCEtLSAzRCBDdWJlIEZhY2VzIC0tPgogIDwhLS0gVG9wIGZhY2UgLS0+CiAgPHBhdGggZD0iTSA4MCAxMzAgTCAxMzUgODAgTCAyNzUgODAgTCAyMjAgMTMwIFoiIGZpbGw9IiMwMDYyYjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPCEtLSBSaWdodCBmYWNlIC0tPgogIDxwYXRoIGQ9Ik0gMjIwIDEzMCBMIDI3NSA4MCBMIDI3NSAyMTAgTCAyMjAgMjYwIFoiIGZpbGw9IiMwMDUwOGYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPCEtLSBGcm9udCBmYWNlIC0tPgogIDxwYXRoIGQ9Ik0gODAgMTMwIEwgMjIwIDEzMCBMIDIyMCAyNjAgTCA4MCAyNjAgWiIgZmlsbD0iIzAwN2FkOSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSBIZW1pc3BoZXJlIEJhc2UgRWxsaXBzZSAtLT4KICA8ZWxsaXBzZSBjeD0iMTc3LjUiIGN5PSIxMDUiIHJ4PSI2NSIgcnk9IjIyIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIEhlbWlzcGhlcmUgRG9tZSAtLT4KICA8cGF0aCBkPSJNIDExMi41IDEwNSBBIDY1IDY1IDAgMCAxIDI0Mi41IDEwNSBaIiBmaWxsPSJ1cmwoI2hlbWlHcmFkKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAKICA8IS0tIFJlLWRyYXcgZnJvbnQgaGFsZiBvZiBlbGxpcHNlIG91dGxpbmUgb24gdG9wIG9mIGRvbWUgZm9yIGRlcHRoIC0tPgogIDxlbGxpcHNlIGN4PSIxNzcuNSIgY3k9IjEwNSIgcng9IjY1IiByeT0iMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gRGltZW5zaW9uIEhlbHBlciAvIEV4dGVuc2lvbiBsaW5lcyAtLT4KICA8IS0tIEhlaWdodCBoZWxwZXJzIC0tPgogIDxsaW5lIHgxPSI3NSIgeTE9IjEzMCIgeDI9IjUwIiB5Mj0iMTMwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KICA8bGluZSB4MT0iNzUiIHkxPSIyNjAiIHgyPSI1MCIgeTI9IjI2MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIi8+CiAgPCEtLSBXaWR0aCBoZWxwZXJzIC0tPgogIDxsaW5lIHgxPSI4MCIgeTE9IjI2NSIgeDI9IjgwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KICA8bGluZSB4MT0iMjIwIiB5MT0iMjY1IiB4Mj0iMjIwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KCiAgPCEtLSBMZWZ0IEFycm93IChWZXJ0aWNhbCBIZWlnaHQ6IDcgY20pIC0tPgogIDxsaW5lIHgxPSI1NSIgeTE9IjEzNiIgeDI9IjU1IiB5Mj0iMjU0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLXN0YXJ0PSJ1cmwoI2Fycm93KSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICA8dGV4dCB4PSIzNSIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NyBjbTwvdGV4dD4KCiAgPCEtLSBCb3R0b20gQXJyb3cgKEhvcml6b250YWwgV2lkdGg6IDcgY20pIC0tPgogIDxsaW5lIHgxPSI4NiIgeTE9IjI3NSIgeDI9IjIxNCIgeTI9IjI3NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMTUwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43IGNtPC90ZXh0PgoKICA8IS0tIERlcHRoIEFycm93IChTaWRlIEVkZ2U6IDcgY20pIC0tPgogIDxsaW5lIHgxPSIyMzIiIHkxPSIxMzciIHgyPSIyNzkiIHkyPSI5NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMjc4IiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43IGNtPC90ZXh0PgoKICA8IS0tIERpYW1ldGVyIEFycm93IChIZW1pc3BoZXJlOiA3IGNtKSAtLT4KICA8bGluZSB4MT0iMTE4LjUiIHkxPSIxMDUiIHgyPSIyMzYuNSIgeTI9IjEwNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMTc3LjUiIHk9IjkzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NyBjbTwvdGV4dD4KPC9zdmc+" alt="Cube with Hemisphere">
        <div class="solution-header">Solution:</div>
        <div class="step">Side of cube a = 7 cm.</div>
        <div class="step">Greatest diameter = Side of cube = 7 cm. Radius r = 3.5 cm.</div>
        <div class="step">Surface Area = TSA of Cube - Base Area of Hemisphere + CSA of Hemisphere.</div>
        <div class="step">= 6a² - πr² + 2πr²</div>
        <div class="step">= 6a² + πr²</div>
        <div class="step">= 6(49) + (22/7)(3.5)(3.5)</div>
        <div class="step">= 294 + 38.5 = 332.5 cm².</div>
        <div class="final-answer">Diameter = 7 cm; Surface Area = 332.5 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">5. A hemispherical depression is cut out from one face of a cubical wooden block such that
            the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the
            remaining solid.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMzIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPgogIDxkZWZzPgogICAgPCEtLSBBcnJvd2hlYWQgbWFya2VycyAtLT4KICAgIDxtYXJrZXIgaWQ9ImFycm93IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjUiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDEwIDUgTCAwIDguNSB6IiBmaWxsPSJibGFjayIvPgogICAgPC9tYXJrZXI+CiAgICA8IS0tIERlcHJlc3Npb24gYm93bCBHcmFkaWVudCAtLT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZGVwcmVzc0dyYWQiIGN4PSI1MCUiIGN5PSIxMCUiIHI9IjkwJSIgZng9IjUwJSIgZnk9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyODhkMSIgc3RvcC1vcGFjaXR5PSIwLjk1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMDE1NzliIiBzdG9wLW9wYWNpdHk9IjAuOTUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAyZjZjIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgoKICA8IS0tIDEuIFRvcCBGYWNlIG9mIEN1YmUgLS0+CiAgPHBhdGggZD0iTSA4MCAxMzAgTCAxMzUgODAgTCAyNzUgODAgTCAyMjAgMTMwIFoiIGZpbGw9IiM3YWIxZGQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gMi4gRGVwcmVzc2lvbiBCb3dsIChkcmF3biBpbnNpZGUsIHdpbGwgYmUgcGFydGlhbGx5IHNlZW4gdGhyb3VnaCBzZW1pLXRyYW5zcGFyZW50IGZyb250L3JpZ2h0IGZhY2VzKSAtLT4KICA8cGF0aCBkPSJNIDExMi41IDEwNSBBIDY1IDY1IDAgMCAwIDI0Mi41IDEwNSBaIiBmaWxsPSJ1cmwoI2RlcHJlc3NHcmFkKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSAzLiBGcm9udCBGYWNlIG9mIEN1YmUgKFNlbWktdHJhbnNwYXJlbnQgdG8gc2hvdyB0aGUgZGVwcmVzc2lvbiBkZXB0aCBpbnNpZGUpIC0tPgogIDxwYXRoIGQ9Ik0gODAgMTMwIEwgMjIwIDEzMCBMIDIyMCAyNjAgTCA4MCAyNjAgWiIgZmlsbD0iIzhhYmZlYyIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIDQuIFJpZ2h0IEZhY2Ugb2YgQ3ViZSAoU2VtaS10cmFuc3BhcmVudCkgLS0+CiAgPHBhdGggZD0iTSAyMjAgMTMwIEwgMjc1IDgwIEwgMjc1IDIxMCBMIDIyMCAyNjAgWiIgZmlsbD0iIzY4OWZjYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIDUuIEhlbWlzcGhlcmUgUmltIEVsbGlwc2UgKGRyYXduIG9uIHRvcCBmb3Igb3V0bGluZSBjcmlzcG5lc3MpIC0tPgogIDxlbGxpcHNlIGN4PSIxNzcuNSIgY3k9IjEwNSIgcng9IjY1IiByeT0iMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gRGltZW5zaW9uIEhlbHBlciAvIEV4dGVuc2lvbiBsaW5lcyAtLT4KICA8IS0tIEhlaWdodCBoZWxwZXJzIC0tPgogIDxsaW5lIHgxPSI3NSIgeTE9IjEzMCIgeDI9IjUwIiB5Mj0iMTMwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KICA8bGluZSB4MT0iNzUiIHkxPSIyNjAiIHgyPSI1MCIgeTI9IjI2MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIi8+CiAgPCEtLSBXaWR0aCBoZWxwZXJzIC0tPgogIDxsaW5lIHgxPSI4MCIgeTE9IjI2NSIgeDI9IjgwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KICA8bGluZSB4MT0iMjIwIiB5MT0iMjY1IiB4Mj0iMjIwIiB5Mj0iMjgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIiLz4KCiAgPCEtLSBMZWZ0IEFycm93IChWZXJ0aWNhbCBIZWlnaHQ6IGwpIC0tPgogIDxsaW5lIHgxPSI1NSIgeTE9IjEzNiIgeDI9IjU1IiB5Mj0iMjU0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLXN0YXJ0PSJ1cmwoI2Fycm93KSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICA8dGV4dCB4PSIzNSIgeT0iMjAwIiBmb250LWZhbWlseT0iR2VvcmdpYSwgc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sPC90ZXh0PgoKICA8IS0tIEJvdHRvbSBBcnJvdyAoSG9yaXpvbnRhbCBXaWR0aDogbCkgLS0+CiAgPGxpbmUgeDE9Ijg2IiB5MT0iMjc1IiB4Mj0iMjE0IiB5Mj0iMjc1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLXN0YXJ0PSJ1cmwoI2Fycm93KSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICA8dGV4dCB4PSIxNTAiIHk9IjI5OCIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsIHNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bDwvdGV4dD4KCiAgPCEtLSBEZXB0aCBBcnJvdyAoU2lkZSBFZGdlOiBsKSAtLT4KICA8bGluZSB4MT0iMjMyIiB5MT0iMTQyIiB4Mj0iMjc5IiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLXN0YXJ0PSJ1cmwoI2Fycm93KSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICA8dGV4dCB4PSIyNzgiIHk9IjEzMiIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsIHNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bDwvdGV4dD4KCiAgPCEtLSBEaWFtZXRlciBBcnJvdyAoSGVtaXNwaGVyZTogbCkgLS0+CiAgPGxpbmUgeDE9IjExOC41IiB5MT0iMTA1IiB4Mj0iMjM2LjUiIHkyPSIxMDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41IiBtYXJrZXItc3RhcnQ9InVybCgjYXJyb3cpIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgogIDx0ZXh0IHg9IjE3Ny41IiB5PSI5MyIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsIHNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bDwvdGV4dD4KPC9zdmc+" alt="Depression in Cube">
        <div class="solution-header">Solution:</div>
        <div class="step">Let edge be l. Radius r = l/2.</div>
        <div class="step">Surface Area = TSA of Cube - Top Circle Area + CSA of Hemisphere (depression surface).</div>
        <div class="step">= 6l² - π(l/2)² + 2π(l/2)²</div>
        <div class="step">= 6l² + π(l/2)²</div>
        <div class="step">= 6l² + πl²/4</div>
        <div class="step">= (l²/4)(24 + π).</div>
        <div class="final-answer">Surface Area = (l²/4)(24 + π) sq units.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of
            its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its
            surface area.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjEwNS4wIiB5PSIxMjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2UxYmVlNyIgc3Ryb2tlPSJub25lIi8+PGxpbmUgeDE9IjEwNS4wIiB5MT0iMTI1IiB4Mj0iMTk1LjAiIHkyPSIxMjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxMDUuMCIgeTE9IjE3NSIgeDI9IjE5NS4wIiB5Mj0iMTc1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDEwNS4wIDEyNSBBIDI1IDI1IDAgMCAwIDEwNS4wIDE3NSBaIiBmaWxsPSIjZTFiZWU3IiBzdHJva2U9ImJsYWNrIi8+PHBhdGggZD0iTSAxOTUuMCAxMjUgQSAyNSAyNSAwIDAgMSAxOTUuMCAxNzUgWiIgZmlsbD0iI2UxYmVlNyIgc3Ryb2tlPSJibGFjayIvPjxsaW5lIHgxPSI4MC4wIiB5MT0iMTkwIiB4Mj0iMjIwLjAiIHkyPSIxOTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTUwIiB5PSIyMDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0bW08L3RleHQ+PC9zdmc+" alt="Capsule Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter = 5 mm => r = 2.5 mm.</div>
        <div class="step">Total length = 14 mm.</div>
        <div class="step">Length of cylinder h = 14 - 2.5 - 2.5 = 9 mm.</div>
        <div class="step">Surface Area = CSA Cylinder + 2 × CSA Hemisphere.</div>
        <div class="step">= 2πrh + 2(2πr²)</div>
        <div class="step">= 2πr(h + 2r)</div>
        <div class="step">= 2 × (22/7) × 2.5 × (9 + 5)</div>
        <div class="step">= (110/7) × 14 = 220 mm².</div>
        <div class="final-answer">Surface Area = 220 mm².</div>
    </div>

    <div class="content-box">
        <div class="question">7. A tent is in the shape of a cylinder surmounted by a conical top. If the height and
            diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m,
            find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the
            rate of ₹ 500 per m². (Note that the base of the tent will not be covered with canvas.)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gOTAgMTUwIEwgOTAgMjEwIEEgNjAgMjAuMCAwIDAgMCAyMTAgMjEwIEwgMjEwIDE1MCBaIiBmaWxsPSIjZmZlMGIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTUwIiByeD0iNjAiIHJ5PSIyMC4wIiBmaWxsPSIjZmZlMGIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDE1MCA1MCBMIDkwIDE1MCBMIDIxMCAxNTAgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxlbGxpcHNlIGN4PSIxNTAiIGN5PSIxNTAiIHJ4PSI2MCIgcnk9IjIwLjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIzMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLjFtPC90ZXh0Pjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kPTRtPC90ZXh0Pjx0ZXh0IHg9IjkwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPmw9Mi44bTwvdGV4dD48L3N2Zz4=" alt="Tent Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Cylinder: h = 2.1 m, d = 4 m => r = 2 m.</div>
        <div class="step">Cone: l = 2.8 m, r = 2 m.</div>
        <div class="step">Area of Canvas = CSA Cylinder + CSA Cone.</div>
        <div class="step">= 2πrh + πrl</div>
        <div class="step">= πr(2h + l)</div>
        <div class="step">= (22/7) × 2 × (2×2.1 + 2.8)</div>
        <div class="step">= (44/7) × (4.2 + 2.8)</div>
        <div class="step">= (44/7) × 7 = 44 m².</div>
        <div class="step">Cost = 44 × 500 = ₹ 22000.</div>
        <div class="final-answer">Area = 44 m²; Cost = ₹ 22000.</div>
    </div>

    <div class="content-box">
        <div class="question">8. From a solid cylinder whose height is 2.4 cm and diameter 1.4 cm, a conical cavity of
            the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the
            nearest cm².</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTAwIDEwMCBMIDEwMCAyMDAgQSA1MCAxNi42NjY2NjY2NjY2NjY2NjggMCAwIDAgMjAwIDIwMCBMIDIwMCAxMDAgWiIgZmlsbD0iI2NmZDhkYyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjE1MCIgY3k9IjEwMCIgcng9IjUwIiByeT0iMTYuNjY2NjY2NjY2NjY2NjY4IiBmaWxsPSIjY2ZkOGRjIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDEwMCAxMDAgTCAxNTAgMjAwIEwgMjAwIDEwMCIgZmlsbD0iIzkwYTRhZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWRhc2hhcnJheT0iMiIvPjxlbGxpcHNlIGN4PSIxNTAiIGN5PSIxMDAiIHJ4PSI1MCIgcnk9IjE1IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxNTAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29uaWNhbCBDYXZpdHk8L3RleHQ+PC9zdmc+" alt="Conical Cavity">
        <div class="solution-header">Solution:</div>
        <div class="step">h = 2.4 cm, d = 1.4 cm => r = 0.7 cm.</div>
        <div class="step">l = √(h² + r²) = √(2.4² + 0.7²) = √(5.76 + 0.49) = √6.25 = 2.5 cm.</div>
        <div class="step">TSA = CSA Cylinder + CSA Cone (Cavity inside) + Area of Base (Top is open/hollowed from top
            but base remains? "From a solid cylinder... cavity hollowed out". Usually base remains unless specified
            fully through). Letds assume cavity from top. Base solid.</div>
        <div class="step">TSA = 2πrh + πrl + πr²</div>
        <div class="step">= πr(2h + l + r)</div>
        <div class="step">= (22/7) × 0.7 × (4.8 + 2.5 + 0.7)</div>
        <div class="step">= 2.2 × 8 = 17.6 cm².</div>
        <div class="step">Nearest cm² = 18 cm².</div>
        <div class="final-answer">Total Surface Area ≈ 18 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">9. A wooden article was made by scooping out a hemisphere from each end of a solid
            cylinder, as shown in Fig. If the height of the cylinder is 10 cm, and its base is of radius 3.5 cm, find
            the total surface area of the article.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxsaW5lIHgxPSIxMTAiIHkxPSI1MCIgeDI9IjExMCIgeTI9IjIwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjE5MCIgeTE9IjUwIiB4Mj0iMTkwIiB5Mj0iMjAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNIDExMCA1MCBBIDQwIDQwIDAgMCAwIDE5MCA1MCIgZmlsbD0iI2VjZWZmMSIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMTEwIDIwMCBBIDQwIDQwIDAgMCAxIDE5MCAyMDAiIGZpbGw9IiNlY2VmZjEiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIxNTAiIHk9IjIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aGVtaXNwaGVyaWNhbCBzY29vcHM8L3RleHQ+PC9zdmc+" alt="Scooped Cylinder">
        <div class="solution-header">Solution:</div>
        <div class="step">h = 10 cm, r = 3.5 cm.</div>
        <div class="step">TSA = CSA Cylinder + 2 × CSA Hemisphere (scoops add area).</div>
        <div class="step">= 2πrh + 2(2πr²)</div>
        <div class="step">= 2πr(h + 2r)</div>
        <div class="step">= 2 × (22/7) × 3.5 × (10 + 7)</div>
        <div class="step">= 22 × 17 = 374 cm².</div>
        <div class="final-answer">Total Surface Area = 374 cm².</div>
    </div>

</body>

</html>`,
        exercise2: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surface Areas and Volumes - Exercise 12.2</title>
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #AB47BC !important; }
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">1. A solid is in the shape of a cone standing on a hemisphere with both their radii being
            equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π.
        </div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTEwIDE1MCBBIDQwIDQwIDAgMCAwIDE5MCAxNTAgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMTUwIDMwIEwgMTEwIDE1MCBMIDE5MCAxNTAgWiIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIvPjxsaW5lIHgxPSIyMTAiIHkxPSIzMCIgeDI9IjIxMCIgeTI9IjE5MCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIyMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aD1yPTE8L3RleHQ+PGxpbmUgeDE9IjE1MCIgeTE9IjE1MCIgeDI9IjE5MCIgeTI9IjE1MCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIxNzAiIHk9IjE2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cj0xY208L3RleHQ+PC9zdmc+" alt="Solid Cone on Hemisphere">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 1 cm. Height of cone h = r = 1 cm.</div>
        <div class="step">Volume = Volume of Cone + Volume of Hemisphere.</div>
        <div class="step">= (1/3)πr²h + (2/3)πr³</div>
        <div class="step">= (1/3)π(1) + (2/3)π(1)</div>
        <div class="step">= π cm³.</div>
        <div class="final-answer">Volume = π cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Rachel, an engineering student, was asked to make a model shaped like a cylinder with
            two cones attached at its two ends. The diameter of the model is 3 cm and its length is 12 cm. If each cone
            has a height of 2 cm, find the volume of air contained in the model that Rachel made.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjEwMC4wIiB5PSIxMjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmUwYjIiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0gMTAwLjAgMTI1IEwgNzAuMCAxNTAgTCAxMDAuMCAxNzUgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMjAwLjAgMTI1IEwgMjMwLjAgMTUwIEwgMjAwLjAgMTc1IFoiIGZpbGw9IiNmZmNjYmMiIHN0cm9rZT0iYmxhY2siLz48bGluZSB4MT0iMTAwLjAiIHkxPSIxMjUiIHgyPSIyMDAuMCIgeTI9IjEyNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjEwMC4wIiB5MT0iMTc1IiB4Mj0iMjAwLjAiIHkyPSIxNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ud28gQ29uZXMgTW9kZWw8L3RleHQ+PC9zdmc+" alt="Model Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter = 3 cm => Radius r = 1.5 cm.</div>
        <div class="step">Total length = 12 cm. Height of each cone h_c = 2 cm.</div>
        <div class="step">Height of cylinder h_cyl = 12 - 2 - 2 = 8 cm.</div>
        <div class="step">Volume = Volume Cylinder + 2 × Volume Cone.</div>
        <div class="step">= πr²h_cyl + 2(1/3)πr²h_c</div>
        <div class="step">= πr²(h_cyl + (2/3)h_c)</div>
        <div class="step">= (22/7) × 1.5 × 1.5 × (8 + 4/3)</div>
        <div class="step">= (22/7) × 2.25 × (28/3)</div>
        <div class="step">= 22 × 0.75 × 4</div>
        <div class="step">= 22 × 3 = 66 cm³.</div>
        <div class="final-answer">Volume = 66 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">3. A gulab jamun, contains sugar syrup up to about 30% of its volume. Find approximately
            how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends
            with length 5 cm and diameter 2.8 cm (see Fig.).</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjEwNS4wIiB5PSIxMjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2Jyb3duIiBzdHJva2U9Im5vbmUiLz48bGluZSB4MT0iMTA1LjAiIHkxPSIxMjUiIHgyPSIxOTUuMCIgeTI9IjEyNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjEwNS4wIiB5MT0iMTc1IiB4Mj0iMTk1LjAiIHkyPSIxNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0gMTA1LjAgMTI1IEEgMjUgMjUgMCAwIDAgMTA1LjAgMTc1IFoiIGZpbGw9IiNicm93biIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMTk1LjAgMTI1IEEgMjUgMjUgMCAwIDEgMTk1LjAgMTc1IFoiIGZpbGw9IiNicm93biIgc3Ryb2tlPSJibGFjayIvPjxsaW5lIHgxPSI4MC4wIiB5MT0iMTkwIiB4Mj0iMjIwLjAiIHkyPSIxOTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTUwIiB5PSIyMDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxlbmd0aD88L3RleHQ+PC9zdmc+" alt="Gulab Jamun">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter 2.8 cm => Radius r = 1.4 cm.</div>
        <div class="step">Total length = 5 cm. Cylinder length h = 5 - 1.4 - 1.4 = 2.2 cm.</div>
        <div class="step">Volume of one Gulab Jamun = Vol Cyl + 2 × Vol Hemi.</div>
        <div class="step">= πr²h + (4/3)πr³</div>
        <div class="step">= πr²(h + 4r/3)</div>
        <div class="step">= (22/7) × 1.4 × 1.4 × (2.2 + 5.6/3)</div>
        <div class="step">= 6.16 × (2.2 + 1.866) = 6.16 × 4.066 ≈ 25.05 cm³.</div>
        <div class="step">Volume of 45 Gulab Jamuns = 45 × 25.05 = 1127.25 cm³.</div>
        <div class="step">Syrup = 30% of Volume = 0.30 × 1127.25 ≈ 338 cm³.</div>
        <div class="final-answer">Syrup Volume ≈ 338 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">4. A pen stand made of wood is in the shape of a cuboid with four conical depressions to
            hold pens. The dimensions of the cuboid are 15 cm by 10 cm by 3.5 cm. The radius of each of the depressions
            is 0.5 cm and the depth is 1.4 cm. Find the volume of wood in the entire stand.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMzIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPgogIDxkZWZzPgogICAgPCEtLSBDdWJvaWQgRmFjZSBHcmFkaWVudHMgLS0+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZyb250R3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDBiMGZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwODBlMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0idG9wR3JhZCIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4MGQ4ZmYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTFmNWZlIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJyaWdodEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwODBlMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDRkODAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8IS0tIENvbmljYWwgSG9sZSBSYWRpYWwgR3JhZGllbnQgLS0+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhvbGVHcmFkIiBjeD0iNTAlIiBjeT0iMzAlIiByPSI1MCUiIGZ4PSIzMCUiIGZ5PSIxMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDI4OGQxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMWQ0YSIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwhLS0gUGVuIEJvZHkgR3JhZGllbnQgLS0+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBlbkJvZHkiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2IzZTVmYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzgxZDRmYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0ZmMzZjciLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgoKICA8IS0tIExlZnQgUGFydDogM0QgQ3Vib2lkIFBlbiBTdGFuZCAtLT4KICA8IS0tIFRvcCBGYWNlIC0tPgogIDxwYXRoIGQ9Ik0gMjAgMjIwIEwgMTMwIDEzMCBMIDE4MCAxMzAgTCA3MCAyMjAgWiIgZmlsbD0idXJsKCN0b3BHcmFkKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8IS0tIFJpZ2h0IEZhY2UgLS0+CiAgPHBhdGggZD0iTSA3MCAyMjAgTCAxODAgMTMwIEwgMTgwIDE2MCBMIDcwIDI1MCBaIiBmaWxsPSJ1cmwoI3JpZ2h0R3JhZCkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPCEtLSBGcm9udCBGYWNlIC0tPgogIDxwYXRoIGQ9Ik0gMjAgMjIwIEwgNzAgMjIwIEwgNzAgMjUwIEwgMjAgMjUwIFoiIGZpbGw9InVybCgjZnJvbnRHcmFkKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSA0IENvbmljYWwgSG9sZXMgb24gVG9wIEZhY2UgLS0+CiAgPGVsbGlwc2UgY3g9IjY3IiBjeT0iMjAyIiByeD0iOSIgcnk9IjQiIGZpbGw9InVybCgjaG9sZUdyYWQpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICA8ZWxsaXBzZSBjeD0iODkiIGN5PSIxODQiIHJ4PSI5IiByeT0iNCIgZmlsbD0idXJsKCNob2xlR3JhZCkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxlbGxpcHNlIGN4PSIxMTEiIGN5PSIxNjYiIHJ4PSI5IiByeT0iNCIgZmlsbD0idXJsKCNob2xlR3JhZCkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxlbGxpcHNlIGN4PSIxMzMiIGN5PSIxNDgiIHJ4PSI5IiByeT0iNCIgZmlsbD0idXJsKCNob2xlR3JhZCkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC43NSIvPgoKICA8IS0tIFJpZ2h0IFBhcnQ6IDJEIENyb3NzIFNlY3Rpb24gYW5kIDQgUGVucyAtLT4KICA8IS0tIFN0YW5kIENyb3NzIFNlY3Rpb24gUHJvZmlsZSAoU2luZ2xlIGNsb3NlZCBwYXRoIHRvIGluY2x1ZGUgbm90Y2hlcykgLS0+CiAgPHBhdGggZD0iTSAxNzUgMjIwIAogICAgICAgICAgIEwgMTg1IDIyMCBMIDE5NSAyMzggTCAyMDUgMjIwIAogICAgICAgICAgIEwgMjE1IDIyMCBMIDIyNSAyMzggTCAyMzUgMjIwIAogICAgICAgICAgIEwgMjQ1IDIyMCBMIDI1NSAyMzggTCAyNjUgMjIwIAogICAgICAgICAgIEwgMjc1IDIyMCBMIDI4NSAyMzggTCAyOTUgMjIwIAogICAgICAgICAgIEwgMzA1IDIyMCBMIDMwNSAyNTAgTCAxNzUgMjUwIFoiIAogICAgICAgIGZpbGw9IiNmYWZhZmEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gNCBQZW5zIC0tPgogIDwhLS0gUGVuIDEgKFggPSAxOTUpIC0tPgogIDxwYXRoIGQ9Ik0gMTg3IDIyMCBMIDE5NSAyMzggTCAyMDMgMjIwIFoiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjE4NyIgeT0iODAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNDAiIGZpbGw9InVybCgjcGVuQm9keSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxsaW5lIHgxPSIxOTEiIHkxPSI4MCIgeDI9IjE5MSIgeTI9IjIyMCIgc3Ryb2tlPSIjMDI4OGQxIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICA8bGluZSB4MT0iMTk1IiB5MT0iODAiIHgyPSIxOTUiIHkyPSIyMjAiIHN0cm9rZT0iIzAyODhkMSIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgPGxpbmUgeDE9IjE5OSIgeTE9IjgwIiB4Mj0iMTk5IiB5Mj0iMjIwIiBzdHJva2U9IiMwMjg4ZDEiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxsaW5lIHgxPSIyMDMiIHkxPSI5MCIgeDI9IjIwNSIgeTI9IjkwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8bGluZSB4MT0iMjA1IiB5MT0iOTAiIHgyPSIyMDUiIHkyPSIxMzAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxlbGxpcHNlIGN4PSIxOTUiIGN5PSI4MCIgcng9IjgiIHJ5PSIxLjUiIGZpbGw9IiMwMjg4ZDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgoKICA8IS0tIFBlbiAyIChYID0gMjI1KSAtLT4KICA8cGF0aCBkPSJNIDIxNyAyMjAgTCAyMjUgMjM4IEwgMjMzIDIyMCBaIiBmaWxsPSIjZTBlMGUwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8cmVjdCB4PSIyMTciIHk9IjgwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTQwIiBmaWxsPSJ1cmwoI3BlbkJvZHkpIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8bGluZSB4MT0iMjIxIiB5MT0iODAiIHgyPSIyMjEiIHkyPSIyMjAiIHN0cm9rZT0iIzAyODhkMSIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgPGxpbmUgeDE9IjIyNSIgeTE9IjgwIiB4Mj0iMjI1IiB5Mj0iMjIwIiBzdHJva2U9IiMwMjg4ZDEiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxsaW5lIHgxPSIyMjkiIHkxPSI4MCIgeDI9IjIyOSIgeTI9IjIyMCIgc3Ryb2tlPSIjMDI4OGQxIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICA8bGluZSB4MT0iMjMzIiB5MT0iOTAiIHgyPSIyMzUiIHkyPSI5MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGxpbmUgeDE9IjIzNSIgeTE9IjkwIiB4Mj0iMjM1IiB5Mj0iMTMwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8ZWxsaXBzZSBjeD0iMjI1IiBjeT0iODAiIHJ4PSI4IiByeT0iMS41IiBmaWxsPSIjMDI4OGQxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KCiAgPCEtLSBQZW4gMyAoWCA9IDI1NSkgLS0+CiAgPHBhdGggZD0iTSAyNDcgMjIwIEwgMjU1IDIzOCBMIDI2MyAyMjAgWiIgZmlsbD0iI2UwZTBlMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHJlY3QgeD0iMjQ3IiB5PSI4MCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE0MCIgZmlsbD0idXJsKCNwZW5Cb2R5KSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGxpbmUgeDE9IjI1MSIgeTE9IjgwIiB4Mj0iMjUxIiB5Mj0iMjIwIiBzdHJva2U9IiMwMjg4ZDEiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxsaW5lIHgxPSIyNTUiIHkxPSI4MCIgeDI9IjI1NSIgeTI9IjIyMCIgc3Ryb2tlPSIjMDI4OGQxIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICA8bGluZSB4MT0iMjU5IiB5MT0iODAiIHgyPSIyNTkiIHkyPSIyMjAiIHN0cm9rZT0iIzAyODhkMSIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgPGxpbmUgeDE9IjI2MyIgeTE9IjkwIiB4Mj0iMjY1IiB5Mj0iOTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxsaW5lIHgxPSIyNjUiIHkxPSI5MCIgeDI9IjI2NSIgeTI9IjEzMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGVsbGlwc2UgY3g9IjI1NSIgY3k9IjgwIiByeD0iOCIgcnk9IjEuNSIgZmlsbD0iIzAyODhkMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+CgogIDwhLS0gUGVuIDQgKFggPSAyODUpIC0tPgogIDxwYXRoIGQ9Ik0gMjc3IDIyMCBMIDI4NSAyMzggTCAyOTMgMjIwIFoiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjI3NyIgeT0iODAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNDAiIGZpbGw9InVybCgjcGVuQm9keSkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxsaW5lIHgxPSIyODEiIHkxPSI4MCIgeDI9IjI4MSIgeTI9IjIyMCIgc3Ryb2tlPSIjMDI4OGQxIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICA8bGluZSB4MT0iMjg1IiB5MT0iODAiIHgyPSIyODUiIHkyPSIyMjAiIHN0cm9rZT0iIzAyODhkMSIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgPGxpbmUgeDE9IjI4OSIgeTE9IjgwIiB4Mj0iMjg5IiB5Mj0iMjIwIiBzdHJva2U9IiMwMjg4ZDEiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogIDxsaW5lIHgxPSIyOTMiIHkxPSI5MCIgeDI9IjI5NSIgeTI9IjkwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8bGluZSB4MT0iMjk1IiB5MT0iOTAiIHgyPSIyOTUiIHkyPSIxMzAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgogIDxlbGxpcHNlIGN4PSIyODUiIGN5PSI4MCIgcng9IjgiIHJ5PSIxLjUiIGZpbGw9IiMwMjg4ZDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=" alt="Pen Stand">
        <div class="solution-header">Solution:</div>
        <div class="step">Volume of Cuboid = 15 × 10 × 3.5 = 525 cm³.</div>
        <div class="step">Volume of one Conical Depression = (1/3)πr²h.</div>
        <div class="step">r = 0.5 cm, h = 1.4 cm.</div>
        <div class="step">Vol = (1/3) × (22/7) × 0.25 × 1.4 = (1/3) × 22 × 0.25 × 0.2 = 1.1/3 = 0.366 cm³.</div>
        <div class="step">Volume of 4 Depressions = 4 × 0.366 = 1.464 cm³.</div>
        <div class="step">Volume of Wood = 525 - 1.464 = 523.536 cm³.</div>
        <div class="final-answer">Volume of Wood ≈ 523.53 cm³.</div>
    </div>

    <div class="content-box">
        <div class="question">5. A vessel is in the form of an inverted cone. Its height is 8 cm and the radius of its
            top, which is open, is 5 cm. It is filled with water up to the brim. When lead shots, each of which is a
            sphere of radius 0.5 cm are dropped into the vessel, one-fourth of the water flows out. Find the number of
            lead shots dropped in the vessel.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTAwIDEwMCBMIDE1MCAyMjAgTCAyMDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTAwIiByeD0iNTAiIHJ5PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAxMTAgMTIwIEwgMTUwIDIxMCBMIDE5MCAxMjAgWiIgZmlsbD0ibGlnaHRibHVlIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIxNDAiIGN5PSIxODAiIHI9IjIiIGZpbGw9ImJsYWNrIi8+PGNpcmNsZSBjeD0iMTQ1IiBjeT0iMTgwIiByPSIyIiBmaWxsPSJibGFjayIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE4MCIgcj0iMiIgZmlsbD0iYmxhY2siLz48Y2lyY2xlIGN4PSIxNTUiIGN5PSIxODAiIHI9IjIiIGZpbGw9ImJsYWNrIi8+PGNpcmNsZSBjeD0iMTYwIiBjeT0iMTgwIiByPSIyIiBmaWxsPSJibGFjayIvPjx0ZXh0IHg9IjE1MCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WZXNzZWwgKyBMZWFkIFNob3RzPC90ZXh0Pjwvc3ZnPg==" alt="Lead Shots Problem">
        <div class="solution-header">Solution:</div>
        <div class="step">Volume of Cone = (1/3)πr²h = (1/3)π(25)(8) = 200π/3 cm³.</div>
        <div class="step">Volume of water flowed out = (1/4) × (200π/3) = 50π/3 cm³.</div>
        <div class="step">Volume of one lead shot (Sphere) = (4/3)πr³ = (4/3)π(0.5)³ = (4/3)π(0.125) = 0.5π/3 = π/6 cm³.
        </div>
        <div class="step">Number of shots = (Total Val Flowed) / (Vol of one shot).</div>
        <div class="step">= (50π/3) / (π/6) = (50/3) × 6 = 100.</div>
        <div class="final-answer">Number of Lead Shots = 100.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm,
            which is surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given
            that 1 cm³ of iron has approximately 8g mass. (Use π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTEwIDE4MCBMIDExMCAyNDAgQSA0MCAxMy4zMzMzMzMzMzMzMzMzMzQgMCAwIDAgMTkwIDI0MCBMIDE5MCAxODAgWiIgZmlsbD0iIzllOWU5ZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjE1MCIgY3k9IjE4MCIgcng9IjQwIiByeT0iMTMuMzMzMzMzMzMzMzMzMzM0IiBmaWxsPSIjOWU5ZTllIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDEzMCAxMjAgTCAxMzAgMTgwIEEgMjAgNi42NjY2NjY2NjY2NjY2NjcgMCAwIDAgMTcwIDE4MCBMIDE3MCAxMjAgWiIgZmlsbD0iI2JkYmRiZCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjE1MCIgY3k9IjEyMCIgcng9IjIwIiByeT0iNi42NjY2NjY2NjY2NjY2NjciIGZpbGw9IiNiZGJkYmQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Jcm9uIFBvbGU8L3RleHQ+PC9zdmc+" alt="Iron Pole Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Big Cylinder: h1 = 220, r1 = 12. small Cylinder: h2 = 60, r2 = 8.</div>
        <div class="step">Volume = πr₁²h₁ + πr₂²h₂</div>
        <div class="step">= 3.14 × (144 × 220 + 64 × 60)</div>
        <div class="step">= 3.14 × (31680 + 3840)</div>
        <div class="step">= 3.14 × 35520 = 111532.8 cm³.</div>
        <div class="step">Mass = 111532.8 × 8 g = 892262.4 g = 892.26 kg.</div>
        <div class="final-answer">Mass = 892.26 kg.</div>
    </div>

    <div class="content-box">
        <div class="question">7. A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing
            on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it
            touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm
            and its height is 180 cm.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAxMDAgMTAwIEwgMTAwIDI1MCBMIDIwMCAyNTAgTCAyMDAgMTAwIFoiIGZpbGw9ImxpZ2h0Ymx1ZSIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZD0iTSAxMDAgMjUwIEEgNTAgNTAgMCAwIDAgMjAwIDI1MCBaIiBmaWxsPSIjY2NjIiBzdHJva2U9ImJsYWNrIi8+PHBhdGggZD0iTSAxNTAgMTUwIEwgMTAwIDI1MCBMIDIwMCAyNTAgWiIgZmlsbD0iI2NjYyIgc3Ryb2tlPSJibGFjayIvPjx0ZXh0IHg9IjE1MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Tb2xpZCBpbiBXYXRlcjwvdGV4dD48L3N2Zz4=" alt="Solid in Water">
        <div class="solution-header">Solution:</div>
        <div class="step">Radius r = 60 cm (all same).</div>
        <div class="step">Cylinder height H = 180 cm. Cone height h = 120 cm. Hemisphere height = 60 cm.</div>
        <div class="step">Total height of solid = 120 + 60 = 180 cm = H. Matches.</div>
        <div class="step">Volume of Water Left = Vol Cylinder - Vol Solid.</div>
        <div class="step">= πr²H - [(1/3)πr²h + (2/3)πr³]</div>
        <div class="step">= πr² [H - h/3 - 2r/3]</div>
        <div class="step">= (22/7) × 3600 × [180 - 40 - 40]</div>
        <div class="step">= (22/7) × 3600 × 100</div>
        <div class="step">= 1.131 m³.</div>
        <div class="final-answer">Volume of Water Left ≈ 1.131 m³.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A spherical glass vessel has a cylindrical neck 8 cm long, 2 cm in diameter; the
            diameter of the spherical part is 8.5 cm. By measuring the amount of water it holds, a child finds its
            volume to be 345 cm³. Check whether she is correct, taking the above as the inside measurements, and π =
            3.14.</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9ImJsYWNrIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjE0MCIgeT0iMTIwIiB3aWR0aD0iMjAiIGhlaWdodD0iNDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HbGFzcyBWZXNzZWw8L3RleHQ+PC9zdmc+" alt="Glass Vessel">
        <div class="solution-header">Solution:</div>
        <div class="step">Sphere d = 8.5 => r = 4.25. Cylinder r = 1, h = 8.</div>
        <div class="step">Volume = Volume Sphere + Volume Cylinder.</div>
        <div class="step">= (4/3)π(4.25)³ + π(1)²(8)</div>
        <div class="step">= 3.14 [(4/3)(76.765) + 8]</div>
        <div class="step">= 3.14 [102.35 + 8]</div>
        <div class="step">= 3.14 × 110.35 ≈ 346.51 cm³.</div>
        <div class="step">346.51 ≠ 345.</div>
        <div class="final-answer">She is incorrect. Correct volume ≈ 346.51 cm³.</div>
    </div>

</body>

</html>`,
        examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surface Areas and Volumes - Examples</title>
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #AB47BC !important; }
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">Example 1. Rasheed got a playing top (lattu) as his birthday present, which surprisingly
            had no colour on it. He wanted to colour it with his crayons. The top is shaped like a cone surmounted by a
            hemisphere. The total height of the top is 5 cm and the diameter of the top is 3.5 cm. Find the area he has
            to colour. (Use π = 22/7)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gMTEwIDE1MCBBIDQwIDQwIDAgMCAwIDE5MCAxNTAgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGQ9Ik0gMTUwIDMwIEwgMTEwIDE1MCBMIDE5MCAxNTAgWiIgZmlsbD0iI2ZmZjljNCIgc3Ryb2tlPSJibGFjayIvPjxsaW5lIHgxPSIyMTAiIHkxPSIzMCIgeDI9IjIxMCIgeTI9IjE5MCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSIyMzAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTUuNWNtPC90ZXh0PjxsaW5lIHgxPSIxNTAiIHkxPSIxNTAiIHgyPSIxOTAiIHkyPSIxNTAiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTcwIiB5PSIxNjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPnI9My41PC90ZXh0Pjwvc3ZnPg==" alt="Toy Top">
        <div class="solution-header">Solution:</div>
        <div class="step">Diameter d = 3.5 cm -> r = 1.75 cm.</div>
        <div class="step">Total height = 5 cm. Height of cone h = 5 - 1.75 = 3.25 cm.</div>
        <div class="step">Slant height l = √(h² + r²) = √(3.25² + 1.75²) ≈ 3.7 cm.</div>
        <div class="step">Area = CSA Hemisphere + CSA Cone.</div>
        <div class="step">= 2πr² + πrl</div>
        <div class="step">= πr(2r + l)</div>
        <div class="step">= (22/7) × 1.75 × (3.5 + 3.7)</div>
        <div class="step">= 5.5 × 7.2 = 39.6 cm².</div>
        <div class="final-answer">Area to colour ≈ 39.6 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. The decorative block shown in Fig. is made of two solids — a cube and a
            hemisphere. The base of the block is a cube with edge 5 cm, and the hemisphere fixed on the top has a
            diameter of 4.2 cm. Find the total surface area of the block. (Use π = 22/7)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMzIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPgogIDxkZWZzPgogICAgPCEtLSBBcnJvd2hlYWQgbWFya2VycyAtLT4KICAgIDxtYXJrZXIgaWQ9ImFycm93IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjUiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDEwIDUgTCAwIDguNSB6IiBmaWxsPSJibGFjayIvPgogICAgPC9tYXJrZXI+CiAgICA8IS0tIFNwaGVyZSBHcmFkaWVudCAtLT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iaGVtaUdyYWQiIGN4PSI1MCUiIGN5PSIzMCUiIHI9IjUwJSIgZng9IjQwJSIgZnk9IjIwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNlMWY1ZmUiIHN0b3Atb3BhY2l0eT0iMC40Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAyODhkMSIgc3RvcC1vcGFjaXR5PSIwLjU1Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KCiAgPCEtLSAzRCBDdWJlIEZhY2VzIChXaGl0ZSBiYWNrZ3JvdW5kIHdpdGggYmx1ZSBib3JkZXJzKSAtLT4KICA8IS0tIFRvcCBmYWNlIC0tPgogIDxwYXRoIGQ9Ik0gODAgMTMwIEwgMTM1IDgwIEwgMjc1IDgwIEwgMjIwIDEzMCBaIiBmaWxsPSIjZjVmYmZmIiBzdHJva2U9IiMwMDkwZjAiIHN0cm9rZS13aWR0aD0iMS43NSIvPgogIDwhLS0gUmlnaHQgZmFjZSAtLT4KICA8cGF0aCBkPSJNIDIyMCAxMzAgTCAyNzUgODAgTCAyNzUgMjEwIEwgMjIwIDI2MCBaIiBmaWxsPSIjZjVmYmZmIiBzdHJva2U9IiMwMDkwZjAiIHN0cm9rZS13aWR0aD0iMS43NSIvPgogIDwhLS0gRnJvbnQgZmFjZSAtLT4KICA8cGF0aCBkPSJNIDgwIDEzMCBMIDIyMCAxMzAgTCAyMjAgMjYwIEwgODAgMjYwIFoiIGZpbGw9IiNmNWZiZmYiIHN0cm9rZT0iIzAwOTBmMCIgc3Ryb2tlLXdpZHRoPSIxLjc1Ii8+CgogIDwhLS0gSGVtaXNwaGVyZSBCYXNlIEVsbGlwc2UgKERhc2hlZCBhcyBpdCBpcyBhIHJpbSBvbiB0aGUgdG9wIGZhY2UpIC0tPgogIDxlbGxpcHNlIGN4PSIxNzcuNSIgY3k9IjEwNSIgcng9IjU1IiByeT0iMTguNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA5MGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIi8+CgogIDwhLS0gSGVtaXNwaGVyZSBEb21lIC0tPgogIDxwYXRoIGQ9Ik0gMTIyLjUgMTA1IEEgNTUgNTUgMCAwIDEgMjMyLjUgMTA1IFoiIGZpbGw9InVybCgjaGVtaUdyYWQpIiBzdHJva2U9IiMwMDkwZjAiIHN0cm9rZS13aWR0aD0iMiIvPgoKICA8IS0tIERpbWVuc2lvbiBIZWxwZXIgLyBFeHRlbnNpb24gbGluZXMgLS0+CiAgPCEtLSBIZWlnaHQgaGVscGVycyAtLT4KICA8bGluZSB4MT0iNzUiIHkxPSIxMzAiIHgyPSI1MCIgeTI9IjEzMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIi8+CiAgPGxpbmUgeDE9Ijc1IiB5MT0iMjYwIiB4Mj0iNTAiIHkyPSIyNjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiIvPgogIDwhLS0gV2lkdGggaGVscGVycyAtLT4KICA8bGluZSB4MT0iODAiIHkxPSIyNjUiIHgyPSI4MCIgeTI9IjI4MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIi8+CiAgPGxpbmUgeDE9IjIyMCIgeTE9IjI2NSIgeDI9IjIyMCIgeTI9IjI4MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIi8+CiAgCiAgPCEtLSBEaWFtZXRlciB2ZXJ0aWNhbCBkYXNoZWQgaGVscGVyIGxpbmVzIC0tPgogIDxsaW5lIHgxPSIxMjIuNSIgeTE9IjEwNSIgeDI9IjEyMi41IiB5Mj0iNTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIi8+CiAgPGxpbmUgeDE9IjIzMi41IiB5MT0iMTA1IiB4Mj0iMjMyLjUiIHkyPSI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtZGFzaGFycmF5PSIzLDMiLz4KCiAgPCEtLSBMZWZ0IEFycm93IChWZXJ0aWNhbCBIZWlnaHQ6IDUgY20pIC0tPgogIDxsaW5lIHgxPSI1NSIgeTE9IjEzNiIgeDI9IjU1IiB5Mj0iMjU0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgbWFya2VyLXN0YXJ0PSJ1cmwoI2Fycm93KSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICA8dGV4dCB4PSIzNSIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NSBjbTwvdGV4dD4KCiAgPCEtLSBCb3R0b20gQXJyb3cgKEhvcml6b250YWwgV2lkdGg6IDUgY20pIC0tPgogIDxsaW5lIHgxPSI4NiIgeTE9IjI3NSIgeDI9IjIxNCIgeTI9IjI3NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMTUwIiB5PSIyOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IGNtPC90ZXh0PgoKICA8IS0tIERlcHRoIEFycm93IChTaWRlIEVkZ2U6IDUgY20pIC0tPgogIDxsaW5lIHgxPSIyMzIiIHkxPSIxMzciIHgyPSIyNzkiIHkyPSI5NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMjc4IiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMyIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IGNtPC90ZXh0PgoKICA8IS0tIERpYW1ldGVyIEFycm93IChIZW1pc3BoZXJlOiA0LjIgY20pIC0tPgogIDxsaW5lIHgxPSIxMjguNSIgeTE9IjU1IiB4Mj0iMjI2LjUiIHkyPSI1NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgPHRleHQgeD0iMTc3LjUiIHk9IjQ2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NC4yIGNtPC90ZXh0Pgo8L3N2Zz4=" alt="Block Diagram">
        <div class="solution-header">Solution:</div>
        <div class="step">Cube edge a = 5 cm. Hemisphere d = 4.2 cm -> r = 2.1 cm.</div>
        <div class="step">TSA = TSA of Cube - Base of Hemisphere + CSA Hemisphere.</div>
        <div class="step">= 6a² - πr² + 2πr²</div>
        <div class="step">= 6(25) + π(2.1)²</div>
        <div class="step">= 150 + (22/7) × 4.41</div>
        <div class="step">= 150 + 13.86 = 163.86 cm².</div>
        <div class="final-answer">Total Surface Area = 163.86 cm².</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. A wooden toy rocket is in the shape of a cone mounted on a cylinder, as shown
            in Fig. The height of the entire rocket is 26 cm, while the height of the conical part is 6 cm. The base of
            the conical portion has a diameter of 5 cm, while the base diameter of the cylindrical portion is 3 cm. If
            the conical portion is to be painted orange and the cylindrical portion yellow, find the area of the rocket
            painted with each of these colours. (Use π = 3.14)</div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwYXRoIGQ9Ik0gOTAgMTUwIEwgOTAgMjEwIEEgNjAgMjAuMCAwIDAgMCAyMTAgMjEwIEwgMjEwIDE1MCBaIiBmaWxsPSIjZmZlMGIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTUwIiByeD0iNjAiIHJ5PSIyMC4wIiBmaWxsPSIjZmZlMGIyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDE1MCA1MCBMIDkwIDE1MCBMIDIxMCAxNTAgWiIgZmlsbD0iI2ZmY2NiYyIgc3Ryb2tlPSJibGFjayIvPjxlbGxpcHNlIGN4PSIxNTAiIGN5PSIxNTAiIHJ4PSI2MCIgcnk9IjIwLjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIzMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48dGV4dCB4PSI5MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sPTIuOG08L3RleHQ+PC9zdmc+" alt="Toy Rocket">
        <div class="solution-header">Solution:</div>
        <div class="step">Cone: h = 6 cm, r = 2.5 cm. l = √(36 + 6.25) = 6.5 cm.</div>
        <div class="step">Cylinder: h = 26 - 6 = 20 cm, r = 1.5 cm.</div>
        <div class="step">Orange Area (Cone) = CSA + Base Ring Area (Cone base - Cylinder base).</div>
        <div class="step">= π(2.5)(6.5) + π(2.5² - 1.5²)</div>
        <div class="step">= 3.14 (16.25 + 4) = 63.585 cm².</div>
        <div class="step">Yellow Area (Cylinder) = CSA + Base Area.</div>
        <div class="step">= 2π(1.5)(20) + π(1.5)²</div>
        <div class="step">= 3.14 (60 + 2.25) = 195.465 cm².</div>
        <div class="final-answer">Orange: 63.585 cm²; Yellow: 195.465 cm².</div>
    </div>

</body>

</html>`
    }
};
