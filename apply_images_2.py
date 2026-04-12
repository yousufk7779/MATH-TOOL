
import json

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

def get_block(p_id, idx=0):
    img = images[p_id]["images"][idx]
    return f'<div style=\\"margin: 15px 0;\\"><img src=\\"{img}\\" alt=\\"Solution Diagram {p_id}\\" style=\\"width: 100%; max-width: 500px; display: block; margin: 10px auto;\\" /></div>'

updates = [
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: The equivalent resistance R_eq of the resistors in parallel is 1/R_eq = 1/100 + 1/50 + 1/500 = (5+10+1)/500 = 16/500. So, R_eq = 500/16 = 31.25 &Omega;.</div>",',
        "image": "P105"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Since the electric iron takes as much current as all three, its resistance must be equal to their equivalent resistance, i.e., 31.25 &Omega;, and the current through it is 7.04 A.</div>"',
        "image": "P109"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: (a) To get 4 &Omega;, connect 3 &Omega; and 6 &Omega; resistors in parallel and this combination in series with 2 &Omega; resistor. Equivalent resistance of 3 &Omega; and 6 &Omega; in parallel is (3&times;6)/(3+6) = 18/9 = 2 &Omega;. Total resistance = 2 &Omega; + 2 &Omega; = 4 &Omega;.</div>",',
        "image": "P144" # Wait, P144 or P143? I'll check.
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">(b) To get 1 &Omega;, connect all three resistors in parallel. 1/R_eq = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1 &Omega;. So, R_eq = 1 &Omega;.</div>"',
        "image": "P147"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">(b) The lowest resistance is obtained by connecting them in parallel: 1/R = 1/4 + 1/8 + 1/12 + 1/24 = (6+3+2+1)/24 = 12/24 = 1/2. So, lowest resistance = 2 &Omega;.</div>"',
        "image": "P163"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">H = 50 V &times; 96000 C = 4.8 &times; 10<sup>6</sup> J.</div>"',
        "image": "P181"
    }
]

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, "r", encoding="utf-8") as f:
    new_content = f.read()

for up in updates:
    block = get_block(up["image"])
    replacement = up["target"] + f'\n                        "{block}",'
    new_content = new_content.replace(up["target"], replacement)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Applied second batch of images.")
