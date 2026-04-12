
import re

line = '                    "question": "<div style=\\"text-align: justify;\\">Use the data in the table given below and answer the following questions.</div>",'
def normalize(text):
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&(?:nbsp|amp|lt|gt|quot|#\d+|Omega|omega|deg|times|ap|mu);', ' ', text)
    text = re.sub(r'\s+', '', text).strip()
    return text.lower()

print(f"Norm line: {normalize(line)}")
print(f"Norm frag: {normalize('dataintable')}")
