const fs = require('fs');

const txt = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_phy_2_overview_clean.html', 'utf8');

const matches = txt.match(/📍[^\n<]+/g) || [];
console.log("Card titles with pin:", matches);
const captionMatches = txt.match(/💡[^\n<]+/g) || [];
console.log("Captions with bulb:", captionMatches);
