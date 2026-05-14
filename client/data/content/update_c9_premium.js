const fs = require('fs');
const path = require('path');

const THEMES = {
    "c9-math-1": "#FFB74D",
    "c9-math-2": "#FF4081",
    "c9-math-3": "#AB47BC",
    "c9-math-4": "#42A5F5",
    "c9-math-5": "#66BB6A",
    "c9-math-6": "#FF4081",
    "c9-math-7": "#FFA726",
    "c9-math-8": "#FF8A65",
    "c9-math-9": "#00C6FF",
    "c9-math-10": "#FFA726",
    "c9-math-11": "#FF4DA6",
};

function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    if (hex.length === 6) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return "rgba(255, 255, 255, 0.05)";
}

function processHtml(html, themeColor) {
    const bgColor = hexToRgba(themeColor, 0.05);

    // 1. Fractions
    let newHtml = html.replace(/class="fraction"/g, "class='frac'");
    newHtml = newHtml.replace(/class='fraction'/g, "class='frac'");
    newHtml = newHtml.replace(/class="numerator"/g, "class='num'");
    newHtml = newHtml.replace(/class='numerator'/g, "class='num'");
    
    // Replace denominator spans
    const fractionRegex = /<span class='frac'>\s*<span class='num'>(.*?)<\/span>\s*<span>(.*?)<\/span>\s*<\/span>/gs;
    newHtml = newHtml.replace(fractionRegex, "<span class='frac'><span class='num'>$1</span><span class='den'>$2</span></span>");

    const cssTemplate = `      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: ${themeColor}; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid ${themeColor}; padding-left: 15px; margin-top: 15px; background: ${bgColor}; padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: ${themeColor} !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: ${themeColor} !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: ${bgColor} !important; border-left: 4px solid ${themeColor} !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: ${themeColor} !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: ${themeColor} !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: ${themeColor} !important; font-weight: 700; }
        strong { color: ${themeColor} !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: ${themeColor}; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: ${bgColor}; color: ${themeColor}; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>`;

    // Remove old style blocks
    newHtml = newHtml.replace(/<style>[\s\S]*?<\/style>/g, '');
    
    // Insert new css template
    newHtml = cssTemplate + "\n" + newHtml.trim();
    
    return newHtml;
}

function processFile(filePath, themeColor) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Process HTML inside backticks
    const backtickRegex = /`([\s\S]*?)`/g;
    let newContent = content.replace(backtickRegex, (match, p1) => {
        if (p1.includes('<style>') || p1.includes('class="container"') || p1.includes('class="ex-container"')) {
            return '`\n' + processHtml(p1, themeColor) + '\n`';
        }
        return match;
    });

    // Also fix fractions that might be outside of standard backtick matches (e.g. inline strings)
    newContent = newContent.replace(/class="fraction"/g, "class='frac'");
    newContent = newContent.replace(/class='fraction'/g, "class='frac'");
    newContent = newContent.replace(/class="numerator"/g, "class='num'");
    newContent = newContent.replace(/class='numerator'/g, "class='num'");
    const fallbackRegex = /<span class='frac'>\s*<span class='num'>(.*?)<\/span>\s*<span>(.*?)<\/span>\s*<\/span>/gs;
    newContent = newContent.replace(fallbackRegex, "<span class='frac'><span class='num'>$1</span><span class='den'>$2</span></span>");

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        return true;
    }
    return false;
}

const dir = __dirname;
const files = fs.readdirSync(dir);

for (const file of files) {
    if (file.startsWith("c9-math-") && file.endsWith(".ts")) {
        const chapterId = file.replace('.ts', '');
        if (THEMES[chapterId]) {
            const filePath = path.join(dir, file);
            console.log(`Processing ${file}...`);
            const updated = processFile(filePath, THEMES[chapterId]);
            if (updated) {
                console.log(`  -> Updated ${file}`);
            }
        }
    }
}
