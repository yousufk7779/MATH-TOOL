import { ChapterContent } from "../types";

export const c7Math10: ChapterContent = {
    id: "c7-math-10",
    number: 10,
    title: "Algebraic Expressions",
    isHtmlView: true,
    introduction: "Algebraic expressions are formed from variables and constants. We use operations like addition, subtraction, multiplication, and division to combine them and solve real-world problems.",
    definitions: [
        { term: "Variable", definition: "A symbol that can take various numerical values." },
        { term: "Constant", definition: "A symbol that has a fixed numerical value." },
        { term: "Term", definition: "A part of an expression separated by '+' or '-' signs." },
        { term: "Coefficient", definition: "The numerical factor in a term." }
    ],
    keyPoints: [
        "Like terms have the same algebraic factors.",
        "Only like terms can be added or subtracted.",
        "Monomial has one term, Binomial has two, Trinomial has three.",
        "Value of an expression depends on the values of the variables it contains."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex10-1", name: "Exercise 10.1", questions: [] },
        { id: "ex10-2", name: "Exercise 10.2", questions: [] },
        { id: "ex10-3", name: "Exercise 10.3", questions: [] },
        { id: "ex10-4", name: "Exercise 10.4", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #D1C4E9; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(103, 58, 183, 0.05); border-left: 4px solid #673AB7; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #673AB7; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 10: Algebraic Expressions Overview</h2>
            <p class="content-text">Learn how to manipulate mathematical symbols to represent and solve generalized problems.</p>
            <div class="point-box">
                <div class="point-item">Variables (x, y, z) are the unknowns.</div>
                <div class="point-item">Identify like terms before adding or subtracting.</div>
                <div class="point-item">Substitution is the key to finding numerical values.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex10-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(103, 58, 183, 0.1); color: #D1C4E9; padding: 12px; border-radius: 8px; border-left: 6px solid #673AB7; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #673AB7; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #B39DDB; font-weight: bold; }
            .tree-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(103, 58, 183, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="question">1. Get the algebraic expressions in the following cases using variables, constants and arithmetic operations. <br/>(i) Subtraction of z from y. <br/>(ii) One-half of the sum of numbers x and y. <br/>(v) Numbers x and y both squared and added.</div>
            <div class="solution">
                <div class="sol-step"><b>(i) Subtraction of z from y:</b> <span class="ans-highlight">y - z</span></div>
                <div class="sol-step"><b>(ii) One-half of the sum of numbers x and y:</b> <span class="ans-highlight">(x + y) / 2</span></div>
                <div class="sol-step"><b>(v) Numbers x and y both squared and added:</b> <span class="ans-highlight">x² + y²</span></div>
            </div>

            <div class="question">2. (i) Identify the terms and their factors in the following expressions. Show the terms and factors by tree diagrams. <br/>(a) x - 3 <br/>(b) 1 + x + x²</div>
            <div class="solution">
                <div class="sol-step"><b>(a) x - 3</b></div>
                <div class="tree-container">
                    <svg width="150" height="100" viewBox="0 0 150 100">
                        <text x="75" y="20" fill="#fff" font-weight="bold" text-anchor="middle">x - 3</text>
                        <line x1="75" y1="25" x2="40" y2="50" stroke="#673AB7" />
                        <line x1="75" y1="25" x2="110" y2="50" stroke="#673AB7" />
                        <text x="40" y="70" fill="#B39DDB" text-anchor="middle">x (Term)</text>
                        <text x="110" y="70" fill="#B39DDB" text-anchor="middle">-3 (Term)</text>
                    </svg>
                </div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(b) 1 + x + x²</b></div>
                <div class="tree-container">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        <text x="100" y="20" fill="#fff" font-weight="bold" text-anchor="middle">1 + x + x²</text>
                        <line x1="100" y1="25" x2="30" y2="50" stroke="#673AB7" />
                        <line x1="100" y1="25" x2="100" y2="50" stroke="#673AB7" />
                        <line x1="100" y1="25" x2="170" y2="50" stroke="#673AB7" />
                        <text x="30" y="70" fill="#B39DDB" text-anchor="middle">1</text>
                        <text x="100" y="70" fill="#B39DDB" text-anchor="middle">x</text>
                        <text x="170" y="70" fill="#B39DDB" text-anchor="middle">x²</text>
                        <line x1="170" y1="75" x2="155" y2="100" stroke="#673AB7" stroke-dasharray="2" />
                        <line x1="170" y1="75" x2="185" y2="100" stroke="#673AB7" stroke-dasharray="2" />
                        <text x="155" y="115" fill="#fff" font-size="10" text-anchor="middle">x</text>
                        <text x="185" y="115" fill="#fff" font-size="10" text-anchor="middle">x</text>
                    </svg>
                </div>
            </div>

            <div class="question">3. Identify the numerical coefficients of terms (other than constants) in the following expressions: <br/>(i) 5 - 3t² <br/>(ii) 1.2a + 0.8b</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 5 - 3t²</b>: Term is -3t². Coefficient is <span class="ans-highlight">-3</span></div>
                <div class="sol-step"><b>(ii) 1.2a + 0.8b</b>: Terms are 1.2a, 0.8b. Coefficients are <span class="ans-highlight">1.2, 0.8</span></div>
            </div>

            <div class="question">5. Classify into monomials, binomials and trinomials: <br/>(i) 4y - 7z <br/>(ii) y² <br/>(iii) x + y - xy</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 4y - 7z</b>: Two terms. Result: <span class="ans-highlight">Binomial</span></div>
                <div class="sol-step"><b>(ii) y²</b>: One term. Result: <span class="ans-highlight">Monomial</span></div>
                <div class="sol-step"><b>(iii) x + y - xy</b>: Three terms. Result: <span class="ans-highlight">Trinomial</span></div>
            </div>

            <div class="question">6. State whether a given pair of terms is of like or unlike terms: <br/>(i) 1, 100 <br/>(iii) -29x, -29y <br/>(iv) 14xy, 42yx</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 1, 100</b>: Both are constants. Result: <span class="ans-highlight">Like terms</span></div>
                <div class="sol-step"><b>(iii) -29x, -29y</b>: Different variables (x and y). Result: <span class="ans-highlight">Unlike terms</span></div>
                <div class="sol-step"><b>(iv) 14xy, 42yx</b>: Same variables (xy is same as yx). Result: <span class="ans-highlight">Like terms</span></div>
            </div>
        </div>
        `,
        "ex10-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(103, 58, 183, 0.1); color: #D1C4E9; padding: 12px; border-radius: 8px; border-left: 6px solid #673AB7; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #673AB7; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #B39DDB; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Simplify combining like terms: <br/>(i) 21b - 32 + 7b - 20b <br/>(ii) -z² + 13z² - 5z + 7z³ - 15z <br/>(iii) p - (p - q) - q - (q - p)</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 21b - 32 + 7b - 20b</b></div>
                <div class="sol-step">=> (21b + 7b - 20b) - 32</div>
                <div class="sol-step">=> (28b - 20b) - 32 = <span class="ans-highlight">8b - 32</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) -z² + 13z² - 5z + 7z³ - 15z</b></div>
                <div class="sol-step">=> 7z³ + (-z² + 13z²) + (-5z - 15z)</div>
                <div class="sol-step">=> <span class="ans-highlight">7z³ + 12z² - 20z</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) p - (p - q) - q - (q - p)</b></div>
                <div class="sol-step">=> p - p + q - q - q + p</div>
                <div class="sol-step">=> (p - p + p) + (q - q - q) = <span class="ans-highlight">p - q</span></div>
            </div>

            <div class="question">2. Add: <br/>(i) 3mn, -5mn, 8mn, -4mn <br/>(ii) t - 8tz, 3tz - z, z - t</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 3mn + (-5mn) + 8mn + (-4mn)</b></div>
                <div class="sol-step">=> (3 - 5 + 8 - 4)mn = <span class="ans-highlight">2mn</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) (t - 8tz) + (3tz - z) + (z - t)</b></div>
                <div class="sol-step">=> (t - t) + (-z + z) + (-8tz + 3tz)</div>
                <div class="sol-step">=> 0 + 0 - 5tz = <span class="ans-highlight">-5tz</span></div>
            </div>

            <div class="question">3. Subtract: <br/>(i) -5y² from y² <br/>(ii) 6xy from -12xy <br/>(iii) (a - b) from (a + b)</div>
            <div class="solution">
                <div class="sol-step"><b>(i) y² - (-5y²)</b> = y² + 5y² = <span class="ans-highlight">6y²</span></div>
                <div class="sol-step"><b>(ii) -12xy - (6xy)</b> = <span class="ans-highlight">-18xy</span></div>
                <div class="sol-step"><b>(iii) (a + b) - (a - b)</b> = a + b - a + b = <span class="ans-highlight">2b</span></div>
            </div>

            <div class="question">4. (a) What should be added to x² + xy + y² to obtain 2x² + 3xy?</div>
            <div class="solution">
                <div class="sol-step">=> Required Expression = (2x² + 3xy) - (x² + xy + y²)</div>
                <div class="sol-step">=> 2x² + 3xy - x² - xy - y²</div>
                <div class="sol-step">=> (2x² - x²) + (3xy - xy) - y²</div>
                <div class="sol-step">=> <span class="ans-highlight">x² + 2xy - y²</span></div>
            </div>

            <div class="question">6. (a) From the sum of 3x - y + 11 and -y - 11, subtract 3x - y - 11.</div>
            <div class="solution">
                <div class="sol-step"><b>Step 1: Sum of (3x - y + 11) and (-y - 11)</b></div>
                <div class="sol-step">=> 3x - y + 11 - y - 11 = 3x - 2y</div>
                <div class="sol-step"><b>Step 2: Subtract (3x - y - 11) from (3x - 2y)</b></div>
                <div class="sol-step">=> (3x - 2y) - (3x - y - 11)</div>
                <div class="sol-step">=> 3x - 2y - 3x + y + 11</div>
                <div class="sol-step">=> (3x - 3x) + (-2y + y) + 11 = <span class="ans-highlight">-y + 11</span></div>
            </div>
        </div>
        `,
        "ex10-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(103, 58, 183, 0.1); color: #D1C4E9; padding: 12px; border-radius: 8px; border-left: 6px solid #673AB7; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #673AB7; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #B39DDB; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. If m = 2, find the value of: <br/>(i) m - 2 <br/>(ii) 3m - 5 <br/>(iv) 3m² - 2m - 7</div>
            <div class="solution">
                <div class="sol-step"><b>(i) m - 2:</b> 2 - 2 = <span class="ans-highlight">0</span></div>
                <div class="sol-step"><b>(ii) 3m - 5:</b> 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>
                <div class="sol-step"><b>(iv) 3m² - 2m - 7:</b> 3(2)² - 2(2) - 7 = 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>
            </div>

            <div class="question">2. If p = -2, find the value of: <br/>(i) 4p + 7 <br/>(ii) -3p² + 4p + 7</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 4p + 7:</b> 4(-2) + 7 = -8 + 7 = <span class="ans-highlight">-1</span></div>
                <div class="sol-step"><b>(ii) -3p² + 4p + 7:</b> -3(-2)² + 4(-2) + 7 = -3(4) - 8 + 7 = -12 - 8 + 7 = <span class="ans-highlight">-13</span></div>
            </div>

            <div class="question">4. If a = 2, b = -2, find the value of: <br/>(i) a² + b² <br/>(ii) a² + ab + b²</div>
            <div class="solution">
                <div class="sol-step"><b>(i) a² + b²:</b> (2)² + (-2)² = 4 + 4 = <span class="ans-highlight">8</span></div>
                <div class="sol-step"><b>(ii) a² + ab + b²:</b> (2)² + (2)(-2) + (-2)² = 4 - 4 + 4 = <span class="ans-highlight">4</span></div>
            </div>

            <div class="question">6. Simplify the expressions and find the value if x is equal to 2: <br/>(i) x + 7 + 4(x - 5) <br/>(ii) 3(x + 2) + 5x - 7</div>
            <div class="solution">
                <div class="sol-step"><b>(i) x + 7 + 4(x - 5)</b></div>
                <div class="sol-step">=> x + 7 + 4x - 20 = 5x - 13</div>
                <div class="sol-step">=> Substitute x=2: 5(2) - 13 = 10 - 13 = <span class="ans-highlight">-3</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3(x + 2) + 5x - 7</b></div>
                <div class="sol-step">=> 3x + 6 + 5x - 7 = 8x - 1</div>
                <div class="sol-step">=> Substitute x=2: 8(2) - 1 = 16 - 1 = <span class="ans-highlight">15</span></div>
            </div>

            <div class="question">9. What should be the value of a if the value of 2x² + x - a equals to 5, when x = 0?</div>
            <div class="solution">
                <div class="sol-step">=> Given: 2x² + x - a = 5</div>
                <div class="sol-step">=> Substitute x = 0:</div>
                <div class="sol-step">=> 2(0)² + 0 - a = 5</div>
                <div class="sol-step">=> -a = 5 => a = <span class="ans-highlight">-5</span></div>
            </div>

            <div class="question">10. Simplify the expression and find its value when a = 5 and b = -3: <br/> 2(a² + ab) + 3 - ab</div>
            <div class="solution">
                <div class="sol-step">=> 2a² + 2ab + 3 - ab</div>
                <div class="sol-step">=> 2a² + ab + 3</div>
                <div class="sol-step">=> Substitute a=5, b=-3:</div>
                <div class="sol-step">=> 2(5)² + (5)(-3) + 3</div>
                <div class="sol-step">=> 2(25) - 15 + 3 = 50 - 15 + 3 = <span class="ans-highlight">38</span></div>
            </div>
        </div>
        `,
        "ex10-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(103, 58, 183, 0.1); color: #D1C4E9; padding: 12px; border-radius: 8px; border-left: 6px solid #673AB7; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #673AB7; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #B39DDB; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(103, 58, 183, 0.3); text-align: center; }
            table { width: 100%; border-collapse: collapse; margin: 15px 0; background: #1a1a2e; }
            th, td { border: 1px solid #673AB7; padding: 8px; text-align: center; color: #fff; font-size: 0.9em; }
            th { background: rgba(103, 58, 183, 0.2); color: #D1C4E9; }
        </style>
        <div class="container">
            <div class="question">1. Observe the patterns of digits made from line segments of equal length. You will find such segmented digits on the display of electronic watches or calculators. How many segments are required to form 5, 10, 100 digits of the kind 6, 4, 8?</div>
            <div class="solution">
                <div class="sol-step"><b>(a) Digit 6 (Expression: 5n + 1):</b></div>
                <div class="diagram-container">
                    <svg width="100" height="40" viewBox="0 0 100 40">
                        <path d="M 10 10 L 30 10 L 30 20 L 10 20 L 10 10 M 10 20 L 10 30 L 30 30" fill="none" stroke="#673AB7" stroke-width="2" />
                        <text x="50" y="25" fill="#fff" font-size="12">5n + 1</text>
                    </svg>
                </div>
                <div class="sol-step">=> For n=5: 5(5) + 1 = 26</div>
                <div class="sol-step">=> For n=10: 5(10) + 1 = 51</div>
                <div class="sol-step">=> For n=100: 5(100) + 1 = <span class="ans-highlight">501</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) Digit 4 (Expression: 3n + 1):</b></div>
                <div class="sol-step">=> For n=5: 3(5) + 1 = 16</div>
                <div class="sol-step">=> For n=10: 3(10) + 1 = 31</div>
                <div class="sol-step">=> For n=100: 3(100) + 1 = <span class="ans-highlight">301</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) Digit 8 (Expression: 5n + 2):</b></div>
                <div class="sol-step">=> For n=5: 5(5) + 2 = 27</div>
                <div class="sol-step">=> For n=10: 5(10) + 2 = 52</div>
                <div class="sol-step">=> For n=100: 5(100) + 2 = <span class="ans-highlight">502</span></div>
            </div>

            <div class="question">2. Use the given algebraic expression to complete the table of number pattern:</div>
            <div class="solution">
                <table>
                    <tr><th>Exp</th><th>5th</th><th>10th</th><th>100th</th></tr>
                    <tr><td>2n - 1</td><td>9</td><td>19</td><td class="ans-highlight">199</td></tr>
                    <tr><td>3n + 2</td><td class="ans-highlight">17</td><td class="ans-highlight">32</td><td class="ans-highlight">302</td></tr>
                    <tr><td>4n + 1</td><td class="ans-highlight">21</td><td class="ans-highlight">41</td><td class="ans-highlight">401</td></tr>
                    <tr><td>7n + 20</td><td class="ans-highlight">55</td><td class="ans-highlight">90</td><td class="ans-highlight">720</td></tr>
                    <tr><td>n² + 1</td><td class="ans-highlight">26</td><td class="ans-highlight">101</td><td>10,001</td></tr>
                </table>
                <div class="sol-step"><b>Derivations (Examples):</b></div>
                <div class="sol-step">=> 3n + 2 (10th): 3(10) + 2 = 32</div>
                <div class="sol-step">=> n² + 1 (5th): 5² + 1 = 25 + 1 = 26</div>
                <div class="sol-step">=> 7n + 20 (100th): 7(100) + 20 = 720</div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Coefficient of x in 5xy² is:", options: ["5", "y²", "5y²", "x"], correctAnswer: "C" },
        { id: "m2", question: "Like terms are those with same:", options: ["Coefficients", "Variables", "Algebraic factors", "Constants"], correctAnswer: "C" },
        { id: "m3", question: "An expression with 3 terms is:", options: ["Monomial", "Binomial", "Trinomial", "Polynomial"], correctAnswer: "C" },
        { id: "m4", question: "Value of x² - 1 when x = 2 is:", options: ["1", "3", "4", "2"], correctAnswer: "B" },
        { id: "m5", question: "Sum of 3x and 4x is:", options: ["7x", "12x", "x", "7x²"], correctAnswer: "A" },
        { id: "m6", question: "Difference between 10y and 4y is:", options: ["6", "6y", "14y", "y"], correctAnswer: "B" },
        { id: "m7", question: "Expression for 'z multiplied by itself':", options: ["2z", "z+z", "z²", "z³"], correctAnswer: "C" },
        { id: "m8", question: "Coefficient of y² in 8 - xy² is:", options: ["8", "x", "-x", "-1"], correctAnswer: "C" },
        { id: "m9", question: "If a=1, b=2, then a+b is:", options: ["1", "2", "3", "0"], correctAnswer: "C" },
        { id: "m10", question: "A constant term in 5x + 3 is:", options: ["5", "x", "3", "5x"], correctAnswer: "C" }
    ],
    summary: []
};
