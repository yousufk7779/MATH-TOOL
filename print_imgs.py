
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

print("--- P50 ---")
print(p50_img)
print("--- P75 ---")
print(p75_img)
print("--- P80 ---")
print(p80_img)
