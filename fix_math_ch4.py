import os

filepath = r'd:\All NCERT SOLUTIONS\client\data\content\math-ch4.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_index = -1
for i, line in enumerate(lines):
    if '"mcqs": [' in line and '    "mcqs": [' in line:
        target_index = i
        break

if target_index != -1:
    # Check if it's already fixed
    if '                    ],' not in lines[target_index-1]:
        new_lines = [
            '                    ],\n',
            '                    "answer": "Length = 20 m, Breadth = 20 m."\n',
            '                }\n',
            '            ]\n',
            '        }\n',
            '    ],\n'
        ]
        # Insert before the mcqs line
        lines[target_index:target_index] = new_lines
        print(f"Fixed syntax error at line {target_index}")
    else:
        print("Already fixed or different structure detected.")
else:
    print("Could not find 'mcqs' block.")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)
