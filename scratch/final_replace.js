const fs = require('fs');
const imagePath = 'C:/Users/hp/.gemini/antigravity/brain/51c3a93b-e2d0-423c-86d0-6f44d0e4c30a/media__1777199806160.png';
const tsPath = 'client/data/content/c9-sci-chem-1.ts';

const buffer = fs.readFileSync(imagePath);
const b64 = 'data:image/png;base64,' + buffer.toString('base64');

let content = fs.readFileSync(tsPath, 'utf8');

// Match the escaped src attribute more broadly to be sure
const targetRegex = /src=\\"https:\/\/cdn\.teachoo\.com\/66b9767f-8647-4ca4-b378-d42f0b15e196\/name-a,b,c,d,e-and-f-in-the-following-diagram-showing-change-in-its-state-teachoo\.jpg\\"/;
const targetRegexB64 = /src=\\".*d a t a : i m a g e \/ p n g ; b a s e 6 4 ,.*\\"/; // Fallback if it already has weird data

if (targetRegex.test(content)) {
    content = content.replace(targetRegex, `src=\\"${b64}\\"`);
    fs.writeFileSync(tsPath, content);
    console.log('Successfully replaced image src');
} else if (targetRegexB64.test(content)) {
    content = content.replace(targetRegexB64, `src=\\"${b64}\\"`);
    fs.writeFileSync(tsPath, content);
    console.log('Successfully fixed/replaced image src');
} else {
    // If it has the broken data from previous attempt
    const brokenStart = 'src=\\"d a t a : i m a g e / p n g ; b a s e 6 4 ,';
    if (content.includes(brokenStart)) {
         // This is harder to match with string includes if there are null bytes etc.
         // Let's try to find the start and the end of the src attribute
         const startIdx = content.indexOf('id: "c9-sci-chem-1-ex-q9"');
         if (startIdx !== -1) {
             const srcStartIdx = content.indexOf('src=\\"', startIdx) + 6;
             const srcEndIdx = content.indexOf('\\"', srcStartIdx);
             const newContent = content.substring(0, srcStartIdx) + b64 + content.substring(srcEndIdx);
             fs.writeFileSync(tsPath, newContent);
             console.log('Successfully replaced by index');
         } else {
             console.log('Could not find question ID');
         }
    } else {
        console.log('Target not found in content');
    }
}
