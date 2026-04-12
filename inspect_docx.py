
import json

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

target_text = "constant while the potential difference across the two ends"
for i, p in enumerate(results):
    if target_text.lower() in p['text'].lower():
        print(f"FOUND TARGET AT P{p['p_idx']}")
        for j in range(max(0, i-2), min(len(results), i+10)):
            curr = results[j]
            imgs = len(curr['images'])
            print(f"P{curr['p_idx']} ({imgs} imgs): {curr['text'][:100]}")
        break
