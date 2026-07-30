const fs = require('fs');
const path = require('path');

// MCQs for Chapter 1
const mcqsCh1 = [
  {
    id: "c7m1-mcq-1",
    question: "What is the sum of (-5) + 5?",
    options: ["0", "10", "-10", "5"],
    correctAnswer: "a",
    explanation: "Adding an integer and its additive inverse always equals 0: (-5) + 5 = 0."
  },
  {
    id: "c7m1-mcq-2",
    question: "What is the additive inverse of -8?",
    options: ["-8", "8", "0", "1"],
    correctAnswer: "b",
    explanation: "The additive inverse of a negative integer is its positive value: -(-8) = 8."
  },
  {
    id: "c7m1-mcq-3",
    question: "What is the product of (-4) × (-3)?",
    options: ["-12", "12", "-7", "7"],
    correctAnswer: "b",
    explanation: "Multiplying two negative integers gives a positive result: (-4) × (-3) = +12."
  },
  {
    id: "c7m1-mcq-4",
    question: "What is (-15) ÷ 3?",
    options: ["5", "-5", "3", "-3"],
    correctAnswer: "b",
    explanation: "Dividing a negative number by a positive number gives a negative result: (-15) ÷ 3 = -5."
  },
  {
    id: "c7m1-mcq-5",
    question: "What is the value of 0 × (-9)?",
    options: ["-9", "9", "0", "1"],
    correctAnswer: "c",
    explanation: "Any integer multiplied by 0 is always equal to 0."
  },
  {
    id: "c7m1-mcq-6",
    question: "Which integer is neither positive nor negative?",
    options: ["1", "-1", "0", "10"],
    correctAnswer: "c",
    explanation: "Zero (0) is a neutral integer. It is neither positive nor negative."
  },
  {
    id: "c7m1-mcq-7",
    question: "What is the result of (-1) × (-1) × (-1)?",
    options: ["1", "-1", "3", "-3"],
    correctAnswer: "b",
    explanation: "An odd number of negative factors gives a negative result: (-1) × (-1) × (-1) = -1."
  },
  {
    id: "c7m1-mcq-8",
    question: "On a number line, where do negative integers lie relative to zero?",
    options: ["To the right of 0", "To the left of 0", "Above 0", "Below 0"],
    correctAnswer: "b",
    explanation: "On a horizontal number line, negative numbers are always placed to the left of 0."
  },
  {
    id: "c7m1-mcq-9",
    question: "What is the result of (-10) + (-5)?",
    options: ["-15", "15", "-5", "5"],
    correctAnswer: "a",
    explanation: "When adding two negative numbers, add their values and keep the negative sign: (-10) + (-5) = -15."
  },
  {
    id: "c7m1-mcq-10",
    question: "Which property states that a × b = b × a?",
    options: ["Associative Property", "Commutative Property", "Distributive Property", "Closure Property"],
    correctAnswer: "b",
    explanation: "The Commutative Property states that changing the order of multiplication does not change the result."
  }
];

// MCQs for Chapter 2
const mcqsCh2 = [
  {
    id: "c7m2-mcq-1",
    question: "What is the reciprocal of 3/7?",
    options: ["3/7", "7/3", "1/3", "1/7"],
    correctAnswer: "b",
    explanation: "To find the reciprocal of a fraction, swap the numerator and denominator: 3/7 becomes 7/3."
  },
  {
    id: "c7m2-mcq-2",
    question: "Which of the following is a proper fraction?",
    options: ["5/3", "7/4", "2/5", "9/2"],
    correctAnswer: "c",
    explanation: "A proper fraction has a numerator smaller than its denominator (2 < 5)."
  },
  {
    id: "c7m2-mcq-3",
    question: "What is (1/2) × (2/3)?",
    options: ["1/3", "2/5", "3/4", "1/6"],
    correctAnswer: "a",
    explanation: "Product of numerators / product of denominators = (1 × 2)/(2 × 3) = 2/6 = 1/3."
  },
  {
    id: "c7m2-mcq-4",
    question: "What is 0.3 × 10?",
    options: ["0.03", "3", "30", "0.30"],
    correctAnswer: "b",
    explanation: "When multiplying a decimal by 10, shift the decimal point 1 place to the right: 0.3 × 10 = 3."
  },
  {
    id: "c7m2-mcq-5",
    question: "What is 4.5 ÷ 10?",
    options: ["45", "4.5", "0.45", "0.045"],
    correctAnswer: "c",
    explanation: "When dividing a decimal by 10, shift the decimal point 1 place to the left: 4.5 ÷ 10 = 0.45."
  },
  {
    id: "c7m2-mcq-6",
    question: "What is 3/5 + 1/5?",
    options: ["4/10", "4/5", "3/25", "2/5"],
    correctAnswer: "b",
    explanation: "Since denominators are the same, add numerators directly: (3 + 1)/5 = 4/5."
  },
  {
    id: "c7m2-mcq-7",
    question: "Which decimal is greater: 0.7 or 0.07?",
    options: ["0.7", "0.07", "Both are equal", "Cannot be compared"],
    correctAnswer: "a",
    explanation: "Comparing tenths digit: 7 > 0, so 0.7 is greater than 0.07."
  },
  {
    id: "c7m2-mcq-8",
    question: "Express 50 paise in rupees using decimals:",
    options: ["₹ 5.0", "₹ 0.50", "₹ 0.05", "₹ 50.0"],
    correctAnswer: "b",
    explanation: "100 paise = ₹ 1, so 50 paise = 50/100 = ₹ 0.50."
  },
  {
    id: "c7m2-mcq-9",
    question: "What is (2/3) ÷ (2/3)?",
    options: ["0", "1", "4/9", "2/3"],
    correctAnswer: "b",
    explanation: "Any non-zero fraction divided by itself is equal to 1."
  },
  {
    id: "c7m2-mcq-10",
    question: "What is the place value of 2 in 10.25?",
    options: ["Ones", "Tens", "Tenths", "Hundredths"],
    correctAnswer: "c",
    explanation: "The first position immediately after the decimal point represents Tenths."
  }
];

// Update c7-math-1.ts
const ch1Path = path.join(__dirname, 'data', 'content', 'c7-math-1.ts');
let ch1Content = fs.readFileSync(ch1Path, 'utf-8');

// Insert mcqs before the closing };
if (!ch1Content.includes('mcqs:')) {
  ch1Content = ch1Content.trim().replace(/};\s*$/, `  mcqs: ${JSON.stringify(mcqsCh1, null, 2)}\n};\n`);
  fs.writeFileSync(ch1Path, ch1Content, 'utf-8');
  console.log("Added 10 MCQs to c7-math-1.ts!");
} else {
  console.log("c7-math-1.ts already has mcqs");
}

// Update c7-math-2.ts
const ch2Path = path.join(__dirname, 'data', 'content', 'c7-math-2.ts');
let ch2Content = fs.readFileSync(ch2Path, 'utf-8');

if (!ch2Content.includes('mcqs:')) {
  ch2Content = ch2Content.trim().replace(/};\s*$/, `  mcqs: ${JSON.stringify(mcqsCh2, null, 2)}\n};\n`);
  fs.writeFileSync(ch2Path, ch2Content, 'utf-8');
  console.log("Added 10 MCQs to c7-math-2.ts!");
} else {
  console.log("c7-math-2.ts already has mcqs");
}
