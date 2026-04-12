const fs = require('fs');
const path = require('path');

const chapters = ['ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14'];

chapters.forEach(ch => {
    const file = path.join(__dirname, '..', 'data', 'content', `math-${ch}.ts`);
    if (!fs.existsSync(file)) {
        console.log(`File not found: ${file}`);
        return;
    }
    let content = fs.readFileSync(file, 'utf8');

    const htmlMcqsMatch = content.match(/htmlMcqs:\s*\`([\s\S]*?)\`/);
    if (!htmlMcqsMatch) {
        console.log(`No htmlMcqs found in ${ch}`);
        return;
    }
    let html = htmlMcqsMatch[1];

    let mcqs = [];
    let idCounter = 1;

    const questionsRaw = html.split('<div class="question">').slice(1);

    for (let qRaw of questionsRaw) {
        const qEndIdx = qRaw.indexOf('</div>');
        let questionText = qRaw.substring(0, qEndIdx).trim();
        questionText = questionText.replace(/^\d+\.\s*/, '');
        // Clean up any stray \r\n or extra spaces
        questionText = questionText.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
        questionText = '<span style="font-weight: normal;">' + questionText + '</span>';

        const optRegex = /<span class="option">\([A-D]\)\s*([\s\S]*?)<\/span>/g;
        let optMatch;
        let options = [];
        while ((optMatch = optRegex.exec(qRaw)) !== null) {
            let optText = optMatch[1].trim().replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
            options.push(optText);
        }

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

    const mcqsJsonStr = JSON.stringify(mcqs, null, 8);

    // Replace mcqs: [], or mcqs: [ ... ],
    content = content.replace(/mcqs:\s*\[[\s\S]*?\],/, 'mcqs: ' + mcqsJsonStr + ',');

    // Remove htmlMcqs key
    content = content.replace(/,\s*htmlMcqs:\s*\`[\s\S]*?\`/, '');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Successfully updated math-${ch}.ts with extracted MCQs!`);
});

console.log('All targeted chapters updated.');
