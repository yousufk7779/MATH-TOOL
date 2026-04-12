
import json
import re

with open("p_map.json", "r", encoding="utf-8") as f:
    docx_data = json.load(f)

def get_image(p_idx):
    for p in docx_data:
        if p['p_idx'] == p_idx and p['images']:
            return p['images'][0]
    return None

mapping = [
    ("decreases to half of its former value.", 51),
    ("Use the data in the table given below", 60),
    ("measure the potential difference.", 81),
    ("1 / 106. Since 1 / 106", 97),
    ("1 + 0.001 + 0.000001 = 1.001001", 100),
    ("water filter of resistance 500", 106),
    ("current through it is 7.04 A", 110),
    ("Equivalent resistance of 3 &Omega; and 6 &Omega; in parallel", 145),
    ("is (3&times;6)/(3+6) = 18/9 = 2 &Omega;.", 148),
    ("three resistors in parallel. 1/R_eq = 1/2", 154),
    ("(3+2+1)/6 = 6/6 = 1 &Omega;.", 156),
    ("equivalent resistance connected in parallel is", 164),
    ("amount of current can be calculated as follows", 182),
    ("connected to each other in parallel", 221),
    ("ratio of the heat produced in the circuit is given", 268),
    ("area of cross-section m2 is given by the formula", 282),
    ("potential difference V across the resistor are given below", 288),
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
    content = f.read()

def insert_image(content, fragment, b64, pid):
    # Search for the fragment with some tolerance for HTML tags
    # Escape the fragment for regex
    pattern = re.escape(fragment)
    # Allow optional HTML tags between words
    pattern = pattern.replace(r'\ ', r'\s*')
    
    # Check if image already exists Right after the fragment block
    # Actually, better to just look for the fragment and insert after the closing </div> of that line
    match = re.search(pattern, content)
    if not match:
        return content, False

    # Find the end of the div or closing quote
    # Typically: "text fragment</div>", or "text fragment"
    end_pos = match.end()
    # Check if an image already exists within next 200 chars
    if f'alt="P{pid}"' in content[end_pos:end_pos+500]:
        return content, False # Already patched
    
    # Check for "Solution Diagram" or similar placeholders
    if '<img' in content[end_pos:end_pos+300]:
        # If it's a generic one, we might want to REPLACE it.
        # But per instructions "Do not change answers or explanations", 
        # I'll only ADD if it's missing or if the ID doesn't match.
        pass

    img_block = f'\n                        <div style="margin: 15px 0;"><img src="{b64}" alt="P{pid}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>'
    
    # Insert after the closing </div> of the current line
    div_end = content.find('</div>', end_pos)
    if div_end != -1:
        insert_pos = div_end + 6
        # If it's the end of a string in solution array, it might be like "</div>",
        if content[insert_pos:insert_pos+1] == '"':
            # Insert before the quote if we want it in the same string, 
            # or after if we want a new array element.
            # In this app, solution is an array of strings.
            new_content = content[:insert_pos] + ',' + img_block + content[insert_pos:]
            return new_content, True
        else:
            new_content = content[:insert_pos] + img_block + content[insert_pos:]
            return new_content, True
            
    return content, False

patched_count = 0
for fragment, p_idx in mapping:
    b64 = get_image(p_idx)
    if b64:
        content, success = insert_image(content, fragment, b64, p_idx)
        if success:
            patched_count += 1
            print(f"Patched {fragment[:30]}... with P{p_idx}")

if patched_count > 0:
    # Also fix any syntax errors I might have introduced (missing commas)
    # Ensure all strings in solutions have commas
    content = content.replace('</div>"\n', '</div>",\n')
    # Actually, my insertion logic adds a comma.
    
    with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "w", encoding="utf-8") as f:
         f.write(content)
    print(f"Applied {patched_count} patches.")
else:
    print("No patches applied.")
