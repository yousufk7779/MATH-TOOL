import json
import base64
import os

b64_path = r'C:\Users\hp\.gemini\antigravity\brain\a3042483-0bdd-4c6e-adef-90fcc834de03\q16_electric_generator_dark_1773755999499.png'
with open(b64_path, 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-phy-4.ts'
with open(file_path, 'rb') as f:
    content = f.read()

questions = [
    {
        "id": "sp4-ex-q13",
        "number": 13,
        "question": "<div style=\"text-align: justify;\">A coil of insulated copper wire is connected to a galvanometer. What will happen if a bar magnet is (i) Pushed into the coil, (ii) Withdrawn from inside the coil, (iii) held stationary inside the coil?</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">(i) <b>Pushed into the coil:</b> A momentary deflection is observed in the galvanometer, indicating that an electric current is induced in the coil.<br>(ii) <b>Withdrawn from inside the coil:</b> A momentary deflection is again observed, but in the opposite direction, indicating an induced current in the reverse direction.<br>(iii) <b>Held stationary inside the coil:</b> No deflection is observed in the galvanometer because there is no change in the magnetic field associated with the coil, so no current is induced.</div>"
        ],
        "answer": "(i) Momentary deflection, (ii) Deflection in opposite direction, (iii) No deflection."
    },
    {
        "id": "sp4-ex-q14",
        "number": 14,
        "question": "<div style=\"text-align: justify;\">Two circular coils A and B are placed close to each other. If the current in the coil A is changed, will some current be induced in the coil B? Give reason.</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">Yes, a current will be induced in coil B. When the current in coil A changes, the <b>magnetic field lines</b> around it also change. Since coil B is close to A, these changing magnetic field lines link with coil B. This changing magnetic flux induces an electromotive force (EMF) in coil B, leading to an induced current. This phenomenon is known as <b>Electromagnetic Induction</b>.</div>"
        ],
        "answer": "Yes, due to electromagnetic induction caused by the changing magnetic field of coil A."
    },
    {
        "id": "sp4-ex-q15",
        "number": 15,
        "question": "<div style=\"text-align: justify;\">State the rule to determine the direction of a (i) magnetic field produced around a straight conductor-carrying current, (ii) force experienced by a current-carrying straight conductor placed in a magnetic field which is perpendicular to it, and (iii) current induced in a coil due to its rotation in a magnetic field.</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">(i) <b>Right-Hand Thumb Rule:</b> Imagine holding the current-carrying conductor in your right hand with the thumb pointing toward the current; then your fingers will wrap around the conductor in the direction of the magnetic field lines.<br>(ii) <b>Fleming's Left-Hand Rule:</b> Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular. If the forefinger points in the direction of the magnetic field and the middle finger in the direction of current, then the thumb points in the direction of motion or force.<br>(iii) <b>Fleming's Right-Hand Rule:</b> Stretch the thumb, forefinger, and middle finger of the right hand mutually perpendicular. If the forefinger points in the direction of the magnetic field and the thumb in the direction of motion, then the middle finger points in the direction of the induced current.</div>"
        ],
        "answer": "(i) Right-Hand Thumb Rule, (ii) Fleming's Left-Hand Rule, (iii) Fleming's Right-Hand Rule."
    },
    {
        "id": "sp4-ex-q16",
        "number": 16,
        "question": "<div style=\"text-align: justify;\">Explain the underlying principle and working of an electric generator by drawing a labelled diagram. What is the function of brushes?</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\"><b>Principle:</b> An electric generator works on the principle of <b>Electromagnetic Induction</b>. It converts mechanical energy into electrical energy.</div>",
            "<div style=\"text-align: center; margin: 15px 0;\"><img src=\"data:image/png;base64," + b64 + "\" style=\"max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);\"></div>",
            "<div style=\"text-align: justify;\"><b>Working:</b> When the armature coil (ABCD) is rotated in a strong magnetic field, the magnetic flux passing through it changes continuously. According to Faraday's law, an EMF is induced in the coil, which generates an electric current. In an AC generator, slip rings maintain contact with the brushes to allow the current to flow to the external circuit.<br><b>Function of Brushes:</b> Brushes are made of carbon or metal and remain in sliding contact with the rotating slip rings. Their primary function is to transfer the induced current from the rotating coil to the stationary external circuit.</div>"
        ],
        "answer": "Principle: Electromagnetic Induction. Working: Rotating a coil in a magnetic field induces current. Brushes transfer the induced current to the external circuit.",
        "shortBoardPattern": True
    },
    {
        "id": "sp4-ex-q17",
        "number": 17,
        "question": "<div style=\"text-align: justify;\">When does an electric short circuit occur?</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\">An electric short circuit occurs when the <b>live wire</b> and the <b>neutral wire</b> of a circuit come into direct contact with each other. This can happen due to worn-out insulation or a defect in an appliance. In this state, the resistance becomes extremely low, resulting in a sudden, huge flow of current, which can cause heat, sparks, and even fires.</div>"
        ],
        "answer": "When live and neutral wires touch directly, leading to low resistance and a huge current surge."
    },
    {
        "id": "sp4-ex-q18",
        "number": 18,
        "question": "<div style=\"text-align: justify;\">What is the function of an earth wire? Why is it necessary to earth metallic appliances?</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span></div>",
            "<div style=\"text-align: justify;\"><b>Function:</b> The earth wire is a safety wire connected to the metal body of an appliance. It provides a low-resistance path for leakage current to flow deep into the ground.<br><b>Necessity:</b> It is necessary for metallic appliances (like iron, toaster, refrigerator) because if the live wire accidentally touches the metal body due to a fault, the earth wire safely carries the excess charge to the earth. This prevents the user from getting a severe electric shock and often blows the fuse to disconnect the faulty circuit.</div>"
        ],
        "answer": "Safety: It drains leakage current to the ground, preventing electric shocks from faulty appliances."
    }
]

formatted = ",\n" + ",\n".join([json.dumps(q, indent=8) for q in questions])

target = b'"answer": "Fans, washing machines, mixers, refrigerators, and water pumps."'
idx = content.find(target)
if idx != -1:
    brace_idx = content.find(b'}', idx)
    insertion_point = brace_idx + 1
    new_content = content[:insertion_point] + formatted.encode('utf-8') + content[insertion_point:]
    with open(file_path, 'wb') as f:
        f.write(new_content)
    print("Success")
else:
    print("Target not found")
