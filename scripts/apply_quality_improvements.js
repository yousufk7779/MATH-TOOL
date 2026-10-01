const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("=== APPLYING TABLE BEAUTIFICATION, HINDI REMOVAL & DIAGRAM REFINEMENTS ===");

// 1. Remove Hindi and enhance tables in Chapter 2
{
  const p = path.resolve(__dirname, "build_ch2_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  // Remove Hindi
  content = content.replace(
    /संबंध एवं फलन\s*&bull;/g,
    "Relations &amp; Functions &bull;"
  );

  // Enhance table wrapper and cells
  content = content.replace(
    /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">\s*<table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; color: #E2E8F0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(0, 198, 255, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 10px 12px; font-weight: 700;">/g,
    `<th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(0, 198, 255, 0.25);">`
  );
  content = content.replace(
    /<td style="padding: 10px 12px; font-weight: 600; color: #80D8FF;">/g,
    `<td style="padding: 10px 14px; font-weight: 700; color: #80D8FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 10px 12px;">/g,
    `<td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 2: Removed Hindi & enhanced table");
}

// 2. Remove Hindi and enhance tables in Chapter 3
{
  const p = path.resolve(__dirname, "build_ch3_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  // Remove Hindi
  content = content.replace(
    /त्रिकोणमितीय फलन\s*&bull;/g,
    "Trigonometric Functions &bull;"
  );

  // Table 1 (Domain/Range Quadrants)
  content = content.replace(
    /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 14px;">\s*<table style="width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: center; color: #E2E8F0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(124, 77, 255, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 580px; font-size: 13.5px; text-align: center; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 8px; text-align: left;">Function<\/th>/g,
    `<th style="padding: 9px 12px; text-align: left; font-weight: 700; white-space: nowrap; border: 1px solid rgba(124, 77, 255, 0.3);">Function</th>`
  );
  content = content.replace(
    /<th style="padding: 8px;">/g,
    `<th style="padding: 9px 12px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(124, 77, 255, 0.3);">`
  );
  content = content.replace(
    /<td style="padding: 8px; text-align: left; font-weight: 700; color: #B388FF;">/g,
    `<td style="padding: 8px 12px; text-align: left; font-weight: 700; color: #B388FF; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 8px; color: (#4CAF50|#F44336);">/g,
    `<td style="padding: 8px 12px; color: $1; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 8px;">/g,
    `<td style="padding: 8px 12px; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  // Table 2 (Master Revision Formulas)
  content = content.replace(
    /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">\s*<table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; color: #E2E8F0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(124, 77, 255, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 10px 12px; font-weight: 700;">Formula Category<\/th>/g,
    `<th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(124, 77, 255, 0.3);">Formula Category</th>`
  );
  content = content.replace(
    /<th style="padding: 10px 12px; font-weight: 700;">Mathematical Identities<\/th>/g,
    `<th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(124, 77, 255, 0.3);">Mathematical Identities</th>`
  );
  content = content.replace(
    /<td style="padding: 10px 12px; font-weight: 700; color: #B388FF;">/g,
    `<td style="padding: 10px 14px; font-weight: 700; color: #B388FF; white-space: nowrap; vertical-align: top; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 10px 12px;">/g,
    `<td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 3: Removed Hindi & enhanced 2 tables");
}

// 3. Remove Hindi and enhance table in Chapter 4
{
  const p = path.resolve(__dirname, "build_ch4_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  // Remove Hindi
  content = content.replace(
    /सम्मिश्र संख्याएं एवं द्विघातीय समीकरण\s*&bull;/g,
    "Complex Numbers &amp; Quadratic Equations &bull;"
  );

  // Table
  content = content.replace(
    /<div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">\s*<table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; color: #E2E8F0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(255, 145, 0, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 10px 12px; font-weight: 700;">/g,
    `<th style="padding: 10px 14px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(255, 145, 0, 0.3);">`
  );
  content = content.replace(
    /<td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">/g,
    `<td style="padding: 10px 14px; font-weight: 700; color: #FFB74D; white-space: nowrap; vertical-align: top; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 10px 12px;">/g,
    `<td style="padding: 10px 14px; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 4: Removed Hindi & enhanced table");
}

// 4. Enhance table in Chapter 8
{
  const p = path.resolve(__dirname, "build_ch8_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  content = content.replace(
    /<div style="color: #FFFFFF; font-size: 15px; line-height: 2.3;">\s*<table style="width: 100%; border-collapse: collapse; text-align: left;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(253, 200, 48, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 8px 6px;">/g,
    `<th style="padding: 10px 12px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(253, 200, 48, 0.3); background: rgba(253, 200, 48, 0.18); color: #FDC830;">`
  );
  content = content.replace(
    /<td style="padding: 8px 6px; font-weight: 700;">/g,
    `<td style="padding: 9px 12px; font-weight: 700; color: #FFE082; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 8px 6px;">/g,
    `<td style="padding: 9px 12px; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 8: Added responsive table wrapper & enhanced styling");
}

// 5. Enhance table in Chapter 9
{
  const p = path.resolve(__dirname, "build_ch9_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  content = content.replace(
    /<div style="color: #FFFFFF; font-size: 15px; line-height: 2.3;">\s*<table style="width: 100%; border-collapse: collapse; text-align: left;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(224, 64, 251, 0.35); background: rgba(15, 23, 42, 0.85);">\n      <table style="width: 100%; border-collapse: collapse; min-width: 520px; font-size: 14px; text-align: left; color: #E2E8F0;">`
  );
  content = content.replace(
    /<th style="padding: 8px 6px;">/g,
    `<th style="padding: 10px 12px; font-weight: 700; white-space: nowrap; border: 1px solid rgba(224, 64, 251, 0.3); background: rgba(224, 64, 251, 0.18); color: #E040FB;">`
  );
  content = content.replace(
    /<td style="padding: 8px 6px; font-weight: 700;">/g,
    `<td style="padding: 9px 12px; font-weight: 700; color: #EA80FC; white-space: nowrap; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );
  content = content.replace(
    /<td style="padding: 8px 6px;">/g,
    `<td style="padding: 9px 12px; border: 1px solid rgba(255, 255, 255, 0.08);">`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 9: Added responsive table wrapper & enhanced styling");
}

// 6. Refine Chapter 10 Diagram #1 SVG labels
{
  const p = path.resolve(__dirname, "build_ch10_overview_mcqs.js");
  let content = fs.readFileSync(p, "utf-8");

  content = content.replace(
    /<text x="-20" y="55" font-size="13" font-weight="800" fill="#006064">Circle \(e = 0\)<\/text>/,
    `<text x="0" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="#006064">Circle (e = 0)</text>`
  );
  content = content.replace(
    /<text x="-25" y="55" font-size="13" font-weight="800" fill="#9F1239">Parabola \(e = 1\)<\/text>/,
    `<text x="0" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="#9F1239">Parabola (e = 1)</text>`
  );
  content = content.replace(
    /<text x="-25" y="55" font-size="13" font-weight="800" fill="#581C87">Ellipse \(e &lt; 1\)<\/text>/,
    `<text x="0" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="#581C87">Ellipse (e &lt; 1)</text>`
  );
  content = content.replace(
    /<text x="-32" y="55" font-size="13" font-weight="800" fill="#7C2D12">Hyperbola \(e &gt; 1\)<\/text>/,
    `<text x="0" y="55" text-anchor="middle" font-size="12.5" font-weight="800" fill="#7C2D12">Hyperbola (e &gt; 1)</text>`
  );

  fs.writeFileSync(p, content, "utf-8");
  console.log("[FIXED] Chapter 10: Centered conic diagram text labels using text-anchor='middle'");
}

// 7. Enhance Chapter 11 Octants Table
{
  const commonPath = path.resolve(__dirname, "ch11_common.js");
  let common = fs.readFileSync(commonPath, "utf-8");
  common = common.replace(
    /\.octant-table th, \.octant-table td \{ border: 1px solid rgba\(255, 255, 255, 0\.2\); padding: 8px 6px; text-align: center; \}/,
    `.octant-table th, .octant-table td { border: 1px solid rgba(255, 255, 255, 0.18); padding: 9px 12px; text-align: center; white-space: nowrap; }`
  );
  common = common.replace(
    /\.octant-table th \{ background: rgba\(255, 61, 0, 0\.2\); color: \$\{THEME_COLOR\}; font-weight: 700; \}/,
    `.octant-table th { background: rgba(255, 61, 0, 0.25); color: #FF6E40; font-weight: 700; white-space: nowrap; }`
  );
  fs.writeFileSync(commonPath, common, "utf-8");

  const overviewPath = path.resolve(__dirname, "build_ch11_overview_mcqs.js");
  let overview = fs.readFileSync(overviewPath, "utf-8");
  overview = overview.replace(
    /<div style="overflow-x: auto; margin: 14px 0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(255, 61, 0, 0.35); background: rgba(15, 23, 42, 0.85);">`
  );
  overview = overview.replace(
    /\.octant-table th, \.octant-table td \{ border: 1px solid rgba\(255, 255, 255, 0\.2\); padding: 8px 6px; text-align: center; \}/,
    `.octant-table th, .octant-table td { border: 1px solid rgba(255, 255, 255, 0.18); padding: 9px 12px; text-align: center; white-space: nowrap; }`
  );
  overview = overview.replace(
    /\.octant-table th \{ background: rgba\(255, 61, 0, 0\.2\); color: \$\{THEME_COLOR\}; font-weight: 700; \}/,
    `.octant-table th { background: rgba(255, 61, 0, 0.25); color: #FF6E40; font-weight: 700; white-space: nowrap; }`
  );
  fs.writeFileSync(overviewPath, overview, "utf-8");

  const ex1Path = path.resolve(__dirname, "build_ch11_ex1.js");
  let ex1 = fs.readFileSync(ex1Path, "utf-8");
  ex1 = ex1.replace(
    /<div style="overflow-x: auto; margin: 14px 0;">/,
    `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(255, 61, 0, 0.35); background: rgba(15, 23, 42, 0.85);">`
  );
  fs.writeFileSync(ex1Path, ex1, "utf-8");
  console.log("[FIXED] Chapter 11: Enhanced Octants Table with white-space nowrap and responsive card");
}

// 8. Enhance Chapter 13 Statistics Tables
{
  const commonPath = path.resolve(__dirname, "ch13_common.js");
  let common = fs.readFileSync(commonPath, "utf-8");
  common = common.replace(
    /\.stat-table th \{\s*background: rgba\(17, 153, 142, 0\.28\);\s*color: #38EF7D;\s*padding: 9px 8px;\s*font-weight: 700;\s*border: 1px solid rgba\(255, 255, 255, 0\.12\);\s*\}/,
    `.stat-table th {\n    background: rgba(17, 153, 142, 0.28);\n    color: #38EF7D;\n    padding: 9px 12px;\n    font-weight: 700;\n    white-space: nowrap;\n    border: 1px solid rgba(255, 255, 255, 0.12);\n  }`
  );
  common = common.replace(
    /\.stat-table td \{\s*padding: 7px 8px;\s*border: 1px solid rgba\(255, 255, 255, 0\.08\);\s*\}/,
    `.stat-table td {\n    padding: 8px 12px;\n    white-space: nowrap;\n    border: 1px solid rgba(255, 255, 255, 0.08);\n  }`
  );
  common = common.replace(
    /\.stat-table tr\.total-row \{\s*background: rgba\(17, 153, 142, 0\.22\);\s*font-weight: 700;\s*color: #38EF7D;\s*\}/,
    `.stat-table tr.total-row {\n    background: rgba(17, 153, 142, 0.25);\n    font-weight: 700;\n    color: #38EF7D;\n    white-space: nowrap;\n  }`
  );
  fs.writeFileSync(commonPath, common, "utf-8");

  const overviewPath = path.resolve(__dirname, "build_ch13_overview_mcqs.js");
  let overview = fs.readFileSync(overviewPath, "utf-8");
  overview = overview.replace(
    /<\/style>/,
    `  .stat-table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(17, 153, 142, 0.4); background: rgba(15, 23, 42, 0.85); }\n  .stat-table th, .stat-table td { padding: 8px 12px; white-space: nowrap; }\n</style>`
  );
  fs.writeFileSync(overviewPath, overview, "utf-8");
  console.log("[FIXED] Chapter 13: Enhanced Statistics Calculation Tables");
}

// 9. Reassemble Chapters 2, 3, 4, 8, 9, 10, 11, 13
const reassembleList = [2, 3, 4, 8, 9, 10, 11, 13];
reassembleList.forEach(ch => {
  console.log(`Reassembling Chapter ${ch}...`);
  execSync(`node scripts/assemble_ch${ch}.js`, { cwd: path.resolve(__dirname, ".."), stdio: "inherit" });
});

console.log("\n=== ALL IMPROVEMENTS APPLIED SUCCESSFULLY ===");
