const fs = require('fs');
const file = 'd:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

const htmlMcqsMatch = content.match(/htmlMcqs:\s*\`([\s\S]*?)\`/);
if (!htmlMcqsMatch) {
    console.log('No htmlMcqs found');
    process.exit(1);
}
let html = htmlMcqsMatch[1];

let mcqs = [];
const boxRegex = /<div class=\"content-box\">([\s\S]*?)<\/div>\s*(?:<\/div>|<!-- MCQ)/g;
let match;
let idCounter = 1;

// Because regex with [\s\S]*? up to </div> </div> is tricky if nested,
// I'll just split by '<div class="question">' 
const questionsRaw = html.split('<div class="question">').slice(1);

for (let qRaw of questionsRaw) {
    // extract question text
    const qEndIdx = qRaw.indexOf('</div>');
    let questionText = qRaw.substring(0, qEndIdx).trim();
    // remove the "1. " part
    questionText = questionText.replace(/^\d+\.\s*/, '');
    questionText = '<span style=\"font-weight: normal;\">' + questionText + '</span>';

    // extract options
    const optRegex = /<span class=\"option\">\([A-D]\)\s*([\s\S]*?)<\/span>/g;
    let optMatch;
    let options = [];
    while ((optMatch = optRegex.exec(qRaw)) !== null) {
        options.push(optMatch[1].trim());
    }

    // extract answer
    const ansRegex = /Correct Option:\s*\(([A-D])\)/;
    const ansMatch = ansRegex.exec(qRaw);
    let correctAnswer = '';
    if (ansMatch) {
        const letter = ansMatch[1];
        const idx = letter.charCodeAt(0) - 65;
        correctAnswer = options[idx];
    }

    mcqs.push({
        id: 'mcq' + idCounter++,
        question: questionText,
        options: options,
        correctAnswer: correctAnswer
    });
}

const mcqsJsonStr = JSON.stringify(mcqs, null, 8).replace(/"/g, '\"');

// Now, replace mcqs: [], with mcqs: [\n ... \n],
content = content.replace(/mcqs:\s*\[\s*\],/, 'mcqs: ' + mcqsJsonStr + ',');

// And remove htmlMcqs key entirely.
content = content.replace(/,\s*htmlMcqs:\s*\`[\s\S]*?\`/, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated math-ch8.ts with extracted MCQs!');
