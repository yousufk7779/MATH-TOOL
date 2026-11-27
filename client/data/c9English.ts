// Class 9 English (JKBOSE — Tulip Series Book-IX)
// Single source of truth for the Class 9 English buttons: category, number, title and colour.
// Structure and colours replicated 1:1 from Class 10 English (c10English.ts).
// Chapter list and order follow the Tulip Series Book-IX contents page (22 lessons) plus 2 syllabus modules.

import type { Chapter } from "./chapters";

export type C9EnglishCategory =
  | "Prose"
  | "Poetry"
  | "Short Stories"
  | "Plays"
  | "Grammar & Writing Skills";

interface C9EnglishEntry {
  id: string;
  number: number;
  name: string;
  category: C9EnglishCategory;
  /** Two-stop gradient in the Class Selector button style; [0] is also the chapter accent colour. */
  gradient: [string, string];
}

export const C9_ENGLISH: C9EnglishEntry[] = [
  // Prose — Chapters 1 to 6
  { id: "c9-eng-p1", number: 1, name: "Packing", category: "Prose", gradient: ["#EC008C", "#FC6767"] },
  { id: "c9-eng-p2", number: 2, name: "Gulliver in Lilliput", category: "Prose", gradient: ["#00C6FF", "#0072FF"] },
  { id: "c9-eng-p3", number: 3, name: "Saint of the Gutters", category: "Prose", gradient: ["#F39C12", "#D35400"] },
  { id: "c9-eng-p4", number: 4, name: "The Fun They Had", category: "Prose", gradient: ["#00B09B", "#96C93D"] },
  { id: "c9-eng-p5", number: 5, name: "The Tempest", category: "Prose", gradient: ["#FF8A65", "#FF3D00"] },
  { id: "c9-eng-p6", number: 6, name: "How a Client was Saved", category: "Prose", gradient: ["#E040FB", "#7B1FA2"] },
  // Poetry — Poems 7 to 16
  { id: "c9-eng-po7", number: 7, name: "No Men Are Foreign", category: "Poetry", gradient: ["#FDC830", "#F37335"] },
  { id: "c9-eng-po8", number: 8, name: "To Blossoms", category: "Poetry", gradient: ["#11998E", "#38EF7D"] },
  { id: "c9-eng-po9", number: 9, name: "Beauty", category: "Poetry", gradient: ["#FF416C", "#FF4B2B"] },
  { id: "c9-eng-po10", number: 10, name: "The Road Not Taken", category: "Poetry", gradient: ["#4776E6", "#8E54E9"] },
  { id: "c9-eng-po11", number: 11, name: "I Cannot Remember My Mother", category: "Poetry", gradient: ["#F7971E", "#FFD200"] },
  { id: "c9-eng-po12", number: 12, name: "On Killing a Tree", category: "Poetry", gradient: ["#00F260", "#0575E6"] },
  { id: "c9-eng-po13", number: 13, name: "Cart Driver", category: "Poetry", gradient: ["#FC466B", "#3F5EFB"] },
  { id: "c9-eng-po14", number: 14, name: "To the Cuckoo", category: "Poetry", gradient: ["#FF5F6D", "#FFC371"] },
  { id: "c9-eng-po15", number: 15, name: "Palanquin Bearers", category: "Poetry", gradient: ["#43CEA2", "#185A9D"] },
  { id: "c9-eng-po16", number: 16, name: "The Child’s Prayer", category: "Poetry", gradient: ["#DA22FF", "#9733EE"] },
  // Short Stories — Stories 17 to 20
  { id: "c9-eng-s17", number: 17, name: "The Adventures of Toto", category: "Short Stories", gradient: ["#F953C6", "#B91D73"] },
  { id: "c9-eng-s18", number: 18, name: "Old Man at the Bridge", category: "Short Stories", gradient: ["#1FA2FF", "#12D8FA"] },
  { id: "c9-eng-s19", number: 19, name: "The Last Leaf", category: "Short Stories", gradient: ["#FF9966", "#FF5E62"] },
  { id: "c9-eng-s20", number: 20, name: "The Happy Prince", category: "Short Stories", gradient: ["#FF007F", "#7928CA"] },
  // Plays — 21 and 22
  { id: "c9-eng-pl21", number: 21, name: "A Basketful of Sea Trouts", category: "Plays", gradient: ["#8E2DE2", "#4A00E0"] },
  { id: "c9-eng-pl22", number: 22, name: "If I were You", category: "Plays", gradient: ["#FF512F", "#DD2476"] },
  // Grammar & Writing Skills — 2 modules (built from the JKBOSE Class IX syllabus)
  { id: "c9-eng-g1", number: 1, name: "Grammar Rules & Exercises", category: "Grammar & Writing Skills", gradient: ["#56CCF2", "#2F80ED"] },
  { id: "c9-eng-g2", number: 2, name: "Writing Skills & Formats", category: "Grammar & Writing Skills", gradient: ["#F2994A", "#F2C94C"] },
];

/** Chapter lists per category, in the shape ChapterListScreen expects (otherSubjectsData["Class 9 English"]). */
export function c9EnglishTopics(): Record<string, Chapter[]> {
  const topics: Record<string, Chapter[]> = {};
  for (const e of C9_ENGLISH) {
    (topics[e.category] ||= []).push({ id: e.id, number: e.number, name: e.name, color: e.gradient[0] });
  }
  return topics;
}

export const C9_ENGLISH_GRADIENTS: Record<string, string[]> = Object.fromEntries(
  C9_ENGLISH.map((e) => [e.id, e.gradient]),
);
