const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
let text = fs.readFileSync(filePath, 'utf8');

// Replace carets in exponents or text
text = text.replace(/10\^-19/g, '10<sup>-19</sup>');
text = text.replace(/10\^12/g, '10<sup>12</sup>');
text = text.replace(/10\^18/g, '10<sup>18</sup>');
text = text.replace(/10\^9/g, '10<sup>9</sup>');
text = text.replace(/r\^2/g, 'r<sup>2</sup>');
text = text.replace(/r\^3/g, 'r<sup>3</sup>');
text = text.replace(/e\^\+/g, 'e<sup>+</sup>');
text = text.replace(/e\^-/g, 'e<sup>-</sup>');
text = text.replace(/\^/g, ''); // Catch-all purge for any leftover carets

fs.writeFileSync(filePath, text, 'utf8');
console.log("Successfully purged all carets from c12-phy-1.ts!");
