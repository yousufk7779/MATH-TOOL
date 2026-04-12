const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter4');
const outFile = path.join(__dirname, '../data/content/math-ch4.ts');

let result = {
    id: "ch4",
    number: 4,
    title: "Quadratic Equations",
    introduction: "A quadratic equation is a second-degree polynomial equation in a single variable x, typically written in the standard form ax² + bx + c = 0.",
    definitions: [
        { term: "Roots", description: "The values of x that satisfy the equation." },
        { term: "Discriminant (D)", description: "Evaluated as b² - 4ac, which determines the nature of the roots." }
    ],
    keyPoints: [
        "Solved using methods like factorization, completing the square, or the quadratic formula x = (-b ± √D) / 2a."
    ],
    formulas: [],
    crux: [
        "If D > 0, roots are real and distinct.",
        "If D = 0, roots are real and equal.",
        "If D < 0, there are no real roots."
    ],
    summary: [
        "Quadratic equations naturally model situations involving gravity, area, and parabolic trajectories.",
        "The discriminant is the fastest tool to check root validity.",
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

parseExercise('exercise1.html', 'exercise1', 'Exercise 4.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 4.2');
parseExercise('exercise3.html', 'exercise3', 'Exercise 4.3');
parseExercise('examples.html', 'examples', 'Examples');

const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const htmlText = fs.readFileSync(mcqPath, 'utf8');
    const $ = cheerio.load(htmlText);

    $('.content-box').each((i, el) => {
        let questionText = $(el).find('.question').text().trim().replace(/^\d+\.\s*/, '');
        // handle fraction in question
        questionText = questionText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        const options = [];
        let correctAnswer = '';

        $(el).find('.options .option').each((j, opt) => {
            let optText = $(opt).text().trim();
            optText = optText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            options.push(optText);
        });

        let correctAnsText = $(el).find('.correct-answer').text().trim();
        correctAnsText = correctAnsText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');

        if (correctAnsText.startsWith('Answer:')) {
            correctAnsText = correctAnsText.substring('Answer:'.length).trim();
        }

        const match = correctAnsText.match(/^\(([a-d])\)\s*(.*)/);
        if (match) {
            correctAnswer = match[2];
            for (let k = 0; k < options.length; k++) {
                options[k] = options[k].replace(/^\([a-d]\)\s*/, '');
            }
        } else {
            correctAnswer = correctAnsText;
            for (let k = 0; k < options.length; k++) {
                options[k] = options[k].replace(/^\([a-d]\)\s*/, '');
            }
        }

        result.mcqs.push({
            id: 'mcq' + (i + 1),
            question: questionText,
            options: options,
            correctAnswer: correctAnswer
        });
    });
}

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh4: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);
