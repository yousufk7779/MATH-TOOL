import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the missing comma for the last element in Question 1 solution
# Also fix the "style=' style='" typo
content = content.replace("style=' style='", "style='")
content = content.replace("border-radius: 8px;' /></div>\"", "border-radius: 8px;' /></div>\",")

# Ensure no double commas were created
content = content.replace(",,", ",")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed syntax errors in sci-chem-1.ts.")
