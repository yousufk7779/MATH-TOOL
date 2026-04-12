import os

ts_file = r'D:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts'
base64_file = r'D:\All NCERT SOLUTIONS\image2_base64_v2.txt'

with open(base64_file, 'r') as f:
    img_b64 = f.read().strip()

# Target content to replace
target = """                {
                    "id": "sp3-it-2-5",
                    "number": "5",
                    "question": "<div style=\\"text-align: justify;\\">Use the data in Table 12.2 and answer the following questions: (a) Which among iron and mercury is a better conductor? (b) Which material is the best conductor?</div>",
                    "solution": [
                        "<div style=\\"text-align: justify;\\">Answer: (a) Iron is a better conductor than mercury because the resistivity of mercury is more than the resistivity of iron (Resistivity of iron = 10.0 &times; 10&ndash;8 &Omega; m; Resistivity of mercury = 94.0 &times; 10&ndash;8 &Omega; m).</div>",
                        "<div style=\\"text-align: justify;\\">(b) Among all the materials listed in the table, silver is the best conductor because the resistivity of silver is lowest among all, i.e., 1.60 &times; 10<sup>-8</sup> &Omega; m.</div>"
                    ],
                    "answer": "(a) Iron is a better conductor than mercury because the resistivity of mercury is more than the resistivity of iron (Resistivity of iron = 10.0 &times; 10&ndash;8 &Omega; m; Resistivity of mercury = 94.0 &times; 10&ndash;8 &Omega; m)."
                }"""

# New content
# Note: I'll use the updated text from the source doc as per user request.
# Source Q text: Use the data in the table given below and answer the following questions. [IMAGE] (a) Which among iron and mercury is a better conductor? (b) Which material is the best conductor?
# Source Sol text: (a) Iron is a better conductor than mercury because iron has lower resistivity than mercury. (b) Silver has the lowest resistivity among the given materials, therefore silver is the best conductor of electricity.

new_content = f'''                {{
                    "id": "sp3-it-2-5",
                    "number": "5",
                    "question": "<div style=\\"text-align: justify;\\">Use the data in the table given below and answer the following questions.</div><div style=\\"margin: 15px 0;\\"><img src=\\"data:image/png;base64,{img_b64}\\" style=\\"max-width: 100%; height: auto;\\" /></div><div style=\\"text-align: justify;\\">(a) Which among iron and mercury is a better conductor?</div><div style=\\"text-align: justify;\\">(b) Which material is the best conductor?</div>",
                    "solution": [
                        "<div style=\\"text-align: justify;\\">Answer: (a) Iron is a better conductor than mercury because iron has lower resistivity than mercury. (Resistivity of iron = 10.0 &times; 10<sup>&ndash;8</sup> &Omega; m; Resistivity of mercury = 94.0 &times; 10<sup>&ndash;8</sup> &Omega; m).</div>",
                        "<div style=\\"text-align: justify;\\">(b) Silver has the lowest resistivity among the given materials, therefore silver is the best conductor of electricity. (Resistivity of silver = 1.60 &times; 10<sup>&ndash;8</sup> &Omega; m).</div>"
                    ],
                    "answer": "(a) Iron is a better conductor than mercury. (b) Silver is the best conductor of electricity."
                }}'''

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# I need to be careful with the target string. Let's find it by ID relative to structure.
# Direct string replacement might fail if there's any whitespace difference.
if target in content:
    updated_content = content.replace(target, new_content)
    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("REPLACED_SUCCESSFULLY")
else:
    # Try a more robust search
    start_marker = '"id": "sp3-it-2-5",'
    end_marker = '                }'
    start_idx = content.find(start_marker)
    if start_idx != -1:
        # Find the start of the object {
        obj_start = content.rfind('{', 0, start_idx)
        # Find the end of the object }
        obj_end = content.find('}', start_idx) + 1
        
        updated_content = content[:obj_start] + new_content + content[obj_end:]
        with open(ts_file, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print("REPLACED_SUCCESSFULLY_ROBUST")
    else:
        print("TARGET_NOT_FOUND")
