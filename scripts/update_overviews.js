const fs = require('fs');
const cheerio = require('cheerio');

const colors = {
    "1": "#2962FF",
    "2": "#00C853",
    "3": "#FFAB00",
    "4": "#AA00FF",
    "5": "#00B8D4",
    "6": "#C6FF00",
    "7": "#6200EA",
    "8": "#FF6D00",
    "9": "#0091EA",
    "10": "#FFD600",
    "11": "#304FFE",
    "12": "#00BFA5",
    "13": "#E040FB",
    "14": "#64DD17"
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

for (let i = 1; i <= 14; i++) {
    const filePath = `d:/MATH-T-new/client/assets/chapters/chapter${i}/overview.html`;
    if (!fs.existsSync(filePath)) continue;

    let html = fs.readFileSync(filePath, 'utf8');
    const color = colors[i.toString()];
    const rgb = hexToRgb(color);

    // Replace hex colors
    html = html.replace(/#6C63FF/gi, color);

    // Replace rgb background variations
    html = html.replace(/rgba\(\s*108\s*,\s*99\s*,\s*255/g, `rgba(${rgb}`);

    // Load into cheerio
    const $ = cheerio.load(html, { decodeEntities: false });

    let modifiedPoints = false;
    $('.content-text').each((idx, el) => {
        const internalHtml = $(el).html();

        let cleanHtml = internalHtml.replace(/<span class="highlight-text">»<\/span>\s*/, '').trim();

        // Split text by period-space-capital, keeping the period intact.
        let sentences = cleanHtml.split(/(?<=\.)\s+(?=[A-Z])/g);

        // If we found more than one sentence, rewrite it into multiple bullet points
        if (sentences.length > 1) {
            let newHtml = '';
            for (let j = 0; j < sentences.length; j++) {
                let s = sentences[j].trim();
                newHtml += `<div class="content-text"><span class="highlight-text">»</span> ${s}</div>\n`;
            }
            $(el).replaceWith(newHtml);
            modifiedPoints = true;
        }
    });

    fs.writeFileSync(filePath, $.html(), 'utf8');
    console.log(`Updated Chapter ${i} overview (colors: yes, points split: ${modifiedPoints})`);
}
