
import json
import os

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

def get_block(p_id, idx=0):
    img = images[p_id]["images"][idx]
    return f'<div style=\\"margin: 15px 0;\\"><img src=\\"{img}\\" alt=\\"Solution Diagram\\" style=\\"width: 100%; max-width: 500px; display: block; margin: 10px auto;\\" /></div>'

# Mapping for In-Text
updates = [
    {
        "id": "sp3-it-2-3",
        "target": '"If resistance (R) remains constant, current (I) is directly proportional to potential difference (V).</div>",',
        "image": "P50"
    },
    {
        "id": "sp3-it-3-1",
        "target": '"<div style=\\"text-align: justify;\\">Answer: A battery of three cells of 2 V each equals to battery of potential 6 V. The circuit diagram below shows three resistors of resistance 12 &Omega;, 8 &Omega; and 5 &Omega; connected in series along with a battery of potential 6 V.</div>"',
        "image": "P75"
    },
    {
        "id": "sp3-it-3-2",
        "target": '"<div style=\\"text-align: justify;\\">Answer: An ammeter should always be connected in series with resistors while the voltmeter should be connected in parallel to the resistor to measure the potential difference.</div>",',
        "image": "P80"
    }
]

# Read original
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_content = "".join(lines)

for up in updates:
    block = get_block(up["image"])
    # Note: the strings in the TS file have escaped quotes if they are within a string... 
    # but wait, sci-phy-3.ts uses double quotes for JSON-like values.
    # HTML inside them uses \"
    
    # I will do exact string replacement for the target line
    target_clean = up["target"].replace('\\"', '"')
    # Actually, the file uses \" for the style tags
    
    replacement = up["target"] + f'\n        "{block}",'
    new_content = new_content.replace(up["target"], replacement)

with open(r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Applied first batch of images.")
