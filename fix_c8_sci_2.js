const fs = require("fs");
const path = require("path");

const filePath = "client/data/content/c8-sci-2.ts";
let content = fs.readFileSync(filePath, "utf8");

// The problematic part is the Base64 string in Q9.
// It starts with <img src='data:image/png;base64, and ends before the style or closing tag.
// Actually, it looks like it's a huge mess of spaces and potentially some control characters.

// Let's find the start of the image src
const startMarker = "<img src='data:image/png;base64,";
const endMarker = "' style='max-width: 100%;";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let b64Part = content.substring(startIndex + startMarker.length, endIndex);

  // Remove spaces, newlines, and any weird characters like
  // Note:  often represents a Byte Order Mark or some non-UTF8 sequence that got mangled.
  // We'll clean it up to keep only alphanumeric and standard Base64 chars (+ / =).
  let cleanedB64 = b64Part.replace(/[^A-Za-z0-9+/=]/g, "");

  let newContent =
    content.substring(0, startIndex + startMarker.length) +
    cleanedB64 +
    content.substring(endIndex);

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log("Successfully cleaned Base64 string in c8-sci-2.ts");
} else {
  console.error("Could not find Base64 string markers in c8-sci-2.ts");
}
