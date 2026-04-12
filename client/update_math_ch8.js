const fs = require('fs');

const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(path, 'utf8');

const newSolutions = {
  "q1": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: In right ∆ABC, ∠B = 90°",
      "AB = 24 cm and BC = 7 cm",
      "By Pythagoras theorem:",
      "AC² = AB² + BC²",
      "AC² = (24)² + (7)²",
      "AC² = 576 + 49 = 625",
      "AC = 25 cm",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin A, cos A</span>",
      "For angle A, Perpendicular = BC = 7 cm, Base = AB = 24 cm, Hypotenuse = AC = 25 cm",
      "sin A = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>7</sup>/<sub>25</sub>",
      "cos A = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>24</sup>/<sub>25</sub>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) sin C, cos C</span>",
      "For angle C, Perpendicular = AB = 24 cm, Base = BC = 7 cm, Hypotenuse = AC = 25 cm",
      "sin C = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>24</sup>/<sub>25</sub>",
      "cos C = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>7</sup>/<sub>25</sub>"
    ],
    answer: "sin A = <sup>7</sup>/<sub>25</sub>, cos A = <sup>24</sup>/<sub>25</sub> | sin C = <sup>24</sup>/<sub>25</sub>, cos C = <sup>7</sup>/<sub>25</sub>"
  },
  "q2": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "From the given figure, in right ∆PQR, ∠Q = 90°",
      "PQ = 12 cm and PR = 13 cm",
      "By Pythagoras theorem:",
      "PR² = PQ² + QR²",
      "(13)² = (12)² + QR²",
      "169 = 144 + QR²",
      "QR² = 169 - 144 = 25",
      "QR = 5 cm",
      "Now, tan P = <sup>Perpendicular</sup>/<sub>Base</sub> = <sup>QR</sup>/<sub>PQ</sub> = <sup>5</sup>/<sub>12</sub>",
      "cot R = <sup>Base</sup>/<sub>Perpendicular</sub> = <sup>QR</sup>/<sub>PQ</sub> = <sup>5</sup>/<sub>12</sub>",
      "Therefore, tan P - cot R = <sup>5</sup>/<sub>12</sub> - <sup>5</sup>/<sub>12</sub>",
      "tan P - cot R = 0"
    ],
    answer: "tan P - cot R = 0"
  },
  "q3": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: sin A = <sup>3</sup>/<sub>4</sub>",
      "We know, sin A = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub>",
      "Let Perpendicular = 3k and Hypotenuse = 4k",
      "By Pythagoras theorem:",
      "Hypotenuse² = Perpendicular² + Base²",
      "(4k)² = (3k)² + Base²",
      "16k² = 9k² + Base²",
      "Base² = 16k² - 9k² = 7k²",
      "Base = √7k",
      "Now, cos A = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>√7k</sup>/<sub>4k</sub> = <sup>√7</sup>/<sub>4</sub>",
      "tan A = <sup>Perpendicular</sup>/<sub>Base</sub> = <sup>3k</sup>/<sub>√7k</sub> = <sup>3</sup>/<sub>√7</sub>"
    ],
    answer: "cos A = <sup>√7</sup>/<sub>4</sub>, tan A = <sup>3</sup>/<sub>√7</sub>"
  },
  "q4": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: 15 cot A = 8",
      "cot A = <sup>8</sup>/<sub>15</sub>",
      "We know, cot A = <sup>Base</sup>/<sub>Perpendicular</sub>",
      "Let Base = 8k and Perpendicular = 15k",
      "By Pythagoras theorem:",
      "Hypotenuse² = Base² + Perpendicular²",
      "Hypotenuse² = (8k)² + (15k)²",
      "Hypotenuse² = 64k² + 225k² = 289k²",
      "Hypotenuse = 17k",
      "Now, sin A = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>15k</sup>/<sub>17k</sub> = <sup>15</sup>/<sub>17</sub>",
      "sec A = <sup>Hypotenuse</sup>/<sub>Base</sub> = <sup>17k</sup>/<sub>8k</sub> = <sup>17</sup>/<sub>8</sub>"
    ],
    answer: "sin A = <sup>15</sup>/<sub>17</sub>, sec A = <sup>17</sup>/<sub>8</sub>"
  },
  "q5": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: sec θ = <sup>13</sup>/<sub>12</sub>",
      "We know, sec θ = <sup>Hypotenuse</sup>/<sub>Base</sub>",
      "Let Hypotenuse = 13k and Base = 12k",
      "By Pythagoras theorem:",
      "Hypotenuse² = Perpendicular² + Base²",
      "(13k)² = Perpendicular² + (12k)²",
      "169k² = Perpendicular² + 144k²",
      "Perpendicular² = 169k² - 144k² = 25k²",
      "Perpendicular = 5k",
      "Now calculating other ratios:",
      "sin θ = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>5k</sup>/<sub>13k</sub> = <sup>5</sup>/<sub>13</sub>",
      "cos θ = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>12k</sup>/<sub>13k</sub> = <sup>12</sup>/<sub>13</sub>",
      "tan θ = <sup>Perpendicular</sup>/<sub>Base</sub> = <sup>5k</sup>/<sub>12k</sub> = <sup>5</sup>/<sub>12</sub>",
      "cot θ = <sup>Base</sup>/<sub>Perpendicular</sub> = <sup>12k</sup>/<sub>5k</sub> = <sup>12</sup>/<sub>5</sub>",
      "cosec θ = <sup>Hypotenuse</sup>/<sub>Perpendicular</sub> = <sup>13k</sup>/<sub>5k</sub> = <sup>13</sup>/<sub>5</sub>"
    ],
    answer: "sin θ = <sup>5</sup>/<sub>13</sub>, cos θ = <sup>12</sup>/<sub>13</sub>, tan θ = <sup>5</sup>/<sub>12</sub>, cot θ = <sup>12</sup>/<sub>5</sub>, cosec θ = <sup>13</sup>/<sub>5</sub>"
  },
  "q6": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Let us take a right angled triangle ABC, right angled at C.",
      "So, ∠C = 90°",
      "We know, cos = <sup>Base</sup>/<sub>Hypotenuse</sub>",
      "For angle A, Base = AC and Hypotenuse = AB",
      "cos A = <sup>AC</sup>/<sub>AB</sub>",
      "For angle B, Base = BC and Hypotenuse = AB",
      "cos B = <sup>BC</sup>/<sub>AB</sub>",
      "Given: cos A = cos B",
      "<sup>AC</sup>/<sub>AB</sub> = <sup>BC</sup>/<sub>AB</sub>",
      "AC = BC",
      "We know that angles opposite to equal sides of a triangle are equal.",
      "Therefore, ∠B = ∠A",
      "Or, ∠A = ∠B (Hence proved)"
    ],
    answer: "Hence proved."
  },
  "q7": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: cot θ = <sup>7</sup>/<sub>8</sub>",
      "We know, cot θ = <sup>Base</sup>/<sub>Perpendicular</sub>",
      "Let Base = 7k and Perpendicular = 8k",
      "By Pythagoras theorem:",
      "Hypotenuse² = Base² + Perpendicular²",
      "Hypotenuse² = (7k)² + (8k)²",
      "Hypotenuse² = 49k² + 64k² = 113k²",
      "Hypotenuse = √113k",
      "sin θ = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>8k</sup>/<sub>√113k</sub> = <sup>8</sup>/<sub>√113</sub>",
      "cos θ = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>7k</sup>/<sub>√113k</sub> = <sup>7</sup>/<sub>√113</sub>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) Evaluate: <sup>(1 + sin θ)(1 - sin θ)</sup>/<sub>(1 + cos θ)(1 - cos θ)</sub></span>",
      "It is in the form (a+b)(a-b) = a² - b²",
      "= <sup>1 - sin² θ</sup>/<sub>1 - cos² θ</sub>",
      "= <sup>1 - (<sup>8</sup>/<sub>√113</sub>)²</sup>/<sub>1 - (<sup>7</sup>/<sub>√113</sub>)²</sub>",
      "= <sup>1 - <sup>64</sup>/<sub>113</sub></sup>/<sub>1 - <sup>49</sup>/<sub>113</sub></sub>",
      "= <sup>(113 - 64)/113</sup>/<sub>(113 - 49)/113</sub>",
      "= <sup>49</sup>/<sub>64</sub>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) Evaluate: cot² θ</span>",
      "cot² θ = (cot θ)²",
      "cot² θ = (<sup>7</sup>/<sub>8</sub>)²",
      "cot² θ = <sup>49</sup>/<sub>64</sub>"
    ],
    answer: "(i) <sup>49</sup>/<sub>64</sub> | (ii) <sup>49</sup>/<sub>64</sub>"
  },
  "q8": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: 3 cot A = 4",
      "cot A = <sup>4</sup>/<sub>3</sub>",
      "tan A = <sup>1</sup>/<sub>cot A</sub> = <sup>3</sup>/<sub>4</sub>",
      "Let Base = 4k and Perpendicular = 3k",
      "By Pythagoras theorem:",
      "Hypotenuse² = Base² + Perpendicular²",
      "Hypotenuse² = (4k)² + (3k)²",
      "Hypotenuse² = 16k² + 9k² = 25k²",
      "Hypotenuse = 5k",
      "sin A = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>3</sup>/<sub>5</sub>",
      "cos A = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>4</sup>/<sub>5</sub>",
      "Taking LHS: <sup>1 - tan² A</sup>/<sub>1 + tan² A</sub>",
      "= <sup>1 - (<sup>3</sup>/<sub>4</sub>)²</sup>/<sub>1 + (<sup>3</sup>/<sub>4</sub>)²</sub>",
      "= <sup>1 - <sup>9</sup>/<sub>16</sub></sup>/<sub>1 + <sup>9</sup>/<sub>16</sub></sub>",
      "= <sup>(16 - 9)/16</sup>/<sub>(16 + 9)/16</sub> = <sup>7</sup>/<sub>25</sub>",
      "Taking RHS: cos² A - sin² A",
      "= (<sup>4</sup>/<sub>5</sub>)² - (<sup>3</sup>/<sub>5</sub>)²",
      "= <sup>16</sup>/<sub>25</sub> - <sup>9</sup>/<sub>25</sub>",
      "= <sup>7</sup>/<sub>25</sub>",
      "Since LHS = RHS,",
      "Yes, <sup>1 - tan² A</sup>/<sub>1 + tan² A</sub> = cos² A - sin² A"
    ],
    answer: "Yes, LHS = RHS"
  },
  "q9": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: tan A = <sup>1</sup>/<sub>√3</sub>",
      "We know, tan A = <sup>Perpendicular</sup>/<sub>Base</sub> = <sup>BC</sup>/<sub>AB</sub>",
      "Let BC = 1k and AB = √3k",
      "By Pythagoras theorem:",
      "AC² = AB² + BC²",
      "AC² = (√3k)² + (1k)²",
      "AC² = 3k² + 1k² = 4k²",
      "AC = 2k",
      "sin A = <sup>BC</sup>/<sub>AC</sub> = <sup>1k</sup>/<sub>2k</sub> = <sup>1</sup>/<sub>2</sub>",
      "cos A = <sup>AB</sup>/<sub>AC</sub> = <sup>√3k</sup>/<sub>2k</sub> = <sup>√3</sup>/<sub>2</sub>",
      "sin C = <sup>AB</sup>/<sub>AC</sub> = <sup>√3k</sup>/<sub>2k</sub> = <sup>√3</sup>/<sub>2</sub>",
      "cos C = <sup>BC</sup>/<sub>AC</sub> = <sup>1k</sup>/<sub>2k</sub> = <sup>1</sup>/<sub>2</sub>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) sin A cos C + cos A sin C</span>",
      "=(<sup>1</sup>/<sub>2</sub> × <sup>1</sup>/<sub>2</sub>) + (<sup>√3</sup>/<sub>2</sub> × <sup>√3</sup>/<sub>2</sub>)",
      "= <sup>1</sup>/<sub>4</sub> + <sup>3</sup>/<sub>4</sub>",
      "= <sup>4</sup>/<sub>4</sub> = 1",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) cos A cos C - sin A sin C</span>",
      "=(<sup>√3</sup>/<sub>2</sub> × <sup>1</sup>/<sub>2</sub>) - (<sup>1</sup>/<sub>2</sub> × <sup>√3</sup>/<sub>2</sub>)",
      "= <sup>√3</sup>/<sub>4</sub> - <sup>√3</sup>/<sub>4</sub>",
      "= 0"
    ],
    answer: "(i) 1 | (ii) 0"
  },
  "q10": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "Given: In right ∆PQR, ∠Q = 90°",
      "PQ = 5 cm and PR + QR = 25 cm",
      "Let QR = x cm",
      "Then PR = (25 - x) cm",
      "By Pythagoras theorem:",
      "PR² = PQ² + QR²",
      "(25 - x)² = (5)² + x²",
      "625 + x² - 50x = 25 + x²",
      "625 - 50x = 25",
      "50x = 600",
      "x = 12 cm",
      "So, QR = 12 cm",
      "PR = 25 - 12 = 13 cm",
      "Now finding trigonometric ratios for angle P:",
      "sin P = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub> = <sup>QR</sup>/<sub>PR</sub> = <sup>12</sup>/<sub>13</sub>",
      "cos P = <sup>Base</sup>/<sub>Hypotenuse</sub> = <sup>PQ</sup>/<sub>PR</sub> = <sup>5</sup>/<sub>13</sub>",
      "tan P = <sup>Perpendicular</sup>/<sub>Base</sub> = <sup>QR</sup>/<sub>PQ</sub> = <sup>12</sup>/<sub>5</sub>"
    ],
    answer: "sin P = <sup>12</sup>/<sub>13</sub>, cos P = <sup>5</sup>/<sub>13</sub>, tan P = <sup>12</sup>/<sub>5</sub>"
  },
  "q11": {
    solution: [
      "<span style=\"font-weight: 700; color: #2E7D32;\">Solution:</span>",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(i) The value of tan A is always less than 1.</span>",
      "False",
      "Because tan A = <sup>Perpendicular</sup>/<sub>Base</sub>, and Perpendicular can be greater than Base.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(ii) sec A = <sup>12</sup>/<sub>5</sub> for some value of angle A.</span>",
      "True",
      "Because sec A = <sup>Hypotenuse</sup>/<sub>Base</sub>, and Hypotenuse is always greater than the Base.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iii) cos A is the abbreviation used for the cosecant of angle A.</span>",
      "False",
      "Because cos A is the abbreviation for cosine of angle A, while cosecant of angle A is written as cosec A.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(iv) cot A is the product of cot and A.</span>",
      "False",
      "Because cot A is a single symbol meaning cotangent of angle A. It is not a product of 'cot' and 'A'.",
      "",
      "<span style=\"color: #FFAB00; font-weight: normal;\">(v) sin θ = <sup>4</sup>/<sub>3</sub> for some angle θ.</span>",
      "False",
      "Because sin θ = <sup>Perpendicular</sup>/<sub>Hypotenuse</sub>, and Hypotenuse must be the longest side. Here 4 > 3 is not possible."
    ],
    answer: "(i) False | (ii) True | (iii) False | (iv) False | (v) False"
  }
};

let exercise1Start = content.indexOf('"id": "exercise1"');
let exercise2Start = content.indexOf('"id": "exercise2"');

if (exercise1Start === -1 || exercise2Start === -1) {
  console.error("Could not find exercise blocks.");
  process.exit(1);
}

let ex1Content = content.substring(exercise1Start, exercise2Start);

for (let i = 1; i <= 11; i++) {
  let qId = `"id": "q${i}"`;
  
  let qStart = ex1Content.indexOf(qId);
  let nextQStart = i < 11 ? ex1Content.indexOf(`"id": "q${i+1}"`) : ex1Content.length;
  
  let qBlock = ex1Content.substring(qStart, nextQStart);
  
  let solutionStr = '"solution": [\\n' + newSolutions['q'+i].solution.map(s => '                        ' + JSON.stringify(s)).join(',\\n') + '\\n                    ]';
  let answerStr = '"answer": ' + JSON.stringify(newSolutions['q'+i].answer);
  
  let newQBlock = qBlock.replace(/"solution":\\s*\\[[\\s\\S]*?\\],/, solutionStr.replace(/\\\\n/g, '\\n') + ',');
  newQBlock = newQBlock.replace(/"answer":\\s*".*?"/, answerStr);
  
  ex1Content = ex1Content.replace(qBlock, newQBlock);
}

content = content.substring(0, exercise1Start) + ex1Content + content.substring(exercise2Start);

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
