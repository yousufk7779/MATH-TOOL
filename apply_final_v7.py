
import json
import re
import os

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
MAP_PATH = "p_map.json"

with open(MAP_PATH, "r", encoding="utf-8") as f:
    docx_map = json.load(f)

with open(TS_PATH, "r", encoding="utf-8") as f:
    ts_lines = f.readlines()

def normalize(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

# Clean the file of existing P-tags
clean_lines = []
for line in ts_lines:
    if '<img' in line and 'alt="P' in line:
        continue
    clean_lines.append(line)


MAPPING = {
    51: "componentremainconstant",
    60: "usethedata",
    76: "schematicdiagram",
    81: "redrawthecircuit",
    97: "verysmall",
    100: "001001",
    106: "lampof100",
    110: "3125",
    144: "connectingtheminparallel",
    145: "connectingtheminseries",
    148: "toget4",
    154: "combinationis1",
    156: "2and3areinparallel",
    164: "electrickettle",
    182: "calculatedasfollows",
    221: "connectedtoeachother",
    268: "ratiooftheheat",
    282: "m2isgiven",
    288: "acrosstheresistoraregivenbelow",
    293: "plottingthevalues",
    302: "ohmslawasfollows",
    310: "usingohmslaw",
    316: "parallelcombination",
    322: "resistorsinseries",
    327: "itoget9",
    328: "iftworesistors",
    332: "itoget4",
    335: "equivalentresistance",
    342: "substituting",
    350: "flowingthrough",
    356: "seriescircuit",
    360: "coilsareconnected",
    365: "123", # 1, 2, 3
    368: "8w",
    377: "rating60w",
}


def get_image(p_idx):
    for p in docx_map:
        if p['p_idx'] == p_idx:
            return p['images'][0] if p['images'] else None
    return None

matches = {} # line_idx -> [pids]
for p_idx, frag in MAPPING.items():
    norm_frag = normalize(frag)
    found = False
    for i, line in enumerate(clean_lines):
        if norm_frag in normalize(line):
            if i not in matches: matches[i] = []
            matches[i].append(p_idx)
            found = True
            break
    if not found:
        print(f"FAILED TO FIND P{p_idx} (Frag: {norm_frag})")

# Apply
final_lines = clean_lines[:]
# Sort by line index descending
for i in sorted(matches.keys(), reverse=True):
    for p_idx in matches[i]:
        b64 = get_image(p_idx)
        if b64:
            img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
            final_lines.insert(i + 1, img_block)
            print(f"Inserted P{p_idx} at line {i+1}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(final_lines)
