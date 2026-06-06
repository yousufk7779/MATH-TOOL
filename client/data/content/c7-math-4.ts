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
            .question { background: rgba(33, 150, 243, 0.1); color: #2196F3; padding: 12px; border-radius: 8px; border-left: 6px solid #2196F3; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #2196F3; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .data-table { width: 100%; border-collapse: collapse; margin: 15px 0; background: #1a1a2e; border: 1px solid #2196F3; }
            .data-table th, .data-table td { border: 1px solid rgba(33, 150, 243, 0.3); padding: 10px; text-align: center; }
            .data-table th { background: rgba(33, 150, 243, 0.2); color: #2196F3; }
        </style>
        <div class="container">
            <div class="question">1. Complete the last column of the table.</div>
            <table class="data-table">
                <tr><th>Equation</th><th>Value</th><th>Satisfied (Yes/No)</th></tr>
                <tr><td>x + 3 = 0</td><td>x = 3</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>x + 3 = 0</td><td>x = 0</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>x + 3 = 0</td><td>x = -3</td><td><span class="ans-highlight">Yes</span></td></tr>
                <tr><td>x - 7 = 1</td><td>x = 7</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>x - 7 = 1</td><td>x = 8</td><td><span class="ans-highlight">Yes</span></td></tr>
                <tr><td>5x = 25</td><td>x = 0</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>5x = 25</td><td>x = 5</td><td><span class="ans-highlight">Yes</span></td></tr>
                <tr><td>5x = 25</td><td>x = -5</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>m/3 = 2</td><td>m = -6</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>m/3 = 2</td><td>m = 0</td><td><span class="ans-highlight">No</span></td></tr>
                <tr><td>m/3 = 2</td><td>m = 6</td><td><span class="ans-highlight">Yes</span></td></tr>
            </table>

            <div class="question">2. Check whether the value given in the brackets is a solution to the given equation or not:<br/>(a) m + 6 = 15 (m = 6)<br/>(b) 2n + 7 = 13 (n = 3)<br/>(c) 7n + 5 = 19 (n = 2)<br/>(d) 4p - 3 = 12 (p = 4)<br/>(e) 4p - 3 = 13 (p = 4)<br/>(f) 4p + 5 = 21 (p = 0)</div>
            <div class="solution">
                <div class="sol-step"><b>(a) m + 6 = 15 (m = 6)</b></div>
                <div class="sol-step">=> Substituting m = 6 in LHS:</div>
                <div class="sol-step">=> LHS = 6 + 6</div>
                <div class="sol-step">=> LHS = 12</div>
                <div class="sol-step">=> RHS = 15</div>
                <div class="sol-step">=> Since 12 ≠ 15 (LHS ≠ RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">m = 6 is NOT a solution.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) 2n + 7 = 13 (n = 3)</b></div>
                <div class="sol-step">=> Substituting n = 3 in LHS:</div>
                <div class="sol-step">=> LHS = 2(3) + 7</div>
                <div class="sol-step">=> LHS = 6 + 7</div>
                <div class="sol-step">=> LHS = 13</div>
                <div class="sol-step">=> RHS = 13</div>
                <div class="sol-step">=> Since 13 = 13 (LHS = RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">n = 3 IS a solution.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) 7n + 5 = 19 (n = 2)</b></div>
                <div class="sol-step">=> Substituting n = 2 in LHS:</div>
                <div class="sol-step">=> LHS = 7(2) + 5</div>
                <div class="sol-step">=> LHS = 14 + 5</div>
                <div class="sol-step">=> LHS = 19</div>
                <div class="sol-step">=> RHS = 19</div>
                <div class="sol-step">=> Since 19 = 19 (LHS = RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">n = 2 IS a solution.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) 4p - 3 = 12 (p = 4)</b></div>
                <div class="sol-step">=> Substituting p = 4 in LHS:</div>
                <div class="sol-step">=> LHS = 4(4) - 3</div>
                <div class="sol-step">=> LHS = 16 - 3</div>
                <div class="sol-step">=> LHS = 13</div>
                <div class="sol-step">=> RHS = 12</div>
                <div class="sol-step">=> Since 13 ≠ 12 (LHS ≠ RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">p = 4 is NOT a solution.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) 4p - 3 = 13 (p = 4)</b></div>
                <div class="sol-step">=> Substituting p = 4 in LHS:</div>
                <div class="sol-step">=> LHS = 4(4) - 3</div>
                <div class="sol-step">=> LHS = 16 - 3</div>
                <div class="sol-step">=> LHS = 13</div>
                <div class="sol-step">=> RHS = 13</div>
                <div class="sol-step">=> Since 13 = 13 (LHS = RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">p = 4 IS a solution.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) 4p + 5 = 21 (p = 0)</b></div>
                <div class="sol-step">=> Substituting p = 0 in LHS:</div>
                <div class="sol-step">=> LHS = 4(0) + 5</div>
                <div class="sol-step">=> LHS = 0 + 5</div>
                <div class="sol-step">=> LHS = 5</div>
                <div class="sol-step">=> RHS = 21</div>
                <div class="sol-step">=> Since 5 ≠ 21 (LHS ≠ RHS)</div>
                <div class="sol-step">Result: <span class="ans-highlight">p = 0 is NOT a solution.</span></div>
            </div>

            <div class="question">3. Solve the following equations by trial and error method:<br/>(i) 5p + 2 = 17<br/>(ii) 3x - 12 = 6</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 5p + 2 = 17:</b></div>
                <div class="sol-step">Put p = 1: 5(1) + 2 = 7 (No)</div>
                <div class="sol-step">Put p = 2: 5(2) + 2 = 12 (No)</div>
                <div class="sol-step">Put p = 3: 5(3) + 2 = 17 (Yes)</div>
                <div class="sol-step">Result: <span class="ans-highlight">p = 3</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3x - 12 = 6:</b></div>
                <div class="sol-step">Put x = 4: 3(4) - 12 = 0 (No)</div>
                <div class="sol-step">Put x = 5: 3(5) - 12 = 3 (No)</div>
                <div class="sol-step">Put x = 6: 3(6) - 12 = 6 (Yes)</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 6</span></div>
            </div>

            <div class="question">4. Write equations for the following statements:<br/>(i) The sum of numbers x and 4 is 9.<br/>(ii) 2 subtracted from y is 8.<br/>(iii) Ten times a is 70.<br/>(iv) The number b divided by 5 gives 6.<br/>(v) Three-fourth of t is 15.<br/>(vi) Seven times m plus 7 gets you 77.<br/>(vii) One-fourth of a number x minus 4 gives 4.<br/>(viii) If you take away 6 from 6 times y, you get 60.<br/>(ix) If you add 3 to one-third of z, you get 30.<br/>(x) Three times a number x subtracted from 4 gives 7.</div>
            <div class="solution">
                <div class="sol-step">(i) <span class="ans-highlight">x + 4 = 9</span></div>
                <div class="sol-step">(ii) <span class="ans-highlight">y - 2 = 8</span></div>
                <div class="sol-step">(iii) <span class="ans-highlight">10a = 70</span></div>
                <div class="sol-step">(iv) <div class="frac"><span class="num">b</span><span class="den">5</span></div> = <span class="ans-highlight">6</span></div>
                <div class="sol-step">(v) <div class="frac"><span class="num">3</span><span class="den">4</span></div> t = <span class="ans-highlight">15</span></div>
                <div class="sol-step">(vi) <span class="ans-highlight">7m + 7 = 77</span></div>
                <div class="sol-step">(vii) <div class="frac"><span class="num">1</span><span class="den">4</span></div> x - 4 = <span class="ans-highlight">4</span></div>
                <div class="sol-step">(viii) <span class="ans-highlight">6y - 6 = 60</span></div>
                <div class="sol-step">(ix) <div class="frac"><span class="num">1</span><span class="den">3</span></div> z + 3 = <span class="ans-highlight">30</span></div>
                <div class="sol-step">(x) <span class="ans-highlight">4 - 3x = 7</span></div>
            </div>

            <div class="question">5. Write the following equations in statement forms:<br/>(i) x + 4 = 6<br/>(ii) x - 7 = 10<br/>(iii) 2m = 11<br/>(iv) m/3 = 12<br/>(v) 4p + 3 = 7<br/>(vi) 3p/4 - 7 = 15<br/>(vii) 6x - 3 = 10</div>
            <div class="solution">
                <div class="sol-step">(i) The sum of x and 4 is 6.</div>
                <div class="sol-step">(ii) 7 subtracted from x is 10.</div>
                <div class="sol-step">(iii) Twice a number m is 11.</div>
                <div class="sol-step">(iv) One-third of m is 12.</div>
                <div class="sol-step">(v) 3 added to four times p is 7.</div>
                <div class="sol-step">(vi) 7 subtracted from three-fourth of p is 15.</div>
                <div class="sol-step">(vii) 3 subtracted from six times x is 10.</div>
            </div>

            <div class="question">6. Set up an equation in the following cases:<br/>(i) Gaurav says that he has 7 marbles more than five times the marbles Imran has. Gaurav has 37 marbles. (Take m to be the number of Imran's marbles.)<br/>(ii) Gulshan's father is 49 years old. He is 4 years older than three times Gulshan's age. (Take Gulshan's age to be y years.)<br/>(iii) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. (Take the lowest score to be l.)<br/>(iv) In an isosceles triangle, the vertex angle is twice either base angle. (Let the base angle be b in degrees.)</div>
            <div class="solution">
                <div class="sol-step"><b>(i) Gaurav says that he has 7 marbles more than five times the marbles Imran has. Gaurav has 37 marbles.</b></div>
                <div class="sol-step">Let m be the number of Imran's marbles.</div>
                <div class="sol-step">Five times Imran's marbles = 5m</div>
                <div class="sol-step">Seven marbles more than 5m = 5m + 7</div>
                <div class="sol-step">Equation: <span class="ans-highlight">5m + 7 = 37</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Gulshan's father is 49 years old. He is 4 years older than three times Gulshan's age.</b></div>
                <div class="sol-step">Let Gulshan's age be y years.</div>
                <div class="sol-step">Three times Gulshan's age = 3y</div>
                <div class="sol-step">Four years older than 3y = 3y + 4</div>
                <div class="sol-step">Equation: <span class="ans-highlight">3y + 4 = 49</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87.</b></div>
                <div class="sol-step">Let the lowest score be l.</div>
                <div class="sol-step">Twice the lowest marks = 2l</div>
                <div class="sol-step">Twice the lowest marks plus 7 = 2l + 7</div>
                <div class="sol-step">Equation: <span class="ans-highlight">2l + 7 = 87</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) In an isosceles triangle, the vertex angle is twice either base angle.</b></div>
                <div class="sol-step">Let the base angle be b.</div>
                <div class="sol-step">Then vertex angle = 2b</div>
                <div class="sol-step">Sum of angles = b + b + 2b = 180</div>
                <div class="sol-step">Equation: <span class="ans-highlight">4b = 180</span></div>
            </div>
        </div>
        `,
    "ex4-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(33, 150, 243, 0.1); color: #2196F3; padding: 12px; border-radius: 8px; border-left: 6px solid #2196F3; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #2196F3; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <div class="question">1. Give first the step you will use to separate the variable and then solve the equation:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) x - 1 = 0</b></div>
                <div class="sol-step">Add 1 to both sides to separate x.</div>
                <div class="sol-step">=> x - 1 + 1 = 0 + 1</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 1</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) x + 1 = 0</b></div>
                <div class="sol-step">Subtract 1 from both sides to separate x.</div>
                <div class="sol-step">=> x + 1 - 1 = 0 - 1</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = -1</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) x - 1 = 5</b></div>
                <div class="sol-step">Add 1 to both sides to separate x.</div>
                <div class="sol-step">=> x - 1 + 1 = 5 + 1</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) x + 6 = 2</b></div>
                <div class="sol-step">Subtract 6 from both sides to separate x.</div>
                <div class="sol-step">=> x + 6 - 6 = 2 - 6</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = -4</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) y - 4 = -7</b></div>
                <div class="sol-step">Add 4 to both sides to separate y.</div>
                <div class="sol-step">=> y - 4 + 4 = -7 + 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">y = -3</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) y - 4 = 4</b></div>
                <div class="sol-step">Add 4 to both sides to separate y.</div>
                <div class="sol-step">=> y - 4 + 4 = 4 + 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">y = 8</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(g) y + 4 = 4</b></div>
                <div class="sol-step">Subtract 4 from both sides to separate y.</div>
                <div class="sol-step">=> y + 4 - 4 = 4 - 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">y = 0</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(h) y + 4 = -4</b></div>
                <div class="sol-step">Subtract 4 from both sides to separate y.</div>
                <div class="sol-step">=> y + 4 - 4 = -4 - 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">y = -8</span></div>
            </div>

            <div class="question">2. Give first the step you will use to separate the variable and then solve the equation:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) 3l = 42</b></div>
                <div class="sol-step">Divide both sides by 3 to separate l.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">3l</span><span class="den">3</span></div> = <div class="frac"><span class="num">42</span><span class="den">3</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">l = 14</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) <div class="frac"><span class="num">b</span><span class="den">2</span></div> = 6</b></div>
                <div class="sol-step">Multiply both sides by 2 to separate b.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">b</span><span class="den">2</span></div> × 2 = 6 × 2</div>
                <div class="sol-step">Result: <span class="ans-highlight">b = 12</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">p</span><span class="den">7</span></div> = 4</b></div>
                <div class="sol-step">Multiply both sides by 7 to separate p.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">p</span><span class="den">7</span></div> × 7 = 4 × 7</div>
                <div class="sol-step">Result: <span class="ans-highlight">p = 28</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) 4x = 25</b></div>
                <div class="sol-step">Divide both sides by 4 to separate x.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">4x</span><span class="den">4</span></div> = <div class="frac"><span class="num">25</span><span class="den">4</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">x = <div class="frac"><span class="num">25</span><span class="den">4</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) 8y = 36</b></div>
                <div class="sol-step">Divide both sides by 8 to separate y.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">8y</span><span class="den">8</span></div> = <div class="frac"><span class="num">36</span><span class="den">8</span></div></div>
                <div class="sol-step">=> y = <div class="frac"><span class="num">9</span><span class="den">2</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">y = 4.5</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) <div class="frac"><span class="num">z</span><span class="den">3</span></div> = <div class="frac"><span class="num">5</span><span class="den">4</span></div></b></div>
                <div class="sol-step">Multiply both sides by 3 to separate z.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">z</span><span class="den">3</span></div> × 3 = <div class="frac"><span class="num">5</span><span class="den">4</span></div> × 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">z = <div class="frac"><span class="num">15</span><span class="den">4</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(g) <div class="frac"><span class="num">a</span><span class="den">5</span></div> = <div class="frac"><span class="num">7</span><span class="den">15</span></div></b></div>
                <div class="sol-step">Multiply both sides by 5 to separate a.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">a</span><span class="den">5</span></div> × 5 = <div class="frac"><span class="num">7</span><span class="den">15</span></div> × 5</div>
                <div class="sol-step">Result: <span class="ans-highlight">a = <div class="frac"><span class="num">7</span><span class="den">3</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(h) 20t = -10</b></div>
                <div class="sol-step">Divide both sides by 20 to separate t.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">20t</span><span class="den">20</span></div> = <div class="frac"><span class="num">-10</span><span class="den">20</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">t = -<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>
            </div>

            <div class="question">3. Give the steps you will use to separate the variable and then solve the equation:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) 3n - 2 = 46</b></div>
                <div class="sol-step">Add 2 to both sides</div>
                <div class="sol-step">=> 3n - 2 + 2 = 46 + 2</div>
                <div class="sol-step">=> 3n = 48</div>
                <div class="sol-step">Divide both sides by 3</div>
                <div class="sol-step">=> n = <span class="ans-highlight">16</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) 5m + 7 = 17</b></div>
                <div class="sol-step">Subtract 7 from both sides</div>
                <div class="sol-step">=> 5m + 7 - 7 = 17 - 7</div>
                <div class="sol-step">=> 5m = 10</div>
                <div class="sol-step">Divide both sides by 5</div>
                <div class="sol-step">=> m = <span class="ans-highlight">2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">20p</span><span class="den">3</span></div> = 40</b></div>
                <div class="sol-step">Multiply both sides by 3</div>
                <div class="sol-step">=> 20p = 120</div>
                <div class="sol-step">Divide both sides by 20</div>
                <div class="sol-step">=> p = <span class="ans-highlight">6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) <div class="frac"><span class="num">3p</span><span class="den">10</span></div> = 6</b></div>
                <div class="sol-step">Multiply both sides by 10</div>
                <div class="sol-step">=> 3p = 60</div>
                <div class="sol-step">Divide both sides by 3</div>
                <div class="sol-step">=> p = <span class="ans-highlight">20</span></div>
            </div>

            <div class="question">4. Solve the following equations:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) 10p = 100</b></div>
                <div class="sol-step">10p = 100</div>
                <div class="sol-step">=> p = 100/10</div>
                <div class="sol-step">=> <span class="ans-highlight">p = 10</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) 10p + 10 = 100</b></div>
                <div class="sol-step">10p + 10 = 100</div>
                <div class="sol-step">=> 10p = 100 - 10</div>
                <div class="sol-step">=> 10p = 90</div>
                <div class="sol-step">=> p = 90/10</div>
                <div class="sol-step">=> <span class="ans-highlight">p = 9</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">p</span><span class="den">4</span></div> = 5</b></div>
                <div class="sol-step"><div class="frac"><span class="num">p</span><span class="den">4</span></div> = 5</div>
                <div class="sol-step">=> p = 5 × 4</div>
                <div class="sol-step">=> <span class="ans-highlight">p = 20</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) -<div class="frac"><span class="num">p</span><span class="den">3</span></div> = 5</b></div>
                <div class="sol-step">-<div class="frac"><span class="num">p</span><span class="den">3</span></div> = 5</div>
                <div class="sol-step">=> -p = 5 × 3</div>
                <div class="sol-step">=> -p = 15</div>
                <div class="sol-step">=> <span class="ans-highlight">p = -15</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) -<div class="frac"><span class="num">x</span><span class="den">3</span></div> = 7</b></div>
                <div class="sol-step">-<div class="frac"><span class="num">x</span><span class="den">3</span></div> = 7</div>
                <div class="sol-step">=> -x = 7 × 3</div>
                <div class="sol-step">=> -x = 21</div>
                <div class="sol-step">=> <span class="ans-highlight">x = -21</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) 2x - 5 = -7</b></div>
                <div class="sol-step">2x - 5 = -7</div>
                <div class="sol-step">=> 2x = -7 + 5</div>
                <div class="sol-step">=> 2x = -2</div>
                <div class="sol-step">=> x = -2/2</div>
                <div class="sol-step">=> <span class="ans-highlight">x = -1</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(g) 3x + 7 = 10</b></div>
                <div class="sol-step">3x + 7 = 10</div>
                <div class="sol-step">=> 3x = 10 - 7</div>
                <div class="sol-step">=> 3x = 3</div>
                <div class="sol-step">=> x = 3/3</div>
                <div class="sol-step">=> <span class="ans-highlight">x = 1</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(h) 3x + 6 = 0</b></div>
                <div class="sol-step">3x + 6 = 0</div>
                <div class="sol-step">=> 3x = -6</div>
                <div class="sol-step">=> x = -6/3</div>
                <div class="sol-step">=> <span class="ans-highlight">x = -2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(i) 2x - 5 = 5</b></div>
                <div class="sol-step">2x - 5 = 5</div>
                <div class="sol-step">=> 2x = 5 + 5</div>
                <div class="sol-step">=> 2x = 10</div>
                <div class="sol-step">=> x = 10/2</div>
                <div class="sol-step">=> <span class="ans-highlight">x = 5</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(j) 2k + 1 = 9</b></div>
                <div class="sol-step">2k + 1 = 9</div>
                <div class="sol-step">=> 2k = 9 - 1</div>
                <div class="sol-step">=> 2k = 8</div>
                <div class="sol-step">=> k = 8/2</div>
                <div class="sol-step">=> <span class="ans-highlight">k = 4</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(k) 3q + 9 = 18</b></div>
                <div class="sol-step">3q + 9 = 18</div>
                <div class="sol-step">=> 3q = 18 - 9</div>
                <div class="sol-step">=> 3q = 9</div>
                <div class="sol-step">=> q = 9/3</div>
                <div class="sol-step">=> <span class="ans-highlight">q = 3</span></div>
            </div>
        </div>
        `,
    "ex4-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(33, 150, 243, 0.1); color: #2196F3; padding: 12px; border-radius: 8px; border-left: 6px solid #2196F3; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #2196F3; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #2196F3; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .riddle-box { background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 10px; border: 1px dashed #2196F3; font-style: italic; margin-bottom: 15px; }
        </style>
        <div class="container">
            <div class="question">1. Set up equations and solve them to find the unknown numbers:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) The sum of 5 times a number and 6 is 15</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> Five times the number = 5x</div>
                <div class="sol-step">=> Sum of 5x and 6 = 5x + 6</div>
                <div class="sol-step">=> According to the question: 5x + 6 = 15</div>
                <div class="sol-step">=> Subtracting 6 from both sides:</div>
                <div class="sol-step">=> 5x + 6 - 6 = 15 - 6</div>
                <div class="sol-step">=> 5x = 9</div>
                <div class="sol-step">=> Dividing both sides by 5:</div>
                <div class="sol-step">=> <div class="frac"><span class="num">5x</span><span class="den">5</span></div> = <div class="frac"><span class="num">9</span><span class="den">5</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 1.8</span></div>

                <div class="sol-step"><b>(b) 3/5 times a number taken away from 16, result is number itself</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">5</span></div> of the number = <div class="frac"><span class="num">3x</span><span class="den">5</span></div></div>
                <div class="sol-step">=> According to the question: 16 - <div class="frac"><span class="num">3x</span><span class="den">5</span></div> = x</div>
                <div class="sol-step">=> Transposing <div class="frac"><span class="num">3x</span><span class="den">5</span></div> to RHS:</div>
                <div class="sol-step">=> 16 = x + <div class="frac"><span class="num">3x</span><span class="den">5</span></div></div>
                <div class="sol-step">=> 16 = <div class="frac"><span class="num">5x + 3x</span><span class="den">5</span></div> = <div class="frac"><span class="num">8x</span><span class="den">5</span></div></div>
                <div class="sol-step">=> Multiplying both sides by 5:</div>
                <div class="sol-step">=> 16 × 5 = 8x => 80 = 8x</div>
                <div class="sol-step">=> Dividing both sides by 8:</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 10</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) Three-fourths of a number and add 3, I get 21</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> According to the question: <div class="frac"><span class="num">3</span><span class="den">4</span></div>x + 3 = 21</div>
                <div class="sol-step">=> Transposing 3 to RHS:</div>
                <div class="sol-step">=> <div class="frac"><span class="num">3x</span><span class="den">4</span></div> = 21 - 3 = 18</div>
                <div class="sol-step">=> Multiplying both sides by 4:</div>
                <div class="sol-step">=> 3x = 18 × 4 = 72</div>
                <div class="sol-step">=> Dividing both sides by 3:</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 24</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) Subtracted 11 from twice a number, result was 15</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> According to the question: 2x - 11 = 15</div>
                <div class="sol-step">=> Transposing 11 to RHS:</div>
                <div class="sol-step">=> 2x = 15 + 11 = 26</div>
                <div class="sol-step">=> Dividing both sides by 2:</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 13</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) 50 - thrice notebooks = 8</b></div>
                <div class="sol-step">=> Let the number of notebooks be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> According to the question: 50 - 3x = 8</div>
                <div class="sol-step">=> Transposing 50 to RHS:</div>
                <div class="sol-step">=> -3x = 8 - 50 = -42</div>
                <div class="sol-step">=> Dividing both sides by -3:</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 14</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) Adds 19 to number and divides by 5, gets 8</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> According to the question: <div class="frac"><span class="num">x + 19</span><span class="den">5</span></div> = 8</div>
                <div class="sol-step">=> Multiplying both sides by 5:</div>
                <div class="sol-step">=> x + 19 = 8 × 5 = 40</div>
                <div class="sol-step">=> Transposing 19 to RHS:</div>
                <div class="sol-step">=> x = 40 - 19</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 21</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(g) 6 subtracted from thrice a number is 9</b></div>
                <div class="sol-step">=> Let the number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> According to the question: 3x - 6 = 9</div>
                <div class="sol-step">=> Transposing 6 to RHS:</div>
                <div class="sol-step">=> 3x = 9 + 6 = 15</div>
                <div class="sol-step">=> Dividing both sides by 3:</div>
                <div class="sol-step">Result: <span class="ans-highlight">x = 5</span></div>
            </div>

            <div class="question">2. Solve the following:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. What is the lowest score?</b></div>
                <div class="sol-step">=> Let the lowest score be <span class="ans-highlight">L</span></div>
                <div class="sol-step">=> Twice the lowest marks = 2L</div>
                <div class="sol-step">=> Twice plus 7 = 2L + 7</div>
                <div class="sol-step">=> According to the question: 2L + 7 = 87</div>
                <div class="sol-step">=> Transposing 7 to RHS: 2L = 87 - 7 = 80</div>
                <div class="sol-step">=> Dividing both sides by 2: L = 80/2 = 40</div>
                <div class="sol-step">Result: <span class="ans-highlight">L = 40</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles of the triangle?</b></div>
                <div class="sol-step">=> Let each base angle be <span class="ans-highlight">b</span></div>
                <div class="sol-step">=> We know, sum of angles of a triangle = 180°</div>
                <div class="sol-step">=> Therefore: b + b + 40° = 180°</div>
                <div class="sol-step">=> 2b + 40 = 180</div>
                <div class="sol-step">=> Transposing 40 to RHS: 2b = 140</div>
                <div class="sol-step">=> Dividing both sides by 2: b = 70°</div>
                <div class="sol-step">Result: <span class="ans-highlight">b = 70°</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) Sachin scored twice as many runs as Rahul. Together, their runs fell two short of a double century. How many runs did each one score?</b></div>
                <div class="sol-step">=> Let Rahul's score be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> Then Sachin's score = 2x</div>
                <div class="sol-step">=> Total runs = x + 2x = 3x</div>
                <div class="sol-step">=> Two short of a double century = 200 - 2 = 198</div>
                <div class="sol-step">=> According to the question: 3x = 198</div>
                <div class="sol-step">=> Dividing both sides by 3: x = 198/3 = 66</div>
                <div class="sol-step">=> Rahul's score = 66</div>
                <div class="sol-step">=> Sachin's score = 2 × 66 = 132</div>
                <div class="sol-step">Result: <span class="ans-highlight">Rahul (66), Sachin (132)</span></div>
            </div>

            <div class="question">3. Solve the following:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) Irfan says that he has 7 marbles more than five times the marbles Parmit has. Irfan has 37 marbles. How many marbles does Parmit have?</b></div>
                <div class="sol-step">=> Let the number of marbles Parmit has be <span class="ans-highlight">m</span></div>
                <div class="sol-step">=> Five times the marbles = 5m</div>
                <div class="sol-step">=> Seven marbles more = 5m + 7</div>
                <div class="sol-step">=> According to the question: 5m + 7 = 37</div>
                <div class="sol-step">=> Transposing 7 to RHS: 5m = 37 - 7 = 30</div>
                <div class="sol-step">=> Dividing both sides by 5: m = 30/5 = 6</div>
                <div class="sol-step">Result: <span class="ans-highlight">6 marbles</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Laxmi’s father is 49 years old. He is 4 years older than three times Laxmi’s age. What is Laxmi’s age?</b></div>
                <div class="sol-step">=> Let Laxmi's age be <span class="ans-highlight">y</span> years</div>
                <div class="sol-step">=> Three times her age = 3y</div>
                <div class="sol-step">=> Four years older = 3y + 4</div>
                <div class="sol-step">=> According to the question: 3y + 4 = 49</div>
                <div class="sol-step">=> Transposing 4 to RHS: 3y = 49 - 4 = 45</div>
                <div class="sol-step">=> Dividing both sides by 3: y = 45/3 = 15</div>
                <div class="sol-step">Result: <span class="ans-highlight">15 years</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) Fruit trees planted in Sundargram:</b></div>
                <div class="sol-step">=> Let the number of fruit trees be <span class="ans-highlight">f</span></div>
                <div class="sol-step">=> Three times the fruit trees = 3f</div>
                <div class="sol-step">=> Two more than 3f = 3f + 2</div>
                <div class="sol-step">=> Given number of non-fruit trees = 77</div>
                <div class="sol-step">=> Therefore: 3f + 2 = 77</div>
                <div class="sol-step">=> Transposing 2 to RHS: 3f = 75</div>
                <div class="sol-step">=> Dividing both sides by 3: f = 75/3 = 25</div>
                <div class="sol-step">Result: <span class="ans-highlight">25 fruit trees</span></div>
            </div>

            <div class="question">4. Solve the following riddle:</div>
            <div class="riddle-box">
                "I am a number. Tell my identity!<br/>
                Take me seven times over And add a fifty!<br/>
                To reach a triple century You still need forty!"
            </div>
            <div class="solution">
                <div class="sol-step">=> Let the unknown number be <span class="ans-highlight">x</span></div>
                <div class="sol-step">=> Seven times the number = 7x</div>
                <div class="sol-step">=> Adding fifty: 7x + 50</div>
                <div class="sol-step">=> Still need forty to reach 300: (7x + 50) + 40 = 300</div>
                <div class="sol-step">=> Combining constants: 7x + 90 = 300</div>
                <div class="sol-step">=> Transposing 90 to RHS: 7x = 300 - 90 = 210</div>
                <div class="sol-step">=> Dividing both sides by 7: x = 210/7 = 30</div>
                <div class="sol-step">Result: <span class="ans-highlight">The number is 30.</span></div>
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
