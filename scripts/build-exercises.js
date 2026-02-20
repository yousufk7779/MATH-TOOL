const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../client/assets/chapters');

for (let i = 1; i <= 14; i++) {
    const chapterDir = path.join(srcDir, `chapter${i}`);
    if (fs.existsSync(chapterDir)) {
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
        .step { background: #eef; padding: 10px; border-radius: 8px; border-left: 4px solid #6C63FF; margin-bottom: 10px; }
        .final-answer { color: #4CAF50; font-weight: bold; margin-top: 10px; }
        .sub-question { color: #FFAB00; font-weight: bold; margin-top: 10px; margin-bottom: 5px;}
        img { max-width: 100%; border-radius: 8px; }
        .exercise-title { text-align: center; font-size: 1.5em; border-bottom: 2px solid #6C63FF; margin-bottom: 20px; font-family: 'Nunito', sans-serif;}
    </style>
</head>
<body>
`;
        const files = fs.readdirSync(chapterDir);
        const exerciseFiles = files.filter(f => f.startsWith('exercise') && f !== 'exercises.html').sort();
        const exampleFiles = files.filter(f => f.startsWith('example') && f.endsWith('.html')).sort();

        const allContentFiles = [...exerciseFiles, ...exampleFiles];

        for (const file of allContentFiles) {
            const content = fs.readFileSync(path.join(chapterDir, file), 'utf-8');
            // Extract the body content of these HTML files
            const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

            let htmlToAppend = bodyMatch ? bodyMatch[1] : content;

            // Remove the Jiguu logo headers from the sub-files so they don't repeat
            htmlToAppend = htmlToAppend.replace(/<div class="header">([\s\S]*?)<\/div>/ig, '');

            combinedHtml += `<div class="exercise-title">${file.replace('.html', '').toUpperCase()}</div>\n` + htmlToAppend + `<hr/>\n`;
        }

        combinedHtml += `</body>\n</html>`;
        fs.writeFileSync(path.join(chapterDir, `exercises.html`), combinedHtml);
        console.log(`Generated exercises.html for chapter${i}`);
    }
}
