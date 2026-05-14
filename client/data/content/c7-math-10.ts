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
            .section-title { color: #FFD600; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(255, 214, 0, 0.05); border-left: 4px solid #FFD600; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #FFD600; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
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
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 214, 0, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 214, 0, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 214, 0, 0.2); border-left: 4px solid #FFD600; color: #FFD600; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FFD600; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FFD600; font-weight: bold; }
            .ans-highlight { color: #FFF176; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(255, 214, 0, 0.4); text-align: center; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; background: #161625; }
            th, td { border: 1px solid rgba(255, 214, 0, 0.3); padding: 10px; text-align: left; color: #e0e0e0; }
            th { background: rgba(255, 214, 0, 0.1); color: #FFF176; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Get the algebraic expressions in the following cases using variables, constants and arithmetic operations.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) Subtraction of z from y: <span class="ans-highlight">y - z</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) One-half of the sum of numbers x and y: <span class="ans-highlight"><div class="frac"><span class="num">x + y</span><span class="den">2</span></div></span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) The number z multiplied by itself: <span class="ans-highlight">z²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) One-fourth of the product of numbers p and q: <span class="ans-highlight"><div class="frac"><span class="num">pq</span><span class="den">4</span></div></span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) Numbers x and y both squared and added: <span class="ans-highlight">x² + y²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) Number 5 added to three times the product of numbers m and n: <span class="ans-highlight">3mn + 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) Product of numbers y and z subtracted from 10: <span class="ans-highlight">10 - yz</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) Sum of numbers a and b subtracted from their product: <span class="ans-highlight">ab - (a + b)</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ix) Divide the sum of numbers x + y by z: <span class="ans-highlight"><div class="frac"><span class="num">x + y</span><span class="den">z</span></div></span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (x) Subtract product of numbers p and q from their sum: <span class="ans-highlight">(p + q) - pq</span></div>
                </div>
            </div>

            <!-- Q2(i) -->
            <div class="sol-card">
                <div class="question-header">2. (i) Identify the terms and their factors in the following expressions. Show the terms and factors by tree diagrams.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) <span class="label-theme">x - 3</span></div>
                    <div class="diagram-container">
                        <svg width="150" height="80" viewBox="0 0 150 80">
                            <text x="75" y="20" fill="#fff" font-weight="bold" text-anchor="middle">x - 3</text>
                            <line x1="75" y1="25" x2="40" y2="50" stroke="#FFD600" stroke-width="1.5" />
                            <line x1="75" y1="25" x2="110" y2="50" stroke="#FFD600" stroke-width="1.5" />
                            <text x="40" y="70" fill="#FFF176" text-anchor="middle" font-size="12">x</text>
                            <text x="110" y="70" fill="#FFF176" text-anchor="middle" font-size="12">-3</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> (b) <span class="label-theme">1 + x + x²</span></div>
                    <div class="diagram-container">
                        <svg width="240" height="120" viewBox="0 0 240 120">
                            <text x="120" y="20" fill="#fff" font-weight="bold" text-anchor="middle">1 + x + x²</text>
                            <line x1="120" y1="25" x2="40" y2="50" stroke="#673AB7" />
                            <line x1="120" y1="25" x2="120" y2="50" stroke="#673AB7" />
                            <line x1="120" y1="25" x2="200" y2="50" stroke="#673AB7" />
                            <text x="40" y="70" fill="#B39DDB" text-anchor="middle">1</text>
                            <text x="120" y="70" fill="#B39DDB" text-anchor="middle">x</text>
                            <text x="200" y="70" fill="#B39DDB" text-anchor="middle">x²</text>
                            <line x1="200" y1="75" x2="180" y2="100" stroke="#fff" stroke-dasharray="2" />
                            <line x1="200" y1="75" x2="220" y2="100" stroke="#fff" stroke-dasharray="2" />
                            <text x="180" y="115" fill="#fff" font-size="10" text-anchor="middle">x</text>
                            <text x="220" y="115" fill="#fff" font-size="10" text-anchor="middle">x</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> (c) <span class="label-theme">y - y³</span></div>
                    <div class="diagram-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <text x="100" y="20" fill="#fff" font-weight="bold" text-anchor="middle">y - y³</text>
                            <line x1="100" y1="25" x2="60" y2="50" stroke="#673AB7" />
                            <line x1="100" y1="25" x2="140" y2="50" stroke="#673AB7" />
                            <text x="60" y="70" fill="#B39DDB" text-anchor="middle">y</text>
                            <text x="140" y="70" fill="#B39DDB" text-anchor="middle">-y³</text>
                            <line x1="140" y1="75" x2="110" y2="100" stroke="#fff" stroke-dasharray="2" />
                            <line x1="140" y1="75" x2="140" y2="100" stroke="#fff" stroke-dasharray="2" />
                            <line x1="140" y1="75" x2="170" y2="100" stroke="#fff" stroke-dasharray="2" />
                            <text x="110" y="115" fill="#fff" font-size="10" text-anchor="middle">-1, y</text>
                            <text x="140" y="115" fill="#fff" font-size="10" text-anchor="middle">y</text>
                            <text x="170" y="115" fill="#fff" font-size="10" text-anchor="middle">y</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> (d) <span class="label-theme">5xy² + 7x²y</span></div>
                    <div class="diagram-container">
                        <svg width="300" height="140" viewBox="0 0 300 140">
                            <text x="150" y="20" fill="#fff" font-weight="bold" text-anchor="middle">5xy² + 7x²y</text>
                            <line x1="150" y1="25" x2="80" y2="55" stroke="#673AB7" />
                            <line x1="150" y1="25" x2="220" y2="55" stroke="#673AB7" />
                            <text x="80" y="75" fill="#B39DDB" text-anchor="middle">5xy²</text>
                            <text x="220" y="75" fill="#B39DDB" text-anchor="middle">7x²y</text>
                            <text x="80" y="95" fill="#fff" font-size="10" text-anchor="middle">5, x, y, y</text>
                            <text x="220" y="95" fill="#fff" font-size="10" text-anchor="middle">7, x, x, y</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> (e) <span class="label-theme">-ab + 2b² - 3a²</span></div>
                    <div class="diagram-container">
                        <svg width="300" height="140" viewBox="0 0 300 140">
                            <text x="150" y="20" fill="#fff" font-weight="bold" text-anchor="middle">-ab + 2b² - 3a²</text>
                            <line x1="150" y1="25" x2="60" y2="55" stroke="#673AB7" />
                            <line x1="150" y1="25" x2="150" y2="55" stroke="#673AB7" />
                            <line x1="150" y1="25" x2="240" y2="55" stroke="#673AB7" />
                            <text x="60" y="75" fill="#B39DDB" text-anchor="middle">-ab</text>
                            <text x="150" y="75" fill="#B39DDB" text-anchor="middle">2b²</text>
                            <text x="240" y="75" fill="#B39DDB" text-anchor="middle">-3a²</text>
                            <text x="60" y="95" fill="#fff" font-size="9" text-anchor="middle">-1, a, b</text>
                            <text x="150" y="95" fill="#fff" font-size="9" text-anchor="middle">2, b, b</text>
                            <text x="240" y="95" fill="#fff" font-size="9" text-anchor="middle">-3, a, a</text>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Q2(ii) -->
            <div class="sol-card">
                <div class="question-header">2. (ii) Identify terms and factors in the expressions given below:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Expression</th><th>Terms</th><th>Factors</th></tr>
                        <tr><td>-4x + 5</td><td>-4x, 5</td><td>-4, x; 5</td></tr>
                        <tr><td>-4x + 5y</td><td>-4x, 5y</td><td>-4, x; 5, y</td></tr>
                        <tr><td>5y + 3y²</td><td>5y, 3y²</td><td>5, y; 3, y, y</td></tr>
                        <tr><td>xy + 2x²y²</td><td>xy, 2x²y²</td><td>x, y; 2, x, x, y, y</td></tr>
                        <tr><td>pq + q</td><td>pq, q</td><td>p, q; q</td></tr>
                        <tr><td>1.2ab - 2.4b + 3.6a</td><td>1.2ab, -2.4b, 3.6a</td><td>1.2, a, b; -2.4, b; 3.6, a</td></tr>
                        <tr><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>x + <div class="frac"><span class="num">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>x, <div class="frac"><span class="num">1</span><span class="den">4</span></div></td><td><div class="frac"><span class="num">3</span><span class="den">4</span></div>, x; <div class="frac"><span class="num">1</span><span class="den">4</span></div></td></tr>
                        <tr><td>0.1p² + 0.2q²</td><td>0.1p², 0.2q²</td><td>0.1, p, p; 0.2, q, q</td></tr>
                    </table>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Identify the numerical coefficients of terms (other than constants) in the following expressions:</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Expression</th><th>Terms (other than constants)</th><th>Numerical Coefficient</th></tr>
                        <tr><td>5 - 3t²</td><td>-3t²</td><td>-3</td></tr>
                        <tr><td>1 + t + t² + t³</td><td>t, t², t³</td><td>1, 1, 1</td></tr>
                        <tr><td>x + 2xy + 3y</td><td>x, 2xy, 3y</td><td>1, 2, 3</td></tr>
                        <tr><td>100m + 1000n</td><td>100m, 1000n</td><td>100, 1000</td></tr>
                        <tr><td>-p²q² + 7pq</td><td>-p²q², 7pq</td><td>-1, 7</td></tr>
                        <tr><td>1.2a + 0.8b</td><td>1.2a, 0.8b</td><td>1.2, 0.8</td></tr>
                        <tr><td>3.14 r²</td><td>3.14 r²</td><td>3.14</td></tr>
                        <tr><td>2(l + b) = 2l + 2b</td><td>2l, 2b</td><td>2, 2</td></tr>
                        <tr><td>0.1y + 0.01y²</td><td>0.1y, 0.01y²</td><td>0.1, 0.01</td></tr>
                    </table>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. (a) Identify terms which contain x and give the coefficient of x.</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Expression</th><th>Term with x</th><th>Coefficient of x</th></tr>
                        <tr><td>y²x + y</td><td>y²x</td><td>y²</td></tr>
                        <tr><td>13y² - 8yx</td><td>-8yx</td><td>-8y</td></tr>
                        <tr><td>x + y + 2</td><td>x</td><td>1</td></tr>
                        <tr><td>5 + z + zx</td><td>zx</td><td>z</td></tr>
                        <tr><td>1 + x + xy</td><td>x, xy</td><td>1, y</td></tr>
                        <tr><td>12xy² + 25</td><td>12xy²</td><td>12y²</td></tr>
                        <tr><td>7x + xy²</td><td>7x, xy²</td><td>7, y²</td></tr>
                    </table>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. (b) Identify terms which contain y² and give the coefficient of y².</div>
                <div class="sol-body">
                    <table>
                        <tr><th>Expression</th><th>Term with y²</th><th>Coefficient of y²</th></tr>
                        <tr><td>8 - xy²</td><td>-xy²</td><td>-x</td></tr>
                        <tr><td>5y² + 7x</td><td>5y²</td><td>5</td></tr>
                        <tr><td>2x²y - 15xy² + 7y²</td><td>-15xy², 7y²</td><td>-15x, 7</td></tr>
                    </table>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Classify into monomials, binomials and trinomials.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 4y - 7z : <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) y² : <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) x + y - xy : <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 100 : <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) ab - a - b : <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) 5 - 3t : <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) 4p²q - 4pq² : <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) 7mn : <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ix) z² - 3z + 8 : <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (x) a² + b² : <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xi) z² + z : <span class="ans-highlight">Binomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xii) 1 + x + x² : <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xiii) 3 - 4x + 7xy² : <span class="ans-highlight">Trinomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xiv) <div class="frac"><span class="num">5</span><span class="den">7</span></div> : <span class="ans-highlight">Monomial</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xv) -50x² : <span class="ans-highlight">Monomial</span></div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. State whether a given pair of terms is of like or unlike terms.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 1, 100 : <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) -7x, <div class="frac"><span class="num">5</span><span class="den">2</span></div>x : <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) -29x, -29y : <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 14xy, 42yx : <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 4m²p, 4mp² : <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) 12xz, 12x²z² : <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) 5xy, -4xy : <span class="ans-highlight">Like terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) <div class="frac"><span class="num">3</span><span class="den">7</span></div>xy², <div class="frac"><span class="num">7</span><span class="den">3</span></div>x²y : <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ix) 3x, 7y : <span class="ans-highlight">Unlike terms</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (x) -4x, -19x : <span class="ans-highlight">Like terms</span></div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. Identify like terms in the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Groups of like terms:</div>
                    <div class="sol-step">1. <span class="ans-highlight">-xy², 2xy²</span></div>
                    <div class="sol-step">2. <span class="ans-highlight">-4yx², 20x²y</span></div>
                    <div class="sol-step">3. <span class="ans-highlight">8x², -11x², -6x²</span></div>
                    <div class="sol-step">4. <span class="ans-highlight">7y, y</span></div>
                    <div class="sol-step">5. <span class="ans-highlight">-100x, 3x</span></div>
                    <div class="sol-step">6. <span class="ans-highlight">-11yx, 2xy</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> (b) Groups of like terms:</div>
                    <div class="sol-step">1. <span class="ans-highlight">10pq, -7qp, 78qp</span></div>
                    <div class="sol-step">2. <span class="ans-highlight">7p, 2405p</span></div>
                    <div class="sol-step">3. <span class="ans-highlight">8q, -100q</span></div>
                    <div class="sol-step">4. <span class="ans-highlight">-p²q², 12q²p²</span></div>
                    <div class="sol-step">5. <span class="ans-highlight">-23, 41</span></div>
                    <div class="sol-step">6. <span class="ans-highlight">-5p², 701p²</span></div>
                    <div class="sol-step">7. <span class="ans-highlight">13p²q, qp²</span></div>
                </div>
            </div>
        </div>
        `,
        "ex10-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 214, 0, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 214, 0, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 214, 0, 0.2); border-left: 4px solid #FFD600; color: #FFD600; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FFD600; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FFD600; font-weight: bold; }
            .ans-highlight { color: #FFF176; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Simplify combining like terms:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 21b - 32 + 7b - 20b = (21 + 7 - 20)b - 32 = <span class="ans-highlight">8b - 32</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) -z² + 13z² - 5z + 7z³ - 15z = 7z³ + (13 - 1)z² - (5 + 15)z = <span class="ans-highlight">7z³ + 12z² - 20z</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) p - (p - q) - q - (q - p) = p - p + q - q - q + p = <span class="ans-highlight">p - q</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 3a - 2b - ab - (a - b + ab) + 3ab + b - a = 3a - 2b - ab - a + b - ab + 3ab + b - a = (3 - 1 - 1)a + (-2 + 1 + 1)b + (-1 - 1 + 3)ab = a + 0b + ab = <span class="ans-highlight">a + ab</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 5x²y - 5x² + 3yx² - 3y² + x² - y² + 8xy² - 3y² = (5 + 3)x²y + (-5 + 1)x² + (-3 - 1 - 3)y² + 8xy² = <span class="ans-highlight">8x²y - 4x² - 7y² + 8xy²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) (3y² + 5y - 4) - (8y - y² - 4) = 3y² + 5y - 4 - 8y + y² + 4 = (3 + 1)y² + (5 - 8)y + (-4 + 4) = <span class="ans-highlight">4y² - 3y</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) (3x²y - 4xy + 7y²) - (-3x²y + 4xy - 7y) = 3x²y - 4xy + 7y² + 3x²y - 4xy + 7y = (3 + 3)x²y + (-4 - 4)xy + 7y² + 7y = <span class="ans-highlight">6x²y - 8xy + 7y² + 7y</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Add:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 3mn + (-5mn) + 8mn + (-4mn) = (3 - 5 + 8 - 4)mn = <span class="ans-highlight">2mn</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) (t - 8tz) + (3tz - z) + (z - t) = (t - t) + (-8 + 3)tz + (-z + z) = 0 - 5tz + 0 = <span class="ans-highlight">-5tz</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) (-7mn + 5) + (12mn + 2) + (9mn - 8) + (-2mn - 3) = (-7 + 12 + 9 - 2)mn + (5 + 2 - 8 - 3) = <span class="ans-highlight">12mn - 4</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) (a + b - 3) + (b - a + 3) + (a - b + 3) = (a - a + a) + (b + b - b) + (-3 + 3 + 3) = <span class="ans-highlight">a + b + 3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) (14x + 10y - 12xy - 13) + (18 - 7x - 10y + 8xy) + 4xy = (14 - 7)x + (10 - 10)y + (-12 + 8 + 4)xy + (-13 + 18) = 7x + 0y + 0xy + 5 = <span class="ans-highlight">7x + 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) (5m - 7n) + (3n - 4m + 2) + (2m - 3mn - 5) = (5 - 4 + 2)m + (-7 + 3)n - 3mn + (2 - 5) = <span class="ans-highlight">3m - 4n - 3mn - 3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) 4x²y + (-3xy²) + (-5xy²) + 5x²y = (4 + 5)x²y + (-3 - 5)xy² = <span class="ans-highlight">9x²y - 8xy²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) (3p²q² - 4pq + 5) + (-10p²q²) + (15 + 9pq + 7p²q²) = (3 - 10 + 7)p²q² + (-4 + 9)pq + (5 + 15) = 0p²q² + 5pq + 20 = <span class="ans-highlight">5pq + 20</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ix) (ab - 4a) + (4b - ab) + (4a - 4b) = (ab - ab) + (-4a + 4a) + (4b - 4b) = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (x) (x² - y² - 1) + (y² - 1 - x²) + (1 - x² - y²) = (x² - x² - x²) + (-y² + y² - y²) + (-1 - 1 + 1) = <span class="ans-highlight">-x² - y² - 1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (xi) (4xy² + 5x²y + 3) + (3 - xy² - x²y) = (4 - 1)xy² + (5 - 1)x²y + (3 + 3) = <span class="ans-highlight">3xy² + 4x²y + 6</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Subtract:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) y² - (-5y²) = y² + 5y² = <span class="ans-highlight">6y²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) -12xy - 6xy = <span class="ans-highlight">-18xy</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) (a + b) - (a - b) = a + b - a + b = <span class="ans-highlight">2b</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) b(5 - a) - a(b - 5) = 5b - ab - ab + 5a = <span class="ans-highlight">5a + 5b - 2ab</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) (4m² - 3mn + 8) - (-m² + 5mn) = 4m² - 3mn + 8 + m² - 5mn = <span class="ans-highlight">5m² - 8mn + 8</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) (5x - 10) - (-x² + 10x - 5) = 5x - 10 + x² - 10x + 5 = <span class="ans-highlight">x² - 5x - 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) (3ab - 2a² - 2b²) - (5a² - 7ab + 5b²) = 3ab - 2a² - 2b² - 5a² + 7ab - 5b² = <span class="ans-highlight">10ab - 7a² - 7b²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) (5p² + 3q² - pq) - (4pq - 5q² - 3p²) = 5p² + 3q² - pq - 4pq + 5q² + 3p² = <span class="ans-highlight">8p² + 8q² - 5pq</span></div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. (a) What should be added to x² + xy + y² to obtain 2x² + 3xy?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Required expression = (2x² + 3xy) - (x² + xy + y²)</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2x² + 3xy - x² - xy - y² = (2 - 1)x² + (3 - 1)xy - y² = <span class="ans-highlight">x² + 2xy - y²</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. (b) What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Required expression = (2a + 8b + 10) - (-3a + 7b + 16)</div>
                    <div class="sol-step"><span class="step-marker">=></span> 2a + 8b + 10 + 3a - 7b - 16 = (2 + 3)a + (8 - 7)b + (10 - 16) = <span class="ans-highlight">5a + b - 6</span></div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. What should be taken away from 3x² - 4y² + 5xy + 20 to obtain -x² - y² + 6xy + 20?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Required expression = (3x² - 4y² + 5xy + 20) - (-x² - y² + 6xy + 20)</div>
                    <div class="sol-step"><span class="step-marker">=></span> 3x² - 4y² + 5xy + 20 + x² + y² - 6xy - 20 = (3 + 1)x² + (-4 + 1)y² + (5 - 6)xy + (20 - 20) = <span class="ans-highlight">4x² - 3y² - xy</span></div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. (a) From the sum of 3x - y + 11 and -y - 11, subtract 3x - y - 11.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Sum = (3x - y + 11) + (-y - 11) = 3x - 2y</div>
                    <div class="sol-step"><span class="step-marker">=></span> Subtraction = (3x - 2y) - (3x - y - 11) = 3x - 2y - 3x + y + 11 = <span class="ans-highlight">-y + 11</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. (b) From the sum of 4 + 3x and 5 - 4x + 2x², subtract the sum of 3x² - 5x and -x² + 2x + 5.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Sum 1 = (4 + 3x) + (5 - 4x + 2x²) = 2x² - x + 9</div>
                    <div class="sol-step"><span class="step-marker">=></span> Sum 2 = (3x² - 5x) + (-x² + 2x + 5) = 2x² - 3x + 5</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result = (2x² - x + 9) - (2x² - 3x + 5) = 2x² - x + 9 - 2x² + 3x - 5 = <span class="ans-highlight">2x + 4</span></div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. Subtract 3x - 4y + 7 from the sum of terms 4x + 14xy + 8 & 3xy - 7x + 5y.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> Sum = (4x + 14xy + 8) + (3xy - 7x + 5y) = -3x + 17xy + 5y + 8</div>
                    <div class="sol-step"><span class="step-marker">=></span> Result = (-3x + 17xy + 5y + 8) - (3x - 4y + 7) = -3x + 17xy + 5y + 8 - 3x + 4y - 7 = <span class="ans-highlight">-6x + 17xy + 9y + 1</span></div>
                </div>
            </div>
        </div>
        `,
        "ex10-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 214, 0, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 214, 0, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 214, 0, 0.2); border-left: 4px solid #FFD600; color: #FFD600; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FFD600; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FFD600; font-weight: bold; }
            .ans-highlight { color: #FFF176; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. If m = 2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) m - 2 = 2 - 2 = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 3m - 5 = 3(2) - 5 = 6 - 5 = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 9 - 5m = 9 - 5(2) = 9 - 10 = <span class="ans-highlight">-1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 3m² - 2m - 7 = 3(2)² - 2(2) - 7 = 3(4) - 4 - 7 = 12 - 11 = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) <div class="frac"><span class="num">5m</span><span class="den">2</span></div> - 4 = <div class="frac"><span class="num">5(2)</span><span class="den">2</span></div> - 4 = 5 - 4 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. If p = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 4p + 7 = 4(-2) + 7 = -8 + 7 = <span class="ans-highlight">-1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) -3p² + 4p + 7 = -3(-2)² + 4(-2) + 7 = -3(4) - 8 + 7 = -12 - 1 = <span class="ans-highlight">-13</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) -2p³ - 3p² + 4p + 7 = -2(-2)³ - 3(-2)² + 4(-2) + 7 = -2(-8) - 3(4) - 8 + 7 = 16 - 12 - 1 = <span class="ans-highlight">3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 3p³ + 2p² - 15p - 2 = 3(-2)³ + 2(-2)² - 15(-2) - 2 = 3(-8) + 2(4) + 30 - 2 = -24 + 8 + 30 - 2 = <span class="ans-highlight">12</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) -2p³ + 3p² + 13p - 2 = -2(-2)³ + 3(-2)² + 13(-2) - 2 = -2(-8) + 3(4) - 26 - 2 = 16 + 12 - 28 = <span class="ans-highlight">0</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the value of the following expressions, when x = -1:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 2x - 7 = 2(-1) - 7 = -2 - 7 = <span class="ans-highlight">-9</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) -x + 2 = -(-1) + 2 = 1 + 2 = <span class="ans-highlight">3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) x² + 2x + 1 = (-1)² + 2(-1) + 1 = 1 - 2 + 1 = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 2x² - x - 2 = 2(-1)² - (-1) - 2 = 2(1) + 1 - 2 = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. If a = 2, b = -2, find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) a² + b² = (2)² + (-2)² = 4 + 4 = <span class="ans-highlight">8</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) a² + ab + b² = (2)² + (2)(-2) + (-2)² = 4 - 4 + 4 = <span class="ans-highlight">4</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) a² - b² = (2)² - (-2)² = 4 - 4 = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) a³ - b³ = (2)³ - (-2)³ = 8 - (-8) = 8 + 8 = <span class="ans-highlight">16</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) a² - ab + b² = (2)² - (2)(-2) + (-2)² = 4 + 4 + 4 = <span class="ans-highlight">12</span></div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. When a = 0, b = -1, find the value of given expressions:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 2a + 2b = 2(0) + 2(-1) = <span class="ans-highlight">-2</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 2a² + b² + 1 = 2(0)² + (-1)² + 1 = 0 + 1 + 1 = <span class="ans-highlight">2</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 2a²b + 2ab² + ab = 2(0)²(-1) + 2(0)(-1)² + (0)(-1) = 0 + 0 + 0 = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) a² + ab + 2 = (0)² + (0)(-1) + 2 = <span class="ans-highlight">2</span></div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. Simplify the expressions and find the value if x is equal to 2:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) x + 7 + 4(x - 5) = x + 7 + 4x - 20 = 5x - 13. For x=2: 5(2) - 13 = <span class="ans-highlight">-3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 3(x + 2) + 5x - 7 = 3x + 6 + 5x - 7 = 8x - 1. For x=2: 8(2) - 1 = <span class="ans-highlight">15</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 6x + 5(x - 2) = 6x + 5x - 10 = 11x - 10. For x=2: 11(2) - 10 = <span class="ans-highlight">12</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 4(2x - 1) + 3x + 11 = 8x - 4 + 3x + 11 = 11x + 7. For x=2: 11(2) + 7 = <span class="ans-highlight">29</span></div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. Simplify these expressions and find their values if x = 3, a = -1, b = -2:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 3x - 5 - x + 9 = 2x + 4. For x=3: 2(3) + 4 = <span class="ans-highlight">10</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 2 - 8x + 4x + 4 = -4x + 6. For x=3: -4(3) + 6 = <span class="ans-highlight">-6</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 3a + 5 - 8a + 1 = -5a + 6. For a=-1: -5(-1) + 6 = <span class="ans-highlight">11</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 10 - 3b - 4 - 5b = -8b + 6. For b=-2: -8(-2) + 6 = <span class="ans-highlight">22</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 2a - 2b - 4 - 5 + a = 3a - 2b - 9. For a=-1, b=-2: 3(-1) - 2(-2) - 9 = -3 + 4 - 9 = <span class="ans-highlight">-8</span></div>
                </div>
            </div>

            <!-- Q8 -->
            <div class="sol-card">
                <div class="question-header">8. (i) If z = 10, find the value of z³ - 3(z - 10).</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> z³ - 3(z - 10) = (10)³ - 3(10 - 10) = 1000 - 3(0) = <span class="ans-highlight">1000</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. (ii) If p = -10, find the value of p² - 2p - 100.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> p² - 2p - 100 = (-10)² - 2(-10) - 100 = 100 + 20 - 100 = <span class="ans-highlight">20</span></div>
                </div>
            </div>

            <!-- Q9 -->
            <div class="sol-card">
                <div class="question-header">9. What should be the value of a if the value of 2x² + x - a equals to 5, when x = 0?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> 2x² + x - a = 5</div>
                    <div class="sol-step"><span class="step-marker">=></span> Substitute x = 0: 2(0)² + 0 - a = 5</div>
                    <div class="sol-step"><span class="step-marker">=></span> -a = 5 => <span class="ans-highlight">a = -5</span></div>
                </div>
            </div>

            <!-- Q10 -->
            <div class="sol-card">
                <div class="question-header">10. Simplify the expression and find its value when a = 5 and b = -3: 2(a² + ab) + 3 - ab.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> 2a² + 2ab + 3 - ab = 2a² + ab + 3</div>
                    <div class="sol-step"><span class="step-marker">=></span> Substitute a=5, b=-3: 2(5)² + (5)(-3) + 3 = 2(25) - 15 + 3 = 50 - 12 = <span class="ans-highlight">38</span></div>
                </div>
            </div>

            <!-- Q11 -->
            <div class="sol-card">
                <div class="question-header">11. Find x if 3a² - 7x + 5a + 2 equals to -5 when a = 0.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> 3a² - 7x + 5a + 2 = -5</div>
                    <div class="sol-step"><span class="step-marker">=></span> Substitute a = 0: 3(0)² - 7x + 5(0) + 2 = -5</div>
                    <div class="sol-step"><span class="step-marker">=></span> -7x + 2 = -5 => -7x = -7 => <span class="ans-highlight">x = 1</span></div>
                </div>
            </div>
        </div>
        `,
        "ex10-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 214, 0, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 214, 0, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 214, 0, 0.2); border-left: 4px solid #FFD600; color: #FFD600; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FFD600; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FFD600; font-weight: bold; }
            .ans-highlight { color: #FFF176; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(255, 214, 0, 0.4); text-align: center; }
            
            /* Enhanced Scroll Table Styles */
            .table-container { width: 100%; overflow-x: scroll !important; -webkit-overflow-scrolling: touch; margin: 10px 0; border-radius: 8px; border: 1px solid rgba(255, 214, 0, 0.2); touch-action: pan-x; }
            .scroll-table { width: 100%; min-width: 700px; border-collapse: collapse; }
            .scroll-table th, .scroll-table td { border: 1px solid rgba(255, 214, 0, 0.3); padding: 12px 8px; text-align: center; color: #e0e0e0; font-size: 0.9em; }
            .scroll-table th { background: rgba(255, 214, 0, 0.15); color: #FFF176; }
            
            @keyframes bounceHint {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(-10px); }
            }
            .scroll-hint { text-align: center; font-size: 0.85em; color: #FFF176; margin-top: 10px; font-weight: 500; animation: bounceHint 2s infinite; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Observe the patterns of digits made from line segments of equal length. Find how many segments are required to form 5, 10, 100 digits of the kind 6, 4, 8.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">Digit 6</span> (Pattern: <span class="ans-highlight">5n + 1</span>):</div>
                    <div class="sol-step">For n = 5: 5(5) + 1 = <span class="ans-highlight">26 segments</span></div>
                    <div class="sol-step">For n = 10: 5(10) + 1 = <span class="ans-highlight">51 segments</span></div>
                    <div class="sol-step">For n = 100: 5(100) + 1 = <span class="ans-highlight">501 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <span class="label-theme">Digit 4</span> (Pattern: <span class="ans-highlight">3n + 1</span>):</div>
                    <div class="sol-step">For n = 5: 3(5) + 1 = <span class="ans-highlight">16 segments</span></div>
                    <div class="sol-step">For n = 10: 3(10) + 1 = <span class="ans-highlight">31 segments</span></div>
                    <div class="sol-step">For n = 100: 3(100) + 1 = <span class="ans-highlight">301 segments</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><span class="step-marker">=></span> <span class="label-theme">Digit 8</span> (Pattern: <span class="ans-highlight">5n + 2</span>):</div>
                    <div class="sol-step">For n = 5: 5(5) + 2 = <span class="ans-highlight">27 segments</span></div>
                    <div class="sol-step">For n = 10: 5(10) + 2 = <span class="ans-highlight">52 segments</span></div>
                    <div class="sol-step">For n = 100: 5(100) + 2 = <span class="ans-highlight">502 segments</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Use the given algebraic expression to complete the table of number pattern:</div>
                <div class="sol-body" style="background: #000; padding: 5px;">
                    
                    <style>
                        .compact-table { width: 100%; border-collapse: collapse; background: #161625; table-layout: fixed; margin: 0; box-sizing: border-box; border: 1px solid rgba(255, 214, 0, 0.4); }
                        .compact-table th, .compact-table td { border: 1px solid rgba(103, 58, 183, 0.3); padding: 8px 1px; text-align: center; color: #fff; font-size: 10px; overflow: hidden; white-space: nowrap; }
                        .compact-table th { background: rgba(103, 58, 183, 0.2); color: #B39DDB; font-weight: bold; font-size: 9px; }
                        .col-sno { width: 9%; }
                        .col-expr { width: 21%; text-align: left !important; padding-left: 4px !important; }
                        .col-term { width: 10%; }
                        .col-last { width: 10%; }
                        .expr-text { color: #673AB7; font-weight: bold; }
                        .ans-text { color: #B39DDB; font-weight: bold; }
                    </style>

                    <table class="compact-table">
                        <thead>
                            <tr>
                                <th class="col-sno">S.N.</th>
                                <th class="col-expr">Expression</th>
                                <th class="col-term">1st</th>
                                <th class="col-term">2nd</th>
                                <th class="col-term">3rd</th>
                                <th class="col-term">4th</th>
                                <th class="col-term">5th</th>
                                <th class="col-term">10th</th>
                                <th class="col-last">100th</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(i)</td>
                                <td class="expr-text">2n - 1</td>
                                <td>1</td>
                                <td>3</td>
                                <td>5</td>
                                <td>7</td>
                                <td>9</td>
                                <td>19</td>
                                <td class="ans-text">199</td>
                            </tr>
                            <tr>
                                <td>(ii)</td>
                                <td class="expr-text">3n + 2</td>
                                <td>5</td>
                                <td>8</td>
                                <td>11</td>
                                <td>14</td>
                                <td class="ans-text">17</td>
                                <td class="ans-text">32</td>
                                <td class="ans-text">302</td>
                            </tr>
                            <tr>
                                <td>(iii)</td>
                                <td class="expr-text">4n + 1</td>
                                <td>5</td>
                                <td>9</td>
                                <td>13</td>
                                <td>17</td>
                                <td class="ans-text">21</td>
                                <td class="ans-text">41</td>
                                <td class="ans-text">401</td>
                            </tr>
                            <tr>
                                <td>(iv)</td>
                                <td class="expr-text">7n + 20</td>
                                <td>27</td>
                                <td>34</td>
                                <td>41</td>
                                <td>48</td>
                                <td class="ans-text">55</td>
                                <td class="ans-text">90</td>
                                <td class="ans-text">720</td>
                            </tr>
                            <tr>
                                <td>(v)</td>
                                <td class="expr-text">n² + 1</td>
                                <td>2</td>
                                <td>5</td>
                                <td>10</td>
                                <td>17</td>
                                <td class="ans-text">26</td>
                                <td class="ans-text">101</td>
                                <td>10,001</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style="text-align: center; font-size: 10px; color: #673AB7; margin-top: 10px; font-style: italic; opacity: 0.8;">
                        * Optimized Full-Width View
                    </div>
                </div>
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
