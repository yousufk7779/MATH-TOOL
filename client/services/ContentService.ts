
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { chapterList } from '../data/chapterRegistry';

// Types for our content model
export interface QuestionBlock {
    id: string; // The HTML ID we generated (chX_exY_qZ)
    label: string; // The display label (e.g. "1", "1(i)", "Q1")
    type: string;
    htmlUri: string; // Local URI to the full HTML file
}

// Validates and resolves the local URI for an asset
async function resolveUri(htmlSource: any): Promise<string> {
    const asset = Asset.fromModule(htmlSource);
    await asset.downloadAsync(); // Ensure it's available locally
    return asset.localUri || asset.uri;
}

// Scans the HTML content string to find question blocks
function scanQuestions(htmlContent: string, htmlUri: string): QuestionBlock[] {
    const questions: QuestionBlock[] = [];

    // Regex to find IDs and Labels we injected
    // <div class="content-box" id="ch3_ex3.1_q1" data-type="main">
    // <div class="question-block" id="ch3_ex3.1_q1_1" data-label="1(i)">

    // We want to capture ID, data-label (optional), data-type (optional)
    const regex = /<div[^>]+id="([^"]+)"(?:[^>]*data-label="([^"]*)")?(?:[^>]*data-type="([^"]*)")?.*?>/g;

    let match;
    while ((match = regex.exec(htmlContent)) !== null) {
        const id = match[1];
        const label = match[2]; // Captures group 2 if present
        const type = match[3] || 'sub';

        // Skip if ID doesn't look like ours (contains generic names?)
        if (!id.includes('ch')) continue;

        let displayLabel = label || "";

        // Infer label if missing
        if (!displayLabel) {
            const parts = id.split('_');
            const last = parts[parts.length - 1];
            if (last.startsWith('q')) {
                displayLabel = last.replace('q', '');
            } else {
                // Try to guess... q1_1 -> 1
                // No, generateScript generates generic IDs.
                // We rely on data-label ideally.
                displayLabel = last;
            }
        }

        questions.push({
            id,
            label: displayLabel,
            type: type, // 'main' or 'sub' (implied)
            htmlUri
        });
    }

    // Filter out parent blocks if children exist
    // Logic: Identify parents by ID prefix matching children?
    // Parent: ch3_ex3.1_q1
    // Child: ch3_ex3.1_q1_1

    const parentIds = new Set<string>();
    questions.forEach(q => {
        const parts = q.id.split('_');
        // Parent: chX_exY_qZ (3 parts). Child: chX_exY_qZ_W (4 parts)
        if (parts.length > 3) {
            const parentId_ = parts.slice(0, 3).join('_');
            parentIds.add(parentId_);
        }
    });

    // Filter parents if they have children
    return questions.filter(q => !parentIds.has(q.id));
}

// Types for MCQ
export interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

function parseMCQs(htmlContent: string): MCQ[] {
    const mcqs: MCQ[] = [];
    // Regex that finds the content-box and captures internal content
    // We assume the structure: <div class="content-box" ...> ... </div>
    // inside: <div class="question"> ... </div>
    // inside: <div class="options"> ... </div>
    // inside: <div class="correct-answer"> ... </div>

    // We can iterate matches of <div ... class="content-box" ...>
    // But matching the closing div is hard with regex due to nesting.

    // Alternative: Use the fact that we normalized the file.
    // We can assume each question block starts with <div class="content-box" ...>
    // We can split by that tag.

    const parts = htmlContent.split(/<div[^>]*class="content-box"[^>]*>/);

    parts.forEach((block, index) => {
        if (index === 0) return; // Skip content before first box

        // The 'block' contains the content of this box AND everything after it until the next box (or end of file).
        // Since we split by opening tag, we just need to stop at the next opening tag? 
        // No, split removes the delimiter.
        // So Part 1 is content of Box 1 + text between Box 1 and Box 2.

        // Extract Question
        const qContentMatch = block.match(/class="question">\s*([\s\S]*?)\s*<\/div>/);

        if (qContentMatch) {
            const questionHtml = qContentMatch[1].trim();

            // Extract Options
            const options: string[] = [];
            // Options are inside <div class="options"> ... </div>
            // Individual options: <div class="option"> ... </div>

            // First find the options block to avoid false matches elsewhere?
            // Actually, the structure is flat enough.

            const optRegex = /class="option">\s*([\s\S]*?)\s*<\/div>/g;
            let optMatch;
            // We only want options belong to THIS question. 
            // Since 'block' goes until end of file (conceptually in split), 
            // we need to be careful not to match options of next question.
            // But 'parts' are separated by content-box. 
            // So Part 1 ends where Part 2 begins.
            // So 'block' does NOT contain subsequent questions. 
            // Wait, split works like: "A,B,C" split "," -> "A", "B", "C".
            // So Block 1 contains text between Box 1 Start and Box 2 Start.
            // This INCLUDES Box 1 Content + formatting/newlines + Box 1 closing div + formatting.
            // It does NOT include Box 2 content.
            // So we are safe!

            while ((optMatch = optRegex.exec(block)) !== null) {
                options.push(optMatch[1].trim());
            }

            // Extract Answer
            const ansMatch = block.match(/class="correct-answer">\s*Answer:\s*\((\w)\)/);
            const validAns = ansMatch ? ansMatch[1] : '';

            // We use a simpler ID here, or we could parse the ID from the split delimiter if we captured it.
            // Since we didn't capture delimiter, we generate one.
            if (options.length > 0) {
                mcqs.push({
                    id: `mcq_${index}`,
                    question: questionHtml,
                    options,
                    correctAnswer: validAns
                });
            }
        }
    });

    return mcqs;
}

export const ContentService = {
    async getQuestions(chapterId: string, exerciseId: string): Promise<QuestionBlock[]> {
        const chapter = chapterList.find(c => c.id === chapterId);
        if (!chapter) return [];
        // Find exercise by ID (exerciseId)
        // chapterRegistry uses unique IDs like 'ex1.1', 'ex1.2'
        const exercise = chapter.exercises.find(e => e.id === exerciseId);

        if (!exercise) {
            console.warn(`Exercise not found: ${exerciseId} in ${chapterId}`);
            return [];
        }

        try {
            const uri = await resolveUri(exercise.htmlSource);
            const content = await FileSystem.readAsStringAsync(uri);
            return scanQuestions(content, uri);
        } catch (e) {
            console.error("Error loading questions:", e);
            return [];
        }
    },

    async getMCQs(chapterId: string): Promise<MCQ[]> {
        const chapter = chapterList.find(c => c.id === chapterId);
        if (!chapter) return [];
        const exercise = chapter.exercises.find(e => e.id === 'mcqs');
        if (!exercise) return []; // Some chapters might not have MCQs

        try {
            const uri = await resolveUri(exercise.htmlSource);
            const content = await FileSystem.readAsStringAsync(uri);
            return parseMCQs(content);
        } catch (e) {
            console.error("Error loading MCQs:", e);
            return [];
        }
    },

    async getHtmlUri(chapterId: string, exerciseId: string): Promise<string | null> {
        const chapter = chapterList.find(c => c.id === chapterId);
        if (!chapter) return null;
        const exercise = chapter.exercises.find(e => e.id === exerciseId);
        if (!exercise) return null;
        return resolveUri(exercise.htmlSource);
    }
};
