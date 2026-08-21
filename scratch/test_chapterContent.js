try {
  console.log("Loading chapterContent.ts...");
  require('../client/data/chapterContent');
  console.log("Successfully loaded chapterContent.ts!");
} catch (err) {
  console.error("❌ ERROR LOADING chapterContent.ts:", err);
}
