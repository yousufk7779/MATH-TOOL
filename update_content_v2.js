const fs = require('fs');

const loopB64 = fs.readFileSync('d:/All NCERT SOLUTIONS/loop_b64.txt', 'utf8').trim();
const uniformB64 = fs.readFileSync('d:/All NCERT SOLUTIONS/uniform_b64.txt', 'utf8').trim();

const filePath = 'd:/All NCERT SOLUTIONS/client/data/content/sci-phy-4.ts';
let content = fs.readFileSync(filePath, 'utf8');

const questions = [
    {
        "id": "sp4-it-3-1",
        "number": "1",
        "question": "<div style=\"text-align: justify;\">Consider a circular loop of wire lying in the plane of the table. Let the current pass through the loop clockwise. Apply the right-hand rule to find out the direction of the magnetic field inside and outside the loop.</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> According to the <b>Right-Hand Thumb Rule</b>, for a clockwise current in a circular loop:</div>",
            "<div style=\"text-align: justify;\"><b>1. Inside the loop:</b> The magnetic field lines point <b>downwards</b> (perpendicularly into the table).</div>",
            "<div style=\"text-align: justify;\"><b>2. Outside the loop:</b> The magnetic field lines point <b>upwards</b> (perpendicularly out of the table).</div>",
            "<div style=\"text-align: center; margin: 20px 0;\"><img src=\"data:image/png;base64," + loopB64 + "\" style=\"max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);\" /></div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Diagram:</b></span> The diagram above shows the magnetic field lines around a current-carrying loop. Note how the lines are circular near the wire and become straight and parallel at the center of the loop.</div>"
        ],
        "answer": "Using the right-hand rule: Inside the loop, the field points downwards into the table. Outside the loop, the field points upwards out of the table."
    },
    {
        "id": "sp4-it-3-2",
        "number": "2",
        "question": "<div style=\"text-align: justify;\">The magnetic field in a given region is uniform. Draw a diagram to represent it.</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> A <b>uniform magnetic field</b> is defined as a field where the magnetic force and direction are the same at every point.</div>",
            "<div style=\"text-align: justify;\">It is represented by a set of <b>parallel, straight, and equally spaced</b> magnetic field lines pointing in the same direction.</div>",
            "<div style=\"text-align: center; margin: 20px 0;\"><img src=\"data:image/png;base64," + uniformB64 + "\" style=\"max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);\" /></div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Key Characteristic:</b></span> Parallel lines + Equal spacing = Constant magnitude and direction (Uniform Field).</div>"
        ],
        "answer": "A uniform magnetic field is represented by parallel, straight, and equally spaced magnetic field lines pointing in the same direction."
    },
    {
        "id": "sp4-it-3-3",
        "number": "3",
        "question": "<div style=\"text-align: justify;\">Choose the correct option. The magnetic field inside a long straight solenoid-carrying current<br>(a) is zero.<br>(b) decreases as we move towards its end.<br>(c) increases as we move towards its end.<br>(d) is the same at all points.</div>",
        "solution": [
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Answer:</b></span> The correct option is <b>(d) is the same at all points</b>.</div>",
            "<div style=\"text-align: justify;\"><span style=\"color:#ff2e6e\"><b>Explanation:</b></span> Inside a long straight current-carrying solenoid, the magnetic field lines are <b>parallel and straight</b>.</div>",
            "<div style=\"text-align: justify;\">This indicates that the magnetic field is <b>uniform</b> throughout the interior of the solenoid, meaning its strength and direction are identical at every point within it.</div>"
        ],
        "answer": "Correct: (d). The field lines are parallel and straight inside a solenoid, indicating a uniform magnetic field that is the same at all points."
    }
];

const startTag = '"id": "sp4-it-3"';
const startIndex = content.indexOf(startTag);
if (startIndex !== -1) {
    const questionsSearch = '"questions": []';
    const questionsIndex = content.indexOf(questionsSearch, startIndex);
    if (questionsIndex !== -1) {
        const replacement = '"questions": ' + JSON.stringify(questions, null, 16);
        content = content.slice(0, questionsIndex) + replacement + content.slice(questionsIndex + questionsSearch.length);
        fs.writeFileSync(filePath, content);
        console.log('Successfully updated sci-phy-4.ts');
    } else {
        console.log('questions array not found');
    }
} else {
    console.log('id sp4-it-3 not found');
}
