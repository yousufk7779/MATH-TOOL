const fs = require('fs');
const path = require('path');

const targetC3 = path.join(__dirname, '../client/data/content/c11-zoo-3.ts');
const targetC4 = path.join(__dirname, '../client/data/content/c11-zoo-4.ts');

// Process Chapter 3
let contentC3 = fs.readFileSync(targetC3, 'utf8');
const headerRegexC3 = /<!-- MASTER CELL BIOLOGY HEADER -->[\s\S]*?<\/div>/;
if (headerRegexC3.test(contentC3)) {
  contentC3 = contentC3.replace(headerRegexC3, '');
  fs.writeFileSync(targetC3, contentC3, 'utf8');
  console.log("Successfully removed first header card from c11-zoo-3.ts!");
} else {
  console.log("Header card not found or already removed in c11-zoo-3.ts");
}

// Process Chapter 4
let contentC4 = fs.readFileSync(targetC4, 'utf8');
const headerRegexC4 = /<!-- MASTER HUMAN PHYSIOLOGY HEADER -->[\s\S]*?<\/div>/;
if (headerRegexC4.test(contentC4)) {
  contentC4 = contentC4.replace(headerRegexC4, '');
  fs.writeFileSync(targetC4, contentC4, 'utf8');
  console.log("Successfully removed first header card from c11-zoo-4.ts!");
} else {
  console.log("Header card not found or already removed in c11-zoo-4.ts");
}

// Also update the build scripts so future rebuilds don't re-add the header card!
const masterBuildScript = path.join(__dirname, 'build_c11_zoo_4_all_6_3d.js');
if (fs.existsSync(masterBuildScript)) {
  let masterCode = fs.readFileSync(masterBuildScript, 'utf8');
  masterCode = masterCode.replace(/<!-- MASTER HUMAN PHYSIOLOGY HEADER -->[\s\S]*?<\/div>/, '');
  fs.writeFileSync(masterBuildScript, masterCode, 'utf8');
  console.log("Updated build_c11_zoo_4_all_6_3d.js script!");
}
