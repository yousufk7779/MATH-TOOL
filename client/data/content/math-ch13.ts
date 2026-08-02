import { ChapterContent } from "../types";

export const mathCh13: ChapterContent = {
  id: "ch13",
  number: 13,
  title: "Statistics",
  isHtmlView: true,
  introduction:
    "Statistics is the science of collecting, organizing, analyzing, and interpreting data. In Class 10, we calculate Measures of Central Tendency (Mean, Mode, and Median) for grouped frequency distributions.",
  definitions: [
    { term: "Mean (x̄)", description: "The average value of a data set. Direct method: x̄ = Σfᵢxᵢ / Σfᵢ." },
    { term: "Mode", description: "The value having the maximum frequency in a distribution. Formula: l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h." },
    { term: "Median", description: "The middle-most observation of grouped data. Formula: l + [(n/2 - cf) / f] × h." },
    { term: "Empirical Relationship", description: "3 Median = Mode + 2 Mean (or Mode = 3 Median - 2 Mean)." }
  ],
  keyPoints: [
    "Class Mark (xᵢ) = (Upper Class Limit + Lower Class Limit) / 2.",
    "Modal Class: The class interval having the highest frequency.",
    "Median Class: The class interval whose cumulative frequency (cf) is just greater than or equal to n/2.",
    "Empirical Formula: Mode = 3 Median - 2 Mean."
  ],
  formulas: [
    { name: "Direct Mean", formula: "\bar{x} = \frac{\sum f_i x_i}{\sum f_i}" },
    { name: "Mode Formula", formula: "\text{Mode} = l + \left[ \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \right] \times h" },
    { name: "Median Formula", formula: "\text{Median} = l + \left[ \frac{\frac{n}{2} - cf}{f} \right] \times h" },
    { name: "Empirical Relation", formula: "3 \text{ Median} = \text{Mode} + 2 \text{ Mean}" }
  ],
  crux: [],
  exercises: [
    { id: "ex13-1", name: "Exercise 13.1", questions: [] },
    { id: "ex13-2", name: "Exercise 13.2", questions: [] },
    { id: "ex13-3", name: "Exercise 13.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #7E57C2; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(126, 87, 194, 0.05); border-left: 4px solid #7E57C2; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #7E57C2; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Statistics</div>
            <p class="content-text">Calculate Mean, Mode, and Median for grouped data using direct frequency tables, modal class formulas, and cumulative frequency tables.</p>
            <div class="point-box">
                <div class="point-item">Mean: x̄ = Σfᵢxᵢ / Σfᵢ</div>
                <div class="point-item">Mode: l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h</div>
                <div class="point-item">Median: l + [(n/2 - cf)/f] × h</div>
                <div class="point-item">Empirical Relation: Mode = 3 Median - 2 Mean</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex13-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #7E57C2; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #7E57C2; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #B388FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #7E57C2; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #B388FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(126, 87, 194, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(126, 87, 194, 0.3); padding: 8px 12px; text-align: center; color: #e0e0e0; }
            th { background: rgba(126, 87, 194, 0.15); color: #7E57C2; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. A survey was conducted by a group of students as a part of their environment awareness programme, in which they collected the following data regarding the number of plants in 20 houses in a locality. Find the mean number of plants per house:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table>
                            <tr><th>Number of plants</th><th>0 - 2</th><th>2 - 4</th><th>4 - 6</th><th>6 - 8</th><th>8 - 10</th><th>10 - 12</th><th>12 - 14</th></tr>
                            <tr><td>Number of houses (fᵢ)</td><td>1</td><td>2</td><td>1</td><td>5</td><td>6</td><td>2</td><td>3</td></tr>
                        </table>
                    </div>
                    <div class="sol-step">Solution (Direct Method):-</div>
                    <div class="sol-step">Class Mark xᵢ = <div class="frac"><span class="num">Lower Limit + Upper Limit</span><span class="den">2</span></div></div>
                    <div class="sol-step">1. 0 - 2 ➔ x₁ = 1 , f₁x₁ = 1 &times; 1 = 1</div>
                    <div class="sol-step">2. 2 - 4 ➔ x₂ = 3 , f₂x₂ = 2 &times; 3 = 6</div>
                    <div class="sol-step">3. 4 - 6 ➔ x₃ = 5 , f₃x₃ = 1 &times; 5 = 5</div>
                    <div class="sol-step">4. 6 - 8 ➔ x₄ = 7 , f₄x₄ = 5 &times; 7 = 35</div>
                    <div class="sol-step">5. 8 - 10 ➔ x₅ = 9 , f₅x₅ = 6 &times; 9 = 54</div>
                    <div class="sol-step">6. 10 - 12 ➔ x₆ = 11 , f₆x₆ = 2 &times; 11 = 22</div>
                    <div class="sol-step">7. 12 - 14 ➔ x₇ = 13 , f₇x₇ = 3 &times; 13 = 39</div>
                    <div class="sol-step">&Sigma;fᵢ = 20 &nbsp;;&nbsp; &Sigma;fᵢxᵢ = 1 + 6 + 5 + 35 + 54 + 22 + 39 = 162</div>
                    <div class="sol-step">Mean x̄ = <div class="frac"><span class="num">&Sigma;fᵢxᵢ</span><span class="den">&Sigma;fᵢ</span></div> = <div class="frac"><span class="num">162</span><span class="den">20</span></div> = 8.1</div>
                    <div class="sol-step"><span class="ans-highlight">Mean number of plants per house = 8.1 plants</span></div>
                </div>
            </div>
        </div>
    `,
    "ex13-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #7E57C2; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #7E57C2; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #B388FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #7E57C2; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #B388FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. The following table shows the ages of the patients admitted in a hospital during a year. Find the mode of the data:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Maximum frequency = 23 (occurs in class 35 - 45).</div>
                    <div class="sol-step">Modal Class = 35 - 45</div>
                    <div class="sol-step">Lower limit l = 35 &nbsp;,&nbsp; f₁ = 23 &nbsp;,&nbsp; f₀ = 21 &nbsp;,&nbsp; f₂ = 14 &nbsp;,&nbsp; h = 10</div>
                    <div class="sol-step">Mode = l + [<div class="frac"><span class="num">f₁ - f₀</span><span class="den">2f₁ - f₀ - f₂</span></div>] &times; h</div>
                    <div class="sol-step">= 35 + [<div class="frac"><span class="num">23 - 21</span><span class="den">2(23) - 21 - 14</span></div>] &times; 10</div>
                    <div class="sol-step">= 35 + [<div class="frac"><span class="num">2</span><span class="den">46 - 35</span></div>] &times; 10 = 35 + <div class="frac"><span class="num">20</span><span class="den">11</span></div> = 35 + 1.81 = 36.81</div>
                    <div class="sol-step"><span class="ans-highlight">Mode = 36.81 years</span></div>
                </div>
            </div>
        </div>
    `,
    "ex13-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #7E57C2; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #7E57C2; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #B388FF; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #7E57C2; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #B388FF; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. The following frequency distribution gives the monthly consumption of electricity of 68 consumers of a locality. Find the median of the data:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">n = 68 &rArr; <div class="frac"><span class="num">n</span><span class="den">2</span></div> = 34</div>
                    <div class="sol-step">Cumulative frequency just greater than 34 is 42 (occurs in class 125 - 145).</div>
                    <div class="sol-step">Median Class = 125 - 145</div>
                    <div class="sol-step">l = 125 &nbsp;,&nbsp; cf = 22 &nbsp;,&nbsp; f = 20 &nbsp;,&nbsp; h = 20</div>
                    <div class="sol-step">Median = l + [<div class="frac"><span class="num">n/2 - cf</span><span class="den">f</span></div>] &times; h</div>
                    <div class="sol-step">= 125 + [<div class="frac"><span class="num">34 - 22</span><span class="den">20</span></div>] &times; 20 = 125 + 12 = 137</div>
                    <div class="sol-step"><span class="ans-highlight">Median = 137 units</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m13-mcq-1", question: "The relationship between Mean, Median and Mode is:", options: ["Mode = 2 Median - 3 Mean", "Mode = Median - 2 Mean", "Mode = 3 Median - 2 Mean", "Mode = 2 Mean - 3 Median"], correctAnswer: "c", explanation: "Empirical formula is Mode = 3 Median - 2 Mean." },
    { id: "c10m13-mcq-2", question: "The mode of data: 2, 6, 4, 5, 0, 2, 1, 3, 2, 3 is:", options: ["2", "3", "4", "5"], correctAnswer: "a", explanation: "Number 2 occurs most frequently (3 times)." },
    { id: "c10m13-mcq-3", question: "The algebraic sum of deviations of a frequency distribution from its mean is:", options: ["Always positive", "Always negative", "Zero", "Non-zero"], correctAnswer: "c", explanation: "By definition of mean, Σ(xᵢ - x̄) = 0." },
    { id: "c10m13-mcq-4", question: "While computing mean of grouped data, frequencies are assumed to be:", options: ["Centred at upper limits", "Centred at lower limits", "Centred at classmarks of classes", "Evenly distributed"], correctAnswer: "c", explanation: "Class mark xᵢ represents the central value of each class interval." },
    { id: "c10m13-mcq-5", question: "If the mean of observations x, x+3, x+5, x+7, x+10 is 9, the mean of last 3 observations is:", options: ["10 1/3", "10 2/3", "11 1/3", "11 2/3"], correctAnswer: "c", explanation: "Sum = 5x + 25 = 45 ➔ 5x = 20 ➔ x = 4. Last 3 obs: 9, 11, 14. Mean = 34/3 = 11 1/3." },
    { id: "c10m13-mcq-6", question: "Construction of cumulative frequency table is useful in determining the:", options: ["Mean", "Median", "Mode", "All three"], correctAnswer: "b", explanation: "Cumulative frequency table is specifically required to locate the Median class." },
    { id: "c10m13-mcq-7", question: "For finding the Class Mark of a class interval, formula is:", options: ["(Upper limit + Lower limit) / 2", "Upper limit - Lower limit", "Upper limit + Lower limit", "(Upper limit - Lower limit) / 2"], correctAnswer: "a", explanation: "Class Mark = (Upper Limit + Lower Limit) / 2." },
    { id: "c10m13-mcq-8", question: "The modal class of a frequency distribution is the class interval having:", options: ["Lowest frequency", "Highest frequency", "First frequency", "Cumulative frequency"], correctAnswer: "b", explanation: "Modal class is defined as the class with the maximum frequency." },
    { id: "c10m13-mcq-9", question: "If Mode = 18 and Mean = 24, then Median is:", options: ["20", "22", "24", "26"], correctAnswer: "b", explanation: "Mode = 3 Median - 2 Mean ➔ 18 = 3 Median - 48 ➔ 3 Median = 66 ➔ Median = 22." },
    { id: "c10m13-mcq-10", question: "Abscissa of point of intersection of 'less than' and 'more than' ogives gives:", options: ["Mean", "Median", "Mode", "Range"], correctAnswer: "b", explanation: "The x-coordinate of intersection of ogives gives the Median." }
  ]
};
