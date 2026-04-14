const fs = require('fs');
const path = require('path');

const tsFile = path.join(__dirname, 'content', 'math-ch11.ts');
const imgDir = path.join(__dirname, 'chapter11', 'images');

const mapping = [
    { key: '1. Introduction', file: 'intro_visual.svg' },
    { key: 'Example 1. Find the area of the sector', file: 'example_1.svg' },
    { key: 'Example 2. Find the area of the segment', file: 'example_2.svg' },
    { key: 'Example 3. Find the area of the shaded region', file: 'example_3.svg' },
    { key: '1. Find the area of a sector', file: 'ex11_1_q1.svg' },
    { key: '2. Find the area of a quadrant', file: 'ex11_1_q2.svg' },
    { key: '3. The length of the minute', file: 'ex11_1_q3.svg' },
    { key: '4. A chord of a circle of radius 10', file: 'ex11_1_q4.svg' },
    { key: '5. In a circle of radius 21', file: 'ex11_1_q5.svg' },
    { key: '6. A chord radius 15', file: 'ex11_1_q6.svg' },
    { key: '7. A chord radius 12', file: 'ex11_1_q7.svg' },
    { key: '8. A horse is tied', file: 'ex11_1_q8.svg' },
    { key: '9. A brooch (d=35mm)', file: 'ex11_1_q9.svg' },
    { key: '10. Umbrella with 8 ribs', file: 'ex11_1_q10.svg' },
    { key: '11. Two car wipers', file: 'ex11_1_q11.svg' },
    { key: '12. Lighthouse red light', file: 'ex11_1_q12.svg' },
    { key: '13. Table cover with 6 designs', file: 'ex11_1_q13.svg' },
    { key: '14. Area of sector with angle p', file: 'ex11_1_q14.svg' }
];

let content = fs.readFileSync(tsFile, 'utf8');

// Replace all non-ascii characters that look like degree symbols using Unicode escapes
content = content.replace(/\uFFFD/g, '\u00B0');
content = content.replace(/\u00C2\u00B0/g, '\u00B0');

mapping.forEach(item => {
    const escapedKey = item.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedKey}[\\s\\S]*?<img src="[^"]+"`, 'i');
    const match = content.match(regex);

    if (match) {
        const fullPath = path.join(imgDir, item.file);
        if (fs.existsSync(fullPath)) {
            let svg = fs.readFileSync(fullPath, 'utf8');
            
            // CLEANING
            svg = svg.replace(/stroke="stroke="([^"]+)"/g, 'stroke="$1"');
            svg = svg.replace(/stroke="stroke="black" stroke-width="2" fill="none""\s*stroke-width="2" fill="none"/g, 'stroke="black" stroke-width="2" fill="none"');
            svg = svg.replace(/fill="none""/g, 'fill="none"');
            svg = svg.replace(/style="background-color:white;\s*border:1px solid #ddd;"/g, 'style="background:transparent;"');
            svg = svg.replace(/stroke="stroke="/g, 'stroke="');
            svg = svg.replace(/fill="none""/g, 'fill="none"');
            svg = svg.replace(/""/g, '"');

            const b64 = Buffer.from(svg).toString('base64');
            const replacement = match[0].replace(/src="[^"]+"/, `src="data:image/svg+xml;base64,${b64}"`);
            content = content.replace(match[0], replacement);
        }
    }
});

fs.writeFileSync(tsFile, content, 'utf8');
console.log('Chapter 11 finalized with degree symbol cleanup.');
