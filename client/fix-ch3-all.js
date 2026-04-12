const fs = require('fs');
const sharp = require('sharp');
const cheerio = require('cheerio');

async function run() {
    const p = 'data/content/math-ch3.ts';
    const tsCode = fs.readFileSync(p, 'utf8');

    const tsPrefix = 'export const mathCh3: ChapterContent = ';
    let jsonStr = tsCode.substring(tsCode.indexOf(tsPrefix) + tsPrefix.length);
    jsonStr = jsonStr.substring(0, jsonStr.lastIndexOf(';') || jsonStr.length).trim();

    // Safety check in case it still has `;`
    if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

    let db;
    try {
        db = JSON.parse(jsonStr);
    } catch (e) {
        console.error("Parse failed");
        fs.writeFileSync('failed.json', jsonStr);
        return;
    }

    // Process string
    async function processHtmlStr(str) {
        if (!str) return str;
        let modified = false;

        let newStr = str;

        // 1. Convert SVG to PNG
        const svgMatch = newStr.match(/data:image\/svg\+xml;base64,([^"]+)/g);
        if (svgMatch) {
            for (const match of svgMatch) {
                const b64 = match.replace('data:image/svg+xml;base64,', '');
                try {
                    const pngBuffer = await sharp(Buffer.from(b64, 'base64')).png().toBuffer();
                    const newB64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
                    newStr = newStr.replace(match, newB64);
                    modified = true;
                } catch (e) {
                    console.error('Sharp error', e);
                }
            }
        }

        // 2. Convert Table to Block
        if (newStr.includes('<table')) {
            const $ = cheerio.load(newStr);
            $('table').each((_, tbl) => {
                let divStr = '<div style="background-color:rgba(255,255,255,0.05); border-radius:8px; border:1px solid rgba(255,255,255,0.2); margin-top:10px; margin-bottom:10px; overflow:hidden;">';
                const trs = $(tbl).find('tr');
                trs.each((rIdx, tr) => {
                    const isLastRow = (rIdx === trs.length - 1);
                    divStr += `<div style="display:flex; flex-direction:row; border-bottom-width:${isLastRow ? 0 : 1}px; border-bottom-color:rgba(255,255,255,0.2); border-bottom-style:solid;">`;
                    const cells = $(tr).find('td,th');
                    cells.each((cIdx, cell) => {
                        const isLastCell = (cIdx === cells.length - 1);
                        const isTh = (cell.tagName.toLowerCase() === 'th');
                        const align = 'center';
                        divStr += `<div style="flex:1; padding:8px; border-right-width:${isLastCell ? 0 : 1}px; border-right-color:rgba(255,255,255,0.2); border-right-style:solid; background-color:${isTh ? 'rgba(255,255,255,0.1)' : 'transparent'};">`;
                        divStr += `<div style="text-align:${align}; font-weight:${isTh ? 'bold' : 'normal'}; color:white; font-size:16px;">${$(cell).text().trim()}</div>`;
                        divStr += `</div>`;
                    });
                    divStr += `</div>`;
                });
                divStr += `</div>`;
                $(tbl).replaceWith(divStr);
                modified = true;
            });
            if (modified) newStr = $('body').html();
        }

        return newStr;
    }

    // Traverse the JSON object and process all strings
    async function traverse(obj) {
        if (!obj) return;
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                if (typeof obj[i] === 'string') {
                    obj[i] = await processHtmlStr(obj[i]);
                } else if (typeof obj[i] === 'object') {
                    await traverse(obj[i]);
                }
            }
        } else if (typeof obj === 'object') {
            for (const key of Object.keys(obj)) {
                if (typeof obj[key] === 'string') {
                    obj[key] = await processHtmlStr(obj[key]);
                } else if (typeof obj[key] === 'object') {
                    await traverse(obj[key]);
                }
            }
        }
    }

    await traverse(db);

    let resTs = `import { ChapterContent } from '../chapterContent';\n\n${tsPrefix}${JSON.stringify(db, null, 4)};\n`;
    fs.writeFileSync(p, resTs);
    console.log("Success fully processed everything!");
}

run().catch(console.error);
