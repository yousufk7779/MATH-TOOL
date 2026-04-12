
import json

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Select a subset of paragraphs to process
targets = [
    "P50", "P75", "P80", "P96", "P99", "P105", "P109", "P143", "P144", "P147", "P153", "P155", "P163", "P181", 
    "P220", "P267", "P281", "P287", "P292", "P301", "P309", "P315", "P321", "P326", "P327", "P331", "P334", 
    "P341", "P349", "P355", "P359", "P364", "P367", "P376"
]

out_file = r"d:\All NCERT SOLUTIONS\image_html_blocks.txt"
with open(out_file, "w", encoding="utf-8") as out:
    for t in targets:
        if t in data:
            for i, img in enumerate(data[t]["images"]):
                block = f'<div style="margin: 15px 0;"><img src="{img}" alt="Solution Diagram {t}" style="width: 100%; max-width: 500px; display: block; margin: 10px auto;" /></div>'
                out.write(f"--- {t}_{i} ---\n")
                out.write(block + "\n")

print(f"Generated HTML blocks for {len(targets)} paragraphs in {out_file}")
