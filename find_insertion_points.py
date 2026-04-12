import re
import html

def normalize(text):
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Decode HTML entities
    text = html.unescape(text)
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text.lower()

targets = [
    ("P50", "constant while the potential difference across the two ends"),
    ("P59", "Use the data in the table given below"),
    ("P80", "measure the potential difference. As shown in the figure below."),
    ("P96", "1 / 106. Since 1 / 106 is very small"),
    ("P99", "1 + 0.001 + 0.000001 = 1.001001"),
    ("P105", "water filter", "parallel to a 220 V source"),
    ("P109", "31.25", "current through it is 7.04 A"),
    ("P143", "To get 4", "Equivalent resistance of 3"),
    ("P144", "understood that 3", "connected in parallel"),
    ("P147", "resistor 2", "in series with another 2"),
    ("P153", "To get 1", "connect all three resistors in parallel"),
    ("P155", "resistors are connected in parallel", "calculated as follows"),
    ("P163", "equivalent resistance connected in parallel is"),
    ("P181", "amount of current can be calculated as follows"),
    ("P220", "connected to each other in parallel", "calculated as follows"),
    ("P267", "ratio of the heat produced in the circuit is given"),
    ("P281", "area of cross-section m2 is given by the formula"),
    ("P287", "potential difference V across the resistor are given below"),
    ("P292", "different values of current for different value"),
    ("P301", "using Ohm’s Law as follows"),
    ("P309", "Now, using Ohm’s law,"),
    ("P315", "The equivalent resistance of the parallel combination", "is given by"),
    ("P321", "connect all the three resistors in series", "desired value"),
    ("P326", "Case (i)"),
    ("P327", "If two resistors are connected in parallel", "equivalent resistance is"),
    ("P331", "Case (ii)"),
    ("P334", "parallel with 12", "calculated as follows"),
    ("P341", "Substituting the values, we get"),
    ("P349", "current flowing through each coil as follows"),
    ("P355", "current flowing through the series circuit is calculated as follows"),
    ("P359", "coils are connected in parallel", "calculated as follows"),
    ("P364", "1 Ohm + 2 Ohm = 3 Ohm", "calculated using"),
    ("P367", "calculate the power consumed by"),
    ("P376", "drawn by the bulb of rating 60 W"),
]

with open(r'd:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for target in targets:
    pid = target[0]
    parts = target[1:]
    found_lines = []
    
    for i, line in enumerate(lines):
        match = True
        for part in parts:
            if normalize(part) not in normalize(line):
                match = False
                break
        if match:
            found_lines.append(i + 1)
    
    if found_lines:
        # Check if an image already exists in the vicinity (next few lines)
        already_has_image = False
        for l_idx in found_lines:
            # Check current line and next 3 lines for <img>
            for search_idx in range(l_idx - 1, min(l_idx + 3, len(lines))):
                if '<img' in lines[search_idx]:
                    already_has_image = True
                    break
        
        status = " (ALREADY HAS IMAGE?)" if already_has_image else ""
        print(f"{pid}: Found on lines {found_lines}{status}")
    else:
        print(f"{pid}: NOT FOUND")
