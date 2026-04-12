const fs = require('fs');
const file = 'd:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}

// Clean up remaining frac and superscript degrees
content = replaceAll(content, '\\\\frac{√7}{4}', '<sup>√7</sup>&frasl;<sub>4</sub>');
content = replaceAll(content, '\\\\frac{3}{√7}', '<sup>3</sup>&frasl;<sub>√7</sub>');
content = replaceAll(content, '\\\\frac{√7}{3}', '<sup>√7</sup>&frasl;<sub>3</sub>');
content = replaceAll(content, '\\\\frac{√3}{2}', '<sup>√3</sup>&frasl;<sub>2</sub>');
content = replaceAll(content, '\\\\frac{1}{√3}', '<sup>1</sup>&frasl;<sub>√3</sub>');

content = replaceAll(content, '\\\\\\\\frac{√7}{4}', '<sup>√7</sup>&frasl;<sub>4</sub>');
content = replaceAll(content, '\\\\\\\\frac{3}{√7}', '<sup>3</sup>&frasl;<sub>√7</sub>');
content = replaceAll(content, '\\\\\\\\frac{√7}{3}', '<sup>√7</sup>&frasl;<sub>3</sub>');
content = replaceAll(content, '\\\\\\\\frac{√3}{2}', '<sup>√3</sup>&frasl;<sub>2</sub>');
content = replaceAll(content, '\\\\\\\\frac{1}{√3}', '<sup>1</sup>&frasl;<sub>√3</sub>');

content = replaceAll(content, '60^°', '60°');
content = replaceAll(content, '30^°', '30°');
content = replaceAll(content, '45^°', '45°');
content = replaceAll(content, '90^°', '90°');
content = replaceAll(content, '^°', '°');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed straggling fractions and degrees!');
