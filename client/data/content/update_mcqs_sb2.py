import re

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_mcqs = [
    {
        "id": "sb2-mcq-6",
        "question": "Which of the following is an inhibitory plant hormone which causes wilting of leaves?",
        "options": ["(a) Auxin", "(b) Gibberellin", "(c) Cytokinin", "(d) Abscisic acid"],
        "correctAnswer": "d"
    },
    {
        "id": "sb2-mcq-7",
        "question": "Involuntary actions like blood pressure, salivation and vomiting are controlled by the:",
        "options": ["(a) Cerebrum", "(b) Medulla in the hindbrain", "(c) Cerebellum", "(d) Pons"],
        "correctAnswer": "b"
    },
    {
        "id": "sb2-mcq-8",
        "question": "Which endocrine gland is often referred to as the 'Master Gland'?",
        "options": ["(a) Thyroid gland", "(b) Adrenal gland", "(c) Pituitary gland", "(d) Pancreas"],
        "correctAnswer": "c"
    },
    {
        "id": "sb2-mcq-9",
        "question": "The dramatic changes in body appearance during puberty are mainly due to the secretion of:",
        "options": ["(a) Thyroxine and Insulin", "(b) Testosterone and Oestrogen", "(c) Adrenaline and Thyroxine", "(d) Insulin and Testosterone"],
        "correctAnswer": "b"
    },
    {
        "id": "sb2-mcq-10",
        "question": "A person having a very tall and giant-like appearance likely has over-secretion of:",
        "options": ["(a) Growth hormone", "(b) Adrenaline", "(c) Insulin", "(d) Thyroxine"],
        "correctAnswer": "a"
    }
]

def format_mcq(mcq):
    options_js = ",\n".join([f'            "{opt}"' for opt in mcq["options"]])
    return f"""        {{
            id: "{mcq['id']}",
            question: "{mcq['question']}",
            options: [
{options_js}
            ],
            correctAnswer: "{mcq['correctAnswer']}"
        }}"""

# Find the mcqs array end
pattern = re.compile(r'(mcqs:\s*\[.*?)(\s*\])', re.DOTALL)
match = pattern.search(content)

if match:
    existing_mcqs_part = match.group(1)
    new_mcqs_js = ",\n".join([format_mcq(m) for m in new_mcqs])
    
    # Ensure there is a comma after the last existing MCQ if not there
    if not existing_mcqs_part.strip().endswith(','):
        existing_mcqs_part = existing_mcqs_part.rstrip() + ","
    
    updated_mcqs = existing_mcqs_part + "\n" + new_mcqs_js + match.group(2)
    new_content = content[:match.start()] + updated_mcqs + content[match.end():]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("MCQs updated successfully.")
else:
    print("Could not find mcqs array.")
