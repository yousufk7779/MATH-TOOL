const fs = require('fs');
const htmlFile = 'd:\\MATH-T-new\\client\\assets\\chapters\\chapter12\\exercise1.html';
let content = fs.readFileSync(htmlFile, 'utf8');

const q4Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="background-color:white;">
<g transform="translate(130, 200)">
  <!-- Front face -->
  <path d="M -70 0 L 70 0 L 70 -110 L -70 -110 Z" fill="#0277bd" stroke="black" stroke-width="2"/>
  <!-- Right face -->
  <path d="M 70 0 L 120 -50 L 120 -160 L 70 -110 Z" fill="#01579b" stroke="black" stroke-width="2"/>
  <!-- Top face -->
  <path d="M -70 -110 L -20 -160 L 120 -160 L 70 -110 Z" fill="#29b6f6" stroke="black" stroke-width="2"/>
  
  <!-- Hemisphere on top -->
  <g transform="translate(25, -135)">
    <!-- Back of base (transparent) -->
    <path d="M -70 0 A 70 20 0 0 1 70 0" fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="4"/>
    <!-- Dome -->
    <path d="M -70 0 A 70 70 0 0 1 70 0" fill="#4fc3f7" fill-opacity="0.85" stroke="#0288d1" stroke-width="2"/>
    <!-- Front of base -->
    <path d="M -70 0 A 70 20 0 0 0 70 0" fill="#4fc3f7" fill-opacity="0.9" stroke="black" stroke-width="2"/>
    
    <!-- Hemisphere diameter label -->
    <line x1="-65" y1="0" x2="65" y2="0" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
    <text x="0" y="-10" font-family="Arial" font-size="16" fill="black" text-anchor="middle">7 cm</text>
  </g>

  <!-- Labels for Cube -->
  <line x1="-70" y1="15" x2="70" y2="15" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="0" y="35" font-family="Arial" font-size="18" fill="black" text-anchor="middle">7 cm</text>

  <line x1="-85" y1="0" x2="-85" y2="-110" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="-95" y="-50" font-family="Arial" font-size="18" fill="black" text-anchor="end">7 cm</text>

  <line x1="85" y1="5" x2="135" y2="-45" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="120" y="-10" font-family="Arial" font-size="18" fill="black" text-anchor="start">7 cm</text>
</g>
<defs>
  <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
    <polygon points="0,0 5,2.5 0,5" fill="black"/>
  </marker>
</defs>
</svg>`;

const q5Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="background-color:white;">
<g transform="translate(130, 200)">
  <!-- Front face -->
  <path d="M -70 0 L 70 0 L 70 -110 L -70 -110 Z" fill="#64b5f6" stroke="black" stroke-width="2"/>
  <!-- Right face -->
  <path d="M 70 0 L 120 -50 L 120 -160 L 70 -110 Z" fill="#42a5f5" stroke="black" stroke-width="2"/>
  <!-- Top face -->
  <path d="M -70 -110 L -20 -160 L 120 -160 L 70 -110 Z" fill="#90caf9" stroke="black" stroke-width="2"/>
  
  <!-- Hemispherical depression -->
  <g transform="translate(25, -135)">
    <!-- Back of base (top circle of the hole) -->
    <path d="M -70 0 A 70 20 0 0 1 70 0" fill="#e3f2fd" stroke="black" stroke-width="2"/>
    <!-- Depression bowl -->
    <path d="M -70 0 A 70 70 0 0 0 70 0" fill="#1976d2" fill-opacity="0.9" stroke="black" stroke-width="2"/>
    <!-- Front of base (top circle of the hole) -->
    <path d="M -70 0 A 70 20 0 0 0 70 0" fill="none" stroke="black" stroke-width="2"/>
    
    <!-- Hemisphere diameter label -->
    <line x1="-65" y1="0" x2="65" y2="0" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
    <text x="0" y="-10" font-family="Arial" font-size="20" font-style="italic" fill="black" text-anchor="middle">l</text>
  </g>

  <!-- Labels for Cube -->
  <line x1="-70" y1="15" x2="70" y2="15" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="0" y="35" font-family="Arial" font-size="20" font-style="italic" fill="black" text-anchor="middle">l</text>

  <line x1="-85" y1="0" x2="-85" y2="-110" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="-95" y="-50" font-family="Arial" font-size="20" font-style="italic" fill="black" text-anchor="end">l</text>

  <line x1="85" y1="5" x2="135" y2="-45" stroke="black" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="120" y="-10" font-family="Arial" font-size="20" font-style="italic" fill="black" text-anchor="start">l</text>
</g>
<defs>
  <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
    <polygon points="0,0 5,2.5 0,5" fill="black"/>
  </marker>
</defs>
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
