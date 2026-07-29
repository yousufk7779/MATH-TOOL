import { ChapterContent } from "../types";

export const c7Math4: ChapterContent = {
  id: "c7-math-4",
  number: 4,
  title: "Simple Equations",
  isHtmlView: true,
  introduction:
    "An equation is a condition on a variable where two expressions are set equal. Solving an equation means finding the value of the variable that makes the equation true.",
  definitions: [
    {
      term: "Variable",
      description: "A symbol (usually a letter) that represents an unknown number.",
    },
    {
      term: "Equation",
      description: "A mathematical statement that asserts the equality of two expressions.",
    },
  ],
  keyPoints: [
    "LHS (Left Hand Side) must equal RHS (Right Hand Side).",
    "If we add/subtract/multiply/divide the same number on both sides, equality remains unchanged.",
    "Transposing a number means moving it to the other side with its sign changed.",
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex4-1", name: "Exercise 4.1", questions: [] },
    { id: "ex4-2", name: "Exercise 4.2", questions: [] },
    { id: "ex4-3", name: "Exercise 4.3", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #2196F3; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(33, 150, 243, 0.05); border-left: 4px solid #2196F3; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #2196F3; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Simple Equations allow us to solve for unknowns by maintaining a mathematical balance between two sides.</p>
            <div class="point-box">
                <div class="point-item">Equations contain an equality sign (=).</div>
                <div class="point-item">LHS and RHS are expressions on either side of the '=' sign.</div>
                <div class="point-item">The solution of an equation is the value that satisfies the equality.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex4-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #2196F3; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #64B5F6; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #64B5F6; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #2196F3; }
            .data-table { width: 100%; border-collapse: collapse; margin: 15px 0; background: #1a1a2e; border: 1px solid #2196F3; }
            .data-table th, .data-table td { border: 1px solid rgba(33, 150, 243, 0.3); padding: 10px; text-align: center; }
            .data-table th { background: rgba(33, 150, 243, 0.2); color: #2196F3; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Complete the last column of the table.</div>
                <div class="sol-body">
                    <table class="data-table">
                        <tr><th>S. No.</th><th>Equation</th><th>Value</th><th>Satisfied (Yes/No)</th></tr>
                        <tr><td>(i)</td><td>x + 3 = 0</td><td>x = 3</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(ii)</td><td>x + 3 = 0</td><td>x = 0</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(iii)</td><td>x + 3 = 0</td><td>x = -3</td><td><span class="ans-highlight">Yes</span></td></tr>
                        <tr><td>(iv)</td><td>x - 7 = 1</td><td>x = 7</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(v)</td><td>x - 7 = 1</td><td>x = 8</td><td><span class="ans-highlight">Yes</span></td></tr>
                        <tr><td>(vi)</td><td>5x = 25</td><td>x = 0</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(vii)</td><td>5x = 25</td><td>x = 5</td><td><span class="ans-highlight">Yes</span></td></tr>
                        <tr><td>(viii)</td><td>5x = 25</td><td>x = -5</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(ix)</td><td><div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2</td><td>m = -6</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(x)</td><td><div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2</td><td>m = 0</td><td><span class="ans-highlight">No</span></td></tr>
                        <tr><td>(xi)</td><td><div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2</td><td>m = 6</td><td><span class="ans-highlight">Yes</span></td></tr>
                    </table>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Detailed Step-by-step Solutions:</b></div>
                    
                    <div class="sol-step"><b>(i) Equation: x + 3 = 0 for x = 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = x + 3</div>
                    <div class="sol-step">Substituting x = 3:</div>
                    <div class="sol-step">LHS = 3 + 3</div>
                    <div class="sol-step">LHS = 6</div>
                    <div class="sol-step">RHS = 0</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Equation: x + 3 = 0 for x = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = x + 3</div>
                    <div class="sol-step">Substituting x = 0:</div>
                    <div class="sol-step">LHS = 0 + 3</div>
                    <div class="sol-step">LHS = 3</div>
                    <div class="sol-step">RHS = 0</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Equation: x + 3 = 0 for x = -3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = x + 3</div>
                    <div class="sol-step">Substituting x = -3:</div>
                    <div class="sol-step">LHS = -3 + 3</div>
                    <div class="sol-step">LHS = 0</div>
                    <div class="sol-step">RHS = 0</div>
                    <div class="sol-step">Since LHS = RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Satisfied (Yes)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Equation: x - 7 = 1 for x = 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = x - 7</div>
                    <div class="sol-step">Substituting x = 7:</div>
                    <div class="sol-step">LHS = 7 - 7</div>
                    <div class="sol-step">LHS = 0</div>
                    <div class="sol-step">RHS = 1</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) Equation: x - 7 = 1 for x = 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = x - 7</div>
                    <div class="sol-step">Substituting x = 8:</div>
                    <div class="sol-step">LHS = 8 - 7</div>
                    <div class="sol-step">LHS = 1</div>
                    <div class="sol-step">RHS = 1</div>
                    <div class="sol-step">Since LHS = RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Satisfied (Yes)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) Equation: 5x = 25 for x = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 5x</div>
                    <div class="sol-step">Substituting x = 0:</div>
                    <div class="sol-step">LHS = 5 &times; 0</div>
                    <div class="sol-step">LHS = 0</div>
                    <div class="sol-step">RHS = 25</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) Equation: 5x = 25 for x = 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 5x</div>
                    <div class="sol-step">Substituting x = 5:</div>
                    <div class="sol-step">LHS = 5 &times; 5</div>
                    <div class="sol-step">LHS = 25</div>
                    <div class="sol-step">RHS = 25</div>
                    <div class="sol-step">Since LHS = RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Satisfied (Yes)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(viii) Equation: 5x = 25 for x = -5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 5x</div>
                    <div class="sol-step">Substituting x = -5:</div>
                    <div class="sol-step">LHS = 5 &times; (-5)</div>
                    <div class="sol-step">LHS = -25</div>
                    <div class="sol-step">RHS = 25</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ix) Equation: <div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2 for m = -6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = <div class="frac"><span class="num">m</span><span class="den">3</span></div></div>
                    <div class="sol-step">Substituting m = -6:</div>
                    <div class="sol-step">LHS = -<div class="frac"><span class="num">6</span><span class="den">3</span></div></div>
                    <div class="sol-step">LHS = -2</div>
                    <div class="sol-step">RHS = 2</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(x) Equation: <div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2 for m = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = <div class="frac"><span class="num">m</span><span class="den">3</span></div></div>
                    <div class="sol-step">Substituting m = 0:</div>
                    <div class="sol-step">LHS = <div class="frac"><span class="num">0</span><span class="den">3</span></div></div>
                    <div class="sol-step">LHS = 0</div>
                    <div class="sol-step">RHS = 2</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Not Satisfied (No)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(xi) Equation: <div class="frac"><span class="num">m</span><span class="den">3</span></div> = 2 for m = 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = <div class="frac"><span class="num">m</span><span class="den">3</span></div></div>
                    <div class="sol-step">Substituting m = 6:</div>
                    <div class="sol-step">LHS = <div class="frac"><span class="num">6</span><span class="den">3</span></div></div>
                    <div class="sol-step">LHS = 2</div>
                    <div class="sol-step">RHS = 2</div>
                    <div class="sol-step">Since LHS = RHS</div>
                    <div class="sol-step"><span class="ans-highlight">Equation is Satisfied (Yes)</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Check whether the value given in the brackets is a solution to the given equation or not:<br/>
                (a) n + 5 = 19 (n = 1) &nbsp; (b) 7n + 5 = 19 (n = -2) &nbsp; (c) 7n + 5 = 19 (n = 2)<br/>
                (d) 4p - 3 = 13 (p = 1) &nbsp; (e) 4p - 3 = 13 (p = -4) &nbsp; (f) 4p - 3 = 13 (p = 0)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) n + 5 = 19 for n = 1:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = n + 5</div>
                    <div class="sol-step">Put n = 1:</div>
                    <div class="sol-step">LHS = 1 + 5</div>
                    <div class="sol-step">LHS = 6</div>
                    <div class="sol-step">RHS = 19</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">n = 1 is not a solution</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 7n + 5 = 19 for n = -2:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 7n + 5</div>
                    <div class="sol-step">Put n = -2:</div>
                    <div class="sol-step">LHS = 7 &times; (-2) + 5</div>
                    <div class="sol-step">LHS = -14 + 5</div>
                    <div class="sol-step">LHS = -9</div>
                    <div class="sol-step">RHS = 19</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">n = -2 is not a solution</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 7n + 5 = 19 for n = 2:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 7n + 5</div>
                    <div class="sol-step">Put n = 2:</div>
                    <div class="sol-step">LHS = 7 &times; 2 + 5</div>
                    <div class="sol-step">LHS = 14 + 5</div>
                    <div class="sol-step">LHS = 19</div>
                    <div class="sol-step">RHS = 19</div>
                    <div class="sol-step">Since LHS = RHS</div>
                    <div class="sol-step"><span class="ans-highlight">n = 2 is a solution</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 4p - 3 = 13 for p = 1:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 4p - 3</div>
                    <div class="sol-step">Put p = 1:</div>
                    <div class="sol-step">LHS = 4 &times; 1 - 3</div>
                    <div class="sol-step">LHS = 4 - 3</div>
                    <div class="sol-step">LHS = 1</div>
                    <div class="sol-step">RHS = 13</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">p = 1 is not a solution</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 4p - 3 = 13 for p = -4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 4p - 3</div>
                    <div class="sol-step">Put p = -4:</div>
                    <div class="sol-step">LHS = 4 &times; (-4) - 3</div>
                    <div class="sol-step">LHS = -16 - 3</div>
                    <div class="sol-step">LHS = -19</div>
                    <div class="sol-step">RHS = 13</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">p = -4 is not a solution</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) 4p - 3 = 13 for p = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 4p - 3</div>
                    <div class="sol-step">Put p = 0:</div>
                    <div class="sol-step">LHS = 4 &times; 0 - 3</div>
                    <div class="sol-step">LHS = 0 - 3</div>
                    <div class="sol-step">LHS = -3</div>
                    <div class="sol-step">RHS = 13</div>
                    <div class="sol-step">Since LHS &ne; RHS</div>
                    <div class="sol-step"><span class="ans-highlight">p = 0 is not a solution</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Solve the following equations by trial and error method:<br/>
                (i) 5p + 2 = 17 &nbsp; (ii) 3m - 14 = 4</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) 5p + 2 = 17:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Try p = 1:</div>
                    <div class="sol-step">LHS = 5 &times; 1 + 2 = 5 + 2 = 7</div>
                    <div class="sol-step">Since 7 &ne; 17, p = 1 is not the solution.</div>
                    <div class="sol-step" style="margin-top: 10px;">Try p = 2:</div>
                    <div class="sol-step">LHS = 5 &times; 2 + 2 = 10 + 2 = 12</div>
                    <div class="sol-step">Since 12 &ne; 17, p = 2 is not the solution.</div>
                    <div class="sol-step" style="margin-top: 10px;">Try p = 3:</div>
                    <div class="sol-step">LHS = 5 &times; 3 + 2 = 15 + 2 = 17</div>
                    <div class="sol-step">Since LHS = RHS = 17</div>
                    <div class="sol-step"><span class="ans-highlight">Solution is p = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3m - 14 = 4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Try m = 4:</div>
                    <div class="sol-step">LHS = 3 &times; 4 - 14 = 12 - 14 = -2</div>
                    <div class="sol-step">Since -2 &ne; 4, m = 4 is not the solution.</div>
                    <div class="sol-step" style="margin-top: 10px;">Try m = 5:</div>
                    <div class="sol-step">LHS = 3 &times; 5 - 14 = 15 - 14 = 1</div>
                    <div class="sol-step">Since 1 &ne; 4, m = 5 is not the solution.</div>
                    <div class="sol-step" style="margin-top: 10px;">Try m = 6:</div>
                    <div class="sol-step">LHS = 3 &times; 6 - 14 = 18 - 14 = 4</div>
                    <div class="sol-step">Since LHS = RHS = 4</div>
                    <div class="sol-step"><span class="ans-highlight">Solution is m = 6</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Write equations for the following statements:<br/>
                (i) The sum of numbers x and 4 is 9.<br/>
                (ii) 2 subtracted from y is 8.<br/>
                (iii) Ten times a is 70.<br/>
                (iv) The number b divided by 5 gives 6.<br/>
                (v) Three-fourths of t is 15.<br/>
                (vi) Seven times m plus 7 gets you 77.<br/>
                (vii) One-fourth of a number x minus 4 gives 4.<br/>
                (viii) If you take away 6 from 6 times y, you get 60.<br/>
                (ix) If you add 3 to one-third of z, you get 30.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) The sum of numbers x and 4 is 9:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of x and 4 = x + 4</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: x + 4 = 9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) 2 subtracted from y is 8:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 subtracted from y = y - 2</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: y - 2 = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Ten times a is 70:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Ten times a = 10a</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 10a = 70</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) The number b divided by 5 gives 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">b divided by 5 = <div class="frac"><span class="num">b</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Equation: <div class="frac"><span class="num">b</span><span class="den">5</span></div> = 6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) Three-fourths of t is 15:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Three-fourths of t = <div class="frac"><span class="num">3</span><span class="den">4</span></div>t</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: <div class="frac"><span class="num">3t</span><span class="den">4</span></div> = 15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) Seven times m plus 7 gets you 77:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Seven times m = 7m</div>
                    <div class="sol-step">Adding 7 = 7m + 7</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 7m + 7 = 77</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) One-fourth of a number x minus 4 gives 4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">One-fourth of x = <div class="frac"><span class="num">x</span><span class="den">4</span></div></div>
                    <div class="sol-step">Minus 4 = <div class="frac"><span class="num">x</span><span class="den">4</span></div> - 4</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: <div class="frac"><span class="num">x</span><span class="den">4</span></div> - 4 = 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(viii) If you take away 6 from 6 times y, you get 60:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 times y = 6y</div>
                    <div class="sol-step">Take away 6 = 6y - 6</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 6y - 6 = 60</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ix) If you add 3 to one-third of z, you get 30:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">One-third of z = <div class="frac"><span class="num">z</span><span class="den">3</span></div></div>
                    <div class="sol-step">Add 3 = <div class="frac"><span class="num">z</span><span class="den">3</span></div> + 3</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: <div class="frac"><span class="num">z</span><span class="den">3</span></div> + 3 = 30</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Write the following equations in statement forms:<br/>
                (i) p + 4 = 15 &nbsp; (ii) m - 7 = 3 &nbsp; (iii) 2m = 7 &nbsp; (iv) <div class="frac"><span class="num">m</span><span class="den">5</span></div> = 3 &nbsp; (v) <div class="frac"><span class="num">3m</span><span class="den">5</span></div> = 6<br/>
                (vi) 3p + 4 = 25 &nbsp; (vii) 4p - 2 = 18 &nbsp; (viii) <div class="frac"><span class="num">p</span><span class="den">2</span></div> + 2 = 8</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) p + 4 = 15:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: The sum of numbers p and 4 is 15.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) m - 7 = 3:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: 7 subtracted from m is 3.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) 2m = 7:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: Twice of number m is 7.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">m</span><span class="den">5</span></div> = 3:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: The number m divided by 5 gives 3.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">3m</span><span class="den">5</span></div> = 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: Three-fifth of number m is 6.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) 3p + 4 = 25:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: Three times p plus 4 gives 25.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) 4p - 2 = 18:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: Four times p minus 2 gives 18.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(viii) <div class="frac"><span class="num">p</span><span class="den">2</span></div> + 2 = 8:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">Statement: If you add 2 to half of p, you get 8.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Set up an equation in the following cases:<br/>
                (i) Gaurav says that he has 7 marbles more than five times the marbles Imran has. Gaurav has 37 marbles. (Take m to be the number of Imran's marbles).<br/>
                (ii) Gulshan's father is 49 years old. He is 4 years older than three times Gulshan's age. (Take Gulshan's age to be y years).<br/>
                (iii) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. (Take the lowest score to be l).<br/>
                (iv) In an isosceles triangle, the vertex angle is twice either base angle. (Let the base angle be b in degrees. Remember that the sum of angles of a triangle is 180 degrees).</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Gaurav's marbles:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number of Imran's marbles be m</div>
                    <div class="sol-step">5 times Imran's marbles = 5m</div>
                    <div class="sol-step">7 marbles more than five times = 5m + 7</div>
                    <div class="sol-step">Total marbles Gaurav has = 37</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 5m + 7 = 37</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) Gulshan's father's age:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let Gulshan's age be y years</div>
                    <div class="sol-step">Three times Gulshan's age = 3y</div>
                    <div class="sol-step">4 years older than three times age = 3y + 4</div>
                    <div class="sol-step">Father's age = 49</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 3y + 4 = 49</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) Highest marks in class:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the lowest score be l</div>
                    <div class="sol-step">Twice the lowest score = 2l</div>
                    <div class="sol-step">Twice lowest score plus 7 = 2l + 7</div>
                    <div class="sol-step">Highest score = 87</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 2l + 7 = 87</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) Isosceles triangle angles:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the base angle be b degrees</div>
                    <div class="sol-step">In an isosceles triangle, both base angles are equal (b and b)</div>
                    <div class="sol-step">Vertex angle = 2 &times; base angle = 2b</div>
                    <div class="sol-step">Sum of all three angles in a triangle = 180&deg;</div>
                    <div class="sol-step">b + b + 2b = 180&deg;</div>
                    <div class="sol-step">4b = 180&deg;</div>
                    <div class="sol-step"><span class="ans-highlight">Equation: 4b = 180&deg;</span></div>
                </div>
            </div>
        </div>
    `,
    "ex4-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #2196F3; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #64B5F6; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #64B5F6; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #2196F3; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Give first the step you will use to separate the variable and then solve the equation:<br/>
                (a) x - 1 = 0 &nbsp; (b) x + 1 = 0 &nbsp; (c) x - 1 = 5 &nbsp; (d) x + 6 = 2<br/>
                (e) y - 4 = -7 &nbsp; (f) y - 4 = 4 &nbsp; (g) y + 4 = 4 &nbsp; (h) y + 4 = -4</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) x - 1 = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Add 1 to both sides of the equation.</div>
                    <div class="sol-step">x - 1 + 1 = 0 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">x = 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) x + 1 = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Subtract 1 from both sides of the equation.</div>
                    <div class="sol-step">x + 1 - 1 = 0 - 1</div>
                    <div class="sol-step"><span class="ans-highlight">x = -1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) x - 1 = 5:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Add 1 to both sides of the equation.</div>
                    <div class="sol-step">x - 1 + 1 = 5 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">x = 6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) x + 6 = 2:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Subtract 6 from both sides of the equation.</div>
                    <div class="sol-step">x + 6 - 6 = 2 - 6</div>
                    <div class="sol-step"><span class="ans-highlight">x = -4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) y - 4 = -7:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Add 4 to both sides of the equation.</div>
                    <div class="sol-step">y - 4 + 4 = -7 + 4</div>
                    <div class="sol-step"><span class="ans-highlight">y = -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) y - 4 = 4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Add 4 to both sides of the equation.</div>
                    <div class="sol-step">y - 4 + 4 = 4 + 4</div>
                    <div class="sol-step"><span class="ans-highlight">y = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) y + 4 = 4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Subtract 4 from both sides of the equation.</div>
                    <div class="sol-step">y + 4 - 4 = 4 - 4</div>
                    <div class="sol-step"><span class="ans-highlight">y = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) y + 4 = -4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Subtract 4 from both sides of the equation.</div>
                    <div class="sol-step">y + 4 - 4 = -4 - 4</div>
                    <div class="sol-step"><span class="ans-highlight">y = -8</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Give first the step you will use to separate the variable and then solve the equation:<br/>
                (a) 3l = 42 &nbsp; (b) <div class="frac"><span class="num">b</span><span class="den">2</span></div> = 6 &nbsp; (c) <div class="frac"><span class="num">p</span><span class="den">7</span></div> = 4 &nbsp; (d) 4x = 25<br/>
                (e) 8y = 36 &nbsp; (f) <div class="frac"><span class="num">z</span><span class="den">3</span></div> = <div class="frac"><span class="num">5</span><span class="den">4</span></div> &nbsp; (g) <div class="frac"><span class="num">a</span><span class="den">5</span></div> = <div class="frac"><span class="num">7</span><span class="den">15</span></div> &nbsp; (h) 20t = -10</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3l = 42:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Divide both sides by 3</div>
                    <div class="sol-step"><div class="frac"><span class="num">3l</span><span class="den">3</span></div> = <div class="frac"><span class="num">42</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">l = 14</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) <div class="frac"><span class="num">b</span><span class="den">2</span></div> = 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Multiply both sides by 2</div>
                    <div class="sol-step"><div class="frac"><span class="num">b</span><span class="den">2</span></div> &times; 2 = 6 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">b = 12</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">p</span><span class="den">7</span></div> = 4:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Multiply both sides by 7</div>
                    <div class="sol-step"><div class="frac"><span class="num">p</span><span class="den">7</span></div> &times; 7 = 4 &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">p = 28</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 4x = 25:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Divide both sides by 4</div>
                    <div class="sol-step"><div class="frac"><span class="num">4x</span><span class="den">4</span></div> = <div class="frac"><span class="num">25</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">x = <div class="frac"><span class="num">25</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 8y = 36:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Divide both sides by 8</div>
                    <div class="sol-step"><div class="frac"><span class="num">8y</span><span class="den">8</span></div> = <div class="frac"><span class="num">36</span><span class="den">8</span></div></div>
                    <div class="sol-step">y = <div class="frac"><span class="num">9</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">y = 4.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) <div class="frac"><span class="num">z</span><span class="den">3</span></div> = <div class="frac"><span class="num">5</span><span class="den">4</span></div>:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Multiply both sides by 3</div>
                    <div class="sol-step"><div class="frac"><span class="num">z</span><span class="den">3</span></div> &times; 3 = <div class="frac"><span class="num">5</span><span class="den">4</span></div> &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">z = <div class="frac"><span class="num">15</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) <div class="frac"><span class="num">a</span><span class="den">5</span></div> = <div class="frac"><span class="num">7</span><span class="den">15</span></div>:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Multiply both sides by 5</div>
                    <div class="sol-step"><div class="frac"><span class="num">a</span><span class="den">5</span></div> &times; 5 = <div class="frac"><span class="num">7</span><span class="den">15</span></div> &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">a = <div class="frac"><span class="num">7</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) 20t = -10:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step: Divide both sides by 20</div>
                    <div class="sol-step"><div class="frac"><span class="num">20t</span><span class="den">20</span></div> = -<div class="frac"><span class="num">10</span><span class="den">20</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">t = -<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Give the steps you will use to separate the variable and then solve the equation:<br/>
                (a) 3n - 2 = 46 &nbsp; (b) 5m + 7 = 17 &nbsp; (c) <div class="frac"><span class="num">20p</span><span class="den">3</span></div> = 40 &nbsp; (d) <div class="frac"><span class="num">3p</span><span class="den">10</span></div> = 6</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3n - 2 = 46:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step 1: Add 2 to both sides of the equation.</div>
                    <div class="sol-step">3n - 2 + 2 = 46 + 2</div>
                    <div class="sol-step">3n = 48</div>
                    <div class="sol-step">Step 2: Divide both sides by 3.</div>
                    <div class="sol-step"><div class="frac"><span class="num">3n</span><span class="den">3</span></div> = <div class="frac"><span class="num">48</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">n = 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 5m + 7 = 17:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step 1: Subtract 7 from both sides of the equation.</div>
                    <div class="sol-step">5m + 7 - 7 = 17 - 7</div>
                    <div class="sol-step">5m = 10</div>
                    <div class="sol-step">Step 2: Divide both sides by 5.</div>
                    <div class="sol-step"><div class="frac"><span class="num">5m</span><span class="den">5</span></div> = <div class="frac"><span class="num">10</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">m = 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">20p</span><span class="den">3</span></div> = 40:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step 1: Multiply both sides by 3.</div>
                    <div class="sol-step"><div class="frac"><span class="num">20p</span><span class="den">3</span></div> &times; 3 = 40 &times; 3</div>
                    <div class="sol-step">20p = 120</div>
                    <div class="sol-step">Step 2: Divide both sides by 20.</div>
                    <div class="sol-step"><div class="frac"><span class="num">20p</span><span class="den">20</span></div> = <div class="frac"><span class="num">120</span><span class="den">20</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">p = 6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) <div class="frac"><span class="num">3p</span><span class="den">10</span></div> = 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Step 1: Multiply both sides by 10.</div>
                    <div class="sol-step"><div class="frac"><span class="num">3p</span><span class="den">10</span></div> &times; 10 = 6 &times; 10</div>
                    <div class="sol-step">3p = 60</div>
                    <div class="sol-step">Step 2: Divide both sides by 3.</div>
                    <div class="sol-step"><div class="frac"><span class="num">3p</span><span class="den">3</span></div> = <div class="frac"><span class="num">60</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">p = 20</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Solve the following equations:<br/>
                (a) 10p = 100 &nbsp; (b) 10p + 10 = 100 &nbsp; (c) <div class="frac"><span class="num">p</span><span class="den">4</span></div> = 5 &nbsp; (d) -<div class="frac"><span class="num">p</span><span class="den">3</span></div> = 5<br/>
                (e) <div class="frac"><span class="num">3p</span><span class="den">4</span></div> = 6 &nbsp; (f) 3s = -9 &nbsp; (g) 3s + 12 = 0 &nbsp; (h) 3s = 0<br/>
                (i) 2q = 6 &nbsp; (j) 2q - 6 = 0 &nbsp; (k) 2q + 6 = 0 &nbsp; (l) 2q + 6 = 12</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 10p = 100:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Divide both sides by 10:</div>
                    <div class="sol-step">p = <div class="frac"><span class="num">100</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">p = 10</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 10p + 10 = 100:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Transposing 10 to RHS:</div>
                    <div class="sol-step">10p = 100 - 10</div>
                    <div class="sol-step">10p = 90</div>
                    <div class="sol-step">Divide both sides by 10:</div>
                    <div class="sol-step">p = <div class="frac"><span class="num">90</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">p = 9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">p</span><span class="den">4</span></div> = 5:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiply both sides by 4:</div>
                    <div class="sol-step">p = 5 &times; 4</div>
                    <div class="sol-step"><span class="ans-highlight">p = 20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) -<div class="frac"><span class="num">p</span><span class="den">3</span></div> = 5:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiply both sides by -3:</div>
                    <div class="sol-step">p = 5 &times; (-3)</div>
                    <div class="sol-step"><span class="ans-highlight">p = -15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) <div class="frac"><span class="num">3p</span><span class="den">4</span></div> = 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiply both sides by 4:</div>
                    <div class="sol-step">3p = 6 &times; 4</div>
                    <div class="sol-step">3p = 24</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">p = <div class="frac"><span class="num">24</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">p = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) 3s = -9:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">s = -<div class="frac"><span class="num">9</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">s = -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) 3s + 12 = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Transposing 12 to RHS:</div>
                    <div class="sol-step">3s = 0 - 12</div>
                    <div class="sol-step">3s = -12</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">s = -<div class="frac"><span class="num">12</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">s = -4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) 3s = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">s = <div class="frac"><span class="num">0</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">s = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) 2q = 6:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">q = <div class="frac"><span class="num">6</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">q = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(j) 2q - 6 = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Transposing -6 to RHS:</div>
                    <div class="sol-step">2q = 0 + 6</div>
                    <div class="sol-step">2q = 6</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">q = <div class="frac"><span class="num">6</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">q = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(k) 2q + 6 = 0:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Transposing 6 to RHS:</div>
                    <div class="sol-step">2q = 0 - 6</div>
                    <div class="sol-step">2q = -6</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">q = -<div class="frac"><span class="num">6</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">q = -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(l) 2q + 6 = 12:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Transposing 6 to RHS:</div>
                    <div class="sol-step">2q = 12 - 6</div>
                    <div class="sol-step">2q = 6</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">q = <div class="frac"><span class="num">6</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">q = 3</span></div>
                </div>
            </div>
        </div>
    `,
    "ex4-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #2196F3; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #64B5F6; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #64B5F6; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #2196F3; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Set up equations and solve them to find the unknown numbers in the following cases:<br/>
                (a) The sum of 5 times a number and 6 is 15.<br/>
                (b) If <div class="frac"><span class="num">3</span><span class="den">5</span></div> times a number taken away from 16, the result is the number itself, what is the number.<br/>
                (c) If I take three-fourths of a number and add 3 to it, I get 21.<br/>
                (d) When I subtracted 11 from twice a number, the result was 15.<br/>
                (e) Sahil subtracts thrice the number of notebooks he has from 50, he finds the result to be 8.<br/>
                (f) Maria thinks of a number. If she adds 19 to it and divides the sum by 5, she will get 8.<br/>
                (g) When 6 subtracted from thrice a number, the result is 9. Find the number.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Sum of 5 times a number and 6 is 15:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step">5 times the number = 5 &times; x = 5x</div>
                    <div class="sol-step">Sum of 5x and 6 = 5x + 6</div>
                    <div class="sol-step">Given equation: 5x + 6 = 15</div>
                    <div class="sol-step">Transposing 6 to RHS:</div>
                    <div class="sol-step">5x = 15 - 6</div>
                    <div class="sol-step">5x = 9</div>
                    <div class="sol-step">Divide both sides by 5:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">9</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is <div class="frac"><span class="num">9</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) <div class="frac"><span class="num">3</span><span class="den">5</span></div> times a number taken away from 16:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">5</span></div> times the number = <div class="frac"><span class="num">3x</span><span class="den">5</span></div></div>
                    <div class="sol-step">Taken away from 16 = 16 - <div class="frac"><span class="num">3x</span><span class="den">5</span></div></div>
                    <div class="sol-step">Given equation: 16 - <div class="frac"><span class="num">3x</span><span class="den">5</span></div> = x</div>
                    <div class="sol-step">Transposing -<div class="frac"><span class="num">3x</span><span class="den">5</span></div> to RHS:</div>
                    <div class="sol-step">16 = x + <div class="frac"><span class="num">3x</span><span class="den">5</span></div></div>
                    <div class="sol-step">Taking LCM: 16 = <div class="frac"><span class="num">5x + 3x</span><span class="den">5</span></div></div>
                    <div class="sol-step">16 = <div class="frac"><span class="num">8x</span><span class="den">5</span></div></div>
                    <div class="sol-step">Multiply both sides by 5:</div>
                    <div class="sol-step">8x = 16 &times; 5</div>
                    <div class="sol-step">8x = 80</div>
                    <div class="sol-step">Divide both sides by 8:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">80</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is 10</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Three-fourths of a number plus 3 is 21:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step">Three-fourths of the number = <div class="frac"><span class="num">3x</span><span class="den">4</span></div></div>
                    <div class="sol-step">Adding 3 to it = <div class="frac"><span class="num">3x</span><span class="den">4</span></div> + 3</div>
                    <div class="sol-step">Given equation: <div class="frac"><span class="num">3x</span><span class="den">4</span></div> + 3 = 21</div>
                    <div class="sol-step">Transposing 3 to RHS:</div>
                    <div class="sol-step"><div class="frac"><span class="num">3x</span><span class="den">4</span></div> = 21 - 3</div>
                    <div class="sol-step"><div class="frac"><span class="num">3x</span><span class="den">4</span></div> = 18</div>
                    <div class="sol-step">Multiply both sides by 4:</div>
                    <div class="sol-step">3x = 18 &times; 4</div>
                    <div class="sol-step">3x = 72</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">72</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is 24</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Subtracted 11 from twice a number is 15:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step">Twice the number = 2 &times; x = 2x</div>
                    <div class="sol-step">Subtracting 11 = 2x - 11</div>
                    <div class="sol-step">Given equation: 2x - 11 = 15</div>
                    <div class="sol-step">Transposing -11 to RHS:</div>
                    <div class="sol-step">2x = 15 + 11</div>
                    <div class="sol-step">2x = 26</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">26</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is 13</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(e) Sahil subtracts thrice notebooks from 50 is 8:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number of notebooks Sahil has be x</div>
                    <div class="sol-step">Thrice the number of notebooks = 3 &times; x = 3x</div>
                    <div class="sol-step">Subtracted from 50 = 50 - 3x</div>
                    <div class="sol-step">Given equation: 50 - 3x = 8</div>
                    <div class="sol-step">Transposing 8 to LHS and -3x to RHS:</div>
                    <div class="sol-step">50 - 8 = 3x</div>
                    <div class="sol-step">42 = 3x</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">42</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Number of notebooks = 14</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(f) Maria adds 19 to number and divides by 5 is 8:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number Maria thinks of be x</div>
                    <div class="sol-step">Adding 19 to it = x + 19</div>
                    <div class="sol-step">Dividing by 5 = <div class="frac"><span class="num">x + 19</span><span class="den">5</span></div></div>
                    <div class="sol-step">Given equation: <div class="frac"><span class="num">x + 19</span><span class="den">5</span></div> = 8</div>
                    <div class="sol-step">Multiply both sides by 5:</div>
                    <div class="sol-step">x + 19 = 8 &times; 5</div>
                    <div class="sol-step">x + 19 = 40</div>
                    <div class="sol-step">Transposing 19 to RHS:</div>
                    <div class="sol-step">x = 40 - 19</div>
                    <div class="sol-step"><span class="ans-highlight">The number is 21</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(g) 6 subtracted from thrice a number is 9:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step">Thrice the number = 3 &times; x = 3x</div>
                    <div class="sol-step">Subtracting 6 = 3x - 6</div>
                    <div class="sol-step">Given equation: 3x - 6 = 9</div>
                    <div class="sol-step">Transposing -6 to RHS:</div>
                    <div class="sol-step">3x = 9 + 6</div>
                    <div class="sol-step">3x = 15</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">15</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is 5</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Solve the following:<br/>
                (a) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. What is the lowest score?<br/>
                (b) In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles of the triangle? (Remember, the sum of three angles of a triangle is 180°).<br/>
                (c) Dhoni scored twice as many runs as Yuvraj. Together, their runs fell two short of a double century. How many runs did each one score?<br/>
                (d) Rajan's mother's age is 6 years more than 3 times Rajan's age. Find Rajan's age if his mother is 45 years old.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Find lowest score:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the lowest score be x</div>
                    <div class="sol-step">Twice the lowest score plus 7 = 2x + 7</div>
                    <div class="sol-step">Given, highest score = 87</div>
                    <div class="sol-step">Equation: 2x + 7 = 87</div>
                    <div class="sol-step">Transposing 7 to RHS:</div>
                    <div class="sol-step">2x = 87 - 7</div>
                    <div class="sol-step">2x = 80</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">80</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The lowest score is 40</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(b) Base angles of isosceles triangle:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let each base angle be b degrees</div>
                    <div class="sol-step">Vertex angle = 40&deg;</div>
                    <div class="sol-step">Sum of all three angles in a triangle = 180&deg;</div>
                    <div class="sol-step">b + b + 40&deg; = 180&deg;</div>
                    <div class="sol-step">2b + 40&deg; = 180&deg;</div>
                    <div class="sol-step">Transposing 40&deg; to RHS:</div>
                    <div class="sol-step">2b = 180&deg; - 40&deg;</div>
                    <div class="sol-step">2b = 140&deg;</div>
                    <div class="sol-step">Divide both sides by 2:</div>
                    <div class="sol-step">b = <div class="frac"><span class="num">140&deg;</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Each base angle is 70&deg;</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(c) Dhoni and Yuvraj's runs:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let Yuvraj's runs be x</div>
                    <div class="sol-step">Dhoni's runs = 2 &times; x = 2x</div>
                    <div class="sol-step">Total runs = x + 2x = 3x</div>
                    <div class="sol-step">Double century = 200 runs</div>
                    <div class="sol-step">Two short of double century = 200 - 2 = 198 runs</div>
                    <div class="sol-step">Equation: 3x = 198</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">198</span><span class="den">3</span></div></div>
                    <div class="sol-step">x = 66</div>
                    <div class="sol-step">Yuvraj's runs = 66</div>
                    <div class="sol-step">Dhoni's runs = 2 &times; 66 = 132</div>
                    <div class="sol-step"><span class="ans-highlight">Yuvraj scored 66 runs, Dhoni scored 132 runs</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(d) Rajan's age:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let Rajan's age be y years</div>
                    <div class="sol-step">3 times Rajan's age = 3y</div>
                    <div class="sol-step">6 years more than 3 times = 3y + 6</div>
                    <div class="sol-step">Mother's age = 45 years</div>
                    <div class="sol-step">Equation: 3y + 6 = 45</div>
                    <div class="sol-step">Transposing 6 to RHS:</div>
                    <div class="sol-step">3y = 45 - 6</div>
                    <div class="sol-step">3y = 39</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">y = <div class="frac"><span class="num">39</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Rajan's age is 13 years</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Solve the following:<br/>
                (i) Mudasir says that he has 7 marbles more than five times the marbles Aman has. Mudasir has 37 marbles. How many marbles does Aman have?<br/>
                (ii) Neelam's father is 49 years old. He is 4 years older than three times Neelam's age. What is Neelam's age?<br/>
                (iii) People of Gulmarg planted trees in the village garden. Some of the trees were fruit trees. The number of non-fruit trees were two more than three times the number of fruit trees. What was the number of fruit trees planted if the number of non-fruit trees planted was 77?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Aman's marbles:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number of marbles Aman has be m</div>
                    <div class="sol-step">5 times Aman's marbles = 5 &times; m = 5m</div>
                    <div class="sol-step">7 marbles more than 5 times = 5m + 7</div>
                    <div class="sol-step">Total marbles Mudasir has = 37</div>
                    <div class="sol-step">Equation: 5m + 7 = 37</div>
                    <div class="sol-step">Transposing 7 to RHS:</div>
                    <div class="sol-step">5m = 37 - 7</div>
                    <div class="sol-step">5m = 30</div>
                    <div class="sol-step">Divide both sides by 5:</div>
                    <div class="sol-step">m = <div class="frac"><span class="num">30</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Aman has 6 marbles</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) Neelam's age:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let Neelam's age be y years</div>
                    <div class="sol-step">Three times Neelam's age = 3 &times; y = 3y</div>
                    <div class="sol-step">4 years older than three times = 3y + 4</div>
                    <div class="sol-step">Father's age = 49 years</div>
                    <div class="sol-step">Equation: 3y + 4 = 49</div>
                    <div class="sol-step">Transposing 4 to RHS:</div>
                    <div class="sol-step">3y = 49 - 4</div>
                    <div class="sol-step">3y = 45</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">y = <div class="frac"><span class="num">45</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Neelam's age is 15 years</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) Fruit trees planted in Gulmarg:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the number of fruit trees be x</div>
                    <div class="sol-step">Three times fruit trees = 3 &times; x = 3x</div>
                    <div class="sol-step">Two more than three times = 3x + 2</div>
                    <div class="sol-step">Number of non-fruit trees = 77</div>
                    <div class="sol-step">Equation: 3x + 2 = 77</div>
                    <div class="sol-step">Transposing 2 to RHS:</div>
                    <div class="sol-step">3x = 77 - 2</div>
                    <div class="sol-step">3x = 75</div>
                    <div class="sol-step">Divide both sides by 3:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">75</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Number of fruit trees = 25</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Solve the following riddle:<br/>
                I am a number, Tell my identity!<br/>
                Take me seven times over And add a fifty!<br/>
                To reach a triple century You still need forty!</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the unknown number be x</div>
                    <div class="sol-step">Seven times over = 7 &times; x = 7x</div>
                    <div class="sol-step">Add fifty = 7x + 50</div>
                    <div class="sol-step">Triple century = 300</div>
                    <div class="sol-step">To reach 300, still need 40, so:</div>
                    <div class="sol-step">(7x + 50) + 40 = 300</div>
                    <div class="sol-step">7x + 90 = 300</div>
                    <div class="sol-step">Transposing 90 to RHS:</div>
                    <div class="sol-step">7x = 300 - 90</div>
                    <div class="sol-step">7x = 210</div>
                    <div class="sol-step">Divide both sides by 7:</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">210</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The number is 30</span></div>
                </div>
            </div>
        </div>
    `
  },
  examples: [],
  mcqs: [
    {
      id: "c7g4-mcq-1",
      question: "If x - 3 = 5, then the value of x is:",
      options: ["2", "8", "-2", "15"],
      correctAnswer: "b",
      explanation: "Transposing -3 to RHS: x = 5 + 3 = 8."
    },
    {
      id: "c7g4-mcq-2",
      question: "What is the solution of the equation 3n = 12?",
      options: ["4", "36", "9", "15"],
      correctAnswer: "a",
      explanation: "Dividing both sides by 3: n = 12 / 3 = 4."
    },
    {
      id: "c7g4-mcq-3",
      question: "If 2p + 1 = 7, then the value of p is:",
      options: ["4", "3", "6", "2"],
      correctAnswer: "b",
      explanation: "2p = 7 - 1 = 6 ⇒ p = 6 / 2 = 3."
    },
    {
      id: "c7g4-mcq-4",
      question: "What is the variable in the equation 5y + 2 = 10?",
      options: ["5", "2", "10", "y"],
      correctAnswer: "d",
      explanation: "In 5y + 2 = 10, y is the unknown variable."
    },
    {
      id: "c7g4-mcq-5",
      question: "Which equation represents 'Twice a number m is 10'?",
      options: ["m + 2 = 10", "2m = 10", "m / 2 = 10", "m - 2 = 10"],
      correctAnswer: "b",
      explanation: "Twice m means 2 × m = 2m = 10."
    },
    {
      id: "c7g4-mcq-6",
      question: "If a / 5 = 3, then a is equal to:",
      options: ["15", "8", "3 / 5", "5 / 3"],
      correctAnswer: "a",
      explanation: "Multiplying both sides by 5: a = 3 × 5 = 15."
    },
    {
      id: "c7g4-mcq-7",
      question: "What is the solution of x + 10 = 0?",
      options: ["10", "0", "-10", "1"],
      correctAnswer: "c",
      explanation: "Transposing 10 to RHS gives x = -10."
    },
    {
      id: "c7g4-mcq-8",
      question: "If 4(x - 1) = 8, what is the value of x?",
      options: ["2", "3", "1", "4"],
      correctAnswer: "b",
      explanation: "x - 1 = 8 / 4 = 2 ⇒ x = 2 + 1 = 3."
    },
    {
      id: "c7g4-mcq-9",
      question: "Which of the following is a simple linear equation in one variable?",
      options: ["x + 2 > 5", "x + y = 10", "2x + 1 = 5", "x² = 4"],
      correctAnswer: "c",
      explanation: "2x + 1 = 5 is a linear equation in one variable x with degree 1."
    },
    {
      id: "c7g4-mcq-10",
      question: "If 10 - y = 6, then what is the value of y?",
      options: ["16", "4", "-4", "6"],
      correctAnswer: "b",
      explanation: "10 - 6 = y ⇒ y = 4."
    }
  ],
  summary: [],
};
