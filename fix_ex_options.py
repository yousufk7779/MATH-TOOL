import os

ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-bio-4.ts'

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Q1
q1_old = """                    id: "sb4-ex-q1",
                    number: "1",
                    question: "A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. The progeny all bore violet flowers, but almost half of them were short. This suggests that the genetic make-up of the tall parent can be depicted as","""
q1_new = """                    id: "sb4-ex-q1",
                    number: "1",
                    question: "A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. The progeny all bore violet flowers, but almost half of them were short. This suggests that the genetic make-up of the tall parent can be depicted as",
                    options: [
                        "(a) TTWW",
                        "(b) TTww",
                        "(c) TtWW",
                        "(d) TtWw"
                    ],"""

# Fix Q2
q2_old = """                    id: "sb4-ex-q2",
                    number: "2",
                    question: "An example of homologous organs is","""
q2_new = """                    id: "sb4-ex-q2",
                    number: "2",
                    question: "An example of homologous organs is",
                    options: [
                        "(a) our arm and a dog’s fore-leg.",
                        "(b) our teeth and an elephant’s tusks.",
                        "(c) potato and runners of grass.",
                        "(d) All of the above"
                    ],"""

# Fix Q3
q3_old = """                    id: "sb4-ex-q3",
                    number: "3",
                    question: "In evolutionary terms, we have more in common with","""
q3_new = """                    id: "sb4-ex-q3",
                    number: "3",
                    question: "In evolutionary terms, we have more in common with",
                    options: [
                        "(a) a Chinese school-boy.",
                        "(b) a chimpanzee.",
                        "(c) a spider.",
                        "(d) a bacterium."
                    ],"""

content = content.replace(q1_old, q1_new)
content = content.replace(q2_old, q2_new)
content = content.replace(q3_old, q3_new)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully fixed MCQ options in Chapter 4 Exercise")
