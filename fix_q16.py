import base64
import os
import re

img_dir = r"C:\Users\hp\.gemini\antigravity\brain\5a440c66-c1c3-49a8-9444-f80e40be39af"
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-4.ts"

def get_b64(name):
    path = os.path.join(img_dir, name)
    try:
        with open(path, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")
    except Exception as e:
        print(f"Error reading {name}: {e}")
        return "PLACEHOLDER_ERROR"

img16 = get_b64("q16_electric_generator_dark_ex_1773682153077.png")
img17 = get_b64("q17_short_circuit_dark_ex_1773682286163.png")
img18 = get_b64("q18_earth_wire_safety_dark_1773682129567.png")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_q16 = f"""    {{
        "id": "sp4-ex-q16",
        "number": 16,
        "shortBoardPattern": true,
        "question": "<div style=\\\"text-align: justify;\\\">Explain the underlying principle and working of an electric generator by drawing a labelled diagram. What is the function of brushes?</div>",
        "solution": [
            "<div style=\\\"text-align: justify;\\\">The function of <b>brushes</b> (B₁ and B₂) is to maintain physical and electrical contact with the rotating slip rings (R₁ and R₂) to transfer the induced current from the rotating coil to the external stationary circuit.</div>",
            "<div style=\\\"text-align: center; margin: 15px 0;\\\"><img src=\\\"data:image/png;base64,{img16}\\\" style=\\\"width: 100%; max-width: 600px; height: auto; border-radius: 8px;\\\"></div>",
            "<div style=\\\"text-align: justify;\\\"><span style=\\\"color:#ff2e6e\\\"><b>Answer:</b></span></div>",
            "<div style=\\\"text-align: justify;\\\"><b>Principle:</b> An electric generator works on the principle of <b>electromagnetic induction</b>. When a coil is rotated in a uniform magnetic field, a current is induced in it due to the change in magnetic flux.</div>",
            "<div style=\\\"text-align: justify;\\\"><b>Working:</b> When the armature coil ABCD rotates, the arms AB and CD move up and down, cutting magnetic field lines. According to Fleming’s right-hand rule, induced currents are set up in these arms along AB and CD. Thus, an induced current flows in the direction ABCD. After half a rotation, arm CD starts moving up and AB moves down, reversing the current direction to DCBA. This produces an alternating current (AC).</div>"
        ]
    }},"""

new_q17 = f"""    {{
        "id": "sp4-ex-q17",
        "number": 17,
        "shortBoardPattern": true,
        "question": "<div style=\\\"text-align: justify;\\\">When does an electric short circuit occur?</div>",
        "solution": [
            "<div style=\\\"text-align: justify;\\\"><span style=\\\"color:#ff2e6e\\\"><b>Answer:</b></span></div>",
            "<div style=\\\"text-align: center; margin: 15px 0;\\\"><img src=\\\"data:image/png;base64,{img17}\\\" style=\\\"width: 100%; max-width: 600px; height: auto; border-radius: 8px;\\\"></div>",
            "<div style=\\\"text-align: justify;\\\">An <b>electric short circuit</b> occurs when the <b>live wire</b> and the <b>neutral wire</b> come in direct contact with each other. This happens under the following conditions:</div>",
            "<ul style=\\\"text-align: justify;\\\"><li><b>Damaged Insulation:</b> When the insulation of the wires is damaged or worn out.</li><li><b>Fault in Appliance:</b> When there is a fault in the electrical appliance being used.</li></ul>",
            "<div style=\\\"text-align: justify;\\\">In such a situation, the <b>resistance</b> of the circuit becomes very low, causing a large <b>current</b> to flow, which can lead to sparking and even fire.</div>"
        ]
    }},"""

new_q18 = f"""    {{
        "id": "sp4-ex-q18",
        "number": 18,
        "shortBoardPattern": true,
        "question": "<div style=\\\"text-align: justify;\\\">What is the function of an earth wire? Why is it necessary to earth metallic appliances?</div>",
        "solution": [
            "<div style=\\\"text-align: justify;\\\"><span style=\\\"color:#ff2e6e\\\"><b>Answer:</b></span></div>",
            "<div style=\\\"text-align: center; margin: 15px 0;\\\"><img src=\\\"data:image/png;base64,{img18}\\\" style=\\\"width: 100%; max-width: 600px; height: auto; border-radius: 8px;\\\"></div>",
            "<div style=\\\"text-align: justify;\\\">The <b>earth wire</b> is used as a safety measure for electrical appliances that have a metallic body. It provides a <b>low-resistance path</b> for the current to flow directly into the earth.</div>",
            "<div style=\\\"text-align: justify;\\\"><b>Necessity of Earthing:</b></div>",
            "<ul style=\\\"text-align: justify;\\\"><li>If there is a leakage of current to the metallic body of the appliance, its potential becomes equal to that of the live wire.</li><li>A user touching such an appliance might get a severe electric shock.</li><li>By earthing, any leakage current flows to the earth through the earth wire, keeping the potential of the metallic body at zero, thus protecting the user from electric shock.</li></ul>"
        ]
    }},"""

def replace_qid(content, qid, replacement):
    # Find the object start and end
    # First find the ID string
    anchor = f'"id": "{qid}"'
    idx = content.find(anchor)
    if idx == -1:
        print(f"ID {qid} not found")
        return content
    
    # Go back to the opening brace
    start_pos = content.rfind('{', 0, idx)
    if start_pos == -1:
        print(f"Opening brace for {qid} not found")
        return content
        
    # Go forward to the closing brace, handling nested braces
    brace_count = 0
    end_pos = -1
    for i in range(start_pos, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i + 1
                break
                
    if end_pos == -1:
        print(f"Closing brace for {qid} not found")
        return content
        
    # Check if there is a trailing comma
    next_char_idx = end_pos
    while next_char_idx < len(content) and content[next_char_idx].isspace():
        next_char_idx += 1
    
    if next_char_idx < len(content) and content[next_char_idx] == ',':
        end_pos = next_char_idx + 1
        
    print(f"Replacing {qid} from {start_pos} to {end_pos}")
    return content[:start_pos] + replacement + content[end_pos:]

content = replace_qid(content, "sp4-ex-q16", new_q16)
content = replace_qid(content, "sp4-ex-q17", new_q17)
content = replace_qid(content, "sp4-ex-q18", new_q18)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
