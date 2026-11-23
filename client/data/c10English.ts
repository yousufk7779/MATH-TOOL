// Class 10 English (JKBOSE — Tulip Series Book-X)
// Single source of truth for the 22 Class 10 English buttons: category, number, title and colour.
// Step 1 (structure): titles are placeholders until the JKBOSE Question Bank PDF supplies the exact ones,
// except "The Proposal" and the two Grammar & Writing Skills modules, which the owner specified.

import type { Chapter } from "./chapters";

export type C10EnglishCategory =
  | "Prose"
  | "Poetry"
  | "Short Stories"
  | "Play"
  | "Grammar & Writing Skills";

interface C10EnglishEntry {
  id: string;
  number: number;
  name: string;
  category: C10EnglishCategory;
  /** Two-stop gradient in the Class Selector button style; [0] is also the chapter accent colour. */
  gradient: [string, string];
}

export const C10_ENGLISH: C10EnglishEntry[] = [
  // Prose — Chapters 1 to 7
  { id: "c10-eng-p1", number: 1, name: "Footprints without Feet", category: "Prose", gradient: ["#EC008C", "#FC6767"] },
  { id: "c10-eng-p2", number: 2, name: "An Excellent Father", category: "Prose", gradient: ["#00C6FF", "#0072FF"] },
  { id: "c10-eng-p3", number: 3, name: "From the Diary of a Young Girl", category: "Prose", gradient: ["#F39C12", "#D35400"] },
  { id: "c10-eng-p4", number: 4, name: "Long Walk to Freedom", category: "Prose", gradient: ["#00B09B", "#96C93D"] },
  { id: "c10-eng-p5", number: 5, name: "The Sermon at Benares", category: "Prose", gradient: ["#FF8A65", "#FF3D00"] },
  { id: "c10-eng-p6", number: 6, name: "Pappachi's Moth", category: "Prose", gradient: ["#E040FB", "#7B1FA2"] },
  { id: "c10-eng-p7", number: 7, name: "The Merchant of Venice", category: "Prose", gradient: ["#FDC830", "#F37335"] },
  // Poetry — Poems 8 to 15
  { id: "c10-eng-po8", number: 8, name: "Prayer", category: "Poetry", gradient: ["#11998E", "#38EF7D"] },
  { id: "c10-eng-po9", number: 9, name: "Miracles", category: "Poetry", gradient: ["#FF416C", "#FF4B2B"] },
  { id: "c10-eng-po10", number: 10, name: "When You Are Old", category: "Poetry", gradient: ["#4776E6", "#8E54E9"] },
  { id: "c10-eng-po11", number: 11, name: "Snowdrop", category: "Poetry", gradient: ["#F7971E", "#FFD200"] },
  { id: "c10-eng-po12", number: 12, name: "My Mother at Sixty-six", category: "Poetry", gradient: ["#00F260", "#0575E6"] },
  { id: "c10-eng-po13", number: 13, name: "An Evening Wet with Rain", category: "Poetry", gradient: ["#FC466B", "#3F5EFB"] },
  { id: "c10-eng-po14", number: 14, name: "The Tale of Custard the Dragon", category: "Poetry", gradient: ["#FF5F6D", "#FFC371"] },
  { id: "c10-eng-po15", number: 15, name: "Last Lesson of the Afternoon", category: "Poetry", gradient: ["#43CEA2", "#185A9D"] },
  // Short Stories — Stories 16 to 19
  { id: "c10-eng-s16", number: 16, name: "The Necklace", category: "Short Stories", gradient: ["#DA22FF", "#9733EE"] },
  { id: "c10-eng-s17", number: 17, name: "Abhiley", category: "Short Stories", gradient: ["#F953C6", "#B91D73"] },
  { id: "c10-eng-s18", number: 18, name: "The Servant", category: "Short Stories", gradient: ["#1FA2FF", "#12D8FA"] },
  { id: "c10-eng-s19", number: 19, name: "Dusk", category: "Short Stories", gradient: ["#FF9966", "#FF5E62"] },
  // Play — 20
  { id: "c10-eng-pl20", number: 20, name: "The Proposal", category: "Play", gradient: ["#FF007F", "#7928CA"] },
  // Grammar & Writing Skills — 2 modules
  { id: "c10-eng-g1", number: 1, name: "Grammar Rules & Exercises", category: "Grammar & Writing Skills", gradient: ["#56CCF2", "#2F80ED"] },
  { id: "c10-eng-g2", number: 2, name: "Writing Skills & Formats", category: "Grammar & Writing Skills", gradient: ["#F2994A", "#F2C94C"] },
];

/** Chapter lists per category, in the shape ChapterListScreen expects (otherSubjectsData["Class 10 English"]). */
export function c10EnglishTopics(): Record<string, Chapter[]> {
  const topics: Record<string, Chapter[]> = {};
  for (const e of C10_ENGLISH) {
    (topics[e.category] ||= []).push({ id: e.id, number: e.number, name: e.name, color: e.gradient[0] });
  }
  return topics;
}

export const C10_ENGLISH_GRADIENTS: Record<string, string[]> = Object.fromEntries(
  C10_ENGLISH.map((e) => [e.id, e.gradient]),
);
