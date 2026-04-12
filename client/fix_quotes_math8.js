const fs = require('fs');
let c = fs.readFileSync('data/content/math-ch8.ts', 'utf8');

// Fix unescaped "n causing string breakout
c = c.replace(/="n12 ÷ 13/g, '= 12 ÷ 13');
c = c.replace(/="n12 ÷ 5/g, '= 12 ÷ 5');
c = c.replace(/="n<sup>12<\/sup>\/<sub>13<\/sub>/g, '= 12 ÷ 13');
c = c.replace(/=\\"n<sup>12<\/sup>\/<sub>5<\/sub>/g, '= 12 ÷ 5');
c = c.replace(/="n3 ÷ √7/g, '= 3 ÷ √7');
c = c.replace(/="n<sup>3<\/sup>\/<sub>√7<\/sub>/g, '= 3 ÷ √7');

// Fix the nested sup problems that resulted in () ÷ ()) etc. in EX 8.3
const q1Target = `                {
                    "id": "q1",
                    "number": "1",
                    "question": "<span style=\\"font-weight: normal;\\">Express the trigonometric ratios sin A, sec A and tan A in terms of cot A.</span>",
                    "solution": [
                        "<span style=\\"font-weight: 700; color: #2E7D32;\\">Solution:</span>",
                        "sin A:",
                        "We know: cosec² A = 1 + cot² A",
                        "= 1 ÷ sin² A = 1 + cot² A",
                        "= sin² A = 1 ÷ (1 + cot² A)",
                        "= sin A = 1 ÷ √(1 + cot² A)",
                        "tan A:",
                        "= tan A = 1 ÷ cot A",
                        "sec A:",
                        "We know: sec² A = 1 + tan² A",
                        "= sec² A = 1 + 1 ÷ cot² A",
                        "= sec² A = (cot² A + 1) ÷ cot² A",
                        "= sec A = √(cot² A + 1) ÷ cot A",
                        "**Answer: sin A = 1 ÷ √(1 + cot² A), tan A = 1 ÷ cot A, sec A = √(cot² A + 1) ÷ cot A**"
                    ],
                    "answer": "Therefore, the required values are sin A = 1 ÷ √(1 + cot² A), tan A = 1 ÷ cot A, sec A = √(cot² A + 1) ÷ cot A."
                }`;

const q2Target = `                {
                    "id": "q2",
                    "number": "2",
                    "question": "<span style=\\"font-weight: normal;\\">Write all the other trigonometric ratios of ∠A in terms of sec A.</span>",
                    "solution": [
                        "<span style=\\"font-weight: 700; color: #2E7D32;\\">Solution:</span>",
                        "= cos A = 1 ÷ sec A",
                        "We know: sin² A = 1 - cos² A",
                        "= sin² A = 1 - 1 ÷ sec² A",
                        "= sin² A = (sec² A - 1) ÷ sec² A",
                        "= sin A = √(sec² A - 1) ÷ sec A",
                        "We know: tan² A = sec² A - 1",
                        "= tan A = √(sec² A - 1)",
                        "= cot A = 1 ÷ tan A",
                        "= cot A = 1 ÷ √(sec² A - 1)",
                        "= cosec A = 1 ÷ sin A",
                        "= cosec A = sec A ÷ √(sec² A - 1)",
                        "**Answer: Calculated all ratios in terms of sec A.**"
                    ],
                    "answer": "Therefore, the ratios are expressed in terms of sec A as above."
                }`;

// Doing manual replacements for q1 and q2
let ex3Index = c.indexOf('"id": "exercise3"');
let q1I = c.indexOf('"id": "q1"', ex3Index);
let q2I = c.indexOf('"id": "q2"', ex3Index);
let q3I = c.indexOf('"id": "q3"', ex3Index);

let ex3pre = c.substring(0, q1I - 17);
let ex3post = c.substring(q3I - 17);
c = ex3pre + q1Target + ',\n' + q2Target + ',\n' + ex3post;

fs.writeFileSync('data/content/math-ch8.ts', c, 'utf8');
console.log('Fixed quotes and corrupt structures!');
