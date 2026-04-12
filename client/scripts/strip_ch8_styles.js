const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/content/math-ch8.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find img tags and remove the style attribute or simplify it
// We'll replace the complex style with a simple one or remove it.
// The complex style: style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 180px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);"
content = content.replace(/<img src=\\"data:image\/png;base64,[^\\"]+\\" style=\\"[^\\"]+\\" \/>/g, (match) => {
    // Keep the src, but remove the style attribute
    return match.replace(/ style=\\"[^\\"]+\\"/, '');
});

fs.writeFileSync(filePath, content);
console.log("Stripped style attributes from img tags in math-ch8.ts");
