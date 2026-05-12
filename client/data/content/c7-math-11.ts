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
            .section-title { color: #00D4FF; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(0, 212, 255, 0.05); border-left: 4px solid #00D4FF; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #00D4FF; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <h2 class="section-title">Chapter 11: Exponents Overview</h2>
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
            .question { background: rgba(0, 212, 255, 0.1); color: #B2EBF2; padding: 12px; border-radius: 8px; border-left: 6px solid #00D4FF; font-weight: bold; margin-top: 25px; margin-bottom: 15px; line-height: 1.6; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #00D4FF; margin-bottom: 25px; line-height: 1.8; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
            .ans-highlight { color: #00D4FF; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Find the value of: <br/>(i) 2⁶ (ii) 9³ (iii) 11²</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 2⁶</b></div>
                <div class="sol-step">=> 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 2</div>
                <div class="sol-step">=> 4 &times; 4 &times; 4</div>
                <div class="sol-step">=> 16 &times; 4 = 64</div>
                <div class="sol-step">Result: <span class="ans-highlight">64</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 9³</b></div>
                <div class="sol-step">=> 9 &times; 9 &times; 9</div>
                <div class="sol-step">=> 81 &times; 9 = 729</div>
                <div class="sol-step">Result: <span class="ans-highlight">729</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(iii) 11²</b></div>
                <div class="sol-step">=> 11 &times; 11 = 121</div>
                <div class="sol-step">Result: <span class="ans-highlight">121</span></div>
            </div>

            <div class="question">4. Identify the greater number, wherever possible, in each of the following: <br/>(i) 4³ or 3⁴</div>
            <div class="solution">
                <div class="sol-step">=> 4³ = 4 &times; 4 &times; 4 = 64</div>
                <div class="sol-step">=> 3⁴ = 3 &times; 3 &times; 3 &times; 3 = 81</div>
                <div class="sol-step">=> Since 81 > 64, therefore 3⁴ > 4³</div>
                <div class="sol-step">Result: <span class="ans-highlight">3⁴ is greater</span></div>
            </div>
        </div>
        `,
        "ex11-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(0, 212, 255, 0.1); color: #B2EBF2; padding: 12px; border-radius: 8px; border-left: 6px solid #00D4FF; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #00D4FF; margin-bottom: 25px; }
            .ans-highlight { color: #00D4FF; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">1. Using laws of exponents, simplify and write the answer in exponential form: <br/>(i) 3² &times; 3⁴ &times; 3⁸ <br/>(ii) 6¹⁵ &divide; 6¹⁰</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 3² &times; 3⁴ &times; 3⁸</b></div>
                <div class="sol-step">=> Using law: a^m &times; a^n = a^(m+n)</div>
                <div class="sol-step">=> 3^(2 + 4 + 8)</div>
                <div class="sol-step">=> 3¹⁴</div>
                <div class="sol-step">Result: <span class="ans-highlight">3¹⁴</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 6¹⁵ &divide; 6¹⁰</b></div>
                <div class="sol-step">=> Using law: a^m &divide; a^n = a^(m-n)</div>
                <div class="sol-step">=> 6^(15 - 10)</div>
                <div class="sol-step">=> 6⁵</div>
                <div class="sol-step">Result: <span class="ans-highlight">6⁵</span></div>
            </div>

            <div class="question">3. Say true or false and justify your answer: <br/>(i) 10 &times; 10¹¹ = 100¹¹</div>
            <div class="solution">
                <div class="sol-step">=> LHS = 10 &times; 10¹¹ = 10^(1 + 11) = 10¹²</div>
                <div class="sol-step">=> RHS = 100¹¹ = (10²)¹¹ = 10^(2 &times; 11) = 10²²</div>
                <div class="sol-step">=> Since 10¹² &ne; 10²², LHS &ne; RHS</div>
                <div class="sol-step">Result: <span class="ans-highlight">False</span></div>
            </div>
        </div>
        `,
        "ex11-3": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .question { background: rgba(0, 212, 255, 0.1); color: #B2EBF2; padding: 12px; border-radius: 8px; border-left: 6px solid #00D4FF; font-weight: bold; margin-top: 25px; margin-bottom: 15px; }
            .solution { background: #1E1E2E; padding: 18px; border-radius: 12px; border-left: 5px solid #00D4FF; margin-bottom: 25px; }
            .ans-highlight { color: #00D4FF; font-weight: bold; }
        </style>
        <div class="container">
            <div class="question">3. Express the following numbers in standard form: <br/>(i) 5,00,00,000 (ii) 70,00,000</div>
            <div class="solution">
                <div class="sol-step"><b>(i) 5,00,00,000</b></div>
                <div class="sol-step">=> We need to place decimal after first non-zero digit.</div>
                <div class="sol-step">=> 5.0000000 &times; 10⁷</div>
                <div class="sol-step">Result: <span class="ans-highlight">5 &times; 10⁷</span></div>

                <div class="sol-step" style="margin-top: 15px;"><b>(ii) 70,00,000</b></div>
                <div class="sol-step">=> 7.0 &times; 10⁶</div>
                <div class="sol-step">Result: <span class="ans-highlight">7 &times; 10⁶</span></div>
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
