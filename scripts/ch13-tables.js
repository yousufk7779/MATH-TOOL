const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../client/assets/chapters/chapter13');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'mcqs.html' && f !== 'overview.html' && f !== 'exercises.html');

for (const file of files) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    let updated = false;

    // We look for <img src="data:image/svg+xml;base64,..."> right after a question
    const regex = /(<img [^>]*src="data:image\/svg\+xml;base64,([^"]+)"[^>]*>)/g;

    content = content.replace(regex, (match, fullImg, base64) => {
        try {
            const xml = Buffer.from(base64, 'base64').toString('utf8');
            const textRegex = /<text x="([\d.]+)" y="([\d.]+)"[^>]*>([^<]+)<\/text>/g;
            let texts = [];
            let tMatch;
            while ((tMatch = textRegex.exec(xml)) !== null) {
                texts.push({
                    x: parseFloat(tMatch[1]),
                    y: parseFloat(tMatch[2]),
                    val: tMatch[3]
                });
            }

            // Assuming title is at the very bottom (y >= 270)
            const titleNode = texts.find(t => t.y >= 270);
            const title = titleNode ? titleNode.val : 'Data Table';
            texts = texts.filter(t => t.y < 270);

            if (texts.length === 0) return fullImg; // Could be a different type of image

            // Group by X
            const groups = {};
            for (const t of texts) {
                if (!groups[t.x]) groups[t.x] = [];
                groups[t.x].push(t);
            }

            const columns = [];
            for (const x in groups) {
                const group = groups[x];
                if (group.length === 2) {
                    // Sort by y to get top (value) and bottom (category)
                    group.sort((a, b) => a.y - b.y);
                    columns.push({
                        x: parseFloat(x),
                        value: group[0].val,
                        category: group[1].val
                    });
                }
            }

            if (columns.length === 0) return fullImg;

            columns.sort((a, b) => a.x - b.x);

            let tableHTML = `<div class="step" style="text-align: center; font-weight: bold; margin-top: 10px;">${title}</div>\n`;
            tableHTML += `<table style="width:100%; max-width: 600px; margin: 15px auto; border-collapse: collapse; text-align: center; font-size: 0.9em; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">\n`;
            tableHTML += `  <tr>\n`;
            tableHTML += `    <th style="background-color: #e8f5e9; color: #2E7D32; font-weight: 700; padding: 8px; border: 1px solid #ddd;">Class / Category</th>\n`;
            for (const col of columns) {
                tableHTML += `    <th style="padding: 8px; border: 1px solid #ddd; background-color: #f1f8e9;">${col.category}</th>\n`;
            }
            tableHTML += `  </tr>\n`;
            tableHTML += `  <tr>\n`;
            tableHTML += `    <th style="background-color: #e8f5e9; color: #2E7D32; font-weight: 700; padding: 8px; border: 1px solid #ddd;">Frequency / Value</th>\n`;
            for (const col of columns) {
                tableHTML += `    <td style="padding: 8px; border: 1px solid #ddd;">${col.value}</td>\n`;
            }
            tableHTML += `  </tr>\n`;
            tableHTML += `</table>`;

            updated = true;
            return tableHTML;

        } catch (e) {
            console.error("Error parsing SVG in " + file, e);
            return fullImg;
        }
    });

    if (updated) {
        fs.writeFileSync(p, content, 'utf8');
        console.log("Updated tables in " + file);
    }
}
