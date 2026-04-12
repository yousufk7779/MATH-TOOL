
import json
with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

for k, v in images.items():
    imgs = v.get("images", [])
    if imgs:
        print(f"{k}: {len(imgs)} images, first len {len(imgs[0]) if imgs else 0}")
    else:
        print(f"{k}: No images")
