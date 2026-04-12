import base64
import os

ts_file = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts'
img_path = r'C:\Users\hp\.gemini\antigravity\brain\c93498b5-d9fd-44a4-af80-214b2c08838f\synapse_diagram_1773941879000_1773941305917.png'

with open(img_path, 'rb') as f:
    img_data = f.read()
    b64 = base64.b64encode(img_data).decode('utf-8')

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the synapse diagram start
search_pattern = "alt='Synapse Diagram'"
if search_pattern in content:
    # Find the src attribute for that image
    img_tag_start = content.rfind("<img", 0, content.find(search_pattern))
    src_marker = "src='data:image/png;base64,"
    src_start = content.find(src_marker, img_tag_start) + len(src_marker)
    src_end = content.find("'", src_start)
    
    new_content = content[:src_start] + b64 + content[src_end:]
    
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replacement successful")
else:
    print("Target marker not found")
