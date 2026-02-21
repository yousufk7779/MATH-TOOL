const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../client/assets/chapters/chapter5');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Remove the notebook linear gradient background from style block
    content = content.replace(/background-image:\s*linear-gradient[^;]+;/g, '');
    content = content.replace(/background-size:\s*100%\s*2em;/g, '');
    content = content.replace(/background-color:\s*#fdfdfd;/gi, '');
    content = content.replace(/border-left:\s*2px\s*solid\s*#ff9999;/gi, '');

    const $ = cheerio.load(content);

    // Convert specific spans to divs because they are block level components in our UI
    $('span.step, span.answer, span.final-answer, span.question, span.sub-question').each(function () {
        this.tagName = 'div';
    });

    $('div.answer').each(function () {
        $(this).removeClass('answer').addClass('final-answer');
    });

    // Write back the updated HTML
    fs.writeFileSync(p, $.html(), 'utf8');
    console.log(`Cleaned ${file}`);
}
