
const fs = require('fs');
const path = require('path');

function cleanText(text) {
    if (text === null || text === undefined) return "";
    return String(text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

const html = fs.readFileSync('client/assets/chapter5/overview.html', 'utf-8');

console.log("HTML length:", html.length);
console.log("Has <h2>:", html.includes('<h2>'));

const definitions = [];
const keyPoints = [];
const formulas = [];
let crux = [];
let introduction = "";

const isFormatB = html.includes('<h2>');

if (isFormatB) {
    const sections = html.split('<h2');
    console.log("Sections count:", sections.length);

    for (let i = 1; i < sections.length; i++) {
        const sectionRaw = sections[i];
        const closingTag = sectionRaw.indexOf('>');
        const title = cleanText(sectionRaw.substring(0, closingTag)).toLowerCase();
        const content = sectionRaw.substring(closingTag + 1);

        console.log(`Section ${i} title: "${title}"`);

        if (title.includes('introduction')) {
            const pts = content.match(/<span class="point">(.*?)<\/span>/gs);
            if (pts) {
                introduction = pts.map(p => cleanText(p)).join(' ');
                console.log("Found intro pts:", pts.length);
            } else {
                console.log("No intro pts found");
            }
        } else if (title.includes('definition')) {
            const lis = content.match(/<li>(.*?)<\/li>/gs);
            if (lis) {
                console.log("Found definition lis:", lis.length);
                lis.forEach(li => {
                    const parts = li.match(/<b>(.*?):<\/b>(.*)/s);
                    if (parts) {
                        definitions.push({ term: cleanText(parts[1]), description: cleanText(parts[2]) });
                    } else {
                        definitions.push({ term: "Term", description: cleanText(li) });
                    }
                });
            }
        } else if (title.includes('key point')) {
            const lis = content.match(/<li>(.*?)<\/li>/gs);
            if (lis) {
                console.log("Found keypoint lis:", lis.length);
                lis.forEach(li => keyPoints.push(cleanText(li)));
            }
        }
    }
}

console.log("Intro:", introduction);
console.log("Defs:", definitions);
