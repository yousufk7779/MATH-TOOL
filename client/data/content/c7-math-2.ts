import { ChapterContent } from "../types";

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
    { name: "Fraction Multiplication", formula: "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}" },
    { name: "Fraction Division", formula: "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}" },
    { name: "Reciprocal", formula: "\\text{Reciprocal of } \\frac{a}{b} = \\frac{b}{a}" },
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
            <div class="section-title">Chapter Overview: Fractions and Decimals</div>
            <p class="content-text">This chapter covers proper, improper and mixed fractions, fraction arithmetic (addition, subtraction, multiplication, division), reciprocals, decimal operations, unit conversions, and real-life word problems.</p>
            <div class="point-box">
                <div class="point-item">LCM Method: Convert unlike fractions to like fractions before addition/subtraction.</div>
                <div class="point-item">Reciprocals & Division: Flip the second fraction and multiply.</div>
                <div class="point-item">Decimals: Shift point right for multiplication by 10/100/1000 and left for division.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex2-1": `
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2 - <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 2 as a fraction: <div class="frac"><span class="num">2</span><span class="den">1</span></div></div>
                    <div class="sol-step">LCM of denominators 1 and 5 = 5</div>
                    <div class="sol-step">Converting <div class="frac"><span class="num">2</span><span class="den">1</span></div> to denominator 5: <div class="frac"><span class="num">2 × 5</span><span class="den">1 × 5</span></div> = <div class="frac"><span class="num">10</span><span class="den">5</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">10</span><span class="den">5</span></div> - <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">10 - 3</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">7</span><span class="den">5</span></div> = 1 <div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 + <div class="frac"><span class="num">7</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Writing 4 as a fraction: <div class="frac"><span class="num">4</span><span class="den">1</span></div></div>
                    <div class="sol-step">LCM of denominators 1 and 8 = 8</div>
                    <div class="sol-step">Converting <div class="frac"><span class="num">4</span><span class="den">1</span></div> to denominator 8: <div class="frac"><span class="num">4 × 8</span><span class="den">1 × 8</span></div> = <div class="frac"><span class="num">32</span><span class="den">8</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">32</span><span class="den">8</span></div> + <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">32 + 7</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">39</span><span class="den">8</span></div> = 4 <div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">3</span><span class="den">5</span></div> + <div class="frac"><span class="num">2</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 7 = 35</div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">3 × 7</span><span class="den">5 × 7</span></div> = <div class="frac"><span class="num">21</span><span class="den">35</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">7</span></div> = <div class="frac"><span class="num">2 × 5</span><span class="den">7 × 5</span></div> = <div class="frac"><span class="num">10</span><span class="den">35</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">21</span><span class="den">35</span></div> + <div class="frac"><span class="num">10</span><span class="den">35</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">21 + 10</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">31</span><span class="den">35</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) <div class="frac"><span class="num">9</span><span class="den">11</span></div> - <div class="frac"><span class="num">4</span><span class="den">15</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 11 and 15 = 165</div>
                    <div class="sol-step"><div class="frac"><span class="num">9</span><span class="den">11</span></div> = <div class="frac"><span class="num">9 × 15</span><span class="den">165</span></div> = <div class="frac"><span class="num">135</span><span class="den">165</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">4</span><span class="den">15</span></div> = <div class="frac"><span class="num">4 × 11</span><span class="den">165</span></div> = <div class="frac"><span class="num">44</span><span class="den">165</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">135</span><span class="den">165</span></div> - <div class="frac"><span class="num">44</span><span class="den">165</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">135 - 44</span><span class="den">165</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">91</span><span class="den">165</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) <div class="frac"><span class="num">7</span><span class="den">10</span></div> + <div class="frac"><span class="num">2</span><span class="den">5</span></div> + <div class="frac"><span class="num">3</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 10, 5, 2 = 10</div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">10</span></div> = <div class="frac"><span class="num">7</span><span class="den">10</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">2 × 2</span><span class="den">10</span></div> = <div class="frac"><span class="num">4</span><span class="den">10</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">2</span></div> = <div class="frac"><span class="num">3 × 5</span><span class="den">10</span></div> = <div class="frac"><span class="num">15</span><span class="den">10</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">7 + 4 + 15</span><span class="den">10</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">26</span><span class="den">10</span></div> = <div class="frac"><span class="num">13</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">13</span><span class="den">5</span></div> = 2 <div class="frac"><span class="num">3</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2 <div class="frac"><span class="num">2</span><span class="den">3</span></div> + 3 <div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to improper fractions: 2 <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div>, 3 <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">7</span><span class="den">2</span></div></div>
                    <div class="sol-step">LCM of 3 and 2 = 6</div>
                    <div class="sol-step"><div class="frac"><span class="num">8</span><span class="den">3</span></div> = <div class="frac"><span class="num">8 × 2</span><span class="den">6</span></div> = <div class="frac"><span class="num">16</span><span class="den">6</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">2</span></div> = <div class="frac"><span class="num">7 × 3</span><span class="den">6</span></div> = <div class="frac"><span class="num">21</span><span class="den">6</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">16 + 21</span><span class="den">6</span></div> = <div class="frac"><span class="num">37</span><span class="den">6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">37</span><span class="den">6</span></div> = 6 <div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 8 <div class="frac"><span class="num">1</span><span class="den">2</span></div> - 3 <div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to improper fractions: 8 <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">17</span><span class="den">2</span></div>, 3 <div class="frac"><span class="num">5</span><span class="den">8</span></div> = <div class="frac"><span class="num">29</span><span class="den">8</span></div></div>
                    <div class="sol-step">LCM of 2 and 8 = 8</div>
                    <div class="sol-step"><div class="frac"><span class="num">17</span><span class="den">2</span></div> = <div class="frac"><span class="num">17 × 4</span><span class="den">8</span></div> = <div class="frac"><span class="num">68</span><span class="den">8</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">68</span><span class="den">8</span></div> - <div class="frac"><span class="num">29</span><span class="den">8</span></div> = <div class="frac"><span class="num">68 - 29</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">39</span><span class="den">8</span></div> = 4 <div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Arrange the following in descending order:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">2</span><span class="den">9</span></div>, <div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">8</span><span class="den">21</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 9, 3, 21 = 63</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• <div class="frac"><span class="num">2</span><span class="den">9</span></div> = <div class="frac"><span class="num">2 × 7</span><span class="den">63</span></div> = <div class="frac"><span class="num">14</span><span class="den">63</span></div></div>
                    <div class="sol-step">• <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 × 21</span><span class="den">63</span></div> = <div class="frac"><span class="num">42</span><span class="den">63</span></div></div>
                    <div class="sol-step">• <div class="frac"><span class="num">8</span><span class="den">21</span></div> = <div class="frac"><span class="num">8 × 3</span><span class="den">63</span></div> = <div class="frac"><span class="num">24</span><span class="den">63</span></div></div>
                    <div class="sol-step">Comparing numerators: 42 &gt; 24 &gt; 14</div>
                    <div class="sol-step">So, <div class="frac"><span class="num">42</span><span class="den">63</span></div> &gt; <div class="frac"><span class="num">24</span><span class="den">63</span></div> &gt; <div class="frac"><span class="num">14</span><span class="den">63</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: <div class="frac"><span class="num">2</span><span class="den">3</span></div> &gt; <div class="frac"><span class="num">8</span><span class="den">21</span></div> &gt; <div class="frac"><span class="num">2</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">1</span><span class="den">5</span></div>, <div class="frac"><span class="num">3</span><span class="den">7</span></div>, <div class="frac"><span class="num">7</span><span class="den">10</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of denominators 5, 7, 10 = 70</div>
                    <div class="sol-step">Converting to like fractions:</div>
                    <div class="sol-step">• <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">1 × 14</span><span class="den">70</span></div> = <div class="frac"><span class="num">14</span><span class="den">70</span></div></div>
                    <div class="sol-step">• <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">3 × 10</span><span class="den">70</span></div> = <div class="frac"><span class="num">30</span><span class="den">70</span></div></div>
                    <div class="sol-step">• <div class="frac"><span class="num">7</span><span class="den">10</span></div> = <div class="frac"><span class="num">7 × 7</span><span class="den">70</span></div> = <div class="frac"><span class="num">49</span><span class="den">70</span></div></div>
                    <div class="sol-step">Comparing numerators: 49 &gt; 30 &gt; 14</div>
                    <div class="sol-step">So, <div class="frac"><span class="num">49</span><span class="den">70</span></div> &gt; <div class="frac"><span class="num">30</span><span class="den">70</span></div> &gt; <div class="frac"><span class="num">14</span><span class="den">70</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Descending order: <div class="frac"><span class="num">7</span><span class="den">10</span></div> &gt; <div class="frac"><span class="num">3</span><span class="den">7</span></div> &gt; <div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. In a "magic square", the sum of the numbers in each row, in each column and along the diagonals is the same. Check if the given square is a magic square:<br/>Row 1: <div class="frac"><span class="num">4</span><span class="den">11</span></div>, <div class="frac"><span class="num">9</span><span class="den">11</span></div>, <div class="frac"><span class="num">2</span><span class="den">11</span></div><br/>Row 2: <div class="frac"><span class="num">3</span><span class="den">11</span></div>, <div class="frac"><span class="num">5</span><span class="den">11</span></div>, <div class="frac"><span class="num">7</span><span class="den">11</span></div><br/>Row 3: <div class="frac"><span class="num">8</span><span class="den">11</span></div>, <div class="frac"><span class="num">1</span><span class="den">11</span></div>, <div class="frac"><span class="num">6</span><span class="den">11</span></div></div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum along rows:</div>
                    <div class="sol-step">• Row 1 = <div class="frac"><span class="num">4</span><span class="den">11</span></div> + <div class="frac"><span class="num">9</span><span class="den">11</span></div> + <div class="frac"><span class="num">2</span><span class="den">11</span></div> = <div class="frac"><span class="num">4 + 9 + 2</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">• Row 2 = <div class="frac"><span class="num">3</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">11</span></div> + <div class="frac"><span class="num">7</span><span class="den">11</span></div> = <div class="frac"><span class="num">3 + 5 + 7</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">• Row 3 = <div class="frac"><span class="num">8</span><span class="den">11</span></div> + <div class="frac"><span class="num">1</span><span class="den">11</span></div> + <div class="frac"><span class="num">6</span><span class="den">11</span></div> = <div class="frac"><span class="num">8 + 1 + 6</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">Sum along columns:</div>
                    <div class="sol-step">• Column 1 = <div class="frac"><span class="num">4</span><span class="den">11</span></div> + <div class="frac"><span class="num">3</span><span class="den">11</span></div> + <div class="frac"><span class="num">8</span><span class="den">11</span></div> = <div class="frac"><span class="num">4 + 3 + 8</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">• Column 2 = <div class="frac"><span class="num">9</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">11</span></div> + <div class="frac"><span class="num">1</span><span class="den">11</span></div> = <div class="frac"><span class="num">9 + 5 + 1</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">• Column 3 = <div class="frac"><span class="num">2</span><span class="den">11</span></div> + <div class="frac"><span class="num">7</span><span class="den">11</span></div> + <div class="frac"><span class="num">6</span><span class="den">11</span></div> = <div class="frac"><span class="num">2 + 7 + 6</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">Sum along diagonals:</div>
                    <div class="sol-step">• Diagonal 1 = <div class="frac"><span class="num">4</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">11</span></div> + <div class="frac"><span class="num">6</span><span class="den">11</span></div> = <div class="frac"><span class="num">4 + 5 + 6</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">• Diagonal 2 = <div class="frac"><span class="num">2</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">11</span></div> + <div class="frac"><span class="num">8</span><span class="den">11</span></div> = <div class="frac"><span class="num">2 + 5 + 8</span><span class="den">11</span></div> = <div class="frac"><span class="num">15</span><span class="den">11</span></div></div>
                    <div class="sol-step">Since all row, column and diagonal sums equal <div class="frac"><span class="num">15</span><span class="den">11</span></div>, <span class="ans-highlight">Yes, this is a magic square.</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A rectangular sheet of paper is 12 <div class="frac"><span class="num">1</span><span class="den">2</span></div> cm long and 10 <div class="frac"><span class="num">2</span><span class="den">3</span></div> cm wide. Find its perimeter.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length of rectangular sheet = 12 <div class="frac"><span class="num">1</span><span class="den">2</span></div> cm = <div class="frac"><span class="num">12 × 2 + 1</span><span class="den">2</span></div> = <div class="frac"><span class="num">25</span><span class="den">2</span></div> cm</div>
                    <div class="sol-step">Breadth of rectangular sheet = 10 <div class="frac"><span class="num">2</span><span class="den">3</span></div> cm = <div class="frac"><span class="num">10 × 3 + 2</span><span class="den">3</span></div> = <div class="frac"><span class="num">32</span><span class="den">3</span></div> cm</div>
                    <div class="sol-step">Perimeter of rectangle = 2 × (Length + Breadth)</div>
                    <div class="sol-step">= 2 × [<div class="frac"><span class="num">25</span><span class="den">2</span></div> + <div class="frac"><span class="num">32</span><span class="den">3</span></div>]</div>
                    <div class="sol-step">LCM of 2 and 3 = 6</div>
                    <div class="sol-step"><div class="frac"><span class="num">25</span><span class="den">2</span></div> = <div class="frac"><span class="num">25 × 3</span><span class="den">6</span></div> = <div class="frac"><span class="num">75</span><span class="den">6</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">32</span><span class="den">3</span></div> = <div class="frac"><span class="num">32 × 2</span><span class="den">6</span></div> = <div class="frac"><span class="num">64</span><span class="den">6</span></div></div>
                    <div class="sol-step">= 2 × [<div class="frac"><span class="num">75 + 64</span><span class="den">6</span></div>]</div>
                    <div class="sol-step">= 2 × <div class="frac"><span class="num">139</span><span class="den">6</span></div> = <div class="frac"><span class="num">139</span><span class="den">3</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of sheet = <div class="frac"><span class="num">139</span><span class="den">3</span></div> cm = 46 <div class="frac"><span class="num">1</span><span class="den">3</span></div> cm</span></div>
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
                    <div class="sol-step">Side AB = <div class="frac"><span class="num">5</span><span class="den">2</span></div> cm</div>
                    <div class="sol-step">Side BE = 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> cm = <div class="frac"><span class="num">11</span><span class="den">4</span></div> cm</div>
                    <div class="sol-step">Side AE = 3 <div class="frac"><span class="num">3</span><span class="den">5</span></div> cm = <div class="frac"><span class="num">18</span><span class="den">5</span></div> cm</div>
                    <div class="sol-step">Perimeter = AB + BE + EA = <div class="frac"><span class="num">5</span><span class="den">2</span></div> + <div class="frac"><span class="num">11</span><span class="den">4</span></div> + <div class="frac"><span class="num">18</span><span class="den">5</span></div></div>
                    <div class="sol-step">LCM of 2, 4, 5 = 20</div>
                    <div class="sol-step"><div class="frac"><span class="num">5</span><span class="den">2</span></div> = <div class="frac"><span class="num">50</span><span class="den">20</span></div>, <div class="frac"><span class="num">11</span><span class="den">4</span></div> = <div class="frac"><span class="num">55</span><span class="den">20</span></div>, <div class="frac"><span class="num">18</span><span class="den">5</span></div> = <div class="frac"><span class="num">72</span><span class="den">20</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">50 + 55 + 72</span><span class="den">20</span></div> = <div class="frac"><span class="num">177</span><span class="den">20</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of △ABE = <div class="frac"><span class="num">177</span><span class="den">20</span></div> cm = 8 <div class="frac"><span class="num">17</span><span class="den">20</span></div> cm</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Perimeter of Rectangle BCDE & Comparison:</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Length BE = 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> cm = <div class="frac"><span class="num">11</span><span class="den">4</span></div> cm</div>
                    <div class="sol-step">Breadth ED = <div class="frac"><span class="num">7</span><span class="den">6</span></div> cm</div>
                    <div class="sol-step">Perimeter = 2 × (BE + ED) = 2 × [<div class="frac"><span class="num">11</span><span class="den">4</span></div> + <div class="frac"><span class="num">7</span><span class="den">6</span></div>]</div>
                    <div class="sol-step">LCM of 4 and 6 = 12</div>
                    <div class="sol-step"><div class="frac"><span class="num">11</span><span class="den">4</span></div> = <div class="frac"><span class="num">33</span><span class="den">12</span></div>, <div class="frac"><span class="num">7</span><span class="den">6</span></div> = <div class="frac"><span class="num">14</span><span class="den">12</span></div></div>
                    <div class="sol-step">= 2 × [<div class="frac"><span class="num">33 + 14</span><span class="den">12</span></div>] = 2 × <div class="frac"><span class="num">47</span><span class="den">12</span></div> = <div class="frac"><span class="num">47</span><span class="den">6</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Perimeter of BCDE = <div class="frac"><span class="num">47</span><span class="den">6</span></div> cm = 7 <div class="frac"><span class="num">5</span><span class="den">6</span></div> cm</span></div>
                    <div class="sol-step" style="margin-top: 10px;">Comparing perimeters (LCM of 20 and 6 = 60):</div>
                    <div class="sol-step"><div class="frac"><span class="num">177</span><span class="den">20</span></div> = <div class="frac"><span class="num">177 × 3</span><span class="den">60</span></div> = <div class="frac"><span class="num">531</span><span class="den">60</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">47</span><span class="den">6</span></div> = <div class="frac"><span class="num">47 × 10</span><span class="den">60</span></div> = <div class="frac"><span class="num">470</span><span class="den">60</span></div></div>
                    <div class="sol-step">Since 531/60 &gt; 470/60, <span class="ans-highlight">Perimeter of Triangle ABE is greater.</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Salil wants to put a picture in a frame. The picture is 7 <div class="frac"><span class="num">3</span><span class="den">5</span></div> cm wide. To fit in the frame the picture cannot be more than 7 <div class="frac"><span class="num">3</span><span class="den">10</span></div> cm wide. How much should the picture be trimmed?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Width of picture = 7 <div class="frac"><span class="num">3</span><span class="den">5</span></div> cm = <div class="frac"><span class="num">7 × 5 + 3</span><span class="den">5</span></div> = <div class="frac"><span class="num">38</span><span class="den">5</span></div> cm</div>
                    <div class="sol-step">Max width of frame = 7 <div class="frac"><span class="num">3</span><span class="den">10</span></div> cm = <div class="frac"><span class="num">7 × 10 + 3</span><span class="den">10</span></div> = <div class="frac"><span class="num">73</span><span class="den">10</span></div> cm</div>
                    <div class="sol-step">Width to be trimmed = Picture width - Frame width</div>
                    <div class="sol-step">= <div class="frac"><span class="num">38</span><span class="den">5</span></div> - <div class="frac"><span class="num">73</span><span class="den">10</span></div></div>
                    <div class="sol-step">LCM of 5 and 10 = 10</div>
                    <div class="sol-step"><div class="frac"><span class="num">38</span><span class="den">5</span></div> = <div class="frac"><span class="num">38 × 2</span><span class="den">10</span></div> = <div class="frac"><span class="num">76</span><span class="den">10</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">76 - 73</span><span class="den">10</span></div> = <div class="frac"><span class="num">3</span><span class="den">10</span></div> cm</div>
                    <div class="sol-step"><span class="ans-highlight">Picture to be trimmed = <div class="frac"><span class="num">3</span><span class="den">10</span></div> cm</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Ritu ate <div class="frac"><span class="num">3</span><span class="den">5</span></div> part of an apple and the remaining apple was eaten by her brother Somu. What part of the apple did Somu eat? Who had the larger share? By how much?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total apple = 1</div>
                    <div class="sol-step">Part eaten by Ritu = <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">Part eaten by Somu = 1 - <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">5</span><span class="den">5</span></div> - <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">5 - 3</span><span class="den">5</span></div> = <div class="frac"><span class="num">2</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Somu ate <div class="frac"><span class="num">2</span><span class="den">5</span></div> part of the apple.</span></div>
                    <div class="sol-step">Comparing <div class="frac"><span class="num">3</span><span class="den">5</span></div> and <div class="frac"><span class="num">2</span><span class="den">5</span></div>: Since 3 &gt; 2, <div class="frac"><span class="num">3</span><span class="den">5</span></div> &gt; <div class="frac"><span class="num">2</span><span class="den">5</span></div>.</div>
                    <div class="sol-step"><span class="ans-highlight">Ritu had the larger share.</span></div>
                    <div class="sol-step">Difference = <div class="frac"><span class="num">3</span><span class="den">5</span></div> - <div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">3 - 2</span><span class="den">5</span></div> = <div class="frac"><span class="num">1</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Ritu's share was larger by <div class="frac"><span class="num">1</span><span class="den">5</span></div> part.</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Michael finished colouring a picture in <div class="frac"><span class="num">7</span><span class="den">12</span></div> hour. Vaibhav finished colouring the same picture in <div class="frac"><span class="num">3</span><span class="den">4</span></div> hour. Who worked longer? By what fraction was it longer?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time taken by Michael = <div class="frac"><span class="num">7</span><span class="den">12</span></div> hour</div>
                    <div class="sol-step">Time taken by Vaibhav = <div class="frac"><span class="num">3</span><span class="den">4</span></div> hour = <div class="frac"><span class="num">3 × 3</span><span class="den">4 × 3</span></div> = <div class="frac"><span class="num">9</span><span class="den">12</span></div> hour</div>
                    <div class="sol-step">Comparing <div class="frac"><span class="num">9</span><span class="den">12</span></div> and <div class="frac"><span class="num">7</span><span class="den">12</span></div>: Since 9 &gt; 7, <div class="frac"><span class="num">9</span><span class="den">12</span></div> &gt; <div class="frac"><span class="num">7</span><span class="den">12</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer.</span></div>
                    <div class="sol-step">Difference = <div class="frac"><span class="num">9</span><span class="den">12</span></div> - <div class="frac"><span class="num">7</span><span class="den">12</span></div> = <div class="frac"><span class="num">9 - 7</span><span class="den">12</span></div> = <div class="frac"><span class="num">2</span><span class="den">12</span></div> = <div class="frac"><span class="num">1</span><span class="den">6</span></div> hour</div>
                    <div class="sol-step"><span class="ans-highlight">Vaibhav worked longer by <div class="frac"><span class="num">1</span><span class="den">6</span></div> of an hour.</span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-2": `
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
                <div class="question-header">1. Which of the drawings (a) to (d) show: (i) 2 × <div class="frac"><span class="num">1</span><span class="den">5</span></div> (ii) 2 × <div class="frac"><span class="num">1</span><span class="den">2</span></div> (iii) 3 × <div class="frac"><span class="num">2</span><span class="den">3</span></div> (iv) 3 × <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
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

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 2 × <div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 5 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (d).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × <div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures, each having 1 part shaded out of 2 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (b).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 2 parts shaded out of 3 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 3 × <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures, each having 1 part shaded out of 4 equal parts.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches figure (c).</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Some pictures (a) to (c) are given below. Tell which of them show: (i) 3 × <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">3</span><span class="den">5</span></div> (ii) 2 × <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div> (iii) 3 × <div class="frac"><span class="num">3</span><span class="den">4</span></div> = 2 <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
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

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(i) 3 × <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with <div class="frac"><span class="num">1</span><span class="den">5</span></div> shaded equal to 1 figure with <div class="frac"><span class="num">3</span><span class="den">5</span></div> shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (c).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2 × <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 2 figures with <div class="frac"><span class="num">1</span><span class="den">3</span></div> shaded equal to 1 figure with <div class="frac"><span class="num">2</span><span class="den">3</span></div> shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (a).</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3 × <div class="frac"><span class="num">3</span><span class="den">4</span></div> = 2 <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Represents 3 figures with <div class="frac"><span class="num">3</span><span class="den">4</span></div> shaded equal to 2 fully shaded and 1 with <div class="frac"><span class="num">1</span><span class="den">4</span></div> shaded.</div>
                    <div class="sol-step"><span class="ans-highlight">Matches picture (b).</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply and reduce to lowest form and convert into a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 × <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">7 × 3</span><span class="den">5</span></div> = <div class="frac"><span class="num">21</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 4 <div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 4 × <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">4 × 1</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2 × <div class="frac"><span class="num">6</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2 × 6</span><span class="den">7</span></div> = <div class="frac"><span class="num">12</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">5</span><span class="den">7</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 5 × <div class="frac"><span class="num">2</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5 × 2</span><span class="den">9</span></div> = <div class="frac"><span class="num">10</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">1</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) <div class="frac"><span class="num">2</span><span class="den">3</span></div> × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2 × 4</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2 <div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) <div class="frac"><span class="num">5</span><span class="den">2</span></div> × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5 × 6</span><span class="den">2</span></div> = <div class="frac"><span class="num">30</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 15</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 11 × <div class="frac"><span class="num">4</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">11 × 4</span><span class="den">7</span></div> = <div class="frac"><span class="num">44</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 6 <div class="frac"><span class="num">2</span><span class="den">7</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 20 × <div class="frac"><span class="num">4</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">20 × 4</span><span class="den">5</span></div> = <div class="frac"><span class="num">80</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 13 × <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">13 × 1</span><span class="den">3</span></div> = <div class="frac"><span class="num">13</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 4 <div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 15 × <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">15 × 3</span><span class="den">5</span></div> = <div class="frac"><span class="num">45</span><span class="den">5</span></div></div>
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
                    <div class="sol-step">• (i) ½ × 24 = <div class="frac"><span class="num">24</span><span class="den">2</span></div> = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) ½ × 46 = <div class="frac"><span class="num">46</span><span class="den">2</span></div> = <span class="ans-highlight">23</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅔ of (i) 18 (ii) 27</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) <div class="frac"><span class="num">2</span><span class="den">3</span></div> × 18 = <div class="frac"><span class="num">36</span><span class="den">3</span></div> = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) <div class="frac"><span class="num">2</span><span class="den">3</span></div> × 27 = <div class="frac"><span class="num">54</span><span class="den">3</span></div> = <span class="ans-highlight">18</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) ¾ of (i) 16 (ii) 36</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) <div class="frac"><span class="num">3</span><span class="den">4</span></div> × 16 = <div class="frac"><span class="num">48</span><span class="den">4</span></div> = <span class="ans-highlight">12</span></div>
                    <div class="sol-step">• (ii) <div class="frac"><span class="num">3</span><span class="den">4</span></div> × 36 = <div class="frac"><span class="num">108</span><span class="den">4</span></div> = <span class="ans-highlight">27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) ⅘ of (i) 20 (ii) 35</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) <div class="frac"><span class="num">4</span><span class="den">5</span></div> × 20 = <div class="frac"><span class="num">80</span><span class="den">5</span></div> = <span class="ans-highlight">16</span></div>
                    <div class="sol-step">• (ii) <div class="frac"><span class="num">4</span><span class="den">5</span></div> × 35 = <div class="frac"><span class="num">140</span><span class="den">5</span></div> = <span class="ans-highlight">28</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Multiply and express as a mixed fraction:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) 3 × 5 <div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">5 × 5 + 1</span><span class="den">5</span></div> = <div class="frac"><span class="num">26</span><span class="den">5</span></div></div>
                    <div class="sol-step">= 3 × <div class="frac"><span class="num">26</span><span class="den">5</span></div> = <div class="frac"><span class="num">78</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 15 <div class="frac"><span class="num">3</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) 5 × 6 <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 <div class="frac"><span class="num">3</span><span class="den">4</span></div> = <div class="frac"><span class="num">6 × 4 + 3</span><span class="den">4</span></div> = <div class="frac"><span class="num">27</span><span class="den">4</span></div></div>
                    <div class="sol-step">= 5 × <div class="frac"><span class="num">27</span><span class="den">4</span></div> = <div class="frac"><span class="num">135</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 33 <div class="frac"><span class="num">3</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(c) 7 × 2 <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">2 × 4 + 1</span><span class="den">4</span></div> = <div class="frac"><span class="num">9</span><span class="den">4</span></div></div>
                    <div class="sol-step">= 7 × <div class="frac"><span class="num">9</span><span class="den">4</span></div> = <div class="frac"><span class="num">63</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 15 <div class="frac"><span class="num">3</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(d) 4 × 6 <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">6 × 3 + 1</span><span class="den">3</span></div> = <div class="frac"><span class="num">19</span><span class="den">3</span></div></div>
                    <div class="sol-step">= 4 × <div class="frac"><span class="num">19</span><span class="den">3</span></div> = <div class="frac"><span class="num">76</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 25 <div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(e) 3 <div class="frac"><span class="num">1</span><span class="den">4</span></div> × 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">3 × 4 + 1</span><span class="den">4</span></div> = <div class="frac"><span class="num">13</span><span class="den">4</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">13</span><span class="den">4</span></div> × 6 = <div class="frac"><span class="num">78</span><span class="den">4</span></div> = <div class="frac"><span class="num">39</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 19 <div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(f) 3 <div class="frac"><span class="num">2</span><span class="den">5</span></div> × 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">3 × 5 + 2</span><span class="den">5</span></div> = <div class="frac"><span class="num">17</span><span class="den">5</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">17</span><span class="den">5</span></div> × 8 = <div class="frac"><span class="num">136</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 27 <div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) ½ of (i) 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> (ii) 4 <div class="frac"><span class="num">2</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> = <div class="frac"><span class="num">11</span><span class="den">4</span></div> ➔ ½ × <div class="frac"><span class="num">11</span><span class="den">4</span></div> = <div class="frac"><span class="num">11</span><span class="den">8</span></div> = <span class="ans-highlight">1 <div class="frac"><span class="num">3</span><span class="den">8</span></div></span></div>
                    <div class="sol-step">• (ii) 4 <div class="frac"><span class="num">2</span><span class="den">9</span></div> = <div class="frac"><span class="num">38</span><span class="den">9</span></div> ➔ ½ × <div class="frac"><span class="num">38</span><span class="den">9</span></div> = <div class="frac"><span class="num">38</span><span class="den">18</span></div> = <div class="frac"><span class="num">19</span><span class="den">9</span></div> = <span class="ans-highlight">2 <div class="frac"><span class="num">1</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) ⅝ of (i) 3 <div class="frac"><span class="num">5</span><span class="den">6</span></div> (ii) 9 <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) 3 <div class="frac"><span class="num">5</span><span class="den">6</span></div> = <div class="frac"><span class="num">23</span><span class="den">6</span></div> ➔ <div class="frac"><span class="num">5</span><span class="den">8</span></div> × <div class="frac"><span class="num">23</span><span class="den">6</span></div> = <div class="frac"><span class="num">115</span><span class="den">48</span></div> = <span class="ans-highlight">2 <div class="frac"><span class="num">19</span><span class="den">48</span></div></span></div>
                    <div class="sol-step">• (ii) 9 <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">29</span><span class="den">3</span></div> ➔ <div class="frac"><span class="num">5</span><span class="den">8</span></div> × <div class="frac"><span class="num">29</span><span class="den">3</span></div> = <div class="frac"><span class="num">145</span><span class="den">24</span></div> = <span class="ans-highlight">6 <div class="frac"><span class="num">1</span><span class="den">24</span></div></span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Vidya and Pratap went for a picnic. Their mother gave them a water bottle that contained 5 liters of water. Vidya consumed 2/5 of the water. Pratap consumed the remaining water.</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) How much water did Vidya drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total water = 5 liters</div>
                    <div class="sol-step">Water drank by Vidya = <div class="frac"><span class="num">2</span><span class="den">5</span></div> of 5 liters</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2</span><span class="den">5</span></div> × 5 = 2 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Vidya drank 2 liters of water.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) What fraction of the total quantity of water did Pratap drink?</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Fraction of water drank by Pratap = 1 - <div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">5 - 2</span><span class="den">5</span></div> = <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">Quantity drank by Pratap = <div class="frac"><span class="num">3</span><span class="den">5</span></div> × 5 = 3 liters</div>
                    <div class="sol-step"><span class="ans-highlight">Pratap drank <div class="frac"><span class="num">3</span><span class="den">5</span></div> of total water (3 liters).</span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-3": `
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
                    <div class="sol-step">• (a) ¼ × ¼ = <div class="frac"><span class="num">1 × 1</span><span class="den">4 × 4</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">16</span></div></span></div>
                    <div class="sol-step">• (b) ¼ × ⅗ = <div class="frac"><span class="num">1 × 3</span><span class="den">4 × 5</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">20</span></div></span></div>
                    <div class="sol-step">• (c) ¼ × <div class="frac"><span class="num">4</span><span class="den">3</span></div> = <div class="frac"><span class="num">1 × 4</span><span class="den">4 × 3</span></div> = <div class="frac"><span class="num">4</span><span class="den">12</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 1/7 of (a) 2/9 (b) 6/5 (c) 3/10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (a) <div class="frac"><span class="num">1</span><span class="den">7</span></div> × <div class="frac"><span class="num">2</span><span class="den">9</span></div> = <div class="frac"><span class="num">1 × 2</span><span class="den">7 × 9</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">63</span></div></span></div>
                    <div class="sol-step">• (b) <div class="frac"><span class="num">1</span><span class="den">7</span></div> × <div class="frac"><span class="num">6</span><span class="den">5</span></div> = <div class="frac"><span class="num">1 × 6</span><span class="den">7 × 5</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">35</span></div></span></div>
                    <div class="sol-step">• (c) <div class="frac"><span class="num">1</span><span class="den">7</span></div> × <div class="frac"><span class="num">3</span><span class="den">10</span></div> = <div class="frac"><span class="num">1 × 3</span><span class="den">7 × 10</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">70</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Multiply and reduce to lowest form (if possible):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">2</span><span class="den">3</span></div> × 2 <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div> ➔ <div class="frac"><span class="num">2</span><span class="den">3</span></div> × <div class="frac"><span class="num">8</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 × 8</span><span class="den">3 × 3</span></div> = <div class="frac"><span class="num">16</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">7</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">2</span><span class="den">7</span></div> × <div class="frac"><span class="num">7</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2 × 7</span><span class="den">7 × 9</span></div> = <div class="frac"><span class="num">14</span><span class="den">63</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">2</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">3</span><span class="den">8</span></div> × <div class="frac"><span class="num">6</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 × 6</span><span class="den">8 × 4</span></div> = <div class="frac"><span class="num">18</span><span class="den">32</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">9</span><span class="den">16</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) <div class="frac"><span class="num">9</span><span class="den">5</span></div> × <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">9 × 3</span><span class="den">5 × 5</span></div> = <div class="frac"><span class="num">27</span><span class="den">25</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">2</span><span class="den">25</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) <div class="frac"><span class="num">1</span><span class="den">3</span></div> × <div class="frac"><span class="num">15</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1 × 15</span><span class="den">3 × 8</span></div> = <div class="frac"><span class="num">15</span><span class="den">24</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">5</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) <div class="frac"><span class="num">11</span><span class="den">2</span></div> × <div class="frac"><span class="num">3</span><span class="den">10</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">11 × 3</span><span class="den">2 × 10</span></div> = <div class="frac"><span class="num">33</span><span class="den">20</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">13</span><span class="den">20</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) <div class="frac"><span class="num">4</span><span class="den">5</span></div> × <div class="frac"><span class="num">12</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">4 × 12</span><span class="den">5 × 7</span></div> = <div class="frac"><span class="num">48</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">13</span><span class="den">35</span></div></span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Multiply the following fractions:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">2</span><span class="den">5</span></div> × 5 <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">21</span><span class="den">4</span></div> ➔ <div class="frac"><span class="num">2</span><span class="den">5</span></div> × <div class="frac"><span class="num">21</span><span class="den">4</span></div> = <div class="frac"><span class="num">42</span><span class="den">20</span></div> = <div class="frac"><span class="num">21</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2 <div class="frac"><span class="num">1</span><span class="den">10</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 6 <div class="frac"><span class="num">2</span><span class="den">5</span></div> × <div class="frac"><span class="num">7</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">6 <div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">32</span><span class="den">5</span></div> ➔ <div class="frac"><span class="num">32</span><span class="den">5</span></div> × <div class="frac"><span class="num">7</span><span class="den">9</span></div> = <div class="frac"><span class="num">224</span><span class="den">45</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 4 <div class="frac"><span class="num">44</span><span class="den">45</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">3</span><span class="den">2</span></div> × 5 <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">5 <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">16</span><span class="den">3</span></div> ➔ <div class="frac"><span class="num">3</span><span class="den">2</span></div> × <div class="frac"><span class="num">16</span><span class="den">3</span></div> = <div class="frac"><span class="num">48</span><span class="den">6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) <div class="frac"><span class="num">5</span><span class="den">6</span></div> × 2 <div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">17</span><span class="den">7</span></div> ➔ <div class="frac"><span class="num">5</span><span class="den">6</span></div> × <div class="frac"><span class="num">17</span><span class="den">7</span></div> = <div class="frac"><span class="num">85</span><span class="den">42</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2 <div class="frac"><span class="num">1</span><span class="den">42</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 <div class="frac"><span class="num">2</span><span class="den">5</span></div> × <div class="frac"><span class="num">4</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">2</span><span class="den">5</span></div> = <div class="frac"><span class="num">17</span><span class="den">5</span></div> ➔ <div class="frac"><span class="num">17</span><span class="den">5</span></div> × <div class="frac"><span class="num">4</span><span class="den">7</span></div> = <div class="frac"><span class="num">68</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">33</span><span class="den">35</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 2 <div class="frac"><span class="num">3</span><span class="den">5</span></div> × 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">13</span><span class="den">5</span></div> ➔ <div class="frac"><span class="num">13</span><span class="den">5</span></div> × 3 = <div class="frac"><span class="num">39</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 7 <div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3 <div class="frac"><span class="num">4</span><span class="den">7</span></div> × <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">4</span><span class="den">7</span></div> = <div class="frac"><span class="num">25</span><span class="den">7</span></div> ➔ <div class="frac"><span class="num">25</span><span class="den">7</span></div> × <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">75</span><span class="den">35</span></div> = <div class="frac"><span class="num">15</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2 <div class="frac"><span class="num">1</span><span class="den">7</span></div></span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Which is greater:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">2</span><span class="den">7</span></div> of <div class="frac"><span class="num">3</span><span class="den">4</span></div> OR <div class="frac"><span class="num">3</span><span class="den">5</span></div> of <div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: <div class="frac"><span class="num">2</span><span class="den">7</span></div> × <div class="frac"><span class="num">3</span><span class="den">4</span></div> = <div class="frac"><span class="num">6</span><span class="den">28</span></div> = <div class="frac"><span class="num">3</span><span class="den">14</span></div></div>
                    <div class="sol-step">Second part: <div class="frac"><span class="num">3</span><span class="den">5</span></div> × <div class="frac"><span class="num">5</span><span class="den">8</span></div> = <div class="frac"><span class="num">15</span><span class="den">40</span></div> = <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                    <div class="sol-step">Comparing <div class="frac"><span class="num">3</span><span class="den">14</span></div> and <div class="frac"><span class="num">3</span><span class="den">8</span></div>: Since denominators 8 &lt; 14, <div class="frac"><span class="num">3</span><span class="den">8</span></div> &gt; <div class="frac"><span class="num">3</span><span class="den">14</span></div>.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">5</span></div> of <div class="frac"><span class="num">5</span><span class="den">8</span></div> is greater.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of <div class="frac"><span class="num">6</span><span class="den">7</span></div> OR <div class="frac"><span class="num">2</span><span class="den">3</span></div> of <div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">First part: <div class="frac"><span class="num">1</span><span class="den">2</span></div> × <div class="frac"><span class="num">6</span><span class="den">7</span></div> = <div class="frac"><span class="num">6</span><span class="den">14</span></div> = <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                    <div class="sol-step">Second part: <div class="frac"><span class="num">2</span><span class="den">3</span></div> × <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">6</span><span class="den">21</span></div> = <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                    <div class="sol-step">Comparing <div class="frac"><span class="num">3</span><span class="den">7</span></div> and <div class="frac"><span class="num">2</span><span class="den">7</span></div>: Since 3 &gt; 2, <div class="frac"><span class="num">3</span><span class="den">7</span></div> &gt; <div class="frac"><span class="num">2</span><span class="den">7</span></div>.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">2</span></div> of <div class="frac"><span class="num">6</span><span class="den">7</span></div> is greater.</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Saili plants 4 saplings, in a row, in her garden. The distance between two adjacent saplings is ¾ m. Find the distance between the first and the last sapling.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance between 2 adjacent saplings = <div class="frac"><span class="num">3</span><span class="den">4</span></div> m</div>
                    <div class="sol-step">Number of gaps between 4 saplings = 4 - 1 = 3 gaps</div>
                    <div class="sol-step">Distance between 1st and 4th sapling = 3 × <div class="frac"><span class="num">3</span><span class="den">4</span></div> = <div class="frac"><span class="num">9</span><span class="den">4</span></div> m</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = <div class="frac"><span class="num">9</span><span class="den">4</span></div> m = 2 <div class="frac"><span class="num">1</span><span class="den">4</span></div> m</span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Lipika reads a book for 1 <div class="frac"><span class="num">3</span><span class="den">4</span></div> hours every day. She reads the entire book in 6 days. How many hours in all were required by her to read the book?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Time per day = 1 <div class="frac"><span class="num">3</span><span class="den">4</span></div> hours = <div class="frac"><span class="num">7</span><span class="den">4</span></div> hours</div>
                    <div class="sol-step">Total days = 6 days</div>
                    <div class="sol-step">Total time = <div class="frac"><span class="num">7</span><span class="den">4</span></div> × 6 = <div class="frac"><span class="num">42</span><span class="den">4</span></div> = <div class="frac"><span class="num">21</span><span class="den">2</span></div> hours</div>
                    <div class="sol-step"><span class="ans-highlight">Total hours required = <div class="frac"><span class="num">21</span><span class="den">2</span></div> hours = 10 <div class="frac"><span class="num">1</span><span class="den">2</span></div> hours</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. A car runs 16 km using 1 litre of petrol. How much distance will it cover using 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance covered in 1 litre = 16 km</div>
                    <div class="sol-step">Quantity of petrol = 2 <div class="frac"><span class="num">3</span><span class="den">4</span></div> litres = <div class="frac"><span class="num">11</span><span class="den">4</span></div> litres</div>
                    <div class="sol-step">Total distance = 16 × <div class="frac"><span class="num">11</span><span class="den">4</span></div> = 4 × 11 = 44 km</div>
                    <div class="sol-step"><span class="ans-highlight">Total distance = 44 km</span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Fill in the boxes and find simplest form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(a) (i) Provide number in [ ]: <div class="frac"><span class="num">2</span><span class="den">3</span></div> × [ ] = <div class="frac"><span class="num">10</span><span class="den">30</span></div> (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) <div class="frac"><span class="num">2</span><span class="den">3</span></div> × <div class="frac"><span class="num">5</span><span class="den">10</span></div> = <div class="frac"><span class="num">10</span><span class="den">30</span></div> ➔ <span class="ans-highlight">Number in box = <div class="frac"><span class="num">5</span><span class="den">10</span></div></span></div>
                    <div class="sol-step">• (ii) Simplest form of <div class="frac"><span class="num">5</span><span class="den">10</span></div> = <div class="frac"><span class="num">5 ÷ 5</span><span class="den">10 ÷ 5</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(b) (i) Provide number in [ ]: <div class="frac"><span class="num">3</span><span class="den">5</span></div> × [ ] = <div class="frac"><span class="num">24</span><span class="den">75</span></div> (ii) Simplest form</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">• (i) <div class="frac"><span class="num">3</span><span class="den">5</span></div> × <div class="frac"><span class="num">8</span><span class="den">15</span></div> = <div class="frac"><span class="num">24</span><span class="den">75</span></div> ➔ <span class="ans-highlight">Number in box = <div class="frac"><span class="num">8</span><span class="den">15</span></div></span></div>
                    <div class="sol-step">• (ii) Simplest form of <div class="frac"><span class="num">8</span><span class="den">15</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">15</span></div></span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-4": `
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
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 12 ÷ <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 12 × reciprocal of <div class="frac"><span class="num">3</span><span class="den">4</span></div></div>
                    <div class="sol-step">= 12 × <div class="frac"><span class="num">4</span><span class="den">3</span></div> = <div class="frac"><span class="num">12 × 4</span><span class="den">3</span></div> = <div class="frac"><span class="num">48</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 16</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 14 ÷ <div class="frac"><span class="num">5</span><span class="den">6</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 14 × reciprocal of <div class="frac"><span class="num">5</span><span class="den">6</span></div></div>
                    <div class="sol-step">= 14 × <div class="frac"><span class="num">6</span><span class="den">5</span></div> = <div class="frac"><span class="num">84</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 16 <div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 8 ÷ <div class="frac"><span class="num">7</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 8 × reciprocal of <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                    <div class="sol-step">= 8 × <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">24</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 3 <div class="frac"><span class="num">3</span><span class="den">7</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 4 ÷ <div class="frac"><span class="num">8</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 × reciprocal of <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                    <div class="sol-step">= 4 × <div class="frac"><span class="num">3</span><span class="den">8</span></div> = <div class="frac"><span class="num">12</span><span class="den">8</span></div> = <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 ÷ 2 <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                    <div class="sol-step">= 3 ÷ <div class="frac"><span class="num">7</span><span class="den">3</span></div> = 3 × <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">9</span><span class="den">7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">2</span><span class="den">7</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 5 ÷ 3 <div class="frac"><span class="num">4</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">4</span><span class="den">7</span></div> = <div class="frac"><span class="num">25</span><span class="den">7</span></div></div>
                    <div class="sol-step">= 5 ÷ <div class="frac"><span class="num">25</span><span class="den">7</span></div> = 5 × <div class="frac"><span class="num">7</span><span class="den">25</span></div> = <div class="frac"><span class="num">35</span><span class="den">25</span></div> = <div class="frac"><span class="num">7</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the reciprocal of each of the following fractions. Classify the reciprocals as proper fractions, improper fractions and whole numbers:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                    <div class="sol-step">Since numerator (7) &gt; denominator (3), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">5</span><span class="den">8</span></div> = <div class="frac"><span class="num">8</span><span class="den">5</span></div></div>
                    <div class="sol-step">Since numerator (8) &gt; denominator (5), it is an <span class="ans-highlight">Improper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">9</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">9</span><span class="den">7</span></div> = <div class="frac"><span class="num">7</span><span class="den">9</span></div></div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (9), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) <div class="frac"><span class="num">6</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">6</span><span class="den">5</span></div> = <div class="frac"><span class="num">5</span><span class="den">6</span></div></div>
                    <div class="sol-step">Since numerator (5) &lt; denominator (6), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) <div class="frac"><span class="num">12</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">12</span><span class="den">7</span></div> = <div class="frac"><span class="num">7</span><span class="den">12</span></div></div>
                    <div class="sol-step">Since numerator (7) &lt; denominator (12), it is a <span class="ans-highlight">Proper fraction.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) <div class="frac"><span class="num">1</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">1</span><span class="den">8</span></div> = <div class="frac"><span class="num">8</span><span class="den">1</span></div> = 8</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) <div class="frac"><span class="num">1</span><span class="den">11</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Reciprocal of <div class="frac"><span class="num">1</span><span class="den">11</span></div> = <div class="frac"><span class="num">11</span><span class="den">1</span></div> = 11</div>
                    <div class="sol-step">It is a <span class="ans-highlight">Whole number.</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">7</span><span class="den">3</span></div> ÷ 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">7</span><span class="den">3</span></div> × <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">7</span><span class="den">6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">4</span><span class="den">9</span></div> ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">4</span><span class="den">9</span></div> × <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">4 × 1</span><span class="den">9 × 5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">4</span><span class="den">45</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">6</span><span class="den">13</span></div> ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">6</span><span class="den">13</span></div> × <div class="frac"><span class="num">1</span><span class="den">7</span></div> = <div class="frac"><span class="num">6 × 1</span><span class="den">13 × 7</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">6</span><span class="den">91</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 4 <div class="frac"><span class="num">1</span><span class="den">3</span></div> ÷ 3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">13</span><span class="den">3</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">13</span><span class="den">3</span></div> × <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">13</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">4</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 <div class="frac"><span class="num">1</span><span class="den">2</span></div> ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">7</span><span class="den">2</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">7</span><span class="den">2</span></div> × <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 4 <div class="frac"><span class="num">3</span><span class="den">7</span></div> ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4 <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">31</span><span class="den">7</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">31</span><span class="den">7</span></div> × <div class="frac"><span class="num">1</span><span class="den">7</span></div> = <div class="frac"><span class="num">31</span><span class="den">49</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">31</span><span class="den">49</span></div></span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) <div class="frac"><span class="num">2</span><span class="den">5</span></div> ÷ <div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2</span><span class="den">5</span></div> × <div class="frac"><span class="num">2</span><span class="den">1</span></div> = <div class="frac"><span class="num">4</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) <div class="frac"><span class="num">4</span><span class="den">9</span></div> ÷ <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">4</span><span class="den">9</span></div> × <div class="frac"><span class="num">3</span><span class="den">2</span></div> = <div class="frac"><span class="num">4 × 3</span><span class="den">9 × 2</span></div> = <div class="frac"><span class="num">12</span><span class="den">18</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) <div class="frac"><span class="num">3</span><span class="den">7</span></div> ÷ <div class="frac"><span class="num">8</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3</span><span class="den">7</span></div> × <div class="frac"><span class="num">7</span><span class="den">8</span></div> = <div class="frac"><span class="num">3 × 7</span><span class="den">7 × 8</span></div> = <div class="frac"><span class="num">21</span><span class="den">56</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">3</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 2 <div class="frac"><span class="num">1</span><span class="den">3</span></div> ÷ <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">7</span><span class="den">3</span></div> ➔ <div class="frac"><span class="num">7</span><span class="den">3</span></div> × <div class="frac"><span class="num">5</span><span class="den">3</span></div> = <div class="frac"><span class="num">35</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 3 <div class="frac"><span class="num">8</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 3 <div class="frac"><span class="num">1</span><span class="den">2</span></div> ÷ <div class="frac"><span class="num">8</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">7</span><span class="den">2</span></div> ➔ <div class="frac"><span class="num">7</span><span class="den">2</span></div> × <div class="frac"><span class="num">3</span><span class="den">8</span></div> = <div class="frac"><span class="num">21</span><span class="den">16</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">5</span><span class="den">16</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) <div class="frac"><span class="num">2</span><span class="den">5</span></div> ÷ 1 <div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1 <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">3</span><span class="den">2</span></div> ➔ <div class="frac"><span class="num">2</span><span class="den">5</span></div> × <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= <div class="frac"><span class="num">4</span><span class="den">15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3 <div class="frac"><span class="num">1</span><span class="den">5</span></div> ÷ 1 <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3 <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">16</span><span class="den">5</span></div>, 1 <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">5</span><span class="den">3</span></div> ➔ <div class="frac"><span class="num">16</span><span class="den">5</span></div> × <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">48</span><span class="den">25</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">23</span><span class="den">25</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 2 <div class="frac"><span class="num">1</span><span class="den">5</span></div> ÷ 1 <div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">2 <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">11</span><span class="den">5</span></div>, 1 <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">6</span><span class="den">5</span></div> ➔ <div class="frac"><span class="num">11</span><span class="den">5</span></div> × <div class="frac"><span class="num">5</span><span class="den">6</span></div> = <div class="frac"><span class="num">55</span><span class="den">30</span></div> = <div class="frac"><span class="num">11</span><span class="den">6</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1 <div class="frac"><span class="num">5</span><span class="den">6</span></div></span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-5": `
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
                    <div class="sol-step">100 paise = ₹ 1 ➔ 1 paise = ₹ <div class="frac"><span class="num">1</span><span class="den">100</span></div></div>
                    <div class="sol-step">7 paise = ₹ <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 7 rupees 7 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 7 + ₹ <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                    <div class="sol-step">= ₹ 7 + ₹ 0.07</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 7.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 77 rupees 77 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ 77 + ₹ <div class="frac"><span class="num">77</span><span class="den">100</span></div></div>
                    <div class="sol-step">= ₹ 77 + ₹ 0.77</div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 77.77</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 50 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ <div class="frac"><span class="num">50</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 0.50</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 235 paise</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= ₹ <div class="frac"><span class="num">235</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= ₹ 2.35</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Express in different units:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) Express 5 cm in meter and kilometer</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">100 cm = 1 m ➔ 5 cm = <div class="frac"><span class="num">5</span><span class="den">100</span></div> m = <span class="ans-highlight">0.05 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.05 m = <div class="frac"><span class="num">0.05</span><span class="den">1000</span></div> km = <span class="ans-highlight">0.00005 km</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) Express 35 mm in cm, m and km</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">10 mm = 1 cm ➔ 35 mm = <div class="frac"><span class="num">35</span><span class="den">10</span></div> cm = <span class="ans-highlight">3.5 cm</span></div>
                    <div class="sol-step">100 cm = 1 m ➔ 3.5 cm = <div class="frac"><span class="num">3.5</span><span class="den">100</span></div> m = <span class="ans-highlight">0.035 m</span></div>
                    <div class="sol-step">1000 m = 1 km ➔ 0.035 m = <div class="frac"><span class="num">0.035</span><span class="den">1000</span></div> km = <span class="ans-highlight">0.000035 km</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Express in kg:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 200 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">1000 g = 1 kg ➔ 200 g = <div class="frac"><span class="num">200</span><span class="den">1000</span></div> kg = <span class="ans-highlight">0.2 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 3470 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3470 g = <div class="frac"><span class="num">3470</span><span class="den">1000</span></div> kg = <span class="ans-highlight">3.47 kg</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 4 kg 8 g</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= 4 kg + <div class="frac"><span class="num">8</span><span class="den">1000</span></div> kg = 4 kg + 0.008 kg = <span class="ans-highlight">4.008 kg</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Write the following decimal numbers in the expanded form:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 20.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 10) + (0 × 1) + (0 × <div class="frac"><span class="num">1</span><span class="den">10</span></div>) + (3 × <div class="frac"><span class="num">1</span><span class="den">100</span></div>)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 2.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × <div class="frac"><span class="num">1</span><span class="den">10</span></div>) + (3 × <div class="frac"><span class="num">1</span><span class="den">100</span></div>)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 200.03</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 100) + (0 × 10) + (0 × 1) + (0 × <div class="frac"><span class="num">1</span><span class="den">10</span></div>) + (3 × <div class="frac"><span class="num">1</span><span class="den">100</span></div>)</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 2.034</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <span class="ans-highlight">(2 × 1) + (0 × <div class="frac"><span class="num">1</span><span class="den">10</span></div>) + (3 × <div class="frac"><span class="num">1</span><span class="den">100</span></div>) + (4 × <div class="frac"><span class="num">1</span><span class="den">1000</span></div>)</span></div>
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
    `,
    "ex2-6": `
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
                    <div class="sol-step">Converting 0.2 to fraction = <div class="frac"><span class="num">2</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">2</span><span class="den">10</span></div>) × 6 = <div class="frac"><span class="num">2 × 6</span><span class="den">10</span></div> = <div class="frac"><span class="num">12</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 8 × 4.6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 4.6 to fraction = <div class="frac"><span class="num">46</span><span class="den">10</span></div></div>
                    <div class="sol-step">= 8 × (<div class="frac"><span class="num">46</span><span class="den">10</span></div>) = <div class="frac"><span class="num">8 × 46</span><span class="den">10</span></div> = <div class="frac"><span class="num">368</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 36.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.71 × 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.71 to fraction = <div class="frac"><span class="num">271</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">271</span><span class="den">100</span></div>) × 5 = <div class="frac"><span class="num">271 × 5</span><span class="den">100</span></div> = <div class="frac"><span class="num">1355</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 13.55</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 20.1 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 20.1 to fraction = <div class="frac"><span class="num">201</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">201</span><span class="den">10</span></div>) × 4 = <div class="frac"><span class="num">201 × 4</span><span class="den">10</span></div> = <div class="frac"><span class="num">804</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 80.4</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.05 × 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.05 to fraction = <div class="frac"><span class="num">5</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">5</span><span class="den">100</span></div>) × 7 = <div class="frac"><span class="num">5 × 7</span><span class="den">100</span></div> = <div class="frac"><span class="num">35</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.35</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 211.02 × 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 211.02 to fraction = <div class="frac"><span class="num">21102</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">21102</span><span class="den">100</span></div>) × 4 = <div class="frac"><span class="num">21102 × 4</span><span class="den">100</span></div> = <div class="frac"><span class="num">84408</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 844.08</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 2 × 0.86</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.86 to fraction = <div class="frac"><span class="num">86</span><span class="den">100</span></div></div>
                    <div class="sol-step">= 2 × (<div class="frac"><span class="num">86</span><span class="den">100</span></div>) = <div class="frac"><span class="num">2 × 86</span><span class="den">100</span></div> = <div class="frac"><span class="num">172</span><span class="den">100</span></div></div>
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
                    <div class="sol-step">= (<div class="frac"><span class="num">13</span><span class="den">10</span></div>) × 10 = <div class="frac"><span class="num">130</span><span class="den">10</span></div> = <span class="ans-highlight">13</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36.8 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">368</span><span class="den">10</span></div>) × 10 = <div class="frac"><span class="num">3680</span><span class="den">10</span></div> = <span class="ans-highlight">368</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 153.7 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1537</span><span class="den">10</span></div>) × 10 = <div class="frac"><span class="num">15370</span><span class="den">10</span></div> = <span class="ans-highlight">1537</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 168.07 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">16807</span><span class="den">100</span></div>) × 10 = <div class="frac"><span class="num">16807</span><span class="den">10</span></div> = <span class="ans-highlight">1680.7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 31.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">311</span><span class="den">10</span></div>) × 100 = <div class="frac"><span class="num">31100</span><span class="den">10</span></div> = <span class="ans-highlight">3110</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 156.1 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1561</span><span class="den">10</span></div>) × 100 = <div class="frac"><span class="num">156100</span><span class="den">10</span></div> = <span class="ans-highlight">15610</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.62 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">362</span><span class="den">100</span></div>) × 100 = <span class="ans-highlight">362</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 43.07 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">4307</span><span class="den">100</span></div>) × 100 = <span class="ans-highlight">4307</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 0.5 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) × 10 = <span class="ans-highlight">5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 0.08 × 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">8</span><span class="den">100</span></div>) × 10 = <div class="frac"><span class="num">80</span><span class="den">100</span></div> = <span class="ans-highlight">0.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xi) 0.9 × 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">9</span><span class="den">10</span></div>) × 100 = <div class="frac"><span class="num">900</span><span class="den">10</span></div> = <span class="ans-highlight">90</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(xii) 0.03 × 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">3</span><span class="den">100</span></div>) × 1000 = <div class="frac"><span class="num">3000</span><span class="den">100</span></div> = <span class="ans-highlight">30</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. A two-wheeler covers a distance of 55.3 km in 1 litre of petrol. How much distance will it cover in 10 litres of petrol?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance in 1 litre = 55.3 km</div>
                    <div class="sol-step">Distance in 10 litres = 55.3 × 10 = (<div class="frac"><span class="num">553</span><span class="den">10</span></div>) × 10</div>
                    <div class="sol-step"><span class="ans-highlight">Distance covered = 553 km</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.5 × 0.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">25</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">3</span><span class="den">10</span></div>) = <div class="frac"><span class="num">25 × 3</span><span class="den">100</span></div> = <div class="frac"><span class="num">75</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.75</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.1 × 51.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">517</span><span class="den">10</span></div>) = <div class="frac"><span class="num">517</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 5.17</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.2 × 316.8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">2</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">3168</span><span class="den">10</span></div>) = <div class="frac"><span class="num">6336</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 63.36</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 1.3 × 3.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">13</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">31</span><span class="den">10</span></div>) = <div class="frac"><span class="num">403</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 4.03</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 × 0.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">5</span><span class="den">100</span></div>) = <div class="frac"><span class="num">25</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.025</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 11.2 × 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">112</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">15</span><span class="den">100</span></div>) = <div class="frac"><span class="num">1680</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1.68</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 1.07 × 0.02</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">107</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">2</span><span class="den">100</span></div>) = <div class="frac"><span class="num">214</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0214</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 10.05 × 1.05</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1005</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">105</span><span class="den">100</span></div>) = <div class="frac"><span class="num">105525</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 10.5525</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 101.01 × 0.01</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">10101</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">10101</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 1.0101</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(x) 100.01 × 1.1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">10001</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">11</span><span class="den">10</span></div>) = <div class="frac"><span class="num">110011</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 110.011</span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-7": `
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
                    <div class="sol-step">Converting 0.4 into fraction = <div class="frac"><span class="num">4</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">4</span><span class="den">10</span></div>) ÷ 2</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">4</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">2</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">4</span><span class="den">20</span></div> = <div class="frac"><span class="num">2</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.35 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.35 into fraction = <div class="frac"><span class="num">35</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">35</span><span class="den">100</span></div>) ÷ 5</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">35</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">5</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 2.48 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 2.48 into fraction = <div class="frac"><span class="num">248</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">248</span><span class="den">100</span></div>) ÷ 4</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">248</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">4</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">62</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.62</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 65.4 ÷ 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 65.4 into fraction = <div class="frac"><span class="num">654</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">654</span><span class="den">10</span></div>) ÷ 6</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">654</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">6</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">109</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 10.9</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 651.2 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 651.2 into fraction = <div class="frac"><span class="num">6512</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">6512</span><span class="den">10</span></div>) ÷ 4</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">6512</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">4</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">1628</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 162.8</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 14.49 ÷ 7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 14.49 into fraction = <div class="frac"><span class="num">1449</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1449</span><span class="den">100</span></div>) ÷ 7</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1449</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">7</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">207</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.96 ÷ 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.96 into fraction = <div class="frac"><span class="num">396</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">396</span><span class="den">100</span></div>) ÷ 4</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">396</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">4</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">99</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.99</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 0.80 ÷ 5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.80 into fraction = <div class="frac"><span class="num">80</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">80</span><span class="den">100</span></div>) ÷ 5</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">80</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">5</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">16</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.16</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find (dividing by 10):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 4.8 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">48</span><span class="den">10</span></div>) ÷ 10 = (<div class="frac"><span class="num">48</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">48</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.48</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 52.5 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">525</span><span class="den">10</span></div>) ÷ 10 = (<div class="frac"><span class="num">525</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">525</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 5.25</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.7 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">7</span><span class="den">10</span></div>) ÷ 10 = (<div class="frac"><span class="num">7</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.07</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 33.1 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">331</span><span class="den">10</span></div>) ÷ 10 = (<div class="frac"><span class="num">331</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">331</span><span class="den">100</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 3.31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 272.23 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">27223</span><span class="den">100</span></div>) ÷ 10 = (<div class="frac"><span class="num">27223</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">27223</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 27.223</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 0.56 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">56</span><span class="den">100</span></div>) ÷ 10 = (<div class="frac"><span class="num">56</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">56</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.056</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 3.97 ÷ 10</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">397</span><span class="den">100</span></div>) ÷ 10 = (<div class="frac"><span class="num">397</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">10</span></div>) = <div class="frac"><span class="num">397</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.397</span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find (dividing by 100):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 2.7 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">27</span><span class="den">10</span></div>) ÷ 100 = (<div class="frac"><span class="num">27</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">27</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.027</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 0.3 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">3</span><span class="den">10</span></div>) ÷ 100 = (<div class="frac"><span class="num">3</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">3</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.003</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 0.78 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">78</span><span class="den">100</span></div>) ÷ 100 = (<div class="frac"><span class="num">78</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">78</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0078</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 432.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">4326</span><span class="den">10</span></div>) ÷ 100 = (<div class="frac"><span class="num">4326</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">4326</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 4.326</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 23.6 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">236</span><span class="den">10</span></div>) ÷ 100 = (<div class="frac"><span class="num">236</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">236</span><span class="den">1000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.236</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 98.53 ÷ 100</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">9853</span><span class="den">100</span></div>) ÷ 100 = (<div class="frac"><span class="num">9853</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">100</span></div>) = <div class="frac"><span class="num">9853</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.9853</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find (dividing by 1000):</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">79</span><span class="den">10</span></div>) ÷ 1000 = (<div class="frac"><span class="num">79</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">1000</span></div>) = <div class="frac"><span class="num">79</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0079</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 26.3 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">263</span><span class="den">10</span></div>) ÷ 1000 = (<div class="frac"><span class="num">263</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">1000</span></div>) = <div class="frac"><span class="num">263</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0263</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 38.53 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">3853</span><span class="den">100</span></div>) ÷ 1000 = (<div class="frac"><span class="num">3853</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">1000</span></div>) = <div class="frac"><span class="num">3853</span><span class="den">100000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.03853</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 128.9 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">1289</span><span class="den">10</span></div>) ÷ 1000 = (<div class="frac"><span class="num">1289</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">1000</span></div>) = <div class="frac"><span class="num">1289</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.1289</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 1000</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) ÷ 1000 = (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">1</span><span class="den">1000</span></div>) = <div class="frac"><span class="num">5</span><span class="den">10000</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 0.0005</span></div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. Find:</div>
                <div class="sol-body">
                    <div class="sol-step" style="margin-top: 5px;"><b style="color:#FF4081;">(i) 7 ÷ 3.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 3.5 to fraction = <div class="frac"><span class="num">35</span><span class="den">10</span></div></div>
                    <div class="sol-step">= 7 ÷ (<div class="frac"><span class="num">35</span><span class="den">10</span></div>) = 7 × (<div class="frac"><span class="num">10</span><span class="den">35</span></div>) = <div class="frac"><span class="num">70</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ii) 36 ÷ 0.2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting 0.2 to fraction = <div class="frac"><span class="num">2</span><span class="den">10</span></div></div>
                    <div class="sol-step">= 36 ÷ (<div class="frac"><span class="num">2</span><span class="den">10</span></div>) = 36 × (<div class="frac"><span class="num">10</span><span class="den">2</span></div>) = 18 × 10</div>
                    <div class="sol-step"><span class="ans-highlight">= 180</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iii) 3.25 ÷ 0.5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 3.25 = <div class="frac"><span class="num">325</span><span class="den">100</span></div>, 0.5 = <div class="frac"><span class="num">5</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">325</span><span class="den">100</span></div>) ÷ (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) = (<div class="frac"><span class="num">325</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">10</span><span class="den">5</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3250</span><span class="den">500</span></div> = <div class="frac"><span class="num">65</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 6.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(iv) 30.94 ÷ 0.7</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 30.94 = <div class="frac"><span class="num">3094</span><span class="den">100</span></div>, 0.7 = <div class="frac"><span class="num">7</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">3094</span><span class="den">100</span></div>) ÷ (<div class="frac"><span class="num">7</span><span class="den">10</span></div>) = (<div class="frac"><span class="num">3094</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">10</span><span class="den">7</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">30940</span><span class="den">700</span></div> = <div class="frac"><span class="num">442</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 44.2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(v) 0.5 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 0.5 = <div class="frac"><span class="num">5</span><span class="den">10</span></div>, 0.25 = <div class="frac"><span class="num">25</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) ÷ (<div class="frac"><span class="num">25</span><span class="den">100</span></div>) = (<div class="frac"><span class="num">5</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">100</span><span class="den">25</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">500</span><span class="den">250</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 2</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vi) 7.75 ÷ 0.25</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 7.75 = <div class="frac"><span class="num">775</span><span class="den">100</span></div>, 0.25 = <div class="frac"><span class="num">25</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">775</span><span class="den">100</span></div>) ÷ (<div class="frac"><span class="num">25</span><span class="den">100</span></div>) = (<div class="frac"><span class="num">775</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">100</span><span class="den">25</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">775</span><span class="den">25</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 31</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(vii) 76.5 ÷ 0.15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 76.5 = <div class="frac"><span class="num">765</span><span class="den">10</span></div>, 0.15 = <div class="frac"><span class="num">15</span><span class="den">100</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">765</span><span class="den">10</span></div>) ÷ (<div class="frac"><span class="num">15</span><span class="den">100</span></div>) = (<div class="frac"><span class="num">765</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">100</span><span class="den">15</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">76500</span><span class="den">150</span></div> = 510</div>
                    <div class="sol-step"><span class="ans-highlight">= 510</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(viii) 37.8 ÷ 1.4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 37.8 = <div class="frac"><span class="num">378</span><span class="den">10</span></div>, 1.4 = <div class="frac"><span class="num">14</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">378</span><span class="den">10</span></div>) ÷ (<div class="frac"><span class="num">14</span><span class="den">10</span></div>) = (<div class="frac"><span class="num">378</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">10</span><span class="den">14</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">378</span><span class="den">14</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">= 27</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b style="color:#FF4081;">(ix) 2.73 ÷ 1.3</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting decimals to fractions: 2.73 = <div class="frac"><span class="num">273</span><span class="den">100</span></div>, 1.3 = <div class="frac"><span class="num">13</span><span class="den">10</span></div></div>
                    <div class="sol-step">= (<div class="frac"><span class="num">273</span><span class="den">100</span></div>) ÷ (<div class="frac"><span class="num">13</span><span class="den">10</span></div>) = (<div class="frac"><span class="num">273</span><span class="den">100</span></div>) × (<div class="frac"><span class="num">10</span><span class="den">13</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">2730</span><span class="den">1300</span></div> = <div class="frac"><span class="num">21</span><span class="den">10</span></div></div>
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
                    <div class="sol-step">= (<div class="frac"><span class="num">432</span><span class="den">10</span></div>) ÷ (<div class="frac"><span class="num">24</span><span class="den">10</span></div>)</div>
                    <div class="sol-step">= (<div class="frac"><span class="num">432</span><span class="den">10</span></div>) × (<div class="frac"><span class="num">10</span><span class="den">24</span></div>)</div>
                    <div class="sol-step">= <div class="frac"><span class="num">432 × 10</span><span class="den">10 × 24</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">432</span><span class="den">24</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Distance covered in 1 litre = 18 km</span></div>
                </div>
            </div>
        </div>
    `,
  },
  mcqs: [
  {
    "id": "c7m2-mcq-1",
    "question": "What is the reciprocal of 3/7?",
    "options": [
      "3/7",
      "7/3",
      "1/3",
      "1/7"
    ],
    "correctAnswer": "b",
    "explanation": "To find the reciprocal of a fraction, swap the numerator and denominator: 3/7 becomes 7/3."
  },
  {
    "id": "c7m2-mcq-2",
    "question": "Which of the following is a proper fraction?",
    "options": [
      "5/3",
      "7/4",
      "2/5",
      "9/2"
    ],
    "correctAnswer": "c",
    "explanation": "A proper fraction has a numerator smaller than its denominator (2 < 5)."
  },
  {
    "id": "c7m2-mcq-3",
    "question": "What is (1/2) × (2/3)?",
    "options": [
      "1/3",
      "2/5",
      "3/4",
      "1/6"
    ],
    "correctAnswer": "a",
    "explanation": "Product of numerators / product of denominators = (1 × 2)/(2 × 3) = 2/6 = 1/3."
  },
  {
    "id": "c7m2-mcq-4",
    "question": "What is 0.3 × 10?",
    "options": [
      "0.03",
      "3",
      "30",
      "0.30"
    ],
    "correctAnswer": "b",
    "explanation": "When multiplying a decimal by 10, shift the decimal point 1 place to the right: 0.3 × 10 = 3."
  },
  {
    "id": "c7m2-mcq-5",
    "question": "What is 4.5 ÷ 10?",
    "options": [
      "45",
      "4.5",
      "0.45",
      "0.045"
    ],
    "correctAnswer": "c",
    "explanation": "When dividing a decimal by 10, shift the decimal point 1 place to the left: 4.5 ÷ 10 = 0.45."
  },
  {
    "id": "c7m2-mcq-6",
    "question": "What is 3/5 + 1/5?",
    "options": [
      "4/10",
      "4/5",
      "3/25",
      "2/5"
    ],
    "correctAnswer": "b",
    "explanation": "Since denominators are the same, add numerators directly: (3 + 1)/5 = 4/5."
  },
  {
    "id": "c7m2-mcq-7",
    "question": "Which decimal is greater: 0.7 or 0.07?",
    "options": [
      "0.7",
      "0.07",
      "Both are equal",
      "Cannot be compared"
    ],
    "correctAnswer": "a",
    "explanation": "Comparing tenths digit: 7 > 0, so 0.7 is greater than 0.07."
  },
  {
    "id": "c7m2-mcq-8",
    "question": "Express 50 paise in rupees using decimals:",
    "options": [
      "₹ 5.0",
      "₹ 0.50",
      "₹ 0.05",
      "₹ 50.0"
    ],
    "correctAnswer": "b",
    "explanation": "100 paise = ₹ 1, so 50 paise = 50/100 = ₹ 0.50."
  },
  {
    "id": "c7m2-mcq-9",
    "question": "What is (2/3) ÷ (2/3)?",
    "options": [
      "0",
      "1",
      "4/9",
      "2/3"
    ],
    "correctAnswer": "b",
    "explanation": "Any non-zero fraction divided by itself is equal to 1."
  },
  {
    "id": "c7m2-mcq-10",
    "question": "What is the place value of 2 in 10.25?",
    "options": [
      "Ones",
      "Tens",
      "Tenths",
      "Hundredths"
    ],
    "correctAnswer": "c",
    "explanation": "The first position immediately after the decimal point represents Tenths."
  }
]
};
