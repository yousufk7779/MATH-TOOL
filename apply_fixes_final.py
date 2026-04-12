
import json
import re
import os

ts_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
results_path = r"d:\All NCERT SOLUTIONS\search_results.json"

with open(results_path, "r", encoding="utf-8") as f:
    results = json.load(f)

with open(ts_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

def normalize(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text.lower()

applied_count = 0
for item in results:
    pid = item['pid']
    fragment = item['fragment']
    images = item.get('images', [])
    if not images:
        continue
    
    b64 = images[0]
    norm_frag = normalize(fragment)
    
    found = False
    for i, line in enumerate(lines):
        if norm_frag in normalize(line):
            # Check if this specific PID is already there
            has_pid = False
            # Search nearby (5 lines before/after)
            for j in range(max(0, i-5), min(len(lines), i+6)):
                if f'alt="{pid}"' in lines[j]:
                    has_pid = True
                    break
            
            if not has_pid:
                # Insert the image
                # Standard formatting for images in this file
                img_html = f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="{pid}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'
                
                # Check if we should insert AFTER the line or if it needs a comma
                line_stripped = lines[i].strip()
                if line_stripped.endswith('",') or line_stripped.endswith('"]'):
                    # It's an entry in an array. We should probably insert it as a new array element if it's in "solution"
                    # or handle it carefully.
                    pass
                
                # Simple insertion after the matched line for now, adjusting for common JSON patterns
                if '",' in lines[i] or '"],' in lines[i]:
                     # if it's already a complete line, append.
                     pass
                
                lines.insert(i + 1, img_html)
                print(f"Inserted {pid} after line {i+1}")
                applied_count += 1
                found = True
                break # Only insert once per PID
    
    if not found:
        # Try a shorter version of the fragment if not found
        short_frag = fragment[:20]
        norm_short = normalize(short_frag)
        for i, line in enumerate(lines):
             if norm_short in normalize(line):
                  # Check if already there
                  # ... same logic ...
                  pass

with open(ts_path, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"Total images applied: {applied_count}")
