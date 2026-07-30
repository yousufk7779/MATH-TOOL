const fs = require('fs');
const path = require('path');

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
            .svg-container { text-align: center; margin: 15px 0; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF4081; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Solve the following fraction expressions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2 - (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 2 as a fraction: 2/1</div>
                    <div class="sol-step">LCM of denominators 1 and 5 = 5</div>
                    <div class="sol-step">Converting 2/1 to denominator 5: (2 × 5)/(1 × 5) = 10/5</div>
                    <div class="sol-step">= (10/5) - (3/5)</div>
                    <div class="sol-step">= (10 - 3) / 5</div>
                    <div class="sol-step"><span class="ans-highlight">= 7/5 = 1 ⅖</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 + (7/8)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 4 as a fraction: 4/1</div>
                    <div class="sol-step">LCM of denominators 1 and 8 = 8</div>
                    <div class="sol-step">Converting 4/1 to denominator 8: (4 × 8)/(1 × 8) = 32/8</div>
                    <div class="sol-step">= (32/8) + (7/8)</div>
                    <div class="sol-step">= (32 + 7) / 8</div>
                    <div class="sol-step"><span class="ans-highlight">= 39/8 = 4 ⅞</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (3/5) + (2/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 7 = 35</div>
                    <div class="sol-step">3/5 = (3 × 7)/(5 × 7) = 21/35</div>
                    <div class="sol-step">2/7 = (2 × 5)/(7 × 5) = 10/35</div>
                    <div class="sol-step">= (21/35) + (10/35)</div>
                    <div class="sol-step">= (21 + 10) / 35</div>
                    <div class="sol-step"><span class="ans-highlight">= 31/35</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) (9/11) - (4/15)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 11 and 15 = 165</div>
                    <div class="sol-step">9/11 = (9 × 15)/165 = 135/165</div>
                    <div class="sol-step">4/15 = (4 × 11)/165 = 44/165</div>
                    <div class="sol-step">= (135/165) - (44/165)</div>
                    <div class="sol-step">= (135 - 44) / 165</div>
                    <div class="sol-step"><span class="ans-highlight">= 91/165</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) (7/10) + (2/5) + (3/2)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 10, 5, 2 = 10</div>
                    <div class="sol-step">7/10 = 7/10</div>
                    <div class="sol-step">2/5 = (2 × 2)/10 = 4/10</div>
                    <div class="sol-step">3/2 = (3 × 5)/10 = 15/10</div>
                    <div class="sol-step">= (7 + 4 + 15) / 10</div>
                    <div class="sol-step">= 26/10 = 13/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 13/5 = 2 ⅗</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2 ⅔ + 3 ½</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2 ⅔ to improper fraction: (2 × 3 + 2)/3 = 8/3</div>
                    <div class="sol-step">Converting 3 ½ to improper fraction: (3 × 2 + 1)/2 = 7/2</div>
                    <div class="sol-step">LCM of 3 and 2 = 6</div>
                    <div class="sol-step">8/3 = (8 × 2)/6 = 16/6</div>
                    <div class="sol-step">7/2 = (7 × 3)/6 = 21/6</div>
                    <div class="sol-step">= (16 + 21) / 6 = 37/6</div>
                    <div class="sol-step"><span class="ans-highlight">= 37/6 = 6 ⅙</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 8 ½ - 3 ⅝</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 8 ½ to improper fraction: (8 × 2 + 1)/2 = 17/2</div>
                    <div class="sol-step">Converting 3 ⅝ to improper fraction: (3 × 8 + 5)/8 = 29/8</div>
                    <div class="sol-step">LCM of 2 and 8 = 8</div>
                    <div class="sol-step">17/2 = (17 × 4)/8 = 68/8</div>
                    <div class="sol-step">= (68/8) - (29/8) = (68 - 29) / 8</div>
                    <div class="sol-step"><span class="ans-highlight">= 39/8 = 4 ⅞</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Arrange the following in descending order:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2/9, 2/3, 8/21</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 9, 3, 21 = 63</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• 2/9 = (2 × 7)/63 = 14/63</div>
                    <div class="sol-step">• 2/3 = (2 × 21)/63 = 42/63</div>
                    <div class="sol-step">• 8/21 = (8 × 3)/63 = 24/63</div>
                    <div class="sol-step">Comparing numerators: 42 &gt; 24 &gt; 14</div>
                    <div class="sol-step">So, 42/63 &gt; 24/63 &gt; 14/63</div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: 2/3 &gt; 8/21 &gt; 2/9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 1/5, 3/7, 7/10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 5, 7, 10 = 70</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• 1/5 = (1 × 14)/70 = 14/70</div>
                    <div class="sol-step">• 3/7 = (3 × 10)/70 = 30/70</div>
                    <div class="sol-step">• 7/10 = (7 × 7)/70 = 49/70</div>
                    <div class="sol-step">Comparing numerators: 49 &gt; 30 &gt; 14</div>
                    <div class="sol-step">So, 49/70 &gt; 30/70 &gt; 14/70</div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: 7/10 &gt; 3/7 &gt; 1/5</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. In a "magic square", the sum of the numbers in each row, in each column and along the diagonals is the same. Check if the given square is a magic square:<br/>Row 1: 4/11, 9/11, 2/11<br/>Row 2: 3/11, 5/11, 7/11<br/>Row 3: 8/11, 1/11, 6/11</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum along rows:</div>
                    <div class="sol-step">• Row 1 = (4/11) + (9/11) + (2/11) = (4 + 9 + 2)/11 = 15/11</div>
                    <div class="sol-step">• Row 2 = (3/11) + (5/11) + (7/11) = (3 + 5 + 7)/11 = 15/11</div>
                    <div class="sol-step">• Row 3 = (8/11) + (1/11) + (6/11) = (8 + 1 + 6)/11 = 15/11</div>
                    <div class="sol-step">Sum along columns:</div>
                    <div class="sol-step">• Column 1 = (4/11) + (3/11) + (8/11) = (4 + 3 + 8)/11 = 15/11</div>
                    <div class="sol-step">• Column 2 = (9/11) + (5/11) + (1/11) = (9 + 5 + 1)/11 = 15/11</div>
                    <div class="sol-step">• Column 3 = (2/11) + (7/11) + (6/11) = (2 + 7 + 6)/11 = 15/11</div>
                    <div class="sol-step">Sum along diagonals:</div>
                    <div class="sol-step">• Diagonal 1 = (4/11) + (5/11) + (6/11) = (4 + 5 + 6)/11 = 15/11</div>
                    <div class="sol-step">• Diagonal 2 = (2/11) + (5/11) + (8/11) = (2 + 5 + 8)/11 = 15/11</div>
                    <div class="sol-step">Since all row, column and diagonal sums equal 15/11, <span class="ans-highlight">Yes, this is a magic square.</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A rectangular sheet of paper is 12 ½ cm long and 10 ⅔ cm wide. Find its perimeter.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of rectangular sheet = 12 ½ cm = (12 × 2 + 1)/2 = 25/2 cm</div>
                    <div class="sol-step">Breadth of rectangular sheet = 10 ⅔ cm = (10 × 3 + 2)/3 = 32/3 cm</div>
                    <div class="sol-step">Perimeter of rectangle = 2 × (Length + Breadth)</div>
                    <div class="sol-step">= 2 × [(25/2) + (32/3)]</div>
                    <div class="sol-step">LCM of 2 and 3 = 6</div>
                    <div class="sol-step">25/2 = (25 × 3)/6 = 75/6</div>
                    <div class="sol-step">32/3 = (32 × 2)/6 = 64/6</div>
                    <div class="sol-step">= 2 × [(75 + 64)/6]</div>
                    <div class="sol-step">= 2 × (139/6) = 139/3 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of sheet = 139/3 cm = 46 ⅓ cm</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find the perimeters of (i) triangle ABE (ii) rectangle BCDE in this figure. Whose perimeter is greater?</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="260" height="220" viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="130,20 40,100 220,100" fill="rgba(255, 64, 129, 0.15)" stroke="#FF4081" stroke-width="3"/>
                            <rect x="40" y="100" width="180" height="90" fill="rgba(66, 165, 245, 0.15)" stroke="#42A5F5" stroke-width="3"/>
                            <text x="130" y="15" fill="#FF4081" font-size="16" font-weight="bold" text-anchor="middle">A</text>
                            <text x="25" y="105" fill="#FF4081" font-size="16" font-weight="bold">B</text>
                            <text x="230" y="105" fill="#FF4081" font-size="16" font-weight="bold">E</text>
                            <text x="25" y="200" fill="#42A5F5" font-size="16" font-weight="bold">C</text>
                            <text x="230" y="200" fill="#42A5F5" font-size="16" font-weight="bold">D</text>
                            <text x="75" y="55" fill="#FF80AB" font-size="13" font-weight="bold">5/2 cm</text>
                            <text x="175" y="55" fill="#FF80AB" font-size="13" font-weight="bold">3 ⅗ cm</text>
                            <text x="130" y="120" fill="#FF80AB" font-size="13" font-weight="bold" text-anchor="middle">2 ¾ cm</text>
                            <text x="130" y="210" fill="#90CAF9" font-size="13" font-weight="bold" text-anchor="middle">7/6 cm</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) Perimeter of Triangle ABE:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Side AB = 5/2 cm</div>
                    <div class="sol-step">Side BE = 2 ¾ cm = 11/4 cm</div>
                    <div class="sol-step">Side AE = 3 ⅗ cm = 18/5 cm</div>
                    <div class="sol-step">Perimeter = AB + BE + EA = (5/2) + (11/4) + (18/5)</div>
                    <div class="sol-step">LCM of 2, 4, 5 = 20</div>
                    <div class="sol-step">5/2 = 50/20, 11/4 = 55/20, 18/5 = 72/20</div>
                    <div class="sol-step">= (50 + 55 + 72)/20 = 177/20 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of △ABE = 177/20 cm = 8 17/20 cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Perimeter of Rectangle BCDE & Comparison:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length BE = 2 ¾ cm = 11/4 cm</div>
                    <div class="sol-step">Breadth ED = 7/6 cm</div>
                    <div class="sol-step">Perimeter = 2 × (BE + ED) = 2 × [(11/4) + (7/6)]</div>
                    <div class="sol-step">LCM of 4 and 6 = 12</div>
                    <div class="sol-step">11/4 = 33/12, 7/6 = 14/12</div>
                    <div class="sol-step">= 2 × [(33 + 14)/12] = 2 × (47/12) = 47/6 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of BCDE = 47/6 cm = 7 ⅝ cm</span></div>
                    <div class="sol-step" style="margin-top: 10px;">Comparing perimeters (LCM of 20 and 6 = 60):</div>
                    <div class="sol-step">177/20 = (177 × 3)/60 = 531/60</div>
                    <div class="sol-step">47/6 = (47 × 10)/60 = 470/60</div>
                    <div class="sol-step">Since 531/60 &gt; 470/60, <span class="ans-highlight">Perimeter of Triangle ABE is greater.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Salil wants to put a picture in a frame. The picture is 7 ⅗ cm wide. To fit in the frame the picture cannot be more than 7 3/10 cm wide. How much should the picture be trimmed?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Width of picture = 7 ⅗ cm = (7 × 5 + 3)/5 = 38/5 cm</div>
                    <div class="sol-step">Max width of frame = 7 3/10 cm = (7 × 10 + 3)/10 = 73/10 cm</div>
                    <div class="sol-step">Width to be trimmed = Picture width - Frame width</div>
                    <div class="sol-step">= (38/5) - (73/10)</div>
                    <div class="sol-step">LCM of 5 and 10 = 10</div>
                    <div class="sol-step">38/5 = (38 × 2)/10 = 76/10</div>
                    <div class="sol-step">= (76 - 73) / 10 = 3/10 cm</div>
                    <div class="sol-step"><span class="ans-highlight">Picture to be trimmed = 3/10 cm</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Ritu ate 3/5 part of an apple and the remaining apple was eaten by her brother Somu. What part of the apple did Somu eat? Who had the larger share? By how much?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total apple = 1</div>
                    <div class="sol-step">Part eaten by Ritu = 3/5</div>
                    <div class="sol-step">Part eaten by Somu = 1 - (3/5) = (5/5) - (3/5) = (5 - 3)/5 = 2/5</div>
                    <div class="sol-step"><span class="ans-highlight">Somu ate 2/5 part of the apple.</span></div>
                    <div class="sol-step">Comparing 3/5 and 2/5: Since 3 &gt; 2, 3/5 &gt; 2/5.</div>
                    <div class="sol-step"><span class="ans-highlight">Ritu had the larger share.</span></div>
                    <div class="sol-step">Difference = (3/5) - (2/5) = (3 - 2)/5 = 1/5</div>
                    <div class="sol-step"><span class="ans-highlight">Ritu's share was larger by 1/5 part.</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Michael finished colouring a picture in 7/12 hour. Vaibhav finished colouring the same picture in 3/4 hour. Who worked longer? By what fraction was it longer?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time taken by Michael = 7/12 hour</div>
                    <div class="sol-step">Time taken by Vaibhav = 3/4 hour = (3 × 3)/(4 × 3) = 9/12 hour</div>
                    <div class="sol-step">Comparing 9/12 and 7/12: Since 9 &gt; 7, 9/12 &gt; 7/12</div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer.</span></div>
                    <div class="sol-step">Difference = (9/12) - (7/12) = (9 - 7)/12 = 2/12 = 1/6 hour</div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer by 1/6 of an hour.</span></div>
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
            .svg-container { text-align: center; margin: 15px 0; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF4081; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Which of the drawings (a) to (d) show: (i) 2 × (1/5) (ii) 2 × (1/2) (iii) 3 × (2/3) (iv) 3 × (1/4)</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
                            <g id="fig-a">
                                <text x="15" y="45" fill="#FF4081" font-size="15" font-weight="bold">(a)</text>
                                <circle cx="60" cy="40" r="22" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M60,40 L60,18 A22,22 0 1,1 40.9,51 Z" fill="rgba(255, 64, 129, 0.6)"/>
                                <circle cx="115" cy="40" r="22" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M115,40 L115,18 A22,22 0 1,1 95.9,51 Z" fill="rgba(255, 64, 129, 0.6)"/>
                                <circle cx="170" cy="40" r="22" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M170,40 L170,18 A22,22 0 1,1 150.9,51 Z" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                            <g id="fig-b">
                                <text x="215" y="45" fill="#FF4081" font-size="15" font-weight="bold">(b)</text>
                                <rect x="245" y="20" width="35" height="40" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="262.5" y="20" width="17.5" height="40" fill="rgba(255, 64, 129, 0.6)"/>
                                <rect x="290" y="20" width="35" height="40" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="307.5" y="20" width="17.5" height="40" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                            <g id="fig-c">
                                <text x="15" y="135" fill="#FF4081" font-size="15" font-weight="bold">(c)</text>
                                <rect x="50" y="105" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="70" y="125" width="20" height="20" fill="rgba(255, 64, 129, 0.6)"/>
                                <line x1="70" y1="105" x2="70" y2="145" stroke="#FF4081" stroke-width="1"/>
                                <line x1="50" y1="125" x2="90" y2="125" stroke="#FF4081" stroke-width="1"/>

                                <rect x="100" y="105" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="120" y="125" width="20" height="20" fill="rgba(255, 64, 129, 0.6)"/>
                                <line x1="120" y1="105" x2="120" y2="145" stroke="#FF4081" stroke-width="1"/>
                                <line x1="100" y1="125" x2="140" y2="125" stroke="#FF4081" stroke-width="1"/>

                                <rect x="150" y="105" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="170" y="125" width="20" height="20" fill="rgba(255, 64, 129, 0.6)"/>
                                <line x1="170" y1="105" x2="170" y2="145" stroke="#FF4081" stroke-width="1"/>
                                <line x1="150" y1="125" x2="190" y2="125" stroke="#FF4081" stroke-width="1"/>
                            </g>
                            <g id="fig-d">
                                <text x="215" y="135" fill="#FF4081" font-size="15" font-weight="bold">(d)</text>
                                <circle cx="255" cy="125" r="22" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M255,125 L255,103 A22,22 0 0,1 275.9,118 Z" fill="rgba(255, 64, 129, 0.6)"/>
                                <circle cx="305" cy="125" r="22" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M305,125 L305,103 A22,22 0 0,1 325.9,118 Z" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 2 × (1/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 5 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (d).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × (1/2)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 2 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (b).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × (2/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 2 parts shaded out of 3 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3 × (1/4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 1 part shaded out of 4 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (c).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Some pictures (a) to (c) are given below. Tell which of them show: (i) 3 × (1/5) = 3/5 (ii) 2 × (1/3) = 2/3 (iii) 3 × (3/4) = 2 ¼</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="320" height="210" viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg">
                            <g id="pic-a">
                                <text x="10" y="35" fill="#FF4081" font-size="14" font-weight="bold">(a)</text>
                                <circle cx="45" cy="30" r="18" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M45,30 L45,12 A18,18 0 0,1 60.5,39 Z" fill="rgba(255, 64, 129, 0.6)"/>
                                <circle cx="90" cy="30" r="18" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M90,30 L90,12 A18,18 0 0,1 105.5,39 Z" fill="rgba(255, 64, 129, 0.6)"/>
                                <text x="120" y="35" fill="#FF80AB" font-size="16" font-weight="bold">=</text>
                                <circle cx="150" cy="30" r="18" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <path d="M150,30 L150,12 A18,18 0 1,1 134.5,39 Z" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                            <g id="pic-b">
                                <text x="10" y="105" fill="#FF4081" font-size="14" font-weight="bold">(b)</text>
                                <polygon points="45,80 30,115 60,115" fill="rgba(255, 64, 129, 0.6)" stroke="#FF4081" stroke-width="2"/>
                                <polygon points="85,80 70,115 100,115" fill="rgba(255, 64, 129, 0.6)" stroke="#FF4081" stroke-width="2"/>
                                <polygon points="125,80 110,115 140,115" fill="rgba(255, 64, 129, 0.6)" stroke="#FF4081" stroke-width="2"/>
                                <text x="150" y="105" fill="#FF80AB" font-size="16" font-weight="bold">=</text>
                                <polygon points="180,80 165,115 195,115" fill="rgba(255, 64, 129, 0.6)" stroke="#FF4081" stroke-width="2"/>
                                <polygon points="215,80 200,115 230,115" fill="rgba(255, 64, 129, 0.6)" stroke="#FF4081" stroke-width="2"/>
                                <polygon points="250,80 235,115 265,115" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <polygon points="250,80 235,115 250,115" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                            <g id="pic-c">
                                <text x="10" y="175" fill="#FF4081" font-size="14" font-weight="bold">(c)</text>
                                <rect x="40" y="150" width="30" height="45" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="40" y="150" width="30" height="9" fill="rgba(255, 64, 129, 0.6)"/>
                                <rect x="80" y="150" width="30" height="45" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="80" y="150" width="30" height="9" fill="rgba(255, 64, 129, 0.6)"/>
                                <rect x="120" y="150" width="30" height="45" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="120" y="150" width="30" height="9" fill="rgba(255, 64, 129, 0.6)"/>
                                <text x="160" y="175" fill="#FF80AB" font-size="16" font-weight="bold">=</text>
                                <rect x="180" y="150" width="30" height="45" fill="none" stroke="#FF4081" stroke-width="2"/>
                                <rect x="180" y="150" width="30" height="27" fill="rgba(255, 64, 129, 0.6)"/>
                            </g>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 3 × (1/5) = 3/5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with 1/5 shaded equal to 1 figure with 3/5 shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (c).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × (1/3) = 2/3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures with 1/3 shaded equal to 1 figure with 2/3 shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × (3/4) = 2 ¼</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with 3/4 shaded equal to 2 fully shaded and 1 with 1/4 shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (b).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply and reduce to lowest form and convert into a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 × (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (7 × 3)/5</div>
                    <div class="sol-step">= 21/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 4 ⅕</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 × (1/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4 × 1)/3</div>
                    <div class="sol-step">= 4/3</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅓</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2 × (6/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2 × 6)/7</div>
                    <div class="sol-step">= 12/7</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅝</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5 × (2/9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5 × 2)/9</div>
                    <div class="sol-step">= 10/9</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅑</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) (2/3) × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2 × 4)/3</div>
                    <div class="sol-step">= 8/3</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 ⅔</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) (5/2) × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5 × 6)/2</div>
                    <div class="sol-step">= 30/2</div>
                    <div class="sol-step"><span class="ans-highlight">= 15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 11 × (4/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (11 × 4)/7</div>
                    <div class="sol-step">= 44/7</div>
                    <div class="sol-step"><span class="ans-highlight">= 6 ⅔</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 20 × (4/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (20 × 4)/5</div>
                    <div class="sol-step">= 80/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 13 × (1/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (13 × 1)/3</div>
                    <div class="sol-step">= 13/3</div>
                    <div class="sol-step"><span class="ans-highlight">= 4 ⅓</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 15 × (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (15 × 3)/5</div>
                    <div class="sol-step">= 45/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 9</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Shade parts of figures:</div>
                <div class="sol-body">
                    <div class="svg-container">
                        <svg width="320" height="150" viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="80" height="110" fill="none" stroke="#FF4081" stroke-width="2" rx="5"/>
                            <text x="50" y="138" fill="#FF4081" font-size="13" font-weight="bold" text-anchor="middle">(a)</text>
                            <circle cx="30" cy="30" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="50" cy="30" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="70" cy="30" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="30" cy="55" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="50" cy="55" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="70" cy="55" r="8" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <circle cx="30" cy="80" r="8" fill="none" stroke="#FF4081"/>
                            <circle cx="50" cy="80" r="8" fill="none" stroke="#FF4081"/>
                            <circle cx="70" cy="80" r="8" fill="none" stroke="#FF4081"/>
                            <circle cx="30" cy="100" r="8" fill="none" stroke="#FF4081"/>
                            <circle cx="50" cy="100" r="8" fill="none" stroke="#FF4081"/>
                            <circle cx="70" cy="100" r="8" fill="none" stroke="#FF4081"/>

                            <rect x="110" y="10" width="80" height="110" fill="none" stroke="#FF4081" stroke-width="2" rx="5"/>
                            <text x="150" y="138" fill="#FF4081" font-size="13" font-weight="bold" text-anchor="middle">(b)</text>
                            <polygon points="130,20 120,40 140,40" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="150,20 140,40 160,40" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="170,20 160,40 180,40" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="130,50 120,70 140,70" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="150,50 140,70 160,70" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="170,50 160,70 180,70" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <polygon points="130,80 120,100 140,100" fill="none" stroke="#FF4081"/>
                            <polygon points="150,80 140,100 160,100" fill="none" stroke="#FF4081"/>
                            <polygon points="170,80 160,100 180,100" fill="none" stroke="#FF4081"/>

                            <rect x="210" y="10" width="100" height="110" fill="none" stroke="#FF4081" stroke-width="2" rx="5"/>
                            <text x="260" y="138" fill="#FF4081" font-size="13" font-weight="bold" text-anchor="middle">(c)</text>
                            <rect x="220" y="20" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="236" y="20" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="252" y="20" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="268" y="20" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="284" y="20" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="220" y="45" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="236" y="45" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="252" y="45" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="268" y="45" width="12" height="12" fill="rgba(255,64,129,0.7)" stroke="#FF4081"/>
                            <rect x="284" y="45" width="12" height="12" fill="none" stroke="#FF4081"/>
                            <rect x="220" y="70" width="12" height="12" fill="none" stroke="#FF4081"/>
                            <rect x="236" y="70" width="12" height="12" fill="none" stroke="#FF4081"/>
                            <rect x="252" y="70" width="12" height="12" fill="none" stroke="#FF4081"/>
                            <rect x="268" y="70" width="12" height="12" fill="none" stroke="#FF4081"/>
                            <rect x="284" y="70" width="12" height="12" fill="none" stroke="#FF4081"/>
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
                    <div class="sol-step">• (i) ½ × 24 = 24/2 = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) ½ × 46 = 46/2 = <span class="ans-highlight">23</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅔ of (i) 18 (ii) 27</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) (2/3) × 18 = 36/3 = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) (2/3) × 27 = 54/3 = <span class="ans-highlight">18</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) ¾ of (i) 16 (ii) 36</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) (3/4) × 16 = 48/4 = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) (3/4) × 36 = 108/4 = <span class="ans-highlight">27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) ⅘ of (i) 20 (ii) 35</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) (4/5) × 20 = 80/5 = <span class="ans-highlight">16</span></div>
                    <div class="sol-step">• (ii) (4/5) × 35 = 140/5 = <span class="ans-highlight">28</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Multiply and express as a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) 3 × 5 ⅕</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 ⅕ = (5 × 5 + 1)/5 = 26/5</div>
                    <div class="sol-step">= 3 × (26/5) = 78/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 15 ⅗</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) 5 × 6 ¾</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 ¾ = (6 × 4 + 3)/4 = 27/4</div>
                    <div class="sol-step">= 5 × (27/4) = 135/4</div>
                    <div class="sol-step"><span class="ans-highlight">= 33 ¾</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) 7 × 2 ¼</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ¼ = (2 × 4 + 1)/4 = 9/4</div>
                    <div class="sol-step">= 7 × (9/4) = 63/4</div>
                    <div class="sol-step"><span class="ans-highlight">= 15 ¾</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) 4 × 6 ⅓</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 ⅓ = (6 × 3 + 1)/3 = 19/3</div>
                    <div class="sol-step">= 4 × (19/3) = 76/3</div>
                    <div class="sol-step"><span class="ans-highlight">= 25 ⅓</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) 3 ¼ × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ¼ = (3 × 4 + 1)/4 = 13/4</div>
                    <div class="sol-step">= (13/4) × 6 = 78/4 = 39/2</div>
                    <div class="sol-step"><span class="ans-highlight">= 19 ½</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) 3 ⅖ × 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ⅖ = (3 × 5 + 2)/5 = 17/5</div>
                    <div class="sol-step">= (17/5) × 8 = 136/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 27 ⅕</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) ½ of (i) 2 ¾ (ii) 4 2/9</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) 2 ¾ = 11/4 ➔ ½ × (11/4) = 11/8 = <span class="ans-highlight">1 ⅜</span></div>
                    <div class="sol-step">• (ii) 4 2/9 = 38/9 ➔ ½ × (38/9) = 38/18 = 19/9 = <span class="ans-highlight">2 ⅑</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅝ of (i) 3 ⅝ (ii) 9 ⅔</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) 3 ⅝ = 23/6 ➔ (5/8) × (23/6) = 115/48 = <span class="ans-highlight">2 19/48</span></div>
                    <div class="sol-step">• (ii) 9 ⅔ = 29/3 ➔ (5/8) × (29/3) = 145/24 = <span class="ans-highlight">6 1/24</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Vidya and Pratap went for a picnic. Their mother gave them a water bottle that contained 5 liters of water. Vidya consumed 2/5 of the water. Pratap consumed the remaining water.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) How much water did Vidya drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total water = 5 liters</div>
                    <div class="sol-step">Water drank by Vidya = (2/5) of 5 liters</div>
                    <div class="sol-step">= (2/5) × 5 = 2 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Vidya drank 2 liters of water.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) What fraction of the total quantity of water did Pratap drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Fraction of water drank by Pratap = 1 - (2/5) = (5 - 2)/5 = 3/5</div>
                    <div class="sol-step">Quantity drank by Pratap = (3/5) × 5 = 3 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Pratap drank 3/5 of total water (3 liters).</span></div>
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
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the following fractions of fractions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) ¼ of (a) ¼ (b) ⅗ (c) 4/3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) ¼ × ¼ = (1 × 1)/(4 × 4) = <span class="ans-highlight">1/16</span></div>
                    <div class="sol-step">• (b) ¼ × ⅗ = (1 × 3)/(4 × 5) = <span class="ans-highlight">3/20</span></div>
                    <div class="sol-step">• (c) ¼ × (4/3) = (1 × 4)/(4 × 3) = 4/12 = <span class="ans-highlight">1/3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 1/7 of (a) 2/9 (b) 6/5 (c) 3/10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) (1/7) × (2/9) = (1 × 2)/(7 × 9) = <span class="ans-highlight">2/63</span></div>
                    <div class="sol-step">• (b) (1/7) × (6/5) = (1 × 6)/(7 × 5) = <span class="ans-highlight">6/35</span></div>
                    <div class="sol-step">• (c) (1/7) × (3/10) = (1 × 3)/(7 × 10) = <span class="ans-highlight">3/70</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Multiply and reduce to lowest form (if possible):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) (2/3) × 2 ⅔</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ⅔ = 8/3 ➔ (2/3) × (8/3) = (2 × 8)/(3 × 3) = 16/9</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 7/9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) (2/7) × (7/9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2 × 7)/(7 × 9) = 14/63</div>
                    <div class="sol-step"><span class="ans-highlight">= 2/9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (3/8) × (6/4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3 × 6)/(8 × 4) = 18/32</div>
                    <div class="sol-step"><span class="ans-highlight">= 9/16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) (9/5) × (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (9 × 3)/(5 × 5) = 27/25</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 2/25</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) (1/3) × (15/8)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1 × 15)/(3 × 8) = 15/24</div>
                    <div class="sol-step"><span class="ans-highlight">= 5/8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) (11/2) × (3/10)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (11 × 3)/(2 × 10) = 33/20</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 13/20</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) (4/5) × (12/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4 × 12)/(5 × 7) = 48/35</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 13/35</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply the following fractions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) (2/5) × 5 ¼</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 ¼ = 21/4 ➔ (2/5) × (21/4) = 42/20 = 21/10</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 ⅒</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 6 ⅖ × (7/9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 ⅖ = 32/5 ➔ (32/5) × (7/9) = 224/45</div>
                    <div class="sol-step"><span class="ans-highlight">= 4 44/45</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (3/2) × 5 ⅓</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 ⅓ = 16/3 ➔ (3/2) × (16/3) = 48/6</div>
                    <div class="sol-step"><span class="ans-highlight">= 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) (5/6) × 2 3/7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 3/7 = 17/7 ➔ (5/6) × (17/7) = 85/42</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 1/42</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ⅖ × (4/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ⅖ = 17/5 ➔ (17/5) × (4/7) = 68/35</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 33/35</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2 ⅗ × 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ⅗ = 13/5 ➔ (13/5) × 3 = 39/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 7 ⅘</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3 4/7 × (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 4/7 = 25/7 ➔ (25/7) × (3/5) = 75/35 = 15/7</div>
                    <div class="sol-step"><span class="ans-highlight">= 2 ⅐</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Which is greater:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) (2/7) of (3/4) OR (3/5) of (5/8)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: (2/7) × (3/4) = 6/28 = 3/14</div>
                    <div class="sol-step">Second part: (3/5) × (5/8) = 15/40 = 3/8</div>
                    <div class="sol-step">Comparing 3/14 and 3/8: Since denominators 8 &lt; 14, 3/8 &gt; 3/14.</div>
                    <div class="sol-step"><span class="ans-highlight">(3/5) of (5/8) is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) (1/2) of (6/7) OR (2/3) of (3/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: (1/2) × (6/7) = 6/14 = 3/7</div>
                    <div class="sol-step">Second part: (2/3) × (3/7) = 6/21 = 2/7</div>
                    <div class="sol-step">Comparing 3/7 and 2/7: Since 3 &gt; 2, 3/7 &gt; 2/7.</div>
                    <div class="sol-step"><span class="ans-highlight">(1/2) of (6/7) is greater.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Saili plants 4 saplings, in a row, in her garden. The distance between two adjacent saplings is ¾ m. Find the distance between the first and the last sapling.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance between 2 adjacent saplings = ¾ m</div>
                    <div class="sol-step">Number of gaps between 4 saplings = 4 - 1 = 3 gaps</div>
                    <div class="sol-step">Distance between 1st and 4th sapling = 3 × ¾ = 9/4 m</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = 9/4 m = 2 ¼ m</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Lipika reads a book for 1 ¾ hours every day. She reads the entire book in 6 days. How many hours in all were required by her to read the book?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time per day = 1 ¾ hours = 7/4 hours</div>
                    <div class="sol-step">Total days = 6 days</div>
                    <div class="sol-step">Total time = (7/4) × 6 = 42/4 = 21/2 hours</div>
                    <div class="sol-step"><span class="ans-highlight">Total hours required = 21/2 hours = 10 ½ hours</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. A car runs 16 km using 1 litre of petrol. How much distance will it cover using 2 ¾ litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance covered in 1 litre = 16 km</div>
                    <div class="sol-step">Quantity of petrol = 2 ¾ litres = 11/4 litres</div>
                    <div class="sol-step">Total distance = 16 × (11/4) = 4 × 11 = 44 km</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = 44 km</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Fill in the boxes and find simplest form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) (i) Provide number in [ ]: (2/3) × [ ] = 10/30 (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) (2/3) × (5/10) = 10/30 ➔ <span class="ans-highlight">Number in box = 5/10</span></div>
                    <div class="sol-step">• (ii) Simplest form of 5/10 = 5 ÷ 5 / 10 ÷ 5 = <span class="ans-highlight">1/2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) (i) Provide number in [ ]: (3/5) × [ ] = 24/75 (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) (3/5) × (8/15) = 24/75 ➔ <span class="ans-highlight">Number in box = 8/15</span></div>
                    <div class="sol-step">• (ii) Simplest form of 8/15 = <span class="ans-highlight">8/15</span></div>
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
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 12 ÷ (3/4)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 12 × reciprocal of (3/4)</div>
                    <div class="sol-step">= 12 × (4/3) = (12 × 4)/3 = 48/3</div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 14 ÷ (5/6)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 14 × reciprocal of (5/6)</div>
                    <div class="sol-step">= 14 × (6/5) = 84/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 16 ⅘</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 8 ÷ (7/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 × reciprocal of (7/3)</div>
                    <div class="sol-step">= 8 × (3/7) = 24/7</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 ⅜</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 4 ÷ (8/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 × reciprocal of (8/3)</div>
                    <div class="sol-step">= 4 × (3/8) = 12/8 = 3/2</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ½</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ÷ 2 ⅓</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ⅓ = 7/3</div>
                    <div class="sol-step">= 3 ÷ (7/3) = 3 × (3/7) = 9/7</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅔</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 5 ÷ 3 4/7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 4/7 = 25/7</div>
                    <div class="sol-step">= 5 ÷ (25/7) = 5 × (7/25) = 35/25 = 7/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅖</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the reciprocal of each of the following fractions. Classify the reciprocals as proper fractions, improper fractions and whole numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 3/7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 3/7 = 7/3</div>
                    <div class="sol-step">Since numerator (7) &gt; denominator (3), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 5/8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 5/8 = 8/5</div>
                    <div class="sol-step">Since numerator (8) &gt; denominator (5), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 9/7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 9/7 = 7/9</div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (9), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 6/5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 6/5 = 5/6</div>
                    <div class="sol-step">Since numerator (5) &lt; denominator (6), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 12/7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 12/7 = 7/12</div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (12), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 1/8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 1/8 = 8/1 = 8</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 1/11</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of 1/11 = 11/1 = 11</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) (7/3) ÷ 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (7/3) × (1/2) = 7/6</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅙</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) (4/9) ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4/9) × (1/5) = (4 × 1)/(9 × 5)</div>
                    <div class="sol-step"><span class="ans-highlight">= 4/45</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (6/13) ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (6/13) × (1/7) = (6 × 1)/(13 × 7)</div>
                    <div class="sol-step"><span class="ans-highlight">= 6/91</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 4 ⅓ ÷ 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 ⅓ = 13/3</div>
                    <div class="sol-step">= (13/3) × (1/3) = 13/9</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 4/9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ½ ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ½ = 7/2</div>
                    <div class="sol-step">= (7/2) × (1/4) = 7/8</div>
                    <div class="sol-step"><span class="ans-highlight">= 7/8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 4 3/7 ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 3/7 = 31/7</div>
                    <div class="sol-step">= (31/7) × (1/7) = 31/49</div>
                    <div class="sol-step"><span class="ans-highlight">= 31/49</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) (2/5) ÷ (1/2)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2/5) × (2/1) = 4/5</div>
                    <div class="sol-step"><span class="ans-highlight">= 4/5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) (4/9) ÷ (2/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4/9) × (3/2) = (4 × 3)/(9 × 2) = 12/18</div>
                    <div class="sol-step"><span class="ans-highlight">= 2/3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) (3/7) ÷ (8/7)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3/7) × (7/8) = (3 × 7)/(7 × 8) = 21/56</div>
                    <div class="sol-step"><span class="ans-highlight">= 3/8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 2 ⅓ ÷ (3/5)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ⅓ = 7/3 ➔ (7/3) × (5/3) = 35/9</div>
                    <div class="sol-step"><span class="ans-highlight">= 3 8/9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ½ ÷ (8/3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ½ = 7/2 ➔ (7/2) × (3/8) = 21/16</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 5/16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) (2/5) ÷ 1 ½</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1 ½ = 3/2 ➔ (2/5) × (2/3) = 4/15</div>
                    <div class="sol-step"><span class="ans-highlight">= 4/15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3 ⅕ ÷ 1 ⅔</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 ⅕ = 16/5, 1 ⅔ = 5/3 ➔ (16/5) × (3/5) = 48/25</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 23/25</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 2 ⅕ ÷ 1 ⅕</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 ⅕ = 11/5, 1 ⅕ = 6/5 ➔ (11/5) × (5/6) = 55/30 = 11/6</div>
                    <div class="sol-step"><span class="ans-highlight">= 1 ⅚</span></div>
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
            .svg-container { text-align: center; margin: 15px 0; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #FF4081; }
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
                    <div class="sol-step">100 paise = ₹ 1 ➔ 1 paise = ₹ (1/100)</div>
                    <div class="sol-step">7 paise = ₹ (7/100)</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 7 rupees 7 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 7 + ₹ (7/100)</div>
                    <div class="sol-step">= ₹ 7 + ₹ 0.07</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 7.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 77 rupees 77 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 77 + ₹ (77/100)</div>
                    <div class="sol-step">= ₹ 77 + ₹ 0.77</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 77.77</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 50 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ (50/100)</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.50</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 235 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ (235/100)</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 2.35</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express in different units:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) Express 5 cm in meter and kilometer</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100 cm = 1 m ➔ 5 cm = 5/100 m = <span class="ans-highlight">0.05 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.05 m = 0.05/1000 km = <span class="ans-highlight">0.00005 km</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Express 35 mm in cm, m and km</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">10 mm = 1 cm ➔ 35 mm = 35/10 cm = <span class="ans-highlight">3.5 cm</span></div>
                    <div class="sol-step">100 cm = 1 m ➔ 3.5 cm = 3.5/100 m = <span class="ans-highlight">0.035 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.035 m = 0.035/1000 km = <span class="ans-highlight">0.000035 km</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express in kg:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 200 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1000 g = 1 kg ➔ 200 g = 200/1000 kg = <span class="ans-highlight">0.2 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 3470 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3470 g = 3470/1000 kg = <span class="ans-highlight">3.47 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 4 kg 8 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 kg + (8/1000) kg = 4 kg + 0.008 kg = <span class="ans-highlight">4.008 kg</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Write the following decimal numbers in the expanded form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 20.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 10) + (0 × 1) + (0 × 1/10) + (3 × 1/100)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × 1/10) + (3 × 1/100)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 200.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 100) + (0 × 10) + (0 × 1) + (0 × 1/10) + (3 × 1/100)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 2.034</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × 1/10) + (3 × 1/100) + (4 × 1/1000)</span></div>
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
                        <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,40 140,20 240,110 90,140" fill="rgba(255,64,129,0.1)" stroke="#FF4081" stroke-width="3"/>
                            <text x="35" y="40" fill="#FF4081" font-size="16" font-weight="bold">A</text>
                            <text x="140" y="15" fill="#FF4081" font-size="16" font-weight="bold">B</text>
                            <text x="250" y="115" fill="#FF4081" font-size="16" font-weight="bold">C</text>
                            <text x="75" y="155" fill="#FF4081" font-size="16" font-weight="bold">D</text>
                            <text x="85" y="25" fill="#FF80AB" font-size="13" font-weight="bold">7.5 km</text>
                            <text x="200" y="60" fill="#FF80AB" font-size="13" font-weight="bold">12.7 km</text>
                            <text x="45" y="100" fill="#FF80AB" font-size="13" font-weight="bold">9.3 km</text>
                            <text x="160" y="140" fill="#FF80AB" font-size="13" font-weight="bold">11.8 km</text>
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
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the product:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 0.2 × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.2 to fraction = 2/10</div>
                    <div class="sol-step">= (2/10) × 6 = (2 × 6)/10 = 12/10</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 8 × 4.6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 4.6 to fraction = 46/10</div>
                    <div class="sol-step">= 8 × (46/10) = (8 × 46)/10 = 368/10</div>
                    <div class="sol-step"><span class="ans-highlight">= 36.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.71 × 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.71 to fraction = 271/100</div>
                    <div class="sol-step">= (271/100) × 5 = (271 × 5)/100 = 1355/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 13.55</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 20.1 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 20.1 to fraction = 201/10</div>
                    <div class="sol-step">= (201/10) × 4 = (201 × 4)/10 = 804/10</div>
                    <div class="sol-step"><span class="ans-highlight">= 80.4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.05 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.05 to fraction = 5/100</div>
                    <div class="sol-step">= (5/100) × 7 = (5 × 7)/100 = 35/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.35</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 211.02 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 211.02 to fraction = 21102/100</div>
                    <div class="sol-step">= (21102/100) × 4 = (21102 × 4)/100 = 84408/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 844.08</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 2 × 0.86</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.86 to fraction = 86/100</div>
                    <div class="sol-step">= 2 × (86/100) = (2 × 86)/100 = 172/100</div>
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
                    <div class="sol-step">= (13/10) × 10 = 130/10 = <span class="ans-highlight">13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36.8 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (368/10) × 10 = 3680/10 = <span class="ans-highlight">368</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 153.7 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1537/10) × 10 = 15370/10 = <span class="ans-highlight">1537</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 168.07 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (16807/100) × 10 = 16807/10 = <span class="ans-highlight">1680.7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 31.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (311/10) × 100 = 31100/10 = <span class="ans-highlight">3110</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 156.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1561/10) × 100 = 156100/10 = <span class="ans-highlight">15610</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.62 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (362/100) × 100 = <span class="ans-highlight">362</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 43.07 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4307/100) × 100 = <span class="ans-highlight">4307</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 0.5 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5/10) × 10 = <span class="ans-highlight">5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 0.08 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (8/100) × 10 = 80/100 = <span class="ans-highlight">0.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xi) 0.9 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (9/10) × 100 = 900/10 = <span class="ans-highlight">90</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xii) 0.03 × 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3/100) × 1000 = 3000/100 = <span class="ans-highlight">30</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A two-wheeler covers a distance of 55.3 km in 1 litre of petrol. How much distance will it cover in 10 litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance in 1 litre = 55.3 km</div>
                    <div class="sol-step">Distance in 10 litres = 55.3 × 10 = (553/10) × 10</div>
                    <div class="sol-step"><span class="ans-highlight">Distance covered = 553 km</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.5 × 0.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (25/10) × (3/10) = (25 × 3)/100 = 75/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.75</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.1 × 51.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1/10) × (517/10) = 517/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 5.17</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.2 × 316.8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (2/10) × (3168/10) = 6336/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 63.36</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 1.3 × 3.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (13/10) × (31/10) = 403/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 4.03</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 × 0.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5/10) × (5/100) = 25/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.025</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 11.2 × 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (112/10) × (15/100) = 1680/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.68</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 1.07 × 0.02</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (107/100) × (2/100) = 214/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0214</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 10.05 × 1.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1005/100) × (105/100) = 105525/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 10.5525</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 101.01 × 0.01</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (10101/100) × (1/100) = 10101/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 1.0101</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 100.01 × 1.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (10001/100) × (11/10) = 110011/1000</div>
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
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 0.4 ÷ 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.4 into fraction = 4/10</div>
                    <div class="sol-step">= (4/10) ÷ 2</div>
                    <div class="sol-step">= (4/10) × (1/2)</div>
                    <div class="sol-step">= 4 / 20 = 2 / 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.35 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.35 into fraction = 35/100</div>
                    <div class="sol-step">= (35/100) ÷ 5</div>
                    <div class="sol-step">= (35/100) × (1/5)</div>
                    <div class="sol-step">= 7 / 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.48 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.48 into fraction = 248/100</div>
                    <div class="sol-step">= (248/100) ÷ 4</div>
                    <div class="sol-step">= (248/100) × (1/4)</div>
                    <div class="sol-step">= 62 / 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.62</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 65.4 ÷ 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 65.4 into fraction = 654/10</div>
                    <div class="sol-step">= (654/10) ÷ 6</div>
                    <div class="sol-step">= (654/10) × (1/6)</div>
                    <div class="sol-step">= 109 / 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 10.9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 651.2 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 651.2 into fraction = 6512/10</div>
                    <div class="sol-step">= (6512/10) ÷ 4</div>
                    <div class="sol-step">= (6512/10) × (1/4)</div>
                    <div class="sol-step">= 1628 / 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 162.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 14.49 ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 14.49 into fraction = 1449/100</div>
                    <div class="sol-step">= (1449/100) ÷ 7</div>
                    <div class="sol-step">= (1449/100) × (1/7)</div>
                    <div class="sol-step">= 207 / 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 2.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.96 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.96 into fraction = 396/100</div>
                    <div class="sol-step">= (396/100) ÷ 4</div>
                    <div class="sol-step">= (396/100) × (1/4)</div>
                    <div class="sol-step">= 99 / 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.99</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 0.80 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.80 into fraction = 80/100</div>
                    <div class="sol-step">= (80/100) ÷ 5</div>
                    <div class="sol-step">= (80/100) × (1/5)</div>
                    <div class="sol-step">= 16 / 100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.16</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find (dividing by 10):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 4.8 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (48/10) ÷ 10 = (48/10) × (1/10) = 48/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.48</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 52.5 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (525/10) ÷ 10 = (525/10) × (1/10) = 525/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 5.25</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.7 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (7/10) ÷ 10 = (7/10) × (1/10) = 7/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 33.1 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (331/10) ÷ 10 = (331/10) × (1/10) = 331/100</div>
                    <div class="sol-step"><span class="ans-highlight">= 3.31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 272.23 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (27223/100) ÷ 10 = (27223/100) × (1/10) = 27223/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 27.223</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 0.56 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (56/100) ÷ 10 = (56/100) × (1/10) = 56/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.056</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.97 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (397/100) ÷ 10 = (397/100) × (1/10) = 397/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.397</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find (dividing by 100):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.7 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (27/10) ÷ 100 = (27/10) × (1/100) = 27/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.027</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.3 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3/10) ÷ 100 = (3/10) × (1/100) = 3/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.003</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.78 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (78/100) ÷ 100 = (78/100) × (1/100) = 78/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0078</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 432.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (4326/10) ÷ 100 = (4326/10) × (1/100) = 4326/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 4.326</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 23.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (236/10) ÷ 100 = (236/10) × (1/100) = 236/1000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.236</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 98.53 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (9853/100) ÷ 100 = (9853/100) × (1/100) = 9853/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.9853</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find (dividing by 1000):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (79/10) ÷ 1000 = (79/10) × (1/1000) = 79/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0079</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 26.3 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (263/10) ÷ 1000 = (263/10) × (1/1000) = 263/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0263</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 38.53 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (3853/100) ÷ 1000 = (3853/100) × (1/1000) = 3853/100000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.03853</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 128.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (1289/10) ÷ 1000 = (1289/10) × (1/1000) = 1289/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.1289</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (5/10) ÷ 1000 = (5/10) × (1/1000) = 5/10000</div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0005</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 ÷ 3.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.5 to fraction = 35/10</div>
                    <div class="sol-step">= 7 ÷ (35/10) = 7 × (10/35) = 70/35</div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36 ÷ 0.2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.2 to fraction = 2/10</div>
                    <div class="sol-step">= 36 ÷ (2/10) = 36 × (10/2) = 18 × 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 180</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3.25 ÷ 0.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 3.25 = 325/100, 0.5 = 5/10</div>
                    <div class="sol-step">= (325/100) ÷ (5/10) = (325/100) × (10/5)</div>
                    <div class="sol-step">= 3250 / 500 = 65 / 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 6.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 30.94 ÷ 0.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 30.94 = 3094/100, 0.7 = 7/10</div>
                    <div class="sol-step">= (3094/100) ÷ (7/10) = (3094/100) × (10/7)</div>
                    <div class="sol-step">= 30940 / 700 = 442 / 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 44.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 0.5 = 5/10, 0.25 = 25/100</div>
                    <div class="sol-step">= (5/10) ÷ (25/100) = (5/10) × (100/25)</div>
                    <div class="sol-step">= 500 / 250</div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 7.75 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 7.75 = 775/100, 0.25 = 25/100</div>
                    <div class="sol-step">= (775/100) ÷ (25/100) = (775/100) × (100/25)</div>
                    <div class="sol-step">= 775 / 25</div>
                    <div class="sol-step"><span class="ans-highlight">= 31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 76.5 ÷ 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 76.5 = 765/10, 0.15 = 15/100</div>
                    <div class="sol-step">= (765/10) ÷ (15/100) = (765/10) × (100/15)</div>
                    <div class="sol-step">= 76500 / 150 = 510</div>
                    <div class="sol-step"><span class="ans-highlight">= 510</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 37.8 ÷ 1.4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 37.8 = 378/10, 1.4 = 14/10</div>
                    <div class="sol-step">= (378/10) ÷ (14/10) = (378/10) × (10/14)</div>
                    <div class="sol-step">= 378 / 14</div>
                    <div class="sol-step"><span class="ans-highlight">= 27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 2.73 ÷ 1.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 2.73 = 273/100, 1.3 = 13/10</div>
                    <div class="sol-step">= (273/100) ÷ (13/10) = (273/100) × (10/13)</div>
                    <div class="sol-step">= 2730 / 1300 = 21 / 10</div>
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
                    <div class="sol-step">= (432/10) ÷ (24/10)</div>
                    <div class="sol-step">= (432/10) × (10/24)</div>
                    <div class="sol-step">= (432 × 10) / (10 × 24)</div>
                    <div class="sol-step">= 432 / 24</div>
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
console.log("Successfully wrote refined c7-math-2.ts with figures and step-by-step solutions!");
