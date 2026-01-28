import React, { memo, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { Question } from "@/data/chapterContent";

interface QuestionCardProps {
  question: Question;
  accentColor?: string;
}

function QuestionCard({ question, accentColor = JiguuColors.quadraticEquations }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.questionBox, { borderLeftColor: accentColor }]}>
        <ThemedText style={[styles.questionNumber, { color: accentColor }]}>
          {question.number}
        </ThemedText>
        <ThemedText style={styles.questionText}>{question.question}</ThemedText>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.toggleButton,
          { backgroundColor: accentColor + "15" },
          pressed && { opacity: 0.7 },
        ]}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <ThemedText style={[styles.toggleText, { color: accentColor }]}>
          {isExpanded ? "Hide Solution" : "View Solution"}
        </ThemedText>
        <Feather
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={accentColor}
        />
      </Pressable>

      {isExpanded ? (
        <View style={styles.solutionBox}>
          <ThemedText style={styles.solutionLabel}>Solution:</ThemedText>
          {question.solution.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={[styles.stepDot, { backgroundColor: accentColor }]} />
              <ThemedText style={styles.stepText}>{step}</ThemedText>
            </View>
          ))}
          <View style={[styles.answerBox, { backgroundColor: "#4CAF50" + "15", borderColor: "#4CAF50" }]}>
            <ThemedText style={styles.answerText}>{question.answer}</ThemedText>
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default memo(QuestionCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
    overflow: "hidden",
  },
  questionBox: {
    padding: Spacing.md,
    borderLeftWidth: 3,
  },
  questionNumber: {
    ...Typography.small,
    fontFamily: "Nunito_700Bold",
    marginBottom: Spacing.xs,
  },
  questionText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 24,
    textAlign: "justify",
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.sm,
    gap: Spacing.xs,
  },
  toggleText: {
    ...Typography.small,
    fontFamily: "Nunito_600SemiBold",
  },
  solutionBox: {
    padding: Spacing.md,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
  },
  solutionLabel: {
    ...Typography.small,
    fontFamily: "Nunito_700Bold",
    color: "#4CAF50",
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.xs,
  },
  stepDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
    marginRight: Spacing.sm,
  },
  stepText: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
    textAlign: "justify",
  },
  answerBox: {
    marginTop: Spacing.md,
    padding: Spacing.sm,
    borderRadius: BorderRadius.xs,
    borderWidth: 1,
  },
  answerText: {
    ...Typography.body,
    fontFamily: "Nunito_700Bold",
    color: "#4CAF50",
    textAlign: "justify",
  },
});
