
import re

file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix duplicates for sp3-it-3-1
# We saw line 185 and 186 both had images.
# They were basically identical.
# I will search for the double entry and replace with single.

# Note: the regex needs to handle the base64 which is long.
# I'll use a text-based approach to find the first solution array and fix it.

# Actually, I'll use a more strategic replacement.
# Find two consecutive div img blocks and keep only one.

# Pattern: "<div style=\"margin: 15px 0;\"><img src=\"data:image/[^\"]+\" [^>]+ /></div>",
# Followed by optional spaces and the same thing.

img_pattern = r'"<div style=\\"margin: 15px 0;\\"><img src=\\"data:image/[^"]+\\" [^>]+ /></div>",'

# Search for matches
matches = list(re.finditer(img_pattern, content))
print(f"Found {len(matches)} image blocks.")

# I'll iterate and if two matches are separated only by whitespace, I'll remove one.
new_content = content
offset = 0
for i in range(len(matches) - 1):
    m1 = matches[i]
    m2 = matches[i+1]
    
    # Text between them
    between = content[m1.end():m2.start()]
    if between.strip() == "":
        # They are duplicates or consecutive images
        # Check if they are the SAME image (comparing first 1000 chars of b64)
        if m1.group(0)[:1000] == m2.group(0)[:1000]:
            print(f"Removing duplicate at {m2.start()}")
            # Remove m2
            new_content = new_content[:m2.start() - offset] + new_content[m2.end() - offset:]
            offset += (m2.end() - m2.start())

# I also need to check if I missed any commas between strings in arrays.
# In step 512, line 184 was:
# 184:                         "<div>Answer: ... potential 6 V.</div>"
# 185:                         "<div style=\"margin: 15px 0;\"><img ... /></div>",
# There was NO COMMA at the end of 184! This will cause a syntax error in TS.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Cleaned duplicates.")
