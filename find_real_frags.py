
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

def normalize(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

search_terms = {
    60: "Use the data",
    81: "ammeter",
    148: "4 &Omega;",
    154: "1 &Omega;",
    156: "2 &Omega; and 3 &Omega;",
    164: "electrickettle",
    221: "parallel",
    268: "ratio",
    282: "formula",
    293: "plotting",
    302: "ohm",
    310: "ohm",
    316: "equivalent",
    322: "series",
    328: "parallel",
    335: "equivalent",
    342: "substituting",
    350: "flowing",
    356: "series",
    360: "parallel",
    365: "3 &Omega;",
    368: "8 W",
    377: "rating",
}

for pid, term in search_terms.items():
    print(f"--- P{pid} (Searching for '{term}') ---")
    count = 0
    for i, line in enumerate(lines):
        if term.lower() in line.lower():
            print(f"Line {i+1}: {line.strip()[:100]}")
            count += 1
            if count > 5: break
