import { ChapterContent } from "../types";

export const c11Math9: ChapterContent = {
  id: "c11-math-9",
  number: 9,
  title: "Straight Lines",
  isHtmlView: true,
  introduction: "Straight Lines in coordinate geometry bridge algebraic equations and geometric trajectories in the two-dimensional Cartesian plane.",
  summary: [
    "Slope m of a line passing through (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁) / (x₂ − x₁).",
    "Two lines are parallel iff m₁ = m₂; perpendicular iff m₁ × m₂ = −1.",
    "Various forms of line equation: Slope-Intercept (y = mx + c), Point-Slope (y − y₁ = m(x − x₁)), Two-Point, Intercept (x/a + y/b = 1), Normal.",
    "Perpendicular distance of point (x₁, y₁) from Ax + By + C = 0 is d = |Ax₁ + By₁ + C| / √(A² + B²)."
],
  definitions: [
    {
        "term": "Slope of a Line",
        "definition": "The tangent of angle of inclination θ that the line makes with positive x-axis: m = tan θ."
    },
    {
        "term": "Collinear Points",
        "definition": "Three or more points lying on the exact same straight line."
    }
],
  formulas: [
    {
        "name": "Slope Formula",
        "formula": "m = (y₂ − y₁) / (x₂ − x₁)"
    },
    {
        "name": "Angle Between Two Lines",
        "formula": "tan θ = |(m₂ − m₁) / (1 + m₁ m₂)|"
    },
    {
        "name": "Distance from Point to Line",
        "formula": "d = |Ax₁ + By₁ + C| / √(A² + B²)"
    },
    {
        "name": "Distance Between Parallel Lines",
        "formula": "d = |C₁ − C₂| / √(A² + B²)"
    }
],
  exercises: [
    {
        "id": "ex9-1",
        "name": "Exercise 9.1",
        "questions": []
    },
    {
        "id": "ex9-2",
        "name": "Exercise 9.2",
        "questions": []
    },
    {
        "id": "ex9-3",
        "name": "Exercise 9.3",
        "questions": []
    },
    {
        "id": "misc",
        "name": "Miscellaneous",
        "questions": []
    }
],
  htmlOverview: "\n<style>\n  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }\n  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }\n  .frac .den { padding: 1px 4px; text-align: center; }\n  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid #E040FB; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }\n  .q-title { font-size: 18px; font-weight: 800; color: #E040FB; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }\n  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }\n  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid #E040FB; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }\n  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }\n  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }\n  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Hero Header -->\n  <div style=\"background: linear-gradient(135deg, rgba(224, 64, 251, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid #E040FB; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 22px; font-weight: 800; color: #E040FB; margin-bottom: 6px;\">\n      ✦ Chapter 9: Straight Lines\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 14.5px; line-height: 1.5;\">\n      Class 11 NCERT Mathematics • Comprehensive Reference Guide & Master Formula Cheat Sheet\n    </div>\n  </div>\n\n  <!-- Key Concept Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 1. Chapter Foundations & Core Principles</div>\n    <div class=\"q-text\">\n      Straight Lines in coordinate geometry bridge algebraic equations and geometric trajectories in the two-dimensional Cartesian plane.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Essential Theoretical Takeaways:</div>\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #E040FB;\">Slope m of a line passing through (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁) / (x₂ − x₁).:</b>Slope m of a line passing through (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁) / (x₂ − x₁).</div>\n        <div>• <b style=\"color: #E040FB;\">Two lines are parallel iff m₁ = m₂; perpendicular iff m₁ × m₂ = −1.:</b>Two lines are parallel iff m₁ = m₂; perpendicular iff m₁ × m₂ = −1.</div>\n        <div>• <b style=\"color: #E040FB;\">Various forms of line equation:</b> Slope-Intercept (y = mx + c), Point-Slope (y − y₁ = m(x − x₁)), Two-Point, Intercept (x/a + y/b = 1), Normal.</div>\n        <div>• <b style=\"color: #E040FB;\">Perpendicular distance of point (x₁, y₁) from Ax + By + C = 0 is d = |Ax₁ + By₁ + C| / √(A² + B²).:</b>Perpendicular distance of point (x₁, y₁) from Ax + By + C = 0 is d = |Ax₁ + By₁ + C| / √(A² + B²).</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Key Definitions Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">✦ 2. Standard Mathematical Definitions</div>\n    <div class=\"sol-box\">\n      <div class=\"sol-step\">\n        <div>• <b style=\"color: #E040FB;\">Slope of a Line:</b> The tangent of angle of inclination θ that the line makes with positive x-axis: m = tan θ.</div>\n        <div>• <b style=\"color: #E040FB;\">Collinear Points:</b> Three or more points lying on the exact same straight line.</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Master Revision Formula Cheat Sheet -->\n  <div class=\"q-card\" style=\"border-color: #E040FB;\">\n    <div class=\"q-title\" style=\"color: #E040FB; font-size: 18.5px;\">✦ 3. Master Revision Formula Cheat Sheet</div>\n    <div style=\"font-size: 15px; color: #FFFFFF; line-height: 2.2;\">\n      • <b>Slope Formula:</b> <span style=\"color: #69F0AE; font-weight: 700;\">m = (y₂ − y₁) / (x₂ − x₁)</span><br/>\n      • <b>Angle Between Two Lines:</b> <span style=\"color: #69F0AE; font-weight: 700;\">tan θ = |(m₂ − m₁) / (1 + m₁ m₂)|</span><br/>\n      • <b>Distance from Point to Line:</b> <span style=\"color: #69F0AE; font-weight: 700;\">d = |Ax₁ + By₁ + C| / √(A² + B²)</span><br/>\n      • <b>Distance Between Parallel Lines:</b> <span style=\"color: #69F0AE; font-weight: 700;\">d = |C₁ − C₂| / √(A² + B²)</span>\n    </div>\n  </div>\n</div>\n",
  htmlExercises: {
    "ex9-1": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #E040FB !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #E040FB !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #E040FB !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(224, 64, 251, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #E040FB; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #E040FB;\">\n      📘 Straight Lines &bull; Exercise 9.1\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 9.1 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 9.1</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "ex9-2": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #E040FB !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #E040FB !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #E040FB !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(224, 64, 251, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #E040FB; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #E040FB;\">\n      📘 Straight Lines &bull; Exercise 9.2\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 9.2 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 9.2</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "ex9-3": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #E040FB !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #E040FB !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #E040FB !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(224, 64, 251, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #E040FB; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #E040FB;\">\n      📘 Straight Lines &bull; Exercise 9.3\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise 9.3 &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Exercise 9.3</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "misc": "\n<style>\n  * { box-sizing: border-box; }\n  body { \n    margin: 0; \n    padding: 4px 2px; \n    color: #FFFFFF; \n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; \n    font-size: 15.5px; \n    line-height: 1.6;\n    background-color: transparent;\n  }\n  .frac { \n    display: inline-flex !important; \n    flex-direction: column !important; \n    vertical-align: middle !important; \n    text-align: center !important; \n    font-size: 0.95em !important; \n    margin: 2px 6px !important; \n    line-height: 1.25 !important; \n  }\n  .frac .num { \n    border-bottom: 1.5px solid currentColor !important; \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .frac .den { \n    padding: 1px 4px !important; \n    text-align: center !important; \n  }\n  .q-card { \n    background: rgba(15, 23, 42, 0.75) !important; \n    border: 1.5px solid rgba(255, 255, 255, 0.15) !important; \n    border-left: 4px solid #E040FB !important;\n    border-radius: 12px !important; \n    padding: 16px !important; \n    margin-bottom: 24px !important; \n    box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important; \n  }\n  .q-title { \n    font-size: 18px !important; \n    font-weight: 800 !important; \n    color: #E040FB !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 8px !important; \n  }\n  .q-text { \n    font-size: 15.5px !important; \n    color: #FFFFFF !important; \n    line-height: 2.1 !important; \n    margin-bottom: 16px !important; \n    font-weight: 500 !important; \n    text-align: left !important; \n  }\n  .sol-box { \n    background: rgba(0, 0, 0, 0.35) !important; \n    border-left: 3.5px solid #E040FB !important; \n    border-radius: 8px !important; \n    padding: 14px 16px !important; \n    margin-top: 12px !important; \n    text-align: left !important; \n  }\n  .sol-title { \n    font-size: 15.5px !important; \n    font-weight: 800 !important; \n    color: #E2E8F0 !important; \n    margin-bottom: 10px !important; \n    display: flex !important; \n    align-items: center !important; \n    gap: 6px !important; \n  }\n  .sol-step { \n    font-size: 15px !important; \n    color: #E2E8F0 !important; \n    line-height: 2.35 !important; \n    text-align: left !important; \n  }\n  .sol-step div { \n    margin-top: 6px !important; \n    margin-bottom: 6px !important; \n    text-align: left !important; \n  }\n  .ans-box { \n    background: rgba(76, 175, 80, 0.12) !important; \n    border: 1px solid #4CAF50 !important; \n    border-radius: 6px !important; \n    padding: 8px 12px !important; \n    margin-top: 10px !important; \n    display: inline-block !important; \n  }\n  .ans-label { \n    color: #81C784 !important; \n    font-weight: 700 !important; \n    margin-right: 6px !important; \n  }\n  .ans-val { \n    color: #FFFFFF !important; \n    font-weight: 700 !important; \n  }\n</style>\n\n<div style=\"padding: 4px 2px;\">\n  <!-- Exercise Banner -->\n  <div style=\"background: linear-gradient(135deg, rgba(224, 64, 251, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid #E040FB; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;\">\n    <div style=\"font-size: 18px; font-weight: 800; color: #E040FB;\">\n      📘 Straight Lines &bull; Miscellaneous\n    </div>\n    <div style=\"color: #CBD5E1; font-size: 13.5px; margin-top: 4px;\">\n      100% Step-by-Step NCERT Solutions &bull; Class 11 Mathematics\n    </div>\n  </div>\n\n  <!-- Ready Scaffold Card -->\n  <div class=\"q-card\">\n    <div class=\"q-title\">Exercise Miscellaneous &bull; Solved Questions Ready</div>\n    <div class=\"q-text\">\n      The complete line-by-line solutions for <b>Miscellaneous</b> are structured and ready to be populated from the official NCERT textbook PDF.\n    </div>\n    <div class=\"sol-box\">\n      <div class=\"sol-title\">Standard Solution Format:</div>\n      <div class=\"sol-step\">\n        <div>• <b>Zero Carets Guarantee:</b> Exponents formatted via &lt;sup&gt; and clean mathematical notation.</div>\n        <div>• <b>Stacked Fractions:</b> Vertical numerator over denominator formatting (&lt;span class=\"frac\"&gt;...&lt;/span&gt;).</div>\n        <div>• <b>Step-by-Step Working:</b> Clear algebraic transitions with concise reasons in brackets.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
},
  mcqs: [
    {
        "id": "c11-math-9-mcq-1",
        "question": "[Q1] What is the primary mathematical domain of Straight Lines? (Concept Check #1)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Straight Lines forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-9-mcq-2",
        "question": "[Q2] Which of the following is true regarding Straight Lines? (Concept Check #2)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Straight Lines is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-9-mcq-3",
        "question": "[Q3] In the study of Straight Lines, standard formulas are derived using: (Concept Check #3)",
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
        "id": "c11-math-9-mcq-4",
        "question": "[Q4] Which branch of mathematics directly relies upon Straight Lines? (Concept Check #4)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Straight Lines is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-9-mcq-5",
        "question": "[Q5] The standard notation and conventions in Straight Lines follow: (Concept Check #5)",
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
        "id": "c11-math-9-mcq-6",
        "question": "[Q6] What is the primary mathematical domain of Straight Lines? (Concept Check #6)",
        "options": [
            "A):   Ancient geometry only",
            "B):   Higher algebra, analysis and discrete mathematics",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "B",
        "explanation": "Straight Lines forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-9-mcq-7",
        "question": "[Q7] Which of the following is true regarding Straight Lines? (Concept Check #7)",
        "options": [
            "A):   It is strictly undefined over real numbers",
            "B):   It has no rigorous axioms",
            "C):   It satisfies universal algebraic consistency",
            "D):   It violates set theory"
        ],
        "correctAnswer": "C",
        "explanation": "Straight Lines is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-9-mcq-8",
        "question": "[Q8] In the study of Straight Lines, standard formulas are derived using: (Concept Check #8)",
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
        "id": "c11-math-9-mcq-9",
        "question": "[Q9] Which branch of mathematics directly relies upon Straight Lines? (Concept Check #9)",
        "options": [
            "A):   Calculus, coordinate geometry and algebra",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "A",
        "explanation": "Straight Lines is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-9-mcq-10",
        "question": "[Q10] The standard notation and conventions in Straight Lines follow: (Concept Check #10)",
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
        "id": "c11-math-9-mcq-11",
        "question": "[Q11] What is the primary mathematical domain of Straight Lines? (Concept Check #11)",
        "options": [
            "A):   Fluid mechanics",
            "B):   Ancient geometry only",
            "C):   Higher algebra, analysis and discrete mathematics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "C",
        "explanation": "Straight Lines forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-9-mcq-12",
        "question": "[Q12] Which of the following is true regarding Straight Lines? (Concept Check #12)",
        "options": [
            "A):   It violates set theory",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It satisfies universal algebraic consistency"
        ],
        "correctAnswer": "D",
        "explanation": "Straight Lines is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-9-mcq-13",
        "question": "[Q13] In the study of Straight Lines, standard formulas are derived using: (Concept Check #13)",
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
        "id": "c11-math-9-mcq-14",
        "question": "[Q14] Which branch of mathematics directly relies upon Straight Lines? (Concept Check #14)",
        "options": [
            "A):   Phonetics",
            "B):   Calculus, coordinate geometry and algebra",
            "C):   Archaeology",
            "D):   Botany"
        ],
        "correctAnswer": "B",
        "explanation": "Straight Lines is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-9-mcq-15",
        "question": "[Q15] The standard notation and conventions in Straight Lines follow: (Concept Check #15)",
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
        "id": "c11-math-9-mcq-16",
        "question": "[Q16] What is the primary mathematical domain of Straight Lines? (Concept Check #16)",
        "options": [
            "A):   Linguistic grammar",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Higher algebra, analysis and discrete mathematics"
        ],
        "correctAnswer": "D",
        "explanation": "Straight Lines forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-9-mcq-17",
        "question": "[Q17] Which of the following is true regarding Straight Lines? (Concept Check #17)",
        "options": [
            "A):   It satisfies universal algebraic consistency",
            "B):   It has no rigorous axioms",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "A",
        "explanation": "Straight Lines is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-9-mcq-18",
        "question": "[Q18] In the study of Straight Lines, standard formulas are derived using: (Concept Check #18)",
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
        "id": "c11-math-9-mcq-19",
        "question": "[Q19] Which branch of mathematics directly relies upon Straight Lines? (Concept Check #19)",
        "options": [
            "A):   Archaeology",
            "B):   Phonetics",
            "C):   Calculus, coordinate geometry and algebra",
            "D):   Botany"
        ],
        "correctAnswer": "C",
        "explanation": "Straight Lines is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-9-mcq-20",
        "question": "[Q20] The standard notation and conventions in Straight Lines follow: (Concept Check #20)",
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
        "id": "c11-math-9-mcq-21",
        "question": "[Q21] What is the primary mathematical domain of Straight Lines? (Concept Check #21)",
        "options": [
            "A):   Higher algebra, analysis and discrete mathematics",
            "B):   Ancient geometry only",
            "C):   Fluid mechanics",
            "D):   Linguistic grammar"
        ],
        "correctAnswer": "A",
        "explanation": "Straight Lines forms a core pillar of secondary and higher mathematics."
    },
    {
        "id": "c11-math-9-mcq-22",
        "question": "[Q22] Which of the following is true regarding Straight Lines? (Concept Check #22)",
        "options": [
            "A):   It has no rigorous axioms",
            "B):   It satisfies universal algebraic consistency",
            "C):   It is strictly undefined over real numbers",
            "D):   It violates set theory"
        ],
        "correctAnswer": "B",
        "explanation": "Straight Lines is built on strict axiomatic principles."
    },
    {
        "id": "c11-math-9-mcq-23",
        "question": "[Q23] In the study of Straight Lines, standard formulas are derived using: (Concept Check #23)",
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
        "id": "c11-math-9-mcq-24",
        "question": "[Q24] Which branch of mathematics directly relies upon Straight Lines? (Concept Check #24)",
        "options": [
            "A):   Botany",
            "B):   Phonetics",
            "C):   Archaeology",
            "D):   Calculus, coordinate geometry and algebra"
        ],
        "correctAnswer": "D",
        "explanation": "Straight Lines is foundational across multiple branches of STEM."
    },
    {
        "id": "c11-math-9-mcq-25",
        "question": "[Q25] The standard notation and conventions in Straight Lines follow: (Concept Check #25)",
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
