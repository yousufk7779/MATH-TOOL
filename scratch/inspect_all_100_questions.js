const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const text = fs.readFileSync(filePath, 'utf8');

// Match all question blocks
// Look for <div style="background: rgba(0,0,0,0.25)... or <h3 ...>QXX: ...</h3>
const qMatches = text.match(/Q\d+:[^<]*/g) || [];
console.log(`Total Question Headers found: ${qMatches.length}`);

// Let's inspect samples from each section:
console.log("\n--- SECTION A: MCQs (Sample Q1, Q10, Q20, Q25) ---");
[1, 10, 20, 25].forEach(num => {
  const reg = new RegExp(`<h3[^>]*>Q${num}:[\\s\\S]*?<\\/h3>([\\s\\S]*?)(?=<h3|$)`, 'i');
  const m = text.match(reg);
  if (m) {
    console.log(`\nQ${num}:`);
    console.log(m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 300));
  }
});

console.log("\n--- SECTION B: VSAs (Sample Q26, Q35, Q45, Q55) ---");
[26, 35, 45, 55].forEach(num => {
  const reg = new RegExp(`<h3[^>]*>Q${num}:[\\s\\S]*?<\\/h3>([\\s\\S]*?)(?=<h3|$)`, 'i');
  const m = text.match(reg);
  if (m) {
    console.log(`\nQ${num}:`);
    console.log(m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 300));
  }
});

console.log("\n--- SECTION C: SAs (Sample Q56, Q65, Q75, Q85) ---");
[56, 65, 75, 85].forEach(num => {
  const reg = new RegExp(`<h3[^>]*>Q${num}:[\\s\\S]*?<\\/h3>([\\s\\S]*?)(?=<h3|$)`, 'i');
  const m = text.match(reg);
  if (m) {
    console.log(`\nQ${num}:`);
    console.log(m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 300));
  }
});

console.log("\n--- SECTION D: LAs (Sample Q86, Q90, Q95, Q100) ---");
[86, 90, 95, 100].forEach(num => {
  const reg = new RegExp(`<h3[^>]*>Q${num}:[\\s\\S]*?<\\/h3>([\\s\\S]*?)(?=<h3|$)`, 'i');
  const m = text.match(reg);
  if (m) {
    console.log(`\nQ${num}:`);
    console.log(m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 300));
  }
});
