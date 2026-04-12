const fs = require('fs');
const file = 'd:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}

// Clean up any remaining `\\\\frac{A}{B}` to `<sup>A</sup>&frasl;<sub>B</sub>`
content = content.replace(/\\\\\\\\frac{([^{}]+)}{([^{}]+)}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');

// Remove stray `\\` in options
content = replaceAll(content, '\\\\<sup>', '<sup>');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed straggling fractions!');
