
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
    # Remove all non-alphanumeric characters and lowercase
    return re.sub(r'[^a-z0-9]', '', text.lower())



clean_lines = []
for line in ts_lines:
    if '<img' in line and 'alt="P' in line:
        continue
    clean_lines.append(line)

final_lines = clean_lines[:]

# Mapping: PID -> [Fragments]
# Fragments should be short and unique
MAPPING = {
    51: ["componentremainconstant"],
    60: ["dataintable"],
    76: ["schematicdiagram"], # sp3-it-3-1
    81: ["redrawcircuitofquestion1"], # sp3-it-3-2 sol
    97: ["verysmall"], # sp3-it-4-1 sol a
    100: ["001001"], # sp3-it-4-1 sol b
    106: ["electriclampof100"], # sp3-it-4-2
    110: ["500/16=31.25"], # sp3-it-4-2 sol
    144: ["connectingtheminparallel"], # exercise Q4
    145: ["connectingtheminseries"], # exercise Q4
    148: ["combinationis4"], # exercise Q5 (a)
    154: ["combinationis1"], # exercise Q5 (b)
    156: ["2and3areinparallel"], # exercise Q5 (b) sol
    164: ["handleofanelectrickettle"], # exercise Q11 sol
    182: ["canbecalculatedasfollows"], # exercise Q12 sol
    221: ["connectedtoeachotherinparallel"], # exercise Q13 sol
    268: ["ratiooftheheatproduced"], # exercise Q14 sol
    282: ["m2isgivenbytheformula"], # exercise Q16 sol
    288: ["acrosstheresistoraregivenbelow"], # exercise Q7 table
    293: ["differentvaluesofcurrentfordifferentvalue"], # exercise Q7 graph
    302: ["usingohm’slawasfollows"],
    310: ["now,usingohm’slaw,"],
    316: ["equivalentresistanceofparallelcombination"],
    322: ["connectallthethreeresistorsinseries"],
    327: ["itoget9"], # Case (i) Exercise 11
    328: ["iftworesistorsareconnectedinparallel"],
    332: ["itoget4"], # Case (ii) Exercise 11
    335: ["hencetheequivalentresistance"],
    342: ["substitutingthevalues,weget"],
    350: ["flowingthrougheachcoil"],
    356: ["throughtheseriescircuitiscalculated"],
    360: ["coilsareconnectedinparallel"],
    365: ["1+2=3", "1&omega;+2&omega;=3&omega;"],
    368: ["calculatethepowerconsumed"],
    377: ["drawnbythebulbof", "drawnbythebulbofrating60w"],
}

def get_image(p_idx):
    for p in docx_map:
        if p['p_idx'] == p_idx:
            return p['images'][0] if p['images'] else None
    return None


# 2. MATCHING (Single pass)
matches = {} # p_idx -> line_idx
for i, line in enumerate(final_lines):
    norm_line = normalize(line)
    for p_idx, frags in MAPPING.items():
        if p_idx in matches: continue
        for frag in frags:
            if normalize(frag) in norm_line:
                matches[p_idx] = i
                break


# 3. APPLYING (In reverse order of line index to avoid shifting issues)
applied_count = 0
applied = set()
# Sort by line index descending
for p_idx, line_idx in sorted(matches.items(), key=lambda x: x[1], reverse=True):

    b64 = get_image(p_idx)
    if not b64: continue
    
    img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
    final_lines.insert(line_idx + 1, img_block)
    applied.add(p_idx)
    applied_count += 1
    print(f"Applied P{p_idx} after line {line_idx+1}")

missing = [p for p in MAPPING if p not in applied]
print(f"Summary: Applied {applied_count}, Missing {len(missing)}")


with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(final_lines)

with open("patch_v5_stats.txt", "w", encoding="utf-8") as f_res:
    f_res.write(f"Applied: {len(applied)}\n")
    missing = [p for p in MAPPING if p not in applied]
    f_res.write(f"Missing: {missing}\n")
