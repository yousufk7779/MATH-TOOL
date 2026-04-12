
import json
import re

with open("p_map.json", "r", encoding="utf-8") as f:
    docx_data = json.load(f)

def get_image(p_idx):
    for p in docx_data:
        if p['p_idx'] == p_idx and p['images']:
            return p['images'][0]
    return None

def normalize(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text.lower()

mapping = [
    # In-text after Q4, Q5... EXERCISES...
    ("handle of an electric kettle", 164),
    ("amount of current can be calculated as follows", 182),
    ("connected to each other in parallel", 221),
    ("ratio of the heat produced in the circuit is given", 268),
    ("area of cross-section m2 is given by the formula", 282),
    ("across the resistor are given below", 288),
    ("different values of current for different value", 293),
    ("using Ohm’s Law as follows", 302),
    ("Now, using Ohm’s law,", 310),
    ("The equivalent resistance of the parallel combination", 316),
    ("connect all the three resistors in series", 322),
    ("Case (i)", 327),
    ("If two resistors are connected in parallel", 328),
    ("Case (ii)", 332),
    ("parallel with 12 &Omega;. Hence the equivalent resistance", 335),
    ("Substituting the values, we get", 342),
    ("current flowing through each coil as follows", 350),
    ("current flowing through the series circuit is calculated as follows", 356),
    ("coils are connected in parallel", 360),
    ("1 &Omega; + 2 &Omega; = 3 &Omega;.", 365),
    ("calculate the power consumed by", 368),
    ("drawn by the bulb of rating 60 W", 377),
]

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

patched_indices = []

for fragment, p_idx in mapping:
    found = False
    norm_frag = normalize(fragment)
    for i, line in enumerate(lines):
        if norm_frag in normalize(line):
            # Check if image already exists in next 3 lines
            has_img = False
            for j in range(i, min(i+4, len(lines))):
                if '<img' in lines[j] and f'alt="P{p_idx}"' in lines[j]:
                    has_img = True
                    break
            
            if not has_img:
                b64 = get_image(p_idx)
                if b64:
                    # Insert after the current line's closing </div>
                    # If the line ends with common solution end patterns
                    line_content = lines[i].rstrip()
                    if line_content.endswith('</div>"'):
                        lines[i] = line_content + ',\n'
                    elif line_content.endswith('</div>",'):
                         pass
                    
                    img_block = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{p_idx}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
                    lines.insert(i + 1, img_block)
                    if not lines[i+1].endswith(',\n'):
                         # If it's in an array, it might need a comma if there's more after it
                         pass
                    
                    print(f"Patched P{p_idx} after line {i+1}")
                    found = True
                    break

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "w", encoding="utf-8") as f:
    f.writelines(lines)
