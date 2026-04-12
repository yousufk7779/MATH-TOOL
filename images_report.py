
import json

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

with open("images_report.txt", "w", encoding="utf-8") as out:
    for p in results:
        if p['images']:
            out.write(f"--- P{p['p_idx']} --- [HAS {len(p['images'])} IMAGES]\n")
            out.write(f"TEXT: {p['text']}\n")
            # Write a bit of b64 for each
            for i, img in enumerate(p['images']):
                out.write(f"  IMAGE {i}: {img[:50]}...\n")
            out.write("\n")
