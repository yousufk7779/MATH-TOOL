const fs = require('fs');

const b64Path = 'd:/All NCERT SOLUTIONS/scratch/ch2_fig_b64.txt';
const chapterPath = 'd:/All NCERT SOLUTIONS/client/data/content/c7-sci-2.ts';

const b64 = fs.readFileSync(b64Path, 'utf8').trim();
let chapterContent = fs.readFileSync(chapterPath, 'utf8');

const q12 = `        {
          id: "q12",
          number: "12",
          question: "Label Fig. 2.11 of the digestive system.",
          solution: [
            "<div style=\\"text-align: center; color: #FFFFFF;\\"><img src=\\"${b64}\\" style=\\"width: 100%; max-width: 100%; height: auto;\\" /></div>"
          ],
          answer: ""
        },`;

const q13 = `        {
          id: "q13",
          number: "13",
          question: "Can we survive only on raw, leafy vegetables/grass? Discuss.",
          solution: [
            "<div style=\\"text-align: justify; color: #FFFFFF;\\"><span style=\\"color: #FFFF00;\\">Can we survive only on raw, leafy vegetables/grass? Discuss.</span><br/><br/>Answer:<br/>No, we cannot survive only on raw leafy vegetables or grass. Humans cannot digest cellulose present in grass. Also, our body needs a balanced diet including carbohydrates, proteins, fats, vitamins and minerals.</div>"
          ],
          answer: ""
        }`;

// Find the last question closing brace and insert before the end of the array
const searchStr = '      ]\n    }\n  ],';
const insertPos = chapterContent.lastIndexOf('        }');
const insertIndex = chapterContent.indexOf('}', insertPos) + 1;

const updatedContent = chapterContent.slice(0, insertIndex) + ',\n' + q12 + '\n' + q13 + chapterContent.slice(insertIndex);

fs.writeFileSync(chapterPath, updatedContent);
console.log('Successfully updated chapter file with Q12 and Q13');
