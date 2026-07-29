import { ChapterContent } from "../types";

export const c7Math8: ChapterContent = {
  id: "c7-math-8",
  number: 8,
  title: "Rational Numbers",
  isHtmlView: true,
  introduction:
    "A rational number is any number that can be expressed as a fraction p/q, where p and q are integers and q ≠ 0. In this chapter, we explore standard form, equivalent rational numbers, number line representation, comparison, and fundamental arithmetic operations.",
  definitions: [
    {
      term: "Rational Number",
      description: "A number that can be written in the form p/q where p and q are integers and q ≠ 0.",
    },
    {
      term: "Positive Rational Number",
      description:
        "A rational number where both numerator and denominator have the same sign.",
    },
    {
      term: "Negative Rational Number",
      description:
        "A rational number where numerator and denominator have opposite signs.",
    },
    {
      term: "Standard Form",
      description:
        "A rational number p/q where q > 0 and p and q have no common factor other than 1.",
    },
  ],
  keyPoints: [
    "Every integer and fraction is a rational number.",
    "0 is neither a positive nor a negative rational number.",
    "There are infinitely many rational numbers between any two given rational numbers.",
    "To add or subtract rational numbers with different denominators, take the LCM of denominators first.",
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
            <p class="content-text">Master rational numbers, their representation on the number line, comparison, and addition, subtraction, multiplication, and division operations.</p>
            <div class="point-box">
                <div class="point-item">Rational numbers are of the form <div class="frac"><span class="num">p</span><span class="den">q</span></div> where q &ne; 0.</div>
                <div class="point-item">Standard form requires positive denominator and coprime numerator/denominator.</div>
                <div class="point-item">Perform arithmetic by making denominators equal using LCM.</div>
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
            .sol-body b, .subpart-title { color: #FF6D00; font-weight: bold; }
            .diagram-container { background: #1a1a2e; padding: 15px 10px; border-radius: 12px; margin: 15px 0; border: 1px solid rgba(255, 109, 0, 0.3); display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; box-sizing: border-box; overflow-x: auto; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. List five rational numbers between:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -1 and 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to rational numbers with denominator 6:</div>
                    <div class="sol-step">-1 = -<div class="frac"><span class="num">6</span><span class="den">6</span></div>  and  0 = <div class="frac"><span class="num">0</span><span class="den">6</span></div></div>
                    <div class="sol-step">Five rational numbers between -1 and 0 are:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">5</span><span class="den">6</span></div>, -<div class="frac"><span class="num">4</span><span class="den">6</span></div>, -<div class="frac"><span class="num">3</span><span class="den">6</span></div>, -<div class="frac"><span class="num">2</span><span class="den">6</span></div>, -<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -2 and -1</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Converting to rational numbers with denominator 6:</div>
                    <div class="sol-step">-2 = -<div class="frac"><span class="num">12</span><span class="den">6</span></div>  and  -1 = -<div class="frac"><span class="num">6</span><span class="den">6</span></div></div>
                    <div class="sol-step">Five rational numbers between -2 and -1 are:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">11</span><span class="den">6</span></div>, -<div class="frac"><span class="num">10</span><span class="den">6</span></div>, -<div class="frac"><span class="num">9</span><span class="den">6</span></div>, -<div class="frac"><span class="num">8</span><span class="den">6</span></div>, -<div class="frac"><span class="num">7</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> and -<div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 3 is 15.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">4 &times; 9</span><span class="den">5 &times; 9</span></div> = -<div class="frac"><span class="num">36</span><span class="den">45</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">2</span><span class="den">3</span></div> = -<div class="frac"><span class="num">2 &times; 15</span><span class="den">3 &times; 15</span></div> = -<div class="frac"><span class="num">30</span><span class="den">45</span></div></div>
                    <div class="sol-step">Five rational numbers between -<div class="frac"><span class="num">4</span><span class="den">5</span></div> and -<div class="frac"><span class="num">2</span><span class="den">3</span></div> are:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">35</span><span class="den">45</span></div>, -<div class="frac"><span class="num">34</span><span class="den">45</span></div>, -<div class="frac"><span class="num">33</span><span class="den">45</span></div>, -<div class="frac"><span class="num">32</span><span class="den">45</span></div>, -<div class="frac"><span class="num">31</span><span class="den">45</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">1</span><span class="den">2</span></div> and <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 2 and 3 is 6.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">1</span><span class="den">2</span></div> = -<div class="frac"><span class="num">1 &times; 3</span><span class="den">2 &times; 3</span></div> = -<div class="frac"><span class="num">3</span><span class="den">6</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 &times; 2</span><span class="den">3 &times; 2</span></div> = <div class="frac"><span class="num">4</span><span class="den">6</span></div></div>
                    <div class="sol-step">Five rational numbers between -<div class="frac"><span class="num">1</span><span class="den">2</span></div> and <div class="frac"><span class="num">2</span><span class="den">3</span></div> are:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">2</span><span class="den">6</span></div>, -<div class="frac"><span class="num">1</span><span class="den">6</span></div>, 0, <div class="frac"><span class="num">1</span><span class="den">6</span></div>, <div class="frac"><span class="num">2</span><span class="den">6</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Write four more rational numbers in each of the following patterns:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">6</span><span class="den">10</span></div>, -<div class="frac"><span class="num">9</span><span class="den">15</span></div>, -<div class="frac"><span class="num">12</span><span class="den">20</span></div>, .....</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Numerators decrease by 3 and denominators increase by 5.</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">15</span><span class="den">25</span></div>, -<div class="frac"><span class="num">18</span><span class="den">30</span></div>, -<div class="frac"><span class="num">21</span><span class="den">35</span></div>, -<div class="frac"><span class="num">24</span><span class="den">40</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, -<div class="frac"><span class="num">2</span><span class="den">8</span></div>, -<div class="frac"><span class="num">3</span><span class="den">12</span></div>, .....</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Numerators decrease by 1 and denominators increase by 4.</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">16</span></div>, -<div class="frac"><span class="num">5</span><span class="den">20</span></div>, -<div class="frac"><span class="num">6</span><span class="den">24</span></div>, -<div class="frac"><span class="num">7</span><span class="den">28</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">1</span><span class="den">6</span></div>, <div class="frac"><span class="num">2</span><span class="den">-12</span></div>, <div class="frac"><span class="num">3</span><span class="den">-18</span></div>, <div class="frac"><span class="num">4</span><span class="den">-24</span></div>, .....</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Numerators increase by 1 and denominators decrease by 6.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">-30</span></div>, <div class="frac"><span class="num">6</span><span class="den">-36</span></div>, <div class="frac"><span class="num">7</span><span class="den">-42</span></div>, <div class="frac"><span class="num">8</span><span class="den">-48</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">2</span><span class="den">-3</span></div>, <div class="frac"><span class="num">4</span><span class="den">-6</span></div>, <div class="frac"><span class="num">6</span><span class="den">-9</span></div>, .....</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Numerators increase by 2 and denominators decrease by 3.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">-12</span></div>, <div class="frac"><span class="num">10</span><span class="den">-15</span></div>, <div class="frac"><span class="num">12</span><span class="den">-18</span></div>, <div class="frac"><span class="num">14</span><span class="den">-21</span></div></span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Give four rational numbers equivalent to:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">2</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiplying numerator and denominator by 2, 3, 4, and 5:</div>
                    <div class="sol-step">-<div class="frac"><span class="num">2 &times; 2</span><span class="den">7 &times; 2</span></div> = -<div class="frac"><span class="num">4</span><span class="den">14</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">2 &times; 3</span><span class="den">7 &times; 3</span></div> = -<div class="frac"><span class="num">6</span><span class="den">21</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">2 &times; 4</span><span class="den">7 &times; 4</span></div> = -<div class="frac"><span class="num">8</span><span class="den">28</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">2 &times; 5</span><span class="den">7 &times; 5</span></div> = -<div class="frac"><span class="num">10</span><span class="den">35</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">14</span></div>, -<div class="frac"><span class="num">6</span><span class="den">21</span></div>, -<div class="frac"><span class="num">8</span><span class="den">28</span></div>, -<div class="frac"><span class="num">10</span><span class="den">35</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) <div class="frac"><span class="num">5</span><span class="den">-3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiplying numerator and denominator by 2, 3, 4, and 5:</div>
                    <div class="sol-step"><div class="frac"><span class="num">5 &times; 2</span><span class="den">-3 &times; 2</span></div> = <div class="frac"><span class="num">10</span><span class="den">-6</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">5 &times; 3</span><span class="den">-3 &times; 3</span></div> = <div class="frac"><span class="num">15</span><span class="den">-9</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">5 &times; 4</span><span class="den">-3 &times; 4</span></div> = <div class="frac"><span class="num">20</span><span class="den">-12</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">5 &times; 5</span><span class="den">-3 &times; 5</span></div> = <div class="frac"><span class="num">25</span><span class="den">-15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">10</span><span class="den">-6</span></div>, <div class="frac"><span class="num">15</span><span class="den">-9</span></div>, <div class="frac"><span class="num">20</span><span class="den">-12</span></div>, <div class="frac"><span class="num">25</span><span class="den">-15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) <div class="frac"><span class="num">4</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Multiplying numerator and denominator by 2, 3, 4, and 5:</div>
                    <div class="sol-step"><div class="frac"><span class="num">4 &times; 2</span><span class="den">9 &times; 2</span></div> = <div class="frac"><span class="num">8</span><span class="den">18</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">4 &times; 3</span><span class="den">9 &times; 3</span></div> = <div class="frac"><span class="num">12</span><span class="den">27</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">4 &times; 4</span><span class="den">9 &times; 4</span></div> = <div class="frac"><span class="num">16</span><span class="den">36</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">4 &times; 5</span><span class="den">9 &times; 5</span></div> = <div class="frac"><span class="num">20</span><span class="den">45</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">8</span><span class="den">18</span></div>, <div class="frac"><span class="num">12</span><span class="den">27</span></div>, <div class="frac"><span class="num">16</span><span class="den">36</span></div>, <div class="frac"><span class="num">20</span><span class="den">45</span></div></span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Draw the number line and represent the following rational numbers on it:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">4</span></div> lies between 0 and 1.</div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 320 90" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <line x1="20" y1="45" x2="300" y2="45" stroke="#fff" stroke-width="2" />
                            <path d="M 20 45 L 28 40 M 20 45 L 28 50 M 300 45 L 292 40 M 300 45 L 292 50" stroke="#fff" stroke-width="2" fill="none" />
                            <line x1="40" y1="38" x2="40" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="40" y="70" fill="#fff" font-size="14" text-anchor="middle">-2</text>
                            <line x1="90" y1="38" x2="90" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="90" y="70" fill="#fff" font-size="14" text-anchor="middle">-1</text>
                            <line x1="140" y1="38" x2="140" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="140" y="70" fill="#fff" font-size="14" text-anchor="middle">0</text>
                            <line x1="165" y1="40" x2="165" y2="50" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="190" y1="40" x2="190" y2="50" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="215" y1="38" x2="215" y2="52" stroke="#FF6D00" stroke-width="2.5" />
                            <circle cx="215" cy="45" r="7" stroke="#FF6D00" stroke-width="2" fill="none" />
                            <line x1="240" y1="38" x2="240" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="240" y="70" fill="#fff" font-size="14" text-anchor="middle">1</text>
                            <line x1="290" y1="38" x2="290" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="290" y="70" fill="#fff" font-size="14" text-anchor="middle">2</text>
                            <text x="215" y="22" fill="#FF6D00" font-size="15" font-weight="bold" text-anchor="middle">3/4</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(ii) -<div class="frac"><span class="num">5</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-[<div class="frac"><span class="num">5</span><span class="den">8</span></div>] lies between 0 and -1.</div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 320 90" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <line x1="20" y1="45" x2="300" y2="45" stroke="#fff" stroke-width="2" />
                            <path d="M 20 45 L 28 40 M 20 45 L 28 50 M 300 45 L 292 40 M 300 45 L 292 50" stroke="#fff" stroke-width="2" fill="none" />
                            <line x1="40" y1="38" x2="40" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="40" y="70" fill="#fff" font-size="14" text-anchor="middle">-2</text>
                            <line x1="100" y1="38" x2="100" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="100" y="70" fill="#fff" font-size="14" text-anchor="middle">-1</text>
                            <line x1="110" y1="41" x2="110" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="120" y1="41" x2="120" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="130" y1="38" x2="130" y2="52" stroke="#FF6D00" stroke-width="2.5" />
                            <circle cx="130" cy="45" r="7" stroke="#FF6D00" stroke-width="2" fill="none" />
                            <line x1="140" y1="41" x2="140" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="150" y1="41" x2="150" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="160" y1="41" x2="160" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="170" y1="41" x2="170" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="180" y1="38" x2="180" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="180" y="70" fill="#fff" font-size="14" text-anchor="middle">0</text>
                            <line x1="240" y1="38" x2="240" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="240" y="70" fill="#fff" font-size="14" text-anchor="middle">1</text>
                            <line x1="290" y1="38" x2="290" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="290" y="70" fill="#fff" font-size="14" text-anchor="middle">2</text>
                            <text x="130" y="22" fill="#FF6D00" font-size="15" font-weight="bold" text-anchor="middle">-5/8</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(iii) -<div class="frac"><span class="num">7</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-[<div class="frac"><span class="num">7</span><span class="den">4</span></div>] = -1<div class="frac"><span class="num">3</span><span class="den">4</span></div>, which lies between -1 and -2.</div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 320 90" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <line x1="20" y1="45" x2="300" y2="45" stroke="#fff" stroke-width="2" />
                            <path d="M 20 45 L 28 40 M 20 45 L 28 50 M 300 45 L 292 40 M 300 45 L 292 50" stroke="#fff" stroke-width="2" fill="none" />
                            <line x1="50" y1="38" x2="50" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="50" y="70" fill="#fff" font-size="14" text-anchor="middle">-2</text>
                            <line x1="70" y1="38" x2="70" y2="52" stroke="#FF6D00" stroke-width="2.5" />
                            <circle cx="70" cy="45" r="7" stroke="#FF6D00" stroke-width="2" fill="none" />
                            <line x1="90" y1="40" x2="90" y2="50" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="110" y1="40" x2="110" y2="50" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="130" y1="38" x2="130" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="130" y="70" fill="#fff" font-size="14" text-anchor="middle">-1</text>
                            <line x1="210" y1="38" x2="210" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="210" y="70" fill="#fff" font-size="14" text-anchor="middle">0</text>
                            <line x1="290" y1="38" x2="290" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="290" y="70" fill="#fff" font-size="14" text-anchor="middle">1</text>
                            <text x="70" y="22" fill="#FF6D00" font-size="15" font-weight="bold" text-anchor="middle">-7/4</text>
                        </svg>
                    </div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(iv) <div class="frac"><span class="num">7</span><span class="den">8</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">8</span></div> lies between 0 and 1.</div>
                    <div class="diagram-container">
                        <svg viewBox="0 0 320 90" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <line x1="20" y1="45" x2="300" y2="45" stroke="#fff" stroke-width="2" />
                            <path d="M 20 45 L 28 40 M 20 45 L 28 50 M 300 45 L 292 40 M 300 45 L 292 50" stroke="#fff" stroke-width="2" fill="none" />
                            <line x1="40" y1="38" x2="40" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="40" y="70" fill="#fff" font-size="14" text-anchor="middle">-1</text>
                            <line x1="120" y1="38" x2="120" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="120" y="70" fill="#fff" font-size="14" text-anchor="middle">0</text>
                            <line x1="130" y1="41" x2="130" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="140" y1="41" x2="140" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="150" y1="41" x2="150" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="160" y1="41" x2="160" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="170" y1="41" x2="170" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="180" y1="41" x2="180" y2="49" stroke="#FFB74D" stroke-width="1.5" />
                            <line x1="190" y1="38" x2="190" y2="52" stroke="#FF6D00" stroke-width="2.5" />
                            <circle cx="190" cy="45" r="7" stroke="#FF6D00" stroke-width="2" fill="none" />
                            <line x1="200" y1="38" x2="200" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="200" y="70" fill="#fff" font-size="14" text-anchor="middle">1</text>
                            <line x1="280" y1="38" x2="280" y2="52" stroke="#fff" stroke-width="2" />
                            <text x="280" y="70" fill="#fff" font-size="14" text-anchor="middle">2</text>
                            <text x="190" y="22" fill="#FF6D00" font-size="15" font-weight="bold" text-anchor="middle">7/8</text>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="sol-card">
                <div class="question-header">5. The points P, Q, R, S, T, U, A and B on the number line are such that, TR = RS = SU and AP = PQ = QB. Name the rational numbers represented by P, Q, R and S.</div>
                <div class="sol-body">
                    <div class="diagram-container">
                        <svg viewBox="0 0 340 95" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
                            <line x1="15" y1="50" x2="325" y2="50" stroke="#fff" stroke-width="2" />
                            <path d="M 15 50 L 23 45 M 15 50 L 23 55 M 325 50 L 317 45 M 325 50 L 317 55" stroke="#fff" stroke-width="2" fill="none" />
                            <line x1="30" y1="43" x2="30" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="30" y="75" fill="#fff" font-size="13" text-anchor="middle">-4</text>
                            <line x1="65" y1="43" x2="65" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="65" y="75" fill="#fff" font-size="13" text-anchor="middle">-3</text>
                            <line x1="100" y1="43" x2="100" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="100" y="75" fill="#fff" font-size="13" text-anchor="middle">-2</text>
                            <text x="100" y="32" fill="#FFB74D" font-size="14" font-weight="bold" text-anchor="middle">U</text>
                            <line x1="120" y1="43" x2="120" y2="57" stroke="#FF6D00" stroke-width="2" />
                            <text x="120" y="32" fill="#FF6D00" font-size="14" font-weight="bold" text-anchor="middle">S</text>
                            <line x1="140" y1="43" x2="140" y2="57" stroke="#FF6D00" stroke-width="2" />
                            <text x="140" y="32" fill="#FF6D00" font-size="14" font-weight="bold" text-anchor="middle">R</text>
                            <line x1="160" y1="43" x2="160" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="160" y="75" fill="#fff" font-size="13" text-anchor="middle">-1</text>
                            <text x="160" y="32" fill="#FFB74D" font-size="14" font-weight="bold" text-anchor="middle">T</text>
                            <line x1="200" y1="43" x2="200" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="200" y="75" fill="#fff" font-size="13" text-anchor="middle">0</text>
                            <line x1="240" y1="43" x2="240" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="240" y="75" fill="#fff" font-size="13" text-anchor="middle">1</text>
                            <line x1="270" y1="43" x2="270" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="270" y="75" fill="#fff" font-size="13" text-anchor="middle">2</text>
                            <text x="270" y="32" fill="#FFB74D" font-size="14" font-weight="bold" text-anchor="middle">A</text>
                            <line x1="283" y1="43" x2="283" y2="57" stroke="#FF6D00" stroke-width="2" />
                            <text x="283" y="32" fill="#FF6D00" font-size="14" font-weight="bold" text-anchor="middle">P</text>
                            <line x1="296" y1="43" x2="296" y2="57" stroke="#FF6D00" stroke-width="2" />
                            <text x="296" y="32" fill="#FF6D00" font-size="14" font-weight="bold" text-anchor="middle">Q</text>
                            <line x1="310" y1="43" x2="310" y2="57" stroke="#fff" stroke-width="2" />
                            <text x="310" y="75" fill="#fff" font-size="13" text-anchor="middle">3</text>
                            <text x="310" y="32" fill="#FFB74D" font-size="14" font-weight="bold" text-anchor="middle">B</text>
                        </svg>
                    </div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Distance between 2 and 3 is divided into 3 equal parts:</div>
                    <div class="sol-step">P = 2 + <div class="frac"><span class="num">1</span><span class="den">3</span></div> = <div class="frac"><span class="num">7</span><span class="den">3</span></div></div>
                    <div class="sol-step">Q = 2 + <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">8</span><span class="den">3</span></div></div>
                    <div class="sol-step">Distance between -1 and -2 is divided into 3 equal parts:</div>
                    <div class="sol-step">R = -1 - <div class="frac"><span class="num">1</span><span class="den">3</span></div> = -<div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                    <div class="sol-step">S = -1 - <div class="frac"><span class="num">2</span><span class="den">3</span></div> = -<div class="frac"><span class="num">5</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">P = <div class="frac"><span class="num">7</span><span class="den">3</span></div>, Q = <div class="frac"><span class="num">8</span><span class="den">3</span></div>, R = -<div class="frac"><span class="num">4</span><span class="den">3</span></div>, S = -<div class="frac"><span class="num">5</span><span class="den">3</span></div></span></div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="sol-card">
                <div class="question-header">6. Which of the following pairs represents the same rational number?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">7</span><span class="den">21</span></div> and <div class="frac"><span class="num">3</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-<div class="frac"><span class="num">7 &divide; 7</span><span class="den">21 &divide; 7</span></div> = -<div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">3 &divide; 3</span><span class="den">9 &divide; 3</span></div> = <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step">Since -<div class="frac"><span class="num">1</span><span class="den">3</span></div> &ne; <div class="frac"><span class="num">1</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair does not represent the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -<div class="frac"><span class="num">16</span><span class="den">20</span></div> and <div class="frac"><span class="num">20</span><span class="den">-25</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-<div class="frac"><span class="num">16 &divide; 4</span><span class="den">20 &divide; 4</span></div> = -<div class="frac"><span class="num">4</span><span class="den">5</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">20 &divide; 5</span><span class="den">-25 &divide; 5</span></div> = -<div class="frac"><span class="num">4</span><span class="den">5</span></div></div>
                    <div class="sol-step">Since -<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">4</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair represents the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) <div class="frac"><span class="num">-2</span><span class="den">-3</span></div> and <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">-2</span><span class="den">-3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2</span><span class="den">3</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair represents the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">3</span><span class="den">5</span></div> and -<div class="frac"><span class="num">12</span><span class="den">20</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-<div class="frac"><span class="num">12 &divide; 4</span><span class="den">20 &divide; 4</span></div> = -<div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">Since -<div class="frac"><span class="num">3</span><span class="den">5</span></div> = -<div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair represents the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) <div class="frac"><span class="num">8</span><span class="den">-5</span></div> and -<div class="frac"><span class="num">24</span><span class="den">15</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">8</span><span class="den">-5</span></div> = -<div class="frac"><span class="num">8</span><span class="den">5</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">24 &divide; 3</span><span class="den">15 &divide; 3</span></div> = -<div class="frac"><span class="num">8</span><span class="den">5</span></div></div>
                    <div class="sol-step">Since -<div class="frac"><span class="num">8</span><span class="den">5</span></div> = -<div class="frac"><span class="num">8</span><span class="den">5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair represents the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vi) <div class="frac"><span class="num">1</span><span class="den">3</span></div> and -<div class="frac"><span class="num">1</span><span class="den">9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Since <div class="frac"><span class="num">1</span><span class="den">3</span></div> &ne; -<div class="frac"><span class="num">1</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair does not represent the same rational number.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vii) <div class="frac"><span class="num">-5</span><span class="den">-9</span></div> and <div class="frac"><span class="num">5</span><span class="den">-9</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">-5</span><span class="den">-9</span></div> = <div class="frac"><span class="num">5</span><span class="den">9</span></div>  and  <div class="frac"><span class="num">5</span><span class="den">-9</span></div> = -<div class="frac"><span class="num">5</span><span class="den">9</span></div></div>
                    <div class="sol-step">Since <div class="frac"><span class="num">5</span><span class="den">9</span></div> &ne; -<div class="frac"><span class="num">5</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">The given pair does not represent the same rational number.</span></div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="sol-card">
                <div class="question-header">7. Rewrite the following rational numbers in the simplest form:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">8</span><span class="den">6</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Dividing numerator and denominator by 2:</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">8 &divide; 2</span><span class="den">6 &divide; 2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) <div class="frac"><span class="num">25</span><span class="den">45</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Dividing numerator and denominator by 5:</div>
                    <div class="sol-step">= <div class="frac"><span class="num">25 &divide; 5</span><span class="den">45 &divide; 5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">44</span><span class="den">72</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Dividing numerator and denominator by 4:</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">44 &divide; 4</span><span class="den">72 &divide; 4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">11</span><span class="den">18</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">8</span><span class="den">10</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Dividing numerator and denominator by 2:</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">8 &divide; 2</span><span class="den">10 &divide; 2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">5</span></div></span></div>
                </div>
            </div>

            <!-- Question 8 -->
            <div class="sol-card">
                <div class="question-header">8. Fill in the boxes with the correct symbol out of &gt;, &lt;, and =.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">5</span><span class="den">7</span></div> [ ] <div class="frac"><span class="num">2</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">A negative rational number is always smaller than a positive rational number.</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">5</span><span class="den">7</span></div> [&lt;] <div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -<div class="frac"><span class="num">4</span><span class="den">5</span></div> [ ] -<div class="frac"><span class="num">5</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 7 is 35.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">4 &times; 7</span><span class="den">5 &times; 7</span></div> = -<div class="frac"><span class="num">28</span><span class="den">35</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">5</span><span class="den">7</span></div> = -<div class="frac"><span class="num">5 &times; 5</span><span class="den">7 &times; 5</span></div> = -<div class="frac"><span class="num">25</span><span class="den">35</span></div></div>
                    <div class="sol-step">Since -28 &lt; -25:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">5</span></div> [&lt;] -<div class="frac"><span class="num">5</span><span class="den">7</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">7</span><span class="den">8</span></div> [ ] <div class="frac"><span class="num">14</span><span class="den">-16</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step"><div class="frac"><span class="num">14 &divide; 2</span><span class="den">-16 &divide; 2</span></div> = -<div class="frac"><span class="num">7</span><span class="den">8</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">7</span><span class="den">8</span></div> [=] <div class="frac"><span class="num">14</span><span class="den">-16</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">8</span><span class="den">5</span></div> [ ] -<div class="frac"><span class="num">7</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 5 and 4 is 20.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">8</span><span class="den">5</span></div> = -<div class="frac"><span class="num">8 &times; 4</span><span class="den">5 &times; 4</span></div> = -<div class="frac"><span class="num">32</span><span class="den">20</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">7</span><span class="den">4</span></div> = -<div class="frac"><span class="num">7 &times; 5</span><span class="den">4 &times; 5</span></div> = -<div class="frac"><span class="num">35</span><span class="den">20</span></div></div>
                    <div class="sol-step">Since -32 &gt; -35:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">8</span><span class="den">5</span></div> [&gt;] -<div class="frac"><span class="num">7</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) <div class="frac"><span class="num">1</span><span class="den">-3</span></div> [ ] -<div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 3 and 4 is 12.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">1</span><span class="den">3</span></div> = -<div class="frac"><span class="num">1 &times; 4</span><span class="den">3 &times; 4</span></div> = -<div class="frac"><span class="num">4</span><span class="den">12</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">1</span><span class="den">4</span></div> = -<div class="frac"><span class="num">1 &times; 3</span><span class="den">4 &times; 3</span></div> = -<div class="frac"><span class="num">3</span><span class="den">12</span></div></div>
                    <div class="sol-step">Since -4 &lt; -3:</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">-3</span></div> [&lt;] -<div class="frac"><span class="num">1</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vi) <div class="frac"><span class="num">5</span><span class="den">-11</span></div> [ ] -<div class="frac"><span class="num">5</span><span class="den">11</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Both represent the same rational number -<div class="frac"><span class="num">5</span><span class="den">11</span></div>.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">-11</span></div> [=] -<div class="frac"><span class="num">5</span><span class="den">11</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vii) 0 [ ] -<div class="frac"><span class="num">7</span><span class="den">6</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Zero is always greater than any negative rational number.</div>
                    <div class="sol-step"><span class="ans-highlight">0 [&gt;] -<div class="frac"><span class="num">7</span><span class="den">6</span></div></span></div>
                </div>
            </div>

            <!-- Question 9 -->
            <div class="sol-card">
                <div class="question-header">9. Which is greater in each of the following:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">2</span><span class="den">3</span></div>, <div class="frac"><span class="num">5</span><span class="den">2</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 3 and 2 is 6.</div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">3</span></div> = <div class="frac"><span class="num">2 &times; 2</span><span class="den">3 &times; 2</span></div> = <div class="frac"><span class="num">4</span><span class="den">6</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">5</span><span class="den">2</span></div> = <div class="frac"><span class="num">5 &times; 3</span><span class="den">2 &times; 3</span></div> = <div class="frac"><span class="num">15</span><span class="den">6</span></div></div>
                    <div class="sol-step">Since 15 &gt; 4:</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">5</span><span class="den">2</span></div> is greater.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -<div class="frac"><span class="num">5</span><span class="den">6</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 6 and 3 is 6.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">4</span><span class="den">3</span></div> = -<div class="frac"><span class="num">4 &times; 2</span><span class="den">3 &times; 2</span></div> = -<div class="frac"><span class="num">8</span><span class="den">6</span></div></div>
                    <div class="sol-step">Since -5 &gt; -8:</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">5</span><span class="den">6</span></div> is greater.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">3</span><span class="den">4</span></div>, <div class="frac"><span class="num">2</span><span class="den">-3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 4 and 3 is 12.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">3</span><span class="den">4</span></div> = -<div class="frac"><span class="num">3 &times; 3</span><span class="den">4 &times; 3</span></div> = -<div class="frac"><span class="num">9</span><span class="den">12</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">-3</span></div> = -<div class="frac"><span class="num">2 &times; 4</span><span class="den">3 &times; 4</span></div> = -<div class="frac"><span class="num">8</span><span class="den">12</span></div></div>
                    <div class="sol-step">Since -8 &gt; -9:</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">2</span><span class="den">-3</span></div> is greater.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">1</span><span class="den">4</span></div>, <div class="frac"><span class="num">1</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Positive rational number is always greater than negative rational number.</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">4</span></div> is greater.</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) -3<div class="frac"><span class="num">2</span><span class="den">7</span></div>, -3<div class="frac"><span class="num">4</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">-3<div class="frac"><span class="num">2</span><span class="den">7</span></div> = -<div class="frac"><span class="num">23</span><span class="den">7</span></div> = -<div class="frac"><span class="num">23 &times; 5</span><span class="den">7 &times; 5</span></div> = -<div class="frac"><span class="num">115</span><span class="den">35</span></div></div>
                    <div class="sol-step">-3<div class="frac"><span class="num">4</span><span class="den">5</span></div> = -<div class="frac"><span class="num">19</span><span class="den">5</span></div> = -<div class="frac"><span class="num">19 &times; 7</span><span class="den">5 &times; 7</span></div> = -<div class="frac"><span class="num">133</span><span class="den">35</span></div></div>
                    <div class="sol-step">Since -115 &gt; -133:</div>
                    <div class="sol-step"><span class="ans-highlight">-3<div class="frac"><span class="num">2</span><span class="den">7</span></div> is greater.</span></div>
                </div>
            </div>

            <!-- Question 10 -->
            <div class="sol-card">
                <div class="question-header">10. Write the following rational numbers in ascending order:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) -<div class="frac"><span class="num">3</span><span class="den">5</span></div>, -<div class="frac"><span class="num">2</span><span class="den">5</span></div>, -<div class="frac"><span class="num">1</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Denominators are same. Comparing numerators: -3 &lt; -2 &lt; -1.</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">5</span></div> &lt; -<div class="frac"><span class="num">2</span><span class="den">5</span></div> &lt; -<div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) -<div class="frac"><span class="num">1</span><span class="den">3</span></div>, -<div class="frac"><span class="num">2</span><span class="den">9</span></div>, -<div class="frac"><span class="num">4</span><span class="den">3</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 3, 9, and 3 is 9.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">1</span><span class="den">3</span></div> = -<div class="frac"><span class="num">1 &times; 3</span><span class="den">3 &times; 3</span></div> = -<div class="frac"><span class="num">3</span><span class="den">9</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">2</span><span class="den">9</span></div> = -<div class="frac"><span class="num">2</span><span class="den">9</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">4</span><span class="den">3</span></div> = -<div class="frac"><span class="num">4 &times; 3</span><span class="den">3 &times; 3</span></div> = -<div class="frac"><span class="num">12</span><span class="den">9</span></div></div>
                    <div class="sol-step">Comparing numerators: -12 &lt; -3 &lt; -2</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">4</span><span class="den">3</span></div> &lt; -<div class="frac"><span class="num">1</span><span class="den">3</span></div> &lt; -<div class="frac"><span class="num">2</span><span class="den">9</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">3</span><span class="den">7</span></div>, -<div class="frac"><span class="num">3</span><span class="den">2</span></div>, -<div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 7, 2, and 4 is 28.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">3</span><span class="den">7</span></div> = -<div class="frac"><span class="num">3 &times; 4</span><span class="den">7 &times; 4</span></div> = -<div class="frac"><span class="num">12</span><span class="den">28</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">3</span><span class="den">2</span></div> = -<div class="frac"><span class="num">3 &times; 14</span><span class="den">2 &times; 14</span></div> = -<div class="frac"><span class="num">42</span><span class="den">28</span></div></div>
                    <div class="sol-step">-<div class="frac"><span class="num">3</span><span class="den">4</span></div> = -<div class="frac"><span class="num">3 &times; 7</span><span class="den">4 &times; 7</span></div> = -<div class="frac"><span class="num">21</span><span class="den">28</span></div></div>
                    <div class="sol-step">Comparing numerators: -42 &lt; -21 &lt; -12</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">2</span></div> &lt; -<div class="frac"><span class="num">3</span><span class="den">4</span></div> &lt; -<div class="frac"><span class="num">3</span><span class="den">7</span></div></span></div>
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
            .sol-body b, .subpart-title { color: #FF6D00; font-weight: bold; }
        </style>
        <div class="container">
            <!-- Question 1 -->
            <div class="sol-card">
                <div class="question-header">1. Find the sum:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) (<div class="frac"><span class="num">5</span><span class="den">4</span></div>) + (-<div class="frac"><span class="num">11</span><span class="den">4</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5 - 11</span><span class="den">4</span></div></div>
                    <div class="sol-step">= -<div class="frac"><span class="num">6</span><span class="den">4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) (<div class="frac"><span class="num">5</span><span class="den">3</span></div>) + (<div class="frac"><span class="num">3</span><span class="den">5</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 3 and 5 is 15.</div>
                    <div class="sol-step"><div class="frac"><span class="num">5</span><span class="den">3</span></div> = <div class="frac"><span class="num">5 &times; 5</span><span class="den">3 &times; 5</span></div> = <div class="frac"><span class="num">25</span><span class="den">15</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">5</span></div> = <div class="frac"><span class="num">3 &times; 3</span><span class="den">5 &times; 3</span></div> = <div class="frac"><span class="num">9</span><span class="den">15</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">25 + 9</span><span class="den">15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">34</span><span class="den">15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) (-<div class="frac"><span class="num">9</span><span class="den">10</span></div>) + (<div class="frac"><span class="num">22</span><span class="den">15</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 10 and 15 is 30.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">9</span><span class="den">10</span></div> = -<div class="frac"><span class="num">9 &times; 3</span><span class="den">10 &times; 3</span></div> = -<div class="frac"><span class="num">27</span><span class="den">30</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">22</span><span class="den">15</span></div> = <div class="frac"><span class="num">22 &times; 2</span><span class="den">15 &times; 2</span></div> = <div class="frac"><span class="num">44</span><span class="den">30</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-27 + 44</span><span class="den">30</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">17</span><span class="den">30</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) (-<div class="frac"><span class="num">3</span><span class="den">-11</span></div>) + (<div class="frac"><span class="num">5</span><span class="den">9</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3</span><span class="den">11</span></div> + <div class="frac"><span class="num">5</span><span class="den">9</span></div></div>
                    <div class="sol-step">LCM of 11 and 9 is 99.</div>
                    <div class="sol-step"><div class="frac"><span class="num">3</span><span class="den">11</span></div> = <div class="frac"><span class="num">3 &times; 9</span><span class="den">11 &times; 9</span></div> = <div class="frac"><span class="num">27</span><span class="den">99</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">5</span><span class="den">9</span></div> = <div class="frac"><span class="num">5 &times; 11</span><span class="den">9 &times; 11</span></div> = <div class="frac"><span class="num">55</span><span class="den">99</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">27 + 55</span><span class="den">99</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">82</span><span class="den">99</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) (-<div class="frac"><span class="num">8</span><span class="den">19</span></div>) + (-<div class="frac"><span class="num">2</span><span class="den">57</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 19 and 57 is 57.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">8</span><span class="den">19</span></div> = -<div class="frac"><span class="num">8 &times; 3</span><span class="den">19 &times; 3</span></div> = -<div class="frac"><span class="num">24</span><span class="den">57</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-24 - 2</span><span class="den">57</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">26</span><span class="den">57</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vi) -<div class="frac"><span class="num">2</span><span class="den">3</span></div> + 0</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Adding 0 to any rational number gives the number itself.</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">2</span><span class="den">3</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vii) -2<div class="frac"><span class="num">1</span><span class="den">3</span></div> + 4<div class="frac"><span class="num">3</span><span class="den">5</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">7</span><span class="den">3</span></div> + <div class="frac"><span class="num">23</span><span class="den">5</span></div></div>
                    <div class="sol-step">LCM of 3 and 5 is 15.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">7</span><span class="den">3</span></div> = -<div class="frac"><span class="num">7 &times; 5</span><span class="den">3 &times; 5</span></div> = -<div class="frac"><span class="num">35</span><span class="den">15</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">23</span><span class="den">5</span></div> = <div class="frac"><span class="num">23 &times; 3</span><span class="den">5 &times; 3</span></div> = <div class="frac"><span class="num">69</span><span class="den">15</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-35 + 69</span><span class="den">15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">34</span><span class="den">15</span></div></span></div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="sol-card">
                <div class="question-header">2. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) <div class="frac"><span class="num">7</span><span class="den">24</span></div> - <div class="frac"><span class="num">17</span><span class="den">36</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 24 and 36 is 72.</div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">24</span></div> = <div class="frac"><span class="num">7 &times; 3</span><span class="den">24 &times; 3</span></div> = <div class="frac"><span class="num">21</span><span class="den">72</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">17</span><span class="den">36</span></div> = <div class="frac"><span class="num">17 &times; 2</span><span class="den">36 &times; 2</span></div> = <div class="frac"><span class="num">34</span><span class="den">72</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">21 - 34</span><span class="den">72</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">13</span><span class="den">72</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) <div class="frac"><span class="num">5</span><span class="den">63</span></div> - (-<div class="frac"><span class="num">6</span><span class="den">21</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">5</span><span class="den">63</span></div> + <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                    <div class="sol-step">LCM of 63 and 7 is 63.</div>
                    <div class="sol-step"><div class="frac"><span class="num">2</span><span class="den">7</span></div> = <div class="frac"><span class="num">2 &times; 9</span><span class="den">7 &times; 9</span></div> = <div class="frac"><span class="num">18</span><span class="den">63</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">5 + 18</span><span class="den">63</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">23</span><span class="den">63</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) -<div class="frac"><span class="num">6</span><span class="den">13</span></div> - (-<div class="frac"><span class="num">7</span><span class="den">15</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">6</span><span class="den">13</span></div> + <div class="frac"><span class="num">7</span><span class="den">15</span></div></div>
                    <div class="sol-step">LCM of 13 and 15 is 195.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">6</span><span class="den">13</span></div> = -<div class="frac"><span class="num">6 &times; 15</span><span class="den">13 &times; 15</span></div> = -<div class="frac"><span class="num">90</span><span class="den">195</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">15</span></div> = <div class="frac"><span class="num">7 &times; 13</span><span class="den">15 &times; 13</span></div> = <div class="frac"><span class="num">91</span><span class="den">195</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-90 + 91</span><span class="den">195</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">195</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) -<div class="frac"><span class="num">3</span><span class="den">8</span></div> - <div class="frac"><span class="num">7</span><span class="den">11</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">LCM of 8 and 11 is 88.</div>
                    <div class="sol-step">-<div class="frac"><span class="num">3</span><span class="den">8</span></div> = -<div class="frac"><span class="num">3 &times; 11</span><span class="den">8 &times; 11</span></div> = -<div class="frac"><span class="num">33</span><span class="den">88</span></div></div>
                    <div class="sol-step"><div class="frac"><span class="num">7</span><span class="den">11</span></div> = <div class="frac"><span class="num">7 &times; 8</span><span class="den">11 &times; 8</span></div> = <div class="frac"><span class="num">56</span><span class="den">88</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-33 - 56</span><span class="den">88</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">89</span><span class="den">88</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) -2<div class="frac"><span class="num">1</span><span class="den">9</span></div> - 6</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">19</span><span class="den">9</span></div> - 6</div>
                    <div class="sol-step">LCM of 9 and 1 is 9.</div>
                    <div class="sol-step">6 = <div class="frac"><span class="num">6 &times; 9</span><span class="den">1 &times; 9</span></div> = <div class="frac"><span class="num">54</span><span class="den">9</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-19 - 54</span><span class="den">9</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">73</span><span class="den">9</span></div></span></div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="sol-card">
                <div class="question-header">3. Find the product:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) (<div class="frac"><span class="num">9</span><span class="den">2</span></div>) &times; (-<div class="frac"><span class="num">7</span><span class="den">4</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">9 &times; (-7)</span><span class="den">2 &times; 4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">63</span><span class="den">8</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) (<div class="frac"><span class="num">3</span><span class="den">10</span></div>) &times; (-9)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 &times; (-9)</span><span class="den">10</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">27</span><span class="den">10</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) (-<div class="frac"><span class="num">6</span><span class="den">5</span></div>) &times; (<div class="frac"><span class="num">9</span><span class="den">11</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">(-6) &times; 9</span><span class="den">5 &times; 11</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">54</span><span class="den">55</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) (<div class="frac"><span class="num">3</span><span class="den">7</span></div>) &times; (-<div class="frac"><span class="num">2</span><span class="den">5</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 &times; (-2)</span><span class="den">7 &times; 5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">6</span><span class="den">35</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) (<div class="frac"><span class="num">3</span><span class="den">11</span></div>) &times; (<div class="frac"><span class="num">2</span><span class="den">5</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 &times; 2</span><span class="den">11 &times; 5</span></div></div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">6</span><span class="den">55</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vi) (<div class="frac"><span class="num">3</span><span class="den">-5</span></div>) &times; (-<div class="frac"><span class="num">5</span><span class="den">3</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 &times; (-5)</span><span class="den">(-5) &times; 3</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">-15</span><span class="den">-15</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">1</span></div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="sol-card">
                <div class="question-header">4. Find the value of:</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) (-4) &divide; (<div class="frac"><span class="num">2</span><span class="den">3</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -4 &times; <div class="frac"><span class="num">3</span><span class="den">2</span></div></div>
                    <div class="sol-step">= -<div class="frac"><span class="num">12</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-6</span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(ii) (-<div class="frac"><span class="num">3</span><span class="den">5</span></div>) &divide; 2</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">3</span><span class="den">10</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iii) (-<div class="frac"><span class="num">4</span><span class="den">5</span></div>) &divide; (-3)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; (-<div class="frac"><span class="num">1</span><span class="den">3</span></div>)</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">4</span><span class="den">15</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(iv) (-<div class="frac"><span class="num">1</span><span class="den">8</span></div>) &divide; <div class="frac"><span class="num">3</span><span class="den">4</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">1</span><span class="den">8</span></div> &times; <div class="frac"><span class="num">4</span><span class="den">3</span></div></div>
                    <div class="sol-step">= -<div class="frac"><span class="num">4</span><span class="den">24</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">1</span><span class="den">6</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(v) (-<div class="frac"><span class="num">2</span><span class="den">13</span></div>) &divide; <div class="frac"><span class="num">1</span><span class="den">7</span></div></b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">2</span><span class="den">13</span></div> &times; 7</div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">14</span><span class="den">13</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vi) (-<div class="frac"><span class="num">7</span><span class="den">12</span></div>) &divide; (-<div class="frac"><span class="num">2</span><span class="den">13</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= -<div class="frac"><span class="num">7</span><span class="den">12</span></div> &times; (-<div class="frac"><span class="num">13</span><span class="den">2</span></div>)</div>
                    <div class="sol-step"><span class="ans-highlight"><div class="frac"><span class="num">91</span><span class="den">24</span></div></span></div>

                    <div class="sol-step" style="margin-top: 20px;"><b>(vii) (<div class="frac"><span class="num">3</span><span class="den">13</span></div>) &divide; (-<div class="frac"><span class="num">4</span><span class="den">65</span></div>)</b></div>
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">= <div class="frac"><span class="num">3</span><span class="den">13</span></div> &times; <div class="frac"><span class="num">65</span><span class="den">-4</span></div></div>
                    <div class="sol-step">= <div class="frac"><span class="num">3 &times; 5</span><span class="den">-4</span></div></div>
                    <div class="sol-step"><span class="ans-highlight">-<div class="frac"><span class="num">15</span><span class="den">4</span></div></span></div>
                </div>
            </div>
        </div>
    `,
  },
  examples: [],
  mcqs: [
    {
      id: "c7g8-mcq-1",
      question: "Which of the following is a rational number?",
      options: ["5", "-2/3", "0", "All of these"],
      correctAnswer: "d",
      explanation: "Every integer, negative fraction, and zero can be written in p/q form (q ≠ 0), so all are rational numbers."
    },
    {
      id: "c7g8-mcq-2",
      question: "In a rational number p/q, the value of q cannot be:",
      options: ["1", "-1", "0", "10"],
      correctAnswer: "c",
      explanation: "The denominator 'q' in a rational number p/q can never be zero."
    },
    {
      id: "c7g8-mcq-3",
      question: "What is the standard form of -18/12?",
      options: ["-3/2", "3/-2", "-9/6", "1.5"],
      correctAnswer: "a",
      explanation: "Dividing numerator -18 and denominator 12 by their HCF 6 gives -3/2."
    },
    {
      id: "c7g8-mcq-4",
      question: "What is the reciprocal of -5/7?",
      options: ["5/7", "7/5", "-7/5", "1"],
      correctAnswer: "c",
      explanation: "Swapping the numerator and denominator of -5/7 gives -7/5."
    },
    {
      id: "c7g8-mcq-5",
      question: "The number 0 is:",
      options: ["Positive rational number", "Negative rational number", "Neither positive nor negative", "Undefined"],
      correctAnswer: "c",
      explanation: "Zero is a rational number (0/1), but it is neither positive nor negative."
    },
    {
      id: "c7g8-mcq-6",
      question: "Which correct symbol fills -4/5 [ ] -5/7?",
      options: [">", "<", "=", "None"],
      correctAnswer: "b",
      explanation: "-4/5 = -28/35 and -5/7 = -25/35. Since -28 < -25, -4/5 < -5/7."
    },
    {
      id: "c7g8-mcq-7",
      question: "The product of any rational number and its reciprocal is:",
      options: ["0", "1", "-1", "The number itself"],
      correctAnswer: "b",
      explanation: "Multiplying any non-zero rational number (p/q) by its reciprocal (q/p) always equals 1."
    },
    {
      id: "c7g8-mcq-8",
      question: "What is the value of -2/3 + 0?",
      options: ["0", "2/3", "-2/3", "1"],
      correctAnswer: "c",
      explanation: "Adding 0 to any rational number leaves the number unchanged."
    },
    {
      id: "c7g8-mcq-9",
      question: "What is the result of (3/5) × (-5/3)?",
      options: ["1", "-1", "0", "15/15"],
      correctAnswer: "b",
      explanation: "(3 × -5)/(5 × 3) = -15/15 = -1."
    },
    {
      id: "c7g8-mcq-10",
      question: "Which of the following rational numbers is greater: -1/4 or 1/4?",
      options: ["-1/4", "1/4", "Both are equal", "Cannot be determined"],
      correctAnswer: "b",
      explanation: "A positive rational number is always greater than a negative rational number."
    }
  ],
  summary: [],
};
