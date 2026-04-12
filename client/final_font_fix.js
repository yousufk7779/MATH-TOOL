const fs = require('fs');
const path = require('path');

const targetDir = 'd:/All NCERT SOLUTIONS/client';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        if (file === 'node_modules') return;
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.html')) {
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
    
    // Correct NotoSans shorthand names
    content = content.replace(/NotoSans_700Bold/g, 'NotoSans_700Bold');
    content = content.replace(/NotoSans_600SemiBold/g, 'NotoSans_600SemiBold');
    content = content.replace(/NotoSans_400Regular/g, 'NotoSans_400Regular');
    
    // Fix broken imports that might point to wrong packages
    content = content.replace(/from ["']@expo-google-fonts\/(kalam|inter)["']/g, 'from "@expo-google-fonts/noto-sans"');
    
    if (content !== original) {
        console.log(`Updated ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
