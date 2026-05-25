import fs from "fs";
import path from "path";
import { chapterContents } from "../client/data/chapterContent";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  subject: string;
  chapterId: string;
  chapterTitle: string;
}

const sstMcqs: QuizQuestion[] = [];
let index = 1;

Object.keys(chapterContents).forEach((key) => {
  if (
    key.startsWith("sst-his-") ||
    key.startsWith("sst-geo-") ||
    key.startsWith("sst-civ-") ||
    key.startsWith("sst-eco-")
  ) {
    const chapter = chapterContents[key];
    if (chapter && chapter.mcqs) {
      // Determine the subject name
      let subject = "civics";
      if (key.startsWith("sst-his-")) subject = "history";
      else if (key.startsWith("sst-geo-")) subject = "geography";
      else if (key.startsWith("sst-eco-")) subject = "economics";

      chapter.mcqs.forEach((mcq) => {
        // Format the options with (A), (B), (C), (D) if they are not already prefixed
        const formattedOptions = mcq.options.map((opt, i) => {
          const letter = String.fromCharCode(65 + i);
          const prefix = `(${letter}) `;
          const trimmed = opt.trim();
          if (trimmed.startsWith(prefix) || trimmed.startsWith(`${letter}) `) || trimmed.startsWith(`${letter}. `)) {
            return opt;
          }
          return `${prefix}${opt}`;
        });

        // Capitalize correct answer (e.g. 'a' -> 'A')
        const correctAnswer = mcq.correctAnswer.trim().toUpperCase();

        sstMcqs.push({
          id: `c10-sst-${index++}`,
          question: mcq.question,
          options: formattedOptions,
          correctAnswer,
          subject,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
        });
      });
    }
  }
});

const outputPath = path.join(__dirname, "../client/data/easy_mcqs_sst.json");
fs.writeFileSync(outputPath, JSON.stringify(sstMcqs, null, 2), "utf8");
console.log(`Successfully generated ${sstMcqs.length} Class 10 SST MCQs at ${outputPath}`);
