
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
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text.lower()

# 1. CLEANING: Remove existing image blocks (we will re-add them)
# To avoid removing intended manual images, we'll only remove those with alt="PXX"
clean_lines = []
for line in ts_lines:
    if '<img' in line and 'alt="P' in line:
        continue
    # Handle the trailing comma from lines before removed images
    if clean_lines and clean_lines[-1].strip().endswith('",') and line.strip() == '':
         # Simple cleanup
         pass
    clean_lines.append(line)


mapping = [
    (51, "electricalcomponentremainconstant"),
    (60, "usedataintable"),
    (76, "schematicdiagramofcircuit"),
    (81, "redrawcircuitofquestion1"),
    (97, "since1/106isverysmall"),
    (100, "1+0.001+0.000001"),
    (106, "electriclampof100"),
    (110, "500/16=31.25"),
    (144, "connectingthemInparallel"),
    (145, "connectingthemInseries"),
    (148, "tworesistorsof2"),
    (154, "sametotalresistance"),
    (156, "2and3areInparallel"),
    (164, "handleofanelectrickettle"),
    (182, "amountofcurrentcanbecalculated"),
    (221, "connectedtoeachotherInparallel"),
    (268, "ratiooftheheatproduced"),
    (282, "areaofcross-sectionm2isgiven"),
    (288, "acrosstheresistoraregivenbelow"),
    (293, "differentvaluesofcurrentfordifferent"),
    (302, "usingohm’slawasfollows"),
    (310, "usingohm’slaw,"),
    (316, "equivalentresistanceofparallelcombination"),
    (322, "connectallthethreeresistorsInseries"),
    (327, "case(i)"),
    (328, "iftworesistorsareconnectedInparallel"),
    (332, "case(ii)"),
    (335, "hencetheequivalentresistance"),
    (342, "substitutingthevalues,weget"),
    (350, "flowingthrougheachcoil"),
    (356, "throughtheseriescircuitiscalculated"),
    (360, "coilsareconnectedInparallel"),
    (365, "1+2=3"),
    (368, "calculatethepowerconsumed"),
    (377, "drawnbythebulbofrating60w"),
]


def get_image(p_idx):
    for p in docx_map:
        if p['p_idx'] == p_idx:
            return p['images'][0] if p['images'] else None
    return None

applied = set()
final_lines = clean_lines[:]

for p_idx, frag in mapping:
    norm_frag = normalize(frag)
    b64 = get_image(p_idx)
    if not b64:
        print(f"No image for P{p_idx}")
        continue
    
    found_idx = -1
    for i, line in enumerate(final_lines):
        if norm_frag in normalize(line):
            found_idx = i
            # If it's sp3-mcq-3, skip (line 52-ish)
            if 'sp3-mcq' in "".join(final_lines[max(0, i-10):i]):
                 continue
            break
    
    if found_idx != -1:
        img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
        
        # Insert after </div> if the line is a string tag
        # If the line ends with ", it's likely the end of the question string or solution element
        match_line = final_lines[found_idx].rstrip()
        if match_line.endswith('",') or match_line.endswith('",'):
             pass
        
        final_lines.insert(found_idx + 1, img_block)
        applied.add(p_idx)
        print(f"Applied P{p_idx} after line {found_idx + 1}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(final_lines)


with open("patch_results.txt", "w", encoding="utf-8") as f_res:
    f_res.write(f"Summary: Applied {len(applied)} images.\n")
    missing_pids = [p[0] for p in mapping if p[0] not in applied]
    f_res.write(f"Missing PIDs: {missing_pids}\n")
    f_res.write("Applied PIDs:\n")
    for pid in sorted(list(applied)):
        f_res.write(f"P{pid}\n")

