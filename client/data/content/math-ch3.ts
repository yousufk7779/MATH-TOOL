import { ChapterContent } from "../types";

export const mathCh3: ChapterContent = {
  id: "ch3",
  number: 3,
  title: "Pair of Linear Equations in Two Variables",
  isHtmlView: true,
  introduction:
    "A system of two linear equations in two variables represents two straight lines in a plane. We study graphical interpretation (intersecting, parallel, coincident lines) and algebraic methods (Substitution and Elimination methods) to solve them.",
  definitions: [
    { term: "Linear Equation in Two Variables", description: "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero." },
    { term: "Consistent System", description: "A pair of linear equations having at least one solution (intersecting or coincident lines)." },
    { term: "Inconsistent System", description: "A pair of linear equations having no solution (parallel lines)." }
  ],
  keyPoints: [
    "Ratio Comparison for a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0:",
    "1. Intersecting Lines (Unique Solution): a₁/a₂ ≠ b₁/b₂ (Consistent)",
    "2. Coincident Lines (Infinitely Many Solutions): a₁/a₂ = b₁/b₂ = c₁/c₂ (Dependent & Consistent)",
    "3. Parallel Lines (No Solution): a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Inconsistent)"
  ],
  formulas: [
    { name: "Unique Solution Condition", formula: "\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" },
    { name: "Infinite Solutions Condition", formula: "\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}" },
    { name: "No Solution Condition", formula: "\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}" }
  ],
  crux: [],
  exercises: [
    { id: "ex3-1", name: "Exercise 3.1", questions: [] },
    { id: "ex3-2", name: "Exercise 3.2", questions: [] },
    { id: "ex3-3", name: "Exercise 3.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF8A65; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 138, 101, 0.05); border-left: 4px solid #FF8A65; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF8A65; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Pair of Linear Equations</div>
            <p class="content-text">Analyze system consistency using ratio tests and master algebraic solution techniques (Substitution & Elimination) along with real-world application word problems.</p>
            <div class="point-box">
                <div class="point-item">Ratio Tests: Compare a₁/a₂, b₁/b₂, c₁/c₂ to determine line behavior.</div>
                <div class="point-item">Substitution Method: Express one variable in terms of the other.</div>
                <div class="point-item">Elimination Method: Multiply equations by constants to eliminate one variable.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex3-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF8A65; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF8A65; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFAB91; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF8A65; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFAB91; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF8A65; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Form the pair of linear equations in the following problems, and find their solutions graphically:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF8A65;">(i) 10 students of Class X took part in a Mathematics quiz. If the number of girls is 4 more than the number of boys, find the number of boys and girls who took part in the quiz.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number of girls be <i>x</i> and number of boys be <i>y</i>.</div>
                    <div class="sol-step">1. Total students = 10 &rArr; <b>x + y = 10</b></div>
                    <div class="sol-step">2. Girls are 4 more than boys &rArr; <b>x - y = 4</b></div>
                    <div class="sol-step"><b>Graphical Solution:</b></div>
                    <div class="sol-step">From x + y = 10 &rArr; (7, 3), (5, 5), (6, 4)</div>
                    <div class="sol-step">From x - y = 4 &rArr; (7, 3), (4, 0), (5, 1)</div>
                    <div class="sol-step">Intersection point of lines = <b>(7, 3)</b></div>
                    <div class="sol-step"><span class="ans-highlight">Number of girls (x) = 7, Number of boys (y) = 3</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF8A65;">(ii) 5 pencils and 7 pens together cost &rupee; 50, whereas 7 pencils and 5 pens together cost &rupee; 46. Find the cost of one pencil and that of one pen.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let cost of 1 pencil = &rupee; <i>x</i> and cost of 1 pen = &rupee; <i>y</i>.</div>
                    <div class="sol-step">1. <b>5x + 7y = 50</b></div>
                    <div class="sol-step">2. <b>7x + 5y = 46</b></div>
                    <div class="sol-step">Intersection point of lines = <b>(3, 5)</b></div>
                    <div class="sol-step"><span class="ans-highlight">Cost of 1 pencil = &rupee; 3, Cost of 1 pen = &rupee; 5</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. On comparing the ratios <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div>, <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> and <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div>, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#FF8A65;">(i) 5x - 4y + 8 = 0 ; 7x + 6y - 9 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">5</span><span class="den">7</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">-4</span><span class="den">6</span></div> = -<div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> &ne; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div>:</div>
                    <div class="sol-step"><span class="ans-highlight">The lines intersect at a single point (Unique Solution).</span></div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF8A65;">(ii) 9x + 3y + 12 = 0 ; 18x + 6y + 24 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">9</span><span class="den">18</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">3</span><span class="den">6</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div> = <div class="frac"><span class="num">12</span><span class="den">24</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div>:</div>
                    <div class="sol-step"><span class="ans-highlight">The lines are coincident (Infinitely many solutions).</span></div>

                    <!-- Q2 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF8A65;">(iii) 6x - 3y + 10 = 0 ; 2x - y + 9 = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">6</span><span class="den">2</span></div> = 3 &nbsp;,&nbsp; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">-3</span><span class="den">-1</span></div> = 3 &nbsp;,&nbsp; <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div> = <div class="frac"><span class="num">10</span><span class="den">9</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> &ne; <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div>:</div>
                    <div class="sol-step"><span class="ans-highlight">The lines are parallel (No Solution).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. On comparing the ratios <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div>, <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> and <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div>, find out whether the following pairs of linear equations are consistent or inconsistent:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF8A65;">(i) 3x + 2y = 5 ; 2x - 3y = 7</b></div>
                    <div class="sol-step"><div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">3</span><span class="den">2</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">2</span><span class="den">-3</span></div> = -<div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> &ne; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> &rArr; <span class="ans-highlight">Consistent</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF8A65;">(ii) 2x - 3y = 8 ; 4x - 6y = 9</b></div>
                    <div class="sol-step"><div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">2</span><span class="den">4</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> = <div class="frac"><span class="num">-3</span><span class="den">-6</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;,&nbsp; <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div> = <div class="frac"><span class="num">8</span><span class="den">9</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">a₁</span><span class="den">a₂</span></div> = <div class="frac"><span class="num">b₁</span><span class="den">b₂</span></div> &ne; <div class="frac"><span class="num">c₁</span><span class="den">c₂</span></div> &rArr; <span class="ans-highlight">Inconsistent</span></div>
                </div>
            </div>
        </div>
    `,
    "ex3-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF8A65; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF8A65; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFAB91; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF8A65; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFAB91; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Solve the following pair of linear equations by the Substitution method:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF8A65;">(i) x + y = 14 ; x - y = 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">From eq (2): x = y + 4</div>
                    <div class="sol-step">Substituting x into eq (1):</div>
                    <div class="sol-step">(y + 4) + y = 14</div>
                    <div class="sol-step">2y = 10 &rArr; y = 5</div>
                    <div class="sol-step">x = 5 + 4 = 9</div>
                    <div class="sol-step"><span class="ans-highlight">x = 9, y = 5</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF8A65;">(ii) s - t = 3 ; <div class="frac"><span class="num">s</span><span class="den">3</span></div> + <div class="frac"><span class="num">t</span><span class="den">2</span></div> = 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">From eq (1): s = t + 3</div>
                    <div class="sol-step">Clearing denominator of eq (2): 2s + 3t = 36</div>
                    <div class="sol-step">Substituting s = t + 3:</div>
                    <div class="sol-step">2(t + 3) + 3t = 36</div>
                    <div class="sol-step">2t + 6 + 3t = 36 &rArr; 5t = 30 &rArr; t = 6</div>
                    <div class="sol-step">s = 6 + 3 = 9</div>
                    <div class="sol-step"><span class="ans-highlight">s = 9, t = 6</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Solve 2x + 3y = 11 and 2x - 4y = -24 and hence find the value of 'm' for which y = mx + 3:</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1. 2x + 3y = 11 &nbsp;--- (1)</div>
                    <div class="sol-step">2. 2x - 4y = -24 &nbsp;--- (2)</div>
                    <div class="sol-step">Subtracting (2) from (1):</div>
                    <div class="sol-step">7y = 35 &rArr; <span class="ans-highlight">y = 5</span></div>
                    <div class="sol-step">2x + 3(5) = 11 &rArr; 2x = -4 &rArr; <span class="ans-highlight">x = -2</span></div>
                    <div class="sol-step">Finding m in y = mx + 3:</div>
                    <div class="sol-step">5 = m(-2) + 3 &rArr; -2m = 2 &rArr; <span class="ans-highlight">m = -1</span></div>
                </div>
            </div>
        </div>
    `,
    "ex3-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF8A65; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF8A65; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFAB91; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF8A65; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFAB91; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Solve the following pair of linear equations by the Elimination method:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#FF8A65;">(i) x + y = 5 ; 2x - 3y = 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiply eq (1) by 3: 3x + 3y = 15</div>
                    <div class="sol-step">Add eq (2): (3x + 3y) + (2x - 3y) = 15 + 4</div>
                    <div class="sol-step">5x = 19 &rArr; <span class="ans-highlight">x = <div class="frac"><span class="num">19</span><span class="den">5</span></div></span></div>
                    <div class="sol-step">y = 5 - <div class="frac"><span class="num">19</span><span class="den">5</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">5</span></div></span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FF8A65;">(ii) 3x + 4y = 10 ; 2x - 2y = 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiply eq (2) by 2: 4x - 4y = 4</div>
                    <div class="sol-step">Add to eq (1): 7x = 14 &rArr; <span class="ans-highlight">x = 2</span></div>
                    <div class="sol-step">3(2) + 4y = 10 &rArr; 4y = 4 &rArr; <span class="ans-highlight">y = 1</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m3-mcq-1", question: "The pair of equations x = a and y = b graphically represents lines which are:", options: ["Parallel", "Intersecting at (b, a)", "Coincident", "Intersecting at (a, b)"], correctAnswer: "d", explanation: "The vertical line x = a and horizontal line y = b intersect at point (a, b)." },
    { id: "c10m3-mcq-2", question: "For what value of k do 3x - y + 8 = 0 and 6x - ky = -16 represent coincident lines?", options: ["1/2", "-1/2", "2", "-2"], correctAnswer: "c", explanation: "Coincident ratio a1/a2 = b1/b2 ➔ 3/6 = (-1)/(-k) ➔ 1/2 = 1/k ➔ k = 2." },
    { id: "c10m3-mcq-3", question: "If the lines 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then k is:", options: ["-5/4", "2/5", "15/4", "3/2"], correctAnswer: "c", explanation: "Parallel condition a1/a2 = b1/b2 ➔ 3/2 = 2k/5 ➔ 2k = 15/2 ➔ k = 15/4." },
    { id: "c10m3-mcq-4", question: "If a pair of linear equations is consistent, then the lines will be:", options: ["Always parallel", "Always coincident", "Intersecting or coincident", "Parallel or coincident"], correctAnswer: "c", explanation: "Consistency means having at least one solution (either intersecting at 1 point or coincident at infinitely many points)." },
    { id: "c10m3-mcq-5", question: "The solution of equations x + y = 7 and 2x - 3y = 9 is:", options: ["x = 6, y = 1", "x = 5, y = 2", "x = 4, y = 3", "x = 3, y = 4"], correctAnswer: "a", explanation: "Substituting x = 6, y = 1: 6 + 1 = 7 and 2(6) - 3(1) = 12 - 3 = 9." },
    { id: "c10m3-mcq-6", question: "If 2x + 3y = 12 and 3x - 2y = 5, then:", options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 1"], correctAnswer: "a", explanation: "Solving by elimination gives x = 3 and y = 2." },
    { id: "c10m3-mcq-7", question: "The pair of equations y = 0 and y = -7 has:", options: ["One solution", "Two solutions", "Infinitely many solutions", "No solution"], correctAnswer: "d", explanation: "Horizontal lines y = 0 and y = -7 are parallel and never intersect, so no solution." },
    { id: "c10m3-mcq-8", question: "If ax + by = c and lx + my = n has no solution, then:", options: ["am = bl", "am ≠ bl", "an = cl", "bn = cm"], correctAnswer: "a", explanation: "No solution condition: a/l = b/m ≠ c/n ➔ am = bl." },
    { id: "c10m3-mcq-9", question: "Aruna has only ₹ 1 and ₹ 2 coins with her. If the total number of coins is 50 and total amount of money is ₹ 75, then number of ₹ 1 and ₹ 2 coins are:", options: ["35 and 15", "25 and 25", "15 and 35", "30 and 20"], correctAnswer: "b", explanation: "x + y = 50 and x + 2y = 75 ➔ y = 25, x = 25." },
    { id: "c10m3-mcq-10", question: "The sum of digits of a two-digit number is 9. If 27 is added to it, the digits reverse. The number is:", options: ["27", "36", "45", "63"], correctAnswer: "b", explanation: "Number is 36. Sum = 3 + 6 = 9. Adding 27 gives 36 + 27 = 63 (digits reversed)." }
  ]
};
