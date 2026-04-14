import base64
import re
import os

target_file = r"d:\All NCERT SOLUTIONS\client\data\content\math-ch11.ts"
image_file = r"d:\All NCERT SOLUTIONS\client\assets\chapters\chapter11\ex11_1_q6_segment.png"

# 1. Get base64
with open(image_file, "rb") as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')
    data_uri = f"data:image/png;base64,{b64_data}"

# 2. Read file
with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# 3. Use regex to find and replace
# Target text: <div class="question">6. A chord radius 15 cm subtends 60° at centre. Find areas of minor and major segments. (Use π = 3.14, √3 = 1.73)</div>
pattern = r'(<div class="question">6\. A chord radius 15 cm subtends 60° at centre\. Find areas of minor and major segments\. \(Use π = 3\.14, √3 = 1\.73\)</div>\s+<img src=")[^"]+(" alt="Chord 60 Segments">)'

replacement = rf'\1{data_uri}\2'

new_content = re.sub(pattern, replacement, content)

# 4. Write back
with open(target_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete. Base64 length:", len(data_uri))
