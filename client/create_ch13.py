with open('generate_ch12.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("chapter12", "chapter13")
content = content.replace("math-ch12.ts", "math-ch13.ts")

content = content.replace("Surface_Areas_and_Volumes_Overview.html", "Statistics_Overview.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.1.html", "Statistics_Exercise_13.1.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.2.html", "Statistics_Exercise_13.2.html")
content = content.replace("Surface_Areas_and_Volumes_Examples.html", "Statistics_Examples.html")
content = content.replace("Surface_Areas_and_Volumes_MCQs.html", "Statistics_MCQs.html")

content = content.replace('const exercise2 = readHtml("Statistics_Exercise_13.2.html");',
                          'const exercise2 = readHtml("Statistics_Exercise_13.2.html");\nconst exercise3 = readHtml("Statistics_Exercise_13.3.html");')

content = content.replace('{ id: "exercise2", name: "Exercise 12.2", questions: [] },',
                          '{ id: "exercise2", name: "Exercise 13.2", questions: [] },\n        { id: "exercise3", name: "Exercise 13.3", questions: [] },')

content = content.replace('exercise2: `${exercise2}`,',
                          'exercise2: `${exercise2}`,\n        exercise3: `${exercise3}`,')

content = content.replace('{ id: "exercise1", name: "Exercise 12.1", questions: [] }',
                          '{ id: "exercise1", name: "Exercise 13.1", questions: [] }')

content = content.replace('mathCh12', 'mathCh13')
content = content.replace('number: 12', 'number: 13')
content = content.replace('title: "Surface Areas and Volumes"', 'title: "Statistics"')
content = content.replace('Loading Chapter 12...', 'Loading Chapter 13...')

with open('generate_ch13.js', 'w', encoding='utf-8') as f:
    f.write(content)
