const fs = require('fs');
const path = require('path');

function frac(num, den) {
  return `<div class="frac"><span class="num">${num}</span><span class="den">${den}</span></div>`;
}

function mixedFrac(whole, num, den) {
  return `${whole} <div class="frac"><span class="num">${num}</span><span class="den">${den}</span></div>`;
}

const content = `import { ChapterContent } from "../types";

export const c7Math2: ChapterContent = {
  id: "c7-math-2",
  number: 2,
  title: "Fractions and Decimals",
  isHtmlView: true,
  introduction:
    "In this chapter, we will learn about fractions and decimals including their addition, subtraction, multiplication and division. We will also explore how to represent them visually and solve real-life problems.",
  definitions: [
    {
      term: "Proper Fraction",
      description: "A fraction where the numerator is less than the denominator. Example: 3/5",
    },
    {
      term: "Improper Fraction",
      description: "A fraction where the numerator is greater than or equal to the denominator. Example: 7/4",
    },
    {
      term: "Mixed Fraction",
      description: "A combination of a whole number and a proper fraction. Example: 2 ¾",
    },
    {
      term: "Reciprocal",
      description: "The inverted form of a non-zero fraction such that their product is 1.",
    },
  ],
  keyPoints: [
    "To add or subtract unlike fractions, first take the LCM of denominators to make them like fractions.",
    "Product of fractions = (Product of Numerators) / (Product of Denominators).",
    "To divide one fraction by another, multiply the first fraction by the reciprocal of the second.",
    "When multiplying decimals by 10, 100, or 1000, shift the decimal point to the right.",
    "When dividing decimals by 10, 100, or 1000, shift the decimal point to the left.",
  ],
  formulas: [
    { name: "Fraction Multiplication", formula: "\\\\frac{a}{b} \\\\times \\\\frac{c}{d} = \\\\frac{a \\\\times c}{b \\\\times d}" },
    { name: "Fraction Division", formula: "\\\\frac{a}{b} \\\\div \\\\frac{c}{d} = \\\\frac{a}{b} \\\\times \\\\frac{d}{c}" },
    { name: "Reciprocal", formula: "\\\\text{Reciprocal of } \\\\frac{a}{b} = \\\\frac{b}{a}" },
  ],
  crux: [],
  exercises: [
    { id: "ex2-1", name: "Exercise 2.1", questions: [] },
    { id: "ex2-2", name: "Exercise 2.2", questions: [] },
    { id: "ex2-3", name: "Exercise 2.3", questions: [] },
    { id: "ex2-4", name: "Exercise 2.4", questions: [] },
    { id: "ex2-5", name: "Exercise 2.5", questions: [] },
    { id: "ex2-6", name: "Exercise 2.6", questions: [] },
    { id: "ex2-7", name: "Exercise 2.7", questions: [] },
  ],
  htmlOverview: \`
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF4081; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 64, 129, 0.05); border-left: 4px solid #FF4081; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FF4081; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Fractions and Decimals</div>
            <p class="content-text">This chapter covers proper, improper and mixed fractions, fraction arithmetic (addition, subtraction, multiplication, division), reciprocals, decimal operations, unit conversions, and real-life word problems.</p>
            <div class="point-box">
                <div class="point-item">LCM Method: Convert unlike fractions to like fractions before addition/subtraction.</div>
                <div class="point-item">Reciprocals & Division: Flip the second fraction and multiply.</div>
                <div class="point-item">Decimals: Shift point right for multiplication by 10/100/1000 and left for division.</div>
            </div>
        </div>
    \`,
  htmlExercises: {
    "ex2-1": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Solve the following fraction expressions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2 - ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 2 as a fraction: ${frac(2,1)}</div>
                    <div class="sol-step">LCM of denominators 1 and 5 = 5</div>
                    <div class="sol-step">Converting ${frac(2,1)} to denominator 5: ${frac('2 × 5','1 × 5')} = ${frac(10,5)}</div>
                    <div class="sol-step">= ${frac(10,5)} - ${frac(3,5)}</div>
                    <div class="sol-step">= ${frac('10 - 3', 5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(7,5)} = ${mixedFrac(1, 2, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 + ${frac(7,8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 4 as a fraction: ${frac(4,1)}</div>
                    <div class="sol-step">LCM of denominators 1 and 8 = 8</div>
                    <div class="sol-step">Converting ${frac(4,1)} to denominator 8: ${frac('4 × 8','1 × 8')} = ${frac(32,8)}</div>
                    <div class="sol-step">= ${frac(32,8)} + ${frac(7,8)}</div>
                    <div class="sol-step">= ${frac('32 + 7', 8)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(39,8)} = ${mixedFrac(4, 7, 8)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(3,5)} + ${frac(2,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 7 = 35</div>
                    <div class="sol-step">${frac(3,5)} = ${frac('3 × 7','5 × 7')} = ${frac(21,35)}</div>
                    <div class="sol-step">${frac(2,7)} = ${frac('2 × 5','7 × 5')} = ${frac(10,35)}</div>
                    <div class="sol-step">= ${frac(21,35)} + ${frac(10,35)}</div>
                    <div class="sol-step">= ${frac('21 + 10', 35)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(31,35)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${frac(9,11)} - ${frac(4,15)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 11 and 15 = 165</div>
                    <div class="sol-step">${frac(9,11)} = ${frac('9 × 15', 165)} = ${frac(135,165)}</div>
                    <div class="sol-step">${frac(4,15)} = ${frac('4 × 11', 165)} = ${frac(44,165)}</div>
                    <div class="sol-step">= ${frac(135,165)} - ${frac(44,165)}</div>
                    <div class="sol-step">= ${frac('135 - 44', 165)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(91,165)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${frac(7,10)} + ${frac(2,5)} + ${frac(3,2)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 10, 5, 2 = 10</div>
                    <div class="sol-step">${frac(7,10)} = ${frac(7,10)}</div>
                    <div class="sol-step">${frac(2,5)} = ${frac('2 × 2', 10)} = ${frac(4,10)}</div>
                    <div class="sol-step">${frac(3,2)} = ${frac('3 × 5', 10)} = ${frac(15,10)}</div>
                    <div class="sol-step">= ${frac('7 + 4 + 15', 10)}</div>
                    <div class="sol-step">= ${frac(26,10)} = ${frac(13,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(13,5)} = ${mixedFrac(2, 3, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${mixedFrac(2, 2, 3)} + ${mixedFrac(3, 1, 2)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to improper fractions: ${mixedFrac(2, 2, 3)} = ${frac(8,3)}, ${mixedFrac(3, 1, 2)} = ${frac(7,2)}</div>
                    <div class="sol-step">LCM of 3 and 2 = 6</div>
                    <div class="sol-step">${frac(8,3)} = ${frac('8 × 2', 6)} = ${frac(16,6)}</div>
                    <div class="sol-step">${frac(7,2)} = ${frac('7 × 3', 6)} = ${frac(21,6)}</div>
                    <div class="sol-step">= ${frac('16 + 21', 6)} = ${frac(37,6)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(37,6)} = ${mixedFrac(6, 1, 6)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) ${mixedFrac(8, 1, 2)} - ${mixedFrac(3, 5, 8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to improper fractions: ${mixedFrac(8, 1, 2)} = ${frac(17,2)}, ${mixedFrac(3, 5, 8)} = ${frac(29,8)}</div>
                    <div class="sol-step">LCM of 2 and 8 = 8</div>
                    <div class="sol-step">${frac(17,2)} = ${frac('17 × 4', 8)} = ${frac(68,8)}</div>
                    <div class="sol-step">= ${frac(68,8)} - ${frac(29,8)} = ${frac('68 - 29', 8)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(39,8)} = ${mixedFrac(4, 7, 8)}</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Arrange the following in descending order:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(2,9)}, ${frac(2,3)}, ${frac(8,21)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 9, 3, 21 = 63</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• ${frac(2,9)} = ${frac('2 × 7', 63)} = ${frac(14,63)}</div>
                    <div class="sol-step">• ${frac(2,3)} = ${frac('2 × 21', 63)} = ${frac(42,63)}</div>
                    <div class="sol-step">• ${frac(8,21)} = ${frac('8 × 3', 63)} = ${frac(24,63)}</div>
                    <div class="sol-step">Comparing numerators: 42 &gt; 24 &gt; 14</div>
                    <div class="sol-step">So, ${frac(42,63)} &gt; ${frac(24,63)} &gt; ${frac(14,63)}</div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: ${frac(2,3)} &gt; ${frac(8,21)} &gt; ${frac(2,9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(1,5)}, ${frac(3,7)}, ${frac(7,10)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 5, 7, 10 = 70</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• ${frac(1,5)} = ${frac('1 × 14', 70)} = ${frac(14,70)}</div>
                    <div class="sol-step">• ${frac(3,7)} = ${frac('3 × 10', 70)} = ${frac(30,70)}</div>
                    <div class="sol-step">• ${frac(7,10)} = ${frac('7 × 7', 70)} = ${frac(49,70)}</div>
                    <div class="sol-step">Comparing numerators: 49 &gt; 30 &gt; 14</div>
                    <div class="sol-step">So, ${frac(49,70)} &gt; ${frac(30,70)} &gt; ${frac(14,70)}</div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: ${frac(7,10)} &gt; ${frac(3,7)} &gt; ${frac(1,5)}</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. In a "magic square", the sum of the numbers in each row, in each column and along the diagonals is the same. Check if the given square is a magic square:<br/>Row 1: ${frac(4,11)}, ${frac(9,11)}, ${frac(2,11)}<br/>Row 2: ${frac(3,11)}, ${frac(5,11)}, ${frac(7,11)}<br/>Row 3: ${frac(8,11)}, ${frac(1,11)}, ${frac(6,11)}</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum along rows:</div>
                    <div class="sol-step">• Row 1 = ${frac(4,11)} + ${frac(9,11)} + ${frac(2,11)} = ${frac('4 + 9 + 2', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">• Row 2 = ${frac(3,11)} + ${frac(5,11)} + ${frac(7,11)} = ${frac('3 + 5 + 7', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">• Row 3 = ${frac(8,11)} + ${frac(1,11)} + ${frac(6,11)} = ${frac('8 + 1 + 6', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">Sum along columns:</div>
                    <div class="sol-step">• Column 1 = ${frac(4,11)} + ${frac(3,11)} + ${frac(8,11)} = ${frac('4 + 3 + 8', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">• Column 2 = ${frac(9,11)} + ${frac(5,11)} + ${frac(1,11)} = ${frac('9 + 5 + 1', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">• Column 3 = ${frac(2,11)} + ${frac(7,11)} + ${frac(6,11)} = ${frac('2 + 7 + 6', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">Sum along diagonals:</div>
                    <div class="sol-step">• Diagonal 1 = ${frac(4,11)} + ${frac(5,11)} + ${frac(6,11)} = ${frac('4 + 5 + 6', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">• Diagonal 2 = ${frac(2,11)} + ${frac(5,11)} + ${frac(8,11)} = ${frac('2 + 5 + 8', 11)} = ${frac(15,11)}</div>
                    <div class="sol-step">Since all row, column and diagonal sums equal ${frac(15,11)}, <span class="ans-highlight">Yes, this is a magic square.</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A rectangular sheet of paper is ${mixedFrac(12, 1, 2)} cm long and ${mixedFrac(10, 2, 3)} cm wide. Find its perimeter.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of rectangular sheet = ${mixedFrac(12, 1, 2)} cm = ${frac('12 × 2 + 1', 2)} = ${frac(25,2)} cm</div>
                    <div class="sol-step">Breadth of rectangular sheet = ${mixedFrac(10, 2, 3)} cm = ${frac('10 × 3 + 2', 3)} = ${frac(32,3)} cm</div>
                    <div class="sol-step">Perimeter of rectangle = 2 × (Length + Breadth)</div>
                    <div class="sol-step">= 2 × [${frac(25,2)} + ${frac(32,3)}]</div>
                    <div class="sol-step">LCM of 2 and 3 = 6</div>
                    <div class="sol-step">${frac(25,2)} = ${frac('25 × 3', 6)} = ${frac(75,6)}</div>
                    <div class="sol-step">${frac(32,3)} = ${frac('32 × 2', 6)} = ${frac(64,6)}</div>
                    <div class="sol-step">= 2 × [${frac('75 + 64', 6)}]</div>
                    <div class="sol-step">= 2 × ${frac(139,6)} = ${frac(139,3)} cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of sheet = ${frac(139,3)} cm = ${mixedFrac(46, 1, 3)} cm</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find the perimeters of (i) triangle ABE (ii) rectangle BCDE in this figure. Whose perimeter is greater?</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="260" height="210" viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; display:block; margin:0 auto;">
                            <polygon points="130,15 40,95 220,95" fill="rgba(66, 165, 245, 0.2)" stroke="#42A5F5" stroke-width="3"/>
                            <rect x="40" y="95" width="180" height="85" fill="rgba(66, 165, 245, 0.1)" stroke="#42A5F5" stroke-width="3"/>
                            <text x="130" y="12" fill="#64B5F6" font-size="15" font-weight="bold" text-anchor="middle">A</text>
                            <text x="22" y="100" fill="#64B5F6" font-size="15" font-weight="bold">B</text>
                            <text x="230" y="100" fill="#64B5F6" font-size="15" font-weight="bold">E</text>
                            <text x="22" y="190" fill="#64B5F6" font-size="15" font-weight="bold">C</text>
                            <text x="230" y="190" fill="#64B5F6" font-size="15" font-weight="bold">D</text>
                            <text x="70" y="50" fill="#90CAF9" font-size="13" font-weight="bold">5/2 cm</text>
                            <text x="170" y="50" fill="#90CAF9" font-size="13" font-weight="bold">3 ⅗ cm</text>
                            <text x="130" y="115" fill="#90CAF9" font-size="13" font-weight="bold" text-anchor="middle">2 ¾ cm</text>
                            <text x="130" y="200" fill="#90CAF9" font-size="13" font-weight="bold" text-anchor="middle">7/6 cm</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) Perimeter of Triangle ABE:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Side AB = ${frac(5,2)} cm</div>
                    <div class="sol-step">Side BE = ${mixedFrac(2, 3, 4)} cm = ${frac(11,4)} cm</div>
                    <div class="sol-step">Side AE = ${mixedFrac(3, 3, 5)} cm = ${frac(18,5)} cm</div>
                    <div class="sol-step">Perimeter = AB + BE + EA = ${frac(5,2)} + ${frac(11,4)} + ${frac(18,5)}</div>
                    <div class="sol-step">LCM of 2, 4, 5 = 20</div>
                    <div class="sol-step">${frac(5,2)} = ${frac(50,20)}, ${frac(11,4)} = ${frac(55,20)}, ${frac(18,5)} = ${frac(72,20)}</div>
                    <div class="sol-step">= ${frac('50 + 55 + 72', 20)} = ${frac(177,20)} cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of △ABE = ${frac(177,20)} cm = ${mixedFrac(8, 17, 20)} cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Perimeter of Rectangle BCDE & Comparison:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length BE = ${mixedFrac(2, 3, 4)} cm = ${frac(11,4)} cm</div>
                    <div class="sol-step">Breadth ED = ${frac(7,6)} cm</div>
                    <div class="sol-step">Perimeter = 2 × (BE + ED) = 2 × [${frac(11,4)} + ${frac(7,6)}]</div>
                    <div class="sol-step">LCM of 4 and 6 = 12</div>
                    <div class="sol-step">${frac(11,4)} = ${frac(33,12)}, ${frac(7,6)} = ${frac(14,12)}</div>
                    <div class="sol-step">= 2 × [${frac('33 + 14', 12)}] = 2 × ${frac(47,12)} = ${frac(47,6)} cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of BCDE = ${frac(47,6)} cm = ${mixedFrac(7, 5, 6)} cm</span></div>
                    <div class="sol-step" style="margin-top: 10px;">Comparing perimeters (LCM of 20 and 6 = 60):</div>
                    <div class="sol-step">${frac(177,20)} = ${frac('177 × 3', 60)} = ${frac(531,60)}</div>
                    <div class="sol-step">${frac(47,6)} = ${frac('47 × 10', 60)} = ${frac(470,60)}</div>
                    <div class="sol-step">Since 531/60 &gt; 470/60, <span class="ans-highlight">Perimeter of Triangle ABE is greater.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Salil wants to put a picture in a frame. The picture is ${mixedFrac(7, 3, 5)} cm wide. To fit in the frame the picture cannot be more than ${mixedFrac(7, 3, 10)} cm wide. How much should the picture be trimmed?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Width of picture = ${mixedFrac(7, 3, 5)} cm = ${frac('7 × 5 + 3', 5)} = ${frac(38,5)} cm</div>
                    <div class="sol-step">Max width of frame = ${mixedFrac(7, 3, 10)} cm = ${frac('7 × 10 + 3', 10)} = ${frac(73,10)} cm</div>
                    <div class="sol-step">Width to be trimmed = Picture width - Frame width</div>
                    <div class="sol-step">= ${frac(38,5)} - ${frac(73,10)}</div>
                    <div class="sol-step">LCM of 5 and 10 = 10</div>
                    <div class="sol-step">${frac(38,5)} = ${frac('38 × 2', 10)} = ${frac(76,10)}</div>
                    <div class="sol-step">= ${frac('76 - 73', 10)} = ${frac(3,10)} cm</div>
                    <div class="sol-step"><span class="ans-highlight">Picture to be trimmed = ${frac(3,10)} cm</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Ritu ate ${frac(3,5)} part of an apple and the remaining apple was eaten by her brother Somu. What part of the apple did Somu eat? Who had the larger share? By how much?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total apple = 1</div>
                    <div class="sol-step">Part eaten by Ritu = ${frac(3,5)}</div>
                    <div class="sol-step">Part eaten by Somu = 1 - ${frac(3,5)} = ${frac(5,5)} - ${frac(3,5)} = ${frac('5 - 3', 5)} = ${frac(2,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">Somu ate ${frac(2,5)} part of the apple.</span></div>
                    <div class="sol-step">Comparing ${frac(3,5)} and ${frac(2,5)}: Since 3 &gt; 2, ${frac(3,5)} &gt; ${frac(2,5)}.</div>
                    <div class="sol-step"><span class="ans-highlight">Ritu had the larger share.</span></div>
                    <div class="sol-step">Difference = ${frac(3,5)} - ${frac(2,5)} = ${frac('3 - 2', 5)} = ${frac(1,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">Ritu's share was larger by ${frac(1,5)} part.</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Michael finished colouring a picture in ${frac(7,12)} hour. Vaibhav finished colouring the same picture in ${frac(3,4)} hour. Who worked longer? By what fraction was it longer?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time taken by Michael = ${frac(7,12)} hour</div>
                    <div class="sol-step">Time taken by Vaibhav = ${frac(3,4)} hour = ${frac('3 × 3', '4 × 3')} = ${frac(9,12)} hour</div>
                    <div class="sol-step">Comparing ${frac(9,12)} and ${frac(7,12)}: Since 9 &gt; 7, ${frac(9,12)} &gt; ${frac(7,12)}</div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer.</span></div>
                    <div class="sol-step">Difference = ${frac(9,12)} - ${frac(7,12)} = ${frac('9 - 7', 12)} = ${frac(2,12)} = ${frac(1,6)} hour</div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer by ${frac(1,6)} of an hour.</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-2": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Which of the drawings (a) to (d) show: (i) 2 × ${frac(1,5)} (ii) 2 × ${frac(1,2)} (iii) 3 × ${frac(2,3)} (iv) 3 × ${frac(1,4)}</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="320" height="240" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; display:block; margin:0 auto;">
                            <g id="fig-a">
                                <text x="10" y="40" fill="#42A5F5" font-size="14" font-weight="bold">(a)</text>
                                <circle cx="50" cy="35" r="20" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M50,35 L50,15 A20,20 0 1,1 32.6,45 Z" fill="rgba(66, 165, 245, 0.4)"/>
                                <circle cx="100" cy="35" r="20" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M100,35 L100,15 A20,20 0 1,1 82.6,45 Z" fill="rgba(66, 165, 245, 0.4)"/>
                                <circle cx="150" cy="35" r="20" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M150,35 L150,15 A20,20 0 1,1 132.6,45 Z" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                            <g id="fig-b">
                                <text x="195" y="40" fill="#42A5F5" font-size="14" font-weight="bold">(b)</text>
                                <rect x="225" y="15" width="35" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="242.5" y="15" width="17.5" height="40" fill="rgba(66, 165, 245, 0.4)"/>
                                <rect x="270" y="15" width="35" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="287.5" y="15" width="17.5" height="40" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                            <g id="fig-c">
                                <text x="10" y="140" fill="#42A5F5" font-size="14" font-weight="bold">(c)</text>
                                <rect x="40" y="110" width="35" height="35" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="57.5" y="127.5" width="17.5" height="17.5" fill="rgba(66, 165, 245, 0.4)"/>
                                <line x1="57.5" y1="110" x2="57.5" y2="145" stroke="#42A5F5" stroke-width="1"/>
                                <line x1="40" y1="127.5" x2="75" y2="127.5" stroke="#42A5F5" stroke-width="1"/>

                                <rect x="85" y="110" width="35" height="35" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="102.5" y="127.5" width="17.5" height="17.5" fill="rgba(66, 165, 245, 0.4)"/>
                                <line x1="102.5" y1="110" x2="102.5" y2="145" stroke="#42A5F5" stroke-width="1"/>
                                <line x1="85" y1="127.5" x2="120" y2="127.5" stroke="#42A5F5" stroke-width="1"/>

                                <rect x="130" y="110" width="35" height="35" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="147.5" y="127.5" width="17.5" height="17.5" fill="rgba(66, 165, 245, 0.4)"/>
                                <line x1="147.5" y1="110" x2="147.5" y2="145" stroke="#42A5F5" stroke-width="1"/>
                                <line x1="130" y1="127.5" x2="165" y2="127.5" stroke="#42A5F5" stroke-width="1"/>
                            </g>
                            <g id="fig-d">
                                <text x="195" y="140" fill="#42A5F5" font-size="14" font-weight="bold">(d)</text>
                                <circle cx="235" cy="127" r="20" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M235,127 L235,107 A20,20 0 0,1 254,121 Z" fill="rgba(66, 165, 245, 0.4)"/>
                                <circle cx="285" cy="127" r="20" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M285,127 L285,107 A20,20 0 0,1 304,121 Z" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 2 × ${frac(1,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 5 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (d).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × ${frac(1,2)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 2 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (b).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × ${frac(2,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 2 parts shaded out of 3 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3 × ${frac(1,4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 1 part shaded out of 4 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (c).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Some pictures (a) to (c) are given below. Tell which of them show: (i) 3 × ${frac(1,5)} = ${frac(3,5)} (ii) 2 × ${frac(1,3)} = ${frac(2,3)} (iii) 3 × ${frac(3,4)} = ${mixedFrac(2, 1, 4)}</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; display:block; margin:0 auto;">
                            <g id="pic-a">
                                <text x="5" y="35" fill="#42A5F5" font-size="13" font-weight="bold">(a)</text>
                                <circle cx="40" cy="30" r="16" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M40,30 L40,14 A16,16 0 0,1 53.8,38 Z" fill="rgba(66, 165, 245, 0.4)"/>
                                <circle cx="80" cy="30" r="16" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M80,30 L80,14 A16,16 0 0,1 93.8,38 Z" fill="rgba(66, 165, 245, 0.4)"/>
                                <text x="108" y="35" fill="#64B5F6" font-size="16" font-weight="bold">=</text>
                                <circle cx="135" cy="30" r="16" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <path d="M135,30 L135,14 A16,16 0 1,1 121.2,38 Z" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                            <g id="pic-b">
                                <text x="5" y="95" fill="#42A5F5" font-size="13" font-weight="bold">(b)</text>
                                <polygon points="40,75 25,105 55,105" fill="rgba(66, 165, 245, 0.4)" stroke="#42A5F5" stroke-width="2"/>
                                <polygon points="75,75 60,105 90,105" fill="rgba(66, 165, 245, 0.4)" stroke="#42A5F5" stroke-width="2"/>
                                <polygon points="110,75 95,105 125,105" fill="rgba(66, 165, 245, 0.4)" stroke="#42A5F5" stroke-width="2"/>
                                <text x="133" y="95" fill="#64B5F6" font-size="16" font-weight="bold">=</text>
                                <polygon points="160,75 145,105 175,105" fill="rgba(66, 165, 245, 0.4)" stroke="#42A5F5" stroke-width="2"/>
                                <polygon points="195,75 180,105 210,105" fill="rgba(66, 165, 245, 0.4)" stroke="#42A5F5" stroke-width="2"/>
                                <polygon points="230,75 215,105 245,105" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <polygon points="230,75 215,105 230,105" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                            <g id="pic-c">
                                <text x="5" y="160" fill="#42A5F5" font-size="13" font-weight="bold">(c)</text>
                                <rect x="35" y="135" width="25" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="35" y="135" width="25" height="8" fill="rgba(66, 165, 245, 0.4)"/>
                                <rect x="70" y="135" width="25" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="70" y="135" width="25" height="8" fill="rgba(66, 165, 245, 0.4)"/>
                                <rect x="105" y="135" width="25" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="105" y="135" width="25" height="8" fill="rgba(66, 165, 245, 0.4)"/>
                                <text x="138" y="160" fill="#64B5F6" font-size="16" font-weight="bold">=</text>
                                <rect x="155" y="135" width="25" height="40" fill="none" stroke="#42A5F5" stroke-width="2"/>
                                <rect x="155" y="135" width="25" height="24" fill="rgba(66, 165, 245, 0.4)"/>
                            </g>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 3 × ${frac(1,5)} = ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with ${frac(1,5)} shaded equal to 1 figure with ${frac(3,5)} shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (c).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × ${frac(1,3)} = ${frac(2,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures with ${frac(1,3)} shaded equal to 1 figure with ${frac(2,3)} shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × ${frac(3,4)} = ${mixedFrac(2, 1, 4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with ${frac(3,4)} shaded equal to 2 fully shaded and 1 with ${frac(1,4)} shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (b).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply and reduce to lowest form and convert into a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 × ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('7 × 3', 5)} = ${frac(21,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(4, 1, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 × ${frac(1,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('4 × 1', 3)} = ${frac(4,3)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 1, 3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2 × ${frac(6,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('2 × 6', 7)} = ${frac(12,7)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 5, 7)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5 × ${frac(2,9)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('5 × 2', 9)} = ${frac(10,9)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 1, 9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${frac(2,3)} × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('2 × 4', 3)} = ${frac(8,3)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(2, 2, 3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${frac(5,2)} × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('5 × 6', 2)} = ${frac(30,2)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 11 × ${frac(4,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('11 × 4', 7)} = ${frac(44,7)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(6, 2, 7)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 20 × ${frac(4,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('20 × 4', 5)} = ${frac(80,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 13 × ${frac(1,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('13 × 1', 3)} = ${frac(13,3)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(4, 1, 3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 15 × ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('15 × 3', 5)} = ${frac(45,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 9</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Shade parts of figures:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="300" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; display:block; margin:0 auto;">
                            <rect x="10" y="10" width="75" height="100" fill="none" stroke="#42A5F5" stroke-width="2" rx="5"/>
                            <text x="47" y="128" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">(a)</text>
                            <circle cx="28" cy="28" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="47" cy="28" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="66" cy="28" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="28" cy="50" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="47" cy="50" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="66" cy="50" r="7" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <circle cx="28" cy="72" r="7" fill="none" stroke="#42A5F5"/>
                            <circle cx="47" cy="72" r="7" fill="none" stroke="#42A5F5"/>
                            <circle cx="66" cy="72" r="7" fill="none" stroke="#42A5F5"/>
                            <circle cx="28" cy="94" r="7" fill="none" stroke="#42A5F5"/>
                            <circle cx="47" cy="94" r="7" fill="none" stroke="#42A5F5"/>
                            <circle cx="66" cy="94" r="7" fill="none" stroke="#42A5F5"/>

                            <rect x="105" y="10" width="75" height="100" fill="none" stroke="#42A5F5" stroke-width="2" rx="5"/>
                            <text x="142" y="128" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">(b)</text>
                            <polygon points="124,18 116,36 132,36" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="142,18 134,36 150,36" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="160,18 152,36 168,36" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="124,46 116,64 132,64" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="142,46 134,64 150,64" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="160,46 152,64 168,64" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <polygon points="124,74 116,92 132,92" fill="none" stroke="#42A5F5"/>
                            <polygon points="142,74 134,92 150,92" fill="none" stroke="#42A5F5"/>
                            <polygon points="160,74 152,92 168,92" fill="none" stroke="#42A5F5"/>

                            <rect x="195" y="10" width="95" height="100" fill="none" stroke="#42A5F5" stroke-width="2" rx="5"/>
                            <text x="242" y="128" fill="#42A5F5" font-size="12" font-weight="bold" text-anchor="middle">(c)</text>
                            <rect x="205" y="20" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="220" y="20" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="235" y="20" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="250" y="20" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="268" y="20" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="205" y="42" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="220" y="42" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="235" y="42" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="250" y="42" width="11" height="11" fill="rgba(66,165,245,0.7)" stroke="#42A5F5"/>
                            <rect x="268" y="42" width="11" height="11" fill="none" stroke="#42A5F5"/>
                            <rect x="205" y="64" width="11" height="11" fill="none" stroke="#42A5F5"/>
                            <rect x="220" y="64" width="11" height="11" fill="none" stroke="#42A5F5"/>
                            <rect x="235" y="64" width="11" height="11" fill="none" stroke="#42A5F5"/>
                            <rect x="250" y="64" width="11" height="11" fill="none" stroke="#42A5F5"/>
                            <rect x="268" y="64" width="11" height="11" fill="none" stroke="#42A5F5"/>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) ½ of circles in box (a)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total circles in box (a) = 12</div>
                    <div class="sol-step">Number of circles to shade = ½ × 12 = 6</div>
                    <div class="sol-step"><span class="ans-highlight">Shade 6 circles.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ⅔ of triangles in box (b)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total triangles in box (b) = 9</div>
                    <div class="sol-step">Number of triangles to shade = ⅔ × 9 = 6</div>
                    <div class="sol-step"><span class="ans-highlight">Shade 6 triangles.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ⅗ of squares in box (c)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total squares in box (c) = 15</div>
                    <div class="sol-step">Number of squares to shade = ⅗ × 15 = 9</div>
                    <div class="sol-step"><span class="ans-highlight">Shade 9 squares.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) ½ of (i) 24 (ii) 46</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ½ × 24 = ${frac(24,2)} = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) ½ × 46 = ${frac(46,2)} = <span class="ans-highlight">23</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅔ of (i) 18 (ii) 27</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${frac(2,3)} × 18 = ${frac(36,3)} = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) ${frac(2,3)} × 27 = ${frac(54,3)} = <span class="ans-highlight">18</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) ¾ of (i) 16 (ii) 36</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${frac(3,4)} × 16 = ${frac(48,4)} = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) ${frac(3,4)} × 36 = ${frac(108,4)} = <span class="ans-highlight">27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) ⅘ of (i) 20 (ii) 35</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${frac(4,5)} × 20 = ${frac(80,5)} = <span class="ans-highlight">16</span></div>
                    <div class="sol-step">• (ii) ${frac(4,5)} × 35 = ${frac(140,5)} = <span class="ans-highlight">28</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Multiply and express as a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) 3 × ${mixedFrac(5, 1, 5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(5, 1, 5)} = ${frac('5 × 5 + 1', 5)} = ${frac(26,5)}</div>
                    <div class="sol-step">= 3 × ${frac(26,5)} = ${frac(78,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(15, 3, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) 5 × ${mixedFrac(6, 3, 4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(6, 3, 4)} = ${frac('6 × 4 + 3', 4)} = ${frac(27,4)}</div>
                    <div class="sol-step">= 5 × ${frac(27,4)} = ${frac(135,4)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(33, 3, 4)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) 7 × ${mixedFrac(2, 1, 4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 1, 4)} = ${frac('2 × 4 + 1', 4)} = ${frac(9,4)}</div>
                    <div class="sol-step">= 7 × ${frac(9,4)} = ${frac(63,4)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(15, 3, 4)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) 4 × ${mixedFrac(6, 1, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(6, 1, 3)} = ${frac('6 × 3 + 1', 3)} = ${frac(19,3)}</div>
                    <div class="sol-step">= 4 × ${frac(19,3)} = ${frac(76,3)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(25, 1, 3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) ${mixedFrac(3, 1, 4)} × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 1, 4)} = ${frac('3 × 4 + 1', 4)} = ${frac(13,4)}</div>
                    <div class="sol-step">= ${frac(13,4)} × 6 = ${frac(78,4)} = ${frac(39,2)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(19, 1, 2)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) ${mixedFrac(3, 2, 5)} × 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 2, 5)} = ${frac('3 × 5 + 2', 5)} = ${frac(17,5)}</div>
                    <div class="sol-step">= ${frac(17,5)} × 8 = ${frac(136,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(27, 1, 5)}</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) ½ of (i) ${mixedFrac(2, 3, 4)} (ii) ${mixedFrac(4, 2, 9)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${mixedFrac(2, 3, 4)} = ${frac(11,4)} ➔ ½ × ${frac(11,4)} = ${frac(11,8)} = <span class="ans-highlight">${mixedFrac(1, 3, 8)}</span></div>
                    <div class="sol-step">• (ii) ${mixedFrac(4, 2, 9)} = ${frac(38,9)} ➔ ½ × ${frac(38,9)} = ${frac(38,18)} = ${frac(19,9)} = <span class="ans-highlight">${mixedFrac(2, 1, 9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅝ of (i) ${mixedFrac(3, 5, 6)} (ii) ${mixedFrac(9, 2, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${mixedFrac(3, 5, 6)} = ${frac(23,6)} ➔ ${frac(5,8)} × ${frac(23,6)} = ${frac(115,48)} = <span class="ans-highlight">${mixedFrac(2, 19, 48)}</span></div>
                    <div class="sol-step">• (ii) ${mixedFrac(9, 2, 3)} = ${frac(29,3)} ➔ ${frac(5,8)} × ${frac(29,3)} = ${frac(145,24)} = <span class="ans-highlight">${mixedFrac(6, 1, 24)}</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Vidya and Pratap went for a picnic. Their mother gave them a water bottle that contained 5 liters of water. Vidya consumed 2/5 of the water. Pratap consumed the remaining water.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) How much water did Vidya drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total water = 5 liters</div>
                    <div class="sol-step">Water drank by Vidya = ${frac(2,5)} of 5 liters</div>
                    <div class="sol-step">= ${frac(2,5)} × 5 = 2 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Vidya drank 2 liters of water.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) What fraction of the total quantity of water did Pratap drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Fraction of water drank by Pratap = 1 - ${frac(2,5)} = ${frac('5 - 2', 5)} = ${frac(3,5)}</div>
                    <div class="sol-step">Quantity drank by Pratap = ${frac(3,5)} × 5 = 3 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Pratap drank ${frac(3,5)} of total water (3 liters).</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-3": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the following fractions of fractions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ¼ of (a) ¼ (b) ⅗ (c) 4/3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) ¼ × ¼ = ${frac('1 × 1', '4 × 4')} = <span class="ans-highlight">${frac(1,16)}</span></div>
                    <div class="sol-step">• (b) ¼ × ⅗ = ${frac('1 × 3', '4 × 5')} = <span class="ans-highlight">${frac(3,20)}</span></div>
                    <div class="sol-step">• (c) ¼ × ${frac(4,3)} = ${frac('1 × 4', '4 × 3')} = ${frac(4,12)} = <span class="ans-highlight">${frac(1,3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 1/7 of (a) 2/9 (b) 6/5 (c) 3/10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) ${frac(1,7)} × ${frac(2,9)} = ${frac('1 × 2', '7 × 9')} = <span class="ans-highlight">${frac(2,63)}</span></div>
                    <div class="sol-step">• (b) ${frac(1,7)} × ${frac(6,5)} = ${frac('1 × 6', '7 × 5')} = <span class="ans-highlight">${frac(6,35)}</span></div>
                    <div class="sol-step">• (c) ${frac(1,7)} × ${frac(3,10)} = ${frac('1 × 3', '7 × 10')} = <span class="ans-highlight">${frac(3,70)}</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Multiply and reduce to lowest form (if possible):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(2,3)} × ${mixedFrac(2, 2, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 2, 3)} = ${frac(8,3)} ➔ ${frac(2,3)} × ${frac(8,3)} = ${frac('2 × 8', '3 × 3')} = ${frac(16,9)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 7, 9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(2,7)} × ${frac(7,9)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('2 × 7', '7 × 9')} = ${frac(14,63)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(2,9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(3,8)} × ${frac(6,4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('3 × 6', '8 × 4')} = ${frac(18,32)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(9,16)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${frac(9,5)} × ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('9 × 3', '5 × 5')} = ${frac(27,25)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 2, 25)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${frac(1,3)} × ${frac(15,8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('1 × 15', '3 × 8')} = ${frac(15,24)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(5,8)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${frac(11,2)} × ${frac(3,10)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('11 × 3', '2 × 10')} = ${frac(33,20)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 13, 20)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) ${frac(4,5)} × ${frac(12,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac('4 × 12', '5 × 7')} = ${frac(48,35)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 13, 35)}</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply the following fractions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(2,5)} × ${mixedFrac(5, 1, 4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(5, 1, 4)} = ${frac(21,4)} ➔ ${frac(2,5)} × ${frac(21,4)} = ${frac(42,20)} = ${frac(21,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(2, 1, 10)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${mixedFrac(6, 2, 5)} × ${frac(7,9)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(6, 2, 5)} = ${frac(32,5)} ➔ ${frac(32,5)} × ${frac(7,9)} = ${frac(224,45)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(4, 44, 45)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(3,2)} × ${mixedFrac(5, 1, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(5, 1, 3)} = ${frac(16,3)} ➔ ${frac(3,2)} × ${frac(16,3)} = ${frac(48,6)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${frac(5,6)} × ${mixedFrac(2, 3, 7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 3, 7)} = ${frac(17,7)} ➔ ${frac(5,6)} × ${frac(17,7)} = ${frac(85,42)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(2, 1, 42)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${mixedFrac(3, 2, 5)} × ${frac(4,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 2, 5)} = ${frac(17,5)} ➔ ${frac(17,5)} × ${frac(4,7)} = ${frac(68,35)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 33, 35)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${mixedFrac(2, 3, 5)} × 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 3, 5)} = ${frac(13,5)} ➔ ${frac(13,5)} × 3 = ${frac(39,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(7, 4, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) ${mixedFrac(3, 4, 7)} × ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 4, 7)} = ${frac(25,7)} ➔ ${frac(25,7)} × ${frac(3,5)} = ${frac(75,35)} = ${frac(15,7)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(2, 1, 7)}</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Which is greater:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(2,7)} of ${frac(3,4)} OR ${frac(3,5)} of ${frac(5,8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: ${frac(2,7)} × ${frac(3,4)} = ${frac(6,28)} = ${frac(3,14)}</div>
                    <div class="sol-step">Second part: ${frac(3,5)} × ${frac(5,8)} = ${frac(15,40)} = ${frac(3,8)}</div>
                    <div class="sol-step">Comparing ${frac(3,14)} and ${frac(3,8)}: Since denominators 8 &lt; 14, ${frac(3,8)} &gt; ${frac(3,14)}.</div>
                    <div class="sol-step"><span class="ans-highlight">${frac(3,5)} of ${frac(5,8)} is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(1,2)} of ${frac(6,7)} OR ${frac(2,3)} of ${frac(3,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: ${frac(1,2)} × ${frac(6,7)} = ${frac(6,14)} = ${frac(3,7)}</div>
                    <div class="sol-step">Second part: ${frac(2,3)} × ${frac(3,7)} = ${frac(6,21)} = ${frac(2,7)}</div>
                    <div class="sol-step">Comparing ${frac(3,7)} and ${frac(2,7)}: Since 3 &gt; 2, ${frac(3,7)} &gt; ${frac(2,7)}.</div>
                    <div class="sol-step"><span class="ans-highlight">${frac(1,2)} of ${frac(6,7)} is greater.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Saili plants 4 saplings, in a row, in her garden. The distance between two adjacent saplings is ¾ m. Find the distance between the first and the last sapling.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance between 2 adjacent saplings = ${frac(3,4)} m</div>
                    <div class="sol-step">Number of gaps between 4 saplings = 4 - 1 = 3 gaps</div>
                    <div class="sol-step">Distance between 1st and 4th sapling = 3 × ${frac(3,4)} = ${frac(9,4)} m</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = ${frac(9,4)} m = ${mixedFrac(2, 1, 4)} m</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Lipika reads a book for ${mixedFrac(1, 3, 4)} hours every day. She reads the entire book in 6 days. How many hours in all were required by her to read the book?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time per day = ${mixedFrac(1, 3, 4)} hours = ${frac(7,4)} hours</div>
                    <div class="sol-step">Total days = 6 days</div>
                    <div class="sol-step">Total time = ${frac(7,4)} × 6 = ${frac(42,4)} = ${frac(21,2)} hours</div>
                    <div class="sol-step"><span class="ans-highlight">Total hours required = ${frac(21,2)} hours = ${mixedFrac(10, 1, 2)} hours</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. A car runs 16 km using 1 litre of petrol. How much distance will it cover using ${mixedFrac(2, 3, 4)} litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance covered in 1 litre = 16 km</div>
                    <div class="sol-step">Quantity of petrol = ${mixedFrac(2, 3, 4)} litres = ${frac(11,4)} litres</div>
                    <div class="sol-step">Total distance = 16 × ${frac(11,4)} = 4 × 11 = 44 km</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = 44 km</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Fill in the boxes and find simplest form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) (i) Provide number in [ ]: ${frac(2,3)} × [ ] = ${frac(10,30)} (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${frac(2,3)} × ${frac(5,10)} = ${frac(10,30)} ➔ <span class="ans-highlight">Number in box = ${frac(5,10)}</span></div>
                    <div class="sol-step">• (ii) Simplest form of ${frac(5,10)} = ${frac('5 ÷ 5', '10 ÷ 5')} = <span class="ans-highlight">${frac(1,2)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) (i) Provide number in [ ]: ${frac(3,5)} × [ ] = ${frac(24,75)} (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) ${frac(3,5)} × ${frac(8,15)} = ${frac(24,75)} ➔ <span class="ans-highlight">Number in box = ${frac(8,15)}</span></div>
                    <div class="sol-step">• (ii) Simplest form of ${frac(8,15)} = <span class="ans-highlight">${frac(8,15)}</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-4": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 12 ÷ ${frac(3,4)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 12 × reciprocal of ${frac(3,4)}</div>
                    <div class="sol-step">= 12 × ${frac(4,3)} = ${frac('12 × 4', 3)} = ${frac(48,3)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 14 ÷ ${frac(5,6)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 14 × reciprocal of ${frac(5,6)}</div>
                    <div class="sol-step">= 14 × ${frac(6,5)} = ${frac(84,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(16, 4, 5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 8 ÷ ${frac(7,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 × reciprocal of ${frac(7,3)}</div>
                    <div class="sol-step">= 8 × ${frac(3,7)} = ${frac(24,7)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(3, 3, 7)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 4 ÷ ${frac(8,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 × reciprocal of ${frac(8,3)}</div>
                    <div class="sol-step">= 4 × ${frac(3,8)} = ${frac(12,8)} = ${frac(3,2)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 1, 2)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ÷ ${mixedFrac(2, 1, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 1, 3)} = ${frac(7,3)}</div>
                    <div class="sol-step">= 3 ÷ ${frac(7,3)} = 3 × ${frac(3,7)} = ${frac(9,7)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 2, 7)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 5 ÷ ${mixedFrac(3, 4, 7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 4, 7)} = ${frac(25,7)}</div>
                    <div class="sol-step">= 5 ÷ ${frac(25,7)} = 5 × ${frac(7,25)} = ${frac(35,25)} = ${frac(7,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 2, 5)}</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the reciprocal of each of the following fractions. Classify the reciprocals as proper fractions, improper fractions and whole numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(3,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(3,7)} = ${frac(7,3)}</div>
                    <div class="sol-step">Since numerator (7) &gt; denominator (3), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(5,8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(5,8)} = ${frac(8,5)}</div>
                    <div class="sol-step">Since numerator (8) &gt; denominator (5), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(9,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(9,7)} = ${frac(7,9)}</div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (9), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${frac(6,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(6,5)} = ${frac(5,6)}</div>
                    <div class="sol-step">Since numerator (5) &lt; denominator (6), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${frac(12,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(12,7)} = ${frac(7,12)}</div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (12), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${frac(1,8)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(1,8)} = ${frac(8,1)} = 8</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) ${frac(1,11)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of ${frac(1,11)} = ${frac(11,1)} = 11</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(7,3)} ÷ 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(7,3)} × ${frac(1,2)} = ${frac(7,6)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 1, 6)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(4,9)} ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(4,9)} × ${frac(1,5)} = ${frac('4 × 1', '9 × 5')}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(4,45)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(6,13)} ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(6,13)} × ${frac(1,7)} = ${frac('6 × 1', '13 × 7')}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(6,91)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${mixedFrac(4, 1, 3)} ÷ 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(4, 1, 3)} = ${frac(13,3)}</div>
                    <div class="sol-step">= ${frac(13,3)} × ${frac(1,3)} = ${frac(13,9)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 4, 9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${mixedFrac(3, 1, 2)} ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 1, 2)} = ${frac(7,2)}</div>
                    <div class="sol-step">= ${frac(7,2)} × ${frac(1,4)} = ${frac(7,8)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(7,8)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${mixedFrac(4, 3, 7)} ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(4, 3, 7)} = ${frac(31,7)}</div>
                    <div class="sol-step">= ${frac(31,7)} × ${frac(1,7)} = ${frac(31,49)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(31,49)}</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ${frac(2,5)} ÷ ${frac(1,2)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(2,5)} × ${frac(2,1)} = ${frac(4,5)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(4,5)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) ${frac(4,9)} ÷ ${frac(2,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(4,9)} × ${frac(3,2)} = ${frac('4 × 3', '9 × 2')} = ${frac(12,18)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(2,3)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) ${frac(3,7)} ÷ ${frac(8,7)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ${frac(3,7)} × ${frac(7,8)} = ${frac('3 × 7', '7 × 8')} = ${frac(21,56)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(3,8)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) ${mixedFrac(2, 1, 3)} ÷ ${frac(3,5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 1, 3)} = ${frac(7,3)} ➔ ${frac(7,3)} × ${frac(5,3)} = ${frac(35,9)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(3, 8, 9)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) ${mixedFrac(3, 1, 2)} ÷ ${frac(8,3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 1, 2)} = ${frac(7,2)} ➔ ${frac(7,2)} × ${frac(3,8)} = ${frac(21,16)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 5, 16)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) ${frac(2,5)} ÷ ${mixedFrac(1, 1, 2)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(1, 1, 2)} = ${frac(3,2)} ➔ ${frac(2,5)} × ${frac(2,3)} = ${frac(4,15)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${frac(4,15)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) ${mixedFrac(3, 1, 5)} ÷ ${mixedFrac(1, 2, 3)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(3, 1, 5)} = ${frac(16,5)}, ${mixedFrac(1, 2, 3)} = ${frac(5,3)} ➔ ${frac(16,5)} × ${frac(3,5)} = ${frac(48,25)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 23, 25)}</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) ${mixedFrac(2, 1, 5)} ÷ ${mixedFrac(1, 1, 5)}</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">${mixedFrac(2, 1, 5)} = ${frac(11,5)}, ${mixedFrac(1, 1, 5)} = ${frac(6,5)} ➔ ${frac(11,5)} × ${frac(5,6)} = ${frac(55,30)} = ${frac(11,6)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ${mixedFrac(1, 5, 6)}</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-5": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #42A5F5; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Which is greater:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 0.5 or 0.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Whole number parts are equal (0 = 0).</div>
                    <div class="sol-step">Comparing tenths place: 5 &gt; 0.</div>
                    <div class="sol-step"><span class="ans-highlight">0.5 is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.7 or 0.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Whole number parts are equal (0 = 0).</div>
                    <div class="sol-step">Comparing tenths place: 7 &gt; 5.</div>
                    <div class="sol-step"><span class="ans-highlight">0.7 is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 7 or 0.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Comparing whole number parts: 7 &gt; 0.</div>
                    <div class="sol-step"><span class="ans-highlight">7 is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 1.37 or 1.49</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Whole number parts are equal (1 = 1).</div>
                    <div class="sol-step">Comparing tenths place: 3 &lt; 4.</div>
                    <div class="sol-step"><span class="ans-highlight">1.49 is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 2.03 or 2.30</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Whole number parts are equal (2 = 2).</div>
                    <div class="sol-step">Comparing tenths place: 0 &lt; 3.</div>
                    <div class="sol-step"><span class="ans-highlight">2.30 is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 0.8 or 0.88</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing with equal decimal places: 0.80 and 0.88.</div>
                    <div class="sol-step">Comparing hundredths place: 0 &lt; 8.</div>
                    <div class="sol-step"><span class="ans-highlight">0.88 is greater.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Express as rupees using decimals:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100 paise = ₹ 1 ➔ 1 paise = ₹ ${frac(1, 100)}</div>
                    <div class="sol-step">7 paise = ₹ ${frac(7, 100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 7 rupees 7 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 7 + ₹ ${frac(7, 100)}</div>
                    <div class="sol-step">= ₹ 7 + ₹ 0.07</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 7.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 77 rupees 77 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 77 + ₹ ${frac(77, 100)}</div>
                    <div class="sol-step">= ₹ 77 + ₹ 0.77</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 77.77</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 50 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ ${frac(50, 100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.50</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 235 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ ${frac(235, 100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 2.35</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express in different units:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) Express 5 cm in meter and kilometer</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100 cm = 1 m ➔ 5 cm = ${frac(5, 100)} m = <span class="ans-highlight">0.05 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.05 m = ${frac('0.05', 1000)} km = <span class="ans-highlight">0.00005 km</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Express 35 mm in cm, m and km</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">10 mm = 1 cm ➔ 35 mm = ${frac(35, 10)} cm = <span class="ans-highlight">3.5 cm</span></div>
                    <div class="sol-step">100 cm = 1 m ➔ 3.5 cm = ${frac('3.5', 100)} m = <span class="ans-highlight">0.035 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.035 m = ${frac('0.035', 1000)} km = <span class="ans-highlight">0.000035 km</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express in kg:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 200 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1000 g = 1 kg ➔ 200 g = ${frac(200, 1000)} kg = <span class="ans-highlight">0.2 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 3470 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3470 g = ${frac(3470, 1000)} kg = <span class="ans-highlight">3.47 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 4 kg 8 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 kg + ${frac(8, 1000)} kg = 4 kg + 0.008 kg = <span class="ans-highlight">4.008 kg</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Write the following decimal numbers in the expanded form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 20.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 10) + (0 × 1) + (0 × ${frac(1,10)}) + (3 × ${frac(1,100)})</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × ${frac(1,10)}) + (3 × ${frac(1,100)})</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 200.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 100) + (0 × 10) + (0 × 1) + (0 × ${frac(1,10)}) + (3 × ${frac(1,100)})</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 2.034</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × ${frac(1,10)}) + (3 × ${frac(1,100)}) + (4 × ${frac(1,1000)})</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Write the place value of 2 in the following decimal numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.56</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 is in the units place before decimal. <span class="ans-highlight">Place value = Ones</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 21.37</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 is in the tens place. <span class="ans-highlight">Place value = Tens</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 10.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 is the first digit after decimal. <span class="ans-highlight">Place value = Tenths</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 9.42</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 is the second digit after decimal. <span class="ans-highlight">Place value = Hundredths</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 63.352</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 is the third digit after decimal. <span class="ans-highlight">Place value = Thousandths</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Dinesh went from place A to B (7.5 km) and then to C (12.7 km). Ayub went from A to D (9.3 km) and then to C (11.8 km). Who travelled more and by how much?</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="260" height="170" viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; display:block; margin:0 auto;">
                            <polygon points="45,35 135,15 235,100 85,130" fill="rgba(66, 165, 245, 0.15)" stroke="#42A5F5" stroke-width="3"/>
                            <text x="30" y="35" fill="#42A5F5" font-size="15" font-weight="bold">A</text>
                            <text x="135" y="12" fill="#42A5F5" font-size="15" font-weight="bold">B</text>
                            <text x="245" y="105" fill="#42A5F5" font-size="15" font-weight="bold">C</text>
                            <text x="70" y="145" fill="#42A5F5" font-size="15" font-weight="bold">D</text>
                            <text x="80" y="22" fill="#90CAF9" font-size="12" font-weight="bold">7.5 km</text>
                            <text x="195" y="55" fill="#90CAF9" font-size="12" font-weight="bold">12.7 km</text>
                            <text x="40" y="90" fill="#90CAF9" font-size="12" font-weight="bold">9.3 km</text>
                            <text x="155" y="130" fill="#90CAF9" font-size="12" font-weight="bold">11.8 km</text>
                        </svg>
                    </div>

                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance travelled by Dinesh = AB + BC = 7.5 km + 12.7 km = 20.2 km</div>
                    <div class="sol-step">Distance travelled by Ayub = AD + DC = 9.3 km + 11.8 km = 21.1 km</div>
                    <div class="sol-step">Comparing 21.1 km and 20.2 km: Since 21.1 &gt; 20.2</div>
                    <div class="sol-step"><span class="ans-highlight">Ayub travelled more distance.</span></div>
                    <div class="sol-step">Difference = 21.1 km - 20.2 km = 0.9 km</div>
                    <div class="sol-step"><span class="ans-highlight">Ayub travelled 0.9 km (or 900 m) more than Dinesh.</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Shyama bought 5 kg 300 g apples and 3 kg 250 g mangoes. Sarala bought 4 kg 800 g oranges and 4 kg 150 g bananas. Who bought more fruits?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total fruits bought by Shyama:</div>
                    <div class="sol-step">Apples = 5.300 kg, Mangoes = 3.250 kg</div>
                    <div class="sol-step">Total = 5.300 + 3.250 = 8.550 kg</div>
                    <div class="sol-step" style="margin-top: 10px;">Total fruits bought by Sarala:</div>
                    <div class="sol-step">Oranges = 4.800 kg, Bananas = 4.150 kg</div>
                    <div class="sol-step">Total = 4.800 + 4.150 = 8.950 kg</div>
                    <div class="sol-step" style="margin-top: 10px;">Comparing 8.950 kg and 8.550 kg: 8.950 &gt; 8.550</div>
                    <div class="sol-step"><span class="ans-highlight">Sarala bought more fruits.</span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. How much less is 28 km than 42.6 km?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Required difference = 42.6 km - 28.0 km</div>
                    <div class="sol-step">= 14.6 km</div>
                    <div class="sol-step"><span class="ans-highlight">28 km is 14.6 km less than 42.6 km.</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-6": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the product:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 0.2 × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.2 to fraction = ${frac(2,10)}</div>
                    <div class="sol-step">= (${frac(2,10)}) × 6 = ${frac('2 × 6', 10)} = ${frac(12,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 8 × 4.6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 4.6 to fraction = ${frac(46,10)}</div>
                    <div class="sol-step">= 8 × (${frac(46,10)}) = ${frac('8 × 46', 10)} = ${frac(368,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 36.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.71 × 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.71 to fraction = ${frac(271,100)}</div>
                    <div class="sol-step">= (${frac(271,100)}) × 5 = ${frac('271 × 5', 100)} = ${frac(1355,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 13.55</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 20.1 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 20.1 to fraction = ${frac(201,10)}</div>
                    <div class="sol-step">= (${frac(201,10)}) × 4 = ${frac('201 × 4', 10)} = ${frac(804,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 80.4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.05 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.05 to fraction = ${frac(5,100)}</div>
                    <div class="sol-step">= (${frac(5,100)}) × 7 = ${frac('5 × 7', 100)} = ${frac(35,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.35</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 211.02 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 211.02 to fraction = ${frac(21102,100)}</div>
                    <div class="sol-step">= (${frac(21102,100)}) × 4 = ${frac('21102 × 4', 100)} = ${frac(84408,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 844.08</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 2 × 0.86</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.86 to fraction = ${frac(86,100)}</div>
                    <div class="sol-step">= 2 × (${frac(86,100)}) = ${frac('2 × 86', 100)} = ${frac(172,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.72</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the area of rectangle whose length is 5.7 cm and breadth is 3 cm.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of rectangle = 5.7 cm</div>
                    <div class="sol-step">Breadth of rectangle = 3 cm</div>
                    <div class="sol-step">Area of rectangle = Length × Breadth</div>
                    <div class="sol-step">= 5.7 × 3 = 17.1 cm²</div>
                    <div class="sol-step"><span class="ans-highlight">Area = 17.1 cm²</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the products by multiplying with powers of 10:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 1.3 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(13,10)}) × 10 = ${frac(130,10)} = <span class="ans-highlight">13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36.8 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(368,10)}) × 10 = ${frac(3680,10)} = <span class="ans-highlight">368</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 153.7 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(1537,10)}) × 10 = ${frac(15370,10)} = <span class="ans-highlight">1537</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 168.07 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(16807,100)}) × 10 = ${frac(16807,10)} = <span class="ans-highlight">1680.7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 31.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(311,10)}) × 100 = ${frac(31100,10)} = <span class="ans-highlight">3110</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 156.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(1561,10)}) × 100 = ${frac(156100,10)} = <span class="ans-highlight">15610</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.62 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(362,100)}) × 100 = <span class="ans-highlight">362</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 43.07 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(4307,100)}) × 100 = <span class="ans-highlight">4307</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 0.5 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(5,10)}) × 10 = <span class="ans-highlight">5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 0.08 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(8,100)}) × 10 = ${frac(80,100)} = <span class="ans-highlight">0.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xi) 0.9 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(9,10)}) × 100 = ${frac(900,10)} = <span class="ans-highlight">90</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xii) 0.03 × 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(3,100)}) × 1000 = ${frac(3000,100)} = <span class="ans-highlight">30</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A two-wheeler covers a distance of 55.3 km in 1 litre of petrol. How much distance will it cover in 10 litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance in 1 litre = 55.3 km</div>
                    <div class="sol-step">Distance in 10 litres = 55.3 × 10 = (${frac(553,10)}) × 10</div>
                    <div class="sol-step"><span class="ans-highlight">Distance covered = 553 km</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.5 × 0.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(25,10)}) × (${frac(3,10)}) = ${frac('25 × 3', 100)} = ${frac(75,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.75</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.1 × 51.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(1,10)}) × (${frac(517,10)}) = ${frac(517,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 5.17</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.2 × 316.8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(2,10)}) × (${frac(3168,10)}) = ${frac(6336,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 63.36</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 1.3 × 3.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(13,10)}) × (${frac(31,10)}) = ${frac(403,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 4.03</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 × 0.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(5,10)}) × (${frac(5,100)}) = ${frac(25,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.025</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 11.2 × 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(112,10)}) × (${frac(15,100)}) = ${frac(1680,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.68</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 1.07 × 0.02</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(107,100)}) × (${frac(2,100)}) = ${frac(214,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0214</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 10.05 × 1.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(1005,100)}) × (${frac(105,100)}) = ${frac(105525,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 10.5525</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 101.01 × 0.01</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(10101,100)}) × (${frac(1,100)}) = ${frac(10101,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.0101</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 100.01 × 1.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(10001,100)}) × (${frac(11,10)}) = ${frac(110011,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 110.011</span></div>
                </div>
            </div>
        </div>
    \`,
    "ex2-7": \`
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF4081; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #FF80AB; font-weight: bold; }
            .step-label { color: #FF80AB; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FF4081; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1px solid #FF80AB; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 0.4 ÷ 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.4 into fraction = ${frac(4,10)}</div>
                    <div class="sol-step">= (${frac(4,10)}) ÷ 2</div>
                    <div class="sol-step">= (${frac(4,10)}) × (${frac(1,2)})</div>
                    <div class="sol-step">= ${frac(4,20)} = ${frac(2,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.35 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.35 into fraction = ${frac(35,100)}</div>
                    <div class="sol-step">= (${frac(35,100)}) ÷ 5</div>
                    <div class="sol-step">= (${frac(35,100)}) × (${frac(1,5)})</div>
                    <div class="sol-step">= ${frac(7,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.48 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.48 into fraction = ${frac(248,100)}</div>
                    <div class="sol-step">= (${frac(248,100)}) ÷ 4</div>
                    <div class="sol-step">= (${frac(248,100)}) × (${frac(1,4)})</div>
                    <div class="sol-step">= ${frac(62,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.62</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 65.4 ÷ 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 65.4 into fraction = ${frac(654,10)}</div>
                    <div class="sol-step">= (${frac(654,10)}) ÷ 6</div>
                    <div class="sol-step">= (${frac(654,10)}) × (${frac(1,6)})</div>
                    <div class="sol-step">= ${frac(109,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 10.9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 651.2 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 651.2 into fraction = ${frac(6512,10)}</div>
                    <div class="sol-step">= (${frac(6512,10)}) ÷ 4</div>
                    <div class="sol-step">= (${frac(6512,10)}) × (${frac(1,4)})</div>
                    <div class="sol-step">= ${frac(1628,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 162.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 14.49 ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 14.49 into fraction = ${frac(1449,100)}</div>
                    <div class="sol-step">= (${frac(1449,100)}) ÷ 7</div>
                    <div class="sol-step">= (${frac(1449,100)}) × (${frac(1,7)})</div>
                    <div class="sol-step">= ${frac(207,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 2.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.96 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.96 into fraction = ${frac(396,100)}</div>
                    <div class="sol-step">= (${frac(396,100)}) ÷ 4</div>
                    <div class="sol-step">= (${frac(396,100)}) × (${frac(1,4)})</div>
                    <div class="sol-step">= ${frac(99,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.99</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 0.80 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.80 into fraction = ${frac(80,100)}</div>
                    <div class="sol-step">= (${frac(80,100)}) ÷ 5</div>
                    <div class="sol-step">= (${frac(80,100)}) × (${frac(1,5)})</div>
                    <div class="sol-step">= ${frac(16,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.16</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find (dividing by 10):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 4.8 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(48,10)}) ÷ 10 = (${frac(48,10)}) × (${frac(1,10)}) = ${frac(48,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.48</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 52.5 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(525,10)}) ÷ 10 = (${frac(525,10)}) × (${frac(1,10)}) = ${frac(525,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 5.25</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.7 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(7,10)}) ÷ 10 = (${frac(7,10)}) × (${frac(1,10)}) = ${frac(7,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 33.1 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(331,10)}) ÷ 10 = (${frac(331,10)}) × (${frac(1,10)}) = ${frac(331,100)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 272.23 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(27223,100)}) ÷ 10 = (${frac(27223,100)}) × (${frac(1,10)}) = ${frac(27223,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 27.223</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 0.56 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(56,100)}) ÷ 10 = (${frac(56,100)}) × (${frac(1,10)}) = ${frac(56,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.056</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.97 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(397,100)}) ÷ 10 = (${frac(397,100)}) × (${frac(1,10)}) = ${frac(397,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.397</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find (dividing by 100):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.7 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(27,10)}) ÷ 100 = (${frac(27,10)}) × (${frac(1,100)}) = ${frac(27,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.027</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.3 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(3,10)}) ÷ 100 = (${frac(3,10)}) × (${frac(1,100)}) = ${frac(3,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.003</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.78 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(78,100)}) ÷ 100 = (${frac(78,100)}) × (${frac(1,100)}) = ${frac(78,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0078</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 432.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(4326,10)}) ÷ 100 = (${frac(4326,10)}) × (${frac(1,100)}) = ${frac(4326,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 4.326</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 23.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(236,10)}) ÷ 100 = (${frac(236,10)}) × (${frac(1,100)}) = ${frac(236,1000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.236</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 98.53 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(9853,100)}) ÷ 100 = (${frac(9853,100)}) × (${frac(1,100)}) = ${frac(9853,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.9853</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find (dividing by 1000):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(79,10)}) ÷ 1000 = (${frac(79,10)}) × (${frac(1,1000)}) = ${frac(79,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0079</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 26.3 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(263,10)}) ÷ 1000 = (${frac(263,10)}) × (${frac(1,1000)}) = ${frac(263,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0263</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 38.53 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(3853,100)}) ÷ 1000 = (${frac(3853,100)}) × (${frac(1,1000)}) = ${frac(3853,100000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.03853</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 128.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(1289,10)}) ÷ 1000 = (${frac(1289,10)}) × (${frac(1,1000)}) = ${frac(1289,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.1289</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (${frac(5,10)}) ÷ 1000 = (${frac(5,10)}) × (${frac(1,1000)}) = ${frac(5,10000)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0005</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 ÷ 3.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.5 to fraction = ${frac(35,10)}</div>
                    <div class="sol-step">= 7 ÷ (${frac(35,10)}) = 7 × (${frac(10,35)}) = ${frac(70,35)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36 ÷ 0.2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.2 to fraction = ${frac(2,10)}</div>
                    <div class="sol-step">= 36 ÷ (${frac(2,10)}) = 36 × (${frac(10,2)}) = 18 × 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 180</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3.25 ÷ 0.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 3.25 = ${frac(325,100)}, 0.5 = ${frac(5,10)}</div>
                    <div class="sol-step">= (${frac(325,100)}) ÷ (${frac(5,10)}) = (${frac(325,100)}) × (${frac(10,5)})</div>
                    <div class="sol-step">= ${frac(3250,500)} = ${frac(65,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 6.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 30.94 ÷ 0.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 30.94 = ${frac(3094,100)}, 0.7 = ${frac(7,10)}</div>
                    <div class="sol-step">= (${frac(3094,100)}) ÷ (${frac(7,10)}) = (${frac(3094,100)}) × (${frac(10,7)})</div>
                    <div class="sol-step">= ${frac(30940,700)} = ${frac(442,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 44.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 0.5 = ${frac(5,10)}, 0.25 = ${frac(25,100)}</div>
                    <div class="sol-step">= (${frac(5,10)}) ÷ (${frac(25,100)}) = (${frac(5,10)}) × (${frac(100,25)})</div>
                    <div class="sol-step">= ${frac(500,250)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 7.75 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 7.75 = ${frac(775,100)}, 0.25 = ${frac(25,100)}</div>
                    <div class="sol-step">= (${frac(775,100)}) ÷ (${frac(25,100)}) = (${frac(775,100)}) × (${frac(100,25)})</div>
                    <div class="sol-step">= ${frac(775,25)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 76.5 ÷ 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 76.5 = ${frac(765,10)}, 0.15 = ${frac(15,100)}</div>
                    <div class="sol-step">= (${frac(765,10)}) ÷ (${frac(15,100)}) = (${frac(765,10)}) × (${frac(100,15)})</div>
                    <div class="sol-step">= ${frac(76500,150)} = 510</div>
                    <div class="sol-step"><span class="ans-highlight">= 510</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 37.8 ÷ 1.4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 37.8 = ${frac(378,10)}, 1.4 = ${frac(14,10)}</div>
                    <div class="sol-step">= (${frac(378,10)}) ÷ (${frac(14,10)}) = (${frac(378,10)}) × (${frac(10,14)})</div>
                    <div class="sol-step">= ${frac(378,14)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 2.73 ÷ 1.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 2.73 = ${frac(273,100)}, 1.3 = ${frac(13,10)}</div>
                    <div class="sol-step">= (${frac(273,100)}) ÷ (${frac(13,10)}) = (${frac(273,100)}) × (${frac(10,13)})</div>
                    <div class="sol-step">= ${frac(2730,1300)} = ${frac(21,10)}</div>
                    <div class="sol-step"><span class="ans-highlight">= 2.1</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. A vehicle covers a distance of 43.2 km in 2.4 litres of petrol. How much distance will it cover in one litre of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance covered in 2.4 litres = 43.2 km</div>
                    <div class="sol-step">Distance covered in 1 litre = 43.2 ÷ 2.4</div>
                    <div class="sol-step">= (${frac(432,10)}) ÷ (${frac(24,10)})</div>
                    <div class="sol-step">= (${frac(432,10)}) × (${frac(10,24)})</div>
                    <div class="sol-step">= ${frac('432 × 10', '10 × 24')}</div>
                    <div class="sol-step">= ${frac(432,24)}</div>
                    <div class="sol-step"><span class="ans-highlight">Distance covered in 1 litre = 18 km</span></div>
                </div>
            </div>
        </div>
    \`,
  },
};
`;

const targetPath = path.join(__dirname, "data", "content", "c7-math-2.ts");
fs.writeFileSync(targetPath, content, "utf-8");
console.log("Successfully wrote c7-math-2.ts with Light Blue centered responsive SVG figures and vertical 'a over b' fractions!");
