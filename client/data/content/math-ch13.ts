import { ChapterContent } from "../chapterContent";

export const mathCh13: ChapterContent = {
    id: "ch13",
    number: 13,
    title: "Statistics",
    introduction: "In this chapter, we delve into the world of data analysis. We focus on Measures of Central Tendency, learning how to calculate the Mean, Mode, and Median for grouped data using various mathematical techniques.",
    definitions: [
        { term: "Mean", description: "The average value of a data set, calculated as the sum of all values divided by the total number of values." },
        { term: "Mode", description: "The value that appears most frequently in a data set." },
        { term: "Median", description: "The middle value in a distribution when data is arranged in ascending or descending order." }
    ],
    keyPoints: [
        "Mean can be calculated using Direct, Assumed Mean, or Step-Deviation methods.",
        "The empirical relationship between the three measures is: 3 Median = Mode + 2 Mean.",
        "Cumulative frequency (cf) is essential for calculating the Median of grouped data."
    ],
    formulas: [
        { name: "Direct Mean", formula: "x̄ = (Σ fᵢxᵢ) / (Σ fᵢ)" },
        { name: "Mode (Grouped)", formula: "l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h" },
        { name: "Median (Grouped)", formula: "l + [(n/2 - cf) / f] × h" }
    ],
    crux: [
        "Always identify the modal class (highest frequency) and median class (first class where cf ≥ n/2).",
        "Step-deviation method is preferred when class intervals (h) are large to simplify arithmetic.",
        "Remember that the Mode is a position-based average, while Mean is a value-based average."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 13.1", questions: [] },
        { id: "exercise2", name: "Exercise 13.2", questions: [] },
        { id: "exercise3", name: "Exercise 13.3", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: [
        {
            "id": "mcq1",
            "question": "<span style=\"font-weight: normal;\">The relationship between Mean, Median and Mode for a moderately skewed distribution is:</span>",
            "options": [
                "(A) Mode = 2 Median - 3 Mean",
                "(B) Mode = Median - 2 Mean",
                "(C) Mode = 3 Median - 2 Mean",
                "(D) Mode = 2 Mean - 3 Median"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq2",
            "question": "<span style=\"font-weight: normal;\">The mode of the following data: 2, 6, 4, 5, 0, 2, 1, 3, 2, 3 is:</span>",
            "options": [
                "(A) 2",
                "(B) 3",
                "(C) 4",
                "(D) 5"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq3",
            "question": "<span style=\"font-weight: normal;\">If the mean of the following distribution is 6, find the value of p: x: 2 4 6 10 p+5; f: 3 2 3 1 2</span>",
            "options": [
                "(A) 6",
                "(B) 7",
                "(C) 5",
                "(D) 4"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq4",
            "question": "<span style=\"font-weight: normal;\">The algebraic sum of deviations of a frequency distribution from its mean is:</span>",
            "options": [
                "(A) Always positive",
                "(B) Always negative",
                "(C) Zero",
                "(D) Non-zero"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq5",
            "question": "<span style=\"font-weight: normal;\">In the formula x̄ = a + (Σfᵢuᵢ/Σfᵢ) × h, uᵢ is:</span>",
            "options": [
                "(A) xᵢ - a",
                "(B) (xᵢ - a) / h",
                "(C) (a - xᵢ) / h",
                "(D) h(xᵢ - a)"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq6",
            "question": "<span style=\"font-weight: normal;\">While computing mean of grouped data, we assume that the frequencies are:</span>",
            "options": [
                "(A) centred at the upper limits of the classes",
                "(B) centred at the lower limits of the classes",
                "(C) centred at the classmarks of the classes",
                "(D) evenly distributed"
            ],
            "correctAnswer": "C"
        },
        {
            "id": "mcq7",
            "question": "<span style=\"font-weight: normal;\">Construction of a cumulative frequency table is useful in determining the:</span>",
            "options": [
                "(A) Mean",
                "(B) Median",
                "(C) Mode",
                "(D) All of these"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq8",
            "question": "<span style=\"font-weight: normal;\">Which of the following cannot be determined graphically?</span>",
            "options": [
                "(A) Mean",
                "(B) Median",
                "(C) Mode",
                "(D) None of these"
            ],
            "correctAnswer": "A"
        },
        {
            "id": "mcq9",
            "question": "<span style=\"font-weight: normal;\">The abscissa of the point of intersection of the less than type and of the more than type cumulative frequency curves of a grouped data gives its:</span>",
            "options": [
                "(A) Mean",
                "(B) Median",
                "(C) Mode",
                "(D) Range"
            ],
            "correctAnswer": "B"
        },
        {
            "id": "mcq10",
            "question": "<span style=\"font-weight: normal;\">If the mean of first n natural numbers is 5n/9, then n = ?</span>",
            "options": [
                "(A) 9",
                "(B) 10",
                "(C) 11",
                "(D) 12"
            ],
            "correctAnswer": "A"
        }
    ],
    summary: [
        "Mastered the calculation of Mean using multiple methods.",
        "Learned to identify the Modal and Median class for grouped frequency distributions.",
        "Understood the relationship between Mean, Median, and Mode."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics - Overview</title>
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
            border-bottom: 2px solid #42A5F5;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #42A5F5;
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
            color: #42A5F5;
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #42A5F5 !important; }
  .true-text { color: #42A5F5 !important; }
  .false-text { color: #42A5F5 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #42A5F5 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <div class="step">We study the numerical representation of data. We will focus on three measures of central
            tendency: Mean, Mode, and Median of grouped data.</div>
        <img src="stats_overview.svg" alt="Statistics Overview">
    </div>

    <div class="content-box">
        <div class="section-title">2. Mean of Grouped Data</div>
        <div class="formula-box">
            Direct Method:<br>
            x̄ = (Σ fᵢxᵢ) / (Σ fᵢ)<br><br>
            Assumed Mean Method:<br>
            x̄ = a + (Σ fᵢdᵢ) / (Σ fᵢ), where dᵢ = xᵢ - a<br><br>
            Step-Deviation Method:<br>
            x̄ = a + [(Σ fᵢuᵢ) / (Σ fᵢ)] × h, where uᵢ = (xᵢ - a)/h
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">3. Mode of Grouped Data</div>
        <div class="formula-box">
            Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h<br>
            Where:<br>
            l = lower limit of modal class<br>
            f₁ = frequency of modal class<br>
            f₀ = frequency of class preceding modal class<br>
            f₂ = frequency of class succeeding modal class<br>
            h = class size
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">4. Median of Grouped Data</div>
        <div class="formula-box">
            Median = l + [(n/2 - cf) / f] × h<br>
            Where:<br>
            l = lower limit of median class<br>
            n = number of observations<br>
            cf = cumulative frequency of class preceding median class<br>
            f = frequency of median class<br>
            h = class size
        </div>
    </div>

    <div class="content-box">
        <div class="section-title">5. Empirical Relationship</div>
        <div class="formula-box">
            3 Median = Mode + 2 Mean
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
    <title>Statistics - Exercise 13.1 (Mean)</title>
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
            border-bottom: 2px solid #42A5F5;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #42A5F5;
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
            color: #42A5F5;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #42A5F5;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        table { width: auto; min-width: 60%; margin: 15px auto; border-collapse: collapse; font-family: 'Nunito', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: white; border-radius: 4px; overflow: hidden; }

        th, td { border: 1px solid #ddd; padding: 5px; text-align: center; font-size: 0.95em; }

        th { background-color: #42A5F5; color: #42A5F5; font-weight: normal ; padding: 8px; border: 1px solid #ddd; text-align: center; }
    


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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #42A5F5 !important; }
  .true-text { color: #42A5F5 !important; }
  .false-text { color: #42A5F5 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #42A5F5 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. A survey was conducted by a group of students... regarding the number of plants in 20
            houses... Find the mean number of plants. Which method did you use and why?</div>
        <img src="ex13_1_q1.svg" alt="Plants Data">
        <div class="solution-header">Solution:</div>
        <div class="step">We use Direct Method as values of f and x are small.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi (mid)</th>
                <th>fixi</th>
            </tr>
            <tr>
                <td>0-2</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2-4</td>
                <td>2</td>
                <td>3</td>
                <td>6</td>
            </tr>
            <tr>
                <td>4-6</td>
                <td>1</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6-8</td>
                <td>5</td>
                <td>7</td>
                <td>35</td>
            </tr>
            <tr>
                <td>8-10</td>
                <td>6</td>
                <td>9</td>
                <td>54</td>
            </tr>
            <tr>
                <td>10-12</td>
                <td>2</td>
                <td>11</td>
                <td>22</td>
            </tr>
            <tr>
                <td>12-14</td>
                <td>3</td>
                <td>13</td>
                <td>39</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>20</th>
                <th></th>
                <th>162</th>
            </tr>
        </table>
        <div class="step">Mean x̄ = Σfixi / Σfi = 162 / 20 = 8.1.</div>
        <div class="final-answer">Mean = 8.1 plants.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Consider the following distribution of daily wages of 50 workers... Find the mean daily
            wages.</div>
        <img src="ex13_1_q2.svg" alt="Wages Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Using Step Deviation Method. Let a = 550, h = 20.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>di=xi-a</th>
                <th>ui=di/h</th>
                <th>fiui</th>
            </tr>
            <tr>
                <td>500-520</td>
                <td>12</td>
                <td>510</td>
                <td>-40</td>
                <td>-2</td>
                <td>-24</td>
            </tr>
            <tr>
                <td>520-540</td>
                <td>14</td>
                <td>530</td>
                <td>-20</td>
                <td>-1</td>
                <td>-14</td>
            </tr>
            <tr>
                <td>540-560</td>
                <td>8</td>
                <td>550</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>560-580</td>
                <td>6</td>
                <td>570</td>
                <td>20</td>
                <td>1</td>
                <td>6</td>
            </tr>
            <tr>
                <td>580-600</td>
                <td>10</td>
                <td>590</td>
                <td>40</td>
                <td>2</td>
                <td>20</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>50</th>
                <th></th>
                <th></th>
                <th></th>
                <th>-12</th>
            </tr>
        </table>
        <div class="step">Mean x̄ = a + (Σfiui / Σfi) × h</div>
        <div class="step">= 550 + (-12/50) × 20</div>
        <div class="step">= 550 - 4.8 = 545.2.</div>
        <div class="final-answer">Mean Daily Wages = ₹ 545.20.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The following distribution shows daily pocket allowance... The mean pocket allowance is
            ₹ 18. Find the missing frequency f.</div>
        <img src="ex13_1_q3.svg" alt="Missing Frequency Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Using Direct Method. Mean = 18.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>fixi</th>
            </tr>
            <tr>
                <td>11-13</td>
                <td>7</td>
                <td>12</td>
                <td>84</td>
            </tr>
            <tr>
                <td>13-15</td>
                <td>6</td>
                <td>14</td>
                <td>84</td>
            </tr>
            <tr>
                <td>15-17</td>
                <td>9</td>
                <td>16</td>
                <td>144</td>
            </tr>
            <tr>
                <td>17-19</td>
                <td>13</td>
                <td>18</td>
                <td>234</td>
            </tr>
            <tr>
                <td>19-21</td>
                <td>f</td>
                <td>20</td>
                <td>20f</td>
            </tr>
            <tr>
                <td>21-23</td>
                <td>5</td>
                <td>22</td>
                <td>110</td>
            </tr>
            <tr>
                <td>23-25</td>
                <td>4</td>
                <td>24</td>
                <td>96</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>44+f</th>
                <th></th>
                <th>752+20f</th>
            </tr>
        </table>
        <div class="step">Mean = Σfixi / Σfi => 18 = (752 + 20f) / (44 + f).</div>
        <div class="step">18(44 + f) = 752 + 20f</div>
        <div class="step">792 + 18f = 752 + 20f</div>
        <div class="step">40 = 2f => f = 20.</div>
        <div class="final-answer">Missing frequency f = 20.</div>
    </div>

    <div class="content-box">
        <div class="question">4. Thirty women were examined... find the mean heart beats per minute.</div>
        <img src="ex13_1_q4.svg" alt="Heartbeat Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Using Step Deviation Method. a = 75.5, h = 3.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>ui</th>
                <th>fiui</th>
            </tr>
            <tr>
                <td>65-68</td>
                <td>2</td>
                <td>66.5</td>
                <td>-3</td>
                <td>-6</td>
            </tr>
            <tr>
                <td>68-71</td>
                <td>4</td>
                <td>69.5</td>
                <td>-2</td>
                <td>-8</td>
            </tr>
            <tr>
                <td>71-74</td>
                <td>3</td>
                <td>72.5</td>
                <td>-1</td>
                <td>-3</td>
            </tr>
            <tr>
                <td>74-77</td>
                <td>8</td>
                <td>75.5</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>77-80</td>
                <td>7</td>
                <td>78.5</td>
                <td>1</td>
                <td>7</td>
            </tr>
            <tr>
                <td>80-83</td>
                <td>4</td>
                <td>81.5</td>
                <td>2</td>
                <td>8</td>
            </tr>
            <tr>
                <td>83-86</td>
                <td>2</td>
                <td>84.5</td>
                <td>3</td>
                <td>6</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>30</th>
                <th></th>
                <th></th>
                <th>4</th>
            </tr>
        </table>
        <div class="step">Mean = 75.5 + (4/30) × 3 = 75.5 + 0.4 = 75.9.</div>
        <div class="final-answer">Mean = 75.9 beats/min.</div>
    </div>

    <div class="content-box">
        <div class="question">5. In a retail market, fruit vendors were selling mangoes... kept in packing boxes. Find
            the mean number of mangoes.</div>
        <img src="ex13_1_q5.svg" alt="Mangoes Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Classes are discontinuous (50-52, 53-55). Make continuous (49.5-52.5). However, for mean, 'xi'
            remains same.</div>
        <div class="step">Step Deviation. a = 57, h = 3.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>ui</th>
                <th>fiui</th>
            </tr>
            <tr>
                <td>50-52</td>
                <td>15</td>
                <td>51</td>
                <td>-2</td>
                <td>-30</td>
            </tr>
            <tr>
                <td>53-55</td>
                <td>110</td>
                <td>54</td>
                <td>-1</td>
                <td>-110</td>
            </tr>
            <tr>
                <td>56-58</td>
                <td>135</td>
                <td>57</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>59-61</td>
                <td>115</td>
                <td>60</td>
                <td>1</td>
                <td>115</td>
            </tr>
            <tr>
                <td>62-64</td>
                <td>25</td>
                <td>63</td>
                <td>2</td>
                <td>50</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>400</th>
                <th></th>
                <th></th>
                <th>25</th>
            </tr>
        </table>
        <div class="step">Mean = 57 + (25/400) × 3 = 57 + 0.1875 = 57.19.</div>
        <div class="final-answer">Mean = 57.19 mangoes.</div>
    </div>

    <div class="content-box">
        <div class="question">6. The table below shows the daily expenditure on food of 25 households... Find the mean
            daily expenditure.</div>
        <img src="ex13_1_q6.svg" alt="Expenditure Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Step Deviation. a = 225, h = 50.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>ui</th>
                <th>fiui</th>
            </tr>
            <tr>
                <td>100-150</td>
                <td>4</td>
                <td>125</td>
                <td>-2</td>
                <td>-8</td>
            </tr>
            <tr>
                <td>150-200</td>
                <td>5</td>
                <td>175</td>
                <td>-1</td>
                <td>-5</td>
            </tr>
            <tr>
                <td>200-250</td>
                <td>12</td>
                <td>225</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>250-300</td>
                <td>2</td>
                <td>275</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>300-350</td>
                <td>2</td>
                <td>325</td>
                <td>2</td>
                <td>4</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>25</th>
                <th></th>
                <th></th>
                <th>-7</th>
            </tr>
        </table>
        <div class="step">Mean = 225 + (-7/25) × 50 = 225 - 14 = 211.</div>
        <div class="final-answer">Mean = ₹ 211.</div>
    </div>

    <div class="content-box">
        <div class="question">7. To find out the concentration of SO2 in the air... find the mean concentration.</div>
        <img src="ex13_1_q7.svg" alt="SO2 Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Direct Method looks manageable with decimals. Or Step Deviation.</div>
        <div class="step">Let's use Direct Method.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>fixi</th>
            </tr>
            <tr>
                <td>0.00-0.04</td>
                <td>4</td>
                <td>0.02</td>
                <td>0.08</td>
            </tr>
            <tr>
                <td>0.04-0.08</td>
                <td>9</td>
                <td>0.06</td>
                <td>0.54</td>
            </tr>
            <tr>
                <td>0.08-0.12</td>
                <td>9</td>
                <td>0.10</td>
                <td>0.90</td>
            </tr>
            <tr>
                <td>0.12-0.16</td>
                <td>2</td>
                <td>0.14</td>
                <td>0.28</td>
            </tr>
            <tr>
                <td>0.16-0.20</td>
                <td>4</td>
                <td>0.18</td>
                <td>0.72</td>
            </tr>
            <tr>
                <td>0.20-0.24</td>
                <td>2</td>
                <td>0.22</td>
                <td>0.44</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>30</th>
                <th></th>
                <th>2.96</th>
            </tr>
        </table>
        <div class="step">Mean = 2.96 / 30 = 0.0986... ≈ 0.099 ppm.</div>
        <div class="final-answer">Mean = 0.099 ppm.</div>
    </div>

    <div class="content-box">
        <div class="question">8. A class teacher has the following absentee record... Find the mean number of days.
        </div>
        <img src="ex13_1_q8.svg" alt="Absentee Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Class sizes are unequal (6, 4, 4, 6, 8, 10, 2). Use Direct Method.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>fixi</th>
            </tr>
            <tr>
                <td>0-6</td>
                <td>11</td>
                <td>3</td>
                <td>33</td>
            </tr>
            <tr>
                <td>6-10</td>
                <td>10</td>
                <td>8</td>
                <td>80</td>
            </tr>
            <tr>
                <td>10-14</td>
                <td>7</td>
                <td>12</td>
                <td>84</td>
            </tr>
            <tr>
                <td>14-20</td>
                <td>4</td>
                <td>17</td>
                <td>68</td>
            </tr>
            <tr>
                <td>20-28</td>
                <td>4</td>
                <td>24</td>
                <td>96</td>
            </tr>
            <tr>
                <td>28-38</td>
                <td>3</td>
                <td>33</td>
                <td>99</td>
            </tr>
            <tr>
                <td>38-40</td>
                <td>1</td>
                <td>39</td>
                <td>39</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>40</th>
                <th></th>
                <th>499</th>
            </tr>
        </table>
        <div class="step">Mean = 499 / 40 = 12.475.</div>
        <div class="final-answer">Mean = 12.48 days.</div>
    </div>

    <div class="content-box">
        <div class="question">9. The following table gives the literacy rate... Find the mean literacy rate.</div>
        <img src="ex13_1_q9.svg" alt="Literacy Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Step Deviation. a = 70, h = 10.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>fi</th>
                <th>xi</th>
                <th>ui</th>
                <th>fiui</th>
            </tr>
            <tr>
                <td>45-55</td>
                <td>3</td>
                <td>50</td>
                <td>-2</td>
                <td>-6</td>
            </tr>
            <tr>
                <td>55-65</td>
                <td>10</td>
                <td>60</td>
                <td>-1</td>
                <td>-10</td>
            </tr>
            <tr>
                <td>65-75</td>
                <td>11</td>
                <td>70</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>75-85</td>
                <td>8</td>
                <td>80</td>
                <td>1</td>
                <td>8</td>
            </tr>
            <tr>
                <td>85-95</td>
                <td>3</td>
                <td>90</td>
                <td>2</td>
                <td>6</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>35</th>
                <th></th>
                <th></th>
                <th>-2</th>
            </tr>
        </table>
        <div class="step">Mean = 70 + (-2/35) × 10 = 70 - 0.57 = 69.43.</div>
        <div class="final-answer">Mean = 69.43 %.</div>
    </div>

</body>

</html>`,
        exercise2: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics - Exercise 13.2 (Mode)</title>
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
            border-bottom: 2px solid #42A5F5;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #42A5F5;
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
            color: #42A5F5;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #42A5F5;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        .formula {
            background: #e0f2f1;
            padding: 5px;
            border-radius: 4px;
            font-family: monospace;
            display: inline-block;
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #42A5F5 !important; }
  .true-text { color: #42A5F5 !important; }
  .false-text { color: #42A5F5 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #42A5F5 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. The following table shows the ages of the patients admitted in a hospital during a
            year... Find the mode and the mean of the data given above.</div>
        <img src="ex13_2_q1.svg" alt="Patient Ages Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">For Mode: Maximum frequency is 23 (Class 35-45).</div>
        <div class="step">Modal Class = 35-45.</div>
        <div class="step">l = 35, h = 10, f₁ = 23, f₀ = 21, f₂ = 14.</div>
        <div class="formula">Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h</div>
        <div class="step">= 35 + [(23 - 21)/(46 - 21 - 14)] × 10</div>
        <div class="step">= 35 + [2/11] × 10 = 35 + 1.81 = 36.8.</div>
        <div class="step">For Mean (Step Deviation): Mean = 35.37 years.</div>
        <div class="final-answer">Mode = 36.8 years, Mean = 35.37 years.</div>
    </div>

    <div class="content-box">
        <div class="question">2. The following data gives the information on the observed lifetimes (in hours) of 225
            electrical components... Determine the modal lifetimes of the components.</div>
        <img src="ex13_2_q2.svg" alt="Component Lifetimes Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">Max frequency is 61 (Class 60-80).</div>
        <div class="step">l = 60, h = 20, f₁ = 61, f₀ = 52, f₂ = 38.</div>
        <div class="step">Mode = 60 + [(61 - 52)/(122 - 52 - 38)] × 20</div>
        <div class="step">= 60 + [9 / 32] × 20</div>
        <div class="step">= 60 + 5.625 = 65.625.</div>
        <div class="final-answer">Modal Lifetime = 65.625 hours.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The following data gives the distribution of total monthly household expenditure of 200
            families... Find the modal monthly expenditure of the families. Also, find the mean monthly expenditure.
        </div>
        <img src="ex13_2_q3.svg" alt="Household Expenditure Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">For Mode: Max freq = 40 (Class 1500-2000).</div>
        <div class="step">Mode = 1500 + [(40-24)/(80-24-33)] × 500</div>
        <div class="step">= 1500 + [16/23] × 500 = 1500 + 347.83 = 1847.83.</div>
        <div class="step">For Mean: Using Step Deviation, Mean = 2662.5.</div>
        <div class="final-answer">Mode = ₹ 1847.83, Mean = ₹ 2662.50.</div>
    </div>

    <div class="content-box">
        <div class="question">4. The following distribution gives the state-wise teacher-student ratio... Find the mode
            and mean of this data.</div>
        <img src="ex13_2_q4.svg" alt="Teacher Ratio Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">Mode: Max freq = 10 (Class 30-35).</div>
        <div class="step">Mode = 30 + [(10-9)/(20-9-3)] × 5</div>
        <div class="step">= 30 + [1/8] × 5 = 30 + 0.625 = 30.6.</div>
        <div class="step">Mean = 29.2.</div>
        <div class="final-answer">Mode = 30.6, Mean = 29.2.</div>
    </div>

    <div class="content-box">
        <div class="question">5. The given distribution shows the number of runs scored by some top batsmen of the world
            in one-day international cricket matches. Find the mode of the data.</div>
        <img src="ex13_2_q5.svg" alt="Batsmen Runs Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">Max freq = 18 (Class 4000-5000).</div>
        <div class="step">Mode = 4000 + [(18 - 4)/(36 - 4 - 9)] × 1000</div>
        <div class="step">= 4000 + [14/23] × 1000</div>
        <div class="step">= 4000 + 608.69 = 4608.7.</div>
        <div class="final-answer">Mode = 4608.7 runs.</div>
    </div>

    <div class="content-box">
        <div class="question">6. A student noted the number of cars passing through a spot on a road for 100 periods
            each of 3 minutes and summarised it in the table given below. Find the mode of the data.</div>
        <img src="ex13_2_q6.svg" alt="Car Data Chart">
        <div class="solution-header">Solution:</div>
        <div class="step">Max freq = 20 (Class 40-50).</div>
        <div class="step">Mode = 40 + [(20-12)/(40-12-11)] × 10</div>
        <div class="step">= 40 + [8/17] × 10 = 40 + 4.7 = 44.7.</div>
        <div class="final-answer">Mode = 44.7 cars.</div>
    </div>

</body>

</html>`,
        exercise3: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics - Exercise 13.3 (Median)</title>
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
            border-bottom: 2px solid #42A5F5;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #42A5F5;
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
            color: #42A5F5;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #42A5F5;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        table { width: auto; min-width: 60%; margin: 15px auto; border-collapse: collapse; font-family: 'Nunito', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: white; border-radius: 4px; overflow: hidden; }

        th, td { border: 1px solid #ddd; padding: 5px; text-align: center; font-size: 0.95em; }

        th { background-color: #42A5F5; color: #42A5F5; font-weight: normal ; padding: 8px; border: 1px solid #ddd; text-align: center; }
    


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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #42A5F5 !important; }
  .true-text { color: #42A5F5 !important; }
  .false-text { color: #42A5F5 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #42A5F5 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">1. The following frequency distribution gives the monthly consumption of electricity of 68
            consumers... Find the median, mean and mode of the data and compare them.</div>
        <img src="ex13_3_q1.svg" alt="Cumulative Frequency Curve">
        <div class="solution-header">Solution:</div>
        <div class="step">Median:</div>
        <table>
            <tr>
                <th>Class</th>
                <th>Freq (f)</th>
                <th>Cum. Freq (cf)</th>
            </tr>
            <tr>
                <td>65-85</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>85-105</td>
                <td>5</td>
                <td>9</td>
            </tr>
            <tr>
                <td>105-125</td>
                <td>13</td>
                <td>22</td>
            </tr>
            <tr>
                <td>125-145</td>
                <td>20</td>
                <td>42</td>
            </tr>
            <tr>
                <td>145-165</td>
                <td>14</td>
                <td>56</td>
            </tr>
            <tr>
                <td>165-185</td>
                <td>8</td>
                <td>64</td>
            </tr>
            <tr>
                <td>185-205</td>
                <td>4</td>
                <td>68</td>
            </tr>
        </table>
        <div class="step">n = 68 => n/2 = 34.</div>
        <div class="step">Class containing cf=34 is 125-145 (since 42 > 34).</div>
        <div class="step">l = 125, cf = 22, f = 20, h = 20.</div>
        <div class="step">Median = 125 + [(34-22)/20] × 20</div>
        <div class="step">= 125 + 12 = 137 units.</div>
        <div class="step">Mean = 137.05 units. Mode = 135.76 units.</div>
        <div class="final-answer">Median = 137, Mean = 137.05, Mode = 135.76.</div>
    </div>

    <div class="content-box">
        <div class="question">2. If the median of the distribution given below is 28.5, find the values of x and y.
        </div>
        <img src="ex13_3_q2.svg" alt="Table Visual">
        <div class="solution-header">Solution:</div>
        <div class="step">Total n = 60.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>Freq</th>
                <th>cf</th>
            </tr>
            <tr>
                <td>0-10</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>10-20</td>
                <td>x</td>
                <td>5+x</td>
            </tr>
            <tr>
                <td>20-30</td>
                <td>20</td>
                <td>25+x</td>
            </tr>
            <tr>
                <td>30-40</td>
                <td>15</td>
                <td>40+x</td>
            </tr>
            <tr>
                <td>40-50</td>
                <td>y</td>
                <td>40+x+y</td>
            </tr>
            <tr>
                <td>50-60</td>
                <td>5</td>
                <td>45+x+y</td>
            </tr>
        </table>
        <div class="step">45+x+y = 60 => x+y = 15.</div>
        <div class="step">Median = 28.5. So Median Class is 20-30.</div>
        <div class="step">l = 20, f = 20, cf = 5+x, h = 10, n/2 = 30.</div>
        <div class="step">28.5 = 20 + [(30 - (5+x))/20] × 10</div>
        <div class="step">8.5 = (25-x)/2</div>
        <div class="step">17 = 25 - x => x = 8.</div>
        <div class="step">x+y = 15 => 8+y=15 => y = 7.</div>
        <div class="final-answer">x = 8, y = 7.</div>
    </div>

    <div class="content-box">
        <div class="question">3. A life insurance agent found the following data for distribution of ages... Calculate
            the median age.</div>
        <img src="ex13_3_q3.svg" alt="Cumulative Frequency">
        <div class="solution-header">Solution:</div>
        <div class="step">Values are "Below x". Convert to frequency distribution.</div>
        <table>
            <tr>
                <th>Class</th>
                <th>Below cf</th>
                <th>Freq (f)</th>
            </tr>
            <tr>
                <td>15-20</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>20-25</td>
                <td>6</td>
                <td>4</td>
            </tr>
            <tr>
                <td>25-30</td>
                <td>24</td>
                <td>18</td>
            </tr>
            <tr>
                <td>30-35</td>
                <td>45</td>
                <td>21</td>
            </tr>
            <tr>
                <td>35-40</td>
                <td>78</td>
                <td>33</td>
            </tr>
            <tr>
                <td>40-45</td>
                <td>89</td>
                <td>11</td>
            </tr>
            <tr>
                <td>45-50</td>
                <td>92</td>
                <td>3</td>
            </tr>
            <tr>
                <td>50-55</td>
                <td>98</td>
                <td>6</td>
            </tr>
            <tr>
                <td>55-60</td>
                <td>100</td>
                <td>2</td>
            </tr>
        </table>
        <div class="step">n = 100, n/2 = 50.</div>
        <div class="step">Median Class (cf > 50) is 35-40.</div>
        <div class="step">l = 35, cf = 45, f = 33, h = 5.</div>
        <div class="step">Median = 35 + [(50-45)/33] × 5</div>
        <div class="step">= 35 + (5/33) × 5 = 35 + 25/33 = 35 + 0.76.</div>
        <div class="final-answer">Median Age = 35.76 years.</div>
    </div>

    <div class="content-box">
        <div class="question">4. The lengths of 40 leaves of a plant are measured correct to the nearest millimetre...
            Find the median length of the leaves.</div>
        <img src="ex13_3_q4.svg" alt="Leaves Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Convert to continuous: 117.5-126.5 etc.</div>
        <div class="step">n = 40, n/2 = 20.</div>
        <div class="step">Median Class (144.5-153.5). cf = 17, f = 12. l = 144.5. h=9.</div>
        <div class="step">Median = 144.5 + [(20-17)/12] × 9</div>
        <div class="step">= 144.5 + (3/12) × 9 = 144.5 + 2.25 = 146.75.</div>
        <div class="final-answer">Median Length = 146.75 mm.</div>
    </div>

    <div class="content-box">
        <div class="question">5. The following table gives the distribution of the life time of 400 neon lamps... Find
            the median life time of a lamp.</div>
        <img src="ex13_3_q5.svg" alt="Lamps Data">
        <div class="solution-header">Solution:</div>
        <div class="step">n = 400, n/2 = 200.</div>
        <div class="step">Median Class 3000-3500. cf = 130, f = 86, l = 3000, h = 500.</div>
        <div class="step">Median = 3000 + [(200-130)/86] × 500</div>
        <div class="step">= 3000 + (70/86) × 500 = 3000 + 406.98.</div>
        <div class="final-answer">Median Lifetime = 3406.98 hours.</div>
    </div>

    <div class="content-box">
        <div class="question">6. 100 surnames were randomly picked from a local telephone directory... Determine the
            median number of letters in the surnames. Find the mean number of letters in the surnames? Also, find the
            modal size of the surnames.</div>
        <img src="ex13_3_q6.svg" alt="Surnames Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Median: n=100, n/2=50. Class 7-10 (cf=76, f=40). Median = 8.05.</div>
        <div class="step">Mean = 8.32.</div>
        <div class="step">Mode: Class 7-10 (f=40). Mode = 7.88.</div>
        <div class="final-answer">Median = 8.05, Mean = 8.32, Mode = 7.88.</div>
    </div>

    <div class="content-box">
        <div class="question">7. The distribution below gives the weights of 30 students of a class. Find the median
            weight of the students.</div>
        <img src="ex13_3_q7.svg" alt="Weight Data">
        <div class="solution-header">Solution:</div>
        <div class="step">n=30, n/2=15.</div>
        <div class="step">Median Class 55-60. cf=13, f=6, l=55, h=5.</div>
        <div class="step">Median = 55 + [(15-13)/6] × 5</div>
        <div class="step">= 55 + (2/6) × 5 = 55 + 1.666 = 56.67.</div>
        <div class="final-answer">Median Weight = 56.67 kg.</div>
    </div>

</body>

</html>`,
        examples: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics - Examples</title>
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
            border-bottom: 2px solid #42A5F5;
            padding-bottom: 10px;
            font-family: 'Nunito', sans-serif;
        }

        .logo {
            color: #42A5F5;
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
            color: #42A5F5;
            font-weight: normal ;
            margin-top: 10px;
            font-size: 1.2em;
        }

        

        .solution-header {
            color: #42A5F5;
            font-weight: normal ;
            margin-bottom: 5px;
        }

        table { width: auto; min-width: 60%; margin: 15px auto; border-collapse: collapse; font-family: 'Nunito', sans-serif; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: white; border-radius: 4px; overflow: hidden; }

        th, td { border: 1px solid #ddd; padding: 5px; text-align: center; font-size: 0.95em; }

        th { background-color: #42A5F5; color: #42A5F5; font-weight: normal ; padding: 8px; border: 1px solid #ddd; text-align: center; }
    


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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #42A5F5 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #42A5F5 !important; }
  .question { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #42A5F5 !important; text-align: justify !important; font-weight: normal !important; }
  .formula { color: #42A5F5 !important; }
  .true-text { color: #42A5F5 !important; }
  .false-text { color: #42A5F5 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #42A5F5 !important; font-weight: normal !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #42A5F5 !important; font-weight: normal !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
</head>

<body>

    

    <div class="content-box">
        <div class="question">Example 1. The marks obtained by 30 students of Class X of a certain school in a
            Mathematics paper consisting of 100 marks are presented in the table below. Find the mean of the marks
            obtained by the students.</div>
        <img src="example_1.svg" alt="Table Marks">
        <div class="solution-header">Solution:</div>
        <div class="step">Given marks and number of students (fi).</div>
        <div class="step">Σfi = 30. Σfixi = 1779.</div>
        <div class="step">Mean = 1779 / 30 = 59.3.</div>
        <div class="final-answer">Mean Marks = 59.3.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 2. The table below gives the percentage distribution of female teachers in the
            primary schools of rural areas of various states and union territories (U.T.) of India. Find the mean
            percentage of female teachers by all the three methods discussed in this section.</div>
        <img src="example_2.svg" alt="Teacher Percentage">
        <div class="solution-header">Solution:</div>
        <div class="step">Direct Method: Mean = 39.71.</div>
        <div class="step">Assumed Mean: a = 50. Mean = 39.71.</div>
        <div class="step">Step Deviation: a = 50, h = 10. Mean = 39.71.</div>
        <div class="final-answer">Mean Percentage = 39.71%.</div>
    </div>

    <div class="content-box">
        <div class="question">Example 3. A survey conducted on 20 households in a locality by a group of students
            resulted in the following frequency table for the number of family members in a household. Find the mode of
            this data.</div>
        <img src="example_3.svg" alt="Family Size Data">
        <div class="solution-header">Solution:</div>
        <div class="step">Mode Class is 3-5 (max freq 8).</div>
        <div class="step">l = 3, f1 = 8, f0 = 7, f2 = 2, h = 2.</div>
        <div class="step">Mode = 3 + [(8-7)/(16-7-2)] × 2</div>
        <div class="step">= 3 + (1/7) × 2 = 3 + 0.286 = 3.286.</div>
        <div class="final-answer">Mode Family Size = 3.286.</div>
    </div>

</body>

</html>`
    }
};
