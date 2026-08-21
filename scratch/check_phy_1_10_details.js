const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let i = 1; i <= 10; i++) {
  const fileName = `c11-phy-${i}.ts`;
  const filePath = path.join(contentDir, fileName);
  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    const overviewMatch = text.match(/export const c11Phy\d+HtmlOverview = ([\s\S]*?);?\s*export const/);
    const overviewStr = overviewMatch ? overviewMatch[1] : '';
    const pCount = (overviewStr.match(/<p>/g) || []).length;
    const h2Count = (overviewStr.match(/<h2/g) || []).length;
    const h3Count = (overviewStr.match(/<h3/g) || []).length;
    console.log(`Ch ${i} (${fileName}): ${text.length} bytes | Overview: ${overviewStr.length} chars | <p>: ${pCount} | <h2>: ${h2Count} | <h3>: ${h3Count}`);
  } else {
    console.log(`Ch ${i} (${fileName}): File not found`);
  }
}
