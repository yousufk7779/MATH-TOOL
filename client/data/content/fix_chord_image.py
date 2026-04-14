import base64
import re
import os

target_file = r"d:\All NCERT SOLUTIONS\client\data\content\math-ch11.ts"
image_file = r"d:\All NCERT SOLUTIONS\client\assets\chapters\chapter11\ex11_1_q4_chord.png"

# 1. Get base64
with open(image_file, "rb") as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')
    data_uri = f"data:image/png;base64,{b64_data}"

# 2. Read file
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# 3. Use regex to find and replace
# Target text: <div class="question">4. A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding: (i) minor segment (ii) major sector. (Use π = 3.14)</div>
# We escape special characters like . ( ) π
pattern = r'(<div class="question">4\. A chord of a circle of radius 10 cm subtends a right angle at the centre\. Find the area of the corresponding: \(i\) minor segment \(ii\) major sector\. \(Use π = 3\.14\)</div>\s+<img src=")[^"]+(" alt="Chord 90 Degrees">)'

replacement = rf'\1{data_uri}\2'

new_content = re.sub(pattern, replacement, content)

# 4. Write back
with open(target_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete. Base64 length:", len(data_uri))
