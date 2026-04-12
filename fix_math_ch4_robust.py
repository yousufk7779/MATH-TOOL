import os

filepath = r'd:\All NCERT SOLUTIONS\client\data\content\math-ch4.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

image_line_idx = -1
for i, line in enumerate(lines):
    if 'data:image/png;base64' in line:
        image_line_idx = i
        break

if image_line_idx == -1:
    print("Image not found")
    exit(1)

image_line = lines.pop(image_line_idx)

solution_start_idx = -1
for i, line in enumerate(lines):
    if '"id": "q5",' in line:
        for j in range(i, i+15):
            if j < len(lines) and '"solution": [' in lines[j]:
                solution_start_idx = j
                break
        if solution_start_idx != -1:
            break

if solution_start_idx != -1:
    # Check if we need to add a newline to the image line if it doesn't have one
    if not image_line.endswith('\n'):
        image_line += '\n'
    lines.insert(solution_start_idx + 1, image_line)
    print(f"Fixed image position from {image_line_idx} to {solution_start_idx + 1}")
else:
    print("Could not find q5 solution")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)
