
import json

with open("search_results.json", "r", encoding="utf-8") as f:
    results = json.load(f)

for res in results:
    if len(res.get('images', [])) > 0:
        print(f"{res['pid']}: {len(res['images'])} images")
