
"""
Fix specific broken lines in sci-phy-3.ts.
Lines with broken strings (missing closing quote): 196, 219, 227, 235, 254, 257
"""

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

# These are the 1-based line numbers with broken strings
# A broken string line ends with: </div>\r\n  (without closing ")
# instead of: </div>",\r\n
broken_lines = [196, 219, 227, 235, 254, 257]

fixes = 0
for line_num in broken_lines:
    idx = line_num - 1  # convert to 0-based
    line = lines[idx]
    stripped = line.rstrip('\r\n')
    
    # Check if this line ends with >, (typical broken string ending)
    # The line should end with </div>, but is missing the closing "
    # Pattern: the string opens with " somewhere but never closes
    
    # If line ends with >, then it's broken
    if stripped.endswith('>') or stripped.endswith('>,'):
        # Remove trailing > or >," and add closing quote properly
        if stripped.endswith('>'):
            # Missing ", at end
            fixed = stripped + '",'
        elif stripped.endswith('>,'):
            # Has >, but missing closing quote before the comma
            fixed = stripped[:-1] + '",'
        
        lines[idx] = fixed + '\r\n'
        fixes += 1
        print(f"Fixed line {line_num}: ends with ...{stripped[-30:]!r}")
    else:
        print(f"Line {line_num} ends with: ...{stripped[-30:]!r} - may already be fixed or different issue")

print(f"\nTotal fixes: {fixes}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(lines)

print("File written.")
