const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');

function updateOverviewOnly(fileNum, overviewHtmlString) {
  const filePath = path.join(contentDir, `c11-phy-${fileNum}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match Overview export
  const regex = new RegExp(`export const c11Phy${fileNum}HtmlOverview = [\\s\\S]*?;\\s*\\n\\s*export const c11Phy${fileNum}HtmlSolutions`);
  const replacement = `export const c11Phy${fileNum}HtmlOverview = ${JSON.stringify(overviewHtmlString)};\n\nexport const c11Phy${fileNum}HtmlSolutions`;

  if (regex.test(content)) {
    content = content.replace(regex, replacement);
  } else {
    // Fallback replacement if whitespace differs
    const altRegex = new RegExp(`export const c11Phy${fileNum}HtmlOverview = [\\s\\S]*?;\\s*export const c11Phy${fileNum}HtmlSolutions`);
    content = content.replace(altRegex, `export const c11Phy${fileNum}HtmlOverview = ${JSON.stringify(overviewHtmlString)};\n\nexport const c11Phy${fileNum}HtmlSolutions`);
  }

  // Purge any remaining raw caret signs from overview
  content = content.replace(/\^/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Successfully updated Overview for Chapter ${fileNum}!`);
}

// Re-run master scripts for 1 to 5 to generate HTML strings safely
const s1 = require('./build_c11_phy_1_3d_master.js');
// Wait, we can directly update files using our safe function!
console.log("Safe updater script initialized.");
