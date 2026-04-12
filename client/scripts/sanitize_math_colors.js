const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../data/content');

const themeColors = {
    "ch1": "#FFB74D",
    "ch2": "#FF4081",
    "ch3": "#AB47BC",
    "ch4": "#42A5F5",
    "ch5": "#66BB6A",
    "ch6": "#26C6DA",
    "ch7": "#7986CB",
    "ch8": "#FF8A65",
    "ch9": "#00C6FF",
    "ch10": "#FFB74D",
    "ch11": "#FF4081",
    "ch12": "#AB47BC",
    "ch13": "#42A5F5",
    "ch14": "#66BB6A"
};

const files = fs.readdirSync(contentDir).filter(f => f.startsWith('math-ch') && f.endsWith('.ts'));

files.forEach(file => {
    const chapterId = file.replace('math-', '').replace('.ts', '');
    const targetColor = themeColors[chapterId];
    if (!targetColor) return;

    const filepath = path.join(contentDir, file);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // 1. Clean up broken CSS from previous runs (color: #HEX; !important)
    content = content.replace(/color:\s*(#[A-Fa-f0-9]{6});\s*!important/gi, 'color: $1 !important');
    
    // 2. Target specific hex colors in style attributes
    const inlineColorRegex = /(style\\?=['"](?:[^'"]*?))color:\s*#[A-Fa-f0-9]{6}([^'"]*?['"])/gi;
    let newContent = content.replace(inlineColorRegex, `$1color: ${targetColor}$2`);
    
    // 3. Handle old default color
    newContent = newContent.replace(/#6C63FF/gi, targetColor);

    if (newContent !== content) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log(`Sanitized colors in ${file} to ${targetColor}`);
    } else {
        console.log(`No inline mismatches in ${file}`);
    }
});
