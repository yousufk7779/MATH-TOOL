const fs = require('fs');
const tsPath = 'client/data/content/c9-sci-chem-1.ts';
const imagePath = 'C:/Users/hp/.gemini/antigravity/brain/51c3a93b-e2d0-423c-86d0-6f44d0e4c30a/media__1777199806160.png';

const buffer = fs.readFileSync(imagePath);
const b64 = 'data:image/png;base64,' + buffer.toString('base64');

let content = fs.readFileSync(tsPath, 'utf8');

// Find the start of the object for question 9
const q9Id = 'id: "c9-sci-chem-1-ex-q9"';
const startIdx = content.indexOf(q9Id);

if (startIdx === -1) {
    console.error('Could not find question 9 ID');
    process.exit(1);
}

// Find the question property after this ID
const questionProp = 'question: "';
const questionStartIdx = content.indexOf(questionProp, startIdx);

if (questionStartIdx === -1) {
    console.error('Could not find question property');
    process.exit(1);
}

const valueStartIdx = questionStartIdx + questionProp.length;

// Find the end of the question string (look for the next quote that isn't escaped)
// Actually, since I know the structure, I can look for \", and then the closing "
// But the content might be corrupted with null bytes.

// Let's just find the next " followed by a comma or newline, skipping escaped quotes
let valueEndIdx = -1;
for (let i = valueStartIdx; i < content.length; i++) {
    if (content[i] === '"' && content[i-1] !== '\\') {
        valueEndIdx = i;
        break;
    }
}

if (valueEndIdx === -1) {
    console.error('Could not find end of question value');
    process.exit(1);
}

const newQuestionValue = `<div style='text-align: justify;'>Name A, B, C, D, E and F in the diagram showing change of state.<br/><br/><img src=\\"${b64}\\" width='100%' style='display: block; margin: 10px auto; border: 1px solid #ddd; border-radius: 8px;' /></div>`;

const newContent = content.substring(0, valueStartIdx) + newQuestionValue + content.substring(valueEndIdx);

fs.writeFileSync(tsPath, newContent);
console.log('Successfully updated question 9 with clean base64 image');
