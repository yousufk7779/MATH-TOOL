const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const chapterDir = path.join(__dirname, '../assets/chapters/chapter2');
const outFile = path.join(__dirname, '../data/content/math-ch2.ts');

let result = {
    id: "ch2",
    number: 2,
    title: "Polynomials",
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
        "For a quadratic ax² + bx + c, Sum of zeros = -<sup>b</sup>&frasl;<sub>a</sub>, Product of zeros = <sup>c</sup>&frasl;<sub>a</sub>."
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

// Clean text helper
function cleanText(text) {
    if (!text) return '';
    return text.trim()
        .replace(/^»\s*/, '')
        .replace(/\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        .replace(/\\\(([^\)]+)\/([^\)]+)\\\)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        .replace(/([a-zA-Z0-9\+\-\s]+)\/([a-zA-Z0-9\+\-\s]+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>')
        // General LaTeX math cleaning
        .replace(/\\\\/g, '\\') // Remove double slashes
        .replace(/\n\s*/g, '\n');
}

function extractSolutionSteps(solutionHtml) {
    const $ = cheerio.load(solutionHtml);
    let steps = [];
    $('*').each((i, el) => {
        if ($(el).is('img')) {
            const src = $(el).attr('src');
            steps.push(`<img src="${src}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
        } else if ($(el).text().trim() && !$(el).children('img').length) {
            // Check if it's purely text content
            if ($(el).children().length === 0 || ($(el).children().length === 1 && $(el).children('span').length)) {
                let lines = $(el).text().trim().split('\n');
                lines.forEach(line => {
                    let text = line.trim();
                    if (text) steps.push(cleanText(text));
                });
            }
        }
    });

    if (steps.length === 0) {
        // Fallback: split by BR or newlines
        let text = cheerio.load(solutionHtml).root().text();
        steps = text.split('\n').map(t => cleanText(t)).filter(t => t);
    }

    // Deduplicate steps (naive but effective against cheerio all parsing)
    let finalSteps = [];
    steps.forEach(step => {
        if (!finalSteps.includes(step)) finalSteps.push(step);
    });

    return finalSteps;
}

// Ensure img tags are retained and replaced properly
function parseExercise(fileName, exId, exName) {
    const p = path.join(chapterDir, fileName);
    if (!fs.existsSync(p)) return;

    const html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html);

    let questions = [];
    $('.question-container').each((i, el) => {
        let questionText = '';
        const qEl = $(el).find('.question');
        qEl.contents().each((j, node) => {
            if (node.tagName === 'img') {
                questionText += `<br/><img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" /><br/>`;
            } else if (node.type === 'text') {
                questionText += $(node).text();
            } else {
                questionText += $(node).text();
            }
        });

        questionText = cleanText(questionText.replace(/^Q\d+\.\s*/, ''));

        let solutionSteps = [];
        $(el).find('.solution').contents().each((j, node) => {
            if (node.tagName === 'img') {
                solutionSteps.push(`<img src="${$(node).attr('src')}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`);
            } else {
                let t = $(node).text().trim();
                if (t) {
                    solutionSteps.push(...t.split('\n').map(s => cleanText(s)).filter(s => s));
                }
            }
        });

        // Answer is usually the last logic or we can just pull it generally.
        let answer = '';
        if (solutionSteps.length > 0) {
            let possibleAnswer = solutionSteps[solutionSteps.length - 1];
            if (!possibleAnswer.includes('<img')) {
                answer = possibleAnswer;
            }
        }

        questions.push({
            id: 'q' + (i + 1),
            number: String(i + 1),
            question: questionText,
            solution: solutionSteps,
            answer: answer
        });
    });

    result.exercises.push({
        id: exId,
        name: exName,
        questions: questions
    });
}

// Parse Exercises
parseExercise('exercise1.html', 'exercise1', 'Exercise 2.1');
parseExercise('exercise2.html', 'exercise2', 'Exercise 2.2');
parseExercise('examples.html', 'examples', 'Examples');

// Parse MCQs
const mcqPath = path.join(chapterDir, 'mcqs.html');
if (fs.existsSync(mcqPath)) {
    const $ = cheerio.load(fs.readFileSync(mcqPath, 'utf8'));
    $('.mcq-container').each((i, el) => {
        let question = cleanText($(el).find('.question').text().replace(/^Q\d+\.\s*/, ''));
        const options = [];
        let correctAnswer = '';
        $(el).find('.option').each((j, opt) => {
            const optText = cleanText($(opt).text().replace(/^[a-d]\)\s*/, ''));
            options.push(optText);
            if ($(opt).hasClass('correct')) correctAnswer = optText;
        });
        result.mcqs.push({
            id: 'mcq' + (i + 1),
            question,
            options,
            correctAnswer,
            explanation: ''
        });
    });
}

// Write the file
const fileContent = `import { ChapterContent } from "../chapterContent";

export const mathCh2: ChapterContent = ${JSON.stringify(result, null, 4)};
`;

fs.writeFileSync(outFile, fileContent);
console.log('Saved to', outFile);
