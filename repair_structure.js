const fs = require('fs');

function repair(path) {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Split jammed strings/elements
    // Pattern like `",                "` should be `",\n                "`
    content = content.replace(/\",\s+\"/g, '",\n                "');
    content = content.replace(/}\s+{/g, '},\n        {');
    content = content.replace(/}\s+\]/g, '}\n    ]');
    content = content.replace(/\]\s+}/g, ']\n}');

    // 2. Fix specific corruption from previous runs
    // Remove standalone `",` lines that aren't properly part of an array
    let lines = content.split('\n');
    let output = [];
    for (let line of lines) {
        let t = line.trim();
        if (t === '",' || t === ',') continue;
        if (t === '""' || t === '"",' || t === '", ""') continue;
        output.push(line);
    }

    fs.writeFileSync(path, output.join('\n'), 'utf8');
    console.log(`Repaired ${path}`);
}

repair('client/data/content/math-ch3.ts');
