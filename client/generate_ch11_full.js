const fs = require('fs');
const path = require('path');

function frac(num, den) {
  return `<div class="frac"><span class="num">${num}</span><span class="den">${den}</span></div>`;
}

const c7Math11Full = `import { ChapterContent } from "../types";

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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 6 × 6 × 6 × 6</b> ➔ <span class="ans-highlight">6⁴</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) t × t</b> ➔ <span class="ans-highlight">t²</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) b × b × b × b</b> ➔ <span class="ans-highlight">b⁴</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 5 × 5 × 7 × 7 × 7</b> ➔ <span class="ans-highlight">5² × 7³</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) 2 × 2 × a × a</b> ➔ <span class="ans-highlight">2² × a²</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(vi) a × a × a × c × c × c × c × d</b> ➔ <span class="ans-highlight">a³ × c⁴ × d</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express each of the following numbers using exponential notation:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 512</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2</div>
                    <div class="sol-step"><span class="ans-highlight">= 2⁹</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 343</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors = 7 × 7 × 7</div>
                    <div class="sol-step"><span class="ans-highlight">= 7³</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 729</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors = 3 × 3 × 3 × 3 × 3 × 3</div>
                    <div class="sol-step"><span class="ans-highlight">= 3⁶</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 3125</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Prime factors = 5 × 5 × 5 × 5 × 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 5⁵</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Identify the greater number, wherever possible, in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 4³ or 3⁴</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4³ = 64, 3⁴ = 81. Since 81 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁴ is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 5³ or 3⁵</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5³ = 125, 3⁵ = 243. Since 243 > 125:</div>
                    <div class="sol-step"><span class="ans-highlight">3⁵ is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 2⁸ or 8²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2⁸ = 256, 8² = 64. Since 256 > 64:</div>
                    <div class="sol-step"><span class="ans-highlight">2⁸ is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 100² or 2¹⁰⁰</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100² = 10000, 2¹⁰ = 1024 ➔ 2¹⁰⁰ = (1024)¹⁰ >> 10000.</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰⁰ is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(v) 2¹⁰ or 10²</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2¹⁰ = 1024, 10² = 100. Since 1024 > 100:</div>
                    <div class="sol-step"><span class="ans-highlight">2¹⁰ is greater.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Express each of the following as a product of powers of their prime factors:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#8E24AA;">(i) 648</b> ➔ 2 × 2 × 2 × 3 × 3 × 3 × 3 = <span class="ans-highlight">2³ × 3⁴</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(ii) 405</b> ➔ 3 × 3 × 3 × 3 × 5 = <span class="ans-highlight">3⁴ × 5</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iii) 540</b> ➔ 2 × 2 × 3 × 3 × 3 × 5 = <span class="ans-highlight">2² × 3³ × 5</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">(iv) 3,600</b> ➔ 2⁴ × 3² × 5² = <span class="ans-highlight">2⁴ × 3² × 5²</span></div>
                </div>
            </div>

            <!-- Question 6 & 7 & 8 -->
            <div class="sol-card">
                <div class="question-header">6, 7 & 8. Simplify and Compare:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">6 (i) 2 × 10³</b> = 2 × 1000 = <span class="ans-highlight">2000</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (ii) 7² × 2²</b> = 49 × 4 = <span class="ans-highlight">196</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (iii) 2³ × 5</b> = 8 × 5 = <span class="ans-highlight">40</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (iv) 3 × 4⁴</b> = 3 × 256 = <span class="ans-highlight">768</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (v) 0 × 10²</b> = <span class="ans-highlight">0</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (vi) 5² × 3³</b> = 25 × 27 = <span class="ans-highlight">675</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (vii) 2⁴ × 3²</b> = 16 × 9 = <span class="ans-highlight">144</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">6 (viii) 3² × 10⁴</b> = 9 × 10000 = <span class="ans-highlight">90000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">7 (i) (-4)³</b> = -4 × -4 × -4 = <span class="ans-highlight">-64</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">7 (ii) (-3) × (-2)³</b> = -3 × -8 = <span class="ans-highlight">24</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">7 (iii) (-3)² × (-5)²</b> = 9 × 25 = <span class="ans-highlight">225</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">7 (iv) (-2)³ × (-10)³</b> = -8 × -1000 = <span class="ans-highlight">8000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">8 (i) Compare 2.7 × 10¹² and 1.5 × 10⁸</b> ➔ <span class="ans-highlight">2.7 × 10¹² > 1.5 × 10⁸</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">8 (ii) Compare 4 × 10¹⁴ and 3 × 10¹⁷</b> ➔ <span class="ans-highlight">4 × 10¹⁴ < 3 × 10¹⁷</span></div>
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
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Using laws of exponents, simplify and write answer in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">(i) 3² × 3⁴ × 3⁸</b> = 3²⁺⁴⁺⁸ = <span class="ans-highlight">3¹⁴</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(ii) 6¹⁵ ÷ 6¹⁰</b> = 6¹⁵⁻¹⁰ = <span class="ans-highlight">6⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iii) a³ × a²</b> = a³⁺² = <span class="ans-highlight">a⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iv) 7ˣ × 7²</b> = <span class="ans-highlight">7ˣ⁺²</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(v) (5²)³ ÷ 5³</b> = 5⁶ ÷ 5³ = <span class="ans-highlight">5³</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(vi) 2⁵ × 5⁵</b> = (2 × 5)⁵ = <span class="ans-highlight">10⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(vii) a⁴ × b⁴</b> = <span class="ans-highlight">(ab)⁴</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(viii) (3⁴)³</b> = 3⁴ˣ³ = <span class="ans-highlight">3¹²</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(ix) (2²⁰ ÷ 2¹⁵) × 2³</b> = 2⁵ × 2³ = <span class="ans-highlight">2⁸</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(x) 8ᵗ ÷ 8²</b> = <span class="ans-highlight">8ᵗ⁻²</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Simplify and express each of the following in exponential form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">(i) (2³ × 3⁴ × 4) / (3 × 32)</b> = (2³ × 3⁴ × 2²) / (3 × 2⁵) = 2⁵⁻⁵ × 3⁴⁻¹ = 2⁰ × 3³ = <span class="ans-highlight">3³</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(ii) ((5²)³ × 5⁴) ÷ 5⁷</b> = (5⁶ × 5⁴) ÷ 5⁷ = 5¹⁰ ÷ 5⁷ = <span class="ans-highlight">5³</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iii) 25⁴ ÷ 5³</b> = (5²)⁴ ÷ 5³ = 5⁸ ÷ 5³ = <span class="ans-highlight">5⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iv) (3 × 7² × 11⁸) / (21 × 11³)</b> = (3 × 7² × 11⁸) / (7 × 3 × 11³) = <span class="ans-highlight">7 × 11⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(v) 3⁷ / (3⁴ × 3³)</b> = 3⁷ / 3⁷ = 3⁰ = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(vi) 2⁰ + 3⁰ + 4⁰</b> = 1 + 1 + 1 = <span class="ans-highlight">3</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(vii) 2⁰ × 3⁰ × 4⁰</b> = 1 × 1 × 1 = <span class="ans-highlight">1</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(viii) (3⁰ + 2⁰) × 5⁰</b> = (1 + 1) × 1 = <span class="ans-highlight">2</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(ix) (2⁸ × a⁵) / (4³ × a³)</b> = (2⁸ × a⁵) / (2⁶ × a³) = <span class="ans-highlight">2² × a² (or 4a²)</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(x) (a⁵ / a³) × a⁸</b> = a² × a⁸ = <span class="ans-highlight">a¹⁰</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(xi) (4⁵ × a⁸b³) / (4⁵ × a⁵b²)</b> = <span class="ans-highlight">a³b</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(xii) (2³ × 2)²</b> = (2⁴)² = <span class="ans-highlight">2⁸</span></div>
                </div>
            </div>

            <!-- Question 3, 4, 5 -->
            <div class="sol-card">
                <div class="question-header">3, 4 & 5. True/False, Prime Factors & Simplification:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">3 (i) 10 × 10¹¹ = 100¹¹</b> ➔ LHS = 10¹², RHS = 10²² ➔ <span class="ans-highlight">False</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">3 (ii) 2³ > 5²</b> ➔ LHS = 8, RHS = 25 ➔ <span class="ans-highlight">False</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">3 (iii) 2³ × 3² = 6⁵</b> ➔ LHS = 72, RHS = 7776 ➔ <span class="ans-highlight">False</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">3 (iv) 3⁰ = (1000)⁰</b> ➔ 1 = 1 ➔ <span class="ans-highlight">True</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">4 (i) 108 × 192 in prime factors</b> = (2² × 3³) × (2⁶ × 3) = <span class="ans-highlight">2⁸ × 3⁴</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">4 (ii) 270 in prime factors</b> = <span class="ans-highlight">2 × 3³ × 5</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">4 (iii) 729 × 64 in prime factors</b> = 3⁶ × 2⁶ = <span class="ans-highlight">2⁶ × 3⁶</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">4 (iv) 768 in prime factors</b> = <span class="ans-highlight">2⁸ × 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#8E24AA;">5 (i) ((2⁵)² × 7³) / (8³ × 7)</b> = (2¹⁰ × 7³) / (2⁹ × 7) = 2¹ × 7² = 2 × 49 = <span class="ans-highlight">98</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">5 (ii) (25 × 5² × t⁸) / (10³ × t⁴)</b> = (5⁴ × t⁸) / (5³ × 2³ × t⁴) = (5t⁴) / 8 = <span class="ans-highlight">${frac('5t⁴', 8)}</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">5 (iii) (3⁵ × 10⁵ × 25) / (5⁷ × 6⁵)</b> = (3⁵ × 5⁵ × 2⁵ × 5²) / (5⁷ × 2⁵ × 3⁵) = <span class="ans-highlight">1</span></div>
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
                    <div class="sol-step"><b style="color:#8E24AA;">(a) 279404</b> = <span class="ans-highlight">2 × 10⁵ + 7 × 10⁴ + 9 × 10³ + 4 × 10² + 0 × 10¹ + 4 × 10⁰</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(b) 3006194</b> = <span class="ans-highlight">3 × 10⁶ + 0 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 4 × 10⁰</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(c) 2806196</b> = <span class="ans-highlight">2 × 10⁶ + 8 × 10⁵ + 0 × 10⁴ + 6 × 10³ + 1 × 10² + 9 × 10¹ + 6 × 10⁰</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(d) 120719</b> = <span class="ans-highlight">1 × 10⁵ + 2 × 10⁴ + 0 × 10³ + 7 × 10² + 1 × 10¹ + 9 × 10⁰</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(e) 20068</b> = <span class="ans-highlight">2 × 10⁴ + 0 × 10³ + 0 × 10² + 6 × 10¹ + 8 × 10⁰</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the number from each of the following expanded forms:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">(a) 8 × 10⁴ + 6 × 10³ + 0 × 10² + 4 × 10¹ + 5 × 10⁰</b> ➔ <span class="ans-highlight">86045</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(b) 4 × 10⁵ + 5 × 10³ + 3 × 10² + 2 × 10⁰</b> ➔ <span class="ans-highlight">405302</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(c) 3 × 10⁴ + 7 × 10² + 5 × 10⁰</b> ➔ <span class="ans-highlight">30705</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(d) 9 × 10⁵ + 2 × 10² + 3 × 10¹</b> ➔ <span class="ans-highlight">900230</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express the following numbers in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">(i) 5,00,00,000</b> = <span class="ans-highlight">5 × 10⁷</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(ii) 70,00,000</b> = <span class="ans-highlight">7 × 10⁶</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iii) 3,18,65,00,000</b> = <span class="ans-highlight">3.1865 × 10⁹</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(iv) 3,90,878</b> = <span class="ans-highlight">3.90878 × 10⁵</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(v) 39087.8</b> = <span class="ans-highlight">3.90878 × 10⁴</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(vi) 3908.78</b> = <span class="ans-highlight">3.90878 × 10³</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express the numbers in statements in standard form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b style="color:#8E24AA;">(a) Distance Earth-Moon: 384,000,000 m</b> = <span class="ans-highlight">3.84 × 10⁸ m</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(b) Speed of light: 300,000,000 m/s</b> = <span class="ans-highlight">3 × 10⁸ m/s</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(c) Earth diameter: 1,27,56,000 m</b> = <span class="ans-highlight">1.2756 × 10⁷ m</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(d) Sun diameter: 1,400,000,000 m</b> = <span class="ans-highlight">1.4 × 10⁹ m</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(e) Stars in galaxy: 100,000,000,000</b> = <span class="ans-highlight">1 × 10¹¹</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(f) Universe age: 12,000,000,000 years</b> = <span class="ans-highlight">1.2 × 10¹⁰ years</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(g) Distance to galaxy center: 300,000,000,000,000,000,000 m</b> = <span class="ans-highlight">3 × 10²⁰ m</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(h) Molecules in water drop: 60,230,000,000,000,000,000,000</b> = <span class="ans-highlight">6.023 × 10²²</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(i) Seawater: 1,353,000,000 cubic km</b> = <span class="ans-highlight">1.353 × 10⁹ cubic km</span></div>
                    <div class="sol-step"><b style="color:#8E24AA;">(j) Population: 1,027,000,000</b> = <span class="ans-highlight">1.027 × 10⁹</span></div>
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

fs.writeFileSync(path.join(__dirname, 'data', 'content', 'c7-math-11.ts'), c7Math11Full, 'utf-8');
console.log("Successfully wrote full complete c7-math-11.ts!");
