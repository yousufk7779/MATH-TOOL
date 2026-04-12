
"""
Comprehensive fix for all broken string literals in sci-phy-3.ts.
The problem: strings end with </div>, instead of </div>",
Each broken string ends with:  </div>,
But should end with:           </div>",

We need to find ALL occurrences of:
  "some string</div>,
  "another field":
And fix them to:
  "some string</div>",
  "another field":
"""
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

fixes = 0
fixed_lines = []

for i, line in enumerate(lines):
    # Check if line ends with </div>, (missing closing quote)
    # Pattern: the content of a string value, ending with </div>, 
    # where the comma is OUTSIDE the string (missing the closing quote)
    stripped = line.rstrip('\r\n')
    
    # Detect: a line that has content ending with </div>, at end (with possible whitespace)
    # but doesn't have a closing " before the comma
    # Pattern: something like: "text</div>,
    # This occurs when the line ends with > followed by , and the string never closed
    
    # More precise: find lines where we have an unclosed string followed by comma
    # The pattern is: ends with "</div>," but really it should be "</div>","
    # Looking for: text that ends with >,\r\n where the string is still open
    
    # Simple heuristic: if the stripped line ends with ",", check if it's a broken string
    # A broken string line: opens with a quote " somewhere, contains HTML, ends with </div>,
    # This means the LAST character before \r\n is , and before that is >
    
    if stripped.endswith('>,') or stripped.endswith('</div>,'):
        # Check if this looks like a broken string value (has an opening quote)
        # Count unmatched quotes to determine if string is open
        # Simpler: look for the pattern where the content contains </div> and ends with ,
        # and the line ahead starts with a property key
        
        # Look at the NEXT line to determine context
        if i + 1 < len(lines):
            next_line = lines[i + 1].strip()
            # If the next line starts a new JSON property, this line's string is broken
            if (next_line.startswith('"') and 
                (': "' in next_line or '": [' in next_line or '": {' in next_line or
                 next_line == '],' or next_line == ']')):
                # This broken line ends with , - we need to add a closing " before the ,
                if stripped.endswith(','):
                    fixed = stripped[:-1] + '",'
                    fixed_lines.append(fixed + '\r\n')
                    fixes += 1
                    print(f"Fixed line {i+1}: ...{stripped[-50:]}")
                    continue
    
    fixed_lines.append(line)

print(f"\nTotal fixes: {fixes}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(fixed_lines)

print("File written.")
