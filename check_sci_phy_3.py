import re
import json
import sys
import io

# Force UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ts_file = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(ts_file, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Load docx summary to get fragments
with open(r"d:\All NCERT SOLUTIONS\docx_summary.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

image_paragraphs = []
for line in lines:
    m = re.match(r"(P\d+): \[(\d+) images\] (.*)", line)
    if m:
        p_id = m.group(1)
        img_count = int(m.group(2))
        text = m.group(3).strip()
        if img_count > 0:
            image_paragraphs.append((p_id, text))

print(f"Total image paragraphs: {len(image_paragraphs)}")

# Find existing images in TS and their alt text/nearby text
# This is hard to automate perfectly, so let's just search for fragments

for p_id, text in image_paragraphs:
    # Use a small fragment to avoid exact match issues with escaping
    fragment = text[:40].replace('"', '\\"').replace("’", "’").replace("Ω", "&Omega;")
    if not fragment:
        print(f"{p_id}: Empty text")
        continue
    
    # Try searching for fragment in TS
    # We ignore the actual <img> tags for now and look for the text it should follow
    found = ts_content.find(fragment)
    if found != -1:
        # Check if an <img> with this P_ID as alt is already nearby
        if f'alt=\\"{p_id}\\"' in ts_content:
             print(f"{p_id}: Found text at {found}, <img> with alt={p_id} exists")
        else:
             # Look for any img nearby
             nearby = ts_content[found:found+500]
             if "<img" in nearby:
                 print(f"{p_id}: Found text at {found}, some <img> nearby")
             else:
                 print(f"{p_id}: Found text at {found}, NO <img> nearby")
    else:
        # Try a different fragment if it was too specific
        fragment2 = text[-30:].replace('"', '\\"').replace("’", "’").replace("Ω", "&Omega;")
        found2 = ts_content.find(fragment2)
        if found2 != -1:
             print(f"{p_id}: Found text (end) at {found2}")
        else:
             print(f"{p_id}: Text not found: {text[:50]}...")
