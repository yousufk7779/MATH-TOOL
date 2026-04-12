
import json
import re

# Load images
with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

# Load ts content
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Load image paragraphs info
image_paragraphs = []
with open(r"d:\All NCERT SOLUTIONS\image_paragraphs.txt", "r", encoding="utf-8") as f:
    for line in f:
        if line.strip():
            parts = line.split(":", 1)
            p_id = parts[0].split(" ")[0]
            text = parts[1].strip()
            image_paragraphs.append((p_id, text))

def find_id(text):
    if not text:
        return "N/A"
    # Search for text in ts
    # Clean text for search
    search_text = text.replace("Ω", "&Omega;").replace("'", "’")
    # Take a mid-length snippet that is likely unique
    snippet = search_text[:60]
    
    idx = ts_content.find(snippet)
    if idx == -1:
        # try without &Omega;
        snippet2 = text.replace("Ω", "Ω").replace("'", "’")[:60]
        idx = ts_content.find(snippet2)
    
    if idx != -1:
        id_matches = list(re.finditer(r'"id": "([^"]+)"', ts_content[:idx]))
        if id_matches:
            return id_matches[-1].group(1)
            
    return "NOT FOUND"

print("P_ID | Detected ID | Snippet")
for p_id, text in image_paragraphs:
    det_id = find_id(text)
    print(f"{p_id} | {det_id} | {text[:50]}")
