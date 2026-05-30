const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");
const files = fs.readdirSync(contentDir).filter(f => f.startsWith("sst-") && f.includes("-c9-") && f.endsWith(".ts"));

console.log(`Found ${files.length} Class 9 SST files.`);

let compiledMcqs = [];
let mcqCounter = 1;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let code = fs.readFileSync(filePath, "utf8");

  // Determine subject from filename
  let subject = "history";
  if (file.includes("-geo-")) subject = "geography";
  else if (file.includes("-civ-")) subject = "civics";
  else if (file.includes("-eco-")) subject = "economics";

  // Clean code to make it evaluable as pure JS
  // Remove imports
  code = code.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "");
  // Replace export const with assignment to tempObj
  code = code.replace(/export\s+const\s+(\w+)\s*(:\s*\w+)?\s*=/g, "var tempObj =");
  // Change const/let themeColor to var themeColor to prevent redeclaration errors in eval
  code = code.replace(/const\s+themeColor\s*=/g, "var themeColor =");
  code = code.replace(/let\s+themeColor\s*=/g, "var themeColor =");

  try {
    eval(code);
    
    // Now we can access tempObj directly
    if (typeof tempObj === "undefined" || !tempObj) {
      console.error(`Could not locate content object for file: ${file}`);
      return;
    }

    const chapterId = tempObj.id;
    const chapterTitle = tempObj.title;

    if (tempObj.mcqs && tempObj.mcqs.length > 0) {
      tempObj.mcqs.forEach(mcq => {
        // Format options with (A), (B), (C), (D) if not already
        const formattedOptions = mcq.options.map((opt, index) => {
          const letter = String.fromCharCode(65 + index);
          const prefix = `(${letter}) `;
          if (!opt.trim().startsWith(prefix)) {
            return prefix + opt.trim();
          }
          return opt;
        });

        // Convert correctAnswer to uppercase A, B, C, D
        const formattedAnswer = mcq.correctAnswer.toUpperCase();

        compiledMcqs.push({
          id: `c9-sst-${mcqCounter++}`,
          question: mcq.question,
          options: formattedOptions,
          correctAnswer: formattedAnswer,
          subject: subject,
          chapterId: chapterId,
          chapterTitle: chapterTitle
        });
      });
      console.log(`Successfully extracted ${tempObj.mcqs.length} MCQs from ${file}`);
    } else {
      console.warn(`No MCQs found in ${file}`);
    }

    // Reset tempObj to avoid leakage
    tempObj = undefined;

  } catch (e) {
    console.error(`Failed to parse file: ${file}`, e.message);
  }
});

console.log(`Total compiled MCQs: ${compiledMcqs.length}`);

// Write the compiled questions to JSON file
const outputFilePath = path.join(__dirname, "easy_mcqs_sst_c9.json");
fs.writeFileSync(outputFilePath, JSON.stringify(compiledMcqs, null, 2));
console.log(`Successfully wrote database to: ${outputFilePath}`);
