
import json
import re

with open("search_results.json", "r", encoding="utf-8") as f:
    results = json.load(f)

# Get P50 images from search_results
p50_images = []
for res in results:
    if res.get('pid') == 'P50':
        p50_images = res.get('images', [])
        break

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Find the image at line 149 (sp3-it-2-3 solution)
# Since I don't have exact line matching in python easily without readlines, 
# I'll search for the first image after "Let the resistance of an electrical component remain constant"
match = re.search(r'Let the resistance of an electrical component remain constant.*?<img src="(data:image/[^;]+;base64,[^"]+)"', content, re.DOTALL)
if match:
    existing_b64 = match.group(1)
    print(f"Existing image (start): {existing_b64[:100]}...")
    if p50_images:
        new_b64 = p50_images[0]
        print(f"DOCX image (start): {new_b64[:100]}...")
        if existing_b64 == new_b64:
            print("MATCH! Existing image is correct.")
        else:
            print("NO MATCH! Existing image might be wrong or from a different source.")
    else:
         print("No image found in DOCX for P50")
else:
    print("Could not find image in sci-phy-3.ts for P50 area")
