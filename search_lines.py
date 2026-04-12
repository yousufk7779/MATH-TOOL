
import sys

search_terms = ["battery of three cells", "sp3-it-3", "resistance of an electrical component", "determined using Ohm"]
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        for term in search_terms:
            if term.lower() in line.lower():
                print(f"MATCH '{term}' on line {i}: {line.strip()[:100]}")
