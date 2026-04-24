const fs = require('fs');

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', 'utf8');

const mcqsContent = `  mcqs: [
    {
        id: "c9-phy-1-mcq-1",
        question: "<div style='text-align: justify;'>What is distance?</div>",
        options: ["<div style='text-align: justify;'>(a) The actual path length travelled by an object</div>", "<div style='text-align: justify;'>(b) The shortest path between initial and final points</div>", "<div style='text-align: justify;'>(c) Speed per unit time</div>", "<div style='text-align: justify;'>(d) None of the above</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-1-mcq-2",
        question: "<div style='text-align: justify;'>What does speed measure?</div>",
        options: ["<div style='text-align: justify;'>(a) Distance travelled per unit time</div>", "<div style='text-align: justify;'>(b) Displacement per unit time</div>", "<div style='text-align: justify;'>(c) Change in velocity</div>", "<div style='text-align: justify;'>(d) Total mass of the object</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-1-mcq-3",
        question: "<div style='text-align: justify;'>What is the SI unit of velocity?</div>",
        options: ["<div style='text-align: justify;'>(a) m/s²</div>", "<div style='text-align: justify;'>(b) m/s</div>", "<div style='text-align: justify;'>(c) km/h</div>", "<div style='text-align: justify;'>(d) cm/s</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-1-mcq-4",
        question: "<div style='text-align: justify;'>Uniform motion means?</div>",
        options: ["<div style='text-align: justify;'>(a) Object moves with constant speed in a straight line</div>", "<div style='text-align: justify;'>(b) Object's speed keeps changing</div>", "<div style='text-align: justify;'>(c) Object is at rest</div>", "<div style='text-align: justify;'>(d) None of the above</div>"],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-1-mcq-5",
        question: "<div style='text-align: justify;'>Which of the following is a scalar quantity?</div>",
        options: ["<div style='text-align: justify;'>(a) Velocity</div>", "<div style='text-align: justify;'>(b) Acceleration</div>", "<div style='text-align: justify;'>(c) Speed</div>", "<div style='text-align: justify;'>(d) Displacement</div>"],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-1-mcq-6",
        question: "<div style='text-align: justify;'>What does the odometer of an automobile measure?</div>",
        options: ["<div style='text-align: justify;'>(a) Speed</div>", "<div style='text-align: justify;'>(b) Acceleration</div>", "<div style='text-align: justify;'>(c) Time</div>", "<div style='text-align: justify;'>(d) Distance</div>"],
        correctAnswer: "d"
    },
    {
        id: "c9-phy-1-mcq-7",
        question: "<div style='text-align: justify;'>The rate of change of velocity is called:</div>",
        options: ["<div style='text-align: justify;'>(a) Speed</div>", "<div style='text-align: justify;'>(b) Acceleration</div>", "<div style='text-align: justify;'>(c) Displacement</div>", "<div style='text-align: justify;'>(d) Momentum</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-1-mcq-8",
        question: "<div style='text-align: justify;'>If an object comes back to its starting point, its displacement is:</div>",
        options: ["<div style='text-align: justify;'>(a) Equal to distance</div>", "<div style='text-align: justify;'>(b) Zero</div>", "<div style='text-align: justify;'>(c) Infinite</div>", "<div style='text-align: justify;'>(d) Negative</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-1-mcq-9",
        question: "<div style='text-align: justify;'>Which device measures the instantaneous speed of a vehicle?</div>",
        options: ["<div style='text-align: justify;'>(a) Odometer</div>", "<div style='text-align: justify;'>(b) Speedometer</div>", "<div style='text-align: justify;'>(c) Thermometer</div>", "<div style='text-align: justify;'>(d) Barometer</div>"],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-1-mcq-10",
        question: "<div style='text-align: justify;'>The shortest distance measured from the initial to the final position of an object is known as:</div>",
        options: ["<div style='text-align: justify;'>(a) Distance</div>", "<div style='text-align: justify;'>(b) Displacement</div>", "<div style='text-align: justify;'>(c) Speed</div>", "<div style='text-align: justify;'>(d) Acceleration</div>"],
        correctAnswer: "b"
    }
  ],`;

fileContent = fileContent.replace('  mcqs: [],', mcqsContent);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', fileContent);
console.log('MCQs successfully inserted.');
