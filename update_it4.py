import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'
b64_spec_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_speciation.txt'
b64_isol_path = r'C:\Users\hp\.gemini\antigravity\brain\f8a12095-89e2-43a5-b3c8-322e2e4310f3\b64_isolation.txt'

def read_b64(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = f.read().strip()
        if data.startswith('\ufeff'):
            data = data[1:]
        return data

b64_spec = read_b64(b64_spec_path)
b64_isol = read_b64(b64_isol_path)

questions = """            questions: [
                {
                    id: "sb4-it4-q1",
                    number: "1",
                    question: "What factors could lead to the rise of a new species?",
                    solution: [
                        "<p><b>Answers:</b> The formation of a new species (Speciation) can occur due to the following factors:</p>",
                        "<ul><li><b>Geographical Isolation:</b> Populations separated by physical barriers (mountains, rivers) cannot interbreed.</li><li><b>Genetic Drift:</b> Random changes in the frequency of alleles in small, isolated populations.</li><li><b>Natural Selection:</b> Different environmental conditions lead to different adaptations in isolated groups.</li><li><b>Genetic Variation:</b> Changes in DNA or chromosome numbers eventually prevent mating between groups.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_spec + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Speciation Factors' /></div>"
                    ],
                    answer: "Speciation is caused by geographical isolation, genetic drift, natural selection, and significant genetic variation."
                },
                {
                    id: "sb4-it4-q2",
                    number: "2",
                    question: "Will geographical isolation be a major factor in the speciation of a self-pollinating plant species? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> No, geographical isolation is <b>not a major factor</b> for self-pollinating plants.</p>",
                        "<ul><li><b>Reproductive Independence:</b> Self-pollinating plants do not depend on other individuals for reproduction.</li><li><b>Genetic Stability:</b> Since they breed within themselves, physical separation from other sub-populations does not block their gene flow or force rapid speciation.</li></ul>"
                    ],
                    answer: "No. Since self-pollinating plants reproduce independently of others, geographical isolation has little impact on their genetic evolution."
                },
                {
                    id: "sb4-it4-q3",
                    number: "3",
                    question: "Will geographical isolation be a major factor in the speciation of an organism that reproduces asexually? Why or why not?",
                    solution: [
                        "<p><b>Answers:</b> No, geographical isolation is <b>not a major factor</b> for asexually reproducing organisms.</p>",
                        "<ul><li><b>No Mating Involved:</b> Speciation usually occurs when gene flow is blocked between mating populations.</li><li><b>Independence:</b> Asexual organisms produce identical clones of themselves. Separation from other populations doesn't change their mode of inheritance or lead to new species as easily as it does in sexual reproduction.</li></ul>",
                        "<div style='text-align: center; margin: 15px 0;'><img src='data:image/jpeg;base64,""" + b64_isol + """' style='width: 100%; max-width: 380px; height: auto; border-radius: 8px;' alt='Isolation Comparison' /></div>"
                    ],
                    answer: "No. Asexual reproduction doesn't involve interbreeding, so isolating them from other groups doesn't drive speciation significantly."
                }
            ]"""

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_start = 'id: "sb4-it-4",'
target_questions = 'questions: []'

block_pos = content.find(target_start)
if block_pos != -1:
    q_pos = content.find(target_questions, block_pos)
    if q_pos != -1:
        new_content = content[:q_pos] + questions + content[q_pos + len(target_questions):]
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated sci-bio-4.ts with In-Text 4")
    else:
        print("Could not find questions placeholder")
else:
    print("Could not find In-Text 4 tab")
