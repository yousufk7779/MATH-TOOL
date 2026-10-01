const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("=== APPLYING TARGETED FIXES TO CLASS 11 MATHEMATICS CHAPTERS ===");

// 1. Fix Chapters 5, 6, 7 lowercase correctAnswer
["build_ch5_overview_mcqs.js", "build_ch6_overview_mcqs.js", "build_ch7_overview_mcqs.js"].forEach(file => {
  const filePath = path.resolve(__dirname, file);
  let content = fs.readFileSync(filePath, "utf-8");
  const updated = content.replace(/correctAnswer:\s*"([abcd])"/g, (m, letter) => {
    return `correctAnswer: "${letter.toUpperCase()}"`;
  });
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, "utf-8");
    console.log(`[FIXED] Uppercased MCQs in ${file}`);
  }
});

// 2. Fix Chapter 11 Theme Color to #FF3D00
{
  const commonPath = path.resolve(__dirname, "ch11_common.js");
  let common = fs.readFileSync(commonPath, "utf-8");
  common = common.replace('const THEME_COLOR = "#69F0AE";', 'const THEME_COLOR = "#FF3D00";');
  common = common.replace(/105,\s*240,\s*174/g, "255, 61, 0");
  fs.writeFileSync(commonPath, common, "utf-8");
  console.log(`[FIXED] Theme color in ch11_common.js -> #FF3D00`);

  const overviewPath = path.resolve(__dirname, "build_ch11_overview_mcqs.js");
  let overview = fs.readFileSync(overviewPath, "utf-8");
  overview = overview.replace(/105,\s*240,\s*174/g, "255, 61, 0");
  fs.writeFileSync(overviewPath, overview, "utf-8");
  console.log(`[FIXED] Gradients in build_ch11_overview_mcqs.js -> 255, 61, 0`);

  const miscPath = path.resolve(__dirname, "build_ch11_misc.js");
  let misc = fs.readFileSync(miscPath, "utf-8");
  misc = misc.replace(/105,\s*240,\s*174/g, "255, 61, 0");
  misc = misc.replace(/stroke="#(?:059669|16A34A)"/g, 'stroke="#EA580C"');
  fs.writeFileSync(miscPath, misc, "utf-8");
  console.log(`[FIXED] Diagrams in build_ch11_misc.js -> 255, 61, 0`);
}

// Helper to swap options and move correctAnswer in MCQ array file
function rebalanceMcqFile(relPath, moves) {
  // moves is an array of { qIdx: number, target: 'A'|'B'|'C'|'D' }
  const fullPath = path.resolve(__dirname, relPath);
  let content = fs.readFileSync(fullPath, "utf-8");

  moves.forEach(({ qNum, target }) => {
    // Find the block for mcq-qNum or corresponding index
    // Regex matches the mcq block
    const mcqRegex = new RegExp(`(\\{[\\s\\S]*?id:[\\s\\S]*?mcq-${qNum}"[\\s\\S]*?options:\\s*\\[[\\s\\S]*?\\][\\s\\S]*?correctAnswer:\\s*"([A-D])"[\\s\\S]*?\\})`, "m");
    const match = content.match(mcqRegex);
    if (!match) {
      console.warn(`Could not match MCQ #${qNum} in ${relPath}`);
      return;
    }

    const block = match[1];
    const currentAns = match[2];
    if (currentAns === target) return;

    // Parse options from block
    const optRegex = /"(?:A\):|B\):|C\):|D\):)\s+(.*?)"/g;
    const opts = [];
    let mOpt;
    while ((mOpt = optRegex.exec(block)) !== null) {
      opts.push(mOpt[1]);
    }

    if (opts.length !== 4) {
      console.warn(`MCQ #${qNum} in ${relPath} did not yield 4 options (found ${opts.length})`);
      return;
    }

    const letterToIdx = { A: 0, B: 1, C: 2, D: 3 };
    const idxToPrefix = ["A):   ", "B):   ", "C):   ", "D):   "];
    const currIdx = letterToIdx[currentAns];
    const targetIdx = letterToIdx[target];

    // Swap
    const temp = opts[currIdx];
    opts[currIdx] = opts[targetIdx];
    opts[targetIdx] = temp;

    // Build replacement block
    let newBlock = block;
    // Replace options array
    const oldOptsBlockMatch = block.match(/options:\s*\[[\s\S]*?\]/);
    if (oldOptsBlockMatch) {
      const newOptsBlock = `options: [\n        "${idxToPrefix[0]}${opts[0]}",\n        "${idxToPrefix[1]}${opts[1]}",\n        "${idxToPrefix[2]}${opts[2]}",\n        "${idxToPrefix[3]}${opts[3]}"\n      ]`;
      newBlock = newBlock.replace(oldOptsBlockMatch[0], newOptsBlock);
    }
    // Replace correctAnswer
    newBlock = newBlock.replace(`correctAnswer: "${currentAns}"`, `correctAnswer: "${target}"`);

    content = content.replace(block, newBlock);
    console.log(`[REBALANCED] ${relPath} Q#${qNum}: ${currentAns} -> ${target}`);
  });

  fs.writeFileSync(fullPath, content, "utf-8");
}

// 3. Rebalance Chapter 13 MCQs (Currently: A:3, B:12, C:9, D:1)
// Goal: A:6, B:6, C:7, D:6
// Move: B -> A for Q1, Q7, Q11 (3 questions)
// Move: B -> D for Q14, Q17, Q22 (3 questions)
// Move: C -> D for Q19, Q24 (2 questions)
rebalanceMcqFile("build_ch13_overview_mcqs.js", [
  { qNum: 1, target: "A" },
  { qNum: 7, target: "A" },
  { qNum: 11, target: "A" },
  { qNum: 14, target: "D" },
  { qNum: 17, target: "D" },
  { qNum: 22, target: "D" },
  { qNum: 19, target: "D" },
  { qNum: 24, target: "D" }
]);

// 4. Rebalance Chapter 14 MCQs (Currently: A:5, B:13, C:7, D:0)
// Goal: A:6, B:7, C:6, D:6
// Move: B -> A for Q2 (1 question)
// Move: B -> D for Q4, Q11, Q15, Q17, Q21 (5 questions)
// Move: C -> D for Q24 (1 question)
rebalanceMcqFile("build_ch14_overview_mcqs.js", [
  { qNum: 2, target: "A" },
  { qNum: 4, target: "D" },
  { qNum: 11, target: "D" },
  { qNum: 15, target: "D" },
  { qNum: 17, target: "D" },
  { qNum: 21, target: "D" },
  { qNum: 24, target: "D" }
]);

// 5. Re-assemble Chapters 5, 6, 7, 11, 13, 14
const chaptersToAssemble = [5, 6, 7, 11, 13, 14];
chaptersToAssemble.forEach(ch => {
  console.log(`Assembling Chapter ${ch}...`);
  execSync(`node scripts/assemble_ch${ch}.js`, { cwd: path.resolve(__dirname, ".."), stdio: "inherit" });
});

console.log("\n=== ALL FIXES APPLIED SUCCESSFULLY ===");
