const fs = require('fs');

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-4.ts', 'utf8');

const mcqsContent = `  mcqs: [
    {
        id: "c9-phy-4-mcq-1",
        question: "<div style='text-align: justify;'>The force that keeps the planets in their orbits is:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Magnetic force</div>",
            "<div style='text-align: justify;'>(b) Gravitational force</div>",
            "<div style='text-align: justify;'>(c) Electrostatic force</div>",
            "<div style='text-align: justify;'>(d) Nuclear force</div>"
        ],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-4-mcq-2",
        question: "<div style='text-align: justify;'>What is the approximate value of acceleration due to gravity (g) on Earth?</div>",
        options: [
            "<div style='text-align: justify;'>(a) 5.8 m/s²</div>",
            "<div style='text-align: justify;'>(b) 12.8 m/s²</div>",
            "<div style='text-align: justify;'>(c) 9.8 m/s²</div>",
            "<div style='text-align: justify;'>(d) 0 m/s²</div>"
        ],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-4-mcq-3",
        question: "<div style='text-align: justify;'>The SI unit of weight is:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Newton</div>",
            "<div style='text-align: justify;'>(b) Kilogram</div>",
            "<div style='text-align: justify;'>(c) Joule</div>",
            "<div style='text-align: justify;'>(d) Watt</div>"
        ],
        correctAnswer: "a"
    },
    {
        id: "c9-phy-4-mcq-4",
        question: "<div style='text-align: justify;'>Mass of an object:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Changes with location</div>",
            "<div style='text-align: justify;'>(b) Becomes zero at the center of Earth</div>",
            "<div style='text-align: justify;'>(c) Remains constant everywhere</div>",
            "<div style='text-align: justify;'>(d) Is same as weight</div>"
        ],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-4-mcq-5",
        question: "<div style='text-align: justify;'>An object is in free fall when it moves under the influence of:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Air resistance only</div>",
            "<div style='text-align: justify;'>(b) Gravity only</div>",
            "<div style='text-align: justify;'>(c) Friction only</div>",
            "<div style='text-align: justify;'>(d) Magnetic force only</div>"
        ],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-4-mcq-6",
        question: "<div style='text-align: justify;'>The weight of an object on the moon is about:</div>",
        options: [
            "<div style='text-align: justify;'>(a) 1/2 of its weight on Earth</div>",
            "<div style='text-align: justify;'>(b) 1/10 of its weight on Earth</div>",
            "<div style='text-align: justify;'>(c) 1/6 of its weight on Earth</div>",
            "<div style='text-align: justify;'>(d) Same as its weight on Earth</div>"
        ],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-4-mcq-7",
        question: "<div style='text-align: justify;'>In which direction does the buoyant force act on an object?</div>",
        options: [
            "<div style='text-align: justify;'>(a) Downward</div>",
            "<div style='text-align: justify;'>(b) Upward</div>",
            "<div style='text-align: justify;'>(c) Sideways</div>",
            "<div style='text-align: justify;'>(d) All directions</div>"
        ],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-4-mcq-8",
        question: "<div style='text-align: justify;'>Density is defined as:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Mass × Volume</div>",
            "<div style='text-align: justify;'>(b) Volume / Mass</div>",
            "<div style='text-align: justify;'>(c) Mass / Volume</div>",
            "<div style='text-align: justify;'>(d) Force / Area</div>"
        ],
        correctAnswer: "c"
    },
    {
        id: "c9-phy-4-mcq-9",
        question: "<div style='text-align: justify;'>If the distance between two objects is increased, the gravitational force between them:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Increases</div>",
            "<div style='text-align: justify;'>(b) Decreases</div>",
            "<div style='text-align: justify;'>(c) Remains same</div>",
            "<div style='text-align: justify;'>(d) Becomes zero</div>"
        ],
        correctAnswer: "b"
    },
    {
        id: "c9-phy-4-mcq-10",
        question: "<div style='text-align: justify;'>An object will float in water if its density is:</div>",
        options: [
            "<div style='text-align: justify;'>(a) Greater than water</div>",
            "<div style='text-align: justify;'>(b) Less than water</div>",
            "<div style='text-align: justify;'>(c) Same as iron</div>",
            "<div style='text-align: justify;'>(d) Zero</div>"
        ],
        correctAnswer: "b"
    }
  ],`;

fileContent = fileContent.replace('  mcqs: [],', mcqsContent);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-4.ts', fileContent);
console.log('MCQs successfully inserted into Chapter 4.');
