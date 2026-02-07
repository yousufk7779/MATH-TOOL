import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Animated, Platform, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSearch } from "@/context/SearchContext";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

export function GlobalSearchBar() {
    const { query, setQuery, isListening, startVoiceSearch, stopVoiceSearch } = useSearch();
    const [isFocused, setIsFocused] = useState(false);
    const pulseAnim = useRef(new Animated.Value(1)).current;

    // Pulse animation when listening
    useEffect(() => {
        if (isListening) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnim, {
                        toValue: 1.5,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        } else {
            pulseAnim.setValue(1);
        }
    }, [isListening, pulseAnim]);

    const handleMicPress = () => {
        if (isListening) {
            stopVoiceSearch();
        } else {
            startVoiceSearch();
        }
    };

    return (
        <View style={[
            styles.container,
            isFocused && { borderColor: JiguuColors.accent2 }
        ]}>
            <Pressable onPress={() => {
                if (isFocused || query.length > 0) {
                    setQuery("");
                    Keyboard.dismiss();
                    setIsFocused(false);
                }
            }}>
                <Feather
                    name={isFocused || query.length > 0 ? "arrow-left" : "search"}
                    size={20}
                    color={JiguuColors.textSecondary}
                    style={styles.searchIcon}
                />
            </Pressable>
            <TextInput
                style={styles.input}
                placeholder={isListening ? "Listening..." : "Search chapters, questions..."}
                placeholderTextColor={JiguuColors.textSecondary}
                value={query}
                onChangeText={setQuery}
                returnKeyType="search"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {query.length > 0 && (
                <Pressable onPress={() => setQuery("")} style={styles.clearButton}>
                    <Feather name="x" size={16} color={JiguuColors.textSecondary} />
                </Pressable>
            )}
            <Pressable onPress={handleMicPress} style={styles.micButton}>
                <Animated.View style={[
                    styles.micCircle,
                    isListening && {
                        backgroundColor: JiguuColors.accent1,
                        transform: [{ scale: pulseAnim }],
                        opacity: 0.8
                    }
                ]}>
                    <Feather
                        name={isListening ? "mic" : "mic"}
                        size={20}
                        color={isListening ? "#FFF" : JiguuColors.accent1}
                    />
                </Animated.View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.full,
        paddingHorizontal: Spacing.md,
        height: 44,
        width: "100%",
        borderWidth: 1.5,
        borderColor: JiguuColors.border,
    },
    searchIcon: {
        marginRight: Spacing.sm,
    },
    input: {
        flex: 1,
        color: JiguuColors.textPrimary,
        ...Typography.body,
        height: "100%",
        fontFamily: "Kalam_400Regular",
    },
    clearButton: {
        padding: Spacing.xs,
    },
    micButton: {
        padding: Spacing.xs,
        marginLeft: Spacing.xs,
    },
    micCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    }
});
