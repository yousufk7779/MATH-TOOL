const fs = require('fs');
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
  content = content.replace(/class="frac"/g, "class='frac'");
  content = content.replace(/class="num"/g, "class='num'");
  content = content.replace(/class="den"/g, "class='den'");
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed quotes in ' + file);
});
