const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter8');
const outFile = path.join(__dirname, '../data/content/math-ch8.ts');

let result = {
    id: "ch8",
    number: 8,
    title: "Introduction to Trigonometry",
    introduction: "Trigonometry is the study of relationships between the sides and angles of a right-angled triangle. It implies measuring the elements of a triangle.",
    definitions: [
        { term: "Sine, Cosine, Tangent", description: "The primary ratios linking specific side lengths (Perpendicular, Base, Hypotenuse) to an angle θ." },
        { term: "Reciprocals", description: "Cosec, Sec, Cot." }
    ],
    keyPoints: [
        "The trigonometric ratios of standard angles (0°, 30°, 45°, 60°, 90°) must be memorized.",
        "Key identity: sin²θ + cos²θ = 1."
    ],
    formulas: [],
    crux: [
        "Given just one side and one acute angle in a right triangle, trigonometry allows us to determine all other remaining sides and angles."
    ],
    summary: [
        "Trigonometry translates angular orientation into lengths, providing foundational principles heavily utilized in physics and engineering disciplines.",
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
        .replace(/\\\((.*?)\\\)/g, '$1') // remove \( \) around fractions or equations
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

    // Check if SVG exists instead
    let imgPathSvg = path.join(chapterDir, 'images', filename.replace('.png', '.svg'));
    if (fs.existsSync(imgPathSvg)) {
        try {
            let b64 = fs.readFileSync(imgPathSvg, 'base64');
            return `data:image/svg+xml;base64,${b64}`;
        } catch (e) { }
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
                    let t = $(node).text();
                    questionText += t;
                } else {
                    questionText += $(node).text();
                }
            });
        }

        questionText = cleanText(questionText.replace(/^(?:Question|Example)?\s*\d+\.\s*/i, ''));
        questionText = questionText.replace(/\n/g, '<br/>');
        // REQ 4: Question statements should be in regular font weight (NOT bold).
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        let solutionSteps = [];
        let finalAnswers = [];

        $(el).children().each((j, child) => {
            if ($(child).hasClass('question')) return;

            if ($(child).hasClass('sub-question')) {
                if (solutionSteps.length > 0) solutionSteps.push("");
                solutionSteps.push(`<span style="color: #FFAB00; font-weight: normal;">${cleanText($(child).text())}</span>`);
            } else if ($(child).hasClass('section-title') || $(child).hasClass('solution-header')) {
                solutionSteps.push(`<span style="font-weight: 700; color: #2E7D32;">${cleanText($(child).text())}</span>`);
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

parseExercise('exercise1.html', 'exercise1', 'Exercise 8.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 8.2');
parseExercise('exercise3.html', 'exercise3', 'Exercise 8.3');
parseExercise('examples.html', 'examples', 'Examples');

const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const htmlText = fs.readFileSync(mcqPath, 'utf8');
    const $ = cheerio.load(htmlText);

    $('.content-box').each((i, el) => {
        let questionText = $(el).find('.question').text().trim().replace(/^\d+\.\s*/, '');
        questionText = cleanText(questionText);
        questionText = `<span style="font-weight: normal;">${questionText}</span>`;

        const options = [];
        $(el).find('.options .option').each((j, opt) => {
            let optText = $(opt).text().trim();
            optText = cleanText(optText);
            optText = optText.replace(/^\([A-D]\)\s*/, '');
            options.push(optText);
        });

        let correctAnswerText = $(el).find('.correct-answer').text().trim();
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

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh8: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);
