const fs = require('fs');
const path = require('path');

console.log('Testing module evaluations...');

// Check content files syntax
const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
const files = fs.readdirSync(contentDir);

let hasError = false;
for (const file of files) {
  if (file.endsWith('.ts') || file.endsWith('.js')) {
    const fullPath = path.join(contentDir, file);
    try {
      const code = fs.readFileSync(fullPath, 'utf8');
      // Check for unbalanced template literals or syntax
      new Function(code.replace(/export\s+/g, ''));
    } catch (e) {
      console.error(`❌ Syntax/Evaluation error in ${file}:`, e.message);
      hasError = true;
    }
  }
}

if (!hasError) {
  console.log('✅ All content files in client/data/content evaluated with valid syntax!');
}
