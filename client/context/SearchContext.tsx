import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { search, SearchResult, buildSearchIndex } from "@/utils/search-engine";

interface SearchContextType {
    query: string;
    setQuery: (query: string) => void;
    results: SearchResult[];
    isListening: boolean;
    startVoiceSearch: () => void;
    stopVoiceSearch: () => void;
    isAvailable: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isListening, setIsListening] = useState(false);
    // Voice Disabled for stability in Expo Go
    const [isAvailable, setIsAvailable] = useState(false);

    // Initialize Index
    useEffect(() => {
        buildSearchIndex();
    }, []);

    // Handle Text Search
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setResults(search(query));
        }, 200); // Debounce
        return () => clearTimeout(timeOutId);
    }, [query]);

    const startVoiceSearch = useCallback(() => {
        Alert.alert("Voice Search", "Voice search works best in a development build. This feature is currently disabled in Expo Go.");
        // setIsListening(true); // Uncomment when native module is available
    }, []);

    const stopVoiceSearch = useCallback(() => {
        setIsListening(false);
    }, []);

    return (
        <SearchContext.Provider
            value={{
                query,
                setQuery,
                results,
                isListening,
                startVoiceSearch,
                stopVoiceSearch,
                isAvailable,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
}
