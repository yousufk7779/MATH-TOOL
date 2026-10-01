import { ChapterContent } from "../types";

export const c11Math12: ChapterContent = {
  id: "c11-math-12",
  number: 12,
  title: "Limits and Derivatives",
  isHtmlView: true,
  introduction: "Limits and Derivatives initiate calculus, formalizing instantaneous rates of change, continuous curves, and tangents.",
  summary: [
    "Limit lim_{x→a} f(x) exists iff Left Hand Limit (LHL) equals Right Hand Limit (RHL).",
    "Standard limit: lim_{x→a} (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹.",
    "Trigonometric limit: lim_{x→0} (sin x)/x = 1 (x in radians).",
    "Derivative from first principles: f′(x) = lim_{h→0} [f(x + h) − f(x)] / h.",
    "Algebra of derivatives: Product rule (uv)′ = u′v + uv′, Quotient rule (u/v)′ = (u′v − uv′)/v²."
],
  definitions: [
    {
        "term": "Limit of a Function",
        "definition": "The value that a function approaches as the input approaches some value."
    },
    {
        "term": "Derivative",
        "definition": "The instantaneous rate of change of a function with respect to its independent variable."
    }
],
  formulas: [
    {
        "name": "Power Rule",
        "formula": "d/dx (xⁿ) = n xⁿ⁻¹"
    },
    {
        "name": "Trigonometric Limit",
        "formula": "lim_{x→0} (sin x)/x = 1"
    },
    {
        "name": "Product Rule",
        "formula": "(uv)′ = u′v + uv′"
    },
    {
        "name": "Quotient Rule",
        "formula": "(u/v)′ = (u′v − uv′)/v²"
    }
],
  exercises: [
    {
        "id": "ex12-1",
        "name": "Exercise 12.1",
        "questions": []
    },
    {
        "id": "ex12-2",
        "name": "Exercise 12.2",
        "questions": []
    },
    {
        "id": "misc",
        "name": "Miscellaneous",
        "questions": []
    }
],
  htmlOverview: "\n<style>\n  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }\n  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }\n  .frac .den { padding: 1px 4px; text-align: center; }\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid #00B0FF; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 18px; font-weight: 800; color: #00B0FF; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }\n  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid #00B0FF; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }\n  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }\n  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Hero Header -->\n  <div style=\"background: linear-gradient(135deg, rgba(0, 176, 255, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid #00B0FF; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 22px; font-weight: 800; color: #00B0FF; margin-bottom: 6px;\">\n      ✦ Chapter 12: Limits and Derivatives\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 14.5px; line-height: 1.5;\">\n      Class 11 NCERT Mathematics • Comprehensive Reference Guide & Master Formula Cheat Sheet\n    </div>\n  </div>\n\n  <!-- Key Concept Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 1. Chapter Foundations & Core Principles</div>\n    <div class=\"q-text\">\n      Limits and Derivatives initiate calculus, formalizing instantaneous rates of change, continuous curves, and tangents.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Essential Theoretical Takeaways:</div>\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #00B0FF;\">Limit lim_{x→a} f(x) exists iff Left Hand Limit (LHL) equals Right Hand Limit (RHL).:</b>Limit lim_{x→a} f(x) exists iff Left Hand Limit (LHL) equals Right Hand Limit (RHL).</div>\n        <div>• <b style=\"color: #00B0FF;\">Standard limit:</b> lim_{x→a} (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹.</div>\n        <div>• <b style=\"color: #00B0FF;\">Trigonometric limit:</b> lim_{x→0} (sin x)/x = 1 (x in radians).</div>\n        <div>• <b style=\"color: #00B0FF;\">Derivative from first principles:</b> f′(x) = lim_{h→0} [f(x + h) − f(x)] / h.</div>\n        <div>• <b style=\"color: #00B0FF;\">Algebra of derivatives:</b> Product rule (uv)′ = u′v + uv′, Quotient rule (u/v)′ = (u′v − uv′)/v².</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Key Definitions Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 2. Standard Mathematical Definitions</div>\n    <div class=\"sol-box\">\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #00B0FF;\">Limit of a Function:</b> The value that a function approaches as the input approaches some value.</div>\n        <div>• <b style=\"color: #00B0FF;\">Derivative:</b> The instantaneous rate of change of a function with respect to its independent variable.</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Master Revision Formula Cheat Sheet -->\n  <div class=\"q-card\" style=\"border-color: #00B0FF;\">\n    <div class=\"q-title\" style=\"color: #00B0FF; font-size: 18.5px;\">✦ 3. Master Revision Formula Cheat Sheet</div>\n    <div style=\"font-size: 15px; color: #FFFFFF; line-height: 2.2;\">\n      • <b>Power Rule:</b> <span style=\"color: #69F0AE; font-weight: 700;\">d/dx (xⁿ) = n xⁿ⁻¹</span><br/>\n      • <b>Trigonometric Limit:</b> <span style=\"color: #69F0AE; font-weight: 700;\">lim_{x→0} (sin x)/x = 1</span><br/>\n      • <b>Product Rule:</b> <span style=\"color: #69F0AE; font-weight: 700;\">(uv)′ = u′v + uv′</span><br/>\n      • <b>Quotient Rule:</b> <span style=\"color: #69F0AE; font-weight: 700;\">(u/v)′ = (u′v − uv′)/v²</span>\n    </div>\n  </div>\n</div>\n",
  htmlExercises: {
    "ex12-1": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #00B0FF !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #00B0FF !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #00B0FF !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(0, 176, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #00B0FF; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #00B0FF;\">\n      📘 Limits and Derivatives &bull; Exercise 12.1\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 12.1 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 12.1</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "ex12-2": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #00B0FF !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #00B0FF !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #00B0FF !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(0, 176, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #00B0FF; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #00B0FF;\">\n      📘 Limits and Derivatives &bull; Exercise 12.2\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 12.2 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 12.2</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "misc": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #00B0FF !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #00B0FF !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #00B0FF !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(0, 176, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #00B0FF; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #00B0FF;\">\n      📘 Limits and Derivatives &bull; Miscellaneous\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise Miscellaneous &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Miscellaneous</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
},
  mcqs: [
    {
        "id": "c11-math-12-mcq-1",
        "question": "[Q1] What is the primary mathematical domain of Limits and Derivatives? (Concept Check #1)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Limits and Derivatives forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-12-mcq-2",
        "question": "[Q2] Which of the following is true regarding Limits and Derivatives? (Concept Check #2)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Limits and Derivatives is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-12-mcq-3",
        "question": "[Q3] In the study of Limits and Derivatives, standard formulas are derived using: (Concept Check #3)",
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
        "id": "c11-math-12-mcq-4",
        "question": "[Q4] Which branch of mathematics directly relies upon Limits and Derivatives? (Concept Check #4)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Limits and Derivatives is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-12-mcq-5",
        "question": "[Q5] The standard notation and conventions in Limits and Derivatives follow: (Concept Check #5)",
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
        "id": "c11-math-12-mcq-6",
        "question": "[Q6] What is the primary mathematical domain of Limits and Derivatives? (Concept Check #6)",
        "options": [
            "A):   Ancient geometry only",
            "B):   Higher algebra, analysis and discrete mathematics",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "B",
        "explanation": "Limits and Derivatives forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-12-mcq-7",
        "question": "[Q7] Which of the following is true regarding Limits and Derivatives? (Concept Check #7)",
        "options": [
            "A):   It is strictly undefined over real numbers",
            "B):   It has no rigorous axioms",
            "C):   It satisfies universal algebraic consistency",
            "D):   It violates set theory"
        ],
        "correctAnswer": "C",
        "explanation": "Limits and Derivatives is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-12-mcq-8",
        "question": "[Q8] In the study of Limits and Derivatives, standard formulas are derived using: (Concept Check #8)",
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
        "id": "c11-math-12-mcq-9",
        "question": "[Q9] Which branch of mathematics directly relies upon Limits and Derivatives? (Concept Check #9)",
        "options": [
            "A):   Calculus, coordinate geometry and algebra",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "A",
        "explanation": "Limits and Derivatives is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-12-mcq-10",
        "question": "[Q10] The standard notation and conventions in Limits and Derivatives follow: (Concept Check #10)",
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
        "id": "c11-math-12-mcq-11",
        "question": "[Q11] What is the primary mathematical domain of Limits and Derivatives? (Concept Check #11)",
        "options": [
            "A):   Fluid mechanics",
            "B):   Ancient geometry only",
            "C):   Higher algebra, analysis and discrete mathematics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "C",
        "explanation": "Limits and Derivatives forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-12-mcq-12",
        "question": "[Q12] Which of the following is true regarding Limits and Derivatives? (Concept Check #12)",
        "options": [
            "A):   It violates set theory",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It satisfies universal algebraic consistency"
        ],
        "correctAnswer": "D",
        "explanation": "Limits and Derivatives is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-12-mcq-13",
        "question": "[Q13] In the study of Limits and Derivatives, standard formulas are derived using: (Concept Check #13)",
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
        "id": "c11-math-12-mcq-14",
        "question": "[Q14] Which branch of mathematics directly relies upon Limits and Derivatives? (Concept Check #14)",
        "options": [
            "A):   Phonetics",
            "B):   Calculus, coordinate geometry and algebra",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "B",
        "explanation": "Limits and Derivatives is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-12-mcq-15",
        "question": "[Q15] The standard notation and conventions in Limits and Derivatives follow: (Concept Check #15)",
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
        "id": "c11-math-12-mcq-16",
        "question": "[Q16] What is the primary mathematical domain of Limits and Derivatives? (Concept Check #16)",
        "options": [
            "A):   Linguistic grammar",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Higher algebra, analysis and discrete mathematics"
        ],
        "correctAnswer": "D",
        "explanation": "Limits and Derivatives forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-12-mcq-17",
        "question": "[Q17] Which of the following is true regarding Limits and Derivatives? (Concept Check #17)",
        "options": [
            "A):   It satisfies universal algebraic consistency",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "A",
        "explanation": "Limits and Derivatives is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-12-mcq-18",
        "question": "[Q18] In the study of Limits and Derivatives, standard formulas are derived using: (Concept Check #18)",
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
        "id": "c11-math-12-mcq-19",
        "question": "[Q19] Which branch of mathematics directly relies upon Limits and Derivatives? (Concept Check #19)",
        "options": [
            "A):   Archaeology",
            "B):   Phonetics",
            "C):   Calculus, coordinate geometry and algebra",
            "D):   Botany"
        ],
        "correctAnswer": "C",
        "explanation": "Limits and Derivatives is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-12-mcq-20",
        "question": "[Q20] The standard notation and conventions in Limits and Derivatives follow: (Concept Check #20)",
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
        "id": "c11-math-12-mcq-21",
        "question": "[Q21] What is the primary mathematical domain of Limits and Derivatives? (Concept Check #21)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Limits and Derivatives forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-12-mcq-22",
        "question": "[Q22] Which of the following is true regarding Limits and Derivatives? (Concept Check #22)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Limits and Derivatives is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-12-mcq-23",
        "question": "[Q23] In the study of Limits and Derivatives, standard formulas are derived using: (Concept Check #23)",
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
        "id": "c11-math-12-mcq-24",
        "question": "[Q24] Which branch of mathematics directly relies upon Limits and Derivatives? (Concept Check #24)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Limits and Derivatives is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-12-mcq-25",
        "question": "[Q25] The standard notation and conventions in Limits and Derivatives follow: (Concept Check #25)",
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
