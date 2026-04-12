const fs = require('fs');
const path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\sci-phy-3.ts';
let content = fs.readFileSync(path, 'utf8');

const tabsToClear = ['In-Text-3', 'In-Text-4', 'In-Text-5', 'Exercise'];

tabsToClear.forEach(tabName => {
    const regex = new RegExp(`("name":\\s*"${tabName}",\\s*"questions":\\s*\\[)[\\s\\S]*?(\\n\\s*\\],?\\s*\\n)`, 'g');
    content = content.replace(regex, '$1]$2');
});

// A more specific replacement for segments that might not match the generic regex perfectly
const segments = [
    { name: "In-Text-3", startId: "sp3-it-3-1", endId: "sp3-it-3-2" },
    { name: "In-Text-4", startId: "sp3-it-4-1", endId: "sp3-it-4-5" },
    { name: "In-Text-5", startId: "sp3-it-5-1", endId: "sp3-it-5-3" },
    { name: "Exercise", startId: "sp3-ex-1", endId: "sp3-ex-12" }
];

// Re-running a more robust replacement if needed
// But let's try a simpler approach by just targeting the arrays directly.

fs.writeFileSync(path, content, 'utf8');
console.log('Tabs cleared successfully.');
