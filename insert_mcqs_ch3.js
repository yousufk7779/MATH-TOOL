const fs = require('fs');

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-3.ts', 'utf8');

const mcqsContent = `  mcqs: [
    {
        id: "c9-phy-3-mcq-1",
        question: "<div style='text-align: justify;'>Work is said to be done when:</div>",
        options: ["<div style='text-align: justify;'>(a) You read a book</div>", "<div style='text-align: justify;'>(b) You push a wall and it does not move</div>", "<div style='text-align: justify;'>(c) A force causes displacement</div>", "<div style='text-align: justify;'>(d) You sleep</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-3-mcq-2",
        question: "<div style='text-align: justify;'>What is the SI unit of work?</div>",
        options: ["<div style='text-align: justify;'>(a) Newton</div>", "<div style='text-align: justify;'>(b) Joule</div>", "<div style='text-align: justify;'>(c) Watt</div>", "<div style='text-align: justify;'>(d) Pascal</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-3-mcq-3",
        question: "<div style='text-align: justify;'>The capacity to do work is called:</div>",
        options: ["<div style='text-align: justify;'>(a) Force</div>", "<div style='text-align: justify;'>(b) Energy</div>", "<div style='text-align: justify;'>(c) Power</div>", "<div style='text-align: justify;'>(d) Momentum</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-3-mcq-4",
        question: "<div style='text-align: justify;'>Which of the following is the SI unit of energy?</div>",
        options: ["<div style='text-align: justify;'>(a) Joule</div>", "<div style='text-align: justify;'>(b) Newton</div>", "<div style='text-align: justify;'>(c) Watt</div>", "<div style='text-align: justify;'>(d) Meter</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-3-mcq-5",
        question: "<div style='text-align: justify;'>Energy possessed by a moving car is called:</div>",
        options: ["<div style='text-align: justify;'>(a) Potential energy</div>", "<div style='text-align: justify;'>(b) Chemical energy</div>", "<div style='text-align: justify;'>(c) Kinetic energy</div>", "<div style='text-align: justify;'>(d) Heat energy</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-3-mcq-6",
        question: "<div style='text-align: justify;'>The formula for kinetic energy is:</div>",
        options: ["<div style='text-align: justify;'>(a) mgh</div>", "<div style='text-align: justify;'>(b) ½ mv²</div>", "<div style='text-align: justify;'>(c) F × s</div>", "<div style='text-align: justify;'>(d) m × a</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-3-mcq-7",
        question: "<div style='text-align: justify;'>Energy possessed by water stored in a high dam is:</div>",
        options: ["<div style='text-align: justify;'>(a) Kinetic energy</div>", "<div style='text-align: justify;'>(b) Heat energy</div>", "<div style='text-align: justify;'>(c) Potential energy</div>", "<div style='text-align: justify;'>(d) Electrical energy</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-3-mcq-8",
        question: "<div style='text-align: justify;'>The formula for potential energy is:</div>",
        options: ["<div style='text-align: justify;'>(a) ½ mv²</div>", "<div style='text-align: justify;'>(b) F × s</div>", "<div style='text-align: justify;'>(c) m × v</div>", "<div style='text-align: justify;'>(d) mgh</div>"],
        correctAnswer: "d"
    },
    {
        id: "c9-phy-3-mcq-9",
        question: "<div style='text-align: justify;'>The rate at which work is done is called:</div>",
        options: ["<div style='text-align: justify;'>(a) Force</div>", "<div style='text-align: justify;'>(b) Energy</div>", "<div style='text-align: justify;'>(c) Momentum</div>", "<div style='text-align: justify;'>(d) Power</div>"],
        correctAnswer: "d"
    },
    {
        id: "c9-phy-3-mcq-10",
        question: "<div style='text-align: justify;'>What is the SI unit of power?</div>",
        options: ["<div style='text-align: justify;'>(a) Joule</div>", "<div style='text-align: justify;'>(b) Watt</div>", "<div style='text-align: justify;'>(c) Newton</div>", "<div style='text-align: justify;'>(d) Meter/second</div>"],
        correctAnswer: "b"
    }
  ],`;

fileContent = fileContent.replace('  mcqs: [],', mcqsContent);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-3.ts', fileContent);
console.log('MCQs successfully inserted into Chapter 3.');
