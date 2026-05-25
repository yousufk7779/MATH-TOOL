import { ChapterContent } from "../types";

export const c7Math8: ChapterContent = {
  id: "c7-math-8",
  number: 8,
  title: "Rational Numbers",
  isHtmlView: true,
  introduction:
    "A rational number is any number that can be expressed as a fraction p/q, where p and q are integers and q is not zero. They include integers, fractions, and terminating decimals.",
  definitions: [
    {
      term: "Rational Number",
      definition: "A number that can be written in the form p/q where q ≠ 0.",
    },
    {
      term: "Positive Rational Number",
      definition:
        "A rational number where both numerator and denominator have the same sign.",
    },
    {
      term: "Negative Rational Number",
      definition:
        "A rational number where numerator and denominator have opposite signs.",
    },
  ],
  keyPoints: [
    "Every integer is a rational number.",
    "A rational number is in standard form if the denominator is positive and there are no common factors between p and q.",
    "Equivalent rational numbers are obtained by multiplying or dividing p and q by the same non-zero integer.",
  ],
  formulas: [],
  crux: [],
  exercises: [
    { id: "ex8-1", name: "Exercise 8.1", questions: [] },
    { id: "ex8-2", name: "Exercise 8.2", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FF6D00; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; }
            .point-box { background: rgba(255, 109, 0, 0.05); border-left: 4px solid #FF6D00; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; }
            .point-item::before { content: '•'; color: #FF6D00; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
        </style>
        <div class="overview-container">
            <p class="content-text">Extend your number sense beyond integers to the world of rational numbers and their properties.</p>
            <div class="point-box">
                <div class="point-item">p/q where q ≠ 0.</div>
                <div class="point-item">Standard form has a positive denominator.</div>
                <div class="point-item">Operate on rational numbers just like fractions.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex8-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF6D00; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF6D00; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(255, 109, 0, 0.3); text-align: center; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. List five rational numbers between: <br/>(i) -1 and 0 <br/>(ii) -2 and -1 <br/>(iii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> and -<div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -1 and 0:</b></div>
                    <div class="sol-step">=> -1 = -<div class="frac"><span class="num">6</span><span class="den">6</span></div>, 0 = <div class="frac"><span class="num">0</span><span class="den">6</span></div></div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">5</span><span class="den">6</span></div>, -<div class="frac"><span class="num">4</span><span class="den">6</span></div>, -<div class="frac"><span class="num">3</span><span class="den">6</span></div>, -<div class="frac"><span class="num">2</span><span class="den">6</span></div>, -<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) -2 and -1:</b></div>
                    <div class="sol-step">=> -2 = -<div class="frac"><span class="num">12</span><span class="den">6</span></div>, -1 = -<div class="frac"><span class="num">6</span><span class="den">6</span></div></div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">11</span><span class="den">6</span></div>, -<div class="frac"><span class="num">10</span><span class="den">6</span></div>, -<div class="frac"><span class="num">9</span><span class="den">6</span></div>, -<div class="frac"><span class="num">8</span><span class="den">6</span></div>, -<div class="frac"><span class="num">7</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> and -<div class="frac"><span class="num">2</span><span class="den">3</span></div>:</b></div>
                    <div class="sol-step">=> LCM of 5 and 3 is 15. -<div class="frac"><span class="num">12</span><span class="den">15</span></div> and -<div class="frac"><span class="num">10</span><span class="den">15</span></div>.</div>
                    <div class="sol-step">=> Multiply by 3: -<div class="frac"><span class="num">36</span><span class="den">45</span></div> and -<div class="frac"><span class="num">30</span><span class="den">45</span></div>.</div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">35</span><span class="den">45</span></div>, -<div class="frac"><span class="num">34</span><span class="den">45</span></div>, -<div class="frac"><span class="num">33</span><span class="den">45</span></div>, -<div class="frac"><span class="num">32</span><span class="den">45</span></div>, -<div class="frac"><span class="num">31</span><span class="den">45</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Write four more rational numbers in each of the following patterns: <br/>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">6</span><span class="den">10</span></div>, -<div class="frac"><span class="num">9</span><span class="den">15</span></div>, -<div class="frac"><span class="num">12</span><span class="den">20</span></div>... <br/>(ii) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, -<div class="frac"><span class="num">2</span><span class="den">8</span></div>, -<div class="frac"><span class="num">3</span><span class="den">12</span></div>...</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">6</span><span class="den">10</span></div>, -<div class="frac"><span class="num">9</span><span class="den">15</span></div>, -<div class="frac"><span class="num">12</span><span class="den">20</span></div>...</b></div>
                    <div class="sol-step">=> Numerator decreases by 3, denominator increases by 5.</div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">15</span><span class="den">25</span></div>, -<div class="frac"><span class="num">18</span><span class="den">30</span></div>, -<div class="frac"><span class="num">21</span><span class="den">35</span></div>, -<div class="frac"><span class="num">24</span><span class="den">40</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, -<div class="frac"><span class="num">2</span><span class="den">8</span></div>, -<div class="frac"><span class="num">3</span><span class="den">12</span></div>...</b></div>
                    <div class="sol-step">=> Pattern is (n &times; -1) / (n &times; 4).</div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">16</span></div>, -<div class="frac"><span class="num">5</span><span class="den">20</span></div>, -<div class="frac"><span class="num">6</span><span class="den">24</span></div>, -<div class="frac"><span class="num">7</span><span class="den">28</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Draw the number line and represent the following rational numbers on it: <br/>(i) <div class="frac"><span class="num">3</span><span class="den">4</span></div> (ii) -<div class="frac"><span class="num">5</span><span class="den">8</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">3</span><span class="den">4</span></div>:</b></div>
                    <div class="diagram-container">
                        <svg width="250" height="60" viewBox="0 0 250 60">
                            <line x1="10" y1="30" x2="240" y2="30" stroke="#fff" stroke-width="2" />
                            <line x1="10" y1="25" x2="10" y2="35" stroke="#fff" /> <!-- -1 -->
                            <line x1="125" y1="20" x2="125" y2="40" stroke="#fff" /> <!-- 0 -->
                            <line x1="225" y1="20" x2="225" y2="40" stroke="#fff" /> <!-- 1 -->
                            <circle cx="200" cy="30" r="5" fill="#FF6D00" /> <!-- 3/4 -->
                            <text x="120" y="55" fill="#fff" font-size="12">0</text>
                            <text x="220" y="55" fill="#fff" font-size="12">1</text>
                            <text x="190" y="15" fill="#FF6D00" font-size="12">3/4</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(ii) -<div class="frac"><span class="num">5</span><span class="den">8</span></div>:</b></div>
                    <div class="diagram-container">
                        <svg width="250" height="60" viewBox="0 0 250 60">
                            <line x1="10" y1="30" x2="240" y2="30" stroke="#fff" stroke-width="2" />
                            <line x1="25" y1="20" x2="25" y2="40" stroke="#fff" /> <!-- -1 -->
                            <line x1="125" y1="20" x2="125" y2="40" stroke="#fff" /> <!-- 0 -->
                            <circle cx="62.5" cy="30" r="5" fill="#FF6D00" /> <!-- -5/8 approx -->
                            <text x="20" y="55" fill="#fff" font-size="12">-1</text>
                            <text x="120" y="55" fill="#fff" font-size="12">0</text>
                            <text x="45" y="15" fill="#FF6D00" font-size="12">-5/8</text>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. Name the rational numbers represented by P, Q, R and S on the number line where TR = RS = SU and AP = PQ = QB.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg width="300" height="80" viewBox="0 0 300 80">
                            <line x1="10" y1="40" x2="290" y2="40" stroke="#fff" stroke-width="2" />
                            <line x1="50" y1="35" x2="50" y2="45" stroke="#fff" /> <text x="45" y="60" fill="#fff" font-size="10">-2</text> <text x="45" y="30" fill="#fff" font-size="10">U</text>
                            <line x1="75" y1="35" x2="75" y2="45" stroke="#FF6D00" /> <text x="70" y="30" fill="#FF6D00" font-size="10">S</text>
                            <line x1="100" y1="35" x2="100" y2="45" stroke="#FF6D00" /> <text x="95" y="30" fill="#FF6D00" font-size="10">R</text>
                            <line x1="125" y1="35" x2="125" y2="45" stroke="#fff" /> <text x="120" y="60" fill="#fff" font-size="10">-1</text> <text x="120" y="30" fill="#fff" font-size="10">T</text>
                            <line x1="150" y1="35" x2="150" y2="45" stroke="#fff" /> <text x="145" y="60" fill="#fff" font-size="10">0</text>
                            <line x1="200" y1="35" x2="200" y2="45" stroke="#fff" /> <text x="195" y="60" fill="#fff" font-size="10">2</text> <text x="195" y="30" fill="#fff" font-size="10">A</text>
                            <line x1="216.6" y1="35" x2="216.6" y2="45" stroke="#FF6D00" /> <text x="211" y="30" fill="#FF6D00" font-size="10">P</text>
                            <line x1="233.3" y1="35" x2="233.3" y2="45" stroke="#FF6D00" /> <text x="228" y="30" fill="#FF6D00" font-size="10">Q</text>
                            <line x1="250" y1="35" x2="250" y2="45" stroke="#fff" /> <text x="245" y="60" fill="#fff" font-size="10">3</text> <text x="245" y="30" fill="#fff" font-size="10">B</text>
                        </svg>
                    </div>
                    <div class="sol-step">=> Between 2 and 3, there are 3 parts. P is at 2 + <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">7</span><span class="den">3</span></div>. Q is at 2 + <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div>.</div>
                    <div class="sol-step">=> Between -1 and -2, there are 3 parts. R is at -1 - <div class="frac"><span class="num">1</span><span class="den">3</span></div> = -<div class="frac"><span class="num">4</span><span class="den">3</span></div>. S is at -1 - <div class="frac"><span class="num">2</span><span class="den">3</span></div> = -<div class="frac"><span class="num">5</span><span class="den">3</span></div>.</div>
                    <div class="sol-step">Result: <span class="ans-highlight">P = <div class="frac"><span class="num">7</span><span class="den">3</span></div>, Q = <div class="frac"><span class="num">8</span><span class="den">3</span></div>, R = -<div class="frac"><span class="num">4</span><span class="den">3</span></div>, S = -<div class="frac"><span class="num">5</span><span class="den">3</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Which of the following pairs represent the same rational number? <br/>
                (i) -<div class="frac"><span class="num">7</span><span class="den">21</span></div> and <div class="frac"><span class="num">3</span><span class="den">9</span></div> <br/>
                (ii) -<div class="frac"><span class="num">16</span><span class="den">20</span></div> and <div class="frac"><span class="num">20</span><span class="den">-25</span></div> <br/>
                (iii) <div class="frac"><span class="num">-2</span><span class="den">-3</span></div> and <div class="frac"><span class="num">2</span><span class="den">3</span></div> <br/>
                (iv) -<div class="frac"><span class="num">3</span><span class="den">5</span></div> and -<div class="frac"><span class="num">12</span><span class="den">20</span></div> <br/>
                (v) <div class="frac"><span class="num">8</span><span class="den">-5</span></div> and -<div class="frac"><span class="num">24</span><span class="den">15</span></div> <br/>
                (vi) <div class="frac"><span class="num">1</span><span class="den">3</span></div> and -<div class="frac"><span class="num">1</span><span class="den">9</span></div> <br/>
                (vii) -<div class="frac"><span class="num">5</span><span class="den">9</span></div> and <div class="frac"><span class="num">5</span><span class="den">-9</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">7</span><span class="den">21</span></div> and <div class="frac"><span class="num">3</span><span class="den">9</span></div>:</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">7</span><span class="den">21</span></div> = -<div class="frac"><span class="num">1</span><span class="den">3</span></div> and <div class="frac"><span class="num">3</span><span class="den">9</span></div> = <div class="frac"><span class="num">1</span><span class="den">3</span></div>. Since -<div class="frac"><span class="num">1</span><span class="den">3</span></div> &ne; <div class="frac"><span class="num">1</span><span class="den">3</span></div>, they are <span class="ans-highlight">Not Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) -<div class="frac"><span class="num">16</span><span class="den">20</span></div> and <div class="frac"><span class="num">20</span><span class="den">-25</span></div>:</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">16</span><span class="den">20</span></div> = -<div class="frac"><span class="num">4</span><span class="den">5</span></div> and <div class="frac"><span class="num">20</span><span class="den">-25</span></div> = -<div class="frac"><span class="num">4</span><span class="den">5</span></div>. Result: <span class="ans-highlight">Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) <div class="frac"><span class="num">-2</span><span class="den">-3</span></div> and <div class="frac"><span class="num">2</span><span class="den">3</span></div>:</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">-2</span><span class="den">-3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div>. Result: <span class="ans-highlight">Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) -<div class="frac"><span class="num">3</span><span class="den">5</span></div> and -<div class="frac"><span class="num">12</span><span class="den">20</span></div>:</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">12</span><span class="den">20</span></div> = -<div class="frac"><span class="num">3</span><span class="den">5</span></div>. Result: <span class="ans-highlight">Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">8</span><span class="den">-5</span></div> and -<div class="frac"><span class="num">24</span><span class="den">15</span></div>:</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">8</span><span class="den">-5</span></div> = -<div class="frac"><span class="num">8</span><span class="den">5</span></div> and -<div class="frac"><span class="num">24</span><span class="den">15</span></div> = -<div class="frac"><span class="num">8</span><span class="den">5</span></div>. Result: <span class="ans-highlight">Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) <div class="frac"><span class="num">1</span><span class="den">3</span></div> and -<div class="frac"><span class="num">1</span><span class="den">9</span></div>:</b></div>
                    <div class="sol-step">=> Denominators are different and numerators are different. Result: <span class="ans-highlight">Not Same</span>.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) -<div class="frac"><span class="num">5</span><span class="den">9</span></div> and <div class="frac"><span class="num">5</span><span class="den">-9</span></div>:</b></div>
                    <div class="sol-step">=> Both represent the same negative rational number -<div class="frac"><span class="num">5</span><span class="den">9</span></div>. Result: <span class="ans-highlight">Same</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. Rewrite the following rational numbers in the simplest form: <br/>(i) -<div class="frac"><span class="num">8</span><span class="den">6</span></div> (ii) <div class="frac"><span class="num">25</span><span class="den">45</span></div> (iii) -<div class="frac"><span class="num">44</span><span class="den">72</span></div> (iv) -<div class="frac"><span class="num">8</span><span class="den">10</span></div></div>
                <div class="sol-body">
                    <div class="sol-step">(i) -<div class="frac"><span class="num">8</span><span class="den">6</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">3</span></div></span></div>
                    <div class="sol-step">(ii) <div class="frac"><span class="num">25</span><span class="den">45</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">9</span></div></span></div>
                    <div class="sol-step">(iii) -<div class="frac"><span class="num">44</span><span class="den">72</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">11</span><span class="den">18</span></div></span></div>
                    <div class="sol-step">(iv) -<div class="frac"><span class="num">8</span><span class="den">10</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Fill in the boxes with correct symbol out of >, <, and =: <br/>(i) -<div class="frac"><span class="num">5</span><span class="den">7</span></div> [ ] <div class="frac"><span class="num">2</span><span class="den">3</span></div> <br/>(ii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> [ ] -<div class="frac"><span class="num">5</span><span class="den">7</span></div> <br/>(iii) -<div class="frac"><span class="num">7</span><span class="den">8</span></div> [ ] <div class="frac"><span class="num">14</span><span class="den">-16</span></div></div>
                <div class="sol-body">
                    <div class="sol-step">(i) -<div class="frac"><span class="num">5</span><span class="den">7</span></div> < <div class="frac"><span class="num">2</span><span class="den">3</span></div> (Negative is always less than positive)</div>
                    <div class="sol-step">(ii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">28</span><span class="den">35</span></div>, -<div class="frac"><span class="num">5</span><span class="den">7</span></div> = -<div class="frac"><span class="num">25</span><span class="den">35</span></div>. Since -28 < -25, -<div class="frac"><span class="num">4</span><span class="den">5</span></div> < -<div class="frac"><span class="num">5</span><span class="den">7</span></div></div>
                    <div class="sol-step">(iii) <div class="frac"><span class="num">14</span><span class="den">-16</span></div> = -<div class="frac"><span class="num">7</span><span class="den">8</span></div>. So -<div class="frac"><span class="num">7</span><span class="den">8</span></div> = <div class="frac"><span class="num">14</span><span class="den">-16</span></div></div>
                    <div class="sol-step">Result: <span class="ans-highlight">(i) <, (ii) <, (iii) =</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Which is the greatest in each of the following: <br/>
                (i) <div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">5</span><span class="den">2</span></div> <br/>
                (ii) -<div class="frac"><span class="num">5</span><span class="den">6</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div> <br/>
                (iii) -<div class="frac"><span class="num">3</span><span class="den">4</span></div>, <div class="frac"><span class="num">2</span><span class="den">-3</span></div> <br/>
                (iv) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, <div class="frac"><span class="num">1</span><span class="den">4</span></div> <br/>
                (v) -3<div class="frac"><span class="num">2</span><span class="den">7</span></div>, -3<div class="frac"><span class="num">4</span><span class="den">5</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">5</span><span class="den">2</span></div>:</b></div>
                    <div class="sol-step">=> LCM of 3 and 2 is 6.</div>
                    <div class="sol-step">=> <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">4</span><span class="den">6</span></div> and <div class="frac"><span class="num">5</span><span class="den">2</span></div> = <div class="frac"><span class="num">15</span><span class="den">6</span></div>.</div>
                    <div class="sol-step">=> Since 15 > 4, <span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">2</span></div></span> is greatest.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) -<div class="frac"><span class="num">5</span><span class="den">6</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div>:</b></div>
                    <div class="sol-step">=> LCM of 6 and 3 is 6.</div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">4</span><span class="den">3</span></div> = -<div class="frac"><span class="num">8</span><span class="den">6</span></div>.</div>
                    <div class="sol-step">=> Since -5 > -8, <span class="ans-highlight">-<div class="frac"><span class="num">5</span><span class="den">6</span></div></span> is greatest.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">3</span><span class="den">4</span></div>, <div class="frac"><span class="num">2</span><span class="den">-3</span></div>:</b></div>
                    <div class="sol-step">=> LCM of 4 and 3 is 12.</div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">3</span><span class="den">4</span></div> = -<div class="frac"><span class="num">9</span><span class="den">12</span></div> and <div class="frac"><span class="num">2</span><span class="den">-3</span></div> = -<div class="frac"><span class="num">8</span><span class="den">12</span></div>.</div>
                    <div class="sol-step">=> Since -8 > -9, <span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">-3</span></div></span> is greatest.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, <div class="frac"><span class="num">1</span><span class="den">4</span></div>:</b></div>
                    <div class="sol-step">=> Positive rational number is always greater than negative.</div>
                    <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">4</span></div></span> is greatest.</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) -3<div class="frac"><span class="num">2</span><span class="den">7</span></div>, -3<div class="frac"><span class="num">4</span><span class="den">5</span></div>:</b></div>
                    <div class="sol-step">=> -3<div class="frac"><span class="num">2</span><span class="den">7</span></div> = -<div class="frac"><span class="num">23</span><span class="den">7</span></div> = -<div class="frac"><span class="num">115</span><span class="den">35</span></div>.</div>
                    <div class="sol-step">=> -3<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">19</span><span class="den">5</span></div> = -<div class="frac"><span class="num">133</span><span class="den">35</span></div>.</div>
                    <div class="sol-step">=> Since -115 > -133, <span class="ans-highlight">-3<div class="frac"><span class="num">2</span><span class="den">7</span></div></span> is greatest.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. Write the following rational numbers in ascending order: <br/>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">2</span><span class="den">5</span></div>, -<div class="frac"><span class="num">1</span><span class="den">5</span></div> <br/>(ii) <div class="frac"><span class="num">1</span><span class="den">3</span></div>, -<div class="frac"><span class="num">2</span><span class="den">9</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">2</span><span class="den">5</span></div>, -<div class="frac"><span class="num">1</span><span class="den">5</span></div>:</b></div>
                    <div class="sol-step">=> Denominators are same. Comparing numerators: -3 < -2 < -1.</div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">2</span><span class="den">5</span></div>, -<div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">1</span><span class="den">3</span></div>, -<div class="frac"><span class="num">2</span><span class="den">9</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div>:</b></div>
                    <div class="sol-step">=> LCM of 3, 9 is 9. Fractions: <div class="frac"><span class="num">3</span><span class="den">9</span></div>, -<div class="frac"><span class="num">2</span><span class="den">9</span></div>, -<div class="frac"><span class="num">12</span><span class="den">9</span></div>.</div>
                    <div class="sol-step">=> Ascending order: -<div class="frac"><span class="num">12</span><span class="den">9</span></div> < -<div class="frac"><span class="num">2</span><span class="den">9</span></div> < <div class="frac"><span class="num">3</span><span class="den">9</span></div>.</div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">3</span></div>, -<div class="frac"><span class="num">2</span><span class="den">9</span></div>, <div class="frac"><span class="num">1</span><span class="den">3</span></div></span></div>
                </div>
            </div>
        </div>
</div>
        `,
    "ex8-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FF6D00; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FF6D00; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Find the sum: <br/>(i) <div class="frac"><span class="num">5</span><span class="den">4</span></div> + (-<div class="frac"><span class="num">11</span><span class="den">4</span></div>) <br/>(ii) <div class="frac"><span class="num">5</span><span class="den">3</span></div> + <div class="frac"><span class="num">3</span><span class="den">5</span></div> <br/>(iii) -<div class="frac"><span class="num">9</span><span class="den">10</span></div> + <div class="frac"><span class="num">22</span><span class="den">15</span></div> <br/>(iv) -<div class="frac"><span class="num">3</span><span class="den">-11</span></div> + <div class="frac"><span class="num">5</span><span class="den">9</span></div> <br/>(v) -<div class="frac"><span class="num">8</span><span class="den">19</span></div> + (-<div class="frac"><span class="num">2</span><span class="den">57</span></div>) <br/>(vi) -<div class="frac"><span class="num">2</span><span class="den">3</span></div> + 0 <br/>(vii) -2<div class="frac"><span class="num">1</span><span class="den">3</span></div> + 4<div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">5</span><span class="den">4</span></div> + (-<div class="frac"><span class="num">11</span><span class="den">4</span></div>)</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">5 - 11</span><span class="den">4</span></div> = -<div class="frac"><span class="num">6</span><span class="den">4</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">5</span><span class="den">3</span></div> + <div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">=> LCM(3,5) = 15. <div class="frac"><span class="num">25 + 9</span><span class="den">15</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">34</span><span class="den">15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">9</span><span class="den">10</span></div> + <div class="frac"><span class="num">22</span><span class="den">15</span></div></b></div>
                    <div class="sol-step">=> LCM(10,15) = 30. <div class="frac"><span class="num">-27 + 44</span><span class="den">30</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">17</span><span class="den">30</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) -<div class="frac"><span class="num">3</span><span class="den">-11</span></div> + <div class="frac"><span class="num">5</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">9</span></div> = <div class="frac"><span class="num">27 + 55</span><span class="den">99</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">82</span><span class="den">99</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) -<div class="frac"><span class="num">8</span><span class="den">19</span></div> + (-<div class="frac"><span class="num">2</span><span class="den">57</span></div>)</b></div>
                    <div class="sol-step">=> LCM(19,57) = 57. <div class="frac"><span class="num">-24 - 2</span><span class="den">57</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">26</span><span class="den">57</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) -<div class="frac"><span class="num">2</span><span class="den">3</span></div> + 0</b></div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) -2<div class="frac"><span class="num">1</span><span class="den">3</span></div> + 4<div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">7</span><span class="den">3</span></div> + <div class="frac"><span class="num">23</span><span class="den">5</span></div> = <div class="frac"><span class="num">-35 + 69</span><span class="den">15</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">34</span><span class="den">15</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Find: <br/>(i) <div class="frac"><span class="num">7</span><span class="den">24</span></div> - <div class="frac"><span class="num">17</span><span class="den">36</span></div> <br/>(ii) <div class="frac"><span class="num">5</span><span class="den">63</span></div> - (-<div class="frac"><span class="num">6</span><span class="den">21</span></div>) <br/>(iii) -<div class="frac"><span class="num">6</span><span class="den">13</span></div> - (-<div class="frac"><span class="num">7</span><span class="den">15</span></div>) <br/>(iv) -<div class="frac"><span class="num">3</span><span class="den">8</span></div> - <div class="frac"><span class="num">7</span><span class="den">11</span></div> <br/>(v) -2<div class="frac"><span class="num">1</span><span class="den">9</span></div> - 6</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">7</span><span class="den">24</span></div> - <div class="frac"><span class="num">17</span><span class="den">36</span></div></b></div>
                    <div class="sol-step">=> LCM(24,36) = 72. <div class="frac"><span class="num">21 - 34</span><span class="den">72</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">13</span><span class="den">72</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">5</span><span class="den">63</span></div> - (-<div class="frac"><span class="num">6</span><span class="den">21</span></div>)</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">5</span><span class="den">63</span></div> + <div class="frac"><span class="num">6</span><span class="den">21</span></div> = <div class="frac"><span class="num">5</span><span class="den">63</span></div> + <div class="frac"><span class="num">18</span><span class="den">63</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">23</span><span class="den">63</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">6</span><span class="den">13</span></div> - (-<div class="frac"><span class="num">7</span><span class="den">15</span></div>)</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">6</span><span class="den">13</span></div> + <div class="frac"><span class="num">7</span><span class="den">15</span></div> = <div class="frac"><span class="num">-90 + 91</span><span class="den">195</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">195</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) -<div class="frac"><span class="num">3</span><span class="den">8</span></div> - <div class="frac"><span class="num">7</span><span class="den">11</span></div></b></div>
                    <div class="sol-step">=> LCM(8,11) = 88. <div class="frac"><span class="num">-33 - 56</span><span class="den">88</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">89</span><span class="den">88</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) -2<div class="frac"><span class="num">1</span><span class="den">9</span></div> - 6</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">19</span><span class="den">9</span></div> - 6 = <div class="frac"><span class="num">-19 - 54</span><span class="den">9</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">73</span><span class="den">9</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Find the product: <br/>(i) <div class="frac"><span class="num">9</span><span class="den">2</span></div> &times; (-<div class="frac"><span class="num">7</span><span class="den">4</span></div>) <br/>(ii) <div class="frac"><span class="num">3</span><span class="den">10</span></div> &times; (-9) <br/>(iii) -<div class="frac"><span class="num">6</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">9</span><span class="den">11</span></div> <br/>(iv) <div class="frac"><span class="num">3</span><span class="den">7</span></div> &times; (-<div class="frac"><span class="num">2</span><span class="den">5</span></div>) <br/>(v) <div class="frac"><span class="num">3</span><span class="den">11</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">5</span></div> <br/>(vi) <div class="frac"><span class="num">3</span><span class="den">-5</span></div> &times; -<div class="frac"><span class="num">5</span><span class="den">3</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">9</span><span class="den">2</span></div> &times; (-<div class="frac"><span class="num">7</span><span class="den">4</span></div>)</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">9 &times; -7</span><span class="den">2 &times; 4</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">63</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) <div class="frac"><span class="num">3</span><span class="den">10</span></div> &times; (-9)</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">3 &times; -9</span><span class="den">10</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">27</span><span class="den">10</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">6</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">9</span><span class="den">11</span></div></b></div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">54</span><span class="den">55</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) <div class="frac"><span class="num">3</span><span class="den">7</span></div> &times; (-<div class="frac"><span class="num">2</span><span class="den">5</span></div>)</b></div>
                    <div class="sol-step">Result: <span class="ans-highlight">-<div class="frac"><span class="num">6</span><span class="den">35</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) <div class="frac"><span class="num">3</span><span class="den">11</span></div> &times; <div class="frac"><span class="num">2</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Result: <span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">55</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) <div class="frac"><span class="num">3</span><span class="den">-5</span></div> &times; -<div class="frac"><span class="num">5</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">=> (-<div class="frac"><span class="num">15</span><span class="den">-15</span></div>) = <span class="ans-highlight">1</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Find the value of: <br/>(i) -4 &divide; <div class="frac"><span class="num">2</span><span class="den">3</span></div> <br/>(ii) -<div class="frac"><span class="num">3</span><span class="den">5</span></div> &divide; 2 <br/>(iii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> &divide; (-3) <br/>(iv) -<div class="frac"><span class="num">1</span><span class="den">8</span></div> &divide; <div class="frac"><span class="num">3</span><span class="den">4</span></div> <br/>(v) -<div class="frac"><span class="num">2</span><span class="den">13</span></div> &divide; <div class="frac"><span class="num">1</span><span class="den">7</span></div> <br/>(vi) -<div class="frac"><span class="num">7</span><span class="den">12</span></div> &divide; (-<div class="frac"><span class="num">2</span><span class="den">13</span></div>) <br/>(vii) <div class="frac"><span class="num">3</span><span class="den">13</span></div> &divide; (-<div class="frac"><span class="num">4</span><span class="den">65</span></div>)</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -4 &divide; <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">=> -4 &times; <div class="frac"><span class="num">3</span><span class="den">2</span></div> = -<div class="frac"><span class="num">12</span><span class="den">2</span></div> = <span class="ans-highlight">-6</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) -<div class="frac"><span class="num">3</span><span class="den">5</span></div> &divide; 2</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">10</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> &divide; (-3)</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; (-<div class="frac"><span class="num">1</span><span class="den">3</span></div>) = <span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(iv) -<div class="frac"><span class="num">1</span><span class="den">8</span></div> &divide; <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">1</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">4</span><span class="den">3</span></div> = -<div class="frac"><span class="num">4</span><span class="den">24</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(v) -<div class="frac"><span class="num">2</span><span class="den">13</span></div> &divide; <div class="frac"><span class="num">1</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">2</span><span class="den">13</span></div> &times; 7 = <span class="ans-highlight">-<div class="frac"><span class="num">14</span><span class="den">13</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vi) -<div class="frac"><span class="num">7</span><span class="den">12</span></div> &divide; (-<div class="frac"><span class="num">2</span><span class="den">13</span></div>)</b></div>
                    <div class="sol-step">=> -<div class="frac"><span class="num">7</span><span class="den">12</span></div> &times; (-<div class="frac"><span class="num">13</span><span class="den">2</span></div>) = <span class="ans-highlight"><div class="frac"><span class="num">91</span><span class="den">24</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(vii) <div class="frac"><span class="num">3</span><span class="den">13</span></div> &divide; (-<div class="frac"><span class="num">4</span><span class="den">65</span></div>)</b></div>
                    <div class="sol-step">=> <div class="frac"><span class="num">3</span><span class="den">13</span></div> &times; <div class="frac"><span class="num">65</span><span class="den">-4</span></div> = <div class="frac"><span class="num">3 &times; 5</span><span class="den">-4</span></div> = <span class="ans-highlight">-<div class="frac"><span class="num">15</span><span class="den">4</span></div></span></div>
                </div>
            </div>
        </div>
        `,
  },
  examples: [],
  mcqs: [
    {
      id: "m1",
      question: "Which is a rational number?",
      options: ["5", "-2/3", "0", "All of these"],
      correctAnswer: "D",
    },
    {
      id: "m2",
      question: "In p/q, q cannot be:",
      options: ["1", "-1", "0", "10"],
      correctAnswer: "C",
    },
    {
      id: "m3",
      question: "The standard form of -18/12 is:",
      options: ["-3/2", "3/-2", "-9/6", "1.5"],
      correctAnswer: "A",
    },
    {
      id: "m4",
      question: "Reciprocal of -5/7 is:",
      options: ["5/7", "7/5", "-7/5", "1"],
      correctAnswer: "C",
    },
    {
      id: "m5",
      question: "0 is ______ rational number.",
      options: ["Positive", "Negative", "Neither pos nor neg", "Undefined"],
      correctAnswer: "C",
    },
    {
      id: "m6",
      question: "Which symbol fills -4/5 [ ] -5/7?",
      options: [">", "<", "=", "None"],
      correctAnswer: "B",
    },
    {
      id: "m7",
      question: "Sum of a number and its additive inverse is:",
      options: ["1", "0", "-1", "2"],
      correctAnswer: "B",
    },
    {
      id: "m8",
      question: "Rational number between 1/2 and 1/4 is:",
      options: ["3/8", "1/3", "3/4", "1/6"],
      correctAnswer: "A",
    },
    {
      id: "m9",
      question: "Product of a number and its reciprocal is:",
      options: ["0", "1", "-1", "Number itself"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question: "Smallest positive rational number is:",
      options: ["0", "1", "0.1", "Doesn't exist"],
      correctAnswer: "D",
    },
  ],
  summary: [],
};
