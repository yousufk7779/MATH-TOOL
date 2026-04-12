
import json
import os

ts_path = r"client/data/content/sci-phy-3.ts"
search_results_path = "search_results.json"

if not os.path.exists(ts_path):
    print(f"TS file not found: {ts_path}")
    exit(1)

with open(ts_path, "r", encoding="utf-8") as f:
    ts_content = f.read()

with open(search_results_path, "r", encoding="utf-8") as f:
    search_results = json.load(f)

print("Checking missing PIDs...")
for item in search_results:
    pid = item['pid']
    if f'alt="{pid}"' not in ts_content:
        print(pid)
