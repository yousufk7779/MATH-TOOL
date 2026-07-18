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
  const originalContent = fs.readFileSync(filePath, "utf-8");

  // Extract export name, e.g. c7Hist1
  const exportMatch = originalContent.match(/export\s+const\s+([a-zA-Z0-9_]+)\s*:/);
  if (!exportMatch) {
    console.error(`Could not find export name in ${file}`);
    return;
  }
  const exportName = exportMatch[1];

  // Extract id
  const idMatch = originalContent.match(/id:\s*["']([^"']+)["']/);
  if (!idMatch) {
    console.error(`Could not find id in ${file}`);
    return;
  }
  const id = idMatch[1];

  // Extract number
  const numberMatch = originalContent.match(/number:\s*(\d+)/);
  if (!numberMatch) {
    console.error(`Could not find number in ${file}`);
    return;
  }
  const number = numberMatch[1];

  // Extract title (handles single and double quotes)
  const titleMatch = originalContent.match(/title:\s*["']([^"']+)["']/);
  if (!titleMatch) {
    console.error(`Could not find title in ${file}`);
    return;
  }
  const title = titleMatch[1];

  // Extract htmlExercises keys
  const htmlExerciseKeys = [];
  const htmlExMatch = originalContent.match(/htmlExercises:\s*\{([\s\S]*?)\}\s*,/);
  if (htmlExMatch) {
    const rawExMap = htmlExMatch[1];
    // Find all keys like "c7h1-ex-all": `...`
    // Match only keys followed by backtick
    const keyMatches = [...rawExMap.matchAll(/(["']?[a-zA-Z0-9_-]+["']?)\s*:\s*`/g)];
    keyMatches.forEach(km => {
      htmlExerciseKeys.push(km[1]);
    });
  }

  // Reconstruct clean TypeScript code
  let cleanCode = `import { ChapterContent } from "../types";

const themeColor = "#FF5722";

export const ${exportName}: ChapterContent = {
  id: "${id}",
  number: ${number},
  title: "${title}",
  isHtmlView: true,
  htmlOverview: \`
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Content to be added soon...</p>
        </div>
    \`,
  htmlExercises: {
`;

  htmlExerciseKeys.forEach((key, idx) => {
    cleanCode += `    ${key}: \`
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <p>Solutions to be added soon...</p>
            </div>
        \`${idx < htmlExerciseKeys.length - 1 ? "," : ""}\n`;
  });

  cleanCode += `  },
  introduction: "",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [],
  examples: [],
  mcqs: [],
  summary: []
};
`;

  fs.writeFileSync(filePath, cleanCode, "utf-8");
  console.log(`Successfully cleared and reconstructed: ${file}`);
});

console.log("All Class 7 Social Science files processed successfully!");
