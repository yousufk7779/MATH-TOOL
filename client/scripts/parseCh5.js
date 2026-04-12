const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter5');
const outFile = path.join(__dirname, '../data/content/math-ch5.ts');

let result = {
    id: "ch5",
    number: 5,
    title: "Arithmetic Progressions",
    introduction: "An Arithmetic Progression (AP) is a sequence of numbers in which each term is obtained by adding a fixed number to the preceding term.",
    definitions: [
        { term: "First term (a)", description: "The starting value." },
        { term: "Common difference (d)", description: "The constant difference between consecutive terms." },
        { term: "nth term (an)", description: "The general term of the AP." }
    ],
    keyPoints: [
        "The formula for the nth term is an = a + (n-1)d.",
        "The formula for the sum of the first n terms is Sn = \\(\\frac{n}{2}\\) [2a + (n-1)d]."
    ],
    formulas: [],
    crux: [
        "Recognizing the constant difference makes predicting future values simple.",
        "If a, b, c are in AP, then 2b = a + c."
    ],
    summary: [
        "Progressions streamline repetitive arithmetic addition, proving highly useful in compounding, simple interest, and uniform growth models.",
        "Carefully read and understand every problem statement before jumping into the solution.",
        "A strong grasp of the core concepts is the key to solving complex problems easily.",
        "Make a habit of practicing the solved examples to get familiar with standard solution formats."
    ],
    examples: [],
    exercises: [],
    mcqs: []
};

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

function parseExercise(fileName, exId, exName) {
    const p = path.join(chapterDir, fileName);
    if (!fs.existsSync(p)) return;

    const html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html);

    let questions = [];

    if ($('.content-box').length === 0) {
        let currentBox = null;
        const boxes = [];
        $('.container').children().each((i, el) => {
            const $el = $(el);
            if ($el.hasClass('question')) {
                currentBox = $('<div class="content-box"></div>');
                boxes.push(currentBox);
                currentBox.append($el.clone());
            } else if (currentBox && !$el.is('h1, h2, style, script, title')) {
                currentBox.append($el.clone());
            }
        });
        $('.container').empty().append(boxes);
    }

    $('.content-box').each((i, el) => {
        let questionText = '';
        const qEl = $(el).find('.question').first();
        if (qEl.length) {
            qEl.contents().each((j, node) => {
                if (node.tagName === 'img') {
                    questionText += `\n<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 84px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />\n`;
                } else if (node.type === 'text') {
                    questionText += $(node).text();
                } else {
                    questionText += $(node).text();
                }
            });
            // subQs not appended to questionText
        }

        questionText = cleanText(questionText.replace(/^(?:Question|Example)?\s*\d+\.\s*/i, ''));
        questionText = questionText.replace(/\n/g, '<br/>');
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        let solutionSteps = [];
        let finalAnswers = [];

        $(el).children().each((j, child) => {
            if ($(child).hasClass('question')) return;

            if ($(child).hasClass('sub-question')) {
                if (solutionSteps.length > 0) solutionSteps.push("");
                solutionSteps.push(`<span style="color: #FFAB00; font-weight: normal;">${cleanText($(child).text())}</span>`);
            } else if ($(child).hasClass('section-title')) {
                solutionSteps.push(`<span style="font-weight: normal;">${cleanText($(child).text())}</span>`);
            } else if ($(child).hasClass('final-answer')) {
                let ans = cleanText($(child).text());
                finalAnswers.push(ans);
                solutionSteps.push(`**${ans}**`);
            } else if ($(child).is('img')) {
                solutionSteps.push(`<img src="${$(child).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 84px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
            } else if ($(child).hasClass('table-container') || $(child).is('table')) {
                solutionSteps.push('<div class="table-container">' + $(child).html() + '</div>');
            } else {
                let table = $(child).find('table, .coord-table');
                if (table.length > 0) {
                    solutionSteps.push('<div class="table-container">' + $(child).html() + '</div>');
                } else {
                    let imgs = $(child).find('img');
                    if (imgs.length && !$(child).hasClass('table-container')) {
                        $(child).contents().each((k, node) => {
                            if (node.tagName === 'img') {
                                solutionSteps.push(`<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 84px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
                            } else if (node.type === 'text') {
                                let text = cleanText($(node).text());
                                if (text && text !== "»" && text !== "") solutionSteps.push(text.replace(/^»\s*/, ''));
                            } else {
                                let text = cleanText($(node).text());
                                if (text && text !== "»" && text !== "") solutionSteps.push(...text.split('\n').map(s => s.trim().replace(/^»\s*/, '')).filter(s => s));
                            }
                        });
                    } else {
                        let text = cleanText($(child).text());
                        if (text && text !== "»") {
                            solutionSteps.push(...text.split('\n').map(s => s.trim().replace(/^»\s*/, '')).filter(s => s));
                        }
                    }
                }
            }
        });

        solutionSteps = solutionSteps.filter(s => s.trim() !== '' || s === "");
        let cleanedSteps = [];
        for (let k = 0; k < solutionSteps.length; k++) {
            if (solutionSteps[k] === "") {
                if (cleanedSteps.length > 0 && cleanedSteps[cleanedSteps.length - 1] !== "") {
                    cleanedSteps.push("");
                }
            } else {
                cleanedSteps.push(solutionSteps[k]);
            }
        }

        let answer = finalAnswers.join(' | ');
        if (!answer && cleanedSteps.length > 0) {
            let possibleAnswer = [...cleanedSteps].reverse().find(s => !s.includes('<img') && !s.includes('<div') && !s.includes('<table') && s.trim());
            answer = possibleAnswer ? possibleAnswer.replace(/\*\*/g, '') : "See solution steps";
        }

        if (questionText || cleanedSteps.length > 0) {
            questions.push({
                id: 'q' + (i + 1),
                number: String(i + 1),
                question: questionText,
                solution: cleanedSteps,
                answer: answer
            });
        }
    });

    if (exId === 'examples') {
        result.examples = questions;
    } else {
        result.exercises.push({
            id: exId,
            name: exName,
            questions: questions
        });
    }
}

parseExercise('exercise1.html', 'exercise1', 'Exercise 5.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 5.2');
parseExercise('exercise3.html', 'exercise3', 'Exercise 5.3');
parseExercise('examples.html', 'examples', 'Examples');

const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const htmlText = fs.readFileSync(mcqPath, 'utf8');
    const $ = cheerio.load(htmlText);

    const answerMap = {};
    $('.answer-key table tr').each((j, row) => {
        const tds = $(row).find('td');
        for (let k = 0; k < tds.length; k += 2) {
            const qNum = $(tds[k]).text().trim();
            const ansLetter = $(tds[k + 1]).text().trim();
            if (qNum) {
                answerMap[qNum] = ansLetter;
            }
        }
    });

    $('.question-block').each((i, el) => {
        let questionText = $(el).find('.q-text').text().trim().replace(/^\d+\.\s*/, '');
        // handle fraction in question
        questionText = questionText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        const options = [];
        let correctAnswer = '';

        $(el).find('.options .opt').each((j, opt) => {
            let optText = $(opt).text().trim();
            optText = optText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            // Remove the (A), (B) prefix from options
            optText = optText.replace(/^\([A-D]\)\s*/, '');
            options.push(optText);
        });

        // Get answer from answerMap
        const qNumStr = String(i + 1);
        const ansLetter = answerMap[qNumStr];

        let ansIndex = 0;
        if (ansLetter === 'A') ansIndex = 0;
        else if (ansLetter === 'B') ansIndex = 1;
        else if (ansLetter === 'C') ansIndex = 2;
        else if (ansLetter === 'D') ansIndex = 3;

        if (options[ansIndex]) {
            correctAnswer = options[ansIndex];
        }

        result.mcqs.push({
            id: 'mcq' + (i + 1),
            question: questionText,
            options: options,
            correctAnswer: correctAnswer
        });
    });
}

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh5: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);
