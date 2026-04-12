const fs = require('fs');
const path = require('path');

const brainPath = 'C:\\Users\\hp\\.gemini\antigravity\\brain\\5f289ee6-cb2d-4d3c-b14f-c5ab390b3671';
const ch7Path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\math-ch7.ts';

const imageMap = {
    'q711': 'math_ch7_q711_1772485855752.png',
    'q713': 'math_ch7_q713_1772485867538.png',
    'q714': 'math_ch7_q714_1772485891852.png',
    'q715': 'math_ch7_q715_1772485905574.png',
    'q716': 'math_ch7_q716_1772485927492.png',
    'q717': 'math_ch7_q717_1772485942985.png'
};

let content = fs.readFileSync(ch7Path, 'utf8');
const imgStyle = 'background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);';

for (const [id, fileName] of Object.entries(imageMap)) {
    const fullPath = path.join(brainPath, fileName);
    if (fs.existsSync(fullPath)) {
        const base64 = fs.readFileSync(fullPath).toString('base64');
        const imgTag = `<img src=\\"data:image/png;base64,${base64}\\" style=\\"${imgStyle}\\" />`;

        // Find the question/example object and insert imgTag into solution
        const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(image:\\s*"[^"]*",)?([\\s\\S]*?solution:\\s*\\[)`, 'g');
        content = content.replace(regex, (match, p1, p2, p3) => {
            return `${p1}${p3} "${imgTag}", `;
        });
    }
}

// Global cleanup for any remaining fractions/symbol issues
content = content.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '$1/$2');
content = content.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
content = content.replace(/\\√/g, '√');
content = content.replace(/\\Rightarrow/g, '⇒');
content = content.replace(/\\pm/g, '±');
content = content.replace(/\\neq/g, '≠');
content = content.replace(/\\^2/g, '²');
content = content.replace(/\\cdot/g, '·');

// Remove remaining 'image' lines
content = content.replace(/image: "data:image\/svg\+xml;base64,[^"]*",/g, '');

fs.writeFileSync(ch7Path, content);
console.log('Batch 2 Images integrated.');
