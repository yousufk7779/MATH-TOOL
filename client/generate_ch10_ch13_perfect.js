const fs = require('fs');
const path = require('path');

function makeFrac(num, den, color = "#fff") {
  return `<div class="frac"><span class="num" style="border-bottom-color:${color};">${num}</span><span class="den">${den}</span></div>`;
}

// ============================================================================
// CHAPTER 10: ALGEBRAIC EXPRESSIONS
// ============================================================================
const ch10Theme = "#66BB6A";
const ch10Highlight = "#81C784";

const c7Math10Perfect = `import { ChapterContent } from "../types";

export const c7Math10: ChapterContent = {
  id: "c7-math-10",
  number: 10,
  title: "Algebraic Expressions",
  isHtmlView: true,
  introduction:
    "Algebraic expressions are formed from variables and constants. We use operations like addition, subtraction, multiplication, and division to combine them and solve real-world problems.",
  definitions: [
    { term: "Variable", description: "A symbol (like x, y, z) that can take various numerical values." },
    { term: "Constant", description: "A symbol that has a fixed numerical value (like 5, -3, 10)." },
    { term: "Term", description: "A part of an algebraic expression separated by '+' or '-' signs." },
    { term: "Coefficient", description: "The numerical factor attached to a variable term." },
    { term: "Like Terms", description: "Terms having the exact same algebraic factors (e.g., 3x and 7x)." },
  ],
  keyPoints: [
    "Algebraic expressions consist of terms, and terms are products of factors.",
    "Only like terms can be added or subtracted together.",
    "Monomials have 1 term, Binomials have 2 terms, Trinomials have 3 terms.",
    "Evaluating an expression means substituting given numerical values for variables.",
  ],
  formulas: [
    { name: "Addition of Like Terms", formula: "ax + bx = (a + b)x" },
    { name: "Subtraction of Like Terms", formula: "ax - bx = (a - b)x" },
  ],
  crux: [],
  exercises: [
    { id: "ex10-1", name: "Exercise 10.1", questions: [] },
    { id: "ex10-2", name: "Exercise 10.2", questions: [] },
    { id: "ex10-3", name: "Exercise 10.3", questions: [] },
    { id: "ex10-4", name: "Exercise 10.4", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #66BB6A; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(102, 187, 106, 0.05); border-left: 4px solid #66BB6A; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #66BB6A; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Algebraic Expressions</div>
            <p class="content-text">In this chapter, we learn how variables and constants combine using arithmetic operations to form expressions, identify terms, coefficients, like/unlike terms, add and subtract expressions, evaluate their values, and recognize digit patterns.</p>
            <div class="point-box">
                <div class="point-item">Terms & Factors: Expressions consist of terms, and terms are products of factors.</div>
                <div class="point-item">Like Terms: Only like terms can be combined through addition or subtraction.</div>
                <div class="point-item">Evaluation & Patterns: Substitute values to calculate expressions and analyze geometric digit patterns.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex10-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #81C784; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; background: #161625; }
            th, td { border: 1px solid rgba(102, 187, 106, 0.3); padding: 8px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(102, 187, 106, 0.15); color: #81C784; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Get the algebraic expressions in the following cases using variables, constants and arithmetic operations:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) Subtraction of z from y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= y - z</div>
                    <div class="sol-step"><span class="ans-highlight">= y - z</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) One-half of the sum of numbers x and y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of x and y = (x + y)</div>
                    <div class="sol-step">Taking one-half of the sum = ${makeFrac('x + y', '2', '#81C784')}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${makeFrac('x + y', '2', '#81C784')}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) The number z multiplied by itself</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= z × z</div>
                    <div class="sol-step"><span class="ans-highlight">= z²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) One-fourth of the product of numbers p and q</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of p and q = (p × q) = pq</div>
                    <div class="sol-step">One-fourth of the product = ${makeFrac('pq', '4', '#81C784')}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${makeFrac('pq', '4', '#81C784')}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) Numbers x and y, both squared and added</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Square of x = x², Square of y = y²</div>
                    <div class="sol-step">Adding both squared numbers = x² + y²</div>
                    <div class="sol-step"><span class="ans-highlight">= x² + y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) Number 5 added to three times the product of numbers m and n</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of m and n = mn</div>
                    <div class="sol-step">Three times the product = 3mn</div>
                    <div class="sol-step">Adding 5 = 3mn + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 3mn + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vii) Product of numbers y and z subtracted from 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of y and z = yz</div>
                    <div class="sol-step">Subtracting from 10 = 10 - yz</div>
                    <div class="sol-step"><span class="ans-highlight">= 10 - yz</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(viii) Sum of numbers a and b subtracted from their product</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of a and b = ab</div>
                    <div class="sol-step">Sum of a and b = (a + b)</div>
                    <div class="sol-step">Subtracting sum from product = ab - (a + b)</div>
                    <div class="sol-step"><span class="ans-highlight">= ab - (a + b)</span></div>
                </div>
            </div>

            <!-- Question 2 (i) -->
            <div class="sol-card">
                <div class="question-header">2. (i) Identify the terms and their factors in the following expressions using tree diagrams:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(a) x - 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="200" height="90" viewBox="0 0 200 90">
                            <text x="100" y="25" fill="#64B5F6" font-size="14" font-weight="bold" text-anchor="middle">x - 3</text>
                            <line x1="100" y1="30" x2="60" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="100" y1="30" x2="140" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <text x="60" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="140" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">-3</text>
                        </svg>
                    </div>
                    <div class="sol-step">Expression: x - 3</div>
                    <div class="sol-step">Terms: x, -3</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: x; -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(b) 1 + x + x²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="260" height="110" viewBox="0 0 260 110">
                            <text x="130" y="25" fill="#64B5F6" font-size="14" font-weight="bold" text-anchor="middle">1 + x + x²</text>
                            <line x1="130" y1="30" x2="50" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="130" y1="30" x2="130" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <line x1="130" y1="30" x2="210" y2="60" stroke="#42A5F5" stroke-width="2"/>
                            <text x="50" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">1</text>
                            <text x="130" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="210" y="80" fill="#90CAF9" font-size="14" font-weight="bold" text-anchor="middle">x²</text>
                        </svg>
                    </div>
                    <div class="sol-step">Expression: 1 + x + x²</div>
                    <div class="sol-step">Terms: 1, x, x²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 1; x; x, x</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(c) y - y³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression: y - y³</div>
                    <div class="sol-step">Terms: y, -y³</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: y; -y, -y, -y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(d) 5xy² + 7x²y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression: 5xy² + 7x²y</div>
                    <div class="sol-step">Terms: 5xy², 7x²y</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 5, x, y, y; 7, x, x, y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(e) -ab + 2b² - 3a²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression: -ab + 2b² - 3a²</div>
                    <div class="sol-step">Terms: -ab, 2b², -3a²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: -a, b; 2, b, b; -3, a, a</span></div>
                </div>
            </div>

            <!-- Question 2 (ii) -->
            <div class="sol-card">
                <div class="question-header">2. (ii) Identify terms and factors in the expressions given below:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Sl.No.</th><th>Expression</th><th>Terms</th><th>Factors</th></tr>
                        <tr><td>(a)</td><td>-4x + 5</td><td>-4x, 5</td><td>-4, x; 5</td></tr>
                        <tr><td>(b)</td><td>-4x + 5y</td><td>-4x, 5y</td><td>-4, x; 5, y</td></tr>
                        <tr><td>(c)</td><td>5y + 3y²</td><td>5y, 3y²</td><td>5, y; 3, y, y</td></tr>
                        <tr><td>(d)</td><td>xy + 2x²y²</td><td>xy, 2x²y²</td><td>x, y; 2, x, x, y, y</td></tr>
                        <tr><td>(e)</td><td>pq + q</td><td>pq, q</td><td>p, q; q</td></tr>
                        <tr><td>(f)</td><td>1.2ab - 2.4b + 3.6a</td><td>1.2ab, -2.4b, 3.6a</td><td>1.2, a, b; -2.4, b; 3.6, a</td></tr>
                        <tr><td>(g)</td><td>${makeFrac('3','4','#81C784')}x + ${makeFrac('1','4','#81C784')}</td><td>${makeFrac('3','4','#81C784')}x, ${makeFrac('1','4','#81C784')}</td><td>${makeFrac('3','4','#81C784')}, x; ${makeFrac('1','4','#81C784')}</td></tr>
                        <tr><td>(h)</td><td>0.1p² + 0.2q²</td><td>0.1p², 0.2q²</td><td>0.1, p, p; 0.2, q, q</td></tr>
                    </table>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Identify numerical coefficients of terms (other than constants) in the following expressions:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Sl.No.</th><th>Expression</th><th>Terms (with variables)</th><th>Coefficients</th></tr>
                        <tr><td>(i)</td><td>5 - 3t²</td><td>-3t²</td><td>-3</td></tr>
                        <tr><td>(ii)</td><td>1 + t + t² + t³</td><td>t, t², t³</td><td>1, 1, 1</td></tr>
                        <tr><td>(iii)</td><td>x + 2xy + 3y</td><td>x, 2xy, 3y</td><td>1, 2, 3</td></tr>
                        <tr><td>(iv)</td><td>100m + 1000n</td><td>100m, 1000n</td><td>100, 1000</td></tr>
                        <tr><td>(v)</td><td>-p²q² + 7pq</td><td>-p²q², 7pq</td><td>-1, 7</td></tr>
                        <tr><td>(vi)</td><td>1.2a + 0.8b</td><td>1.2a, 0.8b</td><td>1.2, 0.8</td></tr>
                        <tr><td>(vii)</td><td>3.14r²</td><td>3.14r²</td><td>3.14</td></tr>
                        <tr><td>(viii)</td><td>2(l + b)</td><td>2l, 2b</td><td>2, 2</td></tr>
                        <tr><td>(ix)</td><td>0.1y + 0.01y²</td><td>0.1y, 0.01y²</td><td>0.1, 0.01</td></tr>
                    </table>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. (a) Identify terms which contain x and give the coefficient of x:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Sl.No.</th><th>Expression</th><th>Term with x</th><th>Coefficient of x</th></tr>
                        <tr><td>(i)</td><td>y²x + y</td><td>y²x</td><td>y²</td></tr>
                        <tr><td>(ii)</td><td>13y² - 8yx</td><td>-8yx</td><td>-8y</td></tr>
                        <tr><td>(iii)</td><td>x + y + 2</td><td>x</td><td>1</td></tr>
                        <tr><td>(iv)</td><td>5 + z + zx</td><td>zx</td><td>z</td></tr>
                        <tr><td>(v)</td><td>1 + x + xy</td><td>x, xy</td><td>1, y</td></tr>
                        <tr><td>(vi)</td><td>12xy² + 25</td><td>12xy²</td><td>12y²</td></tr>
                        <tr><td>(vii)</td><td>7x + xy²</td><td>7x, xy²</td><td>7, y²</td></tr>
                    </table>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">4. (b) Identify terms which contain y² and give the coefficient of y²:</b></div>
                    <table>
                        <tr><th>Sl.No.</th><th>Expression</th><th>Term with y²</th><th>Coefficient of y²</th></tr>
                        <tr><td>(i)</td><td>8 - xy²</td><td>-xy²</td><td>-x</td></tr>
                        <tr><td>(ii)</td><td>5y² + 7x</td><td>5y²</td><td>5</td></tr>
                        <tr><td>(iii)</td><td>2x²y - 15xy² + 7y²</td><td>-15xy², 7y²</td><td>-15x, 7</td></tr>
                    </table>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Classify into monomials, binomials and trinomials:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 4y - 7z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 unlike terms (4y and -7z).</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has only 1 term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) x + y - xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 unlike terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Single constant term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) ab - a - b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) 5 - 3t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vii) 4p²q - 4pq²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 unlike terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(viii) 7mn</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 1 term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ix) z² - 3z + 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(x) a² + b²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(xi) z² + z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(xii) 1 + x + x²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. State whether a given pair of terms is of like or unlike terms:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 1, 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both terms are constant numbers without variables.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) -7x, (${makeFrac('5','2','#81C784')})x</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both terms have the exact same variable x.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) -29x, -29y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Variables are different (x and y).</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 14xy, 42yx</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Algebraic factors are identical because xy = yx.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) 4m²p, 4mp²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Exponents of variables differ (m² vs m, p vs p²).</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) 12xz, 12x²z²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Exponents of variables differ.</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Identify like terms in the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(a) Grouping like terms from list:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• Group 1: <span class="ans-highlight">-xy², 2xy²</span></div>
                    <div class="sol-step">• Group 2: <span class="ans-highlight">-4yx², 20x²y</span></div>
                    <div class="sol-step">• Group 3: <span class="ans-highlight">8x², -11x², -6x²</span></div>
                    <div class="sol-step">• Group 4: <span class="ans-highlight">7y, y</span></div>
                    <div class="sol-step">• Group 5: <span class="ans-highlight">-100x, 3x</span></div>
                    <div class="sol-step">• Group 6: <span class="ans-highlight">-11yx, 2xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(b) Grouping like terms from list:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• Group 1: <span class="ans-highlight">10pq, -7qp, 78qp</span></div>
                    <div class="sol-step">• Group 2: <span class="ans-highlight">7p, 2405p</span></div>
                    <div class="sol-step">• Group 3: <span class="ans-highlight">8q, -100q</span></div>
                    <div class="sol-step">• Group 4: <span class="ans-highlight">-p²q², 12q²p²</span></div>
                    <div class="sol-step">• Group 5: <span class="ans-highlight">-23, 41</span></div>
                    <div class="sol-step">• Group 6: <span class="ans-highlight">-5p², 701p²</span></div>
                    <div class="sol-step">• Group 7: <span class="ans-highlight">13p²q, qp²</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex10-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Simplify combining like terms:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 21b - 32 + 7b - 20b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (21b + 7b - 20b) - 32</div>
                    <div class="sol-step">= b (21 + 7 - 20) - 32</div>
                    <div class="sol-step">= b (28 - 20) - 32 = b(8) - 32</div>
                    <div class="sol-step"><span class="ans-highlight">= 8b - 32</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) -z² + 13z² - 5z + 7z³ - 15z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging in descending powers:</div>
                    <div class="sol-step">= 7z³ + (-z² + 13z²) + (-5z - 15z)</div>
                    <div class="sol-step">= 7z³ + z²(-1 + 13) + z(-5 - 15)</div>
                    <div class="sol-step"><span class="ans-highlight">= 7z³ + 12z² - 20z</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) p - (p - q) - q - (q - p)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Opening brackets:</div>
                    <div class="sol-step">= p - p + q - q - q + p</div>
                    <div class="sol-step">= (p - p + p) + (q - q - q)</div>
                    <div class="sol-step"><span class="ans-highlight">= p - q</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 3a - 2b - ab - (a - b + ab) + 3ab + b - a</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Opening brackets:</div>
                    <div class="sol-step">= 3a - 2b - ab - a + b - ab + 3ab + b - a</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (3a - a - a) + (-2b + b + b) + (-ab - ab + 3ab)</div>
                    <div class="sol-step">= a(3 - 1 - 1) + b(-2 + 1 + 1) + ab(-1 - 1 + 3)</div>
                    <div class="sol-step"><span class="ans-highlight">= a + ab</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) 5x²y - 5x² + 3yx² - 3y² + x² - y² + 8xy² - 3y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (5x²y + 3x²y) + (-5x² + x²) + (-3y² - y² - 3y²) + 8xy²</div>
                    <div class="sol-step">= x²y(5 + 3) + x²(-5 + 1) + y²(-3 - 1 - 3) + 8xy²</div>
                    <div class="sol-step"><span class="ans-highlight">= 8x²y - 4x² - 7y² + 8xy²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) (3y² + 5y - 4) - (8y - y² - 4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3y² + 5y - 4 - 8y + y² + 4</div>
                    <div class="sol-step">= (3y² + y²) + (5y - 8y) + (-4 + 4)</div>
                    <div class="sol-step">= y²(3 + 1) + y(5 - 8) + 0</div>
                    <div class="sol-step"><span class="ans-highlight">= 4y² - 3y</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Add:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 3mn, -5mn, 8mn, -4mn</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3mn + (-5mn) + 8mn + (-4mn)</div>
                    <div class="sol-step">= mn (3 - 5 + 8 - 4) = mn (11 - 9)</div>
                    <div class="sol-step"><span class="ans-highlight">= 2mn</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) t - 8tz, 3tz - z, z - t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (t - 8tz) + (3tz - z) + (z - t)</div>
                    <div class="sol-step">= (t - t) + (-8tz + 3tz) + (-z + z)</div>
                    <div class="sol-step"><span class="ans-highlight">= -5tz</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) -7mn + 5, 12mn + 2, 9mn - 8, -2mn - 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-7mn + 12mn + 9mn - 2mn) + (5 + 2 - 8 - 3)</div>
                    <div class="sol-step">= mn (-7 + 12 + 9 - 2) + (7 - 11)</div>
                    <div class="sol-step"><span class="ans-highlight">= 12mn - 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) a + b - 3, b - a + 3, a - b + 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (a - a + a) + (b + b - b) + (-3 + 3 + 3)</div>
                    <div class="sol-step"><span class="ans-highlight">= a + b + 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) 14x + 10y - 12xy - 13, 18 - 7x - 10y + 8xy, 4xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (14x - 7x) + (10y - 10y) + (-12xy + 8xy + 4xy) + (-13 + 18)</div>
                    <div class="sol-step"><span class="ans-highlight">= 7x + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) 5m - 7n, 3n - 4m + 2, 2m - 3mn - 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5m - 4m + 2m) + (-7n + 3n) - 3mn + (2 - 5)</div>
                    <div class="sol-step"><span class="ans-highlight">= 3m - 4n - 3mn - 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vii) 4x²y, -3xy², -5xy², 5x²y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4x²y + 5x²y) + (-3xy² - 5xy²)</div>
                    <div class="sol-step"><span class="ans-highlight">= 9x²y - 8xy²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(viii) 3p²q² - 4pq + 5, -10p²q², 15 + 9pq + 7p²q²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3p²q² - 10p²q² + 7p²q²) + (-4pq + 9pq) + (5 + 15)</div>
                    <div class="sol-step"><span class="ans-highlight">= 5pq + 20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ix) ab - 4a, 4b - ab, 4a - 4b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (ab - ab) + (-4a + 4a) + (4b - 4b)</div>
                    <div class="sol-step"><span class="ans-highlight">= 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(x) x² - y² - 1, y² - 1 - x², 1 - x² - y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (x² - x² - x²) + (-y² + y² - y²) + (-1 - 1 + 1)</div>
                    <div class="sol-step"><span class="ans-highlight">= -x² - y² - 1</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Subtract:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) -5y² from y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= y² - (-5y²) = y² + 5y² = <span class="ans-highlight">6y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) 6xy from -12xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -12xy - 6xy = <span class="ans-highlight">-18xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) (a - b) from (a + b)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (a + b) - (a - b) = a + b - a + b = <span class="ans-highlight">2b</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) a(b - 5) from b(5 - a)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= b(5 - a) - a(b - 5)</div>
                    <div class="sol-step">= 5b - ab - ab + 5a = <span class="ans-highlight">5a + 5b - 2ab</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) -m² + 5mn from 4m² - 3mn + 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4m² - 3mn + 8) - (-m² + 5mn)</div>
                    <div class="sol-step">= 4m² - 3mn + 8 + m² - 5mn</div>
                    <div class="sol-step"><span class="ans-highlight">= 5m² - 8mn + 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vi) -x² + 10x - 5 from 5x - 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5x - 10) - (-x² + 10x - 5)</div>
                    <div class="sol-step">= 5x - 10 + x² - 10x + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= x² - 5x - 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(vii) 5a² - 7ab + 5b² from 3ab - 2a² - 2b²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3ab - 2a² - 2b²) - (5a² - 7ab + 5b²)</div>
                    <div class="sol-step">= 3ab - 2a² - 2b² - 5a² + 7ab - 5b²</div>
                    <div class="sol-step"><span class="ans-highlight">= 10ab - 7a² - 7b²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(viii) 4pq - 5q² - 3p² from 5p² + 3q² - pq</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5p² + 3q² - pq) - (4pq - 5q² - 3p²)</div>
                    <div class="sol-step">= 5p² + 3q² - pq - 4pq + 5q² + 3p²</div>
                    <div class="sol-step"><span class="ans-highlight">= 8p² + 8q² - 5pq</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Word Problems on Addition & Subtraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(a) What should be added to x² + xy + y² to obtain 2x² + 3xy?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let required expression = P</div>
                    <div class="sol-step">P + (x² + xy + y²) = 2x² + 3xy</div>
                    <div class="sol-step">P = (2x² + 3xy) - (x² + xy + y²)</div>
                    <div class="sol-step">P = 2x² + 3xy - x² - xy - y²</div>
                    <div class="sol-step"><span class="ans-highlight">= x² + 2xy - y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(b) What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let required expression = Q</div>
                    <div class="sol-step">(2a + 8b + 10) - Q = -3a + 7b + 16</div>
                    <div class="sol-step">Q = (2a + 8b + 10) - (-3a + 7b + 16)</div>
                    <div class="sol-step">Q = 2a + 8b + 10 + 3a - 7b - 16</div>
                    <div class="sol-step"><span class="ans-highlight">= 5a + b - 6</span></div>
                </div>
            </div>

            <!-- Question 5 & 6 -->
            <div class="sol-card">
                <div class="question-header">5 & 6. Complex Expression Simplifications:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">5. What should be taken away from 3x² - 4y² + 5xy + 20 to obtain -x² - y² + 6xy + 20?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Required = (3x² - 4y² + 5xy + 20) - (-x² - y² + 6xy + 20)</div>
                    <div class="sol-step">= 3x² - 4y² + 5xy + 20 + x² + y² - 6xy - 20</div>
                    <div class="sol-step"><span class="ans-highlight">= 4x² - 3y² - xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">6. (a) From the sum of 3x - y + 11 and -y - 11, subtract 3x - y - 11:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum = (3x - y + 11) + (-y - 11) = 3x - 2y</div>
                    <div class="sol-step">Subtraction = (3x - 2y) - (3x - y - 11)</div>
                    <div class="sol-step">= 3x - 2y - 3x + y + 11</div>
                    <div class="sol-step"><span class="ans-highlight">= -y + 11</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">6. (b) From sum of 4 + 3x & 5 - 4x + 2x², subtract sum of 3x² - 5x & -x² + 2x + 5:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First Sum = (4 + 3x) + (5 - 4x + 2x²) = 2x² - x + 9</div>
                    <div class="sol-step">Second Sum = (3x² - 5x) + (-x² + 2x + 5) = 2x² - 3x + 5</div>
                    <div class="sol-step">Difference = (2x² - x + 9) - (2x² - 3x + 5)</div>
                    <div class="sol-step">= 2x² - x + 9 - 2x² + 3x - 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2x + 4</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex10-3": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #81C784; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. If m = 2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) m - 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 2 - 2 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) 3m - 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) 9 - 5m</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 9 - 5(2) = 9 - 10 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 3m² - 2m - 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2)² - 2(2) - 7 = 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(v) (${makeFrac('5m','2','#81C784')}) - 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= (${makeFrac('5 × 2','2','#81C784')}) - 4 = (${makeFrac('10','2','#81C784')}) - 4 = 5 - 4 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. If p = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= 4(-2) + 7 = -8 + 7 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) -3p² + 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -3(-2)² + 4(-2) + 7 = -3(4) - 8 + 7 = -12 - 8 + 7 = <span class="ans-highlight">-13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) -2p³ - 3p² + 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -2(-2)³ - 3(-2)² + 4(-2) + 7 = -2(-8) - 3(4) - 8 + 7 = 16 - 12 - 8 + 7 = <span class="ans-highlight">3</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the value of the following expressions when x = -1:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(i) 2x - 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1) - 7 = -2 - 7 = <span class="ans-highlight">-9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(ii) -x + 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -(-1) + 2 = 1 + 2 = <span class="ans-highlight">3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iii) x² + 2x + 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-1)² + 2(-1) + 1 = 1 - 2 + 1 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(iv) 2x² - x - 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1)² - (-1) - 2 = 2(1) + 1 - 2 = 2 + 1 - 2 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 4, 5, 6, 7, 8, 9, 10 -->
            <div class="sol-card">
                <div class="question-header">4 to 10. Evaluating Expressions with Multiple Variables:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">4 (i) a² + b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (-2)² = 4 + 4 = <span class="ans-highlight">8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">4 (ii) a² + ab + b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (2)(-2) + (-2)² = 4 - 4 + 4 = <span class="ans-highlight">4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">4 (iii) a² - b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² - (-2)² = 4 - 4 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">5 (i) 2a + 2b for a = 0, b = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0) + 2(-1) = 0 - 2 = <span class="ans-highlight">-2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">5 (ii) 2a² + b² + 1 for a = 0, b = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0)² + (-1)² + 1 = 0 + 1 + 1 = <span class="ans-highlight">2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">8 (i) If z = 10, find z³ - 3(z - 10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (10)³ - 3(10 - 10) = 1000 - 3(0) = <span class="ans-highlight">1000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">8 (ii) If p = -10, find p² - 2p - 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-10)² - 2(-10) - 100 = 100 + 20 - 100 = <span class="ans-highlight">20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">9. Find value of a if 2x² + x - a = 5 when x = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2(0)² + 0 - a = 5 ➔ -a = 5 ➔ <span class="ans-highlight">a = -5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">10. Simplify 2(a² + ab) + 3 - ab for a = 5, b = -3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2a² + 2ab + 3 - ab = 2a² + ab + 3</div>
                    <div class="sol-step">= 2(5)² + (5)(-3) + 3 = 2(25) - 15 + 3 = 50 - 15 + 3 = <span class="ans-highlight">38</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex10-4": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #81C784; font-weight: bold; }
            .sol-body b, .subpart-title { color: #66BB6A; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; background: #161625; }
            th, td { border: 1px solid rgba(102, 187, 106, 0.3); padding: 8px 12px; text-align: center; color: #e0e0e0; }
            th { background: rgba(102, 187, 106, 0.15); color: #81C784; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Observe segment digit patterns and calculate required line segments for n = 5, 10, 100:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#66BB6A;">(a) Pattern for digit 6 (Expression: 5n + 1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• For n = 5 digits: (5 × 5) + 1 = 25 + 1 = <span class="ans-highlight">26 segments</span></div>
                    <div class="sol-step">• For n = 10 digits: (5 × 10) + 1 = 50 + 1 = <span class="ans-highlight">51 segments</span></div>
                    <div class="sol-step">• For n = 100 digits: (5 × 100) + 1 = 500 + 1 = <span class="ans-highlight">501 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(b) Pattern for digit 4 (Expression: 3n + 1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• For n = 5 digits: (3 × 5) + 1 = 15 + 1 = <span class="ans-highlight">16 segments</span></div>
                    <div class="sol-step">• For n = 10 digits: (3 × 10) + 1 = 30 + 1 = <span class="ans-highlight">31 segments</span></div>
                    <div class="sol-step">• For n = 100 digits: (3 × 100) + 1 = 300 + 1 = <span class="ans-highlight">301 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#66BB6A;">(c) Pattern for digit 8 (Expression: 5n + 2)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• For n = 5 digits: (5 × 5) + 2 = 25 + 2 = <span class="ans-highlight">27 segments</span></div>
                    <div class="sol-step">• For n = 10 digits: (5 × 10) + 2 = 50 + 2 = <span class="ans-highlight">52 segments</span></div>
                    <div class="sol-step">• For n = 100 digits: (5 × 100) + 2 = 500 + 2 = <span class="ans-highlight">502 segments</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Use the given algebraic expression to complete the table of number patterns:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>S.No.</th><th>Expression</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>10th</th><th>100th</th></tr>
                        <tr><td>(i)</td><td>2n - 1</td><td>1</td><td>3</td><td>5</td><td>7</td><td>9</td><td>19</td><td><span class="ans-highlight">199</span></td></tr>
                        <tr><td>(ii)</td><td>3n + 2</td><td>5</td><td>8</td><td>11</td><td>14</td><td><span class="ans-highlight">17</span></td><td><span class="ans-highlight">32</span></td><td><span class="ans-highlight">302</span></td></tr>
                        <tr><td>(iii)</td><td>4n + 1</td><td>5</td><td>9</td><td>13</td><td>17</td><td><span class="ans-highlight">21</span></td><td><span class="ans-highlight">41</span></td><td><span class="ans-highlight">401</span></td></tr>
                        <tr><td>(iv)</td><td>7n + 20</td><td>27</td><td>34</td><td>41</td><td>48</td><td><span class="ans-highlight">55</span></td><td><span class="ans-highlight">90</span></td><td><span class="ans-highlight">720</span></td></tr>
                        <tr><td>(v)</td><td>n² + 1</td><td>2</td><td>5</td><td>10</td><td>17</td><td><span class="ans-highlight">26</span></td><td><span class="ans-highlight">101</span></td><td><span class="ans-highlight">10001</span></td></tr>
                    </table>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    { id: "c7m10-mcq-1", question: "Which of the following is a monomial?", options: ["x + y", "5x²", "a + b + c", "2x - 3"], correctAnswer: "b", explanation: "A monomial consists of exactly one single term (5x²)." },
    { id: "c7m10-mcq-2", question: "What is the numerical coefficient of term -7xy?", options: ["7", "-7", "x", "y"], correctAnswer: "b", explanation: "The numerical factor attached to the variable product xy is -7." },
    { id: "c7m10-mcq-3", question: "Which pair represents like terms?", options: ["3x and 3y", "5x and 7x", "2x and 2x²", "4xy and 4x"], correctAnswer: "b", explanation: "Like terms have the exact same algebraic variable factors (5x and 7x)." },
    { id: "c7m10-mcq-4", question: "Find the value of expression 2x + 3 when x = 4:", options: ["9", "11", "14", "8"], correctAnswer: "b", explanation: "Substitute x = 4: 2(4) + 3 = 8 + 3 = 11." },
    { id: "c7m10-mcq-5", question: "Sum of 3x and 5x is equal to:", options: ["8x²", "8x", "15x", "2x"], correctAnswer: "b", explanation: "Adding coefficients of like terms: (3 + 5)x = 8x." },
    { id: "c7m10-mcq-6", question: "Subtract 3a from 8a:", options: ["11a", "5a", "-5a", "24a"], correctAnswer: "b", explanation: "8a - 3a = (8 - 3)a = 5a." },
    { id: "c7m10-mcq-7", question: "An expression containing two terms is called a:", options: ["Monomial", "Binomial", "Trinomial", "Polynomial"], correctAnswer: "b", explanation: "An algebraic expression with 2 terms is called a binomial." },
    { id: "c7m10-mcq-8", question: "If a = 2 and b = 3, what is the value of a² + b²?", options: ["5", "10", "13", "25"], correctAnswer: "c", explanation: "2² + 3² = 4 + 9 = 13." },
    { id: "c7m10-mcq-9", question: "Degree of constant term like 5 is:", options: ["0", "1", "2", "Undefined"], correctAnswer: "a", explanation: "A non-zero constant term has a degree of 0 because 5 = 5x⁰." },
    { id: "c7m10-mcq-10", question: "What is the algebraic expression for '5 added to y'?", options: ["5y", "y - 5", "y + 5", "5/y"], correctAnswer: "c", explanation: "'5 added to y' is written as y + 5." }
  ]
};
`;

// ============================================================================
// CHAPTER 11: EXPONENTS AND POWERS
// ============================================================================
const ch11Theme = "#8E24AA";
const ch11Highlight = "#BA68C8";

const c7Math11Perfect = `import { ChapterContent } from "../types";

export const c7Math11: ChapterContent = {
  id: "c7-math-11",
  number: 11,
  title: "Exponents and Powers",
  isHtmlView: true,
  introduction:
    "Exponents and powers allow us to express very large or very small numbers in a compact and readable way. They follow specific mathematical laws that simplify calculation.",
  definitions: [
    { term: "Base", description: "The number that is repeatedly multiplied by itself." },
    { term: "Exponent / Power", description: "The number of times the base is multiplied by itself." },
    { term: "Standard Form", description: "Expressing a number as m × 10ⁿ where 1.0 ≤ m < 10.0 and n is an integer." },
  ],
  keyPoints: [
    "aᵐ × aⁿ = aᵐ⁺ⁿ (Product law for same base).",
    "aᵐ ÷ aⁿ = aᵐ⁻ⁿ (Quotient law for same base).",
    "(aᵐ)ⁿ = aᵐⁿ (Power of a power law).",
    "aᵐ × bᵐ = (ab)ᵐ and aᵐ ÷ bᵐ = (a/b)ᵐ.",
    "a⁰ = 1 for any non-zero base a.",
  ],
  formulas: [
    { name: "Product Law", formula: "a^m \\\\times a^n = a^{m+n}" },
    { name: "Quotient Law", formula: "a^m \\\\div a^n = a^{m-n}" },
    { name: "Power Law", formula: "(a^m)^n = a^{mn}" },
    { name: "Zero Exponent", formula: "a^0 = 1" },
  ],
  crux: [],
  exercises: [
    { id: "ex11-1", name: "Exercise 11.1", questions: [] },
    { id: "ex11-2", name: "Exercise 11.2", questions: [] },
    { id: "ex11-3", name: "Exercise 11.3", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #8E24AA; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(142, 36, 170, 0.05); border-left: 4px solid #8E24AA; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #8E24AA; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Exponents and Powers</div>
            <p class="content-text">In this chapter, we master exponential notation, laws of exponents, expanding expressions, prime factorization powers, and representing large numbers in standard scientific form.</p>
            <div class="point-box">
                <div class="point-item">Laws of Exponents: Simplify multiplication, division, and powers.</div>
                <div class="point-item">Zero Power: Any non-zero base raised to power 0 equals 1.</div>
                <div class="point-item">Standard Form: Write large numbers as m × 10ⁿ where 1 ≤ m < 10.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex11-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #8E24AA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #8E24AA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #BA68C8; font-weight: bold; }
            .sol-body b, .subpart-title { color: #8E24AA; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #BA68C8; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 2⁶</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 9³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 × 9 × 9</div>
                    <div class="sol-step"><span class="ans-highlight">= 729</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 11²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 11 × 11</div>
                    <div class="sol-step"><span class="ans-highlight">= 121</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 5⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 625</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Express the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 6 × 6 × 6 × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) t × t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= t²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) b × b × b × b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= b⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 5 × 5 × 7 × 7 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5² × 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) 2 × 2 × a × a</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² × a²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(vi) a × a × a × c × c × c × c × d</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= a³ × c⁴ × d</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express each of the following numbers using exponential notation:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 512</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 512 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 343</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 343 = 7 × 7 × 7</div>
                    <div class="sol-step"><span class="ans-highlight">= 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 729</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 729 = 3 × 3 × 3 × 3 × 3 × 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 3125</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 3125 = 5 × 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify the greater number, wherever possible, in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 4³ or 3⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4³ = 4 × 4 × 4 = 64</div>
                    <div class="sol-step">3⁴ = 3 × 3 × 3 × 3 = 81</div>
                    <div class="sol-step">Since 81 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁴ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 5³ or 3⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5³ = 5 × 5 × 5 = 125</div>
                    <div class="sol-step">3⁵ = 3 × 3 × 3 × 3 × 3 = 243</div>
                    <div class="sol-step">Since 243 > 125:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁵ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 2⁸ or 8²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2⁸ = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256</div>
                    <div class="sol-step">8² = 8 × 8 = 64</div>
                    <div class="sol-step">Since 256 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">2⁸ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 100² or 2¹⁰⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100² = 100 × 100 = 10000</div>
                    <div class="sol-step">2¹⁰ = 1024 ➔ 2¹⁰⁰ = (1024)¹⁰ >> 10000.</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰⁰ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) 2¹⁰ or 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2¹⁰ = 1024</div>
                    <div class="sol-step">10² = 100</div>
                    <div class="sol-step">Since 1024 > 100:</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰ is the greater number.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Express each of the following as a product of powers of their prime factors:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 648</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">648 = 2 × 2 × 2 × 3 × 3 × 3 × 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 2³ × 3⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 405</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">405 = 3 × 3 × 3 × 3 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁴ × 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 540</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">540 = 2 × 2 × 3 × 3 × 3 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² × 3³ × 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 3,600</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3600 = 2 × 2 × 2 × 2 × 3 × 3 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁴ × 3² × 5²</span></div>
                </div>
            </div>

            <!-- Question 6 & 7 & 8 -->
            <div class="sol-card">
                <div class="question-header">6, 7 & 8. Simplify and Compare Exponential Numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">6 (i) 2 × 10³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 × 1000 = <span class="ans-highlight">2000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">6 (ii) 7² × 2²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 49 × 4 = <span class="ans-highlight">196</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">6 (iii) 2³ × 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 × 5 = <span class="ans-highlight">40</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">6 (iv) 3 × 4⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3 × 256 = <span class="ans-highlight">768</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">6 (v) 0 × 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 0 × 100 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">7 (i) (-4)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -4 × -4 × -4 = <span class="ans-highlight">-64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">7 (ii) (-3) × (-2)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -3 × (-8) = <span class="ans-highlight">24</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">8 (i) Compare 2.7 × 10¹² and 1.5 × 10⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Comparing powers of 10: 10¹² > 10⁸</div>
                    <div class="sol-step"><span class="ans-highlight">2.7 × 10¹² > 1.5 × 10⁸</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex11-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #8E24AA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #8E24AA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #BA68C8; font-weight: bold; }
            .sol-body b, .subpart-title { color: #8E24AA; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #BA68C8; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Using laws of exponents, simplify and write answer in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 3² × 3⁴ × 3⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ × aⁿ = aᵐ⁺ⁿ:</div>
                    <div class="sol-step">= 3²⁺⁴⁺⁸</div>
                    <div class="sol-step"><span class="ans-highlight">= 3¹⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 6¹⁵ ÷ 6¹⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ ÷ aⁿ = aᵐ⁻ⁿ:</div>
                    <div class="sol-step">= 6¹⁵⁻¹⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) a³ × a²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= a³⁺²</div>
                    <div class="sol-step"><span class="ans-highlight">= a⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 7ˣ × 7²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 7ˣ⁺²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) (5²)³ ÷ 5³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5⁶ ÷ 5³ = 5⁶⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 5³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(vi) 2⁵ × 5⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ × bᵐ = (ab)ᵐ:</div>
                    <div class="sol-step">= (2 × 5)⁵</div>
                    <div class="sol-step"><span class="ans-highlight">= 10⁵</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Simplify and express each of the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) ${makeFrac('2³ × 3⁴ × 4','3 × 32','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('2³ × 3⁴ × 2²','3 × 2⁵','#BA68C8')} = ${makeFrac('2⁵ × 3⁴','2⁵ × 3','#BA68C8')}</div>
                    <div class="sol-step">= 2⁵⁻⁵ × 3⁴⁻¹ = 2⁰ × 3³ = 1 × 3³</div>
                    <div class="sol-step"><span class="ans-highlight">= 3³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) ((5²)³ × 5⁴) ÷ 5⁷</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5⁶ × 5⁴) ÷ 5⁷ = 5¹⁰ ÷ 5⁷ = 5¹⁰⁻⁷</div>
                    <div class="sol-step"><span class="ans-highlight">= 5³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 25⁴ ÷ 5³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5²)⁴ ÷ 5³ = 5⁸ ÷ 5³ = 5⁸⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) ${makeFrac('3 × 7² × 11⁸','21 × 11³','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('3 × 7² × 11⁸','7 × 3 × 11³','#BA68C8')} = 3¹⁻¹ × 7²⁻¹ × 11⁸⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 × 11⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) ${makeFrac('3⁷','3⁴ × 3³','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('3⁷','3⁷','#BA68C8')} = 3⁷⁻⁷ = 3⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(vi) 2⁰ + 3⁰ + 4⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 1 + 1 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">= 3</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) ${makeFrac('(2⁵)² × 7³','8³ × 7','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('2¹⁰ × 7³','(2³)³ × 7','#BA68C8')} = ${makeFrac('2¹⁰ × 7³','2⁹ × 7','#BA68C8')}</div>
                    <div class="sol-step">= 2¹⁰⁻⁹ × 7³⁻¹ = 2 × 7² = 2 × 49</div>
                    <div class="sol-step"><span class="ans-highlight">= 98</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) ${makeFrac('25 × 5² × t⁸','10³ × t⁴','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('5² × 5² × t⁸','(5 × 2)³ × t⁴','#BA68C8')} = ${makeFrac('5⁴ × t⁸','5³ × 2³ × t⁴','#BA68C8')}</div>
                    <div class="sol-step">= ${makeFrac('5⁴⁻³ × t⁸⁻⁴','8','#BA68C8')}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${makeFrac('5t⁴','8','#BA68C8')}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) ${makeFrac('3⁵ × 10⁵ × 25','5⁷ × 6⁵','#BA68C8')}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${makeFrac('3⁵ × (5 × 2)⁵ × 5²','5⁷ × (2 × 3)⁵','#BA68C8')} = ${makeFrac('3⁵ × 5⁵ × 2⁵ × 5²','5⁷ × 2⁵ × 3⁵','#BA68C8')}</div>
                    <div class="sol-step">= ${makeFrac('3⁵ × 5⁷ × 2⁵','3⁵ × 5⁷ × 2⁵','#BA68C8')} = 3⁰ × 5⁰ × 2⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex11-3": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #8E24AA; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #8E24AA; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #BA68C8; font-weight: bold; }
            .sol-body b, .subpart-title { color: #8E24AA; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Write the following numbers in expanded forms using powers of 10:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(a) 279404</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 × 10⁵ + 7 × 10⁴ + 9 × 10³ + 4 × 10² + 0 × 10¹ + 4 × 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(b) 3006194</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 × 10⁶ + 0 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 4 × 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(c) 2806196</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 × 10⁶ + 8 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 6 × 10⁰</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express the following numbers in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 5,00,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5 × 10⁷</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 70,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 × 10⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 3,18,65,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.1865 × 10⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 3,90,878</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.90878 × 10⁵</span></div>
                </div>
            </div>
        </div>
    \`,
  },
  mcqs: [
    { id: "c7m11-mcq-1", question: "What is the value of 2³?", options: ["6", "8", "9", "5"], correctAnswer: "b", explanation: "2³ = 2 × 2 × 2 = 8." },
    { id: "c7m11-mcq-2", question: "What is the value of any non-zero number raised to power 0 (a⁰)?", options: ["0", "a", "1", "10"], correctAnswer: "c", explanation: "By law of exponents, any non-zero number raised to power 0 equals 1." },
    { id: "c7m11-mcq-3", question: "Simplify: 5³ × 5⁴", options: ["5¹²", "5⁷", "25⁷", "5¹"], correctAnswer: "b", explanation: "Using product law aᵐ × aⁿ = aᵐ⁺ⁿ: 5³⁺⁴ = 5⁷." },
    { id: "c7m11-mcq-4", question: "Simplify: 7⁸ ÷ 7⁵", options: ["7³", "7¹³", "7⁴⁰", "1³"], correctAnswer: "a", explanation: "Using quotient law aᵐ ÷ aⁿ = aᵐ⁻ⁿ: 7⁸⁻⁵ = 7³." },
    { id: "c7m11-mcq-5", question: "Express 10000 in exponential base 10 form:", options: ["10²", "10³", "10⁴", "10⁵"], correctAnswer: "c", explanation: "10000 has 4 zeros, so it is 10⁴." },
    { id: "c7m11-mcq-6", question: "What is (-1)⁴ equal to?", options: ["-1", "1", "-4", "4"], correctAnswer: "b", explanation: "A negative number raised to an even power yields positive 1." },
    { id: "c7m11-mcq-7", question: "What is (-1)⁵ equal to?", options: ["-1", "1", "-5", "5"], correctAnswer: "a", explanation: "A negative number raised to an odd power yields -1." },
    { id: "c7m11-mcq-8", question: "Simplify: (2³)²", options: ["2⁵", "2⁶", "2⁹", "4⁶"], correctAnswer: "b", explanation: "Using power law (aᵐ)ⁿ = aᵐⁿ: 2³ˣ² = 2⁶." },
    { id: "c7m11-mcq-9", question: "Write 59000 in standard form:", options: ["59 × 10³", "5.9 × 10⁴", "0.59 × 10⁵", "5.9 × 10³"], correctAnswer: "b", explanation: "In standard scientific form, 59000 = 5.9 × 10⁴." },
    { id: "c7m11-mcq-10", question: "Which of the following is greater: 2³ or 3²?", options: ["2³", "3²", "Both are equal", "Cannot be determined"], correctAnswer: "b", explanation: "2³ = 8 and 3² = 9, so 3² is greater." }
  ]
};
`;

// Save Chapters 10 and 11
const contentDir = path.join(__dirname, 'data', 'content');
fs.writeFileSync(path.join(contentDir, 'c7-math-10.ts'), c7Math10Perfect, 'utf-8');
console.log("Updated c7-math-10.ts with separate lines for subparts and Solution:- !");

fs.writeFileSync(path.join(contentDir, 'c7-math-11.ts'), c7Math11Perfect, 'utf-8');
console.log("Updated c7-math-11.ts with separate lines for subparts and Solution:- !");
