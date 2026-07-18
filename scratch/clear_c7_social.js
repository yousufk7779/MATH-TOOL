const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "..", "client", "data", "content");

// Get all files matching c7-hist, c7-geo, c7-civ
const files = fs.readdirSync(CONTENT_DIR).filter(file => {
  return file.startsWith("c7-hist-") || file.startsWith("c7-geo-") || file.startsWith("c7-civ-");
});

console.log(`Found ${files.length} Class 7 Social Science files.`);

files.forEach(file => {
  const filePath = path.join(CONTENT_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // 1. Replace htmlOverview
  content = content.replace(/htmlOverview:\s*`[\s\S]*?`\s*,/g, `htmlOverview: \`
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Content to be added soon...</p>
        </div>
    \`,`);

  // 2. Replace htmlExercises values while keeping keys
  const htmlExMatch = content.match(/htmlExercises:\s*\{([\s\S]*?)\}\s*,/);
  if (htmlExMatch) {
    const rawExMap = htmlExMatch[1];
    // Find all keys, e.g. "c7h1-ex-all": `...`
    // We match key pattern: "key" or 'key' or key followed by colon and backtick content
    const updatedExMap = rawExMap.replace(/(["']?[a-zA-Z0-9_-]+["']?\s*:\s*)`[\s\S]*?`/g, (match, keyPrefix) => {
      return `${keyPrefix}\`
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <p>Solutions to be added soon...</p>
            </div>
        \``;
    });
    content = content.replace(/htmlExercises:\s*\{[\s\S]*?\}\s*,/, `htmlExercises: {${updatedExMap}},`);
  }

  // 3. Clear standard arrays/strings
  content = content.replace(/introduction:\s*(?:"[\s\S]*?"|'[\s\S]*?'|`[\s\S]*?`)\s*,/g, `introduction: "",`);
  content = content.replace(/definitions:\s*\[[\s\S]*?\]\s*,/g, `definitions: [],`);
  content = content.replace(/keyPoints:\s*\[[\s\S]*?\]\s*,/g, `keyPoints: [],`);
  content = content.replace(/formulas:\s*\[[\s\S]*?\]\s*,/g, `formulas: [],`);
  content = content.replace(/crux:\s*\[[\s\S]*?\]\s*,/g, `crux: [],`);
  content = content.replace(/exercises:\s*\[[\s\S]*?\]\s*,/g, `exercises: [],`);
  content = content.replace(/examples:\s*\[[\s\S]*?\]\s*,/g, `examples: [],`);
  content = content.replace(/mcqs:\s*\[[\s\S]*?\]\s*,/g, `mcqs: [],`);
  content = content.replace(/summary:\s*\[[\s\S]*?\]\s*,/g, `summary: [],`);
  content = content.replace(/theorems:\s*\[[\s\S]*?\]\s*,/g, `theorems: [],`);

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Cleared content for: ${file}`);
});

console.log("All Class 7 Social Science files processed!");
