
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
    text = re.sub(r'\s+', '', text).strip()
    return text.lower()

clean_lines = []
for line in ts_lines:
    if '<img' in line and 'alt="P' in line:
        continue
    clean_lines.append(line)

# Multi-fragment mapping


mapping = [
    (51, ["componentremainconstant"]),
    (60, ["usethedataintable"]),
    (76, ["schematicdiagram"]),
    (81, ["redrawthecircuit"]),
    (97, ["since1/106isverysmall"]),
    (100, ["001001", "1.001001"]),
    (106, ["electriclampof100"]),
    (110, ["500/16=31.25"]),
    (144, ["connectingthemInparallel"]), # sp3-e-4
    (145, ["connectingthemInseries"]),   # sp3-e-4
    (148, ["toget4"]), # sp3-e-5 (a)
    (154, ["combinationis1"]), # sp3-e-5 (b)
    (156, ["2and3areInparallel"]), # sp3-e-5 (b)
    (164, ["electrickettle"]), # sp3-e-11
    (182, ["calculatedasfollows"]), # sp3-e-12
    (221, ["connectedtoeachother"]), # sp3-e-13
    (268, ["ratiooftheheat"]), # sp3-e-14
    (282, ["m2isgiven"]), # sp3-e-16
    (288, ["acrosstheresistoraregivenbelow"]), # sp3-e-7
    (293, ["differentvaluesofcurrent"]), # sp3-e-7
    (302, ["usingohm’slawa"]), # sp3-e-8
    (310, ["usingohm’slaw,"]), # sp3-e-9
    (316, ["parallelcombination"]), # sp3-e-10
    (322, ["connectallthethree"]), # sp3-e-11
    (327, ["itoget9"]), # sp3-e-11
    (328, ["iftworesistors"]), # sp3-e-11
    (332, ["itoget4"]), # sp3-e-11
    (335, ["equivalentresistance"]), # sp3-e-11
    (342, ["substitutingthevalues"]), # sp3-e-12
    (350, ["flowingthrough"]), # sp3-e-13 (a)
    (356, ["seriescircuitiscalculated"]), # sp3-e-13 (b)
    (360, ["coilsareconnected"]), # sp3-e-13 (c)
    (365, ["1+2=3", "1&Omega;+2&Omega;=3&Omega;"]), # sp3-e-14
    (368, ["calculatethepowerconsumed"]), # sp3-e-15
    (377, ["drawingbythebulb", "rating60w"]), # sp3-e-17
]



def get_image(p_idx):
    for p in docx_map:
        if p['p_idx'] == p_idx:
            return p['images'][0] if p['images'] else None
    return None

applied = set()
final_lines = clean_lines[:]

# Find MCQ end to avoid patching MCQs
exercise_line = -1
for i, line in enumerate(final_lines):
    if '"exercises": [' in line:
        exercise_line = i
        break


for p_idx, frags in mapping:
    b64 = get_image(p_idx)
    if not b64: continue
    
    found_idx = -1
    for frag in frags:
        norm_frag = normalize(frag)
        for i, line in enumerate(final_lines):
            # NO SKIP - trust the fragments
            if norm_frag in normalize(line):
                found_idx = i
                break
        if found_idx != -1: break

    
    if found_idx != -1:
        img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
        final_lines.insert(found_idx + 1, img_block)
        applied.add(p_idx)
        print(f"Applied P{p_idx}")

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(final_lines)

with open("patch_results_final.txt", "w", encoding="utf-8") as f_res:
    f_res.write(f"Summary: Applied {len(applied)} images.\n")
    missing_pids = [p[0] for p in mapping if p[0] not in applied]
    f_res.write(f"Missing PIDs: {missing_pids}\n")
