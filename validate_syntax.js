const fs = require('fs');

const fileContent = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/sci-chem-1.ts', 'utf-8');

let jsContent = fileContent
    .replace(/import {.*?}.*?;/g, '// import removed')
    .replace('export const sciChem1: ChapterContent =', 'var sciChem1 =')
    .replace(/};$/, '}');

try {
    new Function(jsContent)();
    console.log("Syntax is valid!");
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log("Syntax Error: " + e.message);
        // Node's SyntaxError in Function constructor doesn't give line numbers easily
        // Let's try to parse it line by line
        let currentString = "";
        const lines = jsContent.split('\n');
        for (let i = 0; i < lines.length; i++) {
            currentString += lines[i] + "\n";
            try {
                new Function(currentString + "}");
            } catch (innerE) {
                // If adding the next line + a closing brace causes an error, 
                // it might be this line or previous ones.
                // This is a crude way to find it.
            }
        }
    } else {
        console.error(e);
    }
}
