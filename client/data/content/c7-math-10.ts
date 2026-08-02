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
            .frac .num { border-bottom: 1.5px solid #FFE082; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
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
                    <div class="sol-step">(i) Subtraction of z from y</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Subtracting z from y means y minus z.</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = y - z</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) One-half of the sum of numbers x and y</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of x and y = (x + y)</div>
                    <div class="sol-step">Taking half of this sum = <div class="frac"><span class="num">x + y</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Expression = <div class="frac"><span class="num">x + y</span><span class="den">2</span></div> (or <div class="frac"><span class="num">1</span><span class="den">2</span></div>(x + y))</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) The number z multiplied by itself</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiplying z by z = z &times; z</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = z²</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) One-fourth of the product of numbers p and q</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of p and q = p &times; q = pq</div>
                    <div class="sol-step">Taking one-fourth of the product = <div class="frac"><span class="num">pq</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Expression = <div class="frac"><span class="num">pq</span><span class="den">4</span></div> (or <div class="frac"><span class="num">1</span><span class="den">4</span></div>pq)</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(v) Numbers x and y both squared and added</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Square of x = x², Square of y = y²</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = x² + y²</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(vi) Number 5 added to three times the product of numbers m and n</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of m and n = mn</div>
                    <div class="sol-step">3 times product = 3mn</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = 3mn + 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(vii) Product of numbers y and z subtracted from 10</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of y and z = yz</div>
                    <div class="sol-step">Subtracting yz from 10 = 10 - yz</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = 10 - yz</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(viii) Sum of numbers a and b subtracted from their product</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Product of a and b = ab</div>
                    <div class="sol-step">Sum of a and b = (a + b)</div>
                    <div class="sol-step"><span class="ans-highlight">Expression = ab - (a + b)</span></div>
                </div>
            </div>

            <!-- Question 2 (i) -->
            <div class="sol-card">
                <div class="question-header">2. (i) Identify the terms and their factors in the following expressions using tree diagrams:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) x - 3</b></div>
                    <div class="svg-container">
                        <svg width="200" height="90" viewBox="0 0 200 90">
                            <text x="100" y="25" fill="#FDC830" font-size="14" font-weight="bold" text-anchor="middle">x - 3</text>
                            <line x1="100" y1="30" x2="60" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <line x1="100" y1="30" x2="140" y2="60" stroke="#FDC830" stroke-width="2"/>
                            <text x="60" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">x</text>
                            <text x="140" y="80" fill="#FFE082" font-size="14" font-weight="bold" text-anchor="middle">-3</text>
                        </svg>
                    </div>
                    <div class="sol-step">Terms: x, -3</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: x; -3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 1 + x + x²</b></div>
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
                    <div class="sol-step">Terms: 1, x, x²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 1; x; x, x</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) y - y³</b></div>
                    <div class="sol-step">Terms: y, -y³</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: y; -1, y, y, y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 5xy² + 7x²y</b></div>
                    <div class="sol-step">Terms: 5xy², 7x²y</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: 5, x, y, y; 7, x, x, y</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) -ab + 2b² - 3a²</b></div>
                    <div class="sol-step">Terms: -ab, 2b², -3a²</div>
                    <div class="sol-step"><span class="ans-highlight">Factors: -1, a, b; 2, b, b; -3, a, a</span></div>
                </div>
            </div>

            <!-- Question 2 (ii) -->
            <div class="sol-card">
                <div class="question-header">2. (ii) Identify terms and factors in the expressions given below:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table>
                            <tr><th>S.No.</th><th>Expression</th><th>Terms</th><th>Factors</th></tr>
                            <tr><td>(a)</td><td>-4x + 5</td><td>-4x, 5</td><td>-4, x; 5</td></tr>
                            <tr><td>(b)</td><td>-4x + 5y</td><td>-4x, 5y</td><td>-4, x; 5, y</td></tr>
                            <tr><td>(c)</td><td>5y + 3y²</td><td>5y, 3y²</td><td>5, y; 3, y, y</td></tr>
                            <tr><td>(d)</td><td>xy + 2x²y²</td><td>xy, 2x²y²</td><td>x, y; 2, x, x, y, y</td></tr>
                            <tr><td>(e)</td><td>pq + q</td><td>pq, q</td><td>p, q; q</td></tr>
                            <tr><td>(f)</td><td>1.2ab - 2.4b + 3.6a</td><td>1.2ab, -2.4b, 3.6a</td><td>1.2, a, b; -2.4, b; 3.6, a</td></tr>
                            <tr><td>(g)</td><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>x + <div class="frac"><span class="num">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>x, <div class="frac"><span class="num">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>, x; <div class="frac"><span class="num">1</span><span class="den">4</span></div></td></tr>
                            <tr><td>(h)</td><td>0.1p² + 0.2q²</td><td>0.1p², 0.2q²</td><td>0.1, p, p; 0.2, q, q</td></tr>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Identify the numerical coefficients of terms (other than constants) in the following expressions:</div>
                <div class="sol-body">
                    <div class="table-responsive">
                        <table>
                            <tr><th>S.No.</th><th>Expression</th><th>Terms (with variables)</th><th>Coefficients</th></tr>
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
                            <tr><th>S.No.</th><th>Expression</th><th>Term with x</th><th>Coefficient of x</th></tr>
                            <tr><td>(i)</td><td>y²x + y</td><td>y²x</td><td>y²</td></tr>
                            <tr><td>(ii)</td><td>13y² - 8yx</td><td>-8yx</td><td>-8y</td></tr>
                            <tr><td>(iii)</td><td>x + y + 2</td><td>x</td><td>1</td></tr>
                            <tr><td>(iv)</td><td>5 + z + zx</td><td>zx</td><td>z</td></tr>
                            <tr><td>(v)</td><td>1 + x + xy</td><td>x, xy</td><td>1, y</td></tr>
                            <tr><td>(vi)</td><td>12xy² + 25</td><td>12xy²</td><td>12y²</td></tr>
                            <tr><td>(vii)</td><td>7x + xy²</td><td>7x, xy²</td><td>7, y²</td></tr>
                        </table>
                    </div>

                    <div class="sol-step" style="margin-top: 20px;"><b>4. (b) Identify terms which contain y² and give the coefficient of y²:</b></div>
                    <div class="table-responsive">
                        <table>
                            <tr><th>S.No.</th><th>Expression</th><th>Term with y²</th><th>Coefficient of y²</th></tr>
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
                    <div class="sol-step">(i) 4y - 7z &rArr; <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step">(ii) y² &rArr; <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step">(iii) x + y - xy &rArr; <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step">(iv) 100 &rArr; <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step">(v) ab - a - b &rArr; <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step">(vi) 5 - 3t &rArr; <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step">(vii) 4p²q - 4pq² &rArr; <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step">(viii) 7mn &rArr; <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step">(ix) z² - 3z + 8 &rArr; <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step">(x) a² + b² &rArr; <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step">(xi) z² + z &rArr; <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step">(xii) 1 + x + x² &rArr; <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step">(xiii) 3 - 4x + 7xy² &rArr; <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step">(xiv) <div class="frac"><span class="num">5</span><span class="den">7</span></div> &rArr; <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step">(xv) -50x⁷ &rArr; <span class="ans-highlight">Monomial</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. State whether a given pair of terms is of like or unlike terms:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) 1, 100 &rArr; <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step">(ii) -7x, <div class="frac"><span class="num">5</span><span class="den">2</span></div>x &rArr; <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step">(iii) -29x, -29y &rArr; <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step">(iv) 14xy, 42yx &rArr; <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step">(v) 4m²p, 4mp² &rArr; <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step">(vi) 12xz, 12x²z² &rArr; <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step">(vii) 5xy, -4xy &rArr; <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step">(viii) <div class="frac"><span class="num">3</span><span class="den">7</span></div>xy², <div class="frac"><span class="num">7</span><span class="den">3</span></div>x²y &rArr; <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step">(ix) 3x, 7y &rArr; <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step">(x) -4x, -19x &rArr; <span class="ans-highlight">Like terms</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Identify like terms in the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Grouping like terms:</b></div>
                    <div class="sol-step">• Group 1: <span class="ans-highlight">-xy², 2xy²</span></div>
                    <div class="sol-step">• Group 2: <span class="ans-highlight">-4yx², 20x²y</span></div>
                    <div class="sol-step">• Group 3: <span class="ans-highlight">8x², -11x², -6x²</span></div>
                    <div class="sol-step">• Group 4: <span class="ans-highlight">7y, y</span></div>
                    <div class="sol-step">• Group 5: <span class="ans-highlight">-100x, 3x</span></div>
                    <div class="sol-step">• Group 6: <span class="ans-highlight">-11yx, 2xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Grouping like terms:</b></div>
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
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FFE082; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. If m = 2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) m - 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 2 - 2 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) 3m - 5</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) 9 - 5m</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 9 - 5(2) = 9 - 10 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) 3m² - 2m - 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= 3(2)² - 2(2) - 7 = 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(v) <div class="frac"><span class="num">5m</span><span class="den">2</span></div> - 4</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting m = 2:</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5 &times; 2</span><span class="den">2</span></div> - 4 = 5 - 4 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. If p = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) 4p + 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= 4(-2) + 7 = -8 + 7 = <span class="ans-highlight">-1</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) -3p² + 4p + 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -3(-2)² + 4(-2) + 7 = -3(4) - 8 + 7 = -12 - 8 + 7 = <span class="ans-highlight">-13</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) -2p³ - 3p² + 4p + 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -2(-2)³ - 3(-2)² + 4(-2) + 7 = -2(-8) - 3(4) - 8 + 7 = 16 - 12 - 8 + 7 = <span class="ans-highlight">3</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) 3p³ + 2p² - 15p - 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= 3(-2)³ + 2(-2)² - 15(-2) - 2 = 3(-8) + 2(4) + 30 - 2 = -24 + 8 + 30 - 2 = <span class="ans-highlight">12</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(v) -2p³ + 3p² + 13p - 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Substituting p = -2:</div>
                    <div class="sol-step">= -2(-8) + 3(4) + 13(-2) - 2 = 16 + 12 - 26 - 2 = <span class="ans-highlight">0</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the value of the following expressions, when x = -1:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) 2x - 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1) - 7 = -2 - 7 = <span class="ans-highlight">-9</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) -x + 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -(-1) + 2 = 1 + 2 = <span class="ans-highlight">3</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) x² + 2x + 1</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-1)² + 2(-1) + 1 = 1 - 2 + 1 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) 2x² - x - 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(-1)² - (-1) - 2 = 2(1) + 1 - 2 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. If a = 2, b = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) a² + b²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (-2)² = 4 + 4 = <span class="ans-highlight">8</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) a² + ab + b²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² + (2)(-2) + (-2)² = 4 - 4 + 4 = <span class="ans-highlight">4</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) a² - b²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² - (-2)² = 4 - 4 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) a³ - b³</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)³ - (-2)³ = 8 - (-8) = 8 + 8 = <span class="ans-highlight">16</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(v) a² - ab + b²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2)² - (2)(-2) + (-2)² = 4 + 4 + 4 = <span class="ans-highlight">12</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. When a = 0, b = -1, find the value of given expressions:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) 2a + 2b</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0) + 2(-1) = 0 - 2 = <span class="ans-highlight">-2</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) 2a² + b² + 1</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0)² + (-1)² + 1 = 0 + 1 + 1 = <span class="ans-highlight">2</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) 2a²b + 2ab² + ab</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2(0)²(-1) + 2(0)(-1)² + (0)(-1) = 0 + 0 + 0 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) a² + ab + 2</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (0)² + (0)(-1) + 2 = <span class="ans-highlight">2</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Simplify the expressions and find the value if x is equal to 2:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) x + 7 + 4(x - 5)</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= x + 7 + 4x - 20 = 5x - 13</div>
                    <div class="sol-step">Substitute x = 2: = 5(2) - 13 = 10 - 13 = <span class="ans-highlight">-3</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) 3(x + 2) + 5x - 7</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3x + 6 + 5x - 7 = 8x - 1</div>
                    <div class="sol-step">Substitute x = 2: = 8(2) - 1 = 16 - 1 = <span class="ans-highlight">15</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) 6x + 5(x - 2)</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 6x + 5x - 10 = 11x - 10</div>
                    <div class="sol-step">Substitute x = 2: = 11(2) - 10 = 22 - 10 = <span class="ans-highlight">12</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) 4(2x - 1) + 3x + 11</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8x - 4 + 3x + 11 = 11x + 7</div>
                    <div class="sol-step">Substitute x = 2: = 11(2) + 7 = 22 + 7 = <span class="ans-highlight">29</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Simplify these expressions and find their values if x = 3, a = -1, b = -2:</div>
                <div class="sol-body">
                    <div class="sol-step">(i) 3x - 5 - x + 9</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2x + 4 &rArr; 2(3) + 4 = 6 + 4 = <span class="ans-highlight">10</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(ii) 2 - 8x + 4x + 4</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 6 - 4x &rArr; 6 - 4(3) = 6 - 12 = <span class="ans-highlight">-6</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iii) 3a + 5 - 8a + 1</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -5a + 6 &rArr; -5(-1) + 6 = 5 + 6 = <span class="ans-highlight">11</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(iv) 10 - 3b - 4 - 5b</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 6 - 8b &rArr; 6 - 8(-2) = 6 + 16 = <span class="ans-highlight">22</span></div>

                    <div class="sol-step" style="margin-top: 15px;">(v) 2a - 2b - 4 - 5 + a</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3a - 2b - 9 &rArr; 3(-1) - 2(-2) - 9 = -3 + 4 - 9 = <span class="ans-highlight">-8</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Evaluation problems:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) If z = 10, find the value of z³ - 3(z - 10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (10)³ - 3(10 - 10) = 1000 - 3(0)</div>
                    <div class="sol-step"><span class="ans-highlight">= 1000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) If p = -10, find the value of p² - 2p - 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-10)² - 2(-10) - 100 = 100 + 20 - 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 20</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. What should be the value of a if the value of 2x² + x - a equals to 5, when x = 0?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Given expression: 2x² + x - a = 5</div>
                    <div class="sol-step">Substitute x = 0:</div>
                    <div class="sol-step">2(0)² + 0 - a = 5</div>
                    <div class="sol-step">0 + 0 - a = 5</div>
                    <div class="sol-step">-a = 5 &rArr; a = -5</div>
                    <div class="sol-step"><span class="ans-highlight">Answer: a = -5</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. Simplify the expression and find its value when a = 5 and b = -3: 2(a² + ab) + 3 - ab</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First, simplify the expression:</div>
                    <div class="sol-step">= 2(a² + ab) + 3 - ab</div>
                    <div class="sol-step">= 2a² + 2ab + 3 - ab</div>
                    <div class="sol-step">= 2a² + ab + 3</div>
                    <div class="sol-step" style="margin-top: 10px;">Now substitute a = 5 and b = -3:</div>
                    <div class="sol-step">= 2(5)² + (5)(-3) + 3</div>
                    <div class="sol-step">= 2(25) - 15 + 3</div>
                    <div class="sol-step">= 50 - 15 + 3 = 38</div>
                    <div class="sol-step"><span class="ans-highlight">Answer: Simplified = 2a² + ab + 3, Value = 38</span></div>
                </div>
            </div>
        </div>
        `,
  },
  examples: [],
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
