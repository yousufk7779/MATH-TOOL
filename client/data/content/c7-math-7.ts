import { ChapterContent } from "../types";

export const c7Math7: ChapterContent = {
    id: "c7-math-7",
    number: 7,
    title: "Comparing Quantities",
    isHtmlView: true,
    introduction: "Comparing quantities is part of our daily life. Whether it is price, height, or scores, we use ratios, percentages, and interest rates to understand relative values.",
    definitions: [
        { term: "Ratio", definition: "A comparison of two quantities by division." },
        { term: "Percentage", definition: "A fraction with denominator 100." },
        { term: "Profit", definition: "When Selling Price (SP) is greater than Cost Price (CP)." },
        { term: "Simple Interest", definition: "Interest calculated on the principal amount for a given time and rate." }
    ],
    keyPoints: [
        "To compare two quantities, their units must be the same.",
        "Percentage = (Value / Total) × 100.",
        "Profit = SP - CP; Loss = CP - SP.",
        "Simple Interest (SI) = (P × R × T) / 100."
    ],
    formulas: [
        { name: "Simple Interest", formula: "SI = (P × R × T) / 100" },
        { name: "Profit Percentage", formula: "(Profit / CP) × 100" }
    ],
    crux: [],
    exercises: [
        { id: "ex7-1", name: "Exercise 7.1", questions: [] },
        { id: "ex7-2", name: "Exercise 7.2", questions: [] },
        { id: "ex7-3", name: "Exercise 7.3", questions: [] }
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
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Find the ratio of: <br/>(a) Rs 5 to 50 paise <br/>(b) 15 kg to 210 g <br/>(c) 9 m to 27 cm <br/>(d) 30 days to 36 hours</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Rs 5 to 50 paise</b></div>
                    <div class="sol-step">=> We know, 1 Rs = 100 paise</div>
                    <div class="sol-step">=> Rs 5 = 5 &times; 100 = 500 paise</div>
                    <div class="sol-step">=> Ratio = <span class="frac"><span class="num">500</span><span class="den">50</span></span> = 10 : 1</div>
                    <div class="sol-step">Result: <span class="ans-highlight">10 : 1</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(b) 15 kg to 210 g</b></div>
                    <div class="sol-step">=> 1 kg = 1000 g</div>
                    <div class="sol-step">=> 15 kg = 15 &times; 1000 = 15000 g</div>
                    <div class="sol-step">=> Ratio = <span class="frac"><span class="num">15000</span><span class="den">210</span></span> = <span class="frac"><span class="num">1500</span><span class="den">21</span></span></div>
                    <div class="sol-step">=> Dividing by 3 = <span class="frac"><span class="num">500</span><span class="den">7</span></span></div>
                    <div class="sol-step">Result: <span class="ans-highlight">500 : 7</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(c) 9 m to 27 cm</b></div>
                    <div class="sol-step">=> 1 m = 100 cm</div>
                    <div class="sol-step">=> 9 m = 900 cm</div>
                    <div class="sol-step">=> Ratio = <span class="frac"><span class="num">900</span><span class="den">27</span></span> = <span class="frac"><span class="num">100</span><span class="den">3</span></span></div>
                    <div class="sol-step">Result: <span class="ans-highlight">100 : 3</span></div>

                    <div class="sol-step" style="margin-top: 15px;"><b>(d) 30 days to 36 hours</b></div>
                    <div class="sol-step">=> 1 day = 24 hours</div>
                    <div class="sol-step">=> 30 days = 30 &times; 24 = 720 hours</div>
                    <div class="sol-step">=> Ratio = <span class="frac"><span class="num">720</span><span class="den">36</span></span> = 20 : 1</div>
                    <div class="sol-step">Result: <span class="ans-highlight">20 : 1</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. In a computer lab, there are 3 computers for every 6 students. How many computers will be needed for 24 students?</div>
                <div class="sol-body">
                    <div class="sol-step">=> For 6 students, computers needed = 3</div>
                    <div class="sol-step">=> For 1 student = <span class="frac"><span class="num">3</span><span class="den">6</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span> computer</div>
                    <div class="sol-step">=> For 24 students = (<span class="frac"><span class="num">1</span><span class="den">2</span></span>) &times; 24 = 12</div>
                    <div class="sol-step">Result: <span class="ans-highlight">12 computers</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. Population of Rajasthan = 570 lakhs and population of UP = 1660 lakhs. Area of Rajasthan = 3 lakh km² and area of UP = 2 lakh km². <br/>(i) How many people are there per km² in both these States? <br/>(ii) Which State is less populated?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) People per km²:</b></div>
                    <div class="sol-step">=> Rajasthan = <span class="frac"><span class="num">570</span><span class="den">3</span></span> = 190, UP = <span class="frac"><span class="num">1660</span><span class="den">2</span></span> = 830</div>
                    
                    <div class="sol-step" style="margin-top: 15px;"><b>(ii) Which state is less populated?</b></div>
                    <div class="sol-step">=> Rajasthan has fewer people per unit area (190 < 830).</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Rajasthan</span></div>
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
            .diagram-container { background: #1a1a2e; padding: 15px; border-radius: 12px; border: 1px solid rgba(255, 167, 38, 0.3); text-align: center; margin: 10px 0; }
            .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; margin: 0 4px; line-height: 1.1; }
            .frac .num { border-bottom: 1px solid #fff; padding: 0 2px; display: block; }
            .frac .den { display: block; padding: 0 2px; }
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">4. Find: <br/>(a) 15% of 250 <br/>(b) 1% of 1 hour <br/>(c) 20% of Rs 2500 <br/>(d) 75% of 1 kg</div>
                <div class="sol-body">
                    <div class="sol-step">(a) 15% of 250 = (<span class="frac"><span class="num">15</span><span class="den">100</span></span>) &times; 250 = 37.5</div>
                    <div class="sol-step">(b) 1% of 1 hr = (<span class="frac"><span class="num">1</span><span class="den">100</span></span>) &times; 3600 sec = 36 seconds</div>
                    <div class="sol-step">(c) 20% of Rs 2500 = (<span class="frac"><span class="num">20</span><span class="den">100</span></span>) &times; 2500 = Rs 500</div>
                    <div class="sol-step">(d) 75% of 1 kg = (<span class="frac"><span class="num">75</span><span class="den">100</span></span>) &times; 1000 g = 750 g</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. Find the whole quantity if: <br/>(a) 5% of it is 600 <br/>(b) 12% of it is Rs 1080 <br/>(c) 40% of it is 500 km <br/>(d) 70% of it is 14 minutes <br/>(e) 8% of it is 40 litres</div>
                <div class="sol-body">
                    <div class="sol-step">(a) 5% of x = 600 => x = <span class="frac"><span class="num">600 &times; 100</span><span class="den">5</span></span> = 12000</div>
                    <div class="sol-step">(b) 12% of x = 1080 => x = <span class="frac"><span class="num">1080 &times; 100</span><span class="den">12</span></span> = Rs 9000</div>
                    <div class="sol-step">(c) 40% of x = 500 => x = <span class="frac"><span class="num">500 &times; 100</span><span class="den">40</span></span> = 1250 km</div>
                    <div class="sol-step">(d) 70% of x = 14 => x = <span class="frac"><span class="num">14 &times; 100</span><span class="den">70</span></span> = 20 minutes</div>
                    <div class="sol-step">(e) 8% of x = 40 => x = <span class="frac"><span class="num">40 &times; 100</span><span class="den">8</span></span> = 500 litres</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Convert given per cents to decimal fractions and also to fractions in simplest forms: <br/>(a) 25% (b) 150% (c) 20% (d) 5%</div>
                <div class="sol-body">
                    <div class="sol-step">(a) 25% = 0.25 = <span class="frac"><span class="num">1</span><span class="den">4</span></span></div>
                    <div class="sol-step">(b) 150% = 1.5 = <span class="frac"><span class="num">3</span><span class="den">2</span></span></div>
                    <div class="sol-step">(c) 20% = 0.2 = <span class="frac"><span class="num">1</span><span class="den">5</span></span></div>
                    <div class="sol-step">(d) 5% = 0.05 = <span class="frac"><span class="num">1</span><span class="den">20</span></span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. In a city, 30% are females, 40% are males and remaining are children. What per cent are children?</div>
                <div class="sol-body">
                    <div class="sol-step">=> Total percentage = 100%</div>
                    <div class="sol-step">=> Children % = 100% - (30% + 40%)</div>
                    <div class="sol-step">=> 100% - 70% = 30%</div>
                    <div class="sol-step">Result: <span class="ans-highlight">30%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">8. Out of 15,000 voters in a constituency, 60% voted. Find the percentage of voters who did not vote. Can you now find how many actually did not vote?</div>
                <div class="sol-body">
                    <div class="sol-step">=> Voters not voting = 100% - 60% = 40%</div>
                    <div class="sol-step">=> Count = 40% of 15000 = (<span class="frac"><span class="num">40</span><span class="den">100</span></span>) &times; 15000 = 6000</div>
                    <div class="sol-step">Result: <span class="ans-highlight">40% (6000 voters)</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Meeta saves ₹ 400 from her salary. If this is 10% of her salary. What is her salary?</div>
                <div class="sol-body">
                    <div class="sol-step">=> 10% of Salary = Rs 400</div>
                    <div class="sol-step">=> Salary = <span class="frac"><span class="num">400 &times; 100</span><span class="den">10</span></span> = Rs 4000</div>
                    <div class="sol-step">Result: <span class="ans-highlight">Rs 4000</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. A local cricket team played 20 matches in one season. It won 25% of them. How many matches did they win?</div>
                <div class="sol-body">
                    <div class="sol-step">=> Matches won = 25% of 20 = (<span class="frac"><span class="num">25</span><span class="den">100</span></span>) &times; 20</div>
                    <div class="sol-step">=> <span class="frac"><span class="num">1</span><span class="den">4</span></span> &times; 20 = 5</div>
                    <div class="sol-step">Result: <span class="ans-highlight">5 matches</span></div>
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
        </style>
        <div class="container">
            <div class="sol-card">
                <div class="question-header">1. Tell what is the profit or loss in the following transactions. Also find profit per cent or loss per cent in each case: <br/>(a) Gardening shears: CP = ₹250, SP = ₹325 <br/>(b) Refrigerator: CP = ₹12,000, SP = ₹13,500 <br/>(c) Cupboard: CP = ₹2,500, SP = ₹3,000 <br/>(d) Skirt: CP = ₹250, SP = ₹150</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) Shears:</b> Profit = 325 - 250 = ₹75. Profit% = (<span class="frac"><span class="num">75</span><span class="den">250</span></span>) &times; 100 = <span class="ans-highlight">30%</span></div>
                    <div class="sol-step"><b>(b) Fridge:</b> Profit = 13500 - 12000 = ₹1500. Profit% = (<span class="frac"><span class="num">1500</span><span class="den">12000</span></span>) &times; 100 = <span class="ans-highlight">12.5%</span></div>
                    <div class="sol-step"><b>(c) Cupboard:</b> Profit = 3000 - 2500 = ₹500. Profit% = (<span class="frac"><span class="num">500</span><span class="den">2500</span></span>) &times; 100 = <span class="ans-highlight">20%</span></div>
                    <div class="sol-step"><b>(d) Skirt:</b> Loss = 250 - 150 = ₹100. Loss% = (<span class="frac"><span class="num">100</span><span class="den">250</span></span>) &times; 100 = <span class="ans-highlight">40%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">2. Convert each part of the ratio to percentage: <br/>(a) 3 : 1 <br/>(b) 2 : 3 : 5 <br/>(c) 1 : 4 <br/>(d) 1 : 2 : 5</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a) 3 : 1</b> Total = 4. Percentage: (<span class="frac"><span class="num">3</span><span class="den">4</span></span> &times; 100), (<span class="frac"><span class="num">1</span><span class="den">4</span></span> &times; 100) = <span class="ans-highlight">75%, 25%</span></div>
                    <div class="sol-step"><b>(b) 2 : 3 : 5</b> Total = 10. Percentage: (<span class="frac"><span class="num">2</span><span class="den">10</span></span> &times; 100), (<span class="frac"><span class="num">3</span><span class="den">10</span></span> &times; 100), (<span class="frac"><span class="num">5</span><span class="den">10</span></span> &times; 100) = <span class="ans-highlight">20%, 30%, 50%</span></div>
                    <div class="sol-step"><b>(c) 1 : 4</b> Total = 5. Percentage: (<span class="frac"><span class="num">1</span><span class="den">5</span></span> &times; 100), (<span class="frac"><span class="num">4</span><span class="den">5</span></span> &times; 100) = <span class="ans-highlight">20%, 80%</span></div>
                    <div class="sol-step"><b>(d) 1 : 2 : 5</b> Total = 8. Percentage: (<span class="frac"><span class="num">1</span><span class="den">8</span></span> &times; 100), (<span class="frac"><span class="num">2</span><span class="den">8</span></span> &times; 100), (<span class="frac"><span class="num">5</span><span class="den">8</span></span> &times; 100) = <span class="ans-highlight">12.5%, 25%, 62.5%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">3. The population of a city decreased from 25,000 to 24,500. Find the percentage decrease.</div>
                <div class="sol-body">
                    <div class="sol-step">=> Decrease = 25000 - 24500 = 500</div>
                    <div class="sol-step">=> Percentage Decrease = (<span class="frac"><span class="num">500</span><span class="den">25000</span></span>) &times; 100 = <span class="frac"><span class="num">500</span><span class="den">250</span></span> = 2%</div>
                    <div class="sol-step">Result: <span class="ans-highlight">2%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">4. Arun bought a car for ₹ 3,50,000. The next year, the price went up to ₹ 3,70,000. What was the percentage of price increase?</div>
                <div class="sol-body">
                    <div class="sol-step">=> Increase = 370000 - 350000 = 20000</div>
                    <div class="sol-step">=> Percentage Increase = (<span class="frac"><span class="num">20000</span><span class="den">350000</span></span>) &times; 100 = <span class="frac"><span class="num">40</span><span class="den">7</span></span> = 5.71%</div>
                    <div class="sol-step">Result: <span class="ans-highlight">5.71%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">5. I buy a T.V. for ₹ 10,000 and sell it at a profit of 20%. How much money do I get for it?</div>
                <div class="sol-body">
                    <div class="sol-step">=> Profit = 20% of 10000 = ₹2,000</div>
                    <div class="sol-step">=> SP = CP + Profit = 10000 + 2000 = ₹12,000</div>
                    <div class="sol-step">Result: <span class="ans-highlight">₹12,000</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">6. Juhi sells a washing machine for ₹13,500. She loses 20% in the bargain. What was the price at which she bought it?</div>
                <div class="sol-body">
                    <div class="sol-step">=> SP = ₹13,500, Loss = 20%</div>
                    <div class="sol-step">=> SP = CP &times; <span class="frac"><span class="num">80</span><span class="den">100</span></span> => CP = <span class="frac"><span class="num">13500 &times; 100</span><span class="den">80</span></span> = ₹16,875</div>
                    <div class="sol-step">Result: <span class="ans-highlight">₹16,875</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">7. (i) Chalk contains calcium, carbon and oxygen in the ratio 10 : 3 : 12. Find the percentage of carbon in chalk. <br/>(ii) If in a stick of chalk, carbon is 3g, what is the weight of the chalk stick?</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(i) Percentage of Carbon:</b> Total parts = 25. Percentage = (<span class="frac"><span class="num">3</span><span class="den">25</span></span>) &times; 100 = 12%</div>
                    <div class="sol-step"><b>(ii) Weight of chalk stick:</b> 12% = 3g. Weight = <span class="frac"><span class="num">3 &times; 100</span><span class="den">12</span></span> = 25g</div>
                    <div class="sol-step">Result: <span class="ans-highlight">(i) 12%, (ii) 25g</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">9. Find the amount to be paid at the end of 3 years in each case: <br/>(a) Principal = ₹1,200 at 12% p.a. <br/>(b) Principal = ₹7,500 at 5% p.a.</div>
                <div class="sol-body">
                    <div class="sol-step"><b>(a)</b> SI = <span class="frac"><span class="num">1200 &times; 12 &times; 3</span><span class="den">100</span></span> = ₹432. Amount = ₹1,632</div>
                    <div class="sol-step"><b>(b)</b> SI = <span class="frac"><span class="num">7500 &times; 5 &times; 3</span><span class="den">100</span></span> = ₹1,125. Amount = ₹8,625</div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">10. What rate gives ₹280 as interest on a sum of ₹56,000 in 2 years?</div>
                <div class="sol-body">
                    <div class="sol-step">=> SI = 280, P = 56000, T = 2</div>
                    <div class="sol-step">=> Rate (R) = <span class="frac"><span class="num">SI &times; 100</span><span class="den">P &times; T</span></span> = <span class="frac"><span class="num">280 &times; 100</span><span class="den">56000 &times; 2</span></span> = 0.25%</div>
                    <div class="sol-step">Result: <span class="ans-highlight">0.25%</span></div>
                </div>
            </div>

            <div class="sol-card">
                <div class="question-header">11. If Meena gives an interest of ₹ 45 for one year at 9% rate p.a.. What is the sum she has borrowed?</div>
                <div class="sol-body">
                    <div class="sol-step">=> SI = 45, T = 1, R = 9%</div>
                    <div class="sol-step">=> Principal (P) = <span class="frac"><span class="num">SI &times; 100</span><span class="den">R &times; T</span></span> = <span class="frac"><span class="num">45 &times; 100</span><span class="den">9 &times; 1</span></span> = ₹500</div>
                    <div class="sol-step">Result: <span class="ans-highlight">₹500</span></div>
                </div>
            </div>
        </div>
        `
    },
    examples: [],
    mcqs: [
        { id: "m1", question: "Ratio of 1 km to 100 m is:", options: ["1:100", "10:1", "1:10", "100:1"], correctAnswer: "B" },
        { id: "m2", question: "0.75 as a percentage is:", options: ["7.5%", "75%", "0.75%", "750%"], correctAnswer: "B" },
        { id: "m3", question: "If CP = 100 and SP = 120, then profit% is:", options: ["20%", "10%", "25%", "15%"], correctAnswer: "A" },
        { id: "m4", question: "Simple Interest on ₹1000 at 10% for 1 year is:", options: ["₹100", "₹10", "₹1", "₹1000"], correctAnswer: "A" },
        { id: "m5", question: "20% of 50 is:", options: ["10", "20", "5", "1"], correctAnswer: "A" },
        { id: "m6", question: "If 10% of x is 20, then x is:", options: ["200", "100", "20", "2000"], correctAnswer: "A" },
        { id: "m7", question: "Ratio 3:1 in percentage is:", options: ["75%, 25%", "25%, 75%", "30%, 10%", "3%, 1%"], correctAnswer: "A" },
        { id: "m8", question: "Principal = ₹500, Rate = 5%, Time = 2 years. SI is:", options: ["₹50", "₹25", "₹100", "₹10"], correctAnswer: "A" },
        { id: "m9", question: "Profit is made when:", options: ["SP > CP", "CP > SP", "SP = CP", "None"], correctAnswer: "A" },
        { id: "m10", question: "0.02 as percentage is:", options: ["2%", "20%", "0.2%", "200%"], correctAnswer: "A" }
    ],
    summary: []
};
