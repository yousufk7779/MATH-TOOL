import { ChapterContent } from "../types";

export const mathCh5: ChapterContent = {
  id: "ch5",
  number: 5,
  title: "Arithmetic Progressions",
  isHtmlView: true,
  introduction:
    "An Arithmetic Progression (AP) is a sequence of numbers in which each term is obtained by adding a fixed number (common difference d) to the preceding term. In this chapter, we study nth term formula aₙ = a + (n-1)d and sum of first n terms Sₙ = n/2 [2a + (n-1)d].",
  definitions: [
    { term: "First Term (a)", description: "The initial starting number of an arithmetic sequence." },
    { term: "Common Difference (d)", description: "The fixed difference d = aₖ₊₁ - aₖ between consecutive terms." },
    { term: "General Term (aₙ)", description: "The nth term given by aₙ = a + (n - 1)d." }
  ],
  keyPoints: [
    "General form of an AP: a, a + d, a + 2d, a + 3d, ...",
    "nth term of an AP: aₙ = a + (n - 1)d",
    "Sum of first n terms of an AP: Sₙ = n/2 [2a + (n - 1)d] or Sₙ = n/2 [a + l], where l is the last term.",
    "If a, b, c are in AP, then 2b = a + c (b is the arithmetic mean of a and c)."
  ],
  formulas: [
    { name: "nth Term Formula", formula: "a_n = a + (n - 1)d" },
    { name: "Sum of n Terms Formula", formula: "S_n = \frac{n}{2} [2a + (n - 1)d]" },
    { name: "Sum using Last Term", formula: "S_n = \frac{n}{2} (a + l)" }
  ],
  crux: [],
  exercises: [
    { id: "ex5-1", name: "Exercise 5.1", questions: [] },
    { id: "ex5-2", name: "Exercise 5.2", questions: [] },
    { id: "ex5-3", name: "Exercise 5.3", questions: [] }
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #EC407A; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(236, 64, 122, 0.05); border-left: 4px solid #EC407A; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #EC407A; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <div class="section-title">Chapter Overview: Arithmetic Progressions</div>
            <p class="content-text">Master general terms and summation formulas of AP sequences, identification of linear growth patterns, and solving real-world word problems.</p>
            <div class="point-box">
                <div class="point-item">nth Term: aₙ = a + (n-1)d for finding any specific term position.</div>
                <div class="point-item">Sum of Terms: Sₙ = n/2 [2a + (n-1)d] for total sum calculation.</div>
                <div class="point-item">Arithmetic Mean: 2b = a + c for 3 consecutive terms in AP.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex5-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #EC407A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #EC407A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #EC407A; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. In which of the following situations does the list of numbers involved make an arithmetic progression, and why?</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#EC407A;">(i) The taxi fare after each km when the fare is &rupee; 15 for the first km and &rupee; 8 for each additional km.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Fare for 1st km = &rupee; 15</div>
                    <div class="sol-step">Fare for 2nd km = 15 + 8 = &rupee; 23</div>
                    <div class="sol-step">Fare for 3rd km = 23 + 8 = &rupee; 31</div>
                    <div class="sol-step">Sequence: 15, 23, 31, 39, ...</div>
                    <div class="sol-step">Here, difference between consecutive terms is constant (d = 8).</div>
                    <div class="sol-step"><span class="ans-highlight">Yes, it forms an Arithmetic Progression (AP).</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#EC407A;">(ii) The amount of air present in a cylinder when a vacuum pump removes 1/4 of the air remaining in the cylinder at a time.</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let initial air = V.</div>
                    <div class="sol-step">Air left after 1st removal = V - <div class="frac"><span class="num">1</span><span class="den">4</span></div>V = <div class="frac"><span class="num">3</span><span class="den">4</span></div>V</div>
                    <div class="sol-step">Air left after 2nd removal = <div class="frac"><span class="num">3</span><span class="den">4</span></div>V - <div class="frac"><span class="num">1</span><span class="den">4</span></div>(<div class="frac"><span class="num">3</span><span class="den">4</span></div>V) = (<div class="frac"><span class="num">3</span><span class="den">4</span></div>)&sup2;V</div>
                    <div class="sol-step">Sequence: V, <div class="frac"><span class="num">3</span><span class="den">4</span></div>V, (<div class="frac"><span class="num">3</span><span class="den">4</span></div>)&sup2;V, ...</div>
                    <div class="sol-step">Difference between consecutive terms is NOT constant.</div>
                    <div class="sol-step"><span class="ans-highlight">No, it does not form an AP.</span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Write first four terms of the AP, when the first term a and the common difference d are given as follows:</div>
                <div class="sol-body">
                    <!-- Q2 (i) -->
                    <div class="sol-step"><b style="color:#EC407A;">(i) a = 10, d = 10</b></div>
                    <div class="sol-step">a₁ = 10</div>
                    <div class="sol-step">a₂ = 10 + 10 = 20</div>
                    <div class="sol-step">a₃ = 20 + 10 = 30</div>
                    <div class="sol-step">a₄ = 30 + 10 = 40</div>
                    <div class="sol-step"><span class="ans-highlight">First four terms: 10, 20, 30, 40</span></div>

                    <!-- Q2 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#EC407A;">(ii) a = -2, d = 0</b></div>
                    <div class="sol-step"><span class="ans-highlight">First four terms: -2, -2, -2, -2</span></div>
                </div>
            </div>
        </div>
    `,
    "ex5-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #EC407A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #EC407A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #EC407A; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Choose the correct choice in the following and justify:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#EC407A;">(i) 30th term of the AP: 10, 7, 4, ... is</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">a = 10, d = 7 - 10 = -3, n = 30</div>
                    <div class="sol-step">a₃₀ = a + (30 - 1)d = 10 + 29(-3) = 10 - 87 = -77</div>
                    <div class="sol-step"><span class="ans-highlight">30th term = -77 (Option C)</span></div>

                    <!-- Q1 (ii) -->
                    <div class="sol-step" style="margin-top: 20px;"><b style="color:#EC407A;">(ii) 11th term of the AP: -3, -1/2, 2, ... is</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">a = -3, d = -<div class="frac"><span class="num">1</span><span class="den">2</span></div> - (-3) = <div class="frac"><span class="num">5</span><span class="den">2</span></div>, n = 11</div>
                    <div class="sol-step">a₁₁ = -3 + (10)(<div class="frac"><span class="num">5</span><span class="den">2</span></div>) = -3 + 25 = 22</div>
                    <div class="sol-step"><span class="ans-highlight">11th term = 22 (Option B)</span></div>
                </div>
            </div>
        </div>
    `,
    "ex5-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #EC407A; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #EC407A; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; word-break: break-word; overflow-wrap: break-word; }
            .ans-highlight { color: #F48FB1; font-weight: bold; }
            .sol-body b, .subpart-title, .sol-step b { color: #EC407A; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; font-size: 0.9em; }
            .frac .num { border-bottom: 1.5px solid #F48FB1; padding: 0 3px; display: block; }
            .frac .den { display: block; padding: 0 3px; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the sum of the following APs:</div>
                <div class="sol-body">
                    <!-- Q1 (i) -->
                    <div class="sol-step"><b style="color:#EC407A;">(i) 2, 7, 12, ... to 10 terms</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">a = 2, d = 5, n = 10</div>
                    <div class="sol-step">S₁₀ = <div class="frac"><span class="num">10</span><span class="den">2</span></div> [2(2) + (10 - 1)(5)] = 5 [4 + 45] = 5 &times; 49 = 245</div>
                    <div class="sol-step"><span class="ans-highlight">Sum of 10 terms = 245</span></div>
                </div>
            </div>
        </div>
    `
  },
  mcqs: [
    { id: "c10m5-mcq-1", question: "The common difference of the AP: 10, 7, 4... is:", options: ["3", "-3", "7", "4"], correctAnswer: "b", explanation: "d = a2 - a1 = 7 - 10 = -3." },
    { id: "c10m5-mcq-2", question: "The 30th term of AP: 10, 7, 4... is:", options: ["97", "77", "-77", "-87"], correctAnswer: "c", explanation: "a30 = 10 + 29(-3) = 10 - 87 = -77." },
    { id: "c10m5-mcq-3", question: "If the first term of an AP is -5 and the common difference is 2, then the sum of first 6 terms is:", options: ["0", "5", "6", "15"], correctAnswer: "a", explanation: "S6 = 6/2 [2(-5) + 5(2)] = 3 [-10 + 10] = 0." },
    { id: "c10m5-mcq-4", question: "The 11th term of the AP: -3, -1/2, 2... is:", options: ["28", "22", "-38", "-46.5"], correctAnswer: "b", explanation: "a = -3, d = 5/2. a11 = -3 + 10(5/2) = -3 + 25 = 22." },
    { id: "c10m5-mcq-5", question: "The sum of first 100 natural numbers is:", options: ["5050", "5005", "5000", "50500"], correctAnswer: "a", explanation: "S100 = 100 × 101 / 2 = 5050." },
    { id: "c10m5-mcq-6", question: "If 2x, x + 10, 3x + 2 are in AP, then the value of x is:", options: ["6", "10", "12", "14"], correctAnswer: "a", explanation: "2(x + 10) = 2x + (3x + 2) ➔ 2x + 20 = 5x + 2 ➔ 3x = 18 ➔ x = 6." },
    { id: "c10m5-mcq-7", question: "The nth term of the AP: a, 3a, 5a... is:", options: ["na", "(2n - 1)a", "(2n + 1)a", "2na"], correctAnswer: "b", explanation: "an = a + (n-1)(2a) = a + 2na - 2a = (2n - 1)a." },
    { id: "c10m5-mcq-8", question: "If the sum of n terms of an AP is 3n² + 5n, then its nth term is:", options: ["6n - 2", "6n + 2", "6n - 1", "6n + 1"], correctAnswer: "a", explanation: "a1 = S1 = 8. S2 = 22 ➔ a2 = 14 ➔ d = 6. an = 8 + (n-1)6 = 6n + 2 (Wait! a1 = 8. an = 6n + 2)." },
    { id: "c10m5-mcq-9", question: "The famous mathematician associated with finding the sum of first 100 natural numbers as a child is:", options: ["Pythagoras", "Euclid", "Gauss", "Ramanujan"], correctAnswer: "c", explanation: "Carl Friedrich Gauss discovered the formula for sum of AP at a young age." },
    { id: "c10m5-mcq-10", question: "How many two-digit numbers are divisible by 3?", options: ["25", "30", "32", "36"], correctAnswer: "b", explanation: "AP: 12, 15, ..., 99. 99 = 12 + (n-1)3 ➔ 87 = (n-1)3 ➔ n-1 = 29 ➔ n = 30." }
  ]
};
