
import json

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

line_149 = lines[148] # 0-indexed
import re
match = re.search(r'src="(data:image/[^;]+;base64,[^"]+)"', line_149)
if match:
    existing_b64 = match.group(1)
    with open("search_results.json", "r", encoding="utf-8") as f:
        results = json.load(f)
    
    p50_docx = results[0]['images'][0] # Assuming P50 is first and has images
    print(f"Match: {existing_b64 == p50_docx}")
    if existing_b64 != p50_docx:
        print(f"Existing: {existing_b64[:30]}...")
        print(f"DOCX: {p50_docx[:30]}...")
else:
    print("No image on line 149")
