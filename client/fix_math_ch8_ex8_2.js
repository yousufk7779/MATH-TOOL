const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

const newSolutions = {
  "q1": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin 60° cos 30° + sin 30° cos 60°</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: sin 60° cos 30° + sin 30° cos 60°",
      "= (<sup>√3</sup>/<sub>2</sub>) × (<sup>√3</sup>/<sub>2</sub>) + (<sup>1</sup>/<sub>2</sub>) × (<sup>1</sup>/<sub>2</sub>)",
      "= <sup>3</sup>/<sub>4</sub> + <sup>1</sup>/<sub>4</sub>",
      "= <sup>4</sup>/<sub>4</sub> = 1",
      "**Answer: 1**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) 2 tan<sup>2</sup> 45° + cos<sup>2</sup> 30° - sin<sup>2</sup> 60°</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: 2 tan<sup>2</sup> 45° + cos<sup>2</sup> 30° - sin<sup>2</sup> 60°",
      "= 2(1)<sup>2</sup> + (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup> - (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup>",
      "= 2(1) + 0",
      "= 2",
      "**Answer: 2**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) <sup>cos 45°</sup>/<sub>sec 30° + cosec  30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (<sup>1</sup>/<sub>√2</sub>) / (<sup>2</sup>/<sub>√3</sub> + 2)",
      "= (<sup>1</sup>/<sub>√2</sub>) / ((2 + 2√3) / √3)",
      "= (<sup>1</sup>/<sub>√2</sub>) × (√3 / (2 + 2√3))",
      "= √3 / (2√2 + 2√6)",
      "Rationalize the denominator:",
      "= √3(2√6 - 2√2) / ((2√6)<sup>2</sup> - (2√2)<sup>2</sup>)",
      "= (2√18 - 2√6) / (24 - 8)",
      "= (6√2 - 2√6) / 16",
      "= (3√2 - √6) / 8",
      "**Answer: <sup>3√2 - √6</sup>/<sub>8</sub>**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>sin 30° + tan 45° - cosec  60°</sup>/<sub>sec 30° + cos 60° + cot 45°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (<sup>1</sup>/<sub>2</sub> + 1 - <sup>2</sup>/<sub>√3</sub>) / (<sup>2</sup>/<sub>√3</sub> + <sup>1</sup>/<sub>2</sub> + 1)",
      "= (<sup>3</sup>/<sub>2</sub> - <sup>2</sup>/<sub>√3</sub>) / (<sup>3</sup>/<sub>2</sub> + <sup>2</sup>/<sub>√3</sub>)",
      "= ((3√3 - 4) / 2√3) / ((3√3 + 4) / 2√3)",
      "= (3√3 - 4) / (3√3 + 4)",
      "Rationalize the denominator:",
      "Numerator = (3√3 - 4)<sup>2</sup> = 27 + 16 - 24√3 = 43 - 24√3",
      "Denominator = (3√3)<sup>2</sup> - 4<sup>2</sup> = 27 - 16 = 11",
      "= <sup>43 - 24√3</sup>/<sub>11</sub>",
      "**Answer: <sup>43 - 24√3</sup>/<sub>11</sub>**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) <sup>5 cos<sup>2</sup> 60° + 4 sec<sup>2</sup> 30° - tan<sup>2</sup> 45°</sup>/<sub>sin<sup>2</sup> 30° + cos<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (5(<sup>1</sup>/<sub>2</sub>)<sup>2</sup> + 4(<sup>2</sup>/<sub>√3</sub>)<sup>2</sup> - 1<sup>2</sup>) / ((<sup>1</sup>/<sub>2</sub>)<sup>2</sup> + (<sup>√3</sup>/<sub>2</sub>)<sup>2</sup>)",
      "= (5(<sup>1</sup>/<sub>4</sub>) + 4(<sup>4</sup>/<sub>3</sub>) - 1) / (<sup>1</sup>/<sub>4</sub> + <sup>3</sup>/<sub>4</sub>)",
      "Denominator = <sup>4</sup>/<sub>4</sub> = 1",
      "Numerator = <sup>5</sup>/<sub>4</sub> + <sup>16</sup>/<sub>3</sub> - 1",
      "= (15 + 64 - 12) / 12",
      "= <sup>67</sup>/<sub>12</sub>",
      "**Answer: <sup>67</sup>/<sub>12</sub>**"
    ]
  },
  "q2": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) <sup>2 tan 30°</sup>/<sub>1 + tan<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= 2(<sup>1</sup>/<sub>√3</sub>) / (1 + (<sup>1</sup>/<sub>√3</sub>)<sup>2</sup>)",
      "= (<sup>2</sup>/<sub>√3</sub>) / (1 + <sup>1</sup>/<sub>3</sub>)",
      "= (<sup>2</sup>/<sub>√3</sub>) / (<sup>4</sup>/<sub>3</sub>)",
      "= (<sup>2</sup>/<sub>√3</sub>) × (<sup>3</sup>/<sub>4</sub>) = <sup>3</sup>/<sub>2√3</sub>",
      "= <sup>√3</sup>/<sub>2</sub>",
      "Since sin 60° = <sup>√3</sup>/<sub>2</sub>, the correct option is (A).",
      "**Answer: (A) sin 60°**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) <sup>1 - tan<sup>2</sup> 45°</sup>/<sub>1 + tan<sup>2</sup> 45°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (1 - 1<sup>2</sup>) / (1 + 1<sup>2</sup>)",
      "= (1 - 1) / (1 + 1)",
      "= <sup>0</sup>/<sub>2</sub> = 0",
      "**Answer: (D) 0**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) sin 2A = 2 sin A is true when A =</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Check for A = 0°:",
      "LHS = sin(2 × 0°) = sin 0° = 0",
      "RHS = 2 sin 0° = 2 × 0 = 0",
      "Since LHS = RHS, it is true for A = 0°.",
      "**Answer: (A) 0°**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>2 tan 30°</sup>/<sub>1 - tan<sup>2</sup> 30°</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= 2(<sup>1</sup>/<sub>√3</sub>) / (1 - (<sup>1</sup>/<sub>√3</sub>)<sup>2</sup>)",
      "= (<sup>2</sup>/<sub>√3</sub>) / (1 - <sup>1</sup>/<sub>3</sub>)",
      "= (<sup>2</sup>/<sub>√3</sub>) / (<sup>2</sup>/<sub>3</sub>)",
      "= (<sup>2</sup>/<sub>√3</sub>) × (<sup>3</sup>/<sub>2</sub>) = <sup>3</sup>/<sub>√3</sub> = √3",
      "Since tan 60° = √3, correct option is (C).",
      "**Answer: (C) tan 60°**"
    ]
  },
  "q3": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given, tan (A + B) = √3",
      "We know tan 60° = √3, so A + B = 60° ... (Eq 1)",
      "Given, tan (A - B) = <sup>1</sup>/<sub>√3</sub>",
      "We know tan 30° = <sup>1</sup>/<sub>√3</sub>, so A - B = 30° ... (Eq 2)",
      "Adding Eq 1 and Eq 2:",
      "(A + B) + (A - B) = 60° + 30°",
      "2A = 90° ⇒ A = 45°",
      "Put A = 45° in Eq 1:",
      "45° + B = 60° ⇒ B = 15°",
      "**Answer: A = 45°, B = 15°**"
    ]
  },
  "q4": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin (A + B) = sin A + sin B.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "False.",
      "Let A = 30° and B = 60°.",
      "LHS = sin(30° + 60°) = sin 90° = 1.",
      "RHS = sin 30° + sin 60° = <sup>1</sup>/<sub>2</sub> + <sup>√3</sup>/<sub>2</sub> ≠ 1.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) The value of sin θ increases as θ increases.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "True.",
      "From 0° to 90°, sin θ increases from 0 to 1.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) The value of cos θ increases as θ increases.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "False.",
      "From 0° to 90°, cos θ decreases from 1 to 0.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) sin θ = cos θ for all values of θ.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "False.",
      "It is only true for θ = 45° (since sin 45° = cos 45° = <sup>1</sup>/<sub>√2</sub>).",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) cot A is not defined for A = 0°.</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "True.",
      "cot 0° = cos 0° / sin 0° = 1 / 0.",
      "Division by zero is undefined."
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
