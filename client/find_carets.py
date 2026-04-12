
import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-phy-1.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find any character followed by ^ and then another character
matches = re.finditer(r'.{1,10}\^.{1,10}', content)
for m in matches:
    print(repr(m.group(0)))
