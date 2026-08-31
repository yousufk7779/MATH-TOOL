const fs = require('fs');

const html = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_2_overview_extracted.html', 'utf8');

const imgs = html.match(/<img[^>]*>/g) || [];
const svgs = html.match(/<svg[^>]*>[\s\S]*?<\/svg>/g) || [];

console.log("Current <img> tags count:", imgs.length);
console.log("Current <svg> tags count:", svgs.length);
