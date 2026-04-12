const fs = require('fs');
const path = require('path');

const files = [
    'generate_ch3.js',
    'generate_ch8.js',
    'generate_ch9.js',
    'generate_ch10.js',
    'generate_ch11.js',
    'generate_ch12.js',
    'generate_ch13.js',
    'generate_ch14.js'
];

const gradients = [
    "#FFB74D", // orange (ch1, ch10)
    "#FF4081", // pink (ch2, ch11)
    "#AB47BC", // purple (ch3, ch12)
    "#42A5F5", // blue (ch4, ch13)
    "#66BB6A", // green (ch5, ch14)
    "#26C6DA", // teal (ch6)
    "#7986CB", // indigo (ch7)
    "#FF8A65", // deepOrange (ch8)
    "#00C6FF"  // brightBlue (ch9)
];

function getTargetColor(filename) {
    const match = filename.match(/generate_ch(\d+)\.js/);
    if (!match) return '#6C63FF';
    const num = parseInt(match[1]);
    return gradients[(num - 1) % gradients.length];
}

files.forEach(file => {
    const filepath = path.join(__dirname, file);
    if (!fs.existsSync(filepath)) return;
    
    const targetColor = getTargetColor(file);
    
    const standardizedCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid ${targetColor} !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: ${targetColor} !important; }
  .question { color: ${targetColor} !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: ${targetColor} !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
`;

    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Find the overrideCSS block and replace its content
    const cssMatch = content.match(/const overrideCSS = `([\s\S]*?)`;/);
    if (cssMatch) {
        content = content.replace(/const overrideCSS = `([\s\S]*?)`;/, `const overrideCSS = \`${standardizedCSS}\`;`);
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`Standardized colors in ${file} with ${targetColor}`);
    } else {
        console.log(`Could not find overrideCSS in ${file}`);
    }
});

