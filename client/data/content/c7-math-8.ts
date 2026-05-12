import { ChapterContent } from "../types";

export const c7Math8: ChapterContent = {
    id: "c7-math-8",
    number: 8,
    title: "Rational Numbers",
    isHtmlView: true,
    introduction: "A rational number is any number that can be expressed as a fraction p/q, where p and q are integers and q is not zero. They include integers, fractions, and terminating decimals.",
    definitions: [
        { term: "Rational Number", definition: "A number that can be written in the form p/q where q ≠ 0." },
        { term: "Positive Rational Number", definition: "A rational number where both numerator and denominator have the same sign." },
        { term: "Negative Rational Number", definition: "A rational number where numerator and denominator have opposite signs." }
    ],
    keyPoints: [
        "Every integer is a rational number.",
        "A rational number is in standard form if the denominator is positive and there are no common factors between p and q.",
        "Equivalent rational numbers are obtained by multiplying or dividing p and q by the same non-zero integer."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex8-1", name: "Exercise 8.1", questions: [] },
        { id: "ex8-2", name: "Exercise 8.2", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF6D00; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(255, 109, 0, 0.05); border-left: 4px solid #FF6D00; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #FF6D00; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 8: Rational Numbers Overview</h2>
            <p class="content-text">Extend your number sense beyond integers to the world of rational numbers and their properties.</p>
            <div class="point-box">
                <div class="point-item">p/q where q ≠ 0.</div>
                <div class="point-item">Standard form has a positive denominator.</div>
                <div class="point-item">Operate on rational numbers just like fractions.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex8-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 109, 0, 0.1); color: #FFCC80; padding: 12px; border-radius: 8px; border-left: 6px solid #FF6D00; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF6D00; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF6D00; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(255, 109, 0, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. List five rational numbers between: <br/>(i) -1 and 0 <br/>(ii) -2 and -1 <br/>(iii) -4/5 and -2/3</div>
            <div class="solution">
                <div class="sol-step"><b>(i) -1 and 0:</b></div>
                <div class="sol-step">=> -1 = -6/6, 0 = 0/6</div>
                <div class="sol-step">Result: <span class="ans-highlight">-5/6, -4/6, -3/6, -2/6, -1/6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) -2 and -1:</b></div>
                <div class="sol-step">=> -2 = -12/6, -1 = -6/6</div>
                <div class="sol-step">Result: <span class="ans-highlight">-11/6, -10/6, -9/6, -8/6, -7/6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) -4/5 and -2/3:</b></div>
                <div class="sol-step">=> LCM of 5 and 3 is 15. -12/15 and -10/15.</div>
                <div class="sol-step">=> Multiply by 3: -36/45 and -30/45.</div>
                <div class="sol-step">Result: <span class="ans-highlight">-35/45, -34/45, -33/45, -32/45, -31/45</span></div>
            </div>

            <div class="question">2. Write four more rational numbers in each of the following patterns: <br/>(i) -3/5, -6/10, -9/15, -12/20... <br/>(ii) -1/4, -2/8, -3/12...</div>
            <div class="solution">
                <div class="sol-step"><b>(i) -3/5, -6/10, -9/15, -12/20...</b></div>
                <div class="sol-step">=> Numerator decreases by 3, denominator increases by 5.</div>
                <div class="sol-step">Result: <span class="ans-highlight">-15/25, -18/30, -21/35, -24/40</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) -1/4, -2/8, -3/12...</b></div>
                <div class="sol-step">=> Pattern is (n &times; -1) / (n &times; 4).</div>
                <div class="sol-step">Result: <span class="ans-highlight">-4/16, -5/20, -6/24, -7/28</span></div>
            </div>

            <div class="question">4. Draw the number line and represent the following rational numbers on it: <br/>(i) 3/4 (ii) -5/8</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 3/4:</b></div>
                <div class="diagram-container">
                    <svg width="250" height="60" viewBox="0 0 250 60">
                        <line x1="10" y1="30" x2="240" y2="30" stroke="#fff" stroke-width="2" />
                        <line x1="10" y1="25" x2="10" y2="35" stroke="#fff" /> <!-- -1 -->
                        <line x1="125" y1="20" x2="125" y2="40" stroke="#fff" /> <!-- 0 -->
                        <line x1="225" y1="20" x2="225" y2="40" stroke="#fff" /> <!-- 1 -->
                        <circle cx="200" cy="30" r="5" fill="#FF6D00" /> <!-- 3/4 -->
                        <text x="120" y="55" fill="#fff" font-size="12">0</text>
                        <text x="220" y="55" fill="#fff" font-size="12">1</text>
                        <text x="190" y="15" fill="#FF6D00" font-size="12">3/4</text>
                    </svg>
                </div>

                <div class="sol-step" style="margin-top: 25px;"><b>(ii) -5/8:</b></div>
                <div class="diagram-container">
                    <svg width="250" height="60" viewBox="0 0 250 60">
                        <line x1="10" y1="30" x2="240" y2="30" stroke="#fff" stroke-width="2" />
                        <line x1="25" y1="20" x2="25" y2="40" stroke="#fff" /> <!-- -1 -->
                        <line x1="125" y1="20" x2="125" y2="40" stroke="#fff" /> <!-- 0 -->
                        <circle cx="62.5" cy="30" r="5" fill="#FF6D00" /> <!-- -5/8 approx -->
                        <text x="20" y="55" fill="#fff" font-size="12">-1</text>
                        <text x="120" y="55" fill="#fff" font-size="12">0</text>
                        <text x="45" y="15" fill="#FF6D00" font-size="12">-5/8</text>
                    </svg>
                </div>
            </div>

            <div class="question">5. Name the rational numbers represented by P, Q, R and S on the number line where TR = RS = SU and AP = PQ = QB.</div>
            <div class="diagram-container">
                <svg width="300" height="80" viewBox="0 0 300 80">
                    <line x1="10" y1="40" x2="290" y2="40" stroke="#fff" stroke-width="2" />
                    <line x1="50" y1="35" x2="50" y2="45" stroke="#fff" /> <text x="45" y="60" fill="#fff" font-size="10">-2</text> <text x="45" y="30" fill="#fff" font-size="10">U</text>
                    <line x1="75" y1="35" x2="75" y2="45" stroke="#FF6D00" /> <text x="70" y="30" fill="#FF6D00" font-size="10">S</text>
                    <line x1="100" y1="35" x2="100" y2="45" stroke="#FF6D00" /> <text x="95" y="30" fill="#FF6D00" font-size="10">R</text>
                    <line x1="125" y1="35" x2="125" y2="45" stroke="#fff" /> <text x="120" y="60" fill="#fff" font-size="10">-1</text> <text x="120" y="30" fill="#fff" font-size="10">T</text>
                    <line x1="150" y1="35" x2="150" y2="45" stroke="#fff" /> <text x="145" y="60" fill="#fff" font-size="10">0</text>
                    <line x1="200" y1="35" x2="200" y2="45" stroke="#fff" /> <text x="195" y="60" fill="#fff" font-size="10">2</text> <text x="195" y="30" fill="#fff" font-size="10">A</text>
                    <line x1="216.6" y1="35" x2="216.6" y2="45" stroke="#FF6D00" /> <text x="211" y="30" fill="#FF6D00" font-size="10">P</text>
                    <line x1="233.3" y1="35" x2="233.3" y2="45" stroke="#FF6D00" /> <text x="228" y="30" fill="#FF6D00" font-size="10">Q</text>
                    <line x1="250" y1="35" x2="250" y2="45" stroke="#fff" /> <text x="245" y="60" fill="#fff" font-size="10">3</text> <text x="245" y="30" fill="#fff" font-size="10">B</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step">=> Between 2 and 3, there are 3 parts. P is at 2 + 1/3 = 7/3. Q is at 2 + 2/3 = 8/3.</div>
                <div class="sol-step">=> Between -1 and -2, there are 3 parts. R is at -1 - 1/3 = -4/3. S is at -1 - 2/3 = -5/3.</div>
                <div class="sol-step">Result: <span class="ans-highlight">P = 7/3, Q = 8/3, R = -4/3, S = -5/3</span></div>
            </div>

            <div class="question">7. Rewrite the following rational numbers in the simplest form: <br/>(i) -8/6 (ii) 25/45 (iii) -44/72 (iv) -8/10</div>
            <div class="solution">
                <div class="sol-step">(i) -8/6 = <span class="ans-highlight">-4/3</span></div>
                <div class="sol-step">(ii) 25/45 = <span class="ans-highlight">5/9</span></div>
                <div class="sol-step">(iii) -44/72 = <span class="ans-highlight">-11/18</span></div>
                <div class="sol-step">(iv) -8/10 = <span class="ans-highlight">-4/5</span></div>
            </div>

            <div class="question">8. Fill in the boxes with correct symbol out of >, <, and =: <br/>(i) -5/7 [ ] 2/3 <br/>(ii) -4/5 [ ] -5/7 <br/>(iii) -7/8 [ ] 14/-16</div>
            <div class="solution">
                <div class="sol-step">(i) -5/7 < 2/3 (Negative is always less than positive)</div>
                <div class="sol-step">(ii) -4/5 = -28/35, -5/7 = -25/35. Since -28 < -25, -4/5 < -5/7</div>
                <div class="sol-step">(iii) 14/-16 = -7/8. So -7/8 = 14/-16</div>
                <div class="sol-step">Result: <span class="ans-highlight">(i) <, (ii) <, (iii) =</span></div>
            </div>

            <div class="question">10. Write the following rational numbers in ascending order: <br/>(i) -3/5, -2/5, -1/5 <br/>(ii) 1/3, -2/9, -4/3</div>
            <div class="solution">
                <div class="sol-step"><b>(i) -3/5, -2/5, -1/5:</b></div>
                <div class="sol-step">=> Denominators are same. Comparing numerators: -3 < -2 < -1.</div>
                <div class="sol-step">Result: <span class="ans-highlight">-3/5, -2/5, -1/5</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 1/3, -2/9, -4/3:</b></div>
                <div class="sol-step">=> LCM of 3, 9 is 9. Fractions: 3/9, -2/9, -12/9.</div>
                <div class="sol-step">=> Ascending order: -12/9 < -2/9 < 3/9.</div>
                <div class="sol-step">Result: <span class="ans-highlight">-4/3, -2/9, 1/3</span></div>
            </div>
        </div>
        `,
        "ex8-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 109, 0, 0.1); color: #FFCC80; padding: 12px; border-radius: 8px; border-left: 6px solid #FF6D00; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF6D00; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF6D00; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Find the sum: <br/>(i) 5/4 + (-11/4) <br/>(ii) 5/3 + 3/5 <br/>(iii) -9/10 + 22/15</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 5/4 + (-11/4)</b></div>
                <div class="sol-step">=> (5 - 11) / 4 = -6/4 = <span class="ans-highlight">-3/2</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 5/3 + 3/5</b></div>
                <div class="sol-step">=> LCM(3,5) = 15. (25 + 9) / 15 = <span class="ans-highlight">34/15</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) -9/10 + 22/15</b></div>
                <div class="sol-step">=> LCM(10,15) = 30. (-27 + 44) / 30 = <span class="ans-highlight">17/30</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(vii) -2 1/3 + 4 3/5</b></div>
                <div class="sol-step">=> -7/3 + 23/5 = (-35 + 69) / 15 = <span class="ans-highlight">34/15</span></div>
            </div>

            <div class="question">2. Find: <br/>(i) 7/24 - 17/36 <br/>(ii) 5/63 - (-6/21)</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 7/24 - 17/36</b></div>
                <div class="sol-step">=> LCM(24,36) = 72. (21 - 34) / 72 = <span class="ans-highlight">-13/72</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 5/63 - (-6/21)</b></div>
                <div class="sol-step">=> 5/63 + 6/21 = 5/63 + 18/63 = <span class="ans-highlight">23/63</span></div>
            </div>

            <div class="question">3. Find the product: <br/>(i) 9/2 &times; (-7/4) <br/>(ii) 3/10 &times; (-9) <br/>(vi) 3/-5 &times; -5/3</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 9/2 &times; (-7/4)</b></div>
                <div class="sol-step">=> (9 &times; -7) / (2 &times; 4) = <span class="ans-highlight">-63/8</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3/10 &times; (-9)</b></div>
                <div class="sol-step">=> (3 &times; -9) / 10 = <span class="ans-highlight">-27/10</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 3/-5 &times; -5/3</b></div>
                <div class="sol-step">=> (-15 / -15) = <span class="ans-highlight">1</span></div>
            </div>

            <div class="question">4. Find the value of: <br/>(i) -4 &divide; 2/3 <br/>(iv) -1/8 &divide; 3/4 <br/>(vii) 3/13 &divide; (-4/65)</div>
            <div class="solution">
                <div class="sol-step"><b>(i) -4 &divide; 2/3</b></div>
                <div class="sol-step">=> -4 &times; 3/2 = -12/2 = <span class="ans-highlight">-6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) -1/8 &divide; 3/4</b></div>
                <div class="sol-step">=> -1/8 &times; 4/3 = -4/24 = <span class="ans-highlight">-1/6</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3/13 &divide; (-4/65)</b></div>
                <div class="sol-step">=> 3/13 &times; 65/-4 = (3 &times; 5) / -4 = <span class="ans-highlight">-15/4</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Which is a rational number?", options: ["5", "-2/3", "0", "All of these"], correctAnswer: "D" },
        { id: "m2", question: "In p/q, q cannot be:", options: ["1", "-1", "0", "10"], correctAnswer: "C" },
        { id: "m3", question: "The standard form of -18/12 is:", options: ["-3/2", "3/-2", "-9/6", "1.5"], correctAnswer: "A" },
        { id: "m4", question: "Reciprocal of -5/7 is:", options: ["5/7", "7/5", "-7/5", "1"], correctAnswer: "C" },
        { id: "m5", question: "0 is ______ rational number.", options: ["Positive", "Negative", "Neither pos nor neg", "Undefined"], correctAnswer: "C" },
        { id: "m6", question: "Which symbol fills -4/5 [ ] -5/7?", options: [">", "<", "=", "None"], correctAnswer: "B" },
        { id: "m7", question: "Sum of a number and its additive inverse is:", options: ["1", "0", "-1", "2"], correctAnswer: "B" },
        { id: "m8", question: "Rational number between 1/2 and 1/4 is:", options: ["3/8", "1/3", "3/4", "1/6"], correctAnswer: "A" },
        { id: "m9", question: "Product of a number and its reciprocal is:", options: ["0", "1", "-1", "Number itself"], correctAnswer: "B" },
        { id: "m10", question: "Smallest positive rational number is:", options: ["0", "1", "0.1", "Doesn't exist"], correctAnswer: "D" }
    ],
    summary: []
};
