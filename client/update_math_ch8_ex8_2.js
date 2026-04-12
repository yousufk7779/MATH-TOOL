const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

const newSolutions = {
  "q1": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin 60° cos 30° + sin 30° cos 60°</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Write given expression: sin 60° cos 30° + sin 30° cos 60°",
      "Step 2: Put values: (<sup>√3</sup>/<sub>2</sub>) × (<sup>√3</sup>/<sub>2</sub>) + (<sup>1</sup>/<sub>2</sub>) × (<sup>1</sup>/<sub>2</sub>)",
      "Step 3: Multiply values: <sup>3</sup>/<sub>4</sub> + <sup>1</sup>/<sub>4</sub>",
      "Step 4: Add them: <sup>4</sup>/<sub>4</sub> = 1",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) 2 tan<sup>2</sup> 45° + cos<sup>2</sup> 30° - sin<sup>2</sup> 60°</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Write given expression: 2 tan<sup>2</sup> 45° + cos<sup>2</sup> 30° - sin<sup>2</sup> 60°",
      "Step 2: Put values: 2(1)<sup>2</sup> + (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup> - (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup>",
      "Step 3: Since (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup> cancels out -(<sup>√3</sup>/<sub>2</sub>)<sup>2</sup>, we get 2(1) + 0",
      "Step 4: 2 + 0 = 2",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) <sup>cos 45°</sup>/<sub>sec 30° + cosec  30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put values: (<sup>1</sup>/<sub>√2</sub>) / (<sup>2</sup>/<sub>√3</sub> + 2)",
      "Step 2: Simplify denominator: (<sup>1</sup>/<sub>√2</sub>) / ((2 + 2√3) / √3)",
      "Step 3: Multiply: (<sup>1</sup>/<sub>√2</sub>) × (√3 / (2 + 2√3))",
      "Step 4: = √3 / (2√2 + 2√6)",
      "Step 5: Rationalize by multiplying numerator and denominator by (2√6 - 2√2)",
      "Step 6: = √3(2√6 - 2√2) / ((2√6)<sup>2</sup> - (2√2)<sup>2</sup>)",
      "Step 7: = (2√18 - 2√6) / (24 - 8)",
      "Step 8: = (6√2 - 2√6) / 16",
      "Step 9: Divide by 2: (3√2 - √6) / 8",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>sin 30° + tan 45° - cosec  60°</sup>/<sub>sec 30° + cos 60° + cot 45°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put values: (<sup>1</sup>/<sub>2</sub> + 1 - <sup>2</sup>/<sub>√3</sub>) / (<sup>2</sup>/<sub>√3</sub> + <sup>1</sup>/<sub>2</sub> + 1)",
      "Step 2: Simplify numerator: (<sup>3</sup>/<sub>2</sub> - <sup>2</sup>/<sub>√3</sub>)",
      "Step 3: Simplify denominator: (<sup>3</sup>/<sub>2</sub> + <sup>2</sup>/<sub>√3</sub>)",
      "Step 4: Take LCM: ((3√3 - 4) / 2√3) / ((3√3 + 4) / 2√3)",
      "Step 5: Cancel 2√3 to get: (3√3 - 4) / (3√3 + 4)",
      "Step 6: Rationalize by multiplying (3√3 - 4) to numerator and denominator",
      "Step 7: Numerator = (3√3 - 4)<sup>2</sup> = 27 + 16 - 24√3 = 43 - 24√3",
      "Step 8: Denominator = (3√3)<sup>2</sup> - 4<sup>2</sup> = 27 - 16 = 11",
      "Step 9: Final value: <sup>43 - 24√3</sup>/<sub>11</sub>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) <sup>5 cos<sup>2</sup> 60° + 4 sec<sup>2</sup> 30° - tan<sup>2</sup> 45°</sup>/<sub>sin<sup>2</sup> 30° + cos<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put values: (5(<sup>1</sup>/<sub>2</sub>)<sup>2</sup> + 4(<sup>2</sup>/<sub>√3</sub>)<sup>2</sup> - 1<sup>2</sup>) / ((<sup>1</sup>/<sub>2</sub>)<sup>2</sup> + (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup>)",
      "Step 2: Simplify squares: (5(<sup>1</sup>/<sub>4</sub>) + 4(<sup>4</sup>/<sub>3</sub>) - 1) / (<sup>1</sup>/<sub>4</sub> + <sup>3</sup>/<sub>4</sub>)",
      "Step 3: Denominator becomes <sup>4</sup>/<sub>4</sub> = 1",
      "Step 4: Numerator is <sup>5</sup>/<sub>4</sub> + <sup>16</sup>/<sub>3</sub> - 1",
      "Step 5: Take LCM of 4 and 3 which is 12",
      "Step 6: (15 + 64 - 12) / 12 = <sup>67</sup>/<sub>12</sub>"
    ]
  },
  "q2": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) <sup>2 tan 30°</sup>/<sub>1 + tan<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put tan 30° = <sup>1</sup>/<sub>√3</sub>",
      "Step 2: 2(<sup>1</sup>/<sub>√3</sub>) / (1 + (<sup>1</sup>/<sub>√3</sub>)<sup>2</sup>)",
      "Step 3: = (<sup>2</sup>/<sub>√3</sub>) / (1 + <sup>1</sup>/<sub>3</sub>)",
      "Step 4: = (<sup>2</sup>/<sub>√3</sub>) / (<sup>4</sup>/<sub>3</sub>)",
      "Step 5: = (<sup>2</sup>/<sub>√3</sub>) × (<sup>3</sup>/<sub>4</sub>) = <sup>3</sup>/<sub>2√3</sub> = <sup>√3</sup>/<sub>2</sub>",
      "Step 6: Since sin 60° = <sup>√3</sup>/<sub>2</sub>, the correct option is (A) sin 60°.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) <sup>1 - tan<sup>2</sup> 45°</sup>/<sub>1 + tan<sup>2</sup> 45°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put tan 45° = 1",
      "Step 2: = (1 - 1<sup>2</sup>) / (1 + 1<sup>2</sup>)",
      "Step 3: = (1 - 1) / (1 + 1)",
      "Step 4: = <sup>0</sup>/<sub>2</sub> = 0",
      "Step 5: Correct option is (D) 0.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) sin 2A = 2 sin A is true when A =</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Check for A = 0°",
      "Step 2: LHS = sin(2 × 0°) = sin 0° = 0",
      "Step 3: RHS = 2 sin 0° = 2 × 0 = 0",
      "Step 4: Since LHS = RHS, it is true for A = 0°.",
      "Step 5: Correct option is (A) 0°.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>2 tan 30°</sup>/<sub>1 - tan<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Put tan 30° = <sup>1</sup>/<sub>√3</sub>",
      "Step 2: 2(<sup>1</sup>/<sub>√3</sub>) / (1 - (<sup>1</sup>/<sub>√3</sub>)<sup>2</sup>)",
      "Step 3: = (<sup>2</sup>/<sub>√3</sub>) / (1 - <sup>1</sup>/<sub>3</sub>)",
      "Step 4: = (<sup>2</sup>/<sub>√3</sub>) / (<sup>2</sup>/<sub>3</sub>)",
      "Step 5: = (<sup>2</sup>/<sub>√3</sub>) × (<sup>3</sup>/<sub>2</sub>) = <sup>3</sup>/<sub>√3</sub> = √3",
      "Step 6: Since tan 60° = √3, correct option is (C) tan 60°."
    ]
  },
  "q3": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: Given, tan (A + B) = √3",
      "Step 2: We know tan 60° = √3, so A + B = 60° ... (Eq 1)",
      "Step 3: Given, tan (A - B) = <sup>1</sup>/<sub>√3</sub>",
      "Step 4: We know tan 30° = <sup>1</sup>/<sub>√3</sub>, so A - B = 30° ... (Eq 2)",
      "Step 5: Add Eq 1 and Eq 2: (A + B) + (A - B) = 60° + 30°",
      "Step 6: 2A = 90°, so A = 45°",
      "Step 7: Put A = 45° in Eq 1: 45° + B = 60°",
      "Step 8: B = 60° - 45° = 15°",
      "Step 9: Answer is A = 45°, B = 15°"
    ]
  },
  "q4": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin (A + B) = sin A + sin B.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: False.",
      "Step 2: Let A = 30° and B = 60°.",
      "Step 3: LHS = sin(30° + 60°) = sin 90° = 1.",
      "Step 4: RHS = sin 30° + sin 60° = <sup>1</sup>/<sub>2</sub> + <sup>√3</sup>/<sub>2</sub>, which is not equal to 1.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) The value of sin θ increases as θ increases.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: True.",
      "Step 2: In the range of 0° to 90°, sin θ increases.",
      "Step 3: Example: sin 0° = 0, sin 90° = 1.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) The value of cos θ increases as θ increases.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: False.",
      "Step 2: In the range of 0° to 90°, cos θ decreases.",
      "Step 3: Example: cos 0° = 1, cos 90° = 0.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) sin θ = cos θ for all values of θ.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: False.",
      "Step 2: It is only true for θ = 45° (since sin 45° = cos 45° = <sup>1</sup>/<sub>√2</sub>).",
      "Step 3: For θ = 30°, sin 30° = <sup>1</sup>/<sub>2</sub> but cos 30° = <sup>√3</sup>/<sub>2</sub>.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) cot A is not defined for A = 0°.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Step 1: True.",
      "Step 2: We know cot A = cos A / sin A.",
      "Step 3: For A = 0°, cot 0° = cos 0° / sin 0° = 1 / 0.",
      "Step 4: Division by zero is undefined."
    ]
  }
};

let exercise2Start = content.indexOf('"id": "exercise2"');
let exercise3Start = content.indexOf('"id": "exercise3"');

if (exercise2Start === -1 || exercise3Start === -1) {
  console.error("Could not find exercise blocks.");
  process.exit(1);
}

let ex2Content = content.substring(exercise2Start, exercise3Start);

for (let i = 1; i <= 4; i++) {
  let qId = `"id": "q${i}"`;
  
  let qStart = ex2Content.indexOf(qId);
  let nextQStart = i < 4 ? ex2Content.indexOf(`"id": "q${i+1}"`) : ex2Content.length;
  
  let qBlock = ex2Content.substring(qStart, nextQStart);
  
  let solutionStr = '"solution": [\n' + newSolutions['q'+i].solution.map(s => '                        ' + JSON.stringify(s)).join(',\n') + '\n                    ]';
  
  let match = qBlock.match(/"solution":\s*\[[\s\S]*?\]/);
  if (match) {
    let newQBlock = qBlock.replace(match[0], solutionStr);
    ex2Content = ex2Content.replace(qBlock, newQBlock);
  } else {
    console.error("Could not match solution block for q" + i);
    process.exit(1);
  }
}

content = content.substring(0, exercise2Start) + ex2Content + content.substring(exercise3Start);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
