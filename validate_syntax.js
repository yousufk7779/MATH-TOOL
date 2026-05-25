try {
  const content = require("./client/data/content/c9-math-3.ts");
  console.log("Syntax OK");
} catch (e) {
  console.error("Syntax Error found:");
  console.error(e.message);
}
