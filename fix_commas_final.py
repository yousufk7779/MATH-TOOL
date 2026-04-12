import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix missing commas in question objects
content = content.replace('shortBoardPattern: true\n                }', 'shortBoardPattern: true,\n                }')
content = content.replace('shortBoardPattern: true\n', 'shortBoardPattern: true,\n')

# Check for other missing commas
# In MCQs
content = content.replace('correctAnswer: "c"\n        }', 'correctAnswer: "c",\n        }')
content = content.replace('correctAnswer: "b"\n        }', 'correctAnswer: "b",\n        }')
content = content.replace('correctAnswer: "d"\n        }', 'correctAnswer: "d",\n        }')
content = content.replace('correctAnswer: "a"\n        }', 'correctAnswer: "a",\n        }')

# Ensure property-level commas (exercises, summary, crux, etc.)
content = content.replace('      "To prevent rancidity, we use air-tight containers, flush bags with nitrogen gas (like in chips packets), or add antioxidants."\n    ]', '      "To prevent rancidity, we use air-tight containers, flush bags with nitrogen gas (like in chips packets), or add antioxidants."\n    ],')
# ... and so on for all main properties. 

# Re-apply the main property fixes to be absolutely sure
content = content.replace('equations."', 'equations.",')
if 'definitions: [' in content and '],\n    keyPoints' not in content:
    content = content.replace('definitions: [\n', 'definitions: [\n') # trigger re-scan
    
# Let's use a more robust regex for the main properties
properties = ['definitions', 'keyPoints', 'formulas', 'crux', 'mcqs', 'summary', 'exercises']
for prop in properties:
    pattern = r'(' + prop + r': \[.*?\])\n'
    content = re.sub(pattern, r'\1,\n', content, flags=re.DOTALL)

# Cleanup double commas if regex added them
content = content.replace(',,', ',')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied missing commas between properties.")
