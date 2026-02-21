const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const srcDir = path.join(__dirname, '../client/assets/chapters');

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

// Also strip out any <script> tags from all .html files entirely to solve the "long loading times" issue.
function removeScriptsGlobally(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            removeScriptsGlobally(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let oldContent = content;
            // aggressively remove script tags
            content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            if (content !== oldContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Removed script tags from:', fullPath);
            }
        }
    }
}

removeScriptsGlobally(srcDir);

// Now rebuild exercises.html for all chapters
for (let i = 1; i <= 14; i++) {
    const chapterDir = path.join(srcDir, `chapter${i}`);
    if (fs.existsSync(chapterDir)) {
        const color = colors[i.toString()];

        let combinedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
        body { font-family: 'Kalam', cursive; margin: 0; padding: 15px; background: #fff; color: #333; }
        .content-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 20px; }
        .question { font-weight: bold; margin-bottom: 15px; font-size: 1.2em; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
        .step { background: #eef; padding: 10px; border-radius: 8px; border-left: 4px solid ${color}; margin-bottom: 10px; }
        .final-answer { color: #4CAF50; font-weight: bold; margin-top: 10px; }
        .sub-question { color: #FFAB00; font-weight: bold; margin-top: 10px; margin-bottom: 5px;}
        .exercise-title { text-align: center; font-size: 1.5em; border-bottom: 2px solid ${color}; margin-bottom: 20px; font-family: 'Nunito', sans-serif; color: ${color}; }
        img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
    </style>
</head>
<body>
`;
        const files = fs.readdirSync(chapterDir);
        // Sometimes exercise files are named 'exercise1.html', 'exercise.2.html', etc. Match appropriately.
        let exerciseFiles = files.filter(f => f.match(/^exercise\.?\d*\.html$/i) && f !== 'exercises.html');
        // Sort naturally
        exerciseFiles.sort((a, b) => {
            let numA = a.match(/\d+/);
            let numB = b.match(/\d+/);
            numA = numA ? parseInt(numA[0]) : 0;
            numB = numB ? parseInt(numB[0]) : 0;
            return numA - numB;
        });

        const exampleFiles = files.filter(f => f.startsWith('example') && f.endsWith('.html')).sort();

        const allContentFiles = [...exerciseFiles, ...exampleFiles];

        for (const file of allContentFiles) {
            const content = fs.readFileSync(path.join(chapterDir, file), 'utf-8');

            // Extract the body content of these HTML files
            const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
            let htmlToAppend = bodyMatch ? bodyMatch[1] : content;

            // Remove any trailing </div> left over from the previous script deletions
            htmlToAppend = htmlToAppend.replace(/^\s*(?:<\/div>\s*)*/g, '');

            let displayTitle = '';
            if (file.toLowerCase().includes('example')) {
                displayTitle = `Examples`;
            } else {
                let numMatch = file.match(/\d+/);
                let exNum = numMatch ? numMatch[0] : '1';
                displayTitle = `Exercise ${i}.${exNum}`;
            }

            combinedHtml += `<div class="exercise-title">${displayTitle}</div>\n` + htmlToAppend + `<hr/>\n`;
        }

        combinedHtml += `</body>\n</html>`;

        // Remove ANY lingering mathjax scripts or scripts at all from the generated exercises.html just in case
        combinedHtml = combinedHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

        fs.writeFileSync(path.join(chapterDir, `exercises.html`), combinedHtml);
        console.log(`Generated exercises.html for chapter${i}`);
    }
}
