
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
    let clean = String(text)
        .replace(/<[^>]+>/g, '') // Remove tags
        .replace(/&nbsp;/g, ' ')
        .replace(/&rArr;/g, '⇒')
        .replace(/&lArr;/g, '⇐')
        .replace(/&hArr;/g, '⇔')
        .replace(/&rarr;/g, '→')
        .replace(/&larr;/g, '←')
        .replace(/&times;/g, '×')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&deg;/g, '°')
        .replace(/&minus;/g, '−')
        .replace(/\s+/g, ' ')
        .trim();
    return clean;
}

function parseOverview(html) {
    const definitions = [];
    const keyPoints = [];
    const formulas = [];
    let crux = [];
    const summary = [];
    let introduction = "";

    try {
        const contentBoxes = html.split(/<div class="content-box(?: [^"]*)?">/);

        for (let i = 1; i < contentBoxes.length; i++) {
            const box = contentBoxes[i];
            const titleMatch = box.match(/<div class="section-title"(?: [^>]*)?>(.*?)<\/div>/);
            const title = titleMatch ? cleanText(titleMatch[1]).toLowerCase() : "";

            // Extract all key-points, steps, and list items
            // Matches <div class="key-point">...</div> OR <div class="step">...</div> OR <li>...</li>
            const pointsRaw = box.match(/(<div class="(key-point|step)">(.*?)<\/div>|<li>(.*?)<\/li>)/gs);
            const points = pointsRaw ? pointsRaw.map(p => {
                // strip outer div
                return p.replace(/^<div class="(key-point|step)">/, '').replace(/<\/div>$/, '').replace(/^<li>/, '').replace(/<\/li>$/, '');
            }) : [];

            // 1. Introduction
            if (title.includes('introduction')) {
                points.forEach(p => {
                    introduction += cleanText(p) + " ";
                });
                // Also check for lists in intro
                // basic cleanText handles lists poorly if not processed. 
                // For now, let's just append text.
            }

            // 2. Definitions / Key Definitions / Basic Number Systems
            else if (title.includes('definition') || title.includes('basic number')) {
                // If points array is empty, maybe try to extract LI elements?
                if (points.length === 0) {
                    const lis = box.match(/<li>(.*?)<\/li>/gs);
                    if (lis) {
                        lis.forEach(li => {
                            const cleanLi = cleanText(li);
                            // Check for bold term: <span class="bold">Term:</span> Desc
                            const defMatch = li.match(/<span class="bold">(.*?)(:?)<\/span>(.*)/s);
                            if (defMatch) {
                                definitions.push({
                                    term: cleanText(defMatch[1]),
                                    description: cleanText(defMatch[3])
                                });
                            } else {
                                keyPoints.push(cleanLi);
                            }
                        });
                    }
                }

                points.forEach(p => {
                    // Check for bold term: <span class="bold">Term:</span> Desc
                    const defMatch = p.match(/<span class="bold">(.*?)(:?)<\/span>(.*)/s);
                    if (defMatch) {
                        definitions.push({
                            term: cleanText(defMatch[1]),
                            description: cleanText(defMatch[3])
                        });
                    } else {
                        // If just a point (like in basic number systems), treat as key point or definition with term=Point
                        // Or if it looks like a definition without bold class but strong tag
                        const altMatch = p.match(/<(strong|b)>(.*?)(:?)<\/\1>(.*)/s);
                        if (altMatch) {
                            definitions.push({
                                term: cleanText(altMatch[2]),
                                description: cleanText(altMatch[4])
                            });
                        } else {
                            // Just a key point?
                            keyPoints.push(cleanText(p));
                        }
                    }
                });
            }

            // 3. Formulas / Theorems
            else if (title.includes('formula') || title.includes('theorem')) {
                // Extract formulas from spans or formula blocks
                // The HTML structure for Ch1 formulas is:
                // <div class="key-point"><span class="formula">Name:</span></div>
                // <div class="key-point">Description/Formula</div>

                // This is tricky because the name and content are in separate divs sometimes.
                // Let's iterate points.
                for (let j = 0; j < points.length; j++) {
                    const p = points[j];
                    const formulaMatch = p.match(/<span class="formula">(.*?)<\/span>/);

                    if (formulaMatch) {
                        const name = cleanText(formulaMatch[1]);
                        let content = "";
                        // Look ahead for content if the current point is JUST the name
                        // Heuristic: if the point text is short or ends with colon

                        // Actually, in Ch1 HTML:
                        // <div class="key-point"><span class="formula">The Fundamental Theorem of Arithmetic:</span></div>
                        // <div class="key-point">Every composite number...</div>

                        if (j + 1 < points.length) {
                            const nextP = points[j + 1];
                            if (!nextP.includes('span class="formula"')) {
                                content = cleanText(nextP);
                                // Skip next point in iteration? Maybe.
                                // But what if next point is part of description?
                            }
                        }

                        // Also check for formula-block
                        const blockMatch = box.match(/<div class="formula-block">(.*?)<\/div>/s);
                        if (blockMatch && content === "") {
                            // This might match the wrong block if multiple. 
                            // Let's try to match formula blocks inside the current flow if possible.
                        }

                        formulas.push({ name: name, formula: content || name });
                    }
                }

                // Also capture formula-blocks directly if missed
                const formulaBlocks = box.match(/<div class="formula-block">(.*?)<\/div>/gs);
                if (formulaBlocks) {
                    formulaBlocks.forEach(fb => {
                        // Check if this was already added? 
                        // For Ch1, "HCF(a, b) x LCM(a, b) = a x b" is a block.
                        const text = cleanText(fb);
                        const exists = formulas.find(f => f.formula.includes(text));
                        if (!exists) {
                            formulas.push({ name: "Formula", formula: text });
                        }
                    });
                }
            }

            // 4. Summary / Crux (if explicit)
            else if (title.includes('summary')) {
                points.forEach(p => summary.push(cleanText(p)));
            }
            else if (title.includes('crux')) {
                points.forEach(p => crux.push(cleanText(p)));
            }
            // Fallback: Add to Key Points
            else {
                if (points.length === 0) {
                    const lis = box.match(/<li>(.*?)<\/li>/gs);
                    if (lis) {
                        lis.forEach(li => keyPoints.push(cleanText(li)));
                    }
                }
                points.forEach(p => keyPoints.push(cleanText(p)));
            }
        }

        introduction = introduction.trim();

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
            // MCQ logic (already updated previous turn)
            // Re-including it here to ensure complete function replacement without losing MCQ logic
            const parts = html.split('<div class="mcq-box">');
            const answerKeyMatch = html.match(/<div class="answer-key">\s*(.*?)\s*<\/div>/s);
            const answerKey = answerKeyMatch ? cleanText(answerKeyMatch[1]) : "";

            for (let i = 1; i < parts.length; i++) {
                const part = parts[i];
                const qMatch = part.match(/<div class="mcq-question">\s*(.*?)\s*<\/div>/s);
                if (qMatch) {
                    let qText = cleanText(qMatch[1]);
                    const numMatch = qText.match(/^(\d+)\./);
                    const num = numMatch ? numMatch[1] : i.toString();
                    qText = qText.replace(/^\d+\.\s*/, '');

                    const optionsBlock = part.split('<div class="mcq-options">')[1];
                    const options = [];
                    if (optionsBlock) {
                        const optionDivs = optionsBlock.match(/<div>\s*\([a-d]\)\s*(.*?)\s*<\/div>/g);
                        if (optionDivs) optionDivs.forEach(opt => options.push(cleanText(opt).replace(/^\([a-d]\)\s*/, '')));
                    }

                    const ansRegex = new RegExp(`${num}\\.\\(([a-d])\\)`);
                    const ansMatch = answerKey.match(ansRegex);

                    questions.push({
                        number: num,
                        question: qText,
                        solution: [],
                        answer: ansMatch ? ansMatch[1] : "",
                        options: options.length === 4 ? options : ["Option A", "Option B", "Option C", "Option D"]
                    });
                }
            }
            return questions;
        }

        const isFormatB = !html.includes('<div class="content-box">');

        if (isFormatB) {
            // Ch 5 Format Parsing (keeping as is/simplified)
            const parts = html.split('<div class="question">');
            let currentMainQuestion = "";

            for (let i = 1; i < parts.length; i++) {
                const part = parts[i];
                const endDiv = part.indexOf('</div>');
                let qText = cleanText(part.substring(0, endDiv));
                const rest = part.substring(endDiv + 6);

                if (qText.match(/^Q\d+/)) {
                    currentMainQuestion = qText;
                }

                const steps = [];
                const stepMatches = rest.match(/<span class="step">(.*?)<\/span>/gs);
                if (stepMatches) stepMatches.forEach(s => steps.push(cleanText(s)));
                const ansMatch = rest.match(/<span class="answer">(.*?)<\/span>/);

                if (steps.length > 0 || ansMatch) {
                    questions.push({
                        id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                        number: qText.split(' ')[0],
                        question: currentMainQuestion && !qText.startsWith('Q') ? `${currentMainQuestion} ${qText}` : qText,
                        solution: steps,
                        answer: ansMatch ? cleanText(ansMatch[1]) : "Refer to steps"
                    });
                }
            }
        } else {
            // Format A (Content Box) - UPDATED LOGIC
            // Use regex split to handle extra classes like "summary-box"
            const contentBoxes = html.split(/<div class="content-box(?: [^"]*)?">/);

            for (let i = 1; i < contentBoxes.length; i++) {
                const box = contentBoxes[i];
                const questionMatch = box.match(/<div class="question">\s*(\d+[\.\)]?|Example \d+|Q\.\d+)\s*(.*?)<\/div>/s);

                if (questionMatch) {
                    const mainNum = cleanText(questionMatch[1]).replace(/\.$/, ''); // Remove trailing dot
                    const mainText = cleanText(questionMatch[2]);

                    const subQuestions = box.split('<div class="sub-question">');

                    if (subQuestions.length > 1) {
                        for (let j = 1; j < subQuestions.length; j++) {
                            const subPart = subQuestions[j];
                            const subNumMatch = subPart.match(/^\s*(.*?)\s*<\/div>/);
                            const fullSubContent = subNumMatch ? cleanText(subNumMatch[1]) : `(${j})`; // e.g. "(i) 140"

                            // Try to split index from content: "(i) 140" -> index="(i)", text="140"
                            // Regex: start with (something)
                            const indexMatch = fullSubContent.match(/^(\([a-z0-9]+\))(.*)/i);
                            let subIndex = "";
                            let subText = fullSubContent;

                            if (indexMatch) {
                                subIndex = indexMatch[1]; // "(i)"
                                subText = indexMatch[2].trim(); // "140"
                            } else {
                                // Fallback
                                subIndex = `(${j})`;
                            }

                            const steps = [];
                            const allSteps = subPart.match(/<div class="(step|formula-block)">(.*?)<\/div>/gs);
                            if (allSteps) allSteps.forEach(s => {
                                const cleanS = cleanText(s);
                                if (cleanS) steps.push(cleanS);
                            });

                            const ansMatch = subPart.match(/<div class="(final-answer|answer)">(.*?)<\/div>/s);
                            const answer = ansMatch ? cleanText(ansMatch[2]) : "Refer to Solution";

                            questions.push({
                                id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                                number: `${mainNum}${subIndex}`, // "1(i)"
                                question: `${mainText} ${subIndex} ${subText}`,
                                solution: steps,
                                answer: answer
                            });
                        }
                    } else {
                        // checks for root level steps
                        const steps = [];
                        const allSteps = box.match(/<div class="(step|formula-block)">(.*?)<\/div>/gs);
                        if (allSteps) allSteps.forEach(s => steps.push(cleanText(s)));

                        const ansMatch = box.match(/<div class="(final-answer|answer)">(.*?)<\/div>/s);
                        const answer = ansMatch ? cleanText(ansMatch[2]) : "Refer to Solution";

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
