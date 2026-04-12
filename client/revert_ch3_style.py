import os

dir_path = 'data/chapter3'
files = ['overview.html', 'examples.html', 'exercise1.html', 'exercise2.html', 'exercise3.html', 'mcqs.html']

for filename in files:
    path = os.path.join(dir_path, filename)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Font reversion
    # Restore Kalam to Google Fonts import
    if 'Nunito:wght@400;600;700' in content and 'Kalam' not in content:
        content = content.replace('family=Nunito:wght@400;600;700', 'family=Nunito:wght@400;600;700&family=Kalam:wght@400;700')
    
    # Replace Noto Sans with Kalam (both single and double quotes)
    content = content.replace("'Noto Sans', sans-serif", "'Kalam', cursive")
    
    # 2. Heading color reversion (#FFAB00 -> #6C63FF)
    content = content.replace('#FFAB00', '#6C63FF')
    
    # 3. Special for overview.html: formula background
    if filename == 'overview.html':
        content = content.replace('background-color: transparent;', 'background-color: #fff3e0;')
        content = content.replace('border: none;', 'border: 1px solid #ffe0b2;')
        content = content.replace('color: #6C63FF;', 'color: #D32F2F;', 1) # Only for the formula part usually
        # Actually more reliable is to replace the style block content specifically
        content = content.replace('.formula {\\n            background-color: transparent;\\n            padding: 3px 6px;\\n            border-radius: 4px;\\n            color: #D32F2F;\\n            font-weight: 700;\\n            display: inline-block;\\n            margin-bottom: 5px;\\n            border: none;\\n        }',
                                  '.formula {\\n            background-color: #fff3e0;\\n            padding: 3px 6px;\\n            border-radius: 4px;\\n            color: #D32F2F;\\n            font-weight: 700;\\n            display: inline-block;\\n            margin-bottom: 5px;\\n            border: 1px solid #ffe0b2;\\n        }')
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Font and color updates reverted for Chapter 3.")
