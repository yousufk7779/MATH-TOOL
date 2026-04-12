
import json

with open(r"d:\All NCERT SOLUTIONS\full_images.json", "r", encoding="utf-8") as f:
    data = json.load(f)

def get_img(p_id):
    if p_id in data and data[p_id]["images"]:
        return data[p_id]["images"][0]
    return None

p50_img = get_img("P50")
p75_img = get_img("P75")
p80_img = get_img("P80")

with open(r"d:\All NCERT SOLUTIONS\extracted_base64.txt", "w", encoding="utf-8") as out:
    out.write("--- P50 ---\n")
    out.write(str(p50_img) + "\n")
    out.write("--- P75 ---\n")
    out.write(str(p75_img) + "\n")
    out.write("--- P80 ---\n")
    out.write(str(p80_img) + "\n")
