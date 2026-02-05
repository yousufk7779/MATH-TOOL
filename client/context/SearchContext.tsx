import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { useSpeechRecognitionEvent, useSpeechRecognitionEventNames, ExpoSpeechRecognitionModule } from "expo-speech-recognition";
import { search, SearchResult, buildSearchIndex } from "@/utils/search-engine";
import { Alert, PermissionsAndroid, Platform } from "react-native";

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

    // Voice Recognition Events
    useSpeechRecognitionEvent("start", () => setIsListening(true));
    useSpeechRecognitionEvent("end", () => setIsListening(false));
    useSpeechRecognitionEvent("result", (event) => {
        const transcript = event.results[0]?.transcript;
        if (transcript) {
            setQuery(transcript);
            setIsListening(false);
        }
    });
    useSpeechRecognitionEvent('error', (event) => {
        console.log('Voice error:', event.error, event.message);
        setIsListening(false);
    });

    // Request Permissions & Check Availability implementation
    const startVoiceSearch = useCallback(async () => {
        try {
            const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
            if (!result.granted) {
                Alert.alert("Permission Denied", "Microphone access is needed for voice search.");
                return;
            }

            ExpoSpeechRecognitionModule.start({
                lang: "en-US",
                interimResults: true,
                maxAlternatives: 1,
                continuous: false,
                requiresOnDeviceRecognition: false,
                addsPunctuation: false,
            });
        } catch (e) {
            console.error("Failed to start voice search", e);
        }
    }, []);

    const stopVoiceSearch = useCallback(() => {
        try {
            ExpoSpeechRecognitionModule.stop();
        } catch (e) {
            // ignore
        }
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
