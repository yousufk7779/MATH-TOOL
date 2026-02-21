export interface Chapter {
  id: string;
  number: number;
  name: string;
  color: string;
  locked?: boolean;
}

export const class10Chapters: Chapter[] = [];

export function getChapter(chapterId: string): Chapter | undefined {
  return class10Chapters.find((ch) => ch.id === chapterId);
}
