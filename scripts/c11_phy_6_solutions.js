const { themeColor } = require('./c11_phy_6_helpers');
const { getSolutionsPart1 } = require('./c11_phy_6_solutions_part1');
const { getSolutionsPart2 } = require('./c11_phy_6_solutions_part2');
const { getSolutionsPart3 } = require('./c11_phy_6_solutions_part3');

function buildSolutions() {
  const vsaHtml = getSolutionsPart1();
  const saHtml = getSolutionsPart2();
  const laHtml = getSolutionsPart3();

  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- TITLE BANNER -->
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 22px; font-weight: bold; text-align: center !important;">
      NCERT & Master Solutions Guide (100 Questions)
    </h2>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Class 11 Physics Unit VI: Gravitation (06 Marks) &bull; Official Syllabus Coverage
    </p>
  </div>

  ${vsaHtml}
  ${saHtml}
  ${laHtml}

</div>`;
}

module.exports = { buildSolutions };
