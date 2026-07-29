import { ChapterContent } from "../types";

export const c7Math7: ChapterContent = {
  id: "c7-math-7",
  number: 7,
  title: "Comparing Quantities",
  isHtmlView: true,
  introduction:
    "Comparing quantities is part of our daily life. Whether it is price, height, or scores, we use percentages, profit and loss, and simple interest to understand relative values.",
  definitions: [
    {
      term: "Percentage",
      description: "A fraction with denominator 100, represented by the % symbol.",
    },
    {
      term: "Profit",
      description: "When Selling Price (SP) is greater than Cost Price (CP): Profit = SP - CP.",
    },
    {
      term: "Loss",
      description: "When Cost Price (CP) is greater than Selling Price (SP): Loss = CP - SP.",
    },
    {
      term: "Simple Interest",
      description: "Interest calculated on the principal amount over time: SI = (P × R × T) / 100.",
    },
  ],
  keyPoints: [
    "Percentage = (Value / Total) × 100",
    "Profit% = (Profit / CP) × 100; Loss% = (Loss / CP) × 100",
    "Simple Interest (SI) = (P × R × T) / 100",
    "Amount = Principal + Simple Interest",
  ],
  formulas: [
    { name: "Profit Percentage", formula: "(Profit / CP) × 100" },
    { name: "Loss Percentage", formula: "(Loss / CP) × 100" },
    { name: "Simple Interest", formula: "(P × R × T) / 100" },
    { name: "Total Amount", formula: "Principal + Interest" },
  ],
  crux: [],
  exercises: [
    { id: "ex7-1", name: "Exercise 7.1", questions: [] },
    { id: "ex7-2", name: "Exercise 7.2", questions: [] },
  ],
  htmlOverview: `
        <style>
            .overview-container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .section-title { color: #FFA726; font-size: 1.4em; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
            .content-text { line-height: 1.8; font-size: 1.05em; color: #E0E0E0; text-align: justify; }
            .point-box { background: rgba(255, 167, 38, 0.05); border-left: 4px solid #FFA726; padding: 15px; margin-top: 20px; border-radius: 0 12px 12px 0; }
            .point-item { margin-bottom: 10px; list-style: none; display: flex; align-items: flex-start; text-align: justify; }
            .point-item::before { content: '•'; color: #FFA726; font-weight: bold; margin-right: 10px; font-size: 1.2em; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="overview-container">
            <p class="content-text">Learn how to analyze percentages and manage financial calculations like profit, loss, and simple interest according to the latest Class 7 NCERT syllabus.</p>
            <div class="point-box">
                <div class="point-item">Percentage means 'per hundred'.</div>
                <div class="point-item">Profit or Loss is always calculated on the Cost Price (CP).</div>
                <div class="point-item">Simple Interest (SI) = <div class="frac"><span class="num">P &times; R &times; T</span><span class="den">100</span></div>.</div>
            </div>
        </div>
    `,
  htmlExercises: {
    "ex7-1": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FFA726; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FFA726; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(255, 167, 38, 0.3); text-align: center; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FFA726; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Convert the given fractional numbers to per cent:<br/>(a) <div class="frac"><span class="num">1</span><span class="den">8</span></div> &nbsp; (b) <div class="frac"><span class="num">5</span><span class="den">4</span></div> &nbsp; (c) <div class="frac"><span class="num">3</span><span class="den">40</span></div> &nbsp; (d) <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) <div class="frac"><span class="num">1</span><span class="den">8</span></div>:</b></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">1</span><span class="den">8</span></div> &times; 100% = <div class="frac"><span class="num">100</span><span class="den">8</span></div>% = <span class="ans-highlight">12.5%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) <div class="frac"><span class="num">5</span><span class="den">4</span></div>:</b></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">5</span><span class="den">4</span></div> &times; 100% = 5 &times; 25% = <span class="ans-highlight">125%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) <div class="frac"><span class="num">3</span><span class="den">40</span></div>:</b></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">3</span><span class="den">40</span></div> &times; 100% = <div class="frac"><span class="num">300</span><span class="den">40</span></div>% = <span class="ans-highlight">7.5%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) <div class="frac"><span class="num">2</span><span class="den">7</span></div>:</b></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">2</span><span class="den">7</span></div> &times; 100% = <div class="frac"><span class="num">200</span><span class="den">7</span></div>% = <span class="ans-highlight">28<div class="frac"><span class="num">4</span><span class="den">7</span></div>%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Convert the given decimal fractions to percent:<br/>(a) 0.65 &nbsp; (b) 2.1 &nbsp; (c) 0.02 &nbsp; (d) 12.35</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 0.65:</b></div>
                    <div class="sol-step">0.65 = <div class="frac"><span class="num">65</span><span class="den">100</span></div> = <span class="ans-highlight">65%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 2.1:</b></div>
                    <div class="sol-step">2.1 = <div class="frac"><span class="num">210</span><span class="den">100</span></div> = <span class="ans-highlight">210%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 0.02:</b></div>
                    <div class="sol-step">0.02 = <div class="frac"><span class="num">2</span><span class="den">100</span></div> = <span class="ans-highlight">2%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 12.35:</b></div>
                    <div class="sol-step">12.35 = <div class="frac"><span class="num">1235</span><span class="den">100</span></div> = <span class="ans-highlight">1235%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Estimate what part of the figures is coloured and hence find the per cent which is coloured.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) 1 part out of 4 shaded:</b></div>
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100" style="display: block; margin: auto;">
                            <circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="2" fill="none" />
                            <path d="M 50 50 L 90 50 A 40 40 0 0 0 50 10 Z" fill="#FFA726" opacity="0.8" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 100% = <span class="ans-highlight">25%</span></div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(ii) 3 parts out of 5 shaded:</b></div>
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100" style="display: block; margin: auto;">
                            <circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="2" fill="none" />
                            <path d="M 50 50 L 90 50 A 40 40 0 0 1 62.36 88.04 L 50 50 L 17.64 73.51 A 40 40 0 0 1 62.36 11.96 Z" fill="#FFA726" opacity="0.8" />
                            <line x1="50" y1="50" x2="90" y2="50" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="62.36" y2="88.04" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="17.64" y2="73.51" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="17.64" y2="26.49" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="62.36" y2="11.96" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; 100% = <span class="ans-highlight">60%</span></div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(iii) 3 parts out of 8 shaded:</b></div>
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100" style="display: block; margin: auto;">
                            <circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="2" fill="none" />
                            <path d="M 50 50 L 90 50 A 40 40 0 0 1 21.72 78.28 Z" fill="#FFA726" opacity="0.8" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="#fff" stroke-width="1.5" />
                            <line x1="21.72" y1="21.72" x2="78.28" y2="78.28" stroke="#fff" stroke-width="1.5" />
                            <line x1="21.72" y1="78.28" x2="78.28" y2="21.72" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">3</span><span class="den">8</span></div> &times; 100% = <span class="ans-highlight">37.5%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Find:<br/>(a) 15% of 250<br/>(b) 1% of 1 hour<br/>(c) 20% of ₹ 2500<br/>(d) 75% of 1 kg</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 15% of 250:</b></div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">15</span><span class="den">100</span></div> &times; 250 = <span class="ans-highlight">37.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 1% of 1 hour:</b></div>
                    <div class="sol-step">1 hour = 3600 seconds. Value = <div class="frac"><span class="num">1</span><span class="den">100</span></div> &times; 3600 = <span class="ans-highlight">36 seconds</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 20% of ₹ 2500:</b></div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">20</span><span class="den">100</span></div> &times; 2500 = <span class="ans-highlight">₹ 500</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 75% of 1 kg:</b></div>
                    <div class="sol-step">1 kg = 1000 g. Value = <div class="frac"><span class="num">75</span><span class="den">100</span></div> &times; 1000 = <span class="ans-highlight">750 g</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. Find the whole quantity if:<br/>(a) 5% of it is 600<br/>(b) 12% of it is ₹ 1080<br/>(c) 40% of it is 500 km<br/>(d) 70% of it is 14 minutes<br/>(e) 8% of it is 40 liters</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 5% of it is 600:</b></div>
                    <div class="sol-step">Let total be x. <div class="frac"><span class="num">5</span><span class="den">100</span></div> &times; x = 600 &rArr; x = <span class="ans-highlight">12,000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 12% of it is ₹ 1080:</b></div>
                    <div class="sol-step">Let total be x. <div class="frac"><span class="num">12</span><span class="den">100</span></div> &times; x = 1080 &rArr; x = <span class="ans-highlight">₹ 9,000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 40% of it is 500 km:</b></div>
                    <div class="sol-step">Let total be x. <div class="frac"><span class="num">40</span><span class="den">100</span></div> &times; x = 500 &rArr; x = <span class="ans-highlight">1250 km</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 70% of it is 14 minutes:</b></div>
                    <div class="sol-step">Let total be x. <div class="frac"><span class="num">70</span><span class="den">100</span></div> &times; x = 14 &rArr; x = <span class="ans-highlight">20 minutes</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 8% of it is 40 liters:</b></div>
                    <div class="sol-step">Let total be x. <div class="frac"><span class="num">8</span><span class="den">100</span></div> &times; x = 40 &rArr; x = <span class="ans-highlight">500 liters</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Convert given percents to decimal fractions and also to fractions in simplest forms:<br/>(a) 25% &nbsp; (b) 150% &nbsp; (c) 20% &nbsp; (d) 5%</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 25%:</b> Decimal = <span class="ans-highlight">0.25</span>, Fraction = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">4</span></div></span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 150%:</b> Decimal = <span class="ans-highlight">1.5</span>, Fraction = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 20%:</b> Decimal = <span class="ans-highlight">0.2</span>, Fraction = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 5%:</b> Decimal = <span class="ans-highlight">0.05</span>, Fraction = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">20</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. In a city, 30% are females, 40% are males and remaining are children. What per cent are children?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Percentage of females = 30%, Percentage of males = 40%</div>
                    <div class="sol-step">Total percentage of adults = 30% + 40% = 70%</div>
                    <div class="sol-step">Percentage of children = 100% - 70% = 30%</div>
                    <div class="sol-step"><span class="ans-highlight">30% are children.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Out of 15,000 voters in a constituency, 60% voted. Find the percentage of voters who did not vote. Can you now find how many actually did not vote?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total voters = 15,000, Voted = 60%</div>
                    <div class="sol-step">Percentage who did not vote = 100% - 60% = 40%</div>
                    <div class="sol-step">Number of voters who did not vote = 40% of 15,000 = <div class="frac"><span class="num">40</span><span class="den">100</span></div> &times; 15000 = 6000</div>
                    <div class="sol-step"><span class="ans-highlight">40% did not vote (6,000 voters)</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Meeta saves ₹ 4000 from her salary. If this is 10% of her salary. What is her salary?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Let Meeta's salary be ₹ x.</div>
                    <div class="sol-step">10% of x = ₹ 4000 &rArr; <div class="frac"><span class="num">10</span><span class="den">100</span></div> &times; x = 4000 &rArr; x = 40,000</div>
                    <div class="sol-step"><span class="ans-highlight">Meeta's salary = ₹ 40,000</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. A local cricket team played 20 matches in one season. It won 25% of them. How many matches did they win?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Total matches = 20, Win percentage = 25%</div>
                    <div class="sol-step">Matches won = 25% of 20 = <div class="frac"><span class="num">25</span><span class="den">100</span></div> &times; 20 = 5</div>
                    <div class="sol-step"><span class="ans-highlight">The team won 5 matches.</span></div>
                </div>
            </div>
        </div>
    `,
    "ex7-2": `
        <style>
            .container { padding: 15px; color: #fff; font-family: 'Inter', sans-serif; background: #121212; }
            .sol-card { background: #1E1E2E; border-radius: 12px; border-left: 5px solid #FFA726; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .question-header { padding: 15px; color: #FFA726; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.6; text-align: justify; }
            .sol-body { padding: 18px; line-height: 1.8; text-align: justify; }
            .sol-step { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; text-align: justify; }
            .ans-highlight { color: #FFB74D; font-weight: bold; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FFA726; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Tell what is the profit or loss in the following transactions. Also find profit per cent or loss per cent in each case.<br/>
                (a) Gardening shears bought for ₹ 250 and sold for ₹ 325.<br/>
                (b) A refrigerator bought for ₹ 12,000 and sold at ₹ 13,500.<br/>
                (c) A cupboard bought for ₹ 2,500 and sold at ₹ 3,000.<br/>
                (d) A skirt bought for ₹ 250 and sold at ₹ 150.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Gardening shears:</b></div>
                    <div class="sol-step">CP = ₹ 250, SP = ₹ 325. Since SP &gt; CP, Profit = 325 - 250 = ₹ 75.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">75</span><span class="den">250</span></div> &times; 100)% = 30%</div>
                    <div class="sol-step"><span class="ans-highlight">Profit = ₹ 75, Profit Percentage = 30%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Refrigerator:</b></div>
                    <div class="sol-step">CP = ₹ 12,000, SP = ₹ 13,500. Since SP &gt; CP, Profit = 13,500 - 12,000 = ₹ 1,500.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">1500</span><span class="den">12000</span></div> &times; 100)% = 12.5%</div>
                    <div class="sol-step"><span class="ans-highlight">Profit = ₹ 1,500, Profit Percentage = 12.5%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) Cupboard:</b></div>
                    <div class="sol-step">CP = ₹ 2,500, SP = ₹ 3,000. Since SP &gt; CP, Profit = 3,000 - 2,500 = ₹ 500.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">500</span><span class="den">2500</span></div> &times; 100)% = 20%</div>
                    <div class="sol-step"><span class="ans-highlight">Profit = ₹ 500, Profit Percentage = 20%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) Skirt:</b></div>
                    <div class="sol-step">CP = ₹ 250, SP = ₹ 150. Since CP &gt; SP, Loss = 250 - 150 = ₹ 100.</div>
                    <div class="sol-step">Loss% = (<div class="frac"><span class="num">100</span><span class="den">250</span></div> &times; 100)% = 40%</div>
                    <div class="sol-step"><span class="ans-highlight">Loss = ₹ 100, Loss Percentage = 40%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Convert each part of the ratio to percentage:<br/>
                (a) 3 : 1 &nbsp; (b) 2 : 3 : 5 &nbsp; (c) 1 : 4 &nbsp; (d) 1 : 2 : 5</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3 : 1:</b> Total parts = 4. Part 1 = <span class="ans-highlight">75%</span>, Part 2 = <span class="ans-highlight">25%</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 2 : 3 : 5:</b> Total parts = 10. Part 1 = <span class="ans-highlight">20%</span>, Part 2 = <span class="ans-highlight">30%</span>, Part 3 = <span class="ans-highlight">50%</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 1 : 4:</b> Total parts = 5. Part 1 = <span class="ans-highlight">20%</span>, Part 2 = <span class="ans-highlight">80%</span></div>
                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 1 : 2 : 5:</b> Total parts = 8. Part 1 = <span class="ans-highlight">12.5%</span>, Part 2 = <span class="ans-highlight">25%</span>, Part 3 = <span class="ans-highlight">62.5%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. The population of a city decreased from 25,000 to 24,500. Find the percentage decrease.</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Initial = 25,000, Final = 24,500, Decrease = 500</div>
                    <div class="sol-step">Percentage decrease = (<div class="frac"><span class="num">500</span><span class="den">25000</span></div> &times; 100)% = 2%</div>
                    <div class="sol-step"><span class="ans-highlight">Percentage decrease = 2%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Arun bought a car for ₹ 3,50,000. The next year, the price went upto ₹ 3,70,000. What was the percentage of price increase?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Original price = ₹ 3,50,000, New price = ₹ 3,70,000, Increase = ₹ 20,000</div>
                    <div class="sol-step">Percentage increase = (<div class="frac"><span class="num">20000</span><span class="den">350000</span></div> &times; 100)% = <div class="frac"><span class="num">40</span><span class="den">7</span></div>% = 5<div class="frac"><span class="num">5</span><span class="den">7</span></div>%</div>
                    <div class="sol-step"><span class="ans-highlight">Price increase percentage = 5<div class="frac"><span class="num">5</span><span class="den">7</span></div>%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. I buy a T.V. for ₹ 10,000 and sell it at a profit of 20%. How much money do I get for it?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">CP = ₹ 10,000, Profit = 20% of 10,000 = ₹ 2,000</div>
                    <div class="sol-step">SP = 10,000 + 2,000 = 12,000</div>
                    <div class="sol-step"><span class="ans-highlight">Selling Price = ₹ 12,000</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Juhi sells a washing machine for ₹ 13,500. She loses 20% in the bargain. What was the price at which she bought it?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">SP = ₹ 13,500, Loss = 20% &rArr; 80% of CP = 13,500</div>
                    <div class="sol-step">CP = <div class="frac"><span class="num">13500 &times; 100</span><span class="den">80</span></div> = 16,875</div>
                    <div class="sol-step"><span class="ans-highlight">Cost Price = ₹ 16,875</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. (i) Chalk contains calcium, carbon and oxygen in the ratio 10:3:12. Find the percentage of carbon in chalk.<br/>
                (ii) If in a stick of chalk, carbon is 3g, what is the weight of the chalk stick?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Percentage of carbon:</b></div>
                    <div class="sol-step">Ratio = 10 : 3 : 12, Total parts = 25</div>
                    <div class="sol-step">Carbon Percentage = <div class="frac"><span class="num">3</span><span class="den">25</span></div> &times; 100% = 12%</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Weight of chalk stick:</b></div>
                    <div class="sol-step">12% of Weight = 3g &rArr; Weight = <div class="frac"><span class="num">3 &times; 100</span><span class="den">12</span></div> = 25g</div>
                    <div class="sol-step"><span class="ans-highlight">Carbon = 12%, Weight of chalk stick = 25g</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Anju buys a book for ₹ 275 and sells it at a loss of 15%. How much does she sell it for?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">Cost Price (CP) = ₹ 275, Loss% = 15%</div>
                    <div class="sol-step">Loss amount = 15% of 275 = ₹ 41.25</div>
                    <div class="sol-step">Selling Price (SP) = CP - Loss = 275 - 41.25 = 233.75</div>
                    <div class="sol-step"><span class="ans-highlight">Selling Price = ₹ 233.75</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Find the amount to be paid at the end of 3 years in each case:<br/>
                (a) Principal = ₹ 1,200 at 12% p.a.<br/>
                (b) Principal = ₹ 7,500 at 5% p.a.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Principal = ₹ 1,200 at 12% p.a.:</b></div>
                    <div class="sol-step">SI = <div class="frac"><span class="num">1200 &times; 12 &times; 3</span><span class="den">100</span></div> = ₹ 432</div>
                    <div class="sol-step">Amount = 1200 + 432 = 1632</div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Principal = ₹ 7,500 at 5% p.a.:</b></div>
                    <div class="sol-step">SI = <div class="frac"><span class="num">7500 &times; 5 &times; 3</span><span class="den">100</span></div> = ₹ 1125</div>
                    <div class="sol-step">Amount = 7500 + 1125 = 8625</div>
                    <div class="sol-step"><span class="ans-highlight">(a) ₹ 1,632, (b) ₹ 8,625</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. What rate gives ₹ 280 as interest on a sum of ₹ 56,000 in 2 years?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">P = ₹ 56,000, SI = ₹ 280, T = 2 years</div>
                    <div class="sol-step">SI = <div class="frac"><span class="num">P &times; R &times; T</span><span class="den">100</span></div> &rArr; 280 = <div class="frac"><span class="num">56000 &times; R &times; 2</span><span class="den">100</span></div></div>
                    <div class="sol-step">R = <div class="frac"><span class="num">280</span><span class="den">1120</span></div> = 0.25%</div>
                    <div class="sol-step"><span class="ans-highlight">Rate of interest = 0.25% p.a.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">11. Meena gives an interest of ₹ 45 for one year at 9% rate p.a. What is the sum she has borrowed?</div>
                <div class="sol-body">
                    <div class="sol-step">Solution:-</div>
                    <div class="sol-step">SI = ₹ 45, R = 9%, T = 1 year</div>
                    <div class="sol-step">45 = <div class="frac"><span class="num">P &times; 9 &times; 1</span><span class="den">100</span></div> &rArr; P = <div class="frac"><span class="num">4500</span><span class="den">9</span></div> = 500</div>
                    <div class="sol-step"><span class="ans-highlight">Borrowed sum = ₹ 500</span></div>
                </div>
            </div>
        </div>
    `
  },
  examples: [],
  mcqs: [
    {
      id: "c7g7-mcq-1",
      question: "What is 0.75 expressed as a percentage?",
      options: ["7.5%", "75%", "0.75%", "750%"],
      correctAnswer: "b",
      explanation: "To convert a decimal to a percentage, multiply by 100: 0.75 × 100 = 75%."
    },
    {
      id: "c7g7-mcq-2",
      question: "If Cost Price (CP) = ₹100 and Selling Price (SP) = ₹120, what is the profit percentage?",
      options: ["20%", "10%", "25%", "15%"],
      correctAnswer: "a",
      explanation: "Profit = 120 - 100 = 20. Profit% = (20 / 100) × 100 = 20%."
    },
    {
      id: "c7g7-mcq-3",
      question: "What is the Simple Interest on ₹1,000 at 10% per annum for 1 year?",
      options: ["₹100", "₹10", "₹1", "₹1000"],
      correctAnswer: "a",
      explanation: "SI = (P × R × T) / 100 = (1000 × 10 × 1) / 100 = ₹100."
    },
    {
      id: "c7g7-mcq-4",
      question: "What is 20% of 50?",
      options: ["10", "20", "5", "1"],
      correctAnswer: "a",
      explanation: "20% of 50 = (20 / 100) × 50 = 10."
    },
    {
      id: "c7g7-mcq-5",
      question: "If 10% of a number x is 20, what is x?",
      options: ["200", "100", "20", "2000"],
      correctAnswer: "a",
      explanation: "(10 / 100) × x = 20 ⇒ x = 20 × 10 = 200."
    },
    {
      id: "c7g7-mcq-6",
      question: "Convert the ratio 3 : 1 into percentages for each part:",
      options: ["75%, 25%", "25%, 75%", "30%, 10%", "3%, 1%"],
      correctAnswer: "a",
      explanation: "Total parts = 3 + 1 = 4. First part = (3/4)×100 = 75%; Second part = (1/4)×100 = 25%."
    },
    {
      id: "c7g7-mcq-7",
      question: "For Principal = ₹500, Rate = 5% p.a., Time = 2 years, what is the Simple Interest?",
      options: ["₹50", "₹25", "₹100", "₹10"],
      correctAnswer: "a",
      explanation: "SI = (500 × 5 × 2) / 100 = ₹50."
    },
    {
      id: "c7g7-mcq-8",
      question: "A transaction results in a profit when:",
      options: ["Selling Price > Cost Price", "Cost Price > Selling Price", "Selling Price = Cost Price", "None of these"],
      correctAnswer: "a",
      explanation: "Profit occurs when Selling Price exceeds Cost Price (SP > CP)."
    },
    {
      id: "c7g7-mcq-9",
      question: "What is 0.02 as a percentage?",
      options: ["2%", "20%", "0.2%", "200%"],
      correctAnswer: "a",
      explanation: "0.02 × 100 = 2%."
    },
    {
      id: "c7g7-mcq-10",
      question: "If Meeta saves ₹4000 which is 10% of her salary, what is her total salary?",
      options: ["₹40,000", "₹4,000", "₹4,00,000", "₹44,000"],
      correctAnswer: "a",
      explanation: "10% of Salary = 4000 ⇒ Salary = 4000 × 10 = ₹40,000."
    }
  ],
  summary: [],
};
