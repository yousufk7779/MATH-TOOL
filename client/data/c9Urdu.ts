// Class 9 Urdu (JKBOSE — بہارستانِ اردو، جماعت نہم)
// Single source of truth for the Class 9 Urdu buttons: category, number, Urdu title, term and colour.
// Order and titles follow the book's contents page (فہرست); terms follow the JKBOSE Class IX Urdu syllabus.

import type { Chapter } from "./chapters";

export type C9UrduCategory = "Prose" | "Ghazals" | "Nazms" | "Grammar & Writing";

interface C9UrduEntry {
  id: string;
  number: number;
  /** Urdu title exactly as printed in the book */
  name: string;
  category: C9UrduCategory;
  /** Syllabus term (میقات): 1 or 2; 0 = in the book but not listed in the syllabus */
  term: 0 | 1 | 2;
  /** Two-stop gradient; [0] is also the chapter accent colour (kept light for readability on the dark theme). */
  gradient: [string, string];
}

export const C9_URDU: C9UrduEntry[] = [
  // حصۂ نثر — مضامین، ڈراما، افسانہ، ناول، خطوط، خاکہ
  { id: "c9-urdu-p1", number: 1, name: "اِنسانِ کامل ﷺ", category: "Prose", term: 1, gradient: ["#A770EF", "#6E48AA"] },
  { id: "c9-urdu-p2", number: 2, name: "انفارمیشن ٹیکنالوجی", category: "Prose", term: 1, gradient: ["#00C6FF", "#0072FF"] },
  { id: "c9-urdu-p3", number: 3, name: "اُردو کہاں پیدا ہوئی؟", category: "Prose", term: 1, gradient: ["#F39C12", "#D35400"] },
  { id: "c9-urdu-p4", number: 4, name: "دیوانِ مرحوم کی یاد میں", category: "Prose", term: 1, gradient: ["#EC008C", "#FC6767"] },
  { id: "c9-urdu-p5", number: 5, name: "ماحولیاتی آلودگی", category: "Prose", term: 1, gradient: ["#00B09B", "#96C93D"] },
  { id: "c9-urdu-p6", number: 6, name: "لاٹری کا ٹکٹ", category: "Prose", term: 2, gradient: ["#FF8A65", "#FF3D00"] },
  { id: "c9-urdu-p7", number: 7, name: "درد کا مارا", category: "Prose", term: 2, gradient: ["#E040FB", "#7B1FA2"] },
  { id: "c9-urdu-p8", number: 8, name: "میں ایک شہر تھا...... پونچھ", category: "Prose", term: 2, gradient: ["#FDC830", "#F37335"] },
  { id: "c9-urdu-p9", number: 9, name: "خطوط: میر مہدی مجروح اور منشی ہرگوپال تفتہ کے نام", category: "Prose", term: 2, gradient: ["#11998E", "#38EF7D"] },
  { id: "c9-urdu-p10", number: 10, name: "نذیر احمد کی کہانی کچھ میری کچھ اُن کی زبانی", category: "Prose", term: 2, gradient: ["#FF416C", "#FF4B2B"] },
  // غزلیات
  { id: "c9-urdu-gz1", number: 1, name: "فراقؔ گورکھپوری", category: "Ghazals", term: 1, gradient: ["#4FACFE", "#00F2FE"] },
  { id: "c9-urdu-gz2", number: 2, name: "میر غلام رسول نازکیؔ", category: "Ghazals", term: 1, gradient: ["#F7971E", "#FFD200"] },
  { id: "c9-urdu-gz3", number: 3, name: "فیض احمد فیضؔ", category: "Ghazals", term: 1, gradient: ["#00F260", "#0575E6"] },
  { id: "c9-urdu-gz4", number: 4, name: "تنہاؔ انصاری", category: "Ghazals", term: 1, gradient: ["#FC466B", "#3F5EFB"] },
  { id: "c9-urdu-gz5", number: 5, name: "شوریدہؔ کاشمیری", category: "Ghazals", term: 2, gradient: ["#FF5F6D", "#FFC371"] },
  { id: "c9-urdu-gz6", number: 6, name: "شہریارؔ", category: "Ghazals", term: 2, gradient: ["#DA22FF", "#9733EE"] },
  { id: "c9-urdu-gz7", number: 7, name: "عابدؔ مناوری", category: "Ghazals", term: 2, gradient: ["#1FA2FF", "#12D8FA"] },
  { id: "c9-urdu-gz8", number: 8, name: "پرتپال سنگھ بیتابؔ", category: "Ghazals", term: 2, gradient: ["#FF9966", "#FF5E62"] },
  // نظمیں اور مثنوی
  { id: "c9-urdu-nz1", number: 1, name: "تعلیم سے بے توجہی کا نتیجہ", category: "Nazms", term: 1, gradient: ["#F953C6", "#B91D73"] },
  { id: "c9-urdu-nz2", number: 2, name: "نئی تہذیب", category: "Nazms", term: 1, gradient: ["#A855F7", "#6D28D9"] },
  { id: "c9-urdu-nz3", number: 3, name: "بزمِ انجم", category: "Nazms", term: 2, gradient: ["#56CCF2", "#2F80ED"] },
  { id: "c9-urdu-nz4", number: 4, name: "کشمیر", category: "Nazms", term: 2, gradient: ["#00B09B", "#96C93D"] },
  { id: "c9-urdu-nz5", number: 5, name: "پری محل", category: "Nazms", term: 0, gradient: ["#FF512F", "#DD2476"] },
  { id: "c9-urdu-nz6", number: 6, name: "قبر", category: "Nazms", term: 2, gradient: ["#43CEA2", "#185A9D"] },
  { id: "c9-urdu-mt1", number: 7, name: "دنیا کی ناپائیداری (مثنوی)", category: "Nazms", term: 2, gradient: ["#F2994A", "#F2C94C"] },
  // قواعد اور تخلیقی کام — built from the syllabus (Term I + Term II)
  { id: "c9-urdu-g1", number: 1, name: "قواعد", category: "Grammar & Writing", term: 1, gradient: ["#56CCF2", "#2F80ED"] },
  { id: "c9-urdu-g2", number: 2, name: "تخلیقی کام (خطوط، مضمون، ای میل، اشتہار)", category: "Grammar & Writing", term: 1, gradient: ["#F2994A", "#F2C94C"] },
];

/** Chapter lists per category, in the shape ChapterListScreen expects (otherSubjectsData["Class 9 Urdu"]). */
export function c9UrduTopics(): Record<string, Chapter[]> {
  const topics: Record<string, Chapter[]> = {};
  for (const e of C9_URDU) {
    (topics[e.category] ||= []).push({ id: e.id, number: e.number, name: e.name, color: e.gradient[0] });
  }
  return topics;
}

export const C9_URDU_GRADIENTS: Record<string, string[]> = Object.fromEntries(
  C9_URDU.map((e) => [e.id, e.gradient]),
);
