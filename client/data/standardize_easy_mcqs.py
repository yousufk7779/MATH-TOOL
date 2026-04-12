import json
import os

def standardize_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    updated_data = []
    labels = ["(A)", "(B)", "(C)", "(D)"]
    
    for item in data:
        options = item.get("options", [])
        correct_answer_text = item.get("correctAnswer", "")
        
        new_options = []
        new_correct_answer = ""
        
        for i, opt in enumerate(options):
            label = labels[i] if i < len(labels) else f"({chr(65+i)})"
            # Add label if not already present
            if not opt.strip().startswith(label):
                new_opt = f"{label} {opt}"
            else:
                new_opt = opt
            new_options.append(new_opt)
            
            # Check if this is the correct answer
            if opt == correct_answer_text:
                new_correct_answer = chr(65 + i) # 'A', 'B', etc.
        
        # If correct answer not found in options, keep it as is (might be an error in data)
        if not new_correct_answer:
            print(f"Warning: Correct answer '{correct_answer_text}' not found in options for item {item.get('id')}")
            new_correct_answer = correct_answer_text
            
        item["options"] = new_options
        item["correctAnswer"] = new_correct_answer
        updated_data.append(item)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, indent=2)
    print(f"Standardized {file_path}")

math_path = r"d:\All NCERT SOLUTIONS\client\data\easy_mcqs_maths.json"
science_path = r"d:\All NCERT SOLUTIONS\client\data\easy_mcqs_science.json"

standardize_json(math_path)
standardize_json(science_path)
