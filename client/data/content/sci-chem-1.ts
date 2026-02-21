import { ChapterContent } from "../chapterContent";

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
            options: ["Burning of magnesium ribbon", "Rusting of iron", "Melting of ice", "Souring of milk"],
            correctAnswer: "c"
        },
        {
            id: "sc1-mcq-2",
            question: "The reaction C + O2 -> CO2 is an example of:",
            options: ["Decomposition reaction", "Combination reaction", "Displacement reaction", "Double displacement reaction"],
            correctAnswer: "b"
        },
        {
            id: "sc1-mcq-3",
            question: "Why do we balance chemical equations?",
            options: ["To satisfy law of conservation of energy", "To satisfy law of conservation of momentum", "To make it look neat", "To satisfy law of conservation of mass"],
            correctAnswer: "d"
        },
        {
            id: "sc1-mcq-4",
            question: "Rancidity in foods containing fats and oils is caused due to:",
            options: ["Reduction", "Oxidation", "Displacement", "Neutralization"],
            correctAnswer: "b"
        },
        {
            id: "sc1-mcq-5",
            question: "Reaction of zinc with dilute sulphuric acid gives hydrogen gas. This is a:",
            options: ["Displacement reaction", "Combination reaction", "Decomposition reaction", "Double displacement reaction"],
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
            id: "sc1-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sc1-ex-q1",
                    number: "1",
                    question: "Why should a magnesium ribbon be cleaned before burning in air?",
                    solution: [
                        "Magnesium is a very reactive metal.",
                        "When kept in air, it reacts with oxygen to form a protective layer of magnesium oxide on its surface.",
                        "This oxide layer prevents further burning of the magnesium ribbon.",
                        "Therefore, it must be cleaned with sandpaper to remove this layer so it can burn smoothly."
                    ],
                    answer: "It is cleaned to remove the protective layer of magnesium oxide so that it can react with oxygen effectively."
                },
                {
                    id: "sc1-ex-q2",
                    number: "2",
                    question: "Why is respiration considered an exothermic reaction? Explain.",
                    solution: [
                        "During respiration, the food we eat (like glucose) is broken down in our body's cells.",
                        "Glucose combines with oxygen that we breathe in.",
                        "This breakdown process releases energy which our body uses to function.",
                        "Since energy is released, it is an exothermic reaction."
                    ],
                    answer: "Respiration is exothermic because it breaks down glucose with oxygen, releasing energy used by the body."
                },
                {
                    id: "sc1-ex-q3",
                    number: "3",
                    question: "Why are decomposition reactions called the opposite of combination reactions?",
                    solution: [
                        "In a combintion reaction, two or more simple substances join together to form a single new product. Example: A + B -> AB.",
                        "In a decomposition reaction, a single substance breaks down into two or more simpler products. Example: AB -> A + B.",
                        "Because one joins things and the other breaks things, they are opposites."
                    ],
                    answer: "In combination, substances join to form one product. In decomposition, one substance breaks into multiple products."
                }
            ]
        }
    ],
    examples: []
};
