
import json

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    data = json.load(f)

p_id = "P59"
if p_id in data:
    img = data[p_id]["images"][0]
    print(f"{p_id} (len {len(img)}): {img[:50]}...{img[-50:]}")
