import re

with open('generate_ch12.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("chapter12", "chapter14")
content = content.replace("math-ch12.ts", "math-ch14.ts")

content = content.replace("Surface_Areas_and_Volumes_Overview.html", "Probability_Overview.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.1.html", "Probability_Exercise_14.1.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.2.html", "Probability_Exercise_14.1.html")
content = content.replace("Surface_Areas_and_Volumes_Examples.html", "Probability_Examples.html")
content = content.replace("Surface_Areas_and_Volumes_MCQs.html", "Probability_MCQs.html")

content = re.sub(r'const exercise2 = readHtml\(".*?"\);\n', '', content)
content = re.sub(r'\{ id: "exercise2".*?\},\n', '', content)
content = re.sub(r'exercise2: `\$\{exercise2\}`,\n', '', content)

content = content.replace('{ id: "exercise1", name: "Exercise 12.1", questions: [] }',
                          '{ id: "exercise1", name: "Exercise 14.1", questions: [] }')

content = content.replace('mathCh12', 'mathCh14')
content = content.replace('number: 12', 'number: 14')
content = content.replace('title: "Surface Areas and Volumes"', 'title: "Probability"')
content = content.replace('Loading Chapter 12...', 'Loading Chapter 14...')

with open('generate_ch14.js', 'w', encoding='utf-8') as f:
    f.write(content)
