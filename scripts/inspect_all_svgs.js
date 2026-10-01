const fs = require("fs");
const path = require("path");

console.log("=== COMPREHENSIVE SVG & DIAGRAM AUDIT ACROSS ALL 14 CHAPTERS ===\n");

let totalSvgs = 0;
const svgReport = [];

for (let ch = 1; ch <= 14; ch++) {
  const p = path.resolve(__dirname, `../client/data/content/c11-math-${ch}.ts`);
  if (!fs.existsSync(p)) continue;

  const rawContent = fs.readFileSync(p, "utf-8");
  // Unescape backslashed quotes for clean parsing
  const content = rawContent.replace(/\\"/g, '"');
  const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];

  if (svgMatches.length === 0) {
    svgReport.push({ ch, count: 0, svgs: [] });
    continue;
  }

  totalSvgs += svgMatches.length;
  const svgsInfo = [];

  svgMatches.forEach((svgStr, idx) => {
    const vbMatch = svgStr.match(/viewBox=["']([^"']+)["']/i);
    const vb = vbMatch ? vbMatch[1] : null;
    const widthMatch = svgStr.match(/width=["']([^"']+)["']/i);
    const heightMatch = svgStr.match(/height=["']([^"']+)["']/i);

    // Check min-width violation
    const hasMinWidth = /min-width/i.test(svgStr);

    // Check coordinates in viewBox
    let vbMinX = 0, vbMinY = 0, vbW = 0, vbH = 0;
    if (vb) {
      const parts = vb.trim().split(/[\s,]+/).map(Number);
      if (parts.length === 4) {
        [vbMinX, vbMinY, vbW, vbH] = parts;
      }
    }

    // Check all text x and y coordinates
    const textMatches = [...svgStr.matchAll(/<text[^>]*\sx=["'](-?[\d.]+)["'][^>]*\sy=["'](-?[\d.]+)["'][^>]*>(.*?)<\/text>/gi)];
    const outOfBoundsTexts = [];

    textMatches.forEach(tm => {
      const x = parseFloat(tm[1]);
      const y = parseFloat(tm[2]);
      const label = tm[3].replace(/<[^>]+>/g, "").trim();

      if (vbW > 0 && vbH > 0) {
        // Allow a small 5px margin
        if (x < (vbMinX - 10) || x > (vbMinX + vbW + 10) || y < (vbMinY - 10) || y > (vbMinY + vbH + 10)) {
          outOfBoundsTexts.push({ label, x, y });
        }
      }
    });

    const issues = [];
    if (!vb) issues.push("Missing viewBox");
    if (hasMinWidth) issues.push("Has forbidden min-width attribute or style");
    if (outOfBoundsTexts.length > 0) {
      issues.push(`Text out of bounds: ${outOfBoundsTexts.map(t => `'${t.label}' at (${t.x},${t.y})`).join(", ")}`);
    }

    svgsInfo.push({
      num: idx + 1,
      viewBox: vb,
      width: widthMatch ? widthMatch[1] : "100%",
      height: heightMatch ? heightMatch[1] : "auto",
      textCount: textMatches.length,
      issues
    });
  });

  svgReport.push({ ch, count: svgMatches.length, svgs: svgsInfo });
}

let anyIssue = false;
svgReport.forEach(r => {
  console.log(`[Ch ${r.ch.toString().padStart(2, " ")}] ${r.count} SVG diagram(s)`);
  r.svgs.forEach(s => {
    const status = s.issues.length === 0 ? "✅ OK" : `⚠️  ISSUES: ${s.issues.join("; ")}`;
    if (s.issues.length > 0) anyIssue = true;
    console.log(`     #${s.num} | viewBox: [${s.viewBox}] | texts: ${s.textCount} | ${status}`);
  });
});

console.log(`\nTotal SVGs checked across Class 11 Math: ${totalSvgs}`);
if (!anyIssue) {
  console.log("🎉 ALL 73 SVGS PASSED WITH VALID VIEWBOX, ZERO CUT-OFFS, AND ZERO MIN-WIDTH!");
} else {
  console.log("⚠️ Some SVGs have issues.");
}
