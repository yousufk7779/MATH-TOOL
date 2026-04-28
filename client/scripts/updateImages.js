const fs = require('fs');

const path = 'D:\\All NCERT SOLUTIONS\\client\\data\\content\\c9-sci-bio-2.ts';
let content = fs.readFileSync(path, 'utf8');

const getImgTag = (id) => fs.readFileSync(`D:\\base64_${id}.txt`, 'utf8');

const q6Img = getImgTag('Q6');
const q9Img = getImgTag('Q9');
const q15Img = getImgTag('Q15');

const target = `          solution: [\r\n            "<div style='color: #FFFFFF; text-align: justify;'>Answer:</div>",\r\n            "<div style='color: #FFFFFF; text-align: justify;'>[PENDING IMAGE UPLOAD]</div>"\r\n          ]`;

// Q6 is the first match
let index1 = content.indexOf(target);
if (index1 !== -1) {
  content = content.slice(0, index1) + `          solution: [\n            "${q6Img}"\n          ]` + content.slice(index1 + target.length);
} else {
  console.log("Q6 Target not found, checking with \n instead of \r\n");
  const targetLF = target.replace(/\r\n/g, '\n');
  index1 = content.indexOf(targetLF);
  if (index1 !== -1) {
    content = content.slice(0, index1) + `          solution: [\n            "${q6Img}"\n          ]` + content.slice(index1 + targetLF.length);
  }
}

// Q9 is the second match
let index2 = content.indexOf(target);
if (index2 !== -1) {
  content = content.slice(0, index2) + `          solution: [\n            "${q9Img}"\n          ]` + content.slice(index2 + target.length);
} else {
  const targetLF = target.replace(/\r\n/g, '\n');
  index2 = content.indexOf(targetLF);
  if (index2 !== -1) {
    content = content.slice(0, index2) + `          solution: [\n            "${q9Img}"\n          ]` + content.slice(index2 + targetLF.length);
  }
}

// Q15 is the third match
let index3 = content.indexOf(target);
if (index3 !== -1) {
  content = content.slice(0, index3) + `          solution: [\n            "${q15Img}"\n          ]` + content.slice(index3 + target.length);
} else {
  const targetLF = target.replace(/\r\n/g, '\n');
  index3 = content.indexOf(targetLF);
  if (index3 !== -1) {
    content = content.slice(0, index3) + `          solution: [\n            "${q15Img}"\n          ]` + content.slice(index3 + targetLF.length);
  }
}

fs.writeFileSync(path, content);
console.log("Images inserted successfully.");
