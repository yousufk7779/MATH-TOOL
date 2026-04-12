const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

const newSolutions = {
  "q1": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "sin A:",
      "We know: cosec<sup>2</sup> A = 1 + cot<sup>2</sup> A",
      "= <sup>1</sup>/<sub>sin<sup>2</sup> A</sub> = 1 + cot<sup>2</sup> A",
      "= sin<sup>2</sup> A = <sup>1</sup>/<sub>1 + cot<sup>2</sup> A</sub>",
      "= sin A = <sup>1</sup>/<sub>√(1 + cot<sup>2</sup> A)</sub>",
      "tan A:",
      "= tan A = <sup>1</sup>/<sub>cot A</sub>",
      "sec A:",
      "We know: sec<sup>2</sup> A = 1 + tan<sup>2</sup> A",
      "= sec<sup>2</sup> A = 1 + <sup>1</sup>/<sub>cot<sup>2</sup> A</sub>",
      "= sec<sup>2</sup> A = <sup>cot<sup>2</sup> A + 1</sup>/<sub>cot<sup>2</sup> A</sub>",
      "= sec A = <sup>√(cot<sup>2</sup> A + 1)</sup>/<sub>cot A</sub>",
      "**Answer: sin A = <sup>1</sup>/<sub>√(1 + cot<sup>2</sup> A)</sub>, tan A = <sup>1</sup>/<sub>cot A</sub>, sec A = <sup>√(cot<sup>2</sup> A + 1)</sup>/<sub>cot A</sub>**"
    ]
  },
  "q2": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= cos A = <sup>1</sup>/<sub>sec A</sub>",
      "We know: sin<sup>2</sup> A = 1 - cos<sup>2</sup> A",
      "= sin<sup>2</sup> A = 1 - <sup>1</sup>/<sub>sec<sup>2</sup> A</sub>",
      "= sin<sup>2</sup> A = <sup>sec<sup>2</sup> A - 1</sup>/<sub>sec<sup>2</sup> A</sub>",
      "= sin A = <sup>√(sec<sup>2</sup> A - 1)</sup>/<sub>sec A</sub>",
      "We know: tan<sup>2</sup> A = sec<sup>2</sup> A - 1",
      "= tan A = √(sec<sup>2</sup> A - 1)",
      "= cot A = <sup>1</sup>/<sub>tan A</sub>",
      "= cot A = <sup>1</sup>/<sub>√(sec<sup>2</sup> A - 1)</sub>",
      "= cosec A = <sup>1</sup>/<sub>sin A</sub>",
      "= cosec A = <sup>sec A</sup>/<sub>√(sec<sup>2</sup> A - 1)</sub>",
      "**Answer: Calculated all ratios in terms of sec A**"
    ]
  },
  "q3": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) 9 sec<sup>2</sup> A - 9 tan<sup>2</sup> A =</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= 9 (sec<sup>2</sup> A - tan<sup>2</sup> A)",
      "= 9 (1)",
      "= 9",
      "**Answer: (B) 9**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) (1 + tan θ + sec θ) (1 + cot θ - cosec  θ)</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (1 + <sup>sin θ</sup>/<sub>cos θ</sub> + <sup>1</sup>/<sub>cos θ</sub>) (1 + <sup>cos θ</sup>/<sub>sin θ</sub> - <sup>1</sup>/<sub>sin θ</sub>)",
      "= (<sup>cos θ + sin θ + 1</sup>/<sub>cos θ</sub>) (<sup>sin θ + cos θ - 1</sup>/<sub>sin θ</sub>)",
      "= <sup>(sin θ + cos θ + 1)(sin θ + cos θ - 1)</sup>/<sub>sin θ cos θ</sub>",
      "= <sup>(sin θ + cos θ)<sup>2</sup> - 1<sup>2</sup></sup>/<sub>sin θ cos θ</sub>",
      "= <sup>sin<sup>2</sup> θ + cos<sup>2</sup> θ + 2sin θ cos θ - 1</sup>/<sub>sin θ cos θ</sub>",
      "= <sup>1 + 2sin θ cos θ - 1</sup>/<sub>sin θ cos θ</sub>",
      "= <sup>2sin θ cos θ</sup>/<sub>sin θ cos θ</sub>",
      "= 2",
      "**Answer: (C) 2**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) (sec A + tan A) (1 - sin A)</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= (<sup>1</sup>/<sub>cos A</sub> + <sup>sin A</sup>/<sub>cos A</sub>) (1 - sin A)",
      "= (<sup>1 + sin A</sup>/<sub>cos A</sub>) (1 - sin A)",
      "= <sup>(1 + sin A)(1 - sin A)</sup>/<sub>cos A</sub>",
      "= <sup>1 - sin<sup>2</sup> A</sup>/<sub>cos A</sub>",
      "= <sup>cos<sup>2</sup> A</sup>/<sub>cos A</sub>",
      "= cos A",
      "**Answer: (D) cos A**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>1 + tan<sup>2</sup> A</sup>/<sub>1 + cot<sup>2</sup> A</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "= <sup>sec<sup>2</sup> A</sup>/<sub>cosec<sup>2</sup> A</sub>",
      "= <sup>1/cos<sup>2</sup> A</sup>/<sub>1/sin<sup>2</sup> A</sub>",
      "= <sup>sin<sup>2</sup> A</sup>/<sub>cos<sup>2</sup> A</sub>",
      "= tan<sup>2</sup> A",
      "**Answer: (D) tan<sup>2</sup> A**"
    ]
  },
  "q4": {
    solution: [
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) (cosec  θ - cot θ)<sup>2</sup> = <sup>1 - cos θ</sup>/<sub>1 + cos θ</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = (<sup>1</sup>/<sub>sin θ</sub> - <sup>cos θ</sup>/<sub>sin θ</sub>)<sup>2</sup>",
      "= (<sup>1 - cos θ</sup>/<sub>sin θ</sub>)<sup>2</sup>",
      "= <sup>(1 - cos θ)<sup>2</sup></sup>/<sub>sin<sup>2</sup> θ</sub>",
      "= <sup>(1 - cos θ)<sup>2</sup></sup>/<sub>1 - cos<sup>2</sup> θ</sub>",
      "= <sup>(1 - cos θ)(1 - cos θ)</sup>/<sub>(1 - cos θ)(1 + cos θ)</sub>",
      "= <sup>1 - cos θ</sup>/<sub>1 + cos θ</sub>",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) <sup>cos A</sup>/<sub>1 + sin A</sub> + <sup>1 + sin A</sup>/<sub>cos A</sub> = 2 sec A</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = <sup>cos<sup>2</sup> A + (1 + sin A)<sup>2</sup></sup>/<sub>(1 + sin A)cos A</sub>",
      "= <sup>cos<sup>2</sup> A + 1 + sin<sup>2</sup> A + 2sin A</sup>/<sub>(1 + sin A)cos A</sub>",
      "= <sup>1 + 1 + 2sin A</sup>/<sub>(1 + sin A)cos A</sub>",
      "= <sup>2 + 2sin A</sup>/<sub>(1 + sin A)cos A</sub>",
      "= <sup>2(1 + sin A)</sup>/<sub>(1 + sin A)cos A</sub>",
      "= <sup>2</sup>/<sub>cos A</sub>",
      "= 2 sec A",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) <sup>tan θ</sup>/<sub>1 - cot θ</sub> + <sup>cot θ</sup>/<sub>1 - tan θ</sub> = 1 + sec θ cosec  θ</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = (<sup>sin θ/cos θ</sup>) / (1 - <sup>cos θ/sin θ</sup>) + (<sup>cos θ/sin θ</sup>) / (1 - <sup>sin θ/cos θ</sup>)",
      "= (<sup>sin θ/cos θ</sup>) / (<sup>sin θ - cos θ</sup>/<sub>sin θ</sub>) + (<sup>cos θ/sin θ</sup>) / (<sup>cos θ - sin θ</sup>/<sub>cos θ</sub>)",
      "= <sup>sin<sup>2</sup> θ</sup>/<sub>cos θ(sin θ - cos θ)</sub> + <sup>cos<sup>2</sup> θ</sup>/<sub>sin θ(cos θ - sin θ)</sub>",
      "= <sup>sin<sup>2</sup> θ</sup>/<sub>cos θ(sin θ - cos θ)</sub> - <sup>cos<sup>2</sup> θ</sup>/<sub>sin θ(sin θ - cos θ)</sub>",
      "= <sup>sin<sup>3</sup> θ - cos<sup>3</sup> θ</sup>/<sub>sin θ cos θ (sin θ - cos θ)</sub>",
      "= <sup>(sin θ - cos θ)(sin<sup>2</sup> θ + cos<sup>2</sup> θ + sin θ cos θ)</sup>/<sub>sin θ cos θ (sin θ - cos θ)</sub>",
      "= <sup>1 + sin θ cos θ</sup>/<sub>sin θ cos θ</sub>",
      "= <sup>1</sup>/<sub>sin θ cos θ</sub> + <sup>sin θ cos θ</sup>/<sub>sin θ cos θ</sub>",
      "= cosec θ sec θ + 1",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) <sup>1 + sec A</sup>/<sub>sec A</sub> = <sup>sin<sup>2</sup> A</sup>/<sub>1 - cos A</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = <sup>1 + 1/cos A</sup>/<sub>1/cos A</sub>",
      "= <sup>(cos A + 1)/cos A</sup>/<sub>1/cos A</sub>",
      "= 1 + cos A",
      "RHS = <sup>sin<sup>2</sup> A</sup>/<sub>1 - cos A</sub>",
      "= <sup>1 - cos<sup>2</sup> A</sup>/<sub>1 - cos A</sub>",
      "= <sup>(1 - cos A)(1 + cos A)</sup>/<sub>1 - cos A</sub>",
      "= 1 + cos A",
      "LHS = RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) <sup>cos A - sin A + 1</sup>/<sub>cos A + sin A - 1</sub> = cosec  A + cot A</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = <sup>cot A - 1 + cosec  A</sup>/<sub>cot A + 1 - cosec  A</sub>",
      "= <sup>cot A + cosec  A - (cosec<sup>2</sup> A - cot<sup>2</sup> A)</sup>/<sub>cot A - cosec  A + 1</sub>",
      "= <sup>(cot A + cosec  A) - (cosec  A - cot A)(cosec  A + cot A)</sup>/<sub>cot A - cosec  A + 1</sub>",
      "= <sup>(cot A + cosec  A)(1 - cosec  A + cot A)</sup>/<sub>1 - cosec  A + cot A</sub>",
      "= cot A + cosec A",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(vi) √(<sup>1 + sin A</sup>/<sub>1 - sin A</sub>) = sec A + tan A</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = √(<sup>1 + sin A</sup>/<sub>1 - sin A</sub> × <sup>1 + sin A</sup>/<sub>1 + sin A</sub>)",
      "= √(<sup>(1 + sin A)<sup>2</sup></sup>/<sub>1 - sin<sup>2</sup> A</sub>)",
      "= √(<sup>(1 + sin A)<sup>2</sup></sup>/<sub>cos<sup>2</sup> A</sub>)",
      "= <sup>1 + sin A</sup>/<sub>cos A</sub>",
      "= <sup>1</sup>/<sub>cos A</sub> + <sup>sin A</sup>/<sub>cos A</sub>",
      "= sec A + tan A",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(vii) <sup>sin θ - 2 sin<sup>3</sup> θ</sup>/<sub>2 cos<sup>3</sup> θ - cos θ</sub> = tan θ</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = <sup>sin θ (1 - 2sin<sup>2</sup> θ)</sup>/<sub>cos θ (2cos<sup>2</sup> θ - 1)</sub>",
      "= <sup>sin θ (sin<sup>2</sup> θ + cos<sup>2</sup> θ - 2sin<sup>2</sup> θ)</sup>/<sub>cos θ (2cos<sup>2</sup> θ - (sin<sup>2</sup> θ + cos<sup>2</sup> θ))</sub>",
      "= <sup>sin θ (cos<sup>2</sup> θ - sin<sup>2</sup> θ)</sup>/<sub>cos θ (cos<sup>2</sup> θ - sin<sup>2</sup> θ)</sub>",
      "= <sup>sin θ</sup>/<sub>cos θ</sub>",
      "= tan θ",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(viii) (sin A + cosec  A)<sup>2</sup> + (cos A + sec A)<sup>2</sup> = 7 + tan<sup>2</sup> A + cot<sup>2</sup> A</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = (sin<sup>2</sup> A + cosec<sup>2</sup> A + 2sin A cosec  A) + (cos<sup>2</sup> A + sec<sup>2</sup> A + 2cos A sec A)",
      "= sin<sup>2</sup> A + cosec<sup>2</sup> A + 2(1) + cos<sup>2</sup> A + sec<sup>2</sup> A + 2(1)",
      "= (sin<sup>2</sup> A + cos<sup>2</sup> A) + cosec<sup>2</sup> A + sec<sup>2</sup> A + 4",
      "= 1 + (1 + cot<sup>2</sup> A) + (1 + tan<sup>2</sup> A) + 4",
      "= 7 + tan<sup>2</sup> A + cot<sup>2</sup> A",
      "= RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ix) (cosec  A - sin A)(sec A - cos A) = <sup>1</sup>/<sub>tan A + cot A</sub></span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "LHS = (<sup>1</sup>/<sub>sin A</sub> - sin A)(<sup>1</sup>/<sub>cos A</sub> - cos A)",
      "= (<sup>1 - sin<sup>2</sup> A</sup>/<sub>sin A</sub>)(<sup>1 - cos<sup>2</sup> A</sup>/<sub>cos A</sub>)",
      "= (<sup>cos<sup>2</sup> A</sup>/<sub>sin A</sub>)(<sup>sin<sup>2</sup> A</sup>/<sub>cos A</sub>)",
      "= sin A cos A",
      "RHS = <sup>1</sup>/<sub><sup>sin A</sup>/<sub>cos A</sub> + <sup>cos A</sup>/<sub>sin A</sub></sub>",
      "= <sup>1</sup>/<sub><sup>sin<sup>2</sup> A + cos<sup>2</sup> A</sup>/<sub>sin A cos A</sub></sub>",
      "= <sup>sin A cos A</sup>/<sub>1</sub>",
      "= sin A cos A",
      "LHS = RHS",
      "**Answer: Hence Proved.**",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(x) (<sup>1 + tan<sup>2</sup> A</sup>/<sub>1 + cot<sup>2</sup> A</sub>) = (<sup>1 - tan A</sup>/<sub>1 - cot A</sub>)<sup>2</sup> = tan<sup>2</sup> A</span>",
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Part 1 = <sup>1 + tan<sup>2</sup> A</sup>/<sub>1 + cot<sup>2</sup> A</sub>",
      "= <sup>sec<sup>2</sup> A</sup>/<sub>cosec<sup>2</sup> A</sub>",
      "= <sup>1/cos<sup>2</sup> A</sup>/<sub>1/sin<sup>2</sup> A</sub>",
      "= <sup>sin<sup>2</sup> A</sup>/<sub>cos<sup>2</sup> A</sub>",
      "= tan<sup>2</sup> A",
      "Part 2 = (<sup>1 - tan A</sup>/<sub>1 - 1/tan A</sub>)<sup>2</sup>",
      "= (<sup>1 - tan A</sup>/<sub>(tan A - 1)/tan A</sub>)<sup>2</sup>",
      "= (<sup>tan A(1 - tan A)</sup>/<sub>-(1 - tan A)</sub>)<sup>2</sup>",
      "= (-tan A)<sup>2</sup>",
      "= tan<sup>2</sup> A",
      "All parts equal tan<sup>2</sup> A.",
      "**Answer: Hence Proved.**"
    ]
  }
};

let exercise3Start = content.indexOf('"id": "exercise3"');

if (exercise3Start === -1) {
  console.error("Could not find exercise blocks.");
  process.exit(1);
}

let ex3Content = content.substring(exercise3Start);
let nextSection = ex3Content.indexOf('"mcqs"');
if (nextSection !== -1) {
  ex3Content = ex3Content.substring(0, nextSection);
}

for (let i = 1; i <= 4; i++) {
  let qId = `"id": "q${i}"`;
  
  let qStart = ex3Content.indexOf(qId);
  let nextQStart = i < 4 ? ex3Content.indexOf(`"id": "q${i+1}"`) : ex3Content.length;
  
  let qBlock = ex3Content.substring(qStart, nextQStart);
  
  let solutionStr = '"solution": [\n' + newSolutions['q'+i].solution.map(s => '                        ' + JSON.stringify(s)).join(',\n') + '\n                    ]';
  
  let match = qBlock.match(/"solution":\s*\[[\s\S]*?\]/);
  if (match) {
    let newQBlock = qBlock.replace(match[0], solutionStr);
    ex3Content = ex3Content.replace(qBlock, newQBlock);
  } else {
    console.error("Could not match solution block for q" + i);
    process.exit(1);
  }
}

if (nextSection !== -1) {
  content = content.substring(0, exercise3Start) + ex3Content + content.substring(exercise3Start + nextSection);
} else {
  content = content.substring(0, exercise3Start) + ex3Content;
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
