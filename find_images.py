
file_path = r"d:\All NCERT SOLUTIONS\client\data\content\sci-phy-3.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if "data:image" in line:
            print(f"Line {i}: Length {len(line)}")
