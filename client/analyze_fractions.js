const fs = require('fs');
const glob = require('glob');

const files = [
  'data/content/c8-math-1.ts',
  'data/content/c8-math-2.ts',
  'data/content/c8-math-3.ts',
  'data/content/c8-math-4.ts',
  'data/content/c8-math-5.ts',
  'data/content/c8-math-6.ts',
  'data/content/c8-math-7.ts',
  'data/content/c8-math-8.ts',
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/([a-zA-Z0-9]+)\s*\/\s*([a-zA-Z0-9]+)/g)];
  if (matches.length > 0) {
    console.log('===', file, '===');
    matches.slice(0, 15).forEach(m => console.log(m[0]));
  }
});
