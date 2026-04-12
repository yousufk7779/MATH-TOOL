import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'
b64_ha_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_homo_ana.txt'
b64_fo_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_fossil.txt'

def read_b64(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = f.read().strip()
        if data.startswith('\ufeff'):
            data = data[1:]
        return data

b64_ha = read_b64(b64_ha_path)
b64_fo = read_b64(b64_fo_path)

questions = """            questions: [
                {
                    id: "sb4-it5-q1",
                    number: "1",
                    question: "Give an example of characteristics being used to determine how close two species are in evolutionary terms.",
                    solution: [
                        "<p><b>Answers:</b> Characteristics like homologous organs help determine the closeness of two species:</p>",
                        "<ul><li><b>Homologous Organs:</b> These are organs that have a similar basic design and origin but perform different functions.</li><li><b>Example:</b> The forelimbs of a human, a bird, and a frog have the same basic bone structure (humerus, radius, ulna, etc.) even though they perform different tasks (gripping, flying, leaping).</li><li><b>Significance:</b> This structural similarity proves that these species share a <b>common ancestor</b>.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_ha + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Homologous vs Analogous' /></div>"
                    ],
                    answer: "Homologous organs, like the forelimbs of mammals, show a similar bone structure and point to a common evolutionary origin."
                },
                {
                    id: "sb4-it5-q2",
                    number: "2",
                    question: "Can the wing of a butterfly and the wing of a bat be considered homologous organs? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> No, they are <b>not homologous organs</b>; they are <b>analogous organs</b>:</p>",
                        "<ul><li><b>Different Structure:</b> A bat wing is made of skin folds stretched over bony fingers, whereas a butterfly wing is a thin membrane supported by veins without bones.</li><li><b>Same Function:</b> Both are used for flight, but their structural designs are completely different.</li><li><b>Different Ancestry:</b> They do not share a common ancestor for wings and evolved independently as adaptations to flight.</li></ul>"
                    ],
                    answer: "No. They are analogous organs because they have different structures but perform the same function, implying independent evolution."
                },
                {
                    id: "sb4-it5-q3",
                    number: "3",
                    question: "What are fossils? What do they tell us about the process of evolution?",
                    solution: [
                        "<p><b>Answers:</b> Fossils are the preserved remains or traces of organisms that lived in the distant past:</p>",
                        "<ul><li><b>Record of Living History:</b> Fossils help us understand which organisms lived during which geological period.</li><li><b>Transitional Forms:</b> They serve as 'missing links' (e.g., *Archaeopteryx*) that show how one group (reptiles) evolved into another (birds).</li><li><b>Relative Age:</b> By looking at rock layers, we can determine the sequence of evolution; simple organisms are usually found in deeper, older layers.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_fo + """' style='width: 100%; max-width: 350px; height: auto; border-radius: 8px;' alt='Fossil Layering' /></div>"
                    ],
                    answer: "Fossils are preserved remains of past life that provide evidence of evolutionary history, transitional links, and the relative age of species."
                }
            ]"""

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_start = 'id: "sb4-it-5",'
target_questions = 'questions: []'

block_pos = content.find(target_start)
if block_pos != -1:
    q_pos = content.find(target_questions, block_pos)
    if q_pos != -1:
        new_content = content[:q_pos] + questions + content[q_pos + len(target_questions):]
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated sci-bio-4.ts with In-Text 5")
    else:
        print("Could not find questions placeholder")
else:
    print("Could not find In-Text 5 tab")
