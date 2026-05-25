const fs = require("fs");
const glob = require("glob");

const files = [
  "data/content/c8-math-1.ts",
  "data/content/c8-math-2.ts",
  "data/content/c8-math-3.ts",
  "data/content/c8-math-4.ts",
  "data/content/c8-math-5.ts",
  "data/content/c8-math-6.ts",
  "data/content/c8-math-7.ts",
  "data/content/c8-math-8.ts",
];

files.forEach((file) => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, "utf8");

  // Strip existing font-size declarations from q-text, q-subtext, sol-step, sol-box
  content = content.replace(/\.q-text\s*\{[^}]*\}/g, (match) =>
    match.replace(/font-size:\s*\d+px;?\s*/g, ""),
  );
  content = content.replace(/\.q-subtext\s*\{[^}]*\}/g, (match) =>
    match.replace(/font-size:\s*\d+px;?\s*/g, ""),
  );
  content = content.replace(/\.sol-step\s*\{[^}]*\}/g, (match) =>
    match.replace(/font-size:\s*\d+px;?\s*/g, ""),
  );
  content = content.replace(/\.sol-box\s*\{[^}]*\}/g, (match) =>
    match.replace(/font-size:\s*\d+px;?\s*/g, ""),
  );

  // To avoid adding the rule multiple times if script is run twice, we clean it up first
  content = content.replace(
    /\.q-text,\s*\.q-subtext,\s*\.sol-step,\s*\.sol-box\s*\{\s*font-size:\s*16px;\s*\}\s*/g,
    "",
  );

  // Inject the universal 16px rule for Q&A right before </style>
  const newRule =
    "    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }\n  </style>";
  content = content.replace(/<\/style>/g, newRule);

  fs.writeFileSync(file, content, "utf8");
  console.log("Normalized font sizes in " + file);
});
