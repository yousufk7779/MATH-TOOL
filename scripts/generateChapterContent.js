
const fs = require('fs');
const path = require('path');

const CHAPTERS = [
    { id: "ch1-real-numbers", number: 1, title: "Real Numbers" },
    { id: "ch2-polynomials", number: 2, title: "Polynomials" },
    { id: "ch3-linear-equations", number: 3, title: "Pair of Linear Equations" },
    { id: "ch4-quadratic-equations", number: 4, title: "Quadratic Equations" },
    { id: "ch5-arithmetic-progressions", number: 5, title: "Arithmetic Progressions" },
    { id: "ch6-triangles", number: 6, title: "Triangles" },
    { id: "ch7-coordinate-geometry", number: 7, title: "Coordinate Geometry" },
    { id: "ch8-trigonometry", number: 8, title: "Introduction to Trigonometry" },
    { id: "ch9-applications-trigonometry", number: 9, title: "Some Applications of Trigonometry" },
    { id: "ch10-circles", number: 10, title: "Circles" },
];

const ASSETS_DIR = path.join(__dirname, '../client/assets');
const OUTPUT_FILE = path.join(__dirname, '../client/data/chapterContent.ts');

function cleanText(text) {
    if (text === null || text === undefined) return "";
    let clean = String(text)
        .replace(/\r?\n|\r/g, ' ') // Remove newlines
        .replace(/\s+/g, ' ')      // Collapse multiple spaces
        .trim();
    return clean;
}

function parseTableToText(html) {
    if (!html || !html.includes('<table')) return "";
    // Return the raw HTML table structure (or the container div's innerHTML)
    // The previous logic converted to markdown, which lost styling.
    // Now we keep HTML.
    return html;
}

function parseOverview(html, chapterId) {
    const definitions = [];
    const keyPoints = [];
    const formulas = [];
    let crux = [];
    const summary = [];
    let introduction = "";

    try {
        let contentBoxes = html.split(/<div class="content-box(?: [^"]*)?">/);

        // Fallback for Simple Structure (e.g. Chapter 5) if no content-boxes found
        if (contentBoxes.length <= 1) {
            const h2Split = html.split(/<h2>/i);
            if (h2Split.length > 1) {
                // Map the simple structure to the "contentBoxes" style logic or parse directly here.
                // We will parse directly here and return.

                // Chunk 0 is before first h2.
                for (let i = 1; i < h2Split.length; i++) {
                    const section = h2Split[i];
                    const endTitleIdx = section.indexOf('</h2>');
                    if (endTitleIdx === -1) continue;

                    const title = cleanText(section.substring(0, endTitleIdx)).toLowerCase();
                    const content = section.substring(endTitleIdx + 5);

                    if (title.includes('introduction')) {
                        const introMatches = content.match(/<span class="point">(.*?)<\/span>|<p>(.*?)<\/p>/gs);
                        if (introMatches) {
                            introduction = introMatches.map(m => cleanText(m)).join(" ");
                        } else {
                            introduction = cleanText(content); // Fallback
                        }
                    }

                    if (title.includes('definition')) {
                        const listItems = content.match(/<li>(.*?)<\/li>/gs);
                        if (listItems) {
                            listItems.forEach(item => {
                                const cleanItem = cleanText(item);
                                // Try to split by colon or bold tag
                                // Pattern: <b>Term:</b> Description
                                const parts = cleanItem.split(/:|–|-/);
                                if (parts.length >= 2) {
                                    definitions.push({
                                        term: cleanText(parts[0]),
                                        description: cleanText(parts.slice(1).join(":"))
                                    });
                                } else {
                                    definitions.push({ term: "Term", description: cleanItem });
                                }
                            });
                        }
                    }

                    if (title.includes('key point')) {
                        const listItems = content.match(/<li>(.*?)<\/li>/gs);
                        if (listItems) {
                            listItems.forEach(item => keyPoints.push(cleanText(item)));
                        }
                        // Also check for formulas in key points
                        const formulaMatches = content.match(/<span class="formula">(.*?)<\/span>/gs);
                        if (formulaMatches) {
                            formulaMatches.forEach(f => {
                                formulas.push({ name: "Formula", formula: cleanText(f) });
                            });
                        }

                    } else if (title.includes('formula')) {
                        const formulaMatches = content.match(/<span class="formula">(.*?)<\/span>|<div class="formula-block">(.*?)<\/div>/gs);
                        if (formulaMatches) {
                            formulaMatches.forEach(f => {
                                formulas.push({ name: "Formula", formula: cleanText(f) });
                            });
                        }
                    } else if (title.includes('crux')) {
                        const points = content.match(/<span class="point">(.*?)<\/span>|<li>(.*?)<\/li>/gs);
                        if (points) {
                            points.forEach(p => crux.push(cleanText(p)));
                        }
                    } else if (title.includes('summary')) {
                        const points = content.match(/<span class="point">(.*?)<\/span>|<p>(.*?)<\/p>/gs);
                        if (points) {
                            points.forEach(p => summary.push(cleanText(p)));
                        }
                    }
                }

                return {
                    introduction: cleanText(introduction),
                    definitions,
                    keyPoints,
                    formulas,
                    crux,
                    summary
                };
            }
        }

        for (let i = 1; i < contentBoxes.length; i++) {
            const box = contentBoxes[i];
            let title = "";
            let prevTitleMatch = null;

            // 1. Check previous box context for a trailing title (Title for THIS box)
            const prev = contentBoxes[i - 1];

            const titleRegex = /<div class="section-title"(?: [^>]*)?>(.*?)<\/div>/g;
            let match;
            while ((match = titleRegex.exec(prev)) !== null) {
                prevTitleMatch = match;
            }

            if (prevTitleMatch) {
                // If the title is NOT followed by a closing div, it is likely a top-level trailing title
                const after = prev.substring(prevTitleMatch.index + prevTitleMatch[0].length);
                if (!after.includes('</div>')) {
                    title = cleanText(prevTitleMatch[1]).toLowerCase();
                }
            }

            // 2. If no external title found, check inside the current box (Title inside THIS box)
            if (!title) {
                const boxFirstDivIdx = box.indexOf('</div>');
                const internalMatch = box.match(/<div class="section-title"(?: [^>]*)?>(.*?)<\/div>/);

                // Only accept internal title if it appears BEFORE the closing div of this box
                // (Otherwise it's a trailing title for the NEXT box)
                if (internalMatch) {
                    if (boxFirstDivIdx === -1 || internalMatch.index < boxFirstDivIdx) {
                        title = cleanText(internalMatch[1]).toLowerCase();
                    }
                }
            }

            // Extract all key-points, steps, and list items
            // Matches <div class="key-point">...</div> OR <div class="step">...</div> OR <li>...</li> OR <div class="formula-box">...</div>
            const pointsRaw = box.match(/(<div class="(key-point|step|formula-box)">([\s\S]*?)<\/div>|<li>(.*?)<\/li>|<p>(.*?)<\/p>)/gs);
            const points = pointsRaw ? pointsRaw.map(p => {
                // strip outer div
                return p.replace(/^<div class="(key-point|step)">/, '').replace(/<\/div>$/, '').replace(/^<li>/, '').replace(/<\/li>$/, '').replace(/^<p>/, '').replace(/<\/p>$/, '').replace(/^<div class="formula-box">/, '').replace(/<\/div>$/, '');
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
            if (title.includes('definition') || title.includes('basic number')) {
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
            else if (title.includes('formula') || title.includes('theorem') || title.includes('identit')) {
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

                // Fallback: If no explicit formulas found, treat the points content as formulas (e.g. for Chapter 8 Identities)
                if (formulas.length === 0 && points.length > 0) {
                    points.forEach(p => {
                        // Custom clean to preserve newlines from <br>
                        const rawText = p.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
                        const lines = rawText.split('\n').map(l => l.trim().replace(/\s+/g, ' ')).filter(l => l.length > 0);

                        lines.forEach(line => {
                            // Heuristic: skip headers like "Pythagorean Identities:" or short texts
                            if (line.endsWith(':') || line.length < 3) return;
                            formulas.push({ name: "Identity", formula: line });
                        });
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

function parseQuestions(html, type, chapterNum, exName) {
    const questions = [];
    if (!html) return questions;

    // Auto-discover images logic
    let availableImages = [];
    try {
        const imgDir = path.join(ASSETS_DIR, `chapter${chapterNum}`, 'images');
        if (fs.existsSync(imgDir)) {
            availableImages = fs.readdirSync(imgDir);
        }
    } catch (e) { }

    try {
        if (type === 'mcq' && html.includes('mcq-box')) {
            // MCQ logic (Format with mcq-box)
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

        const isFormatB = !html.match(/<div class="content-box/);

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
            // Format A (Content Box) - UPDATED LOGIC (Handles Exercise, Example, and Content-Box style MCQs)
            const contentBoxes = html.split(/<div class="content-box(?: [^"]*)?">/);

            for (let i = 1; i < contentBoxes.length; i++) {
                const box = contentBoxes[i];
                const questionMatch = box.match(/<div class="(?:question|theorem-title)">\s*(\d+[\.\)]?|Example \d+|Q\.\d+|Theorem\s+\d+(?:\.\d+)?)\s*([\s\S]*?)<\/div>/i);

                if (questionMatch) {
                    const mainNum = cleanText(questionMatch[1]).replace(/\.$/, '');
                    const mainText = cleanText(questionMatch[2]).replace(/^[:\s]+/, '');

                    // Extract Options (for MCQs)
                    // Extract Options (for MCQs)
                    const options = [];
                    // Try to find options container first for better handling of nested tags
                    const optionsContainerMatch = box.match(/<div class="options">([\s\S]*?)<\/div>\s*<div class="correct-answer">/i);

                    if (optionsContainerMatch) {
                        const optionsHtml = optionsContainerMatch[1];
                        // Split by option start tag, handling both div and span
                        const rawOptions = optionsHtml.split(/<(?:div|span) class="option">/i);

                        // First item is usually empty string before first option tag
                        for (let k = 1; k < rawOptions.length; k++) {
                            let optText = rawOptions[k];
                            // Remove the last closing tag (div/span) + whitespace
                            const lastCloseIdx = optText.lastIndexOf('</');
                            if (lastCloseIdx !== -1) {
                                optText = optText.substring(0, lastCloseIdx);
                            }
                            options.push(cleanText(optText).replace(/^\([a-d]\)\s*/i, ''));
                        }
                    } else {
                        // Fallback logic
                        const optionsMatch = box.match(/<(?:div|span) class="option">(.*?)<\/(?:div|span)>/gs);
                        if (optionsMatch) {
                            optionsMatch.forEach(opt => options.push(cleanText(opt).replace(/^\([a-d]\)\s*/i, '')));
                        }
                    }

                    // Extract Correct Answer (for MCQs)
                    const correctAnsMatch = box.match(/<div class="correct-answer">(.*?)<\/div>/s);
                    let correctAnswer = "";
                    if (correctAnsMatch) {
                        const cleanAns = cleanText(correctAnsMatch[1]);
                        const match = cleanAns.match(/\(([a-d])\)/i);
                        if (match) {
                            correctAnswer = match[1].toLowerCase();
                        } else {
                            correctAnswer = cleanAns.trim().toLowerCase();
                        }
                    }

                    const subQuestions = box.split('<div class="sub-question">');

                    if (subQuestions.length > 1) {
                        for (let j = 1; j < subQuestions.length; j++) {
                            const subPart = subQuestions[j];
                            const subNumMatch = subPart.match(/^\s*([\s\S]*?)\s*<\/div>/i);
                            const fullSubContent = subNumMatch ? cleanText(subNumMatch[1]) : `(${j})`;

                            const indexMatch = fullSubContent.match(/^(\([a-z0-9]+\))(.*)/i);
                            let subIndex = "";
                            let subText = fullSubContent;

                            if (indexMatch) {
                                subIndex = indexMatch[1];
                                subText = indexMatch[2].trim();
                            } else {
                                subIndex = `(${j})`;
                            }

                            let steps = [];
                            const allSteps = subPart.match(/<div[^>]*class=["'](step|formula-block|table-container|solution-header|diagram-placeholder|final-answer)["'][^>]*>([\s\S]*?)<\/div>/gi);
                            if (allSteps) allSteps.forEach(s => {
                                let content = "";
                                if (s.includes('class="table-container"') || s.includes("class='table-container'")) {
                                    content = parseTableToText(s);
                                } else if (s.includes('class="solution-header"') || s.includes("class='solution-header'")) {
                                    content = ""; // Skip solution header to avoid duplication
                                } else if (s.includes('class="final-answer"') || s.includes("class='final-answer'")) {
                                    // exclude final answer from steps to avoid duplication
                                } else {
                                    content = cleanText(s);
                                }
                                if (content && content.trim()) steps.push(content);
                            });

                            const ansMatch = subPart.match(/<div class="(final-answer|answer)">([\s\S]*?)<\/div>/i);
                            const answer = ansMatch ? cleanText(ansMatch[2]) : (correctAnswer || "Refer to Solution");

                            let image = undefined;
                            const divImgMatch = subPart.match(/<div class="question-image">([\s\S]*?)<\/div>/i);
                            if (divImgMatch) {
                                image = cleanText(divImgMatch[1]);
                            } else {
                                const imgTagMatch = subPart.match(/<img[^>]+src=["']([^"']+)["']/i);
                                if (imgTagMatch) {
                                    image = imgTagMatch[1];
                                }
                            }

                            if (!image) {
                                if (type === 'exercise' && exName) {
                                    const exIdMatch = exName.match(/Exercise\s+(\d+\.\d+)/);
                                    if (exIdMatch) {
                                        const exId = exIdMatch[1];
                                        const qNumClean = mainNum;
                                        const subClean = subIndex.replace(/[()]/g, (m) => m === '(' ? '(' : ')');
                                        const pattern1 = `Ex_${exId}_Q${qNumClean}${subClean}.jpg`;
                                        if (availableImages.includes(pattern1)) {
                                            image = pattern1;
                                        }
                                    }
                                } else if (type === 'example') {
                                    const exNumMatch = mainNum.match(/\d+/);
                                    if (exNumMatch) {
                                        const exNum = exNumMatch[0];
                                        const pattern = `fig_example_${exNum}.svg`;
                                        if (availableImages.includes(pattern)) {
                                            image = pattern;
                                        }
                                    }
                                }
                            }

                            questions.push({
                                id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                                number: `${mainNum}${subIndex}`,
                                question: `${mainText}\n${subIndex} ${subText}`,
                                solution: steps,
                                answer: answer,
                                image: image,
                                options: options.length === 4 ? options : undefined
                            });
                        }
                    } else {
                        // checks for root level steps
                        let steps = [];
                        const allSteps = box.match(/<div[^>]*class=["'](step|formula-block|table-container|solution-header|diagram-placeholder)["'][^>]*>([\s\S]*?)<\/div>/gi);
                        if (allSteps) allSteps.forEach(s => {
                            let content = "";
                            if (s.includes('class="table-container"') || s.includes("class='table-container'")) {
                                content = parseTableToText(s);
                            } else if (s.includes('class="solution-header"') || s.includes("class='solution-header'")) {
                                content = ""; // Skip solution header to avoid duplication
                            } else {
                                content = cleanText(s);
                            }
                            if (content && content.trim()) steps.push(content);
                        });

                        const ansMatch = box.match(/<div class="(final-answer|answer)">([\s\S]*?)<\/div>/i);
                        const answer = ansMatch ? cleanText(ansMatch[2]) : (correctAnswer || "Refer to Solution");

                        let image = undefined;
                        const divImgMatch = box.match(/<div class="question-image">([\s\S]*?)<\/div>/i);
                        if (divImgMatch) {
                            image = cleanText(divImgMatch[1]);
                        } else {
                            const imgTagMatch = box.match(/<img[^>]+src=["']([^"']+)["']/i);
                            if (imgTagMatch) {
                                image = imgTagMatch[1];
                            }
                        }

                        if (!image) {
                            if (type === 'exercise' && exName) {
                                const exIdMatch = exName.match(/Exercise\s+(\d+\.\d+)/);
                                if (exIdMatch) {
                                    const exId = exIdMatch[1];
                                    const pattern = `Ex_${exId}_Q${mainNum}.jpg`;
                                    if (availableImages.includes(pattern)) {
                                        image = pattern;
                                    }
                                }
                            } else if (type === 'example') {
                                const exNumMatch = mainNum.match(/\d+/);
                                if (exNumMatch) {
                                    const exNum = exNumMatch[0];
                                    const pattern = `fig_example_${exNum}.svg`;
                                    if (availableImages.includes(pattern)) {
                                        image = pattern;
                                    }
                                }
                            }
                        }

                        questions.push({
                            id: `auto_${Math.random().toString(36).substr(2, 9)}`,
                            number: mainNum,
                            question: mainText,
                            solution: steps,
                            answer: answer,
                            image: image,
                            options: options.length === 4 ? options : undefined
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
    output += `export interface Example { id: string; number: string; question: string; solution: string[]; answer: string; image?: string; }\n`;
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
                overviewParsed = parseOverview(html, chapter.id);
            }
        } catch (e) { console.error(e); }

        const exercises = [];
        try {
            if (fs.existsSync(chapterDir)) {
                const files = fs.readdirSync(chapterDir).filter(f => f.match(/exercise\d*\.html/));
                files.sort();

                for (const file of files) {
                    const exMatch = file.match(/exercise(\d+)/);
                    const exNum = exMatch ? exMatch[1] : 1;
                    const exName = `Exercise ${chapter.number}.${exNum}`;

                    const exHtml = fs.readFileSync(path.join(chapterDir, file), 'utf-8');
                    const qs = parseQuestions(exHtml, 'exercise', chapter.number, exName);
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
                const qs = parseQuestions(html, 'example', chapter.number, "");
                qs.forEach((q, i) => examples.push({
                    id: `${chapter.id}_eg${i + 1}`,
                    number: q.number || `Example ${i + 1}`,
                    question: q.question,
                    solution: q.solution,
                    answer: q.answer,
                    image: q.image
                }));
            }
        } catch (e) { console.error(e); }

        // MCQs
        const mcqs = [];
        try {
            if (fs.existsSync(path.join(chapterDir, 'mcqs.html'))) {
                const html = fs.readFileSync(path.join(chapterDir, 'mcqs.html'), 'utf-8');
                const qs = parseQuestions(html, 'mcq', chapter.number, "");
                qs.forEach((q, i) => mcqs.push({
                    id: `${chapter.id}_mcq${i + 1}`,
                    question: q.question,
                    options: q.options || ["Option A", "Option B", "Option C", "Option D"],
                    correctAnswer: q.answer
                }));
            }
        } catch (e) { console.error(e); }

        // Theorems
        const theorems = [];
        try {
            if (fs.existsSync(path.join(chapterDir, 'theorems.html'))) {
                const html = fs.readFileSync(path.join(chapterDir, 'theorems.html'), 'utf-8');
                const qs = parseQuestions(html, 'exercise', chapter.number, "Theorems");
                qs.forEach((q, i) => theorems.push({
                    id: `${chapter.id}_theorem${i + 1}`,
                    number: q.number || `Theorem ${chapter.number}.${i + 1}`,
                    name: q.question.split(':')[0] || `Theorem ${chapter.number}.${i + 1}`,
                    statement: q.question,
                    proof: q.solution,
                    example: undefined
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
        output += `    theorems: ${JSON.stringify(theorems)},\n`;
        output += `  },\n`;
    }

    output += `};\n\n`;
    output += `export function getChapterContent(chapterId: string): ChapterContent | undefined {\n  return chapterContents[chapterId];\n}\n`;
    output += `export function isChapterAvailable(chapterId: string): boolean {\n  return (chapterId in chapterContents);\n}\n`;

    fs.writeFileSync(OUTPUT_FILE, output);
    console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generateContent();
