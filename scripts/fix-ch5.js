const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../client/assets/chapters/chapter5');
if (!fs.existsSync(dir)) process.exit(0);

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'mcqs.html' && f !== 'overview.html' && f !== 'exercises.html');

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Remove notebook specific styles/classes
    content = content.replace(/background-image:[^;]+;/g, '');
    content = content.replace(/background-size:[^;]+;/g, '');
    content = content.replace(/border-left:\s*2px\s*solid[^;]+;/g, '');
    content = content.replace(/background-color:\s*#[a-fA-F0-9]+;/g, '');

    // Replace <div class="container"> and its closing tag
    if (content.includes('<div class="container">')) {
        content = content.replace(/<div class="container">/, '');
        content = content.replace(/<\/div>\s*<\/body>/, '</body>');
    }

    // Convert <span class="step"> to <div class="step"> safely line by line
    let lines = content.split('\n');
    lines = lines.map(line => {
        if (line.includes('<span class="step">') || line.includes('<span class="answer">')) {
            let modified = line.replace(/<span class="(step|answer)">/, '<div class="$1">');
            // replace final </span> on that line
            let lastIndex = modified.lastIndexOf('</span>');
            if (lastIndex !== -1) {
                modified = modified.substring(0, lastIndex) + '</div>' + modified.substring(lastIndex + 7);
            }
            return modified;
        }
        return line;
    });
    content = lines.join('\n');

    // Convert sub-questions class="question" to class="sub-question"
    content = content.replace(/<div class="question">\s*\(\s*(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)\s*\)([\s\S]*?)<\/div>/gi, '<div class="sub-question">($1)$2</div>');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Fixed structure in ${file}`);
}
