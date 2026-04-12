import base64
import os

ts_file = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts'
img1_path = r'C:\Users\hp\.gemini\antigravity\brain\c93498b5-d9fd-44a4-af80-214b2c08838f\phototropism_1773941879000_17739423011453_1773942026096.png'
img2_path = r'C:\Users\hp\.gemini\antigravity\brain\c93498b5-d9fd-44a4-af80-214b2c08838f\hydrotropism_1773941879000_17739423011454_1773942049639.png'

with open(img1_path, 'rb') as f:
    b64_1 = base64.b64encode(f.read()).decode('utf-8')
    data_uri1 = f"data:image/png;base64,{b64_1}"

with open(img2_path, 'rb') as f:
    b64_2 = base64.b64encode(f.read()).decode('utf-8')
    data_uri2 = f"data:image/png;base64,{b64_2}"

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('PHOTOTROPISM_ALT_PLACEHOLDER', data_uri1)
content = content.replace('HYDROTROPISM_ALT_PLACEHOLDER', data_uri2)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Replacement successful")
