import React, { memo, useState, useCallback, useMemo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { ColorButton } from "@/components/ColorButton";
import QuestionCard from "@/components/solution/QuestionCard";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { getAllPYQYears, getQuestionsForYear, AggregatedQuestion } from "@/data/pyqData";
import { class10Chapters as chapters } from "@/data/chapters";

export const GlobalPYQScreen = memo(function GlobalPYQScreen() {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

    const years = useMemo(() => getAllPYQYears(), []);

    const questions = useMemo(() => {
        if (!selectedYear) return [];
        return getQuestionsForYear(selectedYear, selectedChapterId || undefined);
    }, [selectedYear, selectedChapterId]);

    const handleYearSelect = (year: string) => {
        setSelectedYear(year);
        setSelectedChapterId(null); // Reset filter on year change
    };

    const handleBackToYears = () => {
        setSelectedYear(null);
    };

    // Render Year Selection Grid
    if (!selectedYear) {
        return (
            <ScreenWrapper>
                <ScrollView contentContainerStyle={styles.content}>
                    <ThemedText style={styles.headerTitle}>Previous Year Questions</ThemedText>
                    <ThemedText style={styles.subTitle}>Select a Year</ThemedText>

                    <View style={styles.grid}>
                        {years.map((year, index) => (
                            <View key={year} style={styles.gridItem}>
                                <ColorButton
                                    title={year}
                                    color={index % 2 === 0 ? JiguuColors.accent1 : JiguuColors.accent2}
                                    onPress={() => handleYearSelect(year)}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ScreenWrapper>
        );
    }

    // Render Question List
    return (
        <ScreenWrapper>
            <View style={styles.headerContainer}>
                <ColorButton
                    title="Change Year"
                    color={JiguuColors.surfaceLight}
                    onPress={handleBackToYears}
                    style={styles.backButton}
                />
                <View style={styles.yearBadge}>
                    <ThemedText style={styles.yearText}>{selectedYear}</ThemedText>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.listContent}>
                {/* Optional Chapter Filter could go here, for now showing all */}

                {questions.length === 0 ? (
                    <ThemedText style={styles.emptyText}>No questions found for this year.</ThemedText>
                ) : (
                    questions.map((item) => (
                        <QuestionCard
                            key={item.question.id}
                            question={item.question}
                            chapterId={item.chapterId}
                            accentColor={JiguuColors.accent3}
                        />
                    ))
                )}
            </ScrollView>
        </ScreenWrapper>
    );
});

const styles = StyleSheet.create({
    content: {
        padding: Spacing.xl,
        alignItems: "center",
    },
    listContent: {
        padding: Spacing.md,
        paddingBottom: 100,
    },
    headerTitle: {
        ...Typography.h2,
        color: JiguuColors.textPrimary,
        marginBottom: Spacing.xs,
        textAlign: "center",
    },
    subTitle: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        marginBottom: Spacing.xl,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: Spacing.md,
        width: "100%",
        justifyContent: "center",
    },
    gridItem: {
        width: "45%",
    },
    headerContainer: {
        padding: Spacing.md,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: JiguuColors.surface,
        borderBottomWidth: 1,
        borderBottomColor: JiguuColors.border,
    },
    backButton: {
        width: 130,
        height: 40,
    },
    yearBadge: {
        backgroundColor: JiguuColors.accent3,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.xl,
    },
    yearText: {
        ...Typography.h4,
        color: "#fff",
    },
    emptyText: {
        textAlign: "center",
        marginTop: Spacing.xl,
        color: JiguuColors.textSecondary,
    }
});
