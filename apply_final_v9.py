
import json
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
MAP_PATH = "p_map.json"

with open(MAP_PATH, "r", encoding="utf-8") as f:
    docx_map = json.load(f)

with open(TS_PATH, "r", encoding="utf-8") as f:
    ts_lines = f.readlines()

def normalize(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

# Clean existing P-tags
clean_lines = []
for line in ts_lines:
    if '<img' in line and 'alt="P' in line:
        continue
    clean_lines.append(line)

# Map Q_ID to line range
q_ranges = {}
current_id = None
start_idx = 0
for i, line in enumerate(clean_lines):
    # Match id in different formats
    match = re.search(r'"id":\s*"([^"]+)"', line)
    if match:
        if current_id:
            q_ranges[current_id] = (start_idx, i)
        current_id = match.group(1)
        start_idx = i
if current_id:
    q_ranges[current_id] = (start_idx, len(clean_lines))

# Final Mapping: (PID, Q_ID, [Fragments])
MAPPING = [
    (51,  "sp3-it-2-3", ["constant"]),
    (60,  "sp3-it-2-5", ["usetheda"]),
    (76,  "sp3-it-3-1", ["schematicdiagram"]),
    (81,  "sp3-it-3-2", ["redrawthecircuit"]),
    (97,  "sp3-it-4-1", ["verysmall"]),
    (100, "sp3-it-4-1", ["001001"]),
    (106, "sp3-it-4-2", ["lampof100"]),
    (110, "sp3-it-4-2", ["3125"]),
    (144, "sp3-ex-4",   ["highest"]),
    (145, "sp3-ex-4",   ["lowest"]),
    (148, "sp3-ex-5",   ["toget4"]),
    (154, "sp3-ex-5",   ["combinationis1"]),
    (156, "sp3-ex-5",   ["2and3areinparallel"]),
    (182, "sp3-ex-12",  ["substituting", "v220v"]),
    (221, "sp3-ex-13",  ["connectedtoeachother"]),
    (282, "sp3-ex-16",  ["m2isgiven"]),
    (288, "sp3-ex-7",   ["acrosstheresistor"]),
    (293, "sp3-ex-7",   ["plottingthevalues"]),
    (316, "sp3-ex-10",  ["parallelcombination"]),
    (327, "sp3-ex-11",  ["itoget9"]),
    (328, "sp3-ex-11",  ["iftworesistors"]),
    (332, "sp3-ex-11",  ["itoget4"]),
    (335, "sp3-ex-11",  ["equivalentresistance"]),
    (342, "sp3-ex-12",  ["substituting"]),
    (350, "sp3-ex-13",  ["flowingthrougheachcoil"]),
    (356, "sp3-ex-13",  ["seriescircuitiscalculated"]),
    (360, "sp3-ex-13",  ["coilsareconnected"]),
    (365, "sp3-ex-14",  ["123"]), # 1, 2, 3
    (368, "sp3-ex-15",  ["powerin2"]),
    (377, "sp3-ex-17",  ["rating60w"]),
]

def get_image(p_idx):
    for p in docx_map:
        if p['p_idx'] == p_idx:
            return p['images'][0] if p['images'] else None
    return None

matches = {} # line_idx -> [pids]
applied_set = set()

for p_idx, q_id, frags in MAPPING:
    if q_id not in q_ranges:
        print(f"NOT FOUND Q_ID: {q_id} for P{p_idx}")
        continue
    
    start, end = q_ranges[q_id]
    found = False
    for frag in frags:
        norm_frag = normalize(frag)
        for i in range(start, end):
            if norm_frag in normalize(clean_lines[i]):
                if i not in matches: matches[i] = []
                matches[i].append(p_idx)
                applied_set.add(p_idx)
                found = True
                break
        if found: break
    
    if not found:
         print(f"FAIL P{p_idx} in {q_id}")

final_lines = clean_lines[:]
for i in sorted(matches.keys(), reverse=True):
    for p_idx in sorted(matches[i], reverse=True):
        b64 = get_image(p_idx)
        if b64:
            img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
            final_lines.insert(i + 1, img_block)
            print(f"Inserted P{p_idx} after line {i+1}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(final_lines)
print(f"Applied {len(applied_set)} images.")
