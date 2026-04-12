
import sys
# Set encoding for output to utf-8
sys.stdout.reconfigure(encoding='utf-8')

with open('extracted_images.txt', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if line.startswith('P'):
            print(f"Line {i+1}: {line.strip()}")
        elif line.startswith('IMAGE_B64'):
            print(f"Line {i+1}: IMAGE_B64 snippet: {line[:100]}...")
