
import json

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

found_p44 = False
for p in results:
    if p['p_idx'] == 44:
        found_p44 = True
    if found_p44:
        if p['images']:
            print(f"NEXT IMAGE FOUND AT P{p['p_idx']}: {p['text'][:50]}... ({len(p['images'])} images)")
            # print(p['images'][0][:50])
            break
