const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function rebalanceMCQList(mcqs, targetDistribution) {
  // targetDistribution e.g. { A: 6, B: 7, C: 6, D: 6 }
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  mcqs.forEach(m => counts[m.correctAnswer]++);

  const letterToIdx = { A: 0, B: 1, C: 2, D: 3 };
  const idxToPrefix = ["A):   ", "B):   ", "C):   ", "D):   "];

  function move(mcq, targetLetter) {
    const currentLetter = mcq.correctAnswer;
    if (currentLetter === targetLetter) return;

    const pureTexts = mcq.options.map(opt => opt.replace(/^[A-D]\):\s+/, ""));
    const currIdx = letterToIdx[currentLetter];
    const targetIdx = letterToIdx[targetLetter];

    const temp = pureTexts[currIdx];
    pureTexts[currIdx] = pureTexts[targetIdx];
    pureTexts[targetIdx] = temp;

    mcq.options = pureTexts.map((txt, i) => `${idxToPrefix[i]}${txt}`);
    mcq.correctAnswer = targetLetter;

    counts[currentLetter]--;
    counts[targetLetter]++;
  }

  // Iterate and shift surplus answers to deficit answers
  for (let i = 0; i < mcqs.length; i++) {
    const mcq = mcqs[i];
    const curr = mcq.correctAnswer;
    if (counts[curr] > targetDistribution[curr]) {
      // Find a letter that has deficit
      for (const targetLetter of ["D", "A", "C", "B"]) {
        if (counts[targetLetter] < targetDistribution[targetLetter]) {
          move(mcq, targetLetter);
          break;
        }
      }
    }
  }

  return mcqs;
}

function updateFileWithRebalancedMCQs(filePath, targetDistribution) {
  const fullPath = path.resolve(__dirname, filePath);
  let content = fs.readFileSync(fullPath, "utf-8");

  const mod = require(fullPath);
  const mcqs = mod.buildMCQs();

  const rebalanced = rebalanceMCQList(mcqs, targetDistribution);

  // Format new buildMCQs function string
  const mcqsCode = JSON.stringify(rebalanced, null, 2);
  // Indent mcqsCode appropriately
  const formattedFunc = `function buildMCQs() {\n  return ${mcqsCode.replace(/\n/g, "\n  ")};\n}`;

  // Replace buildMCQs in file
  const funcRegex = /function\s+buildMCQs\s*\(\)\s*\{[\s\S]*?^\}/m;
  if (!funcRegex.test(content)) {
    throw new Error(`Could not find buildMCQs in ${filePath}`);
  }

  content = content.replace(funcRegex, formattedFunc);
  fs.writeFileSync(fullPath, content, "utf-8");
  console.log(`Updated buildMCQs in ${filePath}`);
}

// 1. Rebalance Ch 13 (target: A:6, B:7, C:6, D:6)
updateFileWithRebalancedMCQs("build_ch13_overview_mcqs.js", { A: 6, B: 7, C: 6, D: 6 });

// 2. Rebalance Ch 14 (target: A:6, B:7, C:6, D:6)
updateFileWithRebalancedMCQs("build_ch14_overview_mcqs.js", { A: 6, B: 7, C: 6, D: 6 });

// Assemble both
execSync("node scripts/assemble_ch13.js", { cwd: path.resolve(__dirname, ".."), stdio: "inherit" });
execSync("node scripts/assemble_ch14.js", { cwd: path.resolve(__dirname, ".."), stdio: "inherit" });

console.log("Rebalancing and assembly complete!");
