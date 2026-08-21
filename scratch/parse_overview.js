const fs = require('fs');
const path = require('path');

const files = ['c11-phy-1.ts', 'c11-phy-2.ts', 'c11-phy-3.ts', 'c11-phy-4.ts', 'c11-phy-5.ts'];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', 'client', 'data', 'content', file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract Overview JSON
  const match = content.match(/export const c11Phy\dHtmlOverview = ([\s\S]*?);\n\nexport const/);
  if (!match) {
    console.log(`Could not parse overview JSON in ${file}`);
    return;
  }

  let htmlOverview;
  try {
    htmlOverview = JSON.parse(match[1]);
  } catch (e) {
    console.log(`Error parsing JSON in ${file}: ${e.message}`);
    return;
  }

  console.log(`==================== ${file} Overview Audit ====================`);

  // Check carets in overview
  const caretCount = (htmlOverview.match(/\^/g) || []).length;
  console.log(`Carets in Overview: ${caretCount}`);
  if (caretCount > 0) {
    const lines = htmlOverview.split('\n');
    lines.forEach((l, idx) => {
      if (l.includes('^')) console.log(`   [Caret L${idx+1}]: ${l.trim()}`);
    });
  }

  // Check Figure Card Titles and how they are formatted
  // Looking for figure headers / titles (e.g. 📍 or <h3> or <div> inside card wrappers)
  const figCardRegex = /<div style="background:\ #0B0F19;[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
  let figMatch;
  let figCount = 0;
  while ((figMatch = figCardRegex.exec(htmlOverview)) !== null) {
    figCount++;
    const cardContent = figMatch[1];
    // extract title div
    const titleMatch = cardContent.match(/<div style="color:[^>]*>([\s\S]*?)<\/div>/);
    const title = titleMatch ? titleMatch[1].trim() : 'NO TITLE FOUND';
    console.log(`   Fig ${figCount} Title: ${title}`);
  }

  // Check Section <h2> Headings
  const h2Matches = htmlOverview.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];
  console.log(`   H2 Headings (${h2Matches.length}):`);
  h2Matches.forEach(h2 => console.log(`      ${h2.replace(/<[^>]+>/g, '').trim()}`));

  // Check Solutions Part
  const solMatch = content.match(/export const c11Phy\dHtmlSolutions = ([\s\S]*?);?\s*$/);
  if (solMatch) {
    try {
      const htmlSol = JSON.parse(solMatch[1]);
      const solCarets = (htmlSol.match(/\^/g) || []).length;
      console.log(`   Solutions Carets: ${solCarets}`);
      // Count questions in solutions HTML
      const mcqCount = (htmlSol.match(/MCQ\s*\d+/gi) || []).length;
      const vsaCount = (htmlSol.match(/VSA\s*\d+/gi) || []).length;
      const saCount = (htmlSol.match(/SA\s*\d+/gi) || []).length;
      const laCount = (htmlSol.match(/LA\s*\d+/gi) || []).length;
      const qMatches = (htmlSol.match(/Q\d+[:.]/gi) || []).length;
      console.log(`   Solutions Q Markers: Total Q Markers=${qMatches}, MCQs=${mcqCount}, VSAs=${vsaCount}, SAs=${saCount}, LAs=${laCount}`);
    } catch (e) {
      console.log(`   Error parsing Solutions JSON: ${e.message}`);
    }
  }
  console.log('');
});
