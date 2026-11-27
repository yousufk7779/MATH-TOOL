// Class 9 Urdu (JKBOSE — بہارستانِ اردو، جماعت نہم): placeholder shown until a chapter is written.
// Same Reference / Q & A / MCQs shape as the other language chapters; replaced chapter by chapter.

interface Entry {
  id: string;
  number: number;
  name: string;
  category: string;
  term: number;
  gradient: [string, string];
}

const CATEGORY_UR: Record<string, string> = {
  Prose: "حصۂ نثر",
  Ghazals: "غزلیات",
  Nazms: "نظمیں",
  "Grammar & Writing": "قواعد اور تخلیقی کام",
};

const card = (accent: string, heading: string, line: string) => `
<div style="padding: 12px; color: #E0E0E0; line-height: 2.1; font-size: 17px; text-align: right;">
  <div style="background: rgba(0,0,0,0.25); border: 1.5px solid ${accent}; border-radius: 12px; padding: 18px; margin-top: 10px;">
    <div style="color: ${accent}; font-weight: bold; margin: 0 0 8px 0; font-size: 20px; text-align: center;">${heading}</div>
    <div style="color: #FFFFFF; margin: 0; font-size: 16px; text-align: center;">${line}</div>
  </div>
</div>`;

export function buildC9UrduPlaceholder(e: Entry) {
  const accent = e.gradient[0];
  const term = e.term === 1 ? "میقاتِ اول" : e.term === 2 ? "میقاتِ دوم" : "";
  const label = `${CATEGORY_UR[e.category] || ""} • ${e.name}${term ? ` • ${term}` : ""}`;
  return {
    id: e.id,
    number: e.number,
    title: e.name,
    isHtmlView: true,
    htmlOverview: card(accent, `📖 ${label}`, "اس سبق کا حوالہ جاتی مواد تیار کیا جا رہا ہے۔"),
    htmlExercises: {
      "ex-c9-urdu": card(accent, `📝 ${e.name}`, "نصابی کتاب کے سوالات اور اُن کے جوابات جلد یہاں شامل کیے جائیں گے۔"),
    },
    exercises: [{ id: "ex-c9-urdu", name: "سوال و جواب", questions: [] }],
    mcqs: [],
  };
}
