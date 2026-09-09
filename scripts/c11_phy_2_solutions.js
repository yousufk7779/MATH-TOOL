const { themeColor } = require('./c11_phy_2_helpers');
const { getVsaQuestions } = require('./c11_phy_2_solutions_part1');
const { getSaQuestions } = require('./c11_phy_2_solutions_part2');
const { getLaQuestions } = require('./c11_phy_2_solutions_part3');

function buildSolutions() {
  const vsaHtml = getVsaQuestions();
  const saHtml = getSaQuestions();
  const laHtml = getLaQuestions();

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
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 22px; font-weight: bold; text-align: center !important;">
      NCERT & Master Solutions Guide (100 Questions)
    </h2>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Class 11 Physics Unit II: Kinematics &bull; Motion in a Straight Line & Motion in a Plane (09 Marks)
    </p>
  </div>

  <!-- SECTION A: VSA QUESTIONS -->
  <div style="margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      Section A: Very Short Answer (VSA) Questions (1 Mark each) &bull; Q1 to Q40
    </h2>
    <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 14px;">
      Fundamental definitions, 1-line physical reasoning, instantaneous calculus concepts, vector types, and graphical slopes.
    </p>
  </div>
  ${vsaHtml}

  <!-- SECTION B: SA QUESTIONS -->
  <div style="margin-top: 35px; margin-bottom: 15px; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      Section B: Short Answer (SA) Questions (2 & 3 Marks each) &bull; Q41 to Q80
    </h2>
    <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 14px;">
      Numerical problem-solving, vector resolution and dot/cross product calculations, relative velocity, and projectile parameters.
    </p>
  </div>
  ${saHtml}

  <!-- SECTION C: LA QUESTIONS -->
  <div style="margin-top: 35px; margin-bottom: 15px; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      Section C: Long Answer (LA) Questions (5 Marks each) &bull; Q81 to Q100
    </h2>
    <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 14px;">
      Comprehensive multi-step board derivations (graphical & calculus kinematics, projectile parabolic trajectory, vector laws, centripetal acceleration, and master unit synthesis).
    </p>
  </div>
  ${laHtml}

</div>`;
}

module.exports = { buildSolutions };
