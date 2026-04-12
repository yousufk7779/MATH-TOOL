
"""
Fix all broken string literals in sci-phy-3.ts caused by previous incorrect image insertions.
The problem: question/solution strings end with </div>, instead of </div>",
Also: some strings with multi-line content from raw insertions need to be cleaned up.
"""
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(TS_PATH, "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

# Fix 1: Any line ending with </div>, (where the , is at the end of a line, 
# but should be </div>", before we have a newline + key-value pair)
# Pattern: a JSON string that is missing its closing quote
# Specifically: "key": "...text...</div>,
# Should be:    "key": "...text...</div>",

# Fix broken patterns like: </div>,\n    "solution":
# or </div>,\r\n    "solution":
fixed = re.sub(
    r'</div>,(\r?\n(\s+)"(?:solution|answer|number|id)\s*":)',
    r'</div>",\1',
    content
)

count = content.count('</div>,') - fixed.count('</div>,')
print(f"Fixed {count} broken </div>, occurrences")

content = fixed

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Written. File size: {len(content)} bytes (was {original_len})")
