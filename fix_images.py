import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the BOM character (\ufeff)
new_content = content.replace('\ufeff', '')

# 2. Correct MIME type from image/png to image/jpeg based on the /9j/ base64 header
new_content = new_content.replace('data:image/png;base64,', 'data:image/jpeg;base64,')

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully fixed image visibility in sci-bio-4.ts")
