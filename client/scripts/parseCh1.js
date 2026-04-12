const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter1');
const outFile = path.join(__dirname, '../data/content/math-ch1.ts');

let result = {
    id: "ch1",
    number: 1,
    title: "Real Numbers",
    introduction: "A polynomial is an algebraic expression consisting of variables and coefficients, with non-negative exponent values. It forms the core of algebraic equations.",
    definitions: [
        { term: "Degree", description: "The highest power of x in p(x)." },
        { term: "Zero of a Polynomial", description: "A real number k is a zero if p(k) = 0." },
        { term: "Linear", description: "Degree 1." },
        { term: "Quadratic", description: "Degree 2." },
        { term: "Cubic", description: "Degree 3." }
    ],
    keyPoints: [
        "The geometrical meaning of zeros represents the x-intercepts of the polynomial graph.",
        "The relationship between zeros and coefficients for quadratic polynomials is fundamental."
    ],
    formulas: [],
    crux: [
        "A polynomial of degree n can have at most n real zeros.",
        "For a quadratic axÂ² + bx + c, Sum of zeros = -<sup>b</sup>&frasl;<sub>a</sub>, Product of zeros = <sup>c</sup>&frasl;<sub>a</sub>."
    ],
    summary: [
        "Polynomials offer a way to model multiple outcomes algebraically and graphically.",
        "Their roots determine where the function crosses the axis.",
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
        .replace(/^Â»\s*/, '')
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
                    questionText += `\n<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />\n`;
                } else if (node.type === 'text') {
                    questionText += $(node).text();
                } else {
                    questionText += $(node).text();
                }
            });
            // subQs not added to questionText
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
                solutionSteps.push(`<span style="font-weight: normal;">${cleanText($(child).text())}</span>`);
            } else if ($(child).hasClass('section-title')) {
                solutionSteps.push(`<span style="font-weight: normal;">${cleanText($(child).text())}</span>`);
            } else if ($(child).hasClass('final-answer')) {
                let ans = cleanText($(child).text());
                finalAnswers.push(ans);
                solutionSteps.push(`**${ans}**`);
            } else if ($(child).is('img')) {
                solutionSteps.push(`<img src="${$(child).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
            } else {
                let imgs = $(child).find('img');
                if (imgs.length) {
                    $(child).contents().each((k, node) => {
                        if (node.tagName === 'img') {
                            solutionSteps.push(`<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
                        } else if (node.type === 'text') {
                            let text = cleanText($(node).text());
                            if (text && text !== "Â»" && text !== "") solutionSteps.push(text.replace(/^Â»\s*/, ''));
                        } else {
                            let text = cleanText($(node).text());
                            if (text && text !== "Â»" && text !== "") solutionSteps.push(...text.split('\n').map(s => s.trim().replace(/^Â»\s*/, '')).filter(s => s));
                        }
                    });
                } else {
                    let text = cleanText($(child).text());
                    if (text && text !== "Â»") {
                        solutionSteps.push(...text.split('\n').map(s => s.trim().replace(/^Â»\s*/, '')).filter(s => s));
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
            let possibleAnswer = [...cleanedSteps].reverse().find(s => !s.includes('<img') && s.trim());
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

parseExercise('exercise1.html', 'exercise1', 'Exercise 2.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 2.2');
parseExercise('examples.html', 'examples', 'Examples');

const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const $ = cheerio.load(fs.readFileSync(mcqPath, 'utf8'));
    const answerKeyText = $('.answer-key').text();

    $('.mcq-box').each((i, el) => {
        let question = cleanText($(el).find('.mcq-question').text().replace(/^\d+\.\s*/, ''));
        question = `<span style="font-weight: normal;">${question}</span>`;
        const options = [];
        let correctAnswer = '';

        $(el).find('.mcq-options div').each((j, opt) => {
            const optText = cleanText($(opt).text());
            options.push(optText);
        });

        const match = answerKeyText.match(new RegExp((i + 1) + '\\.\\(([a-d])\\)'));
        if (match) {
            const letter = match[1];
            correctAnswer = options.find(o => o.startsWith(`(${letter})`)) || '';
            for (let k = 0; k < options.length; k++) {
                options[k] = options[k].replace(/^\([a-d]\)\s*/, '');
            }
            correctAnswer = correctAnswer.replace(/^\([a-d]\)\s*/, '');
        } else {
            for (let k = 0; k < options.length; k++) {
                options[k] = options[k].replace(/^\([a-d]\)\s*/, '');
            }
        }

        result.mcqs.push({
            id: 'mcq' + (i + 1),
            question,
            options,
            correctAnswer
        });
    });
}

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh1: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);
