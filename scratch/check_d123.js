const fs = require('fs');
const path = require('path');

const files = ['c11-phy-1.ts', 'c11-phy-2.ts', 'c11-phy-3.ts', 'c11-phy-4.ts', 'c11-phy-5.ts'];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', 'client', 'data', 'content', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File NOT found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // Check carets
  const caretMatches = content.match(/\^/g);
  const caretsCount = caretMatches ? caretMatches.length : 0;

  // Check HOTS
  const hotsMatches = content.match(/HOTS/gi);
  const hotsCount = hotsMatches ? hotsMatches.length : 0;

  // Check questions
  const mcqs = (content.match(/id:\s*['"]c11-phy-\d+-mcq-\d+['"]/g) || []).length;
  const vsas = (content.match(/id:\s*['"]c11-phy-\d+-vsa-\d+['"]/g) || []).length;
  const sas = (content.match(/id:\s*['"]c11-phy-\d+-sa-\d+['"]/g) || []).length;
  const las = (content.match(/id:\s*['"]c11-phy-\d+-la-\d+['"]/g) || []).length;

  // Check SVG / Figure Card headings inside Overview
  const figureHeadings = [];
  const figRegex = /📍\s*([^<\n]+)/g;
  let match;
  while ((match = figRegex.exec(content)) !== null) {
    figureHeadings.push(match[1].trim());
  }

  // Check SVG internal text titles (e.g. <text ...>1. ...</text>)
  const svgInternalTitles = [];
  const svgTitleRegex = /<text[^>]*font-size=["']1[678][^>]*>([^<]+)<\/text>/g;
  while ((match = svgTitleRegex.exec(content)) !== null) {
    svgInternalTitles.push(match[1].trim());
  }

  console.log(`=== ${file} ===`);
  console.log(`Carets (^): ${caretsCount}`);
  console.log(`HOTS labels: ${hotsCount}`);
  console.log(`Questions: MCQs=${mcqs}, VSAs=${vsas}, SAs=${sas}, LAs=${las}`);
  console.log(`Figure Card Titles (${figureHeadings.length}):`, figureHeadings);
  console.log(`SVG Internal Main Titles (${svgInternalTitles.length}):`, svgInternalTitles.slice(0, 8));
  console.log('');
});
