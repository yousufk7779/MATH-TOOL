import { ChapterContent } from "../types";

export const mathCh7: ChapterContent = {
  id: "ch7",
  number: 7,
  title: "Coordinate Geometry",
  introduction: "Coordinate geometry acts as an analytical bridge linking algebraic equations to geometry by plotting points, lines, and curves on a 2D plane.",
  definitions: [
  {
    "term": "<div class='content-text'>Origin (0,0)",
    "description": "The intersection of axes.</div>"
  },
  {
    "term": "<div class='content-text'>Abscissa",
    "description": "The x-coordinate.</div>"
  },
  {
    "term": "<div class='content-text'>Ordinate",
    "description": "The y-coordinate.</div>"
  },
  {
    "term": "<div class='content-text'>Collinear Points",
    "description": "Three or more points lying on a single straight line.</div>"
  }
],
  keyPoints: [
  "<div class='content-text'>The Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²].</div>",
  "<div class='content-text'>The Section Formula: Finding the coordinates of a point dividing a line segment in an m:n ratio internally.</div>"
],
  formulas: [],
  crux: [
  "<div class='content-text'>Using coordinates, we can accurately prove geometrical theorem without visually drawing the shape, simply relying on numbers and formulas.</div>"
],
  summary: [
  "<div class='content-text'>Plotting maps, GPS tracking, and digital drawing heavily rely on coordinate geometry to calculate spatial distances and section proportions.</div>",
  "<div class='content-text'>Carefully read and understand every problem statement before jumping into the solution.</div>",
  "<div class='content-text'>A strong grasp of the core concepts is the key to solving complex problems easily.</div>",
  "<div class='content-text'>Make a habit of practicing the solved examples to get familiar with standard solution formats.</div>"
],
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 7.1", questions: [] },
    { id: "exercise2", name: "Exercise 7.2", questions: [] }
  ],
  theorems: [],
  mcqs: [
  {
    "id": "mcq1",
    "question": "<span style=\"font-weight: normal;\">The distance of the point P(2, 3) from the x-axis is</span>",
    "options": [
      "(A) 2",
      "(B) 3",
      "(C) 1",
      "(D) 5"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq2",
    "question": "<span style=\"font-weight: normal;\">The distance between the points A(0, 6) and B(0, -2) is</span>",
    "options": [
      "(A) 6",
      "(B) 8",
      "(C) 4",
      "(D) 2"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq3",
    "question": "<span style=\"font-weight: normal;\">The distance of the point P(-6, 8) from the origin is</span>",
    "options": [
      "(A) 8",
      "(B) 2âˆš7",
      "(C) 10",
      "(D) 6"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq4",
    "question": "<span style=\"font-weight: normal;\">The distance between the points (0, 5) and (-5, 0) is</span>",
    "options": [
      "(A) 5",
      "(B) 5âˆš2",
      "(C) 2âˆš5",
      "(D) 10"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq5",
    "question": "<span style=\"font-weight: normal;\">If the distance between the points (2, -2) and (-1, x) is 5, one of the values of x is</span>",
    "options": [
      "(A) -2",
      "(B) 2",
      "(C) -1",
      "(D) 1"
    ],
    "correctAnswer": "B"
  },
  {
    "id": "mcq6",
    "question": "<span style=\"font-weight: normal;\">The mid-point of the line segment joining the points A(-2, 8) and B(-6, -4) is</span>",
    "options": [
      "(A) (-4, -6)",
      "(B) (2, 6)",
      "(C) (-4, 2)",
      "(D) (4, 2)"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq7",
    "question": "<span style=\"font-weight: normal;\">If the points A(1, 2), O(0, 0) and C(a, b) are collinear, then</span>",
    "options": [
      "(A) a = b",
      "(B) a = 2b",
      "(C) 2a = b",
      "(D) a = -b"
    ],
    "correctAnswer": "C"
  },
  {
    "id": "mcq8",
    "question": "<span style=\"font-weight: normal;\">The point which divides the line segment joining the points (7, -6) and (3, 4) in ratio 1 : 2 internally lies in the</span>",
    "options": [
      "(A) I quadrant",
      "(B) II quadrant",
      "(C) III quadrant",
      "(D) IV quadrant"
    ],
    "correctAnswer": "D"
  },
  {
    "id": "mcq9",
    "question": "<span style=\"font-weight: normal;\">The coordinates of the point which is equidistant from the three vertices of the âˆ† AOB as shown in the Fig. is</span>",
    "options": [
      "(A) (x, y)",
      "(B) (y, x)",
      "(C) (x/2, y/2)",
      "(D) (y/2, x/2)"
    ],
    "correctAnswer": "A"
  },
  {
    "id": "mcq10",
    "question": "<span style=\"font-weight: normal;\">A circle drawn with origin as the centre passes through (13/2, 0). The point which does not lie in the interior of the circle is</span>",
    "options": [
      "(A) (-3/4, 1)",
      "(B) (2, 7/3)",
      "(C) (5, -1/2)",
      "(D) (-6, 5/2)"
    ],
    "correctAnswer": "D"
  }
],
  isHtmlView: true,
  htmlExercises: {
    examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coordinate Geometry - Examples</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
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
  .formula-box { background: rgba(255, 152, 0, 0.1) !important; border-left: 4px solid #FFA726 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFA726 !important; }
  .question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .sub-question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
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
    margin: 25px auto !important;
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
    max-height: 280px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #FFA726 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">Example 1. Do the points (3, 2), (-2, -3) and (2, 3) form a triangle? If so, name the type
            of triangle formed.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="155" cy="75" r="3" fill="#FFA726"/><text x="155" y="65" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A(1,5)</text><circle cx="160" cy="85" r="3" fill="#FFA726"/><text x="160" y="75" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B(2,3)</text><circle cx="140" cy="155" r="3" fill="#FFA726"/><text x="140" y="145" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">C(-2,-11)</text><line x1="155" y1="75" x2="160" y2="85" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="160" y1="85" x2="140" y2="155" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(3, 2)\\), \\(Q(-2, -3)\\) and \\(R(2, 3)\\).</div>
        <div class="step">\\(PQ = \\sqrt{(-2-3)^2 + (-3-2)^2} = \\sqrt{(-5)^2 + (-5)^2} = \\sqrt{50} \\approx 7.07\\)</div>
        <div class="step">\\(QR = \\sqrt{(2-(-2))^2 + (3-(-3))^2} = \\sqrt{4^2 + 6^2} = \\sqrt{16+36} = \\sqrt{52} \\approx
            7.21\\)</div>
        <div class="step">\\(PR = \\sqrt{(2-3)^2 + (3-2)^2} = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2} \\approx 1.41\\)</div>
        <div class="step">Since sums of any two sides > third, they form a triangle.</div>
        <div class="step">Also \\(PQ^2 + PR^2 = 50 + 2 = 52 = QR^2\\).</div>
        <div class="final-answer">Yes, they form a Right-Angled Triangle.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. Show that the points (1, 7), (4, 2), (-1, -1) and (-4, 4) form a square.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="140" y1="120" x2="160" y2="100" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="140" cy="120" r="3" fill="#FFA726"/><line x1="160" y1="100" x2="140" y2="80" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="160" cy="100" r="3" fill="#FFA726"/><line x1="140" y1="80" x2="120" y2="100" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="140" cy="80" r="3" fill="#FFA726"/><line x1="120" y1="100" x2="140" y2="120" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="120" cy="100" r="3" fill="#FFA726"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(1, 7), B(4, 2), C(-1, -1), D(-4, 4)\\).</div>
        <div class="step">\\(AB = \\sqrt{(4-1)^2 + (2-7)^2} = \\sqrt{9+25} = \\sqrt{34}\\)</div>
        <div class="step">\\(BC = \\sqrt{(-1-4)^2 + (-1-2)^2} = \\sqrt{25+9} = \\sqrt{34}\\)</div>
        <div class="step">\\(CD = \\sqrt{(-4-(-1))^2 + (4-(-1))^2} = \\sqrt{9+25} = \\sqrt{34}\\)</div>
        <div class="step">\\(DA = \\sqrt{(1-(-4))^2 + (7-4)^2} = \\sqrt{25+9} = \\sqrt{34}\\)</div>
        <div class="step">Diagonals: \\(AC = \\sqrt{(-1-1)^2 + (-1-7)^2} = \\sqrt{4+64} = \\sqrt{68}\\)</div>
        <div class="step">\\(BD = \\sqrt{(-4-4)^2 + (4-2)^2} = \\sqrt{64+4} = \\sqrt{68}\\)</div>
        <div class="final-answer">Since sides are equal and diagonals are equal, it forms a square.</div>
    </div>






    <div class="content-box">
        <div class="question">Example 3. Fig. 7.6 shows the arrangement of desks in a classroom. Ashima, Bharti and
            Camella are seated at A(3, 1), B(6, 4) and C(8, 6) respectively. Do you think they are seated in a line?
            Give reasons for your answer.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#03a9f4"/>
    </marker>
  </defs>
  
  <!-- Points A(3,1), B(6,4), C(8,6). Scale 30. Origin bottom-left offset. -->
  <line x1="50" y1="250" x2="350" y2="250" stroke="#aaa" stroke-width="1"/>
  <line x1="50" y1="250" x2="50" y2="20" stroke="#aaa" stroke-width="1"/>
  
  <!-- A(90+3*30=180, 250-1*30=220) ? No, let's just map relative. -->
  <!-- A(3,1) -> 100, 200 -->
  <!-- B(6,4) -> 190, 110 -->
  <!-- C(8,6) -> 250, 50 -->
  
  <line x1="100" y1="200" x2="250" y2="50" stroke="#03a9f4" stroke-width="2"/>
  
  <circle cx="100" cy="200" r="5" fill="#e91e63"/>
  <text x="90" y="220" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">A(3,1)</text>

  <circle cx="190" cy="110" r="5" fill="#e91e63"/>
  <text x="200" y="110" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">B(6,4)</text>
  
  <circle cx="250" cy="50" r="5" fill="#e91e63"/>
  <text x="260" y="50" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">C(8,6)</text>


<style> svg text, svg tspan { fill: #e91e63 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Using Distance Formula:</div>
        <div class="step">\\(AB = \\sqrt{(6-3)^2 + (4-1)^2} = \\sqrt{3^2 + 3^2} = \\sqrt{9+9} = \\sqrt{18} = 3\\sqrt{2}\\)
        </div>
        <div class="step">\\(BC = \\sqrt{(8-6)^2 + (6-4)^2} = \\sqrt{2^2 + 2^2} = \\sqrt{4+4} = \\sqrt{8} = 2\\sqrt{2}\\)
        </div>
        <div class="step">\\(AC = \\sqrt{(8-3)^2 + (6-1)^2} = \\sqrt{5^2 + 5^2} = \\sqrt{25+25} = \\sqrt{50} = 5\\sqrt{2}\\)
        </div>
        <div class="step">Since \\(AB + BC = 3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2} = AC\\), the points A, B and C are
            collinear.</div>
        <div class="final-answer">Yes, they are seated in a line.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 4. Find a relation between x and y such that the point (x, y) is equidistant from
            the
            points (7, 1) and (3, 5).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#03a9f4"/>
    </marker>
  </defs>
  
  <!-- P(x,y) equidistant from (7,1) and (3,5) -->
  <line x1="280" y1="260" x2="240" y2="140" stroke="#03a9f4" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="120" y1="100" x2="240" y2="140" stroke="#03a9f4" stroke-width="2" stroke-dasharray="5,5"/>
  
  <circle cx="280" cy="260" r="5" fill="#03a9f4"/>
  <circle cx="120" cy="100" r="5" fill="#03a9f4"/>
  <circle cx="240" cy="140" r="5" fill="#e91e63"/>

  <text x="290" y="260" font-family="serif" font-weight="bold" font-size="18" fill="#03a9f4">A(7,1)</text>
  <text x="80" y="90" font-family="serif" font-weight="bold" font-size="18" fill="#03a9f4">B(3,5)</text>
  <text x="245" y="130" font-family="serif" font-weight="bold" font-size="18" fill="#03a9f4">P(x,y)</text>
  
  <text x="180" y="280" font-size="16" fill="#03a9f4">PA = PB</text>

<style> svg text, svg tspan { fill: #03a9f4 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(x, y)\\) be equidistant from \\(A(7, 1)\\) and \\(B(3, 5)\\).</div>
        <div class="step">We are given \\(AP = BP\\), so \\(AP^2 = BP^2\\).</div>
        <div class="step">\\((x - 7)^2 + (y - 1)^2 = (x - 3)^2 + (y - 5)^2\\)</div>
        <div class="step">\\(x^2 - 14x + 49 + y^2 - 2y + 1 = x^2 - 6x + 9 + y^2 - 10y + 25\\)</div>
        <div class="step">\\(x^2 - 14x + y^2 - 2y + 50 = x^2 - 6x + y^2 - 10y + 34\\)</div>
        <div class="step">\\(-14x + 6x - 2y + 10y + 50 - 34 = 0\\)</div>
        <div class="step">\\(-8x + 8y + 16 = 0\\)</div>
        <div class="step">Dividing by -8: \\(x - y - 2 = 0\\) or \\(x - y = 2\\).</div>
        <div class="final-answer">Relation is \\(x - y = 2\\).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 5. Find a point on the y-axis which is equidistant from the points A(6, 5) and
            B(-4,
            3).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#03a9f4"/>
    </marker>
  </defs>
  
  <line x1="200" y1="0" x2="200" y2="400" stroke="#aaa" stroke-width="2"/>
  <line x1="0" y1="200" x2="400" y2="200" stroke="#aaa" stroke-width="2"/>
  
  <!-- A(6,5), B(-4,3) -->
  <line x1="320" y1="100" x2="200" y2="20" stroke="#03a9f4" stroke-width="2"/>
  <line x1="120" y1="140" x2="200" y2="20" stroke="#03a9f4" stroke-width="2"/>
  
  <circle cx="320" cy="100" r="5" fill="#03a9f4"/>
  <circle cx="120" cy="140" r="5" fill="#03a9f4"/>
  <circle cx="200" cy="20" r="5" fill="#e91e63"/>

  <text x="330" y="100" font-family="serif" font-weight="bold" font-size="16" fill="#03a9f4">A(6,5)</text>
  <text x="60" y="140" font-family="serif" font-weight="bold" font-size="16" fill="#03a9f4">B(-4,3)</text>
  <text x="210" y="30" font-family="serif" font-weight="bold" font-size="16" fill="#03a9f4">P(0,y)</text>

<style> svg text, svg tspan { fill: #03a9f4 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">We know that a point on the y-axis is of the form \\((0, y)\\).</div>
        <div class="step">Let the point \\(P(0, y)\\) be equidistant from \\(A(6, 5)\\) and \\(B(-4, 3)\\).</div>
        <div class="step">\\(PA^2 = PB^2\\)</div>
        <div class="step">\\((0 - 6)^2 + (y - 5)^2 = (0 - (-4))^2 + (y - 3)^2\\)</div>
        <div class="step">\\(36 + y^2 - 10y + 25 = 16 + y^2 - 6y + 9\\)</div>
        <div class="step">\\(61 - 10y = 25 - 6y\\)</div>
        <div class="step">\\(-10y + 6y = 25 - 61\\)</div>
        <div class="step">\\(-4y = -36 \\Rightarrow y = 9\\)</div>
        <div class="final-answer">The required point is (0, 9).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 6. Find the coordinates of the point which divides the line segment joining the
            points
            (4, -3) and (8, 5) in the ratio 3 : 1 internally.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- (4,-3) to (8,5) ratio 3:1 -->
  <!-- A(4, -3) -> 100, 250 -->
  <!-- B(8, 5) -> 300, 50 -->
  <!-- P -> 3/4 way -->
  
  <line x1="100" y1="250" x2="300" y2="50" stroke="#03a9f4" stroke-width="3"/>
  
  <circle cx="100" cy="250" r="6" fill="#666"/>
  <circle cx="300" cy="50" r="6" fill="#666"/>
  <circle cx="250" cy="100" r="6" fill="#e91e63"/>
  
  <text x="80" y="270" font-family="serif" font-weight="bold" font-size="18" fill="#666">A(4,-3)</text>
  <text x="310" y="50" font-family="serif" font-weight="bold" font-size="18" fill="#666">B(8,5)</text>
  <text x="260" y="90" font-family="serif" font-weight="bold" font-size="18" fill="#666">P(7,3)</text>
  
  <text x="180" y="190" font-size="14" fill="#666">3</text>
  <text x="280" y="80" font-size="14" fill="#666">1</text>

<style> svg text, svg tspan { fill: #666 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(x, y)\\) divide AB in 3:1.</div>
        <div class="step">\\(x = \\frac{3(8) + 1(4)}{3+1} = \\frac{24+4}{4} = \\frac{28}{4} = 7\\)</div>
        <div class="step">\\(y = \\frac{3(5) + 1(-3)}{3+1} = \\frac{15-3}{4} = \\frac{12}{4} = 3\\)</div>
        <div class="final-answer">Point P is (7, 3).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 7. In what ratio does the point (-4, 6) divide the line segment joining the points
            A(-6, 10) and B(3, -8)?</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <!-- A(-6, 10), B(3, -8). P(-4, 6) -->
  <line x1="50" y1="50" x2="350" y2="250" stroke="#03a9f4" stroke-width="3"/>
  
  <circle cx="50" cy="50" r="6" fill="#666"/>
  <circle cx="350" cy="250" r="6" fill="#666"/>
  <circle cx="116" cy="94" r="6" fill="#e91e63"/>
  
  <text x="40" y="40" font-family="serif" font-weight="bold" font-size="18" fill="#666">A(-6,10)</text>
  <text x="340" y="280" font-family="serif" font-weight="bold" font-size="18" fill="#666">B(3,-8)</text>
  <text x="120" y="80" font-family="serif" font-weight="bold" font-size="18" fill="#666">P(-4,6)</text>
  <text x="100" y="60" font-size="14" fill="#666">m1</text>
  <text x="200" y="120" font-size="14" fill="#666">m2</text>

<style> svg text, svg tspan { fill: #666 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let the ratio be \\(m_1 : m_2\\). Using Section Formula for x-coordinate:</div>
        <div class="step">\\(-4 = \\frac{m_1(3) + m_2(-6)}{m_1 + m_2}\\)</div>
        <div class="step">\\(-4(m_1 + m_2) = 3m_1 - 6m_2\\)</div>
        <div class="step">\\(-4m_1 - 4m_2 = 3m_1 - 6m_2\\)</div>
        <div class="step">\\(2m_2 = 7m_1 \\Rightarrow \\frac{m_1}{m_2} = \\frac{2}{7}\\)</div>
        <div class="step">Verification for y-coordinate: \\(\\frac{2(-8) + 7(10)}{2+7} = \\frac{-16 + 70}{9} = \\frac{54}{9}
            =
            6\\). (Matches).</div>
        <div class="final-answer">Ratio is 2:7.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 8. Find the coordinates of the points of trisection (i.e., points dividing in
            three
            equal parts) of the line segment joining the points A(2, -2) and B(-7, 4).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <line x1="50" y1="100" x2="350" y2="100" stroke="#03a9f4" stroke-width="3"/>
  
  <circle cx="50" cy="100" r="6" fill="#e91e63"/>
  <circle cx="150" cy="100" r="6" fill="#e91e63"/>
  <circle cx="250" cy="100" r="6" fill="#e91e63"/>
  <circle cx="350" cy="100" r="6" fill="#e91e63"/>
  
  <text x="40" y="80" font-family="serif" font-weight="bold" font-size="18" fill="#e91e63">A</text>
  <text x="350" y="80" font-family="serif" font-weight="bold" font-size="18" fill="#e91e63">B</text>
  <text x="145" y="130" font-family="serif" font-weight="bold" font-size="18" fill="#e91e63">P</text>
  <text x="245" y="130" font-family="serif" font-weight="bold" font-size="18" fill="#e91e63">Q</text>
  
  <text x="100" y="90" font-size="12" fill="#e91e63">1</text>
  <text x="200" y="90" font-size="12" fill="#e91e63">1</text>
  <text x="300" y="90" font-size="12" fill="#e91e63">1</text>


<style> svg text, svg tspan { fill: #e91e63 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let P and Q be the points of trisection of AB.</div>
        <div class="step">Case 1: P divides AB in ratio 1:2.</div>
        <div class="step">\\(P = \\left( \\frac{1(-7) + 2(2)}{1+2}, \\frac{1(4) + 2(-2)}{1+2} \\right)\\)</div>
        <div class="step">\\(P = \\left( \\frac{-7+4}{3}, \\frac{4-4}{3} \\right) = \\left( \\frac{-3}{3}, 0 \\right) = (-1,
            0)\\)
        </div>
        <div class="step">Case 2: Q divides AB in ratio 2:1.</div>
        <div class="step">\\(Q = \\left( \\frac{2(-7) + 1(2)}{2+1}, \\frac{2(4) + 1(-2)}{2+1} \\right)\\)</div>
        <div class="step">\\(Q = \\left( \\frac{-14+2}{3}, \\frac{8-2}{3} \\right) = \\left( \\frac{-12}{3}, \\frac{6}{3}
            \\right) =
            (-4, 2)\\)</div>
        <div class="final-answer">Points are (-1, 0) and (-4, 2).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 9. Find the ratio in which the y-axis divides the line segment joining the points
            (5,
            -6) and (-1, -4). Also find the point of intersection.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <line x1="200" y1="0" x2="200" y2="400" stroke="#e91e63" stroke-width="2"/> <!-- Y Axis -->
  <line x1="0" y1="200" x2="400" y2="200" stroke="#e91e63" stroke-width="1" stroke-dasharray="4"/> <!-- X Axis -->

  <line x1="300" y1="320" x2="180" y2="280" stroke="#03a9f4" stroke-width="3"/>
  
  <circle cx="300" cy="320" r="5" fill="#e91e63"/>
  <text x="310" y="320" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">A(5,-6)</text>
  
  <circle cx="180" cy="280" r="5" fill="#e91e63"/>
  <text x="110" y="280" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">B(-1,-4)</text>
  
  <circle cx="200" cy="287" r="5" fill="#e91e63"/>
  <text x="210" y="280" font-family="serif" font-weight="bold" font-size="16" fill="#e91e63">P</text>

<style> svg text, svg tspan { fill: #e91e63 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let the ratio be \\(k : 1\\). The point on y-axis is \\((0, y)\\).</div>
        <div class="step">x-coordinate = \\(0\\).</div>
        <div class="step">\\(\\frac{k(-1) + 1(5)}{k+1} = 0\\)</div>
        <div class="step">\\(-k + 5 = 0 \\Rightarrow k = 5\\). So ratio is 5:1.</div>
        <div class="step">Now finding y-coordinate:</div>
        <div class="step">\\(y = \\frac{5(-4) + 1(-6)}{5+1} = \\frac{-20 - 6}{6} = \\frac{-26}{6} = \\frac{-13}{3}\\)</div>
        <div class="final-answer">Ratio is 5:1 and Point is (0, -13/3).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 10. If the points A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a
            parallelogram, taken in order, find the value of p.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <polygon points="100,250 250,250 300,100 150,100" stroke="#03a9f4" stroke-width="3" fill="none"/>
  
  <text x="80" y="260" font-family="serif" font-weight="bold" font-size="18" fill="#aaa">A(6,1)</text>
  <text x="250" y="265" font-family="serif" font-weight="bold" font-size="18" fill="#aaa">B(8,2)</text>
  <text x="310" y="100" font-family="serif" font-weight="bold" font-size="18" fill="#aaa">C(9,4)</text>
  <text x="120" y="90" font-family="serif" font-weight="bold" font-size="18" fill="#aaa">D(p,3)</text>
  
  <!-- Diagonals -->
  <line x1="100" y1="250" x2="300" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="4"/>
  <line x1="250" y1="250" x2="150" y2="100" stroke="#aaa" stroke-width="1" stroke-dasharray="4"/>
  
  <circle cx="200" cy="175" r="4" fill="#e91e63"/>
  <text x="210" y="160" font-family="serif" font-weight="bold" font-size="16" fill="#aaa">Midpoint</text>

<style> svg text, svg tspan { fill: #aaa !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Diagonals of a parallelogram bisect each other. So midpoint of AC = midpoint of BD.</div>
        <div class="step">Midpoint of AC = \\(\\left( \\frac{6+9}{2}, \\frac{1+4}{2} \\right) = (7.5, 2.5)\\)</div>
        <div class="step">Midpoint of BD = \\(\\left( \\frac{8+p}{2}, \\frac{2+3}{2} \\right) = \\left( \\frac{8+p}{2}, 2.5
            \\right)\\)</div>
        <div class="step">Equating x-coordinates:</div>
        <div class="step">\\(\\frac{8+p}{2} = 7.5 \\Rightarrow 8+p = 15 \\Rightarrow p = 7\\).</div>
        <div class="final-answer">Value of p is 7.</div>
    </div>

</html>`,
    exercise1: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coordinate Geometry - Exercise 7.1</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
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
  .formula-box { background: rgba(255, 152, 0, 0.1) !important; border-left: 4px solid #FFA726 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFA726 !important; }
  .question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .sub-question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
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
    margin: 25px auto !important;
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
    max-height: 280px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #FFA726 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">Q1. Find the distance between the following pairs of points:</div>

        <div class="sub-question">(i) (2, 3), (4, 1)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="170" y1="70" x2="190" y2="90" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="170" cy="70" r="3" fill="#FFA726"/><text x="170" y="60" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(2,3)</text><circle cx="190" cy="90" r="3" fill="#FFA726"/><text x="190" y="80" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(4,1)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(2, 3)\\) and \\(Q(4, 1)\\).</div>
        <div class="step">Distance \\(PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)</div>
        <div class="step">\\(= \\sqrt{(4 - 2)^2 + (1 - 3)^2}\\)</div>
        <div class="step">\\(= \\sqrt{2^2 + (-2)^2}\\)</div>
        <div class="step">\\(= \\sqrt{4 + 4}\\)</div>
        <div class="step">\\(= \\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}\\)</div>
        <div class="final-answer">Distance = \\(2\\sqrt{2}\\) units.</div>

        <div class="sub-question">(ii) (-5, 7), (-1, 3)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="100" y1="30" x2="140" y2="70" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="100" cy="30" r="3" fill="#FFA726"/><text x="100" y="20" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-5,7)</text><circle cx="140" cy="70" r="3" fill="#FFA726"/><text x="140" y="60" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-1,3)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(-5, 7)\\) and \\(Q(-1, 3)\\).</div>
        <div class="step">Distance \\(PQ = \\sqrt{(-1 - (-5))^2 + (3 - 7)^2}\\)</div>
        <div class="step">\\(= \\sqrt{4^2 + (-4)^2}\\)</div>
        <div class="step">\\(= \\sqrt{16 + 16}\\)</div>
        <div class="step">\\(= \\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}\\)</div>
        <div class="final-answer">Distance = \\(4\\sqrt{2}\\) units.</div>

        <div class="sub-question">(iii) (a, b), (-a, -b)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="180" y1="80" x2="120" y2="120" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="180" cy="80" r="3" fill="#FFA726"/><text x="180" y="70" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(a,b)</text><circle cx="120" cy="120" r="3" fill="#FFA726"/><text x="120" y="110" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-a,-b)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(a, b)\\) and \\(Q(-a, -b)\\).</div>
        <div class="step">Distance \\(PQ = \\sqrt{(-a - a)^2 + (-b - b)^2}\\)</div>
        <div class="step">\\(= \\sqrt{(-2a)^2 + (-2b)^2}\\)</div>
        <div class="step">\\(= \\sqrt{4a^2 + 4b^2}\\)</div>
        <div class="step">\\(= \\sqrt{4(a^2 + b^2)} = 2\\sqrt{a^2 + b^2}\\)</div>
        <div class="final-answer">Distance = \\(2\\sqrt{a^2 + b^2}\\) units.</div>
    </div>

    <div class="content-box">
        <div class="question">Q2. Find the distance between the points (0, 0) and (36, 15). Can you now find the distance
            between the two towns A and B discussed in Section 7.2?</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="180" x2="280" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="20" y1="180" x2="20" y2="20" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="20" y1="180" x2="280" y2="80" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="20" cy="180" r="3" fill="#FFA726"/><text x="20" y="170" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(0,0)</text><circle cx="280" cy="80" r="3" fill="#FFA726"/><text x="280" y="70" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(36,15)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(0, 0)\\) and \\(B(36, 15)\\).</div>
        <div class="step">Distance \\(AB = \\sqrt{(36 - 0)^2 + (15 - 0)^2}\\)</div>
        <div class="step">\\(= \\sqrt{36^2 + 15^2}\\)</div>
        <div class="step">\\(= \\sqrt{1296 + 225}\\)</div>
        <div class="step">\\(= \\sqrt{1521} = 39\\)</div>
        <div class="final-answer">The distance is 39 units.</div>
        <div class="step">Yes, the distance between the two towns A and B is 39 km.</div>
    </div>

    <div class="content-box">
        <div class="question">Q3. Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="155" cy="75" r="3" fill="#FFA726"/><text x="155" y="65" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A(1,5)</text><circle cx="160" cy="85" r="3" fill="#FFA726"/><text x="160" y="75" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B(2,3)</text><circle cx="140" cy="155" r="3" fill="#FFA726"/><text x="140" y="145" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">C(-2,-11)</text><line x1="155" y1="75" x2="160" y2="85" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="160" y1="85" x2="140" y2="155" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(1, 5)\\), \\(B(2, 3)\\), \\(C(-2, -11)\\).</div>
        <div class="step">\\(AB = \\sqrt{(2-1)^2 + (3-5)^2} = \\sqrt{1^2 + (-2)^2} = \\sqrt{1 + 4} = \\sqrt{5} \\approx 2.23\\)
        </div>
        <div class="step">\\(BC = \\sqrt{(-2-2)^2 + (-11-3)^2} = \\sqrt{(-4)^2 + (-14)^2} = \\sqrt{16 + 196} = \\sqrt{212}
            \\approx 14.56\\)</div>
        <div class="step">\\(AC = \\sqrt{(-2-1)^2 + (-11-5)^2} = \\sqrt{(-3)^2 + (-16)^2} = \\sqrt{9 + 256} = \\sqrt{265}
            \\approx 16.27\\)</div>
        <div class="step">Check if sum of two smaller equals largest:</div>
        <div class="step">\\(AB + BC = 2.23 + 14.56 = 16.79\\)</div>
        <div class="step">This is not equal to \\(AC\\) (16.27).</div>
        <div class="final-answer">Therefore, the points are NOT collinear.</div>
    </div>

    <div class="content-box">
        <div class="question">Q4. Check whether (5, -2), (6, 4) and (7, -2) are the vertices of an isosceles triangle.
        </div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="200" y1="120" x2="210" y2="60" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="210" y1="60" x2="220" y2="120" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="220" y1="120" x2="200" y2="120" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="200" cy="120" r="3" fill="#FFA726"/><text x="200" y="110" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(5,-2)</text><circle cx="210" cy="60" r="3" fill="#FFA726"/><text x="210" y="50" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(6,4)</text><circle cx="220" cy="120" r="3" fill="#FFA726"/><text x="220" y="110" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(7,-2)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(5, -2)\\), \\(B(6, 4)\\), \\(C(7, -2)\\).</div>
        <div class="step">\\(AB = \\sqrt{(6-5)^2 + (4-(-2))^2} = \\sqrt{1^2 + 6^2} = \\sqrt{1 + 36} = \\sqrt{37}\\)</div>
        <div class="step">\\(BC = \\sqrt{(7-6)^2 + (-2-4)^2} = \\sqrt{1^2 + (-6)^2} = \\sqrt{1 + 36} = \\sqrt{37}\\)</div>
        <div class="step">\\(AC = \\sqrt{(7-5)^2 + (-2-(-2))^2} = \\sqrt{2^2 + 0^2} = \\sqrt{4} = 2\\)</div>
        <div class="step">Since \\(AB = BC = \\sqrt{37}\\), two sides are equal.</div>
        <div class="final-answer">Yes, they are vertices of an isosceles triangle.</div>
    </div>

    <div class="content-box">
        <div class="question">Q5. In a classroom, 4 friends are seated at points A(3, 4), B(6, 7), C(9, 4) and D(6, 1).
            Champa and Chameli walk into the class and after observing for a few minutes Champa asks Chameli, “Don’t you
            think ABCD is a square?” Chameli disagrees. Using distance formula, find which of them is correct.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="180" y1="60" x2="210" y2="30" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="210" y1="30" x2="240" y2="60" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="240" y1="60" x2="210" y2="90" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="210" y1="90" x2="180" y2="60" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="180" cy="60" r="3" fill="#FFA726"/><text x="180" y="50" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="210" cy="30" r="3" fill="#FFA726"/><text x="210" y="20" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="240" cy="60" r="3" fill="#FFA726"/><text x="240" y="50" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">C</text><circle cx="210" cy="90" r="3" fill="#FFA726"/><text x="210" y="80" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">D</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">\\(A(3, 4)\\), \\(B(6, 7)\\), \\(C(9, 4)\\), \\(D(6, 1)\\).</div>
        <div class="step">\\(AB = \\sqrt{(6-3)^2 + (7-4)^2} = \\sqrt{3^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}\\)</div>
        <div class="step">\\(BC = \\sqrt{(9-6)^2 + (4-7)^2} = \\sqrt{3^2 + (-3)^2} = \\sqrt{18} = 3\\sqrt{2}\\)</div>
        <div class="step">\\(CD = \\sqrt{(6-9)^2 + (1-4)^2} = \\sqrt{(-3)^2 + (-3)^2} = \\sqrt{18} = 3\\sqrt{2}\\)</div>
        <div class="step">\\(DA = \\sqrt{(3-6)^2 + (4-1)^2} = \\sqrt{(-3)^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}\\)</div>
        <div class="step">All sides are equal. Now check diagonals.</div>
        <div class="step">\\(AC = \\sqrt{(9-3)^2 + (4-4)^2} = \\sqrt{6^2 + 0^2} = \\sqrt{36} = 6\\)</div>
        <div class="step">\\(BD = \\sqrt{(6-6)^2 + (1-7)^2} = \\sqrt{0^2 + (-6)^2} = \\sqrt{36} = 6\\)</div>
        <div class="step">Diagonals are also equal. Since all sides and both diagonals are equal, ABCD is a square.
        </div>
        <div class="final-answer">Conclusion: Champa is correct.</div>
    </div>

    <div class="content-box">
        <div class="question">Q6. Name the type of quadrilateral formed, if any, by the following points, and give
            reasons for your answer:</div>

        <div class="sub-question">(i) (-1, -2), (1, 0), (-1, 2), (-3, 0)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="140" y1="120" x2="160" y2="100" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="140" cy="120" r="3" fill="#FFA726"/><line x1="160" y1="100" x2="140" y2="80" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="160" cy="100" r="3" fill="#FFA726"/><line x1="140" y1="80" x2="120" y2="100" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="140" cy="80" r="3" fill="#FFA726"/><line x1="120" y1="100" x2="140" y2="120" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="120" cy="100" r="3" fill="#FFA726"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(-1,-2), B(1,0), C(-1,2), D(-3,0)\\).</div>
        <div class="step">\\(AB = \\sqrt{(1-(-1))^2 + (0-(-2))^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\)</div>
        <div class="step">\\(BC = \\sqrt{(-1-1)^2 + (2-0)^2} = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\)</div>
        <div class="step">\\(CD = \\sqrt{(-3-(-1))^2 + (0-2)^2} = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}\\)</div>
        <div class="step">\\(DA = \\sqrt{(-1-(-3))^2 + (-2-0)^2} = \\sqrt{2^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}\\)</div>
        <div class="step">All sides are equal. Now checking diagonals:</div>
        <div class="step">\\(AC = \\sqrt{(-1-(-1))^2 + (2-(-2))^2} = \\sqrt{0^2 + 4^2} = 4\\)</div>
        <div class="step">\\(BD = \\sqrt{(-3-1)^2 + (0-0)^2} = \\sqrt{(-4)^2 + 0^2} = 4\\)</div>
        <div class="step">Diagonals are equal.</div>
        <div class="final-answer">Thus, the quadrilateral is a square.</div>

        <div class="sub-question">(ii) (-3, 5), (3, 1), (0, 3), (-1, -4)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="120" cy="50" r="3" fill="#FFA726"/><text x="120" y="40" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P1</text><circle cx="180" cy="90" r="3" fill="#FFA726"/><text x="180" y="80" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P2</text><circle cx="150" cy="70" r="3" fill="#FFA726"/><text x="150" y="60" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P3</text><circle cx="140" cy="140" r="3" fill="#FFA726"/><text x="140" y="130" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P4</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(-3,5), B(3,1), C(0,3), D(-1,-4)\\).</div>
        <div class="step">\\(AB = \\sqrt{(3-(-3))^2 + (1-5)^2} = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52} =
            2\\sqrt{13}\\)</div>
        <div class="step">\\(BC = \\sqrt{(0-3)^2 + (3-1)^2} = \\sqrt{(-3)^2 + 2^2} = \\sqrt{9 + 4} = \\sqrt{13}\\)</div>
        <div class="step">\\(AC = \\sqrt{(0-(-3))^2 + (3-5)^2} = \\sqrt{3^2 + (-2)^2} = \\sqrt{9 + 4} = \\sqrt{13}\\)</div>
        <div class="step">Here, \\(AC + BC = \\sqrt{13} + \\sqrt{13} = 2\\sqrt{13} = AB\\).</div>
        <div class="step">Since sums of two distances equals the third, the points are collinear.</div>
        <div class="final-answer">Therefore, no quadrilateral is formed.</div>

        <div class="sub-question">(iii) (4, 5), (7, 6), (4, 3), (1, 2)</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="190" y1="50" x2="220" y2="40" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="190" cy="50" r="3" fill="#FFA726"/><line x1="220" y1="40" x2="190" y2="70" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="220" cy="40" r="3" fill="#FFA726"/><line x1="190" y1="70" x2="160" y2="80" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="190" cy="70" r="3" fill="#FFA726"/><line x1="160" y1="80" x2="190" y2="50" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="160" cy="80" r="3" fill="#FFA726"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(4,5), B(7,6), C(4,3), D(1,2)\\).</div>
        <div class="step">\\(AB = \\sqrt{10}\\), \\(BC = 3\\sqrt{2}\\), \\(CD = \\sqrt{10}\\), \\(DA = 3\\sqrt{2}\\).</div>
        <div class="step">Opposite sides are equal. It is a parallelogram or rectangle.</div>
        <div class="step">Check diagonals:</div>
        <div class="step">\\(AC = 2\\), \\(BD = \\sqrt{52}\\).</div>
        <div class="step">Diagonals are unequal.</div>
        <div class="final-answer">Thus, it is a Parallelogram.</div>
    </div>

    <div class="content-box">
        <div class="question">Q7. Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="170" cy="150" r="3" fill="#FFA726"/><text x="170" y="140" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(2,-5)</text><circle cx="130" cy="10" r="3" fill="#FFA726"/><text x="130" y="0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-2,9)</text><circle cx="80" cy="100" r="3" fill="rgba(255,255,255,0.4)"/><text x="80" y="90" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P(x,0)</text><line x1="170" y1="150" x2="80" y2="100" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="130" y1="10" x2="80" y2="100" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let point be \\(P(x, 0)\\). \\(A(2, -5)\\), \\(B(-2, 9)\\).</div>
        <div class="step">\\(PA = PB \\Rightarrow PA^2 = PB^2\\)</div>
        <div class="step">\\((x - 2)^2 + (0 - (-5))^2 = (x - (-2))^2 + (0 - 9)^2\\)</div>
        <div class="step">\\((x - 2)^2 + 25 = (x + 2)^2 + 81\\)</div>
        <div class="step">\\(x^2 - 4x + 4 + 25 = x^2 + 4x + 4 + 81\\)</div>
        <div class="step">\\(-4x - 4x = 81 - 25\\)</div>
        <div class="step">\\(-8x = 56 \\Rightarrow x = -7\\)</div>
        <div class="final-answer">Therefore, the point is (-7, 0).</div>
    </div>

    <div class="content-box">
        <div class="question">Q8. Find the values of y for which the distance between the points P(2, -3) and Q(10, y) is
            10 units.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="170" cy="130" r="3" fill="#FFA726"/><text x="170" y="120" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P(2,-3)</text><line x1="250" y1="0" x2="250" y2="200" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><circle cx="250" cy="70" r="3" fill="#FFA726"/><text x="250" y="60" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">Q(10,3)</text><circle cx="250" cy="190" r="3" fill="#FFA726"/><text x="250" y="180" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">Q(10,-9)</text><text x="260" y="100" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x=10</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(PQ = 10 \\Rightarrow PQ^2 = 100\\).</div>
        <div class="step">\\((10 - 2)^2 + (y - (-3))^2 = 100\\)</div>
        <div class="step">\\(8^2 + (y + 3)^2 = 100\\)</div>
        <div class="step">\\(64 + (y + 3)^2 = 100 \\Rightarrow (y + 3)^2 = 36\\)</div>
        <div class="step">\\(y + 3 = \\pm 6\\)</div>
        <div class="step">Case 1: \\(y + 3 = 6 \\Rightarrow y = 3\\).</div>
        <div class="step">Case 2: \\(y + 3 = -6 \\Rightarrow y = -9\\).</div>
        <div class="final-answer">The possible values of y are 3 or -9.</div>
    </div>

    <div class="content-box">
        <div class="question">Q9. If Q(0, 1) is equidistant from P(5, -3) and R(x, 6), find the values of x. Also find
            the distances QR and PR.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="150" cy="90" r="3" fill="#FFA726"/><text x="150" y="80" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">Q(0,1)</text><circle cx="200" cy="130" r="3" fill="#FFA726"/><text x="200" y="120" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P</text><circle cx="190" cy="40" r="3" fill="#FFA726"/><text x="190" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">R1(4,6)</text><circle cx="110" cy="40" r="3" fill="#FFA726"/><text x="110" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">R2(-4,6)</text><line x1="200" y1="130" x2="150" y2="90" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="150" y1="90" x2="190" y2="40" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="150" y1="90" x2="110" y2="40" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">\\(QP = QR \\Rightarrow QP^2 = QR^2\\).</div>
        <div class="step">\\((5 - 0)^2 + (-3 - 1)^2 = (x - 0)^2 + (6 - 1)^2\\)</div>
        <div class="step">\\(25 + 16 = x^2 + 25 \\Rightarrow x^2 = 16 \\Rightarrow x = \\pm 4\\).</div>
        <div class="step">Case 1 (\\(x=4\\)): \\(QR = \\sqrt{41}\\), \\(PR = \\sqrt{(4-5)^2 + (6+3)^2} = \\sqrt{1 + 81} =
            \\sqrt{82}\\).</div>
        <div class="step">Case 2 (\\(x=-4\\)): \\(QR = \\sqrt{41}\\), \\(PR = \\sqrt{(-4-5)^2 + (6+3)^2} = \\sqrt{81 + 81} =
            \\sqrt{162} = 9\\sqrt{2}\\).</div>
        <div class="final-answer">\\(x = \\pm 4\\); \\(QR = \\sqrt{41}\\), \\(PR = \\sqrt{82}\\) or \\(9\\sqrt{2}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">Q10. Find a relation between x and y such that the point (x, y) is equidistant from the
            point (3, 6) and (-3, 4).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="100" cy="50" r="3" fill="#FFA726"/><text x="100" y="40" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(3,6)</text><circle cx="200" cy="150" r="3" fill="#FFA726"/><text x="200" y="140" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-3,4)</text><line x1="150" y1="0" x2="150" y2="200" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><text x="160" y="20" font-family="Arial" font-size="14" fill="#FFA726" text-anchor="middle">Locus line</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(x, y)\\), \\(A(3, 6)\\), \\(B(-3, 4)\\). \\(PA^2 = PB^2\\).</div>
        <div class="step">\\((x - 3)^2 + (y - 6)^2 = (x + 3)^2 + (y - 4)^2\\)</div>
        <div class="step">\\(x^2 - 6x + 9 + y^2 - 12y + 36 = x^2 + 6x + 9 + y^2 - 8y + 16\\)</div>
        <div class="step">\\(-6x - 12y + 45 = 6x - 8y + 25\\)</div>
        <div class="step">\\(-12x - 4y + 20 = 0\\)</div>
        <div class="step">\\(3x + y - 5 = 0\\)</div>
        <div class="final-answer">The relation is \\(3x + y - 5 = 0\\).</div>
    </div>

</body>

</html>`,
    exercise2: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coordinate Geometry - Exercise 7.2</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
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
  .formula-box { background: rgba(255, 152, 0, 0.1) !important; border-left: 4px solid #FFA726 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFA726 !important; }
  .question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .sub-question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
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
    margin: 25px auto !important;
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
    max-height: 280px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #FFA726 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
        <div class="question">Q1. Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the
            ratio 2 : 3.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="140" y1="30" x2="190" y2="130" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="140" cy="30" r="3" fill="#FFA726"/><text x="140" y="20" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(-1,7)</text><circle cx="190" cy="130" r="3" fill="#FFA726"/><text x="190" y="120" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">(4,-3)</text><circle cx="160" cy="70" r="3" fill="rgba(255,255,255,0.4)"/><text x="160" y="60" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P(1,3)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(P(x, y)\\) divide AB in 2:3. \\(A(-1, 7)\\), \\(B(4, -3)\\).</div>
        <div class="step">Coordinates \\(x = \\frac{m_1x_2 + m_2x_1}{m_1 + m_2} = \\frac{2(4) + 3(-1)}{2 + 3}\\)</div>
        <div class="step">\\(x = \\frac{8 - 3}{5} = \\frac{5}{5} = 1\\)</div>
        <div class="step">\\(y = \\frac{m_1y_2 + m_2y_1}{m_1 + m_2} = \\frac{2(-3) + 3(7)}{2 + 3}\\)</div>
        <div class="step">\\(y = \\frac{-6 + 21}{5} = \\frac{15}{5} = 3\\)</div>
        <div class="final-answer">Point P is (1, 3).</div>
    </div>

    <div class="content-box">
        <div class="question">Q2. Find the coordinates of the points of trisection of the line segment joining (4, -1)
            and (-2, -3).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="190" y1="110" x2="130" y2="130" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="190" cy="110" r="3" fill="#FFA726"/><text x="190" y="100" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="130" cy="130" r="3" fill="#FFA726"/><text x="130" y="120" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="170" cy="116.6" r="3" fill="#FFA726"/><text x="170" y="106.6" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P</text><circle cx="150" cy="123.3" r="3" fill="#FFA726"/><text x="150" y="113.3" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">Q</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let A(4, -1) and B(-2, -3). Points P, Q trisect AB.</div>
        <div class="step">P divides AB in 1:2.</div>
        <div class="step">\\(x_P = \\frac{1(-2) + 2(4)}{3} = \\frac{-2 + 8}{3} = 2\\)</div>
        <div class="step">\\(y_P = \\frac{1(-3) + 2(-1)}{3} = \\frac{-3 - 2}{3} = -\\frac{5}{3}\\)</div>
        <div class="step">Q divides AB in 2:1.</div>
        <div class="step">\\(x_Q = \\frac{2(-2) + 1(4)}{3} = \\frac{-4 + 4}{3} = 0\\)</div>
        <div class="step">\\(y_Q = \\frac{2(-3) + 1(-1)}{3} = \\frac{-6 - 1}{3} = -\\frac{7}{3}\\)</div>
        <div class="final-answer">P(2, -5/3), Q(0, -7/3).</div>
    </div>

    <div class="content-box">
        <div class="question">Q3. To conduct Sports Day activities, in your rectangular shaped school ground ABCD, lines
            have been drawn with chalk powder at a distance of 1m each. 100 flower pots have been placed at a distance
            of 1m from each other along AD, as shown in Fig. 7.12. Niharika runs 1/4th the distance AD on the 2nd line
            and posts a green flag. Preet runs 1/5th the distance AD on the eighth line and posts a red flag. What is
            the distance between both the flags? If Rashmi has to post a blue flag exactly halfway between the line
            segment joining the two flags, where should she post her flag?</div>
        <div class="svg-container"><svg viewBox="0 0 350 350" width="350" height="350" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <style>
        svg .axis { stroke: #999; stroke-width: 2; }
        svg .grid-line { stroke: #ccc; stroke-width: 1; }
        svg .text { font-family: Arial, sans-serif; font-size: 12px; fill: #999; }
        .flag-pole { stroke: #999; stroke-width: 2; }
        .green-flag { fill: #4CAF50; stroke: none; }
        .red-flag { fill: #F44336; stroke: none; }
        .blue-flag { fill: #2196F3; stroke: none; }
        .flag-path { fill-opacity: 0.8; }
    </style>

    <!-- Definitions for Axes -->
    <!-- X axis: 0 to 10. Mapped to 30 to 330 (30px per unit) -->
    <!-- Y axis: 0 to 100. Mapped to 320 to 20 (3px per unit) -->
    
    <!-- Grid and Lines (Vertical lines for runners) -->
    <line x1="30" y1="320" x2="330" y2="320" class="axis"/> <!-- X-axis -->
    <line x1="30" y1="320" x2="30" y2="20" class="axis"/>  <!-- Y-axis -->
    
    <!-- Vertical Lines 1 to 10 -->
    <line x1="60" y1="320" x2="60" y2="20" class="grid-line"/> <!-- 1 -->
    <line x1="90" y1="320" x2="90" y2="20" class="grid-line"/> <!-- 2 (Niharika) -->
    <line x1="120" y1="320" x2="120" y2="20" class="grid-line"/> <!-- 3 -->
    <line x1="150" y1="320" x2="150" y2="20" class="grid-line"/> <!-- 4 -->
    <line x1="180" y1="320" x2="180" y2="20" class="grid-line"/> <!-- 5 (Rashmi) -->
    <line x1="210" y1="320" x2="210" y2="20" class="grid-line"/> <!-- 6 -->
    <line x1="240" y1="320" x2="240" y2="20" class="grid-line"/> <!-- 7 -->
    <line x1="270" y1="320" x2="270" y2="20" class="grid-line"/> <!-- 8 (Preet) -->
    <line x1="300" y1="320" x2="300" y2="20" class="grid-line"/> <!-- 9 -->
    <line x1="330" y1="320" x2="330" y2="20" class="grid-line"/> <!-- 10 -->

    <!-- Coordinate Mapping -->
    <!-- G(2, 25): x=90, y=320 - (25*3) = 320 - 75 = 245 -->
    <!-- R(8, 20): x=270, y=320 - (20*3) = 320 - 60 = 260 -->
    <!-- B(5, 22.5): x=180, y=320 - (22.5*3) = 320 - 67.5 = 252.5 -->
    
    <!-- Connect G and R -->
    <line x1="90" y1="245" x2="270" y2="260" stroke="#999" stroke-dasharray="5,5" stroke-width="2"/>

    <!-- Green Flag at G -->
    <line x1="90" y1="320" x2="90" y2="245" class="flag-pole"/>
    <path d="M 90,245 L 110,235 L 90,225 Z" class="green-flag flag-path"/>
    <text x="75" y="240" class="text" fill="#999">G(2, 25)</text>

    <!-- Red Flag at R -->
    <line x1="270" y1="320" x2="270" y2="260" class="flag-pole"/>
    <path d="M 270,260 L 290,250 L 270,240 Z" class="red-flag flag-path"/>
    <text x="275" y="275" class="text" fill="#999">R(8, 20)</text>

    <!-- Blue Flag at B -->
    <line x1="180" y1="320" x2="180" y2="252.5" class="flag-pole"/>
    <path d="M 180,252.5 L 200,242.5 L 180,232.5 Z" class="blue-flag flag-path"/>
    <text x="185" y="230" class="text" fill="#999">B(5, 22.5)</text>

    <!-- Flower Pots Label on Y-axis -->
    <text x="10" y="20" class="text" transform="rotate(-90 10,20)" fill="#999">Flower Pots (AD)</text>
    <!-- Lines Label on X-axis -->
    <text x="150" y="340" class="text" fill="#999">Lines (AB)</text>
    
    <!-- X-axis Numbers -->
    <text x="90" y="335" class="text" text-anchor="middle" fill="#999">2</text>
    <text x="180" y="335" class="text" text-anchor="middle" fill="#999">5</text>
    <text x="270" y="335" class="text" text-anchor="middle" fill="#999">8</text>


<style> svg text, svg tspan { fill: #999 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Given: AD = 100m.</div>
        <div class="step"><strong>Niharika's Green Flag (G):</strong> On 2nd line, \\(x_1 = 2\\). Distance = \\(\\frac{1}{4}
            \\times 100 = 25\\)m. So, \\(y_1 = 25\\). G(2, 25).</div>
        <div class="step"><strong>Preet's Red Flag (R):</strong> On 8th line, \\(x_2 = 8\\). Distance = \\(\\frac{1}{5}
            \\times 100 = 20\\)m. So, \\(y_2 = 20\\). R(8, 20).</div>
        <div class="step"><strong>Distance between flags (GR):</strong></div>
        <div class="step">\\(GR = \\sqrt{(8-2)^2 + (20-25)^2} = \\sqrt{6^2 + (-5)^2} = \\sqrt{36 + 25} = \\sqrt{61}\\)m.</div>
        <div class="step"><strong>Rashmi's Blue Flag (B)</strong> is halfway:</div>
        <div class="step">\\(x = \\frac{2+8}{2} = 5\\). \\(y = \\frac{25+20}{2} = 22.5\\).</div>
        <div class="final-answer">Distance is \\(\\sqrt{61}\\)m. Blue flag at 5th line, 22.5m distance.</div>
    </div>

    <div class="content-box">
        <div class="question">Q4. Determine the ratio in which the line segment joining the points (-3, 10) and (6, -8)
            is divided by (-1, 6).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="120" y1="0" x2="210" y2="180" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="120" cy="0" r="3" fill="#FFA726"/><text x="120" y="-10" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A(-3,10)</text><circle cx="210" cy="180" r="3" fill="#FFA726"/><text x="210" y="170" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B(6,-8)</text><circle cx="140" cy="40" r="3" fill="rgba(255,255,255,0.4)"/><text x="140" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P(-1,6)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let ratio be \\(k:1\\). P(-1, 6).</div>
        <div class="step">\\(x = \\frac{k(6) + 1(-3)}{k + 1} = -1 \\Rightarrow 6k - 3 = -k - 1\\)</div>
        <div class="step">\\(7k = 2 \\Rightarrow k = \\frac{2}{7}\\)</div>
        <div class="step">Verify with y: \\(\\frac{2/7(-8) + 10}{2/7 + 1} = \\frac{-16/7 + 70/7}{9/7} = \\frac{54}{9} = 6\\)
            (True).</div>
        <div class="final-answer">Ratio is 2:7.</div>
    </div>

    <div class="content-box">
        <div class="question">Q5. Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by
            the x-axis. Also find the coordinates of the point of division.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="160" y1="150" x2="110" y2="50" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="160" cy="150" r="3" fill="#FFA726"/><text x="160" y="140" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="110" cy="50" r="3" fill="#FFA726"/><text x="110" y="40" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="135.0" cy="100" r="3" fill="rgba(255,255,255,0.4)"/><text x="135.0" y="90" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P(x,0)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let ratio be \\(k:1\\). Point on x-axis: \\(P(x, 0)\\).</div>
        <div class="step">\\(y = \\frac{k(5) + 1(-5)}{k + 1} = 0 \\Rightarrow 5k - 5 = 0 \\Rightarrow k = 1\\).</div>
        <div class="step">Ratio is 1:1.</div>
        <div class="step">\\(x = \\frac{1(-4) + 1(1)}{2} = -\\frac{3}{2}\\).</div>
        <div class="final-answer">Ratio 1:1. Point (-3/2, 0).</div>
    </div>

    <div class="content-box">
        <div class="question">Q6. If (1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram taken in
            order, find x and y.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="gray" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="gray" text-anchor="middle">y</text><line x1="100" y1="150" x2="200" y2="150" stroke="gray" stroke-width="2" fill="none"/><line x1="200" y1="150" x2="220" y2="100" stroke="gray" stroke-width="2" fill="none"/><line x1="220" y1="100" x2="120" y2="100" stroke="gray" stroke-width="2" fill="none"/><line x1="120" y1="100" x2="100" y2="150" stroke="gray" stroke-width="2" fill="none"/><line x1="100" y1="150" x2="220" y2="100" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="200" y1="150" x2="120" y2="100" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><text x="160" y="125" font-family="Arial" font-size="14" fill="gray" text-anchor="middle">Midpoint M</text>
<style> svg text, svg tspan { fill: gray !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Diagonals bisect each other. Midpoint AC = Midpoint BD.</div>
        <div class="step">\\(\\left(\\frac{1+x}{2}, \\frac{2+6}{2}\\right) = \\left(\\frac{4+3}{2}, \\frac{y+5}{2}\\right)\\)
        </div>
        <div class="step">\\(\\frac{1+x}{2} = \\frac{7}{2} \\Rightarrow 1 + x = 7 \\Rightarrow x = 6\\).</div>
        <div class="step">\\(\\frac{8}{2} = \\frac{y+5}{2} \\Rightarrow 8 = y + 5 \\Rightarrow y = 3\\).</div>
        <div class="final-answer">x = 6, y = 3.</div>
    </div>

    <div class="content-box">
        <div class="question">Q7. Find the coordinates of a point A, where AB is the diameter of a circle whose centre is
            (2, -3) and B is (1, 4).</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><circle cx="170" cy="130" r="60" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="180" y1="200" x2="160" y2="60" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="170" cy="130" r="3" fill="#FFA726"/><text x="170" y="120" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">C(2,-3)</text><circle cx="160" cy="60" r="3" fill="#FFA726"/><text x="160" y="50" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B(1,4)</text><circle cx="180" cy="200" r="3" fill="#FFA726"/><text x="180" y="190" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A(x,y)</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Let \\(A(x, y)\\). Centre \\(C(2, -3)\\) is midpoint of AB.</div>
        <div class="step">\\(\\frac{x+1}{2} = 2 \\Rightarrow x + 1 = 4 \\Rightarrow x = 3\\).</div>
        <div class="step">\\(\\frac{y+4}{2} = -3 \\Rightarrow y + 4 = -6 \\Rightarrow y = -10\\).</div>
        <div class="final-answer">A is (3, -10).</div>
    </div>

    <div class="content-box">
        <div class="question">Q8. If A and B are (-2, -2) and (2, -4), respectively, find the coordinates of P such that
            AP = 3/7 AB and P lies on the line segment AB.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="130" y1="120" x2="170" y2="140" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="130" cy="120" r="3" fill="#FFA726"/><text x="130" y="110" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="170" cy="140" r="3" fill="#FFA726"/><text x="170" y="130" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="147.2" cy="128.5" r="3" fill="#FFA726"/><text x="147.2" y="118.5" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">\\(AP = \\frac{3}{7}AB \\Rightarrow AP:PB = 3:4\\).</div>
        <div class="step">\\(x = \\frac{3(2) + 4(-2)}{7} = \\frac{6-8}{7} = -\\frac{2}{7}\\).</div>
        <div class="step">\\(y = \\frac{3(-4) + 4(-2)}{7} = \\frac{-12-8}{7} = -\\frac{20}{7}\\).</div>
        <div class="final-answer">P(-2/7, -20/7).</div>
    </div>

    <div class="content-box">
        <div class="question">Q9. Find the coordinates of the points which divide the line segment joining A(-2, 2) and
            B(2, 8) into four equal parts.</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="130" y1="80" x2="170" y2="20" stroke="#FFA726" stroke-width="2" fill="none"/><circle cx="130" cy="80" r="3" fill="#FFA726"/><text x="130" y="70" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="170" cy="20" r="3" fill="#FFA726"/><text x="170" y="10" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="140" cy="65.0" r="3" fill="#FFA726"/><text x="140" y="55.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P1</text><circle cx="150" cy="50" r="3" fill="#FFA726"/><text x="150" y="40" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P2</text><circle cx="160" cy="35.0" r="3" fill="#FFA726"/><text x="160" y="25.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">P3</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">Midpoint Q of AB = \\((0, 5)\\).</div>
        <div class="step">Midpoint P of AQ = \\((-1, 3.5)\\) or \\((-1, \\frac{7}{2})\\).</div>
        <div class="step">Midpoint R of QB = \\((1, 6.5)\\) or \\((1, \\frac{13}{2})\\).</div>
        <div class="final-answer">The points are (-1, 7/2), (0, 5), (1, 13/2).</div>
    </div>

    <div class="content-box">
        <div class="question">Q10. Find the area of a rhombus if its vertices are (3, 0), (4, 5), (-1, 4) and (-2, -1)
            taken in order. [Hint : Area of a rhombus = 1/2 (product of its diagonals)]</div>
        <div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200" ><line x1="20" y1="100.0" x2="280" y2="100.0" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><line x1="150.0" y1="20" x2="150.0" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/><text x="290" y="105.0" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">x</text><text x="155.0" y="30" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">y</text><line x1="180" y1="100" x2="190" y2="50" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="190" y1="50" x2="140" y2="60" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="140" y1="60" x2="130" y2="110" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="130" y1="110" x2="180" y2="100" stroke="#FFA726" stroke-width="2" fill="none"/><line x1="180" y1="100" x2="140" y2="60" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><line x1="190" y1="50" x2="130" y2="110" stroke="gray" stroke-width="1" stroke-dasharray="4" fill="none"/><circle cx="180" cy="100" r="3" fill="#FFA726"/><text x="180" y="90" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">A</text><circle cx="190" cy="50" r="3" fill="#FFA726"/><text x="190" y="40" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">B</text><circle cx="140" cy="60" r="3" fill="#FFA726"/><text x="140" y="50" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">C</text><circle cx="130" cy="110" r="3" fill="#FFA726"/><text x="130" y="100" font-family="Arial" font-size="12" fill="#FFA726" text-anchor="middle">D</text>
<style> svg text, svg tspan { fill: #FFA726 !important; } </style>




</svg></div>
        <div class="solution-header">Solution:</div>
        <div class="step">\\(AC = \\sqrt{(-1-3)^2 + (4-0)^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}\\).</div>
        <div class="step">\\(BD = \\sqrt{(-2-4)^2 + (-1-5)^2} = \\sqrt{36+36} = \\sqrt{72} = 6\\sqrt{2}\\).</div>
        <div class="step">Area = \\(\\frac{1}{2} \\times 4\\sqrt{2} \\times 6\\sqrt{2} = \\frac{1}{2} \\times 24 \\times 2 =
            24\\).</div>
        <div class="final-answer">Area = 24 square units.</div>
    </div>

</body>

</html>`
  }
};
