import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will target the entire exercises array and replace it with a clean version.
# First, extract the base64 to keep it.
image_match = re.search(r'src=\'(data:image/png;base64,.*?)\'', content)
if image_match:
    base64_data = image_match.group(1)
else:
    # Fallback if somehow lost
    base64_data = ""

exercises_content = """[
        {
            id: "sc1-it-1",
            name: "In-Text 1",
            questions: [
                {
                    id: "sc1-it-1-1",
                    number: "1",
                    question: "<div style='text-align: justify;'>Why should a magnesium ribbon be cleaned before burning in air?</div>",
                    solution: [
                        "<div style='text-align: justify;'><b>Answer:</b><br> Magnesium is a very reactive metal.</div>",
                        "<div style='text-align: justify;'>When exposed to air, it reacts with oxygen to form a stable layer of magnesium oxide (MgO) on its surface.</div>",
                        "<div style='text-align: justify;'>This oxide layer prevents further reaction with oxygen.</div>",
                        "<div style='text-align: justify;'>Cleaning with sandpaper removes this layer, allowing the ribbon to burn effectively.</div>",
                        "<div style='display: flex; justify-content: center; margin-top: 15px;'><img src='""" + base64_data + r"""' style='max-width: 100%; height: auto; border: 1px solid #777; border-radius: 8px;' /></div>"
                    ],
                    answer: "Magnesium ribbon is cleaned to remove the protective layer of magnesium oxide, ensuring it burns properly in air.",
                    shortBoardPattern: true,
                },
                {
                    id: "sc1-it-1-2",
                    number: "2",
                    question: "<div style='text-align: justify;'>Write a balanced equation for the following chemical reactions: <br> (i) Hydrogen + Chlorine → Hydrogen chloride <br> (ii) Barium chloride + Aluminium sulphate → Barium sulphate + Aluminium chloride <br> (iii) Sodium + Water → Sodium hydroxide + Hydrogen</div>",
                    solution: [
                        "<div style='text-align: justify;'><b>Answer:</b><br>**(i)** H₂ + Cl₂ → 2HCl</div>",
                        "<div style='text-align: justify;'>**(ii)** 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃</div>",
                        "<div style='text-align: justify;'>**(iii)** 2Na + 2H₂O → 2NaOH + H₂</div>"
                    ],
                    answer: "The balanced chemical equations are:\\n(i) H₂ + Cl₂ → 2HCl\\n(ii) 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃\\n(iii) 2Na + 2H₂O → 2NaOH + H₂.",
                    shortBoardPattern: true,
                },
                {
                    id: "sc1-it-1-3",
                    number: "3",
                    question: "<div style='text-align: justify;'>Write a balanced chemical equation with state symbols for the following reactions: <br> (i) Solutions of Barium chloride and Sodium sulphate in water react to give insoluble Barium sulphate and solution of Sodium chloride. <br> (ii) Sodium hydroxide solution in water reacts with hydrochloric acid solution to produce Sodium chloride solution and water.</div>",
                    solution: [
                        "<div style='text-align: justify;'><b>Answer:</b><br> **(i)** BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)</div>",
                        "<div style='text-align: justify;'>**(ii)** NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)</div>"
                    ],
                    answer: "Balanced equations with state symbols:\\n (i) BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)\\n(ii) NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
                    shortBoardPattern: true,
                }
            ],
        },
        {
            id: "sc1-it-2",
            name: "In-Text 2",
            questions: [],
        },
        {
            id: "sc1-it-3",
            name: "In-Text 3",
            questions: [],
        },
        {
            id: "sc1-ex-1",
            name: "Exercise",
            questions: [],
        }
    ]"""

# Substitute the exercises array
pattern = r'exercises: \[.*?\n    \],'
content = re.sub(pattern, 'exercises: ' + exercises_content + ',', content, flags=re.DOTALL)

# Final cleanup of any potential issues
content = content.replace(',,', ',')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Rebuilt exercises array successfully.")
