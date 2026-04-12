import os

filepath = r'd:\All NCERT SOLUTIONS\client\data\content\math-ch4.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

image_line_idx = -1
for i, line in enumerate(lines):
    if '<img src="data:image/png;base64' in line:
        image_line_idx = i
        break

solution_line_idx = -1
for i, line in enumerate(lines):
    if '"id": "q5",' in line:
        for j in range(i, i+10):
            if '"solution": [' in lines[j]:
                solution_line_idx = j
                break
        if solution_line_idx != -1:
            break

if image_line_idx != -1 and solution_line_idx != -1:
    line_to_move = lines.pop(image_line_idx)
    # Insert it right after the solution start
    lines.insert(solution_line_idx + 1, line_to_move)
    print(f"Moved image from {image_line_idx} to {solution_line_idx + 1}")
else:
    print(f"Failed: image_line_idx={image_line_idx}, solution_line_idx={solution_line_idx}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)
