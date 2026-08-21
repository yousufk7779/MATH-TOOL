const fs = require('fs');
const path = require('path');

const { getTheoryPart1 } = require('./c12_theory_part1.js');
const { getTheoryPart2 } = require('./c12_theory_part2.js');
const svgs = require('./build_all_9_large_svgs.js');

const fullOverviewHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  ${getTheoryPart1(svgs)}
  ${getTheoryPart2(svgs)}
</div>
`;

// Read 100 solutions
const c12Path = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const existingFile = fs.readFileSync(c12Path, 'utf8');
const solMatch = existingFile.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);?\s*$/);
const solutionsStr = solMatch ? solMatch[1] : '""';

const finalTsCode = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora) with 5-Layer Topic Breakdown

export const c12Phy1HtmlOverview = ${JSON.stringify(fullOverviewHtml)};

export const c12Phy1HtmlSolutions = ${solutionsStr};
`;

fs.writeFileSync(c12Path, finalTsCode, 'utf8');
console.log("Successfully rebuilt c12-phy-1.ts with all 9 HUGE, HIGH-VISIBILITY 3D DIAGRAMS!");
