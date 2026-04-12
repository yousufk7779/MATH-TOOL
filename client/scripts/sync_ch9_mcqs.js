const fs = require('fs');
const path = require('path');

const htmlPath = 'D:/All NCERT SOLUTIONS/client/data/math_ch9_html/mcqs.html';
const tsPath = 'D:/All NCERT SOLUTIONS/client/data/content/math-ch9.ts';

if (!fs.existsSync(htmlPath)) {
    console.error("HTML file not found");
    process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');

// 1. CLEAN UP HTML to match Chapter 8 structure
console.log("Normalizing HTML structure...");

// Change div.option to span.option (but only those that are options)
html = html.replace(/<div class="option">([\s\S]*?)<\/div>/g, '<span class="option">$1</span>');

// Change .correct-answer to .final-answer
html = html.replace(/class="correct-answer"/g, 'class="final-answer"');

// Normalize answer text to "Correct Option: (X)" format
html = html.replace(/Answer: \(([A-Da-d])\)/g, 'Correct Option: ($1)');

// Normalize option letters to uppercase
html = html.replace(/<span class="option">\(([a-d])\)/gi, (match, p1) => `<span class="option">(${p1.toUpperCase()})`);
html = html.replace(/Correct Option: \(([a-d])\)/gi, (match, p1) => `Correct Option: (${p1.toUpperCase()})`);

fs.writeFileSync(htmlPath, html, 'utf8');

// 2. EXTRACT DATA for the TS file
console.log("Extracting MCQs for TS file...");
const mcqs = [];
// More robust split by content-box
const boxes = html.split('<div class="content-box">').slice(1);
let count = 1;

boxes.forEach(boxContent => {
    // Take only up to the closing div of the content-box
    const box = boxContent.split(/<\/div>\s*<\/div>/)[0]; // This is tricky if there are nested divs
    // Actually, each content box ends with a </div> that closes it. 
    // But since we split by <div class="content-box">, we just need to find the parts within.
    
    const qMatch = boxContent.match(/<div class="question">([\s\S]*?)<\/div>/);
    const optMatch = [...boxContent.matchAll(/<span class="option">([\s\S]*?)<\/span>/g)];
    const ansMatch = boxContent.match(/<div class="final-answer">([\s\S]*?)<\/div>/);

    if (qMatch && optMatch.length >= 4 && ansMatch) {
        let questionText = qMatch[1].replace(/^\d+\.\s*/, '').trim();
        
        // Clean up math in question
        questionText = questionText.replace(/\\sqrt{([^}]+)}/g, '√$1');
        questionText = questionText.replace(/\\text{([^}]+)}/g, '$1');
        questionText = questionText.replace(/\\circ/g, '°');
        questionText = questionText.replace(/\\theta/g, 'θ');
        
        const options = optMatch.map(m => {
            let optText = m[1].replace(/^\([A-Z]\)\s*/i, '').trim();
            // Clean up math in options
            optText = optText.replace(/\\sqrt{([^}]+)}/g, '√$1');
            optText = optText.replace(/\\frac{([^}]+)}{([^}]+)}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            // Handle simple fractions like 15√3/2
            optText = optText.replace(/(\d+√\d+)\/(\d+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            optText = optText.replace(/(\d+)\/(\d+)/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
            return optText;
        });

        const correctLetterMatch = ansMatch[1].match(/\(([A-D])\)/i);
        const correctLetter = correctLetterMatch ? correctLetterMatch[1].toUpperCase() : "";
        const correctIndex = correctLetter.charCodeAt(0) - 65;
        const correctAnswer = options[correctIndex] || "";

        mcqs.push({
            id: `mcq${count++}`,
            question: `<span style="font-weight: normal;">${questionText}</span>`,
            options: options,
            correctAnswer: correctAnswer
        });
    }
});

// 3. UPDATE TS FILE
console.log(`Extracted ${mcqs.length} MCQs.`);
console.log("Updating TS file...");
let tsContent = fs.readFileSync(tsPath, 'utf8');

const mcqArrayString = JSON.stringify(mcqs, null, '\t\t');
// Replace the entire mcqs array
tsContent = tsContent.replace(/mcqs: \[\s*\{[\s\S]*?\}\s*\]/g, `mcqs: ${mcqArrayString}`);

// If above failed (e.g. empty array), try a simpler replace
if (!tsContent.includes(`mcqs: ${mcqArrayString}`)) {
    tsContent = tsContent.replace(/mcqs: \[[^]*?\]/, `mcqs: ${mcqArrayString}`);
}

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log("Integration complete!");
