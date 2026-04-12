const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const p = path.join(__dirname, '../assets/chapters/chapter1/examples.html');
const html = fs.readFileSync(p, 'utf8');
const $ = cheerio.load(html);

function cleanText(text) {
    if (!text) return '';
    return text.trim()
        .replace(/^»\s*/, '')
        .replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        .replace(/\\\(([^\)]+)\/([^\)]+)\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        .replace(/([a-zA-Z0-9\+\-\s]+)\/([a-zA-Z0-9\+\-\s]+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        .replace(/\\\\/g, '\\')
        .replace(/\n\s*/g, '\n');
}

let examples = [];
$('.content-box').each((i, el) => {
    let questionText = '';
    const qEl = $(el).find('.question').first();
    let numStr = qEl.find('.question-number').text().trim().replace(/[^0-9]/g, '');
    let num = numStr || (i + 1).toString();

    if (qEl.length) {
        qEl.contents().each((j, node) => {
            if ($(node).hasClass('question-number')) return;
            if (node.tagName === 'img') {
                questionText += `\n<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />\n`;
            } else if (node.type === 'text') {
                questionText += $(node).text();
            } else {
                questionText += $(node).text();
            }
        });
        let subQs = [];
        $(el).find('.sub-question').each((j, subQ) => {
            subQs.push(cleanText($(subQ).text()));
        });
        if (subQs.length > 0) {
            questionText += '<br/>' + subQs.join('<br/>');
        }
    }

    questionText = cleanText(questionText.replace(/^(?:Question|Example)?\s*\d+\.\s*/i, ''));
    questionText = questionText.replace(/\n/g, '<br/>');

    let solutionSteps = [];
    let finalAnswers = [];

    $(el).children().each((j, child) => {
        if ($(child).hasClass('question')) return;

        if ($(child).hasClass('sub-question')) {
            if (solutionSteps.length > 0) solutionSteps.push("");
            solutionSteps.push(`**${cleanText($(child).text())}**`);
        } else if ($(child).hasClass('section-title')) {
            solutionSteps.push(`**${cleanText($(child).text())}**`);
        } else if ($(child).hasClass('final-answer')) {
            let ans = cleanText($(child).text());
            finalAnswers.push(ans);
            solutionSteps.push(`**${ans}**`);
        } else if ($(child).is('img')) {
            const src = $(child).attr('src');
            solutionSteps.push(`<img src="${src}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
        } else {
            const t = cleanText($(child).text());
            if (t) solutionSteps.push(t);
        }
    });

    let ansText = finalAnswers.join(' | ');
    if (!ansText && solutionSteps.length > 0) {
        let lastStep = solutionSteps[solutionSteps.length - 1];
        ansText = lastStep.replace(/\*\*/g, '');
    }

    examples.push({
        id: 'q' + num,
        number: num,
        question: questionText,
        solution: solutionSteps,
        answer: ansText
    });
});

fs.writeFileSync(path.join(__dirname, '../temp_examples_ch1.json'), JSON.stringify(examples, null, 2));
console.log('Examples parsed:', examples.length);
