const fs = require('fs');

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-2.ts', 'utf8');

const mcqsContent = `  mcqs: [
    {
        id: "c9-phy-2-mcq-1",
        question: "<div style='text-align: justify;'>A push or pull on an object is called:</div>",
        options: ["<div style='text-align: justify;'>(a) Mass</div>", "<div style='text-align: justify;'>(b) Inertia</div>", "<div style='text-align: justify;'>(c) Force</div>", "<div style='text-align: justify;'>(d) Momentum</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-2-mcq-2",
        question: "<div style='text-align: justify;'>What is the SI unit of force?</div>",
        options: ["<div style='text-align: justify;'>(a) Newton</div>", "<div style='text-align: justify;'>(b) Joule</div>", "<div style='text-align: justify;'>(c) Pascal</div>", "<div style='text-align: justify;'>(d) Watt</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-2-mcq-3",
        question: "<div style='text-align: justify;'>The property of an object to resist a change in its state of rest or motion is:</div>",
        options: ["<div style='text-align: justify;'>(a) Velocity</div>", "<div style='text-align: justify;'>(b) Inertia</div>", "<div style='text-align: justify;'>(c) Speed</div>", "<div style='text-align: justify;'>(d) Gravity</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-2-mcq-4",
        question: "<div style='text-align: justify;'>Which of the following has more inertia?</div>",
        options: ["<div style='text-align: justify;'>(a) A rubber ball</div>", "<div style='text-align: justify;'>(b) A heavy stone of the same size</div>", "<div style='text-align: justify;'>(c) A paper cup</div>", "<div style='text-align: justify;'>(d) A plastic toy</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-2-mcq-5",
        question: "<div style='text-align: justify;'>Momentum is the product of mass and:</div>",
        options: ["<div style='text-align: justify;'>(a) Distance</div>", "<div style='text-align: justify;'>(b) Velocity</div>", "<div style='text-align: justify;'>(c) Time</div>", "<div style='text-align: justify;'>(d) Acceleration</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-2-mcq-6",
        question: "<div style='text-align: justify;'>What is the SI unit of momentum?</div>",
        options: ["<div style='text-align: justify;'>(a) kg m/s</div>", "<div style='text-align: justify;'>(b) kg m/s²</div>", "<div style='text-align: justify;'>(c) Newton</div>", "<div style='text-align: justify;'>(d) Joule</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-2-mcq-7",
        question: "<div style='text-align: justify;'>Newton’s first law of motion is also known as:</div>",
        options: ["<div style='text-align: justify;'>(a) Law of gravitation</div>", "<div style='text-align: justify;'>(b) Law of momentum</div>", "<div style='text-align: justify;'>(c) Law of inertia</div>", "<div style='text-align: justify;'>(d) Law of conservation of energy</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-2-mcq-8",
        question: "<div style='text-align: justify;'>\"For every action, there is an equal and opposite reaction.\" Which law is this?</div>",
        options: ["<div style='text-align: justify;'>(a) Newton’s First Law</div>", "<div style='text-align: justify;'>(b) Newton’s Second Law</div>", "<div style='text-align: justify;'>(c) Newton’s Third Law</div>", "<div style='text-align: justify;'>(d) Law of Conservation of Mass</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-2-mcq-9",
        question: "<div style='text-align: justify;'>If you push a wall, the wall pushes you back with:</div>",
        options: ["<div style='text-align: justify;'>(a) Greater force</div>", "<div style='text-align: justify;'>(b) Less force</div>", "<div style='text-align: justify;'>(c) Equal force</div>", "<div style='text-align: justify;'>(d) Zero force</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-2-mcq-10",
        question: "<div style='text-align: justify;'>Unbalanced forces acting on an object will cause:</div>",
        options: ["<div style='text-align: justify;'>(a) The object to remain at rest forever</div>", "<div style='text-align: justify;'>(b) A change in the object's speed or direction</div>", "<div style='text-align: justify;'>(c) The object to disappear</div>", "<div style='text-align: justify;'>(d) None of the above</div>"],
        correctAnswer: "b"
    }
  ],`;

fileContent = fileContent.replace('  mcqs: [],', mcqsContent);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-2.ts', fileContent);
console.log('MCQs successfully inserted.');
