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
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2⁶</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 9³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 9 × 9 × 9</div>
                    <div class="sol-step"><span class="ans-highlight">= 729</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 11²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 11 × 11</div>
                    <div class="sol-step"><span class="ans-highlight">= 121</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 625</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Express the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 6 × 6 × 6 × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) t × t</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= t²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) b × b × b × b</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= b⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5 × 5 × 7 × 7 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5² × 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 2 × 2 × a × a</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² × a²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) a × a × a × c × c × c × c × d</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= a³ × c⁴ × d</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express each of the following numbers using exponential notation:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 512</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 512 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 343</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 343 = 7 × 7 × 7</div>
                    <div class="sol-step"><span class="ans-highlight">= 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 729</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 729 = 3 × 3 × 3 × 3 × 3 × 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3125</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors of 3125 = 5 × 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify the greater number, wherever possible, in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 4³ or 3⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4³ = 4 × 4 × 4 = 64</div>
                    <div class="sol-step">3⁴ = 3 × 3 × 3 × 3 = 81</div>
                    <div class="sol-step">Since 81 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁴ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 5³ or 3⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5³ = 5 × 5 × 5 = 125</div>
                    <div class="sol-step">3⁵ = 3 × 3 × 3 × 3 × 3 = 243</div>
                    <div class="sol-step">Since 243 > 125:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁵ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2⁸ or 8²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2⁸ = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256</div>
                    <div class="sol-step">8² = 8 × 8 = 64</div>
                    <div class="sol-step">Since 256 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">2⁸ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 100² or 2¹⁰⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100² = 100 × 100 = 10000</div>
                    <div class="sol-step">2¹⁰ = 1024 ➔ 2¹⁰⁰ = (1024)¹⁰ >> 10000.</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰⁰ is the greater number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 2¹⁰ or 10²</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 648</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">648 = 2 × 2 × 2 × 3 × 3 × 3 × 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 2³ × 3⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 405</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">405 = 3 × 3 × 3 × 3 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁴ × 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 540</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">540 = 2 × 2 × 3 × 3 × 3 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2² × 3³ × 5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3,600</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3600 = 2 × 2 × 2 × 2 × 3 × 3 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁴ × 3² × 5²</span></div>
                </div>
            </div>

            <!-- Question 6 & 7 & 8 -->
            <div class="sol-card">
                <div class="question-header">6, 7 & 8. Simplify and Compare Exponential Numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">6 (i) 2 × 10³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 2 × 1000 = <span class="ans-highlight">2000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">6 (ii) 7² × 2²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 49 × 4 = <span class="ans-highlight">196</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">6 (iii) 2³ × 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 × 5 = <span class="ans-highlight">40</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">6 (iv) 3 × 4⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 3 × 256 = <span class="ans-highlight">768</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">6 (v) 0 × 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 0 × 100 = <span class="ans-highlight">0</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">7 (i) (-4)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -4 × -4 × -4 = <span class="ans-highlight">-64</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">7 (ii) (-3) × (-2)³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -3 × (-8) = <span class="ans-highlight">24</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">8 (i) Compare 2.7 × 10¹² and 1.5 × 10⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Comparing powers of 10: 10¹² > 10⁸</div>
                    <div class="sol-step"><span class="ans-highlight">2.7 × 10¹² > 1.5 × 10⁸</span></div>
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
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Using laws of exponents, simplify and write answer in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 3² × 3⁴ × 3⁸</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ × aⁿ = aᵐ⁺ⁿ:</div>
                    <div class="sol-step">= 3²⁺⁴⁺⁸</div>
                    <div class="sol-step"><span class="ans-highlight">= 3¹⁴</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 6¹⁵ ÷ 6¹⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Using law aᵐ ÷ aⁿ = aᵐ⁻ⁿ:</div>
                    <div class="sol-step">= 6¹⁵⁻¹⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 6⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) a³ × a²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= a³⁺²</div>
                    <div class="sol-step"><span class="ans-highlight">= a⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 7ˣ × 7²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 7ˣ⁺²</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) (5²)³ ÷ 5³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 5⁶ ÷ 5³ = 5⁶⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 5³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2⁵ × 5⁵</b></div>
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">2³ × 3⁴ × 4</span><span class="den">3 × 32</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">2³ × 3⁴ × 2²</span><span class="den">3 × 2⁵</span></div> = <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">2⁵ × 3⁴</span><span class="den">2⁵ × 3</span></div></div>
                    <div class="sol-step">= 2⁵⁻⁵ × 3⁴⁻¹ = 2⁰ × 3³ = 1 × 3³</div>
                    <div class="sol-step"><span class="ans-highlight">= 3³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ((5²)³ × 5⁴) ÷ 5⁷</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5⁶ × 5⁴) ÷ 5⁷ = 5¹⁰ ÷ 5⁷ = 5¹⁰⁻⁷</div>
                    <div class="sol-step"><span class="ans-highlight">= 5³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 25⁴ ÷ 5³</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5²)⁴ ÷ 5³ = 5⁸ ÷ 5³ = 5⁸⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3 × 7² × 11⁸</span><span class="den">21 × 11³</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3 × 7² × 11⁸</span><span class="den">7 × 3 × 11³</span></div> = 3¹⁻¹ × 7²⁻¹ × 11⁸⁻³</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 × 11⁵</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁷</span><span class="den">3⁴ × 3³</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁷</span><span class="den">3⁷</span></div> = 3⁷⁻⁷ = 3⁰</div>
                    <div class="sol-step"><span class="ans-highlight">= 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2⁰ + 3⁰ + 4⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 1 + 1 + 1</div>
                    <div class="sol-step"><span class="ans-highlight">= 3</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Simplify:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">(2⁵)² × 7³</span><span class="den">8³ × 7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">2¹⁰ × 7³</span><span class="den">(2³)³ × 7</span></div> = <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">2¹⁰ × 7³</span><span class="den">2⁹ × 7</span></div></div>
                    <div class="sol-step">= 2¹⁰⁻⁹ × 7³⁻¹ = 2 × 7² = 2 × 49</div>
                    <div class="sol-step"><span class="ans-highlight">= 98</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">25 × 5² × t⁸</span><span class="den">10³ × t⁴</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">5² × 5² × t⁸</span><span class="den">(5 × 2)³ × t⁴</span></div> = <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">5⁴ × t⁸</span><span class="den">5³ × 2³ × t⁴</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">5⁴⁻³ × t⁸⁻⁴</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">5t⁴</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁵ × 10⁵ × 25</span><span class="den">5⁷ × 6⁵</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁵ × (5 × 2)⁵ × 5²</span><span class="den">5⁷ × (2 × 3)⁵</span></div> = <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁵ × 5⁵ × 2⁵ × 5²</span><span class="den">5⁷ × 2⁵ × 3⁵</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num" style="border-bottom-color:#FF80AB;">3⁵ × 5⁷ × 2⁵</span><span class="den">3⁵ × 5⁷ × 2⁵</span></div> = 3⁰ × 5⁰ × 2⁰</div>
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
            .sol-body b, .subpart-title { color: #FF4081; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Write the following numbers in expanded forms using powers of 10:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) 279404</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 × 10⁵ + 7 × 10⁴ + 9 × 10³ + 4 × 10² + 0 × 10¹ + 4 × 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) 3006194</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 × 10⁶ + 0 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 4 × 10⁰</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) 2806196</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 × 10⁶ + 8 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 6 × 10⁰</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express the following numbers in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 5,00,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 5 × 10⁷</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 70,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 × 10⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3,18,65,00,000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.1865 × 10⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3,90,878</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.90878 × 10⁵</span></div>
                </div>
            </div>
        </div>
    `,
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
