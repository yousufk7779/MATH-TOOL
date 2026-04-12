import re
import os

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for the entire exercise block id: "sc1-it-1"
# It ends with ], followed by the next id: "sc1-it-2"

match = re.search(r'(id: "sc1-it-1",\s+name: "In-Text 1",\s+questions: \[)(.*?)(\s+\]\s+\},\s+\{\s+id: "sc1-it-2")', content, re.DOTALL)

if not match:
    print("Could not find In-Text 1 section. Retrying with simpler search.")
    # Fallback to finding from name: "In-Text 1" to the closing questions bracket
    match = re.search(r'(name: "In-Text 1",\s+questions: \[)(.*?)(\s+\]\s+\},)', content, re.DOTALL)

if not match:
    print("Could not find In-Text 1 section. Aborting.")
    exit(1)

header = match.group(1)
questions_content = match.group(2)
footer = match.group(3)

# Find all question objects
# Each question starts with { and ends with }, shortBoardPattern: true }
questions = re.findall(r'(\s+\{\s+id: "sc1-it-1-\d+",.*?shortBoardPattern: true\s+\})', questions_content, re.DOTALL)

updated_questions = []

for q_text in questions:
    # 1. Justify Question
    # Find the question field
    q_match = re.search(r'question: "(.*?)",', q_text, re.DOTALL)
    if q_match:
        original_q = q_match.group(1)
        # Convert \n to <br> for HTML rendering
        clean_q = original_q.strip().replace('\\n', '<br>')
        # Wrap in justified div with dark theme compatible colors if needed, but styling usually handled by parent
        # Justify text as requested
        new_q = f"<div style=\'text-align: justify;\'>{clean_q}</div>"
        q_text = q_text.replace(f'question: "{original_q}",', f'question: "{new_q}",')

    # 2. Process Solution array
    # We want each bit of the answer to be on a new line and justified
    s_match = re.search(r'solution: \[(.*?) \],', q_text, re.DOTALL)
    if s_match:
        original_s_content = s_match.group(1)
        # Capture strings between quotes
        lines = re.findall(r'"(.*?)"', original_s_content)
        
        new_lines = []
        for i, line in enumerate(lines):
            line = line.strip()
            # Remove "Answer:" prefix if it exists to replace with a standard formatted one
            line = re.sub(r'^(\\n\s*)?Answer:?\s?', '', line)
            
            if i == 0:
                line = f"<b>Answer:</b><br>{line}"
            
            # Wrap each element in justified div
            line = f"<div style=\'text-align: justify;\'>{line}</div>"
            new_lines.append(f'                        "{line}"')
        
        # Check for image property and move it to an <img> tag in the solution
        img_match = re.search(r'image: "(.*?)",', q_text)
        if img_match:
            b64_data = img_match.group(1)
            # Center the image
            img_tag = f'<div style=\"display: flex; justify-content: center; margin-top: 15px;\"><img src=\"{b64_data}\" style=\"max-width: 100%; height: auto; border: 1px solid #777; border-radius: 8px;\" /></div>'
            new_lines.append(f'                        "{img_tag}"')
            # Remove image property from q_text
            q_text = re.sub(r'\s+image: ".*?",', '', q_text)

        new_s_content = ',\n'.join(new_lines)
        q_text = q_text.replace(original_s_content, '\n' + new_s_content + '\n                    ')

    updated_questions.append(q_text)

new_questions_joined = ''.join(updated_questions)
# Rebuild the block
new_full_match = header + new_questions_joined + footer

final_content = content.replace(match.group(0), new_full_match)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Successfully updated sci-chem-1.ts in Chemistry → Chapter 1 → NCERT Solutions → In-Text 1")
