import os

content = '''import { ChapterContent } from "../types";

export const c7Math1: ChapterContent = {
  id: "c7-math-1",
  number: 1,
  title: "Integers",
  isHtmlView: true,
  introduction:
    "We have already learnt about whole numbers and integers in Class VI. We know that integers form a bigger collection of numbers which contains whole numbers and negative numbers.",
  definitions: [
    {
      term: "Integers",
      description: "A collection of positive numbers, negative numbers, and zero. Examples: ..., -3, -2, -1, 0, 1, 2, 3, ...",
    },
    {
      term: "Additive Inverse",
      description: "The negative of an integer 'a' is '-a' such that a + (-a) = 0.",
    },
  ],
  keyPoints: [
    "Integers include positive numbers, negative numbers, and zero.",
    "On a number line, positive integers lie to the right of zero and negative integers lie to the left.",
    "When adding a positive integer, move to the right. When adding a negative integer, move to the left.",
    "Product or quotient of two integers with the same sign is positive.",
    "Product or quotient of two integers with different signs is negative.",
  ],
  formulas: [
    { name: "Additive Inverse", formula: "a + (-a) = 0" },
    { name: "Distributive Property", formula: "a \\\\times (b + c) = (a \\\\times b) + (a \\\\times c)" },
    { name: "Commutative Property", formula: "a + b = b + a \\\\text{ and } a \\\\times b = b \\\\times a" },
    { name: "Associative Property", formula: "(a + b) + c = a + (b + c) \\\\text{ and } (a \\\\times b) \\\\times c = a \\\\times (b \\\\times c)" },
  ],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] },
    { id: "ex1-2", name: "Exercise 1.2", questions: [] },
    { id: "ex1-3", name: "Exercise 1.3", questions: [] },
    { id: "ex1-4", name: "Exercise 1.4", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF9800; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 152, 0, 0.05); border-left: 4px solid #FF9800; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF9800; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Integers</div>
            <p class="content-text">In this chapter, we explore integers, their representation on a number line, basic arithmetic operations (addition, subtraction, multiplication, division), and their algebraic properties.</p>
            <div class="point-box">
                <div class="point-item">Integers: Positive whole numbers, negative whole numbers, and zero.</div>
                <div class="point-item">Sign Rules for Multiplication & Division: Same signs give positive (+), opposite signs give negative (-).</div>
                <div class="point-item">Properties: Closure, Commutative, Associative, and Distributive properties of integers.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex1-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF9800; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF9800; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border-radius: 8px; }
            .data-table { width: 100%; min-width: 280px; border-collapse: collapse; background: #1a1a2e; border: 1px solid #FF9800; font-size: 0.95em; }
            .data-table th, .data-table td { border: 1px solid rgba(255, 152, 0, 0.3); padding: 8px; text-align: center; }
            .data-table th { background: rgba(255, 152, 0, 0.2); color: #FF9800; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Following number line shows the temperature in degree celsius (°C) at different places on a particular day.<br/><br/>Places marked: Lahulspiti (-8°C), Srinagar (-2°C), Shimla (5°C), Ooty (14°C), Bengaluru (22°C)</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) Observe this number line and write the temperature of the places marked on it.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By observing the number line, the temperatures of the marked places are:</div>
                    <div class="sol-step">• Temperature in Lahulspiti = <span class="ans-highlight">-8°C</span></div>
                    <div class="sol-step">• Temperature in Srinagar = <span class="ans-highlight">-2°C</span></div>
                    <div class="sol-step">• Temperature in Shimla = <span class="ans-highlight">5°C</span></div>
                    <div class="sol-step">• Temperature in Ooty = <span class="ans-highlight">14°C</span></div>
                    <div class="sol-step">• Temperature in Bengaluru = <span class="ans-highlight">22°C</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) What is the temperature difference between the hottest and the coldest places among the above?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Temperature at the hottest place (Bengaluru) = 22°C</div>
                    <div class="sol-step">Temperature at the coldest place (Lahulspiti) = -8°C</div>
                    <div class="sol-step">Temperature difference = Hottest place - Coldest place</div>
                    <div class="sol-step">= 22°C - (-8°C)</div>
                    <div class="sol-step">= 22°C + 8°C</div>
                    <div class="sol-step"><span class="ans-highlight">= 30°C</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) What is the temperature difference between Lahulspiti and Srinagar?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Temperature in Srinagar = -2°C</div>
                    <div class="sol-step">Temperature in Lahulspiti = -8°C</div>
                    <div class="sol-step">Temperature difference = Srinagar temp - Lahulspiti temp</div>
                    <div class="sol-step">= -2°C - (-8°C)</div>
                    <div class="sol-step">= -2°C + 8°C</div>
                    <div class="sol-step"><span class="ans-highlight">= 6°C</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) Can we say temperature of Srinagar and Shimla taken together is less than the temperature in Shimla? Is it also less than the temperature in Srinagar?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Temperature in Srinagar = -2°C</div>
                    <div class="sol-step">Temperature in Shimla = 5°C</div>
                    <div class="sol-step">Temperature of Srinagar and Shimla taken together = -2°C + 5°C = 3°C</div>
                    <div class="sol-step">Comparing with Shimla (5°C): Since 3°C &lt; 5°C, <span class="ans-highlight">Yes, the temperature of Srinagar and Shimla taken together is less than the temperature in Shimla.</span></div>
                    <div class="sol-step">Comparing with Srinagar (-2°C): Since 3°C &gt; -2°C, <span class="ans-highlight">No, it is not less than the temperature in Srinagar.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. In a quiz, positive marks are given for correct answers and negative marks are given for incorrect answers. If Jack's scores in five successive rounds were 25, -5, -10, 15 and 10, what was his total at the end?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Jack's scores in 5 rounds are: 25, -5, -10, 15, 10</div>
                    <div class="sol-step">Total score at the end = Sum of all scores</div>
                    <div class="sol-step">= 25 + (-5) + (-10) + 15 + 10</div>
                    <div class="sol-step">= 25 - 5 - 10 + 15 + 10</div>
                    <div class="sol-step">= (25 + 15 + 10) - (5 + 10)</div>
                    <div class="sol-step">= 50 - 15</div>
                    <div class="sol-step"><span class="ans-highlight">Total score = 35</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. At Srinagar temperature was -5°C on Monday and then it dropped by 2°C on Tuesday. What was the temperature of Srinagar on Tuesday? On Wednesday, it rose by 4°C. What was the temperature on this day?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Temperature on Monday = -5°C</div>
                    <div class="sol-step">Temperature dropped on Tuesday by = 2°C</div>
                    <div class="sol-step">Temperature on Tuesday = -5°C - 2°C</div>
                    <div class="sol-step"><span class="ans-highlight">Temperature on Tuesday = -7°C</span></div>
                    <div class="sol-step" style="margin-top: 10px;">Now, temperature rose on Wednesday by = 4°C</div>
                    <div class="sol-step">Temperature on Wednesday = -7°C + 4°C</div>
                    <div class="sol-step"><span class="ans-highlight">Temperature on Wednesday = -3°C</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A plane is flying at the height of 5000 m above sea level. At a particular point, it is exactly above a submarine floating 1200 m below sea level. What is the vertical distance between them?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Height of plane above sea level = +5000 m</div>
                    <div class="sol-step">Depth of submarine below sea level = -1200 m</div>
                    <div class="sol-step">Vertical distance between plane and submarine = Height of plane - Depth of submarine</div>
                    <div class="sol-step">= 5000 m - (-1200 m)</div>
                    <div class="sol-step">= 5000 m + 1200 m</div>
                    <div class="sol-step"><span class="ans-highlight">Vertical distance = 6200 m</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Mohan deposits ₹ 2,000 in his bank account and withdraws ₹ 1,642 from it the next day. If withdrawal of amount from the account is represented by a negative integer, then how will you represent the amount deposited? Find the balance in Mohan's account after the withdrawal.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since withdrawal is represented by a negative integer, <span class="ans-highlight">the amount deposited will be represented by a positive integer.</span></div>
                    <div class="sol-step">Amount deposited = +₹ 2000</div>
                    <div class="sol-step">Amount withdrawn = -₹ 1642</div>
                    <div class="sol-step">Balance in Mohan's account = Amount deposited + Amount withdrawn</div>
                    <div class="sol-step">= ₹ 2000 + (-₹ 1642)</div>
                    <div class="sol-step">= ₹ 2000 - ₹ 1642</div>
                    <div class="sol-step"><span class="ans-highlight">Balance in account = ₹ 358</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Rita goes 20 km towards east from point A to point B. From B, she moves 30 km towards west along the same road. If the distance towards east is represented by a positive integer, then how will you represent the distance travelled towards west? By which integer will you represent her final position from A?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since distance towards east is positive, <span class="ans-highlight">the distance travelled towards west will be represented by a negative integer.</span></div>
                    <div class="sol-step">Distance towards east (from A to B) = +20 km</div>
                    <div class="sol-step">Distance towards west (from B) = -30 km</div>
                    <div class="sol-step">Final position from A = Distance east + Distance west</div>
                    <div class="sol-step">= 20 km + (-30 km)</div>
                    <div class="sol-step">= 20 - 30</div>
                    <div class="sol-step"><span class="ans-highlight">Final position from A = -10 km</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. In a magic square, each row, column and diagonal have the same sum. Check which of the following is a magic square.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">Checking Square (i):</b></div>
                    <div class="sol-step">Rows:</div>
                    <div class="sol-step">• Row 1: 5 + (-1) + (-4) = 5 - 1 - 4 = 0</div>
                    <div class="sol-step">• Row 2: -5 + (-2) + 7 = -7 + 7 = 0</div>
                    <div class="sol-step">• Row 3: 0 + 3 + (-3) = 3 - 3 = 0</div>
                    <div class="sol-step">Columns:</div>
                    <div class="sol-step">• Column 1: 5 + (-5) + 0 = 0</div>
                    <div class="sol-step">• Column 2: -1 + (-2) + 3 = -3 + 3 = 0</div>
                    <div class="sol-step">• Column 3: -4 + 7 + (-3) = 3 - 3 = 0</div>
                    <div class="sol-step">Diagonals:</div>
                    <div class="sol-step">• Diagonal 1: 5 + (-2) + (-3) = 5 - 5 = 0</div>
                    <div class="sol-step">• Diagonal 2: -4 + (-2) + 0 = -6</div>
                    <div class="sol-step">Since sum of Diagonal 2 is -6 (not 0), <span class="ans-highlight">Square (i) is not a magic square.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">Checking Square (ii):</b></div>
                    <div class="sol-step">Rows:</div>
                    <div class="sol-step">• Row 1: 1 + (-10) + 0 = -9</div>
                    <div class="sol-step">• Row 2: -4 + (-3) + (-2) = -9</div>
                    <div class="sol-step">• Row 3: -6 + 4 + (-7) = -2 - 7 = -9</div>
                    <div class="sol-step">Columns:</div>
                    <div class="sol-step">• Column 1: 1 + (-4) + (-6) = 1 - 10 = -9</div>
                    <div class="sol-step">• Column 2: -10 + (-3) + 4 = -13 + 4 = -9</div>
                    <div class="sol-step">• Column 3: 0 + (-2) + (-7) = -9</div>
                    <div class="sol-step">Diagonals:</div>
                    <div class="sol-step">• Diagonal 1: 1 + (-3) + (-7) = 1 - 10 = -9</div>
                    <div class="sol-step">• Diagonal 2: 0 + (-3) + (-6) = -9</div>
                    <div class="sol-step">Since all rows, columns, and diagonals sum to -9, <span class="ans-highlight">Square (ii) is a magic square.</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Verify a - (-b) = a + b for the following values of a and b.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) a = 21, b = 18</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a - (-b) = 21 - (-18) = 21 + 18 = 39</div>
                    <div class="sol-step">RHS = a + b = 21 + 18 = 39</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 39. Hence verified.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) a = 118, b = 125</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a - (-b) = 118 - (-125) = 118 + 125 = 243</div>
                    <div class="sol-step">RHS = a + b = 118 + 125 = 243</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 243. Hence verified.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iii) a = 75, b = 84</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a - (-b) = 75 - (-84) = 75 + 84 = 159</div>
                    <div class="sol-step">RHS = a + b = 75 + 84 = 159</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 159. Hence verified.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iv) a = 28, b = 11</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a - (-b) = 28 - (-11) = 28 + 11 = 39</div>
                    <div class="sol-step">RHS = a + b = 28 + 11 = 39</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 39. Hence verified.</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Use the sign of &gt;, &lt; or = in the box to make the statements true.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) (-8) + (-4) [ ] (-8) - (-4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = (-8) + (-4) = -8 - 4 = -12</div>
                    <div class="sol-step">RHS = (-8) - (-4) = -8 + 4 = -4</div>
                    <div class="sol-step">Since -12 &lt; -4, LHS &lt; RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">(-8) + (-4) [&lt;] (-8) - (-4)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) (-3) + 7 - (19) [ ] 15 - 8 + (-9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = -3 + 7 - 19 = 4 - 19 = -15</div>
                    <div class="sol-step">RHS = 15 - 8 - 9 = 7 - 9 = -2</div>
                    <div class="sol-step">Since -15 &lt; -2, LHS &lt; RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">(-3) + 7 - (19) [&lt;] 15 - 8 + (-9)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) 23 - 41 + 11 [ ] 23 - 41 - 11</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 23 - 41 + 11 = 34 - 41 = -7</div>
                    <div class="sol-step">RHS = 23 - 41 - 11 = 23 - 52 = -29</div>
                    <div class="sol-step">Since -7 &gt; -29, LHS &gt; RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">23 - 41 + 11 [&gt;] 23 - 41 - 11</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) 39 + (-24) - (15) [ ] 36 + (-52) - (-36)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 39 - 24 - 15 = 39 - 39 = 0</div>
                    <div class="sol-step">RHS = 36 - 52 + 36 = 72 - 52 = 20</div>
                    <div class="sol-step">Since 0 &lt; 20, LHS &lt; RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">39 + (-24) - (15) [&lt;] 36 + (-52) - (-36)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) -231 + 79 + 51 [ ] -399 + 159 + 81</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = -231 + (79 + 51) = -231 + 130 = -101</div>
                    <div class="sol-step">RHS = -399 + (159 + 81) = -399 + 240 = -159</div>
                    <div class="sol-step">Since -101 &gt; -159, LHS &gt; RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">-231 + 79 + 51 [&gt;] -399 + 159 + 81</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. A water tank has steps inside it. A monkey is sitting on the topmost step (i.e., the 1st step). The water level is at the 9th step.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) He jumps 3 steps down and then jumps back 2 steps up. In how many jumps will he reach the water level?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Initially, monkey is at Step 1.</div>
                    <div class="sol-step">• 1st jump: 1 + 3 = Step 4</div>
                    <div class="sol-step">• 2nd jump: 4 - 2 = Step 2</div>
                    <div class="sol-step">• 3rd jump: 2 + 3 = Step 5</div>
                    <div class="sol-step">• 4th jump: 5 - 2 = Step 3</div>
                    <div class="sol-step">• 5th jump: 3 + 3 = Step 6</div>
                    <div class="sol-step">• 6th jump: 6 - 2 = Step 4</div>
                    <div class="sol-step">• 7th jump: 4 + 3 = Step 7</div>
                    <div class="sol-step">• 8th jump: 7 - 2 = Step 5</div>
                    <div class="sol-step">• 9th jump: 5 + 3 = Step 8</div>
                    <div class="sol-step">• 10th jump: 8 - 2 = Step 6</div>
                    <div class="sol-step">• 11th jump: 6 + 3 = Step 9 (Water level reached!)</div>
                    <div class="sol-step"><span class="ans-highlight">Total jumps required = 11 jumps</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) After drinking water, he jumps 4 steps up and then jumps back 2 steps down with every move. In how many jumps will he reach back to the top step?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Initially, monkey is at Step 9.</div>
                    <div class="sol-step">• 1st jump: 9 - 4 = Step 5</div>
                    <div class="sol-step">• 2nd jump: 5 + 2 = Step 7</div>
                    <div class="sol-step">• 3rd jump: 7 - 4 = Step 3</div>
                    <div class="sol-step">• 4th jump: 3 + 2 = Step 5</div>
                    <div class="sol-step">• 5th jump: 5 - 4 = Step 1 (Top step reached!)</div>
                    <div class="sol-step"><span class="ans-highlight">Total jumps required = 5 jumps</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iii) If steps moved down are represented by negative integers and steps moved up by positive integers, represent his moves in parts (i) and (ii): (a) -3 + 2 - ... = -8 (b) 4 - 2 + ... = 8. What does sum 8 in (b) represent?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">For part (a):</div>
                    <div class="sol-step">-3 + 2 - 3 + 2 - 3 + 2 - 3 + 2 - 3 + 2 - 3 = -18 + 10 = -8</div>
                    <div class="sol-step">Here, sum -8 represents going down by 8 steps.</div>
                    <div class="sol-step" style="margin-top: 10px;">For part (b):</div>
                    <div class="sol-step">4 - 2 + 4 - 2 + 4 = 12 - 4 = 8</div>
                    <div class="sol-step"><span class="ans-highlight">So, the sum 8 in part (b) represents going up by 8 steps.</span></div>
                </div>
            </div>
        </div>
    `,
    "ex1-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF9800; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF9800; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Write down a pair of integers whose:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) sum is -7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take integers -4 and -3.</div>
                    <div class="sol-step">Sum = (-4) + (-3) = -4 - 3 = -7</div>
                    <div class="sol-step"><span class="ans-highlight">Pair of integers: (-4, -3) or (-5, -2)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) the difference is -10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take integers -25 and -15.</div>
                    <div class="sol-step">Difference = (-25) - (-15) = -25 + 15 = -10</div>
                    <div class="sol-step"><span class="ans-highlight">Pair of integers: (-25, -15) or (-20, -10)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) sum is 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take integers 4 and -4.</div>
                    <div class="sol-step">Sum = 4 + (-4) = 4 - 4 = 0</div>
                    <div class="sol-step"><span class="ans-highlight">Pair of integers: (4, -4) or (5, -5)</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Answer the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) Write a pair of negative integers whose difference gives 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take negative integers -5 and -13.</div>
                    <div class="sol-step">Difference = (-5) - (-13) = -5 + 13 = 8</div>
                    <div class="sol-step"><span class="ans-highlight">Pair of negative integers: (-5, -13)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) Write a negative integer and a positive integer whose sum is -5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take negative integer -25 and positive integer 20.</div>
                    <div class="sol-step">Sum = (-25) + 20 = -5</div>
                    <div class="sol-step"><span class="ans-highlight">Negative integer = -25, Positive integer = 20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) Write a negative integer and a positive integer whose difference is -3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let us take negative integer -2 and positive integer 1.</div>
                    <div class="sol-step">Difference = (-2) - (1) = -2 - 1 = -3</div>
                    <div class="sol-step"><span class="ans-highlight">Negative integer = -2, Positive integer = 1</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. In a quiz, team A scored -40, 10, 0 and team B scored 10, 0, -40 in three successive rounds. Which team scored more? Can we say that we can add integers in any order?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total score of Team A = (-40) + 10 + 0 = -30</div>
                    <div class="sol-step">Total score of Team B = 10 + 0 + (-40) = 10 - 40 = -30</div>
                    <div class="sol-step">Since both scores are equal (-30), <span class="ans-highlight">both teams scored equal marks.</span></div>
                    <div class="sol-step"><span class="ans-highlight">Yes, we can say that we can add integers in any order (Commutative Property of Addition).</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Fill in the blanks to make the following statements true:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) (-5) + (-8) = (-8) + (.......)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Commutative Property of Addition: a + b = b + a</div>
                    <div class="sol-step">Here, a = -5 and b = -8</div>
                    <div class="sol-step"><span class="ans-highlight">Missing value = -5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) -53 + ....... = -53</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Additive Identity Property: a + 0 = a</div>
                    <div class="sol-step"><span class="ans-highlight">Missing value = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iii) 17 + ....... = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Additive Inverse Property: a + (-a) = 0</div>
                    <div class="sol-step">17 + (-17) = 0</div>
                    <div class="sol-step"><span class="ans-highlight">Missing value = -17</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iv) [13 + (-12)] + (......) = 13 + [(-12) + (-7)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Associative Property of Addition: (a + b) + c = a + (b + c)</div>
                    <div class="sol-step">Here, a = 13, b = -12, c = -7</div>
                    <div class="sol-step"><span class="ans-highlight">Missing value = -7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(v) (-4) + [15 + (-3)] = [-4 + 15] + .......</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Associative Property of Addition: a + (b + c) = (a + b) + c</div>
                    <div class="sol-step">Here, a = -4, b = 15, c = -3</div>
                    <div class="sol-step"><span class="ans-highlight">Missing value = -3</span></div>
                </div>
            </div>
        </div>
    `,
    "ex1-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF9800; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF9800; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find each of the following products:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) 3 × (-1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 × (-1) = -(3 × 1) = <span class="ans-highlight">-3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) (-1) × 225</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-1) × 225 = -(1 × 225) = <span class="ans-highlight">-225</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) (-21) × (-30)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-21) × (-30) = +(21 × 30) = <span class="ans-highlight">630</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) (-316) × (-1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-316) × (-1) = +(316 × 1) = <span class="ans-highlight">316</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) (-15) × 0 × (-18)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Any number multiplied by 0 gives 0.</div>
                    <div class="sol-step"><span class="ans-highlight">Product = 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(f) (-12) × (-11) × (10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [(-12) × (-11)] × 10</div>
                    <div class="sol-step">= 132 × 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 1320</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(g) 9 × (-3) × (-6)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 × [(-3) × (-6)]</div>
                    <div class="sol-step">= 9 × 18</div>
                    <div class="sol-step"><span class="ans-highlight">= 162</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(h) (-18) × (-5) × (-4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [(-18) × (-5)] × (-4)</div>
                    <div class="sol-step">= 90 × (-4)</div>
                    <div class="sol-step"><span class="ans-highlight">= -360</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(i) (-1) × (-2) × (-3) × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [(-1) × (-2)] × [(-3) × 4]</div>
                    <div class="sol-step">= 2 × (-12)</div>
                    <div class="sol-step"><span class="ans-highlight">= -24</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(j) (-3) × (-6) × (-2) × (-1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [(-3) × (-6)] × [(-2) × (-1)]</div>
                    <div class="sol-step">= 18 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 36</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Verify the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) 18 × [7 + (-3)] = [18 × 7] + [18 × (-3)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 18 × [7 - 3] = 18 × 4 = 72</div>
                    <div class="sol-step">RHS = [18 × 7] + [18 × (-3)] = 126 + (-54) = 126 - 54 = 72</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 72. Hence verified.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) (-21) × [(-4) + (-6)] = [(-21) × (-4)] + [(-21) × (-6)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = (-21) × [-4 - 6] = (-21) × (-10) = 210</div>
                    <div class="sol-step">RHS = [(-21) × (-4)] + [(-21) × (-6)] = 84 + 126 = 210</div>
                    <div class="sol-step"><span class="ans-highlight">LHS = RHS = 210. Hence verified.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Answer the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) For any integer a, what is (-1) × a equal to?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-1) × a = -a</div>
                    <div class="sol-step"><span class="ans-highlight">When multiplied by -1, we get the additive inverse of integer a, i.e., -a.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) Determine the integer whose product with (-1) is:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) -22: Let integer be x. x × (-1) = -22 ➔ <span class="ans-highlight">x = 22</span></div>
                    <div class="sol-step">• (b) 37: Let integer be x. x × (-1) = 37 ➔ <span class="ans-highlight">x = -37</span></div>
                    <div class="sol-step">• (c) 0: Let integer be x. x × (-1) = 0 ➔ <span class="ans-highlight">x = 0</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Starting from (-1) × 5, write various products showing some pattern to show (-1) × (-1) = 1.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The pattern of products is:</div>
                    <div class="sol-step">• (-1) × 5 = -5</div>
                    <div class="sol-step">• (-1) × 4 = -4 = -5 + 1</div>
                    <div class="sol-step">• (-1) × 3 = -3 = -4 + 1</div>
                    <div class="sol-step">• (-1) × 2 = -2 = -3 + 1</div>
                    <div class="sol-step">• (-1) × 1 = -1 = -2 + 1</div>
                    <div class="sol-step">• (-1) × 0 = 0 = -1 + 1</div>
                    <div class="sol-step">• (-1) × (-1) = 1 = 0 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">This pattern proves that the product of two negative integers is a positive integer.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find the product using suitable properties:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) 26 × (-48) + (-48) × (-36)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Distributive Property: a × b + a × c = a × (b + c)</div>
                    <div class="sol-step">Taking (-48) common:</div>
                    <div class="sol-step">= (-48) × [26 + (-36)]</div>
                    <div class="sol-step">= (-48) × [26 - 36]</div>
                    <div class="sol-step">= (-48) × (-10)</div>
                    <div class="sol-step"><span class="ans-highlight">= 480</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) 8 × 53 × (-125)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Commutative Property of Multiplication:</div>
                    <div class="sol-step">= [8 × (-125)] × 53</div>
                    <div class="sol-step">= (-1000) × 53</div>
                    <div class="sol-step"><span class="ans-highlight">= -53000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) 15 × (-25) × (-4) × (-10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rearranging terms:</div>
                    <div class="sol-step">= 15 × [(-25) × (-4)] × (-10)</div>
                    <div class="sol-step">= 15 × 100 × (-10)</div>
                    <div class="sol-step">= 1500 × (-10)</div>
                    <div class="sol-step"><span class="ans-highlight">= -15000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) (-41) × 102</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 102 as (100 + 2):</div>
                    <div class="sol-step">= (-41) × (100 + 2)</div>
                    <div class="sol-step">= (-41) × 100 + (-41) × 2</div>
                    <div class="sol-step">= -4100 - 82</div>
                    <div class="sol-step"><span class="ans-highlight">= -4182</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) 625 × (-35) + (-625) × 65</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 625 × (-35) + 625 × (-65)</div>
                    <div class="sol-step">Taking 625 common:</div>
                    <div class="sol-step">= 625 × [(-35) + (-65)]</div>
                    <div class="sol-step">= 625 × [-35 - 65]</div>
                    <div class="sol-step">= 625 × (-100)</div>
                    <div class="sol-step"><span class="ans-highlight">= -62500</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(f) 7 × (50 - 2)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">By Distributive Property:</div>
                    <div class="sol-step">= 7 × 50 - 7 × 2</div>
                    <div class="sol-step">= 350 - 14</div>
                    <div class="sol-step"><span class="ans-highlight">= 336</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(g) (-17) × (-29)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing -29 as (-30 + 1):</div>
                    <div class="sol-step">= (-17) × (-30 + 1)</div>
                    <div class="sol-step">= (-17) × (-30) + (-17) × 1</div>
                    <div class="sol-step">= 510 - 17</div>
                    <div class="sol-step"><span class="ans-highlight">= 493</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(h) (-57) × (-19) + 57</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 57 × 19 + 57 × 1</div>
                    <div class="sol-step">Taking 57 common:</div>
                    <div class="sol-step">= 57 × (19 + 1)</div>
                    <div class="sol-step">= 57 × 20</div>
                    <div class="sol-step"><span class="ans-highlight">= 1140</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. A certain freezing process requires that room temperature be lowered from 40°C at the rate of 5°C every hour. What will be the room temperature 10 hours after the process begins?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Initial room temperature = 40°C</div>
                    <div class="sol-step">Rate of temperature drop per hour = -5°C</div>
                    <div class="sol-step">Temperature change in 10 hours = 10 × (-5°C) = -50°C</div>
                    <div class="sol-step">Final room temperature = Initial temp + Change in temp</div>
                    <div class="sol-step">= 40°C + (-50°C)</div>
                    <div class="sol-step">= 40°C - 50°C</div>
                    <div class="sol-step"><span class="ans-highlight">Final room temperature = -10°C</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. In a class test containing 10 questions, 5 marks are awarded for every correct answer, (-2) marks for every incorrect answer and 0 for questions not attempted.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) Mohan gets four correct and six incorrect answers. What is his score?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 4 correct answers = 4 × 5 = 20</div>
                    <div class="sol-step">Marks for 6 incorrect answers = 6 × (-2) = -12</div>
                    <div class="sol-step">Total score = 20 + (-12) = 20 - 12</div>
                    <div class="sol-step"><span class="ans-highlight">Mohan's score = 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) Reshma gets five correct answers and five incorrect answers; what is her score?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 5 correct answers = 5 × 5 = 25</div>
                    <div class="sol-step">Marks for 5 incorrect answers = 5 × (-2) = -10</div>
                    <div class="sol-step">Total score = 25 + (-10) = 25 - 10</div>
                    <div class="sol-step"><span class="ans-highlight">Reshma's score = 15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(iii) Heena gets two correct and five incorrect answers out of seven questions she attempts. What is her score?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 2 correct answers = 2 × 5 = 10</div>
                    <div class="sol-step">Marks for 5 incorrect answers = 5 × (-2) = -10</div>
                    <div class="sol-step">Marks for unattempted questions (3) = 0</div>
                    <div class="sol-step">Total score = 10 + (-10) = 10 - 10</div>
                    <div class="sol-step"><span class="ans-highlight">Heena's score = 0</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. A cement company earns a profit of ₹ 8 per bag of white cement sold and a loss of ₹ 5 per bag of grey cement sold.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) The company sells 3,000 bags of white cement and 5,000 bags of grey cement in a month. What is its profit or loss?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Profit on 1 bag of white cement = +₹ 8</div>
                    <div class="sol-step">Total profit on 3000 white bags = 3000 × ₹ 8 = ₹ 24,000</div>
                    <div class="sol-step">Loss on 1 bag of grey cement = -₹ 5</div>
                    <div class="sol-step">Total loss on 5000 grey bags = 5000 × (-₹ 5) = -₹ 25,000</div>
                    <div class="sol-step">Total = ₹ 24,000 - ₹ 25,000 = -₹ 1,000</div>
                    <div class="sol-step"><span class="ans-highlight">Net result: Loss of ₹ 1,000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) What is the number of white cement bags it must sell to have neither profit nor loss, if the number of grey bags sold is 6,400 bags?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total loss on 6400 grey bags = 6400 × ₹ 5 = ₹ 32,000</div>
                    <div class="sol-step">For no profit no loss, Profit on white bags must equal Loss on grey bags = ₹ 32,000</div>
                    <div class="sol-step">Profit per white bag = ₹ 8</div>
                    <div class="sol-step">Number of white cement bags = 32000 / 8</div>
                    <div class="sol-step"><span class="ans-highlight">Number of white bags = 4,000 bags</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Replace the blank with an integer to make it a true statement:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) (-3) × ....... = 27</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Blank = 27 / (-3) = <span class="ans-highlight">-9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) 5 × ....... = -35</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Blank = (-35) / 5 = <span class="ans-highlight">-7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) ....... × (-8) = -56</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Blank = (-56) / (-8) = <span class="ans-highlight">7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) ....... × (-12) = 132</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Blank = 132 / (-12) = <span class="ans-highlight">-11</span></div>
                </div>
            </div>
        </div>
    `,
    "ex1-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF9800; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF9800; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Evaluate each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) (-30) ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-30) ÷ 10 = -(30 / 10) = <span class="ans-highlight">-3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) 50 ÷ (-5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">50 ÷ (-5) = -(50 / 5) = <span class="ans-highlight">-10</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) (-36) ÷ (-9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-36) ÷ (-9) = +(36 / 9) = <span class="ans-highlight">4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) (-49) ÷ (49)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-49) ÷ 49 = -(49 / 49) = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) 13 ÷ [(-2) + 1]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 13 ÷ [-1]</div>
                    <div class="sol-step"><span class="ans-highlight">= -13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(f) 0 ÷ (-12)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Zero divided by any non-zero integer is 0.</div>
                    <div class="sol-step"><span class="ans-highlight">= 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(g) (-31) ÷ [(-30) + (-1)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-31) ÷ [-30 - 1]</div>
                    <div class="sol-step">= (-31) ÷ (-31)</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(h) [(-36) ÷ 12] ÷ 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [-3] ÷ 3</div>
                    <div class="sol-step"><span class="ans-highlight">= -1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(i) [(-6) + 5] ÷ [(-2) + 1]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= [-1] ÷ [-1]</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Verify that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c) for each of the following values of a, b and c.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) a = 12, b = -4, c = 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a ÷ (b + c) = 12 ÷ (-4 + 2) = 12 ÷ (-2) = -6</div>
                    <div class="sol-step">RHS = (a ÷ b) + (a ÷ c) = (12 ÷ -4) + (12 ÷ 2) = -3 + 6 = 3</div>
                    <div class="sol-step">Since -6 ≠ 3, LHS ≠ RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence verified that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) a = -10, b = 1, c = 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a ÷ (b + c) = (-10) ÷ (1 + 1) = (-10) ÷ 2 = -5</div>
                    <div class="sol-step">RHS = (a ÷ b) + (a ÷ c) = ((-10) ÷ 1) + ((-10) ÷ 1) = -10 + (-10) = -20</div>
                    <div class="sol-step">Since -5 ≠ -20, LHS ≠ RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence verified that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Fill in the blanks:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) 369 ÷ ....... = 369</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">369 / 369 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) (-75) ÷ ....... = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-75) / (-1) = <span class="ans-highlight">75</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) (-206) ÷ ....... = 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-206) / 1 = <span class="ans-highlight">-206</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) -87 ÷ ....... = 87</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-87) / 87 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) ....... ÷ 1 = -87</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-87) × 1 = <span class="ans-highlight">-87</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(f) ....... ÷ 48 = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-1) × 48 = <span class="ans-highlight">-48</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(g) 20 ÷ ....... = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">20 / (-2) = <span class="ans-highlight">-10</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(h) ....... ÷ 4 = -3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-3) × 4 = <span class="ans-highlight">-12</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Write five pairs of integers (a, b) such that a ÷ b = -3. One such pair is (6, -2) because 6 ÷ (-2) = -3.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Five such pairs of integers are:</div>
                    <div class="sol-step">• Pair 1: <span class="ans-highlight">(15, -5)</span> because 15 ÷ (-5) = -3</div>
                    <div class="sol-step">• Pair 2: <span class="ans-highlight">(-15, 5)</span> because (-15) ÷ 5 = -3</div>
                    <div class="sol-step">• Pair 3: <span class="ans-highlight">(18, -6)</span> because 18 ÷ (-6) = -3</div>
                    <div class="sol-step">• Pair 4: <span class="ans-highlight">(-18, 6)</span> because (-18) ÷ 6 = -3</div>
                    <div class="sol-step">• Pair 5: <span class="ans-highlight">(21, -7)</span> because 21 ÷ (-7) = -3</div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time would the temperature be 8°C below zero? What would be the temperature at midnight?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Temperature at 12 noon = +10°C</div>
                    <div class="sol-step">Target temperature (8°C below zero) = -8°C</div>
                    <div class="sol-step">Total temperature decrease required = 10°C - (-8°C) = 18°C</div>
                    <div class="sol-step">Rate of temperature decrease = 2°C per hour</div>
                    <div class="sol-step">Time taken = 18 / 2 = 9 hours</div>
                    <div class="sol-step">Time = 12 noon + 9 hours = 9:00 PM</div>
                    <div class="sol-step"><span class="ans-highlight">At 9 PM, the temperature will be 8°C below zero.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">Temperature at midnight (12 AM):</b></div>
                    <div class="sol-step">Time from 12 noon to midnight = 12 hours</div>
                    <div class="sol-step">Total temperature decrease in 12 hours = 12 × 2°C = 24°C</div>
                    <div class="sol-step">Temperature at midnight = 10°C - 24°C</div>
                    <div class="sol-step"><span class="ans-highlight">Temperature at midnight = -14°C</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. In a class test, (+ 3) marks are given for every correct answer and (-2) marks are given for every incorrect answer and no marks for not attempting any question.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) Radhika scored 20 marks. If she has got 12 correct answers, how many questions has she attempted incorrectly?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 12 correct answers = 12 × 3 = 36</div>
                    <div class="sol-step">Radhika's total score = 20</div>
                    <div class="sol-step">Marks for incorrect answers = Total score - Correct marks</div>
                    <div class="sol-step">= 20 - 36 = -16</div>
                    <div class="sol-step">Marks for 1 incorrect answer = -2</div>
                    <div class="sol-step">Number of incorrect questions = (-16) / (-2)</div>
                    <div class="sol-step"><span class="ans-highlight">Number of incorrect questions = 8 questions</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) Mohini scored -5 marks in this test, though she got 7 correct answers. How many questions has she attempted incorrectly?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 7 correct answers = 7 × 3 = 21</div>
                    <div class="sol-step">Mohini's total score = -5</div>
                    <div class="sol-step">Marks for incorrect answers = Total score - Correct marks</div>
                    <div class="sol-step">= -5 - 21 = -26</div>
                    <div class="sol-step">Number of incorrect questions = (-26) / (-2)</div>
                    <div class="sol-step"><span class="ans-highlight">Number of incorrect questions = 13 questions</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. An elevator descends into a mine shaft at the rate of 6 m/min. If the descent starts from 10 m above the ground level, how long will it take to reach - 350 m?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Initial position of elevator = +10 m</div>
                    <div class="sol-step">Final position of elevator = -350 m</div>
                    <div class="sol-step">Total distance to descend = 10 m - (-350 m) = 10 + 350 = 360 m</div>
                    <div class="sol-step">Speed of elevator = 6 m/min</div>
                    <div class="sol-step">Time taken = Distance / Speed</div>
                    <div class="sol-step">= 360 / 6</div>
                    <div class="sol-step">= 60 minutes</div>
                    <div class="sol-step"><span class="ans-highlight">Time taken = 1 hour (or 60 minutes)</span></div>
                </div>
            </div>
        </div>
    `,
  },
};
'''

target_path = os.path.join(os.path.dirname(__file__), "data", "content", "c7-math-1.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully wrote c7-math-1.ts!")
