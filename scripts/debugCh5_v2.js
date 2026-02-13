
const fs = require('fs');

function cleanText(text) {
    if (text === null || text === undefined) return "";
    return String(text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

const html = fs.readFileSync('client/assets/chapter5/overview.html', 'utf-8');

const definitions = [];
const keyPoints = [];
let introduction = "";

const sections = html.split('<h2');
console.log("Sections found:", sections.length);

for (let i = 1; i < sections.length; i++) {
    const sectionRaw = sections[i];
    const endOfOpeningTag = sectionRaw.indexOf('>');
    const endOfTitle = sectionRaw.indexOf('</h2>');

    if (endOfOpeningTag === -1 || endOfTitle === -1) {
        console.log(`Section ${i}: Malformed H2`);
        continue;
    }

    const title = cleanText(sectionRaw.substring(endOfOpeningTag + 1, endOfTitle)).toLowerCase();
    const content = sectionRaw.substring(endOfTitle + 5);

    console.log(`Section ${i} Title: '${title}'`);

    if (title.includes('introduction')) {
        console.log("Parsing Introduction...");
        // Debug content dump (first 100 chars)
        console.log("Content start:", content.substring(0, 100).replace(/\n/g, ' '));

        const pts = content.match(/<span class="point">(.*?)<\/span>/gs);
        console.log("Points found:", pts ? pts.length : 0);
        if (pts) introduction = pts.map(p => cleanText(p)).join(' ');
    } else if (title.includes('definitions')) {
        console.log("Parsing Definitions...");
        const lis = content.match(/<li>(.*?)<\/li>/gs);
        console.log("LIs found:", lis ? lis.length : 0);
        // ...
    }
}
