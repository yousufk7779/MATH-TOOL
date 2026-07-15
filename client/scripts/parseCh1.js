const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");

const chapterDir = path.join(__dirname, "../assets/chapters/chapter1");
const outFile = path.join(__dirname, "../data/content/math-ch1.ts");

let result = {
  id: "ch1",
  number: 1,
  title: "Real Numbers",
  introduction:
    "Real numbers constitute the foundation of mathematics. Every number that can be plotted on a number line is a real number. This chapter covers properties of integers, rational, and irrational numbers.",
  definitions: [
    {
      term: "Real Numbers (R)",
      description: "The set of rational and irrational numbers.",
    },
    {
      term: "Prime Number",
      description: "A number that has exactly two factors (1 and itself).",
    },
    {
      term: "Composite Number",
      description: "A number that has more than two factors.",
    },
    {
      term: "Rational Number",
      description: "A number that can be written in the form p/q, where p and q are integers and q ≠ 0.",
    },
    {
      term: "Irrational Number",
      description: "A number that cannot be written in the form p/q, where p and q are integers and q ≠ 0.",
    },
  ],
  keyPoints: [
    "The Fundamental Theorem of Arithmetic: Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
    "Properties of irrational numbers: Proving numbers like √2, √3, and √5 are irrational.",
  ],
  formulas: [
    {
      name: "HCF and LCM Relation",
      formula: "HCF(a, b) × LCM(a, b) = a × b (for any two positive integers a and b)",
    },
  ],
  crux: [
    "Proving absolute irrationality of a number (such as √2 or √5) using the method of contradiction.",
    "Determining HCF and LCM of numbers using unique prime factorisation (Fundamental Theorem of Arithmetic).",
  ],
  summary: [
    "Real numbers connect abstract algebra to tangible measurement.",
    "The relationship HCF(a, b) × LCM(a, b) = a × b holds true for any two positive integers.",
    "Carefully read and understand every problem statement before jumping into the solution.",
    "A strong grasp of the core concepts is the key to solving complex problems easily.",
    "Make a habit of practicing the solved examples to get familiar with standard solution formats.",
  ],
  examples: [],
  exercises: [],
  mcqs: [],
};

function cleanText(text) {
  if (!text) return "";
  return text
    .trim()
    .replace(/^Â»\s*/, "")
    .replace(
      /\\\(\\frac\{([^\}]+)\}\{([^\}]+)\}\\\)/g,
      "<sup>$1</sup>&frasl;<sub>$2</sub>",
    )
    .replace(/\\\(([^\)]+)\/([^\)]+)\\\)/g, "<sup>$1</sup>&frasl;<sub>$2</sub>")
    .replace(
      /([a-zA-Z0-9\+\-\s]+)\/([a-zA-Z0-9\+\-\s]+)/g,
      "<sup>$1</sup>&frasl;<sub>$2</sub>",
    )
    .replace(/\\\\/g, "\\")
    .replace(/\n\s*/g, "\n");
}

function parseExercise(fileName, exId, exName) {
  const p = path.join(chapterDir, fileName);
  if (!fs.existsSync(p)) return;

  const html = fs.readFileSync(p, "utf8");
  const $ = cheerio.load(html);

  let questions = [];
  $(".content-box").each((i, el) => {
    let questionText = "";
    const qEl = $(el).find(".question").first();
    if (qEl.length) {
      qEl.contents().each((j, node) => {
        if (node.tagName === "img") {
          questionText += `\n<img src="${$(node).attr("src")}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />\n`;
        } else if (node.type === "text") {
          questionText += $(node).text();
        } else {
          questionText += $(node).text();
        }
      });
      // subQs not added to questionText
    }

    questionText = cleanText(
      questionText.replace(/^(?:Question|Example)?\s*\d+\.\s*/i, ""),
    );
    questionText = questionText.replace(/\n/g, "<br/>");
    questionText = `<span style="font-weight: normal;">${questionText}</span>`;

    let solutionSteps = [];
    let finalAnswers = [];

    $(el)
      .children()
      .each((j, child) => {
        if ($(child).hasClass("question")) return;

        if ($(child).hasClass("sub-question")) {
          if (solutionSteps.length > 0) solutionSteps.push("");
          solutionSteps.push(
            `<span style="font-weight: normal;">${cleanText($(child).text())}</span>`,
          );
        } else if ($(child).hasClass("section-title")) {
          solutionSteps.push(
            `<span style="font-weight: normal;">${cleanText($(child).text())}</span>`,
          );
        } else if ($(child).hasClass("final-answer")) {
          let ans = cleanText($(child).text());
          finalAnswers.push(ans);
          solutionSteps.push(`**${ans}**`);
        } else if ($(child).is("img")) {
          solutionSteps.push(
            `<img src="${$(child).attr("src")}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`,
          );
        } else {
          let imgs = $(child).find("img");
          if (imgs.length) {
            $(child)
              .contents()
              .each((k, node) => {
                if (node.tagName === "img") {
                  solutionSteps.push(
                    `<img src="${$(node).attr("src")}" style="background: #FFFFFF; padding: 10px; border-radius: 10px; width: 100%; max-width: 320px; height: 120px; object-fit: contain; margin: 15px auto; display: block; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" />`,
                  );
                } else if (node.type === "text") {
                  let text = cleanText($(node).text());
                  if (text && text !== "Â»" && text !== "")
                    solutionSteps.push(text.replace(/^Â»\s*/, ""));
                } else {
                  let text = cleanText($(node).text());
                  if (text && text !== "Â»" && text !== "")
                    solutionSteps.push(
                      ...text
                        .split("\n")
                        .map((s) => s.trim().replace(/^Â»\s*/, ""))
                        .filter((s) => s),
                    );
                }
              });
          } else {
            let text = cleanText($(child).text());
            if (text && text !== "Â»") {
              solutionSteps.push(
                ...text
                  .split("\n")
                  .map((s) => s.trim().replace(/^Â»\s*/, ""))
                  .filter((s) => s),
              );
            }
          }
        }
      });

    solutionSteps = solutionSteps.filter((s) => s.trim() !== "" || s === "");
    let cleanedSteps = [];
    for (let k = 0; k < solutionSteps.length; k++) {
      if (solutionSteps[k] === "") {
        if (
          cleanedSteps.length > 0 &&
          cleanedSteps[cleanedSteps.length - 1] !== ""
        ) {
          cleanedSteps.push("");
        }
      } else {
        cleanedSteps.push(solutionSteps[k]);
      }
    }

    let answer = finalAnswers.join(" | ");
    if (!answer && cleanedSteps.length > 0) {
      let possibleAnswer = [...cleanedSteps]
        .reverse()
        .find((s) => !s.includes("<img") && s.trim());
      answer = possibleAnswer
        ? possibleAnswer.replace(/\*\*/g, "")
        : "See solution steps";
    }

    if (questionText || cleanedSteps.length > 0) {
      questions.push({
        id: "q" + (i + 1),
        number: String(i + 1),
        question: questionText,
        solution: cleanedSteps,
        answer: answer,
      });
    }
  });

  if (exId === "examples") {
    result.examples = questions;
  } else {
    result.exercises.push({
      id: exId,
      name: exName,
      questions: questions,
    });
  }
}

parseExercise("exercise1.html", "exercise1", "Exercise 2.1");
parseExercise("exercise2.html", "exercise2", "Exercise 2.2");
parseExercise("examples.html", "examples", "Examples");

const mcqPath = path.join(chapterDir, "mcqs.html");
if (fs.existsSync(mcqPath)) {
  const $ = cheerio.load(fs.readFileSync(mcqPath, "utf8"));
  const answerKeyText = $(".answer-key").text();

  $(".mcq-box").each((i, el) => {
    let question = cleanText(
      $(el)
        .find(".mcq-question")
        .text()
        .replace(/^\d+\.\s*/, ""),
    );
    question = `<span style="font-weight: normal;">${question}</span>`;
    const options = [];
    let correctAnswer = "";

    $(el)
      .find(".mcq-options div")
      .each((j, opt) => {
        const optText = cleanText($(opt).text());
        options.push(optText);
      });

    const match = answerKeyText.match(new RegExp(i + 1 + "\\.\\(([a-d])\\)"));
    if (match) {
      const letter = match[1];
      correctAnswer = options.find((o) => o.startsWith(`(${letter})`)) || "";
      for (let k = 0; k < options.length; k++) {
        options[k] = options[k].replace(/^\([a-d]\)\s*/, "");
      }
      correctAnswer = correctAnswer.replace(/^\([a-d]\)\s*/, "");
    } else {
      for (let k = 0; k < options.length; k++) {
        options[k] = options[k].replace(/^\([a-d]\)\s*/, "");
      }
    }

    result.mcqs.push({
      id: "mcq" + (i + 1),
      question,
      options,
      correctAnswer,
    });
  });
}

const fileContent = `import { ChapterContent } from "../chapterContent";\n\nexport const mathCh1: ChapterContent = ${JSON.stringify(result, null, 4)};\n`;

fs.writeFileSync(outFile, fileContent);
console.log("Saved to", outFile);
