
import json
with open("search_results.json", "r", encoding="utf-8") as f:
    data = json.load(f)
with open("full_fragments.txt", "w", encoding="utf-8") as f:
    for d in data:
        f.write(f"{d['pid']}: {d['fragment']}\n")
