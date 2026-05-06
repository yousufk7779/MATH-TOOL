const fs = require('fs');
const path = require('path');
const content = fs.readFileSync('client/data/chapterContent.ts', 'utf8');

const regex = /import { [^}]+ } from "([^"]+)";/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('./')) {
        const fullPath = path.join('client/data', importPath + '.ts');
        if (!fs.existsSync(fullPath)) {
            console.log("File NOT found:", fullPath);
        }
    }
}
