const fs = require('fs');
const content = fs.readFileSync('client/data/chapterContent.ts', 'utf8');

// Simple regex to find keys in the chapterContents object
const regex = /"([^"]+)":/g;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
}

const seen = new Set();
const duplicates = [];
for (const key of keys) {
    if (seen.has(key)) {
        duplicates.push(key);
    }
    seen.add(key);
}

if (duplicates.length > 0) {
    console.log("Duplicate keys found in chapterContents:", duplicates);
} else {
    console.log("No duplicate keys found in chapterContents.");
}
