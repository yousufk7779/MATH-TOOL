const fs = require('fs');
const path = require('path');

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
}

function processMathFractions(text) {
    let index = text.indexOf('\\frac');
    while (index !== -1) {
        let nStart = index + 5;
        while (text[nStart] === ' ') nStart++;
        if (text[nStart] !== '{') {
            index = text.indexOf('\\frac', index + 1);
            continue;
        }

        // Match numerator
        let braces = 1;
        let p = nStart + 1;
        while (p < text.length && braces > 0) {
            if (text[p] === '{') braces++;
            else if (text[p] === '}') braces--;
            p++;
        }
        let numEnd = p - 1;
        let numerator = text.substring(nStart + 1, numEnd);

        let dStart = p;
        while (text[dStart] === ' ') dStart++;

        let denominator = '';
        let replLen = dStart - index;

        if (text[dStart] === '{') {
            braces = 1;
            p = dStart + 1;
            while (p < text.length && braces > 0) {
                if (text[p] === '{') braces++;
                else if (text[p] === '}') braces--;
                p++;
            }
            let denEnd = p - 1;
            denominator = text.substring(dStart + 1, denEnd);
            replLen = p - index;
        } else {
            denominator = text[dStart];
            replLen = dStart + 1 - index;
        }

        numerator = processMathFractions(numerator);
        denominator = processMathFractions(denominator);

        // As per prompt, keep clean inline fractions or simple format:
        // We will output A/B instead of <sup>A</sup>/<sub>B</sub> if it gets too complex,
        // but <sup>A</sup>/<sub>B</sub> is neat. The user said: "If possible use fraction formatting: <sup>1</sup>/<sub>2</sub>"
        let formatted = `<sup>${numerator}</sup>/<sub>${denominator}</sub>`;

        text = text.substring(0, index) + formatted + text.substring(index + replLen);
        index = text.indexOf('\\frac', index + formatted.length);
    }
    return text;
}

function formatMathString(text) {
    // 1. Specific angular notation substitutions
    text = text.replace(/\\circ/g, '°');
    text = text.replace(/\^°/g, '°');

    // Convert numbers followed by ^0 into degrees (e.g. 60^0 -> 60°, sin 30^0 -> sin 30°)
    // Since the prompt explicitly said NOT to use ^0 for angles!
    text = text.replace(/(\d+)\^0/g, '$1°');

    // 2. Square roots \sqrt{A} -> √A
    text = text.replace(/\\sqrt\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, '√($1)');
    text = text.replace(/\\sqrt\s*([a-zA-Z0-9])/g, '√$1');

    // 3. Fractions \frac{A}{B}
    text = processMathFractions(text);

    // 4. Powers
    text = text.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
    text = text.replace(/\^([0-9a-zA-Z]+)/g, '<sup>$1</sup>');

    // 5. Latex formatting and spacing
    text = text.replace(/\\text\s*\{([^}]+)\}/g, '$1');
    text = text.replace(/\\mathrm\s*\{([^}]+)\}/g, '$1');

    const trigWords = ['sin', 'cos', 'tan', 'cot', 'sec', 'cosec', 'log'];
    trigWords.forEach(w => {
        text = replaceAll(text, '\\' + w, w);
    });

    text = replaceAll(text, '\\left(', '(');
    text = replaceAll(text, '\\right)', ')');
    text = replaceAll(text, '\\left[', '[');
    text = replaceAll(text, '\\right]', ']');
    text = replaceAll(text, '\\left', '');
    text = replaceAll(text, '\\right', '');
    text = replaceAll(text, '\\Rightarrow', '⇒');
    text = replaceAll(text, '\\triangle', '∆');
    text = replaceAll(text, '\\angle', '∠');
    text = replaceAll(text, '\\sim', '~');
    text = replaceAll(text, '\\pm', '±');
    text = replaceAll(text, '\\pi', 'π');
    text = replaceAll(text, '\\times', '×');
    text = replaceAll(text, '\\theta', 'θ');
    text = replaceAll(text, '\\alpha', 'α');
    text = replaceAll(text, '\\beta', 'β');
    text = replaceAll(text, '\\gamma', 'γ');
    text = replaceAll(text, '\\cdot', '·');
    text = replaceAll(text, '\\ne', '≠');
    text = replaceAll(text, '\\leq', '≤');
    text = replaceAll(text, '\\ge', '≥');

    text = replaceAll(text, '\\(', '');
    text = replaceAll(text, '\\)', '');

    // Cleanup artifacts from mapping
    text = text.replace(/\\\\([A-Za-z0-9])/g, '$1');

    // Clean root notation for simple numbers: √(3) -> √3
    text = text.replace(/√\(([0-9a-zA-Z])\)/g, '√$1');

    return text;
}

const dirPath = path.join(__dirname, '../data/content');
const files = fs.readdirSync(dirPath).filter(f => f.startsWith('math-') && f.endsWith('.ts'));

let totalFixes = 0;
files.forEach(file => {
    const fPath = path.join(dirPath, file);
    let content = fs.readFileSync(fPath, 'utf8');

    let original = content;
    // We only want to format string literals ideally, but this naive global 
    // string search is mostly safe because there are virtually no latex sequences in raw typescript 
    // keywords. 
    content = formatMathString(content);

    if (original !== content) {
        fs.writeFileSync(fPath, content, 'utf8');
        console.log(`Processed: ${file}`);
        totalFixes++;
    }
});

console.log(`Global formatting complete! Fixed ${totalFixes} files.`);
