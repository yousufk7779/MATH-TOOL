
const fs = require('fs');
const path = require('path');

// Configuration: Target formatting
const ADD_IDS = true;
const WRAP_SUB_QUESTIONS = true;

// Helper to count balance change in a line
const divOpenRegex = /<div/gi;
const divCloseRegex = /<\/div>/gi;
function getBalance(line) {
    let open = (line.match(divOpenRegex) || []).length;
    let close = (line.match(divCloseRegex) || []).length;
    return open - close;
}

function normalizeFile(filePath, chapterId, exerciseId) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let output = [];

    let depth = 0;
    let inContentBox = false;
    let contentBoxStartDepth = 0;

    let inSubQuestion = false;
    let subQuestionStartDepth = 0;

    let qCounter = 0;
    let subQCounter = 0;

    let currentMainLabel = "";

    try {
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let trimmed = line.trim();
            let balance = getBalance(line);

            // 1. Check for content-box start
            if (trimmed.includes('class="content-box"')) {
                inContentBox = true;
                contentBoxStartDepth = depth;
                qCounter++;
                subQCounter = 0;
                currentMainLabel = "" + qCounter;

                const qId = `${chapterId}_${exerciseId}_q${qCounter}`;
                // Only add ID if not present
                if (!line.includes('id=')) {
                    line = line.replace('class="content-box"', `class="content-box" id="${qId}" data-type="main"`);
                }
            }

            // 2. Extract Label from Question
            if (inContentBox && trimmed.includes('class="question"')) {
                const match = line.match(/>\s*([0-9]+\(?\w*\)?\.?)/);
                if (match) {
                    currentMainLabel = match[1].replace('.', '');
                }
            }

            // 3. Check for sub-question start
            if (inContentBox && trimmed.includes('class="sub-question"')) {
                if (inSubQuestion) {
                    output.push('</div>');
                }

                subQCounter++;
                inSubQuestion = true;

                let subLabel = "";
                const match = line.match(/>\s*(\(?\w+\)?)/);
                if (match) subLabel = match[1];

                const fullLabel = currentMainLabel + subLabel;
                const subId = `${chapterId}_${exerciseId}_q${qCounter}_${subQCounter}`;

                output.push(`<div class="question-block" id="${subId}" data-label="${fullLabel}">`);
            }

            // 4. Check for Closing Content Box
            if (inContentBox && (depth + balance) <= contentBoxStartDepth) {
                if (inSubQuestion) {
                    output.push('</div>');
                    inSubQuestion = false;
                }
                inContentBox = false;
            }

            output.push(line);
            depth += balance;
        }

        fs.writeFileSync(filePath, output.join('\n'));
        console.log(`Processed ${filePath}`);

    } catch (e) {
        console.error(`Error processing ${filePath}:`, e);
    }
}

function processAll() {
    const assetsDir = 'd:\\MATH-TOOL-new\\client\\assets';
    if (!fs.existsSync(assetsDir)) {
        console.error("Assets dir not found");
        return;
    }

    const chapters = fs.readdirSync(assetsDir).filter(f => f.startsWith('chapter') && fs.lstatSync(path.join(assetsDir, f)).isDirectory());

    chapters.forEach(chDir => {
        const chNum = chDir.replace('chapter', '');
        const chId = `ch${chNum}`;
        const fullDirPath = path.join(assetsDir, chDir);

        const files = fs.readdirSync(fullDirPath).filter(f => f.endsWith('.html'));

        files.forEach(file => {
            let exId = null;
            if (file.startsWith('exercise')) {
                const num = file.replace('exercise', '').replace('.html', '');
                exId = `ex${chNum}.${num}`;
            } else if (file === 'mcqs.html') {
                exId = 'mcqs';
            } else if (file === 'examples.html') {
                exId = 'eg';
            } else if (file === 'theorems.html') {
                exId = 'theorems';
            }

            // Skip overview for block wrapping
            if (file !== 'overview.html' && exId) {
                normalizeFile(path.join(fullDirPath, file), chId, exId);
            }
        });
    });
}

processAll();
