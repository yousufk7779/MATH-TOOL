import { ChapterContent } from "../types";

const ex71Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FB8C00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FB8C00; padding-left: 15px; margin-top: 15px; background: rgba(251, 140, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FB8C00; font-weight: 700; }
    .step-label { color: #FFB74D; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Find the ratio of the following.</div>
      <div class="q-subtext">(a) Speed of a cycle 15 km per hour to the speed of scooter 30 km per hour.</div>
      <div class="q-subtext">(b) 5 m to 10 km</div>
      <div class="q-subtext">(c) 50 paise to Rs 5</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(a)</span> Ratio of speed of cycle to scooter = 15 <span class='frac'><span class='num'>km</span><span class='den'>h</span></span> : 30 <span class='frac'><span class='num'>km</span><span class='den'>h</span></span></div>
        <div class="sol-step">= <span class='frac'><span class='num'>15</span><span class='den'>30</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span> = <span class="ans-highlight">1 : 2</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> Since 1 km = 1000 m, 10 km = 10 × 1000 = 10000 m.</div>
        <div class="sol-step">Ratio = 5 m : 10000 m</div>
        <div class="sol-step">= <span class='frac'><span class='num'>5</span><span class='den'>10000</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>2000</span></span> = <span class="ans-highlight">1 : 2000</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(c)</span> Since Rs 1 = 100 paise, Rs 5 = 5 × 100 = 500 paise.</div>
        <div class="sol-step">Ratio = 50 paise : 500 paise</div>
        <div class="sol-step">= <span class='frac'><span class='num'>50</span><span class='den'>500</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>10</span></span> = <span class="ans-highlight">1 : 10</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Convert the following ratios to percentages.</div>
      <div class="q-subtext">(a) 3 : 4</div>
      <div class="q-subtext">(b) 2 : 3</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step"><span class="step-label">(a)</span> 3 : 4 = <span class='frac'><span class='num'>3</span><span class='den'>4</span></span></div>
        <div class="sol-step">Percentage = (<span class='frac'><span class='num'>3</span><span class='den'>4</span></span>) × 100% = 3 × 25% = <span class="ans-highlight">75%</span></div>
        <br/>
        <div class="sol-step"><span class="step-label">(b)</span> 2 : 3 = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span></div>
        <div class="sol-step">Percentage = (<span class='frac'><span class='num'>2</span><span class='den'>3</span></span>) × 100% = <span class='frac'><span class='num'>200</span><span class='den'>3</span></span> % = <span class="ans-highlight">66 <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> %</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. 72% of 25 students are good in mathematics. How many are not good in mathematics?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Percentage of students good in mathematics = 72%</div>
        <div class="sol-step">Percentage of students not good in mathematics = 100% - 72% = 28%</div>
        <div class="sol-step">Number of students not good = 28% of 25</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>28</span><span class='den'>100</span></span>) × 25 = <span class='frac'><span class='num'>28</span><span class='den'>4</span></span> = <span class="ans-highlight">7</span></div>
        <div class="sol-step">Therefore, 7 students are not good in mathematics.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. A football team won 10 matches out of the total number of matches they played. If their win percentage was 40, then how many matches did they play in all?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the total number of matches played be x.</div>
        <div class="sol-step">Win percentage = 40%</div>
        <div class="sol-step">Number of matches won = 40% of x = 10</div>
        <div class="sol-step">=> (<span class='frac'><span class='num'>40</span><span class='den'>100</span></span>) × x = 10</div>
        <div class="sol-step">=> x = (10 × 100) / 40 = <span class='frac'><span class='num'>100</span><span class='den'>4</span></span></div>
        <div class="sol-step">=> x = <span class="ans-highlight">25</span></div>
        <div class="sol-step">Therefore, they played 25 matches in all.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. If Insha had Rs 600 left after spending 75% of her money, how much did she have in the beginning?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the total money Insha had be Rs x.</div>
        <div class="sol-step">Percentage of money spent = 75%</div>
        <div class="sol-step">Percentage of money left = 100% - 75% = 25%</div>
        <div class="sol-step">Money left = 25% of x = Rs 600</div>
        <div class="sol-step">=> (<span class='frac'><span class='num'>25</span><span class='den'>100</span></span>) × x = 600</div>
        <div class="sol-step">=> x = (600 × 100) / 25 = 600 × 4</div>
        <div class="sol-step">=> x = <span class="ans-highlight">2400</span></div>
        <div class="sol-step">Therefore, she had Rs 2400 in the beginning.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. If 60% people in a city like cricket, 30% like football and the remaining like other games, then what per cent of the people like other games? If the total number of people are 50 lakh, find the exact number who like each type of game.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Percentage of people who like cricket = 60%</div>
        <div class="sol-step">Percentage of people who like football = 30%</div>
        <div class="sol-step">Percentage of people who like other games = 100% - (60% + 30%) = 100% - 90% = <span class="ans-highlight">10%</span></div>
        <br/>
        <div class="sol-step">Total number of people = 50 lakh</div>
        <div class="sol-step">Number of people who like cricket = 60% of 50 lakh</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>60</span><span class='den'>100</span></span>) × 50 = <span class="ans-highlight">30 lakh</span></div>
        <br/>
        <div class="sol-step">Number of people who like football = 30% of 50 lakh</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>30</span><span class='den'>100</span></span>) × 50 = <span class="ans-highlight">15 lakh</span></div>
        <br/>
        <div class="sol-step">Number of people who like other games = 10% of 50 lakh</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>10</span><span class='den'>100</span></span>) × 50 = <span class="ans-highlight">5 lakh</span></div>
      </div>
    </div>
  </div>
`;

const ex72Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FB8C00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FB8C00; padding-left: 15px; margin-top: 15px; background: rgba(251, 140, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FB8C00; font-weight: 700; }
    .step-label { color: #FFB74D; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. The price of a TV is Rs 13,000. The sales tax charged on it is at the rate of 12%. Find the amount that Faheem will have to pay if he buys it.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Price of TV = Rs 13,000</div>
        <div class="sol-step">Sales tax rate = 12%</div>
        <div class="sol-step">Sales tax amount = 12% of 13000</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>12</span><span class='den'>100</span></span>) × 13000 = 12 × 130 = Rs 1560</div>
        <div class="sol-step">Total amount to be paid = Price + Sales tax</div>
        <div class="sol-step">= 13000 + 1560 = <span class="ans-highlight">Rs 14,560</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Akram bought a pair of skates at a sale where the discount given was 20%. If the amount he pays is Rs 1,600, find the marked price.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the marked price be Rs x.</div>
        <div class="sol-step">Discount given = 20%</div>
        <div class="sol-step">Amount paid = Marked price - Discount = (100% - 20%) of x = 80% of x</div>
        <div class="sol-step">80% of x = Rs 1600</div>
        <div class="sol-step">=> (<span class='frac'><span class='num'>80</span><span class='den'>100</span></span>) × x = 1600</div>
        <div class="sol-step">=> x = (1600 × 100) / 80 = 20 × 100</div>
        <div class="sol-step">=> x = <span class="ans-highlight">Rs 2000</span></div>
        <div class="sol-step">Therefore, the marked price is Rs 2000.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. I purchased a hair-dryer for Rs 5,400 including 8% VAT. Find the price before VAT was added.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the price before VAT be Rs x.</div>
        <div class="sol-step">VAT rate = 8%</div>
        <div class="sol-step">Price including VAT = Original price + VAT = (100% + 8%) of x = 108% of x</div>
        <div class="sol-step">108% of x = Rs 5400</div>
        <div class="sol-step">=> (<span class='frac'><span class='num'>108</span><span class='den'>100</span></span>) × x = 5400</div>
        <div class="sol-step">=> x = (5400 × 100) / 108 = 50 × 100</div>
        <div class="sol-step">=> x = <span class="ans-highlight">Rs 5000</span></div>
        <div class="sol-step">Therefore, the price before VAT was added is Rs 5000.</div>
      </div>
    </div>
  </div>
`;

const ex73Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #FB8C00; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #FB8C00; padding-left: 15px; margin-top: 15px; background: rgba(251, 140, 0, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #FB8C00; font-weight: 700; }
    .step-label { color: #FFB74D; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. The population of a place increased to 54,000 in 2003 at a rate of 5% per annum</div>
      <div class="q-subtext">(i) find the population in 2001.</div>
      <div class="q-subtext">(ii) what would be its population in 2005?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Using formula A = P(1 + <span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)ⁿ</div>
        <br/>
        <div class="sol-step"><span class="step-label">(i) Population in 2001:</span></div>
        <div class="sol-step">A (Population in 2003) = 54,000. R = 5%. n = 2 years.</div>
        <div class="sol-step">54000 = P(1 + <span class='frac'><span class='num'>5</span><span class='den'>100</span></span>)²</div>
        <div class="sol-step">=> 54000 = P(<span class='frac'><span class='num'>105</span><span class='den'>100</span></span>)² = P(<span class='frac'><span class='num'>21</span><span class='den'>20</span></span>)²</div>
        <div class="sol-step">=> P = (54000 × 400) / 441</div>
        <div class="sol-step">=> P ≈ 48979.59</div>
        <div class="sol-step">Approximate population in 2001 is <span class="ans-highlight">48,980</span>.</div>
        <br/>
        <div class="sol-step"><span class="step-label">(ii) Population in 2005:</span></div>
        <div class="sol-step">P (Population in 2003) = 54,000. R = 5%. n = 2 years.</div>
        <div class="sol-step">A = 54000(1 + <span class='frac'><span class='num'>5</span><span class='den'>100</span></span>)²</div>
        <div class="sol-step">=> A = 54000 × (<span class='frac'><span class='num'>21</span><span class='den'>20</span></span>) × (<span class='frac'><span class='num'>21</span><span class='den'>20</span></span>)</div>
        <div class="sol-step">=> A = 135 × 441 = <span class="ans-highlight">59,535</span></div>
        <div class="sol-step">Therefore, population in 2005 will be 59,535.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. In a Laboratory, the count of bacteria in a certain experiment was increasing at the rate of 2.5% per hour. Find the bacteria at the end of 2 hours if the count was initially 5,06,000.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Initial count (P) = 5,06,000</div>
        <div class="sol-step">Rate of increase (R) = 2.5% per hour</div>
        <div class="sol-step">Time (n) = 2 hours</div>
        <div class="sol-step">Count after 2 hours (A) = P(1 + <span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)ⁿ</div>
        <div class="sol-step">= 506000(1 + 2.<span class='frac'><span class='num'>5</span><span class='den'>100</span></span>)² = 506000(1 + <span class='frac'><span class='num'>1</span><span class='den'>40</span></span>)²</div>
        <div class="sol-step">= 506000(<span class='frac'><span class='num'>41</span><span class='den'>40</span></span>)² = 506000 × (<span class='frac'><span class='num'>1681</span><span class='den'>1600</span></span>)</div>
        <div class="sol-step">= 316.25 × 1681 ≈ 531616.25</div>
        <div class="sol-step">Approximate bacteria count is <span class="ans-highlight">5,31,616</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. A scooter was bought at Rs 42,000. Its value depreciated at the rate of 8% per annum. Find its value after one year.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Initial value = Rs 42,000</div>
        <div class="sol-step">Depreciation rate = 8% per annum</div>
        <div class="sol-step">Depreciation amount = 8% of 42000</div>
        <div class="sol-step">= (<span class='frac'><span class='num'>8</span><span class='den'>100</span></span>) × 42000 = 8 × 420 = Rs 3360</div>
        <div class="sol-step">Value after one year = Initial value - Depreciation amount</div>
        <div class="sol-step">= 42000 - 3360 = <span class="ans-highlight">Rs 38,640</span></div>
      </div>
    </div>
  </div>
`;

export const c8Math7: ChapterContent = {
  id: "c8-math-7",
  number: 7,
  title: "Comparing Quantities",
  introduction:
    "In this chapter, we will learn about ratios, percentages, and their applications in real-life scenarios like discounts, taxes, and compound interest.",
  mcqs: [
    {
      id: "m1",
      question: "The ratio 3:4 expressed as a percentage is:",
      options: ["40%", "60%", "75%", "80%"],
      correctAnswer: "75%",
    },
    {
      id: "m2",
      question:
        "If 50% of students like apples out of 40 students, how many like apples?",
      options: ["10", "20", "30", "40"],
      correctAnswer: "20",
    },
    {
      id: "m3",
      question:
        "The price of an item is Rs 100. If 10% tax is added, what is the final price?",
      options: ["Rs 90", "Rs 100", "Rs 110", "Rs 120"],
      correctAnswer: "Rs 110",
    },
    {
      id: "m4",
      question: "Discount is always calculated on which price?",
      options: ["Selling Price", "Cost Price", "Marked Price", "None of these"],
      correctAnswer: "Marked Price",
    },
    {
      id: "m5",
      question: "What is 20% of 50?",
      options: ["10", "20", "25", "5"],
      correctAnswer: "10",
    },
    {
      id: "m6",
      question:
        "If an item of Rs 500 is sold at 10% discount, the selling price is:",
      options: ["Rs 400", "Rs 450", "Rs 490", "Rs 550"],
      correctAnswer: "Rs 450",
    },
    {
      id: "m7",
      question: "Which formula calculates compound amount?",
      options: [
        "A = P(1+<span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)",
        "A = P(1-<span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)",
        "A = P(1+<span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)ⁿ",
        "A = P×R×<span class='frac'><span class='num'>T</span><span class='den'>100</span></span>",
      ],
      correctAnswer:
        "A = P(1+<span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)ⁿ",
    },
    {
      id: "m8",
      question: "1 km is equal to how many meters?",
      options: ["10", "100", "1000", "10000"],
      correctAnswer: "1000",
    },
    {
      id: "m9",
      question: "Depreciation means:",
      options: [
        "Increase in value",
        "Decrease in value",
        "No change in value",
        "Double the value",
      ],
      correctAnswer: "Decrease in value",
    },
    {
      id: "m10",
      question: "The ratio of 50 paise to Rs 1 is:",
      options: ["1:2", "2:1", "1:1", "50:1"],
      correctAnswer: "1:2",
    },
  ],
  summary: [
    "A ratio is a comparison of two quantities using division.",
    "Percentages are ratios expressed as a fraction of 100.",
    "Discount is a reduction given on the Marked Price (MP) of an article.",
    "Sales tax and Value Added Tax (VAT) are charged on the sale of an item and are added to the bill amount.",
    "Compound interest calculates interest on the initial principal and also on the accumulated interest of previous periods.",
  ],
  exercises: [
    { id: "ex7-1", name: "Exercise 7.1", questions: [] },
    { id: "ex7-2", name: "Exercise 7.2", questions: [] },
    { id: "ex7-3", name: "Exercise 7.3", questions: [] },
  ],
  isHtmlView: true,
  htmlOverview: `
    <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
      
      .premium-container {
        padding: 20px;
        color: #ffffff;
        font-family: 'Outfit', sans-serif !important;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .section-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        backdrop-filter: blur(10px);
      }

      .section-header {
        color: #FB8C00;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .prop-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        overflow: hidden;
      }

      .prop-table th, .prop-table td {
        padding: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #FFB74D;
        font-weight: 700;
      }

      .highlight { color: #FFB74D; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }

      .formula-badge {
        background: rgba(251, 140, 0, 0.2);
        border: 1px dashed #FB8C00;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #FFB74D;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          Comparing Quantities helps us measure and express how one quantity relates to another. We use <strong>ratios</strong> and <strong>percentages</strong> to understand shares, calculate taxes, discounts, and compound interest effectively.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Important Formulas</div>
        <table class="prop-table">
          <tr>
            <th>Concept</th>
            <th>Formula</th>
          </tr>
          <tr>
            <td><strong>Discount</strong></td>
            <td>
              Discount = <span class="highlight">Marked Price - Sale Price</span>
            </td>
          </tr>
          <tr>
            <td><strong>Sales <span class='frac'><span class='num'>Tax</span><span class='den'>VAT</span></span></strong></td>
            <td>
              Tax = <span class="highlight">(Tax Rate % × Cost Price)</span>
            </td>
          </tr>
          <tr>
            <td><strong>Compound Amount</strong></td>
            <td>
              <div class="formula-badge">A = P(1 + <span class='frac'><span class='num'>R</span><span class='den'>100</span></span>)ⁿ</div>
              Where P = Principal, R = Rate, n = Time in years.
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex7-1": ex71Content,
    "ex7-2": ex72Content,
    "ex7-3": ex73Content,
  },
};
