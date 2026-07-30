import { ChapterContent } from "../types";

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
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FDC830; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(253, 200, 48, 0.05); border-left: 4px solid #FDC830; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FDC830; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
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
    `,
  htmlExercises: {
    "ex10-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FDC830; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FDC830; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FDC830; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FFE082; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FDC830; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
            .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 10px; background: #161625; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 5px 0; }
            th, td { border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: left; color: #e0e0e0; }
            th { background: rgba(253, 200, 48, 0.15); color: #FDC830; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Get the algebraic expressions in the following cases using variables, constants and arithmetic operations:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) Subtraction of z from y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= y - z</div>
                    <div class="sol-step"><span class="ans-highlight">= y - z</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) One-half of the sum of numbers x and y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of x and y = (x + y)</div>
                    <div class="sol-step">Taking one-half of the sum = <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">x + y</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">x + y</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) The number z multiplied by itself</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= z × z</div>
                    <div class="sol-step"><span class="ans-highlight">= z²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) One-fourth of the product of numbers p and q</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of p and q = (p × q) = pq</div>
                    <div class="sol-step">One-fourth of the product = <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">pq</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">pq</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) Numbers x and y, both squared and added</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Square of x = x², Square of y = y²</div>
                    <div class="sol-step">Adding both squared numbers = x² + y²</div>
                    <div class="sol-step"><span class="ans-highlight">= x² + y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) Number 5 added to three times the product of numbers m and n</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of m and n = mn</div>
                    <div class="sol-step">Three times the product = 3mn</div>
                    <div class="sol-step">Adding 5 = 3mn + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 3mn + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vii) Product of numbers y and z subtracted from 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of y and z = yz</div>
                    <div class="sol-step">Subtracting from 10 = 10 - yz</div>
                    <div class="sol-step"><span class="ans-highlight">= 10 - yz</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(viii) Sum of numbers a and b subtracted from their product</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(a) x - 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="200" height="90" viewBox="0 0 200 90">
                            <text x="100" y="25" fill="#FDC830" font-size="14" font-weight="bold" text-anchor="middle">x - 3</text>
                            <line x1="100" y1="30" x2="60" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <line x1="100" y1="30" x2="140" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <text x="60" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="140" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">-3</text>
                        </svg>
                    </div>
                    <div class="sol-step">Expression: x - 3</div>
                    <div class="sol-step">Terms: x, -3</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: x; -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(b) 1 + x + x²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="svg-container">
                        <svg width="260" height="110" viewBox="0 0 260 110">
                            <text x="130" y="25" fill="#FDC830" font-size="14" font-weight="bold" text-anchor="middle">1 + x + x²</text>
                            <line x1="130" y1="30" x2="50" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <line x1="130" y1="30" x2="130" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <line x1="130" y1="30" x2="210" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <text x="50" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">1</text>
                            <text x="130" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="210" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">x²</text>
                        </svg>
                    </div>
                    <div class="sol-step">Expression: 1 + x + x²</div>
                    <div class="sol-step">Terms: 1, x, x²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 1; x; x, x</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(c) y - y³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression: y - y³</div>
                    <div class="sol-step">Terms: y, -y³</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: y; -y, -y, -y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(d) 5xy² + 7x²y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression: 5xy² + 7x²y</div>
                    <div class="sol-step">Terms: 5xy², 7x²y</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 5, x, y, y; 7, x, x, y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(e) -ab + 2b² - 3a²</b></div>
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
                    <div class="table-responsive">
                        <table>
                            <tr><th>Sl.No.</th><th>Expression</th><th>Terms</th><th>Factors</th></tr>
                            <tr><td>(a)</td><td>-4x + 5</td><td>-4x, 5</td><td>-4, x; 5</td></tr>
                            <tr><td>(b)</td><td>-4x + 5y</td><td>-4x, 5y</td><td>-4, x; 5, y</td></tr>
                            <tr><td>(c)</td><td>5y + 3y²</td><td>5y, 3y²</td><td>5, y; 3, y, y</td></tr>
                            <tr><td>(d)</td><td>xy + 2x²y²</td><td>xy, 2x²y²</td><td>x, y; 2, x, x, y, y</td></tr>
                            <tr><td>(e)</td><td>pq + q</td><td>pq, q</td><td>p, q; q</td></tr>
                            <tr><td>(f)</td><td>1.2ab - 2.4b + 3.6a</td><td>1.2ab, -2.4b, 3.6a</td><td>1.2, a, b; -2.4, b; 3.6, a</td></tr>
                            <tr><td>(g)</td><td><div class="frac"><span class="num" style="border-bottom-color:#FFE082;">3</span><span class="den">4</span></div>x + <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num" style="border-bottom-color:#FFE082;">3</span><span class="den">4</span></div>x, <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num" style="border-bottom-color:#FFE082;">3</span><span class="den">4</span></div>, x; <div class="frac"><span class="num" style="border-bottom-color:#FFE082;">1</span><span class="den">4</span></div></td></tr>
                            <tr><td>(h)</td><td>0.1p² + 0.2q²</td><td>0.1p², 0.2q²</td><td>0.1, p, p; 0.2, q, q</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Identify numerical coefficients of terms (other than constants) in the following expressions:</div>
                <div class="sol-body">
                    <div class="table-responsive">
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
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. (a) Identify terms which contain x and give the coefficient of x:</div>
                <div class="sol-body">
                    <div class="table-responsive">
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
                    </div>

                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#FDC830;">4. (b) Identify terms which contain y² and give the coefficient of y²:</b></div>
                    <div class="table-responsive">
                        <table>
                            <tr><th>Sl.No.</th><th>Expression</th><th>Term with y²</th><th>Coefficient of y²</th></tr>
                            <tr><td>(i)</td><td>8 - xy²</td><td>-xy²</td><td>-x</td></tr>
                            <tr><td>(ii)</td><td>5y² + 7x</td><td>5y²</td><td>5</td></tr>
                            <tr><td>(iii)</td><td>2x²y - 15xy² + 7y²</td><td>-15xy², 7y²</td><td>-15x, 7</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Classify into monomials, binomials and trinomials:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 4y - 7z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 unlike terms (4y and -7z).</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has only 1 term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) x + y - xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 unlike terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Single constant term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) ab - a - b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) 5 - 3t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vii) 4p²q - 4pq²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 unlike terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(viii) 7mn</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 1 term.</div>
                    <div class="sol-step"><span class="ans-highlight">= Monomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ix) z² - 3z + 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(x) a² + b²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(xi) z² + z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 2 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Binomial</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(xii) 1 + x + x²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Expression has 3 terms.</div>
                    <div class="sol-step"><span class="ans-highlight">= Trinomial</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. State whether a given pair of terms is of like or unlike terms:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 1, 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both terms are constant numbers without variables.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) -7x, (<div class="frac"><span class="num" style="border-bottom-color:#FFE082;">5</span><span class="den">2</span></div>)x</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both terms have the exact same variable x.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) -29x, -29y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Variables are different (x and y).</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) 14xy, 42yx</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Algebraic factors are identical because xy = yx.</div>
                    <div class="sol-step"><span class="ans-highlight">= Like terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) 4m²p, 4mp²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Exponents of variables differ (m² vs m, p vs p²).</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) 12xz, 12x²z²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Exponents of variables differ.</div>
                    <div class="sol-step"><span class="ans-highlight">= Unlike terms</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Identify like terms in the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(a) Grouping like terms from list:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• Group 1: <span class="ans-highlight">-xy², 2xy²</span></div>
                    <div class="sol-step">• Group 2: <span class="ans-highlight">-4yx², 20x²y</span></div>
                    <div class="sol-step">• Group 3: <span class="ans-highlight">8x², -11x², -6x²</span></div>
                    <div class="sol-step">• Group 4: <span class="ans-highlight">7y, y</span></div>
                    <div class="sol-step">• Group 5: <span class="ans-highlight">-100x, 3x</span></div>
                    <div class="sol-step">• Group 6: <span class="ans-highlight">-11yx, 2xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(b) Grouping like terms from list:</b></div>
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
    `,
    "ex10-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FDC830; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FDC830; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FDC830; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Simplify combining like terms:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 21b - 32 + 7b - 20b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (21b + 7b - 20b) - 32</div>
                    <div class="sol-step">= b (21 + 7 - 20) - 32</div>
                    <div class="sol-step">= b (28 - 20) - 32 = b(8) - 32</div>
                    <div class="sol-step"><span class="ans-highlight">= 8b - 32</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) -z² + 13z² - 5z + 7z³ - 15z</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Arranging in descending powers:</div>
                    <div class="sol-step">= 7z³ + (-z² + 13z²) + (-5z - 15z)</div>
                    <div class="sol-step">= 7z³ + z²(-1 + 13) + z(-5 - 15)</div>
                    <div class="sol-step"><span class="ans-highlight">= 7z³ + 12z² - 20z</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) p - (p - q) - q - (q - p)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Opening brackets:</div>
                    <div class="sol-step">= p - p + q - q - q + p</div>
                    <div class="sol-step">= (p - p + p) + (q - q - q)</div>
                    <div class="sol-step"><span class="ans-highlight">= p - q</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) 3a - 2b - ab - (a - b + ab) + 3ab + b - a</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Opening brackets:</div>
                    <div class="sol-step">= 3a - 2b - ab - a + b - ab + 3ab + b - a</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (3a - a - a) + (-2b + b + b) + (-ab - ab + 3ab)</div>
                    <div class="sol-step">= a(3 - 1 - 1) + b(-2 + 1 + 1) + ab(-1 - 1 + 3)</div>
                    <div class="sol-step"><span class="ans-highlight">= a + ab</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) 5x²y - 5x² + 3yx² - 3y² + x² - y² + 8xy² - 3y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Grouping like terms:</div>
                    <div class="sol-step">= (5x²y + 3x²y) + (-5x² + x²) + (-3y² - y² - 3y²) + 8xy²</div>
                    <div class="sol-step">= x²y(5 + 3) + x²(-5 + 1) + y²(-3 - 1 - 3) + 8xy²</div>
                    <div class="sol-step"><span class="ans-highlight">= 8x²y - 4x² - 7y² + 8xy²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) (3y² + 5y - 4) - (8y - y² - 4)</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 3mn, -5mn, 8mn, -4mn</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3mn + (-5mn) + 8mn + (-4mn)</div>
                    <div class="sol-step">= mn (3 - 5 + 8 - 4) = mn (11 - 9)</div>
                    <div class="sol-step"><span class="ans-highlight">= 2mn</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) t - 8tz, 3tz - z, z - t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (t - 8tz) + (3tz - z) + (z - t)</div>
                    <div class="sol-step">= (t - t) + (-8tz + 3tz) + (-z + z)</div>
                    <div class="sol-step"><span class="ans-highlight">= -5tz</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) -7mn + 5, 12mn + 2, 9mn - 8, -2mn - 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-7mn + 12mn + 9mn - 2mn) + (5 + 2 - 8 - 3)</div>
                    <div class="sol-step">= mn (-7 + 12 + 9 - 2) + (7 - 11)</div>
                    <div class="sol-step"><span class="ans-highlight">= 12mn - 4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) a + b - 3, b - a + 3, a - b + 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (a - a + a) + (b + b - b) + (-3 + 3 + 3)</div>
                    <div class="sol-step"><span class="ans-highlight">= a + b + 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) 14x + 10y - 12xy - 13, 18 - 7x - 10y + 8xy, 4xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (14x - 7x) + (10y - 10y) + (-12xy + 8xy + 4xy) + (-13 + 18)</div>
                    <div class="sol-step"><span class="ans-highlight">= 7x + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) 5m - 7n, 3n - 4m + 2, 2m - 3mn - 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5m - 4m + 2m) + (-7n + 3n) - 3mn + (2 - 5)</div>
                    <div class="sol-step"><span class="ans-highlight">= 3m - 4n - 3mn - 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vii) 4x²y, -3xy², -5xy², 5x²y</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4x²y + 5x²y) + (-3xy² - 5xy²)</div>
                    <div class="sol-step"><span class="ans-highlight">= 9x²y - 8xy²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(viii) 3p²q² - 4pq + 5, -10p²q², 15 + 9pq + 7p²q²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3p²q² - 10p²q² + 7p²q²) + (-4pq + 9pq) + (5 + 15)</div>
                    <div class="sol-step"><span class="ans-highlight">= 5pq + 20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ix) ab - 4a, 4b - ab, 4a - 4b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (ab - ab) + (-4a + 4a) + (4b - 4b)</div>
                    <div class="sol-step"><span class="ans-highlight">= 0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(x) x² - y² - 1, y² - 1 - x², 1 - x² - y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (x² - x² - x²) + (-y² + y² - y²) + (-1 - 1 + 1)</div>
                    <div class="sol-step"><span class="ans-highlight">= -x² - y² - 1</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Subtract:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) -5y² from y²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= y² - (-5y²) = y² + 5y² = <span class="ans-highlight">6y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) 6xy from -12xy</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -12xy - 6xy = <span class="ans-highlight">-18xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) (a - b) from (a + b)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (a + b) - (a - b) = a + b - a + b = <span class="ans-highlight">2b</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) a(b - 5) from b(5 - a)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= b(5 - a) - a(b - 5)</div>
                    <div class="sol-step">= 5b - ab - ab + 5a = <span class="ans-highlight">5a + 5b - 2ab</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) -m² + 5mn from 4m² - 3mn + 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4m² - 3mn + 8) - (-m² + 5mn)</div>
                    <div class="sol-step">= 4m² - 3mn + 8 + m² - 5mn</div>
                    <div class="sol-step"><span class="ans-highlight">= 5m² - 8mn + 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vi) -x² + 10x - 5 from 5x - 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5x - 10) - (-x² + 10x - 5)</div>
                    <div class="sol-step">= 5x - 10 + x² - 10x + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= x² - 5x - 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(vii) 5a² - 7ab + 5b² from 3ab - 2a² - 2b²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3ab - 2a² - 2b²) - (5a² - 7ab + 5b²)</div>
                    <div class="sol-step">= 3ab - 2a² - 2b² - 5a² + 7ab - 5b²</div>
                    <div class="sol-step"><span class="ans-highlight">= 10ab - 7a² - 7b²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(viii) 4pq - 5q² - 3p² from 5p² + 3q² - pq</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(a) What should be added to x² + xy + y² to obtain 2x² + 3xy?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let required expression = P</div>
                    <div class="sol-step">P + (x² + xy + y²) = 2x² + 3xy</div>
                    <div class="sol-step">P = (2x² + 3xy) - (x² + xy + y²)</div>
                    <div class="sol-step">P = 2x² + 3xy - x² - xy - y²</div>
                    <div class="sol-step"><span class="ans-highlight">= x² + 2xy - y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(b) What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">5. What should be taken away from 3x² - 4y² + 5xy + 20 to obtain -x² - y² + 6xy + 20?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Required = (3x² - 4y² + 5xy + 20) - (-x² - y² + 6xy + 20)</div>
                    <div class="sol-step">= 3x² - 4y² + 5xy + 20 + x² + y² - 6xy - 20</div>
                    <div class="sol-step"><span class="ans-highlight">= 4x² - 3y² - xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">6. (a) From the sum of 3x - y + 11 and -y - 11, subtract 3x - y - 11:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum = (3x - y + 11) + (-y - 11) = 3x - 2y</div>
                    <div class="sol-step">Subtraction = (3x - 2y) - (3x - y - 11)</div>
                    <div class="sol-step">= 3x - 2y - 3x + y + 11</div>
                    <div class="sol-step"><span class="ans-highlight">= -y + 11</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">6. (b) From sum of 4 + 3x & 5 - 4x + 2x², subtract sum of 3x² - 5x & -x² + 2x + 5:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First Sum = (4 + 3x) + (5 - 4x + 2x²) = 2x² - x + 9</div>
                    <div class="sol-step">Second Sum = (3x² - 5x) + (-x² + 2x + 5) = 2x² - 3x + 5</div>
                    <div class="sol-step">Difference = (2x² - x + 9) - (2x² - 3x + 5)</div>
                    <div class="sol-step">= 2x² - x + 9 - 2x² + 3x - 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2x + 4</span></div>
                </div>
            </div>
        </div>
    `,
    "ex10-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FDC830; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FDC830; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FDC830; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FFE082; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. If m = 2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) m - 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 2 - 2 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) 3m - 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) 9 - 5m</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 9 - 5(2) = 9 - 10 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) 3m² - 2m - 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2)² - 2(2) - 7 = 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(v) (<div class="frac"><span class="num" style="border-bottom-color:#FFE082;">5m</span><span class="den">2</span></div>) - 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= (<div class="frac"><span class="num" style="border-bottom-color:#FFE082;">5 × 2</span><span class="den">2</span></div>) - 4 = (<div class="frac"><span class="num" style="border-bottom-color:#FFE082;">10</span><span class="den">2</span></div>) - 4 = 5 - 4 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. If p = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= 4(-2) + 7 = -8 + 7 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) -3p² + 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -3(-2)² + 4(-2) + 7 = -3(4) - 8 + 7 = -12 - 8 + 7 = <span class="ans-highlight">-13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) -2p³ - 3p² + 4p + 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -2(-2)³ - 3(-2)² + 4(-2) + 7 = -2(-8) - 3(4) - 8 + 7 = 16 - 12 - 8 + 7 = <span class="ans-highlight">3</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the value of the following expressions when x = -1:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(i) 2x - 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1) - 7 = -2 - 7 = <span class="ans-highlight">-9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(ii) -x + 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -(-1) + 2 = 1 + 2 = <span class="ans-highlight">3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iii) x² + 2x + 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-1)² + 2(-1) + 1 = 1 - 2 + 1 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(iv) 2x² - x - 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1)² - (-1) - 2 = 2(1) + 1 - 2 = 2 + 1 - 2 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 4 to 10 -->
            <div class="sol-card">
                <div class="question-header">4 to 10. Evaluating Expressions with Multiple Variables:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">4 (i) a² + b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (-2)² = 4 + 4 = <span class="ans-highlight">8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">4 (ii) a² + ab + b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (2)(-2) + (-2)² = 4 - 4 + 4 = <span class="ans-highlight">4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">4 (iii) a² - b² for a = 2, b = -2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² - (-2)² = 4 - 4 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">5 (i) 2a + 2b for a = 0, b = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0) + 2(-1) = 0 - 2 = <span class="ans-highlight">-2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">5 (ii) 2a² + b² + 1 for a = 0, b = -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0)² + (-1)² + 1 = 0 + 1 + 1 = <span class="ans-highlight">2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">8 (i) If z = 10, find z³ - 3(z - 10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (10)³ - 3(10 - 10) = 1000 - 3(0) = <span class="ans-highlight">1000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">8 (ii) If p = -10, find p² - 2p - 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-10)² - 2(-10) - 100 = 100 + 20 - 100 = <span class="ans-highlight">20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">9. Find value of a if 2x² + x - a = 5 when x = 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2(0)² + 0 - a = 5 ➔ -a = 5 ➔ <span class="ans-highlight">a = -5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">10. Simplify 2(a² + ab) + 3 - ab for a = 5, b = -3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2a² + 2ab + 3 - ab = 2a² + ab + 3</div>
                    <div class="sol-step">= 2(5)² + (5)(-3) + 3 = 2(25) - 15 + 3 = 50 - 15 + 3 = <span class="ans-highlight">38</span></div>
                </div>
            </div>
        </div>
    `,
    "ex10-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FDC830; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FDC830; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FFE082; font-weight: bold; }
            .sol-body b, .subpart-title { color: #FDC830; }
            .landscape-table-box { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; border: 2px solid rgba(253, 200, 48, 0.4); border-radius: 12px; background: #161625; padding: 12px; }
            .scroll-hint { font-size: 0.85em; color: #FDC830; margin-bottom: 10px; font-weight: bold; text-align: center; background: rgba(253, 200, 48, 0.1); padding: 6px; border-radius: 6px; }
            table.wide-table { min-width: 700px; width: 100%; border-collapse: collapse; }
            table.wide-table th, table.wide-table td { border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 14px; text-align: center; color: #e0e0e0; font-size: 0.95em; }
            table.wide-table th { background: rgba(253, 200, 48, 0.2); color: #FDC830; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Observe segment digit patterns and calculate required line segments for n = 5, 10, 100:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FDC830;">(a) Pattern for digit 6 (Expression: 5n + 1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• For n = 5 digits: (5 × 5) + 1 = 25 + 1 = <span class="ans-highlight">26 segments</span></div>
                    <div class="sol-step">• For n = 10 digits: (5 × 10) + 1 = 50 + 1 = <span class="ans-highlight">51 segments</span></div>
                    <div class="sol-step">• For n = 100 digits: (5 × 100) + 1 = 500 + 1 = <span class="ans-highlight">501 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(b) Pattern for digit 4 (Expression: 3n + 1)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• For n = 5 digits: (3 × 5) + 1 = 15 + 1 = <span class="ans-highlight">16 segments</span></div>
                    <div class="sol-step">• For n = 10 digits: (3 × 10) + 1 = 30 + 1 = <span class="ans-highlight">31 segments</span></div>
                    <div class="sol-step">• For n = 100 digits: (3 × 100) + 1 = 300 + 1 = <span class="ans-highlight">301 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FDC830;">(c) Pattern for digit 8 (Expression: 5n + 2)</b></div>
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
                    <!-- Scrollable Table Section -->
                    <div style="width: 100%; box-sizing: border-box; overflow-x: scroll; -webkit-overflow-scrolling: touch; touch-action: pan-x; display: block; margin: 15px 0; border: 2px solid rgba(253, 200, 48, 0.5); border-radius: 12px; background: #161625; padding: 12px;">
                        <div style="font-size: 0.85em; color: #FDC830; margin-bottom: 12px; font-weight: bold; text-align: center; background: rgba(253, 200, 48, 0.15); padding: 8px; border-radius: 6px;">
                            ↔ Scroll/Swipe horizontally to view full table
                        </div>
                        <table style="min-width: 680px; width: max-content; border-collapse: collapse; display: table;">
                            <thead>
                                <tr style="background: rgba(253, 200, 48, 0.25);">
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">S.No.</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">Expression</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">1st (n=1)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">2nd (n=2)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">3rd (n=3)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">4th (n=4)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">5th (n=5)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">10th (n=10)</th>
                                    <th style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; color: #FDC830; text-align: center; white-space: nowrap;">100th (n=100)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(i)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>2n - 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">1</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">3</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">7</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">9</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">19</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">199</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(ii)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>3n + 2</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">8</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">11</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">14</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">17</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">32</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">302</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(iii)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>4n + 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">9</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">13</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">17</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">21</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">41</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">401</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(iv)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>7n + 20</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">27</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">34</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">41</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">48</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">55</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">90</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">720</span></td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">(v)</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><b>n² + 1</b></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">2</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">5</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">10</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;">17</td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">26</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">101</span></td>
                                    <td style="border: 1px solid rgba(253, 200, 48, 0.3); padding: 10px 12px; text-align: center;"><span class="ans-highlight">10001</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Step-by-Step Vertical Breakdown Cards -->
                    <div class="sol-step" style="margin-top: 25px;"><b style="color:#FDC830; font-size: 1.1em;">Step-wise Solution Breakdown for Each Expression:</b></div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(i) Expression: 2n - 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 2(1) - 1 = 1</div>
                        <div class="sol-step">• 2nd term (n=2): 2(2) - 1 = 3</div>
                        <div class="sol-step">• 3rd term (n=3): 2(3) - 1 = 5</div>
                        <div class="sol-step">• 4th term (n=4): 2(4) - 1 = 7</div>
                        <div class="sol-step">• 5th term (n=5): 2(5) - 1 = 9</div>
                        <div class="sol-step">• 10th term (n=10): 2(10) - 1 = 19</div>
                        <div class="sol-step">• 100th term (n=100): 2(100) - 1 = 200 - 1 = <span class="ans-highlight">199</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(ii) Expression: 3n + 2</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 3(1) + 2 = 5</div>
                        <div class="sol-step">• 2nd term (n=2): 3(2) + 2 = 8</div>
                        <div class="sol-step">• 3rd term (n=3): 3(3) + 2 = 11</div>
                        <div class="sol-step">• 4th term (n=4): 3(4) + 2 = 14</div>
                        <div class="sol-step">• 5th term (n=5): 3(5) + 2 = 15 + 2 = <span class="ans-highlight">17</span></div>
                        <div class="sol-step">• 10th term (n=10): 3(10) + 2 = 30 + 2 = <span class="ans-highlight">32</span></div>
                        <div class="sol-step">• 100th term (n=100): 3(100) + 2 = 300 + 2 = <span class="ans-highlight">302</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(iii) Expression: 4n + 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 4(1) + 1 = 5</div>
                        <div class="sol-step">• 2nd term (n=2): 4(2) + 1 = 9</div>
                        <div class="sol-step">• 3rd term (n=3): 4(3) + 1 = 13</div>
                        <div class="sol-step">• 4th term (n=4): 4(4) + 1 = 17</div>
                        <div class="sol-step">• 5th term (n=5): 4(5) + 1 = 20 + 1 = <span class="ans-highlight">21</span></div>
                        <div class="sol-step">• 10th term (n=10): 4(10) + 1 = 40 + 1 = <span class="ans-highlight">41</span></div>
                        <div class="sol-step">• 100th term (n=100): 4(100) + 1 = 400 + 1 = <span class="ans-highlight">401</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(iv) Expression: 7n + 20</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 7(1) + 20 = 27</div>
                        <div class="sol-step">• 2nd term (n=2): 7(2) + 20 = 34</div>
                        <div class="sol-step">• 3rd term (n=3): 7(3) + 20 = 41</div>
                        <div class="sol-step">• 4th term (n=4): 7(4) + 20 = 48</div>
                        <div class="sol-step">• 5th term (n=5): 7(5) + 20 = 35 + 20 = <span class="ans-highlight">55</span></div>
                        <div class="sol-step">• 10th term (n=10): 7(10) + 20 = 70 + 20 = <span class="ans-highlight">90</span></div>
                        <div class="sol-step">• 100th term (n=100): 7(100) + 20 = 700 + 20 = <span class="ans-highlight">720</span></div>
                    </div>

                    <div style="background: rgba(253, 200, 48, 0.05); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 10px; padding: 14px; margin-top: 15px;">
                        <div class="sol-step"><b style="color:#FDC830;">(v) Expression: n² + 1</b></div>
                        <div class="sol-step">Solution:-</div>
                        <div class="sol-step">• 1st term (n=1): 1² + 1 = 2</div>
                        <div class="sol-step">• 2nd term (n=2): 2² + 1 = 5</div>
                        <div class="sol-step">• 3rd term (n=3): 3² + 1 = 10</div>
                        <div class="sol-step">• 4th term (n=4): 4² + 1 = 17</div>
                        <div class="sol-step">• 5th term (n=5): 5² + 1 = 25 + 1 = <span class="ans-highlight">26</span></div>
                        <div class="sol-step">• 10th term (n=10): 10² + 1 = 100 + 1 = <span class="ans-highlight">101</span></div>
                        <div class="sol-step">• 100th term (n=100): 100² + 1 = 10000 + 1 = <span class="ans-highlight">10001</span></div>
                    </div>
                </div>
            </div>
        </div>
    `,
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
