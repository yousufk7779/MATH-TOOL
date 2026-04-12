
import json
import re
import os

# Load images
full_images_path = r"d:\All NCERT SOLUTIONS\full_images.json"
if not os.path.exists(full_images_path):
    print(f"Error: {full_images_path} not found")
    exit(1)

with open(full_images_path, "r", encoding="utf-8") as f:
    full_data = json.load(f)

# Flatten images dict to P_ID -> base64
images = {}
for k, v in full_data.items():
    if v.get("images"):
        # Use simple base64 if it's already encoded, or construct prefix
        b64 = v["images"][0]
        if not b64.startswith("data:image"):
            # docx parser used earlier might have just extracted raw or partial
            # but usually it's full data url from our previous work.
            pass
        images[k] = b64

# Load ts content
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_img_html(b64, alt="Diagram"):
    return f'<div style=\"margin: 15px 0;\"><img src=\"{b64}\" alt=\"{alt}\" style=\"width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" /></div>'

# Mappings (target text fragment -> P_ID)
mappings = [
    ("Ohm’s law as follows:", "P50"),
    ("potential 6 V.</div>", "P75"),
    ("sp3-it-3-2", "P80"), 
    ("q &ap; 1 &Omega;.</div>", "P96"),
    ("0.999 &Omega;.</div>", "P99"),
    ("31.25 &Omega;.</div>", "P105"),
    ("7.04 A.</div>", "P109"),
    ("Total resistance = 4 &Omega;.</div>", "P144"),
    ("Equivalent resistance is 1 &Omega;.</div>", "P153"),
    ("current is 10 A.</div>", "P163"),
    ("Therefore, 4.4 A current will flow through the circuit.</div>", "P181"),
    ("Answer: (d) &rho;l/A</div>", "P220"),
    ("ratio of the heat produced in the circuit is given by</div>", "P267"),
    ("12 &Omega; resistor is 0.67 A.</div>", "P281"),
    ("4 resistors.</div>", "P287"),
    ("parallel combination of resistor R is given by", "P315"),
    ("approx 3.4 &Omega;.</div>", "P301"),
    ("3 + 6 = 9 &Omega;.</div>", "P321"),
    ("72/18 = 4 &Omega;.</div>", "P327"),
    ("equivalent resistance is calculated as follows:", "P334"),
    ("I = 220/24 = 9.17 A.</div>", "P309"),
    ("current flowing through each coil as follows:", "P349"),
    ("series circuit is calculated as follows:", "P355"),
    ("equivalent resistance is calculated as follows:", "P359"),
    ("2<sup>2</sup> &times; 2 = 8 W.</div>", "P364"),
    ("Both use same power.</div>", "P367"),
    ("0.73 A).</div>", "P376")
]

new_content = content

# Fix commas first (basic array string closure)
new_content = re.sub(r'("</div>")(\s+)"', r'\1,\2"', new_content)

for fragment, p_id in mappings:
    if p_id not in images: continue
    
    # Check if already has an image block for THIS p_id nearby
    # Use escaped alt text for search
    search_alt = p_id
    if f'alt=\\\"{search_alt}\\\"' in new_content or f'alt=\"{search_alt}\"' in new_content:
        print(f"Skipping {p_id}, already present.")
        continue

    img_html = get_img_html(images[p_id], p_id)
    # We need to escape double quotes for the TS string
    img_html_escaped = img_html.replace('"', '\\"')

    idx = new_content.find(fragment)
    if idx != -1:
        # Find the end of the string containing the fragment
        end_quote = new_content.find('"', idx + len(fragment))
        if end_quote != -1:
            insertion_point = end_quote + 1
            # Check for comma
            has_comma = False
            for i in range(insertion_point, min(len(new_content), insertion_point + 10)):
                if new_content[i] == ',':
                    insertion_point = i + 1
                    has_comma = True
                    break
            
            if not has_comma:
                # Look ahead to see if we need a comma
                next_quote = -1
                for i in range(insertion_point, len(new_content)):
                    if new_content[i] == '"':
                        next_quote = i
                        break
                    if new_content[i] == ']':
                        break
                
                if next_quote != -1:
                    new_content = new_content[:insertion_point] + ',' + new_content[insertion_point:]
                    insertion_point += 1
            
            # Insert image block
            img_line = f'\n                        \"{img_html_escaped}\",'
            new_content = new_content[:insertion_point] + img_line + new_content[insertion_point:]
            print(f"Applied {p_id} after \"{fragment[:20]}...\"")
    else:
        print(f"Fragment not found: {fragment}")

# Final cleanup: fix trailing commas in arrays [..., \n ]
new_content = re.sub(r',\s*]', r'\n                    ]', new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Final apply complete.")
