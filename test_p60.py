
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

def normalize(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

print(f"L167 Norm: {normalize(lines[166])}")
print(f"Term: usethedataintable")
print(f"Match: {'usethedataintable' in normalize(lines[166])}")
