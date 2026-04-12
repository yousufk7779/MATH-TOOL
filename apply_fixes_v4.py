
import json
import re

TS_PATH = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
RESULTS_PATH = r"d:\All NCERT SOLUTIONS\search_results.json"

def normalize(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text.lower()

with open(RESULTS_PATH, "r", encoding="utf-8") as f:
    results = json.load(f)

with open(TS_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

def get_image_block(pid, b64):
    return f'                        <div style="margin: 15px 0;"><img src="{b64}" alt="{pid}" style="width: 100%; max-width: 600px; display: block; margin: 15px auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n'

inserted_count = 0

for item in results:
    pid = item['pid']
    fragment = item['fragment']
    images = item.get('images', [])
    if not images:
        continue
    
    norm_frag = normalize(fragment)
    found_index = -1
    for i, line in enumerate(lines):
        if norm_frag in normalize(line):
            found_index = i
            break
    
    if found_index == -1:
        # Try a substring match if exact normalization failed
        if len(norm_frag) > 30:
            short_norm = norm_frag[:30]
            for i, line in enumerate(lines):
                if short_norm in normalize(line):
                    found_index = i
                    break
    
    if found_index != -1:
        # Check if already has image for this PID nearby
        has_pid = False
        for j in range(max(0, found_index-10), min(len(lines), found_index+10)):
            if f'alt="{pid}"' in lines[j]:
                has_pid = True
                break
        
        if not has_pid:
            # Insert images
            # If multiple images, insert them all
            new_blocks = []
            for img in images:
                new_blocks.append(get_image_block(pid, img))
            
            # Determine where to insert
            # If the current line is a question line, insert after it.
            # We want to insert after the </div> if it's there
            insertion_point = found_index + 1
            
            # Special handling for line terminations to keep JSON valid
            match_line = lines[found_index].rstrip()
            if match_line.endswith('",') or match_line.endswith('",'):
                 # It's an array element or object property end
                 pass
            
            for block in reversed(new_blocks):
                lines.insert(insertion_point, block)
            
            print(f"Inserted {pid} at line {insertion_point}")
            inserted_count += 1

with open(TS_PATH, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"Grand total inserted: {inserted_count}")
