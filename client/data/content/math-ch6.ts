import { ChapterContent } from "../types";

export const mathCh6: ChapterContent = {
  id: "ch6",
  number: 6,
  title: "Triangles",
  introduction: "A triangle is a closed shape with three angles. This chapter dives beyond basic properties into the fascinating world of geometric similarity.",
  definitions: [
  {
    "term": "Similar Figures",
    "description": "Same shape but not necessarily the same size."
  },
  {
    "term": "Congruent Figures",
    "description": "Exactly the same shape and size."
  },
  {
    "term": "Equiangular Triangles",
    "description": "Corresponding angles are equal."
  }
],
  keyPoints: [
  "Basic Proportionality Theorem (BPT/Thales Theorem): A line parallel to one side dividing the other two sides divides them in the same ratio.",
  "Similarity criteria: AA, SAS, SSS."
],
  formulas: [],
  crux: [
  "When triangles are similar, their corresponding angles are equal, and the ratio of their corresponding sides is perfectly constant."
],
  summary: [
  "Similarity forms the bedrock of trigonometry and scaling.",
  "It distinguishes exactness (congruence) from scaled replicas (similarity).",
  "Carefully read and understand every problem statement before jumping into the solution.",
  "A strong grasp of the core concepts is the key to solving complex problems easily.",
  "Make a habit of practicing the solved examples to get familiar with standard solution formats."
],
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 6.1", questions: [] },
    { id: "exercise2", name: "Exercise 6.2", questions: [] },
    { id: "exercise3", name: "Exercise 6.3", questions: [] },
    { id: "theorems", name: "Theorems", questions: [] }
  ],
  theorems: [
  {
    "id": "theo1",
    "number": "6.1",
    "name": "Basic Proportionality Theorem (BPT)",
    "statement": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" /> <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Statement:</span><br/>If a line is drawn parallel to one side of a triangle to intersect the other two sides in\ndistinct points, the other two sides are divided in the same ratio. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Given:</span><br/>A triangle ABC in which a line parallel to side BC intersects other two sides AB and AC at D\nand E respectively. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">To Prove:</span><br/><sup>AD</sup>&frasl;<sub>DB</sub> = <sup>AE</sup>&frasl;<sub>EC</sub>",
    "proof": [
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Construction:</span>",
      "Join BE and CD and draw DM ⊥ AC and EN ⊥ AB.",
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Proof:</span>",
      "Area of triangle = <sup>1</sup>&frasl;<sub>2</sub> × base × height",
      "Area(ADE) = <sup>1</sup>&frasl;<sub>2</sub> × AD × EN",
      "Area(BDE) = <sup>1</sup>&frasl;<sub>2</sub> × DB × EN",
      "So, <sup>ar(ADE)</sup>&frasl;<sub>ar(BDE)</sub> = <sup>1</sup>&frasl;<sub>2</sub> AD ×\nEN<sup>1</sup>&frasl;<sub>2</sub> DB × EN = <sup>AD</sup>&frasl;<sub>DB</sub> ...(1)",
      "Similarly, Area(ADE) = <sup>1</sup>&frasl;<sub>2</sub> × AE × DM and Area(DEC) = <sup>1</sup>&frasl;<sub>2</sub> × EC × DM",
      "So, <sup>ar(ADE)</sup>&frasl;<sub>ar(DEC)</sub> = <sup>1</sup>&frasl;<sub>2</sub> AE ×\nDM<sup>1</sup>&frasl;<sub>2</sub> EC × DM = <sup>AE</sup>&frasl;<sub>EC</sub> ...(2)",
      "But, ∆BDE and ∆DEC are on the same base DE and between the same parallels BC and DE.",
      "Therefore, ar(BDE) = ar(DEC)",
      "From (1) and (2), we get:",
      "<sup>AD</sup>&frasl;<sub>DB</sub> = <sup>AE</sup>&frasl;<sub>EC</sub>",
      "Hence Proved."
    ]
  },
  {
    "id": "theo2",
    "number": "6.2",
    "name": "Converse of BPT",
    "statement": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" /> <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Statement:</span><br/>If a line divides any two sides of a triangle in the same ratio, then the line is parallel to\nthe third side. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Given:</span><br/>A triangle ABC and a line DE intersecting AB at D and AC at E such that <sup>AD</sup>&frasl;<sub>DB</sub> = <sup>AE</sup>&frasl;<sub>EC</sub>. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">To Prove:</span><br/>DE || BC.",
    "proof": [
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Proof:</span>",
      "Let us assume that DE is not parallel to BC.",
      "Then, draw a line DE' parallel to BC.",
      "By BPT, since DE' || BC:",
      "<sup>AD</sup>&frasl;<sub>DB</sub> = <sup>AE'</sup>&frasl;<sub>E'C</sub> ...(1)",
      "But given: <sup>AD</sup>&frasl;<sub>DB</sub> = <sup>AE</sup>&frasl;<sub>EC</sub> ...(2)",
      "From (1) and (2):",
      "<sup>AE'</sup>&frasl;<sub>E'C</sub> = <sup>AE</sup>&frasl;<sub>EC</sub>",
      "Adding 1 to both sides:",
      "<sup>AE'</sup>&frasl;<sub>E'C</sub> + 1 = <sup>AE</sup>&frasl;<sub>EC</sub> + 1",
      "<sup>AE' + E'C</sup>&frasl;<sub>E'C</sub> = <sup>AE +\nEC</sup>&frasl;<sub>EC</sub>",
      "<sup>AC</sup>&frasl;<sub>E'C</sub> = <sup>AC</sup>&frasl;<sub>EC</sub>",
      "This implies E'C = EC.",
      "This is only possible if E and E' coincide.",
      "So, DE coincides with DE'.",
      "Therefore, DE || BC.",
      "Hence Proved."
    ]
  },
  {
    "id": "theo3",
    "number": "6.3",
    "name": "AAA Similarity Criterion",
    "statement": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" /> <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Statement:</span><br/>If in two triangles, corresponding angles are equal, then their corresponding sides are in the\nsame ratio (or proportion) and hence the two triangles are similar. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Given:</span><br/>Two triangles ABC and DEF such that ∠A = ∠D, ∠B = ∠E and ∠C = ∠F.",
    "proof": [
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Construction:</span>",
      "Cut DP = AB and DQ = AC and join PQ.",
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Proof:</span>",
      "In ∆ABC and ∆DPQ:",
      "AB = DP (Construction)",
      "∠A = ∠D (Given)",
      "AC = DQ (Construction)",
      "So, ∆ABC ≅ ∆DPQ (SAS Congruence rule)",
      "This gives ∠B = ∠P (CPCT)",
      "But ∠B = ∠E (Given)",
      "So, ∠P = ∠E.",
      "Since corresponding angles are equal, PQ || EF.",
      "By BPT: <sup>DP</sup>&frasl;<sub>PE</sub> = <sup>DQ</sup>&frasl;<sub>QF</sub>",
      "From this (by adding 1 to distinct ratios etc.), we get:",
      "<sup>DP</sup>&frasl;<sub>DE</sub> = <sup>DQ</sup>&frasl;<sub>DF</sub>",
      "Since DP = AB and DQ = AC:",
      "<sup>AB</sup>&frasl;<sub>DE</sub> = <sup>AC</sup>&frasl;<sub>DF</sub>",
      "Similarly, we can prove <sup>AB</sup>&frasl;<sub>DE</sub> = <sup>BC</sup>&frasl;<sub>EF</sub>.",
      "Therefore, <sup>AB</sup>&frasl;<sub>DE</sub> = <sup>AC</sup>&frasl;<sub>DF</sub> = <sup>BC</sup>&frasl;<sub>EF</sub>.",
      "Since ratio of sides is same, triangles are similar.",
      "Hence Proved."
    ]
  },
  {
    "id": "theo4",
    "number": "6.4",
    "name": "SSS Similarity Criterion",
    "statement": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" /> <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Statement:</span><br/>If in two triangles, sides of one triangle are proportional to (i.e., in the same ratio of )\nthe sides of the other triangle, then their corresponding angles are equal and hence the two triangles are\nsimilar. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Given:</span><br/>Two triangles ABC and DEF such that <sup>AB</sup>&frasl;<sub>DE</sub> = <sup>AC</sup>&frasl;<sub>DF</sub> = <sup>BC</sup>&frasl;<sub>EF</sub>.",
    "proof": [
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Proof:</span>",
      "We cut DP = AB and DQ = AC. Join PQ.",
      "Then <sup>DP</sup>&frasl;<sub>DE</sub> = <sup>DQ</sup>&frasl;<sub>DF</sub>",
      "So PQ || EF (Converse of BPT)",
      "So ∠P = ∠E and ∠Q = ∠F.",
      "Thus ∆DPQ ~ ∆DEF (AAA)",
      "Therefore: <sup>DP</sup>&frasl;<sub>DE</sub> = <sup>PQ</sup>&frasl;<sub>EF</sub>",
      "But given <sup>AB</sup>&frasl;<sub>DE</sub> = <sup>BC</sup>&frasl;<sub>EF</sub>",
      "Since DP = AB, we get PQ = BC.",
      "So ∆ABC ≅ ∆DPQ (SSS Congruence)",
      "So ∠A = ∠D, ∠B = ∠E, ∠C = ∠F.",
      "Thus, triangles are similar.",
      "Hence Proved."
    ]
  },
  {
    "id": "theo5",
    "number": "6.5",
    "name": "SAS Similarity Criterion",
    "statement": "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==\" style=\"background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\" /> <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Statement:</span><br/>If one angle of a triangle is equal to one angle of the other triangle and the sides including\nthese angles are proportional, then the two triangles are similar. <br/><span style=\"color: #26C6DA; font-weight: normal ;\">Given:</span><br/>Two triangles ABC and DEF such that <sup>AB</sup>&frasl;<sub>DE</sub> = <sup>AC</sup>&frasl;<sub>DF</sub> and ∠A = ∠D.",
    "proof": [
      "<span style=\"color: #26C6DA; font-weight: normal ;\">Proof:</span>",
      "Cut DP = AB and DQ = AC. Join PQ.",
      "Then <sup>DP</sup>&frasl;<sub>DE</sub> = <sup>DQ</sup>&frasl;<sub>DF</sub> ⇒ PQ || EF.",
      "So ∠P = ∠E and ∠Q = ∠F.",
      "So ∆DPQ ~ ∆DEF.",
      "Also ∆ABC ≅ ∆DPQ (SAS Congruence, as ∠A=∠D, AB=DP, AC=DQ).",
      "So ∆ABC ~ ∆DEF.",
      "Hence Proved."
    ]
  }
],
  mcqs: [
  {
    "id": "mcq1",
    "question": "<span style=\"font-weight: normal;\">In ∆ABC, DE || BC. If AD = 1.5 cm, BD = 3 cm and AE = 1 cm, then EC is:</span>",
    "options": [
      "(A) 1.5 cm",
      "(B) 3 cm",
      "(C) 2 cm",
      "(D) 4 cm"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq2",
    "question": "<span style=\"font-weight: normal;\">If ∆ABC ~ ∆DEF such that ∠A = 47° and ∠E = 83°, then ∠C is equal to:</span>",
    "options": [
      "(A) 50°",
      "(B) 60°",
      "(C) 70°",
      "(D) 80°"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq3",
    "question": "<span style=\"font-weight: normal;\">In ∆ABC, DE || BC. If AD = x, DB = x-2, AE = x+2 and EC = x-1, then value of x is:</span>",
    "options": [
      "(A) 3",
      "(B) 4",
      "(C) 5",
      "(D) 3.5"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq4",
    "question": "<span style=\"font-weight: normal;\">If the ratio of the perimeters of two similar triangles is 4:25, then the ratio of the areas of the similar triangles is:</span>",
    "options": [
      "(A) 16:625",
      "(B) 2:5",
      "(C) 4:25",
      "(D) 8:125"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq5",
    "question": "<span style=\"font-weight: normal;\">If in two triangles ABC and DEF, AB/DE = BC/FD, then they will be similar when:</span>",
    "options": [
      "(A) ∠B = ∠E",
      "(B) ∠A = ∠D",
      "(C) ∠B = ∠D",
      "(D) ∠A = ∠F"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq6",
    "question": "<span style=\"font-weight: normal;\">A vertical stick 20m long casts a shadow 10m long on the ground. At the same time, a tower casts a shadow 50m long. Calculate the height of the tower.</span>",
    "options": [
      "(A) 100 m",
      "(B) 120 m",
      "(C) 25 m",
      "(D) 200 m"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq7",
    "question": "<span style=\"font-weight: normal;\">The diagonals of a rhombus are 16 cm and 12 cm. Then the length of the side of the rhombus is:</span>",
    "options": [
      "(A) 9 cm",
      "(B) 10 cm",
      "(C) 8 cm",
      "(D) 20 cm"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq8",
    "question": "<span style=\"font-weight: normal;\">∆ABC ~ ∆PQR. Area(ABC) = 81 cm², Area(PQR) = 144 cm². If QR = 24 cm, then BC is:</span>",
    "options": [
      "(A) 12 cm",
      "(B) 18 cm",
      "(C) 15 cm",
      "(D) 9 cm"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq9",
    "question": "<span style=\"font-weight: normal;\">It is given that ∆ABC ~ ∆EDF such that AB = 5 cm, AC = 7 cm, DF= 15 cm and DE = 12 cm. Then the sum of the remaining sides of the triangles is:</span>",
    "options": [
      "(A) 23.05 cm",
      "(B) 16.8 cm",
      "(C) 6.25 cm",
      "(D) 24 cm"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq10",
    "question": "<span style=\"font-weight: normal;\">Two poles of height 6 m and 11 m stand vertically upright on a plane ground. If the distance between their foot is 12 m, then distance between their tops is:</span>",
    "options": [
      "(A) 12 m",
      "(B) 14 m",
      "(C) 13 m",
      "(D) 11 m"
    ],
    "correctAnswer": "C"
  }
],
  isHtmlView: true,
  htmlExercises: {
    examples: `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangles - Examples</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
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
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .example-title {
            color: #D32F2F;
            font-weight: 700;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            clear: none;
        }

        .sub-header {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.1em;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
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

        .reason {
            color: #E65100;
            font-weight: 600;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            border-top: 1px dashed #ddd;
            display: block;
            clear: both;
        }

        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 280px;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>
<div class="content-box">
        <div class="example-title">Example 1</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 350" width="450" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .arrow { fill: #26C6DA; }
    </style>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10" class="arrow"/>
    </marker>
  </defs>

  <!-- Triangle ABC -->
  <!-- A(225, 30) -->
  <!-- B(50, 300) -->
  <!-- C(400, 300) -->
  <path d="M225 30 L50 300 L400 300 Z" class="line"/>

  <!-- Line DE Parallel to BC -->
  <!-- D on AB. E on AC. -->
  <!-- Let's put DE at y = 180 -->
  <!-- Line AB: (50-225)/(300-30) = -175/270 -->
  <!-- Interp at y=180: A(225,30) + t*(B-A). 30 + t*270 = 180 => t = 150/270 = 5/9 -->
  <!-- x = 225 + (5/9)*(-175) = 225 - 97.2 = 127.8 -->
  <!-- D (128, 180) -->
  
  <!-- Line AC: (400-225)/(300-30) = 175/270 -->
  <!-- x = 225 + (5/9)*(175) = 225 + 97.2 = 322.2 -->
  <!-- E (322, 180) -->

  <line x1="128" y1="180" x2="322" y2="180" class="line"/>

  <!-- Parallel Markers (Arrows) -->
  <!-- On DE -->
  <path d="M225 180 L235 175 L225 170" fill="none" stroke="#26C6DA" stroke-width="2"/>
  
  <!-- On BC -->
  <path d="M225 300 L235 295 L225 290" fill="none" stroke="#26C6DA" stroke-width="2"/>

  <!-- Labels -->
  <text x="220" y="25" class="text" fill="#26C6DA">A</text>
  <text x="35" y="310" class="text" fill="#26C6DA">B</text>
  <text x="410" y="310" class="text" fill="#26C6DA">C</text>
  <text x="110" y="185" class="text" fill="#26C6DA">D</text>
  <text x="330" y="185" class="text" fill="#26C6DA">E</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If a line intersects sides AB and AC of a ∆ABC at D and E respectively and is parallel to BC,
            prove that \\(\\frac{AD}{AB}\\) = \\(\\frac{AE}{AC}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">DE || BC.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AD}{AB}\\) = \\(\\frac{AE}{AC}\\)</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Since DE || BC, by BPT:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">Inverting the relation:</div>
        <div class="step">\\(\\frac{DB}{AD}\\) = \\(\\frac{EC}{AE}\\)</div>
        <div class="step">Adding 1 to both sides:</div>
        <div class="step">\\(\\frac{DB}{AD}\\) + 1 = \\(\\frac{EC}{AE}\\) + 1</div>
        <div class="step">\\(\\frac{DB + AD}{AD}\\) = \\(\\frac{EC +
                    AE}{AE}\\)</div>
        <div class="step">\\(\\frac{AB}{AD}\\) = \\(\\frac{AC}{AE}\\)</div>
        <div class="step">Inverting again:</div>
        <div class="step">\\(\\frac{AD}{AB}\\) = \\(\\frac{AE}{AC}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 2</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="450" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .fill-green { fill: #DCEDC8; opacity: 0.6; } /* Light Green */
      .fill-blue { fill: #BBDEFB; opacity: 0.6; } /* Light Blue */
    </style>
  </defs>

  <!-- Fill Regions -->
  <!-- Triangle ADC (Greenish) -->
  <polygon points="120,50 50,250 400,250" class="fill-green"/>
  
  <!-- Triangle ABC (Bluish) -->
  <polygon points="120,50 330,50 400,250" class="fill-blue"/>

  <!-- Trapezium Outlines -->
  <!-- AB -->
  <line x1="120" y1="50" x2="330" y2="50" class="line"/>
  <!-- BC -->
  <line x1="330" y1="50" x2="400" y2="250" class="line"/>
  <!-- CD -->
  <line x1="400" y1="250" x2="50" y2="250" class="line"/>
  <!-- DA -->
  <line x1="50" y1="250" x2="120" y2="50" class="line"/>

  <!-- Diagonal AC -->
  <line x1="120" y1="50" x2="400" y2="250" class="inner-line"/>

  <!-- Line EF -->
  <line x1="85" y1="150" x2="365" y2="150" class="inner-line"/>

  <!-- Labels -->
  <text x="110" y="45" class="text" fill="#26C6DA">A</text>
  <text x="335" y="45" class="text" fill="#26C6DA">B</text>
  <text x="410" y="255" class="text" fill="#26C6DA">C</text>
  <text x="30" y="255" class="text" fill="#26C6DA">D</text>
  <text x="65" y="155" class="text" fill="#26C6DA">E</text>
  <text x="375" y="155" class="text" fill="#26C6DA">F</text>
  <text x="255" y="145" class="text" fill="#26C6DA">G</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">ABCD is a trapezium with AB || DC. E and F are points on non-parallel sides AD and BC
            respectively such that EF is parallel to AB. Show that \\(\\frac{AE}{ED}\\) = \\(\\frac{BF}{FC}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">AB || DC and EF || AB.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AE}{ED}\\) = \\(\\frac{BF}{FC}\\)</div>

        <div class="sub-header">Construction:</div>
        <div class="step">Join AC to intersect EF at G.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ADC, EG || DC (Since EF || AB || DC).</div>
        <div class="step">By BPT: \\(\\frac{AE}{ED}\\) = \\(\\frac{AG}{GC}\\) <span class="reason">...(1)</span></div>
        <div class="step">In ∆CAB, GF || AB.</div>
        <div class="step">By BPT: \\(\\frac{AG}{GC}\\) = \\(\\frac{BF}{FC}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{AE}{ED}\\) = \\(\\frac{BF}{FC}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 3</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Triangle PQR -->
  <!-- P(200, 50) -->
  <!-- Q(100, 300) -->
  <!-- R(300, 300) -->
  <path d="M200 50 L100 300 L300 300 Z" class="line"/>

  <!-- Line ST -->
  <!-- S(150, 175) on PQ -->
  <!-- T(250, 175) on PR -->
  <line x1="150" y1="175" x2="250" y2="175" class="line"/>

  <!-- Labels -->
  <text x="195" y="40" class="text" fill="#26C6DA">P</text>
  <text x="80" y="310" class="text" fill="#26C6DA">Q</text>
  <text x="310" y="310" class="text" fill="#26C6DA">R</text>
  <text x="130" y="180" class="text" fill="#26C6DA">S</text>
  <text x="260" y="180" class="text" fill="#26C6DA">T</text>

  <!-- Angle PST -->
  <path d="M165 175 A 15 15 0 0 0 160 160" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Angle PRQ -->
  <path d="M285 300 A 25 25 0 0 0 290 275" class="angle-arc" stroke="#26C6DA" fill="none"/>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">In Fig., \\(\\frac{PS}{SQ}\\) = \\(\\frac{PT}{TR}\\) and ∠PST = ∠PRQ. Prove that PQR is an isosceles triangle.</div>

        <div class="sub-header">Given:</div>
        <div class="step">\\(\\frac{PS}{SQ}\\) = \\(\\frac{PT}{TR}\\) and ∠PST = ∠PRQ.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">∆PQR is isosceles.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Since \\(\\frac{PS}{SQ}\\) = \\(\\frac{PT}{TR}\\), by Converse of BPT: ST || QR.</div>
        <div class="step">Therefore, ∠PST = ∠PQR <span class="reason">(Corresponding Angles)</span>.</div>
        <div class="step">But given ∠PST = ∠PRQ.</div>
        <div class="step">So, ∠PQR = ∠PRQ.</div>
        <div class="step">Sides opposite to equal angles are equal, so PQ = PR.</div>
        <div class="step">Since two sides are equal, ∆PQR is isosceles.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 4</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Side PQ -->
  <line x1="150" y1="100" x2="130" y2="200" class="line"/>

  <!-- Side RS -->
  <line x1="400" y1="50" x2="360" y2="250" class="line"/>

  <!-- Diagonals/Crossing lines -->
  <!-- PS -->
  <line x1="150" y1="100" x2="360" y2="250" class="line"/>
  
  <!-- QR -->
  <line x1="130" y1="200" x2="400" y2="50" class="line"/>

  <!-- Labels -->
  <text x="140" y="90" class="text" fill="#26C6DA">P</text>
  <text x="105" y="215" class="text" fill="#26C6DA">Q</text>
  <text x="215" y="170" class="text" fill="#26C6DA">O</text>
  <text x="405" y="45" class="text" fill="#26C6DA">R</text>
  <text x="365" y="265" class="text" fill="#26C6DA">S</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">In Fig., if PQ || RS, prove that ∆POQ ~ ∆SOR.</div>

        <div class="sub-header">Given:</div>
        <div class="step">PQ || RS.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">∆POQ ~ ∆SOR.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">In ∆POQ and ∆SOR:</div>
        <div class="step">1. ∠P = ∠S <span class="reason">(Alternate Interior Angles as PQ || RS)</span></div>
        <div class="step">2. ∠Q = ∠R <span class="reason">(Alternate Interior Angles as PQ || RS)</span></div>
        <div class="step">3. ∠POQ = ∠SOR <span class="reason">(Vertically Opposite Angles)</span></div>
        <div class="step">By AAA Similarity Criterion <span class="reason">(AAA Similarity)</span>:</div>
        <div class="step">∆POQ ~ ∆SOR</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 5</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="600" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .dim-text { font-family: 'Times New Roman', serif; font-size: 16px; fill: #26C6DA; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Triangle ABC (Smaller) -->
  <!-- B(50, 280) -->
  <!-- C(170, 280) Base = 120 (representing 6) -->
  <!-- A: Angle B=60. Side AB=3.8 (76px). 
       x = 50 + 76*cos(60) = 88
       y = 280 - 76*sin(60) = 280 - 66 = 214 -->
  <path d="M88 214 L50 280 L170 280 Z" class="line"/>

  <!-- Labels ABC -->
  <text x="80" y="205" class="text" fill="#26C6DA">A</text>
  <text x="30" y="290" class="text" fill="#26C6DA">B</text>
  <text x="175" y="290" class="text" fill="#26C6DA">C</text>

  <!-- Dimensions ABC -->
  <text x="40" y="250" class="dim-text" fill="#26C6DA">3.8</text>
  <text x="105" y="295" class="dim-text" fill="#26C6DA">6</text>
  <text x="135" y="250" class="dim-text" fill="#26C6DA">3√3</text>

  <!-- Angles ABC -->
  <!-- Angle A (80) -->
  <path d="M82 225 A 15 15 0 0 1 98 222" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <text x="85" y="240" class="dim-text" font-size="14" fill="#26C6DA">80°</text>
  
  <!-- Angle B (60) -->
  <path d="M65 280 A 15 15 0 0 0 58 268" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <text x="65" y="275" class="dim-text" font-size="14" fill="#26C6DA">60°</text>


  <!-- Triangle PQR (Larger) -->
  <!-- Scale factor 2 -->
  <!-- P(250, 280) -->
  <!-- Q(490, 280) Base PQ = 240 (representing 12) -->
  <!-- R: Corresponds to A? No, wait. 
       Check side ratios: AB/RQ = 3.8/7.6. BC/QP = 6/12. CA/PR = 3rt3/6rt3.
       So A<->R, B<->Q, C<->P.
       Angle Q should be 60. Angle R should be 80. Angle P should be 40.
       Side RQ = 7.6 -> 152px.
       R from Q: angle 60. 
       x = 490 - 152*cos(60) = 490 - 76 = 414
       y = 280 - 152*sin(60) = 280 - 132 = 148 -->
  <path d="M414 148 L250 280 L490 280 Z" class="line"/>

  <!-- Labels PQR -->
  <text x="420" y="140" class="text" fill="#26C6DA">R</text>
  <text x="235" y="290" class="text" fill="#26C6DA">P</text>
  <text x="500" y="290" class="text" fill="#26C6DA">Q</text>

  <!-- Dimensions PQR -->
  <text x="310" y="200" class="dim-text" transform="rotate(-38, 320, 200)" fill="#26C6DA">6√3</text> <!-- PR -->
  <text x="360" y="295" class="dim-text" fill="#26C6DA">12</text> <!-- PQ -->
  <text x="460" y="210" class="dim-text" fill="#26C6DA">7.6</text> <!-- RQ -->





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">Observe Fig. and then find ∠P.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ABC with A=80°, B=60°. AB=3.8, BC=6, AC=3√3.</div>
        <div class="step">∆RPQ with R=?, P=?, Q=?. PR=6√3, PQ=12, RQ=7.6.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">Value of ∠P.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Compare ratios of sides:</div>
        <div class="step">\\(\\frac{AB}{RQ}\\) = \\(\\frac{3.8}{7.6}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{BC}{QP}\\) = \\(\\frac{6}{12}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{CA}{PR}\\) = \\(\\frac{3√3}{6√3}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">Since sides are proportional, ∆ABC ~ ∆RQP <span class="reason">(SSS Similarity)</span>.</div>
        <div class="step">Therefore, corresponding angles are equal: ∠C = ∠P.</div>
        <div class="step">In ∆ABC, ∠C = 180° - (∠A + ∠B) = 180° - (80° + 60°) = 180° - 140° = 40°.</div>
        <div class="step">So, ∠P = 40°.</div>
        <div class="final-answer">∠P = 40°.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 6</div>
        <div class="svg-container"><svg viewBox="0 0 300 220" width="300" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .line { stroke: #007bff; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .text { font-family: "Times New Roman", Times, serif; font-size: 18px; font-weight: bold; fill: #007bff; }
        .angle-mark { stroke: #007bff; stroke-width: 1.5; fill: none; }
    </style>

    <!-- Definitions -->
    <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#007bff"/>
        </marker>
    </defs>

    <!-- Coordinates: A(80, 60), D(40, 160), O(150, 110), C(220, 60), B(260, 160) -->
    <!-- Adjusted for symmetry and non-parallel top/bottom -->
    <!-- Line AB passes through O. A(80, 60), O(150, 110). dx=70, dy=50. B = O + (1.1)*d? 
         Let's keep lengths similar.
         A(80, 60), O(150, 110). B(220, 160).
         C(220, 60), O(150, 110). D(80, 160).
         This forms a symmetrical trapezium if checked, but let's see.
         AD connects (80, 60) and (80, 160) - Vertical line.
         CB connects (220, 60) and (220, 160) - Vertical line.
         User image likely generic. Let's tilt them.
         
         New Coords:
         O(150, 110)
         Line AOB: A(90, 70) -> O(150, 110) -> B(240, 170). (Slope 40/60 = 2/3)
         Line DOC: D(60, 170) -> O(150, 110) -> C(210, 70). (Slope -40/60 = -2/3)
    -->
    
    <!-- Triangle AOD: A(90,70)-O(150,110)-D(60,170)-close -->
    <path d="M 90,70 L 150,110 L 60,170 Z" class="line"/>
    
    <!-- Triangle COB: C(210,70)-O(150,110)-B(240,170)-close -->
    <path d="M 210,70 L 150,110 L 240,170 Z" class="line"/>

    <!-- Angle Markings at O -->
    <!-- Left Angle: Between OA and OD -->
    <path d="M 135,100 A 20,20 0 0,0 135,120" class="angle-mark"/>
    
    <!-- Right Angle: Between OC and OB -->
    <path d="M 165,100 A 20,20 0 0,1 165,120" class="angle-mark"/>

    <!-- Labels -->
    <text x="85" y="65" class="text" text-anchor="end" fill="#007bff">A</text>
    <text x="55" y="185" class="text" text-anchor="end" fill="#007bff">D</text>
    <text x="150" y="140" class="text" text-anchor="middle" fill="#007bff">O</text>
    <text x="215" y="65" class="text" text-anchor="start" fill="#007bff">C</text>
    <text x="245" y="185" class="text" text-anchor="start" fill="#007bff">B</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">In Fig., OA . OB = OC . OD. Show that ∠A = ∠C and ∠B = ∠D.</div>

        <div class="sub-header">Given:</div>
        <div class="step">OA . OB = OC . OD</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">∠A = ∠C and ∠B = ∠D.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Rearranging the given equation:</div>
        <div class="step">\\(\\frac{OA}{OC}\\) = \\(\\frac{OD}{OB}\\)</div>
        <div class="step">In ∆AOD and ∆COB:</div>
        <div class="step">∠AOD = ∠COB <span class="reason">(Vertically Opposite Angles)</span></div>
        <div class="step">Sides containing these angles are proportional <span class="reason">(from above)</span>.</div>
        <div class="step">By SAS Similarity Criterion <span class="reason">(SAS Similarity)</span>:</div>
        <div class="step">∆AOD ~ ∆COB</div>
        <div class="step">Corresponding angles are equal:</div>
        <div class="step">∠A = ∠C and ∠D = ∠B.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 7</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" style="background-color:white; border:1px solid #ddd;"><line x1="50" y1="20" x2="50" y2="180" stroke="gray" stroke-width="2" fill="none"/><line x1="150" y1="120" x2="150" y2="180" stroke="gray" stroke-width="2" fill="none"/><line x1="20" y1="180" x2="280" y2="180" stroke="gray" stroke-width="2" fill="none"/><line x1="50" y1="20" x2="220" y2="180" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><text x="40" y="20" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">A</text><text x="40" y="180" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">B</text><text x="150" y="110" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">C</text><text x="150" y="195" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">D</text><text x="220" y="195" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">E</text><text x="20" y="100" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">3.6m</text><text x="170" y="150" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">0.9m</text><text x="100" y="195" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">4.8m</text><text x="185" y="195" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">x</text>



</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 \\(\\frac{m}{s}\\). If
            the lamp is 3.6 m above the ground, find the length of her shadow after 4 seconds.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Height of girl (CD) = 90 cm = 0.9 m.</div>
        <div class="step">Height of lamp (AB) = 3.6 m.</div>
        <div class="step">Speed = 1.2 \\(\\frac{m}{s}\\). Time = 4 s.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">Length of her shadow (DE = x).</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Distance covered (BD) = Speed × Time = 1.2 × 4 = 4.8 m.</div>
        <div class="step">In ∆ABE and ∆CDE:</div>
        <div class="step">∠B = ∠D = 90° <span class="reason">(Vertical poles)</span>.</div>
        <div class="step">∠E is common.</div>
        <div class="step">So ∆ABE ~ ∆CDE <span class="reason">(AA Similarity)</span>.</div>
        <div class="step">Therefore, \\(\\frac{BE}{DE}\\) = \\(\\frac{AB}{CD}\\)</div>
        <div class="step">\\(\\frac{4.8 + x}{x}\\) = \\(\\frac{3.6}{0.9}\\) = 4</div>
        <div class="step">4.8 + x = 4x</div>
        <div class="step">3x = 4.8</div>
        <div class="step">x = 1.6 m.</div>
        <div class="final-answer">Length of her shadow is 1.6 m.</div>
    </div>

    <div class="content-box">
        <div class="example-title">Example 8</div>
        <div class="svg-container"><svg viewBox="0 0 500 250" width="500" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #26C6DA; }
        .angle-arc { stroke: #26C6DA; stroke-width: 2; fill: none; }
    </style>
    
    <!-- Triangle ABC (Left) -->
    <!-- A(110, 50), B(50, 200), C(180, 200) -->
    <path d="M 110,50 L 50,200 L 180,200 Z" class="line"/>
    
    <!-- Median CM -->
    <!-- Midpoint of AB: x=(110+50)/2=80, y=(50+200)/2=125 -->
    <!-- M(80, 125) -->
    <line x1="180" y1="200" x2="80" y2="125" class="line"/>
    
    <!-- Angle A -->
    <path d="M 100,75 A 30,30 0 0,0 125,70" class="angle-arc" transform="rotate(10 110 50)" stroke="#26C6DA" fill="none"/>
    
    <!-- Labels ABC -->
    <text x="110" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="40" y="210" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="190" y="210" class="text" text-anchor="start" fill="#26C6DA">C</text>
    <text x="65" y="125" class="text" text-anchor="end" fill="#26C6DA">M</text>

    <!-- Triangle QPR (Right, Inverted) -->
    <!-- Q(300, 50), P(460, 50), R(380, 220) -->
    <path d="M 300,50 L 460,50 L 380,220 Z" class="line"/>
    
    <!-- Median RN -->
    <!-- Midpoint of QP: x=(300+460)/2=380, y=50 -->
    <!-- N(380, 50) -->
    <line x1="380" y1="220" x2="380" y2="50" class="line"/>
    
    <!-- Angle P -->
    <path d="M 430,50 A 30,30 0 0,0 445,80" class="angle-arc" stroke="#26C6DA" fill="none"/>
    
    <!-- Labels QPR -->
    <text x="290" y="50" class="text" text-anchor="end" fill="#26C6DA">Q</text>
    <text x="470" y="50" class="text" text-anchor="start" fill="#26C6DA">P</text>
    <text x="380" y="245" class="text" text-anchor="middle" fill="#26C6DA">R</text>
    <text x="380" y="40" class="text" text-anchor="middle" fill="#26C6DA">N</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">CM and RN are respectively the medians of ∆ABC and ∆PQR. If ∆ABC ~ ∆PQR, prove that:</div>
        <div class="step">(i) ∆AMC ~ ∆PNR</div>
        <div class="step">(ii) \\(\\frac{CM}{RN}\\) = \\(\\frac{AB}{PQ}\\)</div>
        <div class="step">(iii) ∆CMB ~ ∆RNQ</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ABC ~ ∆PQR. CM and RN are medians.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">(i) ∆AMC ~ ∆PNR, (ii) \\(\\frac{CM}{RN}\\) = \\(\\frac{AB}{PQ}\\), (iii) ∆CMB ~ ∆RNQ.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Since ∆ABC ~ ∆PQR:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BC}{QR}\\) = \\(\\frac{AC}{PR}\\) and ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R.</div>
        <div class="step">Since M and N are midpoints: 2AM = AB and 2PN = PQ.</div>
        <div class="step">So \\(\\frac{2AM}{2PN}\\) = \\(\\frac{AC}{PR}\\) ⇒ \\(\\frac{AM}{PN}\\) = \\(\\frac{AC}{PR}\\).</div>
        <div class="step">In ∆AMC and ∆PNR:</div>
        <div class="step">\\(\\frac{AM}{PN}\\) = \\(\\frac{AC}{PR}\\)</div>
        <div class="step">∠A = ∠P <span class="reason">(Given)</span></div>
        <div class="step">So ∆AMC ~ ∆PNR <span class="reason">(SAS Similarity)</span>.</div>
        <div class="step">Hence \\(\\frac{CM}{RN}\\) = \\(\\frac{AC}{PR}\\) = \\(\\frac{AB}{PQ}\\).</div>
        <div class="step">Similarly, for (iii), we can prove ∆CMB ~ ∆RNQ using SAS (\\(\\frac{BM}{QN}\\) = \\(\\frac{BC}{QR}\\) and ∠B=∠Q).</div>
        <div class="final-answer">Hence Proved.</div>
    </div>



</body></html>`,
    exercise1: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangles - Exercise 6.1</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
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
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .sub-header {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.1em;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            border-top: 1px dashed #ddd;
            display: block;
        }

        .reason {
            color: #E65100;
            font-weight: 600;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
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

        /* Float images to the right */
        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 280px;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">Question 1. 1. Fill in the blanks using the correct word given in brackets:</div>

        <div class="sub-question">(i) All circles are ___ (congruent, similar)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">All circles have the same shape but different sizes.</div>
        <div class="final-answer">All circles are similar.</div>

        <div class="sub-question">(ii) All squares are ___ (similar, congruent)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">All squares have equal angles <span class="reason">(90°)</span> and proportional sides.</div>
        <div class="final-answer">All squares are similar.</div>

        <div class="sub-question">(iii) All ___ triangles are similar. (isosceles, equilateral)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Equilateral triangles always have angles of 60°.</div>
        <div class="final-answer">All equilateral triangles are similar.</div>

        <div class="sub-question">(iv) Two polygons of the same number of sides are similar, if (a) their corresponding
            angles are ___ as and (b) their corresponding sides are ___. (equal, proportional)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">For similarity, angles must be equal and sides must be proportional.</div>
        <div class="final-answer">Two polygons are similar if corresponding angles are equal and corresponding sides are
            proportional.</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="question">Question 2. 2. Give two different examples of pair of:</div>

        <div class="sub-question">(i) Similar figures</div>
        <div class="sub-header">Proof:</div>
        <div class="step">1. Two equilateral triangles of sides 2 cm and 5 cm.</div>
        <div class="step">2. Two squares of sides 3 cm and 4 cm.</div>
        <div class="final-answer">Any two circles, any two squares.</div>

        <div class="sub-question">(ii) Non-similar figures</div>
        <div class="sub-header">Proof:</div>
        <div class="step">1. A square and a rectangle <span class="reason">(Angles are 90°, but sides may not be
                proportional)</span>.</div>
        <div class="step">2. A triangle and a trapezium <span class="reason">(Different shapes)</span>.</div>
        <div class="final-answer">A square and a rhombus; A circle and a triangle.</div>
    </div>

    <!-- Question 3 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" style="background-color:white; border:1px solid #ddd;"><polygon points="60,60 120,60 100,120 40,120" stroke="#26C6DA" stroke-width="2" fill="none"/><rect x="180" y="40" width="80" height="80" stroke="#26C6DA" stroke-width="2" fill="none"/><text x="80" y="50" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">1.5</text><text x="130" y="90" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">1.5</text><text x="220" y="30" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">3</text><text x="270" y="80" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">3</text><text x="80" y="140" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">P Q R S</text><text x="220" y="140" font-family="Arial" font-size="14" fill="#26C6DA" text-anchor="middle">A B C D</text>



</svg></div>
        <div class="question">Question 3. 3. State whether the following quadrilaterals are similar or not:</div>

        <div class="sub-header">Given:</div>
        <div class="step">Quadrilateral PQRS <span class="reason">(Rhombus with side 1.5 cm)</span>.</div>
        <div class="step">Quadrilateral ABCD <span class="reason">(Square with side 3 cm)</span>.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">Whether PQRS ~ ABCD.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Comparing corresponding sides:</div>
        <div class="step">\\(\\frac{PQ}{AB}\\) = \\(\\frac{1.5}{3}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{QR}{BC}\\) = \\(\\frac{1.5}{3}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{RS}{CD}\\) = \\(\\frac{1.5}{3}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{SP}{DA}\\) = \\(\\frac{1.5}{3}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">Sides are proportional.</div>
        <div class="step">Comparing corresponding angles:</div>
        <div class="step">Angles of ABCD are 90°.</div>
        <div class="step">Angles of PQRS are NOT 90°.</div>
        <div class="step">Corresponding angles are not equal.</div>
        <div class="final-answer">No, the quadrilaterals are not similar.</div>
    </div>

</body>

</html>`,
    exercise2: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangles - Exercise 6.2</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
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
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .sub-header {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.1em;
            /* text-decoration: underline; Removed */
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            border-top: 1px dashed #ddd;
            display: block;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
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

        .reason {
            color: #E65100;
            font-weight: 600;
        }

        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 280px;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">Question 1. 1. In Fig., DE || BC. Find EC in (i) and AD in (ii).</div>

        <div class="sub-question">(i)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#26C6DA"/>
    </marker>
    <marker id="arrow_rev" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M9,0 L9,6 L0,3 z" fill="#26C6DA"/>
    </marker>
  </defs>
  
  <!-- Triangle coords: A(250, 50), B(50, 250), C(350, 250) -->
  
  <!-- Lines -->
  <line x1="250" y1="50" x2="50" y2="250" stroke="#26C6DA" stroke-width="3"/> <!-- AB -->
  <line x1="50" y1="250" x2="350" y2="250" stroke="#26C6DA" stroke-width="3"/> <!-- BC -->
  <line x1="350" y1="250" x2="250" y2="50" stroke="#26C6DA" stroke-width="3"/> <!-- CA -->

  <!-- Parallel Line DE -->
  <line x1="183" y1="117" x2="283" y2="117" stroke="#26C6DA" stroke-width="3" marker-start="url(#arrow_rev)" marker-end="url(#arrow)"/>

  <!-- Labels -->
  <style>
    text { font-family: serif; font-weight: bold; font-size: 24px; fill: #26C6DA; }
  </style>

  <!-- Vertices -->
  <text x="245" y="40" fill="#26C6DA">A</text>
  <text x="30" y="260" fill="#26C6DA">B</text>
  <text x="360" y="260" fill="#26C6DA">C</text>
  <text x="165" y="105" fill="#26C6DA">D</text>
  <text x="285" y="105" fill="#26C6DA">E</text>

  <!-- Measurements -->
  <text x="140" y="80" fill="#26C6DA">1.5 cm</text> <!-- near AD -->
  <text x="60" y="180" fill="#26C6DA">3 cm</text> <!-- near DB -->
  <text x="295" y="85" fill="#26C6DA">1 cm</text> <!-- near AE -->
  <text x="325" y="180" fill="#26C6DA">?</text> <!-- near EC -->

  <!-- (i) label -->
  <text x="190" y="290" fill="#26C6DA">(i)</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Given:</div>
        <div class="step">AD = 1.5 cm, DB = 3 cm, AE = 1 cm.</div>
        <div class="step">DE || BC.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">Length of EC.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since DE || BC, by Basic Proportionality Theorem <span class="reason">(BPT)</span>:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">Substituting values:</div>
        <div class="step">\\(\\frac{1.5}{3}\\) = \\(\\frac{1}{EC}\\)</div>
        <div class="step">\\(\\frac{1}{2}\\) = \\(\\frac{1}{EC}\\)</div>
        <div class="step">EC = 2 cm.</div>
        <div class="final-answer">EC = 2 cm.</div>

        <div class="sub-question">(ii)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#26C6DA"/>
    </marker>
    <marker id="arrow_rev" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M9,0 L9,6 L0,3 z" fill="#26C6DA"/>
    </marker>
  </defs>
  
  <!-- Triangle coords A(350, 50), B(50, 200), C(450, 300) -->

  <!-- Lines -->
  <line x1="350" y1="50" x2="50" y2="200" stroke="#26C6DA" stroke-width="3"/> <!-- AB -->
  <line x1="50" y1="200" x2="450" y2="300" stroke="#26C6DA" stroke-width="3"/> <!-- BC -->
  <line x1="450" y1="300" x2="350" y2="50" stroke="#26C6DA" stroke-width="3"/> <!-- CA -->

  <!-- Parallel Line DE -->
  <line x1="275" y1="87.5" x2="375" y2="112.5" stroke="#26C6DA" stroke-width="3" marker-start="url(#arrow_rev)" marker-end="url(#arrow)"/>

  <!-- Labels -->
  <style>
    text { font-family: serif; font-weight: bold; font-size: 24px; fill: #26C6DA; }
  </style>

  <!-- Vertices -->
  <text x="350" y="40" fill="#26C6DA">A</text>
  <text x="30" y="200" fill="#26C6DA">B</text>
  <text x="460" y="310" fill="#26C6DA">C</text>
  <text x="260" y="100" fill="#26C6DA">D</text>
  <text x="380" y="105" fill="#26C6DA">E</text>

  <!-- Measurements -->
  <text x="290" y="55" fill="#26C6DA">?</text> <!-- near AD -->
  <text x="140" y="120" fill="#26C6DA">7.2 cm</text> <!-- near DB -->
  <text x="410" y="90" fill="#26C6DA">1.8 cm</text> <!-- near AE -->
  <text x="420" y="220" fill="#26C6DA">5.4 cm</text> <!-- near EC -->

  <!-- (ii) label -->
  <text x="250" y="320" fill="#26C6DA">(ii)</text>

<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Given:</div>
        <div class="step">DB = 7.2 cm, AE = 1.8 cm, EC = 5.4 cm.</div>
        <div class="step">DE || BC.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">Length of AD.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">By BPT: \\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">\\(\\frac{AD}{7.2}\\) = \\(\\frac{1.8}{5.4}\\)</div>
        <div class="step">\\(\\frac{AD}{7.2}\\) = \\(\\frac{1}{3}\\)</div>
        <div class="step">AD = \\(\\frac{7.2}{3}\\) = 2.4 cm.</div>
        <div class="final-answer">AD = 2.4 cm.</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="question">Question 2. 2. E and F are points on sides PQ and PR respectively of a ∆ PQR. For each of the
            following cases, state whether EF || QR.</div>

        <div class="sub-question">(i) PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm and FR = 2.4 cm.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 300" width="350" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; text-anchor: middle; }
      .label { font-size: 20px; font-weight: bold; }
    </style>
  </defs>

  <!-- Vertices -->
  <!-- P: (175, 40) -->
  <!-- Q: (80, 260) -->
  <!-- R: (300, 220) -->

  <!-- E is on PQ. PE/PQ = 3.9 / (3.9+3) = 3.9/6.9 ≈ 0.565 -->
  <!-- E ≈ (121.4, 164.3) -->
  
  <!-- F is on PR. PF/PR = 3.6 / (3.6+2.4) = 3.6/6.0 = 0.6 -->
  <!-- F = (250, 148) -->

  <!-- Triangle PQR -->
  <path d="M175 40 L80 260 L300 220 Z" class="line"/>

  <!-- Line EF -->
  <line x1="121.4" y1="164.3" x2="250" y2="148" class="line"/>

  <!-- Vertex Labels -->
  <text x="175" y="30" class="text label" fill="#26C6DA">P</text>
  <text x="65" y="275" class="text label" fill="#26C6DA">Q</text>
  <text x="315" y="235" class="text label" fill="#26C6DA">R</text>
  <text x="105" y="170" class="text label" fill="#26C6DA">E</text>
  <text x="265" y="155" class="text label" fill="#26C6DA">F</text>

  <!-- Length Labels -->
  <!-- PE = 3.9 cm -->
  <text x="130" y="110" class="text" fill="#26C6DA">3.9 cm</text>
  
  <!-- EQ = 3 cm -->
  <text x="80" y="220" class="text" fill="#26C6DA">3 cm</text>
  
  <!-- PF = 3.6 cm -->
  <text x="235" y="100" class="text" fill="#26C6DA">3.6 cm</text>
  
  <!-- FR = 2.4 cm -->
  <text x="290" y="190" class="text" fill="#26C6DA">2.4 cm</text>





</svg></div>
        <div class="sub-header">Given:</div>
        <div class="step">PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm, FR = 2.4 cm.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">If EF || QR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Ratio 1: \\(\\frac{PE}{EQ}\\) = \\(\\frac{3.9}{3}\\) = 1.3</div>
        <div class="step">Ratio 2: \\(\\frac{PF}{FR}\\) = \\(\\frac{3.6}{2.4}\\) = 1.5</div>
        <div class="step">Since 1.3 ≠ 1.5, the sides are not divided in the same ratio.</div>
        <div class="final-answer">No, EF is not parallel to QR.</div>

        <div class="sub-question">(ii) PE = 4 cm, QE = 4.5 cm, PF = 8 cm and RF = 9 cm.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
    </style>
  </defs>

  <!-- Vertices -->
  <!-- P: Top, slightly left -->
  <!-- coordinates P(140, 40) -->
  
  <!-- Q: Bottom Left -->
  <!-- coordinates Q(60, 220) -->
  
  <!-- R: Bottom Right, significantly lower/further -->
  <!-- coordinates R(350, 320) -->

  <!-- E is on PQ. Ratio PE:EQ = 4:4.5. Total 8.5. Fraction = 4/8.5 = 0.47 -->
  <!-- Ex = 140 + 0.47 * (60 - 140) = 140 - 37.6 = 102.4 -->
  <!-- Ey = 40 + 0.47 * (220 - 40) = 40 + 84.6 = 124.6 -->
  
  <!-- F is on PR. Ratio PF:FR = 8:9. Total 17. Fraction = 8/17 = 0.47 -->
  <!-- Fx = 140 + 0.47 * (350 - 140) = 140 + 98.7 = 238.7 -->
  <!-- Fy = 40 + 0.47 * (320 - 40) = 40 + 131.6 = 171.6 -->

  <!-- Triangle PQR -->
  <path d="M140 40 L60 220 L350 320 Z" class="line"/>

  <!-- Line EF -->
  <line x1="102.4" y1="124.6" x2="238.7" y2="171.6" class="line"/>

  <!-- Vertex Labels -->
  <text x="135" y="30" class="text label" fill="#26C6DA">P</text>
  <text x="40" y="230" class="text label" fill="#26C6DA">Q</text>
  <text x="360" y="330" class="text label" fill="#26C6DA">R</text>
  <text x="85" y="125" class="text label" fill="#26C6DA">E</text>
  <text x="245" y="170" class="text label" fill="#26C6DA">F</text>

  <!-- Length Labels -->
  <!-- PE = 4 cm -->
  <text x="80" y="70" class="text" fill="#26C6DA">4 cm</text>
  
  <!-- QE = 4.5 cm -->
  <text x="40" y="170" class="text" fill="#26C6DA">4.5 cm</text>
  
  <!-- PF = 8 cm -->
  <text x="200" y="100" class="text" fill="#26C6DA">8 cm</text>
  
  <!-- RF = 9 cm -->
  <text x="300" y="240" class="text" fill="#26C6DA">9 cm</text>





</svg></div>
        <div class="sub-header">Given:</div>
        <div class="step">PE = 4 cm, QE = 4.5 cm, PF = 8 cm, RF = 9 cm.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">If EF || QR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Ratio 1: \\(\\frac{PE}{QE}\\) = \\(\\frac{4}{4.5}\\) = \\(\\frac{40}{45}\\) = \\(\\frac{8}{9}\\)</div>
        <div class="step">Ratio 2: \\(\\frac{PF}{RF}\\) = \\(\\frac{8}{9}\\)</div>
        <div class="step">Since ratios are equal \\(\\frac{PE}{QE}\\) = \\(\\frac{PF}{RF}\\).</div>
        <div class="step">By Converse of Basic Proportionality Theorem <span class="reason">(Converse of BPT)</span>:
        </div>
        <div class="final-answer">Yes, EF || QR.</div>

        <div class="sub-question">(iii) PQ = 1.28 cm, PR = 2.56 cm, PE = 0.18 cm and PF = 0.36 cm.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 350" width="450" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .dim-line { fill: none; stroke: #26C6DA; stroke-width: 1.5; marker-end: url(#arrow); marker-start: url(#arrow); }
      .text { font-family: 'Times New Roman', serif; font-size: 16px; fill: #26C6DA; }
      .label { font-size: 18px; font-weight: bold; }
    </style>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#26C6DA"/>
    </marker>
  </defs>

  <!-- Vertices -->
  <!-- P: Top -->
  <!-- P = (200, 50) -->
  <!-- Q: Bottom Left -->
  <!-- Q = (100, 280) -->
  <!-- R: Bottom Right -->
  <!-- R = (380, 320) -->

  <!-- E is on PQ. Ratio PE/PQ = 0.18/1.28 approx 0.14 -->
  <!-- E = P + 0.25 * (Q-P) (Exaggerated for visibility, 0.14 is too small visually) -->
  <!-- Let's visually place it around 1/4th way down to match the diagram's look -->
  <!-- P(200,50), Q(100,280). Vector=(-100, 230). 0.25*Vector=(-25, 57.5) -->
  <!-- E = (175, 107.5) -->
  
  <!-- F is on PR. Ratio PF/PR = 0.36/2.56 approx 0.14 -->
  <!-- F = P + 0.25 * (R-P) -->
  <!-- P(200,50), R(380,320). Vector=(180, 270). 0.25*Vector=(45, 67.5) -->
  <!-- F = (245, 117.5) -->

  <!-- Triangle PQR -->
  <path d="M200 50 L100 280 L380 320 Z" class="line"/>

  <!-- Line EF -->
  <line x1="175" y1="107.5" x2="245" y2="117.5" class="line"/>

  <!-- Vertex Labels -->
  <text x="195" y="40" class="text label" fill="#26C6DA">P</text>
  <text x="80" y="290" class="text label" fill="#26C6DA">Q</text>
  <text x="390" y="330" class="text label" fill="#26C6DA">R</text>
  <text x="155" y="115" class="text label" fill="#26C6DA">E</text>
  <text x="245" y="140" class="text label" fill="#26C6DA">F</text>

  <!-- Dimensions Left Side (PQ) -->
  <!-- Offset parallel line to PQ -->
  <!-- Normal vector roughly (-230, -100) -> (-1, -0.4) -->
  <!-- Shift by -40, -15 -->
  <line x1="150" y1="45" x2="50" y2="275" class="dim-line"/>
  <text x="80" y="160" class="text" transform="rotate(-66 80,160)" fill="#26C6DA">1.28 cm</text>

  <!-- Dimensions PE -->
  <!-- Inner offset -->
  <line x1="190" y1="55" x2="165" y2="112.5" class="dim-line"/>
  <text x="160" y="85" class="text" transform="rotate(-66 160,85)" fill="#26C6DA">0.18 cm</text>

  <!-- Dimensions Right Side (PR) -->
  <!-- Offset parallel line to PR -->
  <!-- Normal vector roughly (270, -180) -> (1, -0.6) -->
  <!-- Shift by 40, -25 -->
  <line x1="240" y1="40" x2="420" y2="310" class="dim-line"/>
  <text x="340" y="170" class="text" transform="rotate(56 340,170)" fill="#26C6DA">2.56 cm</text>

  <!-- Dimensions PF -->
  <line x1="210" y1="55" x2="255" y2="122.5" class="dim-line"/>
  <text x="245" y="90" class="text" transform="rotate(56 245,90)" fill="#26C6DA">0.36 cm</text>





</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">EQ = PQ - PE = 1.28 - 0.18 = 1.10 cm.</div>
        <div class="step">FR = PR - PF = 2.56 - 0.36 = 2.20 cm.</div>
        <div class="step">Ratio 1: \\(\\frac{PE}{EQ}\\) = \\(\\frac{0.18}{1.10}\\) = \\(\\frac{9}{55}\\)</div>
        <div class="step">Ratio 2: \\(\\frac{PF}{FR}\\) = \\(\\frac{0.36}{2.20}\\) = \\(\\frac{9}{55}\\)</div>
        <div class="step">Ratios are equal. By Converse of BPT:</div>
        <div class="final-answer">Yes, EF || QR.</div>
    </div>

    <!-- Question 3 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates calculated for parallel lines -->
  <!-- A=(40, 150) -->
  <!-- B=(260, 40) -->
  <!-- C=(360, 150) -->
  <!-- D=(280, 260) -->
  <!-- L=(184, 150) -->
  <!-- M=(139, 100.5) -->
  <!-- N=(148, 199.5) -->

  <!-- Main Quadrilateral and Diagonal -->
  <!-- Path A -> B -> C -> D -> A -->
  <path d="M40 150 L260 40 L360 150 L280 260 Z" class="line"/>
  
  <!-- Diagonal AC -->
  <line x1="40" y1="150" x2="360" y2="150" class="line"/>

  <!-- Parallel Lines segments -->
  <!-- LM -->
  <line x1="184" y1="150" x2="139" y2="100.5" class="line"/>
  
  <!-- LN -->
  <line x1="184" y1="150" x2="148" y2="199.5" class="line"/>

  <!-- Labels -->
  <!-- A - Left -->
  <text x="20" y="155" class="text" fill="#26C6DA">A</text>
  
  <!-- B - Top -->
  <text x="260" y="30" class="text" fill="#26C6DA">B</text>
  
  <!-- C - Right -->
  <text x="370" y="155" class="text" fill="#26C6DA">C</text>
  
  <!-- D - Bottom -->
  <text x="280" y="280" class="text" fill="#26C6DA">D</text>
  
  <!-- M - On AB -->
  <text x="125" y="90" class="text" fill="#26C6DA">M</text>
  
  <!-- N - On AD -->
  <text x="130" y="215" class="text" fill="#26C6DA">N</text>
  
  <!-- L - On AC -->
  <text x="185" y="140" class="text" fill="#26C6DA">L</text>





</svg></div>
        <div class="question">Question 3. 3. In Fig., if LM || CB and LN || CD, prove that \\(\\frac{AM}{AB}\\) = \\(\\frac{AN}{AD}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">LM || CB and LN || CD.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AM}{AB}\\) = \\(\\frac{AN}{AD}\\)</div>

        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ ABC, LM || CB. By BPT (Corollary):</div>
        <div class="step">\\(\\frac{AM}{AB}\\) = \\(\\frac{AL}{AC}\\) <span class="reason">...(1)</span></div>
        <div class="step">In ∆ ADC, LN || CD. By BPT (Corollary):</div>
        <div class="step">\\(\\frac{AN}{AD}\\) = \\(\\frac{AL}{AC}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2), comparing RHS:</div>
        <div class="step">\\(\\frac{AM}{AB}\\) = \\(\\frac{AN}{AD}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <!-- Question 4 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Vertices -->
  <!-- A=(220, 50) -->
  <!-- B=(50, 250) -->
  <!-- C=(350, 250) -->
  <!-- D=(135, 150) Midpoint of AB -->
  <!-- E=(200, 250) Derived from DE || AC -->
  <!-- F=(125, 250) Derived from DF || AE -->

  <!-- Triangle ABC -->
  <path d="M220 50 L50 250 L350 250 Z" class="line"/>
  
  <!-- Internal Lines -->
  <!-- AE -->
  <line x1="220" y1="50" x2="200" y2="250" class="line"/>
  
  <!-- DE -->
  <line x1="135" y1="150" x2="200" y2="250" class="line"/>
  
  <!-- DF -->
  <line x1="135" y1="150" x2="125" y2="250" class="line"/>

  <!-- Labels -->
  <text x="215" y="40" class="text" fill="#26C6DA">A</text>
  <text x="35" y="260" class="text" fill="#26C6DA">B</text>
  <text x="360" y="260" class="text" fill="#26C6DA">C</text>
  <text x="110" y="150" class="text" fill="#26C6DA">D</text>
  <text x="195" y="275" class="text" fill="#26C6DA">E</text>
  <text x="120" y="275" class="text" fill="#26C6DA">F</text>





</svg></div>
        <div class="question">Question 4. 4. In Fig., DE || AC and DF || AE. Prove that \\(\\frac{BF}{FE}\\) = \\(\\frac{BE}{EC}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">In ∆ ABC, DE || AC and DF || AE.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{BF}{FE}\\) = \\(\\frac{BE}{EC}\\)</div>

        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ ABC, DE || AC. By BPT:</div>
        <div class="step">\\(\\frac{BD}{DA}\\) = \\(\\frac{BE}{EC}\\) <span class="reason">...(1)</span></div>
        <div class="step">In ∆ ABE, DF || AE. By BPT:</div>
        <div class="step">\\(\\frac{BD}{DA}\\) = \\(\\frac{BF}{FE}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2), comparing LHS:</div>
        <div class="step">\\(\\frac{BF}{FE}\\) = \\(\\frac{BE}{EC}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <!-- Question 5 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- P: (200, 40) -->
  <!-- Q: (50, 320) -->
  <!-- R: (350, 320) -->
  <!-- O: (200, 240) -->
  <!-- D: (200, 130) -->
  <!-- E: (132.5, 166) -->
  <!-- F: (267.5, 166) -->

  <!-- Outer Triangle PQR -->
  <path d="M200 40 L50 320 L350 320 Z" class="line"/>

  <!-- Inner Lines to O -->
  <line x1="200" y1="40" x2="200" y2="240" class="inner-line"/> <!-- PO -->
  <line x1="50" y1="320" x2="200" y2="240" class="inner-line"/> <!-- QO -->
  <line x1="350" y1="320" x2="200" y2="240" class="inner-line"/> <!-- RO -->

  <!-- Parallel Segments -->
  <line x1="132.5" y1="166" x2="200" y2="130" class="inner-line"/> <!-- DE -->
  <line x1="200" y1="130" x2="267.5" y2="166" class="inner-line"/> <!-- DF -->
  <line x1="132.5" y1="166" x2="267.5" y2="166" class="inner-line"/> <!-- EF -->

  <!-- Labels -->
  <text x="195" y="30" class="text" fill="#26C6DA">P</text>
  <text x="30" y="325" class="text" fill="#26C6DA">Q</text>
  <text x="360" y="325" class="text" fill="#26C6DA">R</text>
  <text x="190" y="260" class="text" fill="#26C6DA">O</text>
  
  <text x="205" y="130" class="text" fill="#26C6DA">D</text>
  <text x="110" y="165" class="text" fill="#26C6DA">E</text>
  <text x="275" y="165" class="text" fill="#26C6DA">F</text>





</svg></div>
        <div class="question">Question 5. 5. In Fig., DE || OQ and DF || OR. Show that EF || QR.</div>

        <div class="sub-header">Given:</div>
        <div class="step">DE || OQ and DF || OR.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">EF || QR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ PQO, DE || OQ. By BPT:</div>
        <div class="step">\\(\\frac{PE}{EQ}\\) = \\(\\frac{PD}{DO}\\) <span class="reason">...(1)</span></div>
        <div class="step">In ∆ POR, DF || OR. By BPT:</div>
        <div class="step">\\(\\frac{PF}{FR}\\) = \\(\\frac{PD}{DO}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{PE}{EQ}\\) = \\(\\frac{PF}{FR}\\)</div>
        <div class="step">In ∆ PQR, since the sides PQ and PR are divided in the same ratio:</div>
        <div class="step">By Converse of BPT:</div>
        <div class="final-answer">EF || QR.</div>
    </div>

    <!-- Question 6 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- P: (200, 40) -->
  <!-- Q: (60, 300) -->
  <!-- R: (340, 300) -->
  <!-- O: (200, 190) -->
  
  <!-- Inner Triangle Vertices (Scaling P,Q,R towards O by factor ~0.6) -->
  <!-- A = O + 0.55 * (P-O) = (200, 190) + 0.55*(0, -150) = (200, 190-82.5) = (200, 107.5) -->
  <!-- B = O + 0.55 * (Q-O) = (200, 190) + 0.55*(-140, 110) = (200-77, 190+60.5) = (123, 250.5) -->
  <!-- C = O + 0.55 * (R-O) = (200, 190) + 0.55*(140, 110) = (200+77, 190+60.5) = (277, 250.5) -->
  
  <!-- Outer Triangle PQR -->
  <path d="M200 40 L60 300 L340 300 Z" class="line"/>

  <!-- Connecting Lines from Vertices to O -->
  <line x1="200" y1="40" x2="200" y2="190" class="inner-line"/> <!-- PO -->
  <line x1="60" y1="300" x2="200" y2="190" class="inner-line"/> <!-- QO -->
  <line x1="340" y1="300" x2="200" y2="190" class="inner-line"/> <!-- RO -->

  <!-- Inner Triangle ABC -->
  <path d="M200 107.5 L123 250.5 L277 250.5 Z" class="inner-line"/>

  <!-- Labels -->
  <text x="190" y="30" class="text" fill="#26C6DA">P</text>
  <text x="40" y="310" class="text" fill="#26C6DA">Q</text>
  <text x="350" y="310" class="text" fill="#26C6DA">R</text>
  <text x="205" y="210" class="text" fill="#26C6DA">O</text>
  
  <text x="180" y="110" class="text" fill="#26C6DA">A</text>
  <text x="105" y="245" class="text" fill="#26C6DA">B</text>
  <text x="285" y="245" class="text" fill="#26C6DA">C</text>





</svg></div>
        <div class="question">Question 6. 6. In Fig., A, B and C are points on OP, OQ and OR respectively such that AB || PQ and AC
            || PR. Show that BC || QR.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Points A, B, C on OP, OQ, OR. AB || PQ and AC || PR.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">BC || QR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ OPQ, AB || PQ. By BPT:</div>
        <div class="step">\\(\\frac{OA}{AP}\\) = \\(\\frac{OB}{BQ}\\) <span class="reason">...(1)</span></div>
        <div class="step">In ∆ OPR, AC || PR. By BPT:</div>
        <div class="step">\\(\\frac{OA}{AP}\\) = \\(\\frac{OC}{CR}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{OB}{BQ}\\) = \\(\\frac{OC}{CR}\\)</div>
        <div class="step">In ∆ OQR, points B and C divide sides OQ and OR in the same ratio.</div>
        <div class="step">By Converse of BPT:</div>
        <div class="final-answer">BC || QR.</div>
    </div>

    <!-- Question 7 -->
    <div class="content-box">
        <div class="svg-container"><svg viewBox="0 0 500 350" width="500" height="350" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #26C6DA; stroke-width: 2; fill: none; stroke-dasharray: 6,4; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #26C6DA; }
        .angle-mark { stroke: #26C6DA; stroke-width: 1.5; fill: none; }
    </style>

    <!-- Coordinates: A(250, 50), B(100, 300), C(400, 300) -->
    <!-- D(190, 150), E(310, 150) -->
    <!-- N(222, 97), M(278, 97) -->

    <!-- Main Triangle ABC -->
    <path d="M 250,50 L 100,300 L 400,300 Z" class="main-line"/>

    <!-- Line DE -->
    <line x1="190" y1="150" x2="310" y2="150" class="main-line"/>

    <!-- Dashed Lines: BE and CD -->
    <line x1="100" y1="300" x2="310" y2="150" class="dashed-line"/>
    <line x1="400" y1="300" x2="190" y2="150" class="dashed-line"/>

    <!-- Perpendiculars: EN (E to AB) and DM (D to AC) -->
    <!-- N is on AB. M is on AC. -->
    <line x1="310" y1="150" x2="222" y2="97" class="dashed-line"/>
    <line x1="190" y1="150" x2="278" y2="97" class="dashed-line"/>

    <!-- Right Angle Markers -->
    <!-- At N(222, 97) on AB. AB slope is -5/3. Normal slope is 3/5. -->
    <!-- Vector along AB approx (-3, 5). Vector along NE approx (-1, -0.6) -->
    <!-- Just draw small squares rotated appropriately -->
    <!-- N -->
    <path d="M 222,97 L 227,105 L 235,100" class="angle-mark" fill="none"/> 
    <!-- Simplified right angle mark or rotate a rect -->
    <g transform="rotate(-59 222 97)">
        <rect x="222" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    
    <!-- M -->
    <g transform="rotate(59 278 97)">
        <rect x="268" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    <!-- The rotation might need fine tuning, but 59 deg is approx slope angle (tan 5/3 = 59 deg) -->
    <!-- For M (on AC), slope is 5/3. Angle is 59 deg. The rect should align with line AC.
         Rect at (278,97). The line goes 'down-right'. So we want the rect 'inside' towards D?
         D is to the left.
         Let's just use manual path for better control if unsure of rotation origin. -->
         
    <!-- Labels -->
    <text x="250" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="90" y="310" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="410" y="310" class="text" text-anchor="start" fill="#26C6DA">C</text>
    <text x="180" y="150" class="text" text-anchor="end" fill="#26C6DA">D</text>
    <text x="320" y="150" class="text" text-anchor="start" fill="#26C6DA">E</text>
    <text x="210" y="95" class="text" text-anchor="end" fill="#26C6DA">N</text>
    <text x="290" y="95" class="text" text-anchor="start" fill="#26C6DA">M</text>





</svg></div>
        <div class="question">Question 7. 7. Using Theorem 6.1 (BPT), prove that a line drawn through the mid-point of one side of a
            triangle parallel to another side bisects the third side.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ ABC, D is midpoint of AB (AD = DB). Line DE || BC intersecting AC at E.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">E is midpoint of AC (AE = EC).</div>
        <div class="sub-header">Proof:</div>
        <div class="step">By BPT, since DE || BC:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">Since AD = DB, \\(\\frac{AD}{DB}\\) = 1.</div>
        <div class="step">Therefore, 1 = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">AE = EC.</div>
        <div class="final-answer">Hence, E bisects AC.</div>
    </div>

    <!-- Question 8 -->
    <div class="content-box">
        <div class="svg-container"><svg viewBox="0 0 500 350" width="500" height="350" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #26C6DA; stroke-width: 2; fill: none; stroke-dasharray: 6,4; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #26C6DA; }
        .angle-mark { stroke: #26C6DA; stroke-width: 1.5; fill: none; }
    </style>

    <!-- Coordinates: A(250, 50), B(100, 300), C(400, 300) -->
    <!-- D(190, 150), E(310, 150) -->
    <!-- N(222, 97), M(278, 97) -->

    <!-- Main Triangle ABC -->
    <path d="M 250,50 L 100,300 L 400,300 Z" class="main-line"/>

    <!-- Line DE -->
    <line x1="190" y1="150" x2="310" y2="150" class="main-line"/>

    <!-- Dashed Lines: BE and CD -->
    <line x1="100" y1="300" x2="310" y2="150" class="dashed-line"/>
    <line x1="400" y1="300" x2="190" y2="150" class="dashed-line"/>

    <!-- Perpendiculars: EN (E to AB) and DM (D to AC) -->
    <!-- N is on AB. M is on AC. -->
    <line x1="310" y1="150" x2="222" y2="97" class="dashed-line"/>
    <line x1="190" y1="150" x2="278" y2="97" class="dashed-line"/>

    <!-- Right Angle Markers -->
    <!-- At N(222, 97) on AB. AB slope is -5/3. Normal slope is 3/5. -->
    <!-- Vector along AB approx (-3, 5). Vector along NE approx (-1, -0.6) -->
    <!-- Just draw small squares rotated appropriately -->
    <!-- N -->
    <path d="M 222,97 L 227,105 L 235,100" class="angle-mark" fill="none"/> 
    <!-- Simplified right angle mark or rotate a rect -->
    <g transform="rotate(-59 222 97)">
        <rect x="222" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    
    <!-- M -->
    <g transform="rotate(59 278 97)">
        <rect x="268" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    <!-- The rotation might need fine tuning, but 59 deg is approx slope angle (tan 5/3 = 59 deg) -->
    <!-- For M (on AC), slope is 5/3. Angle is 59 deg. The rect should align with line AC.
         Rect at (278,97). The line goes 'down-right'. So we want the rect 'inside' towards D?
         D is to the left.
         Let's just use manual path for better control if unsure of rotation origin. -->
         
    <!-- Labels -->
    <text x="250" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="90" y="310" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="410" y="310" class="text" text-anchor="start" fill="#26C6DA">C</text>
    <text x="180" y="150" class="text" text-anchor="end" fill="#26C6DA">D</text>
    <text x="320" y="150" class="text" text-anchor="start" fill="#26C6DA">E</text>
    <text x="210" y="95" class="text" text-anchor="end" fill="#26C6DA">N</text>
    <text x="290" y="95" class="text" text-anchor="start" fill="#26C6DA">M</text>





</svg></div>
        <div class="question">Question 8. 8. Using Theorem 6.2 (Converse BPT), prove that the line joining the mid-points of any two
            sides of a triangle is parallel to the third side.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ ABC, D is midpoint of AB (AD = DB), E is midpoint of AC (AE = EC).</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">DE || BC.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Ratio 1: \\(\\frac{AD}{DB}\\) = 1 (Since AD=DB)</div>
        <div class="step">Ratio 2: \\(\\frac{AE}{EC}\\) = 1 (Since AE=EC)</div>
        <div class="step">Since \\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\), by Converse of BPT:</div>
        <div class="final-answer">DE || BC.</div>
    </div>

    <!-- Question 9 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (100, 50) -->
  <!-- B: (300, 50) -->
  <!-- C: (350, 250) -->
  <!-- D: (50, 250) -->
  <!-- O: (200, 130) Intersection of Diagonals -->
  <!-- E: (80, 130) Point on AD parallel to AB/DC through O -->

  <!-- Trapezium ABCD -->
  <path d="M100 50 L300 50 L350 250 L50 250 Z" class="line"/>

  <!-- Diagonals -->
  <line x1="100" y1="50" x2="350" y2="250" class="inner-line"/> <!-- AC -->
  <line x1="300" y1="50" x2="50" y2="250" class="inner-line"/> <!-- BD -->

  <!-- Parallel Line OE -->
  <line x1="80" y1="130" x2="200" y2="130" class="inner-line"/>

  <!-- Labels -->
  <text x="85" y="40" class="text" fill="#26C6DA">A</text>
  <text x="300" y="40" class="text" fill="#26C6DA">B</text>
  <text x="360" y="270" class="text" fill="#26C6DA">C</text>
  <text x="35" y="270" class="text" fill="#26C6DA">D</text>
  
  <text x="195" y="160" class="text" fill="#26C6DA">O</text>
  <text x="60" y="135" class="text" fill="#26C6DA">E</text>





</svg></div>
        <div class="question">Question 9. 9. ABCD is a trapezium in which AB || DC and its diagonals intersect each other at the
            point O. Show that \\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">Trapezium ABCD with AB || DC. Diagonals AC and BD intersect at O.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\)</div>
        <div class="sub-header">Construction:</div>
        <div class="step">Draw a line EO || DC passing through O and meeting AD at E.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ ADC, EO || DC. By BPT:</div>
        <div class="step">\\(\\frac{AE}{ED}\\) = \\(\\frac{AO}{CO}\\) <span class="reason">...(1)</span></div>
        <div class="step">Since AB || DC and EO || DC, then EO || AB.</div>
        <div class="step">In ∆ ADB, EO || AB. By BPT:</div>
        <div class="step">\\(\\frac{ED}{AE}\\) = \\(\\frac{DO}{BO}\\)</div>
        <div class="step">Taking reciprocal: \\(\\frac{AE}{ED}\\) = \\(\\frac{BO}{DO}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{AO}{CO}\\) = \\(\\frac{BO}{DO}\\)</div>
        <div class="step">Rearranging terms:</div>
        <div class="step">\\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <!-- Question 10 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (100, 50) -->
  <!-- B: (300, 50) -->
  <!-- C: (350, 250) -->
  <!-- D: (50, 250) -->
  <!-- O: (200, 130) Intersection of Diagonals -->
  <!-- E: (80, 130) Point on AD parallel to AB/DC through O -->

  <!-- Trapezium ABCD -->
  <path d="M100 50 L300 50 L350 250 L50 250 Z" class="line"/>

  <!-- Diagonals -->
  <line x1="100" y1="50" x2="350" y2="250" class="inner-line"/> <!-- AC -->
  <line x1="300" y1="50" x2="50" y2="250" class="inner-line"/> <!-- BD -->

  <!-- Parallel Line OE -->
  <line x1="80" y1="130" x2="200" y2="130" class="inner-line"/>

  <!-- Labels -->
  <text x="85" y="40" class="text" fill="#26C6DA">A</text>
  <text x="300" y="40" class="text" fill="#26C6DA">B</text>
  <text x="360" y="270" class="text" fill="#26C6DA">C</text>
  <text x="35" y="270" class="text" fill="#26C6DA">D</text>
  
  <text x="195" y="160" class="text" fill="#26C6DA">O</text>
  <text x="60" y="135" class="text" fill="#26C6DA">E</text>





</svg></div>
        <div class="question">Question 10. 10. The diagonals of a quadrilateral ABCD intersect each other at the point O such that
            \\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\). Show that
            ABCD is a trapezium.
        </div>

        <div class="sub-header">Given:</div>
        <div class="step">Quadrilateral ABCD, diagonals intersect at O, \\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\).</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">ABCD is a trapezium (i.e., AB || DC).</div>
        <div class="sub-header">Construction:</div>
        <div class="step">Draw line EO || AB meeting AD at E.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ DAB, EO || AB. By BPT:</div>
        <div class="step">\\(\\frac{AE}{ED}\\) = \\(\\frac{BO}{DO}\\) <span class="reason">...(1)</span></div>
        <div class="step">Given: \\(\\frac{AO}{BO}\\) = \\(\\frac{CO}{DO}\\)</div>
        <div class="step">Rearranging: \\(\\frac{AO}{CO}\\) = \\(\\frac{BO}{DO}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{AE}{ED}\\) = \\(\\frac{AO}{CO}\\)</div>
        <div class="step">In ∆ ADC, points E and O divide sides AD and AC in the same ratio.</div>
        <div class="step">By Converse of BPT, EO || DC.</div>
        <div class="step">But by construction, EO || AB.</div>
        <div class="step">Since EO is parallel to both AB and DC, therefore AB || DC.</div>
        <div class="step">Since one pair of opposite sides is parallel, ABCD is a trapezium.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

</body>

</html>`,
    exercise3: `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangles - Exercise 6.3</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
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
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .question {
            font-weight: 700;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: 600;
            color: #444;
            border-bottom: 1px dashed #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
        }

        .sub-header {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.1em;
            /* text-decoration: underline; Removed */
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            border-top: 1px dashed #ddd;
            display: block;
        }

        .reason {
            color: #E65100;
            font-weight: 600;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
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

        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 280px;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>
<!-- Question 1 -->
    <div class="content-box">
        <div class="question">Question 1. 1. State which pairs of triangles in Fig. are similar. Write the similarity criterion used
            by you for answering the question and also write the pairs of similar triangles in the symbolic form.</div>

        <div class="sub-question">(i) ∆ABC (Angles 60, 80, 40) and ∆PQR (Angles 60, 80, 40)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 300" width="550" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Triangle ABC (Smaller) -->
  <!-- Coords: A(70, 50), B(50, 170), C(190, 170) -->
  <!-- Check angles: Height=120. base_left=20 (tan=6), base_right=120 (tan=1). -->
  <!-- Adjust for visual accuracy of 80/40 -->
  <!-- Let's force it visually: Steep left, shallow right -->
  <path d="M70 50 L50 170 L190 170 Z" class="line"/>

  <!-- Labels ABC -->
  <text x="65" y="40" class="text label" fill="#26C6DA">A</text>
  <text x="30" y="180" class="text label" fill="#26C6DA">B</text>
  <text x="200" y="180" class="text label" fill="#26C6DA">C</text>

  <!-- Angles ABC -->
  <text x="68" y="85" class="text" fill="#26C6DA">60°</text>
  <text x="55" y="160" class="text" fill="#26C6DA">80°</text>
  <text x="155" y="160" class="text" fill="#26C6DA">40°</text>
  
  <!-- Arcs ABC -->
  <path d="M65 65 A 15 15 0 0 1 78 65" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M55 160 A 15 15 0 0 1 65 170" class="angle-arc" stroke="#26C6DA" fill="none"/> <!-- Very steep -->
  <path d="M175 170 A 20 20 0 0 0 178 160" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Triangle PQR (Larger) -->
  <!-- Coords: P(350, 20), Q(310, 220), R(520, 220) -->
  <!-- Scaled up version -->
  <path d="M350 20 L310 220 L520 220 Z" class="line"/>

  <!-- Labels PQR -->
  <text x="345" y="15" class="text label" fill="#26C6DA">P</text>
  <text x="290" y="235" class="text label" fill="#26C6DA">Q</text>
  <text x="530" y="235" class="text label" fill="#26C6DA">R</text>

  <!-- Angles PQR -->
  <text x="345" y="70" class="text" fill="#26C6DA">60°</text>
  <text x="320" y="205" class="text" fill="#26C6DA">80°</text>
  <text x="470" y="205" class="text" fill="#26C6DA">40°</text>

  <!-- Arcs PQR -->
  <path d="M340 45 A 20 20 0 0 1 364 43" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M318 205 A 20 20 0 0 1 328 220" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M500 220 A 25 25 0 0 0 505 205" class="angle-arc" stroke="#26C6DA" fill="none"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠A = ∠P = 60°</div>
        <div class="step">∠B = ∠Q = 80°</div>
        <div class="step">∠C = ∠R = 40°</div>
        <div class="step">Corresponding angles are equal.</div>
        <div class="step">By AAA Similarity Criterion <span class="reason">(AAA Similarity)</span>:</div>
        <div class="final-answer">∆ABC ~ ∆PQR</div>

        <div class="sub-question">(ii) ∆ABC (Sides 2, 3, 2.5) and ∆PQR (Sides 6, 5, 4)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle ABC -->
  <!-- B(50, 200), C(150, 200) Base=2.5 scaled by 40 = 100 -->
  <!-- A(60, 120) Height~80 -->
  <path d="M60 120 L50 200 L150 200 Z" class="line"/>

  <!-- Labels ABC -->
  <text x="55" y="110" class="text label" fill="#26C6DA">A</text>
  <text x="30" y="215" class="text label" fill="#26C6DA">B</text>
  <text x="160" y="215" class="text label" fill="#26C6DA">C</text>

  <!-- Side Lengths ABC -->
  <text x="30" y="150" class="text" fill="#26C6DA">2</text>
  <text x="95" y="220" class="text" fill="#26C6DA">2.5</text>
  <text x="110" y="150" class="text" fill="#26C6DA">3</text>

  <!-- Triangle PQR (Scaled 40x coordinates from calculation) -->
  <!-- Q(300, 250), R(460, 250) Base=4 scaled by 40 = 160 -->
  <!-- P(435, 50) x=3.375*40+300, y=250-4.96*40 -->
  <path d="M435 50 L300 250 L460 250 Z" class="line"/>

  <!-- Labels PQR -->
  <text x="430" y="40" class="text label" fill="#26C6DA">P</text>
  <text x="280" y="265" class="text label" fill="#26C6DA">Q</text>
  <text x="470" y="265" class="text label" fill="#26C6DA">R</text>

  <!-- Side Lengths PQR -->
  <text x="350" y="150" class="text" fill="#26C6DA">6</text>
  <text x="380" y="270" class="text" fill="#26C6DA">4</text>
  <text x="455" y="150" class="text" fill="#26C6DA">5</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">\\(\\frac{AB}{QR}\\) = \\(\\frac{2}{4}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{BC}{RP}\\) = \\(\\frac{2.5}{5}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{CA}{PQ}\\) = \\(\\frac{3}{6}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">Sides are proportional. By SSS Similarity Criterion <span class="reason">(SSS
                Similarity)</span>:</div>
        <div class="final-answer">∆ABC ~ ∆QRP</div>

        <div class="sub-question">(iii) ∆LMP (Sides 2.7, 3, 2) and ∆DEF (Sides 5, 6, 4)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" width="500" height="250">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle LMP -->
  <!-- Scaled by 40: LM=2.7->108, MP=2->80, LP=3->120 -->
  <!-- Coords: M(50, 200), P(130, 200) -->
  <!-- L approx (73, 95) -->
  <path d="M73 95 L50 200 L130 200 Z" class="line"/>

  <!-- Labels LMP -->
  <text x="70" y="85" class="text label" fill="#26C6DA">L</text>
  <text x="35" y="215" class="text label" fill="#26C6DA">M</text>
  <text x="140" y="215" class="text label" fill="#26C6DA">P</text>

  <!-- Sides LMP -->
  <text x="30" y="150" class="text" fill="#26C6DA">2.7</text>
  <text x="80" y="220" class="text" fill="#26C6DA">2</text>
  <text x="110" y="140" class="text" fill="#26C6DA">3</text>

  <!-- Triangle DEF -->
  <!-- Scaled by 40: DE=4->160, EF=5->200, DF=6->240 -->
  <!-- Coords: E(250, 200), F(450, 200) -->
  <!-- D approx (270, 41) -->
  <path d="M270 41 L250 200 L450 200 Z" class="line"/>

  <!-- Labels DEF -->
  <text x="265" y="30" class="text label" fill="#26C6DA">D</text>
  <text x="235" y="215" class="text label" fill="#26C6DA">E</text>
  <text x="460" y="215" class="text label" fill="#26C6DA">F</text>

  <!-- Sides DEF -->
  <text x="230" y="130" class="text" fill="#26C6DA">4</text>
  <text x="340" y="220" class="text" fill="#26C6DA">5</text>
  <text x="370" y="110" class="text" fill="#26C6DA">6</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">\\(\\frac{MP}{DE}\\) = \\(\\frac{2}{4}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{LP}{DF}\\) = \\(\\frac{3}{6}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{LM}{EF}\\) = \\(\\frac{2.7}{5}\\) ≠ \\(\\frac{1}{2}\\)</div>
        <div class="step">Sides are not proportional.</div>
        <div class="final-answer">Not similar.</div>

        <div class="sub-question">(iv) ∆MNL (M=70, MN=2.5, ML=5) and ∆PQR (Q=70, PQ=5, QR=10)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" width="600" height="320">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Triangle MNL -->
  <!-- M(100, 100), N(79, 159), L(196, 180) approximately based on calc -->
  <!-- MN = 2.5*25 = 62.5 -->
  <!-- ML = 5*25 = 125 -->
  <!-- Angle M = 70 -->
  <path d="M100 100 L79 159 L196 180 Z" class="line"/>

  <!-- Labels MNL -->
  <text x="95" y="90" class="text label" fill="#26C6DA">M</text>
  <text x="60" y="170" class="text label" fill="#26C6DA">N</text>
  <text x="205" y="190" class="text label" fill="#26C6DA">L</text>

  <!-- Side Values MNL -->
  <text x="55" y="135" class="text" fill="#26C6DA">2.5</text>
  <text x="160" y="135" class="text" fill="#26C6DA">5</text>
  <text x="95" y="145" class="text" fill="#26C6DA">70°</text>

  <!-- Arc M -->
  <!-- Start angle 110, end angle 40. Center (100,100) -->
  <path d="M106 118 A 20 20 0 0 0 115 110" class="angle-arc" transform="rotate(0 100 100)" stroke="#26C6DA" fill="none"/> 
  <!-- Manual arc path approximation for 70 deg between vectors -->
  <!-- Vector MN is approx 110 deg. Vector ML is approx 40 deg. -->
  <path d="M93 118 A 20 20 0 0 0 115 112" class="angle-arc" fill="none" stroke="#26C6DA"/>


  <!-- Triangle PQR -->
  <!-- Q(300, 280), R(550, 280) -->
  <!-- PQ = 5*25 = 125. Angle Q = 70. -->
  <!-- P(343, 163) -->
  <path d="M343 163 L300 280 L550 280 Z" class="line"/>

  <!-- Labels PQR -->
  <text x="335" y="150" class="text label" fill="#26C6DA">P</text>
  <text x="280" y="295" class="text label" fill="#26C6DA">Q</text>
  <text x="560" y="295" class="text label" fill="#26C6DA">R</text>

  <!-- Side Values PQR -->
  <text x="295" y="220" class="text" fill="#26C6DA">5</text>
  <text x="420" y="300" class="text" fill="#26C6DA">10</text>
  <text x="315" y="270" class="text" fill="#26C6DA">70°</text>

  <!-- Arc Q -->
  <path d="M318 280 A 25 25 0 0 0 308 258" class="angle-arc" stroke="#26C6DA" fill="none"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">\\(\\frac{MN}{PQ}\\) = \\(\\frac{2.5}{5}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{ML}{QR}\\) = \\(\\frac{5}{10}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">Included Angle M = Angle Q = 70°.</div>
        <div class="step">By SAS Similarity Criterion <span class="reason">(SAS Similarity)</span>:</div>
        <div class="final-answer">∆MNL ~ ∆PQR</div>

        <div class="sub-question">(v) ∆ABC (A=80, AB=2.5, BC=3) and ∆DEF (F=80, DF=5, EF=6)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Triangle ABC -->
  <!-- A at top. Angle A=80. AB=2.5. BC=3. -->
  <!-- Scale 40. AB=100. BC=120. Calculated AC approx 86. -->
  <!-- A(100, 50). B(50, 140). C(135, 130) roughly -->
  <!-- Let's calculate precise points for A(100,50) -->
  <!-- AB at 220 deg. B = (100-76, 50+64) = (24, 114) -->
  <!-- AC at 300 deg. C = (100+43, 50+74) ... angle diff 80 -->
  <!-- Let's stick to a visual representation that matches the labels -->
  <!-- A(120, 60). B(70, 150). C(160, 150). -->
  <!-- AB vector (-50, 90) len ~ 103. BC vector (90, 0) len 90. -->
  <!-- Let's use the calculated coordinates for better accuracy -->
  <!-- A=(100,50) -->
  <!-- B=(36, 126) -> AB len ~ 100 -->
  <!-- C=(155, 116) -> AC len ~ 86. BC len = dist(36,126 to 155,116) = sqrt(119^2 + 10^2) = 119 ~ 120 (3*40). Good. -->
  
  <path d="M100 50 L36 126 L155 116 Z" class="line"/>

  <!-- Labels ABC -->
  <text x="95" y="40" class="text label" fill="#26C6DA">A</text>
  <text x="20" y="140" class="text label" fill="#26C6DA">B</text>
  <text x="165" y="130" class="text label" fill="#26C6DA">C</text>

  <!-- Values ABC -->
  <text x="45" y="90" class="text" fill="#26C6DA">2.5</text>
  <text x="90" y="135" class="text" fill="#26C6DA">3</text>
  <text x="90" y="85" class="text" fill="#26C6DA">80°</text>

  <!-- Arc A -->
  <path d="M92 68 A 20 20 0 0 0 110 65" class="angle-arc" stroke="#26C6DA" fill="none"/>


  <!-- Triangle DEF -->
  <!-- F at bottom right. Angle F=80. DF=5. EF=6. -->
  <!-- Scale 40. DF=200. EF=240. -->
  <!-- F(500, 250). E(260, 250). D(466, 54). -->

  <path d="M466 54 L260 250 L500 250 Z" class="line"/>

  <!-- Labels DEF -->
  <text x="460" y="45" class="text label" fill="#26C6DA">D</text>
  <text x="245" y="265" class="text label" fill="#26C6DA">E</text>
  <text x="510" y="265" class="text label" fill="#26C6DA">F</text>

  <!-- Values DEF -->
  <text x="475" y="150" class="text" fill="#26C6DA">5</text>
  <text x="380" y="270" class="text" fill="#26C6DA">6</text>
  <text x="455" y="235" class="text" fill="#26C6DA">80°</text>

  <!-- Arc F -->
  <path d="M480 250 A 30 30 0 0 0 492 221" class="angle-arc" stroke="#26C6DA" fill="none"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">\\(\\frac{AB}{DF}\\) = \\(\\frac{2.5}{5}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">\\(\\frac{BC}{EF}\\) = \\(\\frac{3}{6}\\) = \\(\\frac{1}{2}\\)</div>
        <div class="step">Angle A = 80°. Angle F = 80°.</div>
        <div class="step">However, Angle A is not included between AB and BC. Angle F is included between DF and EF.
        </div>
        <div class="step">The condition for SAS is not satisfied.</div>
        <div class="final-answer">Not similar.</div>

        <div class="sub-question">(vi) ∆DEF (D=70, E=80) and ∆PQR (Q=80, R=30)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Triangle DEF -->
  <!-- Coords: E(60, 250), F(240, 250), D(77, 156) -->
  <path d="M77 156 L60 250 L240 250 Z" class="line"/>

  <!-- Labels DEF -->
  <text x="70" y="145" class="text label" fill="#26C6DA">D</text>
  <text x="40" y="260" class="text label" fill="#26C6DA">E</text>
  <text x="250" y="260" class="text label" fill="#26C6DA">F</text>

  <!-- Angles DEF -->
  <text x="75" y="195" class="text" fill="#26C6DA">70°</text>
  <text x="75" y="240" class="text" fill="#26C6DA">80°</text>

  <!-- Arcs DEF -->
  <path d="M73 175 A 20 20 0 0 0 88 180" class="angle-arc" transform="rotate(-10 77 156)" stroke="#26C6DA" fill="none"/> <!-- Approx arc for D -->
  <path d="M63 235 A 20 20 0 0 1 75 250" class="angle-arc" stroke="#26C6DA" fill="none"/>


  <!-- Triangle PQR -->
  <!-- Identical shape, shifted right -->
  <!-- Coords: Q(320, 250), R(500, 250), P(337, 156) -->
  <path d="M337 156 L320 250 L500 250 Z" class="line"/>

  <!-- Labels PQR -->
  <text x="330" y="145" class="text label" fill="#26C6DA">P</text>
  <text x="300" y="260" class="text label" fill="#26C6DA">Q</text>
  <text x="510" y="260" class="text label" fill="#26C6DA">R</text>

  <!-- Angles PQR -->
  <text x="335" y="240" class="text" fill="#26C6DA">80°</text>
  <text x="455" y="240" class="text" fill="#26C6DA">30°</text>

  <!-- Arcs PQR -->
  <path d="M323 235 A 20 20 0 0 1 335 250" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M480 250 A 25 25 0 0 0 488 235" class="angle-arc" stroke="#26C6DA" fill="none"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆DEF, ∠F = 180° - (70° + 80°) = 30° <span class="reason">(Angle Sum Property)</span>.</div>
        <div class="step">In ∆PQR, ∠P = 180° - (80° + 30°) = 70° <span class="reason">(Angle Sum Property)</span>.</div>
        <div class="step">∠D = ∠P = 70°</div>
        <div class="step">∠E = ∠Q = 80°</div>
        <div class="step">∠F = ∠R = 30°</div>
        <div class="step">By AAA Similarity Criterion <span class="reason">(AAA Similarity)</span>:</div>
        <div class="final-answer">∆DEF ~ ∆PQR</div>
    </div>

    <!-- Question 2 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; }
      .label { font-size: 20px; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
    <marker id="arrow-left" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto">
      <path d="M10,0 L0,5 L10,10" fill="#26C6DA"/>
    </marker>
    <marker id="arrow-right" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#26C6DA"/>
    </marker>
  </defs>

  <!-- Parallel Lines -->
  <!-- Top Line through D, C -->
  <line x1="100" y1="70" x2="500" y2="70" class="line" marker-start="url(#arrow-left)" marker-end="url(#arrow-right)"/>
  <!-- Bottom Line through A, B -->
  <line x1="100" y1="230" x2="500" y2="230" class="line" marker-start="url(#arrow-left)" marker-end="url(#arrow-right)"/>

  <!-- Transversals -->
  <!-- O at (300, 150) -->
  <!-- D(270, 70), B(330, 230) -->
  <line x1="270" y1="70" x2="330" y2="230" class="line"/>
  
  <!-- C(360, 70), A(240, 230) -->
  <line x1="240" y1="230" x2="360" y2="70" class="line"/>

  <!-- Labels -->
  <text x="260" y="60" class="text label" fill="#26C6DA">D</text>
  <text x="360" y="60" class="text label" fill="#26C6DA">C</text>
  <text x="285" y="155" class="text label" fill="#26C6DA">O</text>
  <text x="230" y="255" class="text label" fill="#26C6DA">A</text>
  <text x="330" y="255" class="text label" fill="#26C6DA">B</text>

  <!-- Angles -->
  <text x="290" y="85" class="text" fill="#26C6DA">70°</text>
  <text x="315" y="155" class="text" fill="#26C6DA">125°</text>

  <!-- Arcs -->
  <!-- Arc at D (Angle ODC) -->
  <!-- Center D(270,70). From line DC (0 deg) to line DO (approx 70 deg) -->
  <path d="M290 70 A 20 20 0 0 1 278 88" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Arc at O (Angle BOC) -->
  <!-- Center O(300,150). From line OB (approx 70 deg) to line OC (approx -53 deg) -->
  <!-- This is the right side angle -->
  <path d="M312 180 A 30 30 0 0 0 322 132" class="angle-arc" stroke="#26C6DA" fill="none"/>
  

<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 2. 2. In Fig., ∆ODC ~ ∆OBA, ∠BOC = 125° and ∠CDO = 70°. Find ∠DOC, ∠DCO and ∠OAB.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ODC ~ ∆OBA, ∠BOC = 125°, ∠CDO = 70°.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∠DOC, ∠DCO and ∠OAB.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠DOC + ∠BOC = 180° <span class="reason">(Linear Pair)</span></div>
        <div class="step">∠DOC + 125° = 180° ⇒ ∠DOC = 55°</div>
        <div class="step">In ∆ODC: ∠DCO + ∠CDO + ∠DOC = 180° <span class="reason">(Angle Sum Property)</span></div>
        <div class="step">∠DCO + 70° + 55° = 180°</div>
        <div class="step">∠DCO = 180° - 125° = 55°</div>
        <div class="step">Since ∆ODC ~ ∆OBA, corresponding angles are equal.</div>
        <div class="step">∠OAB = ∠OCD <span class="reason">(Corresponding parts of similar triangles)</span></div>
        <div class="step">So, ∠OAB = 55°</div>
        <div class="final-answer">∠DOC = 55°, ∠DCO = 55°, ∠OAB = 55°.</div>
    </div>

    <!-- Question 3 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="450" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (120, 50) -->
  <!-- B: (330, 50) -->
  <!-- C: (380, 250) -->
  <!-- D: (70, 250) -->
  <!-- O: Intersection of AC and BD -->
  <!-- A(120,50) C(380,250) -> AC: y-50/250-50 = x-120/380-120 => y-50/200 = x-120/260 => y = 10/13(x-120) + 50 -->
  <!-- B(330,50) D(70,250) -> BD: y-50/250-50 = x-330/70-330 => y-50/200 = x-330/-260 => y = -10/13(x-330) + 50 -->
  <!-- Intersection: 10/13(x-120) = -10/13(x-330) => x-120 = -x+330 => 2x = 450 => x = 225 -->
  <!-- y = 10/13(225-120) + 50 = 10/13(105) + 50 = 1050/13 + 50 = 80.7 + 50 = 130.7 -->
  <!-- O approx (225, 131) -->

  <!-- Trapezium ABCD -->
  <path d="M120 50 L330 50 L380 250 L70 250 Z" class="line"/>

  <!-- Diagonals -->
  <line x1="120" y1="50" x2="380" y2="250" class="inner-line"/> <!-- AC -->
  <line x1="330" y1="50" x2="70" y2="250" class="inner-line"/> <!-- BD -->

  <!-- Labels -->
  <text x="105" y="45" class="text" fill="#26C6DA">A</text>
  <text x="335" y="45" class="text" fill="#26C6DA">B</text>
  <text x="390" y="260" class="text" fill="#26C6DA">C</text>
  <text x="50" y="260" class="text" fill="#26C6DA">D</text>
  <text x="215" y="125" class="text" fill="#26C6DA">O</text>

  <!-- Alternate Interior Angles (Parallel Lines) -->
  <!-- Angle OAB (at A) -->
  <path d="M140 50 A 20 20 0 0 1 135 62" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M145 50 A 25 25 0 0 1 139 65" class="angle-arc" stroke="#26C6DA" fill="none"/>
  
  <!-- Angle OCD (at C) matches OAB -->
  <path d="M360 250 A 20 20 0 0 0 365 238" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M355 250 A 25 25 0 0 0 361 235" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Angle OBA (at B) -->
  <path d="M310 50 A 20 20 0 0 0 315 62" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M305 50 A 25 25 0 0 0 311 65" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M300 50 A 30 30 0 0 0 307 68" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Angle ODC (at D) matches OBA -->
  <path d="M90 250 A 20 20 0 0 1 85 238" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M95 250 A 25 25 0 0 1 89 235" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <path d="M100 250 A 30 30 0 0 1 93 232" class="angle-arc" stroke="#26C6DA" fill="none"/>
  
  <!-- Vertically Opposite Angles at O -->
  <path d="M215 139 A 15 15 0 0 0 235 139" class="angle-arc" stroke="#26C6DA" fill="none"/> <!-- Bottom -->
  <path d="M215 123 A 15 15 0 0 1 235 123" class="angle-arc" stroke="#26C6DA" fill="none"/> <!-- Top -->


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 3. 3. Diagonals AC and BD of a trapezium ABCD with AB || DC intersect each other at the point
            O. Using a similarity criterion for two triangles, show that \\(\\frac{OA}{OC}\\) = \\(\\frac{OB}{OD}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">Trapezium ABCD, AB || DC. Diagonals intersect at O.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{OA}{OC}\\) = \\(\\frac{OB}{OD}\\)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆OAB and ∆OCD:</div>
        <div class="step">AB || DC <span class="reason">(Given)</span></div>
        <div class="step">∠OAB = ∠OCD <span class="reason">(Alternate Interior Angles)</span></div>
        <div class="step">∠OBA = ∠ODC <span class="reason">(Alternate Interior Angles)</span></div>
        <div class="step">By AA Similarity Criterion <span class="reason">(AA Similarity)</span>:</div>
        <div class="step">∆OAB ~ ∆OCD</div>
        <div class="step">Corresponding sides are proportional:</div>
        <div class="step">\\(\\frac{OA}{OC}\\) = \\(\\frac{OB}{OD}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <!-- Question 4 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- Q: (50, 300) -->
  <!-- R: (450, 300) -->
  <!-- T: (300, 50) -->
  <!-- Point P on TQ -->
  <!-- TQ goes from (300,50) to (50,300) -->
  <!-- P approx midpoint: (175, 175) -->
  <!-- Point S on QR -->
  <!-- S approx (320, 300) -->

  <!-- Main Triangle TQR -->
  <path d="M300 50 L50 300 L450 300 Z" class="line"/>

  <!-- Inner Lines -->
  <!-- P to S -->
  <line x1="175" y1="175" x2="320" y2="300" class="inner-line"/>
  
  <!-- P to R -->
  <line x1="175" y1="175" x2="450" y2="300" class="inner-line"/>

  <!-- Labels -->
  <text x="290" y="40" class="text" fill="#26C6DA">T</text>
  <text x="30" y="310" class="text" fill="#26C6DA">Q</text>
  <text x="460" y="310" class="text" fill="#26C6DA">R</text>
  <text x="155" y="170" class="text" fill="#26C6DA">P</text>
  <text x="315" y="320" class="text" fill="#26C6DA">S</text>

  <!-- Angle 1 at Q -->
  <path d="M80 300 A 30 30 0 0 0 73 277" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <text x="85" y="290" class="text" fill="#26C6DA">1</text>

  <!-- Angle 2 at R (Angle PRQ) -->
  <!-- From line RQ (180 deg) to line RP -->
  <!-- RP vector: (175-450, 175-300) = (-275, -125). Angle approx 155 deg. -->
  <path d="M420 300 A 30 30 0 0 1 424 288" class="angle-arc" stroke="#26C6DA" fill="none"/>
  <text x="400" y="290" class="text" fill="#26C6DA">2</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 4. 4. In Fig., \\(\\frac{QR}{QS}\\) = \\(\\frac{QT}{PR}\\) and ∠1 = ∠2. Show that ∆PQS ~ ∆TQR.</div>

        <div class="sub-header">Given:</div>
        <div class="step">\\(\\frac{QR}{QS}\\) = \\(\\frac{QT}{PR}\\) and ∠1 = ∠2.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆PQS ~ ∆TQR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆PQR: ∠1 = ∠2 (i.e., ∠PQR = ∠PRQ).</div>
        <div class="step">So PQ = PR <span class="reason">(Sides opposite to equal angles are equal)</span>.</div>
        <div class="step">Given: \\(\\frac{QR}{QS}\\) = \\(\\frac{QT}{PR}\\)</div>
        <div class="step">Substitute PR = PQ:</div>
        <div class="step">\\(\\frac{QR}{QS}\\) = \\(\\frac{QT}{PQ}\\)</div>
        <div class="step">Invert both sides: \\n \\(\\frac{QS}{QR}\\) = \\(\\frac{PQ}{QT}\\)</div>
        <div class="step">Now in ∆PQS and ∆TQR:</div>
        <div class="step">\\(\\frac{PQ}{QT}\\) = \\(\\frac{QS}{QR}\\)</div>
        <div class="step">∠PQS = ∠TQR (= ∠1) is common.</div>
        <div class="step">By SAS Similarity Criterion <span class="reason">(SAS Similarity)</span>:</div>
        <div class="final-answer">∆PQS ~ ∆TQR.</div>
    </div>

    <!-- Question 5 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .angle-arc { fill: none; stroke: #26C6DA; stroke-width: 1; }
    </style>
  </defs>

  <!-- Vertices -->
  <!-- R: Top (200, 50) -->
  <!-- P: Bottom Left (50, 300) -->
  <!-- Q: Bottom Right (350, 250) -->
  
  <!-- Triangle PQR -->
  <path d="M200 50 L50 300 L350 250 Z" class="line"/>

  <!-- Points S and T -->
  <!-- S on RP. Let's place it somewhat down from R. -->
  <!-- Vector RP = (-150, 250). S = R + 0.45*RP = (200 - 67.5, 50 + 112.5) = (132.5, 162.5) -->
  <!-- T on RQ. Let's place it somewhat down from R. -->
  <!-- Vector RQ = (150, 200). T = R + 0.55*RQ = (200 + 82.5, 50 + 110) = (282.5, 160) -->
  
  <!-- S approx (132, 162) -->
  <!-- T approx (282, 160) -->
  
  <!-- Line ST -->
  <line x1="132.5" y1="162.5" x2="282.5" y2="160" class="inner-line"/>

  <!-- Labels -->
  <text x="195" y="40" class="text" fill="#26C6DA">R</text>
  <text x="30" y="310" class="text" fill="#26C6DA">P</text>
  <text x="360" y="260" class="text" fill="#26C6DA">Q</text>
  <text x="110" y="165" class="text" fill="#26C6DA">S</text>
  <text x="290" y="165" class="text" fill="#26C6DA">T</text>

  <!-- Angle P (angle RPQ) -->
  <!-- Center P(50,300). From PR to PQ. -->
  <path d="M65 275 A 30 30 0 0 1 80 290" class="angle-arc" stroke="#26C6DA" fill="none"/>

  <!-- Angle RTS -->
  <!-- Center T(282.5, 160). From TR to TS. -->
  <!-- Vector TR goes up-left to R(200,50). Angle approx 233 deg (from right)? No, logic: vector T->R is (-82.5, -110). -->
  <!-- Vector TS goes left to S(132.5, 162.5). Vector (-150, 2.5). Angle approx 180 deg. -->
  
  <!-- Drawing arc at T visually inside triangle R-S-T -->
  <path d="M272 148 A 20 20 0 0 0 262 160" class="angle-arc" stroke="#26C6DA" fill="none"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 5. 5. S and T are points on sides PR and QR of ∆ PQR such that ∠P = ∠RTS. Show that ∆RPQ ~
            ∆RTS.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆PQR with points S on PR, T on QR such that ∠P = ∠RTS.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆RPQ ~ ∆RTS.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆RPQ and ∆RTS:</div>
        <div class="step">∠R is common <span class="reason">(Common Angle)</span>.</div>
        <div class="step">∠RPQ = ∠RTS <span class="reason">(Given)</span>.</div>
        <div class="step">By AA Similarity Criterion <span class="reason">(AA Similarity)</span>:</div>
        <div class="final-answer">∆RPQ ~ ∆RTS.</div>
    </div>

    <!-- Question 6 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Vertices -->
  <!-- A: Top (200, 40) -->
  <!-- B: Left (50, 280) -->
  <!-- C: Right (350, 280) -->
  <!-- D: Point on AB -->
  <!-- E: Point on AC -->
  
  <!-- D approx 1/3 down AB -->
  <!-- A(200,40) -> B(50,280). Vector (-150, 240). 0.35 * vector = (-52.5, 84) -->
  <!-- D = (147.5, 124) -->
  
  <!-- E approx 1/3 down AC -->
  <!-- A(200,40) -> C(350,280). Vector (150, 240). 0.35 * vector = (52.5, 84) -->
  <!-- E = (252.5, 124) -->

  <!-- Main Triangle ABC -->
  <path d="M200 40 L50 280 L350 280 Z" class="line"/>

  <!-- Inner Lines -->
  <!-- Line DE -->
  <line x1="147.5" y1="124" x2="252.5" y2="124" class="inner-line"/>
  
  <!-- Line BE -->
  <line x1="50" y1="280" x2="252.5" y2="124" class="inner-line"/>
  
  <!-- Line CD -->
  <line x1="350" y1="280" x2="147.5" y2="124" class="inner-line"/>

  <!-- Labels -->
  <text x="195" y="30" class="text" fill="#26C6DA">A</text>
  <text x="30" y="290" class="text" fill="#26C6DA">B</text>
  <text x="360" y="290" class="text" fill="#26C6DA">C</text>
  <text x="125" y="125" class="text" fill="#26C6DA">D</text>
  <text x="260" y="125" class="text" fill="#26C6DA">E</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 6. 6. In Fig., if ∆ABE ≅ ∆ACD, show that ∆ADE ~ ∆ABC.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ABE ≅ ∆ACD.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆ADE ~ ∆ABC.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since ∆ABE ≅ ∆ACD <span class="reason">(Given)</span>:</div>
        <div class="step">AB = AC <span class="reason">(CPCT)</span></div>
        <div class="step">AE = AD <span class="reason">(CPCT)</span> ⇒ AD = AE</div>
        <div class="step">Divide equations: \\(\\frac{AD}{AB}\\) = \\(\\frac{AE}{AC}\\)</div>
        <div class="step">In ∆ADE and ∆ABC:</div>
        <div class="step">\\(\\frac{AD}{AB}\\) = \\(\\frac{AE}{AC}\\)</div>
        <div class="step">∠DAE = ∠BAC <span class="reason">(Common Angle)</span></div>
        <div class="step">By SAS Similarity Criterion <span class="reason">(SAS Similarity)</span>:</div>
        <div class="final-answer">∆ADE ~ ∆ABC.</div>
    </div>

    <!-- Question 7 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="450" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .angle-mark { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (50, 250) -->
  <!-- B: (400, 250) -->
  <!-- C: (180, 50) -->
  <!-- E: (180, 250) - Altitude from C to AB -->
  <!-- D: Intersection of altitude from A to BC -->
  <!-- BC line: (400,250) to (180,50). Vector (-220, -200). Slope ~ 0.909 -->
  <!-- Altitude AD slope ~ -1.1. Passes through A(50, 250). -->
  <!-- D calculation result: approx (208, 76) -->
  <!-- P: Intersection of Altitudes (approx 180, 107) -->

  <!-- Triangle ABC -->
  <path d="M180 50 L50 250 L400 250 Z" class="line"/>

  <!-- Altitude CE -->
  <line x1="180" y1="50" x2="180" y2="250" class="inner-line"/>

  <!-- Altitude AD -->
  <line x1="50" y1="250" x2="208" y2="76" class="inner-line"/>

  <!-- Labels -->
  <text x="175" y="40" class="text" fill="#26C6DA">C</text>
  <text x="30" y="260" class="text" fill="#26C6DA">A</text>
  <text x="410" y="260" class="text" fill="#26C6DA">B</text>
  <text x="175" y="270" class="text" fill="#26C6DA">E</text>
  <text x="215" y="75" class="text" fill="#26C6DA">D</text>
  <text x="160" y="115" class="text" fill="#26C6DA">P</text>

  <!-- Right Angle Markers -->
  <!-- At E (180, 250) -->
  <polyline points="180,240 190,240 190,250" class="angle-mark"/>

  <!-- At D (208, 76) -->
  <!-- We need a square rotated aligned with AD and DC -->
  <!-- Vector DA direction: (-1, 1.1) approx. Normalized a bit -->
  <!-- Vector DC direction: (-1, -0.9) approx -->
  <!-- Visually approximating a rotated square at D -->
  <!-- Points: On AD line and On DC line -->
  <path d="M198 87 L 209 97 L 219 86" class="angle-mark" fill="none"/>
  <!-- Or simpler visual approximation since it's small -->
  <!-- Let's start 10 units down AD, turn 90 deg right, go to line BC -->


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 7. 7. In Fig., altitudes AD and CE of ∆ ABC intersect each other at the point P. Show that:
        </div>

        <div class="sub-question">(i) ∆AEP ~ ∆CDP</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠AEP = ∠CDP = 90° <span class="reason">(Altitudes)</span></div>
        <div class="step">∠APE = ∠CPD <span class="reason">(Vertically Opposite Angles)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆AEP ~ ∆CDP.</div>

        <div class="sub-question">(ii) ∆ABD ~ ∆CBE</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠ADB = ∠CEB = 90° <span class="reason">(Altitudes)</span></div>
        <div class="step">∠ABD = ∠CBE <span class="reason">(Common Angle B)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆ABD ~ ∆CBE.</div>

        <div class="sub-question">(iii) ∆AEP ~ ∆ADB</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠AEP = ∠ADB = 90° <span class="reason">(Altitudes)</span></div>
        <div class="step">∠PAE = ∠BAD <span class="reason">(Common Angle A)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆AEP ~ ∆ADB.</div>

        <div class="sub-question">(iv) ∆PDC ~ ∆BEC</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠PDC = ∠BEC = 90° <span class="reason">(Altitudes)</span></div>
        <div class="step">∠PCD = ∠BCE <span class="reason">(Common Angle C)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆PDC ~ ∆BEC.</div>
    </div>

    <!-- Question 8 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 320" width="450" height="320">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (120, 50) -->
  <!-- B: (400, 50) -->
  <!-- D: (70, 200) -->
  <!-- C: (350, 200) -->
  <!-- Parallelogram ABCD -->
  <!-- Vector AD = (-50, 150). Slope -3. -->
  <!-- E is extension of AD. Let's go down to y=280. -->
  <!-- (y-50)/(x-120) = (200-50)/(70-120) = 150/-50 = -3 -->
  <!-- y - 50 = -3(x - 120) => y = -3x + 360 + 50 = -3x + 410 -->
  <!-- If y = 280, 280 = -3x + 410 => 3x = 130 => x = 43.3 -->
  <!-- E = (43.3, 280) -->
  
  <!-- Line BE intersects CD (y=200) at F? -->
  <!-- B(400, 50) to E(43.3, 280) -->
  <!-- Slope BE = (280-50)/(43.3-400) = 230 / -356.7 = -0.645 -->
  <!-- y - 50 = -0.645(x - 400) -->
  <!-- At y=200 (Line CD): 150 = -0.645(x - 400) -->
  <!-- x - 400 = 150 / -0.645 = -232.5 -->
  <!-- x = 167.5 -->
  <!-- F = (167.5, 200) -->
  
  <!-- C is (350, 200), D is (70, 200). F is between them. Correct. -->

  <!-- Parallelogram ABCD -->
  <path d="M120 50 L400 50 L350 200 L70 200 Z" class="line"/>

  <!-- Extension DE -->
  <line x1="70" y1="200" x2="43.3" y2="280" class="line"/>

  <!-- Line connecting B and E -->
  <line x1="400" y1="50" x2="43.3" y2="280" class="line"/>

  <!-- Labels -->
  <text x="110" y="45" class="text" fill="#26C6DA">A</text>
  <text x="405" y="45" class="text" fill="#26C6DA">B</text>
  <text x="360" y="215" class="text" fill="#26C6DA">C</text>
  <text x="50" y="200" class="text" fill="#26C6DA">D</text>
  <text x="30" y="290" class="text" fill="#26C6DA">E</text>
  <text x="160" y="220" class="text" fill="#26C6DA">F</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 8. 8. E is a point on the side AD produced of a parallelogram ABCD and BE intersects CD at F.
            Show that ∆ABE ~ ∆CFB.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Parallelogram ABCD. E on AD produced. BE intersects CD at F.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆ABE ~ ∆CFB.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In Parallelogram ABCD, ∠A = ∠C <span class="reason">(Opposite angles of parallelogram)</span>.
        </div>
        <div class="step">AE || BC. So ∠AEB = ∠CBF <span class="reason">(Alternate Interior Angles)</span>.</div>
        <div class="step">In ∆ABE and ∆CFB:</div>
        <div class="step">∠A = ∠C</div>
        <div class="step">∠AEB = ∠CBF</div>
        <div class="step">By AA Similarity Criterion <span class="reason">(AA Similarity)</span>:</div>
        <div class="final-answer">∆ABE ~ ∆CFB.</div>
    </div>

    <!-- Question 9 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 320" width="450" height="320">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .mark { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (50, 250) -->
  <!-- B: (200, 250) -->
  <!-- C: (200, 50) -->
  <!-- P: (350, 250) -->
  <!-- M: (158, 106) Calculated as projection of P on AC -->

  <!-- Triangle ABC -->
  <path d="M50 250 L200 250 L200 50 Z" class="line"/>
  
  <!-- Triangle AMP -->
  <!-- A(50,250) to P(350,250) is base line -->
  <line x1="200" y1="250" x2="350" y2="250" class="line"/> <!-- BP segment -->
  
  <!-- MP segment -->
  <line x1="350" y1="250" x2="158" y2="106" class="line"/>

  <!-- Labels -->
  <text x="35" y="250" class="text" fill="#26C6DA">A</text>
  <text x="195" y="275" class="text" fill="#26C6DA">B</text>
  <text x="200" y="40" class="text" fill="#26C6DA">C</text>
  <text x="360" y="260" class="text" fill="#26C6DA">P</text>
  <text x="145" y="100" class="text" fill="#26C6DA">M</text>

  <!-- Right Angle at B -->
  <polyline points="190,250 190,240 200,240" class="mark"/>

  <!-- Right Angle at M -->
  <!-- Vectors calculate in thought trace: (-9, 12) and (12, 9) from M -->
  <!-- M=(158, 106). Pt1=(149, 118). Pt2=(170, 115). Corner=(161, 127) -->
  <polyline points="149,118 161,127 170,115" class="mark"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 9. 9. In Fig., ABC and AMP are two right triangles, right angled at B and M respectively.
            Prove that:</div>

        <div class="sub-question">(i) ∆ABC ~ ∆AMP</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ABC and ∆AMP:</div>
        <div class="step">∠ABC = ∠AMP = 90° <span class="reason">(Given)</span></div>
        <div class="step">∠BAC = ∠MAP <span class="reason">(Common Angle A)</span></div>
        <div class="step">By AA Similarity Criterion <span class="reason">(AA Similarity)</span>:</div>
        <div class="final-answer">∆ABC ~ ∆AMP.</div>

        <div class="sub-question">(ii) \\(\\frac{CA}{PA}\\) = \\(\\frac{BC}{MP}\\)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since ∆ABC ~ ∆AMP <span class="reason">(Proved above)</span>:</div>
        <div class="step">Corresponding sides are proportional.</div>
        <div class="step">\\(\\frac{CA}{PA}\\) = \\(\\frac{BC}{MP}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <!-- Question 10 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle ABC (Smaller, Left) -->
  <!-- A(100, 50), B(50, 250), C(150, 250) -->
  <!-- D on AB. Let's start D at (70, 170) -->
  <path d="M100 50 L50 250 L150 250 Z" class="line"/>
  
  <!-- Bisector CD -->
  <line x1="150" y1="250" x2="70" y2="170" class="inner-line"/>

  <!-- Labels ABC, D -->
  <text x="95" y="40" class="text" fill="#26C6DA">A</text>
  <text x="30" y="260" class="text" fill="#26C6DA">B</text>
  <text x="160" y="260" class="text" fill="#26C6DA">C</text>
  <text x="50" y="170" class="text" fill="#26C6DA">D</text>


  <!-- Triangle FEG (Larger, Right) -->
  <!-- F(350, 50), E(275, 250), G(425, 250) -->
  <!-- H on FE. Let's calculate proportional point approximately corresponding to D -->
  <!-- H approx (305, 170) -->
  <path d="M350 50 L275 250 L425 250 Z" class="line"/>

  <!-- Bisector GH -->
  <line x1="425" y1="250" x2="305" y2="170" class="inner-line"/>

  <!-- Labels FEG, H -->
  <text x="345" y="40" class="text" fill="#26C6DA">F</text>
  <text x="255" y="260" class="text" fill="#26C6DA">E</text>
  <text x="435" y="260" class="text" fill="#26C6DA">G</text>
  <text x="285" y="170" class="text" fill="#26C6DA">H</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 10. 10. CD and GH are respectively the bisectors of ∠ACB and ∠EGF such that D and H lie on
            sides AB and FE of ∆ABC and ∆EFG respectively. If ∆ABC ~ ∆FEG, show that:</div>

        <div class="sub-question">(i) \\(\\frac{CD}{GH}\\) = \\(\\frac{AC}{FG}\\)</div>
        <div class="sub-header">Given:</div>
        <div class="step">∆ABC ~ ∆FEG. CD bisects ∠C, GH bisects ∠G.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since ∆ABC ~ ∆FEG:</div>
        <div class="step">∠A = ∠F <span class="reason">(Corresponding Angles)</span>.</div>
        <div class="step">∠C = ∠G <span class="reason">(Corresponding Angles)</span>.</div>
        <div class="step">Since CD and GH are bisectors:</div>
        <div class="step">∠ACD = \\(\\frac{1}{2}\\) ∠C and ∠FGH = \\(\\frac{1}{2}\\) ∠G.</div>
        <div class="step">So ∠ACD = ∠FGH.</div>
        <div class="step">In ∆ACD and ∆FGH:</div>
        <div class="step">∠A = ∠F</div>
        <div class="step">∠ACD = ∠FGH</div>
        <div class="step">By AA Similarity <span class="reason">(AA Similarity)</span>:</div>
        <div class="step">∆ACD ~ ∆FGH</div>
        <div class="step">So \\(\\frac{CD}{GH}\\) = \\(\\frac{AC}{FG}\\)</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(ii) ∆DCB ~ ∆HGE</div>
        <div class="sub-header">Proof:</div>
        <div class="step">∠B = ∠E <span class="reason">(Since ∆ABC ~ ∆FEG)</span></div>
        <div class="step">∠BCD = ∠HGE <span class="reason">(Halves of equal angles)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆DCB ~ ∆HGE.</div>

        <div class="sub-question">(iii) ∆DCA ~ ∆HGF</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Refer to proof in part (i) above.</div>
        <div class="step">We established ∆ACD ~ ∆FGH, which is same as ∆DCA ~ ∆HGF.</div>
        <div class="final-answer">Proved.</div>
    </div>

    <!-- Question 11 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="450" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .mark { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Coordinates -->
  <!-- A: (250, 40) -->
  <!-- B: (180, 250) -->
  <!-- C: (320, 250) -->
  <!-- AB = AC check: (70, 210) vs (70, 210). Yes isosceles. -->
  <!-- D: (250, 250) -->
  <!-- E: Point on CB produced. (50, 250) -->
  <!-- F: Point on AC such that EF perp AC -->
  
  <!-- Line AC: (320-250, 250-40) = (70, 210). Slope 3. -->
  <!-- Line EF slope -1/3. Equation: y - 250 = -1/3 (x - 50) => y = -x/3 + 50/3 + 250 -->
  <!-- Line AC equation: y - 40 = 3(x - 250) => y = 3x - 750 + 40 = 3x - 710 -->
  <!-- Intersection: 3x - 710 = -x/3 + 266.67 -->
  <!-- 9x - 2130 = -x + 800 -->
  <!-- 10x = 2930 -> x = 293 -->
  <!-- y = 3(293) - 710 = 879 - 710 = 169 -->
  <!-- F = (293, 169) -->

  <!-- Base Line EC -->
  <line x1="50" y1="250" x2="320" y2="250" class="line"/>

  <!-- Triangle Sides AB, AC -->
  <line x1="180" y1="250" x2="250" y2="40" class="line"/>
  <line x1="320" y1="250" x2="250" y2="40" class="line"/>
  
  <!-- Line EF -->
  <line x1="50" y1="250" x2="293" y2="169" class="inner-line"/>

  <!-- Altitude AD -->
  <line x1="250" y1="40" x2="250" y2="250" class="inner-line"/>

  <!-- Labels -->
  <text x="245" y="30" class="text" fill="#26C6DA">A</text>
  <text x="175" y="270" class="text" fill="#26C6DA">B</text>
  <text x="330" y="270" class="text" fill="#26C6DA">C</text>
  <text x="245" y="270" class="text" fill="#26C6DA">D</text>
  <text x="35" y="270" class="text" fill="#26C6DA">E</text>
  <text x="300" y="165" class="text" fill="#26C6DA">F</text>

  <!-- Right Angle D -->
  <polyline points="240,250 240,240 250,240" class="mark"/>

  <!-- Right Angle F -->
  <!-- Vector FE approx (243, 81). Vector FA approx (-43, -129) -->
  <polyline points="286,176 295,183 301,176" class="mark" fill="none"/> 
  <!-- Crude approximation drawing a small square rotated -->


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 11. 11. In Fig., E is a point on side CB produced of a isosceles triangle ABC with AB = AC.
            If AD ⊥ BC and EF ⊥ AC, prove that ∆ABD ~ ∆ECF.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Isosceles ∆ABC with AB = AC. AD ⊥ BC, EF ⊥ AC.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆ABD ~ ∆ECF.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since AB = AC, ∠B = ∠C <span class="reason">(Angles opposite equal sides)</span>.</div>
        <div class="step">In ∆ABD and ∆ECF:</div>
        <div class="step">∠ADB = ∠EFC = 90° <span class="reason">(Given altitudes)</span></div>
        <div class="step">∠ABD = ∠ECF <span class="reason">(Since ∠B = ∠C)</span></div>
        <div class="step">By AA Similarity:</div>
        <div class="final-answer">∆ABD ~ ∆ECF.</div>
    </div>

    <!-- Question 12 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle ABC (Smaller) -->
  <!-- A: (120, 50) -->
  <!-- B: (50, 250) -->
  <!-- C: (190, 250) -->
  <!-- D: Midpoint (120, 250) -->
  <path d="M120 50 L50 250 L190 250 Z" class="line"/>
  
  <!-- Median AD -->
  <line x1="120" y1="50" x2="120" y2="250" class="inner-line"/>

  <!-- Labels ABC -->
  <text x="110" y="40" class="text" fill="#26C6DA">A</text>
  <text x="30" y="260" class="text" fill="#26C6DA">B</text>
  <text x="200" y="260" class="text" fill="#26C6DA">C</text>
  <text x="110" y="270" class="text" fill="#26C6DA">D</text>

  <!-- Triangle PQR (Larger) -->
  <!-- P: (350, 50) -->
  <!-- Q: (250, 250) -->
  <!-- R: (450, 250) -->
  <!-- M: Midpoint (350, 250) -->
  <path d="M350 50 L250 250 L450 250 Z" class="line"/>
  
  <!-- Median PM -->
  <line x1="350" y1="50" x2="350" y2="250" class="inner-line"/>

  <!-- Labels PQR -->
  <text x="340" y="40" class="text" fill="#26C6DA">P</text>
  <text x="230" y="260" class="text" fill="#26C6DA">Q</text>
  <text x="460" y="260" class="text" fill="#26C6DA">R</text>
  <text x="340" y="270" class="text" fill="#26C6DA">M</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 12. 12. Sides AB and BC and median AD of a triangle ABC are respectively proportional to sides
            PQ and QR and median PM of ∆ PQR. Show that ∆ABC ~ ∆PQR.</div>

        <div class="sub-header">Given:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BC}{QR}\\) = \\(\\frac{AD}{PM}\\). AD and PM are medians.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆ABC ~ ∆PQR.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since AD is median, BC = 2BD. Since PM is median, QR = 2QM.</div>
        <div class="step">\\(\\frac{BC}{QR}\\) = \\(\\frac{2BD}{2QM}\\) = \\(\\frac{BD}{QM}\\)</div>
        <div class="step">In ∆ABD and ∆PQM:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{AD}{PM}\\) <span class="reason">(Given)</span></div>
        <div class="step">\\(\\frac{BD}{QM}\\) = \\(\\frac{AB}{PQ}\\) <span class="reason">(From above)</span></div>
        <div class="step">So \\(\\frac{AB}{PQ}\\) = \\(\\frac{BD}{QM}\\) = \\(\\frac{AD}{PM}\\)</div>
        <div class="step">By SSS Similarity: ∆ABD ~ ∆PQM.</div>
        <div class="step">Therefore, ∠B = ∠Q <span class="reason">(Matching angles)</span>.</div>
        <div class="step">Now in ∆ABC and ∆PQR:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BC}{QR}\\) <span class="reason">(Given)</span></div>
        <div class="step">∠B = ∠Q <span class="reason">(Proved)</span></div>
        <div class="step">By SAS Similarity Criterion:</div>
        <div class="final-answer">∆ABC ~ ∆PQR.</div>
    </div>

    <!-- Question 13 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="450" height="300">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle ABC -->
  <!-- A: (200, 50) -->
  <!-- B: (50, 250) -->
  <!-- C: (350, 250) -->
  <path d="M200 50 L50 250 L350 250 Z" class="line"/>

  <!-- Point D on BC such that ADC = BAC -->
  <!-- BAC looks like 70 degrees? -->
  <!-- ADC needs to be same. Let's position D closer to C. -->
  <!-- D (220, 250) -->
  <line x1="200" y1="50" x2="220" y2="250" class="inner-line"/>

  <!-- Labels -->
  <text x="195" y="40" class="text" fill="#26C6DA">A</text>
  <text x="30" y="260" class="text" fill="#26C6DA">B</text>
  <text x="360" y="260" class="text" fill="#26C6DA">C</text>
  <text x="215" y="270" class="text" fill="#26C6DA">D</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 13. 13. D is a point on the side BC of a triangle ABC such that ∠ADC = ∠BAC. Show that CA² =
            CB.CD.</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ABC with D on BC such that ∠ADC = ∠BAC.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">CA² = CB.CD</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ABC and ∆DAC:</div>
        <div class="step">∠C is common.</div>
        <div class="step">∠BAC = ∠ADC <span class="reason">(Given)</span>.</div>
        <div class="step">By AA Similarity Criterion: ∆ABC ~ ∆DAC.</div>
        <div class="step">So corresponding sides are proportional:</div>
        <div class="step">\\(\\frac{CA}{CD}\\) = \\(\\frac{CB}{CA}\\)</div>
        <div class="step">Cross multiply: CA × CA = CB × CD</div>
        <div class="final-answer">CA² = CB.CD</div>
    </div>

    <!-- Question 14 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 400" width="550" height="400">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .dashed-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-dasharray: 8, 5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Left Figure: Triangle ABC extended to E -->
  <!-- Coordinates -->
  <!-- A(125, 50) -->
  <!-- B(75, 160) -->
  <!-- C(175, 160) -->
  <!-- D(125, 160) -->
  <!-- E(125, 270) --> <!-- AD = 110, DE = 110 -->

  <!-- Solid Triangle ABC -->
  <path d="M125 50 L75 160 L175 160 Z" class="line"/>
  
  <!-- Solid Median AD -->
  <line x1="125" y1="50" x2="125" y2="160" class="line"/>
  
  <!-- Dashed Extension DE -->
  <line x1="125" y1="160" x2="125" y2="270" class="dashed-line"/>
  
  <!-- Dashed Lines BE and CE -->
  <line x1="75" y1="160" x2="125" y2="270" class="dashed-line"/>
  <line x1="175" y1="160" x2="125" y2="270" class="dashed-line"/>

  <!-- Labels Left -->
  <text x="120" y="40" class="text" fill="#26C6DA">A</text>
  <text x="55" y="165" class="text" fill="#26C6DA">B</text>
  <text x="180" y="165" class="text" fill="#26C6DA">C</text>
  <text x="110" y="175" class="text" fill="#26C6DA">D</text>
  <text x="120" y="295" class="text" fill="#26C6DA">E</text>

  <!-- Right Figure: Triangle PQR extended to N -->
  <!-- Coordinates -->
  <!-- P(400, 30) -->
  <!-- Q(310, 200) -->
  <!-- R(490, 200) -->
  <!-- M(400, 200) -->
  <!-- N(400, 370) --> <!-- PM = 170, MN = 170 -->

  <!-- Solid Triangle PQR -->
  <path d="M400 30 L310 200 L490 200 Z" class="line"/>
  
  <!-- Solid Median PM -->
  <line x1="400" y1="30" x2="400" y2="200" class="line"/>
  
  <!-- Dashed Extension MN -->
  <line x1="400" y1="200" x2="400" y2="370" class="dashed-line"/>
  
  <!-- Dashed Lines QN and RN -->
  <line x1="310" y1="200" x2="400" y2="370" class="dashed-line"/>
  <line x1="490" y1="200" x2="400" y2="370" class="dashed-line"/>

  <!-- Labels Right -->
  <text x="395" y="25" class="text" fill="#26C6DA">P</text>
  <text x="290" y="205" class="text" fill="#26C6DA">Q</text>
  <text x="500" y="205" class="text" fill="#26C6DA">R</text>
  <text x="380" y="215" class="text" fill="#26C6DA">M</text>
  <text x="395" y="390" class="text" fill="#26C6DA">N</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 14. 14. Sides AB and AC and median AD of a triangle ABC are respectively proportional to sides
            PQ and PR and median PM of another triangle PQR. Show that ∆ABC ~ ∆PQR.</div>
        <div class="sub-header">Given:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{AC}{PR}\\) = \\(\\frac{AD}{PM}\\).</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">∆ABC ~ ∆PQR.</div>
        <div class="sub-header">Construction:</div>
        <div class="step">Produce AD to E such that AD = DE. Join CE.</div>
        <div class="step">Produce PM to N such that PM = MN. Join RN.</div>
        <div class="sub-header">Proof:</div>
        <div class="step">In quadrilateral ABEC, diagonals bisect each other (AD=DE by construction, BD=DC given).</div>
        <div class="step">So ABEC is a parallelogram. Thus AC = BE and AB = CE.</div>
        <div class="step">Similarly, PQNR is a parallelogram, so PR = QN and PQ = RN.</div>
        <div class="step">Given: \\(\\frac{AB}{PQ}\\) = \\(\\frac{AC}{PR}\\) = \\(\\frac{AD}{PM}\\)</div>
        <div class="step">Substitute AC = BE and PR = QN: \\(\\frac{AB}{PQ}\\) = \\(\\frac{BE}{QN}\\)</div>
        <div class="step">Also \\(\\frac{AD}{PM}\\) = \\(\\frac{2AD}{2PM}\\) = \\(\\frac{AE}{PN}\\)</div>
        <div class="step">So in ∆ABE and ∆PQN:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BE}{QN}\\) = \\(\\frac{AE}{PN}\\)</div>
        <div class="step">So ∆ABE ~ ∆PQN <span class="reason">(SSS Similarity)</span>.</div>
        <div class="step">Therefore ∠BAE = ∠QPN <span class="reason">...(1)</span></div>
        <div class="step">Similarly, ∆ACE ~ ∆PRN, so ∠CAE = ∠RPN <span class="reason">...(2)</span></div>
        <div class="step">Adding (1) and (2):</div>
        <div class="step">∠BAE + ∠CAE = ∠QPN + ∠RPN ⇒ ∠BAC = ∠QPR.</div>
        <div class="step">Now in ∆ABC and ∆PQR:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{AC}{PR}\\) <span class="reason">(Given)</span></div>
        <div class="step">∠A = ∠P <span class="reason">(Proved)</span></div>
        <div class="step">By SAS Similarity Criterion:</div>
        <div class="final-answer">∆ABC ~ ∆PQR.</div>
    </div>

    <!-- Question 15 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="600" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
      .dim-text { font-family: 'Times New Roman', serif; font-size: 16px; fill: #26C6DA; }
      .mark { fill: none; stroke: #26C6DA; stroke-width: 1.5; }
    </style>
  </defs>

  <!-- Triangle CDF (Smaller) -->
  <!-- D (80, 250), F (140, 250) -> Base 60px -->
  <!-- C (80, 160) -> Height 90px -->
  <!-- Ratio 90/60 = 1.5. Matches 6/4. -->
  <path d="M80 160 L80 250 L140 250 Z" class="line"/>

  <!-- Labels CDF -->
  <text x="75" y="150" class="text" fill="#26C6DA">C</text>
  <text x="60" y="265" class="text" fill="#26C6DA">D</text>
  <text x="145" y="265" class="text" fill="#26C6DA">F</text>
  
  <!-- Dimensions CDF -->
  <text x="35" y="210" class="dim-text" fill="#26C6DA">6 m</text>
  <text x="95" y="270" class="dim-text" fill="#26C6DA">4 m</text>

  <!-- Right Angle D -->
  <polyline points="80,240 90,240 90,250" class="mark"/>


  <!-- Triangle ABE (Larger) -->
  <!-- B (300, 320). Base 28m. Height 42m. -->
  <!-- Let's use scale 7px per m. -->
  <!-- Base 28 * 7 = 196px. E at 300+196 = 496. -->
  <!-- Height 42 * 7 = 294px. A at 320-294 = 26. -->
  <!-- B (300, 320), E (496, 320), A (300, 26) -->
  <path d="M300 26 L300 320 L496 320 Z" class="line"/>

  <!-- Labels ABE -->
  <text x="295" y="20" class="text" fill="#26C6DA">A</text>
  <text x="280" y="335" class="text" fill="#26C6DA">B</text>
  <text x="500" y="335" class="text" fill="#26C6DA">E</text>
  
  <!-- Dimensions ABE -->
  <text x="380" y="340" class="dim-text" fill="#26C6DA">28 m</text>

  <!-- Right Angle B -->
  <polyline points="300,310 310,310 310,320" class="mark"/>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 15. 15. A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same
            time a tower casts a shadow 28 m long. Find the height of the tower.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Pole Height = 6 m, Pole Shadow = 4 m.</div>
        <div class="step">Tower Shadow = 28 m.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">Tower Height (h).</div>
        <div class="sub-header">Proof:</div>
        <div class="step">The sun's inclination is constant at the same time, so the triangles formed by \\(\\frac{pole}{tower}\\) and
            shadows are similar <span class="reason">(AA Similarity - Right angle and Sun's angle)</span>.</div>
        <div class="step">Ratio of heights = Ratio of shadows.</div>
        <div class="step">\\(\\frac{Height of Pole}{Height of Tower}\\) = \\(\\frac{Shadow of Pole}{Shadow of Tower}\\)</div>
        <div class="step">\\(\\frac{6}{h}\\) = \\(\\frac{4}{28}\\)</div>
        <div class="step">h = \\(\\frac{6 × 28}{4}\\) = 6 × 7 = 42 m.</div>
        <div class="final-answer">Height of tower is 42 m.</div>
    </div>

    <!-- Question 16 -->
    <div class="content-box">
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350">
  <defs>
    <style>
      .line { fill: none; stroke: #26C6DA; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
      .inner-line { fill: none; stroke: #26C6DA; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .text { font-family: 'Times New Roman', serif; font-size: 18px; fill: #26C6DA; font-weight: bold; }
    </style>
  </defs>

  <!-- Triangle ABC (Smaller) -->
  <!-- A(100, 120) -->
  <!-- B(50, 300) -->
  <!-- C(170, 300) -->
  <!-- D(110, 300) -->
  <path d="M100 120 L50 300 L170 300 Z" class="line"/>
  
  <!-- Median AD -->
  <line x1="100" y1="120" x2="110" y2="300" class="inner-line"/>

  <!-- Labels ABC -->
  <text x="90" y="110" class="text" fill="#26C6DA">A</text>
  <text x="35" y="315" class="text" fill="#26C6DA">B</text>
  <text x="180" y="315" class="text" fill="#26C6DA">C</text>
  <text x="105" y="320" class="text" fill="#26C6DA">D</text>


  <!-- Triangle PQR (Larger) -->
  <!-- P(325, 30) -->
  <!-- Q(250, 300) -->
  <!-- R(430, 300) -->
  <!-- M(340, 300) -->
  <path d="M325 30 L250 300 L430 300 Z" class="line"/>
  
  <!-- Median PM -->
  <line x1="325" y1="30" x2="340" y2="300" class="inner-line"/>

  <!-- Labels PQR -->
  <text x="315" y="20" class="text" fill="#26C6DA">P</text>
  <text x="230" y="315" class="text" fill="#26C6DA">Q</text>
  <text x="440" y="315" class="text" fill="#26C6DA">R</text>
  <text x="335" y="320" class="text" fill="#26C6DA">M</text>


<style> text, tspan { fill: #26C6DA !important; } </style>




</svg></div>
        <div class="question">Question 16. 16. If AD and PM are medians of triangles ABC and PQR, respectively where ∆ABC ~ ∆PQR,
            prove that \\(\\frac{AB}{PQ}\\) = \\(\\frac{AD}{PM}\\).</div>

        <div class="sub-header">Given:</div>
        <div class="step">∆ABC ~ ∆PQR. AD and PM are medians.</div>
        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{AD}{PM}\\)</div>
        <div class="sub-header">Proof:</div>
        <div class="step">Since ∆ABC ~ ∆PQR:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BC}{QR}\\) <span class="reason">(Proportional sides)</span></div>
        <div class="step">And ∠B = ∠Q <span class="reason">(Corresponding Angles)</span>.</div>
        <div class="step">Since D and M are midpoints:</div>
        <div class="step">BC = 2BD and QR = 2QM.</div>
        <div class="step">So \\(\\frac{BC}{QR}\\) = \\(\\frac{2BD}{2QM}\\) = \\(\\frac{BD}{QM}\\)</div>
        <div class="step">In ∆ABD and ∆PQM:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{BD}{QM}\\)</div>
        <div class="step">∠B = ∠Q</div>
        <div class="step">By SAS Similarity: ∆ABD ~ ∆PQM.</div>
        <div class="step">Corresponding sides are proportional:</div>
        <div class="step">\\(\\frac{AB}{PQ}\\) = \\(\\frac{AD}{PM}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>



</body></html>`,
    theorems: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangles - Theorems</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

        body {
            font-family: 'Noto Sans', sans-serif;
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
            font-family: 'Noto Sans', sans-serif;
        }

        .content-box {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flow-root;
            transition: transform 0.2s ease;
        }

        .theorem-title {
            color: #D32F2F;
            font-weight: 700;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            clear: none;
        }

        .sub-header {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 1.1em;
            /* text-decoration: underline; Removed */
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 0.9em;
            margin: 0 4px;
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

        .reason {
            color: #E65100;
            font-weight: 600;
        }

        .final-answer {
            color: #2E7D32;
            font-weight: 700;
            margin-top: 15px;
            font-size: 1.2em;
            padding-top: 5px;
            border-top: 1px dashed #ddd;
            display: block;
            clear: none;
        }

        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 280px;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            img {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }
    </style>

    <style>
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>
<div class="content-box">
        <div class="theorem-title">Theorem 6.1: Basic Proportionality Theorem (BPT)</div>
        <div class="svg-container"><svg viewBox="0 0 500 350" width="500" height="350" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #26C6DA; stroke-width: 2; fill: none; stroke-dasharray: 6,4; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #26C6DA; }
        .angle-mark { stroke: #26C6DA; stroke-width: 1.5; fill: none; }
    </style>

    <!-- Coordinates: A(250, 50), B(100, 300), C(400, 300) -->
    <!-- D(190, 150), E(310, 150) -->
    <!-- N(222, 97), M(278, 97) -->

    <!-- Main Triangle ABC -->
    <path d="M 250,50 L 100,300 L 400,300 Z" class="main-line"/>

    <!-- Line DE -->
    <line x1="190" y1="150" x2="310" y2="150" class="main-line"/>

    <!-- Dashed Lines: BE and CD -->
    <line x1="100" y1="300" x2="310" y2="150" class="dashed-line"/>
    <line x1="400" y1="300" x2="190" y2="150" class="dashed-line"/>

    <!-- Perpendiculars: EN (E to AB) and DM (D to AC) -->
    <!-- N is on AB. M is on AC. -->
    <line x1="310" y1="150" x2="222" y2="97" class="dashed-line"/>
    <line x1="190" y1="150" x2="278" y2="97" class="dashed-line"/>

    <!-- Right Angle Markers -->
    <!-- At N(222, 97) on AB. AB slope is -5/3. Normal slope is 3/5. -->
    <!-- Vector along AB approx (-3, 5). Vector along NE approx (-1, -0.6) -->
    <!-- Just draw small squares rotated appropriately -->
    <!-- N -->
    <path d="M 222,97 L 227,105 L 235,100" class="angle-mark" fill="none"/> 
    <!-- Simplified right angle mark or rotate a rect -->
    <g transform="rotate(-59 222 97)">
        <rect x="222" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    
    <!-- M -->
    <g transform="rotate(59 278 97)">
        <rect x="268" y="97" width="10" height="10" fill="none" stroke="#26C6DA" stroke-width="1.5"/>
    </g>
    <!-- The rotation might need fine tuning, but 59 deg is approx slope angle (tan 5/3 = 59 deg) -->
    <!-- For M (on AC), slope is 5/3. Angle is 59 deg. The rect should align with line AC.
         Rect at (278,97). The line goes 'down-right'. So we want the rect 'inside' towards D?
         D is to the left.
         Let's just use manual path for better control if unsure of rotation origin. -->
         
    <!-- Labels -->
    <text x="250" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="90" y="310" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="410" y="310" class="text" text-anchor="start" fill="#26C6DA">C</text>
    <text x="180" y="150" class="text" text-anchor="end" fill="#26C6DA">D</text>
    <text x="320" y="150" class="text" text-anchor="start" fill="#26C6DA">E</text>
    <text x="210" y="95" class="text" text-anchor="end" fill="#26C6DA">N</text>
    <text x="290" y="95" class="text" text-anchor="start" fill="#26C6DA">M</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If a line is drawn parallel to one side of a triangle to intersect the other two sides in
            distinct points, the other two sides are divided in the same ratio.</div>

        <div class="sub-header">Given:</div>
        <div class="step">A triangle ABC in which a line parallel to side BC intersects other two sides AB and AC at D
            and E respectively.</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>

        <div class="sub-header">Construction:</div>
        <div class="step">Join BE and CD and draw DM ⊥ AC and EN ⊥ AB.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Area of triangle = \\(\\frac{1}{2}\\) × base × height</div>
        <div class="step">Area(ADE) = \\(\\frac{1}{2}\\) × AD × EN</div>
        <div class="step">Area(BDE) = \\(\\frac{1}{2}\\) × DB × EN</div>
        <div class="step">So, \\(\\frac{ar(ADE)}{ar(BDE)}\\) = \\(\\frac{1}{2}\\) AD ×
                    EN</span><span class="denominator">\\(\\frac{1}{2}\\) DB × EN</span></span> = \\(\\frac{AD}{DB}\\) <span
                class="reason">...(1)</span></div>
        <div class="step">Similarly, Area(ADE) = \\(\\frac{1}{2}\\) × AE × DM and Area(DEC) = \\(\\frac{1}{2}\\) × EC × DM</div>
        <div class="step">So, \\(\\frac{ar(ADE)}{ar(DEC)}\\) = \\(\\frac{1}{2}\\) AE ×
                    DM</span><span class="denominator">\\(\\frac{1}{2}\\) EC × DM</span></span> = \\(\\frac{AE}{EC}\\) <span
                class="reason">...(2)</span></div>
        <div class="step">But, ∆BDE and ∆DEC are on the same base DE and between the same parallels BC and DE.</div>
        <div class="step">Therefore, ar(BDE) = ar(DEC)</div>
        <div class="step">From (1) and (2), we get:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="theorem-title">Theorem 6.2: Converse of BPT</div>
        <div class="svg-container"><svg viewBox="0 0 500 350" width="500" height="350" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-dasharray: 8,5; stroke-linecap: round; }
        .text { font-family: "Times New Roman", serif; font-size: 24px; font-weight: bold; fill: #26C6DA; }
    </style>

    <!-- Coordinates: A(250, 50), B(100, 300), C(400, 300) -->
    <!-- D(172, 180), E(328, 180) - Horizontal line D-E -->
    <!-- E'(304, 140) - Point higher up on AC -->
    
    <!-- Triangle ABC -->
    <path d="M 250,50 L 100,300 L 400,300 Z" class="main-line"/>

    <!-- Line DE (Solid) -->
    <line x1="172" y1="180" x2="328" y2="180" class="main-line"/>

    <!-- Line DE' (Dashed) -->
    <line x1="172" y1="180" x2="304" y2="140" class="dashed-line"/>

    <!-- Labels -->
    <text x="250" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="90" y="315" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="410" y="315" class="text" text-anchor="start" fill="#26C6DA">C</text>
    <text x="160" y="185" class="text" text-anchor="end" fill="#26C6DA">D</text>
    <text x="338" y="185" class="text" text-anchor="start" fill="#26C6DA">E</text>
    <text x="315" y="140" class="text" text-anchor="start" fill="#26C6DA">E'</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If a line divides any two sides of a triangle in the same ratio, then the line is parallel to
            the third side.</div>

        <div class="sub-header">Given:</div>
        <div class="step">A triangle ABC and a line DE intersecting AB at D and AC at E such that \\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\).</div>

        <div class="sub-header">To Prove:</div>
        <div class="step">DE || BC.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Let us assume that DE is not parallel to BC.</div>
        <div class="step">Then, draw a line DE' parallel to BC.</div>
        <div class="step">By BPT, since DE' || BC:</div>
        <div class="step">\\(\\frac{AD}{DB}\\) = \\(\\frac{AE'}{E'C}\\) <span
                class="reason">...(1)</span></div>
        <div class="step">But given: \\(\\frac{AD}{DB}\\) = \\(\\frac{AE}{EC}\\) <span class="reason">...(2)</span></div>
        <div class="step">From (1) and (2):</div>
        <div class="step">\\(\\frac{AE'}{E'C}\\) = \\(\\frac{AE}{EC}\\)</div>
        <div class="step">Adding 1 to both sides:</div>
        <div class="step">\\(\\frac{AE'}{E'C}\\) + 1 = \\(\\frac{AE}{EC}\\) + 1</div>
        <div class="step">\\(\\frac{AE' + E'C}{E'C}\\) = \\(\\frac{AE +
                    EC}{EC}\\)</div>
        <div class="step">\\(\\frac{AC}{E'C}\\) = \\(\\frac{AC}{EC}\\)</div>
        <div class="step">This implies E'C = EC.</div>
        <div class="step">This is only possible if E and E' coincide.</div>
        <div class="step">So, DE coincides with DE'.</div>
        <div class="step">Therefore, DE || BC.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="theorem-title">Theorem 6.3: AAA Similarity Criterion</div>
        <div class="svg-container"><svg viewBox="0 0 500 250" width="500" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #26C6DA; stroke-width: 2.5; fill: none; stroke-dasharray: 6,4; stroke-linecap: round; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #26C6DA; }
        .dot { fill: #26C6DA; }
        .angle-arc { stroke: #26C6DA; stroke-width: 1.5; fill: none; }
    </style>

    <!-- Triangle ABC (Smaller) -->
    <!-- A(100, 50), B(60, 180), C(140, 180) -->
    <path d="M 100,50 L 60,180 L 140,180 Z" class="main-line"/>
    
    <!-- Triangle DEF (Larger) -->
    <!-- D(350, 20), E(250, 220), F(450, 220) -->
    <path d="M 350,20 L 250,220 L 450,220 Z" class="main-line"/>

    <!-- Points P and Q on DE and DF -->
    <!-- Line PQ (Dashed) -->
    <line x1="300" y1="120" x2="400" y2="120" class="dashed-line"/>
    
    <!-- Dots at P and Q -->
    <circle cx="300" cy="120" r="5" class="dot"/>
    <circle cx="400" cy="120" r="5" class="dot"/>

    <!-- Angle Arcs -->
    <!-- Angle B in ABC: Vertex B(60, 180). Legs to A(100, 50) and C(140, 180). -->
    <!-- Vector BA: (40, -130). Vector BC: (80, 0). -->
    <!-- Arc start on BC: (75, 180). End on BA. -->
    <path d="M 75,180 A 15,15 0 0,0 66,168" class="angle-arc" fill="none" stroke="#26C6DA"/>
    
    <!-- Angle E in DEF: Vertex E(250, 220). Legs to D(350, 20) and F(450, 220). -->
    <!-- Vector ED: (100, -200). Vector EF: (200, 0). -->
    <!-- Arc start on EF: (270, 220). End on ED. -->
    <path d="M 270,220 A 20,20 0 0,0 258,204" class="angle-arc" fill="none" stroke="#26C6DA"/>
    
    <!-- Angle P in DPQ: Vertex P(300, 120). Legs to D(350, 20) and Q(400, 120). -->
    <!-- Vector PD: (50, -100). Vector PQ: (100, 0). -->
    <!-- Arc start on PQ: (315, 120) -->
    <path d="M 315,120 A 15,15 0 0,0 307,108" class="angle-arc" fill="none" stroke="#26C6DA"/>

    <!-- Labels -->
    <text x="100" y="40" class="text" text-anchor="middle" fill="#26C6DA">A</text>
    <text x="50" y="200" class="text" text-anchor="end" fill="#26C6DA">B</text>
    <text x="150" y="200" class="text" text-anchor="start" fill="#26C6DA">C</text>
    
    <text x="350" y="15" class="text" text-anchor="middle" fill="#26C6DA">D</text>
    <text x="240" y="240" class="text" text-anchor="end" fill="#26C6DA">E</text>
    <text x="460" y="240" class="text" text-anchor="start" fill="#26C6DA">F</text>
    
    <text x="290" y="125" class="text" text-anchor="end" fill="#26C6DA">P</text>
    <text x="410" y="125" class="text" text-anchor="start" fill="#26C6DA">Q</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If in two triangles, corresponding angles are equal, then their corresponding sides are in the
            same ratio (or proportion) and hence the two triangles are similar.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Two triangles ABC and DEF such that ∠A = ∠D, ∠B = ∠E and ∠C = ∠F.</div>

        <div class="sub-header">Construction:</div>
        <div class="step">Cut DP = AB and DQ = AC and join PQ.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">In ∆ABC and ∆DPQ:</div>
        <div class="step">AB = DP <span class="reason">(Construction)</span></div>
        <div class="step">∠A = ∠D <span class="reason">(Given)</span></div>
        <div class="step">AC = DQ <span class="reason">(Construction)</span></div>
        <div class="step">So, ∆ABC ≅ ∆DPQ <span class="reason">(SAS Congruence rule)</span></div>
        <div class="step">This gives ∠B = ∠P <span class="reason">(CPCT)</span></div>
        <div class="step">But ∠B = ∠E <span class="reason">(Given)</span></div>
        <div class="step">So, ∠P = ∠E.</div>
        <div class="step">Since corresponding angles are equal, PQ || EF.</div>
        <div class="step">By BPT: \\(\\frac{DP}{PE}\\) = \\(\\frac{DQ}{QF}\\)</div>
        <div class="step">From this (by adding 1 to distinct ratios etc.), we get:</div>
        <div class="step">\\(\\frac{DP}{DE}\\) = \\(\\frac{DQ}{DF}\\)</div>
        <div class="step">Since DP = AB and DQ = AC:</div>
        <div class="step">\\(\\frac{AB}{DE}\\) = \\(\\frac{AC}{DF}\\)</div>
        <div class="step">Similarly, we can prove \\(\\frac{AB}{DE}\\) = \\(\\frac{BC}{EF}\\).</div>
        <div class="step">Therefore, \\(\\frac{AB}{DE}\\) = \\(\\frac{AC}{DF}\\) = \\(\\frac{BC}{EF}\\).</div>
        <div class="step">Since ratio of sides is same, triangles are similar.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="theorem-title">Theorem 6.4: SSS Similarity Criterion</div>
        <div class="svg-container"><svg viewBox="0 0 500 250" width="500" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #4682b4; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #4682b4; stroke-width: 2.5; fill: none; stroke-dasharray: 6,4; stroke-linecap: round; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #4682b4; }
        .dot { fill: #4682b4; }
        .angle-arc { stroke: #4682B4; stroke-width: 2; fill: none; } /* SteelBlue color distinct from black lines */
    </style>

    <!-- Triangle ABC (Smaller) -->
    <!-- A(100, 50), B(60, 180), C(140, 180) -->
    <path d="M 100,50 L 60,180 L 140,180 Z" class="main-line"/>
    
    <!-- Triangle DEF (Larger) -->
    <!-- D(350, 20), E(250, 220), F(450, 220) -->
    <path d="M 350,20 L 250,220 L 450,220 Z" class="main-line"/>

    <!-- Points P and Q on DE and DF -->
    <!-- Line PQ (Dashed) -->
    <line x1="300" y1="120" x2="400" y2="120" class="dashed-line"/>
    
    <!-- Dots at P and Q -->
    <circle cx="300" cy="120" r="5" class="dot"/>
    <circle cx="400" cy="120" r="5" class="dot"/>

    <!-- Angle Arcs -->
    
    <!-- Angle B in ABC -->
    <!-- Vertex B(60, 180). Legs to A(100, 50) and C(140, 180). -->
    <!-- Vector BA: (40, -130). Vector BC: (80, 0). -->
    <!-- Arc start on BC: (75, 180). End on BA. -->
    <path d="M 75,180 A 15,15 0 0,0 66,168" class="angle-arc" stroke="#4682b4" fill="none"/>
    
    <!-- Angle C in ABC -->
    <!-- Vertex C(140, 180). Legs to A(100, 50) and B(60, 180). -->
    <!-- Vector CA: (-40, -130). Vector CB: (-80, 0). -->
    <!-- Arc start on CB: (125, 180). End on CA. -->
    <path d="M 125,180 A 15,15 0 0,0 134,168" class="angle-arc" stroke="#4682b4" fill="none"/>
    
    <!-- Angle P in DPQ -->
    <!-- Vertex P(300, 120). Legs PD, PQ. -->
    <path d="M 315,120 A 15,15 0 0,0 307,108" class="angle-arc" stroke="#4682b4" fill="none"/>
    
    <!-- Angle Q in DPQ -->
    <!-- Vertex Q(400, 120). Legs QD, QP. -->
    <path d="M 385,120 A 15,15 0 0,0 393,108" class="angle-arc" stroke="#4682b4" fill="none"/>
    
    <!-- Angle E in DEF -->
    <!-- Vertex E(250, 220). -->
    <path d="M 270,220 A 20,20 0 0,0 258,204" class="angle-arc" stroke="#4682b4" fill="none"/>

    <!-- Angle F in DEF -->
    <!-- Vertex F(450, 220). -->
    <path d="M 430,220 A 20,20 0 0,0 442,204" class="angle-arc" stroke="#4682b4" fill="none"/>

    <!-- Labels -->
    <text x="100" y="40" class="text" text-anchor="middle" fill="#4682b4">A</text>
    <text x="50" y="200" class="text" text-anchor="end" fill="#4682b4">B</text>
    <text x="150" y="200" class="text" text-anchor="start" fill="#4682b4">C</text>
    
    <text x="350" y="15" class="text" text-anchor="middle" fill="#4682b4">D</text>
    <text x="240" y="240" class="text" text-anchor="end" fill="#4682b4">E</text>
    <text x="460" y="240" class="text" text-anchor="start" fill="#4682b4">F</text>
    
    <text x="290" y="125" class="text" text-anchor="end" fill="#4682b4">P</text>
    <text x="410" y="125" class="text" text-anchor="start" fill="#4682b4">Q</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If in two triangles, sides of one triangle are proportional to (i.e., in the same ratio of )
            the sides of the other triangle, then their corresponding angles are equal and hence the two triangles are
            similar.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Two triangles ABC and DEF such that \\(\\frac{AB}{DE}\\) = \\(\\frac{AC}{DF}\\) = \\(\\frac{BC}{EF}\\).</div>

        <div class="sub-header">Proof:</div>
        <div class="step">We cut DP = AB and DQ = AC. Join PQ.</div>
        <div class="step">Then \\(\\frac{DP}{DE}\\) = \\(\\frac{DQ}{DF}\\)</div>
        <div class="step">So PQ || EF <span class="reason">(Converse of BPT)</span></div>
        <div class="step">So ∠P = ∠E and ∠Q = ∠F.</div>
        <div class="step">Thus ∆DPQ ~ ∆DEF <span class="reason">(AAA)</span></div>
        <div class="step">Therefore: \\(\\frac{DP}{DE}\\) = \\(\\frac{PQ}{EF}\\)</div>
        <div class="step">But given \\(\\frac{AB}{DE}\\) = \\(\\frac{BC}{EF}\\)</div>
        <div class="step">Since DP = AB, we get PQ = BC.</div>
        <div class="step">So ∆ABC ≅ ∆DPQ <span class="reason">(SSS Congruence)</span></div>
        <div class="step">So ∠A = ∠D, ∠B = ∠E, ∠C = ∠F.</div>
        <div class="step">Thus, triangles are similar.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="theorem-title">Theorem 6.5: SAS Similarity Criterion</div>
        <div class="svg-container"><svg viewBox="0 0 500 250" width="500" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        .main-line { stroke: #4682b4; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .dashed-line { stroke: #4682b4; stroke-width: 2.5; fill: none; stroke-dasharray: 6,4; stroke-linecap: round; }
        .text { font-family: "Times New Roman", serif; font-size: 20px; font-weight: bold; fill: #4682b4; }
        .dot { fill: #4682b4; }
        .angle-arc { stroke: #4682B4; stroke-width: 2; fill: none; } /* SteelBlue */
    </style>

    <!-- Triangle ABC (Smaller) -->
    <!-- A(100, 50), B(60, 180), C(140, 180) -->
    <path d="M 100,50 L 60,180 L 140,180 Z" class="main-line"/>
    
    <!-- Triangle DEF (Larger) -->
    <!-- D(350, 20), E(250, 220), F(450, 220) -->
    <path d="M 350,20 L 250,220 L 450,220 Z" class="main-line"/>

    <!-- Points P and Q on DE and DF -->
    <!-- Line PQ (Dashed) -->
    <line x1="300" y1="120" x2="400" y2="120" class="dashed-line"/>
    
    <!-- Dots at P and Q -->
    <circle cx="300" cy="120" r="5" class="dot"/>
    <circle cx="400" cy="120" r="5" class="dot"/>

    <!-- Angle Arcs -->
    
    <!-- Angle A in ABC -->
    <!-- Vertex A(100, 50). Legs to B(60, 180) and C(140, 180). -->
    <!-- Draw a simple arc near A -->
    <path d="M 94,70 A 20,20 0 0,0 106,70" class="angle-arc" stroke="#4682b4" fill="none"/>
    
    <!-- Angle D in DEF -->
    <!-- Vertex D(350, 20). Legs to E(250, 220) and F(450, 220). -->
    <path d="M 340,45 A 25,25 0 0,0 360,45" class="angle-arc" stroke="#4682b4" fill="none"/>

    <!-- Labels -->
    <text x="100" y="40" class="text" text-anchor="middle" fill="#4682b4">A</text>
    <text x="50" y="200" class="text" text-anchor="end" fill="#4682b4">B</text>
    <text x="150" y="200" class="text" text-anchor="start" fill="#4682b4">C</text>
    
    <text x="350" y="15" class="text" text-anchor="middle" fill="#4682b4">D</text>
    <text x="240" y="240" class="text" text-anchor="end" fill="#4682b4">E</text>
    <text x="460" y="240" class="text" text-anchor="start" fill="#4682b4">F</text>
    
    <text x="290" y="125" class="text" text-anchor="end" fill="#4682b4">P</text>
    <text x="410" y="125" class="text" text-anchor="start" fill="#4682b4">Q</text>





</svg></div>
        <div class="sub-header">Statement:</div>
        <div class="step">If one angle of a triangle is equal to one angle of the other triangle and the sides including
            these angles are proportional, then the two triangles are similar.</div>

        <div class="sub-header">Given:</div>
        <div class="step">Two triangles ABC and DEF such that \\(\\frac{AB}{DE}\\) = \\(\\frac{AC}{DF}\\) and ∠A = ∠D.</div>

        <div class="sub-header">Proof:</div>
        <div class="step">Cut DP = AB and DQ = AC. Join PQ.</div>
        <div class="step">Then \\(\\frac{DP}{DE}\\) = \\(\\frac{DQ}{DF}\\) ⇒ PQ || EF.</div>
        <div class="step">So ∠P = ∠E and ∠Q = ∠F.</div>
        <div class="step">So ∆DPQ ~ ∆DEF.</div>
        <div class="step">Also ∆ABC ≅ ∆DPQ <span class="reason">(SAS Congruence, as ∠A=∠D, AB=DP, AC=DQ).</span></div>
        <div class="step">So ∆ABC ~ ∆DEF.</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

</body>

</html>`
  }
};
