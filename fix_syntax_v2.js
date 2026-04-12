const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Fix "[Image Removed], -> "[Image Removed]",
    content = content.replace(/\"\[Image Removed\],/g, '"[Image Removed]",');

    // 2. Fix the specific corrupted token "[/>", or [/>",
    content = content.replace(/\[\/>\",/g, '["[Image Removed]"],');

    // 3. Remove lines that are just "," or "," with whitespace
    let lines = content.split('\n');
    let newLines = [];
    for (let i = 0; i < lines.length; i++) {
        let trimmed = lines[i].trim();
        // Skip lines that are just a stray comma or a stray closing/opening quote block that looks like a repair artifact
        if (trimmed === '",' || trimmed === ',' || trimmed === '", ,') {
            continue;
        }
        newLines.push(lines[i]);
    }
    content = newLines.join('\n');

    // 4. Try to fix jammed strings that are missing commas or have extra ones
    // Actually, let's just use a regex to ensure comma-separated strings in arrays are clean.
    // However, the jammed strings on line 45 actually HAVE commas: `"A", "B", "C"`
    // They are just on one line. Prettier will fix that.

    // 5. One more specific fix for the common corruption pattern I see in my logs
    content = content.replace(/\[Image Removed\],/g, '"[Image Removed]",'); // just in case

    // Fix missing closing quote for [Image Removed] if it's followed by a newline or comma
    content = content.replace(/\"\[Image Removed\]\s*[,]/g, '"[Image Removed]",');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
}

fixFile('client/data/content/math-ch3.ts');
// Also check others
// fixFile('client/data/content/math-ch2.ts');
// fixFile('client/data/content/math-ch6.ts');
// fixFile('client/data/content/math-ch7.ts');
