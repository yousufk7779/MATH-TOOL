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
      definition:
        "A symbol (usually a letter) that represents an unknown number.",
    },
    {
      term: "Equation",
      definition:
        "A mathematical statement that asserts the equality of two expressions.",
    },
  ],
  keyPoints: [
    "LHS (Left Hand Side) must equal RHS (Right Hand Side).",
    "If we add/subtract/multiply/divide the same number on both sides, the equality remains unchanged.",
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
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(33, 150, 243, 0.05); border-left: 4px solid #2196F3; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
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
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>Detailed Solutions:</b></div>
                    <div class="sol-step"><b>(i)</b> x + 3 = 0, LHS = 3 + 3 = 6 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(ii)</b> x + 3 = 0, LHS = 0 + 3 = 3 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(iii)</b> x + 3 = 0, LHS = -3 + 3 = 0 = RHS. Result: <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><b>(iv)</b> x - 7 = 1, LHS = 7 - 7 = 0 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(v)</b> x - 7 = 1, LHS = 8 - 7 = 1 = RHS. Result: <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><b>(vi)</b> 5x = 25, LHS = 5(0) = 0 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(vii)</b> 5x = 25, LHS = 5(5) = 25 = RHS. Result: <span class="ans-highlight">Yes</span></div>
                    <div class="sol-step"><b>(viii)</b> 5x = 25, LHS = 5(-5) = -25 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(ix)</b> m/3 = 2, LHS = -6/3 = -2 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(x)</b> m/3 = 2, LHS = 0/3 = 0 &ne; RHS. Result: <span class="ans-highlight">No</span></div>
                    <div class="sol-step"><b>(xi)</b> m/3 = 2, LHS = 6/3 = 2 = RHS. Result: <span class="ans-highlight">Yes</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Check whether the value given in the brackets is a solution to the given equation or not:<br/>
                (a) n + 5 = 19 (n = 1) &nbsp; (b) 7n + 5 = 19 (n = -2) &nbsp; (c) 7n + 5 = 19 (n = 2)<br/>
                (d) 4p - 3 = 13 (p = 1) &nbsp; (e) 4p - 3 = 13 (p = -4) &nbsp; (f) 4p - 3 = 13 (p = 0)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) n + 5 = 19 (n = 1):</b></div>
                    <div class="sol-step">LHS = 1 + 5 = 6 &ne; 19.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">No</span>, n = 1 is not a solution.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 7n + 5 = 19 (n = -2):</b></div>
                    <div class="sol-step">LHS = 7(-2) + 5 = -14 + 5 = -9 &ne; 19.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">No</span>, n = -2 is not a solution.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 7n + 5 = 19 (n = 2):</b></div>
                    <div class="sol-step">LHS = 7(2) + 5 = 14 + 5 = 19 = 19.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">Yes</span>, n = 2 is a solution.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 4p - 3 = 13 (p = 1):</b></div>
                    <div class="sol-step">LHS = 4(1) - 3 = 4 - 3 = 1 &ne; 13.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">No</span>, p = 1 is not a solution.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 4p - 3 = 13 (p = -4):</b></div>
                    <div class="sol-step">LHS = 4(-4) - 3 = -16 - 3 = -19 &ne; 13.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">No</span>, p = -4 is not a solution.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) 4p - 3 = 13 (p = 0):</b></div>
                    <div class="sol-step">LHS = 4(0) - 3 = -3 &ne; 13.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">No</span>, p = 0 is not a solution.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Solve the following equations by trial and error method:<br/>
                (i) 5p + 2 = 17 &nbsp; (ii) 3m - 14 = 4</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) 5p + 2 = 17:</b></div>
                    <div class="sol-step">Let p = 1: LHS = 5(1) + 2 = 7 &ne; 17</div>
                    <div class="sol-step">Let p = 2: LHS = 5(2) + 2 = 12 &ne; 17</div>
                    <div class="sol-step">Let p = 3: LHS = 5(3) + 2 = 15 + 2 = 17 = RHS.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">p = 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3m - 14 = 4:</b></div>
                    <div class="sol-step">Let m = 4: LHS = 3(4) - 14 = -2 &ne; 4</div>
                    <div class="sol-step">Let m = 5: LHS = 3(5) - 14 = 1 &ne; 4</div>
                    <div class="sol-step">Let m = 6: LHS = 3(6) - 14 = 18 - 14 = 4 = RHS.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">m = 6</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Write equations for the following statements:<br/>
                (i) The sum of numbers x and 4 is 9. &nbsp; (ii) 2 subtracted from y is 8.<br/>
                (iii) Ten times a is 70. &nbsp; (iv) The number b divided by 5 gives 6.<br/>
                (v) Three-fourths of t is 15. &nbsp; (vi) Seven times m plus 7 gets you 77.<br/>
                (vii) One-fourth of a number x minus 4 gives 4.<br/>
                (viii) If you take away 6 from 6 times y, you get 60.<br/>
                (ix) If you add 3 to one-third of z, you get 30.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i)</b> Answer: <span class="ans-highlight">x + 4 = 9</span></div>
                    <div class="sol-step"><b>(ii)</b> Answer: <span class="ans-highlight">y - 2 = 8</span></div>
                    <div class="sol-step"><b>(iii)</b> Answer: <span class="ans-highlight">10a = 70</span></div>
                    <div class="sol-step"><b>(iv)</b> Answer: <span class="ans-highlight"><div class="frac"><span class="num">b</span><span class="den">5</span></div> = 6</span></div>
                    <div class="sol-step"><b>(v)</b> Answer: <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">4</span></div>t = 15</span></div>
                    <div class="sol-step"><b>(vi)</b> Answer: <span class="ans-highlight">7m + 7 = 77</span></div>
                    <div class="sol-step"><b>(vii)</b> Answer: <span class="ans-highlight"><div class="frac"><span class="num">x</span><span class="den">4</span></div> - 4 = 4</span></div>
                    <div class="sol-step"><b>(viii)</b> Answer: <span class="ans-highlight">6y - 6 = 60</span></div>
                    <div class="sol-step"><b>(ix)</b> Answer: <span class="ans-highlight"><div class="frac"><span class="num">z</span><span class="den">3</span></div> + 3 = 30</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. Write the following equations in statement forms:<br/>
                (i) p + 4 = 15 &nbsp; (ii) m - 7 = 3 &nbsp; (iii) 2m = 7 &nbsp; (iv) m/5 = 3 &nbsp; (v) 3m/5 = 6<br/>
                (vi) 3p + 4 = 25 &nbsp; (vii) 4p - 2 = 18 &nbsp; (viii) p/2 + 2 = 8</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i)</b> Answer: <span class="ans-highlight">The sum of numbers p and 4 is 15.</span></div>
                    <div class="sol-step"><b>(ii)</b> Answer: <span class="ans-highlight">7 subtracted from m is 3.</span></div>
                    <div class="sol-step"><b>(iii)</b> Answer: <span class="ans-highlight">Twice of number m is 7.</span></div>
                    <div class="sol-step"><b>(iv)</b> Answer: <span class="ans-highlight">The number m divided by 5 gives 3.</span></div>
                    <div class="sol-step"><b>(v)</b> Answer: <span class="ans-highlight">Three-fifth of m is 6.</span></div>
                    <div class="sol-step"><b>(vi)</b> Answer: <span class="ans-highlight">Three times p plus 4 gives 25.</span></div>
                    <div class="sol-step"><b>(vii)</b> Answer: <span class="ans-highlight">Four times p minus 2 gives 18.</span></div>
                    <div class="sol-step"><b>(viii)</b> Answer: <span class="ans-highlight">If you add half of a number p to 2, you get 8.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Set up an equation in the following cases:<br/>
                (i) Irfan says that he has 7 marbles, more than five times the marbles Parmit has. Irfan has 37 marbles. (Take m to be the number of Parmit's marbles).<br/>
                (ii) Laxmi's father is 49 years old. He is 4 years older than three times Laxmi's age. (Take Laxmi's age to be y years).<br/>
                (iii) The teacher tells the class that the highest marks obtained by a student in her class are twice the lowest marks plus 7. The highest score is 87. (Take the lowest score to be l).<br/>
                (iv) In an isosceles triangle, the vertex angle is twice either base angle. (Let the base angle be b in degrees. Remember that the sum of angles of a triangle is 180 degrees).</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Irfan's marbles:</b></div>
                    <div class="sol-step">Let Parmit's marbles be m. 5 times m = 5m. Irfan has 7 more = 5m + 7. Total = 37.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">5m + 7 = 37</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Laxmi's father's age:</b></div>
                    <div class="sol-step">Let Laxmi's age be y. 3 times y = 3y. Father is 4 years older = 3y + 4. Total = 49.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">3y + 4 = 49</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Highest marks:</b></div>
                    <div class="sol-step">Let lowest score be l. 2 times l = 2l. Highest score is 2l + 7. Total = 87.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">2l + 7 = 87</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) Isosceles triangle angles:</b></div>
                    <div class="sol-step">Let base angle be b. Vertex angle = 2b. Sum of angles = b + b + 2b = 180&deg;.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">4b = 180&deg;</span></div>
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
            <div class="sol-card">
                <div class="question-header">1. Give first the step you will use to separate the variable and then solve the equation:<br/>
                (a) x - 1 = 0 &nbsp; (b) x + 1 = 0 &nbsp; (c) x - 1 = 5 &nbsp; (d) x + 6 = 2<br/>
                (e) y - 4 = -7 &nbsp; (f) y - 4 = 4 &nbsp; (g) y + 4 = 4 &nbsp; (h) y + 4 = -4</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) x - 1 = 0:</b></div>
                    <div class="sol-step">Step: Add 1 to both sides.</div>
                    <div class="sol-step">x - 1 + 1 = 0 + 1 => <span class="ans-highlight">x = 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) x + 1 = 0:</b></div>
                    <div class="sol-step">Step: Subtract 1 from both sides.</div>
                    <div class="sol-step">x + 1 - 1 = 0 - 1 => <span class="ans-highlight">x = -1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) x - 1 = 5:</b></div>
                    <div class="sol-step">Step: Add 1 to both sides.</div>
                    <div class="sol-step">x - 1 + 1 = 5 + 1 => <span class="ans-highlight">x = 6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) x + 6 = 2:</b></div>
                    <div class="sol-step">Step: Subtract 6 from both sides.</div>
                    <div class="sol-step">x + 6 - 6 = 2 - 6 => <span class="ans-highlight">x = -4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) y - 4 = -7:</b></div>
                    <div class="sol-step">Step: Add 4 to both sides.</div>
                    <div class="sol-step">y - 4 + 4 = -7 + 4 => <span class="ans-highlight">y = -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) y - 4 = 4:</b></div>
                    <div class="sol-step">Step: Add 4 to both sides.</div>
                    <div class="sol-step">y - 4 + 4 = 4 + 4 => <span class="ans-highlight">y = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) y + 4 = 4:</b></div>
                    <div class="sol-step">Step: Subtract 4 from both sides.</div>
                    <div class="sol-step">y + 4 - 4 = 4 - 4 => <span class="ans-highlight">y = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) y + 4 = -4:</b></div>
                    <div class="sol-step">Step: Subtract 4 from both sides.</div>
                    <div class="sol-step">y + 4 - 4 = -4 - 4 => <span class="ans-highlight">y = -8</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Give first the step you will use to separate the variable and then solve the equation:<br/>
                (a) 3l = 42 &nbsp; (b) b/2 = 6 &nbsp; (c) p/7 = 4 &nbsp; (d) 4x = 25<br/>
                (e) 8y = 36 &nbsp; (f) z/3 = 5/4 &nbsp; (g) a/5 = 7/15 &nbsp; (h) 20t = -10</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3l = 42:</b></div>
                    <div class="sol-step">Step: Divide both sides by 3.</div>
                    <div class="sol-step"><div class="frac"><span class="num">3l</span><span class="den">3</span></div> = <div class="frac"><span class="num">42</span><span class="den">3</span></div> => <span class="ans-highlight">l = 14</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) b/2 = 6:</b></div>
                    <div class="sol-step">Step: Multiply both sides by 2.</div>
                    <div class="sol-step"><div class="frac"><span class="num">b</span><span class="den">2</span></div> &times; 2 = 6 &times; 2 => <span class="ans-highlight">b = 12</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) p/7 = 4:</b></div>
                    <div class="sol-step">Step: Multiply both sides by 7.</div>
                    <div class="sol-step"><div class="frac"><span class="num">p</span><span class="den">7</span></div> &times; 7 = 4 &times; 7 => <span class="ans-highlight">p = 28</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 4x = 25:</b></div>
                    <div class="sol-step">Step: Divide both sides by 4.</div>
                    <div class="sol-step"><div class="frac"><span class="num">4x</span><span class="den">4</span></div> = <div class="frac"><span class="num">25</span><span class="den">4</span></div> => <span class="ans-highlight">x = <div class="frac"><span class="num">25</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 8y = 36:</b></div>
                    <div class="sol-step">Step: Divide both sides by 8.</div>
                    <div class="sol-step"><div class="frac"><span class="num">8y</span><span class="den">8</span></div> = <div class="frac"><span class="num">36</span><span class="den">8</span></div> => y = <div class="frac"><span class="num">9</span><span class="den">2</span></div> => <span class="ans-highlight">y = 4.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) z/3 = 5/4:</b></div>
                    <div class="sol-step">Step: Multiply both sides by 3.</div>
                    <div class="sol-step"><div class="frac"><span class="num">z</span><span class="den">3</span></div> &times; 3 = <div class="frac"><span class="num">5</span><span class="den">4</span></div> &times; 3 => <span class="ans-highlight">z = <div class="frac"><span class="num">15</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) a/5 = 7/15:</b></div>
                    <div class="sol-step">Step: Multiply both sides by 5.</div>
                    <div class="sol-step"><div class="frac"><span class="num">a</span><span class="den">5</span></div> &times; 5 = <div class="frac"><span class="num">7</span><span class="den">15</span></div> &times; 5 => a = <div class="frac"><span class="num">7</span><span class="den">3</span></div> => <span class="ans-highlight">a = 2<div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) 20t = -10:</b></div>
                    <div class="sol-step">Step: Divide both sides by 20.</div>
                    <div class="sol-step"><div class="frac"><span class="num">20t</span><span class="den">20</span></div> = <div class="frac"><span class="num">-10</span><span class="den">20</span></div> => <span class="ans-highlight">t = -<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Give the steps you will use to separate the variable and then solve the equation:<br/>
                (a) 3n - 2 = 46 &nbsp; (b) 5m + 7 = 17 &nbsp; (c) 20p/3 = 40 &nbsp; (d) 3p/10 = 6</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3n - 2 = 46:</b></div>
                    <div class="sol-step">Step 1: Add 2 to both sides. 3n - 2 + 2 = 46 + 2 => 3n = 48.</div>
                    <div class="sol-step">Step 2: Divide both sides by 3. <div class="frac"><span class="num">3n</span><span class="den">3</span></div> = <div class="frac"><span class="num">48</span><span class="den">3</span></div> => <span class="ans-highlight">n = 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 5m + 7 = 17:</b></div>
                    <div class="sol-step">Step 1: Subtract 7 from both sides. 5m + 7 - 7 = 17 - 7 => 5m = 10.</div>
                    <div class="sol-step">Step 2: Divide both sides by 5. <div class="frac"><span class="num">5m</span><span class="den">5</span></div> = <div class="frac"><span class="num">10</span><span class="den">5</span></div> => <span class="ans-highlight">m = 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 20p/3 = 40:</b></div>
                    <div class="sol-step">Step 1: Multiply both sides by 3. <div class="frac"><span class="num">20p</span><span class="den">3</span></div> &times; 3 = 40 &times; 3 => 20p = 120.</div>
                    <div class="sol-step">Step 2: Divide both sides by 20. <div class="frac"><span class="num">20p</span><span class="den">20</span></div> = <div class="frac"><span class="num">120</span><span class="den">20</span></div> => <span class="ans-highlight">p = 6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 3p/10 = 6:</b></div>
                    <div class="sol-step">Step 1: Multiply both sides by 10. <div class="frac"><span class="num">3p</span><span class="den">10</span></div> &times; 10 = 6 &times; 10 => 3p = 60.</div>
                    <div class="sol-step">Step 2: Divide both sides by 3. <div class="frac"><span class="num">3p</span><span class="den">3</span></div> = <div class="frac"><span class="num">60</span><span class="den">3</span></div> => <span class="ans-highlight">p = 20</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Solve the following equations:<br/>
                (a) 10p = 100 &nbsp; (b) 10p + 10 = 100 &nbsp; (c) p/4 = 5 &nbsp; (d) -p/3 = 5<br/>
                (e) 3p/4 = 6 &nbsp; (f) 3s = -9 &nbsp; (g) 3s + 12 = 0 &nbsp; (h) 3s = 0<br/>
                (i) 2q = 6 &nbsp; (j) 2q - 6 = 0 &nbsp; (k) 2q + 6 = 0 &nbsp; (l) 2q + 6 = 12</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 10p = 100:</b> => p = 100/10 => <span class="ans-highlight">p = 10</span></div>
                    <div class="sol-step"><b>(b) 10p + 10 = 100:</b> => 10p = 90 => p = 90/10 => <span class="ans-highlight">p = 9</span></div>
                    <div class="sol-step"><b>(c) p/4 = 5:</b> => p = 5 &times; 4 => <span class="ans-highlight">p = 20</span></div>
                    <div class="sol-step"><b>(d) -p/3 = 5:</b> => -p = 15 => <span class="ans-highlight">p = -15</span></div>
                    <div class="sol-step"><b>(e) 3p/4 = 6:</b> => 3p = 24 => p = 24/3 => <span class="ans-highlight">p = 8</span></div>
                    <div class="sol-step"><b>(f) 3s = -9:</b> => s = -9/3 => <span class="ans-highlight">s = -3</span></div>
                    <div class="sol-step"><b>(g) 3s + 12 = 0:</b> => 3s = -12 => s = -12/3 => <span class="ans-highlight">s = -4</span></div>
                    <div class="sol-step"><b>(h) 3s = 0:</b> => s = 0/3 => <span class="ans-highlight">s = 0</span></div>
                    <div class="sol-step"><b>(i) 2q = 6:</b> => q = 6/2 => <span class="ans-highlight">q = 3</span></div>
                    <div class="sol-step"><b>(j) 2q - 6 = 0:</b> => 2q = 6 => q = 6/2 => <span class="ans-highlight">q = 3</span></div>
                    <div class="sol-step"><b>(k) 2q + 6 = 0:</b> => 2q = -6 => q = -6/2 => <span class="ans-highlight">q = -3</span></div>
                    <div class="sol-step"><b>(l) 2q + 6 = 12:</b> => 2q = 6 => q = 6/2 => <span class="ans-highlight">q = 3</span></div>
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
            <div class="sol-card">
                <div class="question-header">1. Solve the following equations:<br/>
                (a) 2y + 5/2 = 37/2 &nbsp; (b) 5t + 28 = 10 &nbsp; (c) a/5 + 3 = 2 &nbsp; (d) q/4 + 7 = 5<br/>
                (e) (5/2)x = -5 &nbsp; (f) (5/2)x = 25/4 &nbsp; (g) 7m + 19/2 = 13 &nbsp; (h) 6z + 10 = -2<br/>
                (i) (3/2)l = 2/3 &nbsp; (j) (2b/3) - 5 = 3</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 2y + 5/2 = 37/2:</b></div>
                    <div class="sol-step">Transposing 5/2 to RHS: 2y = <div class="frac"><span class="num">37</span><span class="den">2</span></div> - <div class="frac"><span class="num">5</span><span class="den">2</span></div> => 2y = <div class="frac"><span class="num">32</span><span class="den">2</span></div> => 2y = 16.</div>
                    <div class="sol-step">Divide both sides by 2: y = 16/2 => <span class="ans-highlight">y = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 5t + 28 = 10:</b></div>
                    <div class="sol-step">Transposing 28 to RHS: 5t = 10 - 28 => 5t = -18.</div>
                    <div class="sol-step">Divide both sides by 5: <span class="ans-highlight">t = -<div class="frac"><span class="num">18</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) a/5 + 3 = 2:</b></div>
                    <div class="sol-step">Transposing 3 to RHS: a/5 = 2 - 3 => a/5 = -1.</div>
                    <div class="sol-step">Multiply both sides by 5: <span class="ans-highlight">a = -5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) q/4 + 7 = 5:</b></div>
                    <div class="sol-step">Transposing 7 to RHS: q/4 = 5 - 7 => q/4 = -2.</div>
                    <div class="sol-step">Multiply both sides by 4: <span class="ans-highlight">q = -8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) (5/2)x = -5:</b></div>
                    <div class="sol-step">Multiply both sides by 2: 5x = -5 &times; 2 => 5x = -10.</div>
                    <div class="sol-step">Divide both sides by 5: x = -10/5 => <span class="ans-highlight">x = -2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) (5/2)x = 25/4:</b></div>
                    <div class="sol-step">Multiply both sides by 2: 5x = <div class="frac"><span class="num">25</span><span class="den">4</span></div> &times; 2 => 5x = <div class="frac"><span class="num">25</span><span class="den">2</span></div>.</div>
                    <div class="sol-step">Divide both sides by 5: x = <div class="frac"><span class="num">25</span><span class="den">2 &times; 5</span></div> => <span class="ans-highlight">x = <div class="frac"><span class="num">5</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) 7m + 19/2 = 13:</b></div>
                    <div class="sol-step">Transposing 19/2 to RHS: 7m = 13 - <div class="frac"><span class="num">19</span><span class="den">2</span></div> => 7m = <div class="frac"><span class="num">26 - 19</span><span class="den">2</span></div> => 7m = <div class="frac"><span class="num">7</span><span class="den">2</span></div>.</div>
                    <div class="sol-step">Divide both sides by 7: m = <div class="frac"><span class="num">7</span><span class="den">2 &times; 7</span></div> => <span class="ans-highlight">m = <div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(h) 6z + 10 = -2:</b></div>
                    <div class="sol-step">Transposing 10 to RHS: 6z = -2 - 10 => 6z = -12.</div>
                    <div class="sol-step">Divide both sides by 6: z = -12/6 => <span class="ans-highlight">z = -2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(i) (3/2)l = 2/3:</b></div>
                    <div class="sol-step">Multiply both sides by 2: 3l = <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; 2 => 3l = <div class="frac"><span class="num">4</span><span class="den">3</span></div>.</div>
                    <div class="sol-step">Divide both sides by 3: l = <div class="frac"><span class="num">4</span><span class="den">3 &times; 3</span></div> => <span class="ans-highlight">l = <div class="frac"><span class="num">4</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(j) (2b/3) - 5 = 3:</b></div>
                    <div class="sol-step">Transposing -5 to RHS: 2b/3 = 3 + 5 => 2b/3 = 8.</div>
                    <div class="sol-step">Multiply both sides by 3: 2b = 24.</div>
                    <div class="sol-step">Divide both sides by 2: b = 24/2 => <span class="ans-highlight">b = 12</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Solve the following equations:<br/>
                (a) 2(x + 4) = 12 &nbsp; (b) 3(n - 5) = 21 &nbsp; (c) 3(n - 5) = -21 &nbsp; (d) -4(2 + x) = 8 &nbsp; (e) 4(2 - x) = 8</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 2(x + 4) = 12:</b></div>
                    <div class="sol-step">Divide both sides by 2: x + 4 = 6.</div>
                    <div class="sol-step">Transposing 4 to RHS: x = 6 - 4 => <span class="ans-highlight">x = 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 3(n - 5) = 21:</b></div>
                    <div class="sol-step">Divide both sides by 3: n - 5 = 7.</div>
                    <div class="sol-step">Transposing -5 to RHS: n = 7 + 5 => <span class="ans-highlight">n = 12</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 3(n - 5) = -21:</b></div>
                    <div class="sol-step">Divide both sides by 3: n - 5 = -7.</div>
                    <div class="sol-step">Transposing -5 to RHS: n = -7 + 5 => <span class="ans-highlight">n = -2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) -4(2 + x) = 8:</b></div>
                    <div class="sol-step">Divide both sides by -4: 2 + x = -2.</div>
                    <div class="sol-step">Transposing 2 to RHS: x = -2 - 2 => <span class="ans-highlight">x = -4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 4(2 - x) = 8:</b></div>
                    <div class="sol-step">Divide both sides by 4: 2 - x = 2.</div>
                    <div class="sol-step">Transposing 2 to RHS: -x = 2 - 2 => -x = 0 => <span class="ans-highlight">x = 0</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Solve the following equations:<br/>
                (a) 4 = 5(p - 2) &nbsp; (b) -4 = 5(p - 2) &nbsp; (c) 16 = 4 + 3(t + 2) &nbsp; (d) 4 + 5(p - 1) = 34 &nbsp; (e) 0 = 16 + 4(m - 6)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 4 = 5(p - 2):</b></div>
                    <div class="sol-step">Divide both sides by 5: <div class="frac"><span class="num">4</span><span class="den">5</span></div> = p - 2.</div>
                    <div class="sol-step">Transposing -2 to LHS: p = <div class="frac"><span class="num">4</span><span class="den">5</span></div> + 2 = <div class="frac"><span class="num">14</span><span class="den">5</span></div>.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">p = <div class="frac"><span class="num">14</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) -4 = 5(p - 2):</b></div>
                    <div class="sol-step">Divide both sides by 5: -<div class="frac"><span class="num">4</span><span class="den">5</span></div> = p - 2.</div>
                    <div class="sol-step">Transposing -2 to LHS: p = -<div class="frac"><span class="num">4</span><span class="den">5</span></div> + 2 = <div class="frac"><span class="num">6</span><span class="den">5</span></div>.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">p = <div class="frac"><span class="num">6</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 16 = 4 + 3(t + 2):</b></div>
                    <div class="sol-step">Transposing 4 to LHS: 12 = 3(t + 2).</div>
                    <div class="sol-step">Divide both sides by 3: 4 = t + 2.</div>
                    <div class="sol-step">Transposing 2 to LHS: t = 4 - 2 => <span class="ans-highlight">t = 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 4 + 5(p - 1) = 34:</b></div>
                    <div class="sol-step">Transposing 4 to RHS: 5(p - 1) = 30.</div>
                    <div class="sol-step">Divide both sides by 5: p - 1 = 6.</div>
                    <div class="sol-step">Transposing -1 to RHS: p = 6 + 1 => <span class="ans-highlight">p = 7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 0 = 16 + 4(m - 6):</b></div>
                    <div class="sol-step">Transposing 16 to LHS: -16 = 4(m - 6).</div>
                    <div class="sol-step">Divide both sides by 4: -4 = m - 6.</div>
                    <div class="sol-step">Transposing -6 to LHS: m = -4 + 6 => <span class="ans-highlight">m = 2</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. (a) Construct 3 equations starting with x = 2<br/>
                (b) Construct 3 equations starting with x = -2</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Starting with x = 2:</b></div>
                    <div class="sol-step">Equation 1: Multiply both sides by 6 => <span class="ans-highlight">6x = 12</span></div>
                    <div class="sol-step">Equation 2: Subtract 4 from both sides => <span class="ans-highlight">6x - 4 = 8</span></div>
                    <div class="sol-step">Equation 3: Divide both sides by 6 => <span class="ans-highlight">x - <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Starting with x = -2:</b></div>
                    <div class="sol-step">Equation 1: Multiply both sides by 5 => <span class="ans-highlight">5x = -10</span></div>
                    <div class="sol-step">Equation 2: Subtract 3 from both sides => <span class="ans-highlight">5x - 3 = -13</span></div>
                    <div class="sol-step">Equation 3: Divide both sides by 2 => <span class="ans-highlight"><div class="frac"><span class="num">5x</span><span class="den">2</span></div> - <div class="frac"><span class="num">3</span><span class="den">2</span></div> = -<div class="frac"><span class="num">13</span><span class="den">2</span></div></span></div>
                </div>
            </div>
        </div>
    `,
    "ex4-4": `
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
            <div class="sol-card">
                <div class="question-header">1. Set up equations and solve them to find the unknown numbers in the following cases:<br/>
                (a) Add 4 to eight times a number; you get 60.<br/>
                (b) One-fifth of a number minus 4 gives 3.<br/>
                (c) If I take three-fourths of a number and add 3 to it, I get 21.<br/>
                (d) When I subtracted 11 from twice a number, the result was 15.<br/>
                (e) Munna subtracts thrice the number of notebooks he has from 50, and he finds the result to be 8.<br/>
                (f) Ibenhal thinks of a number. If she adds 19 to it and divides the sum by 5, she will get 8.<br/>
                (g) Anwar thinks of a number. If he takes away 7 from 5/2 of the number, the result is 23.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Add 4 to eight times a number is 60:</b></div>
                    <div class="sol-step">Equation: 8x + 4 = 60.</div>
                    <div class="sol-step">Solve: 8x = 56 => x = 56/8 = 7.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">7</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) One-fifth of a number minus 4 gives 3:</b></div>
                    <div class="sol-step">Equation: <div class="frac"><span class="num">x</span><span class="den">5</span></div> - 4 = 3.</div>
                    <div class="sol-step">Solve: <div class="frac"><span class="num">x</span><span class="den">5</span></div> = 7 => x = 7 &times; 5 = 35.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">35</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) Three-fourths of a number plus 3 is 21:</b></div>
                    <div class="sol-step">Equation: <div class="frac"><span class="num">3x</span><span class="den">4</span></div> + 3 = 21.</div>
                    <div class="sol-step">Solve: <div class="frac"><span class="num">3x</span><span class="den">4</span></div> = 18 => 3x = 72 => x = 24.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">24</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) Subtracted 11 from twice a number is 15:</b></div>
                    <div class="sol-step">Equation: 2x - 11 = 15.</div>
                    <div class="sol-step">Solve: 2x = 26 => x = 13.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">13</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) Munna subtracts thrice notebooks from 50 is 8:</b></div>
                    <div class="sol-step">Equation: 50 - 3x = 8.</div>
                    <div class="sol-step">Solve: 3x = 42 => x = 14.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">14</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(f) Ibenhal adds 19 to number and divides by 5 is 8:</b></div>
                    <div class="sol-step">Equation: <div class="frac"><span class="num">x + 19</span><span class="den">5</span></div> = 8.</div>
                    <div class="sol-step">Solve: x + 19 = 40 => x = 21.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">21</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(g) Anwar takes away 7 from 5/2 of number is 23:</b></div>
                    <div class="sol-step">Equation: <div class="frac"><span class="num">5x</span><span class="den">2</span></div> - 7 = 23.</div>
                    <div class="sol-step">Solve: <div class="frac"><span class="num">5x</span><span class="den">2</span></div> = 30 => 5x = 60 => x = 12.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">12</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Solve the following:<br/>
                (a) The teacher tells the class that the highest marks obtained by a student in her class are twice the lowest marks plus 7. The highest score is 87. What is the lowest score?<br/>
                (b) In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles of the triangle?<br/>
                (c) Sachin scored twice as many runs as Rahul. Together, their runs fell two short of a double century. How many runs did each one score?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Highest marks:</b></div>
                    <div class="sol-step">Let the lowest score be x. Equation: 2x + 7 = 87.</div>
                    <div class="sol-step">Solve: 2x = 80 => x = 40.</div>
                    <div class="sol-step">Answer: The lowest score is <span class="ans-highlight">40</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Base angles of isosceles triangle:</b></div>
                    <div class="sol-step">Let base angle be b. Vertex angle = 40&deg;.</div>
                    <div class="sol-step">Sum of angles = b + b + 40 = 180&deg; => 2b = 140&deg; => b = 70&deg;.</div>
                    <div class="sol-step">Answer: The base angles are <span class="ans-highlight">70&deg;</span> each.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) Sachin and Rahul's runs:</b></div>
                    <div class="sol-step">Let Rahul's runs be x. Sachin's runs = 2x.</div>
                    <div class="sol-step">Together: x + 2x = 200 - 2 => 3x = 198 => x = 66.</div>
                    <div class="sol-step">Sachin's runs = 2 &times; 66 = 132.</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">Rahul scored 66 runs</span> and <span class="ans-highlight">Sachin scored 132 runs</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Solve the following:<br/>
                (i) Irfan says that he has 7 marbles, more than five times the marbles Parmit has. Irfan has 37 marbles. How many marbles does Parmit have?<br/>
                (ii) Laxmi's father is 49 years old. He is 4 years older than three times Laxmi's age. What is Laxmi's age?<br/>
                (iii) People of Sundargram planted trees in the village garden. Some of the trees were fruit trees. The number of non-fruit trees was two more than three times the number of fruit trees. What was the number of fruit trees planted if the number of non-fruit trees planted was 77?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Parmit's marbles:</b></div>
                    <div class="sol-step">Let Parmit's marbles be m. Equation: 5m + 7 = 37.</div>
                    <div class="sol-step">Solve: 5m = 30 => m = 6.</div>
                    <div class="sol-step">Answer: Parmit has <span class="ans-highlight">6 marbles</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Laxmi's age:</b></div>
                    <div class="sol-step">Let Laxmi's age be y. Equation: 3y + 4 = 49.</div>
                    <div class="sol-step">Solve: 3y = 45 => y = 15.</div>
                    <div class="sol-step">Answer: Laxmi's age is <span class="ans-highlight">15 years</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) Sundargram trees:</b></div>
                    <div class="sol-step">Let the number of fruit trees be f. Equation: 3f + 2 = 77.</div>
                    <div class="sol-step">Solve: 3f = 75 => f = 25.</div>
                    <div class="sol-step">Answer: There were <span class="ans-highlight">25 fruit trees</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Solve the following riddle:<br/>
                I am a number, Tell my identity!<br/>
                Take me seven times over And add a fifty!<br/>
                To reach a triple century You still need forty!</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Let the number be x.</div>
                    <div class="sol-step">Seven times the number plus fifty = 7x + 50.</div>
                    <div class="sol-step">Equation: (7x + 50) + 40 = 300.</div>
                    <div class="sol-step">Solve: 7x + 90 = 300 => 7x = 210 => x = 30.</div>
                    <div class="sol-step">Answer: The number is <span class="ans-highlight">30</span>.</div>
                </div>
            </div>
        </div>
    `,
  },


  examples: [],
  mcqs: [
    {
      id: "m1",
      question: "If x - 3 = 5, then x is:",
      options: ["2", "8", "-2", "15"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question: "Solution of 3n = 12 is:",
      options: ["4", "36", "9", "15"],
      correctAnswer: "A",
    },
    {
      id: "m3",
      question: "If 2p + 1 = 7, then p is:",
      options: ["4", "3", "6", "2"],
      correctAnswer: "B",
    },
    {
      id: "m4",
      question: "Variable in 5y + 2 = 10 is:",
      options: ["5", "2", "10", "y"],
      correctAnswer: "D",
    },
    {
      id: "m5",
      question: "Equation for 'Twice m is 10':",
      options: ["m+2=10", "2m=10", "m/2=10", "m-2=10"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question: "If a/5 = 3, then a is:",
      options: ["15", "8", "3/5", "5/3"],
      correctAnswer: "A",
    },
    {
      id: "m7",
      question: "Solution of x + 10 = 0 is:",
      options: ["10", "0", "-10", "1"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "If 4(x - 1) = 8, then x is:",
      options: ["2", "3", "1", "4"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question: "Which is a simple equation?",
      options: ["x+2>5", "x+y=10", "2x+1=5", "x²=4"],
      correctAnswer: "C",
    },
    {
      id: "m10",
      question: "If 10 - y = 6, then y is:",
      options: ["16", "4", "-4", "6"],
      correctAnswer: "B",
    },
  ],
  summary: [],
};
