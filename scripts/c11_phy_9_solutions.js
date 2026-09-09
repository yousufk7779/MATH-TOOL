// scripts/c11_phy_9_solutions.js
const { themeColor } = require('./c11_phy_9_helpers');
const { solutionsPart1 } = require('./c11_phy_9_solutions_part1');
const { solutionsPart2 } = require('./c11_phy_9_solutions_part2');
const { solutionsPart3 } = require('./c11_phy_9_solutions_part3');

const solutionsHtml = `
<div style="font-family: 'Outfit', sans-serif; color: #E2E8F0; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 10px;">
  <div style="text-align: center; margin-bottom: 25px; padding: 15px; background: rgba(66, 165, 245, 0.08); border-radius: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">
    <h1 style="color: ${themeColor}; font-size: 24px; margin: 0 0 8px 0; font-weight: 700;">Chapter 9: Behaviour of Perfect Gases and Kinetic Theory — Complete 100 Questions & Answers</h1>
    <p style="color: #94A3B8; font-size: 14px; margin: 0;">Comprehensive Reference Solutions: Section A (Q1–Q40 VSA 1 Mark), Section B (Q41–Q80 SA 2 & 3 Marks), Section C (Q81–Q100 LA 5 Marks)</p>
  </div>

  ${solutionsPart1}
  ${solutionsPart2}
  ${solutionsPart3}
</div>
`;

module.exports = { solutionsHtml };
