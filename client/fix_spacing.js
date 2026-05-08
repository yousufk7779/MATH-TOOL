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
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update .frac margin from 'margin: 0 2px;' to 'margin: 6px 2px;'
  content = content.replace(/margin:\s*0\s+2px;/g, 'margin: 6px 2px;');

  // 2. Update the universal font-size rule to include line-height: 1.8;
  content = content.replace(/\.q-text,\s*\.q-subtext,\s*\.sol-step,\s*\.sol-box\s*\{\s*font-size:\s*16px;\s*\}/g, '.q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }');

  // Also remove old line-height from individual rules to prevent override
  content = content.replace(/\.q-text\s*\{[^}]*\}/g, match => match.replace(/line-height:\s*[\d.]+;?\s*/g, ''));
  content = content.replace(/\.q-subtext\s*\{[^}]*\}/g, match => match.replace(/line-height:\s*[\d.]+;?\s*/g, ''));
  content = content.replace(/\.sol-step\s*\{[^}]*\}/g, match => match.replace(/line-height:\s*[\d.]+;?\s*/g, ''));
  content = content.replace(/\.sol-box\s*\{[^}]*\}/g, match => match.replace(/line-height:\s*[\d.]+;?\s*/g, ''));

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed spacing in ' + file);
});
