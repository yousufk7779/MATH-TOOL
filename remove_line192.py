
"""
Remove orphaned image line 192 in sci-phy-3.ts
"""

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Line 192 (0-indexed: 191) is the orphaned image string
# It was inserted incorrectly between "id" and "number" fields
line_to_remove = 191  # 0-indexed

print(f"Line 192 starts with: {lines[line_to_remove][:80]!r}")
print(f"Total lines before: {len(lines)}")

# Remove line 192
del lines[line_to_remove]

print(f"Total lines after: {len(lines)}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(lines)

print("File written.")
