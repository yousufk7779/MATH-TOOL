import re

file_path = r'd:\All NCERT SOLUTIONS\client\data\content\sci-chem-1.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Add commas between main object properties
content = content.replace('    introduction: "In our daily life, many changes happen around us. For example, milk turning into curd, iron rusting, or food getting cooked. These are chemical changes where new substances are formed. Let\'s learn how to write them mathematically as equations."', 
                         '    introduction: "In our daily life, many changes happen around us. For example, milk turning into curd, iron rusting, or food getting cooked. These are chemical changes where new substances are formed. Let\'s learn how to write them mathematically as equations.",')

content = content.replace('    definitions: [\n        { term: "Reactants", description: "The substances that take part in a chemical reaction. They are written on the left side of the equation." },\n        { term: "Products", description: "The new substances that are formed as a result of a chemical reaction. They are written on the right side." },\n        { term: "Balanced Chemical Equation", description: "An equation where the number of atoms of each element is the same on both sides (Reactants = Products)." },\n        { term: "Exothermic Reaction", description: "A reaction in which heat is released along with the formation of products. E.g. Burning of natural gas." },\n        { term: "Endothermic Reaction", description: "A reaction in which energy (heat/light) is absorbed to break down reactants." },\n        { term: "Oxidation", description: "The addition of oxygen to a substance, or the removal of hydrogen from a substance." },\n        { term: "Reduction", description: "The addition of hydrogen to a substance, or the removal of oxygen from a substance." },\n        { term: "Corrosion", description: "When a metal gets attacked by moisture, acids, or air around it, it starts degrading. E.g. Rusting of iron." },\n        { term: "Rancidity", description: "When fats and oils get oxidized, their smell and taste change. This ruins the food." }\n    ]',
                         '    definitions: [\n        { term: "Reactants", description: "The substances that take part in a chemical reaction. They are written on the left side of the equation." },\n        { term: "Products", description: "The new substances that are formed as a result of a chemical reaction. They are written on the right side." },\n        { term: "Balanced Chemical Equation", description: "An equation where the number of atoms of each element is the same on both sides (Reactants = Products)." },\n        { term: "Exothermic Reaction", description: "A reaction in which heat is released along with the formation of products. E.g. Burning of natural gas." },\n        { term: "Endothermic Reaction", description: "A reaction in which energy (heat/light) is absorbed to break down reactants." },\n        { term: "Oxidation", description: "The addition of oxygen to a substance, or the removal of hydrogen from a substance." },\n        { term: "Reduction", description: "The addition of hydrogen to a substance, or the removal of oxygen from a substance." },\n        { term: "Corrosion", description: "When a metal gets attacked by moisture, acids, or air around it, it starts degrading. E.g. Rusting of iron." },\n        { term: "Rancidity", description: "When fats and oils get oxidized, their smell and taste change. This ruins the food." }\n    ],')

content = content.replace('      "To prevent rancidity, we use air-tight containers, flush bags with nitrogen gas (like in chips packets), or add antioxidants."\n    ]',
                         '      "To prevent rancidity, we use air-tight containers, flush bags with nitrogen gas (like in chips packets), or add antioxidants."\n    ],')

content = content.replace('        { name: "Law of Conservation of Mass", formula: "Mass of Reactants = Mass of Products" }\n    ]',
                         '        { name: "Law of Conservation of Mass", formula: "Mass of Reactants = Mass of Products" }\n    ],')

content = content.replace('        "Redox = Oxidation + Reduction happening together."\n    ]',
                         '        "Redox = Oxidation + Reduction happening together."\n    ],')

content = content.replace('            correctAnswer: "a"\n        }\n    ]',
                         '            correctAnswer: "a"\n        }\n    ],')

content = content.replace('        "Oxidation (adding O2) and Reduction (removing O2) are very common in nature, affecting metals (corrosion) and food (rancidity)."\n    ]',
                         '        "Oxidation (adding O2) and Reduction (removing O2) are very common in nature, affecting metals (corrosion) and food (rancidity)."\n    ],')

# Re-apply the specific newline fix just in case
content = content.replace('ensuring it burns\nproperly in air', 'ensuring it burns properly in air')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Restored missing commas in sci-chem-1.ts.")
