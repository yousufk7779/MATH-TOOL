
import json
import re

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "r", encoding="utf-8") as f:
    ts_content = f.read()

with open("search_results.json", "r", encoding="utf-8") as f:
    search_results = json.load(f)

missing = []
for item in search_results:
    pid = item['pid']
    # Check if this PID is mentioned as alt="PX" in the TS file
    if f'alt="{pid}"' not in ts_content:
        missing.append(pid)

print(f"Missing PIDs in sci-phy-3.ts: {missing}")
