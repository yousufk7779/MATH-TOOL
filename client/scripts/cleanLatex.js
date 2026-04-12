const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let data = fs.readFileSync(path, 'utf8');

// Fractions handled already but let's do one more pass just in case
let count = 0;
while (data.includes('\\\\frac') && count < 10) {
    data = data.replace(/\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');
    count++;
}

data = data.replace(/\\\\text\s*\{([^}]+)\}/g, '$1');

// Replace basic trig functions
data = data.replace(/\\\\sin/g, 'sin');
data = data.replace(/\\\\cos/g, 'cos');
data = data.replace(/\\\\tan/g, 'tan');
data = data.replace(/\\\\cot/g, 'cot');
data = data.replace(/\\\\sec/g, 'sec');
data = data.replace(/\\\\text\{cosec \}/g, 'cosec ');
data = data.replace(/\\\\text\{cosec\}/g, 'cosec ');
data = data.replace(/\\\\text\{ cosec\}/g, 'cosec');
data = data.replace(/\\\\cosec/g, 'cosec');

// Replace symbols
data = data.replace(/\\\\circ/g, '°');
data = data.replace(/\\\\Rightarrow/g, '⇒');
data = data.replace(/\\\\triangle/g, '∆');
data = data.replace(/\\\\angle/g, '∠');
data = data.replace(/\\\\sim/g, '~');
data = data.replace(/\\\\pm/g, '±');
data = data.replace(/\\\\pi/g, 'π');
data = data.replace(/\\\\times/g, '×');
data = data.replace(/\\\\ne/g, '≠');
data = data.replace(/\\\\leq/g, '≤');
data = data.replace(/\\\\ge/g, '≥');

// Replace ^2 with <sup>2</sup>, but handle escaped ones carefully
data = data.replace(/\^2/g, '<sup>2</sup>');
data = data.replace(/\^3/g, '<sup>3</sup>');

// Replace \sqrt{...} with √(...)
data = data.replace(/\\\\sqrt\{([^{}]+)\}/g, '√($1)');

// Remove leftover \( and \)
data = data.replace(/\\\\\(/g, '');
data = data.replace(/\\\\\)/g, '');

// Remove leftover \ just before spaces or at end of math blocks
// Be careful not to break \n or \\"
// Actually we had \\tan which is now tan. What if there are lone \\?
// Let's replace \\cdot with '·'
data = data.replace(/\\\\cdot/g, '·');

// Remove excessive empty spaces
data = data.replace(/  +/g, ' ');

fs.writeFileSync(path, data);
console.log('LaTeX cleaned');
