import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  id: string;
  title: string;
  content: string;
  gradientIndex: number; // For visual variety
  updatedAt: number; // Timestamp
}

const NOTES_STORAGE_KEY = '@jiguu_quick_notes';

export const getNotes = async (): Promise<Note[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to fetch notes', e);
    return [];
  }
};

export const saveNote = async (note: Note): Promise<void> => {
  try {
    const notes = await getNotes();
    const existingIndex = notes.findIndex((n) => n.id === note.id);
    
    let newNotes;
    if (existingIndex >= 0) {
      newNotes = [...notes];
      newNotes[existingIndex] = note;
    } else {
      newNotes = [note, ...notes]; // Add new notes to top
    }
    
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes));
  } catch (e) {
    console.error('Failed to save note', e);
    throw e;
  }
};

export const deleteNote = async (id: string): Promise<void> => {
  try {
    const notes = await getNotes();
    const newNotes = notes.filter((n) => n.id !== id);
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes));
  } catch (e) {
    console.error('Failed to delete note', e);
    throw e;
  }
};
