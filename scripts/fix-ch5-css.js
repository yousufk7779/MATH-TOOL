const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../client/assets/chapters/chapter5');
if (!fs.existsSync(dir)) process.exit(0);

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'mcqs.html' && f !== 'overview.html' && f !== 'exercises.html');

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Remove notebook specific inline body backgrounds
    content = content.replace(/background-image:[^;]+;/g, '');
    content = content.replace(/background-size:[^;]+;/g, '');
    content = content.replace(/border-left:\s*2px\s*solid[^;]+;/g, '');
    content = content.replace(/background-color:\s*#[a-fA-F0-9]+;/g, '');

    // Convert <span> classes into <div> for compatibility without destroying fractions!
    // Since <span class="step"> and <span class="answer"> span multiple lines and contain other spans,
    // we use a simple text replacement for the opening tags.
    // However, since closing tags </span> might belong to internal fractions like <span class="frac-top">...</span>,
    // switching ONLY the ROOT <span> to <div> is hard with Regex.
    // Instead we can just let HTMLPanelRenderer's CSS apply to the SPAN elements themselves automatically!
    // We already noticed .step translates natively to both heavily injected CSS properties and the span element.
    // We just need to change the <span class="answer"> opening tag into <span class="final-answer">
    // so it catches the injected CSS for final-answer!
    content = content.replace(/<span class="answer">/g, '<span class="final-answer">');
    content = content.replace(/<div class="question">\s*\(\s*(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)\s*\)([\s\S]*?)<\/div>/g, '<div class="sub-question">($1)$2</div>');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Removed Notebook CSS in ${file}`);
}
