
import json
import re

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    images = json.load(f)

def get_block(p_id, idx=0):
    img = images[p_id]["images"][idx]
    return f'<div style="margin: 15px 0;"><img src="{img}" alt="Solution Diagram" style="width: 100%; max-width: 500px; display: block; margin: 10px auto;" /></div>'

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define patterns to search (regex)
# Using re.S to match across multiple lines if needed
mapping = [
    # sp3-it-2-3
    (r'(is directly proportional to potential difference \(V\)\.</div>",)', "P50"),
    # sp3-it-3-1
    (r'(along with a battery of potential 6 V\.</div>")', "P75"),
    # sp3-it-3-2
    (r'(measure the potential difference\.</div>",)', "P80"),
    # sp3-it-4-2
    (r'(So, R_eq = 500/16 = 31\.25 &Omega;\.</div>",)', "P105"),
    (r'(and the current through it is 7\.04 A\.</div>")', "P109"),
    # sp3-it-4-4
    (r'(Total resistance = 2 &Omega; \+ 2 &Omega; = 4 &Omega;\.</div>",)', "P144"),
    (r'(So, R_eq = 1 &Omega;\.</div>")', "P147"),
    # sp3-it-4-5
    (r'(So, lowest resistance = 2 &Omega;\.</div>")', "P163"),
    # sp3-it-5-2
    (r'(H = 50 V &times; 96000 C = 4\.8 &times; 10<sup>6</sup> J\.</div>")', "P181"),
    # sp3-ex-4
    (r'(Power P_p = V<sup>2</sup>/R_p = 2V<sup>2</sup>/R\.</div>",)', "P267"),
    # sp3-ex-9
    (r'(Current through 12 &Omega; resistor is 0\.67 A\.</div>")', "P281"),
    # sp3-ex-10
    (r'(n = 176/44 = 4 resistors\.</div>")', "P287"),
    # sp3-ex-11
    (r'(72/18 = 4 &Omega;\.</div>")', "P292"),
    # sp3-ex-14
    (r'(\(2\)<sup>2</sup> &times; 2 = 8 W\.</div>",)', "P364"),
    (r'(Both use same power\.</div>")', "P367"),
    # sp3-ex-15
    (r'(Total current = 0\.45 \+ 0\.27 = 0\.72 A approx \(more precisely 160/220 &ap; 0\.73 A\)\.</div>")', "P376")
]

for pattern, p_id in mapping:
    block = get_block(p_id).replace('"', '\\"')
    # We want to insert after the match
    # Replacement appends the image block as a new string in the array
    content = re.sub(pattern, r'\1\n                        "' + block + '",', content)

# Exercise 1 (P220)
content = re.sub(r'(So R/R&prime; = 25\. Answer \(d\)\.</div>")', r'\1\n                        "' + get_block("P220").replace('"', '\\"') + '"', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Applied images with robust regex replacement.")
