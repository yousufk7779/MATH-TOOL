import re

with open('generate_ch12.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("chapter12", "chapter3")
content = content.replace("math-ch12.ts", "math-ch3.ts")

content = content.replace("Surface_Areas_and_Volumes_Overview.html", "overview.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.1.html", "exercise1.html")
content = content.replace("Surface_Areas_and_Volumes_Exercise_12.2.html", "exercise2.html")
content = content.replace("Surface_Areas_and_Volumes_Examples.html", "examples.html")

# Remove htmlMcqs from reading
content = re.sub(r'const mcqs = readHtml\(.*?\);\n', '', content)

# Exercise 3 injection
content = content.replace('const exercise2 = readHtml("exercise2.html");',
                          'const exercise2 = readHtml("exercise2.html");\nconst exercise3 = readHtml("exercise3.html");')

content = content.replace('{ id: "exercise2", name: "Exercise 12.2", questions: [] },',
                          '{ id: "exercise2", name: "Exercise 3.2", questions: [] },\n        { id: "exercise3", name: "Exercise 3.3", questions: [] },')

content = content.replace('exercise2: `${exercise2}`,',
                          'exercise2: `${exercise2}`,\n        exercise3: `${exercise3}`,')

content = content.replace('{ id: "exercise1", name: "Exercise 12.1", questions: [] }',
                          '{ id: "exercise1", name: "Exercise 3.1", questions: [] }')

content = content.replace('mathCh12', 'mathCh3')
content = content.replace('number: 12', 'number: 3')
content = content.replace('title: "Surface Areas and Volumes"', 'title: "Pair of Linear Equations"')
content = content.replace('Loading Chapter 12...', 'Loading Chapter 3...')

# Add fs.readFileSync so JS reads it natively without string interpolation escaping issues
content = content.replace('const overview = readHtml', 'const mcqsJson = fs.readFileSync("mcqs_extracted.json", "utf-8");\nconst overview = readHtml')

# Replace the mcqs property in the tsCode
content = content.replace('mcqs: [],', 'mcqs: ${mcqsJson},')

# Remove htmlMcqs property
content = re.sub(r'htmlMcqs: `\$\{mcqs\}`\n', '', content)

with open('generate_ch3.js', 'w', encoding='utf-8') as f:
    f.write(content)
