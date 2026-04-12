const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    console.log(`Fixing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix specific cases in math-ch3.ts
    content = content.replace('answered, "The number of skirts', 'answered, \\"The number of skirts');
    content = content.replace('number of pants purchased". Help her', 'number of pants purchased\\". Help her');
    content = content.replace('daughter, "Seven years ago', 'daughter, \\"Seven years ago');
    content = content.replace('as you will be." (Isn\\'t', ' as you will be.\\" (Isn\\'t');

    // Fix typical unescaped attribute quotes inside HTML strings
    content = content.replace(/(?<!\\\\)class="([^"]+)(?<!\\\\)"/g, 'class=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)style="([^"]+)(?<!\\\\)"/g, 'style=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)src="([^"]+)(?<!\\\\)"/g, 'src=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)width="([^"]+)(?<!\\\\)"/g, 'width=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)height="([^"]+)(?<!\\\\)"/g, 'height=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)colspan="([^"]+)(?<!\\\\)"/g, 'colspan=\\\\"$1\\\\"');
    content = content.replace(/(?<!\\\\)rowspan="([^"]+)(?<!\\\\)"/g, 'rowspan=\\\\"$1\\\\"');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Done fixing ${filePath}`);
}

const ch3Path = path.join(__dirname, '..', 'data', 'content', 'math-ch3.ts');
const ch7Path = path.join(__dirname, '..', 'data', 'content', 'math-ch7.ts');

fixFile(ch3Path);
fixFile(ch7Path);
