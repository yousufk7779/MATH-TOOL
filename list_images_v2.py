
import re

file_path = r"d:\All NCERT SOLUTIONS\docx_summary.txt"
out_path = r"d:\All NCERT SOLUTIONS\image_paragraphs.txt"
with open(file_path, 'r', encoding='utf-8') as f, open(out_path, 'w', encoding='utf-8') as out:
    for line in f:
        match = re.search(r'(P\d+): \[([1-9]\d*) images\](.*)', line)
        if match:
            pnum = match.group(1)
            count = match.group(2)
            text = match.group(3).strip()
            out.write(f"{pnum} ({count} images): {text}\n")
