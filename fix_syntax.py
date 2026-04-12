import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Add missing commas between question objects in In-Text 1
content = content.replace('shortBoardPattern: true\n                }\n                {', 'shortBoardPattern: true\n                },\n                {')

# Fix 2: Fix nested double quotes in the image tag
content = content.replace('style="display: flex;', "style='display: flex;")
content = content.replace('margin-top: 15px;">', "margin-top: 15px;'>")
content = content.replace('src="data:image', "src='data:image")
content = content.replace('style="max-width', "style='max-width")
content = content.replace('8px;" /></div>"', "8px;' /></div>\"")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed syntax errors in sci-chem-1.ts (missing commas and nested quotes).")
