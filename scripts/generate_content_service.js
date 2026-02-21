const fs = require('fs');
const path = require('path');

const dir = 'd:/MATH-T-new/client/assets/chapters';
const chapters = fs.readdirSync(dir).filter(f => /^chapter\d+$/.test(f));
chapters.sort((a, b) => parseInt(a.replace('chapter', '')) - parseInt(b.replace('chapter', '')));

let code = `import { Asset } from 'expo-asset';\n\nconst chapterAssets: Record<string, any> = {\n`;

for (const ch of chapters) {
    const chDir = path.join(dir, ch);
    const files = fs.readdirSync(chDir).filter(f => f.endsWith('.html'));

    const chNum = ch.replace('chapter', '');
    code += `    ch${chNum}: {\n`;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const key = file.replace('.html', '');
        code += `        ${key}: require('@/assets/chapters/chapter${chNum}/${file}')`;
        if (i < files.length - 1) code += ',';
        code += '\n';
    }
    code += `    },\n`;
}

code += `};\n\n`;

code += `export const ContentService = {
    getSectionUri(chapterId: string, section: string): string | null {
        // We map 'mcq' to 'mcqs'
        const sectionKey = section === 'mcq' ? 'mcqs' : section;

        try {
            const assetModule = chapterAssets[chapterId]?.[sectionKey];
            if (assetModule) {
                return Asset.fromModule(assetModule).uri;
            }
        } catch (e) {
            console.warn(\`Could not load asset mapping for \${chapterId} - \${section}\`);
        }
        return null;
    },
    
    getAvailableSections(chapterId: string): string[] {
        return Object.keys(chapterAssets[chapterId] || {});
    }
};\n`;

fs.writeFileSync('d:/MATH-T-new/client/services/ContentService.ts', code);
console.log('Done');
