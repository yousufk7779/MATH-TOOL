import { ChapterContent } from "../types";

export const c7Math7: ChapterContent = {
  id: "c7-math-7",
  number: 7,
  title: "Comparing Quantities",
  isHtmlView: true,
  introduction:
    "Comparing quantities is part of our daily life. Whether it is price, height, or scores, we use ratios, percentages, and interest rates to understand relative values.",
  definitions: [
    {
      term: "Ratio",
      definition: "A comparison of two quantities by division.",
    },
    { term: "Percentage", definition: "A fraction with denominator 100." },
    {
      term: "Profit",
      definition: "When Selling Price (SP) is greater than Cost Price (CP).",
    },
    {
      term: "Simple Interest",
      definition:
        "Interest calculated on the principal amount for a given time and rate.",
    },
  ],
  keyPoints: [
    "To compare two quantities, their units must be the same.",
    "Percentage = (Value / Total) × 100.",
    "Profit = SP - CP; Loss = CP - SP.",
    "Simple Interest (SI) = (P × R × T) / 100.",
  ],
  formulas: [
    { name: "Simple Interest", formula: "SI = (P × R × T) / 100" },
    { name: "Profit Percentage", formula: "(Profit / CP) × 100" },
  ],
  crux: [],
  exercises: [
    { id: "ex7-1", name: "Exercise 7.1", questions: [] },
    { id: "ex7-2", name: "Exercise 7.2", questions: [] },
    { id: "ex7-3", name: "Exercise 7.3", questions: [] },
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
            <p class="content-text">Learn how to analyze ratios, calculate percentages, and manage financial math like profit, loss, and interest.</p>
            <div class="point-box">
                <div class="point-item">Ratios compare similar units.</div>
                <div class="point-item">Percentage means 'per hundred'.</div>
                <div class="point-item">Understand the relationship between CP, SP, and Interest.</div>
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
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FFA726; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Find the ratio of:<br/>(a) ₹ 5 to 50 paise<br/>(b) 15 kg to 210 g<br/>(c) 9 m to 27 cm<br/>(d) 30 days to 36 hours</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) ₹ 5 to 50 paise:</b></div>
                    <div class="sol-step">Convert rupees to paise: ₹ 1 = 100 paise, so ₹ 5 = 5 &times; 100 = 500 paise.</div>
                    <div class="sol-step">Ratio = <div class="frac"><span class="num">500</span><span class="den">50</span></div> = <div class="frac"><span class="num">10</span><span class="den">1</span></div></div>
                    <div class="sol-step">Answer: <span class="ans-highlight">10 : 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 15 kg to 210 g:</b></div>
                    <div class="sol-step">Convert kg to g: 1 kg = 1000 g, so 15 kg = 15 &times; 1000 = 15000 g.</div>
                    <div class="sol-step">Ratio = <div class="frac"><span class="num">15000</span><span class="den">210</span></div> = <div class="frac"><span class="num">500</span><span class="den">7</span></div></div>
                    <div class="sol-step">Answer: <span class="ans-highlight">500 : 7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 9 m to 27 cm:</b></div>
                    <div class="sol-step">Convert m to cm: 1 m = 100 cm, so 9 m = 9 &times; 100 = 900 cm.</div>
                    <div class="sol-step">Ratio = <div class="frac"><span class="num">900</span><span class="den">27</span></div> = <div class="frac"><span class="num">100</span><span class="den">3</span></div></div>
                    <div class="sol-step">Answer: <span class="ans-highlight">100 : 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 30 days to 36 hours:</b></div>
                    <div class="sol-step">Convert days to hours: 1 day = 24 hours, so 30 days = 30 &times; 24 = 720 hours.</div>
                    <div class="sol-step">Ratio = <div class="frac"><span class="num">720</span><span class="den">36</span></div> = <div class="frac"><span class="num">20</span><span class="den">1</span></div></div>
                    <div class="sol-step">Answer: <span class="ans-highlight">20 : 1</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. In a computer lab, there are 3 computers for every 6 students. How many computers will be needed for 24 students?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Computers required for 6 students = 3</div>
                    <div class="sol-step">Computers required for 1 student = <div class="frac"><span class="num">3</span><span class="den">6</span></div> = <div class="frac"><span class="num">1</span><span class="den">2</span></div></div>
                    <div class="sol-step">Computers required for 24 students = 24 &times; <div class="frac"><span class="num">1</span><span class="den">2</span></div> = 12</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">12 computers</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Population of Rajasthan = 570 lakhs and population of UP = 1660 lakhs. Area of Rajasthan = 3 lakh km² and area of UP = 2 lakh km².<br/>(i) How many people are there per km² in both these states?<br/>(ii) Which state is less populated?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) People per km²:</b></div>
                    <div class="sol-step">Rajasthan = <div class="frac"><span class="num">570 lakhs</span><span class="den">3 lakh km²</span></div> = <span class="ans-highlight">190 people/km²</span></div>
                    <div class="sol-step">UP = <div class="frac"><span class="num">1660 lakhs</span><span class="den">2 lakh km²</span></div> = <span class="ans-highlight">830 people/km²</span></div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Less populated state:</b></div>
                    <div class="sol-step">Comparing the density, Rajasthan has 190 people/km², which is less than UP's 830 people/km².</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">Rajasthan</span> is less populated.</div>
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
            .diagram-container { background: #1a1a2e; padding: 20px; border-radius: 15px; margin: 15px 0; border: 1px solid rgba(255, 167, 38, 0.3); text-align: center; }
            .step-label { color: #FFB74D; font-weight: bold; margin-right: 5px; }
            .sol-body b, .subpart-title { color: #FFA726; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Convert the given fractional numbers to percent:<br/>(a) <div class="frac"><span class="num">1</span><span class="den">8</span></div> &nbsp; (b) <div class="frac"><span class="num">5</span><span class="den">4</span></div> &nbsp; (c) <div class="frac"><span class="num">3</span><span class="den">40</span></div> &nbsp; (d) <div class="frac"><span class="num">2</span><span class="den">7</span></div></div>
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
                <div class="question-header">3. Estimate what part of the figures is coloured, and hence find the per cent which is coloured.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Top-Right quarter shaded:</b></div>
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100" style="display: block; margin: auto;">
                            <circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="2" fill="none" />
                            <path d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z" fill="#FFA726" opacity="0.8" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="#fff" stroke-width="1.5" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">By observing the figure, 1 part out of 4 equal parts is coloured.</div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">1</span><span class="den">4</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 100% = <span class="ans-highlight">25%</span></div>

                    <div class="sol-step" style="margin-top: 25px;"><b>(ii) 3 parts out of 5 shaded:</b></div>
                    <div class="diagram-container">
                        <svg width="100" height="100" viewBox="0 0 100 100" style="display: block; margin: auto;">
                            <circle cx="50" cy="50" r="40" stroke="#fff" stroke-width="2" fill="none" />
                            <path d="M 50 50 L 90 50 A 40 40 0 1 1 17.64 26.49 Z" fill="#FFA726" opacity="0.8" />
                            <line x1="50" y1="50" x2="90" y2="50" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="62.36" y2="88.04" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="17.64" y2="73.51" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="17.64" y2="26.49" stroke="#fff" stroke-width="1.5" />
                            <line x1="50" y1="50" x2="62.36" y2="11.96" stroke="#fff" stroke-width="1.5" />
                        </svg>
                    </div>
                    <div class="sol-step">By observing the figure, 3 parts out of 5 equal parts are coloured.</div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">3</span><span class="den">5</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">3</span><span class="den">5</span></div> &times; 100% = 3 &times; 20% = <span class="ans-highlight">60%</span></div>

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
                    <div class="sol-step">By observing the figure, 3 parts out of 8 equal parts are coloured.</div>
                    <div class="sol-step">Fraction = <div class="frac"><span class="num">3</span><span class="den">8</span></div></div>
                    <div class="sol-step">Percentage = <div class="frac"><span class="num">3</span><span class="den">8</span></div> &times; 100% = <div class="frac"><span class="num">300</span><span class="den">8</span></div>% = <span class="ans-highlight">37.5%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Find:<br/>(a) 15% of 250<br/>(b) 1% of 1 hour<br/>(c) 20% of ₹ 2500<br/>(d) 75% of 1 kg</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 15% of 250:</b></div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">15</span><span class="den">100</span></div> &times; 250 = <div class="frac"><span class="num">15 &times; 25</span><span class="den">10</span></div> = <div class="frac"><span class="num">375</span><span class="den">10</span></div> = <span class="ans-highlight">37.5</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 1% of 1 hour:</b></div>
                    <div class="sol-step">1 hour = 60 minutes = 3600 seconds.</div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">1</span><span class="den">100</span></div> &times; 3600 seconds = <span class="ans-highlight">36 seconds</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 20% of ₹ 2500:</b></div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">20</span><span class="den">100</span></div> &times; 2500 = 20 &times; 25 = <span class="ans-highlight">₹ 500</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 75% of 1 kg:</b></div>
                    <div class="sol-step">1 kg = 1000 g.</div>
                    <div class="sol-step">Value = <div class="frac"><span class="num">75</span><span class="den">100</span></div> &times; 1000 g = 75 &times; 10 = <span class="ans-highlight">750 g</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. Find the whole quantity if:<br/>(a) 5% of it is 600<br/>(b) 12% of it is ₹ 1080<br/>(c) 40% of it is 500 km<br/>(d) 70% of it is 14 minutes<br/>(e) 8% of it is 40 liters</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 5% of it is 600:</b></div>
                    <div class="sol-step">Let the quantity be x. <div class="frac"><span class="num">5</span><span class="den">100</span></div> &times; x = 600 => x = <div class="frac"><span class="num">600 &times; 100</span><span class="den">5</span></div> = 120 &times; 100</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">12,000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 12% of it is ₹ 1080:</b></div>
                    <div class="sol-step">Let the quantity be x. <div class="frac"><span class="num">12</span><span class="den">100</span></div> &times; x = 1080 => x = <div class="frac"><span class="num">1080 &times; 100</span><span class="den">12</span></div> = 90 &times; 100</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">₹ 9,000</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 40% of it is 500 km:</b></div>
                    <div class="sol-step">Let the quantity be x. <div class="frac"><span class="num">40</span><span class="den">100</span></div> &times; x = 500 => x = <div class="frac"><span class="num">500 &times; 100</span><span class="den">40</span></div> = 125 &times; 10</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">1250 km</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 70% of it is 14 minutes:</b></div>
                    <div class="sol-step">Let the quantity be x. <div class="frac"><span class="num">70</span><span class="den">100</span></div> &times; x = 14 => x = <div class="frac"><span class="num">14 &times; 100</span><span class="den">70</span></div> = <div class="frac"><span class="num">140</span><span class="den">7</span></div></div>
                    <div class="sol-step">Answer: <span class="ans-highlight">20 minutes</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(e) 8% of it is 40 liters:</b></div>
                    <div class="sol-step">Let the quantity be x. <div class="frac"><span class="num">8</span><span class="den">100</span></div> &times; x = 40 => x = <div class="frac"><span class="num">40 &times; 100</span><span class="den">8</span></div> = 5 &times; 100</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">500 liters</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Convert given percents to decimal fractions and also to fractions in simplest forms:<br/>(a) 25% &nbsp; (b) 150% &nbsp; (c) 20% &nbsp; (d) 5%</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 25%:</b></div>
                    <div class="sol-step">Decimal = <div class="frac"><span class="num">25</span><span class="den">100</span></div> = <span class="ans-highlight">0.25</span></div>
                    <div class="sol-step">Simplest Fraction = <div class="frac"><span class="num">25</span><span class="den">100</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">4</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 150%:</b></div>
                    <div class="sol-step">Decimal = <div class="frac"><span class="num">150</span><span class="den">100</span></div> = <span class="ans-highlight">1.5</span></div>
                    <div class="sol-step">Simplest Fraction = <div class="frac"><span class="num">150</span><span class="den">100</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">3</span><span class="den">2</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 20%:</b></div>
                    <div class="sol-step">Decimal = <div class="frac"><span class="num">20</span><span class="den">100</span></div> = <span class="ans-highlight">0.2</span></div>
                    <div class="sol-step">Simplest Fraction = <div class="frac"><span class="num">20</span><span class="den">100</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">5</span></div></span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 5%:</b></div>
                    <div class="sol-step">Decimal = <div class="frac"><span class="num">5</span><span class="den">100</span></div> = <span class="ans-highlight">0.05</span></div>
                    <div class="sol-step">Simplest Fraction = <div class="frac"><span class="num">5</span><span class="den">100</span></div> = <span class="ans-highlight"><div class="frac"><span class="num">1</span><span class="den">20</span></div></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. In a city, 30% are females, 40% are males and remaining are children. What per cent are children?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Percentage of females = 30%</div>
                    <div class="sol-step">Percentage of males = 40%</div>
                    <div class="sol-step">Total percentage of adults = 30% + 40% = 70%</div>
                    <div class="sol-step">Percentage of children = 100% - 70% = 30%</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">30%</span> are children.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Out of 15,000 voters in a constituency, 60% voted. Find the percentage of voters who did not vote. Can you now find how many actually did not vote?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Total number of voters = 15,000</div>
                    <div class="sol-step">Percentage of voters who voted = 60%</div>
                    <div class="sol-step">Percentage of voters who did not vote = 100% - 60% = <span class="ans-highlight">40%</span></div>
                    <div class="sol-step">Number of voters who did not vote = 40% of 15,000</div>
                    <div class="sol-step">= <div class="frac"><span class="num">40</span><span class="den">100</span></div> &times; 15000 = 40 &times; 150 = 6000</div>
                    <div class="sol-step">Answer: <span class="ans-highlight">40% did not vote</span>, which corresponds to <span class="ans-highlight">6000 voters</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Meeta saves ₹ 4000 from her salary. If this is 10% of her salary. What is her salary?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Let Meeta's salary be ₹ x.</div>
                    <div class="sol-step">Given, 10% of x = ₹ 4000</div>
                    <div class="sol-step">=> <div class="frac"><span class="num">10</span><span class="den">100</span></div> &times; x = 4000</div>
                    <div class="sol-step">=> x = 4000 &times; 10 = 40000</div>
                    <div class="sol-step">Answer: Meeta's salary is <span class="ans-highlight">₹ 40,000</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. A local cricket team played 20 matches in one season. It won 25% of them. How many matches did they win?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Total matches played = 20</div>
                    <div class="sol-step">Win percentage = 25%</div>
                    <div class="sol-step">Matches won = 25% of 20 = <div class="frac"><span class="num">25</span><span class="den">100</span></div> &times; 20 = <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 20 = 5</div>
                    <div class="sol-step">Answer: The team won <span class="ans-highlight">5 matches</span>.</div>
                </div>
            </div>
        </div>
    `,
    "ex7-3": `
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
                    <div class="sol-step">Cost Price (CP) = ₹ 250, Selling Price (SP) = ₹ 325.</div>
                    <div class="sol-step">Since SP &gt; CP, it is a profit. Profit = SP - CP = 325 - 250 = ₹ 75.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">Profit</span><span class="den">CP</span></div> &times; 100)% = (<div class="frac"><span class="num">75</span><span class="den">250</span></div> &times; 100)% = 3 &times; 10%</div>
                    <div class="sol-step">Answer: Profit is <span class="ans-highlight">₹ 75</span>, Profit Percentage = <span class="ans-highlight">30%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Refrigerator:</b></div>
                    <div class="sol-step">CP = ₹ 12,000, SP = ₹ 13,500.</div>
                    <div class="sol-step">Since SP &gt; CP, it is a profit. Profit = 13,500 - 12,000 = ₹ 1,500.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">1500</span><span class="den">12000</span></div> &times; 100)% = <div class="frac"><span class="num">150</span><span class="den">12</span></div>% = <span class="ans-highlight">12.5%</span></div>
                    <div class="sol-step">Answer: Profit is <span class="ans-highlight">₹ 1,500</span>, Profit Percentage = <span class="ans-highlight">12.5%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) Cupboard:</b></div>
                    <div class="sol-step">CP = ₹ 2,500, SP = ₹ 3,000.</div>
                    <div class="sol-step">Since SP &gt; CP, it is a profit. Profit = 3,000 - 2,500 = ₹ 500.</div>
                    <div class="sol-step">Profit% = (<div class="frac"><span class="num">500</span><span class="den">2500</span></div> &times; 100)% = <div class="frac"><span class="num">100</span><span class="den">5</span></div>% = <span class="ans-highlight">20%</span></div>
                    <div class="sol-step">Answer: Profit is <span class="ans-highlight">₹ 500</span>, Profit Percentage = <span class="ans-highlight">20%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) Skirt:</b></div>
                    <div class="sol-step">CP = ₹ 250, SP = ₹ 150.</div>
                    <div class="sol-step">Since CP &gt; SP, it is a loss. Loss = CP - SP = 250 - 150 = ₹ 100.</div>
                    <div class="sol-step">Loss% = (<div class="frac"><span class="num">Loss</span><span class="den">CP</span></div> &times; 100)% = (<div class="frac"><span class="num">100</span><span class="den">250</span></div> &times; 100)% = 4 &times; 10%</div>
                    <div class="sol-step">Answer: Loss is <span class="ans-highlight">₹ 100</span>, Loss Percentage = <span class="ans-highlight">40%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Convert each part of the ratio to percentage:<br/>
                (a) 3 : 1 &nbsp; (b) 2 : 3 : 5 &nbsp; (c) 1 : 4 &nbsp; (d) 1 : 2 : 5</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3 : 1:</b></div>
                    <div class="sol-step">Total parts = 3 + 1 = 4.</div>
                    <div class="sol-step">First Part% = <div class="frac"><span class="num">3</span><span class="den">4</span></div> &times; 100% = <span class="ans-highlight">75%</span></div>
                    <div class="sol-step">Second Part% = <div class="frac"><span class="num">1</span><span class="den">4</span></div> &times; 100% = <span class="ans-highlight">25%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 2 : 3 : 5:</b></div>
                    <div class="sol-step">Total parts = 2 + 3 + 5 = 10.</div>
                    <div class="sol-step">First Part% = <div class="frac"><span class="num">2</span><span class="den">10</span></div> &times; 100% = <span class="ans-highlight">20%</span></div>
                    <div class="sol-step">Second Part% = <div class="frac"><span class="num">3</span><span class="den">10</span></div> &times; 100% = <span class="ans-highlight">30%</span></div>
                    <div class="sol-step">Third Part% = <div class="frac"><span class="num">5</span><span class="den">10</span></div> &times; 100% = <span class="ans-highlight">50%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 1 : 4:</b></div>
                    <div class="sol-step">Total parts = 1 + 4 = 5.</div>
                    <div class="sol-step">First Part% = <div class="frac"><span class="num">1</span><span class="den">5</span></div> &times; 100% = <span class="ans-highlight">20%</span></div>
                    <div class="sol-step">Second Part% = <div class="frac"><span class="num">4</span><span class="den">5</span></div> &times; 100% = <span class="ans-highlight">80%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 1 : 2 : 5:</b></div>
                    <div class="sol-step">Total parts = 1 + 2 + 5 = 8.</div>
                    <div class="sol-step">First Part% = <div class="frac"><span class="num">1</span><span class="den">8</span></div> &times; 100% = <span class="ans-highlight">12.5%</span></div>
                    <div class="sol-step">Second Part% = <div class="frac"><span class="num">2</span><span class="den">8</span></div> &times; 100% = <span class="ans-highlight">25%</span></div>
                    <div class="sol-step">Third Part% = <div class="frac"><span class="num">5</span><span class="den">8</span></div> &times; 100% = <span class="ans-highlight">62.5%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. The population of a city decreased from 25,000 to 24,500. Find the percentage decrease.</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Initial population = 25,000</div>
                    <div class="sol-step">Final population = 24,500</div>
                    <div class="sol-step">Decrease in population = 25,000 - 24,500 = 500</div>
                    <div class="sol-step">Percentage decrease = (<div class="frac"><span class="num">500</span><span class="den">25000</span></div> &times; 100)% = <div class="frac"><span class="num">50</span><span class="den">25</span></div>% = 2%</div>
                    <div class="sol-step">Answer: The population decrease percentage is <span class="ans-highlight">2%</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Arun bought a car for ₹ 3,50,000. The next year, the price went upto ₹ 3,70,000. What was the percentage of price increase?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Original price = ₹ 3,50,000</div>
                    <div class="sol-step">New price = ₹ 3,70,000</div>
                    <div class="sol-step">Increase in price = 3,70,000 - 3,50,000 = ₹ 20,000</div>
                    <div class="sol-step">Percentage increase = (<div class="frac"><span class="num">20000</span><span class="den">350000</span></div> &times; 100)% = (<div class="frac"><span class="num">2</span><span class="den">35</span></div> &times; 100)% = <div class="frac"><span class="num">40</span><span class="den">7</span></div>% = 5<div class="frac"><span class="num">5</span><span class="den">7</span></div>%</div>
                    <div class="sol-step">Answer: The price increase percentage is <span class="ans-highlight">5<div class="frac"><span class="num">5</span><span class="den">7</span></div>%</span> (or approx 5.7%).</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. I buy a T.V. for ₹ 10,000 and sell it at a profit of 20%. How much money do I get for it?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Cost Price (CP) = ₹ 10,000, Profit% = 20%</div>
                    <div class="sol-step">Profit amount = 20% of 10000 = <div class="frac"><span class="num">20</span><span class="den">100</span></div> &times; 10000 = ₹ 2,000</div>
                    <div class="sol-step">Selling Price (SP) = CP + Profit = 10,000 + 2,000 = 12,000</div>
                    <div class="sol-step">Answer: I get <span class="ans-highlight">₹ 12,000</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Juhi sells a washing machine for ₹ 13,500. She loses 20% in the bargain. What was the price at which she bought it?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Selling Price (SP) = ₹ 13,500, Loss% = 20%</div>
                    <div class="sol-step">Let Cost Price (CP) be x.</div>
                    <div class="sol-step">SP = CP &times; (100% - Loss%) => 13500 = x &times; 80%</div>
                    <div class="sol-step">x = <div class="frac"><span class="num">13500 &times; 100</span><span class="den">80</span></div> = <div class="frac"><span class="num">135000</span><span class="den">8</span></div> = 16875</div>
                    <div class="sol-step">Answer: She bought it for <span class="ans-highlight">₹ 16,875</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. (i) Chalk contains calcium, carbon and oxygen in the ratio 10:3:12. Find the percentage of carbon in chalk.<br/>
                (ii) If in a stick of chalk, carbon is 3g, what is the weight of the chalk stick?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Percentage of carbon:</b></div>
                    <div class="sol-step">Ratio of Calcium : Carbon : Oxygen = 10 : 3 : 12.</div>
                    <div class="sol-step">Total parts = 10 + 3 + 12 = 25.</div>
                    <div class="sol-step">Carbon part = <div class="frac"><span class="num">3</span><span class="den">25</span></div></div>
                    <div class="sol-step">Carbon Percentage = <div class="frac"><span class="num">3</span><span class="den">25</span></div> &times; 100% = 3 &times; 4% = <span class="ans-highlight">12%</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Weight of chalk stick:</b></div>
                    <div class="sol-step">Let the weight of chalk stick be x grams.</div>
                    <div class="sol-step">Weight of carbon = 12% of x = 3g</div>
                    <div class="sol-step">=> <div class="frac"><span class="num">12</span><span class="den">100</span></div> &times; x = 3 => x = <div class="frac"><span class="num">3 &times; 100</span><span class="den">12</span></div> = <div class="frac"><span class="num">100</span><span class="den">4</span></div> = 25</div>
                    <div class="sol-step">Answer: The weight of the chalk stick is <span class="ans-highlight">25g</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Amina buys a book for ₹ 275 and sells it at a loss of 15%. How much does she sell it for?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">Cost Price (CP) = ₹ 275, Loss% = 15%</div>
                    <div class="sol-step">Loss amount = 15% of 275 = <div class="frac"><span class="num">15</span><span class="den">100</span></div> &times; 275 = <div class="frac"><span class="num">4125</span><span class="den">100</span></div> = ₹ 41.25</div>
                    <div class="sol-step">Selling Price (SP) = CP - Loss = 275 - 41.25 = 233.75</div>
                    <div class="sol-step">Answer: She sells the book for <span class="ans-highlight">₹ 233.75</span>.</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Find the amount to be paid at the end of 3 years in each case:<br/>
                (a) Principal = ₹ 1,200 at 12% p.a.<br/>
                (b) Principal = ₹ 7,500 at 5% p.a.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Principal = ₹ 1,200 at 12% p.a.:</b></div>
                    <div class="sol-step">P = ₹ 1200, R = 12% p.a., T = 3 years.</div>
                    <div class="sol-step">Simple Interest (SI) = <div class="frac"><span class="num">P &times; R &times; T</span><span class="den">100</span></div> = <div class="frac"><span class="num">1200 &times; 12 &times; 3</span><span class="den">100</span></div> = 12 &times; 36 = ₹ 432</div>
                    <div class="sol-step">Amount = Principal + SI = 1200 + 432 = 1632</div>
                    <div class="sol-step">Answer: Amount is <span class="ans-highlight">₹ 1,632</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) Principal = ₹ 7,500 at 5% p.a.:</b></div>
                    <div class="sol-step">P = ₹ 7500, R = 5% p.a., T = 3 years.</div>
                    <div class="sol-step">Simple Interest (SI) = <div class="frac"><span class="num">7500 &times; 5 &times; 3</span><span class="den">100</span></div> = 75 &times; 15 = ₹ 1125</div>
                    <div class="sol-step">Amount = Principal + SI = 7500 + 1125 = 8625</div>
                    <div class="sol-step">Answer: Amount is <span class="ans-highlight">₹ 8,625</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. What rate gives ₹ 280 as interest on a sum of ₹ 56,000 in 2 years?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">P = ₹ 56,000, SI = ₹ 280, T = 2 years.</div>
                    <div class="sol-step">SI = <div class="frac"><span class="num">P &times; R &times; T</span><span class="den">100</span></div> => 280 = <div class="frac"><span class="num">56000 &times; R &times; 2</span><span class="den">100</span></div></div>
                    <div class="sol-step">=> 280 = 1120 &times; R => R = <div class="frac"><span class="num">280</span><span class="den">1120</span></div> = <div class="frac"><span class="num">1</span><span class="den">4</span></div> = 0.25%</div>
                    <div class="sol-step">Answer: The interest rate is <span class="ans-highlight">0.25% p.a.</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">11. Meena gives an interest of ₹ 45 for one year at 9% rate p.a. What is the sum she has borrowed?</div>
                <div class="sol-body">
                    <div class="sol-step"><span class="step-label">Solution:</span></div>
                    <div class="sol-step">SI = ₹ 45, R = 9%, T = 1 year, Principal (P) = ?</div>
                    <div class="sol-step">SI = <div class="frac"><span class="num">P &times; R &times; T</span><span class="den">100</span></div> => 45 = <div class="frac"><span class="num">P &times; 9 &times; 1</span><span class="den">100</span></div></div>
                    <div class="sol-step">=> P = <div class="frac"><span class="num">45 &times; 100</span><span class="den">9</span></div> = 5 &times; 100 = 500</div>
                    <div class="sol-step">Answer: Meena borrowed <span class="ans-highlight">₹ 500</span>.</div>
                </div>
            </div>
        </div>
    `,
  },
  examples: [],
  mcqs: [
    {
      id: "m1",
      question: "Ratio of 1 km to 100 m is:",
      options: ["1:100", "10:1", "1:10", "100:1"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question: "0.75 as a percentage is:",
      options: ["7.5%", "75%", "0.75%", "750%"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question: "If CP = 100 and SP = 120, then profit% is:",
      options: ["20%", "10%", "25%", "15%"],
      correctAnswer: "A",
    },
    {
      id: "m4",
      question: "Simple Interest on ₹1000 at 10% for 1 year is:",
      options: ["₹100", "₹10", "₹1", "₹1000"],
      correctAnswer: "A",
    },
    {
      id: "m5",
      question: "20% of 50 is:",
      options: ["10", "20", "5", "1"],
      correctAnswer: "A",
    },
    {
      id: "m6",
      question: "If 10% of x is 20, then x is:",
      options: ["200", "100", "20", "2000"],
      correctAnswer: "A",
    },
    {
      id: "m7",
      question: "Ratio 3:1 in percentage is:",
      options: ["75%, 25%", "25%, 75%", "30%, 10%", "3%, 1%"],
      correctAnswer: "A",
    },
    {
      id: "m8",
      question: "Principal = ₹500, Rate = 5%, Time = 2 years. SI is:",
      options: ["₹50", "₹25", "₹100", "₹10"],
      correctAnswer: "A",
    },
    {
      id: "m9",
      question: "Profit is made when:",
      options: ["SP > CP", "CP > SP", "SP = CP", "None"],
      correctAnswer: "A",
    },
    {
      id: "m10",
      question: "0.02 as percentage is:",
      options: ["2%", "20%", "0.2%", "200%"],
      correctAnswer: "A",
    },
  ],
  summary: [],
};
