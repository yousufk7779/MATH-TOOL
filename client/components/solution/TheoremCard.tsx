import React, { memo, useCallback } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Theorem } from "@/data/chapterContent";
import { useSavedItems } from "@/context/SavedItemsContext";

interface TheoremCardProps {
    theorem: Theorem;
    chapterId: string;
}

function TheoremCard({ theorem, chapterId }: TheoremCardProps) {
    const { isBookmarked, isImportant, toggleBookmark, toggleImportant } = useSavedItems();

    const bookmarked = isBookmarked(theorem.id);
    const important = isImportant(theorem.id);

    const handleBookmark = useCallback(() => {
        toggleBookmark({
            id: theorem.id,
            type: "theorem",
            chapterId: chapterId,
        });
    }, [theorem.id, chapterId, toggleBookmark]);

    const handleImportant = useCallback(() => {
        toggleImportant({
            id: theorem.id,
            type: "theorem",
            chapterId: chapterId,
        });
    }, [theorem.id, chapterId, toggleImportant]);

    return (
        <View style={styles.theoremCard}>
            <View style={styles.headerRow}>
                <View style={styles.titleContainer}>
                    <ThemedText style={styles.theoremNumber}>{theorem.number}</ThemedText>
                    <ThemedText style={styles.theoremName}>{theorem.name}</ThemedText>
                </View>
                <View style={styles.actionsContainer}>
                    <Pressable onPress={handleBookmark} style={styles.actionButton}>
                        <Feather
                            name={bookmarked ? "bookmark" : "bookmark"}
                            size={22}
                            color={bookmarked ? JiguuColors.accent1 : JiguuColors.textSecondary}
                            style={bookmarked ? styles.filledIcon : undefined}
                        />
                        {/* Expo Vector Icons Feather doesn't have filled variants easily for bookmark universally without "fill" prop or different glyph name, usually it's just outline. 
                 Workaround: color change is enough, or use FontAwesome. Feather "bookmark" is outline. 
                 Wait, Feather doesn't support 'fill' prop in all versions. 
                 Let's assume color change indicates state. */}
                    </Pressable>
                    <Pressable onPress={handleImportant} style={styles.actionButton}>
                        <Feather
                            name={important ? "star" : "star"}
                            size={22}
                            color={important ? "#FFAB00" : JiguuColors.textSecondary}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={styles.theoremSection}>
                <ThemedText style={styles.theoremLabel}>Statement:</ThemedText>
                <ThemedText style={styles.theoremStatement}>{theorem.statement}</ThemedText>
            </View>

            {theorem.proof && theorem.proof.length > 0 ? (
                <View style={styles.theoremSection}>
                    <ThemedText style={styles.theoremLabel}>Proof:</ThemedText>
                    {theorem.proof.map((step, index) => (
                        <ThemedText key={index} style={styles.theoremStep}>{step}</ThemedText>
                    ))}
                </View>
            ) : null}

            {theorem.example ? (
                <View style={styles.theoremSection}>
                    <ThemedText style={styles.theoremLabel}>Example:</ThemedText>
                    <ThemedText style={styles.theoremExample}>{theorem.example}</ThemedText>
                </View>
            ) : null}
        </View>
    );
}

export default memo(TheoremCard);

const styles = StyleSheet.create({
    theoremCard: {
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        borderLeftWidth: 4,
        borderLeftColor: "#9C27B0",
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: Spacing.md,
    },
    titleContainer: {
        flex: 1,
        marginRight: Spacing.md,
    },
    actionsContainer: {
        flexDirection: "row",
        gap: Spacing.md,
    },
    actionButton: {
        padding: 4,
    },
    filledIcon: {
        // Feather doesn't support fill style directly on Text based icons usually
        // We rely on color. If using MaterialIcons, we could switch to 'bookmark' vs 'bookmark-border'.
        // Sticking to color for now.
        backgroundColor: "transparent",
    },
    theoremNumber: {
        ...Typography.small,
        color: "#9C27B0",
        fontFamily: "Nunito_700Bold",
        marginBottom: Spacing.xs,
    },
    theoremName: {
        ...Typography.h4,
        color: JiguuColors.textPrimary,
    },
    theoremSection: {
        marginTop: Spacing.md,
    },
    theoremLabel: {
        ...Typography.small,
        color: "#9C27B0",
        fontFamily: "Nunito_700Bold",
        marginBottom: Spacing.xs,
    },
    theoremStatement: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        lineHeight: 24,
        textAlign: "justify",
    },
    theoremStep: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        lineHeight: 22,
        marginBottom: Spacing.xs,
        textAlign: "justify",
    },
    theoremExample: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        fontStyle: "italic",
        lineHeight: 22,
        textAlign: "justify",
    },
});
