const fs = require('fs');
const path = require('path');

const targetDir = 'd:/All NCERT SOLUTIONS/client';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(targetDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace React Native styles
    content = content.replace(/fontFamily: ["']Kalam_[467]00(Regular|SemiBold|Bold)["']/g, 'fontFamily: "NotoSans_$1"');
    content = content.replace(/fontFamily: ["']Inter_[467]00(Regular|SemiBold|Bold)["']/g, 'fontFamily: "NotoSans_$1"');
    
    // Explicit string replaces for fonts
    content = content.replace(/NotoSans_400Regular/g, 'NotoSans_400Regular');
    content = content.replace(/NotoSans_700Bold/g, 'NotoSans_700Bold');
    content = content.replace(/NotoSans_400Regular/g, 'NotoSans_400Regular');
    content = content.replace(/NotoSans_700Bold/g, 'NotoSans_700Bold');
    
    // Replace HTML/CSS styles
    content = content.replace(/font-family: ["']Kalam["'], cursive/g, "font-family: 'Noto Sans', sans-serif");
    content = content.replace(/font-family: ["']Kalam["']/g, "font-family: 'Noto Sans', sans-serif");
    content = content.replace(/'Noto Sans', sans-serif/g, "'Noto Sans', sans-serif");
    
    if (content !== original) {
        console.log(`Updated ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
