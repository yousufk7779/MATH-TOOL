
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

def normalize(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

term = "usethedataintable"
found = False
for i, line in enumerate(lines):
    if term in normalize(line):
        print(f"MATCH AT LINE {i+1}: {line.strip()[:50]}")
        found = True
        break
if not found:
    print("NO MATCH FOUND")
