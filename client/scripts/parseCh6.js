const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter6');
const outFile = path.join(__dirname, '../data/content/math-ch6.ts');

let result = {
    id: "ch6",
    number: 6,
    title: "Triangles",
    introduction: "A triangle is a closed shape with three angles. This chapter dives beyond basic properties into the fascinating world of geometric similarity.",
    definitions: [
        { term: "Similar Figures", description: "Same shape but not necessarily the same size." },
        { term: "Congruent Figures", description: "Exactly the same shape and size." },
        { term: "Equiangular Triangles", description: "Corresponding angles are equal." }
    ],
    keyPoints: [
        "Basic Proportionality Theorem (BPT/Thales Theorem): A line parallel to one side dividing the other two sides divides them in the same ratio.",
        "Similarity criteria: AA, SAS, SSS."
    ],
    formulas: [],
    crux: [
        "When triangles are similar, their corresponding angles are equal, and the ratio of their corresponding sides is perfectly constant."
    ],
    summary: [
        "Similarity forms the bedrock of trigonometry and scaling.",
        "It distinguishes exactness (congruence) from scaled replicas (similarity).",
        "Carefully read and understand every problem statement before jumping into the solution.",
        "A strong grasp of the core concepts is the key to solving complex problems easily.",
        "Make a habit of practicing the solved examples to get familiar with standard solution formats."
    ],
    examples: [],
    exercises: [],
    mcqs: [],
    theorems: []
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

function getBase64Image(src) {
    if (!src) return src;
    if (src.includes('data:image')) return src;

    // Convert .svg request to .png
    let filename = src.replace('images/', '').replace(/"/g, '').replace(/=/g, '').trim().replace('.svg', '.png');

    let imgPath = path.join(chapterDir, 'images', filename);
    if (fs.existsSync(imgPath)) {
        let ext = path.extname(filename).substring(1).toLowerCase();
        let mime = ext === 'svg' ? 'image/svg+xml' : (ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png');
        try {
            let b64 = fs.readFileSync(imgPath, 'base64');
            return `data:${mime};base64,${b64}`;
        } catch (e) { return src; }
    }
    return src;
}

function parseExercise(fileName, exId, exName) {
    const p = path.join(chapterDir, fileName);
    if (!fs.existsSync(p)) return;

    let html = fs.readFileSync(p, 'utf8');
    html = html.replace(/src="images\/"([^"]+)("=""|"")/g, 'src="images/$1"');
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
                    let bSrc = getBase64Image($(node).attr('src'));
                    questionText += `\n<img src="${bSrc}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />\n`;
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
                let bSrc = getBase64Image($(child).attr('src'));
                solutionSteps.push(`<img src="${bSrc}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
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
                                let bSrc = getBase64Image($(node).attr('src'));
                                solutionSteps.push(`<img src="${bSrc}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
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

parseExercise('exercise1.html', 'exercise1', 'Exercise 6.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 6.2');
parseExercise('exercise3.html', 'exercise3', 'Exercise 6.3');
parseExercise('examples.html', 'examples', 'Examples');

const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const htmlText = fs.readFileSync(mcqPath, 'utf8');
    const $ = cheerio.load(htmlText);

    $('.content-box').each((i, el) => {
        let questionText = $(el).find('.question').text().trim().replace(/^\d+\.\s*/, '');
        questionText = questionText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        const options = [];
        $(el).find('.options .option').each((j, opt) => {
            let optText = $(opt).text().trim();
            optText = optText.replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            optText = optText.replace(/^\([A-D]\)\s*/, '');
            options.push(optText);
        });

        let correctAnswerText = $(el).find('.correct-answer').text().trim(); // "Correct Answer: (C)"
        let correctAnswer = '';
        const match = correctAnswerText.match(/\(([A-D])\)/);
        if (match) {
            let ansLetter = match[1];
            let ansIndex = 0;
            if (ansLetter === 'A') ansIndex = 0;
            else if (ansLetter === 'B') ansIndex = 1;
            else if (ansLetter === 'C') ansIndex = 2;
            else if (ansLetter === 'D') ansIndex = 3;
            if (options[ansIndex]) correctAnswer = options[ansIndex];
        }

        result.mcqs.push({
            id: 'mcq' + (i + 1),
            question: questionText,
            options: options,
            correctAnswer: correctAnswer
        });
    });
}

const theoremPath = path.join(chapterDir, 'theorems.html');
if (fs.existsSync(theoremPath)) {
    let thHtml = fs.readFileSync(theoremPath, 'utf8');
    thHtml = thHtml.replace(/src="images\\?"(?:\s+|\\")?([^"]+\.svg)[^>]*"/g, 'src="images/$1"');
    const $ = cheerio.load(thHtml);

    $('.content-box').each((i, el) => {
        let title = $(el).find('.theorem-title').text().trim();
        if (!title) return;

        let theoremItem = {
            id: 'theo' + (i + 1),
            number: '6.' + (i + 1),
            name: title.replace(/^Theorem \d+\.\d+:\s*/, ''),
            statement: '',
            proof: []
        };

        let currentSection = 'statement';
        $(el).children().each((j, child) => {
            if ($(child).hasClass('theorem-title')) return;

            let htmlText = '';

            if ($(child).hasClass('sub-header')) {
                let sectionTitle = cleanText($(child).text());
                if (sectionTitle.includes('Proof') || sectionTitle.includes('Construction')) {
                    currentSection = 'proof';
                }
                htmlText = `<span style="color: #2E7D32; font-weight: 700;">${sectionTitle}</span>`;
            } else if ($(child).is('img')) {
                let rawSrc = $(child).attr('src');
                let bSrc = getBase64Image(rawSrc);
                htmlText = `<img src="${bSrc}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`;
            } else if ($(child).hasClass('final-answer')) {
                htmlText = `**${cleanText($(child).text())}**`;
            } else {
                htmlText = cleanText($(child).text());
            }

            if (!htmlText) return;

            if (currentSection === 'statement') {
                if ($(child).hasClass('sub-header')) {
                    theoremItem.statement += `<br/>${htmlText}<br/>`;
                } else {
                    theoremItem.statement += htmlText + " ";
                }
            } else if (currentSection === 'proof') {
                theoremItem.proof.push(htmlText);
            }
        });

        theoremItem.statement = theoremItem.statement.trim();
        result.theorems.push(theoremItem);
    });
}

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh6: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);

// Post-processed conversion of any inline SVG base64 strings in the HTML into PNG base64 strings
try {
    const { execSync } = require('child_process');
    execSync('node "' + path.join(__dirname, 'fixBase64.js') + '"', { stdio: 'inherit' });
} catch (e) {
    console.error('Failed to run fixBase64.js:', e);
}
