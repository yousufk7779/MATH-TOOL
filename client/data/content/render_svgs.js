const fs = require("fs");
const path = require("path");

const dir = __dirname;
const files = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith("c9-math-") && f.endsWith(".ts"));

let htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { background: #121212; color: #fff; font-family: sans-serif; padding: 20px; }
        .svg-card { background: #1e1e1e; border: 1px solid #333; margin: 20px; padding: 20px; display: inline-block; width: 300px; vertical-align: top; }
        h3 { font-size: 14px; margin-top: 0; color: #aaa; }
        svg { background: #000; width: 100%; border-radius: 8px; }
    </style>
</head>
<body>
<h1>Class 9 Math SVGs</h1>
`;

files.forEach((file) => {
  const content = fs.readFileSync(path.join(dir, file), "utf-8");
  const svgRegex = /<svg[\s\S]*?<\/svg>/g;
  let match;
  let count = 0;
  while ((match = svgRegex.exec(content)) !== null) {
    count++;
    htmlContent += `
        <div class="svg-card">
            <h3>${file} - SVG ${count}</h3>
            ${match[0]}
        </div>
        `;
  }
});

htmlContent += `
</body>
</html>
`;

fs.writeFileSync(path.join(dir, "test_svgs.html"), htmlContent);
console.log("test_svgs.html created!");
