const fs = require('fs');
const path = require('path');

const IMG_DIR = 'D:\\All NCERT SOLUTIONS\\client\\data\\math_ch11_html\\images';

const files = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.svg'));

files.forEach(file => {
    const filePath = path.join(IMG_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix the specific corrupted stroke attribute pattern
    const corrupted = 'stroke="stroke=\\"black\\" stroke-width=\\"2\\" fill=\\"none\\"" stroke-width="2" fill="none"';
    const corrected = 'stroke="black" stroke-width="2" fill="none"';
    
    if (content.includes('stroke="stroke="')) {
        console.log(`Fixing ${file}...`);
        // Use a more generic regex to catch variations if any
        content = content.replace(/stroke="stroke="black" stroke-width="2" fill="none"" stroke-width="2" fill="none"/g, corrected);
        // Secondary check for partial corruption
        content = content.replace(/stroke="stroke="black"/g, 'stroke="black"');
        
        fs.writeFileSync(filePath, content, 'utf-8');
    }
});

console.log("SVG Repair Complete!");
