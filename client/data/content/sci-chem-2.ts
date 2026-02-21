import { ChapterContent } from "../chapterContent";

export const sciChem2: ChapterContent = {
    id: "sci-chem-2",
    number: 2,
    title: "Acids, Bases and Salts",
    introduction: "Why does lemon taste sour? Why does baking soda feel soapy? It's all because of chemistry! In this chapter, we will learn about the sour acids, the soapy bases, and what happens when they mix to form salts.",
    definitions: [
        { term: "Acids", description: "Substances that are sour in taste and turn blue litmus paper red. They release H+ (Hydrogen) ions when dissolved in water." },
        { term: "Bases", description: "Substances that are bitter in taste, feel soapy to touch, and turn red litmus paper blue. They release OH- (Hydroxide) ions in water." },
        { term: "Indicators", description: "Special dyes or substances that change color when put into an acid or a base. E.g. Litmus paper, Turmeric, Phenolphthalein." },
        { term: "Neutralization", description: "A reaction where an Acid and a Base mix together to cancel each other out, forming Salt and Water." },
        { term: "pH Scale", description: "A scale from 0 to 14 used for determining how acidic or basic a substance is. 7 means neutral." },
        { term: "Salts", description: "Ionic compounds formed as a result of a neutralization reaction between an acid and a base." }
    ],
    keyPoints: [
        "Strong Acids completely break down in water to give many H+ ions (e.g. Hydrochloric acid - HCl).",
        "Weak Acids don't break down completely and give fewer H+ ions (e.g. Acetic acid in vinegar).",
        "Acids react with metals to produce Hydrogen gas. You can hear a 'pop' sound when burning this gas.",
        "Acids react with metal carbonates to release Carbon dioxide (CO2) gas. This gas makes lime water milky.",
        "pH < 7 means Acidic. The lower the number, the stronger the acid.",
        "pH > 7 means Basic (Alkaline). The higher the number, the stronger the base.",
        "pH = 7 means Neutral. Pure water has a pH of exactly 7.",
        "Our stomach contains Hydrochloric Acid (HCl) which helps in digestion. Excess acid causes pain (Acidity), which we cure using a mild base called Antacid (like Milk of Magnesia)."
    ],
    formulas: [
        { name: "Neutralization Reaction", formula: "Acid + Base -> Salt + Water" },
        { name: "Acid + Metal", formula: "Acid + Metal -> Salt + Hydrogen Gas" }
    ],
    crux: [
        "Acid = Sour, turns blue litmus red.",
        "Base = Bitter/Soapy, turns red litmus blue.",
        "Acid + Base = Salt + Water.",
        "pH 0-6: Acid. pH 7: Neutral. pH 8-14: Base."
    ],
    mcqs: [
        {
            id: "sc2-mcq-1",
            question: "Which of the following turns red litmus blue?",
            options: ["Lemon Juice", "Vinegar", "Baking Soda Solution", "Apple Juice"],
            correctAnswer: "c"
        },
        {
            id: "sc2-mcq-2",
            question: "What is the pH of a neutral solution?",
            options: ["0", "7", "14", "1"],
            correctAnswer: "b"
        },
        {
            id: "sc2-mcq-3",
            question: "When an acid reacts with a metal, which gas is usually released?",
            options: ["Oxygen gas", "Carbon dioxide gas", "Hydrogen gas", "Nitrogen gas"],
            correctAnswer: "c"
        },
        {
            id: "sc2-mcq-4",
            question: "Which of the following is commonly used as an antacid?",
            options: ["Sodium hydroxide", "Magnesium hydroxide", "Calcium hydroxide", "Potassium hydroxide"],
            correctAnswer: "b"
        },
        {
            id: "sc2-mcq-5",
            question: "Tooth decay starts when the pH of the mouth is lower than:",
            options: ["5.5", "7.0", "8.5", "10.0"],
            correctAnswer: "a"
        }
    ],
    summary: [
        "Acids and bases can be identified using indicators like litmus and turmeric.",
        "All acids generate hydrogen gas on reacting with metals.",
        "When acids and bases react, they neutralize each other forming salt and water.",
        "The strength of an acid or base is measured using a pH scale.",
        "Salts have various uses in daily life, such as baking soda in cooking and bleaching powder for cleaning."
    ],
    exercises: [
        {
            id: "sc2-ex-1",
            name: "Exercise 1: NCERT Questions",
            questions: [
                {
                    id: "sc2-ex-q1",
                    number: "1",
                    question: "Why should curd and sour substances not be kept in brass and copper vessels?",
                    solution: [
                        "Curd and sour substances contain acidic components (like lactic acid).",
                        "Metals like brass and copper react with these acids.",
                        "This chemical reaction produces poisonous metallic salts.",
                        "Consuming food kept in such vessels can make us very sick (food poisoning)."
                    ],
                    answer: "Because sour substances contain acids that react with copper and brass to form toxic compounds that cause food poisoning."
                },
                {
                    id: "sc2-ex-q2",
                    number: "2",
                    question: "Do basic solutions also have H+(aq) ions? If yes, then why are these basic?",
                    solution: [
                        "Yes, basic solutions also contain H+ (hydrogen) ions.",
                        "Because water automatically has both H+ and OH- ions.",
                        "However, in a basic solution, the concentration of OH- (hydroxide) ions is much, much higher than the H+ ions.",
                        "The excess of OH- ions overpowers the H+ ions, making the solution basic."
                    ],
                    answer: "Yes, they contain H+ ions, but they are basic because the concentration of OH- ions is much greater than H+ ions."
                },
                {
                    id: "sc2-ex-q3",
                    number: "3",
                    question: "Under what soil condition do you think a farmer would treat the soil of his fields with quick lime or slaked lime?",
                    solution: [
                        "Quick lime (calcium oxide) and slaked lime (calcium hydroxide) are highly basic materials.",
                        "A farmer will use them to treat his soil only if the soil has become too acidic.",
                        "Too much acid ruins the crops. Adding basic lime neutralizes the excess acid and brings the soil back to normal pH."
                    ],
                    answer: "A farmer treats the soil with quick lime when the soil has become too acidic and needs to be neutralized."
                }
            ]
        }
    ],
    examples: []
};
