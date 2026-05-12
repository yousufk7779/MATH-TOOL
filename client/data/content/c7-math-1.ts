import { ChapterContent } from "../types";

export const c7Math1: ChapterContent = {
    id: "c7-math-1",
    number: 1,
    title: "Integers",
    isHtmlView: true,
    introduction: "We have already learnt about whole numbers and integers in Class VI. We know that integers form a bigger collection of numbers which contains whole numbers and negative numbers.",
    definitions: [],
    keyPoints: [
        "Integers are a collection of whole numbers and negative numbers.",
        "On a number line, positive integers are to the right of zero and negative integers are to the left.",
        "The absolute value of an integer is its distance from zero."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex1-1", name: "Exercise 1.1", questions: [] },
        { id: "ex1-2", name: "Exercise 1.2", questions: [] },
        { id: "ex1-3", name: "Exercise 1.3", questions: [] },
        { id: "ex1-4", name: "Exercise 1.4", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF9800; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(255, 152, 0, 0.05); border-left: 4px solid #FF9800; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #FF9800; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 1: Integers Overview</h2>
            <p class="content-text">In this chapter, we explore the world of integers beyond what we learned in Class VI.</p>
            <div class="point-box">
                <div class="point-item">Integers include positive numbers, negative numbers, and zero.</div>
                <div class="point-item">Multiplication and Division of integers follow specific sign rules.</div>
                <div class="point-item">BODMAS rule is applied for solving complex integer expressions.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex1-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { 
                background: rgba(255, 152, 0, 0.1); 
                color: #FF9800; 
                padding: 12px; 
                border-radius: 8px; 
                border-left: 6px solid #FF9800;
                font-weight: bold; 
                font-size: 1.1em; 
                margin-top: 30px; 
                margin-bottom: 15px; 
                line-height: 1.6; 
            }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; line-height: 1.8; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; font-size: 1.05em; }
            .highlight { color: #FFB74D; font-weight: bold; }
            .ans-highlight { color: #FF9800; font-weight: bold; font-size: 1.1em; }
            .svg-container { text-align: center; margin: 25px 0; background: #1E1E2E; padding: 20px; border-radius: 15px; border: 1px dashed #FF9800; }
            .subpart-title { color: #FFB74D; font-weight: bold; margin-top: 20px; margin-bottom: 8px; font-size: 1.05em; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <div class="question">1. Following number line shows the temperature in degree Celsius (°C) at different places on a particular day.</div>
            <div class="svg-container">
                <svg width="100%" height="120" viewBox="0 0 500 120">
                    <line x1="20" y1="70" x2="480" y2="70" stroke="#fff" stroke-width="2" />
                    <line x1="50" y1="65" x2="50" y2="75" stroke="#fff" /> <text x="45" y="95" fill="#fff" font-size="12">-10</text>
                    <line x1="125" y1="65" x2="125" y2="75" stroke="#fff" /> <text x="120" y="95" fill="#fff" font-size="12">-5</text>
                    <line x1="200" y1="65" x2="200" y2="75" stroke="#fff" /> <text x="195" y="95" fill="#fff" font-size="12">0</text>
                    <line x1="275" y1="65" x2="275" y2="75" stroke="#fff" /> <text x="270" y="95" fill="#fff" font-size="12">5</text>
                    <line x1="350" y1="65" x2="350" y2="75" stroke="#fff" /> <text x="345" y="95" fill="#fff" font-size="12">10</text>
                    <line x1="425" y1="65" x2="425" y2="75" stroke="#fff" /> <text x="420" y="95" fill="#fff" font-size="12">15</text>
                    <circle cx="80" cy="70" r="5" fill="#FF9800" /> <text x="50" y="55" fill="#FF9800" font-size="11">Lahulspiti</text>
                    <circle cx="170" cy="70" r="5" fill="#FF9800" /> <text x="150" y="55" fill="#FF9800" font-size="11">Srinagar</text>
                    <circle cx="275" cy="70" r="5" fill="#FF9800" /> <text x="260" y="55" fill="#FF9800" font-size="11">Shimla</text>
                    <circle cx="410" cy="70" r="5" fill="#FF9800" /> <text x="400" y="55" fill="#FF9800" font-size="11">Ooty</text>
                    <circle cx="475" cy="70" r="5" fill="#FF9800" /> <text x="440" y="55" fill="#FF9800" font-size="11">Bengaluru</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step"><b>(a) Temperature of the places marked on it:</b></div>
                <div class="sol-step">Lahulspiti: -8°C</div>
                <div class="sol-step">Srinagar: -2°C</div>
                <div class="sol-step">Shimla: 5°C</div>
                <div class="sol-step">Ooty: 14°C</div>
                <div class="sol-step">Bengaluru: 22°C</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) Temperature difference between the hottest and the coldest places:</b></div>
                <div class="sol-step">Temperature of the hottest place (Bengaluru) = 22°C</div>
                <div class="sol-step">Temperature of the coldest place (Lahulspiti) = -8°C</div>
                <div class="sol-step">Difference = 22°C - (-8°C)</div>
                <div class="sol-step">=> 22°C + 8°C</div>
                <div class="sol-step">=> <span class="ans-highlight">30°C</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) Temperature difference between Lahulspiti and Srinagar:</b></div>
                <div class="sol-step">Temperature of Srinagar = -2°C</div>
                <div class="sol-step">Temperature of Lahulspiti = -8°C</div>
                <div class="sol-step">Difference = -2°C - (-8°C)</div>
                <div class="sol-step">=> -2°C + 8°C</div>
                <div class="sol-step">=> <span class="ans-highlight">6°C</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) Can we say temperature of Srinagar and Shimla taken together is less than the temperature at Shimla? Is it also less than the temperature at Srinagar?</b></div>
                <div class="sol-step">Temperature of Srinagar = -2°C</div>
                <div class="sol-step">Temperature of Shimla = 5°C</div>
                <div class="sol-step">Temperature taken together = -2°C + 5°C = 3°C</div>
                <div class="sol-step">Is 3°C < 5°C (Shimla)? <span class="ans-highlight">Yes</span></div>
                <div class="sol-step">Is 3°C < -2°C (Srinagar)? <span class="ans-highlight">No</span></div>
            </div>

            <div class="question">2. In a quiz, positive marks are given for correct answers and negative marks are given for incorrect answers. If Jack’s scores in five successive rounds were 25, – 5, – 10, 15 and 10, what was his total at the end?</div>
            <div class="solution">
                <div class="sol-step">Jack's scores in five successive rounds: 25, -5, -10, 15, 10</div>
                <div class="sol-step">Total score = 25 + (-5) + (-10) + 15 + 10</div>
                <div class="sol-step">=> 25 - 5 - 10 + 15 + 10</div>
                <div class="sol-step">=> 20 - 10 + 15 + 10</div>
                <div class="sol-step">=> 10 + 15 + 10</div>
                <div class="sol-step">=> <span class="ans-highlight">35</span></div>
            </div>

            <div class="question">3. At Srinagar temperature was – 5°C on Monday and then it dropped by 2°C on Tuesday. What was the temperature of Srinagar on Tuesday? On Wednesday, it rose by 4°C. What was the temperature on this day?</div>
            <div class="solution">
                <div class="sol-step">Temperature on Monday = -5°C</div>
                <div class="sol-step">On Tuesday, temperature dropped by 2°C</div>
                <div class="sol-step">Temperature on Tuesday = -5°C - 2°C</div>
                <div class="sol-step">=> <span class="ans-highlight">-7°C</span></div>
                <div class="sol-step" style="margin-top: 10px;">On Wednesday, temperature rose by 4°C</div>
                <div class="sol-step">Temperature on Wednesday = -7°C + 4°C</div>
                <div class="sol-step">=> <span class="ans-highlight">-3°C</span></div>
            </div>

            <div class="question">4. A plane is flying at the height of 5000 m above the sea level. At a particular point, it is exactly above a submarine floating 1200 m below the sea level. What is the vertical distance between them?</div>
            <div class="solution">
                <div class="sol-step">Height of the plane above sea level = 5000 m</div>
                <div class="sol-step">Depth of the submarine below sea level = 1200 m</div>
                <div class="sol-step">Vertical distance between them = Height of plane - (Depth of submarine)</div>
                <div class="sol-step">=> 5000 m - (-1200 m)</div>
                <div class="sol-step">=> 5000 m + 1200 m</div>
                <div class="sol-step">=> <span class="ans-highlight">6200 m</span></div>
            </div>

            <div class="question">5. Mohan deposits ₹ 2,000 in his bank account and withdraws ₹ 1,642 from it, the next day. Find the balance in Mohan’s account after the withdrawal.</div>
            <div class="solution">
                <div class="sol-step">Amount deposited = ₹ 2,000</div>
                <div class="sol-step">Amount withdrawn = ₹ 1,642</div>
                <div class="sol-step">Balance = Amount deposited - Amount withdrawn</div>
                <div class="sol-step">=> ₹ 2000 - ₹ 1642</div>
                <div class="sol-step">=> <span class="ans-highlight">₹ 358</span></div>
            </div>

            <div class="question">6. Rita goes 20 km towards east from a point A to the point B. From B, she moves 30 km towards west along the same road. By which integer will you represent her final position from A?</div>
            <div class="solution">
                <div class="sol-step">Distance towards East = 20 km (Positive integer)</div>
                <div class="sol-step">Distance towards West = 30 km (Negative integer)</div>
                <div class="sol-step">Final position from A = 20 + (-30)</div>
                <div class="sol-step">=> 20 - 30</div>
                <div class="sol-step">=> <span class="ans-highlight">-10 km</span></div>
                <div class="sol-step">The negative sign shows that she is 10 km towards the West.</div>
            </div>

            <div class="question">10. A monkey jumps 3 steps down and 2 up. In (i) reaching water (9th step) and (ii) going back.</div>
            <div class="solution">
                <div class="sol-step"><b>(i) To reach the water level (9th step):</b></div>
                <div class="sol-step">The monkey jumps 3 steps down and then jumps back 2 steps up.</div>
                <div class="sol-step">Jump 1: 1 + 3 = 4th step</div>
                <div class="sol-step">Jump 2: 4 - 2 = 2nd step</div>
                <div class="sol-step">Jump 3: 2 + 3 = 5th step</div>
                <div class="sol-step">Jump 4: 5 - 2 = 3rd step</div>
                <div class="sol-step">Jump 5: 3 + 3 = 6th step</div>
                <div class="sol-step">Jump 6: 6 - 2 = 4th step</div>
                <div class="sol-step">Jump 7: 4 + 3 = 7th step</div>
                <div class="sol-step">Jump 8: 7 - 2 = 5th step</div>
                <div class="sol-step">Jump 9: 5 + 3 = 8th step</div>
                <div class="sol-step">Jump 10: 8 - 2 = 6th step</div>
                <div class="sol-step">Jump 11: 6 + 3 = 9th step (Water level reached!)</div>
                <div class="sol-step">Total jumps = <span class="ans-highlight">11</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) To go back to the top step (1st step):</b></div>
                <div class="sol-step">The monkey jumps 4 steps up and then jumps back 2 steps down.</div>
                <div class="sol-step">Jump 1: 9 - 4 = 5th step</div>
                <div class="sol-step">Jump 2: 5 + 2 = 7th step</div>
                <div class="sol-step">Jump 3: 7 - 4 = 3rd step</div>
                <div class="sol-step">Jump 4: 3 + 2 = 5th step</div>
                <div class="sol-step">Jump 5: 5 - 4 = 1st step (Top reached!)</div>
                <div class="sol-step">Total jumps = <span class="ans-highlight">5</span></div>
            </div>
        </div>
        `,
        "ex1-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { 
                background: rgba(255, 152, 0, 0.1); 
                color: #FF9800; 
                padding: 12px; 
                border-radius: 8px; 
                border-left: 6px solid #FF9800;
                font-weight: bold; 
                font-size: 1.1em; 
                margin-top: 30px; 
                margin-bottom: 15px; 
                line-height: 1.6; 
            }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; line-height: 1.8; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; font-size: 1.05em; }
            .highlight { color: #FFB74D; font-weight: bold; }
            .ans-highlight { color: #FF9800; font-weight: bold; font-size: 1.1em; }
        </style>
        <div class="container">
            <div class="question">1. Write down a pair of integers whose: (a) sum is – 7 (b) difference is – 10 (c) sum is 0.</div>
            <div class="solution">
                <div class="sol-step">(a) <span class="ans-highlight">-5 and -2</span> &rArr; (-5) + (-2) = -7</div>
                <div class="sol-step">(b) <span class="ans-highlight">-2 and 8</span> &rArr; (-2) - 8 = -10</div>
                <div class="sol-step">(c) <span class="ans-highlight">-5 and 5</span> &rArr; (-5) + 5 = 0</div>
            </div>

            <div class="question">2. (a) Write a pair of negative integers whose difference gives 8. (b) Write a negative integer and a positive integer whose sum is – 5.</div>
            <div class="solution">
                <div class="sol-step">(a) <span class="ans-highlight">-2 and -10</span> &rArr; (-2) - (-10) = 8</div>
                <div class="sol-step">(b) <span class="ans-highlight">-10 and 5</span> &rArr; (-10) + 5 = -5</div>
            </div>

            <div class="question">3. In a quiz, team A scored – 40, 10, 0 and team B scored 10, 0, – 40 in three successive rounds. Which team scored more? Can we say that we can add integers in any order?</div>
            <div class="solution">
                <div class="sol-step"><b>Total score of Team A:</b></div>
                <div class="sol-step">Scores: -40, 10, 0</div>
                <div class="sol-step">Total = -40 + 10 + 0</div>
                <div class="sol-step">=> <span class="ans-highlight">-30</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Total score of Team B:</b></div>
                <div class="sol-step">Scores: 10, 0, -40</div>
                <div class="sol-step">Total = 10 + 0 + (-40)</div>
                <div class="sol-step">=> 10 - 40</div>
                <div class="sol-step">=> <span class="ans-highlight">-30</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Conclusion:</b></div>
                <div class="sol-step">Since -30 = -30, <span class="ans-highlight">both teams scored same</span>.</div>
                <div class="sol-step"><span class="ans-highlight">Yes</span>, we can say that we can add integers in any order.</div>
            </div>

            <div class="question">4. Fill in the blanks to make the following statements true:</div>
            <div class="solution">
                <div class="sol-step">(i) (– 5) + (– 8) = (– 8) + (<span class="ans-highlight">– 5</span>)</div>
                <div class="sol-step">(ii) – 53 + <span class="ans-highlight">0</span> = – 53</div>
                <div class="sol-step">(iii) 17 + (<span class="ans-highlight">– 17</span>) = 0</div>
                <div class="sol-step">(iv) [13 + (– 12)] + (<span class="ans-highlight">– 7</span>) = 13 + [(– 12) + (– 7)]</div>
                <div class="sol-step">(v) (– 4) + [15 + (– 3)] = [(– 4) + 15] + (<span class="ans-highlight">– 3</span>)</div>
            </div>
        </div>
        `,
        "ex1-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { 
                background: rgba(255, 152, 0, 0.1); 
                color: #FF9800; 
                padding: 12px; 
                border-radius: 8px; 
                border-left: 6px solid #FF9800;
                font-weight: bold; 
                font-size: 1.1em; 
                margin-top: 30px; 
                margin-bottom: 15px; 
                line-height: 1.6; 
            }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; line-height: 1.8; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; font-size: 1.05em; }
            .highlight { color: #FFB74D; font-weight: bold; }
            .ans-highlight { color: #FF9800; font-weight: bold; font-size: 1.1em; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <div class="question">1. Find each of the following products: (a) 3 &times; (-1) (f) (-12) &times; (-11) &times; (10)</div>
            <div class="solution">
                <div class="sol-step">(a) 3 &times; (-1) = <span class="ans-highlight">-3</span></div>
                <div class="sol-step">(f) (-12) &times; (-11) &times; 10 = 132 &times; 10 = <span class="ans-highlight">1320</span></div>
            </div>

            <div class="question">2. Verify the following: 18 &times; [7 + (-3)] = [18 &times; 7] + [18 &times; (-3)]</div>
            <div class="solution">
                <div class="sol-step"><b>Verification: 18 &times; [7 + (-3)] = [18 &times; 7] + [18 &times; (-3)]</b></div>
                <div class="sol-step"><b>LHS (Left Hand Side):</b></div>
                <div class="sol-step">18 &times; [7 + (-3)]</div>
                <div class="sol-step">=> 18 &times; [7 - 3]</div>
                <div class="sol-step">=> 18 &times; 4</div>
                <div class="sol-step">=> <span class="ans-highlight">72</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>RHS (Right Hand Side):</b></div>
                <div class="sol-step">[18 &times; 7] + [18 &times; (-3)]</div>
                <div class="sol-step">=> 126 + (-54)</div>
                <div class="sol-step">=> 126 - 54</div>
                <div class="sol-step">=> <span class="ans-highlight">72</span></div>
                
                <div class="sol-step" style="margin-top: 15px;">Since LHS = RHS, the equation is <span class="ans-highlight">Verified!</span></div>
            </div>

            <div class="question">3. (i) For any integer a, what is (-1) &times; a equal to?</div>
            <div class="solution">
                <div class="sol-step">Result = <span class="ans-highlight">-a</span></div>
            </div>

            <div class="question">5. Find the product, using suitable properties: (a) 26 &times; (-48) + (-48) &times; (-36)</div>
            <div class="solution">
                <div class="sol-step"><b>26 &times; (-48) + (-48) &times; (-36)</b></div>
                <div class="sol-step">Using Distributive Property: a &times; b + a &times; c = a &times; (b + c)</div>
                <div class="sol-step">Here, a = -48, b = 26, c = -36</div>
                <div class="sol-step">=> (-48) &times; [26 + (-36)]</div>
                <div class="sol-step">=> (-48) &times; [26 - 36]</div>
                <div class="sol-step">=> (-48) &times; (-10)</div>
                <div class="sol-step">=> <span class="ans-highlight">480</span></div>
            </div>

            <div class="question">6. A certain freezing process requires that room temperature be lowered from 40°C at the rate of 5°C every hour. What will be the room temperature 10 hours after the process begins?</div>
            <div class="solution">
                <div class="sol-step">Initial temperature = 40°C</div>
                <div class="sol-step">Rate of change in temperature = -5°C per hour</div>
                <div class="sol-step">Temperature change after 10 hours = 10 &times; (-5°C)</div>
                <div class="sol-step">=> -50°C</div>
                <div class="sol-step">Final temperature = Initial temperature + Change in temperature</div>
                <div class="sol-step">=> 40°C + (-50°C)</div>
                <div class="sol-step">=> 40°C - 50°C</div>
                <div class="sol-step">=> <span class="ans-highlight">-10°C</span></div>
            </div>

            <div class="question">8. Cement Bags: White bag profit ₹ 8, Grey bag loss ₹ 5. (b) Find white bags for no profit/loss if 6400 grey bags sold.</div>
            <div class="solution">
                <div class="sol-step">Number of grey bags sold = 6400</div>
                <div class="sol-step">Loss on one grey bag = ₹ 5</div>
                <div class="sol-step">Total loss = 6400 &times; ₹ 5</div>
                <div class="sol-step">=> ₹ 32,000</div>
                <div class="sol-step">Profit on one white bag = ₹ 8</div>
                <div class="sol-step">For no profit and no loss, Profit = Loss</div>
                <div class="sol-step">Number of white bags needed = Total loss / Profit per white bag</div>
                <div class="sol-step">=> 32000 / 8</div>
                <div class="sol-step">=> <span class="ans-highlight">4000 bags</span></div>
            </div>

            <div class="question">9. Replace the blank with an integer:</div>
            <div class="solution">
                <div class="sol-step">(a) (-3) &times; <span class="ans-highlight">-9</span> = 27</div>
                <div class="sol-step">(b) 5 &times; <span class="ans-highlight">-7</span> = -35</div>
            </div>
        </div>
        `,
        "ex1-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { 
                background: rgba(255, 152, 0, 0.1); 
                color: #FF9800; 
                padding: 12px; 
                border-radius: 8px; 
                border-left: 6px solid #FF9800;
                font-weight: bold; 
                font-size: 1.1em; 
                margin-top: 30px; 
                margin-bottom: 15px; 
                line-height: 1.6; 
            }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF9800; margin-bottom: 25px; line-height: 1.8; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; font-size: 1.05em; }
            .highlight { color: #FFB74D; font-weight: bold; }
            .ans-highlight { color: #FF9800; font-weight: bold; font-size: 1.1em; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <div class="question">1. Evaluate each of the following: (a) (–30) &divide; 10 (i) [(– 6) + 5] &divide; [(– 2) + 1]</div>
            <div class="solution">
                <div class="sol-step">(a) (–30) &divide; 10 = <span class="ans-highlight">-3</span></div>
                <div class="sol-step">(i) [-1] &divide; [-1] = <span class="ans-highlight">1</span></div>
            </div>

            <div class="question">2. Verify that a &divide; (b + c) &ne; (a &divide; b) + (a &divide; c) for: a = 12, b = – 4, c = 2.</div>
            <div class="solution">
                <div class="sol-step"><b>Verification: a &divide; (b + c) &ne; (a &divide; b) + (a &divide; c)</b></div>
                <div class="sol-step">Given: a = 12, b = – 4, c = 2</div>
                
                <div class="sol-step" style="margin-top: 10px;"><b>LHS (Left Hand Side):</b></div>
                <div class="sol-step">a &divide; (b + c)</div>
                <div class="sol-step">=> 12 &divide; (-4 + 2)</div>
                <div class="sol-step">=> 12 &divide; (-2)</div>
                <div class="sol-step">=> <span class="ans-highlight">-6</span></div>
                
                <div class="sol-step" style="margin-top: 10px;"><b>RHS (Right Hand Side):</b></div>
                <div class="sol-step">(a &divide; b) + (a &divide; c)</div>
                <div class="sol-step">=> (12 &divide; -4) + (12 &divide; 2)</div>
                <div class="sol-step">=> (-3) + 6</div>
                <div class="sol-step">=> <span class="ans-highlight">3</span></div>
                
                <div class="sol-step" style="margin-top: 10px;">Since LHS (-6) &ne; RHS (3), the statement is <span class="ans-highlight">Verified!</span></div>
            </div>

            <div class="question">3. Fill in the blanks:</div>
            <div class="solution">
                <div class="sol-step">(a) 369 &divide; <span class="ans-highlight">1</span> = 369</div>
                <div class="sol-step">(b) (– 75) &divide; <span class="ans-highlight">75</span> = – 1</div>
                <div class="sol-step">(c) (– 206) &divide; <span class="ans-highlight">-206</span> = 1</div>
                <div class="sol-step">(d) – 87 &divide; <span class="ans-highlight">-1</span> = 87</div>
                <div class="sol-step">(e) <span class="ans-highlight">-87</span> &divide; 1 = – 87</div>
                <div class="sol-step">(f) <span class="ans-highlight">-48</span> &divide; 48 = – 1</div>
                <div class="sol-step">(g) 20 &divide; <span class="ans-highlight">-10</span> = – 2</div>
                <div class="sol-step">(h) <span class="ans-highlight">-12</span> &divide; (4) = – 3</div>
            </div>

            <div class="question">4. Write five pairs of integers (a, b) such that a &divide; b = – 3. One such pair is (6, – 2) because 6 &divide; (– 2) = (– 3).</div>
            <div class="solution">
                <div class="sol-step">Pairs: <span class="ans-highlight">(-6, 2), (9, -3), (-9, 3), (12, -4), (-12, 4)</span></div>
            </div>

            <div class="question">5. The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time would the temperature be 8°C below zero? What would be the temperature at mid-night?</div>
            <div class="solution">
                <div class="sol-step">Temperature at 12 noon = 10°C</div>
                <div class="sol-step">Required temperature = 8°C below zero = -8°C</div>
                <div class="sol-step">Total decrease in temperature = 10°C - (-8°C)</div>
                <div class="sol-step">=> 10°C + 8°C = 18°C</div>
                <div class="sol-step">Rate of decrease = 2°C per hour</div>
                <div class="sol-step">Time taken = Total decrease / Rate of decrease</div>
                <div class="sol-step">=> 18 / 2 = 9 hours</div>
                <div class="sol-step">Time after 9 hours from 12 noon = <span class="ans-highlight">9 PM</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Temperature at midnight (12 hours after 12 noon):</b></div>
                <div class="sol-step">Temperature change in 12 hours = 12 &times; (-2°C) = -24°C</div>
                <div class="sol-step">Temperature at midnight = Initial temperature + Change</div>
                <div class="sol-step">=> 10°C + (-24°C)</div>
                <div class="sol-step">=> <span class="ans-highlight">-14°C</span></div>
            </div>

            <div class="question">6. Class Test: (+3) for Correct, (-2) for Incorrect. (i) Radhika scored 20 marks with 12 correct. Find incorrect questions.</div>
            <div class="solution">
                <div class="sol-step">Marks given for 1 correct answer = +3</div>
                <div class="sol-step">Marks given for 12 correct answers = 12 &times; 3 = 36</div>
                <div class="sol-step">Total score obtained by Radhika = 20</div>
                <div class="sol-step">Marks obtained for incorrect answers = Total score - Marks for correct answers</div>
                <div class="sol-step">=> 20 - 36 = -16</div>
                <div class="sol-step">Marks given for 1 incorrect answer = -2</div>
                <div class="sol-step">Number of incorrect answers = -16 / -2</div>
                <div class="sol-step">=> <span class="ans-highlight">8 questions</span></div>
            </div>

            <div class="question">7. An elevator descends into a mine shaft at the rate of 6 m/min. If the descent starts from 10 m above ground level, how long will it take to reach – 350 m?</div>
            <div class="solution">
                <div class="sol-step">Initial position = 10 m (Above ground)</div>
                <div class="sol-step">Final position = -350 m (Below ground)</div>
                <div class="sol-step">Total distance to descend = 10 - (-350)</div>
                <div class="sol-step">=> 10 + 350 = 360 m</div>
                <div class="sol-step">Rate of descent = 6 m/min</div>
                <div class="sol-step">Time taken = Total distance / Rate of descent</div>
                <div class="sol-step">=> 360 / 6</div>
                <div class="sol-step">=> 60 minutes</div>
                <div class="sol-step">=> <span class="ans-highlight">1 hour</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "The sum of two negative integers is always:", options: ["Positive", "Negative", "Zero", "None"], correctAnswer: "B" },
        { id: "m2", question: "What is -5 + 5 equal to?", options: ["10", "-10", "0", "1"], correctAnswer: "C" },
        { id: "m3", question: "The additive inverse of -8 is:", options: ["-8", "8", "0", "1"], correctAnswer: "B" },
        { id: "m4", question: "Which is the greatest negative integer?", options: ["-100", "-1", "0", "-10"], correctAnswer: "B" },
        { id: "m5", question: "The successor of -1 is:", options: ["-2", "0", "1", "None"], correctAnswer: "B" },
        { id: "m6", question: "What is -3 x (-4) equal to?", options: ["-12", "12", "7", "-7"], correctAnswer: "B" },
        { id: "m7", question: "What is -15 / 3 equal to?", options: ["5", "-5", "3", "-3"], correctAnswer: "B" },
        { id: "m8", question: "The value of |-10| is:", options: ["-10", "10", "0", "1"], correctAnswer: "B" },
        { id: "m9", question: "The predecessor of -5 is:", options: ["-4", "-6", "5", "6"], correctAnswer: "B" },
        { id: "m10", question: "Which of the following is neither positive nor negative?", options: ["1", "-1", "0", "10"], correctAnswer: "C" }
    ],
    summary: []
};
