
import re

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix missing commas in arrays
# Look for "</div>" followed by a newline and then another " or <
# But only within brackets []

def fix_commas(text):
    # This regex looks for a closing quote that is NOT followed by a comma
    # but IS followed by whitespace and another opening quote.
    # It assumes the strings are on separate lines.
    pattern = r'("</div>")(\s+)"'
    replacement = r'\1,\2"'
    
    new_text = re.sub(pattern, replacement, text)
    
    # Also for cases with images
    pattern2 = r'(/></div>")(\s+)"'
    replacement2 = r'\1,\2"'
    new_text = re.sub(pattern2, replacement2, new_text)
    
    return new_text

# Also fix the specific lines I identified
content = fix_commas(content)

# Correct the double image in sp3-ex-11 if they are the same
# Actually I'll just check for syntax errors first.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed commas.")
