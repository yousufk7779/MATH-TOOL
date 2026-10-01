const fs = require("fs");
const path = require("path");

const CHAPTER_COLORS = {
  1: "#FF512F",
  2: "#00C6FF",
  3: "#7C4DFF",
  4: "#FF9100",
  5: "#00E676",
  6: "#FF007F",
  7: "#2979FF",
  8: "#FDC830",
  9: "#E040FB",
  10: "#00E5FF",
  11: "#FF3D00",
  12: "#00B0FF",
  13: "#11998E",
  14: "#8E2DE2"
};

console.log("===============================================================================");
console.log("       COMPREHENSIVE AUDIT: ALL 14 CHAPTERS OF CLASS 11 MATHEMATICS           ");
console.log("===============================================================================\n");

let grandTotalIssues = 0;
const chapterSummaries = [];

for (let chNum = 1; chNum <= 14; chNum++) {
  const filePath = path.resolve(__dirname, `../client/data/content/c11-math-${chNum}.ts`);
  const chIssues = [];

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File missing: c11-math-${chNum}.ts`);
    grandTotalIssues++;
    continue;
  }

  let chData = null;
  try {
    const mod = require(filePath);
    chData = mod[`c11Math${chNum}`];
  } catch (e) {
    chIssues.push(`Module load error: ${e.message}`);
  }

  if (!chData) {
    console.error(`Could not parse data for Chapter ${chNum}`);
    grandTotalIssues++;
    continue;
  }

  // 1. Basic Metadata Checks
  if (chData.number !== chNum) {
    chIssues.push(`number mismatch: expected ${chNum}, got ${chData.number}`);
  }
  if (!chData.isHtmlView) {
    chIssues.push(`isHtmlView is not true!`);
  }

  // 2. Exercises & Sub-tabs Checks
  const exList = chData.exercises || [];
  const htmlExercises = chData.htmlExercises || {};
  const exIds = exList.map(e => e.id);

  if (exList.length === 0) {
    chIssues.push("exercises array is empty!");
  }

  for (const ex of exList) {
    if (!htmlExercises[ex.id]) {
      chIssues.push(`Exercise '${ex.id}' listed in exercises but missing in htmlExercises`);
    } else {
      const html = htmlExercises[ex.id];
      if (html.length < 500) {
        chIssues.push(`Exercise '${ex.id}' HTML content suspiciously short (${html.length} chars)`);
      }
      if (html.includes("Solved Questions Ready") || html.includes("populated from the official NCERT")) {
        chIssues.push(`Exercise '${ex.id}' contains placeholder scaffold text!`);
      }
      if (!html.trim().startsWith("<style>")) {
        chIssues.push(`Exercise '${ex.id}' does NOT start with <style> block at top!`);
      }
    }
  }

  // Check for orphan keys in htmlExercises
  for (const key of Object.keys(htmlExercises)) {
    if (!exIds.includes(key)) {
      chIssues.push(`htmlExercises has key '${key}' not listed in exercises`);
    }
  }

  // 3. HTML Overview Checks
  const overview = chData.htmlOverview || "";
  if (!overview || overview.length < 500) {
    chIssues.push(`htmlOverview is missing or too short (${overview.length} chars)`);
  }
  if (!overview.includes("Master Revision Formula Cheat Sheet")) {
    chIssues.push(`htmlOverview is missing 'Master Revision Formula Cheat Sheet'`);
  }

  // 4. MCQs Checks
  const mcqs = chData.mcqs || [];
  if (mcqs.length !== 25) {
    chIssues.push(`MCQs count is ${mcqs.length} (expected exactly 25)`);
  }
  const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
  mcqs.forEach((mcq, idx) => {
    const qNum = idx + 1;
    if (!["A", "B", "C", "D"].includes(mcq.correctAnswer)) {
      chIssues.push(`MCQ #${qNum} invalid correctAnswer '${mcq.correctAnswer}'`);
    } else {
      answerCounts[mcq.correctAnswer]++;
    }
    if (!mcq.options || mcq.options.length !== 4) {
      chIssues.push(`MCQ #${qNum} does not have 4 options`);
    } else {
      const prefixes = ["A):   ", "B):   ", "C):   ", "D):   "];
      mcq.options.forEach((opt, oIdx) => {
        if (!opt.startsWith(prefixes[oIdx])) {
          chIssues.push(`MCQ #${qNum} option ${oIdx} missing prefix '${prefixes[oIdx]}': ${opt.slice(0, 15)}...`);
        }
      });
    }
    if (!mcq.explanation || mcq.explanation.length < 10) {
      chIssues.push(`MCQ #${qNum} explanation missing or too short`);
    }
  });

  // Check answer distribution: no option should dominate > 60%
  for (const [opt, count] of Object.entries(answerCounts)) {
    if (count > 15) {
      chIssues.push(`MCQ option ${opt} appears ${count} times (distribution skewed)`);
    }
  }

  // 5. Raw Text/LaTeX/Formatting Audit across all content
  const allHtmlStrings = [overview, ...Object.values(htmlExercises)];
  const combinedHtml = allHtmlStrings.join("\n");

  // (a) Raw carets: check for ^ not inside svg or style or scripts
  // Exclude style tags or svg tags when checking
  const noStyleSvg = combinedHtml
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");

  const caretMatches = noStyleSvg.match(/(\w+\^\w+|\d+\^\d+|\)\^|\^\()/g);
  if (caretMatches) {
    chIssues.push(`Found raw carets (^) in content: ${caretMatches.slice(0, 5).join(", ")}`);
  }

  // (b) Raw LaTeX remnants
  const latexPatterns = [
    { name: "\\frac", regex: /\\frac\{/g },
    { name: "\\text", regex: /\\text\{/g },
    { name: "\\times", regex: /\\times/g },
    { name: "\\sqrt", regex: /\\sqrt\{/g },
    { name: "\\sum", regex: /\\sum/g },
    { name: "\\le", regex: /\\le\b/g },
    { name: "\\ge", regex: /\\ge\b/g },
    { name: "\\in", regex: /\\in\b/g },
    { name: "\\cup", regex: /\\cup\b/g },
    { name: "\\cap", regex: /\\cap\b/g },
    { name: "&text", regex: /&text/g },
    { name: "Raw dollar math ($...$)", regex: /\$[a-zA-Z0-9_\\^+\-= ]+\$/g }
  ];

  for (const lp of latexPatterns) {
    const matches = noStyleSvg.match(lp.regex);
    if (matches) {
      chIssues.push(`Found raw LaTeX remnant '${lp.name}': count=${matches.length} (sample: ${matches.slice(0, 3).join(", ")})`);
    }
  }

  // (c) Raw unescaped tabs in HTML view
  // In javascript template strings, sometimes \t was written instead of tab
  const rawTabs = noStyleSvg.match(/\\t[a-zA-Z]/g);
  if (rawTabs) {
    chIssues.push(`Found raw tab escape '\\t': ${rawTabs.slice(0, 5).join(", ")}`);
  }

  // 6. Theme Color Audit
  const expectedColor = CHAPTER_COLORS[chNum];
  // Check if expected color is present in styles
  if (!combinedHtml.includes(expectedColor) && !combinedHtml.toLowerCase().includes(expectedColor.toLowerCase())) {
    chIssues.push(`Expected theme color '${expectedColor}' not found in chapter HTML!`);
  }

  // Count question cards
  const qCardCount = (combinedHtml.match(/class=["']q-card["']/g) || []).length;

  chapterSummaries.push({
    number: chNum,
    title: chData.title,
    exercises: exList.map(e => e.name),
    qCards: qCardCount,
    mcqCount: mcqs.length,
    ansDistribution: `A:${answerCounts.A} B:${answerCounts.B} C:${answerCounts.C} D:${answerCounts.D}`,
    issues: chIssues
  });

  if (chIssues.length > 0) {
    grandTotalIssues += chIssues.length;
  }
}

// Print results table
chapterSummaries.forEach(s => {
  const status = s.issues.length === 0 ? "✅ PASS" : `❌ ${s.issues.length} ISSUES`;
  console.log(`[Ch ${s.number.toString().padStart(2, " ")}] ${s.title.padEnd(46, " ")} | ${status}`);
  console.log(`     Sub-tabs: [${s.exercises.join(", ")}] | Q-Cards: ${s.qCards} | MCQs: ${s.mcqCount} (${s.ansDistribution})`);
  if (s.issues.length > 0) {
    s.issues.forEach(iss => console.log(`     ⚠️  ${iss}`));
  }
  console.log("");
});

console.log("===============================================================================");
if (grandTotalIssues === 0) {
  console.log("🎉 ALL 14 CHAPTERS PASSED AUDIT WITH ZERO ISSUES! 100% PERFECT.");
} else {
  console.log(`⚠️  FOUND TOTAL ${grandTotalIssues} ISSUES ACROSS CHAPTERS.`);
}
console.log("===============================================================================");
