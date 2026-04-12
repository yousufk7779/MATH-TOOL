
import re

ts_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(ts_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Images found in sci-phy-3.ts:")
for i, line in enumerate(lines):
    match = re.search(r'alt="(P\d+)"', line)
    if match:
        print(f"Line {i+1}: {match.group(1)}")
    else:
        # Check for other alts like "Solution Diagram"
        match = re.search(r'alt="([^"]+)"', line)
        if match and "<img" in line:
            print(f"Line {i+1}: {match.group(1)}")
