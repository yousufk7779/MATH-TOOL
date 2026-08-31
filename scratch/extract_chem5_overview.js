const fs = require('fs');

const code = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-5.ts', 'utf8');

const overviewSnippet = code.split('export const c12Chem5HtmlSolutions')[0].replace('export const c12Chem5HtmlOverview =', 'global.c12Chem5HtmlOverview =');
eval(overviewSnippet);

console.log("Overview length:", global.c12Chem5HtmlOverview.length);
fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_5_overview_extracted.html', global.c12Chem5HtmlOverview, 'utf8');
