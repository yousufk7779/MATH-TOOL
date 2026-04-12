import os

b64_path = r'd:\All NCERT SOLUTIONS\b64_ascii.txt'
ts_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(b64_path, 'r') as f:
    img_b64 = f.read().strip()

# Prepare the questions content
questions_code = """[
                {
                    id: "sc1-it-1-1",
                    number: "1",
                    question: "Why should a magnesium ribbon be cleaned before burning in air?",
                    solution: [
                        "Magnesium is a very reactive metal.",
                        "When exposed to air, it reacts with oxygen to form a stable layer of magnesium oxide (MgO) on its surface.",
                        "This oxide layer prevents further reaction with oxygen.",
                        "Cleaning with sandpaper removes this layer, allowing the ribbon to burn effectively."
                    ],
                    answer: "Magnesium ribbon is cleaned to remove the protective layer of magnesium oxide, ensuring it burns properly in air.",
                    image: "data:image/png;base64,""" + img_b64 + """",
                    shortBoardPattern: true
                },
                {
                    id: "sc1-it-1-2",
                    number: "2",
                    question: "Write a balanced equation for the following chemical reactions:\\n(i) Hydrogen + Chlorine → Hydrogen chloride\\n(ii) Barium chloride + Aluminium sulphate → Barium sulphate + Aluminium chloride\\n(iii) Sodium + Water → Sodium hydroxide + Hydrogen",
                    solution: [
                        "**(i)** H₂ + Cl₂ → 2HCl",
                        "**(ii)** 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃",
                        "**(iii)** 2Na + 2H₂O → 2NaOH + H₂"
                    ],
                    answer: "The balanced chemical equations are: (i) H₂ + Cl₂ → 2HCl, (ii) 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃, (iii) 2Na + 2H₂O → 2NaOH + H₂.",
                    shortBoardPattern: true
                },
                {
                    id: "sc1-it-1-3",
                    number: "3",
                    question: "Write a balanced chemical equation with state symbols for the following reactions:\\n(i) Solutions of Barium chloride and Sodium sulphate in water react to give insoluble Barium sulphate and solution of Sodium chloride.\\n(ii) Sodium hydroxide solution in water reacts with hydrochloric acid solution to produce Sodium chloride solution and water.",
                    solution: [
                        "**(i)** BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)",
                        "**(ii)** NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)"
                    ],
                    answer: "Balanced equations with state symbols: (i) BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq), (ii) NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l).",
                    shortBoardPattern: true
                }
            ]"""

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target replacement for In-Text 1
target = """            id: "sc1-it-1",
            name: "In-Text 1",
            questions: []"""

replacement = """            id: "sc1-it-1",
            name: "In-Text 1",
            questions: """ + questions_code

if target in content:
    new_content = content.replace(target, replacement)
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated sci-chem-1.ts")
else:
    print("Target not found!")
