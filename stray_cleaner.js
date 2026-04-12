const fs = require('fs');

function cleanFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    let lines = content.split('\n');
    let newLines = lines.filter(line => {
        let t = line.trim();
        // Remove lines that are just stray commas or broken string fragments
        if (t === '",' || t === '", ,' || t === ',' || t === '", ",' || t === '", "') {
            return false;
        }
        return true;
    });

    let result = newLines.join('\n');

    // Also fix the [Image Removed] pattern which might have lost its closing quote or comma
    result = result.replace(/\[Image Removed\](\s*[^",\s])/g, '[Image Removed]",$1');

    fs.writeFileSync(path, result, 'utf8');
    console.log(`Cleaned ${path}`);
}

cleanFile('client/data/content/math-ch3.ts');
