const fs = require('fs');
const path = require('path');

const tsFile = path.join(__dirname, 'content', 'math-ch11.ts');
const imgDir = path.join(__dirname, 'chapter11', 'images');

const mapping = [
    { key: '1. Introduction', file: 'intro_visual.svg' },
    { key: 'Example 1. Find the area of the sector', file: 'example_1.svg' },
    { key: 'Example 2. Find the area of the segment', file: 'example_2.svg' },
    { key: 'Example 3. Find the area of the shaded region', file: 'example_3.svg' },
    { key: '1. Find the area of a sector of a circle with radius 6 cm', file: 'ex11_1_q1.svg' },
    { key: '2. Find the area of a quadrant of a circle whose circumference is 22 cm', file: 'ex11_1_q2.svg' },
    { key: '3. The length of the minute hand of a clock', file: 'ex11_1_q3.svg' },
    { key: '4. A chord of a circle of radius 10 cm', file: 'ex11_1_q4.svg' },
    { key: '5. In a circle of radius 21 cm', file: 'ex11_1_q5.svg' },
    { key: '6. A chord of a circle of radius 15 cm', file: 'ex11_1_q6.svg' },
    { key: '7. A chord of a circle of radius 12 cm', file: 'ex11_1_q7.svg' },
    { key: '8. A horse is tied to a peg', file: 'ex11_1_q8.svg' },
    { key: '9. A brooch is made with silver wire', file: 'ex11_1_q9.svg' },
    { key: '10. An umbrella has 8 ribs', file: 'ex11_1_q10.svg' },
    { key: '11. A car has two wipers', file: 'ex11_1_q11.svg' },
    { key: '12. To warn ships for underwater rocks', file: 'ex11_1_q12.svg' },
    { key: '13. A round table cover has six equal designs', file: 'ex11_1_q13.svg' },
    { key: '14. Tick the correct answer in the following', file: 'ex11_1_q14.svg' }
];

let content = fs.readFileSync(tsFile, 'utf8');

mapping.forEach(item => {
    const escapedKey = item.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const questionBlockRegex = new RegExp(`${escapedKey}[\\s\\S]*?<img src="[^"]+"`, 'i');
    const match = content.match(questionBlockRegex);

    if (match) {
        const fullPath = path.join(imgDir, item.file);
        if (fs.existsSync(fullPath)) {
            let svg = fs.readFileSync(fullPath, 'utf8');
            
            // AGGRESSIVE CLEANING
            // Remove the double stroke/fill mess
            // Pattern: stroke="stroke="black" stroke-width="2" fill="none"" stroke-width="2" fill="none"
            // We'll replace the whole chunk with a clean one
            svg = svg.replace(/stroke="stroke="black" stroke-width="2" fill="none""/g, 'stroke="black" stroke-width="2" fill="none"');
            
            // General safety replaces
            svg = svg.replace(/stroke="stroke="/g, 'stroke="');
            svg = svg.replace(/fill="none""/g, 'fill="none"');
            
            const b64 = Buffer.from(svg).toString('base64');
            const replacement = match[0].replace(/src="[^"]+"/, `src="data:image/svg+xml;base64,${b64}"`);
            content = content.replace(match[0], replacement);
            console.log(`Cleaned and re-embedded ${item.file} for ${item.key.substring(0, 20)}...`);
        } else {
            console.warn(`File not found: ${fullPath}`);
        }
    } else {
        console.warn(`Could not find block for: ${item.key}`);
    }
});

fs.writeFileSync(tsFile, content, 'utf8');
console.log('Chapter 11 images re-synchronized.');
