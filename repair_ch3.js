const fs = require('fs');
let c = fs.readFileSync('client/data/content/math-ch3.ts', 'utf8');

// Fix missing commas after arrays
c = c.replace(/\]\s*"/g, '],\n            "');
c = c.replace(/\]\s*{/g, '],\n            {');
c = c.replace(/}\s*{/g, '},\n            {');
c = c.replace(/"\s*"/g, '",\n                "');

// Fix the array end / next property boundary
c = c.replace(/\]\s*"answer":/g, '],\n            "answer":');
c = c.replace(/"answer":\s*"([^"]*)"\s*}/g, '"answer": "$1"\n        }');

// Fix the Exercise / Item boundary
c = c.replace(/}\s*\]\s*}/g, '}\n    ]\n}');

fs.writeFileSync('client/data/content/math-ch3.ts', c, 'utf8');
console.log("math-ch3.ts repaired structurally.");
