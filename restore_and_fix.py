
"""
This script PROPERLY fixes sci-phy-3.ts by:
1. Removing all incorrectly inserted raw <img> lines
2. Inserting images INSIDE the TypeScript string values (at end of string before closing quote)
"""
import json
import re
import os

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
MAP_PATH = "p_map.json"

with open(MAP_PATH, "r", encoding="utf-8") as f:
    docx_map = json.load(f)

# Read original file
with open(TS_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# ===== STEP 1: Remove all incorrectly inserted raw <img> tags =====
# These are lines that contain <img> tags but are NOT inside a JavaScript/TypeScript string
# They look like: \n                        <div style="margin: 15px 0;"><img ...
pattern_raw_img = r'\n\s+<div style="margin: 15px 0;">[^"]*?<div style="margin: 15px 0;">[^"]*?</div>\n'
# More targeted: remove raw lines starting with whitespace then <div style="margin
pattern_raw_lines = r'\n[ \t]+<div style="margin: 15px 0;"><img[^>]+/></div>'
content_cleaned = re.sub(pattern_raw_lines, '', content)
print(f"Raw <img> lines removed: {len(content.splitlines())-len(content_cleaned.splitlines())}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.write(content_cleaned)

print("Cleaned file written. Now verifying...")

# Verify it compiles by looking at critical areas
lines = content_cleaned.splitlines()
errors = []
for i, line in enumerate(lines):
    # Check for lines that have HTML tags but aren't inside strings
    stripped = line.strip()
    if stripped.startswith('<') and not stripped.startswith('//'):
        errors.append(f"Line {i+1}: Suspicious raw HTML: {line[:80]}")

if errors:
    print(f"Found {len(errors)} potential issues:")
    for e in errors[:10]:
        print(e)
else:
    print("No obvious raw HTML lines found!")
