const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data/content');
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const fPath = path.join(dirPath, file);
    let original = fs.readFileSync(fPath, 'utf8');

    // ONLY remove mathematically invalid stray backslashes created by markdown/latex stripping.
    // e.g. \cos, \theta, \1, \=, \^
    // We match `\\` followed by a character (except n, r, t, ", ', \, and digits? No, \1 is invalid octal. D is digit.
    // Actually, `n`, `r`, `t`, `"`, `'`, `\`, `/` are valid escapes.
    let content = original.replace(/\\\\([^nrt"'\\\/])/g, '$1');

    if (original !== content) {
        fs.writeFileSync(fPath, content, 'utf8');
        console.log(`Cleaned valid stray backslashes in: ${file}`);
    }
});
