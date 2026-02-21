import React, { memo, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ColorButton } from "@/components/ColorButton";
import QuestionCard from "@/components/solution/QuestionCard";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { PYQSet, getChapterPYQs } from "@/data/pyqData";
import { EmptyState } from "@/components/EmptyState"; // Import EmptyState if available or inline

interface PYQSectionProps {
    chapterId: string;
    accentColor?: string;
    initialYear?: string;
    initialQuestionId?: string;
}

function PYQSection({ chapterId, accentColor = JiguuColors.accent3, initialYear, initialQuestionId }: PYQSectionProps) {
    const pyqSets = getChapterPYQs(chapterId);

    // Find initial set if provided
    const findInitialSet = () => {
        if (initialYear) {
            return pyqSets.find(s => s.year === initialYear) || null;
        }
        return null;
    }

    /* eslint-disable react-hooks/exhaustive-deps */
    const [selectedSet, setSelectedSet] = useState<PYQSet | null>(findInitialSet);

    React.useEffect(() => {
        if (initialYear) {
            const set = pyqSets.find(s => s.year === initialYear);
            if (set) setSelectedSet(set);
        }
    }, [initialYear, chapterId]);


    const handleYearSelect = useCallback((set: PYQSet) => {
        setSelectedSet(set);
    }, []);

    const handleBackToYears = useCallback(() => {
        setSelectedSet(null);
    }, []);

    if (pyqSets.length === 0) {
        return (
            <View style={styles.container}>
                <ThemedText style={styles.emptyText}>No Previous Years Questions available for this chapter yet.</ThemedText>
            </View>
        )
    }

    if (selectedSet) {
        return (
            <View style={styles.container}>
                <View style={styles.headerRow}>
                    <ColorButton
                        title="Back to Years"
                        color={JiguuColors.surfaceLight}
                        onPress={handleBackToYears}
                        style={styles.backButton}
                    />
                    <View style={[styles.yearBadge, { backgroundColor: accentColor }]}>
                        <ThemedText style={styles.yearText}>{selectedSet.year}</ThemedText>
                    </View>
                </View>

                {selectedSet.questions.map((q) => (
                    <QuestionCard
                        key={q.id}
                        question={q}
                        accentColor={accentColor}
                        chapterId={chapterId}
                        titleStyle={{ fontFamily: "Kalam_700Bold", color: "#fff" }}
                        contentStyle={{ fontFamily: "Kalam_400Regular", color: "#fff" }}
                    />
                ))}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ThemedText style={styles.title}>Select Year</ThemedText>
            <View style={styles.grid}>
                {pyqSets.map((set) => (
                    <View key={set.year} style={styles.gridItem}>
                        <ColorButton
                            title={set.year}
                            color={accentColor}
                            onPress={() => handleYearSelect(set)}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
}

export default memo(PYQSection);

const styles = StyleSheet.create({
    container: {
        paddingBottom: Spacing.xl,
    },
    title: {
        ...Typography.h4,
        color: JiguuColors.textPrimary,
        marginBottom: Spacing.md,
        textAlign: "center"
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: Spacing.md,
    },
    gridItem: {
        width: "47%", // roughly half minus gap
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: Spacing.lg,
    },
    backButton: {
        width: 120, // Smaller width for back button
        height: 40,
    },
    yearBadge: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,
        borderRadius: 20, // Rounded pill
    },
    yearText: {
        ...Typography.button,
        color: "#fff",
        fontSize: 14,
    },
    emptyText: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        textAlign: "center",
        marginTop: Spacing.xl,
    }
});
