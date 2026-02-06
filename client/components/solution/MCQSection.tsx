import React, { memo, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";
import { MCQ } from "@/data/chapterContent";

interface MCQSectionProps {
  mcqs: MCQ[];
  accentColor?: string;
  textStyle?: any;
}

function MCQSection({ mcqs, accentColor = "#9C27B0", textStyle }: MCQSectionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleSelect = (mcqId: string, option: string) => {
    if (!showAnswers) {
      setSelectedAnswers((prev) => ({ ...prev, [mcqId]: option }));
    }
  };

  const optionLabels = ["a", "b", "c", "d"];

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: accentColor }]}>
        <ThemedText style={[styles.headerText, textStyle]}>Practice MCQs</ThemedText>
      </View>

      {mcqs.map((mcq, mcqIndex) => (
        <View key={mcq.id} style={styles.mcqCard}>
          <ThemedText style={[styles.question, textStyle]}>
            {mcqIndex + 1}. {mcq.question}
          </ThemedText>
          <View style={styles.optionsGrid}>
            {mcq.options.map((option, optIndex) => {
              const optionLabel = optionLabels[optIndex];
              const isSelected = selectedAnswers[mcq.id] === optionLabel;
              const isCorrect = mcq.correctAnswer === optionLabel;
              const showResult = showAnswers && isSelected;

              return (
                <Pressable
                  key={optIndex}
                  style={[
                    styles.optionButton,
                    isSelected && !showAnswers && { backgroundColor: accentColor + "20", borderColor: accentColor },
                    showResult && isCorrect && styles.correctOption,
                    showResult && !isCorrect && styles.incorrectOption,
                    showAnswers && isCorrect && !isSelected && styles.correctOption,
                  ]}
                  onPress={() => handleSelect(mcq.id, optionLabel)}
                >
                  <View
                    style={[
                      styles.optionLabel,
                      isSelected && { backgroundColor: accentColor },
                      showResult && isCorrect && { backgroundColor: "#4CAF50" },
                      showResult && !isCorrect && { backgroundColor: "#F44336" },
                      showAnswers && isCorrect && !isSelected && { backgroundColor: "#4CAF50" },
                    ]}
                  >
                    <ThemedText
                      style={[styles.optionLabelText, isSelected && { color: "#fff" }]}
                    >
                      {optionLabel}
                    </ThemedText>
                  </View>
                  <ThemedText style={[styles.optionText, textStyle]}>{option}</ThemedText>
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}

      <Pressable
        style={({ pressed }) => [
          styles.checkButton,
          { backgroundColor: showAnswers ? "#4CAF50" : accentColor },
          pressed && { opacity: 0.8 },
        ]}
        onPress={() => setShowAnswers(!showAnswers)}
      >
        <Feather name={showAnswers ? "eye-off" : "check-circle"} size={18} color="#fff" />
        <ThemedText style={styles.checkButtonText}>
          {showAnswers ? "Hide Answers" : "Check Answers"}
        </ThemedText>
      </Pressable>
    </View>
  );
}

export default memo(MCQSection);

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    overflow: "hidden",
    marginBottom: Spacing.lg,
  },
  header: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    alignItems: "center",
  },
  headerText: {
    ...Typography.button,
    color: "#fff",
  },
  mcqCard: {
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
  },
  question: {
    ...Typography.body,
    fontFamily: "Nunito_600SemiBold",
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.sm,
  },
  optionsGrid: {
    gap: Spacing.xs,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surfaceLight,
    borderRadius: BorderRadius.xs,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: "transparent",
  },
  correctOption: {
    backgroundColor: "#4CAF50" + "20",
    borderColor: "#4CAF50",
  },
  incorrectOption: {
    backgroundColor: "#F44336" + "20",
    borderColor: "#F44336",
  },
  optionLabel: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: JiguuColors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.sm,
  },
  optionLabelText: {
    ...Typography.caption,
    fontFamily: "Nunito_700Bold",
    color: JiguuColors.textSecondary,
    textTransform: "uppercase",
  },
  optionText: {
    ...Typography.small,
    color: JiguuColors.textPrimary,
    flex: 1,
  },
  checkButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  checkButtonText: {
    ...Typography.button,
    color: "#fff",
  },
});
