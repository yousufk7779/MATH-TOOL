import { ChapterContent } from "../chapterContent";

export const mathCh8: ChapterContent = {
    id: "ch8",
    number: 8,
    title: "Introduction to Trigonometry",
    introduction: "Loading Chapter 8...",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    exercises: [
        { id: "exercise1", name: "Exercise 8.1", questions: [] },
        { id: "exercise2", name: "Exercise 8.2", questions: [] },
        { id: "exercise3", name: "Exercise 8.3", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">1. The value of 9 sec² A - 9 tan² A is:</span>",
            "options": [
                "(A) 1",
                "(B) 9",
                "(C) 8",
                "(D) 0"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">2. The value of (1 + tan θ + sec θ)(1 + cot θ - cosec θ) is:</span>",
            "options": [
                "(A) 0",
                "(B) 1",
                "(C) 2",
                "(D) -1"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">3. (sec A + tan A)(1 - sin A) is equal to:</span>",
            "options": [
                "(A) sec A",
                "(B) sin A",
                "(C) cosec A",
                "(D) cos A"
            ],
            "correctAnswer": "D"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">4. The value of (1 + tan² A) / (1 + cot² A) is:</span>",
            "options": [
                "(A) sec² A",
                "(B) -1",
                "(C) cot² A",
                "(D) tan² A"
            ],
            "correctAnswer": "D"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">5. If sin A = 3/4, then cos A is:</span>",
            "options": [
                "(A) 4/3",
                "(B) √7 / 4",
                "(C) 3 / √7",
                "(D) √7 / 3"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">6. If 4 tan A = 3, then the value of (4 sin θ - cos θ) / (4 sin θ + cos θ) is:</span>",
            "options": [
                "(A) 2/3",
                "(B) 1/3",
                "(C) 1/2",
                "(D) 3/4"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">7. The value of sin 60° cos 30° + sin 30° cos 60° is:</span>",
            "options": [
                "(A) 0",
                "(B) 1",
                "(C) 2",
                "(D) √3"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">8. If tan A = √3, then the value of sec A is:</span>",
            "options": [
                "(A) 2",
                "(B) √3 / 2",
                "(C) 1/2",
                "(D) 1 / √3"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">9. The value of tan 45° is:</span>",
            "options": [
                "(A) 0",
                "(B) 1",
                "(C) √3",
                "(D) 1 / √3"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">10. If cos 9α = sin α and 9α < 90°, then the value of tan 5α is:</span>",
            "options": [
                "(A) 1 / √3",
                "(B) √3",
                "(C) 1",
                "(D) 0"
            ],
            "correctAnswer": "C"
        }
    ],
    summary: [],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Trigonometry - Overview</title>
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
            border-bottom: 2px solid #FF8A65;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #FF8A65;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
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

        .section-title {
            color: #FF8A65;
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF8A65 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF8A65 !important; }
  .question { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #FF8A65 !important; }
  .true-text { color: #FF8A65 !important; }
  .false-text { color: #FF8A65 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF8A65 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #FF8A65 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">The word 'trigonometry' is derived from the Greek words <em>'tri'</em>
            (meaning three), <em>'gon'</em> (meaning sides) and <em>'metron'</em> (meaning measure). In fact,
            trigonometry is the study of relationships between the sides and angles of a triangle.</div>
        <div class="step">In this chapter, we will study some ratios of the sides of a right triangle with respect to
            its acute angles, called trigonometric ratios of the angle. We will restrict our discussion
            to acute angles only.</div>
        <div class="step">Right-Angled Triangle: A triangle in which one angle is a right angle (90°).
            The side opposite to the right angle is called the Hypotenuse. The other two sides are
            often referred to as the Base (adjacent to the angle of interest) and the
            Perpendicular (opposite to the angle of interest).
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">2. Trigonometric Ratios</div>
        <div class="step">For a right-angled triangle ABC right angled at B, with respect to angle C (θ):</div>

        <div class="formula-box">
            sin θ = <span class="fraction"><span class="numerator">Perpendicular (P)</span><span
                    class="denominator">Hypotenuse (H)</span></span> = <span class="fraction"><span
                    class="numerator">Opposite Side</span><span class="denominator">Hypotenuse</span></span><br><br>
            cos θ = <span class="fraction"><span class="numerator">Base (B)</span><span
                    class="denominator">Hypotenuse (H)</span></span> = <span class="fraction"><span
                    class="numerator">Adjacent Side</span><span class="denominator">Hypotenuse</span></span><br><br>
            tan θ = <span class="fraction"><span class="numerator">Perpendicular (P)</span><span
                    class="denominator">Base (B)</span></span> = <span class="fraction"><span class="numerator">Opposite
                    Side</span><span class="denominator">Adjacent Side</span></span>
        </div>
        <div class="step">Reciprocals:</div>
        <div class="step">cosec θ = 1/sin θ (H/P)</div>
        <div class="step">sec θ = 1/cos θ (H/B)</div>
        <div class="step">cot θ = 1/tan θ (B/P)</div>

    </div>

    <div class="content-box">
        <div class="section-title">Key Points to Remember</div>
        <div class="step">1. The values of the trigonometric ratios of an angle do not vary with the lengths of the
            sides of the triangle, if the angle remains the same.</div>
        <div class="step">2. Since the hypotenuse is the longest side in a right triangle, the value of sin
                A or cos A is always less than 1 (or, in particular, equal to 1).</div>
        <div class="step">3. The symbol sin A is used as an abbreviation for 'the sine of the angle A'.
            sin A is not the product of 'sin' and A. 'sin' separated from A has no meaning.</div>
        <div class="step">4. Pythagoras Theorem: In a right-angled triangle, square of Hypotenuse = sum
            of squares of other two sides (\\(H^2 = P^2 + B^2\\)).</div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Trigonometric Ratios of Specific Angles</div>
        <div class="step">Standard values for 0°, 30°, 45°, 60°, and 90°:</div>

        <div class="formula-box">
            <table border="1" cellpadding="5" cellspacing="0"
                style="width:100%; border-collapse:collapse; text-align:center;">
                <tr>
                    <td>θ</td>
                    <td>0°</td>
                    <td>30°</td>
                    <td>45°</td>
                    <td>60°</td>
                    <td>90°</td>
                </tr>
                <tr>
                    <td>sin A</td>
                    <td>0</td>
                    <td>1/2</td>
                    <td>1/√2</td>
                    <td>√3/2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>cos A</td>
                    <td>1</td>
                    <td>√3/2</td>
                    <td>1/√2</td>
                    <td>1/2</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>tan A</td>
                    <td>0</td>
                    <td>1/√3</td>
                    <td>1</td>
                    <td>√3</td>
                    <td>Not Defined</td>
                </tr>
                <tr>
                    <td>cosec A</td>
                    <td>Not Defined</td>
                    <td>2</td>
                    <td>√2</td>
                    <td>2/√3</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>sec A</td>
                    <td>1</td>
                    <td>2/√3</td>
                    <td>√2</td>
                    <td>2</td>
                    <td>Not Defined</td>
                </tr>
                <tr>
                    <td>cot A</td>
                    <td>Not Defined</td>
                    <td>√3</td>
                    <td>1</td>
                    <td>1/√3</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Trigonometric Identities</div>
        <div class="step">An equation involving trigonometric ratios of an angle is called a trigonometric identity.
        </div>

        <div class="formula-box">
            Pythagorean Identities:<br>
            1. sin² A + cos² A = 1<br>
            2. 1 + tan² A = sec² A<br>
            3. 1 + cot² A = cosec² A<br><br>
            Complementary Angles:<br>
            sin (90° - A) = cos A<br>
            cos (90° - A) = sin A<br>
            tan (90° - A) = cot A<br>
            cot (90° - A) = tan A<br>
            sec (90° - A) = cosec A<br>
            cosec (90° - A) = sec A
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
    <title>Introduction to Trigonometry - Exercise 8.1</title>
    
    
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
            border-bottom: 2px solid #FF8A65;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #FF8A65;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
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
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: normal ;
            color: #444;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            display: block;
        }

        .final-answer {
            color: #FF8A65;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        .solution-header {
            color: #FF8A65;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        .formula {
            font-weight: normal ;
            color: #FF8A65;
            margin: 5px 0;
            display: inline-block;
        }

        .diagram-placeholder {
            float: right;
            border: 2px dashed #bbb;
            padding: 10px;
            margin: 0 0 10px 15px;
            background: #fff;
            color: #555;
            font-size: 0.9em;
            max-width: 280px;
            text-align: center;
        }

        img {
            float: right;
            margin-left: 20px;
            margin-bottom: 15px;
            max-width: 300px;
            width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 5px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {

            img,
            .diagram-placeholder {
                float: none;
                display: block;
                margin: 10px auto;
                max-width: 100%;
            }
        }

        .true-text {
            font-weight: normal ;
            color: #FF8A65;
            /* Green */
        }

        .false-text {
            font-weight: normal ;
            color: #FF8A65;
            /* Red */
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF8A65 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF8A65 !important; }
  .question { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #FF8A65 !important; }
  .true-text { color: #FF8A65 !important; }
  .false-text { color: #FF8A65 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF8A65 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #FF8A65 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. In ∆ABC, right-angled at B, AB = 24 cm, BC = 7 cm. Determine:</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIwMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjAwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSI3MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjEwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSIxMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4yNCBjbTwvdGV4dD4NCjx0ZXh0IHg9IjEyMCIgeT0iMjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj43IGNtPC90ZXh0Pg0KPC9zdmc+" alt="Right Triangle ABC">

        <div class="sub-question">(i) sin A, cos A</div>
        <div class="solution-header">Solution:</div>
        <div class="step">By Pythagoras Theorem: <span class="formula">\\(AC^2 = AB^2 + BC^2\\)</span></div>
        <div class="step">\\(AC^2 = (24)^2 + (7)^2 = 576 + 49 = 625\\)</div>
        <div class="step">\\(AC = \\sqrt{625} = 25 \\text{ cm}\\)</div>
        <div class="step">For angle A: Base (Adj) = AB = 24, Perpendicular (Opp) = BC = 7.</div>
        <div class="step">\\(\\sin A = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{7}{25}\\)</div>
        <div class="step">\\(\\cos A = \\frac{\\text{Adj}}{\\text{Hyp}} = \\frac{24}{25}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\sin A = \\frac{7}{25}, \\cos A = \\frac{24}{25}\\).
        </div>

        <div class="sub-question">(ii) sin C, cos C</div>
        <div class="solution-header">Solution:</div>
        <div class="step">For angle C: Base (Adj) = BC = 7, Perpendicular (Opp) = AB = 24.</div>
        <div class="step">\\(\\sin C = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{24}{25}\\)</div>
        <div class="step">\\(\\cos C = \\frac{\\text{Adj}}{\\text{Hyp}} = \\frac{7}{25}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\sin C = \\frac{24}{25}, \\cos C = \\frac{7}{25}\\).
        </div>
    </div>

    <div class="content-box">
        <div class="question">2. In Fig., find tan P – cot R.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPGxpbmUgeDE9IjEwMCIgeTE9IjI1MCIgeDI9IjI1MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSIxMDAiIHkxPSI1MCIgeDI9IjI1MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxwb2x5bGluZSBwb2ludHM9IjEwMCwyMzAgMTIwLDIzMCAxMjAsMjUwIiBzdHJva2U9IiMyRTdEMzIiIGZpbGw9Im5vbmUiLz4NCjx0ZXh0IHg9IjkwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+UDwvdGV4dD4NCjx0ZXh0IHg9IjkwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPlE8L3RleHQ+DQo8dGV4dCB4PSIyNjAiIHk9IjI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+UjwvdGV4dD4NCjx0ZXh0IHg9IjIwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPjEyIGNtPC90ZXh0Pg0KPHRleHQgeD0iMTYwIiB5PSIyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPjcgY208L3RleHQ+DQo8dGV4dCB4PSIxODAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+MTMgY208L3RleHQ+DQo8L3N2Zz4=" alt="Triangle PQR">
        <div class="solution-header">Solution:</div>
        <div class="step">In ∆PQR right-angled at Q:</div>
        <div class="step">Given \\(PQ = 12 \\text{ cm}, PR = 13 \\text{ cm}\\).</div>
        <div class="step">By Pythagoras Theorem: <span class="formula">\\(QR^2 = PR^2 - PQ^2\\)</span></div>
        <div class="step">\\(QR^2 = (13)^2 - (12)^2 = 169 - 144 = 25\\)</div>
        <div class="step">\\(QR = \\sqrt{25} = 5 \\text{ cm}\\)</div>
        <div class="step">\\(\\tan P = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{QR}{PQ} = \\frac{5}{12}\\)</div>
        <div class="step">\\(\\cot R = \\frac{\\text{Adj}}{\\text{Opp}} = \\frac{QR}{PQ} = \\frac{5}{12}\\)</div>
        <div class="step">\\(\\tan P - \\cot R = \\frac{5}{12} - \\frac{5}{12} = 0\\)</div>
        <div class="final-answer">Therefore, the required value is 0.</div>
    </div>

    <div class="content-box">
        <div class="question">3. If sin A = 3/4, calculate cos A and tan A.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIyMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjIwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSI3MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjMwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSI0MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4zazwvdGV4dD4NCjx0ZXh0IHg9IjE2MCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj40azwvdGV4dD4NCjwvc3ZnPg==" alt="Triangle for sin A">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(\\sin A = \\frac{3}{4}\\).</div>
        <div class="step">\\(\\sin A = \\frac{\\text{Perpendicular}}{\\text{Hypotenuse}}\\).</div>
        <div class="step">Let Perpendicular (BC) = 3k and Hypotenuse (AC) = 4k.</div>
        <div class="step">Using Pythagoras Theorem: <span class="formula">\\(AB^2 = AC^2 - BC^2\\)</span></div>
        <div class="step">\\(AB^2 = (4k)^2 - (3k)^2 = 16k^2 - 9k^2 = 7k^2\\)</div>
        <div class="step">\\(AB = \\sqrt{7k^2} = \\sqrt{7}k\\)</div>
        <div class="step">\\(\\cos A = \\frac{\\text{Base}}{\\text{Hypotenuse}} = \\frac{AB}{AC} = \\frac{\\sqrt{7}k}{4k} =
            \\frac{\\sqrt{7}}{4}\\)</div>
        <div class="step">\\(\\tan A = \\frac{\\text{Perpendicular}}{\\text{Base}} = \\frac{BC}{AB} = \\frac{3k}{\\sqrt{7}k} =
            \\frac{3}{\\sqrt{7}}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\cos A = \\frac{\\sqrt{7}}{4}, \\tan A =
            \\frac{3}{\\sqrt{7}}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">4. Given 15 cot A = 8, find sin A and sec A.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIyMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjIwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSI3MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjMwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSIyMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4xNWs8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+OGs8L3RleHQ+DQo8L3N2Zz4=" alt="Triangle for cot A">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(15 \\cot A = 8 \\Rightarrow \\cot A = \\frac{8}{15}\\).</div>
        <div class="step">\\(\\cot A = \\frac{\\text{Base}}{\\text{Perpendicular}}\\).</div>
        <div class="step">Let Base = 8k and Perpendicular = 15k.</div>
        <div class="step">By Pythagoras Theorem: <span class="formula">\\(\\text{Hyp}^2 = \\text{Base}^2 +
                \\text{Perp}^2\\)</span></div>
        <div class="step">\\(\\text{Hyp}^2 = (8k)^2 + (15k)^2\\)</div>
        <div class="step">\\(\\text{Hyp}^2 = 64k^2 + 225k^2 = 289k^2\\)</div>
        <div class="step">\\(\\text{Hyp} = \\sqrt{289k^2} = 17k\\)</div>
        <div class="step">\\(\\sin A = \\frac{\\text{Perpendicular}}{\\text{Hypotenuse}} = \\frac{15k}{17k} = \\frac{15}{17}\\)
        </div>
        <div class="step">\\(\\sec A = \\frac{\\text{Hypotenuse}}{\\text{Base}} = \\frac{17k}{8k} = \\frac{17}{8}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\sin A = \\frac{15}{17}, \\sec A = \\frac{17}{8}\\).
        </div>
    </div>

    <div class="content-box">
        <div class="question">5. Given sec θ = 13/12, calculate all other trigonometric ratios.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjI1MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjUwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSI2MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjYwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSIxNjAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+MTNrPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPjEyazwvdGV4dD4NCjx0ZXh0IHg9IjIxMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj7OuDwvdGV4dD4NCjwvc3ZnPg==" alt="Triangle for sec theta">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(\\sec \\theta = \\frac{13}{12}\\).</div>
        <div class="step">\\(\\sec \\theta = \\frac{\\text{Hypotenuse}}{\\text{Base}}\\).</div>
        <div class="step">Let Hypotenuse = 13k and Base = 12k.</div>
        <div class="step">By Pythagoras Theorem: <span class="formula">\\(\\text{Perp}^2 = \\text{Hyp}^2 -
                \\text{Base}^2\\)</span></div>
        <div class="step">\\(\\text{Perp}^2 = (13k)^2 - (12k)^2\\)</div>
        <div class="step">\\(\\text{Perp}^2 = 169k^2 - 144k^2 = 25k^2\\)</div>
        <div class="step">\\(\\text{Perpendicular} = \\sqrt{25k^2} = 5k\\)</div>
        <div class="step">\\(\\sin \\theta = \\frac{5}{13}\\)</div>
        <div class="step">\\(\\cos \\theta = \\frac{12}{13}\\)</div>
        <div class="step">\\(\\tan \\theta = \\frac{5}{12}\\)</div>
        <div class="step">\\(\\text{cosec } \\theta = \\frac{13}{5}\\)</div>
        <div class="step">\\(\\cot \\theta = \\frac{12}{5}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\sin \\theta = \\frac{5}{13}, \\cos \\theta =
            \\frac{12}{13}, \\tan \\theta = \\frac{5}{12}, \\text{cosec } \\theta = \\frac{13}{5}, \\cot \\theta =
            \\frac{12}{5}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">6. If ∠A and ∠B are acute angles such that cos A = cos B, then show that ∠A = ∠B.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPHBvbHlnb24gcG9pbnRzPSI1MCwyMCA1MCwxMjAgMTUwLDEyMCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4NCjxwb2x5bGluZSBwb2ludHM9IjUwLDEwNSA2NSwxMDUgNjUsMTIwIiBzdHJva2U9IiMyRTdEMzIiIGZpbGw9Im5vbmUiLz4NCjx0ZXh0IHg9IjM1IiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD4NCjx0ZXh0IHg9IjM1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+DQo8dGV4dCB4PSIxNjUiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QTwvdGV4dD4NCjx0ZXh0IHg9IjMwIiB5PSI3MC4wIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hPC90ZXh0Pg0KPHRleHQgeD0iMTAwLjAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YjwvdGV4dD4NCjx0ZXh0IHg9IjExMC4wIiB5PSI2MC4wIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jPC90ZXh0Pg0KPC9zdmc+" alt="Triangle with A and B acute">
        <div class="solution-header">Solution:</div>
        <div class="step">Consider a triangle ABC right-angled at C.</div>
        <div class="step">\\(\\cos A = \\frac{\\text{Base}}{\\text{Hypotenuse}} = \\frac{AC}{AB}\\) <span
                class="formula">\\((\\text{Definition})\\)</span></div>
        <div class="step">\\(\\cos B = \\frac{\\text{Base}}{\\text{Hypotenuse}} = \\frac{BC}{AB}\\)</div>
        <div class="step">Given \\(\\cos A = \\cos B\\).</div>
        <div class="step">\\(\\frac{AC}{AB} = \\frac{BC}{AB}\\)</div>
        <div class="step">\\(\\Rightarrow AC = BC\\)</div>
        <div class="step">We know that angles opposite to equal sides are equal.</div>
        <div class="step">\\(\\Rightarrow \\angle A = \\angle B\\)</div>
        <div class="final-answer">Therefore, \\(\\angle A = \\angle B\\). Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="question">7. If cot θ = 7/8, evaluate:</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIyMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjIwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHRleHQgeD0iNzAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5BPC90ZXh0Pg0KPHRleHQgeD0iNjAiIHk9IjI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+QjwvdGV4dD4NCjx0ZXh0IHg9IjIzMCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5DPC90ZXh0Pg0KPHRleHQgeD0iMzAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+OGs8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+N2s8L3RleHQ+DQo8dGV4dCB4PSIxODAiIHk9IjI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+zrg8L3RleHQ+DQo8L3N2Zz4=" alt="Triangle for cot theta">

        <div class="sub-question">(i) \\(\\frac{(1 + \\sin \\theta)(1 - \\sin \\theta)}{(1 + \\cos \\theta)(1 - \\cos \\theta)}\\)
        </div>
        <div class="solution-header">Solution:</div>
        <div class="step">Using identity <span class="formula">\\((a+b)(a-b) = a^2 - b^2\\)</span>:</div>
        <div class="step">\\(= \\frac{1 - \\sin^2 \\theta}{1 - \\cos^2 \\theta}\\)</div>
        <div class="step">Using identities <span class="formula">\\(1 - \\sin^2 \\theta = \\cos^2 \\theta\\)</span> and <span
                class="formula">\\(1 - \\cos^2 \\theta = \\sin^2 \\theta\\)</span>:</div>
        <div class="step">\\(= \\frac{\\cos^2 \\theta}{\\sin^2 \\theta}\\)</div>
        <div class="step">\\(= \\left(\\frac{\\cos \\theta}{\\sin \\theta}\\right)^2 = (\\cot \\theta)^2\\)</div>
        <div class="step">Given \\(\\cot \\theta = \\frac{7}{8}\\).</div>
        <div class="step">\\(= \\left(\\frac{7}{8}\\right)^2 = \\frac{49}{64}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\frac{49}{64}\\).</div>

        <div class="sub-question">(ii) \\(\\cot^2 \\theta\\)</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(\\cot \\theta = \\frac{7}{8}\\).</div>
        <div class="step">\\(\\cot^2 \\theta = (\\frac{7}{8})^2\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\frac{49}{64}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">8. If 3 cot A = 4, check whether \\(\\frac{1 - \\tan^2 A}{1 + \\tan^2 A} = \\cos^2 A - \\sin^2
            A\\) or not.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjI1MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjUwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSI2MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjYwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSI0MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4zeDwvdGV4dD4NCjx0ZXh0IHg9IjE2MCIgeT0iMjc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj40eDwvdGV4dD4NCjx0ZXh0IHg9IjE4MCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj41eDwvdGV4dD4NCjwvc3ZnPg==" alt="Triangle for 3cotA=4">
        <div class="solution-header">Solution:</div>
        <div class="step">\\(3 \\cot A = 4 \\Rightarrow \\cot A = \\frac{4}{3} \\Rightarrow \\tan A = \\frac{3}{4}\\).</div>
        <div class="step">Let Base = 4k, Perpendicular = 3k.</div>
        <div class="step">Hypotenuse = \\(\\sqrt{(4k)^2 + (3k)^2} = \\sqrt{16k^2 + 9k^2} = \\sqrt{25k^2} = 5k\\).</div>
        <div class="step">LHS: \\(\\frac{1 - \\tan^2 A}{1 + \\tan^2 A} = \\frac{1 - (3/4)^2}{1 + (3/4)^2}\\)</div>
        <div class="step">\\(= \\frac{1 - 9/16}{1 + 9/16} = \\frac{(16-9)/16}{(16+9)/16} = \\frac{7}{25}\\)</div>
        <div class="step">RHS: \\(\\cos^2 A - \\sin^2 A\\)</div>
        <div class="step">\\(\\cos A = \\frac{4}{5}, \\sin A = \\frac{3}{5}\\)</div>
        <div class="step">\\(= (\\frac{4}{5})^2 - (\\frac{3}{5})^2 = \\frac{16}{25} - \\frac{9}{25} = \\frac{7}{25}\\)</div>
        <div class="step">LHS = RHS.</div>
        <div class="final-answer">Therefore, the required value is True (Yes).</div>
    </div>

    <div class="content-box">
        <div class="question">9. In ∆ ABC right angled at B, if tan A = \\(1/\\sqrt{3}\\), find the value of:</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjI1MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjUwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSI2MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjYwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSI0MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4xazwvdGV4dD4NCjx0ZXh0IHg9IjE0MCIgeT0iMjc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj7iiJozIGs8L3RleHQ+DQo8L3N2Zz4=" alt="Triangle with tan A = 1/root3">
        <div class="solution-header">Solution:</div>
        <div class="step">\\(\\tan A = \\frac{1}{\\sqrt{3}}\\). This corresponds to \\(\\tan 30^\\circ\\).</div>
        <div class="step">So, \\(\\angle A = 30^\\circ\\).</div>
        <div class="step">Since \\(\\angle B = 90^\\circ\\), \\(\\angle C = 180^\\circ - (90^\\circ + 30^\\circ) = 60^\\circ\\).
        </div>

        <div class="sub-question">(i) \\(\\sin A \\cos C + \\cos A \\sin C\\)</div>
        <div class="step">\\(= \\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ\\)</div>
        <div class="step">\\(= (\\frac{1}{2})(\\frac{1}{2}) + (\\frac{\\sqrt{3}}{2})(\\frac{\\sqrt{3}}{2})\\)</div>
        <div class="step">\\(= \\frac{1}{4} + \\frac{3}{4} = \\frac{4}{4} = 1\\)</div>
        <div class="final-answer">Therefore, the required value is 1.</div>

        <div class="sub-question">(ii) \\(\\cos A \\cos C - \\sin A \\sin C\\)</div>
        <div class="step">\\(= \\cos 30^\\circ \\cos 60^\\circ - \\sin 30^\\circ \\sin 60^\\circ\\)</div>
        <div class="step">\\(= (\\frac{\\sqrt{3}}{2})(\\frac{1}{2}) - (\\frac{1}{2})(\\frac{\\sqrt{3}}{2})\\)</div>
        <div class="step">\\(= \\frac{\\sqrt{3}}{4} - \\frac{\\sqrt{3}}{4} = 0\\)</div>
        <div class="final-answer">Therefore, the required value is 0.</div>
    </div>

    <div class="content-box">
        <div class="question">10. In ∆ PQR, right-angled at Q, PR + QR = 25 cm and PQ = 5 cm. Determine the values of
            sin P, cos P and tan P.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIyMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjIwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPlA8L3RleHQ+DQo8dGV4dCB4PSI2MCIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5RPC90ZXh0Pg0KPHRleHQgeD0iMjMwIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPlI8L3RleHQ+DQo8dGV4dCB4PSIzMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj41IGNtPC90ZXh0Pg0KPHRleHQgeD0iMTMwIiB5PSIyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPnggY208L3RleHQ+DQo8L3N2Zz4=" alt="Triangle PQR">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(PQ = 5\\) and \\(PR + QR = 25 \\Rightarrow PR = 25 - QR\\).</div>
        <div class="step">Using Pythagoras Theorem: <span class="formula">\\(PQ^2 + QR^2 = PR^2\\)</span></div>
        <div class="step">\\(5^2 + QR^2 = (25 - QR)^2\\)</div>
        <div class="step">\\(25 + QR^2 = 625 + QR^2 - 50QR\\)</div>
        <div class="step">\\(50QR = 600 \\Rightarrow QR = 12 \\text{ cm}\\)</div>
        <div class="step">\\(PR = 25 - 12 = 13 \\text{ cm}\\)</div>
        <div class="step">\\(\\sin P = \\frac{QR}{PR} = \\frac{12}{13}\\)</div>
        <div class="step">\\(\\cos P = \\frac{PQ}{PR} = \\frac{5}{13}\\)</div>
        <div class="step">\\(\\tan P = \\frac{QR}{PQ} = \\frac{12}{5}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\sin P = \\frac{12}{13}, \\cos P = \\frac{5}{13}, \\tan
            P = \\frac{12}{5}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">11. State whether the following are true or false. Justify your answer.</div>

        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPg0KPGxpbmUgeDE9IjgwIiB5MT0iNTAiIHgyPSI4MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjI1MCIgeDI9IjIyMCIgeTI9IjI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxsaW5lIHgxPSI4MCIgeTE9IjUwIiB4Mj0iMjIwIiB5Mj0iMjUwIiBzdHJva2U9IiMyRTdEMzIiIHN0cm9rZS13aWR0aD0iMiIvPg0KPHBvbHlsaW5lIHBvaW50cz0iODAsMjMwIDEwMCwyMzAgMTAwLDI1MCIgc3Ryb2tlPSIjMkU3RDMyIiBmaWxsPSJub25lIi8+DQo8dGV4dCB4PSI3MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkM8L3RleHQ+DQo8dGV4dCB4PSI3MCIgeT0iMjc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj5CPC90ZXh0Pg0KPHRleHQgeD0iMjMwIiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iYmxhY2siPkE8L3RleHQ+DQo8dGV4dCB4PSIyMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9ImJsYWNrIj4xMms8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJibGFjayI+NWs8L3RleHQ+DQo8L3N2Zz4=" alt="Example Triangle">

        <div class="sub-question">(i) The value of tan A is always less than 1.</div>
        <div class="step"><span class="false-text">False</span>. In the given figure, if we take Opposite = 12k and
            Adjacent = 5k, then \\(\\tan A = \\frac{12k}{5k} = 2.4\\), which is greater than 1.</div>

        <div class="sub-question">(ii) \\(\\sec A = 12/5\\) for some value of angle A.</div>
        <div class="step"><span class="true-text">True</span>. \\(\\sec A = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}\\).
            Since Hyp > Adj is always true
            (12 > 5), this is possible.</div>

        <div class="sub-question">(iii) cos A is the abbreviation used for the cosecant of angle A.</div>
        <div class="step"><span class="false-text">False</span>. \\(\\cos A\\) is cosine. Cosecant is \\(\\text{cosec } A\\).
        </div>

        <div class="sub-question">(iv) cot A is the product of cot and A.</div>
        <div class="step"><span class="false-text">False</span>. \\(\\cot A\\) refers to the cotangent of angle A. \\(\\cot\\)
            separated from A has no
            meaning.</div>

        <div class="sub-question">(v) \\(\\sin \\theta = 4/3\\) for some angle \\(\\theta\\).</div>
        <div class="step"><span class="false-text">False</span>. \\(\\sin \\theta =
            \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\\). Hypotenuse must be greater
            than Opposite side. Here 4/3 > 1, which is impossible.</div>
    </div>

</body>

</html>`,
        exercise2: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Trigonometry - Exercise 8.2</title>
    
    
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
            border-bottom: 2px solid #FF8A65;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #FF8A65;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
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
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: normal ;
            color: #444;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            display: block;
        }

        .final-answer {
            color: #FF8A65;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        .solution-header {
            color: #FF8A65;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        .formula {
            font-weight: normal ;
            color: #FF8A65;
            margin: 5px 0;
            display: inline-block;
        }

        .diagram-placeholder {
            float: right;
            border: 2px dashed #bbb;
            padding: 10px;
            margin: 0 0 10px 15px;
            background: #fff;
            color: #555;
            font-size: 0.9em;
            max-width: 280px;
            text-align: center;
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

            img,
            .diagram-placeholder {
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF8A65 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF8A65 !important; }
  .question { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #FF8A65 !important; }
  .true-text { color: #FF8A65 !important; }
  .false-text { color: #FF8A65 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF8A65 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #FF8A65 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. Evaluate the following:</div>


        <div class="sub-question">(i) \\(\\sin 60^\\circ \\cos 30^\\circ + \\sin 30^\\circ \\cos 60^\\circ\\)</div>
        <div class="step">We know that: <span class="formula">\\(\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\cos 30^\\circ =
                \\frac{\\sqrt{3}}{2}, \\sin 30^\\circ = \\frac{1}{2}, \\cos 60^\\circ = \\frac{1}{2}\\)</span></div>
        <div class="step">Substituting the values:</div>
        <div class="step">\\(= \\left(\\frac{\\sqrt{3}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) +
            \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right)\\)</div>
        <div class="step">\\(= \\frac{3}{4} + \\frac{1}{4}\\)</div>
        <div class="step">\\(= \\frac{4}{4} = 1\\)</div>
        <div class="final-answer">Therefore, the required value is 1.</div>

        <div class="sub-question">(ii) \\(2 \\tan^2 45^\\circ + \\cos^2 30^\\circ - \\sin^2 60^\\circ\\)</div>
        <div class="step">We know that: <span class="formula">\\(\\tan 45^\\circ = 1, \\cos 30^\\circ = \\frac{\\sqrt{3}}{2},
                \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}\\)</span></div>
        <div class="step">Substituting the values:</div>
        <div class="step">\\(= 2(1)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2 - \\left(\\frac{\\sqrt{3}}{2}\\right)^2\\)</div>
        <div class="step">\\(= 2(1) + \\frac{3}{4} - \\frac{3}{4}\\)</div>
        <div class="step">\\(= 2 + 0 = 2\\)</div>
        <div class="final-answer">Therefore, the required value is 2.</div>

        <div class="sub-question">(iii) \\(\\frac{\\cos 45^\\circ}{\\sec 30^\\circ + \\text{cosec } 30^\\circ}\\)</div>
        <div class="step">We know that: <span class="formula">\\(\\cos 45^\\circ = \\frac{1}{\\sqrt{2}}, \\sec 30^\\circ =
                \\frac{2}{\\sqrt{3}}, \\text{cosec } 30^\\circ = 2\\)</span></div>
        <div class="step">Substituting the values:</div>
        <div class="step">\\(= \\frac{\\frac{1}{\\sqrt{2}}}{\\frac{2}{\\sqrt{3}} + 2}\\)</div>
        <div class="step">\\(= \\frac{\\frac{1}{\\sqrt{2}}}{\\frac{2 + 2\\sqrt{3}}{\\sqrt{3}}}\\)</div>
        <div class="step">\\(= \\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{3}}{2 + 2\\sqrt{3}}\\)</div>
        <div class="step">\\(= \\frac{\\sqrt{3}}{2\\sqrt{2} + 2\\sqrt{6}}\\)</div>
        <div class="step">Rationalizing the denominator by multiplying \\(\\frac{2\\sqrt{2} - 2\\sqrt{6}}{2\\sqrt{2} -
            2\\sqrt{6}}\\):</div>
        <div class="step">\\(= \\frac{\\sqrt{3}(2\\sqrt{2} - 2\\sqrt{6})}{(2\\sqrt{2})^2 - (2\\sqrt{6})^2}\\)</div>
        <div class="step">\\(= \\frac{2\\sqrt{6} - 2\\sqrt{18}}{8 - 24}\\)</div>
        <div class="step">\\(= \\frac{2\\sqrt{6} - 2(3\\sqrt{2})}{-16}\\)</div>
        <div class="step">\\(= \\frac{2\\sqrt{6} - 6\\sqrt{2}}{-16}\\)</div>
        <div class="step">\\(= \\frac{-2(3\\sqrt{2} - \\sqrt{6})}{-16} = \\frac{3\\sqrt{2} - \\sqrt{6}}{8}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\frac{3\\sqrt{2} - \\sqrt{6}}{8}\\).</div>

        <div class="sub-question">(iv) \\(\\frac{\\sin 30^\\circ + \\tan 45^\\circ - \\text{cosec } 60^\\circ}{\\sec 30^\\circ +
            \\cos 60^\\circ + \\cot 45^\\circ}\\)</div>
        <div class="step">We know that: <span class="formula">\\(\\sin 30^\\circ=\\frac{1}{2}, \\tan 45^\\circ=1, \\text{cosec
                } 60^\\circ=\\frac{2}{\\sqrt{3}}, \\sec 30^\\circ=\\frac{2}{\\sqrt{3}}, \\cos 60^\\circ=\\frac{1}{2}, \\cot
                45^\\circ=1\\)</span></div>
        <div class="step">Substituting values:</div>
        <div class="step">\\(= \\frac{\\frac{1}{2} + 1 - \\frac{2}{\\sqrt{3}}}{\\frac{2}{\\sqrt{3}} + \\frac{1}{2} + 1}\\)</div>
        <div class="step">\\(= \\frac{\\frac{3}{2} - \\frac{2}{\\sqrt{3}}}{\\frac{3}{2} + \\frac{2}{\\sqrt{3}}}\\)</div>
        <div class="step">\\(= \\frac{\\frac{3\\sqrt{3} - 4}{2\\sqrt{3}}}{\\frac{3\\sqrt{3} + 4}{2\\sqrt{3}}}\\)</div>
        <div class="step">\\(= \\frac{3\\sqrt{3} - 4}{3\\sqrt{3} + 4}\\)</div>
        <div class="step">Rationalizing the denominator:</div>
        <div class="step">\\(= \\frac{(3\\sqrt{3} - 4)(3\\sqrt{3} - 4)}{(3\\sqrt{3} + 4)(3\\sqrt{3} - 4)}\\)</div>
        <div class="step">\\(= \\frac{(3\\sqrt{3})^2 - 2(3\\sqrt{3})(4) + 4^2}{(3\\sqrt{3})^2 - 4^2}\\)</div>
        <div class="step">\\(= \\frac{27 - 24\\sqrt{3} + 16}{27 - 16}\\)</div>
        <div class="step">\\(= \\frac{43 - 24\\sqrt{3}}{11}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\frac{43 - 24\\sqrt{3}}{11}\\).</div>

        <div class="sub-question">(v) \\(\\frac{5 \\cos^2 60^\\circ + 4 \\sec^2 30^\\circ - \\tan^2 45^\\circ}{\\sin^2 30^\\circ +
            \\cos^2 30^\\circ}\\)</div>
        <div class="step">We know that: <span class="formula">\\(\\sin^2 30^\\circ + \\cos^2 30^\\circ = 1\\)</span></div>
        <div class="step">Substituting remaining values:</div>
        <div class="step">\\(= \\frac{5(\\frac{1}{2})^2 + 4(\\frac{2}{\\sqrt{3}})^2 - (1)^2}{1}\\)</div>
        <div class="step">\\(= 5(\\frac{1}{4}) + 4(\\frac{4}{3}) - 1\\)</div>
        <div class="step">\\(= \\frac{5}{4} + \\frac{16}{3} - 1\\)</div>
        <div class="step">LCM is 12:</div>
        <div class="step">\\(= \\frac{15 + 64 - 12}{12}\\)</div>
        <div class="step">\\(= \\frac{67}{12}\\)</div>
        <div class="final-answer">Therefore, the required value is \\(\\frac{67}{12}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">2. Choose the correct option and justify your choice:</div>


        <div class="sub-question">(i) \\(\\frac{2 \\tan 30^\\circ}{1 + \\tan^2 30^\\circ}\\)</div>
        <div class="step">Substitute \\(\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}\\):</div>
        <div class="step">\\(= \\frac{2(1/\\sqrt{3})}{1 + (1/\\sqrt{3})^2} = \\frac{2/\\sqrt{3}}{1 + 1/3}\\)</div>
        <div class="step">\\(= \\frac{2/\\sqrt{3}}{4/3} = \\frac{2}{\\sqrt{3}} \\times \\frac{3}{4} = \\frac{3}{2\\sqrt{3}}\\)
        </div>
        <div class="step">\\(= \\frac{\\sqrt{3}\\sqrt{3}}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2}\\)</div>
        <div class="step">We know that <span class="formula">\\(\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}\\)</span>.</div>
        <div class="final-answer">Therefore, the required value is (A) \\(\\sin 60^\\circ\\).</div>

        <div class="sub-question">(ii) \\(\\frac{1 - \\tan^2 45^\\circ}{1 + \\tan^2 45^\\circ}\\)</div>
        <div class="step">Substitute \\(\\tan 45^\\circ = 1\\):</div>
        <div class="step">\\(= \\frac{1 - (1)^2}{1 + (1)^2} = \\frac{0}{2} = 0\\)</div>
        <div class="final-answer">Therefore, the required value is (D) 0.</div>

        <div class="sub-question">(iii) \\(\\sin 2A = 2 \\sin A\\) is true when A =</div>
        <div class="step">Check A = 0°:</div>
        <div class="step">LHS: \\(\\sin 2(0) = \\sin 0 = 0\\)</div>
        <div class="step">RHS: \\(2 \\sin 0 = 2(0) = 0\\)</div>
        <div class="step">LHS = RHS.</div>
        <div class="final-answer">Therefore, the required value is (A) 0°.</div>

        <div class="sub-question">(iv) \\(\\frac{2 \\tan 30^\\circ}{1 - \\tan^2 30^\\circ}\\)</div>
        <div class="step">Substitute \\(\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}\\):</div>
        <div class="step">\\(= \\frac{2(1/\\sqrt{3})}{1 - (1/\\sqrt{3})^2} = \\frac{2/\\sqrt{3}}{1 - 1/3}\\)</div>
        <div class="step">\\(= \\frac{2/\\sqrt{3}}{2/3} = \\frac{2}{\\sqrt{3}} \\times \\frac{3}{2} = \\frac{3}{\\sqrt{3}} =
            \\sqrt{3}\\)</div>
        <div class="step">We know that <span class="formula">\\(\\tan 60^\\circ = \\sqrt{3}\\)</span>.</div>
        <div class="final-answer">Therefore, the required value is (C) \\(\\tan 60^\\circ\\).</div>
    </div>

    <div class="content-box">
        <div class="question">3. If tan (A + B) = \\(\\sqrt{3}\\) and tan (A – B) = \\(1/\\sqrt{3}\\); 0° < A + B ≤ 90°; A> B,
                find A and B.</div>

        <div class="solution-header">Solution:</div>
        <div class="step">\\(\\tan (A + B) = \\sqrt{3}\\)</div>
        <div class="step">We know <span class="formula">\\(\\tan 60^\\circ = \\sqrt{3}\\)</span></div>
        <div class="step">\\(\\Rightarrow A + B = 60^\\circ\\) ... (1)</div>
        <div class="step">\\(\\tan (A - B) = \\frac{1}{\\sqrt{3}}\\)</div>
        <div class="step">We know <span class="formula">\\(\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}\\)</span></div>
        <div class="step">\\(\\Rightarrow A - B = 30^\\circ\\) ... (2)</div>
        <div class="step">Adding equations (1) and (2):</div>
        <div class="step">\\((A + B) + (A - B) = 60^\\circ + 30^\\circ\\)</div>
        <div class="step">\\(2A = 90^\\circ \\Rightarrow A = 45^\\circ\\)</div>
        <div class="step">Substituting A in (1):</div>
        <div class="step">\\(45^\\circ + B = 60^\\circ \\Rightarrow B = 15^\\circ\\)</div>
        <div class="final-answer">Therefore, the required value is \\(A = 45^\\circ, B = 15^\\circ\\).</div>
    </div>

    <div class="content-box">
        <div class="question">4. State whether the following are true or false. Justify your answer.</div>

        <div class="sub-question">(i) \\(\\sin (A + B) = \\sin A + \\sin B\\).</div>
        <div class="step">False. Let \\(A=30^\\circ, B=60^\\circ\\).</div>
        <div class="step">LHS = \\(\\sin(90^\\circ) = 1\\).</div>
        <div class="step">RHS = \\(\\sin 30^\\circ + \\sin 60^\\circ = \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\ne 1\\).</div>

        <div class="sub-question">(ii) The value of \\(\\sin \\theta\\) increases as \\(\\theta\\) increases.</div>
        <div class="step">True. From 0° to 90°, \\(\\sin \\theta\\) increases from 0 to 1.</div>

        <div class="sub-question">(iii) The value of \\(\\cos \\theta\\) increases as \\(\\theta\\) increases.</div>
        <div class="step">False. From 0° to 90°, \\(\\cos \\theta\\) decreases from 1 to 0.</div>

        <div class="sub-question">(iv) \\(\\sin \\theta = \\cos \\theta\\) for all values of \\(\\theta\\).</div>
        <div class="step">False. Only true at \\(\\theta = 45^\\circ\\). For \\(\\theta = 30^\\circ\\), \\(\\sin 30^\\circ = 0.5
            \\ne \\cos 30^\\circ = 0.866\\).</div>

        <div class="sub-question">(v) \\(\\cot A\\) is not defined for \\(A = 0^\\circ\\).</div>
        <div class="step">True. \\(\\cot 0^\\circ = \\frac{\\cos 0^\\circ}{\\sin 0^\\circ} = \\frac{1}{0}\\), which is undefined.
        </div>
    </div>

</body>

</html>`,
        exercise3: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Trigonometry - Exercise 8.3</title>
    
    
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
            border-bottom: 2px solid #FF8A65;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #FF8A65;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
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
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .sub-question {
            margin-left: 15px;
            margin-top: 15px;
            font-weight: normal ;
            color: #444;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            display: block;
        }

        .final-answer {
            color: #FF8A65;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        .solution-header {
            color: #FF8A65;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        .formula {
            font-weight: normal ;
            color: #FF8A65;
            margin: 5px 0;
            display: inline-block;
        }

        .diagram-placeholder {
            float: right;
            border: 2px dashed #bbb;
            padding: 10px;
            margin: 0 0 10px 15px;
            background: #fff;
            color: #555;
            font-size: 0.9em;
            max-width: 280px;
            text-align: center;
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

            img,
            .diagram-placeholder {
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF8A65 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF8A65 !important; }
  .question { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #FF8A65 !important; }
  .true-text { color: #FF8A65 !important; }
  .false-text { color: #FF8A65 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF8A65 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #FF8A65 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. Express the trigonometric ratios sin A, sec A and tan A in terms of cot A.</div>

        <div class="solution-header">Solution:</div>
        <div class="step">We know the identity: <span class="formula">\\(\\text{cosec}^2 A - \\cot^2 A = 1\\)</span></div>
        <div class="step">\\(\\Rightarrow \\text{cosec}^2 A = 1 + \\cot^2 A\\)</div>
        <div class="step">\\(\\Rightarrow \\frac{1}{\\sin^2 A} = 1 + \\cot^2 A\\)</div>
        <div class="step">\\(\\Rightarrow \\sin^2 A = \\frac{1}{1 + \\cot^2 A}\\)</div>
        <div class="step">\\(\\Rightarrow \\sin A = \\frac{1}{\\sqrt{1 + \\cot^2 A}}\\)</div>
        <div class="step">We know that <span class="formula">\\(\\tan A = \\frac{1}{\\cot A}\\)</span></div>
        <div class="step">Also, <span class="formula">\\(\\sec^2 A = 1 + \\tan^2 A\\)</span></div>
        <div class="step">\\(\\sec^2 A = 1 + \\frac{1}{\\cot^2 A}\\)</div>
        <div class="step">\\(\\sec^2 A = \\frac{\\cot^2 A + 1}{\\cot^2 A}\\)</div>
        <div class="step">\\(\\sec A = \\frac{\\sqrt{\\cot^2 A + 1}}{\\cot A}\\)</div>
        <div class="final-answer">Therefore, the required values are \\(\\sin A = \\frac{1}{\\sqrt{1 + \\cot^2 A}}, \\tan A =
            \\frac{1}{\\cot A}, \\sec A = \\frac{\\sqrt{\\cot^2 A + 1}}{\\cot A}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">2. Write all the other trigonometric ratios of ∠A in terms of sec A.</div>

        <div class="solution-header">Solution:</div>
        <div class="step">1. <span class="formula">\\(\\cos A = \\frac{1}{\\sec A}\\)</span></div>
        <div class="step">2. We know <span class="formula">\\(\\sin^2 A + \\cos^2 A = 1\\)</span></div>
        <div class="step">\\(\\sin^2 A = 1 - \\cos^2 A = 1 - \\frac{1}{\\sec^2 A}\\)</div>
        <div class="step">\\(\\sin^2 A = \\frac{\\sec^2 A - 1}{\\sec^2 A}\\)</div>
        <div class="step">\\(\\sin A = \\frac{\\sqrt{\\sec^2 A - 1}}{\\sec A}\\)</div>
        <div class="step">3. We know <span class="formula">\\(\\tan^2 A = \\sec^2 A - 1\\)</span></div>
        <div class="step">\\(\\tan A = \\sqrt{\\sec^2 A - 1}\\)</div>
        <div class="step">4. <span class="formula">\\(\\cot A = \\frac{1}{\\tan A}\\)</span></div>
        <div class="step">\\(\\cot A = \\frac{1}{\\sqrt{\\sec^2 A - 1}}\\)</div>
        <div class="step">5. <span class="formula">\\(\\text{cosec } A = \\frac{1}{\\sin A}\\)</span></div>
        <div class="step">\\(\\text{cosec } A = \\frac{\\sec A}{\\sqrt{\\sec^2 A - 1}}\\)</div>
        <div class="final-answer">Therefore, the ratios are expressed in terms of \\(\\sec A\\) as above.</div>
    </div>

    <div class="content-box">
        <div class="question">3. Choose the correct option. Justify your choice.</div>


        <div class="sub-question">(i) \\(9 \\sec^2 A - 9 \\tan^2 A =\\)</div>
        <div class="step">\\(= 9 (\\sec^2 A - \\tan^2 A)\\)</div>
        <div class="step">Using identity <span class="formula">\\(\\sec^2 A - \\tan^2 A = 1\\)</span></div>
        <div class="step">\\(= 9 (1) = 9\\)</div>
        <div class="final-answer">Therefore, the required value is (B) 9.</div>

        <div class="sub-question">(ii) \\((1 + \\tan \\theta + \\sec \\theta) (1 + \\cot \\theta - \\text{cosec } \\theta)\\)
        </div>
        <div class="step">\\(= (1 + \\frac{\\sin \\theta}{\\cos \\theta} + \\frac{1}{\\cos \\theta}) (1 + \\frac{\\cos \\theta}{\\sin
            \\theta} - \\frac{1}{\\sin \\theta})\\)</div>
        <div class="step">\\(= (\\frac{\\cos \\theta + \\sin \\theta + 1}{\\cos \\theta}) (\\frac{\\sin \\theta + \\cos \\theta -
            1}{\\sin \\theta})\\)</div>
        <div class="step">Let \\(x = (\\sin \\theta + \\cos \\theta)\\) and \\(y = 1\\).</div>
        <div class="step">\\(= \\frac{(x + 1)(x - 1)}{\\sin \\theta \\cos \\theta} = \\frac{x^2 - 1}{\\sin \\theta \\cos \\theta}\\)
        </div>
        <div class="step">\\(= \\frac{(\\sin \\theta + \\cos \\theta)^2 - 1}{\\sin \\theta \\cos \\theta}\\)</div>
        <div class="step">\\(= \\frac{\\sin^2 \\theta + \\cos^2 \\theta + 2\\sin \\theta \\cos \\theta - 1}{\\sin \\theta \\cos
            \\theta}\\)</div>
        <div class="step">Using <span class="formula">\\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\)</span></div>
        <div class="step">\\(= \\frac{1 + 2\\sin \\theta \\cos \\theta - 1}{\\sin \\theta \\cos \\theta}\\)</div>
        <div class="step">\\(= \\frac{2\\sin \\theta \\cos \\theta}{\\sin \\theta \\cos \\theta} = 2\\)</div>
        <div class="final-answer">Therefore, the required value is (C) 2.</div>

        <div class="sub-question">(iii) \\((\\sec A + \\tan A) (1 - \\sin A)\\)</div>
        <div class="step">\\(= (\\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A}) (1 - \\sin A)\\)</div>
        <div class="step">\\(= (\\frac{1 + \\sin A}{\\cos A}) (1 - \\sin A)\\)</div>
        <div class="step">\\(= \\frac{(1 + \\sin A)(1 - \\sin A)}{\\cos A}\\)</div>
        <div class="step">\\(= \\frac{1 - \\sin^2 A}{\\cos A}\\)</div>
        <div class="step">Using <span class="formula">\\(1 - \\sin^2 A = \\cos^2 A\\)</span></div>
        <div class="step">\\(= \\frac{\\cos^2 A}{\\cos A} = \\cos A\\)</div>
        <div class="final-answer">Therefore, the required value is (D) \\(\\cos A\\).</div>

        <div class="sub-question">(iv) \\(\\frac{1 + \\tan^2 A}{1 + \\cot^2 A}\\)</div>
        <div class="step">Using identities <span class="formula">\\(1 + \\tan^2 A = \\sec^2 A\\)</span> and <span
                class="formula">\\(1 + \\cot^2 A = \\text{cosec}^2 A\\)</span></div>
        <div class="step">\\(= \\frac{\\sec^2 A}{\\text{cosec}^2 A}\\)</div>
        <div class="step">\\(= \\frac{1/\\cos^2 A}{1/\\sin^2 A}\\)</div>
        <div class="step">\\(= \\frac{\\sin^2 A}{\\cos^2 A} = \\tan^2 A\\)</div>
        <div class="final-answer">Therefore, the required value is (D) \\(\\tan^2 A\\).</div>
    </div>

    <div class="content-box">
        <div class="question">4. Prove the following identities, where the angles involved are acute angles for which
            the expressions are defined.</div>


        <div class="sub-question">(i) \\((\\text{cosec } \\theta - \\cot \\theta)^2 = \\frac{1 - \\cos \\theta}{1 + \\cos
            \\theta}\\)</div>
        <div class="step">LHS = \\((\\frac{1}{\\sin \\theta} - \\frac{\\cos \\theta}{\\sin \\theta})^2\\)</div>
        <div class="step">\\(= (\\frac{1 - \\cos \\theta}{\\sin \\theta})^2\\)</div>
        <div class="step">\\(= \\frac{(1 - \\cos \\theta)^2}{\\sin^2 \\theta}\\)</div>
        <div class="step">Using identity <span class="formula">\\(\\sin^2 \\theta = 1 - \\cos^2 \\theta\\)</span></div>
        <div class="step">\\(= \\frac{(1 - \\cos \\theta)^2}{1 - \\cos^2 \\theta}\\)</div>
        <div class="step">\\(= \\frac{(1 - \\cos \\theta)(1 - \\cos \\theta)}{(1 - \\cos \\theta)(1 + \\cos \\theta)}\\)</div>
        <div class="step">\\(= \\frac{1 - \\cos \\theta}{1 + \\cos \\theta}\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(ii) \\(\\frac{\\cos A}{1 + \\sin A} + \\frac{1 + \\sin A}{\\cos A} = 2 \\sec A\\)</div>
        <div class="step">LHS = \\(\\frac{\\cos^2 A + (1 + \\sin A)^2}{(1 + \\sin A)\\cos A}\\)</div>
        <div class="step">\\(= \\frac{\\cos^2 A + 1 + \\sin^2 A + 2\\sin A}{(1 + \\sin A)\\cos A}\\)</div>
        <div class="step">Using <span class="formula">\\(\\sin^2 A + \\cos^2 A = 1\\)</span></div>
        <div class="step">\\(= \\frac{1 + 1 + 2\\sin A}{(1 + \\sin A)\\cos A}\\)</div>
        <div class="step">\\(= \\frac{2 + 2\\sin A}{(1 + \\sin A)\\cos A}\\)</div>
        <div class="step">\\(= \\frac{2(1 + \\sin A)}{(1 + \\sin A)\\cos A}\\)</div>
        <div class="step">\\(= \\frac{2}{\\cos A} = 2 \\sec A\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(iii) \\(\\frac{\\tan \\theta}{1 - \\cot \\theta} + \\frac{\\cot \\theta}{1 - \\tan \\theta} = 1
            + \\sec \\theta \\text{cosec } \\theta\\)</div>
        <div class="step">Convert to sin and cos:</div>
        <div class="step">\\(= \\frac{\\frac{\\sin \\theta}{\\cos \\theta}}{1 - \\frac{\\cos \\theta}{\\sin \\theta}} +
            \\frac{\\frac{\\cos \\theta}{\\sin \\theta}}{1 - \\frac{\\sin \\theta}{\\cos \\theta}}\\)</div>
        <div class="step">\\(= \\frac{\\frac{\\sin \\theta}{\\cos \\theta}}{\\frac{\\sin \\theta - \\cos \\theta}{\\sin \\theta}} +
            \\frac{\\frac{\\cos \\theta}{\\sin \\theta}}{\\frac{\\cos \\theta - \\sin \\theta}{\\cos \\theta}}\\)</div>
        <div class="step">\\(= \\frac{\\sin^2 \\theta}{\\cos \\theta(\\sin \\theta - \\cos \\theta)} + \\frac{\\cos^2 \\theta}{\\sin
            \\theta(\\cos \\theta - \\sin \\theta)}\\)</div>
        <div class="step">\\(= \\frac{\\sin^2 \\theta}{\\cos \\theta(\\sin \\theta - \\cos \\theta)} - \\frac{\\cos^2 \\theta}{\\sin
            \\theta(\\sin \\theta - \\cos \\theta)}\\)</div>
        <div class="step">\\(= \\frac{\\sin^3 \\theta - \\cos^3 \\theta}{\\sin \\theta \\cos \\theta (\\sin \\theta - \\cos
            \\theta)}\\)</div>
        <div class="step">Using <span class="formula">\\(a^3 - b^3 = (a-b)(a^2 + b^2 + ab)\\)</span></div>
        <div class="step">\\(= \\frac{(\\sin \\theta - \\cos \\theta)(\\sin^2 \\theta + \\cos^2 \\theta + \\sin \\theta \\cos
            \\theta)}{\\sin \\theta \\cos \\theta (\\sin \\theta - \\cos \\theta)}\\)</div>
        <div class="step">\\(= \\frac{1 + \\sin \\theta \\cos \\theta}{\\sin \\theta \\cos \\theta}\\)</div>
        <div class="step">\\(= \\frac{1}{\\sin \\theta \\cos \\theta} + 1\\)</div>
        <div class="step">\\(= \\text{cosec } \\theta \\sec \\theta + 1\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(iv) \\(\\frac{1 + \\sec A}{\\sec A} = \\frac{\\sin^2 A}{1 - \\cos A}\\)</div>
        <div class="step">LHS = \\(\\frac{1 + 1/\\cos A}{1/\\cos A} = \\frac{(\\cos A + 1)/\\cos A}{1/\\cos A} = 1 + \\cos A\\).
        </div>
        <div class="step">RHS = \\(\\frac{\\sin^2 A}{1 - \\cos A} = \\frac{1 - \\cos^2 A}{1 - \\cos A}\\)</div>
        <div class="step">\\(= \\frac{(1 - \\cos A)(1 + \\cos A)}{1 - \\cos A} = 1 + \\cos A\\)</div>
        <div class="step">LHS = RHS.</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(v) \\(\\frac{\\cos A - \\sin A + 1}{\\cos A + \\sin A - 1} = \\text{cosec } A + \\cot A\\)
        </div>

        <div class="step">Divide numerator and denominator by \\(\\sin A\\):</div>
        <div class="step">\\(= \\frac{\\cot A - 1 + \\text{cosec } A}{\\cot A + 1 - \\text{cosec } A}\\)</div>
        <div class="step">Using identity: <span class="formula">\\(1 = \\text{cosec}^2 A - \\cot^2 A\\)</span> in numerator
        </div>
        <div class="step">\\(= \\frac{\\cot A + \\text{cosec } A - (\\text{cosec}^2 A - \\cot^2 A)}{\\cot A - \\text{cosec } A +
            1}\\)</div>
        <div class="step">\\(= \\frac{(\\cot A + \\text{cosec } A) - (\\text{cosec } A - \\cot A)(\\text{cosec } A + \\cot
            A)}{\\cot A - \\text{cosec } A + 1}\\)</div>
        <div class="step">Factor out \\((\\cot A + \\text{cosec } A)\\):</div>
        <div class="step">\\(= \\frac{(\\cot A + \\text{cosec } A)(1 - \\text{cosec } A + \\cot A)}{1 - \\text{cosec } A + \\cot
            A}\\)</div>
        <div class="step">\\(= \\cot A + \\text{cosec } A\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(vi) \\(\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A}} = \\sec A + \\tan A\\)</div>
        <div class="step">LHS = \\(\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A} \\times \\frac{1 + \\sin A}{1 + \\sin A}}\\)</div>
        <div class="step">\\(= \\sqrt{\\frac{(1 + \\sin A)^2}{1 - \\sin^2 A}}\\)</div>
        <div class="step">Using <span class="formula">\\(1 - \\sin^2 A = \\cos^2 A\\)</span></div>
        <div class="step">\\(= \\sqrt{\\frac{(1 + \\sin A)^2}{\\cos^2 A}}\\)</div>
        <div class="step">\\(= \\frac{1 + \\sin A}{\\cos A}\\)</div>
        <div class="step">\\(= \\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A} = \\sec A + \\tan A\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(vii) \\(\\frac{\\sin \\theta - 2 \\sin^3 \\theta}{2 \\cos^3 \\theta - \\cos \\theta} = \\tan
            \\theta\\)</div>
        <div class="step">LHS = \\(\\frac{\\sin \\theta (1 - 2\\sin^2 \\theta)}{\\cos \\theta (2\\cos^2 \\theta - 1)}\\)</div>
        <div class="step">We know <span class="formula">\\(\\cos 2\\theta = 1 - 2\\sin^2 \\theta = 2\\cos^2 \\theta -
                1\\)</span></div>
        <div class="step">Or substitution: \\(1 - 2\\sin^2 \\theta = \\sin^2 \\theta + \\cos^2 \\theta - 2\\sin^2 \\theta =
            \\cos^2 \\theta - \\sin^2 \\theta\\).</div>
        <div class="step">Denominator: \\(2\\cos^2 \\theta - 1 = 2\\cos^2 \\theta - (\\sin^2 \\theta + \\cos^2 \\theta) = \\cos^2
            \\theta - \\sin^2 \\theta\\).</div>
        <div class="step">\\(= \\frac{\\sin \\theta (\\cos^2 \\theta - \\sin^2 \\theta)}{\\cos \\theta (\\cos^2 \\theta - \\sin^2
            \\theta)}\\)</div>
        <div class="step">\\(= \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(viii) \\((\\sin A + \\text{cosec } A)^2 + (\\cos A + \\sec A)^2 = 7 + \\tan^2 A + \\cot^2
            A\\)</div>
        <div class="step">Expand LHS:</div>
        <div class="step">\\(= (\\sin^2 A + \\text{cosec}^2 A + 2\\sin A \\text{cosec } A) + (\\cos^2 A + \\sec^2 A + 2\\cos A
            \\sec A)\\)</div>
        <div class="step">We know <span class="formula">\\(\\sin A \\text{cosec } A = 1\\)</span> and <span
                class="formula">\\(\\cos A \\sec A = 1\\)</span></div>
        <div class="step">\\(= \\sin^2 A + \\text{cosec}^2 A + 2 + \\cos^2 A + \\sec^2 A + 2\\)</div>
        <div class="step">Group terms: \\((\\sin^2 A + \\cos^2 A) + \\text{cosec}^2 A + \\sec^2 A + 4\\)</div>
        <div class="step">\\(= 1 + (1 + \\cot^2 A) + (1 + \\tan^2 A) + 4\\)</div>
        <div class="step">\\(= 1 + 1 + 1 + 4 + \\cot^2 A + \\tan^2 A\\)</div>
        <div class="step">\\(= 7 + \\tan^2 A + \\cot^2 A\\) = RHS</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(ix) \\((\\text{cosec } A - \\sin A)(\\sec A - \\cos A) = \\frac{1}{\\tan A + \\cot A}\\)</div>
        <div class="step">LHS = \\((\\frac{1}{\\sin A} - \\sin A)(\\frac{1}{\\cos A} - \\cos A)\\)</div>
        <div class="step">\\(= (\\frac{1 - \\sin^2 A}{\\sin A})(\\frac{1 - \\cos^2 A}{\\cos A})\\)</div>
        <div class="step">\\(= (\\frac{\\cos^2 A}{\\sin A})(\\frac{\\sin^2 A}{\\cos A}) = \\sin A \\cos A\\)</div>
        <div class="step">RHS = \\(\\frac{1}{\\frac{\\sin A}{\\cos A} + \\frac{\\cos A}{\\sin A}}\\)</div>
        <div class="step">\\(= \\frac{1}{\\frac{\\sin^2 A + \\cos^2 A}{\\sin A \\cos A}}\\)</div>
        <div class="step">\\(= \\frac{\\sin A \\cos A}{1} = \\sin A \\cos A\\)</div>
        <div class="step">LHS = RHS.</div>
        <div class="final-answer">Hence Proved.</div>

        <div class="sub-question">(x) \\((\\frac{1 + \\tan^2 A}{1 + \\cot^2 A}) = (\\frac{1 - \\tan A}{1 - \\cot A})^2 = \\tan^2
            A\\)</div>
        <div class="step">First part: \\(\\frac{1 + \\tan^2 A}{1 + \\cot^2 A} = \\frac{\\sec^2 A}{\\text{cosec}^2 A}\\)</div>
        <div class="step">\\(= \\frac{1/\\cos^2 A}{1/\\sin^2 A} = \\frac{\\sin^2 A}{\\cos^2 A} = \\tan^2 A\\).</div>
        <div class="step">Second part: \\(\\frac{1 - \\tan A}{1 - \\frac{1}{\\tan A}} = \\frac{1 - \\tan A}{\\frac{\\tan A -
            1}{\\tan A}}\\)</div>
        <div class="step">\\(= \\frac{\\tan A(1 - \\tan A)}{-(1 - \\tan A)} = -\\tan A\\)</div>
        <div class="step">So, \\((-\\tan A)^2 = \\tan^2 A\\).</div>
        <div class="step">All parts equal \\(\\tan^2 A\\).</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

</body>

</html>`,
        examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Trigonometry - Examples</title>
    
    
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
            border-bottom: 2px solid #FF8A65;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #FF8A65;
            font-size: 24px;
            font-weight: normal ;
        }

        .chapter-title {
            text-align: center;
            color: #333;
            font-size: 20px;
            font-weight: normal ;
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
            font-weight: normal ;
            margin-bottom: 15px;
            color: #333;
        }

        .step {
            margin-bottom: 8px;
            font-size: 1.1em;
            color: #000;
            line-height: 1.6;
            display: block;
        }

        .final-answer {
            color: #FF8A65;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        .solution-header {
            color: #FF8A65;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        .formula {
            font-weight: normal ;
            color: #FF8A65;
            margin: 5px 0;
            display: inline-block;
        }

        .diagram-placeholder {
            float: right;
            border: 2px dashed #bbb;
            padding: 10px;
            margin: 0 0 10px 15px;
            background: #fff;
            color: #555;
            font-size: 0.9em;
            max-width: 280px;
            text-align: center;
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

            img,
            .diagram-placeholder {
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF8A65 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF8A65 !important; }
  .question { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #FF8A65 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #FF8A65 !important; }
  .true-text { color: #FF8A65 !important; }
  .false-text { color: #FF8A65 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF8A65 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #FF8A65 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">Example 1. Given tan A = 4/3, find the other trigonometric ratios of the angle A.</div>
        
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwb2x5Z29uIHBvaW50cz0iNTAsMjAgNTAsMTQwIDE0MCwxNDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwb2x5bGluZSBwb2ludHM9IjUwLDEyNSA2NSwxMjUgNjUsMTQwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMzUiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0Pjx0ZXh0IHg9IjM1IiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+PHRleHQgeD0iMTU1IiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkE8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjgwLjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjRrPC90ZXh0Pjx0ZXh0IHg9Ijk1LjAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+M2s8L3RleHQ+PHRleHQgeD0iMTA1LjAiIHk9IjcwLjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPjVrPC90ZXh0Pjwvc3ZnPg==" alt="Triangle with tan A = 4/3">
        <div class="solution-header">Solution:</div>
        <div class="step">Let us draw a right triangle ABC right-angled at B.</div>
        <div class="step">\\(\\tan A = \\frac{\\text{Perpendicular}}{\\text{Base}} = \\frac{BC}{AB} = \\frac{4}{3}\\).</div>
        <div class="step">Let \\(BC = 4k\\) and \\(AB = 3k\\) where \\(k\\) is a positive number.</div>
        <div class="step">By Pythagoras Theorem:</div>
        <div class="step"><span class="formula">\\(AC^2 = AB^2 + BC^2\\)</span></div>
        <div class="step">\\(AC^2 = (3k)^2 + (4k)^2\\)</div>
        <div class="step">\\(AC^2 = 9k^2 + 16k^2 = 25k^2\\)</div>
        <div class="step">\\(AC = \\sqrt{25k^2} = 5k\\)</div>
        <div class="step">Now, we can write all ratios:</div>
        <div class="step">\\(\\sin A = \\frac{\\text{Perp}}{\\text{Hyp}} = \\frac{4k}{5k} = \\frac{4}{5}\\)</div>
        <div class="step">\\(\\cos A = \\frac{\\text{Base}}{\\text{Hyp}} = \\frac{3k}{5k} = \\frac{3}{5}\\)</div>
        <div class="step">\\(\\cot A = \\frac{1}{\\tan A} = \\frac{3}{4}\\)</div>
        <div class="step">\\(\\sec A = \\frac{1}{\\cos A} = \\frac{5}{3}\\)</div>
        <div class="step">\\(\\text{cosec } A = \\frac{1}{\\sin A} = \\frac{5}{4}\\)</div>
        <div class="final-answer">Therefore, the required values are \\(\\sin A=\\frac{4}{5}, \\cos A=\\frac{3}{5}, \\cot
            A=\\frac{3}{4}, \\sec A=\\frac{5}{3}, \\text{cosec } A=\\frac{5}{4}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. If ∠B and ∠Q are acute angles such that sin B = sin Q, then prove that ∠B = ∠Q.
        </div>
        
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwb2x5Z29uIHBvaW50cz0iNTAsMjAgNTAsMTIwIDEzMCwxMjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwb2x5bGluZSBwb2ludHM9IjUwLDEwNSA2NSwxMDUgNjUsMTIwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMzUiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjx0ZXh0IHg9IjM1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+PHRleHQgeD0iMTQ1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjcwLjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPmI8L3RleHQ+PHRleHQgeD0iOTAuMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hPC90ZXh0Pjx0ZXh0IHg9IjEwMC4wIiB5PSI2MC4wIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jPC90ZXh0Pjx0ZXh0IHg9IjI0MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZWYgUC1SLVEgc2ltaWxhcjwvdGV4dD48L3N2Zz4=" alt="Two Triangles">
        <div class="solution-header">Solution:</div>
        <div class="step">Let us consider two right triangles ABC and PQR where sin B = sin Q.</div>
        <div class="step">\\(\\sin B = \\frac{AC}{AB}\\)</div>
        <div class="step">\\(\\sin Q = \\frac{PR}{PQ}\\)</div>
        <div class="step">Given \\(\\sin B = \\sin Q\\):</div>
        <div class="step">\\(\\Rightarrow \\frac{AC}{AB} = \\frac{PR}{PQ}\\)</div>
        <div class="step">Let \\(\\frac{AC}{PR} = \\frac{AB}{PQ} = k\\)</div>
        <div class="step">\\(\\Rightarrow AC = k(PR)\\) and \\(AB = k(PQ)\\)</div>
        <div class="step">Using Pythagoras Theorem:</div>
        <div class="step">\\(BC = \\sqrt{AB^2 - AC^2}\\)</div>
        <div class="step">\\(QR = \\sqrt{PQ^2 - PR^2}\\)</div>
        <div class="step">Checking ratio \\(\\frac{BC}{QR}\\):</div>
        <div class="step">\\(\\frac{BC}{QR} = \\frac{\\sqrt{(kPQ)^2 - (kPR)^2}}{\\sqrt{PQ^2 - PR^2}}\\)</div>
        <div class="step">\\(= \\frac{k\\sqrt{PQ^2 - PR^2}}{\\sqrt{PQ^2 - PR^2}} = k\\)</div>
        <div class="step">So, \\(\\frac{AC}{PR} = \\frac{AB}{PQ} = \\frac{BC}{QR} = k\\)</div>
        <div class="step">By SSS Similarity Criterion, \\(\\triangle ABC \\sim \\triangle PQR\\)</div>
        <div class="step">Therefore, \\(\\angle B = \\angle Q\\).</div>
        <div class="final-answer">Hence Proved.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. Consider ∆ ACB, right-angled at C, in which AB = 29 units, BC = 21 units and
            ∠ABC = θ. Determine the values of (i) cos² θ + sin² θ, (ii) cos² θ – sin² θ.</div>
       
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwb2x5Z29uIHBvaW50cz0iNTAsMjAgNTAsMTAwIDE5MCwxMDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwb2x5bGluZSBwb2ludHM9IjUwLDg1IDY1LDg1IDY1LDEwMCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjM1IiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QTwvdGV4dD48dGV4dCB4PSIzNSIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0Pjx0ZXh0IHg9IjIwNSIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSI2MC4wIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BQz0yMDwvdGV4dD48dGV4dCB4PSIxMjAuMCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CQz0yMTwvdGV4dD48dGV4dCB4PSIxMzAuMCIgeT0iNTAuMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUI9Mjk8L3RleHQ+PC9zdmc+" alt="Triangle with sides 29 and 21">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(AB = 29, BC = 21\\).</div>
        <div class="step">By Pythagoras Theorem:</div>
        <div class="step">\\(AC = \\sqrt{AB^2 - BC^2} = \\sqrt{29^2 - 21^2}\\)</div>
        <div class="step">\\(= \\sqrt{(29-21)(29+21)}\\)</div>
        <div class="step">\\(= \\sqrt{8 \\times 50} = \\sqrt{400} = 20 \\text{ units}\\)</div>
        <div class="step">Now, \\(\\sin \\theta = \\frac{AC}{AB} = \\frac{20}{29}\\)</div>
        <div class="step">\\(\\cos \\theta = \\frac{BC}{AB} = \\frac{21}{29}\\)</div>

        <div class="step">(i) \\(\\cos^2 \\theta + \\sin^2 \\theta\\)</div>
        <div class="step">\\(= (\\frac{21}{29})^2 + (\\frac{20}{29})^2\\)</div>
        <div class="step">\\(= \\frac{441 + 400}{841} = \\frac{841}{841} = 1\\)</div>

        <div class="step">(ii) \\(\\cos^2 \\theta - \\sin^2 \\theta\\)</div>
        <div class="step">\\(= (\\frac{21}{29})^2 - (\\frac{20}{29})^2\\)</div>
        <div class="step">\\(= \\frac{441 - 400}{841} = \\frac{41}{841}\\)</div>
        <div class="final-answer">Therefore, the required values are 1 and \\(\\frac{41}{841}\\).</div>
    </div>

    <div class="content-box">
        <div class="question">Example 4. In a right triangle ABC, right-angled at B, if tan A = 1, then verify that 2
            sin A cos A = 1.</div>
        
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwb2x5Z29uIHBvaW50cz0iNTAsMjAgNTAsMTAwIDEzMCwxMDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwb2x5bGluZSBwb2ludHM9IjUwLDg1IDY1LDg1IDY1LDEwMCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjM1IiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD48dGV4dCB4PSIzNSIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pjx0ZXh0IHg9IjE0NSIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSI2MC4wIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjkwLjAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSIxMDAuMCIgeT0iNTAuMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oiaMjwvdGV4dD48L3N2Zz4=" alt="Triangle 45 deg">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(\\tan A = 1\\).</div>
        <div class="step">\\(\\frac{BC}{AB} = 1 \\Rightarrow BC = AB\\).</div>
        <div class="step">Let \\(AB = BC = k\\).</div>
        <div class="step">Hypotenuse \\(AC = \\sqrt{k^2 + k^2} = \\sqrt{2k^2} = k\\sqrt{2}\\)</div>
        <div class="step">\\(\\sin A = \\frac{BC}{AC} = \\frac{k}{k\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\)</div>
        <div class="step">\\(\\cos A = \\frac{AB}{AC} = \\frac{k}{k\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\)</div>
        <div class="step">LHS = \\(2 \\sin A \\cos A\\)</div>
        <div class="step">\\(= 2 (\\frac{1}{\\sqrt{2}})(\\frac{1}{\\sqrt{2}})\\)</div>
        <div class="step">\\(= 2 (\\frac{1}{2}) = 1\\) = RHS</div>
        <div class="final-answer">Hence Verified.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 5. In ∆ OPQ, right-angled at P, OP = 7 cm and OQ – PQ = 1 cm. Determine the values
            of sin Q and cos Q.</div>
       
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjA1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6d2hpdGU7IGJvcmRlcjoxcHggc29saWQgI2RkZDsiPjxwb2x5Z29uIHBvaW50cz0iNTAsMjAgNTAsMTIwIDE5MCwxMjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwb2x5bGluZSBwb2ludHM9IjUwLDEwNSA2NSwxMDUgNjUsMTIwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMzUiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RPC90ZXh0Pjx0ZXh0IHg9IjM1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPlA8L3RleHQ+PHRleHQgeD0iMjA1IiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPk88L3RleHQ+PHRleHQgeD0iMzAiIHk9IjcwLjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iYmxhY2siIHRleHQtYW5jaG9yPSJtaWRkbGUiPng8L3RleHQ+PHRleHQgeD0iMTIwLjAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NzwvdGV4dD48dGV4dCB4PSIxMzAuMCIgeT0iNjAuMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSt4PC90ZXh0Pjwvc3ZnPg==" alt="Triangle OPQ">
        <div class="solution-header">Solution:</div>
        <div class="step">Given \\(OP = 7 \\text{ cm}\\) and \\(OQ - PQ = 1 \\Rightarrow OQ = 1 + PQ\\).</div>
        <div class="step">By Pythagoras Theorem: <span class="formula">\\(OQ^2 = OP^2 + PQ^2\\)</span></div>
        <div class="step">\\((1 + PQ)^2 = 7^2 + PQ^2\\)</div>
        <div class="step">\\(1 + PQ^2 + 2PQ = 49 + PQ^2\\)</div>
        <div class="step">\\(2PQ = 48 \\Rightarrow PQ = 24 \\text{ cm}\\)</div>
        <div class="step">\\(OQ = 1 + 24 = 25 \\text{ cm}\\)</div>
        <div class="step">\\(\\sin Q = \\frac{OP}{OQ} = \\frac{7}{25}\\)</div>
        <div class="step">\\(\\cos Q = \\frac{PQ}{OQ} = \\frac{24}{25}\\)</div>
        <div class="final-answer">Therefore, the required values are \\(\\sin Q = \\frac{7}{25}, \\cos Q = \\frac{24}{25}\\).
        </div>
        <div class="content-box">
            <div class="question">Example 6. In ∆ ABC, right-angled at B, AB = 5 cm and ∠ACB = 30° (see Fig. 8.19).
                Determine
                the lengths of the sides BC and AC.</div>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCI+DQogIDwhLS0gVHJpYW5nbGUgQUJDLCBCIGlzIHJpZ2h0IGFuZ2xlLiBDIGlzIDMwIGRlZy4gQUIgPSA1Y20uIC0tPg0KICA8IS0tIExldCAxIHVuaXQgPSAyMHB4LiBBQiA9IDEwMHB4LiBCQyA9IDUqc3FydCgzKSB+IDguNjYgPSAxNzNweCAtLT4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmxhYmVsIHsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICANCiAgPHBhdGggZD0iTTUwLDE1MCBMNTAsNTAgTDIyMywxNTAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgDQogIDwhLS0gUmlnaHQgYW5nbGUgYXQgQig1MCwxNTApIC0tPg0KICA8cmVjdCB4PSI1MCIgeT0iMTQwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgLz4NCiAgDQogIDwhLS0gQW5nbGUgYXQgQyAtLT4NCiAgPHBhdGggZD0iTTE5MywxNTAgQTMwLDMwIDAgMCAwIDE5OCwxMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgLz4NCiAgPHRleHQgeD0iMTYwIiB5PSIxNDUiIGNsYXNzPSJsYWJlbCI+MzDCsDwvdGV4dD4NCg0KICA8IS0tIExhYmVscyAtLT4NCiAgPHRleHQgeD0iMzUiIHk9IjE1NSIgY2xhc3M9ImxhYmVsIj5CPC90ZXh0Pg0KICA8dGV4dCB4PSIzNSIgeT0iNDUiIGNsYXNzPSJsYWJlbCI+QTwvdGV4dD4NCiAgPHRleHQgeD0iMjMwIiB5PSIxNTUiIGNsYXNzPSJsYWJlbCI+QzwvdGV4dD4NCiAgDQogIDx0ZXh0IHg9IjIwIiB5PSIxMDAiIGNsYXNzPSJsYWJlbCI+NSBjbTwvdGV4dD4NCiAgDQo8L3N2Zz4NCg==" alt="Triangle ABC">
            <div class="solution-header">Solution:</div>
            <div class="step">Given \\(AB = 5 \\text{ cm}\\) and \\(\\angle ACB = 30^\\circ\\).</div>
            <div class="step">To find BC, we use tan C:</div>
            <div class="step">\\(\\tan C = \\frac{AB}{BC}\\)</div>
            <div class="step">\\(\\tan 30^\\circ = \\frac{5}{BC}\\)</div>
            <div class="step">\\(\\frac{1}{\\sqrt{3}} = \\frac{5}{BC}\\)</div>
            <div class="step">\\(\\Rightarrow BC = 5\\sqrt{3} \\text{ cm}\\).</div>
            <div class="step">To find AC, we use sin C:</div>
            <div class="step">\\(\\sin 30^\\circ = \\frac{AB}{AC}\\)</div>
            <div class="step">\\(\\frac{1}{2} = \\frac{5}{AC}\\)</div>
            <div class="step">\\(\\Rightarrow AC = 10 \\text{ cm}\\).</div>
            <div class="final-answer">Lengths are BC = \\(5\\sqrt{3}\\) cm and AC = 10 cm.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 7. In ∆ PQR, right-angled at Q (see Fig. 8.20), PQ = 3 cm and PR = 6 cm.
                Determine
                ∠QPR and ∠PRQ.</div>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCI+DQogIDwhLS0gVHJpYW5nbGUgUFFSLCBRIGlzIHJpZ2h0IGFuZ2xlLiBQUT0zY20sIFBSPTZjbS4gUiB3aWxsIGJlIDMwIGRlZy4gLS0+DQogIDwhLS0gU2NhbGUgMSB1bml0ID0gMjBweC4gUFE9NjBweC4gUFI9MTIwcHguIFFSPXNxcnQoMTIwXjIgLSA2MF4yKSA9IDEwNHB4LiAtLT4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmxhYmVsIHsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICANCiAgPCEtLSBRIGF0ICg1MCwgMTUwKSAtLT4NCiAgPCEtLSBQIGF0ICg1MCwgOTApIC0tPg0KICA8IS0tIFIgYXQgKDE1NCwgMTUwKSAtLT4NCiAgDQogIDxwYXRoIGQ9Ik01MCwxNTAgTDUwLDkwIEwxNTQsMTUwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+DQogIA0KICA8IS0tIFJpZ2h0IGFuZ2xlIGF0IFEgLS0+DQogIDxyZWN0IHg9IjUwIiB5PSIxNDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiAvPg0KDQogIDwhLS0gTGFiZWxzIC0tPg0KICA8dGV4dCB4PSIzNSIgeT0iMTU1IiBjbGFzcz0ibGFiZWwiPlE8L3RleHQ+DQogIDx0ZXh0IHg9IjM1IiB5PSI4NSIgY2xhc3M9ImxhYmVsIj5QPC90ZXh0Pg0KICA8dGV4dCB4PSIxNjAiIHk9IjE1NSIgY2xhc3M9ImxhYmVsIj5SPC90ZXh0Pg0KICANCiAgPHRleHQgeD0iMTUiIHk9IjEyMCIgY2xhc3M9ImxhYmVsIj4zIGNtPC90ZXh0Pg0KICA8dGV4dCB4PSIxMDAiIHk9IjExMCIgY2xhc3M9ImxhYmVsIj42IGNtPC90ZXh0Pg0KICANCjwvc3ZnPg0K" alt="Triangle PQR">
            <div class="solution-header">Solution:</div>
            <div class="step">Given \\(PQ = 3 \\text{ cm}\\) and \\(PR = 6 \\text{ cm}\\).</div>
            <div class="step">\\(\\sin R = \\frac{PQ}{PR} = \\frac{3}{6} = \\frac{1}{2}\\).</div>
            <div class="step">We know that \\(\\sin 30^\\circ = \\frac{1}{2}\\).</div>
            <div class="step">So, \\(\\angle PRQ = 30^\\circ\\).</div>
            <div class="step">In \\(\\triangle PQR\\), \\(\\angle Q = 90^\\circ\\).</div>
            <div class="step">\\(\\angle P + \\angle R = 90^\\circ\\)</div>
            <div class="step">\\(\\angle P + 30^\\circ = 90^\\circ\\)</div>
            <div class="step">\\(\\Rightarrow \\angle QPR = 60^\\circ\\).</div>
            <div class="final-answer">∠QPR = 60° and ∠PRQ = 30°.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 8. If \\(\\sin (A - B) = \\frac{1}{2}, \\cos (A + B) = \\frac{1}{2}, 0^\\circ < A +
                    B \\le 90^\\circ, A> B\\), find A and B.</div>
            <div class="solution-header">Solution:</div>
            <div class="step">Given \\(\\sin (A - B) = \\frac{1}{2}\\).</div>
            <div class="step">Since \\(\\sin 30^\\circ = \\frac{1}{2}\\), we have \\(A - B = 30^\\circ\\) ...(1)</div>
            <div class="step">Given \\(\\cos (A + B) = \\frac{1}{2}\\).</div>
            <div class="step">Since \\(\\cos 60^\\circ = \\frac{1}{2}\\), we have \\(A + B = 60^\\circ\\) ...(2)</div>
            <div class="step">Adding (1) and (2):</div>
            <div class="step">\\((A - B) + (A + B) = 30^\\circ + 60^\\circ\\)</div>
            <div class="step">\\(2A = 90^\\circ \\Rightarrow A = 45^\\circ\\).</div>
            <div class="step">Substituting A into (2):</div>
            <div class="step">\\(45^\\circ + B = 60^\\circ \\Rightarrow B = 15^\\circ\\).</div>
            <div class="final-answer">A = 45° and B = 15°.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 9. Express the ratios cos A, tan A and sec A in terms of sin A.</div>
            <div class="solution-header">Solution:</div>
            <div class="step">We use the identity \\(\\cos^2 A + \\sin^2 A = 1\\).</div>
            <div class="step">\\(\\cos^2 A = 1 - \\sin^2 A\\)</div>
            <div class="step">\\(\\cos A = \\pm \\sqrt{1 - \\sin^2 A}\\). Since A is acute, \\(\\cos A = \\sqrt{1 - \\sin^2 A}\\).
            </div>
            <div class="step">Now, \\(\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\sin A}{\\sqrt{1 - \\sin^2 A}}\\).</div>
            <div class="step">And, \\(\\sec A = \\frac{1}{\\cos A} = \\frac{1}{\\sqrt{1 - \\sin^2 A}}\\).</div>
            <div class="final-answer">Values expressed in terms of sin A.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 10. Prove that \\(\\sec A (1 - \\sin A)(\\sec A + \\tan A) = 1\\).</div>
            <div class="solution-header">Solution:</div>
            <div class="step">LHS = \\(\\sec A (1 - \\sin A)(\\sec A + \\tan A)\\)</div>
            <div class="step">\\(= \\frac{1}{\\cos A}(1 - \\sin A)\\left(\\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A}\\right)\\)
            </div>
            <div class="step">\\(= \\frac{(1 - \\sin A)}{\\cos A} \\cdot \\frac{(1 + \\sin A)}{\\cos A}\\)</div>
            <div class="step">\\(= \\frac{1^2 - \\sin^2 A}{\\cos^2 A}\\)</div>
            <div class="step">Using identity \\(1 - \\sin^2 A = \\cos^2 A\\):</div>
            <div class="step">\\(= \\frac{\\cos^2 A}{\\cos^2 A} = 1\\) = RHS.</div>
            <div class="final-answer">Hence Proved.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 11. Prove that \\(\\frac{\\cot A - \\cos A}{\\cot A + \\cos A} = \\frac{\\text{cosec }
                A -
                1}{\\text{cosec } A + 1}\\).</div>
            <div class="solution-header">Solution:</div>
            <div class="step">LHS = \\(\\frac{\\cot A - \\cos A}{\\cot A + \\cos A}\\)</div>
            <div class="step">\\(= \\frac{\\frac{\\cos A}{\\sin A} - \\cos A}{\\frac{\\cos A}{\\sin A} + \\cos A}\\)</div>
            <div class="step">Factor out \\(\\cos A\\) from numerator and denominator:</div>
            <div class="step">\\(= \\frac{\\cos A(\\frac{1}{\\sin A} - 1)}{\\cos A(\\frac{1}{\\sin A} + 1)}\\)</div>
            <div class="step">\\(= \\frac{\\frac{1}{\\sin A} - 1}{\\frac{1}{\\sin A} + 1}\\)</div>
            <div class="step">\\(= \\frac{\\text{cosec } A - 1}{\\text{cosec } A + 1}\\) = RHS.</div>
            <div class="final-answer">Hence Proved.</div>
        </div>

        <div class="content-box">
            <div class="question">Example 12. Prove that \\(\\frac{\\sin \\theta - \\cos \\theta + 1}{\\sin \\theta + \\cos
                \\theta - 1} =
                \\frac{1}{\\sec \\theta - \\tan \\theta}\\), using the identity \\(\\sec^2 \\theta = 1 + \\tan^2 \\theta\\).</div>
            <div class="solution-header">Solution:</div>
            <div class="step">Divide numerator and denominator of LHS by \\(\\cos \\theta\\):</div>
            <div class="step">LHS = \\(\\frac{\\tan \\theta - 1 + \\sec \\theta}{\\tan \\theta + 1 - \\sec \\theta} = \\frac{(\\tan
                \\theta +
                \\sec \\theta) - 1}{(\\tan \\theta - \\sec \\theta) + 1}\\)</div>
            <div class="step">Substitute \\(1 = \\sec^2 \\theta - \\tan^2 \\theta\\) in the numerator:</div>
            <div class="step">Numerator = \\((\\tan \\theta + \\sec \\theta) - (\\sec^2 \\theta - \\tan^2 \\theta)\\)</div>
            <div class="step">\\(= (\\sec \\theta + \\tan \\theta) - [(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan
                \\theta)]\\)
            </div>
            <div class="step">\\(= (\\sec \\theta + \\tan \\theta)(1 - (\\sec \\theta - \\tan \\theta))\\)</div>
            <div class="step">\\(= (\\sec \\theta + \\tan \\theta)(1 - \\sec \\theta + \\tan \\theta)\\)</div>
            <div class="step">Denominator = \\(\\tan \\theta - \\sec \\theta + 1\\).</div>
            <div class="step">So, LHS = \\(\\sec \\theta + \\tan \\theta\\).</div>
            <div class="step">Now, converting to RHS form:</div>
            <div class="step">Multiply and divide by \\((\\sec \\theta - \\tan \\theta)\\):</div>
            <div class="step">\\(= \\frac{(\\sec \\theta + \\tan \\theta)(\\sec \\theta - \\tan \\theta)}{\\sec \\theta - \\tan
                \\theta}\\)
            </div>
            <div class="step">\\(= \\frac{\\sec^2 \\theta - \\tan^2 \\theta}{\\sec \\theta - \\tan \\theta}\\)</div>
            <div class="step">\\(= \\frac{1}{\\sec \\theta - \\tan \\theta}\\) = RHS.</div>
            <div class="final-answer">Hence Proved.</div>
        </div>

</html>`
    },
};
