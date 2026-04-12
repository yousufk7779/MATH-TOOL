import base64
import os

directory = r'C:\Users\hp\.gemini\antigravity\brain\5f289ee6-cb2d-4d3c-b14f-c5ab390b3671'
files = [
    'math_ch7_ex1_right_triangle_1772485558560.png',
    'math_ch7_ex1_v2_1772485661018.png',
    'math_ch7_ex2_1772485687239.png',
    'math_ch7_ex3_1772485701236.png',
    'math_ch7_ex4_1772485715153.png',
    'math_ch7_ex5_1772485727316.png',
    'math_ch7_ex6_1772485741531.png',
    'math_ch7_ex7_1772485763407.png',
    'math_ch7_ex8_1772485775719.png',
    'math_ch7_ex9_1772485789361.png',
    'math_ch7_ex10_1772485800643.png',
    'math_ch7_q711_1772485855752.png',
    'math_ch7_q713_1772485867538.png',
    'math_ch7_q714_1772485891852.png',
    'math_ch7_q715_1772485905574.png',
    'math_ch7_q716_1772485927492.png',
    'math_ch7_q717_1772485942985.png'
]

for filename in files:
    path = os.path.join(directory, filename)
    if os.path.exists(path):
        with open(path, 'rb') as f:
            print(f"--- {filename} ---")
            print(base64.b64encode(f.read()).decode('utf-8'))
