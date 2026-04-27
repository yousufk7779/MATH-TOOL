import base64
import json
import re

image_path = r"C:\Users\hp\.gemini\antigravity\brain\c7710208-7154-492a-9a44-f446ad804c32\media__1777314126955.png"
ts_file_path = r"d:\All NCERT SOLUTIONS\client\data\content\c9-sci-chem-2.ts"

with open(image_path, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

with open(ts_file_path, "r", encoding='utf-8') as file:
    content = file.read()

# The start marker
marker = 'id: "c9-sci-chem-2-it-2-q2",'

# Find the marker
start_idx = content.find(marker)
if start_idx == -1:
    print("Marker not found")
    exit(1)

solution_start = content.find("solution: [", start_idx)
solution_end = content.find("],", solution_start) + 2

if solution_start == -1 or solution_end == -1:
    print("Solution array not found")
    exit(1)

new_solution = f"""solution: [
                        "<div style='color: #FFFFFF; text-align: justify;'>Answer:</div>",
                        "<div style='text-align: center;'><img src='data:image/png;base64,{encoded_string}' style='max-width: 100%; height: auto;' /></div>"
                    ],"""

new_content = content[:solution_start] + new_solution + content[solution_end:]

with open(ts_file_path, "w", encoding='utf-8') as file:
    file.write(new_content)

print("Replaced successfully")
