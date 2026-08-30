const fs = require('fs');

let content = fs.readFileSync('client/data/content/c12-chem-6.ts', 'utf8');

content = content
  .replace(/\\\\Delta/g, '&Delta;')
  .replace(/\\Delta/g, '&Delta;')
  .replace(/\\\\quad/g, '&nbsp;&nbsp;')
  .replace(/\\quad/g, '&nbsp;&nbsp;')
  .replace(/\\\\longleftrightarrow/g, '&#8654;')
  .replace(/\\longleftrightarrow/g, '&#8654;')
  .replace(/\\\\equiv/g, '&equiv;')
  .replace(/\\equiv/g, '&equiv;')
  .replace(/&xrightarrow\{[^}]*\}/g, '&rarr;')
  .replace(/\\\\xrightarrow\{[^}]*\}/g, '&rarr;')
  .replace(/\\xrightarrow\{[^}]*\}/g, '&rarr;')
  .replace(/\\\\text\{([^}]+)\}/g, '$1')
  .replace(/\\text\{([^}]+)\}/g, '$1')
  .replace(/\\\\text/g, '')
  .replace(/\\text/g, '');

fs.writeFileSync('client/data/content/c12-chem-6.ts', content, 'utf8');

const backslashes = (content.match(/\\\w+/g) || []).filter(x => x !== '\\n');
console.log('✅ Sanitized! Remaining raw backslashes:', backslashes);
