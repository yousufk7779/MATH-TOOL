
import json

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

def get_block(p_id, idx=0):
    img = images[p_id]["images"][idx]
    return f'<div style=\\"margin: 15px 0;\\"><img src=\\"{img}\\" alt=\\"Solution Diagram {p_id}\\" style=\\"width: 100%; max-width: 500px; display: block; margin: 10px auto;\\" /></div>'

updates = [
    {
        "target": '"<div style=\\"text-align: justify;\\">In parallel, 1/R_p = 1/R + 1/R = 2/R, so R_p = R/2. Power P_p = V<sup>2</sup>/R_p = 2V<sup>2</sup>/R.</div>",',
        "image": "P267"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: Total resistance R = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 &Omega;. In series, current is same everywhere. I = V/R = 9 / 13.4 = 0.67 A. Current through 12 &Omega; resistor is 0.67 A.</div>"',
        "image": "P281"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: For 5 A at 220 V, effective resistance R_eq = V/I = 220/5 = 44 &Omega;. Let n be current number of resistors. 1/44 = n/176. n = 176/44 = 4 resistors.</div>"',
        "image": "P287"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: (ii) To get 4 &Omega;, connect two 6 &Omega; resistors in series and the third in parallel with them: (12 &times; 6)/(12 + 6) = 72/18 = 4 &Omega;.</div>"',
        "image": "P292"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: (i) In series, R = 3 &Omega;, I = 6/3 = 2 A. Power in 2 &Omega; = I<sup>2</sup>R = (2)<sup>2</sup> &times; 2 = 8 W.</div>",',
        "image": "P364"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: (ii) In parallel, voltage across 2 &Omega; is 4 V. Power in 2 &Omega; = V<sup>2</sup>/R = (4)<sup>2</sup>/2 = 16/2 = 8 W. Both use same power.</div>"',
        "image": "P367"
    },
    {
        "target": '"<div style=\\"text-align: justify;\\">Answer: Current through 100 W lamp I1 = 100/220 = 0.45 A. Current through 60 W lamp I<sup>2</sup> = 60/220 = 0.27 A. Total current = 0.45 + 0.27 = 0.72 A approx (more precisely 160/220 &ap; 0.73 A).</div>"',
        "image": "P376"
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

print("Applied third batch of images.")
