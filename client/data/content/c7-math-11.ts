import { ChapterContent } from "../types";

export const c7Math11: ChapterContent = {
    id: "c7-math-11",
    number: 11,
    title: "Exponents and Powers",
    isHtmlView: true,
    introduction: "Exponents and powers allow us to express very large or very small numbers in a compact and readable way. They follow specific mathematical laws that simplify calculation.",
    definitions: [
        { term: "Base", definition: "The number that is being multiplied by itself." },
        { term: "Exponent", definition: "The number of times the base is multiplied by itself." },
        { term: "Standard Form", definition: "A way to write very large numbers as a product of a number between 1 and 10 and a power of 10." }
    ],
    keyPoints: [
        "a^m × a^n = a^(m+n)",
        "a^m ÷ a^n = a^(m-n)",
        "(a^m)^n = a^(mn)",
        "a^m × b^m = (ab)^m",
        "a^0 = 1 (for any non-zero a)."
    ],
    formulas: [
        { name: "Product Law", formula: "a^m × a^n = a^(m+n)" },
        { name: "Quotient Law", formula: "a^m ÷ a^n = a^(m-n)" },
        { name: "Power of a Power", formula: "(a^m)^n = a^(mn)" }
    ],
    crux: [],
    exercises: [
        { id: "ex11-1", name: "Exercise 11.1", questions: [] },
        { id: "ex11-2", name: "Exercise 11.2", questions: [] },
        { id: "ex11-3", name: "Exercise 11.3", questions: [] }
    ],
    htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF4081; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(255, 64, 129, 0.05); border-left: 4px solid #FF4081; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #FF4081; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Master the language of large numbers and simplify complex expressions using exponential laws.</p>
            <div class="point-box">
                <div class="point-item">Base and Exponent are the core components.</div>
                <div class="point-item">Anything to the power of zero is 1.</div>
                <div class="point-item">Standard form makes reading millions and billions easy.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex11-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 64, 129, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 64, 129, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 64, 129, 0.2); border-left: 4px solid #FF4081; color: #FF4081; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FF4081; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FF4081; font-weight: bold; }
            .ans-highlight { color: #F06292; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">2⁶</span> = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 = <span class="ans-highlight">64</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">9³</span> = 9 &times; 9 &times; 9 = <span class="ans-highlight">729</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">11²</span> = 11 &times; 11 = <span class="ans-highlight">121</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">5⁴</span> = 5 &times; 5 &times; 5 &times; 5 = <span class="ans-highlight">625</span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Express the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 6 &times; 6 &times; 6 &times; 6 = <span class="ans-highlight">6⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) t &times; t = <span class="ans-highlight">t²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) b &times; b &times; b &times; b = <span class="ans-highlight">b⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 5 &times; 5 &times; 7 &times; 7 &times; 7 = <span class="ans-highlight">5² &times; 7³</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 2 &times; 2 &times; a &times; a = <span class="ans-highlight">2² &times; a²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) a &times; a &times; a &times; c &times; c &times; c &times; c &times; d = <span class="ans-highlight">a³ &times; c⁴ &times; d</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Express each of the following numbers using exponential notation:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">512</span> = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 = <span class="ans-highlight">2⁹</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">343</span> = 7 &times; 7 &times; 7 = <span class="ans-highlight">7³</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">729</span> = 3 &times; 3 &times; 3 &times; 3 &times; 3 &times; 3 = <span class="ans-highlight">3⁶</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">3125</span> = 5 &times; 5 &times; 5 &times; 5 &times; 5 = <span class="ans-highlight">5⁵</span></div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify the greater number, wherever possible, in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">4³ or 3⁴</span>: 4³ = 64, 3⁴ = 81. Since 81 > 64, <span class="ans-highlight">3⁴</span> is greater.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">5³ or 3⁵</span>: 5³ = 125, 3⁵ = 243. Since 243 > 125, <span class="ans-highlight">3⁵</span> is greater.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">2⁸ or 8²</span>: 2⁸ = 256, 8² = 64. Since 256 > 64, <span class="ans-highlight">2⁸</span> is greater.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">100² or 2¹⁰⁰</span>: 100² = 10,000. 2¹⁰⁰ is a very large number. Clearly, <span class="ans-highlight">2¹⁰⁰</span> is greater.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) <span class="label-theme">2¹⁰ or 10²</span>: 2¹⁰ = 1024, 10² = 100. Since 1024 > 100, <span class="ans-highlight">2¹⁰</span> is greater.</div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Express each of the following as product of powers of their prime factors:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">648</span> = 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 3 &times; 3 = <span class="ans-highlight">2³ &times; 3⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">405</span> = 3 &times; 3 &times; 3 &times; 3 &times; 5 = <span class="ans-highlight">3⁴ &times; 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">540</span> = 2 &times; 2 &times; 3 &times; 3 &times; 3 &times; 5 = <span class="ans-highlight">2² &times; 3³ &times; 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">3600</span> = 2 &times; 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 5 &times; 5 = <span class="ans-highlight">2⁴ &times; 3² &times; 5²</span></div>
                </div>
            </div>

            <!-- Q6 -->
            <div class="sol-card">
                <div class="question-header">6. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 2 &times; 10³ = 2 &times; 1000 = <span class="ans-highlight">2000</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 7² &times; 2² = 49 &times; 4 = <span class="ans-highlight">196</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 2³ &times; 5 = 8 &times; 5 = <span class="ans-highlight">40</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 3 &times; 4⁴ = 3 &times; 256 = <span class="ans-highlight">768</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 0 &times; 10² = 0 &times; 100 = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) 5² &times; 3³ = 25 &times; 27 = <span class="ans-highlight">675</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vii) 2⁴ &times; 3² = 16 &times; 9 = <span class="ans-highlight">144</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (viii) 3² &times; 10⁴ = 9 &times; 10000 = <span class="ans-highlight">90000</span></div>
                </div>
            </div>

            <!-- Q7 -->
            <div class="sol-card">
                <div class="question-header">7. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) (-4)³ = (-4) &times; (-4) &times; (-4) = <span class="ans-highlight">-64</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) (-3) &times; (-2)³ = (-3) &times; (-8) = <span class="ans-highlight">24</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) (-3)² &times; (-5)² = 9 &times; 25 = <span class="ans-highlight">225</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) (-2)³ &times; (-10)³ = (-8) &times; (-1000) = <span class="ans-highlight">8000</span></div>
                </div>
            </div>

            <!-- Q8 -->
            <div class="sol-card">
                <div class="question-header">8. Compare the following numbers:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">2.7 &times; 10¹²; 1.5 &times; 10⁸</span>: Since 10¹² > 10⁸, <span class="ans-highlight">2.7 &times; 10¹²</span> is greater.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">4 &times; 10¹⁴; 3 &times; 10¹⁷</span>: Since 10¹⁷ > 10¹⁴, <span class="ans-highlight">3 &times; 10¹⁷</span> is greater.</div>
                </div>
            </div>
        </div>
        `,
        "ex11-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 64, 129, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 64, 129, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 64, 129, 0.2); border-left: 4px solid #FF4081; color: #FF4081; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FF4081; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FF4081; font-weight: bold; }
            .ans-highlight { color: #F06292; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 2px; }
            .frac > span { display: block; padding: 0 2px; }
            .frac span.top { border-bottom: 1px solid #fff; }
            .frac span.bottom { border-top: none; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Using laws of exponents, simplify and write the answer in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) 3² &times; 3⁴ &times; 3⁸ = 3<sup>2+4+8</sup> = <span class="ans-highlight">3¹⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) 6¹⁵ &divide; 6¹⁰ = 6<sup>15-10</sup> = <span class="ans-highlight">6⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) a³ &times; a² = a<sup>3+2</sup> = <span class="ans-highlight">a⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) 7<sup>x</sup> &times; 7² = <span class="ans-highlight">7<sup>x+2</sup></span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) (5²)³ &divide; 5³ = 5⁶ &divide; 5³ = 5<sup>6-3</sup> = <span class="ans-highlight">5³</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) 2⁵ &times; 5⁵ = (2 &times; 5)⁵ = <span class="ans-highlight">10⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) a⁴ &times; b⁴ = <span class="ans-highlight">(ab)⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) (3⁴)³ = 3<sup>4&times;3</sup> = <span class="ans-highlight">3¹²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) (2²⁰ &divide; 2¹⁵) &times; 2³ = 2<sup>20-15</sup> &times; 2³ = 2⁵ &times; 2³ = 2<sup>5+3</sup> = <span class="ans-highlight">2⁸</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (j) 8<sup>t</sup> &divide; 8² = <span class="ans-highlight">8<sup>t-2</sup></span></div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Simplify and express each of the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) <span class="frac"><span class="top">2³ &times; 3⁴ &times; 4</span><span class="bottom">3 &times; 32</span></span> = <span class="frac"><span class="top">2³ &times; 3⁴ &times; 2²</span><span class="bottom">3 &times; 2⁵</span></span> = <span class="frac"><span class="top">2⁵ &times; 3⁴</span><span class="bottom">3 &times; 2⁵</span></span> = <span class="ans-highlight">3³</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) [(5²)³ &times; 5⁴] &divide; 5⁷ = [5⁶ &times; 5⁴] &divide; 5⁷ = 5¹⁰ &divide; 5⁷ = <span class="ans-highlight">5³</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) 25⁴ &divide; 5³ = (5²)⁴ &divide; 5³ = 5⁸ &divide; 5³ = <span class="ans-highlight">5⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) <span class="frac"><span class="top">3 &times; 7² &times; 11⁸</span><span class="bottom">21 &times; 11³</span></span> = <span class="frac"><span class="top">3 &times; 7² &times; 11⁸</span><span class="bottom">3 &times; 7 &times; 11³</span></span> = 7<sup>2-1</sup> &times; 11<sup>8-3</sup> = <span class="ans-highlight">7 &times; 11⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) <span class="frac"><span class="top">3⁷</span><span class="bottom">3⁴ &times; 3³</span></span> = <span class="frac"><span class="top">3⁷</span><span class="bottom">3⁷</span></span> = <span class="ans-highlight">1</span> (or 3⁰)</div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) 2⁰ + 3⁰ + 4⁰ = 1 + 1 + 1 = <span class="ans-highlight">3</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) 2⁰ &times; 3⁰ &times; 4⁰ = 1 &times; 1 &times; 1 = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) (3⁰ + 2⁰) &times; 5⁰ = (1 + 1) &times; 1 = <span class="ans-highlight">2</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="frac"><span class="top">2⁸ &times; a⁵</span><span class="bottom">4³ &times; a³</span></span> = <span class="frac"><span class="top">2⁸ &times; a⁵</span><span class="bottom">(2²)³ &times; a³</span></span> = <span class="frac"><span class="top">2⁸ &times; a⁵</span><span class="bottom">2⁶ &times; a³</span></span> = 2² &times; a² = <span class="ans-highlight">(2a)²</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (j) (<span class="frac"><span class="top">a⁵</span><span class="bottom">a³</span></span>) &times; a⁸ = a² &times; a⁸ = <span class="ans-highlight">a¹⁰</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (k) <span class="frac"><span class="top">4⁵ &times; a⁸b³</span><span class="bottom">4⁵ &times; a⁵b²</span></span> = a<sup>8-5</sup>b<sup>3-2</sup> = <span class="ans-highlight">a³b</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (l) (2³ &times; 2)² = (2⁴)² = <span class="ans-highlight">2⁸</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Say true or false and justify your answer:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">10 &times; 10¹¹ = 100¹¹</span>: <span class="ans-highlight">False</span>. LHS = 10¹², RHS = (10²)¹¹ = 10²². 10¹² &ne; 10²².</div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">2³ > 5²</span>: <span class="ans-highlight">False</span>. 2³ = 8, 5² = 25. 8 is not greater than 25.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">2³ &times; 3² = 6⁵</span>: <span class="ans-highlight">False</span>. LHS = 8 &times; 9 = 72, RHS = 7776.</div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">3⁰ = (1000)⁰</span>: <span class="ans-highlight">True</span>. Both are equal to 1.</div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Express each of the following as a product of prime factors only in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="label-theme">108 &times; 192</span> = (2² &times; 3³) &times; (2⁶ &times; 3) = 2<sup>2+6</sup> &times; 3<sup>3+1</sup> = <span class="ans-highlight">2⁸ &times; 3⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="label-theme">270</span> = 2 &times; 3³ &times; 5 = <span class="ans-highlight">2 &times; 3³ &times; 5</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="label-theme">729 &times; 64</span> = 3⁶ &times; 2⁶ = <span class="ans-highlight">(3 &times; 2)⁶ = 6⁶</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) <span class="label-theme">768</span> = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 3 = <span class="ans-highlight">2⁸ &times; 3</span></div>
                </div>
            </div>

            <!-- Q5 -->
            <div class="sol-card">
                <div class="question-header">5. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) <span class="frac"><span class="top">(2⁵)² &times; 7³</span><span class="bottom">8³ &times; 7</span></span> = <span class="frac"><span class="top">2¹⁰ &times; 7³</span><span class="bottom">(2³)³ &times; 7</span></span> = <span class="frac"><span class="top">2¹⁰ &times; 7³</span><span class="bottom">2⁹ &times; 7</span></span> = 2 &times; 7² = 2 &times; 49 = <span class="ans-highlight">98</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) <span class="frac"><span class="top">25 &times; 5² &times; t⁸</span><span class="bottom">10³ &times; t⁴</span></span> = <span class="frac"><span class="top">5² &times; 5² &times; t⁸</span><span class="bottom">(2&times;5)³ &times; t⁴</span></span> = <span class="frac"><span class="top">5⁴ &times; t⁸</span><span class="bottom">2³ &times; 5³ &times; t⁴</span></span> = <span class="ans-highlight"><span class="frac"><span class="top">5t⁴</span><span class="bottom">8</span></span></span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) <span class="frac"><span class="top">3⁵ &times; 10⁵ &times; 25</span><span class="bottom">5⁷ &times; 6⁵</span></span> = <span class="frac"><span class="top">3⁵ &times; (2&times;5)⁵ &times; 5²</span><span class="bottom">5⁷ &times; (2&times;3)⁵</span></span> = <span class="frac"><span class="top">3⁵ &times; 2⁵ &times; 5⁵ &times; 5²</span><span class="bottom">5⁷ &times; 2⁵ &times; 3⁵</span></span> = <span class="ans-highlight">1</span></div>
                </div>
            </div>
        </div>
        `,
        "ex11-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 16px; margin-bottom: 25px; border: 1px solid rgba(255, 64, 129, 0.3); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
            .question-header { background: rgba(255, 64, 129, 0.08); padding: 20px; border-bottom: 1px solid rgba(255, 64, 129, 0.2); border-left: 4px solid #FF4081; color: #FF4081; font-size: 1.15em; font-weight: bold; line-height: 1.5; text-align: justify; }
            .sol-body { padding: 20px; background: #000; text-align: left; }
            .sol-step { margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; text-align: left; position: relative; padding-left: 30px; color: #e0e0e0; font-size: 1.05em; line-height: 1.6; }
            .step-marker { position: absolute; left: 0; top: 0; color: #FF4081; font-weight: bold; font-size: 1.1em; }
            .label-theme { color: #FF4081; font-weight: bold; }
            .ans-highlight { color: #F06292; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Q1 -->
            <div class="sol-card">
                <div class="question-header">1. Write the following numbers in the expanded forms:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">279404</span> = 2&times;10⁵ + 7&times;10⁴ + 9&times;10³ + 4&times;10² + 0&times;10¹ + 4&times;10⁰</div>
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">3006194</span> = 3&times;10⁶ + 0&times;10⁵ + 0&times;10⁴ + 6&times;10³ + 1&times;10² + 9&times;10¹ + 4&times;10⁰</div>
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">2806196</span> = 2&times;10⁶ + 8&times;10⁵ + 0&times;10⁴ + 6&times;10³ + 1&times;10² + 9&times;10¹ + 6&times;10⁰</div>
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">120719</span> = 1&times;10⁵ + 2&times;10⁴ + 0&times;10³ + 7&times;10² + 1&times;10¹ + 9&times;10⁰</div>
                    <div class="sol-step"><span class="step-marker">=></span> <span class="label-theme">20068</span> = 2&times;10⁴ + 0&times;10³ + 0&times;10² + 6&times;10¹ + 8&times;10⁰</div>
                </div>
            </div>

            <!-- Q2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the number from each of the following expanded forms:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) 8&times;10⁴ + 6&times;10³ + 0&times;10² + 4&times;10¹ + 5&times;10⁰ = <span class="ans-highlight">86045</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) 4&times;10⁵ + 5&times;10³ + 3&times;10² + 2&times;10⁰ = <span class="ans-highlight">405302</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) 3&times;10⁴ + 7&times;10² + 5&times;10⁰ = <span class="ans-highlight">30705</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) 9&times;10⁵ + 2&times;10² + 3&times;10¹ = <span class="ans-highlight">900230</span></div>
                </div>
            </div>

            <!-- Q3 -->
            <div class="sol-card">
                <div class="question-header">3. Express the following numbers in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (i) 5,00,00,000 = <span class="ans-highlight">5 &times; 10⁷</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (ii) 70,00,000 = <span class="ans-highlight">7 &times; 10⁶</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iii) 3,18,65,00,000 = <span class="ans-highlight">3.1865 &times; 10⁹</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (iv) 3,90,878 = <span class="ans-highlight">3.90878 &times; 10⁵</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (v) 39087.8 = <span class="ans-highlight">3.90878 &times; 10⁴</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (vi) 3908.78 = <span class="ans-highlight">3.90878 &times; 10³</span></div>
                </div>
            </div>

            <!-- Q4 -->
            <div class="sol-card">
                <div class="question-header">4. Express the number appearing in the following statements in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-marker">=></span> (a) Distance between Earth and Moon = <span class="ans-highlight">3.84 &times; 10⁸ m</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (b) Speed of light in vacuum = <span class="ans-highlight">3 &times; 10⁸ m/s</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (c) Diameter of the Earth = <span class="ans-highlight">1.2756 &times; 10⁷ m</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (d) Diameter of Sun = <span class="ans-highlight">1.4 &times; 10⁹ m</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (e) Average stars in a galaxy = <span class="ans-highlight">10¹¹ stars</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (f) Age of the universe = <span class="ans-highlight">1.2 &times; 10¹⁰ years</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (g) Distance of Sun from Milky Way centre = <span class="ans-highlight">3 &times; 10²⁰ m</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (h) Molecules in a drop of water = <span class="ans-highlight">6.023 &times; 10²² molecules</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (i) Sea water on Earth = <span class="ans-highlight">1.353 &times; 10⁹ cubic km</span></div>
                    <div class="sol-step"><span class="step-marker">=></span> (j) Population of India (March 2001) = <span class="ans-highlight">1.027 &times; 10⁹</span></div>
                </div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Value of 2³ is:", options: ["6", "8", "5", "9"], correctAnswer: "B" },
        { id: "m2", question: "a^m × a^n is equal to:", options: ["a^mn", "a^m+n", "a^m-n", "a^m/n"], correctAnswer: "B" },
        { id: "m3", question: "Value of (5²)^3 is:", options: ["5^5", "5^6", "5^1", "5^8"], correctAnswer: "B" },
        { id: "m4", question: "Any non-zero number to power 0 is:", options: ["0", "1", "Itself", "Undefined"], correctAnswer: "B" },
        { id: "m5", question: "1000 in exponential form (base 10) is:", options: ["10²", "10³", "10⁴", "10⁵"], correctAnswer: "B" },
        { id: "m6", question: "Standard form of 12345 is:", options: ["12.345 × 10³", "1.2345 × 10⁴", "123.45 × 10²", "0.12345 × 10⁵"], correctAnswer: "B" },
        { id: "m7", question: "(-1)^odd number is:", options: ["1", "-1", "0", "Undefined"], correctAnswer: "B" },
        { id: "m8", question: "(-1)^even number is:", options: ["1", "-1", "0", "Undefined"], correctAnswer: "A" },
        { id: "m9", question: "2³ × 3³ is equal to:", options: ["5³", "6³", "6⁶", "5⁶"], correctAnswer: "B" },
        { id: "m10", question: "a^m ÷ a^n is:", options: ["a^m-n", "a^m+n", "a^m/n", "a^mn"], correctAnswer: "A" }
    ],
    summary: []
};
