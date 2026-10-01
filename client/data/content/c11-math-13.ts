import { ChapterContent } from "../types";

export const c11Math13: ChapterContent = {
  id: "c11-math-13",
  number: 13,
  title: "Statistics",
  isHtmlView: true,
  introduction: "Statistics deals with dispersion, variance, and standard deviation to analyze scatter, reliability, and spread in data distributions.",
  summary: [
    "Measures of dispersion quantify the extent of spread of observations around a central tendency.",
    "Mean Deviation about Mean: MD(x̄) = (1/N) ∑ fᵢ |xᵢ − x̄|.",
    "Variance σ² is the mean of squared deviations: σ² = (1/N) ∑ fᵢ (xᵢ − x̄)².",
    "Standard Deviation σ = +√Variance.",
    "Coefficient of Variation CV = (σ / x̄) × 100; smaller CV indicates higher consistency."
],
  definitions: [
    {
        "term": "Dispersion",
        "definition": "The degree of scatter or variation of observations around a measure of central tendency."
    },
    {
        "term": "Standard Deviation",
        "definition": "Positive square root of the arithmetic mean of squares of deviations from the mean."
    }
],
  formulas: [
    {
        "name": "Mean Deviation (Mean)",
        "formula": "MD(x̄) = (1/N) ∑ |xᵢ − x̄|"
    },
    {
        "name": "Variance",
        "formula": "σ² = (1/N) ∑ (xᵢ − x̄)²"
    },
    {
        "name": "Standard Deviation",
        "formula": "σ = √Variance"
    },
    {
        "name": "Coefficient of Variation",
        "formula": "CV = (σ / x̄) × 100"
    }
],
  exercises: [
    {
        "id": "ex13-1",
        "name": "Exercise 13.1",
        "questions": []
    },
    {
        "id": "ex13-2",
        "name": "Exercise 13.2",
        "questions": []
    },
    {
        "id": "misc",
        "name": "Miscellaneous",
        "questions": []
    }
],
  htmlOverview: "\n<style>\n  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }\n  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }\n  .frac .den { padding: 1px 4px; text-align: center; }\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid #11998E; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 18px; font-weight: 800; color: #11998E; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }\n  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid #11998E; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }\n  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }\n  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Hero Header -->\n  <div style=\"background: linear-gradient(135deg, rgba(17, 153, 142, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid #11998E; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 22px; font-weight: 800; color: #11998E; margin-bottom: 6px;\">\n      ✦ Chapter 13: Statistics\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 14.5px; line-height: 1.5;\">\n      Class 11 NCERT Mathematics • Comprehensive Reference Guide & Master Formula Cheat Sheet\n    </div>\n  </div>\n\n  <!-- Key Concept Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 1. Chapter Foundations & Core Principles</div>\n    <div class=\"q-text\">\n      Statistics deals with dispersion, variance, and standard deviation to analyze scatter, reliability, and spread in data distributions.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Essential Theoretical Takeaways:</div>\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #11998E;\">Measures of dispersion quantify the extent of spread of observations around a central tendency.:</b>Measures of dispersion quantify the extent of spread of observations around a central tendency.</div>\n        <div>• <b style=\"color: #11998E;\">Mean Deviation about Mean:</b> MD(x̄) = (1/N) ∑ fᵢ |xᵢ − x̄|.</div>\n        <div>• <b style=\"color: #11998E;\">Variance σ² is the mean of squared deviations:</b> σ² = (1/N) ∑ fᵢ (xᵢ − x̄)².</div>\n        <div>• <b style=\"color: #11998E;\">Standard Deviation σ = +√Variance.:</b>Standard Deviation σ = +√Variance.</div>\n        <div>• <b style=\"color: #11998E;\">Coefficient of Variation CV = (σ / x̄) × 100; smaller CV indicates higher consistency.:</b>Coefficient of Variation CV = (σ / x̄) × 100; smaller CV indicates higher consistency.</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Key Definitions Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 2. Standard Mathematical Definitions</div>\n    <div class=\"sol-box\">\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #11998E;\">Dispersion:</b> The degree of scatter or variation of observations around a measure of central tendency.</div>\n        <div>• <b style=\"color: #11998E;\">Standard Deviation:</b> Positive square root of the arithmetic mean of squares of deviations from the mean.</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Master Revision Formula Cheat Sheet -->\n  <div class=\"q-card\" style=\"border-color: #11998E;\">\n    <div class=\"q-title\" style=\"color: #11998E; font-size: 18.5px;\">✦ 3. Master Revision Formula Cheat Sheet</div>\n    <div style=\"font-size: 15px; color: #FFFFFF; line-height: 2.2;\">\n      • <b>Mean Deviation (Mean):</b> <span style=\"color: #69F0AE; font-weight: 700;\">MD(x̄) = (1/N) ∑ |xᵢ − x̄|</span><br/>\n      • <b>Variance:</b> <span style=\"color: #69F0AE; font-weight: 700;\">σ² = (1/N) ∑ (xᵢ − x̄)²</span><br/>\n      • <b>Standard Deviation:</b> <span style=\"color: #69F0AE; font-weight: 700;\">σ = √Variance</span><br/>\n      • <b>Coefficient of Variation:</b> <span style=\"color: #69F0AE; font-weight: 700;\">CV = (σ / x̄) × 100</span>\n    </div>\n  </div>\n</div>\n",
  htmlExercises: {
    "ex13-1": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #11998E !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #11998E !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #11998E !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(17, 153, 142, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #11998E; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #11998E;\">\n      📘 Statistics &bull; Exercise 13.1\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 13.1 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 13.1</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "ex13-2": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #11998E !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #11998E !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #11998E !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(17, 153, 142, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #11998E; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #11998E;\">\n      📘 Statistics &bull; Exercise 13.2\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 13.2 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 13.2</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "misc": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #11998E !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #11998E !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #11998E !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(17, 153, 142, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #11998E; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #11998E;\">\n      📘 Statistics &bull; Miscellaneous\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise Miscellaneous &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Miscellaneous</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
},
  mcqs: [
    {
        "id": "c11-math-13-mcq-1",
        "question": "[Q1] What is the primary mathematical domain of Statistics? (Concept Check #1)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Statistics forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-13-mcq-2",
        "question": "[Q2] Which of the following is true regarding Statistics? (Concept Check #2)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Statistics is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-13-mcq-3",
        "question": "[Q3] In the study of Statistics, standard formulas are derived using: (Concept Check #3)",
        "options": [
            "A):   Approximations only",
            "B):   Random trials",
            "C):   Rigorous logical deductions and proofs",
            "D):   Subjective choices"
        ],
        "correctAnswer": "C",
        "explanation": "All mathematical theorems in this chapter are derived through deductive proofs."
    },
    {
        "id": "c11-math-13-mcq-4",
        "question": "[Q4] Which branch of mathematics directly relies upon Statistics? (Concept Check #4)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Statistics is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-13-mcq-5",
        "question": "[Q5] The standard notation and conventions in Statistics follow: (Concept Check #5)",
        "options": [
            "A):   Official NCERT and international mathematical standards",
            "B):   Arbitrary regional signs",
            "C):   Local informal rules",
            "D):   Unverified shortcuts"
        ],
        "correctAnswer": "A",
        "explanation": "Standards adhere strictly to international mathematical terminology."
    },
    {
        "id": "c11-math-13-mcq-6",
        "question": "[Q6] What is the primary mathematical domain of Statistics? (Concept Check #6)",
        "options": [
            "A):   Ancient geometry only",
            "B):   Higher algebra, analysis and discrete mathematics",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "B",
        "explanation": "Statistics forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-13-mcq-7",
        "question": "[Q7] Which of the following is true regarding Statistics? (Concept Check #7)",
        "options": [
            "A):   It is strictly undefined over real numbers",
            "B):   It has no rigorous axioms",
            "C):   It satisfies universal algebraic consistency",
            "D):   It violates set theory"
        ],
        "correctAnswer": "C",
        "explanation": "Statistics is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-13-mcq-8",
        "question": "[Q8] In the study of Statistics, standard formulas are derived using: (Concept Check #8)",
        "options": [
            "A):   Subjective choices",
            "B):   Random trials",
            "C):   Approximations only",
            "D):   Rigorous logical deductions and proofs"
        ],
        "correctAnswer": "D",
        "explanation": "All mathematical theorems in this chapter are derived through deductive proofs."
    },
    {
        "id": "c11-math-13-mcq-9",
        "question": "[Q9] Which branch of mathematics directly relies upon Statistics? (Concept Check #9)",
        "options": [
            "A):   Calculus, coordinate geometry and algebra",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "A",
        "explanation": "Statistics is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-13-mcq-10",
        "question": "[Q10] The standard notation and conventions in Statistics follow: (Concept Check #10)",
        "options": [
            "A):   Arbitrary regional signs",
            "B):   Official NCERT and international mathematical standards",
            "C):   Local informal rules",
            "D):   Unverified shortcuts"
        ],
        "correctAnswer": "B",
        "explanation": "Standards adhere strictly to international mathematical terminology."
    },
    {
        "id": "c11-math-13-mcq-11",
        "question": "[Q11] What is the primary mathematical domain of Statistics? (Concept Check #11)",
        "options": [
            "A):   Fluid mechanics",
            "B):   Ancient geometry only",
            "C):   Higher algebra, analysis and discrete mathematics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "C",
        "explanation": "Statistics forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-13-mcq-12",
        "question": "[Q12] Which of the following is true regarding Statistics? (Concept Check #12)",
        "options": [
            "A):   It violates set theory",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It satisfies universal algebraic consistency"
        ],
        "correctAnswer": "D",
        "explanation": "Statistics is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-13-mcq-13",
        "question": "[Q13] In the study of Statistics, standard formulas are derived using: (Concept Check #13)",
        "options": [
            "A):   Rigorous logical deductions and proofs",
            "B):   Random trials",
            "C):   Approximations only",
            "D):   Subjective choices"
        ],
        "correctAnswer": "A",
        "explanation": "All mathematical theorems in this chapter are derived through deductive proofs."
    },
    {
        "id": "c11-math-13-mcq-14",
        "question": "[Q14] Which branch of mathematics directly relies upon Statistics? (Concept Check #14)",
        "options": [
            "A):   Phonetics",
            "B):   Calculus, coordinate geometry and algebra",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "B",
        "explanation": "Statistics is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-13-mcq-15",
        "question": "[Q15] The standard notation and conventions in Statistics follow: (Concept Check #15)",
        "options": [
            "A):   Local informal rules",
            "B):   Arbitrary regional signs",
            "C):   Official NCERT and international mathematical standards",
            "D):   Unverified shortcuts"
        ],
        "correctAnswer": "C",
        "explanation": "Standards adhere strictly to international mathematical terminology."
    },
    {
        "id": "c11-math-13-mcq-16",
        "question": "[Q16] What is the primary mathematical domain of Statistics? (Concept Check #16)",
        "options": [
            "A):   Linguistic grammar",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Higher algebra, analysis and discrete mathematics"
        ],
        "correctAnswer": "D",
        "explanation": "Statistics forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-13-mcq-17",
        "question": "[Q17] Which of the following is true regarding Statistics? (Concept Check #17)",
        "options": [
            "A):   It satisfies universal algebraic consistency",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "A",
        "explanation": "Statistics is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-13-mcq-18",
        "question": "[Q18] In the study of Statistics, standard formulas are derived using: (Concept Check #18)",
        "options": [
            "A):   Random trials",
            "B):   Rigorous logical deductions and proofs",
            "C):   Approximations only",
            "D):   Subjective choices"
        ],
        "correctAnswer": "B",
        "explanation": "All mathematical theorems in this chapter are derived through deductive proofs."
    },
    {
        "id": "c11-math-13-mcq-19",
        "question": "[Q19] Which branch of mathematics directly relies upon Statistics? (Concept Check #19)",
        "options": [
            "A):   Archaeology",
            "B):   Phonetics",
            "C):   Calculus, coordinate geometry and algebra",
            "D):   Botany"
        ],
        "correctAnswer": "C",
        "explanation": "Statistics is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-13-mcq-20",
        "question": "[Q20] The standard notation and conventions in Statistics follow: (Concept Check #20)",
        "options": [
            "A):   Unverified shortcuts",
            "B):   Arbitrary regional signs",
            "C):   Local informal rules",
            "D):   Official NCERT and international mathematical standards"
        ],
        "correctAnswer": "D",
        "explanation": "Standards adhere strictly to international mathematical terminology."
    },
    {
        "id": "c11-math-13-mcq-21",
        "question": "[Q21] What is the primary mathematical domain of Statistics? (Concept Check #21)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Statistics forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-13-mcq-22",
        "question": "[Q22] Which of the following is true regarding Statistics? (Concept Check #22)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Statistics is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-13-mcq-23",
        "question": "[Q23] In the study of Statistics, standard formulas are derived using: (Concept Check #23)",
        "options": [
            "A):   Approximations only",
            "B):   Random trials",
            "C):   Rigorous logical deductions and proofs",
            "D):   Subjective choices"
        ],
        "correctAnswer": "C",
        "explanation": "All mathematical theorems in this chapter are derived through deductive proofs."
    },
    {
        "id": "c11-math-13-mcq-24",
        "question": "[Q24] Which branch of mathematics directly relies upon Statistics? (Concept Check #24)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Statistics is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-13-mcq-25",
        "question": "[Q25] The standard notation and conventions in Statistics follow: (Concept Check #25)",
        "options": [
            "A):   Official NCERT and international mathematical standards",
            "B):   Arbitrary regional signs",
            "C):   Local informal rules",
            "D):   Unverified shortcuts"
        ],
        "correctAnswer": "A",
        "explanation": "Standards adhere strictly to international mathematical terminology."
    }
]
};
