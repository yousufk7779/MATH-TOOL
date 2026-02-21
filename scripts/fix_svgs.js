const fs = require('fs');
const htmlFile = 'd:\\MATH-T-new\\client\\assets\\chapters\\chapter12\\exercise1.html';
let content = fs.readFileSync(htmlFile, 'utf8');

const q4Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="background-color:white;">
<g transform="translate(130, 160) scale(1.1)">
  <path d="M -50 0 L 50 0 L 50 80 L -50 80 Z" fill="#fff9c4" stroke="black" stroke-width="1.5"/>
  <path d="M 50 0 L 90 -40 L 90 40 L 50 80 Z" fill="#fff59d" stroke="black" stroke-width="1.5"/>
  <path d="M -50 0 L -10 -40 L 90 -40 L 50 0 Z" fill="#fff176" stroke="black" stroke-width="1.5"/>
  <g transform="translate(20, -20)">
    <path d="M -50 0 A 50 50 0 0 1 50 0" fill="#bbdefb" stroke="black" stroke-width="1.5"/>
    <path d="M -50 0 A 50 15 0 0 0 50 0" fill="#90caf9" stroke="black" stroke-width="1.5"/>
    <path d="M -50 0 A 50 15 0 0 1 50 0" fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="4"/>
  </g>
</g>
</svg>`;

const q5Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="background-color:white;">
<g transform="translate(130, 160) scale(1.1)">
  <path d="M -50 0 L 50 0 L 50 80 L -50 80 Z" fill="#fff9c4" stroke="black" stroke-width="1.5"/>
  <path d="M 50 0 L 90 -40 L 90 40 L 50 80 Z" fill="#fff59d" stroke="black" stroke-width="1.5"/>
  <path d="M -50 0 L -10 -40 L 90 -40 L 50 0 Z" fill="#fff176" stroke="black" stroke-width="1.5"/>
  <g transform="translate(20, -20)">
    <path d="M -50 0 A 50 50 0 0 0 50 0" fill="#cfd8dc" stroke="black" stroke-width="1.5"/>
    <path d="M -50 0 A 50 15 0 0 1 50 0" fill="#b0bec5" stroke="black" stroke-width="1.5"/>
    <path d="M -50 0 A 50 15 0 0 0 50 0" fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="4"/>
  </g>
</g>
</svg>`;

const q4Base64 = Buffer.from(q4Svg).toString('base64');
const q5Base64 = Buffer.from(q5Svg).toString('base64');

const rxQ4 = /<img src="data:image\/svg\+xml;base64,[^"]+" alt="Cube with Hemisphere">/;
if (content.match(rxQ4)) {
    content = content.replace(rxQ4, `<img src="data:image/svg+xml;base64,${q4Base64}" alt="Cube with Hemisphere">`);
} else {
    console.log("Q4 not found.");
}

const rxQ5 = /<img src="data:image\/svg\+xml;base64,[^"]+" alt="Depression in Cube">/;
if (content.match(rxQ5)) {
    content = content.replace(rxQ5, `<img src="data:image/svg+xml;base64,${q5Base64}" alt="Depression in Cube">`);
} else {
    console.log("Q5 not found.");
}

fs.writeFileSync(htmlFile, content);
console.log("Updated SVG images for Q4 and Q5!");
