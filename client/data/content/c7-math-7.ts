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
    "ex7-1": ``,
    "ex7-2": ``,
    "ex7-3": ``,
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
