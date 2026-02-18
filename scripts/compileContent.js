
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_DIR = path.join(__dirname, '../client/assets');
const OUTPUT_FILE = path.join(__dirname, '../client/data/chapterContent.ts');

const chapters = {};

function compile() {
    console.log("Starting compilation...");

    if (!fs.existsSync(BASE_DIR)) {
        console.error("Base directory not found:", BASE_DIR);
        return;
    }

    const chapterDirs = fs.readdirSync(BASE_DIR).filter(file => {
        return fs.statSync(path.join(BASE_DIR, file)).isDirectory();
    });

    chapterDirs.forEach(dirName => {
        const chapterNumber = dirName.replace(/\D/g, ''); // Extract '1' from 'chapter1'
        const chapterId = `ch${chapterNumber}`;
        const chapterPath = path.join(BASE_DIR, dirName);

        console.log(`Processing ${dirName} -> ${chapterId}`);

        if (!chapters[chapterId]) {
            chapters[chapterId] = {
                id: chapterId,
                number: parseInt(chapterNumber),
                title: `Chapter ${chapterNumber}`, // Placeholder title, will be updated if overview.html exists
                introduction: "",
                definitions: [],
                keyPoints: [],
                formulas: [],
                crux: [],
                exercises: [],
                examples: [],
                mcqs: [],
                summary: [],
                theorems: []
            };
        }

        const files = fs.readdirSync(chapterPath).filter(file => file.endsWith('.html'));

        files.forEach(file => {
            const filePath = path.join(chapterPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const $ = cheerio.load(content, { decodeEntities: false });

            // Process Overview
            if (file.includes('overview') || file.includes('introduction')) {
                // Intro
                const intro = $('#introduction').text().trim() || $('.introduction').text().trim();
                if (intro) chapters[chapterId].introduction = cleanText(intro);

                // Title override
                const title = $('title').text().trim();
                if (title) chapters[chapterId].title = title.replace(`Chapter ${chapterNumber} - `, '').replace(`Chapter ${chapterNumber}`, '').trim() || `Chapter ${chapterNumber}`;

                // Definitions
                $('.definition').each((i, el) => {
                    const term = $(el).find('.term').text().trim();
                    const desc = $(el).find('.description').text().trim();
                    if (term && desc) {
                        chapters[chapterId].definitions.push({ term: cleanText(term), description: cleanText(desc) });
                    }
                });

                // Key Points
                $('.key-point').each((i, el) => {
                    chapters[chapterId].keyPoints.push(cleanText($(el).text()));
                });

                // Formulas
                $('.formula').each((i, el) => {
                    const name = $(el).find('.formula-name').text().trim();
                    const math = $(el).find('.formula-math').text().trim(); // Expecting raw LaTeX or text
                    if (name && math) {
                        chapters[chapterId].formulas.push({ name: cleanText(name), formula: cleanText(math) });
                    }
                });

                // Crux / Summary
                $('#summary').each((i, el) => {
                    chapters[chapterId].summary.push(cleanText($(el).text()));
                });
            }

            // Process Exercises (Questions)
            if (file.includes('exercise')) {
                let exerciseId = file.replace('.html', '').replace('exercise', 'ex' + chapterNumber + '.');
                // e.g. exercise1.html -> ex1.1 if we follow pattern logic, but logic might be complex.
                // Simple mapping: exercise1 -> ex<ch>.1, exercise2 -> ex<ch>.2
                const exMatch = file.match(/exercise(\d+)/);
                if (exMatch) {
                    exerciseId = `ex${chapterNumber}.${exMatch[1]}`;
                }

                const exercise = {
                    id: exerciseId,
                    name: `Exercise ${chapterNumber}.${exMatch ? exMatch[1] : '1'}`,
                    questions: []
                };

                $('.question-block').each((i, el) => {
                    const qId = $(el).attr('id');
                    const qNum = $(el).find('.question-number').text().trim();
                    const qText = $(el).find('.question-text').text().trim();
                    const qAnswer = $(el).find('.answer').text().trim();

                    const steps = [];
                    $(el).find('.solution-step').each((j, stepEl) => {
                        steps.push(cleanText($(stepEl).text()));
                    });

                    if (qId && qText) {
                        exercise.questions.push({
                            id: qId,
                            number: cleanText(qNum),
                            question: cleanText(qText),
                            solution: steps,
                            answer: cleanText(qAnswer)
                        });
                    }
                });

                if (exercise.questions.length > 0) {
                    chapters[chapterId].exercises.push(exercise);
                }
            }

            // Process Examples
            if (file.includes('example')) {
                $('.question-block, .example-block').each((i, el) => {
                    const qId = $(el).attr('id');
                    const qNum = $(el).find('.question-number').text().trim();
                    const qText = $(el).find('.question-text').text().trim();
                    const qAnswer = $(el).find('.answer').text().trim();

                    const steps = [];
                    $(el).find('.solution-step').each((j, stepEl) => {
                        steps.push(cleanText($(stepEl).text()));
                    });

                    if (qId && qText) {
                        chapters[chapterId].examples.push({
                            id: qId,
                            number: cleanText(qNum),
                            question: cleanText(qText),
                            solution: steps,
                            answer: cleanText(qAnswer)
                        });
                    }
                });
            }

            // Process MCQs
            if (file.includes('mcq')) {
                $('.mcq-block').each((i, el) => {
                    const qId = $(el).attr('id') || `mcq_${chapterId}_${i}`;
                    const qText = $(el).find('.question-text').text().trim();
                    const correct = $(el).find('.correct-option').text().trim(); // Expecting 'a', 'b', 'c', 'd'

                    const options = [];
                    $(el).find('.option').each((j, optEl) => {
                        options.push(cleanText($(optEl).text()));
                    });

                    if (qText && options.length > 0) {
                        chapters[chapterId].mcqs.push({
                            id: qId,
                            question: cleanText(qText),
                            options: options,
                            correctAnswer: correct ? correct.toLowerCase() : ''
                        });
                    }
                });
            }

            // Process Theorems
            if (file.includes('theorem')) {
                $('.theorem-block').each((i, el) => {
                    const tId = $(el).attr('id');
                    const tNum = $(el).find('.theorem-number').text().trim();
                    const tName = $(el).find('.theorem-name').text().trim();
                    const tStatement = $(el).find('.theorem-statement').text().trim();

                    const proofSteps = [];
                    $(el).find('.proof-step').each((j, stepEl) => {
                        proofSteps.push(cleanText($(stepEl).text()));
                    });

                    // Optional example
                    const tExample = $(el).find('.theorem-example').text().trim();

                    if (tId && tStatement) {
                        chapters[chapterId].theorems.push({
                            id: tId,
                            number: cleanText(tNum),
                            name: cleanText(tName),
                            statement: cleanText(tStatement),
                            proof: proofSteps,
                            example: cleanText(tExample)
                        });
                    }
                });
            }

        });
    });

    writeOutput();
}

function cleanText(text) {
    if (!text) return "";
    // Remove extra whitespace, newlines to single space, but handle math delimiters carefully
    return text.replace(/\s+/g, ' ').trim();
}

function writeOutput() {
    let tsContent = '';

    // Add interfaces from checking the target file directly or just inline them
    // For simplicity, I'll rely on the existing file's interfaces. 
    // Wait, I am overwriting the file. I MUST include the interfaces.
    // I already read them from the file view earlier.

    tsContent += `
export interface Definition { term: string; description: string; }
export interface Formula { name: string; formula: string; }
export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Exercise { id: string; name: string; questions: Question[]; }
export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }
export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }
export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }
export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }

export const chapterContents: Record<string, ChapterContent> = ${JSON.stringify(chapters, null, 2)};

export function getChapterContent(id: string): ChapterContent | undefined {
  return chapterContents[id];
}
`;

    fs.writeFileSync(OUTPUT_FILE, tsContent);
    console.log(`Successfully compiled content to ${OUTPUT_FILE}`);
}

compile();
