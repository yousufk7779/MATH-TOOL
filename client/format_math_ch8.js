const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

function wrap(str) {
    let s = str.trim();
    if (!s) return s;
    if (/^[a-zA-Z0-9√²³°]+(\s+[a-zA-Z0-9√²³°]+)*$/.test(s)) {
        return s;
    }
    let depth = 0;
    let isWrapped = true;
    for (let i=0; i<s.length; i++) {
        if (s[i]==='(') depth++;
        else if (s[i]===')') depth--;
        if (depth === 0 && i < s.length - 1) isWrapped = false;
    }
    if (isWrapped && s.startsWith('(') && s.endsWith(')')) return s;
    return `(${s})`;
}

function cleanLine(l) {
    // Structural changes
    l = l.replace(/^Step \d+:\s*/i, '');
    l = l.replace(/^(Write given expression:|Put values:|Multiply values:|Add them:|Simplify denominator:|Multiply:|Take LCM[^:]*:|Cancel[^:]*:|Simplify numerator:|Simplify squares:|Divide by 2:|Final value:)\s*/i, '= ');
    l = l.replace(/^Numerator is\s*/i, 'Numerator = ');
    l = l.replace(/^Numerator becomes\s*/i, 'Numerator = ');
    l = l.replace(/^Denominator becomes\s*/i, 'Denominator = ');
    l = l.replace(/^=\s*=\s*/g, '= ');
    l = l.replace(/^Since ([^,]+),\s*(the\s+)?correct option is\s*(.*?)\.?$/i, 'Since $1, correct option is $3');

    // Fractional replacements
    let fractionRegex = /<sup>((?:(?!<sup|<sub).)*?)<\/sup>\/<sub>((?:(?!<sup|<sub).)*?)<\/sub>/g;
    while(fractionRegex.test(l)) {
        l = l.replace(fractionRegex, (m, numStr, denStr) => {
            let cleanNum = numStr.replace(/\//g, '÷');
            let cleanDen = denStr.replace(/\//g, '÷');
            return `${wrap(cleanNum)} ÷ ${wrap(cleanDen)}`;
        });
    }

    // Power replacements
    l = l.replace(/<sup>2<\/sup>/g, '²');
    l = l.replace(/<sup>3<\/sup>/g, '³');
    l = l.replace(/<sup>(.*?)<\/sup>/g, '^($1)');
    l = l.replace(/<sub>(.*?)<\/sub>/g, '_($1)');

    // Protect HTML tags while replacing remaining slashes
    let parts = l.split(/(<[^>]+>)/g);
    for (let j=0; j<parts.length; j++) {
        if (j % 2 === 0) {
            parts[j] = parts[j].replace(/\//g, ' ÷ ');
            parts[j] = parts[j].replace(/\s+÷\s+/g, ' ÷ ');
            parts[j] = parts[j].replace(/\\Opp/g, 'Opp');
            parts[j] = parts[j].replace(/\\Adj/g, 'Adj');
            parts[j] = parts[j].replace(/^=\s*/, '= ');
            parts[j] = parts[j].replace(/\\n/g, ' ');
            parts[j] = parts[j].replace(/\\/g, ''); // Clear any random stray backslashes
        }
    }
    return parts.join('');
}

// Process solution array strings
content = content.replace(/"solution":\s*\[([\s\S]*?)\]/g, (match, p1) => {
    let newP1 = p1.split('\n').map(line => {
        let strMatch = line.match(/^(\s*")(.*)(")(,?)\s*$/);
        if (strMatch) {
            let prefix = strMatch[1];
            let innerText = strMatch[2];
            let suffix = strMatch[3];
            let comma = strMatch[4];
            
            let cleanedText = cleanLine(innerText);
            return `${prefix}${cleanedText}${suffix}${comma}`;
        }
        return line;
    }).join('\n');
    return `"solution": [${newP1}]`;
});

// Process answers independently
content = content.replace(/"answer":\s*"(.*?)"/g, (match, p1) => {
    let cleanedText = cleanLine(p1);
    return `"answer": "${cleanedText}"`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Math Chapter 8 formatted successfully!');
