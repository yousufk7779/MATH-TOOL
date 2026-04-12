import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'
b64_un_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_unity.txt'
b64_cp_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_complex.txt'

def read_b64(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = f.read().strip()
        if data.startswith('\ufeff'):
            data = data[1:]
        return data

b64_unity = read_b64(b64_un_path)
b64_complex = read_b64(b64_cp_path)

questions = """            questions: [
                {
                    id: "sb4-it6-q1",
                    number: "1",
                    question: "Why are human beings who look so different from each other in terms of size, color and looks said to belong to the same species?",
                    solution: [
                        "<p><b>Answers:</b> All human beings, despite their physical variations, belong to a single species, <i>Homo sapiens</i>, for the following reasons:</p>",
                        "<ul><li><b>Common Origin:</b> Genetic studies show that all humans evolved from a common ancestor in Africa.</li><li><b>Interbreeding:</b> The biological definition of a species is a group of organisms that can interbreed to produce fertile offspring. Humans from all parts of the world can successfully mate and have children.</li><li><b>Genetic Similarity:</b> Our underlying genetic blueprint is nearly identical across all populations. Differences in color or height are only superficial adaptations to the environment.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_unity + """' style='width: 100%; max-width: 350px; height: auto; border-radius: 8px;' alt='Human Unity' /></div>"
                    ],
                    answer: "Humans are one species because they share a common ancestor and can interbreed to produce fertile offspring, regardless of physical differences."
                },
                {
                    id: "sb4-it6-q2",
                    number: "2",
                    question: "In evolutionary terms, can we say which among bacteria, spiders, fish and chimpanzees have a ‘better’ body design? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> No, we cannot say one has a 'better' design. Evolution is not about perfection, but <b>adaptation</b>:</p>",
                        "<ul><li><b>Fitness is Relative:</b> A 'better' design is simply one that works in a specific environment. Bacteria are 'best' at surviving extreme heat/cold, while chimpanzees are 'best' at forest life.</li><li><b>Survival Success:</b> Simple organisms like bacteria have survived for billions of years, proving their design is highly efficient.</li><li><b>Complexity vs. Superiority:</b> Evolution results in both simple and complex forms. Complexity does not necessarily mean an organism is superior in terms of evolutionary survival.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_complex + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Adaptation vs Complexity' /></div>"
                    ],
                    answer: "No. In evolution, 'better' means better adapted to the environment. Bacteria are just as successful survivors as complex mammals."
                }
            ]"""

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_start = 'id: "sb4-it-6",'
target_questions = 'questions: []'

block_pos = content.find(target_start)
if block_pos != -1:
    q_pos = content.find(target_questions, block_pos)
    if q_pos != -1:
        new_content = content[:q_pos] + questions + content[q_pos + len(target_questions):]
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated sci-bio-4.ts with In-Text 6")
    else:
        print("Could not find questions placeholder")
else:
    print("Could not find In-Text 6 tab")
