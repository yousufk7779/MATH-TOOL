const fs = require("fs");
const path = require("path");

const b64 = fs.readFileSync("b64_clean.txt", "utf-8").trim();
const targetFile = "client/data/content/c8-sci-2.ts";
let content = fs.readFileSync(targetFile, "utf-8");

const tableHtml = /<table[\s\S]*?<\/table>/;
const imageTag = `<div style='text-align: center; margin: 10px 0;'><img src='data:image/png;base64,${b64}' style='max-width: 100%; border-radius: 8px;' /></div>`;

content = content.replace(tableHtml, imageTag);

fs.writeFileSync(targetFile, content);
console.log("Successfully replaced table with image in c8-sci-2.ts");
