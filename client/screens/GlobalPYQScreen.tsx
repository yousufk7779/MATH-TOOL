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
    const [selectedColor, setSelectedColor] = useState<string>(JiguuColors.accent3); // Default color
    const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

    const years = useMemo(() => getAllPYQYears(), []);

    const questions = useMemo(() => {
        if (!selectedYear) return [];
        return getQuestionsForYear(selectedYear, selectedChapterId || undefined);
    }, [selectedYear, selectedChapterId]);

    const handleYearSelect = (year: string, color: string) => {
        setSelectedYear(year);
        setSelectedColor(color);
        setSelectedChapterId(null); // Reset filter on year change
    };

    const handleBackToYears = () => {
        setSelectedYear(null);
    };

    // Render Year Selection Grid
    if (!selectedYear) {
        return (
            <ScreenWrapper showBackButton={true}>
                <ScrollView contentContainerStyle={styles.content}>
                    <ThemedText style={styles.headerTitle}>Previous Year Papers</ThemedText>
                    <ThemedText style={styles.subTitle}>JKBOSE</ThemedText>

                    <View style={styles.grid}>
                        {years.map((year, index) => {
                            // Cycle through a few vibrant colors
                            const colors = [
                                "#00C853", // Green
                                "#FFAB00", // Amber
                                "#AA00FF", // Purple
                                "#00B8D4", // Cyan
                                JiguuColors.accent1,
                            ];
                            const color = colors[index % colors.length];

                            return (
                                <View key={year} style={styles.gridItem}>
                                    <ColorButton
                                        title={year}
                                        color={color}
                                        onPress={() => handleYearSelect(year, color)}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </ScreenWrapper>
        );
    }

    // Render Question List
    return (
        <ScreenWrapper showBackButton={true}>
            <View style={styles.headerContainer}>
                <View style={[styles.yearBadge, { backgroundColor: selectedColor }]}>
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
                            accentColor={selectedColor}
                            titleStyle={{ fontFamily: "Kalam_700Bold" }}
                            contentStyle={{ fontFamily: "Kalam_400Regular" }}
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
        fontFamily: "Kalam_700Bold",
    },
    subTitle: {
        ...Typography.body,
        color: JiguuColors.textSecondary,
        marginBottom: Spacing.xl,
        fontFamily: "Kalam_400Regular",
    },
    grid: {
        flexDirection: "column", // Stack vertically
        gap: Spacing.md,
        width: "100%",
        paddingHorizontal: Spacing.md,
    },
    gridItem: {
        width: "100%", // Full width
    },
    headerContainer: {
        padding: Spacing.md,
        flexDirection: "row",
        justifyContent: "center",
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
        fontFamily: "Kalam_700Bold",
    },
    emptyText: {
        textAlign: "center",
        marginTop: Spacing.xl,
        color: JiguuColors.textSecondary,
        fontFamily: "Kalam_400Regular",
    }
});
