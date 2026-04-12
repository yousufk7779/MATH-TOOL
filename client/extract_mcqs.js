const fs = require('fs');

const text = fs.readFileSync('data/content/math-ch3.ts', 'utf-8');
const match = text.match(/(?:"mcqs"|mcqs)\s*:\s*\[\s*([\s\S]*?)\s*\]\n/);

if (match) {
    fs.writeFileSync('mcqs_extracted.json', '[' + match[1] + ']', 'utf-8');
    console.log('Extracted successfully');
} else {
    console.log('Failed to extract');
}
