import base64
import re

# Read base64 image
with open(r'd:\All NCERT SOLUTIONS\magnet_b64.txt', 'r') as f:
    b64 = f.read().strip()

IMG_TAG = f'<div style=\\"margin: 15px 0;\\"><img src=\\"data:image/png;base64,{b64}\\" alt=\\"Magnetic Field Lines around a Bar Magnet\\" style=\\"width: 100%; max-width: 500px; display: block; margin: 10px auto;\\" /></div>'

# Build the questions block for sp4-it-2
questions_block = '''            "questions": [
                {
                    "id": "sp4-it-2-1",
                    "number": "1",
                    "question": "<div style=\\"text-align: justify;\\">Draw magnetic field lines around a bar magnet.</div>",
                    "solution": [
                        "<div style=\\"text-align: justify;\\"><span style=\\"color:#ff2e6e\\"><b>Answer:</b></span> Magnetic field lines around a bar magnet emerge from the <b>North pole</b>, loop around through the surrounding space, and re-enter at the <b>South pole</b>. Inside the magnet, they travel from South to North.</div>",
                        "''' + IMG_TAG + '''",
                        "<div style=\\"text-align: justify;\\"><span style=\\"color:#ff2e6e\\"><b>Note:</b></span> The field lines are closest (densest) near the poles where the magnetic field is strongest, and spread out farther away.</div>"
                    ],
                    "answer": "Field lines emerge from N pole, loop around and enter S pole. Inside the magnet they go from S to N forming closed continuous loops."
                },
                {
                    "id": "sp4-it-2-2",
                    "number": "2",
                    "question": "<div style=\\"text-align: justify;\\">List the properties of magnetic field lines.</div>",
                    "solution": [
                        "<div style=\\"text-align: justify;\\"><span style=\\"color:#ff2e6e\\"><b>Answer:</b></span> The properties of magnetic field lines are:</div>",
                        "<div style=\\"text-align: justify;\\"><b>1.</b> Magnetic field lines emerge from the <b>North pole</b> and merge into the <b>South pole</b> outside the magnet.</div>",
                        "<div style=\\"text-align: justify;\\"><b>2.</b> Inside the magnet, field lines travel from <b>South pole to North pole</b>.</div>",
                        "<div style=\\"text-align: justify;\\"><b>3.</b> Field lines are <b>closed continuous curves</b> — they form complete loops.</div>",
                        "<div style=\\"text-align: justify;\\"><b>4.</b> Field lines are <b>closer together</b> (denser) near the poles where the field is strong, and farther apart where the field is weak.</div>",
                        "<div style=\\"text-align: justify;\\"><b>5.</b> <b>No two field lines ever intersect</b> each other.</div>",
                        "<div style=\\"text-align: justify;\\"><b>6.</b> Field lines have a definite <b>direction</b>, indicated by arrows pointing from N to S outside the magnet.</div>"
                    ],
                    "answer": "Properties: emerge from N to S outside; S to N inside; closed continuous loops; denser near poles; never intersect; have a definite direction."
                },
                {
                    "id": "sp4-it-2-3",
                    "number": "3",
                    "question": "<div style=\\"text-align: justify;\\">Why don\\u2019t two magnetic field lines intersect each other?</div>",
                    "solution": [
                        "<div style=\\"text-align: justify;\\"><span style=\\"color:#ff2e6e\\"><b>Answer:</b></span> Two magnetic field lines never intersect each other because <b>at any given point in space, the magnetic field can have only one definite direction</b>.</div>",
                        "<div style=\\"text-align: justify;\\">If two field lines were to intersect at a point, it would mean that the magnetic field at that point has <b>two different directions simultaneously</b> — which is physically impossible.</div>",
                        "<div style=\\"text-align: justify;\\"><span style=\\"color:#ff2e6e\\"><b>Key Rule:</b></span> One point → One direction of magnetic field → Therefore field lines never cross each other.</div>"
                    ],
                    "answer": "Two field lines never intersect because at any point the magnetic field has only one direction. If they crossed, it would imply two directions at the same point, which is impossible."
                }
            ]'''

# Read the TS file
TS_PATH = r'd:\All NCERT SOLUTIONS\client\data\content\sci-phy-4.ts'
with open(TS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the empty questions array in sp4-it-2 block only
# Target: the second occurrence of "questions": []
old = '''"id": "sp4-it-2",
            "name": "In-Text-2",
            "questions": []'''
new = f'''"id": "sp4-it-2",
            "name": "In-Text-2",
{questions_block}'''

if old in content:
    content = content.replace(old, new, 1)
    with open(TS_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: In-Text 2 questions added.")
else:
    print("ERROR: Target string not found. Check the file structure.")
    # Show what we have
    idx = content.find('sp4-it-2')
    print("Context:", repr(content[idx:idx+200]))
