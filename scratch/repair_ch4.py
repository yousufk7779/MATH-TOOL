import os

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\math-ch4.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_match = 'iVBORw0KGgoAAAANSUhEUgAABbIAAAQ7CAYAAABaLVgp'

new_lines = []
found = False
for i, line in enumerate(lines):
    if target_match in line and not found and i > 700:
        print(f"Removing line {i+1}")
        found = True
        continue
    new_lines.append(line)

if found:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Success")
else:
    print("Not found")
