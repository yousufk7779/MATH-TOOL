
import json

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

with open("q4_output.txt", "w", encoding="utf-8") as out:
    for i, p in enumerate(results):
        if "three resistors of resistances 2" in p['text']:
            out.write(f"FOUND QUESTION AT P{p['p_idx']}\n")
            for j in range(i, min(i+15, len(results))):
                 curr = results[j]
                 imgs = f"[{len(curr['images'])} imgs]" if curr['images'] else ""
                 out.write(f"P{curr['p_idx']} {imgs}: {curr['text']}\n")
            break
