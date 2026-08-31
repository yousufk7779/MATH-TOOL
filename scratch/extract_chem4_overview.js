const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-4.ts', 'utf8');

const overviewSnippet = code.split('export const c12Chem4HtmlSolutions')[0].replace('export const c12Chem4HtmlOverview =', 'global.c12Chem4HtmlOverview =');
eval(overviewSnippet);

console.log("Overview length:", global.c12Chem4HtmlOverview.length);
fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_4_overview_extracted.html', global.c12Chem4HtmlOverview, 'utf8');
