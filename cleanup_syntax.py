import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix double commas
content = content.replace(',,', ',')

# Ensure no literal newlines in strings (again, just to be sure)
# Especially for line 95-96
content = content.replace('ensuring it burns\nproperly in air', 'ensuring it burns properly in air')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up double commas in sci-chem-1.ts.")
