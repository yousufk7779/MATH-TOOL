import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SavedItemType = "question" | "theorem" | "example";

export interface SavedItem {
    id: string; // questionId or theoremId
    type: SavedItemType;
    chapterId: string;
    timestamp: number;
}

interface SavedItemsContextType {
    bookmarks: SavedItem[];
    importantItems: SavedItem[];
    toggleBookmark: (item: Omit<SavedItem, "timestamp">) => Promise<void>;
    toggleImportant: (item: Omit<SavedItem, "timestamp">) => Promise<void>;
    isBookmarked: (id: string) => boolean;
    isImportant: (id: string) => boolean;
    clearAll: () => Promise<void>;
}

const SavedItemsContext = createContext<SavedItemsContextType | undefined>(undefined);

const BOOKMARKS_KEY = "jiguu_bookmarks_v1";
const IMPORTANT_KEY = "jiguu_important_v1";

export function SavedItemsProvider({ children }: { children: ReactNode }) {
    const [bookmarks, setBookmarks] = useState<SavedItem[]>([]);
    const [importantItems, setImportantItems] = useState<SavedItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Load data on mount
    useEffect(() => {
        const loadData = async () => {
            try {
                const [bookmarksStr, importantStr] = await Promise.all([
                    AsyncStorage.getItem(BOOKMARKS_KEY),
                    AsyncStorage.getItem(IMPORTANT_KEY),
                ]);

                if (bookmarksStr) setBookmarks(JSON.parse(bookmarksStr));
                if (importantStr) setImportantItems(JSON.parse(importantStr));
            } catch (e) {
                console.error("Failed to load saved items", e);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const toggleBookmark = useCallback(async (item: Omit<SavedItem, "timestamp">) => {
        setBookmarks((prev) => {
            const exists = prev.some((i) => i.id === item.id);
            let newBookmarks;
            if (exists) {
                newBookmarks = prev.filter((i) => i.id !== item.id);
            } else {
                newBookmarks = [...prev, { ...item, timestamp: Date.now() }];
            }
            AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks)).catch(console.error);
            return newBookmarks;
        });
    }, []);

    const toggleImportant = useCallback(async (item: Omit<SavedItem, "timestamp">) => {
        setImportantItems((prev) => {
            const exists = prev.some((i) => i.id === item.id);
            let newImportant;
            if (exists) {
                newImportant = prev.filter((i) => i.id !== item.id);
            } else {
                newImportant = [...prev, { ...item, timestamp: Date.now() }];
            }
            AsyncStorage.setItem(IMPORTANT_KEY, JSON.stringify(newImportant)).catch(console.error);
            return newImportant;
        });
    }, []);

    const isBookmarked = useCallback((id: string) => {
        return bookmarks.some((item) => item.id === id);
    }, [bookmarks]);

    const isImportant = useCallback((id: string) => {
        return importantItems.some((item) => item.id === id);
    }, [importantItems]);

    const clearAll = useCallback(async () => {
        try {
            await AsyncStorage.multiRemove([BOOKMARKS_KEY, IMPORTANT_KEY]);
            setBookmarks([]);
            setImportantItems([]);
        } catch (e) {
            console.error("Failed to clear saved items", e);
        }
    }, []);

    return (
        <SavedItemsContext.Provider
            value={{
                bookmarks,
                importantItems,
                toggleBookmark,
                toggleImportant,
                isBookmarked,
                isImportant,
                clearAll,
            }}
        >
            {children}
        </SavedItemsContext.Provider>
    );
}

export function useSavedItems() {
    const context = useContext(SavedItemsContext);
    if (context === undefined) {
        throw new Error("useSavedItems must be used within a SavedItemsProvider");
    }
    return context;
}
