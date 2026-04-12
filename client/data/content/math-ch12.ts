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
        { id: "exercise1", name: "Exercise 12.1", questions: [] },
        { id: "exercise2", name: "Exercise 12.2", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. The volume of the solid is:</span>",
            "options": [
                "(A) π cm³",
                "(B) 2π cm³",
                "(C) 3π cm³",
                "(D) 4π cm³"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">Combining two cubes of side 'a' end to end results in a cuboid with surface area:</span>",
            "options": [
                "(A) 12a²",
                "(B) 10a²",
                "(C) 8a²",
                "(D) 6a²"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">A cylindrical pencil sharpened at one end is combination of:</span>",
            "options": [
                "(A) a cone and a cylinder",
                "(B) frustum of a cone and a cylinder",
                "(C) a hemisphere and a cylinder",
                "(D) two cylinders"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">A surahi is the combination of:</span>",
            "options": [
                "(A) a sphere and a cylinder",
                "(B) a hemisphere and a cylinder",
                "(C) two hemispheres",
                "(D) a cylinder and a cone"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">A plumbline (sahul) is the combination of:</span>",
            "options": [
                "(A) a cone and a cylinder",
                "(B) a hemisphere and a cone",
                "(C) frustum of a cone and a cylinder",
                "(D) sphere and cylinder"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">The shape of a gilli, in the gilli-danda game, is a combination of:</span>",
            "options": [
                "(A) two cylinders",
                "(B) a cone and a cylinder",
                "(C) two cones and a cylinder",
                "(D) two cylinders and a cone"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">A shuttle cock used for playing badminton has the shape of the combination of:</span>",
            "options": [
                "(A) a cylinder and a sphere",
                "(B) a sphere and a cone",
                "(C) a cylinder and a hemisphere",
                "(D) frustum of cone and a hemisphere"
            ],
            "correctAnswer": "D"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">A medicine capsule is in the shape of a cylinder of diameter 0.5 cm with two hemispheres stuck to each of its ends. The length of entire capsule is 2 cm. The capacity of the capsule is:</span>",
            "options": [
                "(A) 0.36 cm³",
                "(B) 0.35 cm³",
                "(C) 0.34 cm³",
                "(D) 0.33 cm³"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">If two solid hemispheres of same base radius r are joined together along their bases, then curved surface area of this new solid is:</span>",
            "options": [
                "(A) 4πr²",
                "(B) 6πr²",
                "(C) 3πr²",
                "(D) 8πr²"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">Volume of a bird-bath which consists of a cylinder with a hemispherical depression at one end, with height h and radius r, is:</span>",
            "options": [
                "(A) πr²h + (2/3)πr³",
                "(B) πr²h - (2/3)πr³",
                "(C) πr²h - (4/3)πr³",
                "(D) None of these"
            ],
            "correctAnswer": "B"
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
            border-bottom: 2px solid #AB47BC;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #AB47BC;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .section-title {
            color: #AB47BC;
            font-weight: normal ;
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
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #AB47BC !important; }
  .true-text { color: #AB47BC !important; }
  .false-text { color: #AB47BC !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #AB47BC !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">In this chapter, we determine the surface area and volume of solid figures formed by combining
            two or more basic solids like cube, cuboid, cylinder, cone, sphere and hemisphere.</div>
        <img src="overview_solids.svg" alt="Basic Solids">
    </div>

    <div class="content-box">
        <div class="section-title">2. Key Formulas</div>
        <div class="formula-box">
            Cuboid:<br>
            SA = 2(lb + bh + hl)<br>
            Volume = lbh<br><br>
            Cube:<br>
            SA = 6a²<br>
            Volume = a³<br><br>
            Cylinder:<br>
            CSA = 2πrh<br>
            TSA = 2πr(r + h)<br>
            Volume = πr²h<br><br>
            Cone:<br>
            CSA = πrl (where l = √(h² + r²))<br>
            TSA = πr(l + r)<br>
            Volume = (1/3)πr²h<br><br>
            Sphere:<br>
            SA = 4πr²<br>
            Volume = (4/3)πr³<br><br>
            Hemisphere:<br>
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
            border-bottom: 2px solid #AB47BC;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #AB47BC;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: normal ;
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
            color: #AB47BC;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #AB47BC;
            font-weight: normal ;
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
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #AB47BC !important; }
  .true-text { color: #AB47BC !important; }
  .false-text { color: #AB47BC !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #AB47BC !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. Two cubes each of volume 64 cm³ are joined end to end. Find the surface area of the
            resulting cuboid.</div>
        <img src="ex12_1_q1.svg" alt="Two Cubes Joined">
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
        <img src="ex12_1_q2.svg" alt="Vessel Diagram">
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
        <img src="ex12_1_q3.svg" alt="Toy Diagram">
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
        <img src="ex12_1_q4.svg" alt="Cube with Hemisphere">
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
        <img src="ex12_1_q5.svg" alt="Depression in Cube">
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
        <img src="ex12_1_q6.svg" alt="Capsule Diagram">
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
        <img src="ex12_1_q7.svg" alt="Tent Diagram">
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
        <img src="ex12_1_q8.svg" alt="Conical Cavity">
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
        <img src="ex12_1_q9.svg" alt="Scooped Cylinder">
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
            border-bottom: 2px solid #AB47BC;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #AB47BC;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: normal ;
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
            color: #AB47BC;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #AB47BC;
            font-weight: normal ;
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
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #AB47BC !important; }
  .true-text { color: #AB47BC !important; }
  .false-text { color: #AB47BC !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #AB47BC !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. A solid is in the shape of a cone standing on a hemisphere with both their radii being
            equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π.
        </div>
        <img src="ex12_2_q1.svg" alt="Solid Cone on Hemisphere">
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
        <img src="ex12_2_q2.svg" alt="Model Diagram">
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
        <img src="ex12_2_q3.svg" alt="Gulab Jamun">
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
        <img src="ex12_2_q4.svg" alt="Pen Stand">
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
        <img src="ex12_2_q5.svg" alt="Lead Shots Problem">
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
        <img src="ex12_2_q6.svg" alt="Iron Pole Diagram">
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
        <img src="ex12_2_q7.svg" alt="Solid in Water">
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
        <img src="ex12_2_q8.svg" alt="Glass Vessel">
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
            border-bottom: 2px solid #AB47BC;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #AB47BC;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
            margin: 10px 0;
            font-family: 'Kalam', cursive;
        }

        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 15px; display: flow-root; transition: transform 0.2s ease; }

        .question {
            font-weight: normal ;
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
            color: #AB47BC;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #AB47BC;
            font-weight: normal ;
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
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #AB47BC !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #AB47BC !important; }
  .true-text { color: #AB47BC !important; }
  .false-text { color: #AB47BC !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #AB47BC !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">Example 1. Rasheed got a playing top (lattu) as his birthday present, which surprisingly
            had no colour on it. He wanted to colour it with his crayons. The top is shaped like a cone surmounted by a
            hemisphere. The total height of the top is 5 cm and the diameter of the top is 3.5 cm. Find the area he has
            to colour. (Use π = 22/7)</div>
        <img src="example_1.svg" alt="Toy Top">
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
        <img src="example_2.svg" alt="Block Diagram">
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
        <img src="example_3_rocket.svg" alt="Toy Rocket">
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
