
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { chapterList } from '../data/chapterRegistry';

console.log("[ContentService] Module loading...");

// Types for our content model
export interface QuestionBlock {
    id: string; // The HTML ID we generated (chX_exY_qZ)
    label: string; // The display label (e.g. "1", "1(i)", "Q1")
    type: string;
    htmlUri: string; // Local URI to the full HTML file
}

export interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

// Validates and resolves the local URI for an asset
async function resolveUri(htmlSource: any): Promise<string> {
    try {
        if (!htmlSource) {
            throw new Error("Invalid htmlSource");
        }

        const asset = Asset.fromModule(htmlSource);
        await asset.downloadAsync(); // Ensure it's available locally

        let uri = asset.localUri || asset.uri;

        // If we have a local URI but it doesn't have the protocol, add it
        if (uri && !uri.startsWith("file://") && !uri.startsWith("http")) {
            uri = `file://${uri}`;
        }

        // Prefer localUri if available to avoid http (dev server) issues
        if (asset.localUri) {
            return asset.localUri;
        }

        return uri;
    } catch (e) {
        console.error("[ContentService] Failed to resolve URI:", e);
        throw e;
    }
}

// Scans the HTML content string to find question blocks
function scanQuestions(htmlContent: string, htmlUri: string): QuestionBlock[] {
    const questions: QuestionBlock[] = [];

    // Regex to find IDs and Labels we injected
    const regex = /<div[^>]+id="([^"]+)"(?:[^>]*data-label="([^"]*)")?(?:[^>]*data-type="([^"]*)")?.*?>/g;

    let match;
    while ((match = regex.exec(htmlContent)) !== null) {
        const id = match[1];
        const label = match[2];
        const type = match[3] || 'sub';

        if (!id.includes('ch')) continue;

        let displayLabel = label || "";

        if (!displayLabel) {
            const parts = id.split('_');
            const last = parts[parts.length - 1];
            if (last.startsWith('q')) {
                displayLabel = last.replace('q', '');
            } else {
                displayLabel = last;
            }
        }

        questions.push({
            id,
            label: displayLabel,
            type: type,
            htmlUri
        });
    }

    const parentIds = new Set<string>();
    questions.forEach(q => {
        const parts = q.id.split('_');
        if (parts.length > 3) {
            const parentId_ = parts.slice(0, 3).join('_');
            parentIds.add(parentId_);
        }
    });

    return questions.filter(q => !parentIds.has(q.id));
}

function parseMCQs(htmlContent: string): MCQ[] {
    const mcqs: MCQ[] = [];
    const parts = htmlContent.split(/<div[^>]*class="content-box"[^>]*>/);

    parts.forEach((block, index) => {
        if (index === 0) return;

        const qContentMatch = block.match(/class="question">\s*([\s\S]*?)\s*<\/div>/);

        if (qContentMatch) {
            const questionHtml = qContentMatch[1].trim();
            const options: string[] = [];
            const optRegex = /class="option">\s*([\s\S]*?)\s*<\/div>/g;
            let optMatch;

            while ((optMatch = optRegex.exec(block)) !== null) {
                options.push(optMatch[1].trim());
            }

            const ansMatch = block.match(/class="correct-answer">\s*Answer:\s*\((\w)\)/);
            const validAns = ansMatch ? ansMatch[1] : '';

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
        const exercise = chapter.exercises.find(e => e.id === exerciseId);

        if (!exercise) {
            console.warn(`Exercise not found: ${exerciseId} in ${chapterId}`);
            return [];
        }

        try {
            const uri = await resolveUri(exercise.htmlSource);
            if (!uri) throw new Error("Could not resolve URI");

            const content = await FileSystem.readAsStringAsync(uri);
            return scanQuestions(content, uri);
        } catch (e) {
            console.error(`[ContentService] Error loading questions for ${chapterId} ${exerciseId}:`, e);
            return [];
        }
    },

    async getMCQs(chapterId: string): Promise<MCQ[]> {
        const chapter = chapterList.find(c => c.id === chapterId);
        if (!chapter) return [];
        const exercise = chapter.exercises.find(e => e.id === 'mcqs');
        if (!exercise) return [];

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
    },

    async getHtmlContent(chapterId: string, exerciseId: string): Promise<string | null> {
        const chapter = chapterList.find(c => c.id === chapterId);
        if (!chapter) return null;
        const exercise = chapter.exercises.find(e => e.id === exerciseId);
        if (!exercise) return null;

        try {
            const uri = await resolveUri(exercise.htmlSource);
            return FileSystem.readAsStringAsync(uri);
        } catch (e) {
            console.error("[ContentService] Failed to read HTML content:", e);
            return null;
        }
    }
};
