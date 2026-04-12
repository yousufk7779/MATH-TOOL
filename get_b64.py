
import sys

def get_image_b64(p_num):
    with open(r"d:\All NCERT SOLUTIONS\full_image_details.txt", 'r', encoding='utf-8') as f:
        content = f.read()
        paragraphs = content.split("PARAGRAPH INDEX: ")
        for p in paragraphs:
            if p.startswith(str(p_num) + "\n"):
                # Found the paragraph
                import re
                match = re.search(r'BASE64: (.*)', p)
                if match:
                    return match.group(1).strip()
    return None

if __name__ == "__main__":
    p_num = sys.argv[1]
    b64 = get_image_b64(p_num)
    if b64:
        print(b64)
    else:
        print("NOT FOUND")
