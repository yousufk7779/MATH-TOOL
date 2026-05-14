import { ChapterContent } from "../types";

export const c7Math2: ChapterContent = {
    id: "c7-math-2",
    number: 2,
    title: "Fractions and Decimals",
    isHtmlView: true,
    introduction: "In this chapter, we will learn about fractions and decimals including their addition, subtraction, multiplication and division. We will also explore how to represent them visually and solve real-life problems.",
    definitions: [],
    keyPoints: [
        "A fraction represents a part of a whole.",
        "Proper fractions have a numerator less than the denominator.",
        "Improper fractions have a numerator greater than or equal to the denominator.",
        "To multiply fractions, multiply the numerators together and the denominators together.",
        "To divide by a fraction, multiply by its reciprocal.",
        "Decimals are another way of expressing fractions with denominators as powers of 10."
    ],
    formulas: [],
    crux: [],
    exercises: [
        { id: "ex2-1", name: "Exercise 2.1", questions: [] },
        { id: "ex2-2", name: "Exercise 2.2", questions: [] },
        { id: "ex2-3", name: "Exercise 2.3", questions: [] },
        { id: "ex2-4", name: "Exercise 2.4", questions: [] },
        { id: "ex2-5", name: "Exercise 2.5", questions: [] },
        { id: "ex2-6", name: "Exercise 2.6", questions: [] },
        { id: "ex2-7", name: "Exercise 2.7", questions: [] }
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
            <p class="content-text">This chapter deepens our understanding of fractional parts and decimal representations, focusing on precision in arithmetic operations.</p>
            <div class="point-box">
                <div class="point-item">Multiplication of fractions: Product of Numerators / Product of Denominators.</div>
                <div class="point-item">Reciprocal: Two non-zero numbers whose product is 1 are reciprocals.</div>
                <div class="point-item">Division: Multiplication of the first fraction by the reciprocal of the second.</div>
                <div class="point-item">Decimal multiplication: Count the total decimal places in factors to place the point in the product.</div>
            </div>
        </div>
    `,
    htmlExercises: {
        "ex2-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 20px 0; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px dashed #FF4081; }
            .magic-table { width: 100% !important; margin: 20px auto; border-collapse: collapse; background: #1a1a2e; border: 2px solid #FF4081; table-layout: fixed; display: table !important; }
            .magic-table td { border: 1px solid #FF4081; padding: 20px 5px; text-align: center; width: 33.33% !important; display: table-cell !important; }
        </style>
        <div class="container">


            <div class="question">1. Solve:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 2 - <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                <div class="sol-step">We can write 2 as <div class="frac"><span class="num">2</span><span class="den">1</span></div></div>
                <div class="sol-step">LCM of 1 and 5 is 5</div>
                <div class="sol-step">=> <div class="frac"><span class="num">2 &times; 5</span><span class="den">1 &times; 5</span></div> - <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">10</span><span class="den">5</span></div> - <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">10 - 3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">5</span></div></div>
                <div class="sol-step">Converting to mixed fraction: <span class="ans-highlight">1<div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 4 + <div class="frac"><span class="num">7</span><span class="den">8</span></div></b></div>
                <div class="sol-step">We can write 4 as <div class="frac"><span class="num">4</span><span class="den">1</span></div></div>
                <div class="sol-step">LCM of 1 and 8 is 8</div>
                <div class="sol-step">=> <div class="frac"><span class="num">4 &times; 8</span><span class="den">1 &times; 8</span></div> + <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">32</span><span class="den">8</span></div> + <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">32 + 7</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">39</span><span class="den">8</span></div></div>
                <div class="sol-step">Converting to mixed fraction: <span class="ans-highlight">4<div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">3</span><span class="den">5</span></div> + <div class="frac"><span class="num">2</span><span class="den">7</span></div></b></div>
                <div class="sol-step">LCM of 5 and 7 is 35</div>
                <div class="sol-step">=> <div class="frac"><span class="num">3 &times; 7</span><span class="den">5 &times; 7</span></div> + <div class="frac"><span class="num">2 &times; 5</span><span class="den">7 &times; 5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">21</span><span class="den">35</span></div> + <div class="frac"><span class="num">10</span><span class="den">35</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">21 + 10</span><span class="den">35</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">31</span><span class="den">35</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">9</span><span class="den">11</span></div> - <div class="frac"><span class="num">4</span><span class="den">15</span></div></b></div>
                <div class="sol-step">LCM of 11 and 15 is 165</div>
                <div class="sol-step">=> <div class="frac"><span class="num">9 &times; 15</span><span class="den">11 &times; 15</span></div> - <div class="frac"><span class="num">4 &times; 11</span><span class="den">15 &times; 11</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">135</span><span class="den">165</span></div> - <div class="frac"><span class="num">44</span><span class="den">165</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">135 - 44</span><span class="den">165</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">91</span><span class="den">165</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">7</span><span class="den">10</span></div> + <div class="frac"><span class="num">2</span><span class="den">5</span></div> + <div class="frac"><span class="num">3</span><span class="den">2</span></div></b></div>
                <div class="sol-step">LCM of 10, 5 and 2 is 10</div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">10</span></div> + <div class="frac"><span class="num">2 &times; 2</span><span class="den">5 &times; 2</span></div> + <div class="frac"><span class="num">3 &times; 5</span><span class="den">2 &times; 5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">10</span></div> + <div class="frac"><span class="num">4</span><span class="den">10</span></div> + <div class="frac"><span class="num">15</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7 + 4 + 15</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">26</span><span class="den">10</span></div></div>
                <div class="sol-step">Reducing to simplest form: <div class="frac"><span class="num">13</span><span class="den">5</span></div></div>
                <div class="sol-step">Converting to mixed fraction: <span class="ans-highlight">2<div class="frac"><span class="num">3</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 2<div class="frac"><span class="num">2</span><span class="den">3</span></div> + 3<div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                <div class="sol-step">Converting to improper fractions:</div>
                <div class="sol-step">2<div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 &times; 3 + 2</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                <div class="sol-step">3<div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">3 &times; 2 + 1</span><span class="den">2</span></div> = <div class="frac"><span class="num">7</span><span class="den">2</span></div></div>
                <div class="sol-step">LCM of 3 and 2 is 6</div>
                <div class="sol-step">=> <div class="frac"><span class="num">8 &times; 2</span><span class="den">3 &times; 2</span></div> + <div class="frac"><span class="num">7 &times; 3</span><span class="den">2 &times; 3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16</span><span class="den">6</span></div> + <div class="frac"><span class="num">21</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16 + 21</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">37</span><span class="den">6</span></div></div>
                <div class="sol-step">Converting to mixed fraction: <span class="ans-highlight">6<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 8<div class="frac"><span class="num">1</span><span class="den">2</span></div> - 3<div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                <div class="sol-step">Converting to improper fractions:</div>
                <div class="sol-step">8<div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">17</span><span class="den">2</span></div></div>
                <div class="sol-step">3<div class="frac"><span class="num">5</span><span class="den">8</span></div> = <div class="frac"><span class="num">29</span><span class="den">8</span></div></div>
                <div class="sol-step">LCM of 2 and 8 is 8</div>
                <div class="sol-step">=> <div class="frac"><span class="num">17 &times; 4</span><span class="den">2 &times; 4</span></div> - <div class="frac"><span class="num">29</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">68</span><span class="den">8</span></div> - <div class="frac"><span class="num">29</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">68 - 29</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">39</span><span class="den">8</span></div></div>
                <div class="sol-step">Converting to mixed fraction: <span class="ans-highlight">4<div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>
            </div>
                <div class="sol-step" style="margin-top: 15px;"><b>(ii)</b> 4 + <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">32 + 7</span><span class="den">8</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">39</span><span class="den">8</span></div></div>
                <div class="sol-step">= <span class="ans-highlight">4<div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii)</b> <div class="frac"><span class="num">3</span><span class="den">5</span></div> + <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">21 + 10</span><span class="den">35</span></div></div>
                <div class="sol-step">= <span class="ans-highlight"><div class="frac"><span class="num">31</span><span class="den">35</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv)</b> <div class="frac"><span class="num">9</span><span class="den">11</span></div> - <div class="frac"><span class="num">4</span><span class="den">15</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">135 - 44</span><span class="den">165</span></div></div>
                <div class="sol-step">= <span class="ans-highlight"><div class="frac"><span class="num">91</span><span class="den">165</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v)</b> <div class="frac"><span class="num">7</span><span class="den">10</span></div> + <div class="frac"><span class="num">2</span><span class="den">5</span></div> + <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">7 + 4 + 15</span><span class="den">10</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">26</span><span class="den">10</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">13</span><span class="den">5</span></div></div>
                <div class="sol-step">= <span class="ans-highlight">2<div class="frac"><span class="num">3</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi)</b> 2<div class="frac"><span class="num">2</span><span class="den">3</span></div> + 3<div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">8</span><span class="den">3</span></div> + <div class="frac"><span class="num">7</span><span class="den">2</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">16 + 21</span><span class="den">6</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">37</span><span class="den">6</span></div></div>
                <div class="sol-step">= <span class="ans-highlight">6<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii)</b> 8<div class="frac"><span class="num">1</span><span class="den">2</span></div> - 3<div class="frac"><span class="num">5</span><span class="den">8</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">17</span><span class="den">2</span></div> - <div class="frac"><span class="num">29</span><span class="den">8</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">68 - 29</span><span class="den">8</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">39</span><span class="den">8</span></div></div>
                <div class="sol-step">= <span class="ans-highlight">4<div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>
            </div>

            <div class="question">2. Arrange the following in ascending order: <br/>(i) <div class="frac"><span class="num">2</span><span class="den">9</span></div>, <div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">8</span><span class="den">21</span></div></div>
            <div class="solution">
                <div class="sol-step"><b>Easy Method: Make Numerators Same</b></div>
                <div class="sol-step">We have numerators 2, 2, and 8. Let's make them all 8.</div>
                <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">9</span></div> = <div class="frac"><span class="num">2 &times; 4</span><span class="den">9 &times; 4</span></div> = <div class="frac"><span class="num">8</span><span class="den">36</span></div></div>
                <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 &times; 4</span><span class="den">3 &times; 4</span></div> = <div class="frac"><span class="num">8</span><span class="den">12</span></div></div>
                <div class="sol-step">Now we compare: <div class="frac"><span class="num">8</span><span class="den">36</span></div>, <div class="frac"><span class="num">8</span><span class="den">12</span></div>, and <div class="frac"><span class="num">8</span><span class="den">21</span></div></div>
                <div class="sol-step">Rule: If numerators are same, the fraction with the <b>largest</b> denominator is the <b>smallest</b>.</div>
                <div class="sol-step">Since 36 &gt; 21 &gt; 12, we have: <div class="frac"><span class="num">8</span><span class="den">36</span></div> &lt; <div class="frac"><span class="num">8</span><span class="den">21</span></div> &lt; <div class="frac"><span class="num">8</span><span class="den">12</span></div></div>
                <div class="sol-step">Ascending order: <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">9</span></div>, <div class="frac"><span class="num">8</span><span class="den">21</span></div>, <div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>
            </div>

            <div class="question">3. In a "magic square", the sum of the numbers in each row, in each column and along the diagonal is the same. Is this a magic square?</div>
            <table class="magic-table">
                <tr><td style="width: 33.33%"><div class="frac"><span class="num">2</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">9</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">4</span><span class="den">13</span></div></td></tr>
                <tr><td style="width: 33.33%"><div class="frac"><span class="num">7</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">5</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">3</span><span class="den">13</span></div></td></tr>
                <tr><td style="width: 33.33%"><div class="frac"><span class="num">6</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">1</span><span class="den">13</span></div></td><td style="width: 33.33%"><div class="frac"><span class="num">8</span><span class="den">13</span></div></td></tr>
            </table>
            <div class="solution">
                <div class="sol-step">Sum along first row = <div class="frac"><span class="num">2</span><span class="den">13</span></div> + <div class="frac"><span class="num">9</span><span class="den">13</span></div> + <div class="frac"><span class="num">4</span><span class="den">13</span></div> = <div class="frac"><span class="num">15</span><span class="den">13</span></div></div>
                <div class="sol-step">Sum along second row = <div class="frac"><span class="num">7+5+3</span><span class="den">13</span></div> = <div class="frac"><span class="num">15</span><span class="den">13</span></div></div>
                <div class="sol-step">Sum along third row = <div class="frac"><span class="num">6+1+8</span><span class="den">13</span></div> = <div class="frac"><span class="num">15</span><span class="den">13</span></div></div>
                <div class="sol-step">Sum along first column = <div class="frac"><span class="num">2+7+6</span><span class="den">13</span></div> = <div class="frac"><span class="num">15</span><span class="den">13</span></div></div>
                <div class="sol-step">Sum along diagonal = <div class="frac"><span class="num">2+5+8</span><span class="den">13</span></div> = <div class="frac"><span class="num">15</span><span class="den">13</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">Yes, it is a magic square</span> as all sums are <div class="frac"><span class="num">15</span><span class="den">13</span></div>.</div>
            </div>

            <div class="question">4. A rectangle sheet of paper is 12<div class="frac"><span class="num">1</span><span class="den">2</span></div> cm long and 10<div class="frac"><span class="num">2</span><span class="den">3</span></div> cm wide. Find its perimeter.</div>
            <div class="solution">
                <div class="sol-step">Length of the sheet (L) = 12<div class="frac"><span class="num">1</span><span class="den">2</span></div> cm = <div class="frac"><span class="num">25</span><span class="den">2</span></div> cm</div>
                <div class="sol-step">Width of the sheet (W) = 10<div class="frac"><span class="num">2</span><span class="den">3</span></div> cm = <div class="frac"><span class="num">32</span><span class="den">3</span></div> cm</div>
                <div class="sol-step">Perimeter of a rectangle = 2 &times; (Length + Width)</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">25</span><span class="den">2</span></div> + <div class="frac"><span class="num">32</span><span class="den">3</span></div>)</div>
                <div class="sol-step">LCM of 2 and 3 is 6</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">25 &times; 3</span><span class="den">2 &times; 3</span></div> + <div class="frac"><span class="num">32 &times; 2</span><span class="den">3 &times; 2</span></div>)</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">75</span><span class="den">6</span></div> + <div class="frac"><span class="num">64</span><span class="den">6</span></div>)</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">75 + 64</span><span class="den">6</span></div>)</div>
                <div class="sol-step">=> 2 &times; <div class="frac"><span class="num">139</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">139</span><span class="den">3</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">46<div class="frac"><span class="num">1</span><span class="den">3</span></div> cm</span></div>
            </div>

            <div class="question">5. Find the perimeter of (i) &Delta;ABC (ii) the square BCEF in this figure. Whose perimeter is greater?</div>
            <div class="svg-container">
                <svg width="240" height="220" viewBox="0 0 240 220">
                    <!-- Triangle ABC -->
                    <path d="M120 20 L60 100 L180 100 Z" fill="none" stroke="#FF4081" stroke-width="2" />
                    <text x="115" y="15" fill="#fff" font-weight="bold">A</text>
                    <text x="50" y="110" fill="#fff" font-weight="bold">B</text>
                    <text x="185" y="110" fill="#fff" font-weight="bold">C</text>
                    
                    <!-- Square BCEF -->
                    <rect x="60" y="100" width="120" height="80" fill="none" stroke="#FF4081" stroke-width="2" />
                    <text x="50" y="190" fill="#fff" font-weight="bold">E</text>
                    <text x="185" y="190" fill="#fff" font-weight="bold">F</text>
                    
                    <!-- Proper Mixed Fractions for Triangle Sides -->
                    <g transform="translate(40, 55)">
                        <text x="0" y="10" fill="#FF4081" font-size="14">3</text>
                        <text x="10" y="2" fill="#FF4081" font-size="10">3</text>
                        <line x1="10" y1="5" x2="20" y2="5" stroke="#FF4081" stroke-width="1" />
                        <text x="10" y="14" fill="#FF4081" font-size="10">5</text>
                        <text x="22" y="10" fill="#FF4081" font-size="12">cm</text>
                    </g>
                    
                    <g transform="translate(160, 55)">
                        <text x="0" y="10" fill="#FF4081" font-size="14">2</text>
                        <text x="10" y="2" fill="#FF4081" font-size="10">1</text>
                        <line x1="10" y1="5" x2="20" y2="5" stroke="#FF4081" stroke-width="1" />
                        <text x="10" y="14" fill="#FF4081" font-size="10">4</text>
                        <text x="22" y="10" fill="#FF4081" font-size="12">cm</text>
                    </g>
                    
                    <g transform="translate(100, 85)">
                        <text x="0" y="10" fill="#FF4081" font-size="14">2</text>
                        <text x="10" y="2" fill="#FF4081" font-size="10">1</text>
                        <line x1="10" y1="5" x2="20" y2="5" stroke="#FF4081" stroke-width="1" />
                        <text x="10" y="14" fill="#FF4081" font-size="10">2</text>
                        <text x="22" y="10" fill="#FF4081" font-size="12">cm</text>
                    </g>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step"><b>(i) Perimeter of &Delta;ABC:</b></div>
                <div class="sol-step">Sides are: AB = <div class="frac"><span class="num">18</span><span class="den">5</span></div> cm, BC = <div class="frac"><span class="num">5</span><span class="den">2</span></div> cm, AC = <div class="frac"><span class="num">9</span><span class="den">4</span></div> cm</div>
                <div class="sol-step">Perimeter = AB + BC + AC</div>
                <div class="sol-step">=> <div class="frac"><span class="num">18</span><span class="den">5</span></div> + <div class="frac"><span class="num">5</span><span class="den">2</span></div> + <div class="frac"><span class="num">9</span><span class="den">4</span></div></div>
                <div class="sol-step">LCM of 5, 2 and 4 is 20</div>
                <div class="sol-step">=> <div class="frac"><span class="num">18 &times; 4</span><span class="den">5 &times; 4</span></div> + <div class="frac"><span class="num">5 &times; 10</span><span class="den">2 &times; 10</span></div> + <div class="frac"><span class="num">9 &times; 5</span><span class="den">4 &times; 5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">72</span><span class="den">20</span></div> + <div class="frac"><span class="num">50</span><span class="den">20</span></div> + <div class="frac"><span class="num">45</span><span class="den">20</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">72 + 50 + 45</span><span class="den">20</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">167</span><span class="den">20</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">8<div class="frac"><span class="num">7</span><span class="den">20</span></div> cm</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Perimeter of square BCEF:</b></div>
                <div class="sol-step">Side = BC = 2<div class="frac"><span class="num">1</span><span class="den">2</span></div> cm = <div class="frac"><span class="num">5</span><span class="den">2</span></div> cm</div>
                <div class="sol-step">Perimeter = 4 &times; Side</div>
                <div class="sol-step">=> 4 &times; <div class="frac"><span class="num">5</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">10 cm</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>Comparison:</b></div>
                <div class="sol-step">Perimeter of Triangle = 8<div class="frac"><span class="num">7</span><span class="den">20</span></div> cm</div>
                <div class="sol-step">Perimeter of Square = 10 cm</div>
                <div class="sol-step">Since 10 > 8.35, the <span class="ans-highlight">Perimeter of square BCEF is greater.</span></div>
            </div>

            <div class="question">6. Salim wants to put a picture in a frame. The picture is 7<div class="frac"><span class="num">3</span><span class="den">5</span></div> cm wide. To fit in the frame the picture cannot be more than 7<div class="frac"><span class="num">3</span><span class="den">10</span></div> cm wide. How much should the picture be trimmed?</div>
            <div class="solution">
                <div class="sol-step">Width of the picture = 7<div class="frac"><span class="num">3</span><span class="den">5</span></div> cm = <div class="frac"><span class="num">38</span><span class="den">5</span></div> cm</div>
                <div class="sol-step">Width of the frame = 7<div class="frac"><span class="num">3</span><span class="den">10</span></div> cm = <div class="frac"><span class="num">73</span><span class="den">10</span></div> cm</div>
                <div class="sol-step">Picture should be trimmed = Width of picture - Width of frame</div>
                <div class="sol-step">=> <div class="frac"><span class="num">38</span><span class="den">5</span></div> - <div class="frac"><span class="num">73</span><span class="den">10</span></div></div>
                <div class="sol-step">LCM of 5 and 10 is 10</div>
                <div class="sol-step">=> <div class="frac"><span class="num">38 &times; 2</span><span class="den">5 &times; 2</span></div> - <div class="frac"><span class="num">73</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">76</span><span class="den">10</span></div> - <div class="frac"><span class="num">73</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">76 - 73</span><span class="den">10</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">10</span></div> cm</span></div>
            </div>

            <div class="question">7. Rozy ate <div class="frac"><span class="num">1</span><span class="den">3</span></div> part of the chocolate which her mother gave. Her sister Sonia ate the remaining chocolate. How much part of the chocolate did Sonia eat? Who had the larger share? By how much?</div>
            <div class="solution">
                <div class="sol-step">Let the whole chocolate be 1</div>
                <div class="sol-step">Part of chocolate eaten by Rozy = <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                <div class="sol-step">Part of chocolate eaten by Sonia = 1 - <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3 - 1</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>Comparison of shares:</b></div>
                <div class="sol-step">Rozy's share = <div class="frac"><span class="num">1</span><span class="den">3</span></div> | Sonia's share = <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="sol-step">Since <div class="frac"><span class="num">2</span><span class="den">3</span></div> > <div class="frac"><span class="num">1</span><span class="den">3</span></div>, Sonia had the larger share.</div>
                <div class="sol-step">Difference = <div class="frac"><span class="num">2</span><span class="den">3</span></div> - <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>
            </div>

            <div class="question">8. Ansh finished colouring a picture in <div class="frac"><span class="num">7</span><span class="den">12</span></div> hour. Ashiq finished colouring the same picture in <div class="frac"><span class="num">3</span><span class="den">4</span></div> hour. Who worked longer? By what fraction was it longer?</div>
            <div class="solution">
                <div class="sol-step">Time taken by Ansh = <div class="frac"><span class="num">7</span><span class="den">12</span></div> hour</div>
                <div class="sol-step">Time taken by Ashiq = <div class="frac"><span class="num">3</span><span class="den">4</span></div> hour</div>
                <div class="sol-step">To compare, we find the LCM of denominators (12 and 4), which is 12.</div>
                <div class="sol-step">Ashiq's time = <div class="frac"><span class="num">3 &times; 3</span><span class="den">4 &times; 3</span></div> = <div class="frac"><span class="num">9</span><span class="den">12</span></div> hour</div>
                <div class="sol-step">Since <div class="frac"><span class="num">9</span><span class="den">12</span></div> > <div class="frac"><span class="num">7</span><span class="den">12</span></div>, Ashiq worked longer.</div>
                <div class="sol-step">Difference = <div class="frac"><span class="num">9</span><span class="den">12</span></div> - <div class="frac"><span class="num">7</span><span class="den">12</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">12</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">6</span></div> hour</span></div>
            </div>
        </div>
        `,
        "ex2-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-row { display: flex; align-items: center; gap: 15px; margin: 15px 0; background: #1a1a2e; padding: 10px; border-radius: 10px; flex-wrap: wrap; justify-content: center; }
            .match-box { border: 1px dashed #FF4081; padding: 10px; margin: 10px 0; border-radius: 8px; display: flex; flex-direction: column; gap: 10px; }
            .match-item { background: rgba(255,255,255,0.05); padding: 5px 10px; border-radius: 4px; }
        </style>
        <div class="container">


            <div class="question">1. Which of the drawings (a) to (d) show:</div>
            <div class="match-box">
                <div class="match-item">(i) 2 &times; <div class="frac"><span class="num">1</span><span class="den">5</span></div></div>
                <div class="match-item">(ii) 2 &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                <div class="match-item">(iii) 3 &times; <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="match-item">(iv) 3 &times; <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
            </div>

            <div class="svg-row">
                <span>(a)</span>
                <svg width="60" height="60"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M30 30 L30 5 M30 30 L52 42 M30 30 L8 42" stroke="#FF4081"/><path d="M30 30 L30 5 A25 25 0 0 1 52 42 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M30 30 L52 42 A25 25 0 0 1 8 42 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M30 30 L30 5 M30 30 L52 42 M30 30 L8 42" stroke="#FF4081"/><path d="M30 30 L30 5 A25 25 0 0 1 52 42 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M30 30 L52 42 A25 25 0 0 1 8 42 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M30 30 L30 5 M30 30 L52 42 M30 30 L8 42" stroke="#FF4081"/><path d="M30 30 L30 5 A25 25 0 0 1 52 42 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M30 30 L52 42 A25 25 0 0 1 8 42 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>
            <div class="svg-row">
                <span>(b)</span>
                <svg width="60" height="60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/><line x1="30" y1="10" x2="30" y2="50" stroke="#FF4081"/><rect x="10" y="10" width="20" height="40" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/><line x1="30" y1="10" x2="30" y2="50" stroke="#FF4081"/><rect x="10" y="10" width="20" height="40" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>
            <div class="svg-row">
                <span>(c)</span>
                <svg width="60" height="60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/><line x1="10" y1="30" x2="50" y2="30" stroke="#FF4081"/><line x1="30" y1="10" x2="30" y2="50" stroke="#FF4081"/><rect x="10" y="10" width="20" height="20" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/><line x1="10" y1="30" x2="50" y2="30" stroke="#FF4081"/><line x1="30" y1="10" x2="30" y2="50" stroke="#FF4081"/><rect x="10" y="10" width="20" height="20" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><rect x="10" y="10" width="40" height="40" fill="none" stroke="#FF4081" stroke-width="2"/><line x1="10" y1="30" x2="50" y2="30" stroke="#FF4081"/><line x1="30" y1="10" x2="30" y2="50" stroke="#FF4081"/><rect x="10" y="10" width="20" height="20" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>
            <div class="svg-row">
                <span>(d)</span>
                <svg width="60" height="60"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M30 30 L30 5 M30 30 L53.7 22.7 M30 30 L44.7 53.7 M30 30 L15.3 53.7 M30 30 L6.3 22.7" stroke="#FF4081"/><path d="M30 30 L30 5 A25 25 0 0 1 53.7 22.7 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="60" height="60"><circle cx="30" cy="30" r="25" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M30 30 L30 5 M30 30 L53.7 22.7 M30 30 L44.7 53.7 M30 30 L15.3 53.7 M30 30 L6.3 22.7" stroke="#FF4081"/><path d="M30 30 L30 5 A25 25 0 0 1 53.7 22.7 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>

            <div class="solution">
                <div class="sol-step">(i) &rarr; <b>(d)</b></div>
                <div class="sol-step">(ii) &rarr; <b>(b)</b></div>
                <div class="sol-step">(iii) &rarr; <b>(a)</b></div>
                <div class="sol-step">(iv) &rarr; <b>(c)</b></div>
            </div>

            <div class="question">2. Some pictures (a) to (c) are given below. Tell which of them show: </div>
            <div class="match-box">
                <div class="match-item">(i) 3 &times; <div class="frac"><span class="num">1</span><span class="den">5</span></div> = <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="match-item">(ii) 2 &times; <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="match-item">(iii) 3 &times; <div class="frac"><span class="num">3</span><span class="den">4</span></div> = 2<div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
            </div>
            <div class="svg-row">
                <span>(a)</span>
                <svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 25 L25 5 M25 25 L42 35 M25 25 L8 35" stroke="#FF4081"/><path d="M25 25 L25 5 A20 20 0 0 1 42 35 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 25 L25 5 M25 25 L42 35 M25 25 L8 35" stroke="#FF4081"/><path d="M25 25 L25 5 A20 20 0 0 1 42 35 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <span style="font-size: 20px;">=</span>
                <svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 25 L25 5 M25 25 L42 35 M25 25 L8 35" stroke="#FF4081"/><path d="M25 25 L25 5 A20 20 0 0 1 42 35 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M25 25 L42 35 A20 20 0 0 1 8 35 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>
            <div class="svg-row">
                <span>(b)</span>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 5 L15 25 L35 25 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M15 25 L5 45 L25 45 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M35 25 L25 45 L45 45 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 5 L15 25 L35 25 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M15 25 L5 45 L25 45 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M35 25 L25 45 L45 45 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 5 L15 25 L35 25 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M15 25 L5 45 L25 45 Z" fill="rgba(255, 64, 129, 0.4)"/><path d="M35 25 L25 45 L45 45 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <span style="font-size: 20px;">=</span>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081" stroke-width="2"/></svg>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081" stroke-width="2"/></svg>
                <svg width="50" height="50"><path d="M25 5 L5 45 L45 45 Z" fill="none" stroke="#FF4081" stroke-width="2"/><path d="M25 5 L15 25 L35 25 Z" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>
            <div class="svg-row">
                <span>(c)</span>
                <svg width="40" height="60"><rect x="5" y="5" width="30" height="50" fill="none" stroke="#FF4081" stroke-width="1"/><line x1="5" y1="15" x2="35" y2="15" stroke="#FF4081"/><line x1="5" y1="25" x2="35" y2="25" stroke="#FF4081"/><line x1="5" y1="35" x2="35" y2="35" stroke="#FF4081"/><line x1="5" y1="45" x2="35" y2="45" stroke="#FF4081"/><rect x="5" y="5" width="30" height="10" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="40" height="60"><rect x="5" y="5" width="30" height="50" fill="none" stroke="#FF4081" stroke-width="1"/><line x1="5" y1="15" x2="35" y2="15" stroke="#FF4081"/><line x1="5" y1="25" x2="35" y2="25" stroke="#FF4081"/><line x1="5" y1="35" x2="35" y2="35" stroke="#FF4081"/><line x1="5" y1="45" x2="35" y2="45" stroke="#FF4081"/><rect x="5" y="5" width="30" height="10" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <svg width="40" height="60"><rect x="5" y="5" width="30" height="50" fill="none" stroke="#FF4081" stroke-width="1"/><line x1="5" y1="15" x2="35" y2="15" stroke="#FF4081"/><line x1="5" y1="25" x2="35" y2="25" stroke="#FF4081"/><line x1="5" y1="35" x2="35" y2="35" stroke="#FF4081"/><line x1="5" y1="45" x2="35" y2="45" stroke="#FF4081"/><rect x="5" y="5" width="30" height="10" fill="rgba(255, 64, 129, 0.4)"/></svg>
                <span style="font-size: 20px;">=</span>
                <svg width="40" height="60"><rect x="5" y="5" width="30" height="50" fill="none" stroke="#FF4081" stroke-width="1"/><line x1="5" y1="15" x2="35" y2="15" stroke="#FF4081"/><line x1="5" y1="25" x2="35" y2="25" stroke="#FF4081"/><line x1="5" y1="35" x2="35" y2="35" stroke="#FF4081"/><line x1="5" y1="45" x2="35" y2="45" stroke="#FF4081"/><rect x="5" y="5" width="30" height="30" fill="rgba(255, 64, 129, 0.4)"/></svg>
            </div>

            <div class="solution">
                <div class="sol-step">(i) &rarr; <b>(c)</b></div>
                <div class="sol-step">(ii) &rarr; <b>(a)</b></div>
                <div class="sol-step">(iii) &rarr; <b>(b)</b></div>
            </div>

            <div class="question">3. Multiply and reduce to lowest form and convert into a mixed fraction:</div>
            <div class="solution">
                <div class="sol-step"><b>(i)</b> 7 &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">21</span><span class="den">5</span></div> = <span class="ans-highlight">4<div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(ii)</b> 4 &times; <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">3</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(iii)</b> 2 &times; <div class="frac"><span class="num">6</span><span class="den">7</span></div> = <div class="frac"><span class="num">12</span><span class="den">7</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">5</span><span class="den">7</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(iv)</b> 5 &times; <div class="frac"><span class="num">2</span><span class="den">9</span></div> = <div class="frac"><span class="num">10</span><span class="den">9</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">1</span><span class="den">9</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(v)</b> <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; 4 = <div class="frac"><span class="num">8</span><span class="den">3</span></div> = <span class="ans-highlight">2<div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(vi)</b> <div class="frac"><span class="num">5</span><span class="den">2</span></div> &times; 6 = 5 &times; 3 = <span class="ans-highlight">15</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(vii)</b> 11 &times; <div class="frac"><span class="num">4</span><span class="den">7</span></div> = <div class="frac"><span class="num">44</span><span class="den">7</span></div> = <span class="ans-highlight">6<div class="frac"><span class="num">2</span><span class="den">7</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(viii)</b> 20 &times; <div class="frac"><span class="num">4</span><span class="den">5</span></div> = 4 &times; 4 = <span class="ans-highlight">16</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(ix)</b> 13 &times; <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">13</span><span class="den">3</span></div> = <span class="ans-highlight">4<div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(x)</b> 15 &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div> = 3 &times; 3 = <span class="ans-highlight">9</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(xi)</b> 16 &times; <div class="frac"><span class="num">3</span><span class="den">8</span></div> = 2 &times; 3 = <span class="ans-highlight">6</span></div>
                <div class="sol-step" style="margin-top: 15px;"><b>(xii)</b> 6 &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">18</span><span class="den">7</span></div> = <span class="ans-highlight">2<div class="frac"><span class="num">4</span><span class="den">7</span></div></span></div>
            </div>

            <div class="question">4. Shade: </div>
            <div class="match-box">
                <div class="match-item">(i) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of circles in box (a)</div>
                <div class="match-item">(ii) <div class="frac"><span class="num">2</span><span class="den">3</span></div> of triangles in box (b)</div>
                <div class="match-item">(iii) <div class="frac"><span class="num">3</span><span class="den">5</span></div> of squares in box (c)</div>
            </div>
            <div class="svg-row">
                <div style="text-align: center;">(a)<br/><svg width="80" height="100" style="border: 1px solid #FF4081;"><circle cx="20" cy="20" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="40" cy="20" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="60" cy="20" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="20" cy="40" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="40" cy="40" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="60" cy="40" r="8" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><circle cx="20" cy="60" r="8" fill="none" stroke="#FF4081"/><circle cx="40" cy="60" r="8" fill="none" stroke="#FF4081"/><circle cx="60" cy="60" r="8" fill="none" stroke="#FF4081"/><circle cx="20" cy="80" r="8" fill="none" stroke="#FF4081"/><circle cx="40" cy="80" r="8" fill="none" stroke="#FF4081"/><circle cx="60" cy="80" r="8" fill="none" stroke="#FF4081"/></svg></div>
                <div style="text-align: center;">(b)<br/><svg width="80" height="100" style="border: 1px solid #FF4081;"><path d="M20 10 L10 30 L30 30 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M40 10 L30 30 L50 30 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M60 10 L50 30 L70 30 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M20 40 L10 60 L30 60 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M40 40 L30 60 L50 60 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M60 40 L50 60 L70 60 Z" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><path d="M20 70 L10 90 L30 90 Z" fill="none" stroke="#FF4081"/><path d="M40 70 L30 90 L50 90 Z" fill="none" stroke="#FF4081"/><path d="M60 70 L50 90 L70 90 Z" fill="none" stroke="#FF4081"/></svg></div>
                <div style="text-align: center;">(c)<br/><svg width="100" height="100" style="border: 1px solid #FF4081;"><rect x="10" y="10" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="30" y="10" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="50" y="10" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="70" y="10" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="10" y="30" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="30" y="30" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="50" y="30" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="70" y="30" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="10" y="50" width="15" height="15" fill="rgba(255, 64, 129, 0.4)" stroke="#FF4081"/><rect x="30" y="50" width="15" height="15" fill="none" stroke="#FF4081"/><rect x="50" y="50" width="15" height="15" fill="none" stroke="#FF4081"/><rect x="70" y="50" width="15" height="15" fill="none" stroke="#FF4081"/></svg></div>
            </div>

            <div class="question">5. Find: </div>
            <div class="solution">
                <div class="sol-step"><b>(a) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of:</b></div>
                <div class="sol-step">(i) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of 24 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 24</div>
                <div class="sol-step">=> <div class="frac"><span class="num">24</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">12</span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of 46 = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; 46</div>
                <div class="sol-step">=> <div class="frac"><span class="num">46</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">23</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) <div class="frac"><span class="num">2</span><span class="den">3</span></div> of:</b></div>
                <div class="sol-step">(i) <div class="frac"><span class="num">2</span><span class="den">3</span></div> of 18 = <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; 18</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">18</span><span class="den">3</span></div>) = 2 &times; 6</div>
                <div class="sol-step">=> <span class="ans-highlight">12</span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) <div class="frac"><span class="num">2</span><span class="den">3</span></div> of 27 = <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; 27</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">27</span><span class="den">3</span></div>) = 2 &times; 9</div>
                <div class="sol-step">=> <span class="ans-highlight">18</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">3</span><span class="den">4</span></div> of:</b></div>
                <div class="sol-step">(i) <div class="frac"><span class="num">3</span><span class="den">4</span></div> of 16 = <div class="frac"><span class="num">3</span><span class="den">4</span></div> &times; 16</div>
                <div class="sol-step">=> 3 &times; (<div class="frac"><span class="num">16</span><span class="den">4</span></div>) = 3 &times; 4</div>
                <div class="sol-step">=> <span class="ans-highlight">12</span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) <div class="frac"><span class="num">3</span><span class="den">4</span></div> of 36 = <div class="frac"><span class="num">3</span><span class="den">4</span></div> &times; 36</div>
                <div class="sol-step">=> 3 &times; (<div class="frac"><span class="num">36</span><span class="den">4</span></div>) = 3 &times; 9</div>
                <div class="sol-step">=> <span class="ans-highlight">27</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) <div class="frac"><span class="num">4</span><span class="den">5</span></div> of:</b></div>
                <div class="sol-step">(i) <div class="frac"><span class="num">4</span><span class="den">5</span></div> of 20 = <div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; 20</div>
                <div class="sol-step">=> 4 &times; (<div class="frac"><span class="num">20</span><span class="den">5</span></div>) = 4 &times; 4</div>
                <div class="sol-step">=> <span class="ans-highlight">16</span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) <div class="frac"><span class="num">4</span><span class="den">5</span></div> of 35 = <div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; 35</div>
                <div class="sol-step">=> 4 &times; (<div class="frac"><span class="num">35</span><span class="den">5</span></div>) = 4 &times; 7</div>
                <div class="sol-step">=> <span class="ans-highlight">28</span></div>
            </div>

            <div class="question">6. Multiply and express as a mixed fraction:</div>
            <div class="solution">
                <div class="sol-step"><b>(a) 3 &times; 5<div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> 3 &times; (<div class="frac"><span class="num">5 &times; 5 + 1</span><span class="den">5</span></div>)</div>
                <div class="sol-step">=> 3 &times; <div class="frac"><span class="num">26</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">78</span><span class="den">5</span></div> = <span class="ans-highlight">15<div class="frac"><span class="num">3</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) 5 &times; 6<div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> 5 &times; (<div class="frac"><span class="num">6 &times; 4 + 3</span><span class="den">4</span></div>)</div>
                <div class="sol-step">=> 5 &times; <div class="frac"><span class="num">27</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">135</span><span class="den">4</span></div> = <span class="ans-highlight">33<div class="frac"><span class="num">3</span><span class="den">4</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(c) 7 &times; 2<div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> 7 &times; (<div class="frac"><span class="num">2 &times; 4 + 1</span><span class="den">4</span></div>)</div>
                <div class="sol-step">=> 7 &times; <div class="frac"><span class="num">9</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">63</span><span class="den">4</span></div> = <span class="ans-highlight">15<div class="frac"><span class="num">3</span><span class="den">4</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(d) 4 &times; 6<div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> 4 &times; (<div class="frac"><span class="num">6 &times; 3 + 1</span><span class="den">3</span></div>)</div>
                <div class="sol-step">=> 4 &times; <div class="frac"><span class="num">19</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">76</span><span class="den">3</span></div> = <span class="ans-highlight">25<div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(e) 3<div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 6</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">13</span><span class="den">4</span></div> &times; 6</div>
                <div class="sol-step">=> <div class="frac"><span class="num">13 &times; 3</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">39</span><span class="den">2</span></div> = <span class="ans-highlight">19<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(f) 3<div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; 8</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">17</span><span class="den">5</span></div> &times; 8</div>
                <div class="sol-step">=> <div class="frac"><span class="num">136</span><span class="den">5</span></div> = <span class="ans-highlight">27<div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>
            </div>

            <div class="question">7. Find: </div>
            <div class="solution">
                <div class="sol-step"><b>(a) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of:</b></div>
                <div class="sol-step">(i) 2<div class="frac"><span class="num">3</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">11</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">1<div class="frac"><span class="num">3</span><span class="den">8</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) 4<div class="frac"><span class="num">2</span><span class="den">9</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">38</span><span class="den">9</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">2<div class="frac"><span class="num">1</span><span class="den">9</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(b) <div class="frac"><span class="num">5</span><span class="den">8</span></div> of:</b></div>
                <div class="sol-step">(i) 3<div class="frac"><span class="num">5</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">23</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">2<div class="frac"><span class="num">19</span><span class="den">48</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(ii) 9<div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">29</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">6<div class="frac"><span class="num">1</span><span class="den">24</span></div></span></div>
            </div>

            <div class="question">8. Rozy and Tina bought pizza 200 gm. Rozy ate <div class="frac"><span class="num">3</span><span class="den">5</span></div>. Tina ate rest. </div>
            <div class="solution">
                <div class="sol-step">Total weight of pizza = 200 gm</div>
                <div class="sol-step"><b>(i) Fraction eaten by Tina:</b></div>
                <div class="sol-step">Let total pizza be 1</div>
                <div class="sol-step">Tina's fraction = 1 - (Rozy's fraction)</div>
                <div class="sol-step">=> 1 - <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5 - 3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Weight eaten by Tina:</b></div>
                <div class="sol-step">Weight = <div class="frac"><span class="num">2</span><span class="den">5</span></div> of 200 gm</div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; 200</div>
                <div class="sol-step">=> 2 &times; (<div class="frac"><span class="num">200</span><span class="den">5</span></div>)</div>
                <div class="sol-step">=> 2 &times; 40</div>
                <div class="sol-step">=> <span class="ans-highlight">80 gm</span></div>
            </div>

            <div class="question">9. Javaid and Munish went to a tea party of their friend Leena. Mother offered 24 pieces of cake. Javaid ate <div class="frac"><span class="num">2</span><span class="den">6</span></div>, Leena ate <div class="frac"><span class="num">1</span><span class="den">12</span></div>, Munish ate <div class="frac"><span class="num">1</span><span class="den">4</span></div>. Find:</div>
            <div class="solution">
                <div class="sol-step">Total pieces of cake = 24</div>
                <div class="sol-step"><b>(i) Pieces taken by each:</b></div>
                <div class="sol-step">Javaid's share = <div class="frac"><span class="num">2</span><span class="den">6</span></div> of 24</div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">6</span></div> &times; 24 = 2 &times; 4 = <span class="ans-highlight">8 pieces</span></div>
                
                <div class="sol-step" style="margin-top: 10px;">Leena's share = <div class="frac"><span class="num">1</span><span class="den">12</span></div> of 24</div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">12</span></div> &times; 24 = <span class="ans-highlight">2 pieces</span></div>
                
                <div class="sol-step" style="margin-top: 10px;">Munish's share = <div class="frac"><span class="num">1</span><span class="den">4</span></div> of 24</div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 24 = <span class="ans-highlight">6 pieces</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) Fraction of cake remaining:</b></div>
                <div class="sol-step">Total pieces eaten = 8 + 2 + 6 = 16 pieces</div>
                <div class="sol-step">Remaining pieces = 24 - 16 = 8 pieces</div>
                <div class="sol-step">Remaining fraction = <div class="frac"><span class="num">Remaining pieces</span><span class="den">Total pieces</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">8</span><span class="den">24</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>
            </div>
        </div>
        `,
        "ex2-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .box { display: inline-block; width: 30px; height: 30px; border: 2px solid #FF4081; vertical-align: middle; margin: 0 5px; text-align: center; line-height: 26px; }
        </style>
        <div class="container">


            <div class="question">1. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">1</span><span class="den">4</span></div> of:</b></div>
                <div class="sol-step">(a) <div class="frac"><span class="num">1</span><span class="den">4</span></div> of <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">16</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(b) <div class="frac"><span class="num">1</span><span class="den">4</span></div> of <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">20</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(c) <div class="frac"><span class="num">1</span><span class="den">4</span></div> of <div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; <div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">12</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">1</span><span class="den">7</span></div> of:</b></div>
                <div class="sol-step">(a) <div class="frac"><span class="num">2</span><span class="den">9</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">9</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">63</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(b) <div class="frac"><span class="num">6</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">6</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">35</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(c) <div class="frac"><span class="num">3</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">70</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">1</span><span class="den">3</span></div> of:</b></div>
                <div class="sol-step">(a) <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">21</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">7</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(b) <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">9</span></div></span></div>
                <div class="sol-step" style="margin-top: 10px;">(c) <div class="frac"><span class="num">12</span><span class="den">13</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">12</span><span class="den">13</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">12</span><span class="den">39</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">13</span></div></span></div>
            </div>

            <div class="question">2. Multiply and reduce to lowest form (if possible):</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; 2<div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16</span><span class="den">9</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">7</span><span class="den">9</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">2</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">7</span><span class="den">9</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2 &times; 7</span><span class="den">7 &times; 9</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">9</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">3</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">6</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">18</span><span class="den">32</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">9</span><span class="den">16</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">9</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">27</span><span class="den">25</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">1<div class="frac"><span class="num">2</span><span class="den">25</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">1</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">15</span><span class="den">8</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">15</span><span class="den">24</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">8</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) <div class="frac"><span class="num">11</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">10</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">33</span><span class="den">20</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">1<div class="frac"><span class="num">13</span><span class="den">20</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) <div class="frac"><span class="num">14</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">12</span><span class="den">7</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">168</span><span class="den">35</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">24</span><span class="den">5</span></div> = <span class="ans-highlight">4<div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>
            </div>

            <div class="question">3. Multiply the following fractions:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; 5<div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">21</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">42</span><span class="den">20</span></div> = <div class="frac"><span class="num">21</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">2<div class="frac"><span class="num">1</span><span class="den">10</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 6<div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">7</span><span class="den">9</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">32</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">7</span><span class="den">9</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">224</span><span class="den">45</span></div> = <span class="ans-highlight">4<div class="frac"><span class="num">44</span><span class="den">45</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">3</span><span class="den">2</span></div> &times; 5<div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">16</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">48</span><span class="den">6</span></div> = <span class="ans-highlight">8</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">5</span><span class="den">6</span></div> &times; 2<div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">6</span></div> &times; <div class="frac"><span class="num">17</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">85</span><span class="den">42</span></div> = <span class="ans-highlight">2<div class="frac"><span class="num">1</span><span class="den">42</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 3<div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">4</span><span class="den">7</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">17</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">4</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">68</span><span class="den">35</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">33</span><span class="den">35</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 2<div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; 3</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">13</span><span class="den">5</span></div> &times; 3</div>
                <div class="sol-step">=> <div class="frac"><span class="num">39</span><span class="den">5</span></div> = <span class="ans-highlight">7<div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3<div class="frac"><span class="num">4</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">25</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">75</span><span class="den">35</span></div> = <div class="frac"><span class="num">15</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">2<div class="frac"><span class="num">1</span><span class="den">7</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 4<div class="frac"><span class="num">3</span><span class="den">7</span></div> &times; 2<div class="frac"><span class="num">4</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">31</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">14</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">434</span><span class="den">35</span></div> = <div class="frac"><span class="num">62</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">12<div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) 3<div class="frac"><span class="num">1</span><span class="den">5</span></div> &times; 4<div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">23</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">368</span><span class="den">25</span></div> = <span class="ans-highlight">14<div class="frac"><span class="num">18</span><span class="den">25</span></div></span></div>
            </div>

            <div class="question">4. Which is greater:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">7</span></div> of <div class="frac"><span class="num">3</span><span class="den">4</span></div> or <div class="frac"><span class="num">3</span><span class="den">5</span></div> of <div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                <div class="sol-step">Calculation for first case:</div>
                <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">4</span></div> = <div class="frac"><span class="num">6</span><span class="den">28</span></div> = <div class="frac"><span class="num">3</span><span class="den">14</span></div></div>
                <div class="sol-step" style="margin-top: 10px;">Calculation for second case:</div>
                <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">5</span><span class="den">8</span></div> = <div class="frac"><span class="num">15</span><span class="den">40</span></div> = <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                <div class="sol-step" style="margin-top: 10px;">Now compare <div class="frac"><span class="num">3</span><span class="den">14</span></div> and <div class="frac"><span class="num">3</span><span class="den">8</span></div>:</div>
                <div class="sol-step">Since numerators are same, the fraction with smaller denominator is greater.</div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">8</span></div> &gt; <div class="frac"><span class="num">3</span><span class="den">14</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">5</span></div> of <div class="frac"><span class="num">5</span><span class="den">8</span></div> is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">1</span><span class="den">2</span></div> of <div class="frac"><span class="num">6</span><span class="den">7</span></div> or <div class="frac"><span class="num">2</span><span class="den">3</span></div> of <div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                <div class="sol-step">Calculation for first case:</div>
                <div class="sol-step"><div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">6</span><span class="den">7</span></div> = <div class="frac"><span class="num">6</span><span class="den">14</span></div> = <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step" style="margin-top: 10px;">Calculation for second case:</div>
                <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div> = <div class="frac"><span class="num">6</span><span class="den">21</span></div> = <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                <div class="sol-step" style="margin-top: 10px;">Now compare <div class="frac"><span class="num">3</span><span class="den">7</span></div> and <div class="frac"><span class="num">2</span><span class="den">7</span></div>:</div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">7</span></div> &gt; <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">2</span></div> of <div class="frac"><span class="num">6</span><span class="den">7</span></div> is greater.</span></div>
            </div>

            <div class="question">5. Sheena plants 4 saplings, in a row, in her garden. The distance between two adjacent saplings is <div class="frac"><span class="num">3</span><span class="den">4</span></div> m. Find the distance between the first and the last sapling.</div>
            <div class="solution">
                <div class="sol-step">Number of saplings = 4</div>
                <div class="sol-step">Number of gaps between saplings = 4 - 1 = 3</div>
                <div class="sol-step">Distance between adjacent saplings = <div class="frac"><span class="num">3</span><span class="den">4</span></div> m</div>
                <div class="sol-step">Total distance = 3 &times; <div class="frac"><span class="num">3</span><span class="den">4</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">9</span><span class="den">4</span></div> m</div>
                <div class="sol-step">Result: <span class="ans-highlight">2<div class="frac"><span class="num">1</span><span class="den">4</span></div> m</span></div>
            </div>

            <div class="question">6. Aaliya reads a book for 1<div class="frac"><span class="num">3</span><span class="den">4</span></div> hours everyday. She reads the entire book in 6 days. How many hours in all were required by her to read the book?</div>
            <div class="solution">
                <div class="sol-step">Time taken in 1 day = 1<div class="frac"><span class="num">3</span><span class="den">4</span></div> hours = <div class="frac"><span class="num">7</span><span class="den">4</span></div> hours</div>
                <div class="sol-step">Total days taken = 6</div>
                <div class="sol-step">Total hours = 6 &times; <div class="frac"><span class="num">7</span><span class="den">4</span></div></div>
                <div class="sol-step">= <div class="frac"><span class="num">42</span><span class="den">4</span></div> = <div class="frac"><span class="num">21</span><span class="den">2</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">10<div class="frac"><span class="num">1</span><span class="den">2</span></div> hours</span></div>
            </div>

            <div class="question">7. A car runs 16 km using 1 litre of petrol. How much distance will it cover using 2<div class="frac"><span class="num">3</span><span class="den">4</span></div> litres of petrol.</div>
            <div class="solution">
                <div class="sol-step">Distance covered in 1 litre of petrol = 16 km</div>
                <div class="sol-step">Amount of petrol available = 2<div class="frac"><span class="num">3</span><span class="den">4</span></div> litres</div>
                <div class="sol-step">=> <div class="frac"><span class="num">2 &times; 4 + 3</span><span class="den">4</span></div> = <div class="frac"><span class="num">11</span><span class="den">4</span></div> litres</div>
                <div class="sol-step">Total distance = (Distance in 1L) &times; (Total petrol)</div>
                <div class="sol-step">=> 16 &times; <div class="frac"><span class="num">11</span><span class="den">4</span></div></div>
                <div class="sol-step">=> (<div class="frac"><span class="num">16</span><span class="den">4</span></div>) &times; 11</div>
                <div class="sol-step">=> 4 &times; 11</div>
                <div class="sol-step">Result: <span class="ans-highlight">44 km</span></div>
            </div>

            <div class="question">8. (a) (i) Provide the number in the box <div class="box"></div>, such that <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; <div class="box"></div> = <div class="frac"><span class="num">10</span><span class="den">30</span></div>.</div>
            <div class="solution">
                <div class="sol-step">We need a fraction: <div class="frac"><span class="num">2 &times; ?</span><span class="den">3 &times; ?</span></div> = <div class="frac"><span class="num">10</span><span class="den">30</span></div></div>
                <div class="sol-step">Numerator: 2 &times; 5 = 10</div>
                <div class="sol-step">Denominator: 3 &times; 10 = 30</div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">10</span></div></span></div>
            </div>

            <div class="question">(a) (ii) The simplest form of the number obtained in <div class="box"></div> is ___.</div>
            <div class="solution">
                <div class="sol-step">Number obtained = <div class="frac"><span class="num">5</span><span class="den">10</span></div></div>
                <div class="sol-step">Simplest form = <div class="frac"><span class="num">5 &divide; 5</span><span class="den">10 &divide; 5</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>
            </div>

            <div class="question">(b) (i) Provide the number in the box <div class="box"></div>, such that <div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; <div class="box"></div> = <div class="frac"><span class="num">24</span><span class="den">75</span></div>.</div>
            <div class="solution">
                <div class="sol-step">We need a fraction: <div class="frac"><span class="num">3 &times; ?</span><span class="den">5 &times; ?</span></div> = <div class="frac"><span class="num">24</span><span class="den">75</span></div></div>
                <div class="sol-step">Numerator: 3 &times; 8 = 24</div>
                <div class="sol-step">Denominator: 5 &times; 15 = 75</div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">15</span></div></span></div>
            </div>

            <div class="question">(b) (ii) The simplest form of the number obtained in <div class="box"></div> is ___.</div>
            <div class="solution">
                <div class="sol-step">Number obtained = <div class="frac"><span class="num">8</span><span class="den">15</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">15</span></div></span></div>
            </div>

            <div class="question">(c) Fill in the box <div class="frac"><span class="num">3</span><span class="den">7</span></div> &times; <div class="box"></div> = <div class="frac"><span class="num">12</span><span class="den">91</span></div>.</div>
            <div class="solution">
                <div class="sol-step">We need a fraction: <div class="frac"><span class="num">3 &times; ?</span><span class="den">7 &times; ?</span></div> = <div class="frac"><span class="num">12</span><span class="den">91</span></div></div>
                <div class="sol-step">Numerator: 3 &times; 4 = 12</div>
                <div class="sol-step">Denominator: 7 &times; 13 = 91</div>
                <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">13</span></div></span></div>
            </div>
        </div>
        `,
        "ex2-4": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">


            <div class="question">1. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 12 &divide; <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> 12 &times; (Reciprocal of <div class="frac"><span class="num">3</span><span class="den">4</span></div>)</div>
                <div class="sol-step">=> 12 &times; <div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                <div class="sol-step">=> 4 &times; 4 = <span class="ans-highlight">16</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 14 &divide; <div class="frac"><span class="num">5</span><span class="den">6</span></div></b></div>
                <div class="sol-step">=> 14 &times; <div class="frac"><span class="num">6</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">84</span><span class="den">5</span></div> = <span class="ans-highlight">16<div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 8 &divide; <div class="frac"><span class="num">7</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> 8 &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">24</span><span class="den">7</span></div> = <span class="ans-highlight">3<div class="frac"><span class="num">3</span><span class="den">7</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 4 &divide; <div class="frac"><span class="num">8</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> 4 &times; <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">12</span><span class="den">8</span></div> = <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">1<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 3 &divide; 2<div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> 3 &divide; <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                <div class="sol-step">=> 3 &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">1<div class="frac"><span class="num">2</span><span class="den">7</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 5 &divide; 3<div class="frac"><span class="num">4</span><span class="den">7</span></div></b></div>
                <div class="sol-step">=> 5 &divide; <div class="frac"><span class="num">25</span><span class="den">7</span></div></div>
                <div class="sol-step">=> 5 &times; <div class="frac"><span class="num">7</span><span class="den">25</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">5</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">2</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3<div class="frac"><span class="num">1</span><span class="den">2</span></div> &divide; 2<div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &divide; <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">2</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">1</span><span class="den">2</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) <div class="frac"><span class="num">7</span><span class="den">13</span></div> &divide; 6<div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">13</span></div> &divide; <div class="frac"><span class="num">13</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">13</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">13</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">14</span><span class="den">169</span></div></span></div>
            </div>

            <div class="question">2. Find the reciprocal of each of the following fractions. Classify the reciprocals as proper fractions, improper fractions and whole numbers.</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">3</span><span class="den">7</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">3</span></div></span></div>
                <div class="sol-step">Classification: Numerator (7) &gt; Denominator (3), so it is an <span class="ans-highlight">Improper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">5</span></div></span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Improper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">9</span><span class="den">7</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">9</span></div></span></div>
                <div class="sol-step">Classification: Numerator (7) &lt; Denominator (9), so it is a <span class="ans-highlight">Proper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">6</span><span class="den">5</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">6</span></div></span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Proper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">12</span><span class="den">7</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">12</span></div></span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Proper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) <div class="frac"><span class="num">1</span><span class="den">8</span></div></b></div>
                <div class="sol-step">Reciprocal = <div class="frac"><span class="num">8</span><span class="den">1</span></div> = <span class="ans-highlight">8</span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Whole number</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) <div class="frac"><span class="num">1</span><span class="den">11</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight">11</span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Whole number</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                <div class="sol-step">Reciprocal = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Improper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) <div class="frac"><span class="num">2</span><span class="den">3</span></div> &divide; <div class="frac"><span class="num">3</span><span class="den">2</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">9</span></div></div>
                <div class="sol-step">Reciprocal of <div class="frac"><span class="num">4</span><span class="den">9</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">9</span><span class="den">4</span></div></span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Improper fraction</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(x) <div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; 1<div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">5</span><span class="den">4</span></div> = 1</div>
                <div class="sol-step">Reciprocal of 1 = <span class="ans-highlight">1</span></div>
                <div class="sol-step">Classification: <span class="ans-highlight">Whole number</span></div>
            </div>

            <div class="question">3. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">7</span><span class="den">3</span></div> &divide; 2</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">6</span></div></span> = <span class="ans-highlight">1<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">4</span><span class="den">9</span></div> &divide; 5</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">9</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">45</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">6</span><span class="den">13</span></div> &divide; 7</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">6</span><span class="den">13</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">91</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 4<div class="frac"><span class="num">1</span><span class="den">3</span></div> &divide; 3</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">13</span><span class="den">3</span></div> &divide; 3</div>
                <div class="sol-step">=> <div class="frac"><span class="num">13</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">13</span><span class="den">9</span></div></span> = <span class="ans-highlight">1<div class="frac"><span class="num">4</span><span class="den">9</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 3<div class="frac"><span class="num">1</span><span class="den">2</span></div> &divide; 4</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &divide; 4</div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">7</span><span class="den">8</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 4<div class="frac"><span class="num">3</span><span class="den">7</span></div> &divide; 7</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">31</span><span class="den">7</span></div> &divide; 7</div>
                <div class="sol-step">=> <div class="frac"><span class="num">31</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">31</span><span class="den">49</span></div></span></div>
            </div>

            <div class="question">4. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">5</span></div> &divide; <div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">1</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">4</span><span class="den">9</span></div> &divide; <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">9</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">12</span><span class="den">18</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">3</span><span class="den">7</span></div> &divide; <div class="frac"><span class="num">8</span><span class="den">7</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">7</span></div> &times; <div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">21</span><span class="den">56</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">8</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 2<div class="frac"><span class="num">1</span><span class="den">3</span></div> &divide; <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">3</span></div> &times; <div class="frac"><span class="num">5</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">35</span><span class="den">9</span></div> = <span class="ans-highlight">3<div class="frac"><span class="num">8</span><span class="den">9</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 3<div class="frac"><span class="num">1</span><span class="den">2</span></div> &divide; <div class="frac"><span class="num">8</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">21</span><span class="den">16</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">5</span><span class="den">16</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) <div class="frac"><span class="num">2</span><span class="den">5</span></div> &divide; 1<div class="frac"><span class="num">1</span><span class="den">2</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">5</span></div> &divide; <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">15</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3<div class="frac"><span class="num">1</span><span class="den">5</span></div> &divide; 1<div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16</span><span class="den">5</span></div> &divide; <div class="frac"><span class="num">5</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">16</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">48</span><span class="den">25</span></div> = <span class="ans-highlight">1<div class="frac"><span class="num">23</span><span class="den">25</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 2<div class="frac"><span class="num">1</span><span class="den">5</span></div> &divide; 1<div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">11</span><span class="den">5</span></div> &divide; <div class="frac"><span class="num">6</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">11</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">5</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">11</span><span class="den">6</span></div></span> = <span class="ans-highlight">1<div class="frac"><span class="num">5</span><span class="den">6</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) 3<div class="frac"><span class="num">1</span><span class="den">2</span></div> &divide; 1<div class="frac"><span class="num">1</span><span class="den">6</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &divide; <div class="frac"><span class="num">7</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">6</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">42</span><span class="den">14</span></div> = <span class="ans-highlight">3</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(x) <div class="frac"><span class="num">3</span><span class="den">8</span></div> &divide; 2<div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">8</span></div> &divide; <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight"><div class="frac"><span class="num">9</span><span class="den">64</span></div></span></div>
            </div>
        </div>
        `,
        "ex2-5": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
            .frac { display: inline-block; vertical-align: middle; text-align: center; margin: 0 5px; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <div class="question">1. Which is greater?</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 0.5 or 0.05</b></div>
                <div class="sol-step">=> 0.5 can be written as 0.50</div>
                <div class="sol-step">=> 0.05 stays as 0.05</div>
                <div class="sol-step">=> Comparing digits at tenths place: 5 &gt; 0</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.5 is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 0.7 or 0.5</b></div>
                <div class="sol-step">=> Comparing digits at tenths place: 7 &gt; 5</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.7 is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 7 or 0.7</b></div>
                <div class="sol-step">=> 7 can be written as 7.0</div>
                <div class="sol-step">=> Comparing whole number part: 7 &gt; 0</div>
                <div class="sol-step">Result: <span class="ans-highlight">7 is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 1.37 or 1.49</b></div>
                <div class="sol-step">=> Whole numbers are same (1 = 1)</div>
                <div class="sol-step">=> Comparing digits at tenths place: 3 &lt; 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">1.49 is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 2.03 or 2.30</b></div>
                <div class="sol-step">=> Whole numbers are same (2 = 2)</div>
                <div class="sol-step">=> Comparing digits at tenths place: 0 &lt; 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">2.30 is greater.</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 0.8 or 0.88</b></div>
                <div class="sol-step">=> 0.8 can be written as 0.80</div>
                <div class="sol-step">=> 0.88 stays as 0.88</div>
                <div class="sol-step">=> Tenths place digits are same (8 = 8)</div>
                <div class="sol-step">=> Comparing hundredths place: 0 &lt; 8</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.88 is greater.</span></div>
            </div>

            <div class="question">2. Express as rupees using decimals:</div>
            <div class="solution">
                <div class="sol-step">Given: 100 paise = &rupee; 1</div>
                <div class="sol-step">=> 1 paisa = &rupee; <div class="frac"><span class="num">1</span><span class="den">100</span></div></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>(i) 7 paise</b></div>
                <div class="sol-step">=> &rupee; <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                <div class="sol-step">Result: <span class="ans-highlight">&rupee; 0.07</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 7 rupees 7 paise</b></div>
                <div class="sol-step">=> &rupee; 7 + &rupee; <div class="frac"><span class="num">7</span><span class="den">100</span></div></div>
                <div class="sol-step">=> &rupee; 7 + &rupee; 0.07</div>
                <div class="sol-step">Result: <span class="ans-highlight">&rupee; 7.07</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 77 rupees 77 paise</b></div>
                <div class="sol-step">=> &rupee; 77 + &rupee; <div class="frac"><span class="num">77</span><span class="den">100</span></div></div>
                <div class="sol-step">=> &rupee; 77 + &rupee; 0.77</div>
                <div class="sol-step">Result: <span class="ans-highlight">&rupee; 77.77</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 50 paise</b></div>
                <div class="sol-step">=> &rupee; <div class="frac"><span class="num">50</span><span class="den">100</span></div></div>
                <div class="sol-step">=> &rupee; 0.50</div>
                <div class="sol-step">Result: <span class="ans-highlight">&rupee; 0.50</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 235 paise</b></div>
                <div class="sol-step">=> &rupee; <div class="frac"><span class="num">235</span><span class="den">100</span></div></div>
                <div class="sol-step">=> &rupee; 2.35</div>
                <div class="sol-step">Result: <span class="ans-highlight">&rupee; 2.35</span></div>
            </div>

            <div class="question">3. (i) Express 5 cm in metre and kilometre</div>
            <div class="solution">
                <div class="sol-step"><b>Step 1: Expressing 5 cm in Metres (m)</b></div>
                <div class="sol-step">Since 100 cm = 1 m</div>
                <div class="sol-step">=> 5 cm = <div class="frac"><span class="num">5</span><span class="den">100</span></div> m</div>
                <div class="sol-step">=> <span class="ans-highlight">0.05 m</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Step 2: Expressing 5 cm in Kilometres (km)</b></div>
                <div class="sol-step">Since 1000 m = 1 km</div>
                <div class="sol-step">=> 0.05 m = <div class="frac"><span class="num">0.05</span><span class="den">1000</span></div> km</div>
                <div class="sol-step">=> <span class="ans-highlight">0.00005 km</span></div>
            </div>

            <div class="question">(ii) Express 35 mm in cm, m and km.</div>
            <div class="solution">
                <div class="sol-step"><b>Step 1: Expressing 35 mm in Centimetres (cm)</b></div>
                <div class="sol-step">Since 10 mm = 1 cm</div>
                <div class="sol-step">=> 35 mm = <div class="frac"><span class="num">35</span><span class="den">10</span></div> cm</div>
                <div class="sol-step">=> <span class="ans-highlight">3.5 cm</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Step 2: Expressing 35 mm in Metres (m)</b></div>
                <div class="sol-step">Since 100 cm = 1 m</div>
                <div class="sol-step">=> 3.5 cm = <div class="frac"><span class="num">3.5</span><span class="den">100</span></div> m</div>
                <div class="sol-step">=> <span class="ans-highlight">0.035 m</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>Step 3: Expressing 35 mm in Kilometres (km)</b></div>
                <div class="sol-step">Since 1000 m = 1 km</div>
                <div class="sol-step">=> 0.035 m = <div class="frac"><span class="num">0.035</span><span class="den">1000</span></div> km</div>
                <div class="sol-step">=> <span class="ans-highlight">0.000035 km</span></div>
            </div>

            <div class="question">4. Express in kg:</div>
            <div class="solution">
                <div class="sol-step">Given: 1000 g = 1 kg</div>
                <div class="sol-step">=> 1 g = <div class="frac"><span class="num">1</span><span class="den">1000</span></div> kg</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(i) 200 g</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">200</span><span class="den">1000</span></div> kg</div>
                <div class="sol-step">=> <span class="ans-highlight">0.2 kg</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 3470 g</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3470</span><span class="den">1000</span></div> kg</div>
                <div class="sol-step">=> <span class="ans-highlight">3.47 kg</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 4 kg 8 g</b></div>
                <div class="sol-step">=> 4 kg + <div class="frac"><span class="num">8</span><span class="den">1000</span></div> kg</div>
                <div class="sol-step">=> 4 kg + 0.008 kg</div>
                <div class="sol-step">Result: <span class="ans-highlight">4.008 kg</span></div>
            </div>

            <div class="question">5. Write the following decimal numbers in the expanded form:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 20.03</b></div>
                <div class="sol-step">=> 2 &times; 10 (Tens) + 0 &times; 1 (Ones)</div>
                <div class="sol-step">=> + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> (Tenths) + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div> (Hundredths)</div>
                <div class="sol-step">Result: <span class="ans-highlight">2 &times; 10 + 0 &times; 1 + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 2.03</b></div>
                <div class="sol-step">=> 2 &times; 1 (Ones) + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> (Tenths)</div>
                <div class="sol-step">=> + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div> (Hundredths)</div>
                <div class="sol-step">Result: <span class="ans-highlight">2 &times; 1 + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div></span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 200.03</b></div>
                <div class="sol-step">=> 2 &times; 100 (Hundreds) + 0 &times; 10 (Tens) + 0 &times; 1 (Ones)</div>
                <div class="sol-step">=> + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> (Tenths) + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div> (Hundredths)</div>
                <div class="sol-step">Result: <span class="ans-highlight">2 &times; 100 + 0 &times; 10 + 0 &times; 1 + 0 &times; <div class="frac"><span class="num">1</span><span class="den">10</span></div> + 3 &times; <div class="frac"><span class="num">1</span><span class="den">100</span></div></span></div>
            </div>

            <div class="question">6. Write the place value of 2 in the following decimal numbers:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 2.56</b></div>
                <div class="sol-step">2 is at the ones place.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Ones</span> (or 2)</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 21.37</b></div>
                <div class="sol-step">2 is at the tens place.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Tens</span> (or 20)</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 10.25</b></div>
                <div class="sol-step">2 is at the tenths place.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Tenths</span> (or <div class="frac"><span class="num">2</span><span class="den">10</span></div>)</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 9.42</b></div>
                <div class="sol-step">2 is at the hundredths place.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Hundredths</span> (or <div class="frac"><span class="num">2</span><span class="den">100</span></div>)</div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 63.352</b></div>
                <div class="sol-step">2 is at the thousandths place.</div>
                <div class="sol-step">Result: <span class="ans-highlight">Thousandths</span> (or <div class="frac"><span class="num">2</span><span class="den">1000</span></div>)</div>
            </div>

            <div class="question">7. Angad went from place A to place B and from there to place C. A is 7.5 km from B and B is 12.7 km from C. Rigzin went from place A to place D and from there to place C. D is 9.3 km from A and C is 11.8 km from D. Who travelled more and by how much?</div>
            <div style="text-align: center; margin-bottom: 20px;">
                <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 20 80 L 120 30 L 230 110 L 140 130 Z" fill="none" stroke="#FF4081" stroke-width="3" stroke-linejoin="round"/>
                    <circle cx="20" cy="80" r="4" fill="#fff"/>
                    <text x="5" y="80" fill="#fff" font-size="14" font-weight="bold">A</text>
                    <circle cx="120" cy="30" r="4" fill="#fff"/>
                    <text x="115" y="20" fill="#fff" font-size="14" font-weight="bold">B</text>
                    <circle cx="230" cy="110" r="4" fill="#fff"/>
                    <text x="240" y="115" fill="#fff" font-size="14" font-weight="bold">C</text>
                    <circle cx="140" cy="130" r="4" fill="#fff"/>
                    <text x="135" y="145" fill="#fff" font-size="14" font-weight="bold">D</text>
                </svg>
            </div>
            <div class="solution">
                <div class="sol-step"><b>Calculation for Angad:</b></div>
                <div class="sol-step">Angad travelled from A to B = 7.5 km</div>
                <div class="sol-step">Angad travelled from B to C = 12.7 km</div>
                <div class="sol-step">Total distance = 7.5 + 12.7</div>
                <div class="sol-step">=> <span class="ans-highlight">20.2 km</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Calculation for Rigzin:</b></div>
                <div class="sol-step">Rigzin travelled from A to D = 9.3 km</div>
                <div class="sol-step">Rigzin travelled from D to C = 11.8 km</div>
                <div class="sol-step">Total distance = 9.3 + 11.8</div>
                <div class="sol-step">=> <span class="ans-highlight">21.1 km</span></div>
                
                <div class="sol-step" style="margin-top: 15px;"><b>Comparison:</b></div>
                <div class="sol-step">Since 21.1 km &gt; 20.2 km, Rigzin travelled more.</div>
                <div class="sol-step">Difference = 21.1 - 20.2</div>
                <div class="sol-step">=> <span class="ans-highlight">0.9 km</span></div>
                <div class="sol-step">Final Result: <span class="ans-highlight">Rigzin travelled more by 0.9 km.</span></div>
            </div>

            <div class="question">8. Maria brought 5 kg 300 g apples and 3 kg 250 g mangoes. Suzy bought 4 kg 800 g oranges and 4 kg 150 g bananas. Who bought more fruits?</div>
            <div class="solution">
                <div class="sol-step">Fruits bought by Maria = 5 kg 300 g + 3 kg 250 g</div>
                <div class="sol-step">= 5.300 kg + 3.250 kg</div>
                <div class="sol-step">= <span class="ans-highlight">8.550 kg</span></div>
                
                <div class="sol-step" style="margin-top: 15px;">Fruits bought by Suzy = 4 kg 800 g + 4 kg 150 g</div>
                <div class="sol-step">= 4.800 kg + 4.150 kg</div>
                <div class="sol-step">= <span class="ans-highlight">8.950 kg</span></div>
                
                <div class="sol-step" style="margin-top: 15px;">Comparing both amounts: 8.950 kg &gt; 8.550 kg</div>
                <div class="sol-step">Result: <span class="ans-highlight">Suzy bought more fruits.</span></div>
            </div>

            <div class="question">9. How much less is 28 km than 42.6 km?</div>
            <div class="solution">
                <div class="sol-step">We need to find the difference between 42.6 km and 28 km.</div>
                <div class="sol-step">Difference = 42.6 - 28.0</div>
                <div class="sol-step">= <span class="ans-highlight">14.6 km</span></div>
                <div class="sol-step">Result: <span class="ans-highlight">28 km is 14.6 km less than 42.6 km.</span></div>
            </div>
        </div>
        `,
        "ex2-6": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 0.2 &times; 6</b></div>
                <div class="sol-step">=> Multiply as whole numbers: 2 &times; 6 = 12</div>
                <div class="sol-step">=> Put decimal point 1 place from right (as in 0.2)</div>
                <div class="sol-step">Result: <span class="ans-highlight">1.2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 8 &times; 4.6</b></div>
                <div class="sol-step">=> 8 &times; 46 = 368</div>
                <div class="sol-step">=> Put decimal 1 place from right: <span class="ans-highlight">36.8</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 2.71 &times; 5</b></div>
                <div class="sol-step">=> 271 &times; 5 = 1355</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">13.55</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 20.1 &times; 4</b></div>
                <div class="sol-step">=> 201 &times; 4 = 804</div>
                <div class="sol-step">=> Put decimal 1 place from right: <span class="ans-highlight">80.4</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 0.05 &times; 7</b></div>
                <div class="sol-step">=> 5 &times; 7 = 35</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">0.35</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 211.02 &times; 4</b></div>
                <div class="sol-step">=> 21102 &times; 4 = 84408</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">844.08</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 2 &times; 0.86</b></div>
                <div class="sol-step">=> 2 &times; 86 = 172</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">1.72</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 10.35 &times; 4</b></div>
                <div class="sol-step">=> 1035 &times; 4 = 4140</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">41.40</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) 209.07 &times; 12</b></div>
                <div class="sol-step">=> 20907 &times; 12 = 250884</div>
                <div class="sol-step">=> Put decimal 2 places from right: <span class="ans-highlight">2508.84</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(x) 467.3 &times; 4</b></div>
                <div class="sol-step">=> 4673 &times; 4 = 18692</div>
                <div class="sol-step">=> Put decimal 1 place from right: <span class="ans-highlight">1869.2</span></div>
            </div>

            <div class="question">2. (i) Find the area of rectangle whose length is 5.7 cm and breadth is 3 cm.</div>
            <div class="solution">
                <div class="sol-step">Length of the rectangle = 5.7 cm</div>
                <div class="sol-step">Breadth of the rectangle = 3 cm</div>
                <div class="sol-step">Area of rectangle = Length &times; Breadth</div>
                <div class="sol-step">= 5.7 &times; 3</div>
                <div class="sol-step">= <span class="ans-highlight">17.1 cm&sup2;</span></div>
            </div>

            <div class="question">(ii) Find the area of a square whose side is 12.5 cm.</div>
            <div class="solution">
                <div class="sol-step">Side of the square = 12.5 cm</div>
                <div class="sol-step">Area of square = Side &times; Side</div>
                <div class="sol-step">= 12.5 &times; 12.5</div>
                <div class="sol-step">= <span class="ans-highlight">156.25 cm&sup2;</span></div>
            </div>

            <div class="question">3. Find:</div>
            <div class="solution">
                <div class="sol-step">Rule: When multiplying by 10, 100, 1000, shift the decimal point to the right by as many places as there are zeros.</div>

                <div class="sol-step" style="margin-top: 10px;"><b>(i) 1.3 &times; 10</b></div>
                <div class="sol-step">=> Shift 1 place right: <span class="ans-highlight">13</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 36.8 &times; 10</b></div>
                <div class="sol-step">=> Shift 1 place right: <span class="ans-highlight">368</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 153.7 &times; 10</b></div>
                <div class="sol-step">=> Shift 1 place right: <span class="ans-highlight">1537</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 168.07 &times; 10</b></div>
                <div class="sol-step">=> Shift 1 place right: <span class="ans-highlight">1680.7</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 31.1 &times; 100</b></div>
                <div class="sol-step">=> Shift 2 places right (add 0 if needed): <span class="ans-highlight">3110</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 156.1 &times; 100</b></div>
                <div class="sol-step">=> Shift 2 places right: <span class="ans-highlight">15610</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3.62 &times; 100</b></div>
                <div class="sol-step">=> Shift 2 places right: <span class="ans-highlight">362</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 43.07 &times; 100</b></div>
                <div class="sol-step">=> Shift 2 places right: <span class="ans-highlight">4307</span></div>
            </div>

            <div class="question">4. A two wheeler covers a distance of 55.3 km in one litre of petrol. How much distance will it cover in 10 litres of petrol?</div>
            <div class="solution">
                <div class="sol-step">Distance covered in 1 litre of petrol = 55.3 km</div>
                <div class="sol-step">Distance covered in 10 litres of petrol = 55.3 &times; 10</div>
                <div class="sol-step">= <span class="ans-highlight">553 km</span></div>
                <div class="sol-step">Result: <span class="ans-highlight">It will cover 553 km.</span></div>
            </div>

            <div class="question">5. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 2.5 &times; 0.3</b></div>
                <div class="sol-step">=> Multiply whole numbers: 25 &times; 3 = 75</div>
                <div class="sol-step">=> Total decimal places = 1 (in 2.5) + 1 (in 0.3) = 2</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.75</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 0.1 &times; 51.7</b></div>
                <div class="sol-step">=> 1 &times; 517 = 517</div>
                <div class="sol-step">=> Total decimal places = 1 + 1 = 2</div>
                <div class="sol-step">Result: <span class="ans-highlight">5.17</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 0.2 &times; 316.8</b></div>
                <div class="sol-step">=> 2 &times; 3168 = 6336</div>
                <div class="sol-step">=> Total decimal places = 1 + 1 = 2</div>
                <div class="sol-step">Result: <span class="ans-highlight">63.36</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 1.3 &times; 3.1</b></div>
                <div class="sol-step">=> 13 &times; 31 = 403</div>
                <div class="sol-step">=> Total decimal places = 1 + 1 = 2</div>
                <div class="sol-step">Result: <span class="ans-highlight">4.03</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 0.5 &times; 0.05</b></div>
                <div class="sol-step">=> 5 &times; 5 = 25</div>
                <div class="sol-step">=> Total decimal places = 1 + 2 = 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.025</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 11.2 &times; 0.15</b></div>
                <div class="sol-step">=> 112 &times; 15 = 1680</div>
                <div class="sol-step">=> Total decimal places = 1 + 2 = 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">1.680</span> or <span class="ans-highlight">1.68</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 1.07 &times; 0.02</b></div>
                <div class="sol-step">=> 107 &times; 2 = 214</div>
                <div class="sol-step">=> Total decimal places = 2 + 2 = 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">0.0214</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 10.5 &times; 1.05</b></div>
                <div class="sol-step">=> 105 &times; 105 = 11025</div>
                <div class="sol-step">=> Total decimal places = 1 + 2 = 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">11.025</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) 101.01 &times; 0.01</b></div>
                <div class="sol-step">=> 10101 &times; 1 = 10101</div>
                <div class="sol-step">=> Total decimal places = 2 + 2 = 4</div>
                <div class="sol-step">Result: <span class="ans-highlight">1.0101</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(x) 100.01 &times; 1.1</b></div>
                <div class="sol-step">=> 10001 &times; 11 = 110011</div>
                <div class="sol-step">=> Total decimal places = 2 + 1 = 3</div>
                <div class="sol-step">Result: <span class="ans-highlight">110.011</span></div>
            </div>
        </div>
        `,
        "ex2-7": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(255, 64, 129, 0.1); color: #FF4081; padding: 12px; border-radius: 8px; border-left: 6px solid #FF4081; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #FF4081; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #FF4081; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 0.4 &divide; 2</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">10</span></div> &divide; 2</div>
                <div class="sol-step">=> <div class="frac"><span class="num">4</span><span class="den">10</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">10</span></div> = <span class="ans-highlight">0.2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 0.35 &divide; 5</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">35</span><span class="den">100</span></div> &divide; 5</div>
                <div class="sol-step">=> <div class="frac"><span class="num">35</span><span class="den">100</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">7</span><span class="den">100</span></div> = <span class="ans-highlight">0.07</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 2.48 &divide; 4</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">248</span><span class="den">100</span></div> &divide; 4</div>
                <div class="sol-step">=> <div class="frac"><span class="num">248</span><span class="den">100</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">62</span><span class="den">100</span></div> = <span class="ans-highlight">0.62</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 65.4 &divide; 6</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">654</span><span class="den">10</span></div> &divide; 6</div>
                <div class="sol-step">=> <div class="frac"><span class="num">654</span><span class="den">10</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">6</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">109</span><span class="den">10</span></div> = <span class="ans-highlight">10.9</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 651.2 &divide; 4</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">6512</span><span class="den">10</span></div> &divide; 4</div>
                <div class="sol-step">=> <div class="frac"><span class="num">1628</span><span class="den">10</span></div> = <span class="ans-highlight">162.8</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 14.49 &divide; 7</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">1449</span><span class="den">100</span></div> &divide; 7</div>
                <div class="sol-step">=> <div class="frac"><span class="num">207</span><span class="den">100</span></div> = <span class="ans-highlight">2.07</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3.96 &divide; 4</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">396</span><span class="den">100</span></div> &divide; 4</div>
                <div class="sol-step">=> <div class="frac"><span class="num">99</span><span class="den">100</span></div> = <span class="ans-highlight">0.99</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 0.08 &divide; 5</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">8</span><span class="den">100</span></div> &divide; 5</div>
                <div class="sol-step">=> <div class="frac"><span class="num">8</span><span class="den">500</span></div> = <div class="frac"><span class="num">16</span><span class="den">1000</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">0.016</span></div>
            </div>

            <div class="question">2. Find:</div>
            <div class="solution">
                <div class="sol-step">Rule: When dividing by 10, 100, 1000, shift the decimal point to the left by as many places as there are zeros.</div>

                <div class="sol-step" style="margin-top: 10px;"><b>(i) 4.8 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">0.48</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 52.5 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">5.25</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 0.7 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">0.07</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 33.1 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">3.31</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 272.23 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">27.223</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 0.56 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">0.056</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 3.97 &divide; 10</b></div>
                <div class="sol-step">=> Shift 1 place left: <span class="ans-highlight">0.397</span></div>
            </div>

            <div class="question">3. Find:</div>
            <div class="solution">
                <div class="sol-step">Rule: When dividing by 100, shift the decimal point to the left by 2 places.</div>

                <div class="sol-step" style="margin-top: 10px;"><b>(i) 2.7 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">0.027</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 0.3 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">0.003</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 0.78 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">0.0078</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 432.6 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">4.326</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 23.6 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">0.236</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 98.53 &divide; 100</b></div>
                <div class="sol-step">=> Shift 2 places left: <span class="ans-highlight">0.9853</span></div>
            </div>

            <div class="question">4. Find:</div>
            <div class="solution">
                <div class="sol-step">Rule: When dividing by 1000, shift the decimal point to the left by 3 places.</div>

                <div class="sol-step" style="margin-top: 10px;"><b>(i) 7.9 &divide; 1000</b></div>
                <div class="sol-step">=> Shift 3 places left: <span class="ans-highlight">0.0079</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 26.3 &divide; 1000</b></div>
                <div class="sol-step">=> Shift 3 places left: <span class="ans-highlight">0.0263</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 38.53 &divide; 1000</b></div>
                <div class="sol-step">=> Shift 3 places left: <span class="ans-highlight">0.03853</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 128.9 &divide; 1000</b></div>
                <div class="sol-step">=> Shift 3 places left: <span class="ans-highlight">0.1289</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 0.5 &divide; 1000</b></div>
                <div class="sol-step">=> Shift 3 places left: <span class="ans-highlight">0.0005</span></div>
            </div>

            <div class="question">5. Find:</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 7 &divide; 3.5</b></div>
                <div class="sol-step">=> 7 &divide; <div class="frac"><span class="num">35</span><span class="den">10</span></div></div>
                <div class="sol-step">=> 7 &times; <div class="frac"><span class="num">10</span><span class="den">35</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">70</span><span class="den">35</span></div> = <span class="ans-highlight">2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 36 &divide; 0.2</b></div>
                <div class="sol-step">=> 36 &divide; <div class="frac"><span class="num">2</span><span class="den">10</span></div></div>
                <div class="sol-step">=> 36 &times; <div class="frac"><span class="num">10</span><span class="den">2</span></div></div>
                <div class="sol-step">=> 36 &times; 5 = <span class="ans-highlight">180</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 3.25 &divide; 0.5</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">325</span><span class="den">100</span></div> &divide; <div class="frac"><span class="num">5</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">325</span><span class="den">100</span></div> &times; <div class="frac"><span class="num">10</span><span class="den">5</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3250</span><span class="den">500</span></div> = <div class="frac"><span class="num">65</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">6.5</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iv) 30.94 &divide; 0.7</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3094</span><span class="den">100</span></div> &divide; <div class="frac"><span class="num">7</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3094</span><span class="den">100</span></div> &times; <div class="frac"><span class="num">10</span><span class="den">7</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">3094</span><span class="den">70</span></div> = <div class="frac"><span class="num">442</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">44.2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(v) 0.5 &divide; 0.25</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">10</span></div> &divide; <div class="frac"><span class="num">25</span><span class="den">100</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">10</span></div> &times; <div class="frac"><span class="num">100</span><span class="den">25</span></div></div>
                <div class="sol-step">=> <span class="ans-highlight">2</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vi) 7.75 &divide; 0.25</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">775</span><span class="den">100</span></div> &divide; <div class="frac"><span class="num">25</span><span class="den">100</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">775</span><span class="den">25</span></div> = <span class="ans-highlight">31</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(vii) 76.5 &divide; 0.15</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">765</span><span class="den">10</span></div> &divide; <div class="frac"><span class="num">15</span><span class="den">100</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">765</span><span class="den">10</span></div> &times; <div class="frac"><span class="num">100</span><span class="den">15</span></div></div>
                <div class="sol-step">=> 51 &times; 10 = <span class="ans-highlight">510</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(viii) 37.8 &divide; 1.4</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">378</span><span class="den">10</span></div> &divide; <div class="frac"><span class="num">14</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">378</span><span class="den">14</span></div> = <span class="ans-highlight">27</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ix) 2.73 &divide; 1.3</b></div>
                <div class="sol-step">=> <div class="frac"><span class="num">273</span><span class="den">100</span></div> &divide; <div class="frac"><span class="num">13</span><span class="den">10</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">273</span><span class="den">100</span></div> &times; <div class="frac"><span class="num">10</span><span class="den">13</span></div></div>
                <div class="sol-step">=> <div class="frac"><span class="num">21</span><span class="den">10</span></div> = <span class="ans-highlight">2.1</span></div>
            </div>

            <div class="question">6. A vehicle covers a distance of 43.2 km in 2.4 litres of petrol. How much distance will it cover in one litre of petrol?</div>
            <div class="solution">
                <div class="sol-step">Distance covered in 2.4 litres of petrol = 43.2 km</div>
                <div class="sol-step">Distance covered in 1 litre of petrol = 43.2 &divide; 2.4</div>
                <div class="sol-step">=> <span class="ans-highlight">18 km</span></div>
                <div class="sol-step">Result: <span class="ans-highlight">It will cover 18 km in one litre of petrol.</span></div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Which of the following is a proper fraction?", options: ["7/4", "3/2", "2/3", "10/7"], correctAnswer: "C" },
        { id: "m2", question: "What is 1/2 of 10?", options: ["2", "5", "10", "20"], correctAnswer: "B" },
        { id: "m3", question: "The reciprocal of 2 is:", options: ["1/2", "2", "0", "1"], correctAnswer: "A" },
        { id: "m4", question: "The value of 0.1 x 0.1 is:", options: ["0.1", "0.01", "0.001", "1.0"], correctAnswer: "B" },
        { id: "m5", question: "Which is greater, 0.5 or 0.05?", options: ["0.5", "0.05", "Both equal", "None"], correctAnswer: "A" },
        { id: "m6", question: "The reciprocal of an improper fraction is always a:", options: ["Proper fraction", "Improper fraction", "Whole number", "Mixed fraction"], correctAnswer: "A" },
        { id: "m7", question: "What is 2/5 of 25?", options: ["5", "10", "15", "20"], correctAnswer: "B" },
        { id: "m8", question: "The product of 0.03 x 100 is:", options: ["0.3", "3", "30", "300"], correctAnswer: "B" },
        { id: "m9", question: "How many decimal places are in the product of 1.2 x 1.44?", options: ["1", "2", "3", "4"], correctAnswer: "C" },
        { id: "m10", question: "The simplified form of 2/3 x 3/2 is:", options: ["0", "1", "4/9", "9/4"], correctAnswer: "B" }
    ],
    summary: []
};
