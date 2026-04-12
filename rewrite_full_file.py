import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the base64 data to preserve it
image_match = re.search(r'src=\'(data:image/png;base64,.*?)\'', content)
if image_match:
    base64_data = image_match.group(1)
else:
    base64_data = "" # Should not happen

full_file_content = r"""import { ChapterContent } from "../chapterContent";

export const sciChem1: ChapterContent = {
    id: "sci-chem-1",
    number: 1,
    title: "Chemical Reactions and Equations",
    introduction: "In our daily life, many changes happen around us. For example, milk turning into curd, iron rusting, or food getting cooked. These are chemical changes where new substances are formed. Let's learn how to write them mathematically as equations.",
    definitions: [
        { term: "Reactants", description: "The substances that take part in a chemical reaction. They are written on the left side of the equation." },
        { term: "Products", description: "The new substances that are formed as a result of a chemical reaction. They are written on the right side." },
        { term: "Balanced Chemical Equation", description: "An equation where the number of atoms of each element is the same on both sides (Reactants = Products)." },
        { term: "Exothermic Reaction", description: "A reaction in which heat is released along with the formation of products. E.g. Burning of natural gas." },
        { term: "Endothermic Reaction", description: "A reaction in which energy (heat/light) is absorbed to break down reactants." },
        { term: "Oxidation", description: "The addition of oxygen to a substance, or the removal of hydrogen from a substance." },
        { term: "Reduction", description: "The addition of hydrogen to a substance, or the removal of oxygen from a substance." },
        { term: "Corrosion", description: "When a metal gets attacked by moisture, acids, or air around it, it starts degrading. E.g. Rusting of iron." },
        { term: "Rancidity", description: "When fats and oils get oxidized, their smell and taste change. This ruins the food." }
    ],
    keyPoints: [
        "A chemical reaction involves breaking old bonds and making new bonds to form new substances.",
        "A skeletal equation is simply a formula-based equation which might be unbalanced. We must ALWAYS balance chemical equations to satisfy the Law of Conservation of Mass.",
        "Combination Reaction: Two or more substances combine to form a single new product. (A + B -> AB)",
        "Decomposition Reaction: A single reactant breaks down to give simpler products. (AB -> A + B). Energy is required for this.",
        "Displacement Reaction: A more reactive element pushes away a less reactive element from its compound. (A + BC -> AC + B)",
        "Double Displacement Reaction: Two compounds exchange their ions to form two new compounds. (AB + CD -> AD + CB)",
        "Oxidation and Reduction often happen together. This combined process is called a Redox Reaction.",
        "To prevent rancidity, we use air-tight containers, flush bags with nitrogen gas (like in chips packets), or add antioxidants."
    ],
    formulas: [
        { name: "Law of Conservation of Mass", formula: "Mass of Reactants = Mass of Products" }
    ],
    crux: [
        "Chemical reactions make new substances.",
        "Always balance equations so mass remains the same.",
        "Combination = joining together.",
        "Decomposition = breaking apart.",
        "Displacement = switching places.",
        "Redox = Oxidation + Reduction happening together."
    ],
    mcqs: [
        {
            id: "sc1-mcq-1",
            question: "Which of the following is a physical change rather than a chemical change?",
            options: ["(a) Burning of magnesium ribbon", "(b) Rusting of iron", "(c) Melting of ice", "(d) Souring of milk"],
            correctAnswer: "c"
        },
        {
            id: "sc1-mcq-2",
            question: "The reaction C + O2 -> CO2 is an example of:",
            options: ["(a) Decomposition reaction", "(b) Combination reaction", "(c) Displacement reaction", "(d) Double displacement reaction"],
            correctAnswer: "b"
        },
        {
            id: "sc1-mcq-3",
            question: "Why do we balance chemical equations?",
            options: ["(a) To satisfy law of conservation of energy", "(b) To satisfy law of conservation of momentum", "(c) To make it look neat", "(d) To satisfy law of conservation of mass"],
            correctAnswer: "d"
        },
        {
            id: "sc1-mcq-4",
            question: "Rancidity in foods containing fats and oils is caused due to:",
            options: ["(a) Reduction", "(b) Oxidation", "(c) Displacement", "(d) Neutralization"],
            correctAnswer: "b"
        },
        {
            id: "sc1-mcq-5",
            question: "Reaction of zinc with dilute sulphuric acid gives hydrogen gas. This is a:",
            options: ["(a) Displacement reaction", "(b) Combination reaction", "(c) Decomposition reaction", "(d) Double displacement reaction"],
            correctAnswer: "a"
        }
    ],
    summary: [
        "Chemical reactions involve the transformation of substances into new products with different properties.",
        "Writing a chemical equation is a short-hand way of representing a reaction using symbols and formulas.",
        "Equations must be balanced to obey the Law of Conservation of Mass.",
        "Reactions are generally categorized into Combination, Decomposition, Displacement, and Double Displacement.",
        "Oxidation (adding O2) and Reduction (removing O2) are very common in nature, affecting metals (corrosion) and food (rancidity)."
    ],
    exercises: [
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
                        "<div style='display: flex; justify-content: center; margin-top: 15px;'><img src='""" + base64_data + r"""' style='max-width: 100%; height: auto; border: 1px solid #777; border-radius: 8px;' /></div>",
                    ],
                    answer: "Magnesium ribbon is cleaned to remove the protective layer of magnesium oxide, ensuring it burns properly in air.",
                    shortBoardPattern: true
                },
                {
                    id: "sc1-it-1-2",
                    number: "2",
                    question: "<div style='text-align: justify;'>Write a balanced equation for the following chemical reactions: <br> (i) Hydrogen + Chlorine -> Hydrogen chloride <br> (ii) Barium chloride + Aluminium sulphate -> Barium sulphate + Aluminium chloride <br> (iii) Sodium + Water -> Sodium hydroxide + Hydrogen</div>",
                    solution: [
                        "<div style='text-align: justify;'><b>Answer:</b><br>(i) H2 + Cl2 -> 2HCl</div>",
                        "<div style='text-align: justify;'>(ii) 3BaCl2 + Al2(SO4)3 -> 3BaSO4 + 2AlCl3</div>",
                        "<div style='text-align: justify;'>(iii) 2Na + 2H2O -> 2NaOH + H2</div>"
                    ],
                    answer: "The balanced chemical equations are:\n(i) H2 + Cl2 -> 2HCl\n(ii) 3BaCl2 + Al2(SO4)3 -> 3BaSO4 + 2AlCl3\n(iii) 2Na + 2H2O -> 2NaOH + H2.",
                    shortBoardPattern: true
                },
                {
                    id: "sc1-it-1-3",
                    number: "3",
                    question: "<div style='text-align: justify;'>Write a balanced chemical equation with state symbols for the following reactions: <br> (i) Solutions of Barium chloride and Sodium sulphate in water react to give insoluble Barium sulphate and solution of Sodium chloride. <br> (ii) Sodium hydroxide solution in water reacts with hydrochloric acid solution to produce Sodium chloride solution and water.</div>",
                    solution: [
                        "<div style='text-align: justify;'><b>Answer:</b><br> (i) BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)</div>",
                        "<div style='text-align: justify;'>(ii) NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)</div>"
                    ],
                    answer: "Balanced equations with state symbols:\n (i) BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)\n(ii) NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)",
                    shortBoardPattern: true
                }
            ]
        },
        {
            id: "sc1-it-2",
            name: "In-Text 2",
            questions: []
        },
        {
            id: "sc1-it-3",
            name: "In-Text 3",
            questions: []
        },
        {
            id: "sc1-ex-1",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(full_file_content)

print("Rewrote sci-chem-1.ts successfully.")
