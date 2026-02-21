const fs = require('fs');
const path = require('path');

const dir = 'd:/MATH-T-new/client/assets/chapters';
const files = [];

function getFiles(d) {
    fs.readdirSync(d).forEach(f => {
        const full = path.join(d, f);
        if (fs.statSync(full).isDirectory()) getFiles(full);
        else if (f === 'overview.html') files.push(full);
    });
}
getFiles(dir);

const additionalPoints = `
<div class="section-title">General Important Points</div>
<div class="content-text"><span class="highlight-text">»</span> Carefully read and understand every problem statement before jumping into the solution.</div>
<div class="content-text"><span class="highlight-text">»</span> A strong grasp of the core concepts is the key to solving complex problems easily.</div>
<div class="content-text"><span class="highlight-text">»</span> Make a habit of practicing the solved examples to get familiar with standard solution formats.</div>
`;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    if (!content.includes('General Important Points')) {
        content = content.replace('</body>', additionalPoints + '</body>');
        fs.writeFileSync(f, content);
    }
});
console.log('Done updating ' + files.length + ' overview files');
