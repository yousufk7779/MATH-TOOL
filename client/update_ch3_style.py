import os
import re

dir_path = 'data/chapter3'
files = ['overview.html', 'examples.html', 'exercise1.html', 'exercise2.html', 'exercise3.html', 'mcqs.html']

for filename in files:
    path = os.path.join(dir_path, filename)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Font replacement
    # Remove Kalam from Google Fonts import
    content = content.replace('family=Kalam:wght@400;700&', '')
    content = content.replace('&family=Kalam:wght@400;700', '')
    # Replace Kalam Font Family (both single and double quotes)
    content = content.replace("'Kalam', cursive", "'Noto Sans', sans-serif")
    content = content.replace('"Kalam", cursive', "'Noto Sans', sans-serif")
    
    # 2. Heading color replacement (#6C63FF -> #FFAB00)
    content = content.replace('#6C63FF', '#FFAB00')
    
    # 3. Special for overview.html: formula background
    if filename == 'overview.html':
        content = content.replace('background-color: #fff3e0;', 'background-color: transparent;')
        content = content.replace('border: 1px solid #ffe0b2;', 'border: none;')
        content = content.replace('color: #D32F2F;', 'color: #FFAB00;') # Use theme color for case headings too
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Font and color updates applied to Chapter 3.")
