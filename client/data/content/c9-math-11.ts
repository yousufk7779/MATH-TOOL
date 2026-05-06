import { ChapterContent } from "../chapterContent";

export const c9Math11: ChapterContent = {
    id: "c9-math-11",
    chapterNumber: 11,
    title: "Statistics",
    subject: "Mathematics",
    class: "9th",
    exercises: [
        { id: "ex11.1", name: "Exercise 11.1", questions: [] },
        { id: "ex11.2", name: "Exercise 11.2", questions: [] },
        { id: "ex11.3", name: "Exercise 11.3", questions: [] },
        { id: "ex11.4", name: "Exercise 11.4", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [
        {
            id: "m1",
            question: "The range of the data: 25, 18, 20, 22, 16, 6, 17, 15, 12, 30, 32, 10, 19, 8, 11, 20 is:",
            options: ["10", "15", "18", "26"],
            correctAnswer: "D"
        },
        {
            id: "m2",
            question: "In a frequency distribution, the mid value of a class is 10 and the width of the class is 6. The lower limit of the class is:",
            options: ["6", "7", "8", "12"],
            correctAnswer: "B"
        },
        {
            id: "m3",
            question: "The mean of five numbers is 30. If one number is excluded, their mean becomes 28. The excluded number is:",
            options: ["28", "30", "35", "38"],
            correctAnswer: "D"
        },
        {
            id: "m4",
            question: "Data collected by the investigator with a definite objective in mind is called:",
            options: ["Primary Data", "Secondary Data", "Raw Data", "None"],
            correctAnswer: "A"
        },
        {
            id: "m5",
            question: "The class mark of the class 90-120 is:",
            options: ["90", "105", "115", "120"],
            correctAnswer: "B"
        },
        {
            id: "m6",
            question: "The range of the data: 10, 20, 30, 40, 50 is:",
            options: ["10", "40", "50", "60"],
            correctAnswer: "B"
        },
        {
            id: "m7",
            question: "Which of the following is NOT a measure of central tendency?",
            options: ["Mean", "Median", "Mode", "Range"],
            correctAnswer: "D"
        },
        {
            id: "m8",
            question: "The mode of the data: 2, 2, 3, 4, 4, 4, 5 is:",
            options: ["2", "3", "4", "5"],
            correctAnswer: "C"
        },
        {
            id: "m9",
            question: "The value of the observation which occurs most frequently is called:",
            options: ["Mean", "Median", "Mode", "Range"],
            correctAnswer: "C"
        },
        {
            id: "m10",
            question: "The mid-point of a class interval is called:",
            options: ["Class limit", "Class mark", "Class size", "Range"],
            correctAnswer: "B"
        }
    ],
    summary: [
        "Statistics deals with the collection, organization, analysis, and interpretation of data.",
        "Data can be presented in the form of frequency distribution tables, bar graphs, histograms, and frequency polygons.",
        "Measures of central tendency include Mean, Median, and Mode."
    ],

    isHtmlView: true,
    htmlOverview: `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 100px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255, 64, 129, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        .formula-box { background: rgba(255, 64, 129, 0.1) !important; border-left: 4px solid #FF4081 !important; padding: 10px; margin: 10px 0; color: #fff !important; }
        .section-title { color: #FF4081 !important; font-size: 1.3em; border-bottom: 1px solid rgba(255,64,129,0.2); padding-bottom: 5px; margin-bottom: 15px; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 10px; }
        b { color: #FF4081 !important; font-weight: normal; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="section-title">Chapter Overview: Statistics</div>
        <div class="step">Statistics is the branch of mathematics that deals with the <b>collection</b>, <b>presentation</b>, <b>analysis</b>, and <b>interpretation</b> of numerical data.</div>
        
        <div class="step"><b>1. Collection of Data:</b></div>
        <div class="step">Data collected by the investigator himself/herself with a definite objective in mind is called <b>Primary Data</b>. Data collected from a source which already had the information is called <b>Secondary Data</b>.</div>

        <div class="step"><b>2. Measures of Central Tendency:</b></div>
        <div class="formula-box">
            <b>Mean:</b> Sum of observations / Number of observations<br/>
            <b>Median:</b> Middle value of data when arranged in ascending/descending order.<br/>
            <b>Mode:</b> The value that occurs most frequently.
        </div>

        <div class="step"><b>3. Graphical Representation:</b></div>
        <div class="step">Data can be visualized using <b>Bar Graphs</b>, <b>Histograms</b> (for continuous classes), and <b>Frequency Polygons</b>.</div>
    </div>
</body>
</html>`,
    htmlExercises: {
        "ex11.1": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255, 64, 129, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #F48FB1 !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #FF4081 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #FF4081 !important; font-weight: normal; margin-top: 10px; }
        table { margin: 20px auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 280px; }
        th, td { border: 1px solid rgba(255, 64, 129, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(255, 64, 129, 0.2); color: #FF4081; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. Give five examples of data that you can collect from your day-to-day life.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Five examples of data from daily life are:</div>
        <div class="step">1. Number of students in our class.</div>
        <div class="step">2. Number of fans in our school.</div>
        <div class="step">3. Electricity bills of our house for last two years.</div>
        <div class="step">4. Election results obtained from television or newspapers.</div>
        <div class="step">5. Literacy rate figures obtained from educational survey.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Classify the data in Q.1 above as primary or secondary data.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Based on the examples in Question 1:</div>
        <div class="step"><b>Primary Data:</b> Examples 1, 2, and 3 (collected personally).</div>
        <div class="step"><b>Secondary Data:</b> Examples 4 and 5 (obtained from an external source).</div>
    </div>
</body>
</html>`,
        "ex11.2": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255, 64, 129, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #F48FB1 !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #FF4081 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #FF4081 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin-left: auto !important; margin-right: auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(255, 64, 129, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(255, 64, 129, 0.2); color: #FF4081; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. The blood groups of 30 students of Class VIII are recorded as follows:<br/>A, B, O, O, AB, O, A, O, B, A, O, B, A, O, O,<br/>A, AB, O, A, A, O, O, AB, B, A, O, B, A, B, O.<br/>Represent this data in the form of a frequency distribution table. Which is the most common, and which is the rarest, blood group among these students?</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Blood Group</th><th>Frequency</th></tr>
            <tr><td>A</td><td>9</td></tr>
            <tr><td>B</td><td>6</td></tr>
            <tr><td>O</td><td>12</td></tr>
            <tr><td>AB</td><td>3</td></tr>
            <tr><th>Total</th><th>30</th></tr>
        </table>
        <div class="step">The most common blood group is <b>O</b> (frequency 12).</div>
        <div class="step">The rarest blood group is <b>AB</b> (frequency 3).</div>
    </div>

    <div class="content-box">
        <div class="question">2. The distance (in km) of 40 engineers from their residence to their place of work were found as follows:<br/>5, 3, 10, 20, 25, 11, 13, 7, 12, 31, 19, 10, 12, 17, 18, 11, 32, 17, 16, 2, 7, 9, 7, 8, 3, 5, 12, 15, 18, 3, 12, 14, 2, 9, 6, 15, 15, 7, 6, 12.<br/>Construct a grouped frequency distribution table with class size 5.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Distances (km)</th><th>Frequency</th></tr>
            <tr><td>0 - 5</td><td>5</td></tr>
            <tr><td>5 - 10</td><td>11</td></tr>
            <tr><td>10 - 15</td><td>11</td></tr>
            <tr><td>15 - 20</td><td>9</td></tr>
            <tr><td>20 - 25</td><td>1</td></tr>
            <tr><td>25 - 30</td><td>1</td></tr>
            <tr><td>30 - 35</td><td>2</td></tr>
            <tr><th>Total</th><th>40</th></tr>
        </table>
    </div>

    <div class="content-box">
        <div class="question">5. A study was conducted to find out the concentration of sulphur dioxide in the air in parts per million (ppm) of a certain city. The data obtained for 30 days is as follows:<br/>0.03, 0.08, 0.08, 0.09, 0.04, 0.17, 0.16, 0.05, 0.02, 0.06, 0.18, 0.20, 0.11, 0.08, 0.12, 0.13, 0.22, 0.07, 0.08, 0.01, 0.10, 0.06, 0.09, 0.18, 0.11, 0.07, 0.05, 0.07, 0.01, 0.04.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Conc. of SO₂ (ppm)</th><th>Frequency</th></tr>
            <tr><td>0.00 - 0.04</td><td>4</td></tr>
            <tr><td>0.04 - 0.08</td><td>9</td></tr>
            <tr><td>0.08 - 0.12</td><td>9</td></tr>
            <tr><td>0.12 - 0.16</td><td>2</td></tr>
            <tr><td>0.16 - 0.20</td><td>4</td></tr>
            <tr><td>0.20 - 0.24</td><td>2</td></tr>
            <tr><th>Total</th><th>30</th></tr>
        </table>
        <div class="step">Days with concentration > 0.11 ppm: 2+4+2 = <b>8 days</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">3. The relative humidity...</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Humidity (%)</th><th>Frequency</th></tr>
            <tr><td>84 - 86</td><td>1</td></tr>
            <tr><td>86 - 88</td><td>1</td></tr>
            <tr><td>88 - 90</td><td>2</td></tr>
            <tr><td>90 - 92</td><td>2</td></tr>
            <tr><td>92 - 94</td><td>7</td></tr>
            <tr><td>94 - 96</td><td>6</td></tr>
            <tr><td>96 - 98</td><td>7</td></tr>
            <tr><td>98 - 100</td><td>4</td></tr>
            <tr><th>Total</th><th>30</th></tr>
        </table>
        <div class="step">(ii) Season: <b>Rainy Season</b>.</div>
        <div class="step">(iii) Range = 99.2 - 84.9 = <b>14.3%</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">4. The heights of 50 students, measured to the nearest centimetres, have been found to be as follows:<br/>161, 150, 154, 165, 168, 161, 154, 162, 150, 151, 162, 164, 171, 165, 158, 154, 156, 172, 160, 170, 153, 159, 161, 170, 162, 165, 166, 168, 165, 164, 154, 152, 153, 156, 158, 162, 160, 161, 173, 166, 161, 159, 162, 167, 168, 159, 158, 153, 154, 159.<br/>(i) Represent in grouped frequency table (ii) Conclusion?</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Height (cm)</th><th>Frequency</th></tr>
            <tr><td>150 - 155</td><td>12</td></tr>
            <tr><td>155 - 160</td><td>9</td></tr>
            <tr><td>160 - 165</td><td>14</td></tr>
            <tr><td>165 - 170</td><td>10</td></tr>
            <tr><td>170 - 175</td><td>5</td></tr>
            <tr><th>Total</th><th>50</th></tr>
        </table>
        <div class="step">(ii) <b>Conclusion:</b> More than 50% of students are shorter than 165 cm.</div>
    </div>

    <div class="content-box">
        <div class="question">6. Three coins were tossed 30 times simultaneously. Each time the number of heads occurring was noted down as follows:<br/>0, 1, 2, 2, 1, 2, 3, 1, 3, 0, 1, 3, 1, 1, 2, 2, 0, 1, 2, 1, 3, 0, 0, 1, 1, 2, 3, 2, 2, 0.<br/>Prepare a frequency distribution table.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Number of Heads</th><th>Frequency</th></tr>
            <tr><td>0</td><td>6</td></tr>
            <tr><td>1</td><td>10</td></tr>
            <tr><td>2</td><td>9</td></tr>
            <tr><td>3</td><td>5</td></tr>
            <tr><th>Total</th><th>30</th></tr>
        </table>
    </div>

    <div class="content-box">
        <div class="question">7. The value of π up to 50 decimal places is given below:<br/>3.14159265358979323846264338327950288419716939937510<br/>(i) Make a frequency distribution of digits from 0 to 9 after the decimal point.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Digit</th><th>Frequency</th><th>Digit</th><th>Frequency</th></tr>
            <tr><td>0</td><td>2</td><td>1</td><td>5</td></tr>
            <tr><td>2</td><td>5</td><td>3</td><td>8</td></tr>
            <tr><td>4</td><td>4</td><td>5</td><td>5</td></tr>
            <tr><td>6</td><td>4</td><td>7</td><td>4</td></tr>
            <tr><td>8</td><td>5</td><td>9</td><td>8</td></tr>
        </table>
        <div class="step">Most occurring digits: <b>3</b> and <b>9</b> (8 times each).</div>
        <div class="step">Least occurring digit: <b>0</b> (2 times).</div>
    </div>

    <div class="content-box">
        <div class="question">8. Thirty children were asked about the number of hours they watched TV programmes in the previous week. The results were found as follows:<br/>1, 6, 2, 3, 5, 12, 5, 8, 4, 8, 10, 3, 4, 12, 2, 8, 15, 1, 17, 6, 3, 2, 8, 5, 9, 6, 8, 7, 14, 12.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Hours</th><th>Frequency</th></tr>
            <tr><td>0 - 5</td><td>10</td></tr>
            <tr><td>5 - 10</td><td>13</td></tr>
            <tr><td>10 - 15</td><td>5</td></tr>
            <tr><td>15 - 20</td><td>2</td></tr>
            <tr><th>Total</th><th>30</th></tr>
        </table>
        <div class="step">How many children watched for 15 or more hours? <b>2 children</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">9. A company manufactures car batteries of a particular type. The lives (in years) of 40 such batteries were recorded as follows:<br/>2.6, 3.0, 3.7, 3.2, 2.2, 4.1, 3.5, 4.5, 3.5, 2.3, 3.2, 3.4, 3.8, 3.2, 4.6, 3.7, 2.5, 4.4, 3.4, 3.3, 2.9, 3.0, 4.3, 2.8, 3.5, 3.2, 3.9, 3.2, 3.2, 3.1, 3.7, 3.4, 4.6, 3.8, 3.2, 2.6, 3.5, 4.2, 2.9, 3.6.</div>
        <div class="solution-header">Solution:</div>
        <table align="center">
            <tr><th>Life (Years)</th><th>Frequency</th></tr>
            <tr><td>2.0 - 2.5</td><td>2</td></tr>
            <tr><td>2.5 - 3.0</td><td>6</td></tr>
            <tr><td>3.0 - 3.5</td><td>14</td></tr>
            <tr><td>3.5 - 4.0</td><td>11</td></tr>
            <tr><td>4.0 - 4.5</td><td>4</td></tr>
            <tr><td>4.5 - 5.0</td><td>3</td></tr>
            <tr><th>Total</th><th>40</th></tr>
        </table>
    </div>
</body>
</html>`,
        "ex11.3": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255, 64, 129, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #F48FB1 !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #FF4081 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .chart-container { margin: 20px 0; background: rgba(0,0,0,0.1); padding: 10px; border-radius: 5px; }
        table { display: table !important; margin-left: auto !important; margin-right: auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(255, 64, 129, 0.3); padding: 8px; text-align: center; color: #fff; font-size: 0.9em; }
        th { background: rgba(255, 64, 129, 0.2); color: #FF4081; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. Women Fatality Rates (%) worldwide. Represent graphically.</div>
        <div class="solution-header">Solution:</div>
        <div class="chart-container">
            <svg viewBox="0 0 350 180">
                <rect x="100" y="20" width="159" height="15" fill="#FF4081"/>
                <rect x="100" y="45" width="127" height="15" fill="#FF4081"/>
                <rect x="100" y="70" width="62" height="15" fill="#FF4081"/>
                <rect x="100" y="95" width="21" height="15" fill="#FF4081"/>
                <rect x="100" y="120" width="20" height="15" fill="#FF4081"/>
                <rect x="100" y="145" width="110" height="15" fill="#FF4081"/>
                <text x="95" y="32" fill="white" font-size="8" text-anchor="end">Reproductive</text>
                <text x="95" y="57" fill="white" font-size="8" text-anchor="end">Neuropsychiatric</text>
                <text x="265" y="32" fill="#FF4081" font-size="8">31.8%</text>
            </svg>
        </div>
        <div class="step">Major cause: <b>Reproductive health conditions</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">2. Number of girls per thousand boys in different sections of Indian society: SC: 940, ST: 970, Non SC/ST: 920, Backward: 950, Non-backward: 920, Rural: 930, Urban: 910.</div>
        <div class="solution-header">Solution:</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <line x1="40" y1="120" x2="280" y2="120" stroke="white"/>
                <rect x="50" y="26" width="15" height="94" fill="#FF4081"/> <!-- 940 -->
                <rect x="80" y="23" width="15" height="97" fill="#FF4081"/> <!-- 970 -->
                <rect x="110" y="28" width="15" height="92" fill="#FF4081"/> <!-- 920 -->
                <rect x="140" y="25" width="15" height="95" fill="#FF4081"/> <!-- 950 -->
                <text x="57" y="135" fill="white" font-size="6" text-anchor="middle">SC</text>
                <text x="87" y="135" fill="white" font-size="6" text-anchor="middle">ST</text>
            </svg>
        </div>
    </div>

    <div class="content-box">
        <div class="question">3. Seats won by different political parties: A: 75, B: 55, C: 37, D: 29, E: 10, F: 37.</div>
        <div class="solution-header">Solution:</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <rect x="40" y="45" width="20" height="75" fill="#FF4081"/> <!-- 75 -->
                <rect x="70" y="65" width="20" height="55" fill="#FF4081"/> <!-- 55 -->
                <rect x="100" y="83" width="20" height="37" fill="#FF4081"/> <!-- 37 -->
                <rect x="130" y="91" width="20" height="29" fill="#FF4081"/> <!-- 29 -->
                <rect x="160" y="110" width="20" height="10" fill="#FF4081"/> <!-- 10 -->
                <rect x="190" y="83" width="20" height="37" fill="#FF4081"/> <!-- 37 -->
                <text x="50" y="135" fill="white" font-size="8" text-anchor="middle">A</text>
                <text x="80" y="135" fill="white" font-size="8" text-anchor="middle">B</text>
            </svg>
        </div>
    </div>

    <div class="content-box">
        <div class="question">4. The lengths of 40 leaves of a plant...</div>
        <table align="center">
            <tr><th>Length (mm)</th><th>No. of leaves</th></tr>
            <tr><td>117.5 - 126.5</td><td>3</td></tr>
            <tr><td>126.5 - 135.5</td><td>5</td></tr>
            <tr><td>135.5 - 144.5</td><td>9</td></tr>
            <tr><td>144.5 - 153.5</td><td>12</td></tr>
            <tr><td>153.5 - 162.5</td><td>5</td></tr>
            <tr><td>162.5 - 171.5</td><td>4</td></tr>
            <tr><td>171.5 - 180.5</td><td>2</td></tr>
        </table>
        <div class="solution-header">Solution:</div>
        <div class="step">To draw a histogram, we first make the classes continuous by subtracting 0.5 from the lower limit and adding 0.5 to the upper limit.</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <line x1="30" y1="120" x2="280" y2="120" stroke="white"/>
                <line x1="30" y1="120" x2="30" y2="10" stroke="white"/>
                <rect x="35" y="90" width="30" height="30" fill="#FF4081" stroke="#fff" stroke-width="0.5"/>
                <rect x="65" y="70" width="30" height="50" fill="#FF4081" stroke="#fff" stroke-width="0.5"/>
                <rect x="95" y="30" width="30" height="90" fill="#FF4081" stroke="#fff" stroke-width="0.5"/>
                <rect x="125" y="10" width="30" height="110" fill="#FF4081" stroke="#fff" stroke-width="0.5"/>
                <text x="140" y="135" fill="white" font-size="8" text-anchor="middle">Histogram (Leaves)</text>
            </svg>
        </div>
    </div>

    <div class="content-box">
        <div class="question">5. The following table gives the life times of 400 neon lamps:</div>
        <table align="center">
            <tr><th>Life time (hrs)</th><th>No. of lamps</th></tr>
            <tr><td>300 - 400</td><td>14</td></tr>
            <tr><td>400 - 500</td><td>56</td></tr>
            <tr><td>500 - 600</td><td>60</td></tr>
            <tr><td>600 - 700</td><td>86</td></tr>
            <tr><td>700 - 800</td><td>74</td></tr>
            <tr><td>800 - 900</td><td>62</td></tr>
            <tr><td>900 - 1000</td><td>48</td></tr>
        </table>
        <div class="solution-header">Solution:</div>
        <div class="step">Lamps with life time more than 700 hours = 74 + 62 + 48 = <b>184 lamps</b>.</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <rect x="30" y="106" width="30" height="14" fill="#FF4081"/>
                <rect x="60" y="64" width="30" height="56" fill="#FF4081"/>
                <rect x="90" y="60" width="30" height="60" fill="#FF4081"/>
                <rect x="120" y="34" width="30" height="86" fill="#FF4081"/>
                <text x="150" y="140" fill="white" font-size="8" text-anchor="middle">Histogram (Neon Lamps)</text>
            </svg>
        </div>
    </div>

    <div class="content-box">
        <div class="question">6. Marks of students...</div>
        <div class="solution-header">Solution:</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <polyline points="30,110 80,80 130,40 180,60 230,100" fill="none" stroke="#FF4081" stroke-width="2"/>
                <polyline points="30,100 80,60 130,50 180,90 230,110" fill="none" stroke="#FF5252" stroke-width="2" stroke-dasharray="4,2"/>
                <circle cx="80" cy="80" r="2" fill="#FF4081"/>
                <circle cx="130" cy="40" r="2" fill="#FF4081"/>
                <text x="250" y="20" fill="#FF4081" font-size="8">Section A</text>
                <text x="250" y="35" fill="#FF5252" font-size="8">Section B</text>
            </svg>
        </div>
        <div class="step">Section A performed better in the higher marks range.</div>
    </div>

    <div class="content-box">
        <div class="question">9. 100 surnames were randomly picked up from a local telephone directory. Draw a histogram.</div>
        <table align="center">
            <tr><th>Letters</th><th>Surnames</th></tr>
            <tr><td>1 - 4</td><td>6</td></tr>
            <tr><td>4 - 6</td><td>30</td></tr>
            <tr><td>6 - 8</td><td>44</td></tr>
            <tr><td>8 - 12</td><td>16</td></tr>
            <tr><td>12 - 20</td><td>4</td></tr>
        </table>
        <div class="solution-header">Solution:</div>
        <div class="step">Since class widths are unequal, we calculate adjusted frequencies.</div>
        <div class="chart-container">
            <svg viewBox="0 0 300 150">
                <rect x="30" y="100" width="30" height="20" fill="#FF4081" stroke="#fff"/>
                <rect x="60" y="30" width="20" height="90" fill="#FF4081" stroke="#fff"/>
                <rect x="80" y="10" width="20" height="110" fill="#FF4081" stroke="#fff"/>
                <text x="150" y="140" fill="white" font-size="8" text-anchor="middle">Histogram (Surnames)</text>
            </svg>
        </div>
    </div>
</body>
</html>`,
        "ex11.4": `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
        .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255, 64, 129, 0.2) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .question { color: #F48FB1 !important; font-weight: normal; margin-bottom: 15px; }
        .solution-header { color: #FF4081 !important; margin-bottom: 10px; font-size: 1.1em; }
        .step { color: #ccc !important; line-height: 1.6; margin-bottom: 8px; }
        .final-answer { color: #FF4081 !important; font-weight: normal; margin-top: 10px; }
        table { display: table !important; margin-left: auto !important; margin-right: auto !important; border-collapse: collapse; background: rgba(0,0,0,0.2); width: auto; min-width: 260px; max-width: 100%; }
        th, td { border: 1px solid rgba(255, 64, 129, 0.3); padding: 10px; text-align: center; color: #fff; }
        th { background: rgba(255, 64, 129, 0.2); color: #FF4081; }
    </style>
</head>
<body>
    <div class="content-box">
        <div class="question">1. Goals scored in 10 matches: 2, 3, 4, 5, 0, 1, 3, 3, 4, 3. Find Mean, Median, Mode.</div>
        <div class="solution-header">Solution:</div>
        <div class="step"><b>Mean:</b> Σx/n = 28/10 = <b>2.8</b>.</div>
        <div class="step"><b>Median:</b> Sorted: 0, 1, 2, 3, 3, 3, 3, 4, 4, 5. n=10. Median = avg of 5th & 6th = (3+3)/2 = <b>3</b>.</div>
        <div class="step"><b>Mode:</b> Most frequent is <b>3</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">2. In a mathematics test given to 15 students, the following marks (out of 100) are recorded:<br/>41, 39, 48, 52, 46, 62, 54, 40, 96, 52, 98, 40, 42, 52, 60.</div>
        <div class="solution-header">Solution:</div>
        <div class="step"><b>Mean:</b> Sum of marks / 15 = 822 / 15 = <b>54.8</b>.</div>
        <div class="step"><b>Median:</b> Sorted: 39, 40, 40, 41, 42, 46, 48, 52, 52, 52, 54, 60, 62, 96, 98. n=15. Median = (n+1)/2 = 8th term = <b>52</b>.</div>
        <div class="step"><b>Mode:</b> 52 occurs 3 times. Mode = <b>52</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">3. Median is 63. Find x for: 29, 32, 48, 50, x, x+2, 72, 78, 84, 95.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">n = 10. Median = [(n/2)th + (n/2 + 1)th] / 2</div>
        <div class="step">63 = [x + (x+2)] / 2 ⇒ 126 = 2x + 2 ⇒ 124 = 2x ⇒ <b>x = 62</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">4. Find the mode of 14, 25, 14, 28, 18, 17, 18, 14, 23, 22, 14, 18.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">Frequencies: 14: 4, 18: 3, others are 1.</div>
        <div class="final-answer">Mode is <b>14</b>.</div>
    </div>

    <div class="content-box">
        <div class="question">5. Find mean salary of 60 workers:</div>
        <table align="center">
            <tr><th>Salary (x)</th><th>Workers (f)</th><th>f.x</th></tr>
            <tr><td>3000</td><td>16</td><td>48000</td></tr>
            <tr><td>4000</td><td>12</td><td>48000</td></tr>
            <tr><td>5000</td><td>10</td><td>50000</td></tr>
            <tr><td>6000</td><td>8</td><td>48000</td></tr>
            <tr><td>7000</td><td>6</td><td>42000</td></tr>
            <tr><td>8000</td><td>4</td><td>32000</td></tr>
            <tr><td>9000</td><td>3</td><td>27000</td></tr>
            <tr><td>10000</td><td>1</td><td>10000</td></tr>
            <tr><th>Total</th><th>60</th><th>305000</th></tr>
        </table>
        <div class="step">Mean = 305000 / 60 = <b>5083.33</b>.</div>
    </div>
    <div class="content-box">
        <div class="question">6. Give one example of a situation in which (i) mean is an appropriate measure (ii) median is appropriate but mean is not.</div>
        <div class="solution-header">Solution:</div>
        <div class="step">(i) <b>Mean is appropriate:</b> Marks obtained by students in a class where the data is not skewed.</div>
        <div class="step">(ii) <b>Median is appropriate:</b> Salary of employees in a company where a few top executives earn very high salaries (outliers) which would skew the mean.</div>
    </div>
</body>
</html>`
    }
};
