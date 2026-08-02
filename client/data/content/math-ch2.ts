import { ChapterContent } from "../types";

export const mathCh2: ChapterContent = {
  id: "ch2",
  number: 2,
  title: "Polynomials",
  isHtmlView: true,
  introduction:
    "A polynomial is an algebraic expression consisting of variables and coefficients with non-negative integer exponents. In this chapter, we study geometrical meanings of zeroes of a polynomial and the relationship between zeroes and coefficients of a quadratic polynomial.",
  definitions: [
    { term: "Degree of Polynomial", description: "The highest power of the variable x in a polynomial p(x)." },
    { term: "Zero of a Polynomial", description: "A real number k is called a zero of p(x) if p(k) = 0." },
    { term: "Quadratic Polynomial", description: "A polynomial of degree 2, generally expressed as ax² + bx + c (a ≠ 0)." }
  ],
  keyPoints: [
    "Geometrical Meaning: The zeroes of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects the x-axis.",
    "Relationship between zeroes and coefficients of ax² + bx + c:",
    "Sum of zeroes (α + β) = -b / a = - (coefficient of x) / (coefficient of x²)",
    "Product of zeroes (α × β) = c / a = (constant term) / (coefficient of x²)",
    "Forming a quadratic polynomial: k [x² - (α + β)x + αβ]"
  ],
  formulas: [
    { name: "Sum of Zeroes (α + β)", formula: "\alpha + \beta = -\frac{b}{a}" },
    { name: "Product of Zeroes (α × β)", formula: "\alpha \beta = \frac{c}{a}" },
    { name: "Polynomial Formation", formula: "p(x) = k [ x^2 - (\alpha + \beta)x + \alpha \beta ]" }
  ],
  crux: [],
  exercises: [
    { id: "ex2-1", name: "Exercise 2.1", questions: [] },
    { id: "ex2-2", name: "Exercise 2.2", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #66BB6A; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(102, 187, 106, 0.05); border-left: 4px solid #66BB6A; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #66BB6A; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Polynomials</div>
            <p class="content-text">Understand how to determine the number of zeroes from graphs of y = p(x) and verify the algebraic relationships between zeroes and coefficients of quadratic polynomials.</p>
            <div class="point-box">
                <div class="point-item">Graphical Zeroes: The number of zeroes equals the number of times graph y = p(x) intersects/touches the x-axis.</div>
                <div class="point-item">Sum of Zeroes: α + β = -b / a</div>
                <div class="point-item">Product of Zeroes: α × β = c / a</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex2-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #A5D6A7; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #66BB6A; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #A5D6A7; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
            .svg-container { text-align: center; margin: 15px auto; background: #1a1a2e; padding: 15px; border-radius: 10px; border: 1px solid #66BB6A; overflow-x: auto; }
            .svg-container svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. The graphs of y = p(x) are given below for some polynomials p(x). Find the number of zeroes of p(x) in each case:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#66BB6A;">(i) Graph parallel to x-axis</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <!-- Axes -->
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <text x="185" y="65" fill="#fff" font-size="11">X</text>
                            <text x="100" y="8" fill="#fff" font-size="11" text-anchor="middle">Y</text>
                            <!-- Graph line parallel to X axis -->
                            <line x1="30" y1="30" x2="170" y2="30" stroke="#66BB6A" stroke-width="2.5"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The graph line is parallel to the x-axis and does not intersect/touch the x-axis at all.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 0</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(ii) Graph intersecting x-axis at 1 point</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <!-- Curve cutting X-axis once -->
                            <path d="M 40,105 C 70,105 80,15 150,15" fill="none" stroke="#66BB6A" stroke-width="2.5"/>
                            <circle cx="125" cy="60" r="4" fill="#FF5252"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The graph intersects the x-axis at exactly 1 point.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 1</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iii) Graph intersecting x-axis at 3 points</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <!-- Cubic curve cutting X axis 3 times -->
                            <path d="M 35,100 Q 55,10 75,60 T 115,60 T 165,10" fill="none" stroke="#66BB6A" stroke-width="2.5"/>
                            <circle cx="48" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="75" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="148" cy="60" r="4" fill="#FF5252"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The graph intersects the x-axis at 3 distinct points.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 3</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iv) Parabola intersecting x-axis at 2 points</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <!-- U-shaped parabola -->
                            <path d="M 50,20 Q 100,105 150,20" fill="none" stroke="#66BB6A" stroke-width="2.5"/>
                            <circle cx="68" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="132" cy="60" r="4" fill="#FF5252"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The parabolic curve intersects the x-axis at 2 points.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 2</span></div>

                    <!-- Q1 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(v) Graph intersecting x-axis at 4 points</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <path d="M 30,15 Q 50,105 70,60 T 110,60 T 150,60 T 170,105" fill="none" stroke="#66BB6A" stroke-width="2.5"/>
                            <circle cx="42" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="70" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="130" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="158" cy="60" r="4" fill="#FF5252"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The graph intersects the x-axis at 4 points.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 4</span></div>

                    <!-- Q1 (vi) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(vi) Graph touching x-axis at 3 points</b></div>
                    <div class="svg-container">
                        <svg width="200" height="120" viewBox="0 0 200 120">
                            <line x1="20" y1="60" x2="180" y2="60" stroke="#fff" stroke-width="1.5"/>
                            <line x1="100" y1="10" x2="100" y2="110" stroke="#fff" stroke-width="1.5"/>
                            <path d="M 40,15 Q 65,60 90,20 Q 115,60 140,20 Q 155,60 170,100" fill="none" stroke="#66BB6A" stroke-width="2.5"/>
                            <circle cx="65" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="115" cy="60" r="4" fill="#FF5252"/>
                            <circle cx="155" cy="60" r="4" fill="#FF5252"/>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">The graph touches/intersects the x-axis at 3 points.</div>
                    <div class="sol-step"><span class="ans-highlight">Number of zeroes = 3</span></div>
                </div>
            </div>
        </div>
    `,
    "ex2-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #66BB6A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #66BB6A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #A5D6A7; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #66BB6A; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #A5D6A7; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#66BB6A;">(i) x&sup2; - 2x - 8</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Splitting the middle term:</div>
                    <div class="sol-step">x&sup2; - 4x + 2x - 8 = 0</div>
                    <div class="sol-step">x(x - 4) + 2(x - 4) = 0</div>
                    <div class="sol-step">(x - 4)(x + 2) = 0</div>
                    <div class="sol-step">x = 4 &nbsp;or&nbsp; x = -2</div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = 4, &beta; = -2)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 1, b = -2, c = -8</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = 4 + (-2) = 2 = <div class="frac"><span class="num">-(-2)</span><span class="den">1</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = 4 &times; (-2) = -8 = <div class="frac"><span class="num">-8</span><span class="den">1</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(ii) 4s&sup2; - 4s + 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4s&sup2; - 2s - 2s + 1 = 0</div>
                    <div class="sol-step">2s(2s - 1) - 1(2s - 1) = 0</div>
                    <div class="sol-step">(2s - 1)(2s - 1) = 0</div>
                    <div class="sol-step">s = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &nbsp;or&nbsp; s = <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = <div class="frac"><span class="num">1</span><span class="den">2</span></div>, &beta; = <div class="frac"><span class="num">1</span><span class="den">2</span></div>)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 4, b = -4, c = 1</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = <div class="frac"><span class="num">1</span><span class="den">2</span></div> + <div class="frac"><span class="num">1</span><span class="den">2</span></div> = 1 = <div class="frac"><span class="num">-(-4)</span><span class="den">4</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = <div class="frac"><span class="num">1</span><span class="den">2</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">1</span><span class="den">4</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>

                    <!-- Q1 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iii) 6x&sup2; - 3 - 7x</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Rearranging in standard form: 6x&sup2; - 7x - 3 = 0</div>
                    <div class="sol-step">6x&sup2; - 9x + 2x - 3 = 0</div>
                    <div class="sol-step">3x(2x - 3) + 1(2x - 3) = 0</div>
                    <div class="sol-step">(2x - 3)(3x + 1) = 0</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">3</span><span class="den">2</span></div> &nbsp;or&nbsp; x = -<div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = <div class="frac"><span class="num">3</span><span class="den">2</span></div>, &beta; = -<div class="frac"><span class="num">1</span><span class="den">3</span></div>)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 6, b = -7, c = -3</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = <div class="frac"><span class="num">3</span><span class="den">2</span></div> - <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">7</span><span class="den">6</span></div> = <div class="frac"><span class="num">-(-7)</span><span class="den">6</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = <div class="frac"><span class="num">3</span><span class="den">2</span></div> &times; (-<div class="frac"><span class="num">1</span><span class="den">3</span></div>) = -<div class="frac"><span class="num">1</span><span class="den">2</span></div> = <div class="frac"><span class="num">-3</span><span class="den">6</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>

                    <!-- Q1 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iv) 4u&sup2; + 8u</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">4u(u + 2) = 0</div>
                    <div class="sol-step">u = 0 &nbsp;or&nbsp; u = -2</div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = 0, &beta; = -2)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 4, b = 8, c = 0</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = 0 + (-2) = -2 = <div class="frac"><span class="num">-8</span><span class="den">4</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = 0 &times; (-2) = 0 = <div class="frac"><span class="num">0</span><span class="den">4</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>

                    <!-- Q1 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(v) t&sup2; - 15</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">t&sup2; - (&radic;15)&sup2; = 0</div>
                    <div class="sol-step">(t - &radic;15)(t + &radic;15) = 0</div>
                    <div class="sol-step">t = &radic;15 &nbsp;or&nbsp; t = -&radic;15</div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = &radic;15, &beta; = -&radic;15)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 1, b = 0, c = -15</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = &radic;15 + (-&radic;15) = 0 = <div class="frac"><span class="num">0</span><span class="den">1</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = &radic;15 &times; (-&radic;15) = -15 = <div class="frac"><span class="num">-15</span><span class="den">1</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>

                    <!-- Q1 (vi) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(vi) 3x&sup2; - x - 4</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">3x&sup2; - 4x + 3x - 4 = 0</div>
                    <div class="sol-step">x(3x - 4) + 1(3x - 4) = 0</div>
                    <div class="sol-step">(3x - 4)(x + 1) = 0</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">4</span><span class="den">3</span></div> &nbsp;or&nbsp; x = -1</div>
                    <div class="sol-step"><span class="ans-highlight">Zeroes (&alpha; = <div class="frac"><span class="num">4</span><span class="den">3</span></div>, &beta; = -1)</span></div>
                    <div class="sol-step"><b>Verification:</b></div>
                    <div class="sol-step">a = 3, b = -1, c = -4</div>
                    <div class="sol-step">• Sum of zeroes &alpha; + &beta; = <div class="frac"><span class="num">4</span><span class="den">3</span></div> - 1 = <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">-(-1)</span><span class="den">3</span></div> = <div class="frac"><span class="num">-b</span><span class="den">a</span></div></div>
                    <div class="sol-step">• Product of zeroes &alpha; &times; &beta; = <div class="frac"><span class="num">4</span><span class="den">3</span></div> &times; (-1) = -<div class="frac"><span class="num">4</span><span class="den">3</span></div> = <div class="frac"><span class="num">c</span><span class="den">a</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">Relationship verified.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#66BB6A;">(i) <div class="frac"><span class="num">1</span><span class="den">4</span></div>, -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">Product of zeroes (P) = -1</div>
                    <div class="sol-step">Formula: p(x) = x&sup2; - Sx + P</div>
                    <div class="sol-step">p(x) = x&sup2; - <div class="frac"><span class="num">1</span><span class="den">4</span></div>x - 1</div>
                    <div class="sol-step">Multiplying by 4 to clear denominator:</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = 4x&sup2; - x - 4</span></div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(ii) &radic;2, <div class="frac"><span class="num">1</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = &radic;2</div>
                    <div class="sol-step">Product of zeroes (P) = <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step">p(x) = x&sup2; - &radic;2x + <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step">Multiplying by 3:</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = 3x&sup2; - 3&radic;2x + 1</span></div>

                    <!-- Q2 (iii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iii) 0, &radic;5</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = 0</div>
                    <div class="sol-step">Product of zeroes (P) = &radic;5</div>
                    <div class="sol-step">p(x) = x&sup2; - 0x + &radic;5</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = x&sup2; + &radic;5</span></div>

                    <!-- Q2 (iv) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(iv) 1, 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = 1</div>
                    <div class="sol-step">Product of zeroes (P) = 1</div>
                    <div class="sol-step">p(x) = x&sup2; - 1x + 1</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = x&sup2; - x + 1</span></div>

                    <!-- Q2 (v) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(v) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = -<div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">Product of zeroes (P) = <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">p(x) = x&sup2; - (-<div class="frac"><span class="num">1</span><span class="den">4</span></div>)x + <div class="frac"><span class="num">1</span><span class="den">4</span></div> = x&sup2; + <div class="frac"><span class="num">1</span><span class="den">4</span></div>x + <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">Multiplying by 4:</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = 4x&sup2; + x + 1</span></div>

                    <!-- Q2 (vi) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#66BB6A;">(vi) 4, 1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Sum of zeroes (S) = 4</div>
                    <div class="sol-step">Product of zeroes (P) = 1</div>
                    <div class="sol-step">p(x) = x&sup2; - 4x + 1</div>
                    <div class="sol-step"><span class="ans-highlight">Quadratic Polynomial = x&sup2; - 4x + 1</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m2-mcq-1", question: "If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:", options: ["10", "-10", "-7", "-2"], correctAnswer: "b", explanation: "Substitute x = 2: 2² + 3(2) + k = 0 ➔ 4 + 6 + k = 0 ➔ k = -10." },
    { id: "c10m2-mcq-2", question: "A quadratic polynomial whose zeroes are -3 and 4 is:", options: ["x² - x + 12", "x² + x + 12", "x² - x - 12", "x² + x - 12"], correctAnswer: "c", explanation: "Sum = -3 + 4 = 1, Product = -3 × 4 = -12. Polynomial = x² - (1)x + (-12) = x² - x - 12." },
    { id: "c10m2-mcq-3", question: "If the zeroes of the quadratic polynomial ax² + bx + c (c ≠ 0) are equal, then:", options: ["c and a have opposite signs", "c and b have opposite signs", "c and a have the same sign", "c and b have the same sign"], correctAnswer: "c", explanation: "Equal zeroes mean discriminant D = b² - 4ac = 0 ➔ b² = 4ac ➔ ac > 0, so a and c must have the same sign." },
    { id: "c10m2-mcq-4", question: "The number of polynomials having zeroes as -2 and 5 is:", options: ["1", "2", "3", "More than 3"], correctAnswer: "d", explanation: "Multiplying k[x² - 3x - 10] by any non-zero constant k gives infinitely many polynomials (more than 3)." },
    { id: "c10m2-mcq-5", question: "The zeroes of the quadratic polynomial x² + 99x + 127 are:", options: ["Both positive", "Both negative", "One positive and one negative", "Equal"], correctAnswer: "b", explanation: "Since a, b, c are all positive, sum α + β = -99 < 0 and product αβ = 127 > 0, so both zeroes are negative." },
    { id: "c10m2-mcq-6", question: "If α and β are the zeroes of x² - 5x + 6, then α + β - αβ is equal to:", options: ["-1", "1", "11", "-11"], correctAnswer: "a", explanation: "α + β = 5, αβ = 6. Value = 5 - 6 = -1." },
    { id: "c10m2-mcq-7", question: "The maximum number of zeroes a cubic polynomial can have is:", options: ["1", "2", "3", "4"], correctAnswer: "c", explanation: "A polynomial of degree n can have at most n zeroes. Degree of cubic = 3." },
    { id: "c10m2-mcq-8", question: "If one zero of the polynomial p(x) = (k - 1)x² + kx + 1 is -3, then k is:", options: ["4/3", "-4/3", "2/3", "-2/3"], correctAnswer: "a", explanation: "p(-3) = (k - 1)(-3)² + k(-3) + 1 = 9(k - 1) - 3k + 1 = 6k - 8 = 0 ➔ k = 8/6 = 4/3." },
    { id: "c10m2-mcq-9", question: "Geometrically, the zeroes of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects:", options: ["X-axis", "Y-axis", "Origin", "Line y = x"], correctAnswer: "a", explanation: "Zeroes of p(x) correspond to points where y = 0, which is the X-axis." },
    { id: "c10m1-mcq-10", question: "If α, β are zeroes of p(x) = 2x² - 8x + 6, then (1/α + 1/β) is:", options: ["4/3", "3/4", "1/3", "3"], correctAnswer: "a", explanation: "α + β = 8/2 = 4, αβ = 6/2 = 3. 1/α + 1/β = (α + β)/αβ = 4/3." }
  ]
};
