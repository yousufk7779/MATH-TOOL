
import json

with open("search_results.json", "r", encoding="utf-8") as f:
    results = json.load(f)

for res in results:
    pid = res.get('pid')
    status = res.get('status', 'FOUND')
    img_count = len(res.get('images', []))
    p_idx = res.get('p_idx', 'N/A')
    print(f"{pid} (p{p_idx}): {status}, Images: {img_count}")
