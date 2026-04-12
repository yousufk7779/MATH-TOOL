
import json
import sys

# Set encoding to avoid UnicodeEncodeError on Windows console
if sys.stdout.encoding != 'utf-8':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

target_pids = [
    50, 59, 80, 96, 99, 105, 109, 143, 144, 147, 153, 155, 163, 181, 220, 267, 
    281, 287, 292, 301, 309, 315, 321, 326, 327, 331, 334, 341, 349, 355, 359, 
    364, 367, 376
]

with open("p_map.json", "r", encoding="utf-8") as f:
    results = json.load(f)

extracted = {}
for p in results:
    if p['p_idx'] in target_pids:
        extracted[f"P{p['p_idx']}"] = {
            'text': p['text'],
            'images': p['images']
        }

for pid in target_pids:
    key = f"P{pid}"
    if key in extracted:
        data = extracted[key]
        img_count = len(data['images'])
        if img_count > 0:
            print(f"{key}: [Images: {img_count}]")
        else:
            # print(f"{key}: [No image]")
            pass
    else:
        print(f"P{pid}: NOT FOUND")
