
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ParsedText } from "@/components/ParsedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { Theorem } from "@/data/chapterContent";

interface TheoremCardProps {
    theorem: Theorem;
    chapterId: string;
}

const TheoremCard = memo(({ theorem, chapterId }: TheoremCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <ThemedText style={styles.number}>Theorem {theorem.number}</ThemedText>
                <ThemedText style={styles.title}>{theorem.name}</ThemedText>
            </View>

            <View style={styles.section}>
                <ThemedText style={styles.label}>Statement:</ThemedText>
                <ParsedText style={styles.statement} Component={ThemedText}>
                    {theorem.statement}
                </ParsedText>
            </View>

            {theorem.proof && theorem.proof.length > 0 && (
                <View style={styles.section}>
                    <ThemedText style={styles.label}>Proof:</ThemedText>
                    {theorem.proof.map((line, index) => (
                        <ParsedText key={index} style={styles.proofStep} Component={ThemedText}>
                            {line}
                        </ParsedText>
                    ))}
                </View>
            )}

            {theorem.example && (
                <View style={styles.section}>
                    <ThemedText style={styles.label}>Example:</ThemedText>
                    <ParsedText style={styles.example} Component={ThemedText}>
                        {theorem.example}
                    </ParsedText>
                </View>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: JiguuColors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        borderLeftWidth: 4,
        borderLeftColor: "#9C27B0",
    },
    header: {
        marginBottom: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: JiguuColors.border,
        paddingBottom: Spacing.sm,
    },
    number: {
        ...Typography.small,
        color: "#9C27B0", // Purple for theorems
        fontFamily: "Nunito_700Bold",
        marginBottom: Spacing.xs,
    },
    title: {
        ...Typography.h4,
        color: JiguuColors.textPrimary,
        fontFamily: "Kalam_700Bold",
    },
    section: {
        marginTop: Spacing.md,
    },
    label: {
        ...Typography.small,
        color: "#9C27B0",
        fontFamily: "Nunito_700Bold",
        marginBottom: Spacing.xs,
    },
    statement: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        lineHeight: 24,
        fontFamily: "Kalam_400Regular",
        textAlign: "justify",
    },
    proofStep: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        lineHeight: 22,
        marginBottom: Spacing.xs,
        fontFamily: "Kalam_400Regular",
        textAlign: "justify",
    },
    example: {
        ...Typography.small,
        color: JiguuColors.textSecondary,
        fontStyle: "italic",
        lineHeight: 22,
        fontFamily: "Kalam_400Regular",
        textAlign: "justify",
    },
});

export default TheoremCard;
