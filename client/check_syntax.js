const parser = require('@babel/parser');
const fs = require('fs');

const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

try {
    parser.parse(content, { sourceType: 'module', plugins: ['typescript'] });
    console.log('parsed ok');
} catch (e) {
    console.log(e.message);
    console.log('Pos:', e.loc);
    const lines = content.split('\n');
    const lineIdx = e.loc.line - 1;
    const colIdx = e.loc.column;

    console.log('Err line context:', lines[lineIdx].substring(Math.max(0, colIdx - 40), colIdx + 40));
}
