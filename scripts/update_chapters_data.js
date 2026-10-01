const fs = require('fs');
const path = require('path');

const chaptersPath = path.join(__dirname, '..', 'client', 'data', 'chapters.ts');
let content = fs.readFileSync(chaptersPath, 'utf8');

// Normalize line endings to LF during processing
const isCrlf = content.includes('\r\n');
let norm = content.replace(/\r\n/g, '\n');

// 1. Add Mathematics under Class 11 Science if not present
if (!norm.includes('"c11-math-1"')) {
  const targetZoo = `{ id: "c11-zoo-4", number: 4, name: "Human Physiology", color: "#00B0FF" },\n    ],`;
  const mathBlock = `\n    Mathematics: [\n` +
    `      { id: "c11-math-1", number: 1, name: "Sets", color: "#FF512F" },\n` +
    `      { id: "c11-math-2", number: 2, name: "Relations and Functions", color: "#00C6FF" },\n` +
    `      { id: "c11-math-3", number: 3, name: "Trigonometric Functions", color: "#7C4DFF" },\n` +
    `      { id: "c11-math-4", number: 4, name: "Complex Numbers and Quadratic Equations", color: "#FF9100" },\n` +
    `      { id: "c11-math-5", number: 5, name: "Linear Inequalities", color: "#00E676" },\n` +
    `      { id: "c11-math-6", number: 6, name: "Permutations and Combinations", color: "#FF007F" },\n` +
    `      { id: "c11-math-7", number: 7, name: "Binomial Theorem", color: "#2979FF" },\n` +
    `      { id: "c11-math-8", number: 8, name: "Sequences and Series", color: "#FDC830" },\n` +
    `      { id: "c11-math-9", number: 9, name: "Straight Lines", color: "#E040FB" },\n` +
    `      { id: "c11-math-10", number: 10, name: "Conic Sections", color: "#00E5FF" },\n` +
    `      { id: "c11-math-11", number: 11, name: "Introduction to Three Dimensional Geometry", color: "#FF3D00" },\n` +
    `      { id: "c11-math-12", number: 12, name: "Limits and Derivatives", color: "#00B0FF" },\n` +
    `      { id: "c11-math-13", number: 13, name: "Statistics", color: "#11998E" },\n` +
    `      { id: "c11-math-14", number: 14, name: "Probability", color: "#8E2DE2" },\n` +
    `    ],`;

  if (norm.includes(targetZoo)) {
    norm = norm.replace(targetZoo, targetZoo + mathBlock);
    console.log('Added Class 11 Mathematics to otherSubjectsData');
  } else {
    console.warn('Could not find targetZoo in chapters.ts');
  }
}

// 2. Add gradients for c11-math-1 through c11-math-14
if (!norm.includes('chapterId === "c11-math-1"')) {
  const gradTarget = `if (chapterId === "c12-math-13") return ["#11998E", "#38EF7D"]; // Probability`;
  const mathGradients = `\n\n  // Class 11 Mathematics (14 Chapters - Curated High Contrast Two-Stop Gradients)\n` +
    `  if (chapterId === "c11-math-1") return ["#FF512F", "#DD2476"]; // Sets\n` +
    `  if (chapterId === "c11-math-2") return ["#00C6FF", "#0072FF"]; // Relations and Functions\n` +
    `  if (chapterId === "c11-math-3") return ["#7C4DFF", "#536DFE"]; // Trigonometric Functions\n` +
    `  if (chapterId === "c11-math-4") return ["#FF9100", "#FF3D00"]; // Complex Numbers and Quadratic Equations\n` +
    `  if (chapterId === "c11-math-5") return ["#00E676", "#00B0FF"]; // Linear Inequalities\n` +
    `  if (chapterId === "c11-math-6") return ["#FF007F", "#E91E63"]; // Permutations and Combinations\n` +
    `  if (chapterId === "c11-math-7") return ["#2979FF", "#1565C0"]; // Binomial Theorem\n` +
    `  if (chapterId === "c11-math-8") return ["#FDC830", "#F37335"]; // Sequences and Series\n` +
    `  if (chapterId === "c11-math-9") return ["#E040FB", "#8E24AA"]; // Straight Lines\n` +
    `  if (chapterId === "c11-math-10") return ["#00E5FF", "#00838F"]; // Conic Sections\n` +
    `  if (chapterId === "c11-math-11") return ["#FF3D00", "#DD2476"]; // Introduction to Three Dimensional Geometry\n` +
    `  if (chapterId === "c11-math-12") return ["#00B0FF", "#0072FF"]; // Limits and Derivatives\n` +
    `  if (chapterId === "c11-math-13") return ["#11998E", "#38EF7D"]; // Statistics\n` +
    `  if (chapterId === "c11-math-14") return ["#8E2DE2", "#4A00E0"]; // Probability`;

  if (norm.includes(gradTarget)) {
    norm = norm.replace(gradTarget, gradTarget + mathGradients);
    console.log('Added Class 11 Math gradients');
  } else {
    console.warn('Could not find gradTarget in chapters.ts');
  }
}

// Restore original line endings
const finalContent = isCrlf ? norm.replace(/\n/g, '\r\n') : norm;
fs.writeFileSync(chaptersPath, finalContent, 'utf8');
console.log('chapters.ts updated successfully!');
