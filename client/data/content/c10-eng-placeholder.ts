// Class 10 English (JKBOSE — Tulip Series Book-X): Step 1 placeholder content.
// Same shape as Class 11 English chapters (Reference / Q & A / MCQs), so the inner screen matches exactly.
// Replaced chapter by chapter in Step 2 with content from the JKBOSE Class 10 English Question Bank.

interface Entry {
  id: string;
  number: number;
  name: string;
  category: string;
  gradient: [string, string];
}

const card = (accent: string, heading: string, line: string) => `
<style>
  p, li, div { text-align: justify !important; }
  h1, h2, h3, h4, h5, h6, .text-center { text-align: center !important; }
</style>
<div style="padding: 12px; color: #E0E0E0; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  <div style="background: rgba(0,0,0,0.25); border: 1.5px solid ${accent}; border-radius: 12px; padding: 18px; margin-top: 10px;">
    <h2 class="text-center" style="color: ${accent}; font-weight: bold; margin: 0 0 8px 0; font-size: 20px;">${heading}</h2>
    <p class="text-center" style="color: #FFFFFF; margin: 0; font-size: 15px;">${line}</p>
  </div>
</div>`;

export function buildC10EnglishPlaceholder(e: Entry) {
  const accent = e.gradient[0];
  const label =
    e.category === "Grammar & Writing Skills" ? `Module ${e.number}: ${e.name}` : `${e.category} • ${e.number}: ${e.name}`;
  return {
    id: e.id,
    number: e.number,
    title: e.name,
    isHtmlView: true,
    htmlOverview: card(accent, `📖 ${label}`, "Reference notes for this chapter are being prepared from the JKBOSE Class 10 English Question Bank."),
    htmlExercises: {
      "ex-c10-eng": card(accent, `📝 ${label}`, "Textbook questions with exam-oriented answers will appear here."),
    },
    exercises: [{ id: "ex-c10-eng", name: "Q & A", questions: [] }],
    mcqs: [],
  };
}
