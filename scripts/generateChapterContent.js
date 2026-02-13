
const fs = require('fs');
const path = require('path');

const CHAPTERS = [
    { id: "ch1-real-numbers", number: 1, title: "Real Numbers" },
    //     { id: "ch2-polynomials", number: 2, title: "Polynomials" },
    //     { id: "ch3-linear-equations", number: 3, title: "Pair of Linear Equations" },
    //     { id: "ch4-quadratic-equations", number: 4, title: "Quadratic Equations" },
    //     { id: "ch5-arithmetic-progressions", number: 5, title: "Arithmetic Progressions" },
    //     { id: "ch6-triangles", number: 6, title: "Triangles" },
    //     { id: "ch7-coordinate-geometry", number: 7, title: "Coordinate Geometry" },
    //     { id: "ch8-trigonometry", number: 8, title: "Introduction to Trigonometry" },
    //     { id: "ch9-applications-trigonometry", number: 9, title: "Some Applications of Trigonometry" },
    //     { id: "ch10-circles", number: 10, title: "Circles" }
];

const ASSETS_DIR = path.join(__dirname, '../client/assets');
const OUTPUT_FILE = path.join(__dirname, '../client/data/chapterContent.ts');

function cleanText(text) {
    if (text === null || text === undefined) return "";
    return String(text).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseOverview(html) {
    const definitions = [];
    const keyPoints = [];
    const formulas = [];
    let crux = [];
    const summary = [];
    let introduction = "";

    try {
        // --- 1. Detect Format ---
        // Format A: .section-title, .content-box
        // Format B: h2, ul, li (Ch 5)

        const isFormatB = html.includes('<h2>');

        if (isFormatB) {
            // --- Format B Parsing ---
            // Extract sections by splitting by <h2>
            for (let i = 1; i < sections.length; i++) {
                const sectionRaw = sections[i];
                const endOfOpeningTag = sectionRaw.indexOf('>');
                const endOfTitle = sectionRaw.indexOf('</h2>');

                if (endOfOpeningTag === -1 || endOfTitle === -1) continue;

                const title = cleanText(sectionRaw.substring(endOfOpeningTag + 1, endOfTitle)).toLowerCase();
                const content = sectionRaw.substring(endOfTitle + 5);

                if (title.includes('introduction')) {
                    // Extract spans with class point
                    const pts = content.match(/<span class="point">(.*?)<\/span>/gs);
                    if (pts) introduction = pts.map(p => cleanText(p)).join(' ');
                } else if (title.includes('definition')) {
                    // Extract li
                    const lis = content.match(/<li>(.*?)<\/li>/gs);
                    if (lis) {
                        lis.forEach(li => {
                            // <b>Term:</b> Desc
                            const parts = li.match(/<b>(.*?):<\/b>(.*)/s);
                            if (parts) {
                                definitions.push({ term: cleanText(parts[1]), description: cleanText(parts[2]) });
                            } else {
                                definitions.push({ term: "Term", description: cleanText(li) });
                            }
                        });
                    }
                } else if (title.includes('key point')) {
                    const lis = content.match(/<li>(.*?)<\/li>/gs);
                    if (lis) lis.forEach(li => keyPoints.push(cleanText(li)));
                    // Also Extract spans?
                    const formulasInKeyPoints = content.match(/<span class="formula">(.*?)<\/span>/gs);
                    if (formulasInKeyPoints) {
                        formulasInKeyPoints.forEach(f => formulas.push({ name: "Formula", formula: cleanText(f) }));
                    }
                } else if (title.includes('crux')) {
                    const pts = content.match(/<span class="point">(.*?)<\/span>/gs);
                    if (pts) pts.forEach(p => crux.push(cleanText(p)));
                } else if (title.includes('formula')) {
                    // logic for formulas
                }
            }
        } else {
            // --- Format A Parsing ---
            const contentBoxes = html.split('<div class="content-box">');

            for (let i = 1; i < contentBoxes.length; i++) {
                const box = contentBoxes[i];
                // Get Title
                const titleMatch = box.match(/<div class="section-title">(.*?)<\/div>/);
                const title = titleMatch ? cleanText(titleMatch[1]).toLowerCase() : "";

                // General Extraction of Steps/KeyPoints
                // Look for strong/bold terms for definitions
                // Look for formula boxes

                // Definitions (heuristic: bold followed by :)
                const defMatches = box.matchAll(/<(strong|b|span class="bold")>(.*?)(:?)<\/\1>(.*?)<(\/div|\/span|\/li)>/gs);
                // This regex is tricky. Let's iterate steps.

                const steps = box.match(/<div class="step">(.*?)<\/div>/gs);
                if (steps) {
                    steps.forEach(stepHtml => {
                        // Check for definition pattern
                        const defMatch = stepHtml.match(/<(strong|b)>(.*?):?<\/\1>(.*)/);
                        if (defMatch && (title.includes('introduction') || title.includes('definition'))) {
                            definitions.push({ term: cleanText(defMatch[2]), description: cleanText(defMatch[3]) });
                        } else if (title.includes('introduction')) {
                            introduction += cleanText(stepHtml) + " ";
                        } else if (title.includes('key')) {
                            keyPoints.push(cleanText(stepHtml));
                        }
                    });
                }

                // Formulas
                if (title.includes('formula') || title.includes('theorem')) {
                    const formulaBoxes = box.match(/<div class="formula-box">([\s\S]*?)<\/div>/gs);
                    if (formulaBoxes) {
                        formulaBoxes.forEach(fb => {
                            formulas.push({ name: "Formula", formula: cleanText(fb) });
                        });
                    }
                    // Also check spans with class formula
                    const spans = box.match(/<span class="formula">(.*?)<\/span>/gs);
                    if (spans) spans.forEach(s => formulas.push({ name: "Formula", formula: cleanText(s) }));
                }

                // Append any explicit introduction text
                if (title.includes('introduction') && !introduction) {
                    // logic already handled via steps
                }
            }

            // Clean introduction
            introduction = introduction.trim();
        }

    } catch (e) {
        console.error("Error parsing overview:", e);
    }

    return { introduction, definitions, keyPoints, formulas, crux, summary };
}

function parseQuestions(html, type) {
    const questions = [];
    if (!html) return questions;

    try {
        if (type === 'mcq' && html.includes('mcq-box')) {
            const parts = html.split('<div class="mcq-box">');

            // Extract Answer Key
            const answerKeyMatch = html.match(/<div class="answer-key">\s*(.*?)\s*<\/div>/s);
            const answerKey = answerKeyMatch ? cleanText(answerKeyMatch[1]) : "";

            for (let i = 1; i < parts.length; i++) {
                const part = parts[i];
                const qMatch = part.match(/<div class="mcq-question">\s*(.*?)\s*<\/div>/s);

                if (qMatch) {
                    let qText = cleanText(qMatch[1]);
                    // Extract number
                    const numMatch = qText.match(/^(\d+)\./);
                    const num = numMatch ? numMatch[1] : i.toString();
                    qText = qText.replace(/^\d+\.\s*/, '');

                    // Extract Options
                    const optionsRaw = part.match(/<div class="mcq-options">(.*?)<\/div>\s*<\/div>/s); // nested div?
                    // The options are div siblings inside mcq-options
                    const optionsBlock = part.split('<div class="mcq-options">')[1];
                    const options = [];
                    if (optionsBlock) {
                        const optionDivs = optionsBlock.match(/<div>\s*\([a-d]\)\s*(.*?)\s*<\/div>/g);
                        if (optionDivs) {
                            optionDivs.forEach(opt => {
                                const cleanOpt = cleanText(opt).replace(/^\([a-d]\)\s*/, '');
                                options.push(cleanOpt);
                            });
                        }
                    }

                    // Extract Answer
                    // Key format: 1.(a) 2.(b)
                    const ansRegex = new RegExp(`${num}\\.\\(([a-d])\\)`);
                    const ansMatch = answerKey.match(ansRegex);
                    const correctKey = ansMatch ? ansMatch[1] : "";

                    questions.push({
                        number: num,
                        question: qText,
                        solution: [],
                        answer: correctKey, // "a", "b", etc.
                        options: options.length === 4 ? options : ["Option A", "Option B", "Option C", "Option D"]
                    });
                }
            }
            return questions;
        }

        const isFormatB = !html.includes('<div class="content-box">'); // Ch 5 uses question class directly?

        if (isFormatB) {
            // Ch 5 Format Parsing
            // Split by <div class="question"> (Questions usually start with this)
            // But verify exercise1.html structure: <h2>Exercise...</h2> <div class="question">Q1...</div> <div class="question">(i)...</div>

            // This is unstructured. "Q1" is a header. "(i)" is a sub-question.
            // We need to iterate nodes? Too hard with regex.
            // Heuristic: split by <div class="question">

            const parts = html.split('<div class="question">');
            // parts[0] is header

            let currentMainQuestion = "";

            for (let i = 1; i < parts.length; i++) {
                const part = parts[i];
                // Extract question text (until </div>)
                const endDiv = part.indexOf('</div>');
                let qText = cleanText(part.substring(0, endDiv));
                const rest = part.substring(endDiv + 6);

                // Identify if this is a main question (Q1.) or sub ( (i) )
                if (qText.match(/^Q\d+/)) {
                    currentMainQuestion = qText;
                    // Does this part have solution steps? Usually yes or followed by sub questions.
                    // If proper question, parse steps.
                }

                // Parse solution steps
                const steps = [];
                const stepMatches = rest.match(/<span class="step">(.*?)<\/span>/gs);
                if (stepMatches) stepMatches.forEach(s => steps.push(cleanText(s)));

                // Parse Answer
                const ansMatch = rest.match(/<span class="answer">(.*?)<\/span>/);
                const answer = ansMatch ? cleanText(ansMatch[1]) : "";

                if (steps.length > 0 || answer) {
                    // It's a question block
                    questions.push({
                        id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                        number: qText.split(' ')[0], // First word usually
                        question: currentMainQuestion && !qText.startsWith('Q') ? `${currentMainQuestion} ${qText}` : qText,
                        solution: steps,
                        answer: answer || "Refer to steps"
                    });
                }
            }

        } else {
            // Format A (Content Box)
            const contentBoxes = html.split('<div class="content-box">');

            for (let i = 1; i < contentBoxes.length; i++) {
                const box = contentBoxes[i];
                const questionMatch = box.match(/<div class="question">\s*(\d+[\.\)]?|Example \d+|Q\.\d+)\s*(.*?)<\/div>/s);

                if (questionMatch) {
                    const mainNum = cleanText(questionMatch[1]);
                    const mainText = cleanText(questionMatch[2]);

                    const subQuestions = box.split('<div class="sub-question">');

                    if (subQuestions.length > 1) {
                        for (let j = 1; j < subQuestions.length; j++) {
                            const subPart = subQuestions[j];
                            const subNumMatch = subPart.match(/^\s*(.*?)\s*<\/div>/);
                            const subNum = subNumMatch ? cleanText(subNumMatch[1]) : `(${j})`;

                            const steps = [];
                            // Support div.step and span.step
                            const stepMatches = subPart.match(/<(div|span) class="step.*?">(.*?)<\/\1>/gs);
                            if (stepMatches) stepMatches.forEach(s => steps.push(cleanText(s)));

                            const ansMatch = subPart.match(/<(div|span) class="(final-answer|answer)">(.*?)<\/\1>/s);
                            const answer = ansMatch ? cleanText(ansMatch[3]) : "Refer to Solution";

                            questions.push({
                                id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                                number: `${mainNum}${subNum}`,
                                question: `${mainText} ${subNum}`,
                                solution: steps,
                                answer: answer
                            });
                        }
                    } else {
                        const steps = [];
                        const stepMatches = box.match(/<(div|span) class="step.*?">(.*?)<\/\1>/gs);
                        // Filter out question text step if any? No.
                        if (stepMatches) stepMatches.forEach(s => steps.push(cleanText(s)));

                        const ansMatch = box.match(/<(div|span) class="(final-answer|answer)">(.*?)<\/\1>/s);
                        const answer = ansMatch ? cleanText(ansMatch[3]) : "Refer to Solution";

                        questions.push({
                            id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                            number: mainNum,
                            question: mainText,
                            solution: steps,
                            answer: answer
                        });
                    }
                }
            }
        }
    } catch (e) {
        console.error("Error parsing questions:", e);
    }
    return questions;
}

function generateContent() {
    console.log("Starting generation (Dual-Format Support)...");
    let output = `import { ChapterHTMLs } from "./chapterHTMLs";\n\n`;

    // Interfaces
    output += `export interface Definition { term: string; description: string; }\n`;
    output += `export interface Formula { name: string; formula: string; }\n`;
    output += `export interface Question { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }\n`;
    output += `export interface Exercise { id: string; name: string; questions: Question[]; }\n`;
    output += `export interface MCQ { id: string; question: string; options: string[]; correctAnswer: string; }\n`;
    output += `export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; }\n`;
    output += `export interface Theorem { id: string; number: string; name: string; statement: string; proof?: string[]; example?: string; }\n`;
    output += `export interface ChapterContent { id: string; number: number; title: string; introduction: string; definitions: Definition[]; keyPoints: string[]; formulas: Formula[]; crux: string[]; exercises: Exercise[]; examples: Example[]; theorems?: Theorem[]; mcqs: MCQ[]; summary: string[]; }\n\n`;

    output += `export const chapterContents: Record<string, ChapterContent> = {\n`;

    for (const chapter of CHAPTERS) {
        console.log(`Processing ${chapter.title} (ID: ${chapter.id})...`);
        const chapterDir = path.join(ASSETS_DIR, `chapter${chapter.number}`);

        let overviewParsed = { definitions: [], keyPoints: [], formulas: [], introduction: "", crux: [], summary: [] };

        try {
            if (fs.existsSync(path.join(chapterDir, 'overview.html'))) {
                const html = fs.readFileSync(path.join(chapterDir, 'overview.html'), 'utf-8');
                overviewParsed = parseOverview(html);
            }
        } catch (e) { console.error(e); }

        const exercises = [];
        try {
            if (fs.existsSync(chapterDir)) {
                const files = fs.readdirSync(chapterDir).filter(f => f.match(/exercise\d*\.html/));
                files.sort();

                for (const file of files) {
                    const exName = file.replace('.html', '').replace('exercise', 'Exercise ');
                    const exHtml = fs.readFileSync(path.join(chapterDir, file), 'utf-8');
                    const qs = parseQuestions(exHtml, 'exercise');
                    // IDs
                    qs.forEach((q, i) => q.id = `${chapter.id}_ex${files.indexOf(file) + 1}_q${i + 1}`);

                    exercises.push({
                        id: `ex${chapter.number}.${files.indexOf(file) + 1}`,
                        name: exName,
                        questions: qs
                    });
                }
            }
        } catch (e) { console.error(e); }

        // Examples
        const examples = [];
        try {
            if (fs.existsSync(path.join(chapterDir, 'examples.html'))) {
                const html = fs.readFileSync(path.join(chapterDir, 'examples.html'), 'utf-8');
                const qs = parseQuestions(html, 'example');
                qs.forEach((q, i) => examples.push({
                    id: `${chapter.id}_eg${i + 1}`,
                    number: q.number || `Example ${i + 1}`,
                    question: q.question,
                    solution: q.solution,
                    answer: q.answer
                }));
            }
        } catch (e) { console.error(e); }

        // MCQs
        const mcqs = [];
        try {
            if (fs.existsSync(path.join(chapterDir, 'mcqs.html'))) {
                const html = fs.readFileSync(path.join(chapterDir, 'mcqs.html'), 'utf-8');
                const qs = parseQuestions(html, 'mcq');
                qs.forEach((q, i) => mcqs.push({
                    id: `${chapter.id}_mcq${i + 1}`,
                    question: q.question,
                    options: q.options || ["Option A", "Option B", "Option C", "Option D"],
                    correctAnswer: q.answer
                }));
            }
        } catch (e) { console.error(e); }

        output += `  "${chapter.id}": {\n`;
        output += `    id: "${chapter.id}",\n`;
        output += `    number: ${chapter.number},\n`;
        output += `    title: "${chapter.title}",\n`;
        output += `    introduction: ${JSON.stringify(overviewParsed.introduction || "")},\n`;
        output += `    definitions: ${JSON.stringify(overviewParsed.definitions || [])},\n`;
        output += `    keyPoints: ${JSON.stringify(overviewParsed.keyPoints || [])},\n`;
        output += `    formulas: ${JSON.stringify(overviewParsed.formulas || [])},\n`;
        output += `    crux: ${JSON.stringify(overviewParsed.crux || [])},\n`;
        output += `    summary: ${JSON.stringify(overviewParsed.summary || [])},\n`;
        output += `    exercises: ${JSON.stringify(exercises)},\n`;
        output += `    examples: ${JSON.stringify(examples)},\n`;
        output += `    mcqs: ${JSON.stringify(mcqs)},\n`;
        output += `    theorems: [],\n`;
        output += `  },\n`;
    }

    output += `};\n\n`;
    output += `export function getChapterContent(chapterId: string): ChapterContent | undefined {\n  return chapterContents[chapterId];\n}\n`;
    output += `export function isChapterAvailable(chapterId: string): boolean {\n  return (chapterId in chapterContents);\n}\n`;

    fs.writeFileSync(OUTPUT_FILE, output);
    console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generateContent();
