const fs = require('fs');
let s = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

s = s.split(',0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",').join('');
s = s.split('0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",').join('0.05);\\" />",');

fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', s, 'utf8');
