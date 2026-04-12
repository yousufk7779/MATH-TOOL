
import json

with open("search_results.json", "r", encoding="utf-8") as f:
    data = json.load(f)


for item in data:
    pid = item.get('pid', 'N/A')
    fragment = item.get('fragment', 'N/A')
    images = item.get('images', [])
    img_count = len(images)
    print(f"{pid} | {img_count} images | Fragment: {fragment[:100]}...")

