const fs = require('fs');

const img1Base64 = fs.readFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\e228bb5c-816a-4e7e-b50b-5102bc40ebbd\\media__1777050379331.png', 'base64');
const img2Base64 = fs.readFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\e228bb5c-816a-4e7e-b50b-5102bc40ebbd\\media__1777050379425.png', 'base64');

const q6Img = `<img src="data:image/png;base64,${img1Base64}" style="filter: invert(0.8) sepia(1) hue-rotate(180deg) saturate(3) brightness(1.2); border-radius: 8px;" alt="Fig 8.11" />`;
const q8Img = `<img src="data:image/png;base64,${img2Base64}" style="filter: invert(0.8) sepia(1) hue-rotate(280deg) saturate(3) brightness(1.2); border-radius: 8px;" alt="Fig 8.12" />`;

const exerciseObjStr = `    { 
      id: "exercise", 
      name: "Exercise", 
      questions: [
        {
          id: "q1",
          number: "1",
          question: "An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the distance covered and the displacement at the end of 2 minutes 20 s?",
          solution: [
            "Answer:\\nDiameter = 200 m, Radius (r) = 100 m\\nTime for one round = 40 s\\nTotal time = 2 min 20 s = 140 s\\n\\nNumber of rounds = 140 ÷ 40 = 3.5 rounds\\n\\nDistance covered in 3.5 rounds:\\n= 3.5 × (2πr)\\n= 3.5 × 2 × 3.14 × 100\\n= 2198 m (approx 2200 m)\\n\\nDisplacement after 3.5 rounds:\\nThe athlete will be exactly opposite to the starting point.\\nDisplacement = Diameter = 200 m"
          ],
          answer: ""
        },
        {
          id: "q2",
          number: "2",
          question: "Joseph jogs from one end A to the other end B of a straight 300 m road in 2 min 30 s and then turns around and jogs 100 m back. What are his average speed and velocity?",
          solution: [
            "Answer:\\n(a) From A to B:\\nDistance = 300 m, Displacement = 300 m, Time = 150 s\\nAverage speed = 300 / 150 = 2 m/s\\nAverage velocity = 300 / 150 = 2 m/s\\n\\n(b) From A to C (assuming 1 minute for return as standard):\\nTotal distance = 300 + 100 = 400 m\\nTotal time = 150 + 60 = 210 s\\nAverage speed = 400 / 210 = 1.90 m/s\\nDisplacement = 300 - 100 = 200 m\\nAverage velocity = 200 / 210 = 0.95 m/s"
          ],
          answer: ""
        },
        {
          id: "q3",
          number: "3",
          question: "Abdul, while driving to school, computes the average speed for his trip to be 20 km h⁻¹. On his return trip, the average speed is 30 km h⁻¹. What is the average speed for the whole trip?",
          solution: [
            "Answer:\\nLet distance be 'x' km.\\nTime for forward trip (t1) = x / 20 h\\nTime for return trip (t2) = x / 30 h\\n\\nTotal distance = x + x = 2x\\nTotal time = (x / 20) + (x / 30) = 5x / 60 = x / 12 h\\n\\nAverage speed = Total distance / Total time\\n= 2x / (x / 12)\\n= 24 km/h"
          ],
          answer: ""
        },
        {
          id: "q4",
          number: "4",
          question: "A motorboat starting from rest accelerates at 3.0 m s⁻² for 8.0 s. How far does it travel?",
          solution: [
            "Answer:\\nInitial speed (u) = 0\\nAcceleration (a) = 3.0 m/s²\\nTime (t) = 8.0 s\\n\\nDistance (s) = ut + ½at²\\n= 0 + ½ × 3.0 × (8.0)²\\n= 1.5 × 64\\n= 96 m"
          ],
          answer: ""
        },
        {
          id: "q5",
          number: "5",
          question: "Two cars apply brakes with different speeds and stopping times. Which travels farther?",
          solution: [
            "Answer:\\nThe car that covers a larger area under its speed-time graph travels farther. For exact values, we plot their speeds against time and calculate the area of the respective triangles (Area = ½ × base × height). The one with the larger area travels the greater distance."
          ],
          answer: ""
        },
        {
          id: "q6",
          number: "6",
          question: \`Fig 8.11 shows the distance-time graph of three objects A, B and C. Answer the following:<br/>(a) Which is fastest?<br/>(b) Do they meet?<br/>(c) Distance of C when B passes A<br/>(d) Distance of B when it passes C<br/>\${q6Img}\`,
          solution: [
            "Answer:\\n(a) Object B is the fastest because its graph has the steepest slope.\\n(b) All three lines do not intersect at a single point, so they never meet at the same time.\\n(c) When B passes A, the graph of C is at approximately 8 km on the y-axis.\\n(d) When B passes C, the distance of B on the y-axis is approximately 5.5 km."
          ],
          answer: ""
        },
        {
          id: "q7",
          number: "7",
          question: "A ball is dropped from a height of 20 m. Find velocity and time to reach ground.",
          solution: [
            "Answer:\\nInitial velocity (u) = 0\\nDistance (s) = 20 m\\nAcceleration (a) = 10 m/s² (downwards)\\n\\nVelocity (v² - u² = 2as):\\nv² - 0 = 2 × 10 × 20\\nv² = 400\\nv = 20 m/s\\n\\nTime (v = u + at):\\n20 = 0 + 10t\\nt = 2 s"
          ],
          answer: ""
        },
        {
          id: "q8",
          number: "8",
          question: \`Speed-time graph is given.<br/>(a) Find distance travelled<br/>(b) Identify uniform motion<br/>\${q8Img}\`,
          solution: [
            "Answer:\\n(a) The distance travelled in a given time is the area under the curve. For example, the area of the shaded region under the curve for the first few seconds gives the distance.\\n(b) The straight horizontal part of the graph (after about 6 seconds) represents uniform motion because the speed becomes constant."
          ],
          answer: ""
        },
        {
          id: "q9",
          number: "9",
          question: "State possible situations of motion with examples.",
          solution: [
            "Answer:\\n(a) Acceleration with zero velocity: A ball thrown upwards has zero velocity at the highest point but still has downward acceleration (gravity).\\n(b) Acceleration in perpendicular direction to velocity: An object moving in a circular path with constant speed (e.g., a satellite)."
          ],
          answer: ""
        },
        {
          id: "q10",
          number: "10",
          question: "An artificial satellite moves in a circular orbit of radius 42250 km. Find its speed if it takes 24 h.",
          solution: [
            "Answer:\\nRadius (r) = 42250 km\\nTime (t) = 24 h\\n\\nDistance for one orbit = 2πr\\n= 2 × 3.14 × 42250\\n= 265330 km\\n\\nSpeed = Distance / Time\\n= 265330 / 24\\n= 11055.4 km/h (or 3.07 km/s)"
          ],
          answer: ""
        }
      ] 
    }`;

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', 'utf8');
fileContent = fileContent.replace('{ id: "exercise", name: "Exercise", questions: [] }', exerciseObjStr);
fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', fileContent);
console.log('Done!');
