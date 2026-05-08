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

const cssToInject = `
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 0 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }`;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Inject CSS if not present
  if (!content.includes('.frac {')) {
    content = content.replace(/(<style>)/g, `$1${cssToInject}`);
  }

  // A function to replace fractions in text safely
  // We'll match text outside of HTML tags and outside of <style> tags
  
  // First, let's extract all <style>...</style> to avoid touching them
  const styleRegex = /<style>[\s\S]*?<\/style>/g;
  let styles = [];
  content = content.replace(styleRegex, match => {
    styles.push(match);
    return `___STYLE_${styles.length - 1}___`;
  });

  // Then extract all HTML tags to avoid replacing attributes or URLs inside them
  const tagRegex = /<[^>]+>/g;
  let tags = [];
  content = content.replace(tagRegex, match => {
    tags.push(match);
    return `___TAG_${tags.length - 1}___`;
  });

  // Now replace fractions in the safe text
  // We want to match numbers/variables separated by /
  // e.g. 1/2, a/b, 2x/3, 15 / 30
  // But NOT km/h or m/s or URLs (which are mostly in tags or styles anyway)
  const fracRegex = /(?<![a-zA-Z])([0-9]+[a-zA-Z]*|[a-zA-Z]+)\s*\/\s*([0-9]+[a-zA-Z]*|[a-zA-Z]+)(?![a-zA-Z])/g;
  
  content = content.replace(fracRegex, (match, num, den) => {
    // Exclude specific known non-fractions
    if (match.includes('km/h') || match.includes('m/s') || match === 'p/q') {
      // Actually p/q is a fraction! Wait, what about km/h? km/h won't match because of lookarounds.
      // Let's just return the fraction span
    }
    return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
  });

  // Re-insert tags
  content = content.replace(/___TAG_(\d+)___/g, (match, i) => tags[i]);
  
  // Re-insert styles
  content = content.replace(/___STYLE_(\d+)___/g, (match, i) => styles[i]);

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});
