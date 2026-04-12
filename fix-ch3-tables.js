const fs = require('fs');
const cheerio = require('cheerio');
const p = 'client/data/content/math-ch3.ts';
let content = fs.readFileSync(p, 'utf8');

const prefix = 'export const mathCh3: ChapterContent = ';
const startIdx = content.indexOf(prefix) + prefix.length;
const endIdx = content.lastIndexOf('}') + 1;
const tsPrefix = content.substring(0, startIdx);
let jsonStr = content.substring(startIdx, endIdx);

let chapterData;
try {
    chapterData = JSON.parse(jsonStr);
} catch (e) {
    console.log("JSON PARSE FAILED");
    console.log(jsonStr.substring(0, 50));
    console.log(jsonStr.substring(jsonStr.length - 50));
    process.exit(1);
}

function processTables(htmlArray) {
    if (!htmlArray || !Array.isArray(htmlArray)) return htmlArray;
    return htmlArray.map(step => {
        if (typeof step === 'string' && step.includes('<table')) {
            const $ = cheerio.load(step);
            const tables = $('table');
            if (tables.length === 0) return step;

            tables.each((_, table) => {
                const trs = $(table).find('tr');
                let newHtml = '<div style="background-color: rgba(255,255,255,0.05); border-radius: 8px; border-width: 1px; border-style: solid; border-color: rgba(255,255,255,0.1); margin-top: 10px; margin-bottom: 10px; overflow: hidden;">';
                trs.each((rIdx, tr) => {
                    const isLastRow = rIdx === trs.length - 1;
                    newHtml += `<div style="display: flex; flex-direction: row; border-bottom-width: ${isLastRow ? 0 : 1}px; border-bottom-color: rgba(255,255,255,0.1); border-style: solid;">`;
                    const cells = $(tr).find('td, th');
                    cells.each((cIdx, cell) => {
                        const isLastCell = cIdx === cells.length - 1;
                        const isTh = cell.tagName.toLowerCase() === 'th';
                        const text = $(cell).text().trim();
                        newHtml += `<div style="flex: 1; padding: 8px; border-right-width: ${isLastCell ? 0 : 1}px; border-right-color: rgba(255,255,255,0.1); border-style: solid; justify-content: center; align-items: center;${isTh ? ' background-color: rgba(255,255,255,0.08);' : ''}">`;
                        newHtml += `<span style="color: white; font-size: 16px; text-align: center;${isTh ? ' font-weight: bold;' : ''}">${text}</span>`;
                        newHtml += `</div>`;
                    });
                    newHtml += `</div>`;
                });
                newHtml += '</div>';
                $(table).replaceWith(newHtml);
            });
            $('div.table-container').each((_, tc) => { $(tc).replaceWith($(tc).html()); });
            return $('body').html() || step;
        }
        return step;
    });
}

function traverse(obj) {
    if (obj.examples) obj.examples.forEach(ex => { ex.solution = processTables(ex.solution); });
    if (obj.exercises) obj.exercises.forEach(ex => {
        if (ex.questions) ex.questions.forEach(q => { q.solution = processTables(q.solution); });
    });
}

traverse(chapterData);
const newContent = `${tsPrefix}${JSON.stringify(chapterData, null, 4)};\n`;
fs.writeFileSync(p, newContent);
console.log('Tables fixed!');
