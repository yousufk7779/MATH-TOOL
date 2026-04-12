import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix literal newlines inside double-quoted strings
# This is a bit tricky with full file regex, so let's target the specific known one first
# and then try a more general cleanup if needed.

# Specific fix for the Magnesium ribbon answer
content = content.replace('ensuring it burns\nproperly in air', 'ensuring it burns properly in air')
content = content.replace('ensuring it burns\r\nproperly in air', 'ensuring it burns properly in air')

# Also check for any other literal newlines that might cause issues. 
# A common issue is the formatting scripts adding newlines.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Attempted to fix literal newlines in strings.")
