const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'content', 'math-ch11.ts');
const imagesDir = path.join(__dirname, 'chapter11', 'images');

// ONLY these should be base64
const targetImages = {
    'Example 1': 'example_1.svg',
    'Example 2': 'example_2.svg',
    '3. The length of the minute': 'ex11_1_q3.svg',
    '4. A chord of a circle of radius 10': 'ex11_1_q4.svg',
    '6. A chord radius 15': 'ex11_1_q6.svg',
    '7. A chord radius 12': 'ex11_1_q7.svg',
    '9. A brooch (d=35mm)': 'ex11_1_q9.svg',
    '10. Umbrella with 8 ribs': 'ex11_1_q10.svg',
    '13. Table cover with 6 designs': 'ex11_1_q13.svg'
};

// These should be reverted to src="filename.svg"
const revertImages = {
    '1. Introduction': 'intro_visual.svg',
    'Example 3': 'example_3.svg',
    '1. Find the area of a sector': 'ex11_1_q1.svg',
    '2. Find the area of a quadrant': 'ex11_1_q2.svg',
    '5. In a circle of radius 21': 'ex11_1_q5.svg',
    '8. A horse is tied': 'ex11_1_q8.svg',
    '11. Two car wipers': 'ex11_1_q11.svg',
    '12. Lighthouse red light': 'ex11_1_q12.svg',
    '14. Area of sector with angle p': 'ex11_1_q14.svg'
};

let content = fs.readFileSync(tsFilePath, 'utf8');

// 1. Process Targets (Fix and Base64)
for (const [key, filename] of Object.entries(targetImages)) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedKey}[\\s\\S]*?<img src="[^"]+"`, 'i');
    const match = content.match(regex);

    if (match) {
        const svgPath = path.join(imagesDir, filename);
        let svgData = fs.readFileSync(svgPath, 'utf8');
        // Fix syntax errors
        svgData = svgData.replace(/stroke="stroke="black"/g, 'stroke="black"');
        svgData = svgData.replace(/fill="none""/g, 'fill="none"');
        svgData = svgData.replace(/stroke="stroke="/g, 'stroke="');
        
        const b64 = Buffer.from(svgData).toString('base64');
        const replacement = match[0].replace(/src="[^"]+"/, `src="data:image/svg+xml;base64,${b64}"`);
        content = content.replace(match[0], replacement);
        console.log(`[Ch11] TARGET: Fixed and Encoded ${filename}`);
    }
}

// 2. Process Reverts (Back to filename.svg)
for (const [key, filename] of Object.entries(revertImages)) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedKey}[\\s\\S]*?<img src="[^"]+"`, 'i');
    const match = content.match(regex);

    if (match) {
        const replacement = match[0].replace(/src="[^"]+"/, `src="${filename}"`);
        content = content.replace(match[0], replacement);
        console.log(`[Ch11] REVERT: Reverted to ${filename}`);
    }
}

fs.writeFileSync(tsFilePath, content, 'utf8');
console.log('Done.');
