import base64
import os

ts_file = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-2.ts'
it3_b64_file = r'd:\All NCERT SOLUTIONS\client\data\content\it3_base64.txt'

with open(it3_b64_file, 'r') as f:
    b64 = f.read().strip()

data_uri = f"data:image/png;base64,{b64}"

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Questions for In-Text 3
it3_questions = [
    {
        "id": "sb2-it3-q1",
        "number": "1",
        "question": "How does chemical coordination take place in animals?",
        "solution": [
            "<p><b>Answers:</b> Chemical coordination in animals is performed by the <b>endocrine system</b> through specialized chemicals called <b>hormones</b>.</p>",
            "<ul><li>Hormones are secreted by <b>endocrine glands</b> directly into the blood.</li><li>They travel through the bloodstream to reach specific <b>target organs</b> or tissues.</li><li>These organs have specific receptors that recognize and respond to the hormone.</li></ul>",
            "<div style='text-align: center; margin: 15px 0;'><img src='" + data_uri + "' style='width: 100%; max-width: 400px; height: auto; border-radius: 8px;' alt='Endocrine Glands' /></div>"
        ],
        "answer": "Chemical coordination is achieved by the endocrine system via hormones secreted directly into the blood to act on specific target organs."
    },
    {
        "id": "sb2-it3-q2",
        "number": "2",
        "question": "Why is the use of iodized salt advisable?",
        "solution": [
            "<p><b>Answers:</b> It is advisable because:</p>",
            "<ul><li><b>Iodine</b> is essential for the <b>thyroid gland</b> to produce the hormone <b>thyroxine</b>.</li><li>Thyroxine regulates carbohydrate, protein, and fat metabolism for optimal growth.</li><li>Deficiency of iodine leads to <b>goitre</b>, characterized by a swollen neck.</li></ul>"
        ],
        "answer": "Iodized salt is necessary for thyroxine production by the thyroid gland, which regulates metabolism and prevents goitre."
    },
    {
        "id": "sb2-it3-q3",
        "number": "3",
        "question": "How does our body respond when adrenaline is secreted into the blood?",
        "solution": [
            "<p><b>Answers:</b> Adrenaline (the 'fight or flight' hormone) prepares the body for action:</p>",
            "<ul><li><b>Heart beat increases:</b> To supply more oxygen to muscles.</li><li><b>Breathing rate increases:</b> Due to the contraction of diaphragm and rib muscles.</li><li><b>Blood diversion:</b> Blood is diverted from the digestive system/skin towards skeletal muscles.</li><li><b>Energy boost:</b> Liver releases more glucose into the blood.</li></ul>"
        ],
        "answer": "Adrenaline increases heart rate and breathing, diverts blood to muscles, and boosts energy to prepare the body for emergency situations."
    },
    {
        "id": "sb2-it3-q4",
        "number": "4",
        "question": "Why are some patients of diabetes treated by giving injections of insulin?",
        "solution": [
            "<p><b>Answers:</b> Diabetes occurs when the <b>pancreas</b> does not produce enough <b>insulin</b>.</p>",
            "<ul><li>Insulin is responsible for regulating (lowering) <b>blood sugar levels</b>.</li><li>If sugar levels remain high, it can lead to severe organ damage.</li><li>Therefore, supplemental insulin injections are given to maintain normal sugar balance.</li></ul>"
        ],
        "answer": "Insulin injections are given to diabetic patients to regulate high blood sugar levels caused by insufficient natural insulin production."
    }
]

import json
it3_json = json.dumps(it3_questions, indent=16)

# Find the In-Text 3 object in the exercises array
# Look for id: "sb2-it-3"
target_id = 'id: "sb2-it-3"'
questions_marker = 'questions: []'

if target_id in content:
    tab_start = content.find(target_id)
    marker_pos = content.find(questions_marker, tab_start)
    if marker_pos != -1:
        # Construct the new questions block manually to match TS style slightly better than pure JSON
        # Actually, it's easier to just replace 'questions: []' with correctly formatted string
        # Let's build it.
        
        replacement = 'questions: ' + json.dumps(it3_questions, indent=16).replace('null', '[]') # Simplistic
        # To avoid double quotes around keys and use single quotes for values would be better
        # But valid JSON is usually okay in TS. I'll use a better formatter.
        
        def format_obj(obj, indent_level=4):
            ind = " " * indent_level
            if isinstance(obj, list):
                if not obj: return "[]"
                res = "[\n"
                for item in obj:
                    res += format_obj(item, indent_level + 4) + ",\n"
                res = res.rstrip(",\n") + "\n" + ind + "]"
                return res
            elif isinstance(obj, dict):
                res = "{\n"
                for k, v in obj.items():
                    res += ind + "    " + k + ": " + format_obj(v, indent_level + 4) + ",\n"
                res = res.rstrip(",\n") + "\n" + ind + "}"
                return res
            elif isinstance(obj, str):
                return json.dumps(obj)
            else:
                return str(obj)

        formatted_questions = format_obj(it3_questions, 12)
        full_replacement = 'questions: ' + formatted_questions
        
        new_content = content[:marker_pos] + full_replacement + content[marker_pos + len(questions_marker):]
        
        with open(ts_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Update successful")
    else:
        print("Questions marker not found")
else:
    print("In-Text 3 tab not found")
