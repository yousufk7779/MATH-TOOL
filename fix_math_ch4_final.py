import os

filepath = r'd:\All NCERT SOLUTIONS\client\data\content\math-ch4.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Find the image line
image_line_idx = -1
for i, line in enumerate(lines):
    if '<img src="data:image/png;base64' in line:
        image_line_idx = i
        break

if image_line_idx == -1:
    print("Image not found")
    exit(1)

image_line = lines.pop(image_line_idx)

# 2. Find q5 solution start
solution_start_idx = -1
for i, line in enumerate(lines):
    if '"id": "q5",' in line:
        for j in range(i, i+10):
            if '"solution": [' in lines[j]:
                solution_start_idx = j
                break
        if solution_start_idx != -1:
            break

if solution_start_idx != -1:
    lines.insert(solution_start_idx + 1, image_line)
    print("Fixed image position")
else:
    print("Could not find q5 solution")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)
