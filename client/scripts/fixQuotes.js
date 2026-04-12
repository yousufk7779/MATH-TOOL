const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data/content');
const files = fs.readdirSync(dirPath).filter(f => f.startsWith('math-') && f.endsWith('.ts'));

let totalFixes = 0;
files.forEach(file => {
    const fPath = path.join(dirPath, file);
    let content = fs.readFileSync(fPath, 'utf8');
    let original = content;

    // Fix <span style="... "> to <span style=\"... \">
    // We match <span style="   but since it's unescaped in the file, it's just <span style="
    // And we replace it with <span style=\"
    content = content.replace(/<span style="/g, '<span style=\\"');
    content = content.replace(/<span style=\\"([^"]*)">/g, '<span style=\\"$1\\">');

    // Fix <span style="... "> where the closing quote isn't matched by the above 
    // because it was <span style="color: #FFAB00; font-weight: normal;">
    // Let's just fix all unescaped quotes inside <span ...> and <img ...>

    // Actually, simpler: replace all `<span style="` with `<span style='`
    // And `">` with `'>` IF it's preceded by `;` or `normal` or `700` (value).
    // Let's just do:
    content = content.replace(/style="([^"]+)"/g, 'style=\\"$1\\"');

    // For images: src="..."
    content = content.replace(/src="([^"]+)"/g, 'src=\\"$1\\"');

    // Wait, if it was ALREADY escaped, e.g. src=\"...\", then the regex `src="` wouldn't match!
    // UNLESS the `"` was already there. Let's make sure we only match unescaped quotes.
    // (?<!\\)" matches a quote not preceded by a backslash.
    content = content.replace(/(?<!\\)style="([^"]+)(?<!\\)"/g, 'style=\\"$1\\"');
    content = content.replace(/(?<!\\)src="([^"]+)(?<!\\)"/g, 'src=\\"$1\\"');

    if (original !== content) {
        fs.writeFileSync(fPath, content, 'utf8');
        console.log(`Fixed unescaped quotes in: ${file}`);
        totalFixes++;
    }
});
console.log(`Fixed quotes in ${totalFixes} files.`);
