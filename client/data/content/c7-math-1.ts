import { ChapterContent } from "../types";

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
    { name: "Distributive Property", formula: "a \\times (b + c) = (a \\times b) + (a \\times c)" },
    { name: "Commutative Property", formula: "a + b = b + a \\text{ and } a \\times b = b \\times a" },
    { name: "Associative Property", formula: "(a + b) + c = a + (b + c) \\text{ and } (a \\times b) \\times c = a \\times (b \\times c)" },
  ],
  crux: [],
  exercises: [
    { id: "ex1-1", name: "Exercise 1.1", questions: [] },
    { id: "ex1-2", name: "Exercise 1.2", questions: [] },
    { id: "ex1-3", name: "Exercise 1.3", questions: [] },
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
                <div class="question-header">3. In a Mathematics quiz, team A scored -40, 10, 0 and team B scored 10, 0, -40 in three successive rounds. Which team scored more? Can we say that we can add integers in any order?</div>
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
                <div class="question-header">4. Find the integer whose product with (-1) is:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) -12</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the required integer be x.</div>
                    <div class="sol-step">x × (-1) = -12</div>
                    <div class="sol-step">-x = -12</div>
                    <div class="sol-step"><span class="ans-highlight">x = 12</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the required integer be x.</div>
                    <div class="sol-step">x × (-1) = 0</div>
                    <div class="sol-step"><span class="ans-highlight">x = 0</span> (Since 0 multiplied by any number is 0)</div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) 131</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let the required integer be x.</div>
                    <div class="sol-step">x × (-1) = 131</div>
                    <div class="sol-step">-x = 131</div>
                    <div class="sol-step"><span class="ans-highlight">x = -131</span></div>
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
                <div class="question-header">1. Evaluate each of following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) (-30) ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-30) ÷ 10 = -(30 / 10) = <span class="ans-highlight">-3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) 25 ÷ (-5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">25 ÷ (-5) = -(25 / 5) = <span class="ans-highlight">-5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) (-36) ÷ (-9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-36) ÷ (-9) = +(36 / 9) = <span class="ans-highlight">4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) (-49) ÷ (49)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-49) ÷ 49 = -(49 / 49) = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) 13 ÷ [(-2) + (-11)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 13 ÷ [-2 - 11]</div>
                    <div class="sol-step">= 13 ÷ [-13]</div>
                    <div class="sol-step"><span class="ans-highlight">= -1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(f) 0 ÷ (-13)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Zero divided by any non-zero integer is 0.</div>
                    <div class="sol-step"><span class="ans-highlight">= 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(g) (-32) ÷ [(-15) + (13)]</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-32) ÷ [-15 + 13]</div>
                    <div class="sol-step">= (-32) ÷ [-2]</div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Verify that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c) for each of the following values of a, b and c.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) a = 12, b = -6, c = 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a ÷ (b + c) = 12 ÷ (-6 + 4) = 12 ÷ (-2) = -6</div>
                    <div class="sol-step">RHS = (a ÷ b) + (a ÷ c) = (12 ÷ -6) + (12 ÷ 4) = -2 + 3 = 1</div>
                    <div class="sol-step">Since -6 ≠ 1, LHS ≠ RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence verified that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) a = (-10), b = 1, c = 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = a ÷ (b + c) = (-10) ÷ (1 + 1) = (-10) ÷ 2 = -5</div>
                    <div class="sol-step">RHS = (a ÷ b) + (a ÷ c) = ((-10) ÷ 1) + ((-10) ÷ 1) = -10 + (-10) = -20</div>
                    <div class="sol-step">Since -5 ≠ -20, LHS ≠ RHS.</div>
                    <div class="sol-step"><span class="ans-highlight">Hence verified that a ÷ (b + c) ≠ (a ÷ b) + (a ÷ c).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Fill in the blank:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(a) 369 ÷ ( ) = 369</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">369 / 369 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(b) (-65) ÷ ( ) = 13</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-65) / 13 = <span class="ans-highlight">-5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(c) -91 ÷ ( ) = -7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-91) / (-7) = <span class="ans-highlight">13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(d) -84 ÷ ( ) = 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">(-84) / 1 = <span class="ans-highlight">-84</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(e) 64 ÷ ( ) = -16</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">64 / (-16) = <span class="ans-highlight">-4</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Write five pairs of integers (a, b) such that a ÷ b = -3. One such pair is (6, -2) because 6 ÷ -2 = -3.</div>
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
                <div class="question-header">5. The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time would the temperature be 8°C below zero? What would be the temperature at mid-night?</div>
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
                <div class="question-header">6. In a class test (+3) marks are given for every correct answer and (-2) marks given for every incorrect answer and no marks for not attempting any question.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF9800;">(i) Suraiya scored 20 marks. If she has got 12 correct answers, how many questions has she attempted incorrectly?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 12 correct answers = 12 × 3 = 36</div>
                    <div class="sol-step">Suraiya's total score = 20</div>
                    <div class="sol-step">Marks for incorrect answers = Total score - Correct marks</div>
                    <div class="sol-step">= 20 - 36 = -16</div>
                    <div class="sol-step">Marks for 1 incorrect answer = -2</div>
                    <div class="sol-step">Number of incorrect questions = (-16) / (-2)</div>
                    <div class="sol-step"><span class="ans-highlight">Number of incorrect questions = 8 questions</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF9800;">(ii) Raziya scores - 5 marks in this test, though she has got 7 correct answers. How many questions has she attempted incorrectly?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Marks for 7 correct answers = 7 × 3 = 21</div>
                    <div class="sol-step">Raziya's total score = -5</div>
                    <div class="sol-step">Marks for incorrect answers = Total score - Correct marks</div>
                    <div class="sol-step">= -5 - 21 = -26</div>
                    <div class="sol-step">Number of incorrect questions = (-26) / (-2)</div>
                    <div class="sol-step"><span class="ans-highlight">Number of incorrect questions = 13 questions</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. An elevator descends into a mine shaft at the rate of 6 m/min. If the descent starts from 10 m above the ground level, how long will it take to reach - 350 m.</div>
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
  mcqs: [
  {
    "id": "c7m1-mcq-1",
    "question": "What is the sum of (-5) + 5?",
    "options": [
      "0",
      "10",
      "-10",
      "5"
    ],
    "correctAnswer": "a",
    "explanation": "Adding an integer and its additive inverse always equals 0: (-5) + 5 = 0."
  },
  {
    "id": "c7m1-mcq-2",
    "question": "What is the additive inverse of -8?",
    "options": [
      "-8",
      "8",
      "0",
      "1"
    ],
    "correctAnswer": "b",
    "explanation": "The additive inverse of a negative integer is its positive value: -(-8) = 8."
  },
  {
    "id": "c7m1-mcq-3",
    "question": "What is the product of (-4) × (-3)?",
    "options": [
      "-12",
      "12",
      "-7",
      "7"
    ],
    "correctAnswer": "b",
    "explanation": "Multiplying two negative integers gives a positive result: (-4) × (-3) = +12."
  },
  {
    "id": "c7m1-mcq-4",
    "question": "What is (-15) ÷ 3?",
    "options": [
      "5",
      "-5",
      "3",
      "-3"
    ],
    "correctAnswer": "b",
    "explanation": "Dividing a negative number by a positive number gives a negative result: (-15) ÷ 3 = -5."
  },
  {
    "id": "c7m1-mcq-5",
    "question": "What is the value of 0 × (-9)?",
    "options": [
      "-9",
      "9",
      "0",
      "1"
    ],
    "correctAnswer": "c",
    "explanation": "Any integer multiplied by 0 is always equal to 0."
  },
  {
    "id": "c7m1-mcq-6",
    "question": "Which integer is neither positive nor negative?",
    "options": [
      "1",
      "-1",
      "0",
      "10"
    ],
    "correctAnswer": "c",
    "explanation": "Zero (0) is a neutral integer. It is neither positive nor negative."
  },
  {
    "id": "c7m1-mcq-7",
    "question": "What is the result of (-1) × (-1) × (-1)?",
    "options": [
      "1",
      "-1",
      "3",
      "-3"
    ],
    "correctAnswer": "b",
    "explanation": "An odd number of negative factors gives a negative result: (-1) × (-1) × (-1) = -1."
  },
  {
    "id": "c7m1-mcq-8",
    "question": "On a number line, where do negative integers lie relative to zero?",
    "options": [
      "To the right of 0",
      "To the left of 0",
      "Above 0",
      "Below 0"
    ],
    "correctAnswer": "b",
    "explanation": "On a horizontal number line, negative numbers are always placed to the left of 0."
  },
  {
    "id": "c7m1-mcq-9",
    "question": "What is the result of (-10) + (-5)?",
    "options": [
      "-15",
      "15",
      "-5",
      "5"
    ],
    "correctAnswer": "a",
    "explanation": "When adding two negative numbers, add their values and keep the negative sign: (-10) + (-5) = -15."
  },
  {
    "id": "c7m1-mcq-10",
    "question": "Which property states that a × b = b × a?",
    "options": [
      "Associative Property",
      "Commutative Property",
      "Distributive Property",
      "Closure Property"
    ],
    "correctAnswer": "b",
    "explanation": "The Commutative Property states that changing the order of multiplication does not change the result."
  }
]
};
