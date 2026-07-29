import { ChapterContent } from "../types";

export const c7Math3: ChapterContent = {
  id: "c7-math-3",
  number: 3,
  title: "Data Handling",
  isHtmlView: true,
  introduction:
    "In this chapter, we will learn how to collect, organize and represent data using various methods like Mean, Median, Mode and Bar Graphs. Data handling helps us make sense of large amounts of information.",
  definitions: [
    {
      term: "Arithmetic Mean",
      description: "The average value obtained by dividing the sum of all observations by the total number of observations.",
    },
    {
      term: "Range",
      description: "The difference between the highest and lowest values in a given set of data.",
    },
    {
      term: "Mode",
      description: "The observation that occurs most frequently in a set of data.",
    },
    {
      term: "Median",
      description: "The middle observation when the data is arranged in ascending or descending order.",
    },
  ],
  keyPoints: [
    "Arithmetic Mean is the average of all observations.",
    "Range is the difference between the highest and lowest values.",
    "Mode is the value that appears most often in a dataset.",
    "Median is the middle value when data is sorted.",
    "Bar graphs provide a visual comparison of different categories.",
  ],
  formulas: [
    {
      name: "Arithmetic Mean",
      formula: "Sum of all observations / Total number of observations",
    },
    { name: "Range", formula: "Highest Observation - Lowest Observation" },
  ],
  crux: [],
  exercises: [
    { id: "ex3-1", name: "Exercise 3.1", questions: [] },
    { id: "ex3-2", name: "Exercise 3.2", questions: [] },
    { id: "ex3-3", name: "Exercise 3.3", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #AB47BC; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(171, 71, 188, 0.05); border-left: 4px solid #AB47BC; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #AB47BC; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <p class="content-text">This chapter introduces the concept of data organization and central tendencies to interpret information effectively.</p>
            <div class="point-box">
                <div class="point-item">Mean: The sum of observations divided by their count.</div>
                <div class="point-item">Range: Measures the spread of data (Highest - Lowest).</div>
                <div class="point-item">Median & Mode: Represent the center and peak of data distribution.</div>
                <div class="point-item">Visual Tools: Bar graphs and Double bar graphs for comparison.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex3-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #CE93D8; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #AB47BC; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border-radius: 8px; }
            .data-table { width: 100%; min-width: 280px; border-collapse: collapse; background: #1a1a2e; border: 1px solid #AB47BC; font-size: 0.95em; }
            .data-table th, .data-table td { border: 1px solid rgba(171, 71, 188, 0.3); padding: 8px; text-align: center; }
            .data-table th { background: rgba(171, 71, 188, 0.2); color: #AB47BC; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the range of heights of any ten students of your class.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the heights (in cm) of 10 students be:</div>
                    <div class="sol-step">130, 132, 135, 137, 138, 140, 142, 145, 148, 150</div>
                    <div class="sol-step">Highest height = 150 cm</div>
                    <div class="sol-step">Lowest height = 130 cm</div>
                    <div class="sol-step">Range = Highest value - Lowest value</div>
                    <div class="sol-step">Range = 150 - 130</div>
                    <div class="sol-step"><span class="ans-highlight">Range = 20 cm</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Organise the following marks in a class assessment, in a tabular form.<br/>4, 6, 7, 5, 3, 5, 4, 5, 2, 6, 2, 5, 1, 9, 6, 5, 8, 4, 6, 7<br/>(i) Which number is the highest?<br/>(ii) Which number is the lowest?<br/>(iii) What is the range of the data?<br/>(iv) Find the arithmetic mean.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><b>Frequency Distribution Table:</b></div>
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>Marks</th><th>Tally Marks</th><th>Frequency</th></tr>
                            <tr><td>1</td><td>|</td><td>1</td></tr>
                            <tr><td>2</td><td>||</td><td>2</td></tr>
                            <tr><td>3</td><td>|</td><td>1</td></tr>
                            <tr><td>4</td><td>|||</td><td>3</td></tr>
                            <tr><td>5</td><td>|||| |</td><td>5</td></tr>
                            <tr><td>6</td><td>||||</td><td>4</td></tr>
                            <tr><td>7</td><td>||</td><td>2</td></tr>
                            <tr><td>8</td><td>|</td><td>1</td></tr>
                            <tr><td>9</td><td>|</td><td>1</td></tr>
                        </table>
                    </div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Highest number:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">From the table, the highest mark is <span class="ans-highlight">9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Lowest number:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">From the table, the lowest mark is <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Range of the data:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Range = Highest mark - Lowest mark</div>
                    <div class="sol-step">Range = 9 - 1</div>
                    <div class="sol-step"><span class="ans-highlight">Range = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Arithmetic mean:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">Sum of all marks</span><span class="den">Total number of students</span></div></div>
                    <div class="sol-step">Sum = 4 + 6 + 7 + 5 + 3 + 5 + 4 + 5 + 2 + 6 + 2 + 5 + 1 + 9 + 6 + 5 + 8 + 4 + 6 + 7 = 100</div>
                    <div class="sol-step">Total number of students = 20</div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">100</span><span class="den">20</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean = 5</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the mean of the first five whole numbers.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First five whole numbers are: 0, 1, 2, 3, 4</div>
                    <div class="sol-step">Sum of numbers = 0 + 1 + 2 + 3 + 4 = 10</div>
                    <div class="sol-step">Total count of numbers = 5</div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">Sum of numbers</span><span class="den">Total count</span></div></div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">10</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean = 2</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A cricketer scores the following runs in eight innings:<br/>58, 76, 40, 35, 46, 45, 0, 100.<br/>Find the mean score.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total runs = 58 + 76 + 40 + 35 + 46 + 45 + 0 + 100 = 400</div>
                    <div class="sol-step">Number of innings = 8</div>
                    <div class="sol-step">Mean score = <div class="frac"><span class="num">Total Runs</span><span class="den">Number of Innings</span></div></div>
                    <div class="sol-step">Mean score = <div class="frac"><span class="num">400</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean score = 50</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Following table shows the points of each player scored in four games:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>Player</th><th>Game 1</th><th>Game 2</th><th>Game 3</th><th>Game 4</th></tr>
                            <tr><td>A</td><td>14</td><td>16</td><td>10</td><td>10</td></tr>
                            <tr><td>B</td><td>0</td><td>8</td><td>6</td><td>4</td></tr>
                            <tr><td>C</td><td>8</td><td>11</td><td>Did not Play</td><td>13</td></tr>
                        </table>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Find the mean to determine A's average number of points scored per game.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total points scored by A = 14 + 16 + 10 + 10 = 50</div>
                    <div class="sol-step">Number of games played by A = 4</div>
                    <div class="sol-step">Mean of A = <div class="frac"><span class="num">50</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean of A = 12.5 points</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) To find the mean number of points per game for C, would you divide the total points by 3 or by 4? Why?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">We will divide the total points by <span class="ans-highlight">3</span></div>
                    <div class="sol-step">Reason: Player C played only 3 games (Game 3 was not played).</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) B played in all the four games. How would you find the mean?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total points scored by B = 0 + 8 + 6 + 4 = 18</div>
                    <div class="sol-step">Number of games played = 4</div>
                    <div class="sol-step">Mean of B = <div class="frac"><span class="num">18</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean of B = 4.5 points</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Who is the best performer?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Mean of A = 12.5</div>
                    <div class="sol-step">Mean of B = 4.5</div>
                    <div class="sol-step">Mean of C = <div class="frac"><span class="num">8 + 11 + 13</span><span class="den">3</span></div> = <div class="frac"><span class="num">32</span><span class="den">3</span></div> = 10.67</div>
                    <div class="sol-step">Comparing the mean scores: 12.5 > 10.67 > 4.5</div>
                    <div class="sol-step"><span class="ans-highlight">Player A is the best performer</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. The marks (out of 100) obtained by a group of students in a science test are 85, 76, 90, 85, 39, 48, 56, 95, 81 and 75. Find the:<br/>(i) Highest and the lowest marks obtained by the students.<br/>(ii) Range of the marks obtained.<br/>(iii) Mean marks obtained by the group.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging marks in ascending order:</div>
                    <div class="sol-step">39, 48, 56, 75, 76, 81, 85, 85, 90, 95</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Highest and lowest marks:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Highest marks = <span class="ans-highlight">95</span></div>
                    <div class="sol-step">Lowest marks = <span class="ans-highlight">39</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Range of the marks obtained:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Range = Highest marks - Lowest marks</div>
                    <div class="sol-step">Range = 95 - 39</div>
                    <div class="sol-step"><span class="ans-highlight">Range = 56</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Mean marks obtained by the group:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of marks = 39 + 48 + 56 + 75 + 76 + 81 + 85 + 85 + 90 + 95 = 730</div>
                    <div class="sol-step">Total number of students = 10</div>
                    <div class="sol-step">Mean marks = <div class="frac"><span class="num">730</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean marks = 73</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. The enrolment in a school during six consecutive years was as follows:<br/>1555, 1670, 1750, 2013, 2540, 2820<br/>Find the mean enrolment of the school for this period.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total enrolment = 1555 + 1670 + 1750 + 2013 + 2540 + 2820 = 12348</div>
                    <div class="sol-step">Number of years = 6</div>
                    <div class="sol-step">Mean enrolment = <div class="frac"><span class="num">12348</span><span class="den">6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean enrolment = 2058</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. The rainfall (in mm) in a city on 7 days of a certain week was recorded as follows:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>
                            <tr><td>Rainfall</td><td>0.0</td><td>12.2</td><td>2.1</td><td>0.0</td><td>20.5</td><td>5.5</td><td>1.0</td></tr>
                        </table>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Find the range of the rainfall:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Highest rainfall = 20.5 mm</div>
                    <div class="sol-step">Lowest rainfall = 0.0 mm</div>
                    <div class="sol-step">Range = 20.5 - 0.0</div>
                    <div class="sol-step"><span class="ans-highlight">Range = 20.5 mm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Find the mean rainfall for the week:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total rainfall = 0.0 + 12.2 + 2.1 + 0.0 + 20.5 + 5.5 + 1.0 = 41.3 mm</div>
                    <div class="sol-step">Number of days = 7</div>
                    <div class="sol-step">Mean rainfall = <div class="frac"><span class="num">41.3</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean rainfall = 5.9 mm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) On how many days was the rainfall less than the mean rainfall?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Mean rainfall = 5.9 mm</div>
                    <div class="sol-step">Days with rainfall < 5.9 mm: Mon (0.0), Wed (2.1), Thurs (0.0), Sat (5.5), Sun (1.0)</div>
                    <div class="sol-step"><span class="ans-highlight">5 days</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. The heights of 10 girls were measured in cm and the results are as follows:<br/>135, 150, 139, 128, 151, 132, 146, 149, 143, 141.<br/>(i) What is the height of the tallest girl?<br/>(ii) What is the height of the shortest girl?<br/>(iii) What is the range of the data?<br/>(iv) What is the mean height of the girls?<br/>(v) How many girls have heights more than the mean height.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging heights in ascending order:</div>
                    <div class="sol-step">128, 132, 135, 139, 141, 143, 146, 149, 150, 151</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Height of the tallest girl:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">151 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Height of the shortest girl:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">128 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Range of the data:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Range = 151 - 128</div>
                    <div class="sol-step"><span class="ans-highlight">Range = 23 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Mean height of the girls:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of heights = 135+150+139+128+151+132+146+149+143+141 = 1414</div>
                    <div class="sol-step">Total girls = 10</div>
                    <div class="sol-step">Mean height = <div class="frac"><span class="num">1414</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean height = 141.4 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) Girls having heights more than the mean height:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Mean height = 141.4 cm</div>
                    <div class="sol-step">Girls taller than 141.4 cm: 143, 146, 149, 150, 151</div>
                    <div class="sol-step"><span class="ans-highlight">5 girls</span></div>
                </div>
            </div>
        </div>
    `,
    "ex3-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #CE93D8; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #AB47BC; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border-radius: 8px; }
            .data-table { width: 100%; min-width: 280px; border-collapse: collapse; background: #1a1a2e; border: 1px solid #AB47BC; font-size: 0.95em; }
            .data-table th, .data-table td { border: 1px solid rgba(171, 71, 188, 0.3); padding: 8px; text-align: center; }
            .data-table th { background: rgba(171, 71, 188, 0.2); color: #AB47BC; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. The scores in a mathematics test (out of 25) of 15 students are as follows:<br/>19, 25, 23, 20, 9, 20, 15, 10, 5, 16, 25, 20, 24, 12, 20<br/>Find the mode and median of this data. Are they the same?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging scores in ascending order:</div>
                    <div class="sol-step">5, 9, 10, 12, 15, 16, 19, 20, 20, 20, 20, 23, 24, 25, 25</div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Mode:</b></div>
                    <div class="sol-step">Mode is the observation occurring most frequently.</div>
                    <div class="sol-step">20 occurs 4 times.</div>
                    <div class="sol-step"><span class="ans-highlight">Mode = 20</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Median:</b></div>
                    <div class="sol-step">Total number of observations n = 15 (odd)</div>
                    <div class="sol-step">Median = <div class="frac"><span class="num">15 + 1</span><span class="den">2</span></div> th observation = 8th observation</div>
                    <div class="sol-step">From the sorted list, 8th observation is 20.</div>
                    <div class="sol-step"><span class="ans-highlight">Median = 20</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Are they the same?</b></div>
                    <div class="sol-step"><span class="ans-highlight">Yes, Mode and Median are the same (both equal to 20).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. The runs scored in a cricket match by 11 players are as follows:<br/>6, 15, 120, 50, 100, 80, 10, 15, 8, 10, 15<br/>Find the mean, mode and median of this data. Are the three same?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging runs in ascending order:</div>
                    <div class="sol-step">6, 8, 10, 10, 15, 15, 15, 50, 80, 100, 120</div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Mean:</b></div>
                    <div class="sol-step">Sum of runs = 6+8+10+10+15+15+15+50+80+100+120 = 429</div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">429</span><span class="den">11</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Mean = 39</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Mode:</b></div>
                    <div class="sol-step">15 occurs 3 times (most frequent).</div>
                    <div class="sol-step"><span class="ans-highlight">Mode = 15</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Median:</b></div>
                    <div class="sol-step">n = 11 (odd)</div>
                    <div class="sol-step">Median = <div class="frac"><span class="num">11 + 1</span><span class="den">2</span></div> th observation = 6th observation</div>
                    <div class="sol-step">From sorted list, 6th observation is 15.</div>
                    <div class="sol-step"><span class="ans-highlight">Median = 15</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Are the three same?</b></div>
                    <div class="sol-step"><span class="ans-highlight">No, the three are not same (Mean is 39, while Mode and Median are 15).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. The weights (in kg.) of 15 students of a class are:<br/>38, 42, 35, 37, 45, 50, 32, 43, 43, 40, 36, 38, 43, 38, 47<br/>(i) Find the mode and median of this data.<br/>(ii) Is there more than one mode?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging weights in ascending order:</div>
                    <div class="sol-step">32, 35, 36, 37, 38, 38, 38, 40, 42, 43, 43, 43, 45, 47, 50</div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(i) Mode and Median:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">38 occurs 3 times and 43 occurs 3 times.</div>
                    <div class="sol-step"><span class="ans-highlight">Mode = 38 and 43</span></div>
                    <div class="sol-step">n = 15 (odd)</div>
                    <div class="sol-step">Median = <div class="frac"><span class="num">15 + 1</span><span class="den">2</span></div> th observation = 8th observation</div>
                    <div class="sol-step">8th observation is 40.</div>
                    <div class="sol-step"><span class="ans-highlight">Median = 40 kg</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Is there more than one mode?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, there are two modes (38 and 43).</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find the mode and median of the data: 13, 16, 12, 14, 19, 12, 14, 13, 14</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging data in ascending order:</div>
                    <div class="sol-step">12, 12, 13, 13, 14, 14, 14, 16, 19</div>
                    <div class="sol-step">Mode = Observation occurring most frequently (14 occurs 3 times).</div>
                    <div class="sol-step"><span class="ans-highlight">Mode = 14</span></div>
                    <div class="sol-step">n = 9 (odd)</div>
                    <div class="sol-step">Median = <div class="frac"><span class="num">9 + 1</span><span class="den">2</span></div> th observation = 5th observation</div>
                    <div class="sol-step">5th observation is 14.</div>
                    <div class="sol-step"><span class="ans-highlight">Median = 14</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Tell whether the statement is true or false:<br/>(i) The mode is always one of the numbers in a data.<br/>(ii) The mean is one of the numbers in a data.<br/>(iii) The median is always one of the numbers in a data.<br/>(iv) The data 6, 4, 3, 8, 9, 12, 13, 9 has mean 9.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) The mode is always one of the numbers in a data:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">True</span> (Mode comes from the given data set).</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) The mean is one of the numbers in a data:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">False</span> (Mean can be a fraction or number not present in the data).</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) The median is always one of the numbers in a data:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">True</span> (For odd number of observations).</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) The data 6, 4, 3, 8, 9, 12, 13, 9 has mean 9:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum = 6 + 4 + 3 + 8 + 9 + 12 + 13 + 9 = 64</div>
                    <div class="sol-step">Mean = <div class="frac"><span class="num">64</span><span class="den">8</span></div> = 8</div>
                    <div class="sol-step">Given mean is 9, which is incorrect.</div>
                    <div class="sol-step"><span class="ans-highlight">False</span></div>
                </div>
            </div>
        </div>
    `,
    "ex3-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #AB47BC; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #AB47BC; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #CE93D8; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #CE93D8; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #AB47BC; }
            .chart-container { background: #1a1a2e; padding: 15px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(171, 71, 188, 0.3); text-align: center; overflow-x: auto; }
            .legend { display: flex; justify-content: center; gap: 15px; margin-top: 10px; font-size: 0.9em; }
            .legend-item { display: flex; align-items: center; gap: 5px; }
            .legend-color { width: 12px; height: 12px; border-radius: 2px; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border-radius: 8px; }
            .data-table { width: 100%; min-width: 280px; border-collapse: collapse; background: #1a1a2e; border: 1px solid #AB47BC; font-size: 0.95em; }
            .data-table th, .data-table td { border: 1px solid rgba(171, 71, 188, 0.3); padding: 8px; text-align: center; }
            .data-table th { background: rgba(171, 71, 188, 0.2); color: #AB47BC; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Use the bar graph (Fig 3.3) to answer the following questions:<br/>(a) Which is the most popular pet?<br/>(b) How many students have dog as a pet?</div>
                <div class="sol-body">
                    <div class="chart-container">
                        <div style="color: #AB47BC; font-weight: bold; margin-bottom: 10px;">Pets owned by students of class seven</div>
                        <svg width="300" height="200" viewBox="0 0 300 200" style="max-width: 100%; height: auto;">
                            <line x1="40" y1="20" x2="40" y2="160" stroke="#fff" stroke-width="1" />
                            <line x1="40" y1="160" x2="280" y2="160" stroke="#fff" stroke-width="1" />
                            <text x="10" y="165" fill="#aaa" font-size="10">0</text>
                            <text x="10" y="140" fill="#aaa" font-size="10">2</text>
                            <text x="10" y="115" fill="#aaa" font-size="10">4</text>
                            <text x="10" y="90" fill="#aaa" font-size="10">6</text>
                            <text x="10" y="65" fill="#aaa" font-size="10">8</text>
                            <text x="5" y="40" fill="#aaa" font-size="10">10</text>
                            <text x="5" y="15" fill="#aaa" font-size="10">12</text>
                            <rect x="55" y="60" width="30" height="100" fill="#FF5252" rx="3" /> <text x="55" y="175" fill="#fff" font-size="10">Dogs</text>
                            <rect x="100" y="35" width="30" height="125" fill="#AB47BC" rx="3" /> <text x="100" y="175" fill="#fff" font-size="10">Cats</text>
                            <rect x="145" y="135" width="30" height="25" fill="#448AFF" rx="3" /> <text x="145" y="175" fill="#fff" font-size="10">Rabbits</text>
                            <rect x="190" y="97.5" width="30" height="62.5" fill="#00C853" rx="3" /> <text x="190" y="175" fill="#fff" font-size="10">Hamst.</text>
                            <rect x="235" y="122.5" width="30" height="37.5" fill="#FFD600" rx="3" /> <text x="235" y="175" fill="#fff" font-size="10">Others</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(a) Most popular pet:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Look at the heights of the bars in the graph.</div>
                    <div class="sol-step">The bar for Cats is the highest (reaching up to 10).</div>
                    <div class="sol-step"><span class="ans-highlight">Cat is the most popular pet</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Students having dog as a pet:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Locate the 'Dogs' bar on the horizontal axis.</div>
                    <div class="sol-step">Follow the top of the bar to the vertical axis, which points to 8.</div>
                    <div class="sol-step"><span class="ans-highlight">8 students</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Read the bar graph (Fig 3.4) which shows the number of books sold by a bookstore during five consecutive years and answer the following questions:<br/>(i) About how many books were sold in 1989? 1990? 1992?<br/>(ii) In which year were about 475 books sold? About 225 books sold?<br/>(iii) In which years were fewer than 250 books sold?<br/>(iv) Can you explain how you would estimate the number of books sold in 1989?</div>
                <div class="sol-body">
                    <div class="chart-container">
                        <div style="font-size: 0.8em; text-align: right; color: #aaa; margin-bottom: 5px;">Scale: 1 cm = 100 books</div>
                        <svg width="320" height="220" viewBox="0 0 320 220" style="max-width: 100%; height: auto;">
                            <line x1="40" y1="20" x2="40" y2="180" stroke="#fff" stroke-width="1" />
                            <line x1="40" y1="180" x2="300" y2="180" stroke="#fff" stroke-width="1" />
                            <text x="10" y="185" fill="#aaa" font-size="9">0</text>
                            <text x="10" y="155" fill="#aaa" font-size="9">100</text>
                            <text x="10" y="125" fill="#aaa" font-size="9">200</text>
                            <text x="10" y="95" fill="#aaa" font-size="9">300</text>
                            <text x="10" y="65" fill="#aaa" font-size="9">400</text>
                            <text x="10" y="35" fill="#aaa" font-size="9">500</text>
                            <text x="10" y="10" fill="#aaa" font-size="9">600</text>
                            <rect x="55" y="126" width="30" height="54" fill="#FF8A65" rx="2" /> <text x="55" y="195" fill="#fff" font-size="9">1989</text>
                            <rect x="105" y="37.5" width="30" height="142.5" fill="#7E57C2" rx="2" /> <text x="105" y="195" fill="#fff" font-size="9">1990</text>
                            <rect x="155" y="90" width="30" height="90" fill="#26A69A" rx="2" /> <text x="155" y="195" fill="#fff" font-size="9">1991</text>
                            <rect x="205" y="112.5" width="30" height="67.5" fill="#D4E157" rx="2" /> <text x="205" y="195" fill="#fff" font-size="9">1992</text>
                            <rect x="255" y="5" width="30" height="175" fill="#FFCA28" rx="2" /> <text x="255" y="195" fill="#fff" font-size="9">1993</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(i) Books sold in 1989, 1990, 1992:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In 1989, the bar height is just below 200 $approx$ <span class="ans-highlight">180 books</span></div>
                    <div class="sol-step">In 1990, the bar height is just below 500 $approx$ <span class="ans-highlight">475 books</span></div>
                    <div class="sol-step">In 1992, the bar height is slightly above 200 $approx$ <span class="ans-highlight">225 books</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Years for 475 and 225 books:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">About 475 books were sold in <span class="ans-highlight">1990</span></div>
                    <div class="sol-step">About 225 books were sold in <span class="ans-highlight">1992</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Fewer than 250 books sold:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Years with fewer than 250 books sold: <span class="ans-highlight">1989 and 1992</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Explanation of estimate for 1989:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The scale is 1 cm = 100 books.</div>
                    <div class="sol-step">The bar for 1989 is about 1.8 cm high.</div>
                    <div class="sol-step">1.8 &times; 100 = 180 books.</div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Number of children in six different classes are given below. Represent the data on a bar graph.<br/>Class: Fifth (135), Sixth (120), Seventh (95), Eighth (100), Ninth (90), Tenth (80).<br/>(a) How would you choose a scale?<br/>(b) Answer the following questions:<br/>(i) Which class has the maximum number of children? And the minimum?<br/>(ii) Find the ratio of students of class sixth to the students of class eight.</div>
                <div class="sol-body">
                    <div class="chart-container">
                        <svg width="320" height="200" viewBox="0 0 320 200" style="max-width: 100%; height: auto;">
                            <line x1="40" y1="20" x2="40" y2="160" stroke="#fff" stroke-width="1" />
                            <line x1="40" y1="160" x2="310" y2="160" stroke="#fff" stroke-width="1" />
                            <text x="15" y="165" fill="#aaa" font-size="9">0</text>
                            <text x="15" y="145" fill="#aaa" font-size="9">20</text>
                            <text x="15" y="125" fill="#aaa" font-size="9">40</text>
                            <text x="15" y="105" fill="#aaa" font-size="9">60</text>
                            <text x="15" y="85" fill="#aaa" font-size="9">80</text>
                            <text x="10" y="65" fill="#aaa" font-size="9">100</text>
                            <text x="10" y="45" fill="#aaa" font-size="9">120</text>
                            <text x="10" y="25" fill="#aaa" font-size="9">140</text>
                            <rect x="50" y="30" width="30" height="130" fill="#FF1744" rx="2" /> <text x="50" y="175" fill="#fff" font-size="9">5th</text>
                            <rect x="90" y="45" width="30" height="115" fill="#D500F9" rx="2" /> <text x="90" y="175" fill="#fff" font-size="9">6th</text>
                            <rect x="130" y="70" width="30" height="90" fill="#00E5FF" rx="2" /> <text x="130" y="175" fill="#fff" font-size="9">7th</text>
                            <rect x="170" y="65" width="30" height="95" fill="#FFEA00" rx="2" /> <text x="170" y="175" fill="#fff" font-size="9">8th</text>
                            <rect x="210" y="75" width="30" height="85" fill="#00E676" rx="2" /> <text x="210" y="175" fill="#fff" font-size="9">9th</text>
                            <rect x="250" y="85" width="30" height="75" fill="#FF9100" rx="2" /> <text x="250" y="175" fill="#fff" font-size="9">10th</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(a) Choosing a scale:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Scale: 1 unit = 20 children</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) (i) Maximum and Minimum children:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Maximum children = <span class="ans-highlight">Fifth class (135 children)</span></div>
                    <div class="sol-step">Minimum children = <span class="ans-highlight">Tenth class (80 children)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) (ii) Ratio of Class 6th to Class 8th:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Class 6th students = 120</div>
                    <div class="sol-step">Class 8th students = 100</div>
                    <div class="sol-step">Ratio = <div class="frac"><span class="num">120</span><span class="den">100</span></div> = <div class="frac"><span class="num">6</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Ratio = 6 : 5</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. The performance of a student in 1st Term and 2nd Term is given. Draw a double bar graph choosing appropriate scale and answer the following:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>Subject</th><th>English</th><th>Hindi</th><th>Maths</th><th>Science</th><th>S. Science</th></tr>
                            <tr><th>1st Term</th><td>67</td><td>72</td><td>88</td><td>81</td><td>73</td></tr>
                            <tr><th>2nd Term</th><td>70</td><td>65</td><td>95</td><td>85</td><td>75</td></tr>
                        </table>
                    </div>

                    <div class="chart-container">
                        <div class="legend">
                            <div class="legend-item"><div class="legend-color" style="background: #AB47BC;"></div> 1st Term</div>
                            <div class="legend-item"><div class="legend-color" style="background: #00E676;"></div> 2nd Term</div>
                        </div>
                        <svg width="340" height="220" viewBox="0 0 340 220" style="max-width: 100%; height: auto;">
                            <line x1="40" y1="20" x2="40" y2="180" stroke="#fff" stroke-width="1" />
                            <line x1="40" y1="180" x2="330" y2="180" stroke="#fff" stroke-width="1" />
                            <text x="15" y="185" fill="#aaa" font-size="9">0</text>
                            <text x="10" y="145" fill="#aaa" font-size="9">25</text>
                            <text x="10" y="105" fill="#aaa" font-size="9">50</text>
                            <text x="10" y="65" fill="#aaa" font-size="9">75</text>
                            <text x="5" y="25" fill="#aaa" font-size="9">100</text>
                            <rect x="50" y="72.8" width="15" height="107.2" fill="#AB47BC" /> <rect x="65" y="68" width="15" height="112" fill="#00E676" /> <text x="52" y="195" fill="#fff" font-size="9">Eng</text>
                            <rect x="105" y="64.8" width="15" height="115.2" fill="#AB47BC" /> <rect x="120" y="76" width="15" height="104" fill="#00E676" /> <text x="108" y="195" fill="#fff" font-size="9">Hin</text>
                            <rect x="160" y="39.2" width="15" height="140.8" fill="#AB47BC" /> <rect x="175" y="28" width="15" height="152" fill="#00E676" /> <text x="163" y="195" fill="#fff" font-size="9">Mat</text>
                            <rect x="215" y="50.4" width="15" height="129.6" fill="#AB47BC" /> <rect x="230" y="44" width="15" height="136" fill="#00E676" /> <text x="218" y="195" fill="#fff" font-size="9">Sci</text>
                            <rect x="270" y="63.2" width="15" height="116.8" fill="#AB47BC" /> <rect x="285" y="60" width="15" height="120" fill="#00E676" /> <text x="275" y="195" fill="#fff" font-size="9">S.Sci</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(i) Subject with maximum performance improvement:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Improvement in Maths = 95 - 88 = 7</div>
                    <div class="sol-step">Improvement in Science = 85 - 81 = 4</div>
                    <div class="sol-step">Improvement in English = 70 - 67 = 3</div>
                    <div class="sol-step"><span class="ans-highlight">Maths (improved by 7 marks)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Subject with least improvement:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Improvement in S. Science = 75 - 73 = 2</div>
                    <div class="sol-step"><span class="ans-highlight">S. Science (improved by 2 marks)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Subject in which performance has gone down:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">In Hindi: 72 (1st term) $	o$ 65 (2nd term)</div>
                    <div class="sol-step"><span class="ans-highlight">Hindi (decreased by 7 marks)</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Consider this data collected from a survey of a colony.</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>Sport</th><th>Cricket</th><th>Basket<br/>Ball</th><th>Swim-<br/>ming</th><th>Hockey</th><th>Athle-<br/>tics</th></tr>
                            <tr><th>Watching</th><td>1240</td><td>470</td><td>510</td><td>430</td><td>250</td></tr>
                            <tr><th>Partici-<br/>pating</th><td>620</td><td>320</td><td>320</td><td>250</td><td>105</td></tr>
                        </table>
                    </div>

                    <div class="chart-container">
                        <div class="legend">
                            <div class="legend-item"><div class="legend-color" style="background: #AB47BC;"></div> Watching</div>
                            <div class="legend-item"><div class="legend-color" style="background: #FFD600;"></div> Participating</div>
                        </div>
                        <svg width="340" height="220" viewBox="0 0 340 220" style="max-width: 100%; height: auto;">
                            <line x1="45" y1="20" x2="45" y2="180" stroke="#fff" stroke-width="1" />
                            <line x1="45" y1="180" x2="330" y2="180" stroke="#fff" stroke-width="1" />
                            <text x="5" y="185" fill="#aaa" font-size="8">0</text>
                            <text x="5" y="145" fill="#aaa" font-size="8">300</text>
                            <text x="5" y="105" fill="#aaa" font-size="8">600</text>
                            <text x="5" y="65" fill="#aaa" font-size="8">900</text>
                            <text x="5" y="25" fill="#aaa" font-size="8">1200</text>
                            <rect x="60" y="20" width="15" height="160" fill="#AB47BC" /> <rect x="75" y="100" width="15" height="80" fill="#FFD600" /> <text x="60" y="195" fill="#fff" font-size="8">Cricket</text>
                            <rect x="115" y="117" width="15" height="63" fill="#AB47BC" /> <rect x="130" y="137" width="15" height="43" fill="#FFD600" /> <text x="115" y="195" fill="#fff" font-size="8">B.Ball</text>
                            <rect x="170" y="112" width="15" height="68" fill="#AB47BC" /> <rect x="185" y="137" width="15" height="43" fill="#FFD600" /> <text x="170" y="195" fill="#fff" font-size="8">Swim</text>
                            <rect x="225" y="122" width="15" height="58" fill="#AB47BC" /> <rect x="240" y="146" width="15" height="34" fill="#FFD600" /> <text x="225" y="195" fill="#fff" font-size="8">Hockey</text>
                            <rect x="280" y="146" width="15" height="34" fill="#AB47BC" /> <rect x="295" y="166" width="15" height="14" fill="#FFD600" /> <text x="285" y="195" fill="#fff" font-size="8">Ath.</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(i) What do you infer from the bar graph?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The 'Watching' bar is higher than the 'Participating' bar for all sports.</div>
                    <div class="sol-step"><span class="ans-highlight">Inference: Most people prefer watching sports rather than participating in them.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Which sport is most popular?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Cricket has the highest bar for both watching and participating.</div>
                    <div class="sol-step"><span class="ans-highlight">Cricket</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Which is more preferred, watching or participating in sports?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total watching count is much higher than total participating count.</div>
                    <div class="sol-step"><span class="ans-highlight">Watching sports is more preferred.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Minimum and maximum temperature of various cities:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table class="data-table">
                            <tr><th>City</th><th>Ahmed-<br/>abad</th><th>Amrit-<br/>sar</th><th>Banga-<br/>lore</th><th>Chen-<br/>nai</th><th>Delhi</th><th>Jai-<br/>pur</th><th>Jam-<br/>mu</th><th>Mum-<br/>bai</th></tr>
                            <tr><th>Max</th><td>38°C</td><td>37°C</td><td>28°C</td><td>36°C</td><td>38°C</td><td>39°C</td><td>45°C</td><td>32°C</td></tr>
                            <tr><th>Min</th><td>29°C</td><td>26°C</td><td>21°C</td><td>27°C</td><td>28°C</td><td>29°C</td><td>26°C</td><td>27°C</td></tr>
                        </table>
                    </div>

                    <div class="chart-container">
                        <div class="legend">
                            <div class="legend-item"><div class="legend-color" style="background: #F44336;"></div> Max</div>
                            <div class="legend-item"><div class="legend-color" style="background: #2196F3;"></div> Min</div>
                        </div>
                        <svg width="340" height="240" viewBox="0 0 340 240" style="max-width: 100%; height: auto;">
                            <line x1="30" y1="20" x2="30" y2="180" stroke="#fff" stroke-width="1" />
                            <line x1="30" y1="180" x2="330" y2="180" stroke="#fff" stroke-width="1" />
                            <text x="5" y="185" fill="#aaa" font-size="8">0</text>
                            <text x="5" y="145" fill="#aaa" font-size="8">10</text>
                            <text x="5" y="105" fill="#aaa" font-size="8">20</text>
                            <text x="5" y="65" fill="#aaa" font-size="8">30</text>
                            <text x="5" y="25" fill="#aaa" font-size="8">40</text>
                            <rect x="35" y="28" width="8" height="152" fill="#F44336" /> <rect x="43" y="64" width="8" height="116" fill="#2196F3" /> <text x="35" y="195" fill="#fff" font-size="7" transform="rotate(45, 35, 195)">Ahmedabad</text>
                            <rect x="75" y="32" width="8" height="148" fill="#F44336" /> <rect x="83" y="76" width="8" height="104" fill="#2196F3" /> <text x="75" y="195" fill="#fff" font-size="7" transform="rotate(45, 75, 195)">Amritsar</text>
                            <rect x="115" y="68" width="8" height="112" fill="#F44336" /> <rect x="123" y="96" width="8" height="84" fill="#2196F3" /> <text x="115" y="195" fill="#fff" font-size="7" transform="rotate(45, 115, 195)">Bangalore</text>
                            <rect x="155" y="36" width="8" height="144" fill="#F44336" /> <rect x="163" y="72" width="8" height="108" fill="#2196F3" /> <text x="155" y="195" fill="#fff" font-size="7" transform="rotate(45, 155, 195)">Chennai</text>
                            <rect x="195" y="28" width="8" height="152" fill="#F44336" /> <rect x="203" y="68" width="8" height="112" fill="#2196F3" /> <text x="195" y="195" fill="#fff" font-size="7" transform="rotate(45, 195, 195)">Delhi</text>
                            <rect x="235" y="24" width="8" height="156" fill="#F44336" /> <rect x="243" y="64" width="8" height="116" fill="#2196F3" /> <text x="235" y="195" fill="#fff" font-size="7" transform="rotate(45, 235, 195)">Jaipur</text>
                            <rect x="275" y="0" width="8" height="180" fill="#F44336" /> <rect x="283" y="76" width="8" height="104" fill="#2196F3" /> <text x="275" y="195" fill="#fff" font-size="7" transform="rotate(45, 275, 195)">Jammu</text>
                            <rect x="315" y="52" width="8" height="128" fill="#F44336" /> <rect x="323" y="72" width="8" height="108" fill="#2196F3" /> <text x="315" y="195" fill="#fff" font-size="7" transform="rotate(45, 315, 195)">Mumbai</text>
                        </svg>
                    </div>

                    <div class="sol-step"><b>(i) Largest difference in minimum and maximum temperature:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Jammu: 45°C - 26°C = 19°C</div>
                    <div class="sol-step"><span class="ans-highlight">Jammu</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Hottest and Coldest city:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Hottest city (highest Max temp) = <span class="ans-highlight">Jammu (45°C)</span></div>
                    <div class="sol-step">Coldest city (lowest Min temp) = <span class="ans-highlight">Bangalore (21°C)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Cities where Max temp of one is less than Min temp of another:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Bangalore Max (28°C) < Ahmedabad Min (29°C)</div>
                    <div class="sol-step">Bangalore Max (28°C) < Jaipur Min (29°C)</div>
                    <div class="sol-step"><span class="ans-highlight">Bangalore and Ahmedabad (or Bangalore and Jaipur)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) City with least difference between minimum and maximum temperature:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Mumbai difference = 32°C - 27°C = 5°C</div>
                    <div class="sol-step"><span class="ans-highlight">Mumbai</span></div>
                </div>
            </div>
        </div>
    `
  },
  examples: [],
  mcqs: [
    {
      id: "c7g3-mcq-1",
      question: "What is the average of 4, 6, 8, and 10?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "b",
      explanation: "Mean = (4 + 6 + 8 + 10) / 4 = 28 / 4 = 7."
    },
    {
      id: "c7g3-mcq-2",
      question: "What is the range of data: 12, 10, 15, 18, 5?",
      options: ["10", "13", "18", "5"],
      correctAnswer: "b",
      explanation: "Range = Highest - Lowest = 18 - 5 = 13."
    },
    {
      id: "c7g3-mcq-3",
      question: "What is the mode of 1, 2, 2, 3, 4?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "b",
      explanation: "Mode is the most frequent value, which is 2 (occurs twice)."
    },
    {
      id: "c7g3-mcq-4",
      question: "What is the median of 3, 1, 5?",
      options: ["1", "3", "5", "4"],
      correctAnswer: "b",
      explanation: "Arranging in order: 1, 3, 5. The middle value is 3."
    },
    {
      id: "c7g3-mcq-5",
      question: "What is the probability of an impossible event?",
      options: ["0", "1", "1/2", "Undefined"],
      correctAnswer: "a",
      explanation: "An impossible event can never occur, so its probability is 0."
    },
    {
      id: "c7g3-mcq-6",
      question: "What is the sum of probabilities of all possible outcomes of an experiment?",
      options: ["0", "0.5", "1", "2"],
      correctAnswer: "c",
      explanation: "The total probability of all possible outcomes is always equal to 1."
    },
    {
      id: "c7g3-mcq-7",
      question: "When a fair die is thrown, what is the probability of getting a prime number (2, 3, 5)?",
      options: ["1/2", "1/3", "1/6", "2/3"],
      correctAnswer: "a",
      explanation: "Prime numbers on a die are 2, 3, 5 (3 favorable outcomes). P = 3/6 = 1/2."
    },
    {
      id: "c7g3-mcq-8",
      question: "Data in ascending order: 10, 12, x, 18, 20. If median is 15, what is the value of x?",
      options: ["14", "15", "16", "17"],
      correctAnswer: "b",
      explanation: "The 3rd observation is the median, so x = 15."
    },
    {
      id: "c7g3-mcq-9",
      question: "Which of the following values cannot be a probability?",
      options: ["0", "1", "0.5", "1.5"],
      correctAnswer: "d",
      explanation: "Probability of any event must lie between 0 and 1 inclusive. It cannot be greater than 1."
    },
    {
      id: "c7g3-mcq-10",
      question: "What is the mean of the first 3 natural numbers (1, 2, 3)?",
      options: ["1", "2", "3", "4"],
      correctAnswer: "b",
      explanation: "Mean = (1 + 2 + 3) / 3 = 6 / 3 = 2."
    }
  ],
  summary: [],
};
