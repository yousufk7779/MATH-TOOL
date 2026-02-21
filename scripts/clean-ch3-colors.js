const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../client/assets/chapters/chapter3');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Remove text colors from <style> blocks
    content = content.replace(/color:\s*(#000|#333|black|#444|#555);/gi, '');

    // Specifically remove background #fff or white to let dark mode work
    content = content.replace(/background(-color)?:\s*(#fff|#ffffff|white|#f8f9fa|#e9ecef|#eef|#f4f4f9);/gi, '');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Cleaned ${file}`);
}
