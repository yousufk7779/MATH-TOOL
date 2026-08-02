import { ChapterContent } from "../types";

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
    { name: "Product Law", formula: "a^m \\times a^n = a^{m+n}" },
    { name: "Quotient Law", formula: "a^m \\div a^n = a^{m-n}" },
    { name: "Power Law", formula: "(a^m)^n = a^{mn}" },
    { name: "Zero Exponent", formula: "a^0 = 1" },
  ],
  crux: [],
  exercises: [
    { id: "ex11-1", name: "Exercise 11.1", questions: [] },
    { id: "ex11-2", name: "Exercise 11.2", questions: [] },
    { id: "ex11-3", name: "Exercise 11.3", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF4081; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 64, 129, 0.05); border-left: 4px solid #FF4081; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF4081; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
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
    `,
  htmlExercises: {
    "ex11-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80AB; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 2⁶</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 9³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 &times; 9 &times; 9</div>
                    <div class="sol-step"><span class="ans-highlight">= 729</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 11²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 11 &times; 11</div>
                    <div class="sol-step"><span class="ans-highlight">= 121</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5 &times; 5 &times; 5 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 625</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Express the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 6 &times; 6 &times; 6 &times; 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) t &times; t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= t²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) b &times; b &times; b &times; b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= b⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5 &times; 5 &times; 7 &times; 7 &times; 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5² &times; 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 2 &times; 2 &times; a &times; a</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² &times; a²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) a &times; a &times; a &times; c &times; c &times; c &times; c &times; d</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= a³ &times; c⁴ &times; d</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express each of the following numbers using exponential notation:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 512</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factorization of 512 = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 343</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factorization of 343 = 7 &times; 7 &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">= 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 729</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factorization of 729 = 3 &times; 3 &times; 3 &times; 3 &times; 3 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3125</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factorization of 3125 = 5 &times; 5 &times; 5 &times; 5 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify the greater number, wherever possible, in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 4³ or 3⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4³ = 4 &times; 4 &times; 4 = 64</div>
                    <div class="sol-step">3⁴ = 3 &times; 3 &times; 3 &times; 3 = 81</div>
                    <div class="sol-step">Since 81 > 64 &rArr; <span class="ans-highlight">3⁴ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 5³ or 3⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5³ = 5 &times; 5 &times; 5 = 125</div>
                    <div class="sol-step">3⁵ = 3 &times; 3 &times; 3 &times; 3 &times; 3 = 243</div>
                    <div class="sol-step">Since 243 > 125 &rArr; <span class="ans-highlight">3⁵ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2⁸ or 8²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2⁸ = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 = 256</div>
                    <div class="sol-step">8² = 8 &times; 8 = 64</div>
                    <div class="sol-step">Since 256 > 64 &rArr; <span class="ans-highlight">2⁸ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 100² or 2¹⁰⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100² = 100 &times; 100 = 10,000</div>
                    <div class="sol-step">2¹⁰ = 1024 &rArr; 2¹⁰⁰ = (1024)¹⁰ which is far greater than 10,000.</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰⁰ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 2¹⁰ or 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2¹⁰ = 1024</div>
                    <div class="sol-step">10² = 100</div>
                    <div class="sol-step">Since 1024 > 100 &rArr; <span class="ans-highlight">2¹⁰ is the greater number.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Express each of the following as product of powers of their prime factors:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 648</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">648 = 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 3 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 2³ &times; 3⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 405</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">405 = 3 &times; 3 &times; 3 &times; 3 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁴ &times; 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 540</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">540 = 2 &times; 2 &times; 3 &times; 3 &times; 3 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² &times; 3³ &times; 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3,600</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3600 = 2 &times; 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 5 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁴ &times; 3² &times; 5²</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 2 &times; 10³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 &times; 1000 = <span class="ans-highlight">2000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 7² &times; 2²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 49 &times; 4 = <span class="ans-highlight">196</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2³ &times; 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 &times; 5 = <span class="ans-highlight">40</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3 &times; 4⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3 &times; 256 = <span class="ans-highlight">768</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0 &times; 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 0 &times; 100 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 5² &times; 3³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 25 &times; 27 = <span class="ans-highlight">675</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 2⁴ &times; 3²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 16 &times; 9 = <span class="ans-highlight">144</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 3² &times; 10⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 &times; 10,000 = <span class="ans-highlight">90,000</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) (-4)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-4) &times; (-4) &times; (-4) = <span class="ans-highlight">-64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) (-3) &times; (-2)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-3) &times; (-8) = <span class="ans-highlight">24</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (-3)² &times; (-5)²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 &times; 25 = <span class="ans-highlight">225</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) (-2)³ &times; (-10)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (-8) &times; (-1000) = <span class="ans-highlight">8000</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Compare the following numbers:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 2.7 &times; 10¹² ; 1.5 &times; 10⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Comparing the powers of 10:</div>
                    <div class="sol-step">10¹² > 10⁸</div>
                    <div class="sol-step"><span class="ans-highlight">2.7 &times; 10¹² > 1.5 &times; 10⁸</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 &times; 10¹⁴ ; 3 &times; 10¹⁷</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Comparing the powers of 10:</div>
                    <div class="sol-step">10¹⁷ > 10¹⁴</div>
                    <div class="sol-step"><span class="ans-highlight">3 &times; 10¹⁷ > 4 &times; 10¹⁴</span></div>
                </div>
            </div>
        </div>
        `,
    "ex11-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #FF80AB; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Fill in the blanks:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(a) 2³ &times; 2⁴ = 2<sup>.......</sup></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup>: 2³⁺⁴ = 2⁷</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 7 &rArr; 2⁷</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) (-4)⁵ &times; (-4)⁶ = (-4)<sup>.......</sup></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup>: (-4)⁵⁺⁶ = (-4)¹¹</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 11 &rArr; (-4)¹¹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) (<div class="frac"><span class="num">2</span><span class="den">3</span></b></div>)⁷ &times; (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)⁴ = (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)<sup>.......</sup></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">7 + 4 = 11</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 11 &rArr; (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)¹¹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) (<div class="frac"><span class="num">3</span><span class="den">4</span></b></div>)⁸ &divide; (<div class="frac"><span class="num">3</span><span class="den">4</span></div>)⁵ = (<div class="frac"><span class="num">3</span><span class="den">4</span></div>)<sup>.......</sup></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law a<sup>m</sup> &divide; a<sup>n</sup> = a<sup>m-n</sup>: 8 - 5 = 3</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 3 &rArr; (<div class="frac"><span class="num">3</span><span class="den">4</span></div>)³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) (-4)⁹ &divide; (-4)³ = (-4)<sup>.......</sup></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">9 - 3 = 6</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 6 &rArr; (-4)⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) (<div class="frac"><span class="num">-3</span><span class="den">7</span></b></div>)⁷ &divide; (<div class="frac"><span class="num">-3</span><span class="den">7</span></div>) = (<div class="frac"><span class="num">-3</span><span class="den">7</span></div>)<sup>.......</sup></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">7 - 1 = 6</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 6 &rArr; (<div class="frac"><span class="num">-3</span><span class="den">7</span></div>)⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(g) 8¹³ &divide; 8¹⁹ = <div class="frac"><span class="num">1</span><span class="den">8<sup>.......</sup></span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law a<sup>m</sup> &divide; a<sup>n</sup> = <div class="frac"><span class="num">1</span><span class="den">a<sup>n-m</sup></span></div>: 19 - 13 = 6</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 6 &rArr; <div class="frac"><span class="num">1</span><span class="den">8⁶</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(h) (-4)¹¹ &divide; (-4)¹⁵ = <div class="frac"><span class="num">1</span><span class="den">(-4)<sup>.......</sup></span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">15 - 11 = 4</div>
                    <div class="sol-step"><span class="ans-highlight">Blank = 4 &rArr; <div class="frac"><span class="num">1</span><span class="den">(-4)⁴</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(a) (<div class="frac"><span class="num">2</span><span class="den">3</span></b></div>)² &times; (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)³</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)<sup>2+3</sup> = <span class="ans-highlight">(<div class="frac"><span class="num">2</span><span class="den">3</span></div>)⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) (<div class="frac"><span class="num">-3</span><span class="den">4</span></b></div>)⁴ &divide; (<div class="frac"><span class="num">-3</span><span class="den">4</span></div>)²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">-3</span><span class="den">4</span></div>)<sup>4-2</sup> = <span class="ans-highlight">(<div class="frac"><span class="num">-3</span><span class="den">4</span></div>)²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) (-4)⁶ &divide; (-4)⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1</span><span class="den">(-4)⁸⁻⁶</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">(-4)²</span></div> (or <div class="frac"><span class="num">1</span><span class="den">16</span></div>)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) (<div class="frac"><span class="num">1</span><span class="den">2³</span></b></div>)²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1²</span><span class="den">(2³)²</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">2⁶</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) <div class="frac"><span class="num">2³ &times; 3⁴ &times; 4</span><span class="den">3 &times; 32</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2³ &times; 3⁴ &times; 2²</span><span class="den">3¹ &times; 2⁵</span></div> = <div class="frac"><span class="num">2⁵ &times; 3⁴</span><span class="den">2⁵ &times; 3¹</span></div> = 2⁵⁻⁵ &times; 3⁴⁻¹</div>
                    <div class="sol-step">= 2⁰ &times; 3³ = 1 &times; 27</div>
                    <div class="sol-step"><span class="ans-highlight">= 3³ = 27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) <div class="frac"><span class="num">3⁷</span><span class="den">3⁴ &times; 3³</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3⁷</span><span class="den">3⁴⁺³</span></div> = <div class="frac"><span class="num">3⁷</span><span class="den">3⁷</span></div> = 3⁷⁻⁷ = 3⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(g) <div class="frac"><span class="num">2⁸ &times; a⁵</span><span class="den">4³ &times; a³</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2⁸ &times; a⁵</span><span class="den">(2²)³ &times; a³</span></div> = <div class="frac"><span class="num">2⁸ &times; a⁵</span><span class="den">2⁶ &times; a³</span></div> = 2⁸⁻⁶ &times; a⁵⁻³</div>
                    <div class="sol-step">= 2² &times; a² = 4a²</div>
                    <div class="sol-step"><span class="ans-highlight">= 4a² (or (2a)²)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(h) [(<div class="frac"><span class="num">2</span><span class="den">3</span></b></div>)⁴]²</div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>:</div>
                    <div class="sol-step"><span class="ans-highlight">= (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)⁸</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 2⁰ + 3⁰ + 4⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 1 + 1 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">= 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(j) 2⁰ &times; 3⁰ &times; 4⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 1 &times; 1 &times; 1</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Say true or false and justify your answer:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 10 &times; 10¹¹ = 100¹¹</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 10¹ &times; 10¹¹ = 10¹²</div>
                    <div class="sol-step">RHS = 100¹¹ = (10²)¹¹ = 10²²</div>
                    <div class="sol-step">LHS &ne; RHS &rArr; <span class="ans-highlight">False</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2³ > 5²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 2³ = 8, RHS = 5² = 25</div>
                    <div class="sol-step">8 is not greater than 25 &rArr; <span class="ans-highlight">False</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2³ &times; 3² = 6⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 8 &times; 9 = 72, RHS = 6⁵ = 7776</div>
                    <div class="sol-step">LHS &ne; RHS &rArr; <span class="ans-highlight">False</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3⁰ = (1000)⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LHS = 1, RHS = 1</div>
                    <div class="sol-step">LHS = RHS &rArr; <span class="ans-highlight">True</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express each of the following as a product of prime factors only in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 108 &times; 192</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">108 = 2² &times; 3³, 192 = 2⁶ &times; 3¹</div>
                    <div class="sol-step">= (2² &times; 3³) &times; (2⁶ &times; 3¹) = 2²⁺⁶ &times; 3³⁺¹</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁸ &times; 3⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 270</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">270 = 2 &times; 3 &times; 3 &times; 3 &times; 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 &times; 3³ &times; 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 729 &times; 64</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">729 = 3⁶, 64 = 2⁶</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁶ &times; 3⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 768</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">768 = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁸ &times; 3</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">(2⁵)² &times; 7³</span><span class="den">8³ &times; 7</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2¹⁰ &times; 7³</span><span class="den">(2³)³ &times; 7¹</span></div> = <div class="frac"><span class="num">2¹⁰ &times; 7³</span><span class="den">2⁹ &times; 7¹</span></div></div>
                    <div class="sol-step">= 2¹⁰⁻⁹ &times; 7³⁻¹ = 2¹ &times; 7² = 2 &times; 49</div>
                    <div class="sol-step"><span class="ans-highlight">= 98</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">25 &times; 5² &times; t⁸</span><span class="den">10³ &times; t⁴</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5² &times; 5² &times; t⁸</span><span class="den">(2 &times; 5)³ &times; t⁴</span></div> = <div class="frac"><span class="num">5⁴ &times; t⁸</span><span class="den">2³ &times; 5³ &times; t⁴</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">5⁴⁻³ &times; t⁸⁻⁴</span><span class="den">8</span></div> = <div class="frac"><span class="num">5¹ &times; t⁴</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">5t⁴</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">3⁵ &times; 10⁵ &times; 25</span><span class="den">5⁷ &times; 6⁵</span></b></div></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3⁵ &times; (2 &times; 5)⁵ &times; 5²</span><span class="den">5⁷ &times; (2 &times; 3)⁵</span></div> = <div class="frac"><span class="num">3⁵ &times; 2⁵ &times; 5⁵ &times; 5²</span><span class="den">5⁷ &times; 2⁵ &times; 3⁵</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">3⁵ &times; 2⁵ &times; 5⁷</span><span class="den">3⁵ &times; 2⁵ &times; 5⁷</span></div> = 3⁰ &times; 2⁰ &times; 5⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>
                </div>
            </div>
        </div>
        `,
    "ex11-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #FF4081; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Write the following numbers in the expanded forms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>279404</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 &times; 10⁵ + 7 &times; 10⁴ + 9 &times; 10³ + 4 &times; 10² + 0 &times; 10¹ + 4 &times; 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>3006194</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 &times; 10⁶ + 0 &times; 10⁵ + 0 &times; 10⁴ + 6 &times; 10³ + 1 &times; 10² + 9 &times; 10¹ + 4 &times; 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>2806196</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 &times; 10⁶ + 8 &times; 10⁵ + 0 &times; 10⁴ + 6 &times; 10³ + 1 &times; 10² + 9 &times; 10¹ + 6 &times; 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>120719</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 &times; 10⁵ + 2 &times; 10⁴ + 0 &times; 10³ + 7 &times; 10² + 1 &times; 10¹ + 9 &times; 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>20068</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 &times; 10⁴ + 0 &times; 10³ + 0 &times; 10² + 6 &times; 10¹ + 8 &times; 10⁰</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the number from each of the following expanded forms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(a) 8 &times; 10⁴ + 6 &times; 10³ + 0 &times; 10² + 4 &times; 10¹ + 5 &times; 10⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 80000 + 6000 + 0 + 40 + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 86045</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) 4 &times; 10⁵ + 5 &times; 10³ + 3 &times; 10² + 2 &times; 10⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 400000 + 5000 + 300 + 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 405302</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) 3 &times; 10⁴ + 7 &times; 10² + 5 &times; 10⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 30000 + 700 + 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 30705</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) 9 &times; 10⁵ + 2 &times; 10² + 3 &times; 10¹</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 900000 + 200 + 30</div>
                    <div class="sol-step"><span class="ans-highlight">= 900230</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express the following numbers in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(i) 5,00,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5 &times; 10⁷</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 70,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 &times; 10⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3,18,65,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.1865 &times; 10⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3,90,878</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.90878 &times; 10⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 39087.8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.90878 &times; 10⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 3908.78</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.90878 &times; 10³</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express the number appearing in the following statements in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#FF4081;">(a) Distance between Earth and Moon is 384,000,000 m.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.84 &times; 10⁸ m</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) Speed of light in vacuum is 300,000,000 m/s.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 &times; 10⁸ m/s</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) Diameter of the Earth is 1,27,56,000 m.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.2756 &times; 10⁷ m</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) Diameter of Sun is 1,400,000,000 m.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.4 &times; 10⁹ m</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) In a galaxy there are on an average 100,000,000,000 stars.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 &times; 10¹¹ stars</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) The universe is estimated to be about 12,000,000,000 years old.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.2 &times; 10¹⁰ years</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(g) The distance of the Sun from the centre of the Milky Way Galaxy is estimated to be 300,000,000,000,000,000,000 m.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 &times; 10²⁰ m</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(h) 60,230,000,000,000,000,000,000 molecules are contained in a drop of water weighing 1.8 gm.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 6.023 &times; 10²² molecules</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) The Earth has 1,353,000,000 cubic km of sea water.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.353 &times; 10⁹ km³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(j) The population of India was about 1,027,000,000 in March, 2001.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.027 &times; 10⁹</span></div>
                </div>
            </div>
        </div>
        `
  },
  examples: [],
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
